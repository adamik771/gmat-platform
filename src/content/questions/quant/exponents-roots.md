---
section: Quant
topic: Exponents and Roots
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 2⁵ * 2³?

- A) 2⁸
- B) 2¹⁵
- C) 4⁸
- D) 4¹⁵
- E) 2²

**answer:** A
**fastest_path:** Same base multiplied — add the exponents in your head: 5 + 3 = 8.
**explanation:** This problem applies the product rule for powers that share a common base: for any nonzero base a and integers m and n, a^m times a^n equals a^(m+n). The base is preserved, and the exponents are added.

Let the expression be 2^5 times 2^3. Both factors have the same base, 2, so we retain that base and add the exponents:

2^5 times 2^3 = 2^(5+3) = 2^8.

The base remains 2, and the exponents 5 and 3 combine through addition to give 8.

The correct answer is A.
**mistake_b:** 2¹⁵ comes from multiplying the exponents (5 × 3). Exponents multiply only when a power is raised to another power, not when two powers are multiplied.
**mistake_c:** 4⁸ multiplies the bases (2 × 2). When combining like-base powers, the base never changes — only the exponents combine.
**mistake_d:** 4¹⁵ makes both errors at once: bases multiplied and exponents multiplied.
**mistake_e:** 2² subtracts the exponents (5 − 3), which is the rule for division, not multiplication.
**common_trap:** Confusing the product rule (add exponents) with the power rule (multiply exponents).
**takeaway:** Multiplying like bases adds exponents; raising a power to a power multiplies them. The base stays unchanged either way.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots & Radicals

Simplify √50.

- A) 5
- B) 5*√2
- C) 2*√5
- D) 10*√5
- E) 25*√2

**answer:** B
**fastest_path:** Pull the largest perfect square out of 50: 50 = 25 × 2, so √50 = 5√2.
**explanation:** To simplify the square root of an integer, we factor the integer so that one factor is the largest possible perfect square, and then we apply the rule that the square root of a product equals the product of the square roots.

Let n = 50. We seek a factorization of the form n = (perfect square) × (remaining factor). The perfect squares are 1, 4, 9, 16, 25, 36, 49, and so on. The largest perfect square that divides 50 is 25, since 50 = 25 × 2.

We therefore write:

√50 = √(25 × 2)

Applying the rule √(ab) = √a × √b, we obtain:

√50 = √25 × √2

Since √25 = 5, this simplifies to:

√50 = 5√2

The correct answer is B.
**mistake_a:** 5 drops the leftover √2 after extracting √25. Check by squaring: 5² = 25, not 50.
**mistake_c:** 2√5 reverses the factor pair — it equals √20, not √50. The perfect square in 50 is 25, which exits the radical as 5, leaving 2 inside.
**mistake_d:** 10√5 equals √500, ten times too large — it comes from splitting 50 as 10 × 5 and moving the 10 outside without square-rooting it.
**mistake_e:** 25√2 moves the 25 outside without taking its square root. The factor that exits the radical is √25 = 5, not 25.
**common_trap:** Moving a factor out of a square root without square-rooting it on the way out — 25 leaves the radical as 5, never as 25.
**takeaway:** To simplify √n, factor out the largest perfect square; that factor exits as its square root, and everything else stays inside.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Scientific Notation

Express 0.00045 in scientific notation.

- A) 4.5 * 10³
- B) 4.5 * 10⁻³
- C) 4.5 * 10⁻⁴
- D) 45 * 10⁻⁵
- E) 0.45 * 10⁻³

**answer:** C
**fastest_path:** Count the hops that put the decimal after the first nonzero digit: 4 hops right, so the exponent is −4.
**explanation:** A number is written in scientific notation as the product of a coefficient and an integer power of 10, where the coefficient c satisfies 1 ≤ |c| < 10. The method is to reposition the decimal point so that exactly one nonzero digit stands to its left, and then to record the number of places the decimal point was moved as the exponent on 10.

Let the given number be 0.00045. We seek a coefficient c with 1 ≤ c < 10 such that 0.00045 = c × 10^n for some integer n. Reading the digits, the first nonzero digit is 4, so the coefficient must be 4.5.

To obtain 4.5 from 0.00045, we move the decimal point 4 places to the right:

0.00045 → 0.0045 → 0.045 → 0.45 → 4.5.

Moving the decimal point 4 places to the right multiplies the value by 10^4. To leave the value unchanged, we must compensate by multiplying by 10^(-4). Equivalently, because the original number is less than 1, the exponent on 10 is negative. Therefore

0.00045 = 4.5 × 10^(-4).

As a check, 4.5 × 10^(-4) = 4.5 ÷ 10,000 = 0.00045, which matches the given number.

The correct answer is C.
**mistake_a:** 4.5 * 10³ has the right digit count but the wrong sign — a positive exponent would make the number large, while 0.00045 is less than 1.
**mistake_b:** 4.5 * 10⁻³ counts only the three zeros after the decimal point instead of the four places the decimal actually moves.
**mistake_d:** 45 * 10⁻⁵ equals 0.00045 numerically, but the coefficient 45 violates the format: scientific notation requires 1 ≤ coefficient < 10.
**mistake_e:** 0.45 * 10⁻³ also equals 0.00045 numerically, but the coefficient 0.45 is below 1, so it is not scientific notation.
**common_trap:** Two of the wrong choices equal 0.00045 in value — the question tests the format rule (exactly one nonzero digit left of the decimal), not just the arithmetic.
**takeaway:** In scientific notation the coefficient sits in [1, 10); numbers below 1 take a negative exponent equal to the number of places moved.
**related_reading:** reading-quant-02-arithmetic-foundations

---

## Q4
**difficulty:** Easy
**type:** Problem Solving
**topic:** Equations with Exponents

If 2^x = 32, what is x?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 16

**answer:** C
**fastest_path:** Walk the doublings: 2, 4, 8, 16, 32 — five steps, so x = 5.
**explanation:** This problem is solved using the principle that if two powers with the same base are equal, then their exponents must be equal. To apply this principle, the given equation must be expressed with a common base on both sides.

Let x be the unknown exponent in the equation 2^x = 32. The base on the left side is 2, so we rewrite the right side as a power of 2. Since 2^5 = 2 multiplied by itself five times, we have 2 times 2 times 2 times 2 times 2 = 4 times 2 times 2 times 2 = 8 times 2 times 2 = 16 times 2 = 32. Thus 32 = 2^5.

Substituting this expression into the original equation gives 2^x = 2^5. Because the two sides are powers of the same base 2, the exponents must be equal. Therefore x = 5.

The correct answer is C.
**mistake_a:** 3 stops the doubling count too early — 2³ is 8, not 32.
**mistake_b:** 4 is one doubling short: 2⁴ = 16.
**mistake_d:** 6 is one doubling too far: 2⁶ = 64.
**mistake_e:** 16 treats 2^x as 2 times x and divides 32 by 2 — confusing exponentiation with multiplication.
**common_trap:** Reading 2^x as "2 times x" and answering 16.
**takeaway:** Know the powers of 2 up to 2¹⁰ = 1,024 cold — equations like 2^x = 32 should be recall, not computation.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q5
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 3⁻²?

- A) -9
- B) -6
- C) -1/9
- D) 1/6
- E) 1/9

**answer:** E
**fastest_path:** Negative exponent means reciprocal: 3⁻² = 1/3² = 1/9. No sign change.
**explanation:** This problem is governed by the negative-exponent rule, which states that for any nonzero base a and positive integer n, a raised to the power of negative n equals the reciprocal of a raised to the power of n. That is, a^(-n) = 1/(a^n).

Let the expression to be evaluated be 3^(-2). Applying the negative-exponent rule, we move the base into the denominator and make the exponent positive:

3^(-2) = 1/(3^2).

We then evaluate the power in the denominator:

3^2 = 3 * 3 = 9.

Substituting this value gives:

3^(-2) = 1/9.

It should be noted that the negative sign in the exponent indicates a reciprocal, not a negative result; because the base is positive, the value of the expression is positive.

The correct answer is E.
**mistake_a:** −9 treats the negative exponent as negating the result: −(3²). The exponent's sign flips the base into a denominator; it never flips the sign of the value.
**mistake_b:** −6 multiplies base by exponent (3 × 2) and attaches the minus sign — two errors stacked.
**mistake_c:** −1/9 takes the reciprocal correctly but still attaches a negative sign. A positive base raised to any real power stays positive.
**mistake_d:** 1/6 takes the reciprocal of 3 × 2 instead of 3².
**common_trap:** Believing the minus sign in the exponent makes the answer negative — it only moves the power into the denominator.
**takeaway:** a⁻ⁿ = 1/aⁿ. The sign of the result comes from the base, never from the exponent.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q6
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

Which of the following equals (x⁴ * y⁻²) / (x⁻¹ * y³)?

- A) x³ * y⁻⁵
- B) x⁵ * y⁻⁵
- C) x⁵ * y⁻¹
- D) x³ * y⁻¹
- E) x⁵ * y

**answer:** B
**fastest_path:** Subtract exponents base by base: x gets 4 − (−1) = 5, y gets −2 − 3 = −5.
**explanation:** When a power of one base is divided by a power of the same base, the quotient is found by subtracting the exponent in the denominator from the exponent in the numerator. This is the quotient rule for exponents: a^m / a^n = a^(m - n). The expression contains two distinct bases, x and y, so the rule is applied to each base separately.

Let the expression be (x^4 * y^(-2)) / (x^(-1) * y^3). Group the factors by common base so that the x-terms form one quotient and the y-terms form another:

(x^4 * y^(-2)) / (x^(-1) * y^3) = (x^4 / x^(-1)) * (y^(-2) / y^3).

Apply the quotient rule to the x-terms. The exponent of x is the numerator exponent minus the denominator exponent: 4 - (-1) = 4 + 1 = 5. Hence the x-terms simplify to x^5.

Apply the quotient rule to the y-terms. The exponent of y is (-2) - 3 = -5. Hence the y-terms simplify to y^(-5).

Combining the two results gives x^5 * y^(-5).

The correct answer is B.
**mistake_a:** x³ comes from computing 4 − 1 instead of 4 − (−1) — the negative exponent in the denominator was dropped. Dividing by x⁻¹ adds a power of x.
**mistake_c:** The y-part is right only if (−2) − 3 were −1; it is −5. This choice botches the y subtraction while getting x right.
**mistake_d:** x³ and y⁻¹ together — both subtractions done while ignoring the signs on the exponents.
**mistake_e:** y¹ flips the y subtraction, effectively computing 3 − 2 with a lost sign; the correct exponent is (−2) − 3 = −5.
**common_trap:** Subtracting a negative exponent: 4 − (−1) is 5, not 3. A negative power downstairs boosts the power upstairs.
**takeaway:** Quotient rule is top exponent minus bottom exponent, signs included; handle each base separately and slow down at every double negative.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q7
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots & Radicals

Simplify √12 + √27.

- A) √39
- B) 3*√13
- C) 5*√3
- D) 6*√3
- E) 13*√3

**answer:** C
**fastest_path:** Reduce both radicals to multiples of √3 — 2√3 + 3√3 — then add the coefficients.
**explanation:** Two radical terms may be combined by addition only when they have the same radicand; in that case we add the coefficients while keeping the common radical, exactly as we would combine like terms in algebra. The radicands themselves are never added under a single root, since in general √a + √b is not equal to √(a + b). The method, therefore, is to simplify each radical fully and then combine those that share a radicand.

We begin by simplifying each term. For the first term, we factor 12 as a perfect square times a remaining factor: 12 = 4 × 3. Hence √12 = √(4 × 3) = √4 · √3 = 2√3. For the second term, we factor 27 in the same manner: 27 = 9 × 3. Hence √27 = √(9 × 3) = √9 · √3 = 3√3.

Both simplified terms now share the radicand 3, so they are like terms and may be added by summing their coefficients:

2√3 + 3√3 = (2 + 3)√3 = 5√3.

The correct answer is C.
**mistake_a:** √39 adds the radicands: √12 + √27 is not √(12 + 27). Roots do not distribute over addition.
**mistake_b:** 3√13 starts from the same invalid sum 39, then pulls the factor 3 out of √39 without square-rooting it.
**mistake_d:** 6√3 multiplies the simplified coefficients (2 × 3) instead of adding them — that would answer √12 × √27 territory, not a sum.
**mistake_e:** 13√3 also traces back to the invalid 12 + 27 = 39 move (39 = 13 × 3), rather than simplifying each radical first.
**common_trap:** Adding under the radical — √a + √b ≠ √(a + b). Every distractor here grows out of that one move.
**takeaway:** Radicals add like algebraic terms: simplify each until the radicands match, then add only the coefficients.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fractional Exponents

