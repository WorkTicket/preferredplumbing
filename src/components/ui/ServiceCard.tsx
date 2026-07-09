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
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl hover:border-blue/40 hover:ring-1 hover:ring-blue/20">
      <Link href={href} className="block">
        <div
          className={cn(
            'relative flex h-48 w-full items-center justify-center overflow-hidden transition-all duration-500',
            isEmergency
              ? 'bg-gradient-to-br from-red-50 via-red-100/80 to-red-200/60 group-hover:from-red-100 group-hover:via-red-200/80 group-hover:to-red-300/60'
              : 'bg-gradient-to-br from-blue-50 via-blue-100/60 to-blue-200/40 group-hover:from-blue-100 group-hover:via-blue-200/70 group-hover:to-blue-300/50'
          )}
        >
          <div
            className={cn(
              'flex h-20 w-20 items-center justify-center rounded-2xl shadow-premium transition-all duration-500 group-hover:scale-110',
              isEmergency
                ? 'bg-white text-red-600 ring-1 ring-red-200/80 group-hover:bg-red-600 group-hover:text-white group-hover:ring-red-600/30'
                : 'bg-white text-blue ring-1 ring-blue/20 group-hover:bg-blue group-hover:text-white group-hover:ring-blue/30'
            )}
          >
            <Icon className="h-9 w-9" strokeWidth={2} />
          </div>
          <div className="absolute top-3 right-3 transition-all duration-300 opacity-100 translate-y-0 sm:opacity-0 sm:translate-y-1 sm:group-hover:opacity-100 sm:group-hover:translate-y-0">
            <span className="inline-flex items-center gap-1 rounded-full bg-white/90 px-2.5 py-1 text-xs font-bold text-blue shadow-premium backdrop-blur-sm">
              <ArrowUpRight className="h-3 w-3" /> View
            </span>
          </div>
        </div>
      </Link>
      <div className="p-5">
        <Link href={href}>
          <h3 className="font-bold text-xl uppercase tracking-wide text-gray-900 transition-colors duration-300 group-hover:text-blue">
            {title}
          </h3>
        </Link>
        <p className="mt-2 text-sm text-gray-500 line-clamp-2 leading-relaxed">{description}</p>
        <div className="mt-4 flex items-center gap-2">
          <Link
            href={href}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue transition-all duration-300 group-hover:gap-2.5"
          >
            Learn More <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
          <span className="text-gray-300">|</span>
          <a
            href={PHONE_HREF}
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-gray-600 transition-all duration-300 hover:text-blue"
          >
            <Phone className="h-3.5 w-3.5" /> Call
          </a>
        </div>
      </div>
    </div>
  )
}
