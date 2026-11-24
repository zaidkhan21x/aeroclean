import type { MetadataRoute } from "next";
import { absoluteUrl, siteConfig } from "@/config/site";

// Required for `output: "export"` — generates /robots.txt at build time.
export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  // Until a real domain is configured (NEXT_PUBLIC_SITE_URL), keep crawlers out
  // so an unfinished preview deployment is not indexed.
  if (siteConfig.urlIsPlaceholder) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absoluteUrl("/sitemap.xml"),
    host: siteConfig.url,
  };
}
