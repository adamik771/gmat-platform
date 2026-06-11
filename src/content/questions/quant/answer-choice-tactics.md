---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

At a certain school, the ratio of boys to girls is 4 to 7. Which of the following could be the total number of students at the school?

- A) 64
- B) 70
- C) 77
- D) 81
- E) 92

**answer:** C
**fastest_path:** A 4:7 ratio forces the total to be a multiple of 4 + 7 = 11 — scan the choices for the only multiple of 11.
**explanation:** A ratio of 4:7 means the students come in "units" of 4 + 7 = 11: for every 11 students, 4 are boys and 7 are girls. The total must therefore be a multiple of 11.

Scan the choices: 64 is not divisible by 11, 70 is not, 77 = 11 × 7 is, 81 is not, 92 is not.

Exactly one choice survives the divisibility filter, so no further work is needed.

The correct answer is C.
**common_trap:** Picking 70 because it "contains" the digit 7 from the ratio, or trying to set up equations for the boy and girl counts. The ratio's only constraint on the total is divisibility by the part-sum.
**takeaway:** A part-to-part ratio of a:b constrains the total to multiples of a + b. On "could be the total" questions, test the choices against that one fact before doing anything else.
**hint_nudge:** You never need to find the number of boys or girls.
**hint_strategy:** If boys:girls is 4:7, every "batch" of students contains 4 + 7 = 11 people. What does that force about the total?
**related_reading:** quant-04-answer-choice-tactics

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A laptop regularly priced at $1,847 is on sale at 28 percent off. The sale price is closest to which of the following?

- A) $930
- B) $1,130
- C) $1,330
- D) $1,530
- E) $1,730

**answer:** C
**fastest_path:** The choices sit $200 apart — round to $1,850 and 28% ≈ 0.28, and one rough multiplication lands in exactly one bucket.
**explanation:** The word "closest" plus widely spaced choices is the signal to estimate rather than compute.

Paying 28 percent off means paying 72 percent of the price. Round: 0.72 × 1,850. Compute the easy pieces: 0.7 × 1,850 = 1,295 and 0.02 × 1,850 = 37, so the product is about 1,295 + 37 = 1,332.

Only one choice is anywhere near 1,332. The exact value, 0.72 × 1,847 = 1,329.84, confirms it, but the estimate already decided the question.

The correct answer is C.
**common_trap:** Computing 28 percent of the price ($517) and stopping there — that is the discount, not the sale price. The size filter catches it: about $517 is nowhere near any choice, which tells you you answered the wrong question.
**takeaway:** When choices are far apart, round aggressively and multiply once. Estimation error of a few dollars cannot cross a $200 gap.
**hint_nudge:** "Closest to" plus choices $200 apart means you do not need exact arithmetic.
**hint_strategy:** Paying 28% off means paying 72% of the price. Round the price to $1,850 and estimate.
**related_reading:** quant-04-answer-choice-tactics

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

What is the value of (3 − 7)(5 − 2)(−2 − 6)?

- A) −96
- B) −48
- C) 24
- D) 48
- E) 96

**answer:** E
**fastest_path:** Count negative factors first: two negatives and one positive force a positive product, killing A and B before any multiplication.
**explanation:** Run the sign filter before computing. The three factors are 3 − 7 = −4 (negative), 5 − 2 = 3 (positive), and −2 − 6 = −8 (negative). An even number of negative factors makes the product positive, so A and B are gone on inspection.

Now multiply magnitudes: 4 × 3 × 8 = 96.

Combine: positive 96.

The correct answer is E.
**common_trap:** Mishandling −2 − 6 as −2 + 6 = 4, which flips the sign analysis and the magnitude. Settling the sign separately from the magnitude makes that slip visible instead of silent.
**takeaway:** Sign is the cheapest filter on the page. Decide the sign of the answer before touching the arithmetic, and half the choices often disappear.
**related_reading:** quant-04-answer-choice-tactics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The value of (0.49 × 81.2) ÷ 0.198 is closest to which of the following?

- A) 2
- B) 20
- C) 200
- D) 2,000
- E) 20,000

**answer:** C
**fastest_path:** The choices differ by powers of 10, so round every number to one clean digit: (0.5 × 81) ÷ 0.2.
**explanation:** Each choice is ten times the one before it — the test is asking only for the order of magnitude, so rounding is not just allowed, it is the intended method.

Round: 0.49 ≈ 0.5, 81.2 ≈ 81, 0.198 ≈ 0.2.

