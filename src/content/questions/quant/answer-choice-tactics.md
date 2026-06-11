---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

At noon the temperature was 7°F. By midnight it had fallen 23°F. By how many degrees would the temperature need to rise from its midnight value to reach 4°F?

- A) -20
- B) -12
- C) 12
- D) 20
- E) 23

**answer:** D
**fastest_path:** A "rise" must be a positive number — that kills two choices before any arithmetic. Midnight is 7 − 23 = −16, and climbing from −16 to 4 is a rise of 20.
**explanation:** Before computing, read what the question asks for: a rise. A rise is a positive quantity, so (A) and (B) are dead on arrival — no subtraction required.

Now the two-step arithmetic. Midnight temperature: 7 − 23 = −16°F. To climb from −16 up to 4, the temperature must rise 4 − (−16) = 20 degrees.

The remaining wrong choices are echoes: 23 is the drop copied from the stem, and 12 comes from mishandling the negative midnight value.

The correct answer is D.
**mistake_a:** −20 has the right magnitude but the wrong sign. The question asks how much the temperature must rise, and a rise is positive by definition — the sign filter eliminates this without any computation.
**mistake_b:** −12 comes from computing 4 − 16 = −12, treating the midnight temperature as +16 instead of −16. It also fails the sign filter: a rise cannot be negative.
**mistake_c:** 12 is |4 − 16| — the midnight value lost its negative sign along the way. From −16 up to 4 crosses 16 degrees to reach zero and 4 more beyond it.
**mistake_e:** 23 is the overnight drop, copied straight from the stem. A choice that simply echoes a number you were given should always raise suspicion — the test rarely hands back an input as the output.
**common_trap:** Dropping the negative sign on the midnight temperature, which shrinks the answer from 20 to 12. Predicting "the answer must be positive and bigger than 16" before computing fences out every trap here.
**takeaway:** Decide the sign and rough size the answer must have before touching the arithmetic. "Rise," "drop," "gain," "loss" — these words fix the sign of the answer in advance.
**trap_type:** sign-blind
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A company's 30 junior employees earn an average salary of $40,000, and its 10 senior employees earn an average salary of $80,000. What is the average salary of all 40 employees?

- A) $44,000
- B) $50,000
- C) $55,000
- D) $60,000
- E) $70,000

**answer:** B
**fastest_path:** $60,000 is the unweighted midpoint of 40k and 80k — the bait. Juniors outnumber seniors 3 to 1, so the true average sits well below 60k, closer to 40k. Total pay is 1.2M + 0.8M = 2.0M over 40 people: $50,000.
**explanation:** Read the choices before computing: $60,000 is exactly halfway between the two given averages. A simple midpoint sitting among the choices is almost always the answer to a simpler, wrong question — here, the average if the two groups were the same size. They are not, so cross off (D), and since the bigger group earns less, the answer must sit below the midpoint, killing (E) too.

Now compute. Total payroll: 30 × $40,000 + 10 × $80,000 = $1,200,000 + $800,000 = $2,000,000. Divide by 40 employees: $50,000.

The correct answer is B.
**mistake_a:** $44,000 weights the groups 90/10 — reading "10 senior employees" as "10 percent senior." The weights come from group sizes out of the total (30/40 and 10/40), not from the raw count read as a percent.
**mistake_c:** $55,000 is a guess at the lean — "it should be below the midpoint, so take the value one notch down." The direction filter narrows the field, but it cannot finish the problem; only the weighted total can.
**mistake_d:** $60,000 is the unweighted midpoint of $40,000 and $80,000 — the engineered trap. Averaging the two averages is only valid when the groups are equal in size, and the stem says 30 versus 10.
**mistake_e:** $70,000 applies the weights backwards, giving the seniors the weight of 30 and the juniors the weight of 10. A one-second sanity check catches it: most employees are juniors, so the average must sit near $40,000, not near $80,000.
**common_trap:** The midpoint bait. When two group averages appear in a stem, their simple midpoint is nearly always planted among the choices — and it is only correct when the groups are the same size.
**takeaway:** Before averaging anything, ask which group is bigger. The combined average is always pulled toward the larger group — use that lean to eliminate, then verify with the weighted total.
**hint_nudge:** One of the choices is exactly halfway between $40,000 and $80,000. Should it be?
**hint_strategy:** The 30 juniors outnumber the seniors 3 to 1, so the average is pulled toward $40,000. Compute total payroll and divide by 40.
**trap_type:** naive-midpoint
**est_time_seconds:** 90
**related_reading:** quant-04-answer-choice-tactics

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The sum of 5 consecutive integers is S. Which of the following could be the value of S?

- A) 18
- B) 24
- C) 32
- D) 45
- E) 52

**answer:** D
**fastest_path:** Five consecutive integers average to their middle integer, so the sum is 5 times an integer — a multiple of 5. Scan the choices: only 45 qualifies.
**explanation:** Do not hunt for the five integers. Find the property the answer must have, then test the choices against it.

Call the integers n, n+1, n+2, n+3, n+4. Their sum is 5n + 10 = 5(n + 2) — five times the middle integer. So S must be a multiple of 5, whatever n is.

Scan: 18, 24, 32, and 52 are not multiples of 5. Only 45 is, and it checks out: 7 + 8 + 9 + 10 + 11 = 45.