What is the value of 27^(2/3)?

- A) 3
- B) 6
- C) 9
- D) 18
- E) 81

**answer:** C
**fastest_path:** Root first, then power: cube root of 27 is 3, and 3² = 9.
**explanation:** A fractional exponent denotes a combination of a root and a power, governed by the rule a^(m/n) = (a^(1/n))^m. The denominator n indicates the n-th root, and the numerator m indicates the power to which that root is raised. Because the order of these two operations does not affect the result, it is generally efficient to take the root first, since doing so keeps the intermediate numbers small.

Let N = 27^(2/3). Applying the rule with a = 27, m = 2, and n = 3 gives N = (27^(1/3))^2.

First we evaluate the inner cube root. Since 3^3 = 27, we have 27^(1/3) = 3.

Next we raise this result to the second power: 3^2 = 9.

Therefore N = 9.

The correct answer is C.
**mistake_a:** 3 stops after the cube root — that evaluates 27^(1/3), ignoring the numerator 2 entirely.
**mistake_b:** 6 multiplies the cube root by the numerator (3 × 2) instead of raising it to the 2nd power.
**mistake_d:** 18 multiplies the base by the fraction: 27 × 2/3. A fractional exponent is never a multiplier.
**common_trap:** Using only half of the fraction — the denominator takes the root AND the numerator applies a power.
**takeaway:** For a^(m/n), take the n-th root first (keeps numbers small), then raise to the m-th power.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Scientific Notation

If (3 * 10⁴) * (2 * 10⁻⁷) = k, what is k?

- A) 6 * 10⁻²⁸
- B) 6 * 10⁻¹¹
- C) 6 * 10⁻³
- D) 5 * 10⁻³
- E) 6 * 10¹¹

**answer:** C
**fastest_path:** Coefficients multiply (3 × 2 = 6); exponents add (4 + (−7) = −3).
**explanation:** When two numbers expressed in scientific notation are multiplied, the governing method is to separate each factor into its coefficient and its power of 10, then multiply the coefficients together and apply the product rule for exponents to the powers of 10. The product rule states that for a common base, the exponents are added: 10^a times 10^b equals 10^(a+b).

Let k = (3 * 10^4) * (2 * 10^-7). We treat the coefficients and the powers of 10 separately.

The coefficients multiply to give 3 * 2 = 6.

The powers of 10, having the common base 10, are combined by adding their exponents: 10^4 * 10^-7 = 10^(4 + (-7)) = 10^-3.

Combining the two results, we obtain k = 6 * 10^-3.

The correct answer is C.
**mistake_a:** 10⁻²⁸ multiplies the exponents (4 × −7) instead of adding them.
**mistake_b:** 10⁻¹¹ adds the magnitudes as if both exponents were negative: −(4 + 7).
**mistake_d:** The coefficient 5 adds 3 + 2 instead of multiplying — coefficients multiply just like any other factors.
**mistake_e:** 10¹¹ drops the negative sign on the −7 before adding.
**common_trap:** The sign slip in 4 + (−7) — the negative exponent has the larger magnitude, so the sum is −3, not +3 or −11.
**takeaway:** Scientific-notation products split cleanly: multiply the coefficients, add the exponents, and mind every sign.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Estimation

Approximately what is the value of 2¹⁰ / 10³?

- A) 0.01
- B) 0.1
- C) Slightly less than 1
- D) Slightly greater than 1
- E) 10

**answer:** D
**fastest_path:** Recall 2¹⁰ = 1,024 and 10³ = 1,000 — the ratio is 1.024, a hair above 1.
**explanation:** This problem is solved efficiently by recalling a standard benchmark: the power 2^10 equals 1,024, a value just over 1,000. Because 1,000 is exactly 10^3, the two quantities in the ratio are nearly equal, and the task reduces to determining which is larger.

Let N denote the value of the expression. We translate the expression directly into N = 2^10 / 10^3. Substituting the known values gives N = 1,024 / 1,000.

We now carry out the division. Dividing 1,024 by 1,000 yields N = 1.024. Since 1.024 exceeds 1 by a small margin of 0.024, the value is slightly greater than 1.

The correct answer is D.
**mistake_b:** 0.1 assumes the larger base must win — base 10 beats base 2 per step, but 2 takes ten steps to 10's three.
**mistake_c:** Slightly less than 1 knows the benchmark but misremembers its direction: 2¹⁰ = 1,024 sits just ABOVE 1,000, not below.
**mistake_e:** 10 overshoots the benchmark, treating 2¹⁰ as roughly 10⁴ instead of just over 10³.
**common_trap:** Knowing 2¹⁰ ≈ 1,000 but forgetting which side of 1,000 it lands on — the question is built entirely on that direction.
**takeaway:** Burn in 2¹⁰ = 1,024, slightly more than 10³ — it is the standard bridge between powers of 2 and powers of 10.
**related_reading:** reading-quant-02-arithmetic-foundations

---

## Q11
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

If (2^a)³ = 2¹², what is a?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 9

**answer:** C
**fastest_path:** Power to a power multiplies: 3a = 12, so a = 4.
**explanation:** This problem is governed by the power-of-a-power rule of exponents, which states that raising a power to another power multiplies the exponents: (b^m)^n = b^(m·n). Because both sides of the given equation can be written as powers of the same base, 2, the equation can be solved by setting the exponents equal.

Let a be the unknown exponent. The left side, (2^a)³, raises the power 2^a to the third power. Applying the power-of-a-power rule gives (2^a)³ = 2^(3a). The equation therefore becomes 2^(3a) = 2¹².

Since the two expressions are powers of the same base and are equal, their exponents must be equal. Thus 3a = 12. Dividing both sides by 3 yields a = 4.

The correct answer is C.
**mistake_a:** 2 folds the base into the arithmetic (2 × 3 × a = 12) — the base 2 is not a factor of the exponent equation.
**mistake_d:** 6 divides 12 by the base 2 instead of by the outer exponent 3.
**mistake_e:** 9 adds the exponents (a + 3 = 12), using the product rule where the power rule applies.
**common_trap:** Adding instead of multiplying when a power is raised to a power — (2^a)³ is 2^(3a), not 2^(a+3).
**takeaway:** Nested exponents multiply; multiplied like-base powers add. Keeping those two rules separate is most of exponent mastery.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q12
**difficulty:** Hard
**type:** Problem Solving
**topic:** Roots & Radicals

Rationalize the denominator: 6 / (√3 + 1).

- A) 6*√3 - 6
- B) 3*√3 - 3
- C) 3*√3 + 3
- D) 2*√3 + 2
- E) √3 - 1

**answer:** B
**fastest_path:** Multiply by the conjugate (√3 − 1)/(√3 − 1); the denominator collapses to 3 − 1 = 2.
**explanation:** To rationalize a denominator that consists of a sum or difference involving a radical, we multiply both the numerator and the denominator by the conjugate of the denominator, where the conjugate is formed by reversing the sign between the two terms. This works because the product of a binomial and its conjugate is a difference of squares, (a + b)(a - b) = a^2 - b^2, which eliminates the radical when one of the terms is a square root.

Let the expression be 6 / (sqrt(3) + 1). The conjugate of the denominator sqrt(3) + 1 is sqrt(3) - 1. We multiply the expression by (sqrt(3) - 1) / (sqrt(3) - 1), which equals 1 and therefore does not change the value of the expression.

The new numerator is 6 * (sqrt(3) - 1) = 6*sqrt(3) - 6.

The new denominator is (sqrt(3) + 1)(sqrt(3) - 1) = (sqrt(3))^2 - (1)^2 = 3 - 1 = 2.

The expression becomes (6*sqrt(3) - 6) / 2. Dividing each term in the numerator by 2 gives 3*sqrt(3) - 3.

The correct answer is B.
**mistake_a:** 6√3 − 6 is the new numerator only — the final division by the denominator 2 was skipped.
**mistake_c:** 3√3 + 3 carries a sign error: the conjugate of √3 + 1 is √3 − 1, and the minus sign must survive into the numerator product.
**mistake_d:** 2√3 + 2 divides by 3 (from squaring √3) instead of by the full conjugate product 3 − 1 = 2, alongside a sign slip.
**mistake_e:** √3 − 1 is the conjugate itself, not the answer — the multiplication was never carried out.
**common_trap:** Botching the conjugate product: (√3 + 1)(√3 − 1) = 3 − 1 = 2, not 4, and not 3 + 1.
**takeaway:** Conjugate multiplication turns a √a ± b denominator into a − b²; finish by dividing every term of the numerator.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fractional Exponents

If x > 0 and x^(1/2) * x^(1/3) = x^k, what is k?

- A) 1/6
- B) 2/6
- C) 1/5
- D) 5/6
- E) 1

**answer:** D
**fastest_path:** Product of like bases adds exponents: 1/2 + 1/3 = 5/6. One fraction addition, nothing else.
**explanation:** The governing principle is the product rule for powers with the same base: for any positive base and any real exponents a and b, the product of two powers is found by adding the exponents, so that x^a multiplied by x^b equals x^(a + b). We are given that x > 0, which guarantees that the fractional powers are well defined, and we are told that x^(1/2) multiplied by x^(1/3) equals x^k. Applying the product rule to the left-hand side, we add the two exponents to obtain x^(1/2 + 1/3). To add the fractions 1/2 and 1/3, we use the common denominator 6: 1/2 equals 3/6 and 1/3 equals 2/6, so 1/2 + 1/3 equals 3/6 + 2/6, which equals 5/6. Therefore the left-hand side equals x^(5/6). Setting this equal to x^k gives x^(5/6) = x^k, and because the base x is the same and is positive, the exponents must be equal. Hence k = 5/6.

The correct answer is D.
**mistake_a:** 1/6 multiplies the exponents — that is the rule for a power of a power, not for a product.
**mistake_b:** 2/6 puts the numerator sum over the common denominator without converting: 1/2 + 1/3 is 3/6 + 2/6, not (1 + 1)/6.
**mistake_c:** 1/5 adds the denominators only: 1/(2 + 3) is not how fractions add.
**mistake_e:** 1 assumes a half power times a third power restores the whole power — the exponents sum to 5/6, short of 1.
**common_trap:** Multiplying the exponents (getting 1/6) instead of adding them; fractional exponents follow the same product rule as integers.
**takeaway:** x^a · x^b = x^(a+b) regardless of whether a and b are whole — convert to a common denominator and add.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q14
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Exponent Estimation

If n is a positive integer, is 2^n greater than 10⁶?

(1) n > 19
(2) n is a multiple of 10

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER alone is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** This question asks whether 2^n is greater than 10^6, where n is a positive integer. The governing approach is to compare the two quantities using the standard powers-of-two benchmark 2^10 = 1,024, which is slightly greater than 10^3. Squaring both sides of that approximation gives 2^20 = 1,048,576, which exceeds 10^6 = 1,000,000. We use this fact to evaluate each statement.

Statement (1) gives n > 19. Since n is a positive integer, the smallest value n can take is 20. For every such n we have 2^n >= 2^20 = 1,048,576 > 1,000,000. Thus 2^n is greater than 10^6 in all permitted cases, and the answer to the question is a consistent yes. Statement (1) is sufficient.

Statement (2) gives that n is a multiple of 10. Let us test the permitted values. If n = 10, then 2^10 = 1,024, which is not greater than 10^6, so the answer is no. If n = 20, then 2^20 = 1,048,576, which is greater than 10^6, so the answer is yes. Because the answer can be either no or yes, Statement (2) does not determine a single response and is therefore not sufficient.

Since Statement (1) alone is sufficient and Statement (2) alone is not, statement (1) alone is sufficient but statement (2) alone is not.

The correct answer is A.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q15
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Equations with Exponents

What is the value of x?

(1) 2^x * 2^(x+1) = 32
(2) x is a positive integer

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER alone is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** This question asks for the value of x, so a statement is sufficient only if it pins x down to a single value. The governing principle is the product-of-powers rule for exponents: for a common base b, b^m multiplied by b^n equals b^(m+n), and when two powers of the same base are equal, their exponents must be equal.

