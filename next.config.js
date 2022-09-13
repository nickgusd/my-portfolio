/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    // domains: ["react.semantic-ui.com", "github.com"],
    unoptimized: true,
  },
}

module.exports = nextConfig
