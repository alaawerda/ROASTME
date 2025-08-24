import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
import { getCSPConfig } from './app/lib/csp-config'

export function middleware(request: NextRequest) {
  const { pathname, search, origin } = request.nextUrl
  
  // Handle www redirect
  if (request.headers.get('host')?.startsWith('www.')) {
    const url = new URL(request.url)
    url.hostname = url.hostname.replace('www.', '')
    return NextResponse.redirect(url, 308) // Permanent redirect
  }

  // Handle trailing slashes (remove them)
  if (pathname !== '/' && pathname.endsWith('/')) {
    const url = new URL(request.url)
    url.pathname = pathname.slice(0, -1)
    return NextResponse.redirect(url, 308)
  }

  // Security headers
  const isDev = process.env.NODE_ENV === 'development'
  const csp = getCSPConfig(isDev)
  

  const response = NextResponse.next()
  
  // Security headers
  response.headers.set('X-Content-Type-Options', 'nosniff')
  response.headers.set('X-Frame-Options', 'DENY')
  response.headers.set('X-XSS-Protection', '1; mode=block')
  response.headers.set('Referrer-Policy', 'strict-origin-when-cross-origin')
  response.headers.set('Content-Security-Policy', csp)
  response.headers.set('Permissions-Policy', 'camera=(), microphone=(), geolocation=()')
  response.headers.set('Strict-Transport-Security', 'max-age=63072000; includeSubDomains; preload')
  
  // Cache control for static assets
  if (pathname.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    response.headers.set('Cache-Control', 'public, max-age=31536000, immutable')
  } else {
    response.headers.set('Cache-Control', 'public, s-maxage=3600, stale-while-revalidate=86400')
  }

  return response
}

// Only run on relevant paths
export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}
