# SEO Page Plan

Zakarian GMAT (zakariangmat.com) — search-led acquisition page set, content rules, internal-linking map, build backlog, and on-page checklist.

This plan governs the SEO surface only. Paid channels (Google/Reddit/LinkedIn/Meta) drive to the same landing pages with UTMs appended; SEO drives the organic version of those same URLs. One page, two traffic sources, identical content. We never build a separate "ad-only" thin page.

---

## 0. Operating principles (read first)

**Every page must earn its ranking by being genuinely useful.** A page ships only when it answers the target query better than what a stuck test-taker would otherwise find. No doorway pages, no spun variants, no "GMAT prep in [city]" templated junk, no auto-generated tag archives.

**Truth and compliance are gates, not guidelines.** Before any page is published it must pass the compliance review in Section 6. The only performance claim anywhere on the site is the founder's own 565 -> 735 climb (100th percentile on his official report). No guaranteed scores. No diagnostic/score-band/readiness language anywhere — the platform has no in-app diagnostic; the baseline is always the user's own official mba.com practice exam. GMAC/GMAT/GMAT Focus/mba.com are referenced only nominatively, with the standing "not affiliated / not endorsed" disclaimer in the footer.

**One primary intent per URL.** Each page targets exactly one query cluster. If two intents fight for the same page, split them.

**Conversion is built in, not bolted on.** Every page has a primary CTA (signup, fires `signup` / Meta CompleteRegistration) and, where a lead magnet exists, a secondary opt-in (fires `lead_captured`). Landing-page loads fire `landing_view` with `{page}`. We reference the existing `trackEvent()` + `AttributionCapture` infrastructure; we do not invent new tracking.

---

## 1. The current page set (what already exists)

These marketing routes are live under `src/app/(marketing)/`. This is the inventory we link from and link to.

### 1a. Acquisition landing pages (lead-magnet + product intent)

| URL | Target query (primary) | Primary intent | Conversion |
| --- | --- | --- | --- |
| `/error-log-template` | "gmat error log template" | Download the 6-tag error-log spreadsheet | `lead_captured` -> `signup` |
| `/study-schedule` | "gmat study schedule" / "gmat study plan generator" | Generate a week-by-week schedule from the user's own exam date + baseline | `signup` |
| `/score-converter` | "gmat focus score converter" / "gmat focus to old score" | Convert Focus <-> 10th-edition total | `signup` (secondary) |
| `/sample-chapter`, `/sample-chapter/quant`, `/sample-chapter/data-insights` | "gmat sample lesson" / "free gmat quant chapter" | Read a real chapter, no card | `signup` |
| `/exam-day-checklist` | "gmat exam day checklist" | Practical exam-day prep | `lead_captured` |
| `/score-by-school` | "gmat score for [school]" / "average gmat by mba program" | School-by-school score context | `signup` |
| `/how-we-compare` | "gmat prep comparison" / brand-vs-brand | Honest positioning vs. alternatives | `pricing_view` -> `signup` |
| `/glossary` | "gmat terms" / individual term queries | Reference; long-tail capture funneling inward | internal links |
| `/pricing` | "zakarian gmat pricing" / "gmat course cost" | Plan + founding offer | `pricing_view` -> `founding_reserve` / `checkout_initiated` |
| `/refer` | brand + referral | Referral loop | `referral_click` |
| `/resources` | "free gmat resources" | Hub linking every tool + the blog | distributes link equity |

### 1b. Blog hub + posts (`/blog`, 22 live posts)

The hub at `/blog` is the editorial pillar. Live posts (exact slugs) we link to and from:

`how-the-gmat-focus-adaptive-algorithm-works`, `gmat-graphics-interpretation-strategy`, `what-is-a-good-gmat-focus-score`, `gmat-focus-exam-structure`, `gmat-multi-source-reasoning-strategy`, `gmat-two-part-analysis-strategy`, `gmat-math-formulas-cheat-sheet`, `gmat-number-properties-guide`, `gmat-critical-reasoning-finding-the-assumption`, `gmat-logical-fallacies`, `gmat-3-month-study-schedule`, `gmat-focus-official-practice-exams`, `how-to-retake-the-gmat-after-a-low-score`, `gmat-vs-gre-for-mba-admissions`, `gmat-quant-timing-strategy`, `first-30-days-of-gmat-prep`, `gmat-prep-for-non-native-english-speakers`, `gmat-focus-vs-old-gmat-whats-changed`, `gmat-reading-comprehension-passage-strategy`, `gmat-critical-reasoning-question-types-explained`, `gmat-data-sufficiency-strategy-guide`, `gmat-data-insights-complete-guide`, `how-to-build-a-gmat-study-plan-that-works`, `why-your-gmat-score-is-stuck`.

