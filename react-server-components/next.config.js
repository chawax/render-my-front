/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["image.tmdb.org"],
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
