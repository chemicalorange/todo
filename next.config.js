/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['p.ts', 'p.tsx'],
  swcMinify: true,
  typescript: {
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
