import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync } from 'fs'
import { join } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')
const assetsDir = join(
  process.env.USERPROFILE || '',
  '.cursor',
  'projects',
  'c-Users-Slay3r-Downloads-callperferredplumbing-com',
  'assets'
)
const outDir = join(root, 'public', 'images', 'gallery')

mkdirSync(outDir, { recursive: true })

const files = readdirSync(assetsDir).filter((f) => f.endsWith('.png') && f.includes('-1.png'))

let converted = 0
for (const file of files) {
  const input = join(assetsDir, file)
  const outputName = file.replace('.png', '.webp')
  const output = join(outDir, outputName)

  await sharp(input)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: false })
    .modulate({ brightness: 1.02, saturation: 1.05 })
    .sharpen({ sigma: 0.6, m1: 0.4, m2: 0.25 })
    .webp({ quality: 92, effort: 6 })
    .toFile(output)

  const meta = await sharp(output).metadata()
  console.log(`OK ${outputName} (${meta.width}x${meta.height})`)
  converted++
}

console.log(`\nConverted ${converted} AI gallery images.`)
