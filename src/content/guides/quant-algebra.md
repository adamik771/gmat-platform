---
title: Quant Algebra Micro-Guide
description: The deep subskill playbook for algebra. Linear equations, quadratics, systems, factoring techniques, the special-product identities, when to use algebra vs other methods, and twelve fully worked examples covering the patterns that decide top-percentile scores.
section: Quant
type: reference
---

# Quant Algebra Micro-Guide

## Introduction

Algebra is the workhorse subskill of Quant. Roughly half of all Quant problems involve algebraic manipulation in some form — setting up an equation, solving a system, factoring, applying the quadratic formula, or recognizing a special-product pattern. A student who is fluent in algebra has a method for nearly every problem; a student who is rusty pays a tax on every set.

I score 735s on this test. Algebra is the subskill where I can identify the right method in five seconds on almost every problem because the patterns are reflexive. This guide is the deep dive — content, methods, and the discipline of knowing when *not* to use algebra.

*All worked examples are my own writing*, original to this guide.

## What Algebra Actually Tests on the GMAT

Three layers, in increasing difficulty:

*Mechanical fluency.* Solving a linear equation, isolating a variable, applying the distributive property. This is the basic level — if you can't do this, you can't progress.

*Pattern recognition.* Spotting that a problem has a hidden quadratic, recognizing the difference of squares, seeing when to factor instead of expanding.

*Method selection.* Knowing when algebra is the right tool versus when backsolving, test cases, or estimation would be faster.

Above the 75th percentile, the gap is in pattern recognition and method selection, not in mechanical fluency.

## The Algebra Foundation

### Linear equations

Solve by isolating: undo each operation in reverse order.

3x + 7 = 22 → 3x = 15 → x = 5.

### Distributing

a(b + c) = ab + ac. The distributive property.

Critical: distribute to *every* term inside the parentheses.

−(x − 3) = −x + 3, not −x − 3. The negative sign distributes to both terms.

### Combining like terms

3x + 5x = 8x. Same variable, same exponent, add coefficients.

### Cross-multiplying

If a/b = c/d (with b, d ≠ 0), then ad = bc.

### Substitution

Solve one equation for one variable, plug into the other.

### Elimination

Add or subtract equations to eliminate one variable.

## Quadratics

A quadratic equation has the form ax² + bx + c = 0.

### Solving by factoring

If you can write ax² + bx + c = (px + q)(rx + s), then setting each factor to zero gives the roots.

x² + 5x + 6 = 0 → (x + 2)(x + 3) = 0 → x = −2 or x = −3.

### The factoring shortcut for x² + bx + c

Find two numbers that multiply to c and add to b.

x² + 7x + 12 = 0: numbers that multiply to 12 and sum to 7 → 3 and 4. So (x + 3)(x + 4) = 0.

### When factoring is hard, use the quadratic formula

x = [−b ± √(b² − 4ac)] / 2a.

The discriminant b² − 4ac determines:
- Positive: two real solutions.
- Zero: one repeated real solution.
- Negative: no real solutions.

### The three special quadratics

*Difference of squares:* a² − b² = (a − b)(a + b).
- x² − 9 = (x − 3)(x + 3).
- 4x² − 25 = (2x − 5)(2x + 5).

*Perfect square trinomial:* a² + 2ab + b² = (a + b)². Or a² − 2ab + b² = (a − b)².
- x² + 6x + 9 = (x + 3)².
- x² − 10x + 25 = (x − 5)².

*Sum/difference of cubes (rare on GMAT):* a³ + b³ = (a + b)(a² − ab + b²) and a³ − b³ = (a − b)(a² + ab + b²).

### Factoring drill

Practice these to reflex:

x² − 16 = (x − 4)(x + 4)
x² + 8x + 16 = (x + 4)²
x² − 6x + 9 = (x − 3)²
x² − 5x + 6 = (x − 2)(x − 3)
x² + x − 6 = (x + 3)(x − 2)
x² − x − 12 = (x − 4)(x + 3)
2x² − 8 = 2(x − 2)(x + 2)
9x² − 25 = (3x − 5)(3x + 5)