Then 0.5 × 81 = 40.5, and 40.5 ÷ 0.2 = 202.5.

That sits squarely on one choice; the rounding errors are far too small to move the result toward 20 or 2,000.

The correct answer is C.
**common_trap:** Dividing by 0.198 and mentally shrinking the result — dividing by a number less than 1 makes the result bigger, not smaller. That single sign-of-the-move error is exactly one power of 10 here, which is why B is on the page.
**takeaway:** When choices are spaced by factors of 10, replace every messy number with its nearest clean value and compute once. Order-of-magnitude questions punish exact arithmetic with wasted time, not wrong answers.
**hint_nudge:** Look at how far apart the choices are before you compute anything.
**hint_strategy:** Round 0.49 to 0.5, 81.2 to 81, and 0.198 to 0.2, then compute.
**related_reading:** quant-04-answer-choice-tactics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The price of a stock rose 20 percent in January and then fell 20 percent in February. The price at the end of February was what percent change from the price at the start of January?

- A) a decrease of 4%
- B) a decrease of 2%
- C) no change
- D) an increase of 2%
- E) an increase of 4%

**answer:** A
**fastest_path:** Multiply the two factors: 1.2 × 0.8 = 0.96 — down 4 percent. The "no change" choice is the engineered trap.
**explanation:** The bait on this question is choice C: up 20 and down 20 "cancel." They do not, because the 20 percent fall applies to a larger base than the 20 percent rise did.

Track the multipliers. A 20 percent rise multiplies the price by 1.2; a 20 percent fall multiplies it by 0.8. Combined: 1.2 × 0.8 = 0.96.

A final multiplier of 0.96 is a 4 percent decrease. With a concrete start of $100: up to $120, then down 20 percent of $120 is $24, landing at $96.

The correct answer is A.
**common_trap:** Adding the percent changes (+20 − 20 = 0) instead of multiplying the factors. Successive percent changes always compound on shifting bases — and a matched up-then-down pair always nets out as a loss.
**takeaway:** When a question's "obvious" answer is the result of one naive step (here, adding percents), assume it is the trap and check what the skipped step does. Equal percent up and down never returns to the start.
**hint_nudge:** The two changes apply to different base amounts.
**hint_strategy:** Convert each change to a multiplier — × 1.2 then × 0.8 — and combine them.
**related_reading:** quant-04-answer-choice-tactics

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Which of the following is closest to 7,985 ÷ 4.02?

- A) 200
- B) 800
- C) 2,000
- D) 8,000
- E) 20,000

**answer:** C
**fastest_path:** The choices span four powers of 10 — round to 8,000 ÷ 4 and read off the answer.
**explanation:** Before computing, read the spread: the smallest choice is 200 and the largest is 20,000. Gaps that wide mean a one-step estimate settles the question.

Round 7,985 to 8,000 and 4.02 to 4. Then 8,000 ÷ 4 = 2,000.

The rounding adjustments (up by 15 in the numerator, down by 0.02 in the denominator) are tiny relative to the gaps between choices, so the estimate is decisive.

The correct answer is C.
**common_trap:** Treating the division as harder than it is and reaching for long division — or slipping a decimal place and landing on 200 or 20,000, which is exactly the error the power-of-10 spacing is designed to catch.
**takeaway:** Read the spread first. Choices a factor of 10 apart are an explicit invitation to round both numbers to clean values and do one mental step.
**related_reading:** quant-04-answer-choice-tactics

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If k is an odd integer, which of the following must be odd?

- A) k + 1
- B) 2k
- C) k² + 1
- D) k² + k
- E) k² + k + 1

**answer:** E
**fastest_path:** Test k = 1 against all five choices — four come out even at once, and only one survives.
**explanation:** One concrete value runs the parity filter across the whole row of choices. Let k = 1: k + 1 = 2, 2k = 2, k² + 1 = 2, k² + k = 2, and k² + k + 1 = 3. Four choices are even on the very first test; only E is odd.

The structural reason E always works: k² + k = k(k + 1) is a product of two consecutive integers, so it is always even — and adding 1 to an even number gives an odd one, for every integer k.

