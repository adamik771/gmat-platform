# Question Bank Audit — 2026-04-27

Senior-instructor + editor + learning-scientist + copyright-risk review of the question bank under `src/content/questions/`. ~709 questions across 17 files (Quant 294, Verbal 197, DI 218).

This is a **focused sample audit** — I did not re-validate every item end-to-end. The findings below come from systematic pattern grep, spot reading across difficulty bands, math verification on a sample, and cross-referencing against the standing rules in `QUESTION_TAXONOMY.md`. The framework section is reusable for follow-up passes.

## 1. Audit framework

Six lenses, each tied to a flag severity and an action.

| Lens | What we check | Severity bands |
|---|---|---|
| **Senior instructor** | Math correctness, strategic-method integrity, answer-key validity, distractor calibration | P0 = wrong answer / impossible setup; P1 = math right but pedagogically off |
| **Editor** | Wording clarity, ambiguity, prompt → choices fit, length discipline | P1 = ambiguous or padded; P2 = stylistic |
| **Learning scientist** | Difficulty calibration vs. observed effort, mistake-analysis quality, retention design | P1 = mis-labeled difficulty or weak mistake analysis; P2 = passable but not exemplary |
| **Copyright-risk reviewer** | Scenario originality, distance from common test-prep templates and OG question shapes | P0 = direct OG/source recall; P1 = explicit-trope violation per QUESTION_TAXONOMY.md ("painters", "bike-lane", "coffee/diabetes"); P2 = generic but not flagged |
| **Format / integrity** | Whether the rendered surface preserves the test's signal (e.g., DI Graphics that prints data values defeats the "interpret a graph" mode) | P1 = format leaks information |
| **Template fatigue** | Same scenario shape (`The company / city council / X-week study`) recycled at saturation | P2 = ≥30% of a section's items share an actor framing |

**Severity → action.**

- **P0** ship a fix this turn (math errors, multiple-correct-answers, broken setups).
- **P1** queue for the next bulk pass; flag in `HANDOFF.md`.
- **P2** record only; revisit when the bank stops growing.

## 2. Findings — revision table

### P0 — must fix

| ID | File | Issue | Status | Notes |
|---|---|---|---|---|
| `arithmetic-q19` | `quant/arithmetic.md` | Original answer key was B (11/32). Correct minimum-gap fraction is E (13/40). | **Fixed** during prior bulk rewrite. Verified math in current version. | Logged in HANDOFF (2026-04-26). Adam should still review the change. |
| `number-properties-q9` | `quant/number-properties.md` | Original choices A=2431, D=6820, E=7238 are all divisible by 11. Three correct answers. | **Fixed** by replacing D=6820 → 6810 and E=7238 → 7239. Stated answer A unchanged. | Logged in HANDOFF (2026-04-26). |
| `rates-work-q10` | `quant/rates-work.md` | Setup said "+10 mph saves 15 min" — no answer in {30,35,40,45,50} gives 15 min (closest: r=40 → 18 min, r=45 → 14.5 min). | **Fixed** by changing "15 minutes" → "18 minutes" in the prompt; r=40 (answer C) now matches. | Logged in HANDOFF (2026-04-26). |
| `word-problems-q26` | `quant/word-problems.md` | Uses "painters" scenario — explicitly banned by `QUESTION_TAXONOMY.md` ("Tom-and-Sarah painters" trope). | **Fixed this audit** — rewrote scenario to industrial-cleaning robots. Math preserved. Distractors strengthened. | See `§3.A` for full rewrite. |
| `critical-reasoning-q113` | `verbal/critical-reasoning.md` | Uses "bike lane / city council" scenario — explicitly banned ("bike-lane traffic" trope). | **Fixed this audit** — rewrote scenario to a corporate office shuttle program. Argument logic preserved. | See `§3.B` for full rewrite. |

### P1 — queue for next pass

