/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/directus/:path*",
        destination: "http://kitchen-masters07.com:8055/:path*", // Proxy to Backend
      },
      {
        source: "/assets/:path*",
        destination: "http://kitchen-masters07.com:8055/assets/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
