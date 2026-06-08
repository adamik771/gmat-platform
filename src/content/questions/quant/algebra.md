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
**mistake_c:** Stopped at the numerator step: correctly computed (x³)⁴ = x¹² but then did not complete the division by x⁵, bubbling the intermediate result.
**mistake_d:** Applied the power-of-power step using 5 (the denominator's exponent) instead of 4 (the outer power): computed (x³)^5 = x^(3×5) = x^15, then stopped without performing the division by x^5.
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
**mistake_b:** Computed −b = 5, then halved (some confusion of sum vs product formulas).
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

If f(x) = x² + 2, what is f(a + 1) − f(a − 1)?

- A) 2
- B) 4
- C) 4a
- D) 4a + 4
- E) 2a²

**answer:** C
**hint_nudge:** The argument contains a variable — work symbolically rather than plugging in a specific number.
**hint_strategy:** Expand f(a + 1) and f(a − 1) separately using the formula, then subtract.
**hint_setup:** f(a + 1) = (a + 1)² + 2 = a² + 2a + 3; now find f(a − 1) the same way.
**fastest_path:** f(a+1) = a² + 2a + 3; f(a−1) = a² − 2a + 3. Difference = 4a.
**explanation:** Use the variable argument — expand algebraically. f(a + 1) = (a + 1)² + 2 = a² + 2a + 1 + 2 = a² + 2a + 3. f(a − 1) = (a − 1)² + 2 = a² − 2a + 1 + 2 = a² − 2a + 3. Subtract: (a² + 2a + 3) − (a² − 2a + 3) = 4a. Both the a² terms and the constant terms cancel; only the linear cross-terms from the (a ± 1)² expansion survive.
**mistake_a:** Substituted a = 1 to get a specific number: f(2) − f(0) = 6 − 2 = 4, then bubbled B (4). Numerical substitution cannot distinguish variable expressions — plugging in a = 1 gives 4a = 4, which matches B, but so would the constant 4; you need a second test value to confirm dependence on a.
**mistake_b:** Dropped the variable from the cross-term: computed (2a + 1) − (−2a + 1) = 4 — treated the cross-term as the constant 1 rather than 2a.
**mistake_d:** Failed to cancel the constant terms: computed 4a + (3 − 3) but added the constants instead of subtracting, arriving at 4a + 4.
**mistake_e:** Multiplied instead of subtracting: treated f(a+1) − f(a−1) as f(a+1) × f(a−1), then collapsed to 2a².
**common_trap:** Plugging in a specific number (a = 0 or a = 1) instead of working symbolically — numerical substitution may give a consistent answer, but it can't distinguish between choices that differ only in their variable terms.
**takeaway:** When a function question uses a variable argument like f(a + k), expand algebraically. Constant terms in the formula often cancel when you subtract, leaving a clean expression in the variable.
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
**fastest_path:** Backsolve from C (s = $3): 4m + 3 = 17 → m = $3.50 (non-integer — signals wrong); go higher. D (s = $4): 4m + 4 = 17 → m = $3.25 (non-integer — skip). E (s = $5): 4m + 5 = 17 → m = $3; check: 2(3) + 3(5) = 21 ✓.
**explanation:** With clean integer answer choices and two checkable constraints (cost equations), backsolving from C and adjusting based on direction is faster than full elimination/substitution. Algebra path: from 4m + s = 17, s = 17 − 4m. Substitute: 2m + 3(17 − 4m) = 21 → −10m = −30 → m = 3, then s = 17 − 12 = 5. Same answer, ~30 sec longer.
**mistake_a:** Picked the smallest answer without testing.
**mistake_b:** Computed 4m + s = 17 with s = 2: m = $3.75 (non-integer; should reject as a "clean" trial signal).
**mistake_c:** Tested s = 3 and didn't iterate to higher values when arithmetic didn't match.
**mistake_d:** Algebra slip: −10m = 30 (sign error), got m = −3, then s = 29.
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
**mistake_a:** Made a systematic off-by-one error at the integer nearest each strict upper bound: counted {−3, −2, −1} = 3 from the lower range (stopping before 0, which is the integer just below the bound 1) and {6, 7, 8} = 3 from the upper range (stopping before 9, the integer just below the bound 10); total 3 + 3 = 6. This happens when a student is uncertain whether the integer adjacent to a strict bound is included and conservatively excludes it.
**mistake_b:** Made an off-by-one error in one of the two disjoint ranges — for example, started the lower range at −2 (missing −3), giving {−2,−1,0}=3 integers instead of 4; combined with the upper range of 4 integers: 3+4=7.
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
**mistake_b:** Computed b = +2 (forgot the sign on Vieta's: sum = −b/a, not +b/a).
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
**mistake_c:** Converted 8 as 8 = 2² (misremembering the cube root) instead of 2³: got 2^(2a+2) = 2^(2a), which yields no solution. After the dead end, fell back to testing answer choices and landed on 3.
**mistake_d:** Mis-expanded the left side as 4^(a+1) = 2^(a+2) (confused multiplying by 2 with adding 2 to the exponent): 2^(a+2) = 2^(3a) → a+2 = 3a → 2a = 2 → a = 1, then read "4" from the answer choices on a second pass.
**mistake_e:** Misread 4^(a+1) as 4^a + 1, leading to wrong setup.
**common_trap:** Exponent rules misapplied — power-of-power vs. product-of-powers.
**takeaway:** When two powers have different bases with a common base relationship (4 = 2², 8 = 2³, 9 = 3², etc.), rewrite with the common base. Equal bases → equal exponents.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q11
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions

For all positive integers n, let f(n) = n² - n. What is the value of f(f(3))?

- A) 6
- B) 12
- C) 30
- D) 36
- E) 42

