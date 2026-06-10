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
**skill:** plug-100-for-percents
**trap_type:** flat-amount-vs-percent
**est_time_seconds:** 60

At a school, 25 percent of the s students play a musical instrument. In terms of s, how many of the students do not play a musical instrument?

- A) s/4
- B) 3s/4
- C) s - 25
- D) 75s
- E) s/75

**answer:** B
**fastest_path:** Set s = 100, count the non-players, and match — then plug a second value to split any survivors.
**explanation:** Let s = 100. Then 25 students play an instrument and 100 - 25 = 75 do not, so the target is 75.

Test the choices at s = 100: A gives 25, B gives 75, C gives 75, D gives 7,500, and E gives about 1.3. Two choices survive — B and C both produce 75 — which is the standard signal to plug a second value rather than guess.

Let s = 40. Now 25 percent of 40 is 10 players, so 30 students do not play. B gives 3(40)/4 = 30 and still matches; C gives 40 - 25 = 15 and dies. Only B works for every class size.

The correct answer is B.
**mistake_a:** s/4 is the number of students who do play. The stem asks for non-players, so this is the classic answer-the-wrong-question trap — the test rewards reading the final sentence twice.
**mistake_c:** s - 25 treats "25 percent" as a flat 25 students. It matches at s = 100 only because 25 percent of 100 happens to equal 25; any other class size exposes it.
**mistake_d:** 75s comes from multiplying by 75 instead of by 75/100. A class of 100 cannot contain 7,500 non-players — a one-second sanity check kills this.
**mistake_e:** s/75 divides by 75 instead of taking 75 percent. Dividing by a percent's number and multiplying by the percent are opposite operations.
**common_trap:** Stopping at the first value when two choices both match. At s = 100, "s - 25" and "3s/4" coincide; only a second plug separates them.
**takeaway:** Plug 100 for percent problems, but never declare a winner while two choices still match — one more value costs ten seconds and removes all doubt.
**hint_nudge:** Pick s = 100 and count the students who do not play.
**related_reading:** quant-02-plugging-in-numbers

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-a-smart-total-for-fractions
**trap_type:** dropped-step-in-fraction-chain
**est_time_seconds:** 70

Of the t tickets sold for a concert, 2/5 were balcony tickets and the rest were floor tickets. Half of the floor tickets were sold at a discount. In terms of t, how many discounted floor tickets were sold?

- A) t/5
- B) 3t/10
- C) t/2
- D) 3t/5
- E) t/10

**answer:** B
**fastest_path:** Pick t = 20 (divisible by 5 and by 2), walk the chain, and match the count.
**explanation:** Choose a total that every fraction divides cleanly: t = 20.

Balcony tickets: 2/5 of 20 = 8. Floor tickets: the rest, 20 - 8 = 12. Discounted floor tickets: half of 12 = 6.

Now find the choice equal to 6 when t = 20: A gives 4, B gives 3(20)/10 = 6, C gives 10, D gives 12, E gives 2. Only B matches.

The correct answer is B.
**mistake_a:** t/5 is half of the balcony fraction (2/5), not half of the floor fraction. It comes from halving the number you just computed instead of the "rest."
**mistake_c:** t/2 halves the entire ticket count, skipping the split into balcony and floor. The discount applied only to floor tickets.
**mistake_d:** 3t/5 is the full floor count — correct setup, but the final "half were discounted" step never happened. Unfinished chains are the most common error on multi-step fraction problems.
**mistake_e:** t/10 takes half of one fifth, a mangled combination of the two fractions in the stem. Concrete numbers make this impossible: you would be claiming only 2 of 20 tickets were discounted when 12 floor tickets exist.
**common_trap:** Stopping one step early and reporting the floor count (3t/5) instead of the discounted half. Each sentence in the stem is one operation — count the sentences, count your steps.
**takeaway:** For fraction chains, pick a total divisible by every denominator in sight; the problem becomes counting actual tickets, and a skipped step shows up as a number that is visibly too big.
**hint_nudge:** Try t = 20 so that fifths and halves both come out whole.
**related_reading:** quant-02-plugging-in-numbers

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** parity-testing-with-one-odd-value
**trap_type:** single-test-acceptance
**est_time_seconds:** 60

If k is an odd integer, which of the following must be odd?

- A) k + 1
- B) 2k
- C) k + 2
- D) 3k + 1
- E) k^2 + k

**answer:** C
**fastest_path:** Plug k = 1 and k = 3; the choice that is odd both times — and for a structural reason — wins.
**explanation:** Test k = 1: A gives 2, B gives 2, C gives 3, D gives 4, E gives 2. Only C is odd, and one plug already eliminates the other four.