The correct answer is D.
**mistake_a:** 18 is not a multiple of 5 — the middle integer would have to be 18/5 = 3.6, and the middle of five consecutive integers must itself be an integer.
**mistake_b:** 24 is divisible by plenty of numbers — 2, 3, 4, 6, 8 — which makes it feel flexible. But the only divisibility that matters here is by 5, and 24 fails it.
**mistake_c:** 32 is a clean power of 2, which gives it a "round number" feel. Feel is not a filter; 32/5 is not an integer.
**mistake_e:** 52 sits close to the multiple-of-5 landmark 50, and a rushed scan can wave it through. The filter is exact divisibility, not proximity.
**common_trap:** Trying to build the five integers by trial and error instead of extracting the one property — "sum = 5 × middle" — that lets you test all five choices in seconds.
**takeaway:** "Which could be" questions are choice-testing questions. Derive the property the answer must satisfy, then run every choice through it.
**trap_type:** property-blind
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Which of the following is closest to (0.91 × (−18.2)) / 0.05 ?

- A) -3,310
- B) -331
- C) -33
- D) 33
- E) 331

**answer:** B
**fastest_path:** Sign first: positive × negative ÷ positive is negative — (D) and (E) die. Then size: about −18 divided by 0.05 means about −18 × 20 = −360-ish, scaled by 0.91. Only −331 lives in that neighborhood.
**explanation:** The choices are the same digits with different signs and decimal positions — a signal that the test is checking sign discipline and zero-tracking, not multiplication skill.

Sign: 0.91 is positive, −18.2 is negative, 0.05 is positive. One negative factor makes the result negative. Cross off (D) and (E) without arithmetic.

Size: 0.91 × (−18.2) is about −16.5. Dividing by 0.05 multiplies by 20, and −16.5 × 20 = −330. The exact value is −331.24, and only one negative choice is anywhere near it.

The correct answer is B.
**mistake_a:** −3,310 is one decimal shift too far — dividing by 0.05 multiplies by 20, not by 200. When a division by a small decimal appears, convert it deliberately: ÷0.05 = ×20.
**mistake_c:** −33 treats the divisor as 0.5 instead of 0.05 — one lost zero, one factor of ten. The choices being factors of ten apart is the test announcing this exact slip.
**mistake_d:** 33 makes two errors at once: the dropped sign and a decimal shift. The sign filter alone should have removed every positive choice in the first second.
**mistake_e:** 331 has the right magnitude and the wrong sign. A single negative factor in a product or quotient forces a negative result — count the negative signs before anything else.
**common_trap:** Computing the digits correctly and then placing the sign or the decimal point from memory. The sign and the order of magnitude should each be locked in as a separate, deliberate step.
**takeaway:** When choices share digits and differ only in sign and zeros, the problem is a sign-and-decimal test. Run the sign filter, then count zeros — the digits themselves are almost free.
**hint_nudge:** Every choice has the same digits. What two things actually distinguish them?
**hint_strategy:** Count the negative factors to fix the sign, then convert ÷0.05 into ×20 and ballpark.
**trap_type:** decimal-shift
**est_time_seconds:** 75
**related_reading:** quant-04-answer-choice-tactics

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Karen bought a sofa for $480 after a 20% discount was applied to the original price. What was the original price of the sofa?

- A) $384
- B) $528
- C) $576
- D) $600
- E) $640

**answer:** D
**fastest_path:** The sale price is 80% of the original, so the original is 480/0.8 = 600. The planted trap is 480 × 1.2 = 576 — adding 20% back onto the wrong base.
**explanation:** First, a direction check: the original price must exceed the $480 sale price, so (A) is gone instantly.

Now the relationship. A 20% discount means Karen paid 80% of the original price P: 0.8P = 480, so P = 480/0.8 = $600.

The engineered trap is (C): taking 20% of $480 and adding it back gives $576, but that adds 20% of the sale price, not 20% of the original. The percentages act on different bases, so undoing a discount is never just re-adding the same percent. Verify the right answer the way the test-writer can't argue with: 20% off $600 is $120 off, landing exactly on $480. Twenty percent off $576 would be $460.80 — not the given price.

The correct answer is D.
**mistake_a:** $384 applies the 20% discount again to the sale price — answering "what would this sofa cost after a second markdown" instead of working backward. It also fails the cheapest filter of all: the original must be more than $480.
**mistake_b:** $528 adds 10% to the sale price — the percent got halved somewhere in the rush. Even as a wrong method it is executed wrong, and the verification step (20% off $528 is $422.40) exposes it immediately.
**mistake_c:** $576 is the engineered trap: $480 plus 20% of $480. The discount was 20% of the original price, a bigger number — so re-adding 20% of the smaller sale price undershoots. Check: 20% off $576 gives $460.80, not $480.
**mistake_e:** $640 works backward from the wrong discount: 480/0.75 undoes a 25% discount, not a 20% one. Translating "20% off" into "paid 75%" is a landmark slip — 20% off means paying 80%.
**common_trap:** Reversing a percent change by applying the same percent to the new value. Percent changes are not symmetric: the discount was computed on the original, so only dividing by 0.8 undoes it.
**takeaway:** To undo "X% off," divide by (1 − X/100) — never multiply the sale price by (1 + X/100). When in doubt, plug your candidate back in: the original price minus its 20% must land exactly on the given sale price.
**hint_nudge:** One choice is exactly $480 plus 20% of $480. Is that how discounts reverse?
**hint_strategy:** Karen paid 80% of the original. Solve 0.8P = 480 — or test the candidate choices by taking 20% off each and seeing which lands on $480.
**trap_type:** wrong-base-percent
**est_time_seconds:** 90
**related_reading:** quant-04-answer-choice-tactics

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Which of the following is closest to the result when 1,580 is decreased by 5% of itself?

- A) 79
- B) 790
- C) 1,501
- D) 1,659
- E) 7,900

