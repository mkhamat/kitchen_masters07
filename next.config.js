/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  async rewrites() {
    return [
      {
        source: "/:path*",
        destination: "http://0.0.0.0:8055/:path*", // Proxy to Backend
      },
    ];
  },
};

module.exports = nextConfig;
