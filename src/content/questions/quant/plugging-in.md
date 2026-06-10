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
**skill:** vic-pick-compute-match
**trap_type:** unit-conversion-slip
**est_time_seconds:** 60

A car rental company charges d dollars per day plus 25 cents per mile driven. Which expression gives the total charge, in dollars, for renting a car for 3 days and driving it 80 miles?

- A) 3d + 20
- B) 3d + 2000
- C) d + 20
- D) 3(d + 20)
- E) 3d + 25

**answer:** A
**fastest_path:** Set d to a clean number, compute the real bill in dollars, and match the choices — the cents-to-dollars conversion happens automatically.
**explanation:** Let d = 10. The daily charge for 3 days is 3(10) = 30 dollars. The mileage charge is 80 miles at 25 cents each: 80 times 25 = 2,000 cents, which is 20 dollars. The total bill is 30 + 20 = 50 dollars.

Now plug d = 10 into the choices and keep the one equal to 50. Choice A gives 3(10) + 20 = 50. The others miss: B gives 2,030, C gives 30, D gives 90, E gives 35.

Computing a real bill forces you to handle the cents-to-dollars conversion before you ever look at the choices — which is exactly where the wrong answers hide.

The correct answer is A.
**mistake_b:** Keeps the mileage charge in cents: 80 miles at 25 cents is 2,000 cents, but the question asks for dollars. Mixing units inside one expression is the whole trap here.
**mistake_c:** Drops the 3-day multiplier on the daily rate — the d term needs to be paid three times.
**mistake_d:** Charges the 20-dollar mileage fee once per day. Mileage is billed once, on the total miles driven, not per day.
**mistake_e:** Adds the per-mile rate itself instead of multiplying it by the miles driven.
**common_trap:** Building the expression symbolically and writing 0.25 times 80 as 80 — the cents-versus-dollars slip is invisible in symbols but impossible once you compute an actual bill.
**takeaway:** When a rate problem mixes units (cents and dollars, minutes and hours), plug in and compute the real total first — the conversion error cannot survive actual arithmetic.
**hint_nudge:** Pick a number for d and work out what the rental would actually cost, in dollars.
**related_reading:** quant-02-plugging-in-numbers

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** smart-number-selection
**trap_type:** misread-relationship
**est_time_seconds:** 60

A bakery sold m muffins on Monday and three times as many muffins on Tuesday. In terms of m, how many muffins did the bakery sell on the two days combined?

- A) 2m
- B) 3m
- C) 4m
- D) m + 3
- E) 3m + 3

**answer:** C
**fastest_path:** Let m = 2, count both days by hand, and match — avoid m = 1, which makes two choices collide.
**explanation:** Let m = 2. Monday: 2 muffins. Tuesday is three times as many: 6 muffins. Combined: 2 + 6 = 8.

Plug m = 2 into the choices and keep the one equal to 8. Choice C gives 4(2) = 8. The others miss: A gives 4, B gives 6, D gives 5, E gives 9.

Notice what would have happened with m = 1: choice C gives 4 and choice D gives 1 + 3 = 4 as well — a tie. Small is good, but 1 is one of the values that makes different expressions collapse together, which is why VIC mode bans it.

The correct answer is C.
**mistake_a:** Doubles Monday instead of adding a day that is three times as big.
**mistake_b:** That is Tuesday alone — the stem asks for both days combined, so Monday's m still has to be added.
**mistake_d:** Reads "three times as many" as "three more." With m = 2 the difference is obvious: 6 muffins versus 5.
**mistake_e:** Stacks both errors — triples Monday and then adds 3 more.
**common_trap:** Translating "three times as many" as "+ 3." Plugging in a real number makes the two readings produce visibly different counts.
**takeaway:** Pick numbers that keep the choices apart — 0 and 1 make expressions like 4m and m + 3 collide, so start at 2 or higher.
**hint_nudge:** Give m a real value and literally count the muffins for each day.
**related_reading:** quant-02-plugging-in-numbers

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** single-case-generalization
**est_time_seconds:** 60

If n is an odd integer, which of the following must be an odd integer?

- A) n + 1
- B) 2n
- C) n + 2
- D) 3n + 1
- E) n^2 + n

**answer:** C
**fastest_path:** Plug one small odd value — every wrong choice already fails at n = 1.
**explanation:** The constraint says n is odd, so test with odd values only. Try n = 1: choice A gives 2, B gives 2, C gives 3, D gives 4, E gives 2. Only C is odd.

