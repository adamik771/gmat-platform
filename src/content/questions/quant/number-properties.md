---
section: Quant
topic: Number Properties
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

How many prime numbers are between 20 and 40?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** B
**explanation:** A prime number is an integer greater than 1 whose only positive divisors are 1 and itself. To count the primes strictly between 20 and 40, we examine each integer in that interval and determine whether it satisfies this definition.

We may immediately set aside every even integer, since any even number greater than 2 is divisible by 2 and is therefore not prime. This leaves only the odd integers to consider: 21, 23, 25, 27, 29, 31, 33, 35, 37, and 39.

We test each of these for divisibility by the small primes 3, 5, and 7. We have 21 = 3 times 7, so 21 is composite. We have 25 = 5 times 5, so 25 is composite. We have 27 = 3 times 9, so 27 is composite. We have 33 = 3 times 11, so 33 is composite. We have 35 = 5 times 7, so 35 is composite. And we have 39 = 3 times 13, so 39 is composite.

The remaining odd integers are 23, 29, 31, and 37. Each of these is divisible by none of 2, 3, 5, or 7. Since any composite number less than 49 must have a prime factor of at most 7 (because a factor exceeding 7 would require a cofactor of at least 7, giving a product of at least 49), each of these four integers is prime.

Thus the prime numbers between 20 and 40 are 23, 29, 31, and 37, giving a total count of 4.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even/Odd

If m is an even integer and n is an odd integer, which of the following must be odd?

- A) m + 2n
- B) mn
- C) m² + n
- D) 2m + 2n
- E) m - n + 1

**answer:** C
**explanation:** This problem is governed by the rules of parity, which describe how the even or odd character of integers is preserved under addition, subtraction, and multiplication. The relevant rules are: the sum or difference of two integers of the same parity is even, while the sum or difference of two integers of opposite parity is odd; the product of two integers is odd only when both factors are odd, and is even whenever at least one factor is even.

Let m be an even integer and let n be an odd integer. We evaluate the expression m² + n.

First, consider m². Since m² = m × m is the product of two even integers, and the product of any even integer with another integer is even, m² is even.

Next, consider the sum m² + n. This is the sum of an even integer (m²) and an odd integer (n). By the parity rule for addition, the sum of an even integer and an odd integer is odd. Therefore m² + n is odd.

Because m² + n is odd for every even integer m and every odd integer n, this expression must be odd.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

How many positive factors does the number 36 have?

- A) 4
- B) 6
- C) 8
- D) 9
- E) 12

**answer:** D
**explanation:** The number of positive factors of an integer can be determined from its prime factorization: if a positive integer is written as the product of prime powers p^a · q^b · r^c · …, then its total number of positive factors equals (a + 1)(b + 1)(c + 1) · …. Each exponent in a factor of the number may independently range from 0 up to the exponent in the prime factorization, which yields (exponent + 1) choices for each prime.

We begin by writing 36 as a product of prime powers. Since 36 = 4 · 9 = 2^2 · 3^2, the prime factorization of 36 is 2^2 · 3^2.

Let the exponents of the primes 2 and 3 be a = 2 and b = 2. Applying the factor-counting principle, the number of positive factors is (a + 1)(b + 1) = (2 + 1)(2 + 1) = 3 · 3 = 9.

This result can be confirmed by listing all positive factors of 36: 1, 2, 3, 4, 6, 9, 12, 18, and 36. There are 9 such factors.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

When the positive integer n is divided by 7, the remainder is 4. What is the remainder when 3n + 5 is divided by 7?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 6

**answer:** C
**explanation:** The governing principle is that any integer leaving a fixed remainder upon division by a divisor can be expressed in the form (divisor times an integer) plus that remainder, and remainders are preserved under the arithmetic operations performed on such expressions. We therefore translate the given condition into algebra and reduce modulo 7.

Let n be the positive integer. Since dividing n by 7 leaves a remainder of 4, we can write n = 7k + 4 for some non-negative integer k.

We are asked for the remainder when 3n + 5 is divided by 7. Substituting the expression for n gives:

3n + 5 = 3(7k + 4) + 5.

We expand the product:

3(7k + 4) + 5 = 21k + 12 + 5.

We combine the constant terms:

21k + 12 + 5 = 21k + 17.

We now separate out the largest multiple of 7 that does not exceed the constant term, writing 17 as 14 + 3:

21k + 17 = 21k + 14 + 3 = 7(3k + 2) + 3.

Since 7(3k + 2) is a multiple of 7 and 0 is less than or equal to 3, which is less than 7, the remainder when 3n + 5 is divided by 7 is 3.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility

If the three-digit number 4A6 is divisible by 9, where A represents a single digit, what is the value of A?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** D
**explanation:** A positive integer is divisible by 9 if and only if the sum of its digits is divisible by 9. We apply this rule to the three-digit number 4A6, where A represents a single digit.

Let A denote the unknown tens digit. The digits of the number are 4, A, and 6, so the digit sum is

4 + A + 6 = 10 + A.

For 4A6 to be divisible by 9, the quantity 10 + A must be a multiple of 9. Because A is a single digit, A satisfies 0 ≤ A ≤ 9, and therefore

10 ≤ 10 + A ≤ 19.

The only multiple of 9 in the interval from 10 to 19 is 18. Hence we require

10 + A = 18,

which gives A = 8. The resulting number, 486, has digit sum 18, confirming that it is divisible by 9.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q6
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiples

What is the greatest common factor of 168 and 252?

- A) 12
- B) 21
- C) 28
- D) 42
- E) 84

**answer:** E
**explanation:** The greatest common factor of two integers is found by writing each integer as a product of primes and then taking each prime that the two integers share, raised to the smaller of the two exponents with which it appears. The product of these prime powers is the greatest common factor.

Let us factor each integer completely into primes. For 168, repeated division gives 168 = 2 × 84 = 2 × 2 × 42 = 2 × 2 × 2 × 21 = 2 × 2 × 2 × 3 × 7, so 168 = 2^3 × 3 × 7. For 252, repeated division gives 252 = 2 × 126 = 2 × 2 × 63 = 2 × 2 × 3 × 21 = 2 × 2 × 3 × 3 × 7, so 252 = 2^2 × 3^2 × 7.

The primes common to both factorizations are 2, 3, and 7. We take each to the smaller exponent appearing in the two factorizations. The prime 2 appears as 2^3 in 168 and 2^2 in 252, so we take 2^2. The prime 3 appears as 3^1 in 168 and 3^2 in 252, so we take 3^1. The prime 7 appears as 7^1 in both, so we take 7^1.

The greatest common factor is therefore 2^2 × 3 × 7 = 4 × 3 × 7 = 84.

The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q7
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders

If x and y are positive integers such that x = 8q + 5 and y = 8r + 3, where q and r are positive integers, what is the remainder when xy is divided by 8?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 15

**answer:** D
**explanation:** The remainder of a product depends only on the remainders of its factors. When two integers are expressed in the form (multiple of 8) plus a remainder, the product of the two remainders, reduced modulo 8, gives the remainder of the product.

Let x = 8q + 5 and y = 8r + 3, where q and r are positive integers. We form the product xy and expand it:

xy = (8q + 5)(8r + 3)
xy = 64qr + 24q + 40r + 15.

Each of the first three terms is a multiple of 8, since 64 = 8(8), 24 = 8(3), and 40 = 8(5). We group these multiples of 8 together and treat the constant term separately:

xy = 8(8qr + 3q + 5r) + 15.

The quantity 8(8qr + 3q + 5r) contributes no remainder when divided by 8, so the remainder of xy is the remainder of 15 when divided by 8. Because 15 = 8 + 7, the remainder is 7. Writing this explicitly:

xy = 8(8qr + 3q + 5r + 1) + 7.

Thus the remainder when xy is divided by 8 is 7.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q8
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Factors

If n is a positive integer and n² is divisible by 72, what is the smallest possible value of n?

- A) 6
- B) 12
- C) 24
- D) 36
- E) 72

**answer:** B
**explanation:** This problem is governed by the principle that, in the prime factorization of a perfect square, every prime exponent must be even, together with the rule that one integer is divisible by another exactly when each prime exponent in the divisor does not exceed the corresponding exponent in the dividend.

We begin by factoring the divisor. We have 72 = 2^3 × 3^2.

Let n be a positive integer. Then n^2 is a perfect square, so in its prime factorization the exponent of each prime is even. For n^2 to be divisible by 72, the exponent of 2 in n^2 must be at least 3, and the exponent of 3 in n^2 must be at least 2.

Consider the exponent of 2. It must be even and at least 3, so the smallest permissible value is 4. Consider the exponent of 3. It must be even and at least 2, so the smallest permissible value is 2. Therefore the smallest n^2 that is divisible by 72 is 2^4 × 3^2.

We now solve for n by taking the square root of this minimal n^2:

n = (2^4 × 3^2)^(1/2) = 2^2 × 3^1 = 4 × 3 = 12.

We confirm this value. We compute 12^2 = 144, and 144 = 72 × 2, so 144 is divisible by 72. Hence n = 12 satisfies the condition and is the smallest such positive integer.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility Rules

Which of the following numbers is divisible by 11?

- A) 2431
- B) 3456
- C) 5791
- D) 6810
- E) 7239

**answer:** A
**explanation:** An integer is divisible by 11 if and only if its alternating sum of digits is itself divisible by 11, where divisibility includes the value 0. The alternating sum is formed by assigning signs to the digits in succession, beginning with a plus sign on the units digit, a minus sign on the tens digit, a plus sign on the hundreds digit, and so on.

Let N be the candidate integer 2,431. Reading its digits from right to left, the units digit is 1, the tens digit is 3, the hundreds digit is 4, and the thousands digit is 2. We assign the alternating signs accordingly and compute the alternating sum S:

S = 1 - 3 + 4 - 2.

We evaluate the expression in order:

1 - 3 = -2,
-2 + 4 = 2,
2 - 2 = 0.

Thus S = 0. Since 0 is divisible by 11, the integer 2,431 is divisible by 11.

This conclusion may be confirmed directly by division: 2,431 = 11 * 221, since 11 * 221 = 11 * 200 + 11 * 21 = 2,200 + 231 = 2,431. The quotient 221 is an integer, which establishes that 11 divides 2,431 exactly.

The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q10
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Integers

The sum of five consecutive integers is 85. What is the largest of the five integers?

- A) 15
- B) 17
- C) 19
- D) 21
- E) 23

**answer:** C
**explanation:** When an odd number of consecutive integers is summed, the mean of the set equals its median, which is the middle integer. Thus the sum is the product of that middle integer and the number of terms, and each integer can be located by its position relative to the middle.

Let n denote the middle (third) of the five consecutive integers. Because the five integers are evenly spaced around n, their sum equals 5n. We are told this sum is 85, so we have the equation 5n = 85.

Solving for n gives n = 85 / 5 = 17, so the middle integer is 17. The five consecutive integers are therefore 15, 16, 17, 18, and 19. The largest of these is the fifth integer, which is two more than the middle: 17 + 2 = 19.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q11
**difficulty:** Easy
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 3²⁴?

- A) 0
- B) 1
- C) 3
- D) 7
- E) 9

**answer:** B
**explanation:** The units digit of a positive integer power can be found by examining the cycle that the units digits of successive powers form. We compute the units digits of the first several powers of 3 and observe the repeating pattern.

Let n denote the exponent. Computing successive powers of 3:
3^1 = 3, with units digit 3.
3^2 = 9, with units digit 9.
3^3 = 27, with units digit 7.
3^4 = 81, with units digit 1.
3^5 = 243, with units digit 3, which repeats the units digit of 3^1.

Thus the units digits of 3^n form the repeating cycle 3, 9, 7, 1, which has period 4. To locate 3^24 within this cycle, we determine the position of the exponent 24 by computing its remainder upon division by 4.

We have 24 = 4 times 6, so 24 divided by 4 leaves a remainder of 0. A remainder of 0 corresponds to the final position in the cycle, which is the fourth position. The units digit in the fourth position of the cycle 3, 9, 7, 1 is 1. Therefore the units digit of 3^24 is 1.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders

When the positive integer n is divided by 5, the remainder is 2. What is the remainder when n² is divided by 5?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** E
**explanation:** The governing principle is that the remainder of a product depends only on the remainders of its factors: if a positive integer leaves remainder r upon division by m, then its square leaves the same remainder as r squared upon division by m. We may therefore represent n in terms of its quotient and remainder when divided by 5.

Let k be a nonnegative integer such that n = 5k + 2, since dividing n by 5 leaves a remainder of 2. Squaring this expression gives n squared = (5k + 2) squared = 25k squared + 20k + 4. The first two terms, 25k squared and 20k, are each multiples of 5, so they contribute nothing to the remainder. Factoring the multiple of 5 explicitly, we obtain n squared = 5(5k squared + 4k) + 4.

The expression 5(5k squared + 4k) is divisible by 5, and the remaining term, 4, is less than 5. Hence the remainder when n squared is divided by 5 is 4.

The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** GCD and LCM

What is the least common multiple of 18, 24, and 30?

- A) 120
- B) 180
- C) 360
- D) 540
- E) 720

**answer:** C
**explanation:** The least common multiple of a set of integers is the smallest positive integer that is divisible by each of them. The standard method is to prime-factorize each integer and then form a product that includes, for every prime that appears, the greatest power of that prime occurring in any single factorization.

We factor each of the three integers into primes. We have 18 = 2 · 3 squared, 24 = 2 cubed · 3, and 30 = 2 · 3 · 5.

We now collect the distinct primes that occur: 2, 3, and 5. For each prime we take the greatest exponent observed across the three factorizations. The greatest power of 2 is 2 cubed, which appears in 24. The greatest power of 3 is 3 squared, which appears in 18. The greatest power of 5 is 5 to the first power, which appears in 30.

The least common multiple is therefore the product of these maximal prime powers: LCM = 2 cubed · 3 squared · 5. We compute this value step by step. First, 2 cubed = 8 and 3 squared = 9. Then 8 · 9 = 72, and 72 · 5 = 360.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Factorization and Counting Factors

How many positive factors does 720 have?

- A) 24
- B) 28
- C) 30
- D) 32
- E) 36

**answer:** C
**explanation:** The number of positive factors of an integer can be found from its prime factorization. If a positive integer is written as the product of prime powers, then the total number of positive factors equals the product of the quantities formed by adding 1 to each exponent.

