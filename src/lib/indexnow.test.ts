import { readFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { describe, expect, it } from 'vitest'
import {
  INDEXNOW_HOST,
  INDEXNOW_KEY,
  INDEXNOW_KEY_LOCATION,
  INDEXNOW_KEY_PATH,
  indexNowPayload,
  parseSitemapLocs,
} from './indexnow'

describe('IndexNow', () => {
  it('hosts a matching key file at the site root', () => {
    const file = resolve(process.cwd(), 'public', `${INDEXNOW_KEY}.txt`)
    expect(readFileSync(file, 'utf8').trim()).toBe(INDEXNOW_KEY)
    expect(INDEXNOW_KEY_PATH).toBe(`/${INDEXNOW_KEY}.txt`)
    expect(INDEXNOW_KEY_LOCATION).toBe(`https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`)
  })

  it('extracts canonical HTML URLs from a sitemap index plus urlset', () => {
    const xml = `<?xml version="1.0"?>
      <sitemapindex>
        <sitemap><loc>https://www.callpreferredplumbing.com/sitemap-0.xml</loc></sitemap>
      </sitemapindex>
      <urlset>
        <url><loc>https://www.callpreferredplumbing.com/</loc></url>
        <url><loc>https://www.callpreferredplumbing.com/contact</loc></url>
        <url><loc>https://www.callpreferredplumbing.com/${INDEXNOW_KEY}.txt</loc></url>
      </urlset>`
    expect(parseSitemapLocs(xml)).toEqual([
      'https://www.callpreferredplumbing.com/',
      'https://www.callpreferredplumbing.com/contact',
    ])
  })

  it('builds the IndexNow POST body', () => {
    const payload = indexNowPayload(['https://www.callpreferredplumbing.com/'])
    expect(payload).toEqual({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: INDEXNOW_KEY_LOCATION,
      urlList: ['https://www.callpreferredplumbing.com/'],
    })
  })
})
