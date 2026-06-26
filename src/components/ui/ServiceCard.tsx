import Link from 'next/link'
import Image from 'next/image'
import { Phone, ArrowUpRight } from 'lucide-react'
import { PHONE_HREF } from '@/lib/utils'

interface ServiceCardProps {
  href: string
  image: string
  title: string
  description: string
}

export default function ServiceCard({ href, image, title, description }: ServiceCardProps) {
  return (
    <div className="group relative overflow-hidden rounded-xl bg-white border border-gray-200 shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl hover:border-blue/40 hover:ring-1 hover:ring-blue/20">
      <Link href={href} className="block">
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={`${title} - Preferred Plumbing Solutions, Spirit Lake ID`}
            fill
            className="object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/70 via-gray-900/10 to-transparent transition-all duration-500 group-hover:from-blue-dark/70" />
          <div className="absolute inset-0 bg-blue/0 transition-all duration-500 group-hover:bg-blue/10" />
          <div className="absolute top-3 right-3 transition-all duration-300 opacity-0 group-hover:opacity-100 translate-y-1 group-hover:translate-y-0">
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