We begin by prime-factorizing 720. We write 720 as 72 times 10, then break each part into primes: 72 = 8 times 9 = 2^3 times 3^2, and 10 = 2 times 5. Combining these, we obtain 720 = 2^3 times 3^2 times 2 times 5 = 2^4 times 3^2 times 5^1.

We verify this factorization by recomputing the product: 2^4 = 16, 3^2 = 9, and 5^1 = 5, so 16 times 9 times 5 = 144 times 5 = 720, which confirms the factorization.

We now apply the counting principle. The exponents are 4, 2, and 1, so we add 1 to each and take the product: (4 + 1)(2 + 1)(1 + 1) = 5 times 3 times 2 = 30.

Thus 720 has 30 positive factors.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 2⁵⁰ + 7³⁰?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 7

**answer:** C
**explanation:** The units digit of a power depends only on the units digit of its base, and the units digits of successive powers of a fixed base repeat in a cycle. To find the units digit of a sum, we determine the units digit of each term separately and then add those digits, keeping only the units digit of the result.

Consider first 2 raised to the 50th power. The units digits of the successive powers of 2 form the repeating cycle 2, 4, 8, 6, which has length 4. The position within this cycle for an exponent n is given by the remainder when n is divided by 4, where a remainder of 0 corresponds to the fourth position. Let r be the remainder when 50 is divided by 4. Since 50 equals 4 times 12 plus 2, we have r = 2. The second entry of the cycle 2, 4, 8, 6 is 4, so the units digit of 2 raised to the 50th power is 4.

Consider next 7 raised to the 30th power. The units digits of the successive powers of 7 form the repeating cycle 7, 9, 3, 1, which also has length 4. Let s be the remainder when 30 is divided by 4. Since 30 equals 4 times 7 plus 2, we have s = 2. The second entry of the cycle 7, 9, 3, 1 is 9, so the units digit of 7 raised to the 30th power is 9.

Adding the two units digits gives 4 plus 9, which equals 13. The units digit of 13 is 3, so the units digit of the entire sum is 3.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Integers

If n is a positive integer, which of the following must be divisible by 6?

- A) n(n+1)
- B) n(n+2)
- C) n(n+1)(n+2)
- D) n² + n + 1
- E) n³ + 1

**answer:** C
**explanation:** The governing principle is that the product of any k consecutive integers is divisible by k!. Consequently, the product of any 3 consecutive integers is divisible by 3! = 6. The reason is structural: among any 3 consecutive integers, at least one is even and so contributes a factor of 2, and exactly one is a multiple of 3 and so contributes a factor of 3; together these guarantee a factor of 2 multiplied by 3, which is 6.

Let n be a positive integer. We examine the expression n(n+1)(n+2), which is the product of the three consecutive integers n, n+1, and n+2.

Divisibility by 2: Among any two consecutive integers, one is even. Hence at least one of n, n+1, and n+2 is even, so the product contains a factor of 2.

Divisibility by 3: Among any three consecutive integers, exactly one is a multiple of 3. Hence one of n, n+1, and n+2 is divisible by 3, so the product contains a factor of 3.

Because the product contains both a factor of 2 and a factor of 3, and because 2 and 3 are distinct primes, the product is divisible by 2 multiplied by 3, that is, by 6. This holds for every positive integer n.

We confirm with a representative value. For n = 1, we have n(n+1)(n+2) = 1 multiplied by 2 multiplied by 3 = 6, and 6 divided by 6 = 1, an integer. For n = 4, we have 4 multiplied by 5 multiplied by 6 = 120, and 120 divided by 6 = 20, an integer. The expression is therefore always divisible by 6.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q17
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Odd/Even Arithmetic

Is the integer k odd?

(1) k² + k is even.
(2) 3k + 1 is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** This question asks whether the integer k is odd, so each statement is sufficient only if it forces a single, definite answer to that yes-or-no question. The governing principles are the parity rules for integers: the product of two consecutive integers is always even, and a product of integers is odd if and only if every factor is odd.

Let k be the integer in question.

Statement (1) asserts that k² + k is even. We factor the expression as k² + k = k(k + 1). The factors k and k + 1 are consecutive integers, so exactly one of them is even; their product is therefore even for every integer k. Because k(k + 1) is even whether k is odd or even, statement (1) holds for both parities and cannot distinguish between them. For example, k = 2 gives 4 + 2 = 6 (even) and k = 3 gives 9 + 3 = 12 (even); the first k is even and the second is odd, yet both satisfy the statement. Statement (1) is therefore not sufficient.

Statement (2) asserts that 3k + 1 is even. If 3k + 1 is even, then 3k = (3k + 1) − 1 is odd. A product of integers is odd only when each factor is odd; since 3 is odd, 3k is odd if and only if k is odd. Hence 3k odd forces k to be odd. This yields a definite answer of yes, so statement (2) is sufficient.

Thus statement (2) alone is sufficient while statement (1) alone is not.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q18
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

If x, y, and z are integers with xyz < 0 and x + y + z > 0, which of the following must be true?

- A) Exactly one of x, y, z is negative.
- B) Exactly two of x, y, z are negative.
- C) All three are positive.
- D) At least one is zero.
- E) x + y + z is negative.

**answer:** A
**explanation:** The governing principle is the sign rule for a product of integers: a product is negative if and only if it contains a nonzero number of factors and an odd number of those factors are negative; a product equals zero if any factor is zero. We combine this rule with the constraint on the sum.

Let x, y, and z be the three integers. We are given that xyz < 0 and that x + y + z > 0.

First, since xyz < 0, the product is nonzero, so none of x, y, or z can be zero. Each integer is therefore strictly positive or strictly negative.

Next, because xyz < 0, the number of negative factors among x, y, and z must be odd. With exactly three integers, an odd count is either one or three. Thus either exactly one of the integers is negative or all three are negative.

We test the case in which all three are negative. If x < 0, y < 0, and z < 0, then their sum x + y + z is a sum of three negative numbers, so x + y + z < 0. This contradicts the given condition x + y + z > 0, so all three cannot be negative.

The only remaining possibility consistent with both conditions is that exactly one of x, y, and z is negative, while the other two are positive and large enough in magnitude to keep the sum positive. This satisfies xyz < 0, since one negative factor yields a negative product, and it permits x + y + z > 0.

The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q19
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** GCD and LCM

If m and n are positive integers, what is the value of m?

(1) The greatest common divisor of m and n is 6.
(2) The least common multiple of m and n is 36, and n = 12.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** The governing principle is the identity relating the greatest common divisor and least common multiple of two positive integers: for any positive integers m and n, the product of their greatest common divisor and their least common multiple equals the product of the two integers. That is, gcd(m, n) times lcm(m, n) equals m times n. We are asked to determine the value of m.

Consider statement (1). We are told that gcd(m, n) = 6. This requires only that 6 divide m, so m may equal 6, 12, 18, 24, and so on, with n chosen correspondingly. For instance, m = 6 with n = 6 yields a greatest common divisor of 6, and m = 12 with n = 6 also yields a greatest common divisor of 6. Because more than one value of m is possible, statement (1) alone does not determine m and is not sufficient.

Consider statement (2). We are told that lcm(m, 12) = 36 and that n = 12. Writing 36 = 2^2 times 3^2 and 12 = 2^2 times 3, the integer m must be a divisor of 36 whose least common multiple with 12 is 36. The values m = 9, m = 18, and m = 36 each satisfy lcm(m, 12) = 36, since lcm(9, 12) = 36, lcm(18, 12) = 36, and lcm(36, 12) = 36. Because more than one value of m is possible, statement (2) alone does not determine m and is not sufficient.

Now consider the two statements together. We have gcd(m, n) = 6 from statement (1), and lcm(m, n) = 36 with n = 12 from statement (2). Applying the identity, gcd(m, n) times lcm(m, n) equals m times n. Let us substitute the known quantities. We obtain 6 times 36 = m times 12, so m = (6 times 36) / 12 = (6 / 12) times 36 = 36 / 2 = 18. The two statements together determine a single value of m, so they are sufficient, while neither statement alone is sufficient.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q20
**difficulty:** Hard
**type:** Problem Solving
**topic:** Prime Factorization and Counting Factors

If n = 2⁵ × 3⁴ × 5³, how many positive factors of n are perfect squares?

- A) 6
- B) 9
- C) 12
- D) 18
- E) 24

**answer:** D
**explanation:** A positive integer is a perfect square if and only if, in its prime factorization, every prime appears to an even power. Because every factor of n is built only from the primes 2, 3, and 5 that appear in n, we may count the perfect-square factors by determining, prime by prime, how many even exponents are available.

Let a factor of n be written as 2^a x 3^b x 5^c, where the exponents must satisfy 0 <= a <= 5, 0 <= b <= 4, and 0 <= c <= 3, since these are the powers of 2, 3, and 5 in n = 2^5 x 3^4 x 5^3. The factor is a perfect square exactly when a, b, and c are all even.

We now count the admissible even exponents for each prime, including 0. For the prime 2, the even values of a with 0 <= a <= 5 are 0, 2, and 4, giving 3 choices. For the prime 3, the even values of b with 0 <= b <= 4 are 0, 2, and 4, giving 3 choices. For the prime 5, the even values of c with 0 <= c <= 3 are 0 and 2, giving 2 choices, since 4 exceeds the maximum exponent 3 and is therefore excluded.

Because the three exponents are chosen independently, the total number of perfect-square factors is the product of the separate counts:

3 x 3 x 2 = 18.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q21
**difficulty:** Hard
**type:** Problem Solving
**topic:** Trailing Zeros in Factorials

If n is a positive integer such that n! ends in exactly seven zeros, what is the greatest possible value of n?

- A) 29
- B) 31
- C) 32
- D) 34
- E) 35

**answer:** D
**explanation:** The number of trailing zeros at the end of n! equals the number of times 5 occurs as a factor in the product 1 times 2 times 3 times ... times n, because each trailing zero comes from a factor of 10, and 10 equals 2 times 5, and factors of 2 are always more plentiful than factors of 5. The count of factors of 5 in n! is given by adding the whole-number quotients ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ..., where each term counts the multiples of that power of 5 up to n.

Let z(n) denote the number of trailing zeros of n!. For values of n less than 125, only the first two terms contribute, so z(n) = ⌊n/5⌋ + ⌊n/25⌋.

We seek the greatest n for which z(n) equals exactly 7. The value of z(n) increases only as n passes a multiple of 5, so we evaluate it at the relevant multiples of 5.

At n = 25: z(25) = ⌊25/5⌋ + ⌊25/25⌋ = 5 + 1 = 6.

Thus for every n from 25 through 29, z(n) = 6, since no additional multiple of 5 is reached.

At n = 30: z(30) = ⌊30/5⌋ + ⌊30/25⌋ = 6 + 1 = 7.

Thus for every n from 30 through 34, z(n) = 7, because no further multiple of 5 is reached until 35.

At n = 35: z(35) = ⌊35/5⌋ + ⌊35/25⌋ = 7 + 1 = 8.

Therefore n! ends in exactly seven zeros precisely when n is one of 30, 31, 32, 33, or 34, and the greatest such value is 34.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors and Divisibility

How many positive integers n satisfy BOTH conditions: n is a factor of 60, and n + 2 is also a factor of 60?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**explanation:** The governing principle is that every positive integer factor of a number can be enumerated from that number's prime factorization, so the most reliable method is to list all factors and test the stated condition against each one. We require the count of positive integers n such that n is a factor of 60 and n + 2 is also a factor of 60.

First we factor the number: 60 = 2^2 * 3 * 5. The number of positive factors equals (2 + 1)(1 + 1)(1 + 1) = 12, and listing them in increasing order gives the complete set

1, 2, 3, 4, 5, 6, 10, 12, 15, 20, 30, 60.

Let n be any member of this set. The condition holds precisely when n + 2 is also a member of the set, so we test each value of n in turn.

For n = 1, n + 2 = 3, which is a factor; this value qualifies.
For n = 2, n + 2 = 4, which is a factor; this value qualifies.
For n = 3, n + 2 = 5, which is a factor; this value qualifies.
For n = 4, n + 2 = 6, which is a factor; this value qualifies.
For n = 5, n + 2 = 7, which is not a factor of 60; this value fails.
For n = 6, n + 2 = 8, which is not a factor of 60; this value fails.
For n = 10, n + 2 = 12, which is a factor; this value qualifies.
For n = 12, n + 2 = 14, which is not a factor; this value fails.
For n = 15, n + 2 = 17, which is not a factor; this value fails.
For n = 20, n + 2 = 22, which is not a factor; this value fails.
For n = 30, n + 2 = 32, which is not a factor; this value fails.
For n = 60, n + 2 = 62, which is not a factor; this value fails.

The values of n that satisfy both conditions are 1, 2, 3, 4, and 10, giving a total of 5 such integers.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q23
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility — Lifting Prime Powers

Is the positive integer n divisible by 18?

(1) n is divisible by 12.
(2) n² is divisible by 27.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** This question asks whether the positive integer n is divisible by 18. The governing principle concerns the exponents of primes in a factorization: for a prime p, the power p^k divides a positive integer m exactly when the exponent of p in the prime factorization of m is at least k. A further fact about squares is essential here: the exponent of any prime in n^2 is exactly twice its exponent in n, so this exponent is always even. Consequently, if p^k divides n^2, then the exponent of p in n must be at least the least integer greater than or equal to k/2.

We begin by factoring the target. We have 18 = 2 * 3^2. Therefore n is divisible by 18 if and only if the exponent of 2 in n is at least 1 and the exponent of 3 in n is at least 2.

Statement (1) states that n is divisible by 12. Since 12 = 2^2 * 3, this guarantees that the exponent of 2 in n is at least 2 and that the exponent of 3 in n is at least 1. The condition on 2 is satisfied, but only a single factor of 3 is guaranteed, whereas divisibility by 18 requires two factors of 3. For example, n = 12 is divisible by 12, yet 12 is not divisible by 18. Hence the answer can be "no." If instead n = 36 = 2^2 * 3^2, the answer is "yes." Because both outcomes are possible, statement (1) alone is not sufficient.

Statement (2) states that n^2 is divisible by 27 = 3^3. Thus the exponent of 3 in n^2 is at least 3. Since the exponent of 3 in n^2 is even, it cannot equal 3 and must be at least 4, which means the exponent of 3 in n is at least 2. Therefore n is divisible by 3^2 = 9. However, statement (2) provides no information about the factor of 2 required for divisibility by 18. For example, n = 9 satisfies statement (2) but is not divisible by 18, while n = 18 satisfies it and is. Because both outcomes are possible, statement (2) alone is not sufficient.

