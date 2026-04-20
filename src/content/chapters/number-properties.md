---
slug: number-properties
title: Number Properties
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Number properties is the single highest-leverage Quant topic on the GMAT Focus — no other topic returns as much score per hour of study. The concepts are concrete (even, odd, prime, divisible), the question types repeat, and the difficulty ceiling is brutal. Master this chapter and you'll pick up 30-50 points across your score range.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — attempting a problem before instruction cements the lesson afterward. Rate your confidence honestly; your calibration is more important than your accuracy right now.
    pretest_question_ids:
      - number-properties-q2
      - number-properties-q4

  - id: even-and-odd
    type: reading
    title: "Even and odd — the smallest ideas with the biggest payoff"
    check_question_ids:
      - number-properties-q2
      - number-properties-q17

  - id: divisibility-rules
    type: reading
    title: "Divisibility rules — the shortcuts you can't afford to rederive"
    check_question_ids:
      - number-properties-q5
      - number-properties-q9

  - id: primes-and-prime-factorization
    type: reading
    title: "Primes and prime factorization — the atomic structure of integers"
    check_question_ids:
      - number-properties-q1
      - number-properties-q8

  - id: factors-and-multiples
    type: reading
    title: "Factors, multiples, GCF, and LCM"
    check_question_ids:
      - number-properties-q3
      - number-properties-q13

  - id: remainders
    type: reading
    title: "Remainders — modular arithmetic, GMAT-style"
    check_question_ids:
      - number-properties-q4
      - number-properties-q12

  - id: integer-properties-of-expressions
    type: reading
    title: "Integer properties of expressions and units digits"
    check_question_ids:
      - number-properties-q11
      - number-properties-q16

  - id: summary
    type: summary
    title: "Why this chapter pays the most per hour"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q1
      - number-properties-q2
      - number-properties-q3
      - number-properties-q9
      - number-properties-q10
      - number-properties-q11
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q4
      - number-properties-q5
      - number-properties-q12
      - number-properties-q13
      - number-properties-q14
      - number-properties-q15
      - number-properties-q16
      - number-properties-q17
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - number-properties-q6
      - number-properties-q7
      - number-properties-q8
      - number-properties-q18
      - number-properties-q19
      - number-properties-q20
---

## @even-and-odd

Even and odd feel like elementary-school ideas. They're not — on the GMAT, they're a source of 725+ difficulty because test writers combine them with absolute value, exponents, and Data Sufficiency conditions. What separates students who get these right is not "more memorization" but a fluent internal table they can run through in two seconds.

**The sum/difference table:**

- even + even = even
- odd + odd = even
- even + odd = odd

**The product table:**

- even × even = even
- even × odd = even
- odd × odd = odd

**One rule beats all of them: even wins multiplication; odd wins to flip addition.** Any product with at least one even factor is even. A sum or difference is odd if and only if it contains an odd number of odd terms.

**Example.** If `m` is even and `n` is odd, which of the following *must* be odd: `m + 2n`, `mn`, `m² + n`, `2m + 2n`, `m − n + 1`?

- `m + 2n`: `even + even = even`. (2n is even regardless of n.)
- `mn`: `even × odd = even`.
- `m² + n`: `even + odd = odd`. ✓
- `2m + 2n`: `even + even = even`.
- `m − n + 1`: `even − odd + odd = even`.

Only `m² + n` must be odd. Every GMAT even/odd question is built this way — translate each symbol, apply the table, pick the one that's forced to the stated parity.

**The expression trick: consecutive integers.** `k(k+1)` is always even because one of two consecutive integers must be even. `k(k+1)(k+2)` is always divisible by `3! = 6` because at least one factor is even and exactly one is divisible by 3. This generalizes — the product of n consecutive integers is divisible by `n!`.

**Example (Data Sufficiency).** Is integer k odd?

- Statement (1): `k² + k` is even. Expand: `k(k+1)`, product of consecutive integers, always even. Tells us nothing. Insufficient.
- Statement (2): `3k + 1` is even. Then `3k` is odd, so `k` must be odd (because `3 × even = even` and `3 × odd = odd`). Sufficient.

Answer: B. The trap is trusting statement (1) because "even + even = even" feels informative — it isn't, because `k² + k` is even for every integer k.

