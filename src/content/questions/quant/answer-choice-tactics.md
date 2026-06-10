---
section: Quant
topic: Answer-Choice Tactics
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A driver travels 120 miles to a city at 30 miles per hour and returns along the same 120-mile route at 60 miles per hour. What is the driver's average speed, in miles per hour, for the round trip?

- A) 36
- B) 40
- C) 45
- D) 48
- E) 54

**answer:** B
**hint_nudge:** One of these choices is the "obvious" answer — the simple average of 30 and 60. Be suspicious of it before you compute.
**hint_strategy:** Average speed is total distance over total time, and the driver spends twice as long at the slower speed — so the answer must sit below the midpoint 45.
**hint_setup:** Total distance is 240 miles. Time out: 120/30 = 4 hours; time back: 120/60 = 2 hours. Divide 240 by the total time.
**explanation:** Read the choices before computing: 45 is the naive average of 30 and 60, which makes it the engineered trap — it answers a simpler question that ignores how long each leg takes. The driver spends 4 hours at 30 mph and only 2 hours at 60 mph, so the slow leg dominates and the true average must fall below 45. That one observation kills C, D, and E before any real work. Now compute: total distance 240 miles, total time 4 + 2 = 6 hours, average speed 240/6 = 40. The answer is B. The choices themselves flagged the trap and cut the field to two before the division even happened.
**fastest_path:** Spot 45 as the naive midpoint, reason the answer must sit below it (more time at the slow speed), and confirm with 240 total miles over 6 total hours.
**common_trap:** Choosing C = 45 by averaging the two speeds — valid only when the times are equal, and here the distances are equal instead.
**takeaway:** When a choice equals the simple average of two given numbers, treat it as bait: equal distances at different speeds always pull the average toward the slower one.
**related_reading:** quant-04-answer-choice-tactics

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A bag contains only red and blue chips in the ratio 5 to 7, and the total number of chips is fewer than 50. Which of the following could be the total number of chips?

- A) 28
- B) 30
- C) 36
- D) 44
- E) 46

**answer:** C
**hint_nudge:** You never need to find the actual counts — the ratio forces a property the total must have.
**hint_strategy:** A 5:7 ratio means every "batch" of chips is 5 + 7 = 12 chips, so the total must be a multiple of 12.
**hint_setup:** Scan the choices for multiples of 12 below 50: check 28, 30, 36, 44, 46 against divisibility by 12.
**explanation:** A 5:7 ratio means the chips come in complete groups of 5 + 7 = 12, so the total must be a multiple of 12 — that's the entire problem. Scan: 28 = 12 x 2 + 4, no; 30, no; 36 = 12 x 3, yes; 44, no; 46, no. Exactly one survivor, and it also respects "fewer than 50." The answer is C. No equation, no solving for the number of red chips — the ratio handed you a divisibility filter and the filter did all the work. This is the cheapest of the answer-choice tests: many ratio, grouping, and "how many" problems are decided purely by which choice has the right divisibility.
**fastest_path:** Total must be divisible by 5 + 7 = 12; scan the choices for the one multiple of 12.
**common_trap:** Setting up 5x + 7x = total and solving choice by choice — five times the work the divisibility scan does in one pass.
**takeaway:** A part-to-part ratio forces the total to be a multiple of the parts' sum; test the choices for that property instead of solving.
**related_reading:** quant-04-answer-choice-tactics

---

## Q3
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If a and b are both negative numbers and a < b, which of the following must be positive?

- A) a + b
- B) a − b
- C) ab²
- D) a/b
- E) a²b

