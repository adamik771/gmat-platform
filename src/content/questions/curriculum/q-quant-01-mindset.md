---
section: Quant
topic: Method Selection
reading_chapter: reading-quant-01-mindset
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Backsolving Recognition
**subchapter:** q1.1.method
**skill:** method-selection-on-sortable-integers
**trap_type:** algebra-by-default
**est_time_seconds:** 60
**prerequisite:** reading-quant-01-mindset

If 5x + 8 = 38, what is the value of x?

- A) 4
- B) 5
- C) 6
- D) 7
- E) 8

**answer:** C
**fastest_path:** Backsolve from C: 5(6) + 8 = 38 ✓. Done in 10 seconds.
**explanation:** Five integer answer choices that are sortable, single-variable equation — the recognition signal points to backsolving. Test C: 5(6) + 8 = 30 + 8 = 38, matching the target. Algebra (subtract 8, divide by 5) reaches the same answer but takes longer and introduces a sign-tracking risk on the subtraction step.
**mistake_a:** Computed 5(4) + 8 = 28 (didn't verify against target 38).
**mistake_b:** 5(5) + 8 = 33 — close to 38 but didn't iterate.
**mistake_d:** Off-by-one error after starting from C without checking the result.
**mistake_e:** Algebra slip: 38 − 8 = 30, then 30/5 misread as 30/4 = 8.
**common_trap:** algebra-by-default — reaching for "subtract 8, divide by 5" when plug-and-check is faster.
**takeaway:** Sortable integer answer choices + single equation = backsolve from C; algebra is the slower fallback.
**related_reading:** reading-quant-08-method-selection

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation Recognition
**subchapter:** q1.1.signals
**skill:** method-selection-on-spread-answers
**trap_type:** computation-when-estimation-suffices
**est_time_seconds:** 45
**prerequisite:** reading-quant-01-mindset

A factory's monthly output increased from 4,200 units to 5,880 units. By approximately what percent did output increase?

- A) 25%
- B) 40%
- C) 50%
- D) 65%
- E) 80%

**answer:** B
**fastest_path:** Estimate: ratio is roughly 6,000/4,000 ≈ 1.5; refine to 5,880/4,200 = 1.40 → 40% increase.
**explanation:** Answer choices spread by 15-25 percentage points each — estimation will identify the answer in seconds. The increase is (5,880 − 4,200)/4,200 = 1,680/4,200 = 0.40 = 40%. The denominator is *the original value*, not the new one. Aggressive rounding would give "from 4,000 to 6,000 = 50%-ish," narrowing to B or C; one refinement picks B.
**mistake_a:** Used the *new* value (5,880) as the denominator instead of the *original* (4,200), getting 28.6% ≈ 25%.
**mistake_c:** Estimated "about 50%" without refining; the spread between B and C requires the refinement step.
**mistake_d:** Confused the absolute increase (1,680) with percent — bubbled a number loosely matching the absolute.
**mistake_e:** Doubled the percent change (typical when "increase" is misread as "ratio").
**common_trap:** percent-base-confusion — using the new value as the denominator instead of the original.
**takeaway:** Percent change uses the *original* value as denominator; spread answer choices reward rounding before precise calculation.
**related_reading:** reading-quant-02-arithmetic-foundations

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Constraint Awareness
**subchapter:** q1.1.signals
**skill:** pre-think-shape-constraint-variables
**trap_type:** ignoring-constraints
**est_time_seconds:** 50
**prerequisite:** reading-quant-01-mindset

If n is a positive integer and 4n + 3 < 19, what is the largest possible value of n?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** A
**fastest_path:** 4n + 3 < 19 → 4n < 16 → n < 4. Largest *positive integer* less than 4 is 3.
**explanation:** Subtract 3 from both sides: 4n < 16. Divide by 4: n < 4. The constraint says n is a *positive integer*, so the largest valid n satisfying n < 4 is n = 3. The strict inequality matters: n = 4 would give 4(4) + 3 = 19, which is *not* less than 19. The integer constraint also matters: without it, the answer would be just below 4.
**mistake_b:** Treated "<" as "≤" — missed the strict inequality, included n = 4.
**mistake_c:** Solved 4n ≤ 19 (wrong inequality direction), got n ≤ 4.75, rounded to 5 — missed both the strict inequality *and* the integer constraint.
**mistake_d:** Arithmetic slip during subtraction or division.
**mistake_e:** Confused which side of the inequality was bigger; produced a value that violates the original constraint when checked.
**common_trap:** ignoring-constraints — bubbling n = 4 (math-valid but constraint-invalid because the inequality is strict).
**takeaway:** Strict inequalities (`<`, `>`) and integer constraints together produce the answer that's just *below* the algebraic threshold; check both before bubbling.
**related_reading:** reading-quant-01-mindset

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Method Switching
**subchapter:** q1.1.method
**skill:** thirty-second-checkpoint-switch
**trap_type:** algebra-by-default
**est_time_seconds:** 90
**prerequisite:** reading-quant-01-mindset, reading-quant-04-algebra-and-equations

