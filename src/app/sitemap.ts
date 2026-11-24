import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/config/site";
import { sitemapRoutes } from "@/config/seo";

// Required for `output: "export"` — generates /sitemap.xml at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  return sitemapRoutes.map((r) => ({
    url: absoluteUrl(r.path),
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
