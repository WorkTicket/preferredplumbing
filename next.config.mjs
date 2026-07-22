/** @type {import('next').NextConfig} */
const config = {
  experimental: {
    optimizePackageImports: ['lucide-react', 'framer-motion'],
  },
  images: {
    // Serve pre-optimized /public/images directly. The default `/_next/image` route
    // returns 400 on Cloudflare Workers even with the IMAGES binding configured.
    unoptimized: true,
    formats: ['image/avif', 'image/webp'],
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
    ]
  },
  // Legacy Duda paths → new App Router paths (also covered in
  // redirects/cloudflare-bulk-redirects.csv for the domain cutover).
  redirects: async () => [
    // Service pages that changed slug shape
    {
      source: '/residential-and-commercial-plumbing-solutions',
      destination: '/services',
      permanent: true,
    },
    {
      source: '/commercial-projects',
      destination: '/services/commercial',
      permanent: true,
    },
    {
      source: '/new-construction-projects',
      destination: '/services/new-construction',
      permanent: true,
    },
    {
      source: '/new-construction-plumbing-services',
      destination: '/services/new-construction',
      permanent: true,
    },
    {
      source: '/water-heaters',
      destination: '/services/water-heaters',
      permanent: true,
    },
    {
      source: '/radiant-heat',
      destination: '/services/radiant-heat',
      permanent: true,
    },
    {
      source: '/radiant-heating-and-in-floor-systems',
      destination: '/services/radiant-heat',
      permanent: true,
    },
    {
      source: '/water-softeners',
      destination: '/services/water-softeners',
      permanent: true,
    },
    {
      source: '/toilets-and-faucets',
      destination: '/services/toilets-faucets',
      permanent: true,
    },
    {
      source: '/bathtubs-and-showers',
      destination: '/services/bathtubs-showers',
      permanent: true,
    },
    {
      source: '/dishwashers-and-disposals',
      destination: '/services/dishwashers',
      permanent: true,
    },
    {
      source: '/sewer-line-replacement',
      destination: '/services/sewer-line',
      permanent: true,
    },
    {
      source: '/septic-systems',
      destination: '/services/septic-systems',
      permanent: true,
    },
    {
      source: '/plumbing-remodels-and-upgrades',
      destination: '/services/remodels',
      permanent: true,
    },
    {
      source: '/kitchen-remodels',
      destination: '/services/kitchen-remodels',
      permanent: true,
    },
    {
      source: '/bathroom-remodels',
      destination: '/services/bathroom-remodels',
      permanent: true,
    },
    {
      source: '/plumbing-repairs-and-emergency-services',
      destination: '/services/emergency',
      permanent: true,
    },
    // Area pages moved from /areas-we-serve/:city → /areas/:city
    {
      source: '/areas-we-serve/:city',
      destination: '/areas/:city',
      permanent: true,
    },
    // Portfolio → gallery
    {
      source: '/portfolio',
      destination: '/gallery',
      permanent: true,
    },
    {
      source: '/portfolio/:slug',
      destination: '/gallery',
      permanent: true,
    },
  ],
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
