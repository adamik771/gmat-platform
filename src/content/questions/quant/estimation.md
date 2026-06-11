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
**trap_type:** lazy-landmark-rounding
**est_time_seconds:** 60

Which of the following is closest to 24.8 × 397 ?

- A) 100
- B) 1,000
- C) 4,000
- D) 8,000
- E) 10,000

**answer:** E
**fastest_path:** Both factors sit next to clean landmarks: 25 × 400 = 10,000. The roundings are tiny, so the product lives right there.
**explanation:** The choices span five orders of magnitude — wide-open spacing like this means landmark rounding settles the question instantly.

Round each factor to its nearest clean value: 24.8 is almost exactly 25, and 397 is almost exactly 400. Then 25 × 400 = 10,000.

Both roundings nudged the factors up, so the true product sits slightly below 10,000 — and it does: 24.8 × 397 = 9,845.6. With the next choice down at 8,000, "slightly below 10,000" still belongs to 10,000.

The correct answer is E.
**mistake_a:** 100 loses two factors of ten — reading 24.8 as 2.48 and 397 as 39.7. Once the decimal points drift, no amount of careful multiplication can save the answer.
**mistake_b:** 1,000 is one lost factor of ten — multiplying 2.48 × 397, a single decimal slip. Place the order of magnitude first: a two-digit number times a three-digit number is a four- or five-digit number.
**mistake_c:** 4,000 rounds 24.8 all the way down to 10 — the laziest landmark on offer, not the nearest one. A rounding that cuts a factor by more than half cannot survive choices that double from one to the next.
**mistake_d:** 8,000 rounds 24.8 down to 20. That is a 19% understatement of one factor — far larger than the actual distance from 9,845.6 to 10,000. Round to the nearest landmark (25), not the most comfortable one (20).
**common_trap:** Rounding 24.8 to 20 because multiplying by 2 feels easier than multiplying by 25. The nearest landmark was 25 — and 25 × 4 = 100 makes 25 × 400 just as fast as 20 × 400.
**takeaway:** Round each factor to its nearest clean landmark, not its easiest one — 24.8 is 25, not 20. Then note which way the roundings leaned to know which side of the estimate the truth is on.
**related_reading:** quant-03-estimation

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** complement-answer
**est_time_seconds:** 60

In a town with 5,150 registered voters, 9.84 percent of the registered voters voted in a local election. Approximately how many of the registered voters voted?

- A) 50
- B) 500
- C) 1,030
- D) 2,500
- E) 4,640

**answer:** B
**fastest_path:** 9.84% is essentially 10%, and 10% of 5,150 is 515. Only one choice lives near 515.
**explanation:** The percent 9.84 sits a hair below the friendliest landmark there is: 10%. Taking 10% of a number is just sliding the decimal one place, so 10% of 5,150 is 515.

Track the lean: 9.84% is slightly less than 10%, so the true count is slightly below 515. Exact: 0.0984 × 5,150 = 506.76. The only choice in that neighborhood is 500.

The rounding moved the percent by less than 2% of its own size, while the choices jump by factors of two or more — the estimate cannot land in the wrong bucket.

The correct answer is B.
**mistake_a:** 50 is 1% of the voters, not 10% — a one-place decimal slip when sliding the point. Anchor it with a sanity check: 10% of about 5,000 has to be about 500, not 50.
**mistake_c:** 1,030 is 20% of 5,150 — doubling the landmark instead of using it. 9.84% rounds to 10%, and nothing in the problem doubles anything.
**mistake_d:** 2,500 is roughly half the voters. Misreading 9.84% as "about half" usually comes from glancing at the leading 9 and thinking "9 out of... something." Read the percent sign's whole number: 9.84 out of 100.
**mistake_e:** 4,640 is the number of registered voters who did NOT vote (5,150 − 507). The complement is one careless read away on every percent problem — estimate the quantity the stem names, not its opposite.
**common_trap:** Computing the non-voters. After rounding 9.84% to 10%, it is strangely easy to subtract and report the other 90% — the choices include 4,640 precisely for that slip.
**takeaway:** Percents within a whisker of 10%, 25%, 50%, or 75% should be snapped there instantly — then nudge in the direction of the gap and confirm you answered the quantity that was asked.
**related_reading:** quant-03-estimation

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** digit-echo-root
**est_time_seconds:** 75

The value of √79 is closest to:

- A) 7.9
- B) 8.0
- C) 8.4
- D) 8.9
- E) 9.0

**answer:** D
**fastest_path:** 79 sits between the perfect squares 64 and 81 — and much closer to 81. So the root is just under 9, and 8.9² = 79.21 confirms it.
**explanation:** To estimate a square root, bracket the number between the two nearest perfect squares. Here 64 = 8² and 81 = 9², so √79 is between 8 and 9.

Now place it within the bracket: 79 is only 2 below 81 but a full 15 above 64, so the root hugs the top of the bracket — just under 9.

The choices force one more level of precision: is it 8.9 or 9.0? Since 79 < 81, the root must be strictly less than 9, and checking the near candidate settles it: 8.9² = 79.21, almost exactly 79. (Exact: √79 ≈ 8.888.)

