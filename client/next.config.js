/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["res.cloudinary.com"]
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL,
    NEXT_AUTH_SECRET: process.env.NEXT_AUTH_SECRET
  }
};

module.exports = nextConfig;
