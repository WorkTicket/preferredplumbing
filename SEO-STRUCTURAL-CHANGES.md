# Preferred Plumbing — Structural SEO Changes (2026-09-06)

Audited before implementation. Existing foundation is preserved.

## What stays (no URL, title, or H1 changes)

- All 18 existing service URLs, including combined money pages:
  - `/services/water-heaters` (repair + installation — not split)
  - `/services/sewer-line` (replacement hub — not split into repair vs replacement)
  - `/services/emergency` (already targets Spirit Lake emergency intent)
- All 15 `/areas/[city]` pages (already target “Plumber in [City]”)
- All 24 existing blog posts
- Home, about, contact, gallery, FAQs, legal
- Canonical host, redirects, robots, NAP, hours (Sun–Fri 7am–5pm — **not** 24/7)

## What we will not build (doorway / cannibalization / thin content)

| Proposed page | Why skipped |
|---|---|
| Emergency Plumber / Plumbing Services in every city as extra URLs | City pages already own “Plumber in [City]”; 15× duplicates would be doorway spam |
| Service×city for Spirit Lake | Parent service H1s already say “in Spirit Lake, Idaho” |
| Service×city for Moscow, Priest River, Athol, Blanchard, Clark Fork, Oldtown, Newport, Mead, Chattaroy | Demand/uniqueness too thin; city hubs remain |
| 24 Hour Plumber pages | Company is not 24/7 |
| Split water-heater repair vs replacement service URLs | Would cannibalize `/services/water-heaters` |
| Split sewer repair vs replacement service URLs | Would cannibalize `/services/sewer-line` |
| Indexable `/projects/[slug]` case studies | Gallery jobs are labeled “North Idaho” only — no verified city. Fabricating city case studies would be inaccurate |

## What we are adding

### 1. Core money pages (new, distinct intent)

| URL | Intent | Why it does not cannibalize |
|---|---|---|
| `/services/drain-cleaning` | Clogged drains, hydro jetting, fixture/branch lines | `/services/sewer-line` stays the main-line replacement page |
| `/services/leak-detection` | Hidden leaks, high water bills, diagnosis | `/services/water-line` stays meter-to-home replacement |

### 2. Service × city pages (selective)

Pattern: `/services/[slug]/[city]` — child of the service money page.

**Services:** emergency, water-heaters, sewer-line, drain-cleaning  
**Cities:** Coeur d’Alene, Post Falls, Hayden, Rathdrum, Sandpoint  
**Total:** 20 pages

Each page has unique local copy, self-canonical, breadcrumbs, and links up to the parent service + over to the city hub.

Leak-detection × city is deferred until the hub page has supporting content.

### 3. High-intent resource posts (blog)

Problem / cost / comparison / emergency clusters that do not duplicate existing slugs. Each post links to the relevant service hub (and mentions core cities).

Deferred: PEX vs copper, “how long does a water heater last,” generic local-authority listicles, 24-hour content.

## Internal linking path (intended)

Problem article → service hub → service+city page → call / quote form

City hubs also link featured services to the service+city URL when one exists.

## Crawl / index

- New URLs are static (`generateStaticParams`) and picked up by `next-sitemap`
- Nested service×city sitemap priority 0.85 (parent services stay 0.9)
- No redirects of existing URLs

## Phase 2 — measurement freeze (2026-09-06 → ~2026-11-01)

Architecture is frozen until Search Console page-level data says otherwise.

**Do not**
- Create more emergency, city, sewer, drain, or leak URLs
- Split `/services/water-heaters` or `/services/sewer-line`
- Change titles or internal links yet
- React to out-of-area queries or to queries with no impressions

**Do**
- Deploy the 22 new URLs, regenerate the sitemap, then confirm indexing
- Track clusters by **query + page** in Search Console
- Optimize only after Google has selected a ranking URL

**Decision rule**
- Position 1–10: leave it mostly alone
- Position 11–20 + meaningful local commercial impressions: optimize the existing ranking URL
- Two URLs for the same query: check the Pages tab before changing anything
- Wrong/out-of-area query: ignore
- No impressions: do not react yet

**Workflow:** Index → observe → identify Google-selected URL → optimize → measure again.
