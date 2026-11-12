# Preferred Plumbing — full domain migration runbook

Primary: `https://www.callpreferredplumbing.com/`  
Old: `https://preferredplumbingsolution.com/` (+ `www`)  
Plural: `preferredplumbingsolutions.com` — DNS unresolved; confirm ownership with Ron before touching it.

Keep ads (~$30/day) paused until Section F passes.

---

## Status right now (2026-11-12)

### Done
- [x] New-site safety-net `_redirects` deployed
- [x] `/areas/*` → `/locations/*` on new site
- [x] Old-domain Worker updated (`preferred-plumbing-old-domain-redirects`)
- [x] Broken aliases fixed in one hop: dishwashers, about-us, emergency-plumbing, drain-cleaning, index.php
- [x] `robots.txt` stays 200 / Allow on old domain
- [x] `/wp-admin` stays 404 (not redirected to homepage)

### Still open
- [ ] Cloudflare earlier Bulk/Dynamic Redirect layer (causes 301→308 chains)
- [ ] Google Search Console Change of Address + sitemap
- [ ] External profiles / ad destinations / call tracking QA
- [ ] Plural domain ownership confirmation

---

## A. Cloudflare earlier redirect layer (do this first)

Goal: every important old URL = **one 301** → slash-canonical new URL → **200**.

### A1. Sign in
1. Open Cloudflare Dashboard
2. Select zone **preferredplumbingsolution.com**
3. Do **not** change nameservers or delete the zone
4. Do **not** touch MX / SPF / DKIM / DMARC

### A2. Find the intercepting rules
Check both:
1. **Rules → Redirect Rules** (Single Redirects)
2. **Rules → Bulk Redirects** (lists + bulk redirect rule)

The earlier layer is whatever answers `/radiant-heat` **without** header `X-Redirect-By: preferred-plumbing-old-domain-redirects`.

### A3. Back up
Before editing:
1. Screenshot every Redirect Rule
2. Export / copy the Bulk Redirect list if present
3. Save a text backup of source → target pairs

### A4. Correct destinations
Update every entry to the **exact** targets below (include trailing slash except homepage and `sitemap.xml`).

If Bulk Redirects and the Worker both map the same path, either:
- fix Bulk Redirects to slash-canonical targets, **or**
- remove those Bulk entries and let the Worker own them

Do **not** redirect:
- `/robots.txt`
- `/wp-admin` (leave 404/410)

### A5. Canonical redirect map (copy/paste)

| Old URL | Final destination (must be first Location) |
| --- | --- |
| `https://preferredplumbingsolution.com/` | `https://www.callpreferredplumbing.com/` |
| `https://preferredplumbingsolution.com/radiant-heat` | `https://www.callpreferredplumbing.com/services/radiant-heat/` |
| `https://preferredplumbingsolution.com/contact` | `https://www.callpreferredplumbing.com/contact/` |
| `https://preferredplumbingsolution.com/areas-we-serve` | `https://www.callpreferredplumbing.com/locations/` |
| `https://preferredplumbingsolution.com/faqs` | `https://www.callpreferredplumbing.com/faqs/` |
| `https://preferredplumbingsolution.com/gallery` | `https://www.callpreferredplumbing.com/gallery/` |
| `https://preferredplumbingsolution.com/portfolio` | `https://www.callpreferredplumbing.com/gallery/` |
| `https://preferredplumbingsolution.com/new-construction-plumbing-services` | `https://www.callpreferredplumbing.com/services/new-construction/` |
| `https://preferredplumbingsolution.com/new-construction-projects` | `https://www.callpreferredplumbing.com/services/new-construction/` |
| `https://preferredplumbingsolution.com/commercial-projects` | `https://www.callpreferredplumbing.com/services/commercial/` |
| `https://preferredplumbingsolution.com/water-softeners` | `https://www.callpreferredplumbing.com/services/water-softeners/` |
| `https://preferredplumbingsolution.com/water-heaters` | `https://www.callpreferredplumbing.com/services/water-heaters/` |
| `https://preferredplumbingsolution.com/bathtubs-and-showers` | `https://www.callpreferredplumbing.com/services/bathtubs-showers/` |
| `https://preferredplumbingsolution.com/septic-systems` | `https://www.callpreferredplumbing.com/services/septic-systems/` |
| `https://preferredplumbingsolution.com/toilets-and-faucets` | `https://www.callpreferredplumbing.com/services/toilets-faucets/` |
| `https://preferredplumbingsolution.com/sewer-line-replacement` | `https://www.callpreferredplumbing.com/services/sewer-line/` |
| `https://preferredplumbingsolution.com/dishwashers` | `https://www.callpreferredplumbing.com/services/dishwashers/` |
| `https://preferredplumbingsolution.com/dishwashers-and-disposals` | `https://www.callpreferredplumbing.com/services/dishwashers/` |
| `https://preferredplumbingsolution.com/emergency-plumbing` | `https://www.callpreferredplumbing.com/services/emergency/` |
| `https://preferredplumbingsolution.com/drain-cleaning` | `https://www.callpreferredplumbing.com/services/drain-cleaning/` |
| `https://preferredplumbingsolution.com/residential-and-commercial-plumbing-solutions` | `https://www.callpreferredplumbing.com/services/` |
| `https://preferredplumbingsolution.com/about` | `https://www.callpreferredplumbing.com/about/` |
| `https://preferredplumbingsolution.com/about-us` | `https://www.callpreferredplumbing.com/about/` |
| `https://preferredplumbingsolution.com/blog` | `https://www.callpreferredplumbing.com/blog/` |
| `https://preferredplumbingsolution.com/services` | `https://www.callpreferredplumbing.com/services/` |
| `https://preferredplumbingsolution.com/privacy-policy` | `https://www.callpreferredplumbing.com/privacy-policy/` |
| `https://preferredplumbingsolution.com/index.php` | `https://www.callpreferredplumbing.com/` |
| `https://preferredplumbingsolution.com/sitemap.xml` | `https://www.callpreferredplumbing.com/sitemap.xml` |

