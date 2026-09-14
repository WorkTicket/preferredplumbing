/** Shared `sizes` hints: tuned for max-w-7xl layouts and 2x desktop displays. */
export const IMAGE_SIZES = {
  /** Full-bleed heroes: mobile uses viewport width; desktop caps at 1920 so 2560 never wins LCP. */
  hero: '(max-width: 768px) 100vw, 1920px',
  /** Two-column grids inside section-inner (~640px max display width). */
  halfCol: '(max-width: 1024px) 100vw, (max-width: 1280px) 50vw, 640px',
  /** Three-column service cards (~400px max display width). */
  thirdCol: '(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 400px',
  /** Homepage work-gallery thumbs: 2-col until lg, then 3-col. */
  galleryPreview: '(max-width: 1023px) 50vw, 400px',
  /** Featured compare slider: full column on small screens, ~720px on desktop. */
  galleryCompare: '(max-width: 1023px) calc(100vw - 2rem), 720px',
  /** Gallery / portfolio grids (~640px display width in 2-col, ~400px in 3-col). */
  galleryGrid: '(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 640px',
  fullWidth: '100vw',
} as const