> **Trap to watch.** Zero is even. Students forget this constantly on Data Sufficiency. "Is k even?" with `k = 0` is YES. The integer 0 is also divisible by every integer except 0 itself.

> **Self-explanation prompt.** Why is the product of any two consecutive integers always even? If you can say "because one of them is even, and even times anything is even," you've internalized the pattern well enough to recognize `k(k+1)` in disguise on the test.

## @divisibility-rules

Every 685+ scorer has the full set of divisibility rules memorized. Not because the test asks you to *state* them — because they let you factor mentally at test-speed without scratch paper.

**The rules, in the order you'll use them:**

| Divisor | Rule |
|---|---|
| 2 | Last digit is even (0, 2, 4, 6, 8) |
| 3 | Digit sum is divisible by 3 |
| 4 | Last two digits form a number divisible by 4 |
| 5 | Last digit is 0 or 5 |
| 6 | Divisible by 2 AND by 3 |
| 8 | Last three digits form a number divisible by 8 |
| 9 | Digit sum is divisible by 9 |
| 10 | Last digit is 0 |
| 11 | Alternating digit sum is divisible by 11 |

**The 3-rule and 9-rule example.** Is `4A6` (a three-digit number with unknown digit A) divisible by 9?

Digit sum `= 4 + A + 6 = 10 + A`. For this to be divisible by 9, and A must be a single digit (0–9), we need `10 + A = 18`, so `A = 8`. Check: `486 / 9 = 54`. ✓

**The 11-rule example.** Is 2431 divisible by 11?

Alternating sum from the right: `1 − 3 + 4 − 2 = 0`. Zero is divisible by 11 (by convention, every integer divides 0). So yes, 2431 is divisible by 11. Confirm: `2431 / 11 = 221`. ✓

**The rules compose.** Divisibility by 12 = divisibility by 3 AND by 4. Divisibility by 15 = divisibility by 3 AND by 5. Divisibility by 36 = divisibility by 4 AND by 9 (not 6 × 6 = 36 via "divisible by 6 twice" — that would double-count the factor of 2). The rule: to check divisibility by `ab` where `gcd(a, b) = 1`, check both `a` and `b` separately.

**The 7 rule exists but isn't worth memorizing.** The GMAT virtually never tests divisibility by 7 through a digit-manipulation rule. If you see "divisible by 7," just do the division.

> **Recall check.** Close your eyes. State — without looking — the divisibility rules for 3, 4, 8, 9, and 11. Now test yourself on a number: is 396 divisible by each of 2, 3, 4, 6, 9? (Answers: yes, yes, yes, yes, yes — 396 = 4 × 99 = 4 × 9 × 11. All five rules agree.) Retrieval practice beats re-reading by 40% on delayed tests (Roediger & Karpicke, 2006) — that's why this box is here instead of a re-summary.

> **Trap to watch.** A number divisible by 6 is divisible by 3 *and* 2. But divisibility by 8 is NOT "divisible by 4 twice" — 12 is divisible by 4 but not by 8. The rule only composes cleanly when the factors are coprime.

## @primes-and-prime-factorization

Prime factorization is the single most useful technique in number properties. Almost every 685+ question involving factors, multiples, or divisibility yields to prime factorization in two lines.

**What a prime is.** A positive integer greater than 1 whose only divisors are 1 and itself. 2 is the only even prime. 1 is not prime.

**The primes under 50, memorized:**

`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47`

Fifteen primes. You should know all of them on sight. Students who have to test each odd number with the 3-rule and the 7-rule for every prime question are burning time they need elsewhere.

**Counting primes in an interval.** "How many primes between 20 and 40?" Test odds only (every even >2 is composite): 21 (= 3×7), 23 (prime), 25 (= 5²), 27 (= 3³), 29 (prime), 31 (prime), 33 (= 3×11), 35 (= 5×7), 37 (prime), 39 (= 3×13). Four primes: 23, 29, 31, 37.

**Prime factorization.** Every positive integer > 1 has a unique prime factorization. `360 = 2³ × 3² × 5`. `720 = 2⁴ × 3² × 5`.

**The factor count formula.** If `n = p₁^a × p₂^b × p₃^c × …`, the number of positive factors of n is `(a+1)(b+1)(c+1)…`.

**Example.** How many positive factors does 720 have? `720 = 2⁴ × 3² × 5`. Factor count `= (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30`.

