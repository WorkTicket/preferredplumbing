import { Star } from 'lucide-react'
import { cn } from '@/lib/utils'

interface ReviewCardProps {
  name: string
  location?: string
  rating: number
  text: string
  plain?: boolean
}

export default function ReviewCard({ name, location, rating, text, plain = false }: ReviewCardProps) {
  return (
    <div
      className={cn(
        'premium-card relative p-6 sm:p-7',
        !plain && 'card-lift hover:border-blue/20'
      )}
    >
      <span className="font-serif absolute right-5 top-3 select-none text-7xl leading-none text-blue/[0.07]" aria-hidden>
        ”
      </span>
      <div className="flex items-center gap-3">
        <div className="flex gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={cn(
                'h-4 w-4',
                i < rating ? 'fill-gold text-gold' : 'fill-gray-200 text-gray-200'
              )}
            />
          ))}
        </div>
        <span className="text-[10px] font-bold uppercase tracking-[0.18em] text-gold-dark">Verified</span>
      </div>

      <p className="relative mt-5 text-[15px] leading-relaxed text-gray-600 sm:text-base">
        {text}
      </p>

      <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue/15 to-blue-light/10 font-display text-sm font-bold text-blue">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900">{name}</p>
          {location && <p className="text-sm text-gray-400">{location}</p>}
        </div>
      </div>
    </div>
  )
}