Confirm with k = 3: C gives 5, still odd. The structure guarantees it — an odd number plus an even number (2) is always odd, so k + 2 simply shifts an odd integer two places along the number line, landing on the next odd integer.

The correct answer is C.
**mistake_a:** k + 1 turns an odd integer into an even one — adding 1 always flips parity. It tempts students who misread the question as "must be even."
**mistake_b:** 2k carries an explicit factor of 2, so it is always even. Anything of the form 2 times an integer can never be odd.
**mistake_d:** 3k + 1 looks odd because of the 3, but odd times odd is odd, and odd plus 1 is even. Each operation changes parity; you must track the chain to the end.
**mistake_e:** k^2 + k factors as k(k + 1), a product of two consecutive integers — one of them is always even, so the product is always even. This is the most disguised even expression on the list.
**common_trap:** Reasoning "3 is odd, so 3k + 1 feels odd" instead of computing. Parity intuition lies; a thirty-second plug of k = 1 does not.
**takeaway:** Adding an even number never changes parity; adding an odd number always flips it. When in doubt, plug the smallest odd integer and just look.
**hint_nudge:** Try k = 1 and check all five choices — most die instantly.
**related_reading:** quant-02-plugging-in-numbers

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-numbers-for-variable-choices
**trap_type:** off-by-one-fencepost
**est_time_seconds:** 60

A taxi ride costs f dollars for the first mile plus m dollars for each mile after the first. In terms of f and m, what is the cost, in dollars, of a 9-mile ride?

- A) 9(f + m)
- B) f + 9m
- C) f + 8m
- D) 8(f + m)
- E) 9f + m

**answer:** C
**fastest_path:** Set f = 2 and m = 1, price the ride mile by mile, then match the total.
**explanation:** Pick easy distinct numbers: f = 2 dollars for the first mile, m = 1 dollar per mile after it.

A 9-mile ride is one first mile plus 8 additional miles, so the fare is 2 + 8(1) = 10 dollars.

Test the choices with f = 2, m = 1: A gives 27, B gives 11, C gives 2 + 8 = 10, D gives 24, E gives 19. Only C produces the actual fare.

The correct answer is C.
**mistake_a:** 9(f + m) charges both the first-mile rate and the per-mile rate on all nine miles — double-billing every mile. Plugging numbers makes the inflated total obvious.
**mistake_b:** f + 9m is the fencepost error: it bills m for nine additional miles, but the first of the nine is already covered by f. Nine miles means eight miles "after the first."
**mistake_d:** 8(f + m) applies the first-mile charge eight times. The flat fee f appears exactly once on any ride, no matter the distance.
**mistake_e:** 9f + m swaps the roles of the two rates, charging the flat fee per mile. With concrete numbers the fare comes out absurdly front-loaded.
**common_trap:** Multiplying m by 9 instead of 8. "Each mile after the first" removes one mile from the count — the classic fencepost.
**takeaway:** When a rate problem has a different charge for the first unit, plug numbers and count the units by hand once; the count of "additional" units is always total minus one.
**hint_nudge:** With f = 2 and m = 1, what does a 9-mile ride actually cost?
**related_reading:** quant-02-plugging-in-numbers

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** fraction-stress-testing
**trap_type:** whole-number-intuition-on-fractions
**est_time_seconds:** 60

If 0 < x < 1, which of the following has the greatest value?

- A) x
- B) x^2
- C) x/2
- D) 1/x
- E) x^3

**answer:** D
**fastest_path:** Plug x = 1/2 and compare the five results directly.
**explanation:** Choose x = 1/2, a value that actually satisfies 0 < x < 1.

Compute each choice: A gives 0.5, B gives 0.25, C gives 0.25, D gives 1/(1/2) = 2, E gives 0.125. The reciprocal towers over everything else.

The result is structural, not lucky: every choice except D multiplies a positive fraction by something at most 1, so A, B, C, and E all stay below 1 — while the reciprocal of a number between 0 and 1 is always greater than 1.

The correct answer is D.
**mistake_a:** x is the largest of the four "shrinking" choices, so it wins among A, B, C, and E — but it is still less than 1, and 1/x is always greater than 1 on this interval.
**mistake_b:** x^2 tempts students carrying whole-number intuition, where squaring makes things bigger. Squaring a proper fraction makes it smaller.
**mistake_c:** x/2 halves an already-small number. It can tie x^2 at x = 1/2, but both sit far below the reciprocal.
**mistake_e:** x^3 is the smallest value on the list — each extra power of a proper fraction shrinks it further. Choosing it usually means the student ranked the choices backward.
**common_trap:** Importing the x > 1 hierarchy (higher powers are bigger) into the interval 0 < x < 1, where every relationship reverses.
**takeaway:** On 0 < x < 1, powers shrink and reciprocals exceed 1. One plug of x = 1/2 re-derives both facts faster than trying to remember them.
**hint_nudge:** Test x = 1/2 — including choice D.
**related_reading:** quant-02-plugging-in-numbers

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-numbers-for-variable-choices
**trap_type:** unweighted-average
**est_time_seconds:** 100

