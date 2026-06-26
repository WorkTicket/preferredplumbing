# 🔧 PREFERRED PLUMBING SOLUTIONS — FULL DEV BUILD BRIEF
## $20,000 Lead Funnel Website — Complete Coding Agent Instructions

**Client:** Preferred Plumbing Solutions  
**Live site:** https://www.preferredplumbingsolution.com/  
**Phone:** 208-290-3889  
**Location:** Spirit Lake, Idaho  
**Design template:** `preferred-plumbing-redesign.html` (provided)  
**Stack:** Next.js 14 (App Router) + Tailwind CSS + TypeScript  
**Hosting:** Vercel  
**CMS:** Sanity.io (for blog, projects, reviews)  
**Forms:** Resend (email) + optional GoHighLevel webhook  
**Analytics:** Google Analytics 4 + Google Search Console + Microsoft Clarity (heatmaps)

---

## 📁 SITE ARCHITECTURE — ALL PAGES TO BUILD

```
/                          → Homepage (lead funnel)
/services                  → Services hub page
/services/new-construction → New Construction Plumbing
/services/commercial       → Commercial Projects
/services/radiant-heat     → Radiant Heat & In-Floor Systems
/services/water-heaters    → Water Heater Installation & Replacement
/services/water-softeners  → Water Softeners
/services/toilets-faucets  → Toilets & Faucets
/services/bathtubs-showers → Bathtubs & Showers
/services/dishwashers      → Dishwashers & Disposals
/services/sewer-line       → Sewer Line Replacement
/services/septic-systems   → Septic Systems
/services/remodels         → Plumbing Remodels & Upgrades
/services/emergency        → Emergency Plumbing (24/7)
/areas-we-serve            → Service Areas hub
/areas/spirit-lake-id      → Spirit Lake plumber page
/areas/coeur-dalene-id     → Coeur d'Alene plumber page
/areas/post-falls-id       → Post Falls plumber page
/areas/sandpoint-id        → Sandpoint plumber page
/areas/hayden-id           → Hayden plumber page
/areas/rathdrum-id         → Rathdrum plumber page
/areas/priest-river-id     → Priest River plumber page
/areas/athol-id            → Athol plumber page
/areas/blanchard-id        → Blanchard plumber page
/areas/clark-fork-id       → Clark Fork plumber page
/areas/newport-wa          → Newport WA plumber page
/areas/chattaroy-wa        → Chattaroy WA plumber page
/areas/spokane-valley-wa   → Spokane Valley WA plumber page
/about                     → About Ron & Hunter
/gallery                   → Photo gallery (masonry grid)
/portfolio                 → Project portfolio (CMS-driven)
/blog                      → SEO blog hub
/blog/[slug]               → Individual blog posts (CMS)
/faqs                      → FAQ page
/contact                   → Contact + quote form
/thank-you                 → Form submission confirmation
/privacy-policy            → Privacy policy
/sitemap.xml               → Auto-generated
/robots.txt                → Auto-generated
```

---

## 🖼️ IMAGES — PULLED DIRECTLY FROM LIVE SITE

All images are hosted on Duda's CDN. Download, compress with `sharp`, and store in `/public/images/`. Rename files semantically for SEO.

### HERO / TRUCK PHOTOS
```
ORIGINAL URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/IMG_6639-7ac63509-1920w.jpg
SAVE AS: /public/images/preferred-plumbing-truck-interior.jpg
USE ON: Homepage hero background (overlay), About page

ORIGINAL URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/IMG_0108-min+%282%29-1920w.jpg
SAVE AS: /public/images/preferred-plumbing-service-truck.jpg
USE ON: Homepage hero (desktop right panel), About page
```