**answer:** C
**fastest_path:** f(3) = 9 − 3 = 6. f(6) = 36 − 6 = 30.
**explanation:** Composition is applied from inside out. Compute the inner first: f(3) = 3² − 3 = 9 − 3 = 6. Then apply f to that result: f(6) = 6² − 6 = 36 − 6 = 30. Total time: 15 seconds. The whole question is mechanical once you read "f(f(3))" as "apply f twice."
**mistake_a:** Stopped at the inner computation: f(3) = 6 — bubbled the intermediate value without applying f a second time.
**mistake_b:** Computed f(3) × 2 = 12 (multiplied the inner result by 2 instead of composing).
**mistake_d:** Computed f(3) = 6 correctly, then took [f(3)]² = 6² = 36 — applied the outer function as "squaring the inner result" rather than evaluating f(6) = 6² − 6.
**mistake_e:** Computed f(3) = 6 correctly, then applied the formula with a sign error: 6² + 6 = 42 (used n² + n instead of n² − n).
**common_trap:** Stopping at the inner result and bubbling — composition requires both layers.
**takeaway:** f(f(x)) means apply f twice: compute f(x) first, then apply f to that result. The outer call is f evaluated at the inner result, not a squaring or multiplication.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q12
**difficulty:** Medium
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
**mistake_b:** Applied the identity correctly but misread xy as 4 (perhaps confusing it with an intermediate value): 20 + 2(4) = 28.
**mistake_c:** Applied the identity correctly but misread xy as 5 (off-by-one from the given value): 20 + 2(5) = 30.
**mistake_e:** Confused xy = 6 with x + y = 6 and directly wrote (x + y)² = 6² = 36, skipping the identity entirely.
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
**mistake_e:** Solved the system correctly (x = 4, y = 2) but computed x × y = 4 × 2 = 8 instead of x + y = 6.
**common_trap:** Solving past sufficiency or stopping too early — picking up x or y alone after correct setup.
**takeaway:** When y coefficients are equal-and-opposite, add to cancel y in one step. After computing both, re-read the question to confirm what's asked.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q16
**difficulty:** Medium
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
**mistake_b:** Divided Statement (2) by 2 to get 2x + 3y = 14 and concluded that this "simpler" form is a distinct, independent equation. Statement (2) is merely Statement (1) scaled by 2 — they carry identical information. One equation in two unknowns cannot determine a unique value of x regardless of how it is presented.
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
**mistake_b:** Concluded that f(3) = 13 alone determines f because "3a + b = 13 pins down the line." One equation in two unknowns a and b yields infinitely many solutions — e.g., a = 3, b = 4 gives f(x) = 3x + 4, and a = 4, b = 1 gives f(x) = 4x + 1; both satisfy f(3) = 13. A second linearly independent constraint is required.
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
**mistake_e:** Correctly found n = 12 but added 6 instead of 4 to compute the largest, reasoning that three integers each 2 apart span 3 × 2 = 6 from smallest to largest: 12 + 6 = 18. The actual span is only 4 (the sequence is n, n+2, n+4), so the largest is n + 4 = 16.
**common_trap:** Translation errors on "more than" — attaching the +18 to the wrong side, or treating consecutive integers as consecutive evens (or vice versa).
**takeaway:** "X is Y more than Z" means X = Z + Y. "Consecutive even integers" differ by 2; "consecutive integers" differ by 1.
**related_reading:** reading-quant-05-word-problems


---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Symmetric Sums

Let x, y, and z be positive real numbers with x + y + z = 12 and xy + yz + zx = 39. What is the value of x² + y² + z²?

- A) 48
- B) 66
- C) 72
- D) 78
- E) 105

**answer:** B
**fastest_path:** (x+y+z)² = x²+y²+z² + 2(xy+yz+zx) → 144 = sum_of_squares + 78 → sum_of_squares = 66.
**explanation:** Use the symmetric-sum identity (x + y + z)² = x² + y² + z² + 2(xy + yz + zx). Substitute: (12)² = (x² + y² + z²) + 2(39) → 144 = (x² + y² + z²) + 78 → x² + y² + z² = 66.
**mistake_a:** Assumed x = y = z = 4 (equal split from x+y+z=12), then computed 3(4²) = 48. The equal-split assumption is wrong — note that x=y=z=4 gives xy+yz+zx=3(16)=48, not 39, so those values are inconsistent with the given constraints.
**mistake_c:** Correctly set up the identity but made an arithmetic slip computing 2×39=72 instead of 78: 144−72=72.
**mistake_d:** Conflated x²+y²+z² with 2(xy+yz+zx) directly, reading the identity as an equality rather than using it to isolate the sum of squares: concluded x²+y²+z²=2(39)=78.
**mistake_e:** Forgot the factor of 2 when applying the identity: wrote x²+y²+z²=(x+y+z)²−(xy+yz+zx)=144−39=105. The correct subtraction is 2(xy+yz+zx)=78, not 39.
**common_trap:** Factor-of-2 error — subtracting xy+yz+zx once instead of twice, or forgetting the coefficient entirely.
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
**fastest_path:** a₁₀₀ = a₁ + (2 + 3 + ⋯ + 100) = 3 + (5050 − 1) = 3 + 5049 = 5052.
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
**mistake_a:** Assumed the hikers meet at the midpoint, then computed time for Hiker X to reach 12 miles: 12/3 = 4 hours; 8:00 + 4 = 12:00 — but then halved it on the theory that "two hikers means half the time": 8:00 + 2 = 10:00. The halving logic is wrong; both hikers are moving for the full meeting time T.
**mistake_b:** Assumed the hikers meet at the midpoint and used Hiker Y's speed: 12/5 = 2.4 hours ≈ 2 hours 24 minutes → 10:24 AM ≈ 10:30 AM. The midpoint assumption is wrong — the actual meeting point is determined by their speeds (X covers 9 miles, Y covers 15 miles), not the midpoint of the trail.
**mistake_d:** Set up 3T + 5T = 24 correctly but made an arithmetic error on the division: 24/8 = 3.5 instead of 3; 8:00 + 3:30 = 11:30 AM.
**mistake_e:** Used only Hiker X's speed for the full trail: 24/3 = 8 hours → 8:00 + 4 = 12:00 noon (or found the midpoint for X alone: 12/3 = 4 hours → 12:00 noon). This ignores that Hiker Y is simultaneously closing the gap.
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
**mistake_a:** Combined the LHS numerator incorrectly: wrote (x+3) + (x+3) = 2(x+3) instead of (x+3) + (x−3) = 2x, obtaining 2(x+3)/(x²−9) = 12/(x²−9) → 2(x+3) = 12 → x = 3. Note that x = 3 also makes 1/(x−3) undefined, so it fails the domain check as a further red flag.
**mistake_b:** Did not simplify algebraically and instead tested answer choices; at x = 4 computed LHS = 1/1 + 1/7 ≈ 1.14 and RHS = 12/7 ≈ 1.71, then misread the values as close enough and stopped before reaching x = 6.
**mistake_c:** Combined numerators with a subtraction instead of addition: wrote (x+3) − (x−3) = 6 instead of 2x, giving 6/(x²−9) = 12/(x²−9) → 6 = 12, a contradiction. After the dead end, guessed C = 5 as the midpoint between the nearest answer choices.
**mistake_e:** Combined the LHS correctly to 2x/(x²−9) = 12/(x²−9) but then dropped the coefficient of 2 when equating numerators, reading the equation as x = 12 instead of 2x = 12 → x = 6.
**common_trap:** Domain violations on rational equations — accepting an extraneous solution that makes a denominator zero.
**takeaway:** When solving rational equations, find the common denominator, simplify, then verify the answer doesn't violate the domain (no denominator = 0).
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q27
**difficulty:** Medium
**type:** Problem Solving
**topic:** Function Composition

