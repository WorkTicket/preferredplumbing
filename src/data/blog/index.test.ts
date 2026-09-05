import { describe, expect, it } from 'vitest'
import { blogPosts } from './posts'
import { getPostsByDate, getPostsForService, getRelatedPosts } from './index'

describe('blog internal linking', () => {
  it('exposes every post for sitewide footer links', () => {
    expect(getPostsByDate()).toHaveLength(blogPosts.length)
    expect(blogPosts.length).toBeGreaterThanOrEqual(15)
  })

  it('maps every post to an internal page for extra inbound links', () => {
    for (const post of blogPosts) {
      expect(post.relatedService?.href).toMatch(/^\//)
      const inbound = getPostsForService(post.relatedService!.href)
      expect(inbound.some((item) => item.slug === post.slug)).toBe(true)
    }
  })

  it('returns related posts so articles are not dead ends', () => {
    for (const post of blogPosts) {
      const related = getRelatedPosts(post.slug, 3)
      expect(related.length).toBeGreaterThan(0)
      expect(related.every((item) => item.slug !== post.slug)).toBe(true)
    }
  })
})
