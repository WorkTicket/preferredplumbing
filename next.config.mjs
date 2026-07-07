/** @type {import('next').NextConfig} */
const config = {
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
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  headers: async () => [
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
  ],
  redirects: async () => [
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
      source: '/plumbing-remodels-and-upgrades',
      destination: '/services/remodels',
      permanent: true,
    },
    {
      source: '/radiant-heating-and-in-floor-systems',
      destination: '/services/radiant-heat',
      permanent: true,
    },
    {
      source: '/plumbing-repairs-and-emergency-services',
      destination: '/services/emergency',
      permanent: true,
    },
    {
      source: '/residential-and-commercial-plumbing-solutions',
      destination: '/services',
      permanent: true,
    },
    {
      source: '/areas-we-serve/spirit-lake-id',
      destination: '/areas/spirit-lake-id',
      permanent: true,
    },
    {
      source: '/areas-we-serve/:city',
      destination: '/areas/:city',
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
