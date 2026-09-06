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
  Home,
  Landmark,
  Search,
  ShowerHead,
  Siren,
  Sparkles,
  ThermometerSun,
  WashingMachine,
  Waves,
} from 'lucide-react'
import { KitchenSink } from '@/lib/icons/kitchen-sink'
import { services } from '@/lib/data'
import { SERVICE_NAV_GROUPS, SERVICE_NAV_ORDER } from '@/lib/service-slugs'
import type { Service } from '@/types'

export type ServiceNavGroup = {
  id: string
  label: string
  description: string
  icon: LucideIcon
  slugs: readonly string[]
}

const GROUP_ICONS: Record<string, LucideIcon> = {
  specialty: Sparkles,
  residential: Home,
  underground: Waves,
}

export { SERVICE_NAV_ORDER }

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
  'drain-cleaning': 'Drain Cleaning',
  'water-line': 'Water Line Replacement',
  'leak-detection': 'Leak Detection',
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
  'drain-cleaning': Waves,
  'water-line': Waves,
  'leak-detection': Search,
  'gas-line': Fuel,
  'septic-systems': Container,
}

export type NavServiceGroup = {
  id: string
  label: string
  description: string
  icon: LucideIcon
  services: Service[]
}

export function getNavServices(): Service[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))
  return SERVICE_NAV_ORDER.map((slug) => bySlug.get(slug)).filter(
    (service): service is Service => Boolean(service)
  )
}

export function getNavServiceGroups(): NavServiceGroup[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))
  return SERVICE_NAV_GROUPS.map((group) => ({
    id: group.id,
    label: group.label,
    description: group.description,
    icon: GROUP_ICONS[group.id] ?? Sparkles,
    services: group.slugs
      .map((slug) => bySlug.get(slug))
      .filter((service): service is Service => Boolean(service)),
  })).filter((group) => group.services.length > 0)
}

export function getNavGroupIdForSlug(slug: string): string | undefined {
  return SERVICE_NAV_GROUPS.find((group) => group.slugs.includes(slug))?.id
}
