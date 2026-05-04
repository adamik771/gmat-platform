# Product Architecture — Productization Phase

**Date:** 2026-04-27.  **Owner:** Adam.  **Status:** Living document.

This document covers the seven product layers that turn the content website into a serious GMAT prep product. **Most of what's described here has been built in prior turns.** The doc consolidates it into one source of truth, calls out the gaps, and ends with the Claude Code implementation prompt for closing them.

---

## 0. GMAT format reference (verified)

All scoring + mock logic is built against the **GMAT Focus Edition** format (GMAC, effective February 2024 — sole format since the legacy GMAT was retired). Reference: mba.com / GMAC official spec.

| Section | Questions | Time | Score range |
|---|---|---|---|
| Quantitative | 21 | 45 min | 60-90 (scaled) |
| Verbal | 23 | 45 min | 60-90 (scaled) |
| Data Insights | 20 | 45 min | 60-90 (scaled) |
| **Total** | **64** | **135 min** + 10-min break | **205-805 in 10-pt increments** |

Section order is student-chosen at exam start. Up to 3 questions per section can be bookmarked + revisited (review/edit phase).

These constants are codified at `src/lib/mock.ts` (`MOCK_QUESTION_COUNT`, `MOCK_SECTION_MINUTES`, `MOCK_BREAK_MINUTES`).

## Originality stance — codified

Every question, explanation, review note, diagnostic, and mock uses **only original material** from the platform's question bank under `src/content/questions/`. The originality rule is enforced in three places:

- `QUESTION_TAXONOMY.md` (§ Originality rule) — author guidance + banned-trope list
- `AUDIT.md` (§ 2 — Findings revision table) — audit framework with copyright-risk lens
- `BETA.md` (§ Severity guide) — student-flagging path that surfaces near-source-material risk for triage

External sources (mba.com format spec, learning-science literature, broad GMAT skill taxonomy) inform *structure* — never content.

---

## 1. Seven systems — current state

| # | System | Status | Primary files |
|---|---|---|---|
| 1 | Full-length mock exams | **Shipped (full only)** — section-only, hard-only, weak-area mocks not yet | `src/lib/mock.ts`, `src/app/(app)/mock/*`, `src/lib/score-percentiles.ts` |
| 2 | Mistake log system | **Shipped** — auto-classifier + insights + dashboard panel + 14 ERROR_TAG_DEFs + 13 ROOT_CAUSE_DEFs | `src/lib/mistake-classifier.ts`, `src/lib/mistake-insights.ts`, `src/app/(app)/error-log/*` |
| 3 | Spaced repetition review | **Shipped** — 4 item kinds × per-kind ladders, confidence + mistake-type modifiers | `src/lib/spaced-review.ts`, `src/app/(app)/review/all`, `src/app/api/spaced-review` |
| 4 | Adaptive study path engine | **Shipped** — collectAdaptiveSignals + computeAdaptivePlan, Next-Best-Action engine | `src/lib/adaptive-plan-engine.ts`, `src/lib/next-best-action.ts`, `src/app/(app)/study-plan/adaptive` |
| 5 | Analytics dashboard | **Shipped** — score trajectory, topic/timing/difficulty breakdowns, NBA panel | `src/app/(app)/analytics/*`, `src/lib/calibration.ts` |
| 6 | Premium review mode | **Shipped** — 8-card per-question deep review with similar-questions matcher | `src/app/(app)/review/question/[id]/page.tsx`, `src/lib/similar-questions.ts` |
| 7 | Quality-control system | **Partial** — `AUDIT.md` framework + `BETA.md` triage process; no admin UI | `AUDIT.md`, `BETA.md`, `src/lib/beta-feedback.ts`, `src/app/api/feedback` |

The **gap table** in §6 below catalogues what's still missing per system.

---

## 2. Schema

Three storage layers, each chosen for a specific reason.

### 2.1 Filesystem (content)

All content is markdown under `src/content/`. Parsed at build/request time by `src/lib/content.ts` and `src/lib/curriculum-outline.ts`.

