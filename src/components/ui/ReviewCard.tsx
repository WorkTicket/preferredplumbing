import { Star } from 'lucide-react'

interface ReviewCardProps {
  name: string
  location?: string
  rating: number
  text: string
}

export default function ReviewCard({ name, location, rating, text }: ReviewCardProps) {
  return (
    <div className="group rounded-xl bg-white border border-gray-200 p-6 shadow-premium transition-all duration-500 hover:-translate-y-1.5 hover:shadow-premium-xl hover:border-blue/20 hover:ring-1 hover:ring-blue/10">
      <div className="flex gap-1">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star
            key={i}
            className={`h-5 w-5 transition-all duration-300 ${i < rating ? 'fill-yellow-400 text-yellow-400' : 'fill-gray-200 text-gray-200'} ${i < rating ? 'group-hover:scale-110 group-hover:drop-shadow-sm' : ''}`}
          />
        ))}
      </div>
      <p className="mt-4 text-gray-600 leading-relaxed">&ldquo;{text}&rdquo;</p>
      <div className="mt-4 pt-4 border-t border-gray-100">
        <p className="font-semibold text-gray-900 group-hover:text-blue transition-colors duration-300">{name}</p>
        {location && <p className="text-sm text-gray-400">{location}</p>}
      </div>
    </div>
  )
}
