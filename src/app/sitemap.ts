import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  // Hardcoded to www — apex 307s here, and GSC's verified property is www.
  // Don't read NEXT_PUBLIC_SITE_URL: the Vercel env may still hold apex.
  const baseUrl = "https://www.jaga.care";
  const now = new Date();

  const enRoutes: MetadataRoute.Sitemap = [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1 },
    { url: `${baseUrl}/how-it-works`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/packages`, lastModified: now, priority: 0.8 },
    { url: `${baseUrl}/packages/make-it-safe`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/packages/help-them-move`, lastModified: now, priority: 0.7 },
    { url: `${baseUrl}/packages/someone-by-their-side`, lastModified: now, priority: 0.7 },
    {
      url: `${baseUrl}/guides/prepare-home-after-stroke`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/hospital-discharge-checklist`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/guides/grab-bar-installation-malaysia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { url: `${baseUrl}/about`, lastModified: now, priority: 0.6 },
    { url: `${baseUrl}/get-a-quote`, lastModified: now, priority: 0.4 },
    { url: `${baseUrl}/privacy`, lastModified: now, priority: 0.3 },
    { url: `${baseUrl}/terms`, lastModified: now, priority: 0.3 },
  ];

  const msRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}/ms`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ms/panduan/senarai-semak-keluar-hospital`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ms/panduan/pemasangan-palang-pegangan-malaysia`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ms/panduan/persediaan-rumah-selepas-strok`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${baseUrl}/ms/dapatkan-sebutharga`,
      lastModified: now,
      priority: 0.4,
    },
  ];

  return [...enRoutes, ...msRoutes];
}
