import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',

  /* config options here */
  reactCompiler: true,
  basePath: '/abc',
};

export default nextConfig;
