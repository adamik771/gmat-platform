---
slug: quant-03-estimation
title: "Estimation: Find the Answer's Neighborhood"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-02-plugging-in-numbers
summary: |
  Ballparking instead of grinding. When the answer choices are spread apart, estimation finds the answer in seconds, and even when you must compute, a pre-loaded estimate is the blunder-detector that catches decimal slips before they cost you a point.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first sharpens what the reading lands on. As you work, notice whether you reached for exact arithmetic by reflex.
    pretest_question_ids:
      - estimation-q1
      - estimation-q2
  - id: estimation
    type: reading
    title: "Why sizing beats solving"
    check_question_ids:
      - estimation-q3
  - id: rounding-with-direction
    type: reading
    title: "Round to landmarks, track the lean"
    check_question_ids:
      - estimation-q4
  - id: when-to-estimate
    type: reading
    title: "When estimation is legal — and how to tighten it"
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
  medium:
    target_accuracy_by_score:
      "605": 55
      "645": 70
      "685": 85
      "725": 95
    question_ids:
      - estimation-q8
      - estimation-q9
  hard:
    target_accuracy_by_score:
      "605": 40
      "645": 55
      "685": 70
      "725": 90
    question_ids:
      - estimation-q10
      - estimation-q11
---

## @estimation

When the answer choices are spread far apart, or the stem literally says "approximately," the test is begging you to stop doing arithmetic and start sizing. Exact computation is slow and error-prone; estimation is fast and almost always good enough to isolate one choice.

**Mental model.** Treat every number as a "nice" number plus or minus a small fudge. 47% is "about half." 6.9/0.34 is "about 7 over a third," which is "about 21." 312 is "about 300." You are not computing the answer — you are computing its **neighborhood**, then checking which choice lives there. The GMAT writes spread-apart choices precisely so the neighborhood has exactly one resident.

Three converters make every neighborhood instant:

- **Percents:** snap to the nearest landmark — 10%, 25%, 33%, 50%, 67%, 75% — then adjust direction.
- **Fractions to decimals:** memorize the table so you read fractions as sizes on sight. 1/8 = 0.125, 1/6 ≈ 0.17, 1/3 ≈ 0.33, 3/8 = 0.375, 5/8 = 0.625, 2/3 ≈ 0.67, 5/6 ≈ 0.83, 7/8 = 0.875.
- **Order of magnitude:** count zeros first. Get the power of 10 right and you have already killed most wrong choices.

**Worked example.** (Ratio/proportion.) A recipe uses flour to sugar in a 7:3 ratio. If a batch uses 41 ounces of flour, approximately how much sugar? Choices: (A) 8 (B) 12 (C) 18 (D) 24 (E) 29. Sugar is 3/7 of the flour. Read 3/7 as a size: 3/7 ≈ 0.43, "a bit under half." Half of 41 is ~20, so sugar is "a bit under 20." That points straight at (C) 18. Notice the trap choices: (D) 24 is what you get if you flip the ratio and take 7/3-ish of something, and (A) 8 is an order-of-magnitude slip. The estimate fences them all out.

**Worked example.** (Order of magnitude.) Approximately what is 2,110,000 / 4,880? Choices: (A) 4.3 (B) 43 (C) 430 (D) 4,300 (E) 43,000. The choices are spaced by factors of 10, so this is purely a zeros question. Round to "about 2,000,000 over about 5,000": cancel three zeros from each, leaving 2,000/5 = 400. The neighborhood is ~400, and you rounded the top down and the bottom up — both pushes shrink the result, so the truth sits a little above 400. Only (C) 430 is anywhere near. The digit-level division never happened.

The same sight-reading works in reverse: an ugly decimal is often a clean fraction in disguise. 0.34 is 1/3; 0.126 is 1/8; 0.66 is 2/3. Dividing by 0.34 is multiplying by 3 — one mental step instead of long division. And keep one rule pinned where you can see it: **dividing by a number below 1 makes the result bigger.** Half of the wrong answers on decimal-division problems come from forgetting which direction the operation moves.

**Micro-drill.** Sight-read each as a size — under 20 seconds total:

1. 5/8 of 240 → ___
2. 0.74 x 400 → "about ___"
3. 90 / 0.31 → "about ___"

(Answers: 150; "about 300, a touch below"; "90 times 3-ish, about 290.")

> **Recall check.** What is the fast read of the size of 5/6 as a decimal? (≈ 0.83, "most of the way to 1.")

> **Self-explanation prompt.** Why does the test-writer space the choices far apart on some problems and tightly on others? (Spread choices reward sizing over computing — they test whether you know roughly what the answer must be. Tight choices test precision. The spacing is the writer telling you which skill is being graded.)

## @rounding-with-direction

Rounding is only half the skill. The other half — the half that separates a guess from an estimate — is **tracking which way you rounded**. Every snap to a landmark pushes your number up or down; if you know the direction, your estimate comes with an arrow attached, and the arrow often decides between the two closest choices.

**Worked example.** (Messy percent.) A jacket marked $248 is discounted 38%. Approximately what is the sale price? Choices: (A) $95 (B) $120 (C) $155 (D) $190 (E) $210. Do not compute 0.38 x 248. Paying after a 38% discount means **paying 62%**, which is "about 60%." And 60% of 248 is "about 60% of 250," which is 150. The neighborhood is ~150 — and the arrow points slightly up, because rounding 62% down to 60% understated the answer. Only (C) $155 lives there, on exactly the side the arrow predicted. Done in under ten seconds, no long multiplication.

The leans interact in a way worth knowing cold:

