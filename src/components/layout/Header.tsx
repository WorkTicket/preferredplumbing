import Image from 'next/image'
import Link from 'next/link'
import { Phone } from 'lucide-react'
import { PHONE, PHONE_HREF } from '@/lib/utils'
import HeaderShell from './HeaderShell'

/** Server entry — brand + CTAs render on the server; menus live in HeaderShell. */
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
            width={44}
            height={44}
            priority
            className="header-brand-logo h-9 w-auto shrink-0 md:h-11"
          />
          <span className="min-w-0 -ml-1 whitespace-nowrap font-display font-bold uppercase leading-none tracking-[0.02em] text-gray-900 md:ml-0 md:tracking-wider text-[clamp(0.8125rem,3.3vw,1.0625rem)] md:text-xl lg:text-2xl">
            Preferred Plumbing <span className="text-blue">Solutions</span>
          </span>
        </Link>
      }
      actions={
        <div className="ml-1 flex items-center gap-2 lg:gap-2.5">
          <a
            href={PHONE_HREF}
            className="flex items-center gap-2 whitespace-nowrap rounded-xl border-2 border-blue/80 px-4 py-2.5 text-sm font-bold text-blue transition-all duration-300 hover:bg-blue hover:text-white hover:shadow-premium active:scale-[0.97]"
          >
            <Phone className="h-3.5 w-3.5 shrink-0" />
            {PHONE}
          </a>
          <Link
            href="/contact"
            className="whitespace-nowrap rounded-xl bg-blue px-5 py-2.5 text-sm font-bold text-white shadow-premium-md transition-all duration-300 hover:bg-blue-dark hover:shadow-premium-lg active:scale-[0.97]"
          >
            Free Quote
          </Link>
        </div>
      }
    />
  )
}
