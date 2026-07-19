import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

function isPreviewHost(host: string): boolean {
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  return (
    hostname === 'preview.callpreferredplumbing.com' ||
    hostname.startsWith('preview.') ||
    hostname.endsWith('.workers.dev')
  )
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  if (!isPreviewHost(host)) {
    return NextResponse.next()
  }

  // Preview / staging hosts must not be indexed.
  if (request.nextUrl.pathname === '/robots.txt') {
    return new NextResponse('User-agent: *\nDisallow: /\n', {
      headers: {
        'Content-Type': 'text/plain; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store',
      },
    })
  }

  if (
    request.nextUrl.pathname === '/sitemap.xml' ||
    request.nextUrl.pathname.startsWith('/sitemap-')
  ) {
    return new NextResponse('<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n', {
      headers: {
        'Content-Type': 'application/xml; charset=utf-8',
        'X-Robots-Tag': 'noindex, nofollow',
        'Cache-Control': 'no-store',
      },
    })
  }

  const response = NextResponse.next()
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico).*)'],
}