The correct answer is D.
**mistake_a:** 7.9 echoes the digits of 79 — the classic reflex that the root should "look like" the number. Check by squaring: 7.9² = 62.41, nowhere near 79.
**mistake_b:** 8.0 anchors on the lower perfect square, √64, because 8 is a comfortable answer. But 79 is fifteen units above 64 and only two below 81 — the root belongs near the top of the bracket, not the bottom.
**mistake_c:** 8.4 splits the difference between 8 and 9 blindly. Roots do not sit at the midpoint just because the number is "between" two squares — place the number within the bracket first: 79 is most of the way to 81.
**mistake_e:** 9.0 rounds 79 up to 81 and forgets the rounding ever happened. Since 79 is less than 81, the root must be less than 9 — with 8.9 on offer, the direction of that lean is the entire question.
**common_trap:** Squaring nothing. One five-second check — 8.9² = 79.21 — separates the right answer from both neighbors, but the digit-echo of 7.9 tempts test-takers to skip it.
**takeaway:** Bracket the number between perfect squares, place it within the bracket by distance, and verify the finalist by squaring it. The root never simply "looks like" the original number.
**related_reading:** quant-03-estimation

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** benchmark-over-rounding
**est_time_seconds:** 75

The value of 11/12 − 1/9 is closest to:

- A) 1/2
- B) 2/3
- C) 3/4
- D) 4/5
- E) 1

**answer:** D
**fastest_path:** 11/12 is a twelfth short of 1 — about 0.92. Subtract 1/9, about 0.11, to get about 0.81. That is 4/5 territory.
**explanation:** No common denominator needed — read each fraction against a benchmark.

11/12 is exactly 1/12 below 1. Since 1/12 ≈ 0.08, the first fraction is about 0.92.

1/9 is about 0.11 (a ninth is slightly more than a tenth).

Subtract: 0.92 − 0.11 = 0.81. The benchmark 4/5 = 0.80 sits essentially on top of that; the nearest competitor, 3/4 = 0.75, is six hundredths away. (Exact: 33/36 − 4/36 = 29/36 ≈ 0.806.)

The correct answer is D.
**mistake_a:** 1/2 comes from "subtracting" fractions piecewise — tops minus tops over some blend of the bottoms, like (11 − 1)/(12 + 9) = 10/21 ≈ 0.48. Fraction subtraction never works digit-by-digit; benchmark each fraction as a decimal-sized quantity instead.
**mistake_b:** 2/3 results from over-rounding 11/12 down to 3/4 before subtracting: 0.75 − 0.11 ≈ 0.64. But 11/12 is 0.92 — rounding it to 3/4 throws away 17 hundredths, far more than the gaps between these choices.
**mistake_c:** 3/4 comes from inflating the 1/9 — treating it as "about 1/6" and computing 0.92 − 0.17 = 0.75. A ninth is just over a tenth; rounding it to a sixth nearly doubles it.
**mistake_e:** 1 rounds 11/12 up to 1 and then treats the 1/9 as too small to matter. The subtraction of 0.11 is exactly what the choices are testing — it is bigger than the gap between 1 and 4/5.
**common_trap:** Over-rounding one fraction so aggressively that the error swamps the subtraction. Both fractions here need only loose decimals (0.92 and 0.11) — but they need honest ones.
**takeaway:** Convert awkward fractions to rough decimal sizes using benchmarks — "a twelfth below 1," "a bit more than a tenth" — and keep each rounding smaller than the gaps between the answer choices.
**related_reading:** quant-03-estimation

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation
**trap_type:** dropped-division
**est_time_seconds:** 60

A community fund of $4,789 is divided equally among 19 local charities. The amount each charity receives is closest to:

- A) $25
- B) $250
- C) $500
- D) $2,500
- E) $5,000

**answer:** B
**fastest_path:** Round to 4,800 ÷ 20 = 240. The choices are factors of ten apart, so the neighborhood of 240 has exactly one resident.
**explanation:** Both numbers sit next to clean landmarks: 4,789 is nearly 4,800 and 19 is nearly 20. Then 4,800 ÷ 20 = 240.

Track the lean: the divisor was rounded up (19 → 20), and dividing by a bigger number makes the result smaller — so the true share is somewhat above 240. Exact: 4,789 ÷ 19 ≈ 252. Either way, the only choice in the neighborhood is $250.

A one-beat sanity check seals it: 19 charities at $250 each is about 20 × 250 = $5,000, which matches the size of the fund.

The correct answer is B.
**mistake_a:** $25 drops a factor of ten in the division. Reverse-check the size: 19 charities receiving $25 each accounts for under $500 — the fund is ten times that.
**mistake_c:** $500 divides by 10 instead of 19 — using the easiest divisor in sight rather than the nearest landmark (20). Halving 500 to honor the real divisor is the step that got skipped.
**mistake_d:** $2,500 is a factor of ten too large — at that rate, 19 charities would need nearly $50,000. The reverse multiplication catches magnitude errors in seconds.
**mistake_e:** $5,000 is the whole fund, rounded — the division never happened. When an answer choice approximately equals a number sitting in the stem, treat it as bait.
**common_trap:** A choice that restates a stem number ($5,000 ≈ the fund itself) is placed to catch test-takers who lose track of the operation. The question asks for each charity's share, which must be far smaller than the fund.
**takeaway:** Round both parts of a division to adjacent landmarks, then reverse-multiply your candidate answer against the divisor to confirm the order of magnitude is right.
**related_reading:** quant-03-estimation

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** rounding-lean-direction
**est_time_seconds:** 90

