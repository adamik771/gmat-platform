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

**Questions: 443 total** (up from 154 at session start — all 100% original, no copyright):
- Quant (171): `arithmetic.md` (20), `algebra.md` (20), `word-problems.md` (20), `number-properties.md` (20), `statistics-probability.md` (20), `geometry.md` (20), `rates-work.md` (18), `ratios-percents.md` (18), `exponents-roots.md` (15)
- Verbal (127): `critical-reasoning.md` (75 across 9 CR types), `reading-comprehension.md` (52 across 13 original passages)
- DI (145): `data-sufficiency.md` (45), `multi-source-reasoning.md` (15 across 5 sets), `table-analysis.md` (35), `graphics-interpretation.md` (35), `two-part-analysis.md` (15)

**Lessons: 8 modules, 35,404 words** (up from ~11,400):
- M01 Mindset Reset (4,509w), M02 Diagnostic Deep Dive (3,991w), M03 Quant Mastery (4,769w), M04 Verbal Precision (5,053w), M05 Data Insights (4,975w), M06 Mock Exam Strategy (5,658w), M07 The Final Week (4,050w), M08 Bonus — For Non-Native Speakers (2,399w)

**Guides: 6 reference docs, 18,279 words** (up from ~10,100):
- Topic guides at ~4,000w each: `quant-formula-sheet.md` (4,040), `verbal-strategy-guide.md` (4,060), `di-strategy-guide.md` (4,114)
- Tactical guides at ~2,000w each: `pacing-guide.md` (1,986), `test-day-checklist.md` (2,031), `error-log-template.md` (2,048)

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
- **Update (commit `590be0c`)**: `PromptBlock` now renders all session text (prompts, options, passages, MSR reference tabs, explanations) through `react-markdown` + `remark-gfm` instead of the monospaced `<pre>` fallback. Table Analysis and Multi-Source Reasoning tables now render as real `<table>/<thead>/<th>/<td>` HTML with dark+gold styling (uppercase muted headers, tight dividers, bordered container with horizontal overflow). The custom components map is tuned compact for the session UX (`first:mt-0` / `last:mb-0` on paragraphs and lists so option buttons don't get surprise vertical padding, inline code in gold, block code in a dark rounded `<pre>`, prose headings smaller than the `/lessons/[slug]` ones). Verified in the preview server for table-analysis (1 real `<table>`, 5 `<th>`, 25 `<td>`, 0 `<pre>` fallbacks), multi-source-reasoning (1 table in context panel + 12 prose paragraphs), and algebra (no regression — prompt + 5 options + Submit all intact). Production confirmed via WebFetch on `/practice/session/table-analysis`.

### Two-Part Analysis custom UI (commit `89d4b61`)
The 8 Two-Part Analysis questions previously fell back to a "not supported" screen because they had no A-E options. Now fully playable with a custom 2-column answer grid.
- **Parser (`src/lib/content.ts`)**: detects pipe tables in TPA blocks, extracts `twoPartColumns` and row labels, strips the table from the prompt, sets `options = rows` (so they pass the "playable" filter), and parses the answer string (handles comma-embedded values like `$60,000` via a lookahead split) into `twoPartCorrectAnswers` indices. Verified all 8 questions parse correctly via a tsx script.
- **SessionClient**: new `TwoPartGrid` component renders a bordered table with gold column headers and one radio circle per cell. States: gold (selected), green (correct+submitted), red (incorrect+submitted), green checkmark (missed correct). `QuestionState` extended with `twoPartSelections: (number | null)[]`. `isQuestionCorrect()` and `canSubmit()` helpers centralize TPA vs regular logic. Conditional rendering: `current.twoPartColumns` → grid, else → A-E buttons.

### Supabase Auth + practice progress persistence (commits `b16fbe6` → `934d914`)
Replaces the placeholder auth scaffolding with real Supabase Auth and adds a full practice-session persistence pipeline. Every empty state on the dashboard now becomes real data after a user completes a session.
- **Supabase project**: `https://jzriuauhmsqpfpzaclvm.supabase.co`, Adam's personal project on the Hobby tier. Tables `practice_sessions` and `practice_attempts` created via SQL migration (see docs below) with RLS policies restricting users to their own rows.
- **Three Supabase client factories** using `@supabase/ssr` (`src/lib/supabase/{server,browser,proxy}.ts`): lazy, per-request server client; singleton browser client; proxy-layer client that reads/writes cookies on `NextRequest`/`NextResponse` and forwards cache-busting headers.
- **`src/proxy.ts`** — Next.js 16 convention (`middleware.ts` → `proxy.ts`, exported fn named `proxy`, not `middleware`). Confirmed in `node_modules/next/dist/docs/.../proxy.md`. Redirects unauthenticated users from `(app)` routes to `/login` and authenticated users from `(auth)` routes to `/dashboard`. Has a guard that falls through to `NextResponse.next()` if env vars are missing or Supabase is unreachable, so the site doesn't 500 on every route. Sets `Cache-Control: private, no-store` on all proxy responses to prevent CDN cache leaks between users.
- **Login/signup pages**: wired to `signInWithPassword` / `signUp` (with `full_name` + `plan` in `user_metadata`). `window.location.origin + "/auth/callback"` as `emailRedirectTo`.
- **App layout**: `handleSignOut()` calls `supabase.auth.signOut()`. User name + initials pulled from `user_metadata.full_name` on mount (replaces hardcoded "AZ"/"Adam").
- **Auth callback route** `src/app/auth/callback/route.ts`: exchanges email-confirmation code for a session.
- **API route** `src/app/api/practice-sessions/route.ts`: POST endpoint that inserts a session + per-question attempts. Auth verified via `getUser()`.
- **SessionClient**: `useEffect` on `showResults` fires a `fetch("/api/practice-sessions", ...)` call with a `saved` flag to prevent double-posting.
- **Dashboard (`src/app/(app)/dashboard/page.tsx`)**: now a resilient server component. Queries Supabase for weekly metrics (questions, hours, accuracy), per-section accuracy from attempts, recent sessions for the activity feed, and an 8-week accuracy trend for the score chart. All wrapped in try/catch so the dashboard degrades to empty states if Supabase is unavailable. Personalized greeting from `user.user_metadata.full_name`.
- **`src/lib/supabase/browser.ts`** hoists env var lookups to module-level constants (not inside the function body) to ensure Next.js reliably inlines them into the client bundle at build time.
- **Env var setup**: `NEXT_PUBLIC_SUPABASE_URL` and `NEXT_PUBLIC_SUPABASE_ANON_KEY` set in Vercel for all three environments. Also in `.env.local` for local dev.
- **Verified**: local dev — full signup → SQL-confirm email → login → complete practice session → dashboard shows 1 session, 12 questions, 100% accuracy, activity feed has the session. Production — `/dashboard` redirects to `/login` (auth enforced), login page's client bundle has the Supabase URL baked in.

### Production deployment hiccup — IMPORTANT

**Vercel's GitHub auto-deploy silently stopped** partway through this session. Pushes to `main` were landing on GitHub but Vercel's Deployments tab wasn't picking them up, so the production alias (`gmat-platform-61zf.vercel.app`) stayed frozen on commit `89d4b61` for ~23 hours. The fix:
1. `npx vercel build --prod --yes` (builds locally with env vars pulled from Vercel)
2. `npx vercel deploy --prebuilt --prod --yes` (uploads the prebuilt output)
3. `npx vercel alias set <new-deployment-url> gmat-platform-61zf.vercel.app` (updates the main alias)

**Root cause not diagnosed** — might be a GitHub webhook issue on Vercel's side, or a Hobby-tier deploy cap, or the GitHub integration needing reconnection. **If this recurs**: check Vercel Deployments tab vs `npx vercel ls gmat-platform --prod` (the CLI shows the truth). If pushes aren't deploying, use the CLI sequence above. Also: `NEXT_PUBLIC_*` vars are inlined at build time, so env var changes require a fresh build (not just a redeploy from cache).

**Second trap encountered** — Vercel's env var input silently truncated the Supabase anon key from 208 chars to 70 when pasted via the UI (the form field didn't complain, the "saved" indicator appeared as normal). This produced a cryptic "Invalid API key" error from Supabase with no hint about key length. **If this recurs**: `npx vercel env pull .env.check --environment=production --yes` and inspect the pulled value's length — if it's under 200, the key is truncated. Remove via `npx vercel env rm NEXT_PUBLIC_SUPABASE_ANON_KEY production` and re-add via CLI (`echo "$FULL_KEY" | npx vercel env add NEXT_PUBLIC_SUPABASE_ANON_KEY production`). `src/lib/supabase/browser.ts` now validates the key length + `eyJ` prefix and throws a clear error if truncation is detected — so if it ever happens again, the error message tells you exactly what's wrong.

