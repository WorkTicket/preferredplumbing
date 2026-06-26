import sharp from 'sharp'
import { readdirSync, statSync } from 'fs'
import { join, extname, parse } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const imagesDir = join(__dirname, '..', 'public', 'images')

const files = readdirSync(imagesDir).filter(f => {
  const ext = extname(f).toLowerCase()
  return ['.jpg', '.jpeg', '.png', '.gif'].includes(ext)
})

let count = 0
for (const file of files) {
  const inputPath = join(imagesDir, file)
  const parsed = parse(file)
  const outputName = parsed.name + '.webp'
  const outputPath = join(imagesDir, outputName)

  try {
    await sharp(inputPath).webp({ quality: 80, effort: 6 }).toFile(outputPath)
    count++
    console.log(`[${count}] Converted: ${file} -> ${outputName}`)
  } catch (err) {
    console.error(`Failed: ${file} - ${err.message}`)
  }
}

console.log(`\nDone! Converted ${count} files.`)
