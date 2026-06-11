---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The price of a jacket is increased by 20%, and the new price is later decreased by 20%. The final price is what percent of the original price?

- A) 80%
- B) 96%
- C) 100%
- D) 104%
- E) 120%

**answer:** B
**fastest_path:** The "they cancel" instinct points at 100% — which is exactly why it's there. The 20% decrease acts on a larger number than the 20% increase did, so the final price must land below 100%. Only (A) and (B) qualify, and (A) would mean the increase never happened at all. 96%.
**explanation:** Percent changes do not cancel, because each acts on a different base. The increase is 20% of the original price; the decrease is 20% of the *raised* price — a bigger number — so more is taken away than was added.

Compute it on a convenient base of 100: up 20% gives 120, then down 20% of 120 takes away 24, leaving 96. The final price is 96% of the original.

The structure to remember: up x%, then down x%, always nets out *below* the start, because the cut applies to the larger figure. The combined effect is a decrease of (x/10)² percent — here, 4%.

The correct answer is B.
**mistake_a:** 80% applies the decrease as if the increase never happened — a net change of −20%. The problem contains two changes, and the first one is not optional.
**mistake_c:** 100% is the engineered trap: "up 20, down 20, back to start." That would be true if both changes acted on the same base, but the decrease acts on the raised price, so it removes more dollars than the increase added.
**mistake_d:** 104% gets the size of the correction right (4%) but the direction wrong. The net must fall below the original, not above it, because the larger base belongs to the decrease.
**mistake_e:** 120% ignores the decrease entirely and reports the price after only the markup.
**common_trap:** Treating sequential percent changes as if they add. "+20% then −20%" nets to −4%, not 0 — the choice sitting at 100% is bait for exactly that shortcut.
**takeaway:** Before computing a two-step percent change, predict the side of the start the answer must land on. That one prediction eliminates the trap choice and usually half the field with it.
**related_reading:** quant-04-answer-choice-tactics

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Which of the following is closest to √399 × 4.98 ?

- A) 10
- B) 45
- C) 100
- D) 250
- E) 1,000

**answer:** C
**fastest_path:** Each choice is at least double its neighbor — that spread is permission to estimate. √399 is a hair under 20, and 4.98 is a hair under 5, so the product is a hair under 100.
**explanation:** Read the choices before touching the numbers: 10, 45, 100, 250, 1,000. Adjacent choices differ by a factor of two or more, so any estimate within about 30% of the truth lands in exactly one bucket. That is the test telling you not to compute.

Snap each factor to its landmark: 399 sits just below 400, so √399 is just below 20. And 4.98 is just below 5. The product is just under 20 × 5 = 100.

Both roundings leaned the same way (up), so the true value sits slightly below 100 — nowhere near 45, and nowhere near 250.

The correct answer is C.
**mistake_a:** 10 loses a factor of ten, most often by reading √399 as "about 2" — confusing the square root of 400 with the square root of 4.
**mistake_b:** 45 comes from halving somewhere it doesn't belong, such as treating √399 as 399/2 percent or splitting 20 × 5 into 20 + 25. No legitimate path lands here.
**mistake_d:** 250 typically comes from multiplying 399 by something before taking the root, or squaring the 5 — manufacturing a factor that isn't in the expression.
**mistake_e:** 1,000 is what you get by skipping the square root entirely: 200 × 5. The radical sign is the whole question.
**common_trap:** Reaching for exact computation by reflex. When choices are spaced this far apart, exact arithmetic is not rigor — it is wasted time and a fresh chance for a slip.
**takeaway:** The gaps between choices set the precision the problem demands. Wide gaps license a ten-second landmark estimate; read them first, every time.
**related_reading:** quant-04-answer-choice-tactics

---

## Q3
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If k is a negative integer, which of the following could be the value of k² − k ?

- A) −12
- B) −2
- C) 9
- D) 15
- E) 20

**answer:** E
**fastest_path:** Run two filters before solving anything. Sign: k² is positive and −k is positive, so the value must be positive — (A) and (B) die. Parity: k² − k = k(k − 1), a product of consecutive integers, which is always even — (C) and (D) die. Only (E) survives; k = −4 confirms it.
**explanation:** Test the choices against properties the expression must have, rather than hunting for the right k directly.

Sign first: for negative k, k² is positive and −k is also positive, so k² − k is positive. Eliminate −12 and −2.

Parity next: factor k² − k = k(k − 1). These are consecutive integers, and one of any two consecutive integers is even, so the product is always even. Eliminate 9 and 15.