### SERVICE IMAGES
```
New Construction Pipes:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_oYeL8UL82qoh2ekMVhzAiut92tVyAKoZJE09KHfRU5Q+%282%29-1920w.jpg
SAVE AS: /public/images/service-new-construction-plumbing.jpg
USE ON: /services/new-construction, homepage service card #1

Residential/Commercial Pipes:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_o8fhqug14kCwHp09OHyPj_DOgu4LDp01Fzrv1N7mU_Y+%281%29-1920w.jpg
SAVE AS: /public/images/service-residential-commercial-plumbing.jpg
USE ON: /services/commercial, homepage service card #2

Remodels (Two men working kitchen):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_lkPs-y6CbruPfnhyUJMESk4mS0qGITuopcCSeqOYMf8-1920w.jpg
SAVE AS: /public/images/service-plumbing-remodels-upgrades.jpg
USE ON: /services/remodels, homepage service card #3

Radiant Heat / Boiler Room:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Boiler_+Radiant+Heat%281%29-1920w.jpg
SAVE AS: /public/images/service-radiant-heat-boiler.jpg
USE ON: /services/radiant-heat, homepage service card #4

Emergency Repair (sink pipe):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_H_E53juk2S3P017jza1cql6hh5BkQ9b8jSNdmlv13dM+%281%29-1920w.jpg
SAVE AS: /public/images/service-emergency-plumbing-repair.jpg
USE ON: /services/emergency, homepage service card #5

Kitchen Remodel:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_e77b4073-008a-4607-b370-85b452cd71ea-1920w.jpg
SAVE AS: /public/images/service-kitchen-remodel-plumbing.jpg
USE ON: /services/remodels (kitchen), homepage card

Bathroom Remodel:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_laF3e8bkfk6Usj2t7PmBnsR1VmVos9y8xzK1UtAHIlk+%282%29-1920w.jpg
SAVE AS: /public/images/service-bathroom-remodel-plumbing.jpg
USE ON: /services/remodels (bathroom), homepage card

Commercial Projects:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_ff04f109-8b70-4c2b-b2b8-fb21889695cd-1920w.webp
SAVE AS: /public/images/service-commercial-plumbing-project.webp
USE ON: /services/commercial

New Construction Projects:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_26xbIZ3USF8YGhAdbQ4aVLRhckzNkt_l70DuuyLKjEU-1920w.webp
SAVE AS: /public/images/service-new-construction-project.webp
USE ON: /services/new-construction

Water Heater:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Water+Heater_-1920w.jpg
SAVE AS: /public/images/service-water-heater-installation.jpg
USE ON: /services/water-heaters

Radiant Heat (flooring):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Radiant+Heat-1920w.jpg
SAVE AS: /public/images/service-radiant-heat-infloor.jpg
USE ON: /services/radiant-heat (secondary image)

Water Softeners:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_RlYTKMJ-TZUcYkElm8TfliJpidenulz-j1Ibe7hxIl8-3ad2651b-1920w.webp
SAVE AS: /public/images/service-water-softener-installation.webp
USE ON: /services/water-softeners

Toilets & Faucets:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Plumbing+Trim_Faucets_Showers-Tub-Toilets_%283%29-1920w.jpg
SAVE AS: /public/images/service-toilets-faucets-plumbing.jpg
USE ON: /services/toilets-faucets

Bathtubs & Showers:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Plumbing+Trim_Faucets_Showers-Tub-Toilets_%289%29-1920w.jpg
SAVE AS: /public/images/service-bathtubs-showers-plumbing.jpg
USE ON: /services/bathtubs-showers

Dishwashers & Disposals:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/uri_ifs___M_f949OO_cL-Htdj35dk9B-5ryTNXPWCi5OBKK0GBkzP8-1920w.jpg
SAVE AS: /public/images/service-dishwasher-disposal-install.jpg
USE ON: /services/dishwashers

Sewer Line:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Sewer+Line%281%29-1920w.jpg
SAVE AS: /public/images/service-sewer-line-replacement.jpg
USE ON: /services/sewer-line

Septic Tank:
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Septic+Tank-1920w.jpg
SAVE AS: /public/images/service-septic-system-installation.jpg
USE ON: /services/septic-systems
```

### GALLERY / PORTFOLIO IMAGES
```
Gallery 1 (plumbing trim/faucets):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Plumbing+Trim-+Faucets-bathtubs-showers-1920w.jpeg
SAVE AS: /public/images/gallery-plumbing-trim-faucets-bathtubs.jpg
USE ON: /gallery, homepage recent projects strip

Gallery 2 (white pipes):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Plumbing+Trim_Faucets_Showers-Tub-Toilets+%288%29-1920w.jpeg
SAVE AS: /public/images/gallery-plumbing-showers-tub-toilets.jpg
USE ON: /gallery, homepage recent projects strip

Gallery 3 (grease trap):
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Grease+Trap+Tank-1920w.jpeg
SAVE AS: /public/images/gallery-grease-trap-commercial.jpg
USE ON: /gallery, /services/commercial
```

### HERO VIDEO
```
VIDEO URL: https://vid.cdn-website.com/9ec5d226/videos/sAdUaJkpQrqL59fXBZLu_Untitled+design+%2841%29-v.mp4
SAVE AS: /public/videos/preferred-plumbing-hero.mp4
USE ON: Homepage hero — autoplay, muted, loop, behind overlay
NOTE: Convert to WebM also for better compression. Use <video> with poster fallback.
```

### LOGO
```
FILE: provided as PNG (water drop logo)
SAVE AS: /public/images/preferred-plumbing-logo.png
         /public/images/preferred-plumbing-logo.svg  ← recreate as SVG if possible
USE ON: Topbar, footer, OG image, favicon (crop to mark only)
```

### OG / SOCIAL SHARE IMAGE (existing)
```
URL: https://lirp.cdn-website.com/9ec5d226/dms3rep/multi/opt/Preferred-1920w.png
SAVE AS: /public/images/og-preferred-plumbing-solutions.png
USE ON: Default Open Graph image for all pages
NOTE: Redesign this as a 1200×630px branded card with logo + phone + tagline
```

---

## 🏗️ TECH STACK & SETUP