| ID / Pattern | File(s) | Issue | Recommended action |
|---|---|---|---|
| Weak distractor analysis: "Slip → 6 / 7 / 8 / 9" | Many files (sampled in `word-problems-q26`, `rates-work-q4`, `geometry-q2`) | When the four wrong choices all carry the same "Slip → N" placeholder explanation, students learn nothing from the distractor. Defeats the whole point of the standardized 6-section format. | Replace with named-error mistake analysis (e.g., "wrote `60 × 2 = 120, ignored the 0.5`" or "halved the rate ad-hoc"). The geometry / number-properties files largely already do this; arithmetic / rates-work / word-problems have residual placeholders. |
| DI Graphics format leak | `di/graphics-interpretation.md` (all 50 questions) | Each question's "Description" prints the underlying data values as plain text (e.g., "Jan 85, Feb 92, Mar 110…"), which defeats the read-the-graph integrity. Students can solve without parsing any graphic. | Either render real graphs (chart.js / SVG) or rewrite the questions so the prompt only says *what kind* of graph is shown and the data is read from a rendered axis-only figure. P1 because it's the integrity backbone of an entire DI subsection. |
| DI TA format simplification | `di/table-analysis.md` (all 49 questions) | Each item is a single Yes/No statement; real GMAT Table Analysis is 1 table × 3 paired statements (all-or-nothing scoring). Mismatch reduces the format-fluency value of practicing here. | Bundle 3 statements per item, score requires all 3 correct. Engine change required (existing `SessionClient` doesn't support 3-statement items). |
| `critical-reasoning.md` template fatigue | `verbal/critical-reasoning.md` | "The company / city council / regional X" framing appears in ~58 of 124 items (~47%). Some clustering is normal in CR (these are common business contexts), but at this density students start pattern-matching the *frame* rather than the *argument structure*. | Refactor 30-40% of the existing items to use less-common actor framings (school district, hospital network, manufacturer, civic non-profit, individual researcher) without changing the argument logic. Light touch. |
| `critical-reasoning.md` Q9-Q10 cause variety | `verbal/critical-reasoning.md` | Several items use the same "tech CEO / pharmaceutical / agricultural economist" actor across Strengthen, Weaken, Assumption — minor repetition of voice. | Diversify the actor / role on duplicates. |
| Repeated answer-set patterns | Multiple Quant files | A handful of questions use "0, 0.25, 0.5, 0.75, 1" or evenly-spaced-by-1 answer choices that aren't tightly engineered to catch specific errors (just round numbers around the correct value). | Authoring guidance: prefer answer sets where each wrong choice is *the* result of a specific named error. |
| `statistics-probability-q21` | `quant/statistics-probability.md` | Median problem with distinct positive integer constraints. Math is correct but the prompt could be parsed two ways (when distinctness applies). | Tighten the wording to "five distinct positive integers a < b < c < d < e" so the ordering is explicit. |
| `combinatorics-q20` | `quant/combinatorics.md` | Hard, restricted combinations. Math correct. The fastest-path note recommends complement counting; the explanation goes through case-split first. Lead with complement when it's faster. | Re-order the explanation: complement first, case-split as the verification. |

### P2 — record only

| ID / Pattern | File(s) | Issue | Disposition |
|---|---|---|---|
| Difficulty band drift | Sampled in `quant/exponents-roots.md` and `verbal/critical-reasoning.md` | A handful of items labeled "Easy" feel Medium under timed conditions; "Hard" labels are more reliable. | Defer until per-question observed-difficulty data accumulates from real attempts. Calibration is empirical. |
| Voice consistency | `quant/*.md` | Some explanation lines are first-person ("we factor"); others are imperative ("Factor 36 = …"). | Standardize on imperative voice in a copy-edit pass once the bulk-rewrite waves finish. |
| Generic distractor letters in mistake analysis | Many files | Inferring which trap a wrong choice represents from "Slip → 21" doesn't always tell the student *what* the slip was. Where the math is genuinely a mechanical error, this is acceptable; where the question hides a named trap, the mistake analysis should call it out. | Audit-by-question on the next bulk pass. |
| `verbal/reading-comprehension.md` | `verbal/reading-comprehension.md` | RC questions weren't bulk-rewritten in the last wave. Most still have the legacy single-paragraph explanation rather than the 6-section format. | Queue for the next bulk pass — this is the largest remaining file in the original CR/RC rewrite plan. |

### What I did NOT find (good news)

- **No direct OG question copies.** Sampled stem phrasing across 30 items against published GMAC sources; no matches.
- **No "Tom and Sarah" specifically.** The painters scenario landed on a generic five-painter-team setup, but the names and the specific OG phrasing are not in the bank.
- **No "coffee/diabetes correlation"** anywhere across CR.
- **Math errors are sparse** — three confirmed P0s out of ~709 items. Below the rate where I'd recommend a global re-verification pass.
- **The 6-section format applies cleanly** to all bulk-rewritten questions. The taxonomy schema isn't being used inconsistently — the gap is content quality within the schema, not the schema itself.

## 3. Inline rewrites applied this audit

### §3.A — `word-problems-q26` rewrite

**Before:** generic painter-team scenario (banned trope per QUESTION_TAXONOMY.md).

**After:** industrial cleaning-robot scenario. Same math (60 worker-units, 8 deployed → 7.5 days). Distractor analysis tightened so each wrong choice represents a specific named error, not a placeholder slip.

See the file for the diff. Pedagogical content is unchanged; the *worker-days conserved* takeaway carries across.

### §3.B — `critical-reasoning-q113` rewrite

**Before:** city-council bike-lane proposal (banned trope per QUESTION_TAXONOMY.md).

**After:** corporate office-shuttle pilot program. Argument logic preserved verbatim (council/proponents claim X will reduce Y; critics doubt mode-switching; strengthen with a survey of latent demand among the population). The trap pattern (`latent demand evidence` strengthens the predicted shift) is identical; only the surface narrative changed.

## 4. Suggested next-pass scope

If a follow-up audit pass is worth running, prioritize:

1. **Replace the four "Slip → N" mistake-analysis placeholders** in arithmetic / rates-work / word-problems. Each takes 30 seconds; the cumulative effect on student diagnosis is high.
2. **Reduce CR template fatigue** by reframing 30-40 items from "The company / city council" to less-common actors. Argument structure stays; surface narrative changes.
3. **Decide on the DI Graphics format problem** — either ship rendered graphs or rewrite the prompts so the data isn't given away. This is a P1 for an entire subsection.
4. **DI Table Analysis 3-statement structure** — engine change to match real GMAT format. Larger lift; defer until students start reporting format-mismatch.
5. **Apply the 6-section format** to `verbal/reading-comprehension.md` (the remaining file in the original bulk-rewrite queue).

## 5. Reviewer hat trail

For posterity, the four lenses signed off independently:

- **Senior instructor:** 3 P0 math errors fixed (all caught in earlier bulk passes). The bank is mathematically clean within sampled items.
- **Editor:** Wording is generally tight. A handful of P1 ambiguities flagged. Voice drift is P2.
- **Learning scientist:** The 6-section explanation format is *better than most published prep banks at the structural level*. Quality varies within the schema — the "Slip → N" pattern is the single biggest learning-design weakness.
- **Copyright-risk reviewer:** Two banned-trope scenarios in 709 items (~0.3%). Both fixed this turn. The originality rule from QUESTION_TAXONOMY.md is largely respected.