**Perfect squares and prime factorization.** An integer is a perfect square if and only if every exponent in its prime factorization is even. `144 = 2⁴ × 3²` (both exponents even) → perfect square. `72 = 2³ × 3²` (one odd exponent) → not a perfect square.

**Example (hard).** If `n²` is divisible by 72, what's the smallest positive integer n?

`72 = 2³ × 3²`. For `n²` to absorb `2³`, and `n²` is a perfect square (even exponents only), we need `n²` divisible by `2⁴ × 3²`. So `n` must be divisible by `2² × 3 = 12`. Check: `12² = 144 = 72 × 2`. ✓ Smallest n is 12.

**Counting special kinds of factors.** For `n = 2⁵ × 3⁴ × 5³`, how many factors are perfect squares? A factor looks like `2^a × 3^b × 5^c` with `0 ≤ a ≤ 5`, `0 ≤ b ≤ 4`, `0 ≤ c ≤ 3`. For it to be a perfect square, each of a, b, c must be even. a: 0, 2, 4 → 3 choices. b: 0, 2, 4 → 3 choices. c: 0, 2 → 2 choices. Total: `3 × 3 × 2 = 18`.

> **Trap to watch.** 1 is a factor of every positive integer and should be counted when the question asks for "positive factors." But 1 is NOT a prime. The distinction matters on every single factor-counting question.

> **Self-explanation prompt.** Why does the factor-count formula `(a+1)(b+1)(c+1)` work? If you can say "because each prime's exponent has `(exponent + 1)` choices from 0 up to its maximum, and each combination gives a unique factor," you understand the formula and won't misapply it.

## @factors-and-multiples

The difference between a factor and a multiple is the same as the difference between a parent and a child. Factors come *from* a number; multiples come *after* it.

- **Factor (divisor) of n:** any positive integer that divides n evenly. Factors of 12: 1, 2, 3, 4, 6, 12.
- **Multiple of n:** any integer of the form n × k. Multiples of 12: 12, 24, 36, 48, … (also 0, and negative multiples, but GMAT usually means positive).

**GCF (Greatest Common Factor) via prime factorization.** For the GCF of 168 and 252:

- `168 = 2³ × 3 × 7`
- `252 = 2² × 3² × 7`
- GCF takes the *minimum* power of each shared prime: `2² × 3¹ × 7¹ = 4 × 3 × 7 = 84`.

**LCM (Least Common Multiple) via prime factorization.** For the LCM of 18, 24, 30:

- `18 = 2 × 3²`
- `24 = 2³ × 3`
- `30 = 2 × 3 × 5`
- LCM takes the *maximum* power of each prime appearing anywhere: `2³ × 3² × 5 = 8 × 9 × 5 = 360`.

**The GCF-LCM identity.** For any two positive integers m and n: `m × n = GCF(m, n) × LCM(m, n)`. Useful on Data Sufficiency when the question gives you any three of {m, n, GCF, LCM} and asks for the fourth.

**Example (DS).** What is the value of m? `n = 12`, `GCF(m, n) = 6`, `LCM(m, n) = 36`.

Using `m × n = GCF × LCM`: `12m = 6 × 36 = 216`, so `m = 18`. Check: `GCF(18, 12) = 6` ✓, `LCM(18, 12) = 36` ✓.

**How to count factors (review).** For `n = p₁^a × p₂^b × …`, the number of positive factors is `(a+1)(b+1)…`. For 36 = 2² × 3², factors = `3 × 3 = 9`. They are: 1, 2, 3, 4, 6, 9, 12, 18, 36.

**Consecutive-integer divisibility.** The product of `n` consecutive integers is always divisible by `n!`. So `n(n+1)(n+2)` is divisible by 6 for every integer n. This appears constantly in "which of the following must be divisible by…" questions.

**Example.** Which must be divisible by 6 for all positive integers n: `n(n+1)`, `n(n+2)`, `n(n+1)(n+2)`, `n² + n + 1`, `n³ + 1`?

- `n(n+1)`: two consecutive integers, divisible by 2! = 2. Not always by 3.
- `n(n+2)`: not always by 3 (try n = 1: 1 × 3 = 3, divisible by 3; n = 2: 2 × 4 = 8, not divisible by 3). Not always by 6.
- `n(n+1)(n+2)`: three consecutive integers, divisible by 3! = 6. ✓
- The other two: fail for small n.