On a test, the j juniors in a class scored an average of x points and the k seniors scored an average of y points. In terms of j, k, x, and y, what was the average score for the class as a whole?

- A) (x + y)/2
- B) (jx + ky)/(j + k)
- C) (jy + kx)/(j + k)
- D) (jx + ky)/(jk)
- E) (x + y)/(j + k)

**answer:** B
**fastest_path:** Pick unequal group sizes — say 2 juniors and 3 seniors — compute the real class average, and match.
**explanation:** Plug j = 2, k = 3, x = 10, y = 20. Choosing unequal group sizes matters here: with j = k, the simple average (x + y)/2 would coincidentally match and you could not tell A from B.

The juniors score 2(10) = 20 points in total and the seniors 3(20) = 60, so the class of 5 students scores 80 points, for an average of 80/5 = 16.

Test the choices: A gives 15, B gives (20 + 60)/5 = 16, C gives (40 + 30)/5 = 14, D gives 80/6, E gives 30/5 = 6. Only B reproduces the true average.

The correct answer is B.
**mistake_a:** (x + y)/2 averages the two averages, ignoring group sizes. It is only correct when the groups are equal — which is exactly why you must plug unequal values of j and k.
**mistake_c:** (jy + kx)/(j + k) is the right formula with the weights swapped: each average is multiplied by the other group's headcount. Concrete numbers expose the swap immediately.
**mistake_d:** (jx + ky)/(jk) has the correct total on top but divides by the product of the group sizes instead of the number of students, j + k.
**mistake_e:** (x + y)/(j + k) divides points by people without first weighting the averages by headcount — a units mismatch that produces a nonsense value like 6 for a class averaging in the teens.
**common_trap:** Averaging averages. A class average is total points over total students; group averages must be weighted by group size before combining.
**takeaway:** When variables include group sizes, always plug unequal sizes — equal sizes make the unweighted-average trap invisible, and the GMAT counts on that.
**hint_nudge:** Compute total points first, then divide by total students.
**hint_strategy:** Use j = 2, k = 3 — unequal on purpose — so the choice that ignores group sizes stops matching.
**related_reading:** quant-02-plugging-in-numbers

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** generate-instances-from-remainder-conditions
**trap_type:** remainder-misread
**est_time_seconds:** 90

When the positive integer n is divided by 6, the remainder is 5. Which of the following must be a multiple of 6?

- A) n
- B) n + 1
- C) n + 2
- D) n + 3
- E) n + 5

**answer:** B
**fastest_path:** List two actual values of n — 5 and 11 — and test the choices against both.
**explanation:** The cleanest way to handle a remainder condition is to manufacture numbers that satisfy it. "Remainder 5 when divided by 6" gives n = 5, 11, 17, 23, …

Test n = 5: the choices become 5, 6, 7, 8, 10. Only n + 1 = 6 is a multiple of 6.

Confirm with n = 11: n + 1 = 12, again a multiple of 6. Structurally, n sits 5 past a multiple of 6, which is the same as sitting 1 short of the next one — so adding 1 always completes the multiple.

The correct answer is B.
**mistake_a:** n itself leaves remainder 5, so it is never a multiple of 6. This choice catches students who skim the stem and equate "involves 6" with "divisible by 6."
**mistake_c:** n + 2 lands 1 past a multiple of 6 (for example 7 or 13). Plugging a single real value of n kills it instantly.
**mistake_d:** n + 3 lands at numbers like 8 and 14 — remainder 2. It tempts students who reach for "half of 6" without testing.
**mistake_e:** n + 5 is the signature trap: the remainder is 5, so adding 5 "feels" like completing something. But 5 + 5 = 10 and 11 + 5 = 16 — adding the remainder again overshoots; you need the complement, 6 - 5 = 1.
**common_trap:** Adding the remainder (5) instead of its complement (1). Remainder 5 means one short of the next multiple, not five short.
**takeaway:** Convert any remainder condition into two or three concrete instances (here 5 and 11) before touching the choices — the right answer survives both, and the tempting one rarely survives the first.
**hint_nudge:** What are the three smallest positive values n can take?
**hint_strategy:** Remainder 5 out of 6 means n is exactly 1 below the next multiple of 6.
**related_reading:** quant-02-plugging-in-numbers

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** ratio-to-fraction-of-total
**trap_type:** ratio-part-vs-whole
**est_time_seconds:** 90

