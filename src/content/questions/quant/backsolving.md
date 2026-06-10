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
**skill:** linear-equation-by-substitution
**trap_type:** algebra-by-default
**est_time_seconds:** 50

If 4x + 9 = 33, what is the value of x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** D
**fastest_path:** Drop the median choice into 4x + 9 and read off whether you land above or below 33.
**explanation:** Each choice is a candidate for x, so substitute and compare the left side to 33.

Test the median choice (C), x = 5: 4(5) + 9 = 20 + 9 = 29. That falls short of 33, so x must be larger — A, B, and C all die at once.

Test D, x = 6: 4(6) + 9 = 24 + 9 = 33. Exact match.

The correct answer is D.
**mistake_a:** Picks up the "3" from a careless 33 - 9 = 24 then 24 ÷ 4 = 6 misread back to a single digit; 3 is far below what the equation needs.
**mistake_b:** Lands here by treating the 9 as if it were added after multiplying, e.g. solving 4x = 33 then nudging down — still too small.
**mistake_c:** The reflex "start at C and stop" answer. C is the natural first test, but 29 ≠ 33, so it must be eliminated rather than selected.
**mistake_e:** Overshoots by subtracting 9 from the wrong side or rounding 6.x up; 4(7) + 9 = 37, past the target.
**common_trap:** Treating C as the answer simply because it is where backsolving starts. The median is the first *test*, not a default pick.
**takeaway:** A single substitution that comes out too low eliminates the entire lower half of a sorted list — then step up one.
**related_reading:** quant-01-backsolving

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving
**skill:** linear-equation-by-substitution
**trap_type:** order-of-operations-slip
**est_time_seconds:** 55

If (x / 4) - 2 = 3, what is the value of x?

- A) 16
- B) 20
- C) 24
- D) 28
- E) 32

**answer:** B
**fastest_path:** Divide each choice by 4, subtract 2, and check for 3.
**explanation:** Each choice is a candidate for x, so run it through "divide by 4, then subtract 2."

Test the median choice (C), x = 24: (24 / 4) - 2 = 6 - 2 = 4. That is one too many, so x must be smaller — D and E are out along with C.

Test B, x = 20: (20 / 4) - 2 = 5 - 2 = 3. Exact match.

The correct answer is B.
**mistake_a:** Comes from subtracting before dividing — reading "(x - 2)/4 = 3" and solving x = 14, then snapping to the nearest listed value.
**mistake_c:** The median test itself: it yields 4, not 3, so it is the signpost to move down, not the answer.
**mistake_d:** Adds the 2 to the wrong side, solving x/4 = 5 - 2 wait reversed into x/4 = 7, giving 28.
**mistake_e:** Multiplies the 3 and 4 first and then adds 8 instead of subtracting, inflating x to 32.
**common_trap:** Collapsing "(x / 4) - 2" into "(x - 2) / 4" — the grouping changes the answer entirely.
**takeaway:** When a choice tests one notch too high, the answer is the next choice down; you rarely need more than two substitutions.
**related_reading:** quant-01-backsolving

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving
**skill:** percent-increase-reversal
**trap_type:** answer-is-a-given-value
**est_time_seconds:** 65

After a 20% raise, an employee's salary is $54,000. What was the salary before the raise?

- A) $45,000
- B) $48,000
- C) $50,000
- D) $52,000
- E) $54,000

**answer:** A
**fastest_path:** Add 20% to each candidate starting salary and look for $54,000 — no division by 1.2 needed.
**explanation:** Each choice is a candidate for the original salary, so raise it by 20% (multiply by 1.2) and compare to 54,000.

Test the median choice (C), 50,000: 50,000 × 1.2 = 60,000. Too high, so the starting salary must be lower — D and E fall away too.

Test B, 48,000: 48,000 × 1.2 = 57,600. Still too high.

Test A, 45,000: 45,000 × 1.2 = 54,000. Exact match.

The correct answer is A.
**mistake_b:** A plausible "a bit less than 54k" guess, but a 20% raise on 48,000 reaches 57,600, overshooting.
**mistake_c:** The clean round number that feels like the answer; 20% of it is 60,000, well past the target.
**mistake_d:** Splits the difference between 50k and 54k, but 52,000 raised 20% is 62,400 — far too high.
**mistake_e:** The salary *after* the raise, lifted straight from the stem. The question asks for the figure before it.
**common_trap:** Lifting 54,000 (E) directly from the problem because it is the number you just read. Always re-read which quantity the stem wants.
**takeaway:** "Reverse a percent change" stems invite division; backsolving turns them into a forward multiply, which is faster and harder to fumble.
**related_reading:** quant-01-backsolving

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving
**skill:** linear-equation-by-substitution
**trap_type:** distribution-error
**est_time_seconds:** 50

