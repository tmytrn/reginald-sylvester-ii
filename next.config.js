/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

// const STUDIO_REWRITE = {
//   source: "/admin/:path*",
//   destination: "/admin/desk",
// };

module.exports = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdn.sanity.io",
        port: "",
      },
    ],
  },
  // rewrites: () => [STUDIO_REWRITE],
};
