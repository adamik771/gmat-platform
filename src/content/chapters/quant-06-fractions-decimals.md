---
slug: quant-06-fractions-decimals
title: "Arithmetic: Fraction Fluency & Conversions"
section: Quant
estimated_minutes: 10
prerequisites:
  - quant-05-order-and-signed-numbers
summary: |
  Fractions, decimals, and percents are one number wearing three costumes. This chapter builds the fluency to read any of them on sight and switch to whichever form makes the arithmetic disappear.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - arithmetic-q7
      - arithmetic-q8
  - id: fractions-fluency
    type: reading
    title: "Fractions — the single highest-leverage arithmetic skill"
    check_question_ids:
      - arithmetic-q15
  - id: decimals-and-percents-conversion
    type: reading
    title: "Decimals and percents — three notations, one number"
    check_question_ids:
      - arithmetic-q2
      - arithmetic-q4
  - id: summary
    type: summary
    title: "One number, three costumes — lock it in"
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q9
      - arithmetic-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q11
      - arithmetic-q12
---

## @fractions-fluency

If one skill separates a 685+ scorer from a 605 scorer on Quant, it is fraction fluency. Not "can you add fractions" — given a pencil and a minute, everyone can. Fluency means `3/8 + 5/12` resolves to `19/24` in your head in five seconds, no scratch paper, no hesitation. That speed is not a parlor trick; it is reclaimed time and avoided errors on the dozens of problems where a fraction shows up mid-solution and a slow, shaky hand turns a 90-second question into a three-minute ordeal.

**By the end of this chapter you'll be able to:**

- Add, subtract, multiply, and divide fractions without losing the thread.
- Cancel *before* you compute, so the numbers stay small.
- Read any fraction, decimal, or percent as the same quantity in a different costume.
- Pick the form that makes a given problem easiest — the move that actually saves time on test day.

**Mental model.** A fraction is not "a division waiting to happen." It is a single number you are allowed to reshape. `3/4`, `6/8`, `0.75`, and `75%` are the same point on the number line — you choose the costume that makes the next step trivial. Fluency is the freedom to switch costumes without thinking. Everything in this chapter serves that one freedom.

**The four operations, ranked by how often they trip people:**

1. **Adding and subtracting** demand a common denominator. `3/4 + 5/8 − 1/2` becomes `6/8 + 5/8 − 4/8 = 7/8`. Find the LCD, convert every term, then combine numerators only — the denominator rides along untouched.
2. **Multiplying** is the gentle one: `(a/b) × (c/d) = ac/bd`. No common denominator needed. Cancel diagonally first — `(3/4) × (8/9)` becomes `(1/1) × (2/3) = 2/3`, and you never multiply 3 × 8 or 4 × 9.
3. **Dividing** is multiplication by the reciprocal: `(a/b) ÷ (c/d) = (a/b) × (d/c)`. Flip the *second* fraction, never the first.
4. **Complex fractions** (a fraction inside a fraction) reduce to division. Resolve the top into one fraction, resolve the bottom into one fraction, then divide. `(1 + 1/2) ÷ (1 − 1/3) = (3/2) ÷ (2/3) = (3/2) × (3/2) = 9/4`.

**Speed tip.** Cancel early, cancel hard — this single habit saves the most time on the section. Before computing `(15 × 28) / (21 × 25)`, cancel across the bar: `15/25 = 3/5` and `28/21 = 4/3`, so the whole thing collapses to `(3 × 4) / (5 × 3) = 4/5`. No multi-digit multiplication, no oversized numbers to simplify at the end. If you ever find yourself multiplying two-digit numbers inside a fraction, stop — you skipped a cancellation.

**Worked example.** Compute `(3/4) × (8/9) × (3/2)`. Multiply left to right and you are wrestling 72 and 72. Instead, cancel everything in sight first: the 8 and the 4 leave a 2; that 2 and the 9 share nothing, but the 3 in `3/4` and the 9 leave a 3; the remaining 3 in `3/2` pairs with that. Cleanly: `(3/4)(8/9) = 2/3`, then `(2/3)(3/2) = 1`. The answer is **1**, and you never wrote a number larger than 9.

