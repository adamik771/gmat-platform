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
**trap_type:** part-to-part-as-part-to-whole
**est_time_seconds:** 60

A chess club has g girls and b boys, and every member is a girl or a boy. What fraction of the club's members are girls?

- A) g/b
- B) g/(g + b)
- C) b/(g + b)
- D) (g + b)/g
- E) b/g

**answer:** B
**fastest_path:** Invent a tiny club — say 2 girls and 3 boys — find the real fraction, and match it against the choices.
**explanation:** With variables in the choices, replace them with numbers small enough to count on one hand. Let g = 2 and b = 3, so the club has 5 members and the fraction who are girls is 2/5.

Now plug g = 2, b = 3 into each choice and keep the one equal to 2/5. Choice B gives 2/(2 + 3) = 2/5. The others miss: A gives 2/3, C gives 3/5, D gives 5/2, E gives 3/2.

The structure matters more than the arithmetic: a fraction "of the members" needs the whole club — girls plus boys — in the denominator, not just one group.

The correct answer is B.
**mistake_a:** g/b is the girl-to-boy ratio — a part compared to another part. The question asks for girls compared to the whole club, so the denominator must be g + b.
**mistake_c:** b/(g + b) has the right denominator but counts the boys — the complement of what was asked. With g = 2 and b = 3 this gives 3/5, not 2/5.
**mistake_d:** (g + b)/g is the fraction upside down — members per girl rather than girls per member. A fraction of a group can never exceed 1, and this one always does.
**mistake_e:** b/g is the boy-to-girl ratio: both the wrong comparison (part to part) and the wrong group on top.
**common_trap:** Reading "fraction of the members" but writing a part-to-part ratio. Plugging in a 5-person club makes the difference between 2/5 and 2/3 impossible to miss.
**takeaway:** When choices contain variables, pick countable numbers, compute the true target value first, then test every choice against it.
**related_reading:** quant-02-plugging-in-numbers

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** remainder-carried-unchanged
**est_time_seconds:** 70

When the positive integer n is divided by 5, the remainder is 2. What is the remainder when n + 8 is divided by 5?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** A
**fastest_path:** Pick the smallest n that fits — n = 7 — and just do the division: 7 + 8 = 15, which 5 divides exactly.
**explanation:** Rather than reasoning abstractly about remainders, manufacture a number that satisfies the condition. The smallest positive integer leaving remainder 2 when divided by 5 is n = 7.

Then n + 8 = 15, and 15 divided by 5 is exactly 3 with remainder 0.

Confirm the pattern with a second value: n = 12 gives n + 8 = 20, again remainder 0. The reason is that the remainders add: n contributes 2 and 8 contributes 3, and 2 + 3 = 5 is itself a full multiple of 5, leaving nothing behind.

The correct answer is A.
**mistake_b:** 1 comes from subtracting the remainders (8 leaves 3, and 3 minus 2 = 1) instead of adding them. Adding 8 to n adds its remainder contribution; nothing gets subtracted.
**mistake_c:** 2 assumes the remainder survives untouched when you add something to n. That only happens when you add an exact multiple of 5, and 8 is not one.
**mistake_d:** 3 is the remainder of 8 alone when divided by 5 — it ignores the remainder n was already carrying. Both contributions count.
**mistake_e:** 4 is the two remainders 2 and 2 doubled, or a slip adding 2 + 3 and then failing to notice that 5 wraps around to 0.
**common_trap:** Manipulating remainder rules from memory instead of testing a real number. One concrete n settles this in ten seconds and cannot mislead you.
**takeaway:** For remainder questions, build the smallest number that satisfies the condition, run the actual division, and verify with a second value if anything feels off.
**related_reading:** quant-02-plugging-in-numbers

---

## Q14
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** translation-direction-slip
**est_time_seconds:** 75

John is j years old. Mary's age is 4 years less than twice John's age. In terms of j, how old will Mary be 5 years from now?

- A) 2j - 4
- B) j + 1
- C) 2j + 1
- D) 2j + 6
- E) 2j + 9

**answer:** C
**fastest_path:** Give John a real age, work out Mary's age now and in 5 years, then match the choices.
**explanation:** Let j = 10. Twice John's age is 20, and 4 less than that makes Mary 16 today. Five years from now she will be 21.

Plug j = 10 into each choice and keep the one equal to 21. Choice C gives 2(10) + 1 = 21. The others miss: A gives 16, B gives 11, D gives 26, E gives 29.

The algebra confirms it: Mary is 2j - 4 today, so in five years she is 2j - 4 + 5 = 2j + 1. But with a real age in hand you never had to trust that translation — the number 21 was waiting to be matched.