**Third trap** — after fixing the env var and redeploying, Adam's browser kept serving the old "Invalid API key" error even after incognito + hard refresh. Cause: Vercel's CDN cached the old `/login` HTML (with references to old chunk filenames) at the user's edge, and the edge didn't invalidate immediately when I re-aliased. **Fix**: make a meaningful code change (not just an empty commit) so Turbopack generates a new chunk hash, forcing the HTML to reference a NEW filename the browser hasn't cached. A comment change alone doesn't always work — Turbopack may hash based on minified output.

**Fourth trap — THE BIG ONE** — Adam's Vercel account had **four separate projects** for the same repo: `gmat-platform`, `gmat-platform-61zf`, `gmat-platform-gz1e`, `gmat-platform-lcwy`. Each created from a separate "Import Git Repository" action with slightly different suggested names. The public URL `gmat-platform-61zf.vercel.app` is served by the `gmat-platform-61zf` project, but Adam added env vars on a different project (`gmat-platform`), so the Serving project had zero env vars. Every time I CLI-deployed to `gmat-platform` and aliased to the public URL, the `gmat-platform-61zf` project's own GitHub auto-deploy would kick in seconds later, rebuild without env vars, and overwrite the alias. Took the whole session to notice this pattern. **Recognition heuristics**:
- The deploy URL pattern contains a project-specific suffix (`gmat-platform-XXX-<hash>...`); if the XXX doesn't match what you expect, you're on the wrong project
- `npx vercel projects ls` shows all projects in the team — if there are multiple with the same base name, the one matching the public URL's subdomain owns it
- Check `.vercel/project.json` — `projectName` there is where CLI deploys go

**Fix**: `rm -rf .vercel && npx vercel link --project <correct-project-name> --yes`, then set env vars on that project via CLI (`echo "$KEY" | npx vercel env add NAME production`), then deploy. The `gmat-platform-61zf` project is now the canonical one with env vars set. Adam should delete `gmat-platform`, `gmat-platform-gz1e`, and `gmat-platform-lcwy` via the Vercel dashboard (Settings → Advanced → Delete Project) to avoid this confusion recurring.

