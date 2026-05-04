#!/usr/bin/env node
/**
 * Pings IndexNow (used by Bing, Yandex, Naver, Seznam) with all live URLs
 * from the sitemap. This accelerates discovery — Bing, in particular, feeds
 * Perplexity's web index, so faster Bing indexing → faster Perplexity citations.
 *
 * Usage: node scripts/indexnow-ping.mjs
 *   or:  npm run indexnow
 *
 * Runs after each prod deploy or whenever you ship new content.
 */

const KEY = "a1a690ac23e86a31f9e731d77d42206d";
const HOST = "jaga.care";
const SITEMAP_URL = `https://${HOST}/sitemap.xml`;
const KEY_LOCATION = `https://${HOST}/${KEY}.txt`;

async function fetchSitemapUrls() {
  const res = await fetch(SITEMAP_URL);
  if (!res.ok) throw new Error(`Sitemap fetch failed: ${res.status}`);
  const xml = await res.text();
  const matches = [...xml.matchAll(/<loc>([^<]+)<\/loc>/g)];
  return matches.map((m) => m[1]);
}

async function pingIndexNow(urls) {
  const body = {
    host: HOST,
    key: KEY,
    keyLocation: KEY_LOCATION,
    urlList: urls,
  };
  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "Content-Type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });
  return { status: res.status, body: await res.text() };
}

async function main() {
  console.log(`Fetching sitemap: ${SITEMAP_URL}`);
  const urls = await fetchSitemapUrls();
  console.log(`Found ${urls.length} URLs.`);
  console.log(`Pinging IndexNow with key ${KEY.slice(0, 8)}…`);
  const result = await pingIndexNow(urls);
  console.log(`IndexNow response: ${result.status}`);
  if (result.body) console.log(result.body);
  if (result.status >= 400) process.exit(1);
}

main().catch((err) => {
  console.error("IndexNow ping failed:", err);
  process.exit(1);
});
