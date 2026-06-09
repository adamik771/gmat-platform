---
section: Quant
topic: Backsolving
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

The sum of three consecutive integers is 72. What is the largest of the three?

- A) 22
- B) 23
- C) 24
- D) 25
- E) 26

**answer:** D
**hint_nudge:** You don't have to set up algebra — each choice names the largest integer, so it fully determines the other two.
**hint_strategy:** Pick a choice, treat it as the largest, write the three consecutive integers ending there, and check whether they sum to 72.
**hint_setup:** If the largest is 25, the three integers are 23, 24, 25. Add them and compare to 72.
**explanation:** Backsolving turns this into one addition. Each answer choice names the largest of three consecutive integers, which pins down the whole set. Start at the middle choice, C = 24: the integers would be 22, 23, 24, summing to 69 — too small. Because a larger "largest" raises the sum, you move up. Test D = 25: the integers are 23, 24, 25, summing to 72. Exact. The answer is D. You never wrote 3n = 72 or solved for a starting term; you let each choice be the answer and checked it against the one condition in the stem.
**fastest_path:** Treat the choice as the largest integer, list the three consecutive values ending there, and sum-check against 72.
**common_trap:** Reading "consecutive integers" as the three smallest values and picking C = 24, the middle-of-the-road number that feels like an average.
**takeaway:** When the stem asks for one specific value (largest, smallest, the price), each numeric choice is a complete candidate you can verify directly — no equation required.
**related_reading:** quant-01-backsolving

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A theater sells adult tickets for $12 each and child tickets for $8 each. On a night when 200 tickets were sold for a total of $2,080, how many child tickets were sold?

- A) 20
- B) 40
- C) 60
- D) 80
- E) 110

**answer:** D
**hint_nudge:** Rather than build a system of equations, test a choice: assume that many child tickets, fill in the rest as adult tickets, and total the revenue.
**hint_strategy:** Choices are sorted, and more child tickets (cheaper) means less total revenue — a monotonic relationship, so too-high/too-low eliminates a whole half.
**hint_setup:** If 80 child tickets sold, then 120 adult tickets sold. Compute 80 x 8 + 120 x 12 and compare to 2,080.
**explanation:** This is a classic two-equation word problem that backsolving collapses into arithmetic. Each choice is a candidate number of child tickets; the rest of the 200 are adult tickets. Start at the middle, C = 60 child: then 140 adult, giving 60 x 8 + 140 x 12 = 480 + 1,680 = 2,160 — too high. Since child tickets are cheaper, selling more of them lowers the total, so you need a larger child count: move down the list toward D. Test D = 80 child: then 120 adult, giving 80 x 8 + 120 x 12 = 640 + 1,440 = 2,080. Exact. The answer is D. No system of equations, no substitution — just one revenue check per guess.
**fastest_path:** Assume the choice is the child count, set adult = 200 minus it, and total 8(child) + 12(adult) against 2,080.
**common_trap:** Mixing up which variable the choices represent and testing them as the number of adult tickets, landing on B = 40 (the adult-count answer).
**takeaway:** Two-variable word problems with a fixed total are prime backsolving territory: one choice plus the total constraint fixes both unknowns, so each guess is fully checkable.
**related_reading:** quant-01-backsolving

---

## Q3
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

On which of the following questions would backsolving the answer choices NOT reliably find the answer?

- A) If 5x − 3 = 2x + 18, what is x?
- B) The product of two consecutive positive integers is 156. What is the larger one?
- C) After a 20% discount, a coat costs $48. What was the original price?
- D) Which of the following must be true for every prime number greater than 2?
- E) A car travels 240 miles in 4 hours. What is its average speed, in miles per hour?

**answer:** D
**hint_nudge:** Backsolving works when each choice is a single fixed number you can plug back into one checkable condition. Which stem isn't asking for one specific value?
**hint_strategy:** "Must be true" questions ask you to reason over every case, not confirm one number — a value that works for your guess can fail for another.
**hint_setup:** Four of these have a unique numeric answer you can test by substitution. One asks for a property that has to hold across all cases. Find the odd one out.
**explanation:** Backsolving needs two things: numeric, sortable choices and one unknown verifiable by plugging back in. Choices A, B, C, and E all fit — each has a single value you can test against the stem (solve-for-x, a product, a discounted price, a speed). Choice D is a "must be true" question: the answer is a general property, and confirming it holds for one prime tells you nothing about whether it holds for all of them. You can't certify a universal claim by testing a single case, so backsolving breaks. The answer is D. Recognizing this boundary is half the skill — knowing when NOT to backsolve saves you from a method that quietly produces wrong answers on "must be true," "could be true," and variable-expression problems.
**fastest_path:** Scan for the stem that asks for a property holding over all cases rather than one specific computable value.
**common_trap:** Assuming backsolving is universal and trying to test choices on a "must be true" stem, where a single confirming case is not a proof.
**takeaway:** Backsolving certifies a value, not a universal claim. Reserve it for "what is the value" problems with concrete, sortable choices; abandon it for must-be-true, could-be-true, and variable-expression answers.
**related_reading:** quant-01-backsolving

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

