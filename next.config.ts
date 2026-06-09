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
    // Verbal was later split again into one chapter per question type, so the
    // legacy slugs (and the original CR/RC names) all forward to their successor.
    return [
      { source: "/chapters/critical-reasoning", destination: "/chapters/verbal-02-cr-argument-structure", permanent: true },
      { source: "/chapters/reading-comprehension", destination: "/chapters/verbal-13-rc-reading-process", permanent: true },
      { source: "/chapters/verbal-1-foundations", destination: "/chapters/verbal-01-foundations", permanent: true },
      { source: "/chapters/verbal-2-cr-core-logic", destination: "/chapters/verbal-02-cr-argument-structure", permanent: true },
      { source: "/chapters/verbal-3-cr-task-families", destination: "/chapters/verbal-04-cr-strengthen", permanent: true },
      { source: "/chapters/verbal-4-rc-reading-process", destination: "/chapters/verbal-13-rc-reading-process", permanent: true },
      { source: "/chapters/verbal-5-rc-question-families", destination: "/chapters/verbal-14-rc-main-idea", permanent: true },
      { source: "/chapters/verbal-6-mixed-timing", destination: "/chapters/verbal-21-mixed-timing", permanent: true },
      // Quant was split into one chapter per sub-topic; the old topic chapters
      // forward to their first sub-chapter. (geometry kept its slug, off-syllabus.)
      { source: "/chapters/arithmetic", destination: "/chapters/quant-05-order-and-signed-numbers", permanent: true },
      { source: "/chapters/number-properties", destination: "/chapters/quant-08-even-odd-integer-properties", permanent: true },
      { source: "/chapters/exponents-roots", destination: "/chapters/quant-11-exponent-rules", permanent: true },
      { source: "/chapters/algebra", destination: "/chapters/quant-13-linear-equations-systems", permanent: true },
      { source: "/chapters/ratios-percents", destination: "/chapters/quant-18-ratios-proportions", permanent: true },
      { source: "/chapters/rates-work", destination: "/chapters/quant-21-rate-time-distance", permanent: true },
      { source: "/chapters/statistics-probability", destination: "/chapters/quant-23-statistics", permanent: true },
      { source: "/chapters/combinatorics", destination: "/chapters/quant-24-counting-basics", permanent: true },
      { source: "/chapters/word-problems", destination: "/chapters/quant-17-translating-word-problems", permanent: true },
    ]
  },
};

export default nextConfig;
