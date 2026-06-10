---
section: Quant
topic: Estimation
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (61.2 × 0.49) / 5.9?

- A) 3
- B) 5
- C) 7
- D) 9
- E) 11

**answer:** B
**hint_nudge:** "Closest to" plus spread-apart choices is the test telling you not to compute exactly. Round every number to a friendly neighbor.
**hint_strategy:** Read 61.2 as 60, 0.49 as one half, and 5.9 as 6 — then the whole thing is mental arithmetic.
**hint_setup:** Half of 60 is 30, and 30 divided by 6 is 5. Which choice lives in that neighborhood?
**explanation:** The word "closest" and choices spaced 2 apart are explicit permission to estimate. Round each number to its landmark: 61.2 is about 60, 0.49 is about 1/2, and 5.9 is about 6. Then (60 × 1/2) / 6 = 30/6 = 5. The true value is 5.08, so the rounding cost almost nothing, and only choice B lives anywhere near the estimate. The answer is B. Computing 61.2 × 0.49 = 29.988 exactly and then long-dividing by 5.9 produces the same conclusion thirty seconds slower, with three fresh chances for a decimal slip along the way.
**fastest_path:** Snap to 60 × 1/2 / 6 = 5 and match the only nearby choice.
**common_trap:** Grinding the exact multiplication and misplacing the decimal — getting 50 or 0.5 and picking a wildly wrong choice with full confidence.
**takeaway:** When the stem says "closest to" and the choices are spread apart, rounding to landmarks is not a shortcut — it is the intended solution path.
**related_reading:** quant-03-estimation

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A television priced at $487 is discounted 24 percent. Approximately what is the sale price?

- A) $117
- B) $245
- C) $320
- D) $370
- E) $420

**answer:** D
**hint_nudge:** Careful — the question asks what you pay, not what you save.
**hint_strategy:** Paying after a 24% discount means paying 76%, which is about three quarters. Estimate three quarters of about 490.
**hint_setup:** 76% is roughly 75%, and 487 is roughly 488. Three quarters of 488 is 366 — find the choice in that neighborhood.
**explanation:** Translate the discount into what you pay: 100% − 24% = 76%, which rounds to the landmark 75%, or three quarters. The price 487 is essentially 488, and three quarters of 488 is 366. Since 76% is slightly more than the 75% used, the true value sits slightly above 366 — and indeed 0.76 × 487 = 370.12. Only choice D is in that neighborhood. The answer is D. Choice A, $117, is the engineered trap: it is approximately the discount itself (24% of 487), planted for solvers who estimate the quantity they computed rather than the quantity the stem asked for.
**fastest_path:** Convert to the complement — pay 76%, round to 3/4 of about 488, and land near 370.
**common_trap:** Choosing A = $117, the size of the discount, because you estimated 24% of the price instead of the 76% you actually pay.
**takeaway:** Round the numbers, never the question: always estimate the quantity the stem names, and for discounts that means the complement of the percent off.
**related_reading:** quant-03-estimation

---

## Q3
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

On a problem asking which value is closest to a messy expression, your aggressive rounding gives "about 150." The answer choices are 152, 154, 155, 157, and 159. What should you do?

- A) Pick 152, since it is nearest to 150
- B) Pick 155, the middle choice, as the safest bet
- C) Round even more aggressively to confirm the neighborhood
- D) Stop estimating — the gaps between choices are smaller than your rounding error, so compute exactly or work out the final digits
- E) Eliminate 159 as too far away and guess among the rest

