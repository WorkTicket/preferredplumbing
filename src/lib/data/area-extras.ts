import type { AreaPage } from '@/types'

export type AreaComboSection = {
  slug: string
  heading: string
  body: string
}

export type AreaExtras = {
  /** Drive time / dispatch note from the Spirit Lake shop. */
  driveTime: string
  /** Neighborhoods and landmarks named on the city page. */
  neighborhoods: string[]
  /** Service + location sections. Spirit Lake should have the deepest set. */
  comboSections?: AreaComboSection[]
  /** Optional verified local photo (never reuse another city's project shot). */
  localPhoto?: { src: string; alt: string }
  /** Under-hero note. Use on Lilac City cross-shop towns: free estimate, no dispatch fee. */
  ctaNote?: string
  /** Bottom CTA band subtitle. */
  ctaBandSubtitle?: string
}

export const SHOP_COORDS = { latitude: 47.9668, longitude: -116.8693 } as const

export const areaExtras: Record<string, AreaExtras> = {
  'spirit-lake-id': {
    driveTime:
      'The truck is based in Spirit Lake. Same-day work Sunday through Friday, 7am to 5pm, is often a matter of finishing the current job — not a 90-minute wait while a Spokane Valley shop climbs US-95. Twin Lakes, Cape Horn, and in-town calls are our home radius.',
    neighborhoods: [
      'Maine Street / downtown Spirit Lake',
      'Spirit Lake shoreline',
      'Twin Lakes',
      'Cape Horn',
      'Blanchard Road corridor',
      'Timberlake area',
      'Farragut State Park approaches',
    ],
    localPhoto: {
      src: '/images/preferred-plumbing-service-truck.webp',
      alt: 'Preferred Plumbing Solutions service truck based in Spirit Lake, Idaho',
    },
    comboSections: [
      {
        slug: 'water-heaters',
        heading: 'Water heater install in Spirit Lake',
        body: 'A failed tank in Spirit Lake is not a “wait until next week” problem when the well house or garage is already near freezing. We repair and replace gas and electric tanks, size for household demand, and talk through tankless when the gas line and winter inlet temperature actually support it. Hard well water here shortens anode and tank life — flushing and softening are part of the conversation, not an upsell after the leak starts.',
      },
      {
        slug: 'septic-systems',
        heading: 'Septic and well plumbing in Spirit Lake',
        body: 'A lot of Spirit Lake and Twin Lakes properties are on private wells and septic, not city sewer. That is a different job than a Coeur d\'Alene house on municipal lines. We look at the tank, drain field, and house plumbing together — backups, odors, and slow drains are often a septic or effluent issue, not a clogged fixture trap. We also handle the house-side plumbing that has to work with a well: pressure tanks, pressure switches, and freeze protection in well houses and crawl spaces.',
      },
      {
        slug: 'radiant-heat',
        heading: 'Radiant heat in Spirit Lake',
        body: 'In-floor hydronic heat is one of the few comfort upgrades that matches how cold this town actually gets. New slabs around Twin Lakes and on acreage off Blanchard Road are the cleanest time to lay tubing. Retrofits still work in bathrooms, basements, and additions. We size boilers for design-day load, not a mild February afternoon, and we can plan a heated driveway zone on the same plant when the heat source allows.',
      },
      {
        slug: 'drain-cleaning',
        heading: 'Drain cleaning in Spirit Lake',
        body: 'Kitchen grease, hair, and roots in older clay or Orangeburg laterals show up the same here as anywhere — but a backup on a septic property is not always a “snake the main and leave.” We clear fixture and branch lines, camera when the clog keeps returning, and tell you if the problem is a drain, a sewer lateral, or the septic tank. That diagnosis matters in Spirit Lake more than in towns on city sewer.',
      },
    ],
  },
  'coeur-dalene-id': {
    driveTime:
      'Typically 35–50 minutes from our Spirit Lake shop depending on US-95 traffic and lake-corridor weather. We plan material runs so the visit is a work day, not a windshield estimate.',
    neighborhoods: ["Coeur d'Alene Lake", 'Tubbs Hill', 'downtown / Sherman Avenue', 'Silverwood corridor'],
  },
  'post-falls-id': {
    driveTime:
      'Typically 35–45 minutes from Spirit Lake via Rathdrum. Post Falls is a regular run for new-construction rough-ins and water heater calls.',
    neighborhoods: ["Q'emiln Park", 'Falls Park', 'Spokane River', 'Prairie / highway corridor'],
    ctaNote: 'Free estimates. No dispatch fee — you hear the scope before we start.',
    ctaBandSubtitle: 'Free estimates. No dispatch fee. Call for a same-day window during business hours.',
  },
  'sandpoint-id': {
    driveTime:
      'Typically 50–70 minutes north from Spirit Lake, longer in winter on US-95. We schedule Sandpoint as a dedicated trip so parts are on the truck before we leave the shop.',
    neighborhoods: ['City Beach', 'Lake Pend Oreille shoreline', 'Schweitzer-area access', 'downtown Sandpoint'],
  },
  'hayden-id': {
    driveTime:
      'Typically 25–40 minutes from Spirit Lake. Hayden Lake and inland neighborhoods are a standard Kootenai County dispatch.',
    neighborhoods: ['Hayden Lake', 'Honeysuckle Beach', 'Avondale', 'inland Hayden'],
    ctaNote: 'Free estimates. No dispatch fee — you hear the scope before we start.',
    ctaBandSubtitle: 'Free estimates. No dispatch fee. Call for a same-day window during business hours.',
  },
  'rathdrum-id': {
    driveTime:
      'Typically 20–30 minutes from our Spirit Lake shop — Twin Lakes, the prairie, and Rathdrum proper are a home-radius run, not a stretch trip from Spokane. Same-day water heater and emergency slots during business hours are often realistic because we are already north of I-90.',
    neighborhoods: ['Rathdrum Mountain', 'Twin Lakes corridor', 'Mountain View Park', 'prairie / highway corridor'],
    ctaNote: 'Free estimates. No dispatch fee — you hear the scope before we start.',
    ctaBandSubtitle: 'Free estimates. No dispatch fee. Short run from Spirit Lake during business hours.',
  },
  'moscow-id': {
    driveTime:
      'Moscow is a longer Palouse run (about two hours from Spirit Lake). We quote travel in the estimate and treat it as a planned project day, not a pop-in service call.',
    neighborhoods: ['University of Idaho / campus area', 'downtown Moscow', 'east-side homes', 'Moscow Mountain foothills'],
  },
  'priest-river-id': {
    driveTime:
      'Typically 35–50 minutes north from Spirit Lake. We often pair Priest River stops with Oldtown or Newport when the schedule allows.',
    neighborhoods: ['Pend Oreille River', 'Priest Lake country access', 'Kaniksu forest edge'],
  },
  'athol-id': {
    driveTime:
      'Athol is next door — typically 10–20 minutes from the Spirit Lake shop. Same-day service during business hours is often available because we are already on this side of Farragut, not dispatching up from the valley.',
    neighborhoods: ['Silverwood Theme Park area', 'Farragut State Park', 'highway corridor', 'Athol Bay'],
  },
  'blanchard-id': {
    driveTime:
      'Typically 15–25 minutes from Spirit Lake. Rural lots and seasonal cabins west of town are a regular run — we leave from the shop next door, so winter access and well-house freeze calls do not wait on a long-haul dispatch.',
    neighborhoods: ['Blanchard Lake', 'Cocolalla Lake', 'acreage off the main corridors'],
  },
  'clark-fork-id': {
    driveTime:
      'Typically 60–80 minutes from Spirit Lake on a northern run. We stage parts at the shop so the truck arrives ready to work, not to write a second estimate.',
    neighborhoods: ['Clark Fork River', 'Lake Pend Oreille', 'Cabinet Mountains approaches'],
  },
  'newport-wa': {
    driveTime:
      'Typically 30–45 minutes from Spirit Lake across the Idaho line. We are licensed for Washington work in Pend Oreille County.',
    neighborhoods: ['Pend Oreille River', 'Newport-Oldtown Bridge', 'highway-corridor commercial'],
  },
  'mead-wa': {
    driveTime:
      'Typically 50–70 minutes into north Spokane County from Spirit Lake. Quoted as a planned visit with Washington licensing and a firm scope.',
    neighborhoods: ['Little Spokane River', 'Mount Spokane foothills', 'north Spokane corridor'],
  },
  'chattaroy-wa': {
    driveTime:
      'Typically 50–70 minutes from Spirit Lake. Rural Spokane County wells and long driveways are treated as project days, not quick pop-ins.',
    neighborhoods: ['Little Spokane River', 'Mount Spokane', 'acreage / well properties'],
  },
  'oldtown-id': {
    driveTime:
      'Typically 30–40 minutes from Spirit Lake on the Idaho side of the Newport bridge. Same-day service during business hours is often realistic.',
    neighborhoods: ['Pend Oreille River', 'Newport-Oldtown Bridge', 'Main Street / older buildings'],
  },
}

export function extrasForArea(area: Pick<AreaPage, 'slug' | 'city'>): AreaExtras {
  return (
    areaExtras[area.slug] ?? {
      driveTime: `We dispatch to ${area.city} from our Spirit Lake shop. Call for a realistic arrival window during business hours.`,
      neighborhoods: [area.city],
    }
  )
}
