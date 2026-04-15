# Handoff — GMAT Platform

This file exists so a fresh Claude chat can pick up exactly where the previous one left off. Read it first, then continue.

## The project

A Next.js 16.2.3 (App Router, Turbopack, React 19) premium SaaS platform for a GMAT prep course by Adam Zakarian (scored 735 / 100th percentile, non-native speaker). Built with TypeScript, Tailwind v4, shadcn/ui, Recharts, Framer Motion, Supabase + Stripe scaffolding.

**Design system:** dark theme with gold accent.
- `#C9A84C` gold, `#E8C97A` light gold
- `#0A0A0A` / `#111111` / `#1A1A1A` backgrounds
- `#F0F0F0` / `#888888` / `#555555` text
- `#3ECF8E` success, `#FF4444` error

**NOTE:** `AGENTS.md` says "this is NOT the Next.js you know — APIs may differ from your training data." If you hit issues, read the relevant doc in `node_modules/next/dist/docs/`.

## What's done (DO NOT redo)

### Original content in `src/content/`
- **154 practice questions** across 12 markdown files (all 100% original, no copyright from any source):
  - Quant: `arithmetic.md` (12), `algebra.md` (12), `word-problems.md` (12), `number-properties.md` (8), `statistics-probability.md` (8) — **52 total**
  - Verbal: `critical-reasoning.md` (30), `reading-comprehension.md` (20 across 5 original passages) — **50 total**
  - DI: `data-sufficiency.md` (15), `multi-source-reasoning.md` (9), `table-analysis.md` (10), `graphics-interpretation.md` (10), `two-part-analysis.md` (8) — **52 total**
- **8 lesson modules** in `src/content/lessons/` (01–08, each 45–120 min).
- **6 study guides** in `src/content/guides/`: quant formula sheet, verbal strategy guide, DI strategy guide, error log template, pacing guide, test day checklist.

### Content loader `src/lib/content.ts`
Zero-dependency frontmatter parser. Public API:
- `getAllQuestions()`, `getQuestionsBySection(section)`, `getQuestionsByTopic(topic)`, `getQuestionsByDifficulty(difficulty)`, `getQuestionsBySetSlug(slug)`
- `getAllLessons()`, `getLessonBySlug(slug)`, `getLessonByModule(module)`
- `getAllGuides()`, `getGuideBySlug(slug)`
- `getQuestionSets()` — one summary per markdown file `{slug, section, topic, count}`, sorted Quant → Verbal → DI
- `getContentStats()` — counts, by section, by difficulty
- Handles both `## Q1` and `### Q1` (nested under RC passages / MSR sets)
- **Context-aware parsing**: RC passages and MSR sets attach their shared prose (passage text, or Tab 1/2/3 reference material) to EVERY question in the group via `ParsedQuestion.context`, not just the first. The parser detects `## Passage N:` / `## Set N:` headers, extracts everything before the first `### Qn`, and reuses that as the running context until a new group header appears.
- Each `ParsedQuestion` now has a `setSlug` field pointing to its source file (e.g. `"reading-comprehension"`).

