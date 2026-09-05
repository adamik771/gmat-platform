# Bug-fix report — 2026-07-13 student-facing study/practice/review bugs

Eleven reported bugs, all fixed (or safest-useful-version implemented where the report was a product decision). Everything is UNCOMMITTED on `copy/acquisition-cleanup` per the standing no-commit rule. Gate at the end: content 0 errors, tsc clean, 391 tests (was 379), eslint (1 pre-existing warning in `scripts/send-consult-batch.ts`), `next build` green.

---

## 1. Answers visible before the student tries

**Root cause.** Not a content leak (a bank-wide scan of prompts/contexts/options found 0). The leak is a client desync: `SaveForReviewButton` fires `router.refresh()` after every toggle; the refresh re-runs the server page, which re-shuffles topic drills with a `Date.now()`-seeded adaptive order (`src/lib/topic-skill.ts`, no seed passed from `practice/session/[slug]/page.tsx`). The still-mounted `SessionClient` keeps its per-INDEX answer state (`states`, `currentIdx`) but receives the REORDERED `questions` prop — so an unanswered question could inherit another question's `submitted` state and render pre-answered with the answer/explanation showing, and answered ones looked reset.

**Fix.** `SessionClient` freezes the question list it mounted with: `const [questions] = useState(questionsProp)` (SessionClient.tsx). A mid-session RSC refresh can no longer reorder the deck under the student; a fresh session still gets a fresh order. This covers every runner flow that uses SessionClient: topic drills, custom sets, chapter tests, review sessions.

**Verified.** Browser (temp public route, deleted after): options show no correctness styling and no explanation pre-submit; explanation renders only post-submit. Guarded by the existing parse-integrity tests for the content-leak class.

## 2. Save for Review wrong/unchecked after a random/custom set

**Root cause.** Same desync as #1 — the button's own success `router.refresh()` reordered the questions, so `initialSaved={savedIds.has(current.id)}` read a *different* question's flag and the just-clicked star flipped back to unchecked. (The custom-page threading of `initialSavedForReview` from the 07-03 fix was verified correct.) A second contributor: the 30s dynamic Router Cache below.

**Fix.** The question freeze (#1) plus the Router Cache fix (#3). Persistence layer (`user_state.saved_for_review` via `/api/saved-for-review`) was verified correct end-to-end and untouched.

## 3. "Mark as reviewed" doesn't persist

**Root cause.** It persisted fine (`error_tags.reviewed` upsert by `attempt_id`, read back by the same key). The DISPLAY was stale: `next.config.ts` set `experimental.staleTimes.dynamic: 30`, so navigating away and back within 30s served the pre-write RSC payload from the client Router Cache — and `ErrorLogClient`'s prop-resync then overwrote the correct optimistic state with the stale payload. Reviewed toggles that were safely in the DB rendered unchecked.

**Fix.** Removed the dynamic staleTime (back to the framework default of 0; `static: 180` kept) — `next.config.ts`. This kills the whole class: saved-for-review, mark-as-reviewed, review queue counts, chapter progress. Cost: back/forward navs re-render dynamic pages on the server; for a data-correctness product that's the right trade.

## 4. DS questions in Quant custom / error-log practice

**Root cause.** 125 questions inside quant technique banks (backsolving, number-properties, plugging-in, …) are authored as `**type:** Data Sufficiency` but inherited the file frontmatter's `section: Quant`. Every Quant-only pool filters on `section` alone: test-builder, mock Quant sections, the error-log section filter. On GMAT Focus, DS exists only in Data Insights.

**Fix (root, one place).** `src/lib/content.ts` `parseQuestionBlock`: a question whose type is Data Sufficiency now parses with `section: "DI"` regardless of file frontmatter. Cascades to every consumer — test-builder Quant pool now has 0 DS (928 questions), DI has all 225 DS. Mock Quant sections no longer serve DS; DI mocks may draw them (capped by the existing MAX_PER_TOPIC=4 rule). Chapter test pools are unaffected (they route by pin/subtopic, not section) — verified by the composition tests. For attempts already stored with `section='Quant'`, the error-log page now prefers the question's current parsed section over the stored row value (`error-log/page.tsx`), so old DS mistakes no longer appear under the Quant filter. No data migration needed.

**Test.** `tests/question-parse-integrity.test.ts`: every DS question in the bank parses as DI, never Quant.

## 5. Error-log dates messy / unordered

**Root cause.** The query ordered by `session_id` — a random UUID — so rows came out in effectively random time order, and the `.limit(200)` applied to that order meant the page didn't even hold the 200 *newest* mistakes. (`practice_attempts` has no own timestamp; the date comes from the joined session, which PostgREST can't order parent rows by.)

