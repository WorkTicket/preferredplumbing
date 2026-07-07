import type { LucideIcon } from 'lucide-react'
import {
  Bath,
  Container,
  CookingPot,
  Droplet,
  Filter,
  GitBranch,
  Hammer,
  HardHat,
  Heater,
  Landmark,
  ShowerHead,
  Siren,
  ThermometerSun,
  WashingMachine,
} from 'lucide-react'
import { services } from '@/lib/data'
import type { Service } from '@/types'

export const SERVICE_NAV_ORDER = [
  'emergency',
  'new-construction',
  'commercial',
  'radiant-heat',
  'water-heaters',
  'water-softeners',
  'remodels',
  'kitchen-remodels',
  'bathroom-remodels',
  'toilets-faucets',
  'bathtubs-showers',
  'dishwashers',
  'sewer-line',
  'septic-systems',
] as const

export const SERVICE_NAV_LABELS: Record<string, string> = {
  emergency: '24/7 Emergency',
  'new-construction': 'New Construction',
  commercial: 'Commercial',
  'radiant-heat': 'Radiant Heat',
  'water-heaters': 'Water Heaters',
  'water-softeners': 'Water Softeners',
  remodels: 'Remodels',
  'kitchen-remodels': 'Kitchen Remodels',
  'bathroom-remodels': 'Bathroom Remodels',
  'toilets-faucets': 'Toilets & Faucets',
  'bathtubs-showers': 'Bathtubs & Showers',
  dishwashers: 'Dishwashers',
  'sewer-line': 'Sewer Lines',
  'septic-systems': 'Septic Systems',
}

export const SERVICE_NAV_ICONS: Record<string, LucideIcon> = {
  emergency: Siren,
  'new-construction': HardHat,
  commercial: Landmark,
  'radiant-heat': ThermometerSun,
  'water-heaters': Heater,
  'water-softeners': Filter,
  remodels: Hammer,
  'kitchen-remodels': CookingPot,
  'bathroom-remodels': Bath,
  'toilets-faucets': Droplet,
  'bathtubs-showers': ShowerHead,
  dishwashers: WashingMachine,
  'sewer-line': GitBranch,
  'septic-systems': Container,
}

export function getNavServices(): Service[] {
  const bySlug = new Map(services.map((service) => [service.slug, service]))
  return SERVICE_NAV_ORDER.map((slug) => bySlug.get(slug)).filter(
    (service): service is Service => Boolean(service)
  )
}
