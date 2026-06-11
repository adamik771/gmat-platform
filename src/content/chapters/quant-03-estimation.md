---
slug: quant-03-estimation
title: "Estimation: Compute the Neighborhood, Not the Number"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-02-plugging-in-numbers
summary: |
  Ballparking instead of grinding. When the choices are spread apart, landmark rounding finds the answer in seconds — and even when you must compute exactly, a pre-loaded estimate is the cheapest blunder-detector on the test.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you reached for exact arithmetic by reflex.
    pretest_question_ids:
      - estimation-q1
      - estimation-q2
  - id: when-estimation-wins
    type: reading
    title: "When estimation wins"
    check_question_ids:
      - estimation-q3
  - id: the-estimators-toolkit
    type: reading
    title: "The estimator's toolkit"
    check_question_ids:
      - estimation-q4
  - id: direction-and-traps
    type: reading
    title: "Track the lean — and know the traps"
    check_question_ids:
      - estimation-q5
  - id: summary
    type: summary
    title: "Recap and what to do next"
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - estimation-q6
      - estimation-q7
      - estimation-q12
      - estimation-q13
      - estimation-q14
      - estimation-q15
      - estimation-q16
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - estimation-q8
      - estimation-q9
      - estimation-q17
      - estimation-q18
      - estimation-q19
      - estimation-q20
      - estimation-q21
      - estimation-q22
      - estimation-q23
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - estimation-q10
      - estimation-q11
      - estimation-q24
      - estimation-q25
      - estimation-q26
      - estimation-q27
      - estimation-q28
---

## @when-estimation-wins

By the end of this chapter you will be able to:

- Decide, from one glance at the gaps between the choices, whether estimation is legal on a problem.
- Round messy numbers to landmarks fast — and know which direction your estimate now leans.
- Use a running estimate as a blunder-detector on every problem, even the ones you compute exactly.

**Mental model.** Treat every number as a "nice" number plus or minus a small fudge. 47% is "about half." 6.9/0.34 is "about 7 over a third," which is "about 21." 312 is "about 300." You are not computing the answer — you are computing its **neighborhood**, then checking which choice lives there. The GMAT writes spread-apart choices precisely so the neighborhood has exactly one resident.

The decision is mechanical: **read the gaps before you touch the numbers.** If adjacent choices differ by more than your rounding error, estimation is legal and almost certainly fastest. If they sit within a few percent of each other, the test is demanding precision — compute.

| Reach for estimation when… | Because… |
|---|---|
| The stem says "approximately" / "closest to" | Exactness isn't being tested — it's being discouraged |
| Choices spread by 20% or more | One neighborhood, one resident |
| Choices are factors of ten apart | Counting zeros kills every wrong choice at once |
| The numbers are deliberately ugly (0.0297, 41.8%, 23.2) | Ugly inputs are an invitation to round, not a demand to grind |
| You just computed an exact answer | A two-second estimate confirms or indicts it for free |

**Worked example.** A jacket marked $248 is discounted 38%. Approximately what is the sale price? Choices: (A) $95 (B) $120 (C) $155 (D) $190 (E) $210. Do not compute 0.38 × 248. Paying after a 38% discount means **paying 62%**, which is "about 60%." And 60% of 248 is "about 60% of 250," which is 150. The neighborhood is ~150, leaning slightly low since 62% was rounded down to 60%. Only (C) $155 lives there. Done in under ten seconds, no long multiplication.

Notice what happened to the choices: the gaps are $25-plus wide, far larger than the wobble from rounding. That single observation — made *before* any arithmetic — is what made the shortcut safe.

> **Recall check.** Before reading on: what do you look at first to decide whether estimation is even allowed on a problem? (The gaps between the answer choices — if they're wider than your rounding error, ballparking is safe; if they're tight, compute.)

## @the-estimators-toolkit

Four moves cover nearly every estimation situation on the test. Drill them until each is a reflex, not a decision.