| Folder | Purpose | Files |
|---|---|---|
| `questions/{quant,verbal,di}/<topic>.md` | Question bank — `## Qn` per question, optional `## Passage N: ###Qn` for grouped (RC/MSR) | 17 files, ~709 questions |
| `chapters/<slug>.md` | Interactive chapters (pretest → reading → graded set) | 17 files |
| `guides/reading-*.md` | Curriculum chapters (30 reading chapters with sub-chapters) | 30 files |
| `guides/<other>.md` | Reference guides (16 files) |  |
| `lessons/<num>-<slug>.md` | Older lesson library (kept for compat) | varies |

**Standardized 6-section explanation format** per question (from `QUESTION_TAXONOMY.md`):

```
**fastest_path:** 1 line — quickest GMAT-strategic move
**explanation:** 2-6 sentences — full worked reasoning
**mistake_a..e:** 1 line each — per-choice trap analysis (skip correct slot)
**common_trap:** 1 line — primary engineered failure mode
**takeaway:** 1 line — generalizable lesson
**related_reading:** 1 slug — primary chapter that teaches this skill
```

Plus optional curriculum-aligned fields (`subchapter`, `skill`, `trap_type`, `est_time_seconds`, `prerequisite`) on per-chapter question files.

### 2.2 Supabase (cross-user, queryable)

| Table | Purpose | Migration status |
|---|---|---|
| `practice_sessions` | One row per session (slug, section, total_questions, correct_count, accuracy, total_time_ms) | Live |
| `practice_attempts` | One row per attempt — `(session_id, question_id, section, topic, subtopic, difficulty, question_type, selected_answer, is_correct, time_spent_ms)` | Live |
| `error_tags` | Manual per-attempt tagging — `(attempt_id, tag, root_cause, contributing_causes[], notes, reviewed, remediation_assigned_at, remediation_completed_at)` | Live |
| `lesson_completions` | `(user_id, lesson_slug, completed_at)` | Live |
| `purchases` | Plan rows | Live |
| `beta_feedback` | Beta-feedback intake — `(kind, message, question_id, rating, tag, source_path, status)` | **Migration pending** — SQL in `src/lib/beta-feedback.ts::__schema_migration` |

### 2.3 `user_metadata` (per-user, low write volume)

Stored in Supabase Auth's `raw_user_meta_data`. Updated via `supabase.auth.updateUser({ data: { ... } })`.

| Key | Shape | Source |
|---|---|---|
| `target_score` | int 205-805 | Onboarding wizard or Settings |
| `exam_date` | ISO YYYY-MM-DD | Onboarding wizard or Settings |
| `full_name` | string | Auth signup |
| `chapter_progress` | `Record<slug, { sectionsRead: Record<id, bool>, problemSetResults?, firstSeenAt? }>` | ChapterReader |
| `notification_prefs` | `{ daily, weekly, ... }` | Settings |
| `mock_flags` | `Record<dateIso, Record<Section, string[]>>` | MockRunner |
| `mock_review_edits` | per-mock review/edit log | MockRunner |
| `onboarding` | `{ completedAt, targetScore, examDate, currentScore, weeklyHours, weakAreas, prepHistory }` | Onboarding wizard |
| `confidence_log` | `Record<itemId, { confidence: 1-5, ts }>` | Spaced-review API |
| `drill_reviews` | `Record<itemId, ts>` | Spaced-review API |
| `checkpoint_reviews` | `Record<itemId, ts>` | Spaced-review API |
| `beta_feedback` | Array — fallback before the table migration | `/api/feedback` |

---

## 3. Student journey — onboarding → test week

