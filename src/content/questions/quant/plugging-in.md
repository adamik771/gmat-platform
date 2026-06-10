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
**difficulty:** Advanced
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
**difficulty:** Advanced
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
