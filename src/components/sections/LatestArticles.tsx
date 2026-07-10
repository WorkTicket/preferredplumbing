import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import SectionLabel from '@/components/ui/SectionLabel'
import BlogPostCard from '@/components/ui/BlogPostCard'
import { getLatestPosts } from '@/data/blog'

export default function LatestArticles() {
  const posts = getLatestPosts(3)

  return (
    <section className="section-padding bg-gray-50 relative overflow-hidden">
      <div className="container-page relative z-10">
        <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4">
          <div>
            <SectionLabel text="From the Blog" />
            <h2 className="font-display text-[clamp(2rem,7vw,3rem)] font-black uppercase text-gray-900 leading-[0.95]">
              Plumbing Tips &amp;<br />
              <span className="text-blue">Local Guides</span>
            </h2>
            <p className="mt-3 text-gray-500 max-w-lg">
              Expert advice for North Idaho homeowners — maintenance, emergencies, and more.
            </p>
          </div>
          <Link
            href="/blog"
            className="btn-secondary shrink-0 self-start sm:self-auto"
          >
            View All Articles <ArrowRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="mt-8 sm:mt-10 grid gap-5 sm:gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <BlogPostCard key={post.slug} post={post} />
          ))}
        </div>
      </div>
    </section>
  )
}