**answer:** C
**fastest_path:** Decreasing by only 5% leaves a number slightly below 1,580. One choice is slightly below 1,580; the rest aren't close.
**explanation:** Before computing anything, predict the answer's neighborhood: removing just 5% of a number leaves about 95% of it, so the result must sit a little below 1,580. Scan the choices — only 1,501 fits that description, and the problem is over.

For confirmation: 5% of 1,580 is 79, and 1,580 − 79 = 1,501.

Every wrong choice fails the "slightly below 1,580" prediction by a mile, which is the point: when you state what size the answer must be before computing, four of the five choices often disqualify themselves.

The correct answer is C.
**mistake_a:** 79 is the 5% being removed, not the result after removing it. Computing the change instead of the changed value is the most common "answered the wrong question" slip.
**mistake_b:** 790 is half of 1,580 — a misread of "5%" as "50%," or a decimal slip on 79. A 5% decrease barely moves a number; losing half of it is a different event entirely.
**mistake_d:** 1,659 is 1,580 increased by 5%. The direction filter — "decreased, so the answer is below 1,580" — eliminates this in the first second.
**mistake_e:** 7,900 is 79 with a decimal shift, landing five times above the starting value. No 5% decrease can produce a result larger than the original.
**common_trap:** Reporting the discount instead of the discounted value. The stem asks for the result after the decrease — predict "a bit under 1,580" before computing and the trap has nowhere to hide.
**takeaway:** State the answer's rough size and direction relative to the starting number before doing arithmetic. "Decreased by 5%" pins the answer to just below the original — a one-second prediction that eliminates four choices.
**trap_type:** wrong-question-echo
**est_time_seconds:** 45
**related_reading:** quant-04-answer-choice-tactics

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

In a desk drawer, the ratio of pens to pencils is 4 to 7, and there are more than 50 writing instruments in total. Which of the following could be the total number of writing instruments in the drawer?

- A) 44
- B) 52
- C) 56
- D) 63
- E) 66

**answer:** E
**fastest_path:** A 4:7 ratio forces the total to be a multiple of 4 + 7 = 11. Among the choices, only 44 and 66 qualify — and "more than 50" kills 44.
**explanation:** A ratio of 4:7 means the items come in groups of 4 + 7 = 11: for some positive integer k, there are 4k pens and 7k pencils, so the total is 11k. The total must be a multiple of 11.

Run the divisibility filter: 44 = 11 × 4 and 66 = 11 × 6 pass; 52, 56, and 63 fail.

Two survivors means the stem's other constraint must break the tie: the drawer holds more than 50 instruments, which eliminates 44. That leaves 66 — that is 24 pens and 42 pencils.

The correct answer is E.
**mistake_a:** 44 passes the multiple-of-11 filter but violates the stated bound of "more than 50." Applying the clever filter and forgetting the plain-English constraint is exactly how a right method produces a wrong answer.
**mistake_b:** 52 = 4 × 13, a multiple of 4 — but the total isn't divided by the pen count alone. The parts sum to 11, and 52 is not a multiple of 11.
**mistake_c:** 56 is a multiple of both 4 and 7, which makes it magnetic — but a 4:7 ratio constrains the total by 4 + 7 = 11, not by 4 × 7 or by each part separately. 56 is not a multiple of 11.
**mistake_d:** 63 is a multiple of 7, satisfying the pencil side alone. Both parts scale together: the total must absorb a whole number of full 11-item groups.
**common_trap:** Testing the choices against 4 and 7 individually (or their product 28) instead of their sum. A part-to-part ratio of a:b makes the total a multiple of a + b.
**takeaway:** For part-to-part ratios, the total is a multiple of the parts' sum — and after any filter leaves two survivors, reread the stem; the test-writer planted a second constraint to break exactly that tie.
**trap_type:** dropped-constraint
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q8
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The product 31 × 29 is equal to

- A) 859
- B) 869
- C) 880
- D) 899
- E) 909

**answer:** D
**fastest_path:** Units digit: 1 × 9 ends in 9, killing 880. Ballpark: 30 × 30 = 900, and 31 × 29 = (30+1)(30−1) = 900 − 1 = 899 — just below 900.
**explanation:** The choices are clustered within 50 of each other, so a loose estimate alone won't finish — but stacking two cheap filters will.

Filter one, units digit: 31 ends in 1 and 29 ends in 9, so the product ends in 1 × 9 = 9. That eliminates 880.

Filter two, ballpark with direction: both factors hug 30, so the product is near 30 × 30 = 900 — which removes 859 and 869, leaving 899 and 909. The tiebreak is the identity hiding in plain sight: 31 × 29 = (30 + 1)(30 − 1) = 30² − 1² = 899, just below 900.

The correct answer is D.
**mistake_a:** 859 survives the units-digit check but sits too far below 900 — both factors are within 1 of 30, so the product can't stray 41 away from 900.
**mistake_b:** 869 is a long-multiplication slip (a lost carry). The (30+1)(30−1) = 900 − 1 view involves no carrying at all and can't produce it.
**mistake_c:** 880 fails the cheapest filter on the page: a number ending in 1 times a number ending in 9 must end in 9. Five seconds of units-digit work removes it before any multiplication.
**mistake_e:** 909 has the right ending and the right neighborhood but the wrong side of 900. The factors are 30 + 1 and 30 − 1, and (30+1)(30−1) = 900 − 1 lands below 900, not above.
**common_trap:** Grinding the multiplication longhand and trusting whatever appears. Two filters — last digit, then which side of 900 — settle the answer with almost no arithmetic to get wrong.
**takeaway:** When choices cluster, stack filters: units digit first, then a ballpark with a direction. Factors straddling a round number are a difference of squares in disguise.
**trap_type:** brute-force-default
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q9
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A car used 8 gallons of gasoline to travel 248 miles. The car's fuel efficiency, in miles per gallon, was

