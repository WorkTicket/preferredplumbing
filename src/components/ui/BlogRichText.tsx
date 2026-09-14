import type { ReactNode } from 'react'
import Link from 'next/link'

/** Internal markdown links only: [label](/path). External URLs are left as plain text. */
const INTERNAL_LINK = /\[([^\]]+)\]\((\/[a-zA-Z0-9/?#\-._~%]*)\)/g

export default function BlogRichText({ text }: { text: string }) {
  const nodes: ReactNode[] = []
  let lastIndex = 0
  const pattern = new RegExp(INTERNAL_LINK.source, 'g')
  let match = pattern.exec(text)

  while (match) {
    const index = match.index
    if (index > lastIndex) {
      nodes.push(text.slice(lastIndex, index))
    }
    nodes.push(
      <Link
        key={`${match[2]}-${index}`}
        href={match[2]}
        className="font-semibold text-blue hover:underline"
      >
        {match[1]}
      </Link>
    )
    lastIndex = index + match[0].length
    match = pattern.exec(text)
  }

  if (lastIndex < text.length) {
    nodes.push(text.slice(lastIndex))
  }

  return <p>{nodes}</p>
}
