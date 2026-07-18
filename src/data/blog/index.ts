export type { BlogPost, BlogPostSummary } from './types'
export { blogPosts } from './posts'
import { blogPosts } from './posts'
import type { BlogPost, BlogPostSummary } from './types'

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getLatestPosts(count = 3): BlogPostSummary[] {
  return [...blogPosts]
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, count)
    .map(({ slug, title, excerpt, date, category }) => ({
      slug,
      title,
      excerpt,
      date,
      category,
    }))
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}