Taking the statements together, statement (1) guarantees that the exponent of 2 in n is at least 1, and statement (2) guarantees that the exponent of 3 in n is at least 2. Then n contains the factors 2 and 3^2, whose product is 2 * 9 = 18. Since 2 and 9 share no common prime factor, n is divisible by their product, 18. The two statements together yield a definite "yes," so they are sufficient.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q24
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting Multiples in a Range

How many multiples of 7 are there from 100 to 300, inclusive?

- A) 26
- B) 27
- C) 28
- D) 29
- E) 30

**answer:** C
**explanation:** To count the multiples of an integer k that lie within a range of consecutive integers, we identify the first and last multiples of k that fall inside the range and count how many multiples lie between them, inclusive. Because the multiples of k are evenly spaced, this count equals the difference of their positions in the sequence of multiples of k, plus one.

We seek the multiples of 7 from 100 to 300, inclusive. First, we find the smallest multiple of 7 that is at least 100. Since 7 times 14 equals 98, which is less than 100, and 7 times 15 equals 105, which is at least 100, the smallest qualifying multiple is 7 times 15, namely 105.

Next, we find the largest multiple of 7 that is at most 300. Since 7 times 42 equals 294, which is at most 300, and 7 times 43 equals 301, which exceeds 300, the largest qualifying multiple is 7 times 42, namely 294.

The qualifying multiples are therefore 7 times 15, 7 times 16, and so on up to 7 times 42. The number of integers from 15 to 42, inclusive, is 42 minus 15, plus 1, which equals 28. Hence there are 28 multiples of 7 from 100 to 300, inclusive.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders — Chinese Remainder Setup

When a positive integer n is divided by 15, the remainder is 7. When n is divided by 7, the remainder is 3. What is the smallest possible value of n?

- A) 22
- B) 37
- C) 52
- D) 67
- E) 82

**answer:** C
**explanation:** This problem describes an integer through two division conditions, each of which can be expressed as an equation involving a quotient and a remainder. The efficient method is to encode the first condition algebraically and substitute it into the second, rather than testing values one at a time.

Let n denote the positive integer in question. The statement that n leaves a remainder of 7 when divided by 15 means that n exceeds a multiple of 15 by 7. We may therefore write n = 15k + 7, where k is a non-negative integer.

The second condition requires that n leave a remainder of 3 when divided by 7. We examine n = 15k + 7 modulo 7. Since 15 = 14 + 1 and 14 is a multiple of 7, we have 15 leaving a remainder of 1 upon division by 7. Likewise, 7 leaves a remainder of 0 upon division by 7. Consequently, the remainder of 15k + 7 upon division by 7 equals the remainder of k upon division by 7.

The requirement that this remainder equal 3 therefore forces k to leave a remainder of 3 when divided by 7. The smallest non-negative value of k satisfying this is k = 3.

Substituting k = 3 into n = 15k + 7 gives n = 15(3) + 7 = 45 + 7 = 52.

We verify both original conditions. Dividing 52 by 15 yields a quotient of 3 and a remainder of 7, since 52 = 15(3) + 7. Dividing 52 by 7 yields a quotient of 7 and a remainder of 3, since 52 = 7(7) + 3. Both conditions are satisfied, and because k = 3 is the smallest qualifying value, n = 52 is the smallest possible value of n.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q26
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility by 6

Is the positive integer k divisible by 6?

(1) k is divisible by 4.
(2) k + 2 is divisible by 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** A positive integer is divisible by 6 precisely when it is divisible by both 2 and 3, because 6 = 2 × 3 and 2 and 3 are distinct primes. The question therefore asks whether k carries both a factor of 2 and a factor of 3. In a data sufficiency yes/no question, a statement is sufficient when it forces a single, consistent answer, whether that answer is always "yes" or always "no."

Consider statement (1): k is divisible by 4. This guarantees that k is divisible by 2, but it provides no information about divisibility by 3. We may test specific values. Let k = 4; then k is not divisible by 3, so k is not divisible by 6, giving the answer "no." Let k = 12; then k is divisible by both 2 and 3, so k is divisible by 6, giving the answer "yes." Because statement (1) permits both a "yes" and a "no," it does not determine a unique answer and is not sufficient.

Consider statement (2): k + 2 is divisible by 3. We translate this into a congruence. The condition k + 2 ≡ 0 (mod 3) gives k ≡ -2 (mod 3), and since -2 ≡ 1 (mod 3), we have k ≡ 1 (mod 3). Thus k leaves a remainder of 1 when divided by 3, which means k is never divisible by 3. A number that is not divisible by 3 cannot be divisible by 6. Statement (2) therefore forces the answer "no" in every case, which is a single consistent answer, so statement (2) alone is sufficient.

Since statement (2) alone is sufficient while statement (1) alone is not, statement (2) is the statement that resolves the question.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q27
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Prime Identification

If n is an integer greater than 1, is n prime?

(1) n is odd.
(2) n has exactly two positive divisors.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The governing principle is the definition of a prime number: a prime is an integer greater than 1 whose only positive divisors are 1 and the number itself. Equivalently, an integer greater than 1 is prime if and only if it has exactly two positive divisors. The task is to determine whether each statement allows us to settle the question of whether n is prime.

Let n be an integer with n greater than 1.

Consider statement (1): n is odd. Being odd places no restriction beyond the absence of the factor 2, so we test specific values. If n = 3, then n is odd and its only positive divisors are 1 and 3, so n is prime, and the answer is yes. If n = 9, then n is odd, yet 9 = 3 times 3, so its positive divisors are 1, 3, and 9, and n is not prime, giving the answer no. The same two values of n produce two different answers to the question, so statement (1) alone is not sufficient.

Consider statement (2): n has exactly two positive divisors. Since n is greater than 1, the divisors 1 and n are distinct, and these are always among its positive divisors. If the total count of positive divisors is exactly two, then those two divisors must be precisely 1 and n, with no other positive divisor. This is exactly the defining condition for n to be prime. Therefore statement (2) guarantees that n is prime, and the answer is yes in every case. Statement (2) alone is sufficient.

Because statement (2) alone is sufficient while statement (1) alone is not, the correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q28
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** LCM and GCD Identity

If x and y are positive integers, what is the value of LCM(x, y)?

(1) x = 12 and y = 18.
(2) GCD(x, y) = 6 and xy = 216.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** The governing principle is the identity that, for any two positive integers, the product of their greatest common divisor and their least common multiple equals the product of the integers themselves: GCD(x, y) × LCM(x, y) = xy. The least common multiple can also be computed directly from prime factorizations by taking the highest power of each prime that appears. The task is to determine whether each statement fixes a single value for LCM(x, y).

Consider Statement (1). We are given x = 12 and y = 18. Writing each in terms of primes, 12 = 2² · 3 and 18 = 2 · 3². The least common multiple takes the highest power of each prime, namely 2² and 3², so LCM(12, 18) = 2² · 3² = 4 · 9 = 36. A single value results, so Statement (1) is sufficient.

Consider Statement (2). We are given GCD(x, y) = 6 and xy = 216. Applying the identity GCD(x, y) × LCM(x, y) = xy, we substitute to obtain 6 × LCM(x, y) = 216. Dividing both sides by 6 gives LCM(x, y) = 216 ÷ 6 = 36. Although x and y are not individually determined, the identity fixes the least common multiple at the single value 36, so Statement (2) is sufficient.

Each statement alone determines that LCM(x, y) = 36.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q29
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Parity of a Product

If x and y are integers, is the product xy even?

(1) x + y is even.
(2) x − y is odd.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** This problem is governed by the parity rules for sums, differences, and products of integers. A product of integers is even if and only if at least one of its factors is even. A sum or difference of two integers is even when the two integers share the same parity (both even or both odd) and is odd when the two integers have opposite parities. To resolve the question, we must determine whether each statement forces xy to have a single, definite parity.

Let x and y be integers. We seek to determine whether the product xy is even.

Consider Statement (1): x + y is even. This tells us that x and y share the same parity, but it does not specify which parity. If both are even, take x = 2 and y = 4; then xy = 8, which is even, and the answer to the question is yes. If both are odd, take x = 3 and y = 5; then xy = 15, which is odd, and the answer to the question is no. Because Statement (1) permits both a yes answer and a no answer, it does not determine the parity of xy. Statement (1) alone is therefore not sufficient.

Consider Statement (2): x - y is odd. A difference of two integers is odd precisely when the two integers have opposite parities, so exactly one of x and y is even and the other is odd. Since one factor of the product xy is even, the product xy is even regardless of which factor is the even one. For instance, x = 4 and y = 3 give xy = 12, and x = 3 and y = 4 give xy = 12; in every permitted case the product is even. Thus Statement (2) yields the definite answer yes, and Statement (2) alone is sufficient.

Statement (2) alone is sufficient while Statement (1) alone is not.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q30
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Numbers and Divisibility

What is the smallest positive integer n such that n, n + 2, and n + 4 are all prime?

- A) 2
- B) 3
- C) 5
- D) 7
- E) 11

**answer:** B
**explanation:** To find the smallest positive integer for which three terms are all prime, we test candidate values in increasing order, since the first value that satisfies every condition is by definition the smallest. We are required to find the smallest positive integer n such that n, n + 2, and n + 4 are each prime.

Let n denote the value sought. The three quantities to examine are n, n + 2, and n + 4.

We begin with the smallest candidate. For n = 2, the three quantities are 2, 4, and 6. Since 4 = 2 × 2 and 6 = 2 × 3, neither 4 nor 6 is prime, so n = 2 fails.

We next try n = 3. The three quantities are 3, 5, and 7. Each of 3, 5, and 7 is prime, since none has a positive divisor other than 1 and itself. Therefore n = 3 satisfies every condition.

Because we tested the candidates in increasing order and n = 2 was the only smaller positive integer, n = 3 is the smallest positive integer for which n, n + 2, and n + 4 are all prime.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q31
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Even Integers

The sum of 6 consecutive even integers is 126. What is the smallest of these integers?

- A) 14
- B) 16
- C) 18
- D) 20
- E) 22

**answer:** B
**explanation:** Consecutive even integers differ by 2, so they can be represented in terms of a single variable. Let x denote the smallest of the six integers. Then the six consecutive even integers are x, x + 2, x + 4, x + 6, x + 8, and x + 10.

The condition states that the sum of these integers equals 126. Translating this into an equation gives x + (x + 2) + (x + 4) + (x + 6) + (x + 8) + (x + 10) = 126.

Combining like terms yields 6x + (2 + 4 + 6 + 8 + 10) = 126, that is, 6x + 30 = 126.

Subtracting 30 from both sides gives 6x = 96, and dividing both sides by 6 gives x = 16.

Thus the smallest of the six integers is 16. As a check, 16 + 18 + 20 + 22 + 24 + 26 = 126, which confirms the result.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q32
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainders — Reverse Engineering

When a positive integer n is divided by 7, what is the remainder?

(1) When 2n + 5 is divided by 7, the remainder is 4.
(2) When n − 1 is divided by 7, the remainder is 2.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** The governing principle is that a linear expression an + b, reduced modulo m, determines the value of n modulo m whenever the coefficient a is relatively prime to m, because in that case a is invertible modulo m. Here m = 7 is prime, so any nonzero coefficient is invertible, and we may solve a linear congruence for n directly. The question asks for the remainder when n is divided by 7, which is the value of n modulo 7.

Let r denote the remainder when n is divided by 7, so that n is congruent to r modulo 7, where r is an integer with 0 <= r <= 6.

Statement (1): When 2n + 5 is divided by 7 the remainder is 4, which translates to 2n + 5 congruent to 4 modulo 7. Subtracting 5 from both sides gives 2n congruent to -1 modulo 7, and since -1 is congruent to 6 modulo 7, we have 2n congruent to 6 modulo 7. The multiplicative inverse of 2 modulo 7 is 4, because 2 times 4 equals 8, which is congruent to 1 modulo 7. Multiplying both sides by 4 gives n congruent to 4 times 6, that is n congruent to 24 modulo 7, and 24 leaves remainder 3 when divided by 7. Thus n is congruent to 3 modulo 7, so the remainder is determined to be 3. Statement (1) alone is sufficient.

Statement (2): When n - 1 is divided by 7 the remainder is 2, which translates to n - 1 congruent to 2 modulo 7. Adding 1 to both sides gives n congruent to 3 modulo 7, so the remainder is determined to be 3. Statement (2) alone is sufficient.

Because each statement alone fixes the remainder when n is divided by 7, each statement alone is sufficient.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q33
**difficulty:** Medium
**type:** Problem Solving
**topic:** Consecutive Multiples

The sum of four consecutive positive multiples of 5 is 230. What is the smallest of these four multiples?

- A) 40
- B) 45
- C) 50
- D) 55
- E) 60

**answer:** C
**explanation:** Consecutive multiples of a fixed number form an arithmetic sequence in which each term exceeds the previous one by that fixed number. Because the terms here are consecutive multiples of 5, the four values can be represented in terms of the smallest one by adding successive increments of 5.

Let the smallest of the four multiples be 5n, where n is a positive integer. The four consecutive multiples of 5 are then 5n, 5n + 5, 5n + 10, and 5n + 15.

Translating the condition that the sum equals 230 gives the following equation.

5n + (5n + 5) + (5n + 10) + (5n + 15) = 230

Combining the like terms yields the following.

20n + 30 = 230

Subtracting 30 from both sides gives the following.

20n = 200

Dividing both sides by 20 gives the following.

n = 10

Therefore the smallest multiple is 5n = 5(10) = 50. As a check, the four multiples are 50, 55, 60, and 65, and their sum is 50 + 55 + 60 + 65 = 230, which matches the given total.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** LCM Application — Bells Ringing

Three bells ring at intervals of 6, 9, and 15 minutes respectively. They all ring together at 12:00 noon. At what time will they next ring all together?

- A) 12:45 PM
- B) 1:00 PM
- C) 1:15 PM
- D) 1:30 PM
- E) 2:00 PM

**answer:** D
**explanation:** Periodic events that begin together next coincide after a number of minutes equal to the least common multiple (LCM) of their individual intervals. The task is therefore to compute the LCM of the three ringing intervals and add that elapsed time to the starting moment.

