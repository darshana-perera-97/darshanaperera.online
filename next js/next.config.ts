import type { NextConfig } from "next";

// For cPanel hosting, set BASE_PATH to empty string or remove it
// For GitHub Pages, set BASE_PATH="/Resume-Nextjs"
const basePath = process.env.BASE_PATH || "";

const nextConfig: NextConfig = {
  // Only use static export for production builds, not for dev server
  ...(process.env.NODE_ENV === "production" && { output: "export" }),
  basePath,
  assetPrefix: basePath,
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
