/** 301 both `/path` and `/path/` so trailing-slash stripping cannot create a second hop. */
function seoRedirects(rules) {
  return rules.flatMap(({ source, destination }) => {
    const sources = source.endsWith('/') ? [source] : [source, `${source}/`]
    return sources.map((src) => ({ source: src, destination, statusCode: 301 }))
  })
}

/** @type {import('next').NextConfig} */
const config = {
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production' ? { exclude: ['error'] } : false,
  },
  images: {
    // Serve pre-optimized /public/images directly. The default `/_next/image` route
    // returns 400 on Cloudflare Workers even with the IMAGES binding configured.
    unoptimized: true,
    formats: ['image/webp'],
    deviceSizes: [640, 768, 1024, 1280, 1536, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: 'https', hostname: 'lirp.cdn-website.com' },
    ],
  },
  headers: async () => {
    const isDev = process.env.NODE_ENV === 'development'
    return [
    {
      source: '/(.*)',
      headers: [
        { key: 'X-Frame-Options', value: 'DENY' },
        { key: 'X-Content-Type-Options', value: 'nosniff' },
        { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
        { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=()' },
        { key: 'X-XSS-Protection', value: '1; mode=block' },
        { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
      ],
    },
    {
      source: '/images/(.*)',
      headers: [{
        key: 'Cache-Control',
        value: isDev ? 'no-cache, must-revalidate' : 'public, max-age=31536000, immutable',
      }],
    },
    {
      source: '/images/generated/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/videos/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/favicon.ico',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    {
      source: '/_next/static/(.*)',
      headers: [{ key: 'Cache-Control', value: 'public, max-age=31536000, immutable' }],
    },
    ]
  },
  trailingSlash: false,
  skipTrailingSlashRedirect: true,
  // Put canonical tags in the first HTML bytes for every UA (GSC "duplicate without
  // user-selected canonical" happens when metadata is streamed past Googlebot).
  htmlLimitedBots: /.*/,
  // Legacy Duda paths → new App Router paths (also covered in
  // redirects/cloudflare-bulk-redirects.csv for the domain cutover).
  redirects: async () =>
    seoRedirects([
      { source: '/residential-and-commercial-plumbing-solutions', destination: '/services' },
      { source: '/commercial-projects', destination: '/services/commercial' },
      { source: '/new-construction-projects', destination: '/services/new-construction' },
      { source: '/new-construction-plumbing-services', destination: '/services/new-construction' },
      { source: '/water-heaters', destination: '/services/water-heaters' },
      { source: '/radiant-heat', destination: '/services/radiant-heat' },
      { source: '/radiant-heating-and-in-floor-systems', destination: '/services/radiant-heat' },
      { source: '/water-softeners', destination: '/services/water-softeners' },
      { source: '/toilets-and-faucets', destination: '/services/toilets-faucets' },
      { source: '/bathtubs-and-showers', destination: '/services/bathtubs-showers' },
      { source: '/dishwashers-and-disposals', destination: '/services/dishwashers' },
      { source: '/sewer-line-replacement', destination: '/services/sewer-line' },
      { source: '/septic-systems', destination: '/services/septic-systems' },
      { source: '/plumbing-remodels-and-upgrades', destination: '/services/remodels' },
      { source: '/kitchen-remodels', destination: '/services/kitchen-remodels' },
      { source: '/bathroom-remodels', destination: '/services/bathroom-remodels' },
      { source: '/plumbing-repairs-and-emergency-services', destination: '/services/emergency' },
      { source: '/areas-we-serve/:city', destination: '/areas/:city' },
      { source: '/portfolio', destination: '/gallery' },
      { source: '/portfolio/:slug', destination: '/gallery' },
      { source: '/privacy', destination: '/privacy-policy' },
    ]),
  compress: true,
  poweredByHeader: false,
  reactStrictMode: true,
  productionBrowserSourceMaps: false,
  generateEtags: true,
  onDemandEntries: {
    maxInactiveAge: 60 * 60 * 1000,
    pagesBufferLength: 5,
  },
}

export default config

import { initOpenNextCloudflareForDev } from '@opennextjs/cloudflare'
initOpenNextCloudflareForDev()
