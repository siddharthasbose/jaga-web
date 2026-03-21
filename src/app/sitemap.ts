import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jagacare.com";
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 1,
    },
    {
      url: `${baseUrl}/how-it-works`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/packages`,
      lastModified: new Date(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/packages/make-it-safe`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/help-them-move`,
      lastModified: new Date(),
      priority: 0.7,
    },
    {
      url: `${baseUrl}/packages/someone-by-their-side`,
      lastModified: new Date(),
      priority: 0.7,
    },
  ];
}
