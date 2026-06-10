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

---

## Q12
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

A teacher buys 5 boxes of pencils, each containing b pencils, and then gives away 12 pencils. In terms of b, how many pencils does the teacher have left?

- A) 5b - 12
- B) 5b + 12
- C) 5(b - 12)
- D) b - 60
- E) 12 - 5b

**answer:** A
**fastest_path:** Set b = 10, count the actual pencils, and match the choices.
**explanation:** Give b a concrete value: let each box hold b = 10 pencils. Five boxes is 50 pencils, and giving away 12 leaves 50 - 12 = 38.

Now plug b = 10 into each choice and keep the one equal to 38. Choice A gives 5(10) - 12 = 38. The others miss: B gives 62, C gives 5(-2) = -10, D gives -50, E gives -38.

The structure the number reveals: multiply the per-box count by the number of boxes first, then subtract the giveaway once — the 12 pencils leave the whole stock, not each box.

The correct answer is A.
**mistake_b:** Adds the 12 instead of subtracting — a sign slip that plugging in a real count makes impossible, since 62 pencils is obviously more than the teacher started with.
**mistake_c:** Subtracts the giveaway inside the parentheses, as if 12 pencils left every box. The giveaway happens once, after all five boxes are combined.
**mistake_d:** Swaps the roles of the two numbers, computing b - 5(12) — one box minus five giveaways instead of five boxes minus one giveaway.
**mistake_e:** Reverses the subtraction. With b = 10 this is negative, which a quick sanity check on real pencils catches instantly.
**common_trap:** Attaching the subtraction to the wrong layer of the expression — per box instead of from the total.
**takeaway:** A concrete number for the variable turns "which expression?" into "which choice equals 38?" — and impossible answers (negative pencil counts) eliminate themselves.
**est_time_seconds:** 60
**trap_type:** wrong-layer-operation
**hint_nudge:** Let b = 10 and count actual pencils.
**related_reading:** quant-02-plugging-in-numbers

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

If x is a positive number, then x/2 + x/3 is what fraction of x?

- A) 1/6
- B) 2/5
- C) 5/6
- D) 1
- E) 6/5

**answer:** C
**fastest_path:** Pick x = 6, the smallest number both denominators divide, and read the fraction off the arithmetic.
**explanation:** Choose x = 6 so both fractions come out whole: x/2 = 3 and x/3 = 2, so the sum is 5.

Five out of 6 is 5/6 of x, and that ratio is the same no matter which positive x you pick — the x scales out.

Algebraically, x/2 + x/3 = 3x/6 + 2x/6 = 5x/6, confirming the match.

The correct answer is C.
**mistake_a:** Multiplies the fractions (1/2 times 1/3) instead of adding them. The stem's plus sign means add — and with x = 6 the sum is visibly 5, not 1.
**mistake_b:** Adds tops and bottoms separately: (1 + 1)/(2 + 3) = 2/5. Fractions never add that way; a common denominator is required.
**mistake_d:** Assumes a half and a third make a whole. They fall short by exactly one sixth — the gap the choice ignores.
**mistake_e:** Inverts the answer, reporting x as a fraction of the sum instead of the sum as a fraction of x.
**common_trap:** Adding numerators and denominators separately — the single most common fraction-addition error, and choice B is waiting for it.
**takeaway:** When every choice is a pure fraction of x, the x is a free variable: set it to the LCM of the denominators and the arithmetic becomes whole numbers.
**est_time_seconds:** 60
**trap_type:** fraction-mediant
**hint_nudge:** Pick a value of x that both 2 and 3 divide evenly.
**related_reading:** quant-02-plugging-in-numbers

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

A tank is filled to 80 percent of its capacity. After one quarter of the water in the tank is drained, the water level is at what percent of the tank's capacity?

- A) 20%
- B) 55%
- C) 60%
- D) 64%
- E) 75%

**answer:** C
**fastest_path:** Let the capacity be 100 units and track actual units of water through each sentence.
**explanation:** Set the capacity to 100 units, so the tank starts with 80 units of water.

One quarter of *the water* — not of the capacity — is drained: a quarter of 80 is 20 units, leaving 80 - 20 = 60 units.

Sixty units out of a 100-unit capacity is 60 percent.

