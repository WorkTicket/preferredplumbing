export interface BlogPostSummary {
  slug: string
  title: string
  excerpt: string
  date: string
  category: string
}

export interface BlogPost extends BlogPostSummary {
  content: string[]
  relatedService?: {
    href: string
    label: string
  }
}