Which of the following is closest to 7.98 ÷ 0.407 ?

- A) 1.96
- B) 16
- C) 19.6
- D) 20.4
- E) 196

**answer:** C
**fastest_path:** 8 ÷ 0.4 = 20 — but both roundings pushed the estimate up, so the truth sits just below 20. That breaks the tie toward 19.6.
**explanation:** Snap to landmarks: 7.98 is essentially 8, and 0.407 is essentially 0.4. Dividing by 0.4 is multiplying by 2.5, so the estimate is 8 × 2.5 = 20.

But 20 is not a choice — the test put 19.6 and 20.4 on either side of it, which means the estimate alone is not enough. The direction of the rounding decides it.

Two leans, same way: the numerator was rounded up (7.98 → 8), which inflates the quotient, and the divisor was rounded down (0.407 → 0.4), which also inflates the quotient. The estimate of 20 therefore sits above the truth, and the answer must be the choice just below 20. Exact: 7.98 ÷ 0.407 ≈ 19.61.

The correct answer is C.
**mistake_a:** 1.96 is a one-place decimal slip — dividing by 4.07 instead of 0.407. Dividing by a number less than 1 must produce something bigger than the numerator, so a result smaller than 7.98 fails the instant sanity check.
**mistake_b:** 16 over-rounds the divisor to 0.5 (8 ÷ 0.5 = 16). Rounding 0.407 up to 0.5 inflates the divisor by almost a quarter — a far bigger distortion than rounding down to 0.4.
**mistake_d:** 20.4 is the trap for estimators who get 20 and guess the lean. Both roundings — numerator up, divisor down — pushed the estimate high, so the truth sits below 20, not above it.
**mistake_e:** 196 shifts the decimal one place the other way — dividing by 0.0407. Lock down the order of magnitude first: dividing 8 by "about four tenths" gives about twenty, not two hundred.
**common_trap:** Stopping at "8 ÷ 0.4 = 20" and picking the choice that feels closest. When the test brackets your estimate with two near choices, it is testing whether you tracked which way your roundings leaned.
**takeaway:** In a division, rounding the numerator up and the divisor down BOTH inflate the result. When your clean estimate lands between two choices, audit the leans — they break the tie without any more arithmetic.
**hint_nudge:** 8 ÷ 0.4 = 20, but 20 is not on the list. Which side of 20 does the truth sit on?
**hint_strategy:** You rounded 7.98 up and 0.407 down. Each of those moves inflates a quotient — so is 20 an overestimate or an underestimate?
**related_reading:** quant-03-estimation

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** exponent-bookkeeping
**est_time_seconds:** 90

Which of the following is closest to (3.2 × 10^4)(2.5 × 10^3) ÷ (4 × 10^2) ?

- A) 2 × 10^4
- B) 2 × 10^5
- C) 2 × 10^6
- D) 2 × 10^7
- E) 2 × 10^9

**answer:** B
**fastest_path:** Handle coefficients and powers of ten separately: (3.2 × 2.5) ÷ 4 = 2, and 10^(4 + 3 − 2) = 10^5.
**explanation:** Scientific notation splits every number into a small coefficient and a power of ten — so split the work the same way.

Coefficients: 3.2 × 2.5 = 8, then 8 ÷ 4 = 2.

Powers of ten: multiply the numerator powers (add exponents: 4 + 3 = 7), divide by the denominator power (subtract: 7 − 2 = 5). That leaves 10^5.

Combine: 2 × 10^5. The coefficient stayed between 1 and 10, so no renormalization is needed — the answer is exact, and the "closest to" framing is the test's hint that you should never have multiplied anything longhand.

The correct answer is B.
**mistake_a:** 2 × 10^4 drops one power of ten, usually by subtracting the denominator's exponent twice (4 + 3 − 2 − 2) or by mishandling 3.2 as 0.32. Write the exponent arithmetic down — it is three small integers.
**mistake_c:** 2 × 10^6 adds a stray power of ten, typically from normalizing 8 × 10^7 incorrectly before the division. Settle the coefficient arithmetic completely, then the exponents — interleaving the two is where the stray zeros creep in.
**mistake_d:** 2 × 10^7 is the result of forgetting to divide by 10^2 at all — the coefficient got divided by 4, but the denominator's power of ten never came out. Every part of the divisor must act on the result.
**mistake_e:** 2 × 10^9 adds the denominator's exponent instead of subtracting it (4 + 3 + 2). Division by 10^2 removes two zeros; only multiplication adds them.
**common_trap:** Doing the coefficient division (8 ÷ 4) and then sweeping the denominator's 10^2 along as if it were a factor in the numerator. The exponent ledger must show a subtraction for every power of ten downstairs.
**takeaway:** With scientific notation, run two separate ledgers — coefficients and exponents. Add exponents when multiplying, subtract when dividing, and only renormalize at the end if the coefficient leaves the 1-to-10 window.
**hint_nudge:** Work the small numbers and the powers of ten as two separate problems.
**hint_strategy:** (3.2 × 2.5) ÷ 4 handles the coefficients. For the powers of ten: add the exponents on top, subtract the one on the bottom.
**related_reading:** quant-03-estimation

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** unit-magnitude-shift
**est_time_seconds:** 100