- Round both factors of a product **up**, and the truth sits **below** your estimate. Both down: truth above.
- Round one up and one down, and the pushes **partly cancel** — the estimate is tighter than either rounding alone.
- In a division, the leans flip for the bottom: rounding the **denominator up** drags the result **down**.

**Worked example.** (Averages without the big sum.) Five test scores are 71, 88, 64, 93, and 79. Approximately what is the mean? Choices: (A) 68 (B) 74 (C) 79 (D) 85 (E) 91. Never sum exactly first. **Anchor and nudge:** pick a center near the middle, say 80, and total the deviations. 71 is −9, 88 is +8, 64 is −16, 93 is +13, 79 is −1. Sum of deviations ≈ −5; spread over 5 scores that is about −1 from the anchor. Mean ≈ 80 − 1 = 79. That is (C) — exact, in fact — and you never carried a four-digit sum. The anchor did the rounding and the deviations did the correcting, all in single-digit arithmetic.

**Trap to watch.** Estimating the wrong quantity. With "38% discount," lazily computing 38% of the price gives ~94 and snaps you to (A) — but the question asks the **price paid**, not the discount. Always estimate the thing the stem names. **Round the numbers, never the question.**

> **Recall check.** To estimate a 38% discount on a price, what percent of the price do you actually compute? (62% — what you pay, not what you save.)

> **Recall check.** You estimate a product by rounding both factors up. Is the true value above or below your estimate? (Below — both pushes inflated it, so the truth sits under your number.)

## @when-to-estimate

Estimation has a legality test, and it takes two seconds: **read the gaps between the choices before you round.** The gaps tell you how much fudge you are allowed.

| Use estimation when... | Because... | Don't estimate when... |
|---|---|---|
| Stem says "approximately" / "closest to" | Exactness isn't being tested | Stem asks for an exact value or a remainder |
| Choices spread by 20%+ | One neighborhood, one resident | Choices within a few percent of each other |
| Messy percent or ugly multiplication | Landmark rounding nails it | A units-digit / divisibility question |
| Big order-of-magnitude numbers | Counting zeros kills most choices | Two leading digits must match exactly |
| Sanity-checking a computed answer | Catches calculator/arithmetic slips | The exact value is the point of the problem |

**Trap to watch.** Estimating when the choices are too close. If the choices were 152, 154, 155, 157, 159, your "about 150" is useless — the answer lives inside your rounding error. The discipline: glance at the gaps **before** you round. If adjacent choices differ by less than your fudge, coarse ballparking is off the table.

But tight choices do **not** mean surrendering to longhand arithmetic. They mean estimating one level finer. The tool is **base plus correction**: split the ugly number into a landmark plus a small exact piece. To take 41% of 700, take 40% (280), then add 1% (7) — 287, exact, and every number you touched was easy. The landmark does the heavy lifting; the correction supplies the precision the tight choices demand. Most "you must compute" problems fall to one correction step.

**Worked example.** (Tight choices, finer estimate.) A store's revenue was $8,400 in March and 18% higher in April. What was April's revenue? Choices: (A) $9,700 (B) $9,830 (C) $9,912 (D) $10,080 (E) $10,250. The gaps are barely 1.5% — coarse rounding is illegal. But 18% splits cleanly around the landmark **above** it: 18% = 20% − 2%. Twenty percent of 8,400 is 1,680; two percent is 168; the increase is 1,680 − 168 = 1,512. April is 8,400 + 1,512 = **$9,912** — choice (C), exact, and the hardest thing you multiplied was 84 x 2. Note (D) $10,080 is the trap: that's the full 20% with the correction skipped.

And even when you genuinely must compute, estimate first anyway. Here is the discipline that separates a 705 from a 685 scorer: **before you trust any exact figure, you should already know its size.** If you carefully calculate 0.62 x 248 and your screen reads 1537.6, your pre-loaded estimate of ~150 screams "decimal error" instantly. The estimate is your blunder-detector — a free, independent second opinion on every arithmetic step.

> **Recall check.** The choices on a percent problem sit about 2% apart. What do you do — compute longhand, or something else? (Estimate finer: base-plus-correction. Take the nearest landmark percent exactly, then add or subtract the small leftover percent exactly.)

> **Self-explanation prompt.** Why does anchoring an average at a central guess and summing deviations beat summing all the raw values? (Because deviations are small one- or two-digit numbers that partly cancel, so the running total stays tiny and you avoid carrying a large, error-prone sum — the arithmetic load collapses.)

## @summary

**Takeaway.** You are not computing the answer; you are computing its neighborhood. Read the gaps to see how precise you must be, round to landmarks, keep the arrow that says which way you leaned, and tighten with one correction step when the choices demand it.

The four-line recap:

- **Read the gaps first.** Choice spacing is the test telling you whether estimation is legal — and how fine it must be.
- **Round to landmarks, track the lean.** An estimate is a value plus a direction; the direction breaks ties between neighboring choices.
- **Tighten with base plus correction.** Tight choices call for a finer estimate (60% + 1.2%), not longhand arithmetic.
- **Estimate even when you compute.** The pre-loaded size check is the cheapest insurance on the test — it catches the decimal slip the moment it happens.

**What to do next.** Run the graded problem sets above to make the gap-read and the landmark snap automatic — the reading is the easy part; retrieval under a clock is what builds the reflex. Then carry the habit into every quant problem you touch: one beat to size the answer before any computation. Next up, **Answer-Choice Tactics** widens the same lens — the choices don't just hold the neighborhood, they leak sign, parity, and the location of the trap.
