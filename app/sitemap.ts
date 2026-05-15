import { MetadataRoute } from "next";
import { SITE_URL_BASE } from "../lib/metadata";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = SITE_URL_BASE;
  const now = new Date().toISOString();

  return [
    {
      url: baseUrl + "/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: baseUrl + "/korea-trends/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: baseUrl + "/korea-trends/beauty/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: baseUrl + "/korea-trends/fashion/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: baseUrl + "/ranking/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: baseUrl + "/ranking/olive-young/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.85,
    },
    {
      url: baseUrl + "/ranking/fashion-brands/",
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: baseUrl + "/community/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.85,
    },
    {
      url: baseUrl + "/community/funny/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: baseUrl + "/community/memes/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
    {
      url: baseUrl + "/community/viral/",
      lastModified: now,
      changeFrequency: "daily",
      priority: 0.8,
    },
  ];
}