- A) 0.032
- B) 3.1
- C) 31
- D) 240
- E) 1,984

**answer:** C
**fastest_path:** "Miles per gallon" means miles divided by gallons: 248/8 = 31. Every other choice has impossible units or an impossible size for a car.
**explanation:** Let the units do the elimination before the division. A car that covers 248 miles on 8 gallons clearly travels more than 1 mile per gallon — so 0.032 and 3.1 are out. And no car gets 240 or 1,984 miles from a single gallon. One choice survives on plausibility alone.

The arithmetic confirms it: miles per gallon = miles ÷ gallons = 248 ÷ 8 = 31.

The correct answer is C.
**mistake_a:** 0.032 is gallons per mile — the ratio built upside down (8/248). "Miles per gallon" dictates the order: the unit before "per" goes on top.
**mistake_b:** 3.1 is the right digits with a decimal slip, off by a factor of ten. A car managing 3 miles per gallon would empty its tank crossing town — the plausibility check catches this without redoing the division.
**mistake_d:** 240 is 248 − 8, subtracting quantities measured in different units. Miles minus gallons is not a meaningful number, let alone an efficiency.
**mistake_e:** 1,984 is 248 × 8 — multiplied instead of divided. "Per" always signals division; a product of miles and gallons has units of mile-gallons, which answers nothing.
**common_trap:** Building the ratio upside down. The phrase "miles per gallon" encodes the fraction for you — miles on top, gallons on the bottom — and the inverted version is always waiting in the choices.
**takeaway:** Before computing a rate, ask what unit the answer must carry and what size is physically plausible. Choices with the wrong dimensions or absurd magnitudes eliminate themselves.
**trap_type:** unit-mismatch
**est_time_seconds:** 45
**related_reading:** quant-04-answer-choice-tactics

---

## Q10
**difficulty:** Easy
**type:** Problem Solving
**topic:** Answer-Choice Tactics

7/12 − 5/6 =

- A) -5/12
- B) -1/4
- C) 1/4
- D) 1/3
- E) 5/12

**answer:** B
**fastest_path:** 5/6 is bigger than 7/12 (it equals 10/12), so the result is negative — three choices die at once. Then 7/12 − 10/12 = −3/12 = −1/4.
**explanation:** Predict the sign first. Since 5/6 = 10/12 is larger than 7/12, subtracting it must give a negative result. Choices (C), (D), and (E) are eliminated before any fraction arithmetic.

Now the computation, over the common denominator 12: 7/12 − 10/12 = −3/12 = −1/4.

The choices are built as mirror pairs — each wrong positive value is a sign-dropped twin of a negative candidate — which is the test announcing that the sign is the actual skill being checked.

The correct answer is B.
**mistake_a:** −5/12 is the result of computing 1 − 7/12 = 5/12 and attaching a minus sign — the 5/6 was mentally rounded up to 1. Convert exactly: 5/6 = 10/12, not 12/12.
**mistake_c:** 1/4 is the correct magnitude with the sign dropped. Subtracting a larger fraction from a smaller one cannot give a positive result — the sign prediction comes first precisely to prevent this.
**mistake_d:** 1/3 comes from subtracting numerators and denominators separately: (7−5)/(12−6) = 2/6. Fractions never subtract componentwise; they need a common denominator.
**mistake_e:** 5/12 stacks both errors — the componentwise illusion territory and a dropped sign. It is also the positive mirror of choice (A), a giveaway that sign discipline is what the problem is really testing.
**common_trap:** Computing the digits first and bolting the sign on afterward from memory. Decide "negative" before touching the fractions, and half the answer choices vanish along with the most likely error.
**takeaway:** When subtracting, compare sizes first: smaller minus larger is negative, and that one observation typically eliminates two or three choices for free.
**trap_type:** sign-blind
**est_time_seconds:** 45
**related_reading:** quant-04-answer-choice-tactics

---

## Q11
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If x² + 3x − 28 = 0 and x > 0, what is the value of x?

- A) -7
- B) -4
- C) 3
- D) 4
- E) 7

**answer:** D
**fastest_path:** The constraint x > 0 kills (A) and (B) on sight. Then test a survivor instead of factoring: 4² + 3(4) − 28 = 16 + 12 − 28 = 0. Done.
**explanation:** Use the condition the stem hands you before doing any algebra: x > 0 eliminates −7 and −4 immediately. Three candidates remain, and with so few, plugging a choice into the equation beats factoring.

Test x = 4: 16 + 12 − 28 = 0. It lands exactly on zero, so 4 is a root — and since a quadratic has at most two roots and the other one here is negative (the two roots multiply to −28 and sum to −3, so the other root is −7), 4 is the only positive solution.

Factoring confirms: x² + 3x − 28 = (x + 7)(x − 4), roots −7 and 4. Only 4 satisfies x > 0.