You are backsolving a problem whose five answer choices are listed in increasing order, where larger inputs always produce a larger result. You test the middle choice and it comes out too small. Before testing anything else, how many choices can you eliminate, and which are they?

- A) None — you have to test all five to be sure
- B) Two — the two choices smaller than the one you tested
- C) Three — the middle choice and the two below it
- D) One — only the middle choice you tested
- E) Four — you can keep only the largest choice

**answer:** C
**hint_nudge:** "Too small" plus "bigger input gives a bigger result" tells you the true answer must be larger than what you tested.
**hint_strategy:** If the answer is larger than the middle choice, every choice at or below the middle is dead.
**hint_setup:** With choices A < B < C < D < E, you tested C and it was too small. Which ones can no longer be the answer?
**explanation:** This is the engine that makes backsolving fast. The choices are sorted A < B < C < D < E, and the relationship is monotonic increasing: a bigger input yields a bigger result. You tested the middle choice C and it came out too small, meaning the real answer must produce a bigger result, so it must be larger than C. That instantly kills C itself and everything below it — A, B, and C — three choices gone in a single test. Only D and E survive, and one more test settles which. The answer is C: three eliminated, the middle choice and the two below it. This is why you always start at the median of a sorted list: one well-placed test halves the field.
**fastest_path:** Map "too small" onto the monotonic ordering — the answer lies strictly above the tested choice, so that choice and all below it are eliminated.
**common_trap:** Eliminating only the single choice you tested (D) and forgetting that monotonicity also rules out everything on the same side.
**takeaway:** On a sorted list with a monotonic relationship, testing the middle choice eliminates an entire half — that's the half-the-field cut that caps backsolving at two tests.
**related_reading:** quant-01-backsolving

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

If 2x − 5 = 11, what is the value of x + 3?

- A) 8
- B) 10
- C) 11
- D) 13
- E) 16

**answer:** C
**hint_nudge:** The choices describe x + 3, not x. If you plug a choice straight into "2x − 5," you are testing the wrong quantity.
**hint_strategy:** Either solve for x first and then add 3, or back out the implied x from each choice (subtract 3) before testing it in the equation.
**hint_setup:** From 2x − 5 = 11 you get x = 8. The question asks for x + 3, so add 3 to that.
**explanation:** This is backsolving's most common self-inflicted error: testing the choices against the wrong quantity. The choices describe x + 3, but the equation is written in terms of x. Solve directly: 2x − 5 = 11 gives 2x = 16, so x = 8, and x + 3 = 11. The answer is C. If you backsolve, you must first back out the underlying x each choice implies — subtract 3 — before plugging into 2x − 5. A student who plugs the choices in as if they were x lands on A = 8, the value of x itself, which is even planted as a choice to catch exactly that slip. Read the precise ask before you test anything.
**fastest_path:** Solve the one-line equation for x, then apply the transformation the stem asks for (add 3).
**common_trap:** Picking A = 8, the value of x, because the stem solves to x = 8 but actually asks for x + 3.
**takeaway:** When a problem defines x but asks for a transformed quantity (x + 3, 2x, x squared), the choices describe the transformed value — convert before you backsolve, or solve for x and transform last.
**related_reading:** quant-01-backsolving

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

If 4(x + 3) = 2x + 22, what is the value of x?

- A) 2
- B) 5
- C) 7
- D) 8
- E) 11

**answer:** B
**hint_nudge:** Each choice is a candidate value of x — plug one in and check that both sides match.
**hint_strategy:** Start at the middle choice; if the left side overshoots the right, the answer is smaller.
**hint_setup:** Test x = 5: the left side is 4(5 + 3) and the right side is 2(5) + 22. Do they agree?
**explanation:** Each choice is a value of x to test. Start at the middle, C = 7: left side 4(7 + 3) = 40, right side 2(7) + 22 = 36 — left overshoots, so a smaller x is needed. Test B = 5: left 4(5 + 3) = 32, right 2(5) + 22 = 32. Both sides equal 32, so the answer is B. The algebra (4x + 12 = 2x + 22, then 2x = 10) is quick too, but backsolving here is a single substitution with no risk of a sign slip while moving terms across the equals sign.
**fastest_path:** Plug the middle choice into both sides; use the overshoot/undershoot to pick the next test.
**common_trap:** Distributing 4(x + 3) as 4x + 3 instead of 4x + 12 — an error backsolving sidesteps entirely.
**takeaway:** For a clean linear equation, backsolving is a reliable check that avoids distribution and transposition mistakes.
**related_reading:** quant-01-backsolving

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving

A rope 84 inches long is cut into two pieces so that the longer piece is twice as long as the shorter piece. How long is the longer piece, in inches?

- A) 28
- B) 42
- C) 48
- D) 56
- E) 63

**answer:** D
**hint_nudge:** Each choice is a candidate for the longer piece; the shorter piece is then half of it, and the two must sum to 84.
**hint_strategy:** Test a choice as the longer piece, halve it for the shorter piece, and check the total.
**hint_setup:** If the longer piece is 56, the shorter is 28. Does 56 + 28 equal 84?
**explanation:** Backsolve on the longer piece. If a choice is the longer piece, the shorter is half of it, and the two must total 84. Test the middle, C = 48: shorter is 24, total 72 — too small, so go larger. Test D = 56: shorter is 28, total 84. Exact, so the answer is D. The algebraic route (shorter s, longer 2s, 3s = 84, s = 28, longer 56) works, but with backsolving you never have to name a variable — you check candidates directly against the "sums to 84" condition.
**fastest_path:** Treat the choice as the longer piece, halve it, and confirm the pair sums to 84.
**common_trap:** Solving for the shorter piece (28) and picking A by mistake, when the stem asks for the longer piece.
**takeaway:** "Split into parts with a fixed ratio and a fixed total" problems are tailor-made for backsolving — one choice fixes both pieces.
**related_reading:** quant-01-backsolving

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

If x² − 6x + 8 = 0 and x is the larger of the two solutions, what is x?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 6

**answer:** D
**hint_nudge:** Instead of factoring, drop each choice into x² − 6x + 8 and see which makes it zero.
**hint_strategy:** Two choices will satisfy the equation; the stem wants the larger, so test from the top down.
**hint_setup:** Test x = 4: compute 16 − 24 + 8. If it is 0, check that it is the larger root.
**explanation:** Rather than factor x² − 6x + 8 into (x − 2)(x − 4), backsolve. The stem wants the larger root, so test the larger choices first. Test E = 6: 36 − 36 + 8 = 8, not zero. Test D = 4: 16 − 24 + 8 = 0 — a root. Since the other root is the smaller value 2 (choice B), x = 4 is the larger one, and the answer is D. Backsolving a quadratic skips factoring entirely and, more importantly, it makes the "which root does the stem want" decision concrete instead of something you resolve in your head after factoring.
**fastest_path:** Test the larger choices in x² − 6x + 8; the first that yields zero and exceeds the other root is the answer.
**common_trap:** Factoring correctly to roots 2 and 4 but then reporting the smaller root, B = 2, instead of the larger.
**takeaway:** On quadratics that ask for a specific root, backsolving replaces factoring and forces you to honor the larger/smaller condition explicitly.
**related_reading:** quant-01-backsolving

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

Pipe A can fill a tank in 3 hours, and pipe B can fill the same tank in 6 hours. With both pipes open, how many hours does it take to fill the tank?

- A) 1.5
- B) 2
- C) 2.5
- D) 4
- E) 4.5

**answer:** B
**hint_nudge:** Test a choice as the total time: in that many hours, how much of the tank does each pipe fill? They should add to one full tank.
**hint_strategy:** Each pipe fills a fixed fraction per hour (1/3 and 1/6); multiply by the candidate time and require the fractions to sum to 1.
**hint_setup:** Test 2 hours: pipe A fills 2 x (1/3), pipe B fills 2 x (1/6). Do those add up to one whole tank?
**explanation:** Work-rate problems become concrete when you backsolve on the time. In t hours, pipe A fills t/3 of the tank and pipe B fills t/6; together they must fill exactly 1 tank. Test the middle, C = 2.5: 2.5/3 + 2.5/6 = 0.833 + 0.417 = 1.25 — more than one tank, so the true time is shorter. Test B = 2: 2/3 + 2/6 = 2/3 + 1/3 = 1 exactly. The answer is B. You never had to set up and solve 1/3 + 1/6 = 1/t; you let each choice be t and checked the filled fraction against one whole tank.
**fastest_path:** Multiply each pipe's per-hour rate by the candidate time and require the sum to equal one tank.
**common_trap:** Averaging the two times to get 4.5, or adding them — treating the combined time as slower than either pipe alone instead of faster.
**takeaway:** For combined-rate problems, backsolve on the time: each choice gives a filled fraction you check against one whole job.
**related_reading:** quant-01-backsolving

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Backsolving

A jar contains only red and green marbles in the ratio 2 to 3. If there are 18 green marbles, how many marbles are in the jar in total?

- A) 12
- B) 24
- C) 30
- D) 36
- E) 45