Let the three intervals be 6 minutes, 9 minutes, and 15 minutes. The bells last rang together at 12:00 noon. We seek the smallest positive number of minutes after 12:00 noon at which all three intervals simultaneously divide the elapsed time; this is precisely the LCM of 6, 9, and 15.

To find the LCM, we express each interval as a product of prime factors:

6 = 2 · 3
9 = 3²
15 = 3 · 5

The LCM is formed by taking each prime that appears to its highest power across the factorizations: the prime 2 appears at most once, the prime 3 appears at most squared, and the prime 5 appears at most once. Therefore

LCM = 2 · 3² · 5 = 2 · 9 · 5 = 90.

Thus all three bells ring together again 90 minutes after 12:00 noon. Converting 90 minutes to hours and minutes gives 90 = 60 + 30, that is, 1 hour and 30 minutes. Adding this elapsed time to the starting moment:

12:00 noon + 1 hour 30 minutes = 1:30 PM.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q35
**difficulty:** Easy
**type:** Problem Solving
**topic:** Divisibility Rules

Which of the following numbers is divisible by 4?

- A) 314
- B) 526
- C) 718
- D) 832
- E) 946

**answer:** D
**explanation:** A positive integer is divisible by 4 if and only if the number formed by its final two digits is itself divisible by 4. This rule holds because 100 is a multiple of 4, so every digit to the left of the tens place contributes a multiple of 100, and therefore a multiple of 4, to the value of the number. Consequently, only the tens and units digits determine divisibility by 4.

Let n denote the candidate integer, and let t be the two-digit number formed by the tens and units digits of n. We test each candidate by examining t and determining whether t is a multiple of 4.

For 314, we have t = 14 = 12 + 2, which is not a multiple of 4.
For 526, we have t = 26 = 24 + 2, which is not a multiple of 4.
For 718, we have t = 18 = 16 + 2, which is not a multiple of 4.
For 832, we have t = 32 = 4 × 8, which is a multiple of 4; thus 832 is divisible by 4.
For 946, we have t = 46 = 44 + 2, which is not a multiple of 4.

Only 832 yields a last-two-digit value that is a multiple of 4.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q36
**difficulty:** Easy
**type:** Problem Solving
**topic:** Consecutive Odd Integers

The sum of six consecutive odd integers is 96. What is the largest of these integers?

- A) 11
- B) 15
- C) 17
- D) 19
- E) 21

**answer:** E
**explanation:** A set of consecutive odd integers forms an arithmetic sequence with common difference 2, so each term can be expressed in terms of the smallest term. We translate the given condition on the sum into an equation in that single variable and solve.

Let x represent the smallest of the six consecutive odd integers. The six integers are then x, x + 2, x + 4, x + 6, x + 8, and x + 10.

The sum of these six integers is given as 96. Adding the terms yields

x + (x + 2) + (x + 4) + (x + 6) + (x + 8) + (x + 10) = 96.

Combining like terms gives

6x + (2 + 4 + 6 + 8 + 10) = 96,

so

6x + 30 = 96.

Subtracting 30 from both sides gives 6x = 66, and dividing both sides by 6 gives x = 11.

The question asks for the largest of the six integers, which is x + 10 = 11 + 10 = 21. As a check, 11 + 13 + 15 + 17 + 19 + 21 = 96, which confirms the value of the sum.

The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q37
**difficulty:** Easy
**type:** Problem Solving
**topic:** Absolute Value and Integer Counting

How many integers satisfy |n − 3| ≤ 2?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 7

**answer:** C
**explanation:** An absolute-value inequality of the form |x| ≤ k, where k is nonnegative, is equivalent to the compound inequality −k ≤ x ≤ k. We apply this principle to translate the given condition into a range of values, and then we count the integers that lie within that range.

Let n be an integer satisfying |n − 3| ≤ 2. Rewriting the absolute-value inequality as a compound inequality gives

−2 ≤ n − 3 ≤ 2.

We add 3 to each of the three parts of the inequality to isolate n:

−2 + 3 ≤ n − 3 + 3 ≤ 2 + 3,

which simplifies to

1 ≤ n ≤ 5.

Because the inequality is non-strict, both endpoints are included. The integers satisfying 1 ≤ n ≤ 5 are 1, 2, 3, 4, and 5. The number of integers in this inclusive range is 5 − 1 + 1 = 5.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q38
**difficulty:** Easy
**type:** Problem Solving
**topic:** Counting Multiples — LCM Application

How many integers from 1 to 100, inclusive, are divisible by both 4 and 6?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** C
**explanation:** An integer is divisible by both of two given integers if and only if it is divisible by their least common multiple. The number of multiples of a positive integer k in the range from 1 to n inclusive equals the floor of n divided by k. The task therefore reduces to identifying the least common multiple of 4 and 6 and then counting how many of its multiples fall between 1 and 100 inclusive.

Let d denote the least common multiple of 4 and 6. Writing each number as a product of primes gives 4 = 2^2 and 6 = 2 · 3. The least common multiple takes the highest power of each prime that appears, so d = 2^2 · 3 = 12. Consequently, an integer is divisible by both 4 and 6 precisely when it is divisible by 12.

We now count the multiples of 12 from 1 to 100 inclusive. These multiples are 12, 24, 36, 48, 60, 72, 84, and 96. The next multiple, 12 · 9 = 108, exceeds 100 and is therefore excluded. Equivalently, the count equals the floor of 100 divided by 12. Since 12 · 8 = 96 is at most 100 while 12 · 9 = 108 is greater than 100, the floor of 100 divided by 12 is 8.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q39
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factor Pairs

The product of two positive integers is 48 and their sum is 14. What is the larger of the two integers?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 12

**answer:** C
**explanation:** When the product and the sum of two positive integers are both known, the most reliable method is to list the factor pairs of the product and then identify the pair whose sum matches the required value.

Let x and y denote the two positive integers, where x is the smaller and y is the larger. The conditions translate into two equations: xy = 48 and x + y = 14.

List the factor pairs of 48 in ascending order of the smaller factor: (1, 48), (2, 24), (3, 16), (4, 12), and (6, 8). Each pair multiplies to 48.

Now compute the sum of each pair and compare it with 14. The pair (1, 48) sums to 49. The pair (2, 24) sums to 26. The pair (3, 16) sums to 19. The pair (4, 12) sums to 16. The pair (6, 8) sums to 14, which is the required sum.

Thus x = 6 and y = 8, and these values satisfy both conditions, since 6 multiplied by 8 equals 48 and 6 added to 8 equals 14. The larger of the two integers is 8.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q40
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainders — Powers

What is the remainder when 7^100 is divided by 4?

- A) 0
- B) 1
- C) 2
- D) 3
- E) It depends on the exponent.

**answer:** B
**explanation:** The governing principle is modular reduction of a base before exponentiation: to find the remainder of a^n upon division by m, we first reduce the base a modulo m and then raise the reduced residue to the power n, since congruence is preserved under multiplication and hence under taking powers.

Let n = 100 and consider 7^100 modulo 4. Because 7 = 4 + 3, we have 7 = 3 (mod 4). It is more convenient to use the equivalent residue 3 = -1 (mod 4), so that 7 = -1 (mod 4).

Raising both sides to the 100th power and using the fact that congruences may be raised to a positive integer power, we obtain 7^100 = (-1)^100 (mod 4). Since the exponent 100 is even, (-1)^100 = 1. Therefore 7^100 = 1 (mod 4), which means the remainder is 1.

The same conclusion follows by tracking the cycle of the powers of 7 modulo 4. We have 7^1 = 3 (mod 4) and 7^2 = 49 = 48 + 1 = 1 (mod 4), after which the residues repeat with period 2 in the pattern 3, 1, 3, 1, and so on. An even exponent lands on the second position of the cycle, whose value is 1. Because 100 is even, 7^100 = 1 (mod 4), giving a remainder of 1.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q41
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factor Counting with Variable Primes

If p and q are distinct prime numbers, how many positive factors does p²q³ have?

- A) 5
- B) 6
- C) 9
- D) 12
- E) 24

**answer:** D
**explanation:** The number of positive factors of an integer can be determined from its prime factorization: if a positive integer is expressed as the product of distinct prime powers, then the count of its positive factors equals the product of one more than each exponent. This follows because each factor is formed by independently choosing an exponent for each prime, from zero up to the exponent appearing in the factorization.

Let the integer be p^2 * q^3, where p and q are distinct prime numbers. Because p and q are distinct, this expression is already a prime factorization, with p appearing to the power 2 and q appearing to the power 3.

Any positive factor of p^2 * q^3 has the form p^i * q^j. The exponent i can take the values 0, 1, or 2, which is 3 choices. The exponent j can take the values 0, 1, 2, or 3, which is 4 choices. Since the choice of i and the choice of j are independent, the total number of factors is the product of the number of choices for each:

(2 + 1)(3 + 1) = 3 * 4 = 12.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q42
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Squares and Integer Bounds

For which positive integer n does n² < 200 < (n+1)²?

- A) 12
- B) 13
- C) 14
- D) 15
- E) 16

**answer:** C
**explanation:** This problem asks for the positive integer n satisfying n² < 200 < (n+1)². The governing principle is that for a value k that is not a perfect square, the unique integer n for which n² < k < (n+1)² is the greatest integer whose square does not exceed k; that is, n is the integer part of the square root of k. We therefore locate 200 between two consecutive perfect squares.

Let n be the required positive integer. The condition requires that the square of n be less than 200 while the square of the next consecutive integer, n+1, be greater than 200. We estimate the square root of 200 to determine the candidate. Since 200 = 4 × 50, we have sqrt(200) = 2 · sqrt(50), and sqrt(50) is slightly greater than 7, so sqrt(200) is slightly greater than 14.

We test n = 14. Computing the relevant squares, 14² = 196 and 15² = 225. Substituting into the compound inequality gives 196 < 200 < 225. The left inequality holds because 196 is less than 200, and the right inequality holds because 200 is less than 225. Both conditions are satisfied simultaneously, so n = 14.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q43
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility by 12

Is the positive integer n divisible by 12?

(1) n is divisible by 6.
(2) n is divisible by 8.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** To determine whether a positive integer is divisible by 12, we use its prime factorization: 12 = 2^2 × 3. An integer is divisible by 12 if and only if it contains at least two factors of 2 and at least one factor of 3. When two divisibility conditions are combined, an integer that is divisible by each of two numbers is divisible by their least common multiple (LCM).

Let n be a positive integer, and consider what each statement guarantees about the prime factors of n.

Statement (1) states that n is divisible by 6. Since 6 = 2 × 3, this guarantees that n contains at least one factor of 2 and at least one factor of 3. It does not guarantee a second factor of 2. For example, n = 12 is divisible by 6 and also by 12, whereas n = 6 is divisible by 6 but not by 12. Because both a "yes" and a "no" answer are possible, statement (1) alone is not sufficient.

Statement (2) states that n is divisible by 8. Since 8 = 2^3, this guarantees at least three factors of 2, which is more than the two factors of 2 required, but it guarantees no factor of 3. For example, n = 24 is divisible by 8 and also by 12, whereas n = 8 is divisible by 8 but not by 12. Because both a "yes" and a "no" answer are possible, statement (2) alone is not sufficient.

Taking the two statements together, n is divisible by both 6 and 8, and therefore n is divisible by their least common multiple. We compute LCM(6, 8) by taking the highest power of each prime appearing in either number: 6 = 2 × 3 and 8 = 2^3, so LCM(6, 8) = 2^3 × 3 = 24. Thus n is a multiple of 24. Since 24 = 12 × 2, every multiple of 24 is a multiple of 12, so n must be divisible by 12. This yields a definite "yes," so both statements together are sufficient.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q44
**difficulty:** Medium
**type:** Problem Solving
**topic:** Counting with Inclusion-Exclusion

How many two-digit positive integers are divisible by 7 but not by 3?

- A) 7
- B) 8
- C) 9
- D) 10
- E) 13

**answer:** C
**explanation:** The number of integers in a given range that are divisible by a positive integer d can be counted directly, and the integers divisible by both 7 and 3 are precisely those divisible by their least common multiple. Because 7 and 3 share no common factor greater than 1, the least common multiple is LCM(7, 3) = 21. The integers divisible by 7 but not by 3 are therefore the multiples of 7 with the multiples of 21 removed.

Let us first count the two-digit multiples of 7. The smallest is 7 × 2 = 14, and the largest is 7 × 14 = 98, so the multiples correspond to the integer multipliers 2 through 14. The count of these multipliers is 14 − 2 + 1 = 13. Thus there are 13 two-digit multiples of 7.

Next, let us count the two-digit multiples of 21, since these are the multiples of 7 that are also divisible by 3. The smallest is 21 × 1 = 21, and the multiples continue as 21, 42, 63, and 84. The next multiple would be 21 × 5 = 105, which has three digits and is therefore excluded. Hence there are 4 two-digit multiples of 21.

The two-digit integers divisible by 7 but not by 3 are obtained by subtracting the multiples of 21 from the multiples of 7:

13 − 4 = 9.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q45
**difficulty:** Medium
**type:** Problem Solving
**topic:** Smallest Integer with Exactly N Factors

What is the smallest positive integer that has exactly 6 positive factors?

- A) 8
- B) 10
- C) 12
- D) 16
- E) 18

**answer:** C
**explanation:** The number of positive factors of a positive integer is determined by its prime factorization. If n is written in prime-factored form as n = p1^a1 * p2^a2 * ... * pk^ak, where p1, p2, ..., pk are distinct primes, then the number of positive factors of n equals the product (a1 + 1)(a2 + 1) ... (ak + 1). We seek the smallest positive integer for which this product equals 6.

Let us therefore find every way to express 6 as a product of integers each greater than 1, since each such factor corresponds to one term (ai + 1) and hence to an exponent ai.

Case 1: 6 = 6. Here there is a single prime with (a1 + 1) = 6, so a1 = 5 and n = p1^5. To make n as small as possible, take the smallest prime, p1 = 2, giving n = 2^5 = 32.

Case 2: 6 = 3 * 2. Here there are two distinct primes with (a1 + 1) = 3 and (a2 + 1) = 2, so a1 = 2 and a2 = 1, and n = p1^2 * p2. To minimize n, the larger exponent should be placed on the smaller prime: take p1 = 2 and p2 = 3, giving n = 2^2 * 3 = 12.

Comparing the two cases, the candidates are 32 and 12, so the smallest value is 12.

We verify that 12 has exactly 6 positive factors: 1, 2, 3, 4, 6, and 12. This is indeed 6 factors.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q46
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility of a Consecutive Integer Product

