interface SectionLabelProps {
  text: string
}

export default function SectionLabel({ text }: SectionLabelProps) {
  return (
    <div className="mb-3 flex items-center gap-3">
      <span className="h-px w-8 bg-blue" />
      <span className="font-display text-sm font-bold uppercase tracking-[0.15em] text-blue">
        {text}
      </span>
    </div>
  )
}