The ratio of red marbles to blue marbles in a bag is 3 to 5. If the bag contains m marbles, all of which are red or blue, how many of the marbles are blue, in terms of m?

- A) 3m/8
- B) 5m/8
- C) 3m/5
- D) 5m/3
- E) m/5

**answer:** B
**fastest_path:** Pick m = 16 — twice the ratio total of 8 — count the blue marbles, and match.
**explanation:** A 3-to-5 ratio means the marbles come in batches of 3 + 5 = 8, so pick a total divisible by 8: m = 16.

Two full batches means 6 red and 10 blue. The target is 10.

Test the choices at m = 16: A gives 6, B gives 5(16)/8 = 10, C gives 9.6, D gives about 26.7, E gives 3.2. Only B matches — and notice that C, D, and E do not even produce whole marbles, an instant disqualification for a counting question.

The correct answer is B.
**mistake_a:** 3m/8 is the red count. Right method, wrong color — the stem asks for blue, and ratio problems love to ask for the part you did not compute first.
**mistake_c:** 3m/5 misuses the ratio numbers as a fraction of the total. The fraction of blue marbles is 5 out of 8 (the ratio total), never 3 out of 5 or 5 out of 3.
**mistake_d:** 5m/3 produces more blue marbles than the bag holds (about 27 out of 16) — the inverted ratio applied to the whole. A plausibility glance at concrete numbers catches it.
**mistake_e:** m/5 reads the "5" as a divisor of the total rather than as a share of 8 parts. It gives 3.2 marbles, which is not a thing.
**common_trap:** Treating ratio parts (3 and 5) as fractions of the whole. The denominators in a part-to-whole conversion always come from the sum of the parts.
**takeaway:** Convert a ratio to fractions of the total by summing the parts first; then plug a total divisible by that sum so every count is a whole number.
**hint_nudge:** Out of every 8 marbles, how many are blue?
**related_reading:** quant-02-plugging-in-numbers

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-numbers-for-variable-choices
**trap_type:** timeline-misalignment
**est_time_seconds:** 100

Ana is twice as old as Ben was 4 years ago. If Ben is b years old now, how old will Ana be in 3 years, in terms of b?

- A) 2b - 5
- B) 2b - 8
- C) 2b - 1
- D) 2b + 3
- E) 2b + 2

**answer:** A
**fastest_path:** Make Ben a real age, walk the timeline forward and back by hand, then match.
**explanation:** Pick b = 10, so Ben is 10 now.

Four years ago Ben was 6, so Ana is now twice that: 12. In 3 years Ana will be 15. The target is 15.

Test the choices at b = 10: A gives 15, B gives 12, C gives 19, D gives 23, E gives 22. Only A matches. As a check with b = 7: Ben was 3, Ana is 6, and in 3 years she is 9 — and A gives 2(7) - 5 = 9 again.

The correct answer is A.
**mistake_b:** 2b - 8 is Ana's age now, not in 3 years. The setup was perfect; the final time-shift never happened — the most common way to lose this point.
**mistake_c:** 2b - 1 comes from distributing carelessly: writing 2(b - 4) + 3 as 2b - 4 + 3. The 4 must be doubled along with the b.
**mistake_d:** 2b + 3 doubles Ben's current age instead of his age 4 years ago, then adds 3. It ignores the "was 4 years ago" clause entirely.
**mistake_e:** 2b + 2 shifts Ben forward 3 years before doubling — applying the future shift to the wrong person at the wrong step. Timeline order matters: past condition first, then Ana's future.
**common_trap:** Answering with Ana's current age (2b - 8) because the algebraic work "feels finished" once Ana's age is found. The question asks about 3 years from now.
**takeaway:** Age problems are timeline problems: plug a real age, write the three moments (4 years ago, now, in 3 years) on scratch, and read the answer off the last one.
**hint_nudge:** Give Ben a concrete age and trace the timeline by hand.
**hint_strategy:** With b = 10: Ben was 6, so Ana is 12 now. The question asks about 3 years from now.
**related_reading:** quant-02-plugging-in-numbers

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** adversarial-case-testing
**trap_type:** unwarranted-specificity
**est_time_seconds:** 95

If a and b are integers and a + b is odd, which of the following must be even?

- A) ab
- B) a - b
- C) a^2 + b^2
- D) a + 2b
- E) ab + 1

**answer:** A
**fastest_path:** An odd sum forces one even and one odd integer — test the pair (2, 1) and then swap to (1, 2).
**explanation:** Decode the condition first: a sum of two integers is odd exactly when one is even and one is odd. So the legal test cases are pairs like (2, 1) and (1, 2).

Test a = 2, b = 1: ab = 2 (even), a - b = 1 (odd), a^2 + b^2 = 5 (odd), a + 2b = 4 (even), ab + 1 = 3 (odd). Two survivors: A and D.