Statement (1) gives 2^x times 2^(x+1) = 32. Combining the powers on the left yields 2^(x + (x+1)) = 2^(2x+1). Writing 32 as a power of 2 gives 32 = 2^5. The equation becomes 2^(2x+1) = 2^5. Because the bases are equal, the exponents must be equal, so 2x + 1 = 5. Subtracting 1 from both sides gives 2x = 4, and dividing by 2 gives x = 2. This determines a single value of x, so Statement (1) is sufficient.

Statement (2) says only that x is a positive integer. The values 1, 2, 3, and infinitely many others all satisfy this condition, so x is not determined. Statement (2) is not sufficient.

Since Statement (1) alone is sufficient and Statement (2) alone is not, the answer is A.

The correct answer is A.
**related_reading:** reading-di-02-data-sufficiency-logic

---


---

## Q16
**difficulty:** Easy
**type:** Problem Solving
**topic:** Prime Factorization

If 2^x · 3^y = 648 with x and y positive integers, what is x + y?

- A) 5
- B) 6
- C) 7
- D) 8
- E) 9

**answer:** C
**fastest_path:** Halve 648 three times (324, 162, 81); 81 is 3⁴ — so 3 + 4 = 7.
**explanation:** Because the two prime bases 2 and 3 appear on the left side, the governing principle is the uniqueness of prime factorization: a positive integer can be written as a product of primes in exactly one way, so the exponents on the right must match those obtained by fully factoring 648.

Let x be the exponent of 2 and let y be the exponent of 3, so that 2^x times 3^y = 648. The task is to find the prime factorization of 648 and read off these exponents.

We factor 648 by dividing repeatedly by 2 until the result is odd. We have 648 divided by 2 equals 324, then 324 divided by 2 equals 162, then 162 divided by 2 equals 81. The quotient 81 is odd, so 2 divides 648 exactly three times, giving a factor of 2^3.

We next factor the remaining odd part, 81, into powers of 3. We have 81 equals 3 times 27, which equals 3 times 3 times 9, which equals 3 times 3 times 3 times 3, so 81 equals 3^4.

Combining these results gives 648 equals 2^3 times 3^4. Matching exponents yields x equals 3 and y equals 4.

Therefore x plus y equals 3 plus 4, which equals 7.

The correct answer is C.
**mistake_b:** 6 usually comes from miscounting 81 as 3³ — but 3³ is 27, and 81 takes four factors of 3.
**mistake_d:** 8 carries an off-by-one in one of the prime counts; rebuild the product to check: 2³ × 3⁴ = 8 × 81 = 648.
**common_trap:** Losing count during repeated division — always reassemble the factorization (8 × 81 = 648) before answering.
**takeaway:** Prime factorization is unique, so matching exponents prime by prime is airtight; verifying by multiplying back costs five seconds.
**related_reading:** reading-quant-03-number-properties


---

## Q17
**difficulty:** Medium
**type:** Problem Solving
**topic:** Radical Simplification

What is the value of √(20 × 45)?

- A) 20
- B) 25
- C) 30
- D) 60
- E) 90

**answer:** C
**fastest_path:** Combine under one radical: 20 × 45 = 900, and √900 = 30.
**explanation:** The governing principle is the product rule for square roots: for nonnegative quantities a and b, the square root of a product equals the product of the square roots, so that the radical of a times b is identical to the radical of a times the radical of b. The most efficient method is therefore to combine the two factors under a single radical and evaluate, since the resulting product is a perfect square.

Let N denote the quantity beneath the radical. Then N is the product of 20 and 45.

We compute the product: 20 multiplied by 45 equals 900.

The expression therefore reduces to the square root of 900. Because 30 multiplied by 30 equals 900, the square root of 900 is 30.

As a confirmation by the product rule, we may instead simplify each factor separately. The square root of 20 equals 2 times the square root of 5, and the square root of 45 equals 3 times the square root of 5. Their product is 2 times the square root of 5, multiplied by 3 times the square root of 5, which equals 6 times 5, or 30, in agreement with the direct computation.

The correct answer is C.
**common_trap:** Simplifying each factor separately and then mishandling (2√5)(3√5) — the radicals multiply to a whole 5, so the product is 6 × 5 = 30, not 6√5.
**takeaway:** When radicals multiply, push everything under one root first — GMAT products like 20 × 45 are chosen to assemble into perfect squares.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q18
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Sign Analysis with Exponents

Is x > 0?

(1) x⁵ > 0.
(2) x² < x.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** This question asks whether x is positive. Determining sufficiency requires testing whether each statement forces x to be greater than 0.

Statement (1) gives x⁵ > 0. The governing principle is that an odd power preserves the sign of its base: a positive base raised to an odd power yields a positive result, and a negative base raised to an odd power yields a negative result. Because x⁵ is an odd power and it is positive, the base x cannot be negative, and it cannot be 0 because 0⁵ = 0. Therefore x > 0, and the question is answered with a definite yes. Statement (1) alone is sufficient.

Statement (2) gives x² < x. We rearrange this inequality into a form that exposes the sign of x. Subtracting x from both sides gives x² − x < 0, which we rewrite as x − x² > 0 and factor as x(1 − x) > 0. A product of two factors is positive only when both factors have the same sign. If both factors are positive, then x > 0 and 1 − x > 0, which together give 0 < x < 1. If both factors are negative, then x < 0 and 1 − x < 0, the latter requiring x > 1; these conditions cannot hold simultaneously, so this case is impossible. The only solution is 0 < x < 1, which means x > 0, again answering the question with a definite yes. Statement (2) alone is sufficient.

Because each statement alone establishes that x > 0, each statement alone is sufficient.

The correct answer is D.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fractional Exponents

If x = 8^(2/3), what is the value of x²?

- A) 8
- B) 16
- C) 32
- D) 64
- E) 128

**answer:** B
**fastest_path:** Squaring doubles the exponent: x² = 8^(4/3) = (∛8)⁴ = 2⁴ = 16.
**explanation:** This problem is governed by the rule for fractional exponents, which states that for any nonnegative base a and positive integers m and n, a^(m/n) = (a^(1/n))^m. In words, the denominator of the exponent indicates the root to be taken, and the numerator indicates the power to which that root is raised.

Let x = 8^(2/3). Applying the rule, we first take the cube root of 8 and then square the result:

x = 8^(2/3) = (8^(1/3))^2.

Since the cube root of 8 is 2 (because 2^3 = 8), we have:

x = 2^2 = 4.

The quantity requested is x^2. Substituting the value just found:

x^2 = 4^2 = 16.

As a check, we may compute x^2 directly by combining the exponents. Squaring 8^(2/3) doubles the exponent, giving x^2 = 8^(4/3) = (8^(1/3))^4 = 2^4 = 16, which agrees with the result above.

The correct answer is B.
**mistake_a:** 8 results from treating the exponent 2/3 as 1/2: then x would be 2√2 and x² would be 8.
**mistake_d:** 64 cancels the 2/3 against the squaring and computes 8² — but (8^(2/3))² is 8^(4/3), not 8².
**common_trap:** Computing x = 4 and then mishandling the final squaring step, or letting the fractional exponent "cancel" informally.
**takeaway:** Powers chain by multiplying exponents: (a^(m/n))^k = a^(mk/n). Track the exponent arithmetic explicitly rather than canceling by feel.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q20
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Exponent Comparison

If a and b are integers, is a^b > b^a?

(1) a > b > 1.
(2) a = 3 and b = 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** This is a data sufficiency problem, so the governing principle is that a statement is sufficient only if it forces a single, unambiguous answer to the question "is a^b > b^a?" for all integer values it permits. We do not need the actual answer to be "yes"; we need the answer to be the same in every admissible case.

Let a and b denote the two integers under consideration.

Consider Statement (1): a > b > 1. This constraint permits many ordered pairs of integers, so we test admissible cases. Let a = 3 and b = 2. Then a^b = 3^2 = 9 and b^a = 2^3 = 8, so a^b > b^a, and the answer is "yes." Now let a = 4 and b = 3. Then a^b = 4^3 = 64 and b^a = 3^4 = 81, so a^b < b^a, and the answer is "no." Because the permitted values yield both "yes" and "no," Statement (1) does not determine the answer and is not sufficient.

Consider Statement (2): a = 3 and b = 2. These are specific values, so the comparison is fully determined. We compute a^b = 3^2 = 9 and b^a = 2^3 = 8. Since 9 > 8, we have a^b > b^a, and the answer is "yes." Because this is the only possibility, Statement (2) alone gives a single definite answer and is sufficient.

Statement (2) alone is sufficient while Statement (1) alone is not.

The correct answer is B.
**related_reading:** reading-di-02-data-sufficiency-logic


---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Comparing Radicals

Consider the following three quantities:

I. 3√7
II. 2√17
III. √63

Which of the following correctly describes the relationship among I, II, and III?

- A) I < III < II
- B) I = II = III
- C) II < I = III
- D) I = III < II
- E) III < I < II

**answer:** D
**fastest_path:** Square all three: 9 × 7 = 63, 4 × 17 = 68, and 63 — two are tied, and 68 wins.
**explanation:** Because each of the three quantities is positive, the order of their values is the same as the order of their squares; squaring therefore eliminates the radicals and allows a direct comparison.

Let a = 3√7, b = 2√17, and c = √63. We square each quantity, using the rule that (k√n)^2 = k^2 × n.

For I: a^2 = (3√7)^2 = 3^2 × 7 = 9 × 7 = 63.

For II: b^2 = (2√17)^2 = 2^2 × 17 = 4 × 17 = 68.

For III: c^2 = (√63)^2 = 63.

Comparing the squares, we have a^2 = 63, b^2 = 68, and c^2 = 63. Thus a^2 = c^2 < b^2. Since all three quantities are positive, this ordering of the squares carries over to the quantities themselves, giving a = c < b. In other words, I = III < II.

The correct answer is D.
**mistake_a:** I and III cannot differ — pulling the coefficient inside shows 3√7 = √(9 × 7) = √63, identical to III.
**mistake_b:** The three only look close; squaring puts them on one scale, and II's square (68) strictly exceeds the other two (63).
**mistake_c:** This reverses the comparison — 68 is the largest square, so II is the largest quantity, not the smallest.
**mistake_e:** Same flaw as A: III is exactly √63, and so is I, so neither can be strictly smaller than the other.
**common_trap:** Judging k√n forms by coefficient or radicand alone — only squaring (valid because all quantities are positive) makes them comparable.
**takeaway:** To compare positive radicals, square everything: k√n becomes the integer k²n, and the ordering of squares matches the ordering of the originals.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Radical Equations — Extraneous Roots

If √(x + 3) = x − 3, what is the sum of all values of x that satisfy the equation?

- A) 1
- B) 5
- C) 6
- D) 7
- E) 9

**answer:** C
**fastest_path:** Domain scan before substituting: the right side x − 3 must be at least 0, so any candidate below 3 dies on sight.
**explanation:** The governing principle is that squaring both sides of a radical equation can introduce extraneous solutions, so every candidate value must be checked against the original equation, and a square root denotes the non-negative root.

Let x be a value satisfying the equation. Beginning with the equation

  √(x + 3) = x − 3,

we square both sides to eliminate the radical:

  x + 3 = (x − 3)².

Expanding the right side gives

  x + 3 = x² − 6x + 9.

Moving every term to one side yields

  0 = x² − 7x + 6,

which factors as

  0 = (x − 1)(x − 6).

The candidate values are therefore x = 1 and x = 6.

Because squaring may create solutions that do not satisfy the original equation, we test each candidate. For x = 1, the left side is √(1 + 3) = √4 = 2, while the right side is 1 − 3 = −2; since the radical is non-negative and the right side is negative, this value does not satisfy the equation. For x = 6, the left side is √(6 + 3) = √9 = 3, and the right side is 6 − 3 = 3; the two sides are equal, so this value is valid.

The only solution is x = 6, and the sum of all values of x that satisfy the equation is 6.

The correct answer is C.
**mistake_a:** 1 keeps the extraneous root and discards the valid one — checking means substituting into the ORIGINAL equation, where x = 1 forces √4 = 2 to equal −2, which is impossible.
**mistake_b:** 5 subtracts the extraneous root from the valid one (6 − 1) instead of simply discarding it.
**mistake_d:** 7 sums both roots of the squared equation without checking either; squaring manufactured x = 1, which fails the original equation.
**common_trap:** The squared equation is wider than the original — it admits x = 1. The choices reward the no-check solver at 7 and the backwards-check solver at 1, so the careless path always finds a listed answer.
**takeaway:** After squaring a radical equation, filter every candidate: a fast domain scan (a square root can never equal a negative) kills most ghosts, and substitution into the original confirms the survivors.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q23
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Approximation

