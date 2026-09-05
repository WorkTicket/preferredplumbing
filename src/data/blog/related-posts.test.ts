import { describe, expect, it } from 'vitest'
import { blogPosts } from './posts'
import { getPostsForService, getRelatedPosts } from './index'

describe('getRelatedPosts', () => {
  it('returns up to three other posts', () => {
    const related = getRelatedPosts(blogPosts[0].slug, 3)
    expect(related.length).toBeGreaterThan(0)
    expect(related.length).toBeLessThanOrEqual(3)
    expect(related.some((post) => post.slug === blogPosts[0].slug)).toBe(false)
  })

  it('gives every post at least one inbound link from another post', () => {
    const inbound = new Map(blogPosts.map((post) => [post.slug, 0]))
    for (const post of blogPosts) {
      for (const related of getRelatedPosts(post.slug, 3)) {
        inbound.set(related.slug, (inbound.get(related.slug) ?? 0) + 1)
      }
    }
    inbound.forEach((count, slug) => {
      expect(count, slug).toBeGreaterThanOrEqual(1)
    })
  })
})

describe('getPostsForService', () => {
  it('returns posts whose relatedService matches the service slug', () => {
    const posts = getPostsForService('/services/radiant-heat', 3)
    expect(posts.length).toBeGreaterThan(0)
    for (const post of posts) {
      const full = blogPosts.find((item) => item.slug === post.slug)
      expect(full?.relatedService?.href).toBe('/services/radiant-heat')
    }
  })
})
