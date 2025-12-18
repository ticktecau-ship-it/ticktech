/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['tictacdigital.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Optimize for production
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  // Webpack configuration
  webpack: (config, { dev, isServer }) => {
    // Disable webpack cache serialization warnings in development
    if (dev) {
      config.infrastructureLogging = {
        level: 'error',
      };
    }

    return config;
  },
}

module.exports = nextConfig