Only 20 remains. Confirm it is achievable: k = −4 gives 16 − (−4) = 20.

The correct answer is E.
**mistake_a:** −12 has the wrong sign. Both pieces of k² − k are positive when k is negative — squaring kills the minus sign, and subtracting a negative adds.
**mistake_b:** −2 comes from computing k² − k at k = −1 as 1 − 1 or −1 − 1 — a sign slip on the −k term. At k = −1 the true value is 1 + 1 = 2.
**mistake_c:** 9 fails the parity filter: k(k − 1) is a product of consecutive integers and can never be odd, no matter which integer k you pick.
**mistake_d:** 15 fails the same parity filter as 9. If you found yourself testing k-values against it, the factored form k(k − 1) would have saved every one of those tests.
**common_trap:** Solving forward — picking k-values and computing — when the five choices can be screened wholesale. Two property checks eliminate four choices in under fifteen seconds.
**takeaway:** "Could be the value" questions are property tests in disguise. Ask what sign, parity, or form the expression is forced to have, and execute the cheapest filter first.
**hint_nudge:** What must be true about the sign of k² − k when k is negative? Check that before testing any numbers.
**hint_strategy:** Factor k² − k as k(k − 1) — a product of consecutive integers. What does that force about its parity?
**related_reading:** quant-04-answer-choice-tactics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

23 × 17 + 19 × 13 =

- A) 614
- B) 622
- C) 630
- D) 638
- E) 646

**answer:** D
**fastest_path:** The choices are clustered within 32 of each other, so estimation can't separate them — but every choice ends in a different digit. Compute only the units digit: 3 × 7 ends in 1, 9 × 3 ends in 7, and 1 + 7 = 8. One choice ends in 8.
**explanation:** Two reads of the answer choices decide the method here. First, the spread: the choices run from 614 to 646, far too tight for ballparking — a rough estimate of "about 400 plus about 250" puts you near all five. Second, the form: the five units digits are 4, 2, 0, 8, and 6 — all different. When every choice ends differently, the units digit alone identifies the answer.

Track only units digits through the arithmetic. 23 × 17: the units digit comes from 3 × 7 = 21, so it ends in 1. 19 × 13: from 9 × 3 = 27, so it ends in 7. The sum ends in 1 + 7 = 8.

Only 638 ends in 8. (For reference, the full products are 391 and 247, which indeed sum to 638.)

The correct answer is D.
**mistake_a:** 614 ends in 4, which would require the partial products to end in digits summing to 4 — but 3 × 7 and 9 × 3 force 1 and 7. Likely a full-arithmetic slip, the exact risk the units-digit shortcut avoids.
**mistake_b:** 622 comes from a carrying error in the long multiplication, such as 23 × 17 = 375. The units check rejects it instantly: it ends in 2, not 8.
**mistake_c:** 630 is "about 400 plus about 230" — an estimate. The tight cluster is precisely the situation where estimation is illegal; the choices sit inside the rounding error.
**mistake_e:** 646 comes from a small overcount such as 19 × 13 = 255. It ends in 6, and the units digits of the true products forbid that ending.
**common_trap:** Seeing a tight cluster and concluding you must grind out both full products. Tight gaps do demand exactness — but only as much exactness as separates the choices, and here one digit does it.
**takeaway:** When clustered choices all end in different digits, compute only the units digit. You get exact-arithmetic certainty at estimation speed.
**hint_nudge:** Look at the last digit of each answer choice. What do you notice?
**hint_strategy:** The units digit of a sum of products depends only on the units digits of the factors: 3 × 7 and 9 × 3.
**related_reading:** quant-04-answer-choice-tactics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A cyclist rides from home to a lake at a constant 12 miles per hour and returns home along the same route at a constant 18 miles per hour. What is the cyclist's average speed, in miles per hour, for the round trip?

- A) 13.5
- B) 14.4
- C) 15.0
- D) 15.6
- E) 16.5

**answer:** B
**fastest_path:** 15.0 is the midpoint of 12 and 18 — the engineered trap. The cyclist spends more time at the slower speed, so the average is pulled below 15, killing (C), (D), and (E). Between the survivors, pick a distance: 36 miles each way gives 3 hours out, 2 hours back — 72 miles in 5 hours is 14.4.
**explanation:** Average speed is total distance over total time, not the average of the two speeds. Because the legs are equal in distance, the cyclist spends *more time* at 12 mph than at 18 mph, so the slow leg carries more weight and drags the average below the midpoint of 15.

