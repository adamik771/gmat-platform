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
- **Custom domain** — Vercel is on `gmat-platform-61zf.vercel.app` (default). Wiring a real domain (e.g. `zakarian-gmat.com`) goes through Vercel → `gmat-platform-61zf` project → Settings → Domains → Add, then DNS (A record or CNAME).
- **Stripe checkout** — `src/lib/stripe.ts` has `getStripe()` + `STRIPE_PRICES` ready, and the pricing page already lists the tiers. Needs a `/api/checkout` route handler + a webhook listener for `checkout.session.completed`. Real price IDs need to replace the `price_self_study`-style placeholders in env.
- **Error log UI** — the Error Log guide explains the concept. The `/error-log` route exists but is empty. Once incorrect answers are logged (simple extension of the `/api/practice-sessions` handler that already writes to `practice_attempts`), the `/error-log` page can query wrong answers per user and render them with re-review dates.
- **Dashboard polish** — the score chart + section progress still use placeholder thresholds. Once there's enough session data, the "estimated GMAT score" can be derived from accuracy patterns, and section progress can show real percentile relative to mock-level performance. Also: expose a "lessons completed" metric on the dashboard now that the data exists.
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

## Context links

- **Previous plan:** `/Users/adam/.claude/plans/jaunty-brewing-hamster.md` (content creation plan, now fully executed).
- **Full prior transcripts:**
  - `/Users/adam/.claude/projects/-Users-adam/f7c93392-2d9e-4c18-9dbb-d09d45d5339b.jsonl` (content creation session)
  - `/Users/adam/.claude/projects/-Users-adam/94ec7859-29b8-452b-94c4-d51939e659fe.jsonl` (page-wiring + start of session player)
- **Types:** `src/types/index.ts` — has `Section = "Quant" | "Verbal" | "DI"`, `Difficulty = "Beginner" | "Intermediate" | "Advanced"`, `Question`, `Lesson`, etc.
- **Existing scaffolding:** `src/lib/{supabase,stripe,utils}.ts`, `src/components/{shared,marketing,dashboard}/*`.

## One last thing

Do NOT create docs or README files unless explicitly asked. Do NOT add emojis to files. Do NOT commit unless asked.
