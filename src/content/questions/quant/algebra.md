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

If 5(x − 3) = 2x + 9, what is the value of x?

- A) −2
- B) 4
- C) 6
- D) 8
- E) 24

**answer:** D
**hint_nudge:** Clear the parentheses on the left before you move anything across the equals sign.
**fastest_path:** 5x − 15 = 2x + 9 → 3x = 24 → x = 8.
**explanation:** Distribute the 5 fully: 5(x − 3) = 5x − 15. The equation becomes 5x − 15 = 2x + 9. Subtract 2x from both sides: 3x − 15 = 9. Add 15: 3x = 24. Divide by 3: x = 8. Substitute back to confirm: 5(8 − 3) = 25 and 2(8) + 9 = 25.
**mistake_a:** Moved the constants the wrong way — wrote 3x = 9 − 15 = −6 instead of 3x = 9 + 15, giving x = −2.
**mistake_b:** Failed to distribute the 5 across the −3, treating the left side as 5x − 3: then 3x = 12 and x = 4.
**mistake_c:** Reached 3x = 24 correctly but divided by 4 instead of 3.
**mistake_e:** Reached 3x = 24 and bubbled the 24 without dividing by 3.
**common_trap:** Incomplete distribution — multiplying 5 by x but forgetting to multiply it by −3.
**takeaway:** Distribute across every term inside the parentheses, then isolate the variable in two clean moves. Always plug your answer back in when time allows.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** linear-equation-isolation
**trap_type:** incomplete-distribution
**est_time_seconds:** 45

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations — Fractions

If n/4 + n/6 = 5, what is the value of n?

- A) 10
- B) 12
- C) 24
- D) 50
- E) 60

**answer:** B
**fastest_path:** Common denominator 12: 3n/12 + 2n/12 = 5n/12 = 5 → n = 12.
**explanation:** The lowest common denominator of 4 and 6 is 12. Rewrite: n/4 = 3n/12 and n/6 = 2n/12, so 3n/12 + 2n/12 = 5n/12. Set equal to 5: 5n/12 = 5, so 5n = 60 and n = 12. Check: 12/4 + 12/6 = 3 + 2 = 5.
**mistake_a:** Arithmetic slip after clearing denominators.
**mistake_c:** Used the LCD (12) correctly to combine but bubbled a value tied to the denominators rather than solving 5n = 60.
**mistake_d:** Added the denominators instead of finding a common one, writing n/10 = 5 → n = 50.
**mistake_e:** Cleared the denominators by multiplying both sides by 12 to get 5n = 60, then bubbled the 60 without dividing by 5.
**common_trap:** Adding denominators (4 + 6 = 10) instead of converting to a common denominator.
**takeaway:** To add fractions with different denominators, convert to a common denominator first — never add the denominators themselves.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** clearing-fractional-equations
**trap_type:** adding-denominators
**est_time_seconds:** 50

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Inequalities

If −3x + 2 ≥ 11, what is the greatest possible integer value of x?

- A) −4
- B) −3
- C) −2
- D) 3
- E) 9

**answer:** B
**hint_nudge:** When you divide both sides of an inequality by a negative number, the inequality sign flips.
**fastest_path:** −3x ≥ 9 → x ≤ −3 (flip the sign) → greatest integer is −3.
**explanation:** Subtract 2 from both sides: −3x ≥ 9. Divide both sides by −3, and because −3 is negative, reverse the inequality: x ≤ −3. The greatest integer that satisfies x ≤ −3 is −3 itself (since the inequality is "less than or equal to," the boundary is included).
**mistake_a:** Treated the boundary as excluded (as if x < −3) and stepped one integer further to −4.
**mistake_c:** Reversed the direction one step too far, landing on −2, which does not satisfy the inequality.
**mistake_d:** Forgot to flip the inequality sign when dividing by −3, getting x ≥ 3 and reading 3 as the boundary.
**mistake_e:** Stopped at −3x ≥ 9 and bubbled the 9 without isolating x.
**common_trap:** Not flipping the inequality sign when multiplying or dividing by a negative number.
**takeaway:** Dividing or multiplying an inequality by a negative number reverses its direction. With "≤", the boundary value is included.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** inequality-sign-flip
**trap_type:** forgot-to-flip-inequality
**est_time_seconds:** 50

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Systems of Equations

