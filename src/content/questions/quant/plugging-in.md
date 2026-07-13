---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

The price of a widget is first raised by 25 percent, and then the new price is lowered by 20 percent. The final price is what percent of the original price?

- A) 95%
- B) 100%
- C) 105%
- D) 110%
- E) 120%

**answer:** B
**fastest_path:** Let the original price be 100 and run the two changes in order — never combine the percents in your head.
**explanation:** Plugging in 100 turns abstract percent change into arithmetic you cannot fumble. Start at 100. A 25 percent increase adds 25, giving 125. A 20 percent decrease takes 20 percent of 125 — that is 25 — leaving 100.

The final price equals the original, so it is 100 percent of it.

The reason it lands back at 100 is that the second percent is taken from a larger base, so a smaller percent off a bigger number exactly cancels the bigger percent on a smaller number.

The correct answer is B.
**common_trap:** Adding and subtracting the percents directly (25 minus 20 = up 5 percent) and choosing 105 percent. Percent changes apply to different bases, so they never simply add.
**takeaway:** For any percent-of-an-unknown problem, set the unknown to 100 and apply each change to the running total in order.
**related_reading:** quant-02-plugging-in-numbers

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

If n is an integer, which of the following must be even?

- A) 2n + 1
- B) n^2 + n
- C) n^2 + 1
- D) 3n + 1
- E) n^2 - n + 1

**answer:** B
**fastest_path:** This is a break-it problem: plug one odd and one even integer and discard any choice that ever comes out odd.
**explanation:** "Must be even" means the choice has to be even for every integer n, so you attack it with adversarial values rather than solving anything. Test n = 2 (even) and n = 3 (odd).

n^2 + n: at n = 2 that is 6, at n = 3 that is 12 — even both times. It survives because n^2 + n = n(n + 1) is a product of two consecutive integers, and one of any two consecutive integers is always even.

Every other choice fails a test. 2n + 1 is always odd. n^2 + 1 is 5 at n = 2 (odd). 3n + 1 is 7 at n = 2 (odd). n^2 - n + 1 = n(n - 1) + 1 is even plus one, always odd.

The correct answer is B.
**common_trap:** Testing only one value — say n = 2 — and accepting a choice that happens to be even there but turns odd at n = 3. One test is never enough for a "must be" claim.
**takeaway:** For must-be-true number-property questions, plug at least one even and one odd value; a single counterexample kills a choice.
**related_reading:** quant-02-plugging-in-numbers

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

At a conference, 40 percent of the attendees are students, and 30 percent of those students are presenting a poster. Poster-presenting students are what percent of all attendees?

- A) 7%
- B) 10%
- C) 12%
- D) 18%
- E) 70%

**answer:** C
**fastest_path:** Let the conference have 100 attendees and count down the chain of percentages.
**explanation:** Setting the total to 100 makes each percentage a head count. Of 100 attendees, 40 are students. Of those 40 students, 30 percent present a poster: 30 percent of 40 is 12.

So 12 attendees out of 100 are poster-presenting students, which is 12 percent.

The correct answer is C.
**common_trap:** Subtracting the percents (40 minus 30 = 10) or reusing 30 percent of the whole. The second percentage is taken of the students, not of everyone.
**takeaway:** When percentages chain ("X percent of those"), pick 100 for the total and multiply down the chain one step at a time.
**related_reading:** quant-02-plugging-in-numbers

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

A printer produces p pages every s seconds. At this rate, how many pages does it produce in m minutes?

- A) pm/s
- B) 60pm/s
- C) pms/60
- D) 60ps/m
- E) pm/(60s)

**answer:** B
**fastest_path:** Replace the three letters with small numbers, compute the real page count, then match it against the choices.
**explanation:** With variables in the choices, pick clean distinct numbers. Let p = 4, s = 2, and m = 3.

The printer makes 4 pages every 2 seconds, so 2 pages per second. Three minutes is 180 seconds, so it produces 2 times 180 = 360 pages.

Now plug p = 4, s = 2, m = 3 into each choice and keep the one equal to 360. Choice B gives 60(4)(3)/2 = 720/2 = 360. The others miss: A gives 6, C gives 0.4, D gives 160, E gives 1/10.

