import { readFile } from "node:fs/promises";
import path from "node:path";

const key = "a57ec27edabfaf33ad299c2f90a4c49d";
const sitemap = await readFile(path.resolve("out", "sitemap.xml"), "utf8");
const urlList = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((match) =>
  match[1].replaceAll("&amp;", "&"),
);

if (urlList.length === 0) {
  throw new Error("No URLs were found in out/sitemap.xml.");
}

const origin = new URL(urlList[0]);
const response = await fetch("https://api.indexnow.org/indexnow", {
  method: "POST",
  headers: { "content-type": "application/json; charset=utf-8" },
  body: JSON.stringify({
    host: origin.host,
    key,
    keyLocation: `${origin.origin}/${key}.txt`,
    urlList,
  }),
});

if (![200, 202].includes(response.status)) {
  throw new Error(
    `IndexNow rejected the submission (${response.status}): ${await response.text()}`,
  );
}

console.log(`Submitted ${urlList.length} canonical URLs to IndexNow (${response.status}).`);