Last year the 49.6 million residents of Country K used a total of 151.2 billion kilowatt-hours of electricity. The average amount used per resident, in kilowatt-hours, was closest to:

- A) 30
- B) 300
- C) 3,000
- D) 30,000
- E) 300,000

**answer:** C
**fastest_path:** A billion is a thousand millions, so the total is 151,200 million kWh. Divide by about 50 million residents: roughly 3,000 each.
**explanation:** The digits are easy — 151.2 ÷ 49.6 is about 150 ÷ 50 = 3. The entire question is the units: billions divided by millions.

Convert to a common unit before dividing. One billion is 1,000 million, so 151.2 billion = 151,200 million. Now both quantities are in millions, and the millions cancel cleanly:

151,200 million kWh ÷ 49.6 million residents ≈ 150,000 ÷ 50 = 3,000 kWh per resident.

Equivalently: billions over millions leaves a factor of 10^3, so take the digit answer (about 3) and attach three zeros. Exact: 151,200 ÷ 49.6 ≈ 3,048.

The correct answer is C.
**mistake_a:** 30 keeps only one power of ten from the billions-over-millions conversion. The digit work (150/50 = 3) is right; the unit ledger lost two zeros.
**mistake_b:** 300 is the most common version of the slip — treating a billion as 100 million instead of 1,000 million. Write the conversion out once: 10^9 / 10^6 = 10^3.
**mistake_d:** 30,000 adds a zero too many, usually from converting the billions correctly but then dividing by 4.96 instead of 49.6. Each quantity gets its decimal handled once.
**mistake_e:** 300,000 is two extra powers of ten — close to dividing 151.2 billion by 49.6 thousand. A sanity check grounds it: a single resident using three hundred thousand kilowatt-hours a year would out-consume a small factory.
**common_trap:** Diving into 151.2 ÷ 49.6 and bolting on zeros by feel at the end. The arithmetic was never the question — the 10^9 / 10^6 = 10^3 conversion was.
**takeaway:** When the numbers carry different unit words (billion, million, thousand), normalize the units first and cancel the powers of ten deliberately. The digits are usually the easy half of the problem.
**hint_nudge:** Get both numbers into the same unit before dividing anything.
**hint_strategy:** A billion is a thousand millions, so 151.2 billion is 151,200 million. Now divide by 49.6 million — about 50 million.
**related_reading:** quant-03-estimation

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** percent-change-wrong-base
**est_time_seconds:** 95

The price of a share of Company R stock rose from $396 to $515 over one year. The percent increase in the price was closest to:

- A) 23%
- B) 25%
- C) 30%
- D) 77%
- E) 130%

**answer:** C
**fastest_path:** The rise is 119 on a base of 396 — round honestly to 120/400 = 30%.
**explanation:** Percent increase is always (change) ÷ (original value). The change is 515 − 396 = 119, and the original is 396.

Round each to its nearest landmark: 119 → 120 and 396 → 400. Then 120/400 = 30%.

Both roundings were under 1% of their values and they leaned the same tiny amount, so the estimate is solid; exact is 119/396 ≈ 30.05%. The nearest competitor (25%) is five points away — far outside any rounding wobble.

The correct answer is C.
**mistake_a:** 23% divides the increase by the NEW price (119/515). Percent change always measures against where you started — the original $396, not the destination.
**mistake_b:** 25% comes from rounding the 119 down to 100 "to make it easy." That lazy rounding distorts the numerator by 16% — vastly more than the honest 119 → 120 move, and more than the gap between the choices.
**mistake_d:** 77% is 396/515 — the old price as a percent of the new one. It answers a question nobody asked; the stem wants the size of the change, not a ratio of the two prices.
**mistake_e:** 130% is the ratio 515/396 read as a percent increase. "The new price is 130% OF the old" means the increase is 30%, not 130% — the word "of" and the word "increase" differ by exactly 100 points.
**common_trap:** Rounding 119 to 100 because dividing by 4 feels cleaner with round numbers. Estimation only works when each rounding is small relative to the gaps between choices — 119 → 120 is honest; 119 → 100 is a different number.
**takeaway:** Percent change = change over ORIGINAL. Round the numerator and denominator to their nearest landmarks — never to the most convenient ones — and remember "X% of" minus 100 gives "X−100% increase."
**hint_nudge:** Two numbers matter: how much the price changed, and which price the change is measured against.
**hint_strategy:** The increase is about 120 and the starting price is about 400. Be honest with the 119 — rounding it to 100 distorts it by a sixth.
**related_reading:** quant-03-estimation

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** symmetric-percent-cancellation
**est_time_seconds:** 100

A furniture store raised the price of a sofa by 18 percent. Two months later, the store offered the sofa at 18 percent off its increased price. The final price of the sofa was:

- A) about 18% less than the original price
- B) about 3% less than the original price
- C) about 1% less than the original price
- D) equal to the original price
- E) about 3% greater than the original price

**answer:** B
**fastest_path:** Up r then down r multiplies by (1 + r)(1 − r) = 1 − r². With r = 18%, r² ≈ 3% — the price lands about 3% under the original.
**explanation:** Raising by 18% multiplies the price by 1.18. Discounting the new price by 18% multiplies by 0.82. The net effect is the product:

1.18 × 0.82 = (1 + 0.18)(1 − 0.18) = 1 − 0.18² = 1 − 0.0324 ≈ 0.97.

The two moves do not cancel, because the 18% discount acts on a bigger base than the 18% raise did — the discount removes more dollars than the raise added. The shortfall is exactly r²: about 3.24%, so the final price is about 3% below the original.

Estimation check with a $100 sofa: up 18% is $118; then 18% of 118 is about $21, leaving $97 — three dollars under the start.

The correct answer is B.
**mistake_a:** 18% less applies only the discount and ignores the raise entirely. Both moves act on the price; the net is their product, not the second step alone.
**mistake_c:** 1% less has the right direction but the wrong size — it misplaces the decimal in 18² = 324, turning 3.24% into something under 1%. The shortfall from an up-down pair is r², computed honestly.
**mistake_d:** Equal to the original is the intuitive trap: up 18% then down 18% feels like a round trip. But the discount percentage acts on the RAISED price — a bigger base — so it takes away more than the raise gave.
**mistake_e:** 3% greater has the right magnitude and the wrong sign. The asymmetry always loses value: (1 + r)(1 − r) = 1 − r² is below 1 no matter which move comes first.
**common_trap:** Assuming +18% and −18% cancel. Successive percent changes multiply, and the cross-term is always negative: a matched up-down pair lands you r² below where you started, in either order.
**takeaway:** Successive percent changes multiply — never add. An increase and decrease by the same r nets out to a loss of r²: small for small r, but at 18% it is a very visible 3%.
**hint_nudge:** The two 18-percents are applied to different prices. Which base is bigger?
**hint_strategy:** Multiply the two factors: 1.18 × 0.82. Notice the algebraic shape (1 + r)(1 − r).
**related_reading:** quant-03-estimation

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** root-shrinks-intuition
**est_time_seconds:** 90

The value of √0.395 is closest to:

- A) 0.16
- B) 0.2
- C) 0.4
- D) 0.63
- E) 0.8

**answer:** D
**fastest_path:** 0.395 ≈ 0.4 = 40/100, so the root is √40 ÷ 10. Since √40 is between 6 and 7, the answer sits near 0.63.
**explanation:** First, the conceptual anchor that decides half the choices: for a number between 0 and 1, the square root is BIGGER than the number — squaring shrinks small numbers, so unsquaring grows them. The answer must exceed 0.395, eliminating anything at or below 0.4.

Now estimate. Round 0.395 to 0.4 and rewrite it to expose whole numbers: 0.4 = 40/100, so √0.4 = √40 / √100 = √40 / 10.

Bracket √40 between perfect squares: 36 < 40 < 49, so √40 is between 6 and 7, much closer to 6 (since 6.3² = 39.69). That puts √0.4 at about 0.63. (Exact: √0.395 ≈ 0.628.)

The correct answer is D.
**mistake_a:** 0.16 is 0.395 squared, not unsquared — running the operation in the wrong direction. The radical asks what number, times itself, gives 0.395.
**mistake_b:** 0.2 follows the "roots make things smaller" intuition — true for numbers above 1, exactly backwards below 1. Test it: 0.2² = 0.04, nowhere near 0.395.
**mistake_c:** 0.4 treats the root of a small number as "about the same" — splitting the difference between the shrink intuition and the truth. But 0.4² = 0.16, not 0.395; the root must be meaningfully bigger than 0.4.
**mistake_e:** 0.8 doubles 0.4, treating "undo the square" as "multiply by 2." Squaring is not doubling: 0.8² = 0.64, far above 0.395.
**common_trap:** Forgetting which way roots move numbers below 1. One squared sanity check on the candidate — does 0.63² land near 0.395? (0.63² ≈ 0.397, yes) — settles everything.
**takeaway:** For decimals, pull the root through a fraction: √(0.4) = √40 / 10. And remember the direction rule — square roots of numbers between 0 and 1 are LARGER than the original number.
**hint_nudge:** Is the square root of a number between 0 and 1 bigger or smaller than the number itself?
**hint_strategy:** Write 0.395 ≈ 40/100. The root of a fraction is the root of the top over the root of the bottom.
**related_reading:** quant-03-estimation

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation
**trap_type:** parallel-structure-blindness
**est_time_seconds:** 100

Which of the following is closest to (398 + 401 + 405) ÷ (0.0398 + 0.0401 + 0.0405) ?

- A) 100
- B) 1,000
- C) 3,000
- D) 10,000
- E) 30,000

**answer:** D
**fastest_path:** Match the terms in pairs: 398 is exactly 10,000 × 0.0398, and the same holds for the other two pairs. A sum of 10,000-times-bigger pieces is 10,000 times bigger.
**explanation:** Before adding anything, compare the two sums term by term: 398 versus 0.0398, 401 versus 0.0401, 405 versus 0.0405. Each numerator term is its denominator partner with the decimal slid four places — exactly 10,000 times larger.