If a + b = 12 and a² − b² = 60, what is the value of a − b?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**fastest_path:** Difference of squares: a² − b² = (a + b)(a − b) → 60 = 12(a − b) → a − b = 5.
**explanation:** The structural insight is that a² − b² factors as (a + b)(a − b). Substituting a + b = 12 gives 60 = 12(a − b), so a − b = 5. Total time: ~15 seconds. The substitution path (solve a + b = 12 for a, plug into a² − b² = 60, expand, simplify) reaches the same answer in 75-90 seconds and exposes you to a sign error during expansion. The thirty-second checkpoint should fire mid-substitution: the factored form is staring at you in the second equation.
**mistake_a:** Computed 60/12 = 5 but somehow halved or divided again.
**mistake_b:** Substitution path; slipped on the (12 − b)² − b² expansion.
**mistake_d:** Picked 6 = (12)/2 incorrectly assuming symmetry.
**mistake_e:** Misremembered the identity as a² − b² = (a − b)² or similar.
**common_trap:** missing-algebraic-shortcut — full substitution when the difference-of-squares form is the visible structure.
**takeaway:** When the question asks for a − b and the equations include a + b and a² − b², factor first; substitution is the slow fallback.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Method Selection
**subchapter:** q1.1.method
**skill:** algebraic-shortcut-vs-substitution
**trap_type:** missing-algebraic-shortcut
**est_time_seconds:** 90
**prerequisite:** reading-quant-01-mindset

If 2x + 3y = 19 and 5x − 3y = 16, what is the value of x + y?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** D
**fastest_path:** Add the equations to cancel y: 7x = 35 → x = 5. Substitute: y = 3. Sum: x + y = 8.
**explanation:** The y coefficients are equal-and-opposite (+3 and −3), making addition the obvious path to eliminate y. Adding gives 7x = 35 → x = 5. Substitute back into the first equation: 2(5) + 3y = 19 → 3y = 9 → y = 3. So x + y = 5 + 3 = 8. Total time: ~30 seconds. Full substitution (solve one for x in terms of y, substitute into the other) takes ~75 seconds.
**mistake_a:** Misread the question as "what is x − y?" or another combination.
**mistake_b:** Stopped at x = 5 and bubbled — read the question as asking for x alone.
**mistake_c:** Computed x = 5, y = 2 (arithmetic slip), got 7.
**mistake_e:** Subtracted the equations instead of adding; got a different system and arrived at a non-matching value.
**common_trap:** missing-algebraic-shortcut — using full substitution when the equal-and-opposite coefficients make addition the one-step move.
**takeaway:** When systems have matching-but-opposite coefficients, add (or subtract) to cancel a variable directly; full substitution is the slower path.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q6
**difficulty:** Medium
**type:** Problem Solving
**topic:** Constraint Awareness
**subchapter:** q1.1.signals
**skill:** pre-think-shape-constraint-variables
**trap_type:** ignoring-constraints
**est_time_seconds:** 75
**prerequisite:** reading-quant-01-mindset, reading-quant-03-number-properties

If x and y are distinct positive integers and x + y = 12, what is the maximum possible value of xy?

- A) 11
- B) 24
- C) 32
- D) 35
- E) 36

