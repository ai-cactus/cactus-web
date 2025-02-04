/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  // Enable Cloudflare specific features
  images: {
    unoptimized: true, // Required for Cloudflare Pages
  }
}

module.exports = nextConfig 