**1. Snap percents to landmarks.** Round every percent to the nearest of 10%, 25%, 33%, 50%, 67%, 75% — then note the gap. 48% is "half, leaning down." 38% off is "you pay 62%, call it 60%, leaning low." The landmark does the arithmetic; the lean keeps you honest.

**2. Read fractions as sizes.** Memorize the converters so a fraction registers as a magnitude instantly:

| Fraction | Decimal | Fraction | Decimal |
|---|---|---|---|
| 1/8 | 0.125 | 1/3 | ≈ 0.33 |
| 1/6 | ≈ 0.17 | 3/8 | 0.375 |
| 1/5 | 0.2 | 5/8 | 0.625 |
| 1/4 | 0.25 | 5/6 | ≈ 0.83 |

For an unfamiliar fraction, benchmark it: compare the numerator to half the denominator. 7/15? Half of 15 is 7.5, so 7/15 is "just under a half." Two seconds, no division.

**3. Count zeros first.** When numbers are large or decimals are messy, get the power of ten right before anything else. If the choices are 15, 150, 1,500, 15,000 — the question isn't asking for arithmetic at all; it's asking whether you can track decimal shifts. Most wrong choices on such problems differ only in their zeros.

**Worked example.** Which is closest to 0.00451 × 8,127? Choices: (A) 0.37 (B) 3.7 (C) 37 (D) 370 (E) 3,700. The choices differ only by factors of ten, so this is purely a zeros question. Snap: 0.00451 ≈ 5 × 10⁻³ and 8,127 ≈ 8 × 10³. The powers of ten cancel exactly, leaving about 5 × 8 = 40, leaning high since 0.00451 was rounded up. Just under 40 means **(C) 37**. Every other choice is the same digits with the decimal in the wrong place — which is exactly the mistake the problem was built to catch.

**4. Anchor and nudge for averages.** Never sum a list raw. Pick a central anchor and total the signed deviations.

**Worked example.** Five test scores: 71, 88, 64, 93, 79. Approximately what is the mean? Choices: (A) 68 (B) 74 (C) 79 (D) 85 (E) 91. Anchor at 80: deviations are −9, +8, −16, +13, −1, totaling −5. Spread over 5 scores, that's −1 from the anchor: mean ≈ 79. That's (C) — exact, as it happens — and you never carried a four-digit sum. The deviations are small numbers that partly cancel; the raw sum never cancels anything.

**Worked example.** A recipe uses flour to sugar in a 7:3 ratio. If a batch uses 41 ounces of flour, approximately how much sugar? Choices: (A) 8 (B) 12 (C) 18 (D) 24 (E) 29. Sugar is 3/7 of the flour. Benchmark 3/7: half of 7 is 3.5, so 3/7 is "a bit under half." Half of 41 is ~20, so sugar is "a bit under 20" — that points straight at (C) 18. Notice the traps the estimate fences out: (D) 24 is the flipped ratio, (A) 8 is an order-of-magnitude slip.

**Micro-drill.** Size each in your head — 30 seconds total: *(i)* Is 13/27 more or less than 1/2? *(ii)* What's the neighborhood of 0.749 × 81.2? *(iii)* 5,940 ÷ 0.029 — how many digits before the decimal? Answers: *(i)* less — 13 falls short of 13.5. *(ii)* "3/4 of 80" ≈ 60. *(iii)* six — ≈ 6,000 ÷ 0.03 = 200,000. If *(iii)* took longest, your decimal-shift tracking needs reps — that is the single most common estimation slip.

> **Recall check.** What's the fast benchmark test for placing an unfamiliar fraction like 9/19 relative to one half? (Compare the numerator to half the denominator: half of 19 is 9.5, and 9 falls short, so 9/19 is just under 1/2.)

## @direction-and-traps

