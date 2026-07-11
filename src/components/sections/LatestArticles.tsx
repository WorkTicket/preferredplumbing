import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogPostCard from '@/components/ui/BlogPostCard'
import { getLatestPosts } from '@/data/blog'

export default function LatestArticles() {
  const posts = getLatestPosts(3)

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden mesh-bg-light">
      <div className="container-page relative z-10">
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-2xl">
            <SectionLabel text="From the Blog" />
            <h2 className="section-heading">
              Plumbing Tips &amp;<br />
              <span className="text-blue">Local Guides</span>
            </h2>
            <p className="section-subtitle mt-3">
              Practical tips for North Idaho homeowners: maintenance, emergencies, and more.
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-secondary shrink-0 self-start lg:self-auto"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-10 sm:mt-12 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
