---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A laptop regularly priced at $1,184 is on sale at 26% off. The sale price is closest to:

- A) $296
- B) $592
- C) $876
- D) $948
- E) $1,066

**answer:** C
**fastest_path:** 26% off means you pay 74% — about three quarters. Three quarters of about 1,200 is about 900, leaning a little low. Only one choice lives in that neighborhood.
**explanation:** The question says "closest to," and the choices are hundreds of dollars apart — both are signals to estimate rather than multiply 0.74 by 1,184 exactly.

Paying after a 26% discount means paying 100% − 26% = 74% of the sticker price. Round 74% to 75% (three quarters) and round $1,184 to $1,200: three quarters of 1,200 is 900.

Track the direction of the rounding: 75% is slightly more than the true 74%, and 1,200 is slightly more than 1,184, so the true value sits a bit below 900. The only choice near there is $876.

For reference, the exact value is 0.74 × 1,184 = $876.16 — but you never needed it.

The correct answer is C.
**mistake_a:** $296 is approximately the discount itself (26% of 1,184 ≈ 296) — the amount saved, not the amount paid. Estimating the wrong quantity is the most common estimation error: round the numbers, never the question.
**mistake_b:** $592 is half the sticker price — treating "26% off" as if it were roughly "half off." 26% off means you still pay nearly three quarters.
**mistake_d:** $948 is the price after only a 20% discount (0.80 × 1,184). Rounding 26% all the way down to 20% is a fudge larger than the gap between choices — snap to the nearest landmark (25%), not the most convenient one.
**mistake_e:** $1,066 is the price after a 10% discount — likely a decimal slip that turned 26% into something near 10%, or subtracting 118 instead of about 308.
**common_trap:** Computing the discount ($296, choice A) and stopping. The stem asks what the laptop sells for, not what the markdown is worth.
**takeaway:** For "X% off" questions, convert immediately to "you pay (100 − X)%," snap that to the nearest landmark percent, and track which way your rounding leaned.
**related_reading:** quant-03-estimation

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (0.748 × 59.4) / 0.0297 ?

- A) 1.5
- B) 15
- C) 150
- D) 1,500
- E) 15,000

**answer:** D
**fastest_path:** The choices differ by factors of ten, so only the order of magnitude matters. Snap each number to a landmark: (3/4 × 60) / (3/100) = 45 × 100/3 = 1,500.
**explanation:** Read the answer choices first: each is ten times the one before it. When choices are spaced by powers of ten, exact arithmetic is wasted effort — you only need the rough size.

Snap each messy number to a clean one: 0.748 is about 3/4, 59.4 is about 60, and 0.0297 is about 0.03.

Numerator: 3/4 of 60 = 45. Then divide: 45 / 0.03. Dividing by 0.03 is the same as multiplying by 100/3, so 45 / 0.03 = 4,500 / 3 = 1,500.

Every rounding here was tiny, so the true value sits very near 1,500 (it is about 1,496). With choices a full factor of ten apart, that lands in exactly one bucket.

The correct answer is D.
**mistake_a:** 1.5 loses three factors of ten — shifting the decimal the wrong way on both 0.748 and 0.0297. Once the zeros go, nothing else about the computation matters.
**mistake_b:** 15 is the result of mishandling the decimal in 0.0297 by two places — dividing 45 by 3 instead of 0.03. Count the decimal shift once, carefully: dividing by three hundredths multiplies by 100/3.
**mistake_c:** 150 comes from one lost factor of ten in the division — treating 0.0297 as roughly 0.3. The most error-prone step in problems like this is the decimal shift, which is exactly why the test chose a divisor like 0.0297.
**mistake_e:** 15,000 comes from one extra factor of ten — treating 0.0297 as 0.003, or shifting the decimal three places instead of two.
**common_trap:** Trying to long-multiply 0.748 × 59.4 before glancing at the choices. The factor-of-ten spacing was the test telling you that landmark rounding settles it in seconds.
**takeaway:** When choices are spaced by powers of ten, the question is really "how many zeros?" Snap every number to its nearest clean landmark and only track the decimal shifts.
**hint_nudge:** Look at how the five choices relate to each other before computing anything.
**hint_strategy:** Replace each number with a clean landmark — 3/4, 60, and 0.03 — and just keep the powers of ten straight.
**related_reading:** quant-03-estimation

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A storage tank holds 4,980 liters of water and is drained at a constant rate of 19.7 liters per minute. Approximately how many minutes will it take to empty the tank?

- A) 25
- B) 250
- C) 2,500
- D) 25,000
- E) 98,000

**answer:** B
**fastest_path:** Round to 5,000 ÷ 20 = 250. The choices are factors of ten apart, so the rough quotient is the answer.
**explanation:** The stem says "approximately" and the choices are spaced by factors of ten — both numbers are begging to be rounded.

Round 4,980 up to 5,000 and 19.7 up to 20. Then 5,000 ÷ 20 = 250 minutes.

Both numbers were rounded up by similar small fractions, so the errors largely cancel; the true value (about 253) sits essentially on top of the estimate. Only one choice is anywhere near 250.

The correct answer is B.
**mistake_a:** 25 drops a factor of ten in the division — easy to do if you cancel a zero from 5,000 against the 2 in 20 incorrectly. A 5,000-liter tank draining 20 liters every minute clearly takes more than 25 minutes; a one-beat sanity check catches this.
**mistake_c:** 2,500 adds a factor of ten, typically from treating 19.7 as about 2 instead of about 20. Get the power of ten right before anything else.
**mistake_d:** 25,000 is two factors of ten too large — at 20 liters per minute that would drain half a million liters.
**mistake_e:** 98,000 is approximately 4,980 × 19.7 — multiplying instead of dividing. Time = amount ÷ rate; multiplying amount by rate produces a number with meaningless units.
**common_trap:** Grinding out 4,980 ÷ 19.7 by long division. The "approximately" plus the spread-out choices mean the test is rewarding the ten-second rounding, not the exact quotient.
**takeaway:** Get the order of magnitude first — count zeros before you compute digits. When adjacent choices differ by a factor of ten, the neighborhood is the whole answer.
**related_reading:** quant-03-estimation

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A courier's five packages weigh 38, 61, 44, 57, and 49 kilograms. The average (arithmetic mean) weight of the packages, in kilograms, is closest to:

- A) 44
- B) 46
- C) 50
- D) 55
- E) 62

**answer:** C
**fastest_path:** Anchor at 50 and sum the deviations: −12, +11, −6, +7, −1 totals −1. The mean is a fifth of that below the anchor — essentially 50.
**explanation:** Never sum five two-digit numbers raw when an anchor will do. Pick a central guess — 50 looks right — and total each value's deviation from it.

The deviations are: 38 → −12, 61 → +11, 44 → −6, 57 → +7, 49 → −1.

Sum of deviations: −12 + 11 − 6 + 7 − 1 = −1. Spread over five packages, that is −0.2 from the anchor, so the mean is about 49.8.

The deviations are small one- and two-digit numbers that partly cancel, so the running total stays tiny — that is why anchoring beats carrying a three-digit sum. (Check: the raw sum is 249, and 249 ÷ 5 = 49.8.)

The correct answer is C.
**mistake_a:** 44 comes from letting the eye anchor on the cluster of low values (38, 44) and under-weighting the two heavy packages. The mean balances total deviation; it does not sit where most values "look" like they are.
**mistake_b:** 46 is what you get if you mis-sign the +11 deviation as −11 — the running total becomes −23, pulling the estimate to about 45.4. Write deviations with their signs; a sign slip on one value shifts the whole answer.
**mistake_d:** 55 results from mis-signing the −12 deviation as +12, making the total +23 and the mean about 54.6 — the mirror image of the same bookkeeping slip.
**mistake_e:** 62 is 249 ÷ 4 — dividing the correct total by four instead of five. The divisor is the number of values, every time.
**common_trap:** Summing 38 + 61 + 44 + 57 + 49 longhand and slipping a carry. The anchor-and-nudge method keeps every intermediate number small enough to hold in your head.
**takeaway:** To estimate a mean, anchor at a central guess, total the signed deviations, and divide that small total by the count. The deviations partly cancel; the raw sum never does.
**related_reading:** quant-03-estimation

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

