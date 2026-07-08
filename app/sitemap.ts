import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = 'https://webcipta.my.id'
  const lastModified = new Date()
  return [
    // Core pages
    { url: SITE_URL, lastModified, changeFrequency: 'weekly', priority: 1 },
    { url: `${SITE_URL}/portfolio`, lastModified, changeFrequency: 'weekly', priority: 0.9 },
    // Service pages — direct keyword targeting (highest priority after homepage)
    { url: `${SITE_URL}/jasa-pembuatan-website`, lastModified, changeFrequency: 'monthly', priority: 0.97 },
    { url: `${SITE_URL}/jasa-pembuatan-toko-online`, lastModified, changeFrequency: 'monthly', priority: 0.93 },
    { url: `${SITE_URL}/jasa-pembuatan-aplikasi-mobile`, lastModified, changeFrequency: 'monthly', priority: 0.93 },
    { url: `${SITE_URL}/jasa-pembuatan-bot`, lastModified, changeFrequency: 'monthly', priority: 0.92 },
    { url: `${SITE_URL}/jasa-pembuatan-company-profile`, lastModified, changeFrequency: 'monthly', priority: 0.92 },
    { url: `${SITE_URL}/jasa-landing-page`, lastModified, changeFrequency: 'monthly', priority: 0.91 },
    { url: `${SITE_URL}/jasa-desain-ui-ux`, lastModified, changeFrequency: 'monthly', priority: 0.90 },
    // Location pages — local & national SEO
    { url: `${SITE_URL}/lampung`, lastModified, changeFrequency: 'monthly', priority: 0.90 },
    { url: `${SITE_URL}/bandar-lampung`, lastModified, changeFrequency: 'monthly', priority: 0.88 },
    { url: `${SITE_URL}/jakarta`, lastModified, changeFrequency: 'monthly', priority: 0.87 },
    // Blog — informational keyword targeting
    { url: `${SITE_URL}/blog`, lastModified, changeFrequency: 'weekly', priority: 0.80 },
    { url: `${SITE_URL}/blog/harga-jasa-pembuatan-website-2025`, lastModified, changeFrequency: 'monthly', priority: 0.78 },
    { url: `${SITE_URL}/blog/cara-memilih-jasa-pembuatan-website-terpercaya`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE_URL}/blog/jasa-pembuatan-bot-telegram-whatsapp-untuk-bisnis`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE_URL}/blog/cara-meningkatkan-seo-website-indonesia`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
    { url: `${SITE_URL}/blog/website-company-profile-untuk-bisnis`, lastModified, changeFrequency: 'monthly', priority: 0.75 },
  ]
}
