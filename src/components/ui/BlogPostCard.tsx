import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import type { BlogPostSummary } from '@/data/blog'
import { cn, formatDisplayDate } from '@/lib/utils'

interface BlogPostCardProps {
  post: BlogPostSummary
  plain?: boolean
}

export default function BlogPostCard({ post, plain = false }: BlogPostCardProps) {
  return (
    <Link
      href={`/blog/${post.slug}`}
      className={cn(
        'group relative flex h-full flex-col rounded-2xl border border-gray-200/80 bg-white p-6 sm:p-7 shadow-premium overflow-hidden',
        !plain && 'card-lift hover:border-blue-light/30'
      )}
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue-light/30 to-transparent" />

      <div className="flex items-center justify-between gap-3">
        <span className="rounded-full border border-blue/15 bg-blue/5 px-3 py-1 text-xs font-bold uppercase tracking-wider text-blue">
          {post.category}
        </span>
        <ArrowUpRight className={cn(
          'h-4 w-4 text-gray-300 transition-all duration-300',
          !plain && 'group-hover:text-blue group-hover:translate-x-0.5 group-hover:-translate-y-0.5'
        )} />
      </div>

      <h3 className={cn(
        'mt-4 font-display text-lg sm:text-xl font-black uppercase text-gray-900 leading-tight flex-1',
        !plain && 'transition-colors group-hover:text-blue'
      )}>
        {post.title}
      </h3>

      <p className="mt-3 text-sm text-gray-500 line-clamp-2 leading-relaxed">{post.excerpt}</p>

      <p className="mt-5 pt-4 border-t border-gray-100 text-xs font-medium text-gray-400 uppercase tracking-wider">
        {formatDisplayDate(post.date)}
      </p>
    </Link>
  )
}
