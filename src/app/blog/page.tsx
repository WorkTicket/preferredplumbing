import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone, ChevronRight } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Blog Spirit Lake ID | Tips & Guides',
  description: 'Plumbing tips, guides, and advice for North Idaho homeowners. Water heater maintenance, emergency plumbing, septic care, and more from Preferred Plumbing Solutions.',
  slug: 'blog',
  canonical: `${siteUrl}/blog`,
})

const blogPosts = [
  { slug: 'how-to-choose-plumber-spirit-lake-idaho', title: 'How to Choose a Plumber in Spirit Lake, Idaho', excerpt: 'Looking for a reliable plumber in Spirit Lake? Here\'s what to look for and why local experience matters.', date: '2026-06-15', category: 'Tips' },
  { slug: 'signs-sewer-line-replacement-north-idaho', title: 'Signs You Need a Sewer Line Replacement in North Idaho', excerpt: 'Frequent backups, slow drains, and foul odors could mean sewer line trouble. Learn the warning signs.', date: '2026-06-10', category: 'Guides' },
  { slug: 'radiant-heat-vs-forced-air-idaho', title: 'Radiant Heat vs. Forced Air: What North Idaho Homeowners Should Know', excerpt: 'Compare the comfort, efficiency, and cost of radiant heat versus forced air in cold Idaho winters.', date: '2026-06-05', category: 'Guides' },
]

export default function BlogPage() {
  return (
    <div className="pt-14 sm:pt-16">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Blog',
            name: 'Preferred Plumbing Solutions Blog',
            description: 'Plumbing tips, guides, and advice for North Idaho homeowners.',
            url: `${siteUrl}/blog`,
            publisher: { '@type': 'Organization', name: 'Preferred Plumbing Solutions' },
          }),
        }}
      />
      <section className="section-padding bg-white">
        <div className="container-page">
          <SectionLabel text="Blog" />
          <h1 className="font-display text-[clamp(2.2rem,8vw,4.5rem)] font-black uppercase leading-[0.9] text-gray-900">
            Plumbing Tips &amp; Guides<br />
            <span className="text-blue">for North Idaho Homeowners</span>
          </h1>
          <p className="mt-4 max-w-2xl text-gray-600">
            Expert advice on plumbing maintenance, water heaters, emergencies, and more.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Latest Posts" />
          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group rounded-xl bg-white border border-gray-200 p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg hover:border-blue/20"
              >
                <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
                  {post.category}
                </span>
                <h2 className="mt-3 font-display text-lg font-bold uppercase text-gray-900 transition-colors group-hover:text-blue">
                  {post.title}
                </h2>
                <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
                <p className="mt-4 text-xs text-gray-400">{post.date}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Have a plumbing question? Call us.
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
