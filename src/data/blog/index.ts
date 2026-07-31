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
    .map(({ slug, title, excerpt, date, category, coverImage, coverImageAlt }) => ({
      slug,
      title,
      excerpt,
      date,
      category,
      coverImage,
      coverImageAlt,
    }))
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

/** Related posts for internal linking — same category first, then newest. */
export function getRelatedPosts(slug: string, count = 3): BlogPostSummary[] {
  const current = getBlogPost(slug)
  if (!current) return []

  const others = blogPosts.filter((post) => post.slug !== slug)
  const sameCategory = others.filter((post) => post.category === current.category)
  const rest = others.filter((post) => post.category !== current.category)
  const ranked = [...sameCategory, ...rest].sort((a, b) => b.date.localeCompare(a.date))

  return ranked.slice(0, count).map(({ slug: s, title, excerpt, date, category, coverImage, coverImageAlt }) => ({
    slug: s,
    title,
    excerpt,
    date,
    category,
    coverImage,
    coverImageAlt,
  }))
}
