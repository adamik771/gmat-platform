---
section: Quant
topic: Algebra
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations

If 3x + 7 = 22, what is the value of 6x + 5?

- A) 25
- B) 30
- C) 35
- D) 40
- E) 45

**answer:** C
**hint_nudge:** You don't actually need to know x — notice the expression 6x + 5 has a relationship to 3x + 7.
**hint_strategy:** 6x = 2(3x), so if you can isolate 3x from the given equation you can multiply and add without solving for x.
**hint_setup:** From 3x + 7 = 22 you get 3x = 15. Then 6x + 5 = 2(3x) + 5 = 2(15) + 5.
**fastest_path:** Don't solve for x. From 3x + 7 = 22 → 3x = 15. Then 6x + 5 = 2(3x) + 5 = 2(15) + 5 = 35.
**explanation:** The structural shortcut: notice that 6x = 2 × 3x, so 6x + 5 can be written as 2(3x) + 5. From the given equation, 3x = 15. Substituting: 2(15) + 5 = 35. Solving for x first (x = 5, then 6(5) + 5 = 35) reaches the same answer but takes an extra step. The shortcut saves about 15 seconds and is one of the most common Quant patterns: when the question asks for an *expression* containing the variable, look for a structural relationship to the given equation before solving for the variable.
**mistake_a:** Computed 3x = 25 (added 7 instead of subtracting); then 6x + 5 with that wrong x.
**mistake_b:** Solved for x = 5 correctly, then computed 5x + 5 instead of 6x + 5.
**mistake_d:** Used x = 5 but computed 7x + 5 = 40.
**mistake_e:** Misread the question as 6x + 7 instead of 6x + 5.
**common_trap:** missing-algebraic-shortcut — solving for x when the question's expression has a direct relationship to the given equation.
**takeaway:** When the question asks for an expression like aX + c (where the given equation has bX = something), ask whether (a/b) × given gives you the answer directly without solving for X.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponents

Which of the following is equivalent to (x³)⁴ / x⁵?

- A) x²
- B) x⁷
- C) x¹²
- D) x¹⁵
- E) x¹⁷

**answer:** B
**fastest_path:** (x³)⁴ = x^(3×4) = x¹². Divide: x¹² / x⁵ = x^(12−5) = x⁷.
**explanation:** Two exponent rules: (a) power of a power multiplies exponents — (x³)⁴ = x^(3×4) = x¹². (b) Same-base division subtracts exponents — x¹² / x⁵ = x^(12−5) = x⁷. The whole computation is two mechanical steps.
**mistake_a:** Subtracted 3 from 5 (treated denominator as numerator) — got x^2.
**mistake_c:** Correctly computed (x³)⁴ = x¹² but stopped there, forgetting to divide by x⁵. The intermediate result x¹² is the numerator only.
**mistake_d:** Multiplied (x³)⁴ as x^(3+4) = x^7, then multiplied by x^5 instead of dividing — got x^15.
**mistake_e:** Computed 3 × 4 + 5 = 17 by adding the bottom exponent rather than subtracting.
**common_trap:** Confusing exponent rules — multiplying when you should subtract, or adding when you should multiply.
**takeaway:** Memorize the four exponent rules cold: power-of-power multiplies, product-of-same-base adds, quotient subtracts, negative exponent inverts.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Inequalities

If -3x + 9 > 0, which of the following must be true?

- A) x > 3
- B) x > -3
- C) x < -3
- D) x < 3
- E) x = 3

**answer:** D
**fastest_path:** −3x + 9 > 0 → −3x > −9 → x < 3 (dividing by negative flips the inequality).
**explanation:** Subtract 9 from both sides: −3x > −9. Divide both sides by −3 — and *flip the inequality direction* because we're dividing by a negative: x < 3. The flip is the entire question. Without it, the answer is x > 3 (choice A), which is the engineered trap. Backsolving also works: test x = 0 (in choice D's range): −3(0) + 9 = 9 > 0 ✓; test x = 4 (in choice A's range): −3(4) + 9 = −3 > 0? No, −3 is not > 0, so A is wrong.
**mistake_a:** Forgot to flip the inequality when dividing by negative — solved correctly otherwise but bubbled the opposite direction.
**mistake_b:** Got the sign right but reversed which side x is on (x > −3 instead of x < 3).
**mistake_c:** Got the sign right but wrong magnitude (x < −3 instead of x < 3).
**mistake_e:** Solved for x = 3 (treated as equation, not inequality).
**common_trap:** inequality-sign-flip-miss — dividing or multiplying both sides by a negative without flipping the inequality direction.
**takeaway:** Whenever you multiply or divide an inequality by a negative number, flip the direction. Backsolve to verify if uncertain.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q4
**difficulty:** Easy
**type:** Problem Solving
**topic:** Systems of Equations

If x + y = 12 and x - y = 4, what is the value of x?

- A) 4
- B) 6
- C) 8
- D) 10
- E) 16

**answer:** C
**fastest_path:** Add the equations to cancel y: 2x = 16 → x = 8.
**explanation:** The y coefficients are +1 and −1 — equal-and-opposite — making addition the obvious one-step path. Adding (x + y) + (x − y) = 12 + 4 gives 2x = 16, so x = 8. Substitution (solve for y in terms of x in one equation, plug into the other) reaches the same answer in 3-4 extra seconds.
**mistake_a:** Subtracted the equations instead of adding; got 2y = 8 → y = 4, then somehow bubbled.
**mistake_b:** Added correctly to get 2x = 16 but divided wrong.
**mistake_d:** Solved for y first (y = 4) and bubbled the wrong variable.
**mistake_e:** Multiplied 12 × 4 = 48, then divided by 3 → 16 (some kind of arithmetic confusion).
**common_trap:** Solving past sufficiency — picking the wrong variable to bubble after correctly setting up the system.
**takeaway:** When two equations have matching-but-opposite coefficients, add or subtract to eliminate a variable in one step.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If x² - 5x - 14 = 0, what is the product of the two solutions?

