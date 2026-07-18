import type { LucideIcon } from 'lucide-react'
import {
  Bath,
  Car,
  Container,
  Droplet,
  Droplets,
  Flame,
  Fuel,
  GitBranch,
  Hammer,
  HardHat,
  Heater,
  Landmark,
  ShowerHead,
  Siren,
  ThermometerSun,
  WashingMachine,
  Waves,
} from 'lucide-react'
import { KitchenSink } from '@/lib/icons/kitchen-sink'
import { services } from '@/lib/data'
import type { Service } from '@/types'

export type ServiceNavGroup = {
  id: string
  label: string
  slugs: readonly string[]
}

export const SERVICE_NAV_GROUPS: ServiceNavGroup[] = [
  {
    id: 'emergency',
    label: 'Emergency',
    slugs: ['emergency'],
  },
  {
    id: 'specialty',
    label: 'Specialty & High-Value',
    slugs: [
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
    slugs: ['sewer-line', 'water-line', 'gas-line', 'septic-systems'],
  },
]

export const SERVICE_NAV_ORDER = SERVICE_NAV_GROUPS.flatMap((group) => group.slugs)

export const SERVICE_NAV_LABELS: Record<string, string> = {
  emergency: 'Emergency Plumbing',
  'radiant-heat': 'Radiant Heat & In-Floor',
  'heated-driveways': 'Heated Driveways',
  'new-construction': 'New Construction',
  commercial: 'Commercial',
  'tankless-water-heaters': 'Tankless Water Heaters',
  'water-heaters': 'Water Heaters',
  'water-softeners': 'Water Softeners',
  remodels: 'Remodels',
  'kitchen-remodels': 'Kitchen Remodels',
  'bathroom-remodels': 'Bathroom Remodels',
  'toilets-faucets': 'Toilets & Faucets',
  'bathtubs-showers': 'Bathtubs & Showers',
  dishwashers: 'Dishwashers',
  'sewer-line': 'Sewer Lines',
  'water-line': 'Water Line Replacement',
  'gas-line': 'Gas Line Services',
  'septic-systems': 'Septic Systems',
}

export const SERVICE_NAV_ICONS: Record<string, LucideIcon> = {
  emergency: Siren,
  'radiant-heat': ThermometerSun,
  'heated-driveways': Car,
  'new-construction': HardHat,
  commercial: Landmark,
  'tankless-water-heaters': Flame,
  'water-heaters': Heater,
  'water-softeners': Droplets,
  remodels: Hammer,
  'kitchen-remodels': KitchenSink,
  'bathroom-remodels': Bath,
  'toilets-faucets': Droplet,
  'bathtubs-showers': ShowerHead,
  dishwashers: WashingMachine,
  'sewer-line': GitBranch,
  'water-line': Waves,
  'gas-line': Fuel,
  'septic-systems': Container,
}

export function getNavServices(): Service[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))
  return SERVICE_NAV_ORDER.map((slug) => bySlug.get(slug)).filter(
    (service): service is Service => Boolean(service)
  )
}

export function getNavServiceGroups(): { id: string; label: string; services: Service[] }[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))
  return SERVICE_NAV_GROUPS.map((group) => ({
    id: group.id,
    label: group.label,
    services: group.slugs
      .map((slug) => bySlug.get(slug))
      .filter((service): service is Service => Boolean(service)),
  })).filter((group) => group.services.length > 0)
}