The correct answer is C.
**mistake_a:** 2j - 4 is Mary's age today. The question asks about 5 years from now — answering the right person at the wrong time is the most common slip on age problems.
**mistake_b:** j + 1 forgets to double John's age: it computes j - 4 + 5. Reading "twice John's age" and then dropping the "twice" is easy when you rush the translation.
**mistake_d:** 2j + 6 ages John first and then applies the rule: 2(j + 5) - 4. But "4 less than twice John's age" describes the relationship between their ages today, not in the future.
**mistake_e:** 2j + 9 flips "4 less than" into "4 more than" (giving 2j + 4 today) before adding 5. Plugging j = 10 exposes it instantly: Mary is not 29 when John is 10.
**common_trap:** Answering Mary's current age (2j - 4) and stopping. Always reread the question line: it asked for her age 5 years from now.
**takeaway:** On age problems, plug in a real age, build the timeline with actual numbers, and only then look at the choices — translation errors cannot survive contact with arithmetic.
**related_reading:** quant-02-plugging-in-numbers

---

## Q15
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** percent-of-wrong-base
**est_time_seconds:** 80

Maria spends 1/5 of her monthly budget on rent and then spends 1/4 of what remains on groceries. What fraction of her monthly budget is left?

- A) 2/5
- B) 9/20
- C) 11/20
- D) 3/5
- E) 4/5

**answer:** D
**fastest_path:** Make the budget 20 dollars and count what each step removes.
**explanation:** The denominators in play are 5 and 4, so pick a budget both divide cleanly: 20.

Rent takes 1/5 of 20, which is 4, leaving 16. Groceries take 1/4 of what remains — 1/4 of 16 is 4 — leaving 12.

So 12 of the original 20 is left, and 12/20 = 3/5.

The key reading: "1/4 of what remains" acts on the 16, not on the original 20. Choosing a concrete budget makes the shifting base impossible to fumble.

The correct answer is D.
**mistake_a:** 2/5 is the fraction Maria spent, not the fraction left. After computing 4 + 4 = 8 spent out of 20, make sure you answer the question that was asked.
**mistake_b:** 9/20 is the leftover you get after the double error of taking both fractions from the original budget and then mis-adding — a compounding of the wrong-base slip.
**mistake_c:** 11/20 comes from subtracting both fractions from 1 directly: 1 - 1/5 - 1/4. That treats the grocery fraction as 1/4 of the whole budget, but the problem says 1/4 of what remains.
**mistake_e:** 4/5 stops after rent and ignores groceries entirely — an incomplete pass through the problem.
**common_trap:** Letting "1/4 of what remains" collapse into "1/4 of the budget." The remainder is a new, smaller base; a concrete 20-dollar budget keeps the two bases visibly separate.
**takeaway:** When fractions chain through a remainder, pick a number divisible by every denominator and walk the steps one at a time — the base shifts at each step.
**related_reading:** quant-02-plugging-in-numbers

---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** inverted-rate
**est_time_seconds:** 70

At a farm stand, x apples cost a total of d dollars. At this rate, what is the cost, in dollars, of y apples?

- A) dy/x
- B) dx/y
- C) xy/d
- D) y/(dx)
- E) d + y - x

**answer:** A
**fastest_path:** Choose numbers that make the price per apple a whole number, compute the real cost, then match.
**explanation:** Let x = 2 apples cost d = 6 dollars, and ask for the cost of y = 4 apples.

Each apple costs 6/2 = 3 dollars, so 4 apples cost 12 dollars. That is the target.

Plug x = 2, d = 6, y = 4 into each choice and keep the one equal to 12. Choice A gives (6)(4)/2 = 12. The others miss: B gives 3, C gives 4/3, D gives 1/3, E gives 8.

Structurally, d/x is the dollars-per-apple rate, and multiplying by y apples gives dollars — the units cancel correctly only in choice A.

The correct answer is A.
**mistake_b:** dx/y inverts which quantity scales: it multiplies the price by the old count and divides by the new one. With real numbers it prices 4 apples at 3 dollars — less than the cost of 2.
**mistake_c:** xy/d divides by dollars, producing apples-squared-per-dollar — meaningless units. Variable soup like this survives only when no one plugs in numbers.
**mistake_d:** y/(dx) is the full reciprocal of the correct expression. If a choice gives 1/3 of a dollar for twice as many apples, the test values have already rejected it.
**mistake_e:** d + y - x treats a proportional relationship as additive — as if each extra apple costs exactly one dollar. Rates multiply; they never just add counts to prices.
**common_trap:** Writing a ratio from memory (dx/y versus dy/x) and trusting it. One concrete price list — 2 apples for 6 dollars — settles which arrangement is right.
**takeaway:** For rate problems with variables in the choices, plug numbers that make the unit rate clean, and let the units (dollars per apple times apples) confirm the structure.
**related_reading:** quant-02-plugging-in-numbers

