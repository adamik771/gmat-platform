<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Zakarian GMAT Platform

A GMAT Focus Edition prep SaaS. Next.js 16 (App Router, Turbopack), Supabase Auth + Postgres, Tailwind, TypeScript, React Markdown. Deployed on Vercel. Owner: Adam (authored all content; works solo on this repo).

## Product shape — the framework it implements

The platform is built around a standardized-exam product framework:

1. **Diagnose before teaching** — `/diagnostic` (30 questions, stratified)
2. **Teach with research-backed chapters** — `/chapters` (17 chapters, pretest → readings with Recall check + self-explanation prompts → graded problem sets)
3. **Retrieval + spacing** — `/review` (daily spaced-retrieval queue)
4. **Adaptive plan from the diagnostic** — `/study-plan` (Today's Focus + Weak Areas + 7-day cadence)
5. **Realistic measurement** — `/mock` (full-length 3-section × 45 min, auto-submit on timeout, mock-to-mock trend)
6. **Diagnostic feedback** — `/analytics` (per-topic + per-difficulty timing, behaviour patterns: efficient/labored/rushed/stuck)
7. **Error log with 6-tag taxonomy** — `/error-log` (Conceptual / Careless / Time Pressure / Misread / Strategy / Other)
8. **Motivation** — streaks, 10-badge grid, mock-trend visibility

The whole loop: diagnostic → weak areas → chapter → problem set → mistakes → error log tag → review queue → mock → repeat.

## Surfaces (routes)

Authenticated app lives under `(app)`:

- `/dashboard` — greeting, Getting Started checklist (onboarding), Score Goal, metrics, activity, mistakes
- `/diagnostic` + `/diagnostic/[section]` + `/diagnostic/report` — placement flow
- `/chapters` + `/chapters/[slug]` — 17 interactive chapters (Quant → Verbal → DI)
- `/lessons` + `/lessons/[slug]` — older lesson library (kept; chapters superseded them)
- `/practice` + `/practice/session/[slug]` — topic-filtered practice drills, reusable SessionClient
- `/review` + `/review/[section]` — spaced retrieval
- `/mock` + `/mock/run` + `/mock/report` — full-length simulation
- `/test-builder` — custom topic-filtered test (distinct from mock — user builds it)
- `/analytics` — score trajectory, per-topic accuracy/timing, behaviour patterns
- `/error-log` — tagged mistake log
- `/study-plan` — adaptive plan (today's focus, weak areas, weekly cadence)
- `/settings` — profile, exam date, notification prefs

Public: `/login`, `/signup`, `/reset-password`, landing pages.
API: `/api/practice-sessions` (session POST), `/api/target-score`, `/api/profile` (incl. exam_date), `/api/chapter-progress`, `/api/notification-prefs`.

## Data model

**Content** (filesystem, parsed via `src/lib/content.ts`):
- `src/content/chapters/<slug>.md` — frontmatter with sections + problem_sets + question_ids
- `src/content/lessons/<num>-<slug>.md`
- `src/content/questions/{quant,verbal,di}/<topic>.md` — `## Qn` or `## Passage N:` + `### Qn` for grouped (RC, MSR)

Question IDs are `${fileSlug}-q${n}` (e.g. `algebra-q5`, `critical-reasoning-q12`).

**Supabase tables** (most important):
- `practice_sessions` — `id, user_id, slug, section, topic, total_questions, correct_count, accuracy, total_time_ms, created_at`. Slug conventions: topic slug for practice (e.g. `algebra`), `diagnostic-{section}`, `mock-YYYY-MM-DD-{section}`, `review-{section}-YYYY-MM-DD`, `custom`.
- `practice_attempts` — `id, session_id, user_id, question_id, section, topic, subtopic, difficulty, question_type, selected_answer, is_correct, time_spent_ms`.
- `error_tags` — `id, user_id, attempt_id, tag, notes, reviewed`. Tag values in `src/app/(app)/error-log/constants.ts`.
- `lesson_completions` — `user_id, lesson_slug, completed_at`.
- `purchases` — plan row per user for the plan chip on the dashboard.

**`user_metadata`** (Supabase Auth) stores persistence that doesn't deserve its own table:
- `target_score` (integer, 205-805)
- `exam_date` (ISO string `YYYY-MM-DD`)
- `full_name`
- `chapter_progress` (Record<slug, ChapterProgress>) — keyed per chapter, written by ChapterReader
- `notification_prefs`

Update via `supabase.auth.updateUser({ data: { ... } })`. See `/api/target-score` and `/api/chapter-progress` as reference patterns.

## Key helper libraries

- `src/lib/content.ts` — filesystem loaders (`getAllQuestions`, `getChapterBySlug`, `getQuestionsByIds`, …). All server-only (uses `node:fs`).
- `src/lib/supabase/{server,browser,service,proxy}.ts` — client factories.
- `src/lib/diagnostic.ts` — `pickDiagnosticQuestions`, `buildReport`, score helper.
- `src/lib/mock.ts` — `pickMockQuestions`, `MOCK_QUESTION_COUNT`, `MOCK_SECTION_MINUTES`, score helper.
- `src/lib/review-queue.ts` — `getReviewQueue`, `bucketBySection`. Priority = recentMiss + repeatMiss + spacing.
- `src/lib/study-plan-engine.ts` — `computeStudyPlan` (todaysFocus + weakAreas), `buildWeeklyCadence`.
- `src/lib/topic-chapter-map.ts` — shared topic-label → chapter-slug mapping.
- `src/lib/gamification.ts` — `computeStreaks`, `computeBadges`.

## Scoring

One formula used everywhere: `accuracy × 600 + 205`, clamped to [205, 805], snapped to nearest 10. Lives in `src/lib/diagnostic.ts::accuracyToScore` and `src/lib/mock.ts::accuracyToScore` (duplicated for package hygiene; keep them in sync).

Per-section 60-90 scaling used by the dashboard: `60 + (correct/total) × 30`.

## Conventions + standing rules

**Hard rules** (per Adam's feedback, persisted across sessions):
- **Do not create new docs/README files** unless explicitly asked. `HANDOFF.md` is the only doc that gets updated between sessions, and only when task state changes.
- **Do not add emojis** to any file (code, comments, markdown, UI copy) unless explicitly asked.
- **Do not `git commit` unless explicitly asked.** Adam reviews before committing. Within a working session he'll often say "continue" / "ship it" which is approval for the session's feature, but don't commit unprompted.

**Architectural conventions observed across the codebase:**
- Prefer `user_metadata` persistence over new tables for small user-scoped state.
- Server components query Supabase directly (no thin helper layer); `createSupabaseServer()` per request.
- Content loading is filesystem-based; don't introduce a CMS.
- Reuse `SessionClient` at `src/app/(app)/practice/session/[slug]/SessionClient.tsx` for any question-runner flow (it powers practice, diagnostic sections, review sessions). Build fresh only if needs diverge materially (see `MockRunner.tsx`).
- Preview routes: see `.claude/launch.json`. Dev server name is `"GMAT Platform"` — use `preview_start` to launch it.

**Design tokens** (from commonly-used inline styles):
- Accent gold: `#C9A84C` (+ rgba variants like `rgba(201,168,76,0.12)`)
- Background deepest: `#0A0A0A`
- Surface: `#111111` / `#0D0D0D`
- Text: `#F0F0F0` / `#C0C0C0` / `#888888` / `#555555` / `#333333`
- Success green: `#3ECF8E`
- Error red: `#FF4444`
- Use Tailwind `border-white/[0.06]` / `[0.08]` for subtle borders
- `lucide-react` for icons
- `ReactMarkdown` + `remarkGfm` for content rendering

## Where to read more

- `HANDOFF.md` — running log of feature decisions + deferred items. Long (~90kb), grep for specifics.
- `src/lib/content.ts` top-of-file — content shape reference.
- `src/types/index.ts` — shared Section / Difficulty / question types.
- `package.json` — scripts: `dev`, `build`, `start`, `lint`. Uses npm (package-lock.json).
