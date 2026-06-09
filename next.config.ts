import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Service-worker headers — `/sw.js` must NEVER be cached by the
  // browser, otherwise an old worker keeps serving stale assets after
  // a deploy. Per Next.js PWA guide §8. The CSP narrows what the
  // worker can pull in (defense in depth).
  async headers() {
    return [
      {
        source: "/sw.js",
        headers: [
          {
            key: "Content-Type",
            value: "application/javascript; charset=utf-8",
          },
          {
            key: "Cache-Control",
            value: "no-cache, no-store, must-revalidate",
          },
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self'",
          },
        ],
      },
    ]
  },
  // The Verbal track was split from 2 chapters into 6 (Foundations, CR Core,
  // CR Task Families, RC Reading Process, RC Question Families, Mixed & Timing).
  // Permanently redirect the two retired chapter URLs to their successors so
  // old links/bookmarks/search results don't 404.
  async redirects() {
    return [
      {
        source: "/chapters/critical-reasoning",
        destination: "/chapters/verbal-2-cr-core-logic",
        permanent: true,
      },
      {
        source: "/chapters/reading-comprehension",
        destination: "/chapters/verbal-4-rc-reading-process",
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
