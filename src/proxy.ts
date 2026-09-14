import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import {
  canonicalLinkHeaderValue,
  shouldSetCanonicalLinkHeader,
} from '@/lib/canonical'
import { canonicalDestinationPath } from '@/lib/legacy-redirects'
import { shouldApplyHtmlCacheHeaders } from '@/lib/static-asset-path'

const WWW_HOST = 'www.callpreferredplumbing.com'
const APEX_HOST = 'callpreferredplumbing.com'

function isPreviewHost(host: string): boolean {
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  return hostname.startsWith('preview.') || hostname.endsWith('.workers.dev')
}

function withHtmlCacheHeaders(response: NextResponse, pathname: string): NextResponse {
  // OpenNext defaults HTML to s-maxage=31536000. That freezes old pages at the
  // CDN (breaks GA install checks + deploy visibility). Match a1: revalidate HTML.
  response.headers.set('Cache-Control', 'public, max-age=0, must-revalidate')
  if (shouldSetCanonicalLinkHeader(pathname)) {
    response.headers.set('Link', canonicalLinkHeaderValue(pathname))
  }
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

function redirectToPath(request: NextRequest, pathname: string, toWww: boolean): NextResponse {
  const origin = toWww ? `https://${WWW_HOST}` : request.nextUrl.origin
  const target = new URL(pathname + request.nextUrl.search, origin)
  return NextResponse.redirect(target, 301)
}

export function proxy(request: NextRequest) {
  const host = request.headers.get('host') ?? ''
  const hostname = host.split(':')[0]?.toLowerCase() ?? ''
  const isLocalHost = hostname === 'localhost' || hostname === '127.0.0.1'
  const destPath = canonicalDestinationPath(request.nextUrl.pathname)

  // One 301: apex/HTTP + trailing slash + legacy Duda path.
  if (!isLocalHost && !isPreviewHost(host)) {
    const needsWww = hostname === APEX_HOST
    const needsHttps = isHttpRequest(request)
    if (needsWww || needsHttps || destPath) {
      return redirectToPath(request, destPath ?? request.nextUrl.pathname, true)
    }
  } else if (destPath) {
    return redirectToPath(request, destPath, false)
  }

  if (!isPreviewHost(host)) {
    if (!shouldApplyHtmlCacheHeaders(request.nextUrl.pathname)) {
      return NextResponse.next()
    }
    return withHtmlCacheHeaders(NextResponse.next(), request.nextUrl.pathname)
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

  const response = withHtmlCacheHeaders(NextResponse.next(), request.nextUrl.pathname)
  response.headers.set('X-Robots-Tag', 'noindex, nofollow')
  response.headers.delete('Link')
  return response
}

export const config = {
  matcher: ['/((?!_next/static|_next/image|favicon.ico|images/|videos/).*)'],
}
