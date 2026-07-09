import sharp from 'sharp'
import { readdirSync, existsSync, mkdirSync } from 'fs'
import { join, extname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))
const root = join(__dirname, '..')
const outDir = join(root, 'public', 'images', 'gallery')

mkdirSync(outDir, { recursive: true })

/** @param {string} input */
async function enhance(input, output) {
  const pipeline = sharp(input)
    .rotate()
    .resize(1920, 1920, { fit: 'inside', withoutEnlargement: false })
    .modulate({ brightness: 1.03, saturation: 1.1 })
    .sharpen({ sigma: 0.9, m1: 0.5, m2: 0.35 })

  await pipeline.webp({ quality: 90, effort: 6 }).toFile(output)
  return sharp(output).metadata()
}

/** @type {Array<{ sources: string[]; outputs: string[] }>} */
const jobs = [
  {
    sources: [
      'public/images/cdn-downloads/IMG_9152.jpg',
      'public/images/gallery-temp/IMG_9155-1920w.jpg',
      'public/images/cdn-downloads/plumbing-trim-bathtubs.jpg',
      'public/images/cdn-downloads/plumbing-trim-8.jpg',
    ],
    outputs: [
      'modern-bathroom-fixtures-1.webp',
      'modern-bathroom-fixtures-2.webp',
      'modern-bathroom-fixtures-3.webp',
      'modern-bathroom-fixtures-4.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/IMG_2826-shower.jpg',
      'public/images/cdn-downloads/IMG_9078.jpg',
      'public/images/cdn-downloads/plumbing-trim-8.jpg',
    ],
    outputs: [
      'shower-tub-installation-1.webp',
      'shower-tub-installation-2.webp',
      'shower-tub-installation-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/bathroom-remodel.jpg',
      'public/images/cdn-downloads/IMG_8787.jpg',
      'public/images/cdn-downloads/plumbing-trim-bathtubs.jpg',
    ],
    outputs: [
      'bathroom-remodel-1.webp',
      'bathroom-remodel-2.webp',
      'bathroom-remodel-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/kitchen-remodel.jpg',
      'public/images/cdn-downloads/remodels-kitchen.jpg',
      'public/images/cdn-downloads/dishwasher-disposal.jpg',
    ],
    outputs: [
      'kitchen-remodel-plumbing-1.webp',
      'kitchen-remodel-plumbing-2.webp',
      'kitchen-remodel-plumbing-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/new-construction-pipes.jpg',
      'public/images/cdn-downloads/new-construction-project.webp',
      'public/images/cdn-downloads/IMG_6186-basement.jpg',
    ],
    outputs: [
      'new-construction-rough-in-1.webp',
      'new-construction-rough-in-2.webp',
      'new-construction-rough-in-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/grease-trap.jpg',
      'public/images/cdn-downloads/commercial-project.webp',
      'public/images/cdn-downloads/residential-commercial-pipes.jpg',
    ],
    outputs: [
      'commercial-grease-trap-1.webp',
      'commercial-plumbing-project-1.webp',
      'commercial-plumbing-project-2.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/IMG_1948-tankless.jpg',
      'public/images/cdn-downloads/IMG_8862.jpg',
      'public/images/service-water-heater-installation.webp',
    ],
    outputs: [
      'water-heater-replacement-1.webp',
      'water-heater-replacement-2.webp',
      'water-heater-replacement-3.webp',
    ],
  },
  {
    sources: [
      'public/images/service-radiant-heat-boiler.webp',
      'public/images/cdn-downloads/IMG_8861.jpg',
      'public/images/cdn-downloads/IMG_8862.jpg',
    ],
    outputs: [
      'boiler-radiant-heat-1.webp',
      'boiler-radiant-heat-2.webp',
      'boiler-radiant-heat-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/water-softener.webp',
      'public/images/cdn-downloads/IMG_8861.jpg',
      'public/images/service-water-softener-utility-room.webp',
    ],
    outputs: [
      'water-softener-installation-1.webp',
      'water-softener-installation-2.webp',
      'water-softener-installation-3.webp',
    ],
  },
  {
    sources: [
      'public/images/service-sewer-line-replacement.webp',
      'public/images/cdn-downloads/IMG_5207.jpg',
      'public/images/cdn-downloads/new-construction-pipes.jpg',
    ],
    outputs: [
      'sewer-line-replacement-1.webp',
      'sewer-line-replacement-2.webp',
      'sewer-line-replacement-3.webp',
    ],
  },
  {
    sources: [
      'public/images/service-septic-system-installation.webp',
      'public/images/cdn-downloads/IMG_5207.jpg',
      'public/images/cdn-downloads/field-truck-2.jpg',
    ],
    outputs: [
      'septic-system-installation-1.webp',
      'septic-system-installation-2.webp',
      'septic-system-installation-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/plumbing-trim-8.jpg',
      'public/images/cdn-downloads/plumbing-trim-bathtubs.jpg',
      'public/images/cdn-downloads/IMG_9152.jpg',
    ],
    outputs: [
      'toilets-faucets-trim-1.webp',
      'toilets-faucets-trim-2.webp',
      'toilets-faucets-trim-3.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/dishwasher-disposal.jpg',
      'public/images/cdn-downloads/kitchen-remodel.jpg',
    ],
    outputs: [
      'dishwasher-disposal-install-1.webp',
      'dishwasher-disposal-install-2.webp',
    ],
  },
  {
    sources: ['public/images/cdn-downloads/emergency-repair.jpg'],
    outputs: ['emergency-plumbing-repair-1.webp'],
  },
  {
    sources: [
      'public/images/cdn-downloads/remodels-kitchen.jpg',
      'public/images/cdn-downloads/bathroom-remodel.jpg',
    ],
    outputs: [
      'plumbing-remodel-upgrades-1.webp',
      'plumbing-remodel-upgrades-2.webp',
    ],
  },
  {
    sources: [
      'public/images/cdn-downloads/field-truck-2.jpg',
      'public/images/cdn-downloads/truck-interior.jpg',
      'public/images/preferred-plumbing-service-truck.webp',
    ],
    outputs: [
      'field-service-crew-1.webp',
      'field-service-crew-2.webp',
      'field-service-crew-3.webp',
    ],
  },
]

let created = 0
let skipped = 0

for (const job of jobs) {
  for (let i = 0; i < job.outputs.length; i++) {
    const source = join(root, job.sources[i])
    const output = join(outDir, job.outputs[i])
    if (!existsSync(source)) {
      console.log(`SKIP missing source: ${job.sources[i]}`)
      skipped++
      continue
    }
    const meta = await enhance(source, output)
    created++
    console.log(`OK ${job.outputs[i]} (${meta.width}x${meta.height})`)
  }
}

console.log(`\nDone: ${created} images created, ${skipped} skipped.`)
