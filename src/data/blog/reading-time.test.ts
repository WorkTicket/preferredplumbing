import { describe, expect, it } from 'vitest'
import { blogPosts } from './posts'
import {
  WORDS_PER_MINUTE,
  countWords,
  formatReadTime,
  getContentWordCount,
  getReadTimeMinutes,
  isoDurationMinutes,
} from './reading-time'

describe('reading time', () => {
  it('counts words and ignores heading markers', () => {
    expect(countWords('One two three')).toBe(3)
    expect(countWords('## How it works')).toBe(3)
    expect(countWords('  ')).toBe(0)
  })

  it('sums every content block', () => {
    expect(getContentWordCount(['One two', '## Three four five'])).toBe(5)
  })

  it('rounds to whole minutes and never returns zero', () => {
    expect(getReadTimeMinutes(['word'])).toBe(1)
    const twoHundred = Array.from({ length: WORDS_PER_MINUTE }, () => 'word').join(' ')
    expect(getReadTimeMinutes([twoHundred])).toBe(1)
    const threeHundred = Array.from({ length: 300 }, () => 'word').join(' ')
    expect(getReadTimeMinutes([threeHundred])).toBe(2)
  })

  it('formats labels and ISO durations', () => {
    expect(formatReadTime(1)).toBe('1 min read')
    expect(formatReadTime(5)).toBe('5 min read')
    expect(isoDurationMinutes(4)).toBe('PT4M')
  })

  it('matches published posts to their actual word count', () => {
    for (const post of blogPosts) {
      const words = getContentWordCount(post.content)
      const minutes = getReadTimeMinutes(post.content)
      expect(words).toBeGreaterThan(50)
      expect(minutes).toBe(Math.max(1, Math.round(words / WORDS_PER_MINUTE)))
    }
  })

  it('gives high-value cluster posts enough length for real authority', () => {
    const slugs = [
      'radiant-heat-cost-north-idaho',
      'heated-driveway-cost-north-idaho',
      'tankless-water-heater-cost-north-idaho',
      'trenchless-sewer-repair-north-idaho',
      'radiant-heat-new-construction-idaho',
    ]
    for (const slug of slugs) {
      const post = blogPosts.find((p) => p.slug === slug)
      expect(post, slug).toBeTruthy()
      expect(getContentWordCount(post!.content), slug).toBeGreaterThanOrEqual(700)
      expect(getReadTimeMinutes(post!.content), slug).toBeGreaterThanOrEqual(4)
    }
  })
})
