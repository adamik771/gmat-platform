---
slug: quant-03-estimation
title: "Method: Estimation"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-02-plugging-in-numbers
summary: |
  Ballparking instead of grinding. When the answer choices are spread apart, estimation finds the answer in seconds, guards against arithmetic slips, and tells you when exact work is actually required.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two questions before the lesson. Don't worry about getting them right — attempting first makes the method land harder when you read it. Solve them however you like, then notice how much of your work the chapter makes unnecessary.
    pretest_question_ids:
      - estimation-q1
      - estimation-q2
  - id: when-its-legal
    type: reading
    title: "When estimation is legal — read the gaps"
    check_question_ids:
      - estimation-q3
  - id: landmarks-and-anchors
    type: reading
    title: "Landmarks, converters, and the anchor-and-nudge"
    check_question_ids:
      - estimation-q4
  - id: traps-and-guardrail
    type: reading
    title: "The two traps — and the estimate as your guardrail"
    check_question_ids:
      - estimation-q5
  - id: summary
    type: summary
    title: "Estimation on one screen"
    check_question_ids: []
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
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - estimation-q8
      - estimation-q9
      - estimation-q10
---

## @when-its-legal

When the answer choices are spread far apart, or the stem literally says "approximately," the test is begging you to stop doing arithmetic and start sizing. Exact computation is slow and error-prone; estimation is fast and almost always good enough to isolate one choice. Round aggressively, get the rough size, and only tighten up if two surviving choices sit close together.

By the end of this chapter you'll be able to:

- **Decide in one glance** — by reading the gaps between choices — whether estimation is legal on a problem.
- **Round to landmarks** and track which direction your rounding leaned.
- **Carry an estimate** into every exact computation as a free error-detector.

**Mental model.** Treat every number as a "nice" number plus or minus a small fudge. 47% is "about half." 6.9/0.34 is "about 7 over a third," which is "about 21." 312 is "about 300." You are not computing the answer — you are computing its **neighborhood**, then checking which choice lives there. The GMAT writes spread-apart choices precisely so the neighborhood has exactly one resident.

The decision is always the same: compare the **gaps between adjacent choices** to the **error your rounding introduces**. Gaps bigger than the error — estimate freely. Gaps smaller than the error — estimation is illegal, and forcing it converts a solvable problem into a guess.

| Use estimation when... | Because... | Don't estimate when... |
|---|---|---|
| Stem says "approximately" / "closest to" | Exactness isn't being tested | Stem asks for an exact value or a remainder |
| Choices spread by 20%+ | One neighborhood, one resident | Choices within a few percent of each other |
| Messy percent or ugly multiplication | Landmark rounding nails it | A units-digit / divisibility question |
| Big order-of-magnitude numbers | Counting zeros kills most choices | Two leading digits must match exactly |
| Sanity-checking a computed answer | Catches calculator/arithmetic slips | The exact value is the point of the problem |

> **Recall check.** Before rounding anything, what single comparison decides whether estimation is legal? (Gaps between adjacent choices versus the size of your rounding error — estimate only when the gaps are bigger.)

## @landmarks-and-anchors

Three tools cover nearly every estimation move on the test.

**Percents: snap to landmarks.** Round to the nearest of 10%, 25%, 33%, 50%, 67%, 75% — then adjust direction. 38% is "a bit more than a third"; 76% is "about three quarters, leaning high."

**Fractions: memorize the converters** so you read fractions as sizes instantly. 1/8 = 0.125, 1/6 ≈ 0.17, 1/3 ≈ 0.33, 3/8 = 0.375, 5/8 = 0.625, 5/6 ≈ 0.83. The eighths are the most commonly untrained family and the most commonly tested.

**Order of magnitude: count zeros first.** Get the power of 10 right and you have already killed most wrong choices.

**Worked example.** (Messy percent.) A jacket marked $248 is discounted 38%. Approximately what is the sale price? Choices: (A) $95 (B) $120 (C) $155 (D) $190 (E) $210. Do not compute 0.38 x 248. Paying after a 38% discount means **paying 62%**, which is "about 60%." And 60% of 248 is "about 60% of 250," which is 150. The neighborhood is ~150, leaning slightly low since I rounded 62% down toward 60%. Only (C) $155 lives there. Done in under ten seconds, no long multiplication.