Estimation without direction-tracking is guessing. Every time you round, the estimate picks up a **lean** — and on a well-written problem, the lean is often what separates the right answer from its nearest trap.

**The rule.** Round a number up and any product built on it leans high; round a divisor down and the quotient leans high. Say the lean out loud as you round: "62% to 60% — my estimate runs low." Then, when your estimate lands between two choices, the lean tells you which neighbor is the answer — no extra arithmetic.

**Worked example.** (1.98)^6 is closest to: (A) 12 (B) 56 (C) 60 (D) 64 (E) 128. Rounding 1.98 to 2 gives 2^6 = 64 — and 64 is a choice. That is the test daring you to discard the leftover. The base is 1% *low*, and an exponent compounds the shortfall once per factor: six factors ≈ 6% low. So the true value is about 64 × 0.94 ≈ 60 — answer **(C)**, not the tempting 64. When your rounded result *is* a choice and a near neighbor is too, the remainder you rounded away is the entire question.

**Trap to watch.** Estimating the wrong quantity. With "38% discount," lazily computing 38% of the price gives ~94 and snaps you to a waiting trap choice — but the question asks the **price paid**, not the discount. Always estimate the thing the stem names. Round the numbers, never the question.

**Trap to watch.** Estimating when the choices are too close. If the choices are 152, 154, 155, 157, 159, your "about 150" is useless — the answer lives inside your rounding error. The discipline: glance at the gaps **before** you round. If adjacent choices differ by less than your fudge, abandon ballparking and compute, or compute only the last digit to break the tie.

**Trap to watch.** Compounding lazy roundings. 23.2 × 3.8 invites "20 × 3 = 60" because both roundings are easy — but two aggressive down-roundings stack into a 30% error and skip right past the correct choice. Round each number to its *nearest* clean value (23 × 4 ≈ 92), not its laziest, and let opposite leans partially cancel.

Here is the discipline that separates a 705 from a 685 scorer: **estimate first even when you intend to compute.** Before you trust any exact figure, you should already know its size. If you carefully calculate 0.62 × 248 and your screen reads 1537.6, your pre-loaded estimate of ~150 screams "decimal error" instantly. The estimate is your blunder-detector — a free, independent second opinion on every arithmetic step.

> **Recall check.** You estimate 63 ÷ 0.72 by computing 63 ÷ 0.7 = 90. Which side of 90 is the true value on, and why? (Below 90 — you divided by a smaller number than the truth, so the estimate overshoots.)

> **Self-explanation prompt.** Why does anchoring an average at a central guess and summing deviations beat summing all the raw values? (Because deviations are small one- or two-digit numbers that partly cancel, so the running total stays tiny and you avoid carrying a large, error-prone sum — the arithmetic load collapses.)

## @summary

**Takeaway.** Estimation isn't a shortcut you reach for when you're stuck; it's the lens you look through on every problem. Read the gaps to see whether ballparking is legal, snap the numbers to landmarks, track which way each rounding leans, and let the neighborhood — not the arithmetic — pick the choice.

The four-line recap:

- **Read the gaps first.** Wide gaps make estimation legal; tight gaps demand computation. Decide before you round.
- **Snap to landmarks.** Percents to 10/25/33/50/67/75; fractions benchmarked against 1/2; zeros counted before digits.
- **Track the lean.** Every rounding tilts the estimate a known direction — say it as you round, and let it break ties between neighboring choices.
- **Carry the estimate into exact work.** Even when you compute, the pre-loaded ballpark is the free second opinion that catches decimal slips.

**What to do next.** Run the graded problem sets above — the reading is the easy part; retrieval under time is what makes sizing automatic. Then carry the habit into mixed practice: on every quant problem, take one beat to read the gaps and pre-load a ballpark before touching the numbers. Next up, **Answer-Choice Tactics** widens the same instinct from magnitude to sign, parity, and form — five choices are five free data points, and estimation is only the first filter you can run on them.
