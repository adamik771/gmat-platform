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
};

export default nextConfig;