Confirm with a second odd value, n = 3: C gives 5 — still odd. Structurally, n + 2 takes an odd number and shifts it by an even amount, which never changes parity, so it stays odd for every odd n.

The correct answer is C.
**mistake_a:** Adding 1 feels harmless, but odd plus odd is even — n + 1 is the next integer over, which always flips parity.
**mistake_b:** Anything carrying an explicit factor of 2 is even no matter what n is. This choice answers the opposite question.
**mistake_d:** Three times an odd number is still odd — and then the + 1 flips it to even. The first half of the computation lulls you into stopping early.
**mistake_e:** n^2 is odd and students stop there, but the + n adds another odd, and odd plus odd is even.
**common_trap:** Doing the parity logic in your head symbolically and stopping one step short — 3n is odd, so 3n + 1 "feels" odd-ish. Plugging n = 1 settles it in two seconds.
**takeaway:** Under a parity constraint, plug values that satisfy the constraint — here only odd values are legal inputs, and one legal value often kills all four wrong choices at once.
**hint_nudge:** n must be odd, so test n = 1 and n = 3 — never n = 2.
**related_reading:** quant-02-plugging-in-numbers

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** single-case-generalization
**est_time_seconds:** 75

If k is an even integer, which of the following must be a multiple of 4?

- A) k
- B) k + 2
- C) 2k
- D) 3k
- E) k + 4

**answer:** C
**fastest_path:** Test k = 2 and k = 4 — the choice that survives both is the answer, and one survivor of the first test dies on the second.
**explanation:** Test k = 2: choice A gives 2, B gives 4, C gives 4, D gives 6, E gives 6. Two survivors — B and C — so one value was not enough.

Test k = 4: B gives 6, which is not a multiple of 4, while C gives 8, which is. Only C survives both tests.

The structure explains why: an even k is 2 times some integer, so 2k is 4 times that integer — a guaranteed multiple of 4. By contrast, k + 2 only lands on a multiple of 4 when k happens to sit 2 below one.

The correct answer is C.
**mistake_a:** Even means divisible by 2, not by 4 — k = 2 itself is the counterexample.
**mistake_b:** Passes the first natural test (k = 2 gives 4) and gets picked by anyone who stops there. k = 4 gives 6 and breaks it.
**mistake_d:** Tripling an even number adds factors of 3, not factors of 2 — k = 2 gives 6.
**mistake_e:** Same trap as B shifted over: it works only when k is already a multiple of 4, such as k = 4 giving 8 — but k = 2 gives 6.
**common_trap:** Stopping after k = 2 and choosing B because it happened to hit 4. A "must be" claim is only safe after surviving at least two different legal values.
**takeaway:** When your first plug leaves two choices alive, that is the signal to plug again — never pick between survivors by feel.
**hint_nudge:** Try k = 2 first. If more than one choice works, try k = 4.
**related_reading:** quant-02-plugging-in-numbers

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**skill:** vic-pick-compute-match
**trap_type:** inverted-proportion
**est_time_seconds:** 75

A recipe uses 2 cups of flour to make c cookies. At this rate, how many cups of flour are needed to make 30 cookies?

- A) 60/c
- B) 15c
- C) c/15
- D) 2c
- E) c/60

**answer:** A
**fastest_path:** Pick a friendly value like c = 10, scale the recipe by hand, and match the choices.
**explanation:** Let c = 10, so the recipe makes 10 cookies from 2 cups. Thirty cookies is three full batches, which needs 3 times 2 = 6 cups.

Plug c = 10 into the choices and keep the one equal to 6. Choice A gives 60/10 = 6. The others miss: B gives 150, C gives 2/3, D gives 20, E gives 1/6.

A quick sanity check confirms the shape of the answer: the more cookies one batch makes (bigger c), the less flour you need for a fixed 30 cookies — so c belongs in the denominator, exactly as in 60/c.