---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** remainder-scaled-with-divisor
**est_time_seconds:** 90

When the positive integer n is divided by 12, the remainder is 5. What is the remainder when n is divided by 6?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 5

**answer:** E
**fastest_path:** Build the smallest qualifying n — that is 17 — and divide it by 6.
**explanation:** Manufacture a number that fits the condition: n = 17 leaves remainder 5 when divided by 12. Now divide by 6: 17 = 2(6) + 5, so the remainder is 5.

Test a second value to be sure the answer is stable: n = 29 gives 29 = 4(6) + 5 — remainder 5 again.

The pattern holds because 6 divides 12 exactly: writing n = 12k + 5 = 6(2k) + 5 shows the multiple-of-12 part is also a multiple of 6, so the leftover 5 passes through intact (and 5 is small enough to be a legal remainder for 6).

The correct answer is E.
**mistake_a:** 0 assumes that because 6 divides 12 evenly, n must also divide evenly by 6. The multiple-of-12 part does — but the leftover 5 is still there.
**mistake_b:** 1 computes 6 - 5, subtracting the remainder from the new divisor — a shape-similar operation that answers nothing in this problem.
**mistake_c:** 2 halves the remainder because the divisor was halved. Remainders do not scale with the divisor; only the multiple part re-groups.
**mistake_d:** 3 is the rounded-up version of the same halving instinct (5/2 rounded to 3). Any answer built by scaling the remainder dies the moment you test n = 17.
**common_trap:** Reasoning about how the remainder "should" transform when the divisor changes instead of dividing an actual number. The rule is subtle; the arithmetic is not.
**takeaway:** When a divisor changes, do not transform the remainder by analogy — rebuild a concrete n from the given condition and run the new division directly.
**hint_nudge:** Write down an actual number that leaves remainder 5 when divided by 12, then divide it by 6.
**related_reading:** quant-02-plugging-in-numbers

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** partial-condition-check
**est_time_seconds:** 100

If xy > 0 and x + y < 0, which of the following must be positive?

- A) x
- B) y
- C) x + 2y
- D) -3x
- E) x - y

**answer:** D
**fastest_path:** Decode the two conditions into signs first: same sign plus a negative sum forces both negative. Then -3 times a negative is positive.
**explanation:** Translate before plugging. xy > 0 means x and y have the same sign. If both were positive, x + y would be positive — but the sum is negative. So both x and y are negative.

Now test with a concrete pair, say x = -1 and y = -2 (and the swap x = -2, y = -1, since nothing fixes which is bigger).

D: -3x = -3(-1) = 3 and -3(-2) = 6 — positive both times, and always, since -3 times any negative is positive.

The rest fail: A and B are negative by the deduction above. C: x + 2y = -1 + (-4) = -5 — a sum of negatives stays negative no matter the coefficients. E: x - y gives -1 - (-2) = 1 for the first pair but -2 - (-1) = -1 after the swap, so it is not guaranteed.

The correct answer is D.
**mistake_a:** x is not forced positive — the conditions force exactly the opposite. Reading "xy > 0" as "one of them is positive" misses that a negative pair also multiplies to a positive.
**mistake_b:** y fails for the same reason as x: both variables are pinned negative by the pair of conditions taken together.
**mistake_c:** x + 2y might look like the coefficient could rescue it, but scaling a negative number by 2 makes it more negative. A sum of two negatives cannot be positive.
**mistake_e:** x - y is positive for some qualifying pairs (x = -1, y = -2) and negative for others (x = -2, y = -1). One swap of your test values kills it — which is exactly why you test both orderings.
**common_trap:** Plugging numbers before decoding what the conditions jointly force. Each condition alone allows positives; only the two together pin both variables negative.
**takeaway:** Translate sign conditions into a sign table first, then plug values — including swapped orderings — to break any choice that depends on which variable is larger.
**hint_nudge:** What do the two conditions, taken together, tell you about the signs of x and y?
**hint_strategy:** xy > 0 forces the same sign; a negative sum then rules out the both-positive case.
**related_reading:** quant-02-plugging-in-numbers

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** single-plug-coincidence
**est_time_seconds:** 110

A tank contains w liters of solution that is 20 percent salt by volume. After x liters of pure water are added, the salt is what percent of the resulting solution?

- A) 20w/(w + x)
- B) 20(w + x)/w
- C) 20w/x
- D) w/(w + x)
- E) 20x/(w + x)

**answer:** A
**fastest_path:** Plug w = 10 and x = 10, compute the real percent — then notice two choices match and re-plug with x = 30.
**explanation:** Pick easy numbers: w = 10 liters of solution containing 20 percent salt, so 2 liters of salt. Add x = 10 liters of water: still 2 liters of salt, now in 20 liters total, which is 10 percent.