After a 28% discount, Lena paid $63 for a jacket. The original price of the jacket was closest to:

- A) $45
- B) $81
- C) $88
- D) $91
- E) $105

**answer:** C
**fastest_path:** Paying $63 is paying 72% of the original, so the original is 63 ÷ 0.72 — about 63 ÷ 0.7 = 90, leaning high because the divisor was rounded down. Just below 90 means $88.
**explanation:** This is a reverse-percent problem: $63 is what remains after the discount, so it equals 72% of the original price. The original is therefore 63 ÷ 0.72, not 63 times anything.

Estimate: 0.72 rounds to 0.7, and 63 ÷ 0.7 = 90.

Now the step that separates the two surviving choices, $88 and $91: track the direction. You divided by 0.7 instead of the true 0.72 — dividing by a smaller number produces a bigger result, so 90 overshoots. The true value sits below 90, which points to $88, not $91.

Exact check: 63 ÷ 0.72 = 87.5.

The correct answer is C.
**mistake_a:** $45 applies the 28% discount to $63 again (0.72 × 63 ≈ 45) — running the discount forward when the question asks you to undo it. The sale price is the output of the discount, not the input.
**mistake_b:** $81 is 63 × 1.28 — adding 28% of the sale price. The discount was 28% of the original price, a larger base, so multiplying by 1.28 under-corrects. Undoing "× 0.72" requires "÷ 0.72."
**mistake_d:** $91 is 63 + 28 — treating the percent as a dollar amount. It is also where you land if you estimate 63 ÷ 0.7 ≈ 90 and round up without tracking direction: the divisor was rounded down, so the estimate leans high and the true value is below 90.
**mistake_e:** $105 is 63 ÷ 0.6 — over-rounding 72% all the way down to 60%. With choices only a few dollars apart at the top, a 12-point rounding fudge is bigger than the gaps it needs to resolve.
**common_trap:** Multiplying by 1.28 instead of dividing by 0.72. Percent increase and percent decrease are not inverses of each other, because they act on different bases.
**takeaway:** "Paid P after X% off" means the original is P ÷ (1 − X/100). When your estimate lands between two choices, the direction of your rounding — not more arithmetic — breaks the tie.
**hint_nudge:** $63 is what is left after the discount. Is the original bigger or smaller than 63 ÷ 0.72 rounded with 0.7?
**hint_strategy:** Compute 63 ÷ 0.7 ≈ 90, then ask which way that estimate leans, given that the true divisor is 0.72.
**related_reading:** quant-03-estimation

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Of a company's 612 employees, 48% commute by train. Approximately how many of the employees commute by train?

- A) 295
- B) 318
- C) 350
- D) 460
- E) 612

**answer:** A
**fastest_path:** 48% is "just under half." Half of 612 is 306, so the count is just under 306 — about 295. One choice is in that neighborhood.
**explanation:** Snap 48% to its nearest landmark: one half. Half of 612 is 306.

Track the lean: 48% is slightly less than 50%, so the true count sits slightly below 306. The exact value is 0.48 × 612 = 293.76 — and 295 is the only choice below the halfway mark of 306.

Note what made this legal: the rounding from 48% to 50% wobbles the estimate by only about 12, while the choices near the estimate differ by more than 20.

The correct answer is A.
**mistake_b:** 318 is 52% of 612 — the employees who do NOT commute by train. The complement is always sitting one careless read away; estimate the quantity the stem names.
**mistake_c:** 350 leans the wrong way — adjusting the "half of 612" estimate up. 48% is less than 50%, so the true count must fall below 306, not above it.
**mistake_d:** 460 is about 75% of 612 — misreading 48% as roughly three quarters.
**mistake_e:** 612 is the total number of employees — the percent never got applied at all.
**common_trap:** Computing the complement: 52% of 612 ≈ 318 is the count of employees who don't take the train, and it sits right next to the correct answer. Round the numbers, never the question.
**takeaway:** Snap percents to the nearest landmark — 10%, 25%, 50%, 75% — then nudge in the direction of the gap between the landmark and the true percent.
**related_reading:** quant-03-estimation

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

The sum 5/9 + 7/15 is closest to which of the following?

- A) 1/4
- B) 1/2
- C) 3/4
- D) 1
- E) 3/2

**answer:** D
**fastest_path:** Read each fraction as a size: 5/9 is a bit more than 1/2, and 7/15 is a bit less than 1/2. A bit more plus a bit less is about 1.
**explanation:** Do not find a common denominator — read each fraction against the benchmark 1/2.

5/9: half of 9 is 4.5, and the numerator 5 exceeds it, so 5/9 is slightly more than 1/2 (about 0.56).

7/15: half of 15 is 7.5, and the numerator 7 falls just short, so 7/15 is slightly less than 1/2 (about 0.47).

Slightly more than half plus slightly less than half: the excess and the shortfall nearly cancel, so the sum is almost exactly 1. (Exact: 25/45 + 21/45 = 46/45 ≈ 1.02.)

The correct answer is D.
**mistake_a:** 1/4 is approximately the product of the two fractions (5/9 × 7/15 = 7/27 ≈ 0.26) — multiplying when the stem says sum.
**mistake_b:** 1/2 comes from "adding" the fractions by adding numerators and denominators: 12/24 = 1/2. That operation produces a value between the two fractions — an average-like result, never their sum.
**mistake_c:** 3/4 under-rounds, typically by reading 7/15 as "about a quarter." Benchmark against 1/2 properly: 7 is nearly half of 15, not a quarter of it.
**mistake_e:** 3/2 over-rounds one of the fractions to about 1 — but 5/9 is barely more than half, nowhere near a whole.
**common_trap:** Reflexively hunting for the LCD of 9 and 15. The choices are spaced a half-unit apart — benchmark reading answers it in five seconds with no common denominator.
**takeaway:** Read every unfamiliar fraction against the benchmarks 0, 1/2, and 1 by comparing the numerator to half the denominator. Most "closest to" fraction sums collapse instantly.
**related_reading:** quant-03-estimation

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (41.8% of 2,397) divided by 11.9?

- A) 8
- B) 20
- C) 50
- D) 85
- E) 100

**answer:** D
**fastest_path:** 40% of 2,400 = 960, and 960 ÷ 12 = 80. Both roundings leaned down, so the true value is a bit above 80.
**explanation:** Three messy numbers, choices spread far apart — pure landmark territory.

Snap each: 41.8% → 40%, 2,397 → 2,400, 11.9 → 12. Then 40% of 2,400 is 960, and 960 ÷ 12 = 80.

Direction check: 41.8% was rounded down to 40% (estimate leans low), and dividing by 12 instead of 11.9 also pushes the result down slightly. Both leans point the same way — the true value sits somewhat above 80. That confirms 85 over any temptation to drift toward 50.

Exact: 0.418 × 2,397 ≈ 1,002, and 1,002 ÷ 11.9 ≈ 84.2.