```
ONBOARDING
   /onboarding wizard
   ↓ writes user_metadata.onboarding (target, exam date, weekly hours, weak areas, prep history)
   ↓ routes:
   ├── first-time / in-progress  →  /diagnostic
   └── retake                    →  /study-plan/adaptive

WEEK 1 — DIAGNOSE & INSTALL
   /diagnostic                       30 questions × 3 sections (10/section)
   /diagnostic/report                enhanced report (weak sub-skills, trap patterns,
                                      timing analysis, recommended chapters)
   /study-plan/adaptive              4-week plan auto-generated from diagnostic
                                      + onboarding signals
   /learn                            curriculum hub — chapters by section
   /guides/reading-*                 read top weak-area chapter

WEEKS 2-3 — DRILL & PRACTICE
   /practice/session/{topic}         topic-filtered drill set, 10-15 questions
   /review                           daily spaced-retrieval queue
   /review/all                       full unified queue (questions + concepts +
                                      drills + checkpoints, interleaved by priority)
   /review/question/{id}             premium per-question deep-review surface
                                      (8 cards including similar follow-ups)
   /error-log                        auto-classified mistake log + insights panel

WEEK 4 — INTEGRATE & TEST
   /test-builder                     custom topic-filtered timed set
   /mock                             full-length 64Q × 135min mock
   /mock/report                      percentile + section breakdown + trap patterns
                                      + pacing + recommended chapters

TEST WEEK
   /review/all                       last-pass on overdue items only (final ladder rung)
   /mock                             one final mock 7+ days before exam
   /analytics                        Next Best Action panel surfaces final priorities
   ── Sun before exam ──             rest day (auto-scheduled in adaptive plan)
   EXAM DAY                          section order from /diagnostic/report rationale
```

The full loop:
> **diagnostic → weak areas → chapter → problem set → mistakes → error-log tag → review queue → mock → repeat**

Codified in `AGENTS.md` as the product's operating principle.

---

## 4. System logic — per phase

### 4.1 Mocks

**Question selection** (`pickMockQuestions(section)` in `src/lib/mock.ts`):

1. Pool: all questions in the section with non-empty options
2. Difficulty mix per section: Q `6E/10M/5H`, V `7E/11M/5H`, DI `6E/9M/5H`
3. Per-topic cap: 4 (prevents over-clustering)
4. Top-up pass if quotas not met
5. **Difficulty progression** via `orderForMock`: ~20% easy front-loaded, intermediate body sorted by climbing difficulty, ~20% advanced tail (approximates GMAT adaptive feel)

