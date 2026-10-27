import { readdir, rm } from "node:fs/promises";
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