If n is a positive integer, is n(n+1)(n+2) divisible by 12?

(1) n is even.
(2) n is divisible by 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The governing principle is that an integer is divisible by 12 if and only if it is divisible by both 4 and 3, since 12 = 4 × 3 and 4 and 3 share no common prime factor. We may therefore evaluate divisibility by 12 by checking divisibility by 4 and by 3 separately.

Let n be a positive integer, and consider the product n(n+1)(n+2) of three consecutive integers. Among any three consecutive integers, exactly one is a multiple of 3, so the product is always divisible by 3. The factor of 3 is thus guaranteed regardless of the value of n, and the question reduces to whether the product is also divisible by 4.

Consider statement (1): n is even. If n is even, then n + 2 is also even, so the product contains two distinct even factors, n and n + 2. Write n = 2a and n + 2 = 2b for positive integers a and b; then n(n+2) = 4ab, which is divisible by 4. The product n(n+1)(n+2) is therefore divisible by 4, and combined with the guaranteed factor of 3 it is divisible by 4 × 3 = 12. The answer to the question is always Yes, so statement (1) is sufficient.

Consider statement (2): n is divisible by 3. This supplies an additional factor of 3, but the product already contained a factor of 3; it provides no information about the factor of 4 that is required. We test specific values, examining divisibility structure rather than computing each product, where 12 = 4 × 3. Let n = 9: then 9 × 10 × 11 has a factor of 3 (from 9), but among 9, 10, and 11 there is no factor of 4, since 10 contributes only a single 2; the product is therefore not divisible by 12 (answer No). Let n = 6: then 6 × 7 × 8 contains 6, a factor of 3, and 8, a factor of 4, so it is divisible by 12 (answer Yes). Because both Yes and No are possible, statement (2) is not sufficient.

Statement (1) alone is sufficient and statement (2) alone is not sufficient.

The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q47
**difficulty:** Hard
**type:** Problem Solving
**topic:** Inclusion-Exclusion — Symmetric Difference

How many integers from 1 to 200, inclusive, are divisible by 3 or by 7, but not by both?

- A) 57
- B) 66
- C) 76
- D) 85
- E) 94

**answer:** C
**explanation:** This problem asks for the count of integers that are divisible by 3 or by 7 but not by both, which is the symmetric difference of the two sets. The governing method is counting by inclusion-exclusion: first count the multiples of each number, then count the multiples of both, and finally combine these counts so that the integers divisible by both are excluded entirely.

Let A be the set of integers from 1 to 200 that are divisible by 3, and let B be the set of integers from 1 to 200 that are divisible by 7. The number of multiples of an integer d in the range from 1 to 200 is the greatest integer not exceeding 200 divided by d.

We compute the size of A. The multiples of 3 number floor(200/3) = 66.

We compute the size of B. The multiples of 7 number floor(200/7) = 28.

We compute the size of the intersection A and B. An integer divisible by both 3 and 7 is divisible by their least common multiple, which is 3 times 7 = 21, since 3 and 7 are relatively prime. The multiples of 21 number floor(200/21) = 9.

We now isolate the integers divisible by exactly one of the two numbers. The integers divisible by 3 but not by 7 number 66 minus 9 = 57. The integers divisible by 7 but not by 3 number 28 minus 9 = 19. Adding these two disjoint counts gives 57 plus 19 = 76.

Equivalently, the count divisible by 3 or 7 but not both equals the sum of the individual counts less twice the overlap: 66 plus 28 minus 2 times 9 = 94 minus 18 = 76. The overlap is subtracted twice because the integers divisible by both must be removed from each individual count.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q48
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Units Digit via Higher Powers

What is the units digit of the positive integer n?

(1) The units digit of n² is 9.
(2) The units digit of n³ is 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The units digit of any power of an integer depends only on the units digit of the integer itself, so the analysis reduces to examining the possible units digits 0 through 9. To resolve the units digit of n, we require a condition that narrows these possibilities to a single value.

Let d denote the units digit of n, where d is one of 0, 1, 2, 3, 4, 5, 6, 7, 8, or 9. The units digit of n^2 equals the units digit of d^2, and the units digit of n^3 equals the units digit of d^3.

Statement (1): The units digit of n^2 is 9. We determine which values of d produce a square ending in 9. Computing d^2 for each digit gives units digits 0, 1, 4, 9, 6, 5, 6, 9, 4, and 1 for d = 0 through 9 respectively. The value 9 arises from both d = 3 (since 3^2 = 9) and d = 7 (since 7^2 = 49). Two distinct units digits remain possible, so statement (1) does not determine the units digit of n. Statement (1) alone is not sufficient.

Statement (2): The units digit of n^3 is 3. We determine which values of d produce a cube ending in 3. Computing d^3 for each digit yields: 0^3 = 0, 1^3 = 1, 2^3 = 8, 3^3 = 27, 4^3 = 64, 5^3 = 125, 6^3 = 216, 7^3 = 343, 8^3 = 512, and 9^3 = 729. The corresponding units digits are 0, 1, 8, 7, 4, 5, 6, 3, 2, and 9. The value 3 occurs for exactly one digit, d = 7. Because no other units digit produces a cube ending in 3, the units digit of n must be 7. Statement (2) alone is sufficient.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q49
**difficulty:** Hard
**type:** Problem Solving
**topic:** Sum of All Factors Formula

What is the sum of all positive factors of 2⁴ × 3²?

- A) 195
- B) 279
- C) 360
- D) 403
- E) 465

**answer:** D
**explanation:** The sum of all positive factors of a number written in prime-factored form is found by multiplying together, for each distinct prime, the sum of that prime's powers from the zero power up to its full exponent. In general, if a number equals p^a times q^b, then the sum of all its positive factors equals the product of the geometric sums (1 + p + p^2 + ... + p^a) and (1 + q + q^2 + ... + q^b). This works because every factor of the number is formed by choosing one power of p and one power of q, and expanding the product of the two bracketed sums generates each such combination exactly once.

Let N = 2^4 times 3^2. Here the prime 2 appears with exponent 4 and the prime 3 appears with exponent 2.

We form the geometric sum for the prime 2, taking every power from 2^0 through 2^4:
1 + 2 + 4 + 8 + 16 = 31.

We form the geometric sum for the prime 3, taking every power from 3^0 through 3^2:
1 + 3 + 9 = 13.

The sum of all positive factors of N is the product of these two sums:
31 times 13 = 403.

Equivalently, using the closed form (p^(a+1) - 1)/(p - 1) for each geometric series:
for the prime 2, (2^5 - 1)/(2 - 1) = 31/1 = 31;
for the prime 3, (3^3 - 1)/(3 - 1) = 26/2 = 13;
and 31 times 13 = 403.

The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q50
**difficulty:** Hard
**type:** Problem Solving
**topic:** Quadratic Equations and Prime Constraints

If p is a prime number and p² − p − 6 = 0, what is the value of p²?

- A) 4
- B) 9
- C) 25
- D) 49
- E) There is no prime that satisfies the equation.

**answer:** B
**explanation:** This problem combines a quadratic equation with a number-property constraint, so the method is to find every root of the equation algebraically and then keep only the root that satisfies the requirement that p be prime.

Let p denote the unknown, which the problem states is a prime number satisfying p² − p − 6 = 0. To factor the quadratic, we seek two numbers whose product is −6 and whose sum is −1; these numbers are −3 and 2. Thus the equation factors as (p − 3)(p + 2) = 0.

Setting each factor equal to zero gives the two roots. From p − 3 = 0 we obtain p = 3, and from p + 2 = 0 we obtain p = −2.

A prime number is by definition a positive integer greater than 1, so −2 cannot be prime. Therefore the only admissible value is p = 3, which is indeed prime. Squaring this value gives p² = 3² = 9.

The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q51
**difficulty:** Hard
**type:** Problem Solving
**topic:** Perfect Squares and Divisor Count Parity

How many integers from 1 to 100, inclusive, have an odd number of positive divisors?

- A) 8
- B) 9
- C) 10
- D) 11
- E) 12

**answer:** C
**explanation:** The governing principle is that the positive divisors of an integer can be organized into pairs, and the number of divisors is odd precisely when one such pair collapses into a single value.

Let n be a positive integer. For every positive divisor d of n, the quotient n/d is also a positive divisor of n. This associates the divisors of n in pairs of the form (d, n/d). Each such pairing accounts for two distinct divisors, except in the case where d and n/d are equal. The two members of a pair coincide when d = n/d, which is equivalent to d^2 = n, that is, when n is a perfect square and d is its square root. In that situation the square root is left unpaired, contributing a single divisor rather than a pair.

Consequently, the total number of positive divisors of n is even whenever every divisor is matched with a distinct partner, and it is odd exactly when n possesses an unpaired divisor. The latter occurs if and only if n is a perfect square. The task therefore reduces to counting the perfect squares between 1 and 100, inclusive.

We seek the integers k for which k^2 lies in the interval from 1 to 100. Since 1^2 = 1 and 10^2 = 100, the qualifying values of k are 1, 2, 3, 4, 5, 6, 7, 8, 9, and 10, yielding the perfect squares 1, 4, 9, 16, 25, 36, 49, 64, 81, and 100. Counting these values gives 10.

The correct answer is C.
**related_reading:** reading-quant-03-number-properties


---

## Q52
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even/Odd Properties

If a is an odd integer and b is an even integer, which of the following must be an even integer?

- A) a + b
- B) 3a^2 + 2b - 5
- C) ab + a
- D) 2a - b + 7
- E) a^2 - b - 2

**answer:** B
**explanation:** We evaluate the parity of each expression using a is odd and b is even. Since a is odd, a^2 is odd, so 3a^2 is odd. Since b is even, 2b is even, and 5 is odd; thus 3a^2 + 2b - 5 = (odd) + (even) - (odd) = even. A numerical check with a = 3 and b = 4 gives 27 + 8 - 5 = 30, which is even. Checking the others: a + b = odd + even = odd; ab + a = a(b + 1) = odd times odd = odd; 2a - b + 7 = even - even + odd = odd; a^2 - b - 2 = odd - even - even = odd. Only 3a^2 + 2b - 5 is guaranteed even. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q53
**difficulty:** Easy
**type:** Problem Solving
**topic:** Parity of a Product

If x and y are integers such that x + y is odd, which of the following must be even?

- A) x + 2y
- B) x^2 + y^2
- C) xy
- D) xy + x + y
- E) x - y

**answer:** C
**explanation:** Since x + y is odd, exactly one of x and y is even and the other is odd. The product of an even integer and any integer is even, so xy is even. Checking the others: x^2 + y^2 = (odd) + (even) = odd; x + 2y has the same parity as x, which is not fixed; xy + x + y = even + odd = odd; x - y has the same parity as x + y, which is odd. Only xy must be even. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q54
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Squares

What is the smallest positive integer n such that 252n is a perfect square?

- A) 28
- B) 14
- C) 21
- D) 7
- E) 63

**answer:** D
**explanation:** We factor 252 = 2^2 · 3^2 · 7. A perfect square requires every prime to appear to an even power. The factors 2 and 3 already have even exponents, but 7 appears to the first power. Multiplying by 7 makes the exponent of 7 even: 252 · 7 = 2^2 · 3^2 · 7^2 = (2 · 3 · 7)^2 = 42^2, a perfect square by its very structure. No smaller positive integer accomplishes this, since the deficiency lies entirely in the single factor of 7. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q55
**difficulty:** Medium
**type:** Problem Solving
**topic:** Integer Properties

How many even integers are there from 17 to 83, inclusive?

- A) 35
- B) 32
- C) 34
- D) 31
- E) 33

**answer:** E
**explanation:** The even integers in this range run from 18 to 82. We count them with the formula (last - first)/(common difference) + 1 = (82 - 18)/2 + 1 = 64/2 + 1 = 32 + 1 = 33. The distractor 32 results from omitting the +1 (the off-by-one error), and 34 from incorrectly including an extra endpoint. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q56
**difficulty:** Medium
**type:** Problem Solving
**topic:** Even/Odd Properties

If a, b, and c are three consecutive integers with a the smallest, for which values of a is a^2 + b^2 + c^2 odd?

- A) When a is even
- B) When a is odd
- C) For all integers a
- D) For no integer a
- E) Only when a is a multiple of 3

**answer:** A
**explanation:** With consecutive integers a, b = a+1, c = a+2, the parities of a and c match each other while b has the opposite parity. If a is even, then a^2 and c^2 are even while b^2 is odd, so the sum is even + odd + even = odd. If a is odd, then a^2 and c^2 are odd while b^2 is even, giving odd + even + odd = even. Thus a^2 + b^2 + c^2 is odd precisely when a is even. A numerical check confirms this: for a = 2 the sum is 4 + 9 + 16 = 29 (odd), and for a = 3 the sum is 9 + 16 + 25 = 50 (even). The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q57
**difficulty:** Medium
**type:** Problem Solving
**topic:** Parity of a Product

The product of three consecutive even integers is always divisible by each value in some set. What is the greatest of the following values that always divides such a product?

- A) 32
- B) 48
- C) 24
- D) 16
- E) 96

**answer:** B
**explanation:** Three consecutive even integers can be written 2k, 2k + 2, 2k + 4 = 2k · 2(k+1) · 2(k+2) = 8 · k(k+1)(k+2). The product k(k+1)(k+2) is a product of three consecutive integers, which is always divisible by 3! = 6. Therefore the full product is always divisible by 8 · 6 = 48. The values 24 and 16 also always divide the product, but 48 is larger, so among guaranteed divisors 48 is the greatest. The value 96 is not guaranteed (for example, 2 · 4 · 6 = 48, which is not divisible by 96), and 32 is not guaranteed either. Hence the greatest listed value that always divides the product is 48. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q58
**difficulty:** Hard
**type:** Problem Solving
**topic:** Perfect Squares

Let K = 2^4 · 3^2 · 5^3 · 7. What is the smallest positive integer m such that Km is a perfect square?

- A) 7
- B) 5
- C) 35
- D) 105
- E) 175

**answer:** C
**explanation:** For Km to be a perfect square, every prime in its factorization must occur to an even power. In K, the exponents of 2 (which is 4) and 3 (which is 2) are already even. The exponent of 5 is 3, which is odd, so we need one more factor of 5; the exponent of 7 is 1, which is odd, so we need one more factor of 7. The minimal m is therefore 5 · 7 = 35, giving Km = 2^4 · 3^2 · 5^4 · 7^2 = (2^2 · 3 · 5^2 · 7)^2. Choosing only 5 or only 7 leaves the other prime at an odd power, so neither alone suffices. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q59
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