**answer:** D
**hint_nudge:** Compare two sizes: the gaps between adjacent choices, and the error your rounding could have introduced.
**hint_strategy:** Aggressive rounding can easily shift a result by 5 or more, but these choices differ by only 2 or 3. What does that mismatch tell you about the method?
**hint_setup:** When choices sit closer together than your rounding error, "about 150" is compatible with all five — the estimate can't discriminate, so a different tool has to.
**explanation:** Estimation answers a question to within its rounding error. Aggressive rounding on a multi-step expression can drift the result by 5, 10, or more — but these five choices span only 7 in total, with adjacent gaps of 2 and 3. "About 150" is therefore consistent with every choice on the list: the estimate has no discriminating power here. The disciplined move is D — recognize that the gap structure forbids ballparking, and switch to exact computation (or compute just the units digit or final digits, which often separates clustered choices cheaply). Options A and B convert a useless estimate into a guess with false confidence; C makes the error larger, not smaller; E eliminates on noise. The answer is D. The deeper habit: read the gaps between choices before you round, because the spread is the test telling you how much precision it demands.
**fastest_path:** Compare choice gaps to rounding error — gaps smaller than the error mean estimation is illegal here.
**common_trap:** Snapping to the choice nearest the estimate (option A) when the estimate's own error bar covers the entire list.
**takeaway:** Estimation is only valid when adjacent choices differ by more than your rounding error — tight clusters demand exact work, often just the final digits.
**related_reading:** quant-03-estimation

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Five test scores are 62, 71, 58, 67, and 77. Using the anchor-and-nudge method with an anchor of 67, what is the mean of the scores?

- A) 61
- B) 63
- C) 65
- D) 67
- E) 69

**answer:** D
**hint_nudge:** Don't sum the five raw scores — measure how far each one sits from the anchor.
**hint_strategy:** Write each score's deviation from 67 (negative below, positive above), total the deviations, and spread that total over the five scores.
**hint_setup:** The deviations from 67 are −5, +4, −9, 0, and +10. Sum them, divide by 5, and adjust the anchor by the result.
**explanation:** Anchor at 67 and replace each score with its distance from the anchor: 62 is −5, 71 is +4, 58 is −9, 67 is 0, and 77 is +10. The deviations total −5 + 4 − 9 + 0 + 10 = 0, so the adjustment is 0/5 = 0 and the mean is exactly the anchor: 67. The answer is D. Compare the arithmetic loads: the raw route sums 62 + 71 + 58 + 67 + 77 = 335 and divides by 5 — a four-step running total in the hundreds with carry errors waiting — while the anchor route adds five single-digit numbers that mostly cancel. The method is exact, not approximate: any anchor works, and a well-chosen central anchor just keeps the deviations tiny.
**fastest_path:** Sum the single-digit deviations from 67, get 0, and read the mean off the anchor unchanged.
**common_trap:** Dropping a sign while summing deviations — counting 58's −9 as +9 shifts the answer two choices away.
**takeaway:** To average clustered values, anchor near the middle and sum signed deviations — small numbers that cancel beat a large error-prone running total.
**related_reading:** quant-03-estimation

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A $90 jacket is discounted 30 percent. A student computes 30 percent of 90, gets 27, sees "$27" among the answer choices, and selects it. What went wrong?

- A) Nothing — $27 is the correct sale price
- B) The student estimated the wrong quantity: $27 is the discount, while the stem asks for the price paid, which is 70 percent of $90, or $63
- C) The student should have rounded $90 to $100 before computing
- D) The student's arithmetic was wrong — 30 percent of 90 is not 27
- E) The student should have computed 130 percent of $90 instead

**answer:** B
**hint_nudge:** The arithmetic 0.30 × 90 = 27 is perfectly correct. So the error must be in what was computed, not how.
**hint_strategy:** Separate the two quantities in any discount problem: the amount saved and the amount paid. Which one does a "sale price" question ask for?
**hint_setup:** The price paid is the complement: 100% − 30% = 70% of $90. Compare that to the $27 the student computed.
**explanation:** The computation is flawless and aimed at the wrong target. Thirty percent of 90 is indeed 27 — but that is the discount, the amount saved. The sale price is what remains: 70% of 90, which is 63 dollars. The answer is B. This is the single most reliable trap construction in percent problems: the test-writer computes the intermediate quantity a rushed solver produces and plants it among the choices, so the wrong answer is sitting there waiting to confirm the error. The defense is a habit, not more careful arithmetic: before computing, name the quantity the stem asks for — "I need the price paid, which is 70% of the original" — and only then touch the numbers. Rounding (option C) is beside the point on clean numbers, and options D and E manufacture errors that didn't occur.
**fastest_path:** Name the asked-for quantity first: sale price = complement percent × original = 0.70 × 90 = 63.
**common_trap:** Computing the discount and stopping — the planted "$27" rewards finishing one step early.
**takeaway:** The most dangerous wrong answers are correct computations of the wrong quantity; say what the stem asks for in words before you calculate.
**related_reading:** quant-03-estimation

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to 19.6 percent of 2,510?

