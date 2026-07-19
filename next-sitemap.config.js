/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.preferredplumbingsolution.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  // Dynamic routes come from Next generateStaticParams after build — no duplicated slug lists.
  exclude: ['/thank-you', '/api/*', '/residential-and-commercial-plumbing-solutions'],
  alternateRefs: [],
  transform: async (config, path) => {
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
      { userAgent: '*', disallow: '/residential-and-commercial-plumbing-solutions' },
      { userAgent: '*', disallow: '/search' },
    ],
    additionalSitemaps: [
      'https://www.preferredplumbingsolution.com/sitemap.xml',
      'https://www.preferredplumbingsolution.com/sitemap-0.xml',
    ],
  },
}