How many perfect squares lie between 50 and 500, inclusive?

- A) 13
- B) 14
- C) 16
- D) 15
- E) 17

**answer:** D
**explanation:** A perfect square n^2 lies in the interval when 50 ≤ n^2 ≤ 500. We bracket each end with known squares. At the low end, 7^2 = 49 falls short of 50 while 8^2 = 64 qualifies, so the smallest value is n = 8. At the high end, 22^2 = 484 fits within 500 while 23^2 = 529 overshoots, so the largest value is n = 22. The integer values are therefore n = 8 through n = 22, and the count is 22 - 8 + 1 = 15. The distractor 14 arises from dropping one endpoint of the n-range. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q60
**difficulty:** Hard
**type:** Problem Solving
**topic:** Integer Properties

What is the greatest power of 2 that divides the product 2 · 4 · 6 · 8 · 10?

- A) 2^9
- B) 2^5
- C) 2^7
- D) 2^6
- E) 2^8

**answer:** E
**explanation:** We factor out a 2 from each of the five even factors: 2 · 4 · 6 · 8 · 10 = 2^5 · (1 · 2 · 3 · 4 · 5) = 2^5 · 120. Now 120 = 2^3 · 15, contributing three more factors of 2. The total power of 2 is therefore 2^(5+3) = 2^8, since 15 is odd and contributes no additional factor of 2. The distractor 2^5 comes from counting only the explicit factor from each even number while forgetting the extra factors of 2 hidden inside 4, 8, and 10. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q61
**difficulty:** Easy
**type:** Problem Solving
**topic:** Remainder

What is the units digit of 7⁴⁵ + 4²²?

- A) 1
- B) 2
- C) 3
- D) 7
- E) 9

**answer:** C
**explanation:** The units digit of a power depends only on the units digit of its base, and the units digits of successive powers repeat in a fixed cycle. To find the units digit of a sum, we find the units digit of each term and then add those, keeping only the units digit of the total. The units digits of successive powers of 7 form the repeating cycle 7, 9, 3, 1, which has length 4; the position of an exponent within this cycle is the remainder when the exponent is divided by 4, with a remainder of 0 corresponding to the fourth entry. Since 45 = 4 × 11 + 1, the remainder is 1, so 7⁴⁵ has the same units digit as the first cycle entry, which is 7. The units digits of successive powers of 4 form the shorter cycle 4, 6 of length 2: odd exponents give 4 and even exponents give 6, so because 22 is even, 4²² has units digit 6. Adding the two units digits gives 7 + 6 = 13, whose units digit is 3, so the units digit of the entire sum is 3. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q62
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

How many prime numbers are there between 50 and 70?

- A) 4
- B) 3
- C) 5
- D) 6
- E) 7

**answer:** A
**explanation:** A prime number is an integer greater than 1 whose only positive divisors are 1 and itself, so to count the primes strictly between 50 and 70 we test each candidate integer against this definition. Every even integer greater than 2 is divisible by 2 and is therefore not prime, so we need only consider the odd integers 51, 53, 55, 57, 59, 61, 63, 65, 67, and 69. We eliminate the composites: 51 = 3 × 17, 55 = 5 × 11, 57 = 3 × 19, 63 = 3 × 21, 65 = 5 × 13, and 69 = 3 × 23. The remaining odd integers are 53, 59, 61, and 67, and each is divisible by none of 2, 3, 5, or 7; since any composite number below 71 must have a prime factor of at most 7 (a factor exceeding 7 would force a cofactor of at least 9, giving a product of at least 81), each of these four integers is prime. Thus the primes between 50 and 70 are 53, 59, 61, and 67, for a total of 4. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q63
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factors

How many positive even factors does 96 have?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 10

**answer:** E
**explanation:** A factor of an integer is even precisely when it contains at least one factor of 2, so the cleanest count comes from the prime factorization. We have 96 = 2⁵ × 3, so any positive factor of 96 can be written as 2ᵃ × 3ᵇ, where the exponent a ranges over 0 through 5 and the exponent b ranges over 0 through 1. A factor is even exactly when a is at least 1, so the admissible values of a are 1, 2, 3, 4, and 5, giving 5 choices, while b may be 0 or 1, giving 2 choices. Because the two exponents are chosen independently, the number of even factors is the product 5 × 2 = 10. As a check, the total number of factors is (5 + 1)(1 + 1) = 12, and exactly two of them are odd (namely 1 and 3, where a = 0), so the even factors number 12 − 2 = 10, confirming the result. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q64
**difficulty:** Easy
**type:** Problem Solving
**topic:** Remainder

When the positive integer n is divided by 6, the remainder is 4. What is the remainder when 5n + 3 is divided by 6?

- A) 1
- B) 2
- C) 3
- D) 5
- E) 0

**answer:** D
**explanation:** Any integer that leaves a fixed remainder upon division by a divisor can be written as (divisor times an integer) plus that remainder, and remainders are preserved under the arithmetic performed on such expressions. Since dividing n by 6 leaves a remainder of 4, we may write n = 6k + 4 for some non-negative integer k. Substituting into the target expression gives 5n + 3 = 5(6k + 4) + 3 = 30k + 20 + 3 = 30k + 23. The term 30k is a multiple of 6, so we separate the largest multiple of 6 not exceeding 23, writing 23 = 18 + 5, which gives 30k + 23 = 6(5k + 3) + 5. Since 6(5k + 3) is a multiple of 6 and 0 ≤ 5 < 6, the remainder when 5n + 3 is divided by 6 is 5. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q65
**difficulty:** Easy
**type:** Problem Solving
**topic:** Perfect Square

Which of the following is a perfect square?

- A) 196
- B) 150
- C) 200
- D) 250
- E) 120

**answer:** A
**explanation:** A perfect square is an integer equal to the square of an integer, so we test each option by checking whether it is the square of a whole number. We have 14² = 196, so 196 is a perfect square. The remaining values are not: 150 lies strictly between 12² = 144 and 13² = 169, so it is not a square; 200 lies between 14² = 196 and 15² = 225, so it is not a square; 250 lies between 15² = 225 and 16² = 256, so it is not a square; and 120 lies between 10² = 100 and 11² = 121, so it is not a square. Only 196 is the square of an integer. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q66
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Square

What is the smallest positive integer m such that 540m is a perfect square?

- A) 5
- B) 15
- C) 30
- D) 45
- E) 60

**answer:** B
**explanation:** An integer is a perfect square if and only if every prime in its factorization appears to an even power, so to make 540m a perfect square we must supply exactly the prime factors needed to raise every odd exponent up to the next even number. First we factor the given number: 540 = 2² × 3³ × 5¹. The exponent of 2 is 2, which is already even and needs no adjustment. The exponent of 3 is 3, which is odd, so we need one more factor of 3 to make it 3⁴. The exponent of 5 is 1, which is odd, so we need one more factor of 5 to make it 5². Therefore the smallest multiplier is m = 3 × 5 = 15, and no smaller positive integer can correct both odd exponents. As a check, 540 × 15 = 8100 = 90², confirming that the product is a perfect square. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q67
**difficulty:** Medium
**type:** Problem Solving
**topic:** Factors

What is the greatest common factor of 144 and 360?

- A) 12
- B) 24
- C) 36
- D) 48
- E) 72

**answer:** E
**explanation:** The greatest common factor of two integers is found by writing each as a product of primes, then taking each shared prime raised to the smaller of its two exponents and multiplying these together. We have 144 = 2⁴ × 3², since 144 = 16 × 9, and 360 = 2³ × 3² × 5, since 360 = 8 × 45 = 8 × 9 × 5. The primes common to both factorizations are 2 and 3. For the prime 2, the smaller exponent is 3 (it appears as 2⁴ in 144 and 2³ in 360), so we take 2³. For the prime 3, the exponent is 2 in both, so we take 3². The prime 5 appears only in 360, so it is excluded. The greatest common factor is therefore 2³ × 3² = 8 × 9 = 72. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q68
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer x divisible by 12?

(1) x is divisible by 6.
(2) x is divisible by 4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Because 12 = 2² × 3, a positive integer is divisible by 12 if and only if it contains at least two factors of 2 and at least one factor of 3, and in a yes/no data sufficiency question a statement is sufficient only when it forces a single, consistent answer. Consider statement (1): x is divisible by 6 = 2 × 3, which guarantees one factor of 2 and one factor of 3 but not the second factor of 2. Testing values, x = 6 is divisible by 6 yet not by 12 (answer no), while x = 12 is divisible by 6 and by 12 (answer yes), so statement (1) alone is not sufficient. Consider statement (2): x is divisible by 4 = 2², which guarantees two factors of 2 but says nothing about a factor of 3; here x = 4 is divisible by 4 yet not by 12 (answer no), while x = 12 is divisible by 4 and by 12 (answer yes), so statement (2) alone is not sufficient. Taking the statements together, x carries the factor of 3 from statement (1) and the factor 2² from statement (2), so x is divisible by 2² × 3 = 12, which gives a definite yes; the two statements together are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q69
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiples

What is the sum of the first 10 positive multiples of 4?

- A) 200
- B) 220
- C) 240
- D) 180
- E) 260

**answer:** B
**explanation:** The first 10 positive multiples of 4 are 4, 8, 12, and so on up to 40, and each can be written as 4 times one of the integers from 1 to 10. Factoring the common 4 out of the sum gives 4 × (1 + 2 + 3 + ... + 10). The sum of the first 10 positive integers is found from the formula for the sum of consecutive integers, n(n + 1)/2, which gives 10 × 11 / 2 = 55. Therefore the total is 4 × 55 = 220. As a check, the multiples form an arithmetic sequence with 10 terms whose average is the mean of the first and last terms, (4 + 40)/2 = 22, so the sum equals 10 × 22 = 220, confirming the result. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q70
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors

If n = 2⁴ × 3² × 7, how many positive factors of n are odd?

- A) 6
- B) 5
- C) 8
- D) 10
- E) 12

**answer:** A
**explanation:** A factor of n is odd precisely when it contains no factor of 2, so the odd factors of n are exactly the factors built from the odd prime parts of n while the power of 2 is fixed at 2⁰. Writing any factor as 2ᵃ × 3ᵇ × 7ᶜ with 0 ≤ a ≤ 4, 0 ≤ b ≤ 2, and 0 ≤ c ≤ 1, oddness forces a = 0, leaving the exponents b and c free. The exponent b may be 0, 1, or 2, giving 3 choices, and the exponent c may be 0 or 1, giving 2 choices. Since the two exponents are chosen independently, the number of odd factors is 3 × 2 = 6. Equivalently, the odd part of n is 3² × 7, whose factor count is (2 + 1)(1 + 1) = 6, which matches. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q71
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Even Odd Parity

If n is a positive integer, is n even?

(1) n² is even.
(2) 3n is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**explanation:** The governing parity rules are that a product of integers is odd only when every factor is odd, and consequently a product is even exactly when at least one factor is even; in particular, the square of an odd integer is odd and the square of an even integer is even. Consider statement (1): n² is even. If n were odd, then n² = n × n would be a product of two odd integers and would be odd, contradicting the statement, so n must be even. This forces a definite yes, so statement (1) alone is sufficient. Consider statement (2): 3n is even. Since 3 is odd, the product 3n is even only when n is even, because if n were odd the product of two odd integers would be odd. This also forces a definite yes, so statement (2) alone is sufficient. Because each statement independently determines that n is even, each statement alone is sufficient. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q72
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainder

If n is an integer with 10 < n < 30, what is the value of n?

(1) When n is divided by 4, the remainder is 1.
(2) When n is divided by 7, the remainder is 6.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Each division condition restricts n to a list of values inside the range 10 < n < 30, and a statement is sufficient only when it narrows that list to a single value. Statement (1) says n leaves a remainder of 1 when divided by 4, so n is of the form 4k + 1; within the range these values are 13, 17, 21, 25, and 29, which is more than one possibility, so statement (1) alone is not sufficient. Statement (2) says n leaves a remainder of 6 when divided by 7, so n is of the form 7m + 6; within the range these values are 13, 20, and 27, again more than one possibility, so statement (2) alone is not sufficient. Taking the statements together, n must appear in both lists, and the only value common to {13, 17, 21, 25, 29} and {13, 20, 27} is 13. The two statements together pin down n = 13 uniquely, so they are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q73
**difficulty:** Easy
**type:** Problem Solving
**topic:** Primes

What is the sum of the two smallest prime numbers that are greater than 30?

- A) 64
- B) 66
- C) 68
- D) 70
- E) 72

**answer:** C
**explanation:** A prime number is an integer greater than 1 whose only positive divisors are 1 and itself, so we identify the two smallest primes that exceed 30 by testing the integers above 30 in increasing order. The integer 31 is not divisible by any of 2, 3, or 5, and since any composite number less than 49 must have a prime factor of at most 5 (a factor of at least 7 would require a cofactor of at least 7, giving a product of at least 49), 31 is prime. The next integer, 32, is even and therefore composite; 33 = 3 times 11 is composite; 34 and 36 are even; 35 = 5 times 7 is composite; but 37 is divisible by none of 2, 3, or 5, so 37 is prime. Thus the two smallest primes greater than 30 are 31 and 37, and their sum is 31 + 37 = 68. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q74
**difficulty:** Easy
**type:** Problem Solving
**topic:** Multiples

What is the smallest positive integer that is a multiple of both 8 and 10?

- A) 18
- B) 40
- C) 80
- D) 20
- E) 16

**answer:** B
**explanation:** The smallest positive integer that is a multiple of two given numbers is their least common multiple, which is found by writing each number as a product of primes and then taking the highest power of each prime that appears in either factorization. We have 8 = 2 cubed and 10 = 2 times 5, so the distinct primes are 2 and 5. The highest power of 2 appearing is 2 cubed (from 8), and the highest power of 5 appearing is 5 to the first power (from 10), so the least common multiple is 2 cubed times 5 = 8 times 5 = 40. The distractor 80 is a common multiple of 8 and 10 but not the smallest, while 20 is a multiple of 10 yet not of 8. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q75
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even Odd Parity

If p is an odd integer and q is an even integer, which of the following must be even?

- A) 2p + q + 1
- B) pq + 1
- C) p + q
- D) 3p + q
- E) p² + q − 1

