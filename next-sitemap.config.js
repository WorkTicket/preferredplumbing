/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://www.preferredplumbingsolution.com',
  generateRobotsTxt: true,
  changefreq: 'weekly',
  priority: 0.8,
  sitemapSize: 7000,
  exclude: ['/thank-you', '/api/*', '/studio/*', '/residential-and-commercial-plumbing-solutions'],
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
    } else if (path.startsWith('/portfolio/')) {
      priority = 0.7
      changefreq = 'monthly'
    } else if (path === '/portfolio') {
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
  additionalPaths: async (config) => {
    const services = [
      'new-construction', 'commercial', 'radiant-heat', 'water-heaters',
      'water-softeners', 'toilets-faucets', 'bathtubs-showers',
      'dishwashers', 'sewer-line', 'septic-systems', 'remodels',
      'kitchen-remodels', 'bathroom-remodels', 'emergency',
    ]
    const areas = [
      'spirit-lake-id', 'coeur-dalene-id', 'post-falls-id', 'sandpoint-id',
      'hayden-id', 'rathdrum-id', 'priest-river-id', 'athol-id',
      'blanchard-id', 'clark-fork-id', 'newport-wa', 'chattaroy-wa',
      'moscow-id', 'bellevue-id', 'mead-wa', 'oldtown-id',
    ]
    const portfolios = [
      'new-construction-spirit-lake',
      'commercial-remodel-coeur-dalene',
    ]
    const blogs = [
      'how-to-choose-plumber-spirit-lake-idaho',
      'signs-sewer-line-replacement-north-idaho',
      'radiant-heat-vs-forced-air-idaho',
    ]

    const servicePaths = services.map((slug) => ({
      loc: `/services/${slug}`,
      changefreq: 'monthly',
      priority: 0.9,
      lastmod: new Date().toISOString(),
    }))

    const areaPaths = areas.map((slug) => ({
      loc: `/areas/${slug}`,
      changefreq: 'monthly',
      priority: 0.85,
      lastmod: new Date().toISOString(),
    }))

    const portfolioPaths = portfolios.map((slug) => ({
      loc: `/portfolio/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    const blogPaths = blogs.map((slug) => ({
      loc: `/blog/${slug}`,
      changefreq: 'monthly',
      priority: 0.7,
      lastmod: new Date().toISOString(),
    }))

    return [...servicePaths, ...areaPaths, ...portfolioPaths, ...blogPaths]
  },
  robotsTxtOptions: {
    policies: [
      { userAgent: '*', allow: '/' },
      { userAgent: '*', disallow: '/api/' },
      { userAgent: '*', disallow: '/thank-you' },
      { userAgent: '*', disallow: '/studio/' },
      { userAgent: '*', disallow: '/residential-and-commercial-plumbing-solutions' },
      { userAgent: '*', disallow: '/search' },
    ],
    additionalSitemaps: [
      'https://www.preferredplumbingsolution.com/sitemap.xml',
      'https://www.preferredplumbingsolution.com/sitemap-0.xml',
    ],
  },
}