If g(x) = 3x − 2 and f(g(x)) = 6x − 1 for all x, what is f(4)?

- A) 7
- B) 10
- C) 11
- D) 13
- E) 23

**answer:** C
**hint_nudge:** You cannot plug 4 directly into f(g(x)) — first figure out which x makes g(x) = 4.
**hint_strategy:** Set g(x) = 4 and solve for x; then substitute that x into the composite formula f(g(x)) = 6x − 1.
**hint_setup:** 3x − 2 = 4 → x = 2. Now f(4) = f(g(2)) = ?
**fastest_path:** g(x) = 4 → 3x − 2 = 4 → x = 2. f(4) = f(g(2)) = 6(2) − 1 = 11.
**explanation:** We need f(4), but f is only defined implicitly through the composition f(g(x)) = 6x − 1. The key step is inverting g: find x such that g(x) = 4, i.e., 3x − 2 = 4 → x = 2. Then f(4) = f(g(2)) = 6(2) − 1 = 11. The composition formula gives us f at g(x), so to evaluate f at a specific value we must first find the x that maps through g to that value.
**mistake_a:** Ignored the −2 offset when inverting g — set 3x = 4 instead of 3x − 2 = 4, getting x = 4/3; then f(4) = 6(4/3) − 1 = 8 − 1 = 7.
**mistake_b:** Computed g(4) = 3(4) − 2 = 10 and bubbled that value — evaluated g at 4 instead of finding f at 4.
**mistake_d:** Found x = 2 correctly but used the wrong sign on the constant: f(4) = 6(2) + 1 = 13 (flipped −1 to +1).
**mistake_e:** Plugged x = 4 directly into the composite formula: f(g(4)) = 6(4) − 1 = 23. This computes f at g(4) = 10, not f at 4.
**common_trap:** Substituting the target value directly into f(g(x)) — that evaluates f at g(target), not f at target.
**takeaway:** When f is given only as part of a composition f(g(x)), evaluate f at a specific value a by solving g(x) = a for x, then substituting that x into the composite formula. You are inverting g, not evaluating at the target directly.
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
**topic:** Linear Systems — Parametric Consistency

The system of equations 3x + ky = 12 and 6x + 10y = 24 has infinitely many solutions. What is the value of k?

- A) 2
- B) 4
- C) 5
- D) 6
- E) 10

**answer:** C
**hint_nudge:** Infinitely many solutions means both equations describe the same line. What relationship between their coefficients makes that true?
**hint_strategy:** Reduce equation 2 to lowest terms first, then match it coefficient by coefficient against equation 1.
**hint_setup:** Divide 6x + 10y = 24 by 2: 3x + 5y = 12. Now compare with 3x + ky = 12.
**fastest_path:** Divide equation 2 by 2: 3x + 5y = 12. Match against equation 1: k = 5.
**explanation:** Two linear equations have infinitely many solutions when they represent the same line — i.e., one equation is a scalar multiple of the other. Divide equation 2 by 2: 3x + 5y = 12. This is now identical to equation 1 with k = 5. The x-coefficients match (3 = 3) and so do the constants (12 = 12); the y-coefficient pins k = 5. Three cases for a 2×2 linear system: if the equations are proportional (same line), infinitely many solutions; if they are parallel but distinct (same direction, different constant), no solution; otherwise, a unique solution.
**mistake_a:** Identified the common factor of {6, 10, 24} as 2 and wrote k = 2 — stopped at the scale factor rather than using it to reduce equation 2 and then read off the y-coefficient.
**mistake_b:** Correctly divided 10 by 2 but made an arithmetic slip: wrote 10 ÷ 2 = 4 instead of 5.
**mistake_d:** Read k directly from equation 2 as the x-coefficient 6, without first dividing equation 2 by its scale factor.
**mistake_e:** Read k directly from equation 2 as the y-coefficient 10, without first dividing equation 2 by its scale factor.
**common_trap:** Reading coefficients from the unreduced equation — equation 2 must be scaled down by 2 before its coefficients can be matched against equation 1.
**takeaway:** For infinitely many solutions, reduce each equation to simplest form, then verify that all three ratios (coefficient of x, coefficient of y, constant) are equal. "Infinitely many" → same line → equations are proportional.
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

---

## Q34
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Quadratic Discriminant

n is an integer. Does the equation x² − (n + 1)x + n = 0 have two distinct real roots?

(1) n > 1
(2) n is odd

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** Discriminant = (n+1)² − 4n = n²−2n+1 = (n−1)². Two distinct roots ↔ (n−1)² > 0 ↔ n ≠ 1. (1): n > 1 → n ≠ 1 → always YES. Sufficient. (2): n = 1 is odd (answer NO) and n = 3 is odd (answer YES). Insufficient.
**explanation:** Compute the discriminant: Δ = (n+1)² − 4(1)(n) = n² + 2n + 1 − 4n = n² − 2n + 1 = (n−1)². The equation has two distinct real roots if and only if Δ > 0, i.e., (n−1)² > 0, i.e., n ≠ 1. When n = 1 the equation becomes x² − 2x + 1 = (x−1)² = 0, which has exactly one repeated root.

