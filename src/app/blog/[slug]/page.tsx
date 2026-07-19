import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'
import { generateBlogMetadata, siteUrl } from '@/lib/seo'
import SectionLabel from '@/components/ui/SectionLabel'
import { blogPosts, getBlogPost } from '@/data/blog'
import { formatDisplayDate, PHONE_HREF, PHONE_DISPLAY } from '@/lib/utils'

interface Props {
  params: { slug: string }
}

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export function generateMetadata({ params }: Props): Metadata {
  const post = getBlogPost(params.slug)
  if (!post) return {}
  return generateBlogMetadata({
    title: post.title,
    excerpt: post.excerpt || post.content[0]?.slice(0, 160) || '',
    slug: params.slug,
    publishedAt: post.date,
    coverImage: post.coverImage,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const articleSchema = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt || post.content[0]?.slice(0, 160) || '',
    image: [`${siteUrl}${post.coverImage}`],
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
          <p className="mt-4 text-sm text-gray-400">
            {formatDisplayDate(post.date)}
          </p>
          <h1 className="mt-2 font-display text-[clamp(2rem,6vw,3.5rem)] font-black uppercase leading-[0.95] text-gray-900">
            {post.title}
          </h1>
          <div className="relative mt-8 aspect-[16/9] overflow-hidden rounded-2xl bg-gray-100">
            <Image
              src={post.coverImage}
              alt={post.coverImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 768px"
            />
          </div>
        </div>
      </section>
      <section className="section-padding bg-gray-50">
        <div className="container-page max-w-3xl space-y-5 text-gray-600 leading-relaxed">
          {post.content.map((paragraph, i) => (
            <p key={i}>{paragraph}</p>
          ))}
          {post.relatedService && (
            <div className="mt-8 rounded-2xl border border-blue/15 bg-white p-6 shadow-premium">
              <p className="text-xs font-bold uppercase tracking-wider text-blue">Related Service</p>
              <p className="mt-2 font-display text-xl font-bold uppercase text-gray-900">
                {post.relatedService.label}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Learn more about this service, see what&apos;s included, and request a free estimate.
              </p>
              <Link
                href={post.relatedService.href}
                className="btn-primary mt-4 inline-flex"
              >
                View {post.relatedService.label}
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="bg-gradient-to-r from-blue to-blue-dark py-8 sm:py-10">
        <div className="container-page flex flex-col items-center justify-between gap-4 sm:flex-row">
          <p className="text-center text-lg sm:text-xl font-bold text-white sm:text-left">
            Need plumbing help? Call us.
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