The correct answer is A.
**mistake_b:** Sets the proportion upside down and multiplies where the relationship divides — 150 cups for 30 cookies fails any sanity check.
**mistake_c:** The reciprocal of the right answer, from flipping one side of the proportion. Plugging a real number catches it instantly: 2/3 of a cup cannot bake 30 cookies if 10 cookies took 2 cups.
**mistake_d:** Pattern-matches the 2 from the stem onto c. With c = 10 that means 20 cups — more than three batches' worth.
**mistake_e:** Inverts A entirely; a sixth of a cup is absurd for 30 cookies.
**common_trap:** Writing the proportion 2/c = x/30 and cross-multiplying carelessly. With a real number for c, you never set up a proportion at all — you just scale a batch.
**takeaway:** After matching, sanity-check the direction: if increasing the variable should decrease the answer, the variable must sit in the denominator.
**hint_nudge:** Let c = 10. How many batches of the recipe is 30 cookies?
**related_reading:** quant-02-plugging-in-numbers

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** second-plug-tie-break
**trap_type:** percent-base-confusion
**est_time_seconds:** 100

After a store raised the price of a jacket by 10 percent, the new price is p dollars. In terms of p, what was the price, in dollars, before the increase?

- A) 0.9p
- B) p/1.1
- C) 1.1p
- D) p - 10
- E) 0.1p

**answer:** B
**fastest_path:** Start from a clean original price (100), compute p, and test the choices — then break the tie that appears with a second number.
**explanation:** Work forward from a number you choose. Let the original price be 100. A 10 percent increase makes p = 110, and the target — the original price — is 100.

Plug p = 110 into the choices and look for 100. Choice B gives 110/1.1 = 100. But choice D gives 110 - 10 = 100 as well — two survivors, so plug a second original price. Let the original be 200, so p = 220. Choice B gives 220/1.1 = 200, still correct; choice D gives 210, wrong. Only B survives.

The algebra agrees: the original price x satisfies 1.1x = p, so x = p/1.1. Undoing a percent increase means dividing by the multiplier, not subtracting the same percent.

The correct answer is B.
**mistake_a:** Undoes a 10 percent increase with a 10 percent decrease. The decrease acts on the bigger number p, so 0.9p overshoots downward — 0.9(110) = 99, not 100.
**mistake_c:** Applies the increase again instead of reversing it.
**mistake_d:** Survives the first plug by pure coincidence — when the original is 100, the increase happens to be 10 dollars. A second plug (original 200, increase 20 dollars) exposes it.
**mistake_e:** That is the size of the increase, roughly, not the original price.
**common_trap:** Believing "up 10 percent then down 10 percent" returns you to the start. The two changes act on different bases, so reversing an increase requires division by 1.1.
**takeaway:** Two choices matching your first number is not bad luck — it is the test telling you to plug a second, less convenient number before answering.
**hint_nudge:** Do not start from p. Choose the original price yourself, then compute what p would be.
**hint_strategy:** If the original is 100, p is 110 — and two choices give back 100. Try original 200 next.
**related_reading:** quant-02-plugging-in-numbers

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** vic-pick-compute-match
**trap_type:** partial-translation
**est_time_seconds:** 110

A technician earns w dollars per hour for the first 8 hours she works in a day and 2w dollars per hour for each hour after the first 8. Which expression gives her total earnings, in dollars, for a day in which she works h hours, where h > 8?

- A) 2w(h - 4)
- B) wh + 2w(h - 8)
- C) 2wh
- D) wh
- E) 8w + 2wh

**answer:** A
**fastest_path:** Pick w and h, compute the real day's pay, and match — the correct choice is an algebraically simplified form you would never write down yourself.
**explanation:** Let w = 10 and h = 10. The first 8 hours pay 8 times 10 = 80 dollars. The 2 overtime hours pay 2 times 20 = 40 dollars. Total: 120 dollars.

Plug w = 10, h = 10 into the choices and keep the one equal to 120. Choice A gives 2(10)(10 - 4) = 20 times 6 = 120. The others miss: B gives 140, C gives 200, D gives 100, E gives 280.

Here is why plugging in beats translating: the natural translation is 8w + 2w(h - 8), which does not appear among the choices. Simplify it and you get 8w + 2wh - 16w = 2wh - 8w = 2w(h - 4) — choice A in disguise. With real numbers you never need to see through the disguise; the value 120 identifies it for you.

The correct answer is A.
**mistake_b:** Pays the regular rate on all h hours and then adds the full overtime rate on top — the overtime hours end up earning 3w each instead of 2w.
**mistake_c:** Pays double rate on every hour of the day, not just the hours past 8.
**mistake_d:** Ignores overtime entirely.
**mistake_e:** Correctly pays 8w for the regular block, then adds double rate on all h hours instead of only the hours past 8.
**common_trap:** Translating correctly to 8w + 2w(h - 8), not finding it among the choices, and panicking into a familiar-looking wrong form. The choices often list the simplified version of the right translation.
**takeaway:** When your correct setup is missing from the choices, do not abandon it — plug numbers into your setup, get the real value, and let arithmetic find its simplified twin.
**hint_nudge:** Choose w = 10 and h = 10, and compute the day's actual pay in two pieces.
**hint_strategy:** Your translated expression may not be listed — but its value at your numbers will match exactly one choice.
**related_reading:** quant-02-plugging-in-numbers

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** single-case-generalization
**est_time_seconds:** 90

