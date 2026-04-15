import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
      disallow: ["/ingest", "/ingest/"],
    },
    sitemap: `${process.env.NEXT_PUBLIC_SITE_URL || "https://jaga.care"}/sitemap.xml`,
  };
}
