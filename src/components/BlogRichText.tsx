import type { ReactNode } from "react";

export function BlogRichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    parts.push(text.slice(cursor, match.index));
    parts.push(<a key={`${match.index}-${match[2]}`} href={match[2]}>{match[1]}</a>);
    cursor = match.index + match[0].length;
  }
  parts.push(text.slice(cursor));
  return <p>{parts}</p>;
}