If every piece of the top is 10,000 times its matching piece on the bottom, the whole top is 10,000 times the whole bottom. The ratio is exactly 10,000, no addition required.

The brute-force check agrees: the top sums to 1,204, the bottom to 0.1204, and 1,204 ÷ 0.1204 = 10,000 — but it costs three additions and a hairy division to learn what one glance at the structure already said.

The correct answer is D.
**mistake_a:** 100 slides the decimal two places instead of four when comparing 398 to 0.0398. Count the places one at a time: 0.0398 → 0.398 → 3.98 → 39.8 → 398 is four hops.
**mistake_b:** 1,000 typically comes from summing honestly and then dividing 1,204 by 1.204 — a one-place slip in the denominator's decimal. The structural read never touches that hazard.
**mistake_c:** 3,000 divides one numerator term by the whole denominator (401 ÷ 0.1204 ≈ 3,330) — mixing one piece of the top with all of the bottom. Keep sums whole or keep pairs matched; never half and half.
**mistake_e:** 30,000 is the mirror error — dividing the full numerator sum by a single denominator term (1,204 ÷ 0.0401 ≈ 30,000).
**common_trap:** Adding first because the expression shows a plus sign. The test built the two sums in parallel precisely to reward the test-taker who compares before computing.
**takeaway:** When a ratio's top and bottom are sums with the same number of terms, compare them termwise first. If every pair shares one constant ratio, that constant is the answer — the addition is a decoy.
**hint_nudge:** Look at 398 and 0.0398 side by side before adding anything.
**hint_strategy:** Each term on top is the matching term below with the decimal moved the same number of places. What does that make the whole ratio?
**related_reading:** quant-03-estimation

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** endpoint-bound-as-answer
**est_time_seconds:** 130

If S = 1/11 + 1/12 + 1/13 + ... + 1/20, then the value of S is closest to:

- A) 0.5
- B) 0.7
- C) 0.9
- D) 1.0
- E) 1.4

**answer:** B
**fastest_path:** Ten terms, each near the middle value 1/15 ≈ 0.067. Ten times that is about 0.67.
**explanation:** Adding ten unfriendly fractions exactly is a two-minute trap. Instead, squeeze the sum between bounds and then sharpen.

Every one of the ten terms is at most 1/11 (≈ 0.091) and at least 1/20 (= 0.05). So S is trapped between 10 × 0.05 = 0.5 and 10 × 0.091 ≈ 0.91. That alone eliminates 1.0 and 1.4 — but leaves three choices alive, so the bounds need sharpening.

The terms slide smoothly from 0.091 down to 0.05, so the average term sits near the middle of the list — around 1/15 ≈ 0.067. Ten terms times 0.067 ≈ 0.67. Alternatively, average the two bounds: (0.5 + 0.91)/2 ≈ 0.7. Both refinements point to the same neighborhood. (Actual: S ≈ 0.669.)

The correct answer is B.
**mistake_a:** 0.5 is the floor of the cage — what S would be if all ten terms equaled the smallest one, 1/20. A bound is a fence, not a location; the actual terms are mostly well above 0.05.
**mistake_c:** 0.9 is the ceiling — all ten terms pretending to be 1/11. Same error as choice A from the other side: the sum lives between the fences, near the middle.
**mistake_d:** 1.0 treats every term as 1/10 — an off-by-one anchor, since the denominators start at 11, not 10. Each term is strictly less than 0.1, so ten of them cannot reach 1.
**mistake_e:** 1.4 comes from a pairing shortcut gone wrong: first-plus-last is 1/11 + 1/20 ≈ 0.141, and multiplying by ten counts every term twice. Five pairs, not ten — the pairing estimate is 5 × 0.141 ≈ 0.70, which is the answer.
**common_trap:** Computing one bound, seeing it listed as a choice, and stopping. The test deliberately lists both endpoints of the obvious cage; the answer is the choice strictly inside it.
**takeaway:** Bound a sum of many terms with (count × smallest) and (count × largest), then sharpen with count × middle term. When your bound itself appears as an answer choice, that is bait — the sum lives inside the cage, not on its walls.
**hint_nudge:** All ten terms are squeezed between 1/20 and 1/11. What cage does that put the sum in?
**hint_strategy:** The terms slide evenly from 0.09 down to 0.05, so the typical term is about 1/15. There are ten of them.
**related_reading:** quant-03-estimation

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** round-then-subtract
**est_time_seconds:** 120

The value of 1,003² − 997² is closest to:

- A) 0
- B) 36
- C) 1,200
- D) 12,000
- E) 2,000,000

**answer:** D
**fastest_path:** Difference of squares: (1,003 + 997)(1,003 − 997) = 2,000 × 6 = 12,000.
**explanation:** The reflex estimate fails here, and recognizing WHY is the whole problem. Round both numbers to 1,000 and the expression becomes 1,000² − 1,000² = 0 — but each rounding moved a SQUARED quantity by thousands, and the subtraction of two near-equal millions amplifies those wobbles into the entire answer. Rounding before subtracting nearly equal numbers destroys exactly the information being asked for.

