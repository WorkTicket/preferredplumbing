import Link from 'next/link'
import type { BlogPostSummary } from '@/data/blog'

interface BlogPostCardProps {
  post: BlogPostSummary
}

export default function BlogPostCard({ post }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group rounded-xl bg-white border border-gray-200 p-6 shadow-premium transition-all hover:-translate-y-1 hover:shadow-premium-lg hover:border-blue/20"
    >
      <span className="rounded-full bg-blue/10 px-3 py-1 text-xs font-semibold text-blue">
        {post.category}
      </span>
      <h3 className="mt-3 font-display text-lg font-bold uppercase text-gray-900 transition-colors group-hover:text-blue">
        {post.title}
      </h3>
      <p className="mt-2 text-sm text-gray-500 line-clamp-2">{post.excerpt}</p>
      <p className="mt-4 text-xs text-gray-400">
        {new Date(post.date).toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric',
        })}
      </p>
    </Link>
  )
}