### Initialize Project
```bash
npx create-next-app@latest preferred-plumbing \
  --typescript --tailwind --eslint --app --src-dir

cd preferred-plumbing

npm install \
  @sanity/client @sanity/image-url \
  resend \
  react-hook-form @hookform/resolvers zod \
  framer-motion \
  next-sitemap \
  sharp \
  @vercel/analytics \
  @vercel/speed-insights \
  lucide-react \
  clsx tailwind-merge
```

### Tailwind Config — Match Design Template Colors
```js
// tailwind.config.ts
theme: {
  extend: {
    colors: {
      blue: {
        DEFAULT: '#0077CC',
        light: '#0099EE',
        dark: '#005FA3',
      },
      navy: {
        DEFAULT: '#0D1B2A',
        mid: '#162235',
      },
      steel: '#1E3A5F',
    },
    fontFamily: {
      display: ['Barlow Condensed', 'sans-serif'],
      body: ['Barlow', 'sans-serif'],
    },
  },
}
```

### Google Fonts in layout.tsx
```tsx
import { Barlow, Barlow_Condensed } from 'next/font/google'
const barlow = Barlow({ subsets: ['latin'], weight: ['400','500','600'] })
const barlowCondensed = Barlow_Condensed({ subsets: ['latin'], weight: ['500','700','900'] })
```

---

## 📄 PAGE-BY-PAGE BUILD INSTRUCTIONS

---

### PAGE 1: HOMEPAGE `/`

**Component order (mobile-first, scroll order):**

```
1. <Header />             — sticky, white bg, hamburger mobile, call btn desktop
2. <HeroSection />        — video bg, headline, trust stats, dual CTA
3. <EmergencyBand />      — orange/blue band, 24/7 call CTA
4. <WhyChooseUs />        — 4-card grid (family, licensed, fast, quality)
5. <ServicesGrid />       — 9 service cards with images from above
6. <AboutSection />       — photo of Ron & Hunter + stats
7. <RecentProjects />     — 3-image strip linking to /gallery
8. <Testimonials />       — 3 real review cards (get from Google)
9. <ServiceAreas />       — chip grid, all 16 cities
10. <FAQAccordion />      — 6 questions with Schema markup
11. <ContactSection />    — info + quote request form side by side
12. <Footer />            — full links, logo, hours, social
13. <MobileCtaBar />      — fixed bottom bar (Call Now + Free Quote), hidden desktop
```

**Hero Section specifics:**
- Background: autoplay muted looped video (`/public/videos/preferred-plumbing-hero.mp4`)
- Fallback poster: `/public/images/preferred-plumbing-truck-interior.jpg`
- Dark overlay: `rgba(13,27,42,0.75)`
- Headline: "North Idaho's Trusted Plumber" (H1, Barlow Condensed 900)
- Subheadline: "38+ years. Family-owned. Spirit Lake, Idaho."
- CTA 1: `<a href="tel:2082903889">` — blue button
- CTA 2: `<a href="#contact">` — ghost button
- Trust bar below: 38+ Years / 500+ Projects / 24/7 Emergency / 5★ Google

**About Section — use REAL truck photos:**
- Left: `/public/images/preferred-plumbing-service-truck.jpg` (the white truck)
- Right: text content about Ron & Hunter
- Stats: 38+ Years / 16 Cities / 100% Owner-Operated

**Recent Projects strip:**
- Image 1: `gallery-plumbing-trim-faucets-bathtubs.jpg`
- Image 2: `gallery-plumbing-showers-tub-toilets.jpg`
- Image 3: `gallery-grease-trap-commercial.jpg`
- Link: "View All Work →" → `/gallery`

---

### PAGE 2: SERVICES HUB `/services`

- H1: "Expert Plumbing Services in Spirit Lake, Idaho"
- Intro paragraph: Full-service description
- Grid of all 13 service cards, each with:
  - Image (from list above)
  - Service name (H2)
  - 2-sentence description
  - "Learn More →" link to individual service page
- Bottom CTA band: "Not sure what you need? Call us — we'll figure it out." + phone

---

### PAGES 3–15: INDIVIDUAL SERVICE PAGES

**Template for each service page:**
```tsx
// app/services/[slug]/page.tsx
export async function generateStaticParams() { ... }

// Each page includes:
// - H1 with service name + "in Spirit Lake, Idaho"
// - Hero image (from list above, full-width)
// - What's included (bullet list)
// - Why hire Preferred Plumbing for this service
// - Service-specific FAQ (3–5 questions, Schema markup)
// - Before/after or process photos from gallery
// - Sidebar or bottom CTA: "Get a Free Quote" form
// - Related services links
// - LocalBusiness Schema on every page
```

**Individual page titles & H1s:**

