import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gigaofficial.netlify.app",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
