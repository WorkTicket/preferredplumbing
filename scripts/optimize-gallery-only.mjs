/**
 * Generate responsive variants for public/images/gallery/*.webp only.
 * Also merges entries into image-manifest.json.
 */
import sharp from 'sharp'
import {
  readdirSync,
  readFileSync,
  writeFileSync,
  mkdirSync,
  existsSync,
} from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'public', 'images')
const GALLERY = path.join(ROOT, 'gallery')
const OUTPUT_DIR = path.join(ROOT, 'generated')
const MANIFEST_PATH = path.join(ROOT, 'image-manifest.json')

const BREAKPOINTS = [480, 640, 768, 1024, 1280, 1536, 1920, 2560]
const FORMAT_CONFIG = {
  avif: { quality: 68, effort: 5, lossless: false },
  webp: { quality: 88, effort: 6 },
  jpeg: { quality: 85, mozjpeg: true },
}

mkdirSync(OUTPUT_DIR, { recursive: true })

const only = process.argv.slice(2) // optional basenames
const files = readdirSync(GALLERY)
  .filter((f) => /\.webp$/i.test(f))
  .filter((f) => {
    if (!only.length) return true
    const base = f.replace(/\.webp$/i, '')
    return only.some((o) => base === o || base.startsWith(o))
  })

console.log(`Optimizing ${files.length} gallery images...`)

const manifest = existsSync(MANIFEST_PATH)
  ? JSON.parse(readFileSync(MANIFEST_PATH, 'utf8'))
  : {}

for (let i = 0; i < files.length; i++) {
  const file = files[i]
  const inputPath = path.join(GALLERY, file)
  const name = file.replace(/\.webp$/i, '')
  const sourceBuf = readFileSync(inputPath)
  const input = sharp(sourceBuf).rotate()
  const meta = await input.metadata()
  const originalWidth = meta.width
  const originalHeight = meta.height
  const aspectRatio = originalWidth / originalHeight

  // Match responsive-image.ts BREAKPOINTS so srcset URLs never 404
  const breakpoints = [...BREAKPOINTS]

  const blur = await input
    .clone()
    .resize(20, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 20, effort: 0 })
    .toBuffer()

  const variants = { avif: {}, webp: {}, jpeg: {} }

  for (const format of ['avif', 'webp', 'jpeg']) {
    for (const bp of breakpoints) {
      const height = Math.round(bp / aspectRatio)
      const filename = `${name}-${bp}.${format}`
      const outputPath = path.join(OUTPUT_DIR, filename)
      const upscale = bp > originalWidth
      let pipeline = input.clone().resize(bp, height, {
        fit: 'outside',
        withoutEnlargement: !upscale,
        kernel: sharp.kernel.lanczos3,
      })
      if (upscale) pipeline = pipeline.sharpen({ sigma: 0.6, m1: 0.8, m2: 0.4 })
      else pipeline = pipeline.sharpen({ sigma: 0.35, m1: 0.5, m2: 0.25 })

      if (format === 'avif') pipeline = pipeline.avif(FORMAT_CONFIG.avif)
      else if (format === 'webp') pipeline = pipeline.webp(FORMAT_CONFIG.webp)
      else pipeline = pipeline.jpeg(FORMAT_CONFIG.jpeg)

      writeFileSync(outputPath, await pipeline.toBuffer())
      variants[format][bp] = `/images/generated/${filename}`
    }
  }

  const relImagePath = `/images/gallery/${file}`
  manifest[relImagePath] = {
    originalPath: relImagePath,
    altBase: name,
    width: Math.max(originalWidth, ...breakpoints),
    height: Math.round(Math.max(originalWidth, ...breakpoints) / aspectRatio),
    aspectRatio,
    isHero: false,
    blurPlaceholder: `data:image/webp;base64,${blur.toString('base64')}`,
    variants,
  }

  console.log(`[${i + 1}/${files.length}] ${file}`)
}

writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2) + '\n')
console.log('Done. Manifest updated.')