The correct answer is C.
**mistake_a:** Reports the amount drained (20 units) instead of the amount remaining — the right arithmetic aimed at the wrong question.
**mistake_b:** Drains a quarter of the *capacity* (25 units) instead of a quarter of the water: 80 - 25 = 55. The stem says a quarter of the water in the tank.
**mistake_d:** Drains one fifth instead of one quarter: 80 - 16 = 64. A misread of the fraction, not a method error.
**mistake_e:** Starts from a full tank and drains a quarter: 100 - 25 = 75. The tank was only 80 percent full to begin with.
**common_trap:** Taking the fraction of the wrong base — the capacity instead of the water actually in the tank.
**takeaway:** Plugging in 100 for the capacity exposes exactly which quantity each percent and fraction acts on; every wrong choice here comes from picking the wrong base.
**est_time_seconds:** 75
**trap_type:** wrong-base
**hint_nudge:** Set the capacity to 100 units. How many units of water are in the tank before the drain?
**related_reading:** quant-02-plugging-in-numbers

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

If n is an odd integer, which of the following must be odd?

- A) n + 1
- B) n + 2
- C) 2n
- D) 3n + 1
- E) n^2 + n

**answer:** B
**fastest_path:** Plug in one small odd value, n = 1, and eliminate everything that comes out even — then confirm the survivor with n = 3.
**explanation:** The stem fixes n as odd, so test odd values only. At n = 1: A gives 2, B gives 3, C gives 2, D gives 4, E gives 2. Only B is odd.

Confirm with n = 3: B gives 5 — odd again. Structurally, adding 2 to any integer never changes its parity, so an odd n stays odd forever under +2.

The others are even for every odd n: n + 1 is odd plus odd's neighbor (even), 2n carries an explicit factor of 2, 3n is odd so 3n + 1 is even, and n^2 + n = n(n + 1) is a product of consecutive integers, always even.

The correct answer is B.
**mistake_a:** Tempting if you ignore the constraint and test an even n, where n + 1 is odd. The stem says n is odd — use it, or the trap fires.
**mistake_c:** Doubling an odd number can feel like it preserves oddness, but the factor of 2 makes 2n even no matter what n is.
**mistake_d:** Three times an odd number is odd, and it is easy to stop there — but the +1 then flips it to even.
**mistake_e:** Both terms are computed from an odd n, so the sum feels odd — but odd + odd is even, the exact parity rule this choice punishes.
**common_trap:** Testing a value that violates the stem's constraint. With n = 2, choice A looks correct; with any legal odd n, it never is.
**takeaway:** Constraints on the variable are instructions about which numbers you may plug in. Adding 2 never changes parity; adding 1 always does.
**est_time_seconds:** 60
**trap_type:** ignored-constraint
**hint_nudge:** The stem restricts n to odd values — so test n = 1, not n = 2.
**related_reading:** quant-02-plugging-in-numbers

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In

Renting a certain car costs d dollars per day plus k dollars per kilometer driven. In terms of d and k, what is the total cost, in dollars, of renting the car for 3 days and driving it 100 kilometers?

- A) 3d + 100k
- B) 100d + 3k
- C) 3(d + 100k)
- D) 103(d + k)
- E) 3d + k

**answer:** A
**fastest_path:** Invent a cheap rental — d = 10, k = 2 — compute the real bill, and match.
**explanation:** Pick easy rates: d = 10 dollars per day and k = 2 dollars per kilometer. Three days cost 3(10) = 30 dollars, and 100 kilometers cost 100(2) = 200 dollars, so the real bill is 230 dollars.

Plug d = 10, k = 2 into the choices and keep the one equal to 230: A gives 30 + 200 = 230. The rest miss badly — B gives 1006, C gives 630, D gives 1236, E gives 32.

The structure: each rate multiplies its own quantity — days with the daily rate, kilometers with the per-kilometer rate — and the two products add.

The correct answer is A.
**mistake_b:** Pairs each rate with the wrong quantity — 100 days and 3 kilometers. The plugged-in bill of 1006 dollars for a 3-day rental flags the swap immediately.
**mistake_c:** Multiplies the entire bracket by 3, charging all 100 kilometers once per day. The kilometers were driven over the whole rental, not each day.
**mistake_d:** Adds the counts (3 + 100) and the rates (d + k) separately and multiplies — quantities and rates only combine in matched pairs.
**mistake_e:** Forgets to scale the per-kilometer rate by the 100 kilometers driven, charging for just one.
**common_trap:** Attaching a rate to the wrong quantity. Real numbers make the mismatch absurd on sight; symbols hide it.
**takeaway:** For any per-unit pricing structure, plug in small rates, compute an actual bill, and let the obviously wrong totals disqualify themselves.
**est_time_seconds:** 60
**trap_type:** variable-swap
**hint_nudge:** Make up cheap rates like d = 10 and k = 2, then compute the actual cost.
**related_reading:** quant-02-plugging-in-numbers

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

