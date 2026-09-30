/** Public IndexNow key (hosted at `/{key}.txt`). Safe to commit. */
export const INDEXNOW_KEY = 'preferredplumbing-indexnow-7f3c9a2b1e84'
export const INDEXNOW_HOST = 'www.callpreferredplumbing.com'
export const INDEXNOW_KEY_PATH = `/${INDEXNOW_KEY}.txt`
export const INDEXNOW_KEY_LOCATION = `https://${INDEXNOW_HOST}${INDEXNOW_KEY_PATH}`
export const INDEXNOW_ENDPOINT = 'https://api.indexnow.org/indexnow'

export function parseSitemapLocs(xml: string): string[] {
  const locs = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((match) => match[1].trim())
  return [...new Set(locs)].filter((loc) => {
    if (!loc.startsWith(`https://${INDEXNOW_HOST}`)) return false
    if (loc.endsWith('.xml') || loc.endsWith('.txt')) return false
    return true
  })
}

export function indexNowPayload(urlList: string[]) {
  return {
    host: INDEXNOW_HOST,
    key: INDEXNOW_KEY,
    keyLocation: INDEXNOW_KEY_LOCATION,
    urlList,
  }
}
