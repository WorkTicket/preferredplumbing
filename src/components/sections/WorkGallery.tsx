import { galleryProjects } from '@/data/gallery'
import WorkGalleryClient from './WorkGalleryClient'

const featuredSlugs = [
  'boiler-radiant-heat',
  'gas-line-installation',
  'water-heater-replacement',
  'septic-system-installation',
] as const

const featuredTabLabels: Record<(typeof featuredSlugs)[number], string> = {
  'boiler-radiant-heat': 'Radiant Heat',
  'gas-line-installation': 'Gas Line',
  'water-heater-replacement': 'Water Heater',
  'septic-system-installation': 'Septic',
}

export default function WorkGallery() {
  const featured = featuredSlugs
    .map((slug) => galleryProjects.find((p) => p.slug === slug && p.images.length >= 2))
    .filter((p): p is (typeof galleryProjects)[number] => Boolean(p))
    .map((p) => ({
      id: p.id,
      slug: p.slug,
      title: p.title,
      category: p.category,
      location: p.location,
      description: p.description,
      beforeSrc: p.images[0],
      afterSrc: p.images[1],
      tabLabel: featuredTabLabels[p.slug as (typeof featuredSlugs)[number]] ?? p.title,
    }))

  const preview = galleryProjects.slice(0, 6).map((item) => ({
    id: item.id,
    title: item.title,
    location: item.location,
    category: item.category,
    coverImage: item.coverImage,
  }))

  return <WorkGalleryClient featured={featured} preview={preview} />
}
