# Open-PR Backlog Audit — 2026-06-11

Produced by the Question Bank Expander routine. This run was scoped to add a new question batch, but the pre-flight repo inspection found that every underdeveloped topic is already claimed by one or more open PRs — in most cases several near-identical ones. Per the routine's own limit ("if the correct change is unclear, create an audit report instead of coding blindly"), this run's deliverable is a full audit of the open-PR backlog instead of an 11th duplicate expansion.

## Headline numbers

- **283 open PRs** (oldest: #2, opened 2026-05-08; newest: #410, opened 2026-06-11)
- **124 PRs merged** in the same window — inflow has consistently outpaced review
- Open PRs were created at a rate of **10–24 per day** on active days, by at least **13 distinct automated routine families** (identified by branch-name prefix: `practical-ride` 64 open PRs, `youthful-bohr` 62, `wonderful-johnson` 48, `cool-fermi` 24, `determined-mccarthy` 20, `confident-einstein` 17, `fervent-gates` 14, plus six smaller families)
- The June 9–10 merge burst (~40 PRs: chapter restructure #356–#361, bank expansions #167/#170/#222/#223/#259/#264/#276, geometry removal, plugging-in/backsolving/estimation chapter rebuilds) **silently invalidated the large majority of the remaining open PRs**, which were authored against repo states from weeks earlier

## Root cause

Each scheduled routine scans `main`, picks the "highest-value" target, and opens a PR. Because the resulting PRs sit unmerged, every subsequent run of the same routine re-detects the same gap and re-does the same work. The backlog is therefore dominated by mutually exclusive duplicates:

- **10 open PRs** append algebra questions in the same ID range (Q35–Q51): #320 #322 #327 #330 #350 #366 #370 #372 #381 #385. At most one can merge; all others will conflict. Worse, `algebra.md` on `main` now has **97 questions**, so even the "winner" is stale — its IDs would collide with already-merged content.
- **11 open PRs** expand exponents-roots around Q33–Q49: #41 #52 #59 #214 #233 #234 #241 #262 #289 #292 #317. The equivalent expansion **already merged** (#170/#276); `main` has 56 questions. All 11 are obsolete.
- **4 open PRs** expand plugging-in from 11 to 28 questions with identical scope: #395 #397 #400 #407. This work is still needed (main has 11) — but only one PR should survive.
- **15 open PRs** touch geometry (8 expansions, audits, a chapter upgrade, plus #285 "Remove Geometry"). Geometry was **already deleted from `main`** (commit f3f0179, "remove off-syllabus geometry chapter + question bank" — correct for GMAT Focus Edition). All 15 are obsolete, including #285 itself.
- **~12 open PRs** rebuild the Table Analysis chapter to "premium standard": #217 #231 #247 #250 #255 #267 #270 #281 #299 #305 #329 #340. Two equivalent rebuilds already merged (#268, #354).

## Current bank state on `main` (for calibrating which expansions are still real)

| File | Questions | Open expansion claims | Status |
|---|---|---|---|
| quant/plugging-in.md | 11 | #395 #397 #400 #407 | **Gap is real — merge exactly one** |
| quant/estimation.md | 11 | #409 (#396 partly superseded by merged #402) | **Gap is real — #409 is rebased on main and clean** |
| quant/backsolving.md | 28 | #386 | Obsolete — #401 merged the same 11→28 expansion |
| quant/algebra.md | 97 | 10+ PRs assuming a 34-question file | Obsolete (stale base) |
| quant/exponents-roots.md | 56 | 11 PRs assuming 32-question file | Obsolete — #170/#276 merged |
| quant/arithmetic.md | 78 | several | Obsolete — #167/#222 merged |
| quant/rates-work.md | 44 | several | Obsolete — #129/#134/#137 merged |
| quant/ratios-percents.md | 50 | #224 (Q34–Q50) | Obsolete — #264 merged the same range |
| quant/number-properties.md | 60 | #261 | Obsolete — #259 merged Q35–Q51 |
| quant/word-problems.md | 69 | several | Obsolete — #144/#148 merged |
| quant/combinatorics.md | 72 | several | Obsolete — #157/#163 merged |
| di/two-part-analysis.md | 52 | #212 #213 (Q36–Q52) | Obsolete — #223 merged the same range |
| di/multi-source-reasoning.md | 36 | #277 (+17, Sets 13–16) | **Possibly still valid — review** |
| verbal/reading-comprehension.md | 109 | #297 #207 (assume 73-question file) | Obsolete (stale base) |
| (geometry) | removed | 8 expansion PRs | Obsolete — file no longer exists |

## Recommended triage

A 283-PR backlog cannot be reviewed item by item; the data supports a default-close policy with a short keep-list.

**Step 1 — Bulk-close all open PRs created before 2026-06-09** (~244 PRs). Every content PR from that period was authored against a repo state that the June 9–10 merges replaced (chapter system restructured into per-sub-topic chapters; banks expanded past the ID ranges these PRs append; geometry and Sentence Correction removed). Exceptions worth salvaging, if any, will resurface naturally — the routines re-detect genuine gaps.

**Step 2 — Triage the 39 PRs created on/after 2026-06-09 using the clusters below.** Within each cluster, review the designated candidate first and close the rest.

| Cluster | Open PRs (post-06-09) | Recommendation |
|---|---|---|
| Plugging-in bank 11→28 | #395 #397 #400 #407 | Review **#407** (newest; per its description, scoped against current main); close other three |
| Estimation bank 11→28 | #409 (+stale #396) | Review **#409** — explicitly rebased onto main after #402 merged, reports mergeable-clean; close #396 |
| Statistics audit | #410, #394 | Review **#410** (completes Q21–Q45 standardization on top of merged #387); close #394 |
| Rates & Work audit | #403, #369 | Review **#403** (newer, includes routing fixes); close #369 |
| Answer-Choice Tactics chapter (quant-04) | #383 #406 #408 | Review **#408** (newest); close #383 #406 |
| Algebra expansions/audits | #344 #346 #347 #350 #351 #366 #370 #371 #372 #381 #382 #385 | Close all — base file moved from 34 to 97 questions; expansions and "enrich all 34" audits are stale |
| Geometry | #342 #345 #346 | Close — file removed from main |
| Combinatorics audits | #349 #364 #380 | Likely superseded by merged #373/#376; spot-check #380 (newest), close rest |
| Table Analysis chapter | #340 | Close — superseded by merged #354/#268 |
| MSR chapter rebuild | #343 | Likely superseded by merged #132 and the 06-09 chapter restructure; spot-check, else close |
| Method chapters rebuild | #374 #378 | Likely superseded by merged #384/#377/#402 (plugging-in/backsolving/estimation rebuilds) and quant-04 cluster above; close |
| Fractions / signed-numbers chapters | #365 #367 #368 | #365/#368 superseded by merged #393 (quant-06 rebuild); spot-check #367 (quant-05) — may still be valid |
| DI chapters batch | #348 | Overlaps TA/MSR/TPA work already merged; close |
| UI/study-plan | #353 | Independent of content churn — review on its merits |
| Backsolving | #386 | Close — #401 merged identical scope |

**Step 3 — Fix the process so the backlog does not regrow.** In priority order:

1. **Add a pre-flight duplicate check to every content routine prompt**: "Before creating anything, list open PRs; if an open PR already covers the chosen target, either review/extend that PR's branch or pick the next target. Never open a second PR for the same file + scope." (This run and #409's run both demonstrate the check is feasible — #409's description explicitly tracked #407.)
2. **Throttle routine frequency or gate on backlog size**: skip the run (or emit a report-only run) when open PR count from the same routine family exceeds a small threshold, e.g. 3.
3. **Prefer fewer, larger sessions over many parallel routines**: three near-identical "expand the smallest bank" routines (`beautiful-allen`, `determined-mccarthy`, and the earlier `practical-ride`/`youthful-bohr` families) race each other to the same target every day.
4. **Record product decisions in AGENTS.md** so routines stop regenerating rejected work — e.g. "Geometry and Sentence Correction are off-syllabus for GMAT Focus and were removed; do not create content for them."
5. **Merge order within a file**: merge at most one PR per content file per cycle, audits (in-place edits) and expansions (appends) in separate cycles, since both touch the file tail (problem-set wiring in the chapter file).

## Method and limitations

- Data: all 283 open PRs (10 pages via the GitHub API) and all 124 PRs merged since 2026-05-08; clustering by title keywords and branch-name family; bank sizes counted from `origin/main` file contents; geometry removal verified in `main` history.
- Title-based clustering can mislabel edge cases; changed-file lists were not fetched per PR (283 API calls). The cluster recommendations are "review-first candidates," not blind-merge instructions — except for clusters marked obsolete against merged history, which were verified against `main` directly.
- PR #410 (opened today, after data collection) is included in the triage table from its description.
