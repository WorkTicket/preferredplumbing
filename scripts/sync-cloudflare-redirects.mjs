/**
 * Syncs Cloudflare Single Redirect + Always Use HTTPS settings for
 * single-hop canonicalization to https://www.callpreferredplumbing.com
 *
 * Best practice (avoids http://apex → https://apex → https://www chains):
 * 1. One Dynamic Redirect covering apex (any scheme) + www-over-HTTP
 * 2. Always Use HTTPS OFF (this rule upgrades HTTP itself)
 * 3. HSTS still set by the app (next.config.mjs) after first HTTPS hit
 *
 * Env:
 *   CLOUDFLARE_API_TOKEN  (Zone Rulesets + Zone Settings edit)
 *   CLOUDFLARE_ZONE_ID    (optional; looked up from ZONE_NAME if missing)
 *   CLOUDFLARE_ZONE_NAME  (default: callpreferredplumbing.com)
 *
 * Usage:
 *   node scripts/sync-cloudflare-redirects.mjs
 *   npm run cf:sync-redirects
 */

const API = 'https://api.cloudflare.com/client/v4'
const ZONE_NAME = process.env.CLOUDFLARE_ZONE_NAME || 'callpreferredplumbing.com'
const APEX = 'callpreferredplumbing.com'
const WWW = 'www.callpreferredplumbing.com'
const RULE_REF = 'canonical_www_https_single_hop'
const PHASE = 'http_request_dynamic_redirect'

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
    body: body ? JSON.stringify(body) : undefined,
  })
  const json = await res.json()
  if (!json.success) {
    const err = JSON.stringify(json.errors || json, null, 2)
    throw new Error(`${method} ${path} failed:\n${err}`)
  }
  return json.result
}

async function resolveZoneId() {
  if (process.env.CLOUDFLARE_ZONE_ID) return process.env.CLOUDFLARE_ZONE_ID
  const zones = await cf(`/zones?name=${encodeURIComponent(ZONE_NAME)}`)
  const zone = Array.isArray(zones) ? zones[0] : zones?.[0]
  if (!zone?.id) throw new Error(`Zone not found for ${ZONE_NAME}`)
  return zone.id
}

function redirectRule() {
  // Apex (http or https) OR www over plain HTTP → https://www + path (+ query via preserve_query_string)
  return {
    ref: RULE_REF,
    description: 'Single-hop canonical: apex/http → https://www (SEO best practice)',
    expression: `(http.host eq "${APEX}") or (http.host eq "${WWW}" and http.request.scheme eq "http")`,
    action: 'redirect',
    action_parameters: {
      from_value: {
        target_url: {
          expression: `concat("https://${WWW}", http.request.uri.path)`,
        },
        status_code: 301,
        preserve_query_string: true,
      },
    },
    enabled: true,
  }
}

async function upsertRedirectRuleset(zoneId) {
  const entryPoints = await cf(`/zones/${zoneId}/rulesets/phases/${PHASE}/entrypoint`).catch(() => null)
  const desired = redirectRule()

  if (!entryPoints?.id) {
    console.log('Creating dynamic redirect phase ruleset…')
    const created = await cf(`/zones/${zoneId}/rulesets`, {
      method: 'POST',
      body: {
        name: 'Redirect rules ruleset',
        kind: 'zone',
        phase: PHASE,
        rules: [desired],
      },
    })
    console.log(`Created ruleset ${created.id}`)
    return
  }

  const rules = Array.isArray(entryPoints.rules) ? [...entryPoints.rules] : []
  const idx = rules.findIndex((r) => r.ref === RULE_REF || r.description?.includes('canonical_www'))
  if (idx >= 0) {
    rules[idx] = { ...rules[idx], ...desired, id: rules[idx].id }
    console.log(`Updating existing rule ${RULE_REF}…`)
  } else {
    // Put canonical host rule first so it wins over any later redirects.
    rules.unshift(desired)
    console.log(`Inserting new rule ${RULE_REF} at priority 0…`)
  }

  await cf(`/zones/${zoneId}/rulesets/${entryPoints.id}`, {
    method: 'PUT',
    body: {
      rules: rules.map(({ id, ...rest }) => {
        // Keep id when updating so Cloudflare replaces in place; drop read-only fields.
        return id
          ? {
              id,
              ref: rest.ref,
              description: rest.description,
              expression: rest.expression,
              action: rest.action,
              action_parameters: rest.action_parameters,
              enabled: rest.enabled,
            }
          : rest
      }),
    },
  })
  console.log('Redirect ruleset synced')
}

async function disableAlwaysUseHttps(zoneId) {
  // Always Use HTTPS forces http://apex → https://apex before our www redirect (= chain).
  // Our Single Redirect upgrades HTTP itself; app still sends HSTS.
  const setting = await cf(`/zones/${zoneId}/settings/always_use_https`)
  if (setting?.value === 'off') {
    console.log('Always Use HTTPS already off')
    return
  }
  await cf(`/zones/${zoneId}/settings/always_use_https`, {
    method: 'PATCH',
    body: { value: 'off' },
  })
  console.log('Always Use HTTPS set to off (required for single-hop apex HTTP→www HTTPS)')
}

async function main() {
  const zoneId = await resolveZoneId()
  console.log(`Zone ${ZONE_NAME} (${zoneId})`)
  await upsertRedirectRuleset(zoneId)
  await disableAlwaysUseHttps(zoneId)
  console.log(`
Verify (expect ONE 301 hop):
  curl -sI http://${APEX}/about | findstr /I Location
  → Location: https://${WWW}/about

  curl -sI https://${APEX}/about | findstr /I Location
  → Location: https://${WWW}/about
`)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
