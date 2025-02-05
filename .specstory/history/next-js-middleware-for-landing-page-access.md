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

I'll help you set up your Next.js project for deployment on Cloudflare Pages. Here are the steps:

1. First, we need to modify your Next.js configuration to make it compatible with Cloudflare Pages. Create or update your `next.config.js`:

```javascript:next.config.js
/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable Cloudflare specific features
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  }
}

module.exports = nextConfig
```

2. Create a `.gitignore` file if you don't have one already:

```text:.gitignore
# dependencies
/node_modules
/.pnp
.pnp.js

# testing
/coverage

# next.js
/.next/
/out/

# production
/build

# misc
.DS_Store
*.pem

# debug
npm-debug.log*
yarn-debug.log*
yarn-error.log*

# local env files
.env*.local

# vercel
.vercel

# typescript
*.tsbuildinfo
next-env.d.ts
```

3. Then follow these deployment steps:

1. Push your code to a GitHub repository
2. Go to Cloudflare Dashboard (https://dash.cloudflare.com)
3. Navigate to "Pages"
4. Click "Create a project"
5. Select "Connect to Git"
6. Select your GitHub repository
7. Configure your build settings:

```plaintext
Build command: npm run build
Build output directory: .next
Root directory: /
```

8. Add these Environment Variables in the Cloudflare Pages settings:

```plaintext
NODE_VERSION: 18
```

4. Create or update your `package.json` to include these scripts:

```json:package.json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

After setting this up:

1. Commit all your changes
2. Push to GitHub
3. Cloudflare Pages will automatically detect the changes and start the deployment

Important Notes:

1. Make sure your project is using Next.js 13+ for best compatibility with Cloudflare Pages
2. If you're using any API routes or Server Components, you'll need to use Cloudflare Pages with Functions enabled
3. Some Next.js features might need additional configuration to work with Cloudflare Pages:
   - Image Optimization needs to be disabled (which we did in the config)
   - Middleware (which you're using) should work fine
   - Dynamic API routes work with Cloudflare Functions

To check your deployment status, you can go to the Cloudflare Pages dashboard and monitor the build process. Once deployed, Cloudflare will provide you with a `.pages.dev` domain where your site will be accessible.

If you need to add a custom domain later:
1. Go to your Pages project
2. Click on "Custom domains"
3. Add your domain and follow the DNS configuration instructions

Remember to check the Cloudflare Pages logs if you encounter any deployment issues, as they provide detailed information about any build or runtime errors.

---

_**User**_

following this documentation, setup this codebase to be deployed to cloudflare pages. The documentation: @https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/ 

---

_**Assistant**_

I'll help you set up your Next.js project for Cloudflare Pages with SSR support. Based on the documentation, we need to make several changes:

1. First, let's install the required dependency:

```typescript:package.json
{
  // ... existing code ...
  "devDependencies": {
    // ... existing devDependencies ...
    "@cloudflare/next-on-pages": "latest",
    "wrangler": "latest"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "pages:build": "npx @cloudflare/next-on-pages",
    "preview": "npm run pages:build && wrangler pages dev",
    "deploy": "npm run pages:build && wrangler pages deploy"
  }
}
```

2. Create a new Wrangler configuration file:

```toml:wrangler.toml
name = "ai-cactus"
compatibility_date = "2024-01-29"
compatibility_flags = ["nodejs_compat"]
pages_build_output_dir = ".vercel/output/static"
```

3. Update your Next.js configuration:

```javascript:next.config.js
import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';

/** @type {import('next').NextConfig} */
const nextConfig = {
  // Remove the standalone output since we're using Pages Functions
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  }
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

export default nextConfig;
```

4. Optional but recommended - Add ESLint plugin for Cloudflare Pages:

```json:.eslintrc.json
{
  "extends": [
    "next/core-web-vitals",
    "plugin:eslint-plugin-next-on-pages/recommended"
  ],
  "plugins": [
    "eslint-plugin-next-on-pages"
  ]
}
```

5. Since you're using middleware, make sure it uses the Edge Runtime by adding this line to your middleware.ts:

```typescript:middleware.ts
export const runtime = "edge";

// ... rest of your existing middleware code ...
```

To deploy:

1. First, install the new dependencies:
```bash
npm install --save-dev @cloudflare/next-on-pages wrangler eslint-plugin-next-on-pages
```

2. Then you can either:

A. Deploy via CLI:
```bash
npm run deploy
```

OR

B. Deploy via Git:
1. Push your code to GitHub
2. Go to Cloudflare Dashboard → Pages
3. Create new project → Connect to Git
4. Select your repository
5. Configure build settings:
   - Framework preset: Next.js
   - Build command: npm run pages:build
   - Build output directory: .vercel/output/static
   - Environment variables:
     - NODE_VERSION: 18

Important Notes:
1. Make sure all your server-side components and API routes use the Edge Runtime
2. Your project will need to be compatible with the Edge Runtime since Cloudflare Pages doesn't support the Node.js runtime in the same way as traditional hosting
3. Some Node.js-specific APIs might not be available, so you may need to adjust your code accordingly
4. The `mongodb` connection might need to be adjusted to work with Cloudflare Pages - you might want to use Cloudflare's D1 or KV for database operations instead

[Source: Cloudflare Pages Next.js Documentation](https://developers.cloudflare.com/pages/framework-guides/nextjs/ssr/get-started/)

---



---

