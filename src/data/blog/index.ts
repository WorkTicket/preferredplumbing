export type { BlogPost, BlogPostSummary } from './types'
export { blogPosts } from './posts'
import { blogPosts } from './posts'
import type { BlogPost, BlogPostSummary } from './types'
import { getReadTimeMinutes } from './reading-time'

export { formatReadTime, getContentWordCount, getReadTimeMinutes, isoDurationMinutes } from './reading-time'

export function toBlogSummary(post: BlogPost): BlogPostSummary {
  return {
    slug: post.slug,
    title: post.title,
    excerpt: post.excerpt,
    date: post.date,
    category: post.category,
    coverImage: post.coverImage,
    coverImageAlt: post.coverImageAlt,
    readTimeMinutes: getReadTimeMinutes(post.content),
  }
}

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find((post) => post.slug === slug)
}

export function getPostsByDate(): BlogPost[] {
  return [...blogPosts].sort((a, b) => b.date.localeCompare(a.date))
}

export function getLatestPosts(count = 3): BlogPostSummary[] {
  return getPostsByDate().slice(0, count).map(toBlogSummary)
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((post) => post.slug)
}

/** Related posts for internal linking — neighbors first so older posts still get inbound links. */
export function getRelatedPosts(slug: string, count = 3): BlogPostSummary[] {
  const current = getBlogPost(slug)
  if (!current) return []

  const ordered = getPostsByDate()
  const index = ordered.findIndex((post) => post.slug === slug)
  const picked: BlogPost[] = []
  const seen = new Set<string>([slug])

  const push = (post: BlogPost | undefined) => {
    if (!post || seen.has(post.slug)) return
    seen.add(post.slug)
    picked.push(post)
  }

  if (index > 0) push(ordered[index - 1])
  if (index >= 0 && index < ordered.length - 1) push(ordered[index + 1])

  const others = ordered.filter((post) => !seen.has(post.slug))
  const sameCategory = others.filter((post) => post.category === current.category)
  const rest = others.filter((post) => post.category !== current.category)

  for (const post of [...sameCategory, ...rest]) {
    if (picked.length >= count) break
    push(post)
  }

  return picked.slice(0, count).map(toBlogSummary)
}

/** Posts that point at a service page — used for extra dofollow internal links. */
export function getPostsForService(serviceHref: string, count = 3): BlogPostSummary[] {
  return getPostsByDate()
    .filter((post) => post.relatedService?.href === serviceHref)
    .slice(0, count)
    .map(toBlogSummary)
}
