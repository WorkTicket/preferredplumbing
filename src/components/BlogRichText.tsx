import type { ReactNode } from "react";

function withTrailingSlash(href: string): string {
  if (!href.startsWith("/") || href.startsWith("//")) return href;
  if (href === "/" || href.includes("?") || href.includes("#")) return href;
  return href.endsWith("/") ? href : `${href}/`;
}

export function BlogRichText({ text }: { text: string }) {
  const parts: ReactNode[] = [];
  const pattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let cursor = 0;
  let match: RegExpExecArray | null;
  while ((match = pattern.exec(text))) {
    parts.push(text.slice(cursor, match.index));
    const href = withTrailingSlash(match[2]);
    parts.push(
      <a key={`${match.index}-${href}`} href={href}>
        {match[1]}
      </a>,
    );
    cursor = match.index + match[0].length;
  }
  parts.push(text.slice(cursor));
  return <p>{parts}</p>;
}