## Systems of Linear Equations

Two equations in two unknowns:

ax + by = e
cx + dy = f

### Method 1: Substitution

Solve one equation for x or y; substitute into the other.

Example: x + y = 5, 2x − y = 4. From first: y = 5 − x. Substitute: 2x − (5 − x) = 4. 3x − 5 = 4. x = 3. So y = 2.

### Method 2: Elimination

Multiply equations to align coefficients on one variable, then add or subtract.

Example: x + y = 5, 2x − y = 4. Add: 3x = 9. x = 3. So y = 2.

### When the system has no solution

The equations are parallel lines: same slope, different intercept.

x + y = 5 and x + y = 7. No solution.

### When the system has infinite solutions

The equations are the same line.

x + y = 5 and 2x + 2y = 10. Infinite solutions.

### Three equations, three unknowns

Same approach: eliminate one variable from two pairs of equations to reduce to two equations in two unknowns. Then solve.

## When NOT to Use Algebra

Algebra is the default but not always the fastest. Avoid algebra when:

*Answer choices are numeric and easy to plug in.* Backsolve instead.

*Problem has variable expressions in answer choices.* Test cases instead.

*Three or more equations in three or more unknowns appear necessary.* Look for a structural shortcut — usually the problem has been constructed so a sum, product, or ratio is computable without solving for individual variables.

*Symmetric or pattern-based structure.* Use the structural identity instead.

## Twelve Worked Examples

### Worked example 1 — basic linear

*Problem.* If 3x − 7 = 14, what is x?

*Solve.* 3x = 21, x = 7.

*Answer: 7.*

### Worked example 2 — distributing

*Problem.* If 4(x − 3) = 2x + 6, what is x?

*Solve.* 4x − 12 = 2x + 6. 2x = 18. x = 9.

*Answer: 9.*

### Worked example 3 — system by substitution

*Problem.* If 2x + y = 11 and x − y = 1, what is x?

*Solve.* From second: x = 1 + y. Substitute: 2(1 + y) + y = 11. 2 + 2y + y = 11. 3y = 9. y = 3. x = 4.

*Answer: 4.*

### Worked example 4 — system by elimination

*Problem.* If 3a + 2b = 19 and a − b = 3, what is a + b?

*Solve.* From second: a = b + 3. Substitute: 3(b + 3) + 2b = 19. 5b + 9 = 19. b = 2. a = 5. a + b = 7.

*Answer: 7.*

### Worked example 5 — quadratic by factoring

*Problem.* If x² − x − 12 = 0, what are the values of x?

*Solve.* Factor: numbers that multiply to −12 and sum to −1 → −4 and 3. (x − 4)(x + 3) = 0. x = 4 or x = −3.

*Answer: 4 or −3.*

### Worked example 6 — quadratic by formula

*Problem.* If 2x² − 5x − 3 = 0, what are the values of x?

*Solve.* Discriminant: 25 + 24 = 49 = 7². x = (5 ± 7) / 4. x = 12/4 = 3 or x = −2/4 = −1/2.

*Answer: 3 or −1/2.*

### Worked example 7 — difference of squares

*Problem.* If x² − 64 = 0, what are the values of x?

*Solve.* (x − 8)(x + 8) = 0. x = 8 or x = −8.

*Answer: 8 or −8.*

### Worked example 8 — perfect square trinomial

*Problem.* If (x − 5)² = 16, what are the values of x?

*Solve.* x − 5 = ±4. x = 9 or x = 1.

*Answer: 9 or 1.*

### Worked example 9 — system with three variables

*Problem.* If x + y = 7, y + z = 9, and x + z = 8, what is x + y + z?

*Solve.* Add all three equations: 2(x + y + z) = 24. x + y + z = 12.

*Answer: 12.*

### Worked example 10 — when not to use algebra

*Problem.* If a + b = 10 and ab = 21, what is a² + b²?