Statement (1): n > 1 guarantees n ≠ 1, so (n−1)² > 0 and the answer is always YES. Sufficient.

Statement (2): n is odd. Test n = 1 (odd): Δ = 0 — one repeated root, answer is NO. Test n = 3 (odd): Δ = 4 — two distinct roots, answer is YES. The answer depends on which odd integer n is. Insufficient.

The key insight is factoring the discriminant. Students who expand (n+1)² − 4n but do not re-factor it cannot easily determine when it is positive and tend to pick C or E.
**mistake_b:** Concluded (2) alone is sufficient because "all odd integers share some property" — missed that n = 1 is odd and produces a repeated root.
**mistake_c:** Tested both statements together: n > 1 and n odd. Combined, this eliminates n = 1, but (1) alone already did so; the error is not recognizing (1) is sufficient on its own.
**mistake_d:** Concluded each statement alone is sufficient; did not test n = 1 against statement (2) and assumed "odd" must imply some number-theoretic guarantee.
**mistake_e:** Could not simplify the discriminant expression; concluded that without a specific numerical value of n neither statement can determine the sign of Δ.
**common_trap:** Failing to factor the discriminant — expanding (n+1)² − 4n but not recognizing it equals (n−1)², leaving an unfactorable-looking quadratic in n that obscures the simple condition n ≠ 1.
**takeaway:** When a quadratic has a parametric coefficient, fully simplify the discriminant; it often factors cleanly and reveals the exact constraint on the parameter. Two distinct real roots ↔ Δ > 0.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q35
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations
**skill:** Solve for a requested expression rather than the variable

If 5(y − 2) = 35, what is the value of y + 3?

- A) 7
- B) 9
- C) 10
- D) 12
- E) 14

**answer:** D
**fastest_path:** 5(y − 2) = 35 → y − 2 = 7. Then y + 3 = (y − 2) + 5 = 7 + 5 = 12 — no need to isolate y.
**explanation:** Divide both sides by 5: y − 2 = 7, so y = 9 and y + 3 = 12. The faster route never solves for y: since y + 3 = (y − 2) + 5 and y − 2 = 7, you get 7 + 5 = 12 directly. Whenever the answer is an expression rather than the variable, look for a one-step bridge from an intermediate result.
**mistake_a:** Stopped at the intermediate value y − 2 = 7 and bubbled 7.
**mistake_b:** Solved for the variable (y = 9) and answered that instead of y + 3.
**mistake_c:** Divided 35 / 5 = 7 and treated that as y, then added 3 → 10, forgetting to add back the 2.
**mistake_e:** Found y = 9 but misread the expression as y + 5, giving 14.
**common_trap:** Answering the variable (y = 9) instead of the requested expression y + 3. Error-log tag: Setup error (Q_SETUP).
**trap_type:** answered-wrong-quantity
**takeaway:** Read exactly what the question asks for. When it wants an expression like y + 3, check whether you can build it from an intermediate result instead of fully solving for the variable.
**est_time_seconds:** 50
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponents
**skill:** Add to an exponent by multiplying the base value

If 2ˣ = 8, what is the value of 2⁽ˣ⁺²⁾?

- A) 10
- B) 12
- C) 16
- D) 32
- E) 64

**answer:** D
**fastest_path:** 2⁽ˣ⁺²⁾ = 2ˣ · 2² = 8 · 4 = 32 — no need to find x.
**explanation:** Adding 2 to an exponent multiplies the value by 2² = 4. Since 2ˣ = 8, we get 2⁽ˣ⁺²⁾ = 8 × 4 = 32. (Solving x = 3 first and computing 2⁵ = 32 reaches the same place one step slower.)
**mistake_a:** Added the exponent to the value: 8 + 2 = 10.
**mistake_b:** Added 2² to the value instead of multiplying: 8 + 4 = 12.
**mistake_c:** Multiplied by only one factor of 2: 8 × 2 = 16.
**mistake_e:** Squared the value instead of multiplying by 2²: 8² = 64.
**common_trap:** Treating "+2 in the exponent" as an addition to the value rather than a multiplication by 2². Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** exponent-add-vs-multiply
**takeaway:** aᵐ⁺ⁿ = aᵐ · aⁿ. Adding to an exponent multiplies the base value; it never adds to it.
**est_time_seconds:** 50
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Inequalities
**skill:** Flip the inequality when dividing by a negative

If 4 − 2x < 10, which of the following must be true?

- A) x > −3
- B) x < −3
- C) x > 3
- D) x < 3
- E) x > −5

**answer:** A
**fastest_path:** 4 − 2x < 10 → −2x < 6 → divide by −2 and flip: x > −3.
**explanation:** Subtract 4 from both sides: −2x < 6. Divide by −2 and reverse the inequality (dividing by a negative flips direction): x > −3. Sanity check with x = 0: 4 − 0 = 4 < 10 ✓; with x = −10: 4 + 20 = 24, which is not < 10, confirming x must be greater than −3.
**mistake_b:** Solved correctly but forgot to flip the inequality, landing on x < −3.
**mistake_c:** Dropped the negative sign on the bound, giving x > 3.
**mistake_d:** Made both errors at once: x < 3.
**mistake_e:** Ignored the constant 4 (treated −2x < 10), giving x > −5.
**common_trap:** Failing to reverse the inequality when dividing both sides by a negative number. Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** inequality-sign-flip-miss
**takeaway:** Multiplying or dividing an inequality by a negative flips its direction. Plug in a test value to confirm which way the sign points.
**est_time_seconds:** 55
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Systems of Equations
**skill:** Solve a sum-and-difference system by adding the equations

If x + y = 10 and x − y = 4, what is the value of xy?

- A) 18
- B) 21
- C) 24
- D) 28
- E) 40