The correct answer is B.
**common_trap:** Forgetting to convert minutes to seconds and choosing pm/s, which silently mixes the two time units.
**takeaway:** On variables-in-the-choices problems, pick concrete numbers for every variable, compute the true target, then test all five choices against it.
**hint_nudge:** Pick small numbers for p, s, and m and compute an actual page count.
**hint_strategy:** Watch the units: the rate is per second but the time is in minutes, so a factor of 60 has to appear.
**related_reading:** quant-02-plugging-in-numbers

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

If x and y are integers and xy is even, which of the following must be true?

- A) x is even
- B) y is even
- C) x + y is even
- D) At least one of x and y is even
- E) xy is divisible by 4

**answer:** D
**fastest_path:** Hunt for a single counterexample to each choice; the one you cannot break is the answer.
**explanation:** A product of integers is even exactly when at least one factor is even, so D is forced. The job is to confirm the others can fail.

Take x = 2, y = 3, so xy = 6 is even. Now x is even but y is not, killing B; y is odd, and "A: x is even" is true here but fails the moment you switch to x = 3, y = 2; x + y = 5 is odd, killing C; and xy = 6 is not divisible by 4, killing E.

Only D survives every legal case, because if both were odd the product would be odd.

The correct answer is D.
**common_trap:** Concluding that a specific variable (x or y) must be the even one. The evenness can sit on either factor, so only the "at least one" statement is guaranteed.
**takeaway:** "Product is even" guarantees one even factor but never tells you which — translate the structure before testing numbers.
**related_reading:** quant-02-plugging-in-numbers

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

A sweater costs d dollars. During a sale it is marked 20 percent off. What is the sale price, in dollars?

- A) d - 20
- B) 0.2d
- C) 0.8d
- D) d/20
- E) 1.2d

**answer:** C
**fastest_path:** Set d to 100, find the sale price, then match the choices.
**explanation:** Let d = 100. Twenty percent off means you pay 80 percent, so the sale price is 80.

Plug d = 100 into the choices: only 0.8d gives 80. Choice A (d minus 20) gives 80 here too — a coincidence — so plug a second value, d = 50: the true sale price is 40, and 0.8(50) = 40 while 50 minus 20 = 30. Only C still matches.

The correct answer is C.
**common_trap:** Treating "20 percent off" as a flat 20 dollars off (choice A). A percent discount scales with the price; it is not a fixed amount.
**takeaway:** When one number leaves two choices matching, that is the signal to plug a second value — never guess between the survivors.
**related_reading:** quant-02-plugging-in-numbers

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

If n is a positive integer, which of the following must be even?

- A) n + 1
- B) 2n
- C) n^2
- D) 3n
- E) n + 2

**answer:** B
**fastest_path:** Plug one odd and one even value of n and keep the choice that is even both times.
**explanation:** Test n = 1 (odd) and n = 2 (even). 2n gives 2 and 4 — even both times, and in fact 2n is even for every integer because it carries an explicit factor of 2.

Each other choice flips parity: n + 1 is 2 then 3; n^2 is 1 then 4; 3n is 3 then 6; n + 2 is 3 then 4. None stays even across both tests.

The correct answer is B.
**common_trap:** Picking n^2 because squares "feel" even, or n + 1 because it is even at n = 1. Always test both an odd and an even input.
**takeaway:** Anything written as 2 times an integer is even no matter what; expressions whose parity depends on n are not guaranteed.
**related_reading:** quant-02-plugging-in-numbers

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

The sum of three consecutive integers is n. In terms of n, what is the largest of the three integers?

- A) n/3
- B) (n + 3)/3
- C) (n - 3)/3
- D) (n + 1)/3
- E) n/3 + 3

**answer:** B
**fastest_path:** Choose three real consecutive integers, read off their sum and largest value, then test the choices.
**explanation:** Pick the concrete trio 4, 5, 6. Their sum is n = 15 and the largest is 6.

Now plug n = 15 into each choice and keep the one equal to 6. Choice B gives (15 + 3)/3 = 18/3 = 6. The others miss: A gives 5, C gives 4, D gives 16/3, E gives 8.

Algebraically this checks out — the three integers are k - 1, k, k + 1 with sum 3k = n, so the middle value is n/3 and the largest is n/3 + 1 = (n + 3)/3.

The correct answer is B.
**common_trap:** Choosing n/3, which is the middle integer, not the largest. Picking real numbers makes the off-by-one error visible immediately.
**takeaway:** A concrete trio turns "in terms of n" algebra into a single matching check and exposes near-miss expressions like n/3 versus (n + 3)/3.
**hint_nudge:** Use actual consecutive integers such as 4, 5, 6 rather than manipulating k.
**related_reading:** quant-02-plugging-in-numbers

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

