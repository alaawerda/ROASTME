/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  // Image optimization
  images: {
    domains: [
      'roastme.chat',
      'localhost',
      'res.cloudinary.com', // Add if using Cloudinary
      'images.unsplash.com' // Add if using Unsplash
    ],
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [
      16, 32, 48, 64, 96, 128, 256, 384, 512, 640, 750, 828, 1080, 1200, 1920, 2048, 3840
    ],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 365, // 1 year
    dangerouslyAllowSVG: true,
  },

  // Environment variables
  env: {
    SITE_URL: process.env.SITE_URL || 'https://roastme.chat',
    NEXT_PUBLIC_GA_ID: process.env.NEXT_PUBLIC_GA_ID || 'G-V3NEK593B5', // Replace with your GA4 Measurement ID
  },

  // Webpack configuration
  webpack: (config, { isServer, dev }) => {
    // Custom webpack configuration can be added here
    return config;
  },

  // Security headers are handled in middleware.ts to avoid conflicts

  async redirects() {
    return [
      {
        source: '/home',
        destination: '/',
        permanent: true
      },
      {
        source: '/index',
        destination: '/',
        permanent: true
      },
      {
        source: '/chat',
        destination: '/',
        permanent: true
      },
      // Redirect /en routes to main domain (SEO-friendly 301 redirects)
      {
        source: '/en',
        destination: '/',
        permanent: true
      },
      {
        source: '/en/roast',
        destination: '/roast',
        permanent: true
      },
      {
        source: '/en/roast-me',
        destination: '/roast-me',
        permanent: true
      }
    ]
  },

  compress: true,
  productionBrowserSourceMaps: false,
  typescript: {
    ignoreBuildErrors: false,
  },
  eslint: {
    ignoreDuringBuilds: false,
  },
  trailingSlash: false,
  poweredByHeader: false
}

module.exports = nextConfig
