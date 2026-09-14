type BrandLogoProps = {
  className?: string
  size?: number
}

/** Header/footer mark at display size (~36–44px). Avoids the 1536px source file. */
export default function BrandLogo({ className, size = 44 }: BrandLogoProps) {
  return (
    <picture>
      <source
        type="image/avif"
        srcSet="/images/generated/preferred-logo-480.avif"
      />
      <source
        type="image/webp"
        srcSet="/images/generated/preferred-logo-480.webp"
      />
      <img
        src="/images/generated/preferred-logo-480.webp"
        alt="Preferred Plumbing Solutions logo"
        width={size}
        height={size}
        decoding="async"
        fetchPriority="low"
        className={className}
      />
    </picture>
  )
}
