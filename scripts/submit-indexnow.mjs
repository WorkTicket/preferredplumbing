/**
 * Ping IndexNow with every canonical URL from the generated sitemap.
 * Run after a production deploy so the key file is already live.
 *
 *   node scripts/submit-indexnow.mjs
 */
import { readFileSync, existsSync } from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..')

const INDEXNOW_TS = readFileSync(path.join(ROOT, 'src', 'lib', 'indexnow.ts'), 'utf8')
const INDEXNOW_KEY = INDEXNOW_TS.match(/INDEXNOW_KEY = '([^']+)'/)?.[1]
const INDEXNOW_HOST = INDEXNOW_TS.match(/INDEXNOW_HOST = '([^']+)'/)?.[1]
const INDEXNOW_ENDPOINT = INDEXNOW_TS.match(/INDEXNOW_ENDPOINT = '([^']+)'/)?.[1]

if (!INDEXNOW_KEY || !INDEXNOW_HOST || !INDEXNOW_ENDPOINT) {
  throw new Error('Could not read IndexNow constants from src/lib/indexnow.ts')
}

const KEY_LOCATION = `https://${INDEXNOW_HOST}/${INDEXNOW_KEY}.txt`

function parseSitemapLocs(xml) {
  const locs = [...xml.matchAll(/<loc>\s*([^<]+)\s*<\/loc>/gi)].map((match) => match[1].trim())
  return [...new Set(locs)].filter((loc) => {
    if (!loc.startsWith(`https://${INDEXNOW_HOST}`)) return false
    if (loc.endsWith('.xml') || loc.endsWith('.txt')) return false
    return true
  })
}

function readLocalSitemaps() {
  const files = ['public/sitemap-0.xml', 'public/sitemap.xml']
  let xml = ''
  for (const file of files) {
    const full = path.join(ROOT, file)
    if (existsSync(full)) xml += readFileSync(full, 'utf8')
  }
  return xml
}

async function loadUrlList() {
  const localXml = readLocalSitemaps()
  const fromDisk = parseSitemapLocs(localXml)
  if (fromDisk.length > 0) return fromDisk

  const live = await fetch(`https://${INDEXNOW_HOST}/sitemap-0.xml`)
  if (!live.ok) {
    throw new Error(`Failed to fetch live sitemap (${live.status})`)
  }
  return parseSitemapLocs(await live.text())
}

async function keyFileIsLive() {
  const res = await fetch(KEY_LOCATION, { redirect: 'follow' })
  if (!res.ok) return false
  const body = (await res.text()).trim()
  return body === INDEXNOW_KEY
}

async function main() {
  if (!await keyFileIsLive()) {
    console.warn(
      `IndexNow key file is not live at ${KEY_LOCATION}. Deploy first, then re-run this script.`,
    )
    process.exit(0)
  }

  const urlList = await loadUrlList()
  if (urlList.length === 0) {
    console.warn('IndexNow: no sitemap URLs found.')
    process.exit(0)
  }

  const res = await fetch(INDEXNOW_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
    body: JSON.stringify({
      host: INDEXNOW_HOST,
      key: INDEXNOW_KEY,
      keyLocation: KEY_LOCATION,
      urlList,
    }),
  })

  if (!res.ok) {
    const text = await res.text()
    throw new Error(`IndexNow ${res.status}: ${text.slice(0, 400)}`)
  }

  console.log(`IndexNow: submitted ${urlList.length} URLs (${res.status})`)
}

main().catch((error) => {
  console.error(error)
  // Never fail a production deploy because IndexNow is unreachable.
  process.exit(0)
})