The correct answer is D.
**mistake_a:** −7 is the other root of the quadratic — a correct piece of algebra that ignores the constraint x > 0. When a stem attaches a condition, the test plants the excluded solution among the choices.
**mistake_b:** −4 is the right root with the wrong sign, from assembling the factors as (x − 7)(x + 4). A five-second plug-in exposes it: 16 − 12 − 28 ≠ 0.
**mistake_c:** 3 gives 9 + 9 − 28 = −10 — close to zero, but plugging in is a pass/fail test, not a horseshoes contest. A candidate either lands exactly on 0 or it is wrong.
**mistake_e:** 7 borrows the 7 from the factor pair 7 × 4 = 28 but with the wrong sign attached. Check: 49 + 21 − 28 = 42, nowhere near zero. Always verify which factor carries the minus.
**common_trap:** Solving the quadratic completely and reporting the first root found. The constraint x > 0 exists precisely because both roots are sitting in the choices.
**takeaway:** A constraint in the stem is an eraser for answer choices — apply it first. With two or three candidates left, plugging a choice into the equation is faster and safer than factoring.
**hint_nudge:** The stem gives you a condition on x before the equation even matters. Use it on the choices.
**hint_strategy:** After eliminating the negatives, substitute the remaining choices into x² + 3x − 28 and keep the one that gives exactly 0.
**trap_type:** dropped-constraint
**est_time_seconds:** 75
**related_reading:** quant-04-answer-choice-tactics

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

1,344 ÷ 16 =

- A) 78
- B) 81
- C) 84
- D) 86
- E) 88

**answer:** C
**fastest_path:** The choices are clustered, so estimation can't finish — find the distinguishing digit instead. 16 × n must end in 4, which forces n to end in 4 or 9. Only 84 qualifies, and 16 × 84 = 1,344 confirms.
**explanation:** Read the spread first: the choices run from 78 to 88, all within about 12% of each other. A ballpark (1,344/16 ≈ 1,600/20 ≈ 80-something) confirms the neighborhood but cannot pick a winner. When estimation stalls, switch to the distinguishing property — here, the last digit.

The quotient n satisfies 16 × n = 1,344, so 16 × n must end in 4. The units digit of 16 × n is the units digit of 6 × (last digit of n): 6 × 4 = 24 and 6 × 9 = 54 both end in 4, so n must end in 4 or 9. Among the choices, only 84 does.

Confirm: 16 × 84 = 16 × 80 + 16 × 4 = 1,280 + 64 = 1,344.

The correct answer is C.
**mistake_a:** 78 is the result of a long-division slip — bringing down a digit late gives 16 × 78 = 1,248, a different number. The units-digit filter rejects 78 without any division: 6 × 8 ends in 8, not 4.
**mistake_b:** 81 corresponds to 16 × 81 = 1,296 — the divisor was effectively misread. Last-digit check: 6 × 1 = 6, so a product ending in 4 is impossible.
**mistake_d:** 86 produces 16 × 86 = 1,376, overshooting. The filter catches it instantly: 6 × 6 = 36 ends in 6, not in 4.
**mistake_e:** 88 is the "estimate and grab" answer — 1,344/16 feels close to 1,400/16 ≈ 88. Clustered choices exist precisely to punish that move; 16 × 88 = 1,408.
**common_trap:** Treating clustered choices like spread-out ones and trusting a rounded estimate. Tight gaps are the test's announcement that rounding error exceeds the spacing — switch to an exact filter like the units digit.
**takeaway:** When choices cluster, stop estimating and find the property that distinguishes them — the last digit of the product is usually the cheapest one available.
**hint_nudge:** The choices are too close together for rounding to separate them. What exact property differs between them?
**hint_strategy:** The correct choice n must make 16 × n end in 4. Work out which last digits of n can do that.
**trap_type:** cluster-estimation
**est_time_seconds:** 75
**related_reading:** quant-04-answer-choice-tactics

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A shop packs its entire stock of candles into gift boxes of exactly 6 candles each and has 4 candles left over. Which of the following could be the number of candles in the shop's stock?

- A) 48
- B) 50
- C) 58
- D) 62
- E) 68

**answer:** C
**fastest_path:** The stock is 4 more than a multiple of 6 — so subtract 4 from each choice and test divisibility by 6. Only 58 − 4 = 54 passes.
**explanation:** Translate the story into a property: stock = 6 × (boxes) + 4. So the answer minus 4 must be divisible by 6 — divisible by both 2 and 3.

Run the choices: 48 − 4 = 44 (not divisible by 3). 50 − 4 = 46 (not divisible by 3). 58 − 4 = 54 = 6 × 9 — passes. 62 − 4 = 58 (fails the 3-check). 68 − 4 = 64 (fails the 3-check).

So the stock could be 58: nine full boxes and 4 left over.

The correct answer is C.
**mistake_a:** 48 is a multiple of 6 — a stock of 48 packs into 8 perfect boxes with nothing left over, contradicting the 4-candle remainder. Choosing the clean multiple means the remainder in the stem was never used.
**mistake_b:** 50 is even, and 50 − 4 = 46 is even too, so it passes a divisibility-by-2 glance. But divisibility by 6 requires the 3-check as well, and 46 fails it: its digit sum is 10, not a multiple of 3. The half-filter is not the filter.
**mistake_d:** 62 − 4 = 58, which is even but not divisible by 3 (5 + 8 = 13). Testing only evenness is the common shortcut here, and three of the wrong choices survive it by design.
**mistake_e:** 68 − 4 = 64, even but with digit sum 10 — not divisible by 3. Divisibility by 6 always means two checks: even and digit-sum divisible by 3.
**common_trap:** Checking divisibility by 6 with the evenness test alone. The wrong choices are engineered to pass the 2-check and fail the 3-check — the digit-sum test is the half that does the work here.
**takeaway:** Remainder stories convert directly into a choice filter: "leaves r when divided by d" means the answer minus r is a multiple of d. Subtract, then run the full divisibility test.
**hint_nudge:** Rephrase the story as an arithmetic property of the total.
**hint_strategy:** The total minus 4 must be a multiple of 6 — check each choice for divisibility by both 2 and 3 after subtracting 4.
**trap_type:** forgot-remainder
**est_time_seconds:** 90
**related_reading:** quant-04-answer-choice-tactics

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Of the 280 students at a school, 5/7 are enrolled in a language class. How many of the students are NOT enrolled in a language class?

