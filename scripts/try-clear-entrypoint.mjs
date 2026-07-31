const token = process.env.CLOUDFLARE_API_TOKEN
if (!token) {
  console.error('Set CLOUDFLARE_API_TOKEN')
  process.exit(1)
}

const zoneId = '84b1f675aac94f35f485e04b8a9c3edf'
const rulesetId = '96735e2536f8476482f4045a42d5dada'
const headers = {
  Authorization: `Bearer ${token}`,
  'Content-Type': 'application/json',
}

async function cf(path, init) {
  const res = await fetch(`https://api.cloudflare.com/client/v4${path}`, {
    ...init,
    headers: { ...headers, ...(init?.headers || {}) },
  })
  return res.json()
}

const attempts = [
  ['PUT entrypoint empty', `/zones/${zoneId}/rulesets/phases/http_request_dynamic_redirect/entrypoint`, { method: 'PUT', body: JSON.stringify({ rules: [] }) }],
  ['PUT ruleset empty', `/zones/${zoneId}/rulesets/${rulesetId}`, { method: 'PUT', body: JSON.stringify({ rules: [] }) }],
  ['DELETE ruleset', `/zones/${zoneId}/rulesets/${rulesetId}`, { method: 'DELETE' }],
]

for (const [label, path, init] of attempts) {
  const result = await cf(path, init)
  console.log(label, result.success ? 'OK' : JSON.stringify(result.errors))
  if (result.success) break
}

const listed = await cf(`/zones/${zoneId}/rulesets`)
const dyn = (listed.result || []).filter((r) => r.phase === 'http_request_dynamic_redirect')
console.log('Remaining dynamic redirect rulesets:', dyn.length, dyn.map((r) => `${r.id} v${r.version} updated=${r.last_updated}`).join('; '))