- A) -14
- B) -7
- C) 5
- D) 7
- E) 14

**answer:** A
**fastest_path:** Vieta's: for x² + bx + c = 0, product of roots = c. Here c = −14.
**explanation:** Vieta's formulas: for ax² + bx + c = 0, sum of roots = −b/a, product of roots = c/a. With a = 1, the product is just c = −14. Total time: 5 seconds. Factoring (x − 7)(x + 2) = 0, giving roots 7 and −2 with product −14, also works but takes 30+ seconds.
**mistake_b:** Attempted to factor and set up (x + 7)(x − 2) = x² + 5x − 14 (wrong sign on the middle term); deduced roots −7 and 2, then reported the negative root −7 as the answer rather than the product of the correct roots.
**mistake_c:** Sum of roots: −b/a = 5 — confused sum with product.
**mistake_d:** Forgot the negative sign on the constant term.
**mistake_e:** Used |c| = 14, missing the sign.
**common_trap:** missing-algebraic-shortcut — factoring when Vieta's gives the answer directly.
**takeaway:** For x² + bx + c = 0, sum of roots = −b, product of roots = c. When the question asks only for sum or product, skip the factoring step.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q6
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions

If f(x) = 2x² - 3x + 1, what is the value of f(3) - f(1)?

- A) 8
- B) 10
- C) 12
- D) 14
- E) 16

**answer:** B
**fastest_path:** f(3) = 2(9) − 9 + 1 = 10. f(1) = 2 − 3 + 1 = 0. Difference = 10.
**explanation:** f(3) = 2(9) − 3(3) + 1 = 18 − 9 + 1 = 10. f(1) = 2(1) − 3(1) + 1 = 2 − 3 + 1 = 0. f(3) − f(1) = 10.
**mistake_a:** Slip → 8 (likely arithmetic error in f(3) computation).
**mistake_c:** Computed f(1) = 2(1) − 3(1) − 1 = −2 (sign flip on the constant term: subtracted 1 instead of adding it), then f(3) − f(1) = 10 − (−2) = 12.
**mistake_d:** Slip → 14.
**mistake_e:** Computed f(3) but treated f(1) as 1 instead of 0 → 10 + 6, or skipped the subtraction entirely.
**common_trap:** Arithmetic slip on f(3) = 18 − 9 + 1, especially flipping the order of operations on −3(3).
**takeaway:** Functions: substitute, then simplify. Watch the *sign* on each term, especially the −3x.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q7
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

At a bakery, 2 muffins and 3 scones cost $21, while 4 muffins and 1 scone cost $17. What is the cost of one scone?

- A) $1
- B) $2
- C) $3
- D) $4
- E) $5

**answer:** E
**fastest_path:** Backsolve from C (s = $3): 4m + 3 = 17 → m = $3.50; then 2(3.50) + 3(3) = 16, ≠ 21. Try larger s. At s = $5: 4m + 5 = 17 → m = $3; then 2(3) + 3(5) = 21 ✓.
**explanation:** With clean integer answer choices and two checkable constraints (cost equations), backsolving from C and adjusting based on direction is faster than full elimination/substitution. Algebra path: from 4m + s = 17, s = 17 − 4m. Substitute: 2m + 3(17 − 4m) = 21 → −10m = −30 → m = 3, then s = 17 − 12 = 5. Same answer, ~30 sec longer.
**mistake_a:** Picked the smallest answer without testing.
**mistake_b:** Computed 4m + s = 17 with s = 2: m = $3.75 (non-integer; should reject as a "clean" trial signal).
**mistake_c:** Tested s = 3 and didn't iterate to higher values when arithmetic didn't match.
**mistake_d:** Solved for m correctly (m = 3) but made an arithmetic slip computing s: wrote 4 × 3 = 13 instead of 12, giving s = 17 − 13 = 4.
**common_trap:** algebra-by-default — full elimination on a problem with backsolvable integer answer choices.
**takeaway:** Two-equation, two-unknown problems with integer answer choices reward backsolving the asked variable; algebra is the fallback.
**related_reading:** reading-quant-08-method-selection

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

If 2 < |x - 3| < 7, how many integer values of x satisfy the inequality?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**fastest_path:** |x − 3| > 2 → x ∈ (−∞, 1) ∪ (5, ∞). |x − 3| < 7 → x ∈ (−4, 10). Intersection: (−4, 1) ∪ (5, 10). Count integers: {−3, −2, −1, 0, 6, 7, 8, 9} = 8.
**explanation:** Two absolute-value inequalities create an intersection of two unions. From |x − 3| > 2: x − 3 > 2 (x > 5) or x − 3 < −2 (x < 1). From |x − 3| < 7: −7 < x − 3 < 7, i.e., −4 < x < 10. The intersection is (−4 < x < 1) OR (5 < x < 10) — exclusive on all bounds since the inequalities are strict. Integers in the first range: −3, −2, −1, 0 (4 integers). Integers in the second: 6, 7, 8, 9 (4 integers). Total = 8.
**mistake_a:** Counted only one of the two ranges or excluded an endpoint that should be included.
**mistake_b:** Included the endpoint values (treated < as ≤) in one range — counted 7 in the upper range to give 9 total but somehow miscounted.
**mistake_d:** Forgot the strict inequalities and included endpoints (1, 5, −4, 10).
**mistake_e:** Used >, < but counted inclusive on one side.
**common_trap:** ignoring-constraints — strict vs. non-strict inequalities; the boundary integers are excluded.
**takeaway:** Compound absolute-value inequalities split into unions; intersect carefully and exclude boundaries on strict inequalities.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q9
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics

If the roots of the equation x² + bx + c = 0 are each increased by 2, the resulting equation is x² - 6x + 5 = 0. What is the value of b + c?