**answer:** B
**fastest_path:** Add the equations: 2x = 14 → x = 7, so y = 3. xy = 21.
**explanation:** Adding the two equations eliminates y: (x + y) + (x − y) = 2x = 14, so x = 7, and y = 10 − 7 = 3. Then xy = 7 × 3 = 21.
**mistake_a:** Arithmetic slip 2x = 12 → x = 6, giving 6 × 3 = 18.
**mistake_c:** Arithmetic slip 2x = 16 → x = 8, giving 8 × 3 = 24.
**mistake_d:** Multiplied x by the difference 4 instead of by y: 7 × 4 = 28.
**mistake_e:** Multiplied the two given right-hand sides as if that produced xy: 10 × 4 = 40.
**common_trap:** Multiplying the equation constants (10 × 4 = 40) instead of the solved values. Error-log tag: Setup error (Q_SETUP).
**trap_type:** product-of-givens-trap
**takeaway:** Recover individual values from a sum and a difference by adding and subtracting the equations. xy is the product of the solved values, never of the equation constants.
**est_time_seconds:** 60
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Algebra Translation
**skill:** Reverse a percent increase by dividing

A number increased by 40% equals 70. What is the number?

- A) 28
- B) 30
- C) 42
- D) 50
- E) 98

**answer:** D
**fastest_path:** "Increased by 40%" means 1.4n = 70 → n = 70 / 1.4 = 50.
**explanation:** A number increased by 40% is 1.4 times itself, so 1.4n = 70 and n = 70 / 1.4 = 50. Check: 50 increased by 40% is 50 + 20 = 70 ✓. The 70 is the result, so you divide to recover the original.
**mistake_a:** Took 40% of 70: 70 × 0.4 = 28.
**mistake_b:** Subtracted 40 from 70: 30.
**mistake_c:** Decreased 70 by 40%: 70 × 0.6 = 42.
**mistake_e:** Increased 70 by 40% instead of reversing the operation: 70 × 1.4 = 98.
**common_trap:** Operating on 70 (the result) instead of recognizing it as 1.4 times the unknown. Error-log tag: Setup error (Q_SETUP).
**trap_type:** reverse-percent-direction
**takeaway:** "x increased by 40% = 70" translates to 1.4x = 70, so divide. To undo a percent increase, divide by (1 + rate); do not multiply.
**est_time_seconds:** 55
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratic Equations
**skill:** Identify consecutive integers from a product

The product of two consecutive positive integers is 156. What is their sum?

- A) 23
- B) 24
- C) 25
- D) 26
- E) 156

**answer:** C
**hint_nudge:** Estimate the square root of 156 to locate the two consecutive integers.
**hint_strategy:** √156 ≈ 12.5, so the integers straddle 12.5 — test 12 × 13.
**hint_setup:** 12 × 13 = 156, so the integers are 12 and 13; the question asks for their sum.
**fastest_path:** √156 ≈ 12.5 → the integers are 12 and 13. Sum = 25.
**explanation:** Two consecutive integers near √156: since 12 × 13 = 156, they are 12 and 13, summing to 25. Algebraically, n(n + 1) = 156 → n² + n − 156 = 0 → (n − 12)(n + 13) = 0 → n = 12 (taking the positive root). Sum = 12 + 13 = 25.
**mistake_a:** Guessed the pair too low (11 and 12), giving 23.
**mistake_b:** Found 12 but doubled it (12 + 12 = 24), using the same integer twice.
**mistake_d:** Took 13 twice or computed 12 + 14, giving 26.
**mistake_e:** Re-bubbled the product 156 instead of the sum.
**common_trap:** Off-by-one on consecutive integers, or stopping at one of the two values. Error-log tag: Calc slip (CALC_SLIP).
**trap_type:** consecutive-integer-off-by-one
**takeaway:** For "product of consecutive integers," estimate the square root to find the pair instantly, then re-read whether the question wants one value, the sum, or the product.
**est_time_seconds:** 95
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponents
**skill:** Factor out a common power before combining

If 3¹⁰ + 3¹⁰ + 3¹⁰ = 3ˣ, what is the value of x?

- A) 10
- B) 11
- C) 13
- D) 30
- E) 33

**answer:** B
**hint_nudge:** The three terms are identical — adding them is the same as multiplying one of them by 3.
**hint_strategy:** 3¹⁰ + 3¹⁰ + 3¹⁰ = 3 × 3¹⁰, and 3 = 3¹.
**hint_setup:** 3 × 3¹⁰ = 3¹ × 3¹⁰ = 3¹⁺¹⁰.
**fastest_path:** Factor: 3¹⁰ + 3¹⁰ + 3¹⁰ = 3 × 3¹⁰ = 3¹ × 3¹⁰ = 3¹¹. So x = 11.
**explanation:** The three identical terms sum to 3 × 3¹⁰. Since 3 = 3¹, multiply same-base powers by adding exponents: 3¹ × 3¹⁰ = 3¹¹, so x = 11. You cannot add the exponents of the original terms — adding values is not the same as multiplying them.
**mistake_a:** Assumed that adding equal powers leaves the exponent unchanged, giving 10.
**mistake_c:** Added the count (3) to the exponent (10 + 3) instead of recognizing 3 = 3¹, giving 13.
**mistake_d:** Multiplied the base 3 by the exponent 10, giving 30.
**mistake_e:** Multiplied the correct result 11 by the number of terms (3 × 11), giving 33.
**common_trap:** Adding the term count to the exponent, or leaving the exponent unchanged. The number of equal terms becomes a factor, raising the exponent by exactly 1 here. Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** factor-out-like-powers
**takeaway:** Equal powers add as aᵏ + aᵏ + … (n times) = n × aᵏ. When n is itself a power of a, fold it in by adding exponents.
**est_time_seconds:** 75
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions
**skill:** Back out inputs from outputs, then combine as asked

The function f is defined by f(x) = 2x − 3 for all x. If f(a) = 7 and f(b) = −5, what is the value of a − b?

- A) 4
- B) 5
- C) 6
- D) 9
- E) 12