The correct answer is D.
**mistake_a:** 8 is a decimal slip in the final division — dividing by 119 instead of 11.9. The order of magnitude died, and with it the answer.
**mistake_b:** 20 uses 10% instead of 41.8% (240 ÷ 12 = 20), a misread of the percent.
**mistake_c:** 50 uses 25% as the landmark (600 ÷ 12 = 50). 41.8% is closer to 40% than to 25% — snap to the nearest landmark, not the most familiar one.
**mistake_e:** 100 over-rounds 41.8% up to 50% (1,200 ÷ 12 = 100). A nine-point rounding is bigger than it looks once multiplied through 2,400.
**common_trap:** Computing 0.418 × 2,397 exactly before looking at the spread of the choices. The gaps are enormous; landmark rounding was always going to isolate one choice.
**takeaway:** Round every factor to its nearest landmark, but note each rounding's direction. When all the leans point one way, you know which side of your estimate the truth is on.
**hint_nudge:** None of the three numbers deserves exact treatment — check the gaps between the choices.
**hint_strategy:** Use 40% of 2,400, then divide by 12. Then ask: did my roundings push the estimate up or down?
**related_reading:** quant-03-estimation

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

On a map drawn to a scale of 1 centimeter to 3.8 kilometers, two towns are 23.2 centimeters apart. The actual distance between the towns, in kilometers, is closest to:

- A) 6
- B) 90
- C) 230
- D) 880
- E) 2,320

**answer:** B
**fastest_path:** Multiply about 23 by about 4: roughly 92, leaning high because 3.8 was rounded up. Just under 92 points to 90.
**explanation:** Each map centimeter is 3.8 real kilometers, so the real distance is 23.2 × 3.8.

Round 3.8 up to 4 and 23.2 down to 23: the product is about 23 × 4 = 92.

The two roundings pull in opposite directions, but the upward rounding (3.8 → 4) acts on the larger factor, so the estimate leans slightly high; the true value sits just under 92. Exact: 23.2 × 3.8 = 88.16. The only choice in that neighborhood is 90.

The correct answer is B.
**mistake_a:** 6 is 23.2 ÷ 3.8 — dividing by the scale instead of multiplying. The map is a shrunk picture of reality, so real distances are bigger than map distances.
**mistake_c:** 230 treats the scale as 1 cm : 10 km — shifting 23.2 by a factor of ten while ignoring the 3.8 entirely.
**mistake_d:** 880 is a decimal slip — multiplying 23.2 by 38 instead of 3.8.
**mistake_e:** 2,320 treats the scale as 1 cm : 100 km — two decimal shifts with the actual scale factor never applied.
**common_trap:** Over-rounding. 23.2 × 3.8 invites "20 × 3 = 60" because both roundings are easy, but two aggressive down-roundings compound into a 30% error and miss the neighborhood entirely. Round each factor to its nearest clean value, not its easiest.
**takeaway:** Round to the nearest landmark, not the laziest one, and let opposite-direction roundings partially cancel. Then place the true value on the correct side of your estimate before choosing.
**related_reading:** quant-03-estimation

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation

The value of (2.04)^5 is closest to which of the following?

- A) 32
- B) 35
- C) 40
- D) 64
- E) 128

**answer:** B
**fastest_path:** 2^5 = 32, but the base is 2% high and that excess compounds five times — about 10% high overall. 32 × 1.1 ≈ 35.
**explanation:** Rounding 2.04 to 2 gives 2^5 = 32 — and 32 is sitting right there as a choice. That is the test daring you to ignore the leftover.

When your rounded answer is itself a choice and a near neighbor is too, the small amount you rounded away decides the question. The base 2.04 is 2% above 2, and raising to the fifth power compounds that excess five times: roughly 5 × 2% = 10% above 32.

32 × 1.10 ≈ 35.2, which points to 35, not 32. (Exact: 2.04^2 = 4.1616, squared is about 17.32, times 2.04 is about 35.3.)

The correct answer is B.
**mistake_a:** 32 is the engineered trap: round 2.04 to 2, compute 2^5, and stop. The choices include both 32 and 35 precisely to punish discarding the 0.04 — small excesses compound under exponents.
**mistake_c:** 40 over-corrects the lean, bumping 32 up by 25% when the compounded excess is only about 10%. A 2% base excess through five factors is about 10%, not 25%.
**mistake_d:** 64 is 2^6 — an off-by-one in the exponent while juggling the repeated multiplication.
**mistake_e:** 128 is 2^7 — doubling twice past the fifth factor, the slip that comes from tracking "times two" on your fingers instead of writing the powers down.
**common_trap:** Treating "round 2.04 to 2" as free. Rounding the base of an exponential is never free: the error multiplies once per factor, so even tiny excesses surface in the answer.
**takeaway:** When your rounded result exactly matches a choice and another choice sits just beyond it, the discarded remainder is the whole question. A base (1 + r) raised to the n-th power is about (1 + nr) for small r — lean your estimate accordingly.
**hint_nudge:** 2^5 = 32 is one of the choices. Is the true value exactly 32, above it, or below it?
**hint_strategy:** The base exceeds 2 by 2%. What happens to that 2% when five copies of the base are multiplied together?
**related_reading:** quant-03-estimation

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation

Which of the following fractions is greatest?

- A) 13/27
- B) 25/52
- C) 5/11
- D) 7/15
- E) 51/101

**answer:** E
**fastest_path:** Benchmark every fraction against 1/2 by comparing the numerator to half the denominator. Four fall short of half; only 51/101 exceeds it.
**explanation:** Converting five awkward fractions to decimals is slow and error-prone. Instead, compare each numerator to half its denominator — that places every fraction relative to the benchmark 1/2 in one glance.

13/27: half of 27 is 13.5, and 13 < 13.5 — below half. 25/52: half of 52 is 26, and 25 < 26 — below half. 5/11: half of 11 is 5.5 — below half. 7/15: half of 15 is 7.5 — below half.

51/101: half of 101 is 50.5, and 51 > 50.5 — above half. Four fractions sit below the benchmark and one sits above it, so no decimal arithmetic is ever needed.

The correct answer is E.
**mistake_a:** 13/27 falls short of half by 0.5/27 (about 0.019). It is close to 1/2, but "close to half from below" can never beat a fraction that is above half.
**mistake_b:** 25/52 has the largest numerator and denominator on the page, which makes it look substantial — but size of the numbers says nothing about size of the fraction. It misses half by 1/52.
**mistake_c:** 5/11 misses half by 0.5/11 (about 0.045) — the smallest fraction listed, despite its compact look.
**mistake_d:** 7/15 misses half by 0.5/15 (about 0.033). Like A and B it is "almost a half," and almost is exactly what the benchmark test filters out.
**common_trap:** Reaching for a calculator-style decimal conversion of all five fractions, or judging fractions by how big their numerators look. The benchmark comparison settles each fraction in two seconds flat.
**takeaway:** To rank fractions near 1/2, compare each numerator to half its denominator. Above half beats below half — and when several sit on the same side, the one with the smallest shortfall relative to its denominator wins.
**hint_nudge:** Every choice is close to one particular benchmark fraction. Which one?
**hint_strategy:** For each fraction, ask: is the numerator more or less than half the denominator? Only one answer differs from the rest.
**related_reading:** quant-03-estimation

---

## Q12
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** floor-instead-of-closest
**est_time_seconds:** 60

√140 is closest to which of the following?

- A) 10
- B) 11
- C) 12
- D) 14
- E) 70

**answer:** C
**fastest_path:** Bracket 140 between consecutive perfect squares: 11² = 121 and 12² = 144. Then compare distances — 140 sits only 4 below 144 but 19 above 121.
**explanation:** Square roots of non-perfect squares are estimated by bracketing: find the two consecutive perfect squares that trap the number.

11² = 121 and 12² = 144, so √140 is between 11 and 12.

"Closest" asks for distance, not for which square fits underneath. 140 is 19 above 121 but only 4 below 144 — it sits far nearer the top of the bracket, so √140 is just under 12. (Exact: √140 ≈ 11.83.)

