import Link from 'next/link'

export default function FooterSignature() {
  return (
    <span>
      Built by{' '}
      <Link
        href="https://www.kinexisdigital.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-300 underline decoration-gray-500 underline-offset-2 transition-colors hover:text-white hover:decoration-white"
      >
        Kinexis Digital
      </Link>
    </span>
  )
}
