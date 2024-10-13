/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "offbeatjapan.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