The correct answer is C.
**mistake_a:** 10 anchors on √100 — the most familiar perfect square in the neighborhood — and stops. 140 is 40% past 100; the bracket has to use the squares that actually trap it, 121 and 144.
**mistake_b:** 11 is the floor of √140 — the last whole number whose square stays under 140. The floor answers "what does it round down to," but the stem asks what it is closest to, and 140 hugs 144 far more tightly than 121.
**mistake_d:** 14 echoes the digits of 140 (140 ÷ 10). One squaring check kills it: 14² = 196, nowhere near 140.
**mistake_e:** 70 is half of 140 — halving instead of rooting. A square root undoes squaring, not doubling: 70² is 4,900.
**common_trap:** Reporting the floor (11) because 11² "fits" under 140. Bracketing gives you two candidates; the second step — comparing the gaps to each perfect square — is what the question is actually testing.
**takeaway:** To estimate √N, trap N between consecutive perfect squares, then lean toward whichever square N sits closer to.
**related_reading:** quant-03-estimation

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** truncation-rounding
**est_time_seconds:** 60

A hardware store sells boxes of screws for $3.89 each. The total cost of 7 boxes is closest to:

- A) $21
- B) $27
- C) $28
- D) $31
- E) $39

**answer:** B
**fastest_path:** Each box is just under $4, so 7 boxes cost just under 7 × 4 = $28 — about 77 cents under, which lands on $27, not $28.
**explanation:** Snap $3.89 to its nearest landmark: $4, not $3 — it misses 4 by only 11 cents but misses 3 by 89 cents.

Then 7 × 4 = 28, leaning high because the price was rounded up. The overshoot is 7 × $0.11 ≈ 77 cents, so the true total sits a bit below $28. (Exact: 7 × 3.89 = $27.23.)

The choice just under 28 is $27.

The correct answer is B.
**mistake_a:** $21 is 7 × 3 — truncating $3.89 down to $3 because the digit before the decimal is a 3. Truncation throws away 89 cents per box, a far bigger fudge than rounding up by 11 cents; round to the nearest landmark, not the digit you see first.
**mistake_c:** $28 is the raw rounded estimate, 7 × $4, with the lean ignored. You rounded the price up by 11 cents per box, so the true total must sit below 28 — and 77 cents below puts it closer to $27.
**mistake_d:** $31 is 8 boxes at $3.89 — an off-by-one miscount of the items.
**mistake_e:** $39 is 10 boxes — the price's digits (3.89) echoed as a total, or a slipped factor of ten on the count.
**common_trap:** Computing 7 × 4 = 28, seeing $28 among the choices, and clicking it. When the price was rounded up, the estimate overshoots — the rounded answer sitting right there is the test checking whether you track the lean.
**takeaway:** Round each number to its nearest clean landmark and track the lean: rounding $3.89 up to $4 means your estimate of the total runs slightly high.
**related_reading:** quant-03-estimation

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** decimal-shift
**est_time_seconds:** 60

A region has a population of 816,000 and an area of 392 square kilometers. The region's population density, in people per square kilometer, is closest to:

- A) 21
- B) 210
- C) 2,100
- D) 21,000
- E) 210,000

**answer:** C
**fastest_path:** Round to 800,000 ÷ 400 = 2,000. The choices are factors of ten apart, so the rough quotient settles it.
**explanation:** The choices are spaced by powers of ten, so this is an order-of-magnitude question: only the count of zeros matters.

Round 816,000 to 800,000 and 392 to 400. Then 800,000 ÷ 400: cancel two zeros from each to get 8,000 ÷ 4 = 2,000.

Both roundings were small (about 2% each) and they pull in opposite directions, so the true value sits essentially on the estimate. (Exact: 816,000 ÷ 392 ≈ 2,082.) Only one choice is in that neighborhood.

The correct answer is C.
**mistake_a:** 21 is two factors of ten short — cancelling zeros from the 800,000 twice against the same zeros in 400. Cross out each zero exactly once.
**mistake_b:** 210 drops one factor of ten, the classic slip when cancelling zeros between a six-digit number and a three-digit number in your head. Write the cancellation if the zeros run past three.
**mistake_d:** 21,000 adds a factor of ten — treating 392 as if it were about 40. The divisor is just under 400; its size sets the answer's size.
**mistake_e:** 210,000 is two factors of ten too large — at that density the region would hold over 80 million people. A one-beat sanity check on the answer's meaning catches runaway zeros.
**common_trap:** Long-dividing 816,000 by 392. With choices a full factor of ten apart, the whole question is "how many zeros survive the division?"
**takeaway:** When choices are spaced by powers of ten, round aggressively and just bookkeep the zeros — the digits beyond the first matter less than the decimal point.
**related_reading:** quant-03-estimation

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** lazy-landmark
**est_time_seconds:** 70

A car travels 489 miles on 15.8 gallons of gasoline. The car's fuel efficiency, in miles per gallon, is closest to:

- A) 3
- B) 16
- C) 25
- D) 31
- E) 7,700

**answer:** D
**fastest_path:** Round to 500 ÷ 16 = 31.25. Both numbers were rounded up by similar small fractions, so the errors mostly cancel.
**explanation:** Miles per gallon means miles divided by gallons: 489 ÷ 15.8.

Round 489 up to 500 (about 2% high) and 15.8 up to 16 (about 1% high). Rounding the top and bottom of a fraction up by similar fractions largely cancels, so 500 ÷ 16 = 31.25 is a tight estimate. (Exact: 489 ÷ 15.8 ≈ 30.9.)

The correct answer is D.
**mistake_a:** 3 is a decimal slip — dividing by 158 instead of 15.8. A car that goes 3 miles per gallon would need 163 gallons for this trip; sanity-check the meaning before moving on.
**mistake_b:** 16 is the gallons figure (15.8) echoed back as the answer — a number lifted straight from the stem without the division ever happening. Stem numbers reappearing as choices are bait, not answers.
**mistake_c:** 25 comes from over-rounding 15.8 up to 20 (489 ÷ 20 ≈ 24.5) because dividing by 20 is comfortable. That fudge inflates the divisor by 27% — far bigger than the gap between choices C and D. Round to the nearest landmark (16), not the most convenient one (20).
**mistake_e:** 7,700 is approximately 489 × 15.8 — multiplying instead of dividing. "Per gallon" means divide by gallons; multiplying produces a unit (mile-gallons) that answers nothing.
**common_trap:** Rounding 15.8 to 20 because 20 divides nicely. The convenience saves nothing — 500 ÷ 16 is just as fast — and the oversized fudge drags the estimate onto the wrong choice.
**takeaway:** Round to the nearest landmark, not the easiest one, and remember that rounding numerator and denominator in the same direction roughly cancels.
**related_reading:** quant-03-estimation

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** add-instead-of-multiply
**est_time_seconds:** 60

The product 4.92 × 5.07 is closest to which of the following?

- A) 5
- B) 10
- C) 20
- D) 25
- E) 30

**answer:** D
**fastest_path:** Both factors sit a hair from 5, and 5 × 5 = 25. Wobbles of a couple percent cannot move the product to any other choice.
**explanation:** Read each factor against a landmark before computing: 4.92 is barely below 5, and 5.07 is barely above it. So the product is essentially 5 × 5 = 25.

How far off can the estimate be? Each factor is within 2% of 5, so the product is within about 3% of 25 — a wobble of less than 1, while the nearest other choices sit 5 away.

For the tiebreak instinct: 4.92 falls 0.08 short of 5 while 5.07 exceeds it by only 0.07, so the product lands a touch below 25. (Exact: 24.94.) Nothing about the answer changes.