The correct answer is E.
**common_trap:** Reasoning "odd squared is odd, so k² + 1 must be odd" — it is the reverse: odd plus 1 is even. Parity chains are easy to flip in your head, which is why one concrete substitution beats abstract reasoning here.
**takeaway:** On must-be parity questions, substituting a single legal value filters all five choices simultaneously. The fact that k(k + 1) is always even — consecutive integers — is worth memorizing outright.
**hint_nudge:** One well-chosen value of k can eliminate several choices at once.
**hint_strategy:** Plug k = 1 into every choice and keep only what comes out odd; then check why the survivor holds for all odd k.
**related_reading:** quant-04-answer-choice-tactics

---

## Q8
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A bag contains only red and blue chips, and the ratio of red chips to blue chips is 5 to 3. If the bag contains fewer than 50 chips, which of the following could be the total number of chips in the bag?

- A) 18
- B) 28
- C) 38
- D) 44
- E) 48

**answer:** E
**fastest_path:** The total must be a multiple of 5 + 3 = 8; only one choice is.
**explanation:** A 5:3 ratio means the chips come in batches of 5 + 3 = 8, so the total must be a multiple of 8.

Test the choices against that single fact: 18 is not a multiple of 8, 28 is not (28 ÷ 8 = 3.5), 38 is not, 44 is not (44 ÷ 8 = 5.5), and 48 = 8 × 6 is.

The second condition, fewer than 50 chips, is satisfied by 48, so it stands.

The correct answer is E.
**common_trap:** Checking divisibility by 5 or by 3 separately — the parts individually are multiples of 5 and 3, but the constraint on the total is the part-sum, 8.
**takeaway:** Ratio "could be the total" questions are divisibility filters in disguise: the total must be a multiple of the sum of the ratio parts. Apply that filter to the choices before any other work.
**related_reading:** quant-04-answer-choice-tactics

---

## Q9
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The balance of a savings account fell from $240 to $195 over a period of 3 months. What was the average change in the balance per month?

- A) −$45
- B) −$15
- C) −$5
- D) $15
- E) $45

**answer:** B
**fastest_path:** The balance fell, so the answer is negative — that kills D and E before any division.
**explanation:** Start with the sign filter: the balance decreased, so the average monthly change must be negative. Choices D and E are eliminated on inspection.

The total change is 195 − 240 = −45 dollars over 3 months. The average change per month is −45 ÷ 3 = −15 dollars.

The correct answer is B.
**common_trap:** Choice A is the total change, not the monthly average — it is on the page for the solver who forgets to divide by 3. After computing, reread what the question asked for.
**takeaway:** Predict the sign before you compute, and notice that the test lists intermediate values (like the undivided total) as choices. A choice matching your first sub-result is bait, not confirmation.
**hint_nudge:** Should the answer be positive or negative?
**hint_strategy:** Find the total change first, then spread it evenly across the 3 months.
**related_reading:** quant-04-answer-choice-tactics

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Maya drove 120 miles from her home to a conference at an average speed of 30 miles per hour, and drove back home along the same route at an average speed of 50 miles per hour. What was her average speed, in miles per hour, for the entire round trip?

- A) 35
- B) 37.5
- C) 40
- D) 42.5
- E) 45

**answer:** B
**fastest_path:** The naive midpoint of 30 and 50 is 40 — the trap. More time is spent at the slower speed, so the answer must be below 40, leaving only A and B to test.
**explanation:** Choice C, 40, is the simple average of the two speeds and is the engineered trap: average speed weights by time, and Maya spends more time at 30 mph than at 50 mph, so the true average is pulled below 40. That one observation eliminates C, D, and E.

Now compute. Total distance: 120 + 120 = 240 miles. Time out: 120 ÷ 30 = 4 hours. Time back: 120 ÷ 50 = 2.4 hours. Total time: 6.4 hours.

Average speed: 240 ÷ 6.4 = 37.5 miles per hour.

The correct answer is B.
**common_trap:** Averaging the two speeds to get 40. Speeds average by time spent, not by leg — and since the slow leg always takes longer, the round-trip average always sits below the midpoint.
**takeaway:** On round-trip speed questions, locate the midpoint of the two speeds among the choices, mark it as the trap, and let "pulled toward the slower leg" cut the field before you do the real division.
**hint_nudge:** She spends more time driving at 30 mph than at 50 mph.
**hint_strategy:** Total distance divided by total time — find each leg's time first.
**related_reading:** quant-04-answer-choice-tactics

---

## Q11
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The value of 1/3 + 1/4 − 1/6 is closest to which of the following?

- A) 0.38
- B) 0.40
- C) 0.42
- D) 0.44
- E) 0.46

