import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "framerusercontent.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "gacemaslagi.site",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "media.licdn.com",
        port: "",
        pathname: "/dms/image/**",
      },
      {
        protocol: "https",
        hostname: "media-exp1.licdn.com",
        port: "",
        pathname: "/dms/image/C560BAQGGO60lRZpEtpQ/company-logo_100_100/company-logo_100_100/**",
      }
    ],
  },
}

export default nextConfig