If 2(x - 3) = 14, what is the value of x?

- A) 7
- B) 8
- C) 9
- D) 10
- E) 11

**answer:** D
**fastest_path:** Substitute the median choice into 2(x - 3) and check against 14.
**explanation:** Each choice is a candidate for x, so plug it into 2(x - 3).

Test the median choice (C), x = 9: 2(9 - 3) = 2(6) = 12. Just short of 14, so x must be a little larger.

Test D, x = 10: 2(10 - 3) = 2(7) = 14. Exact match.

The correct answer is D.
**mistake_a:** Comes from distributing wrong to 2x - 3 = 14, giving 2x = 17 and an x near 8.5 that gets rounded down to 7 or 8.
**mistake_b:** The rounded partner of that same mis-distribution (2x - 3 = 14).
**mistake_c:** The median test, which yields 12 — close enough to tempt a stop, but not equal to 14.
**mistake_e:** Overshoots by adding 3 instead of working from the parentheses; 2(11 - 3) = 16.
**common_trap:** Distributing the 2 to only the x and forgetting the -3 becomes -6. Substituting a concrete number never triggers a distribution slip.
**takeaway:** Parentheses are where careless multipliers go wrong; backsolving evaluates them exactly as written.
**related_reading:** quant-01-backsolving

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving
**skill:** reciprocal-relationship
**trap_type:** inverted-operation
**est_time_seconds:** 50

If 60 / x = 4, what is the value of x?

- A) 10
- B) 12
- C) 15
- D) 20
- E) 24

**answer:** C
**fastest_path:** Divide 60 by each choice and look for the quotient 4.
**explanation:** Each choice is a candidate for x, so divide 60 by it and check whether you get 4.

Test the median choice (C), x = 15: 60 / 15 = 4. Exact match on the first test.

The correct answer is C.
**mistake_a:** 60 / 10 = 6, not 4 — tempting if you guess that a smaller divisor "feels right."
**mistake_b:** 60 / 12 = 5, one short of 4; a near-miss that looks close.
**mistake_d:** Comes from multiplying instead of dividing somewhere, or from 60 / 20 = 3 misread as the target.
**mistake_e:** The product 6 × 4 = 24 reasoning, treating x as the result of multiplying rather than dividing.
**common_trap:** Reading "60 / x = 4" as "x = 60 × 4" and inflating the answer. The variable is the divisor, not the product.
**takeaway:** When the unknown sits in a denominator, substitution sidesteps the cross-multiply step where signs and inversions go wrong.
**related_reading:** quant-01-backsolving

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** relative-speed-catch-up
**trap_type:** misread-relationship
**est_time_seconds:** 95

A truck passes a checkpoint traveling at 30 miles per hour. Two hours later a car passes the same checkpoint in the same direction at 50 miles per hour. How many hours after the car passes the checkpoint does it catch up to the truck?

- A) 1.5
- B) 2
- C) 2.5
- D) 3
- E) 4

**answer:** D
**fastest_path:** For each choice t, compare the car's distance 50t to the truck's distance 60 + 30t; pick the t where they are equal.
**explanation:** When the car passes the checkpoint, the truck is already 30 × 2 = 60 miles ahead. Measuring from that moment, after t hours the car has gone 50t miles and the truck is at 60 + 30t miles. The car catches up when those are equal.

Test the median choice (C), t = 2.5: car = 125, truck = 60 + 75 = 135. The car is still 10 miles behind, so it needs more time.

Test D, t = 3: car = 150, truck = 60 + 90 = 150. They meet exactly.

