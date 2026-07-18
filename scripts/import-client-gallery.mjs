/**
 * Import client HEIC/JPEG photos → public/images/gallery/*.webp
 * Uses ffmpeg for HEIC decode, then sharp for web-ready WebP.
 */
import sharp from 'sharp'
import { spawnSync } from 'child_process'
import { existsSync, mkdirSync, unlinkSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { tmpdir } from 'os'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const incoming = join(root, '_incoming-photos')
const outDir = join(root, 'public', 'images', 'gallery')
mkdirSync(outDir, { recursive: true })

/** @type {Record<string, string>} */
const map = {
  // Radiant Systems (all 6)
  'boiler-radiant-heat-1': 'Radiant Systems/IMG_6640.HEIC',
  'boiler-radiant-heat-2': 'Radiant Systems/IMG_3133.HEIC',
  'boiler-radiant-heat-3': 'Radiant Systems/IMG_6529.HEIC',
  'boiler-radiant-heat-4': 'Radiant Systems/IMG_6538.HEIC',
  'boiler-radiant-heat-5': 'Radiant Systems/IMG_3135.HEIC',
  'boiler-radiant-heat-6': 'Radiant Systems/IMG_7030.HEIC',

  // Water heaters
  'water-heater-replacement-1': 'Water Heater, Boilers, Wells/IMG_1948 2.JPEG',
  'water-heater-replacement-2': 'Water Heater, Boilers, Wells/IMG_5498 2.HEIC',
  'water-heater-replacement-3': 'Water Heater, Boilers, Wells/IMG_1362 2.HEIC',

  // Well / pressure system
  'well-pump-system-1': 'Water Heater, Boilers, Wells/IMG_2484 2.HEIC',
  'well-pump-system-2': 'Water Heater, Boilers, Wells/IMG_3964 2.HEIC',
  'well-pump-system-3': 'Water Heater, Boilers, Wells/IMG_2486 2.HEIC',

  // Boiler mechanical rooms
  'boiler-mechanical-room-1': 'Water Heater, Boilers, Wells/IMG_6604 2.HEIC',
  'boiler-mechanical-room-2': 'Water Heater, Boilers, Wells/IMG_5484 2.HEIC',
  'boiler-mechanical-room-3': 'Water Heater, Boilers, Wells/IMG_6640 2.HEIC',

  // Gas piping (all 7)
  'gas-line-installation-1': 'Gas Pipe/IMG_7323.HEIC',
  'gas-line-installation-2': 'Gas Pipe/IMG_4790.HEIC',
  'gas-line-installation-3': 'Gas Pipe/IMG_3153.HEIC',
  'gas-line-installation-4': 'Gas Pipe/IMG_1361.HEIC',
  'gas-line-installation-5': 'Gas Pipe/IMG_4571.HEIC',
  'gas-line-installation-6': 'Gas Pipe/IMG_4787.HEIC',
  'gas-line-installation-7':
    'Gas Pipe/75987423468__FAC782E1-0664-426F-B9BA-8B444868CF07.HEIC',

  // Septic tanks
  'septic-system-installation-1': 'Tanks And Septics/IMG_3324.HEIC',
  'septic-system-installation-2': 'Tanks And Septics/IMG_3405.HEIC',
  'septic-system-installation-3': 'Tanks And Septics/IMG_1192.HEIC',
  'septic-system-installation-4': 'Tanks And Septics/IMG_3646.HEIC',
  'septic-system-installation-5': 'Tanks And Septics/IMG_3647.HEIC',
  'septic-system-installation-6': 'Tanks And Septics/IMG_1307.HEIC',
  'septic-system-installation-7': 'Tanks And Septics/IMG_5631.HEIC',

  // Drain field / leach lines (new section)
  'septic-drain-field-1': 'Tanks And Septics/IMG_3655.HEIC',
  'septic-drain-field-2': 'Tanks And Septics/IMG_0109.HEIC',
  'septic-drain-field-3': 'Tanks And Septics/IMG_0105.HEIC',
  'septic-drain-field-4': 'Tanks And Septics/IMG_3658.HEIC',
  'septic-drain-field-5': 'Tanks And Septics/IMG_3659.HEIC',
  'septic-drain-field-6': 'Tanks And Septics/IMG_2790.HEIC',

  // New construction wall / crawl rough-in
  'new-construction-rough-in-1': 'New Construction Plumbing/IMG_4761.HEIC',
  'new-construction-rough-in-2': 'New Construction Plumbing/IMG_0170.HEIC',
  'new-construction-rough-in-3': 'New Construction Plumbing/IMG_0243.HEIC',
  'new-construction-rough-in-4': 'New Construction Plumbing/IMG_4762.HEIC',
  'new-construction-rough-in-5': 'New Construction Plumbing/IMG_4763.HEIC',
  'new-construction-rough-in-6': 'New Construction Plumbing/IMG_3180.HEIC',
  'new-construction-rough-in-7': 'New Construction Plumbing/IMG_3517.HEIC',

  // Under-slab / foundation plumbing (new section)
  'under-slab-plumbing-1': 'New Construction Plumbing/IMG_2344.HEIC',
  'under-slab-plumbing-2': 'New Construction Plumbing/IMG_2359.HEIC',
  'under-slab-plumbing-3': 'New Construction Plumbing/IMG_2360.HEIC',
  'under-slab-plumbing-4': 'New Construction Plumbing/IMG_2398.HEIC',
  'under-slab-plumbing-5': 'New Construction Plumbing/IMG_2826.HEIC',
  'under-slab-plumbing-6':
    'New Construction Plumbing/171D6B59-1256-4420-908F-174D8DE7F93E.JPG',
  'under-slab-plumbing-7':
    'New Construction Plumbing/20AE73E6-A8DC-46A0-B9C8-B08214FCCA02.JPG',
  'under-slab-plumbing-8':
    'New Construction Plumbing/30D37891-4B42-481F-9F3B-F5F942443953.JPG',

  // New construction gas rough-in (new section)
  'new-construction-gas-rough-in-1': 'New Construction Plumbing/IMG_4768.HEIC',
  'new-construction-gas-rough-in-2': 'New Construction Plumbing/IMG_4769.HEIC',
  'new-construction-gas-rough-in-3': 'New Construction Plumbing/IMG_4766.HEIC',

  // Bathroom vanity / fixtures
  'modern-bathroom-fixtures-1': 'Plumbing Trim/IMG_5586.HEIC',
  'modern-bathroom-fixtures-2': 'Plumbing Trim/IMG_5259.HEIC',
  'modern-bathroom-fixtures-3': 'Plumbing Trim/IMG_5209.HEIC',
  'modern-bathroom-fixtures-4': 'Plumbing Trim/IMG_0273.HEIC',

  // Shower / tub
  'shower-tub-installation-1':
    'Plumbing Trim/58670992867__B1D1BA48-79E2-43C1-BAE9-D988547C9677.HEIC',
  'shower-tub-installation-2':
    'Plumbing Trim/58672461559__838C0E98-273B-4C8E-852E-A62EB4B81199.HEIC',

  // Toilets
  'toilets-faucets-trim-1': 'Plumbing Trim/IMG_5211.HEIC',
  'toilets-faucets-trim-2': 'Plumbing Trim/IMG_5590.HEIC',

  // Commercial fixtures
  'commercial-plumbing-project-1': 'Plumbing Trim/IMG_5207.HEIC',
  'commercial-plumbing-project-2': 'Plumbing Trim/IMG_5212.HEIC',
}

function decodeToJpeg(input, jpegOut) {
  const r = spawnSync(
    'ffmpeg',
    ['-y', '-i', input, '-frames:v', '1', '-update', '1', '-q:v', '2', jpegOut],
    { encoding: 'utf8' }
  )
  if (r.status !== 0) {
    throw new Error(r.stderr?.slice(-400) || `ffmpeg failed for ${input}`)
  }
}

async function enhance(jpegPath, webpOut) {
  await sharp(jpegPath)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: true })
    .modulate({ brightness: 1.02, saturation: 1.04 })
    .sharpen({ sigma: 0.5, m1: 0.4, m2: 0.25 })
    .webp({ quality: 88, effort: 6 })
    .toFile(webpOut)
  return sharp(webpOut).metadata()
}

const only = new Set(process.argv.slice(2))
let ok = 0
let fail = 0
let skipped = 0

for (const [slug, rel] of Object.entries(map)) {
  if (only.size && ![...only].some((o) => slug === o || slug.startsWith(`${o}-`) || slug.startsWith(o))) {
    skipped++
    continue
  }
  const input = join(incoming, rel)
  const output = join(outDir, `${slug}.webp`)
  if (!existsSync(input)) {
    console.log('MISSING', rel)
    fail++
    continue
  }
  const tmp = join(tmpdir(), `pp-gallery-${slug}.jpg`)
  try {
    decodeToJpeg(input, tmp)
    const meta = await enhance(tmp, output)
    console.log(`OK ${slug}.webp (${meta.width}x${meta.height})`)
    ok++
  } catch (e) {
    console.log('FAIL', slug, e.message)
    fail++
  } finally {
    try {
      unlinkSync(tmp)
    } catch {
      /* ignore */
    }
  }
}

console.log(`\nDone: ${ok} ok, ${fail} failed, ${skipped} skipped`)
console.log(`Mapped sources: ${Object.keys(map).length}`)