The safe route is structure: a² − b² = (a + b)(a − b). Both factors are clean:

1,003 + 997 = 2,000 and 1,003 − 997 = 6, so the difference is 2,000 × 6 = 12,000 — exactly.

(Check the long way: 1,003² = 1,006,009 and 997² = 994,009; subtracting gives 12,000.)

The correct answer is D.
**mistake_a:** 0 is the round-first trap — both numbers become 1,000 and the difference "vanishes." Subtraction of near-equal large numbers is the one place estimation by rounding is unsafe: the answer lives entirely in the digits the rounding threw away.
**mistake_b:** 36 squares the gap between the numbers: (1,003 − 997)² = 6². The difference of squares is not the square of the difference — the missing factor is the SUM, all 2,000 of it.
**mistake_c:** 1,200 is the right structure with a dropped zero — 2,000 × 6 mis-multiplied. After the clever step, the bookkeeping still has to hold.
**mistake_e:** 2,000,000 multiplies the sum by 1,000 instead of by the difference — roughly the size of each square itself, not of their gap. The two squares agree in their leading digits; the difference must be far smaller than either square.
**common_trap:** Believing rounding is always harmless. The lean-tracking habit fails catastrophically when two big, nearly equal quantities get subtracted — there, factor first and let the structure produce clean numbers.
**takeaway:** Never round before subtracting nearly equal large numbers. For a² − b², factor into (a + b)(a − b) — near-equal squares always produce one huge clean factor and one tiny clean factor.
**hint_nudge:** Rounding both numbers to 1,000 says the answer is "about 0." Why can't that be trusted here?
**hint_strategy:** Factor a² − b² = (a + b)(a − b). Both the sum and the difference of 1,003 and 997 are very clean numbers.
**related_reading:** quant-03-estimation

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** termwise-exponent-subtraction
**est_time_seconds:** 120

The value of (10^8 − 10^2) ÷ (10^7 − 10^3) is closest to:

- A) 10
- B) 100
- C) 1,000
- D) 10,000
- E) 100,000

**answer:** A
**fastest_path:** Subtracting 100 from a hundred million changes nothing that matters: the top is essentially 10^8 and the bottom essentially 10^7. Their ratio is 10.
**explanation:** The subtractions inside the parentheses are bait. Ask how much each one actually removes.

The numerator subtracts 10^2 = 100 from 10^8 = 100,000,000 — a change of one part in a million. The numerator is 99,999,900, which is 10^8 for any practical purpose. Likewise the denominator subtracts 1,000 from 10,000,000, leaving 9,999,000 — essentially 10^7.

So the ratio is essentially 10^8 / 10^7 = 10. (More precisely 10.001 — the neglected terms were six orders of magnitude too small to matter.)

The trap is treating the minus signs as if they acted on the exponents. Exponent subtraction (10^8 / 10^2 = 10^6) is for DIVISION; actual subtraction of a vastly smaller power barely dents the larger one.

The correct answer is A.
**mistake_b:** 100 subtracts exponents inside each parenthesis — turning 10^8 − 10^2 into 10^6 and 10^7 − 10^3 into 10^4. That rule belongs to division. Subtraction of powers does not subtract exponents; 10^8 minus a mere hundred is still within a whisker of 10^8.
**mistake_c:** 1,000 mixes the two readings — botching one parenthesis with fake exponent arithmetic while reading the other correctly. Both parentheses obey the same fact: the small term is negligible.
**mistake_d:** 10,000 reads the denominator as 10^(7−3) = 10^4 while keeping the numerator honest, giving 10^8 / 10^4. One consistent principle — tiny subtrahends vanish — handles both halves.
**mistake_e:** 100,000 pairs the big numerator term with the small denominator term, as if the expression were 10^8 / 10^3. The dominant term of EACH parenthesis is what survives: 10^8 on top, 10^7 below.
**common_trap:** Applying the exponent-subtraction rule to a minus sign. Rules for exponents attach to multiplication and division; with addition and subtraction, the only question is which term dominates.
**takeaway:** When powers of ten are added or subtracted, the biggest exponent wins and the rest is rounding dust — unless the exponents are close. Save exponent arithmetic for products and quotients.
**hint_nudge:** How much does removing 100 actually change a number as large as 100,000,000?
**hint_strategy:** Keep only the dominant term in each parenthesis: the top is essentially 10^8 and the bottom essentially 10^7.
**related_reading:** quant-03-estimation

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation
**trap_type:** power-of-two-landmark-slip
**est_time_seconds:** 130

The value of 2^25 is closest to:

- A) 3 × 10^4
- B) 3 × 10^6
- C) 3 × 10^7
- D) 3 × 10^8
- E) 3 × 10^9

**answer:** C
**fastest_path:** Use the landmark 2^10 ≈ 10^3. Split the exponent: 2^25 = 2^5 × 2^10 × 2^10 ≈ 32 × 10^3 × 10^3 = 3.2 × 10^7.
**explanation:** Twenty-five doublings cannot be tracked by hand, but they do not need to be. The bridge between powers of 2 and powers of 10 is the landmark 2^10 = 1,024 ≈ 10^3.