If x + y = 10 and x − y = 4, what is the value of xy?

- A) 21
- B) 25
- C) 28
- D) 40
- E) 12

**answer:** A
**fastest_path:** Add the equations: 2x = 14 → x = 7; then y = 3. xy = 21.
**explanation:** Add the two equations to eliminate y: (x + y) + (x − y) = 10 + 4, so 2x = 14 and x = 7. Substitute into x + y = 10: y = 3. Therefore xy = 7 × 3 = 21.
**mistake_b:** Assumed x = y and split 10 evenly into 5 and 5, ignoring the second equation, giving 5 × 5 = 25.
**mistake_c:** Solved x = 7 correctly but multiplied it by the difference 4 instead of by y, getting 28.
**mistake_d:** Multiplied the two right-hand sides (10 × 4) instead of solving for x and y.
**mistake_e:** Multiplied y = 3 by the difference 4 instead of by x, getting 12.
**common_trap:** Combining the given constants directly (multiplying or averaging) instead of solving the system for x and y first.
**takeaway:** Elimination is fastest when adding or subtracting the equations cancels a variable. Solve for both unknowns before computing what the question actually asks.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** elimination-method
**trap_type:** answering-wrong-quantity
**est_time_seconds:** 45

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponents

If 2^(x + 1) = 16, what is the value of x?

- A) 2
- B) 3
- C) 4
- D) 7
- E) 15

**answer:** B
**fastest_path:** 16 = 2^4, so x + 1 = 4 and x = 3.
**explanation:** Write both sides with the same base. Since 16 = 2^4, the equation 2^(x + 1) = 2^4 means the exponents are equal: x + 1 = 4, so x = 3. Check: 2^(3 + 1) = 2^4 = 16.
**mistake_a:** Set x + 1 = 4 but then subtracted 2 instead of 1, landing on x = 2.
**mistake_c:** Ignored the "+ 1" in the exponent, solving 2^x = 16 to get x = 4.
**mistake_d:** Misfactored 16 as 2 × 8 and set the exponent equal to 8, giving x + 1 = 8 and x = 7.
**mistake_e:** Set the exponent equal to 16 itself, writing x + 1 = 16 and x = 15.
**common_trap:** Comparing exponents only after both sides share the same base — students who skip rewriting 16 as a power of 2 misread the relationship.
**takeaway:** To solve an exponential equation, express both sides as powers of the same base, then set the exponents equal.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** common-base-exponents
**trap_type:** mismatched-base
**est_time_seconds:** 45

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations — Word Problem

At a bakery, 3 muffins and 2 scones cost $16, while 2 muffins and 5 scones cost $18. What is the price of one muffin?

- A) $2
- B) $3
- C) $4
- D) $5
- E) $6

**answer:** C
**hint_nudge:** Set up two equations, then scale them so one variable cancels when you subtract.
**fastest_path:** 3m + 2s = 16, 2m + 5s = 18. Scale to 15m + 10s = 80 and 4m + 10s = 36; subtract: 11m = 44 → m = 4.
**explanation:** Let m be the muffin price and s the scone price. Then 3m + 2s = 16 and 2m + 5s = 18. Multiply the first equation by 5 and the second by 2 so the scone terms match: 15m + 10s = 80 and 4m + 10s = 36. Subtract: 11m = 44, so m = 4. (Substituting back, 3(4) + 2s = 16 gives s = 2, and 2(4) + 5(2) = 18 checks out.)
**mistake_a:** Solved the system but reported the scone price ($2) instead of the muffin price.
**mistake_b:** Made a sign error during elimination, arriving at m = 3.
**mistake_d:** Averaged or mis-scaled the equations, landing on $5.
**mistake_e:** Added the two equations directly (5m + 7s = 34) and tried to read m from it without eliminating s.
**common_trap:** Solving correctly but answering for the wrong variable — the question asks for the muffin, not the scone.
**takeaway:** Scale equations to make one variable's coefficients equal, then eliminate. Reread the question to confirm which unknown it wants.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** elimination-with-scaling
**trap_type:** answering-wrong-quantity
**est_time_seconds:** 105

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions — Linear