**answer:** C
**hint_nudge:** Solve 2a − 3 = 7 and 2b − 3 = −5 separately for a and b.
**hint_strategy:** Find a from the first equation, b from the second, then subtract.
**hint_setup:** a = 5 and b = −1; the question asks for a − b, not f(a) − f(b).
**fastest_path:** 2a − 3 = 7 → a = 5. 2b − 3 = −5 → b = −1. a − b = 5 − (−1) = 6.
**explanation:** f(a) = 7 means 2a − 3 = 7, so a = 5. f(b) = −5 means 2b − 3 = −5, so 2b = −2 and b = −1. Then a − b = 5 − (−1) = 6. The double negative is the heart of the question: subtracting −1 adds 1.
**mistake_a:** Dropped the negative when dividing −2 / 2, getting b = 1, so 5 − 1 = 4.
**mistake_b:** Bubbled a alone (5) without subtracting b.
**mistake_d:** Sign slip on b's equation (2b = −8 → b = −4), giving 5 − (−4) = 9.
**mistake_e:** Computed f(a) − f(b) = 7 − (−5) = 12 — the difference of the outputs instead of the inputs.
**common_trap:** Taking the difference of the function values instead of the inputs, or mishandling the double negative. Error-log tag: Setup error (Q_SETUP).
**trap_type:** answered-wrong-quantity
**takeaway:** Given f(a) and f(b), recover a and b individually, then combine them exactly as asked. Watch the sign when subtracting a negative input.
**est_time_seconds:** 95
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities
**skill:** Solve a compound inequality and count integers inclusively

If −2 ≤ 3 − x ≤ 5, how many integer values of x satisfy the inequality?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**hint_nudge:** Split into two inequalities and solve each for x, minding the sign flip.
**hint_strategy:** 3 − x ≥ −2 gives x ≤ 5; 3 − x ≤ 5 gives x ≥ −2. Then count integers inclusively.
**hint_setup:** The range is −2 ≤ x ≤ 5. Count the integers from −2 to 5 inclusive.
**fastest_path:** Solve each side: x ≤ 5 and x ≥ −2, so −2 ≤ x ≤ 5. Integer count = 5 − (−2) + 1 = 8.
**explanation:** From 3 − x ≥ −2: −x ≥ −5, so x ≤ 5 (flip when multiplying by −1). From 3 − x ≤ 5: −x ≤ 2, so x ≥ −2. Combined: −2 ≤ x ≤ 5. Both endpoints are included, so the integers are −2, −1, 0, 1, 2, 3, 4, 5 — that is 8 values, since 5 − (−2) + 1 = 8.
**mistake_a:** Treated the bounds as strict (excluded both endpoints), counting only −1 through 4 → 6.
**mistake_b:** Computed 5 − (−2) = 7 but forgot to add 1 for inclusive counting.
**mistake_d:** Added 1 twice or double-counted an endpoint, giving 9.
**mistake_e:** Miscounted the span of the range, giving 10.
**common_trap:** Forgetting the "+1" when counting inclusive integers, or treating "≤" bounds as strict. Error-log tag: Calc slip (CALC_SLIP).
**trap_type:** inclusive-endpoint-count
**takeaway:** The count of integers from m to n inclusive is n − m + 1. Track whether each bound is "≤" (included) or "<" (excluded).
**est_time_seconds:** 100
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations
**skill:** Scale and eliminate, then answer the requested item

At a concession stand, 3 hot dogs and 2 sodas cost $13, while 2 hot dogs and 4 sodas cost $14. What is the price of one hot dog?

- A) $2.00
- B) $2.50
- C) $3.00
- D) $3.50
- E) $4.00

**answer:** C
**hint_nudge:** Set up an equation from each purchase, then eliminate the sodas.
**hint_strategy:** 3h + 2s = 13 and 2h + 4s = 14; halve the second to h + 2s = 7, then subtract.
**hint_setup:** (3h + 2s) − (h + 2s) = 13 − 7 → 2h = 6.
**fastest_path:** Halve equation 2: h + 2s = 7. Subtract from equation 1 (3h + 2s = 13): 2h = 6 → h = 3.
**explanation:** Let h and s be the prices. Then 3h + 2s = 13 and 2h + 4s = 14. Divide the second by 2: h + 2s = 7. Subtract it from the first: (3h + 2s) − (h + 2s) = 13 − 7 → 2h = 6 → h = 3 (and s = 2). Check: 3(3) + 2(2) = 13 ✓ and 2(3) + 4(2) = 14 ✓.
**mistake_a:** Solved for the soda price ($2) and answered the wrong item.
**mistake_b:** Arithmetic slip in the elimination, giving $2.50.
**mistake_d:** Used only the second equation (14 / 4 = 3.5) instead of solving the system.
**mistake_e:** Sign error in elimination giving h = 4.
**common_trap:** Solving for the soda price and answering it, or dividing one total by its quantity. Error-log tag: Setup error (Q_SETUP).
**trap_type:** answered-wrong-variable
**takeaway:** In a two-item system, scale one equation so a variable cancels cleanly, then re-read which item the question wanted before bubbling.
**est_time_seconds:** 105
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences
**skill:** Apply the arithmetic-sequence nth-term formula

In a sequence, each term after the first is 4 more than the previous term. If the first term is 7, what is the 20th term?

- A) 76
- B) 80
- C) 83
- D) 87
- E) 91

**answer:** C
**hint_nudge:** From term 1 to term 20 there are 19 steps, not 20.
**hint_strategy:** nth term = a₁ + (n − 1)d = 7 + (20 − 1) × 4.
**hint_setup:** 7 + 19 × 4 = 7 + 76.
**fastest_path:** a₂₀ = 7 + (20 − 1) × 4 = 7 + 76 = 83.
**explanation:** An arithmetic sequence's nth term is a₁ + (n − 1)d. With a₁ = 7, d = 4, n = 20: 7 + 19 × 4 = 7 + 76 = 83. The crux is that there are 19 steps between term 1 and term 20, not 20.
**mistake_a:** Computed 19 × 4 = 76 but forgot to add the first term.
**mistake_b:** Computed 4 × 20 = 80, ignoring both the offset and the first term.
**mistake_d:** Used n instead of n − 1: 7 + 20 × 4 = 87, counting 20 gaps.
**mistake_e:** Used 21 gaps: 7 + 21 × 4 = 91.
**common_trap:** Using n instead of (n − 1) — counting 20 steps and landing on 87. Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** arithmetic-sequence-off-by-one
**takeaway:** nth term = first term + (n − 1) × common difference. There is always one fewer step than the term number.
**est_time_seconds:** 90
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Symmetric Sums
**skill:** Square x + 1/x to reach x² + 1/x²

