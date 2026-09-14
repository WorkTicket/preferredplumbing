type FacebookIconProps = {
  size?: number
  className?: string
}

/** Official Facebook mark — lucide-react v1 removed brand icons. */
export default function FacebookIcon({ size = 15, className }: FacebookIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M14.5 8.5h2.75V5.2c-.474-.08-1.21-.156-2.17-.156-2.15 0-3.62 1.31-3.62 3.72V11H9v3.5h2.46V22h3.5v-7.5h2.94l.46-3.5h-3.4V8.98c0-1.01.28-1.48 1.54-1.48Z" />
    </svg>
  )
}
