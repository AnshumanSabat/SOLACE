import type { NextConfig } from 'next';
import path from 'path';

const nextConfig: NextConfig = {
  images: {
    domains: [], // Allow images from any domain
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // Allow images from any hostname
        port: '',
        pathname: '/**', // Allow any path
      },
    ],
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  webpack: (config) => {
    // TEMPORARY: Alias Clerk to mock implementation so frontend runs smoothly without backend auth crashes
    config.resolve.alias = {
      ...config.resolve.alias,
      '@clerk/nextjs/server': path.resolve(__dirname, 'src/lib/mock-clerk-server.ts'),
      '@clerk/nextjs': path.resolve(__dirname, 'src/lib/mock-clerk.tsx'),
    };
    return config;
  },
};

export default nextConfig;
