---
slug: quant-03-estimation
title: "Method: Estimation — Find the Neighborhood, Not the Number"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-02-plugging-in-numbers
summary: |
  Ballparking instead of grinding. When the answer choices are spread apart, estimation finds the answer in seconds — and even when you must compute exactly, a pre-loaded estimate is the cheapest blunder-detector on the test.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Before the lesson, try this: look at a messy multiplication — say 0.62 × 248 — and write down a rough guess for its size before computing anything. Then compute. The gap between your guess and the true value is exactly what this chapter trains away.
  - id: neighborhood
    type: reading
    title: "Compute the neighborhood, not the number"
    check_question_ids: []
  - id: landmarks
    type: reading
    title: "The landmark toolkit"
    check_question_ids: []
  - id: estimation-in-action
    type: reading
    title: "Estimation in action"
    check_question_ids: []
  - id: when-not-to
    type: reading
    title: "When estimation breaks — and how it guards you"
    check_question_ids: []
  - id: summary
    type: summary
    title: "Lock it in"
    check_question_ids: []
problem_sets:
---

## @neighborhood

Backsolving tests the given numbers; plugging in invents your own. The third method makes both of them — and everything else on Quant — cheaper. When the answer choices are spread far apart, or the stem literally says "approximately," the test is begging you to stop doing arithmetic and start *sizing*. Exact computation is slow and error-prone; estimation is fast and almost always good enough to isolate one choice. Round aggressively, get the rough size, and only tighten up if two surviving choices sit close together.

**By the end of this chapter you will be able to:**

- Decide, from the answer-choice gaps alone, whether estimation is even legal on a problem.
- Snap messy percents, fractions, and big numbers to landmarks — and track which way you rounded.
- Average a list with anchor-and-nudge instead of a long, error-prone sum.
- Carry a pre-computed estimate as a blunder-detector for every exact calculation you run.

**Mental model.** Treat every number as a "nice" number plus or minus a small fudge. 47% is "about half." `6.9/0.34` is "about 7 over a third," which is "about 21." 312 is "about 300." You are not computing the answer — you are computing its **neighborhood**, then checking which choice lives there. The GMAT writes spread-apart choices precisely so the neighborhood has exactly one resident.

