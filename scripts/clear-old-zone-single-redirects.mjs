import { readFileSync, existsSync, readdirSync } from 'node:fs'
import { join } from 'node:path'
import { homedir } from 'node:os'

const API = 'https://api.cloudflare.com/client/v4'
const ZONE_ID = '84b1f675aac94f35f485e04b8a9c3edf'
const RULESET_ID = '96735e2536f8476482f4045a42d5dada'

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
  if (process.env.CLOUDFLARE_API_TOKEN) return process.env.CLOUDFLARE_API_TOKEN
  for (const root of [
    join(process.env.APPDATA || '', 'xdg.config', '.wrangler'),
    join(homedir(), '.wrangler'),
  ]) {
    for (const f of walk(root)) {
      if (!/\.(toml|json)$/i.test(f)) continue
      const text = readFileSync(f, 'utf8')
      const m =
        text.match(/oauth_token\s*=\s*"([^"]+)"/) ||
        text.match(/access_token\s*=\s*"([^"]+)"/)
      if (m) return m[1]
      if (f.endsWith('.json') && text.includes('accessToken')) {
        try {
          const j = JSON.parse(text)
          if (j.accessToken?.value) return j.accessToken.value
        } catch {
          /* ignore */
        }
      }
    }
  }
  return null
}

const token = loadToken()
if (!token) {
  console.error('No auth')
  process.exit(1)
}

const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

async function cf(path, init = {}) {
  const res = await fetch(`${API}${path}`, {
    ...init,
    headers: { ...headers, ...(init.headers || {}) },
  })
  return res.json()
}

const listed = await cf(`/zones/${ZONE_ID}/rulesets`)
console.log('LIST success', listed.success)
const dyn = (listed.result || []).filter((r) => r.phase === 'http_request_dynamic_redirect')
console.log('DYNAMIC RULESETS', JSON.stringify(dyn, null, 2))

const get = await cf(`/zones/${ZONE_ID}/rulesets/${RULESET_ID}`)
console.log('GET', JSON.stringify(get, null, 2).slice(0, 4000))

const put = await cf(`/zones/${ZONE_ID}/rulesets/${RULESET_ID}`, {
  method: 'PUT',
  body: JSON.stringify({ rules: [] }),
})
console.log('PUT empty', JSON.stringify(put, null, 2).slice(0, 3000))

if (!put.success) {
  const del = await cf(`/zones/${ZONE_ID}/rulesets/${RULESET_ID}`, { method: 'DELETE' })
  console.log('DELETE', JSON.stringify(del, null, 2).slice(0, 2000))
}

const entry = await cf(`/zones/${ZONE_ID}/rulesets/phases/http_request_dynamic_redirect/entrypoint`)
console.log('ENTRYPOINT AFTER', JSON.stringify(entry, null, 2).slice(0, 2000))
