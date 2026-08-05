---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 5x - 7 = 28, what is the value of x?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** Test the middle choice (C) by substitution before doing any algebra.
**explanation:** Backsolving means treating the five choices as candidate answers and checking which one satisfies the equation, rather than solving for x symbolically.

Start at the median choice (C), x = 7, because the choices are sorted and the middle one splits the field in half.

Substitute: 5(7) - 7 = 35 - 7 = 28. This matches the right-hand side exactly, so x = 7 works on the first test.

The correct answer is C.
**common_trap:** Reading "5x - 7" as "5 times (x - 7)" and solving the wrong equation. Substituting a concrete choice sidesteps that misread entirely.
**takeaway:** When the stem asks for a single value and the choices are sorted numbers, test C first — one substitution either confirms the answer or tells you which half to discard.
**related_reading:** quant-01-backsolving

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A rectangular garden is 4 meters longer than it is wide, and its area is 96 square meters. What is the width of the garden, in meters?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**fastest_path:** Plug each width into "width times (width + 4)" and look for the product 96 — no quadratic required.
**explanation:** The algebraic route is w(w + 4) = 96, which expands to a quadratic. Backsolving skips all of it: each choice is a candidate width, and the length is just width + 4, so you only multiply.

Test the median choice (C), width = 8: length = 8 + 4 = 12, and 8 times 12 = 96. Exact match on the first test.

Had C come out too small, you would move up to D or E; too big, down to A or B.

The correct answer is C.
**common_trap:** Setting up w^2 + 4w - 96 = 0 and mis-factoring under time pressure. The choices hand you the answer to verify directly.
**takeaway:** A quadratic word problem with numeric choices is prime backsolving territory — never factor when you can multiply a given number.
**hint_nudge:** You do not need to solve the quadratic. The choices are candidate widths.
**hint_strategy:** For each width w, the length is w + 4. Multiply and compare to 96.
**related_reading:** quant-01-backsolving

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 3(x + 4) = 27, what is the value of x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** Substitute the middle choice into 3(x + 4) and check against 27.
**explanation:** Test the median choice (C), x = 5: 3(5 + 4) = 3(9) = 27. The equation holds exactly, so x = 5.

Because you tested the middle of a sorted list, a wrong result would have told you which direction to move: a value above 27 means x is too big (go to A or B), below 27 means too small (go to D or E).

The correct answer is C.
**common_trap:** Distributing carelessly to 3x + 4 = 27 instead of 3x + 12 = 27. Substituting a number never triggers a distribution error.
**takeaway:** Always start backsolving from the median choice so a single test eliminates half the remaining options.
**related_reading:** quant-01-backsolving

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

The sum of four consecutive integers is 90. What is the largest of the four integers?

- A) 21
- B) 22
- C) 23
- D) 24
- E) 25

**answer:** D
**fastest_path:** Treat each choice as the largest integer, build the other three by counting down, and check the sum.
**explanation:** Each choice is a candidate for the largest integer, so the four numbers are that choice and the three below it.

Test the median choice (C), largest = 23: the integers are 20, 21, 22, 23, summing to 86. That is too small, so the largest must be bigger — eliminate A, B, and C in one stroke.

Test D, largest = 24: the integers are 21, 22, 23, 24, summing to 90. Exact match.

The correct answer is D.
**common_trap:** Solving 4n + 6 = 90 for the smallest integer and then forgetting to add 3 to report the largest. Backsolving the largest directly answers exactly what was asked.
**takeaway:** When one test comes out too small, every choice at or below it dies at once — the sorted choices turn one substitution into three eliminations.
**hint_nudge:** Each choice is the largest of four consecutive integers. Count down to get the other three.
**related_reading:** quant-01-backsolving

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A two-digit number has a tens digit that is twice its units digit, and the number is 36 greater than the number formed by reversing its two digits. What is the number?

- A) 21
- B) 42
- C) 63
- D) 84
- E) 96

**answer:** D
**fastest_path:** Test each choice against both stated conditions; the choices are concrete numbers, so checking is instant.
**explanation:** Setting up algebra here means two equations in two digits. Backsolving tests each choice against the two plain-English conditions instead.

Check D, the number 84: the tens digit (8) is twice the units digit (4), so the first condition holds. Reversing gives 48, and 84 - 48 = 36, so the second condition holds. Both pass.

For contrast, take C, the number 63: its tens digit 6 is twice its units digit 3, so the first condition holds — but reversing gives 36, and 63 - 36 = 27, not 36, so the second condition fails. Only 84 satisfies both.

The correct answer is D.
**common_trap:** Building and solving the digit equations 10t + u and 10u + t under time pressure, where a single sign slip flips the answer. Checking concrete numbers against the words is error-proof.
**takeaway:** When a stem stacks two conditions on a number, backsolving lets you verify both against each choice without ever writing an equation.
**related_reading:** quant-01-backsolving

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If (x / 3) + 5 = 12, what is the value of x?

- A) 15
- B) 18
- C) 21
- D) 24
- E) 27

**answer:** C
**fastest_path:** Divide each choice by 3, add 5, and check for 12.
**explanation:** Test the median choice (C), x = 21: (21 / 3) + 5 = 7 + 5 = 12. Exact match on the first try.

The correct answer is C.
**common_trap:** Multiplying before dividing — computing (12 - 5) and forgetting to multiply by 3, landing on 7. Substitution of a clean choice keeps the order of operations honest.
**takeaway:** Choices that divide evenly by the coefficient (here, multiples of 3) signal that backsolving will produce clean arithmetic.
**related_reading:** quant-01-backsolving

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

30% of what number is equal to 18?

- A) 45
- B) 50
- C) 54
- D) 60
- E) 72

**answer:** D
**fastest_path:** Take 30% of each choice and look for 18.
**explanation:** Each choice is a candidate for "what number," so take 30% of it and compare to 18.

Test the median choice (C), 30% of 54 = 16.2 — too small, so the number must be larger; eliminate A, B, and C.

Test D, 30% of 60 = 18. Exact match.

The correct answer is D.
**common_trap:** Computing 30% of 18 (about 5.4) instead of asking which number gives 18 when reduced to 30%. Testing choices forces you to model the correct relationship.
**takeaway:** For "X% of what number" stems, plug each choice in as the unknown total rather than operating on the 18 directly.
**related_reading:** quant-01-backsolving

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Pipe A can fill a tank in 3 hours. With pipe B also open, the tank fills in 2 hours. How many hours would pipe B take to fill the tank alone?

- A) 4
- B) 5
- C) 6
- D) 8
- E) 9

**answer:** C
**fastest_path:** Let each choice be B's solo time, add the rates 1/3 + 1/B, and check for the combined rate 1/2.
**explanation:** The algebraic equation is 1/3 + 1/B = 1/2. Backsolving lets each choice be B's time and checks the combined rate directly.

Test the median choice (C), B = 6: combined rate = 1/3 + 1/6 = 2/6 + 1/6 = 3/6 = 1/2 tank per hour, which fills the tank in exactly 2 hours. Match on the first test.

The correct answer is C.
**common_trap:** Subtracting times (3 - 2 = 1) or averaging them. Rates add, times do not — and substituting a choice into the rate equation exposes any such shortcut as wrong.
**takeaway:** Work-rate problems with numeric choices are ideal for backsolving: let the choice be the unknown time and test whether the rates sum correctly.
**hint_nudge:** Add rates, not times. Each choice is a candidate for B's solo time.
**hint_strategy:** Combined rate is 1/3 + 1/B. The two pipes together finish in 2 hours, so that sum must equal 1/2.
**related_reading:** quant-01-backsolving

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Maria is currently three times as old as her son. In 12 years, she will be twice as old as her son will be then. How old is Maria now?

- A) 24
- B) 30
- C) 33
- D) 36
- E) 42

**answer:** D
**fastest_path:** Each choice is Maria's age; divide by 3 for the son's age, then test the "twice as old in 12 years" condition.
**explanation:** Each choice is Maria's current age, and since she is three times her son's age, the son's age is that choice divided by 3.

Test D, Maria = 36: the son is 12. In 12 years Maria is 48 and the son is 24, and 48 is twice 24. Both conditions hold.

