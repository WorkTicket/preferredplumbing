import Link from 'next/link'

export default function FooterSignature() {
  return (
    <span>
      Built by{' '}
      <Link
        href="https://www.kinexisdigital.com/en"
        target="_blank"
        rel="noopener noreferrer"
        className="font-medium text-gray-400 underline decoration-gray-600 underline-offset-2 transition-colors hover:text-gray-200 hover:decoration-gray-200"
      >
        Kinexis Digital
      </Link>
    </span>
  )
}
