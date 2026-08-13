import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  output: "standalone",
  transpilePackages: ["@amelienergie/google-reviews"],
  turbopack: {
    root: path.join(__dirname, "../.."),
  },
};

export default nextConfig;