| Page | Title Tag | H1 |
|---|---|---|
| /services/new-construction | New Construction Plumber Spirit Lake ID \| Preferred Plumbing | New Construction Plumbing in Spirit Lake, Idaho |
| /services/commercial | Commercial Plumber Spirit Lake ID \| Preferred Plumbing | Commercial Plumbing Contractor — Spirit Lake & North Idaho |
| /services/radiant-heat | Radiant Heat Installation Spirit Lake ID \| Preferred Plumbing | In-Floor Radiant Heat Installation in North Idaho |
| /services/water-heaters | Water Heater Installation Spirit Lake ID \| Preferred Plumbing | Water Heater Installation & Replacement — Spirit Lake, ID |
| /services/water-softeners | Water Softener Installation Spirit Lake ID | Water Softener Installation in Spirit Lake & North Idaho |
| /services/emergency | Emergency Plumber Spirit Lake ID — 24/7 Available | 24/7 Emergency Plumber in Spirit Lake, Idaho |
| /services/sewer-line | Sewer Line Replacement Spirit Lake ID | Sewer Line Replacement in North Idaho |
| /services/septic-systems | Septic System Installation Spirit Lake ID | Septic System Design & Installation — Idaho Panhandle |
| /services/remodels | Plumbing Remodel Contractor Spirit Lake ID | Kitchen & Bathroom Plumbing Remodels in Spirit Lake |
| /services/bathtubs-showers | Bathtub Shower Installation Spirit Lake ID | Bathtub & Shower Installation in Spirit Lake, Idaho |
| /services/toilets-faucets | Toilet Faucet Installation Spirit Lake ID | Toilet & Faucet Installation in Spirit Lake, Idaho |
| /services/dishwashers | Dishwasher Disposal Installation Spirit Lake ID | Dishwasher & Disposal Installation in Spirit Lake |

---

### PAGES 16–28: LOCAL AREA PAGES

**CRITICAL for local SEO. Build one template, generate 13 pages.**

```tsx
// app/areas/[city]/page.tsx
```

**Each area page must include:**
- H1: "Plumber in [City], Idaho — Preferred Plumbing Solutions"
- Unique 200-word intro paragraph mentioning the city 3–4x naturally
- List of services available in that city
- "Serving [City] and Surrounding Areas" section
- Embedded Google Map (static map API or iframe)
- Local FAQ (2–3 questions city-specific)
- Schema: `areaServed` targeting that specific city
- Internal links to all service pages
- CTA: "Call your local Spirit Lake plumber — 208-290-3889"

**City pages to build:**

| Slug | City | State |
|---|---|---|
| spirit-lake-id | Spirit Lake | ID |
| coeur-dalene-id | Coeur d'Alene | ID |
| post-falls-id | Post Falls | ID |
| sandpoint-id | Sandpoint | ID |
| hayden-id | Hayden | ID |
| rathdrum-id | Rathdrum | ID |
| priest-river-id | Priest River | ID |
| athol-id | Athol | ID |
| blanchard-id | Blanchard | ID |
| clark-fork-id | Clark Fork | ID |
| newport-wa | Newport | WA |
| chattaroy-wa | Chattaroy | WA |
| spokane-valley-wa | Spokane Valley | WA |

---

### PAGE 29: GALLERY `/gallery`

- Masonry grid layout using CSS columns or Masonry.js
- All images from `/public/images/gallery-*`
- Lightbox on click (use `yet-another-react-lightbox`)
- Filter tabs: All / Residential / Commercial / New Construction / Remodels
- Images pulled from Sanity CMS (so client can upload new ones)
- Each image has alt text: "[description] — Preferred Plumbing Solutions, Spirit Lake ID"
- H1: "Project Gallery — Preferred Plumbing Solutions"

**Gallery images to start with:**
```
gallery-plumbing-trim-faucets-bathtubs.jpg    → tag: Residential, Remodels
gallery-plumbing-showers-tub-toilets.jpg      → tag: Residential, Remodels
gallery-grease-trap-commercial.jpg            → tag: Commercial
service-new-construction-plumbing.jpg         → tag: New Construction
service-radiant-heat-boiler.jpg               → tag: New Construction, Residential
service-water-heater-installation.jpg         → tag: Residential
service-sewer-line-replacement.jpg            → tag: Commercial, Residential
service-septic-system-installation.jpg        → tag: New Construction
```

---

### PAGE 30: PORTFOLIO `/portfolio` (CMS-driven)

Each portfolio entry in Sanity:
```ts
{
  title: string
  slug: string
  location: string  // "Spirit Lake, ID"
  serviceType: string  // "New Construction"
  description: string
  beforeImages: image[]
  afterImages: image[]
  completionDate: date
  featured: boolean
}
```

Display as card grid → individual project pages at `/portfolio/[slug]`

---

### PAGE 31: BLOG `/blog` (CMS-driven, major SEO asset)

**Sanity schema for posts:**
```ts
{
  title: string
  slug: string
  publishedAt: datetime
  excerpt: string
  body: portableText
  coverImage: image
  category: reference  // 'how-to' | 'tips' | 'local' | 'guides'
  seoTitle: string
  seoDescription: string
  focusKeyword: string
}
```

**First 12 blog posts to write & publish (high-value local SEO):**

