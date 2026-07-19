/** @type {import('next').NextConfig} */
const nextConfig = {

  images: {
    formats: ["image/webp"],
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '5000',
      },
      {
        protocol: 'http',
        hostname: '127.0.0.1',
        port: '5000',
      },
    ],
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
