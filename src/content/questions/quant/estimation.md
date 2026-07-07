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
**mistake_a:** 13/27 falls short of half by 0.5/27, which is 1/54 once you double top and bottom to clear the 0.5. With every gap rewritten so its numerator is 1 — 1/54, 1/52, 1/30, 1/22 — the four shortfalls are instantly comparable, and 1/54 is the slimmest miss of the four. It is close to 1/2, but "close to half from below" can never beat a fraction that is above half.
**mistake_b:** 25/52 has the largest numerator and denominator of the four below-half fractions, which makes it look substantial — but size of the numbers says nothing about size of the fraction. Half of 52 is 26, so it misses half by 1/52.
**mistake_c:** 5/11 misses half by 0.5/11, which is 1/22. Among the four gaps — 1/54, 1/52, 1/30, 1/22 — the numerators are all 1, so the smallest denominator marks the widest miss: 5/11 is the smallest fraction listed, despite its compact look.
**mistake_d:** 7/15 misses half by 0.5/15, which is 1/30 — a wider gap than A's 1/54 or B's 1/52, since equal numerators put the smaller denominator further from half. Like A and B it is "almost a half," and almost is exactly what the benchmark test filters out.
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

A television regularly priced at $2,540 is on sale at 18% off. The sale price is closest to:

- A) $460
- B) $1,270
- C) $2,083
- D) $2,290
- E) $2,540

**answer:** C
**explanation:** The phrase "closest to" plus widely spaced choices signal estimation rather than exact multiplication. After an 18% discount you pay 100% − 18% = 82% of the sticker price, so round 82% to about four-fifths (0.8) and 18% to 20%: paying 80% of $2,540 is about $2,032, and since you actually pay a hair more than 80%, the true value sits a little above $2,000. Only $2,083 lives in that neighborhood (the exact value is 0.82 × 2,540 = $2,082.80). Note that $460 is roughly the discount itself, $2,290 is the price after only a 10% markdown, and $1,270 is half price — all answers to questions that were not asked.
**related_reading:** quant-03-estimation

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Five crates weigh 64, 71, 58, 67, and 75 kilograms. The average (arithmetic mean) weight of the crates, in kilograms, is closest to:

- A) 60
- B) 67
- C) 70
- D) 73
- E) 80

**answer:** B
**explanation:** Rather than summing five two-digit numbers raw, anchor at a central guess of 65 and total each value's signed deviation: 64 → −1, 71 → +6, 58 → −7, 67 → +2, 75 → +10, which sum to +10. Spread over the five crates that is +2 from the anchor, putting the mean at about 67. As a check, the raw total is 64 + 71 + 58 + 67 + 75 = 335, and 335 ÷ 5 = 67 exactly. The deviations are small numbers that partly cancel, which is why anchoring beats carrying a three-digit running sum.
**related_reading:** quant-03-estimation

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A warehouse must ship 60,400 identical units, packed 29.8 units per box. Approximately how many boxes are required?

- A) 2
- B) 20
- C) 200
- D) 2,000
- E) 20,000

**answer:** D
**explanation:** The stem says "approximately" and the choices are spaced by factors of ten, so only the order of magnitude matters. Round 60,400 down to 60,000 and 29.8 up to 30, then divide: 60,000 ÷ 30 = 2,000 boxes. The exact quotient is about 2,027, which falls squarely in the 2,000 bucket and nowhere near any neighbor. Treating 29.8 as about 3 (giving 20,000) or as about 300 (giving 200) are the classic decimal-place slips this kind of problem is built to punish, so fix the power of ten before computing any digits.
**related_reading:** quant-03-estimation

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

The sum 24/25 + 49/50 is closest to which of the following?

- A) 1
- B) 3/2
- C) 7/4
- D) 9/5
- E) 2

**answer:** E
**explanation:** Read each fraction against the benchmark 1, rather than finding a common denominator: 24/25 is just 1/25 short of 1 (about 0.96), and 49/50 is just 1/50 short of 1 (about 0.98). Two values that are each a whisper below 1 sum to a whisper below 2, about 1.94. That is closer to 2 (a gap of 0.06) than to 9/5 = 1.8 (a gap of 0.14), so the answer is 2. Choice A (1) would be the result of mistakenly averaging the two fractions instead of adding them.
**related_reading:** quant-03-estimation

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

After a 35% discount, Marco paid $52 for a backpack. The original price of the backpack was closest to:

- A) $80
- B) $70
- C) $74
- D) $87
- E) $104