Test the choices at w = 10, x = 10. Choice A gives 200/20 = 10 — match. But choice E gives 20(10)/20 = 10 as well. Two survivors means the numbers were too symmetric, not that the work was wasted.

Re-plug with w = 10, x = 30: salt is still 2 liters, total is 40, so the true percent is 5. Now A gives 200/40 = 5 — still right — while E gives 600/40 = 15. Only A survives.

Structurally: the salt amount is 20 percent of w, i.e. 0.2w, and the new total volume is w + x, so the concentration is 100(0.2w)/(w + x) = 20w/(w + x) percent.

The correct answer is A.
**mistake_b:** 20(w + x)/w turns the fraction upside down — total volume over original volume. At w = x = 10 it claims 80 percent salt after dilution, which a sanity check (dilution lowers concentration below 20) rejects immediately.
**mistake_c:** 20w/x divides by only the added water instead of the full new volume. The salt is dissolved in everything in the tank, not just in what was poured in.
**mistake_d:** w/(w + x) is the fraction of the final solution that is original solution — and it also drops the factor of 20 that converts to a percent. Right shape, wrong quantity.
**mistake_e:** 20x/(w + x) tracks the added water instead of the salt. It matched the first plug only because choosing w = x made the original solution and the added water symmetric — the coincidence the second plug exposed.
**common_trap:** Declaring victory when one choice matches without checking the rest. Symmetric test values (w = x) create accidental ties; the fix is one more plug with lopsided numbers.
**takeaway:** Always evaluate all five choices against your target. If two match, do not guess between them — change the numbers and let the second plug eliminate the impostor.
**hint_nudge:** Pick easy numbers like w = 10 and x = 10 and compute the actual percent of salt.
**hint_strategy:** If two choices match your first numbers, the numbers were too symmetric — re-test the survivors with a different x.
**related_reading:** quant-02-plugging-in-numbers

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** single-test-acceptance
**est_time_seconds:** 100

If n is a positive integer, which of the following must be divisible by 3?

- A) 3n + 1
- B) n^2 + n + 1
- C) n(n + 1)(n + 2)
- D) n(n + 1)(n + 3)
- E) n^3 + 1

**answer:** C
**fastest_path:** Plug n = 1 to clear out most choices, then n = 2 to break the survivor that got lucky.
**explanation:** "Must be divisible by 3" means divisible for every positive integer n, so hunt counterexamples. Start with n = 1: A gives 4, D gives 1(2)(4) = 8, E gives 2 — three choices dead immediately. B gives 3 (divisible — it survives this round) and C gives 1(2)(3) = 6 (survives).

Now n = 2: B gives 4 + 2 + 1 = 7 — not divisible, dead. C gives 2(3)(4) = 24 — divisible again.

C survives because n, n + 1, n + 2 are three consecutive integers, and any run of three consecutive integers contains exactly one multiple of 3. The factor is built in, whatever n is.

The correct answer is C.
**mistake_a:** 3n + 1 dangles a visible 3, but 3n is the divisible part and the +1 pushes it exactly one past a multiple. The eye-catching coefficient is bait.
**mistake_b:** n^2 + n + 1 equals 3 at n = 1, so a single test wrongly certifies it. It fails at n = 2 — which is why one passing value never proves a "must" claim.
**mistake_d:** n(n + 1)(n + 3) looks like a consecutive product but skips n + 2, leaving the residues incomplete: at n = 1 it gives 8. The gap is easy to miss when pattern-matching instead of plugging.
**mistake_e:** n^3 + 1 is tempting because the related expression n^3 - n really is always divisible by 3. The sign flip breaks the property: at n = 1 it gives 2.
**common_trap:** Accepting a choice after one passing value. B passes n = 1 and fails n = 2; a "must be" claim earns belief only by surviving multiple adversarial tests or by a structural reason, like three consecutive factors.
**takeaway:** For must-be-divisible questions, plug small values to kill choices fast, and trust a survivor only when you can also see why it works — here, three consecutive integers always include a multiple of 3.
**hint_nudge:** Test n = 1 and n = 2 — any choice that fails even once is eliminated.
**hint_strategy:** Among any three consecutive integers there is always exactly one multiple of 3.
**related_reading:** quant-02-plugging-in-numbers

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** sum-vs-average-confusion
**est_time_seconds:** 110

The average (arithmetic mean) of x and y is a, and the average (arithmetic mean) of x, y, and z is b. What is z in terms of a and b?

- A) 3b - 2a
- B) 2a - 3b
- C) 3(b - a)
- D) 2b - a
- E) (a + b)/2

**answer:** A
**fastest_path:** Pick x, y, z first, read off the two averages, then match choices against your known z.
**explanation:** Choose the unknowns before the averages: let x = 2, y = 4, z = 6. Then the average of x and y is a = 3, and the average of all three is b = 12/3 = 4. The target is z = 6.