1. "How to Choose a Plumber in Spirit Lake, Idaho" — `/blog/how-to-choose-plumber-spirit-lake-idaho`
2. "Signs You Need a Sewer Line Replacement in North Idaho" — `/blog/signs-sewer-line-replacement-north-idaho`
3. "Radiant Heat vs. Forced Air: What North Idaho Homeowners Should Know" — `/blog/radiant-heat-vs-forced-air-idaho`
4. "How Much Does a Water Heater Cost to Install in Idaho?" — `/blog/water-heater-installation-cost-idaho`
5. "Best Water Softeners for Hard Water in the Idaho Panhandle" — `/blog/water-softeners-idaho-panhandle`
6. "What to Do When a Pipe Bursts in Winter in Idaho" — `/blog/burst-pipe-winter-idaho-what-to-do`
7. "New Construction Plumbing: A Complete Guide for Idaho Homebuilders" — `/blog/new-construction-plumbing-guide-idaho`
8. "Septic System Installation Requirements in Bonner County, Idaho" — `/blog/septic-system-bonner-county-idaho`
9. "Is Your Water Heater Ready for Winter? North Idaho Homeowner Checklist" — `/blog/water-heater-winter-checklist-north-idaho`
10. "How Radiant In-Floor Heat Works and Why Idaho Homes Love It" — `/blog/how-radiant-heat-works-idaho`
11. "Plumbing Permits in Spirit Lake, Idaho: What You Need to Know" — `/blog/plumbing-permits-spirit-lake-idaho`
12. "Kitchen Remodel Plumbing: What to Expect in North Idaho" — `/blog/kitchen-remodel-plumbing-north-idaho`

---

### PAGE 32: CONTACT `/contact`

**Two-column layout on desktop, stacked on mobile:**

Left column — contact info:
- Phone: 208-290-3889 (tappable)
- Location: Spirit Lake, Idaho
- Hours: Mon–Fri 7am–5pm / Sun 7am–5pm (Emergency) / 24/7 Emergency Line
- Embedded Google Map of Spirit Lake, ID area
- Social links: TikTok (@preferredhnorris), Google Maps

Right column — form:
```tsx
// Fields:
// - Full Name (required)
// - Phone Number (required, tel input)
// - Email (optional)
// - City / Zip (required)
// - Service needed (select dropdown — all 13 services)
// - Describe the job (textarea)
// - How did you hear about us? (select: Google, Facebook, TikTok, Friend, Other)
// - Submit: "Send My Free Quote Request"
```

**Form submission flow:**
1. Client-side validation via `react-hook-form` + `zod`
2. POST to `/api/contact` (Next.js route handler)
3. Send email via Resend to `[owner email]`
4. Optional: POST to GoHighLevel webhook for CRM
5. Redirect to `/thank-you`
6. Fire GA4 conversion event: `gtag('event', 'generate_lead', {...})`

```ts
// app/api/contact/route.ts
import { Resend } from 'resend'
const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(req: Request) {
  const body = await req.json()
  await resend.emails.send({
    from: 'website@preferredplumbingsolution.com',
    to: 'ron@preferredplumbingsolution.com',
    subject: `New Quote Request from ${body.name} — ${body.service}`,
    html: `<p><strong>Name:</strong> ${body.name}</p>
           <p><strong>Phone:</strong> ${body.phone}</p>
           <p><strong>City:</strong> ${body.city}</p>
           <p><strong>Service:</strong> ${body.service}</p>
           <p><strong>Message:</strong> ${body.message}</p>`
  })
  return Response.json({ success: true })
}
```

---

## 🔍 SEO — COMPLETE IMPLEMENTATION

### Meta Tags (every page)
```tsx
// app/layout.tsx base metadata
export const metadata: Metadata = {
  metadataBase: new URL('https://www.preferredplumbingsolution.com'),
  title: {
    template: '%s | Preferred Plumbing Solutions — Spirit Lake, ID',
    default: 'Plumber Spirit Lake ID | Preferred Plumbing Solutions | 208-290-3889',
  },
  description: 'Preferred Plumbing Solutions — Spirit Lake\'s most trusted plumber. 38+ years. New construction, radiant heat, water heaters, emergency service. Call 208-290-3889.',
  keywords: ['plumber Spirit Lake Idaho', 'plumbing contractor North Idaho', 'emergency plumber Coeur d\'Alene', 'radiant heat installer Idaho', 'new construction plumber Idaho Panhandle'],
  authors: [{ name: 'Preferred Plumbing Solutions' }],
  creator: 'Preferred Plumbing Solutions',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://www.preferredplumbingsolution.com',
    siteName: 'Preferred Plumbing Solutions',
    images: [{ url: '/images/og-preferred-plumbing-solutions.png', width: 1200, height: 630 }],
  },
  twitter: { card: 'summary_large_image' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  verification: { google: 'XT0FWUcWxSnGoN04Hg-n1T4eVmj7sc8cLUWuXSjpBWk' },
}
```

