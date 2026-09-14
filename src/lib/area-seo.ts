import type { AreaPage, FAQ } from '@/types'
import { clampAtWord, DESCRIPTION_MAX, TITLE_MAX } from './seo'

const BRAND_SUFFIX = ' | Preferred Plumbing'

function withBrand(title: string): string {
  return /Preferred Plumbing/i.test(title) ? title : `${title}${BRAND_SUFFIX}`
}

/**
 * CTR experiments for hubs already on page 2–3 (GSC 2026-09-13).
 * Do not add Post Falls / CDA / Rathdrum here — those are ranking problems, not title problems.
 */
const CITY_SERP_OVERRIDE: Record<string, { title: string; description: string }> = {
  'hayden-id': {
    title: 'Hayden Plumbing | Free Estimates',
    description:
      'Hayden plumbing with free estimates and no dispatch fee. Water heaters, repairs, and remodels from our Spirit Lake shop. Call 208-290-3889.',
  },
  'sandpoint-id': {
    title: 'Plumber Sandpoint ID | Radiant Heat',
    description:
      'Plumber in Sandpoint for Lake Pend Oreille homes: radiant heat, septic, and freeze repairs. Scheduled trips from Spirit Lake. Call 208-290-3889.',
  },
}

/** SERP title: keep the money keyword, add a click hook when it still fits. */
export function citySeoTitle(area: AreaPage): string {
  const override = CITY_SERP_OVERRIDE[area.slug]?.title
  if (override && withBrand(override).length <= TITLE_MAX) return override

  const candidates = [
    `Plumber in ${area.city}, ${area.state} | Same-Day`,
    `Plumber in ${area.city}, ${area.state}`,
    `Plumber in ${area.city}`,
    `Plumber ${area.city}`,
  ]
  for (const candidate of candidates) {
    if (withBrand(candidate).length <= TITLE_MAX) return candidate
  }
  return clampAtWord(`Plumber ${area.city}`, TITLE_MAX - BRAND_SUFFIX.length)
}

/** Unique snippet per city — uses the page's own short copy instead of a shared template. */
export function citySeoDescription(area: AreaPage): string {
  const override = CITY_SERP_OVERRIDE[area.slug]?.description
  if (override) {
    if (override.length <= DESCRIPTION_MAX) return override
    return clampAtWord(override, DESCRIPTION_MAX)
  }
  const cta = ' Free estimates. Call 208-290-3889.'
  const unique = area.description.trim().replace(/[.]+$/, '')
  const combined = `${unique}.${cta}`
  if (combined.length <= DESCRIPTION_MAX) return combined
  return `${clampAtWord(unique, DESCRIPTION_MAX - cta.length).replace(/[.]+$/, '')}.${cta}`
}