If 2^x = 80, which of the following is closest to the value of x?

- A) 5.6
- B) 6.0
- C) 6.3
- D) 6.8
- E) 7.0

**answer:** C
**fastest_path:** Bracket with 2⁶ = 64, then refine: 80/64 = 5/4, and (5/4)³ = 125/64 — just under 2 — so the extra factor is worth about a third of a doubling — x ≈ 6.3.
**explanation:** To estimate an exponent, first trap the target between consecutive integer powers of the base, then refine using the leftover ratio. Let x be the exponent satisfying 2^x = 80.

We first bracket 80 between successive powers of 2. We have 2^6 = 64 and 2^7 = 128. Since 64 < 80 < 128, it follows that 6 < x < 7. This eliminates 5.6 and 7.0 immediately.

To choose among the remaining values, measure how much more than 2^6 the target is: 80 / 64 = 5/4 (cancel the common factor of 16). The exponent x is therefore 6 plus however many doublings a factor of 5/4 represents. Keep it as a fraction and cube it: (5/4)³ = 5³/4³ = 125/64. Since 125/64 sits just below 128/64 = 2, three steps of 5/4 make up almost exactly one full doubling — so one factor of 5/4 is worth roughly 1/3 of a doubling. Hence x ≈ 6 + 1/3 ≈ 6.33 (in fact a touch less, since 125 falls slightly short of 128).

Note that x is not 6.0: that would require 2^x to be exactly 64, and 80 is a full 25% larger. Nor can the gap be judged by linear distance — exponential growth means the "halfway exponent" 6.5 corresponds to 64√2 ≈ 90.5, so 80, sitting below 90.5, must have an exponent below 6.5. Among the listed values, 6.3 is the only one consistent with these bounds.

The correct answer is C.
**mistake_a:** 5.6 falls outside the bracket — 2^5.6 is less than 2⁶ = 64, but 80 exceeds 64.
**mistake_b:** 6.0 would make 2^x exactly 64; the extra factor of 5/4 is worth about a third of a doubling, not zero.
**mistake_d:** 6.8 overshoots — since 6.8 > 6.5 and 2^6.5 = 64√2 ≈ 90.5 already exceeds 80, 2^6.8 is even further above 80; this usually comes from interpolating the wrong way.
**mistake_e:** 7.0 would make 2^x exactly 128, which is 60% above the target.
**common_trap:** Interpolating linearly between 64 and 128. Exponents grow multiplicatively: the midpoint exponent 6.5 sits at 64√2 ≈ 90.5, not at 96, and 80 lies below it.
**takeaway:** Bracket with integer powers, then translate the leftover ratio with benchmarks: ×5/4 ≈ 2^(1/3) (because (5/4)³ = 125/64, just under 2) and ×1.4 ≈ 2^(1/2) (because √2 ≈ 1.4).
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q24
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Equations

If 3^(x + 2) = 81, what is the value of x?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** C
**fastest_path:** 81 is 3⁴, so x + 2 = 4 and x = 2.
**explanation:** When an exponential equation can be written with the same base on both sides, the two exponents must be equal. The strategy is therefore to express both sides of the equation as powers of a common base and then equate the exponents.

Let x be the unknown exponent satisfying 3^(x + 2) = 81. The right-hand side, 81, can be expressed as a power of 3, since 3^4 = 3 times 3 times 3 times 3 = 81. Substituting this form gives 3^(x + 2) = 3^4.

Because both sides are now powers of the same base 3, the exponents must be equal: x + 2 = 4. Subtracting 2 from both sides yields x = 2.

The correct answer is C.
**mistake_a:** 0 comes from writing 81 as 9² and equating x + 2 with that exponent 2 — the bases must match (both base 3) before exponents can be compared.
**mistake_b:** 1 miscounts 81 as 3³; but 3³ = 27, and 81 needs a fourth factor of 3.
**mistake_e:** 4 solves for the whole exponent and stops — x + 2 = 4 still needs the final subtraction.
**common_trap:** Reporting the exponent (4) instead of the variable x the question asked for.
**takeaway:** Convert to a common base, equate exponents, then re-read the question — solving for the exponent is not always solving for x.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q25
**difficulty:** Easy
**type:** Problem Solving
**topic:** Sign Behavior of Exponents

What is the value of (−3)⁴?

- A) −81
- B) −12
- C) 12
- D) 81
- E) 729

**answer:** D
**fastest_path:** Even exponent, parenthesized negative base — the sign cancels in pairs: 3⁴ = 81, positive.
**explanation:** The governing principle is that an exponent indicates repeated multiplication of the base by itself, and that an even number of negative factors yields a positive product. The base here is the entire quantity inside the parentheses, namely negative three, because the parentheses enclose the negative sign together with the three.

Let the expression be the product of four factors, each equal to negative three:

(-3)^4 = (-3)(-3)(-3)(-3).

We multiply the factors in pairs. Each pair of negative factors produces a positive product:

(-3)(-3) = 9,
(-3)(-3) = 9.

Multiplying these two results gives

9 * 9 = 81.

Because there are four factors of negative three, an even count, the negative signs cancel in pairs and the result is positive.

The correct answer is D.
**mistake_a:** −81 keeps a negative sign despite the even exponent — that is the value of −3⁴ (no parentheses), where the minus stays outside the power.
**mistake_b:** −12 multiplies base by exponent (3 × 4) and keeps the sign — exponentiation is repeated multiplication, not multiplication by the exponent.
**mistake_c:** 12 is the same base-times-exponent error without the sign.
**mistake_e:** 729 is 3⁶ — a power miscount; only four factors of 3 appear here.
**common_trap:** (−3)⁴ versus −3⁴: with parentheses the sign is part of the base and an even power erases it (+81); without them the minus survives (−81).
**takeaway:** Even powers of a parenthesized negative base are positive; odd powers stay negative; a minus outside the parentheses is untouched by the exponent.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q26
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

For any nonzero real number x, what is the value of x⁵ / x⁵?

- A) 0
- B) 1
- C) 5
- D) x
- E) x⁵

**answer:** B
**explanation:** The governing principle is the quotient rule for exponents: for a nonzero base a, a^m / a^n = a^(m-n). A direct consequence of this rule is the zero-exponent rule, which states that a^0 = 1 for any nonzero a.

Let x be any nonzero real number. The expression to evaluate is x^5 / x^5. Because the numerator and denominator share the same base x, we apply the quotient rule and subtract the exponents:

x^5 / x^5 = x^(5-5) = x^0.

Since x is nonzero, the zero-exponent rule gives x^0 = 1. This agrees with the more basic observation that any nonzero quantity divided by itself equals 1. The condition that x is nonzero is essential, since 0^0 is undefined.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q27
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots & Radicals

What is the value of ∛(−27)?

- A) −9
- B) −3
- C) −√3
- D) 3
- E) Undefined

**answer:** B
**explanation:** The governing principle is that for any real number, the cube root is the unique real value whose cube equals that number; unlike even-index roots, odd-index roots such as cube roots are defined for negative inputs because the cube of a negative number is negative.

Let x denote the value of the cube root of negative 27, so that x is the number satisfying x cubed equals negative 27.

We seek a real number x with x times x times x equal to negative 27. Consider x equal to negative 3. Then x cubed equals the product of negative 3, negative 3, and negative 3. We compute negative 3 times negative 3, which equals positive 9. We then multiply 9 by negative 3, which equals negative 27.

Since negative 3 cubed equals negative 27, the cube root of negative 27 equals negative 3.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q28
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of (4^(3/2) × 2⁴) / 2⁷?

- A) 1/4
- B) 1/2
- C) 1
- D) 2
- E) 4

**answer:** C
**fastest_path:** 4^(3/2) = (√4)³ = 8 = 2³, so the whole fraction is 2^(3+4−7) = 2⁰ = 1.
**explanation:** This expression can be evaluated by rewriting every term as a power of a single common base and then applying the rules for products and quotients of like bases. Because 4 is itself a power of 2, the entire expression can be expressed in base 2, after which the powers may be combined directly.

We begin with the numerator. Since 4 = 2^2, we have 4^(3/2) = (2^2)^(3/2). The power-of-a-power rule states that (a^m)^n = a^(mn), so (2^2)^(3/2) = 2^(2 × 3/2) = 2^3. The numerator is therefore 2^3 × 2^4. The product rule for like bases states that a^m × a^n = a^(m+n), so 2^3 × 2^4 = 2^(3+4) = 2^7.

The expression now reads 2^7 / 2^7. The quotient rule for like bases states that a^m / a^n = a^(m−n), so 2^7 / 2^7 = 2^(7−7) = 2^0 = 1.

The correct answer is C.
**mistake_a:** 1/4 evaluates 4^(1/2) instead of 4^(3/2) — using the reciprocal of the fractional exponent gives 2^(1+4−7) = 2⁻².
**mistake_b:** 1/2 ignores the fractional exponent altogether, treating 4^(3/2) as 4 = 2², which leaves 2^(2+4−7) = 2⁻¹.
**common_trap:** Converting 4^(3/2): it is (√4)³ = 8. Halving (getting 2) or dropping the fraction (getting 4) are the two standard slips.
**takeaway:** Push every factor to base 2 before combining; fractional powers of 4, 8, and 16 convert cleanly because those bases are themselves powers of 2.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q29
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots & Radicals

For x > 0, which of the following is equivalent to √(75x⁴)?

- A) 5x²√3
- B) 5x²√15
- C) 15x²
- D) 25x²√3
- E) 5x⁴√3

**answer:** A
**fastest_path:** Split into perfect squares: 75 = 25 × 3 gives 5√3, and √(x⁴) = x² — assemble 5x²√3.
**explanation:** To simplify a square root, we apply the product property of radicals, which states that for nonnegative quantities a and b, the root of a product equals the product of the roots: the square root of (a times b) equals the square root of a times the square root of b. The strategy is to separate the numerical factor from the variable factor, then extract the largest perfect-square factor from each.

Let the expression be the square root of (75 times x to the fourth), with x > 0. Separating the two factors gives the square root of 75 times the square root of (x to the fourth).

We simplify the numerical factor first. We factor 75 as 25 times 3, where 25 is the largest perfect square dividing 75. Thus the square root of 75 equals the square root of (25 times 3), which equals the square root of 25 times the square root of 3, which equals 5 times the square root of 3.

We next simplify the variable factor. Because x > 0, the square root of (x to the fourth) equals x raised to the power four divided by two, which equals x squared.

Multiplying the simplified factors together, we obtain 5 times the square root of 3 times x squared, which we write as 5x squared times the square root of 3.

The correct answer is A.
**mistake_b:** 5x²√15 factors 75 as 5 × 15 and moves the 5 outside without square-rooting it — only perfect-square factors exit the radical.
**mistake_c:** 15x² drops the radical entirely, multiplying 5 × 3 as if √3 were a whole 3.
**mistake_d:** 25x²√3 moves 25 out of the radical without taking its square root; 25 exits as 5.
**mistake_e:** 5x⁴√3 forgets that a square root halves even exponents — √(x⁴) is x², not x⁴.
**common_trap:** Square roots halve even exponents and square-root perfect-square factors: x⁴ exits as x², and 25 exits as 5.
**takeaway:** Split the radicand into its perfect-square parts (25 and x⁴ here) and root each on the way out; whatever remains stays under the radical.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q30
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Comparison

If 2^a = 3^b > 1, which of the following must be true?

- A) a = b
- B) a > b
- C) a < b
- D) a = 2b
- E) The relationship between a and b cannot be determined.

**answer:** B
**fastest_path:** Equal results from unequal bases: the smaller base (2) must work harder, so its exponent is larger — a > b.
**explanation:** When two powers with different bases are equal, no logarithms are needed to compare the exponents — a one-line comparison with a shared exponent settles it.

First establish the signs. Because 2^a > 1 and the base 2 exceeds 1, the exponent a must be positive; likewise 3^b > 1 forces b to be positive.

Now compare a and b directly. For the same positive exponent b, the larger base wins: 3^b > 2^b. But the given condition says 2^a equals 3^b, so

2^a = 3^b > 2^b.

