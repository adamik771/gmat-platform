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
**explanation:** Rather than solving for x, we exploit the structural relationship between the given equation and the requested expression. Let x denote the unknown quantity. The given condition is that 3x + 7 = 22. Subtracting 7 from both sides yields 3x = 15. Since 6x + 5 = 2(3x) + 5, we substitute the value of 3x directly: 2(15) + 5 = 30 + 5 = 35. The value of x is never needed individually.

The correct answer is C.
**fastest_path:** From 3x = 15, rewrite the target as 2(3x) + 5 = 2(15) + 5 = 35 — no need to find x first.
**common_trap:** Solving for x correctly but reporting 6x and forgetting the trailing "+ 5".
**mistake_a:** 25 is 6x − 5 = 30 − 5; the constant 5 is added to 6x, not subtracted.
**mistake_b:** 30 is just 6x = 6(5); the question asks for 6x + 5, so this drops the trailing +5.
**mistake_d:** 40 comes from mis-solving the equation as x = 6 (e.g., reading 3x = 18) and then computing 6(6) + 4.
**mistake_e:** 45 comes from adding 15 instead of 5, or from compounding an error in x; recompute from 3x = 15.
**takeaway:** When asked for an expression rather than the variable, check whether it is a clean multiple of the given equation before solving.
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
**hint_nudge:** Don't expand anything numerically — this is purely a laws-of-exponents question, so the answer is just some power of x.
**hint_strategy:** Simplify the numerator with the power-of-a-power rule (multiply the exponents), then divide using the quotient rule (subtract the exponents).
**hint_setup:** (x³)⁴ = x^(3·4) = x¹², so the expression becomes x¹² / x⁵. Now subtract the exponents.
**explanation:** This problem is solved by applying the laws of exponents. Two rules govern the computation. First, the power-of-a-power rule states that raising a power to another power multiplies the exponents: (x^a)^b = x^(a*b). Second, the quotient rule for like bases states that dividing powers of the same base subtracts the exponents: x^a / x^b = x^(a-b).

Let the expression be (x^3)^4 / x^5. We simplify the numerator first. Applying the power-of-a-power rule, we have (x^3)^4 = x^(3*4) = x^12. The expression therefore becomes x^12 / x^5.

We now apply the quotient rule. Subtracting the exponent of the denominator from the exponent of the numerator gives x^(12-5) = x^7.