### Schema.org — LocalBusiness (global, in layout.tsx)
```json
{
  "@context": "https://schema.org",
  "@type": "Plumber",
  "name": "Preferred Plumbing Solutions",
  "url": "https://www.preferredplumbingsolution.com",
  "logo": "https://www.preferredplumbingsolution.com/images/preferred-plumbing-logo.png",
  "image": "https://www.preferredplumbingsolution.com/images/preferred-plumbing-service-truck.jpg",
  "telephone": "+12082903889",
  "priceRange": "$$",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Spirit Lake",
    "addressRegion": "ID",
    "postalCode": "83869",
    "addressCountry": "US"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": 47.9668,
    "longitude": -116.8693
  },
  "openingHoursSpecification": [
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Monday","Tuesday","Wednesday","Thursday","Friday"], "opens": "07:00", "closes": "17:00" },
    { "@type": "OpeningHoursSpecification", "dayOfWeek": ["Sunday"], "opens": "07:00", "closes": "17:00" }
  ],
  "areaServed": [
    "Spirit Lake, ID", "Coeur d'Alene, ID", "Post Falls, ID",
    "Sandpoint, ID", "Hayden, ID", "Rathdrum, ID", "Priest River, ID",
    "Athol, ID", "Blanchard, ID", "Clark Fork, ID",
    "Newport, WA", "Chattaroy, WA", "Spokane Valley, WA"
  ],
  "sameAs": [
    "https://www.tiktok.com/@preferredhnorris",
    "https://www.google.com/maps/place/Preferred+Plumbing+Solutions"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Plumbing Services",
    "itemListElement": [
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "New Construction Plumbing" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Radiant Heat Installation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Water Heater Installation" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Emergency Plumbing Service" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sewer Line Replacement" }},
      { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Septic System Installation" }}
    ]
  }
}
```

