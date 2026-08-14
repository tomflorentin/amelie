import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  experimental: {
    staticGenerationMaxConcurrency: 1,
  },
  transpilePackages: ["@amelienergie/google-reviews"],
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