A quantity increases by 50 percent, and then that result decreases by 40 percent. The final value is what percent of the original?

- A) 80%
- B) 85%
- C) 90%
- D) 100%
- E) 110%

**answer:** C
**fastest_path:** Anchor the original at 100 and apply each change to the running total in sequence.
**explanation:** Start at 100. Up 50 percent gives 150. Down 40 percent removes 40 percent of 150, which is 60, leaving 90.

So the final value is 90 percent of the original.

The drop is large because the 40 percent decrease acts on 150, not on the original 100 — that is why the changes do not net to plus 10 percent.

The correct answer is C.
**common_trap:** Adding the percents to get plus 10 percent and choosing 110 percent. Each percent applies to its own base, so successive changes never simply add.
**takeaway:** Successive percent changes compound on shifting bases; pick 100 and walk the changes one at a time instead of combining them.
**related_reading:** quant-02-plugging-in-numbers

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

If x > 0, which of the following must be true?

- A) x > 1
- B) x^2 > x
- C) x + 1/x >= 2
- D) x + 1/x <= 2
- E) x^2 + 1 < 2x

**answer:** C
**fastest_path:** Stress-test with a fraction, a whole number, and 1 — the value that breaks symmetry on these claims.
**explanation:** "Must be true for every x > 0" demands you probe the dangerous values: a proper fraction, 1, and something larger. Use x = 1/2, x = 1, and x = 2.

For C, x + 1/x equals 2.5, then exactly 2, then 2.5 — always at least 2, with the minimum sitting right at x = 1. It can never dip below 2 for positive x.

The rest break on the fraction x = 1/2: A fails (1/2 is not greater than 1), B fails (1/4 is not greater than 1/2), D fails (2.5 is not at most 2), and E fails (1.25 is not less than 1).

The correct answer is C.
**common_trap:** Testing only x = 2 (or other values above 1), where several choices look true. The fraction 0 < x < 1 is where these statements separate.
**takeaway:** For "must be true" over all positive x, always include a fraction between 0 and 1 and the boundary value 1 — that is where tidy-looking claims fail.
**hint_nudge:** Whole numbers above 1 are not enough; try x = 1/2 and x = 1.
**hint_strategy:** For positive x, the expression x + 1/x is smallest at x = 1, where it equals exactly 2.
**related_reading:** quant-02-plugging-in-numbers

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

If 0 < x < 1, which of the following lists the three values in order from least to greatest?

- A) x, x^2, x^3
- B) x^3, x^2, x
- C) x^2, x, x^3
- D) x^3, x, x^2
- E) x, x^3, x^2

**answer:** B
**fastest_path:** Pick a fraction inside the range, compute the three powers, and read off the order.
**explanation:** Choose x = 1/2, a value that obeys 0 < x < 1. Then x = 0.5, x^2 = 0.25, and x^3 = 0.125.

From least to greatest that is 0.125, 0.25, 0.5 — which is x^3, x^2, x.

Raising a number between 0 and 1 to higher powers makes it smaller, the opposite of what happens with numbers greater than 1, so the cube is the smallest and the first power is the largest.

The correct answer is B.
**common_trap:** Assuming higher powers are larger (true only for x > 1) and picking x, x^2, x^3. For a proper fraction the order reverses.
**takeaway:** Choose a number that actually satisfies the constraint, then let the arithmetic reveal behavior you might misremember — like powers shrinking when 0 < x < 1.
**hint_nudge:** Try x = 1/2 and compute x, x^2, and x^3.
**related_reading:** quant-02-plugging-in-numbers

---

## Q12
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

The price of a book is first raised by 10 percent, and then the new price is lowered by 10 percent. The final price is what percent of the original price?

- A) 90%
- B) 98%
- C) 99%
- D) 100%
- E) 101%

**answer:** C
**explanation:** Plugging in 100 for the original price turns the percent changes into plain arithmetic. A 10 percent increase on 100 gives 110, and then a 10 percent decrease removes 10 percent of 110, which is 11, leaving 99. The final price is 99, so it is 99 percent of the original. The two changes do not cancel because the 10 percent decrease is taken from the larger base of 110, not from the original 100.
**related_reading:** quant-02-plugging-in-numbers

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

At a gym, 60 percent of the members are women, and 25 percent of those women joined this year. Women who joined this year are what percent of all members?

