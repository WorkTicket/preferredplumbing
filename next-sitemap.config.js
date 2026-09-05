/** @type {import('next-sitemap').IConfig} */
const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL?.replace(/\/$/, '') ||
  'https://www.callpreferredplumbing.com'

module.exports = {
  siteUrl,
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  // Dynamic routes come from Next generateStaticParams after build — no duplicated slug lists.
  exclude: ['/thank-you', '/api/*', '/icon.png', '/apple-icon.png', '/icon', '/apple-icon'],
  alternateRefs: [],
  transform: async (config, path) => {
    if (/\.(png|ico|jpe?g|webp|svg|xml)$/i.test(path)) return null

    const defaultPriority = 0.8
    const defaultChangefreq = 'weekly'

    let priority = defaultPriority
    let changefreq = defaultChangefreq

    if (path === '/') {
      priority = 1.0
      changefreq = 'weekly'
    } else if (path.startsWith('/services/')) {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path.startsWith('/areas/')) {
      priority = 0.85
      changefreq = 'monthly'
    } else if (path.startsWith('/blog/')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/services' || path === '/areas-we-serve') {
      priority = 0.9
      changefreq = 'monthly'
    } else if (path === '/about' || path === '/contact') {
      priority = 0.8
      changefreq = 'monthly'
    } else if (path === '/gallery' || path === '/faqs') {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/privacy-policy' || path === '/terms-and-conditions') {
      priority = 0.3
      changefreq = 'yearly'
    }

    return {
      loc: path,
      changefreq,
      priority,
      lastmod: new Date().toISOString(),
      images: [],
    }
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/thank-you' },
      { userAgent: '*', disallow: '/search' },
      { userAgent: '*', disallow: '/images/blog/_raw/' },
      { userAgent: '*', disallow: '/images/blog/_cands/' },
      { userAgent: '*', disallow: '/images/blog/_preview/' },
    ],
  },
}