If x < 0 < y, which of the following must be negative?

- A) x + y
- B) y - x
- C) x - y
- D) x + y^2
- E) x^2 y

**answer:** C
**fastest_path:** Test one pair where the negative dominates and one where the positive dominates — only the choice that stays negative through both is safe.
**explanation:** The constraint allows any negative x and positive y, so probe with magnitudes flipped both ways: first x = -3, y = 1, then x = -1, y = 3.

Choice C: x - y gives -3 - 1 = -4, then -1 - 3 = -4. Negative both times — and it must be, because subtracting a positive from a negative pushes further below zero no matter the sizes.

The rest each fail one probe. A: x + y is -2 in the first test but +2 in the second. B: y - x means subtracting a negative, so it is y plus a positive — always positive, never negative. D: x + y^2 is -2 in the first test but -1 + 9 = +8 in the second. E: x^2 is positive, so x^2 y is positive times positive — always positive.

The correct answer is C.
**mistake_a:** Feels negative because x "drags the sum down" — but that is only true when x has the bigger magnitude. The pair x = -1, y = 3 gives +2.
**mistake_b:** Reads as subtraction, so it looks like it should be able to go negative — but subtracting a negative number adds, so y - x is always positive here.
**mistake_d:** The square makes y^2 positive and potentially large; x cannot always outweigh it.
**mistake_e:** Squaring x destroys the only negative sign in the product.
**common_trap:** Testing a single pair like x = -3, y = 1, where A and D both happen to be negative, and picking the first one that works. Sign questions demand both magnitude orders.
**takeaway:** For sign questions with two variables, always run two tests — negative bigger, then positive bigger. Choices that depend on magnitude die; choices forced by structure survive.
**hint_nudge:** Try x = -3, y = 1, and then x = -1, y = 3.
**related_reading:** quant-02-plugging-in-numbers

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** smart-number-selection
**trap_type:** percent-base-confusion
**est_time_seconds:** 100

In an orchard, 2/5 of the trees are apple trees, and 1/3 of the remaining trees are pear trees. The rest are cherry trees. What fraction of the trees in the orchard are cherry trees?

- A) 1/5
- B) 4/15
- C) 1/3
- D) 2/5
- E) 3/5

**answer:** D
**fastest_path:** Pick a tree count divisible by both 5 and 3 — fifteen trees turns every fraction into a whole-number head count.
**explanation:** Choose the total so that every fraction in the problem lands on a whole number: 15 trees works because it is divisible by both 5 and 3.

Apple trees: 2/5 of 15 = 6. Remaining: 15 - 6 = 9. Pear trees: 1/3 of the remaining 9 = 3. Cherry trees: 9 - 3 = 6.

So 6 of the 15 trees are cherry: 6/15 = 2/5.

The whole problem turns on one phrase — the pears are 1/3 of the *remaining* trees, not of the orchard. Counting actual trees makes that distinction physical: the 1/3 acts on 9 trees, not on 15.

The correct answer is D.
**mistake_a:** That is the pear share of the orchard (3 of 15) — right arithmetic, wrong group reported.
**mistake_b:** Computes 1 - 2/5 - 1/3, taking the pears as a third of all trees instead of a third of the remaining trees.
**mistake_c:** Lifts the 1/3 straight from the stem without applying it to anything.
**mistake_e:** Stops after removing the apples — the 9 remaining trees still contain the pears.
**common_trap:** Applying 1/3 to the whole orchard instead of to the trees left after the apples. "Of the remaining" always means the base has shrunk.
**takeaway:** For chained fractions, pick a total divisible by every denominator in the problem — then each stage is a literal head count and base confusion becomes impossible.
**hint_nudge:** Give the orchard 15 trees and count each type.
**hint_strategy:** The pears are 1/3 of what is left after the apples — 1/3 of 9, not 1/3 of 15.
**related_reading:** quant-02-plugging-in-numbers

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** ignoring-negative-cases
**est_time_seconds:** 100