The correct answer is D.
**mistake_a:** Divides the 60-mile gap by the car's full speed misread as 40, or otherwise undercounts the head start.
**mistake_b:** 60 / 30 = 2, treating the gap as if it closed at the truck's speed rather than the 20 mph *relative* speed.
**mistake_c:** The median test, where the car is still 10 miles short — a signal to go up, not the answer.
**mistake_e:** Overshoots by dividing the gap by a too-small relative speed (e.g. 60 / 15), or by adding the 2-hour delay back in twice.
**common_trap:** Forgetting the truck keeps moving during the chase. The gap closes at the *difference* of the speeds (20 mph), not at either speed alone.
**takeaway:** In catch-up problems, backsolving each candidate time keeps both vehicles moving in your arithmetic, so the relative-speed idea takes care of itself.
**hint_nudge:** When the car reaches the checkpoint, how far ahead is the truck already?
**hint_strategy:** After t hours the car has traveled 50t and the truck 60 + 30t. Find the t that makes them equal.
**related_reading:** quant-01-backsolving

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** dilution-concentration
**trap_type:** distractor-is-a-given-value
**est_time_seconds:** 90

A 30-liter solution is 40% salt. How many liters of pure water must be added so that the resulting solution is 25% salt?

- A) 12
- B) 15
- C) 18
- D) 20
- E) 24

**answer:** C
**fastest_path:** The salt stays fixed at 12 liters; for each choice, check whether 12 over the new total equals 25%.
**explanation:** The amount of salt never changes — adding water only grows the total. The solution starts with 40% of 30 = 12 liters of salt. After adding w liters of water the total is 30 + w, and the concentration is 12 / (30 + w).

Test the median choice (C), w = 18: total = 48, and 12 / 48 = 0.25 = 25%. Exact match.

The correct answer is C.
**mistake_a:** 12 is the *amount of salt*, lifted from the setup — a classic "grab a number you computed" error.
**mistake_b:** w = 15 gives 12 / 45 ≈ 26.7%, close to 25% but not equal; tempting if you stop at "about right."
**mistake_d:** Comes from halving the original 30% style reasoning or setting up 30 / (30 + w) instead of tracking salt.
**mistake_e:** Doubling the volume (adding 30) over-dilutes to 20%; w = 24 overshoots past the target.
**common_trap:** Letting the salt quantity drift. The added water is pure, so the 12 liters of salt is the one fixed anchor in the problem.
**takeaway:** In dilution problems the solute is constant — backsolving against the fixed solute amount is faster and steadier than re-deriving concentration algebra.
**hint_strategy:** Salt stays at 12 liters. You are choosing the new total volume so that 12 is 25% of it.
**related_reading:** quant-01-backsolving

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** ratio-with-difference-constraint
**trap_type:** ignored-divisibility
**est_time_seconds:** 90

In a class, the ratio of boys to girls is 4 : 5. If there are 9 more girls than boys, how many students are in the class?

- A) 45
- B) 54
- C) 63
- D) 72
- E) 81

**answer:** E
**fastest_path:** Each total splits into 9 ratio-parts; divide by 9 to get the part size, then check that one extra part equals the 9-student gap.
**explanation:** Boys and girls split the class into 4 + 5 = 9 equal parts, so any valid total is a multiple of 9 and the girl-boy gap is exactly one part. The gap must be 9, so one part is 9, making the total 9 × 9 = 81. Backsolving confirms it directly.

Test the median choice (C), 63: one part = 63 / 9 = 7, so boys = 28, girls = 35, a gap of 7 — too small.

Test E, 81: one part = 81 / 9 = 9, boys = 36, girls = 45, a gap of 9. Exact match.

The correct answer is E.
**mistake_a:** 45 gives a part of 5 and a gap of 5; tempting because 45 is the smallest clean multiple of 9 listed.
**mistake_b:** 54 yields a part of 6 and a gap of 6 — still short of 9.
**mistake_c:** The median test, gap 7, which points upward rather than being the answer.
**mistake_d:** 72 gives a part of 8 and a gap of 8 — one notch shy of the required 9.
**common_trap:** Anchoring on the ratio numbers (4 and 5) and ignoring that the *difference* of one part must equal the stated gap of 9.
**takeaway:** Ratio problems with an absolute difference are pure backsolving fodder — each total fixes the part size, and the difference is one part.
**related_reading:** quant-01-backsolving

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** simple-interest-reversal
**trap_type:** percent-of-wrong-base
**est_time_seconds:** 95

A sum invested at 5% simple annual interest grows to $1,260 after 4 years. What was the original principal?

- A) $1,008
- B) $1,050
- C) $1,100
- D) $1,150
- E) $1,200

