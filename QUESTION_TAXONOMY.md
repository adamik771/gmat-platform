# Question Bank Taxonomy

This document defines the schema, controlled vocabularies, and storage structure for the curriculum-aligned question bank.

## Purpose

Every question in the new bank is *connected to a specific reading subchapter* and tagged so the platform can:

- Recommend questions that drill the skill a student just read about
- Filter analytics by trap type (which named trap caught the student?)
- Compute pacing fitness (was the student over the estimated time on this question type?)
- Show prerequisite gaps (a wrong answer points back to a prerequisite chapter)

The taxonomy extends the existing per-question metadata; it does not replace it.

## Schema (per question)

Each question is stored as a markdown block within a `.md` file under `src/content/questions/curriculum/`. Per-question metadata uses the existing `**field:** value` format. The complete field set:

| Field | Required | Type | Notes |
|---|---|---|---|
| `id` | auto | string | Generated as `${fileSlug}-q${n}` (existing convention) |
| `section` | yes (file frontmatter) | enum | `Quant` / `Verbal` / `DI` |
| `topic` | yes (file frontmatter) | string | High-level content area |
| `difficulty` | yes | enum | `Easy` / `Medium` / `Hard` |
| `type` | yes | enum | One of 10 existing question types |
| `topic` (per question, overrides file) | optional | string | Subtopic / specific focus |
| `subchapter` | **new — yes** | slug | Reading chapter address. See *Subchapter slug convention* below. |
| `skill` | **new — yes** | slug | Specific skill the question trains. See *Skill catalog* below. |
| `trap_type` | **new — yes** | slug | Named trap from the curriculum. See *Trap-type vocabulary* below. |
| `est_time_seconds` | **new — yes** | integer | Target solving time for an elite scorer (90th+). Typical: 45-180. |
| `prerequisite` | **new — yes** | slug list | Reading-chapter slugs the student should already know. Comma-separated. |
| `answer` | yes | letter | `A`-`E` |
| `fastest_path` | **new — yes** | one-line text | The quickest GMAT-strategic move — what an elite scorer reaches for first (estimation, backsolving, structural shortcut, etc.). |
| `explanation` | yes | text | Full step-by-step worked reasoning, including why the correct answer is correct. |
| `mistake_a`, `mistake_b`, `mistake_c`, `mistake_d`, `mistake_e` | **new — yes** | one-line text | Per-choice analysis — what trap or reading mistake each wrong choice is engineered to catch. Skip the correct-answer slot. |
| `common_trap` | **new — yes** | one-line text | The primary engineered failure mode this question deploys (named trap from the curriculum's trap inventory). |
| `takeaway` | **new — yes** | one-line text | The generalizable lesson — what the student should learn beyond this specific problem. |
| `related_reading` | **new — yes** | slug | Primary reading-chapter slug the explanation points back to (e.g., `reading-quant-04-algebra-and-equations`). For multi-chapter questions, list the most relevant single chapter. |
| `hint_nudge`, `hint_strategy`, `hint_setup` | optional | text | Progressive hints (existing) |

## Subchapter slug convention

Format: `{section_letter}{chapter}.{section}` where:

- `section_letter` is `q` / `v` / `d` for Quant / Verbal / DI
- `chapter` is the chapter number (e.g., `1.1`, `2.4`, `3.5`)
- `section` is optional — names the subchapter section (`core`, `why`, `mental`, `signals`, `method`, `traps`)

Examples:

- `q1.1` → Quant Ch 1.1 (The Quant Mindset), whole chapter
- `q1.1.method` → Quant 1.1, the Method subsection specifically
- `q1.4.traps` → Quant 1.4 (Algebra), the Common Traps subsection
- `v2.4.weaken` → Verbal 2.4 (CR Question Types), the Weaken sub-treatment
- `d3.2.value` → DI 3.2 (DS Logic), the Value-sufficiency sub-treatment
- `d3.5` → DI 3.5 (MSR), whole chapter

Whole-chapter slugs (`q1.1`) are appropriate when a question integrates skills from multiple subchapters. Section-specific slugs (`q1.1.method`) are appropriate when the question targets one specific teaching block.

## Skill controlled vocabulary

Skills are kebab-case slugs naming the specific operation the question trains. Free-form initially, but should match the curriculum's recognition signals and method steps. Examples per section:

### Quant skills

- `method-selection-on-spread-answers` (Quant 1.1)
- `method-selection-on-sortable-integers` (Quant 1.1)
- `pre-think-shape-constraint-variables` (Quant 1.1)
- `thirty-second-checkpoint-switch` (Quant 1.1)
- `sanity-check-before-bubble` (Quant 1.1)
- `multiplicative-percent-chaining` (Quant 1.2)
- `sign-tracking-distribution` (Quant 1.2)
- `fraction-decimal-percent-conversion` (Quant 1.2)
- `estimation-by-rounding` (Quant 1.2)
- `prime-factorization-divisibility` (Quant 1.3)
- `coprime-vs-non-coprime-divisibility` (Quant 1.3)
- `units-digit-cycles` (Quant 1.3)
- `consecutive-integer-properties` (Quant 1.3)
- `quadratic-factoring-recognition` (Quant 1.4)
- `inequality-sign-flip` (Quant 1.4)
- `algebraic-shortcut-vs-substitution` (Quant 1.4)
- `combined-rate-translation` (Quant 1.5)
- `weighted-average-translation` (Quant 1.5)
- `mixture-balance-equations` (Quant 1.5)
- `overlapping-sets-inclusion-exclusion` (Quant 1.5)
- `sd-conceptual-reasoning` (Quant 1.6)
- `complement-counting` (Quant 1.6)
- `permutations-vs-combinations` (Quant 1.6)
- `special-triangle-recognition` (Quant 1.7)
- `inscribed-angle-theorem` (Quant 1.7)
- `parallel-line-transversal-angles` (Quant 1.7)
- `coordinate-distance-slope` (Quant 1.7)

### Verbal skills

- `conclusion-vs-evidence-identification` (Verbal 2.2)
- `assumption-bridging-causal` (Verbal 2.2)
- `question-stem-task-recognition` (Verbal 2.3)
- `pre-think-form-not-word` (Verbal 2.3)
- `cr-strengthen-rule-out-alternative` (Verbal 2.4)
- `cr-weaken-alternative-cause` (Verbal 2.4)
- `cr-assumption-negation-test` (Verbal 2.4)
- `cr-inference-must-vs-could` (Verbal 2.4)
- `cr-paradox-resolve-both` (Verbal 2.4)
- `paragraph-role-identification` (Verbal 2.5)
- `attribution-tracking` (Verbal 2.5)
- `rc-main-idea-whole-passage` (Verbal 2.6)
- `rc-detail-return-and-verify` (Verbal 2.6)
- `rc-function-role-identification` (Verbal 2.6)
- `rc-inference-text-forced` (Verbal 2.6)
- `extreme-language-elimination` (Verbal 2.7)
- `outside-knowledge-elimination` (Verbal 2.7)

### DI skills

- `ds-yes-no-vs-value-sufficiency` (DI 3.2)
- `ds-test-statements-alone-first` (DI 3.2)
- `ds-edge-case-testing` (DI 3.2)
- `table-sort-to-find` (DI 3.3)
- `table-unit-checking` (DI 3.3)
- `chart-axes-before-content` (DI 3.4)
- `chart-non-zero-baseline-recognition` (DI 3.4)
- `chart-log-scale-recognition` (DI 3.4)
- `msr-source-mapping` (DI 3.5)
- `msr-cross-source-synthesis` (DI 3.5)
- `tpa-constraint-pair-elimination` (DI 3.6)
- `tpa-categorical-constraint` (DI 3.6)
- `business-tradeoff-joint-computation` (DI 3.7)
- `business-conditional-recommendation` (DI 3.7)

This list is non-exhaustive; new skills can be added as the bank grows. Maintain kebab-case naming and link each skill to its primary subchapter via the `subchapter` field.

## Trap-type controlled vocabulary

Trap types are the *named wrong-answer patterns* the curriculum's traps chapters catalog. A question is tagged with the *primary* trap its wrong answers are positioned to exploit.

### Quant traps (from Quant 1.9 + content-specific traps)

- `algebra-by-default` — solving algebraically when backsolving/estimation would have been faster
- `computation-when-estimation-suffices`
- `solving-past-sufficiency` — computing values not needed for the question
- `missing-algebraic-shortcut` — using full substitution when an identity (difference of squares, adding-to-cancel, etc.) would collapse the work
- `ignoring-constraints` — math-valid but constraint-invalid answer
- `grinding-past-checkpoint` — sunk-cost continuation
- `percent-base-confusion` — "X% greater than" vs. "X% of"
- `additive-percent-chaining` — adding chained percent changes
- `cross-multiply-unknown-sign` — flipping inequality direction
- `decimal-place-loss`
- `sign-loss-distribution`
- `divisor-direction-confusion` — "divisor of" vs. "is a divisor of"
- `1-as-prime`
- `non-coprime-divisibility` — assuming `a × b` divisibility from `a` and `b` separately
- `units-digit-cycle-misuse`
- `consecutive-integer-overlooked-properties`
- `squaring-without-sign-check`
- `inequality-sign-flip-miss`
- `absolute-value-single-case`
- `quadratic-formula-overuse`
- `formula-addiction` — reaching for nCr or P(A∩B) when structural reasoning is faster
- `arrangements-vs-combinations`
- `independence-confusion`
- `inclusion-exclusion-double-count`
- `complement-not-used`
- `sd-misread-shift-vs-spread`
- `triangle-trust-the-diagram`
- `chord-vs-diameter-confusion`
- `perpendicular-slope-misapplied`

### Verbal traps (from Verbal 2.7)

- `too-broad`
- `too-narrow`
- `extreme-language`
- `reversed-direction`
- `unsupported`
- `partially-right-wrong-function`
- `wrong-viewpoint`
- `outside-knowledge`
- `distorted-comparison`
- `causal-exaggeration`
- `over-inference`
- `passage-language-wrong-meaning`
- `dictionary-vs-context-meaning`
- `attribution-confusion`

### DI traps (from DI 3.9)

- `wrong-unit`
- `wrong-denominator`
- `correlation-as-causation`
- `trend-extrapolation`
- `irrelevant-data`
- `hidden-condition-violation`
- `sorting-mistake`
- `scale-mistake` (graph)
- `source-mixing`
- `non-zero-baseline-deception`
- `log-scale-deception`
- `dual-axis-deception`
- `tpa-cells-treated-independently`
- `business-outside-intuition`

## Difficulty calibration

| Difficulty | Description | Estimated time (elite) |
|---|---|---|
| `Easy` | Tests one concept directly. Recognition signal is obvious. The student's first instinct is usually correct. | 45-90 sec |
| `Medium` | Tests one concept under mild ambiguity *or* tests two concepts in combination. Recognition signal exists but requires reading carefully. The trap is engineered but visible to a careful reader. | 75-135 sec |
| `Hard` | Tests multiple concepts together, requires non-obvious recognition, *or* contains a deliberately engineered trap that catches even careful readers. The fastest path requires structural insight. | 120-210 sec |

Difficulty should be calibrated to the *full population of test-takers*, not just elite ones. Easy = >75% accuracy; Medium = 50-75%; Hard = <50%.

## Estimated solving time guidelines

`est_time_seconds` is the time an *elite scorer* (90th+ percentile) should take. Used by analytics to flag pacing gaps.

| Section | Easy | Medium | Hard |
|---|---|---|---|
| Quant | 45-75 sec | 75-120 sec | 120-180 sec |
| Verbal CR | 60-90 sec | 90-120 sec | 120-180 sec |
| Verbal RC | 45-75 sec/Q | 75-120 sec/Q | 120-180 sec/Q |
| DI DS | 45-75 sec | 75-120 sec | 120-180 sec |
| DI Tables / Graphics | 45-75 sec | 75-105 sec | 105-150 sec |
| DI MSR (per sub-question) | 60-90 sec | 90-150 sec | 150-210 sec |
| DI Two-Part | 75-120 sec | 120-180 sec | 180-240 sec |

For RC and MSR, time is per sub-question and excludes the initial passage/tab read.

## Prerequisite-concept format

Comma-separated list of reading-chapter slugs the student should already know:

```
**prerequisite:** reading-quant-01-mindset, reading-quant-04-algebra-and-equations
```

For questions tied to a single chapter, the prerequisite is typically just that chapter's predecessor(s) plus its own foundational concepts.

## File organization

New questions go in:

```
src/content/questions/curriculum/
  q-quant-01-mindset.md
  q-quant-02-arithmetic.md
  q-quant-03-number-properties.md
  q-quant-04-algebra.md
  q-quant-05-word-problems.md
  q-quant-06-stats-prob-combo.md
  q-quant-07-geometry.md
  q-quant-08-method-selection.md
  q-quant-09-error-patterns.md
  q-quant-10-elite.md
  q-verbal-01-mindset.md
  q-verbal-02-argument-structure.md
  q-verbal-03-cr-framework.md
  q-verbal-04-cr-types.md
  q-verbal-05-rc-mindset.md
  q-verbal-06-rc-types.md
  q-verbal-07-trap-patterns.md
  q-verbal-08-elite.md
  q-di-01-mindset.md
  q-di-02-ds-logic.md
  q-di-03-tables.md
  q-di-04-graphics.md
  q-di-05-msr.md
  q-di-06-two-part.md
  q-di-07-business.md
  q-di-08-timing.md
  q-di-09-traps.md
  q-di-10-elite.md
```

File-level frontmatter:

```yaml
---
section: Quant
topic: Method Selection
reading_chapter: reading-quant-01-mindset
---
```

The new `reading_chapter` field lets the platform link a question file directly to its source chapter for navigation and recommendation.

The existing topic-organized files (`algebra.md`, `arithmetic.md`, etc.) remain for legacy/general practice.

## Parser extension required

`src/lib/content.ts`, `parseQuestionBlock()` — extend the meta regex to recognize the new fields:

**Current:**

```typescript
const metaRegex = /\*\*(difficulty|type|topic|answer|explanation|hint_nudge|hint_strategy|hint_setup):\*\*\s*([^\n]*)/gi
```

**Updated:**

```typescript
const metaRegex = /\*\*(difficulty|type|topic|answer|explanation|hint_nudge|hint_strategy|hint_setup|subchapter|skill|trap_type|est_time_seconds|prerequisite|fastest_path|common_trap|takeaway|related_reading|mistake_a|mistake_b|mistake_c|mistake_d|mistake_e):\*\*\s*([^\n]*)/gi
```

`ParsedQuestion` interface — add optional fields:

```typescript
export interface ParsedQuestion {
  // ... existing fields
  subchapter?: string
  skill?: string
  trapType?: string
  estTimeSeconds?: number
  prerequisite?: string[]
  fastestPath?: string
  commonTrap?: string
  takeaway?: string
  relatedReading?: string
  mistakeAnalysis?: Record<"A" | "B" | "C" | "D" | "E", string>
}
```

Parsing logic for `prerequisite` (comma-split) and `est_time_seconds` (integer parse) must be added in `parseQuestionBlock`.

## Database schema extension (optional)

To filter analytics by trap type and subchapter, extend `practice_attempts`:

```sql
ALTER TABLE practice_attempts
  ADD COLUMN subchapter text,
  ADD COLUMN skill text,
  ADD COLUMN trap_type text,
  ADD COLUMN est_time_seconds int;
```

When the session client posts an attempt (in `/api/practice-sessions`), include these fields by reading them off the `ParsedQuestion`. Then `/analytics` and `/error-log` can filter by `trap_type` to surface dominant patterns.

This DB extension is *optional* for shipping the bank — the question metadata is in markdown either way. The DB column is needed only for *attempt-level* filtering.

## Originality rule

Every question is original. No question is copied or closely paraphrased from any GMAT prep source. Scenarios, numerical setups, and answer-choice arrangements are written from scratch for each question. Tropey scenarios (Tom-and-Sarah painters, coffee/diabetes correlation, bike-lane traffic) are explicitly avoided.

## Standardized explanation format

Every question's post-submit explanation follows the same six-section structure. Each section is a distinct meta field so the platform UI can render them independently (collapsible sections, layered reveal, etc.) and analytics can filter by section.

| Section | Field name | Purpose | Length |
|---|---|---|---|
| 1. Fastest path | `fastest_path` | The quickest GMAT-strategic move — what an elite scorer reaches for first | 1 line (15-30 words) |
| 2. Full reasoning | `explanation` | Complete step-by-step worked solution, including why the correct answer is correct | 3-6 sentences |
| 3. Answer choice analysis | `mistake_a` ... `mistake_e` | One-line note per wrong choice explaining what trap or mistake it represents | 1 line each |
| 4. Common trap | `common_trap` | The primary engineered failure mode this question deploys (named trap from the curriculum) | 1 line (10-25 words) |
| 5. Takeaway | `takeaway` | Generalizable lesson — what the student should learn beyond this specific problem | 1 line (10-25 words) |
| 6. Related reading chapter | `related_reading` | Slug of the primary reading chapter that teaches this skill | 1 slug |

**Quality bar.** Every explanation must:

- Lead with the *fastest* approach, not the most general or most algebraic one. If estimation works, lead with estimation.
- Be GMAT-strategic — point at *which method dominates and why*, not just "here's how to solve it."
- Explain wrong answer choices by *trap type*, not just "this is wrong." A wrong answer is wrong because it's engineered to catch a specific reading mistake; name the mistake.
- Connect back to a reading chapter via `related_reading`. The explanation is reinforcement; the chapter is the lesson.

**Rewriting rubric.** Existing explanations should be rewritten when they are:

- *Vague.* "Use algebra to solve" — doesn't say which algebraic move or why.
- *Too long.* Multi-paragraph walkthrough that buries the strategic insight under arithmetic.
- *Too short.* "B. 3x = 15." — no reasoning, no trap analysis, no takeaway.
- *Not GMAT-strategic.* Walks through a textbook procedure without identifying the fastest path or the engineered trap.

Match the new format. Keep each field tight. Lead with strategy, then arithmetic.

## Mistake analysis format

For each wrong answer choice, a one-line `**mistake_X:**` field explains what specific reading mistake or trap pattern that wrong answer is engineered to catch. The `**mistake_X:**` is *not* shown to the student during the question; it surfaces in the post-submit explanation panel and feeds the error-log's tagging suggestions.

## Question count target

Initial bulk generation target: **8-12 questions per subchapter** spread across difficulties (3 easy / 4-6 medium / 2-3 hard). Across 30 chapters × 6 subchapters × 10 questions average = **~1,800 questions** total. Bulk generation can be split across multiple waves; minimum viable bank is the major-content subchapters (Quant 1.2-1.7, Verbal 2.2-2.6, DI 3.2-3.6).

## Example question

```markdown
## Q1
**difficulty:** Medium
**type:** Problem Solving
**topic:** Method Selection
**subchapter:** q1.1.method
**skill:** method-selection-on-sortable-integers
**trap_type:** algebra-by-default
**est_time_seconds:** 75
**prerequisite:** reading-quant-01-mindset

A theater sells adult tickets for $14 and student tickets for $9. On a particular evening, 180 tickets were sold for total revenue of $2,070. How many student tickets were sold?

- A) 60
- B) 90
- C) 100
- D) 110
- E) 130

**answer:** B
**fastest_path:** Backsolve from C — clean integer answer choices, sortable, two checkable constraints (count and revenue).
**explanation:** Two equations would be s + a = 180 and 9s + 14a = 2,070, but backsolving from C is faster. Test C (100 students, 80 adults): 80(14) + 100(9) = 1,120 + 900 = 2,020. Too low; need higher revenue, so more adult tickets relative to students — i.e., *fewer* students. Test B (90 students, 90 adults): 90(14) + 90(9) = 1,260 + 810 = 2,070 ✓. Answer is 90.
**mistake_a:** Bubbled the wrong direction after starting at C — concluded "too low" means more students needed (it actually means more adults).
**mistake_c:** Stopped at the starting point without iterating after seeing it didn't match.
**mistake_d:** Algebra arithmetic slip during substitution.
**mistake_e:** Inverted the relationship — solved for adult tickets and bubbled that count.
**common_trap:** algebra-by-default — students reach for systems of equations when backsolving from C resolves the question in 1-2 trials.
**takeaway:** Sortable integer answer choices + two checkable constraints = backsolving wins; algebra is the fallback, not the default.
**related_reading:** reading-quant-08-method-selection
```

## What's next

Once Adam validates this taxonomy, the bulk generation phase produces ~1,800 original questions in the format above, organized by curriculum chapter. Generation can be batched by section and difficulty. Each batch is verified for originality (no scenario reuse, no copyright-adjacent setups) and parser-compatibility (build still passes after each file is added).