The function f is defined by f(x) = ax + b for constants a and b. If f(2) = 7 and f(5) = 16, what is f(0)?

- A) 1
- B) 3
- C) −1
- D) 4
- E) 7

**answer:** A
**fastest_path:** Slope a = (16 − 7)/(5 − 2) = 3. Then 2(3) + b = 7 → b = 1, and f(0) = b = 1.
**explanation:** A linear function's "a" is the rate of change. Between x = 2 and x = 5, the output rises from 7 to 16, a change of 9 over an x-change of 3, so a = 9/3 = 3. Use f(2) = 7: 2(3) + b = 7, so b = 1. Then f(0) = a(0) + b = b = 1.
**mistake_b:** Computed the slope a = 3 correctly but reported a instead of f(0), which equals b.
**mistake_c:** Made a sign error solving 6 + b = 7, getting b = −1.
**mistake_d:** Estimated the rate from a single point or mis-divided, landing on 4.
**mistake_e:** Bubbled f(2) = 7, the given value, rather than computing f(0).
**common_trap:** Confusing the slope a with the y-intercept b — f(0) is always b for a linear function.
**takeaway:** For f(x) = ax + b, the slope a is the change in output over change in input, and f(0) = b. Find a first, then back out b.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** linear-function-from-two-points
**trap_type:** slope-vs-intercept
**est_time_seconds:** 100

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics — Roots and Coefficients

The equation x² + bx + 12 = 0 has two integer roots, one of which is three times the other. If b > 0, what is the value of b?

- A) 4
- B) 6
- C) 8
- D) 12
- E) 16

**answer:** C
**hint_nudge:** Call the roots r and 3r. Their product is the constant term, and their sum relates to b.
**fastest_path:** Product (r)(3r) = 3r² = 12 → r² = 4 → r = ±2. Sum = −b. For b > 0, roots are −2 and −6, sum −8, so b = 8.
**explanation:** For x² + bx + 12, the product of the roots is 12 and their sum is −b. Let the roots be r and 3r. Their product is 3r² = 12, so r² = 4 and r = ±2, giving root pairs {2, 6} or {−2, −6}. The sum of the roots equals −b. The pair {2, 6} sums to 8, giving b = −8 (rejected, since b > 0). The pair {−2, −6} sums to −8, giving b = 8. So b = 8, and the equation is x² + 8x + 12 = (x + 2)(x + 6).
**mistake_a:** Stopped at r² = 4 and bubbled 4 without finishing the problem.
**mistake_b:** Bubbled the larger root (6) instead of computing b.
**mistake_d:** Reported the constant term 12, confusing the product of the roots with b.
**mistake_e:** Doubled the correct sum or mis-paired the roots, landing on 16.
**common_trap:** Ignoring the b > 0 condition and reporting the value from the positive root pair (−8), or confusing the sum of roots with their product.
**takeaway:** For x² + bx + c, the roots sum to −b and multiply to c. Use the sign condition to select the correct root pair.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** vieta-root-relationships
**trap_type:** ignoring-constraints
**est_time_seconds:** 120

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value — Range

If x is an integer and |x − 4| < 3, how many distinct values can the expression 2x + 1 take?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 9