### FAQ Schema (homepage + /faqs page)
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "Do you offer 24/7 emergency plumbing in Spirit Lake, Idaho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. Preferred Plumbing Solutions offers 24/7 emergency plumbing throughout Spirit Lake and all of North Idaho. Call 208-290-3889 any time."
      }
    },
    {
      "@type": "Question",
      "name": "Are your plumbers licensed and insured in Idaho?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Yes. All technicians are fully licensed and insured in Idaho and Washington. We carry full liability and workers' compensation coverage."
      }
    },
    {
      "@type": "Question",
      "name": "How soon can you start a new construction plumbing project?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "Typically within 1–2 weeks of finalizing plans and permits. We coordinate with builders and general contractors to stay on schedule."
      }
    }
  ]
}
```

### Sitemap Generation
```js
// next-sitemap.config.js
module.exports = {
  siteUrl: 'https://www.preferredplumbingsolution.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ['/thank-you', '/api/*'],
  additionalPaths: async () => [
    { loc: '/', priority: 1.0, changefreq: 'weekly' },
    { loc: '/services', priority: 0.9 },
    { loc: '/contact', priority: 0.9 },
    { loc: '/gallery', priority: 0.7 },
  ],
}
```

### robots.txt
```
User-agent: *
Allow: /
Disallow: /api/
Disallow: /thank-you
Sitemap: https://www.preferredplumbingsolution.com/sitemap.xml
```

### Image SEO
- Every `<Image />` must have descriptive `alt` text
- Format: `"[what's shown] — Preferred Plumbing Solutions, Spirit Lake ID"`
- Use `next/image` with `width`, `height`, `priority` on above-fold images
- Use `loading="lazy"` on below-fold images (default in next/image)
- Serve WebP via next/image automatic conversion
- Add `sizes` prop for responsive breakpoints

### Core Web Vitals Targets
- LCP < 2.5s — use `priority` prop on hero image/video poster
- CLS < 0.1 — always set width/height on images
- INP < 200ms — minimize JS bundle, use Server Components
- Use `@vercel/speed-insights` to monitor

---

## 📱 MOBILE-FIRST REQUIREMENTS

### Sticky Bottom CTA Bar (mobile only, hidden ≥640px)
```tsx
// components/MobileCtaBar.tsx
// Position: fixed bottom-0, z-50
// Two buttons full-width flex:
//   [📞 Call Now — 208-290-3889]  [Get Free Quote]
// Hidden on md: and above via Tailwind: hidden md:hidden
// Add pb-[env(safe-area-inset-bottom)] for iPhone notch
```

### Header Mobile Behavior
- White background (#ffffff)
- Logo left (36px icon + "PREFERRED PLUMBING" text)
- Hamburger right (3-bar → X animation)
- No call button on mobile (bottom bar handles it)
- Drawer slides in from right, full screen, dark overlay behind
- Drawer links: Home, Services, About, Gallery, Areas, FAQ, Contact
- Drawer bottom: big blue Call Now button + ghost Get Quote button
- Close on: link tap, backdrop tap, Escape key

### Touch Targets
- All tap targets minimum 44×44px
- Phone number links: `<a href="tel:2082903889">` — full-width on mobile
- Form inputs: min height 48px, font-size 16px (prevents iOS zoom)

---

## 🎨 DESIGN SYSTEM — FROM TEMPLATE

### Colors
```css
--blue: #0077CC;
--blue-light: #0099EE;
--blue-dark: #005FA3;
--navy: #0D1B2A;
--navy-mid: #162235;
--steel: #1E3A5F;
--white: #FFFFFF;
--black: #111111;
--gray: #555F6E;
--ice: #E8F0F7;
--body-text: #D0DCE8;
```

### Typography
- Display/Headlines: Barlow Condensed (500, 700, 900) — ALL CAPS, tight tracking
- Body: Barlow (400, 500, 600)
- H1: clamp(2.8rem, 11vw, 5rem), weight 900, uppercase
- H2: clamp(2rem, 7vw, 3rem), weight 900, uppercase
- H3: 1.05rem, weight 700, uppercase, letter-spacing 0.04em

### Components to build
- `<Button variant="primary|secondary|ghost" size="sm|md|lg" />`
- `<ServiceCard image href title description />`
- `<ReviewCard stars author location text />`
- `<AreaChip city href />`
- `<FAQItem question answer />` (with animated accordion)
- `<SectionLabel text />` — small caps, blue, with left line
- `<TrustStat number suffix label />`
- `<ContactForm />`
- `<Header />` — with mobile drawer built in
- `<Footer />`
- `<MobileCtaBar />`
- `<EmergencyBand />`
- `<HeroSection />` — video bg variant + image bg variant

---

## 🗂️ CMS — SANITY.IO SETUP

```bash
npm create sanity@latest -- --project preferred-plumbing --dataset production
```

### Schemas to create:
- `post` (blog)
- `portfolio` (project gallery)
- `review` (testimonials — sync from Google)
- `serviceArea` (city pages content)
- `faq` (FAQ entries)
- `siteSettings` (phone, hours, address — editable by client)

### Sanity Studio: deploy to `/studio` route using Next.js App Router integration

---

## 📊 ANALYTICS & TRACKING

### Google Analytics 4
```tsx
// app/layout.tsx
import { GoogleAnalytics } from '@next/third-parties/google'
<GoogleAnalytics gaId="G-XXXXXXXXXX" />
```

### GA4 Conversion Events to fire:
- `generate_lead` — on contact form submit
- `phone_call` — on any `tel:` link click
- `scroll_depth` — 25%, 50%, 75%, 100%
- `service_click` — on service card clicks

### Google Search Console
- Verify via meta tag (already in source: `XT0FWUcWxSnGoN04Hg-n1T4eVmj7sc8cLUWuXSjpBWk`)
- Submit sitemap immediately after launch

### Microsoft Clarity (free heatmaps)
```html
<script>
  (function(c,l,a,r,i,t,y){ ... })(window, document, "clarity", "script", "CLARITY_ID");
</script>
```

---

## 🔒 PERFORMANCE & SECURITY

### next.config.ts
```ts
const config: NextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [
      { protocol: 'https', hostname: 'lirp.cdn-website.com' },
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  headers: async () => [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
      ],
    },
    {
      source: '/images/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
  ],
  compress: true,
}
```

### Environment Variables (.env.local)
```
RESEND_API_KEY=
NEXT_PUBLIC_GA_ID=
SANITY_PROJECT_ID=
SANITY_DATASET=production
SANITY_API_TOKEN=
NEXT_PUBLIC_SANITY_PROJECT_ID=
NEXT_PUBLIC_SANITY_DATASET=production
GHL_WEBHOOK_URL=  # optional GoHighLevel
```

---

## 🚀 LAUNCH CHECKLIST

### Pre-Launch
- [ ] All pages built and linked
- [ ] All images downloaded, renamed, compressed (< 200KB each)
- [ ] Hero video compressed (< 5MB), WebM version made
- [ ] All `<Image>` alt tags written
- [ ] All Schema.org JSON-LD validated at schema.org/validator
- [ ] All internal links working (no 404s)
- [ ] Contact form tested — email arrives within 2 mins
- [ ] GA4 conversion firing on form submit
- [ ] Phone click tracking working
- [ ] Mobile bottom bar CTA tested on iPhone + Android
- [ ] Hamburger menu tested on iPhone + Android
- [ ] LCP < 2.5s (measure with PageSpeed Insights)
- [ ] robots.txt and sitemap.xml accessible
- [ ] Custom 404 page built
- [ ] Privacy policy page live

### DNS / Domain
- Point `www.preferredplumbingsolution.com` to Vercel
- Set up `preferredplumbingsolution.com` (non-www) redirect → www
- Enable Vercel HTTPS (auto via Let's Encrypt)

### Post-Launch (Week 1)
- [ ] Submit sitemap to Google Search Console
- [ ] Submit sitemap to Bing Webmaster Tools
- [ ] Verify Google Business Profile — add website URL
- [ ] Add new photos to Google Business Profile from `/public/images/`
- [ ] Set up weekly GSC rank tracking
- [ ] Share new site on TikTok (@preferredhnorris)
- [ ] Ask Ron's existing customers for Google reviews

---

## 📈 LOCAL SEO QUICK WIN CHECKLIST (First 30 Days)

1. **Google Business Profile** — Claim/optimize, add all services, add photos from site, set up Q&A with top questions
2. **Yelp listing** — Create or claim, add photos
3. **Bing Places** — Mirror GBP listing
4. **Apple Maps** — Register at mapsconnect.apple.com
5. **HomeAdvisor / Angi / Thumbtack** — Create profiles with link back to site
6. **BBB listing** — Spirit Lake / North Idaho chapter
7. **Chamber of Commerce** — Spirit Lake Chamber — get a .gov or .org backlink
8. **NAP consistency** — Name, Address, Phone must be IDENTICAL everywhere:
   - Name: `Preferred Plumbing Solutions`
   - Address: `Spirit Lake, ID 83869`
   - Phone: `(208) 290-3889`
9. **Schema breadcrumbs** — on every page
10. **Publish first 3 blog posts** within 2 weeks of launch

---

## 📋 FOLDER STRUCTURE

```
preferred-plumbing/
├── public/
│   ├── images/
│   │   ├── preferred-plumbing-logo.png
│   │   ├── preferred-plumbing-service-truck.jpg
│   │   ├── preferred-plumbing-truck-interior.jpg
│   │   ├── service-new-construction-plumbing.jpg
│   │   ├── service-radiant-heat-boiler.jpg
│   │   ├── service-water-heater-installation.jpg
│   │   ├── service-emergency-plumbing-repair.jpg
│   │   ├── service-bathroom-remodel-plumbing.jpg
│   │   ├── service-kitchen-remodel-plumbing.jpg
│   │   ├── service-commercial-plumbing-project.webp
│   │   ├── service-sewer-line-replacement.jpg
│   │   ├── service-septic-system-installation.jpg
│   │   ├── gallery-plumbing-trim-faucets-bathtubs.jpg
│   │   ├── gallery-plumbing-showers-tub-toilets.jpg
│   │   ├── gallery-grease-trap-commercial.jpg
│   │   └── og-preferred-plumbing-solutions.png
│   └── videos/
│       ├── preferred-plumbing-hero.mp4
│       └── preferred-plumbing-hero.webm
├── src/
│   ├── app/
│   │   ├── layout.tsx          ← global schema, fonts, GA
│   │   ├── page.tsx            ← homepage
│   │   ├── services/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── areas/
│   │   │   ├── page.tsx
│   │   │   └── [city]/page.tsx
│   │   ├── blog/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── gallery/page.tsx
│   │   ├── portfolio/
│   │   │   ├── page.tsx
│   │   │   └── [slug]/page.tsx
│   │   ├── about/page.tsx
│   │   ├── contact/page.tsx
│   │   ├── faqs/page.tsx
│   │   ├── thank-you/page.tsx
│   │   ├── privacy-policy/page.tsx
│   │   └── api/
│   │       └── contact/route.ts
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   ├── MobileCtaBar.tsx
│   │   │   └── NavDrawer.tsx
│   │   ├── sections/
│   │   │   ├── HeroSection.tsx
│   │   │   ├── EmergencyBand.tsx
│   │   │   ├── WhyChooseUs.tsx
│   │   │   ├── ServicesGrid.tsx
│   │   │   ├── AboutSection.tsx
│   │   │   ├── RecentProjects.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── ServiceAreas.tsx
│   │   │   ├── FAQAccordion.tsx
│   │   │   └── ContactSection.tsx
│   │   └── ui/
│   │       ├── Button.tsx
│   │       ├── ServiceCard.tsx
│   │       ├── ReviewCard.tsx
│   │       ├── SectionLabel.tsx
│   │       └── ContactForm.tsx
│   ├── lib/
│   │   ├── sanity.ts
│   │   ├── schema.ts       ← all JSON-LD generators
│   │   └── seo.ts          ← metadata generators per page type
│   └── types/
│       └── index.ts
├── sanity/
│   └── schemas/
│       ├── post.ts
│       ├── portfolio.ts
│       ├── review.ts
│       └── siteSettings.ts
├── next.config.ts
├── next-sitemap.config.js
└── .env.local
```

---

## 💰 WHAT MAKES THIS A $20K SITE

| Feature | Value |
|---|---|
| 32+ pages fully built & optimized | $8,000 |
| Mobile-first lead funnel design | $2,000 |
| Local SEO (13 city pages + schema) | $3,000 |
| CMS (Sanity) for blog/portfolio | $1,500 |
| Contact form + email automation | $500 |
| Performance optimization (Core Web Vitals) | $1,000 |
| Analytics + conversion tracking | $500 |
| Blog content strategy (12 posts outlined) | $1,500 |
| Launch checklist + GBP optimization | $500 |
| 30-day post-launch local SEO setup | $1,500 |
| **Total** | **$20,000** |

---

*Generated for Preferred Plumbing Solutions — Spirit Lake, Idaho*  
*Design template: preferred-plumbing-redesign.html*  
*Brief version: 1.0 — June 2026*