**answer:** C
**fastest_path:** The choices sit 0.02 apart — too tight for rounding. Use a common denominator of 12 and compute exactly.
**explanation:** Read the spread first: gaps of 0.02 mean decimal rounding (1/3 ≈ 0.33, 1/6 ≈ 0.17) accumulates enough error to land between two choices. Tight clusters demand exact arithmetic.

Use twelfths: 1/3 = 4/12, 1/4 = 3/12, 1/6 = 2/12.

So 4/12 + 3/12 − 2/12 = 5/12, and 5/12 = 0.41666…, which is closest to 0.42.

The correct answer is C.
**common_trap:** Rounding each fraction to two decimals and getting 0.33 + 0.25 − 0.17 = 0.41 — exactly between B and C, forcing a coin flip. The tight spacing of the choices was the warning not to round.
**takeaway:** Choice spacing dictates method. Gaps of 0.02 mean compute exactly; fractions with small denominators are fastest through a common denominator, not through decimal conversion.
**hint_nudge:** Check how far apart the choices are before deciding whether to estimate.
**hint_strategy:** All three fractions convert cleanly to twelfths.
**related_reading:** quant-04-answer-choice-tactics

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

After a price increase of 25 percent, the price of an item must be decreased by what percent to return it to its original price?

- A) 15%
- B) 20%
- C) 25%
- D) 30%
- E) 33⅓%

**answer:** B
**fastest_path:** Use $100: it rises to $125, and the drop needed is 25 out of 125 — one-fifth, or 20 percent.
**explanation:** Choice C is the trap, built on the assumption that the same percent undoes itself. It cannot, because the decrease is measured from the new, larger base.

Make it concrete with an original price of $100. After the 25 percent increase the price is $125. To return to $100 the price must fall by $25 — but that $25 is measured against $125.

25 ÷ 125 = 1/5 = 20 percent.

The correct answer is B.
**common_trap:** Picking 25% on the logic "what went up must come down by the same percent." Percent changes are not symmetric: the up-move and down-move use different bases, so the reversing percent is always smaller than the original increase.
**takeaway:** Whenever a percent change must be "undone," the reversal percent is computed on the new base. Plugging in 100 turns every such question into two lines of arithmetic and exposes the symmetric-percent trap instantly.
**hint_nudge:** The decrease is measured from the increased price, not the original.
**hint_strategy:** Start the item at $100 and track the actual dollar amounts.
**related_reading:** quant-04-answer-choice-tactics

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A printer prints p pages per minute. At this rate, how many pages does it print in s seconds?

- A) 60p/s
- B) ps/60
- C) 60s/p
- D) p/(60s)
- E) 60ps

**answer:** B
**fastest_path:** Plug in easy numbers — p = 2 pages per minute and s = 60 seconds must give 2 pages — and test the choices for form.
**explanation:** Variable-in-the-choices questions reward testing concrete numbers over deriving formulas. Pick values that make the scenario trivial: p = 2 pages per minute, s = 60 seconds (one full minute). The printer must print exactly 2 pages.

Evaluate the choices at p = 2, s = 60: choice A gives 120/60 = 2; choice B gives 120/60 = 2; choice C gives 3,600/2 = 1,800; choice D gives 2/3,600; choice E gives 7,200. A and B both survive, so test a second value: s = 120 seconds (two minutes) must give 4 pages. Choice A gives 120/120 = 1 — wrong direction. Choice B gives 240/60 = 4.

The form check confirms it: pages should grow when either the rate or the time grows, so both p and s belong in the numerator — which kills A, C, and D on structure alone.

The correct answer is B.
**common_trap:** Placing the 60 in the numerator because "there are 60 seconds in a minute." The unit conversion divides here: s seconds is s/60 minutes. The sanity check — more seconds must mean more pages — catches the inverted form.
**takeaway:** When choices are formulas, check form first (what must grow, what must shrink), then verify with one trivially easy number set. If two choices survive, one more test value splits them.
**hint_nudge:** Choose values for p and s that make the answer obvious before looking at the choices.
**hint_strategy:** Try p = 2 and s = 60: one full minute of printing. Which choices give 2 pages — and do they still work for s = 120?
**related_reading:** quant-04-answer-choice-tactics

---

## Q14
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If x < −1, which of the following must be positive?

- A) x³
- B) x + 1
- C) x² + x
- D) x³ + x²
- E) x/|x|

**answer:** C
**fastest_path:** Test x = −2 against all five choices — only one comes out positive.
**explanation:** A single concrete value in the allowed range eliminates fastest. Let x = −2.

