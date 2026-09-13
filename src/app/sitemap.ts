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
    { path: "/exam-day-checklist", changeFrequency: "yearly", priority: 0.8 },
    { path: "/score-by-school", changeFrequency: "monthly", priority: 0.9 },
    { path: "/study-schedule", changeFrequency: "monthly", priority: 0.9 },
    { path: "/glossary", changeFrequency: "monthly", priority: 0.7 },
    { path: "/resources", changeFrequency: "weekly", priority: 0.9 },
    { path: "/gmat-error-log-template", changeFrequency: "monthly", priority: 0.9 },
    { path: "/refer", changeFrequency: "monthly", priority: 0.6 },
    { path: "/gmat-study-plan", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gmat-mock-review", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gmat-data-insights-practice", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gmat-quant-practice", changeFrequency: "monthly", priority: 0.8 },
    { path: "/gmat-free-trial", changeFrequency: "monthly", priority: 0.9 },
    { path: "/gmat-verbal-practice", changeFrequency: "monthly", priority: 0.8 },
    {
      path: "/gmat-data-sufficiency-practice",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/gmat-study-plan-2-months",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/gmat-practice-questions-free",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    {
      path: "/gmat-focus-edition-changes",
      changeFrequency: "monthly",
      priority: 0.8,
    },
    { path: "/blog", changeFrequency: "weekly", priority: 0.7 },
    { path: "/how-we-compare", changeFrequency: "monthly", priority: 0.8 },
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
      path: "/blog/gmat-focus-official-practice-exams",
      changeFrequency: "yearly",
      priority: 0.7,
    },
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
    {
      path: "/blog/gmat-two-part-analysis-strategy",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-math-formulas-cheat-sheet",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-number-properties-guide",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-critical-reasoning-finding-the-assumption",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-logical-fallacies",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-3-month-study-schedule",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/what-is-a-good-gmat-focus-score",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      path: "/blog/gmat-focus-exam-structure",
      changeFrequency: "yearly",
      priority: 0.8,
    },
    {
      path: "/blog/gmat-multi-source-reasoning-strategy",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/gmat-graphics-interpretation-strategy",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    {
      path: "/blog/how-the-gmat-focus-adaptive-algorithm-works",
      changeFrequency: "yearly",
      priority: 0.7,
    },
    { path: "/score-converter", changeFrequency: "monthly", priority: 0.8 },
    { path: "/privacy", changeFrequency: "yearly", priority: 0.3 },
    { path: "/terms", changeFrequency: "yearly", priority: 0.3 },
    { path: "/refund", changeFrequency: "yearly", priority: 0.4 },
  ]
  // No lastModified: it was stamped with the request time, so every fetch
  // showed all 57 URLs as "just changed" — a freshness signal crawlers learn
  // to ignore. Omitting it is honest; per-route real dates can come later.
  return routes.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }))
}
