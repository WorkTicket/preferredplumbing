import { describe, expect, it } from 'vitest'
import { isNavActive } from './nav-active'

describe('isNavActive', () => {
  it('matches home only on exact path', () => {
    expect(isNavActive('/', '/')).toBe(true)
    expect(isNavActive('/about', '/')).toBe(false)
  })

  it('matches section roots and nested paths', () => {
    expect(isNavActive('/services', '/services')).toBe(true)
    expect(isNavActive('/services/emergency', '/services')).toBe(true)
    expect(isNavActive('/gallery', '/services')).toBe(false)
  })
})
