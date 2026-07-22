import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE, PHONE_HREF } from '@/lib/utils'
import HeaderShell from './HeaderShell'

/** Server entry — brand + CTAs render on the server; menus/scroll live in HeaderShell. */
export default function Header() {
  return (
    <HeaderShell
      brand={
        <Link
          href="/"
          className="group flex min-w-0 flex-1 items-center gap-0.5 pr-2 md:flex-initial md:gap-2.5 md:pr-0"
        >
          <Image
            src="/images/preferred-logo.webp"
            alt="Preferred Plumbing Solutions logo"
            width={36}
            height={36}
            priority
            className="header-brand-logo h-8 w-auto shrink-0 transition-all duration-500 md:h-9 group-data-[scrolled=true]/hdr:h-7"
          />
          <span className="min-w-0 -ml-1 whitespace-nowrap font-display font-bold uppercase leading-none tracking-[0.02em] text-gray-900 transition-all duration-500 md:ml-0 md:tracking-wider text-[clamp(0.75rem,3.15vw,0.875rem)] md:text-xl group-data-[scrolled=true]/hdr:text-[clamp(0.6875rem,3vw,0.8125rem)] group-data-[scrolled=true]/hdr:md:text-sm group-data-[scrolled=true]/hdr:lg:text-xl">
            Preferred Plumbing <span className="text-blue">Solutions</span>
          </span>
        </Link>
      }
      actions={
        <div className="ml-1 flex items-center gap-2 lg:gap-2.5">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 whitespace-nowrap rounded-xl border-2 border-blue/80 px-3.5 py-2 text-sm font-bold text-blue transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-premium active:scale-[0.97]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-xl bg-blue px-4 py-2 text-sm font-bold text-white shadow-premium-md transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.97]"
          >
            Free Quote
          </Link>
        </div>
      }
    />
  )
}
