import type { MetadataRoute } from "next"

/**
 * Sitemap for search engines. Renders at `/sitemap.xml`.
 *
 * Lists only public marketing routes. App routes ((app) group) are
 * authenticated and don't return useful content to a crawler — those
 * are blocked in robots.ts so we don't waste crawl budget on them.
 *
 * Set NEXT_PUBLIC_SITE_URL in Vercel envs to your production domain
 * (e.g. https://www.zakariangmat.com). Falls back to the www-canonical
 * host so dev / preview builds and an unset env still emit canonical URLs
 * (the apex 308-redirects to www, and Search Console is verified on www).
 */
const SITE_URL = (
  process.env.NEXT_PUBLIC_SITE_URL || "https://www.zakariangmat.com"
).replace(/\/$/, "")

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()
  // Marketing routes only. Add new public surfaces here as they ship.
  // priority is relative within this site; 1.0 is the homepage,
  // pricing/about ~0.9 (high-conversion intent), other pages ~0.6.
  const routes: Array<{
    path: string
    changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"]
    priority: number
  }> = [
    { path: "/", changeFrequency: "weekly", priority: 1.0 },
    { path: "/pricing", changeFrequency: "monthly", priority: 0.9 },
    { path: "/about", changeFrequency: "monthly", priority: 0.9 },
    { path: "/course", changeFrequency: "monthly", priority: 0.8 },
    { path: "/students", changeFrequency: "weekly", priority: 0.8 },
    { path: "/free-diagnostic", changeFrequency: "monthly", priority: 0.9 },
    { path: "/exam-day-checklist", changeFrequency: "yearly", priority: 0.8 },
    { path: "/score-by-school", changeFrequency: "monthly", priority: 0.9 },
    { path: "/study-schedule", changeFrequency: "monthly", priority: 0.9 },
    { path: "/glossary", changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources", changeFrequency: "weekly", priority: 0.9 },
    { path: "/sample-chapter", changeFrequency: "monthly", priority: 0.9 },
    {
      path: "/sample-chapter/quant",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      path: "/sample-chapter/data-insights",
      changeFrequency: "monthly",
      priority: 0.9,
    },
    { path: "/faq", changeFrequency: "monthly", priority: 0.6 },
    { path: "/contact", changeFrequency: "yearly", priority: 0.5 },
    {
      path: "/blog/why-your-gmat-score-is-stuck",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-data-insights-complete-guide",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/how-to-build-a-gmat-study-plan-that-works",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-critical-reasoning-question-types-explained",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-data-sufficiency-strategy-guide",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-reading-comprehension-passage-strategy",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-focus-vs-old-gmat-whats-changed",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      path: "/blog/first-30-days-of-gmat-prep",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-prep-for-non-native-english-speakers",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-quant-timing-strategy",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-vs-gre-for-mba-admissions",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      path: "/blog/how-to-retake-the-gmat-after-a-low-score",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { path: "/score-converter", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.4 },
  ]
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
