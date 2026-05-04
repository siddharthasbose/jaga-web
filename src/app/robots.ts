import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const sitemap = `${process.env.NEXT_PUBLIC_SITE_URL || "https://www.jaga.care"}/sitemap.xml`;

  // Explicit allow for AI search crawlers — even though `*` already covers
  // them, an explicit rule signals intent and protects against future
  // upstream defaults that block them.
  const aiBots = [
    "GPTBot",
    "ChatGPT-User",
    "OAI-SearchBot",
    "PerplexityBot",
    "ClaudeBot",
    "Claude-Web",
    "anthropic-ai",
    "Google-Extended",
    "Applebot",
    "Applebot-Extended",
    "CCBot",
    "Bytespider",
    "Amazonbot",
    "Meta-ExternalAgent",
    "DuckAssistBot",
    "MistralAI-User",
  ];

  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/ingest", "/ingest/"],
      },
      ...aiBots.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: ["/ingest", "/ingest/"],
      })),
    ],
    sitemap,
    host: "https://www.jaga.care",
  };
}
