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
        'relative rounded-2xl border bg-white p-6 sm:p-7 shadow-premium overflow-hidden',
        plain
          ? 'border-gray-200/80'
          : 'border-gray-200/80 card-lift hover:border-blue-light/30'
      )}
    >
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
        <span className="text-xs font-bold uppercase tracking-wider text-gold-dark">Verified</span>
      </div>

      <p className="mt-5 text-gray-600 leading-relaxed text-[15px] sm:text-base">
        {text}
      </p>

      <div className="mt-5 pt-5 border-t border-gray-100 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue/10 to-blue-light/10 font-display font-bold text-blue text-sm">
          {name.charAt(0)}
        </div>
        <div>
          <p className="font-bold text-gray-900">
            {name}
          </p>
          {location && <p className="text-sm text-gray-400">{location}</p>}
        </div>
      </div>
    </div>
  )
}
