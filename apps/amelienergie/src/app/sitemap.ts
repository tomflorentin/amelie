import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL;
  if (!siteUrl) return [];

  const baseUrl = siteUrl.replace(/\/$/, "");
  return [
    "",
    "/presentation",
    "/consultations",
    "/bougie",
    "/temoignages",
  ].map((path, index) => ({
    url: `${baseUrl}${path}`,
    changeFrequency: "monthly" as const,
    priority: index === 0 ? 1 : 0.8,
  }));
}
