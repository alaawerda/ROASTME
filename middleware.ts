import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Middleware now primarily handles other routing logic
  // Redirects for /en routes are handled in next.config.js for better SEO
  return NextResponse.next()
}

// Only run on relevant paths
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}