- A) 12%
- B) 15%
- C) 25%
- D) 35%
- E) 85%

**answer:** B
**explanation:** Letting the gym have 100 members makes every percentage a head count. Of the 100 members, 60 are women, and 25 percent of those 60 women joined this year: 25 percent of 60 is 15. So 15 members out of 100 are women who joined this year, which is 15 percent of all members. The trap of subtracting the percents (60 minus 25) fails because the second percentage is taken of the women, not of everyone.
**related_reading:** quant-02-plugging-in-numbers

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

A lamp costs c dollars. During a sale it is marked 15 percent off. What is the sale price, in dollars?

- A) c - 15
- B) 0.15c
- C) c/15
- D) 0.85c
- E) 1.15c

**answer:** D
**explanation:** Set c = 100, so the lamp costs 100 dollars and 15 percent off means you pay 85 percent, giving a sale price of 85. Testing the choices at c = 100, only 0.85c equals 85; choice A (c minus 15) also gives 85 here, so plug a second value to break the tie. At c = 200 the true sale price is 170, and 0.85(200) = 170 while 200 minus 15 = 185, so only choice D survives. A percent discount scales with the price and is never a fixed dollar amount.
**related_reading:** quant-02-plugging-in-numbers

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

A machine fills b bottles every t minutes. At this rate, how many bottles does it fill in h hours?

- A) bh/t
- B) bht/60
- C) 60bt/h
- D) bh/(60t)
- E) 60bh/t

**answer:** E
**explanation:** Choose clean numbers such as b = 6, t = 2, and h = 1. The machine fills 6 bottles every 2 minutes, so 3 bottles per minute, and one hour is 60 minutes, so it fills 3 times 60 = 180 bottles. Plugging b = 6, t = 2, h = 1 into the choices, only 60bh/t gives 60(6)(1)/2 = 360/2 = 180; the others give 3, 0.2, 720, and 0.05 respectively. The factor of 60 must appear because the rate is per minute while the time is given in hours.
**related_reading:** quant-02-plugging-in-numbers

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

If n is an integer, which of the following must be odd?

- A) 2n
- B) n^2 + n
- C) 2n^2 + 3
- D) n^2 + 1
- E) 4n - 2

**answer:** C
**explanation:** "Must be odd" means the expression has to be odd for every integer n, so test both an even and an odd value. Try n = 2 and n = 3 for choice C: 2(4) + 3 = 11 and 2(9) + 3 = 21, both odd, and indeed 2n^2 is always even so 2n^2 + 3 is always odd. The others fail a test: 2n and 4n - 2 are always even, n^2 + n = n(n + 1) is a product of consecutive integers and so always even, and n^2 + 1 is 5 at n = 2 but 10 at n = 3.
**related_reading:** quant-02-plugging-in-numbers

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

A quantity increases by 20 percent, and then that result increases by 30 percent. The final value is what percent of the original?

- A) 110%
- B) 125%
- C) 150%
- D) 156%
- E) 160%

**answer:** D
**explanation:** Anchor the original at 100 and apply each change to the running total. A 20 percent increase on 100 gives 120, and then a 30 percent increase adds 30 percent of 120, which is 36, producing 156. So the final value is 156 percent of the original. Adding the percents to get 150 percent is the trap, because the second increase is taken on the larger base of 120, contributing the extra 6 percentage points.
**related_reading:** quant-02-plugging-in-numbers

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

The average (arithmetic mean) of x, x + 2, and x + 4 is m. In terms of m, what is x?

- A) m - 2
- B) m - 1
- C) m
- D) m + 1
- E) m + 2

**answer:** A
**explanation:** Pick concrete numbers for the three terms, such as 3, 5, and 7, which corresponds to x = 3. Their average is (3 + 5 + 7)/3 = 15/3 = 5, so m = 5, and you need the choice that returns x = 3 when m = 5. Only m - 2 gives 5 - 2 = 3; the others give 4, 5, 6, and 7. Algebraically the three terms average to x + 2 = m, so x = m - 2, matching the plug-in result.
**related_reading:** quant-02-plugging-in-numbers

---

## Q19
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Plugging In Numbers

If x and y are integers, is the product xy even?

(1) x is even.
(2) x + y is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** A product of integers is even exactly when at least one factor is even, so test parities. From statement (1), x is even, and an even factor makes xy even no matter what y is (try x = 2, y = 3 giving 6, and x = 2, y = 4 giving 8), so (1) alone is sufficient. From statement (2), x + y is odd, which forces one of x and y to be even and the other odd, so again xy is even (try x = 1, y = 2 giving 2, and x = 4, y = 3 giving 12), so (2) alone is sufficient. Since each statement alone answers the question, the answer is D.
**related_reading:** quant-02-plugging-in-numbers

