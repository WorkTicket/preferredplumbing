import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')

const sources = [
  join(process.env.USERPROFILE || '', '.cursor', 'projects', 'c-Users-Slay3r-Downloads-callperferredplumbing-com', 'assets'),
  join(root, 'public', 'images', 'gallery-ai'),
]

const outDir = join(root, 'public', 'images', 'gallery')
mkdirSync(outDir, { recursive: true })

/** @param {string} input */
async function enhance(input, output) {
  await sharp(input)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: false })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .sharpen({ sigma: 0.6, m1: 0.4, m2: 0.25 })
    .webp({ quality: 92, effort: 6 })
    .toFile(output)

  return sharp(output).metadata()
}

let created = 0
const seen = new Set()

for (const sourcesDir of sources) {
  if (!existsSync(sourcesDir)) continue

  const files = readdirSync(sourcesDir).filter((f) => /-(1|2)\.(png|jpe?g|webp)$/i.test(f))

  for (const file of files) {
    const base = file.replace(/\.[^.]+$/, '')
    if (seen.has(base)) continue
    seen.add(base)

    const input = join(sourcesDir, file)
    const output = join(outDir, `${base}.webp`)
    const meta = await enhance(input, output)
    created++
    console.log(`OK ${base}.webp (${meta.width}x${meta.height})`)
  }
}

console.log(`\nDone: ${created} before/after gallery images converted.`)