The correct answer is D.
**mistake_a:** 5 is approximately the average of the two factors — blending them instead of multiplying. The average of two numbers near 5 is 5; their product is near 25.
**mistake_b:** 10 is approximately 4.92 + 5.07 — adding when the stem says product. Sums of numbers near 5 land near 10; products land near 25.
**mistake_c:** 20 truncates 4.92 down to 4. The factor is eight hundredths from 5; chopping it to 4 is a 19% error, vastly bigger than the rounding the problem invites.
**mistake_e:** 30 rounds 5.07 up to 6 — but 5.07 is seven hundredths above 5, nowhere near 6. Snap to the nearest landmark, not the next integer up.
**common_trap:** Setting up long multiplication on 4.92 × 5.07. Both factors are screaming "5"; the choices are spaced so widely that the landmark product is the entire question.
**takeaway:** Before multiplying decimals, check whether each factor hugs a clean landmark. Numbers within a couple percent of a landmark leave the product within a few percent of the landmark product.
**related_reading:** quant-03-estimation

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** untracked-rounding-direction
**est_time_seconds:** 90

A theater sold 3,940 tickets at a price of $24.75 per ticket. The theater's total revenue from ticket sales was closest to:

- A) $9,800
- B) $80,000
- C) $98,000
- D) $100,000
- E) $109,000

**answer:** C
**fastest_path:** 4,000 × 25 = 100,000 — but both numbers were rounded up, so the truth sits below 100,000. The choice just below is $98,000.
**explanation:** Snap both factors to landmarks: 3,940 → 4,000 and $24.75 → $25. The estimate is 4,000 × 25 = 100,000.

Now the step the question is built around: both roundings went up — 4,000 exceeds 3,940 by about 1.5%, and 25 exceeds 24.75 by 1% — so the estimate leans high and the true revenue sits a couple percent below 100,000. A couple percent of 100,000 is a couple thousand dollars, landing near 97,500.

With both $98,000 and $100,000 on the page, the lean is the whole question. (Exact: 3,940 × 24.75 = $97,515.)

The correct answer is C.
**mistake_a:** $9,800 is a decimal slip — multiplying as if 394 tickets were sold. The leading digits are right; the lost zero is fatal.
**mistake_b:** $80,000 over-rounds $24.75 down to $20. A 19% fudge in one factor dwarfs the gaps between the upper choices; $24.75 is a quarter away from $25, not five dollars away from $20.
**mistake_d:** $100,000 is the raw landmark estimate with the direction ignored. Both inputs were rounded up, so 100,000 must overshoot — the test put it there to catch students who estimate but never ask which way the estimate leans.
**mistake_e:** $109,000 follows from transposing the price's digits ($27.45 instead of $24.75) — about 4,000 × 27 ≈ 108,000. Misread digits survive estimation; re-read the stem's numbers once before rounding them.
**common_trap:** Computing 4,000 × 25 = 100,000, seeing $100,000 among the choices, and clicking it. When your rounded result is itself a choice, the amount you rounded away decides the question — and here both roundings pushed the same direction.
**takeaway:** Note the direction of every rounding. When all leans point one way and your landmark answer appears among the choices, the true value sits on the other side of that landmark.
**hint_nudge:** 4,000 × 25 is 100,000, and $100,000 is one of the choices. Is the true revenue above or below it?
**hint_strategy:** You rounded 3,940 up and $24.75 up. Both pushes inflated the estimate — so which listed value must the truth be closest to?
**related_reading:** quant-03-estimation

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** dropped-cross-term
**est_time_seconds:** 100

(31.2)² is closest to which of the following?

- A) 62
- B) 900
- C) 936
- D) 973
- E) 1,024

**answer:** D
**fastest_path:** (31 + 0.2)² ≈ 31² + 2(31)(0.2) = 961 + 12.4 ≈ 973. The square of the leftover 0.2 is too small to matter.
**explanation:** The choices cluster between 900 and 1,024, so rounding 31.2 down to 30 (which gives 900) cannot be the end of the story — the rounded-away 1.2 is exactly what separates the choices.

Use the expansion (a + b)² = a² + 2ab + b², which for a small b is approximately a² + 2ab. With a = 30 and b = 1.2: 900 + 2(30)(1.2) = 900 + 72 = 972. (Or with a = 31, b = 0.2: 961 + 12.4 ≈ 973.)

The discarded b² term is at most 1.44 — invisible at this scale. (Exact: 31.2² = 973.44.)

The correct answer is D.
**mistake_a:** 62 is 2 × 31.2 — doubling instead of squaring. Squaring a number near 30 must produce something near 900; a one-beat size check rejects 62 instantly.
**mistake_b:** 900 is 30² with the leftover 1.2 thrown away. Rounding the base of a square is never free: the error feeds through twice (once per factor), and here it's worth about 72 — the entire spread of the upper choices.
**mistake_c:** 936 is 900 + 36 — adding the cross term 30 × 1.2 once instead of twice. The middle term of (a + b)² is 2ab: the leftover multiplies against the base in both copies of the factor.
**mistake_e:** 1,024 is 32² — rounding 31.2 up to 32. But 31.2 is two tenths from 31 and eight tenths from 32; the nearer anchor plus a small correction beats the farther anchor with no correction.
**common_trap:** Computing 30² = 900, spotting 900 among the choices, and stopping. The choices were spaced precisely to punish discarding the 1.2 — when your rounded answer appears as a choice and near neighbors do too, the leftover is the question.
**takeaway:** To square a number near a landmark, use (a + b)² ≈ a² + 2ab: square the landmark, then add twice the leftover times the landmark.
**hint_nudge:** 30² = 900 is a choice, and so are several values just above it. What happened to the 1.2 you rounded away?
**hint_strategy:** Write 31.2 as 30 + 1.2 and expand the square. How many times does the 1.2 multiply against the 30?
**related_reading:** quant-03-estimation

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** exponent-bookkeeping
**est_time_seconds:** 90

(7.92 × 10^5) ÷ (3.85 × 10^2) is closest to:

- A) 0.2
- B) 20
- C) 200
- D) 2,000
- E) 20,000

**answer:** D
**fastest_path:** Divide the front numbers and the powers of ten separately: 7.92 ÷ 3.85 ≈ 2, and 10^5 ÷ 10^2 = 10^3. So about 2 × 1,000.
**explanation:** Scientific notation hands you the estimate pre-packaged — keep the pieces separate instead of converting to long decimals.

Front numbers: 7.92 ÷ 3.85 ≈ 8 ÷ 4 = 2.

Powers of ten: 10^5 ÷ 10^2 = 10^(5−2) = 10^3.

Combine: about 2 × 10^3 = 2,000. (Exact: 792,000 ÷ 385 ≈ 2,057.) The choices are factors of ten apart, so the front-number rounding is irrelevant — only the exponent arithmetic can move you between choices.

The correct answer is D.
**mistake_a:** 0.2 comes from converting 7.92 × 10^5 to 792 — reading "× 10^5" as "five digits in total" rather than "shift the decimal five places." Then 792 ÷ 3,850 ≈ 0.2. Convert by moving the decimal point, counting every place.
**mistake_b:** 20 results from a pair of conversion slips — writing the numerator one place short (79,200) and the denominator one place long (3,850). Each factor must be converted independently and carefully; two small slips compounded here into a factor of 100.
**mistake_c:** 200 is one lost power of ten, usually from writing 7.92 × 10^5 as 79,200 (four shifts instead of five). When you convert out of scientific notation, the exponent equals the number of decimal shifts — exactly.
**mistake_e:** 20,000 is one extra power of ten, from writing 3.85 × 10^2 as 38.5 — shifting the denominator's decimal once instead of twice before dividing.
**common_trap:** Converting both numbers to ordinary decimals and long-dividing. Scientific notation already separates size (the power of ten) from detail (the front number); dividing the parts separately makes the exponent arithmetic impossible to fumble.
**takeaway:** To divide numbers in scientific notation, divide the front numbers and subtract the exponents — never convert to long decimal strings first.
**hint_nudge:** Don't convert to ordinary numbers — the notation is already split into the two pieces you need.
**hint_strategy:** Handle 7.92 ÷ 3.85 and 10^5 ÷ 10^2 as two separate, easy divisions.
**related_reading:** quant-03-estimation

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** unweighted-midpoint
**est_time_seconds:** 95

