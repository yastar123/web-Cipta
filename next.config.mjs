/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    unoptimized: true,
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