That one observation, made before any computation, eliminates 15.0 and everything above it. Only 13.5 and 14.4 remain.

To finish, choose a friendly distance — 36 miles each way (a multiple of both speeds). Out: 36 ÷ 12 = 3 hours. Back: 36 ÷ 18 = 2 hours. Round trip: 72 miles in 5 hours = 14.4 mph.

The correct answer is B.
**mistake_a:** 13.5 overcorrects — it is the average dragged down as if the slow leg took twice the weight it actually carries (a 3:1 time split instead of the true 3:2).
**mistake_c:** 15.0 is the arithmetic mean of 12 and 18 — the choice the problem was built around. Averaging the speeds assumes equal *time* at each, but equal *distance* means unequal time.
**mistake_d:** 15.6 weights the *faster* leg more heavily — the right idea applied in the wrong direction. More time passes at 12 mph, not at 18.
**mistake_e:** 16.5 is the midpoint of 15 and 18, a number with no physical meaning here — likely an anchor slip after computing the naive average.
**common_trap:** Averaging the two speeds. Whenever the same distance is covered at two different rates, the true average speed always sits below the midpoint, toward the slower rate.
**takeaway:** On equal-distance round trips, predict "below the midpoint" before computing. The prediction alone eliminates the trap and the upper half of the choices.
**hint_nudge:** Does the cyclist spend the same amount of time at 12 mph as at 18 mph?
**hint_strategy:** Pick a route length divisible by both speeds — 36 miles — and compute total distance over total time.
**related_reading:** quant-04-answer-choice-tactics

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A bag contains only red marbles and green marbles in the ratio 2 : 7. Which of the following could be the total number of marbles in the bag?

- A) 26
- B) 35
- C) 46
- D) 54
- E) 70

**answer:** D
**fastest_path:** A 2:7 ratio means every batch of marbles comes in groups of 2 + 7 = 9, so the total must be a multiple of 9. Scan the choices: only 54 is.
**explanation:** If red : green = 2 : 7, then red = 2k and green = 7k for some positive integer k, making the total 9k — a multiple of 9.

Test each choice for divisibility by 9 (digit sum works): 26 → 8, no. 35 → 8, no. 46 → 10, no. 54 → 9, yes. 70 → 7, no.

Only 54 is a multiple of 9 (k = 6: 12 red, 42 green).

The correct answer is D.
**mistake_a:** 26 is not a multiple of 9; it may look plausible as 2 + 7 scaled oddly, but parts of a 2:7 ratio scale together by whole numbers.
**mistake_b:** 35 is a multiple of 7 — bait for checking divisibility against one ratio part instead of the sum of the parts. The green count alone is a multiple of 7; the *total* must be a multiple of 9.
**mistake_c:** 46 ends in the digits of "2 and 7 makes 9" arithmetic done loosely (e.g., 2 × 7 = 14 reasoning); its digit sum is 10, so it fails.
**mistake_e:** 70 is a multiple of both 2 and 7 — the most tempting wrong answer. Divisibility by each part separately is not the test; the total of a 2:7 mix is divisible by 9, and 70 is not.
**common_trap:** Checking divisibility by the ratio numbers (2 and 7) instead of by their sum (9). The parts scale together, so the whole always comes in blocks of 9.
**takeaway:** A part-to-part ratio a : b forces every possible total to be a multiple of a + b. "Could be the total" questions are divisibility scans, not algebra.
**related_reading:** quant-04-answer-choice-tactics

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

What is 20% of 25% of 640 ?

- A) 32
- B) 128
- C) 160
- D) 288
- E) 512

**answer:** A
**fastest_path:** 20% of 25% is a *slice of a slice* — 5% overall. The answer must be dramatically smaller than every choice built from a single percentage of 640. Only 32 is small enough, and 5% of 640 confirms it: 32.
**explanation:** Chained percents multiply: 20% of 25% is 0.20 × 0.25 = 0.05, so the question is really asking for 5% of 640.

5% of 640: 10% is 64, so 5% is 32.

A magnitude check makes the answer choice obvious before the arithmetic: taking a quarter of 640, then a fifth of that, shrinks the number twice. The result must sit far below 160 (which is just the first cut alone) — only one choice does.

