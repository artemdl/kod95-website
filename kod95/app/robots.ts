import type { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/landing", "/spasibo"],
      },
    ],
    sitemap: "https://kod95lodz.com/sitemap.xml",
  };
}