In a class of n students, 2/5 are seniors. Of the students who are not seniors, 1/3 are in the band. In terms of n, how many students are neither seniors nor in the band?

- A) n/5
- B) 2n/15
- C) 2n/5
- D) 4n/15
- E) 3n/5

**answer:** C
**fastest_path:** Pick n = 15 — divisible by both 5 and 3 — and count actual students through each sentence.
**explanation:** Let n = 15. Seniors: 2/5 of 15 = 6, so 9 students are not seniors. Of those 9 non-seniors, 1/3 are in the band: 3 students. Neither seniors nor in the band: 9 - 3 = 6 students.

Now find the choice equal to 6 at n = 15: A gives 3, B gives 2, C gives 6, D gives 4, E gives 9. Only C matches.

Algebra confirms it: the non-seniors are 3n/5, and two thirds of them avoid the band, giving (2/3)(3n/5) = 2n/5. That this equals the senior count is a coincidence of the numbers, not an error.

The correct answer is C.
**mistake_a:** This is the number of band members — correct arithmetic pointed at the wrong question. Always reread what the stem asks before matching.
**mistake_b:** Applies the 1/3 to the seniors instead of the non-seniors: (1/3)(2n/5). The phrase "of the students who are not seniors" fixes the base.
**mistake_d:** Subtracts a third of the whole class from the non-seniors: 3n/5 - n/3. The 1/3 acts on the non-seniors only, not on everyone.
**mistake_e:** Stops at the non-senior count, forgetting to remove the band members from it.
**common_trap:** Each fraction in a chained problem acts on the group named right before it — not on the whole class. Three of the four wrong answers come from sliding a fraction onto the wrong group.
**takeaway:** Choose n as the LCM of all denominators so every group is a whole number of students; then each sentence becomes a head count you can verify.
**est_time_seconds:** 100
**trap_type:** wrong-base
**hint_nudge:** Pick n divisible by both 5 and 3 — try 15 — and track real head counts.
**hint_strategy:** Non-seniors: 9 of 15. The 1/3 applies to those 9, and the question asks who is left after removing the band members.
**related_reading:** quant-02-plugging-in-numbers

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

Tom is t years old. Jerry's age is 4 years less than twice Tom's age. In terms of t, how old will Jerry be 5 years from now?

- A) t + 1
- B) 2t - 4
- C) 2t + 1
- D) 2t + 6
- E) 2t + 9

**answer:** C
**fastest_path:** Give Tom a real age, walk the two sentences, and match the result.
**explanation:** Let Tom be t = 10. "Four years less than twice Tom's age" makes Jerry 2(10) - 4 = 16 today. Five years from now Jerry will be 21.

Plug t = 10 into the choices and keep the one equal to 21: A gives 11, B gives 16, C gives 21, D gives 26, E gives 29. Only C works.

Symbolically: Jerry today is 2t - 4, and adding 5 years gives 2t + 1. The +5 attaches to Jerry's age at the end — it never touches Tom's age, because the relationship "twice Tom's age" was stated about today.

The correct answer is C.
**mistake_a:** Drops the doubling, computing t - 4 + 5. With real ages, Jerry at 11 contradicts the "twice Tom's age" sentence immediately.
**mistake_b:** Jerry's age today — the stem asks about 5 years from now. Answering the wrong timestamp is the classic age-problem giveaway.
**mistake_d:** Ages Tom five years first and then applies the relationship: 2(t + 5) - 4. The "twice" relationship holds today; only Jerry's own clock advances.
**mistake_e:** Flips "4 less" into "4 more": 2t + 4, then + 5. Plugging t = 10 catches it — Jerry would be 29 when twice Tom's age is only 20.
**common_trap:** Applying the future shift to the wrong person. A stated age relationship is a snapshot of today; advancing time moves each person's own age, not the relationship.
**takeaway:** In age problems, pin down everyone's age today with a plugged-in number first, then move the clock. The two steps never blend safely in symbols.
**est_time_seconds:** 90
**trap_type:** time-shift
**hint_nudge:** Make Tom 10 years old and follow the sentences one at a time.
**related_reading:** quant-02-plugging-in-numbers

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

If x < y, which of the following must be true?

- A) x^2 < y^2
- B) 1/x > 1/y
- C) x - 1 < y
- D) xy < y^2
- E) x + 1 < y

**answer:** C
**fastest_path:** Attack with adversarial pairs — both negative, opposite signs, and a pair less than 1 apart — and keep the survivor.
**explanation:** "Must be true" means true for every pair with x < y, so hunt counterexamples with hostile values.