Swap to a = 1, b = 2: ab = 2 (still even), but a + 2b = 5 — odd. D dies. Only A survives, and it must: with one even factor, the product ab always carries a factor of 2.

The correct answer is A.
**mistake_b:** a - b has the same parity as a + b — both flip together — so it is always odd here, never even. Students often assume subtraction "cancels" the oddness.
**mistake_c:** a^2 + b^2 keeps each number's parity (squaring never changes parity), so it is odd plus even = odd, every time.
**mistake_d:** a + 2b is the trap for one-test students: it is even whenever a is even, as in (2, 1). But the even number could be b instead — swap to (1, 2) and it turns odd. The condition never tells you which variable is the even one.
**mistake_e:** ab + 1 is the correct answer plus one — always odd. It punishes sign-off without a final read of what you computed.
**common_trap:** Testing one pair and stopping. The condition "a + b is odd" is symmetric in a and b, so any surviving choice must also survive with the values swapped.
**takeaway:** Translate the condition into its structural meaning (one even, one odd) before plugging, and always test the swapped pair — symmetric conditions demand symmetric survivors.
**hint_nudge:** What does "a + b is odd" force about the parities of a and b?
**hint_strategy:** Try (a, b) = (2, 1), then (1, 2). A "must" answer survives both.
**related_reading:** quant-02-plugging-in-numbers

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** plug-a-dimension-instead-of-solving-symbolically
**trap_type:** formula-factor-slip
**est_time_seconds:** 105

The length of a rectangle is twice its width. If the perimeter of the rectangle is P, what is the area of the rectangle in terms of P?

- A) P^2/6
- B) P^2/9
- C) P^2/12
- D) P^2/18
- E) 2P^2/9

**answer:** D
**fastest_path:** Invent a real rectangle — width 3, length 6 — compute P and the area, then match.
**explanation:** Instead of solving for the area symbolically, build one actual rectangle that fits the description. Let the width be 3, so the length is 6.

Its perimeter is 2(3 + 6) = 18 and its area is 3 times 6 = 18. So whichever choice is correct must turn P = 18 into 18.

Test them: A gives 324/6 = 54, B gives 36, C gives 27, D gives 324/18 = 18, E gives 72. Only D returns the true area.

The correct answer is D.
**mistake_a:** P^2/6 typically comes from setting P = w + l (forgetting that a perimeter has two of each side) and then mixing up a factor. The fake rectangle exposes it: a perimeter-18 rectangle of this shape has area 18, not 54.
**mistake_b:** P^2/9 results from writing the perimeter as 3w instead of 6w — adding one width and one length only. The perimeter wraps around the whole rectangle: 2(w + l) = 6w here.
**mistake_c:** P^2/12 is a halfway-correct manipulation that loses a factor of 2 between w = P/6 and the area 2w^2. Symbol-pushing invites exactly this slip; a concrete rectangle does not.
**mistake_e:** 2P^2/9 doubles where it should not, landing at four times the true area. It often follows from squaring P/3 (the length) and calling that the area — but area is length times width, not length squared.
**common_trap:** Writing the perimeter as w + l or 3w instead of 2(w + l). One lost factor of 2 in the perimeter becomes a factor of 4 in the squared answer.
**takeaway:** For geometry with variable answers, construct one concrete figure satisfying the constraints — the formulas (and their lost factors) take care of themselves.
**hint_nudge:** Build a real rectangle: width 3, length 6. What are P and the area?
**hint_strategy:** Find the choice that maps your P onto your area exactly.
**related_reading:** quant-02-plugging-in-numbers

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-a-smart-total-for-fractions
**trap_type:** fraction-of-wrong-base
**est_time_seconds:** 105

Carla spent 1/4 of her paycheck on rent and then spent 2/3 of the remainder on groceries. If her paycheck was d dollars, how much money, in dollars, did she have left, in terms of d?

- A) d/12
- B) d/4
- C) 5d/12
- D) d/2
- E) d/3

**answer:** B
**fastest_path:** Plug d = 12 (divisible by 4 and 3), spend the money step by step, and see what is left.
**explanation:** Let the paycheck be d = 12 dollars — divisible by every denominator in the stem.

Rent: 1/4 of 12 = 3 dollars, leaving 9. Groceries: 2/3 of the 9-dollar remainder = 6 dollars, leaving 3.

The target is 3. Test the choices at d = 12: A gives 1, B gives 3, C gives 5, D gives 6, E gives 4. Only B matches — Carla keeps exactly a quarter of her paycheck.