(Choices that are not multiples of 3, such as not dividing cleanly, can be ruled out quickly since the son's age must be a whole number.)

The correct answer is D.
**common_trap:** Mis-translating "in 12 years she will be twice as old" into m + 12 = 2s instead of m + 12 = 2(s + 12). Backsolving tests the plain-English condition, dodging the translation error.
**takeaway:** Age problems hide their difficulty in the wording, not the arithmetic — checking choices against the sentences beats setting up simultaneous equations.
**related_reading:** quant-01-backsolving

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

A jar contains 20 coins, all of which are nickels (5 cents) and dimes (10 cents), with a total value of $1.55. How many dimes are in the jar?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** D
**fastest_path:** Let each choice be the number of dimes, set nickels = 20 - dimes, and check the total value against 155 cents.
**explanation:** Each choice is a candidate count of dimes; the nickels are then 20 minus that count. Compute the total value in cents and compare to 155.

Test the median choice (C), 10 dimes: 10 nickels and 10 dimes give 10(5) + 10(10) = 50 + 100 = 150 cents. That is 5 cents short, so we need one more dime (which adds 10 and removes a 5, a net gain of 5). Move up to D.

Test D, 11 dimes: 9 nickels and 11 dimes give 9(5) + 11(10) = 45 + 110 = 155 cents. Exact match.

The correct answer is D.
**common_trap:** Solving the system 5n + 10d = 155 with n + d = 20 and dropping a digit in the substitution. Testing whole-coin counts keeps every number concrete and checkable.
**takeaway:** Two-variable coin and mixture problems collapse to one substitution chain when you let a choice fix one variable and derive the other.
**hint_strategy:** If d is the number of dimes, the number of nickels is 20 - d. Total value in cents is 5(20 - d) + 10d.
**related_reading:** quant-01-backsolving

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

If x^2 - 10x + 21 = 0 and x > 4, what is the value of x?

- A) 3
- B) 5
- C) 6
- D) 7
- E) 9

**answer:** D
**fastest_path:** Use the condition x > 4 to cut the field, then substitute a surviving choice into the quadratic.
**explanation:** First apply the constraint the stem hands you: x > 4 eliminates A (3) immediately. Then test the remaining choices in the quadratic rather than factoring.

Test D, x = 7: 7^2 - 10(7) + 21 = 49 - 70 + 21 = 0. The equation holds, and 7 > 4, so both the equation and the constraint are satisfied.

(The other root of the quadratic is 3, which the constraint x > 4 rules out — exactly the trap the condition is there to catch.)

The correct answer is D.
**common_trap:** Factoring to (x - 3)(x - 7) = 0 and then grabbing x = 3 out of habit, ignoring the x > 4 condition. Backsolving forces you to respect the constraint because you check it on every candidate.
**takeaway:** When a quadratic gives two roots but the stem adds an inequality, the inequality is the answer-selector — let it eliminate, then verify the survivor by substitution.
**related_reading:** quant-01-backsolving

---

## Q12
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If (2x + 6) / 4 = 7, what is the value of x?

- A) 9
- B) 11
- C) 13
- D) 15
- E) 17

**answer:** B
**fastest_path:** Substitute the middle choice into (2x + 6) / 4; "too big" kills the top half of the list in one stroke.
**explanation:** Test the median choice (C), x = 13: (2(13) + 6) / 4 = 32 / 4 = 8. That is bigger than 7, so x = 13 is too large — and because the left side only grows as x grows, D and E die with it. One test, three eliminations.

Test B, x = 11: (2(11) + 6) / 4 = 28 / 4 = 7. Exact match.

The correct answer is B.
**mistake_a:** Substituting 9 gives 24 / 4 = 6, one short of 7. Students who race the directional logic sometimes overshoot past the answer to the smallest survivor without testing it.
**mistake_c:** Gives 32 / 4 = 8 — close enough to 7 that a student in a hurry calls it a match instead of treating "off by anything" as a hard fail. An exact equation demands an exact hit.
**mistake_d:** Substituting 15 gives 36 / 4 = 9. Tempting only for students who mis-set the algebra as 2x + 6 = 7 * 4 + 8 after a scratchpad slip; the substitution check rejects it instantly.
**mistake_e:** This is the algebra-slip answer: moving the 6 to the wrong side gives 2x = 28 + 6, so x = 17. Backsolving never moves the 6 at all, which is exactly why it dodges this error.
**common_trap:** Calling a near miss a hit. Substituting C gives 8, and "8 is basically 7" loses the point — in an exact equation, any miss is a full miss, and its direction is free information.
**takeaway:** A failed test is not wasted work: too big means everything bigger is dead, so the worst case is two substitutions.
**est_time_seconds:** 60
**trap_type:** near-miss-accepted
**hint_nudge:** Plug the middle choice into the left side. Is the result bigger or smaller than 7?
**related_reading:** quant-01-backsolving

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

A movie ticket costs 3 dollars more than a tub of popcorn. Together, one ticket and one tub cost 19 dollars. How much does the ticket cost, in dollars?

- A) 8
- B) 9
- C) 11
- D) 13
- E) 16

**answer:** C
**fastest_path:** Let each choice be the ticket price, subtract 3 to get the popcorn, and check that the pair sums to 19.
**explanation:** Each choice is a candidate ticket price. The popcorn is 3 dollars cheaper, so the check is a single subtraction and a single addition.

Test the median choice (C), ticket = 11: popcorn = 11 - 3 = 8, and 11 + 8 = 19. Both conditions hold on the first test.

The correct answer is C.
**mistake_a:** 8 is the popcorn price, not the ticket price. Solving the system correctly and then reporting the other item is the most common way to lose this point — the stem asks for the ticket.
**mistake_b:** Comes from halving 19 to roughly 9.50 and rounding down — treating the two items as equal-priced and ignoring the 3-dollar gap entirely. Testing it gives popcorn = 6 and a total of 15, not 19.
**mistake_d:** Substituting 13 gives popcorn = 10 and a total of 23, too big. Tempting for students who add the 3-dollar difference to half of 19 twice instead of once.
**mistake_e:** A ticket of 16 forces popcorn = 13 and a total of 29 — picked mainly by students who set the ticket equal to 19 - 3 and never sanity-check the sum.
**common_trap:** Answering with the popcorn price. When two related quantities are in play, the wrong one is almost always sitting in the choices, sorted right where you expect the answer to be.
**takeaway:** Backsolving a two-quantity stem means deriving the second quantity from the candidate and checking the stated total — and then confirming which quantity the question actually asked for.
**est_time_seconds:** 60
**trap_type:** answered-wrong-quantity
**hint_nudge:** Each choice is the ticket. The popcorn is 3 dollars less. What must the pair add to?
**related_reading:** quant-01-backsolving

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

After a 25 percent discount, a jacket sells for 48 dollars. What was the original price of the jacket, in dollars?

- A) 54
- B) 58
- C) 60
- D) 64
- E) 70

**answer:** D
**fastest_path:** Take 75 percent of each candidate original price and look for 48; start at the middle.
**explanation:** Each choice is a candidate original price. A 25 percent discount means the sale price is 75 percent of the original, so the check is one multiplication.

Test the median choice (C), original = 60: 75 percent of 60 is 45 — too small, so the original price must be higher. A, B, and C are all eliminated by this single test.

Test D, original = 64: 75 percent of 64 is 48. Exact match.

The correct answer is D.
**mistake_a:** 75 percent of 54 is 40.50, far from 48. This choice catches students who subtract 25 percent of the sale price from some scratch number — pure noise once you test it.
**mistake_b:** 75 percent of 58 is 43.50. Survives only if you skip testing and guess "a bit above 48."
**mistake_c:** The classic percent trap: adding 25 percent of the sale price back, 48 * 1.25 = 60. But the 25 percent was taken off the original price, a bigger base — so undoing it requires dividing by 0.75, not multiplying by 1.25.
**mistake_e:** 75 percent of 70 is 52.50, overshooting 48. Tempting as a "safe high" guess for students who know C is a trap but do not test D first.
**common_trap:** Reversing a percent change by applying the same percent to the new base. A 25 percent decrease is not undone by a 25 percent increase, because the bases differ. Backsolving forward — original times 0.75 — makes the base unambiguous.
**takeaway:** For reverse-percent stems, plug each choice in as the original and run the discount forward; testing in the stated direction sidesteps the wrong-base trap entirely.
**est_time_seconds:** 70
**trap_type:** percent-of-wrong-base
**hint_nudge:** Run the discount forward: which original price gives 48 after losing a quarter of itself?
**related_reading:** quant-01-backsolving

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 84 - 6x = 48, what is the value of x?

