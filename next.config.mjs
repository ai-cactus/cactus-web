import { setupDevPlatform } from '@cloudflare/next-on-pages/next-dev';
// import { withAxiom } from 'next-axiom';
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
    NEXT_PUBLIC_FIREBASE_API_KEY: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
    NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    NEXT_PUBLIC_FIREBASE_PROJECT_ID: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
    NEXT_PUBLIC_FIREBASE_APP_ID: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
    NEXT_PUBLIC_BASE_URL: process.env.NEXT_PUBLIC_BASE_URL
  },
  swcMinify: true,
  // webpack: (config, { isServer }) => {
  //   // Optimize CKEditor bundle
  //   config.module.rules.push({
  //     test: /ckeditor5-[^/\\]+[/\\]theme[/\\]icons[/\\][^/\\]+\.svg$/,
  //     use: ['raw-loader'],
  //   });

  //   // Exclude large development-only packages from the server bundle
  //   if (isServer) {
  //     config.externals = [...(config.externals || []), {
  //       'react-dom': 'react-dom',
  //       '@tanstack/react-query-devtools': '@tanstack/react-query-devtools',
  //     }];
  //   }

  //   return config;
  // },
  // // Add modularizeImports to reduce bundle size
  // modularizeImports: {
  //   'react-icons': {
  //     transform: 'react-icons/{{member}}',
  //   },
  // },
};

if (process.env.NODE_ENV === 'development') {
  await setupDevPlatform();
}

// Apply bundle analyzer wrapper
export default withBundleAnalyzer(nextConfig);