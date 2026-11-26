import { readdir, readFile, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const root = path.resolve("public");

/** @type {{ test: (rel: string) => boolean, maxWidth: number, quality: number }[]} */
const rules = [
  {
    test: (rel) => rel.startsWith("Preferred-Plumbing-Service-Card-Cutouts/"),
    maxWidth: 900,
    quality: 72,
  },
  {
    test: (rel) => rel.startsWith("Preferred-Plumbing-Hero-Images/"),
    maxWidth: 1200,
    quality: 74,
  },
  {
    test: (rel) => rel.startsWith("images/blog/"),
    maxWidth: 1200,
    quality: 74,
  },
  {
    test: (rel) => /(?:^|\/)(?:lake|preferred-logo-truck|footer-logo)/.test(rel),
    maxWidth: 1600,
    quality: 78,
  },
  {
    test: () => true,
    maxWidth: 1400,
    quality: 74,
  },
];

async function walk(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walk(full, acc);
    else if (entry.name.endsWith(".webp")) acc.push(full);
  }
  return acc;
}

function ruleFor(rel) {
  return rules.find((rule) => rule.test(rel)) ?? rules.at(-1);
}

const files = await walk(root);
let rewritten = 0;
let saved = 0;

for (const file of files) {
  const rel = path.relative(root, file).split(path.sep).join("/");
  const before = (await stat(file)).size;
  if (before < 40 * 1024) continue;

  const { maxWidth, quality } = ruleFor(rel);
  const input = await readFile(file);
  const image = sharp(input, { failOn: "none" });
  const meta = await image.metadata();
  const width = meta.width ?? 0;
  const pipeline =
    width > maxWidth
      ? image.resize({
          width: maxWidth,
          withoutEnlargement: true,
          fit: "inside",
        })
      : image;

  const buffer = await pipeline
    .webp({
      quality,
      alphaQuality: Math.min(quality + 6, 90),
      effort: 6,
      smartSubsample: true,
    })
    .toBuffer();

  if (buffer.length < before * 0.97) {
    await writeFile(file, buffer);
    rewritten += 1;
    saved += before - buffer.length;
    console.log(
      `${rel}: ${(before / 1024).toFixed(0)}KB → ${(buffer.length / 1024).toFixed(0)}KB`,
    );
  }
}

// Dedicated responsive variants for homepage service cards + winter band.
const variants = [
  {
    src: "assets/repairs-realistic.webp",
    widths: [360, 480],
  },
  { src: "assets/floor.webp", widths: [360, 480] },
  { src: "assets/tankless.webp", widths: [360, 480] },
  { src: "assets/camera.webp", widths: [360, 480] },
  { src: "assets/manifold.webp", widths: [360, 480] },
  {
    src: "assets/new-construction-rough-in-transparent.webp",
    widths: [360, 480],
  },
  { src: "assets/winter.webp", widths: [640, 1280] },
  { src: "assets/van.webp", widths: [640, 1280] },
  { src: "assets/hunter.webp", widths: [640, 960, 1145], quality: 92 },
  {
    src: "assets/hunter-inspects.webp",
    widths: [960, 1400],
    quality: 92,
  },
  { src: "assets/mountains.webp", widths: [800, 1200, 1600, 2000], quality: 88 },
  {
    src: "assets/real-modern-bathroom-fixtures-1.webp",
    widths: [640, 960],
  },
  {
    src: "assets/real-new-construction-rough-in-1.webp",
    widths: [640, 960],
  },
  { src: "assets/footer-logo.webp", widths: [280, 560, 840], quality: 95 },
];

for (const item of variants) {
  const srcPath = path.join(root, item.src);
  const input = await readFile(srcPath);
  const base = item.src.replace(/\.webp$/, "");
  const quality = item.quality ?? 72;
  for (const width of item.widths) {
    const outRel = `${base}-w${width}.webp`;
    const outPath = path.join(root, outRel);
    const buffer = await sharp(input, { failOn: "none" })
      .resize({
        width,
        withoutEnlargement: true,
        fit: "inside",
        kernel: sharp.kernel.lanczos3,
      })
      .webp({
        quality,
        alphaQuality: Math.min(quality + 8, 100),
        effort: 6,
        smartSubsample: quality < 90,
      })
      .toBuffer();
    await writeFile(outPath, buffer);
    console.log(`variant ${outRel}: ${(buffer.length / 1024).toFixed(0)}KB`);
  }
}

console.log(
  `Rewrote ${rewritten} images, saved ${(saved / 1024 / 1024).toFixed(2)}MB`,
);
