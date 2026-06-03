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
**mistake_a:** Subtracted the arguments rather than the function values: computed (a+1) − (a−1) = 2, treating the inputs as the outputs. This bypasses the f(x) = x² + 2 formula entirely — the function must be evaluated at each argument before subtracting.
**mistake_b:** Substituted a specific value — for example a = 1 — to get a single number: f(2) − f(0) = 6 − 2 = 4. The trap: choice C (4a) also evaluates to 4 when a = 1, so this substitution cannot distinguish B (the constant 4) from C (the expression 4a). A second check with a = 2 resolves the ambiguity: f(3) − f(1) = 11 − 3 = 8 = 4(2) ✓, confirming the answer depends on a.
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
**fastest_path:** Backsolve from C (s = $3): 4m + 3 = 17 → m = $3.50; then 2(3.50) + 3(3) = 16, ≠ 21. Try larger s. At s = $5: 4m + 5 = 17 → m = $3; then 2(3) + 3(5) = 21 ✓.
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
- D) 42
- E) 36

**answer:** C
**fastest_path:** f(3) = 9 − 3 = 6. f(6) = 36 − 6 = 30.
**explanation:** Composition is applied from inside out. Compute the inner first: f(3) = 3² − 3 = 9 − 3 = 6. Then apply f to that result: f(6) = 6² − 6 = 36 − 6 = 30. Total time: 15 seconds. The whole question is mechanical once you read "f(f(3))" as "apply f twice."
**mistake_a:** Stopped at the inner computation: f(3) = 6 — bubbled the intermediate value without applying f a second time.
**mistake_b:** Computed f(3) × 2 = 12 (multiplied the inner result by 2 instead of composing).
**mistake_d:** Computed f(3) = 6 correctly, then applied the formula with a sign error: 6² + 6 = 42 (used n² + n instead of n² − n).
**mistake_e:** Computed f(3) = 6 correctly, then took [f(3)]² = 6² = 36 — applied the outer function as "squaring the inner result" rather than evaluating f(6) = 6² − 6.
**common_trap:** Stopping at the inner result and bubbling — composition requires both layers.
**takeaway:** f(f(x)) means apply f twice: compute f(x) first, then apply f to that result. The outer call is f evaluated at the inner result, not a squaring or multiplication.
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
**mistake_a:** Stopped after finding a = 5 and bubbled — the question asks for a + b, not a alone.
**mistake_c:** Found a = 5 and b = 2 correctly, then made an arithmetic slip adding: wrote 5 + 4 = 9 instead of 5 + 2 = 7 (mis-read the value of b in their scratch work).
**mistake_d:** Confused the question with "what is a × b" and computed 5 × 2 = 10, then added a stray 1 from a coefficient in the equations, arriving at 11.
**mistake_e:** Summed both right-hand sides (16 + 19 = 35) and confused this with the answer, then searched for the nearest plausible choice (13) rather than recognizing the sum 35 = 7a.
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