Also cover `www.` old host for the same paths.

CSV import reference (if using Bulk Redirects UI): `ops/old-domain-bulk-redirects.csv`

---

## B. Copy-paste curl QA checklist

Run in PowerShell or Terminal.  
**Pass = codes `301,200` and Location already has the trailing slash.**  
**Fail = `301,308,200` or wrong final URL.**

### B1. Currently failing (extra hop) — fix Cloudflare layer until these pass

```bash
curl -I -L https://preferredplumbingsolution.com/radiant-heat
curl -I -L https://preferredplumbingsolution.com/contact
curl -I -L https://preferredplumbingsolution.com/areas-we-serve
curl -I -L https://preferredplumbingsolution.com/faqs
curl -I -L https://preferredplumbingsolution.com/gallery
curl -I -L https://preferredplumbingsolution.com/portfolio
curl -I -L https://preferredplumbingsolution.com/new-construction-plumbing-services
curl -I -L https://preferredplumbingsolution.com/commercial-projects
curl -I -L https://preferredplumbingsolution.com/water-softeners
curl -I -L https://preferredplumbingsolution.com/water-heaters
curl -I -L https://preferredplumbingsolution.com/bathtubs-and-showers
curl -I -L https://preferredplumbingsolution.com/septic-systems
curl -I -L https://preferredplumbingsolution.com/toilets-and-faucets
curl -I -L https://preferredplumbingsolution.com/sewer-line-replacement
curl -I -L https://preferredplumbingsolution.com/residential-and-commercial-plumbing-solutions
curl -I -L https://www.preferredplumbingsolution.com/contact
curl -I -L http://preferredplumbingsolution.com/radiant-heat
```

Expected first `Location:` examples:
- radiant-heat → `https://www.callpreferredplumbing.com/services/radiant-heat/`
- contact → `https://www.callpreferredplumbing.com/contact/`
- areas-we-serve → `https://www.callpreferredplumbing.com/locations/`

### B2. Already passing (one hop) — recheck after Cloudflare edits

```bash
curl -I -L https://preferredplumbingsolution.com/
curl -I -L https://preferredplumbingsolution.com/dishwashers
curl -I -L https://preferredplumbingsolution.com/about-us
curl -I -L https://preferredplumbingsolution.com/emergency-plumbing
curl -I -L https://preferredplumbingsolution.com/drain-cleaning
curl -I -L https://preferredplumbingsolution.com/index.php
curl -I https://preferredplumbingsolution.com/robots.txt
curl -I https://preferredplumbingsolution.com/wp-admin
```

Expected:
- dishwashers / about-us / emergency / drain / index.php → 301 then 200
- robots.txt → **200** (not 301)
- wp-admin → **404**

### B3. New-site aliases / duplicates

```bash
curl -I -L https://www.callpreferredplumbing.com/areas/spirit-lake-id
curl -I -L https://www.callpreferredplumbing.com/areas-we-serve
curl -I -L https://www.callpreferredplumbing.com/dishwashers
curl -I -L https://www.callpreferredplumbing.com/about-us
curl -I -L https://www.callpreferredplumbing.com/emergency-plumbing
curl -I -L https://www.callpreferredplumbing.com/drain-cleaning
curl -I https://www.callpreferredplumbing.com/locations/spirit-lake-id/
```

Expected finals:
- areas/spirit-lake-id → `/locations/spirit-lake-id/` 200
- areas-we-serve → `/locations/` 200
- locations/spirit-lake-id/ → 200 directly

### B4. Checkbox sheet

