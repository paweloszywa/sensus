/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  basePath: '/sensus',
  assetPrefix: '/sensus',
  images: {
    unoptimized: true
  },
  experimental: {
    workerThreads: false,
    cpus: 1
  }
}

module.exports = nextConfig
