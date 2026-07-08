import type { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const SITE_URL = 'https://webcipta.my.id'
  const lastModified = new Date()
  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${SITE_URL}/portfolio`,
      lastModified,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/lampung`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/bandar-lampung`,
      lastModified,
      changeFrequency: 'monthly',
      priority: 0.85,
    },
  ]
}
