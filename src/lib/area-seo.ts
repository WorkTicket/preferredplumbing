import type { AreaPage, FAQ } from '@/types'
import { clampAtWord, DESCRIPTION_MAX, TITLE_MAX } from './seo'

const BRAND_SUFFIX = ' | Preferred Plumbing'

function withBrand(title: string): string {
  return /Preferred Plumbing/i.test(title) ? title : `${title}${BRAND_SUFFIX}`
}

/** SERP title: keep the money keyword, add a click hook when it still fits. */
export function citySeoTitle(area: AreaPage): string {
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
  ],
  'coeur-dalene-id': [
    {
      question: "Is Preferred Plumbing a licensed plumbing company in Coeur d'Alene?",
      answer:
        "Yes. We are a licensed, insured plumbing company serving Coeur d'Alene and Kootenai County from our Spirit Lake shop. We handle residential, commercial, and emergency plumbing.",
    },
  ],
  'rathdrum-id': [
    {
      question: 'Do you offer emergency plumbing in Rathdrum?',
      answer:
        'Yes. We dispatch from Spirit Lake for emergency plumbing in Rathdrum during business hours, Sunday through Friday 7am to 5pm. Same-day service is often available.',
    },
  ],
  'post-falls-id': [
    {
      question: 'Do you serve Post Falls for water heater repair?',
      answer:
        'Yes. Water heater repair, replacement, and new installs are among our most common Post Falls calls. We also handle new construction rough-ins and sewer work.',
    },
  ],
  'hayden-id': [
    {
      question: 'Do you provide plumbing services in Hayden?',
      answer:
        'Yes. We serve Hayden Lake, Avondale, and inland Hayden neighborhoods for water heaters, remodels, softeners, and emergency repairs during business hours.',
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

/** Popular services to surface on city pages — heated driveways where GSC shows demand. */
export function areaServicesForCity(citySlug: string) {
  const base = [
    { slug: 'emergency', label: 'Emergency Plumbing' },
    { slug: 'water-heaters', label: 'Water Heater Repair & Installation' },
    { slug: 'sewer-line', label: 'Sewer Line Replacement' },
    { slug: 'septic-systems', label: 'Septic Systems' },
    { slug: 'radiant-heat', label: 'Radiant Floor Heating' },
    { slug: 'new-construction', label: 'New Construction Plumbing' },
  ]

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

  if (heatedDrivewayCities.has(citySlug)) {
    return [
      base[0],
      { slug: 'heated-driveways', label: 'Heated Driveway Installation' },
      ...base.slice(1),
    ]
  }

  return base
}