Plug a = 3, b = 4 into each choice and keep the one equal to 6. Choice A gives 3(4) - 2(3) = 6. The others miss: B gives -6, C gives 3, D gives 5, E gives 3.5.

The algebra agrees: averages convert to sums — x + y = 2a and x + y + z = 3b — so z = 3b - 2a by subtracting. But plugging in let you find that without ever writing the equations.

The correct answer is A.
**mistake_b:** 2a - 3b is the right pieces subtracted in the wrong order. With real numbers it goes negative while z is plainly positive — a sign the plug catches instantly.
**mistake_c:** 3(b - a) triples the change in the average, a near-miss of the right idea: z actually equals b + 2(b - a), since adding z moves three values' average but z is only one of them. The plug separates 3 from 6 immediately.
**mistake_d:** 2b - a mixes the sum conversions, using 2 where the three-term average needs a 3. Shape-plausible, numerically wrong: it gives 5, not 6.
**mistake_e:** (a + b)/2 just averages the two averages — an operation that answers no question here. It treats a and b as data points instead of summaries of different-sized groups.
**common_trap:** Trying to juggle "averages of overlapping groups" in your head. Convert averages to sums — or sidestep the algebra entirely by choosing x, y, z first so every quantity is concrete.
**takeaway:** On average problems with variables in the choices, pick the raw values first and let the averages fall out — then the target is a known number and the choices merely have to match it.
**hint_nudge:** Choose simple values for x, y, and z, then compute a and b from them.
**hint_strategy:** Averages convert to sums: x + y = 2a and x + y + z = 3b.
**related_reading:** quant-02-plugging-in-numbers

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** percent-of-wrong-base
**est_time_seconds:** 95

At a certain company, 60 percent of the employees commute by car. Of the employees who commute by car, 45 percent also use public transit at least once a week. What percent of the company's employees commute by car but do not use public transit at least once a week?

- A) 15%
- B) 27%
- C) 33%
- D) 45%
- E) 55%

**answer:** C
**fastest_path:** Make the company 100 people and count heads: 60 drive, 27 of those also ride transit, leaving 33.
**explanation:** Pick 100 for the total so every percent is a head count. Then 60 employees commute by car.

The 45 percent figure applies to those 60, not to everyone: 45 percent of 60 is 27 employees who drive and also use transit.

The question asks for car commuters who do not use transit: 60 - 27 = 33 people, which is 33 percent of the company.

The correct answer is C.
**mistake_a:** 15 subtracts the two given percents (60 - 45) as if they shared a base. The 45 percent lives on the 60-person subgroup, so the two numbers are not directly comparable.
**mistake_b:** 27 is the both-categories group — drivers who do use transit. It is the complement of what was asked; the stem says "do not."
**mistake_d:** 45 simply re-reports a number from the stem. On chained-percent problems, a stated percent is almost never the final answer because the question shifts the base.
**mistake_e:** 55 is the right complement taken on the wrong base: 55 percent of car commuters skip transit, but as a share of all employees that group is 55 percent of 60 = 33.
**common_trap:** Stopping at "55 percent don't" without converting back to the whole company. Every percent in a chained problem belongs to a specific base, and the question names which base it wants.
**takeaway:** Set the total to 100, convert every percent into people, and answer in heads — then the final division back to a percent is automatic and base errors become visible.
**hint_nudge:** Make the company 100 people and track the actual head counts at each step.
**related_reading:** quant-02-plugging-in-numbers

---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** integer-only-testing
**est_time_seconds:** 110

If 0 < a < b, which of the following must be greater than a/b?

- A) (a + 1)/(b + 1)
- B) a/(b + 1)
- C) a^2/b^2
- D) a/(2b)
- E) ab/(a + b)

**answer:** A
**fastest_path:** Test a = 1, b = 2 to clear B, C, D — then break the tie between A and E with small decimals like a = 0.1, b = 0.2.
**explanation:** Start with a = 1 and b = 2, so a/b = 1/2. Choice A gives 2/3 — greater. B gives 1/3, C gives 1/4, D gives 1/4 — all smaller, dead. E gives 2/3 — also greater. Two survivors.

Nothing says a and b are integers, so stress-test with values the constraint also allows: a = 0.1, b = 0.2, where a/b is still 1/2. A gives 1.1/1.2, about 0.92 — still greater. E gives 0.02/0.3, about 0.07 — far smaller. E dies.

A wins every time for a structural reason: adding 1 to the top and bottom of a fraction pulls it toward 1, and since a/b is less than 1 (because a < b), moving toward 1 is moving up. Algebraically, b(a + 1) - a(b + 1) = b - a > 0.

