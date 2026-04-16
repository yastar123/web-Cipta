/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  allowedDevOrigins: [
    "*.replit.dev",
    "*.riker.replit.dev",
    "*.kirk.replit.dev",
    "*.repl.co",
    "9ee35c05-aafa-4528-a37f-031aae7dd71c-00-3kvv0a9ff384a.kirk.replit.dev",
  ],
}

export default nextConfig