const CITY_EXTRA_FAQS: Record<string, FAQ[]> = {
  'spirit-lake-id': [
    {
      question: 'Who is the local plumber in Spirit Lake?',
      answer:
        'Preferred Plumbing Solutions is based in Spirit Lake. Ron and Hunter Norris run a family-owned shop with decades of combined experience serving Twin Lakes, Farragut, and all of Kootenai County.',
    },
    {
      question: 'Do Spirit Lake homes usually have wells and septic systems?',
      answer:
        'Many do. In-town parcels may be on municipal water, but Twin Lakes, Cape Horn, Blanchard Road, and acreage toward Farragut commonly run private wells and septic instead of city sewer. That is different from most Coeur d\'Alene neighborhoods. We diagnose house plumbing, pressure tanks, and septic together instead of treating a backup as a simple clog.',
      href: '/services/septic-systems',
      linkLabel: 'Spirit Lake septic plumbing →',
    },
    {
      question: 'How often should I pump a septic tank in Spirit Lake?',
      answer:
        'For a typical year-round household, a pump-out every three to five years is a common starting point. Heavy use, a garbage disposal, extra bedrooms, or a tank that was never sized for the house can mean sooner. Seasonal cabins that sit empty still need pumping on a calendar, not “when it smells.” If toilets gurgle, drains slow in more than one bathroom, or the yard gets soggy over the drain field, do not keep flushing — call before the system backs into the house.',
    },
    {
      question: 'How do I winterize a well in Spirit Lake?',
      answer:
        'Insulate the well house or pitless adapter area, keep the pressure tank and switch dry and above freezing, and drain outdoor hose bibs and any unheated lines. Vacant cabins need a real winterization — not just turning down the heat. We handle freeze repairs when it is already too late, but a fall visit is cheaper than a burst line in January.',
    },
  ],
  'coeur-dalene-id': [
    {
      question: "Is Preferred Plumbing Solutions a licensed plumbing company in Coeur d'Alene?",
      answer:
        "Yes. We are a licensed, insured plumbing company serving Coeur d'Alene and Kootenai County from our Spirit Lake shop. We handle residential, commercial, and emergency plumbing.",
    },
  ],
  'rathdrum-id': [
    {
      question: 'Do you offer emergency plumbing in Rathdrum?',
      answer:
        'Yes. We dispatch from Spirit Lake — typically 20–30 minutes to Rathdrum and Twin Lakes — during business hours, Sunday through Friday 7am to 5pm. Same-day service is often available because we are already north of I-90, not rolling up from Spokane Valley.',
    },
    {
      question: 'Do you charge a dispatch fee for a Rathdrum estimate?',
      answer:
        'No. Estimates are free, and there is no dispatch fee to come look at the job. We explain the scope before work starts so you are not paying a trip charge just to hear the number.',
    },
  ],
  'post-falls-id': [
    {
      question: 'Do you serve Post Falls for water heater repair?',
      answer:
        'Yes. Water heater repair, replacement, and new installs are among our most common Post Falls calls. We also handle new construction rough-ins and sewer work.',
    },
    {
      question: 'Is there a dispatch fee for a Post Falls plumbing estimate?',
      answer:
        'No. Estimates are free and we do not charge a dispatch fee to quote the work. You hear the scope before we start — then you decide.',
    },
  ],
  'hayden-id': [
    {
      question: 'Do you provide plumbing services in Hayden?',
      answer:
        'Yes. We serve Hayden Lake, Avondale, and inland Hayden neighborhoods for water heaters, remodels, softeners, and emergency repairs during business hours.',
    },
    {
      question: 'Do Hayden plumbing estimates include a dispatch fee?',
      answer:
        'No. We give free estimates with no dispatch fee. Call 208-290-3889 and we will tell you what the visit covers before anyone rolls.',
    },
  ],
  'sandpoint-id': [
    {
      question: 'Do Sandpoint and Bonner County homes need well and septic plumbing?',
      answer:
        'Often yes, especially outside city sewer. Shoreline cabins and hillside properties mix wells, pressure tanks, and septic with freeze risk from lake-effect cold. We treat those as one system, and radiant heat is a frequent add on Sandpoint remodels and new builds.',
      href: '/services/radiant-heat',
      linkLabel: 'Radiant heat in Sandpoint country →',
    },
  ],
  'moscow-id': [
    {
      question: 'Is it worth having a Spirit Lake plumber travel to Moscow?',
      answer:
        'For larger jobs — radiant heat, commercial TI, or a full remodel rough-in — yes. We quote travel up front and concentrate the work into planned days so you are not paying for repeated windshield time. Small emergency clogs are usually better handled by a Palouse shop that is already in town.',
    },
  ],
  'priest-river-id': [
    {
      question: 'Can you work on wells and septic in Priest River?',
      answer:
        'Yes. River cabins and forest-adjacent homes here commonly run private water and septic. We handle house plumbing, pressure issues, freeze damage, and the piping that has to work with the tank — and we plan the trip from Spirit Lake so parts are on the truck.',
      href: '/services/septic-systems',
      linkLabel: 'Septic plumbing →',
    },
  ],
  'athol-id': [
    {
      question: 'How fast can you get to Athol from Spirit Lake?',
      answer:
        'Athol is next door, typically 10–20 minutes. Same-day water heater, drain, and emergency calls during business hours are often realistic. Rural lots toward Farragut and Silverwood still need well and freeze-depth planning even when the drive is short.',
    },
  ],
  'blanchard-id': [
    {
      question: 'Do you plumb wells and new construction in Blanchard?',
      answer:
        'Yes. Blanchard is rural North Idaho: acreage, wells, septic, and seasonal cabins. We size pressure systems for how the property is used and install water lines deep enough for this climate, not a catalog default.',
    },
  ],
  'clark-fork-id': [
    {
      question: 'Do you take plumbing calls in Clark Fork?',
      answer:
        'Yes, on scheduled northern runs. Cabinet Mountains cold and river-valley moisture show up as frozen hose bibs, crawlspace issues, and heaters that struggle. We stage parts in Spirit Lake so the visit is a work day.',
    },
  ],
  'newport-wa': [
    {
      question: 'Are you licensed for plumbing in Newport, Washington?',
      answer:
        'Yes. We are licensed for Washington work and regularly cross from Oldtown for residential and light commercial plumbing in Pend Oreille County. Permits and inspections stay on the Washington side of the job.',
    },
  ],
  'mead-wa': [
    {
      question: 'Do you serve Mead and north Spokane County?',
      answer:
        'Yes, with Washington licensing. Mead mixes suburban streets with acreage that still needs well-aware plumbing. We quote travel from Spirit Lake in the estimate so the number stays honest.',
    },
  ],
  'chattaroy-wa': [
    {
      question: 'Can you work on well systems in Chattaroy?',
      answer:
        'Yes. Long driveways, pressure tanks, filtration, and freeze protection are the usual Chattaroy conversation — not city-water defaults. Tell us about gated or seasonal access when you book so we arrive with enough daylight to finish.',
    },
  ],
  'oldtown-id': [
    {
      question: 'How close are you to Oldtown from Spirit Lake?',
      answer:
        'Typically 30–40 minutes. River moisture and freeze risk hit crawlspaces and outdoor sillcocks here. Because Oldtown is a short run, emergency and same-day service during business hours is often realistic when the schedule allows.',
    },
  ],
}