The correct answer is B.
**fastest_path:** Multiply the inner exponents (3×4 = 12), then subtract the denominator's exponent: 12 − 5 = 7.
**common_trap:** Adding the exponents in (x³)⁴ instead of multiplying them.
**mistake_a:** x² treats (x³)⁴ as x^(3+4) = x⁷ and then mis-subtracts; power-of-a-power multiplies the exponents.
**mistake_c:** x¹² ignores the division by x⁵ — it stops after simplifying the numerator.
**mistake_d:** x¹⁵ multiplies 3×5 (using the denominator's exponent by mistake) instead of 3×4.
**mistake_e:** x¹⁷ adds the exponents in the division (12 + 5) instead of subtracting them.
**takeaway:** Power-of-a-power multiplies exponents; dividing like bases subtracts them — keep the two rules distinct.
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
**hint_nudge:** The only subtlety here is what happens to the inequality sign when you divide by a negative number.
**hint_strategy:** Isolate the x-term, then divide by its negative coefficient — and remember that dividing by a negative reverses the direction of the inequality.
**hint_setup:** Subtract 9 to get −3x > −9, then divide both sides by −3 and flip the sign.
**explanation:** To determine which statement must be true, we solve the given linear inequality for x, applying the rule that multiplying or dividing both sides of an inequality by a negative quantity reverses the direction of the inequality.

We begin with the inequality −3x + 9 > 0. Subtracting 9 from both sides yields −3x > −9. We now isolate x by dividing both sides by −3. Because −3 is negative, the inequality sign reverses, giving x < 3.

Thus every value of x satisfying the original inequality satisfies x < 3.

The correct answer is D.
**fastest_path:** Isolate the x-term: −3x > −9, then divide by −3 and flip the sign → x < 3.
**common_trap:** Forgetting to reverse the inequality sign when dividing by the negative coefficient.
**mistake_a:** x > 3 keeps the sign instead of flipping it when dividing by −3.
**mistake_b:** x > −3 both fails to flip the sign and mishandles the constant.
**mistake_c:** x < −3 flips the sign but mishandles the −9, dropping the factor of 3.
**mistake_e:** x = 3 treats the strict inequality as an equation, reporting only the boundary value.
**takeaway:** Multiplying or dividing an inequality by a negative number reverses its direction — the most common inequality error.
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
**hint_nudge:** Notice the y-terms are +y and −y — that is an invitation to add the equations, not to substitute.
**hint_strategy:** Add the two equations so that y cancels, leaving a single equation in x.
**hint_setup:** (x + y) + (x − y) = 12 + 4 gives 2x = 16. Now solve for x.
**explanation:** When a system of two linear equations contains a variable whose coefficients are equal in magnitude and opposite in sign, the equations can be combined by addition to eliminate that variable in a single step. Here we are given the system x + y = 12 and x - y = 4, and we are asked for the value of x. The term y appears with coefficient +1 in the first equation and coefficient -1 in the second equation, so adding the two equations together cancels y. Adding the left sides and the right sides separately gives (x + y) + (x - y) = 12 + 4, which simplifies to 2x = 16. Dividing both sides by 2 yields x = 8. The correct answer is C.
**fastest_path:** Add the two equations to cancel y in one step: 2x = 16, so x = 8.
**common_trap:** Subtracting the equations (which cancels x) when addition is what eliminates y.
**mistake_a:** 4 is the value of y, not x — solve for the variable the question asks about.
**mistake_b:** 6 halves the first equation (treating x = y) and ignores x − y = 4 entirely.
**mistake_d:** 10 comes from an arithmetic slip (2x = 20) when combining the constants.
**mistake_e:** 16 is 2x — the sum 12 + 4 — before dividing by 2; the final step is dropped.
**takeaway:** Coefficients equal and opposite ⇒ add the equations; equal and same sign ⇒ subtract.
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
**hint_nudge:** You are asked only for the product of the roots — you can read that straight off the constant term without factoring.
**hint_strategy:** For x² + bx + c = 0 the product of the roots is c/a, while the sum is −b/a; make sure you grab the product, not the sum.
**hint_setup:** Here a = 1, b = −5, and c = −14, so the product equals c/a = −14/1. Watch the sign on c.
**explanation:** For any quadratic equation of the form ax² + bx + c = 0, Vieta's formulas relate the coefficients to the two solutions: the product of the solutions equals c/a. We can therefore determine the requested product directly from the coefficients, without first solving for the individual roots.

The given equation is x² − 5x − 14 = 0. Comparing this with ax² + bx + c = 0, we identify a = 1, b = −5, and c = −14.

Applying Vieta's product formula, the product of the two solutions is c/a = −14/1 = −14.

We may confirm this by factoring. We seek two numbers whose product is −14 and whose sum is −5; these numbers are −7 and 2. Thus x² − 5x − 14 = (x − 7)(x + 2) = 0, which gives the solutions x = 7 and x = −2. Their product is (7)(−2) = −14, in agreement with the result obtained from Vieta's formula.

The correct answer is A.
**fastest_path:** Product of roots = c/a = −14/1 = −14, straight from the coefficients — no factoring needed.
**common_trap:** Reporting the sum of the roots (or a single root) instead of the product.
**mistake_b:** −7 is not a root at all — it is one of the two factoring numbers (−7 and 2 multiply to −14); the actual roots are 7 and −2.
**mistake_c:** 5 misreads the −5 coefficient as a root rather than computing c/a.
**mistake_d:** 7 is one of the two roots (a single root), not the product of both.
**mistake_e:** 14 drops the sign of c; the product is c/a = −14, which is negative.
**takeaway:** For x² + bx + c, the product of the roots is c and the sum is −b — read which one the question wants.
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
**explanation:** Because the argument of the function contains a variable, we evaluate the function symbolically by substituting the given expressions directly into the rule for f and then simplifying.

Let f(x) = x^2 + 2. To find f(a + 1), we substitute a + 1 for x:
f(a + 1) = (a + 1)^2 + 2.
Expanding the square, (a + 1)^2 = a^2 + 2a + 1, so
f(a + 1) = a^2 + 2a + 1 + 2 = a^2 + 2a + 3.

Similarly, to find f(a - 1), we substitute a - 1 for x:
f(a - 1) = (a - 1)^2 + 2.
Expanding the square, (a - 1)^2 = a^2 - 2a + 1, so
f(a - 1) = a^2 - 2a + 1 + 2 = a^2 - 2a + 3.

We now compute the requested difference:
f(a + 1) - f(a - 1) = (a^2 + 2a + 3) - (a^2 - 2a + 3).
Distributing the negative sign, this equals
a^2 + 2a + 3 - a^2 + 2a - 3 = 4a.
The a^2 terms cancel and the constant terms cancel, leaving 4a.

The correct answer is C.
**fastest_path:** Use the difference of squares: f(a+1) − f(a−1) = (a+1)² − (a−1)² = 4a; the +2 constants cancel.
**common_trap:** Plugging in a number for a, then choosing a constant like 4 instead of the expression 4a.
**mistake_a:** 2 ignores the variable entirely; the difference depends on a.
**mistake_b:** 4 results from testing a = 1 and reporting the numeric output instead of the general expression 4a.
**mistake_d:** 4a + 4 forgets that the +2 constants cancel in the subtraction.
**mistake_e:** 2a² wrongly keeps an a² term; the a² terms cancel between f(a+1) and f(a−1).
**takeaway:** With a variable argument, expand symbolically; if you test numbers, generalize before choosing.
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
**hint_nudge:** You only need the price of a scone, so aim to eliminate the muffin term rather than solve the whole system.
**hint_strategy:** Scale one equation so the muffin coefficients match, then subtract to leave an equation in s alone (or substitute s = 17 − 4m into the other equation).
**hint_setup:** Halving 4m + s = 17 gives 2m + 0.5s = 8.5; subtracting this from 2m + 3s = 21 cancels m. Now solve for s.
**explanation:** A pair of conditions relating two unknown quantities can be expressed as a system of two linear equations, which is solved by isolating one variable and substituting into the other equation.

Let m represent the cost in dollars of one muffin and let s represent the cost in dollars of one scone. The condition that 2 muffins and 3 scones cost $21 translates to 2m + 3s = 21, and the condition that 4 muffins and 1 scone cost $17 translates to 4m + s = 17.

Solving the second equation for s gives s = 17 - 4m. Substituting this expression into the first equation yields 2m + 3(17 - 4m) = 21. Expanding the left side gives 2m + 51 - 12m = 21, which simplifies to -10m + 51 = 21. Subtracting 51 from both sides gives -10m = -30, so m = 3.

Substituting m = 3 back into s = 17 - 4m gives s = 17 - 4(3) = 17 - 12 = 5. Thus one scone costs $5. As a check, 2(3) + 3(5) = 6 + 15 = 21, which confirms the first condition.

The correct answer is E.
**fastest_path:** Solve the second equation for s = 17 − 4m, substitute to get m = 3, then s = 17 − 12 = 5.
**common_trap:** Solving for the muffin price m (= 3) and selecting it instead of the scone price s.
**mistake_a:** $1 comes from a substitution sign error; verify any candidate against 2m + 3s = 21.
**mistake_b:** $2 missolves the system; it satisfies neither original equation.
**mistake_c:** $3 is the muffin price m, not the scone price s the question asks for.
**mistake_d:** $4 comes from an arithmetic slip in isolating s (e.g., mis-evaluating 17 − 4·3).
**takeaway:** Track which variable the question wants; in a two-item system it is easy to report the wrong price.
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
**hint_nudge:** Read |x − 3| as “distance from 3,” which turns this into two simple bands on the number line.
**hint_strategy:** Split the double inequality into |x − 3| > 2 and |x − 3| < 7, solve each as a range around 3, then intersect and count integers — the endpoints are excluded because every sign is strict.
**hint_setup:** |x − 3| > 2 gives x < 1 or x > 5; |x − 3| < 7 gives −4 < x < 10. Find the integers common to both.
**explanation:** A compound absolute-value inequality of the form a < |expression| < b is equivalent to two simultaneous conditions: the value of the expression must lie more than a units from zero and fewer than b units from zero. We therefore split the statement 2 < |x - 3| < 7 into the two requirements |x - 3| > 2 and |x - 3| < 7, find the integers satisfying both, and count them.

Let x denote the unknown. The condition |x - 3| > 2 means that x - 3 is more than 2 units from zero, so x - 3 > 2 or x - 3 < -2. Adding 3 to each part gives x > 5 or x < 1.

The condition |x - 3| < 7 means that x - 3 is within 7 units of zero, so -7 < x - 3 < 7. Adding 3 to each part gives -4 < x < 10.

Both conditions must hold at the same time, so we intersect the two solution sets. Combining x < 1 with -4 < x < 10 yields -4 < x < 1. Combining x > 5 with -4 < x < 10 yields 5 < x < 10. The full solution is thus -4 < x < 1 or 5 < x < 10. Because every inequality is strict, all four boundary values, namely -4, 1, 5, and 10, are excluded.

We now count the integers in each interval. The integers strictly between -4 and 1 are -3, -2, -1, and 0, which is 4 integers. The integers strictly between 5 and 10 are 6, 7, 8, and 9, which is another 4 integers. The two intervals do not overlap, so the total number of integer solutions is 4 + 4 = 8.

The correct answer is C.
**fastest_path:** |x−3|>2 gives x<1 or x>5; |x−3|<7 gives −4<x<10. Count integers in (−4,1) and (5,10): 4 + 4 = 8.
**common_trap:** Including the boundary values (−4, 1, 5, 10) even though all inequalities are strict.
**mistake_a:** 6 under-counts, typically by dropping an interior integer from one of the two ranges.
**mistake_b:** 7 drops a single integer from one range.
**mistake_d:** 9 includes one excluded boundary (e.g., counting 1 or 5).
**mistake_e:** 10 includes two excluded boundaries, treating the strict inequalities as inclusive.
**takeaway:** Split a < |expr| < b into two conditions, intersect them, then count — strict bounds exclude endpoints.
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
**hint_nudge:** Work backward from the equation whose roots you actually know.
**hint_strategy:** Factor x² − 6x + 5 to get its roots, subtract 2 from each to recover the original roots, then use sum = −b and product = c.
**hint_setup:** x² − 6x + 5 = (x − 1)(x − 5), so the new roots are 1 and 5; the original roots are 1 − 2 = −1 and 5 − 2 = 3. Now find b and c.
**explanation:** This problem is governed by the relationship between the coefficients of a monic quadratic and its roots, expressed through Vieta's formulas: for x² + px + q = 0, the sum of the roots equals −p and the product of the roots equals q.

We begin with the resulting equation, x² − 6x + 5 = 0, because its roots are known quantities. Factoring gives (x − 1)(x − 5) = 0, so the roots of the resulting equation are 1 and 5.

Let r and s denote the roots of the original equation x² + bx + c = 0. Each original root was increased by 2 to produce the roots of the resulting equation. Hence r + 2 and s + 2 are the roots 1 and 5, which means r + 2 = 1 and s + 2 = 5. Solving each equation, we obtain r = −1 and s = 3.

We now apply Vieta's formulas to the original equation x² + bx + c = 0. The sum of its roots equals −b, so −b = r + s = (−1) + 3 = 2, which gives b = −2. The product of its roots equals c, so c = r·s = (−1)(3) = −3.

Finally, we compute b + c = (−2) + (−3) = −5.

The correct answer is A.
**fastest_path:** Roots of the new equation are 1 and 5; subtract 2 to recover original roots −1 and 3, so b = −2 and c = −3, giving b + c = −5.
**common_trap:** Adding 2 to the new roots instead of subtracting (reversing the shift direction).
**mistake_b:** −3 is the value of c alone, not b + c.
**mistake_c:** 1 comes from mishandling the sum/product signs in Vieta's formulas.
**mistake_d:** 3 reverses the shift (adds 2 to the roots) or reports a single original root.
**mistake_e:** 5 drops the sign of the result; b + c = −5, which is negative.
**takeaway:** If each root increased by 2, the original roots are the new roots minus 2 — undo the shift before applying Vieta.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponents

If 4^(a+1) = 8^a, what is the value of a?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 6

**answer:** B
**hint_nudge:** 4 and 8 are not the same base, but they share one — rewrite everything in that base.
**hint_strategy:** Express both sides as powers of 2; once the bases match, the equation holds exactly when the exponents are equal.
**hint_setup:** 4 = 2² and 8 = 2³, so the equation becomes 2^(2(a+1)) = 2^(3a). Now set the exponents equal.
**explanation:** When an exponential equation involves powers of different bases, the governing method is to express both sides as powers of a single common base; once the bases are identical, the equation holds precisely when the exponents are equal.

Let a denote the unknown exponent. The two bases, 4 and 8, are both powers of 2, since 4 = 2^2 and 8 = 2^3. We rewrite each side accordingly.

The left side becomes 4^(a+1) = (2^2)^(a+1). Applying the power-of-a-power rule, which multiplies the exponents, gives (2^2)^(a+1) = 2^(2(a+1)) = 2^(2a+2).

The right side becomes 8^a = (2^3)^a = 2^(3a).

The equation is therefore 2^(2a+2) = 2^(3a). Because the two sides are powers of the same base, they are equal only when the exponents are equal:

2a + 2 = 3a.

Subtracting 2a from both sides yields 2 = a, so a = 2.

As a check, substituting a = 2 gives 4^(2+1) = 4^3 = 64 and 8^2 = 64, confirming that the two sides agree.

The correct answer is B.
**fastest_path:** Rewrite both sides base 2: 2^(2a+2) = 2^(3a), so 2a + 2 = 3a → a = 2.
**common_trap:** Comparing the original bases 4 and 8 directly instead of converting to a common base.
**mistake_a:** 1 comes from a slip in equating the exponents or from testing a = 1, which fails the check.
**mistake_c:** 3 mis-solves 2a + 2 = 3a (e.g., adding 2a instead of subtracting it).
**mistake_d:** 4 doubles the correct answer, often from mishandling the (a + 1) exponent.
**mistake_e:** 6 comes from setting the exponents up incorrectly as 2(a + 1) = 3a with an arithmetic error.
**takeaway:** For exponential equations, convert to a common base, then set the exponents equal.
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
**hint_nudge:** This is a composition — resist the urge to stop after the first evaluation.
**hint_strategy:** Work inside-out: compute the inner value f(3) first, then feed that result back into f.
**hint_setup:** f(3) = 3² − 3 = 6, so you now need f(6) — not the value 6 itself.
**explanation:** This problem requires evaluating a composite function, in which a function is applied to the output of the same function. The governing principle is that f(f(3)) is evaluated from the inside outward: we first determine the value of the inner expression f(3), and then apply f to that result.

Let f(n) = n^2 - n for all positive integers n.

We begin with the inner application. Substituting n = 3 gives f(3) = 3^2 - 3 = 9 - 3 = 6.

We now apply f to this result, so that f(f(3)) = f(6). Substituting n = 6 gives f(6) = 6^2 - 6 = 36 - 6 = 30.

Therefore, f(f(3)) = 30.

The correct answer is C.
**fastest_path:** Work inside-out: f(3) = 9 − 3 = 6, then f(6) = 36 − 6 = 30.
**common_trap:** Computing the inner f(3) and stopping, or applying f only once.
**mistake_a:** 6 is f(3), the inner value — the outer application of f is missing.
**mistake_b:** 12 doubles f(3) instead of substituting it back into f.
**mistake_d:** 36 is 6² with the "− n" term dropped in the outer step.
**mistake_e:** 42 comes from adding f-values rather than composing them.
**takeaway:** Composite functions are evaluated from the inside out — finish the outer application.
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
**hint_nudge:** You are never asked for x or y individually — an identity gets you there directly.
**hint_strategy:** Expand (x + y)² = x² + y² + 2xy and substitute the two quantities you were given.
**hint_setup:** (x + y)² = (x² + y²) + 2(xy) = 20 + 2(6). Now finish the arithmetic.
**explanation:** This problem is solved most efficiently by applying the algebraic identity for the square of a sum rather than by determining the individual values of the variables.

Let x and y be the two unknowns. The expansion of the square of their sum is given by the identity (x + y)² = x² + 2xy + y². This can be rewritten as (x + y)² = (x² + y²) + 2(xy), which expresses the target quantity entirely in terms of the two values that are provided.

The problem states that x² + y² = 20 and that xy = 6. Substituting these values into the rearranged identity gives:

(x + y)² = (x² + y²) + 2(xy)
(x + y)² = 20 + 2(6)
(x + y)² = 20 + 12
(x + y)² = 32

The correct answer is D.
**fastest_path:** (x + y)² = (x² + y²) + 2xy = 20 + 2(6) = 32.
**common_trap:** Forgetting the factor of 2 on the xy cross term.
**mistake_a:** 26 adds xy once (20 + 6) instead of 2xy.
**mistake_b:** 28 mis-adds the cross term (e.g., 20 + 8).
**mistake_c:** 30 uses 20 + 2(5) or another slip on the value of xy.
**mistake_e:** 36 guesses (x + y)² from x = y, ignoring the given values.
**takeaway:** (x + y)² = x² + y² + 2xy — the middle term carries a coefficient of 2.
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
**hint_nudge:** The sum of the roots is available directly from the coefficients — no factoring required.
**hint_strategy:** For x² + bx + c = 0 the sum of the roots is −b/a; mind the sign.
**hint_setup:** Here a = 1 and b = 4, so the sum is −b/a = −4/1. Don't drop the negative.
**explanation:** The sum of the solutions of a quadratic equation can be found directly from its coefficients. For any quadratic equation of the form ax² + bx + c = 0, the sum of its solutions equals −b/a.

In the given equation x² + 4x − 21 = 0, we identify the coefficients as a = 1, b = 4, and c = −21. Applying the relationship, the sum of the solutions is

−b/a = −(4)/(1) = −4.

This result can be confirmed by solving the equation explicitly. Factoring the left side gives (x + 7)(x − 3) = 0, so the two solutions are x = −7 and x = 3. Their sum is

−7 + 3 = −4,

which agrees with the value obtained from the coefficients.

The correct answer is B.
**fastest_path:** Sum of roots = −b/a = −4/1 = −4 — read it straight off the coefficients.
**common_trap:** Reporting the constant term or a single root instead of the sum.
**mistake_a:** −7 is one root, not the sum of both.
**mistake_c:** −3 mis-signs the sum or reports a near value from a slip.
**mistake_d:** 3 is the other root, not the sum.
**mistake_e:** 7 drops the sign; with b = 4, the sum is −b = −4.
**takeaway:** Sum of roots = −b/a; do not confuse it with an individual root or with c.
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
**hint_nudge:** “Exactly one real solution” is a statement about the discriminant.
**hint_strategy:** Set the discriminant b² − 4ac equal to zero and solve for k.
**hint_setup:** With a = 1, b = −10, c = k: (−10)² − 4(1)(k) = 0, i.e. 100 − 4k = 0.
**explanation:** A quadratic equation of the form ax² + bx + c = 0 has exactly one real solution (a repeated root) precisely when its discriminant equals zero, that is, when b² − 4ac = 0.

Let the equation be x² − 10x + k = 0. Comparing it with the standard form ax² + bx + c = 0, we identify a = 1, b = −10, and c = k.

We set the discriminant equal to zero:

b² − 4ac = 0
(−10)² − 4(1)(k) = 0
100 − 4k = 0
4k = 100
k = 25

With k = 25, the equation becomes x² − 10x + 25 = 0, which factors as (x − 5)² = 0, confirming the single repeated root x = 5.

The correct answer is D.
**fastest_path:** One real solution ⇒ discriminant 0: (−10)² − 4k = 0 → 100 = 4k → k = 25.
**common_trap:** Setting the discriminant > 0 (two roots) rather than = 0 (one repeated root).
**mistake_a:** 5 is the repeated root x = 5, not the value of k.
**mistake_b:** 10 echoes the coefficient −10 instead of solving 100 = 4k.
**mistake_c:** 20 comes from an arithmetic slip such as 4k = 80.
**mistake_e:** 50 sets 100 = 2k, halving incorrectly.
**takeaway:** "Exactly one real solution" means discriminant = 0; solve b² − 4ac = 0 for the unknown.
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
**hint_nudge:** The +2y and −2y are begging you to add the equations.
**hint_strategy:** Add the equations to eliminate y and find x, then back-substitute for y — but note the question wants x + y, not x alone.
**hint_setup:** Adding gives 8x = 32, so x = 4; substitute into 3x + 2y = 16 to find y, then form x + y.
**explanation:** A system of two linear equations in two unknowns can be solved efficiently by the elimination method, in which the equations are combined so that one variable cancels. We are given the two equations 3x + 2y = 16 and 5x - 2y = 16. Because the coefficients of y are equal in magnitude and opposite in sign (+2 and -2), adding the two equations term by term eliminates y. Adding the left sides gives (3x + 2y) + (5x - 2y) = 8x, and adding the right sides gives 16 + 16 = 32, so 8x = 32. Dividing both sides by 8 yields x = 4. Substituting x = 4 into the first equation gives 3(4) + 2y = 16, that is, 12 + 2y = 16. Subtracting 12 from both sides gives 2y = 4, and dividing by 2 gives y = 2. The quantity requested is x + y, which equals 4 + 2 = 6.

The correct answer is C.
**fastest_path:** Add the equations to cancel y: 8x = 32, so x = 4; then y = 2, and x + y = 6.
**common_trap:** Solving for x and reporting it (4) instead of the requested x + y.
**mistake_a:** 4 is x alone, not x + y.
**mistake_b:** 5 comes from an arithmetic slip on y (e.g., y = 1).
**mistake_d:** 7 adds x to a mis-computed y = 3.
**mistake_e:** 8 reports 2x = 8, dropping the division-by-2 step.
**takeaway:** After solving a system, recombine for the exact quantity asked — here x + y, not x.
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
**hint_nudge:** Count genuinely different equations, not just statements — and notice you have two unknowns.
**hint_strategy:** A single linear equation in two unknowns can't fix x; check whether statement (2) is actually new information or just a rescaling of statement (1).
**hint_setup:** Divide statement (2) by 2 — what equation do you get, and how does it compare with statement (1)?
**explanation:** This problem asks for the value of x, and the governing principle is that a single linear equation in two unknowns does not determine a unique value for either variable. A unique solution for x requires at least one equation, or a system of equations, that is sufficient to isolate x; in a two-variable setting this means the available equations must be linearly independent, so that one is not merely a scalar multiple of another.

Let x and y denote the two unknowns. We examine the information that each statement provides about these variables.

Statement (1) gives 2x + 3y = 14. This is one linear equation in two unknowns. For any chosen value of y, we may solve x = (14 - 3y) / 2, which yields infinitely many ordered pairs (x, y) and therefore infinitely many possible values of x. For instance, y = 0 gives x = 7, while y = 2 gives x = 4. Thus statement (1) alone does not fix x.

Statement (2) gives 4x + 6y = 28. Dividing both sides by 2 yields 2x + 3y = 14, which is identical to statement (1). Again this is a single linear equation in two unknowns, so x = (14 - 3y) / 2 admits infinitely many values. Thus statement (2) alone does not fix x.

Considering both statements together, we observe that 4x + 6y = 28 is exactly 2 times 2x + 3y = 14, so statement (2) is a scalar multiple of statement (1). The two equations are not linearly independent; they carry identical information and describe the same line in the xy-plane. Combining them therefore contributes no new constraint, and the system remains one effective equation in two unknowns, with infinitely many solutions for x.

Since neither statement alone, nor both together, determines a unique value of x, the information is not sufficient.

The correct answer is E.
**fastest_path:** Statement (2) is exactly 2 × statement (1) — the same line — so even together they give one equation in two unknowns.
**common_trap:** Picking C because "two statements" feels like two equations, missing that they are identical.
**mistake_a:** (1) alone leaves y free, so x is not determined.
**mistake_b:** (2) alone reduces to 2x + 3y = 14 — the same single equation, still insufficient.
**mistake_c:** The statements are scalar multiples, so together they add no new information; C overstates their independence.
**mistake_d:** Neither statement alone fixes x, so "each alone sufficient" is wrong.
**takeaway:** Two equations help only if independent; check whether one is a multiple of the other before choosing C.
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
**hint_nudge:** An absolute-value equation like this has two solutions, and the question wants both of them added.
**hint_strategy:** Split into x − 4 = 7 and x − 4 = −7, solve each, then add — or note the two solutions are symmetric about 4, so their sum is 2·4.
**hint_setup:** x − 4 = 7 gives one value and x − 4 = −7 gives the other; add them rather than reporting just one.
**explanation:** The governing principle is that the absolute value of a quantity equals its distance from zero, so an equation of the form |y| = b, where b is a positive number, has exactly two solutions: y = b and y = -b. We apply this principle to the equation |x - 4| = 7.

Let x represent the unknown value. The expression x - 4 must therefore equal either 7 or -7.

In the first case, x - 4 = 7. Adding 4 to both sides gives x = 11.

In the second case, x - 4 = -7. Adding 4 to both sides gives x = -3.

The two possible values of x are 11 and -3. Their sum is 11 + (-3) = 8.

The correct answer is D.
**fastest_path:** x − 4 = ±7 gives x = 11 or x = −3; their sum is 8. (The two roots are symmetric about 4, so they sum to 2·4 = 8.)
**common_trap:** Solving only the positive case (x = 11) and ignoring the negative case.
**mistake_a:** −11 negates both solutions; only x − 4 = −7 produces a negative value.
**mistake_b:** −3 is one solution, not the sum of both.
**mistake_c:** 4 is the center point, not the sum of the two solutions.
**mistake_e:** 11 is the other single solution, not the sum.
**takeaway:** |expr| = b yields two solutions; "sum of all values" requires both.
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
**hint_nudge:** A “< 9” absolute value collapses into a single ordinary double inequality.
**hint_strategy:** Rewrite |2x + 1| < 9 as −9 < 2x + 1 < 9, solve for x, then count the integers strictly inside.
**hint_setup:** Subtract 1 throughout to get −10 < 2x < 8, then divide by 2. The endpoints are excluded.
**explanation:** An absolute-value inequality of the form |expr| < k, where k is positive, is equivalent to the compound inequality −k < expr < k. We apply this principle and then count the integers that satisfy the resulting bounds.

Here the expression is 2x + 1 and k = 9, so the inequality |2x + 1| < 9 is equivalent to

−9 < 2x + 1 < 9.

Subtracting 1 from each part gives

−10 < 2x < 8.

Dividing each part by 2 gives

−5 < x < 4.

Because both inequalities are strict, the endpoints −5 and 4 are excluded. The integers strictly between −5 and 4 are −4, −3, −2, −1, 0, 1, 2, and 3, which is a total of 8 integers.

The correct answer is B.
**fastest_path:** −9 < 2x + 1 < 9 → −5 < x < 4; the integers −4 through 3 give 8 values.
**common_trap:** Counting the excluded endpoints −5 or 4.
**mistake_a:** 7 drops one integer from the range.
**mistake_c:** 9 includes one boundary (e.g., x = 4 or x = −5).
**mistake_d:** 10 includes both excluded boundaries.
**mistake_e:** 11 over-counts, often by forgetting the strict bounds or the division by 2.
**takeaway:** Convert |expr| < k to −k < expr < k, solve, and count interior integers only.
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
**hint_nudge:** A line is pinned down by two unknowns, a and b — ask how many independent facts each statement supplies.
**hint_strategy:** Each statement is one linear equation in a and b; one alone leaves f(5) undetermined, so test whether the two together pin both constants.
**hint_setup:** (1) gives a + b = 7 and (2) gives 3a + b = 13 — neither alone fixes a and b. Now consider them together.
**explanation:** The governing principle is that a linear function f(x) = ax + b is completely determined precisely when its two unknown constants, a and b, are both known; computing any particular value such as f(5) therefore requires enough information to fix both constants.

Let a and b denote the unknown constants, so that f(x) = ax + b. We then have f(5) = 5a + b. Determining f(5) reduces to determining a and b.

Consider Statement (1) alone. The condition f(1) = 7 translates into a(1) + b = 7, that is, a + b = 7. This is a single linear equation in the two unknowns a and b, and it admits infinitely many solution pairs. For instance, a = 3 and b = 4 satisfy it, giving f(5) = 19, while a = 4 and b = 3 also satisfy it, giving f(5) = 23. Since f(5) is not uniquely determined, Statement (1) alone is not sufficient.

Consider Statement (2) alone. The condition f(3) = 13 translates into a(3) + b = 13, that is, 3a + b = 13. This too is a single linear equation in the two unknowns a and b and admits infinitely many solution pairs. For instance, a = 3 and b = 4 satisfy it, giving f(5) = 19, while a = 4 and b = 1 also satisfy it, giving f(5) = 21. Since f(5) is not uniquely determined, Statement (2) alone is not sufficient.

Consider both statements together. We have the system a + b = 7 and 3a + b = 13. Subtracting the first equation from the second eliminates b: (3a + b) - (a + b) = 13 - 7, which gives 2a = 6, so a = 3. Substituting a = 3 into a + b = 7 gives 3 + b = 7, so b = 4. The two equations are linearly independent, so they determine a and b uniquely. Hence f(5) = 5(3) + 4 = 15 + 4 = 19, a single determinate value. Both statements together are sufficient, but neither statement alone is sufficient.

The correct answer is C.
**fastest_path:** A linear function has two unknowns (a, b); each statement is one equation, so you need both independent points to fix f(5).
**common_trap:** Choosing D — one data point seems enough, but two unknowns need two equations.
**mistake_a:** (1) f(1) = 7 is one equation in a and b; f(5) is not determined.
**mistake_b:** (2) f(3) = 13 is likewise one equation; insufficient alone.
**mistake_d:** Neither alone pins both a and b, so "each alone" is wrong.
**mistake_e:** Together the equations are independent and solve to a = 3, b = 4, so they are sufficient — E understates this.
**takeaway:** A linear function f(x) = ax + b has two unknowns; two independent data points determine it.
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
**hint_nudge:** Name the smallest integer and write the other two in terms of it.
**hint_strategy:** Let the integers be n, n + 2, n + 4; translate “18 more than twice the smallest” into 2n + 18 and set it equal to their sum.
**hint_setup:** 3n + 6 = 2n + 18. Solve for n, then remember the question asks for the largest, n + 4.
**explanation:** This problem is solved by translating the verbal conditions into an algebraic equation and solving for the unknown. Consecutive even integers differ by 2, and the phrase "is more than" indicates addition to the smaller quantity.

Let n represent the smallest of the three integers. Since the integers are consecutive even integers, each successive integer exceeds the previous one by 2, so the three integers are n, n + 2, and n + 4.

The sum of the three integers is

n + (n + 2) + (n + 4) = 3n + 6.

The phrase "18 more than twice the smallest" means twice the smallest increased by 18, which is

2n + 18.

Because the sum equals this quantity, we set the two expressions equal:

3n + 6 = 2n + 18.

Subtracting 2n from both sides gives

n + 6 = 18,

and subtracting 6 from both sides gives

n = 12.

The largest of the three integers is n + 4 = 12 + 4 = 16.

The correct answer is D.
**fastest_path:** Let the smallest be n: 3n + 6 = 2n + 18 → n = 12; the largest is n + 4 = 16.
**common_trap:** Reporting the smallest (n = 12) instead of the largest (n + 4).
**mistake_a:** 10 uses consecutive (not consecutive-even) spacing or mis-solves for n.
**mistake_b:** 12 is the smallest integer n, not the largest.
**mistake_c:** 14 is the middle integer n + 2.
**mistake_e:** 18 comes from an arithmetic slip giving n = 14.
**takeaway:** Define the smallest as n, but answer the exact one requested — here the largest, n + 4.
**related_reading:** reading-quant-05-word-problems


---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Symmetric Sums

Let x, y, and z be positive real numbers with x + y + z = 12 and xy + yz + zx = 39. What is the value of x² + y² + z²?

- A) 48
- B) 66
- C) 72
- D) 78
- E) 105

