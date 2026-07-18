export type { GalleryProject, GalleryProjectSummary } from './types'
export { galleryProjects } from './projects'
import { galleryProjects } from './projects'
import type { GalleryProject, GalleryProjectSummary } from './types'

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