**answer:** B
**fastest_path:** |x − 4| < 3 → 1 < x < 7 → integer x ∈ {2, 3, 4, 5, 6} → 5 values, each giving a distinct 2x + 1.
**explanation:** Unpack the absolute value: |x − 4| < 3 means −3 < x − 4 < 3, so 1 < x < 7. Because the inequality is strict, the integer values of x are 2, 3, 4, 5, and 6 — five of them. Each distinct x produces a distinct 2x + 1 (the map x → 2x + 1 is one-to-one), so 2x + 1 takes 5 distinct values: 5, 7, 9, 11, 13.
**mistake_a:** Dropped one of the valid integers (for example, miscounting the interval as 2 through 5), getting 4.
**mistake_c:** Included one endpoint (x = 1 or x = 7), treating the strict inequality as inclusive, getting 6.
**mistake_d:** Counted every integer from 1 to 7 inclusive, getting 7.
**mistake_e:** Confused the count of values with the largest output (13) or the width 2(3) + ... and bubbled 9.
**common_trap:** Treating the strict inequality "< 3" as "≤ 3" and including the boundary integers 1 and 7.
**takeaway:** Convert |A| < k to −k < A < k, solve for the variable, and count integers carefully — strict bounds exclude the endpoints.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** absolute-value-to-interval
**trap_type:** strict-vs-inclusive-bounds
**est_time_seconds:** 110

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Algebra Translation — Ages

Pavel's current age is 4 years more than twice Mira's current age. In 6 years, the sum of their ages will be 49. How old is Mira now?

- A) 9
- B) 11
- C) 13
- D) 15
- E) 22

**answer:** B
**hint_nudge:** Define Mira's age as a single variable and write Pavel's age in terms of it before handling the "in 6 years" part.
**fastest_path:** Mira = m, Pavel = 2m + 4. In 6 years: (m + 6) + (2m + 10) = 49 → 3m + 16 = 49 → m = 11.
**explanation:** Let Mira's current age be m. Pavel's current age is 2m + 4. In 6 years Mira will be m + 6 and Pavel will be (2m + 4) + 6 = 2m + 10. Their sum: (m + 6) + (2m + 10) = 3m + 16 = 49, so 3m = 33 and m = 11. (Pavel is now 26; in 6 years they are 17 and 32, summing to 49.)
**mistake_a:** Added the 6 years to only one person instead of both, getting 3m + 10 = 49 and m = 13... or a related miscount landing on 9.
**mistake_c:** Forgot to age one of the two people, solving 3m + 10 = 49 to get m = 13.
**mistake_d:** Set up the relationship backwards (treating Mira as the older), landing on 15.
**mistake_e:** Solved correctly for m = 11 but reported 2m = 22, the "twice Mira" quantity.
**common_trap:** Forgetting to add the 6 years to both people, or solving for the wrong person.
**takeaway:** Translate one phrase at a time, define every age in terms of one variable, and apply the time shift to every person before summing.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** age-word-problem-setup
**trap_type:** incomplete-time-shift
**est_time_seconds:** 115

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponents — Equations

If 3^(2x) = 27^(x − 1) · 9, what is the value of x?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** B
**hint_nudge:** Rewrite 27 and 9 as powers of 3 so both sides become a single power of 3.
**fastest_path:** Right side: 3^(3(x − 1)) · 3^2 = 3^(3x − 1). Set exponents equal: 2x = 3x − 1 → x = 1.
**explanation:** Convert everything to base 3. The right side is 27^(x − 1) · 9 = (3^3)^(x − 1) · 3^2 = 3^(3x − 3) · 3^2 = 3^(3x − 3 + 2) = 3^(3x − 1). The equation is now 3^(2x) = 3^(3x − 1), so the exponents must be equal: 2x = 3x − 1, giving x = 1. Check: left side 3^2 = 9; right side 27^0 · 9 = 1 · 9 = 9.
**mistake_a:** Solved −x = −1 correctly to x = 1 but then bubbled 0 by a sign slip.
**mistake_c:** Mishandled the "· 9" term when combining exponents, producing 2x = 3x − ... and landing on 2.
**mistake_d:** Dropped the "· 9" entirely, solving 2x = 3(x − 1) = 3x − 3, which gives x = 3.
**mistake_e:** Added exponents incorrectly when multiplying powers, arriving at 4.
**common_trap:** Forgetting to fold the extra factor 9 = 3² into the exponent, or mishandling the distribution 3(x − 1).
**takeaway:** Express every term as a power of the same base and add exponents when multiplying. Then set the exponents equal.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** common-base-exponents
**trap_type:** dropped-factor
**est_time_seconds:** 110

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions — Composition