### Lesson detail pages (this session — Option B)
Route: `/lessons/[slug]`. Click any unlocked card on `/lessons` to enter.
- **`src/app/(app)/lessons/[slug]/page.tsx`** — server component; loads the lesson via `getLessonBySlug`, 404s if missing, and pre-generates all 8 lesson pages at build time via `generateStaticParams`. Renders the markdown body inside a styled `<article>` using `react-markdown` + `remark-gfm`, with a custom `components` map that maps every element (`h1..h4`, `p`, `ul`, `ol`, `li`, `strong`, `em`, `hr`, `blockquote`, inline+block `code`, `pre`, `a`, GFM `table`/`thead`/`th`/`td`) to Tailwind classes using the existing dark+gold tokens.
- **Page chrome**: back link → `/lessons`, module/section/duration meta row, h1 + description, then the article card, then a bottom prev/next nav strip that links to the adjacent lessons (module 01 has no prev, module 08 has no next).
- **Dependencies added**: `react-markdown@10.1.0` and `remark-gfm@4.0.1` (served server-side so there's no client bundle cost).
- **`LessonsClient.tsx` wire-up**: the card body is now wrapped in `<Link href={/lessons/${slug}}>` when `status !== "locked"`, else a plain `<div>` (no href, 50% opacity). The "Start" / "Review" call-to-action is now a `<span>` inside the outer link — no nested `<button>` to compete with the card-level click target.
- **Verified** in the preview server: `/lessons/01-mindset-reset` renders the full markdown tree correctly (h1/h2/h3, paragraphs, `**bold**`, `*italic*`, `-` bullets, `1.` numbered lists, `---` hr), styling confirmed via `preview_inspect` (h2 = 20px/700/`#F0F0F0`, p = 15px/`#D8D8D8`, article bg = `#111111`). Card wiring confirmed via `preview_eval`: modules 01–03 render as `<a>` with `/lessons/<slug>` hrefs at opacity 1, modules 04–08 render as `<div>` with no href at opacity 0.5. Navigated to `/lessons/03-quant-mastery` and confirmed prev = Diagnostic Deep Dive, next = Verbal Precision.

### Mock data cleanup (this session — Option D)
All the hardcoded user-progress numbers on the dashboard and practice pages are gone. Widgets now render honest "no data yet" states until real progress tracking lands. Surrounding layouts are untouched so real numbers can slot in later without a redesign.
- **New `src/components/shared/EmptyState.tsx`** — reusable dashed-border card with icon / title / description / optional CTA link. Used across dashboard widgets, activity feed, and practice charts. Two sizes (`sm` for inside-chart, `md` for full-card).
- **Widget updates (dashboard components)**: `MetricCard.value` now accepts `null` → renders `—` + hides the trend indicator. `SectionProgress` has a new `empty` prop → renders `— / 90` + empty progress bar + "No data yet". `ActivityFeed` renders an inline `EmptyState` with a "Start practicing" CTA when `items.length === 0`. `ScoreChart.data` is now a prop (was a hardcoded module constant) and falls back to an inline empty-state card when `data.length === 0`.
- **Dashboard page** (`src/app/(app)/dashboard/page.tsx`): removed the `recentActivity` and `recentMistakes` mock arrays. Score Goal card shows `—` for both estimated and target scores with a "Take diagnostic" CTA and helper copy. All 4 weekly `MetricCard`s, all 3 `SectionProgress` cards, and the `ScoreChart` are empty. Activity feed receives `items={[]}`. Recent Mistakes is now an `EmptyState` linking to `/error-log`. Recommended Next is unchanged (it was never mock — comes from `getAllLessons()`) and is now a `<Link>` to `/lessons/<slug>`.
- **Practice page** (`src/app/(app)/practice/PracticeClient.tsx`): removed the `accuracyTrend` and `byType` mock arrays plus the Recharts imports they pulled in. Subheader is now a real derived count (`154 questions across 12 sets` from the `sets` prop) instead of "142 questions this week". The 3 stat cards show `—`. Both chart panels are replaced with `EmptyState` components inside the same card shells. The 12 practice-set links are unchanged.
- **Verified**: local `next build` clean in 2.3s (27 routes, no TS/lint errors); preview server console clean for both `/dashboard` and `/practice`; production verified via WebFetch on both pages — dashboard shows em-dashes + three empty-state panels + "Take diagnostic" CTA, practice shows "154 questions across 12 sets" + three em-dashes + two "Not enough data yet" chart panels + 12 practice sets (Quant 5, Verbal 2, DI 5).

### Build status
Last `npx next build` compiled clean. Routes: 18 static + 8 SSG lesson pages (`/lessons/[slug]`) + 1 dynamic (`/practice/session/[slug]`). Zero TS errors, zero lint errors. **Live at https://gmat-platform-61zf.vercel.app/** — served by the `gmat-platform-61zf` Vercel project (Hobby, `adamik771's projects`). Supabase Auth live; all env vars on the correct project. Verified end-to-end: route protection, signup + login, practice session persistence (writes to `practice_sessions` + `practice_attempts` Supabase tables), dashboard displays real aggregated stats from user sessions. GitHub integration means every push to `main` auto-redeploys to `gmat-platform-61zf`.

### Massive content expansion (late session — content-focused sprints)
Final commit series (`2787908` → `c693ad2`, 12 commits) tripled the content footprint:
- **Questions: 154 → 443** (+289 questions across 3 sections, all original). 16 practice sets on `/practice`.
- **Lessons: 11,400 → 35,404 words** (+24k words). All 8 modules are substantive; M03/M04/M05 flagship topic lessons at ~5k words each with worked examples and tactical recipes.
- **Guides: 10,100 → 18,279 words** (+8k words). Topic guides (Quant Formulas, Verbal Strategy, DI Strategy) at ~4k each; tactical guides (Pacing, Test Day, Error Log) at ~2k each.
- New Quant topic files added: `geometry.md`, `rates-work.md`, `ratios-percents.md`, `exponents-roots.md`.
- All content parses cleanly through the loader. Build stays clean. Everything pushed to `main` and live (or will be live on next Vercel pickup from `gmat-platform-61zf`).

### Stripe checkout (this session)
Wires the pricing-page CTAs to real Stripe Checkout. Needs Adam to provide real price IDs + `STRIPE_SECRET_KEY` + `STRIPE_WEBHOOK_SECRET` before actual charges can happen — the scaffolding returns a clear 503 with an actionable message until those env vars are set.
- **`src/app/api/checkout/route.ts`** (new) — POST, auth-gated. Body: `{ planId: "self_study" | "self_study_plus" | "coaching" | "intensive" }`. Maps `planId` → priceId via `STRIPE_PRICES`; rejects placeholder prices with a clean 503. Creates a Stripe Checkout Session in `payment` mode (one-time charges, not subscriptions — matches the existing pricing page copy of "$297 one-time" / "$2,500 package"). Sets `client_reference_id = user.id`, metadata `{user_id, plan_id}`, and success/cancel URLs derived from `new URL(request.url).origin` so the same handler works across dev / preview / prod. Returns `{ url }` for the client to navigate to.
- **`src/app/api/stripe/webhook/route.ts`** (new) — POST with `runtime = "nodejs"` (Stripe's `constructEvent` needs the Node crypto module, not Edge) and `dynamic = "force-dynamic"`. Reads the raw body via `request.text()` before any JSON parse so the signature check has exact bytes. On `checkout.session.completed`, upserts into `purchases` with `onConflict: "stripe_session_id"` so Stripe's retry behavior is safe. Bad signature → 400. Missing metadata → accepted (`{ok, skipped: "missing_metadata"}`) so Stripe doesn't retry forever.
- **`src/lib/supabase/service.ts`** (new) — service-role client factory reading `SUPABASE_SERVICE_ROLE_KEY` (never prefixed `NEXT_PUBLIC_`). Used only by the webhook where there's no user session; bypasses RLS. File header includes a sharp "do NOT import from pages, client components, or anywhere a request body can influence which user_id is written to" warning so future work doesn't misuse it.
- **`src/components/marketing/CheckoutButton.tsx`** (new) — replaces the static `<Link href="/signup">` inside `PricingCard`. On click: POST → if 401, navigate to `/signup?redirect=/pricing` (so the user lands back on the same page after signup); if 200, hard-navigate to `body.url` (Stripe-hosted checkout is on a different origin). Inline error message on 503/500. Loading spinner + `disabled` while in flight.
- **`src/components/marketing/PricingCard.tsx`** — swaps the `<Link>` CTA for `<CheckoutButton planId={tier.id} />`. The `SubscriptionTier` union already matched the planId set so no type gymnastics.
- **`src/app/(auth)/signup/page.tsx`** — honors `?redirect=` via `useSearchParams`, gated through an `ALLOWED_REDIRECTS = { "/pricing", "/dashboard" }` allow-list (prevents open-redirect). Wrapped in `<Suspense>` since `useSearchParams` triggers a client-side bailout on static prerender (build caught this: `useSearchParams() should be wrapped in a suspense boundary`).
- **Dashboard current-plan chip** — extra Supabase query on the dashboard for the user's most-recent `purchases` row (one-time payments mean users may upgrade later; we show the latest). Renders as a small gold chip in the greeting row, e.g. "Coaching Plan", only when a purchase exists.
- **Stripe scale note** — the existing `STRIPE_PRICES` helper in `src/lib/stripe.ts` uses `??` to fall back to string literals like `"price_self_study"`. The checkout route detects that pattern and returns a 503 before hitting the Stripe API, so Adam gets an actionable error in the UI instead of Stripe's generic "No such price". Once real price IDs land in env, the 503 goes away automatically.
- **Verified**: `npx next build` clean after adding the Suspense boundary — `/api/checkout` and `/api/stripe/webhook` registered as dynamic routes. Preview browser test (signed-in user on `/pricing`): clicked "Get Self-Study" → POST → 503 → inline error "Stripe prices are not configured…" rendered under the button. `curl -X POST /api/checkout` unauth → 401. `curl /signup?redirect=/pricing` → 200. No console errors.

### Error tag breakdown card (this session)
Top-of-page breakdown on `/error-log` now toggles between a Section cut and a Tag cut, giving the user a direct view on *why* they're missing questions once they start tagging.
- **`BreakdownCard` client component** (`src/app/(app)/error-log/BreakdownCard.tsx`) — 7-cell grid in Tag mode (6 defined tags + "Untagged" bucket) or 3-cell in Section mode. Two-button toggle at the top-right of the card; `view` state is client-only. Cell cards re-use the same compact layout as before (colored chip → count → thin progress bar → "X% of mistakes").
- **Server aggregation** (`src/app/(app)/error-log/page.tsx`) — both `sectionBreakdown` and `tagBreakdown` computed eagerly from the enriched `mistakes` array and passed as props. Tag aggregation iterates `[...ERROR_TAGS, "Untagged"]` so the bucket counts every mistake exactly once. Subhead now reads `N mistakes logged · M reviewed` so users can see tagging progress at a glance.
- **Shared constants extracted** (`src/app/(app)/error-log/constants.ts`) — `ERROR_TAGS` and `ErrorTag` moved to a plain module. Turbopack's client-boundary handling drops non-component exports from `"use client"` modules during static prerender (Adam hit this: first build errored with `g.ERROR_TAGS is not iterable`). `ErrorLogClient` re-exports them for backward compatibility, but `page.tsx` and `BreakdownCard.tsx` now import directly from `./constants`.
- **Verified**: `npx next build` clean after the constants extraction. Preview browser: Section view showed 3 cells (Quant 11 / Verbal 0 / DI 0); toggle to Tag view swapped to 7 cells with 11 Untagged at 100% since the `error_tags` table is still missing in Supabase; subhead read `11 mistakes logged · 0 reviewed`; no console errors.

### Error tagging UI (this session)
Extends `/error-log` with persistent tagging, per-mistake notes, and a reviewed flag. Replaces the "coming soon" footer with a real workflow. New `error_tags` table (see migration section below) with RLS; table has `attempt_id` as primary key so one tag row per attempt, upsert on that.
- **`src/app/api/error-tags/route.ts`** (new) — POST and DELETE. POST accepts `{ attemptId, tag?, notes?, reviewed? }` as a partial patch (omitted fields don't overwrite). Verifies the attempt belongs to the user before writing, returning 404 if not (belt-and-braces with RLS). `tag` is validated against the 6-element `VALID_TAGS` union: `Conceptual | Careless | Time Pressure | Misread | Strategy | Other`. DELETE removes all tag metadata for an attempt.
- **Server query enrichment** (`src/app/(app)/error-log/page.tsx`) — second Supabase query fetches `error_tags` for the user; builds `Map<attempt_id, row>`; merges into each `MistakeEntry` as `{ tag, notes, reviewed }`. Doing this as a separate query (vs an FK join) sidesteps Supabase relationship-cache edge cases. Still wrapped in the outer try/catch so the page degrades gracefully if the table is missing — Adam saw this firsthand during verification (11 rows rendered with all-null tags / reviewed=false, POST returned 500 with a clear schema-cache message).
- **Row layout** (`src/app/(app)/error-log/ErrorLogClient.tsx`) — re-gridded from 5 columns to 6 to fit the new indicators without shrinking the preview too much: `date(1) / section(2) / preview(5) / answer(2) / tag(1) / status+retake(1)`. Tag pill uses the `TAG_PALETTE` color map. Reviewed state shown as `CheckCircle2` (green) / `Circle` (dark) icon. "Retake" link lost its text for space but kept its icon + aria-label.
- **Status filter** — new `STATUS_FILTERS = ["All","Pending","Reviewed"]` row next to the section filter, bordered gold when active. Combines with the section filter (AND).
- **`TagEditor` component** — rendered at the bottom of every expanded mistake panel. Three sections:
  - Tag picker: 6 buttons colored per `TAG_PALETTE`; clicking an active tag toggles it off.
  - Notes: 3-row textarea with placeholder prompting *why did this go wrong*; commits on `onBlur` (not every keystroke). Status line reads "Saving…" → "Blur or tab out to save" depending on `notesDirty`.
  - Reviewed toggle: green pill when marked, outlined when not.
  - Optimistic writes — `onUpdate` patches the parent's local list so the row pill / filter re-renders immediately; on API error, snapshot is restored and the error surfaces inline in red. Verified via the missing-table preview run.
- **Local mistake list state** — `ErrorLogClient` now keeps its own `useState` copy of `mistakes` (seeded from the server prop). The `TagEditor` writes via `updateMistake(id, patch)` so status filter + tag badge update live.
- **Footer copy** — the old "coming soon" line replaced with: "Open a row below to tag each mistake (conceptual, careless, misread, etc.), add a note, and mark it reviewed." Unused `next/link` import dropped from `page.tsx`.
- **Verified**: `npx next build` clean — `/api/error-tags` added as dynamic (5th API route). Preview: 11 rows rendered with `—` tag placeholders; row expand revealed the 3-section editor (tags / notes / reviewed); clicking "Careless" before the table existed fired a POST → 500 → red error message in the editor + state rolled back so the row still shows `—`; no console errors.

### Score-goal-setting UI (this session)
Closes the loop on the Score Goal card by making the "target" side user-editable. No new table — persists to `auth.users.raw_user_meta_data.target_score` via Supabase Auth's `updateUser`, so `user.user_metadata.target_score` is available to the server component on next request.
- **GMAT Focus scale correction** — the Focus Edition total is 205, 215, 225, ..., 805 (increment of 10 with a 5-point offset from round hundreds). An earlier version of `scaledTotalScore` and the API validator assumed plain multiples of 10 and would reject real scores like 735 with "must be a multiple of 10". Both fixed to use `(value - 205) % 10 === 0` so values ending in 5 validate correctly. `scaledTotalScore` now rounds via `205 + Math.round((raw - 205) / 10) * 10` and clamps to [205, 805].
- **`src/app/api/target-score/route.ts`** (new) — POST endpoint, auth-gated via `getUser()`. Accepts `{ targetScore: number | null }`; null clears the stored target. Validates integer, within range, and valid-Focus-score before writing via `supabase.auth.updateUser({ data: { target_score: value } })`. Returns `{ok, targetScore}` on success.
- **`src/app/(app)/dashboard/TargetScoreControl.tsx`** (new) — inline client component. Three states: `— target` + "Set target" underline link (no target set), `735 target` + pencil icon (target set), or the inline `<select>` + Save / Cancel (+ Clear, when editing an existing target) during edit. `SCORE_OPTIONS` enumerates all 61 valid scores via `for (let s = 205; s <= 805; s += 10)`. Default draft value picks the user's current target, or ceils `(estimate + 50)` to the next 10 when they have an estimate but no target, else 705. `router.refresh()` after save so the server-rendered `goalGapLabel` re-computes.
- **Dashboard wiring** — reads `user.user_metadata.target_score`, validates defensively (integer in [205, 805]), and passes to `TargetScoreControl` as `initialTarget`. When both estimate + target are known, computes `goalGapLabel`: `+N to hit target`, `On target — keep practicing` (exact), or `+N above target` (over), and renders it as a small gold badge next to the target value. CTA pill "Take diagnostic" hides once an estimate exists, since "Set target" is now inline inside the number row.
- **Verified**: `npx next build` clean — `/api/target-score` added as dynamic. Preview browser full round-trip: Set target → picker opens with 705 default and 61 options → changed to 735 → first save hit the old 10-multiple validator and returned 400 (captured, fixed) → after HMR picked up the fix, save succeeded → "735 target" + pencil rendered → pencil reopened editor with 735 pre-selected → "Clear" returned to `— target` + "Set target" link. `curl -X POST /api/target-score` without a session returned 401 as expected. No console errors throughout.

### Dashboard polish (this session)
Tightens the signal on the dashboard now that enough plumbing is in place. Score Goal populates when the user has meaningful practice data; section cards use the real GMAT 60-90 scale; week-over-week trends appear once the user has at least 3 attempts in each of the last two weeks.
- **Section score derivation** — previously `Math.round((correct / total) * 90)` (so a 0% score would read 0/90, which isn't how the GMAT scales). Now `Math.round(60 + accuracy * 30)`, floored at 60 and capped at 90, gated behind a minimum sample of `SECTION_MIN_SAMPLE = 10` attempts in that section. Under the threshold the card renders the existing `—` empty state.
- **Week-over-week trend per section** — new `practice_attempts` query joins `practice_sessions(created_at)` so each attempt can be bucketed into `thisWeek` / `priorWeek`. When both buckets have ≥ 3 attempts, a ±N% or "flat" label is passed to `SectionProgress` (which already supports `trend` + `trendLabel` props). Trend label intentionally stays hidden when sample is too small — no misleading arrows on 1 attempt per week.
- **Estimated GMAT total** (205-805, in 10-point increments) — computed as `205 + (Q + V + DI − 180) × 6.67` rounded to the nearest 10. Only shown once all three sections cross `SECTION_MIN_SAMPLE`, otherwise the card keeps its `—` placeholder. CTA flips from "Take diagnostic" to "Set target" once an estimate is available, priming the next hook (goal-setting UI).
- **Lessons completed progress** — `lesson_completions` count queried alongside the session stats. The old "take a diagnostic" progress bar under the Score Goal header now tracks lesson completion (`{N}/8 lessons` + filled gold bar) and the supporting copy adapts to three states: zero lessons & no score, mid-progress & no score, full estimate with lesson count. Replaces the always-empty decoration with a live progress signal.
- **Resilience unchanged** — still inside the existing `try / catch` around every Supabase call, so the dashboard degrades to its original all-empty state when Supabase is unreachable.
- **Verified**: `npx next build` clean (27 routes, no new dynamic additions). Preview browser test (signed in as Adam): Quant showed 63/90 with 8% accuracy (matches formula: 60 + 8.33% × 30 = 62.5 → 63; accuracy shown is floor-rounded to 8% separately); Verbal & DI kept their `—` empty states since no attempts in those sections; Score Goal estimate stayed `—` (not all 3 sections have ≥ 10 attempts yet); lessons progress read "0/8 lessons" with the correct mid-progress copy; no console errors.

### Error log UI (this session)
Replaces the full-mock `/error-log` page with real data driven by `practice_attempts`. The dashboard's "Recent Mistakes" card is also wired to real data (top-3 wrong answers) with a single card-level click target into `/error-log`.
- **`src/app/(app)/error-log/page.tsx`** — now an async server component. Queries `practice_attempts` where `is_correct = false` for the signed-in user (ordered by `session_id desc`, limit 200), joining `practice_sessions(slug, created_at)` via Supabase's nested select syntax. Enriches each attempt with its `ParsedQuestion` by building a `Map<id, ParsedQuestion>` from `getAllQuestions()` once (~443 entries, cheap). Degrades to the empty state if Supabase is unreachable or the user is signed out.
- **Section breakdown card** replaces the old (mocked) Conceptual/Careless/Misread/Time-Pressure panel. Real counts per Quant/Verbal/DI derived from the mistakes array. Adam flagged in the product convo that tagging UI (Conceptual vs Careless etc.) is a future iteration — a footer italic reads "Tag mistakes as conceptual / careless / misread — coming soon" to set expectations.
- **`src/app/(app)/error-log/ErrorLogClient.tsx`** (new) — handles the interactive bits: section filter (All/Quant/Verbal/DI), per-row expand toggle, and a shared `mdComponents` map for `react-markdown` styling tuned compact (smaller than `/lessons/[slug]`, denser than a blog). Rows render as `<button>`s (whole row clickable to expand); the "Retake" pill is a nested `<Link>` with `e.stopPropagation()` so clicking it doesn't also open the panel.
- **Expanded panel** shows, in order: reference context if present (RC passages, MSR sets, TPA tabs), prompt, all options with green/red highlighting keyed off `correctAnswer` / `selectedAnswer` (both rendered via markdown for tables), explanation. Two-Part Analysis questions render a notice ("open the set to retry") because the grid is complex enough that reproducing it inline would bloat the UI. Close button in the top-right also collapses the panel.
- **`relativeDate()` helper** renders "Today" / "Yesterday" / "N days ago" for attempts within the last week, falls back to `"Mar 14"` format otherwise.
- **Dashboard `Recent Mistakes` tile** (`src/app/(app)/dashboard/page.tsx`): now queries `practice_attempts` for the 3 most-recent wrong answers, enriches preview text from `getAllQuestions()`, strips markdown noise (`#*``_>` and newlines) and truncates to 120 chars. When there are mistakes, the tile becomes one big `<Link>` card with per-entry section pill + topic + preview, with a "View full error log →" footer. Empty state unchanged when there's nothing to show.
- **Verified**: `npx next build` clean — `/error-log` moved from static to dynamic (ƒ), no other route changes. Preview browser test: signed in as Adam, `/error-log` rendered 11 real mistakes (all Quant-Algebra from recent sessions), section breakdown showed "Quant 11 / Verbal 0 / DI 0", expand toggle revealed the full question + all 5 options with the correct option (B) badged green + full explanation block, Verbal filter correctly collapsed the list to "No mistakes in this section yet". Dashboard tile: shows 3 most-recent mistakes as clickable card, each with section pill + topic + preview. No console errors, no runtime warnings.

### Lesson completion tracking (this session)
Replaces the synthesized "first 2 done, 3rd current, rest locked" stub on `/lessons` with a real per-user Supabase-backed completion system. Users can now mark any lesson complete from its detail page; status flows back into the lessons list and counts toward the progress header.
- **New Supabase table `lesson_completions`** — `(user_id uuid fk auth.users, lesson_slug text, completed_at timestamptz)` with primary key on `(user_id, lesson_slug)` for idempotent upsert. RLS enabled with four policies (select/insert/update/delete) scoping every row to `auth.uid()`. SQL committed to `HANDOFF.md`'s migration section below for replay — **Adam ran this in the Supabase SQL editor** manually (same flow used for `practice_sessions` earlier in the project — this repo doesn't have a `supabase/` migrations dir).
- **API route `src/app/api/lesson-completions/route.ts`** — `POST` upserts `(user_id, lesson_slug)` on conflict (idempotent re-hit), `DELETE` removes the row. Both auth-gated via `getUser()` against the server Supabase client; both validate `slug` is a non-empty string. Returns `{ok: true}` on success or `{error: string}` with a 4xx/5xx.
- **`src/app/(app)/lessons/page.tsx`** — now an async server component. Queries the user's `lesson_completions` rows, builds a `Set<string>` of completed slugs, then maps lessons → status. Gating model chosen (with Adam's sign-off): **no gating** — all lessons always clickable. Status is purely visual: `done` (in set) / `current` (first-non-done in module order) / `upcoming` (everything else). Wrapped in try/catch so the page still renders with everything as upcoming if Supabase is unreachable or the table is missing (mirrors the dashboard's resilient pattern).
- **`src/app/(app)/lessons/LessonsClient.tsx`** — status union changed from `"done" | "current" | "locked"` to `"done" | "current" | "upcoming"`. Dropped the `if (isLocked) { render non-clickable div }` branch — every card is now a plain `<Link>`. Locked lock icon replaced with a muted outline `Circle` from lucide. CTA labels flow "Review" → "Start" → "Preview".
- **`src/app/(app)/lessons/[slug]/page.tsx`** — now dynamic per-user. Fetches `initialCompleted` for this lesson via the same Supabase-query-with-try/catch pattern. Dropped `generateStaticParams` (page now always SSRs per request due to the cookies() call via Supabase). Added a green "Completed" chip with checkmark in the meta row (next to the duration pill) when `initialCompleted`. Renders the new `CompleteToggle` above the prev/next nav strip.
- **New `src/app/(app)/lessons/[slug]/CompleteToggle.tsx`** — client component. Pill card with icon + copy + button. Toggle flips state optimistically then `router.refresh()`'s so server-rendered surfaces (the header chip, the lessons list) re-read the new status. Shows API errors inline in red (`#FF4444`) without rolling back the visual state, so the user sees what went wrong. On first-time completion (only while `justCompleted && !initialCompleted`), offers a secondary "Next lesson" link next to the button, but not on subsequent toggles — avoids nagging.
- **Verified**: `npx next build` clean — 27 routes total. `/lessons` and `/lessons/[slug]` moved from static to dynamic (ƒ). `/api/lesson-completions` is the new dynamic route. Preview browser test: anonymous POST → 401, authed POST with no table → 500 with Supabase's `Could not find the table 'public.lesson_completions'` message surfaced in the red error `<p>` under the toggle button, toggle stays in "Mark complete" state. Authed GET of `/lessons` with no table → page renders cleanly, "0 of 8 completed · 0% done", all 8 cards clickable, mod 01 = "Start", mods 02–08 = "Preview". After running the SQL migration in Supabase, the POST succeeds, the button flips to "Mark incomplete", the header chip appears, and the "Next lesson" pill appears until a refresh.

## What's next

User directive (most recent): "do in order, but lets also prepare to change the context window" — meaning execute these in sequence, keeping this HANDOFF.md updated between stages so a fresh session can pick up.

1. **Option A — Practice session player.** ✅ Done (see above).

2. **Option C — Deploy to GitHub + Vercel.** ✅ Done.
   - Git: `main` branch pushed to `https://github.com/adamik771/gmat-platform` via HTTPS + a classic PAT (`repo` scope). Credential cached in macOS keychain for subsequent pushes. `gh` CLI is NOT installed on this machine — Adam created the empty repo via the github.com/new browser flow, then we added the remote and pushed.
   - Vercel: project imported via the web UI flow at vercel.com/new. Hobby tier, team `adamik771's projects`, project name `gmat-platform-lcwy` (Vercel auto-added the `-lcwy` suffix to avoid collision with other `gmat-platform.vercel.app` subdomains). Framework preset: Next.js, root `./`, no env vars set. GitHub integration is wired, so every push to `main` auto-redeploys.
   - **First deploy failed** on `Collecting page data` with `Error: Failed to collect configuration for /pricing` → `[cause]: Error: Neither apiKey nor config.authenticator provided`. Root cause: `src/lib/stripe.ts` instantiated `new Stripe(process.env.STRIPE_SECRET_KEY!)` at module load, so importing `STRIPE_PRICES` (which `pricing/page.tsx` does) dragged the constructor into the static build path and crashed because STRIPE_SECRET_KEY is unset on Vercel. Fix (commit `cc76535`): replaced the eagerly-instantiated singleton with a `getStripe()` lazy getter that only throws when actually called. Verified with `env -u STRIPE_SECRET_KEY -u NEXT_PUBLIC_SUPABASE_URL -u NEXT_PUBLIC_SUPABASE_ANON_KEY npx next build` — all 19 routes generate cleanly.
   - **`supabase.ts` has the same bug pattern** (module-level `createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!, ...)`) but nothing currently imports it, so it's not a build blocker. Apply the same lazy-getter fix the moment any page imports it.

3. **Option B — Individual lesson pages** at `/lessons/[slug]` with a markdown renderer. ✅ Done (see above).

4. **Option D — Clean up remaining hardcoded mock data**. ✅ Done (see above). Direction chosen: "empty states everywhere" (Adam's call).

## What's next (ideas, not commitments)

With the original A/C/B/D directive fully executed, here are the natural next moves — confirm direction with Adam before starting any of these.

- ~~**Real user-progress state**~~ ✅ Done. Supabase + `practice_sessions` + `practice_attempts`.
- ~~**Auth**~~ ✅ Done. Supabase Auth + `src/proxy.ts` protects all `(app)` routes.
- **Stripe checkout** — `src/lib/stripe.ts` has `getStripe()` + `STRIPE_PRICES` ready, and the pricing page already lists the tiers. Needs a `/api/checkout` route handler + a webhook listener for `checkout.session.completed`. Real price IDs need to replace the `price_self_study`-style placeholders in env.
- **Individual lesson completion tracking** — the `LessonsClient.tsx` currently synthesizes status ("first 2 done, 3rd current, rest locked"). Once progress is persisted, this should come from the DB and the locked gating should be real (vs currently cosmetic).
- ~~**Practice session player v2** — markdown tables still render as monospace `<pre>` in `PromptBlock`. Swapping that for `react-markdown` + `remark-gfm` (already in deps) would make Table Analysis and MSR tables render as real HTML tables.~~ ✅ Done in commit `590be0c`.
- ~~**Two-Part Analysis custom UI**~~ ✅ Done in commit `89d4b61`. `TwoPartGrid` component in `SessionClient.tsx` renders a 2-column selectable grid; parser detects the pipe table and extracts `twoPartColumns` + `twoPartCorrectAnswers`.
- ~~**Massive content expansion**~~ ✅ Done in commits `2787908` through `c693ad2`. Questions 154→443, lessons 11k→35k words, guides 10k→18k words.
- ~~**Individual lesson completion tracking**~~ ✅ Done this session. `lesson_completions` table + `/api/lesson-completions` + `CompleteToggle` component. No gating (Adam's call) — every lesson always clickable, status is purely visual.
- ~~**Error log UI**~~ ✅ Done this session. `/error-log` queries `practice_attempts` + enriches with content loader, section filter, expandable row with prompt + options + explanation. Dashboard `Recent Mistakes` tile also wired to real data.
- ~~**Dashboard polish**~~ ✅ Done this session. Section scoring on proper 60-90 scale with ≥10 attempt gate, week-over-week trend per section, estimated GMAT total (205-805) once all 3 sections cross the sample threshold, lessons completed progress bar in Score Goal.
- ~~**Score-goal-setting UI**~~ ✅ Done this session. `TargetScoreControl` inline picker + `/api/target-score` endpoint persisting to `user_metadata.target_score`. Shows `+N to hit target` delta badge when both estimate + target are known.
- ~~**Error tagging UI**~~ ✅ Done this session. `error_tags` table + `/api/error-tags` POST/DELETE + `TagEditor` in expanded row with tag picker, notes textarea, reviewed toggle. Status filter (All/Pending/Reviewed) in the filter bar.
- ~~**Error tag breakdown card**~~ ✅ Done this session. `BreakdownCard` toggles between section and tag views, with an "Untagged" bucket so users see their review backlog.
- ~~**Stripe checkout**~~ ✅ Done this session (scaffolded). `/api/checkout` + `/api/stripe/webhook` + `CheckoutButton` + `purchases` table + service-role Supabase client. Requires real Stripe price IDs + secret key + webhook secret in env to go live — see below.
- **Custom domain** — Vercel is on `gmat-platform-61zf.vercel.app` (default). Wiring a real domain (e.g. `zakarian-gmat.com`) goes through Vercel → `gmat-platform-61zf` project → Settings → Domains → Add, then DNS (A record or CNAME).
- **Stripe checkout** — `src/lib/stripe.ts` has `getStripe()` + `STRIPE_PRICES` ready, and the pricing page already lists the tiers. Needs a `/api/checkout` route handler + a webhook listener for `checkout.session.completed`. Real price IDs need to replace the `price_self_study`-style placeholders in env.
- **Delete duplicate Vercel projects** — Adam still has `gmat-platform`, `gmat-platform-gz1e`, `gmat-platform-lcwy` alongside the live `gmat-platform-61zf`. Dashboard → Settings → Advanced → Delete Project on the three unused ones. Low priority, pure hygiene.

## Supabase migrations (for replay)

This repo doesn't have a `supabase/` migrations directory — all schema has been applied by running SQL directly in the Supabase SQL editor. Keep these DDL snapshots here so a fresh environment can be recreated.

### `lesson_completions` (added this session)

```sql
create table if not exists public.lesson_completions (
  user_id     uuid not null references auth.users(id) on delete cascade,
  lesson_slug text not null,
  completed_at timestamptz not null default now(),
  primary key (user_id, lesson_slug)
);

create index if not exists lesson_completions_user_id_idx
  on public.lesson_completions (user_id);

alter table public.lesson_completions enable row level security;

create policy "users read their own completions"
  on public.lesson_completions for select
  using (auth.uid() = user_id);

create policy "users insert their own completions"
  on public.lesson_completions for insert
  with check (auth.uid() = user_id);

create policy "users update their own completions"
  on public.lesson_completions for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "users delete their own completions"
  on public.lesson_completions for delete
  using (auth.uid() = user_id);
```

### `error_tags` (added this session)

```sql
create table if not exists public.error_tags (
  attempt_id uuid primary key
    references public.practice_attempts(id) on delete cascade,
  user_id    uuid not null
    references auth.users(id) on delete cascade,
  tag        text
    check (tag in ('Conceptual','Careless','Time Pressure','Misread','Strategy','Other') or tag is null),
  notes      text,
  reviewed   boolean not null default false,
  updated_at timestamptz not null default now()
);

create index if not exists error_tags_user_id_idx
  on public.error_tags (user_id);

alter table public.error_tags enable row level security;

create policy "users read their own tags"
  on public.error_tags for select
  using (auth.uid() = user_id);

create policy "users insert their own tags"
  on public.error_tags for insert
  with check (auth.uid() = user_id);

create policy "users update their own tags"
  on public.error_tags for update
  using (auth.uid() = user_id)
  with check (auth.uid() = user_id);

create policy "users delete their own tags"
  on public.error_tags for delete
  using (auth.uid() = user_id);
```

### `purchases` (added this session, for Stripe checkout)

```sql
create table if not exists public.purchases (
  id                   uuid primary key default gen_random_uuid(),
  user_id              uuid not null references auth.users(id) on delete cascade,
  plan_id              text not null
    check (plan_id in ('self_study','self_study_plus','coaching','intensive')),
  stripe_session_id    text not null unique,
  amount_cents         integer not null default 0,
  currency             text not null default 'usd',
  paid_at              timestamptz not null default now()
);

create index if not exists purchases_user_id_idx
  on public.purchases (user_id);

alter table public.purchases enable row level security;

-- Users can read their own purchases. All writes happen from the Stripe
-- webhook via the service-role key (bypasses RLS), so no insert/update/delete
-- policies are needed here for regular users.
create policy "users read their own purchases"
  on public.purchases for select
  using (auth.uid() = user_id);
```

## Stripe / env var setup (for production)

The Stripe plumbing returns a clear 503 until these env vars are set in Vercel for the `gmat-platform-61zf` project:

| Key | Where | How to get it |
|---|---|---|
| `STRIPE_SECRET_KEY` | Vercel env (production + preview) | Stripe Dashboard → Developers → API keys → **Secret key** (test mode for testing, live mode for real charges) |
| `STRIPE_WEBHOOK_SECRET` | Vercel env (production + preview) | Stripe Dashboard → Developers → Webhooks → (create endpoint `https://gmat-platform-61zf.vercel.app/api/stripe/webhook` listening for `checkout.session.completed`) → reveal the signing secret |
| `STRIPE_PRICE_SELF_STUDY` | Vercel env | Create a $297 one-time product in Stripe → copy its price id (`price_...`) |
| `STRIPE_PRICE_SELF_STUDY_PLUS` | Vercel env | Same, $497 |
| `STRIPE_PRICE_COACHING` | Vercel env | Same, $2,500 |
| `STRIPE_PRICE_INTENSIVE` | Vercel env | Same, $4,200 |
| `SUPABASE_SERVICE_ROLE_KEY` | Vercel env (production only) | Supabase Dashboard → Project Settings → API → **service_role** key (not anon). **Never** prefix `NEXT_PUBLIC_` — this key bypasses RLS and must stay server-side. |

Test the wiring with Stripe's test-mode keys + test cards before switching to live keys. Trigger an end-to-end by clicking a pricing CTA → Stripe test card `4242 4242 4242 4242`, any future expiry, any CVC → redirects to `/dashboard?purchase=success` → webhook fires → `purchases` row lands → dashboard shows the plan chip.

## Context links

- **Previous plan:** `/Users/adam/.claude/plans/jaunty-brewing-hamster.md` (content creation plan, now fully executed).
- **Full prior transcripts:**
  - `/Users/adam/.claude/projects/-Users-adam/f7c93392-2d9e-4c18-9dbb-d09d45d5339b.jsonl` (content creation session)
  - `/Users/adam/.claude/projects/-Users-adam/94ec7859-29b8-452b-94c4-d51939e659fe.jsonl` (page-wiring + start of session player)
- **Types:** `src/types/index.ts` — has `Section = "Quant" | "Verbal" | "DI"`, `Difficulty = "Beginner" | "Intermediate" | "Advanced"`, `Question`, `Lesson`, etc.
- **Existing scaffolding:** `src/lib/{supabase,stripe,utils}.ts`, `src/components/{shared,marketing,dashboard}/*`.

## One last thing

Do NOT create docs or README files unless explicitly asked. Do NOT add emojis to files. Do NOT commit unless asked.
