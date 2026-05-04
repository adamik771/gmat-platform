---
title: Quant Exponents and Roots Micro-Guide
description: The deep subskill playbook for exponents and roots. The core rules, the same-base reduction, fractional exponents, the negative-exponent trap, and ten fully worked examples.
section: Quant
type: reference
---

# Quant Exponents and Roots Micro-Guide

## Introduction

Exponents are the purest content subskill on Quant. You either know the rules or you don't — there's no room for "figuring it out" mid-problem. Roots are exponents in disguise (square root = exponent 1/2, cube root = exponent 1/3). Master the rules cold, and exponent problems become 30-second wins.

I score 735s on this test. Exponent fluency means I solve these problems by inspection. The rules below should be memorized and reflexive.

*All worked examples are my own writing*, original to this guide.

## The Exponent Rules (Cold Memory)

### Multiplication, same base

x^a × x^b = x^(a+b).

Example: 2³ × 2⁴ = 2⁷ = 128.

### Division, same base

x^a / x^b = x^(a−b).

Example: 5⁵ / 5² = 5³ = 125.

### Power of a power

(x^a)^b = x^(ab).

Example: (3²)³ = 3⁶ = 729.

### Power of a product

(xy)^a = x^a × y^a.

Example: (2×3)² = 2² × 3² = 4 × 9 = 36.

### Power of a quotient

(x/y)^a = x^a / y^a.

Example: (4/2)³ = 4³/2³ = 64/8 = 8.

### Zero exponent

x⁰ = 1, for any x ≠ 0.

### Negative exponent

x^(−a) = 1/x^a.

Example: 2^(−3) = 1/2³ = 1/8.

### Fractional exponent

x^(1/n) = nth root of x.

Example: 8^(1/3) = ∛8 = 2.

x^(m/n) = (x^(1/n))^m = (nth root of x)^m.

Example: 8^(2/3) = (∛8)² = 2² = 4.

### Negative bases

(−x)^even = positive.
(−x)^odd = negative.

(−2)^4 = 16. (−2)^5 = −32.

## Roots

### Square root

√x = x^(1/2). For x ≥ 0.

√x² = |x|, not just x. The square root is always non-negative.

### Cube root

∛x = x^(1/3). Defined for all real x (including negatives).

∛(−8) = −2.

### Root rules

√(xy) = √x × √y, for x, y ≥ 0.
√(x/y) = √x / √y, for x ≥ 0, y > 0.
(√x)² = x, for x ≥ 0.

### Memorized roots

√1 = 1, √4 = 2, √9 = 3, √16 = 4, √25 = 5, √36 = 6, √49 = 7, √64 = 8, √81 = 9, √100 = 10, √121 = 11, √144 = 12, √169 = 13, √196 = 14, √225 = 15.

Approximate roots: √2 ≈ 1.41, √3 ≈ 1.73, √5 ≈ 2.24, √7 ≈ 2.65, √10 ≈ 3.16.

## Memorized Powers

2¹ through 2¹⁰: 2, 4, 8, 16, 32, 64, 128, 256, 512, 1024.

Note 2¹⁰ ≈ 1000 — useful for sanity-checking large exponents.

3¹ through 3⁵: 3, 9, 27, 81, 243.

5¹ through 5⁴: 5, 25, 125, 625.

## The Same-Base Trap

A sum of same-base terms does NOT combine the exponents.

2¹⁰ + 2¹⁰ ≠ 2²⁰. Instead, factor:

2¹⁰ + 2¹⁰ = 2 × 2¹⁰ = 2¹¹.

Generalizing: x^a + x^a = 2 × x^a = 2x^a (not necessarily a clean exponent).

x^a + x^b (different exponents) factors as x^min(a,b) × (1 + x^(|a-b|)). Not always pretty.

## The Negative-Exponent Trap

x^(−a) is 1/x^a, not −x^a.

2^(−3) = 1/8, not −8.

The negative flips to denominator; doesn't make the value negative.

## Ten Worked Examples

### Worked example 1 — same-base multiplication

*Problem.* What is 2³ × 2⁵?

*Solve.* 2^(3+5) = 2⁸ = 256.

