import MillionLint from "@million/lint";

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

export default MillionLint.next({ rsc: true })(nextConfig);
