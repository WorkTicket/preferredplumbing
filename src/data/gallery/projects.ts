import type { GalleryProject } from './types'

const g = (name: string) => `/images/gallery/${name}?v=25`

const cover = (slug: string) => g(`${slug}-1.webp`)

/** Process (-2) → finished (-1) for compare slider, then remaining shots. */
function projectImages(slug: string, count: number): string[] {
  if (count <= 0) return []
  if (count === 1) return [g(`${slug}-1.webp`)]
  const before = g(`${slug}-2.webp`)
  const after = g(`${slug}-1.webp`)
  const rest = Array.from({ length: count - 2 }, (_, i) => g(`${slug}-${i + 3}.webp`))
  return [before, after, ...rest]
}

export const galleryProjects: GalleryProject[] = [
  {
    id: 'modern-bathroom-fixtures',
    title: 'Modern Bathroom Vanity Trim',
    slug: 'modern-bathroom-fixtures',
    category: 'Remodels',
    location: 'North Idaho',
    description:
      'Double vanity trim-out with undermount sinks, modern faucets, and clean under-sink connections.',
    scopeOfWork:
      'Undermount sink setting, faucet installation, supply connections, P-trap assembly, and leak testing.',
    materials: ['Undermount sinks', 'Matte black / brass faucets', 'Braided supply lines', 'P-trap assemblies'],
    images: projectImages('modern-bathroom-fixtures', 4),
    coverImage: cover('modern-bathroom-fixtures'),
    completionDate: '2025-08-15',
  },
  {
    id: 'shower-tub-installation',
    title: 'Shower & Tub Installation',
    slug: 'shower-tub-installation',
    category: 'Remodels',
    location: 'North Idaho',
    description:
      'Alcove tub and shower surround trim with coordinated fixture finish for a residential bath remodel.',
    scopeOfWork:
      'Tub and surround install, shower valve and trim, drain connections, and fixture calibration.',
    materials: ['Alcove tub', 'Shower surround', 'Chrome trim kit', 'Drain assembly'],
    images: projectImages('shower-tub-installation', 2),
    coverImage: cover('shower-tub-installation'),
    completionDate: '2025-07-30',
  },
  {
    id: 'new-construction-rough-in',
    title: 'New Construction Rough-In',
    slug: 'new-construction-rough-in',
    category: 'New Construction',
    location: 'North Idaho',
    description:
      'DWV and supply rough-in in framed walls and crawl spaces — washer boxes, drain stacks, and inspection-ready stub-outs.',
    scopeOfWork:
      'Wall and crawl-space DWV, water supply rough-in, washer outlet boxes, and fixture stub-outs.',
    materials: ['ABS/PVC DWV', 'PEX water lines', 'Washer outlet box', 'Fixture stub-outs'],
    images: projectImages('new-construction-rough-in', 7),
    coverImage: cover('new-construction-rough-in'),
    completionDate: '2025-05-18',
  },
  {
    id: 'under-slab-plumbing',
    title: 'Under-Slab Plumbing',
    slug: 'under-slab-plumbing',
    category: 'New Construction',
    location: 'North Idaho',
    description:
      'Foundation and under-slab drain, waste, and stub-out work before the concrete pour.',
    scopeOfWork:
      'Underground DWV layout, slab penetrations, gravel bedding, and stub-outs through foundation walls.',
    materials: ['ABS/PVC DWV', 'Slab sleeves', 'Clean-outs', 'Bedding gravel'],
    images: projectImages('under-slab-plumbing', 8),
    coverImage: cover('under-slab-plumbing'),
    completionDate: '2025-05-10',
  },
  {
    id: 'new-construction-gas-rough-in',
    title: 'New Construction Gas Rough-In',
    slug: 'new-construction-gas-rough-in',
    category: 'New Construction',
    location: 'North Idaho',
    description:
      'Black iron gas piping rough-in through wood framing for ranges, furnaces, and other appliances.',
    scopeOfWork:
      'Gas pipe routing in framed walls and floors, appliance stub-outs, and pressure-test preparation.',
    materials: ['Black iron gas pipe', 'Fittings', 'Shut-off valves', 'Pipe straps'],
    images: projectImages('new-construction-gas-rough-in', 3),
    coverImage: cover('new-construction-gas-rough-in'),
    completionDate: '2025-05-22',
  },
  {
    id: 'commercial-plumbing-project',
    title: 'Commercial Fixture Install',
    slug: 'commercial-plumbing-project',
    category: 'Commercial',
    location: 'North Idaho',
    description:
      'Commercial restroom and drinking fountain fixtures installed for a public facility build-out.',
    scopeOfWork:
      'Wall-hung urinal, dual-height drinking fountain with bottle filler, supply connections, and flush valve trim.',
    materials: ['Commercial urinal', 'Drinking fountain / bottle filler', 'Flush valves', 'Supply stops'],
    images: projectImages('commercial-plumbing-project', 2),
    coverImage: cover('commercial-plumbing-project'),
    completionDate: '2025-04-12',
  },
  {
    id: 'water-heater-replacement',
    title: 'Water Heater Installation',
    slug: 'water-heater-replacement',
    category: 'Residential',
    location: 'North Idaho',
    description:
      'Tankless and tank water heater installs with clean copper piping, gas connections, and code-compliant venting.',
    scopeOfWork:
      'Dual Navien tankless install plus residential tank water heater replacements with expansion tanks, gas piping, and venting.',
    materials: ['Navien tankless', 'A. O. Smith tank heaters', 'Copper supply', 'Black iron gas', 'PVC venting'],
    images: projectImages('water-heater-replacement', 3),
    coverImage: cover('water-heater-replacement'),
    completionDate: '2025-06-10',
  },
  {
    id: 'boiler-radiant-heat',
    title: 'Boiler & Radiant Heat System',
    slug: 'boiler-radiant-heat',
    category: 'Residential',
    location: 'North Idaho',
    description:
      'Hydronic radiant heating — outdoor tubing layouts, snow-melt paths, and finished boiler / manifold rooms.',
    scopeOfWork:
      'Radiant tubing over insulation panels, manifold setup, wall-mounted condensing boiler, expansion tank, and zone controls.',
    materials: ['Condensing boiler', 'Radiant PEX tubing', 'Manifold', 'Expansion tank', 'Circulation pump'],
    images: projectImages('boiler-radiant-heat', 6),
    coverImage: cover('boiler-radiant-heat'),
    completionDate: '2025-03-20',
  },
  {
    id: 'boiler-mechanical-room',
    title: 'Boiler Mechanical Room',
    slug: 'boiler-mechanical-room',
    category: 'Residential',
    location: 'North Idaho',
    description:
      'Clean boiler installs with copper near-boiler piping, circulators, and multi-loop radiant manifolds.',
    scopeOfWork:
      'Wall-hung boiler mounting, PVC venting, copper near-boiler piping, expansion tank, circulator, and radiant manifold tie-in.',
    materials: ['Laars / NTI boilers', 'Copper piping', 'Circulators', 'Expansion tank', 'Radiant manifold'],
    images: projectImages('boiler-mechanical-room', 3),
    coverImage: cover('boiler-mechanical-room'),
    completionDate: '2025-09-12',
  },
  {
    id: 'well-pump-system',
    title: 'Well Pump & Pressure System',
    slug: 'well-pump-system',
    category: 'Residential',
    location: 'North Idaho',
    description:
      'Well pump, pressure tank, and filtration setups that keep rural North Idaho homes supplied with reliable water.',
    scopeOfWork:
      'Pump and pressure tank install, manifold piping, filtration, gauges, and utility-room coordination.',
    materials: ['Pressure tank', 'Well pump', 'PVC / PEX manifold', 'Filter housing', 'Isolation valves'],
    images: projectImages('well-pump-system', 3),
    coverImage: cover('well-pump-system'),
    completionDate: '2025-08-28',
  },
  {
    id: 'gas-line-installation',
    title: 'Gas Line Installation',
    slug: 'gas-line-installation',
    category: 'Residential',
    location: 'North Idaho',
    description:
      'Underground and exterior gas piping — trenched supply lines, meter sets, generator hookups, and appliance stubs.',
    scopeOfWork:
      'Trenching for underground gas, meter set, black iron / CSST piping, and generator or appliance connections.',
    materials: ['CSST / PE gas line', 'Black iron pipe', 'Gas meter set', 'Shut-off valves'],
    images: projectImages('gas-line-installation', 7),
    coverImage: cover('gas-line-installation'),
    completionDate: '2025-07-08',
  },
  {
    id: 'septic-system-installation',
    title: 'Septic Tank Installation',
    slug: 'septic-system-installation',
    category: 'New Construction',
    location: 'North Idaho',
    description:
      'Concrete and plastic septic tank installs with risers, lids, and excavation for rural North Idaho properties.',
    scopeOfWork:
      'Tank placement, inlet/outlet connections, risers, lids, and inspection-ready backfill prep.',
    materials: ['Concrete / plastic septic tanks', 'Risers', 'Lids', 'PVC connections'],
    images: projectImages('septic-system-installation', 7),
    coverImage: cover('septic-system-installation'),
    completionDate: '2025-07-25',
  },
  {
    id: 'septic-drain-field',
    title: 'Septic Drain Field',
    slug: 'septic-drain-field',
    category: 'New Construction',
    location: 'North Idaho',
    description:
      'Drain field trenching and perforated pipe layout for septic leach fields across North Idaho soil conditions.',
    scopeOfWork:
      'Leach field trenching, perforated pipe runs, header connections, and winter-ready installs.',
    materials: ['Perforated drain field pipe', 'PVC header', 'Aggregate bedding', 'Risers'],
    images: projectImages('septic-drain-field', 6),
    coverImage: cover('septic-drain-field'),
    completionDate: '2025-07-26',
  },
  {
    id: 'toilets-faucets-trim',
    title: 'Toilet & Fixture Trim-Out',
    slug: 'toilets-faucets-trim',
    category: 'Remodels',
    location: 'North Idaho',
    description:
      'Toilet set and bathroom fixture trim for residential and light-commercial restrooms.',
    scopeOfWork:
      'Toilet setting and sealing, supply connections, grab-bar coordination, and leak testing.',
    materials: ['Toilet', 'Wax ring', 'Supply stops', 'Braided supply lines'],
    images: projectImages('toilets-faucets-trim', 2),
    coverImage: cover('toilets-faucets-trim'),
    completionDate: '2025-08-02',
  },
]
