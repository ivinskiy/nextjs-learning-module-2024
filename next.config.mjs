/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "photos.api.prd.aws.netlight.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