If f(x) = 2x − 3 and g(x) = x² + 1, what is the value of f(g(2)) − g(f(2))?

- A) 2
- B) 3
- C) 5
- D) 7
- E) 9

**answer:** C
**fastest_path:** g(2) = 5, f(5) = 7. f(2) = 1, g(1) = 2. 7 − 2 = 5.
**explanation:** Work each composition from the inside out. For f(g(2)): g(2) = 2² + 1 = 5, then f(5) = 2(5) − 3 = 7. For g(f(2)): f(2) = 2(2) − 3 = 1, then g(1) = 1² + 1 = 2. Finally f(g(2)) − g(f(2)) = 7 − 2 = 5.
**mistake_a:** Computed only g(f(2)) = 2 and bubbled it.
**mistake_b:** Reversed the order of one composition (applied the outer function first), producing 3.
**mistake_d:** Computed only f(g(2)) = 7 and bubbled it, ignoring the subtraction.
**mistake_e:** Added the two compositions (7 + 2) instead of subtracting.
**common_trap:** Treating f(g(x)) as g(f(x)) — composition is not commutative, so the order matters.
**takeaway:** Evaluate compositions inside-out, and keep f(g(x)) and g(f(x)) distinct — they are generally different.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** function-composition-order
**trap_type:** composition-order-reversed
**est_time_seconds:** 95

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics — Symmetric Functions of Roots

If r and s are the two roots of the equation x² − 6x + 4 = 0, what is the value of 1/r + 1/s?

- A) 2/3
- B) 3/2
- C) 4
- D) 6
- E) 1/4

**answer:** B
**hint_nudge:** You do not need the individual roots. Rewrite 1/r + 1/s as a single fraction and use the sum and product of the roots.
**hint_strategy:** For x² + bx + c, the roots sum to −b and multiply to c. Here r + s = 6 and rs = 4.
**fastest_path:** 1/r + 1/s = (r + s)/(rs) = 6/4 = 3/2.
**explanation:** The roots of x² − 6x + 4 = 0 are irrational (they are 3 ± √5), so solving for them directly wastes time. Instead use the relationships between roots and coefficients: r + s = 6 and rs = 4. Combine the target expression over a common denominator: 1/r + 1/s = (s + r)/(rs) = 6/4 = 3/2.
**mistake_a:** Inverted the ratio, computing rs/(r + s) = 4/6 = 2/3.
**mistake_c:** Bubbled the product of the roots, rs = 4.
**mistake_d:** Bubbled the sum of the roots, r + s = 6.
**mistake_e:** Computed 1/(rs) = 1/4 instead of (r + s)/(rs).
**common_trap:** Grinding out the irrational roots and adding their reciprocals numerically — slow and error-prone — instead of using the symmetric-function shortcut.
**takeaway:** When a question asks for a symmetric expression of the roots (sum, product, sum of reciprocals, sum of squares), use r + s = −b and rs = c rather than solving for the roots.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** vieta-symmetric-shortcut
**trap_type:** missing-algebraic-shortcut
**est_time_seconds:** 130

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inequalities — Constrained Optimization

If x and y are positive integers satisfying 2x + 3y = 24, what is the greatest possible value of the product xy?

- A) 18
- B) 24
- C) 27
- D) 36
- E) 48