- A) -5
- B) -3
- C) 1
- D) 3
- E) 5

**answer:** A
**fastest_path:** Find roots of x² − 6x + 5 = 0 → 1 and 5. Original roots = 1 − 2 = −1 and 5 − 2 = 3. Sum = −b, so b = −2. Product = c, so c = −3. b + c = −5.
**explanation:** Factor x² − 6x + 5 = (x − 1)(x − 5), so roots are 1 and 5. The new roots are each 2 more than the original, so original roots = −1 and 3. Apply Vieta's to x² + bx + c = 0: sum of roots = −b → (−1 + 3) = −b → b = −2. Product of roots = c → (−1)(3) = c → c = −3. Therefore b + c = −5.
**mistake_b:** Stopped after computing c = −3 (the product of the original roots −1 and 3) and bubbled that value without computing b or the sum b + c.
**mistake_c:** Mistakenly added 2 to the new roots instead of subtracting (got original roots = 3 and 7, then computed differently).
**mistake_d:** Switched the direction of "increased by 2" — added 2 instead of subtracting from the new roots.
**mistake_e:** Computed sum and product of the *new* roots and reported that.
**common_trap:** Vieta's sign confusion — sum of roots is −b/a, not b/a.
**takeaway:** When original/new root relationships are given, work from the *new* equation backward. Vieta's formulas (sum = −b, product = c for monic x² + bx + c) are faster than re-factoring.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Exponents

If 4^(a+1) = 8^a, what is the value of a?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 6

**answer:** B
**fastest_path:** Common base 2: 4^(a+1) = 2^(2a+2); 8^a = 2^(3a). Set exponents equal: 2a + 2 = 3a → a = 2.
**explanation:** Rewrite both sides with the same base. 4 = 2², so 4^(a+1) = 2^(2(a+1)) = 2^(2a+2). 8 = 2³, so 8^a = 2^(3a). The equation becomes 2^(2a+2) = 2^(3a), which (since the bases are equal) requires the exponents to be equal: 2a + 2 = 3a → a = 2. Verify: 4³ = 64 and 8² = 64 ✓.
**mistake_a:** Set 4 + 1 = 8 × a (treated bases additively).
**mistake_c:** Set up the common-base equation 2a + 2 = 3a correctly but solved it by writing a = 2 + 1 = 3 — incorrectly adding the constant to both sides instead of subtracting 2a to isolate a = 2.
**mistake_d:** Multiplied incorrectly: 2(a+1) = 3a → 2a + 2 = 3a; got a = 2 correctly but slipped on the answer letter.
**mistake_e:** Misread 4^(a+1) as 4^a + 1, leading to wrong setup.
**common_trap:** Exponent rules misapplied — power-of-power vs. product-of-powers.
**takeaway:** When two powers have different bases with a common base relationship (4 = 2², 8 = 2³, 9 = 3², etc.), rewrite with the common base. Equal bases → equal exponents.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions

For all positive integers n, let f(n) = n² - n. What is the value of f(f(3))?

- A) 6
- B) 12
- C) 30
- D) 42
- E) 56

**answer:** C
**fastest_path:** f(3) = 9 − 3 = 6. f(6) = 36 − 6 = 30.
**explanation:** Composition is applied from inside out. Compute the inner first: f(3) = 3² − 3 = 9 − 3 = 6. Then apply f to that result: f(6) = 6² − 6 = 36 − 6 = 30. Total time: 15 seconds. The whole question is mechanical once you read "f(f(3))" as "apply f twice."
**mistake_a:** Stopped at the inner computation: f(3) = 6 — bubbled the intermediate value.
**mistake_b:** Computed f(3) × 2 = 12 (multiplied instead of composing).
**mistake_d:** Computed f(7) = 49 − 7 = 42 — wrong inner argument.
**mistake_e:** Applied n² + n (adding instead of subtracting) for the outer computation: f(6) = 36 + 6 = 42 (→ D). A separate slip: computed f(3) = 9 − 1 = 8 (subtracted the wrong index term), then f(8) = 64 − 8 = 56.
**common_trap:** Stopping at the inner result and bubbling — composition requires both layers.
**takeaway:** f(f(x)) means apply f twice: compute f(x) first, then apply f to that result.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q12
**difficulty:** Hard
**type:** Problem Solving
**topic:** Systems of Equations

If xy = 6 and x² + y² = 20, what is the value of (x + y)²?

- A) 26
- B) 28
- C) 30
- D) 32
- E) 36

**answer:** D
**fastest_path:** (x + y)² = x² + y² + 2xy = 20 + 12 = 32.
**explanation:** Use the algebraic identity (x + y)² = x² + 2xy + y². Substitute the given values: x² + y² = 20 and xy = 6, so (x + y)² = 20 + 2(6) = 32. The identity collapses the answer in one step. Solving for x and y individually (using both given equations) is harder and unnecessary.
**mistake_a:** Added 20 + 6 = 26 — forgot to double the xy term in the identity.
**mistake_b:** Added the coefficient instead of multiplying: 2 + xy = 2 + 6 = 8 (should be 2 × xy = 12), then 20 + 8 = 28.
**mistake_c:** Applied the identity correctly but misread xy = 5 (off by one from the given xy = 6): 20 + 2(5) = 30.
**mistake_e:** Computed x² + y² + xy + xy = 20 + 12 + ... or some other miscombination producing 36.
**common_trap:** missing-algebraic-shortcut — solving for x, y individually when the identity gives the answer in one step.
**takeaway:** Memorize (x + y)² = x² + 2xy + y² and (x − y)² = x² − 2xy + y². When asked for (x ± y)² given x² + y² and xy, the identity is one step.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q13
**difficulty:** Easy
**type:** Problem Solving
**topic:** Quadratic Equations

What is the sum of the solutions to x² + 4x - 21 = 0?

- A) -7
- B) -4
- C) -3
- D) 3
- E) 7

