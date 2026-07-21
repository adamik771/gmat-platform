# Product Excellence Report — 2026-07-21

**Audited base commit:** `a02aa04` (origin/main — the PR #535 merge, verified as the branch point)
**Branch:** `feat/product-excellence-batch` (pushed; NOT merged, NOT deployed)
**Worktree:** `/Users/adam/gmat-platform-product-excellence` — the `-conversion-audit` and `-security-audit` worktrees were never touched.

Scope: the authenticated learning product. Marketing, consent/tracking, lead capture, payments/paywall/auth, RLS/migrations, question-bank content, the PR #535 selection policy, First 48 Hours internals, and official-exam identity/roadmap logic were out of bounds — findings that required them are listed in §7.

---

## 1. What this was

Six sequential investigation panels (30 specialized read-only agents), an adversarial synthesis panel (5 fresh reviewers), implementation in 5 commits, then a 5-panel post-implementation review and lead browser QA.

| Panel | Agents | Focus | Result |
|---|---|---|---|
| 1 — Data truth | 5 | Every displayed number traced to its canonical source | 3 P1, ~30 P2/P3 |
| 2 — Student journey | 5 | Every authenticated route + state transition | 8 P1 |
| 3 — Learning science | 5 | GMAC sources + peer-reviewed evidence → product decisions | 31 recommendations, 6 explicit rejects |
| 4 — UX & accessibility | 5 | Keyboard, SR, 768/390/375, contrast, async states | 3 P0, 8 P1 |
| 5 — Reliability & perf | 5 | Boundaries, races, offline, cost, silent failures | 1 P0, 2 P1 (executed repros) |
| 6 — Adversarial synthesis | 5 | Verify, reject, dedupe, attack fix designs | **138 confirmed, 32 duplicates, 6 downgraded, 3 rejected** |
| Post-implementation review | 5 | Regressions in the shipped diff | **0 P0/P1**, 13 P2, 19 P3 — all resolved |

Every P0/P1 required confirmation from two agents plus direct code evidence. The lead session independently spot-checked ~15 of the highest-impact claims against the code before implementing; all held.

## 2. Confirmed findings and what shipped

### The P0

**Six user_state read-modify-write routes could destroy stored history.** `getUserState` silently degrades a *failed* row read to the (post-strip, usually empty) legacy metadata copy. Six routes then rebuilt a whole key from that emptiness and wrote it back — one transient DB error could wipe official-exam score history, mock flags, saved-for-review lists, the spaced-review log, or the skill map, and return 200. Executed repro by Panel 5.
→ All six now use the error-aware read + 503 abort the chapter-progress route already proved. `tests/rmw-state-guardrail.test.ts` keeps the class dead — including aliased imports and routes that read `errored` without actually aborting.

### The P1s

| Finding | Before | After |
|---|---|---|
| Review queue rest-window leak | `priority <= 0` could never exclude a missed question (`missCount*3` kept it positive) — corrected items reappeared daily, contradicting the module's own docstring and the /review copy | Inclusion gates on **due-ness**; `missCount` ranks but never gates |
| Stale items starve fresh misses | Uncapped overdue term: a 30-day-old once-correct item scored 280 vs 13 for yesterday's miss; executed probe found fresh misses ranked 0-of-5 | Overdue capped at 14 days, rung-0 boost +50; fresh misses surface |
| Chapter reader %-rule divergence | Reader counted pretest+summary; 60/62 chapters showed 50-83% at the moment /chapters, dashboard and study-plan called them complete — and the completion card (the **only** prev/next-chapter navigation) never unlocked | One readings-only rule everywhere; pretest/summary stay as TOC check-ins |
| Adaptive plan cold start | Baseline-only students got 14 consecutive rest days (runnable proof) | Seeds from intake weak areas + guided path |
| Onboarding "Skip" wiped intake | `updateUser` replaces nested objects; skip sent bare `{skippedAt}`, destroying completedAt/weeklyHours/weakAreas — and study-plan links completed users straight into it | Skip merges; for completed intakes it's a pure navigation; write errors surface |
| Expired session destroyed answers | Sign-in links navigated in-tab, unmounting the runner and destroying the answers the banner called safe | New tab + Retry in both runners |
| Mock had no exit guards | No beforeunload, no confirm, an always-visible Back link over a 45-min in-memory attempt, and intro copy claiming the timer survives navigation | beforeunload + in-app nav confirm; Back link only pre-attempt; honest copy |
| Mock report had no answer review | "Results are revealed on the report" — but flagged rows were hover-styled `<div>`s | Real links into deep review |
| Server-timezone day boundaries | Streaks/today/greeting/calendars used the **server's** zone; on Vercel (UTC) the July "local day" fix was inert, and the client-rendered hours chart disagreed on the same screen | tz cookie → user-local everywhere |
| Offline drill unusable offline | Resolved the user via `getUser()` — a network call — so the primed cache was unreachable exactly when offline | `getSession()` (local token) |
| TPA unanswerable by screen reader | Circles were nameless, stateless buttons | Accessible names carrying both axes + outcome, `aria-pressed` |
| GI charts had no text alternative | The chart **is** the question data | sr-only data table generated from the chart spec |
| Keyboard: post-submit lockout | The Space/Enter guard exempted only form fields, so Enter/Space on any focused button was preventDefaulted — rating, save-for-review, tutor, hints and exit were keyboard-inoperable, and Tab+Enter on an option silently submitted | Guard exempts focused interactive controls; answer options keep documented Space-to-submit |
| Lying failure states | Review-queue DB failure rendered "All clear!"; dashboard/analytics regressed veterans to "take your baseline"; mock report said "No mock yet"; error log rendered empty | Honest error states + a new `(app)/error.tsx` that keeps the app shell |
| 28 GI questions showed raw JSON | The ```chart fence was stripped from `prompt` but not shared `context` | Parser extracts from context too; locking test |
| Contrast failures | Focus ring 2.55:1; ~200 text uses of #555555 (2.5:1) incl. every inactive sidebar label; #444444 (1.9:1); the **default** light reader theme at 2.78:1 gold / 2.62:1 green | Ring 3.68:1+; text tokens → #888888; light-theme tokens recomputed to 4.6:1+ worst-case |
| Persona CTAs "404" | Two study-plan links flagged by two panels | **Rejected on verification** — frontmatter slugs are canonical, the links work. A guardrail test now proves it and would catch a real one |

### Learning-science decisions (evidence-cited)

Shipped: relearning savings (lapses re-enter at peak−1, not rung 0 — Rawson & Dunlosky); forgetting-framed queue reasons instead of "ladder rung N" jargon (Kornell & Bjork); review sessions default to **study** mode so the corrective-feedback surface actually gives corrective feedback (Rowland 2014); mixed review un-gated from due-ness and made single-section for discriminative contrast (Brunmair & Richter; Hausman & Kornell); strong blocked sessions promote interleaving (Rohrer & Taylor); exam-window spacing cap so nothing schedules past test day (Cepeda et al.); weak-area flag needs ≥2 misses; mastery concept gate n=5→8; hours slider 3-25 anchored to GMAC's published prep-hour medians; final-week taper in both engines (resolving a direct contradiction with the exam roadmap); tempo card gated at n≥30 and reworded as description, not diagnosis; estimated score shown with the ±10 band `scoring.ts` always mandated.

Explicitly rejected and recorded so they aren't re-proposed: answer-until-correct (corrupts psychometrics), interval tuning/FSRS (evidence says absolute spacing and retrieval count matter, not schedule shape), cross-section mixing, composite readiness %, peer comparison.

## 3. Before / after — the daily loop

- **Review** now leads with the queue (was: 4-5 co-equal cards above it), tells you how many items the session covers, routes you **back to the queue** when you finish, and offers one near-transfer CTA after a strong session. Caught-up state keeps mixed review visible instead of hiding the right next activity.
- **Numbers** agree across surfaces: one replay definition (review/redo/mixed excluded from accuracy, estimate, adaptivity), one completion rule, one review-queue option set, one day boundary, one official-exam derivation. The dashboard drops a duplicated percentage and relabels the rolling window honestly.
- **Sessions** survive more: milestone chapter writes push immediately with `keepalive` and surface sync failures; saves dedupe and clamp; post-finish answering is blocked with a way back instead of silently diverging; unsaved-attempt destruction is confirmed; the offline queue survives concurrent drains, mid-drain appends, and sign-out.
- **A phone and a keyboard** can now run the loop: headers wrap, DI tables scroll inside their own container, the Contents FAB is reachable, inputs don't trigger iOS zoom, and the runner announces question moves and outcomes.

## 4. Changed files (85 files, +3,595 / −1,037)

App: dashboard, study-plan (+adaptive), chapters (+[slug], reader, mobile TOC), practice (client, session runner, history [new index page], test-builder), review (landing, [section], all, question/[id]), mock (run, runner, report), error-log (page + client), analytics (page + client), onboarding (page + client), layout, **new `(app)/error.tsx`**.
Lib: review-queue, spaced-review, study-plan-engine, adaptive-plan-engine, mistake-classifier, chapter-progress-merge, gamification, study-hours, utils, content (parser), keyboard, offline/{sync,pending-attempts}, supabase/server, **new tz.ts**.
API: practice-sessions, official-exams, spaced-review, mock-flags, mock-review-edits, saved-for-review, mixed-review, onboarding, account/export.
Components: SaveForReviewButton, MixedReviewCard, TutorDrawer, QuestionChartInner, globals.css.
Docs: PRODUCT_EXCELLENCE_AUDIT.md, this report, HANDOFF.md entry.

## 5. Tests and verification

**Gate (green at every commit and at HEAD):** content validator 0 errors · `tsc --noEmit` clean · **525 tests / 49 files** (was 451) · ESLint clean across `src/` and `tests/` — the one remaining warning is the pre-existing `scripts/send-consult-batch.ts` one that predates this branch (unchanged, not introduced here) · `next build` compiled successfully.

New/updated regression tests: merged `priorityFor` spec (due-gate, 14-day cap, rung-0 boost, confident-miss and saved bonuses, exam-window cap); `computeRung` relearning re-entry; problem-set merge recency + zombie-checkpoint cases (both argument orders, legacy data preserved); `isReplaySession`; RMW-state guardrail (aliased imports + real abort required); chapter-href guardrail; GI chart-context locking suite; timezone plumbing across Oslo/Los Angeles with malformed-tz fallback; classifier no-fabricated-diagnosis; `perDayMinutes` high-band; urgent-review cadence. Two `computeRung` cases were updated deliberately — they encoded the full-reset policy the relearning evidence overturns; nothing was weakened to make the gate pass.

**Browser QA** (dev server on the worktree, desktop + 390×844 + 375×667, via a temp public route rendering the real runner, deleted afterwards): study-mode default and copy; keyboard — Tab+Enter selects an option (no surprise submit), Enter activates focused controls, Space-on-body still submits; TPA accessible names with outcomes (`"T (both): 1.6 — your selection, incorrect"`); GI continued question renders the chart + sr-only table with **zero** raw JSON; no horizontal page overflow at either mobile width; the 401 banner renders both "Sign in (new tab)" and "Retry save"; redo-with-unsaved-session raises the confirm. Console clean; no failed requests.

## 6. Remaining risks

- **`inert` on the tutor drawer** relies on React 19/Next 16 attribute passthrough. Typechecks and builds; if a future runtime drops it, the closed drawer returns to the tab order (a11y-only, no data risk).
- **The tz cookie is absent on a brand-new browser's very first request** — that render falls back to server-timezone math (the pre-existing behavior) and self-heals on the next navigation.
- **The offline drain's per-id removal still has a millisecond-scale read-modify-write window** with a concurrent append (was: the whole POST duration). The durable fix is a single IndexedDB transaction; documented in code.
- **Cross-instance `user_state` write serialization** is client-side only; two devices writing the same key simultaneously can still lose one update. Needs the atomic SQL RPC in §7.
- **Mock still has no mid-attempt persistence** — guards now warn honestly, but resume is a feature, not a fix.
- The **`redo-` slug** is new stored data. Old clients never write it; old rows never carry it; every consumer treats an unknown prefix as a normal session. Rollback-safe.

## 7. Deferred and owner-only work

**Requires excluded scope (owner):**
1. Analytics RPC (`get_analytics_aggregates`) should exclude `review-%`/`redo-%` sessions and use fixed section time targets rather than each user's own mean — the dashboard side is fixed; the SQL side is a migration.
2. `practice_attempts` needs a column for Two-Part Analysis selections. Until then history/deep-review render an honest "two-part answer (selections not stored)" instead of a misleading blank.
3. An atomic `toggle_saved_for_review` RPC (client-side serialization shipped as mitigation).
4. The DS→DI history backfill SQL (already documented in BUGFIX_REPORT.md) — until it runs, pre-July DS attempts still bucket under Quant in the review queue and analytics.

**Deferred by design (documented, not implemented):** recording in-reader work (pretests, recall checks, graded sets) as `practice_sessions` — real gap, but it needs a metrics-exclusion design first or chapter work pollutes accuracy and the estimate; mock section medium-start ordering (changes mock-trend comparability); 4-question problem-set top-up (pool/pinning ripple); `/learn` hub consolidation (its progress overlay is keyed to guide slugs and permanently cold — recommend deprecating the surface rather than wiring it); one-tap error-log tagging; weekly-hours → adaptive day-load shaping; a full "done for today" state; drill/checkpoint spaced-review kinds (inert — guide-slug vs chapter-slug spaces are disjoint; copy corrected, code left in place).

## 8. Manual steps

**None required to review or merge.** Two notes:
- `/Users/adam/.claude/launch.json` gained a **"GMAT Product Excellence Worktree"** entry (port 3311). Worth keeping: the plain "GMAT Platform" entry runs `npm --prefix /Users/adam/gmat-platform`, so browser QA from any worktree silently tests **main** unless a dedicated entry exists.
- `.env.local` was copied into the worktree for local QA and is untracked (correctly ignored).

## 9. Commits

| Hash | Title |
|---|---|
| `7cba20e` | fix(review): make the review loop truthful and evidence-aligned |
| `3a3a5bf` | fix(durability): protect student data across saves, syncs, and failure paths |
| `032dbfa` | fix(plan-metrics): make every number user-true — timezone, cadence, estimates, gates |
| `bcb5cca` | fix(a11y-mobile): make the daily loop operable by keyboard, screen reader, and phone |
| `28ad6ea` | fix(review-round): resolve findings from the 5-panel implementation review |

Compare: https://github.com/adamik771/gmat-platform/compare/main...feat/product-excellence-batch
PR (open when ready): https://github.com/adamik771/gmat-platform/pull/new/feat/product-excellence-batch
