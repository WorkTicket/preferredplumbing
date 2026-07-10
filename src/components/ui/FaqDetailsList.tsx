import type { FAQ } from '@/types'

interface FaqDetailsListProps {
  items: FAQ[]
  idPrefix: string
}

export default function FaqDetailsList({ items, idPrefix }: FaqDetailsListProps) {
  return (
    <div className="space-y-3 sm:space-y-4">
      {items.map((faq, i) => (
        <details
          key={`${idPrefix}-${i}`}
          id={`${idPrefix}-faq-${i}`}
          className="group rounded-xl bg-white border border-gray-200 shadow-premium open:ring-1 open:ring-blue/20"
        >
          <summary className="flex cursor-pointer items-center justify-between p-5 font-semibold text-gray-900 transition hover:text-blue list-none text-sm sm:text-base [&::-webkit-details-marker]:hidden">
            {faq.question}
            <span className="shrink-0 text-2xl text-gray-400 transition group-open:rotate-45 ml-2">+</span>
          </summary>
          <div className="px-5 pb-5">
            <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{faq.answer}</p>
          </div>
        </details>
      ))}
    </div>
  )
}
