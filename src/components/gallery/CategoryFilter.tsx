'use client'

import { cn } from '@/lib/utils'

const categories = ['All Projects', 'Residential', 'Commercial', 'New Construction', 'Remodels'] as const

interface CategoryFilterProps {
  active: string
  onChange: (category: string) => void
}

export default function CategoryFilter({ active, onChange }: CategoryFilterProps) {
  return (
    <div className="flex flex-wrap gap-2 sm:gap-3">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onChange(cat)}
          className={cn(
            'rounded-full px-5 py-2.5 text-sm font-semibold transition-all duration-300 touch-target',
            active === cat
              ? 'bg-blue text-white shadow-premium-md shadow-blue/20 scale-105'
              : 'bg-white text-gray-600 border-2 border-gray-200 hover:border-blue/40 hover:text-blue hover:bg-blue-50/50 active:scale-95'
          )}
        >
          {cat}
        </button>
      ))}
    </div>
  )
}
