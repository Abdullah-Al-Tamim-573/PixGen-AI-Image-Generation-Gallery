/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      
      },
    ],
  },
  reactCompiler: true,
};

export default nextConfig;