The outer comparison 2^a > 2^b uses a single base greater than 1, so the exponents follow the same order: a > b.

Intuitively, each step of multiplying by 2 grows a number more slowly than a step of multiplying by 3, so reaching the same final value requires more steps of the slower growth — the smaller base carries the larger exponent.

The correct answer is B.
**mistake_a:** a = b is impossible here: with equal exponents the bigger base would pull ahead (3^b > 2^b), and the two powers could never be equal.
**mistake_c:** a < b reverses the compensation — the smaller base must take MORE steps to reach the same value, not fewer.
**mistake_d:** a = 2b assumes a fixed doubling. Test it: 3² = 9 needs 2^a = 9, and since 2³ = 8 < 9 < 16 = 2⁴, a is between 3 and 4 — not 4 exactly.
**mistake_e:** The individual values of a and b are indeed undetermined, but the question asks which RELATIONSHIP must hold, and a > b holds for every valid pair.
**common_trap:** Picking "cannot be determined" because a and b have no fixed values — must-be-true questions ask about the relation, not the numbers.
**takeaway:** When powers of different bases are equal (and exceed 1), the smaller base carries the larger exponent. No logarithms required.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q31
**difficulty:** Hard
**type:** Problem Solving
**topic:** Equations with Exponents

If 2^(x+y) = 64 and 2^(x−y) = 4, what is the value of 2^x?

- A) 8
- B) 16
- C) 32
- D) 48
- E) 64

**answer:** B
**explanation:** When two powers of the same base are equal, their exponents must be equal. We rewrite each given equation so that both sides are expressed as a power of 2, and then equate the exponents to obtain a linear system.

Let x and y be the unknown values described in the problem. The first equation states that 2^(x+y) = 64. Since 64 = 2^6, we have 2^(x+y) = 2^6, and equating the exponents gives x + y = 6. The second equation states that 2^(x-y) = 4. Since 4 = 2^2, we have 2^(x-y) = 2^2, and equating the exponents gives x - y = 2.

We now solve the system. Adding the two equations eliminates y:

(x + y) + (x - y) = 6 + 2
2x = 8
x = 4.

The quantity requested is 2^x. Substituting x = 4, we obtain 2^x = 2^4 = 16.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q32
**difficulty:** Hard
**type:** Problem Solving
**topic:** Equations with Exponents

If x^(x²) = x^(4x) and x > 0, x ≠ 1, what is the value of x?

- A) 0
- B) 2
- C) 4
- D) 8
- E) 16

**answer:** C
**explanation:** This problem is governed by the one-to-one property of exponential functions: for a fixed positive base x with x not equal to 1, the function that raises x to a power is one-to-one, which means that equal powers of the same base force the exponents themselves to be equal. We are given that x > 0 and x is not equal to 1, so this property applies and we may equate the two exponents.

Let the equation x^(x^2) = x^(4x) be rewritten by equating exponents:

x^2 = 4x.

We move every term to one side to obtain a polynomial set equal to zero:

x^2 - 4x = 0.

We factor the left side by extracting the common factor x:

x(x - 4) = 0.

Setting each factor equal to zero gives the candidate solutions x = 0 and x = 4. The stated condition x > 0 eliminates x = 0, leaving x = 4.

We confirm the result by substitution. The left side is 4^(4^2) = 4^16, and the right side is 4^(4 times 4) = 4^16. Both sides are equal, so x = 4 satisfies the original equation.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q33
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 1^1000?

- A) 0
- B) 1
- C) 1000
- D) 1/1000
- E) Undefined

**answer:** B
**explanation:** This problem is governed by the rule that the number 1 raised to any power equals 1. The reason is that raising a base to a positive integer exponent means multiplying that base by itself the indicated number of times, and a product consisting entirely of the factor 1 is always 1.

Let n denote the exponent, so that the expression to be evaluated is 1^n with n = 1000. By the definition of exponentiation, 1^1000 = 1 × 1 × 1 × ⋯ × 1, where the factor 1 appears 1000 times. Each successive multiplication leaves the running product unchanged, since multiplying any quantity by 1 returns that same quantity. Therefore the product of one thousand factors of 1 is simply 1.

The magnitude of the exponent has no bearing on the result. Whether the exponent is 1, 2, or 1000, the value remains the same: 1^1 = 1, 1^2 = 1, and likewise 1^1000 = 1.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q34
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots & Radicals

What is the value of √3 × √48?

- A) 6
- B) 12
- C) 4√3
- D) 6√2
- E) 24

**answer:** B
**explanation:** The governing principle is the product rule for square roots: for nonnegative quantities a and b, the product of their square roots equals the square root of their product, that is, the square root of a times the square root of b equals the square root of the product ab.

Let the desired value be the square root of 3 multiplied by the square root of 48. Applying the product rule, the two radicals combine into a single radical over the product of the radicands:

the square root of 3 times the square root of 48 = the square root of (3 times 48) = the square root of 144.

Since 144 is a perfect square, equal to 12 squared, its square root is 12.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q35
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 5⁰ + 5¹ + 5⁻¹?

- A) 5
- B) 6
- C) 6.2
- D) 6.5
- E) 7

**answer:** C
**explanation:** This problem is governed by three basic rules for evaluating powers: any nonzero base raised to the zero power equals 1, any base raised to the first power equals the base itself, and any base raised to the negative-one power equals the reciprocal of the base. We apply each rule to the corresponding term and then add the results.

Let S = 5^0 + 5^1 + 5^(-1). We evaluate the three terms in turn.

The first term is 5^0. By the zero-exponent rule, 5^0 = 1.

The second term is 5^1. By the identity rule, 5^1 = 5.

The third term is 5^(-1). By the negative-exponent rule, 5^(-1) = 1/5 = 0.2.

We now sum the three values:
S = 1 + 5 + 0.2 = 6 + 0.2 = 6.2.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots & Radicals

Which of the following equals 3√5?

- A) √15
- B) √30
- C) √45
- D) √75
- E) √90

**answer:** C
**explanation:** The governing principle is the rule for moving a coefficient under a radical: for nonnegative quantities, a positive factor outside a square root may be brought inside the root by squaring it, since a multiplied by the square root of b equals the square root of (a squared times b). Equivalently, the square root of a product equals the product of the square roots, so the square root of (a squared times b) separates into the square root of a squared, which is a, times the square root of b.

Let the given expression be 3 times the square root of 5. We apply the principle with a equal to 3 and b equal to 5. Squaring the coefficient gives 3 squared, which equals 9. Bringing this factor under the radical, 3 times the square root of 5 equals the square root of (9 times 5).

Multiplying the radicand, 9 times 5 equals 45. Therefore 3 times the square root of 5 equals the square root of 45.

As a check, we reverse the process. The square root of 45 equals the square root of (9 times 5), which equals the square root of 9 times the square root of 5, which equals 3 times the square root of 5. This confirms the equality.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Fractional Exponents

What is the value of 64^(1/6)?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 32

**answer:** A
**explanation:** A fractional exponent of the form a^(1/n) denotes the nth root of a; that is, a^(1/n) is the number whose nth power equals a. The expression in question is therefore the sixth root of 64.

Let x = 64^(1/6). To evaluate x, we express the base 64 as a power whose exponent is divisible by 6. Since 64 = 2^6, we may rewrite the expression as x = (2^6)^(1/6).

Applying the power-of-a-power rule, which multiplies the exponents, we obtain x = 2^(6 * (1/6)) = 2^1 = 2.

The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q38
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

Which values of x satisfy 2^(x−1) > 2^(3−x)?

- A) All x > −2
- B) All x > 0
- C) All x > 2
- D) All x > 3
- E) All x > 4

**answer:** C
**fastest_path:** Base 2 exceeds 1, so compare exponents directly: x − 1 > 3 − x gives x > 2.
**explanation:** The governing principle is the monotonicity of exponential functions. For a base a greater than 1, the function a^t is strictly increasing, so a^m > a^n holds if and only if m > n. The two expressions in this inequality share the base 2, and since 2 > 1, the inequality between the powers holds if and only if the same inequality holds between the exponents.

Let the original inequality be 2^(x-1) > 2^(3-x). Because the common base 2 exceeds 1, we may compare the exponents directly while preserving the direction of the inequality:

x - 1 > 3 - x.

We now solve this linear inequality. Add x to both sides:

x - 1 + x > 3,
2x - 1 > 3.

Add 1 to both sides:

2x > 4.

Divide both sides by 2:

x > 2.

Thus the values of x that satisfy the original inequality are exactly those greater than 2.

The correct answer is C.
**mistake_a:** x > −2 drops a sign while collecting terms — solving as if 2x > −4 instead of 2x > 4.
**mistake_e:** x > 4 ignores the −x on the right side, solving x − 1 > 3 alone.
**common_trap:** The exponent comparison preserves direction only because the base 2 exceeds 1; a base between 0 and 1 would flip the inequality.
**takeaway:** With a common base greater than 1, exponential inequalities reduce to the exponents — then it is just careful linear algebra.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 8^10 / 4^14?

- A) 2
- B) 4
- C) 8
- D) 16
- E) 32

**answer:** B
**fastest_path:** Convert to base 2: 2³⁰ / 2²⁸ = 2² = 4.
**explanation:** This problem is solved by expressing all quantities as powers of a single common base and then applying the rules of exponents. When two bases are different powers of the same prime, the most reliable approach is to rewrite each base in terms of that prime so that the quotient rule for exponents can be applied directly.

We observe that both 8 and 4 are powers of 2. Specifically, 8 = 2^3 and 4 = 2^2. We therefore rewrite the numerator and the denominator in base 2.

For the numerator, applying the power-of-a-power rule, by which (a^m)^n = a^(mn), we have 8^10 = (2^3)^10 = 2^(3 times 10) = 2^30.

For the denominator, applying the same rule, we have 4^14 = (2^2)^14 = 2^(2 times 14) = 2^28.

The expression now reads 2^30 divided by 2^28. Applying the quotient rule for exponents, by which a^m divided by a^n equals a^(m minus n), we obtain 2^(30 minus 28) = 2^2 = 4.

The correct answer is B.
**mistake_a:** 2 is an off-by-one in the final subtraction — 30 − 28 is 2, and 2² is 4, not 2.
**mistake_d:** 16 subtracts the ORIGINAL exponents (14 − 10 = 4) and computes 2⁴ — but the bases 8 and 4 differ, so their exponents cannot interact until both are rewritten in base 2.
**common_trap:** Operating on exponents while the bases still differ. Convert 8 to 2³ and 4 to 2² first.
**takeaway:** Bases sharing a prime (4, 8, 16, 27, 81, ...) should be rewritten over that prime before any exponent rule is applied.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of (9³ × 3⁴) / 27²?

- A) 27
- B) 81
- C) 243
- D) 729
- E) 2187

**answer:** B
**fastest_path:** Spot the cancellation: 9³ and 27² are both 3⁶ — they cancel, leaving 3⁴ = 81.
**explanation:** The governing principle is that powers of the same base may be combined directly through the laws of exponents, so the first task is to express every term using a single common base. Since 9, 27, and 3 are all powers of 3, we rewrite each factor as a power of 3.

Let the base be 3. Because 9 = 3^2, the power rule (a^m)^n = a^(mn) gives 9^3 = (3^2)^3 = 3^6. Because 27 = 3^3, the same rule gives 27^2 = (3^3)^2 = 3^6. The factor 3^4 is already in base 3.

Substituting these into the original expression, we obtain (3^6 × 3^4) / 3^6.

The numerator combines by the product rule a^m × a^n = a^(m+n), so 3^6 × 3^4 = 3^(6+4) = 3^10. The expression is then 3^10 / 3^6.

Applying the quotient rule a^m / a^n = a^(m-n) yields 3^(10-6) = 3^4.

Evaluating, 3^4 = 81.

The correct answer is B.
**mistake_a:** 27 = 3³ — an exponent miscount of one; the surviving factor after cancellation is 3⁴.
**mistake_c:** 243 = 3⁵ — the same off-by-one in the other direction, usually from converting 9³ to 3⁵ instead of 3⁶.
**mistake_d:** 729 = 3⁶ keeps the wrong survivor — the 3⁶ pieces (9³ and 27²) cancel each other, and the 3⁴ is what remains.
**mistake_e:** 2187 = 3⁷ treats 27² as 3⁵ — forgetting that (3³)² multiplies the exponents to 3⁶.
**common_trap:** Exponent bookkeeping in conversions: (3²)³ = 3⁶ and (3³)² = 3⁶ — powers of powers multiply, never add.
**takeaway:** Convert everything to the common prime base, then scan for exact cancellations before doing any arithmetic.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Comparison