Choice A dies at x = -3, y = 1: squares give 9 < 1, false — squaring wrecks order once negatives enter. Choice B dies at x = -1, y = 1: it claims -1 > 1. Choice D dies at x = -2, y = -1: xy = 2 and y^2 = 1, so 2 < 1 is false — multiplying an inequality by y is only safe when y is positive. Choice E dies at x = 0, y = 1/2: it claims 1 < 1/2, false whenever the gap between x and y is less than 1.

Choice C survives everything, and for a reason: x - 1 is less than x, which is already less than y. Making the smaller side smaller can never break an inequality.

The correct answer is C.
**mistake_a:** True for nonnegative pairs, which is exactly why it feels safe — but a negative x with a large square breaks it. Squaring is not order-preserving on negatives.
**mistake_b:** The "reciprocals flip the inequality" rule requires both numbers to have the same sign. Mixed signs break it: 1/(-1) is not greater than 1/1.
**mistake_d:** Multiplying both sides of x < y by y feels harmless, but when y is negative the inequality reverses. Sign-blind manipulation is the trap.
**mistake_e:** Feels like "there is room to add 1 on the smaller side," but nothing guarantees the gap exceeds 1 — x and y can be a hair apart.
**common_trap:** Testing only comfortable positive integers. Every wrong choice here is true for x = 2, y = 5; the separation only happens at negatives, mixed signs, and gaps under 1.
**takeaway:** For must-be-true inequality questions, your test kit is fixed: both negative, opposite signs, fractions, and values close together. Weakening the small side (x - 1) is the only move that is always safe.
**est_time_seconds:** 110
**trap_type:** sign-blindness
**hint_nudge:** Comfortable positives will not separate these choices. Try negatives, and a pair less than 1 apart.
**hint_strategy:** One counterexample kills a choice for good. Test x = -3 with y = 1, x = -2 with y = -1, and x = 0 with y = 1/2.
**related_reading:** quant-02-plugging-in-numbers

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

The average (arithmetic mean) of five numbers is k. When one of the five numbers is removed, the average of the four remaining numbers is k - 2. In terms of k, what is the number that was removed?

- A) k - 8
- B) k - 2
- C) k + 2
- D) k + 8
- E) 5k - 8

**answer:** D
**fastest_path:** Set k = 10, convert both averages to sums, and subtract — then match the choices.
**explanation:** Let k = 10. Five numbers averaging 10 have a sum of 50. After the removal, four numbers average 8, so they sum to 32. The removed number is the difference: 50 - 32 = 18.

Match at k = 10: A gives 2, B gives 8, C gives 12, D gives 18, E gives 42. Only D fits.

The structure: averages are sums in disguise. Old sum 5k, new sum 4(k - 2) = 4k - 8, and the removed number is 5k - (4k - 8) = k + 8. Removing one number dropped four other numbers' average by 2 each — 8 units of "excess" that all lived in the removed number, which therefore sat 8 above the original mean.

The correct answer is D.
**mistake_a:** A sign slip in the final subtraction: 5k - 4k - 8 instead of 5k - (4k - 8). Distribute the minus across the whole new sum.
**mistake_b:** Echoes the new average from the stem. An average is not a member of the list — the removed number must sit above the mean to drag it down when it leaves.
**mistake_c:** Intuits "the average fell by 2, so the number was 2 above average." The 2-point drop is spread across four remaining numbers, so the removed number carried 4 times that excess.
**mistake_e:** Subtracts 8 from the old sum and stops: 5k - 8 is a sum-level quantity, not the removed number. Finish the computation — the answer must be a single number's value.
**common_trap:** Working at the level of averages instead of sums. The drop in the average understates the removed number's excess by a factor of the remaining count.
**takeaway:** The moment two averages appear, convert both to totals. Plugging in k makes the totals concrete and reduces the whole problem to one subtraction.
**est_time_seconds:** 110
**trap_type:** average-shift
**hint_nudge:** Averages hide sums. With k = 10, what do the five numbers total? The four?
**hint_strategy:** Old sum 5k, new sum 4(k - 2). The removed number is whatever accounts for the difference.
**related_reading:** quant-02-plugging-in-numbers

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

If n is a positive integer, which of the following must be divisible by 3?

- A) n(n + 1)
- B) n(n + 1)(n + 2)
- C) n^2 + 1
- D) 3n + 1
- E) n^2 + n + 1

