import { Mail } from 'lucide-react'
import { CONTACT_EMAILS } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ContactEmailListProps {
  variant?: 'stacked' | 'footer' | 'inline'
  className?: string
}

export default function ContactEmailList({ variant = 'stacked', className }: ContactEmailListProps) {
  if (variant === 'footer') {
    return (
      <div className={cn('flex flex-col gap-2', className)}>
        {CONTACT_EMAILS.map((contact) => (
          <a
            key={contact.email}
            href={`mailto:${contact.email}`}
            className="inline-flex lg:justify-start justify-center items-center gap-2 text-sm text-gray-400 hover:text-blue-light transition-colors duration-300"
          >
            <Mail className="h-4 w-4 text-blue-light shrink-0" />
            <span>
              {contact.name} · {contact.email}
            </span>
          </a>
        ))}
      </div>
    )
  }

  return (
    <div className={cn('space-y-3 sm:space-y-4', className)}>
      {CONTACT_EMAILS.map((contact) => (
        <a
          key={contact.email}
          href={`mailto:${contact.email}`}
          className="flex items-center gap-3 text-gray-700 transition-all duration-300 hover:text-blue group"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 transition-all duration-300 group-hover:bg-blue shrink-0">
            <Mail className="h-5 w-5 text-blue transition-colors duration-300 group-hover:text-white" />
          </div>
          <div className="min-w-0">
            <p className="text-xs text-gray-400">Email</p>
            <span className="font-semibold block">{contact.name}</span>
            <span className="text-sm break-all">{contact.email}</span>
          </div>
        </a>
      ))}
    </div>
  )
}