**answer:** A
**explanation:** This is a reverse-percent problem: $52 is what remains after the discount, so it equals 65% of the original price, and the original is 52 ÷ 0.65, not 52 times anything. Estimate by rounding 0.65 down to about 0.65 and noting that two-thirds of the answer is 52, so the original is roughly 52 × (100/65) = $80, which is in fact exact (52 ÷ 0.65 = 80). Choice B ($70) comes from multiplying by 1.35 — but percent increase and percent decrease act on different bases, so you must divide by 0.65 to undo "× 0.65," and choice D ($87) comes from over-rounding 65% all the way down to 60%.
**related_reading:** quant-03-estimation

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

On a map drawn to a scale of 1 centimeter to 4.7 kilometers, two cities are 18.3 centimeters apart. The actual distance between the cities, in kilometers, is closest to:

- A) 4
- B) 86
- C) 230
- D) 430
- E) 860

**answer:** B
**explanation:** Each map centimeter represents 4.7 real kilometers, so the actual distance is 18.3 × 4.7. Round 4.7 up to 5 and 18.3 down to 18 for a quick product of 90, then note the upward rounding on the larger factor leans the estimate high, so the true value sits a bit below 90 — the exact product is 18.3 × 4.7 = 86.01. The only choice in that neighborhood is 86. Dividing instead of multiplying gives about 4 (choice A), which is backward because a map is a shrunk picture of reality, so real distances exceed map distances.
**related_reading:** quant-03-estimation

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (62.3% of 4,810) divided by 14.8?

- A) 20
- B) 50
- C) 100
- D) 200
- E) 400

**answer:** D
**explanation:** With three messy numbers and choices spread far apart, snap each to a landmark: 62.3% → 60%, 4,810 → 4,800, and 14.8 → 15. Then 60% of 4,800 is 2,880, and 2,880 ÷ 15 = 192, which is essentially 200. Both roundings of the percent and the divisor leaned slightly downward, so the true value sits a touch above 192 — the exact result is about 202.5 — confirming 200 over any drift toward 100. Choice E (400) would require rounding 62.3% all the way up past 50% of a doubled base, a fudge far larger than the gaps between choices.
**related_reading:** quant-03-estimation

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (0.0382 × 815) / 0.0206 ?

- A) 15
- B) 150
- C) 1,500
- D) 15,000
- E) 150,000

**answer:** C
**explanation:** The choices differ by factors of ten, so only the order of magnitude matters and exact arithmetic is wasted effort. Snap each number to a clean landmark: 0.0382 → 0.04, 815 → 800, and 0.0206 → 0.02. The numerator is 0.04 × 800 = 32, and dividing by 0.02 is the same as multiplying by 50, giving 32 × 50 = 1,600 — right in the 1,500 bucket (the exact value is about 1,511). The most error-prone step is the decimal shift in the divisor: treating 0.0206 as about 0.2 would cost a full factor of ten and land you at 150 instead.
**related_reading:** quant-03-estimation

---

## Q20
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Estimation

A rectangular plot of land has an area of A square meters. Is A greater than 2,000?

(1) The length of the plot is between 38 and 44 meters.
(2) The width of the plot is between 45 and 52 meters.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**explanation:** Each statement alone fixes only one dimension within a range and says nothing about the other, so neither is sufficient on its own. Combining them, the area can be as small as 38 × 45 = 1,710 (which is not greater than 2,000) or as large as 44 × 52 = 2,288 (which is greater than 2,000). Because the possible area straddles 2,000, the two statements together still do not settle the yes/no question, so the answer is E.
**related_reading:** quant-03-estimation

---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation

The value of (2.02)^6 is closest to which of the following?

- A) 64
- B) 68
- C) 72
- D) 128
- E) 256

**answer:** B
**explanation:** Rounding 2.02 to 2 gives 2^6 = 64, which is sitting right there as choice A — a signal that the leftover 0.02 is the whole question. The base 2.02 is 1% above 2, and raising it to the sixth power compounds that excess roughly six times, so the result is about 6 × 1% = 6% above 64: that is 64 × 1.06 ≈ 67.8, pointing to 68. (Exact: 2.02^6 ≈ 67.9.) Choices D (128 = 2^7) and E (256 = 2^8) are off-by-one and off-by-two errors in the exponent, and choice A is the engineered trap of treating "round the base to 2" as free when rounding the base of an exponential never is.
**related_reading:** quant-03-estimation

---

## Q22
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Estimation

Is the product mn greater than 600?

(1) m is between 24 and 26, and n is between 31 and 33.
(2) m + n is between 50 and 60.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** From statement (1) the product is at minimum 24 × 31 = 744, which already exceeds 600 for every allowed pair, so the answer is a definite "yes" and statement (1) alone is sufficient. Statement (2) fixes only the sum: m = 5 and n = 50 give a sum of 55 with product 250 (not greater than 600), while m = 27 and n = 28 give a sum of 55 with product 756 (greater than 600), so it yields both answers and is insufficient. Since one statement alone settles the question and the other does not, the answer is A.
**related_reading:** quant-03-estimation