**answer:** D
**fastest_path:** xy is maximized when x and y are closest. Closest distinct pair summing to 12 is (5, 7) → xy = 35.
**explanation:** For two numbers with a fixed sum, the product is maximized when the two numbers are closest to each other. Without the "distinct" constraint, the optimum would be x = y = 6, giving xy = 36. The "distinct" constraint forces x ≠ y, so the closest distinct pair is (5, 7), giving xy = 35. The constraint is the lever; without reading it carefully, the trap answer (36) wins.
**mistake_a:** Picked an extreme distinct pair (x = 1, y = 11) → xy = 11.
**mistake_b:** Picked (x = 2, y = 10) → xy = 20 — close to but didn't optimize.
**mistake_c:** Picked (x = 4, y = 8) → xy = 32 — didn't iterate further toward (5, 7).
**mistake_e:** Ignored the "distinct" constraint and picked x = y = 6 → 36. The trap.
**common_trap:** ignoring-constraints — the "distinct" constraint pushes the answer one step away from the symmetric optimum.
**takeaway:** Optimization with a constraint requires checking the *constrained* optimum, not the absolute optimum. Read every constraint before maximizing.
**related_reading:** reading-quant-03-number-properties

---

## Q7
**difficulty:** Hard
**type:** Problem Solving
**topic:** Multi-Variable Recognition
**subchapter:** q1.1.method
**skill:** algebraic-shortcut-vs-substitution
**trap_type:** solving-past-sufficiency
**est_time_seconds:** 135
**prerequisite:** reading-quant-01-mindset, reading-quant-04-algebra-and-equations

If a + b + c = 14, ab + bc + ca = 47, and abc = 36, what is the value of a² + b² + c²?

- A) 102
- B) 110
- C) 122
- D) 144
- E) 196

**answer:** A
**fastest_path:** Identity: a² + b² + c² = (a + b + c)² − 2(ab + bc + ca) = 196 − 94 = 102.
**explanation:** Use the algebraic identity (a + b + c)² = a² + b² + c² + 2(ab + bc + ca), which rearranges to a² + b² + c² = (a + b + c)² − 2(ab + bc + ca). Plug in: 14² − 2(47) = 196 − 94 = 102. The third given value (abc = 36) is a *decoy* — it isn't needed for this computation. Trying to solve for a, b, c individually (using all three Vieta's relations) would take 3-5 minutes; the identity collapses the answer to two steps in 30 seconds.
**mistake_b:** Arithmetic slip on 196 − 94.
**mistake_c:** Used (a + b + c)² = a² + b² + c² + (ab + bc + ca) — forgot the factor of 2 in the identity.
**mistake_d:** Squared 14 incorrectly (got 156 or similar).
**mistake_e:** Used (a + b + c)² = 196 directly and bubbled the squared sum without subtracting.
**common_trap:** missing-algebraic-shortcut — solving for individual roots when an identity collapses the answer.
**takeaway:** When the problem gives sum, sum-of-products, and asks for sum-of-squares, use (a + b + c)² = a² + b² + c² + 2(ab + bc + ca); decoy data signals the identity-shortcut path.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q8
**difficulty:** Hard
**type:** Problem Solving
**topic:** Method Switching Under Pressure
**subchapter:** q1.1.method
**skill:** thirty-second-checkpoint-switch
**trap_type:** grinding-past-checkpoint
**est_time_seconds:** 150
**prerequisite:** reading-quant-01-mindset, reading-quant-04-algebra-and-equations

If x is a positive integer such that x² + 7x + 12 = 110, what is the value of x?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** Backsolve from C: 7² + 7(7) + 12 = 49 + 49 + 12 = 110 ✓.
**explanation:** Five clean integer answer choices, single-variable quadratic — backsolving from C resolves the question in 30 seconds. At x = 7: 49 + 49 + 12 = 110 ✓. Match. Algebra approaches: factor x² + 7x + 12 = (x + 3)(x + 4) and notice (x + 3)(x + 4) = 110 → consecutive integers 10 and 11 → x = 7. The quadratic formula on x² + 7x − 98 = 0 produces the same answer but in 90+ seconds (compute discriminant 441, √441 = 21, x = 7). The thirty-second checkpoint should fire mid-formula: with sortable integer choices, backsolving wins.
**mistake_a:** 5² + 7(5) + 12 = 72 — student stopped without verifying 110 was the target.
**mistake_b:** Off-by-one slip after starting from C; close but didn't iterate.
**mistake_d:** Quadratic-formula arithmetic slip — got x = 8 from incorrect discriminant.
**mistake_e:** 9² + 7(9) + 12 = 156 — over target, didn't iterate down.
**common_trap:** algebra-by-default — reaching for the quadratic formula on a clean-integer-choice problem.
**takeaway:** On clean-integer-choice quadratic problems, backsolving from C wins; the formula is the slow fallback when answer choices are non-integer.
**related_reading:** reading-quant-08-method-selection
