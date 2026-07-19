import sharp from 'sharp'
import { readdirSync, readFileSync, writeFileSync, mkdirSync, existsSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const ROOT = path.join(__dirname, '..', 'public', 'images')
const OUTPUT_DIR = path.join(ROOT, 'generated')
const MANIFEST_PATH = path.join(ROOT, 'image-manifest.json')

const BREAKPOINTS = [480, 640, 768, 1024, 1280, 1536, 1920, 2560]
const BLUR_SIZE = 20

const FORMAT_CONFIG = {
  avif: { quality: 62, effort: 5, lossless: false },
  webp: { quality: 85, effort: 6 },
  jpeg: { quality: 85, mozjpeg: true },
}

const HERO_FORMAT_CONFIG = {
  avif: { quality: 62, effort: 6, lossless: false },
  webp: { quality: 82, effort: 6 },
  jpeg: { quality: 88, mozjpeg: true },
}

const HERO_MOBILE_WEBP_CONFIG = { quality: 76, effort: 6 }

const GALLERY_FORMAT_CONFIG = {
  avif: { quality: 68, effort: 7, lossless: false },
  webp: { quality: 88, effort: 6 },
  jpeg: { quality: 85, mozjpeg: true },
}

const HERO_MAX_WIDTH = 2560
const GALLERY_MAX_WIDTH = 2560

const HERO_NAMES = new Set([
  'preferred-plumbing-truck-interior',
  'preferred-plumbing-hero-poster',
  'preferred-plumbing-service-truck',
  'hero-gallery',
  'hero-services',
  'hero-areas',
  'hero-contact',
  'hero-about',
  'og-preferred-plumbing-solutions',
])

function isHeroImage(name, relPath) {
  if (HERO_NAMES.has(name)) return true
  if (name.startsWith('hero-')) return true
  if (name.startsWith('service-')) return true
  if (name.startsWith('preferred-plumbing')) return true
  if (name.startsWith('og-')) return true
  return false
}

function isGalleryImage(name, relPath) {
  const normalized = relPath.replace(/\\/g, '/')
  return (
    normalized.includes('/gallery/') ||
    /-\d+$/.test(name)
  )
}

function getFormatConfig(isHero, isGallery, format) {
  if (isHero) return HERO_FORMAT_CONFIG[format]
  if (isGallery) return GALLERY_FORMAT_CONFIG[format]
  return FORMAT_CONFIG[format]
}

function getBreakpoints(width, isHero, isGallery) {
  const capped = BREAKPOINTS.filter((bp) => bp <= width)
  const withOriginal = [...capped, width].filter((v, i, a) => a.indexOf(v) === i)

  if (isHero) {
    const heroBreakpoints = BREAKPOINTS.filter((bp) => bp <= HERO_MAX_WIDTH)
    return [...new Set([...withOriginal, ...heroBreakpoints])].sort((a, b) => a - b)
  }

  if (isGallery) {
    const galleryBreakpoints = BREAKPOINTS.filter((bp) => bp <= GALLERY_MAX_WIDTH)
    return [...new Set([...withOriginal, ...galleryBreakpoints])].sort((a, b) => a - b)
  }

  return withOriginal
}

async function generateBlurPlaceholder(input) {
  const tiny = await input
    .clone()
    .resize(BLUR_SIZE, null, { fit: 'inside', withoutEnlargement: true })
    .webp({ quality: 20, effort: 0 })
    .toBuffer()
  return `data:image/webp;base64,${tiny.toString('base64')}`
}

async function processImage(filePath) {
  const parsed = path.parse(filePath)
  const relPath = path.relative(ROOT, filePath)
  const name = parsed.name
  const hero = isHeroImage(name, relPath)
  const gallery = isGalleryImage(name, relPath)
  const sourceBuf = readFileSync(filePath)
  const input = sharp(sourceBuf).rotate()
  const meta = await input.metadata()
  const originalWidth = meta.width
  const originalHeight = meta.height
  const aspectRatio = originalWidth / originalHeight
  const breakpoints = getBreakpoints(originalWidth, hero, gallery)

  const variants = {}
  const blurPlaceholder = await generateBlurPlaceholder(input)

  for (const format of ['avif', 'webp', 'jpeg']) {
    variants[format] = {}
    for (const bp of breakpoints) {
      let formatConfig = getFormatConfig(hero, gallery, format)
      if (hero && format === 'webp' && bp <= 768) {
        formatConfig = HERO_MOBILE_WEBP_CONFIG
      }
      const height = Math.round(bp / aspectRatio)
      const filename = `${name}-${bp}.${format}`
      const outputPath = path.join(OUTPUT_DIR, filename)

      const upscale = (hero || gallery) && bp > originalWidth
      let pipeline = input.clone().resize(bp, height, {
        fit: 'outside',
        withoutEnlargement: !upscale,
        kernel: sharp.kernel.lanczos3,
      })
      if (upscale) {
        pipeline = pipeline.sharpen({ sigma: 0.6, m1: 0.8, m2: 0.4 })
      } else if (gallery) {
        pipeline = pipeline.sharpen({ sigma: 0.35, m1: 0.5, m2: 0.25 })
      }
      switch (format) {
        case 'avif':
          pipeline = pipeline.avif(formatConfig)
          break
        case 'webp':
          pipeline = pipeline.webp(formatConfig)
          break
        case 'jpeg':
          pipeline = pipeline.jpeg(formatConfig)
          break
      }
      const buf = await pipeline.toBuffer()
      writeFileSync(outputPath, buf)

      variants[format][bp] = `/images/generated/${filename}`
    }
  }

  const relImagePath = `/images/${relPath.replace(/\\/g, '/')}`

  return {
    originalPath: relImagePath,
    altBase: name,
    width: hero || gallery ? Math.max(originalWidth, ...breakpoints) : originalWidth,
    height: hero || gallery
      ? Math.round(Math.max(originalWidth, ...breakpoints) / aspectRatio)
      : originalHeight,
    aspectRatio,
    isHero: hero,
    blurPlaceholder,
    variants,
  }
}

function shouldProcess(relPath) {
  const normalized = relPath.replace(/\\/g, '/')
  if (normalized.startsWith('generated/')) return false
  if (normalized.startsWith('gallery-ai/')) return false
  if (/-1920w\.(webp|jpe?g)$/i.test(normalized)) return false
  if (normalized === 'favicon.ico') return false
  return /\.(webp|png|jpg|jpeg)$/i.test(normalized)
}

async function main() {
  if (!existsSync(OUTPUT_DIR)) {
    mkdirSync(OUTPUT_DIR, { recursive: true })
  }

  const imageFiles = readdirSync(ROOT, { recursive: true })
    .filter((f) => typeof f === 'string' && shouldProcess(f))
    .map((f) => path.join(ROOT, f))

  console.log(`Processing ${imageFiles.length} images...`)

  const manifest = {}
  let processed = 0

  for (const f of imageFiles) {
    try {
      const result = await processImage(f)
      manifest[result.originalPath] = result
      processed++
      console.log(`  [${processed}/${imageFiles.length}] ${path.basename(f)} → ${Object.keys(result.variants.avif || {}).length} sizes`)
    } catch (e) {
      console.error(`  ✗ ${path.basename(f)}: ${e.message}`)
    }
  }

  writeFileSync(MANIFEST_PATH, JSON.stringify(manifest, null, 2))
  console.log(`\nDone! ${processed} images processed. Manifest written to ${MANIFEST_PATH}`)
}

main().catch(console.error)