**answer:** B
**hint_nudge:** The square of the sum links exactly the quantities you were given to the one you want.
**hint_strategy:** Use (x + y + z)² = x² + y² + z² + 2(xy + yz + zx) and solve for the sum of squares.
**hint_setup:** 12² = (x² + y² + z²) + 2(39), so 144 = S + 78. Solve for S.
**explanation:** This problem is solved using the symmetric-sum identity that relates the square of a sum to the sum of squares and the sum of pairwise products. For any three real numbers, (x + y + z)² = x² + y² + z² + 2(xy + yz + zx). This identity allows the sum of squares to be isolated without determining the individual values of x, y, and z.

Let S denote the quantity we seek, so that S = x² + y² + z². The given information states that x + y + z = 12 and xy + yz + zx = 39.

We begin by squaring the first equation:
(x + y + z)² = 12² = 144.

We then expand the left side using the identity:
144 = (x² + y² + z²) + 2(xy + yz + zx).

Substituting the known value of the pairwise sum gives:
144 = S + 2(39).

We compute the product:
2(39) = 78.

Thus 144 = S + 78, and solving for S yields:
S = 144 − 78 = 66.

The correct answer is B.
**fastest_path:** x² + y² + z² = (x + y + z)² − 2(xy + yz + zx) = 144 − 2(39) = 66.
**common_trap:** Forgetting the factor of 2 on the pairwise-product term.
**mistake_a:** 48 mis-squares 12 or subtracts the wrong multiple of 39.
**mistake_c:** 72 subtracts 39 once (144 − 39 − ...) rather than 2·39.
**mistake_d:** 78 reports the cross term 2(39) itself, not the sum of squares.
**mistake_e:** 105 subtracts 39 from 144, omitting the factor of 2.
**takeaway:** (x + y + z)² = Σx² + 2Σxy; isolate Σx² by subtracting twice the pairwise sum.
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
**hint_nudge:** Both sides are non-negative, so you can square the inequality and skip all the sign casework.
**hint_strategy:** Square both sides, move everything to one side, and factor the difference of squares into (sum)(difference) < 0.
**hint_setup:** (2x − 5)² − (x − 8)² < 0 factors as (x + 3)(3x − 13) < 0; the solution lies strictly between the two roots.
**explanation:** Because both sides of the inequality are absolute values, both are non-negative. Squaring a comparison between two non-negative quantities preserves the direction of the inequality, so we may square both sides and avoid casework on the signs of the expressions inside the absolute-value bars.

Let x denote the integer we seek. The condition |2x - 5| < |x - 8| becomes (2x - 5)^2 < (x - 8)^2, which we rewrite as (2x - 5)^2 - (x - 8)^2 < 0.

The left side is a difference of two squares, so it factors as the product of a difference and a sum:

[(2x - 5) - (x - 8)] * [(2x - 5) + (x - 8)] < 0.

We simplify each factor. The first factor is (2x - 5) - (x - 8) = 2x - 5 - x + 8 = x + 3. The second factor is (2x - 5) + (x - 8) = 3x - 13. The inequality is therefore (x + 3)(3x - 13) < 0.

A product of two factors is negative precisely when the factors have opposite signs, which occurs for values of x strictly between the two roots of the product. The roots are found by setting each factor equal to zero: x + 3 = 0 gives x = -3, and 3x - 13 = 0 gives x = 13/3. Hence the solution set is -3 < x < 13/3.

Since 13/3 = 4.33..., the integers strictly greater than -3 and strictly less than 13/3 are -2, -1, 0, 1, 2, 3, and 4. Counting these gives 7 integer values.

The correct answer is C.
**fastest_path:** Square both sides (both nonnegative): (2x−5)² < (x−8)² → (x+3)(3x−13) < 0 → −3 < x < 13/3; integers −2 through 4 = 7.
**common_trap:** Squaring without noticing both sides are nonnegative, or mishandling the difference of squares.
**mistake_a:** 5 under-counts the interval (−3, 13/3).
**mistake_b:** 6 drops one integer, usually x = 4 (since 13/3 ≈ 4.33).
**mistake_d:** 8 includes the excluded endpoint x = −3.
**mistake_e:** 9 over-counts by including both endpoints.
**takeaway:** When both sides are absolute values, squaring is safe and turns |A| < |B| into a clean factorable inequality.
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
**hint_nudge:** Write out a few consecutive differences and watch what cancels.
**hint_strategy:** Telescope: a₁₀₀ equals a₁ plus all the amounts added from step 1 through step 99, which is a short arithmetic series.
**hint_setup:** a₁₀₀ = a₁ + (2 + 3 + ⋯ + 100) = 3 + (2 + 3 + ⋯ + 100). Use 1 + 2 + ⋯ + 100 = 5,050 and adjust for the missing 1.
**explanation:** When a sequence is defined by a recurrence that adds a known quantity at each step, the value of a later term can be found by telescoping: we write each successive difference and sum them so that the intermediate terms cancel, leaving the target term expressed in terms of the first term plus an arithmetic series.

Let a_n denote the nth term of the sequence. We are given that a_1 = 3 and that a_{n+1} = a_n + n + 1 for every integer n greater than or equal to 1. Setting n = 1, 2, 3, and so on, the recurrence produces the successive relations

a_2 = a_1 + 2,
a_3 = a_2 + 3,
a_4 = a_3 + 4,
...,
a_100 = a_99 + 100.

Adding these equations and canceling each interior term that appears on both sides, we obtain

a_100 = a_1 + (2 + 3 + 4 + ... + 100).

The expression in parentheses is the sum of the consecutive integers from 2 through 100. The sum of the consecutive integers from 1 through 100 equals (100)(101)/2 = 5,050. Because our series begins at 2 rather than at 1, we subtract the omitted first term:

2 + 3 + 4 + ... + 100 = 5,050 - 1 = 5,049.

Substituting this value and a_1 = 3 gives

a_100 = 3 + 5,049 = 5,052.