**answer:** B
**fastest_path:** Over 4 years at 5%, the total is 1.2 times the principal; multiply each choice by 1.2 and look for 1,260.
**explanation:** Simple interest adds 5% × 4 = 20% of the principal, so the final amount is principal × 1.2. Each choice is a candidate principal.

Test the median choice (C), 1,100: 1,100 × 1.2 = 1,320. Too high, so the principal is smaller.

Test B, 1,050: 1,050 × 1.2 = 1,260. Exact match.

The correct answer is B.
**mistake_a:** 1,008 = 1,260 × 0.8, the result of *subtracting* 20% from the final amount instead of dividing by 1.2 — the most common reversal error.
**mistake_c:** The median test, 1,320, which overshoots and signals "go lower."
**mistake_d:** 1,150 × 1.2 = 1,380, further past the target; tempting as a round-ish midpoint guess.
**mistake_e:** 1,200 looks like a clean principal, but 1,200 × 1.2 = 1,440, well above 1,260.
**common_trap:** Taking 20% *of the final amount* and subtracting it. The 20% is measured against the principal, not the grown total.
**takeaway:** "Find the original before a percent gain" means divide by (1 + rate), never subtract the rate from the new figure — and backsolving makes that a forward multiply.
**related_reading:** quant-01-backsolving

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** successive-fractions-of-remaining
**trap_type:** algebra-by-default
**est_time_seconds:** 105

A traveler spent 1/3 of her money on a hotel, then 1/4 of what remained on food, and was left with $90. How much money did she start with?

- A) $120
- B) $150
- C) $160
- D) $180
- E) $240

**answer:** D
**fastest_path:** Walk each choice forward — subtract a third, then a quarter of the rest — and see which leaves $90.
**explanation:** Setting up algebra means tracking two nested fractions; backsolving just runs each starting amount through the two spends. Choices that divide cleanly by 3 (and then by 4) signal where the arithmetic stays whole.

Test D, 180: hotel takes 1/3 = 60, leaving 120; food takes 1/4 of 120 = 30, leaving 90. Exact match.

For contrast, test E, 240: hotel 80, leaving 160; food 40, leaving 120 — too much money left, so the start was smaller.

The correct answer is D.
**mistake_a:** Starting at 120 leaves only 60 at the end (hotel 40, food 20); too little remains.
**mistake_b:** 150 is not divisible by 3 into a clean food step the same way — it leaves 75, not 90.
**mistake_c:** 160 doesn't even survive the first step cleanly (a third is 53.33), a hint that it is not the intended start; tempting if you stop at "close to 180."
**mistake_e:** 240 leaves 120, the classic "off by one bracket" overshoot — it ignores that two successive cuts shrink the money fast.
**common_trap:** Adding the fractions 1/3 + 1/4 as if they apply to the same base. The 1/4 applies to what *remains* after the first spend, not to the original.
**takeaway:** "Fraction of the remainder" stems compound, not add — backsolving forward through each stage keeps the shrinking base honest.
**hint_nudge:** The 1/4 is taken from what is left *after* the hotel, not from the starting amount.
**hint_strategy:** After the hotel she has 2/3 left; after food she has 3/4 of that. Try a start divisible by both 3 and 4.
**related_reading:** quant-01-backsolving

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** consecutive-integer-product
**trap_type:** wrong-quantity-reported
**est_time_seconds:** 80

The product of two consecutive positive integers is 156. What is the larger of the two integers?

- A) 12
- B) 13
- C) 14
- D) 15
- E) 16

**answer:** B
**fastest_path:** Treat each choice as the larger integer, multiply it by the integer just below, and look for 156.
**explanation:** Each choice is a candidate for the larger integer, so the two numbers are that choice and the one below it. No quadratic required.

Test the median choice (C), 14: 13 × 14 = 182. Too big, so the larger integer is smaller.

Test B, 13: 12 × 13 = 156. Exact match.

The correct answer is B.
**mistake_a:** 12 is the *smaller* of the correct pair (12 × 13 = 156). The stem asks for the larger one — a one-step misread.
**mistake_c:** The median test, 182, which overshoots and points down.
**mistake_d:** 15 × 14 = 210, chosen by someone who tries pairs upward from a wrong starting guess.
**mistake_e:** 16 × 15 = 240; a far overshoot, tempting only if you never test the middle first.
**common_trap:** Solving n(n + 1) = 156 to get n = 12 and reporting that, forgetting the question wants n + 1. Backsolving the *larger* integer answers the exact question asked.
**takeaway:** Read which member of a pair the stem wants before you commit; backsolving the requested quantity removes the "solved for the wrong thing" error.
**related_reading:** quant-01-backsolving

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving
**skill:** two-item-revenue-mix
**trap_type:** directional-reasoning
**est_time_seconds:** 100

