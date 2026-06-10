---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The value of (17 − 24) × 38 is closest to which of the following?

- A) −270
- B) −150
- C) 150
- D) 270
- E) 700

**answer:** A
**fastest_path:** Check the sign first — a negative times a positive is negative — then ballpark 7 × 38.
**explanation:** Run the two cheapest filters before any multiplication.

Sign: 17 − 24 = −7 is negative, and 38 is positive, so the product must be negative. That eliminates C, D, and E in one glance.

Magnitude: 7 × 38 is about 7 × 40 = 280, so the product is near −280. Between the two survivors, −270 is the only one in that neighborhood; −150 is roughly half the right size.

Exactly, (−7)(38) = −266, confirming the estimate.

The correct answer is A.
**common_trap:** Computing 7 × 38 = 266 carefully and then picking the positive choice D because 270 "matches the number you found." The sign filter exists precisely to prevent that slip.
**takeaway:** Sign is the fastest filter on the page — settle it before you multiply, and half the choices disappear for free.
**related_reading:** quant-04-answer-choice-tactics

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A box contains only red and green tokens in the ratio 4 : 7. If the total number of tokens is between 50 and 60, how many tokens are in the box?

- A) 52
- B) 54
- C) 55
- D) 56
- E) 58

**answer:** C
**fastest_path:** A 4 : 7 ratio forces the total to be a multiple of 4 + 7 = 11. Scan the choices for the multiple of 11.
**explanation:** If red and green tokens are in the ratio 4 : 7, then for some positive integer k there are 4k red and 7k green tokens, so the total is 11k — the total must be a multiple of 11.

Scan the choices: 52, 54, 55, 56, 58. Only 55 = 11 × 5 is a multiple of 11, and it sits inside the 50-to-60 window the stem requires.

No equation setup, no solving — the divisibility property the ratio imposes does all the work.

The correct answer is C.
**common_trap:** Trying to find the actual counts of red and green tokens before checking what the ratio forces about the total. The question never asks for the split — only the total, and the total is constrained by divisibility alone.
**hint_nudge:** You never need to find how many tokens are red. What does the ratio force about the total?
**hint_strategy:** With ratio 4 : 7, the total is 4k + 7k = 11k for some integer k. Which choice is a multiple of 11?
**takeaway:** A part-to-part ratio of a : b forces the total to be a multiple of a + b — test the choices against that property instead of solving.
**related_reading:** quant-04-answer-choice-tactics

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The value of (0.49 × 81) ÷ 0.252 is closest to which of the following?

- A) 16
- B) 40
- C) 160
- D) 400
- E) 1,600

**answer:** C
**fastest_path:** Snap to landmarks: 0.49 is about 1/2 and 0.252 is about 1/4, so the expression is about 81 × 2.
**explanation:** The choices are spaced by factors of roughly 10 — a magnitude question, not an arithmetic question.

Round to landmarks: 0.49 ≈ 1/2 and 0.252 ≈ 1/4. The expression becomes (81 × 1/2) ÷ (1/4) = 81 × (1/2) × 4 = 81 × 2 = 162.

The neighborhood is "around 160," and exactly one choice lives there. The exact value, 39.69 ÷ 0.252 = 157.5, only confirms what the estimate already settled.

The correct answer is C.
**common_trap:** Dividing by 0.252 as if it shrinks the number. Dividing by a quantity less than 1 makes the result larger — choice B (40) is the bait for stopping at 0.49 × 81 and forgetting the division entirely.
**takeaway:** When adjacent choices differ by a factor of 10, aggressive landmark rounding is not just allowed — it is the intended method.
**related_reading:** quant-04-answer-choice-tactics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A tank holds 4,980 liters of water and drains at a constant rate of 9.8 liters per minute. Approximately how many hours will it take to empty the tank?

- A) 0.85
- B) 4.2
- C) 8.5
- D) 50
- E) 85

**answer:** C
**fastest_path:** Round to 5,000 ÷ 10 = 500 minutes, then convert: 500 minutes is a bit over 8 hours.
**explanation:** The spread of the choices spans two orders of magnitude, so this is an estimation problem with a units conversion attached.

Round both numbers: 4,980 ≈ 5,000 liters and 9.8 ≈ 10 liters per minute. Time to empty ≈ 5,000 ÷ 10 = 500 minutes.

Convert to the units the question asks for: 500 minutes ÷ 60 ≈ 8.3 hours. Only choice C lives in that neighborhood.

The correct answer is C.
**common_trap:** Choice D (50) is approximately the answer in some made-up unit of "ten-minute blocks," but the real bait is forgetting to convert at all and hunting for a choice near 500 — when none exists, panic sets in. Estimate first, then convert to the units the stem names.
**hint_nudge:** The choices are very far apart. How precise does your arithmetic actually need to be?
**hint_strategy:** Use 5,000 ÷ 10 to get minutes, then divide by 60 for hours.
**takeaway:** Wide spread means estimate — but always estimate the quantity in the units the question asks for.
**related_reading:** quant-04-answer-choice-tactics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A store raises the price of a lamp by 50%, and one month later lowers the new price by 50%. If the original price was $48, what is the final price?