- A) 12
- B) 9
- C) 7
- D) 6
- E) 4

**answer:** D
**fastest_path:** Test the middle choice — but note the list is descending, so "x too big" sends you toward the bottom of the page, not the top.
**explanation:** The choices are sorted in descending order, which changes nothing about the method and everything about the direction of elimination.

Test the median choice (C), x = 7: 84 - 42 = 42. That is smaller than 48, meaning we subtracted too much — x is too big. In an ascending list you would move up the page; here the smaller values sit below, so A and B die and the survivors are D and E.

Test D, x = 6: 84 - 36 = 48. Exact match.

The correct answer is D.
**mistake_a:** Substituting 12 gives 84 - 72 = 12, nowhere near 48. It is the "saw 12, grabbed 12" answer — 12 appears when you compute 84 - 72, a coincidence the test-writer planted.
**mistake_b:** Gives 84 - 54 = 30. Picked by students who correctly conclude "x must be smaller than 7" but then move toward the top of the page out of habit, forgetting the list descends.
**mistake_c:** Gives 42, not 48. Choosing it means treating "too small by 6" as close enough — but a miss is a miss, and its direction points to the answer.
**mistake_e:** Gives 84 - 24 = 60, overshooting 48 from the other side. The students who land here skipped D while jumping toward the small end of the list.
**common_trap:** Moving the wrong way after a failed test. The elimination direction follows the numeric ordering of the choices, not their position on the page — and this list runs high to low.
**takeaway:** Before backsolving, spend one second noting whether the choices ascend or descend; every "too big / too small" decision afterward depends on it.
**est_time_seconds:** 60
**trap_type:** direction-reversal
**hint_nudge:** These choices run from largest to smallest. After testing the middle one, which physical direction holds the smaller values?
**related_reading:** quant-01-backsolving

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

Dana has twice as many stamps as Eli. Together they have 36 stamps. How many stamps does Dana have?

- A) 12
- B) 18
- C) 24
- D) 30
- E) 32

**answer:** C
**fastest_path:** Let each choice be Dana's count, halve it for Eli, and check that the pair sums to 36.
**explanation:** Each choice is a candidate for Dana. Since Dana has twice Eli's count, Eli has half of Dana's — so the full check is one halving and one addition.

Test the median choice (C), Dana = 24: Eli has 12, and 24 + 12 = 36. Exact match on the first test.

The correct answer is C.
**mistake_a:** 12 is Eli's count, not Dana's. The stem plants the partner quantity among the choices precisely for students who solve correctly and report the wrong person.
**mistake_b:** 18 is half of 36 — the answer if the two had equal counts. Picking it means the "twice as many" condition never made it into the setup.
**mistake_d:** Dana = 30 forces Eli = 15 and a total of 45, too big. A direction error: a student whose first test came out small sometimes leaps to the second-largest choice without testing it.
**mistake_e:** Dana = 32 gives Eli = 16 and a total of 48. Also fails the halving sanity check loudly — yet it survives if no check is ever run.
**common_trap:** Splitting the total in half (18) or reporting Eli's share (12). Both numbers fall out of the correct arithmetic, which is what makes them dangerous — they feel earned.
**takeaway:** In "A has k times as many as B" stems, backsolve the person the question asks about and derive the partner; the partner's number is almost always lurking in the choices.
**est_time_seconds:** 60
**trap_type:** answered-wrong-quantity
**hint_nudge:** If a choice is Dana's count, Eli's count is half of it. What must the two add up to?
**related_reading:** quant-01-backsolving

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Gym A charges a one-time enrollment fee of 40 dollars plus 15 dollars per month. Gym B charges no enrollment fee and 25 dollars per month. After how many months of membership is the total amount paid to Gym A equal to the total amount paid to Gym B?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** C
**fastest_path:** For each candidate month count m, compare 40 + 15m against 25m; the totals converge as m grows.
**explanation:** Each choice is a candidate number of months. Gym A's total is the flat 40 plus 15 per month; Gym B's is just 25 per month. Compute both and compare.

Test the median choice (C), m = 4: Gym A costs 40 + 60 = 100; Gym B costs 25(4) = 100. Equal on the first test.

For intuition: at m = 3 Gym A still costs more (85 versus 75), and at m = 5 it costs less (115 versus 125). The gap closes by 10 dollars each month, which is why exactly one month count balances the two.

The correct answer is C.
**mistake_a:** At m = 2, Gym A has cost 70 and Gym B only 50. Picked by students who divide the 40-dollar fee by the 25-dollar rate and round — mixing the fee with the wrong gym's pricing.
**mistake_b:** At m = 3 the totals are 85 and 75 — close, and "close" seduces students who eyeball instead of computing both sides.
**mistake_d:** By m = 5, Gym B has overtaken: 115 versus 125. This is the off-by-one answer for students who ask when Gym A becomes cheaper rather than when the totals are equal.
**mistake_e:** At m = 6 the gap has widened to 130 versus 150. It survives only a setup that doubles the enrollment fee or charges it monthly.
**common_trap:** Forgetting the enrollment fee is paid once, not per month. Writing Gym A's cost as (40 + 15)m makes the totals never balance and forces a guess.
**takeaway:** Break-even stems backsolve cleanly because each candidate yields two concrete totals to compare — and the changing gap between them tells you which direction to move.
**est_time_seconds:** 90
**trap_type:** fixed-cost-as-recurring
**hint_nudge:** For each month count, compute both gym totals separately. The 40 dollars is paid only once.
**hint_strategy:** Gym A's total is 40 + 15m; Gym B's is 25m. The gap shrinks by 10 dollars per month, so exactly one m balances them.
**related_reading:** quant-01-backsolving

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

When the positive integer n is divided by 5, the remainder is 3. When n is divided by 4, the remainder is 1. Which of the following could be the value of n?

- A) 18
- B) 23
- C) 26
- D) 28
- E) 33

**answer:** E
**fastest_path:** Screen all five choices with the cheaper test first — remainder on division by 5 reads straight off the units digit — then apply the second condition to the survivors.
**explanation:** This stem asks which choice satisfies two divisibility properties. Properties are not monotonic — there is no "too big" or "too small" — so median-first does not apply. Instead, scan all five with the cheaper condition first.

Remainder 3 on division by 5 means the units digit is 3 or 8. That one glance eliminates C (26 ends in 6) and keeps A, B, D, E.

Now the second condition, remainder 1 on division by 4: 18 = 16 + 2 leaves remainder 2; 23 = 20 + 3 leaves remainder 3; 28 = 28 + 0 leaves remainder 0; 33 = 32 + 1 leaves remainder 1. Only 33 passes both.

The correct answer is E.
**mistake_a:** 18 passes the mod-5 test (ends in 8) but leaves remainder 2 on division by 4. The single-condition checker stops here because it is the first choice that passes the screen they ran.
**mistake_b:** 23 ends in 3, so it passes the first condition — but 23 = 5(4) + 3 against 4 leaves remainder 3, not 1. Tempting because both of its remainders are 3, which feels like a pattern.
**mistake_c:** 26 fails immediately: it ends in 6, so dividing by 5 leaves remainder 1, not 3. Students who check the mod-4 condition first (26 leaves remainder 2 anyway) sometimes transpose the two conditions and accept it.
**mistake_d:** 28 ends in 8 and passes the mod-5 screen, but 28 is a multiple of 4, leaving remainder 0. It catches students who read "remainder 1" as "remainder less than 2" or simply stop checking after condition one.
**common_trap:** Verifying only one of the two conditions. Every wrong choice here passes at least one screen — the test-writer builds them that way — so a single-condition check feels conclusive while proving nothing.
**takeaway:** When the stem says "could be," the choices are candidates against a property list, not points on a number line: scan all five, run the cheapest test first, and make every survivor pass every condition.
**est_time_seconds:** 100
**trap_type:** partial-condition-check
**hint_nudge:** A remainder of 3 when dividing by 5 fixes the units digit. Which digits qualify?
**hint_strategy:** Screen by units digit (must be 3 or 8), then test the survivors against the mod-4 condition. Both conditions must hold.
**related_reading:** quant-01-backsolving

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A 30-liter solution is 20 percent acid. How many liters of pure acid must be added to the solution so that the resulting solution is 40 percent acid?