The correct answer is A.
**mistake_b:** 128 is 20% of 640 — the 25% step was skipped. Both percents act, one after the other.
**mistake_c:** 160 is 25% of 640 — the 20% step was skipped. "20% of 25% of" applies both cuts, not just the inner one.
**mistake_d:** 288 is 45% of 640 — the percents were added instead of multiplied. "Of" chains percents by multiplication; addition would describe two separate slices of the original, not a slice of a slice.
**mistake_e:** 512 is 640 reduced *by* 20% — reading "of" as "off." Taking 20% of a quantity keeps the small piece; taking 20% off keeps the large one.
**common_trap:** Adding chained percents (20 + 25 = 45). Each "of" multiplies: the second percent acts on the output of the first, not on the original.
**takeaway:** Chained "of" means multiply the decimals first — and a slice of a slice must be small. A one-second size check eliminates every single-step distractor before you compute.
**related_reading:** quant-04-answer-choice-tactics

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If |2x − 3| = 11 and x < 0, what is the value of x ?

- A) −7
- B) −4
- C) −2
- D) 4
- E) 7

**answer:** B
**fastest_path:** The stem hands you a sign condition: x < 0 kills (D) and (E) on sight. Now test the survivors in the equation: x = −4 gives |−8 − 3| = 11. Done — one substitution after the sign cut.
**explanation:** Use the constraint before the algebra. The condition x < 0 eliminates 4 and 7 immediately, narrowing five choices to three.

Now substitute the remaining candidates into |2x − 3| = 11 rather than unpacking the absolute value formally:

x = −7: |−14 − 3| = 17. No. x = −4: |−8 − 3| = |−11| = 11. Yes.

For reference, the forward solution: 2x − 3 = 11 gives x = 7 (rejected, positive), and 2x − 3 = −11 gives x = −4.

The correct answer is B.
**mistake_a:** −7 is the sign-flipped version of the rejected solution x = 7 — a tempting symmetry, but |2(−7) − 3| = 17, not 11. Absolute-value solutions are not mirror images of each other, because the −3 inside breaks the symmetry.
**mistake_c:** −2 gives |−4 − 3| = 7 — likely from solving 2x − 3 = −11 with an arithmetic slip (−8/2 mishandled, or subtracting 3 from −11 instead of adding).
**mistake_d:** 4 violates the stated condition x < 0 before any equation work; it also fails the equation itself (|5| = 5).
**mistake_e:** 7 solves the equation — it is the root of the positive case — but the stem's condition x < 0 explicitly discards it. Constraints in the stem are filters on the choices, and this one was free.
**common_trap:** Solving both absolute-value cases and then forgetting which one the constraint keeps. Apply the constraint to the answer choices *first*, and half the work disappears.
**takeaway:** When the stem states a sign or range condition, run it against the choices before doing algebra. Then test the survivors directly — substitution beats case-splitting when only two or three candidates remain.
**hint_nudge:** The problem says x < 0. How many choices survive that condition?
**hint_strategy:** Plug the surviving choices into |2x − 3| and keep the one that produces 11.
**related_reading:** quant-04-answer-choice-tactics

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

When the integer n is divided by 6, the remainder is 3. Which of the following could be the value of n ?

- A) 24
- B) 32
- C) 45
- D) 50
- E) 62

**answer:** C
**fastest_path:** n = 6k + 3: an even number plus 3 — so n must be odd. Exactly one choice is odd. Confirm: 45 = 6 × 7 + 3.
**explanation:** Write the condition in its standard form: n = 6k + 3 for some integer k.

Now extract the cheapest property: 6k is always even, and even + 3 is odd. So n must be odd — and a glance at the choices shows 45 is the only odd one there. The parity filter alone finishes the problem.

Verify: 45 = 42 + 3 = 6(7) + 3, remainder 3 as required. (A stronger filter — n must be a multiple of 3 but not of 6 — also isolates 45, but parity is faster to see.)

The correct answer is C.
**mistake_a:** 24 is divisible by 6 exactly, so its remainder is 0, not 3. It is also even, which the form 6k + 3 forbids.
**mistake_b:** 32 = 6 × 5 + 2 leaves remainder 2. The even/odd check rejects it without any division.
**mistake_d:** 50 = 6 × 8 + 2 leaves remainder 2. Even — impossible for 6k + 3.
**mistake_e:** 62 = 6 × 10 + 2 leaves remainder 2. Like every even choice here, it never had a chance: even plus 3 can't be even.
**common_trap:** Dividing every choice by 6 and computing five remainders. The remainder condition encodes properties — here, oddness — that screen the whole list at a glance.
**takeaway:** Translate "remainder r when divided by d" into the form n = dk + r, then read off the cheap properties (parity, divisibility) before doing any division on the choices.
**hint_nudge:** Write n as 6k + 3. Is that quantity even or odd?
**hint_strategy:** 6k is always even, so 6k + 3 is always odd. Scan the choices for parity before dividing anything.
**related_reading:** quant-04-answer-choice-tactics

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The price of a stock increased by 25%. By what percent must the new price now decrease in order to return to the original price?

