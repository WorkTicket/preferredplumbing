import type { NextConfig } from "next";
const config: NextConfig = {
  output: "export",
  trailingSlash: true,
  images: { unoptimized: true },
  compiler: {
    removeConsole: process.env.NODE_ENV === "production",
  },
  experimental: {
    agentUpgrade: "security",
    optimizePackageImports: ["@/components", "@/data"],
  },
  // Next still ships unconditional legacy polyfills; alias them out for our
  // modern browserslist (Chrome/Edge/Firefox 111+, Safari 16.4+).
  turbopack: {
    resolveAlias: {
      "../build/polyfills/polyfill-module": "./src/lib/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-module": "./src/lib/empty-polyfill.js",
      "next/dist/build/polyfills/polyfill-nomodule": "./src/lib/empty-polyfill.js",
    },
  },
};
export default config;
