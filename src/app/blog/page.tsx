import type { Metadata } from 'next'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { generateMetadata, siteUrl } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogPostCard from '@/components/ui/BlogPostCard'
import { blogPosts } from '@/data/blog'
import { PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

export const metadata: Metadata = generateMetadata({
  title: 'Plumbing Blog Spirit Lake ID',
  description:
    'Plumbing tips and guides for North Idaho homeowners: water heaters, emergency plumbing, septic care, and more from Preferred Plumbing.',
  slug: 'blog',
  canonical: `${siteUrl}/blog`,
})

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
            Practical tips on plumbing maintenance, water heaters, emergencies, and more.
          </p>
        </div>
      </section>

      <section className="section-padding bg-gray-50">
        <div className="container-page">
          <SectionLabel text="Latest Posts" />
          <div className="grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => (
              <BlogPostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Have a plumbing question? Call us.
          </p>
          <a
            href={PHONE_HREF}
            className="btn-primary bg-white text-blue hover:bg-blue-50 inline-flex"
          >
            <Phone className="h-5 w-5" /> {PHONE_DISPLAY}
          </a>
        </div>
      </section>
    </div>
  )
}
