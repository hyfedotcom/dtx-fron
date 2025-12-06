import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: "http", hostname: "localhost", port: "1337" },
      { protocol: "https", hostname: "*.strapiapp.com" },
    ],
    minimumCacheTTL: 31536000,
    formats: ["image/webp", "image/avif"],
  },

  experimental: {
    optimizePackageImports: ["framer-motion"],
  },

  async headers() {
    const isProd = process.env.NODE_ENV === "production";

    return [
      {
        source: "/:path*",
        headers: isProd
          ? [
              {
                key: "Cache-Control",
                value: "public, max-age=31536000, immutable",
              },
            ]
          : [
              {
                key: "Cache-Control",
                value: "no-store",
              },
            ],
      },
    ];
  },
};

export default nextConfig;
