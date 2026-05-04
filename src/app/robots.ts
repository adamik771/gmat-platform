import type { MetadataRoute } from "next"

/**
 * robots.txt — rendered at `/robots.txt`. Tells crawlers which paths
 * to skip. App routes are authenticated and serve no meaningful
 * content to a logged-out crawler, so we disallow them explicitly to
 * preserve crawl budget for the marketing pages that actually rank.
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://zakariangmat.com"
).replace(/\/$/, "")

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        // Anything not under an authenticated path is fair game. Listed
        // here are the (app)-group routes (post-login app surface),
        // /api endpoints, transient auth surfaces, and the offline
        // shell. Anything else under / is allowed by default.
        disallow: [
          "/admin",
          "/analytics",
          "/api/",
          "/chapters",
          "/dashboard",
          "/diagnostic",
          "/error-log",
          "/learn",
          "/lessons",
          "/mock",
          "/offline",
          "/onboarding",
          "/practice",
          "/qa",
          "/reset-password",
          "/review",
          "/settings",
          "/study-plan",
          "/test-builder",
        ],
        allow: "/",
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