- A) 250
- B) 500
- C) 750
- D) 1,000
- E) 1,250

**answer:** B
**hint_nudge:** Both numbers are a hair away from very friendly ones.
**hint_strategy:** Read 19.6% as 20% — that is, one fifth — and 2,510 as 2,500.
**hint_setup:** One fifth of 2,500 is 500. Check which choice that points at.
**explanation:** Snap both numbers to their landmarks: 19.6% is essentially 20%, and 2,510 is essentially 2,500. One fifth of 2,500 is 500. The true value, 0.196 × 2,510 = 491.96, sits within 2% of the estimate, and the choices are spaced 250 apart — the neighborhood has exactly one resident. The answer is B. This is the core estimation pattern: percent problems built from near-landmark numbers reward the solver who reads 19.6% as "a fifth" instantly, and punish the one who sets up 0.196 × 2510 long-hand and risks a decimal-place slip across four digits.
**fastest_path:** Read it as one fifth of 2,500 and land on 500 without touching a pencil.
**common_trap:** Misplacing the decimal in long multiplication and confidently selecting 250 or 1,000 — both planted at half and double the answer.
**takeaway:** Memorize the percent landmarks (10%, 20%, 25%, 33%, 50%) as fractions and snap near-misses onto them; choices spaced far apart absorb the rounding error for free.
**related_reading:** quant-03-estimation

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Of the following fractions, which is closest in value to 0.62?

- A) 1/2
- B) 3/5
- C) 5/8
- D) 2/3
- E) 3/4

**answer:** C
**hint_nudge:** This is a test of whether you can read fractions as decimals on sight — convert each choice and compare.
**hint_strategy:** The candidates near 0.62 are 3/5 = 0.6, 5/8 = 0.625, and 2/3 = 0.667. Measure each one's distance from 0.62.
**hint_setup:** Distances from 0.62: 3/5 is 0.020 away, 5/8 is 0.005 away, 2/3 is about 0.047 away. The smallest gap wins.
**explanation:** Convert each fraction to its decimal: 1/2 = 0.5, 3/5 = 0.6, 5/8 = 0.625, 2/3 = 0.667, 3/4 = 0.75. Now measure distances from 0.62: choice B misses by 0.020, choice C by 0.005, choice D by about 0.047. The closest is 5/8. The answer is C. The trap here is stopping at 3/5 because "0.6 is close to 0.62" feels good enough — closest-to questions require checking every nearby candidate, not the first one in range. The eighths family (1/8 = 0.125, 3/8 = 0.375, 5/8 = 0.625, 7/8 = 0.875) is the most commonly untrained set of converters, and this question is exactly where that gap costs points.
**fastest_path:** Recall 5/8 = 0.625 from the memorized converter list — a 0.005 miss that nothing else approaches.
**common_trap:** Grabbing B = 3/5 as "close enough" without checking 5/8, which is four times closer.
**takeaway:** Fraction-decimal converters — halves, thirds, quarters, fifths, sixths, eighths — are sight-reading vocabulary; "closest to" means comparing all neighbors, not accepting the first near miss.
**related_reading:** quant-03-estimation

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (0.038 × 412) / 0.79?

- A) 2
- B) 8
- C) 20
- D) 80
- E) 200

