/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "dev-to-uploads.s3.amazonaws.com",
        port: "",
        pathname: "/uploads/articles/**",
      },
    ],
  },
};

module.exports = nextConfig;
