/** Single source of truth for service slug grouping and homepage featured sets. */

export type ServiceNavGroupSlugs = {
  id: string
  label: string
  description: string
  slugs: readonly string[]
}

/** Three left-rail categories for the services mega menu. */
export const SERVICE_NAV_GROUPS: ServiceNavGroupSlugs[] = [
  {
    id: 'specialty',
    label: 'Signature Services',
    description: 'Radiant heat, new builds & emergency',
    slugs: [
      'emergency',
      'radiant-heat',
      'heated-driveways',
      'new-construction',
      'commercial',
      'tankless-water-heaters',
    ],
  },
  {
    id: 'residential',
    label: 'Residential',
    description: 'Remodels, fixtures & water systems',
    slugs: [
      'water-heaters',
      'water-softeners',
      'remodels',
      'kitchen-remodels',
      'bathroom-remodels',
      'toilets-faucets',
      'bathtubs-showers',
      'dishwashers',
    ],
  },
  {
    id: 'underground',
    label: 'Underground & Utility',
    description: 'Sewer, water, gas & septic',
    slugs: ['sewer-line', 'drain-cleaning', 'water-line', 'leak-detection', 'gas-line', 'septic-systems'],
  },
]

export const SERVICE_NAV_ORDER = SERVICE_NAV_GROUPS.flatMap((group) => group.slugs)

/** Homepage Signature Services cards (includes emergency) */
export const SPECIALTY_SERVICE_SLUGS = (
  SERVICE_NAV_GROUPS.find((group) => group.id === 'specialty')?.slugs ?? []
) as readonly string[]

/** Homepage All Services preview cards */
export const FEATURED_HOME_SERVICE_SLUGS = [
  'water-heaters',
  'sewer-line',
  'remodels',
] as const