**answer:** B
**hint_nudge:** Only certain values of y keep x a positive integer. List the valid (x, y) pairs before maximizing.
**hint_strategy:** Solve for x = (24 − 3y)/2. For x to be a positive integer, 24 − 3y must be positive and even, which forces y to be even.
**fastest_path:** x = (24 − 3y)/2 needs y even and positive with x > 0: y = 2 → x = 9 (xy = 18); y = 4 → x = 6 (xy = 24); y = 6 → x = 3 (xy = 18). Max = 24.
**explanation:** From 2x + 3y = 24, x = (24 − 3y)/2. For x to be a positive integer, 24 − 3y must be positive and even. Since 24 is even, 3y must be even, so y must be even; and x > 0 requires y < 8. The valid pairs are (x, y) = (9, 2), (6, 4), and (3, 6), giving products 18, 24, and 18. The maximum is 24, at x = 6, y = 4.
**mistake_a:** Found one valid pair (such as (9, 2) or (3, 6)) and stopped without checking the others, reporting 18.
**mistake_c:** Treated x and y as continuous and applied an optimization that does not respect the integer constraint, landing on 27.
**mistake_d:** Ignored the equation and chose x = 6, y = 6 (which does not satisfy 2x + 3y = 24), getting 36.
**mistake_e:** Doubled the correct answer or multiplied unrelated quantities, getting 48.
**common_trap:** Failing to enforce that x and y must be positive integers, then either testing too few pairs or treating the problem as continuous.
**takeaway:** With integer constraints, derive the divisibility/parity condition first, list all feasible pairs, then compare. Do not stop at the first valid solution.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** integer-constrained-optimization
**trap_type:** ignoring-constraints
**est_time_seconds:** 160

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value — Equations with Hidden Constraints

How many real values of x satisfy the equation |x² − 4| = 3x?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** C
**hint_nudge:** Before splitting into cases, ask what the right-hand side requires: an absolute value can never equal a negative number.
**hint_strategy:** Solve x² − 4 = 3x and x² − 4 = −3x separately, then discard any root for which 3x < 0.
**fastest_path:** Need 3x ≥ 0, so x ≥ 0. Case + : x² − 3x − 4 = 0 → x = 4 or −1 → keep 4. Case − : x² + 3x − 4 = 0 → x = 1 or −4 → keep 1. Valid: x = 4 and x = 1. Two solutions.
**explanation:** Because the left side is an absolute value (never negative), the right side 3x must be ≥ 0, so any solution needs x ≥ 0. Split the equation. Case 1: x² − 4 = 3x → x² − 3x − 4 = 0 → (x − 4)(x + 1) = 0 → x = 4 or x = −1; only x = 4 satisfies x ≥ 0. Case 2: x² − 4 = −3x → x² + 3x − 4 = 0 → (x + 4)(x − 1) = 0 → x = −4 or x = 1; only x = 1 satisfies x ≥ 0. The valid solutions are x = 4 and x = 1, so there are 2. (Check: |16 − 4| = 12 = 3·4; |1 − 4| = 3 = 3·1.)
**mistake_a:** Concluded incorrectly that no solution works, perhaps after rejecting all roots.
**mistake_b:** Solved only one of the two cases and found a single solution.
**mistake_d:** Kept three of the four algebraic roots, discarding only one.
**mistake_e:** Counted all four roots (4, −1, −4, 1) without checking the 3x ≥ 0 requirement, getting 4.
**common_trap:** Treating each case's algebraic roots as automatically valid — forgetting that the right side 3x must be nonnegative filters out the negative roots.
**takeaway:** When |A| = B, you may only proceed if B ≥ 0; always test candidate roots against that constraint to discard extraneous solutions.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** absolute-value-case-analysis
**trap_type:** ignoring-constraints
**est_time_seconds:** 165

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Algebra — Symmetric Power Sums

If a + b + c = 6, a² + b² + c² = 14, and a³ + b³ + c³ = 36, what is the value of abc?

- A) 3
- B) 6
- C) 9
- D) 11
- E) 12