- A) 4
- B) 6
- C) 8
- D) 10
- E) 12

**answer:** D
**fastest_path:** The solution starts with 6 liters of acid. For each candidate x, check whether (6 + x) is 40 percent of (30 + x) — remember the total volume grows too.
**explanation:** The starting solution holds 20 percent of 30 = 6 liters of acid. Adding x liters of pure acid raises both the acid (6 + x) and the total volume (30 + x), so the check for each candidate is the fraction (6 + x) / (30 + x).

Test the median choice (C), x = 8: is 14 / 38 at the 40 percent target, which is 2/5? Cross-multiply: 14 × 5 = 70 against 38 × 2 = 76. Since 70 < 76, the mixture is still under 40 percent — too weak, so more acid is needed. A, B, and C are gone.

Test D, x = 10: 16 / 40 = 40 percent exactly.

The correct answer is D.
**mistake_a:** Adding 4 gives 10 / 34 — cross-multiplying against 2/5, 10 × 5 = 50 versus 34 × 2 = 68, far below the 40 percent target. A filler that survives only when no fraction is ever computed.
**mistake_b:** The seductive one: 6 more liters "doubles the acid," and 20 doubled is 40. But the volume grows to 36 liters too, so 12 / 36 is only 33.3 percent. Doubling the acid does not double the concentration.
**mistake_c:** 14 / 38 misses the 40 percent target from below — cross-multiplying against 2/5 gives 14 × 5 = 70 versus 38 × 2 = 76. What lands students here is eyeballing: 14 liters of acid in almost-40 liters of mixture reads as "about 40 percent," and the real check never gets run.
**mistake_e:** 12 is 40 percent of the original 30 liters. This answer treats the target as "acid equal to 40 percent of the old volume," freezing the denominator at 30; the true total is 42 liters by then, and 18 / 42 overshoots the target — cross-multiplying against 2/5, 18 × 5 = 90 beats 42 × 2 = 84.
**common_trap:** Freezing the denominator. Every liter of acid you pour in lands in both the acid total and the volume total, and the wrong choices are engineered for students who update only the numerator.
**takeaway:** Mixture backsolving means rebuilding the full fraction for each candidate — new amount over new total — and the directional logic (too weak means add more) still cuts the field in half.
**est_time_seconds:** 110
**trap_type:** frozen-denominator
**hint_nudge:** Start by finding the liters of acid already in the solution. Then remember: added acid raises the total volume too.
**hint_strategy:** With x liters added, the mixture is (6 + x) acid in (30 + x) total. Test the middle choice and use too-weak / too-strong to eliminate.
**related_reading:** quant-01-backsolving

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Marco drives from home to work at an average speed of 30 miles per hour and drives home along the same route at an average speed of 45 miles per hour. If his total driving time for the round trip is 2.5 hours, how many miles is his one-way commute?

- A) 36
- B) 40
- C) 45
- D) 47
- E) 54

**answer:** C
**fastest_path:** Each choice is a one-way distance d; check whether d/30 + d/45 lands on 2.5 hours.
**explanation:** Each candidate distance fixes both leg times: d/30 going and d/45 returning. The check is whether they sum to 2.5 hours.

Test the median choice (C), d = 45: going takes 45/30 = 1.5 hours, returning takes 45/45 = 1 hour, total 2.5 hours. Exact match on the first test.

The choices were built for clean division by 30 and 45 — a strong signal that the test-writer expects you to plug, not derive.

The correct answer is C.
**mistake_a:** d = 36 gives 1.2 + 0.8 = 2.0 hours, half an hour short. Catches students who average the two speeds to 37.5, divide wrong, and round down.
**mistake_b:** d = 40 gives 4/3 + 8/9 of an hour, about 2.22 — close enough to fool an eyeballer who never adds the fractions.
**mistake_d:** The average-speed trap made concrete: averaging 30 and 45 to 37.5 mph and computing 37.5 times 2.5 divided by 2 gives about 46.9, which rounds to 47. But Marco spends more time at the slower speed, so the true average speed is below 37.5 — equal-weight averaging always overshoots.
**mistake_e:** d = 54 gives 1.8 + 1.2 = 3.0 hours. The answer for students who assign 2.5 hours to just one leg somewhere in the arithmetic.
**common_trap:** Averaging the two speeds. Average speed weights by time, not by leg, and the slow leg dominates — the trap answer 47 is planted one notch from the truth to punish exactly that shortcut.
**takeaway:** Round-trip stems backsolve beautifully: a candidate distance turns instantly into two leg times, and their sum either hits the stated total or tells you which way to move.
**est_time_seconds:** 110
**trap_type:** average-of-rates
**hint_nudge:** Pick a choice and compute the two leg times separately. Do they add to 2.5 hours?
**hint_strategy:** Time going is d/30, returning is d/45. Notice the choices divide cleanly by both speeds — that is an invitation to test them.
**related_reading:** quant-01-backsolving

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Three years ago, Pia was four times as old as Quinn was at that time. In five years, Pia will be twice as old as Quinn will be at that time. How old is Pia now?

- A) 17
- B) 19
- C) 21
- D) 23
- E) 27

**answer:** B
**fastest_path:** Prune first: a candidate Pia minus 3 must split evenly into four parts. Only two choices survive that screen; test those.
**explanation:** Each choice is Pia's current age. Three years ago her age was the choice minus 3, and that number must be four times Quinn's age then — so it must be divisible by 4. Run that screen before any real work: 17 - 3 = 14 fails, 19 - 3 = 16 passes, 21 - 3 = 18 fails, 23 - 3 = 20 passes, 27 - 3 = 24 passes. Three candidates die at a glance.

Test B, Pia = 19: three years ago she was 16, so Quinn was 4 then, making Quinn 7 now. In five years: Pia 24, Quinn 12 — and 24 is exactly twice 12. Both conditions hold.

For contrast, D fails the second condition: Pia 23 means Quinn was 5, is 8 now; in five years 28 versus 13, and twice 13 is 26, not 28.

The correct answer is B.
**mistake_a:** Pia = 17 means she was 14 three years ago, and 14 is not divisible by 4 — Quinn's age would not be a whole number. Picked when the divisibility screen is skipped and the arithmetic is rushed.
**mistake_c:** 21 - 3 = 18 also fails the divisibility screen. Tempting because 21 is three times 7, and "three times" echoes the wrong multiplier from the stem.
**mistake_d:** Survives the screen (20 is divisible by 4) but fails the future check: in five years Pia would be 28 while twice Quinn's age is 26. The single-condition checker stops before this test.
**mistake_e:** Also survives the screen (24 divisible by 4), but in five years Pia would be 32 against twice-Quinn of 28. It punishes students who test only the first surviving candidate's first condition and then grab the largest choice "to be safe."
**common_trap:** Translating "in five years, twice as old" as Pia + 5 = 2 times Quinn's current age, forgetting Quinn ages too. Backsolving dodges the translation entirely: you build both future ages from the candidate and read the sentence against them.
**takeaway:** Hidden integer constraints — ages, people, coins must be whole — are free eliminations: screen the choices against divisibility before you test anything in full.
**est_time_seconds:** 120
**trap_type:** hidden-integer-constraint
**hint_nudge:** Three years ago Pia's age must split into four equal whole parts. Which choices even allow that?
**hint_strategy:** From each surviving candidate, build Quinn's current age via the first condition, then check the in-five-years condition — both people age five years.
**related_reading:** quant-01-backsolving

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A street vendor sells cups of lemonade at 2.50 dollars each. If she reduced the price by 0.50 dollars per cup, she would need to sell 20 more cups than she currently sells to take in the same revenue. How many cups does she currently sell?

- A) 40
- B) 60
- C) 80
- D) 90
- E) 100

**answer:** C
**fastest_path:** For each candidate n, compare current revenue 2.50n with discounted revenue 2.00(n + 20); the two move apart in opposite directions around the answer.
**explanation:** Each choice is a candidate current sales count n. Current revenue is 2.50n; the hypothetical revenue is 2.00 times (n + 20). The stem says these are equal.

