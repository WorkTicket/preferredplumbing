import { Mail } from 'lucide-react'
import { CONTACT_EMAILS } from '@/lib/utils'
import { cn } from '@/lib/utils'

interface ContactEmailListProps {
  className?: string
  plain?: boolean
}

export default function ContactEmailList({ className, plain = false }: ContactEmailListProps) {
  return (
    <div className={cn('space-y-3 sm:space-y-4', className)}>
      {CONTACT_EMAILS.map((contact) => (
        <a
          key={contact.email}
          href={`mailto:${contact.email}`}
          className={cn(
            plain ? 'block text-gray-700' : 'flex items-center gap-3 text-gray-700 transition-all duration-300 hover:text-blue group'
          )}
        >
          {plain ? (
            <div className="min-w-0">
              <p className="text-xs text-gray-400">Email</p>
              <span className="font-semibold block">{contact.name}</span>
              <span className="text-sm break-all">{contact.email}</span>
            </div>
          ) : (
            <>
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue/10 transition-all duration-300 group-hover:bg-blue shrink-0">
                <Mail className="h-5 w-5 text-blue transition-colors duration-300 group-hover:text-white" />
              </div>
              <div className="min-w-0">
                <p className="text-xs text-gray-400">Email</p>
                <span className="font-semibold block">{contact.name}</span>
                <span className="text-sm break-all">{contact.email}</span>
              </div>
            </>
          )}
        </a>
      ))}
    </div>
  )
}