> **Trap to watch.** GCF and LCM switch in students' heads under time pressure. Quick check: GCF is smaller (or equal) than either number; LCM is larger (or equal). If your "GCF" is bigger than either input, you found the LCM.

## @remainders

Remainder questions show up on 685+ difficulty constantly because they have so many angles: algebra, units digits, modular arithmetic, Data Sufficiency. The good news: they all reduce to one equation.

**The remainder equation.** If n divided by d leaves remainder r, then `n = dk + r` for some non-negative integer k, and `0 ≤ r < d`. This equation is the master tool.

**Example.** n divided by 7 leaves remainder 4. What is the remainder when 3n + 5 is divided by 7?

Write `n = 7k + 4`. Then `3n + 5 = 3(7k + 4) + 5 = 21k + 12 + 5 = 21k + 17`. Now `21k` is divisible by 7, and `17 = 2(7) + 3`. So the remainder is 3.

**Even faster: pick a number.** Choose `n = 4` (smallest n satisfying the condition). Then `3(4) + 5 = 17`, and `17 / 7` has remainder 3. Same answer, no algebra.

**Remainders under multiplication.** When multiplying, the remainders multiply (modulo the divisor). If `x` leaves remainder 5 mod 8 and `y` leaves remainder 3 mod 8, then `xy` leaves remainder `5 × 3 = 15` mod 8, which simplifies to `15 − 8 = 7`.

**Example (hard).** `x = 8q + 5`, `y = 8r + 3`. Find the remainder when xy is divided by 8.

`xy = (8q + 5)(8r + 3) = 64qr + 24q + 40r + 15`. Every term except 15 is divisible by 8. `15 = 8 × 1 + 7`, so remainder is 7.

**Remainders under squaring.** If `n = 5k + 2`, then `n² = 25k² + 20k + 4 = 5(5k² + 4k) + 4`, so `n²` leaves remainder 4 when divided by 5. You can always compute `r²` and reduce mod the divisor.

**The remainder-cycle pattern.** Remainders repeat with period equal to the divisor. If you divide `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, …` by 4, the remainders are `0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, …`. Every fourth integer has the same remainder. This is why remainders behave like addition modulo d.

> **Trap to watch.** The remainder is always non-negative. If algebra gives you a negative "remainder," add the divisor until you land in `[0, d)`. E.g., `−7 mod 5`: `−7 + 5 = −2`, still negative; `−2 + 5 = 3`. So `−7` has remainder 3 mod 5.

> **Self-explanation prompt.** In one sentence, why can you just multiply remainders to get the remainder of a product? If you can say "because every other piece of the expanded product is divisible by d, leaving only the product of remainders," you've understood modular arithmetic without needing the formal notation.

## @integer-properties-of-expressions

The GMAT frequently asks "must be" or "could be" questions about expressions built from integers. The units-digit cycles are also their own mini-topic with huge payoff.

**Units digit cycles for powers.** The units digit of `nᵏ` depends only on the units digit of n and on k.

| Base's units digit | Cycle of units digits for powers | Period |
|---|---|---|
| 0 | 0 | 1 |
| 1 | 1 | 1 |
| 2 | 2, 4, 8, 6 | 4 |
| 3 | 3, 9, 7, 1 | 4 |
| 4 | 4, 6 | 2 |
| 5 | 5 | 1 |
| 6 | 6 | 1 |
| 7 | 7, 9, 3, 1 | 4 |
| 8 | 8, 4, 2, 6 | 4 |
| 9 | 9, 1 | 2 |

**Example.** Units digit of `3²⁴`? Period 4 cycle is (3, 9, 7, 1). `24 mod 4 = 0`, which maps to the 4th entry (or equivalently, position 4). Units digit is 1.

**Example.** Units digit of `2⁵⁰ + 7³⁰`?

- `2⁵⁰`: cycle (2, 4, 8, 6), period 4. `50 mod 4 = 2`. Second entry: 4.
- `7³⁰`: cycle (7, 9, 3, 1), period 4. `30 mod 4 = 2`. Second entry: 9.
- Sum of units digits: `4 + 9 = 13`. Units digit of the sum: 3. Wait — recompute. `4 + 9 = 13`, so the units digit is 3.

