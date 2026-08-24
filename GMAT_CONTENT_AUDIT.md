# GMAT Content Audit — 2026-07-13

Deep academic quality audit of the course and question bank. Scope: chapter titles and sequencing, try-before-you-learn pretests, graded problem sets, question classification, Data Sufficiency placement, explanations, answer keys, duplicates, missing visuals, wording, difficulty labels, and GMAT Focus terminology.

Method: mechanical sweep over all 1,979 question blocks and 62 chapters, plus six independent review passes (titles/sequence, pretests, difficulty calibration, explanations/wording, DI visuals, exam-fact consistency). Answer keys were NOT re-audited here — every bank was blind-re-solved and verified on 2026-07-06 (see `reference_gmat_qa_audit_log`); this audit found no reason to reopen that.

Everything under FIXED is applied in this change. Everything under FLAGGED needs your decision — nothing there was touched.

---

## FIXED in this change

1. **Three true duplicate questions rewritten** (same question appearing twice with different letter keys — both keys were individually correct, but a student could meet the identical item twice):
   - `quant/algebra.md` Q79 was byte-identical to Q37 apart from a unicode-minus vs hyphen (which is also why the duplicate-prompt validator missed it). Q79 is now g(f(2)) with f(x)=3x-4, g(x)=x²+1 → C (5).
   - `quant/arithmetic.md` Q47 duplicated `number-properties` Q4 (n mod 7 = 4, remainder of 3n+5). Q47 is now n mod 8 = 5, remainder of n²+3n → A (0), a factoring-first item that matches its Hard label better.
   - `quant/statistics-probability.md` Q23 duplicated `combinatorics` Q35 (heart-or-face-card). Q23 is now spade-or-ace → C (4/13), keeping the same addition-rule teaching point and the no-overlap trap (17/52).
   - All three re-derived by hand and blind-solved by two independent solvers (2/2 agreement, no ambiguity flags). In each pair the pinned sibling was kept and the unpinned one rewritten.

2. **Systematic pretest bug fixed — 24 re-pins across 19 chapters.** Most pretest ids had been pinned on a mechanical 8-question stride (q9, q17, q25, …) on the assumption that banks are organized in topic blocks of 8. They are not, so the "try before you learn" block in these chapters tested the wrong skill (the Assumption chapter opened with two Weaken items; the RC-Inference chapter opened with Main Idea + Detail; the Quadratics chapter opened with a systems item and an absolute-value inequality). Re-pinned to same-bank questions whose topic labels and stems match the chapter skill, all previously unpinned, Easy/Medium where the type allows (Boldface items only exist at Hard):
   - CR: verbal-03 (q191, q126), verbal-04 (q132, q136), verbal-05 (q188, q139), verbal-06 (q144 replacing the Paradox item; q33 kept), verbal-07 (q150, q151), verbal-08 (q91, q105), verbal-09 (q190, q159), verbal-10 (q197, q209), verbal-11 (q163, q165)
   - RC: verbal-16 (q165, q115), verbal-17 (q90, q96), verbal-18 (q113, q120), verbal-19 (q79, q85)
   - Quant: quant-13 (algebra-q41 replacing the exponents item), quant-14 (algebra-q54, q55), quant-15 (algebra-q66), quant-20 (ratios-percents-q36 replacing a DS item), quant-23 (statistics-probability-q21), quant-27 (statistics-probability-q51)
   - Safe for existing users: reader question progress is keyed by question id, not position.

