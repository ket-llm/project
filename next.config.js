/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  webpack: (config, { isServer }) => {
    // Add watchpack resolution
    config.resolve.alias.watchpack = require.resolve('watchpack');
    return config;
  },
};

module.exports = nextConfig;