- A) 40
- B) 80
- C) 140
- D) 200
- E) 240

**answer:** B
**fastest_path:** NOT enrolled means 2/7 of 280, not 5/7. One seventh of 280 is 40, so 2/7 is 80. The planted trap is 200 — the enrolled count.
**explanation:** Circle the word NOT before computing, then predict the size: 5/7 are enrolled, so the unenrolled group is the minority — fewer than half of 280, i.e., under 140. That single prediction eliminates (C), (D), and (E), including the main trap.

Now compute the complement directly: the unenrolled fraction is 1 − 5/7 = 2/7, and 2/7 of 280 = 2 × 40 = 80.

The correct answer is B.
**mistake_a:** 40 is 1/7 of 280 — the complement was set up correctly but only one of its two sevenths was counted. The unenrolled fraction is 2/7, twice this.
**mistake_c:** 140 is half the school — a default split that ignores the 5/7 entirely. The stem's fraction must show up in the work; "about half" is not a reading of 5/7.
**mistake_d:** 200 is 5/7 of 280 — the number of students who ARE enrolled. This is the engineered answer to the opposite question, and the size filter ("not enrolled" must be the minority) removes it without arithmetic.
**mistake_e:** 240 is 280 − 40: the complement of the wrong sub-answer, stacking the 1/7-vs-2/7 slip with a subtraction detour. It also fails the minority check at a glance.
**common_trap:** Solving for the group the stem describes at length (the enrolled 5/7) instead of the group the question asks about. The biggest, most satisfying intermediate number — 200 — is always sitting in the choices.
**takeaway:** On NOT/EXCEPT questions, decide before computing whether the answer is the majority or the minority of the total — that one check disarms the complement trap and usually eliminates three choices.
**hint_nudge:** Should the answer be more or less than half of 280?
**hint_strategy:** Compute the complement fraction 1 − 5/7 first, then take that fraction of 280.
**trap_type:** wrong-question-echo
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

A bottling machine fills 270 bottles in 4.5 hours, working at a constant rate. How many bottles does the machine fill per hour?

- A) 0.017
- B) 6
- C) 60
- D) 274.5
- E) 1,215

**answer:** C
**fastest_path:** "Bottles per hour" is bottles divided by hours: 270/4.5 = 60. Every other choice carries the wrong units or an impossible size.
**explanation:** Screen the choices by form before dividing. A machine that fills 270 bottles in under five hours clearly manages dozens per hour — not a fraction of a bottle (A), not six (B), and not more bottles per hour than it filled all shift (D, E). The units-and-plausibility screen leaves one survivor.

The division confirms: 270 ÷ 4.5 = 2,700 ÷ 45 = 60 bottles per hour. (Clearing the decimal first — multiplying top and bottom by 10 — is the clean way to divide by 4.5.)

The correct answer is C.
**mistake_a:** 0.017 is 4.5/270 — hours per bottle, the upside-down ratio. "Bottles per hour" fixes the order: bottles on top.
**mistake_b:** 6 comes from dividing by 45 instead of 4.5 — the decimal vanished while clearing it. Multiply both numbers by 10, not just one: 2,700/45, not 270/45.
**mistake_d:** 274.5 is 270 + 4.5, adding a bottle count to a time. Quantities with different units cannot be added, and no per-hour rate can exceed the whole shift's output anyway.
**mistake_e:** 1,215 is 270 × 4.5 — multiplied instead of divided. The word "per" is an instruction to divide; a rate larger than the total production is impossible on its face.
**common_trap:** Mishandling the decimal divisor: dividing by 45 instead of 4.5 produces choice (B), one shift of the decimal away. Clear the decimal from both numbers before dividing.
**takeaway:** Rates inherit their formula from their units — the unit before "per" is the numerator. Screen choices for dimension and plausibility first; usually only one or two survive.
**hint_nudge:** Roughly how many bottles per hour would 270 bottles in about 4 and a half hours imply? Which choices are even possible?
**hint_strategy:** Compute 270 ÷ 4.5 by multiplying both numbers by 10 first: 2,700 ÷ 45.
**trap_type:** unit-mismatch
**est_time_seconds:** 60
**related_reading:** quant-04-answer-choice-tactics

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Answer-Choice Tactics

Maya drove from her home to the beach at an average speed of 30 miles per hour and returned home along the same route at an average speed of 50 miles per hour. What was her average speed, in miles per hour, for the entire round trip?

- A) 35
- B) 37.5
- C) 40
- D) 42.5
- E) 45

**answer:** B
**fastest_path:** 40 is the midpoint bait — average speed weights by time, and she spent longer at 30 mph, so the answer sits below 40. Pick a distance: 75 miles each way gives 150 miles in 2.5 + 1.5 = 4 hours = 37.5 mph.
**explanation:** Spot the trap before solving: (C) 40 is the simple average of 30 and 50. Average speed is total distance over total time, and Maya spent more time on the slow leg — so the true average is pulled below 40. That kills (C), (D), and (E) in one stroke.

To decide between 35 and 37.5, pick a convenient distance — the answer doesn't depend on it. Say the beach is 75 miles away: the trip out takes 75/30 = 2.5 hours, the return takes 75/50 = 1.5 hours. Total: 150 miles in 4 hours, which is 150/4 = 37.5 mph.