At a certain school, the 58 students who took a morning exam session scored an average of 71 points, and the 42 students who took an afternoon session scored an average of 86 points. The average score of all 100 students combined is closest to:

- A) 77
- B) 78.5
- C) 80
- D) 82.5
- E) 86

**answer:** A
**fastest_path:** The weights are 58:42 — nearly 60:40. Start at 71 and move 40% of the way across the 15-point gap: 71 + 6 = 77.
**explanation:** A combined average is a weighted average: it sits on the line between 71 and 86, pulled toward the bigger group.

Estimate the weights as 60:40. The gap between the group averages is 86 − 71 = 15 points. The combined average sits 40% of the way from the bigger group's average toward the smaller group's: 71 + 0.40 × 15 = 71 + 6 = 77.

Sanity-check the lean: the morning group is larger, so the answer must fall below the midpoint of 78.5 — and 58:42 is only slightly unbalanced, so it falls only slightly below. (Exact: (58 × 71 + 42 × 86) ÷ 100 = 7,730 ÷ 100 = 77.3.)

The correct answer is A.
**mistake_b:** 78.5 is (71 + 86) ÷ 2 — the unweighted midpoint, which pretends the groups are the same size. With 58 students on the low side and only 42 on the high side, the combined average must sit below 78.5.
**mistake_c:** 80 is approximately the result of swapping the weights — putting 58% of the pull on the 86 instead of on the 71 (0.58 × 86 + 0.42 × 71 ≈ 79.7). Attach each weight to its own group before combining.
**mistake_d:** 82.5 leans toward the smaller group — direction reversed. The combined average always sits closer to the average of the group with more members.
**mistake_e:** 86 is the afternoon session's average echoed back. A combined average can only equal one group's average if the other group scored identically — here it must land strictly between 71 and 86.
**common_trap:** Averaging 71 and 86 straight to 78.5 because two averages are on the page. Group sizes are the whole point of a weighted average — the midpoint is only right when the groups match.
**takeaway:** Estimate a combined average by starting at the bigger group's average and moving toward the other by (smaller group's share) × (gap). Check the lean: toward the bigger group, always.
**hint_nudge:** More students scored 71 than 86. What does that do to the combined average relative to the halfway point 78.5?
**hint_strategy:** The split is nearly 60:40 and the gap is 15 points. Move 40% of 15 up from 71.
**related_reading:** quant-03-estimation

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** multiplier-as-increase
**est_time_seconds:** 90

Over five years, the price of a share of a certain stock rose from $14.20 to $59.60. The percent increase in the share price was closest to:

- A) 45%
- B) 76%
- C) 320%
- D) 420%
- E) 760%

**answer:** C
**fastest_path:** 59.60 ÷ 14.20 ≈ 60 ÷ 14 ≈ 4.2, so the new price is about 4.2 times the old — which is an increase of 3.2 times, or 320%.
**explanation:** Estimate the multiplier first: the new price divided by the old is about 60 ÷ 14 ≈ 4.2. So the stock now sells for roughly 4.2 times its old price.

Then translate carefully: growing TO 4.2 times the original means growing BY 3.2 times the original — the first 1.0 of the multiplier is the original price itself, not growth. An increase of 3.2 times is 320%.

(Exact: the increase is 59.60 − 14.20 = 45.40, and 45.40 ÷ 14.20 ≈ 3.20, confirming 320%.)

The correct answer is C.
**mistake_a:** 45% echoes the dollar increase, $45.40, as a percent. Dollars and percents are different animals: $45.40 of growth on a $14.20 base is more than triple the original, not less than half of it.
**mistake_b:** 76% divides the increase by the NEW price (45.40 ÷ 59.60 ≈ 0.76). Percent change is always measured against the starting value — the wrong base shrinks a 320% gain into something that sounds modest.
**mistake_d:** 420% reports the multiplier (4.2×) as the increase. "The price quadrupled" and "the price rose 400%" differ by exactly the original 100% — subtract 1 from the multiplier before converting to a percent increase.
**mistake_e:** 760% stacks the wrong-base error of choice B with a misplaced decimal (reading 45.40 ÷ 59.60 as 7.6 rather than 0.76). Two slips that each feel small compound into an answer ten times the truth.
**common_trap:** Computing the ratio 4.2 and reporting 420%. The ratio tells you what the price grew TO; the question asks what it grew BY. The two answers sit side by side in the choices precisely to catch the confusion.
**takeaway:** For percent increase, estimate the multiplier (new ÷ old), subtract 1, then convert. Growing to k times the original is growth of (k − 1) × 100%.
**hint_nudge:** Roughly how many times the old price is the new price? Careful — that number is not yet the percent increase.
**hint_strategy:** 59.60 ÷ 14.20 ≈ 4.2. Growing to 4.2× the original means growing by how much of the original?
**related_reading:** quant-03-estimation

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** roots-shrink-misconception
**est_time_seconds:** 100

√0.0026 is closest to which of the following?

- A) 0.0005
- B) 0.0013
- C) 0.005
- D) 0.016
- E) 0.05

**answer:** E
**fastest_path:** Rewrite 0.0026 as 26 × 10^(−4), then root each factor: √26 ≈ 5.1 and √(10^(−4)) = 10^(−2). So about 5.1 × 0.01 = 0.051.
**explanation:** Square roots of small decimals are handled by splitting off an even power of ten: 0.0026 = 26 × 10^(−4).

Root each piece separately. √26 is just above √25 = 5, so about 5.1. And √(10^(−4)) = 10^(−2), because halving an even exponent is exact.

Multiply: 5.1 × 10^(−2) = 0.051. (Exact: √0.0026 ≈ 0.0510.)

Sanity check the size: for numbers between 0 and 1, the square root is BIGGER than the number — 0.051 squared shrinks back down to 0.0026. Any choice smaller than 0.0026 is impossible.

The correct answer is E.
**mistake_a:** 0.0005 trusts the instinct that "roots make numbers smaller." That holds above 1 and reverses below it: squaring a number under 1 shrinks it, so rooting must enlarge it. The root of 0.0026 must exceed 0.0026.
**mistake_b:** 0.0013 is half of 0.0026 — halving instead of rooting. Halving and square-rooting are unrelated operations; 0.0013 squared is about 0.0000017, a thousand times too small.
**mistake_c:** 0.005 is 5.1 × 10^(−3) — the right digits with the decimal shift off by one. Rooting 10^(−4) gives 10^(−2), not 10^(−3); halve the exponent exactly.
**mistake_d:** 0.016 comes from splitting 0.0026 as 2.6 × 10^(−3), rooting 2.6 to about 1.6, and "halving" the odd exponent down to 10^(−2). The half-the-exponent rule only works when the power of ten is even — regroup to 26 × 10^(−4) first.
**common_trap:** Letting "roots shrink things" steer you toward the tiny choices. Below 1 the rule flips — and the test stacked every wrong choice below the true value to reward knowing it.
**takeaway:** To root a small decimal, factor out an even power of ten, root the parts separately, and remember: between 0 and 1, square roots make numbers bigger.
**hint_nudge:** If you square each answer choice, which one lands near 0.0026? Note which direction roots move numbers that are less than 1.
**hint_strategy:** Write 0.0026 as 26 × 10^(−4) — an even exponent — then take the root of each factor.
**related_reading:** quant-03-estimation

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** wrong-quantity-answered
**est_time_seconds:** 105