The correct answer is C.
**fastest_path:** a₁₀₀ = a₁ + (2 + 3 + ... + 100) = 3 + (5,050 − 1) = 3 + 5,049 = 5,052.
**common_trap:** Using the sum 1 + ... + 100 = 5,050 directly, forgetting the series starts at 2 and that a₁ = 3.
**mistake_a:** 5,050 is the sum 1 + ... + 100 alone, ignoring a₁ and the offset.
**mistake_b:** 5,051 forgets to subtract the omitted 1, or mis-adds a₁.
**mistake_d:** 5,100 mis-applies the n(n + 1)/2 formula.
**mistake_e:** 5,151 sums one term too many (an index error such as 1 + ... + 101).
**takeaway:** Telescoping gives a₁ plus a partial arithmetic series — check the series' starting index.
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
**hint_nudge:** You know the product of the roots (12) and their difference (1) — connect these through an identity.
**hint_strategy:** Use (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂ with r₁ + r₂ = −b and r₁r₂ = 12; both signs of b will satisfy the condition.
**hint_setup:** 1² = (−b)² − 4(12), so b² = 49. Don't discard the negative root.
**explanation:** For a quadratic equation of the form x² + bx + c = 0 with roots r₁ and r₂, Vieta's formulas state that the sum of the roots equals −b and the product of the roots equals c. The difference of the roots can then be obtained from the algebraic identity (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂, which expresses the squared difference entirely in terms of the sum and the product.

Let r₁ and r₂ denote the two roots of x² + bx + 12 = 0. Applying Vieta's formulas, we have r₁ + r₂ = −b and r₁r₂ = 12. We are given that the roots differ by 1, so r₁ − r₂ = 1, and therefore (r₁ − r₂)² = 1.

Substituting these expressions into the identity gives (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂, so 1 = (−b)² − 4(12). Since (−b)² = b², this simplifies to 1 = b² − 48. Adding 48 to both sides yields b² = 49.

Taking the square root of both sides, we obtain b = ±7. Both signs are admissible: when b = 7, the equation factors as (x + 3)(x + 4) = 0 with roots −3 and −4, which differ by 1; when b = −7, the equation factors as (x − 3)(x − 4) = 0 with roots 3 and 4, which also differ by 1. Hence the possible values of b are ±7.

The correct answer is C.
**fastest_path:** (r₁ − r₂)² = (r₁ + r₂)² − 4r₁r₂ → 1 = b² − 48 → b² = 49 → b = ±7.
**common_trap:** Reporting only +7 and dropping the negative value (or vice versa).
**mistake_a:** ±5 comes from b² = 25, mis-subtracting 4·12.
**mistake_b:** ±6 comes from b² = 36, an arithmetic slip on 1 + 48.
**mistake_d:** ±8 comes from b² = 64, over-adding the product term.
**mistake_e:** ±9 comes from b² = 81, mishandling 4·12 = 48.
**takeaway:** Use (r₁ − r₂)² = (sum)² − 4(product); both signs of b satisfy the difference condition.
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
**hint_nudge:** Moving toward each other means their speeds add into a single closing speed.
**hint_strategy:** Divide the 24-mile gap by the combined speed to get the travel time, then add that to the start time.
**hint_setup:** Closing speed = 3 + 5 = 8 mph, so time = 24 / 8 hours; add that to 8:00 AM.
**explanation:** When two objects travel toward each other along the same straight path, the rate at which the distance between them decreases is the sum of their individual speeds. This combined rate is the closing speed, and the time required for them to meet equals the total separating distance divided by that closing speed.

Let T represent the time, in hours, that elapses from the start until the two hikers meet. During this interval, Hiker X travels at 3 miles per hour and Hiker Y travels at 5 miles per hour. Because the hikers move toward each other, the sum of the distances they cover equals the full length of the trail, 24 miles. We translate this into an equation:

3T + 5T = 24.

Combining the like terms on the left gives

8T = 24.

The coefficient 8 is precisely the closing speed, 3 + 5 = 8 miles per hour. Dividing both sides of the equation by 8 yields

T = 24 / 8 = 3.

Thus the hikers meet 3 hours after they begin walking. Since they start at 8:00 AM, adding 3 hours places the meeting time at 11:00 AM.

The correct answer is C.
**fastest_path:** Closing speed is 3 + 5 = 8 mph; time = 24 ÷ 8 = 3 h; 8:00 AM + 3 h = 11:00 AM.
**common_trap:** Using one hiker's speed instead of the combined closing speed.
**mistake_a:** 10:00 AM uses a doubled speed or a 2-hour slip.
**mistake_b:** 10:30 AM comes from a non-integer time error (2.5 h).
**mistake_d:** 11:30 AM adds 3.5 h, mishandling 24 ÷ 8.
**mistake_e:** 12:00 noon uses only the slower hiker or a 4-hour error.
**takeaway:** For objects moving toward each other, add their speeds to get the closing rate.
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
**hint_nudge:** Factor the right-hand denominator — it is exactly the common denominator of the left side.
**hint_strategy:** Since x² − 9 = (x − 3)(x + 3), combine the left side over that denominator; with identical denominators you can just equate the numerators.
**hint_setup:** The left side becomes 2x / (x² − 9), so 2x = 12. Solve, then confirm the value doesn't make a denominator zero.
**explanation:** To solve a rational equation, we express the terms over a common denominator and then equate the resulting expressions. The key observation here is that the denominator on the right side factors: x² − 9 = (x − 3)(x + 3). This factorization is precisely the common denominator of the two fractions on the left side.

Let x denote the unknown value. We first combine the left side over the common denominator (x − 3)(x + 3):

1/(x − 3) + 1/(x + 3) = [(x + 3) + (x − 3)] / [(x − 3)(x + 3)].

Simplifying the numerator, (x + 3) + (x − 3) = 2x, and recognizing that (x − 3)(x + 3) = x² − 9, the left side becomes:

2x / (x² − 9).

The equation is therefore:

2x / (x² − 9) = 12 / (x² − 9).

Because both sides share the identical denominator x² − 9, and that denominator is nonzero for any admissible value of x, the two fractions are equal if and only if their numerators are equal:

2x = 12.

Dividing both sides by 2 gives:

x = 6.

Finally, we confirm that this value is admissible. Substituting x = 6 yields denominators x − 3 = 3 and x + 3 = 9, neither of which is zero, so x = 6 does not violate the domain of the original equation.

The correct answer is D.
**fastest_path:** Both sides share the denominator x² − 9, so equate numerators: 2x = 12 → x = 6 (and 6 is in the domain).
**common_trap:** Mis-combining the left fractions, or failing to check x against the excluded values ±3.
**mistake_a:** 3 makes a denominator zero (x − 3 = 0); it is excluded from the domain.
**mistake_b:** 4 comes from mis-combining the numerator (e.g., 2x = 8).
**mistake_c:** 5 comes from an arithmetic slip on 2x = 12.
**mistake_e:** 12 forgets to divide 2x = 12 by 2.
**takeaway:** Combine fractions over the common denominator, equate numerators, then verify no excluded value.
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
**explanation:** The function f is not given directly; it is defined only through the composition f(g(x)) = 6x − 1. Because this formula produces the value of f at g(x) rather than at x itself, evaluating f at a specific input requires first determining the value of x for which g(x) equals that input.

Let the target input be 4. We seek the value of x that satisfies g(x) = 4. Since g(x) = 3x − 2, this requires 3x − 2 = 4. Adding 2 to both sides gives 3x = 6, and dividing both sides by 3 gives x = 2.

With x = 2, we have g(2) = 4, so f(4) = f(g(2)). Substituting x = 2 into the composition formula f(g(x)) = 6x − 1 gives f(g(2)) = 6(2) − 1 = 12 − 1 = 11. Therefore f(4) = 11.

The correct answer is C.
**fastest_path:** Find x with g(x) = 4: 3x − 2 = 4 → x = 2; then f(4) = f(g(2)) = 6(2) − 1 = 11.
**common_trap:** Plugging 4 directly into 6x − 1 (giving 23) instead of first finding the right x.
**mistake_a:** 7 mis-solves g(x) = 4 or uses a wrong value of x.
**mistake_b:** 10 comes from a constant slip such as 6(2) − 2.
**mistake_d:** 13 uses x = 3 (mis-solving 3x − 2 = 4).
**mistake_e:** 23 plugs 4 directly into 6x − 1 — but 4 is g(x), not x.
**takeaway:** f(g(x)) gives f at g(x); to get f(4), first find the x that makes g(x) = 4.
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
**hint_nudge:** With a sum of two absolute values, the sign of each piece flips at a “critical point.”
**hint_strategy:** Find where each expression hits zero (x = −2/3 and x = 4), break the line into intervals, drop the bars with the correct sign on each, and solve the resulting linear inequalities.
**hint_setup:** On −2/3 ≤ x < 4 the sum is (3x + 2) + (4 − x) = 2x + 6 ≤ 10; handle the other intervals the same way, then collect the integers.
**explanation:** When an inequality contains a sum of absolute-value expressions, the governing method is to locate the critical points at which each expression changes sign, partition the real line into the resulting intervals, and on each interval rewrite the absolute values as ordinary linear expressions so that the inequality becomes a plain linear inequality that can be solved directly.

The two expressions are 3x + 2 and x - 4. We set each equal to zero to find the critical points. The expression 3x + 2 equals zero when x = -2/3, and the expression x - 4 equals zero when x = 4. These two values divide the real line into three intervals, which we examine in turn.

Let us first consider the interval x >= 4. Here both 3x + 2 and x - 4 are nonnegative, so the absolute values may be removed directly: (3x + 2) + (x - 4) = 4x - 2. The inequality becomes 4x - 2 <= 10, which gives 4x <= 12, and therefore x <= 3. Since this conclusion contradicts the assumption x >= 4, this interval contributes no solutions.

Next consider the interval -2/3 <= x < 4. Here 3x + 2 is nonnegative while x - 4 is negative, so |3x + 2| = 3x + 2 and |x - 4| = 4 - x. The sum is (3x + 2) + (4 - x) = 2x + 6. The inequality becomes 2x + 6 <= 10, which gives 2x <= 4, and therefore x <= 2. Intersecting this with the interval under consideration yields -2/3 <= x <= 2.

Finally consider the interval x < -2/3. Here both 3x + 2 and x - 4 are negative, so |3x + 2| = -(3x + 2) and |x - 4| = 4 - x. The sum is -(3x + 2) + (4 - x) = -4x + 2. The inequality becomes -4x + 2 <= 10, which gives -4x <= 8, and therefore x >= -2. Intersecting this with the interval under consideration yields -2 <= x < -2/3.

We now unite the solution sets from the three intervals. The first interval contributes nothing, the second contributes -2/3 <= x <= 2, and the third contributes -2 <= x < -2/3. Together these form the single continuous range -2 <= x <= 2. The integers satisfying this range are -2, -1, 0, 1, and 2, a total of five values.

The correct answer is C.
**fastest_path:** Critical points are −2/3 and 4; the binding region is −2 ≤ x ≤ 2, giving integers −2 through 2 = 5.
**common_trap:** Mishandling the sign of an absolute value on one of the intervals.
**mistake_a:** 3 drops two endpoints of the range.
**mistake_b:** 4 drops one endpoint (e.g., −2 or 2).
**mistake_d:** 6 adds an integer outside −2 ≤ x ≤ 2.
**mistake_e:** 7 over-counts by extending past the binding interval.
**takeaway:** For a sum of absolute values, partition at the critical points and solve a linear inequality on each piece.
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
**hint_nudge:** Build the coefficients from the roots, then be careful with the subtraction of a negative.
**hint_strategy:** Sum of roots = −b and product of roots = c; compute b and c, then form b − c.
**hint_setup:** 3 + (−5) = −b gives b = 2, and (3)(−5) = c gives c = −15. Now compute b − c, minding the double negative.
**explanation:** The relationship between the roots of a quadratic equation and its coefficients is given by Vieta's formulas. For a monic quadratic of the form x² + bx + c = 0, whose leading coefficient is 1, the sum of the two roots equals −b and the product of the two roots equals c.

Let the roots be r₁ = 3 and r₂ = −5, as given. Applying Vieta's formulas:

Sum of the roots: r₁ + r₂ = −b
3 + (−5) = −b
−2 = −b
b = 2

Product of the roots: r₁ · r₂ = c
(3)(−5) = c
c = −15

We are asked for the value of b − c. Substituting the values obtained:

b − c = 2 − (−15) = 2 + 15 = 17

The correct answer is D.
**fastest_path:** Sum of roots −b = 3 + (−5) = −2, so b = 2; product c = (3)(−5) = −15; b − c = 2 − (−15) = 17.
**common_trap:** Sign error on c, or computing b + c instead of b − c.
**mistake_a:** −17 negates the result, computing c − b.
**mistake_b:** −13 computes b + c = 2 + (−15).
**mistake_c:** 13 mis-signs c (treating it as +15) before subtracting.
**mistake_e:** 23 comes from an arithmetic slip combining b and c.
**takeaway:** With roots known, −b = sum and c = product; mind the double negative in b − c.
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
**hint_nudge:** Three critical points (1, 4, 7) split the line, and the middle stretch is where the sum is smallest.
**hint_strategy:** Test each interval by removing the bars with the right signs and solving the linear inequality, then take the union of the pieces.
**hint_setup:** On 1 ≤ x ≤ 4 the sum is 10 − x and on 4 ≤ x ≤ 7 it is x + 2; set each ≤ 8 to find the bounds, then count integers.
**explanation:** An expression that is a sum of absolute values can be analyzed by locating its critical points, the values at which each absolute-value term changes sign. The critical points partition the number line into regions; within each region every absolute value can be rewritten without bars, using a fixed sign, and the resulting linear inequality can be solved and intersected with that region.

Let x be the variable in the inequality |x − 1| + |x − 4| + |x − 7| ≤ 8. The three terms change sign at x = 1, x = 4, and x = 7, which divide the number line into four regions.

For x ≤ 1, all three quantities inside the bars are nonpositive, so the expression equals (1 − x) + (4 − x) + (7 − x) = 12 − 3x. The inequality 12 − 3x ≤ 8 gives −3x ≤ −4, hence x ≥ 4/3. This contradicts x ≤ 1, so this region contributes no solutions.

For 1 ≤ x ≤ 4, the first quantity is nonnegative and the other two are nonpositive, so the expression equals (x − 1) + (4 − x) + (7 − x) = 10 − x. The inequality 10 − x ≤ 8 gives x ≥ 2. Intersecting with 1 ≤ x ≤ 4 yields 2 ≤ x ≤ 4.

For 4 ≤ x ≤ 7, the first two quantities are nonnegative and the third is nonpositive, so the expression equals (x − 1) + (x − 4) + (7 − x) = x + 2. The inequality x + 2 ≤ 8 gives x ≤ 6. Intersecting with 4 ≤ x ≤ 7 yields 4 ≤ x ≤ 6.

For x ≥ 7, all three quantities are nonnegative, so the expression equals (x − 1) + (x − 4) + (x − 7) = 3x − 12. The inequality 3x − 12 ≤ 8 gives 3x ≤ 20, hence x ≤ 20/3, which is approximately 6.67. This contradicts x ≥ 7, so this region contributes no solutions.

The union of the two contributing intervals is 2 ≤ x ≤ 6. The integers satisfying this condition are 2, 3, 4, 5, and 6, which is 5 values.

The correct answer is C.
**fastest_path:** The binding region is 2 ≤ x ≤ 6 (from the middle two pieces), giving integers 2 through 6 = 5.
**common_trap:** Sign-handling errors when removing the absolute values on a piece.
**mistake_a:** 3 drops two of the five integers.
**mistake_b:** 4 drops one endpoint (e.g., 2 or 6).
**mistake_d:** 6 includes one integer outside the range.
**mistake_e:** 7 over-counts by mis-solving an interval's inequality.
**takeaway:** Three absolute-value terms create four regions; solve each and union the valid sub-intervals.
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
**explanation:** A system of two linear equations in two variables has infinitely many solutions precisely when the two equations represent the same line, which occurs when one equation is a nonzero scalar multiple of the other. In that case the coefficients of x, the coefficients of y, and the constant terms are all in the same ratio.

The given system is 3x + ky = 12 and 6x + 10y = 24. We compare the second equation with the first to determine the scalar relating them. Examining the x-coefficients, we have 6 = 2 times 3, and examining the constant terms, we have 24 = 2 times 12. Thus the second equation is the first equation multiplied by 2, provided the y-coefficients also satisfy this same factor of 2.

Equivalently, we may reduce the second equation by dividing every term by 2:

6x + 10y = 24
(6x + 10y) / 2 = 24 / 2
3x + 5y = 12

This reduced equation must be identical to the first equation, 3x + ky = 12, for the system to describe a single line. The x-coefficients agree, since 3 = 3, and the constant terms agree, since 12 = 12. Matching the y-coefficients gives k = 5.

The correct answer is C.
**fastest_path:** Reduce 6x + 10y = 24 to 3x + 5y = 12; matching it against 3x + ky = 12 gives k = 5.
**common_trap:** Choosing k to make the lines parallel-but-distinct (no solution) instead of identical (infinitely many).
**mistake_a:** 2 reports the scalar factor (×2) as k rather than matching the y-coefficient.
**mistake_b:** 4 comes from mis-reducing 10 ÷ 2 as 4.
**mistake_d:** 6 leaves the y-coefficient unreduced or mis-divides.
**mistake_e:** 10 reports the unreduced coefficient 10 directly.
**takeaway:** Infinitely many solutions ⇒ the equations are identical after scaling; match every coefficient ratio.
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
**hint_nudge:** Solve each condition separately, then keep only the x-values that satisfy all three at once.
**hint_strategy:** Reduce each condition to a simple x-range — including rewriting |2x − 1| < 7 as a double inequality — then intersect them.
**hint_setup:** The conditions give x > −3, x ≤ 7, and −3 < x < 4; the third is the tightest. Count the integers inside it.
**explanation:** To determine how many integers satisfy a system of inequalities, we solve each inequality independently, intersect the resulting solution sets, and then count the integers that lie in the common region. We let x denote the integer in question.

We begin with the first condition, 2x + 1 > -5. Subtracting 1 from both sides gives 2x > -6, and dividing both sides by 2 gives x > -3.

We next consider the second condition, x - 3 ≤ 4. Adding 3 to both sides gives x ≤ 7.

We finally consider the third condition, |2x - 1| < 7. An absolute-value inequality of the form |A| < b, where b is positive, is equivalent to the compound inequality -b < A < b. Applying this gives -7 < 2x - 1 < 7. Adding 1 to all three parts gives -6 < 2x < 8, and dividing all three parts by 2 gives -3 < x < 4.

We now intersect the three solution sets: x > -3, x ≤ 7, and -3 < x < 4. The third condition, -3 < x < 4, is the most restrictive, since every value satisfying -3 < x < 4 already satisfies both x > -3 and x ≤ 7. The combined solution set is therefore -3 < x < 4.

The integers strictly greater than -3 and strictly less than 4 are -2, -1, 0, 1, 2, and 3. Counting these gives six integer values.

The correct answer is C.
**fastest_path:** The tightest condition |2x − 1| < 7 gives −3 < x < 4; the integers −2 through 3 = 6 (the other two conditions are looser).
**common_trap:** Counting endpoints, or letting a looser condition (x ≤ 7) override the binding one.
**mistake_a:** 4 over-restricts, dropping two integers.
**mistake_b:** 5 drops one integer from −2 through 3.
**mistake_d:** 7 includes one excluded endpoint (x = 4 or x = −3).
**mistake_e:** 8 includes both endpoints or ignores the strict bounds.
**takeaway:** With several constraints, find the most restrictive interval, then count its interior integers.
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
**hint_nudge:** The target shares the entire x² − 10x block with the given equation — don't solve for x.
**hint_strategy:** Isolate x² − 10x from the given equation and substitute it into the target expression.
**hint_setup:** From x² − 10x + 21 = 0 you get x² − 10x = −21; now add 25.
**explanation:** This problem can be solved by recognizing that the target expression shares a common quadratic and linear portion with the given equation, so it is unnecessary to solve for the individual values of x. The governing method is to isolate the recurring portion of the expression and substitute its value directly.

Let the given equation be x² − 10x + 21 = 0. Subtracting 21 from both sides isolates the recurring portion:

x² − 10x = −21.

The target expression is x² − 10x + 25. Because it contains the same x² − 10x, we substitute the value just found:

x² − 10x + 25 = (−21) + 25 = 4.

The correct answer is A.
**fastest_path:** From the given equation, x² − 10x = −21, so x² − 10x + 25 = −21 + 25 = 4 — no need to solve for x.
**common_trap:** Solving for x (= 3 or 7) and re-substituting, which invites arithmetic errors.
**mistake_b:** 5 comes from a slip such as −21 + 26 or mis-isolating the constant.
**mistake_c:** 6 mis-adds (e.g., −21 + 27) or mishandles the +25.
**mistake_d:** 10 echoes the linear coefficient instead of evaluating the expression.
**mistake_e:** 25 reports the added constant alone, ignoring x² − 10x = −21.
**takeaway:** When the target shares the variable terms of a given equation, substitute the whole block directly.
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
**hint_nudge:** “Two distinct real roots” is a discriminant question — compute it as a function of n first.
**hint_strategy:** Find the discriminant; if it simplifies to a perfect square in n, the condition reduces to a simple statement about n that you can test against each statement.
**hint_setup:** The discriminant is (n + 1)² − 4n = (n − 1)², positive exactly when n ≠ 1. Now check each statement against “n ≠ 1.”
**explanation:** A quadratic equation of the form ax² + bx + c = 0 with a ≠ 0 has two distinct real roots if and only if its discriminant, Δ = b² − 4ac, is strictly positive. We therefore evaluate the discriminant of the given equation as a function of n and determine whether each statement forces it to be positive.

Let the equation be x² − (n + 1)x + n = 0, so that a = 1, b = −(n + 1), and c = n. Computing the discriminant, we have Δ = b² − 4ac = (n + 1)² − 4(1)(n) = n² + 2n + 1 − 4n = n² − 2n + 1 = (n − 1)². The equation has two distinct real roots precisely when (n − 1)² > 0, which holds if and only if n ≠ 1. The question thus reduces to determining whether n ≠ 1.

Statement (1) states that n > 1. Every value of n satisfying n > 1 also satisfies n ≠ 1, so (n − 1)² > 0 and the equation always has two distinct real roots. The answer to the question is a definite Yes; statement (1) is sufficient.

Statement (2) states that n is odd. Consider n = 1, which is odd: then Δ = (1 − 1)² = 0, so the equation x² − 2x + 1 = (x − 1)² = 0 has a single repeated root, and the answer is No. Now consider n = 3, which is also odd: then Δ = (3 − 1)² = 4 > 0, so the equation has two distinct real roots, and the answer is Yes. Because the answer can be either No or Yes, statement (2) is not sufficient.

Since statement (1) alone is sufficient and statement (2) alone is not, statement (1) ALONE is sufficient but statement (2) alone is not.

The correct answer is A.
**fastest_path:** The discriminant is (n + 1)² − 4n = (n − 1)², which is > 0 exactly when n ≠ 1; the question reduces to "is n ≠ 1?"
**common_trap:** Computing the discriminant carelessly and missing that it is the perfect square (n − 1)².
**mistake_b:** (2) n odd allows n = 1 (repeated root, No) or n = 3 (two roots, Yes), so it is not sufficient.
**mistake_c:** (1) already settles it, so C wrongly claims both statements are needed.
**mistake_d:** (2) alone is insufficient (n = 1 vs n = 3 differ), so "each alone" fails.
**mistake_e:** (1) n > 1 forces n ≠ 1, giving a definite Yes — so the statements are not jointly insufficient.
**takeaway:** Reduce the discriminant first; "two distinct roots" ⇔ discriminant > 0, here ⇔ n ≠ 1.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q35
**difficulty:** Easy
**type:** Problem Solving
**topic:** Functions

The function f is defined by f(x) = 3x − 4 for all real numbers x. If f(a) = 11, what is the value of a?

- A) 3
- B) 4
- C) 5
- D) 7
- E) 11