### Pages wired to real content (previous session)
- **`src/app/(app)/lessons/page.tsx`** — now a server component that calls `getAllLessons()`, synthesizes status (first 2 done, 3rd current, rest locked), passes data to `LessonsClient`.
- **`src/app/(marketing)/course/page.tsx`** — derives modules from `getAllLessons()` with a `topicsByModule` record; uses `getContentStats()` for the "X original practice questions" copy.
- **`src/app/(app)/practice/page.tsx`** — server component that calls `getQuestionSets()` and passes to `PracticeClient`. One row per markdown file.
- **`src/app/(app)/dashboard/page.tsx`** — "Recommended Next" card pulls from `getAllLessons()[2]` (mirrors the lessons page's "current" marker).

### Practice session player (this session — Option A)
Route: `/practice/session/[slug]`. Click any "Start" button on `/practice` to enter.
- **`src/app/(app)/practice/session/[slug]/page.tsx`** — server component; loads questions via `getQuestionsBySetSlug`, filters out questions with 0 parseable options (Two-Part Analysis — needs a custom UI), shows a fallback screen if nothing is playable.
- **`src/app/(app)/practice/session/[slug]/SessionClient.tsx`** — client component with per-question state, session timer, submit → explanation flow, results screen with Review list and Retake button.
- **Passage / set context panel**: when a question has `context` (RC passages, MSR sets), the screen splits into a 2-column layout on `lg+` with a scrollable Reference panel on the left and the question on the right. The context panel strips the leading `## Passage N:` / `## Set N:` / `### Tab N:` headings so it reads like a real test.
- **Markdown table awareness**: `PromptBlock` detects lines starting with `|` and switches to a monospace `<pre>` block. Good enough for v1 — Table Analysis and MSR tables render readable but not beautiful. A real markdown renderer is a v2 upgrade.
- **Verified** end-to-end in the preview server for: algebra (simple ## Qn), reading-comprehension (passages 1 → 2 context swap works), multi-source-reasoning (sets 1 → 2 context swap works), table-analysis (monospace tables), graphics-interpretation, critical-reasoning, number-properties (results screen), two-part-analysis (0-options fallback).
- **Wire-up**: the "Start" button in `PracticeClient.tsx` is now a `<Link href={/practice/session/${set.slug}}>`.

### Lesson detail pages (this session — Option B)
Route: `/lessons/[slug]`. Click any unlocked card on `/lessons` to enter.
- **`src/app/(app)/lessons/[slug]/page.tsx`** — server component; loads the lesson via `getLessonBySlug`, 404s if missing, and pre-generates all 8 lesson pages at build time via `generateStaticParams`. Renders the markdown body inside a styled `<article>` using `react-markdown` + `remark-gfm`, with a custom `components` map that maps every element (`h1..h4`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `hr`, `blockquote`, inline+block `code`, `pre`, `a`, GFM `table`/`thead`/`th`/`td`) to Tailwind classes using the existing dark+gold tokens.
- **Page chrome**: back link → `/lessons`, module/section/duration meta row, h1 + description, then the article card, then a bottom prev/next nav strip that links to the adjacent lessons (module 01 has no prev, module 08 has no next).
- **Dependencies added**: `react-markdown@10.1.0` and `remark-gfm@4.0.1` (served server-side so there's no client bundle cost).
- **`LessonsClient.tsx` wire-up**: the card body is now wrapped in `<Link href={/lessons/${slug}}>` when `status !== "locked"`, else a plain `<div>` (no href, 50% opacity). The "Start" / "Review" call-to-action is now a `<span>` inside the outer link — no nested `<button>` to compete with the card-level click target.
- **Verified** in the preview server: `/lessons/01-mindset-reset` renders the full markdown tree correctly (h1/h2/h3, paragraphs, `**bold**`, `*italic*`, `-` bullets, `1.` numbered lists, `---` hr), styling confirmed via `preview_inspect` (h2 = 20px/700/`#F0F0F0`, p = 15px/`#D8D8D8`, article bg = `#111111`). Card wiring confirmed via `preview_eval`: modules 01–03 render as `<a>` with `/lessons/<slug>` hrefs at opacity 1, modules 04–08 render as `<div>` with no href at opacity 0.5. Navigated to `/lessons/03-quant-mastery` and confirmed prev = Diagnostic Deep Dive, next = Verbal Precision.

### Build status
Last `npx next build` compiled clean in 2.4s (Vercel: ~14s on cold cache). 27 routes: 18 static + 8 SSG lesson pages (`/lessons/[slug]`) + 1 dynamic (`/practice/session/[slug]`). Zero TS errors, zero lint errors. **Live at https://gmat-platform-61zf.vercel.app/** — Vercel project `gmat-platform-lcwy` (Hobby, `adamik771's projects`). Verified end-to-end: `/`, `/practice`, `/practice/session/algebra`, `/practice/session/reading-comprehension`, `/pricing`. Lesson pages verified locally; waiting on the next Vercel redeploy for prod confirmation. GitHub integration means every push to `main` auto-redeploys.

## What's next

User directive (most recent): "do in order, but lets also prepare to change the context window" — meaning execute these in sequence, keeping this HANDOFF.md updated between stages so a fresh session can pick up.

1. **Option A — Practice session player.** ✅ Done (see above).

2. **Option C — Deploy to GitHub + Vercel.** ✅ Done.
   - Git: `main` branch pushed to `https://github.com/adamik771/gmat-platform` via HTTPS + a classic PAT (`repo` scope). Credential cached in macOS keychain for subsequent pushes. `gh` CLI is NOT installed on this machine — Adam created the empty repo via the github.com/new browser flow, then we added the remote and pushed.
   - Vercel: project imported via the web UI flow at vercel.com/new. Hobby tier, team `adamik771's projects`, project name `gmat-platform-lcwy` (Vercel auto-added the `-lcwy` suffix to avoid collision with other `gmat-platform.vercel.app` subdomains). Framework preset: Next.js, root `./`, no env vars set. GitHub integration is wired, so every push to `main` auto-redeploys.
   - **First deploy failed** on `Collecting page data` with `Error: Failed to collect configuration for /pricing` → `[cause]: Error: Neither apiKey nor config.authenticator provided`. Root cause: `src/lib/stripe.ts` instantiated `new Stripe(process.env.STRIPE_SECRET_KEY!)` at module load, so importing `STRIPE_PRICES` (which `pricing/page.tsx` does) dragged the constructor into the static build path and crashed because STRIPE_SECRET_KEY is unset on Vercel. Fix (commit `cc76535`): replaced the eagerly-instantiated singleton with a `getStripe()` lazy getter that only throws when actually called. Verified with `env -u STRIPE_SECRET_KEY -u NEXT_PUBLIC_SUPABASE_URL -u NEXT_PUBLIC_SUPABASE_ANON_KEY npx next build` — all 19 routes generate cleanly.
   - **`supabase.ts` has the same bug pattern** (module-level `createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, ...)`) but nothing currently imports it, so it's not a build blocker. Apply the same lazy-getter fix the moment any page imports it.

3. **Option B — Individual lesson pages** at `/lessons/[slug]` with a markdown renderer. ✅ Done (see above).

4. **Option D — Clean up remaining hardcoded mock data**. NEXT.
   - Dashboard: `recentActivity`, `recentMistakes`, weekly stats (18.5 hrs / 142 / 73% / 14 days), score goals (565 → 735 / 65% / +55), section progress cards.
   - Practice: stats row (1,247 / 73% / 1m 52s), "142 questions this week" subheader, `accuracyTrend` + `byType` charts in `PracticeClient.tsx`.
   - None of this can be real until there's actual user-progress state, so the deliverable here is probably "replace with neutral placeholders or empty states" rather than "wire real data." Confirm the copy-direction with Adam before editing — "empty state" vs "sample data with an explicit disclaimer" are both defensible and he may have a preference.

## Context links

- **Previous plan:** `/Users/adam/.claude/plans/jaunty-brewing-hamster.md` (content creation plan, now fully executed).
- **Full prior transcripts:**
  - `/Users/adam/.claude/projects/-Users-adam/f7c93392-2d9e-4c18-9dbb-d09d45d5339b.jsonl` (content creation session)
  - `/Users/adam/.claude/projects/-Users-adam/94ec7859-29b8-452b-94c4-d51939e659fe.jsonl` (page-wiring + start of session player)
- **Types:** `src/types/index.ts` — has `Section = "Quant" | "Verbal" | "DI"`, `Difficulty = "Beginner" | "Intermediate" | "Advanced"`, `Question`, `Lesson`, etc.
- **Existing scaffolding:** `src/lib/{supabase,stripe,utils}.ts`, `src/components/{shared,marketing,dashboard}/*`.

## One last thing

Do NOT create docs or README files unless explicitly asked. Do NOT add emojis to files. Do NOT commit unless asked.