If x + 1/x = 5, what is the value of x² + 1/x²?

- A) 10
- B) 21
- C) 23
- D) 25
- E) 27

**answer:** C
**hint_nudge:** Don't solve for x — square the given expression.
**hint_strategy:** (x + 1/x)² = x² + 2 + 1/x².
**hint_setup:** 5² = x² + 1/x² + 2, so x² + 1/x² = 25 − 2.
**fastest_path:** (x + 1/x)² = x² + 1/x² + 2 = 25, so x² + 1/x² = 23.
**explanation:** Square the given: (x + 1/x)² = x² + 2·x·(1/x) + 1/x² = x² + 2 + 1/x². Since x + 1/x = 5, the square is 25, so x² + 1/x² = 25 − 2 = 23. The cross term is exactly 2 because x·(1/x) = 1.
**mistake_a:** Doubled the given (2 × 5) instead of squaring it, giving 10.
**mistake_b:** Subtracted 4 instead of 2 (25 − 4), giving 21.
**mistake_d:** Forgot the cross term entirely, leaving 5² = 25.
**mistake_e:** Added 2 instead of subtracting (25 + 2), giving 27.
**common_trap:** Forgetting the +2 cross term (answering 25) or subtracting the wrong constant. Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** square-of-sum-cross-term
**takeaway:** (x + 1/x)² = x² + 1/x² + 2. The middle term is always 2 because x times its reciprocal is 1 — subtract it to isolate the squares.
**est_time_seconds:** 100
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Constraints — Optimization
**skill:** Enumerate lattice points under a positive-integer constraint

If x and y are positive integers and 3x + 5y = 47, what is the greatest possible value of xy?

- A) 28
- B) 35
- C) 36
- D) 40
- E) 42

**answer:** C
**hint_nudge:** x and y must be positive integers — only some values of x make y a whole number.
**hint_strategy:** 5y = 47 − 3x must be positive and divisible by 5; test x = 4, 9, 14.
**hint_setup:** The valid pairs are (4, 7), (9, 4), (14, 1). Compare their products.
**fastest_path:** 5y = 47 − 3x must be a positive multiple of 5. x = 4 → y = 7 (xy = 28); x = 9 → y = 4 (xy = 36); x = 14 → y = 1 (xy = 14). Max = 36.
**explanation:** Because 47 − 3x must be divisible by 5 and positive, x ≡ 4 (mod 5): x = 4, 9, 14. The pairs are (4, 7), (9, 4), (14, 1) with products 28, 36, 14. The greatest is xy = 36 at (9, 4). The continuous "balanced" optimum (where 3x ≈ 5y) hints at a large product, but integrality forces you to check the actual lattice points.
**mistake_a:** Stopped at the first valid pair (4, 7), giving 28.
**mistake_b:** Bubbled the intermediate value 5y at x = 4 (which is 35).
**mistake_d:** Treated x and y as continuous, maximized near the balanced point, and rounded to 40.
**mistake_e:** Bubbled the intermediate value 3x at x = 14 (which is 42).
**common_trap:** Stopping at the first valid pair, or optimizing as if x and y were continuous. Error-log tag: Condition miss (R2 / Q_SETUP).
**trap_type:** integer-constraint-optimization
**takeaway:** When a linear equation carries a positive-integer constraint, use divisibility to list the finite set of valid pairs — don't assume the continuous optimum is reachable.
**est_time_seconds:** 150
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions — Functional Equation
**skill:** Build a solvable system from a paired substitution

The function f satisfies f(x) + 2f(1 − x) = x for every real number x. What is the value of f(2)?

- A) −4/3
- B) −2/3
- C) 0
- D) 2/3
- E) 4/3

**answer:** A
**hint_nudge:** One substitution isn't enough — f(2) is tied to f(−1). Make a second equation.
**hint_strategy:** Substitute x = 2 and x = −1 (since 1 − (−1) = 2) to get two equations in f(2) and f(−1).
**hint_setup:** f(2) + 2f(−1) = 2 and f(−1) + 2f(2) = −1. Solve the system for f(2).
**fastest_path:** Sub x = 2: f(2) + 2f(−1) = 2. Sub x = −1: f(−1) + 2f(2) = −1. Solving gives f(2) = −4/3.
**explanation:** The relation links f(x) and f(1 − x). Substituting x = 2 gives f(2) + 2f(−1) = 2; substituting x = −1 gives f(−1) + 2f(2) = −1 (because 1 − (−1) = 2). Let a = f(2) and b = f(−1): a + 2b = 2 and 2a + b = −1. From the second, b = −1 − 2a; substitute: a + 2(−1 − 2a) = 2 → −3a − 2 = 2 → a = −4/3. The self-pairing transform x ↔ 1 − x is the entire trick.
**mistake_b:** Arithmetic slip while solving the system, giving −2/3.
**mistake_c:** Assumed f is the identity (which fails) or guessed 0.
**mistake_d:** Solved for the magnitude or made a sign error, giving 2/3.
**mistake_e:** Dropped the negative sign at the end, giving 4/3.
**common_trap:** Trying to read f(2) from a single substitution, or losing the sign in the system. Error-log tag: Wrong strategy choice (S1 / Q_SETUP).
**trap_type:** paired-substitution-functional-equation
**takeaway:** When f is defined implicitly through f(x) and a transform of x, substitute both x and its transform to get a solvable system. Here x → 1 − x pairs with itself.
**est_time_seconds:** 165
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inequalities — Must Be True
**skill:** Disprove "must be true" claims with signed counterexamples

If a and b are nonzero numbers with a < b, which of the following must be true?

I. a² < b²
II. 1/a > 1/b
III. a³ < b³