**answer:** C
**explanation:** We are given the rule f(x) = 3x − 4 together with the value f(a) = 11. Substituting a for x in the rule gives 3a − 4 = 11. Adding 4 to both sides yields 3a = 15, and dividing both sides by 3 gives a = 5.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the first term is 4 and each term after the first is 6 greater than the preceding term. What is the fifth term of the sequence?

- A) 24
- B) 28
- C) 30
- D) 32
- E) 34

**answer:** B
**explanation:** In an arithmetic sequence the nth term equals the first term plus (n − 1) times the common difference: a_n = a_1 + (n − 1)d. Here a_1 = 4, d = 6, and n = 5, so a_5 = 4 + (5 − 1)(6) = 4 + 24 = 28. Equivalently, count up four steps of 6 from the first term: 4, 10, 16, 22, 28.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Function Composition

The functions f and g are defined by f(x) = 2x + 1 and g(x) = x² − 3. What is the value of f(g(2))?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 9

**answer:** B
**explanation:** A composition is evaluated from the inside out. First evaluate the inner function at x = 2: g(2) = 2² − 3 = 4 − 3 = 1. Then apply f to that result: f(1) = 2(1) + 1 = 3. The common error is to apply the two functions in the wrong order; always resolve the innermost expression first.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences — Geometric

In a geometric sequence, the first term is 5 and each term after the first is twice the preceding term. What is the sum of the first four terms?

- A) 40
- B) 55
- C) 75
- D) 80
- E) 150

**answer:** C
**explanation:** Each term is twice the one before it, so the first four terms are 5, 10, 20, and 40. Their sum is 5 + 10 + 20 + 40 = 75. The geometric-series formula gives the same value: with first term 5, ratio 2, and four terms, the sum is 5 · (2⁴ − 1) / (2 − 1) = 5 · 15 = 75.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions — Custom Operator

For all real numbers a and b, the operation ◇ is defined by a ◇ b = a² − b. What is the value of (3 ◇ 1) ◇ 2?

- A) 6
- B) 14
- C) 50
- D) 62
- E) 78

**answer:** D
**explanation:** A custom operator is shorthand for the rule it is given, so we resolve the innermost expression first. Inside the parentheses, 3 ◇ 1 = 3² − 1 = 9 − 1 = 8. We then apply the operator again to this result and 2: 8 ◇ 2 = 8² − 2 = 64 − 2 = 62. The operation is not associative, so the grouping is decisive — evaluate the parentheses before doing anything else.

The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences — Recursive

A sequence is defined by a₁ = 2 and a_(n+1) = 2a_n − 1 for every positive integer n. What is the value of a₄?

- A) 7
- B) 8
- C) 9
- D) 11
- E) 15

**answer:** C
**explanation:** A recursive rule produces each term from the one before it, so we generate the terms in order starting from a₁ = 2. Then a₂ = 2(2) − 1 = 3, a₃ = 2(3) − 1 = 5, and a₄ = 2(5) − 1 = 9. The trap is to lose track of how many times the rule is applied; advancing carefully from a₁ to a₄ is exactly three applications. As a check, these terms follow the pattern a_n = 2^(n − 1) + 1, which gives a₄ = 2³ + 1 = 9.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q41
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations

If 5x - 8 = 3x + 14, what is the value of x?

- A) 3
- B) 8
- C) 11
- D) -11
- E) 22

**answer:** C
**explanation:** Starting from 5x - 8 = 3x + 14, subtracting 3x from both sides gives 2x - 8 = 14. Adding 8 to both sides gives 2x = 22, so x = 11. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q42
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations

A number n satisfies the equation (n/4) + 7 = 13. What is the value of n?

- A) 1.5
- B) 6
- C) 24
- D) 52
- E) 80

**answer:** C
**explanation:** Beginning with (n/4) + 7 = 13, subtracting 7 from both sides gives n/4 = 6. Multiplying both sides by 4 gives n = 24. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q43
**difficulty:** Easy
**type:** Problem Solving
**topic:** Systems of Equations

If x + y = 20 and x - y = 6, what is the value of x?

- A) 7
- B) 13
- C) 14
- D) 20
- E) 26

**answer:** B
**explanation:** Adding the two equations, (x + y) + (x - y) = 20 + 6, yields 2x = 26, so x = 13. Subtracting the equations instead would give 2y = 14, that is y = 7, a common distractor. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Linear Equations

If 3(2x - 5) - 4(x - 2) = 11, what is the value of x?

- A) 3
- B) 4.5
- C) 9
- D) 13
- E) 18

**answer:** C
**explanation:** Expanding gives 3(2x - 5) = 6x - 15 and 4(x - 2) = 4x - 8. The equation becomes 6x - 15 - (4x - 8) = 11, that is 6x - 15 - 4x + 8 = 11. Combining like terms gives 2x - 7 = 11, so 2x = 18 and x = 9. Mishandling the sign on the -8 term, writing 6x - 15 - 4x - 8 = 11, would give 2x = 34 and x = 17, an off-list error to avoid. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

At a stationery shop, 4 notebooks and 3 pens cost 34 dollars, while 2 notebooks and 5 pens cost 24 dollars. What is the cost, in dollars, of one notebook?

- A) 3
- B) 4
- C) 5
- D) 7
- E) 9

**answer:** D
**explanation:** Let n be the cost of a notebook and p the cost of a pen. Then 4n + 3p = 34 and 2n + 5p = 24. Multiplying the second equation by 2 gives 4n + 10p = 48. Subtracting the first equation from this eliminates n: (4n + 10p) - (4n + 3p) = 48 - 34, so 7p = 14 and p = 2. Substituting into 2n + 5p = 24 gives 2n + 10 = 24, so 2n = 14 and n = 7. A check confirms 4(7) + 3(2) = 34 and 2(7) + 5(2) = 24. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q46
**difficulty:** Medium
**type:** Problem Solving
**topic:** Linear Equations

If (x - 5)/3 - (x + 1)/2 = -1, what is the value of x?

- A) -7
- B) -4
- C) 1
- D) 4
- E) 7

**answer:** A
**explanation:** Multiplying every term by 6 clears the denominators: 6 * (x - 5)/3 = 2(x - 5) = 2x - 10, and 6 * (x + 1)/2 = 3(x + 1) = 3x + 3, and 6 * (-1) = -6. The equation becomes (2x - 10) - (3x + 3) = -6, that is 2x - 10 - 3x - 3 = -6. Combining like terms gives -x - 13 = -6, so -x = 7 and x = -7. Substituting back gives (-7 - 5)/3 - (-7 + 1)/2 = -12/3 - (-6/2) = -4 + 3 = -1, confirming the result. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q47
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

The sum of two numbers is 54. The larger number is 6 more than twice the smaller number. What is the larger number?

- A) 16
- B) 22
- C) 32
- D) 38
- E) 42

**answer:** D
**explanation:** Let s be the smaller number and L the larger. Then s + L = 54 and L = 2s + 6. Substituting the second into the first gives s + (2s + 6) = 54, so 3s + 6 = 54, hence 3s = 48 and s = 16. Then L = 54 - 16 = 38. Reporting the smaller value s = 16 instead of L is a common error. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q48
**difficulty:** Medium
**type:** Problem Solving
**topic:** Linear Equations

A taxi charges a fixed base fare plus a constant rate per mile. A 4-mile ride costs 14 dollars and a 9-mile ride costs 29 dollars. How much, in dollars, does a 12-mile ride cost?

- A) 32
- B) 36
- C) 38
- D) 40
- E) 44

**answer:** C
**explanation:** Let b be the base fare and r the rate per mile. Then b + 4r = 14 and b + 9r = 29. Subtracting the first from the second gives 5r = 15, so r = 3 dollars per mile. Then b = 14 - 4(3) = 2 dollars. A 12-mile ride costs b + 12r = 2 + 12(3) = 2 + 36 = 38 dollars. Forgetting the base fare gives 36, a distractor. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Systems of Equations

A jar contains only nickels (5 cents) and dimes (10 cents). There are 40 coins in total with a combined value of 285 cents. How many dimes are in the jar?

- A) 17
- B) 19
- C) 21
- D) 23
- E) 25

**answer:** A
**explanation:** Let n be the number of nickels and d the number of dimes. Then n + d = 40 and 5n + 10d = 285. Dividing the second equation by 5 gives n + 2d = 57. Subtracting the first equation (n + d = 40) from this gives d = 17. Solving for n = 23 and reporting it as the number of dimes is the intended trap. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Linear Equations

For a certain value of k, the equation 3(kx - 2) = 5x + 9 has no solution. What is the value of k?

- A) 5/3
- B) 3/5
- C) 2
- D) 3
- E) 5

**answer:** A
**explanation:** Expanding the left side gives 3(kx - 2) = 3kx - 6. The equation becomes 3kx - 6 = 5x + 9, or (3k - 5)x = 15. A linear equation of the form (3k - 5)x = 15 has no solution precisely when the coefficient of x is zero while the constant is nonzero, that is when 3k - 5 = 0. Thus 3k = 5 and k = 5/3. Choosing 3/5 inverts the fraction, a common slip. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Systems of Equations

Two solutions, one 30% acid and the other 70% acid, are mixed to produce 20 liters of a 45% acid solution. How many liters of the 30% solution are used?

- A) 7.5
- B) 8
- C) 10
- D) 12.5
- E) 15

**answer:** D
**explanation:** Let x be the liters of 30% solution and y the liters of 70% solution. Then x + y = 20 and 0.30x + 0.70y = 0.45(20) = 9. From the first equation y = 20 - x. Substituting gives 0.30x + 0.70(20 - x) = 9, that is 0.30x + 14 - 0.70x = 9, so -0.40x = -5 and x = 12.5 liters. Solving for y instead gives 7.5, the intended distractor. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q52
**difficulty:** Hard
**type:** Problem Solving
**topic:** Systems of Equations

A two-digit number has digits whose sum is 11. When the digits are reversed, the new number is 27 greater than the original number. What is the original number?

- A) 29
- B) 38
- C) 47
- D) 56
- E) 74

**answer:** C
**explanation:** Let the tens digit be t and the units digit be u, so the number equals 10t + u. We are given t + u = 11 and that reversing yields 10u + t = (10t + u) + 27. The second equation simplifies to 10u + t - 10t - u = 27, that is 9u - 9t = 27, so u - t = 3. Combining u - t = 3 with t + u = 11 by addition gives 2u = 14, so u = 7 and t = 4. The original number is 10(4) + 7 = 47. Reporting the reversed number 74 is the planted trap. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q53
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factoring

What is the value of 87^2 − 13^2 ?

- A) 6,400
- B) 7,400
- C) 8,600
- D) 9,000
- E) 10,000

**answer:** B
**explanation:** We apply the difference-of-squares identity a^2 − b^2 = (a − b)(a + b) rather than squaring each number. Here a = 87 and b = 13, so 87^2 − 13^2 = (87 − 13)(87 + 13) = 74 · 100 = 7,400. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q54
**difficulty:** Easy
**type:** Problem Solving
**topic:** Quadratics

If x^2 − 13x + 40 = 0, what is the greater of the two solutions for x?

- A) 4
- B) 5
- C) 8
- D) 10
- E) 13

**answer:** C
**explanation:** We seek two numbers whose product is 40 and whose sum is 13, namely 5 and 8, so x^2 − 13x + 40 = (x − 5)(x − 8) = 0. The roots are x = 5 and x = 8, and the greater of the two is 8. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q55
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factoring

Which of the following is a complete factorization of 2x^2 + 7x + 3 ?

- A) (2x + 3)(x + 1)
- B) (2x + 1)(x + 3)
- C) (2x + 7)(x + 3)
- D) (x + 1)(x + 3)
- E) (2x − 1)(x − 3)

**answer:** B
**explanation:** We split the middle term using factors of 2 · 3 = 6 that add to 7, namely 1 and 6: 2x^2 + 7x + 3 = 2x^2 + x + 6x + 3 = x(2x + 1) + 3(2x + 1) = (2x + 1)(x + 3). Expanding confirms 2x^2 + 6x + x + 3 = 2x^2 + 7x + 3. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q56
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

The two solutions of the equation x^2 − 7x − 30 = 0 differ by how much?

- A) 7
- B) 10
- C) 13
- D) 17
- E) 30

**answer:** C
**explanation:** We look for two numbers with product −30 and sum 7, namely 10 and −3, so x^2 − 7x − 30 = (x − 10)(x + 3) = 0. The roots are x = 10 and x = −3, and they differ by 10 − (−3) = 13. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q57
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factoring

If (x − 5)(x + 2) = 18, which of the following could be the value of x?

- A) −4
- B) −2
- C) 3
- D) 5
- E) 9

**answer:** A
**explanation:** We expand the left side: (x − 5)(x + 2) = x^2 − 3x − 10. Setting this equal to 18 gives x^2 − 3x − 10 = 18, or x^2 − 3x − 28 = 0. Factoring, (x − 7)(x + 4) = 0, so x = 7 or x = −4. A common error is to set each original factor equal to 18; only x = −4 appears among the options. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q58
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If the equation x^2 − kx + 36 = 0 has exactly one distinct real solution, and k is positive, what is the value of k?

- A) 6
- B) 9
- C) 12
- D) 18
- E) 36

**answer:** C
**explanation:** A quadratic has exactly one distinct solution when its discriminant is zero: k^2 − 4(36) = 0, so k^2 = 144 and k = ±12. Since k is positive, k = 12, giving x^2 − 12x + 36 = (x − 6)^2 = 0 with the single root x = 6. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q59
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If 3x^2 − 10x − 8 = 0, what is the product of the two solutions?

- A) −8/3
- B) −4/3
- C) −10/3
- D) 8/3
- E) 4

**answer:** A
**explanation:** For a quadratic ax^2 + bx + c = 0, the product of the roots equals c/a. Here a = 3 and c = −8, so the product is −8/3. (Factoring confirms 3x^2 − 10x − 8 = (3x + 2)(x − 4), with roots −2/3 and 4, whose product is −8/3.) The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q60
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

The roots of x^2 − 9x + 20 = 0 are r and s. What is the value of 1/r + 1/s ?

- A) 1/20
- B) 9/20
- C) 20/9
- D) 9/5
- E) 9

**answer:** B
**explanation:** By Vieta's formulas, r + s = 9 and rs = 20. We combine the reciprocals over a common denominator: 1/r + 1/s = (r + s)/(rs) = 9/20. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q61
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factoring

Two positive integers a and b satisfy a + b = 15 and a − b = 4. What is the value of a^2 − b^2 ?

- A) 11
- B) 19
- C) 56
- D) 60
- E) 225

