import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'

const API = 'https://api.cloudflare.com/client/v4'
const ACCOUNT_ID = '6972c532d902c84b1793316ed3497124'
const ZONE = 'preferredplumbingsolution.com'

function walk(dir, acc = []) {
  if (!existsSync(dir)) return acc
  for (const name of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, name.name)
    if (name.isDirectory()) walk(full, acc)
    else acc.push(full)
  }
  return acc
}

function loadToken() {
  if (process.env.CLOUDFLARE_API_TOKEN) return { token: process.env.CLOUDFLARE_API_TOKEN, via: 'env' }
  const roots = [
    join(process.env.APPDATA || '', 'xdg.config', '.wrangler'),
    join(homedir(), '.wrangler'),
  ]
  for (const root of roots) {
    for (const f of walk(root)) {
      if (!/\.(toml|json)$/i.test(f)) continue
      const text = readFileSync(f, 'utf8')
      if (f.endsWith('.json') && /accessToken|oauth_token|api_token/i.test(text)) {
        try {
          const j = JSON.parse(text)
          const t = j.oauth_token || j.access_token || j.api_token || j.accessToken?.value
          if (t) return { token: typeof t === 'string' ? t : t.value, via: 'wrangler-json' }
        } catch {}
      }
      const m = text.match(/oauth_token\s*=\s*"([^"]+)"/) || text.match(/access_token\s*=\s*"([^"]+)"/)
      if (m) return { token: m[1], via: 'wrangler-toml' }
    }
  }
  return null
}

const auth = loadToken()
if (!auth) {
  console.error('no auth')
  process.exit(1)
}
console.log('auth via', auth.via)

const headers = { Authorization: `Bearer ${auth.token}`, 'Content-Type': 'application/json' }
async function cf(path) {
  const res = await fetch(`${API}${path}`, { headers })
  return res.json()
}

const zones = await cf(`/zones?name=${ZONE}`)
const zoneId = zones.result?.[0]?.id
console.log('zone', zoneId)

const phases = [
  'http_request_dynamic_redirect',
  'http_request_redirect',
  'http_request_transform',
  'http_request_origin',
  'http_config_settings',
  'http_request_snippets',
]
for (const phase of phases) {
  const r = await cf(`/zones/${zoneId}/rulesets/phases/${phase}/entrypoint`)
  const rules = r.result?.rules || []
  console.log(`\nPHASE ${phase}: success=${r.success} rules=${rules.length}`)
  for (const rule of rules) {
    console.log(' ', rule.action, rule.description || rule.ref, rule.expression?.slice?.(0, 120))
    console.log('   params', JSON.stringify(rule.action_parameters || {}).slice(0, 300))
  }
  if (!r.success) console.log('  err', JSON.stringify(r.errors))
}

const routes = await cf(`/accounts/${ACCOUNT_ID}/workers/scripts`)
console.log('\nWORKERS', (routes.result || []).map((s) => s.id).join(', '))

for (const name of ['preferred-plumbing-old-domain-redirects', 'preferred-plumbing-preview']) {
  const r = await cf(`/accounts/${ACCOUNT_ID}/workers/scripts/${name}/routes`)
  console.log(`\nROUTES ${name}:`, JSON.stringify(r.result || r.errors, null, 2).slice(0, 1500))
  const d = await cf(`/accounts/${ACCOUNT_ID}/workers/domains?page=1`)
  // only once
}

const domains = await cf(`/accounts/${ACCOUNT_ID}/workers/domains`)
console.log('\nWORKER DOMAINS', JSON.stringify(domains.result || domains.errors, null, 2).slice(0, 2000))

const settings = ['always_use_https', 'browser_check', 'ssl']
for (const s of settings) {
  const r = await cf(`/zones/${zoneId}/settings/${s}`)
  console.log('setting', s, r.result?.value ?? r.errors)
}
