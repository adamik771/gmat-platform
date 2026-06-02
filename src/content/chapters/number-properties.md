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
    intro: |
      Even and odd feel elementary until the GMAT pairs them with Data Sufficiency: "is n even?" becomes genuinely hard when n could be 0, or when the expression is k² + k rather than k itself. This section gives you a two-second parity table, the consecutive-integer patterns that recur constantly, and the specific DS traps that catch students who learned the rules but not when they fail.
    check_question_ids:
      - number-properties-q2
      - number-properties-q17

  - id: divisibility-rules
    type: reading
    title: "Divisibility rules — the shortcuts you can't afford to rederive"
    intro: |
      You will never be asked to state a divisibility rule on the GMAT. You need them anyway — because checking that a number's digit sum is divisible by 9 takes one second, while long-dividing a three-digit number takes fifteen. These nine rules are the mental shortcuts that let you factor fast enough to spend your two minutes thinking, not computing.
    check_question_ids:
      - number-properties-q5
      - number-properties-q9

  - id: primes-and-prime-factorization
    type: reading
    title: "Primes and prime factorization — the atomic structure of integers"
    intro: |
      Prime factorization is not a topic — it is a technique that unlocks GCF, LCM, factor counts, perfect-square tests, and divisibility questions. All of them reduce to the same move: factor, then take minimum or maximum exponents. This section gives you the factorization reflex, the fifteen primes under 50 you should recognize on sight, and the factor-counting formula that solves an entire class of 685+ questions in under 30 seconds.
    check_question_ids:
      - number-properties-q1
      - number-properties-q8

  - id: factors-and-multiples
    type: reading
    title: "Factors, multiples, GCF, and LCM"
    intro: |
      GCF and LCM are the two most-confused tools in number properties — students swap the algorithms and get a number that's too large or too small. One identity (m × n = GCF × LCM) connects them so tightly that knowing any three of {m, n, GCF, LCM} gives you the fourth. That identity appears on Data Sufficiency more than any other single GCF/LCM fact.
    check_question_ids:
      - number-properties-q3
      - number-properties-q13

  - id: remainders
    type: reading
    title: "Remainders — modular arithmetic, GMAT-style"
    intro: |
      Remainder questions appear at 685+ difficulty at a disproportionate rate — they look ad hoc until you see the master equation: n = dk + r. Once you have that template, every variant (multiplication of remainders, remainder after squaring, "what values could n take?") is the same move. This section gives you the algebraic approach and a faster pick-a-number shortcut that handles most GMAT remainder questions in under 30 seconds.
    check_question_ids:
      - number-properties-q4
      - number-properties-q12

  - id: integer-properties-of-expressions
    type: reading
    title: "Integer properties of expressions and units digits"
    intro: |
      Two skills live here that look unrelated: units-digit cycles (which turn a question about 7⁴³ into a one-second lookup) and the "must be / could be" framework for integer expressions. The connection is that both require tracking a single, small property — units digit or parity — through an expression without computing the whole thing. That meta-skill is what separates students who answer 705+ questions cold from those who expand everything and hope the arithmetic works out.
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