**answer:** C
**hint_nudge:** Each choice is a candidate total; green marbles are 3/5 of the total, so check which total gives exactly 18 green.
**hint_strategy:** In a 2:3 ratio, green is 3 of every 5 marbles — test which total makes 3/5 of it equal 18.
**hint_setup:** Test a total of 30: green would be (3/5) x 30. Does that equal 18?
**explanation:** With red to green as 2 to 3, green marbles are 3 of every 5 total, i.e. 3/5 of the jar. Backsolve on the total: each choice should yield 18 green. Test C = 30: green = (3/5)(30) = 18. Exact, so the answer is C. A quick sanity note rules the others out fast — the total must be a multiple of 5 for a 2:3 split to land on whole marbles, which already eliminates A, B, and D. Backsolving lets you check the green count directly instead of solving (3/5)T = 18 for T.
**fastest_path:** Require green = 3/5 of the total to equal 18; the total must also be a multiple of 5.
**common_trap:** Multiplying 18 by 2/3 to get 12 (treating green as the smaller share) and choosing A, or stopping at the red count instead of the total.
**takeaway:** In ratio problems, convert one part to its fraction of the whole (3/5 here), then backsolve totals — divisibility by the ratio's sum prunes most choices instantly.
**related_reading:** quant-01-backsolving

---

## Q11
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Backsolving

If x³ − 2x² − 5x + 6 = 0 and x is the greatest of the three solutions, what is x?

- A) −2
- B) 1
- C) 2
- D) 3
- E) 6

**answer:** D
**hint_nudge:** Factoring a cubic is slow — just drop each choice into the expression and see which makes it zero, starting from the largest.
**hint_strategy:** The stem wants the greatest root, so test the biggest choices first and stop at the first one that gives zero.
**hint_setup:** Test x = 3: compute 27 − 18 − 15 + 6. If that is 0, confirm no larger choice also works.
**explanation:** Factoring a cubic by hand is exactly the kind of ugly algebra backsolving was built for. The stem wants the greatest root, so test the largest choices first. Test E = 6: 216 − 72 − 30 + 6 = 120, not zero. Test D = 3: 27 − 18 − 15 + 6 = 0 — a root, and since no larger choice worked, it is the greatest. The answer is D. (For the record the full factorization is (x − 1)(x − 3)(x + 2), with roots 1, 3, and −2, but you never needed it.) One substitution per choice beats hunting for a rational-root factorization under time pressure.
**fastest_path:** Substitute the largest choices into the cubic; the first that yields zero is the greatest root.
**common_trap:** Misreading "greatest" and reporting a smaller root such as B = 1, or assuming 6 must be a root because it is the largest choice.
**takeaway:** Backsolving scales with algebraic ugliness — the messier the equation (cubics, nested fractions, radicals), the bigger the time saved over solving symbolically.
**related_reading:** quant-01-backsolving

---

## Q12
**difficulty:** Advanced
**type:** Problem Solving
**topic:** Backsolving

A merchant blends coffee worth $9 per pound with coffee worth $6 per pound to make 40 pounds of a mixture worth $7.20 per pound. How many pounds of the $9 coffee are used?

- A) 12
- B) 14
- C) 16
- D) 20
- E) 24

**answer:** C
**hint_nudge:** Test a choice as the pounds of $9 coffee; the rest of the 40 pounds is $6 coffee. Check the total cost against 40 x $7.20.
**hint_strategy:** The blend must cost 40 x 7.20 = $288. More $9 coffee means a higher total, so the relationship is monotonic — use too-high/too-low to cut the field.
**hint_setup:** Test 16 pounds of $9 coffee: then 24 pounds of $6 coffee. Compute 16 x 9 + 24 x 6 and compare to $288.
**explanation:** The mixture must total 40 x $7.20 = $288. Backsolve on the pounds of $9 coffee; the rest of the 40 pounds is $6 coffee. Test the middle, C = 16: that is 16 pounds at $9 and 24 pounds at $6, costing 144 + 144 = $288. Exact on the first real test, so the answer is C. The standard algebra — 9x + 6(40 − x) = 288, then 3x = 48 — gets there too, but backsolving avoids the distribution and the moment where a rushed solver drops the 6(40 − x) term. Note the blend price $7.20 sits closer to $6 than to $9, so the answer should be less than half of 40 pounds, which already fences out D and E.
**fastest_path:** Treat the choice as the $9 pounds, set the remainder as $6 pounds, and total the cost against $288.
**common_trap:** Splitting the 40 pounds evenly to 20 because the blend feels "in the middle," ignoring that $7.20 is nearer the $6 coffee.
**takeaway:** Mixture problems backsolve cleanly: one choice fixes both component weights, and the blend's position between the two prices tells you which way the split should lean.
**related_reading:** quant-01-backsolving