Posts are managed in `src/lib/blog-posts.ts` (`getRelatedPosts()` already drives in-cluster related links). New posts register there and auto-appear in the hub; they must also be added to `src/app/sitemap.ts`.

---

## 2. Pages still to build (the high-intent gap)

The brief names six high-intent landing targets. Four do not exist yet. These are the priority build list. Each gets **real, founder-level content** — not a stub with a signup button.

> **Naming note for the build:** the brief lists `/gmat-study-plan` as a target. The repo already ships `/study-schedule` (an interactive schedule generator). To avoid two thin pages competing for the same intent, **`/gmat-study-plan` becomes the SEO content pillar** ("how to build the plan") and **`/study-schedule` stays the tool** ("generate the plan"). They cross-link and canonical to themselves. Do not duplicate the schedule generator onto `/gmat-study-plan`.

### Build priority A — missing high-intent landing pages

#### `/gmat-private-beta`
- **Target query:** "gmat private beta" / "free gmat prep platform" / "gmat practice platform free"
- **Why it ranks/converts:** captures people explicitly looking to try a full platform without paying. This is the cleanest fit for the free-beta-no-card model.
- **Content outline (real value):**
  1. H1: "GMAT Private Beta — the full platform, free, no card."
  2. What you actually get in the beta: 62 chapters across Quant / Verbal / Data Insights, the practice bank (use `QUESTION_CLAIM` from `src/lib/site.ts`, never a hardcoded count), the 6-tag error log, the daily spaced-review queue, the adaptive plan built from your own official-practice-exam baseline, full mocks with mock-to-mock trend, per-topic and per-difficulty analytics.
  3. Honest "what beta means" section: it is free during a private beta, no card required; founding users can reserve early pricing later, but nothing is charged now.
  4. Founder note (Adam, 565 -> 735, built it solo) — the one allowed performance claim, framed as his own result, never generalized.
  5. How onboarding works: you bring your official mba.com practice-exam score as your baseline; the plan adapts to it. (No in-app diagnostic — say so plainly.)
  6. CTA: signup (no card). Secondary: founding-price explainer link to `/pricing`.
- **Conversion events:** `landing_view {page:"gmat-private-beta"}`, `signup`, link to `pricing_view`.

#### `/gmat-mock-review`
- **Target query:** "gmat mock review" / "how to review a gmat practice test" / "gmat mock analysis"
- **Why:** high-intent and under-served — most people take mocks but review them badly. This page teaches the review method, then shows how the platform automates it.
- **Content outline:**
  1. H1: "How to review a GMAT mock so it actually moves your score."
  2. The core method, founder-voice: don't re-grade, re-derive. For every miss, classify it with the 6 tags (Conceptual / Careless / Time Pressure / Misread / Strategy / Other), then separate "didn't know it" from "knew it, lost it."
  3. The timing read: how to read per-section pacing and where time leaked (link to `gmat-quant-timing-strategy`).
  4. Turning one mock into a study queue: feed misses into the error log, let spaced review resurface them.
  5. Mock-to-mock trend: what to compare across mocks (accuracy by topic, by difficulty, by tag) and what noise to ignore.
  6. Product tie-in: the platform's full-length mocks produce per-topic + per-difficulty analytics and a mock-to-mock trend automatically; the error log and spaced-review queue are built in.
  7. CTA: signup. Secondary lead magnet: the error-log template (`/error-log-template`).
- **Conversion events:** `landing_view {page:"gmat-mock-review"}`, `lead_captured`, `signup`.

#### `/gmat-quant-practice`
- **Target query:** "gmat quant practice" / "gmat focus quant practice questions"
- **Content outline:**
  1. H1: "GMAT Quant practice that tells you why you missed it."
  2. What good Quant practice looks like: practice by topic and by difficulty, not random sets; review every miss; track careless vs. conceptual.
  3. The Quant content map: the chapters covered (Quant track), with a real sample — link to `/sample-chapter/quant`.
  4. The misses that actually cost points: number properties, DS logic, careless errors under time pressure (link to `gmat-number-properties-guide`, `gmat-data-sufficiency-strategy-guide`, `gmat-quant-timing-strategy`).
  5. Product tie-in: per-topic + per-difficulty analytics, the 6-tag error log, spaced review on missed Quant items.
  6. CTA: signup. Secondary: read the free Quant sample chapter.
