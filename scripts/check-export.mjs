import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";
const out = path.resolve("out");
async function walk(dir) {
  const result = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const file = path.join(dir, entry.name);
    result.push(...(entry.isDirectory() ? await walk(file) : [file]));
  }
  return result;
}
const files = (await walk(out)).filter((file) => file.endsWith(".html"));
const errors = [];
for (const file of files) {
  const text = await readFile(file, "utf8");
  for (const match of text.matchAll(/(?:href|src)="(\/[^"?#]*)/g)) {
    const ref = match[1];
    if (ref.startsWith("//")) {
      errors.push(`${file}: ${ref}`);
      continue;
    }
    const target = path.join(out, ref);
    try {
      const s = await stat(target);
      if (s.isDirectory()) await stat(path.join(target, "index.html"));
    } catch {
      errors.push(`${path.relative(out, file)}: ${ref}`);
    }
  }
}
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(
  `Verified local references across ${files.length} exported HTML files.`,
);
