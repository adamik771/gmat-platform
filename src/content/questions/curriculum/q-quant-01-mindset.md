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
**explanation:** When an equation is linear in one variable and the answer choices are small integers, two methods are available: direct algebraic isolation and backsolving. Recognizing which method is faster is itself a testable skill.

**Algebraic method.** Let x be the unknown. The equation 5x + 8 = 38 is solved by isolating x. Subtracting 8 from both sides yields 5x = 38 - 8 = 30. Dividing both sides by 5 gives x = 30/5 = 6.

**Backsolving method.** Because the answer choices are five distinct integers and the equation is easy to evaluate, substituting each choice directly is viable. Starting with the middle value (choice C, x = 6) is efficient: 5(6) + 8 = 30 + 8 = 38, which equals the right-hand side. The equation is satisfied on the first substitution, so no further testing is required.

Both methods confirm x = 6. In practice, backsolving is particularly advantageous here because the answer choices are integers, the arithmetic is trivial, and the correct answer happens to be the middle choice — meaning a single substitution resolves the question. When the expression on the left-hand side is more complex (involving fractions, nested operations, or multiple variables), direct algebra becomes the more reliable path. Recognizing which approach minimizes computation is therefore a meaningful efficiency decision on test day.

The correct answer is C.
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
**explanation:** The percent increase formula states that the percent change equals the difference between the new value and the original value, divided by the original value, multiplied by 100. Let the percent increase be x. Then:

x = (New Value - Original Value) / Original Value * 100

The original output is 4,200 units and the new output is 5,880 units. The absolute increase is:

5,880 - 4,200 = 1,680 units

We therefore compute:

x = 1,680 / 4,200 * 100

To simplify 1,680 / 4,200, we divide both the numerator and denominator by 420:

1,680 / 420 = 4
4,200 / 420 = 10

Thus 1,680 / 4,200 = 4/10 = 0.4, and x = 0.4 * 100 = 40.

An alternative estimation path confirms this result. Notice that 5,880 / 4,200 simplifies by dividing both values by 420, yielding 14/10 = 1.4. A ratio of 1.4 corresponds to a 40% increase over the original. Both approaches yield the same answer without any approximation, so estimation is not actually required here — recognizing that 5,880 is exactly 1.4 times 4,200 resolves the question in one step.

The correct answer is B.
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
**explanation:** A constraint of the form "less than" imposes a strict upper bound, and when the variable is restricted to positive integers, the task is to identify the largest integer that falls strictly below that bound — not merely near it.

The given condition is that n is a positive integer and that 4n + 3 < 19. Subtracting 3 from both sides of the inequality yields

4n < 16

Dividing both sides by 4 gives

n < 4

This strict inequality means n may not equal 4; n must be strictly less than 4. Because n is also required to be a positive integer, the candidates are n = 1, n = 2, and n = 3. The largest of these is n = 3.

A common error is to treat the strict inequality as a non-strict one, concluding n ≤ 4 and therefore selecting 4 as the answer. The original condition 4n + 3 < 19 (not ≤ 19) rules out n = 4 entirely: substituting n = 4 gives 4(4) + 3 = 19, which does not satisfy the strict inequality 19 < 19.

Although backsolving from the answer choices is available here — testing each value in the original inequality until a violation is found — direct algebraic isolation is faster and less error-prone for a two-step linear inequality.

The correct answer is A.
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
**explanation:** The difference of squares identity states that a² − b² = (a + b)(a − b) for all real numbers a and b. Recognizing this structure is the key method selection in this problem: rather than solving for a and b individually, the known sum can be substituted directly to isolate a − b in a single operation.

Given a + b = 12 and a² − b² = 60, applying the difference of squares factorization to the second equation yields (a + b)(a − b) = 60. Substituting a + b = 12 gives 12(a − b) = 60. Dividing both sides by 12 gives a − b = 60/12 = 5.

The algebraic approach is faster here than backsolving from the answer choices, because the factored form reduces the problem to a single substitution. Backsolving would require selecting a candidate value for a − b, pairing it with a + b = 12 to solve for a and b, and then verifying the second condition — three steps per answer choice versus one step with the direct approach.

The correct answer is C.
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
**explanation:** When a problem presents a system of two linear equations and asks for the value of a specific expression, the most efficient method is to examine whether adding or subtracting the equations directly yields the target expression, rather than solving for each variable individually.

The two given equations are:

- 2x + 3y = 19
- 5x - 3y = 16

The coefficients of y are 3 and -3, which are opposites. Adding the two equations eliminates y entirely:

(2x + 3y) + (5x - 3y) = 19 + 16

7x + 0 = 35

x = 5

Substituting x = 5 into the first equation to find y:

2(5) + 3y = 19

10 + 3y = 19

3y = 9

y = 3

Therefore x + y = 5 + 3 = 8.

A second method — backsolving from the answer choices — is also viable here but less direct. Each answer choice represents a candidate value of x + y, and one could test whether a consistent pair (x, y) satisfying both equations produces the target sum. However, with the y-coefficients being opposites, addition of the equations resolves x in a single step, making the algebraic approach strictly faster. The backsolving method is more useful when the system is not immediately amenable to elimination or when only one variable appears in both equations.

The correct answer is D.
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
**fastest_path:** For a fixed sum, make the numbers as close as allowed. Since 6 and 6 are not distinct, use 5 and 7.
**explanation:** Two positive numbers with a fixed sum have the greatest product when they are closest together. The equal pair 6 and 6 would give 36, but it violates the distinctness condition. The nearest allowed integer pair is 5 and 7, giving xy = 35. Choice D.
**common_trap:** Choice E ignores the single most important word in the prompt: distinct.
**takeaway:** With fixed sum, maximize a product by balancing the factors, then adjust for integer or distinctness restrictions.
**related_reading:** reading-quant-03-number-properties

---

## Q7
**difficulty:** Medium
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
**explanation:** The key algebraic identity governing this problem is the square of a sum of three terms:

(a + b + c)^2 = a^2 + b^2 + c^2 + 2(ab + bc + ca)

Rearranging to isolate the target expression yields:

a^2 + b^2 + c^2 = (a + b + c)^2 - 2(ab + bc + ca)

We are given that a + b + c = 14 and ab + bc + ca = 47. Substituting directly:

a^2 + b^2 + c^2 = (14)^2 - 2(47) = 196 - 94 = 102

The value abc = 36 is provided in the problem stem but is not required for this computation. Its presence is a deliberate distractor designed to test whether a test-taker recognizes which quantities the target expression actually depends on. A common error is to spend time attempting to recover the individual values of a, b, and c — which would require solving a cubic — when the identity above resolves the question in two arithmetic steps. Recognizing that a^2 + b^2 + c^2 is a symmetric function expressible entirely in terms of the elementary symmetric polynomials (a + b + c) and (ab + bc + ca), without recourse to abc, is the critical method-selection insight here.

The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q8
**difficulty:** Medium
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
**fastest_path:** Backsolve the middle choice. For x = 7, 7^2 + 7(7) + 12 = 49 + 49 + 12 = 110.
**explanation:** The answer choices are small integers, so test x = 7 first. It satisfies the equation exactly: 49 + 49 + 12 = 110. Therefore x = 7, choice C. Algebra confirms this: x^2 + 7x - 98 = (x+14)(x-7)=0, and the positive solution is 7.
**common_trap:** After factoring, -14 is also a root of the equation, but the prompt requires x to be a positive integer.
**takeaway:** When choices are simple and substitution is quick, backsolve before committing to longer algebra.
**related_reading:** reading-quant-08-method-selection