**answer:** D
**hint_nudge:** Don't plug numbers yet — each choice's sign is forced by the sign rules alone.
**hint_strategy:** Run the sign filter choice by choice: a sum of negatives, a negative divided by a negative, a negative times a positive square, and so on.
**hint_setup:** a/b is one negative divided by another negative. What does the same-sign rule say about that quotient?
**explanation:** Pure sign filtering — no arithmetic needed. (A) The sum of two negatives is negative. (B) a − b: since a < b, subtracting the larger leaves a negative. (C) ab²: b² is positive, so this is negative times positive — negative. (D) a/b: negative divided by negative — same signs give a positive quotient, always. (E) a²b: a² is positive, so positive times negative — negative. Only D is forced positive, and the answer is D. A quick concrete check confirms: a = −6, b = −2 gives a/b = 3. The skill being trained: each answer choice carries a sign you can often determine from the rules alone, and that determination is faster and safer than computing with test values across five choices.
**fastest_path:** Apply same-sign/different-sign rules to each choice; only the negative-over-negative quotient is forced positive.
**common_trap:** Picking B on the feeling that "a minus b" creates distance, forgetting that a < b makes the difference negative, not positive.
**takeaway:** Sign is the cheapest filter on the board — squares are nonnegative, same signs multiply or divide to positive, and most choices die without a single computation.
**related_reading:** quant-04-answer-choice-tactics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The answer choices to a computation problem are 0.4, 4, 40, 400, and 4,000. What does this spread tell you about how to solve the problem?

- A) The choices are too far apart for estimation to be safe
- B) Compute exactly — factor-of-ten gaps demand full precision
- C) Find only the units digit of the answer
- D) Estimate — get the order of magnitude right and only one choice survives
- E) Backsolve, starting from the middle choice

**answer:** D
**hint_nudge:** Each choice is ten times its neighbor. How precise does your work actually have to be to tell them apart?
**hint_strategy:** Compare the gaps between choices to the error rough rounding introduces — when gaps are factors of 10, even sloppy rounding cannot land you in the wrong bucket.
**hint_setup:** If aggressive rounding changes a result by 20 or 30 percent, but adjacent choices differ by 900 percent, which solving method does the spread endorse?
**explanation:** The spread of the choices is the test-writer telling you the required precision. Here every choice is a factor of ten from its neighbors, so even rounding that's off by 30 or 40 percent still lands in exactly one bucket — the question is testing whether you can track the order of magnitude (the decimal places), not whether you can long-multiply. So estimate aggressively and read off the only resident of the right neighborhood. The answer is D. Options A and B invert the logic — wide gaps make estimation safer, not riskier; exact computation here is wasted time plus a fresh chance to misplace a decimal. C's units digit can't distinguish 4 from 40 from 400 (they share it). E's backsolving needs a checkable condition to plug into, which a raw computation doesn't offer.
**fastest_path:** Read the gaps: factor-of-ten spacing means order-of-magnitude estimation is the intended method.
**common_trap:** Defaulting to exact computation regardless of spread, paying full time for precision the choices never demanded.
**takeaway:** Choice spacing is an instruction: wide gaps say estimate, tight clusters say compute — read the gaps before choosing your method.
**related_reading:** quant-04-answer-choice-tactics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The price of a stock doubled, and then the new price doubled again. By what percent did the price increase in total?

- A) 100%
- B) 200%
- C) 300%
- D) 400%
- E) 800%

**answer:** C
**hint_nudge:** One choice is the number a rushed solver produces by mashing "doubled twice" into "times 4" into "400%." Slow down at exactly that step.
**hint_strategy:** Run a concrete price: start at 100, double twice, then measure the increase — the gain, not the final value — against the start.
**hint_setup:** 100 doubles to 200, then to 400. The increase is 400 − 100 = 300 on a base of 100.
**explanation:** Start at 100. First doubling: 200. Second doubling: 400. The final price is 4 times the original — and that's exactly where the trap lives, because "4 times the original" is a 300% increase, not 400%. Percent increase measures the gain: (400 − 100)/100 = 300%. The answer is C. Choice D = 400% is the engineered answer to the adjacent-but-wrong question "the final price is what percent of the original?" The test plants it knowing the multiplier and the increase differ by exactly the original 100%. Whenever a percent-change problem's choices include both the multiplier-as-percent and that value minus 100, the gap between those two choices is the entire question.
**fastest_path:** Plug 100, double twice to 400, and report the gain over the base: 300%.
**common_trap:** Choosing D = 400% by reporting what the final price is "of" the original instead of the increase over it.
**takeaway:** "Times k" and "increased by (k − 1) x 100 percent" are different numbers; when both appear as choices, the question is testing exactly that distinction.
**related_reading:** quant-04-answer-choice-tactics

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A rectangle has area 48 and length 8. What is its perimeter?