The correct answer is A.
**mistake_b:** a/(b + 1) grows the denominator only, which always shrinks a positive fraction. It can never beat a/b.
**mistake_c:** a^2/b^2 is (a/b) squared, and squaring a number between 0 and 1 makes it smaller — the same fraction-power behavior that decides ordering questions like x versus x^2 on (0, 1).
**mistake_d:** a/(2b) is exactly half of a/b — smaller by construction, whatever a and b are.
**mistake_e:** ab/(a + b) happens to exceed a/b for integer-ish pairs like (1, 2), so integer-only testers certify it. For small decimals the product ab collapses faster than the sum, and the comparison flips. Survivors deserve hostile values, not friendly ones.
**common_trap:** Plugging only comfortable integers. The constraint 0 < a < b admits fractions, and fractions are precisely where plausible-looking comparisons reverse.
**takeaway:** For must-be inequalities, vary the regime of your test values — integers, then decimals between 0 and 1 — and remember that adding the same positive number to top and bottom drags a fraction toward 1.
**hint_nudge:** a and b do not have to be integers — the constraint allows values like 0.1 and 0.2.
**hint_strategy:** Adding 1 to both the numerator and denominator pulls a fraction toward 1; since a/b < 1, that is an increase.
**related_reading:** quant-02-plugging-in-numbers

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** remainder-carried-unchanged
**est_time_seconds:** 130

When the positive integer n is divided by 4, the remainder is 3. What is the remainder when n^2 is divided by 8?

- A) 0
- B) 1
- C) 3
- D) 6
- E) 7

**answer:** B
**fastest_path:** Take the smallest qualifying n — that is 3 — square it, and divide: 9 leaves remainder 1. Confirm with n = 7.
**explanation:** The condition is "remainder 3 when divided by 4," so qualifying values are 3, 7, 11, 15, … Plug the smallest: n = 3 gives n^2 = 9, and 9 = 8 + 1 — remainder 1.

A hard question earns a second test before you commit: n = 7 gives 49 = 6(8) + 1 — remainder 1 again. And n = 11 gives 121 = 15(8) + 1. The remainder is locked at 1.

The algebra explains the lock: n = 4k + 3, so n^2 = 16k^2 + 24k + 9 = 8(2k^2 + 3k + 1) + 1. Everything except the final 1 is a multiple of 8, for every k.

What makes this question hard is the apparent mismatch — the condition is about dividing by 4 but the question divides by 8, and n itself alternates between remainder 3 and remainder 7 mod 8. The square is what stabilizes.

The correct answer is B.
**mistake_a:** 0 belongs to a neighboring fact: for odd n, it is n^2 - 1 that is always divisible by 8, not n^2 itself. Off-by-one on a true theorem is still wrong.
**mistake_c:** 3 assumes the remainder rides through the squaring untouched. Remainders multiply (then reduce): the relevant product is 3 × 3 = 9, which leaves 1 when divided by 8.
**mistake_d:** 6 adds the remainders (3 + 3) as if squaring meant doubling. Squaring multiplies the number by itself; the remainder arithmetic must multiply too.
**mistake_e:** 7 is what n itself can leave when divided by 8 (n = 7, 15, …). It answers a different question — about n, not n^2 — and not even consistently, since n can also leave 3.
**common_trap:** Trying to reason about how remainders transform under squaring instead of squaring an actual qualifying number. Two plugs (n = 3 and n = 7) take twenty seconds and remove all doubt.
**takeaway:** When the divisor in the question differs from the divisor in the condition, plug at least two qualifying values — if they agree, the answer is structural, and a quick expansion like (4k + 3)^2 shows why.
**hint_nudge:** Find the smallest n that fits the condition — it is a one-digit number — and just square it.
**hint_strategy:** If two different qualifying values of n give the same remainder, trust the pattern; expanding (4k + 3)^2 = 8(2k^2 + 3k + 1) + 1 proves it.
**related_reading:** quant-02-plugging-in-numbers

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** answered-wrong-quantity
**est_time_seconds:** 140

A prize of x dollars is to be divided equally among p winners, where p > 1. Before the prize is paid, q of the winners, where 0 < q < p, are disqualified, and the entire prize is instead divided equally among the remaining winners. In terms of x, p, and q, how many more dollars does each remaining winner receive than originally planned?

- A) x/p
- B) xq/p^2
- C) xq/(p(p - q))
- D) x/(p - q)
- E) xq/(p - q)

**answer:** C
**fastest_path:** Invent a tiny prize — 12 dollars, 4 winners, 1 disqualified — compute before and after shares, and subtract.
**explanation:** Three variables make the algebra slippery, so make all of them concrete: x = 12 dollars, p = 4 winners, q = 1 disqualified.

Originally each winner expects 12/4 = 3 dollars. After the disqualification, 3 winners split the same 12 dollars: 4 dollars each. The increase — the target — is 4 - 3 = 1 dollar.