If a and b are integers such that a^2 = b^2, which of the following must be true?

- A) a = b
- B) a = -b
- C) |a| = |b|
- D) ab > 0
- E) a + b = 0

**answer:** C
**fastest_path:** Build two test pairs — one same-sign, one opposite-sign — and kill everything that fails either.
**explanation:** Equal squares allow two sign patterns, so test both. Pair 1: a = 2, b = 2 (same sign). Pair 2: a = 2, b = -2 (opposite signs). Both satisfy a^2 = b^2 = 4.

Choice C: |a| = |b| gives 2 = 2 in both pairs. It must hold in general, because squaring erases sign — equal squares force equal magnitudes, and that is all they force.

Each other choice dies on one pair. A fails pair 2 (2 is not -2). B fails pair 1 (2 is not -2). D fails pair 2 (ab = -4). E fails pair 1 (a + b = 4).

There is also a sneaky third case worth knowing: a = b = 0 satisfies the equation too, and C still holds there.

The correct answer is C.
**mistake_a:** Takes the square root of both sides and "cancels" the squares — but squaring erases sign, so a = -2, b = 2 satisfies the equation without a = b.
**mistake_b:** The mirror error — forces opposite signs when equal values work just as well.
**mistake_d:** Equal squares feel like same-sign numbers, but a = 2, b = -2 gives a product of -4.
**mistake_e:** Only true in the opposite-sign case; a = b = 2 breaks it.
**common_trap:** Treating sqrt(a^2) = a as an identity. The correct identity is sqrt(a^2) = |a|, and this question is built entirely on the difference.
**takeaway:** Whenever an equation involves squares, generate test cases in sign pairs — same signs and opposite signs — before trusting any claim about the variables themselves.
**hint_nudge:** Find two different integer pairs with equal squares. Do the choices survive both?
**related_reading:** quant-02-plugging-in-numbers

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** vic-pick-compute-match
**trap_type:** partial-translation
**est_time_seconds:** 110

Maria is twice as old as Ben was 4 years ago. If Ben is b years old now, how old will Maria be in 3 years, in terms of b?

- A) 2b - 8
- B) 2b - 5
- C) 2b - 1
- D) 2b + 3
- E) 2b - 2

**answer:** B
**fastest_path:** Give Ben a real age, walk the timeline by hand, and match — age algebra with two time shifts is exactly where symbols slip.
**explanation:** Let b = 10, so Ben is 10 now. Four years ago Ben was 6. Maria is twice that: 12 years old now. In 3 years Maria will be 15.

Plug b = 10 into the choices and keep the one equal to 15. Choice B gives 2(10) - 5 = 15. The others miss: A gives 12, C gives 19, D gives 23, E gives 18.

The symbolic route shows where each trap lives: Maria now = 2(b - 4) = 2b - 8, and in 3 years she is 2b - 8 + 3 = 2b - 5. Two separate time shifts — Ben's past, Maria's future — each get botched in a different wrong answer.

The correct answer is B.
**mistake_a:** That is Maria's age now — the final shift forward 3 years never happened.
**mistake_c:** Distributes 2(b - 4) as 2b - 4. With a real age for Ben the slip cannot happen: twice 6 is 12, not 16.
**mistake_d:** Drops "4 years ago" and doubles Ben's current age before adding 3.
**mistake_e:** Adds the 3 years to Ben before doubling — but the 3 years belong to Maria's future, after the doubling.
**common_trap:** Mixing the two timelines: the 4-year shift applies to Ben's past, the 3-year shift to Maria's future. Walking a concrete timeline keeps each shift attached to the right person.
**takeaway:** Age problems with multiple time references are prime plug-in territory — a real starting age turns timeline bookkeeping into counting.
**hint_nudge:** Let Ben be 10 now. How old was he 4 years ago, and what does that make Maria today?
**related_reading:** quant-02-plugging-in-numbers

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**skill:** constraint-legal-value-generation
**trap_type:** lcm-vs-product
**est_time_seconds:** 90

If n is a positive integer divisible by both 4 and 6, which of the following must be a divisor of n?

- A) 8
- B) 9
- C) 12
- D) 24
- E) 36

**answer:** C
**fastest_path:** Find the smallest legal n and test the choices against it — the minimal case kills every overreaching choice at once.
**explanation:** Generate the values n can actually be. Multiples of both 4 and 6 are multiples of their least common multiple: lcm(4, 6) = 12, so n can be 12, 24, 36, 48, and so on.