The correct answer is B.
**mistake_a:** d/12 comes from computing 1 - 1/4 - 2/3 — subtracting both fractions from the whole paycheck. But the 2/3 was taken from the remainder, not from the original amount; the two fractions live on different bases.
**mistake_c:** 5d/12 subtracts 1/4 and then 1/3 of the whole, a double base error. With real dollars the bookkeeping cannot drift like this.
**mistake_d:** d/2 is the grocery bill, not the leftover. After a multi-step spend-down, always reread which quantity the question wants.
**mistake_e:** d/3 gets the keep-fraction right (after spending 2/3, Carla keeps 1/3) but applies it to the whole paycheck instead of to the post-rent remainder. Right fraction, wrong base — at d = 12 it claims 4 dollars when only 3 remain.
**common_trap:** Applying the second fraction to the original paycheck instead of to the remainder. "Of the remainder" changes the base, and bases are where fraction problems are won or lost.
**takeaway:** Pick a total divisible by all denominators and spend it sentence by sentence — each fraction then acts on visible dollars, making base errors impossible.
**hint_nudge:** Try d = 12 and track the actual dollars after each purchase.
**hint_strategy:** The 2/3 applies to what was left after rent, not to the full paycheck.
**related_reading:** quant-02-plugging-in-numbers

---

## Q24
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In
**skill:** adversarial-case-testing
**trap_type:** sign-rule-overgeneralization
**est_time_seconds:** 130

If x < y < 0, which of the following must be true?

- A) x^2 < y^2
- B) 1/x < 1/y
- C) x/y > 1
- D) x + y > xy
- E) x + y < -2

**answer:** C
**fastest_path:** Test x = -3, y = -2, then stress the survivors with small negatives like x = -0.3, y = -0.2.
**explanation:** Pick legal values: x = -3, y = -2 (x is more negative, both below zero).

Run the choices. A: 9 < 4 is false. B: -1/3 < -1/2 is false (-1/3 sits to the right of -1/2). C: (-3)/(-2) = 1.5 > 1, true so far. D: -5 > 6 is false. E: -5 < -2, true so far.

Two survivors — so stress-test with negative fractions: x = -0.3, y = -0.2. Now E says -0.5 < -2, false. C says (-0.3)/(-0.2) = 1.5 > 1, still true.

C is forced structurally: x and y share a sign, so x/y is positive, and since x is farther from zero than y, the magnitude of the quotient exceeds 1. Both facts hold for every pair with x < y < 0.

The correct answer is C.
**mistake_a:** x^2 < y^2 imports "x is smaller, so its square is smaller" from positive numbers. For negatives, more negative means larger magnitude — squaring reverses the order. The given inequality actually forces x^2 > y^2.
**mistake_b:** 1/x < 1/y looks like the familiar "taking reciprocals flips the inequality" rule applied backward. For two numbers of the same sign, reciprocation flips the order — so 1/x > 1/y here, the exact opposite.
**mistake_d:** x + y > xy pits a negative sum against a positive product (negative times negative). The sum can never beat the product, so this is always false — chosen by students who lose track of which sign rule applies to which operation.
**mistake_e:** x + y < -2 is the trap for integer-only testers: it holds for every pair of negative integers, since the two most modest ones, -1 and -2, already sum to -3. Only fractional values like -0.3 and -0.2 expose it — nothing in the stem says x and y are integers.
**common_trap:** Testing only negative integers. The stem never says "integer," and choices built to survive integer tests die on negative fractions between -1 and 0.
**takeaway:** For must-be-true with negatives, your test kit needs both a big negative pair and a fractional pair near zero — same-sign division always lands positive, and the farther-from-zero numerator pushes the quotient past 1.
**hint_nudge:** Start with x = -3, y = -2 — then ask what the stem does not say about x and y.
**hint_strategy:** Two choices survive integer tests. Try x = -0.3 and y = -0.2 on both.
**related_reading:** quant-02-plugging-in-numbers

---

## Q25
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In
**skill:** test-values-by-sign-and-size-zone
**trap_type:** missed-number-line-zone
**est_time_seconds:** 130

If x^3 < x < x^2, which of the following could be the value of x?

- A) -3
- B) -1/2
- C) 0
- D) 1/2
- E) 3

**answer:** A
**fastest_path:** The five choices are one representative from each zone of the number line — test them against both inequalities and keep the survivor.
**explanation:** The choices sample the five zones where powers behave differently: below -1, between -1 and 0, zero, between 0 and 1, and above 1. Each zone has its own ordering of x, x^2, x^3, so test zone by zone.

A, x = -3: x^3 = -27 and x^2 = 9, so the claim is -27 < -3 < 9. True on both ends — A works, and you could stop here.