---

## Q23
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Estimation

A contractor placed a single order for identical floor tiles. Was the total cost of the order greater than $1,000?

(1) The order contained between 350 and 360 tiles.
(2) Each tile cost between $3.00 and $3.10.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Statement (1) gives the tile count but not the price, so the cost is unknown, and statement (2) gives the price but not the count, so neither alone is sufficient. Together, the smallest possible total is 350 × $3.00 = $1,050, and even this minimum already exceeds $1,000, so the total cost is greater than $1,000 for every allowed combination. Because the combined information forces a definite "yes" while neither statement alone can, the answer is C.
**related_reading:** quant-03-estimation

---

## Q24
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A refrigerator regularly priced at $3,120 is on sale at 23% off. The sale price is closest to:

- A) $2,400
- B) $720
- C) $1,560
- D) $2,808
- E) $3,120

**answer:** A
**explanation:** The phrase "closest to" together with widely spaced choices signals estimation rather than exact multiplication. After a 23% discount you pay 100% − 23% = 77% of the sticker price, so round 77% to about three-quarters (0.75) and find three-quarters of $3,120, which is $2,340; since you actually pay a hair more than 75%, the true value sits a little above $2,340, and the exact figure is 0.77 × 3,120 = $2,402.40. Only $2,400 lives in that neighborhood. Note that $720 is roughly the discount itself (23% of 3,120 ≈ 718), $1,560 is half price, and $2,808 is the price after only a 10% markdown — all answers to questions that were not asked.
**related_reading:** quant-03-estimation

---

## Q25
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Five shipments weigh 83, 91, 78, 96, and 87 kilograms. The average (arithmetic mean) weight of the shipments, in kilograms, is closest to:

- A) 80
- B) 84
- C) 85
- D) 87
- E) 96

**answer:** D
**explanation:** Rather than summing five two-digit numbers raw, anchor at a central guess of 85 and total each value's signed deviation: 83 → −2, 91 → +6, 78 → −7, 96 → +11, 87 → +2, which sum to +10. Spread over the five shipments that is +2 from the anchor, putting the mean at about 87. As a check, the raw total is 83 + 91 + 78 + 96 + 87 = 435, and 435 ÷ 5 = 87 exactly. The deviations are small numbers that partly cancel, which is why anchoring beats carrying a three-digit running sum.
**related_reading:** quant-03-estimation

---

## Q26
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

The sum 4/9 + 6/11 is closest to which of the following?

- A) 1/2
- B) 3/4
- C) 1
- D) 5/4
- E) 3/2

**answer:** C
**explanation:** Read each fraction against the benchmark 1/2 rather than finding a common denominator: 4/9 is just under half (half of 9 is 4.5, and the numerator 4 falls short, so about 0.44), while 6/11 is just over half (half of 11 is 5.5, and the numerator 6 exceeds it, so about 0.55). A shade below half plus a shade above half nearly cancel, so the sum is almost exactly 1 — the exact value is 0.444 + 0.545 ≈ 0.99. Choice A (1/2) would be the result of mistakenly combining the fractions by adding numerators and denominators (10/20), and choice E (3/2) over-rounds at least one fraction toward 1 when neither is close to a whole.
**related_reading:** quant-03-estimation

---

## Q27
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A bottling line must fill 40,300 identical containers, packed 19.6 containers per tray. Approximately how many trays are required?

- A) 200
- B) 2,000
- C) 20,000
- D) 200,000
- E) 2

**answer:** B
**explanation:** The stem says "approximately" and the choices are spaced by factors of ten, so only the order of magnitude matters. Round 40,300 down to 40,000 and 19.6 up to 20, then divide: 40,000 ÷ 20 = 2,000 trays. The exact quotient is about 2,056, which falls squarely in the 2,000 bucket and nowhere near any neighbor. Treating 19.6 as about 2 (giving 20,000) or as about 200 (giving 200) are the classic decimal-place slips this kind of problem is built to punish, so fix the power of ten before computing any digits.
**related_reading:** quant-03-estimation

---

## Q28
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

After a 30% discount, Priya paid $84 for a pair of boots. The original price of the boots was closest to:

- A) $100
- B) $109
- C) $112
- D) $117
- E) $120

**answer:** E
**explanation:** This is a reverse-percent problem: $84 is what remains after the discount, so it equals 70% of the original price, and the original is 84 ÷ 0.70, not 84 times anything. Since 70% is 7/10, dividing by 0.70 is the same as multiplying by 10/7, so 84 × 10/7 = 840/7 = $120 exactly. The distractors all reflect failing to reverse the discount correctly: $109 is 84 × 1.30 (multiplying by 1.30 instead of dividing by 0.70, which is wrong because percent increase and percent decrease act on different bases), $112 is 84 ÷ 0.75 (over-rounding the 70% factor up to 75%), and $117 is 84 ÷ 0.72 (over-rounding 70% up to 72%). The price after a discount is the output of the discount, so you reverse it by dividing by 0.70.
**related_reading:** quant-03-estimation

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

