import { describe, expect, it } from 'vitest'
import {
  CANONICAL_ORIGIN,
  canonicalLinkHeaderValue,
  shouldSetCanonicalLinkHeader,
  toCanonicalUrl,
} from './canonical'

describe('toCanonicalUrl', () => {
  it('returns the origin for home', () => {
    expect(toCanonicalUrl('')).toBe(CANONICAL_ORIGIN)
    expect(toCanonicalUrl('/')).toBe(CANONICAL_ORIGIN)
  })

  it('normalizes slugs, paths, trailing slashes, and absolute URLs', () => {
    expect(toCanonicalUrl('privacy-policy')).toBe(`${CANONICAL_ORIGIN}/privacy-policy`)
    expect(toCanonicalUrl('/privacy-policy/')).toBe(`${CANONICAL_ORIGIN}/privacy-policy`)
    expect(toCanonicalUrl('blog/radiant-heat-new-construction-idaho')).toBe(
      `${CANONICAL_ORIGIN}/blog/radiant-heat-new-construction-idaho`,
    )
    expect(toCanonicalUrl(`${CANONICAL_ORIGIN}/privacy-policy`)).toBe(
      `${CANONICAL_ORIGIN}/privacy-policy`,
    )
    expect(toCanonicalUrl('http://callpreferredplumbing.com/privacy-policy/')).toBe(
      `${CANONICAL_ORIGIN}/privacy-policy`,
    )
  })
})

describe('canonical Link header', () => {
  it('emits an RFC 5988 rel=canonical header', () => {
    expect(canonicalLinkHeaderValue('/privacy-policy')).toBe(
      `<${CANONICAL_ORIGIN}/privacy-policy>; rel="canonical"`,
    )
    expect(canonicalLinkHeaderValue('/')).toBe(`<${CANONICAL_ORIGIN}>; rel="canonical"`)
  })

  it('skips machine routes', () => {
    expect(shouldSetCanonicalLinkHeader('/privacy-policy')).toBe(true)
    expect(shouldSetCanonicalLinkHeader('/robots.txt')).toBe(false)
    expect(shouldSetCanonicalLinkHeader('/sitemap.xml')).toBe(false)
    expect(shouldSetCanonicalLinkHeader('/sitemap-0.xml')).toBe(false)
    expect(shouldSetCanonicalLinkHeader('/api/contact')).toBe(false)
  })
})
