/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      // One canonical host, so search engines do not index two copies of the site.
      {
        source: '/:path*',
        has: [{ type: 'host', value: 'www.telimissionhills.com' }],
        destination: 'https://telimissionhills.com/:path*',
        permanent: true,
      },
      // Old template URLs
      { source: '/service', destination: '/practice-areas', permanent: true },
      { source: '/home', destination: '/', permanent: true },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'X-Frame-Options', value: 'SAMEORIGIN' },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
