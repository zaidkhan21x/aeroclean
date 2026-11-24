import type { Metadata } from "next";
import { absoluteUrl, siteConfig } from "./site";

interface PageSeo {
  title: string;
  description: string;
  /** Route path with trailing slash, e.g. "/services/". */
  path: string;
  /** Set true for pages that should not be indexed (e.g. 404). */
  noIndex?: boolean;
}

const OG_IMAGE = {
  url: "/og-image.png",
  width: 1200,
  height: 630,
  alt: "AERO CLEAN — vent and air duct cleaning",
};

/** Root defaults, applied in app/layout.tsx. */
export const rootMetadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: `${siteConfig.brandName} | Vent & Air Duct Cleaning`,
    template: `%s | ${siteConfig.brandName}`,
  },
  description: siteConfig.shortDescription,
  applicationName: siteConfig.brandName,
  formatDetection: { telephone: false, email: false, address: false },
  openGraph: {
    type: "website",
    siteName: siteConfig.brandName,
    locale: siteConfig.locale,
    images: [OG_IMAGE],
  },
  twitter: {
    card: "summary_large_image",
    images: [OG_IMAGE.url],
  },
  robots: siteConfig.urlIsPlaceholder
    ? // Keeps unfinished deployments (no real domain configured) out of search results.
      { index: false, follow: false }
    : { index: true, follow: true },
};

/** Per-page metadata with unique title, description, canonical and social tags. */
export function pageMetadata({ title, description, path, noIndex }: PageSeo): Metadata {
  const url = absoluteUrl(path);
  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title: `${title} | ${siteConfig.brandName}`,
      description,
      siteName: siteConfig.brandName,
      locale: siteConfig.locale,
      images: [OG_IMAGE],
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${siteConfig.brandName}`,
      description,
      images: [OG_IMAGE.url],
    },
    ...(noIndex ? { robots: { index: false, follow: true } } : {}),
  };
}

/** Routes included in sitemap.xml. */
export const sitemapRoutes = [
  { path: "/", priority: 1.0, changeFrequency: "monthly" as const },
  { path: "/services/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/packages/", priority: 0.9, changeFrequency: "monthly" as const },
  { path: "/faqs/", priority: 0.7, changeFrequency: "monthly" as const },
  { path: "/terms/", priority: 0.3, changeFrequency: "yearly" as const },
  { path: "/privacy/", priority: 0.3, changeFrequency: "yearly" as const },
];