For completeness: B, x = -1/2: x^3 = -1/8, and -1/8 < -1/2 is false (cubing a negative fraction moves it toward zero, not away). C, x = 0: 0 < 0 is false. D, x = 1/2: the right half needs 1/2 < 1/4, false — squaring a positive fraction shrinks it. E, x = 3: the left half needs 27 < 3, false.

The correct answer is A.
**mistake_b:** -1/2 tempts because "cubes of negatives are more negative." That holds only beyond -1: cubing a fraction like -1/2 shrinks its magnitude, landing at -1/8, which is greater than -1/2, so the first inequality fails.
**mistake_c:** 0 makes all three expressions equal, and strict inequalities cannot hold between equal values. Zero is the classic boundary value that breaks "could be" claims.
**mistake_d:** 1/2 satisfies x^3 < x (cubes of positive fractions shrink) — but the second half demands x < x^2, and squaring a positive fraction also shrinks it. Students who check only one of the two inequalities land here.
**mistake_e:** 3 satisfies x < x^2 easily, but for any number above 1 the cube is the biggest power of all, so x^3 < x is hopeless. The mirror image of D: only half the condition checked.
**common_trap:** Verifying one inequality and coasting on the other. A chained condition like x^3 < x < x^2 is two separate claims, and each wrong choice here passes exactly one of them.
**takeaway:** Powers order themselves differently in each of the five number-line zones; when a problem chains inequalities between powers, test one representative per zone and check every link in the chain.
**hint_nudge:** The condition has two parts. Check each choice against both.
**hint_strategy:** Where on the number line does cubing make a number smaller while squaring makes it bigger? Only x < -1 does both.
**related_reading:** quant-02-plugging-in-numbers

---

## Q26
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In
**skill:** pick-numbers-for-variable-choices
**trap_type:** percent-vs-fraction-confusion
**est_time_seconds:** 130

A saltwater solution weighs w ounces, of which s percent is salt by weight. After z ounces of pure water are added, what percent of the resulting solution is salt by weight?

- A) sw/(w + z)
- B) sw/z
- C) s(w + z)/w
- D) sz/(w + z)
- E) sw/(100(w + z))

**answer:** A
**fastest_path:** Build a tiny real mixture — 2 ounces at 50 percent salt, add 3 ounces of water — and match the new percent.
**explanation:** Make the mixture concrete. Let w = 2 ounces, s = 50 (so the solution is half salt: 1 ounce of salt), and add z = 3 ounces of water.

The salt is unchanged at 1 ounce; the solution now weighs 2 + 3 = 5 ounces. The new concentration is 1/5, which is 20 percent. The target number is 20.

Test the choices with s = 50, w = 2, z = 3: A gives 100/5 = 20, B gives 100/3, C gives 250/2 = 125, D gives 150/5 = 30, E gives 0.2. Only A produces 20.

The correct answer is A.
**mistake_b:** sw/z divides the salt by the added water alone, as though the original solution evaporated. The new base is everything in the container: w + z.
**mistake_c:** s(w + z)/w runs the dilution upside down — concentration cannot increase when you add pure water, yet this gives 125 percent. A plausibility check on the plugged value kills it without algebra.
**mistake_d:** sz/(w + z) attaches the percent to the added water instead of to the original solution. The salt came from the w ounces, so s multiplies w.
**mistake_e:** sw/(100(w + z)) is the right structure divided by 100 — it returns the fraction 0.2 instead of the percent 20. Since s was given as a percent, the 100s cancel; reintroducing one converts your answer to the wrong unit.
**common_trap:** The percent-versus-fraction unit slip in choice E. Track whether each quantity in your formula is a percent (like s = 50) or a decimal fraction (like 0.5) — mixing them shifts the answer by a factor of 100.
**takeaway:** For mixture problems with variable answers, plug numbers that make the salt a clean amount, remember the salt never changes when water is added, and confirm your final value is in the units the stem asked for.
**hint_nudge:** The amount of salt does not change when pure water is added.
**hint_strategy:** Try w = 2, s = 50, z = 3: one ounce of salt in five ounces of solution. What percent is that?
**related_reading:** quant-02-plugging-in-numbers

---

## Q27
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In
**skill:** find-the-minimal-witness
**trap_type:** divisibility-transfer-assumption
**est_time_seconds:** 140

If n is a positive integer and n^2 is divisible by 12, which of the following must be a divisor of n?

- A) 4
- B) 6
- C) 8
- D) 9
- E) 12

**answer:** B
**fastest_path:** Hunt for the smallest n whose square is divisible by 12 — that single witness eliminates four choices at once.
**explanation:** The power move on "must divide n" questions is to find the smallest qualifying n and let it veto the choices. Test squares: 1, 4, 9, 16, 25, 36 — the first one divisible by 12 is 36, so n = 6 qualifies.

