import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Enable static export capability alongside SSR
  images: {
    formats: ["image/webp"],
    domains: [],
  },
  // Enforce trailing slashes for consistent canonical URLs
  trailingSlash: true,
  // Security and performance headers
  async headers() {
    return [
      {
        source: "/(.*)",
        headers: [
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-XSS-Protection",
            value: "1; mode=block",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  // 301 redirects for SEO
  async redirects() {
    return [
      {
        source: "/trends",
        destination: "/korea-trends",
        permanent: true,
      },
      {
        source: "/beauty",
        destination: "/korea-trends/beauty",
        permanent: true,
      },
      {
        source: "/fashion",
        destination: "/korea-trends/fashion",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
