# Canonical redirects (best practice)

**Canonical host:** `https://www.callpreferredplumbing.com`

| Layer | Role |
|-------|------|
| **Always Use HTTPS = OFF** | Required. If left on, Cloudflare does `http://apex → https://apex` before www (= chain). |
| **Cloudflare Single Redirect** | Edge single-hop: apex or HTTP → `https://www…` (runs before the Worker) |
| **Next middleware** | Safety net if a request still hits the Worker on apex/HTTP |
| **HSTS** (`next.config.mjs`) | Browsers stick to HTTPS after first secure visit |
| **`next.config.mjs` redirects** | Legacy Duda path remaps only |

## Dashboard (manual)

1. **SSL/TLS → Edge Certificates → Always Use HTTPS → Off**
2. **Rules → Redirect Rules → Create** (or run the sync script below)
   - Expression: `(http.host eq "callpreferredplumbing.com") or (http.host eq "www.callpreferredplumbing.com" and http.request.scheme eq "http")`
   - Dynamic target: `concat("https://www.callpreferredplumbing.com", http.request.uri.path)`
   - Status `301`, preserve query string

## Sync via API

```powershell
$env:CLOUDFLARE_API_TOKEN="…"   # Zone Rulesets Edit + Zone Settings Edit
npm run cf:sync-redirects
```

Creates/updates the Single Redirect and sets Always Use HTTPS off.

## Verify (one hop only)

```powershell
curl.exe -sI http://callpreferredplumbing.com/about
# Location: https://www.callpreferredplumbing.com/about

curl.exe -sI https://callpreferredplumbing.com/about
# Location: https://www.callpreferredplumbing.com/about

curl.exe -sI http://www.callpreferredplumbing.com/about
# Location: https://www.callpreferredplumbing.com/about
```

## Ahrefs (expected)

| Issue | Why |
|-------|-----|
| **3XX redirect** | Non-canonical host/scheme URLs correctly 301. Keep them. |
| **HTTP to HTTPS** | Same — correct. |
| **Redirect chain** | Should be **gone** after Always Use HTTPS is off + Single Redirect. |

## Old domain cutover (`preferredplumbingsolution.com`)

**Important:** Single Redirects run *before* Bulk Redirects. After syncing the bulk list, **disable/delete** the zone Single Redirect named `Old domain → callpreferredplumbing` on the old zone — otherwise it steals every request and path remaps never fire.

Bulk list (account-level) includes exact path remaps plus a `/` subpath catch-all for unknown URLs:

```powershell
$env:CLOUDFLARE_API_TOKEN="…"   # Account Filter Lists Edit + Account Rulesets Edit
npm run cf:sync-bulk-redirects
```

Source list: `redirects/cloudflare-bulk-redirects.csv` (script also adds `http://` variants).

```powershell
curl.exe -sI https://www.preferredplumbingsolution.com/radiant-heating-and-in-floor-systems
# Location: https://www.callpreferredplumbing.com/services/radiant-heat
```