**Worked example.** A recipe calls for `2/3` cup of sugar, but you are making `3/4` of the recipe. How much sugar? This is just `(3/4) × (2/3)`. Cancel the 3s, cancel 2 into 4, and you are left with `1/2` cup. **1/2.** The English ("of") is a multiplication sign in disguise — a pattern that returns constantly in percent and ratio problems.

**The simplification habit.** The GMAT treats `42/98` and `3/7` as *different* answer choices. `42/98` is not arithmetically wrong, but it is wrong on this test, because the listed answer is fully reduced. Pull out common factors at the end every time: `42/98 = 3/7` (both divide by 14). Train yourself to glance at any fraction and ask "do these share a factor?" before you commit to it.

**Fractions you should know by sight:**

| Fraction | Decimal | Percent |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/3 | 0.333… | 33.3% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.2 | 20% |
| 1/6 | 0.1667 | 16.67% |
| 1/7 | 0.1429 | 14.29% |
| 1/8 | 0.125 | 12.5% |
| 1/9 | 0.111… | 11.1% |
| 1/10 | 0.1 | 10% |

The eighths follow from `1/8 = 0.125`: `3/8 = 0.375`, `5/8 = 0.625`, `7/8 = 0.875`. When `.375` appears in an answer choice, you should *see* `3/8` — not derive it.

**Trap to watch.** A complex fraction like `(a + b/c) ÷ d` equals `(ac + b)/(cd)`, **not** `(a + b)/(cd)`. Resolve the numerator into a single fraction first — `a + b/c = (ac + b)/c` — before you divide. The error comes from dividing piece by piece instead of resolving the top into one number, then dividing once.

> **Recall check.** Cover the screen. Why do you cancel *before* multiplying instead of after? (Because canceling keeps every number small, so you never have to multiply or then re-simplify large products — the arithmetic load collapses up front.)

> **Self-explanation prompt.** In your own words, why does adding fractions need a common denominator but multiplying does not? (Addition combines parts that must be the same size to count together; multiplication scales one quantity by another, which the numerators and denominators handle independently.)

**Micro-drill.** No calculator — aim for 45 seconds total:

1. `5/6 − 3/8` → ___
2. `(15 × 28) / (21 × 20)` → ___
3. `(1 + 3/4) / (1 − 1/4)` → ___

Answers: (1) **11/24** — LCD 24, so `20/24 − 9/24`. (2) **1** — cancel first: `15/21 = 5/7`, `28/20 = 7/5`, product `1`. (3) **7/3** — top is `7/4`, bottom is `3/4`, divide by flipping: `7/4 × 4/3 = 7/3`. If (2) took more than ten seconds you computed instead of canceling — reread the speed tip above. If (3) snagged you, the rule is: resolve numerator and denominator into single fractions first, then divide once.

## @decimals-and-percents-conversion

Decimals, fractions, and percents are three notations for one number, and the entire skill here is refusing to get locked into the costume the problem happens to arrive in. A student who fluently switches saves 20–30 seconds on nearly every percent problem; a student who can't grinds through `0.875 × 80` by hand when `7/8 × 80 = 70` was sitting right there.

**The conversion triangle — four moves, memorized cold:**

- **Fraction → decimal:** divide top by bottom. `3/4 = 3 ÷ 4 = 0.75`.
- **Decimal → percent:** shift the point two places right. `0.75 = 75%`.
- **Percent → decimal:** shift two places left. `40% = 0.40`.
- **Percent → fraction:** write over 100 and reduce. `40% = 40/100 = 2/5`.

"Percent" is not a third kind of thing — it literally means "per hundred," so `40%` *is* the fraction `40/100`. Internalize that and percents stop being a separate topic and become fractions with a fixed denominator.

