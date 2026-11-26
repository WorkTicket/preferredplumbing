import type { CSSProperties } from "react";

type ResponsiveImgProps = {
  src: string;
  alt: string;
  width: number;
  height: number;
  widths?: number[];
  sizes?: string;
  className?: string;
  loading?: "eager" | "lazy";
  fetchPriority?: "high" | "low" | "auto";
  decoding?: "async" | "auto" | "sync";
  style?: CSSProperties;
};

function variantPath(src: string, width: number) {
  return src.replace(/\.webp$/i, `-w${width}.webp`);
}

export function ResponsiveImg({
  src,
  alt,
  width,
  height,
  widths = [360],
  sizes = "(max-width: 720px) 92vw, 360px",
  className,
  loading = "lazy",
  fetchPriority,
  decoding = "async",
  style,
}: ResponsiveImgProps) {
  const ordered = [...widths].sort((a, b) => a - b);
  const srcSet = ordered
    .map((w) => `${variantPath(src, w)} ${w}w`)
    .join(", ");
  // Prefer the largest candidate as src so oversized/portrait slots stay sharp
  // when sizes is approximate or DPR selection undershoots.
  const primary = ordered[ordered.length - 1] ?? width;

  return (
    <img
      className={className}
      src={variantPath(src, primary)}
      srcSet={srcSet}
      sizes={sizes}
      alt={alt}
      width={width}
      height={height}
      loading={loading}
      fetchPriority={fetchPriority}
      decoding={decoding}
      style={style}
    />
  );
}