**answer:** B
**fastest_path:** Test n = 1 and n = 2; only a choice that survives both deserves a structural look.
**explanation:** A "must" claim has to hold for every positive integer, so test the two smallest. At n = 1: A gives 2, B gives 6, C gives 2, D gives 4, E gives 3. Choices A, C, and D die instantly; B and E survive.

At n = 2: B gives 2(3)(4) = 24, divisible by 3 — but E gives 7, not divisible by 3. Only B survives both tests.

B is no accident: n, n + 1, and n + 2 are three consecutive integers, and any run of three consecutive integers contains exactly one multiple of 3. The product therefore always carries a factor of 3 (and a factor of 2, making it divisible by 6).

The correct answer is B.
**mistake_a:** Two consecutive integers guarantee a factor of 2, not of 3. The pair n = 1, n + 1 = 2 contains no multiple of 3 at all.
**mistake_c:** Passes for scattered values (n = 5 gives 26 — no; n = 4 gives 17 — no) but already fails at n = 1. There is no structural reason a square plus one should pick up a factor of 3.
**mistake_d:** The visible 3 makes this look divisible by 3, but 3n + 1 is always exactly 1 more than a multiple of 3 — the +1 permanently breaks it.
**mistake_e:** The trap for single-value testers: it equals 3 at n = 1 and 21 at n = 4, passing every third test. At n = 2 it gives 7. One counterexample ends a "must."
**common_trap:** Verifying a "must be divisible" claim with one plugged-in value. Choice E is engineered to pass n = 1 and fail n = 2.
**takeaway:** Plug at least two consecutive values into every surviving choice — and learn the structure that makes B safe: k consecutive integers always include a multiple of k.
**est_time_seconds:** 95
**trap_type:** single-value-test
**hint_nudge:** Test n = 1 and n = 2. A "must" has to survive both.
**related_reading:** quant-02-plugging-in-numbers

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

When the positive integer n is divided by 7, the remainder is 4. Which of the following must be divisible by 7?

- A) n + 3
- B) n + 4
- C) n - 3
- D) 4n
- E) n + 7

**answer:** A
**fastest_path:** The smallest such n is 4 itself — plug it in and check which choice hits a multiple of 7.
**explanation:** The cheapest legal value is n = 4 (4 divided by 7 leaves remainder 4). Test the choices: A gives 7, B gives 8, C gives 1, D gives 16, E gives 11. Only A is divisible by 7.

Confirm with the next legal value, n = 11: A gives 14 — again a multiple of 7. The pattern holds because n sits 4 above a multiple of 7, so it needs exactly 3 more to climb to the next one: n + 3 = (7q + 4) + 3 = 7q + 7 = 7(q + 1).

The correct answer is A.
**mistake_b:** Adds the remainder back, on the instinct that "4 got us here, 4 completes it." But n is already 4 past a multiple — adding 4 lands at 8 past, which is 1 past the next multiple.
**mistake_c:** Subtracting toward a multiple is the right instinct aimed at the wrong distance: n - 4 would work, but n - 3 lands 1 above the previous multiple.
**mistake_d:** Multiplying by the remainder feels like it should "clear" it, but 4n = 4(7q + 4) leaves remainder 16 - 14 = 2. Multiplication scales remainders; it does not erase them.
**mistake_e:** Adding 7 moves n to the next number with the same remainder — it preserves the remainder of 4 forever, never repairing it.
**common_trap:** Confusing the remainder (how far n sits above a multiple) with the complement (how far n sits below the next one). Remainder 4 means the gap up is 3.
**takeaway:** The remainder itself is always a legal plug-in value: if n leaves remainder 4 when divided by 7, test n = 4 first — it is the smallest member of the family and the fastest filter.
**est_time_seconds:** 90
**trap_type:** remainder-complement
**hint_nudge:** What is the smallest positive integer that leaves remainder 4 when divided by 7?
**hint_strategy:** n is 4 more than a multiple of 7. How much more does it need to reach the next multiple?
**related_reading:** quant-02-plugging-in-numbers

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In

Maya spent 1/4 of her paycheck on rent and then spent 2/3 of what remained on groceries. If her paycheck was x dollars, how many dollars did she have left?

- A) x/12
- B) x/6
- C) x/4
- D) x/3
- E) 5x/12

**answer:** C
**fastest_path:** Set x = 12 and push real dollars through each sentence.
**explanation:** Let the paycheck be x = 12 dollars. Rent takes 1/4 of it: 3 dollars, leaving 9. Groceries take 2/3 of that remainder: 6 dollars, leaving 3.

Match at x = 12: A gives 1, B gives 2, C gives 3, D gives 4, E gives 5 — the choices line up as 1, 2, 3, 4, 5, and only C hits the true 3.

