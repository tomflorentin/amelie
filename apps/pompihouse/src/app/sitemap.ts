import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];

  const baseUrl = siteUrl.replace(/\/$/, "");
  return [{ url: baseUrl, changeFrequency: "monthly", priority: 1 }];
}