*Answer: 256.*

### Worked example 2 — power of a power

*Problem.* What is (3²)⁴?

*Solve.* 3^(2×4) = 3⁸ = 6561.

*Answer: 6561.*

### Worked example 3 — fractional exponent

*Problem.* What is 16^(3/4)?

*Solve.* 16^(1/4) = 2 (since 2⁴ = 16). Then 2³ = 8.

*Answer: 8.*

### Worked example 4 — negative exponent

*Problem.* What is 4^(−2)?

*Solve.* 1 / 4² = 1/16.

*Answer: 1/16.*

### Worked example 5 — root simplification

*Problem.* Simplify √72.

*Solve.* 72 = 36 × 2. √72 = √36 × √2 = 6√2.

*Answer: 6√2.*

### Worked example 6 — same-base sum

*Problem.* If 3^x + 3^x + 3^x = 3¹⁰, what is x?

*Solve.* 3 × 3^x = 3¹ × 3^x = 3^(x+1) = 3¹⁰. x + 1 = 10. x = 9.

*Answer: 9.*

### Worked example 7 — combining bases

*Problem.* Simplify 6⁵ / 3⁵.

*Solve.* (6/3)⁵ = 2⁵ = 32.

*Answer: 32.*

### Worked example 8 — negative base

*Problem.* What is (−3)⁴?

*Solve.* Even exponent, so positive. 3⁴ = 81.

*Answer: 81.*

### Worked example 9 — solving for exponent

*Problem.* If 2^(x+1) = 32, what is x?

*Solve.* 32 = 2⁵. So x + 1 = 5. x = 4.

*Answer: 4.*

### Worked example 10 — root and exponent

*Problem.* If √x = 6, what is x²?

*Solve.* √x = 6 means x = 36. x² = 36² = 1296.

*Answer: 1296.*

## Exponents and Roots Trap Compendium

### Trap 1: Same-base sum

x^a + x^a = 2x^a, not x^(2a).

### Trap 2: Negative exponent sign

x^(−a) = 1/x^a, not −x^a.

### Trap 3: Square root sign

√x² = |x|, not x.

### Trap 4: Negative under square root

√(−9) is not a real number on the GMAT.

### Trap 5: Distributing exponent over a sum

(a + b)^n ≠ a^n + b^n. Use the binomial theorem or expansion.

### Trap 6: Fractional exponent decimal

x^(3/2) is x^1.5, but harder to compute as decimal — use the fractional form.

### Trap 7: Zero exponent

x⁰ = 1 only for x ≠ 0. 0⁰ is undefined.

### Trap 8: Power vs root mismatch

x^(1/2) is square root, not 1/(2x).

### Trap 9: Negative base with even exponent

(−2)⁴ = 16, not −16.

### Trap 10: Same-base division

x^a / x^b = x^(a−b), not x^(a/b).

## Pacing

Exponent problem: 30–60 seconds typically. They're mechanical once the rules are reflexive.

## Study Protocol

### Week 1: Rule memorization

Drill all rules. 20 problems per day.

### Week 2: Same-base patterns

Sum, product, division, power of power.

### Week 3: Fractional and negative exponents

Drill 10 per day.

### Week 4: Root simplification and applications.

### Week 5: Mixed practice with timer.

## Exponents and Roots Elite Habits

### They know all rules cold.

No looking up.

### They factor rather than expand.

Same-base sums become products.

### They convert roots to fractional exponents.

Same operation, different notation.

### They handle negative exponents reflexively.

1/x^a.

### They memorize powers of 2, 3, 5.

Up to 2¹⁰, 3⁵, 5⁴.

### They simplify roots before computing.

√72 = 6√2, not 8.485.

### They check sign of negative base.

Even exponent positive, odd negative.

### They never compute fractional exponents as decimals.

Use the fraction form.

### They sanity-check magnitudes.

2¹⁰ ≈ 1000.

### They walk away at 2:30.

Same as all Quant.

## Closing Note

Exponents and roots are pure rule-application. Master the rules; apply them. The trap list is finite; the methods are mechanical.

I score 735s on this test. Exponent problems take me 20 seconds. The reflex comes from drilling. Now it's yours.
