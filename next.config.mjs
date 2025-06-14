import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
import bundleAnalyzer from '@next/bundle-analyzer';

const withBundleAnalyzer = bundleAnalyzer({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  env: {
    // Firebase configuration with fallbacks for development
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
  // Removed deprecated swcMinify option
  // Removed deprecated experimental.missingSuspenseWithCSRBailout option
};

// Enhanced Cloudflare initialization
let cloudflareInitialized = false;

if (process.env.NODE_ENV === 'development') {
  try {
    if (process.env.USE_CLOUDFLARE_DEV !== 'false') {
      await setupDevPlatform();
      cloudflareInitialized = true;
      console.log('Cloudflare dev platform initialized successfully');
    }
  } catch (error) {
    console.warn('Cloudflare dev platform failed to initialize:', error.message);
    // Add any fallback behavior here if needed
  }
}

export default withBundleAnalyzer(nextConfig);















// import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
// import bundleAnalyzer from '@next/bundle-analyzer';

// const withBundleAnalyzer = bundleAnalyzer({
//   enabled: process.env.ANALYZE === 'true',
// });

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   images: {
//     unoptimized: true,
//   },
//   compiler: {
//     removeConsole: process.env.NODE_ENV === 'production',
//   },
//   env: {
//     // Firebase configuration with fallbacks for development
//     NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//     NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//     NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//     NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//     NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//     NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
//     NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
//   },
//   swcMinify: true,
//   experimental: {
//     missingSuspenseWithCSRBailout: false,
//   },
// };

// // Enhanced Cloudflare initialization
// let cloudflareInitialized = false;

// if (process.env.NODE_ENV === 'development') {
//   try {
//     if (process.env.USE_CLOUDFLARE_DEV !== 'false') {
//       await setupDevPlatform();
//       cloudflareInitialized = true;
//       console.log('Cloudflare dev platform initialized successfully');
//     }
//   } catch (error) {
//     console.warn('Cloudflare dev platform failed to initialize:', error.message);
//     // Add any fallback behavior here if needed
//   }
// }

// export default withBundleAnalyzer(nextConfig);