- A) 15%
- B) 20%
- C) 22.5%
- D) 25%
- E) 30%

**answer:** B
**fastest_path:** 25% is the trap — the decrease acts on a *larger* base, so a smaller percent suffices, killing (D) and (E). On a base of 100: up 25% is 125, and the drop needed is 25 points out of 125 — exactly 1/5, or 20%.
**explanation:** The percent up and the percent back down are never equal, because they are measured against different bases. The increase is measured against the original (smaller) price; the decrease is measured against the new (larger) price. A given number of dollars is a smaller *percent* of the larger base — so the required decrease must be less than 25%. That kills 25% and 30% before any computation.

Now compute on a base of 100: the price rises to 125 and must fall by 25 points. As a percent of the new base, that is 25/125 = 1/5 = 20%.

A useful general form: undoing an increase of x% requires a decrease of x/(100 + x) × 100%. For x = 25: 25/125 = 20%.

The correct answer is B.
**mistake_a:** 15% overcorrects. The right discount is 25 points measured against 125; shaving it all the way to 15% would leave the price above the original (125 × 0.85 = 106.25).
**mistake_c:** 22.5% splits the difference between the trap (25%) and the answer — a compromise number with no basis. The base of 125 makes the discount exactly 1/5.
**mistake_d:** 25% is the engineered trap: the same percent down as up. But 125 × 0.75 = 93.75, overshooting below the original — the decrease bites a bigger base than the increase did.
**mistake_e:** 30% mistakes the direction of the asymmetry, as if a bigger percent were needed to "fight" the raised price. The raised base makes each percent point *worth more*, so fewer points are needed.
**common_trap:** Assuming symmetric percents undo each other. Up x% then down x% always lands below the start; the true "undo" percent is always smaller than x.
**takeaway:** Whenever a percent change must be reversed, re-anchor to the new base before computing — and use "must be smaller than the original percent" to clear the trap and the top of the choice list instantly.
**hint_nudge:** Is the decrease measured against the original price or the increased price? Which base is bigger?
**hint_strategy:** Put the original price at 100. The new price is 125, and you need to remove 25 of it — what fraction of 125 is that?
**related_reading:** quant-04-answer-choice-tactics

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If x and y are positive integers and 4x + 7y = 65, which of the following could be the value of y ?

- A) 2
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** E
**fastest_path:** Parity does most of the work: 4x is even and 65 is odd, so 7y must be odd — y must be odd. That kills (A), (B), and (D). Test the survivors: y = 5 leaves 30, not divisible by 4; y = 7 leaves 16 = 4 × 4. Answer: 7.
**explanation:** Screen the choices with parity before solving anything. 4x is even for every integer x, and the total 65 is odd, so 7y must make up the odd part — meaning 7y is odd, which forces y to be odd. Choices 2, 4, and 6 are eliminated in one stroke.

Two candidates remain, so test them directly against the requirement that x be a positive integer:

y = 5: 4x = 65 − 35 = 30, and 30/4 is not an integer. Rejected. y = 7: 4x = 65 − 49 = 16, so x = 4. Valid.

The correct answer is E.
**mistake_a:** 2 fails parity: with y = 2, 4x + 14 is even and can never equal odd 65. No value of x rescues an even left side.
**mistake_b:** 4 fails the same parity test — 4x + 28 is even, 65 is odd. Any even y is dead on arrival.
**mistake_c:** 5 passes the parity screen but fails the divisibility test: it leaves 4x = 30, and 30 is not a multiple of 4. This is the distractor for solvers who stop at the first filter — filters narrow the field, then you verify what remains.
**mistake_d:** 6 fails parity, like every even choice. Three of the five choices fall to a single observation about even and odd.
**common_trap:** Solving the Diophantine equation forward — testing y = 1, 2, 3, … in order. The choices already restrict y to five values; properties of the equation (parity, then divisibility by 4) sort those five in seconds.
**takeaway:** With integer-constraint equations, run cheap filters across the choices in order of cost: parity first, then divisibility. Verify only the survivors.
**hint_nudge:** 4x is always even. What does that say about 7y, given that the total is 65?
**hint_strategy:** y must be odd — then check the two odd candidates by seeing whether 65 − 7y is divisible by 4.
**related_reading:** quant-04-answer-choice-tactics