Structurally: after rent, 3x/4 remains; spending 2/3 of the remainder leaves 1/3 of it, and (1/3)(3x/4) = x/4.

The correct answer is C.
**mistake_a:** Subtracts both fractions from the whole paycheck: x - x/4 - 2x/3. The 2/3 applies to what remained after rent, not to the original check.
**mistake_b:** Computes the 2/3 against the rent rather than the remainder — (2/3)(x/4) — a base slip in the other direction.
**mistake_d:** Correctly flips "spent 2/3" into "kept 1/3" but applies that 1/3 to the whole paycheck, forgetting rent already took its cut.
**mistake_e:** Subtracts 1/4 and then 1/3 of the whole: 1 - 1/4 - 1/3 = 5/12 — a hybrid that converts "2/3 of the remainder spent" into "1/3 of the total spent."
**common_trap:** Sequential spending changes the base at every step. Every fraction after the first acts on a remainder, never on the original amount.
**takeaway:** Pick x as a number all the denominators divide (12 here) and narrate the story in dollars — base errors that hide in symbols become visible cash.
**est_time_seconds:** 100
**trap_type:** wrong-base
**hint_nudge:** Let the paycheck be 12 dollars and track what is actually left after each purchase.
**related_reading:** quant-02-plugging-in-numbers

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

A prize of x dollars is divided equally among p people. If the same prize had instead been divided equally among p + 2 people, each person would have received how many fewer dollars, in terms of x and p?

- A) 2x/(p(p + 2))
- B) x/(p + 2)
- C) 2x/p
- D) x/p - 2
- E) 2x/(p + 2)

**answer:** A
**fastest_path:** Compute each share before and after with real numbers, test all five choices — and when two choices tie, change the numbers and retest the survivors.
**explanation:** Plug in x = 12 and p = 2. Each of 2 people gets 6 dollars; each of 4 people would get 3. The difference is 3 dollars.

Test every choice at x = 12, p = 2: A gives 24/8 = 3, B gives 3, C gives 12, D gives 4, E gives 6. Two survivors — A and B both hit 3. This is the moment plugging in punishes the impatient: a tie means the numbers were unlucky, not that you may guess.

Re-plug with x = 30, p = 3: shares are 10 and 6, so the true difference is 4. Now A gives 60/15 = 4 but B gives 30/5 = 6. Only A survives.

Algebra confirms: x/p - x/(p + 2) = x(p + 2 - p)/(p(p + 2)) = 2x/(p(p + 2)).

The correct answer is A.
**mistake_b:** The new share per person — a real quantity from the problem, but not the *difference* the stem asks for. It even equals the correct answer when p = 2, which is exactly why one test value is not proof.
**mistake_c:** Reasons that 2 extra people must each cost the group 1/p of the prize, doubling to 2x/p — but the dilution acts on the new group size too, so the denominator needs both p and p + 2.
**mistake_d:** Subtracts people from dollars. The units do not match — a per-person dollar amount minus a head count — and plugged-in numbers expose it instantly.
**mistake_e:** Builds the difference but doubles the new share instead of forming old share minus new share — the right pieces assembled in the wrong shape.
**common_trap:** Declaring victory when one choice matches, without testing the rest. Variable-in-choices answers can collide at special values (here, A = B exactly when p = 2).
**takeaway:** Always test all five choices against your plugged-in target. A tie is information: re-plug with different numbers and only retest the tied survivors.
**est_time_seconds:** 150
**trap_type:** choice-collision
**hint_nudge:** Pick small numbers, find each person's share before and after, and check every choice — not just until the first match.
**hint_strategy:** If two choices both match your numbers, the numbers are special. Change p and test the two survivors again.
**related_reading:** quant-02-plugging-in-numbers

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

If x < x^2, which of the following must be true?

- A) x > 1
- B) x^2 > 1
- C) x < x^3
- D) x > 0
- E) x is not equal to 1

**answer:** E
**fastest_path:** First decode the condition — which numbers satisfy x < x^2? — then stress-test every choice against one value from each group.
**explanation:** Translate the condition before touching the choices. x < x^2 holds for two separate groups: every x greater than 1 (where squaring grows the number) and every negative x (where the square is positive but x is not). Numbers between 0 and 1 fail (squares shrink), and 0 and 1 fail (x equals x^2).

Build a test kit with one value per group — x = 2, x = -1/2, and x = -2 — and hunt counterexamples. A dies at x = -1/2 (not greater than 1). B dies at x = -1/2 too: its square is 1/4. D dies at any negative. C is the subtle one: it survives x = 2 (2 < 8) and even x = -1/2 (-1/2 < -1/8), but x = -2 kills it, since -2 is not less than -8.