The correct answer is B.
**mistake_a:** 35 overcorrects — it accepts that the answer leans below 40 but guesses how far instead of computing. The lean narrows five choices to two; only total-distance-over-total-time can finish.
**mistake_c:** 40 is the engineered trap: the unweighted average of 30 and 50. Equal halves of distance are not equal halves of time — the 30-mph leg lasts longer and drags the average down.
**mistake_d:** 42.5 leans the wrong way, weighting the trip toward the faster leg. More time is always spent at the slower speed over equal distances, so the average must fall below the midpoint, not above it.
**mistake_e:** 45 weights the return speed heavily, as if the fast leg dominated the trip. It fails the direction check immediately.
**common_trap:** Averaging the two speeds. Whenever the same distance is covered at two speeds, the round-trip average is always below the midpoint — the slower leg eats more clock.
**takeaway:** Equal distances at two speeds: predict "below the midpoint" first to clear out the bait, then pick a concrete distance divisible by both speeds and compute total distance over total time.
**hint_nudge:** One choice is exactly (30 + 50)/2. Does Maya spend the same amount of time at each speed?
**hint_strategy:** Choose a round-trip distance divisible by both 30 and 50 — say 75 miles each way — and divide total miles by total hours.
**trap_type:** naive-midpoint
**est_time_seconds:** 90
**related_reading:** quant-04-answer-choice-tactics

---

## Q17
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

(0.7)³ − (0.7)² =

- A) -0.49
- B) -0.21
- C) -0.147
- D) 0.147
- E) 0.21

**answer:** C
**fastest_path:** For a number between 0 and 1, the cube is smaller than the square, so the difference is negative — (D) and (E) die. Factor: (0.7)²(0.7 − 1) = 0.49 × (−0.3) = −0.147.
**explanation:** Sign first. Powers of a number between 0 and 1 shrink as the exponent grows, so (0.7)³ < (0.7)², and the difference is negative. Both positive choices are gone before any multiplication.

Now factor rather than expand — pulling out (0.7)² turns two decimal multiplications into one:

(0.7)³ − (0.7)² = (0.7)²(0.7 − 1) = 0.49 × (−0.3) = −0.147.

A magnitude check seals it: the answer should be roughly "half of 0.3," i.e., around 0.15 in size — not 0.21 and not 0.49.

The correct answer is C.
**mistake_a:** −0.49 is −(0.7)² alone — the cube term was dropped entirely. The expression is a difference of two powers, not the negative of one of them.
**mistake_b:** −0.21 comes from factoring out only one 0.7 instead of two: 0.7 × (−0.3). The common factor of (0.7)³ and (0.7)² is (0.7)², and losing a factor changes the answer by 30%.
**mistake_d:** 0.147 is the exact magnitude with a dropped sign. The one-second rule — powers of numbers below 1 shrink, so cube minus square is negative — exists to make this slip impossible.
**mistake_e:** 0.21 stacks both errors: the single-factor slip and the dropped sign. Either filter alone — sign or magnitude — eliminates it.
**common_trap:** Intuition imported from numbers greater than 1, where cubes exceed squares. Between 0 and 1 the ordering flips: each extra factor of 0.7 shrinks the value, making the difference negative.
**takeaway:** For 0 < x < 1, higher powers are smaller — predict the sign of any power difference before computing, and factor out the largest common power instead of expanding.
**hint_nudge:** Is (0.7)³ bigger or smaller than (0.7)²? That settles half the choices.
**hint_strategy:** Factor out (0.7)² and multiply 0.49 by what remains.
**hint_setup:** (0.7)³ − (0.7)² = (0.7)²(0.7 − 1) = 0.49 × (−0.3).
**trap_type:** sign-blind
**est_time_seconds:** 90
**related_reading:** quant-04-answer-choice-tactics

---

## Q18
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

For a positive integer n, the n-th triangular number is defined as n(n + 1)/2. Which of the following CANNOT be a triangular number?

- A) 21
- B) 28
- C) 36
- D) 42
- E) 45

**answer:** D
**fastest_path:** Test choices, not theory: doubling a triangular number gives n(n + 1), a product of consecutive integers. 84 = 2 × 42 sits between 8 × 9 = 72 and 9 × 10 = 90 — no consecutive pair produces it.
**explanation:** "Which CANNOT be" is an instruction to put the choices on trial. The clean test: if T is triangular, then 2T = n(n + 1) — a product of two consecutive integers.

Run each choice. 2 × 21 = 42 = 6 × 7 — triangular (n = 6). 2 × 28 = 56 = 7 × 8 — triangular. 2 × 36 = 72 = 8 × 9 — triangular. 2 × 45 = 90 = 9 × 10 — triangular. But 2 × 42 = 84 falls strictly between 8 × 9 = 72 and 9 × 10 = 90, so no consecutive pair multiplies to it.

Equivalently: the triangular numbers march 21, 28, 36, 45, … and 42 falls into the gap between 36 and 45. Four of the five choices are consecutive triangular numbers — the question hid the sequence in plain sight.

The correct answer is D.
**mistake_a:** 21 is the 6th triangular number: 6 × 7 / 2. It feels "odd and irregular," but feel is not a test — doubling and factoring into consecutive integers is.
**mistake_b:** 28 is the 7th triangular number (7 × 8 / 2). Its fame as a perfect number can make it seem too special to be triangular; the doubling test settles it in seconds.
**mistake_c:** 36 is the 8th triangular number (8 × 9 / 2). Being a perfect square does not disqualify it — square and triangular are not mutually exclusive properties.
**mistake_e:** 45 is the 9th triangular number (9 × 10 / 2). Skipping the test on later choices after "finding" an earlier answer is how CANNOT questions punish impatience — every choice must be checked.
**common_trap:** Judging choices by surface texture — 42 is even, divisible by 6, and sits comfortably between 36 and 45, so it "looks" triangular. The wrong choices look stranger and are all genuine.
**takeaway:** CANNOT-be questions are elimination drills: find the cheap mechanical test (here, double it and look for consecutive-integer factors) and run all five choices through it without prejudice.
**hint_nudge:** What does 2 × n(n + 1)/2 look like? That gives you a property to test each choice against.
**hint_strategy:** Double each choice and try to write the result as a product of two consecutive integers.
**hint_setup:** 2 × 42 = 84. The nearby consecutive products are 8 × 9 = 72 and 9 × 10 = 90.
**trap_type:** property-blind
**est_time_seconds:** 120
**related_reading:** quant-04-answer-choice-tactics