A theater sold adult tickets at $12 each and child tickets at $8 each. It sold 200 tickets for a total of $2,040. How many child tickets were sold?

- A) 90
- B) 100
- C) 110
- D) 120
- E) 130

**answer:** A
**fastest_path:** For each child count c, the adults are 200 - c; compute 8c + 12(200 - c) and aim for 2,040.
**explanation:** Each choice is a candidate number of child tickets, so the adult tickets are 200 minus that. Total revenue is 8c + 12(200 - c).

Test the median choice (C), c = 110: adults = 90, revenue = 110 × 8 + 90 × 12 = 880 + 1,080 = 1,960. That is below 2,040 — and since child tickets are cheaper, fewer of them means *more* revenue, so c must be smaller.

Test A, c = 90: adults = 110, revenue = 90 × 8 + 110 × 12 = 720 + 1,320 = 2,040. Exact match.

The correct answer is A.
**mistake_b:** c = 100 splits the tickets evenly, revenue = 800 + 1,200 = 2,000 — close to the target but $40 short.
**mistake_c:** The median test, 1,960, which is below target; the directional cue (cheaper item) says go *down* in c.
**mistake_d:** c = 120 pushes revenue to 960 + 960 = 1,920, the wrong direction entirely.
**mistake_e:** c = 130 gives 1,040 + 840 = 1,880; chosen by someone who moves the wrong way after the median test.
**common_trap:** Moving the count in the wrong direction after the first test. Because child tickets cost less, raising c *lowers* total revenue — the directional logic is inverted from intuition.
**takeaway:** When a test misses, decide which way to move using the price gap, not a guess; backsolving makes the direction concrete on the very next choice.
**hint_strategy:** Adults = 200 - c. Total = 8c + 12(200 - c). Note that more child tickets pulls revenue down, since they are cheaper.
**related_reading:** quant-01-backsolving

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving
**skill:** difference-of-squares-recognition
**trap_type:** wrong-quantity-reported
**est_time_seconds:** 120

The product of two consecutive odd integers is 195. What is the even integer that lies exactly between them?

- A) 12
- B) 13
- C) 14
- D) 15
- E) 16

**answer:** C
**fastest_path:** Call the middle even number m; the two odd integers are m - 1 and m + 1, so test (m - 1)(m + 1) = m² - 1 against 195.
**explanation:** Two consecutive odd integers straddle a single even number. If that even number is m, the odds are m - 1 and m + 1, and their product is (m - 1)(m + 1) = m² - 1. So you only need m² - 1 = 195, i.e. m² = 196.

Test the median choice (C), m = 14: 14² - 1 = 196 - 1 = 195. Exact match — the odds are 13 and 15.

The correct answer is C.
**mistake_a:** 12² - 1 = 143; too small, and 12 is below the pair entirely.
**mistake_b:** 13 is one of the two odd integers (13 × 15 = 195), not the even number between them — the most tempting trap.
**mistake_d:** 15 is the *other* odd integer in the pair, equally tempting for the same misread.
**mistake_e:** 16² - 1 = 255; an overshoot for someone testing upward without the difference-of-squares shortcut.
**common_trap:** Selecting 13 or 15 — the actual integers whose product is 195 — instead of the even number the stem asks for.
**takeaway:** Symmetric pairs collapse to "(middle)² - (gap)²"; spotting the difference of squares turns a messy factoring into one clean square root, but you still must report the quantity asked.
**hint_nudge:** The number between the two odds is even — what are the two odds in terms of it?
**hint_strategy:** If the even number is m, the odds are m - 1 and m + 1, so their product is m² - 1. Set that to 195.
**related_reading:** quant-01-backsolving

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving
**skill:** drain-and-replace-mixture
**trap_type:** ignored-removal-step
**est_time_seconds:** 135

A 12-liter mixture is 25% acid. Some of the mixture is drained off and replaced with an equal volume of pure acid, raising the concentration to 50%. How many liters were drained and replaced?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 8

