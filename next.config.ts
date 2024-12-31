import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    domains: ["https://jwelxlwwuqynsatfakef.supabase.co"],
    formats: ["image/avif", "image/webp"],
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=31536000; includeSubDomains",
          },
        ],
      },
    ]
  },
}

export default nextConfig