**answer:** B
**hint_nudge:** You cannot find a, b, c individually from this, but you can find their pairwise products first using the square of the sum.
**hint_strategy:** Use (a + b + c)² = a² + b² + c² + 2(ab + bc + ca) to get ab + bc + ca, then the identity a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca).
**fastest_path:** ab + bc + ca = (36 − 14)/2 = 11. Then 36 − 3abc = 6(14 − 11) = 18 → 3abc = 18 → abc = 6.
**explanation:** First find the pairwise product sum from the square of the sum: (a + b + c)² = a² + b² + c² + 2(ab + bc + ca), so 6² = 14 + 2(ab + bc + ca), giving 36 = 14 + 2(ab + bc + ca) and ab + bc + ca = 11. Now apply the identity a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca): 36 − 3abc = 6 · (14 − 11) = 6 · 3 = 18. Thus 3abc = 36 − 18 = 18 and abc = 6. (Consistency check: a, b, c are the roots of t³ − 6t² + 11t − 6 = (t − 1)(t − 2)(t − 3), i.e., 1, 2, 3, whose product is 6.)
**mistake_a:** Divided 18 by 6 (the sum) instead of by 3, getting 3.
**mistake_c:** Made a sign error in the cube identity, landing on 9.
**mistake_d:** Bubbled ab + bc + ca = 11, stopping one step short of abc.
**mistake_e:** Mis-applied the identity (for example, using 2abc or skipping the factor), getting 12.
**common_trap:** Trying to solve for a, b, c individually, or misremembering the sum-of-cubes identity and its 3abc term.
**takeaway:** Symmetric systems yield to symmetric identities: the square of the sum gives the pairwise products, and a³ + b³ + c³ − 3abc = (a + b + c)(a² + b² + c² − ab − bc − ca) gives the triple product.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** symmetric-power-sum-identities
**trap_type:** missing-algebraic-shortcut
**est_time_seconds:** 195

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions — Functional Equations

A function f is defined for all nonzero real numbers and satisfies f(x) + 2·f(1/x) = 3x for every nonzero x. What is the value of f(2)?

- A) −1
- B) 1
- C) 2
- D) 7/2
- E) 6

**answer:** A
**hint_nudge:** One equation has two unknowns, f(2) and f(1/2). Generate a second equation by substituting a related value of x.
**hint_strategy:** Plug in x = 2 to get one equation, then plug in x = 1/2 to get a second equation in the same two unknowns, and solve the system.
**fastest_path:** x = 2: f(2) + 2f(1/2) = 6. x = 1/2: f(1/2) + 2f(2) = 3/2. Let A = f(2): solving gives A = −1.
**explanation:** Substituting x = 2 into f(x) + 2f(1/x) = 3x gives f(2) + 2f(1/2) = 6. Substituting x = 1/2 gives f(1/2) + 2f(2) = 3/2. Let A = f(2) and B = f(1/2). The system is A + 2B = 6 and 2A + B = 3/2. From the first, A = 6 − 2B; substitute into the second: 2(6 − 2B) + B = 3/2 → 12 − 3B = 3/2 → 3B = 21/2 → B = 7/2. Then A = 6 − 2(7/2) = 6 − 7 = −1. So f(2) = −1. (Check: f(2) + 2f(1/2) = −1 + 7 = 6 = 3·2, and f(1/2) + 2f(2) = 7/2 − 2 = 3/2 = 3·(1/2).)
**mistake_b:** Made a sign error solving the system, landing on 1.
**mistake_c:** Assumed f(x) = x (so f(2) = 2), never setting up the functional system.
**mistake_d:** Solved the system but reported f(1/2) = 7/2 instead of f(2).
**mistake_e:** Used only the first equation and assumed f(1/2) = 0, reading f(2) = 6 directly.
**common_trap:** Treating the single given equation as solvable on its own — the key move is generating a second equation by substituting the reciprocal value.
**takeaway:** For functional equations relating f(x) and f(1/x), substitute both x and 1/x to build a solvable linear system in the two function values.
**related_reading:** reading-quant-04-algebra-and-equations
**skill:** functional-equation-substitution
**trap_type:** missing-algebraic-shortcut
**est_time_seconds:** 240