**answer:** B
**fastest_path:** Vieta's: sum of roots = −b/a = −4/1 = −4.
**explanation:** For ax² + bx + c = 0, sum of roots = −b/a. With a = 1 and b = 4: sum = −4. Total time: 5 seconds. Factoring (x + 7)(x − 3) = 0 gives roots −7 and 3, summing to −4 — same answer in 30+ seconds.
**mistake_a:** Sum of *factor terms* in the factored form (7 + 3 not −7 + 3, getting +7 or −7).
**mistake_c:** Computed product of roots instead of sum: −21/1 → some confusion to −3.
**mistake_d:** Sign error: +b/a instead of −b/a.
**mistake_e:** Got the magnitude right but wrong sign.
**common_trap:** missing-algebraic-shortcut — factoring when Vieta's gives the answer directly.
**takeaway:** When the question asks for sum or product of quadratic roots, use Vieta's: sum = −b/a, product = c/a. Skip factoring.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratic Equations

If x² - 10x + k = 0 has exactly one real solution, what is the value of k?

- A) 5
- B) 10
- C) 20
- D) 25
- E) 50

**answer:** D
**fastest_path:** Discriminant = 0 → b² = 4ac → 100 = 4k → k = 25.
**explanation:** A quadratic has exactly one real solution (a repeated root) when its discriminant b² − 4ac = 0. Here a = 1, b = −10, c = k. Set discriminant = 0: 100 − 4k = 0 → k = 25. The double root is x = 5, since x² − 10x + 25 = (x − 5)². Recognition: when the question asks for the value of a parameter that produces a repeated/equal/single/double root, set discriminant = 0.
**mistake_a:** Half of b: 10/2 = 5 (used a different and wrong formula).
**mistake_b:** Computed b/2 = 5; doubled to 10. Some confusion between vertex form and discriminant.
**mistake_c:** Sum of roots calculation: −b/a = 10; squared to 100/5 = 20.
**mistake_e:** Product of roots × 2 = 50.
**common_trap:** Forgetting the discriminant formula — confusing it with sum or product of roots.
**takeaway:** "Exactly one real solution" / "double root" / "repeated root" → discriminant = 0. b² = 4ac.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

If 3x + 2y = 16 and 5x - 2y = 16, what is the value of x + y?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**fastest_path:** Add to eliminate y: 8x = 32 → x = 4. Then 3(4) + 2y = 16 → y = 2. x + y = 6.
**explanation:** y coefficients are equal-and-opposite (+2 and −2) — adding the equations eliminates y in one step: 8x = 32 → x = 4. Substitute back: 3(4) + 2y = 16 → 2y = 4 → y = 2. Therefore x + y = 6. Total time: ~30 seconds. Full substitution path takes ~60-75 seconds.
**mistake_a:** Stopped at x = 4 and bubbled the wrong variable.
**mistake_b:** Computed y = 2 and bubbled.
**mistake_d:** Subtracted the equations instead of adding; got 2x = 0 → x = 0, then y = 8, sum = 7.
**mistake_e:** Misread question; computed xy or x²+y².
**common_trap:** Solving past sufficiency or stopping too early — picking up x or y alone after correct setup.
**takeaway:** When y coefficients are equal-and-opposite, add to cancel y in one step. After computing both, re-read the question to confirm what's asked.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q16
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Systems of Equations

What is the value of x?

(1) 2x + 3y = 14
(2) 4x + 6y = 28

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**fastest_path:** Eq (2) = 2 × Eq (1), so they're equivalent, not independent. One equation's worth of info on two unknowns → E.
**explanation:** Statement (1) alone: one equation, two unknowns → infinite solutions, insufficient. Statement (2) alone: divide by 2 to get 2x + 3y = 14 — same as (1), still insufficient. Together: the statements are not independent (one is a scalar multiple of the other), so combining them gives no new information — still one equation, two unknowns. Two linear equations only pin down a unique solution when they're *linearly independent*.
**mistake_a:** Assumed Statement (1) alone is sufficient because it "looks like" a complete equation.
**mistake_c:** Counted two statements and concluded "two equations, two unknowns → solvable" without checking independence.
**mistake_d:** Concluded each alone is sufficient; missed that one equation in two unknowns is never enough for a unique value.
**common_trap:** non-independent-equations — assuming two equations always pin down a two-variable system without checking linear independence.
**takeaway:** Two equations in two unknowns are sufficient *only when linearly independent*; check that one isn't a scalar multiple of the other.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q17
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value

If |x - 4| = 7, what is the sum of all possible values of x?

- A) -11
- B) -3
- C) 4
- D) 8
- E) 11

**answer:** D
**fastest_path:** For |x − a| = b, solutions are symmetric about a, so sum = 2a = 2(4) = 8.
**explanation:** Two ways to solve. (1) Symmetry shortcut: |x − 4| = 7 means x is 7 units from 4, so x = 11 or x = −3. The sum of any two values symmetric about a is 2a, here 2(4) = 8. (2) Casework: x − 4 = 7 → x = 11; x − 4 = −7 → x = −3; sum = 8. The shortcut is faster (5 sec vs. 20 sec) once you've internalized that |x − a| = b gives symmetric solutions.
**mistake_a:** Wrong sign on one or both solutions; got 4 − 7 = −3, then doubled the negative.
**mistake_b:** Forgot the negative case; computed only x = 11 then halved.
**mistake_c:** Computed |x| = 11, didn't process the −4 offset.
**mistake_e:** Computed only the positive case (x = 11) and bubbled.
**common_trap:** absolute-value-single-case — solving only x − 4 = +7 and missing the negative case.
**takeaway:** |x − a| = b → x = a ± b; their sum is 2a (the symmetry center), their difference is 2b.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q18
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value Inequalities

For how many integer values of x is |2x + 1| < 9?

- A) 7
- B) 8
- C) 9
- D) 10
- E) 11

