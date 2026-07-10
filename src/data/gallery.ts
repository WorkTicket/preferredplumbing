export interface GalleryProject {
  id: string
  title: string
  slug: string
  category: 'Residential' | 'Commercial' | 'New Construction' | 'Remodels'
  description: string
  location?: string
  scopeOfWork?: string
  materials?: string[]
  images: string[]
  coverImage: string
  completionDate: string
}

/** Lightweight shape for grid cards — avoids shipping full project payloads to the client bundle. */
export type GalleryProjectSummary = Pick<
  GalleryProject,
  'id' | 'title' | 'slug' | 'category' | 'description' | 'location' | 'coverImage' | 'completionDate'
>

const g = (name: string) => `/images/gallery/${name}?v=23`

/** Before → after pair. Cover uses the finished shot (-1). */
const beforeAfter = (slug: string) => [
  g(`${slug}-2.webp`),
  g(`${slug}-1.webp`),
]

const cover = (slug: string) => g(`${slug}-1.webp`)

export const galleryProjects: GalleryProject[] = [
  {
    id: 'modern-bathroom-fixtures',
    title: 'Modern Bathroom Fixtures',
    slug: 'modern-bathroom-fixtures',
    category: 'Residential',
    location: 'Coeur d\'Alene, ID',
    description: 'Full bathroom trim-out featuring quality fixtures in a master suite renovation. Designed for both looks and long-term durability.',
    scopeOfWork: 'Installation of vanity, sink faucets, shower valve and trim, bathtub faucet, toilet, and all supply line connections. Pressure testing and fixture calibration included.',
    materials: ['Delta Faucets', 'Kohler Toilets', 'Moen Shower Systems', 'Copper supply lines'],
    images: beforeAfter('modern-bathroom-fixtures'),
    coverImage: cover('modern-bathroom-fixtures'),
    completionDate: '2025-08-15',
  },
  {
    id: 'shower-tub-installation',
    title: 'Shower & Tub Installation',
    slug: 'shower-tub-installation',
    category: 'Residential',
    location: 'Spirit Lake, ID',
    description: 'Custom shower and tub plumbing with trim-out completed for a North Idaho home remodel.',
    scopeOfWork: 'Shower valve rough-in and trim, tub filler installation, drain connections, and waterproofing coordination with tile crew.',
    materials: ['Moen shower valve', 'Delta tub filler', 'PVC drain assembly', 'PEX supply lines'],
    images: beforeAfter('shower-tub-installation'),
    coverImage: cover('shower-tub-installation'),
    completionDate: '2025-07-30',
  },
  {
    id: 'bathroom-remodel',
    title: 'Bathroom Remodel',
    slug: 'bathroom-remodel',
    category: 'Remodels',
    location: 'Hayden, ID',
    description: 'Complete bathroom remodel plumbing including new fixtures, supply lines, and drain updates for a refreshed master bath.',
    scopeOfWork: 'Fixture relocation, new supply and drain lines, vanity plumbing, shower trim, and final leak testing.',
    materials: ['Kohler fixtures', 'PEX supply', 'PVC DWV', 'Shut-off valves'],
    images: beforeAfter('bathroom-remodel'),
    coverImage: cover('bathroom-remodel'),
    completionDate: '2025-06-22',
  },
  {
    id: 'kitchen-remodel-plumbing',
    title: 'Kitchen Remodel Plumbing',
    slug: 'kitchen-remodel-plumbing',
    category: 'Remodels',
    location: 'Post Falls, ID',
    description: 'Kitchen remodel plumbing with new sink, dishwasher, and disposal connections for a modern layout.',
    scopeOfWork: 'Sink and faucet installation, dishwasher and disposal hookups, supply line updates, and gas line coordination for range.',
    materials: ['Kohler sink', 'Moen faucet', 'Braided supply lines', 'Disposal flange kit'],
    images: beforeAfter('kitchen-remodel-plumbing'),
    coverImage: cover('kitchen-remodel-plumbing'),
    completionDate: '2025-05-14',
  },
  {
    id: 'new-construction-rough-in',
    title: 'New Construction Rough-In',
    slug: 'new-construction-rough-in',
    category: 'New Construction',
    location: 'Rathdrum, ID',
    description: 'Complete rough-in plumbing for a custom home under construction, including supply lines, drain-waste-vent systems, and fixture stub-outs.',
    scopeOfWork: 'Underground plumbing, slab preparation, DWV system installation, water supply lines, gas line stub-outs, and shower base installation. Inspection-ready.',
    materials: ['PVC Schedule 40 DWV', 'PEX water lines', 'Copper supply lines', 'Shower bases', 'Fixture stub-outs'],
    images: beforeAfter('new-construction-rough-in'),
    coverImage: cover('new-construction-rough-in'),
    completionDate: '2025-05-18',
  },
  {
    id: 'commercial-grease-trap',
    title: 'Commercial Grease Trap Installation',
    slug: 'commercial-grease-trap',
    category: 'Commercial',
    location: 'Coeur d\'Alene, ID',
    description: 'Commercial grease trap and tank installation for a restaurant kitchen, meeting local health department requirements.',
    scopeOfWork: 'Grease trap sizing, tank placement, inlet and outlet connections, venting, and inspection coordination.',
    materials: ['Concrete grease trap tank', 'PVC DWV piping', 'Clean-out adapters', 'Vent risers'],
    images: beforeAfter('commercial-grease-trap'),
    coverImage: cover('commercial-grease-trap'),
    completionDate: '2025-09-05',
  },
  {
    id: 'commercial-plumbing-project',
    title: 'Commercial Plumbing Project',
    slug: 'commercial-plumbing-project',
    category: 'Commercial',
    location: 'Spirit Lake, ID',
    description: 'Full commercial plumbing scope for a multi-fixture build-out with overhead supply and drain routing.',
    scopeOfWork: 'Overhead pipe routing, fixture rough-in, commercial-grade supply lines, and pressure testing before turnover.',
    materials: ['Copper supply', 'PVC DWV', 'Commercial fixtures', 'Backflow preventer'],
    images: beforeAfter('commercial-plumbing-project'),
    coverImage: cover('commercial-plumbing-project'),
    completionDate: '2025-04-12',
  },
  {
    id: 'water-heater-replacement',
    title: 'Water Heater Replacement',
    slug: 'water-heater-replacement',
    category: 'Residential',
    location: 'Post Falls, ID',
    description: 'Replaced an aging electric tank water heater with a new Bradford White unit, expansion tank, and updated supply connections.',
    scopeOfWork: 'Removal of old electric tank, installation of new Bradford White electric water heater in drain pan, thermal expansion tank, braided supply lines, and T&P discharge routing.',
    materials: ['Bradford White electric water heater', 'Thermal expansion tank', 'Braided stainless supply lines', 'Drain pan', 'T&P relief valve'],
    images: beforeAfter('water-heater-replacement'),
    coverImage: cover('water-heater-replacement'),
    completionDate: '2025-06-10',
  },
  {
    id: 'boiler-radiant-heat',
    title: 'Boiler & Radiant Heat System',
    slug: 'boiler-radiant-heat',
    category: 'Residential',
    location: 'Hayden, ID',
    description: 'Hydronic radiant heating system installation with a high-efficiency boiler for whole-home comfort through North Idaho winters.',
    scopeOfWork: 'Boiler installation, radiant tubing layout in concrete slab, manifold setup, zone valve installation, thermostat wiring, and system balancing.',
    materials: ['Navien condensing boiler', 'Uponor radiant tubing', 'Zone valves', 'Expansion tank', 'Circulation pump'],
    images: beforeAfter('boiler-radiant-heat'),
    coverImage: cover('boiler-radiant-heat'),
    completionDate: '2025-03-20',
  },
  {
    id: 'water-softener-installation',
    title: 'Water Softener Installation',
    slug: 'water-softener-installation',
    category: 'Residential',
    location: 'Athol, ID',
    description: 'Whole-home water softener system installed in a utility room with bypass valve and drain line routing.',
    scopeOfWork: 'Softener placement, inlet and outlet plumbing, bypass valve installation, drain line connection, and system programming.',
    materials: ['Water softener unit', 'Bypass valve', 'PEX supply lines', 'Drain tubing'],
    images: beforeAfter('water-softener-installation'),
    coverImage: cover('water-softener-installation'),
    completionDate: '2025-02-18',
  },
  {
    id: 'sewer-line-replacement',
    title: 'Sewer Line Replacement',
    slug: 'sewer-line-replacement',
    category: 'Residential',
    location: 'Sandpoint, ID',
    description: 'Full sewer line replacement from the home to the city main, including excavation and new PVC piping.',
    scopeOfWork: 'Trench excavation, removal of failed line, new PVC sewer installation, clean-out placement, and backfill with compaction.',
    materials: ['PVC sewer pipe', 'Clean-out assembly', 'Bedding sand', 'Warning tape'],
    images: beforeAfter('sewer-line-replacement'),
    coverImage: cover('sewer-line-replacement'),
    completionDate: '2025-03-05',
  },
  {
    id: 'septic-system-installation',
    title: 'Septic System Installation',
    slug: 'septic-system-installation',
    category: 'New Construction',
    location: 'Spirit Lake, ID',
    description: 'New septic tank and leach field installation for a rural North Idaho property.',
    scopeOfWork: 'Tank placement, leach field trenching, drain line connections, clean-out risers, and health district inspection.',
    materials: ['Concrete septic tank', 'Aggregate drain bundles', 'PVC header pipe', 'Clean-out risers'],
    images: beforeAfter('septic-system-installation'),
    coverImage: cover('septic-system-installation'),
    completionDate: '2025-07-25',
  },
  {
    id: 'toilets-faucets-trim',
    title: 'Toilets & Faucets Trim-Out',
    slug: 'toilets-faucets-trim',
    category: 'Residential',
    location: 'Coeur d\'Alene, ID',
    description: 'Fixture trim-out with toilets, faucets, and supply connections for a multi-bathroom residential project.',
    scopeOfWork: 'Toilet setting and sealing, faucet installation, supply line connections, and leak testing on all fixtures.',
    materials: ['Kohler toilets', 'Delta faucets', 'Braided supply lines', 'Wax rings'],
    images: beforeAfter('toilets-faucets-trim'),
    coverImage: cover('toilets-faucets-trim'),
    completionDate: '2025-08-02',
  },
  {
    id: 'dishwasher-disposal-install',
    title: 'Dishwasher & Disposal Install',
    slug: 'dishwasher-disposal-install',
    category: 'Remodels',
    location: 'Hayden, ID',
    description: 'Kitchen appliance plumbing for a new dishwasher and garbage disposal during a countertop and cabinet upgrade.',
    scopeOfWork: 'Disposal mounting and drain connection, dishwasher supply and drain hookup, air gap installation, and electrical coordination.',
    materials: ['Garbage disposal', 'Dishwasher drain hose', 'Air gap', 'Supply valve'],
    images: beforeAfter('dishwasher-disposal-install'),
    coverImage: cover('dishwasher-disposal-install'),
    completionDate: '2025-04-28',
  },
  {
    id: 'emergency-plumbing-repair',
    title: 'Emergency Plumbing Repair',
    slug: 'emergency-plumbing-repair',
    category: 'Residential',
    location: 'Spirit Lake, ID',
    description: 'Emergency repair of a burst supply line under a kitchen sink, completed same-day to prevent water damage.',
    scopeOfWork: 'Shut-off valve replacement, supply line repair, leak testing, and cleanup of affected cabinet area.',
    materials: ['Braided supply lines', 'Angle stop valves', 'Pipe fittings'],
    images: beforeAfter('emergency-plumbing-repair'),
    coverImage: cover('emergency-plumbing-repair'),
    completionDate: '2025-01-15',
  },
  {
    id: 'plumbing-remodel-upgrades',
    title: 'Plumbing Remodel Upgrades',
    slug: 'plumbing-remodel-upgrades',
    category: 'Remodels',
    location: 'Rathdrum, ID',
    description: 'Whole-home plumbing upgrades during a major remodel, including fixture updates and supply line modernization.',
    scopeOfWork: 'Fixture replacement, PEX repiping in remodel zones, drain updates, and coordination with general contractor schedule.',
    materials: ['PEX tubing', 'Modern fixtures', 'Shut-off valves', 'PVC DWV fittings'],
    images: beforeAfter('plumbing-remodel-upgrades'),
    coverImage: cover('plumbing-remodel-upgrades'),
    completionDate: '2025-05-30',
  },
  {
    id: 'field-service-crew',
    title: 'On-Site Field Service',
    slug: 'field-service-crew',
    category: 'Residential',
    location: 'North Idaho',
    description: 'Our crew on site with a fully stocked service truck, ready for new construction and remodel plumbing across the region.',
    scopeOfWork: 'Mobile service dispatch with stocked trucks for rough-in, trim-out, and emergency calls throughout North Idaho.',
    materials: ['Service truck inventory', 'PEX and PVC fittings', 'Common fixture parts'],
    images: beforeAfter('field-service-crew'),
    coverImage: cover('field-service-crew'),
    completionDate: '2025-07-01',
  },
]

export const galleryProjectSummaries: GalleryProjectSummary[] = galleryProjects.map(
  ({ id, title, slug, category, description, location, coverImage, completionDate }) => ({
    id,
    title,
    slug,
    category,
    description,
    location,
    coverImage,
    completionDate,
  })
)

const galleryProjectById = new Map(galleryProjects.map((p) => [p.id, p]))

export function getGalleryProjectById(id: string): GalleryProject | undefined {
  return galleryProjectById.get(id)
}
