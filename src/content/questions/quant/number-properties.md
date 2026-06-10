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
