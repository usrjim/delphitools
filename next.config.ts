import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  basePath: "/tools/delphitools",
  output: "export",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