- [ ] Old homepage → new homepage, one 301
- [ ] radiant-heat → `/services/radiant-heat/` one 301
- [ ] contact → `/contact/` one 301
- [ ] areas-we-serve → `/locations/` one 301
- [ ] faqs / gallery / portfolio correct
- [ ] all listed service pages one 301
- [ ] www + non-www old hosts work
- [ ] http + https old hosts work, no loops
- [ ] robots.txt 200 Allow
- [ ] wp-admin 404
- [ ] every final destination 200
- [ ] no old phone `555-555-5555` on final pages
- [ ] hours on final pages match Sun–Fri 7am–5pm, closed Sat

---

## C. Google Search Console — full steps

### C1. Verify properties
1. Go to https://search.google.com/search-console
2. Add/verify **Domain** property: `callpreferredplumbing.com`
3. Add/verify **Domain** property: `preferredplumbingsolution.com`
4. DNS TXT verification is preferred
5. Do not delete the old property later

### C2. Only after Section B one-hop tests pass
1. Open **old** property
2. **Settings → Change of Address**
3. Select new property `callpreferredplumbing.com`
4. Validate redirects → Submit

### C3. Submit sitemap on new property
1. New property → **Sitemaps**
2. Submit: `https://www.callpreferredplumbing.com/sitemap.xml`
3. Confirm Success

### C4. GSC URL Inspection — copy/paste list

Inspect each **old** URL (should show redirect), then each **new** URL (should be indexable).

Old URLs:
```
https://preferredplumbingsolution.com/
https://preferredplumbingsolution.com/radiant-heat
https://preferredplumbingsolution.com/contact
https://preferredplumbingsolution.com/areas-we-serve
https://preferredplumbingsolution.com/faqs
https://preferredplumbingsolution.com/gallery
https://preferredplumbingsolution.com/new-construction-plumbing-services
https://preferredplumbingsolution.com/commercial-projects
https://preferredplumbingsolution.com/water-softeners
https://preferredplumbingsolution.com/septic-systems
https://preferredplumbingsolution.com/dishwashers
https://preferredplumbingsolution.com/emergency-plumbing
```

New URLs (Request indexing on top ones):
```
https://www.callpreferredplumbing.com/
https://www.callpreferredplumbing.com/services/
https://www.callpreferredplumbing.com/services/radiant-heat/
https://www.callpreferredplumbing.com/services/emergency/
https://www.callpreferredplumbing.com/services/water-heaters/
https://www.callpreferredplumbing.com/services/septic-systems/
https://www.callpreferredplumbing.com/locations/
https://www.callpreferredplumbing.com/locations/spirit-lake-id/
https://www.callpreferredplumbing.com/contact/
https://www.callpreferredplumbing.com/faqs/
https://www.callpreferredplumbing.com/gallery/
```

### C5. Weekly GSC checks
- Old property indexed pages ↓
- New property indexed pages ↑
- No spike in 404 / soft 404
- Performance impressions/clicks holding

---

## D. External listings / ads (same week)

Update website URL only. **Do not change phone or address.**

| Platform | Action | Done |
| --- | --- | --- |
| Google Business Profile | Website = `https://www.callpreferredplumbing.com/` | [ ] |
| Facebook page | Website link → new domain | [ ] |
| Instagram | Website link → new domain | [ ] |
| Meta Ads | All destination URLs → new domain | [ ] |
| Google Ads / LSA | Final URLs → new domain | [ ] |
| Bing Places | Website → new domain | [ ] |
| Yelp / directories | Replace old website | [ ] |
| Email signatures | New domain | [ ] |
| Review request messages | New domain or current review link | [ ] |
| Printed materials | New domain going forward | [ ] |

---

## E. Call tracking QA (required before unpausing ads)

- [ ] Homepage click-to-call shows real number `208-290-3889` (or tracking number if intentional)
- [ ] Mobile sticky call button works
- [ ] Contact form submits and emails arrive
- [ ] No `555-555-5555` anywhere on final pages
- [ ] If using call tracking, ad URLs use tracking numbers correctly
- [ ] Test call from a real phone after one ad URL preview

Keep spend paused until this passes.

---

## F. Definition of done

- [ ] New-site aliases deployed and tested
- [ ] Old-domain redirects point directly to valid slash-canonical pages
- [ ] No unnecessary redirect chains on money URLs
- [ ] Old robots.txt permits crawling
- [ ] `/areas` duplicates consolidated to `/locations`
- [ ] Search Console Change of Address submitted
- [ ] New sitemap submitted successfully
- [ ] GBP / ads / directories use new domain
- [ ] Call tracking verified
- [ ] Ads remain paused until F is complete

---

## G. If you get stuck identifying the Cloudflare layer

1. Run:
   ```bash
   curl -I https://preferredplumbingsolution.com/radiant-heat
   ```
2. If response **lacks** `X-Redirect-By: preferred-plumbing-old-domain-redirects`, the earlier Rules layer is winning.
3. Fix/remove that Rules entry so first Location is already slash-canonical.
4. Worker source of truth: `workers/old-domain-redirects/`
5. Prior Worker map backup: `ops/old-domain-worker-backup/PATH_MAP.snapshot.js`
