/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'dodo.ac',
      },
    ],
  },
};

export default nextConfig;