- **Conversion events:** `landing_view {page:"gmat-quant-practice"}`, `signup`.

#### `/gmat-data-insights-practice`
- **Target query:** "gmat data insights practice" / "gmat focus data insights questions"
- **Content outline:**
  1. H1: "GMAT Data Insights practice for the section everyone underprepares."
  2. Why DI is the leverage section on Focus and how it's scored into the total (link to `gmat-focus-exam-structure`).
  3. The five DI question types covered, each with the strategy in one line and a link to the deep post: Data Sufficiency (`gmat-data-sufficiency-strategy-guide`), Multi-Source Reasoning (`gmat-multi-source-reasoning-strategy`), Two-Part Analysis (`gmat-two-part-analysis-strategy`), Graphics Interpretation (`gmat-graphics-interpretation-strategy`), Table Analysis (covered in `gmat-data-insights-complete-guide`).
  4. Real sample — link to `/sample-chapter/data-insights`.
  5. Product tie-in: DI chapters + practice bank, per-type analytics, error log, spaced review.
  6. CTA: signup. Secondary: read the free DI sample chapter.
- **Conversion events:** `landing_view {page:"gmat-data-insights-practice"}`, `signup`.

#### `/gmat-study-plan` (content pillar; distinct from the `/study-schedule` tool)
- **Target query:** "gmat study plan" / "how to make a gmat study plan"
- **Content outline:**
  1. H1: "How to build a GMAT study plan from your own baseline."
  2. Start from your real baseline: take an official mba.com practice exam, read the section breakdown. (No diagnostic claim — your baseline is your own official practice exam.)
  3. Plan by gap, not by syllabus: allocate hours to your weakest topics and the section with the most score leverage (usually where Quant/DI/Verbal stand relative to each other for that person).
  4. The weekly loop: learn -> practice by topic -> error-log every miss -> spaced review -> mock to re-measure.
  5. 3-month vs. shorter timelines (link to `gmat-3-month-study-schedule` and `how-to-build-a-gmat-study-plan-that-works`).
  6. Tool handoff: "Generate your week-by-week version" -> link to `/study-schedule`. Product tie-in: the in-app adaptive plan rebuilds from your baseline and updates as your mocks move.
  7. CTA: signup. Secondary: lead magnet via study-schedule generator.
- **Conversion events:** `landing_view {page:"gmat-study-plan"}`, `signup`.

### Build priority B — additional supporting pages (named in the brief)

#### `/gmat-practice-dashboard` (new)
- **Target query:** "gmat practice dashboard" / "gmat progress tracker" / "gmat analytics"
- **Why:** product-differentiator intent — people searching for tracking/analytics, not just questions. This page sells the instrumentation.
- **Content outline:**
  1. H1: "Your GMAT practice, on one dashboard."
  2. What the dashboard shows (all real features): per-topic accuracy, per-difficulty accuracy, the 6-tag error-log breakdown, the daily spaced-review queue count, mock-to-mock trend, and where the adaptive plan is pointing you next.
  3. How to read it: which number to act on first (your worst-accuracy high-frequency topic), and how the error-log tags tell you whether the fix is learning or focus.
  4. Why a dashboard beats a notebook: the queue and trend update automatically as you practice.
  5. Annotated screenshots/figures of the real dashboard (no fabricated metrics; use representative, clearly-labeled example data).
  6. CTA: signup.
- **Conversion events:** `landing_view {page:"gmat-practice-dashboard"}`, `signup`.

#### `/gmat-quant-study-plan` — decision: **do not build as a separate page (yet).**
- The brief flags it "if separate." It is not separate enough from `/gmat-study-plan` + `/gmat-quant-practice` to justify a distinct URL today; two near-duplicate plan pages would cannibalize each other. Instead, cover Quant-specific planning as a substantial section inside `/gmat-quant-practice` and as a dedicated H2 inside `/gmat-study-plan`. Revisit only if Search Console shows a real, separate "gmat quant study plan" query volume landing on the wrong page; at that point split it out with genuinely Quant-only content (topic sequencing, hours-by-topic, DS-first ordering).

---

## 3. The "real value, no thin pages" rule

A page is **publishable** only if every box is checked:

- [ ] It answers the target query more completely than a stuck test-taker would otherwise find — concrete GMAT strategy a 735-scorer would actually give, not paraphrased generalities.
- [ ] It contains at least one thing the reader can use immediately offline (a method, a checklist, a worked principle, a downloadable, or a tool) — not just a pitch.
- [ ] Product mentions are tied to a real, named feature (62 chapters, the practice bank, the 6-tag error log, spaced-review queue, adaptive plan from the official-practice baseline, full mocks + mock-to-mock trend, per-topic/per-difficulty analytics). No vague "AI-powered" filler.
- [ ] No duplicated body copy across pages. Shared concepts are written once and linked, not pasted.
- [ ] It is not a near-duplicate of an existing URL competing for the same query (no cannibalization).
- [ ] It passes the compliance gate (Section 6).