**answer:** C
**hint_nudge:** The choices are each roughly ten or four times apart — this is an order-of-magnitude question, so rough rounding is plenty.
**hint_strategy:** Read 0.038 as 0.04, 412 as 400, and 0.79 as 0.8. Track the decimal places carefully — they are the whole game here.
**hint_setup:** 0.04 × 400 = 16, and 16 / 0.8 = 20. Which choice does that land on?
**explanation:** With choices spaced by factors of 4 to 10, only the order of magnitude matters. Round: 0.038 to 0.04, 412 to 400, 0.79 to 0.8. Then 0.04 × 400 = 16, and dividing by 0.8 pushes it up: 16 / 0.8 = 20. The true value is 19.8 — the estimate is essentially exact. The answer is C. The danger in this problem is not the rounding but the decimal bookkeeping: treating 0.04 × 400 as 160, or dividing by 0.8 as if it shrank the result, throws you a full choice up or down the ladder — and every rung is sitting there as a trap. Note the direction check: dividing by a number less than 1 must make the result bigger, so the answer had to exceed 16.
**fastest_path:** 0.04 × 400 = 16, then up by a quarter dividing by 0.8 — about 20.
**common_trap:** A single misplaced decimal — 160 instead of 16 — lands exactly on the planted choice D = 80 after the division.
**takeaway:** On order-of-magnitude problems the decimals are the test: count places deliberately, and remember dividing by a sub-1 number enlarges the result.
**related_reading:** quant-03-estimation

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A town's population of 41,800 grew by approximately 19 percent over a decade. Approximately what was the population at the end of the decade?

- A) 8,000
- B) 34,000
- C) 42,000
- D) 50,000
- E) 64,000

**answer:** D
**hint_nudge:** Growth means the answer must be larger than the starting population — that alone eliminates choices.
**hint_strategy:** Read 19% as 20% and 41,800 as about 42,000; growing by a fifth means multiplying by 1.2.
**hint_setup:** 42,000 × 1.2 = 42,000 + 8,400. Which choice is in that neighborhood?
**explanation:** Start with direction: the population grew, so the answer must exceed 41,800 — choices A and B die on sign alone, and C is the unchanged starting value, which contradicts "grew." Now size it: 19% rounds to 20%, and 41,800 to 42,000. Growing by a fifth multiplies by 1.2: 42,000 × 1.2 = 50,400. The true value, 41,800 × 1.19 = 49,742, confirms it. Only D is in the neighborhood. The answer is D. The wrong choices are a map of classic errors: A is the growth amount alone (about 8,000), B is a 19% decrease, C is forgetting to apply the change at all, and E is growing by roughly half instead of a fifth.
**fastest_path:** Eliminate everything at or below the start, then 42,000 × 1.2 = about 50,000.
**common_trap:** Reporting the increase (A = 8,000) instead of the new total, or applying the percent in the wrong direction (B = 34,000).
**takeaway:** Estimate direction before magnitude: knowing the answer must be bigger (or smaller) than the start eliminates half the choices before any arithmetic.
**related_reading:** quant-03-estimation

---

## Q10
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to the square root of 0.0026?

- A) 0.0016
- B) 0.005
- C) 0.016
- D) 0.05
- E) 0.16

**answer:** D
**hint_nudge:** Square roots of decimals trip up intuition — rewrite 0.0026 in a form whose square root you can take cleanly.
**hint_strategy:** Write 0.0026 as 26 × 10 to the −4, so the root splits into the root of 26 times the root of 10 to the −4.
**hint_setup:** The root of 10 to the −4 is 10 to the −2 = 0.01, and the root of 26 is just over 5. Multiply them.
**explanation:** Rewrite into a clean power of ten: 0.0026 = 26 × 10⁻⁴. The square root splits: √26 × √(10⁻⁴) = √26 × 10⁻². Since 5² = 25, √26 is barely above 5, so the root is about 5.1 × 0.01 = 0.051. The answer is D. The sanity check that catches every wrong choice: the answer squared must return to 0.0026, and 0.05² = 0.0025 — right on target — while 0.016² = 0.000256 (ten times too small) and 0.16² = 0.0256 (ten times too big). Intuition fails on decimal roots because square-rooting a number between 0 and 1 makes it bigger, and halving the count of decimal places is easy to botch; forcing the number into (digits) × (even power of ten) makes the root mechanical.
**fastest_path:** 0.0026 = 26 × 10⁻⁴, root = just over 5 × 10⁻², about 0.05.
**common_trap:** Halving the decimal places wrong and picking C = 0.016 or E = 0.16 — each exactly one power-of-ten rung away.
**takeaway:** To root a small decimal, rewrite it as a two-digit number times an even power of ten — and verify by squaring your answer back, the free check that exposes any rung error.
**related_reading:** quant-03-estimation