- A) 6
- B) 14
- C) 20
- D) 28
- E) 40

**answer:** D
**hint_nudge:** Two of these choices are way stations on the path to the answer — the width, and length plus width. Don't stop early.
**hint_strategy:** Find the width from the area, then remember perimeter wraps around the whole shape: two lengths and two widths.
**hint_setup:** Width = 48/8 = 6. Perimeter = 2(8 + 6).
**explanation:** Width first: area over length gives 48/8 = 6. Perimeter is the full boundary: 2(8 + 6) = 28. The answer is D. Now look at what the wrong choices are: A = 6 is the width itself — the answer to the intermediate step; B = 14 is 8 + 6, the semi-perimeter — the answer one step before the finish. Both are planted to reward stopping early. A ten-second form check also protects you: a perimeter must exceed twice the longest side (2 x 8 = 16), which kills A and B on sight before any of the steps are even computed. The answer to "what must this quantity look like" eliminates the way-station traps automatically.
**fastest_path:** Width 48/8 = 6, then 2(8 + 6) = 28 — and note any choice at or below 16 can't be a perimeter here.
**common_trap:** Stopping at the width (A = 6) or the single length-plus-width (B = 14) — both intermediate values planted as choices.
**takeaway:** Multi-step problems plant their intermediate results as answer choices; know what the final quantity's size must be so the way stations can't catch you.
**related_reading:** quant-04-answer-choice-tactics

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If x = −4, what is the value of x² − x³?

- A) −80
- B) −48
- C) −16
- D) 48
- E) 80

**answer:** E
**hint_nudge:** Before computing anything, work out the sign of each term — that alone eliminates choices.
**hint_strategy:** x² is a square, so it's positive; x³ keeps the negative sign, and subtracting a negative adds. The whole expression is forced positive.
**hint_setup:** x² = 16 and x³ = −64, so the expression is 16 − (−64).
**explanation:** Sign filter first: x² = (−4)² = 16, positive. x³ = (−4)³ = −64, negative — and subtracting a negative adds, so x² − x³ is positive plus positive. The answer must be positive, killing A, B, and C before any arithmetic finishes. Compute: 16 − (−64) = 16 + 64 = 80. The answer is E. The planted wrong answers map the sign errors precisely: −48 comes from treating x³ as positive (16 − 64), and −80 from flipping every sign. Predicting the sign before computing means that even if your arithmetic slips, you reject the impossible choices instead of confirming them.
**fastest_path:** Forced positive by the sign rules (square minus a negative cube), then 16 + 64 = 80.
**common_trap:** Computing x³ as +64 and getting 16 − 64 = −48 — the exact error choice B is planted to absorb.
**takeaway:** Predict the answer's sign before touching the arithmetic; the prediction screens out half the choices and catches your own slips on the way through.
**related_reading:** quant-04-answer-choice-tactics

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Which of the following is closest to 4,083 × 0.0249?

- A) 1
- B) 10
- C) 100
- D) 1,000
- E) 10,000