What is the value of 9¹¹ / 3²⁰?

- A) 1/9
- B) 1/3
- C) 3
- D) 9
- E) 27

**answer:** D
**fastest_path:** Rewrite 9¹¹ as 3²², then subtract exponents: 3²²⁻²⁰ = 3² = 9.
**explanation:** To divide two exponential expressions, we first express them in terms of a common base; only then can the quotient rule for exponents be applied.

We rewrite the numerator with base 3 by noting that 9 = 3^2. Then 9^11 = (3^2)^11. Applying the power-of-a-power rule, which multiplies the exponents, gives 9^11 = 3^(2 × 11) = 3^22.

The quotient is now 3^22 / 3^20. With a common base, the exponents subtract: 3^(22 − 20) = 3^2 = 9.

As a sanity check on direction: 9^11 = 3^22 is larger than 3^20, so the ratio must exceed 1 — which immediately rules out the two fractional choices.

The correct answer is D.
**mistake_a:** 1/9 subtracts the exponents in the wrong order, computing 3^(20 − 22) = 3⁻². The larger power is on top, so the ratio exceeds 1.
**mistake_b:** 1/3 compounds the order reversal with an off-by-one in the conversion.
**mistake_c:** 3 converts 9¹¹ to 3²¹ — the doubling applies to the whole exponent, (3²)¹¹ = 3²², not 3²¹.
**mistake_e:** 27 = 3³ converts 9¹¹ to 3²³, an off-by-one in the doubled exponent.
**common_trap:** Letting the exponents interact while the bases still differ — 9¹¹ must become 3²² before anything can be subtracted.
**takeaway:** The quotient rule a^m / a^n = a^(m−n) requires a COMMON base; convert composite bases to a shared prime first, then subtract.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Sign Behavior of Exponents

For any integer x ≥ 0, what is the value of |(-2)^(2x+1)| / 2^(2x)?

- A) −2
- B) 2
- C) 4
- D) 2x
- E) The value depends on whether x is odd or even

**answer:** B
**fastest_path:** Split off one factor: (−2)^(2x+1) = 4^x · (−2), so the absolute value is 2 · 4^x — and the denominator is also 4^x.
**explanation:** The governing principle is that a power of a base can be separated by splitting the exponent into a sum, since a^(m+n) = a^m · a^n, and that a negative base raised to an even exponent is positive while a negative base raised to an odd exponent is negative. The method is to rewrite the numerator so that its sign and magnitude are explicit, apply the absolute value, express the denominator on the same base, and then cancel.

Let x be any integer with x ≥ 0. We must evaluate |(-2)^(2x+1)| / 2^(2x).

Consider the numerator before the absolute value is taken. Because the exponent is 2x + 1, we split it into an even part and a single odd factor:

(-2)^(2x+1) = (-2)^(2x) · (-2)^1.

The even part can be regrouped, since 2x = 2 · x gives (-2)^(2x) = [(-2)^2]^x = 4^x. Therefore

(-2)^(2x+1) = 4^x · (-2) = -2 · 4^x.

Now apply the absolute value. Since x ≥ 0, the quantity 4^x is positive, so the only negative factor is -2:

|(-2)^(2x+1)| = |-2 · 4^x| = 2 · 4^x.

Next express the denominator on the same base of 4. Because 2^(2x) = (2^2)^x = 4^x, we have

|(-2)^(2x+1)| / 2^(2x) = (2 · 4^x) / 4^x.

The factor 4^x is positive and therefore nonzero, so it cancels:

(2 · 4^x) / 4^x = 2.

The result is the constant 2, independent of x. The correct answer is B.
**mistake_a:** −2 forgets the absolute value bars — the numerator is negative before they apply, but the bars strip the sign.
**mistake_c:** 4 squares the leftover factor — the exponents 2x + 1 and 2x differ by one, leaving a single factor of 2 in magnitude, not (−2)².
**mistake_d:** 2x treats the exponent as a multiplier; exponents count factors, they never multiply the base directly.
**mistake_e:** 2x + 1 is odd for EVERY integer x, so the parity of x is irrelevant — and the absolute value would erase any sign difference anyway.
**common_trap:** The parity bait: an exponent of the form 2x + 1 is always odd, so the expression's sign never actually alternates.
**takeaway:** Peel exponents apart with a^(m+n) = a^m · a^n to expose sign and magnitude separately; the absolute value then handles the sign cleanly.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fractional Exponents

Which of the following equals 4^(3/4)?

- A) 2√2
- B) 2∜2
- C) ∜8
- D) √2 · ∛2
- E) 4√2

**answer:** A
**fastest_path:** Convert to base 2: 4^(3/4) = 2^(3/2) = 2 · √2.
**explanation:** The governing principle is that an exponential expression is most easily simplified when its base is written as a power of a prime. The relevant rules are the power-of-a-power rule, which states that (a^m)^n = a^(mn), and the product rule for exponents, which states that a^(m+n) = a^m · a^n. We apply these rules after rewriting the base.

Let the expression to be evaluated be 4^(3/4). Since 4 = 2², we substitute to obtain 4^(3/4) = (2²)^(3/4). Applying the power-of-a-power rule, we multiply the exponents: (2²)^(3/4) = 2^(2 · 3/4) = 2^(3/2).

We now simplify 2^(3/2) by writing the exponent as a sum: 3/2 = 1 + 1/2. By the product rule, 2^(3/2) = 2^(1 + 1/2) = 2^1 · 2^(1/2) = 2 · √2.

Thus 4^(3/4) = 2√2.

The correct answer is A.
**mistake_b:** 2∜2 = 2^(5/4) splits the exponent as 1 + 1/4 — but the base-2 exponent is 3/2, which splits as 1 + 1/2.
**mistake_c:** ∜8 = 2^(3/4) applies the exponent 3/4 to base 2 directly, skipping the conversion 4 = 2² that doubles it to 3/2.
**mistake_d:** √2 · ∛2 = 2^(5/6) mixes root indices — nothing in 4^(3/4) generates a cube root.
**mistake_e:** 4√2 = 2^(5/2) keeps the base 4 alongside the radical, landing a full factor of 2 too high; the whole-number part is 2¹, not 2².
**common_trap:** Working in base 4 — converting to base 2 makes the exponent arithmetic (2 × 3/4 = 3/2 = 1 + 1/2) transparent.
**takeaway:** Convert composite bases to primes, then split the fractional exponent into whole + fractional parts to read off the radical form directly.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Equations with Exponents

If 5^a · 5^b = 5^12 and 5^a / 5^b = 5^4, what is 5^a?

- A) 5⁴
- B) 5⁶
- C) 5⁸
- D) 5¹²
- E) 5¹⁶

**answer:** C
**fastest_path:** Translate to exponents: a + b = 12 and a − b = 4; adding gives a = 8.
**explanation:** This problem is governed by the laws of exponents for a common base: when powers of the same base are multiplied, the exponents are added, and when they are divided, the exponents are subtracted. We may therefore translate each given equation into a linear equation in the exponents.

Let a and b be the exponents in the two factors. The first equation gives 5^a multiplied by 5^b equal to 5^12, which by the product rule means 5^(a + b) = 5^12. Because the bases are equal, the exponents must be equal, so a + b = 12.

The second equation gives 5^a divided by 5^b equal to 5^4, which by the quotient rule means 5^(a - b) = 5^4. Equating exponents gives a - b = 4.

We now have the linear system a + b = 12 and a - b = 4. Adding the two equations eliminates b: (a + b) + (a - b) = 12 + 4, so 2a = 16, which gives a = 8.

The quantity requested is 5^a, which is therefore 5^8. As a check, substituting a = 8 into the first equation gives b = 4, and 5^8 multiplied by 5^4 equals 5^12, while 5^8 divided by 5^4 equals 5^4, confirming both conditions.

The correct answer is C.
**mistake_a:** 5⁴ is 5^b — the system was solved for the wrong variable (b = 4).
**mistake_b:** 5⁶ splits 12 evenly between a and b, using only the first equation and ignoring the second.
**mistake_d:** 5¹² is the given product, not 5^a.
**mistake_e:** 5¹⁶ is 5^(2a) — the product of the two given equations. One more step (halving the exponent) finishes the job.
**common_trap:** Multiplying the two equations gives 5^(2a) = 5¹⁶ and stopping there — the question asks for 5^a = 5⁸.
**takeaway:** Equations between powers of one base are linear equations in the exponents; solve the system, then answer for the exact quantity requested.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Fractional Exponents

What is the value of ((27^(1/3))^(3/2))^2?

- A) 3
- B) 9
- C) 27
- D) 81
- E) 243

**answer:** C
**explanation:** This problem is governed by the power-of-a-power rule for exponents, which states that (a^m)^n = a^(mn). When a power is raised to another power successively, the rule chains, so that ((a^m)^n)^p = a^(mnp); that is, the exponents are multiplied together and the base is left unchanged.

Let E denote the given expression, E = ((27^(1/3))^(3/2))^2. Reading the expression from the inside outward, the base 27 is raised in turn to the exponents 1/3, then 3/2, and finally 2. Applying the chained rule, we multiply these three exponents to obtain a single exponent on the base 27.

We compute the product of the exponents. First, (1/3)(3/2) = 3/6 = 1/2. Next, (1/2)(2) = 1. Therefore the three exponents combine to a single exponent of 1, and the expression reduces to E = 27^1 = 27.

To confirm this result by evaluating one layer at a time, we proceed step by step. The innermost layer is 27^(1/3), the cube root of 27, which equals 3 because 3^3 = 27. Raising this to the 3/2 power gives 3^(3/2) = (3^(1/2))^3 = (sqrt 3)^3 = 3 sqrt 3. Squaring this final quantity gives (3 sqrt 3)^2 = 3^2 times (sqrt 3)^2 = 9 times 3 = 27. Both methods yield 27.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q46
**difficulty:** Hard
**type:** Problem Solving
**topic:** Equations with Exponents

If 4^x − 5 · 2^x + 4 = 0, what is the sum of all values of x that satisfy the equation?

- A) 0
- B) 2
- C) 3
- D) 4
- E) 6

**answer:** B
**explanation:** An exponential equation whose terms can be expressed as powers of a common base may often be reduced to a quadratic equation through a suitable substitution. The principle here is that 4 is a power of 2, so every term can be written in terms of 2^x, and the resulting equation has the form of a quadratic.

Let u = 2^x. Because 4 = 2^2, it follows that 4^x = (2^2)^x = (2^x)^2 = u^2. Substituting these expressions into the given equation 4^x − 5 · 2^x + 4 = 0 yields

u^2 − 5u + 4 = 0.

This quadratic factors as

(u − 1)(u − 4) = 0,

so u = 1 or u = 4.

We now return to the original variable. From u = 2^x we obtain two cases. If 2^x = 1, then, since 1 = 2^0, we have x = 0. If 2^x = 4, then, since 4 = 2^2, we have x = 2.

Both values satisfy the original equation. For x = 0: 4^0 − 5 · 2^0 + 4 = 1 − 5 + 4 = 0. For x = 2: 4^2 − 5 · 2^2 + 4 = 16 − 20 + 4 = 0.

The sum of all values of x that satisfy the equation is therefore 0 + 2 = 2.

The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Exponent Approximation

Which of the following correctly orders 2^30, 3^20, and 6^15 from least to greatest?

- A) 2^30 < 3^20 < 6^15
- B) 3^20 < 2^30 < 6^15
- C) 2^30 < 6^15 < 3^20
- D) 6^15 < 3^20 < 2^30
- E) 3^20 < 6^15 < 2^30

**answer:** A
**explanation:** The governing principle is that two powers can be compared without evaluating them directly by re-expressing each as a common outer exponent and then comparing the resulting bases. If two positive quantities are written as p^k and q^k with the same exponent k, the larger quantity is the one with the larger base.

Let the three quantities be A = 2^30, B = 3^20, and C = 6^15.

First we compare A and B. Both exponents, 30 and 20, are divisible by 10, so we write each as a tenth power. We have A = 2^30 = (2^3)^10 = 8^10 and B = 3^20 = (3^2)^10 = 9^10. Both are now tenth powers, so we compare the bases: 8 < 9. Therefore 8^10 < 9^10, which means 2^30 < 3^20.

