import { preload } from "react-dom";

/** Homepage-only LCP preload (React 19) so other routes do not fetch the lake image. */
export function HomeHeroPreload() {
  preload("/assets/lake-640.webp", {
    as: "image",
    imageSrcSet:
      "/assets/lake-480.webp 480w, /assets/lake-640.webp 640w, /assets/lake-1024.webp 1024w, /assets/lake-1536.webp 1536w",
    imageSizes: "100vw",
    fetchPriority: "high",
  });
  return null;
}
