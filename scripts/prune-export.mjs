import { readdir, readFile, rm, writeFile } from "node:fs/promises";
import path from "node:path";

const directory = path.resolve("out", "Preferred-Plumbing-Service-Card-Cutouts");
const files = await readdir(directory);
const optimized = new Set(
  files
    .filter((file) => file.endsWith("-card.webp"))
    .map((file) => file.replace(/-card\.webp$/, ".webp")),
);

await Promise.all(
  files
    .filter((file) => optimized.has(file))
    .map((file) => rm(path.join(directory, file))),
);

console.log(`Removed ${optimized.size} superseded card images from the export.`);

// Drop Next.js nomodule legacy polyfill tags from static HTML (modern browsers only).
async function walkHtml(dir, acc = []) {
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) await walkHtml(full, acc);
    else if (entry.name.endsWith(".html")) acc.push(full);
  }
  return acc;
}

const htmlFiles = await walkHtml(path.resolve("out"));
let stripped = 0;
for (const file of htmlFiles) {
  const before = await readFile(file, "utf8");
  const after = before.replace(
    /<script[^>]*\bnomodule\b[^>]*><\/script>/gi,
    "",
  );
  if (after !== before) {
    await writeFile(file, after);
    stripped += 1;
  }
}
console.log(`Stripped nomodule polyfill tags from ${stripped} HTML files.`);

// Remove unused nomodule polyfill chunk from the export when nothing references it.
const chunksDir = path.resolve("out", "_next", "static", "chunks");
const chunkFiles = await readdir(chunksDir);
const htmlBlob = (
  await Promise.all(htmlFiles.map((file) => readFile(file, "utf8")))
).join("\n");
let removedChunks = 0;
for (const file of chunkFiles) {
  if (!file.endsWith(".js")) continue;
  const full = path.join(chunksDir, file);
  const text = await readFile(full, "utf8");
  const isLegacyPolyfill =
    text.includes('"trimStart"in String.prototype') &&
    text.includes("Object.hasOwn||");
  if (isLegacyPolyfill && !htmlBlob.includes(file)) {
    await rm(full);
    removedChunks += 1;
  }
}
console.log(`Removed ${removedChunks} unused legacy polyfill chunks.`);
