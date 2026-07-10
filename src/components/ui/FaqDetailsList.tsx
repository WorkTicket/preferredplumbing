import type { FAQ } from '@/types'
import FaqAccordionList from '@/components/ui/FaqAccordionList'

interface FaqDetailsListProps {
  items: FAQ[]
  idPrefix: string
}

export default function FaqDetailsList({ items, idPrefix }: FaqDetailsListProps) {
  return <FaqAccordionList items={items} idPrefix={idPrefix} defaultOpenIndex={0} />
}