**answer:** B
**fastest_path:** |2x + 1| < 9 → −9 < 2x + 1 < 9 → −5 < x < 4. Strict bounds → integers {−4, ..., 3} = 8.
**explanation:** Translate the absolute-value inequality: |expr| < k becomes −k < expr < k. So −9 < 2x + 1 < 9. Subtract 1: −10 < 2x < 8. Divide by 2: −5 < x < 4. Strict inequalities exclude the endpoints, so integers strictly between −5 and 4 are −4, −3, −2, −1, 0, 1, 2, 3 — that's 8 integers.
**mistake_a:** Excluded one endpoint that should be excluded but also lost an interior integer.
**mistake_c:** Included one endpoint (treated < as ≤) somewhere; counted 9.
**mistake_d:** Included both endpoints (counted −5 and 4) → 10.
**mistake_e:** Treated as |...| ≤ 9 throughout; counted including endpoints → 11.
**common_trap:** Endpoint inclusion on strict inequalities — counting integers at the boundary that are excluded by < (rather than ≤).
**takeaway:** |expr| < k ⇔ −k < expr < k (strict on both sides). Strict bounds exclude integers exactly at the boundary.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q19
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Functions

If f(x) = ax + b where a and b are constants, what is the value of f(5)?

(1) f(1) = 7
(2) f(3) = 13

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** f(x) = ax + b has 2 unknowns. Each statement gives 1 equation. Need both → C.
**explanation:** The function has two parameters: a and b. Statement (1) alone: f(1) = a + b = 7 — one equation, two unknowns, insufficient. Statement (2) alone: f(3) = 3a + b = 13 — also insufficient. Combined: subtract (1) from (2) to get 2a = 6 → a = 3, then b = 4. The two equations are linearly independent, so they uniquely pin down a and b. Then f(5) = 3(5) + 4 = 19.
**mistake_a:** Treated Statement (1) as "f is linear" sufficient — confused linear *form* with knowing the function.
**mistake_d:** Concluded each alone is sufficient because each is "an equation" — missed two unknowns.
**mistake_e:** Concluded together insufficient because "two unknowns require two unknowns to specify" — confused.
**common_trap:** Counting equations without checking independence and unknowns.
**takeaway:** f(x) = ax + b has 2 unknowns; need 2 linearly independent values of f to specify. C-pattern in DS — each alone insufficient, together sufficient.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q20
**difficulty:** Medium
**type:** Problem Solving
**topic:** Algebra Translation

The sum of three consecutive even integers is 18 more than twice the smallest of the three. What is the largest of the three integers?

- A) 10
- B) 12
- C) 14
- D) 16
- E) 18

**answer:** D
**fastest_path:** Let smallest = n. Sum = 3n + 6 = 2n + 18 → n = 12. Largest = n + 4 = 16.
**explanation:** Translate carefully. Let n = smallest even integer. Three consecutive evens: n, n+2, n+4. Their sum: 3n + 6. "18 more than twice the smallest" = 2n + 18 (the larger quantity equals the smaller plus 18). Set equal: 3n + 6 = 2n + 18 → n = 12. Largest = 12 + 4 = 16.
**mistake_a:** Translated "consecutive integers" instead of "consecutive even integers" — n, n+1, n+2; got n+2 = 10.
**mistake_b:** Solved for n itself (12) and bubbled.
**mistake_c:** Got middle integer n+2 = 14 and bubbled.
**mistake_e:** Translated "18 more than twice the smallest" as 2n − 18 (sign error); got n = −24 then took absolute or some other slip producing 18.
**common_trap:** Translation errors on "more than" — attaching the +18 to the wrong side, or treating consecutive integers as consecutive evens (or vice versa).
**takeaway:** "X is Y more than Z" means X = Z + Y. "Consecutive even integers" differ by 2; "consecutive integers" differ by 1.
**related_reading:** reading-quant-05-word-problems


---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Symmetric Sums

Let x, y, and z be positive real numbers with x + y + z = 12 and xy + yz + zx = 39. What is the value of x² + y² + z²?

- A) 66
- B) 72
- C) 78
- D) 87
- E) 105

**answer:** A
**fastest_path:** (x+y+z)² = x²+y²+z² + 2(xy+yz+zx) → 144 = sum_of_squares + 78 → sum_of_squares = 66.
**explanation:** Use the symmetric-sum identity (x + y + z)² = x² + y² + z² + 2(xy + yz + zx). Substitute: (12)² = (x² + y² + z²) + 2(39) → 144 = (x² + y² + z²) + 78 → x² + y² + z² = 66.
**mistake_b:** Arithmetic slip: computed 2(xy + yz + zx) = 2(39) = 72 (should be 78), then 144 − 72 = 72.
**mistake_c:** Correctly computed 2(xy + yz + zx) = 78 but bubbled that intermediate value instead of subtracting from 144: x² + y² + z² = 78 (forgot the final step).
**mistake_d:** Plausible distractor — no single clean arithmetic path leads here; it exists to discourage guessing adjacent values near the correct answer.
**mistake_e:** Dropped the factor of 2 from the identity: treated (x + y + z)² = x² + y² + z² + (xy + yz + zx), giving 144 − 39 = 105.
**common_trap:** missing-algebraic-shortcut + factor-of-2 error — solving for x, y, z individually (impossible without more info) or forgetting the factor of 2 on the cross-product sum.
**takeaway:** (x + y + z)² = (sum of squares) + 2(sum of pairwise products). Memorize for symmetric-sum problems.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute-Value Inequalities