E survives because it cannot fail: plugging x = 1 into the condition gives 1 < 1, which is false — so 1 is simply not an allowed value of x. A claim that only excludes an impossible value is automatically true for every allowed one.

The correct answer is E.
**mistake_a:** The headline trap. x > 1 describes one branch of the condition perfectly — and ignores the entire negative branch. A "must" needs every allowed x, not the famous ones.
**mistake_b:** Survives whole-number tests on both branches (x = 2, x = -2) but a negative fraction like x = -1/2 satisfies the condition while its square is only 1/4.
**mistake_c:** Engineered to outlive casual testing — it passes x = 2 and x = -1/2 — and collapses only at x = -2 or below, where cubing makes a negative number much smaller.
**mistake_d:** Assumes the condition forces positivity, but negatives satisfy x < x^2 effortlessly: the square of any negative is positive and therefore bigger.
**common_trap:** Jumping to the choices before mapping which numbers the condition actually allows. The two-branch domain (x > 1 or x < 0) is the whole question.
**takeaway:** For must-be-true problems, first list the families of numbers the condition permits, then test one delegate from each family — including a negative fraction and a deep negative. The weakest-sounding claim often wins because it is the hardest to falsify.
**est_time_seconds:** 150
**trap_type:** weakest-claim
**hint_nudge:** Which numbers make x < x^2 true? There are two separate groups — find both before testing any choice.
**hint_strategy:** Test x = 2, x = -1/2, and x = -2 against every choice. A single failure eliminates a choice; what can never fail?
**related_reading:** quant-02-plugging-in-numbers

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

A container holds v liters of solution that is p percent salt. After w liters of pure water are added, the resulting solution is what percent salt?

- A) pv/(v + w)
- B) p/(v + w)
- C) pv/(100(v + w))
- D) p(v + w)/v
- E) pv/w

**answer:** A
**fastest_path:** Plug v = 2, p = 30, w = 4, compute the real concentration, and match — the percent-versus-fraction trap eliminates the nearest miss.
**explanation:** Pick numbers that make the salt tangible: v = 2 liters at p = 30 percent salt means 0.6 liters of salt. Adding w = 4 liters of water makes 6 liters total, still containing 0.6 liters of salt. The new concentration is 0.6/6 = 0.1, which is 10 percent.

Match the choices at v = 2, p = 30, w = 4: A gives 60/6 = 10. B gives 5, C gives 0.1, D gives 90, E gives 15. Only A produces 10.

The structure: salt = pv/100 liters, total = v + w liters, and converting the fraction back to a percent multiplies by 100, which cancels the 100 under pv. Watch choice C — it is the fraction 0.1, the right quantity in the wrong units.

The correct answer is A.
**mistake_b:** Drops the v from the salt amount, as if the container held p liters of salt regardless of its size. The amount of salt depends on both the concentration and the volume.
**mistake_c:** The most dangerous miss: this is the correct *fraction* of salt, never converted back to a percent. The question asks "what percent," so the factor of 100 must reappear.
**mistake_d:** Scales the percent up by the volume ratio, as if adding water concentrated the salt. Dilution must push the percent down — a sanity check the plugged numbers make obvious (90 percent salt after adding water is absurd).
**mistake_e:** Divides by only the added water instead of the new total volume. The salt disperses through all v + w liters, not just the new ones.
**common_trap:** Percent-to-fraction whiplash: the salt amount needs p/100, but reporting a percent needs the 100 back. Choices A and C differ by exactly that factor, and only concrete numbers make the difference unmissable.
**takeaway:** In mixture problems, plug in numbers and track the physical substance (liters of salt) separately from the ratio. The substance never changes when water is added; only the denominator grows.
**est_time_seconds:** 140
**trap_type:** unit-mismatch
**hint_nudge:** How many liters of salt are in the container? Adding water never changes that number.
**hint_strategy:** Salt = pv/100 liters in v + w total liters. Converting that fraction to a percent multiplies by 100.
**related_reading:** quant-02-plugging-in-numbers

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In

If s and t are integers such that s^2 - t^2 is odd, which of the following must be even?

- A) s + t
- B) s - t
- C) st
- D) s + 2t
- E) s^2 + t^2

**answer:** C
**fastest_path:** Find one legal pair (s = 2, t = 1), eliminate, then swap the parity (s = 1, t = 2) to finish.
**explanation:** First find pairs the condition allows. Try s = 2, t = 1: s^2 - t^2 = 3, odd — legal. Test the choices: A gives 3, B gives 1, C gives 2, D gives 4, E gives 5. A, B, and E die immediately; C and D survive.

