/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  // async rewrites() {
  //   return [
  //     {
  //       destination: `${apiURL}/:path*`,
  //       source: "/:path*",
  //     },
  //
  // },
};

module.exports = nextConfig;
