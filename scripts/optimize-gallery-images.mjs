import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')
const sourcesDir = join(root, 'public', 'images', 'gallery-ai')
const outDir = join(root, 'public', 'images', 'gallery')

mkdirSync(outDir, { recursive: true })

/** @param {string} input */
async function enhance(input, output) {
  const pipeline = sharp(input)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: false })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .sharpen({ sigma: 0.6, m1: 0.4, m2: 0.25 })

  await pipeline.webp({ quality: 92, effort: 6 }).toFile(output)
  return sharp(output).metadata()
}

if (!existsSync(sourcesDir)) {
  console.log('No gallery-ai source folder found. Place PNG sources in public/images/gallery-ai/')
  process.exit(0)
}

const files = readdirSync(sourcesDir).filter((f) => /\.(png|jpe?g|webp)$/i.test(f))
let created = 0

for (const file of files) {
  const base = file.replace(/\.[^.]+$/, '')
  const input = join(sourcesDir, file)
  const output = join(outDir, `${base}.webp`)
  const meta = await enhance(input, output)
  created++
  console.log(`OK ${base}.webp (${meta.width}x${meta.height})`)
}

console.log(`\nDone: ${created} gallery images optimized.`)
