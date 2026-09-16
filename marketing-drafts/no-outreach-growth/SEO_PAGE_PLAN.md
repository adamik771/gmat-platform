> **STALE OFFER - review before use (2026-07-19).** Strategy below predates the current offer (free 7-day full-access trial, no card - never "free beta"/"private beta"). Founder-claim wording in this file has been aligned (565 to 735, top 1%, personal result, no "verified" framing), but offer/beta mechanics need a rewrite before launching anything from this file. Current wording source: acquisition-cleanup/OFFER_AUDIT.md and the live /gmat-free-trial page.

# SEO Landing Page Plan (No-Outreach Growth: SEO cluster)

A plan for seven target landing pages that capture passive search demand and route it into the private beta. This is the page-level companion to `SEO_ARTICLE_IDEAS.md` (long-form posts) and complements the existing marketing docs (`GROWTH_PLAN.md`, `CONTENT_CALENDAR.md`, `REFERRAL_AND_DISCOUNT_PLAN.md`).

Guiding principle: **thin or duplicative pages hurt SEO.** Several of these targets are already covered by live pages and should be improved, not rebuilt. Only build a new page where there is real, distinct content. Every page here uses the honest hook and never claims a scored diagnostic, never promises a score, and never implies GMAC affiliation.

The honest hook (woven into each CTA): a free personalized study plan plus full platform access during the private beta, plus free sample chapters, a free study-schedule generator, and a free error-log template. The baseline is an official mba.com practice exam the user takes themselves and enters in the app.

---

## Status table

| # | Target page (query theme) | Exists today | Maps to | Verdict |
|---|---|---|---|---|
| 1 | GMAT study plan generator | Yes | `/study-schedule` (the study plan generator) | Improve existing |
| 2 | GMAT error log template | No (building now) | NEW `/error-log-template` landing page (shipped now) | Build new (shipped) |
| 3 | GMAT practice dashboard | Partial | In-app dashboard is auth-gated under `/(app)/dashboard`; needs a public marketing page | Build new (marketing page) |
| 4 | GMAT mock test review | Partial | In-app mock report is auth-gated under `/(app)/mock`; supported by SEO article #1 | Improve existing (lean on article + public section) |
| 5 | GMAT Data Insights practice | Partial | `/sample-chapter/data-insights` exists; DI complete-guide post exists | Improve existing |
| 6 | GMAT Quant study plan | Partial | `/sample-chapter/quant` and quant-timing post exist; `/study-schedule` covers planning | Improve existing |
| 7 | GMAT private beta prep platform | Yes | Homepage `/` and `/about` cover the private-beta angle | Already covered (optimize on-page) |