Next we compare B and C. Both exponents, 20 and 15, are divisible by 5, so we write each as a fifth power. We have B = 3^20 = (3^4)^5 = 81^5 and C = 6^15 = (6^3)^5 = 216^5. Both are now fifth powers, so we compare the bases: 81 < 216. Therefore 81^5 < 216^5, which means 3^20 < 6^15.

Combining the two results, 2^30 < 3^20 and 3^20 < 6^15, we obtain 2^30 < 3^20 < 6^15.

The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q48
**difficulty:** Hard
**type:** Problem Solving
**topic:** Roots & Radicals

For x > 0, what is the value of (x^(1/2) + x^(-1/2))² − (x^(1/2) − x^(-1/2))²?

- A) 0
- B) 2
- C) 4
- D) 2x
- E) 4x

**answer:** C
**explanation:** The most efficient approach relies on the algebraic identity (a + b)² − (a − b)² = 4ab, which follows from expanding each square and subtracting: (a² + 2ab + b²) − (a² − 2ab + b²) = 4ab.

Let a = x^(1/2) and b = x^(-1/2). Then the given expression has exactly the form (a + b)² − (a − b)², so its value equals 4ab.

We compute the product ab using the rule that x^(m) · x^(n) = x^(m + n):

ab = x^(1/2) · x^(-1/2) = x^(1/2 + (−1/2)) = x^(0) = 1.

Therefore the expression equals 4ab = 4 · 1 = 4. Because this result does not depend on the particular value of x, it holds for every x > 0.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Equations with Exponents

If 4^x − 3 · 2^(x+1) + 8 = 0, what is the sum of all real values of x satisfying the equation?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** An exponential equation in which every term can be expressed as a power of a single base is best solved by substitution, which converts it into an ordinary polynomial equation. Before substituting, however, we must simplify all exponent arithmetic so that the expression is written purely in terms of one repeating quantity.

Let u = 2^x. We first rewrite each term of 4^x − 3 · 2^(x+1) + 8 = 0 in terms of u. Since 4^x = (2^2)^x = (2^x)^2 = u^2, the leading term becomes u^2. For the middle term, we expand the exponent sum: 2^(x+1) = 2^x · 2^1 = 2 · 2^x, so 3 · 2^(x+1) = 3 · 2 · 2^x = 6 · 2^x = 6u. The equation therefore becomes u^2 − 6u + 8 = 0.

We factor the quadratic: u^2 − 6u + 8 = (u − 2)(u − 4) = 0, which gives u = 2 or u = 4.

We now back-substitute u = 2^x. From 2^x = 2 we obtain x = 1. From 2^x = 4 = 2^2 we obtain x = 2. Both values are real, and since 2^x is always positive, both roots u = 2 and u = 4 are admissible, so no solution is lost.

The sum of all real values of x is therefore 1 + 2 = 3. As a check, x = 1 gives 4^1 − 6 · 2^1 + 8 = 4 − 12 + 8 = 0, and x = 2 gives 4^2 − 6 · 2^2 + 8 = 16 − 24 + 8 = 0, confirming both solutions.

The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations


---

## Q50
**difficulty:** Easy
**type:** Problem Solving
**topic:** Radical Simplification

What is the value of √50 + √18 − √8 ?

- A) 4√2
- B) 6√2
- C) 10√2
- D) √60
- E) 6√6

**answer:** B
**explanation:** We simplify each radical to lowest terms by extracting perfect-square factors: √50 = √(25·2) = 5√2, √18 = √(9·2) = 3√2, and √8 = √(4·2) = 2√2. Since all three terms share the common radical √2, we combine the coefficients: 5√2 + 3√2 − 2√2 = (5 + 3 − 2)√2 = 6√2. A common error is to add the radicands directly (50 + 18 − 8 = 60) to get √60, which is invalid because radicals do not add that way. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q51
**difficulty:** Easy
**type:** Problem Solving
**topic:** Comparing Radicals

Which of the following has the greatest value?

- A) 2√6
- B) 5
- C) 4√2
- D) √23
- E) 3√3

**answer:** C
**explanation:** To compare expressions of the form k√n, we square each so that all quantities can be ranked as ordinary integers (each is positive, so squaring preserves order). We obtain (2√6)² = 4·6 = 24, 5² = 25, (3√3)² = 9·3 = 27, (√23)² = 23, and (4√2)² = 16·2 = 32. The largest square is 32, which belongs to 4√2. A common mistake is to compare only the integer coefficients and pick 5 or 3√3 without accounting for the radical part. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q52
**difficulty:** Medium
**type:** Problem Solving
**topic:** Radical Simplification

What is the value of (√72 + √32) / √2 ?

- A) 52
- B) 8
- C) 10√2
- D) 10
- E) 6

**answer:** D
**explanation:** We first simplify the numerator: √72 = √(36·2) = 6√2 and √32 = √(16·2) = 4√2, so the numerator equals 6√2 + 4√2 = 10√2. Dividing by √2 gives (10√2)/√2 = 10. A common error is to keep a stray √2 and answer 10√2, or to add the radicands (72 + 32 = 104) before dividing. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q53
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots & Radicals

What is the value of (√8 · √6) / √3 ?

- A) 8
- B) 2√6
- C) 16
- D) 4√3
- E) 4

**answer:** E
**explanation:** Using the product and quotient rules for square roots, we combine all factors under a single radical: (√8 · √6)/√3 = √(8·6/3) = √(48/3) = √16 = 4. Equivalently, √8·√6 = √48 = 4√3, and dividing by √3 cancels the radical to leave 4. A common error is to compute 8·6/3 = 16 but forget to take the square root, giving 16. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q54
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots & Radicals

What is the value of 1/(√7 + √5) + 1/(√7 − √5) ?

- A) √7
- B) √5
- C) 2√7
- D) √35
- E) √7 + √5

**answer:** A
**explanation:** We add the two fractions over the common denominator (√7 + √5)(√7 − √5) = 7 − 5 = 2. The numerator becomes (√7 − √5) + (√7 + √5) = 2√7, since the √5 terms cancel. Thus the sum equals 2√7 / 2 = √7. A common error is to mishandle the difference of squares in the denominator or to forget that the √5 terms cancel in the numerator, leading to spurious answers such as √7 + √5. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q55
**difficulty:** Hard
**type:** Problem Solving
**topic:** Roots & Radicals

What is the value of (√6 + √2) / (√6 − √2) ?

- A) 3
- B) 2 + √3
- C) √3
- D) 2 − √3
- E) 2 + 2√3

**answer:** B
**explanation:** We rationalize by multiplying numerator and denominator by the conjugate √6 + √2. The denominator becomes (√6 − √2)(√6 + √2) = 6 − 2 = 4. The numerator becomes (√6 + √2)² = 6 + 2√12 + 2 = 8 + 2·(2√3) = 8 + 4√3. Therefore the expression equals (8 + 4√3)/4 = 2 + √3. A common error is to compute the middle term 2√12 as 2√3 instead of 4√3, which yields the incorrect value 2 + (√3/2) and leads to distractor forms. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q56
**difficulty:** Hard
**type:** Problem Solving
**topic:** Comparing Radicals

Which of the following has the greatest value?

- A) 3√2
- B) √19
- C) 2√5
- D) 4
- E) ∛80

**answer:** C
**explanation:** To compare these expressions we square the square-root terms, ranking them as integers (all values are positive, so squaring preserves order): (3√2)² = 18, (2√5)² = 20, (√19)² = 19, and 4² = 16. Among these four, 2√5 is largest, with square 20. The remaining candidate ∛80 cannot be cleared by squaring, so compare it with the leader 2√5 by raising both to the 6th power, which eliminates every radical at once (again, both are positive, so order is preserved): (∛80)⁶ = 80² = 6,400, while (2√5)⁶ = 2⁶ × (√5)⁶ = 64 × 5³ = 64 × 125 = 8 × 8 × 125 = 8 × 1,000 = 8,000. Because 6,400 < 8,000, ∛80 does not exceed 2√5. A common error is to assume the cube root is largest because 80 is the biggest radicand, or to stop after comparing only the square roots. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q57
**difficulty:** Easy
**type:** Problem Solving
**topic:** Powers

What is the value of 4³?

- A) 12
- B) 16
- C) 48
- D) 64
- E) 81

**answer:** D
**explanation:** An exponent indicates repeated multiplication of the base by itself, so 4³ means the base 4 used as a factor three times. We therefore compute 4 × 4 × 4. Multiplying the first two factors gives 4 × 4 = 16, and multiplying that result by the remaining factor gives 16 × 4 = 64. The exponent counts factors, not a multiplier, so the value is 64, not 4 × 3. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q58
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots

What is the value of √(144/9)?

- A) 2
- B) 4
- C) 4√2
- D) 12
- E) 16

**answer:** B
**explanation:** The square root of a quotient equals the quotient of the square roots, so √(144/9) = √144 / √9. Each part is a perfect square: √144 = 12 because 12² = 144, and √9 = 3 because 3² = 9. Dividing gives 12 / 3 = 4. As a check, 4² = 16 = 144/9, confirming the result. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q59
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of 10⁶ / 10²?

- A) 10²
- B) 10³
- C) 10⁴
- D) 10⁸
- E) 10¹²

**answer:** C
**explanation:** When two powers share a common base, the quotient is found by subtracting the exponent in the denominator from the exponent in the numerator: a^m / a^n = a^(m−n). Here the base is 10, so we keep that base and subtract the exponents: 10⁶ / 10² = 10^(6−2) = 10⁴. The base is never changed and the exponents are subtracted, not divided, so the answer is 10⁴. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q60
**difficulty:** Easy
**type:** Problem Solving
**topic:** Radicals

Simplify √98.

- A) 7√2
- B) 2√7
- C) 49√2
- D) 7√14
- E) 14√2

**answer:** A
**explanation:** To simplify a square root we factor the radicand so that one factor is the largest possible perfect square, then apply the rule √(ab) = √a · √b. The largest perfect square dividing 98 is 49, since 98 = 49 × 2. Therefore √98 = √(49 × 2) = √49 · √2 = 7√2. The factor 49 exits the radical as its square root, 7, while the 2 remains inside. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q61
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of (2³ × 2⁴) / 2²?

- A) 8
- B) 16
- C) 32
- D) 64
- E) 128

**answer:** C
**explanation:** Because every factor shares the base 2, we combine the exponents using the product and quotient rules. In the numerator, multiplying like bases adds the exponents: 2³ × 2⁴ = 2^(3+4) = 2⁷. Dividing by 2² then subtracts exponents: 2⁷ / 2² = 2^(7−2) = 2⁵. Finally, 2⁵ = 32. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q62
**difficulty:** Medium
**type:** Problem Solving
**topic:** Powers

If 5^x = 125, what is the value of 5^(x+1)?

- A) 125
- B) 130
- C) 375
- D) 625
- E) 3125

**answer:** D
**explanation:** First find x by writing 125 as a power of 5: since 5³ = 125, the equation 5^x = 125 gives x = 3. The quantity requested is 5^(x+1). Using the product rule 5^(x+1) = 5^x · 5^1, and substituting 5^x = 125, we get 5^(x+1) = 125 × 5 = 625. Equivalently, 5^(3+1) = 5⁴ = 625. Note that 5^(x+1) is five times 5^x, not 5^x plus 5, so adding 5 to get 130 is incorrect. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q63
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots

What is the value of √75 − √12?

- A) 3√3
- B) √3
- C) 7√3
- D) √63
- E) 3√63

**answer:** A
**explanation:** Two radical terms can be combined only after each is simplified to reveal a common radicand. We factor out the largest perfect square from each: √75 = √(25 × 3) = 5√3 and √12 = √(4 × 3) = 2√3. Both terms now share the radicand 3, so they are like terms and we subtract their coefficients: 5√3 − 2√3 = (5 − 2)√3 = 3√3. The radicands are never subtracted under a single root, so √75 − √12 is not √63. The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q64
**difficulty:** Medium
**type:** Problem Solving
**topic:** Radicals

Rationalize the denominator: 10 / √5.

- A) √5
- B) 2√5
- C) 5√5
- D) 10√5
- E) 2

**answer:** B
**explanation:** To remove a single radical from a denominator, multiply both the numerator and the denominator by that radical, which does not change the value because we are multiplying by 1. Here we multiply by √5 / √5: (10 / √5) × (√5 / √5) = 10√5 / 5, since √5 · √5 = 5. Dividing 10 by 5 gives 2, so the expression simplifies to 2√5. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q65
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Exponent Rules