Now test the smallest legal value, n = 12, against each choice: 8 does not divide 12; 9 does not; 12 does; 24 does not; 36 does not. Four choices die on the single minimal case, and 12 must divide every multiple of 12 by definition.

The smallest legal value is the sharpest weapon on "must be" divisibility questions, because anything that fails there is dead and anything claiming more than the minimum guarantees usually fails there.

The correct answer is C.
**mistake_a:** The 4 contributes two factors of 2 and the 6 feels like it adds another — but the 2 in 6 is the same 2 already counted in 4. n = 12 is not divisible by 8.
**mistake_b:** Doubles the factor of 3; only one 3 is guaranteed, from the 6.
**mistake_d:** Multiplies 4 times 6, double-counting the shared factor of 2. The counterexample n = 12 satisfies both conditions and is not divisible by 24.
**mistake_e:** Squares the guarantee — 36 needs two 3s and n = 12 has only one.
**common_trap:** Jumping from "divisible by 4 and 6" to "divisible by 24." Shared prime factors only count once, which is exactly what the LCM computes.
**takeaway:** On divisibility "must" questions, build the smallest number satisfying every condition and test it — guarantees that exceed the LCM die instantly.
**hint_nudge:** What is the smallest positive integer divisible by both 4 and 6? Test the choices on it.
**related_reading:** quant-02-plugging-in-numbers

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**skill:** second-plug-tie-break
**trap_type:** single-plug-tie
**est_time_seconds:** 140

A tank holds g gallons of a saltwater solution that is p percent salt by volume. After w gallons of pure water are added, what is the salt concentration of the resulting solution, as a percent?

- A) gp/(g + w)
- B) p - w
- C) gp/w
- D) p(g + w)/g
- E) p/(g + w)

**answer:** A
**fastest_path:** Pick g, p, w, track the actual gallons of salt — which never change — and match; expect a tie on tame numbers.
**explanation:** Let g = 10, p = 20, and w = 10. The tank starts with 20 percent of 10 gallons = 2 gallons of salt. Adding 10 gallons of pure water changes nothing about the salt but raises the volume to 20 gallons. New concentration: 2/20 = 10 percent.

Plug the numbers into the choices and look for 10. Choice A gives 10(20)/20 = 10 — but choice B gives 20 - 10 = 10 as well. Two survivors, so change one number: keep g = 10, p = 20, and let w = 30. Salt is still 2 gallons, volume is 40, so the true concentration is 5 percent. Choice A gives 200/40 = 5; choice B gives 20 - 30 = -10. Only A survives.

B never deserved consideration — it subtracts gallons from a percent, two different kinds of quantity — but under time pressure a numeric match feels like proof. The second plug is what separates coincidence from structure.

The correct answer is A.
**mistake_b:** Matches the first plug by pure coincidence. It subtracts a volume from a percentage — mismatched units — and a second plug (or any w bigger than p) exposes it with a negative concentration.
**mistake_c:** Divides by the water added instead of by the new total volume.
**mistake_d:** Scales the concentration up — but adding pure water must dilute, so any expression that grows with w is backwards.
**mistake_e:** Drops the g, treating p as if it were the gallons of salt rather than a percent of g.
**common_trap:** Accepting the first numeric match. With three variables, tame choices like 10-20-10 create coincidental ties; the fix is always one more plug with an asymmetric value.
**takeaway:** In mixture problems, track the invariant — the gallons of salt do not change when water is added — and let the changed total volume do the diluting.
**hint_nudge:** How many gallons of actual salt are in the tank? Does adding pure water change that number?
**hint_strategy:** If two choices match your numbers, re-test the survivors with w much larger than p.
**related_reading:** quant-02-plugging-in-numbers

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** ignoring-negative-cases
**est_time_seconds:** 140

If x is a nonzero number and |x| < 1, which of the following must be true?

- A) x^3 < x
- B) x^2 < |x|
- C) 1/x > 1
- D) x < x^2
- E) |x|^3 > |x|^2

**answer:** B
**fastest_path:** The legal inputs are fractions between -1 and 1 — run x = 1/2 and x = -1/2 and only one claim survives both.
**explanation:** The constraint allows any fraction strictly between -1 and 1 except 0, so the mandatory probes are one positive fraction and one negative fraction. Use x = 1/2 and x = -1/2.

