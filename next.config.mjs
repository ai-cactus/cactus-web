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