Swap the parities — s = 1, t = 2 (difference of squares is -3, still odd): C gives 2, but D gives 5. Only C survives.

The structure explains why: s^2 - t^2 = (s + t)(s - t), and an odd product requires both factors odd. Both s + t and s - t odd forces s and t to have opposite parity — one even, one odd. The product st therefore always contains the even one, making it even. Note the question's twist: the condition guarantees A and B are always *odd*, so they can never be the answer to "must be even."

The correct answer is C.
**mistake_a:** The factoring insight cuts both ways: (s + t)(s - t) odd makes s + t always odd — the exact opposite of "must be even." Tempting when you lose track of which parity the question asks for.
**mistake_b:** Same reversal as A: the condition forces s - t to be permanently odd, never even.
**mistake_d:** The visible 2t radiates evenness, but 2t is even regardless, so the parity of s + 2t is just the parity of s — which the condition leaves free to be either.
**mistake_e:** Squares feel even, but squaring preserves parity, and an even square plus an odd square is always odd.
**common_trap:** Holding the question steady while juggling parities. The condition makes some expressions always odd — choosing one of them for "must be even" is the reversal the question is built to catch.
**takeaway:** Translate the condition structurally first — s^2 - t^2 odd means s and t have opposite parity — then test one pair each way (even/odd and odd/even). Opposite parity makes the product even and both sum and difference odd, always.
**est_time_seconds:** 140
**trap_type:** parity-reversal
**hint_nudge:** Find actual integers with s^2 - t^2 odd — try s = 2, t = 1 — then also try s = 1, t = 2.
**hint_strategy:** Factor: s^2 - t^2 = (s + t)(s - t). An odd product needs both factors odd. What does that force on the parities of s and t?
**related_reading:** quant-02-plugging-in-numbers

---

## Q28
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In

This year, a worker's salary increased by x percent from its previous value of s dollars. Next year, her salary will decrease by x percent. In terms of s and x, her salary after the decrease will be how many dollars?

- A) s
- B) s - sx^2/10000
- C) s - sx/100
- D) s(1 - x/10000)
- E) s + sx^2/10000

**answer:** B
**fastest_path:** Plug s = 100 and x = 20, walk the two years to get 96, and match — only one choice produces a number below 100 by exactly the squared-percent dent.
**explanation:** Plug in s = 100 and a generous x = 20 so the effect is visible. Up 20 percent: 120. Down 20 percent of 120: minus 24, landing at 96.

Match at s = 100, x = 20: A gives 100, B gives 100 - 100(400)/10000 = 96, C gives 80, D gives 100(1 - 0.002) = 99.8, E gives 104. Only B hits 96.

The algebra behind it is a difference of squares: s(1 + x/100)(1 - x/100) = s(1 - x^2/10000) = s - sx^2/10000. An equal percent up and down never cancels — the decrease acts on a bigger base, so the net effect is always a small loss proportional to x squared. That is also a free sanity check: the answer must dip *below* s, and only B and C do, with C far too large a dent.

The correct answer is B.
**mistake_a:** The symmetric-percent illusion: up x percent then down x percent feels like a round trip. It is not — the down step removes x percent of a larger number, so the trip always ends below the start.
**mistake_c:** Applies a single x percent cut to the original salary — the right direction but the wrong size. The true loss is x percent *of* x percent, a much smaller, second-order dent.
**mistake_d:** Keeps the right shape but loses the square: 1 - x/10000 mixes the x from one factor with the 10000 from the product of both. Multiplying (1 + x/100)(1 - x/100) must produce x^2.
**mistake_e:** Right magnitude, wrong direction. The net change is a loss — adding the squared term sends the salary above s, which the plugged-in walk-through (120 down to 96) flatly contradicts.
**common_trap:** Believing equal and opposite percent changes cancel. Percents are multiplicative: the pair multiplies to 1 - x^2/10000, never to 1.
**takeaway:** For symbolic percent chains, plug in s = 100 and a large x, walk the steps, and match. Carry away the structure too: up x then down x always nets to a loss of x^2/100 percent — second order, never zero.
**est_time_seconds:** 170
**trap_type:** symmetric-percent-illusion
**hint_nudge:** Let s = 100 and x = 20. What number do the two years actually produce?
**hint_strategy:** Write both changes as multipliers, (1 + x/100) and (1 - x/100), and multiply them before touching s.
**related_reading:** quant-02-plugging-in-numbers
