/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "www.japan-guide.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