**answer:** E
**explanation:** The parity of each expression is determined by the rules that the square of an odd integer is odd, the product of any integer with an even integer is even, and a sum or difference is even only when it combines an even number of odd terms. Since p is odd, p² is odd; since q is even, q is even; and subtracting the odd integer 1 from the sum p² + q gives odd + even − odd = even, so option E is always even. Each of the others is always odd: in A, 2p and q are even while +1 is odd, giving odd; in B, pq is even so pq + 1 is odd; in C, odd + even is odd; and in D, 3p is odd and q is even, giving odd. A check with p = 3 and q = 4 confirms E: 9 + 4 − 1 = 12, which is even. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q76
**difficulty:** Easy
**type:** Problem Solving
**topic:** Factors

How many positive factors does the number 50 have?

- A) 3
- B) 4
- C) 5
- D) 6
- E) 8

**answer:** D
**explanation:** The number of positive factors of an integer is found from its prime factorization: if the integer is written as a product of prime powers, the total number of positive factors equals the product of one more than each exponent. We factor 50 = 2 times 25 = 2 times 5², so the prime factorization is 2¹ times 5², with exponents 1 and 2. Applying the counting principle gives (1 + 1)(2 + 1) = 2 times 3 = 6. This is confirmed by listing every factor of 50: 1, 2, 5, 10, 25, and 50, which is exactly 6 factors. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q77
**difficulty:** Medium
**type:** Problem Solving
**topic:** Remainder

When the positive integer n is divided by 9, the remainder is 5. What is the remainder when 4n + 7 is divided by 9?

- A) 0
- B) 2
- C) 4
- D) 6
- E) 7

**answer:** A
**explanation:** Any integer that leaves a fixed remainder upon division by a divisor can be written as (divisor times an integer) plus that remainder, and remainders are preserved through the arithmetic performed on such an expression. Since dividing n by 9 leaves a remainder of 5, we may write n = 9k + 5 for some non-negative integer k. Substituting into the target expression gives 4n + 7 = 4(9k + 5) + 7 = 36k + 20 + 7 = 36k + 27. Both 36k and 27 are multiples of 9, since 36k = 9(4k) and 27 = 9 times 3, so we can write 4n + 7 = 9(4k + 3), which is exactly divisible by 9. Therefore the remainder when 4n + 7 is divided by 9 is 0. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q78
**difficulty:** Medium
**type:** Problem Solving
**topic:** Perfect Square

What is the smallest positive integer n such that 75n is a perfect square?

- A) 15
- B) 2
- C) 5
- D) 3
- E) 6

**answer:** D
**explanation:** An integer is a perfect square if and only if every prime in its factorization appears to an even power, so to turn 75n into a perfect square we must supply exactly the prime factors needed to raise each odd exponent to the next even value. We first factor the given number: 75 = 3 times 25 = 3¹ times 5². The exponent of 5 is 2, which is already even and needs no adjustment, but the exponent of 3 is 1, which is odd, so we need one additional factor of 3 to make it 3². The smallest such multiplier is therefore n = 3, giving 75 times 3 = 225 = 3² times 5² = 15², a perfect square. No smaller positive integer corrects the odd exponent of 3, so 3 is minimal. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q79
**difficulty:** Medium
**type:** Problem Solving
**topic:** Divisibility

The three-digit number 5A4, where A represents a single digit, is divisible by 6. How many values of A are possible?

- A) 2
- B) 3
- C) 4
- D) 5
- E) 6

**answer:** C
**explanation:** A positive integer is divisible by 6 exactly when it is divisible by both 2 and 3, since 6 = 2 times 3 and 2 and 3 share no common factor. The number 5A4 ends in the digit 4, which is even, so the number is divisible by 2 for every choice of A; the requirement therefore reduces to divisibility by 3. An integer is divisible by 3 if and only if the sum of its digits is divisible by 3, and the digit sum here is 5 + A + 4 = 9 + A. Because 9 is already a multiple of 3, the quantity 9 + A is a multiple of 3 precisely when A itself is a multiple of 3, and the single digits satisfying this are A = 0, 3, 6, and 9. That gives 4 possible values of A. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q80
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Even Odd Parity

If n is an integer, is n even?

(1) n + 5 is odd.
(2) n² + n is divisible by 4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**explanation:** The question asks for a definite yes-or-no answer to whether the integer n is even, so a statement is sufficient only when it forces a single parity for n. Consider statement (1): n + 5 is odd. Since 5 is odd, and a sum is odd only when it combines one even and one odd term, n + 5 can be odd only if n is even; if n were odd, then n + 5 would be the sum of two odd integers and hence even. Thus statement (1) forces n to be even, giving a definite yes, and statement (1) alone is sufficient. Consider statement (2): n² + n = n(n + 1) is divisible by 4. The product of two consecutive integers is always even, but its divisibility by 4 does not fix the parity of n: for n = 4 the product is 4 times 5 = 20, which is divisible by 4 and n is even, whereas for n = 3 the product is 3 times 4 = 12, which is also divisible by 4 yet n is odd. Because statement (2) permits both an even and an odd value of n, it does not determine the answer and is not sufficient. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q81
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multiples

How many multiples of 6 are there from 50 to 200, inclusive?

- A) 24
- B) 23
- C) 26
- D) 27
- E) 25

**answer:** E
**explanation:** To count the multiples of a fixed integer within a range, we identify the smallest and largest multiples that fall inside the range and then count how many multiples lie between them inclusive; because the multiples are evenly spaced, this count equals the difference of their position indices plus one. The smallest multiple of 6 that is at least 50 is found by noting that 6 times 8 = 48 falls short while 6 times 9 = 54 qualifies, so the first multiple corresponds to the index 9. The largest multiple of 6 that is at most 200 is found by noting that 6 times 33 = 198 qualifies while 6 times 34 = 204 exceeds 200, so the last multiple corresponds to the index 33. The number of integer indices from 9 to 33 inclusive is 33 − 9 + 1 = 25, so there are 25 multiples of 6 in the range. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q82
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors

How many positive factors of 1,800 are perfect squares?

- A) 6
- B) 8
- C) 4
- D) 9
- E) 12

**answer:** B
**explanation:** A positive integer is a perfect square if and only if every prime in its factorization appears to an even power, and since every factor of 1,800 is built only from the primes that appear in 1,800, we may count the perfect-square factors prime by prime. First we factor the number: 1,800 = 8 times 225 = 2³ times 3² times 5². Any factor has the form 2^a times 3^b times 5^c, where 0 ≤ a ≤ 3, 0 ≤ b ≤ 2, and 0 ≤ c ≤ 2, and the factor is a perfect square exactly when a, b, and c are all even. The even values of a within 0 to 3 are 0 and 2, giving 2 choices; the even values of b within 0 to 2 are 0 and 2, giving 2 choices; and the even values of c within 0 to 2 are 0 and 2, giving 2 choices. Because the exponents are chosen independently, the number of perfect-square factors is 2 times 2 times 2 = 8. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q83
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer n divisible by 15?

(1) n is divisible by 10.
(2) n² is divisible by 225.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** Because 15 = 3 times 5, a positive integer is divisible by 15 if and only if it contains at least one factor of 3 and at least one factor of 5; the question is therefore whether each statement forces both of these factors to be present. A key fact for the second statement is that the exponent of any prime in n² is exactly twice its exponent in n, so that exponent is always even. Consider statement (1): n is divisible by 10 = 2 times 5. This guarantees a factor of 5 but says nothing about a factor of 3, so the answer can vary; for instance n = 10 is not divisible by 15 (answer no), while n = 30 is divisible by 15 (answer yes). Statement (1) alone is therefore not sufficient. Consider statement (2): n² is divisible by 225 = 3² times 5². Thus the exponent of 3 in n² is at least 2, which forces the exponent of 3 in n to be at least 1, and likewise the exponent of 5 in n² is at least 2, which forces the exponent of 5 in n to be at least 1. Hence n contains both a factor of 3 and a factor of 5, so n is divisible by 15, giving a definite yes. Statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q84
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Remainder

When the positive integer n is divided by 12, what is the remainder?

(1) When n is divided by 6, the remainder is 5.
(2) When n is divided by 4, the remainder is 3.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Each division condition restricts the remainder of n upon division by 12 to a short list of possibilities, and a statement is sufficient only when it narrows that list to a single value; this works because 12 is a common multiple of both 6 and 4, so a remainder modulo 12 is consistent with at most one or two remainders modulo each smaller divisor. Consider statement (1): n leaves remainder 5 when divided by 6, so n has the form 6k + 5; reducing such values modulo 12 yields 5 when k is even and 11 when k is odd, so n modulo 12 is either 5 or 11, which is not unique, and statement (1) alone is not sufficient. Consider statement (2): n leaves remainder 3 when divided by 4, so n has the form 4m + 3; reducing modulo 12 yields the three values 3, 7, and 11, which is not unique, and statement (2) alone is not sufficient. Taking the statements together, the remainder modulo 12 must lie in both lists, and the only value common to {5, 11} and {3, 7, 11} is 11. The two statements together fix the remainder at 11, so they are sufficient while neither alone is. A check confirms this: 11 leaves remainder 5 when divided by 6 and remainder 3 when divided by 4. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q85
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 7¹²³ × 4⁵⁷?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 9

**answer:** A
**explanation:** The units digit of a product depends only on the units digits of its factors, and the units digits of successive powers of a fixed base repeat in a cycle, so we find the units digit of each power separately and then multiply, keeping only the units digit of the result. The units digits of the powers of 7 form the repeating cycle 7, 9, 3, 1, which has length 4; the position within this cycle for exponent n is given by the remainder when n is divided by 4, with a remainder of 0 corresponding to the fourth position. Since 123 = 4 times 30 plus 3, the remainder is 3, and the third entry of the cycle 7, 9, 3, 1 is 3, so 7¹²³ ends in 3. The units digits of the powers of 4 form the shorter repeating cycle 4, 6, which has length 2: odd exponents give 4 and even exponents give 6. Since 57 is odd, 4⁵⁷ ends in 4. Multiplying the two units digits gives 3 times 4 = 12, whose units digit is 2, so the units digit of the entire product is 2. The correct answer is A.
**related_reading:** reading-quant-03-number-properties

---

## Q86
**difficulty:** Medium
**type:** Problem Solving
**topic:** GCD and LCM

Two positive integers have a greatest common factor of 14 and a least common multiple of 420. If one of the integers is 70, what is the sum of the two integers?

- A) 84
- B) 98
- C) 140
- D) 154
- E) 168

**answer:** D
**explanation:** The governing principle is the identity that, for any two positive integers, the product of their greatest common factor and their least common multiple equals the product of the integers themselves. Let the two integers be a and b. The identity states that GCF(a, b) times LCM(a, b) equals a times b, so substituting the given values yields 14 times 420 = a times b, that is, a times b = 5,880. We are told that one of the integers is 70, so we set a = 70 and solve for the other integer: b = 5,880 ÷ 70 = 84. Before summing, we verify that the pair 70 and 84 actually has the stated greatest common factor and least common multiple. Factoring gives 70 = 2 times 5 times 7 and 84 = 2² times 3 times 7; the greatest common factor takes the smaller power of each shared prime, namely 2 times 7 = 14, and the least common multiple takes the greater power of each prime, namely 2² times 3 times 5 times 7 = 420. Both conditions hold, so the second integer is indeed 84, and the sum of the two integers is 70 + 84 = 154. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q87
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Remainders

If p is a prime number greater than 3, what is the remainder when p² is divided by 12?

- A) 0
- B) 1
- C) 3
- D) 5
- E) 7

**answer:** B
**explanation:** The governing idea is that any prime greater than 3 avoids the factors 2 and 3, which sharply constrains its residue modulo small numbers and lets us reason about p² modulo 12 in general rather than testing values blindly. Because p is prime and greater than 3, p is divisible by neither 2 nor 3, so p is odd and is not a multiple of 3. An odd integer can be written as p = 2k + 1, and its square is p² = 4k² + 4k + 1 = 4k(k + 1) + 1. Since k and k + 1 are consecutive integers, one of them is even, so the product k(k + 1) is even, which makes 4k(k + 1) a multiple of 8; in particular it is a multiple of 4. Thus p² leaves a remainder of 1 upon division by 4. Considering divisibility by 3, because p is not a multiple of 3 it is congruent to 1 or 2 modulo 3, and in either case p² is congruent to 1 modulo 3, since 1² = 1 and 2² = 4 leaves remainder 1. Therefore p² leaves remainder 1 upon division by both 4 and 3; since 4 and 3 are coprime and their product is 12, p² leaves remainder 1 upon division by 12. A check confirms this: for p = 5, p² = 25 = 12 times 2 + 1; for p = 7, p² = 49 = 12 times 4 + 1; and for p = 11, p² = 121 = 12 times 10 + 1. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q88
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders

When a positive integer n is divided by 6, the remainder is 4, and when n is divided by 10, the remainder is 8. What is the smallest possible value of n?

- A) 22
- B) 28
- C) 34
- D) 52
- E) 58

**answer:** B
**explanation:** This problem describes an integer through two division conditions, each expressible as a quotient-plus-remainder equation; the efficient method is to encode one condition algebraically and substitute it into the other rather than testing values blindly. Let n be the positive integer. The condition that n leaves a remainder of 4 when divided by 6 means n = 6a + 4 for some non-negative integer a. We impose the second condition by reducing n = 6a + 4 modulo 10 and requiring the result to be 8. We need 6a + 4 to leave a remainder of 8 upon division by 10, which means 6a must leave a remainder of 4 upon division by 10. Testing successive values of a, we find that a = 0 gives 0, a = 1 gives 6, a = 2 gives 12 (remainder 2), a = 3 gives 18 (remainder 8), and a = 4 gives 24 (remainder 4); thus the smallest qualifying value is a = 4. Substituting a = 4 into n = 6a + 4 gives n = 24 + 4 = 28. We verify both original conditions: dividing 28 by 6 gives quotient 4 and remainder 4, since 28 = 6 times 4 + 4, and dividing 28 by 10 gives quotient 2 and remainder 8, since 28 = 10 times 2 + 8. Because a = 4 is the smallest qualifying value, n = 28 is the smallest possible value of n. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q89
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors and Multiples

How many positive factors of 5,400 are multiples of 6?

- A) 18
- B) 24
- C) 27
- D) 30
- E) 36