*Solve.* Don't solve for a and b individually. Use identity: (a + b)² = a² + 2ab + b². So a² + b² = (a + b)² − 2ab = 100 − 42 = 58.

*Answer: 58.*

### Worked example 11 — using the answer choices (backsolve)

*Problem.* If x is a positive integer and (x + 2)(x − 5) = 0, what is x?

(A) 1  (B) 2  (C) 3  (D) 4  (E) 5

*Solve.* (x + 2)(x − 5) = 0 means x = −2 or x = 5. Positive integer: x = 5.

*Answer: 5.*

### Worked example 12 — hidden quadratic

*Problem.* If x³ − 9x = 0, what are the possible values of x?

*Solve.* Factor out x: x(x² − 9) = 0. Then x = 0 or x² − 9 = 0. The second factors: (x − 3)(x + 3) = 0. So x = 0, 3, or −3.

*Answer: 0, 3, or −3.*

## Algebra Trap Compendium

### Trap 1: Sign error during distribution

−(x − 3) becomes −x − 3 instead of −x + 3.

### Trap 2: Forgetting the negative root

Square root of x² = 9 gives x = ±3, not just x = 3.

### Trap 3: Dividing by a variable that could be zero

x² = 5x → don't divide by x. Factor: x(x − 5) = 0, x = 0 or 5.

### Trap 4: Extraneous solutions from squaring

Squaring both sides can introduce false solutions. Check answers in the original equation.

### Trap 5: Sign-flip in quadratic formula

Mistakes in the ± or in 4ac sign.

### Trap 6: Linear system parallel/coincident lines

Two equations that are equivalent give infinite solutions; two parallel lines give none.

### Trap 7: Cross-multiplying inequalities with unknown signs

If x/y < 3 and y could be negative, don't cross-multiply.

### Trap 8: Forgetting to apply both roots

Quadratic has two roots; sometimes the problem requires checking both.

### Trap 9: Conflating equation with expression

x² − 5 = 0 vs x² − 5 (just an expression).

### Trap 10: Stopping at intermediate step

Solving for x but the question asked for x + 1 or 2x.

## Pacing for Algebra

Linear equation: 30 seconds.
Linear system (2 variables): 60–90 seconds.
Quadratic (factor or formula): 60–90 seconds.
Hidden algebra in word problem: 90–120 seconds.

If above 2:30, walk away.

## Study Protocol for Algebra

### Week 1: Mechanical fluency

Drill linear equations and basic factoring until reflexive. 20 problems per day.

### Week 2: Quadratics

Factor + formula until reflexive. Special quadratics (diff of squares, perfect square) at sight.

### Week 3: Systems

Two-variable systems via substitution and elimination. Recognize parallel/coincident cases.

### Week 4: Pattern recognition

Hidden quadratics in word problems. Identity-based shortcuts.

### Week 5: Method selection

Practice deciding whether algebra, backsolve, or test cases is fastest.

### Week 6: Timed mixed practice

Full Quant sections.

## Algebra Elite Habits

### They factor instantly.

x² + 5x + 6 → (x + 2)(x + 3) without thinking.

### They recognize special quadratics at sight.

a² − b² = (a − b)(a + b).

### They use identities, not just expansion.

(a + b)² = a² + 2ab + b².

### They solve systems via the cleaner method.

Substitution when one variable is isolated; elimination when coefficients align.

### They check both roots.

Quadratic answers come in pairs.

### They don't divide by variables.

Factor instead.

### They preserve signs.

Distribution is a high-error operation.

### They consider non-algebraic methods.

Backsolve, test cases, structural identity.

### They verify answers.

Plug back in.

### They walk away at 2:30.

Same as all Quant.

## Closing Note

Algebra is the foundation. Master it, and every other Quant subskill flows more easily. Six weeks of disciplined practice using this guide as reference will move algebra accuracy noticeably and improve performance on every other algebra-touching subskill.

I score 735s on this test. Algebra fluency is what makes the rest of Quant feel effortless. Now it's yours.