For how many integer values of x is |2x − 5| < |x − 8|?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** Square both sides → (2x−5)² < (x−8)² → factor: (x+3)(3x−13) < 0 → x ∈ (−3, 13/3). Integers: {−2,−1,0,1,2,3,4} = 7.
**explanation:** Both sides are non-negative, so squaring preserves the inequality. (2x − 5)² < (x − 8)² rearranges to (2x − 5)² − (x − 8)² < 0. Factor the difference of squares: [(2x−5) − (x−8)][(2x−5) + (x−8)] < 0 → (x + 3)(3x − 13) < 0. Product is negative between the roots: x ∈ (−3, 13/3). Since 13/3 ≈ 4.33, integers are −2, −1, 0, 1, 2, 3, 4 → 7 values.
**mistake_a:** Excluded x = 4 (treated 13/3 < 4); counted 5 integers.
**mistake_b:** Included x = −3 or excluded one valid integer.
**mistake_d:** Casework approach with arithmetic slip; counted 8.
**mistake_e:** Included both endpoints and miscounted the upper bound.
**common_trap:** Boundary confusion on strict-vs-non-strict inequalities and integer rounding (13/3 ≈ 4.33 means x ≤ 4 is allowed strictly).
**takeaway:** When both sides of |...| < |...| are non-negative, squaring then factoring difference-of-squares is cleaner than casework on critical points.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q23
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sequences — Telescoping Recurrence

A sequence satisfies a₁ = 3 and a_{n+1} = aₙ + n + 1 for every integer n ≥ 1. What is the value of a₁₀₀?

- A) 5,050
- B) 5,051
- C) 5,052
- D) 5,100
- E) 5,151

**answer:** C
**fastest_path:** a₁₀₀ = a₁ + Σ_{k=2}^{100} k = 3 + (5050 − 1) = 5052.
**explanation:** Telescope the recurrence: a₂ = a₁ + 2, a₃ = a₂ + 3, …, aₙ = aₙ₋₁ + n. Sum: aₙ = a₁ + (2 + 3 + ... + n) = a₁ + (n(n+1)/2 − 1) (subtracting 1 because the sum starts at 2, not 1). For n = 100: a₁₀₀ = 3 + (5050 − 1) = 3 + 5049 = 5052. Total time: ~60 seconds with the telescoping insight.
**mistake_a:** Computed n(n+1)/2 = 5050 and bubbled — dropped the offset adjustment.
**mistake_b:** Off-by-one error: included or excluded the wrong term.
**mistake_d:** Used n² approximation: 100² = 10000, halved to 5000, added 100.
**mistake_e:** Computed sum from 1 to 101 instead of 2 to 100; got 5151.
**common_trap:** Off-by-one errors on the bounds of telescoping sums — n(n+1)/2 starts at k=1, not k=2.
**takeaway:** Telescoping recurrences: write the running sum, identify the index range carefully, and offset by the starting term.
**related_reading:** reading-quant-05-word-problems


---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics — Vieta's Formulas

If the roots of the quadratic equation x² + bx + 12 = 0 differ by 1, what are the possible values of b?

- A) ±5
- B) ±6
- C) ±7
- D) ±8
- E) ±9

**answer:** C
**fastest_path:** (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂ → 1 = b² − 48 → b² = 49 → b = ±7.
**explanation:** Use the identity (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂. Vieta's: sum = −b, product = 12. Substitute: 1² = b² − 4(12) → b² = 49 → b = ±7. Verify with b = 7: x² + 7x + 12 = (x + 3)(x + 4), roots −3 and −4, which differ by 1 ✓. The ± sign matters: both b = 7 and b = −7 produce roots that differ by 1 (just with flipped signs).
**mistake_a:** Computed only one sign, missed ±.
**mistake_b:** b² = 36, took √36 = 6.
**mistake_d:** b² = 64; took √64 = 8.
**mistake_e:** b² = 81 (added wrong); took √81 = 9.
**common_trap:** squaring-without-sign-check — taking √(b²) and missing that b can be ± of the magnitude.
**takeaway:** When you take a square root in a problem, both ± signs are valid solutions unless additional constraints rule one out. Memorize (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂ for "roots differ by k" problems.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q25
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem — Relative Motion

Two hikers start at the same time from opposite ends of a trail that is 24 miles long, walking toward each other along the trail. Hiker X walks at 3 miles per hour; Hiker Y walks at 5 miles per hour. At what time do they meet, given that they start at 8:00 AM?

- A) 10:00 AM
- B) 10:30 AM
- C) 11:00 AM
- D) 11:30 AM
- E) 12:00 noon

**answer:** C
**fastest_path:** Closing speed = 3 + 5 = 8 mph. Time = 24 / 8 = 3 hours. Meet at 11:00 AM.
**explanation:** Two objects moving toward each other have a combined "closing speed" equal to the sum of their individual speeds: 3 + 5 = 8 mph. Distance to close = 24 miles. Time = 24/8 = 3 hours. Starting at 8:00 AM, they meet at 11:00 AM.
**mistake_a:** Arithmetic error in the final division: computed 24 ÷ 8 = 2 (instead of 3), then 8:00 AM + 2 hours = 10:00 AM.
**mistake_b:** Misread the trail length as 20 miles and correctly applied closing speed: 20/(3 + 5) = 20/8 = 2.5 hours → 8:00 AM + 2:30 = 10:30 AM.
**mistake_d:** Correctly found t = 3 hours but made a temporal arithmetic slip: computed 8:00 AM + 3 hours 30 minutes = 11:30 AM (misread 3 hours as 3.5 hours on the clock).
**mistake_e:** Assumed only the slower hiker (X at 3 mph) needs to reach the midpoint: 12/3 = 4 hours → 8:00 AM + 4 hours = 12:00 noon.
**common_trap:** Using a single hiker's speed instead of the combined closing speed.
**takeaway:** When two objects move toward each other, add their speeds to get the closing speed; divide total distance by closing speed for meeting time.
**related_reading:** reading-quant-05-word-problems


---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Rational Equations

If 1/(x − 3) + 1/(x + 3) = 12/(x² − 9), what is the value of x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 12