**answer:** D
**explanation:** We avoid solving for a and b individually by using the factorization a^2 − b^2 = (a + b)(a − b). Substituting the given sums directly, a^2 − b^2 = (15)(4) = 60. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q62
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If r and s are the roots of x^2 − x − 6 = 0, what is the value of r^2 + s^2 ?

- A) 1
- B) 5
- C) 7
- D) 13
- E) 37

**answer:** D
**explanation:** By Vieta's formulas, r + s = 1 and rs = −6. We use the identity r^2 + s^2 = (r + s)^2 − 2rs = (1)^2 − 2(−6) = 1 + 12 = 13. A common error is to drop the sign and compute 1 − 12 = −11, or to forget the −2rs term entirely. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q63
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics

For the equation x^2 + px + 5 = 0, the two real solutions differ by 4. If p is positive, what is the value of p?

- A) 1
- B) 4
- C) 6
- D) 9
- E) 21

**answer:** C
**explanation:** Let the roots be r and s. By Vieta's formulas, r + s = −p and rs = 5. The squared difference satisfies (r − s)^2 = (r + s)^2 − 4rs = p^2 − 20. Since the roots differ by 4, (r − s)^2 = 16, so p^2 − 20 = 16, giving p^2 = 36 and p = ±6. As p is positive, p = 6. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q64
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics

In the equation x^2 − (k + 3)x + (k + 5) = 0, one of the solutions is x = 2. What is the other solution?

- A) −4
- B) −2
- C) 3
- D) 4
- E) 5

**answer:** D
**explanation:** Since x = 2 is a root, substituting gives 4 − 2(k + 3) + (k + 5) = 0, which simplifies to 4 − 2k − 6 + k + 5 = 0, or 3 − k = 0, so k = 3. The equation becomes x^2 − 6x + 8 = 0, which factors as (x − 2)(x − 4) = 0. The other solution is therefore x = 4. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q65
**difficulty:** Easy
**type:** Problem Solving
**topic:** Inequalities

How many integer values of x satisfy the compound inequality -3 ≤ 5 - 2x < 7 ?

- A) 4
- B) 5
- C) 6
- D) 7
- E) Infinitely many

**answer:** B
**explanation:** We split the compound inequality into two parts. From 5 - 2x ≥ -3 we subtract 5 to get -2x ≥ -8, and dividing by -2 (which reverses the inequality) gives x ≤ 4. From 5 - 2x < 7 we subtract 5 to get -2x < 2, and dividing by -2 gives x > -1. Combining, -1 < x ≤ 4. The integers in this range are 0, 1, 2, 3, and 4, a total of 5 values. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q66
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value Inequalities

If |2x - 3| = 7, what is the sum of all possible values of x ?

- A) -2
- B) 3
- C) 5
- D) 7
- E) 10

**answer:** B
**explanation:** An absolute-value equation |2x - 3| = 7 yields two cases. In the first case, 2x - 3 = 7, so 2x = 10 and x = 5. In the second case, 2x - 3 = -7, so 2x = -4 and x = -2. The sum of the two solutions is 5 + (-2) = 3. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q67
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value Inequalities

How many integers x satisfy |x + 4| < 6 ?

- A) 9
- B) 10
- C) 11
- D) 12
- E) 13

**answer:** C
**explanation:** The inequality |x + 4| < 6 is equivalent to -6 < x + 4 < 6. Subtracting 4 from all three parts gives -10 < x < 2. The integers strictly between -10 and 2 are -9, -8, -7, -6, -5, -4, -3, -2, -1, 0, and 1, which is 11 integers. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q68
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

What is the greatest integer x for which 3(x - 2) > 5x + 4 ?

- A) -7
- B) -6
- C) -5
- D) -4
- E) -3

**answer:** B
**explanation:** We expand the left side: 3(x - 2) = 3x - 6, so the inequality is 3x - 6 > 5x + 4. Subtracting 5x from both sides gives -2x - 6 > 4, and adding 6 gives -2x > 10. Dividing by -2 reverses the inequality, yielding x < -5. The greatest integer strictly less than -5 is -6. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q69
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value Inequalities

Which of the following values of x is NOT a solution of |3 - x| ≥ 5 ?

- A) -7
- B) -2
- C) 0
- D) 8
- E) 10

**answer:** C
**explanation:** The inequality |3 - x| ≥ 5 splits into two cases. From 3 - x ≥ 5 we get -x ≥ 2, so x ≤ -2. From 3 - x ≤ -5 we get -x ≤ -8, so x ≥ 8. The solution set is therefore x ≤ -2 or x ≥ 8. Among the options, -7 and -2 satisfy x ≤ -2, while 8 and 10 satisfy x ≥ 8. The value 0 lies in neither region, so it is not a solution. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q70
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

If m < 0 and n > 0, which of the following expressions must be positive?

- A) m + n
- B) m - n
- C) mn
- D) m/n
- E) n - m

**answer:** E
**explanation:** We test each expression using the given signs. Since m is negative and n is positive, m + n could be positive, negative, or zero depending on magnitudes. The expression m - n subtracts a positive from a negative, giving a negative result. The product mn (negative times positive) is negative, and the quotient m/n is likewise negative. Finally, n - m subtracts a negative number from a positive number, equivalent to n + |m|, which is always positive. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q71
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value Inequalities

How many integers x satisfy |2x + 1| ≤ |x - 3| ?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**explanation:** Because both sides are nonnegative, we may square the inequality: (2x + 1)^2 ≤ (x - 3)^2. Expanding gives 4x^2 + 4x + 1 ≤ x^2 - 6x + 9. Moving all terms to the left yields 3x^2 + 10x - 8 ≤ 0, which factors as (3x - 2)(x + 4) ≤ 0. The roots are x = 2/3 and x = -4, and since the parabola opens upward, the expression is nonpositive between the roots: -4 ≤ x ≤ 2/3. The integers in this interval are -4, -3, -2, -1, and 0, a total of 5. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q72
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value Inequalities

A loaded delivery van is legal on a certain bridge only if its weight w, in kilograms, satisfies |w - 1200| ≤ 150. What is the maximum legal weight, in kilograms?

- A) 1050
- B) 1200
- C) 1250
- D) 1350
- E) 1500

**answer:** D
**explanation:** The inequality |w - 1200| ≤ 150 is equivalent to -150 ≤ w - 1200 ≤ 150. Adding 1200 to all three parts gives 1050 ≤ w ≤ 1350. The maximum legal weight is therefore the upper bound, 1350 kilograms. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q73
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

How many integers x satisfy -2 < (4 - x)/3 < 2 ?

- A) 9
- B) 10
- C) 11
- D) 12
- E) Infinitely many

**answer:** C
**explanation:** We multiply all three parts of the inequality by 3 to clear the denominator: -6 < 4 - x < 6. Subtracting 4 from each part gives -10 < -x < 2. Multiplying through by -1 reverses both inequality signs, yielding -2 < x < 10. The integers strictly between -2 and 10 are -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, and 9, which is 11 integers. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q74
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inequalities

If 0 < a < 1, which of the following is the greatest?

- A) a^2
- B) a
- C) √a
- D) 1
- E) 1/a

**answer:** E
**explanation:** For a value a strictly between 0 and 1, raising a to a higher power makes it smaller, so a^2 < a, and taking a root makes it larger, so a < √a < 1. Dividing 1 by a number between 0 and 1 produces a result greater than 1, so 1/a > 1. The complete ordering is a^2 < a < √a < 1 < 1/a, making 1/a the greatest of the listed quantities. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q75
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value Inequalities

What is the sum of all values of x that satisfy |x - 2| + |x + 3| = 7 ?

- A) -7
- B) -3
- C) -1
- D) 1
- E) 7

**answer:** C
**explanation:** The expression |x - 2| + |x + 3| represents the total distance from x to the points 2 and -3 on the number line. For any x between -3 and 2 this sum equals the fixed gap of 5, which is less than 7, so the solutions lie outside that interval. To the right, x > 2 gives (x - 2) + (x + 3) = 2x + 1 = 7, so x = 3. To the left, x < -3 gives (2 - x) + (-3 - x) = -2x - 1 = 7, so x = -4. The sum of the solutions is 3 + (-4) = -1. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q76
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value Inequalities

How many integers x satisfy 7 - 2|x - 1| > 1 ?

- A) 3
- B) 4
- C) 5
- D) 6
- E) Infinitely many

**answer:** C
**explanation:** We isolate the absolute value by subtracting 7 from both sides: -2|x - 1| > -6. Dividing by -2 reverses the inequality, giving |x - 1| < 3. This is equivalent to -3 < x - 1 < 3, and adding 1 to each part yields -2 < x < 4. The integers strictly between -2 and 4 are -1, 0, 1, 2, and 3, a total of 5. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q77
**difficulty:** Easy
**type:** Problem Solving
**topic:** Functions

The function f is defined by f(x) = 3x - 5 for all real numbers x. What is the value of f(4)?

- A) -3
- B) -1
- C) 7
- D) 17
- E) 12

**answer:** C
**explanation:** Substituting x = 4 directly into the rule f(x) = 3x - 5 gives f(4) = 3(4) - 5 = 12 - 5 = 7. A value of -3 results from incorrectly computing 3(4 - 5), and 17 results from using 3(4) + 5 instead of subtracting. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q78
**difficulty:** Easy
**type:** Problem Solving
**topic:** Functions

For all numbers a and b, the operation ⊕ is defined by a ⊕ b = a² - 2b. What is the value of 5 ⊕ 3?

- A) -1
- B) 4
- C) 13
- D) 19
- E) 25

**answer:** D
**explanation:** By the definition, a is replaced with 5 and b with 3, so 5 ⊕ 3 = 5² - 2(3) = 25 - 6 = 19. A value of -1 comes from forgetting to square the first term, computing 5 - 2(3) = 5 - 6 = -1, and 25 comes from evaluating only a² and ignoring the -2b term. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q79
**difficulty:** Medium
**type:** Problem Solving
**topic:** Function Composition

The functions f and g are defined by f(x) = 3x - 4 and g(x) = x² + 1. What is the value of g(f(2))?

- A) 2
- B) 4
- C) 5
- D) 11
- E) 13

**answer:** C
**explanation:** The inner function is evaluated first: f(2) = 3(2) - 4 = 2. Then g is applied to this result: g(2) = 2² + 1 = 5. The value 11 results from reversing the order and computing f(g(2)) = f(5) = 15 - 4 = 11, while 2 results from finding f(2) = 2 but forgetting to apply g, and 4 comes from squaring without adding the trailing 1. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q80
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the first term is 7 and each term after the first is 4 greater than the preceding term. What is the 20th term of the sequence?

- A) 80
- B) 83
- C) 87
- D) 91
- E) 76

**answer:** B
**explanation:** For an arithmetic sequence, aₙ = a₁ + (n - 1)d with a₁ = 7 and d = 4. Thus a₂₀ = 7 + (20 - 1)(4) = 7 + 19(4) = 7 + 76 = 83. The value 87 is the common off-by-one error of using 20d instead of (20 - 1)d, giving 7 + 80, and 76 omits the first term entirely by computing only 19(4). The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q81
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences

In a geometric sequence, the first term is 3 and each term after the first is twice the preceding term. What is the 7th term of the sequence?

- A) 96
- B) 192
- C) 384
- D) 189
- E) 128

**answer:** B
**explanation:** For a geometric sequence, aₙ = a₁ · r^(n-1) with a₁ = 3 and r = 2. Thus a₇ = 3 · 2^(7-1) = 3 · 2⁶ = 3 · 64 = 192. The value 384 = 3 · 2⁷ comes from using the exponent n instead of n - 1, and 96 = 3 · 2⁵ comes from using the exponent n - 2. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q82
**difficulty:** Hard
**type:** Problem Solving
**topic:** Function Composition

For all real numbers x and y with x ≠ y, the operation # is defined by x # y = (x + y)/(x - y). What is the value of (10 # 6) # 2?

- A) 1.5
- B) 2
- C) 3
- D) 4
- E) 0.25

**answer:** C
**explanation:** The inner operation is evaluated first: 10 # 6 = (10 + 6)/(10 - 6) = 16/4 = 4. The operation is then applied again with this result and 2: 4 # 2 = (4 + 2)/(4 - 2) = 6/2 = 3. The value 1.5 results from grouping as 10 # (6 # 2), since 6 # 2 = 8/4 = 2 and then 10 # 2 = 12/8 = 1.5, an error in operation order. The value 4 stops after only the first step. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q83
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the first term is 5 and the common difference is 3. What is the sum of the 11th through the 20th terms, inclusive?

- A) 455
- B) 470
- C) 485
- D) 500
- E) 615

**answer:** C
**explanation:** Using aₙ = a₁ + (n - 1)d with a₁ = 5 and d = 3, the 11th term is a₁₁ = 5 + 10(3) = 35 and the 20th term is a₂₀ = 5 + 19(3) = 62. There are 20 - 11 + 1 = 10 terms, so the sum equals (number of terms)/2 × (first + last) = 10/2 × (35 + 62) = 5 × 97 = 485. The value 455 arises from instead summing the 10th through 19th terms (an off-by-one shift), since a₁₀ = 32 and a₁₉ = 59 give 5 × (32 + 59) = 455. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q84
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sequences

In a geometric sequence of positive terms, the 3rd term is 12 and the 6th term is 96. What is the 8th term?

- A) 192
- B) 288
- C) 384
- D) 768
- E) 144

**answer:** C
**explanation:** In a geometric sequence, a₆/a₃ = r^(6-3) = r³, so r³ = 96/12 = 8, giving r = 2. From a₃ = a₁r² = 12, a₁ = 12/4 = 3, so a₈ = a₁ · r⁷ = 3 · 128 = 384. Alternatively, a₈ = a₆ · r² = 96 · 4 = 384. The value 192 = a₆ · r comes from advancing only one term instead of two, and 768 = a₆ · r³ comes from advancing three terms. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q85
**difficulty:** Easy
**type:** Problem Solving
**topic:** Word Problem — Translation

A bakery sold a total of 84 muffins and croissants one morning. If the number of muffins sold was twice the number of croissants sold, how many croissants were sold?

- A) 21
- B) 28
- C) 42
- D) 56
- E) 63

**answer:** B
**explanation:** We let c represent the number of croissants sold; then the number of muffins sold is 2c. Translating the total, c + 2c = 84, so 3c = 84 and c = 28. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q86
**difficulty:** Easy
**type:** Problem Solving
**topic:** Age Word Problem

Maria is 5 years older than her brother Tom. If the sum of their current ages is 31, how old is Maria now?

- A) 13
- B) 15
- C) 16
- D) 18
- E) 21

**answer:** D
**explanation:** We let Tom's age be t; then Maria's age is t + 5. Translating the sum, t + (t + 5) = 31, so 2t + 5 = 31, giving 2t = 26 and t = 13. Maria's age is t + 5 = 18. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q88
**difficulty:** Medium
**type:** Problem Solving
**topic:** Age Word Problem

In 6 years, Lena will be three times as old as she was 4 years ago. How old is Lena now?

- A) 7
- B) 8
- C) 9
- D) 11
- E) 12

**answer:** C
**explanation:** We let Lena's current age be x. In 6 years she will be x + 6, and 4 years ago she was x − 4. Translating the relationship, x + 6 = 3(x − 4). Expanding gives x + 6 = 3x − 12, so 18 = 2x and x = 9. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q89
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem — Translation

In a parking lot, the number of cars is 8 more than three times the number of motorcycles. If there are 92 vehicles in total and every vehicle is either a car or a motorcycle, how many cars are there?

- A) 21
- B) 29
- C) 63
- D) 71
- E) 84

**answer:** D
**explanation:** We let m be the number of motorcycles; then the number of cars is 3m + 8. Translating the total, m + (3m + 8) = 92, so 4m + 8 = 92, giving 4m = 84 and m = 21. The number of cars is 3(21) + 8 = 71. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q90
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem — Translation

The sum of four consecutive even integers is 156. What is the smallest of these integers?

- A) 33
- B) 36
- C) 37
- D) 39
- E) 42

**answer:** B
**explanation:** We let the four consecutive even integers be n, n + 2, n + 4, and n + 6. Their sum is 4n + 12 = 156, so 4n = 144 and n = 36. The smallest integer is 36. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q91
**difficulty:** Medium
**type:** Problem Solving
**topic:** Age Word Problem

