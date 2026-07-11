import { readdirSync, readFileSync, existsSync, unlinkSync, rmSync, statSync } from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const imagesRoot = path.join(root, 'public', 'images')

const CODE_EXTS = new Set(['.ts', '.tsx', '.js', '.jsx', '.mjs', '.json', '.css', '.html', '.md'])
const SKIP_DIRS = new Set(['node_modules', '.next', '.git', '.open-next', 'generated'])

const refs = new Set()

function collectRefsFromText(text) {
  for (const m of text.matchAll(/\/images\/[^"'`\s)]+/g)) {
    refs.add(decodeURIComponent(m[0].split('?')[0]))
  }
}

function walkCode(dir) {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      if (SKIP_DIRS.has(ent.name)) continue
      walkCode(p)
    } else if (CODE_EXTS.has(path.extname(ent.name))) {
      collectRefsFromText(readFileSync(p, 'utf8'))
    }
  }
}

walkCode(path.join(root, 'src'))
walkCode(path.join(root, 'public'))
for (const rel of ['next.config.mjs', 'scripts/optimize-images.mjs', 'scripts/optimize-gallery-images.mjs', 'scripts/convert-gallery-pairs.mjs', 'scripts/convert-to-webp.mjs']) {
  const p = path.join(root, rel)
  if (existsSync(p)) collectRefsFromText(readFileSync(p, 'utf8'))
}

// Always keep these assets even if not matched by regex
const keep = new Set([
  '/images/preferred-plumbing-logo.svg',
  '/images/favicon.ico',
  '/images/image-manifest.json',
])

for (const r of refs) {
  if (r.includes('${') || r.includes('(.*)') || r.endsWith('/')) continue
  keep.add(r)
}

// Gallery before/after pairs are built dynamically in gallery.ts
const galleryTs = readFileSync(path.join(root, 'src', 'data', 'gallery.ts'), 'utf8')
for (const m of galleryTs.matchAll(/beforeAfter\('([^']+)'\)/g)) {
  const slug = m[1]
  keep.add(`/images/gallery/${slug}-1.webp`)
  keep.add(`/images/gallery/${slug}-2.webp`)
}
for (const m of galleryTs.matchAll(/cover\('([^']+)'\)/g)) {
  keep.add(`/images/gallery/${m[1]}-1.webp`)
}

const allFiles = []

function walkImages(dir, base = '') {
  for (const ent of readdirSync(dir, { withFileTypes: true })) {
    const rel = base ? `${base}/${ent.name}` : ent.name
    const p = path.join(dir, ent.name)
    if (ent.isDirectory()) {
      walkImages(p, rel)
    } else {
      allFiles.push(`/images/${rel.replace(/\\/g, '/')}`)
    }
  }
}

walkImages(imagesRoot)

const unused = allFiles.filter((f) => {
  const norm = decodeURIComponent(f.split('?')[0])
  if (norm.includes('/generated/')) return false
  if (norm.endsWith('image-manifest.json')) return false
  return !keep.has(norm)
})

const dryRun = process.argv.includes('--dry-run')
const deleteMode = process.argv.includes('--delete')

console.log(`Referenced paths: ${keep.size}`)
console.log(`Total image files: ${allFiles.length}`)
console.log(`Unused files: ${unused.length}`)

if (dryRun || !deleteMode) {
  console.log('\n--- USED ---')
  ;[...keep].filter((x) => x.startsWith('/images/')).sort().forEach((x) => console.log(x))
  console.log('\n--- UNUSED ---')
  unused.sort().forEach((x) => console.log(x))
  if (!deleteMode) {
    console.log('\nRun with --delete to remove unused files.')
  }
} else {
  let deleted = 0
  let bytes = 0

  // Remove stale generated variants; they'll be rebuilt by build:images
  const generatedDir = path.join(imagesRoot, 'generated')
  if (existsSync(generatedDir)) {
    rmSync(generatedDir, { recursive: true, force: true })
    console.log('Removed public/images/generated (will regenerate with build:images)')
  }

  for (const rel of unused) {
    const abs = path.join(root, 'public', rel.replace(/^\//, '').replace(/\//g, path.sep))
    if (!existsSync(abs)) continue
    bytes += statSync(abs).size
    unlinkSync(abs)
    deleted++
  }

  // Remove empty directories under public/images (except generated)
  function pruneEmptyDirs(dir) {
    for (const ent of readdirSync(dir, { withFileTypes: true })) {
      if (!ent.isDirectory()) continue
      const p = path.join(dir, ent.name)
      if (ent.name === 'generated') continue
      pruneEmptyDirs(p)
      if (readdirSync(p).length === 0) rmSync(p, { recursive: true })
    }
  }
  pruneEmptyDirs(imagesRoot)

  console.log(`\nDeleted ${deleted} unused files (${(bytes / 1024 / 1024).toFixed(1)} MB)`)
}