3. **One new RC question authored** — `reading-comprehension` Q178 (Author's Attitude, Passage 41 "The Case for the Sensation Novel", Medium, key B). Needed because pinning two Attitude items dropped verbal-19's practice-test pool below the cap. Blind-verified by two independent solvers (2/2 pick B, judged unambiguous).

4. **9 noncanonical difficulty labels normalized** to the canonical vocabulary ("Challenge" ×3, "Advanced" ×3, "Medium-Hard" ×3 → Hard). No behavior change — the parser already mapped all of these to the top tier — but typos in this field silently mis-tier questions, so the source is now canonical and validator-enforced.

5. **Graphics Interpretation Q38** ("SaaS Dashboard Snapshot") rendered its dashboard as a prose paragraph — the only DI question with no visual (the other 93 GI questions all carry well-formed chart specs; all 93 TA tables and all 29 MSR source sets are present). Its three metrics are now a real table.

6. **`estimated_minutes` recomputed on 22 quant chapters** (quant-08 through quant-29). The old values implied reading speeds of 360–1,362 words per minute (e.g. quant-25: 8 minutes for ~10,900 words) — the chapters were expanded massively after the estimates were written. New values use ~110 wpm, the calibration implied by your own verbal/DI chapters (di-2: 101 wpm, di-6: 91, verbal-13: 124), rounded to 5, capped at 90. This also feeds the study-plan day-load math, which was being told an 85-minute chapter takes 8. Hand-tune any of these if you want different pacing.

7. **Two stale chapter prerequisites fixed** (leftover file-number chaining that contradicts the curated guided path): quant-05 no longer requires quant-04 (which sits 13 positions later in the path) — now `[]`; quant-28 no longer requires quant-27 (10 positions later) — now quant-17-translating-word-problems, its actual prerequisite skill.

8. **verbal-13 title** "RC Reading Process" → "RC: Reading Process" to match all seven RC siblings.

9. **lessons/06** claimed "the mock itself is 3 hours"; the platform's own mock is 3 × 45 min + breaks (165 min in the plan engine). Now "about 2 hours 45 minutes with breaks".

10. **Validator hardened** (`scripts/validate-content.ts`), so these classes can't silently return:
    - duplicate-prompt detection now folds unicode dashes/quotes (would have caught the algebra Q37/Q79 pair)
    - ERROR: noncanonical raw difficulty labels; chapter prerequisite after the chapter in the guided path (or unknown); GI question with neither chart spec nor table
    - WARN: DS question pinned inside a Quant chapter; problem-set tier vs question difficulty-label mismatch; chapter minutes implying > 300 wpm
    - INFO: skill chapter without pretest or without summary; old-scale score anchors ("700+ scorer") in teaching prose

Gate at time of writing: content validator 0 errors, tsc clean, all tests green.

---

## FLAGGED — needs your decision (nothing below was changed)

### 1. Geometry: the course contradicts itself (highest priority)
Your own canonical files disagree about what "geometry is gone" means:
- `chapters/quant-section-intro.md:112` says geometry is "gone entirely" (unscoped — reads as whole-exam).
- `chapters/gmat-welcome.md:42` and `quant-section-intro.md:60` scope the removal to Quant.
- `lessons/03-quant-mastery.md:38` says geometry-flavored reasoning "will show up in Data Insights, not here."

Meanwhile the DI content actively teaches and tests geometry: `chapters/di-2-data-sufficiency.md` has a geometry-DS section (isosceles rephrasing, figure-not-to-scale trap, a Pythagoras worked example); `guides/ds-logic-deep-dive.md` and `guides/di-master-chapter.md` teach geometry DS patterns; the DS bank has ~10 Geometry-topic questions (plus ~39 geometry-flavored items by grep), two-part-analysis ~4, table-analysis ~3.

And several files teach geometry as current *Quant* syllabus, which contradicts every version of the claim: `guides/master-chapter.md:28` ("a narrow slice of geometry") and its full "Coordinate geometry" subsection at :198; `guides/quant-formula-sheet.md:490-492` (triangle inequality / circle radius / parallelogram "common mistakes"); `guides/test-day-checklist.md:69` and `lessons/07-final-week.md:77` (Pythagorean triples, 30-60-90 in the final formula sweep); passing mentions in `guides/pacing-guide.md:63`, `chapters/quant-13:57`, `chapters/quant-07:169`, `lessons/02:173`, `lessons/07:35`.

Decide the editorial line, then sweep everything to it. The two coherent options: (a) "geometry was removed from Quant; some DI items lean on light geometric reasoning" — keep the DI content, fix the "gone entirely" line and every guide that teaches Quant geometry; or (b) "geometry is not tested" — retire the geometry DS/TPA/TA items and the geometry teaching sections. I have not verified either position against GMAC and deliberately make no claim about what the real exam tests; the defect being flagged is that the course says both things at once.

**Regardless of that decision**: `guides/ds-logic-deep-dive.md:537` tells students to "apply law of cosines or sines … or trig identities (limited on GMAT)". Trigonometry is not GMAT content in any edition the platform describes, and no other file claims it is. That line should go.

### 2. Data Sufficiency items inside Quant chapters (12 pins, now a validator WARN)
Quant chapters pin DS-format questions in pretests/checks/problem sets: quant-05 (arithmetic-q18), quant-07 (arithmetic-q86), quant-08 (number-properties-q17), quant-10 (number-properties-q90), quant-15 (algebra-q16), quant-16 (algebra-q19), quant-20 (ratios-percents-q15, -q18), quant-28 (word-problems-q18, -q58, -q60), quant-29 (word-problems-q90). The course itself teaches "Quant = 21 Problem Solving questions, DS moved to DI", and since the July DS→DI reclassification these items even display as DI in the error log while sitting inside a Quant chapter. Recommendation: re-pin each to a same-topic PS item (same mechanics as the pretest fix). One caution for the problem-set ones: in-flight problem-set runs store answers by index (`chapter_progress.problemSetRuns`), so changing set membership scrambles a mid-run resume — either accept that for the handful of active users or clear stored runs for the affected chapters when you do it.

### 3. Problem-set tier vs question difficulty labels (134 mismatches, now a validator WARN)
Easy sets holding Hard-labeled questions and medium sets holding Easy-labeled ones, across ~40 chapters (worst offenders: the CR/RC chapters, quant-14/16/28). The reader shows the set tier and the per-question difficulty side by side, so students see "easy set" containing "Advanced" items. Two possible root causes, and the right fix differs: if the difficulty *label* is wrong, relabel (see item 4 — many Hard labels are inflated); if the *membership* is wrong, re-pin (same index-keyed-runs caution as item 2). Recommend resolving item 4 first, then re-checking this list — many mismatches will dissolve when inflated Hard labels are corrected.

### 4. Difficulty calibration skews high on "Hard"
A stratified re-solve of ~55 questions found 14 labeled a full tier too high and only 1 too low. The over-labels are concentrated in textbook-template problems tagged Hard: all three sampled Hards in `quant/word-problems.md` (Q9 average speed, Q10 combined work with drain, Q11 two-equation mixture) are standard Medium archetypes; also algebra Q10/Q21, ratios-percents Q16, combinatorics Q58, data-sufficiency Q83, backsolving Q50, arithmetic Q12, multi-source Q30, graphics Q46, and RC Q7/Q60 (both credit answers that restate explicit passage text). The one under-label: critical-reasoning Q54 (Easy → Medium). Easy/Medium labels are broadly defensible. Recommendation: a re-review pass over the Hard tier only, starting with word-problems; difficulty labels feed practice-test stratification, mock target-tier pools, and per-difficulty analytics, so this is worth doing but it is a judgment pass, not a mechanical one.

### 5. Old-scale score anchors in teaching prose (~49 sites, now a validator INFO)
Chapters routinely say "700+ scorer", "600-level", "a 600 and a 750 test-taker" while `gmat-welcome` teaches that Focus totals end in 5 ("705 exists, 700 does not") and other chapters correctly use 605/645/685/705/735. I did not auto-convert because a naive +5 rewrite would be wrong: old-scale round numbers and Focus numbers don't describe the same difficulty tier, and picking the mapping is a claim I shouldn't invent. Options: scale-free language ("top scorers", "the hardest items") or your chosen Focus anchors (some chapters already use "685+ difficulty"). The validator INFO rule lists every site.

### 6. quant-27-probability teaches its own intro twice
Sections `probability-basics` ("Probability basics — counting favorable vs total") and `basic-probability` ("Basic probability — favorable over total, and the complement") are two drafts of the same lesson both shipped — both teach P = favorable/total, the 0-to-1 sanity check, and the complement rule, each with its own recall check, before diverging. Consolidating is an authoring job, and section ids are progress keys (`sectionsRead`), so removing one id loses that read-flag for existing users — trivial cost, but be aware.

### 7. CR/RC split: two guides disagree
`guides/verbal-master-chapter.md` says CR ≈ 13 / RC ≈ 10 of the 23 Verbal questions; `guides/verbal-strategy-guide.md:16` and `guides/pacing-guide.md:77` say CR ≈ 11 / RC ≈ 12. Both are hedged with "roughly", but they can't both be the planning assumption. Pick one (or drop the numbers); I can't adjudicate without asserting a GMAC fact I haven't verified.

### 8. Chapter shape gaps (now validator INFOs)
- 45 of 62 chapters have no closing summary (the section intros and a handful of others do). Writing them is authorial.
- quant-04-answer-choice-tactics and quant-30-timing still have no pretest and no problem sets (known from the 07-13 bugfix session; populating them is your call).
- 59 problem sets contain exactly 2 questions, which makes the "target accuracy 80%" framing hollow (scores can only be 0/50/100%). Growing sets to 4+ would make the targets meaningful. DI chapters' large sets (13–21) are fine as deliberate whole-bank designs.

### 9. Title-style inconsistencies (cosmetic)
Quant mixes "Area: Topic" (quant-05..08, 11, 13..17, 21, 23, 24), plain topic (quant-12, 18, 19, 20, 22, 25..30), and "Name: tagline" (quant-01..03). The DI section is labeled three ways across surfaces ("Data Insights", "DI", bare names). Pick one convention when convenient; verbal-13 (the one hard inconsistency) is already fixed.

### 10. Minor flags
- `backsolving` Q36/Q49: same Service X/Y story with different numbers, both in one bank; a student drilling backsolving meets the same scenario twice. Consider re-skinning one.
- `combinatorics` Q89 (BALLOON arrangements) is topic-labeled "Restrictions" but contains no restriction — it routes to quant-26's test pool when it belongs with quant-25's plain arrangements. Relabeling to "Permutations" moves it between pools (both currently healthy).
- Borderline pretests left alone: quant-05's arithmetic-q2 (percent discount in an order-of-operations chapter), quant-09's two Hard pretest items (one leaning on next-chapter remainder technique), quant-11's √50 item (roots, adjacent chapter).
- Trap-note nitpicks: algebra Q1 `mistake_d` stacks two invented errors; statistics-probability Q85 `mistake_b` is vague. Explanations were otherwise sampled clean across all 20 banks.
- Pre-existing open item, unchanged: `guides/reading-verbal-08-elite-solvers.md` five-habits checkpoint (a scenario/label doesn't match the five taught habits).

---

## What was checked and found healthy

- **Answer keys and explanation-vs-key agreement**: 0 mismatches in the mechanical sweep (consistent with the completed 2026-07-06 full-bank blind audit).
- **Explanations and prompt wording**: ~100-question stratified sample across all 20 banks — no mechanical defects; explanations consistently follow principle → setup → solve → verify.
- **DI visuals**: 93/94 GI questions have valid chart specs (the 94th now has a table); all 93 TA questions have real tables; all 29 MSR sets have complete tabs; no dangling "see the figure" references anywhere in quant/verbal.
- **GMAT Focus terminology**: all "Sentence Correction" / "Integrated Reasoning" / 200–800 mentions are deliberate, correct teaching about what changed ("SC is gone", "old IR"); section counts/times (21/23/20 × 45 min), total 64 questions, 205–805 ends-in-5, DS-in-DI-only, and the calculator policy are consistent everywhere (the exceptions are exactly the geometry and score-anchor items flagged above).
- **Guided-path order**: verbal and DI sequencing fully consistent with declared prerequisites; the two quant violations are fixed.
- **Duplicates**: beyond the three fixed pairs, the letter-arrangement family (MISSION/PROGRAM/BALLOON/LEVEL) and the shared RC stems ("The primary purpose of the passage is to") are deliberate template variety, not defects.

No claim in this audit should be read as a statement about what official GMAC materials say, and none of the fixes promises any score outcome.

---

## EDITORIAL CONSISTENCY PASS — 2026-07-13 (approved decisions applied)

Adam approved decisions on flagged items 1-5; this section records what changed and what remains deferred. Verified by script: 0 DS pins in quant chapters, 0 broad "gone entirely" geometry claims, 0 old-scale teaching anchors, and **0 two-tier mismatches remaining** — the 6 formerly flagged were resolved on 2026-07-16 (see the resolution note under item 3+4).

**1. Geometry (flagged item 1) — scoped line adopted:** "Geometry is removed from GMAT Focus Quant, but light geometric reasoning can still appear inside Data Insights contexts."
- `quant-section-intro:112` "gone entirely" rescoped; trig/law-of-sines line in `ds-logic-deep-dive` replaced with a no-trig statement; geometry formulas removed from the `test-day-checklist` and `lessons/07` final-week sweeps; `master-chapter` syllabus line corrected and its Coordinate-geometry subsection kept but labeled "not tested on GMAT Focus Quant — optional background"; three geometry memorization rows deleted from `quant-formula-sheet`; five passing mentions aligned (pacing-guide, quant-07/13, lessons/02/07).
- NOT changed (per decision): the 17 geometry-topic DS/TPA questions and the DI geometry teaching stay — the DI-syllabus question remains open.

**2. DS pins (flagged item 2) — all 12 re-pinned** to chapter-skill Problem Solving items (cross-bank where the home bank had none; every replacement tier-matched, previously unpinned, verified by loader script): quant-05 arithmetic-q18→q50, quant-07 arithmetic-q86→q71, quant-08 number-properties-q17→q56, quant-10 number-properties-q90→q40, quant-15 algebra-q16→number-properties-q37, quant-16 algebra-q19→algebra-q35, quant-20 ratios-percents-q15→q63 and q18→arithmetic-q87, quant-28 word-problems-q58→q87 / q60→ratios-percents-q59 / q18→word-problems-q28, quant-29 word-problems-q90→q34. Mid-run problemSetRuns resume edge accepted per decision. The 12 DS items remain in their banks (they still serve DI drills).

**3+4. Two-tier mismatches (flagged item 3) — 15 of 21 resolved, 6 flagged:**
- 8 relabeled Hard→Medium (all judged over-labeled in flagged item 4's sample): word-problems q9/q10, algebra q10/q21, ratios-percents q16, combinatorics q58, graphics-interpretation q46, reading-comprehension q60.
- 7 re-pinned to Beginner same-skill items: CR q29→q26, q169→q164, q85→q202, q218→q156; RC q3→q18; algebra q9→q100, q22→q36.
- 6 were RESOLVED on 2026-07-16 by authoring one new Beginner (Easy) question per slot — same skill/type as the chapter — and re-pinning each easy set off its Hard item: verbal-02 critical-reasoning-q5→**critical-reasoning-q247** (Easy Strengthen); verbal-04 critical-reasoning-q20→**critical-reasoning-q248** (Easy Evaluate); verbal-14 reading-comprehension-q124→**reading-comprehension-q179** (Easy Main Idea, Passage 44); verbal-17 reading-comprehension-q28→**reading-comprehension-q180** (Easy Application, Passage 45); verbal-18 reading-comprehension-q55→**reading-comprehension-q181** (Easy Function, Passage 46); verbal-19 reading-comprehension-q140→**reading-comprehension-q182** (Easy Author's Attitude, Passage 47). Each new item was blind-solved by independent solvers (unanimous on key) and scenario-checked against all three verbal banks; full drafts and verification in `GMAT_BEGINNER_QUESTION_PROPOSALS.md`. Authoritative tier check now reports **0 two-tier mismatches** (validator `problem-set-tier-mismatch` count dropped 124→118, i.e. the 6 two-tier ones). The 6 displaced Hard items remain in their banks, now unpinned from these sets. The remaining one-tier mismatches stay deferred pending the Hard-tier calibration re-review (flagged item 4, still open beyond the 8 relabels above).

**5. Old-scale score anchors (flagged item 5) — all 49 sites rewritten** scale-free ("top scorers", "the hardest items", "mid-difficulty") per the approved mapping; no numeric old→Focus conversions were made; deliberate old-exam comparisons were left only where the text is explicitly about the old exam. The validator INFO rule now reports zero.

**Still deferred/open from the original flag list:** DI geometry syllabus call (item 1b), the broader Hard-tier calibration re-review (item 4 beyond the 8 relabels), quant-27 duplicate intro sections (item 6), CR/RC split disagreement (item 7), chapter shape gaps (item 8), title-style convention (item 9), minor flags (item 10).

---

## QUESTION-PATTERN CALIBRATION — 2026-08-20

User feedback identified three bank-level signals: Advanced items felt easier
than official advanced practice, the longest Verbal option appeared unusually
often correct, and DS answer C (both statements together) appeared too often.
The full-bank measurement found:

- Verbal overall: the key was uniquely longest on 23.1% of five-choice items,
  close to the 20% random baseline. Advanced Critical Reasoning was the real
  pocket of risk at 30.2%.
- Data Sufficiency: A 20.4%, B 12.9%, C 40.0%, D 18.2%, E 8.4% across 225
  items. This is a genuine source-bank imbalance, not perception.
- The prior audit's named difficulty sample still had six unresolved labels
  judged one tier too high and one judged too low.

Changes applied:

- Eight high-signal Advanced CR items had credible distractors clarified or
  expanded without changing their keys. Advanced CR's uniquely-longest-key
  rate is now 23.3%; only 6/116 have a material length gap under the automated
  definition.
- The six remaining named over-labels were changed Hard→Medium
  (word-problems q11, data-sufficiency q83, arithmetic q12, MSR q30, RC q7;
  backsolving q50 was already Medium), and CR q54 changed Easy→Medium.
- DS delivery now rotates A-E outcomes within the same freshness and
  difficulty band. It never moves a seen item ahead of an unseen item and
  never reletters a DS key. The raw bank remains historically C-heavy and
  should be improved through future blind-solved reauthoring; an automated
  ceiling prevents that imbalance from worsening.
- A reusable calculator now appears only on DI solving surfaces, matching the
  current exam's section-level calculator policy.

Still open: the larger item-by-item Advanced-tier re-review and source-level DS
reauthoring. Delivery balancing removes the exploitable short-set pattern but
does not make the authored bank itself statistically even.

---

## ADVANCED DIFFICULTY CALIBRATION — 2026-08-21

This pass addressed the remaining high-confidence Quant and DI inflation in
the Advanced tier. It used the established rubric in `QUESTION_TAXONOMY.md`:
Advanced difficulty must come from multiple dependent constraints, a
non-obvious inference, or a meaningful method switch. Length, jargon, routine
calculation, and the presence of a familiar formula do not qualify by
themselves.

### Measurement and decisions

- The starting bank contained 616 Advanced-labelled questions.
- A full-bank structural screen identified 63 candidates whose explanations
  described direct substitution, direct reading, a one-step identity, or a
  similarly short path. Every changed item was then reviewed individually;
  the screen was never used as an automatic relabeller.
- 37 clear one-tier inflations were changed Hard -> Medium. The affected
  patterns were direct sequence sums and quadratics, routine reciprocal and
  nested-fraction arithmetic, repeated exponential-to-quadratic templates,
  one-cycle remainder searches, direct closing-rate and equal-distance
  average-speed templates, single-identity DS statements, direct chart/table
  filtering, elementary probability complements, and basic TPA intersections.
- Three newly authored multi-constraint questions were added at Hard:
  `arithmetic-q125` (changing fraction bases), `arithmetic-q126` (sequential
  allocation with a linked final constraint), and `backsolving-q53`
  (three ticket classes, a ratio constraint, and a revenue constraint).
- The resulting bank contains 582 Advanced questions. The same structural
  screen now flags 29 rather than 63; the remaining non-Verbal flags are
  genuinely layered on review. Most remaining candidates are passage-dependent
  CR/RC items for which short stems and absent `fastest_path` metadata are not
  evidence of low difficulty, so they were deliberately left unchanged.

### Chapter-set protection

Relabelled questions that occupied hard chapter-set slots were replaced in
place, preserving set lengths and question positions for active users:

- Fractions/Decimals: `arithmetic-q11/q66` -> new `q125/q126`.
- Backsolving: `backsolving-q11` -> new `q53`.
- Graphics Interpretation: direct CAGR `q14` -> trend-deviation `q94`.
- Table Analysis: direct three-filter `q93` -> derived-metric plus threshold
  `q53`.
- Two-Part Analysis: elementary probability/intersection `q22/q34` ->
  multi-phase work-rate `q61` and two-constraint production `q69`.

The relabelled questions remain available in the general practice banks at
their corrected Medium tier. No existing answer key changed. The bubble-chart
item `graphics-interpretation-q47` also now says "option E (Product F)" in its
explanation so the option letter cannot be confused with the product label.

### Regression coverage

`tests/question-difficulty-calibration.test.ts` locks all 37 reviewed labels,
the three new Advanced items, the hard-set replacements, the Product F answer
mapping, and a minimum Advanced-pool depth. Together with the existing answer-
pattern guardrails, this prevents either difficulty inflation or accidental
pool depletion from returning silently.

---

## CHAPTER TIER AND POOL COMPLETION — 2026-08-24

This pass closed the validator's 87 adjacent-tier warnings without mechanically
changing question difficulty. The warning mixed two different scales: a
chapter's Easy/Medium/Hard sets are relative steps within one skill, whereas a
question's Beginner/Intermediate/Advanced label is calibrated globally across
the full GMAT bank. That distinction matters most for intrinsically demanding
formats such as Boldface and RC Inference. Treating every adjacent difference
as an error would either inflate set labels or understate global difficulty.

The validator now preserves the meaningful invariant: any two-tier jump
(Beginner in a Hard set or Advanced in an Easy set) is still a release-blocking
error. Adjacent-tier scaffolding is allowed. The current bank has zero two-tier
jumps.

### Genuine gaps completed

Sixteen original questions were added and reviewed against their stated keys:

- Quant test pools: one LCM item, one even/odd item, and two
  permutations/combinations items.
- Verbal test pools: two argument-structure items, one Boldface item, two
  Complete-the-Argument items, and three Author's Attitude passage items.
- Method pretests: two Answer-Choice Tactics items and two Quant Timing items.

The seven previously thin test pools now meet their section cap exactly:
Quant chapters have at least 15 questions and Verbal chapters have at least 8.
`quant-04-answer-choice-tactics` and `quant-30-timing` now each begin with a
two-question try-before-you-learn pretest. The method questions are pinned to
their readers and excluded from unrelated practice-test pools by the existing
reader/test separation rule.

### Verification

`tests/content-completion-batch.test.ts` locks all 16 keys, five distinct
options per item, the seven completed pools, both pretest pin sets, and the
zero-two-tier-jump invariant. The content validator now reports 0 errors and
0 warnings across 2,006 questions.

---

## QUESTION ROUTING PRECISION — 2026-08-24

This pass removed the chapter-test router's dependence on implicit bank
defaults. Before the change, 278 questions across seven shared Quant banks
reached a chapter only because no routing keyword matched their subtopic. Most
landed in the intended dominant chapter, but the same mechanism could silently
place a newly tagged question in the wrong chapter.

Every subtopic currently present in those banks is now explicit. Cross-bank
topics route to the chapter that teaches them: averages to Statistics,
arithmetic sequences and symmetric sums to Functions and Sequences, production
and inverse-proportion work to Work Rate, and finance calculations to Percents.
The Classic Word Problems mapping preserves the chapter's own curriculum for
ages, consecutive-integer setups, payroll constraints, distribution, and
optimization. One original terminating-decimal question (`arithmetic-q132`)
was added so removing a misplaced averages item did not thin the Fractions and
Decimals pool.

The catch-all rule remains as a runtime safety net, but the validator now warns
on even one default-routed question. Regression coverage loads the complete
bank and requires every current shared-bank question to resolve explicitly,
while representative assertions lock the corrected cross-bank destinations.

---

## CHAPTER RECAP COMPLETION — 2026-08-24

This pass completed the 45 skill chapters that ended without a dedicated
summary step. Each new recap is chapter-specific and compresses the lesson
into three retrieval points: the governing method, the highest-value decision
rule, and the trap or verification habit the student should carry into
practice. Orientation chapters remain exempt, while the 13 chapters that
already had substantial summaries were left unchanged.

The recap is now a typed final section in every skill chapter rather than prose
buried inside the last reading block. This lets the chapter reader present a
consistent closing step and gives students a predictable final review before
the graded problem sets. The content-health validator's mental-model threshold
now counts reading sections only, so adding a recap cannot create a false
long-chapter warning.

`tests/chapter-recaps.test.ts` requires every non-orientation chapter to end
with exactly one nonempty summary and at least three retrieval bullets. The
content validator's `chapter-no-summary` count is now zero.