**Fix.** `error-log/page.tsx`: scope the attempts query to the user's 150 most-recent sessions (ordered by `created_at` server-side), then sort the mapped entries newest-first with a stable comparator and cap at 200. Comparator `byMostRecent` lives in `error-log/constants.ts` (null timestamps sink, ties break on id).

**Test.** `tests/error-log-order.test.ts` (newest first, null handling, stable ties).

## 6. See custom-practice results later

**What existed.** Results lived only in the mounted results screen; `practice_sessions`/`practice_attempts` rows were saved but had no read surface (test-builder listed recent customs as dead rows).

**Fix (smallest clean route).** New `src/app/(app)/practice/history/[id]/page.tsx` — server-rendered saved-results page for any of the student's own sessions: accuracy/correct/time header, per-question list with correct/incorrect, your answer vs correct answer, per-question time, a live Save-for-Review toggle, and an "Explanation" link into the existing `/review/question/[id]` deep-review page. Wired from: test-builder "Previous builds" rows (now links), and a "Session saved — revisit anytime" link on the SessionClient results screen.

## 7. Chapter 16 "Try before you learn" empty

**Root cause.** Chapter 16 in guided-path order is `quant-04-answer-choice-tactics`; its pretest section had an intro ("Two quick questions…") but no `pretest_question_ids` — rendered as a promise followed by nothing. `quant-30-timing` had the identical defect. No validator rule caught it.