- A) $24
- B) $36
- C) $48
- D) $54
- E) $72

**answer:** B
**fastest_path:** The choice equal to the original price ($48) is the engineered trap — the cut applies to a larger base than the raise, so the final price must land below $48.
**explanation:** Before computing, read the choices. $48 — the original price — is sitting there as choice C, built for the solver who reasons "up 50%, down 50%, back where we started." That reasoning fails because the 50% cut applies to the raised price, a larger base.

Compute: after the raise, 48 × 1.5 = 72. After the cut, 72 × 0.5 = 36.

The other choices are the partial computations: $72 is the price after the raise only, and $24 is 50% of the original — the result of applying the cut to the wrong base.

The correct answer is B.
**common_trap:** Believing that +50% and −50% cancel. Successive percent changes multiply — 1.5 × 0.5 = 0.75 — so the net effect is a 25% decrease, never a wash.
**hint_nudge:** Does the 50% decrease apply to the original price or to the raised price?
**hint_strategy:** Apply the changes in sequence: multiply by 1.5, then by 0.5. Notice what base the second change uses.
**takeaway:** When a choice equals the "nothing changed" answer, treat it as bait — successive percent changes operate on different bases and never cancel.
**related_reading:** quant-04-answer-choice-tactics

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

At a rally, the ratio of cyclists to runners is 2 : 7. If the total number of participants is between 40 and 50, how many participants attended?

- A) 40
- B) 42
- C) 45
- D) 49
- E) 56

**answer:** C
**fastest_path:** A 2 : 7 ratio makes the total a multiple of 9 — scan for it.
**explanation:** With cyclists and runners in the ratio 2 : 7, there are 2k cyclists and 7k runners for some positive integer k, so the total is 9k — a multiple of 9.

Scan the choices: 40, 42, 45, 49, 56. Only 45 = 9 × 5 is a multiple of 9, and it satisfies the stem's "between 40 and 50" condition. (56 is a multiple of 7, but the total must be divisible by the sum of the parts, not by one part — and it is outside the window anyway.)

The correct answer is C.
**common_trap:** Picking 49 because it "looks divisible" by 7. The total must be divisible by the sum 2 + 7 = 9, not by either ratio part alone.
**takeaway:** Ratio totals are divisibility questions in disguise — sum the ratio parts and filter the choices.
**related_reading:** quant-04-answer-choice-tactics

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

(−19)³ is closest to which of the following?

- A) −8,000
- B) −6,900
- C) −400
- D) 6,900
- E) 8,000

**answer:** B
**fastest_path:** An odd power of a negative number is negative; then 19³ is just under 20³ = 8,000.
**explanation:** Sign first: a negative number raised to an odd power stays negative, so D and E are gone without any arithmetic.

Magnitude next: 19 is just under 20, and 20³ = 8,000, so 19³ is somewhat below 8,000 — but far above 400, which is barely more than 19². Between −8,000 and −6,900, the value must sit noticeably below 8,000 in size because the shortfall compounds across three factors: 19³ = 6,859.

The neighborhood is −6,900.

The correct answer is B.
**common_trap:** Choosing −8,000 because "19 is basically 20." Rounding 19 up to 20 three times inflates the estimate by about 16% — when two surviving choices differ by that much, track which direction your rounding pushed you.
**takeaway:** Sign eliminates half the field on odd powers; then remember that rounding compounds across repeated multiplication, and lean your estimate the other way.
**related_reading:** quant-04-answer-choice-tactics

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A town's population of 64,000 grew by 26% over a decade. Approximately what was the population at the end of the decade?

- A) 16,600
- B) 47,400
- C) 75,000
- D) 80,600
- E) 90,000

**answer:** D
**fastest_path:** Growth means the answer must exceed 64,000; then 26% is about a quarter, and 64,000 × 1.25 = 80,000.
**explanation:** Filter on form first: the population grew, so the answer must be larger than 64,000. That eliminates A and B instantly — A is the size of the increase itself, and B is what remains after a 26% decrease.

Estimate the survivor: 26% is about 25%, so the new population is about 64,000 × 1.25 = 80,000, leaning slightly low because 26% was rounded down. Choice D (80,600) is the only resident of that neighborhood; C is too small to absorb a quarter of 64,000 and E is a 40% increase.

Exactly: 64,000 × 1.26 = 80,640.