- A) III only
- B) I and III
- C) II and III
- D) I, II, and III
- E) None

**answer:** A
**hint_nudge:** "Must be true" fails if even one counterexample exists — try negatives.
**hint_strategy:** Test a = −3, b = 1 on I and II; recall that cubing preserves order for all reals.
**hint_setup:** I fails (9 < 1 is false). II fails at a = −1, b = 2 (−1 > 0.5 is false). III always holds.
**fastest_path:** Test a = −3, b = 1: I gives 9 < 1 (false); II gives −1/3 > 1 (false). III: cubing is increasing for all reals, so a³ < b³ always. Only III.
**explanation:** Here a < b with both nonzero. (I) a² < b²? Take a = −3, b = 1: a² = 9, b² = 1, and 9 < 1 is false — squaring flips the order when the smaller number is more negative. (II) 1/a > 1/b? Take a = −1, b = 2: 1/a = −1, 1/b = 0.5, and −1 > 0.5 is false — reciprocals reverse order only when a and b share a sign. (III) a³ < b³? Cubing is strictly increasing over all reals, so a < b forces a³ < b³ — always true. Only III must be true.
**mistake_b:** Assumed squaring preserves order, forgetting a negative of larger magnitude.
**mistake_c:** Assumed reciprocals always flip the inequality — true only when a and b have the same sign.
**mistake_d:** Treated every power and reciprocal as order-preserving.
**mistake_e:** Over-corrected and rejected III, the one statement that does hold.
**common_trap:** Assuming squaring or reciprocating preserves or uniformly reverses order without checking signs. Error-log tag: Condition miss (R2).
**trap_type:** must-be-true-counterexample
**takeaway:** For "must be true" inequalities, hunt for a counterexample using negatives and reciprocals. Odd powers (cubes) preserve order everywhere; even powers and reciprocals do not.
**est_time_seconds:** 150
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics — Vieta's Formulas
**skill:** Count k-values via unordered integer factor pairs

The quadratic x² − kx + 24 = 0 has two distinct positive integer roots. How many distinct values of k are possible?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 8

**answer:** B
**hint_nudge:** By Vieta's formulas, the roots multiply to 24 and add to k.
**hint_strategy:** List the positive integer factor pairs of 24; each gives k = the sum. Count distinct sums.
**hint_setup:** Pairs (1, 24), (2, 12), (3, 8), (4, 6) give k = 25, 14, 11, 10.
**fastest_path:** Roots multiply to 24 and add to k. Factor pairs: (1, 24), (2, 12), (3, 8), (4, 6) → k = 25, 14, 11, 10. Four values.
**explanation:** For x² − kx + 24 = 0, Vieta's formulas give (root₁)(root₂) = 24 and (root₁) + (root₂) = k. The positive-integer factor pairs of 24 are (1, 24), (2, 12), (3, 8), (4, 6) — four unordered pairs. Since 24 is not a perfect square, no pair has equal roots, so "distinct" rules nothing out. Each pair gives a different k (25, 14, 11, 10), so 4 values of k are possible.
**mistake_a:** Missed a factor pair (commonly (1, 24)), counting only 3.
**mistake_c:** Counted a pair with a repeated root or a non-integer factor, reaching 5.
**mistake_d:** Counted ordered pairs partially or added a stray pair, reaching 6.
**mistake_e:** Counted all 8 divisors of 24 instead of the 4 unordered pairs.
**common_trap:** Counting all 8 divisors of 24 rather than the 4 unordered factor pairs. Error-log tag: Setup error (Q_SETUP).
**trap_type:** unordered-factor-pair-count
**takeaway:** A monic quadratic with integer roots multiplying to N has one k per unordered factor pair of N. Check whether N is a perfect square, which would add an equal-roots pair that "distinct" may exclude.
**est_time_seconds:** 140
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q51
**difficulty:** Challenge
**type:** Problem Solving
**topic:** Symmetric Sums — Nested Power Identity
**skill:** Climb power sums by repeated squaring

If x is a positive real number and x + 1/x = 3, what is the value of x⁴ + 1/x⁴?

- A) 43
- B) 45
- C) 47
- D) 49
- E) 81

**answer:** C
**hint_nudge:** Build up in stages: first find x² + 1/x², then use it to find x⁴ + 1/x⁴.
**hint_strategy:** (x + 1/x)² = x² + 1/x² + 2 and (x² + 1/x²)² = x⁴ + 1/x⁴ + 2.
**hint_setup:** x² + 1/x² = 3² − 2 = 7. Then x⁴ + 1/x⁴ = 7² − 2.
**fastest_path:** x² + 1/x² = 3² − 2 = 7. Then x⁴ + 1/x⁴ = 7² − 2 = 47.
**explanation:** Square once: (x + 1/x)² = x² + 1/x² + 2 = 9, so x² + 1/x² = 7. Square again: (x² + 1/x²)² = x⁴ + 1/x⁴ + 2 = 49, so x⁴ + 1/x⁴ = 47. Each squaring introduces a +2 cross term (because x·(1/x) = 1), which you subtract back out. Skipping either subtraction, or jumping straight to 3⁴, is the trap.
**mistake_a:** Over-subtracted at the final step (for example 49 − 6), giving 43.
**mistake_b:** Subtracted 4 instead of 2 at the final step (49 − 4), giving 45.
**mistake_d:** Stopped at (x² + 1/x²)² and forgot the final − 2, leaving 49.
**mistake_e:** Computed (x + 1/x)⁴ = 3⁴ = 81, ignoring the cross terms entirely.
**common_trap:** Forgetting one of the two "− 2" corrections, or raising 3 to the 4th power directly. Error-log tag: Concept gap (Q_CONCEPT).
**trap_type:** nested-power-sum-identity
**takeaway:** To climb from x + 1/x to higher powers, square step by step and subtract 2 each time: x² + 1/x² = (x + 1/x)² − 2, then x⁴ + 1/x⁴ = (x² + 1/x²)² − 2. Never jump powers in a single leap.
**est_time_seconds:** 165
**related_reading:** reading-quant-04-algebra-and-equations