A circle is inscribed in a square with sides of length 8.2, touching all four sides of the square. The area of the region that is inside the square but outside the circle is closest to:

- A) 4
- B) 14
- C) 26
- D) 53
- E) 67

**answer:** B
**fastest_path:** The leftover area is (4 − π)r² ≈ 0.86 × 16.8 ≈ 14, with r = half the side = 4.1.
**explanation:** An inscribed circle touches all four sides, so its diameter equals the side of the square: the radius is 8.2 ÷ 2 = 4.1.

Square's area: 8.2² ≈ 67. Circle's area: π × 4.1² = π × 16.81 ≈ 3.14 × 16.8 ≈ 52.8. The leftover region — the four corner slivers — is about 67 − 53 = 14. (Exact: 67.24 − 52.81 ≈ 14.4.)

One caution this problem is built to teach: the answer is a small difference of two similar-sized numbers, so rounding must stay tight. Using π ≈ 3 moves the circle's area by about 2.4 — only 4.5% of the circle, but 17% of the small leftover. Keep π at 3.14 when subtracting near-equal quantities.

The correct answer is B.
**mistake_a:** 4 is roughly one of the four corner slivers (14.4 ÷ 4 ≈ 3.6). The shaded region between square and inscribed circle consists of all four corners — easy to forget after focusing on a single corner to visualize.
**mistake_c:** 26 is the circle's circumference, 2π × 4.1 ≈ 25.8 — a length masquerading as an area. When a geometry answer is needed, confirm the formula you reached for has the right units.
**mistake_d:** 53 is the circle's area — a correct intermediate stop, but not the question. The stem asks for what's left after the circle is removed.
**mistake_e:** 67 is the square's area — the other intermediate value, with the subtraction never performed.
**common_trap:** Using the side 8.2 as the radius. That makes the "inscribed" circle's area (π × 67 ≈ 211) triple the square's — an impossibility that an estimator should catch immediately, since a circle inside the square must have less area than the square.
**takeaway:** Inscribed circle: radius = half the side, leftover = (4 − π)r² ≈ 0.86r². And when the answer is a small difference of large numbers, tighten your rounding — small relative errors in the inputs become large relative errors in the gap.
**hint_nudge:** The circle touches all four sides. How does its radius relate to the square's side of 8.2?
**hint_strategy:** Compute square minus circle: 8.2² − π(4.1)². Keep π at 3.14 — the difference is small, so sloppy rounding gets amplified.
**related_reading:** quant-03-estimation

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** simple-interest-shortcut
**est_time_seconds:** 120

An investment account earns 6 percent interest per year, compounded annually. If no deposits or withdrawals are made, the total percent by which the account grows over 5 years is closest to:

- A) 6%
- B) 30%
- C) 34%
- D) 40%
- E) 134%

**answer:** C
**fastest_path:** Simple interest gives 5 × 6% = 30%; compounding adds interest-on-interest worth about 10 pairings × (6% of 6%) ≈ 3.6 more points. Roughly 34%.
**explanation:** The account grows by the factor (1.06)^5. Don't multiply it out — estimate it in two layers.

First layer (simple interest): five years of 6% is 5 × 0.06 = 0.30, growth of 30%. This undershoots, because each year's interest itself earns interest in later years.

Second layer (the compounding correction): every pair of years contributes "interest on interest" of about 0.06 × 0.06 = 0.0036, and five years form 10 pairs. That adds 10 × 0.0036 = 0.036 — about 3.6 percentage points. Total: roughly 30% + 3.6% ≈ 34%.

(Exact: 1.06^5 ≈ 1.3382, growth of 33.8%.)

The correct answer is C.
**mistake_a:** 6% is a single year's growth — the five-year horizon never got applied.
**mistake_b:** 30% is the simple-interest answer: 5 × 6% with compounding ignored. The choices include both 30% and 34% precisely to punish stopping at the first-order estimate — interest-on-interest is small per pair of years but there are ten pairs.
**mistake_d:** 40% over-corrects the compounding bump. The correction is about 0.06² per pair of years — roughly 3.6 points total, not 10. Estimate the second-order term; don't just round the first-order answer up to the next clean number.
**mistake_e:** 134% confuses the final amount with the growth. After five years the account reaches about 134% OF its starting value, which means it grew BY about 34% — the gap between "of" and "by" is the original 100%.
**common_trap:** Computing 5 × 6% = 30% and stopping. Repeated percent growth always beats the simple-interest estimate, and on this test the gap between the naive and true answers is usually offered as its own choice.
**takeaway:** (1 + r)^n ≈ 1 + nr + [n(n−1)/2] r² for small r. First-order gives the neighborhood; the pairs term tells you how far above it the truth sits.
**hint_nudge:** 5 × 6% = 30% is a choice. Does annual compounding leave the true growth at exactly 30%, below it, or above it?
**hint_strategy:** Start from 30%, then add the interest-on-interest: each of the 10 pairs of years contributes about 6% of 6%.
**related_reading:** quant-03-estimation

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** endpoint-anchoring
**est_time_seconds:** 130

If S = 1/11 + 1/12 + 1/13 + ... + 1/20, then S is closest to which of the following?

- A) 1/2
- B) 2/3
- C) 3/4
- D) 9/10
- E) 1

**answer:** B
**fastest_path:** Ten terms, each near the middle term 1/15: S ≈ 10 × (1/15) = 2/3.
**explanation:** Never add ten unit fractions directly. First bound the sum, then sharpen.

Bounds: there are 10 terms. Each is at least the smallest (1/20) and at most the largest (1/11), so S is between 10/20 = 1/2 and 10/11 ≈ 0.91. That alone eliminates nothing decisively — the choices all live in that band — so sharpen with a typical term.

The denominators run evenly from 11 to 20, so a representative middle denominator is about 15: S ≈ 10 × (1/15) = 10/15 = 2/3.

How good is this? The terms shrink as the denominators grow, but nearly symmetrically around 1/15 over this short run, so the over- and under-estimates almost cancel. (The true sum is about 0.669; 2/3 ≈ 0.667.)

The correct answer is B.
**mistake_a:** 1/2 takes the lower bound — ten copies of the smallest term, 1/20 — as the value. Bounds bracket the answer; they are not the answer. Every term except the last exceeds 1/20.
**mistake_c:** 3/4 anchors on the early, larger terms (1/11, 1/12 look like "about a twelfth each," giving 10/12 territory) and never corrects for the back half of the list shrinking toward 1/20. Use the middle term, not the loudest one.
**mistake_d:** 9/10 is the upper bound — ten copies of the largest term, 1/11. Same bounding error as choice A, from the other side.
**mistake_e:** 1 treats each term as "about a tenth." But 1/10 isn't even in the sum — every denominator is bigger than 10, so every term is smaller than 1/10 and the sum must be less than 1.
**common_trap:** Anchoring the whole sum on its first term or its last instead of its middle. For a run of slowly changing terms, (count) × (middle term) is fast and tight; the endpoints only give the bracket.
**takeaway:** Estimate a sum of many similar terms as (number of terms) × (middle term). Bound with the endpoints first if you need a sanity bracket.
**hint_nudge:** All ten terms are squeezed between 1/20 and 1/11. What does a typical term look like?
**hint_strategy:** The denominators run from 11 to 20, so the middle one is about 15. Multiply 1/15 by the number of terms.
**related_reading:** quant-03-estimation

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** flipped-ratio-cancellation
**est_time_seconds:** 120

