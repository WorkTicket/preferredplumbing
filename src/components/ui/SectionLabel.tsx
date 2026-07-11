interface SectionLabelProps {
  text: string
  centered?: boolean
}

export default function SectionLabel({ text, centered = false }: SectionLabelProps) {
  return (
    <div className={`mb-4 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
      <span className="accent-rule shrink-0" />
      <span className="font-display text-xs sm:text-sm font-bold uppercase tracking-[0.2em] text-blue">
        {text}
      </span>
      {centered && <span className="accent-rule shrink-0" />}
    </div>
  )
}
