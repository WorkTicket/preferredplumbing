/**
 * Syncs account-level Cloudflare Bulk Redirects from
 * redirects/cloudflare-bulk-redirects.csv (plus http:// source variants).
 *
 * Bulk Redirects run BEFORE zone Single Redirects, so path remaps win over
 * the old-domain catch-all rule.
 *
 * Env:
 *   CLOUDFLARE_API_TOKEN  (Account Filter Lists Edit + Bulk URL Redirects Edit
 *                          / Account Rulesets Write)
 *   CLOUDFLARE_ACCOUNT_ID (optional; default Preferred Plumbing account)
 *
 * Usage:
 *   npm run cf:sync-bulk-redirects
 */

import { readFileSync } from 'node:fs'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'node:url'

const API = 'https://api.cloudflare.com/client/v4'
const ACCOUNT_ID = process.env.CLOUDFLARE_ACCOUNT_ID || '6972c532d902c84b1793316ed3497124'
const LIST_NAME = 'preferred_plumbing_old_domain'
const RULE_REF = 'enable_preferred_plumbing_old_domain_redirects'
const PHASE = 'http_request_redirect'
const CSV_PATH = resolve(
  dirname(fileURLToPath(import.meta.url)),
  '../redirects/cloudflare-bulk-redirects.csv',
)

const token = process.env.CLOUDFLARE_API_TOKEN
if (!token) {
  console.error('Missing CLOUDFLARE_API_TOKEN')
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
  if (!json.success) {
    throw new Error(`${method} ${path} failed:\n${JSON.stringify(json.errors || json, null, 2)}`)
  }
  return json.result
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
    if (op.status === 'completed') return
    if (op.status === 'failed') {
      throw new Error(`Bulk list op failed: ${JSON.stringify(op)}`)
    }
    await new Promise((r) => setTimeout(r, 1000))
  }
  throw new Error(`Timed out waiting for bulk op ${operationId}`)
}

async function upsertList(items) {
  const lists = await cf(`/accounts/${ACCOUNT_ID}/rules/lists`)
  let list = (lists || []).find((l) => l.name === LIST_NAME)
  if (!list) {
    console.log(`Creating list ${LIST_NAME}…`)
    list = await cf(`/accounts/${ACCOUNT_ID}/rules/lists`, {
      method: 'POST',
      body: {
        name: LIST_NAME,
        description: 'Old preferredplumbingsolution.com → callpreferredplumbing.com',
        kind: 'redirect',
      },
    })
  } else {
    console.log(`Using existing list ${LIST_NAME} (${list.id})`)
  }

  console.log(`Replacing ${items.length} redirect items…`)
  const op = await cf(`/accounts/${ACCOUNT_ID}/rules/lists/${list.id}/items`, {
    method: 'PUT',
    body: items,
  })
  await waitForOp(op.operation_id)
  console.log('List items synced')
  return list
}

function bulkRule() {
  return {
    ref: RULE_REF,
    description: 'Preferred Plumbing old-domain path remaps',
    expression: `http.request.full_uri in $${LIST_NAME}`,
    action: 'redirect',
    action_parameters: {
      from_list: {
        name: LIST_NAME,
        key: 'http.request.full_uri',
      },
    },
    enabled: true,
  }
}

async function upsertAccountRedirectRule() {
  const entry = await cf(`/accounts/${ACCOUNT_ID}/rulesets/phases/${PHASE}/entrypoint`).catch(() => null)
  const desired = bulkRule()

  if (!entry?.id) {
    console.log('Creating account http_request_redirect ruleset…')
    await cf(`/accounts/${ACCOUNT_ID}/rulesets`, {
      method: 'POST',
      body: {
        name: 'Bulk Redirects',
        kind: 'root',
        phase: PHASE,
        rules: [desired],
      },
    })
    console.log('Account redirect ruleset created')
    return
  }

  const rules = Array.isArray(entry.rules) ? [...entry.rules] : []
  const idx = rules.findIndex((r) => r.ref === RULE_REF || r.description?.includes('Preferred Plumbing old-domain'))
  if (idx >= 0) {
    rules[idx] = {
      id: rules[idx].id,
      ...desired,
    }
    console.log(`Updating rule ${RULE_REF}…`)
  } else {
    rules.unshift(desired)
    console.log(`Inserting rule ${RULE_REF}…`)
  }

  await cf(`/accounts/${ACCOUNT_ID}/rulesets/${entry.id}`, {
    method: 'PUT',
    body: {
      rules: rules.map(({ id, ref, description, expression, action, action_parameters, enabled }) =>
        id
          ? { id, ref, description, expression, action, action_parameters, enabled }
          : { ref, description, expression, action, action_parameters, enabled },
      ),
    },
  })
  console.log('Account redirect ruleset synced')
}

async function main() {
  const items = parseCsv(readFileSync(CSV_PATH, 'utf8'))
  console.log(`Account ${ACCOUNT_ID}`)
  console.log(`Loaded ${items.length} redirects from CSV (+ http variants)`)
  await upsertList(items)
  await upsertAccountRedirectRule()
  console.log(`
Verify one-hop path remap:
  curl -sI https://www.preferredplumbingsolution.com/radiant-heating-and-in-floor-systems
  → Location: https://www.callpreferredplumbing.com/services/radiant-heat
`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
