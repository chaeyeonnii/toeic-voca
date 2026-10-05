import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return {
      beforeFiles: [{ source: "/", destination: "/toeic-vocab.html" }],
    };
  },
};

export default nextConfig;