Choice B: at x = 1/2, x^2 = 1/4 and |x| = 1/2, so 1/4 < 1/2 holds. At x = -1/2, x^2 = 1/4 and |x| = 1/2 — holds again. It must hold in general: since |x| < 1, multiplying both sides by |x| gives x^2 = |x| times |x| < |x|.

The rest each die on one probe. A holds at x = 1/2 (1/8 < 1/2) but fails at x = -1/2, where cubing moves the value up toward zero: -1/8 is greater than -1/2. C fails at x = -1/2, where 1/x = -2. D holds at x = -1/2 but fails at x = 1/2, since 1/2 is not less than 1/4. E claims higher powers grow, which is backwards for any base smaller than 1: 1/8 is not greater than 1/4.

The correct answer is B.
**mistake_a:** True for every positive fraction, so it survives a positive-only test — but cubing a negative fraction shrinks its magnitude, moving it up: -1/8 > -1/2.
**mistake_c:** Reciprocals of small numbers feel large, but a negative fraction's reciprocal is a large negative number, nowhere above 1.
**mistake_d:** The mirror of A — true for negative fractions, broken by x = 1/2.
**mistake_e:** Higher powers grow only when the base exceeds 1. Inside the unit interval every extra power shrinks the value.
**common_trap:** Testing only x = 1/2. Half the choices here are engineered to survive positive fractions and die on negative ones — the sign split is the entire question.
**takeaway:** When the constraint permits negatives, a negative fraction is a mandatory test value — cubes preserve sign but shrink magnitude, which breaks most intuitions built on positives.
**hint_nudge:** Both x = 1/2 and x = -1/2 are legal. Run both.
**hint_strategy:** Compare each claim's behavior on the two signs — only a claim about magnitudes can survive both.
**related_reading:** quant-02-plugging-in-numbers

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**skill:** constraint-legal-value-generation
**trap_type:** ignoring-constraints
**est_time_seconds:** 150

When the positive integer n is divided by 6, the remainder is 4. Which of the following must be even?

- A) n/2
- B) 3n/2
- C) n(n + 1)/2
- D) n^2/4
- E) n(n + 2)/4

**answer:** E
**fastest_path:** List the legal values of n — 4, 10, 16, 22 — and test the choices down the list; the first value alone eliminates nothing, the second kills four.
**explanation:** First generate the inputs the constraint actually allows: remainder 4 on division by 6 means n is 4, 10, 16, 22, and so on — each 6 apart, starting at 4.

Here is the trap in this question: at n = 4, every single choice is even — A gives 2, B gives 6, C gives 10, D gives 4, E gives 6. The first legal value eliminates nothing, which is the test betting you will stop there.

Move to n = 10: A gives 5, B gives 15, C gives 55, D gives 25 — all odd, all dead. E gives 10(12)/4 = 30, still even. Check n = 16 for confidence: E gives 16(18)/4 = 72. Even again.

E is forced by structure: n = 6k + 4 makes n(n + 2)/4 = (6k + 4)(6k + 6)/4 = 3(3k + 2)(k + 1). If k is even, 3k + 2 is even; if k is odd, k + 1 is even — either way the product carries a factor of 2.

The correct answer is E.
**mistake_a:** Half of an even number is not always even — n = 10 gives 5. Evenness guarantees one factor of 2, not two.
**mistake_b:** Survives n = 4 (giving 6) and dies at n = 10, where it gives 15.
**mistake_c:** The triangular-number formula alternates parity as n climbs; n = 10 gives 55.
**mistake_d:** n = 4 gives 4, but n = 10 gives 25 — a perfect square of an odd-times-five number.
**common_trap:** Testing only n = 4, where all five choices pass. When the first legal value eliminates nothing, that is not confirmation — it is a signal the question was built to punish single-value testing.
**takeaway:** Under a remainder constraint, the legal values are an arithmetic sequence — write out the first three and march down the list, because question writers tune their traps to survive the smallest one.
**hint_nudge:** Which values can n be? Start the list from the remainder itself.
**hint_strategy:** n = 4 will not separate the choices. n = 10 will.
**related_reading:** quant-02-plugging-in-numbers

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**skill:** break-it-counterexample-hunt
**trap_type:** integer-only-testing
**est_time_seconds:** 140

If xy > 0 and x + y < 0, which of the following must be true?

- A) x < 0
- B) x < y
- C) xy > 1
- D) x + y < -1
- E) x^2 + y^2 > 1

