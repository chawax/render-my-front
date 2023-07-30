/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  redirects: async () => [
    {
      source: "/",
      destination: "/movies",
      permanent: false,
    },
  ],
};

module.exports = nextConfig;