**Mental model.** Number properties are labels on integers — even, odd, prime, divisor, factor, multiple, remainder. Most questions reduce to "given these labels on these numbers, what's also true?" The work is keeping the labels straight; the arithmetic is rarely hard. Errors here are almost always definitional confusion (forgetting 0 is even, that 1 isn't prime, that GCF is smaller than its inputs), not computational.

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

**Trap to watch.** Zero is even. Students forget this constantly on Data Sufficiency. "Is k even?" with `k = 0` is YES. The integer 0 is also divisible by every integer except 0 itself.

**Negative integers have parity too.** −6 is even (−6 = 2 × (−3)). −7 is odd. The GMAT sets traps where k could be negative — don't restrict parity reasoning to positive integers.

**Parity in DS — three patterns to recognize on sight.**

*Chained deduction.* "If a + b is even and b + c is odd, is a + c even or odd?" Since a + b is even, a and b have the same parity. Since b + c is odd, b and c have different parity. Therefore a and c have different parity → a + c is **odd**. These chain problems always resolve — follow the parity through each constraint one step at a time.

*Product forces parity.* "If n² is even, is n even?" Yes — odd × odd = odd, so n² being even forces n to be even. Sufficient. But "n³ − n is even" is useless as a DS statement: n³ − n = n(n−1)(n+1), the product of three consecutive integers, which is always even regardless of n. A statement that holds for every integer gives DS no discriminating power.

*Factor before applying parity.* When an expression looks complex — say, k⁴ − k² — factor it first: k²(k²−1) = k²(k−1)(k+1). Now you can apply parity rules factor by factor. Trying to reason about k⁴ − k² as a whole leads to errors; factored form makes the structure visible.

> **Self-explanation prompt.** Why is the product of any two consecutive integers always even? If you can say "because one of them is even, and even times anything is even," you've internalized the pattern well enough to recognize `k(k+1)` in disguise on the test.

**Micro-drill.** m is even, n is odd. State whether each expression *must* be even, *must* be odd, or *could be either* — 60 seconds total:

1. m + n + 1 → ___
2. mn + m → ___
3. n² + 2n → ___
4. (m + 1)² → ___

Answers: (1) **even** — even + odd + odd = even. (2) **even** — mn contains m's factor of 2; m is even; even + even = even. (3) **odd** — n² = odd × odd = odd; 2n = even; odd + even = odd. (4) **odd** — m + 1 is odd; odd² = odd. If you missed (3), the chain is: odd² stays odd, and odd + even = odd. If you missed (4), note that squaring preserves parity — only even numbers stay even when squared; odd numbers stay odd.

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

**Trap to watch.** A number divisible by 6 is divisible by 3 *and* 2. But divisibility by 8 is NOT "divisible by 4 twice" — 12 is divisible by 4 but not by 8. The rule only composes cleanly when the factors are coprime.

**GMAT application — composing divisibility for harder questions.**

The GMAT doesn't ask you to recite a divisibility rule. It asks things like "Is integer k divisible by 36?" in DS, or "The 4-digit number 2,A14 is divisible by 9 — what is A?" The rules matter because they let you answer in one second rather than long-dividing.

**Composing divisibility.** To confirm "k is divisible by n," every prime power in n's factorization must appear at least as strongly in k's. The shortcut: if gcd(a, b) = 1, then "k divisible by a AND by b" implies "k divisible by a × b." When gcd(a, b) ≠ 1, use LCM instead of the product.

- Divisible by 4 AND by 9? → gcd(4, 9) = 1 → divisible by 36. ✓
- Divisible by 6 AND by 10? → gcd(6, 10) = 2 ≠ 1 → divisible by LCM(6, 10) = 30. (Not 60.)

**Worked example (DS).** Is integer k divisible by 24?

Statement (1): k is divisible by 8 and by 3.

24 = 2³ × 3. Divisible by 8 supplies 2³; divisible by 3 supplies 3. Together they guarantee 2³ × 3 = 24. Sufficient.

Statement (2): k is divisible by 4 and by 6.

LCM(4, 6) = 12. The two statements together guarantee only that k is divisible by 12. Counterexample: k = 12. Not sufficient.

Answer: A. The trap in Statement (2) is computing 4 × 6 = 24 and concluding "sufficient" — but divisibility doesn't multiply; you need the LCM.

**Micro-drill.** No long division — apply the rules directly. State yes or no:

1. Is 576 divisible by 9? → ___
2. Is 1,848 divisible by 8? → ___
3. Is 4,653 divisible by 3? → ___
4. Is 3,432 divisible by 11? → ___

Answers: (1) **Yes** — digit sum 5+7+6=18, divisible by 9. (2) **Yes** — last three digits are 848; 848 ÷ 8 = 106. (3) **Yes** — digit sum 4+6+5+3=18, divisible by 3. (4) **Yes** — alternating sum from right: 2−3+4−3=0, and 0 is divisible by 11. If (2) slowed you down, the last-three-digits rule for 8 is the one worth drilling — find the three digits, divide by 8, done.

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

**Trap to watch.** 1 is a factor of every positive integer and should be counted when the question asks for "positive factors." But 1 is NOT a prime. The distinction matters on every single factor-counting question.

> **Self-explanation prompt.** Why does the factor-count formula `(a+1)(b+1)(c+1)` work? If you can say "because each prime's exponent has `(exponent + 1)` choices from 0 up to its maximum, and each combination gives a unique factor," you understand the formula and won't misapply it.

**Micro-drill.** No calculator — 90 seconds total:

1. How many positive factors does 720 have? → ___
2. List all primes between 40 and 55. → ___
3. What is the smallest positive integer n such that n² is divisible by 180? → ___

Answers: (1) **30** — 720 = 2⁴ × 3² × 5; factor count = (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30. (2) **41, 43, 47, 53** — eliminate composites: 45 = 9×5, 49 = 7², 51 = 3×17; the four survivors are prime. (3) **n = 30** — 180 = 2² × 3² × 5. Since n² must have all even exponents, the single factor of 5 in 180 forces 5² into n², so 5 | n. Similarly 2 | n and 3 | n. Smallest such n = 2 × 3 × 5 = 30. Verify: 30² = 900 = 180 × 5. ✓

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

**Counting multiples in a range.** "How many integers from 1 to 200 are divisible by 7?" Divide and take the floor: ⌊200/7⌋ = 28.

For a range that doesn't start at 1 — "How many multiples of 7 from 50 to 200 inclusive?" — subtract the count below the range start:

⌊200/7⌋ − ⌊49/7⌋ = 28 − 7 = **21**

This formula handles "how many multiples" counting questions, probability problems ("what fraction of integers from 100 to 300 are divisible by 5?"), and every-nth-element sequence questions.

**Example.** How many integers from 100 to 300 inclusive are divisible by both 4 and 6?

Divisible by both means divisible by LCM(4, 6) = 12. Count: ⌊300/12⌋ − ⌊99/12⌋ = 25 − 8 = **17**.

Trap: using the product 4 × 6 = 24 instead of LCM gives ⌊300/24⌋ − ⌊99/24⌋ = 12 − 4 = 8 — wrong. Always use the LCM for "divisible by both" conditions.

**Trap to watch.** GCF and LCM switch in students' heads under time pressure. Quick check: GCF is smaller (or equal) than either number; LCM is larger (or equal). If your "GCF" is bigger than either input, you found the LCM.

> **Recall check.** Without looking back, state in one sentence each: how to compute GCF from two prime factorizations, how to compute LCM from two prime factorizations, and the GCF-LCM identity. Then test yourself: GCF and LCM of 30 and 45? (Prime-factor: `30 = 2 × 3 × 5`, `45 = 3² × 5`. GCF takes min powers: `3 × 5 = 15`. LCM takes max powers: `2 × 3² × 5 = 90`. Identity check: `30 × 45 = 1350 = 15 × 90`. ✓) If you had to peek for any of those three rules, re-read this section before moving on.

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

**Trap to watch.** The remainder is always non-negative. If algebra gives you a negative "remainder," add the divisor until you land in `[0, d)`. E.g., `−7 mod 5`: `−7 + 5 = −2`, still negative; `−2 + 5 = 3`. So `−7` has remainder 3 mod 5.

> **Self-explanation prompt.** In one sentence, why can you just multiply remainders to get the remainder of a product? If you can say "because every other piece of the expanded product is divisible by d, leaving only the product of remainders," you've understood modular arithmetic without needing the formal notation.

**Micro-drill.** Use the remainder equation or pick-a-number — 90 seconds total:

1. n leaves remainder 4 when divided by 6. What remainder does 3n − 1 leave when divided by 6? → ___
2. k leaves remainder 7 when divided by 9. What remainder does k² leave when divided by 9? → ___

Answers: (1) Pick n = 4. Then 3(4) − 1 = 11. 11 ÷ 6 = 1 R **5**. Algebraically: n = 6m + 4, so 3n − 1 = 18m + 12 − 1 = 18m + 11; since 18m + 6 is divisible by 6, remainder = 11 − 6 = **5**. (2) Pick k = 7. Then k² = 49. 49 ÷ 9 = 5 R **4**. Algebraically: k = 9m + 7, so k² = 81m² + 126m + 49; every term except 49 is divisible by 9, and 49 = 5(9) + 4, so remainder = **4**. The pick-a-number shortcut handles both in under 20 seconds — use algebra only when the problem is too abstract to plug in.

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

**How to find the cycle position.** Compute `exponent mod period`. The result gives the position in the cycle — except when the result is 0, which maps to the **last** position (not position zero; there is no zeroth entry).

**Example.** Units digit of `3²⁴`? Period 4 cycle is (3, 9, 7, 1). `24 mod 4 = 0` → last position (4) → units digit **1**. Verify: 3⁴ = 81, 3⁸ = 6561, 3¹² = 531441 — every multiple of 4 brings you back to 1. ✓

**Example.** Units digit of `7⁴³`? Cycle (7, 9, 3, 1), period 4. `43 mod 4 = 3` → third entry → units digit **3**.

**Example.** Units digit of `2⁵⁰ + 7³⁰`?

- `2⁵⁰`: cycle (2, 4, 8, 6), period 4. `50 mod 4 = 2` → second entry → **4**.
- `7³⁰`: cycle (7, 9, 3, 1), period 4. `30 mod 4 = 2` → second entry → **9**.
- Sum's units digit: `4 + 9 = 13` → **3**.

**Consecutive-integer identities.** The sum of n consecutive integers equals n times the middle term (when n is odd) — equivalently, `n × (first + last) / 2`.

**Example.** Sum of 5 consecutive integers is 85. Find the largest.

Middle × 5 = 85 → middle = 17 → largest = 17 + 2 = **19**. No variable needed.

**The product rule for consecutive integers.** The product of n consecutive integers is always divisible by n!. This appears in almost every "must be divisible by" question at the 685+ tier.

**Example.** For all positive integers n, must n(n+1)(n+2)(n+3) be divisible by 8?

Four consecutive integers → divisible by 4! = 24. Since 24 = 3 × 8, the product is always divisible by 8. ✓

**Sign and parity of products.** A product is negative if and only if it has an odd number of negative factors. If `xyz < 0`, then exactly 1 or 3 of {x, y, z} are negative.

**Example (Data Sufficiency).** If `xyz < 0`, is `xy` positive?

Statement (1): `z < 0`. With z contributing one negative factor, x and y together must contribute an even count of negatives (so the total stays odd). Even count means both positive or both negative — either way, `xy > 0`. Statement (1) is sufficient.

Statement (2): `x > 0`. Then y and z produce the odd-negative count. y and z could each be negative (making xy negative) or just one of them negative (making xy positive). Not sufficient.

Answer: **A**. The key move was using the odd-negative-count rule to constrain x and y.

**The "must be / could be" discipline.** For "must be" questions, the property must hold for every valid integer — one counter-example kills the choice. For "could be" questions, you only need one case where it holds. Reflex: test n = 0, 1, 2, −1 before trusting intuition.

**Example.** Must `n² − n` be even for all integers n?

Factor: `n² − n = n(n − 1)`, the product of two consecutive integers. Exactly one of them is even, so the product is always even. ✓

Alternative: if n = 2k, then `n² − n = 2k(2k−1)`, which contains 2k. If n = 2k+1, then `n² − n = (2k+1)(2k)`, which contains 2k. Either case gives a factor of 2.

**Trap to watch.** "Must be divisible by X" fails if any single integer breaks it. Test n = 1 or n = 2 before claiming "must be" — the GMAT will have placed a counter-example among the easy cases.

> **Self-explanation prompt.** Cover the units-digit cycle table. From memory, write out the cycles for bases ending in 2, 3, 7, and 8 — each is period 4. (Answers: 2 → 2,4,8,6 / 3 → 3,9,7,1 / 7 → 7,9,3,1 / 8 → 8,4,2,6.) Now apply them: units digit of `8¹⁰⁰⁰ + 3⁵⁰⁰`? (8¹⁰⁰⁰: 1000 mod 4 = 0 → last position → 6. 3⁵⁰⁰: 500 mod 4 = 0 → last position → 1. Sum's units digit: 6 + 1 = **7**.) If you couldn't reproduce the cycles, re-read the table before the problem sets — these turn 30-second questions into one-second questions on the 685+ tier.

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

**Score-band guide — where to focus.**

| Target score | Priority sub-skills |
|---|---|
| 605 or below | Even/odd parity table; divisibility rules for 2, 3, 4, 5, 9. Make these reflexive before anything else. |
| 605–645 | Add primes and the factor-count formula. Get factor-counting under 15 seconds for any three-prime number. |
| 645–685 | GCF/LCM and the product identity. Add the remainder equation. These question types appear consistently at this band. |
| 685–725 | Units-digit cycles and "must be / could be" DS. The defining questions at 685+ are DS problems about integer expressions. |
| 725+ | Perfect-square factor counts, remainder-of-products, multi-variable integer DS. Requires all of the above plus mental factoring under 60-second pressure. |

**What to do next.**

1. **Easy set first.** Run the six easy questions back-to-back, untimed. Goal: 100% accuracy with the right method (not lucky guesses). If you miss one, the issue is a definition you forgot — go back to the relevant reading section and re-do the recall prompt before moving on.
2. **Medium set, timed.** Eight questions, 2:00 average. Log every miss with the tool you used (factor count, divisibility rule, parity table, remainder equation, units cycle, GCF/LCM) — that tag is what tells you which sub-skill is still soft.
3. **Hard set, untimed first, then timed.** Six questions. On the first pass, take as long as you need; the goal is to *find* the trick, not race. On the second pass, time yourself — the gap between your two times is a measure of how much speed you'll gain by repetition alone.
4. **Error log review.** End the week by sorting your number-properties misses by sub-skill. The tag that has the most rows is your next focused drill. One sub-skill at a time, not all at once — even on the topic with the highest score-per-hour leverage, focus beats breadth.