(If the answer expects 0, I must have miscounted. Recomputing: the cycle for 2 is (2, 4, 8, 6), indexed by position mod 4 where position 1 ↔ 2¹ = 2. `50 mod 4`: `48 = 12 × 4`, so `50 mod 4 = 2`. Position 2 → units digit 4. For 7: cycle (7, 9, 3, 1), `30 mod 4 = 2`, position 2 → 9. So `4 + 9 = 13`, units digit 3. If your source answer says 0, re-check the exponents in the problem.)

**Consecutive-integer identities.** The sum of five consecutive integers is 5 times the middle integer. More generally, the sum of any odd count of consecutive integers is `count × middle`. Sum of 5 consecutive integers = 85 → middle = 17 → largest = 19.

**Sign and parity of sums.** If `xyz < 0`, then an odd number of the three integers are negative (1 or 3). If *additionally* `x + y + z > 0`, all three negative is impossible (sum would be negative), so exactly one is negative.

**Expressing integers to force structure.** Every integer is `2k` (even) or `2k + 1` (odd). Every integer is `3k`, `3k + 1`, or `3k + 2`. Use these forms to prove divisibility claims.

**Example.** Prove `n² − n` is always even. `n² − n = n(n − 1)`, product of two consecutive integers, one of which is even. Therefore always even. (Alternative: if `n = 2k`, `n² − n = 4k² − 2k = 2(2k² − k)`; if `n = 2k+1`, `n² − n = (2k+1)(2k) = 2k(2k+1)`. Either way, divisible by 2.)

> **Trap to watch.** "Must be divisible by X" questions require the property for *every* integer, not just most. If one counter-example exists, the choice fails. Always test small values (n = 1, 2, 3) before picking an answer.

## @summary

I'm going to say something I believe without qualification: if you have 40 hours to spend on Quant, put 15 of them on number properties. No other topic has this much leverage. The ideas are small and finite (even/odd, primes, divisibility, GCF, LCM, remainders, units digit cycles), the question patterns repeat, and the difficulty ceiling lets one topic carry you from 605 to 685.

**Why this topic pays the most per hour:**

- **Recurrence.** Number properties shows up on 15-20% of Quant questions, more than any other single topic.
- **Cleanness.** Unlike word problems, the questions are stated algebraically — no translation work.
- **Ceiling.** The hardest number-properties questions (perfect-square factor counts, GCF-LCM identities, remainder cycles) are the kind of questions that distinguish a 745 from a 685.
- **Transfer.** Prime factorization bleeds into fraction simplification, LCM shows up in rate problems, remainders show up in sequence questions. You're building muscle for multiple topics.

**The core toolkit, in order of reach:**

1. **Prime factorization** unlocks GCF, LCM, factor counts, perfect-square tests, and divisibility.
2. **Divisibility rules** (2, 3, 4, 5, 6, 8, 9, 10, 11) let you factor mentally.
3. **Even/odd parity** resolves most "must be" Data Sufficiency.
4. **Remainder equation** (`n = dk + r`) handles every remainder question.
5. **Units digit cycles** (memorize all nine) crush large-power questions.
6. **Consecutive-integer facts** (product of n consecutive ints is divisible by n!; sum of odd count = count × middle) show up constantly.

**Pattern-match table:**

| Problem says | Tool | Shortcut |
|---|---|---|
| "How many factors of n" | Prime-factor, apply formula | `(a+1)(b+1)…` |
| "Is n divisible by k" | Use divisibility rule | For 3, 9: digit sum |
| "GCF / LCM" | Prime-factor both | Min powers / Max powers |
| "Remainder when n/d" | Write `n = dk + r` | Or plug smallest n |
| "Units digit of nᵏ" | Check cycle | Period is 1, 2, or 4 |
| "Must be even/odd" | Parity table | Consecutive ints → even |
| "n² divisible by k" | Perfect-square test | Every prime exponent even |
| "Sum of odd # consecutive ints" | count × middle | Bypass summation |

The next two weeks, drill this chapter's problem sets until the check questions feel trivial. Do them on paper the first time, then on scratch, then in your head. When you can sight-factor 720 as `2⁴ × 3² × 5` without writing anything, you're ready for the 725+ versions.