If a proposed page can't clear all six, it doesn't ship — it becomes a section inside an existing page or a blog post instead.

---

## 4. Internal-linking plan

Goal: concentrate authority on the high-intent landing pages and the signup path, while letting the blog cluster feed them.

### 4a. Hub-and-spoke structure

- **Homepage** links to the core landing pages and `/pricing`.
- **`/resources`** is the tool hub: it links to every free tool and lead magnet (`/error-log-template`, `/study-schedule`, `/score-converter`, the sample chapters, `/exam-day-checklist`) and to `/blog`. New landing pages (`/gmat-private-beta`, `/gmat-mock-review`, `/gmat-quant-practice`, `/gmat-data-insights-practice`, `/gmat-study-plan`, `/gmat-practice-dashboard`) get added to `/resources` on publish.
- **`/blog`** is the editorial hub; posts already auto-relate via `getRelatedPosts()`.

### 4b. Topic clusters (blog post -> money page)

Each landing page is the cluster head; supporting posts link *up* to it with descriptive anchors, and the landing page links *down* to 2-4 posts.

- **Study plan cluster** -> `/gmat-study-plan` + `/study-schedule`
  - `how-to-build-a-gmat-study-plan-that-works`, `gmat-3-month-study-schedule`, `first-30-days-of-gmat-prep`, `why-your-gmat-score-is-stuck`
- **Mock review cluster** -> `/gmat-mock-review`
  - `gmat-focus-official-practice-exams`, `why-your-gmat-score-is-stuck`, `how-to-retake-the-gmat-after-a-low-score`, `gmat-quant-timing-strategy`
- **Quant cluster** -> `/gmat-quant-practice` (+ `/sample-chapter/quant`)
  - `gmat-number-properties-guide`, `gmat-data-sufficiency-strategy-guide`, `gmat-math-formulas-cheat-sheet`, `gmat-quant-timing-strategy`
- **Data Insights cluster** -> `/gmat-data-insights-practice` (+ `/sample-chapter/data-insights`)
  - `gmat-data-insights-complete-guide`, `gmat-multi-source-reasoning-strategy`, `gmat-two-part-analysis-strategy`, `gmat-graphics-interpretation-strategy`, `gmat-data-sufficiency-strategy-guide`
- **Error-log / process cluster** -> `/error-log-template`
  - `why-your-gmat-score-is-stuck`, `how-to-retake-the-gmat-after-a-low-score`, `first-30-days-of-gmat-prep`
- **Exam-structure / context cluster** -> `/gmat-private-beta` and `/gmat-practice-dashboard`
  - `gmat-focus-exam-structure`, `how-the-gmat-focus-adaptive-algorithm-works`, `what-is-a-good-gmat-focus-score`, `gmat-focus-vs-old-gmat-whats-changed`

### 4c. Standing cross-links (every relevant page)

- Every landing page CTA points to **signup** (primary) and **`/pricing`** (founding-price secondary).
- Every tool/lead-magnet page offers its sibling tool (error-log -> study-schedule -> score-converter cross-promote).
- Score-context queries (`/score-by-school`, `what-is-a-good-gmat-focus-score`, `/score-converter`) interlink as a "what's my target / where do I stand" mini-cluster.
- Anchor text is descriptive and varied (e.g., "review a GMAT mock properly", "the 6-tag error log"), never "click here" and never exact-match-spammed.

### 4d. Crawl hygiene

- Add every new public page to `src/app/sitemap.ts` on publish (landing pages priority 0.9, dashboard 0.8, new blog posts 0.7).
- App routes ((app) group) stay blocked in `robots.ts` — no crawl budget wasted on authenticated screens.
- Each page sets a self-referential canonical via `alternates.canonical` (matching the existing convention in `error-log-template`, `score-converter`, `study-schedule`).

---

## 5. On-page checklist (every page, before publish)

For each URL:

- [ ] **Title tag** — under ~60 chars, primary keyword first, brand or value qualifier second. Pattern matches existing pages: `"GMAT Error Log Template — Free Download"`, `"GMAT Score Converter — Focus ↔ Old GMAT"`. No keyword stuffing.
- [ ] **Meta description** — 140-160 chars, specific and benefit-led, includes the primary query naturally, no fabricated claims. Set in the route's `metadata` export.
- [ ] **Canonical** — `alternates: { canonical: "/<path>" }`, self-referential.
- [ ] **One H1** — contains the primary intent in plain language; matches search intent, not a clever-only headline.
- [ ] **Heading hierarchy** — logical H2/H3 covering the sub-questions a searcher has; no skipped levels.
- [ ] **Schema (JSON-LD)** via the existing helpers in `src/lib/structured-data.ts`:
  - Landing/tool pages: `softwareApplicationLd()` where the page describes the product; `breadcrumbLd()` for hierarchy.
  - Blog posts: `articleLd()`.
  - FAQ-bearing pages: `faqPageLd()` (only where the on-page FAQ is real and visible — no hidden FAQ schema).
  - Glossary: `definedTermSetLd()`.
  - `organizationLd()` / `websiteLd()` remain site-wide.
- [ ] **Internal links** — links up to its cluster head and down to 2-4 supporting pages, descriptive anchors (Section 4).
- [ ] **Primary CTA** wired to `signup` (Meta CompleteRegistration); **secondary CTA** to `lead_captured` where a lead magnet exists.
- [ ] **`landing_view`** fires on load with the correct `{page}` prop; `AttributionCapture` first-touch UTM merges automatically.
- [ ] **OpenGraph/Twitter** image + title resolve (site already has `opengraph-image.tsx`).
- [ ] **Marketing counts** pull from `QUESTION_CLAIM` / `QUESTION_CLAIM_SHORT` in `src/lib/site.ts` — never hardcode an exact question or chapter count.
- [ ] **Mobile + Core Web Vitals** — no layout shift on the hero, images sized, CTA above the fold.
- [ ] **Compliance pass** (Section 6) signed off.

---

## 6. Compliance gate (block publish if any fails)

- [ ] Footer (site-wide) carries the nominative-use disclaimer: not affiliated with, endorsed by, or sponsored by GMAC, the GMAT, GMAT Focus, or mba.com.
- [ ] No guaranteed-score language anywhere.
- [ ] No "diagnostic", "free diagnostic", "30-question", "readiness band", "score band", "typically lands", or "most students see/improve" phrasing. The baseline is always described as the user's own official mba.com practice exam.
- [ ] The only performance claim is the founder's own 565 -> 735 / 100th-percentile climb, framed as his result and never generalized to other students. (Keep "100th percentile" — backed by `public/score-report.png`.)
- [ ] No fabricated testimonials, student counts, urgency timers, or fake scarcity.
- [ ] Pricing copy is accurate: free during private beta (no card); founding $399 anchored to the $599 mentorship tier; referral = friend gets founding price, referrer gets $50.
- [ ] No emojis anywhere on the page.

---

## 7. Build order (recommended)

1. `/gmat-private-beta` — closest match to the free-no-card hook; highest-converting cold intent.
2. `/gmat-mock-review` — under-served high-intent query with strong founder-method content.
3. `/gmat-quant-practice` and `/gmat-data-insights-practice` — section-intent capture, reuse the sample chapters already live.
4. `/gmat-study-plan` — content pillar handing off to the existing `/study-schedule` tool.
5. `/gmat-practice-dashboard` — differentiator page; build once dashboard screenshots are export-ready.
6. Backfill internal links from the blog clusters (Section 4b) and register every new URL in `src/app/sitemap.ts`.

---

**Notes for whoever builds this**

Created files referenced (all absolute):
- Plan document: `/Users/adam/gmat-platform/SEO_PAGE_PLAN.md` (this file)

Existing code the plan depends on:
- Marketing routes: `/Users/adam/gmat-platform/src/app/(marketing)/`
- Blog registry: `/Users/adam/gmat-platform/src/lib/blog-posts.ts`
- Sitemap: `/Users/adam/gmat-platform/src/app/sitemap.ts`
- Schema helpers: `/Users/adam/gmat-platform/src/lib/structured-data.ts`
- Marketing-count + contact constants: `/Users/adam/gmat-platform/src/lib/site.ts`

Pages confirmed missing and scheduled to build: `/gmat-study-plan`, `/gmat-private-beta`, `/gmat-mock-review`, `/gmat-data-insights-practice`, `/gmat-quant-practice`, plus the new `/gmat-practice-dashboard`. Pages confirmed live and reused: `/error-log-template`, `/study-schedule`, `/score-converter`, `/sample-chapter/*`, `/pricing`, `/refer`, `/resources`, `/blog` (+ 22 posts).