On a map drawn to a scale of 1 centimeter to 6.2 kilometers, two villages are 27.4 centimeters apart. The actual distance between the villages, in kilometers, is closest to:

- A) 4
- B) 34
- C) 170
- D) 340
- E) 1,700

**answer:** C
**explanation:** Each map centimeter represents 6.2 real kilometers, so the actual distance is 27.4 × 6.2. Round 6.2 down to 6 and 27.4 up to 27 for a quick product of about 162, then note that both factors were trimmed only slightly, so the true value sits a bit above 162 — the exact product is 27.4 × 6.2 = 169.88. The only choice in that neighborhood is 170. Dividing instead of multiplying gives about 4 (choice A), which is backward because a map is a shrunk picture of reality, so real distances exceed map distances, and choice B (34) ignores the scale factor by treating it as roughly 1.
**related_reading:** quant-03-estimation

---

## Q30
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (48.7% of 6,090) divided by 9.7?

- A) 300
- B) 60
- C) 150
- D) 600
- E) 1,500

**answer:** A
**explanation:** With three messy numbers and choices spread far apart, snap each to a landmark: 48.7% → 50% (one half), 6,090 → 6,000, and 9.7 → 10. Then half of 6,000 is 3,000, and 3,000 ÷ 10 = 300, which is essentially the answer. Because 48.7% is a touch below 50% while 9.7 is a touch below 10, the two small roundings roughly offset, leaving the true value near 300 — the exact result is about 305.8. Choice D (600) would require dividing by about 5 instead of 10 (a misread of 9.7), and choice C (150) would require using about 25% instead of 50% as the landmark.
**related_reading:** quant-03-estimation

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (0.0594 × 1,980) / 0.0289 ?

- A) 40
- B) 400
- C) 40,000
- D) 4,000
- E) 400,000

**answer:** D
**explanation:** The choices differ by factors of ten, so only the order of magnitude matters and exact arithmetic is wasted effort. Snap each number to a clean landmark: 0.0594 → 0.06, 1,980 → 2,000, and 0.0289 → 0.03. The numerator is 0.06 × 2,000 = 120, and dividing by 0.03 is the same as multiplying by 100/3, giving 120 × 100/3 = 4,000 — right in that bucket (the exact value is about 4,070). The most error-prone step is the decimal shift in the divisor: treating 0.0289 as about 0.3 would cost a full factor of ten and land you at 400 instead.
**related_reading:** quant-03-estimation

---

## Q33
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Estimation

A rectangular courtyard has an area of A square meters. Is A greater than 5,000?

(1) The length of the courtyard is between 60 and 66 meters.
(2) The width of the courtyard is between 72 and 80 meters.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**explanation:** Each statement alone fixes only one dimension within a range and says nothing about the other, so neither is sufficient on its own. Combining them, the area can be as small as 60 × 72 = 4,320 (which is not greater than 5,000) or as large as 66 × 80 = 5,280 (which is greater than 5,000). Because the possible area straddles 5,000, the two statements together still do not settle the yes/no question, so the answer is E.
**related_reading:** quant-03-estimation

---

## Q34
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Estimation

A landscaper placed a single order for identical paving stones. Was the total cost of the order greater than $2,000?

(1) The order contained between 490 and 500 stones.
(2) Each stone cost between $4.20 and $4.40.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Statement (1) gives the stone count but not the price, so the cost is unknown, and statement (2) gives the price but not the count, so neither alone is sufficient. Together, the smallest possible total is 490 × $4.20 = $2,058, and even this minimum already exceeds $2,000, so the total cost is greater than $2,000 for every allowed combination. Because the combined information forces a definite "yes" while neither statement alone can, the answer is C.
**related_reading:** quant-03-estimation

---

## Q35
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Estimation

Is the product pq greater than 800?

(1) p is between 28 and 30, and q is between 31 and 33.
(2) p + q is between 60 and 70.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** From statement (1) the product is at minimum 28 × 31 = 868, which already exceeds 800 for every allowed pair, so the answer is a definite "yes" and statement (1) alone is sufficient. Statement (2) fixes only the sum: p = 10 and q = 55 give a sum of 65 with product 550 (not greater than 800), while p = 33 and q = 33 give a sum of 66 with product 1,089 (greater than 800), so it yields both answers and is insufficient. Since one statement alone settles the question and the other does not, the answer is A.
**related_reading:** quant-03-estimation
