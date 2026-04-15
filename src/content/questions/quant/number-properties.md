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
**explanation:** Check each odd number between 20 and 40: 21 = 3 x 7 (not prime), 23 (prime), 25 = 5 x 5 (not prime), 27 = 3 x 9 (not prime), 29 (prime), 31 (prime), 33 = 3 x 11 (not prime), 35 = 5 x 7 (not prime), 37 (prime), 39 = 3 x 13 (not prime). The primes are 23, 29, 31, and 37, giving a total of 4.

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Even/Odd

If m is an even integer and n is an odd integer, which of the following must be odd?

- A) m + 2n
- B) mn
- C) m^2 + n
- D) 2m + 2n
- E) m - n + 1

**answer:** C
**explanation:** m^2 is even (even times even = even). Even + odd = odd. So m^2 + n is odd. Checking the others: A) even + even = even. B) even x odd = even. D) even + even = even. E) even - odd + odd = even. Only C must be odd.

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
**explanation:** 36 = 2^2 x 3^2. The number of positive factors = (2+1)(2+1) = 9. The factors are: 1, 2, 3, 4, 6, 9, 12, 18, 36.

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
**explanation:** Since n leaves a remainder of 4 when divided by 7, we can write n = 7k + 4 for some non-negative integer k. Then 3n + 5 = 3(7k + 4) + 5 = 21k + 12 + 5 = 21k + 17. Since 17 = 2(7) + 3, the remainder when 3n + 5 is divided by 7 is 3. Alternatively, pick n = 4: then 3(4) + 5 = 17, and 17 divided by 7 gives a remainder of 3.

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
**explanation:** A number is divisible by 9 if the sum of its digits is divisible by 9. Sum of digits = 4 + A + 6 = 10 + A. For 10 + A to be divisible by 9 and A to be a single digit (0-9), A must equal 8, since 10 + 8 = 18 and 18 is divisible by 9.

---

## Q6
**difficulty:** Hard
**type:** Problem Solving
**topic:** Multiples

What is the greatest common factor of 168 and 252?

- A) 12
- B) 21
- C) 28
- D) 42
- E) 84

**answer:** E
**explanation:** Prime factorize each number: 168 = 2^3 x 3 x 7, and 252 = 2^2 x 3^2 x 7. The GCF uses the minimum power of each common prime factor: 2^2 x 3 x 7 = 4 x 3 x 7 = 84. Trap answer D (42) uses 2^1 instead of 2^2.

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
**explanation:** When multiplying, only the remainders affect the final remainder. The remainder of x is 5 and the remainder of y is 3. Multiply the remainders: 5 x 3 = 15. Then 15 divided by 8 gives a remainder of 7. To verify algebraically: xy = (8q + 5)(8r + 3) = 64qr + 24q + 40r + 15 = 8(8qr + 3q + 5r + 1) + 7.

---

## Q8
**difficulty:** Hard
**type:** Problem Solving
**topic:** Primes and Factors

If n is a positive integer and n^2 is divisible by 72, what is the smallest possible value of n?

- A) 6
- B) 12
- C) 24
- D) 36
- E) 72

**answer:** B
**explanation:** First, 72 = 2^3 x 3^2. For n^2 to be divisible by 72, n^2 must contain at least 2^3 and 3^2 in its prime factorization. Since n^2 is a perfect square, all prime factor exponents in n^2 must be even. So n^2 must be divisible by at least 2^4 x 3^2 (rounding 2^3 up to the next even power). This means n must be divisible by at least 2^2 x 3 = 12. Check: 12^2 = 144, and 144/72 = 2, confirming that 144 is divisible by 72. The smallest possible value of n is 12.