Now let n = 6 judge the choices: 4 does not divide 6, 8 does not, 9 does not, 12 does not. Four choices die from one witness, leaving only 6.

Why must 6 divide every qualifying n? Since 12 = 4 x 3 divides n^2, the prime 2 appears at least twice and the prime 3 at least once in n^2. Primes in a square come from the primes of n itself: if 3 divides n^2, then 3 divides n; and n^2 having at least two factors of 2 forces n to have at least one. So n is divisible by both 2 and 3 — that is, by 6.

The correct answer is B.
**mistake_a:** 4 divides 12, so it feels safe — but n = 6 has a square divisible by 12 while 4 does not divide 6. Divisibility of n^2 by 4 only guarantees one factor of 2 in n, not two.
**mistake_c:** 8 does not even divide 12; it tempts students pattern-matching on powers of 2 rather than working from the actual condition.
**mistake_d:** 9 reverses the logic: 3 dividing n^2 forces 3 to divide n, and then n^2 picks up 9 automatically — but n itself never needs the full 9. The square absorbs the extra factor.
**mistake_e:** 12 is the headline trap: assuming the divisor of n^2 transfers whole to n. Squaring doubles every prime exponent, so n can get away with roughly "half" of each prime power — 6 squared already contains 12.
**common_trap:** Transferring divisibility from n^2 straight to n. The condition on the square is weaker than it looks, because squaring manufactures extra prime factors.
**takeaway:** On must-divide questions, find the minimal witness (smallest qualifying n) and let it eliminate; what survives is what the primes genuinely force.
**hint_nudge:** Find the smallest perfect square divisible by 12.
**hint_strategy:** n = 6 gives n^2 = 36, divisible by 12. Which choices divide 6?
**related_reading:** quant-02-plugging-in-numbers

---

## Q28
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Plugging In
**skill:** challenge-full-zone-sweep
**trap_type:** incomplete-case-coverage
**est_time_seconds:** 150

If x^2 > x^3, which of the following must be true?

- A) x^2 > x
- B) x > 0
- C) x < 1
- D) x^3 < x
- E) x^2 < 1

**answer:** C
**fastest_path:** First find every x that satisfies the condition, then make each wrong choice fail somewhere in that set — sweep a positive fraction, a negative fraction, and a large negative.
**explanation:** This is a two-layer plugging problem: the condition x^2 > x^3 admits more values than first appears, and each wrong choice survives some of them. Start by mapping the condition. It holds for any negative x (positive square beats negative cube), and for positive fractions like 1/2 (1/4 > 1/8). It fails for x = 0 (equality) and for any x of at least 1. So the legal set is every nonzero x below 1.

Now hunt counterexamples with one value from each zone — x = 1/2, x = -1/2, x = -2:

A: at x = 1/2, x^2 = 1/4 is not greater than 1/2. False. B: x = -1/2 satisfies the condition but is not positive. False. D: at x = -1/2, x^3 = -1/8, which is greater than -1/2, not less. False. E: at x = -2, x^2 = 4, not less than 1. False.

C survives everything, and must: if x were 1 or more, multiplying x^2 by x could only grow it (or hold it equal at x = 1), contradicting x^2 > x^3. And x = 0 gives equality, not the strict inequality. So x < 1 is forced.

The correct answer is C.
**mistake_a:** x^2 > x holds for all the negative solutions and feels equivalent to the given condition — but the positive fractions break it, since squaring shrinks them. Students who test only negatives land here.
**mistake_b:** x > 0 is the mirror trap: testing only positive fractions like 1/2 makes it look forced. Every negative number also satisfies x^2 > x^3, because a positive square always beats a negative cube.
**mistake_d:** x^3 < x is true for large negatives and for positive fractions — the two most natural test values — and fails only on negative fractions like -1/2, where the cube moves toward zero and overtakes x. The least obvious counterexample zone on the list.
**mistake_e:** x^2 < 1 holds for every fractional solution, positive or negative, and dies only when you remember the large negatives: x = -2 satisfies the original condition with x^2 = 4. Squares of negatives are not small.
**common_trap:** Solving the condition for one zone of the number line and generalizing. Here the condition is satisfied in three zones (large negatives, negative fractions, positive fractions), and every wrong choice is engineered to survive at least one of them.
**takeaway:** A must-be-true condition defines a set; your test values have to cover all of it. Sweep one representative per zone — large negative, negative fraction, positive fraction — before certifying any choice as "must."
**hint_nudge:** Which values of x satisfy x^2 > x^3? There are more kinds than one.
**hint_strategy:** Negatives of any size qualify, and so do positive fractions. Test a choice with x = 1/2, x = -1/2, and x = -2 before trusting it.
**related_reading:** quant-02-plugging-in-numbers
