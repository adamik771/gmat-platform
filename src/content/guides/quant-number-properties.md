---
title: Quant Number Properties Micro-Guide
description: The deep subskill playbook for number properties. Divisibility, primes, factors, multiples, remainders, LCM/GCD, even/odd, consecutive integers, and units-digit cycles — each with theory, worked examples, and the specific trap patterns that decide top-percentile scores.
section: Quant
type: reference
---

# Quant Number Properties Micro-Guide

## Introduction

Number properties is the Quant subskill that most reliably distinguishes top-percentile scorers from the middle of the distribution. The content is elementary — anything taught in middle school. The reasoning is where the challenge lives. A student who has "memorized the rules" but not internalized the *logic* will see their number-property accuracy cap in the 60–70% range even at 85th-percentile overall Quant.

I score 735s on this test. Number properties is one of the subskills where my preparation was most explicit and where the payoff per hour was highest. This guide is the deep dive — theory, worked examples, and trap patterns across the major number-property topics.

*Who this guide is for.* You've read the Quant Master Chapter. You've drilled number-properties problems and seen your error rate on this subskill. You want to close the gap. This guide is the content and method for closing it.

*How to use it.* Read end to end once. Then come back to specific topics as your error log surfaces them. Each section is self-contained enough to re-read in isolation.

*All worked examples are my own writing*, invented specifically to illustrate the point being taught.

## What Number Properties Actually Tests

The content base: divisibility rules, primes, factorization, factors and multiples, GCD and LCM, even/odd arithmetic, remainders, consecutive integers, perfect squares and cubes, units digits, integer constraints.

The reasoning base: recognizing which property applies, using constraints tightly, hunting for counterexamples, handling cases systematically.

Above the 70th percentile, the gap is in the reasoning, not the content. A student who knows all the rules but can't systematically apply them will miss "If n² is divisible by 48, what's the smallest possible n?" because they don't instantly factor 48 and compare prime exponents.

## The Prime Table (memorize)

Primes under 100 are the cornerstone of number-property problems. Commit these to memory:

2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97.

Pattern note: 2 is the only even prime. All other primes are odd. Primes above 5 end in 1, 3, 7, or 9 (but not every number ending in those digits is prime — 91 = 7 × 13).

## Divisibility Rules

Cold-memorized. These let you check divisibility without dividing.

