import Link from 'next/link'
import { Phone, ArrowUpRight, Wrench } from 'lucide-react'
import { SERVICE_NAV_ICONS } from '@/lib/nav-services'
import { cn, PHONE_HREF } from '@/lib/utils'

interface ServiceCardProps {
  href: string
  slug: string
  title: string
  description: string
}

export default function ServiceCard({ href, slug, title, description }: ServiceCardProps) {
  const Icon = SERVICE_NAV_ICONS[slug] ?? Wrench
  const isEmergency = slug === 'emergency'

  return (
    <div
      className={cn(
        'group relative flex h-full flex-col overflow-hidden rounded-xl border bg-white shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl hover:ring-1',
        isEmergency
          ? 'border-red-200/80 hover:border-red-300 hover:ring-red-200/60'
          : 'border-gray-200 hover:border-blue/40 hover:ring-blue/20'
      )}
    >
      <div
        aria-hidden
        className={cn(
          'h-1 w-full',
          isEmergency
            ? 'bg-gradient-to-r from-red-600 via-red-500 to-red-400'
            : 'bg-gradient-to-r from-blue-dark via-blue to-blue-light'
        )}
      />

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex items-start justify-between gap-3">
          <div
            className={cn(
              'flex h-12 w-12 shrink-0 items-center justify-center rounded-xl transition-all duration-300 group-hover:scale-105 group-hover:shadow-premium-md',
              isEmergency
                ? 'bg-red-50 text-red-600 group-hover:bg-red-600 group-hover:text-white'
                : 'bg-blue/10 text-blue group-hover:bg-blue group-hover:text-white'
            )}
          >
            <Icon className="h-6 w-6" strokeWidth={2.25} />
          </div>

          <Link
            href={href}
            aria-label={`View ${title}`}
            className={cn(
              'inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border transition-all duration-300',
              isEmergency
                ? 'border-red-100 bg-red-50/80 text-red-500 opacity-100 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 group-hover:border-red-200 group-hover:bg-red-600 group-hover:text-white'
                : 'border-gray-100 bg-gray-50/80 text-gray-400 opacity-100 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0 group-hover:border-blue/20 group-hover:bg-blue group-hover:text-white'
            )}
          >
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>

        <Link href={href} className="mt-4 block">
          <h3
            className={cn(
              'font-bold text-lg sm:text-xl uppercase tracking-wide leading-tight transition-colors duration-300',
              isEmergency ? 'text-gray-900 group-hover:text-red-700' : 'text-gray-900 group-hover:text-blue'
            )}
          >
            {title}
          </h3>
        </Link>

        <p className="mt-2 flex-1 text-sm text-gray-500 line-clamp-3 leading-relaxed">
          {description}
        </p>

        <div className="mt-5 flex items-center gap-2 border-t border-gray-100 pt-4">
          <Link
            href={href}
            className={cn(
              'inline-flex items-center gap-1.5 text-sm font-semibold transition-all duration-300 group-hover:gap-2.5',
              isEmergency ? 'text-red-600 hover:text-red-700' : 'text-blue'
            )}
          >
            Learn More
            <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-gray-300">|</span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 transition-colors duration-300 hover:text-blue"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </div>
    </div>
  )
}
