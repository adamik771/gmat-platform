---
title: Quant Inequalities and Absolute Value Micro-Guide
description: The deep subskill playbook for inequalities and absolute value. The sign-flip rule, compound inequalities, quadratic inequalities, absolute-value mechanics and the distance interpretation, and ten fully worked examples covering the trap-rich patterns.
section: Quant
type: reference
---

# Quant Inequalities and Absolute Value Micro-Guide

## Introduction

Inequalities and absolute value are where careless students lose points. The mechanics look like algebra but introduce one specific complication — the sign-flip rule for inequalities and the case-split discipline for absolute value. A student who treats these like ordinary algebra will eventually flip an inequality the wrong way or miss a negative case in absolute value. The result: an error-prone subskill that caps the Quant score.

I score 735s on this test. Inequalities and absolute value are where my discipline is most explicit — flip carefully, case-split mechanically, use the distance interpretation when it shortcuts.

*All worked examples are my own writing*, original to this guide.

## Inequalities: The Sign-Flip Rule

When you multiply or divide an inequality by a *negative* number, the inequality direction flips.

If x > 5, then −x < −5 (multiplying by −1 flips).
If 2x ≥ 10, then x ≥ 5 (dividing by positive 2 doesn't flip).
If −3x > 6, then x < −2 (dividing by negative 3 flips).

Adding or subtracting any number does not flip. Multiplying or dividing by a positive doesn't flip. Only negative multiplication/division flips.

### When you don't know the sign of the multiplier

If x/y < 3 and y is unknown sign, you cannot cross-multiply directly. Either:

- Split into cases (y > 0 and y < 0).
- Recognize that the problem usually constrains the sign somewhere — find that constraint.

This is the most common inequality trap.

## Compound Inequalities

Two inequalities chained: a < x < b. Every operation must be done to all three parts.

If 1 < x < 5 and you multiply by 2: 2 < 2x < 10.
If you multiply by −1: flip the direction of both — −1 > −x > −5, equivalently −5 < −x < −1.

## Quadratic Inequalities

Solve by finding the roots, then determining which intervals of x satisfy the inequality.

x² > 4 → x > 2 or x < −2 (two regions).
x² < 4 → −2 < x < 2 (one region between).
(x − 3)(x + 2) > 0 → product positive when both positive or both negative. Both positive: x > 3. Both negative: x < −2. So x > 3 or x < −2.
(x − 3)(x + 2) < 0 → product negative when one positive, one negative. Between roots: −2 < x < 3.

### The sign chart method

For (x − a)(x − b) where a < b:

- x < a: (x − a) negative, (x − b) negative → product positive.
- a < x < b: (x − a) positive, (x − b) negative → product negative.
- x > b: (x − a) positive, (x − b) positive → product positive.

So the product is positive outside the roots, negative between them.

## Absolute Value

|x| is x if x ≥ 0, and −x if x < 0. Geometrically, |x| is the distance from x to 0 on the number line.

### Distance interpretation

|x − a| is the distance from x to a.

|x − 5| < 3 means x is within 3 units of 5: 2 < x < 8.
|x + 2| > 4 means x is more than 4 units from −2 (since x + 2 = x − (−2)): x < −6 or x > 2.

This interpretation is the fast method for solving most absolute-value inequalities.

### Case-split method

When distance interpretation isn't immediate, split into cases.

|x − 3| = 5: case 1, x − 3 = 5 → x = 8. Case 2, x − 3 = −5 → x = −2. Both check.

For more complex equations like |x − 2| = 3x − 4, split:

Case 1: x − 2 ≥ 0 (so x ≥ 2). Equation: x − 2 = 3x − 4. Solving: 2 = 2x, x = 1. Check: x = 1 < 2, contradicts the case. Reject.

Case 2: x − 2 < 0 (so x < 2). Equation: −(x − 2) = 3x − 4. Solving: −x + 2 = 3x − 4, 4x = 6, x = 3/2. Check: 3/2 < 2 ✓.

Solution: x = 3/2.

### The triangle inequality

|a + b| ≤ |a| + |b|, with equality when a and b have the same sign.

|3 + 5| = 8 = |3| + |5|.
|3 + (−5)| = 2 < |3| + |−5| = 8.

Useful occasionally for bounding.

## Ten Worked Examples

### Worked example 1 — basic linear inequality

*Problem.* If 2x − 5 > 9, what is the range of x?

*Solve.* 2x > 14. x > 7.

*Answer: x > 7.*

### Worked example 2 — flip required

*Problem.* If −3x + 7 ≤ 1, what is the range of x?

*Solve.* −3x ≤ −6. Divide by −3 (flip): x ≥ 2.

*Answer: x ≥ 2.*

### Worked example 3 — compound inequality

*Problem.* If 3 < 2x − 1 < 9, what is the range of x?

*Solve.* Add 1 to all parts: 4 < 2x < 10. Divide by 2: 2 < x < 5.

*Answer: 2 < x < 5.*

### Worked example 4 — quadratic inequality

*Problem.* For what values of x is (x − 4)(x + 1) ≤ 0?

*Solve.* Roots at x = 4 and x = −1. Between them, product negative. So −1 ≤ x ≤ 4.

*Answer: −1 ≤ x ≤ 4.*

### Worked example 5 — absolute value inequality (less than)

*Problem.* If |x − 3| < 5, what is the range of x?

*Solve.* Distance from x to 3 less than 5. So x in (3 − 5, 3 + 5) = (−2, 8).

*Answer: −2 < x < 8.*

### Worked example 6 — absolute value inequality (greater than)

*Problem.* If |x + 2| > 4, what is the range of x?

*Solve.* Distance from x to −2 greater than 4. So x < −2 − 4 = −6 or x > −2 + 4 = 2.

*Answer: x < −6 or x > 2.*

### Worked example 7 — absolute value equation

*Problem.* If |2x − 1| = 7, what are the values of x?

*Solve.* Case 1: 2x − 1 = 7 → x = 4. Case 2: 2x − 1 = −7 → x = −3. Both check.

*Answer: 4 or −3.*

### Worked example 8 — combined inequality and absolute value

*Problem.* If |x| < 3 and |x − 1| > 1, what is the range of x?

*Solve.* |x| < 3 → −3 < x < 3. |x − 1| > 1 → x < 0 or x > 2.

Intersect: (−3 < x < 3) AND (x < 0 OR x > 2). 

If x < 0: combined with −3 < x < 3 gives −3 < x < 0.
If x > 2: combined with −3 < x < 3 gives 2 < x < 3.

*Answer: −3 < x < 0 or 2 < x < 3.*

### Worked example 9 — quadratic from a product

*Problem.* For what values of x is x² − 5x + 6 < 0?

*Solve.* Factor: (x − 2)(x − 3) < 0. Product negative between roots: 2 < x < 3.

*Answer: 2 < x < 3.*

### Worked example 10 — sign-aware inequality with division

*Problem.* If x/y > 0 and y > 0, what can we say about x?

*Solve.* Since y > 0, we can multiply both sides by y without flipping: x > 0.

*Answer: x > 0.*

## Inequality and Absolute Value Trap Compendium

### Trap 1: Forgetting to flip

Multiplying or dividing by a negative without flipping the inequality.

### Trap 2: Cross-multiplying without sign info

If y could be negative, you cannot directly cross-multiply x/y < 3.

### Trap 3: Squaring an inequality

x > −3 does not imply x² > 9. Squaring requires both sides non-negative.

### Trap 4: Missing the second case in absolute value

|x − 3| = 5 has two solutions, not one.

### Trap 5: Compound inequality operation only on one side

Operations must be applied to all parts.

### Trap 6: Quadratic inequality root inclusion

x² ≤ 4 includes ±2 (use ≤). x² < 4 excludes ±2 (use <).

### Trap 7: Distance interpretation reversed

|x − 5| < 3 means x is within 3 of 5, not 5 within 3 of x. Same thing here, but the direction matters for non-symmetric cases.

### Trap 8: Negative absolute value equation

|x| = −3 has no solution. |x| ≥ 0 always.

### Trap 9: Absolute value of a sum

|a + b| ≠ |a| + |b| in general.

### Trap 10: Confusing strict and non-strict

> vs ≥, < vs ≤. The boundary inclusion or exclusion matters.

## Pacing

Inequality problem: 60–90 seconds.
Absolute value problem: 60–90 seconds.
Combined / complex: up to 2:00.

If above 2:30, walk away.

## Study Protocol

### Week 1: Inequality mechanics

Drill 10 problems per day on basic and compound inequalities. Internalize the flip rule.

### Week 2: Quadratic inequalities

Sign-chart method until reflexive.

### Week 3: Absolute value mechanics

Distance interpretation and case-split. Drill 10 per day.

### Week 4: Combined problems

Inequalities with absolute value, with quadratics. Drill mixed.

### Week 5: Timed practice

Add 90-second timer.

### Week 6: Mixed Quant sections.

## Inequalities and Absolute Value Elite Habits

### They flip when multiplying by negative.

Always.

### They check sign before cross-multiplying.

If unknown, case-split or look for constraint.

### They use distance interpretation for absolute value.

Faster than algebra in most cases.

### They case-split mechanically when needed.

No skipped cases.

### They use sign charts for quadratic inequalities.

Roots → intervals → signs.

### They distinguish strict from non-strict.

Boundary inclusion matters.

### They never square without checking.

Squaring can lose sign info.

### They verify in original problem.

Plug back in.

### They walk away at 2:30.

Same as all Quant.

## Closing Note

Inequalities and absolute value are trap-rich. Discipline pays. Six weeks of careful practice with the flip rule, the case-split, and the distance interpretation will move accuracy on this subskill from 65% to 90%.

I score 735s on this test. Inequalities and absolute value are where I made specific drills part of weekly study because the trap rate is so high. The method works.

Now it's yours.