A father is currently four times as old as his daughter. In 12 years, he will be only twice as old as she will be then. How old is the father now?

- A) 18
- B) 24
- C) 30
- D) 36
- E) 48

**answer:** B
**explanation:** We let the daughter's current age be d; then the father's age is 4d. In 12 years, the father will be 4d + 12 and the daughter d + 12. Translating the future relationship, 4d + 12 = 2(d + 12). Expanding gives 4d + 12 = 2d + 24, so 2d = 12 and d = 6. The father's current age is 4d = 24. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q92
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem — Translation

Two-fifths of the students in a club play chess, and one-third of the remaining students play checkers. The other 24 students play neither game. How many students are in the club?

- A) 40
- B) 48
- C) 54
- D) 60
- E) 72

**answer:** D
**explanation:** We let the total number of students be x. Chess players number (2/5)x, leaving (3/5)x. Of those remaining, one-third play checkers, so two-thirds of the remaining—that is, (2/3)(3/5)x = (2/5)x—play neither. Setting (2/5)x = 24 gives x = 60. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q93
**difficulty:** Hard
**type:** Problem Solving
**topic:** Age Word Problem

Six years ago, Aaron was twice as old as Bella was then. In four years, the sum of their ages will be 80. How old is Aaron now?

- A) 38
- B) 42
- C) 46
- D) 50
- E) 54

**answer:** C
**explanation:** We let Aaron's current age be a and Bella's be b. Six years ago, a − 6 = 2(b − 6), so a − 6 = 2b − 12, giving a = 2b − 6. In four years their ages sum to (a + 4) + (b + 4) = 80, so a + b = 72. Substituting a = 2b − 6 gives (2b − 6) + b = 72, so 3b = 78 and b = 26. Then a = 2(26) − 6 = 46. We verify: six years ago 46 − 6 = 40 = 2(26 − 6) = 40, and in four years 50 + 30 = 80. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q94
**difficulty:** Hard
**type:** Problem Solving
**topic:** Word Problem — Translation

A jar contains red, blue, and green marbles. The number of red marbles is 5 more than the number of blue marbles, and the number of green marbles is twice the number of blue marbles. If there are 65 marbles in total, how many green marbles are there?

- A) 15
- B) 20
- C) 25
- D) 30
- E) 35

**answer:** D
**explanation:** We let the number of blue marbles be b. Then red marbles number b + 5 and green marbles number 2b. Translating the total, (b + 5) + b + 2b = 65, so 4b + 5 = 65, giving 4b = 60 and b = 15. The number of green marbles is 2b = 30. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q95
**difficulty:** Hard
**type:** Problem Solving
**topic:** Word Problem — Translation

The sum of three consecutive odd integers is 51 more than twice the smallest of the three. What is the value of the largest integer?

- A) 41
- B) 43
- C) 45
- D) 47
- E) 49

**answer:** E
**explanation:** We let the three consecutive odd integers be n, n + 2, and n + 4. Their sum is 3n + 6. The condition states 3n + 6 = 2n + 51, so n = 45. The largest integer is n + 4 = 49. (Choice C, 45, is the smallest of the three; choice D, 47, is the middle one.) The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q96
**difficulty:** Hard
**type:** Problem Solving
**topic:** Age Word Problem

The average (arithmetic mean) of the current ages of a mother and her son is 27. Twelve years ago, the mother was four times as old as her son was then. How old is the son now?

- A) 18
- B) 20
- C) 22
- D) 24
- E) 30

**answer:** A
**explanation:** We let the mother's current age be m and the son's be s. The average condition gives (m + s)/2 = 27, so m + s = 54. Twelve years ago, m − 12 = 4(s − 12), so m − 12 = 4s − 48, giving m = 4s − 36. Substituting into m + s = 54 yields (4s − 36) + s = 54, so 5s = 90 and s = 18. We verify: m = 4(18) − 36 = 36, the sum 36 + 18 = 54 gives an average of 27, and twelve years ago 36 − 12 = 24 = 4(18 − 12) = 24. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q97
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem — Translation

A theater sold adult tickets for $12 each and student tickets for $8 each. It sold 40 tickets in total and collected $416. How many student tickets did it sell?

- A) 12
- B) 16
- C) 20
- D) 24
- E) 28

**answer:** B
**explanation:** Let a be the number of adult tickets and s the number of student tickets. We are given a + s = 40 and 12a + 8s = 416. Substituting a = 40 − s into the revenue equation gives 12(40 − s) + 8s = 416, which simplifies to 480 − 4s = 416, so 4s = 64 and s = 16. As a check, 16 student and 24 adult tickets give 24(12) + 16(8) = 288 + 128 = 416. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q98
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations

If 5(x - 2) = 3x + 4, what is the value of x?

- A) 3
- B) 5
- C) 7
- D) 9
- E) 11

**answer:** C
**explanation:** We first expand the left side of the equation, distributing the 5 across the parentheses: 5(x - 2) = 5x - 10. The equation becomes 5x - 10 = 3x + 4. Subtracting 3x from both sides gives 2x - 10 = 4, and adding 10 to both sides gives 2x = 14, so x = 7. As a check, 5(7 - 2) = 5(5) = 25 and 3(7) + 4 = 21 + 4 = 25, confirming both sides are equal. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q99
**difficulty:** Easy
**type:** Problem Solving
**topic:** Word Problem Translation

When 3 times a certain number is decreased by 7, the result is 20. What is the number?

- A) 4
- B) 5
- C) 7
- D) 9
- E) 11

**answer:** D
**explanation:** We let n represent the certain number. The phrase "3 times a certain number" translates to 3n, and "decreased by 7" means we subtract 7, giving 3n - 7. Setting this equal to the stated result yields the equation 3n - 7 = 20. Adding 7 to both sides gives 3n = 27, and dividing by 3 gives n = 9. As a check, 3(9) - 7 = 27 - 7 = 20, which matches the stated result. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q100
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factoring

What is the larger of the two solutions to x² - 9x + 20 = 0?

- A) 4
- B) 5
- C) 9
- D) 10
- E) 20

**answer:** B
**explanation:** To factor the quadratic x² - 9x + 20, we seek two numbers whose product is the constant term 20 and whose sum is the coefficient of x, namely -9. The numbers -4 and -5 satisfy both conditions, since (-4)(-5) = 20 and (-4) + (-5) = -9. The equation factors as (x - 4)(x - 5) = 0, so the solutions are x = 4 and x = 5. The larger of these is 5. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q101
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the first term is 5 and each term after the first is 4 greater than the term before it. What is the 12th term?

- A) 44
- B) 45
- C) 47
- D) 48
- E) 49

**answer:** E
**explanation:** In an arithmetic sequence the nth term is given by aₙ = a₁ + (n - 1)d, where a₁ is the first term and d is the common difference. Here a₁ = 5 and d = 4, and we want the 12th term, so n = 12. Substituting gives a₁₂ = 5 + (12 - 1)(4) = 5 + 11(4) = 5 + 44 = 49. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q102
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

What is the least integer value of x for which 4 - 3x ≤ 19?

- A) -5
- B) -4
- C) -3
- D) 4
- E) 5

**answer:** A
**explanation:** We solve the inequality 4 - 3x ≤ 19 for x. Subtracting 4 from both sides gives -3x ≤ 15. We now divide both sides by -3; because we are dividing by a negative number, the direction of the inequality reverses, giving x ≥ -5. The values of x satisfying the inequality are all numbers at least -5, so the least integer value is -5. As a check, 4 - 3(-5) = 4 + 15 = 19, which satisfies 19 ≤ 19. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q103
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions

If g(x) = 2x² - 3, what is the value of g(-3)?

- A) -39
- B) -15
- C) 9
- D) 15
- E) 33

**answer:** D
**explanation:** To evaluate g(-3), we substitute -3 for x in the rule g(x) = 2x² - 3. Because the exponent applies to the input before multiplication, we first compute (-3)² = 9, which is positive since squaring a negative number gives a positive result. Then 2(9) - 3 = 18 - 3 = 15. A common error is to compute -3² as -9 by squaring before applying the negative sign, which would give 2(-9) - 3 = -21; here the entire value -3 is squared, so the result is +9. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q104
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Systems of Equations

What is the value of x?

(1) x + 2y = 8
(2) 3x + 6y = 24

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**explanation:** A single linear equation in two unknowns does not determine a unique value for either variable, so we must check whether the statements provide two independent equations. Statement (1) gives x + 2y = 8, one equation in two unknowns; for y = 0 we get x = 8, while for y = 1 we get x = 6, so x is not determined and statement (1) alone is insufficient. Statement (2) gives 3x + 6y = 24; dividing both sides by 3 yields x + 2y = 8, which is identical to statement (1), so statement (2) alone is likewise insufficient. Taking both together, statement (2) is exactly 3 times statement (1) and represents the same line, contributing no new information, so the system remains one equation in two unknowns with infinitely many solutions for x. The correct answer is E.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q105
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Functions

If f(x) = x² + bx + c, where b and c are constants, what is the value of f(2)?

(1) f(0) = 3
(2) f(1) = 6

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Since f(2) = 4 + 2b + c, finding f(2) requires knowing both constants b and c. Statement (1) gives f(0) = 0 + 0 + c = c = 3, which fixes c but leaves b unknown, so f(2) = 4 + 2b + 3 cannot be determined; statement (1) alone is insufficient. Statement (2) gives f(1) = 1 + b + c = 6, that is, b + c = 5, a single equation in two unknowns, so it alone is insufficient. Taking both together, c = 3 from statement (1) and substituting into b + c = 5 gives b = 2; therefore f(2) = 4 + 2(2) + 3 = 11, a unique value, so both statements together are sufficient. The correct answer is C.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q106
**difficulty:** Medium
**type:** Problem Solving
**topic:** Absolute Value

If |2x - 6| = 8, what is the sum of all possible values of x?

- A) -1
- B) 1
- C) 6
- D) 7
- E) 8

**answer:** C
**explanation:** An equation of the form |expression| = b, where b is positive, splits into two cases: expression = b or expression = -b. Applying this to |2x - 6| = 8 gives 2x - 6 = 8 or 2x - 6 = -8. From the first case, 2x = 14, so x = 7. From the second case, 2x = -2, so x = -1. The two possible values of x are 7 and -1, and their sum is 7 + (-1) = 6. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q107
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sequences

In a geometric sequence, the first term is 3 and each term after the first is twice the term before it. What is the sum of the first 5 terms?

- A) 48
- B) 93
- C) 96
- D) 189
- E) 192

**answer:** B
**explanation:** A geometric sequence with first term a and common ratio r has terms a, ar, ar², and so on. Here a = 3 and r = 2, so the first five terms are 3, 6, 12, 24, and 48. Adding them directly gives 3 + 6 + 12 + 24 + 48 = 93. Equivalently, the sum of the first n terms is a(rⁿ - 1)/(r - 1) = 3(2⁵ - 1)/(2 - 1) = 3(31)/1 = 93. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q108
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics

If r and s are the two solutions of x² - 7x + 10 = 0, what is the value of 1/r + 1/s?

- A) 7/10
- B) 10/7
- C) 7/2
- D) 5
- E) 7

**answer:** A
**explanation:** Rather than solving for the individual roots, we use the relationships between coefficients and roots: for x² + bx + c = 0, the sum of the roots is -b and the product of the roots is c. Here the sum r + s = 7 and the product rs = 10. We combine the requested fractions over a common denominator: 1/r + 1/s = (s + r)/(rs) = (r + s)/(rs). Substituting the known sum and product gives 7/10. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q109
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Inequalities

Is x > 0?

(1) x² > 4
(2) x³ > 0

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The question asks whether x is positive, so each statement is sufficient only if it forces a definite Yes or a definite No. Statement (1) says x² > 4, which means x > 2 or x < -2; for example x = 3 gives Yes but x = -3 gives No, so statement (1) alone is not sufficient. Statement (2) says x³ > 0, and because an odd power preserves the sign of its base, x³ > 0 holds if and only if x > 0; this gives a definite Yes, so statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q110
**difficulty:** Easy
**type:** Problem Solving
**topic:** Linear Equations

If 5x - 8 = 27, what is the value of 2x + 3?

- A) 11
- B) 13
- C) 15
- D) 17
- E) 19

**answer:** D
**explanation:** We first solve the given equation for x and then evaluate the requested expression. Starting from 5x - 8 = 27, we add 8 to both sides to obtain 5x = 35, and dividing both sides by 5 gives x = 7. Substituting x = 7 into 2x + 3 yields 2(7) + 3 = 14 + 3 = 17. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q111
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factoring

If x = 13, what is the value of x² - 9?

- A) 150
- B) 160
- C) 169
- D) 178
- E) 190

**answer:** B
**explanation:** The expression x² - 9 is a difference of squares, since 9 = 3², so it factors as x² - 9 = (x - 3)(x + 3). Substituting x = 13 gives (13 - 3)(13 + 3) = (10)(16) = 160. We may verify directly: 13² - 9 = 169 - 9 = 160, which confirms the factored result. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q112
**difficulty:** Easy
**type:** Problem Solving
**topic:** Word Problem Translation

A certain number increased by 7 is equal to three times the number decreased by 5. What is the number?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**explanation:** We translate the verbal statement into an equation. Let n represent the number. The phrase "the number increased by 7" is n + 7, and "three times the number decreased by 5" is 3n - 5, so the condition becomes n + 7 = 3n - 5. Subtracting n from both sides gives 7 = 2n - 5, and adding 5 to both sides gives 12 = 2n, so n = 6. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q113
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the first term is 4 and each term after the first is 5 greater than the term before it. What is the 10th term?

- A) 45
- B) 49
- C) 50
- D) 54
- E) 55

**answer:** B
**explanation:** In an arithmetic sequence with first term a and common difference d, the nth term is given by a + (n - 1)d. Here a = 4 and d = 5, and we want the 10th term, so we substitute n = 10 to obtain 4 + (10 - 1)(5) = 4 + 9(5) = 4 + 45 = 49. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q114
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If x² + 3x - 28 = 0 and x < 0, what is the value of x?

- A) -7
- B) -4
- C) 4
- D) 7
- E) 28

**answer:** A
**explanation:** To solve the quadratic, we seek two numbers whose product is -28 and whose sum is 3; these numbers are 7 and -4, so x² + 3x - 28 = (x + 7)(x - 4) = 0. Setting each factor equal to zero gives the two solutions x = -7 and x = 4. The condition x < 0 selects the negative root, so x = -7. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q115
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Systems of Equations

What is the value of x + y?

(1) 2x + y = 9
(2) x + 2y = 9

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** The question asks for the value of x + y. Statement (1) gives 2x + y = 9, a single linear equation in two unknowns, which has infinitely many solution pairs and therefore does not fix x + y; for example (x, y) = (4, 1) gives x + y = 5, while (x, y) = (3, 3) gives x + y = 6, so statement (1) alone is not sufficient. By the same reasoning, statement (2) gives x + 2y = 9 alone, which likewise does not determine x + y and is not sufficient. Taking both statements together and adding them gives (2x + y) + (x + 2y) = 9 + 9, that is, 3x + 3y = 18, so x + y = 6, a single determinate value. The correct answer is C.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q116
**difficulty:** Medium
**type:** Problem Solving
**topic:** Functions

If f(x) = 2x - 1, for what value of x does f(f(x)) = 29?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** E
**explanation:** We first build the composite function f(f(x)) by substituting f(x) into the rule for f. Since f(x) = 2x - 1, we have f(f(x)) = 2(2x - 1) - 1 = 4x - 2 - 1 = 4x - 3. Setting this equal to 29 gives 4x - 3 = 29, so 4x = 32 and x = 8. As a check, f(8) = 15 and f(15) = 29, confirming the result. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q117
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Linear Equations

What is the value of x?

(1) 3x + 2 = 2x + 9
(2) x² = 49

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The question asks for a single value of x. Statement (1) is the linear equation 3x + 2 = 2x + 9; subtracting 2x from both sides gives x + 2 = 9, so x = 7, a unique value, and statement (1) alone is sufficient. Statement (2) gives x² = 49, which has two solutions, x = 7 and x = -7, so it does not determine a single value of x and is not sufficient alone. Since statement (1) alone suffices but statement (2) alone does not, the correct answer is A.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q118
**difficulty:** Medium
**type:** Problem Solving
**topic:** Word Problem Translation