What is the value of 3^x?

(1) 3^(x+2) = 81.
(2) 9^x = 81.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** This question asks for the single value of 3^x, so a statement is sufficient if it determines x (or 3^x directly). The governing principle is that equal powers of the same base force their exponents to be equal.

Statement (1) gives 3^(x+2) = 81. Writing 81 as 3⁴ gives 3^(x+2) = 3⁴, so x + 2 = 4 and x = 2. Then 3^x = 3² = 9, a single value. Statement (1) is sufficient.

Statement (2) gives 9^x = 81. Since 9 = 3², the left side is (3²)^x = 3^(2x), and 81 = 3⁴, so 3^(2x) = 3⁴, giving 2x = 4 and x = 2. Then 3^x = 9, a single value. Statement (2) is sufficient.

Because each statement alone determines that 3^x = 9, each statement alone is sufficient. The correct answer is D.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q66
**difficulty:** Hard
**type:** Problem Solving
**topic:** Powers

If 2^x + 2^x + 2^x + 2^x = 2¹⁰, what is the value of x?

- A) 2
- B) 2.5
- C) 5
- D) 6
- E) 8

**answer:** E
**explanation:** The left side is the sum of four identical terms, so it equals 4 × 2^x. Since 4 = 2², we use the product rule to combine: 4 × 2^x = 2² × 2^x = 2^(x+2). The equation becomes 2^(x+2) = 2¹⁰. Because the bases are equal, the exponents must be equal, so x + 2 = 10, which gives x = 8. A common error is to add the exponents of the four like terms or to treat the sum as 2^(4x); instead, repeated addition of a power introduces a coefficient, here 4 = 2². The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q67
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Roots

If x is a positive integer, is √x an integer?

(1) x = 4^n for some positive integer n.
(2) x < 100.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The square root of a positive integer is itself an integer exactly when that integer is a perfect square. We test each statement against this criterion.

Statement (1) gives x = 4^n for some positive integer n. Since 4 = 2², we have x = (2²)^n = 2^(2n) = (2^n)². Because 2^n is a positive integer, x is the square of an integer, so √x = 2^n is an integer. The answer is a definite yes, so Statement (1) is sufficient.

Statement (2) gives only x < 100. This permits x = 4, whose square root 2 is an integer, and also x = 5, whose square root is not an integer. Since the answer can be yes or no, Statement (2) is not sufficient.

Statement (1) alone is sufficient while Statement (2) alone is not. The correct answer is A.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q68
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Radicals

If n is a positive integer, is √n > 5?

(1) n > 24.
(2) n is a perfect square.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**explanation:** Since n is positive, the inequality √n > 5 is equivalent to n > 25 (squaring both sides preserves the inequality for positive quantities). The question therefore reduces to whether n > 25.

Statement (1) gives n > 24, so the smallest integer value is n = 25. For n = 25 we have √25 = 5, which is not greater than 5, giving a no; for n = 26 we have √26 > 5, giving a yes. Because both answers occur, Statement (1) is not sufficient.

Statement (2) says n is a perfect square. Then n = 4 gives √4 = 2, a no, while n = 36 gives √36 = 6, a yes. Statement (2) is not sufficient.

Taking both together, n must be a perfect square greater than 24. The smallest such value is n = 25, where √25 = 5 is not greater than 5 (no), but n = 36 gives √36 = 6 (yes). The answer still varies, so the statements together are not sufficient. The correct answer is E.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q69
**difficulty:** Easy
**type:** Problem Solving
**topic:** Powers

What is the value of 2³ × 5³?

- A) 30
- B) 150
- C) 1000
- D) 1500
- E) 8000

**answer:** C
**explanation:** When two powers share the same exponent but have different bases, they can be combined by multiplying the bases and keeping the common exponent, since a^n × b^n = (a × b)^n. Here both factors carry the exponent 3, so we multiply the bases first: 2 × 5 = 10, giving (2 × 5)³ = 10³. Evaluating the result, 10³ = 1000. As a check, computing each power separately gives 2³ = 8 and 5³ = 125, and 8 × 125 = 1000, which agrees. The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q70
**difficulty:** Easy
**type:** Problem Solving
**topic:** Roots

What is the value of √(36 × 49)?

- A) 13
- B) 42
- C) 85
- D) 1764
- E) 6√49

**answer:** B
**explanation:** The square root of a product equals the product of the square roots, so √(36 × 49) = √36 × √49. Each factor is a perfect square: √36 = 6 because 6² = 36, and √49 = 7 because 7² = 49. Multiplying these results gives 6 × 7 = 42. Equivalently, one could first multiply 36 × 49 = 1764 and then take √1764 = 42, but splitting the radicand into perfect squares is faster. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q71
**difficulty:** Easy
**type:** Problem Solving
**topic:** Exponent Rules

What is the value of (3²)³?

- A) 3⁵
- B) 27
- C) 243
- D) 81
- E) 729

**answer:** E
**explanation:** Raising a power to another power multiplies the exponents, following the rule (a^m)^n = a^(mn). Applying this to (3²)³, we multiply the exponents 2 and 3 to obtain 3^(2×3) = 3⁶, keeping the base 3 unchanged. Evaluating 3⁶ gives 729, since 3⁶ = 729. A common error is to add the exponents and get 3⁵ = 243; exponents add only when like bases are multiplied, not when a power is raised to a power. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q72
**difficulty:** Easy
**type:** Problem Solving
**topic:** Radicals

Simplify √45.

- A) 9√5
- B) 3√5
- C) 5√3
- D) 3√15
- E) 15√3

**answer:** B
**explanation:** To simplify a square root, factor the radicand so that one factor is the largest possible perfect square, then apply √(ab) = √a · √b. The largest perfect square dividing 45 is 9, since 45 = 9 × 5. Therefore √45 = √(9 × 5) = √9 · √5 = 3√5, because √9 = 3 while the 5 remains under the radical. As a check, (3√5)² = 9 × 5 = 45, confirming the result. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q73
**difficulty:** Medium
**type:** Problem Solving
**topic:** Powers

If 3^x = 27, what is the value of 3^(2x)?

- A) 54
- B) 81
- C) 243
- D) 540
- E) 729

**answer:** E
**explanation:** The expression 3^(2x) can be rewritten using the power rule as (3^x)², since 3^(2x) = (3^x)^2. We are given that 3^x = 27, so substituting directly gives (3^x)² = 27² = 729. Alternatively, write 27 as 3³ to find x = 3, then 3^(2x) = 3^6 = 729, which agrees. Note that 3^(2x) is the square of 3^x, not twice 3^x, so doubling 27 to get 54 is incorrect. The correct answer is E.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q74
**difficulty:** Medium
**type:** Problem Solving
**topic:** Exponent Rules

For nonzero a and b, which of the following equals (a⁵b³)² / (a³b⁴)?

- A) a⁷b²
- B) a⁷b⁵
- C) a⁴b²
- D) a¹³b²
- E) a⁷b¹⁰

**answer:** A
**explanation:** First simplify the numerator by raising each factor to the outer power, using (x^m)^n = x^(mn): (a⁵b³)² = a^(5×2) b^(3×2) = a¹⁰b⁶. The expression becomes a¹⁰b⁶ / (a³b⁴). Now apply the quotient rule a^m / a^n = a^(m−n) to each base separately: the a-terms give a^(10−3) = a⁷, and the b-terms give b^(6−4) = b². Combining yields a⁷b². The correct answer is A.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q75
**difficulty:** Medium
**type:** Problem Solving
**topic:** Roots

What is the value of √45 + √80?

- A) √125
- B) 5√5
- C) 7√5
- D) 12√5
- E) 25√5

**answer:** C
**explanation:** Two radicals can be added only after each is simplified to expose a common radicand; radicands themselves are never added under one root. We extract the largest perfect square from each term: √45 = √(9 × 5) = 3√5 and √80 = √(16 × 5) = 4√5. Both terms now share the radicand 5, so they are like terms and we add the coefficients: 3√5 + 4√5 = (3 + 4)√5 = 7√5. Adding the radicands directly to get √125 is invalid, since √a + √b ≠ √(a + b). The correct answer is C.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q76
**difficulty:** Medium
**type:** Problem Solving
**topic:** Radicals

Rationalize the denominator: 8 / (3 − √7).

- A) 4 + 4√7
- B) 24 + 8√7
- C) 4 − 4√7
- D) 12 + 4√7
- E) 12 − 4√7

**answer:** D
**explanation:** To rationalize a denominator that is a difference involving a radical, multiply numerator and denominator by the conjugate, since (a − b)(a + b) = a² − b² eliminates the radical. The conjugate of 3 − √7 is 3 + √7, so we multiply by (3 + √7)/(3 + √7), which equals 1. The new denominator is (3 − √7)(3 + √7) = 3² − (√7)² = 9 − 7 = 2. The new numerator is 8(3 + √7) = 24 + 8√7. Dividing each term by 2 gives (24 + 8√7)/2 = 12 + 4√7. The correct answer is D.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q77
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Exponent Rules

What is the value of 2^x?

(1) 2^(x−3) = 16.
(2) 8^x = 2²¹.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** This question asks for the single value of 2^x, so a statement is sufficient if it pins down x (or 2^x directly). The governing principle is that equal powers of the same base force their exponents to be equal. Statement (1) gives 2^(x−3) = 16; writing 16 as 2⁴ gives 2^(x−3) = 2⁴, so x − 3 = 4 and x = 7, which makes 2^x = 2⁷ = 128, a single value, so Statement (1) is sufficient. Statement (2) gives 8^x = 2²¹; since 8 = 2³, the left side is (2³)^x = 2^(3x), so 2^(3x) = 2²¹ gives 3x = 21 and x = 7, again making 2^x = 128, so Statement (2) is sufficient. Because each statement alone determines that 2^x = 128, each statement alone is sufficient. The correct answer is D.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q78
**difficulty:** Hard
**type:** Problem Solving
**topic:** Powers

If 3^x + 3^x + 3^x = 3⁹, what is the value of x?

- A) 3
- B) 8
- C) 9
- D) 11
- E) 27

**answer:** B
**explanation:** The left side is the sum of three identical terms, so it equals 3 × 3^x. Because the coefficient 3 is itself a power of the base, we use the product rule: 3 × 3^x = 3¹ × 3^x = 3^(x+1). The equation becomes 3^(x+1) = 3⁹, and since the bases are equal the exponents must match, giving x + 1 = 9, so x = 8. A common error is to treat the sum as 3^(3x) or to add the exponents of the three like terms; repeated addition of a power introduces a coefficient, here the factor 3 = 3¹. The correct answer is B.
**related_reading:** reading-quant-04-algebra-and-equations

---

## Q79
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Powers

What is the value of x?

(1) 2^(3x) = 64.
(2) x² = 4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** This question asks for a single value of x, so a statement is sufficient only if it determines x uniquely. Statement (1) gives 2^(3x) = 64; writing 64 as 2⁶ gives 2^(3x) = 2⁶, so 3x = 6 and x = 2, a single value, so Statement (1) is sufficient. Statement (2) gives x² = 4, which has two solutions, x = 2 and x = −2, because squaring discards sign information; since x is not determined, Statement (2) is not sufficient. Statement (1) alone is sufficient while Statement (2) alone is not. The correct answer is A.
**related_reading:** reading-di-02-data-sufficiency-logic

---

## Q80
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Roots

If n is a positive integer, is n a perfect cube?

(1) √n is an integer.
(2) n < 100.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** E
**explanation:** A perfect cube is an integer equal to the cube of some integer, and the question asks whether n is one. Statement (1) says √n is an integer, meaning n is a perfect square; but a perfect square may or may not also be a perfect cube. For example, n = 4 is a perfect square that is not a perfect cube (no), whereas n = 64 = 8² is a perfect square that is also a perfect cube, 4³ (yes). Since both answers occur, Statement (1) is not sufficient. Statement (2) gives only n < 100, which allows n = 8 (a perfect cube, yes) and n = 9 (not a perfect cube, no), so Statement (2) is not sufficient. Taking both together, n must be a perfect square less than 100: n = 4 gives no, while n = 64 gives yes, so the answer still varies and the statements together are not sufficient. The correct answer is E.
**related_reading:** reading-di-02-data-sufficiency-logic