**answer:** C
**hint_nudge:** The choices are each ten times apart — the spread is telling you what level of precision this question wants.
**hint_strategy:** Round 4,083 to 4,000 and 0.0249 to 0.025, which is one fortieth — or read it as 2.5 percent.
**hint_setup:** 4,000 × 0.025 = 100. Track the decimal places carefully; they are the entire question.
**explanation:** Factor-of-ten spacing means only the order of magnitude matters — the spread licenses maximum rounding. Snap 4,083 to 4,000 and 0.0249 to 0.025 (the landmark 1/40, or 2.5%). Then 4,000 × 0.025 = 100. The true value is 101.67, so the estimate is essentially exact, and only one choice lives in the neighborhood. The answer is C. Every wrong choice is one decimal-place slip away: treating 0.0249 as 0.249 gives about 1,000; as 0.00249 gives about 10. The multiplication was never the test — the decimal bookkeeping was, and the wide-open spread is what tells you that's the game.
**fastest_path:** 4,000 × 1/40 = 100; the factor-of-ten choices forgive all the rounding.
**common_trap:** Sliding the decimal one place while multiplying and landing on B = 10 or D = 1,000 — each planted exactly one rung away.
**takeaway:** When choices are spaced by factors of ten, the question is purely about decimal placement; round hard and spend your care on counting places.
**related_reading:** quant-04-answer-choice-tactics

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

What is the value of 0.25 × 0.92?

- A) 0.21
- B) 0.22
- C) 0.23
- D) 0.24
- E) 0.25

**answer:** C
**hint_nudge:** Glance at the gaps: the choices differ by 0.01. What does that tell you about rounding 0.92 to 1?
**hint_strategy:** "A quarter of 0.92" rounded to "a quarter of about 1" gives 0.25-ish — useless here, since the rounding error spans the whole list. Compute it cleanly: a quarter of 92.
**hint_setup:** 92/4 = 23, then place the decimal: 0.25 × 0.92 = 0.23.
**explanation:** The gap check comes first: adjacent choices differ by 0.01, while rounding 0.92 up to 1 introduces an error of 0.02 — twice the gap. Estimation is illegal here; the tight cluster is the test demanding exact work. Fortunately the exact work is light if you use the fraction form: 0.25 is one quarter, and a quarter of 92 is 23, so 0.25 × 0.92 = 0.23. The answer is C. Choice E = 0.25 is the trap for exactly the solver who rounds 0.92 to 1 and stops. The lesson runs both directions: wide spreads invite rounding, but tight clusters like this one punish it — and the gap glance that decides takes two seconds.
**fastest_path:** Gaps of 0.01 forbid rounding; compute a quarter of 92 = 23 and place the decimal.
**common_trap:** Rounding 0.92 to 1 and picking E = 0.25 — the rounding error is bigger than the distance between choices.
**takeaway:** Check the gaps before you round: when adjacent choices sit closer than your rounding error, only exact work can separate them.
**related_reading:** quant-04-answer-choice-tactics

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A company's revenue increased by 50 percent in its first year and decreased by 40 percent in its second year. Over the two years, the revenue

- A) decreased by 10%
- B) decreased by 5%
- C) stayed the same
- D) increased by 5%
- E) increased by 10%

**answer:** A
**hint_nudge:** One choice is what you get by just adding +50 and −40. The test is counting on you to do exactly that.
**hint_strategy:** Percent changes multiply, they don't add — run a concrete starting revenue of 100 through both years.
**hint_setup:** 100 grows to 150, then loses 40% of 150. Compare the final figure to the original 100.
**explanation:** The bait is E: adding +50% and −40% to get "up 10%." Percent changes never add, because the second change acts on a different base. Run 100 through it: up 50% gives 150; down 40% of 150 removes 60, leaving 90. The two-year result is 90 versus the original 100 — a 10% decrease. The answer is A. In multiplier form, 1.5 × 0.6 = 0.9 in one step. Notice the choice architecture: E is the additive trap, C tempts the "they roughly cancel" instinct, and the correct answer sits at the same magnitude as the trap but with the opposite sign — so a solver who knows the changes don't simply add, but guesses the direction, still loses. Only the ten-second concrete run settles both size and sign.
**fastest_path:** Multiply the multipliers: 1.5 × 0.6 = 0.9, a 10% net decrease.
**common_trap:** Adding the percents to +10% (choice E) — the decrease acts on the inflated base of 150, not the original 100.
**takeaway:** Successive percent changes compound through their multipliers; when a choice equals the naive sum of the percents, that choice is the trap, and even its sign can be wrong.
**related_reading:** quant-04-answer-choice-tactics