> **Recall check.** What does estimation actually compute, if not the answer? (The answer's *neighborhood* — a rough size plus a known lean direction. On a well-spread choice set, exactly one choice lives in that neighborhood, which is all the precision the question requires.)

## @landmarks

Estimation runs on a small set of landmarks you must know on sight. Three families cover nearly everything:

- **Percents:** snap to the nearest landmark — 10%, 25%, 33%, 50%, 67%, 75% — then adjust direction. The 10% landmark is the workhorse: 10% is one decimal shift, 1% is two, and any percent is built from those two moves.
- **Fractions as sizes:** memorize the converters so you read fractions as decimals instantly. `1/8 = 0.125`, `1/6 ≈ 0.17`, `1/3 ≈ 0.33`, `3/8 = 0.375`, `5/8 = 0.625`, `5/6 ≈ 0.83`. When you see `.375` in a choice you should *see* 3/8.
- **Order of magnitude:** count zeros first. Get the power of 10 right and you have already killed most wrong choices.

**Worked example.** *(Messy percent.)* A jacket marked $248 is discounted 38%. Approximately what is the sale price? Choices: (A) $95 (B) $120 (C) $155 (D) $190 (E) $210. Do not compute `0.38 × 248`. Paying after a 38% discount means **paying 62%**, which is "about 60%." And 60% of 248 is "about 60% of 250," which is 150. The neighborhood is ~150, leaning slightly low since 62% was rounded down to 60%. Only (C) $155 lives there. Done in under ten seconds, no long multiplication.

**Worked example.** *(Division by a decimal.)* `4,830 ÷ 0.49` is closest to: (A) 1,000 (B) 2,500 (C) 5,000 (D) 10,000 (E) 24,000. Read 0.49 as the landmark **one-half** — and dividing by one-half *doubles*. So the quotient is about `4,800 × 2 = 9,600`, and only (D) 10,000 lives in that neighborhood. The trap is (B): a rushed solver *multiplies* by the half instead of dividing and lands near 2,400. Direction is the whole game here — dividing by a number below 1 makes the result **bigger**, and holding that one fact beats any amount of decimal long division.

**Speed tip.** Next to every estimate, jot the lean. If you rounded the inputs down, the truth sits *above* your number; rounded up, below. When two choices end up straddling your estimate, the lean picks between them with no recomputation — "~150, leaning high" points at 155, not 145.

**Micro-drill.** Sizes only, no exact arithmetic — under 60 seconds total:

1. `5/8` of 320 → ___
2. 31% of 1,498 → ___
3. `0.875` as a fraction → ___
4. `49 × 21` → ___

Answers: (1) **200** — 5/8 is 0.625, and 0.625 × 320 lands exactly on 200. (2) **≈ 465** — 10% is 150, so 30% is 450, plus 1% ≈ 15; exact is 464.4. (3) **7/8** — converter recall, no division. (4) **≈ 1,030** — landmark `50 × 21 = 1,050`, and since 49 was rounded *up*, the truth sits a touch lower (exact: 1,029). If any of these took more than 15 seconds, the landmark isn't automatic yet — re-read the three families above and retest in ten minutes.

## @estimation-in-action

The landmarks compound on real problems. Watch the same three-beat rhythm in each example: snap to landmarks, get the neighborhood, check the lean.

**Worked example.** *(Ratio / proportion.)* A recipe uses flour to sugar in a 7:3 ratio. If a batch uses 41 ounces of flour, approximately how much sugar? Choices: (A) 8 (B) 12 (C) 18 (D) 24 (E) 29. Sugar is 3/7 of the flour. Read 3/7 as a size: ≈ 0.43, "a bit under half." Half of 41 is ~20, so sugar is "a bit under 20." That points straight at (C) 18. Notice the trap choices: (D) 24 is roughly what you get flipping the ratio, and (A) 8 is an order-of-magnitude slip. The estimate fences them all out.

**Worked example.** *(Order of magnitude.)* Of the 2,184,000 registered voters in a county, approximately 41% voted early. About how many voted early? Choices: (A) 90,000 (B) 450,000 (C) 900,000 (D) 1,300,000 (E) 1,750,000. Snap both inputs: 41% is "about 40%," 2,184,000 is "about 2.2 million." Then `0.4 × 2.2M = 880,000` — the neighborhood of (C) 900,000, and nothing else is within shouting distance. The zeros did most of the work: (A) is the classic dropped-zero answer, and (D) and (E) require more than half the voters, impossible at 41% on sight.

**Worked example.** *(Statistics, mean.)* Five test scores are 71, 88, 64, 93, and 79. Approximately what is the mean? Choices: (A) 68 (B) 74 (C) 79 (D) 85 (E) 91. Never sum exactly first. **Anchor and nudge:** pick a center near the middle, say 80, and total the deviations. 71 is −9, 88 is +8, 64 is −16, 93 is +13, 79 is −1. Deviations sum to ≈ −5; spread over 5 scores that is −1 from the anchor. Mean ≈ `80 − 1 = 79`. That is (C) — exact, as it happens — and you never carried a four-digit sum.

> **Self-explanation prompt.** Why does anchoring an average at a central guess and summing deviations beat summing the raw values? (Because deviations are small one- or two-digit numbers that partly cancel, so the running total stays tiny and you avoid carrying a large, error-prone sum — the arithmetic load collapses.)

## @when-not-to

Estimation has a precise domain, and the choices themselves tell you when you're inside it.

| Use estimation when... | Because... | Don't estimate when... |
|---|---|---|
| Stem says "approximately" / "closest to" | Exactness isn't being tested | Stem asks for an exact value or a remainder |
| Choices spread by 20%+ | One neighborhood, one resident | Choices within a few percent of each other |
| Messy percent or ugly multiplication | Landmark rounding nails it | A units-digit / divisibility question |
| Big order-of-magnitude numbers | Counting zeros kills most choices | Two leading digits must match exactly |
| Sanity-checking a computed answer | Catches calculator/arithmetic slips | The exact value is the point of the problem |

**Trap to watch.** Estimating the wrong quantity. With "38% discount," lazily computing 38% *of* the price gives ~94 and snaps you to a trap choice — but the question asks the **price paid**, not the discount. Always estimate the thing the stem names. Round the numbers, never the question.

**Trap to watch.** Estimating when the choices are too close. If the choices were 152, 154, 155, 157, 159, your "about 150" is useless — the answer lives inside your rounding error. The discipline: glance at the gaps **before** you round. If adjacent choices differ by less than your fudge, abandon ballparking and compute, or compute only the last digit or two to break the tie.

Here is the discipline that separates a 705 from a 685 scorer: **estimate first even when you intend to compute.** Before you trust any exact figure, you should already know its size. If you carefully calculate `0.62 × 248` and your screen reads 1537.6, your pre-loaded estimate of ~150 screams "decimal error" instantly. The estimate is your blunder-detector — a free, independent second opinion on every arithmetic step.

> **Recall check.** To estimate a 38% discount on a price, what percent of the price do you actually compute — and what's the rule that keeps you honest? (62% — what you *pay*, not what you save. Round the numbers, never the question.)

## @summary

You came in treating estimation as what you do when you're stuck. You leave knowing it's the lens you look through on *every* problem — the first read that decides whether to compute at all, and the guardrail that checks the computation when you do.

**Takeaway.** Estimation computes the answer's neighborhood, and on spread-out choices the neighborhood has one resident. Snap to landmarks, track the lean of your rounding, and let the gaps between choices tell you how much precision the problem actually demands.

Three habits, every quant problem:

1. **Read the gaps** between choices first — they decide whether estimation is legal and how rough you can afford to be.
2. **Round to landmarks and track direction** — note whether you rounded up or down so you know which way the truth leans.
3. **Carry your estimate forward** as a guardrail against the exact computation, so a slipped decimal announces itself.

**What to do next.** Run a Quant practice set and force the first read on every problem: gaps, landmarks, neighborhood — even when you finish with exact arithmetic. Then move on to **Method: Answer-Choice Tactics**, where the choice set stops being a passive menu entirely: you'll learn to filter answers by sign, size, and form before computing anything at all.

> **Self-explanation prompt.** In one sentence, why does an estimate made *before* an exact calculation catch mistakes that checking the calculation afterward misses? (Because it's independent — it shares no steps with the exact work, so a slip in the computation can't also infect the estimate, and any large disagreement between the two exposes the error immediately.)