Reading the table: only **two genuinely new pages** are warranted — the error-log template landing page (#2, shipping now) and a public marketing page for the practice dashboard (#3). The mock-review target (#4) is best served by the SEO article plus a public section rather than a thin standalone page. The rest are improve-existing or already-covered. This keeps us out of thin-content territory.

---

## 1. GMAT study plan generator

- **Target query / intent:** "gmat study plan generator," "gmat study schedule maker" — tool-seeking, high intent.
- **Exists today:** Yes — `/study-schedule` is the live study-plan generator (enter exam date and weekly hours; optionally feed in section accuracies from an official mba.com practice exam).
- **Recommended URL:** keep `/study-schedule` (do not create a duplicate at `/study-plan-generator`; redirect that slug here if ever needed).
- **Title tag (<60):** GMAT Study Plan Generator - Free Week-by-Week Plan
- **Meta description (<155):** Build a free, personalized GMAT study plan from your exam date and weekly hours. Optionally tailor it to your weakest section. No credit card.
- **H1:** Free GMAT Study Plan Generator
- **Content outline (real content only):**
  - One-line promise and the generator above the fold.
  - How it works: exam date plus weekly hours in, week-by-week plan out.
  - Optional personalization: enter section accuracies from an official mba.com practice exam you take yourself.
  - What a good plan looks like (focus one weak section, protect consistency).
  - FAQ: how far out to start, what if my date moves, do I need an account (no).
- **Internal links:** `/blog/how-to-build-a-gmat-study-plan-that-works`, `/blog/gmat-3-month-study-schedule`, `/error-log-template`.
- **CTA:** Generate plan now (no account), then: "Want progress tracking on top of the plan? Full platform access is free during the private beta."
- **Verdict:** **Improve existing.** Tighten title/meta for the "generator" query, add the FAQ block, and ensure the internal links above are present.

## 2. GMAT error log template

- **Target query / intent:** "gmat error log template," "gmat mistake log" — tool/template-seeking, high intent.
- **Exists today:** No standalone landing page yet. The error-log template is an existing lead magnet; a dedicated landing page is **being built now**.
- **Recommended URL:** `/error-log-template`.
- **Title tag (<60):** GMAT Error Log Template - Free Download
- **Meta description (<155):** Free GMAT error log template. Track every miss by type and cause, fix it, and re-test on schedule. No account needed to download.
- **H1:** Free GMAT Error Log Template
- **Content outline (real content only):**
  - What an error log is and why it works (log the cause, not just the question).
  - The columns in the template and how to fill each.
  - The three error buckets: content, careless, timing.
  - The weekly review ritual and the idea of spaced re-testing.
  - Download via email capture (LeadCapture, fires `lead_captured`).
- **Internal links:** `/blog/why-your-gmat-score-is-stuck`, the future error-log SEO article (`SEO_ARTICLE_IDEAS.md` #2), `/study-schedule`.
- **CTA:** Get the free template (email capture), then: "When you want the re-test dates handled for you, the platform turns your log into a spaced-review queue, free during the private beta."
- **Verdict:** **Build new - flagged shipped-now.** This is the one net-new SEO landing page actively shipping. Keep the page genuinely useful so it stands on its own in search, not just a gate.

## 3. GMAT practice dashboard

- **Target query / intent:** "gmat practice dashboard," "gmat progress tracker," "gmat analytics" — feature/product-seeking, comparison intent.
- **Exists today:** Partial. The real dashboard lives in-app at `/(app)/dashboard` and is auth-gated, so it cannot rank in search. There is no public page describing it.
- **Recommended URL:** `/practice-dashboard` (public marketing page that explains and screenshots the gated feature).
- **Title tag (<60):** GMAT Practice Dashboard - Track Accuracy and Pacing
- **Meta description (<155):** See how the Zakarian GMAT dashboard tracks accuracy, pacing, and calibration, with an error log and spaced review. Free in the private beta.
- **H1:** Your GMAT Practice Dashboard
- **Content outline (real content only):**
  - What the dashboard shows: accuracy, pacing, calibration over time.
  - The error log and spaced-review queue built from your misses.
  - Adaptive study planning that updates as you practice.
  - How data gets in: practice in the app and bring an official mba.com practice exam you take yourself.
  - A screenshot or two of the real interface (no invented metrics in the copy).
  - CTA to start the free private beta.
- **Internal links:** `/study-schedule`, `/error-log-template`, `/about`.
- **CTA:** Start free in the private beta - no credit card.
- **Verdict:** **Build new (public marketing page).** The feature exists but is invisible to search behind auth; a public explainer page captures the query without exposing the gated app. Use only real screenshots and real feature descriptions.

## 4. GMAT mock test review

- **Target query / intent:** "gmat mock test review," "how to review gmat practice test" — informational plus feature intent.
- **Exists today:** Partial. The in-app mock report (with the InviteFriend milestone moment) is auth-gated under `/(app)/mock`. No public page targets this query.
- **Recommended URL:** primary coverage via the SEO article at `/blog/how-to-review-a-gmat-mock-test` (`SEO_ARTICLE_IDEAS.md` #1); optionally a short public feature section on the `/practice-dashboard` page rather than a separate thin page.
- **Title tag (<60):** How to Review a GMAT Mock Test - Step by Step
- **Meta description (<155):** A repeatable way to review a GMAT mock: tag every miss by cause, fix the pattern, and re-test what you got wrong. Plus how the app automates it.
- **H1:** How to Review a GMAT Mock Test
- **Content outline (real content only):**
  - The score is a snapshot; the review is the lever.
  - Tagging each miss by cause (content, careless, timing).
  - Pacing review from the mock.
  - Turning the review into next week's plan.
  - How the in-app mock report automates the tagging and feeds the review queue.
- **Internal links:** `/blog/gmat-focus-official-practice-exams`, `/practice-dashboard`, `/study-schedule`.
- **CTA:** "The in-app mock report does this tagging for you, free during the private beta. Bring a score from an official mba.com practice exam you take yourself."
- **Verdict:** **Improve existing / cover via article.** Do not build a standalone landing page for this; it would be thin. Cover the query with the SEO article and a feature section on the dashboard page.

## 5. GMAT Data Insights practice

- **Target query / intent:** "gmat data insights practice," "data insights questions" — practice-seeking, high intent.
- **Exists today:** Partial. `/sample-chapter/data-insights` (free sample chapter) and `/blog/gmat-data-insights-complete-guide` both exist. No single page positioned for the "practice" query.
- **Recommended URL:** keep and strengthen `/sample-chapter/data-insights` as the practice-intent landing page; do not create a separate `/data-insights-practice` thin page.
- **Title tag (<60):** GMAT Data Insights Practice - Free Sample Chapter
- **Meta description (<155):** Practice GMAT Data Insights with a free sample chapter covering the five question types. Full DI practice is free in the private beta.
- **H1:** GMAT Data Insights Practice
- **Content outline (real content only):**
  - The five DI question types in one map.
  - The free sample chapter content (real teaching).
  - How DI rewards reading data without over-reading.
  - Pointer to the complete guide for depth.
  - CTA into full DI practice in the beta.
- **Internal links:** `/blog/gmat-data-insights-complete-guide`, `/blog/gmat-multi-source-reasoning-strategy`, `/study-schedule`.
- **CTA:** "Practice the full Data Insights bank free during the private beta - no credit card."
- **Verdict:** **Improve existing.** Re-position the existing sample-chapter page for the practice query and cross-link the DI blog cluster. Avoid a duplicate page.

## 6. GMAT Quant study plan

- **Target query / intent:** "gmat quant study plan," "how to study gmat quant" — planning intent, section-specific.
- **Exists today:** Partial. `/study-schedule` handles planning generally; `/sample-chapter/quant`, `/blog/gmat-quant-timing-strategy`, `/blog/gmat-math-formulas-cheat-sheet`, and `/blog/gmat-number-properties-guide` cover quant content. No page ties them into a quant-specific plan.
- **Recommended URL:** serve via the generator at `/study-schedule` (which can focus a plan on the weakest section) plus a quant hub via the blog cluster; do not build a standalone `/gmat-quant-study-plan` page that would overlap `/study-schedule`.
- **Title tag (<60):** GMAT Quant Study Plan - Free Generator and Guides
- **Meta description (<155):** Build a GMAT Quant-focused study plan free, then drill timing, number properties, and formulas. Full Quant practice free in the private beta.
- **H1:** GMAT Quant Study Plan
- **Content outline (real content only):**
  - How to focus the free study-schedule generator on Quant when it is your weak section.
  - The quant skill map: number properties, algebra, arithmetic, word problems.
  - Timing as its own skill (link the timing post).
  - The formula cheat sheet as a reference, not a crutch.
  - The free quant sample chapter to see the teaching approach.
- **Internal links:** `/study-schedule`, `/blog/gmat-quant-timing-strategy`, `/sample-chapter/quant`.
- **CTA:** "Generate a Quant-focused plan free, then practice the full Quant bank in the private beta - no credit card."
- **Verdict:** **Improve existing.** Strengthen `/study-schedule` and the quant blog cluster for this query; building a separate plan page would duplicate the generator.

## 7. GMAT private beta prep platform

- **Target query / intent:** "gmat prep platform private beta," "new gmat prep platform," brand and category discovery — navigational/commercial.
- **Exists today:** Yes. The homepage `/` and `/about` already carry the private-beta positioning, the Start Free CTA, the FoundingOffer block, and the founder story.
- **Recommended URL:** keep `/` and `/about`; no new page.
- **Title tag (<60):** Zakarian GMAT - Private Beta GMAT Focus Prep
- **Meta description (<155):** A premium GMAT Focus prep platform in free private beta: 50+ chapters, 1,900+ questions, mocks, analytics, and adaptive planning. No credit card.
- **H1:** A complete GMAT Focus prep platform, free during the private beta
- **Content outline (real content only):**
  - The private-beta promise: full access, free, no credit card.
  - The feature set (50+ chapters, 1,900+ questions, mocks, analytics, adaptive planning, error log plus spaced review, optional AI tutor) - use the shared `src/lib/site.ts` constants for counts, never hardcode exact figures.
  - The founder story: Adam Zakarian, GMAT Focus 735 (top 1%), 565 to 735, built solo.
  - The founding-member reservation (locked-in discount) via the existing FoundingOffer block.
  - Claim block with the GMAC trademark line.
- **Internal links:** `/about`, `/pricing`, `/refer`.
- **CTA:** Start free in the private beta - no credit card. Plus the founding-member reservation.
- **Verdict:** **Already covered.** Optimize on-page title/meta and ensure the trademark claim block is present; do not build a new page.

---

## Build summary

- **Build new:** `/error-log-template` (#2, shipping now) and `/practice-dashboard` (#3, public marketing page for the gated feature).
- **Cover via article, no standalone page:** mock test review (#4) via `SEO_ARTICLE_IDEAS.md` #1 and a feature section on `/practice-dashboard`.
- **Improve existing:** `/study-schedule` (#1, #6), `/sample-chapter/data-insights` (#5), quant blog cluster (#6).
- **Already covered:** private-beta platform (#7) on `/` and `/about`.

## Standing requirements for every page

- ZERO emojis.
- No "free diagnostic," no scored placement/diagnostic test, no guaranteed-score or specific-improvement language. The only personal result cited is Adam Zakarian's GMAT Focus 735 (top 1%), 565 to 735.
- No fabricated numbers; counts come from the shared `src/lib/site.ts` constant (approximate marketing counts), never hardcoded exact figures.
- Include in any public claim block: "GMAT is a registered trademark of GMAC, which does not endorse and is not affiliated with this product."
- Email capture stays opt-in with one-click unsubscribe (CAN-SPAM / GDPR); the existing LeadCapture flow fires `lead_captured` on submit.
- Keep CTAs helpful-before-selling: lead with the free tool or beta access, mention founding reservation second.