**Score estimation** (`accuracyToScore` in `src/lib/mock.ts` and `src/lib/diagnostic.ts`):
- Formula: `accuracy × 600 + 205`, clamped to [205, 805], snapped to nearest 10
- Per-section: `60 + accuracy × 30`
- **Percentile lookup** via `src/lib/score-percentiles.ts` — total + per-section bands based on GMAC 2024 published percentiles
- Output framed as **score estimate / readiness band**, never as official score (per the user's rule)

**Mock review report** (`src/app/(app)/mock/report/page.tsx`):
- Hero: score with delta vs previous mock + percentile band + interpretive sentence
- Section breakdown: per-section score + percentile + correct/total + avg time
- **Pacing section**: behavioural pattern (efficient / rushed / labored / stuck / mixed)
- **Trap patterns**: named-trap occurrences with taxonomy slug
- **Recommended chapters**: priority-ranked top-5 with reason copy
- Existing weak-topics + 5-day plan + review/edit coach

### 4.2 Mistake log

**Auto-classification** (`src/lib/mistake-classifier.ts`) returns six axes per missed attempt:

1. **section** — from attempt
2. **subskill** — subtopic with topic fallback
3. **trapType** — direct read of `commonTrap`/`trapType`, high confidence
4. **mistakeType** — heuristic mapping trap → ERROR_TAG_DEF (CR-scope traps → CR_SCOPE; arithmetic-slip → CALC_SLIP; labored → TIME_SINK; rushed-on-easy → OVERCONF; default → Q_CONCEPT)
5. **rootCause** — orthogonal heuristic (rushed → P2 panic guess; easy + miss → K1 concept absent; hard + trap → S1 wrong-strategy)
6. **timeBucket** — rushed (<30s) / normal / labored (>180s) / unknown

Confidence + explainable signal per inference.

**Insights aggregator** (`src/lib/mistake-insights.ts`) produces the dashboard view-model:
- `recurringWeaknesses` — top-8 sub-skills sorted by miss count
- `trapFrequency` — top-6 named trap patterns
- `recommendedChapters` — top-6 priority-ranked from 3 sources
- `recommendedDrills` — top-6 topic drills with target-count
- `priorityFixes` — top-6 actionable items blending recurrence × recency × Hard-weight

### 4.3 Spaced review

Four item kinds × per-kind ladders (`src/lib/spaced-review.ts`):

| Kind | Ladder (days) | Rationale |
|---|---|---|
| question | 0 / 2 / 7 / 21 / 42 | Existing GMAT-tuned spacing |
| concept | 0 / 3 / 10 / 28 / 56 | Concept stability is durable |
| drill | 0 / 2 / 7 / 21 / 42 | Same as question |
| checkpoint | 0 / 1 / 4 / 14 / 30 | Recall fragments fast |

**Priority modifiers**:
- Confidence (1-5): `1 → +20`, `2 → +12`, `3 → 0`, `4 → −5`, `5 → −10`
- Mistake-type bonus: K1/Q_CONCEPT `+25`, K2/Q_SETUP `+12`, S1/S2 `+10`, E1/E2/CALC_SLIP `−10`, P1/P2/TIME_SINK `+8`, J1/F1 `+5`
- Flagged: `+100`

**Concept aggregation**: groups attempts by `(section, subtopic)`. Surfaces a concept whenever rolling sub-skill accuracy < 70% on ≥ 4 attempts OR dominant mistake-type is concept-absent. Rung from accuracy bands (≥90% → 4, ≥80% → 3, ≥70% → 2, ≥50% → 1, <50% → 0).

**Drill / checkpoint scheduling**: indexed by chapter `firstSeenAt` (from `chapter_progress`). An item only enters the queue once the parent chapter has been touched.

### 4.4 Adaptive plan

Two-phase architecture (`src/lib/adaptive-plan-engine.ts`):

**Phase 1: `collectAdaptiveSignals`** — pulls all sources:
- Diagnostic + latest mock → `buildEnhancedReport`
- 12-week practice attempts → topic accuracy + classifications
- `buildMistakeInsights` for priority fixes
- `buildSpacedReviewQueue` for backlog
- `user_metadata.confidence_log` for low-confidence count

**Synthesised severity per weak sub-skill**:
```
severity = 30 × (1 − diag_accuracy)        if seen in diagnostic
         + 25 × (1 − mock_accuracy)        if seen in latest mock
         + 40 × (1 − practice_accuracy)    if seen in practice (≥4 attempts)
         + 4-8 per Hard miss across sources
```

**Phase 2: `computeAdaptivePlan`** — pure plan generator:
- Week count: 2 if ≤14 days, 3 if ≤21, default 4 (clamped 1-8)
- Section order: weakest first (freshest-brain heuristic)
- Per-week themes: foundation → trap drilling → pacing + mid-cycle mock → final mock + integration
- Per-day cadence: chapter / drill / question-set / review / mock interleaved by week role + day index
- Five activity kinds via `AdaptiveActivity` discriminated union, each with target route + `estimatedMinutes`

**Next-Best-Action** (`src/lib/next-best-action.ts`) — 7 prioritised rules giving ONE decisive action + 3 alternates with score transparency.

### 4.5 Analytics

Server-rendered at `/analytics` with the existing breakdowns (score trajectory, per-topic accuracy, pacing rows, topic-timing, difficulty-timing, error patterns, calibration, repeat-miss, time-sink, prediction MAE trend) **plus** the Next-Best-Action panel at the top.

### 4.6 Review mode

Premium per-question surface at `/review/question/[id]` — 8 cards:

1. Hero (correctness + your-letter vs correct + time-vs-target bucket)
2. Fastest path
3. Full explanation
4. Trap diagnosis (commonTrap + per-letter mistakeAnalysis)
5. Takeaway
6. Related reading chapter
7. Related micro-drills (from curriculum outline)
8. Similar follow-up questions (top-5 from `findSimilarQuestions`)

Plus the `QuestionFeedbackBar` from the beta system embedded at the bottom for student flagging.

### 4.7 Quality-control

**Audit framework** (`AUDIT.md`) — six lenses (instructor / editor / learning scientist / copyright-risk / format-integrity / template-fatigue) with P0/P1/P2 severity bands.

**Beta-feedback intake** (`src/lib/beta-feedback.ts`, `src/app/api/feedback`, `src/components/beta/*`) — feeds question/explanation flags into the same triage queue.

**Triage process** (`BETA.md`) — weekly cadence, per-kind disposition, three aggregation SQL queries (question-level pattern detection, page-level bug clustering, rating trend), close-the-loop step, severity guide.

---

## 5. Originality and copyright-risk handling

The platform's anti-copying defence has three layers:

1. **Author-time** — `QUESTION_TAXONOMY.md` lists banned tropes (`Tom-and-Sarah painters`, `coffee/diabetes correlation`, `bike-lane traffic`). Two confirmed violations were caught + rewritten this turn (see `AUDIT.md` §2 P0 row).
2. **Audit-time** — `AUDIT.md` §1 includes the *copyright-risk reviewer* lens with severity bands (P0 = direct OG/source recall, P1 = banned trope, P2 = generic).
3. **Student-flag-time** — `QuestionFeedbackBar` lets any student mark a question as "wrong-answer / unclear-prompt / ambiguous-options" — Adam's weekly triage in `BETA.md` catches near-source content if it surfaces.

The platform never uses external prep questions for any surface (mocks, diagnostic, drills, review).

---

## 6. Gap table — what's still missing

The seven systems are largely shipped. Here's what's not, ranked by impact.

| # | Gap | System | Priority | Estimated effort |
|---|---|---|---|---|
| G1 | **Section-only mocks** (Quant-only / Verbal-only / DI-only at full mock format — 21Q / 23Q / 20Q × 45min) | 1 — Mocks | High | 1 surface + parameterise mock route |
| G2 | **Hard-question mock** + **weak-area mock** modes (45-min, 20-25 question custom-difficulty mixes) | 1 — Mocks | High | Could overlap with `/test-builder` — needs a "Mock mode" preset on it |
| G3 | **Mixed-review mock** (interleave items from spaced queue + recent misses, surface as a 30-min timed practice mock) | 1 — Mocks + 3 — Spaced | Medium | New surface; reuse `MockRunner` shell |
| G4 | **Student-profile branching** in adaptive engine (beginner / intermediate / advanced / Q-strong-V-weak / DI-weak / time-constrained) — current engine treats all profiles identically | 4 — Adaptive | Medium | Add `inferProfile(signals)` in engine; per-profile week templates |
| G5 | **"Save to review"** option from question detail to the spaced queue (one-click flag for items not yet missed) | 6 — Review | Low | Small button + API extension |
| G6 | **Confidence reflection** in SessionClient post-submit panel — currently spaced-review API accepts confidence but no UI captures it inline | 3 — Spaced | Medium | 5-button row in SessionClient post-submit |
| G7 | **Beta-feedback table migration** — currently SQL is in `beta-feedback.ts` but the table doesn't exist; everything falls back to user_metadata | 7 — QA | Low | Run the SQL in Supabase editor (admin task, not engineering) |
| G8 | **QA admin surface** at `/admin/feedback` — currently triage is via SQL editor only | 7 — QA | Low | Future polish |
| G9 | **Auto-tag persistence** — auto-classifier runs at render time; could write back to `error_tags` with a `confidence: "auto"` flag | 2 — Mistake log | Low | Schema column + classifier hook |
| G10 | **Per-mock difficulty calibration** — current 6/10/5 stratification is static; high-target students should see a tougher mix | 1 — Mocks | Low | Trivial: target-aware DIFFICULTY_MIX |
| G11 | **`reading-comprehension.md` standardised 6-section format** — only RC and possibly a handful of CR items remain in the original bulk-rewrite queue | Content | Medium | One bulk-rewrite session |

The "high" + "medium" items in G1-G6 are what the implementation prompt below targets.

---

## 7. Implementation plan

The implementation is sequenced so each step is independently shippable and the build stays green.

### Wave A — Mock mode expansion (closes G1, G2, G3)

1. **Refactor mock route to accept a `mode` parameter**:
   - `/mock` → full mock (existing)
   - `/mock?mode=quant-only` → Quant 21Q × 45min
   - `/mock?mode=verbal-only` → Verbal 23Q × 45min
   - `/mock?mode=di-only` → DI 20Q × 45min
   - `/mock?mode=hard` → 60Q × 90min, `Beginner: 0, Intermediate: 5, Advanced: 15` per section
   - `/mock?mode=weak` → seeded from `collectAdaptiveSignals().topWeakSubskills`, 30Q × 45min
   - `/mock?mode=mixed-review` → 25Q × 30min from `buildSpacedReviewQueue` (questions only)

2. **Modify `pickMockQuestions(section, mode?)`** to accept the mode and apply per-mode question selection. The orderForMock progression still applies.

3. **Mock-landing UI** — add a 7-card grid on `/mock` letting the student pick a mode, with copy explaining each.

### Wave B — Adaptive profile branching (closes G4)

1. **Add `inferProfile(signals)`** in `adaptive-plan-engine.ts`:
   - `beginner` — diagnosticTotalScore < 545 OR no diagnostic
   - `intermediate` — 545-685
   - `advanced` — 685+
   - `quant-strong-verbal-weak` — Q accuracy > V + 15%
   - `verbal-strong-quant-weak` — V accuracy > Q + 15%
   - `di-weak` — DI accuracy < min(Q, V) − 15%
   - `time-constrained` — daysAvailable ≤ 14
   - `long-prep` — daysAvailable ≥ 90

2. **Per-profile week templates** — adjust `themeFor` + `activitiesForDay` to weight chapter-vs-drill mix by profile (beginner: heavy chapters early; advanced: heavy timed sets; time-constrained: skip foundation week).

3. **Surface the profile** on `/study-plan/adaptive` via a small badge in the headline panel.

### Wave C — Confidence reflection inline (closes G6)

1. **5-button row** in SessionClient's post-submit explanation panel: "How confident were you?" 1-5 stars.
2. On click, POST to `/api/spaced-review` with `kind: question, itemId: question:<id>, confidence: 1-5`.
3. The spaced-review engine already consumes `confidence_log` — no engine change required.

### Wave D — Save-to-review button (closes G5)

1. Add a "Save to review" button to `/review/question/[id]` and to the explanation panel in SessionClient.
2. Click writes a synthetic flag into `user_metadata.saved_for_review[]`.
3. `buildSpacedReviewQueue` reads this list and includes those questions with a `+50` priority boost.

### Wave E — RC standardisation (closes G11)

Bulk rewrite of `verbal/reading-comprehension.md` to the 6-section format. ~73 questions; one dedicated session.

### Smaller items

- G7 — Adam pastes the SQL from `__schema_migration` into Supabase
- G8 — Future polish; SQL editor is fine until the queue volume warrants
- G9 — Optional schema column + classifier hook
- G10 — Trivial constant tweak

---

## 8. The Claude Code implementation prompt

Paste this into a fresh Claude Code session to drive Wave A through D in sequence. Each wave ends with a build verification + HANDOFF entry.

```
Continue the productization phase of the GMAT prep platform at /Users/adam/gmat-platform.

Read these first, in order:
  1. ARCHITECTURE.md (root) — full architecture + gap table
  2. HANDOFF.md (root) — recent context-switch entries
  3. AGENTS.md (root) — repo conventions (no docs unless asked, no emojis, no commits)

Goal: close gaps G1 through G6 from ARCHITECTURE.md §6, in four waves.
Each wave ends with `npm run build` clean and a HANDOFF.md entry summarising what shipped.

────── WAVE A ────── (mock-mode expansion, gaps G1-G3)
Files to touch:
  - src/lib/mock.ts (extend pickMockQuestions to accept a mode)
  - src/app/(app)/mock/page.tsx (mode-picker grid)
  - src/app/(app)/mock/run/page.tsx (read mode from query)
  - new: src/lib/mock-modes.ts (mode definitions: question count, time, difficulty mix, source)

Modes to support:
  - "full" (existing default — preserve backward compat)
  - "quant-only" / "verbal-only" / "di-only" (single-section, 45 min)
  - "hard" — 60 questions × 90 min, ratio Beginner:Intermediate:Advanced = 0:5:15 per section
  - "weak" — pulls from collectAdaptiveSignals().topWeakSubskills, 30Q × 45min
  - "mixed-review" — pulls question-kind from buildSpacedReviewQueue, 25Q × 30min

Acceptance: build green, all 7 modes resolve to playable mock sessions. The
existing /mock?mode=full flow is unchanged.

────── WAVE B ────── (adaptive profile branching, gap G4)
Files to touch:
  - src/lib/adaptive-plan-engine.ts (add inferProfile + per-profile week templates)
  - src/app/(app)/study-plan/adaptive/page.tsx (surface profile badge)

Profile rules from ARCHITECTURE.md §7 Wave B. Per-profile templates:
  - beginner: 4 weeks, heavy chapters in week 1-2
  - intermediate: 4 weeks, balanced cadence (current default)
  - advanced: 3 weeks, heavy timed sets + multiple mocks
  - quant-strong-verbal-weak: section rotation Verbal-first
  - verbal-strong-quant-weak: section rotation Quant-first
  - di-weak: section rotation DI-first + extra DI drills
  - time-constrained: 1-2 weeks, skip foundation week
  - long-prep: 6 weeks, two mock weeks

Acceptance: build green. /study-plan/adaptive shows a "Profile: <name>"
badge in the headline panel with rationale text.

────── WAVE C ────── (confidence reflection inline, gap G6)
Files to touch:
  - src/app/(app)/practice/session/[slug]/SessionClient.tsx (5-button row in post-submit panel)
  - reuse /api/spaced-review for the write path (no API change needed)

Behaviour:
  - After the student submits a question and sees the explanation, show
    "How confident were you?" with a 5-star row (1=guess, 5=certain).
  - On click, POST to /api/spaced-review with {kind: "question", itemId:
    "question:<questionId>", confidence: 1-5}.
  - Visually mark the chosen rating; allow re-click to change.
  - No re-render bounce — the post-submit panel stays open after rating.

Acceptance: build green. Confidence_log entries appear in user_metadata
after a session.

────── WAVE D ────── (save-to-review, gap G5)
Files to touch:
  - new: src/app/api/saved-for-review/route.ts (POST {questionId, action:
    "add"|"remove"})
  - src/lib/spaced-review.ts (read user_metadata.saved_for_review[],
    boost priority +50 for those question ids)
  - src/app/(app)/review/question/[id]/page.tsx (Save-to-review button)
  - src/app/(app)/practice/session/[slug]/SessionClient.tsx (small button
    in explanation panel)

Acceptance: build green. Items added via the save button surface in
/review/all with a "saved" badge and elevated priority.

────── HOUSEKEEPING ──────
After each wave:
  - npm run build
  - update HANDOFF.md with a CONTEXT SWITCH entry summarising what shipped,
    what's still aspirational, and which files were touched
  - DO NOT commit; Adam reviews before committing
  - DO NOT add emojis
  - DO NOT introduce new docs unless explicitly asked

Priority order: Wave A → B → C → D. If you run low on context budget,
stop after the current wave finishes, write the HANDOFF, and end the
session — do not start a wave you can't finish cleanly.
```