Test the median choice (C), n = 80: current revenue is 2.50(80) = 200; discounted revenue is 2.00(100) = 200. Equal on the first test.

Worth seeing why the equality is unique: each extra current cup adds 2.50 to the left side but only 2.00 to the right, so the gap between the two revenues moves strictly in one direction — below 80 the discounted scenario earns more, above 80 it earns less.

The correct answer is C.
**mistake_a:** n = 40 gives revenues of 100 versus 120 — the discount scenario wins. This is the unit-confusion answer: reading "20 more" as 20 more dollars of revenue leads to 2.50n = 2.00n + 20 and n = 40. The 20 counts cups, not dollars.
**mistake_b:** n = 60 gives 150 versus 160, still unequal. A stopping point for students who test A, see "too low," and overcorrect to the next choice without retesting.
**mistake_d:** n = 90 gives 225 versus 220 — now the current scenario wins. Picked when the two revenues are computed but compared in the wrong direction.
**mistake_e:** n = 100 gives 250 versus 240. It tempts students who anchor on "100 cups at 2 dollars = 200 dollars" from the C test and then promote the 100 itself to the answer.
**common_trap:** Attaching the 20 to the wrong unit. "Sell 20 more cups" changes the quantity in the discounted scenario; misreading it as 20 more dollars builds an equation that solves to choice A — which is exactly why A is there.
**takeaway:** Revenue equalities backsolve as two quick products per candidate; if the first test does not balance, note which side won — that sign tells you which way along the choices to walk.
**est_time_seconds:** 110
**trap_type:** unit-confusion
**hint_nudge:** For a candidate n, the two revenues are 2.50 times n and 2.00 times (n + 20). The "20 more" counts cups, not dollars.
**hint_strategy:** Test the middle choice and check which scenario earns more. Each added cup widens the gap by 0.50, so the comparison only flips once.
**related_reading:** quant-01-backsolving

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

In a bag, the ratio of red marbles to blue marbles is 5 to 3. If 4 red marbles are removed, the ratio of red to blue becomes 4 to 3. How many blue marbles are in the bag?

- A) 12
- B) 15
- C) 18
- D) 21
- E) 24

**answer:** A
**fastest_path:** Each candidate blue count fixes the red count at five-thirds of it; remove 4 reds and check whether the new ratio is 4 to 3.
**explanation:** Each choice is a candidate blue count b. The original 5:3 ratio fixes red at 5b/3, and the check is whether (5b/3 - 4) to b reduces to 4 to 3.

Test the median choice (C), b = 18: red = 30, and after removing 4 reds the ratio is 26 to 18, which is 13 to 9 — bigger than 4 to 3 (13/9 versus 12/9). The mixture is still too red, and here is the directional insight: removing a fixed 4 marbles dilutes a small bag more than a big one, so a too-red result means the bag is too big. C, D, and E die together.

Test B, b = 15: red = 25, leaving 21 to 15 = 7 to 5 — still above 4 to 3 (1.40 versus 1.33). Eliminate B.

Test A, b = 12: red = 20, leaving 16 to 12 = 4 to 3 exactly.

The correct answer is A.
**mistake_b:** 21 to 15 reduces to 7 to 5, and 7 - 5 = 2 while 4 - 3 = 1 — students comparing ratio gaps instead of ratio values talk themselves into it. The fraction test (1.40 against 1.33) rejects it cleanly.
**mistake_c:** 26 to 18 is "close" to 24 to 18, and rounding the red count down by 2 makes C feel right. Exact ratios do not round.
**mistake_d:** b = 21 means red = 35, leaving 31 to 21 — not even a whole-number ratio match. It catches students who add the removed marbles to blue instead of subtracting from red.
**mistake_e:** b = 24 means red = 40, leaving 36 to 24 = 3 to 2. Tempting because 36 and 24 are such round numbers that the reduction "feels" like a clean answer — but 3 to 2 is not 4 to 3.
**common_trap:** Treating ratio parts as marble counts — assuming 5 red and 3 blue, removing 4, and scaling up from nonsense. A ratio fixes proportions only; backsolving the actual blue count keeps every number concrete.
**takeaway:** Ratio-shift problems backsolve through the unasked quantity: derive red from each candidate blue, apply the change, and compare fractions as decimals to keep the direction of elimination honest.
**est_time_seconds:** 120
**trap_type:** ratio-as-count
**hint_nudge:** If a choice is the blue count, the red count is five-thirds of it. Remove 4 reds and re-form the ratio.
**hint_strategy:** Compare each resulting ratio to 4/3 as decimals (1.33...). Removing a fixed number of marbles changes a small bag's ratio more than a large bag's.
**related_reading:** quant-01-backsolving

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

Aisha spent one-third of her money on a book, then spent 14 dollars on lunch, and then spent half of the money she had left on a gift. If she ended the day with 9 dollars, how much money, in dollars, did she start with?

- A) 36
- B) 42
- C) 45
- D) 48
- E) 54

**answer:** D
**fastest_path:** Run each candidate forward through the three spends in story order — thirds first, then the 14, then the halving — and look for 9 at the end.
**explanation:** The algebraic route means unwinding three operations in reverse. Backsolving runs the story forward instead: each choice is a starting amount, and the three spends are applied in order.

Test the median choice (C), start = 45: the book takes a third (15), leaving 30; lunch takes 14, leaving 16; the gift takes half, leaving 8. That is 1 dollar short of 9 — too small, so the start must be bigger. A, B, and C are eliminated at once.

Test D, start = 48: the book takes 16, leaving 32; lunch takes 14, leaving 18; the gift takes half, leaving 9. Exact match.

The correct answer is D.
**mistake_a:** Start = 36 ends at 5 dollars (36 to 24 to 10 to 5). It is the answer produced by unwinding the operations in the wrong order — doubling 9, then adding 14, then taking two-thirds instead of multiplying by three-halves.
**mistake_b:** Start = 42 ends at 7 (42 to 28 to 14 to 7). Tempting after a reverse-solve slip of subtracting 14 instead of adding it on the way back.
**mistake_c:** Ends at 8 — agonizingly close to 9, and the near-miss is the trap. Forward arithmetic this clean cannot be "off by rounding"; a 1-dollar miss means a wrong answer, full stop.
**mistake_e:** Start = 54 ends at 11 (54 to 36 to 22 to 11), overshooting. Students who skip from C straight past D — "C was barely short, so jump two" — land here.
**common_trap:** Reversing the operation chain to work backward and fumbling one inversion — the order and the operations must both flip, and under time pressure one of them usually doesn't. Running candidates forward uses only the story as written.
**takeaway:** Multi-step spending chains are backsolving gold: the forward simulation is three trivial steps per candidate, and the leftover amount is monotonic in the start, so the directional cut still applies.
**est_time_seconds:** 130
**trap_type:** inverted-operation-order
**hint_nudge:** Do not unwind the story backward. Push each candidate forward through the three spends as written.
**hint_strategy:** Order matters: a third comes off first, then the flat 14, then the halving. More starting money always means more ending money, so eliminate directionally.
**hint_setup:** Ending amount = (start times 2/3 - 14) / 2. Check the middle choice against 9 and cut the field.
**related_reading:** quant-01-backsolving

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

What is the greatest integer n for which n^2 + n < 500?

- A) 20
- B) 21
- C) 22
- D) 24
- E) 26

**answer:** B
**fastest_path:** A candidate must do two things: satisfy the inequality itself, and have the next integer fail it. One check is never enough.
**explanation:** "Greatest integer such that" stems hide a two-sided test. A candidate is correct only if it satisfies the inequality and the next integer up does not — otherwise something greater also works and the candidate is not the greatest.

Test the median choice (C), n = 22: 484 + 22 = 506, which is not less than 500. The inequality fails, so 22 is too big — D and E die with it.

Test B, n = 21: 441 + 21 = 462 < 500. The inequality holds. Now the second half of the test: the next integer, 22, was just shown to fail. So 21 both works and is maximal.

