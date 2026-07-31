/**
 * Fully fixes preferredplumbingsolution.com → callpreferredplumbing.com remaps:
 * 1) Clears zone Single Redirect catch-alls (they run BEFORE Bulk/Workers)
 * 2) Ensures account Bulk Redirect list + rule are active
 * 3) Verifies radiant / water-heaters land on /services/...
 *
 * Auth: uses CLOUDFLARE_API_TOKEN if set, otherwise Wrangler OAuth config.
 */

import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const API = 'https://api.cloudflare.com/client/v4'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '6972c532d902c84b1793316ed3497124'
const OLD_ZONE = 'preferredplumbingsolution.com'
const LIST_NAME = 'preferred_plumbing_old_domain'
const RULE_REF = 'enable_preferred_plumbing_old_domain_redirects'
const CSV_PATH = resolve(dirname(fileURLToPath(import.meta.url)), '../redirects/cloudflare-bulk-redirects.csv')

function parseTomlSimple(text) {
  const out = {}
  for (const line of text.split(/\r?\n/)) {
    const m = line.match(/^\s*([A-Za-z0-9_]+)\s*=\s*"(.*)"\s*$/)
    if (m) out[m[1]] = m[2]
  }
  return out
}

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name)
    if (name.isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

function loadWranglerToken() {
  if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN
  const roots = [
    join(process.env.APPDATA || '', 'xdg.config', '.wrangler'),
    join(homedir(), '.wrangler'),
    join(process.env.LOCALAPPDATA || '', 'xdg.config', '.wrangler'),
  ]
  for (const root of roots) {
    for (const f of walk(root)) {
      if (!/\.(toml|json)$/i.test(f)) continue
      const text = readFileSync(f, 'utf8')
      if (!/oauth_token|access_token|api_token|deprecatedApiToken/i.test(text)) continue
      if (f.endsWith('.json')) {
        try {
          const j = JSON.parse(text)
          const t =
            j.oauth_token ||
            j.access_token ||
            j.api_token ||
            j.oauthToken?.value ||
            j.accessToken?.value ||
            j.deprecatedApiToken
          if (t) return typeof t === 'string' ? t : t.value || t
        } catch {
          /* ignore */
        }
      } else {
        const cfg = parseTomlSimple(text)
        if (cfg.oauth_token || cfg.access_token || cfg.api_token) {
          return cfg.oauth_token || cfg.access_token || cfg.api_token
        }
      }
    }
  }
  return null
}

const token = loadWranglerToken()
if (!token) {
  console.error('No Cloudflare auth found. Set CLOUDFLARE_API_TOKEN or run wrangler login.')
  process.exit(1)
}

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

async function cf(path, { method = 'GET', body } = {}) {
  const res = await fetch(`${API}${path}`, {
    method,
    headers,
    body: body !== undefined ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  return json
}

function parseCsv(text) {
  const lines = text.trim().split(/\r?\n/).slice(1)
  const items = []
  const seen = new Set()
  for (const line of lines) {
    if (!line.trim()) continue
    const [source_url, target_url, status_code, preserve_query_string, subpath_matching, preserve_path_suffix] =
      line.split(',')
    const variants = [source_url]
    if (source_url.startsWith('https://')) {
      variants.push(`http://${source_url.slice('https://'.length)}`)
    }
    for (const src of variants) {
      if (seen.has(src)) continue
      seen.add(src)
      items.push({
        redirect: {
          source_url: src,
          target_url,
          status_code: Number(status_code) || 301,
          preserve_query_string: String(preserve_query_string).toUpperCase() === 'TRUE',
          subpath_matching: String(subpath_matching).toUpperCase() === 'TRUE',
          preserve_path_suffix: String(preserve_path_suffix).toUpperCase() === 'TRUE',
        },
      })
    }
  }
  return items
}

async function waitForOp(operationId) {
  for (let i = 0; i < 60; i++) {
    const op = await cf(`/accounts/${ACCOUNT_ID}/rules/lists/bulk_operations/${operationId}`)
    if (!op.success) throw new Error(JSON.stringify(op.errors))
    if (op.result.status === 'completed') return
    if (op.result.status === 'failed') throw new Error(JSON.stringify(op.result))
    await new Promise((r) => setTimeout(r, 1000))
  }
  throw new Error(`Timed out waiting for bulk op ${operationId}`)
}

async function clearZoneSingleRedirects(zoneId) {
  const entry = await cf(`/zones/${zoneId}/rulesets/phases/http_request_dynamic_redirect/entrypoint`)
  if (!entry.success) {
    if (entry.errors?.[0]?.code === 10000 || /not found|does not exist/i.test(JSON.stringify(entry.errors || []))) {
      console.log('No zone Single Redirect ruleset (ok)')
      return
    }
    console.log('Zone redirect ruleset read:', JSON.stringify(entry.errors || entry, null, 2))
    return
  }

  const rules = entry.result?.rules || []
  console.log(`Found ${rules.length} zone Single Redirect rule(s):`)
  for (const r of rules) {
    console.log(` - ${r.description || r.ref || r.id}: ${r.expression}`)
  }

  if (!rules.length) {
    console.log('Zone Single Redirects already empty')
    return
  }

  // Wipe all Single Redirects on the old zone — Bulk + Worker own cutover.
  const put = await cf(`/zones/${zoneId}/rulesets/${entry.result.id}`, {
    method: 'PUT',
    body: { rules: [] },
  })
  if (!put.success) {
    console.error('FAILED to clear zone Single Redirects:', JSON.stringify(put.errors, null, 2))
    console.error('Create an API token with Zone → Dynamic Redirects Edit (or Zone Rulesets Edit) for this zone.')
    process.exit(2)
  }
  console.log('Cleared all zone Single Redirect rules')
}

async function clearPageRules(zoneId) {
  const list = await cf(`/zones/${zoneId}/pagerules`)
  if (!list.success) {
    console.log('Page Rules read skipped:', JSON.stringify(list.errors))
    return
  }
  for (const rule of list.result || []) {
    const isForward = JSON.stringify(rule).includes('forwarding_url')
    console.log(`Page Rule ${rule.id} status=${rule.status} forwarding=${isForward}`)
    if (isForward) {
      const del = await cf(`/zones/${zoneId}/pagerules/${rule.id}`, { method: 'DELETE' })
      if (!del.success) {
        console.error('Failed deleting page rule', rule.id, del.errors)
      } else {
        console.log('Deleted forwarding Page Rule', rule.id)
      }
    }
  }
}

async function syncBulk(items) {
  const lists = await cf(`/accounts/${ACCOUNT_ID}/rules/lists`)
  if (!lists.success) throw new Error(JSON.stringify(lists.errors))
  let list = (lists.result || []).find((l) => l.name === LIST_NAME)
  if (!list) {
    const created = await cf(`/accounts/${ACCOUNT_ID}/rules/lists`, {
      method: 'POST',
      body: {
        name: LIST_NAME,
        description: 'Old preferredplumbingsolution.com → callpreferredplumbing.com',
        kind: 'redirect',
      },
    })
    if (!created.success) throw new Error(JSON.stringify(created.errors))
    list = created.result
  }

  console.log(`Syncing ${items.length} bulk redirect items…`)
  const op = await cf(`/accounts/${ACCOUNT_ID}/rules/lists/${list.id}/items`, {
    method: 'PUT',
    body: items,
  })
  if (!op.success) throw new Error(JSON.stringify(op.errors))
  await waitForOp(op.result.operation_id)

  const desired = {
    ref: RULE_REF,
    description: 'Preferred Plumbing old-domain path remaps',
    expression: `http.request.full_uri in $${LIST_NAME}`,
    action: 'redirect',
    action_parameters: {
      from_list: { name: LIST_NAME, key: 'http.request.full_uri' },
    },
    enabled: true,
  }

  const entry = await cf(`/accounts/${ACCOUNT_ID}/rulesets/phases/http_request_redirect/entrypoint`)
  if (!entry.success || !entry.result?.id) {
    const created = await cf(`/accounts/${ACCOUNT_ID}/rulesets`, {
      method: 'POST',
      body: {
        name: 'Bulk Redirects',
        kind: 'root',
        phase: 'http_request_redirect',
        rules: [desired],
      },
    })
    if (!created.success) throw new Error(JSON.stringify(created.errors))
    console.log('Created account Bulk Redirect rule')
    return
  }

  const rules = Array.isArray(entry.result.rules) ? [...entry.result.rules] : []
  const idx = rules.findIndex((r) => r.ref === RULE_REF || r.description?.includes('Preferred Plumbing old-domain'))
  if (idx >= 0) rules[idx] = { id: rules[idx].id, ...desired }
  else rules.unshift(desired)

  const put = await cf(`/accounts/${ACCOUNT_ID}/rulesets/${entry.result.id}`, {
    method: 'PUT',
    body: {
      rules: rules.map(({ id, ref, description, expression, action, action_parameters, enabled }) =>
        id
          ? { id, ref, description, expression, action, action_parameters, enabled }
          : { ref, description, expression, action, action_parameters, enabled },
      ),
    },
  })
  if (!put.success) throw new Error(JSON.stringify(put.errors))
  console.log('Account Bulk Redirect rule synced')
}

async function verify() {
  const urls = [
    [
      'https://www.preferredplumbingsolution.com/radiant-heating-and-in-floor-systems',
      'https://www.callpreferredplumbing.com/services/radiant-heat',
    ],
    [
      'https://www.preferredplumbingsolution.com/water-heaters',
      'https://www.callpreferredplumbing.com/services/water-heaters',
    ],
    ['http://preferredplumbingsolution.com/', 'https://www.callpreferredplumbing.com/'],
  ]

  let ok = true
  for (const [src, expect] of urls) {
    const res = await fetch(src, { method: 'HEAD', redirect: 'manual' })
    const loc = res.headers.get('location')
    const pass = res.status === 301 && loc === expect
    console.log(`${pass ? 'OK' : 'FAIL'} ${src}`)
    console.log(`     → ${res.status} ${loc}`)
    if (!pass) ok = false
  }
  return ok
}

async function main() {
  console.log('Auth ready')

  const zones = await cf(`/zones?name=${encodeURIComponent(OLD_ZONE)}`)
  if (!zones.success || !zones.result?.[0]) {
    console.error('Could not resolve zone', OLD_ZONE, zones.errors || zones)
    process.exit(1)
  }
  const zoneId = zones.result[0].id
  console.log(`Zone ${OLD_ZONE} (${zoneId})`)

  await clearZoneSingleRedirects(zoneId)
  await clearPageRules(zoneId)

  const items = parseCsv(readFileSync(CSV_PATH, 'utf8'))
  await syncBulk(items)

  console.log('\nWaiting 3s for edge propagation…')
  await new Promise((r) => setTimeout(r, 3000))

  const ok = await verify()
  if (!ok) {
    console.error('\nStill failing. Zone catch-all may need a token with Zone Rulesets / Dynamic Redirects Edit.')
    process.exit(1)
  }
  console.log('\nAll redirects verified.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