**Worked example.** (Ratio/proportion.) A recipe uses flour to sugar in a 7:3 ratio. If a batch uses 41 ounces of flour, approximately how much sugar? Choices: (A) 8 (B) 12 (C) 18 (D) 24 (E) 29. Sugar is 3/7 of the flour. Read 3/7 as a size: 3/7 ≈ 0.43, "a bit under half." Half of 41 is ~20, so sugar is "a bit under 20." That points straight at (C) 18. Notice the trap choices: (D) 24 is what you get if you flip the ratio and take 7/3-ish of something, and (A) 8 is an order-of-magnitude slip. The estimate fences them all out.

**Worked example.** (Statistics, mean.) Five test scores are 71, 88, 64, 93, and 79. Approximately what is the mean? Choices: (A) 68 (B) 74 (C) 79 (D) 85 (E) 91. Never sum exactly first. **Anchor and nudge:** pick a center near the middle, say 80, and total the deviations. 71 is −9, 88 is +8, 64 is −16, 93 is +13, 79 is −1. Sum of deviations ≈ −5; spread over 5 scores that is about −1 from the anchor. Mean ≈ 80 − 1 = 79. That is (C), exact here, and you never carried a four-digit sum.

**Micro-drill.** Size each in your head — under 20 seconds total:

1. 48% of 1,990 ≈ ___
2. 7/8 as a decimal = ___
3. 0.21 × 0.52 ≈ ___

Answers: (1) **about 1,000** — half of 2,000, leaning a touch low. (2) **0.875** — one eighth below 1. (3) **about 0.1** — a fifth of a half; if you got 1 or 0.01, the decimal places are the thing to drill.

> **Recall check.** What is the fast read of the size of 5/6 as a decimal? (≈ 0.83, "most of the way to 1.")

> **Self-explanation prompt.** Why does anchoring an average at a central guess and summing deviations beat summing all the raw values? (Because deviations are small one- or two-digit numbers that partly cancel, so the running total stays tiny and you avoid carrying a large, error-prone sum — the arithmetic load collapses.)

## @traps-and-guardrail

**Trap to watch.** Estimating the wrong quantity. With "38% discount," lazily computing 38% of the price gives ~94 and snaps you to the trap choice — but the question asks the **price paid**, not the discount. The test-writer plants the intermediate quantity among the choices on purpose. Always estimate the thing the stem names. **Round the numbers, never the question.**

**Trap to watch.** Estimating when the choices are too close. If the choices were 152, 154, 155, 157, 159, your "about 150" is useless — the answer lives inside your rounding error. The discipline: glance at the gaps **before** you round. If adjacent choices differ by less than your fudge, abandon ballparking and compute, or compute the last two digits only to break the tie.

Here is the discipline that separates a 705 from a 685 scorer: **estimate first even when you intend to compute.** Before you trust any exact figure, you should already know its size. If you carefully calculate 0.62 x 248 and your screen reads 1537.6, your pre-loaded estimate of ~150 screams "decimal error" instantly. The estimate is your blunder-detector — a free, independent second opinion on every arithmetic step.

> **Recall check.** To estimate a 38% discount on a price, what percent of the price do you actually compute? (62% — what you pay, not what you save.)

## @summary

Estimation isn't a shortcut you reach for when you're stuck; it's the lens you look through on every problem. Here it is on one screen.

| Step | What you do |
|---|---|
| 1. Read the gaps | Adjacent choices far apart? Estimation is legal. Tightly clustered? Compute — possibly just the final digits. |
| 2. Name the target | Say what the stem asks for (the price paid, the new total) before touching numbers. |
| 3. Round to landmarks | Snap percents and fractions to their nearest friendly value; track which way you leaned. |
| 4. Match the neighborhood | One rough calculation, one resident choice. If two survive, tighten only as much as needed. |

**Takeaway.** Three habits, every quant problem: **read the gaps** to decide whether estimation is even legal; **round to landmarks and track direction** so you know which way the true answer leans; and **carry your estimate forward** as a guardrail against the exact computation. The estimate is the cheap sanity check that catches the expensive mistakes.

**What to do next.** Run the two graded problem sets below — the easy set drills landmark snapping and the converter vocabulary; the medium set escalates to order-of-magnitude decimals and a square root where intuition fails and the method doesn't. Aim for under 45 seconds per question: if one takes longer, you computed where you should have sized. Then move to the next chapter, Answer-Choice Tactics, which generalizes today's gap-reading into a full pre-computation checklist.
