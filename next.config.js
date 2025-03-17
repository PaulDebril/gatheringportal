// next.config.js
module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cards.scryfall.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ztdkrhwqzsldqalpebbl.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const withPWA = require('next-pwa')({
  register: true,
  skipWaiting: true,
  dest: 'public',
  scope: '/app',
})

module.exports = withPWA({
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cards.scryfall.io',
        port: '',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'ztdkrhwqzsldqalpebbl.supabase.co',
        port: '',
        pathname: '/**',
      },
    ],
  },
  experimental: {
    turbo: {
      resolveAlias: {
        underscore: 'lodash',
      },
    },
  },
})