**answer:** C
**explanation:** Every positive factor of a number is built from the same primes that appear in that number, each taken to an exponent no larger than its exponent in the number; a factor is a multiple of 6 = 2 times 3 exactly when it contains at least one factor of 2 and at least one factor of 3. We first factor the number: 5,400 = 54 times 100 = (2 times 3³) times (2² times 5²) = 2³ times 3³ times 5². Any factor has the form 2^a times 3^b times 5^c, where 0 ≤ a ≤ 3, 0 ≤ b ≤ 3, and 0 ≤ c ≤ 2. For the factor to be a multiple of 6, we require a ≥ 1 and b ≥ 1, while c is unrestricted. Counting the admissible exponents: a may be 1, 2, or 3, giving 3 choices; b may be 1, 2, or 3, giving 3 choices; and c may be 0, 1, or 2, giving 3 choices. Because the exponents are chosen independently, the number of factors that are multiples of 6 is 3 times 3 times 3 = 27. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q90
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Even/Odd Arithmetic

If a and b are integers, is a + b even?

(1) a²b is even.
(2) a − b is even.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** B
**explanation:** The question asks for a definite yes-or-no answer to whether a + b is even, and the governing parity rules are that a sum is even exactly when its two terms share the same parity, a product is even exactly when at least one factor is even, and a square has the same parity as its base. Consider statement (1): a²b is even, so at least one of a² and b is even, which means at least one of a and b is even. This does not fix the parity of the sum. If a = 2 and b = 4, both are even, a²b = 16 is even, and a + b = 6 is even, giving the answer yes; but if a = 2 and b = 3, then a²b = 12 is even while a + b = 5 is odd, giving the answer no. Because statement (1) permits both outcomes, it is not sufficient. Consider statement (2): a − b is even. A difference of two integers is even precisely when the two integers share the same parity, so a and b are either both even or both odd. In either case their sum a + b combines two terms of the same parity and is therefore even, giving the definite answer yes. Statement (2) alone is sufficient. The correct answer is B.
**related_reading:** reading-quant-03-number-properties

---

## Q91
**difficulty:** Medium
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 13¹⁷ + 18²²?

- A) 1
- B) 3
- C) 5
- D) 7
- E) 9

**answer:** D
**explanation:** The units digit of a power depends only on the units digit of the base, and the units digits of successive powers repeat in a cycle, so we find the units digit of each term separately and then add, keeping only the units digit of the sum. For 13¹⁷, only the base's units digit 3 matters, and the powers of 3 cycle through units digits 3, 9, 7, 1 with length 4; the position is the remainder when the exponent is divided by 4, with a remainder of 0 meaning the fourth position. Since 17 = 4 times 4 + 1, the remainder is 1, and the first entry of the cycle is 3, so 13¹⁷ ends in 3. For 18²², only the units digit 8 matters, and the powers of 8 cycle through units digits 8, 4, 2, 6 with length 4. Since 22 = 4 times 5 + 2, the remainder is 2, and the second entry of the cycle is 4, so 18²² ends in 4. Adding the two units digits gives 3 + 4 = 7, whose units digit is 7, so the units digit of the entire sum is 7. The correct answer is D.
**related_reading:** reading-quant-03-number-properties

---

## Q92
**difficulty:** Hard
**type:** Problem Solving
**topic:** GCD and LCM

How many unordered pairs of positive integers have a greatest common factor of 9 and a least common multiple of 270?

- A) 2
- B) 3
- C) 4
- D) 6
- E) 8

**answer:** C
**explanation:** When two positive integers share a greatest common factor g, each can be written as g times a smaller factor, and those smaller factors must be coprime; their least common multiple is then g times the product of the coprime factors, so counting the valid pairs reduces to counting coprime factorizations of a single number. Let the two integers be 9a and 9b, where a and b are positive integers with greatest common factor 1, since 9 is their greatest common factor. The least common multiple of 9a and 9b is 9 times a times b, and this must equal 270, so a times b = 270 ÷ 9 = 30. We must therefore count the unordered pairs of coprime positive integers whose product is 30. Factoring gives 30 = 2 times 3 times 5, a product of three distinct primes, and a coprime factorization assigns each prime entirely to one member of the pair. The unordered coprime pairs with product 30 are (1, 30), (2, 15), (3, 10), and (5, 6); each pair consists of coprime numbers, and there are 4 of them. These correspond to the integer pairs (9, 270), (18, 135), (27, 90), and (45, 54), and a check confirms that each has greatest common factor 9 and least common multiple 270. Hence there are 4 such unordered pairs. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q93
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders

What is the smallest integer greater than 1 that leaves a remainder of 3 when divided by 5, a remainder of 4 when divided by 6, and a remainder of 5 when divided by 7?

- A) 103
- B) 138
- C) 173
- D) 188
- E) 208

**answer:** E
**explanation:** The efficient route is to notice that each remainder is exactly two less than its divisor: 3 = 5 − 2, 4 = 6 − 2, and 5 = 7 − 2. Translating the three conditions into congruences gives n ≡ 3 (mod 5), n ≡ 4 (mod 6), and n ≡ 5 (mod 7), which can be rewritten uniformly as n ≡ −2 modulo each of 5, 6, and 7. A number that is congruent to −2 modulo 5, modulo 6, and modulo 7 simultaneously is congruent to −2 modulo their least common multiple. Since 5, 6, and 7 have least common multiple equal to 5 × 6 × 7 = 210 (the pairwise common factors do not reduce it, because 5 and 7 are prime and 6 = 2 × 3 shares no factor with either), we have n ≡ −2 (mod 210), so n = 210k − 2 for some integer k. The smallest such value greater than 1 occurs at k = 1, giving n = 210 − 2 = 208. As a check, 208 = 5 × 41 + 3, 208 = 6 × 34 + 4, and 208 = 7 × 29 + 5, so all three remainder conditions hold. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q94
**difficulty:** Hard
**type:** Problem Solving
**topic:** Units Digit Patterns

What is the units digit of 24¹⁷ × 33²¹ × 17¹³?

- A) 0
- B) 2
- C) 4
- D) 6
- E) 8

**answer:** C
**explanation:** The units digit of a product depends only on the units digits of its factors, and the units digit of each power depends only on the units digit of its base, whose powers repeat in a fixed cycle. For 24¹⁷ only the units digit 4 matters, and powers of 4 cycle through units digits 4, 6 with length 2 (odd exponents end in 4, even in 6); since 17 is odd, 24¹⁷ ends in 4. For 33²¹ only the units digit 3 matters, and powers of 3 cycle through 3, 9, 7, 1 with length 4; since 21 = 4 × 5 + 1, the remainder is 1, so 33²¹ ends in the first cycle entry, 3. For 17¹³ only the units digit 7 matters, and powers of 7 cycle through 7, 9, 3, 1 with length 4; since 13 = 4 × 3 + 1, the remainder is 1, so 17¹³ ends in the first cycle entry, 7. Multiplying the three units digits gives 4 × 3 × 7 = 84, whose units digit is 4, so the units digit of the entire product is 4. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q95
**difficulty:** Hard
**type:** Problem Solving
**topic:** Factors and Multiples

How many positive factors of 7,560 are multiples of 6?

- A) 24
- B) 30
- C) 36
- D) 48
- E) 64

**answer:** C
**explanation:** A factor of a number is a multiple of 6 precisely when it contains at least one factor of 2 and at least one factor of 3, so the cleanest count works directly from the prime factorization. We factor 7,560 = 2³ × 3³ × 5 × 7, which can be verified since 8 × 27 × 5 × 7 = 8 × 27 × 35 = 216 × 35 = 7,560. Any positive factor has the form 2ᵃ × 3ᵇ × 5ᶜ × 7ᵈ with 0 ≤ a ≤ 3, 0 ≤ b ≤ 3, 0 ≤ c ≤ 1, and 0 ≤ d ≤ 1. For the factor to be a multiple of 6, we require a ≥ 1 and b ≥ 1, while c and d remain free. The exponent a may then be 1, 2, or 3 (3 choices), the exponent b may be 1, 2, or 3 (3 choices), the exponent c may be 0 or 1 (2 choices), and the exponent d may be 0 or 1 (2 choices). Because the exponents are chosen independently, the number of qualifying factors is 3 × 3 × 2 × 2 = 36. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q96
**difficulty:** Hard
**type:** Problem Solving
**topic:** Remainders — Powers

What is the remainder when 5⁸³ is divided by 7?

- A) 1
- B) 2
- C) 3
- D) 5
- E) 6

**answer:** C
**explanation:** To find the remainder of a power upon division by a modulus, we track the cycle that the residues of successive powers form, since congruence is preserved under multiplication. Reducing the powers of 5 modulo 7 gives 5¹ ≡ 5, 5² ≡ 25 ≡ 4, 5³ ≡ 5 × 4 = 20 ≡ 6, 5⁴ ≡ 5 × 6 = 30 ≡ 2, 5⁵ ≡ 5 × 2 = 10 ≡ 3, and 5⁶ ≡ 5 × 3 = 15 ≡ 1 (mod 7). The residues therefore repeat with period 6 in the pattern 5, 4, 6, 2, 3, 1. To locate 5⁸³ within this cycle, we find the remainder when the exponent 83 is divided by 6: since 83 = 6 × 13 + 5, the remainder is 5, so 5⁸³ has the same residue as 5⁵, which is the fifth entry of the cycle, namely 3. Hence the remainder when 5⁸³ is divided by 7 is 3. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q97
**difficulty:** Medium
**type:** Problem Solving
**topic:** Prime Factorization

What is the product of all the distinct prime factors of 5,460?

- A) 210
- B) 273
- C) 546
- D) 1,365
- E) 2,730

**answer:** E
**explanation:** The distinct prime factors of an integer are the different primes that appear in its prime factorization, regardless of how many times each appears, so the task is to factor 5,460 completely and then multiply the distinct primes once each. We factor by repeated division: 5,460 = 2 × 2,730 = 2 × 2 × 1,365, and 1,365 = 5 × 273 because it ends in 5, then 273 = 3 × 91, and finally 91 = 7 × 13. Collecting these, 5,460 = 2² × 3 × 5 × 7 × 13, so the distinct prime factors are 2, 3, 5, 7, and 13. Their product, taking each prime only once, is 2 × 3 × 5 × 7 × 13 = 6 × 5 × 7 × 13 = 30 × 91 = 2,730. The correct answer is E.
**related_reading:** reading-quant-03-number-properties

---

## Q98
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Divisibility

Is the positive integer n divisible by 24?

(1) n is divisible by 8.
(2) n is divisible by 9.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**explanation:** Since 24 = 2³ × 3, a positive integer is divisible by 24 if and only if it contains at least three factors of 2 and at least one factor of 3, and in a yes/no data sufficiency question a statement is sufficient only when it forces a single, consistent answer. Consider statement (1): n is divisible by 8 = 2³, which guarantees three factors of 2 but provides no information about a factor of 3. Testing values, n = 8 is divisible by 8 yet not by 24 (answer no), while n = 24 is divisible by 8 and by 24 (answer yes), so statement (1) alone is not sufficient. Consider statement (2): n is divisible by 9 = 3², which guarantees a factor of 3 but says nothing about factors of 2; here n = 9 is divisible by 9 yet not by 24 (answer no), while n = 72 is divisible by 9 and by 24 (answer yes), so statement (2) alone is not sufficient. Taking the statements together, n is divisible by both 8 and 9, hence by their least common multiple; since 8 = 2³ and 9 = 3² share no common prime factor, LCM(8, 9) = 2³ × 3² = 72, and n is a multiple of 72. Because 72 = 24 × 3, every multiple of 72 is a multiple of 24, so n must be divisible by 24, a definite yes. The two statements together are sufficient while neither alone is. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q99
**difficulty:** Hard
**type:** Problem Solving
**topic:** Counting Multiples — Inclusion-Exclusion

How many integers from 1 to 1,000, inclusive, are divisible by 6 but divisible by neither 8 nor 9?

- A) 70
- B) 78
- C) 83
- D) 96
- E) 111

**answer:** C
**explanation:** We begin with the multiples of 6 and then remove those that are also divisible by 8 or by 9, using inclusion-exclusion so that any number removed for both reasons is not subtracted twice; throughout, an integer divisible by two given numbers is divisible by their least common multiple, and the count of multiples of d from 1 to 1,000 is the greatest integer not exceeding 1,000 ÷ d. The multiples of 6 number ⌊1,000 ÷ 6⌋ = 166. Among these, the ones also divisible by 8 are the multiples of LCM(6, 8) = 24, numbering ⌊1,000 ÷ 24⌋ = 41, and the ones also divisible by 9 are the multiples of LCM(6, 9) = 18, numbering ⌊1,000 ÷ 18⌋ = 55. The ones removed by both criteria are the multiples of 6 divisible by both 8 and 9, that is, the multiples of LCM(6, 8, 9) = 72, numbering ⌊1,000 ÷ 72⌋ = 13. By inclusion-exclusion, the multiples of 6 that are divisible by 8 or by 9 number 41 + 55 − 13 = 83. Subtracting from the 166 multiples of 6 gives 166 − 83 = 83 integers that are divisible by 6 but by neither 8 nor 9. The correct answer is C.
**related_reading:** reading-quant-03-number-properties

---

## Q100
**difficulty:** Hard
**type:** Problem Solving
**topic:** Prime Powers in Factorials

What is the greatest integer k such that 3ᵏ is a factor of 30! (that is, of 30 factorial)?

- A) 10
- B) 12
- C) 13
- D) 14
- E) 15

**answer:** D
**explanation:** The exponent of a prime p in the factorization of n! equals the sum of the whole-number quotients ⌊n/p⌋ + ⌊n/p²⌋ + ⌊n/p³⌋ + …, because each term counts how many of the integers from 1 to n contribute at least one, then at least two, then at least three, and so on, factors of p. Here n! is 30! and the prime is p = 3, so we add the quotients for increasing powers of 3. The first term, ⌊30/3⌋ = 10, counts the multiples of 3 up to 30, each contributing at least one factor of 3. The second term, ⌊30/9⌋ = 3, counts the multiples of 9 (namely 9, 18, 27), each contributing an additional factor of 3. The third term, ⌊30/27⌋ = 1, counts the single multiple of 27 (namely 27), contributing yet another factor of 3. The next power, 81, exceeds 30, so ⌊30/81⌋ = 0 and all further terms vanish. Adding the contributions gives 10 + 3 + 1 = 14, so the greatest power of 3 dividing 30! is 3¹⁴, and the greatest such k is 14. The correct answer is D.
**related_reading:** reading-quant-03-number-properties
