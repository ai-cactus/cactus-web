import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export const runtime = "experimental-edge";

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Allow access to the root path '/' and any static assets
  if (
    path === '/' || 
    path.startsWith('/_next') || 
    path.startsWith('/api') ||
    path.includes('.')  // This covers static files like images, css, etc.
  ) {
    return NextResponse.next()
  }

  // Redirect all other routes to the homepage
  return NextResponse.redirect(new URL('/', request.url))
}

// Configure the paths that middleware will run on
export const config = {
  matcher: '/((?!api|_next/static|_next/image|favicon.ico).*)',
} 