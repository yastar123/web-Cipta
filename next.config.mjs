/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    formats: ["image/webp"],
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.riker.replit.dev",
    "*.kirk.replit.dev",
    "*.pike.replit.dev",
    "*.repl.co",
    ...(process.env.REPLIT_DEV_DOMAIN ? [process.env.REPLIT_DEV_DOMAIN] : []),
  ],
}

export default nextConfig
