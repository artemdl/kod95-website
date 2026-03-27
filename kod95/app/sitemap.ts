import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://kod95lodz.com";
  const now = new Date().toISOString();

  return [
    { url: baseUrl, lastModified: now, changeFrequency: "weekly", priority: 1.0 },
    { url: `${baseUrl}/o-kod-95`, lastModified: now, changeFrequency: "monthly", priority: 0.9 },
    { url: `${baseUrl}/uslugi`, lastModified: now, changeFrequency: "monthly", priority: 0.8 },
    { url: `${baseUrl}/nasha-komanda`, lastModified: now, changeFrequency: "monthly", priority: 0.6 },
  ];
}
