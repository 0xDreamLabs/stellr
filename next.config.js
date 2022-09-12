/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental:{
    serverComponents: true,
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
}

module.exports = nextConfig