**answer:** B
**fastest_path:** For each choice x, the new acid is (3 - 0.25x) + x; check whether it equals 6 liters (half of 12).
**explanation:** The mixture starts with 25% of 12 = 3 liters of acid. Draining x liters of *mixture* removes 0.25x liters of acid; adding x liters of *pure* acid puts back x liters. The volume stays 12, so 50% acid means 6 liters of acid. The new acid is 3 - 0.25x + x = 3 + 0.75x, and you want that to equal 6.

Test the median choice (C), x = 5: 3 + 0.75(5) = 3 + 3.75 = 6.75 liters of acid → 56.25%, too strong, so less should be replaced.

Test B, x = 4: 3 + 0.75(4) = 3 + 3 = 6 liters → exactly 50%.

The correct answer is B.
**mistake_a:** x = 3 comes from ignoring that draining removes acid: setting 3 + x = 6 gives x = 3. It double-counts the original acid.
**mistake_c:** The median test, 56.25%, which overshoots — the signal to drain less, not the answer.
**mistake_d:** x = 6 (draining half) over-concentrates to 3 + 4.5 = 7.5 liters → 62.5%.
**mistake_e:** x = 8 floods the mix with acid (3 + 6 = 9 liters → 75%), far past 50%.
**common_trap:** Forgetting that the drained liters carry acid out with them. The net acid gain per replaced liter is 1 - 0.25 = 0.75, not a full liter.
**takeaway:** Drain-and-replace changes the solute twice — out with the drained fraction, in with the pure addition. Track both, and a single substitution settles it.
**hint_nudge:** Draining the mixture removes some acid before you add the pure acid back.
**hint_strategy:** New acid = 3 - 0.25x + x. You want it to equal 6 liters (50% of the unchanged 12-liter volume).
**related_reading:** quant-01-backsolving

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving
**skill:** two-constraint-digit-problem
**trap_type:** one-condition-satisfied
**est_time_seconds:** 140

When a certain two-digit number is divided by the sum of its digits, the quotient is exactly 7 with no remainder. Also, its tens digit is 1 greater than its units digit. What is the number?

- A) 21
- B) 32
- C) 42
- D) 63
- E) 84

**answer:** A
**fastest_path:** Each choice is a concrete number — check both plain-English conditions against it and keep the one that passes both.
**explanation:** Rather than setting up two digit equations, test each candidate against the two stated conditions: (1) number ÷ digit-sum = 7, and (2) tens digit = units digit + 1.

Take A, 21: digit sum = 3, and 21 / 3 = 7, so condition (1) holds. Its tens digit 2 is 1 more than its units digit 1, so condition (2) holds. Both pass.

Notice how the distractors each satisfy *one* condition only. 42: 42 / 6 = 7 (passes 1), but 4 ≠ 2 + 1 (fails 2). 63: 63 / 9 = 7 (passes 1), but 6 ≠ 3 + 1 (fails 2). 84: 84 / 12 = 7 (passes 1), but 8 ≠ 4 + 1 (fails 2). And 32: 3 = 2 + 1 (passes 2), but 32 / 5 = 6.4 (fails 1). Only 21 clears both.

The correct answer is A.
**mistake_b:** 32 satisfies the digit-gap condition (3 = 2 + 1) but not the division: 32 ÷ 5 is not a whole 7. Tempting if you check only the second condition.
**mistake_c:** 42 ÷ 6 = 7 nails the division but its digits differ by 2, not 1. Tempting if you stop at the first condition.
**mistake_d:** 63 ÷ 9 = 7 also passes the division and fails the digit-gap (6 vs 4) — the same single-condition trap as C.
**mistake_e:** 84 ÷ 12 = 7 passes the division yet 8 and 4 differ by 4. Another "checked one condition only" pick.
**common_trap:** Verifying just one of the two conditions. Four of the five choices satisfy the divide-by-7 rule, so that condition alone cannot select the answer — the digit-gap is the tiebreaker.
**takeaway:** When several choices clear one constraint, the *second* constraint is doing the real work. Backsolving lets you test both conditions per choice without ever writing a digit equation.
**hint_strategy:** Many of these numbers divide by their digit sum to give 7. Use the "tens is 1 more than units" condition to break the tie.
**related_reading:** quant-01-backsolving

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving
**skill:** pythagorean-from-dimensions
**trap_type:** wrong-quantity-reported
**est_time_seconds:** 135

A rectangle's length is 5 cm greater than its width, and its diagonal measures 25 cm. What is the width, in centimeters?