---

## Q20
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Plugging In Numbers

Is x > y?

(1) x^2 > y^2
(2) x > 0 > y

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Plug in numbers to test each statement. For statement (1), x = 3 and y = 2 give 9 > 4 with x > y true, but x = -3 and y = 2 also give 9 > 4 while x > y is false, so (1) alone is not sufficient. For statement (2), x is positive and y is negative, so x > y must be true for every such pair, since any positive number exceeds any negative number; testing x = 1, y = -5 and x = 4, y = -1 both confirm x > y. Since statement (2) settles the question and statement (1) does not, the answer is B.
**related_reading:** quant-02-plugging-in-numbers

---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In Numbers

If x < 0, which of the following must be true?

- A) x^2 > x
- B) x^3 < x
- C) x^2 < 1
- D) 1/x < -1
- E) x^3 < x^2 - 8

**answer:** A
**explanation:** "Must be true for every negative x" requires probing both a fraction near zero and a number below negative one, so test x = -1/2 and x = -2. For choice A, x^2 is nonnegative while x is negative, so x^2 > x holds in every case: at x = -1/2 it is 0.25 > -0.5, and at x = -2 it is 4 > -2. The others each break on at least one test: B fails at x = -1/2 since x^3 = -0.125 is greater than -0.5, C fails at x = -2 since 4 is not less than 1, D fails at x = -2 since 1/x = -0.5 is not less than -1, and E fails at x = -1/2 since x^3 = -0.125 is not less than x^2 - 8 = -7.75. Only A survives every test.
**related_reading:** quant-02-plugging-in-numbers

---

## Q22
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Plugging In Numbers

What is the value of x?

(1) x^2 = 4x
(2) x > 2

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Statement (1) rearranges to x^2 - 4x = 0, so x(x - 4) = 0, giving x = 0 or x = 4; plugging in both shows two valid values, so (1) alone is not sufficient. Statement (2) only says x > 2, which allows infinitely many values, so it is not sufficient alone. Combining them, x must be 0 or 4 from (1) and greater than 2 from (2), which forces x = 4 uniquely, so both together are sufficient and the answer is C.
**related_reading:** quant-02-plugging-in-numbers

---

## Q23
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

The price of a chair is first raised by 30 percent, and then the new price is lowered by 10 percent. The final price is what percent of the original price?

- A) 100%
- B) 110%
- C) 115%
- D) 117%
- E) 120%

**answer:** D
**explanation:** Plugging in 100 for the original price turns the percent changes into plain arithmetic. A 30 percent increase on 100 gives 130, and then a 10 percent decrease removes 10 percent of 130, which is 13, leaving 117. The final price is 117, so it is 117 percent of the original. The two changes do not net to plus 20 percent because the 10 percent decrease is taken from the larger base of 130, not from the original 100.
**related_reading:** quant-02-plugging-in-numbers

---

## Q24
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

At a company, 70 percent of the employees are full-time, and 40 percent of those full-time employees work remotely. Full-time employees who work remotely are what percent of all employees?

- A) 21%
- B) 28%
- C) 30%
- D) 40%
- E) 56%

**answer:** B
**explanation:** Letting the company have 100 employees makes every percentage a head count. Of the 100 employees, 70 are full-time, and 40 percent of those 70 full-time employees work remotely: 40 percent of 70 is 28. So 28 employees out of 100 are full-time remote workers, which is 28 percent of all employees. Subtracting the percents (70 minus 40) fails because the second percentage is taken of the full-time employees, not of everyone.
**related_reading:** quant-02-plugging-in-numbers

---

## Q25
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In Numbers

A desk costs k dollars. During a sale it is marked 25 percent off. What is the sale price, in dollars?

- A) k - 25
- B) 0.25k
- C) k/25
- D) 1.25k
- E) 0.75k

**answer:** E
**explanation:** Set k = 100, so the desk costs 100 dollars and 25 percent off means you pay 75 percent, giving a sale price of 75. Testing the choices at k = 100, only 0.75k equals 75; choice A (k minus 25) also gives 75 here, so plug a second value to break the tie. At k = 200 the true sale price is 150, and 0.75(200) = 150 while 200 minus 25 = 175, so only choice E survives. A percent discount scales with the price and is never a fixed dollar amount.
**related_reading:** quant-02-plugging-in-numbers

