import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = 'https://webcipta.my.id'
  const lastModified = new Date()
  return [
    // Core pages
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // Service pages — direct keyword targeting
    { url: `${SITE_URL}/jasa-pembuatan-website`, lastModified, changeFrequency: 'monthly', priority: 0.95 },
    { url: `${SITE_URL}/jasa-pembuatan-toko-online`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/jasa-pembuatan-aplikasi-mobile`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    // Location pages — local SEO
    { url: `${SITE_URL}/lampung`, lastModified, changeFrequency: 'monthly', priority: 0.9 },
    { url: `${SITE_URL}/bandar-lampung`, lastModified, changeFrequency: 'monthly', priority: 0.85 },
  ]
}