- A) 10
- B) 12
- C) 13
- D) 14
- E) 15

**answer:** E
**fastest_path:** For each width w, the length is w + 5; check whether w² + (w + 5)² = 25² = 625.
**explanation:** The diagonal, width, and length form a right triangle, so w² + (w + 5)² = 625. Each choice is a candidate width; substitute rather than expanding into a quadratic.

Test the median choice (C), w = 13: 13² + 18² = 169 + 324 = 493. Below 625, so the width must be larger.

Test D, w = 14: 14² + 19² = 196 + 361 = 557. Still short.

Test E, w = 15: 15² + 20² = 225 + 400 = 625. Exact match — the familiar 15-20-25 right triangle.

The correct answer is E.
**mistake_a:** w = 10 gives 100 + 225 = 325, far too small.
**mistake_b:** w = 12 gives 144 + 289 = 433; a tempting "12-ish" guess, but well below 625.
**mistake_c:** The median test, 493 — the signal to move up, not the answer.
**mistake_d:** w = 14 lands at 557, close enough to lure a stop one notch early.
**common_trap:** Solving the quadratic, finding the 15-20-25 triangle, and reporting 20 (the length) instead of 15 (the width). Backsolving the requested quantity avoids that swap.
**takeaway:** Recognizing the 15-20-25 (a 3-4-5 scaled by 5) skips the algebra — but always confirm which side the stem asks for before answering.
**hint_nudge:** Width, length, and diagonal make a right triangle. Is there a familiar Pythagorean triple with a hypotenuse of 25?
**hint_strategy:** Length is w + 5, so test w² + (w + 5)² against 625 until it matches.
**related_reading:** quant-01-backsolving

---

## Q28
**difficulty:** Hard
**type:** Problem Solving
**topic:** Backsolving
**skill:** work-rate-with-phase-change
**trap_type:** hidden-second-phase
**est_time_seconds:** 165

A printer can finish a job alone in 40 minutes; a faster printer can finish the same job alone in 24 minutes. They start the job together, but after some minutes the slower printer jams and stops, and the faster printer finishes the rest alone. The whole job takes 18 minutes from the start. For how many minutes were both printers running together?

- A) 6
- B) 8
- C) 10
- D) 12
- E) 15

**answer:** C
**fastest_path:** For each choice t, add the work both printers do in t minutes to the work the fast printer does alone in (18 - t) minutes, and look for one whole job.
**explanation:** The slow printer's rate is 1/40 job per minute and the fast printer's is 1/24. Together they run at 1/40 + 1/24 = 3/120 + 5/120 = 8/120 = 1/15 job per minute. If both run for t minutes and the fast printer runs alone for the remaining 18 - t minutes, the total work must be one full job:

t × (1/15) + (18 - t) × (1/24) = 1.

Test the median choice (C), t = 10: together they do 10 × 1/15 = 10/15 = 2/3 of the job; the fast printer alone then does (18 - 10) × 1/24 = 8/24 = 1/3. Sum = 2/3 + 1/3 = 1. Exactly one job.

The correct answer is C.
**mistake_a:** t = 6 leaves too much for the fast printer alone: 6/15 + 12/24 = 2/5 + 1/2 = 9/10 of the job — unfinished.
**mistake_b:** t = 8 gives 8/15 + 10/24 = 0.533 + 0.417 = 0.95 — just short of a whole job, a tempting near-miss.
**mistake_d:** t = 12 overshoots: 12/15 + 6/24 = 4/5 + 1/4 = 1.05, more than one job, impossible.
**mistake_e:** t = 15 assumes both printers run almost the whole time: 15/15 + 3/24 = 1 + 1/8 > 1; ignores that the fast printer's solo stretch already finishes the job.
**common_trap:** Treating the 18 minutes as if both printers ran the entire time, or as if only one phase exists. The job has two phases — joint work, then solo finishing — and the answer is the length of the first phase only.
**takeaway:** When a worker drops out partway, split the timeline into phases and let the total work sum to 1. Backsolving a candidate first-phase length keeps both phases explicit and the fractions clean.
**hint_nudge:** The job happens in two stages: both printers, then just the fast one. The 18 minutes is the whole timeline.
**hint_strategy:** Together they complete 1/15 of the job per minute; the fast printer alone does 1/24 per minute. For a candidate t, check t/15 + (18 - t)/24 = 1.
**related_reading:** quant-01-backsolving