The correct answer is B.
**mistake_a:** n = 20 gives 420 < 500, so it works — but it is not the greatest such integer, because 21 also works. This catches students who scan upward from A and stop at the first success.
**mistake_c:** 22 is the first integer that fails, and "the boundary" feels like the answer. But the question asks for the greatest n that satisfies the inequality, which sits one below the first failure.
**mistake_d:** 24 gives 576 + 24 = 600, far over. Picked from estimating the square root of 500 as "about 24" and forgetting the + n term pushes the total higher.
**mistake_e:** 26 gives 702. Survives only an arithmetic slip like reading n^2 + n as n^2 - n... and even 650 would fail. A pure estimation-gone-wrong answer.
**common_trap:** The off-by-one at the boundary. Both neighbors of the true answer are planted: 20 satisfies the inequality (but is not maximal) and 22 is the first failure (but does not satisfy it). Only the two-sided check separates the three.
**takeaway:** For "greatest n such that" or "least n such that," backsolving needs two verifications per candidate: the condition holds at n, and breaks one step further in the extreme direction.
**est_time_seconds:** 120
**trap_type:** boundary-off-by-one
**hint_nudge:** Being the greatest such integer means two things must be true. What is the second one?
**hint_strategy:** Test the middle choice in the inequality. If it fails, the answer is smaller; if it holds, check whether the next integer up also holds.
**related_reading:** quant-01-backsolving

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

A club consists of boys and girls. If 6 girls left the club, there would be twice as many boys as girls. If instead 4 boys left the club, there would be exactly as many boys as girls. How many girls are in the club?

- A) 14
- B) 16
- C) 18
- D) 20
- E) 22

**answer:** B
**fastest_path:** Each candidate girl count fixes the boy count through the first condition; the second condition then becomes a one-line check.
**explanation:** The stem ties two unknowns together with two scenarios. Backsolving uses the first scenario as a generator — a candidate girl count g forces the boy count to be twice (g - 6) — and the second scenario as the filter.

Test the median choice (C), g = 18: boys = 2(18 - 6) = 24. Check the second scenario: 24 - 4 = 20 boys against 18 girls — boys still outnumber girls by 2, so this candidate overshoots. And the overshoot grows with g (boys rise twice as fast as girls), so D and E fail even harder. Eliminate C, D, E.

Test B, g = 16: boys = 2(10) = 20. Second scenario: 20 - 4 = 16, exactly equal to the 16 girls. Both scenarios hold.

The correct answer is B.
**mistake_a:** g = 14 gives boys = 16, and 16 - 4 = 12 against 14 girls — now the girls outnumber the boys. The undershoot mirror of C, picked when the direction of the elimination is guessed instead of reasoned.
**mistake_c:** Leaves boys ahead by 2 after the walkout. Tempting for students who check only the first scenario — every choice passes that one by construction, which is exactly why it proves nothing alone.
**mistake_d:** 20 is the boy count, not the girl count. The system solves to 20 boys and 16 girls, and the test-writer parks the partner value one slot above the answer.
**mistake_e:** g = 22 gives boys = 32, and 28 versus 22 fails loudly. It survives only the reading "twice as many girls as boys," which flips the multiplier in scenario one.
**common_trap:** Using the first condition to build each candidate and then never testing the second — a generator is not a filter. The boy count (20) also sits among the choices for anyone who loses track of which quantity was asked.
**takeaway:** Two-condition systems backsolve as generate-then-filter: derive the partner quantity from the candidate via one condition, test the other, and let the direction of the miss clear half the field.
**est_time_seconds:** 140
**trap_type:** answered-wrong-quantity
**hint_nudge:** Use the departing-girls scenario to compute the boys for each candidate. Then make the departing-boys scenario the judge.
**hint_strategy:** If g girls are in the club, boys = 2(g - 6). The second scenario demands boys - 4 = g. Notice the gap between those grows as g grows.
**hint_setup:** At the median choice the boys finish 2 ahead after their walkout — decide which way that pushes g before testing again.
**related_reading:** quant-01-backsolving

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

Working alone, machine A completes an order in x hours, and machine B completes the same order in x + 6 hours. Working together at their constant individual rates, the two machines complete the order in 4 hours. What is the value of x?

- A) 4
- B) 5
- C) 6
- D) 8
- E) 10

**answer:** C
**fastest_path:** Kill choice A before computing anything — a machine working alone can never match the two-machine team time. Then test the median survivor in the rate sum.
**explanation:** First, harvest the hidden constraint: together the machines take 4 hours, and adding a second machine always speeds things up, so A alone must take more than 4 hours. Choice A (x = 4) is impossible before any arithmetic — it would mean machine B contributes nothing.

The check for the survivors is the rate equation: 1/x + 1/(x + 6) must equal the combined rate 1/4.

Test C, x = 6: 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. Exact match.

For confidence in the directional logic: rates fall as x rises, so larger candidates (D, E) give combined rates below 1/4 and smaller ones give rates above it — the match is unique.

The correct answer is C.
**mistake_a:** x = 4 echoes the "4 hours" in the stem, and number-matching feels safe under pressure. But then A alone ties the team, which is impossible while B does any work at all — the hidden constraint kills it unexamined.
**mistake_b:** x = 5 gives 1/5 + 1/11 — too fast, no decimals needed: 1/11 is bigger than 1/20, and 1/5 + 1/20 = 4/20 + 1/20 = 1/4 already, so the combined rate beats the required 1/4. Lands on students who add times instead of rates somewhere and back into a smaller x.
**mistake_d:** x = 8 gives 1/8 + 1/14 — too slow, since 1/14 is smaller than 1/8, so the sum stays under 1/8 + 1/8 = 2/8 = 1/4. Picked when 4 + 6 = 10 is split "evenly" into 8 and something, a phantom pattern.
**mistake_e:** x = 10 is the phantom sum of the two numbers in the stem, 4 + 6 — a setup that never modeled anything. Its combined rate, 1/10 + 1/16, is barely 0.16 against the required 0.25; testing exposes it in seconds.
**common_trap:** Forgetting that a together-time bounds every alone-time from below. The test-writer plants the team time itself among the choices, betting you will pattern-match instead of asking whether the candidate is even possible.
**takeaway:** Before any substitution, scan the choices against the problem's physical constraints — impossible candidates die free, and what remains is a two-test backsolve at most.
**est_time_seconds:** 130
**trap_type:** impossible-candidate
**hint_nudge:** Can a machine working alone be as fast as both machines working together?
**hint_strategy:** Rates add: 1/x + 1/(x + 6) must equal 1/4. Test a surviving middle candidate; rates shrink as x grows.
**hint_setup:** With x = 6 the two times are 6 and 12 — fractions with a friendly common denominator. The test-writer chose the numbers to make the right candidate clean.
**related_reading:** quant-01-backsolving

---

## Q28
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

A theater sells balcony tickets for 12 dollars each and floor tickets for 20 dollars each. One evening, the theater sold exactly 180 tickets, and its ticket revenue was greater than 2,800 dollars but less than 2,900 dollars. How many floor tickets were sold that evening?

- A) 78
- B) 80
- C) 85
- D) 95
- E) 100

**answer:** C
**fastest_path:** Each candidate floor count f yields revenue 20f + 12(180 - f); check it against the open interval — strictly between 2,800 and 2,900, endpoints excluded.
**explanation:** Each choice is a candidate floor-ticket count f, which fixes the balcony count at 180 - f and the revenue at 20f + 12(180 - f) = 2160 + 8f. Revenue rises with f, so the directional cut applies — but the target is an interval with strict ends, and that is where this problem bites.

Test the median choice (C), f = 85: revenue = 2160 + 680 = 2,840. Is 2,840 strictly between 2,800 and 2,900? Yes on both sides.

Before celebrating, confirm uniqueness the test demands: B gives 2160 + 640 = 2,800 exactly — and "greater than 2,800" excludes equality, so B fails by the width of a hair. D gives 2160 + 760 = 2,920, past the ceiling. The interval admits only C among the five.