**answer:** D
**fastest_path:** Common denominator x² − 9 = (x−3)(x+3). LHS = 2x/(x²−9). Set equal: 2x = 12 → x = 6.
**explanation:** Notice x² − 9 = (x − 3)(x + 3). Combine the left side over the common denominator: 1/(x−3) + 1/(x+3) = [(x+3) + (x−3)] / (x²−9) = 2x / (x²−9). The equation becomes 2x/(x²−9) = 12/(x²−9). Same denominator → numerators equal: 2x = 12 → x = 6. Verify: x = 6 doesn't zero any denominator, so it's valid.
**mistake_a:** Picked x = 3 without checking the domain — x = 3 makes 1/(x−3) undefined.
**mistake_b:** Computed 12/3 = 4 from a shortcut that ignored structure.
**mistake_c:** Solved 2x + 12 = ... or some other miscombined equation; got 5.
**mistake_e:** Multiplied 12 directly: 12/2 = 6, then doubled wrongly to 12 (or some other setup).
**common_trap:** Domain violations on rational equations — accepting an extraneous solution that makes a denominator zero.
**takeaway:** When solving rational equations, find the common denominator, simplify, then verify the answer doesn't violate the domain (no denominator = 0).
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q27
**difficulty:** Medium
**type:** Problem Solving
**topic:** Function Composition

If f(x) = 2x + 3 and g(x) = x² − 1, what is f(g(2))?

- A) 5
- B) 7
- C) 9
- D) 11
- E) 13

**answer:** C
**fastest_path:** g(2) = 4 − 1 = 3. f(3) = 6 + 3 = 9.
**explanation:** Composition is applied inside out. Compute the inner first: g(2) = 2² − 1 = 4 − 1 = 3. Then apply f: f(3) = 2(3) + 3 = 9. Total time: 15 seconds.
**mistake_a:** Computed g(2) = 3 and bubbled (stopped at the inner result).
**mistake_b:** Computed f(2) = 2(2) + 3 = 7 and bubbled — evaluated f at the outer argument directly, ignoring g.
**mistake_d:** Computed g(2) = 2² = 4 (forgot the −1 in g(x) = x² − 1), then f(4) = 2(4) + 3 = 11.
**mistake_e:** Evaluated g with a sign error: g(2) = 2² + 1 = 5 (added instead of subtracting 1), then f(5) = 2(5) + 3 = 13.
**common_trap:** Wrong composition order — computing g(f(x)) instead of f(g(x)), or stopping at the inner function's output.
**takeaway:** f(g(x)) means "first apply g, then f." Always compute the *innermost* function first.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q28
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value — Sum of Two Expressions

For how many integer values of x is |3x + 2| + |x − 4| ≤ 10?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** Critical points x = −2/3 and x = 4. Casework yields −2 ≤ x ≤ 2. Integers {−2,−1,0,1,2} = 5.
**explanation:** Split the real line into three regions by the critical points (where each absolute-value expression changes sign): x = −2/3 and x = 4.

Region (x ≥ 4): |3x+2| + |x−4| = (3x+2) + (x−4) = 4x − 2 ≤ 10 → x ≤ 3. No overlap with x ≥ 4.

Region (−2/3 ≤ x < 4): (3x+2) + (4−x) = 2x + 6 ≤ 10 → x ≤ 2. Combined with the region: −2/3 ≤ x ≤ 2.

Region (x < −2/3): −(3x+2) + (4−x) = −4x + 2 ≤ 10 → x ≥ −2. Combined: −2 ≤ x < −2/3.

Total range: −2 ≤ x ≤ 2. Integers: −2, −1, 0, 1, 2 → 5 values.
**mistake_a:** Missed one of the regions; counted only 3.
**mistake_b:** Excluded an endpoint; counted 4.
**mistake_d:** Included an extra integer (e.g., −3 or 3) by miscounting boundaries; got 6.
**mistake_e:** Double-counted; got 7.
**common_trap:** Boundary errors on multi-region casework — including or excluding the wrong critical points.
**takeaway:** For sum-of-absolute-values problems, identify critical points, split into regions, solve linear inequality in each, then unite. Count integers in the final union.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics — Root Reconstruction

If the roots of the quadratic equation x² + bx + c = 0 are 3 and −5, what is the value of b − c?

- A) −17
- B) −13
- C) 13
- D) 17
- E) 23

**answer:** D
**fastest_path:** Vieta's: sum = −b = 3 + (−5) = −2 → b = 2. Product = c = (3)(−5) = −15. b − c = 2 − (−15) = 17.
**explanation:** Vieta's formulas for x² + bx + c = 0: sum of roots = −b, product = c. Roots are 3 and −5. Sum = 3 + (−5) = −2, so −b = −2 → b = 2. Product = (3)(−5) = −15, so c = −15. Then b − c = 2 − (−15) = 2 + 15 = 17.
**mistake_a:** Subtracted in wrong order: c − b = −15 − 2 = −17.
**mistake_b:** Sign error on b: thought sum = b directly, got b = −2; then b − c = −2 − (−15) = 13.
**mistake_c:** Got c = 15 (sign error on product); b − c = 2 − 15 = −13. Bubbled |−13| = 13.
**mistake_e:** Computed b + c = 2 + (−15) = −13, then took absolute value or other slip.
**common_trap:** Vieta's sign confusion — sum = −b/a, not +b/a.
**takeaway:** For x² + bx + c = 0, sum of roots = −b, product = c (when leading coeff is 1). Re-read the question to confirm whether you're computing b − c, c − b, b + c, or something else.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q30
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value — Three Critical Points

For how many integer values of x is |x − 1| + |x − 4| + |x − 7| ≤ 8?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** Critical points 1, 4, 7. Casework gives 2 ≤ x ≤ 6. Integers {2,3,4,5,6} = 5.
**explanation:** Critical points at x = 1, 4, 7 split the real line into four regions. In each, drop absolute-value bars by appropriate signs.