Choice A: (−2)³ = −8, negative. Choice B: −2 + 1 = −1, negative. Choice C: 4 + (−2) = 2, positive. Choice D: −8 + 4 = −4, negative. Choice E: −2/2 = −1, negative.

Only C survives, and on a "must be positive" question one surviving choice is the answer. The structural reason it always works: x² + x = x(x + 1), and for x < −1 both factors are negative, so their product is positive for every value in the range.

The correct answer is C.
**common_trap:** Reasoning abstractly about each expression and losing a sign along the way — or, on D, factoring x³ + x² = x²(x + 1) and forgetting that the surviving sign comes from (x + 1), which is negative throughout the range.
**takeaway:** On must-be sign questions with a constrained variable, substituting one legal value (here x = −2) eliminates everything that can fail. Factoring then explains why the survivor holds for the whole range.
**hint_nudge:** One well-chosen value of x can eliminate four choices at once.
**hint_strategy:** Substitute x = −2 into every choice; then factor the survivor to confirm it holds for all x < −1.
**related_reading:** quant-04-answer-choice-tactics

---

## Q15
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The members of a club can be divided evenly into groups of 4 or into groups of 6, but cannot be divided evenly into groups of 8. If the club has between 50 and 100 members, which of the following could be the number of members?

- A) 54
- B) 64
- C) 72
- D) 84
- E) 96

**answer:** D
**fastest_path:** The count must be a multiple of 12 (LCM of 4 and 6) but not of 8 — filter the choices in that order.
**explanation:** Stack the constraints and run the choices through them, cheapest filter first.

Divisible by both 4 and 6 means divisible by their least common multiple, 12. Check: 54 is not a multiple of 12 (54 ÷ 12 = 4.5), and 64 is not (64 ÷ 12 ≈ 5.3). That leaves 72, 84, and 96.

Now the exclusion: not divisible by 8. 72 ÷ 8 = 9, so 72 is out. 96 ÷ 8 = 12, so 96 is out. 84 ÷ 8 = 10.5, so 84 survives — and 84 = 12 × 7 confirms the first condition.

The correct answer is D.
**common_trap:** Requiring divisibility by 4 × 6 = 24 instead of by the LCM, 12. The product overcounts the shared factor of 2 — and on this question it steers you to 72 or 96, both of which fail the groups-of-8 exclusion.
**takeaway:** "Divisible by both a and b" means divisible by lcm(a, b), not by ab. When a question stacks a divisibility requirement with an exclusion, filter the choices through the requirement first, then apply the exclusion to the survivors.
**hint_nudge:** "Evenly into groups of 4 or 6" is a divisibility condition — by what single number?
**hint_strategy:** Find the LCM of 4 and 6, keep only choices divisible by it, then throw out any that are also divisible by 8.
**related_reading:** quant-04-answer-choice-tactics

---

## Q16
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The population of a town is 50,000 and grows by 10 percent each year. What will the population be at the end of 3 years?

- A) 63,500
- B) 65,000
- C) 66,550
- D) 68,300
- E) 71,500

**answer:** C
**fastest_path:** 65,000 is the simple-interest trap (50,000 + 30%). Compounding must beat it, but only slightly — the answer is the choice just above 65,000.
**explanation:** Read the choices first. 65,000 is exactly 50,000 grown by a flat 30 percent — three years of 10 percent with no compounding. That is the trap for solvers who add percents. Compound growth must exceed it, which also eliminates A.

The compounding bonus over three years is small (the extra growth on the growth), so among 66,550, 68,300, and 71,500, the nearest choice above 65,000 is the structural favorite. Confirm by computing: 50,000 × 1.1 = 55,000; × 1.1 = 60,500; × 1.1 = 66,550.

The correct answer is C.
**common_trap:** Adding the three 10 percent changes for 30 percent total. Each year's growth applies to the new, larger population, so three years at 10 percent compounds to 33.1 percent, not 30.
**takeaway:** On compound-growth questions, locate the simple-interest value among the choices and treat it as the floor: the answer is above it, and for few periods at modest rates, only slightly above. Often that reasoning alone isolates one choice.
**hint_nudge:** One of these choices is exactly 30% growth — is that what three years of 10% growth gives?
**hint_strategy:** Multiply by 1.1 three times, or first eliminate every choice at or below the no-compounding value.
**related_reading:** quant-04-answer-choice-tactics