The correct answer is C.
**mistake_a:** f = 78 yields 2160 + 624 = 2,784 — sixteen dollars short of the interval's floor. A range hands you two conditions, and 2,784 passes one of them: it is comfortably under 2,900. The student who starts at A, confirms the ceiling, and never tests "greater than 2,800" certifies a near miss.
**mistake_b:** The boundary trap, and the heart of the question: f = 80 gives exactly 2,800, and "greater than 2,800" is strict. Students who write the condition as "at least 2,800" certify B and move on — one word in the stem separates them from the point.
**mistake_d:** f = 95 gives 2,920, just past the 2,900 ceiling. The "close enough" reflex that survives easy questions gets billed here.
**mistake_e:** f = 100 gives 2,960. It tempts the student who computes balcony revenue only — 12 times 80 is 960 — pattern-matches the 100 remaining, and never totals the two ticket types.
**common_trap:** Treating a strict inequality as inclusive. The test-writer puts the exact-boundary candidate (revenue precisely 2,800) right next to the answer, so the only thing separating B from C is whether "greater than" includes equality. It does not.
**takeaway:** When the target is a range rather than a value, backsolving still works — compute the quantity for each candidate and test membership — but the endpoints deserve a full sentence of attention: strict means the boundary itself is out.
**est_time_seconds:** 170
**trap_type:** boundary-exclusion
**hint_nudge:** Write the revenue for a candidate floor count: 20 per floor ticket, 12 per balcony, 180 tickets total.
**hint_strategy:** Revenue = 2160 + 8f, which rises with f. Find which candidates land inside the interval — then reread whether the ends are included.
**hint_setup:** One candidate lands exactly on 2,800. Decide what "greater than 2,800" does to it before you answer.
**related_reading:** quant-01-backsolving

---

## Q29
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 7x + 5 = 47, what is the value of x?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** A
**explanation:** Backsolving treats each choice as a candidate value of x and checks which one satisfies the equation, so you never have to isolate x. Start at choice A, x = 6: 7(6) + 5 = 42 + 5 = 47, which matches the right-hand side exactly. Because the equation holds on the first test, x = 6 is the answer, and no algebraic manipulation of the constant 5 is needed.
**related_reading:** quant-01-backsolving

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 4(x - 3) = 24, what is the value of x?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** B
**explanation:** Rather than distributing the 4 or dividing both sides, substitute each candidate directly into 4(x - 3) and look for 24. Testing choice B, x = 9: 4(9 - 3) = 4(6) = 24, an exact match. Substituting a concrete number sidesteps the common slip of reading 4(x - 3) as 4x - 3, so x = 9 is confirmed on the first successful test.
**related_reading:** quant-01-backsolving

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

The sum of three consecutive even integers is 78. What is the largest of the three integers?

- A) 24
- B) 26
- C) 28
- D) 30
- E) 32

**answer:** C
**explanation:** Each choice is a candidate for the largest integer, so the three numbers are that choice and the two even integers below it. Test the median choice (C), largest = 28: the integers are 24, 26, 28, which sum to 78, an exact match. Had the sum come out too small you would move to D or E, and too large to A or B, but the median lands it here directly.
**related_reading:** quant-01-backsolving

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

A pen costs 4 dollars more than a pencil. Together, one pen and one pencil cost 20 dollars. How much does the pen cost, in dollars?

- A) 9
- B) 10
- C) 11
- D) 12
- E) 13

**answer:** D
**explanation:** Let each choice be the pen price; the pencil is then 4 dollars cheaper, so the check is one subtraction and one addition. Testing choice D, pen = 12: the pencil is 12 - 4 = 8, and 12 + 8 = 20, satisfying the total. Both stated conditions hold, so the pen costs 12 dollars, while the smaller value 8 (the pencil) is deliberately not among the asked-for choices here.
**related_reading:** quant-01-backsolving

---

## Q33
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Pipe A can fill a tank in 6 hours. With pipe B also open, the tank fills in 4 hours. How many hours would pipe B take to fill the tank alone?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** E
**explanation:** The algebraic relationship is 1/6 + 1/B = 1/4, but backsolving lets each choice stand in for B's solo time and checks the combined rate directly. Test choice E, B = 12: the combined rate is 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 tank per hour, which fills the tank in exactly 4 hours. Since rates add while times do not, substituting a candidate into the rate sum exposes any shortcut that subtracts or averages the times, confirming B = 12.
**related_reading:** quant-01-backsolving

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A father is currently five times as old as his son. In 6 years, the father will be three times as old as his son will be then. How old is the father now?

- A) 30
- B) 33
- C) 36
- D) 39
- E) 42

**answer:** A
**explanation:** Each choice is the father's current age, and since he is five times his son's age, the son's age is that choice divided by 5. Test choice A, father = 30: the son is 6 now, so in 6 years the father is 36 and the son is 12, and 36 is exactly three times 12. Both conditions hold, and checking the plain-English future condition against concrete ages avoids the classic mistranslation of "in 6 years" that ignores the son aging too.
**related_reading:** quant-01-backsolving

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A jar contains 20 coins, all of which are dimes (10 cents) and quarters (25 cents), with a total value of 3.80 dollars. How many quarters are in the jar?

- A) 10
- B) 12
- C) 14
- D) 16
- E) 18

**answer:** B
**explanation:** Each choice is a candidate count of quarters; the dimes are then 20 minus that count, and the total value in cents must reach 380. Test choice B, 12 quarters: there are 8 dimes, giving 12(25) + 8(10) = 300 + 80 = 380 cents, an exact match. Letting one choice fix the quarter count and deriving the dimes turns the two-variable system into a single substitution to verify.
**related_reading:** quant-01-backsolving

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Service X charges a one-time setup fee of 48 dollars plus 3 dollars per month. Service Y charges no setup fee and 9 dollars per month. After how many months is the total amount paid to Service X equal to the total amount paid to Service Y?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**explanation:** Each choice is a candidate number of months; Service X's total is the flat 48 plus 3 per month, and Service Y's total is 9 per month, so compute both and compare. Test choice C, m = 8: Service X costs 48 + 3(8) = 72, and Service Y costs 9(8) = 72, so the totals are equal. The key is that the setup fee is paid once rather than monthly, and the gap between the two totals shrinks by 6 dollars each month, so exactly one month count balances them.
**related_reading:** quant-01-backsolving

---

## Q37
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving

A 40-liter solution is 25 percent salt. How many liters of pure salt must be added so that the resulting solution is 50 percent salt?

- A) 5
- B) 10
- C) 15
- D) 20
- E) 25

**answer:** D
**explanation:** The starting solution holds 25 percent of 40 = 10 liters of salt, and adding x liters of pure salt raises both the salt to 10 + x and the total volume to 40 + x. Test choice D, x = 20: the mixture is (10 + 20)/(40 + 20) = 30/60 = 50 percent, an exact match. The trap is freezing the denominator at 40, but every liter of salt added lands in both the salt total and the overall volume, so rebuilding the full fraction for each candidate keeps the check honest.
**related_reading:** quant-01-backsolving

---

## Q38
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Backsolving

If x is a positive integer, what is the value of x?

(1) x^2 - 7x + 12 = 0
(2) x < 4

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** The question asks for a single value of x, so a statement is sufficient only if it pins x to exactly one number. Statement (1) factors as (x - 3)(x - 4) = 0, allowing x = 3 or x = 4, two values, so it is not sufficient alone. Statement (2) says x < 4, which leaves the positive integers 1, 2, and 3, also not sufficient alone. Combining them, x must be a root of the quadratic and less than 4, which uniquely forces x = 3 because x = 4 is excluded, so both statements together are sufficient and the answer is C.
**related_reading:** quant-01-backsolving

---

## Q39
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Backsolving

A jar contains only nickels (5 cents) and dimes (10 cents), and there are 24 coins in total. How many dimes are in the jar?

(1) The total value of the coins is 1.60 dollars.
(2) There are twice as many nickels as dimes.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** With n nickels and d dimes and the stem giving n + d = 24, each statement need only produce one more independent equation to determine d. Statement (1) gives 5n + 10d = 160; substituting n = 24 - d yields 5(24 - d) + 10d = 120 + 5d = 160, so 5d = 40 and d = 8, a unique value, so statement (1) is sufficient. Statement (2) gives n = 2d, so n + d = 3d = 24 and d = 8, also a unique value, so statement (2) is sufficient on its own. Since each statement alone determines the number of dimes, the answer is D.
**related_reading:** quant-01-backsolving

---

## Q40
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Backsolving

If n is a positive integer, what is the value of n?