export function areaFaqs(area: AreaPage): FAQ[] {
  const hours = 'Sunday through Friday, 7am to 5pm (closed Saturday)'
  const basedHere = area.slug === 'spirit-lake-id'

  const base: FAQ[] = [
    {
      question: `Do you serve ${area.fullName}?`,
      answer: basedHere
        ? `Yes. Preferred Plumbing Solutions is based in Spirit Lake. ${area.pageIntro[0]}`
        : `Yes. We regularly serve ${area.fullName} from our Spirit Lake shop. ${area.description}`,
    },
    {
      question: `How soon can a plumber get to ${area.city}?`,
      answer: basedHere
        ? `Same-day service is often available during business hours because we are already in town. We take emergency calls ${hours}.`
        : `We dispatch from Spirit Lake. ${area.mapBlurb} Emergency plumbing is available ${hours}.`,
    },
    {
      question: `What plumbing work do you do in ${area.city}?`,
      answer: `In ${area.fullName} we handle emergency repairs, water heaters, sewer and water lines, septic, radiant heat, heated driveways, remodels, and new construction. ${area.localFocus[0]}`,
    },
    {
      question: `How do I get a free plumbing estimate in ${area.city}?`,
      answer: `Call 208-290-3889 or send the contact form. Estimates for ${area.fullName} are free, and we explain the scope before any work starts.`,
    },
  ]

  const extra = CITY_EXTRA_FAQS[area.slug] ?? []
  return [...extra, ...base]
}

/** Popular services to surface on city pages — lead with what that town actually needs. */
const BASE_CITY_SERVICES = [
  { slug: 'emergency', label: 'Emergency Plumbing' },
  { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
  { slug: 'drain-cleaning', label: 'Drain Cleaning' },
  { slug: 'sewer-line', label: 'Sewer Line Replacement' },
  { slug: 'leak-detection', label: 'Leak Detection' },
  { slug: 'septic-systems', label: 'Septic Systems' },
  { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
  { slug: 'new-construction', label: 'New Construction Plumbing' },
] as const

const CITY_LEAD_SERVICES: Record<string, { slug: string; label: string }[]> = {
  'spirit-lake-id': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'drain-cleaning', label: 'Drain Cleaning' },
  ],
  'sandpoint-id': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
  ],
  'priest-river-id': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'emergency', label: 'Emergency Plumbing' },
  ],
  'blanchard-id': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'new-construction', label: 'New Construction Plumbing' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
  ],
  'athol-id': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'emergency', label: 'Emergency Plumbing' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
  ],
  'clark-fork-id': [
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
  ],
  'post-falls-id': [
    { slug: 'new-construction', label: 'New Construction Plumbing' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'drain-cleaning', label: 'Drain Cleaning' },
  ],
  'hayden-id': [
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'drain-cleaning', label: 'Drain Cleaning' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
  ],
  'rathdrum-id': [
    { slug: 'emergency', label: 'Emergency Plumbing' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'new-construction', label: 'New Construction Plumbing' },
  ],
  'coeur-dalene-id': [
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'drain-cleaning', label: 'Drain Cleaning' },
    { slug: 'sewer-line', label: 'Sewer Line Replacement' },
  ],
  'chattaroy-wa': [
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
  ],
  'newport-wa': [
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'emergency', label: 'Emergency Plumbing' },
    { slug: 'sewer-line', label: 'Sewer Line Replacement' },
  ],
  'oldtown-id': [
    { slug: 'emergency', label: 'Emergency Plumbing' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'drain-cleaning', label: 'Drain Cleaning' },
  ],
  'moscow-id': [
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'new-construction', label: 'New Construction Plumbing' },
    { slug: 'heated-driveways', label: 'Heated Driveway Installation' },
  ],
}

const heatedDrivewayCities = new Set([
  'spirit-lake-id',
  'coeur-dalene-id',
  'post-falls-id',
  'moscow-id',
  'hayden-id',
  'rathdrum-id',
  'sandpoint-id',
  'athol-id',
])

export function areaServicesForCity(citySlug: string) {
  const heated = { slug: 'heated-driveways', label: 'Heated Driveway Installation' }
  const lead = CITY_LEAD_SERVICES[citySlug] ?? []
  const rest = BASE_CITY_SERVICES.filter((service) => !lead.some((item) => item.slug === service.slug))
  const merged = [...lead, ...rest]
  if (heatedDrivewayCities.has(citySlug) && !merged.some((item) => item.slug === 'heated-driveways')) {
    const insertAt = Math.min(1, merged.length)
    merged.splice(insertAt, 0, heated)
  }
  return merged
}
