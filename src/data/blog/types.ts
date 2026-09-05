interface BlogPostMeta {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
  coverImage: string
  coverImageAlt: string
}

export interface BlogPostSummary extends BlogPostMeta {
  /** Derived from content word count — never hardcoded. */
  readTimeMinutes: number
}

export interface BlogPost extends BlogPostMeta {
  seoTitle?: string
  content: string[]
  relatedService?: {
    href: string
    label: string
  }
}
