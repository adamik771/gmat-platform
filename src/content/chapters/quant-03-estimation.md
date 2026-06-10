---
slug: quant-03-estimation
title: "Method: Estimation"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-02-plugging-in-numbers
summary: |
  Ballparking instead of grinding. When the answer choices are spread apart, estimation finds the answer in seconds and guards against arithmetic slips.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
  - id: estimation
    type: reading
    title: "Method: Estimation"
    check_question_ids: []
problem_sets:
---

## @estimation

When the answer choices are spread far apart, or the stem literally says "approximately," the test is begging you to stop doing arithmetic and start sizing. Exact computation is slow and error-prone; estimation is fast and almost always good enough to isolate one choice. Round aggressively, get the rough size, and only tighten up if two surviving choices sit close together.

**Mental model.** Treat every number as a "nice" number plus or minus a small fudge. 47% is "about half." 6.9/0.34 is "about 7 over a third," which is "about 21." 312 is "about 300." You are not computing the answer — you are computing its **neighborhood**, then checking which choice lives there. The GMAT writes spread-apart choices precisely so the neighborhood has exactly one resident.

- **Percents:** snap to the nearest landmark — 10%, 25%, 33%, 50%, 67%, 75% — then adjust direction.
- **Fractions to decimals:** memorize the converters so you read fractions as sizes instantly. 1/8 = 0.125, 1/6 ≈ 0.17, 1/3 ≈ 0.33, 3/8 = 0.375, 5/8 = 0.625, 5/6 ≈ 0.83.
- **Order of magnitude:** count zeros first. Get the power of 10 right and you have already killed most wrong choices.

**Worked example.** (Messy percent.) A jacket marked $248 is discounted 38%. Approximately what is the sale price? Choices: (A) $95 (B) $120 (C) $155 (D) $190 (E) $210. Do not compute 0.38 x 248. Paying after a 38% discount means **paying 62%**, which is "about 60%." And 60% of 248 is "about 60% of 250," which is 150. The neighborhood is ~150, leaning slightly low since I rounded 62% down toward 60%. Only (C) $155 lives there. Done in under ten seconds, no long multiplication.

**Worked example.** (Ratio/proportion.) A recipe uses flour to sugar in a 7:3 ratio. If a batch uses 41 ounces of flour, approximately how much sugar? Choices: (A) 8 (B) 12 (C) 18 (D) 24 (E) 29. Sugar is 3/7 of the flour. Read 3/7 as a size: 3/7 ≈ 0.43, "a bit under half." Half of 41 is ~20, so sugar is "a bit under 20." That points straight at (C) 18. Notice the trap choices: (D) 24 is what you get if you flip the ratio and take 7/3-ish of something, and (A) 8 is an order-of-magnitude slip. The estimate fences them all out.

**Worked example.** (Statistics, mean.) Five test scores are 71, 88, 64, 93, and 79. Approximately what is the mean? Choices: (A) 68 (B) 74 (C) 79 (D) 85 (E) 91. Never sum exactly first. **Anchor and nudge:** pick a center near the middle, say 80, and total the deviations. 71 is −9, 88 is +8, 64 is −16, 93 is +13, 79 is −1. Sum of deviations ≈ −5; spread over 5 scores that is about −1 from the anchor. Mean ≈ 80 − 1 = 79. That is (C), exact here, and you never carried a four-digit sum.

**Trap to watch.** Estimating the wrong quantity. With "38% discount," lazily computing 38% of the price gives ~94 and snaps you to (A) — but the question asks the **price paid**, not the discount. Always estimate the thing the stem names. Round the numbers, never the question.

**Trap to watch.** Estimating when the choices are too close. If the choices were 152, 154, 155, 157, 159, your "about 150" is useless — the answer lives inside your rounding error. The discipline: glance at the gaps **before** you round. If adjacent choices differ by less than your fudge, abandon ballparking and compute, or compute the last two digits only to break the tie.

| Use estimation when... | Because... | Don't estimate when... |
|---|---|---|
| Stem says "approximately" / "closest to" | Exactness isn't being tested | Stem asks for an exact value or a remainder |
| Choices spread by 20%+ | One neighborhood, one resident | Choices within a few percent of each other |
| Messy percent or ugly multiplication | Landmark rounding nails it | A units-digit / divisibility question |
| Big order-of-magnitude numbers | Counting zeros kills most choices | Two leading digits must match exactly |
| Sanity-checking a computed answer | Catches calculator/arithmetic slips | The exact value is the point of the problem |

Here is the discipline that separates a 705 from a 685 scorer: **estimate first even when you intend to compute.** Before you trust any exact figure, you should already know its size. If you carefully calculate 0.62 x 248 and your screen reads 1537.6, your pre-loaded estimate of ~150 screams "decimal error" instantly. The estimate is your blunder-detector — a free, independent second opinion on every arithmetic step.

> **Recall check.** What is the fast read of the size of 5/6 as a decimal? (≈ 0.83, "most of the way to 1.")

> **Recall check.** To estimate a 38% discount on a price, what percent of the price do you actually compute? (62% — what you pay, not what you save.)

> **Self-explanation prompt.** Why does anchoring an average at a central guess and summing deviations beat summing all the raw values? (Because deviations are small one- or two-digit numbers that partly cancel, so the running total stays tiny and you avoid carrying a large, error-prone sum — the arithmetic load collapses.)

Three habits, every quant problem: (1) **Read the gaps** between choices to decide whether estimation is even legal. (2) **Round to landmarks and track direction** — note whether you rounded up or down so you know which way the true answer leans. (3) **Carry your estimate forward** as a guardrail against the exact computation. Estimation isn't a shortcut you reach for when you're stuck; it's the lens you look through on every problem, the cheap sanity check that catches the expensive mistakes.