**answer:** A
**fastest_path:** Decode the constraints first — same sign plus negative sum forces both negative — then break the survivors with tiny fractions.
**explanation:** Translate the constraints before touching numbers. A positive product means x and y share a sign; a negative sum rules out both being positive. So both are negative — which is exactly choice A, and it is forced.

The danger is that an integer test hides this. Try x = -2, y = -3: choice A holds, but so do C (product 6), D (sum -5), and E (sum of squares 13). Four survivors from one test — and every one of the wrong ones is a claim about *size*, while the constraints only control *sign*.

Tiny negatives expose them. Let x = y = -0.1, which satisfies both constraints (product 0.01 > 0, sum -0.2 < 0). Now C gives 0.01, not greater than 1; D gives -0.2, not less than -1; E gives 0.02, not greater than 1. All three die. B dies by symmetry: nothing in the constraints orders x and y, so swap to x = -3, y = -2 and B fails.

The correct answer is A.
**mistake_b:** Nothing fixes which variable is smaller — the constraints are symmetric in x and y, so swapping any working pair breaks this.
**mistake_c:** True for comfortable integer picks like -2 and -3, but two tiny negatives like -0.1 and -0.1 give a product of 0.01.
**mistake_d:** The sum only has to be below zero, not below -1. The pair -0.1 and -0.1 sums to -0.2.
**mistake_e:** Squares of tiny fractions stay tiny: 0.01 + 0.01 falls far short of 1.
**common_trap:** Plugging only integers. Constraints about signs say nothing about magnitudes, and only fraction tests — values squeezed near zero — can kill the magnitude claims.
**takeaway:** When constraints control sign but a choice claims size, reach for numbers near zero — they satisfy any sign condition while making every product, sum, and square as small as you like.
**hint_nudge:** What do the two conditions together force about the signs of x and y?
**hint_strategy:** Integers like -2 and -3 leave four choices standing. Try -0.1 and -0.1.
**related_reading:** quant-02-plugging-in-numbers

---

## Q28
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**skill:** constraint-legal-value-generation
**trap_type:** confirming-instead-of-breaking
**est_time_seconds:** 170

If x^3 > x, which of the following must be true?

- A) x > 1
- B) x > 0
- C) |x| > 1
- D) x^3 > 1
- E) x^2 > x

**answer:** E
**fastest_path:** Find every kind of number satisfying x^3 > x before judging any choice — the condition hides a second, negative family of solutions.
**explanation:** The real work is discovering what x can be. The obvious solutions are numbers greater than 1, like x = 2 (8 > 2). And at x = 2, every single choice checks out — A, B, C, D, and E are all true. A test-taker who stops exploring here is reduced to guessing among five survivors.

So hunt for less obvious legal values. Positive fractions fail (1/8 is not greater than 1/2). But x = -1/2 works: cubing a negative fraction shrinks its magnitude, so x^3 = -1/8, which is *greater* than -1/2. The full solution set is -1 < x < 0 together with x > 1.

Now the negative family slaughters the field. At x = -1/2: A fails, B fails, C fails (|x| = 1/2), and D fails (x^3 = -1/8). Only E survives: 1/4 > -1/2 there, and for x > 1, x^2 > x as well. E must hold across the entire solution set — every legal x is either negative (making x^2 > 0 > x) or greater than 1 (where squaring increases).

The correct answer is E.
**mistake_a:** Confirmed by x = 2 and every other big number you are likely to try — but x = -1/2 satisfies x^3 > x and is nowhere near 1.
**mistake_b:** Same counterexample: a negative fraction is a perfectly legal input, because cubing moves it up toward zero.
**mistake_c:** The value x = -1/2 satisfies the condition with absolute value below 1.
**mistake_d:** The cube of -1/2 is -1/8 — legal, and nowhere near 1.
**common_trap:** Plugging numbers to *confirm* a likable choice instead of to *break* it. Confirmation found x = 2 and stopped; breaking demands you map every kind of value the condition allows — including the negative fractions hiding between -1 and 0.
**takeaway:** When the given condition is an inequality, the condition itself is a constraint to explore — chart its full solution set (positives, negatives, fractions) before testing a single answer choice, because the exotic region is where the test hides the kill shot.
**hint_nudge:** x = 2 satisfies the condition, but so does a number of a completely different kind. What does cubing do to a negative fraction?
**hint_strategy:** Check x = -1/2: is -1/8 greater than -1/2? If so, test all five choices there.
**related_reading:** quant-02-plugging-in-numbers
