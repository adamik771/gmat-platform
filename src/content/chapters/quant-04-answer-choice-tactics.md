---
slug: quant-04-answer-choice-tactics
title: "Method: Answer-Choice Tactics"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-03-estimation
summary: |
  The five choices are data. This chapter teaches ballpark elimination, sign and unit checks, and spotting the engineered trap answer before you compute.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Use the answer choices however you like; the review will show where they can replace full algebra.
    pretest_question_ids:
      - arithmetic-q128
      - arithmetic-q129
  - id: answer-choice-tactics
    type: reading
    title: "Method: Answer-Choice Tactics"
    check_question_ids: []
  - id: let-the-answers-work
    type: reading
    title: "Let the answer choices do the work"
    check_question_ids: []
  - id: summary
    type: summary
    title: "What to remember"
    check_question_ids: []
problem_sets:
---

## @summary

- Read the structure before calculating: ordered choices, shared factors, and answer spacing often reveal the cheapest path.
- Estimate or eliminate first; backsolve from the middle only when the answer choices can replace the algebra cleanly.
- Use the choices as evidence, not as permission to guess. Confirm the surviving option against every condition.

## @answer-choice-tactics

The five answer choices are not a menu you consult after solving. They are **part of the problem** — five free data points the test-writer hands you before you compute a single thing. Read them first, every time. On a hard problem they tell you what kind of answer is even possible; on an easy one they tell you you've already done too much work.

**Mental model.** Treat the choices as a **constraint set**. Each one you can rule out on sign, magnitude, parity, or units is a choice you never have to test and a wrong turn your pencil never takes. The strongest test-takers narrow five to two before the real arithmetic starts, then spend their effort only where it changes the answer.

Start with the cheapest filters, in this order:

- **Sign.** Is the answer forced positive or negative? A difference, a net change, a slope — these carry a sign you can often predict.
- **Ballpark magnitude.** Is it "around 10" or "around 1000"? One rough multiplication usually settles it.
- **Parity / divisibility.** Counting and "how many integers" questions often must be even, divisible by 5, or a multiple of the group size.
- **Units / form.** Does the choice have the right dimensions — a rate vs. a total, an area vs. a length?

**Worked example.** A car travels 240 miles out at 40 mph and returns the same 240 miles at 60 mph. What is the average speed for the whole trip? Choices: (A) 45 (B) 48 (C) 50 (D) 52 (E) 55. Before any harmonic-mean work, **read the spread.** The naive average is (40+60)/2 = 50, which is choice (C) — the **engineered trap**, built from skipping the "more time is spent at the slower speed" step. The true answer must be **pulled below 50** toward the slower leg, which instantly kills (C), (D), (E). Now you're choosing between (A) and (B), and you barely need to compute: total distance 480, time = 240/40 + 240/60 = 6 + 4 = 10 hours, so 480/10 = **48**. Answer (B). The choices flagged the trap and cut your real work in half.

**Worked example.** If x^2 - 5x - 14 = 0 and x < 0, what is x? Choices: (A) -7 (B) -2 (C) 2 (D) 7 (E) 9. Do not factor blindly — **use the sign condition the problem handed you.** x < 0 eliminates (C), (D), (E) on inspection. Two choices remain, and instead of solving the quadratic you **plug in a choice as your test value**: (-2)^2 - 5(-2) - 14 = 4 + 10 - 14 = 0. Answer (B). One substitution confirmed what factoring would have taken three lines to reach.

**Worked example.** A jar holds only red and blue marbles in the ratio 3:5, and the total is fewer than 36. Which could be the total number of marbles? Choices: (A) 22 (B) 26 (C) 32 (D) 40 (E) 50. This is pure **divisibility filtering**. A 3:5 ratio forces the total to be a multiple of 3+5 = 8. Scan: 22 (no), 26 (no), 32 = 8·4 (**yes**), 40 = 8·5 (yes), 50 (no). Two survive the divisibility cut — (C) and (D) — so apply the second constraint the stem already gave you: "fewer than 36" knocks out (D) 40 and leaves **(C) 32**. Answer (C). You never multiplied out the ratio; you tested the choices for the two properties the answer must have.

