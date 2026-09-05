import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { shouldApplyHtmlCacheHeaders } from '@/lib/static-asset-path'

const WWW_HOST = 'www.callpreferredplumbing.com'
const APEX_HOST = 'callpreferredplumbing.com'

function isPreviewHost(host: string): boolean {
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  return hostname.startsWith('preview.') || hostname.endsWith('.workers.dev')
}

function withHtmlCacheHeaders(response: NextResponse): NextResponse {
  // OpenNext defaults HTML to s-maxage=31536000. That freezes old pages at the
  // CDN (breaks GA install checks + deploy visibility). Match a1: revalidate HTML.
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  return response
}

function isHttpRequest(request: NextRequest): boolean {
  // Same signals as kinexisdigital.com — Cloudflare sets x-forwarded-proto / cf-visitor.
  const forwardedProto = request.headers.get('x-forwarded-proto')?.split(',')[0]?.trim()
  if (forwardedProto === 'http') return true
  if (request.nextUrl.protocol === 'http:') return true
  try {
    const cf = request.headers.get('cf-visitor')
    if (cf) return JSON.parse(cf).scheme === 'http'
  } catch {
    /* ignore */
  }
  return false
}

function buildCanonicalRedirect(request: NextRequest): NextResponse {
  const url = request.nextUrl.clone()
  url.protocol = 'https:'
  url.host = WWW_HOST
  url.port = ''
  return NextResponse.redirect(url, 301)
}

export function middleware(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1'

  // Safety net: one 301 to https://www when apex/HTTP reaches the Worker.
  // Primary path is Cloudflare Single Redirect + Always Use HTTPS OFF
  // (see redirects/README.md).
  if (!isLocalHost && !isPreviewHost(host)) {
    const needsWww = hostname === APEX_HOST
    const needsHttps = isHttpRequest(request)
    if (needsWww || needsHttps) {
      return buildCanonicalRedirect(request)
    }
  }

  if (!isPreviewHost(host)) {
    if (!shouldApplyHtmlCacheHeaders(request.nextUrl.pathname)) {
      return NextResponse.next()
    }
    return withHtmlCacheHeaders(NextResponse.next())
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
    return new NextResponse(
      '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"></urlset>\n',
      {
        headers: {
          'Content-Type': 'application/xml; charset=utf-8',
          'X-Robots-Tag': 'noindex, nofollow',
          'Cache-Control': 'no-store',
        },
      },
    )
  }

  const response = withHtmlCacheHeaders(NextResponse.next())
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|videos/).*)'],
}