- **2:** last digit is even (0, 2, 4, 6, 8).
- **3:** digit sum is divisible by 3.
- **4:** last two digits form a number divisible by 4.
- **5:** last digit is 0 or 5.
- **6:** divisible by 2 AND by 3.
- **7:** take the last digit, double it, subtract from the rest. If result is divisible by 7, so is the original. (Or just divide — this rule isn't always worth it.)
- **8:** last three digits form a number divisible by 8.
- **9:** digit sum is divisible by 9.
- **10:** last digit is 0.
- **11:** alternating digit sum is divisible by 11. For 2915: 2 − 9 + 1 − 5 = −11, divisible by 11.
- **12:** divisible by 3 AND by 4.
- **15:** divisible by 3 AND by 5.

### The layering principle

To check divisibility by a composite, factor it into coprime parts and check each. Divisible by 12 = divisible by 3 AND by 4 (coprime). Divisible by 24 = divisible by 3 AND by 8 (coprime). Divisible by 72 = divisible by 8 AND by 9.

But: not every composite decomposition works. Divisible by 36 is *not* "divisible by 4 AND by 9" — wait, is that right? 36 = 4 × 9, gcd(4, 9) = 1, so coprime. So yes. OK, that works. But "divisible by 60" is "divisible by 4 AND by 15" (gcd 1) or "divisible by 12 AND by 5" (gcd 1). Pick the pair that's easy to check.

Critical: the two factors must be coprime. Checking "divisible by 6" as "divisible by 2 and 3" works. Checking "divisible by 12" as "divisible by 6 and 2" does *not* work — 6 is already divisible by 2, so 6 divisibility doesn't force 12.

### Divisibility worked example

Is 1,286,742 divisible by 6?

Check 2: last digit 2, even. ✓
Check 3: digit sum 1 + 2 + 8 + 6 + 7 + 4 + 2 = 30. Divisible by 3. ✓
Both conditions met. Yes, divisible by 6.

## Primes and Factorization

### Prime factorization

Every positive integer > 1 has a unique prime factorization. This is the Fundamental Theorem of Arithmetic. Use it relentlessly.

60 = 2² × 3 × 5.
100 = 2² × 5².
72 = 2³ × 3².
1000 = 2³ × 5³.

### Prime-factorization worked example

*Problem.* How many distinct positive factors does 72 have?

*Solution.* 72 = 2³ × 3². The number of factors is (3 + 1)(2 + 1) = 12.

*Why this formula?* Each factor is of the form 2^a × 3^b where a ranges 0 to 3 (four choices) and b ranges 0 to 2 (three choices). 4 × 3 = 12.

### The sum-of-factors formula (useful occasionally)

Sum of factors of p^a × q^b = (1 + p + p² + ... + p^a) × (1 + q + q² + ... + q^b).

For 72: (1 + 2 + 4 + 8)(1 + 3 + 9) = 15 × 13 = 195.

### Common prime-factor insights

*2^10 = 1024 ≈ 1000.* Powers of 2 are often encountered in combinatorics.

*Perfect squares have even prime-factor exponents.* 64 = 2^6, 144 = 2^4 × 3², 441 = 3² × 7². Every exponent even.

*Perfect cubes have multiples-of-3 prime-factor exponents.* 216 = 2³ × 3³.

*A perfect kth power has all exponents divisible by k.*

## Factors and Multiples

*Factor of n:* a number that divides n evenly (with remainder 0).
*Multiple of n:* a number n divides into evenly.

Factor and multiple are opposites. 3 is a factor of 12; 12 is a multiple of 3.

### Number of factors

For n = p₁^a × p₂^b × p₃^c × ... , number of factors is (a+1)(b+1)(c+1)...

### Sum of factors

As above. Not commonly tested but occasionally useful.

### Distinct prime factors

For n = 72 = 2³ × 3², there are 2 distinct prime factors (2 and 3). Don't confuse with "total factor count."

### Factor pairs

Factors come in pairs. Every factor f of n has a corresponding n/f. For 12: (1,12), (2,6), (3,4). Six factors in total (including both members of each pair).

If n is a perfect square, one factor pair is (√n, √n) — same number twice. So perfect squares have an odd number of factors.

### Factor worked example

*Problem.* If n is a positive integer and n has exactly 6 distinct positive factors, what is n?

(A) 12  (B) 16  (C) 32  (D) 64  (E) 100

*Analysis.* Number of factors for n = p^a × q^b is (a+1)(b+1). We need this to equal 6.

6 = 6 × 1 = 3 × 2 = 2 × 3.

So either n = p^5 (one prime, exponent 5, 6 factors: 1, p, p², p³, p⁴, p⁵) or n = p² × q (two primes, exponents 2 and 1).

Checking options:
- 12 = 2² × 3: factors (2+1)(1+1) = 6. ✓
- 16 = 2^4: factors 5.
- 32 = 2^5: factors 6. ✓
- 64 = 2^6: factors 7.
- 100 = 2² × 5²: factors (2+1)(2+1) = 9.

Both 12 and 32 have 6 factors. The problem should have a unique answer — so check the structure: 12 = 2² × 3 fits the p²q pattern; 32 = 2^5 fits the p^5 pattern. Both valid.

This problem, if real, would need an additional constraint to disambiguate. Maybe "n is not a prime power" or "n is less than 20" or similar. Since both (A) and (C) qualify, the problem is underspecified as written.

*Lesson.* When a factor-count question asks for a specific n, check for all integer patterns that produce the factor count — there may be multiple.

## LCM and GCD

*GCD (greatest common divisor):* largest integer that divides both numbers.
*LCM (least common multiple):* smallest positive integer that is a multiple of both.

### Prime-factorization method

GCD: for each prime, take the *minimum* exponent in the two factorizations.
LCM: for each prime, take the *maximum* exponent.

Example: 36 = 2² × 3², 24 = 2³ × 3. GCD: 2² × 3 = 12. LCM: 2³ × 3² = 72.

### The product rule

For any two positive integers a and b: a × b = GCD × LCM.

Check: 36 × 24 = 864. GCD × LCM = 12 × 72 = 864. ✓

This identity is useful when you know two of the four values.

### GCD/LCM worked example

*Problem.* If the GCD of x and 36 is 4, and the LCM of x and 36 is 72, what is x?

*Solution.* Using the product rule: x × 36 = 4 × 72 = 288. So x = 288/36 = 8.

Verify: 8 = 2³; 36 = 2² × 3². GCD: 2² = 4 ✓. LCM: 2³ × 3² = 72 ✓. 

### When to use LCM

Problems involving periodic events (every 8th day, every 12th day). The next simultaneous occurrence is the LCM of the periods. LCM(8, 12) = 24, so events co-occur every 24 days.

### When to use GCD

Problems requiring the largest shared factor. "The largest square tile that can evenly cover a rectangular area" is the GCD of the rectangle's dimensions.

## Even and Odd

Basic arithmetic:

- even + even = even
- even + odd = odd
- odd + odd = even
- even × any = even
- odd × odd = odd

### Patterns for powers

- even^any = even (for positive exponents)
- odd^any = odd
- (even)² = even; (odd)² = odd

### Even/odd worked example

*Problem.* If x, y, z are integers and x² + y² is even, which of the following must be true?

I. x + y is even
II. xy is even
III. x and y are both even or both odd

*Analysis.* x² + y² even means x² and y² are both even or both odd (so that their sum is even).

x² even iff x even.
x² odd iff x odd.

So x and y are both even or both odd — meaning III is true.

If both even: x + y is even (I true), xy is even (II true).
If both odd: x + y = odd + odd = even (I true), xy = odd × odd = odd (II false).

So I and III are always true; II is sometimes true.

*Answer: I and III only.*

## Consecutive Integers

Three consecutive integers n, n+1, n+2 have sum 3n + 3 = 3(n+1) — always divisible by 3.

In general, k consecutive integers have sum divisible by k if k is odd, and divisible by k/2 if k is even (depending).

### The average is the middle

For consecutive integers, the average equals the middle term. For 7, 8, 9, 10, 11, the middle is 9, which is the average. For 2, 4, 6, 8 (consecutive evens), the average is 5, which is the midpoint.

### Product of consecutive integers

n × (n+1) is always even (one of any two consecutive integers is even).

n × (n+1) × (n+2) is always divisible by 6 (contains at least one multiple of 2 and one multiple of 3).

### Consecutive integers worked example

*Problem.* If n is an integer, is n(n+1)(n+2) divisible by 24?

*Analysis.* This is n × (n+1) × (n+2). We need divisibility by 24 = 2³ × 3.

Among three consecutive integers, exactly one is divisible by 3 (ensures factor of 3 ✓).

For factor of 8: among any three consecutive integers, at least one is divisible by 2, but whether the combined factor of 2 is 8 depends. 

Case: n = 2. n(n+1)(n+2) = 2 × 3 × 4 = 24. ✓
Case: n = 3. 3 × 4 × 5 = 60. 60/24 = 2.5. Not divisible by 24.
Case: n = 4. 4 × 5 × 6 = 120. 120/24 = 5. Divisible. ✓
Case: n = 1. 1 × 2 × 3 = 6. 6/24 = 0.25. Not divisible.

So n(n+1)(n+2) is not *always* divisible by 24.

In fact: n(n+1)(n+2) is always divisible by 6 (but not always 24).

### Bigger product

n(n+1)(n+2)(n+3) — four consecutive integers — always divisible by 24. Among any four consecutive integers, at least one is divisible by 4 and at least one is divisible by 2, giving factor of 8. And at least one is divisible by 3. So factor of 24 always.

## Remainders

If n divided by d gives quotient q and remainder r, then n = dq + r where 0 ≤ r < d.

### Modular arithmetic basics

If a has remainder r_a mod n and b has remainder r_b mod n, then:
- a + b has remainder (r_a + r_b) mod n (reduce if over n).
- a × b has remainder (r_a × r_b) mod n (reduce).
- a^k has remainder (r_a)^k mod n (reduce).

### Remainder worked example 1

*Problem.* What is the remainder when 7^50 is divided by 10?

*Solution.* Find the cycle of last digits of 7^n:
7¹ = 7
7² = 49 (last digit 9)
7³ = 343 (last digit 3)
7^4 = 2401 (last digit 1)
7^5 = 16807 (last digit 7)

Cycle: 7, 9, 3, 1 (length 4).

50 mod 4 = 2. So 7^50 has the same last digit as 7² = 49, which is 9.

*Answer: 9.*

### Remainder worked example 2

*Problem.* What is the remainder when 12 + 13 + 14 + ... + 25 is divided by 7?

*Solution.* Sum of 12 to 25 = sum of 1 to 25 minus sum of 1 to 11 = 25 × 26/2 − 11 × 12/2 = 325 − 66 = 259.

259 / 7 = 37 remainder 0.

*Answer: 0.*

*Alternative approach.* Each term mod 7: 12 mod 7 = 5, 13 mod 7 = 6, 14 mod 7 = 0, 15 mod 7 = 1, ..., 25 mod 7 = 4. Sum mod 7 of these. The cycle repeats every 7 terms.

### Remainder traps

*Forgetting the remainder range.* Remainder r is always 0 ≤ r < d. Negative intermediate computations should be reduced modulo d by adding d until positive.

*Incorrect cycle period.* When working with units digits, the cycle can be 1, 2, or 4 (it's never 3 because units digits follow limited patterns). Verify by computing the first few terms.

## Units Digit Cycles

The last digit of a^n follows a cycle:

- 0: always 0.
- 1: always 1.
- 2: 2, 4, 8, 6 (cycle 4).
- 3: 3, 9, 7, 1 (cycle 4).
- 4: 4, 6 (cycle 2).
- 5: always 5.
- 6: always 6.
- 7: 7, 9, 3, 1 (cycle 4).
- 8: 8, 4, 2, 6 (cycle 4).
- 9: 9, 1 (cycle 2).

To find the units digit of a^n, look up the cycle, compute n mod cycle length, pick the matching position.

### Units-digit worked example

*Problem.* What is the units digit of 3^47 + 7^23?

*Solution.*

3^n cycle: 3, 9, 7, 1 (cycle 4). 47 mod 4 = 3. So 3^47 has units digit = 3rd in cycle = 7.

7^n cycle: 7, 9, 3, 1 (cycle 4). 23 mod 4 = 3. So 7^23 has units digit = 3rd in cycle = 3.

Sum: 7 + 3 = 10. Units digit = 0.

*Answer: 0.*

## Integer Constraints

GMAT number-property problems use specific integer constraints. Recognizing them is essential.

- *Positive integer:* 1, 2, 3, ... (starts at 1).
- *Non-negative integer:* 0, 1, 2, ... (includes 0).
- *Integer:* ..., −2, −1, 0, 1, 2, ... (all integers including negatives and zero).
- *Prime:* 2, 3, 5, 7, 11, ... (positive integers > 1 with only 1 and themselves as factors).
- *Distinct integers:* no duplicates allowed.
- *Consecutive integers:* differ by 1 each.
- *Even integers:* divisible by 2.

Forgetting these leads to the most common number-property error: treating a problem without recognizing what's allowed.

### The "1 is not prime" trap

This one traps students routinely. 1 is *not* a prime number. Primes start at 2. A prime has exactly two distinct positive divisors: 1 and itself. 1 has only one divisor (itself), so it's not prime.

### The "0 is an integer" reminder

0 is an integer. It's a multiple of every positive integer (0 divided by any n is 0 with remainder 0). It's even. It's not positive and not negative. If your problem says "integer," zero is included unless further restricted.

## Perfect Squares

A perfect square is an integer that is the square of another integer. Examples: 1, 4, 9, 16, 25, 36, 49, 64, 81, 100.

### Properties

- Every perfect square has an odd number of positive factors (because one factor pair is (√n, √n)).
- Perfect squares end in 0, 1, 4, 5, 6, or 9. Never 2, 3, 7, or 8.
- A perfect square's units digit is determined by the units digit of its square root:
  - 0² = 0, 1² = 1, 2² = 4, 3² = 9, 4² = 16 (6), 5² = 25 (5), 6² = 36 (6), 7² = 49 (9), 8² = 64 (4), 9² = 81 (1).

### Perfect-square worked example

*Problem.* How many positive integers less than 100 are perfect squares?

*Solution.* Perfect squares under 100: 1, 4, 9, 16, 25, 36, 49, 64, 81. Nine numbers.

*Answer: 9.*

## Perfect Cubes

Perfect cubes: 1, 8, 27, 64, 125, 216, 343, 512, 729, 1000.

### Properties

- Preserve sign: (negative)³ is negative, (positive)³ is positive.
- Perfect cubes have prime-factor exponents all divisible by 3.

## The Divisibility-Exponent Relationship

If n^k is divisible by M, what does this tell us about n?

Factor M into primes: M = p₁^a × p₂^b × ....

For n^k to be divisible by M: for each prime p_i, the exponent of p_i in n^k must be ≥ the exponent in M. Since the exponent of p_i in n^k is k times its exponent in n, we need:

(k × exponent of p_i in n) ≥ a_i

or equivalently, exponent of p_i in n ≥ ⌈a_i / k⌉.

### Worked example

*Problem.* If n² is divisible by 48, what is the smallest possible positive integer value of n?

*Solution.* Factor 48: 48 = 2^4 × 3.

For n² divisible by 48: 2 × exp₂(n) ≥ 4, so exp₂(n) ≥ 2. And 2 × exp₃(n) ≥ 1, so exp₃(n) ≥ ⌈1/2⌉ = 1.

Smallest n: 2² × 3 = 12.

Verify: 12² = 144. 144/48 = 3. Divisible. ✓

*Answer: 12.*

## Sum of Consecutive Integers

Sum of 1 to n: n(n+1)/2.

Sum of consecutive integers from a to b: (b − a + 1)(a + b)/2.

### Gauss's trick

Sum any arithmetic sequence by pairing first and last, second and second-to-last, etc. Each pair has the same sum. Count of pairs = (number of terms)/2.

### Sum worked example

*Problem.* What is the sum of the integers from 50 to 100 inclusive?

*Solution.* Number of terms: 100 − 50 + 1 = 51. Sum of first and last: 50 + 100 = 150. Sum = 51 × 150 / 2 = 51 × 75 = 3825.

*Answer: 3825.*

## Ten Fully Worked Number-Property Problems

### Problem 1 — Divisibility via prime factorization

*Problem.* If n is a positive integer such that 180n is divisible by 216, what is the smallest possible value of n?

*Solution.* 180 = 2² × 3² × 5. 216 = 2³ × 3³.

We need 180n to have at least 3 factors of 2 and 3 factors of 3.

180 provides 2² and 3². So n must provide at least one more 2 (for 2³) and at least one more 3 (for 3³). Smallest n: 2 × 3 = 6.

Verify: 180 × 6 = 1080. 1080/216 = 5. Divisible. ✓

*Answer: 6.*

### Problem 2 — LCM cycle

*Problem.* Two lighthouses flash, one every 6 seconds, the other every 8 seconds. They both flashed together at 10:00:00. When will they next flash together?

*Solution.* They flash together at multiples of LCM(6, 8) = 24. Next simultaneous flash: 24 seconds after 10:00:00.

*Answer: 10:00:24.*

### Problem 3 — Perfect square count

*Problem.* How many positive integer values of k between 1 and 100 inclusive make 3k a perfect square?

*Solution.* 3k is a perfect square means 3k has all even exponents. Factor k = 3^a × (other primes)^b. Then 3k = 3^(a+1) × (other primes)^b. For this to be a perfect square: a + 1 must be even (so a odd), and all other exponents b must be even.

So k must be 3 × (perfect square). The values: 3 × 1 = 3, 3 × 4 = 12, 3 × 9 = 27, 3 × 16 = 48, 3 × 25 = 75. Next: 3 × 36 = 108 > 100, stop.

*Answer: 5.*

### Problem 4 — Remainder chain

*Problem.* What is the remainder when 5^100 is divided by 7?

*Solution.* Find the cycle of 5^n mod 7:
5¹ mod 7 = 5
5² mod 7 = 25 mod 7 = 4
5³ mod 7 = 5 × 4 mod 7 = 20 mod 7 = 6
5^4 mod 7 = 5 × 6 mod 7 = 30 mod 7 = 2
5^5 mod 7 = 5 × 2 mod 7 = 10 mod 7 = 3
5^6 mod 7 = 5 × 3 mod 7 = 15 mod 7 = 1
5^7 mod 7 = 5 × 1 mod 7 = 5 (back to start)

Cycle length 6. 100 mod 6 = 4. So 5^100 has the same remainder as 5^4, which is 2.

*Answer: 2.*

### Problem 5 — Factor count with constraint

*Problem.* How many positive integers n less than 100 have exactly 4 positive divisors?

*Solution.* Number of divisors = 4 means the factorization is either p³ (three + one = four divisors: 1, p, p², p³) or p × q (one + one + one + one = (1+1)(1+1) = 4 divisors).

p³ < 100: p = 2: 8. p = 3: 27. p = 4: n/a. 
Wait, p must be prime. So p = 2 or 3 give p³ = 8 or 27. Both < 100.

p × q < 100 where p < q both prime:
p = 2: q in {3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47}. Products: 6, 10, 14, 22, 26, 34, 38, 46, 58, 62, 74, 82, 86, 94. All < 100. 14 values. Wait, let me check the max: 2 × 47 = 94 < 100, 2 × 49 = 98 but 49 not prime (7²). 2 × 53 = 106 > 100. So p = 2 gives 14 values.

p = 3: q > 3 prime and 3q < 100: q in {5, 7, 11, 13, 17, 19, 23, 29, 31}. 9 values. Products: 15, 21, 33, 39, 51, 57, 69, 87, 93.

p = 5: 5q < 100 and q > 5 prime: q in {7, 11, 13, 17, 19}. Products: 35, 55, 65, 85, 95. 5 values.

p = 7: 7q < 100 and q > 7 prime: q in {11, 13}. Products: 77, 91. 2 values. (7 × 17 = 119 > 100.)

p = 11: 11q < 100: q > 11 prime. 11 × 13 = 143 > 100. 0 values.

Total pq: 14 + 9 + 5 + 2 = 30.
Total p³: 2.
Grand total: 32.

*Answer: 32.*

### Problem 6 — Consecutive integers

*Problem.* If x, y, and z are consecutive integers (in some order) and x + y + z = 45, what is the value of y (the middle integer)?

*Solution.* Sum of three consecutive integers = 3 × middle. So 45 = 3y, y = 15.

*Answer: 15.*

### Problem 7 — Units digit

*Problem.* What is the units digit of 2^25 × 3^18?

*Solution.* 2^n cycle: 2, 4, 8, 6 (cycle 4). 25 mod 4 = 1. So 2^25 has units digit 2.

3^n cycle: 3, 9, 7, 1 (cycle 4). 18 mod 4 = 2. So 3^18 has units digit 9.

Product's units digit: 2 × 9 = 18 → units digit 8.

*Answer: 8.*

### Problem 8 — Divisibility and even/odd

*Problem.* If n is a positive integer, and 5n is a multiple of 6, which of the following must be true?

I. n is a multiple of 2.
II. n is a multiple of 3.
III. n is a multiple of 6.

*Solution.* 5n divisible by 6 = 2 × 3. Since gcd(5, 6) = 1, we need n divisible by 6. So n divisible by 2, by 3, and by 6. All three.

*Answer: All three.*

### Problem 9 — Prime factors

*Problem.* If n is a positive integer such that 2 ≤ n ≤ 100, how many values of n have no prime factors larger than 5?

*Solution.* n can only have prime factors 2, 3, or 5. So n is of the form 2^a × 3^b × 5^c with a, b, c ≥ 0 (and n ≥ 2).

Enumerate:
- Pure powers of 2 (≤ 100): 2, 4, 8, 16, 32, 64. That's 6.
- Pure powers of 3: 3, 9, 27, 81. That's 4.
- Pure powers of 5: 5, 25. That's 2.
- Products with both 2 and 3: 6, 12, 18, 24, 36, 48, 72, 96 (from 2×3 up), and 2²×3 = 12, 2²×3² = 36, 2²×3³ = 108 (too big). Let me systematically enumerate products 2^a × 3^b with a ≥ 1, b ≥ 1, product ≤ 100:
  - a=1, b=1: 6. a=1, b=2: 18. a=1, b=3: 54. a=1, b=4: 162 (too big). So a=1: 6, 18, 54 (3 values).
  - a=2, b=1: 12. a=2, b=2: 36. a=2, b=3: 108 (too big). So a=2: 12, 36 (2 values).
  - a=3, b=1: 24. a=3, b=2: 72. a=3, b=3: 216 too big. So a=3: 24, 72 (2 values).
  - a=4, b=1: 48. a=4, b=2: 144 too big. So a=4: 48 (1 value).
  - a=5, b=1: 96. a=5, b=2: 288 too big. So a=5: 96 (1 value).
  - a=6, b=1: 192 too big.
  - Total with 2 and 3 both: 3+2+2+1+1 = 9.
- Products with 2 and 5: 10, 20, 40, 50, 80, 100. Let me enumerate 2^a × 5^c with a ≥ 1, c ≥ 1, product ≤ 100:
  - a=1, c=1: 10. a=1, c=2: 50. So a=1: 2 values.
  - a=2, c=1: 20. a=2, c=2: 100. So a=2: 2 values.
  - a=3, c=1: 40. a=3, c=2: 200 too big. So a=3: 1 value.
  - a=4, c=1: 80. So a=4: 1 value.
  - a=5, c=1: 160 too big.
  - Total 2 and 5 both: 6.
- Products with 3 and 5: 15, 45, 75, 90. Let me enumerate 3^b × 5^c with b ≥ 1, c ≥ 1, product ≤ 100:
  - b=1, c=1: 15. b=1, c=2: 75. So b=1: 2 values.
  - b=2, c=1: 45. So b=2: 1 value.
  - b=3, c=1: 135 too big.
  - Total 3 and 5 both: 3.
- Products with 2, 3, and 5 all: 30, 60, 90, etc. Enumerate 2^a × 3^b × 5^c with a, b, c ≥ 1, product ≤ 100:
  - a=1, b=1, c=1: 30. a=1, b=1, c=2: 150 too big.
  - a=1, b=2, c=1: 90.
  - a=2, b=1, c=1: 60.
  - a=3, b=1, c=1: 120 too big.
  - So: 30, 60, 90. 3 values.

Total: 6 + 4 + 2 + 9 + 6 + 3 + 3 = 33.

*Answer: 33.*

### Problem 10 — The layered divisibility

*Problem.* If n is a positive integer and n! is divisible by 1000, what is the smallest possible n?

*Solution.* 1000 = 2³ × 5³. We need n! to have at least 3 factors of 5 (fewer factors of 5 than of 2 in n!, so 5 is the binding constraint).

Count factors of 5 in n!: floor(n/5) + floor(n/25) + ... For n = 15: 15/5 + 15/25 = 3 + 0 = 3. So 15! has exactly 3 factors of 5. Factors of 2 in 15!: 15/2 + 15/4 + 15/8 = 7 + 3 + 1 = 11. Plenty of 2s.

*Answer: 15.*

## Common Number-Property Traps

Compiled from error logs of students pushing toward the top.

*1 is not prime.* First rule. Never forget.

*0 is an integer.* When the stem says "integer," 0 is in play.

*Positive integer starts at 1.* Not at 2, not at 0.

*Distinct integers are not equal.* "Distinct" is a stronger constraint than "integers."

*Consecutive even integers differ by 2.* Not by 1.

*n and 2n are always different parity?* No, 2n is even and n can be even or odd — parity depends.

*"Divisible by" means no remainder.* Remainder 0.

*LCM of coprime numbers is their product.* gcd(a, b) = 1 implies LCM = ab.

*Perfect squares end in 0, 1, 4, 5, 6, or 9.* Never 2, 3, 7, or 8.

*The only even prime is 2.*

*n! grows fast.* 10! is already over 3.6 million.

*Factors come in pairs.* For n not a perfect square, factor count is always even.

## Study Protocol for Number Properties

### Week 1: Content review

Drill the basics: primes, factorization, divisibility rules, even/odd, LCM/GCD. 10 problems per day, untimed.

### Week 2: Remainders and cycles

Focus on units-digit cycles and remainder problems. 10 problems per day.

### Week 3: Layered problems

Problems combining multiple number-property topics. 10 problems per day.

### Week 4: Timed practice

Timed sets, 90 seconds per problem. Track errors.

### Week 5: Error-pattern targeting

Review error log. Target the top 2 patterns.

### Week 6: Integration

Full Quant sections. Monitor number-property accuracy.

## Number-Property Elite Habits

### They know the primes under 100 by heart.

Reflexive recognition.

### They factor into primes instantly.

72 = 2³ × 3². No thinking.

### They use the factor-count formula without hesitation.

(a+1)(b+1)(c+1)...

### They check divisibility with rules, not division.

3-divisibility by digit sum. 9-divisibility by digit sum.

### They recognize units-digit patterns.

Cycles of 4 for most single-digit bases.

### They hunt counterexamples on yes/no DS.

Number-property DS rewards careful case checking.

### They respect integer constraints.

Positive, non-negative, prime, distinct — each changes the problem.

### They layer divisibility via coprime decomposition.

Divisible by 12 = divisible by 3 and 4.

### They test with 0, 1, −1, 2 on problems where sign or special values might matter.

### They don't compute when they can reason.

Factor count via formula, not enumeration.

## Closing Note

Number properties is one of the deepest Quant subskills in terms of what it rewards above the 70th percentile — not content mastery, but *reasoning mastery*. The content is elementary; the reasoning is layered.

Six to eight weeks of disciplined practice using this guide as reference, with careful error logging on every missed problem, should move your number-property accuracy from 65–75% to 90%+. That alone moves your Quant score by 5–10 percentile points, depending on where you start.

I score 735s on this test. Number properties is one of the subskills where my preparation was most explicit. The patterns are finite. The logic is learnable. The method is the method.

Now it's yours.
