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