---

## Q27
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

A typist types w words every r seconds. At this rate, how many words does the typist type in h hours?

- A) wh/r
- B) 60wh/r
- C) 3600wh/r
- D) wh/(3600r)
- E) 3600wr/h

**answer:** C
**explanation:** Choose clean numbers such as w = 10, r = 2, and h = 1. The typist types 10 words every 2 seconds, so 5 words per second, and one hour is 3600 seconds, so the typist types 5 times 3600 = 18,000 words. Plugging w = 10, r = 2, h = 1 into the choices, only 3600wh/r gives 3600(10)(1)/2 = 36,000/2 = 18,000; the wrong choices give A = 5, B = 300, D = about 0.0014, and E = 3600(10)(2)/1 = 72,000. The factor of 3600 must appear because the rate is per second while the time is given in hours.
**related_reading:** quant-02-plugging-in-numbers

---

## Q28
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

A quantity increases by 25 percent, and then that result increases by 40 percent. The final value is what percent of the original?

- A) 65%
- B) 140%
- C) 150%
- D) 165%
- E) 175%

**answer:** E
**explanation:** Anchor the original at 100 and apply each change to the running total. A 25 percent increase on 100 gives 125, and then a 40 percent increase adds 40 percent of 125, which is 50, producing 175. So the final value is 175 percent of the original. Adding the percents to get 165 percent is the trap, because the second increase is taken on the larger base of 125, contributing an extra 10 percentage points beyond the naive sum.
**related_reading:** quant-02-plugging-in-numbers

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In Numbers

The average (arithmetic mean) of x, x + 3, and x + 6 is m. In terms of m, what is x?

- A) m - 6
- B) m - 3
- C) m
- D) m + 3
- E) m + 6

**answer:** B
**explanation:** Pick concrete numbers for the three terms, such as 2, 5, and 8, which corresponds to x = 2. Their average is (2 + 5 + 8)/3 = 15/3 = 5, so m = 5, and you need the choice that returns x = 2 when m = 5. Only m - 3 gives 5 - 3 = 2; the others give -1, 5, 8, and 11. Algebraically the three terms average to x + 3 = m, so x = m - 3, matching the plug-in result.
**related_reading:** quant-02-plugging-in-numbers

---

## Q32
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Plugging In Numbers

If x and y are integers, is the product xy odd?

(1) x is odd.
(2) x + y is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** A product of integers is odd exactly when both factors are odd, so test parities. From statement (1), x is odd, but y is unknown: x = 3, y = 2 gives xy = 6 (even) while x = 3, y = 5 gives xy = 15 (odd), so (1) alone is not sufficient. From statement (2), x + y is even, which means x and y are both even or both odd: x = 2, y = 4 gives xy = 8 (even) while x = 3, y = 5 gives xy = 15 (odd), so (2) alone is not sufficient. Combining them, x is odd and x + y is even forces y to be odd, so both factors are odd and xy is odd, making the two statements together sufficient and the answer C.
**related_reading:** quant-02-plugging-in-numbers

---

## Q33
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Plugging In Numbers

Is x > y?

(1) x^3 > y^3
(2) x^2 > y^2

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** Plug in numbers to test each statement. For statement (1), cubing preserves order for all real numbers, so x^3 > y^3 forces x > y in every case: x = 2, y = 1 gives 8 > 1 with x > y, and x = 1, y = -3 gives 1 > -27 with x > y, so (1) alone is sufficient. For statement (2), x = 3, y = 2 gives 9 > 4 with x > y true, but x = -3, y = 2 also gives 9 > 4 while x > y is false, so (2) alone is not sufficient. Since statement (1) settles the question and statement (2) does not, the answer is A.
**related_reading:** quant-02-plugging-in-numbers

---

## Q34
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Plugging In Numbers

What is the value of x?

(1) x^2 = 9
(2) x^3 = 27

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Statement (1) says x^2 = 9, which has two solutions, x = 3 and x = -3, since squaring loses sign information, so plugging in both shows two valid values and (1) alone is not sufficient. Statement (2) says x^3 = 27, and because cubing preserves sign there is exactly one real solution, x = 3, so (2) alone is sufficient. Since statement (2) pins down a unique value while statement (1) does not, the answer is B.
**related_reading:** quant-02-plugging-in-numbers
