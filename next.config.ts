import type { NextConfig } from "next";

/**
 * AERO CLEAN is a fully static website.
 * `output: "export"` makes `next build` write plain HTML/CSS/JS to `/out`,
 * which can be uploaded to any static host (Netlify, Cloudflare Pages,
 * Vercel static, Hostinger, S3, GitHub Pages, etc.).
 */
const nextConfig: NextConfig = {
  output: "export",
  // Generates /services/index.html etc. — works on hosts without rewrite rules.
  trailingSlash: true,
  images: {
    // The Next.js image optimizer needs a server, so it is disabled for static export.
    // All images in /public are pre-optimised at the size they are displayed.
    unoptimized: true,
  },
  poweredByHeader: false,
  reactStrictMode: true,
};

export default nextConfig;
