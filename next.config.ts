import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  basePath: '/Next15-Dashboard',
  experimental: {
    optimizeCss: true,
    scrollRestoration: true,
    optimisticClientCache: true,
  },
  images: {
    formats: ["image/avif", "image/webp"],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    minimumCacheTTL: 60,
    unoptimized: true,
  },
  compress: true,
  reactStrictMode: true,
  
};

export default nextConfig;