**Speed tip.** Before you multiply or divide by a decimal, ask: "is this a fraction I know?" The recurring decimals from the sight table are the payoff. `0.125 × 0.4` looks like a decimal grind, but it is `(1/8) × (2/5) = 2/40 = 1/20 = 0.05` — three small steps instead of aligning decimal points. The fraction form is almost always the faster road when the numbers are "nice."

**Worked example.** A shirt priced at $80 is discounted 15%. Sale price? The slow path computes the discount (`0.15 × 80 = 12`) then subtracts (`80 − 12 = 68`). The fluent path uses the **complement**: 15% off means you pay 85%, so `0.85 × 80 = 68` in one multiplication. Whenever you read "X% off," immediately rewrite it as "pay (100 − X)%." Two steps become one, and you skip the subtraction where sign slips happen.

**Worked example.** What is `0.6 × 35`? Don't reach for the decimal. `0.6 = 3/5`, so `(3/5) × 35 = 3 × 7 = 21`. **21.** Reading the decimal as a fraction turned a multiplication into a one-step cancellation — the same move that makes "60% of 35" instant.

**Trap to watch.** "What percent of 80 is 20?" and "20 is what percent of 80?" are the *same* question: `20/80 = 25%`. But "80 is what percent of 20?" is different: `80/20 = 400%`. The quantity after "of" is the base and goes in the **denominator**. When a percent problem feels ambiguous, find the "of" — it tells you what you are dividing by.

**Where percents go next.** Percent *change*, successive changes, reverse-percent word problems, and compound interest each have their own moving parts, and they get the full treatment in **Chapter 19: Percents & Percent Change**. Your job in *this* chapter is the conversion fluency underneath all of them — once switching forms is automatic, that chapter becomes mechanical instead of mysterious.

> **Recall check.** Cover the screen and write, from memory, the decimals for: `1/8, 3/8, 5/8, 7/8, 1/9, 2/9, 1/6, 5/6`. You want these on sight, not computed. Score yourself, restudy the misses, and retest in ten minutes — the short spacing gap is what turns a fragile memory into a durable one (Cepeda et al., 2006).

> **Self-explanation prompt.** Why does rewriting "15% off" as "pay 85%" prevent errors, beyond just saving a step? (Because it removes the subtraction step entirely, and subtraction is where a misplaced sign or a wrong base quietly produces a confidently wrong number.)

## @summary

You came in able to do fraction arithmetic. You leave able to *avoid* most of it — by canceling before you compute and by switching to whichever form makes the next step disappear. That is the whole game: fractions, decimals, and percents are one number in three costumes, and fluency is the freedom to pick the costume that does the work for you.

**Mental model.** One number, three notations. `3/4 = 0.75 = 75%` are the same point on the line. You are never stuck in the form the problem hands you; you translate to the easy form, solve, and translate back if the answer choices demand it.

The one-screen cheat sheet, in order of leverage:

| Situation | The fluent move |
|---|---|
| Multiplying fractions | **Cancel diagonally first** — keep every number small |
| Adding/subtracting fractions | LCD, convert all terms, combine **numerators only** |
| Dividing fractions | Multiply by the reciprocal — flip the **second** one |
| "Nice" decimal in a product | Swap it for its fraction (`0.125 → 1/8`, `0.6 → 3/5`) |
| "X% off" a price | Pay **(100 − X)%** — one multiplication, no subtraction |
| "what percent of" wording | The "of" quantity is the **denominator** |
| Any final fraction answer | **Fully reduce** before matching a choice |

> **Recall check.** Without scrolling up: state the three things you do to multiply `(3/4) × (8/9)` fast, and the one extra thing the GMAT requires of your final fraction. (Cancel diagonally, multiply the survivors, keep numbers small; and fully reduce the result before choosing.)

**What to do next.** Run the graded problem sets below — they are where canceling-before-computing and form-switching stop being ideas and become reflexes; if the easy set takes real effort, that is the signal to drill the sight table until it is automatic. Then continue to **Chapter 7: GCF/LCM, Units Digits & Estimation**, which leans directly on the factor-spotting you just practiced when canceling. When you want mixed reps under light time pressure, send a quant set to your practice queue from the buttons below.
