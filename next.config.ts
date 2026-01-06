import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  trailingSlash: true, // <--- THIS FIXES THE 403 ERROR
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