Split the exponent into tens and leftovers: 25 = 10 + 10 + 5, so

2^25 = (2^10)(2^10)(2^5) ≈ (10^3)(10^3)(32) = 32 × 10^6.

Normalize: 32 × 10^6 = 3.2 × 10^7 — moving one factor of ten from the coefficient into the exponent. (Exact: 2^25 = 33,554,432, and the landmark's 2.4% lowball per use barely registers.)

The correct answer is C.
**mistake_a:** 3 × 10^4 is 2^15 — the exponent split as 10 + 5 with one whole block of 2^10 left on the table. Account for all 25: two blocks of ten plus five.
**mistake_b:** 3 × 10^6 converts 32 × 10^6 to "3.2 × 10^6" — shrinking the coefficient tenfold without paying the exponent back. Normalization is a trade: every factor of ten leaving the coefficient must land in the exponent.
**mistake_d:** 3 × 10^8 makes the opposite normalization error, crediting the exponent with two steps for the one factor of ten that left the coefficient. 32 million is 3.2 × 10^7, not 3.2 × 10^8.
**mistake_e:** 3 × 10^9 inflates the landmark itself, using 2^10 ≈ 10^4. The landmark is 1,024 — three zeros, not four — and squaring the inflated version doubles the damage.
**common_trap:** Knowing 2^10 ≈ 1,000 but fumbling the cleanup: the leftover 2^5 = 32 and the final normalization of 32 × 10^6 are where every distractor on this list is manufactured.
**takeaway:** Convert big powers of 2 through the landmark 2^10 ≈ 10^3: split the exponent into blocks of ten plus a small leftover, then normalize the coefficient carefully — one factor of ten at a time.
**hint_nudge:** There is a famous coincidence linking powers of 2 to powers of 10.
**hint_strategy:** 2^10 = 1,024 ≈ 10^3. Write 25 as 10 + 10 + 5 and convert each block of ten.
**related_reading:** quant-03-estimation

---

## Q28
**difficulty:** Challenge
**type:** Problem Solving
**topic:** Estimation
**trap_type:** many-small-factors-near-zero
**est_time_seconds:** 150

P is the product of the nine factors (1 − 1/2²)(1 − 1/3²)(1 − 1/4²) ⋯ (1 − 1/10²). The value of P is closest to:

- A) 0.05
- B) 0.45
- C) 0.55
- D) 0.75
- E) 0.95

**answer:** C
**fastest_path:** Factor each term as (k−1)(k+1)/k² and stack the product: the (k−1)/k chain collapses to 1/10, the (k+1)/k chain to 11/2. P = 11/20 = 0.55.
**explanation:** Nine factors, each below 1 — multiplying them out by hand is hopeless, so look for structure inside a single factor.

Each term is a difference of squares: 1 − 1/k² = (1 − 1/k)(1 + 1/k) = [(k−1)/k] × [(k+1)/k].

Now split the whole product into two chains and watch them collapse:

The (k−1)/k chain for k = 2 to 10: (1/2)(2/3)(3/4)⋯(9/10) — every numerator cancels the previous denominator, leaving 1/10.

The (k+1)/k chain: (3/2)(4/3)(5/4)⋯(11/10) — same telescoping in reverse, leaving 11/2.

So P = (1/10) × (11/2) = 11/20 = 0.55, exactly.

The estimation sanity check tells the same story: the first factor (3/4) does the heavy lifting, and the later factors fade toward 1 fast — 8/9, then 15/16, then 24/25... Most of the shrinking is over almost immediately, so the product settles just above half rather than decaying toward 0.

The correct answer is C.
**mistake_a:** 0.05 follows the intuition "nine factors below 1 must crush the product toward zero." But the factors race toward 1 — by the fifth term they exceed 0.97 — so the total shrinkage converges instead of compounding to dust. Decay to near-zero needs factors that STAY small.
**mistake_b:** 0.45 is a telescoping fumble — ending the rising chain at 9/2 or 10/2 instead of 11/2. Write the last factor of each chain explicitly: the k = 10 term contributes 9/10 to one chain and 11/10 to the other.
**mistake_d:** 0.75 is the first factor alone, betting the other eight don't matter. They fade toward 1, but their accumulated bite is real: they drag 0.75 down to 0.55 — a fifth of the value.
**mistake_e:** 0.95 over-trusts "every factor is nearly 1." Eight of the nine are — but the product inherited a full 25% loss from the very first factor, and nearly-1 factors multiplied together still bleed steadily.
**common_trap:** Guessing the limit behavior from the wrong feature — counting the factors (toward 0.05) or eyeballing the late ones (toward 0.95). The factored, telescoped form replaces both guesses with an exact value in three lines.
**takeaway:** When a product's factors share one algebraic shape, factor a single term completely — a hidden difference of squares often splits the product into chains that telescope. The messier the product looks, the more deliberately it was built to collapse.
**hint_nudge:** Each factor is a difference of squares. What does 1 − 1/k² factor into?
**hint_strategy:** Write each term as (k−1)/k times (k+1)/k, then multiply all the (k−1)/k pieces together and all the (k+1)/k pieces together. Both chains cancel almost everything.
**related_reading:** quant-03-estimation
