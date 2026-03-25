import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://jaga.care";
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
    {
      url: `${baseUrl}/guides/prepare-home-after-stroke`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/hospital-discharge-checklist`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/guides/grab-bar-installation-malaysia`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms`,
      lastModified: new Date(),
      priority: 0.3,
    },
    {
      url: `${baseUrl}/ms`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ms/dapatkan-sebutharga`,
      lastModified: new Date(),
      priority: 0.8,
    },
  ];
}
