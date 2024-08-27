/** @type {import('next').NextConfig} */
import createNextIntlPlugin from 'next-intl/plugin'
import withPWAInit from 'next-pwa'

const withPWA = withPWAInit({
  dest: 'public',
  disable: process.env.NODE_ENV === 'development',
  register: true,
  skipWaiting: true,
})

const withNextIntl = createNextIntlPlugin()

const nextConfig = {
  reactStrictMode: false,
}

export default (withNextIntl(withPWA(nextConfig)),
{
  silent: true,
  org: 'sentry',
  project: 'tripseg-interface',
  url: 'https://sentry.esollabs.com',
},
{
  widenClientFileUpload: true,
  transpileClientSDK: true,
  tunnelRoute: '/monitoring',
  hideSourceMaps: true,
  disableLogger: true,
  automaticVercelMonitors: true,
})
