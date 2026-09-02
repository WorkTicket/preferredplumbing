export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  coverImageAlt: string
}

export interface BlogPost extends BlogPostSummary {
  seoTitle?: string
  content: string[]
  relatedService?: {
    href: string
    label: string
  }
}
