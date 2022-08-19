/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = {
  i18n: {
    locales: ['en', 'es', 'pseudo'],
    defaultLocale: 'en'
  },
  nextConfig
}