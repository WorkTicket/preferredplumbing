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
