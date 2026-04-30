import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'standalone',
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
  turbopack: {
    rules: {
      '*.svg': {
        loaders: ['@svgr/webpack'],
        as: '*.js',
      },
    },
  },
};

export default nextConfig;
