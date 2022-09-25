/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['getheavy.com', 'i.scdn.co', 'lh3.googleusercontent.com'],
  },
}

module.exports = nextConfig
