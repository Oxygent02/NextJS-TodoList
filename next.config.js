/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    serverActions: true,
    staticPageGenerationTimeout: 60,
  },
};

module.exports = nextConfig;
