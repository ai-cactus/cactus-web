## SpecStory

## Next.js Middleware for Landing Page Access (1/19/2025, 4:36:50 PM)

_**User**_

create a middleware that prevents the user from going to any other page aside the first root page. This is a @NextJS project. We are still working on it so for now only the landing page should be visible

---

_**Assistant**_

I'll help you create a middleware that restricts access to only the root page (`/`) and redirects all other routes back to the root page.

Here's how to implement this:

```typescript:middleware.ts
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

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
```

This middleware will:

1. Allow access to:
   - The root path (`/`)
   - Next.js system paths (`/_next/*`)
   - API routes (`/api/*`)
   - Static files (images, CSS, etc.)

2. Redirect all other paths back to the homepage (`/`)

The `matcher` configuration ensures that the middleware doesn't run on static files and API routes, which improves performance.

Place this file in your project root (at the same level as your `app` or `pages` directory). If you're using a `src` directory, place it inside `src` at the root level.

This will effectively lock down your site to only show the landing page while you're working on the rest of the application.

---

_**User**_

I want to deploy this project to cloudflare pages. How do I set it up?

---

_**Assistant**_



---



---

