import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ArrowLeft, ChevronRight } from 'lucide-react'
import { generateMetadata as genMeta, generateBlogMetadata, siteUrl } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'

interface Props {
  params: { slug: string }
}

const posts: Record<string, { title: string; content: string[]; date: string }> = {
  'how-to-choose-plumber-spirit-lake-idaho': {
    title: 'How to Choose a Plumber in Spirit Lake, Idaho',
    date: '2026-06-15',
    content: [
      'Finding the right plumber in Spirit Lake doesn\'t have to be hard. Whether you\'re building a new home or dealing with an emergency repair, a qualified local plumber makes all the difference.',
      'Start by looking for a licensed and insured plumbing contractor. Idaho requires proper licensing, and insurance protects both you and the plumber in case of accidents. Preferred Plumbing Solutions is fully licensed in both Idaho and Washington.',
      'Experience matters. A plumber with decades of local experience knows the specific challenges of North Idaho homes. Freezing winters that burst pipes. Hard water that wears down fixtures.',
      'Ask about their service area. Some plumbers only work in certain cities. We serve 16 cities across Idaho and Washington, from Spirit Lake to Spokane Valley.',
      'Read reviews. Check Google reviews and ask for references. A 5-star rating from local customers speaks volumes about reliability and work quality.',
      'Finally, get a detailed quote before work begins. Transparent pricing is a hallmark of a trustworthy plumbing contractor.',
    ],
  },
  'signs-sewer-line-replacement-north-idaho': {
    title: 'Signs You Need a Sewer Line Replacement in North Idaho',
    date: '2026-06-10',
    content: [
      'Your sewer line is one of the most critical parts of your home\'s plumbing system. When it fails, the problems can be messy and expensive. Here are the key signs that you may need a sewer line replacement in North Idaho.',
      'Frequent backups. If you\'re dealing with repeated toilet or drain backups, your sewer line may be compromised. Tree roots, shifting soil, and aging pipes are common causes in our region.',
      'Slow drains throughout the house. When multiple drains are slow simultaneously, it\'s a strong indicator of a main sewer line issue, not just a single clogged pipe.',
      'Foul odors. Sewer gas smells in your yard or basement suggest a crack or leak in your sewer line. This is a health hazard and needs immediate attention.',
      'Soggy patches in your yard. Unexplained wet or sunken areas in your lawn, especially near the sewer line path, indicate a leak.',
      'If you notice any of these signs, call a professional plumber immediately. We offer sewer line inspection and replacement throughout North Idaho.',
    ],
  },
  'radiant-heat-vs-forced-air-idaho': {
    title: 'Radiant Heat vs. Forced Air: What North Idaho Homeowners Should Know',
    date: '2026-06-05',
    content: [
      'Radiant in-floor heating and forced air systems each have their strengths. Here\'s what you need to know to pick the right one for your North Idaho home.',
      'Radiant heat works by circulating warm water through tubing installed in your floors. It provides even, draft-free warmth that feels natural and comfortable. Idaho homeowners love it for bathrooms, basements, and entire homes.',
      'Forced air systems use ductwork to blow heated air throughout your home. They\'re generally less expensive to install initially and can also handle air conditioning through the same ducts.',
      'Efficiency: Radiant heat is typically 20-30% more efficient than forced air because it doesn\'t lose heat through ductwork. Water is an excellent conductor of heat, making hydronic systems highly efficient.',
      'Comfort: Radiant heat eliminates cold spots and drafts. The warmth rises from the floor, creating an even temperature from floor to ceiling. Forced air can create temperature stratification and blow dust around.',
      'Cost: While radiant heat has a higher upfront installation cost, the long-term energy savings often offset the difference within a few years, especially in cold climates like North Idaho.',
      'At Preferred Plumbing Solutions, we specialize in radiant heat installation throughout Spirit Lake and North Idaho. We can help you determine if it\'s the right choice for your home.',
    ],
  },
}

export function generateStaticParams() {
  return Object.keys(posts).map((slug) => ({ slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = posts[params.slug]
  if (!post) return {}
  return generateBlogMetadata({
    title: post.title,
    excerpt: post.content[0]?.slice(0, 160) || '',
    slug: params.slug,
    publishedAt: post.date,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = posts[params.slug]
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.content[0]?.slice(0, 160) || '',
    datePublished: post.date,
    dateModified: post.date,
    author: {
      '@type': 'Person',
      name: 'Ron Norris',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Preferred Plumbing Solutions',
      url: siteUrl,
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': `${siteUrl}/blog/${params.slug}`,
    },
  }

  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <section className="section-padding bg-white">
        <div className="container-page max-w-3xl">
          <Link href="/blog" className="inline-flex items-center gap-1 text-sm text-gray-500 transition hover:text-blue">
            <ArrowLeft className="h-4 w-4" /> Back to Blog
          </Link>
          <div className="mt-4">
            <SectionLabel text="Blog" />
          </div>
          <p className="mt-4 text-sm text-gray-400">{post.date}</p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.95] text-gray-900">
            {post.title}
          </h1>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-page max-w-3xl space-y-5 text-gray-600 leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Need plumbing help? Call us.
          </p>
          <a
            href="tel:12082903889"
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> (208) 290-3889
          </a>
        </div>
      </section>
    </div>
  )
}
