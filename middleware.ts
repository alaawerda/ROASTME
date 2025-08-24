import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Version temporaire désactivée pour debug - JUSTE PASSER TOUTES LES REQUÊTES
  console.log('🔍 Middleware called for:', request.nextUrl.pathname)
  return NextResponse.next()
}

// Only run on relevant paths
export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico|robots.txt|sitemap.xml).*)',
  ],
}