(899 × 501) / (299 × 1,499) is closest to which of the following?

- A) 1/9
- B) 1/3
- C) 1
- D) 3
- E) 9

**answer:** C
**fastest_path:** Snap to landmarks and pair: (900 × 500)/(300 × 1,500) = (900/300) × (500/1,500) = 3 × 1/3 = 1.
**explanation:** Every number here sits within a quarter percent of a clean landmark: 899 → 900, 501 → 500, 299 → 300, 1,499 → 1,500. With rounding that tight, the landmark answer is essentially exact — the question is purely about structure.

Pair each top number with the bottom number it cancels against: 900/300 = 3, and 500/1,500 = 1/3.

The product is 3 × (1/3) = 1. (Exact: 450,399 ÷ 448,201 ≈ 1.005.)

No multiplication of three-digit numbers ever happens — the whole computation is two one-digit ratios.

The correct answer is C.
**mistake_a:** 1/9 flips both ratios — reading 900/300 as 1/3 and keeping 500/1,500 as 1/3. Track which number is on top of each pairing; the numerator's factors stay on top.
**mistake_b:** 1/3 keeps the 500/1,500 but loses the 900/300 — treating 900 and 300 as "about the same size" and cancelling them to 1. They differ by a factor of three, the same factor the problem hinges on.
**mistake_d:** 3 is the mirror of choice B: the 900/300 = 3 survives but the 500/1,500 gets cancelled to 1. Both pairings carry a factor of three; they must both be counted, and they point in opposite directions.
**mistake_e:** 9 flips the second ratio — reading 500/1,500 as 3 instead of 1/3 and multiplying 3 × 3. The 1,500 is in the denominator; the bigger number underneath makes that pairing shrink the result, not grow it.
**common_trap:** Multiplying 899 × 501 longhand. Numbers this close to round landmarks are an engraved invitation to cancel structure first — the products (450,399 and 448,201) are six-digit monsters that were never meant to be computed.
**takeaway:** Before multiplying anything in a big fraction, snap each factor to its landmark and cancel top against bottom in pairs. Keep careful track of which side of each pairing is larger.
**hint_nudge:** Every one of the four numbers is within 1 of a very round number. Rewrite first, compute never.
**hint_strategy:** Pair 900 with 300 and 500 with 1,500. Each pair reduces to a factor of 3 — on which side of the fraction?
**related_reading:** quant-03-estimation

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** wrong-power-landmark
**est_time_seconds:** 120

2^100 is closest to which of the following?

- A) 10^10
- B) 10^20
- C) 10^30
- D) 10^50
- E) 10^100

**answer:** C
**fastest_path:** Use the landmark 2^10 = 1,024 ≈ 10^3. Then 2^100 = (2^10)^10 ≈ (10^3)^10 = 10^30.
**explanation:** Powers of 2 convert to powers of 10 through one landmark worth memorizing: 2^10 = 1,024, which is within 2.4% of 10^3.

Group the exponent: 2^100 = (2^10)^10. Replace the inside with the landmark: approximately (10^3)^10 = 10^30.

How much error did the 2.4% introduce? It compounds ten times: (1.024)^10 ≈ 1.27, so 2^100 ≈ 1.27 × 10^30. Against choices spaced 10^10 to 10^20 apart, a 27% drift is nothing — the answer is unambiguous.

The correct answer is C.
**mistake_a:** 10^10 divides the exponent by 10 — as if stripping a zero off the 100 converts base 2 to base 10. Exponents don't trade across bases by simple division; the conversion rate is the landmark 2^10 ≈ 10^3.
**mistake_b:** 10^20 uses the tempting-but-terrible landmark 2^5 ≈ 10. In fact 2^5 = 32 — a 220% overshoot — and compounding that error 20 times inflates the estimate by roughly a factor of 10^10. Landmark quality is everything when the landmark gets raised to a power.
**mistake_d:** 10^50 halves the exponent, treating 2 as if it were √10. But √10 ≈ 3.16; the true exponent conversion is 100 × log(2) ≈ 100 × 0.30 = 30, not 50.
**mistake_e:** 10^100 keeps the exponent and swaps the base — the laziest possible conversion, off by a factor of 5^100.
**common_trap:** Reaching for any convenient bridge between 2 and 10 (2^5 ≈ 10, 2 ≈ √10) instead of the one tight landmark. Errors that are tolerable in a single multiplication explode when the approximation is raised to the tenth or twentieth power.
**takeaway:** Memorize 2^10 ≈ 10^3 (equivalently, log 2 ≈ 0.3). To size 2^n, take three-tenths of the exponent: 2^100 ≈ 10^30.
**hint_nudge:** What well-known power of 2 lands almost exactly on a power of 10?
**hint_strategy:** Write 2^100 as (2^10)^10 and use 2^10 = 1,024 ≈ 1,000.
**related_reading:** quant-03-estimation

---

## Q28
**difficulty:** Challenge
**type:** Problem Solving
**topic:** Estimation
**trap_type:** subtract-inside-the-root
**est_time_seconds:** 150

√102 − √98 is closest to which of the following?

- A) 0.02
- B) 0.2
- C) 0.4
- D) 1
- E) 2

**answer:** B
**fastest_path:** Multiply by the conjugate: √102 − √98 = (102 − 98)/(√102 + √98) ≈ 4/20 = 0.2.
**explanation:** The reflex estimate fails by design: rounding both roots to √100 = 10 gives 10 − 10 = 0, which isn't a choice. Subtracting two nearly equal numbers destroys exactly the information you rounded away — a finer tool is required.

The tool is the conjugate. Multiply and divide by (√102 + √98):

√102 − √98 = (102 − 98) / (√102 + √98) = 4 / (√102 + √98).

Now the structure works FOR you: the denominator is a sum, and sums of nearly equal numbers tolerate sloppy rounding. Both roots are about 10, so the denominator is about 20, and the difference is about 4/20 = 0.2.

(Exact: 10.0995 − 9.8995 = 0.2000 — the estimate is essentially perfect, because the rounding error in the sum is a fraction of a percent.)

The correct answer is B.
**mistake_a:** 0.02 is a decimal slip in the final division — reading 4/20 as 0.02. After the clever step, protect the easy one: 4 divided by 20 is two tenths.
**mistake_c:** 0.4 divides the 4 by a single root (about 10) instead of by the sum of both (about 20). The conjugate denominator is √102 PLUS √98 — both terms belong there.
**mistake_d:** 1 comes from forcing visible daylight between the roots — calling them "about 10.5 and 9.5" — because intuition says the roots of numbers 4 apart should differ noticeably. Near 100 the square-root curve is flat: moving the input by 4 moves the root by only about 4/20.
**mistake_e:** 2 is √(102 − 98) — pulling the subtraction inside the radical. Roots do not distribute over subtraction: √a − √b is nothing like √(a − b), and here they differ by a factor of ten.
**common_trap:** Rounding both roots to 10, getting 0, and then either guessing or grabbing √(102 − 98) = 2 in desperation. A vanishing estimate is a signal, not a dead end: when subtraction cancels your landmarks, switch to the conjugate form, where the small difference is computed exactly and only a sum gets estimated.
**takeaway:** To estimate √a − √b for nearby a and b, use (a − b)/(√a + √b): the numerator is exact, and the denominator — a sum — is safe to round. Equivalently, near N² a change of d in the input moves the root by about d/(2N).
**hint_nudge:** Rounding both roots to 10 gives 0 — which is not a choice. The answer lives in exactly the digits that rounding threw away.
**hint_strategy:** Multiply and divide by (√102 + √98). What does the numerator become, and roughly what is the denominator?
**related_reading:** quant-03-estimation