Maria's age is 4 years more than twice Lena's age. If the sum of their ages is 34 years, how old is Maria?

- A) 10
- B) 14
- C) 20
- D) 22
- E) 24

**answer:** E
**explanation:** We translate the conditions into equations. Let L be Lena's age; then Maria's age is 2L + 4. The sum of their ages is 34, so L + (2L + 4) = 34, which simplifies to 3L + 4 = 34. Subtracting 4 gives 3L = 30, so L = 10, and Maria's age is 2(10) + 4 = 24. As a check, 10 + 24 = 34, confirming the total. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q119
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If r and s are the two solutions of x² - 8x + 12 = 0, what is the value of r² + s²?

- A) 28
- B) 32
- C) 36
- D) 40
- E) 52

**answer:** D
**explanation:** Rather than solving for the individual roots, we use the relationships between coefficients and roots: for x² + bx + c = 0, the sum of the roots is -b and the product is c. Here r + s = 8 and rs = 12. We then use the identity r² + s² = (r + s)² - 2rs, which gives r² + s² = 8² - 2(12) = 64 - 24 = 40. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q120
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Inequalities

Is x > 3?

(1) x² > 9
(2) x³ > 27

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The question asks whether x > 3, so each statement is sufficient only if it forces a definite Yes or a definite No. Statement (1) says x² > 9, which means x > 3 or x < -3; for example x = 4 gives Yes but x = -4 gives No, so statement (1) alone is not sufficient. Statement (2) says x³ > 27, and because cubing preserves the order of real numbers, x³ > 27 holds if and only if x > 3; this yields a definite Yes, so statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q121
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value

If |x - 5| = |x + 1|, what is the value of x?

- A) -2
- B) 0
- C) 1
- D) 2
- E) 3

**answer:** D
**explanation:** The equation |x - 5| = |x + 1| states that x is equidistant from 5 and from -1 on the number line, so x must be the midpoint of 5 and -1, namely (5 + (-1))/2 = 2. Algebraically, squaring both sides gives (x - 5)² = (x + 1)², which expands to x² - 10x + 25 = x² + 2x + 1; the x² terms cancel, leaving -10x + 25 = 2x + 1, so 24 = 12x and x = 2. As a check, |2 - 5| = 3 and |2 + 1| = 3, which are equal. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q122
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

A boat travels 36 kilometers downstream in 2 hours and the same 36 kilometers upstream in 3 hours. What is the speed of the boat in still water, in kilometers per hour?

- A) 3
- B) 9
- C) 12
- D) 15
- E) 18

**answer:** D
**explanation:** Let b be the speed of the boat in still water and c the speed of the current, both in kilometers per hour. Going downstream the current adds to the boat's speed, so the effective speed is b + c; covering 36 km in 2 hours gives b + c = 36/2 = 18. Going upstream the current opposes the boat, so the effective speed is b - c; covering 36 km in 3 hours gives b - c = 36/3 = 12. Adding the two equations eliminates c: (b + c) + (b - c) = 18 + 12, so 2b = 30 and b = 15. The current speed is then c = 18 - 15 = 3, which is positive and consistent. The question asks for the speed in still water, which is 15. The correct answer is D.
**related_reading:** reading-quant-08-method-selection

---

## Q123
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

If r and s are the two solutions of x² - 11x + 24 = 0, what is the value of r² + s²?

- A) 25
- B) 73
- C) 97
- D) 121
- E) 145

**answer:** B
**explanation:** Rather than finding r and s individually, we use Vieta's formulas together with an algebraic identity. For x² - 11x + 24 = 0, the sum of the roots is r + s = -(-11)/1 = 11 and the product is r·s = 24/1 = 24. The identity (r + s)² = r² + 2rs + s² can be rearranged to r² + s² = (r + s)² - 2rs. Substituting the known values gives r² + s² = 11² - 2(24) = 121 - 48 = 73. As a check, the equation factors as (x - 3)(x - 8) = 0, so the roots are 3 and 8, and 3² + 8² = 9 + 64 = 73, confirming the result. Among the wrong answers, 121 is (r + s)² with the correction term forgotten, 97 subtracts rs only once, 145 adds rs to (r + s)² instead of subtracting 2rs, and 25 is (r - s)². The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q124
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

How many integer values of x satisfy -2 ≤ (5 - 2x)/3 ≤ 4?

- A) 7
- B) 8
- C) 9
- D) 10
- E) 11

**answer:** C
**explanation:** We solve the compound inequality by performing the same operation on all three parts. Starting from -2 ≤ (5 - 2x)/3 ≤ 4, multiply each part by 3 to clear the denominator: -6 ≤ 5 - 2x ≤ 12. Subtract 5 from each part: -11 ≤ -2x ≤ 7. Now divide each part by -2; because we are dividing by a negative number, both inequality signs reverse, giving 11/2 ≥ x ≥ -7/2, which is the same as -7/2 ≤ x ≤ 11/2, that is, -3.5 ≤ x ≤ 5.5. Because the bounds are inclusive, every integer from -3 up to 5 qualifies: -3, -2, -1, 0, 1, 2, 3, 4, 5, which is 9 integers. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q125
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions

The function f is defined by f(x) = 3x - 4 for all real numbers x. For what value of x does f(f(x)) = x?

- A) 1
- B) 2
- C) 4/3
- D) 4
- E) 8

**answer:** B
**explanation:** We first form the composite f(f(x)) and then set it equal to x. Substituting f(x) = 3x - 4 into f gives f(f(x)) = 3(f(x)) - 4 = 3(3x - 4) - 4 = 9x - 12 - 4 = 9x - 16. Setting this equal to x yields 9x - 16 = x. Subtracting x from both sides gives 8x - 16 = 0, so 8x = 16 and x = 2. As a check, f(2) = 3(2) - 4 = 2, so f(f(2)) = f(2) = 2, which indeed equals x. (Geometrically, x = 2 is the fixed point of f, the point where the line y = 3x - 4 meets the line y = x.) The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q126
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value

What is the sum of all values of x that satisfy |3x - 2| = x + 6?

- A) -4
- B) -1
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** An absolute-value equation |A| = B has solutions only where the right side is nonnegative, and for those it splits into A = B or A = -B. Here B = x + 6, and we will verify each candidate at the end. The first case is 3x - 2 = x + 6, which gives 2x = 8, so x = 4; then x + 6 = 10 ≥ 0, so this solution is valid. The second case is 3x - 2 = -(x + 6) = -x - 6, which gives 4x = -4, so x = -1; then x + 6 = 5 ≥ 0, so this solution is also valid. Both x = 4 and x = -1 check out (|3(4) - 2| = 10 = 4 + 6, and |3(-1) - 2| = 5 = -1 + 6), so the sum of all valid values is 4 + (-1) = 3. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q127
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions

For all x ≠ 1, the function f is defined by f(x) = (x + 1)/(x - 1). What is the value of f(f(2))?

- A) 0
- B) 1
- C) 5/3
- D) 2
- E) 3

**answer:** D
**explanation:** A composite function is evaluated from the inside outward, so we first compute the inner value f(2) and then apply f to that result. Substituting x = 2 gives f(2) = (2 + 1)/(2 - 1) = 3/1 = 3. We then apply f to 3: f(3) = (3 + 1)/(3 - 1) = 4/2 = 2. Therefore f(f(2)) = f(3) = 2. (Both inputs, 2 and 3, differ from 1, so the function is defined at each step.) The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q128
**difficulty:** Medium
**type:** Problem Solving
**topic:** Quadratics

The length of a rectangle is 3 meters greater than its width, and its area is 70 square meters. What is the perimeter of the rectangle, in meters?

- A) 17
- B) 24
- C) 34
- D) 40
- E) 70

**answer:** C
**explanation:** Let w be the width in meters; then the length is w + 3. The area is the product of length and width, so w(w + 3) = 70, which expands to w² + 3w - 70 = 0. We factor by finding two numbers whose product is -70 and whose sum is 3; these are 10 and -7, giving (w + 10)(w - 7) = 0. The solutions are w = -10 and w = 7, but a width must be positive, so w = 7. The length is then 7 + 3 = 10, and the perimeter is 2(length + width) = 2(10 + 7) = 2(17) = 34. As a check, the area is 10 × 7 = 70, as required. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q129
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

For how many integer values of x is x² - x - 12 < 0?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**explanation:** A quadratic inequality is solved by first finding the roots of the corresponding equation and then determining where the parabola lies below the x-axis. Factoring x² - x - 12 gives (x - 4)(x + 3), so the roots are x = 4 and x = -3. Because the leading coefficient is positive, the parabola opens upward and is negative only between its two roots, so x² - x - 12 < 0 exactly when -3 < x < 4. Since the inequality is strict, the endpoints -3 and 4 are excluded, and the integers strictly between them are -2, -1, 0, 1, 2, and 3, which is 6 integers. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q130
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratics

If the equation x² + (k − 3)x + 9 = 0 has two equal real roots and k > 0, what is the value of k?

- A) 3
- B) 6
- C) 9
- D) 12
- E) 15

**answer:** C
**explanation:** A quadratic equation ax² + bx + c = 0 has two equal real roots (a single repeated root) exactly when its discriminant b² − 4ac equals zero. Here a = 1, b = k − 3, and c = 9, so we require (k − 3)² − 4(1)(9) = 0, that is (k − 3)² − 36 = 0. Thus (k − 3)² = 36, which gives k − 3 = 6 or k − 3 = −6, so k = 9 or k = −3. Since the problem restricts k > 0, the value k = −3 is rejected and k = 9. As a check, with k = 9 the equation becomes x² + 6x + 9 = 0, which factors as (x + 3)² = 0, confirming the single repeated root x = −3. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q131
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

At an office supply store, 3 pens and 2 notebooks cost $26, while 2 pens and 5 notebooks cost $32. What is the total cost, in dollars, of 5 pens and 5 notebooks?

- A) 50
- B) 45
- C) 55
- D) 40
- E) 60

**answer:** A
**explanation:** Let p be the cost of one pen and n the cost of one notebook, both in dollars. The conditions translate to the system 3p + 2n = 26 and 2p + 5n = 32. To eliminate n, multiply the first equation by 5 and the second by 2: 15p + 10n = 130 and 4p + 10n = 64. Subtracting the second from the first gives 11p = 66, so p = 6. Substituting p = 6 into 3p + 2n = 26 gives 18 + 2n = 26, so 2n = 8 and n = 4. The total cost of 5 pens and 5 notebooks is 5p + 5n = 5(6) + 5(4) = 30 + 20 = 50. As a check, 2(6) + 5(4) = 12 + 20 = 32, confirming the second condition. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q132
**difficulty:** Medium
**type:** Problem Solving
**topic:** Inequalities

For how many integer values of x is (x − 2)(x + 5) < 8?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**explanation:** First bring the inequality into standard quadratic form. Expanding the product gives (x − 2)(x + 5) = x² + 3x − 10, so the inequality (x − 2)(x + 5) < 8 becomes x² + 3x − 10 < 8, that is x² + 3x − 18 < 0. Factoring the left side, we seek two numbers whose product is −18 and whose sum is 3; these are 6 and −3, so x² + 3x − 18 = (x + 6)(x − 3). The inequality (x + 6)(x − 3) < 0 holds when the two factors have opposite signs, which occurs strictly between the roots: −6 < x < 3. Because the inequality is strict, the endpoints −6 and 3 are excluded. The integers strictly between −6 and 3 are −5, −4, −3, −2, −1, 0, 1, and 2, a total of 8 integers. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q133
**difficulty:** Hard
**type:** Problem Solving
**topic:** Functions

Let f(x) = 2x − 3. If f(f(x)) = x + 3, what is the value of x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 8

**answer:** B
**explanation:** A composite function is built by applying f to its own output. With f(x) = 2x − 3, we first form f(f(x)) by substituting f(x) into the rule for f: f(f(x)) = 2·f(x) − 3 = 2(2x − 3) − 3. Expanding gives 4x − 6 − 3 = 4x − 9. We now set this equal to the given expression: 4x − 9 = x + 3. Subtracting x from both sides gives 3x − 9 = 3, and adding 9 gives 3x = 12, so x = 4. As a check, f(4) = 2(4) − 3 = 5 and f(5) = 2(5) − 3 = 7, while x + 3 = 4 + 3 = 7, confirming f(f(4)) = 7. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q134
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sequences

In an arithmetic sequence, the 4th term is 14 and the 9th term is 34. What is the sum of the first 10 terms of the sequence?

- A) 200
- B) 180
- C) 190
- D) 210
- E) 220

**answer:** A
**explanation:** In an arithmetic sequence the nth term is a + (n − 1)d, where a is the first term and d is the common difference. The 4th term is a + 3d = 14 and the 9th term is a + 8d = 34. Subtracting the first equation from the second eliminates a: (a + 8d) − (a + 3d) = 34 − 14, so 5d = 20 and d = 4. Substituting d = 4 into a + 3d = 14 gives a + 12 = 14, so a = 2. The sum of the first n terms of an arithmetic sequence is (n/2)[2a + (n − 1)d]. For n = 10, this is (10/2)[2(2) + 9(4)] = 5[4 + 36] = 5(40) = 200. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q135
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value

What is the sum of all real values of x that satisfy |x² − 4x| = 3?

- A) 8
- B) 4
- C) 6
- D) 10
- E) 12

**answer:** A
**explanation:** An equation of the form |expression| = 3 splits into two cases, since the quantity inside can equal either 3 or −3. We treat each case as a quadratic and use the relationship that, for x² + bx + c = 0, the sum of the roots equals −b.

Case 1: x² − 4x = 3, which rearranges to x² − 4x − 3 = 0. Its discriminant is (−4)² − 4(1)(−3) = 16 + 12 = 28 > 0, so it has two distinct real roots, and their sum is −(−4) = 4.

Case 2: x² − 4x = −3, which rearranges to x² − 4x + 3 = 0. This factors as (x − 1)(x − 3) = 0, giving the real roots x = 1 and x = 3, whose sum is 4.

All four roots are real and each satisfies the original equation by construction. The total sum of all solutions is 4 + 4 = 8. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q136
**difficulty:** Medium
**type:** Problem Solving
**topic:** Systems of Equations

If x and y are positive numbers such that x − y = 5 and x² − y² = 65, what is the value of x + y?

- A) 11
- B) 12
- C) 13
- D) 15
- E) 18

**answer:** C
**explanation:** The key is to recognize the difference-of-squares factorization x² − y² = (x − y)(x + y), which lets us find x + y without solving for x and y individually. Substituting the known value x − y = 5 gives x² − y² = 5(x + y). Since x² − y² = 65, we have 5(x + y) = 65, so x + y = 13. As a check, combining x − y = 5 and x + y = 13 gives x = 9 and y = 4, both positive, and indeed 9² − 4² = 81 − 16 = 65. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q137
**difficulty:** Hard
**type:** Problem Solving
**topic:** Absolute Value Inequalities

For how many integer values of x is |x − 2| + |x + 4| ≤ 10?

- A) 11
- B) 9
- C) 13
- D) 7
- E) 15

**answer:** A
**explanation:** The expression |x − 2| + |x + 4| represents the total distance from x to the points 2 and −4 on the number line. We analyze it by region, using the distance between 2 and −4, which is 6.

For −4 ≤ x ≤ 2 (between the two points), the total distance is exactly the gap between them: |x − 2| + |x + 4| = 6, which is ≤ 10 for every such x.

For x > 2, both quantities open the same way: |x − 2| + |x + 4| = (x − 2) + (x + 4) = 2x + 2. Setting 2x + 2 ≤ 10 gives x ≤ 4, so 2 < x ≤ 4.

For x < −4, |x − 2| + |x + 4| = (2 − x) + (−4 − x) = −2x − 2. Setting −2x − 2 ≤ 10 gives −2x ≤ 12, so x ≥ −6, that is −6 ≤ x < −4.

Combining all three regions, the inequality holds exactly for −6 ≤ x ≤ 4. The integers in this closed interval are −6, −5, −4, −3, −2, −1, 0, 1, 2, 3, and 4, a total of 4 − (−6) + 1 = 11 integers. The correct answer is A.
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
