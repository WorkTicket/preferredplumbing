import { readdir, readFile, stat } from "node:fs/promises";
import path from "node:path";

const out = path.resolve("out");
const siteOrigin = "https://www.callpreferredplumbing.com";

async function walk(directory) {
  const result = [];
  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const file = path.join(directory, entry.name);
    result.push(...(entry.isDirectory() ? await walk(file) : [file]));
  }
  return result;
}

function decodeHtml(value) {
  const named = { amp: "&", quot: '"', apos: "'", lt: "<", gt: ">" };
  return value.replace(
    /&(?:#(\d+)|#x([\da-f]+)|([a-z]+));/gi,
    (_, decimal, hexadecimal, name) =>
      decimal
        ? String.fromCodePoint(Number(decimal))
        : hexadecimal
          ? String.fromCodePoint(Number.parseInt(hexadecimal, 16))
          : named[name.toLowerCase()] || _,
  );
}

function routeForFile(file) {
  const relative = path.relative(out, file).replaceAll(path.sep, "/");
  if (relative === "index.html") return "/";
  return `/${relative.replace(/\/index\.html$/, "")}/`;
}

function canonicalPath(value) {
  const url = new URL(value, siteOrigin);
  return url.pathname === "/" ? "/" : `${url.pathname.replace(/\/+$/, "")}/`;
}

const files = (await walk(out)).filter((file) => file.endsWith(".html"));
const pageFiles = files.filter(
  (file) => !["/404/", "/_not-found/"].includes(routeForFile(file)) && path.basename(file) !== "404.html",
);
const errors = [];
const incoming = new Map();
const canonicalByRoute = new Map();

for (const file of files) {
  const text = await readFile(file, "utf8");
  const sourceRoute = routeForFile(file);

  for (const match of text.matchAll(/(?:href|src)="(\/[^"#?]*)/g)) {
    const ref = match[1];
    if (ref.startsWith("//")) {
      errors.push(`${sourceRoute}: double-slash reference ${ref}`);
      continue;
    }
    const target = path.join(out, ref.replace(/^\/+/, ""));
    try {
      const targetStat = await stat(target);
      if (targetStat.isDirectory()) await stat(path.join(target, "index.html"));
    } catch {
      errors.push(`${sourceRoute}: broken local reference ${ref}`);
    }
  }

  for (const match of text.matchAll(/<a\b[^>]*href="([^"#]+)"/g)) {
    let url;
    try {
      url = new URL(decodeHtml(match[1]), siteOrigin);
    } catch {
      continue;
    }
    if (url.origin !== siteOrigin) continue;
    const targetRoute = canonicalPath(url.href);
    if (!incoming.has(targetRoute)) incoming.set(targetRoute, new Set());
    incoming.get(targetRoute).add(sourceRoute);
  }

  if (!pageFiles.includes(file)) continue;
  const title = decodeHtml(text.match(/<title>(.*?)<\/title>/s)?.[1] || "");
  const description = decodeHtml(
    text.match(/<meta name="description" content="([^"]*)"/)?.[1] || "",
  );
  const canonical = text.match(/<link rel="canonical" href="([^"]*)"/)?.[1];

  if (!title || title.length > 60) {
    errors.push(`${sourceRoute}: title length is ${title.length} (expected 1-60)`);
  }
  if (description.length < 110 || description.length > 160) {
    errors.push(`${sourceRoute}: description length is ${description.length} (expected 110-160)`);
  }
  if (!canonical) {
    errors.push(`${sourceRoute}: missing canonical URL`);
  } else {
    const canonicalRoute = canonicalPath(canonical);
    canonicalByRoute.set(sourceRoute, canonicalRoute);
    if (canonicalRoute !== sourceRoute) {
      errors.push(`${sourceRoute}: canonical points to ${canonicalRoute}`);
    }
  }
}

const sitemap = await readFile(path.join(out, "sitemap.xml"), "utf8");
const sitemapUrls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  decodeHtml(match[1]),
);
const sitemapRoutes = new Set();

for (const value of sitemapUrls) {
  const url = new URL(value);
  if (url.origin !== siteOrigin) errors.push(`sitemap: unexpected origin ${url.origin}`);
  if (url.pathname.includes("//")) errors.push(`sitemap: double slash in ${value}`);
  const route = canonicalPath(value);
  if (sitemapRoutes.has(route)) errors.push(`sitemap: duplicate URL ${route}`);
  sitemapRoutes.add(route);
}

for (const [route, canonical] of canonicalByRoute) {
  if (!sitemapRoutes.has(canonical)) errors.push(`${route}: canonical URL is absent from sitemap`);
  const sourceCount = incoming.get(route)?.size || 0;
  if (route !== "/" && sourceCount < 2) {
    errors.push(`${route}: only ${sourceCount} incoming internal link source(s)`);
  }
}

for (const route of sitemapRoutes) {
  if (!canonicalByRoute.has(route)) errors.push(`sitemap: ${route} has no exported canonical page`);
}

if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}

console.log(
  `Verified ${pageFiles.length} canonical pages, ${sitemapRoutes.size} sitemap URLs, metadata, and local references.`,
);