---

## Q19
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

The integer x is a multiple of 7 such that 3 < √x ≤ 6. Which of the following could be the value of x?

- A) 7
- B) 21
- C) 42
- D) 49
- E) 63

**answer:** B
**fastest_path:** Square the bounds: 9 < x ≤ 36. Every choice is already a multiple of 7, so that filter is free — the range does all the work, and only 21 lands inside it.
**explanation:** Notice the choice design first: all five are multiples of 7. When every choice passes the loud, obvious condition, that condition eliminates nothing — the quiet condition is where the question lives.

Convert the root inequality into a range for x by squaring (legal since everything is positive): 3 < √x ≤ 6 becomes 9 < x ≤ 36.

Test the survivors of nothing against the range: 7 is below 9; 42, 49, and 63 all exceed 36. Only 21 sits inside, and √21 ≈ 4.6 confirms it comfortably.

The correct answer is B.
**mistake_a:** 7 is the reflexive "multiple of 7" grab — but √7 ≈ 2.6 fails the lower bound 3 < √x. The bound applies to the root, which means x itself must exceed 9.
**mistake_c:** 42 satisfies only the divisibility condition; it overshoots the range since 42 > 36. Stopping after the first filter passes is exactly what this choice is built to reward.
**mistake_d:** 49 is the magnet — it is 7², tying both numbers in the stem together. But √49 = 7, and the condition demands √x ≤ 6. The boundary is part of the constraint, not a suggestion.
**mistake_e:** 63 is a comfortable multiple of 7 far outside the squared range. Like (C), it survives the loud filter and dies on the quiet one.
**common_trap:** Applying only the constraint the choices were designed to all satisfy. When every choice visibly passes one condition, the test has told you which condition it is actually testing — the other one.
**takeaway:** Run every constraint over the surviving choices, and translate root or square conditions into plain ranges (square the bounds) before testing. The constraint that looks decorative is usually the executioner.
**hint_nudge:** Check the choices against the divisibility condition. How many survive? What does that tell you?
**hint_strategy:** Square all parts of 3 < √x ≤ 6 to get a range for x, then test the choices against it — watch the boundary.
**hint_setup:** The range is 9 < x ≤ 36; note that 49 fails because √49 = 7 > 6.
**trap_type:** dropped-constraint
**est_time_seconds:** 100
**related_reading:** quant-04-answer-choice-tactics

---

## Q20
**difficulty:** Hard
**type:** Problem Solving
**topic:** Answer-Choice Tactics

If |2x − 6| = 14, what is the sum of all possible values of x?

- A) -6
- B) 0
- C) 6
- D) 10
- E) 14

**answer:** C
**fastest_path:** |2x − 6| = 14 means 2x − 6 = ±14, and the two solutions sit symmetrically around the point where 2x − 6 = 0, i.e., x = 3. Two values symmetric about 3 sum to 6 — no need to find them.
**explanation:** The bait here is (B) 0 — "plus and minus solutions cancel." That intuition is only right when the expression inside the absolute value is centered at zero. This one is centered at x = 3.

The symmetry shortcut: |2x − 6| = 14 says x sits at a fixed distance from the center x = 3 (where 2x − 6 vanishes). The two solutions are 3 + d and 3 − d for the same distance d, so their sum is exactly 2 × 3 = 6 — before you ever compute d.

Verify by solving: 2x − 6 = 14 gives x = 10; 2x − 6 = −14 gives x = −4. Sum: 10 + (−4) = 6, matching the shortcut.

The correct answer is C.
**mistake_a:** −6 finds the center but attaches a stray sign, or sums the solutions as −10 + 4 after sign-flipping both. The center of |2x − 6| is at x = +3, so the sum is positive 6.
**mistake_b:** 0 is the "± solutions cancel" reflex — true for |2x| = 14, false here. The absolute value is centered at x = 3, not at x = 0, and the solutions straddle 3, not the origin.
**mistake_d:** 10 is one solution reported as the sum — the case 2x − 6 = −14 was never opened. An absolute-value equation with a positive right side always has two cases; the question asks for both.
**mistake_e:** 14 echoes the right-hand side of the equation. A choice that repeats a number from the stem unprocessed is the cheapest trap on the page.
**common_trap:** Assuming absolute-value solutions cancel to zero. They cancel only around the center of the expression — find where the inside equals zero, and the two solutions average to exactly that point.
**takeaway:** For |ax − b| = c, the solutions are symmetric about x = b/a, so their sum is 2b/a — a structural shortcut that answers "sum of all solutions" questions with no case-work at all.
**hint_nudge:** Zero is among the choices. When do the two solutions of an absolute-value equation actually cancel?
**hint_strategy:** Find the x that makes the inside zero — the two solutions sit symmetrically around it, which determines their sum immediately.
**hint_setup:** The inside vanishes at x = 3, so the solutions are 3 ± d and sum to 6. (They are 10 and −4.)
**trap_type:** zero-bait
**est_time_seconds:** 100
**related_reading:** quant-04-answer-choice-tactics
