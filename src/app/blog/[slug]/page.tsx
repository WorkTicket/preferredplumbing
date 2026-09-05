import { notFound } from 'next/navigation'
import type { Metadata } from 'next'
import Image from 'next/image'
import Link from 'next/link'
import { Phone, ArrowLeft } from 'lucide-react'
import { generateBlogMetadata, siteUrl } from '@/lib/seo'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogPostCard from '@/components/ui/BlogPostCard'
import { blogPosts, getBlogPost, getRelatedPosts, getContentWordCount, getReadTimeMinutes } from '@/data/blog'
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
    excerpt: post.excerpt || post.content.find((block) => !block.startsWith('## '))?.slice(0, 160) || '',
    slug: params.slug,
    publishedAt: post.date,
    coverImage: post.coverImage,
    seoTitle: post.seoTitle,
  })
}

export default function BlogPostPage({ params }: Props) {
  const post = getBlogPost(params.slug)
  if (!post) notFound()

  const relatedPosts = getRelatedPosts(params.slug, 3)
  const wordCount = getContentWordCount(post.content)
  const readTimeMinutes = getReadTimeMinutes(post.content)
  const jsonLd = articleSchema({
    title: post.title,
    description: post.excerpt || post.content.find((block) => !block.startsWith('## '))?.slice(0, 160) || '',
    slug: params.slug,
    image: post.coverImage,
    datePublished: post.date,
    dateModified: post.date,
    wordCount,
    readTimeMinutes,
  })

  return (
    <div className="pt-site-header">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            breadcrumbSchema([
              { name: 'Home', url: siteUrl },
              { name: 'Blog', url: `${siteUrl}/blog` },
              { name: post.title, url: `${siteUrl}/blog/${post.slug}` },
            ])
          ),
        }}
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
            <span className="mx-2 text-gray-300" aria-hidden>
              ·
            </span>
            {`${readTimeMinutes} min read`}
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
          {post.relatedService && (
            <div className="rounded-2xl border border-blue/15 bg-white p-6 shadow-premium">
              <p className="text-xs font-bold uppercase tracking-wider text-blue">Need a Plumber?</p>
              <p className="mt-2 font-display text-xl font-bold uppercase text-gray-900">
                {post.relatedService.label}
              </p>
              <p className="mt-2 text-sm text-gray-600">
                Get a free estimate from Preferred Plumbing Solutions. Licensed, insured, and serving North Idaho.
              </p>
              <Link
                href={post.relatedService.href}
                className="btn-primary mt-4 inline-flex"
              >
                View {post.relatedService.label}
              </Link>
            </div>
          )}
          {post.content.map((block, i) =>
            block.startsWith('## ') ? (
              <h2
                key={i}
                className="font-display text-xl sm:text-2xl font-black uppercase text-gray-900 pt-2"
              >
                {block.slice(3)}
              </h2>
            ) : (
              <p key={i}>{block}</p>
            )
          )}
          {post.relatedService && (
            <div className="mt-8 rounded-2xl border border-gray-200 bg-gray-50 p-6">
              <p className="text-sm text-gray-600">
                Ready to schedule?{' '}
                <Link href={post.relatedService.href} className="font-semibold text-blue hover:underline">
                  Request a free estimate for {post.relatedService.label.toLowerCase()}
                </Link>
                .
              </p>
            </div>
          )}
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="section-padding bg-white border-t border-gray-100">
          <div className="container-page max-w-5xl">
            <SectionLabel text="Keep Reading" />
            <h2 className="mt-3 font-display text-2xl sm:text-3xl font-black uppercase text-gray-900">
              Related Articles
            </h2>
            <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relatedPosts.map((related) => (
                <BlogPostCard key={related.slug} post={related} plain />
              ))}
            </div>
          </div>
        </section>
      )}

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