Region (x ≤ 1): (1−x) + (4−x) + (7−x) = 12 − 3x ≤ 8 → x ≥ 4/3. No overlap with x ≤ 1.

Region (1 ≤ x ≤ 4): (x−1) + (4−x) + (7−x) = 10 − x ≤ 8 → x ≥ 2. Combined: 2 ≤ x ≤ 4.

Region (4 ≤ x ≤ 7): (x−1) + (x−4) + (7−x) = x + 2 ≤ 8 → x ≤ 6. Combined: 4 ≤ x ≤ 6.

Region (x ≥ 7): (x−1) + (x−4) + (x−7) = 3x − 12 ≤ 8 → x ≤ 20/3 ≈ 6.67. No overlap with x ≥ 7.

Combined: 2 ≤ x ≤ 6. Integers: 2, 3, 4, 5, 6 → 5.

Geometric interpretation: |x−1| + |x−4| + |x−7| is the total distance from x to three anchor points (1, 4, 7). Minimized at the median (x = 4), where sum = 6.
**mistake_a:** Counted only one region; missed integers in the other.
**mistake_b:** Excluded an endpoint or miscounted; got 4.
**mistake_d:** Included extra integers; got 6.
**mistake_e:** Double-counted overlapping endpoints; got 7.
**common_trap:** Multi-region casework errors — wrong sign in one region or wrong intersection with the region's bounds.
**takeaway:** Sum of absolute values = total distance to anchor points. Solve via casework or recognize the median minimizes the sum.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Linear Systems — Sum Extraction

If 2a + 3b = 16 and 5a − 3b = 19, what is the value of a + b?

- A) 5
- B) 7
- C) 9
- D) 11
- E) 13

**answer:** B
**fastest_path:** Add to cancel b: 7a = 35 → a = 5. Then 10 + 3b = 16 → b = 2. a + b = 7.
**explanation:** Coefficients on b are equal-and-opposite (+3 and −3), making addition the obvious one-step path. Adding 2a + 3b + 5a − 3b = 16 + 19 → 7a = 35 → a = 5. Substitute into the first equation: 2(5) + 3b = 16 → 3b = 6 → b = 2. Therefore a + b = 7.
**mistake_a:** Subtracted equations instead of adding; got 3a − 6b = −3, then incorrectly solved.
**mistake_c:** Stopped at a = 5 and bubbled — missed that the question asks for a + b.
**mistake_d:** Computed a × b = 10 + 1 (or some other combination producing 11).
**mistake_e:** Added the right-hand sides only: 16 + 19 = 35; bubbled 13 from arithmetic confusion.
**common_trap:** Solving past sufficiency or stopping early — bubbling a (or b) when the question asked for a + b.
**takeaway:** When two equations have equal-and-opposite coefficients on one variable, add to cancel and solve in one step.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q32
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inequality Systems — Multiple Constraints

For how many integer values of x are all three of the following conditions simultaneously satisfied: 2x + 1 > −5, x − 3 ≤ 4, and |2x − 1| < 7?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**fastest_path:** Solve each: x > −3, x ≤ 7, −3 < x < 4. Intersection: −3 < x < 4. Integers {−2,−1,0,1,2,3} = 6.
**explanation:** Solve each inequality, then intersect:

(1) 2x + 1 > −5 → 2x > −6 → x > −3.
(2) x − 3 ≤ 4 → x ≤ 7.
(3) |2x − 1| < 7 → −7 < 2x − 1 < 7 → −6 < 2x < 8 → −3 < x < 4.

Intersection: x > −3 AND x ≤ 7 AND −3 < x < 4 reduces to −3 < x < 4 (the third condition is the tightest). Integers strictly between −3 and 4: −2, −1, 0, 1, 2, 3 — six values.
**mistake_a:** Excluded one endpoint that should be included or vice versa; got 4.
**mistake_b:** Missed one of the intersections; got 5.
**mistake_d:** Included an endpoint (treated < as ≤ in one condition); got 7.
**mistake_e:** Included both endpoints; got 8.
**common_trap:** Strict-vs-non-strict confusion when intersecting multiple inequalities — boundary integers get excluded by strict bounds.
**takeaway:** Solve each inequality separately, intersect, then count integers carefully — strict bounds exclude integers exactly at the boundary.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q33
**difficulty:** Medium
**type:** Problem Solving
**topic:** Polynomial Transformation

If x² − 10x + 21 = 0, what is the value of x² − 10x + 25?

- A) 4
- B) 5
- C) 6
- D) 10
- E) 25

**answer:** A
**fastest_path:** From x² − 10x + 21 = 0: x² − 10x = −21. Target: x² − 10x + 25 = −21 + 25 = 4.
**explanation:** Don't solve for x. The given equation rearranges to x² − 10x = −21. The target expression x² − 10x + 25 differs from the given (x² − 10x + 21) by exactly 4. So target = −21 + 25 = 4. Total time: 10 seconds.

Verification by solving: factor x² − 10x + 21 = (x − 3)(x − 7) = 0, so x = 3 or 7. Plug x = 3: 9 − 30 + 25 = 4 ✓. Plug x = 7: 49 − 70 + 25 = 4 ✓. Same answer, but takes 60+ seconds.
**mistake_b:** Solved for x (3 or 7), then computed 5² = 25 thinking that was the answer.
**mistake_c:** Computed 25 − 21 = 4, then somehow got 6 from another arithmetic operation.
**mistake_d:** Bubbled 10 (a coefficient appearing in the question).
**mistake_e:** Bubbled 25 (the constant in the target expression, missed the manipulation).
**common_trap:** missing-algebraic-shortcut — solving the quadratic to find x when the substitution shortcut answers the question in one step.
**takeaway:** When the target differs from the given equation by a constant, the answer is the equation's RHS plus the constant difference. Look for x² − ax type expressions that match.
**related_reading:** reading-quant-04-algebra-and-equations