The correct answer is D.
**common_trap:** Choice A, 16,600, is approximately the increase (0.26 × 64,000 = 16,640) — the engineered trap for solvers who compute the percent change and stop. The question asks for the ending population, not the growth.
**hint_nudge:** The population grew. Which choices are even possible?
**hint_strategy:** Eliminate every choice at or below 64,000, then estimate 64,000 × 1.25.
**takeaway:** Match the choices against what the stem actually asks — the "correct computation of the wrong quantity" is the most common trap on percent problems.
**related_reading:** quant-04-answer-choice-tactics

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If x² + 3x − 28 = 0 and x > 0, what is the value of x?

- A) −7
- B) −4
- C) 4
- D) 7
- E) 14

**answer:** C
**fastest_path:** The condition x > 0 kills A and B on sight; then substitute the smallest positive survivor.
**explanation:** Use the constraint the stem handed you before touching the quadratic: x > 0 eliminates −7 and −4 immediately. Three candidates remain.

Now test choices instead of factoring. Try x = 4: 16 + 12 − 28 = 0. It satisfies the equation on the first substitution.

For confirmation, factoring gives (x + 7)(x − 4) = 0, so the roots are −7 and 4, and the positive root is 4. Notice that choice A, −7, is the other root — bait for a solver who factors correctly but reports the wrong sign — and D and E are sign-flips and doublings of the true answer.

The correct answer is C.
**common_trap:** Factoring to (x + 7)(x − 4) and reading the roots as "7 and −4" — the sign reversal puts both wrong roots right there in the choices as A and D.
**hint_nudge:** The stem gives you a condition on the sign of x. Use it before solving anything.
**hint_strategy:** Eliminate the negative choices, then plug the remaining values into the equation — only one will satisfy it.
**takeaway:** Conditions like x > 0 are elimination tools, and substituting a surviving choice is faster and safer than factoring under time pressure.
**related_reading:** quant-04-answer-choice-tactics

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Solution X is 30% acid and solution Y is 70% acid. If X and Y are mixed in a volume ratio of 3 : 1, what percent of the resulting mixture is acid?

- A) 35%
- B) 40%
- C) 50%
- D) 55%
- E) 60%

**answer:** B
**fastest_path:** The mix is mostly X, so the answer must sit well below the 50% midpoint — that alone eliminates C, D, and E.
**explanation:** Read the choices through the weighted-average lens before computing. The midpoint of 30% and 70% is 50% — choice C, the engineered trap for solvers who average the two concentrations and ignore the 3 : 1 weighting. Because the mixture contains three parts X for every one part Y, the result must be pulled toward X's 30%, strictly below 50%. Only A and B survive.

Now one line of arithmetic settles it. Per 4 parts of mixture: acid = 3(30%) + 1(70%) = 90% + 70% = 160%, spread over 4 parts gives 160 ÷ 4 = 40%.

Checking the remaining wrong choice: 35% would require a 7 : 1 ratio, a much heavier tilt toward X than the stem gives.

The correct answer is B.
**common_trap:** Averaging 30% and 70% to get 50% — the unweighted midpoint is only correct for a 1 : 1 mix, and the test-writer always parks it among the choices.
**hint_nudge:** The mixture is three-quarters solution X. Should the answer be closer to 30% or to 70%?
**hint_strategy:** Weight the concentrations: (3 × 30 + 1 × 70) ÷ 4.
**takeaway:** On any weighted average, first decide which side the answer must lean toward — direction alone usually eliminates three choices, including the unweighted-midpoint trap.
**related_reading:** quant-04-answer-choice-tactics

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The number of employees in three departments of a company are in the ratio 6 : 10 : 15. Which of the following could be the total number of employees in the three departments?

- A) 90
- B) 96
- C) 105
- D) 124
- E) 135

**answer:** D
**fastest_path:** The total must be a multiple of 6 + 10 + 15 = 31 — a prime, so the filter is decisive.
**explanation:** With the three departments in the ratio 6 : 10 : 15, the counts are 6k, 10k, and 15k for some positive integer k, so the total is 31k — every possible total is a multiple of 31.

Because 31 is prime, the divisibility test is unforgiving: a choice either is a multiple of 31 or it is not. Run the scan: 90, 96, 105, and 135 all fail (31 × 3 = 93 and 31 × 4 = 124 bracket them). Only 124 = 31 × 4 passes, corresponding to departments of 24, 40, and 60.

The correct answer is D.
**common_trap:** Filtering against the individual ratio parts — rejecting choices not divisible by 6, 10, or 15. The parts constrain the pieces, but only their sum constrains the total; 124 itself is divisible by none of 6, 10, or 15.
**hint_nudge:** You cannot determine the department sizes, but the ratio still forces a property on the total.
**hint_strategy:** The total is 6k + 10k + 15k = 31k. Test each choice for divisibility by 31.
**takeaway:** "Could be" plus a ratio is a pure divisibility filter on the sum of the parts — even when, as here, the sum is a prime that none of the individual parts divide.
**related_reading:** quant-04-answer-choice-tactics

---