> **Recall check.** Of the four cheap filters, which comes first and why? (Sign — it's the single fastest cut and often eliminates two or three choices for free.)

> **Self-explanation prompt.** Why does the "obvious" choice matching a naive average so often turn out wrong? (Because the test-writer builds the trap from the exact step a rushed solver skips — the trap is the answer to a simpler, wrong question.)

Now use the **spread of the choices** to decide your method. This is the move that separates an estimate from a full computation:

| When the choices look like… | Do this |
|---|---|
| Spread far apart (e.g. 12, 45, 90, 200, 500) | **Estimate.** One rough calc lands you in exactly one bucket. |
| Clustered tight (e.g. 48, 49, 50, 51, 52) | **Compute exactly.** Rounding can't separate neighbors. |
| All share a factor or form (all even, all /5, all sqrt-of) | Solve for the **distinguishing digit or sign**, not the whole value. |
| One is the "naive" number (a sum, an average, a simple product) | Suspect the **trap** — verify it requires the skipped step. |
| Contains 0, 1, or "cannot be determined" | Test **edge cases** and a single counterexample first. |

**Trap to watch.** The deadliest error is treating tightly-clustered choices as if they were spread out. If the options are 0.24, 0.25, 0.27, 0.30, you **cannot** round to "about a quarter" and pick — you've thrown away the precision the spread is demanding. Read the gaps: tight gaps are the test telling you it will punish estimation. Conversely, grinding out exact arithmetic when the choices sit an order of magnitude apart is wasted time and a fresh chance for a sign slip.

The discipline is one beat of overhead and it compounds. Before you compute, ask: **what sign, what size, what form must the answer have — and which choice is the bait?** Most hard problems shrink to a two-way decision, and the two you keep are the only two worth your arithmetic.

## @let-the-answers-work

The filters above tell you *which* choices to drop. This section is about a quieter signal: the **wording of the stem** often tells you the test is not asking for an exact value at all. When you see "closest to," "approximately," or "which is greatest / least," read it as an invitation. You are being asked to **compare and bound**, not to compute. Honoring that invitation can turn a two-minute grind into a fifteen-second decision.

**Mental model.** A question that asks for the *largest* of five expressions is a ranking problem, not an arithmetic problem. You do not need any of the five actual values — you only need to know how they stack against each other. So your job shrinks from *compute, compute, compute, compare* to just *compare*. Strip every shared piece, judge what is left by sign and size, and the winner falls out. The exact number was never the question; it was a tax the trap wanted you to pay.

The three signal words map to three moves. **"Approximately" / "closest to"** means estimate — round hard, land in the right neighborhood, and let the spread of the choices catch you (see *Estimation: Compute the Neighborhood, Not the Number*). **"Which is greatest / least"** means rank — compare the candidates against each other, not against a target. **A clean numeric stem with messy algebra** means the answer is already sitting in the choices, so plug them back in (see *Backsolving: Test the Answers, Skip the Algebra*). In all three, the choices are the tool, not the finish line.

**Worked example.** Which of the following is greatest? (A) 3/7 (B) 4/9 (C) 5/11 (D) 6/13 (E) 7/15. The trap is to convert all five to a common denominator — a long, slip-prone slog. Instead, **notice the structure**: every fraction is just under 1/2, since each numerator is a hair under half its denominator. Compare each to 1/2 by cross-judging numerator-doubled against denominator: (A) 6 vs 7, gap 1; (B) 8 vs 9, gap 1; (C) 10 vs 11, gap 1; (D) 12 vs 13, gap 1; (E) 14 vs 15, gap 1. Every gap is the *same size*, but it sits over a *different* denominator — and a fixed shortfall divided by a bigger denominator is a smaller shortfall. So the fraction with the largest denominator falls closest to 1/2 from below, i.e. is **greatest**: (E) 7/15. No common denominator, no decimals — just one structural comparison.

**Worked example.** Approximately what percent of 1,470 is 218? (A) 7% (B) 12% (C) 15% (D) 22% (E) 30%. The word "approximately" plus a wide spread of choices says **bound, don't divide**. Round: 218 is a bit under 220, and 1,470 is near 1,500. Now anchor with easy fractions of 1,500 — 10% is 150, 15% is 225. Our numerator sits just below 225, so the answer is a touch under 15%, which lands squarely on (C). Choices (A), (B), (D), (E) are not even close, so the rounding error never threatens the pick. The exact long division would have given the same letter for ten times the effort.

**Trap to watch.** Comparing-and-bounding works only when the choices are spread far enough to absorb your rounding — the same warning the spread table makes. If a "closest to" stem hands you tightly clustered options (12.4, 12.6, 12.8), the wording is a feint: it *invited* estimation, but the gaps *forbid* it, and you must compute. The signal word sets your expectation; the spacing of the choices vetoes or confirms it. Always let the choices have the final word.

> **Self-explanation prompt.** When a stem asks "which is greatest," why is comparing the five choices to *each other* faster than computing each one? (Because ranking only needs relative order, so any quantity shared across all five — a common factor, a common form, a common distance from a landmark like 1/2 — cancels out of the decision and never has to be evaluated.)