Plug x = 12, p = 4, q = 1 into each choice and keep the one equal to 1. Choice C gives 12(1)/(4 × 3) = 12/12 = 1. The others miss: A gives 3, B gives 12/16 = 0.75, D gives 4, E gives 4.

The structure behind it: the difference is x/(p - q) - x/p, which combines over the common denominator p(p - q) to give xq/(p(p - q)) — exactly the fraction subtraction the test hopes you will fumble, and the step plugging in lets you skip.

The correct answer is C.
**mistake_a:** x/p is the originally planned share — a number from the middle of your work, not the increase the question asks about.
**mistake_b:** xq/p^2 comes from using the original group size p in both denominators when subtracting the fractions. The new share has a new denominator, p - q.
**mistake_d:** x/(p - q) is each remaining winner's final payout. The question asks how much more than planned — the difference, not the new total. Stopping one subtraction early is the classic last-step trap.
**mistake_e:** xq/(p - q) is what you get by subtracting denominators instead of subtracting fractions: a plausible-looking shortcut with no valid algebra behind it. The plug rejects it instantly (it gives 4, not 1).
**common_trap:** Answering the new share instead of the increase. Multi-step stems love to ask for the difference; reread the final question line before matching choices.
**takeaway:** With three variables in the choices, plug one small number for each, compute the asked-for quantity end to end, and only then look at the choices — the fraction algebra disappears entirely.
**hint_nudge:** Make up the smallest convenient setup: a 12-dollar prize, 4 winners, 1 disqualified.
**hint_strategy:** Compute the before share and the after share with your numbers, subtract them, and match that single target number against all five choices.
**related_reading:** quant-02-plugging-in-numbers

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** positive-numbers-only-testing
**est_time_seconds:** 140

If |x| > |y| and x + y > 0, which of the following must be true?

- A) y > 0
- B) xy > 0
- C) x > 0
- D) y^2 < x
- E) x + 2y > 0

**answer:** C
**fastest_path:** Try a mixed-sign pair like x = 5, y = -3 — it satisfies both conditions and kills every choice except C.
**explanation:** A friendly plug like x = 5, y = 3 satisfies both conditions and leaves A, B, C, and E all looking true — which is the warning that the test values were too comfortable. Nothing requires y to be positive.

Go hostile: x = 5, y = -3. Check the conditions: |5| > |-3| and 5 + (-3) = 2 > 0. Legal. Now A fails (y is negative), B fails (xy = -15), and E fails (5 - 6 = -1). D was already dead even for positives: x = 5, y = 3 gives y^2 = 9, which is not less than 5.

Only C survives, and for a structural reason: the sum of two numbers takes the sign of whichever has the larger absolute value. Here the sum is positive and x is the larger-magnitude number, so x must be positive. (If x were negative or zero, then x + y would be at most -|x| + |y|, which is negative because |y| < |x|.)

The correct answer is C.
**mistake_a:** y > 0 holds in the all-positive case but the conditions never require it: x = 5, y = -3 is fully legal. The absent constraint is the trap.
**mistake_b:** xy > 0 says the signs match — but a big positive x can carry a small negative y and keep the sum positive. Same counterexample, same collapse.
**mistake_d:** y^2 < x confuses magnitude comparison with square comparison. Even with both numbers positive it fails (x = 5, y = 3 gives 9 > 5), because squaring a number bigger than 1 outgrows the linear term.
**mistake_e:** x + 2y > 0 doubles y's influence, and a negative y exploits that immediately: 5 + 2(-3) < 0. True for the friendly plug, false for the hostile one — the definition of "not a must."
**common_trap:** Testing only positive values. When a problem is stated in absolute values, the negative cases are not an edge case — they are the entire point.
**takeaway:** For must-be-true with absolute values, always run a mixed-sign test, and remember: a sum takes the sign of the larger-magnitude term.
**hint_nudge:** Nothing says x and y are positive — try a negative y with a larger positive x.
**hint_strategy:** The sum of two numbers takes the sign of whichever has the larger absolute value.
**related_reading:** quant-02-plugging-in-numbers

---

## Q27
**difficulty:** Hard
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** boundary-values-untested
**est_time_seconds:** 150

If x < -1, which of the following must be true?

- A) x^2 > 2
- B) x^3 < -2
- C) x^2 > -x
- D) x^4 > 8
- E) x^2 + x > 1

**answer:** C
**fastest_path:** x = -2 makes every choice look true; the question is decided at the boundary, so test x = -1.1.
**explanation:** Plug the obvious value, x = -2: A gives 4 > 2, B gives -8 < -2, C gives 4 > 2, D gives 16 > 8, E gives 2 > 1. All five true — so the obvious value decides nothing, and the discriminating values must live elsewhere in the range.

