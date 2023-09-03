/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["image.tmdb.org"],
    unoptimized: true,
  },
  redirects: async () => [
    {
      source: "/",
      destination: "/movies",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