**Fix (content + defense + validator).** Removed the empty pretest sections from both chapter files (populating would mean pinning questions out of other chapters' test pools — an authorial call, see "Product decisions"). `chapters/[slug]/page.tsx` now drops any pretest section whose questions don't resolve, so the reader/TOC/progress can never show an empty one. New validator rule `chapter-empty-pretest` (ERROR) in `scripts/validate-content.ts` — verified it fires on a synthetic offender.

## 8. Timer keeps running while reading the solution

**Root cause.** Per-question time already froze at submit, but the header session clock was wall-clock (`now - sessionStart`) and the persisted `total_time_ms` was finish-wall-clock — both counted solution-reading time.

**Fix.** New `src/lib/practice-timing.ts` `activeSessionMs()`: banked time on submitted questions + running time on the current question only while unanswered. The header clock, the results "Total time", and the saved `total_time_ms` all read it, so they can never disagree. The clock now visibly pauses at submit (while the explanation is open) and resumes on the next unanswered question. `sessionStart`/`sessionEndedAt` state deleted.

**Tests + browser.** `tests/practice-timing.test.ts` (5 cases incl. pause-on-submit and clock-skew). Browser-verified on the temp route: clock pinned across a 31s wall-clock window while the explanation was open, resumed on the next question, results screen showed the frozen 03:39 while real elapsed time was 6+ minutes.

## 9. Reading after Summary

**Root cause.** One chapter: `di-2-data-sufficiency.md` had reading section `the-ds-method` ordered after `summary`.

**Fix.** Moved `the-ds-method` to just before `summary` (it explicitly synthesizes "the earlier sections", so last-reading placement is right); body block moved to match. New validator rule `chapter-content-after-summary` (ERROR) so the class can't recur — verified against all 62 chapters, zero offenders remain.

## 10. Graded problem set loses progress mid-test

**Root cause.** Two runner surfaces, both React-state-only until completion: the in-chapter "End of Chapter / Graded problem sets" modal (`ProblemSetRunner` in ChapterReader) persisted only at Finish; SessionClient (chapter tests `ch-…-t<n>`, custom sets) saved only at the results screen. No unload warning anywhere.

**Fix (persistence for the named surface, warning for the other).**
- `ProblemSetRunner` now checkpoints after every graded question into a new `ChapterProgress.problemSetRuns[difficulty]` field — which rides the existing localStorage write-through + debounced server push + pagehide flush, so it survives refresh, navigation, and device switches. Reopening the set resumes at the saved question (stale/mismatched checkpoints are discarded); the set card shows a "Resume · QN" chip; finishing clears the checkpoint. `mergeProgress` keeps whichever side graded more questions (`chapter-progress-merge.ts`).
- `SessionClient` gets a `beforeunload` warning while answers are unsaved, plus a confirm on the in-app "Exit Session" link. (Full mid-session resume for SessionClient would be a larger change — see "Product decisions".)
- In passing: `loadProgress`/`normalizeServerProgress` were silently dropping `firstSeenAt` on every load (the spaced-review anchor) — fixed.

**Test.** `tests/chapter-progress-merge.test.ts`: the run with more progress survives a two-device merge in both directions.

## 11. Study-plan hours capped at 30 and unclear

**Investigation findings.** The 30 cap was arbitrary (the slider said 1–30 while the wizard validator and the API both accepted 1–40 — dead range). Worse, the chosen value was store-and-display only: written to `user_metadata.onboarding.weeklyHours`, read back solely to re-fill its own slider. No plan engine consumed it.

**Fix.**
- New `src/lib/study-hours.ts`: shared bands (low <6 / medium 6–14 / high ≥15), per-day minutes helper, advice copy; `WEEKLY_HOURS_MIN/MAX` = 1/40.
- Slider now goes to 40 (matching the API), with live helper text: the per-day minutes implied by the choice, band-specific advice (low → longer runway + weak-areas-first; medium → balanced; high → burnout warning + scheduled rest), and a line explaining that the value shapes the weekly plan.
- The engine actually uses it now: `buildWeeklyCadence(plan, readings, weeklyHours)` puts weak-area chapters first in the rotation at low hours and reserves the 7th day as "Light review + rest" at high hours. The study-plan page passes the stored value, shows "Planned around your N hr/week target (~X min/day)" + advice above the weekly calendar with a change-it link, and the "Practice hours (7d)" stat now names the target. Misleading "recommended hours per week" copy corrected.

**Tests.** `tests/study-plan-engine.test.ts`: low-hours reordering and high-hours rest day (plus medium-hours no-ops).

---

## Files changed

- `src/lib/content.ts` — DS → DI section reclassification (bug 4)
- `src/app/(app)/error-log/page.tsx` — recency-scoped query, sort, legacy-section display (bugs 4, 5)
- `src/app/(app)/error-log/constants.ts` — `byMostRecent` comparator (bug 5)
- `src/app/(app)/practice/session/[slug]/SessionClient.tsx` — question freeze, active-time clock, beforeunload/exit guard, history link (bugs 1, 2, 6, 8, 10)
- `next.config.ts` — dynamic Router Cache staleTime removed (bugs 2, 3)
- `src/lib/practice-timing.ts` (new) — `activeSessionMs` (bug 8)
- `src/app/(app)/chapters/[slug]/page.tsx` — empty-pretest render guard (bug 7)
- `src/content/chapters/quant-04-answer-choice-tactics.md`, `quant-30-timing.md` — empty pretest sections removed (bug 7)
- `src/content/chapters/di-2-data-sufficiency.md` — section order fixed (bug 9)
- `scripts/validate-content.ts` — `chapter-empty-pretest` + `chapter-content-after-summary` rules (bugs 7, 9)
- `src/app/(app)/chapters/[slug]/ChapterReader.tsx` — problem-set run checkpoints/resume, firstSeenAt passthrough (bug 10)
- `src/lib/chapter-progress-merge.ts` — merge + content-sig for `problemSetRuns` (bug 10)
- `src/app/(app)/practice/history/[id]/page.tsx` (new) — saved session results (bug 6)
- `src/app/(app)/test-builder/TestBuilderClient.tsx` — recent builds link to history (bug 6)
- `src/lib/study-hours.ts` (new), `src/lib/study-plan-engine.ts`, `src/app/(app)/study-plan/page.tsx`, `src/app/(app)/onboarding/OnboardingClient.tsx` — hours wiring (bug 11)
- Tests: `error-log-order.test.ts` (new), `practice-timing.test.ts` (new), `question-parse-integrity.test.ts`, `chapter-progress-merge.test.ts`, `study-plan-engine.test.ts`

## Verification

- `npm run check`: content 0 errors (12 pre-existing warnings), tsc clean, **391 tests pass** (12 new).
- `npm run lint`: clean except the pre-existing `scripts/send-consult-batch.ts` warning.
- `npm run build`: green; `/practice/history/[id]` present in the route table.
- Loader-level (node against the real bank): chapter 16 has no empty pretest and no chapter has one; no chapter has content after summary; di-2 ends `…→ the-ds-method → summary`; Quant pool 928 with 0 DS, DI pool 596 with 225 DS.
- Browser (temp public route rendering the real SessionClient, deleted after): no answer/explanation visible pre-submit; explanation appears post-submit in study mode; session clock froze for 31s of wall time while the solution was open, resumed on the next unanswered question; results screen showed the frozen answering-time total (03:39) with the review list. Auth-gated flows (error log, review queue, onboarding, study plan, chapter reader) could not be browser-driven — no test credentials, and creating accounts is out of bounds — their fixes are covered by the unit tests + loader checks above.
- Validator rules negative-tested (synthetic offender → ERROR fires, restored → clean).

## Product decisions taken (flag if you disagree)

1. **DS reclassified to DI at parse time** rather than filtered per-surface. New attempts on those 125 questions record `section='DI'`; old attempt rows keep `Quant` in the DB but *display* under DI in the error log. Quant mocks no longer include DS (matches GMAT Focus); DI mocks can draw the quant-flavored DS items.
2. **Empty pretests removed, not populated** — choosing 2 pretest questions per Method/Timing chapter is authorial, and pinning them would shrink other chapters' test pools. The render guard + validator make the empty state impossible either way; add `pretest_question_ids` to those two chapters whenever you pick questions.
3. **SessionClient (chapter tests/custom sets) got a leave-warning, not full resume** — full mid-session resume there means serializing per-question state keyed by slug+question-set and is a bigger change than the reported surface needed. The in-chapter graded sets (the reported surface) got true resume.
4. **`the-ds-method` placed immediately before the summary** (it references "the earlier sections", so it reads as the capstone). Move it earlier if you meant it as an opener.
5. **Router Cache `dynamic: 30` removed globally** — every dynamic page now refetches on navigation. If any page feels slower, re-add per-page caching rather than the global window; the 30s window is what made persisted toggles look lost.
6. **Weekly-hours range extended to 40** (was 30 on the slider, 40 in the API) and the value now genuinely shapes the cadence. If you'd rather cap at 30, change `WEEKLY_HOURS_MAX` in `src/lib/study-hours.ts` and the API bound together.

## Friend feedback follow-up

Second pass (same day), driven by a four-agent investigation (metrics audit, chapter-% tracer, trial-exam-prompt tracer, retry-flow tracer) plus a verification pass. All four items resolved; each traced to concrete code, none required a redesign.

### 1. Dashboards overloaded with numbers, some broken — status: FIXED (broken metrics) + smallest simplification applied + larger recommendation documented

**Broken metrics fixed:**
- *Study-plan Today's Focus permanently said "Set your baseline"* — `computeStudyPlan` was called inside a `Promise.all` with `officialExamCount` still hard-coded 0 (the real count was derived ~120 lines later). The engine's priority-100 baseline card therefore always sorted first, even for students with a baseline. Derivation moved above the engine call ([study-plan/page.tsx](src/app/(app)/study-plan/page.tsx)). This was also the root cause of friend item 3.
- *Dashboard "Accuracy" was an unweighted mean of session accuracies including spaced-review sessions* — a 2-question review at 50% weighed the same as a 45-question set at 80%, and review sessions (replays of past misses) dragged it down right after the student reviewed. Now question-weighted (Σcorrect/Σquestions) and `review-*` sessions excluded ([dashboard/page.tsx](src/app/(app)/dashboard/page.tsx)).
- *Day-boundary split: streaks/calendar dots used UTC days, hours chart/"today" used local days* — in Oslo (UTC+2) any session after ~22:00 landed on the wrong day's dot and could break streaks; the study-plan calendar's cell keys were additionally one day off from its own activity keys. One shared `localDayIso()` now used everywhere ([utils.ts](src/lib/utils.ts), dashboard, study-plan, StudyHoursChart). `computeStreaks` already anchored on the local today-key, so local keys are what it always expected.
- *Exam countdowns disagreed by a day* — study-plan hero and /chapters MissionHero parsed `YYYY-MM-DD` as UTC midnight (off-by-one in positive-offset timezones); the engine had already fixed this locally. One shared `daysUntil()` now used by all three.
- *Analytics "unlock checklist" could mathematically only ever show 0/N* — the view renders only when `attempt_count === 0`, yet its six progress rows counted attempt-derived signals. Replaced with the one real step at that stage (baseline exam done/undone); the locked-module cards already carry the per-module thresholds ([analytics/page.tsx](src/app/(app)/analytics/page.tsx)).
- *Reading badges could never unlock via /chapters* — badge input counted only the deprecated `lesson_completions` table; chapter reads now count toward it.
- *"Mistakes to clear" had two definitions* — the dashboard chip subtracted ALL tag rows (and the error-log auto-classifier tags every miss on render, so "untagged" collapsed to ~0 after one visit), while study-plan counted not-reviewed. Unified on the meaningful one (wrong attempts without `reviewed=true`); chip label now "N to review".
- *"Chapters done" had two rules* — /chapters counted reading sections only; dashboard "Course progress" and study-plan required EVERY section including pretest/summary cards, so students who read everything but never clicked those two cards sat at 0%. One shared `isChapterRead()` (reading-sections rule) in [chapter-progress-merge.ts](src/lib/chapter-progress-merge.ts) now used by all three.

**Simplification applied (smallest useful):** removed the study-plan "Projected total" card — it was the THIRD estimated-score computation in the product (different formula AND different data pool from dashboard and analytics), fed by an uncapped query that PostgREST silently truncated at ~1000 rows. /analytics owns the estimate. Also removed with it: the dead per-section sampling query and two local scoring helpers.

**Documented, not done (larger recommendation):** unify the remaining two score estimates (dashboard `scaledTotalScore` over a 20k-attempt query vs analytics' RPC-fed `accuracyToFocusTotal`) behind one shared helper fed by the analytics RPC; drop the dashboard "Course progress" tile in favour of a link to /chapters; the analytics "prediction calibration" card is partially circular (mock attempts feed the readiness number it validates against) and should exclude mock attempts or be relabelled; /learn's guide cards look up progress by guide slug against chapter-slug keys (permanently cold — dead overlay on a deprecated surface). These touch 3+ pages each and are judgment calls; flagged for a dedicated pass.

**DS→DI history split (from the first pass, surfaced by this audit):** old attempts on the 125 reclassified DS questions still carry `section='Quant'`, splitting section metrics. One-line owner migration in the Supabase SQL editor (attempts already store the question type):
```sql
UPDATE practice_attempts SET section = 'DI'
WHERE question_type = 'Data Sufficiency' AND section <> 'DI';
```

**Tests added:** `tests/day-boundaries.test.ts` (localDayIso + daysUntil), `isChapterRead` cases in `tests/chapter-progress-merge.test.ts`.
**Verification:** ruled OUT one agent claim before touching code — a REST probe confirmed `practice_attempts.created_at` exists in the live schema (the HANDOFF schema snapshot is stale), so the weakest-topic query was never broken and was left alone.

### 2. Chapter progress percentage stuck at 0% — status: FIXED (two real causes)

**Root cause A (the sync bug):** ChapterReader's pagehide-flush effect had `progress` in its dependency array and called `flushIfPending()` in its cleanup. Every progress update therefore ran the previous effect's cleanup, which CANCELLED the freshly-queued debounced push and re-sent the stale closure snapshot — the server copy was permanently one action behind, and a single-action visit (open chapter, mark a section, leave) synced an EMPTY snapshot. Every server-rendered indicator (/chapters cards, dashboard Course progress, study-plan counts) stayed at 0% while localStorage looked fine on the original device. Fixed with a latest-progress ref and `[slug]`-only deps ([ChapterReader.tsx](src/app/(app)/chapters/[slug]/ChapterReader.tsx)).

**Root cause B (the definition):** the every-section completion rule on dashboard/study-plan (see item 1) meant even correctly-synced progress often displayed as 0. Fixed via the shared `isChapterRead()`.

**Hardening (same class):** `/api/chapter-progress` did a read-modify-write of the whole map and, on a TRANSIENT state-read error, proceeded with `{}` — wiping every other chapter's server progress down to the one being saved. The route now aborts with a 503 on an errored read (`readStateRow` exported for error-awareness); localStorage write-through means nothing is lost ([route.ts](src/app/api/chapter-progress/route.ts)).

**Files:** ChapterReader.tsx, chapter-progress-merge.ts, user-state.ts, api/chapter-progress/route.ts, dashboard/page.tsx, study-plan/page.tsx.
**Tests:** `isChapterRead` regression cases. The flush-effect fix is component-level (no jsdom in this repo's test setup); verified by code trace — the failure sequence (update → cleanup cancels fresh timer → stale push) is deterministic.

### 3. First-trial-exam prompt persists after entry — status: FIXED

**Root cause:** the same `officialExamCount=0` ordering bug as item 1 — the /study-plan page unlocks correctly (its lock gate derived the count properly), but the Today's Focus card INSIDE the unlocked plan came from the engine, which always saw 0 and pushed "Set your baseline — Official Practice Exam 1" at maximum priority. The dashboard derived the count correctly, which is why the prompt persisted on one surface and not the other. Fixed by moving the derivation above the engine call.

**Secondary contributor fixed:** the onboarding wizard's "Get your baseline score" step reads as entering the baseline, but it only stores a self-reported `onboarding.currentScore` that no baseline gate reads — a user who "entered their score" there kept seeing baseline prompts. Copy reworded to say the official score gets logged on the Mock page and the wizard field only seeds week one ([OnboardingClient.tsx](src/app/(app)/onboarding/OnboardingClient.tsx)).

**Ruled out:** legacy future-dated entries being filtered at read time (no reader filters by date — write-time validation only); the "30-question placement diagnostic" stale copy (already removed in a prior session; the AGENTS.md note about it is stale).
**Tests:** the engine's count→baseline-card behavior was already covered; the page-level ordering isn't unit-testable (server component). Verified by code trace; the page and engine now read the same derivation.

### 4. Retry-wrong-questions shows a fake 0% result — status: FIXED (and root-caused; first pass had fixed the display, not the flow)

**Root cause:** "Practice again" was a `<Link>` to `/practice/session/[slug]` — the exact URL the results screen was already mounted on. Same-URL App Router navigation reconciles the SAME client instance (no `key` on SessionClient), so `showResults`/`states` survived while the server re-ran and re-shuffled the questions with a `Date.now()`-seeded order. Pre-freeze, the reshuffled list was re-scored against the stale per-index answers — accuracy collapsed toward 0% and the review list showed the set as freshly missed: the friend's exact report. After this session's questions-freeze, the fake 0% could no longer render but the CTA became a silent no-op (still parked on old results).

**Fix:** retry is now a client-side state reset, not a navigation. `restartSession(qs)` rebuilds untouched per-question state, resets the clock/save status, and swaps the active question list. Two CTAs on the results screen: **"Redo N missed"** (new — restarts over ONLY the submitted-and-wrong questions, on every runner flow including custom and review sessions) and **"Practice again"** (full set, using the freshest server-provided order). The finished attempt is already saved; the retry saves as its own session on finish. Never fixed with a changing `key` on SessionClient — that would remount on every save-for-review `router.refresh()` and resurrect the desync bug.

**Guarantees held (browser-verified on a temp route, deleted after):** clicking "Redo 3 missed" from a 0/3 result opened a clean 3-question attempt (no results state, nothing pre-answered, no explanations, clock restarted); answering 1 correctly and ending showed the RETRY's results (100% over answered; the 2 unanswered retry questions were NOT marked wrong; no redo button since nothing was submitted-and-wrong).
**Files:** SessionClient.tsx, new [practice-retry.ts](src/lib/practice-retry.ts).
**Tests:** `tests/practice-retry.test.ts` — retry set contains exactly the submitted-and-wrong questions; skipped questions never enter it; clean sweep produces no retry set; two-part grading.

## Remaining risks

- The DS reclassification changes mock composition going forward; a student mid-way through the mock rotation will see a slightly different pool (rotation indexes shift). One-time, benign.
- Analytics/review buckets built from OLD attempt rows still say `Quant` for DS attempts (only the error log re-derives display section). If you want history rewritten, that's a one-off SQL update on `practice_attempts` (`question_type='Data Sufficiency'` → `section='DI'`).
- `beforeunload` dialogs don't fire for in-app route changes other than the guarded "Exit Session" link (Next has no global nav guard); sidebar navigation mid-chapter-test still loses SessionClient progress silently.
- The mid-set resume checkpoint stores only graded answers (idx + correctness), not the in-flight selection on the current question — a student resumes at the question they were on, re-answering it from scratch. Deliberate (keeps the stored state tiny).
