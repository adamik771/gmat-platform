import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Service-worker headers — `/sw.js` must NEVER be cached by the
  // browser, otherwise an old worker keeps serving stale assets after
  // a deploy. Per Next.js PWA guide §8. The CSP narrows what the
  // worker can pull in (defense in depth).
  async headers() {
    return [
      // Global security headers (2026-06 security audit): HSTS keeps every
      // request on TLS, nosniff stops MIME confusion, DENY blocks
      // clickjacking iframes, and the referrer/permissions policies trim
      // what leaks to third parties. CSP is intentionally NOT set globally
      // yet — Next.js inline runtime scripts need nonce plumbing first.
      {
        source: "/:path*",
        headers: [
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains",
          },
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          {
            key: "Permissions-Policy",
            value: "camera=(), microphone=(), geolocation=()",
          },
        ],
      },
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
      // The in-app diagnostic was retired in favour of official mba.com
      // practice exams entered on the exam-plan page; the free marketing
      // sampler forwards to signup.
      { source: "/diagnostic", destination: "/mock", permanent: true },
      { source: "/diagnostic/:path*", destination: "/mock", permanent: true },
      { source: "/free-diagnostic", destination: "/signup", permanent: true },
      { source: "/free-diagnostic/:path*", destination: "/signup", permanent: true },
      { source: "/chapters/critical-reasoning", destination: "/chapters/verbal-02-cr-argument-structure", permanent: true },
      { source: "/chapters/reading-comprehension", destination: "/chapters/verbal-13-rc-reading-process", permanent: true },
      { source: "/chapters/verbal-1-foundations", destination: "/chapters/verbal-01-foundations", permanent: true },
      { source: "/chapters/verbal-2-cr-core-logic", destination: "/chapters/verbal-02-cr-argument-structure", permanent: true },
      { source: "/chapters/verbal-3-cr-task-families", destination: "/chapters/verbal-04-cr-strengthen", permanent: true },
      { source: "/chapters/verbal-4-rc-reading-process", destination: "/chapters/verbal-13-rc-reading-process", permanent: true },
      { source: "/chapters/verbal-5-rc-question-families", destination: "/chapters/verbal-14-rc-main-idea", permanent: true },
      { source: "/chapters/verbal-6-mixed-timing", destination: "/chapters/verbal-21-mixed-timing", permanent: true },
      // Quant was split into one chapter per sub-topic; the old topic chapters
      // forward to their first sub-chapter. Geometry was removed (off-syllabus on
      // GMAT Focus Quant) — its slug forwards to the start of the Quant journey.
      { source: "/chapters/geometry", destination: "/chapters/quant-01-backsolving", permanent: true },
      { source: "/chapters/arithmetic", destination: "/chapters/quant-05-order-and-signed-numbers", permanent: true },
      { source: "/chapters/number-properties", destination: "/chapters/quant-08-even-odd-integer-properties", permanent: true },
      { source: "/chapters/exponents-roots", destination: "/chapters/quant-11-exponent-rules", permanent: true },
      { source: "/chapters/algebra", destination: "/chapters/quant-13-linear-equations-systems", permanent: true },
      { source: "/chapters/ratios-percents", destination: "/chapters/quant-18-ratios-proportions", permanent: true },
      { source: "/chapters/rates-work", destination: "/chapters/quant-21-rate-time-distance", permanent: true },
      { source: "/chapters/statistics-probability", destination: "/chapters/quant-23-statistics", permanent: true },
      { source: "/chapters/combinatorics", destination: "/chapters/quant-24-counting-basics", permanent: true },
      { source: "/chapters/word-problems", destination: "/chapters/quant-17-translating-word-problems", permanent: true },
      // Lessons library retired (2026-06-12) — the guided-path chapters
      // superseded it. Section lessons map to their section's entry chapter;
      // exam-prep lessons map to the official-exam plan.
      { source: "/lessons/03-quant-mastery", destination: "/chapters/quant-05-order-and-signed-numbers", permanent: true },
      { source: "/lessons/04-verbal-precision", destination: "/chapters/verbal-01-foundations", permanent: true },
      { source: "/lessons/05-data-insights", destination: "/chapters/di-foundations", permanent: true },
      { source: "/lessons/02-diagnostic-deep-dive", destination: "/mock", permanent: true },
      { source: "/lessons/06-mock-strategy", destination: "/mock", permanent: true },
      { source: "/lessons/:path*", destination: "/chapters", permanent: true },
      { source: "/lessons", destination: "/chapters", permanent: true },
    ]
  },
};

export default nextConfig;
