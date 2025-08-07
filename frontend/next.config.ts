import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: 'export',
  // 确保环境变量在构建时可用
  env: {
    NEXT_PUBLIC_API_URL: process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8000',
  },
  // 禁用图片优化，因为静态导出不支持
  images: {
    unoptimized: true,
  },
  // 禁用服务端功能
  trailingSlash: true,
};

export default nextConfig;