(1) n is a factor of 12.
(2) n is a prime number that is greater than 2 and less than 5.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The question asks for one specific value of n, so each statement must be checked against the full set of candidates it permits. Statement (1) lists the factors of 12 as 1, 2, 3, 4, 6, and 12, which is six possible values, so it is not sufficient alone. Statement (2) requires a prime strictly between 2 and 5, and the only integer in that range that is prime is 3 (4 is not prime), so it pins n to a single value and is sufficient alone. Because statement (2) by itself determines n while statement (1) does not, the answer is B.
**related_reading:** quant-01-backsolving

---

## Q41
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 9x - 4 = 41, what is the value of x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**explanation:** Backsolving treats each choice as a candidate value of x and checks which one satisfies the equation, so no algebra is required. Start at the median choice (C), x = 5: 9(5) - 4 = 45 - 4 = 41, which matches the right-hand side exactly. Because the equation holds on the first test, x = 5 is the answer, and substituting a concrete number avoids any slip in isolating the variable.
**related_reading:** quant-01-backsolving

---

## Q42
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

40% of what number is equal to 30?

- A) 60
- B) 65
- C) 70
- D) 75
- E) 80

**answer:** D
**explanation:** Each choice is a candidate for "what number," so take 40 percent of it and compare to 30. Testing the median choice (C), 40 percent of 70 = 28, which is too small, so the number must be larger and choices A, B, and C are eliminated at once. Testing D, 40 percent of 75 = 30, an exact match, so the number is 75; plugging each choice in as the unknown total keeps the percent relationship modeled correctly.
**related_reading:** quant-01-backsolving

---

## Q43
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

A notebook costs 5 dollars more than a pen. Together, one notebook and one pen cost 23 dollars. How much does the notebook cost, in dollars?

- A) 11
- B) 12
- C) 13
- D) 14
- E) 15

**answer:** D
**explanation:** Let each choice be the notebook price; the pen is then 5 dollars cheaper, so the check is one subtraction and one addition. Testing choice D, notebook = 14: the pen is 14 - 5 = 9, and 14 + 9 = 23, which satisfies the total. Both stated conditions hold, so the notebook costs 14 dollars, while the smaller value 9 (the pen) is deliberately the partner quantity the question does not ask for.
**related_reading:** quant-01-backsolving

---

## Q44
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

After a 20 percent discount, a backpack sells for 60 dollars. What was the original price of the backpack, in dollars?

- A) 70
- B) 72
- C) 75
- D) 78
- E) 80

**answer:** C
**explanation:** Each choice is a candidate original price, and a 20 percent discount means the sale price is 80 percent of the original, so the check is a single multiplication. Testing choice C, original = 75: 80 percent of 75 = 0.8 times 75 = 60, an exact match. Running the discount forward from each candidate avoids the wrong-base trap of adding 20 percent of the sale price back, since the discount was taken on the larger original amount.
**related_reading:** quant-01-backsolving

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A rectangular field is 5 meters longer than it is wide, and its area is 126 square meters. What is the width of the field, in meters?

- A) 9
- B) 10
- C) 11
- D) 12
- E) 13

**answer:** A
**explanation:** The algebraic route is w(w + 5) = 126, a quadratic, but backsolving skips it: each choice is a candidate width and the length is just width + 5, so you only multiply. Testing choice A, width = 9: the length is 9 + 5 = 14, and 9 times 14 = 126, an exact match. Had A come out too small you would move up the list, but the median is not always the answer, and here the smallest choice lands it directly because the product grows quickly with width.
**related_reading:** quant-01-backsolving

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Pipe A can fill a tank in 4 hours. With pipe B also open, the tank fills in 2.4 hours. How many hours would pipe B take to fill the tank alone?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** B
**explanation:** The algebraic relationship is 1/4 + 1/B = 1/2.4, but backsolving lets each choice stand in for B's solo time and checks the combined rate directly. Testing choice B, B = 6: the combined rate is 1/4 + 1/6 = 3/12 + 2/12 = 5/12 tank per hour, and 1 divided by 5/12 is 12/5 = 2.4 hours, matching the stated together-time exactly. Because rates add while times do not, substituting a candidate into the rate sum exposes any shortcut that subtracts or averages the times, confirming B = 6.
**related_reading:** quant-01-backsolving

---

## Q47
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A jar contains 30 coins, all of which are dimes (10 cents) and quarters (25 cents), with a total value of 5.40 dollars. How many quarters are in the jar?

- A) 12
- B) 14
- C) 16
- D) 18
- E) 20

**answer:** C
**explanation:** Each choice is a candidate count of quarters; the dimes are then 30 minus that count, and the total value in cents must reach 540. Testing the median choice (C), 16 quarters: there are 14 dimes, giving 16(25) + 14(10) = 400 + 140 = 540 cents, an exact match. Letting one choice fix the quarter count and deriving the dimes turns the two-variable system into a single substitution to verify, with no equations to solve.
**related_reading:** quant-01-backsolving

---

## Q48
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A mother is currently three times as old as her daughter. In 10 years, the mother will be twice as old as her daughter will be then. How old is the mother now?

- A) 25
- B) 30
- C) 35
- D) 40
- E) 45

**answer:** B
**explanation:** Each choice is the mother's current age, and since she is three times her daughter's age, the daughter's age is that choice divided by 3. Testing choice B, mother = 30: the daughter is 10 now, so in 10 years the mother is 40 and the daughter is 20, and 40 is exactly twice 20. Both conditions hold, and several wrong choices announce themselves immediately because dividing by 3 gives a non-integer current age for the daughter. Checking the plain-English future condition against concrete ages avoids the classic mistranslation that forgets the daughter also ages ten years.
**related_reading:** quant-01-backsolving

---

## Q49
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A gym charges a one-time enrollment fee of 42 dollars plus 5 dollars per visit. A drop-in studio charges no enrollment fee and 12 dollars per visit. After how many visits is the total amount paid to the gym equal to the total amount paid to the studio?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** E
**explanation:** Each choice is a candidate number of visits; the gym's total is the flat 42 plus 5 per visit, and the studio's total is 12 per visit, so compute both and compare. Testing choice E, v = 6: the gym costs 42 + 5(6) = 72, and the studio costs 12(6) = 72, so the totals are equal. The enrollment fee is paid once rather than per visit, and the gap between the two totals shrinks by 7 dollars each visit, so exactly one visit count balances them.
**related_reading:** quant-01-backsolving

---

## Q50
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Backsolving

If x is a positive integer, what is the value of x?

(1) x^2 = 49
(2) x is a multiple of 7 that is less than 10

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** The question asks for one specific value of x, and the stem already restricts x to positive integers. Statement (1) gives x^2 = 49, whose solutions are 7 and -7, but only x = 7 is a positive integer, so it pins x to a single value and is sufficient alone. Statement (2) requires a positive multiple of 7 less than 10, and the only such value is 7 itself, so it is also sufficient alone. Because each statement independently determines x = 7, the answer is D.
**related_reading:** quant-01-backsolving

---

## Q51
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Backsolving

A jar contains only dimes (10 cents) and quarters (25 cents), and there are 18 coins in total. How many quarters are in the jar?

(1) The total value of the coins is 3.30 dollars.
(2) There are more dimes than quarters.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** With q quarters and 18 - q dimes, each statement must determine q uniquely to be sufficient. Statement (1) gives 25q + 10(18 - q) = 330, which simplifies to 15q + 180 = 330, so 15q = 150 and q = 10, a single value, making statement (1) sufficient. Statement (2) only says dimes exceed quarters, meaning 18 - q > q, so q < 9, which allows q to be 0 through 8, many possible values, so it is not sufficient alone. Because statement (1) alone determines q while statement (2) does not, the answer is A.
**related_reading:** quant-01-backsolving

---

## Q52
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Backsolving

If n is a positive integer, what is the value of n?

(1) n^2 - 5n + 6 = 0
(2) n is even

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** The question asks for a single value of n, so a statement is sufficient only if it isolates exactly one value. Statement (1) factors as (n - 2)(n - 3) = 0, allowing n = 2 or n = 3, two values, so it is not sufficient alone. Statement (2) says n is even, which permits infinitely many positive integers, so it is not sufficient alone. Combining them, n must be a root of the quadratic and even, which leaves only n = 2 since 3 is odd, so both statements together are sufficient and the answer is C.
**related_reading:** quant-01-backsolving

---