The range x < -1 includes values hugging the boundary. Test x = -1.1: A gives 1.21, not greater than 2 — dead. B gives -1.331, not less than -2 — dead. D gives about 1.46, nowhere near 8 — dead. E gives 1.21 - 1.1 = 0.11, not greater than 1 — dead.

C at x = -1.1: x^2 = 1.21 and -x = 1.1, and 1.21 > 1.1 — still true. It holds across the whole range because x^2 > -x rearranges to x^2 + x > 0, i.e. x(x + 1) > 0; for x < -1 both factors are negative, so the product is positive. True at -1.1, at -2, at -1000.

The correct answer is C.
**mistake_a:** x^2 > 2 holds from x = -1.5 or so outward but fails between -1.5 and -1 (e.g. 1.21 at x = -1.1). A threshold claim with a hard number in it should always be probed right at the range's edge.
**mistake_b:** x^3 < -2 fails near the boundary for the same reason: cubes of numbers barely below -1 are barely below -1, not below -2.
**mistake_d:** x^4 > 8 is the same trap at a higher power — spectacular at x = -2 (16), feeble at x = -1.1 (about 1.46). Powers amplify distance from 1, and near the boundary there is no distance to amplify.
**mistake_e:** x^2 + x > 1 is the near-miss: the true guarantee is x^2 + x > 0. At x = -1.1 the expression is a hair above zero (0.11), nowhere near 1. The right structure with the wrong threshold is still wrong.
**common_trap:** Testing one comfortable value like x = -2 and concluding everything is true. Open ranges are decided at their boundary; a value like -1.1 is the adversary the choices were built to hide from.
**takeaway:** For must-be-true over a range, plug both a deep value and a boundary-hugging value — any choice that quotes a specific threshold (2, 8, 1) is begging to be tested at the edge.
**hint_nudge:** x = -2 makes every choice look true — the range also includes values much closer to -1.
**hint_strategy:** Test x = -1.1. Only a statement that survives both the boundary and the deep end can be a "must."
**related_reading:** quant-02-plugging-in-numbers

---

## Q28
**difficulty:** Challenge
**type:** Problem Solving
**topic:** Plugging In
**trap_type:** hidden-structure-missed
**est_time_seconds:** 150

If -3 <= a <= 5 and -7 <= b <= 2, what is the greatest possible value of (a - b)(b - a)?

- A) -144
- B) -1
- C) 0
- D) 35
- E) 144

**answer:** C
**fastest_path:** Notice (b - a) = -(a - b), so the product is -(a - b)^2 — a quantity that can never be positive and peaks at 0 when a = b.
**explanation:** The reflex on max/min range problems is to plug the endpoints: a = 5, b = -7 gives (a - b) = 12 and (b - a) = -12, so the product is -144. Other corner combinations give similar negative values, and it is tempting to report the "biggest" of these.

But look at the structure first: b - a is exactly the negative of a - b. So (a - b)(b - a) = -(a - b)^2 — the negative of a square. A negative square can never be positive, and it equals 0 exactly when a - b = 0.

So the question collapses to: can a equal b? The ranges overlap — any value from -3 to 2 is legal for both, so a = b = 0 (for instance) is allowed. The product then equals 0, and since the expression can never exceed 0, that is the maximum.

Endpoint-plugging fails here precisely because the extremes of a - b make the square large, which makes the product more negative. The optimum lives in the overlap, not at the corners.

The correct answer is C.
**mistake_a:** -144 comes from maximizing a - b at 12 and dutifully multiplying by the resulting -12. That maximizes the square — which minimizes the expression. It is the least possible value, not the greatest.
**mistake_b:** -1 is the answer of someone who saw the product must be negative but assumed a and b could not be equal — perhaps picturing integers that must differ. The ranges overlap, and nothing forbids a = b.
**mistake_d:** 35 multiplies the individual maxima of a and b (5 × 7, with a sign slip) — treating the target like the product ab instead of the expression actually given. Always optimize the expression on the page.
**mistake_e:** 144 drops the sign entirely, computing (a - b)^2 at its largest. The expression is the negative of that square; its largest value and the square's largest value sit at opposite ends.
**common_trap:** Marching straight to endpoint arithmetic without simplifying. One line of structure — the factors are negatives of each other — converts a four-corner search into "can a equal b?"
**takeaway:** Before optimizing over ranges, simplify the expression: a product of a quantity and its own negative is a negative square, maximized at 0 wherever the ranges allow equality.
**hint_nudge:** How are the two factors (a - b) and (b - a) related to each other?
**hint_strategy:** The product equals -(a - b)^2, which can never be positive. When is it zero?
**hint_setup:** The maximum 0 requires a = b — check whether the two ranges share any common value.
**related_reading:** quant-02-plugging-in-numbers
