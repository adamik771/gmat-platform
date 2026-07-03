---
slug: quant-10-primes-remainders
title: "Number Properties: Primes & Remainders"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-09-divisibility-factors
summary: |
  Prime factorization as the atomic structure of integers, and GMAT-style remainder (modular) reasoning.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q86
      - number-properties-q14
  - id: primes-and-prime-factorization
    type: reading
    title: "Primes and prime factorization — the atomic structure of integers"
    check_question_ids:
      - number-properties-q62
      - number-properties-q82
  - id: remainders
    type: reading
    title: "Remainders — modular arithmetic, GMAT-style"
    check_question_ids:
      - number-properties-q77
      - number-properties-q25
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q15
      - number-properties-q31
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q90
      - number-properties-q18
---

## @primes-and-prime-factorization

Prime factorization is the single most useful technique in number properties. Almost every 685+ question involving factors, multiples, divisibility, GCD, LCM, or perfect squares yields to prime factorization in two lines. The reason is structural: primes are the **atoms** of the integers. Just as every molecule is built from a fixed set of elements, every integer above 1 is built from primes in exactly one way. Once you see an integer as its prime "molecule," questions that look like number-theory puzzles become bookkeeping on exponents. This section turns that idea into a reflex.

**What a prime is.** A positive integer greater than 1 whose only positive divisors are 1 and itself. 2 is the only even prime — every other even number has 2 as a third divisor. 1 is **not** prime (it has only one divisor, itself), and it is not composite either; it sits in its own category. Negative numbers and 0 are never prime — "prime" is defined only for integers greater than 1.

**The primes under 50, memorized:**

`2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47`

Fifteen primes. You should know all of them on sight. Students who have to test each odd number with the 3-rule and the 7-rule for every prime question are burning time they need elsewhere. Memorize the list as three rows of five and recite it cold until it is automatic.

**Two fast primality tests you still need.** Even with the list memorized, you will occasionally face a two-digit number above 50 (say, in a counting problem). To check whether a number N is prime, you only need to test prime divisors up to sqrt(N). For N under 100, sqrt(N) is under 10, so you only ever test 2, 3, 5, and 7. If none of those divide N, N is prime. Example: is 91 prime? It is odd (not 2), digits sum to 10 (not divisible by 3), does not end in 0 or 5, but 91 = 7 × 13, so **not** prime. (91 is the single most common "fake prime" the GMAT uses — burn it into memory.) The runners-up to know are 51 = 3 × 17, 57 = 3 × 19, 87 = 3 × 29, and 119 = 7 × 17; all four "look prime" but are not. Note that the divisibility-by-3 trap is sneaky in the 50s and 80s precisely because the digit sums (5+1=6, 8+7=15) are easy to skip past in a hurry.

> **Recall check.** Why do you only have to test prime divisors up to sqrt(N) when checking primality? (Because if N = a × b with a ≤ b, then a ≤ sqrt(N); a divisor larger than sqrt(N) always pairs with one smaller than sqrt(N), so a small divisor would already have appeared.)

**Counting primes in an interval.** "How many primes between 20 and 40?" Test odds only (every even greater than 2 is composite): 21 (= 3×7), 23 (prime), 25 (= 5²), 27 (= 3³), 29 (prime), 31 (prime), 33 (= 3×11), 35 (= 5×7), 37 (prime), 39 (= 3×13). Four primes: 23, 29, 31, 37. Notice the workflow: skip evens entirely, then for each odd run through the small primes 3, 5, 7 looking for a factor. This is far faster than testing each number from scratch. Watch the word "between" — on the GMAT it almost always means *strictly* between (endpoints excluded) unless the problem says "inclusive," so "primes between 2 and 11" gives {3, 5, 7} — neither 2 nor 11.

**Prime factorization.** Every positive integer greater than 1 has a unique prime factorization (this is the Fundamental Theorem of Arithmetic — "unique" is the load-bearing word). `360 = 2³ × 3² × 5`. `720 = 2⁴ × 3² × 5`. To find a factorization, build a factor tree: split the number into any two factors, then keep splitting each branch until every leaf is prime, and collect the leaves. For 360: 360 = 36 × 10 = (4 × 9) × (2 × 5) = (2² × 3²) × (2 × 5) = 2³ × 3² × 5. The path you take does not matter — uniqueness guarantees you land on the same answer.

**The factor count formula.** If `n = p₁^a × p₂^b × p₃^c × …`, the number of positive factors of n is `(a+1)(b+1)(c+1)…`. The logic: to *build* a factor, you independently choose how many copies of each prime to include — anywhere from 0 up to that prime's exponent. For p₁ that is `a+1` choices (0, 1, …, a), for p₂ it is `b+1` choices, and so on. Multiply the independent choices.

**Worked example.** How many positive factors does 720 have?

`720 = 2⁴ × 3² × 5¹`. Factor count `= (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30`. Note the often-forgotten `(1+1)` from the lone factor of 5 — every prime present, even with exponent 1, contributes a `(1+1) = 2` to the product. Drop it and you would wrongly get 15.

> **Recall check.** A number's prime factorization is `p² × q × r` for distinct primes p, q, r. How many positive factors does it have? (`(2+1)(1+1)(1+1) = 3 × 2 × 2 = 12`.)

**Perfect squares and prime factorization.** An integer is a perfect square if and only if **every exponent in its prime factorization is even**. `144 = 2⁴ × 3²` (both exponents even) → perfect square (= 12²). `72 = 2³ × 3²` (one odd exponent) → not a perfect square. The parallel rules are worth knowing together:

| Property of the integer | Condition on the exponents |
|---|---|
| Perfect square | every exponent even |
| Perfect cube | every exponent divisible by 3 |
| Both square and cube (perfect 6th power) | every exponent divisible by 6 |

A clean consequence worth memorizing: **a perfect square always has an odd number of factors**, and conversely any integer with an odd factor count is a perfect square. Why? `(a+1)(b+1)…` is odd only when every factor in the product is odd, which forces every exponent a, b, … to be even — exactly the perfect-square condition. This is the fastest way to handle "which of these has an odd number of factors" questions: the answer is whichever choice is a perfect square.

**Worked example (hard).** If `n²` is divisible by 72, what is the smallest positive integer n?

`72 = 2³ × 3²`. Here is the key insight: `n²` is a perfect square, so all of its exponents are even. But `n²` must contain at least `2³`, and the smallest *even* exponent that is at least 3 is 4. The 3² part is already an even exponent, so `n²` needs at least `2⁴ × 3²`. Taking the square root (halve each exponent), `n` must be divisible by `2² × 3 = 12`. Check: `12² = 144 = 72 × 2`. ✓ Smallest n is **12**. The general move — "round each required exponent *up* to the next even number, then halve" — solves an entire family of these problems.

**Counting special kinds of factors.** For `n = 2⁵ × 3⁴ × 5³`, how many factors are perfect squares? A factor looks like `2^a × 3^b × 5^c` with `0 ≤ a ≤ 5`, `0 ≤ b ≤ 4`, `0 ≤ c ≤ 3`. For it to be a perfect square, each of a, b, c must be **even**. a ∈ {0, 2, 4} → 3 choices. b ∈ {0, 2, 4} → 3 choices. c ∈ {0, 2} → 2 choices. Total: `3 × 3 × 2 = 18`. The same template counts perfect-cube factors (use exponents divisible by 3), odd factors (set every even prime's exponent to 0), and even factors (total factors minus odd factors).

**Worked example (odd / even factors).** For `n = 2⁴ × 3² × 5`, how many factors are odd, and how many are even?

For an **odd** factor, you may take *no* copies of 2, so fix the exponent of 2 at 0 and count the rest: choices for 3 are `(2+1) = 3`, for 5 are `(1+1) = 2`, giving `3 × 2 = 6` odd factors. Total factors `= (4+1)(2+1)(1+1) = 30`. **Even** factors are everything that is not odd: `30 − 6 = 24`. Naming the tactic: **count the complement.** Rather than counting even factors directly (messy — the exponent of 2 must be at least 1), count odd factors and subtract. This complement move appears all over GMAT counting.

> **Self-explanation prompt.** Why does the factor-count formula `(a+1)(b+1)(c+1)` work? If you can say "because each prime's exponent has `(exponent + 1)` independent choices, from 0 up to its maximum, and each distinct combination of choices produces a unique factor (by unique factorization)," you understand the formula and won't misapply it. Try saying the perfect-square version too: "I restrict each exponent's choices to the even values, then multiply the counts."

**Worked example (backsolving + factor count, hard).** A positive integer N has exactly 6 positive factors. Which of the following could be N? (A) 16 (B) 24 (C) 36 (D) 64 (E) 12

Tactic: **plug in the answer choices** and run the factor-count formula on each — the structure of the exponents is all that matters.
- (A) 16 = 2⁴ → (4+1) = 5 factors. No.
- (B) 24 = 2³ × 3 → (3+1)(1+1) = 8 factors. No.
- (C) 36 = 2² × 3² → (2+1)(2+1) = 9 factors. No.
- (D) 64 = 2⁶ → (6+1) = 7 factors. No.
- (E) 12 = 2² × 3 → (2+1)(1+1) = 6 factors. **Yes.**

Answer **(E)**. Strategic note: 6 factors as a product of "(exponent+1)" terms means either 6 = 6 (a single prime to the 5th, like 2⁵ = 32) or 6 = 3 × 2 (one prime squared times another prime, like 2² × 3 = 12). Knowing those two shapes lets you screen choices in seconds.

**Worked example (reverse-engineering the exponent shape, very hard).** A positive integer n has exactly 15 positive factors and is divisible by 18. What is the smallest possible value of n?

Start from the factor count. 15 = `(a+1)(b+1)…`, and 15 factors as either 15 = 15 (one prime: `p^14`) or 15 = 3 × 5 (two primes: `p² × q⁴`). The one-prime shape `p^14` cannot be divisible by 18 = 2 × 3² (it has only one prime), so n must have the shape `p² × q⁴`. Divisibility by 18 = 2¹ × 3² demands at least 2¹ and 3². With exponents restricted to {2, 4}, the prime 3 needs an exponent ≥ 2 → it can be the "²"; the prime 2 needs an exponent ≥ 1 → it must take the "⁴" (since the only available slots are exponent 2 or 4, and 2 already claimed the squared... let's be careful): we need 3² and 2¹, and the two exponents available are 2 and 4. Putting 3⁴ × 2² gives `81 × 4 = 324`; putting 3² × 2⁴ gives `9 × 16 = 144`. Both satisfy divisibility by 18. To **minimize**, put the *larger* exponent on the *smaller* prime: `2⁴ × 3² = 144`. Answer **144**. This combines two moves you must own at 700+: decode the factor count into exponent shapes, then assign the big exponents to the small primes to minimize.

> **Recall check.** You want the smallest integer with exactly 12 factors. 12 factors as (exp+1) products: which shape gives the smallest number — `2^11`, `2^5 × 3`, `2^3 × 3 × 5`, or `2² × 3 × 5`... wait, check the last? (`2² × 3 × 5` gives `3 × 2 × 2 = 12` factors and equals 60; `2² × 3¹ × 5¹` is the smallest. Put the *largest* exponents on the *smallest* primes to minimize the value.)

**Worked example (estimation + prime factorization).** Is 2,310 the product of the first five primes? Estimate, then confirm.

The first five primes are 2, 3, 5, 7, 11. Their product (called a "primorial") is `2 × 3 × 5 × 7 × 11`. Group for speed: `2 × 5 = 10`, then `× 11 = 110`, then `× 3 = 330`, then `× 7 = 2,310`. ✓ Yes. The tactic — **pair factors that make round numbers (here 2 × 5 = 10) first** — keeps the arithmetic clean and is a reliable estimation habit on no-calculator problems.

**GCD and LCM from prime factorizations.** Two more payoffs of the atomic view, common at 700+:
- **GCD (greatest common divisor):** for each prime, take the *lowest* exponent appearing in either number.
- **LCM (least common multiple):** for each prime, take the *highest* exponent appearing in either number.

Worked mini-example: for 360 = 2³ × 3² × 5 and 84 = 2² × 3 × 7, the GCD is `2² × 3 = 12` (lowest of each shared prime; primes not shared contribute exponent 0) and the LCM is `2³ × 3² × 5 × 7 = 2,520` (highest of every prime that appears). A useful sanity check: `GCD × LCM = product of the two numbers`, i.e. `12 × 2,520 = 30,240 = 360 × 84`. ✓ Caution: that identity (`GCD × LCM = product`) holds for **two** numbers only — it breaks for three or more, so do not extend it.

**Worked example (GCD/LCM, hard).** The LCM of two positive integers is 144 and their GCD is 4. If one number is 16, what is the other?

Use `GCD × LCM = product of the two numbers`: `4 × 144 = 16 × (other)`, so other `= 576 / 16 = 36`. Verify with factorizations: 16 = 2⁴, 36 = 2² × 3². GCD = lowest of each shared prime = 2² = 4 ✓ (3 isn't shared, so it contributes nothing to GCD). LCM = highest of every prime = 2⁴ × 3² = 16 × 9 = 144 ✓. Answer **36**. The two-number identity turned a "find the partner" puzzle into one division.

**Trap to watch.** 1 is a factor of every positive integer and **must** be counted when the question asks for "positive factors." But 1 is **not** a prime. The distinction matters on every single factor-counting question. Two close cousins of this trap: (a) a "prime number" must be greater than 1, so do not include 1 when counting primes in an interval; (b) the smallest prime is 2, and it is the *only* even prime — many "the number is prime, therefore odd" inferences are wrong precisely because the problem-setter is hoping you forgot 2. A third cousin: "n has exactly two factors" is just a coded way of saying "n is prime" — and the number itself plus 1 are always two of any integer's factors, so the statement is really telling you those are the *only* two.

**Common mistakes.**
- Forgetting the `(1+1)` term for a prime that appears only once (e.g., treating 720 = 2⁴ × 3² × 5 as if it had only the 2s and 3s) — this undercounts factors.
- Counting 1 as prime, or forgetting to count 1 as a factor.
- Forgetting that 2 is prime, leading to "prime ⇒ odd" errors.
- Confusing GCD with LCM — *lowest* exponents for GCD, *highest* for LCM. Mnemonic: **G**CD is **G**reatest *common* part (the overlap, so the smaller piece); LCM is the smallest number both divide *into* (so the larger build).
- In "smallest n with n² divisible by K" problems, halving K's exponents *before* rounding them up to the next even number. Always round the required exponent up to even **first**, then halve.
- When minimizing an integer with a fixed factor count, assigning the large exponents to large primes. Reverse it: large exponents go on the *small* primes.
- Treating "between a and b" as inclusive when the problem means strictly between (and vice versa) — read the boundary word every time.

**A procedure to memorize — the prime-factorization playbook:**
1. **Factor the number into primes.** Build a factor tree; collect leaves as `p₁^a × p₂^b × …`. Stop only when every leaf is prime.
2. **Read off what the question wants from the exponents.** Total factors → `(a+1)(b+1)…`. Perfect square → all exponents even (and factor count odd). Perfect cube → all exponents divisible by 3.
3. **For "special factor" counts,** restrict each exponent's allowed choices (even for square-factors, divisible-by-3 for cube-factors, fix the even prime at 0 for odd-factors) and multiply the surviving counts.
4. **For "smallest n such that n^k is divisible by K" problems,** factor K, raise each required exponent to the next multiple of k, then divide each exponent by k to recover n's exponents.
5. **For GCD/LCM,** line up the prime factorizations; take lowest exponents for GCD, highest for LCM. For two numbers only, sanity-check with `GCD × LCM = product`.
6. **To minimize an integer with a fixed factor count,** decode the count into exponent shapes, then put the *largest* exponents on the *smallest* primes.

**Micro-drill.** No calculator — 90 seconds total:

1. How many positive factors does 720 have? → ___
2. List all primes between 40 and 55. → ___
3. What is the smallest positive integer n such that n² is divisible by 180? → ___
4. How many positive factors of `600 = 2³ × 3 × 5²` are perfect squares? → ___
5. The GCD of two numbers is 6 and their LCM is 90. If one number is 18, what is the other? → ___

Answers: (1) **30** — 720 = 2⁴ × 3² × 5; factor count = (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30. (2) **41, 43, 47, 53** — eliminate composites: 45 = 9×5, 49 = 7², 51 = 3×17; the four survivors are prime. (3) **n = 30** — 180 = 2² × 3² × 5. Since n² must have all even exponents, the single factor of 5 in 180 forces 5² into n², so 5 | n; similarly 2 | n and 3 | n. Smallest such n = 2 × 3 × 5 = 30. Verify: 30² = 900 = 180 × 5. ✓ (4) **4** — a square factor `2^a × 3^b × 5^c` needs even a, b, c: a ∈ {0, 2} (2 choices), b ∈ {0} (1 choice, since 3's exponent is only 1), c ∈ {0, 2} (2 choices), giving 2 × 1 × 2 = 4 (they are 1, 4, 25, 100). (5) **30** — GCD × LCM = product, so 6 × 90 = 18 × other → other = 540 / 18 = 30. Check: 18 = 2 × 3², 30 = 2 × 3 × 5; GCD = 2 × 3 = 6 ✓, LCM = 2 × 3² × 5 = 90 ✓.

**Recap.** Primes are the atoms; every integer above 1 has a unique prime factorization. Memorize the fifteen primes under 50 and the fake-primes 91 = 7 × 13, 51 = 3 × 17, and 57 = 3 × 19. From the exponents you can read off almost everything the GMAT asks: total factor count via `(a+1)(b+1)…`, perfect squares (all exponents even, equivalently an odd factor count), perfect cubes (all divisible by 3), special-factor counts (restrict the exponent choices and multiply), and GCD/LCM (lowest vs. highest exponents). When a question fixes a power — "n² is divisible by K" — round each required exponent up to the next valid multiple, then divide. To minimize an integer with a target factor count, load the biggest exponents onto the smallest primes. Always count 1 as a factor but never as a prime, and never forget that 2 is prime. Factor first, then think; that single habit converts most 685+ factor questions into two clean lines.

## @remainders

Remainder questions show up on 685+ difficulty constantly because they have so many angles: algebra, units digits, modular arithmetic, layered constraints. The good news: they all reduce to one equation, and once you internalize that equation plus a handful of behaviors, the entire topic collapses into mechanical work. The reason remainders feel hard is that the GMAT phrases them in disguises — "when 3n+5 is divided by 7," "the units digit of 7^83," "the remainder when the product is divided by 8" — but underneath every disguise is the same structure. Learn the structure once and you stop being surprised. The 700+ scorer is not faster at long division; they have simply trained their ear to hear every remainder fact as the same sentence, and they police one tiny range constraint that everyone else forgets.

**The remainder equation.** If n divided by d leaves remainder r, then `n = dk + r` for some non-negative integer k, and `0 ≤ r < d`. This equation is the master tool. Everything else in this section is a consequence of it. The constraint `0 ≤ r < d` is doing real work: it says the remainder is never negative and never as large as the divisor. A "remainder of 7 when dividing by 5" is impossible — it would mean you failed to subtract another full 5.

Read the equation in both directions. Forward: given n, d, and k, you recover the original number. Backward, and more usefully on the GMAT: given the remainder r, you know n is "r more than a multiple of d." That phrase — *a multiple of d, plus r* — is how you should hear every remainder fact. "n leaves remainder 4 mod 7" means "n is a multiple of 7, plus 4," i.e. n is one of 4, 11, 18, 25, 32, …. Train this translation until it is automatic, because nearly every hard remainder problem is solved the instant you have rewritten its words as `n = dk + r`.

**Worked example.** (easy) When the positive integer n is divided by 9, the remainder is 5. What is the remainder when n + 13 is divided by 9?

Write `n = 9k + 5`. Then `n + 13 = 9k + 18 = 9(k + 2)`. That is a clean multiple of 9, so the remainder is 0. The lesson: adding 13 (which is itself `9 + 4`) shifted the remainder by 4, from 5 up to 9, and 9 wraps back to 0. You did not need a value of n at all.

**Worked example.** (easy–medium) n divided by 7 leaves remainder 4. What is the remainder when 3n + 5 is divided by 7?

Algebra route: write `n = 7k + 4`. Then `3n + 5 = 3(7k + 4) + 5 = 21k + 12 + 5 = 21k + 17`. Now `21k` is divisible by 7, and `17 = 2(7) + 3`. So the remainder is 3.

**Even faster — plugging in numbers.** This is the single most valuable tactic for remainder problems, so let me name it explicitly: **plugging in numbers**. Choose `n = 4` (the smallest n satisfying the condition — pick the remainder itself when you can). Then `3(4) + 5 = 17`, and `17 / 7` has remainder 3. Same answer, no algebra. Whenever a remainder question gives you a condition and asks for a derived remainder, the smallest legal value of the unknown almost always cracks it in ten seconds. One caution that separates careful test-takers from careless ones: when a problem hides *two or more* unknowns, plugging in a single convenient value can accidentally satisfy a wrong answer choice. If the question asks "which must be true," confirm with a second legal value (e.g. `n = 11` here) before trusting the plug-in.

> **Recall check.** A number leaves remainder 4 when divided by 7. In the phrase "a multiple of d plus r," what are the smallest three values the number could be? (4, 11, 18 — that is, 0·7+4, 1·7+4, 2·7+4.)

**Remainders under addition.** When you add two numbers, their remainders add (then reduce mod d). If x leaves remainder 5 mod 8 and y leaves remainder 6 mod 8, then x + y leaves remainder `5 + 6 = 11`, which reduces to `11 − 8 = 3` mod 8. This is just the equation again: `(8q+5) + (8r+6) = 8(q+r) + 11`, and the 11 carries one more 8 out.

**Remainders under multiplication.** When multiplying, the remainders multiply (modulo the divisor). If x leaves remainder 5 mod 8 and y leaves remainder 3 mod 8, then xy leaves remainder `5 × 3 = 15` mod 8, which simplifies to `15 − 8 = 7`.

**Worked example.** (medium) `x = 8q + 5`, `y = 8r + 3`. Find the remainder when xy is divided by 8.

`xy = (8q + 5)(8r + 3) = 64qr + 24q + 40r + 15`. Every term except 15 contains a factor of 8 (64, 24, 40 are all multiples of 8), so every term except 15 is divisible by 8. `15 = 8 × 1 + 7`, so the remainder is 7. Notice this matches the shortcut: multiply the remainders (5 × 3 = 15) and reduce (15 − 8 = 7). The expansion is there to convince you *why* the shortcut is legal, not to be done every time.

**Remainders under squaring.** Squaring is just multiplication of a number by itself, so the rule is "square the remainder, then reduce." If `n = 5k + 2`, then `n² = 25k² + 20k + 4 = 5(5k² + 4k) + 4`, so n² leaves remainder 4 when divided by 5. Equivalently, just compute `2² = 4` and reduce mod 5 (4 is already in range). For a bigger case: if n leaves remainder 6 mod 7, then n² leaves remainder `6² = 36 = 5·7 + 1`, so remainder 1 — even though 6 is large, the square reduces cleanly. The same principle covers any power: to find the remainder of n³, cube the remainder and reduce; for n⁵, raise the remainder to the fifth power and reduce. Operations on the number become the identical operations on its remainder.

> **Recall check.** x leaves remainder 4 mod 9 and y leaves remainder 5 mod 9. What remainder does xy leave mod 9? (Multiply the remainders: 4 × 5 = 20; reduce: 20 − 18 = 2.)

**The remainder-cycle pattern.** Remainders repeat with period equal to the divisor. If you divide `0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, …` by 4, the remainders are `0, 1, 2, 3, 0, 1, 2, 3, 0, 1, 2, 3, …`. Every fourth integer has the same remainder. This is why remainders behave like addition modulo d, and it is the engine behind two classic GMAT question types: units-digit cycles and "what is the remainder when a huge power is divided by d" problems. The trick is always to find the length of the cycle, then divide the exponent (or position) by the cycle length and use *that* remainder to locate your answer inside the cycle.

| Integer | 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 |
|---|---|---|---|---|---|---|---|---|---|
| Remainder mod 4 | 0 | 1 | 2 | 3 | 0 | 1 | 2 | 3 | 0 |

**Worked example.** (hard — cycle/estimation tactic) What is the remainder when 7^83 is divided by 5?

Do not compute 7^83. Instead find the cycle of remainders of powers of 7 mod 5. Reduce the base first: 7 leaves remainder 2 mod 5, so 7^83 has the same remainder as 2^83 mod 5. Now list powers of 2 mod 5: `2^1 = 2`, `2^2 = 4`, `2^3 = 8 → 3`, `2^4 = 16 → 1`, then `2^5 → 2` and it repeats. The cycle is `2, 4, 3, 1` with length 4. So the remainder of `2^83` depends only on where 83 lands in a cycle of 4: `83 = 4 × 20 + 3`, remainder 3, which points to the **third** entry of the cycle, `3`. So 7^83 leaves remainder **3** when divided by 5. The named tactic here is **cycle-and-reduce**: shrink the base, find the period, divide the exponent by the period, and read off the position.

One edge case that trips up even strong students: what if the exponent divides evenly by the cycle length? Suppose you needed `2^84 mod 5`. Then `84 = 4 × 21 + 0`, remainder 0 — and a remainder of 0 points to the **last** entry of the cycle, not the first. Here that is `1`. The mental rule: remainder 1 → first slot, remainder 2 → second slot, …, remainder 0 → final slot. Mishandling the "remainder 0" landing is one of the most common cycle errors at the 700 level.

**Worked example.** (hard — translate remainders, then combine) A positive integer n leaves remainder 0 when divided by 3 and remainder 2 when divided by 4. Which of the following must be true? (A) n is divisible by 6 (B) n is divisible by 12 (C) n is odd (D) n is divisible by 8 (E) n is divisible by 9

Divisible by 6 means divisible by both 2 and 3. The first condition gives divisibility by 3. The second, `n = 4k + 2 = 2(2k + 1)`, makes n even (divisible by 2) but leaves its "half" odd — so n is divisible by 2 yet not by 4. Combine: divisible by 3 and by 2, hence by 6, so **(A)** must hold. The rest fail: n need not be divisible by 4 (so not by 12 or 8), n is even (not odd), and nothing forces divisibility by 9. The smallest value satisfying both conditions is n = 6 (6/3 = 2 r0, 6/4 = 1 r2), and 6 is divisible by 6 but by none of 12, 8, or 9 — one clean counter-example kills every other choice. The discipline that wins here: translate each remainder condition into equation form before judging what's forced, then confirm with the smallest value that actually satisfies both.

**Worked example.** (hard — backsolving from answer choices) A positive integer n leaves remainder 3 when divided by 7 and remainder 4 when divided by 5. What is the smallest possible value of n? (A) 17 (B) 24 (C) 31 (D) 38 (E) 45

Two ways in. The structured way: list numbers that are `7k + 3`: 3, 10, 17, 24, 31, 38, … and find the first that also leaves remainder 4 mod 5. 3 → r3, 10 → r0, 17 → r2, 24 → r4 ✓. So 24. But on the test the faster move is **backsolving**: test the answer choices directly against both conditions, starting from the smallest. 17: 17/7 = 2 r3 ✓, 17/5 = 3 r2 ✗. 24: 24/7 = 3 r3 ✓, 24/5 = 4 r4 ✓. Done — **(B) 24**. Because the choices are sorted ascending and the question asks for the smallest, the first choice that passes both tests is the answer; you never need to look further. Backsolving turns a two-condition congruence problem into two division checks.

**Worked example.** (very hard — the "remainder caps the divisor" disguise) A positive integer n leaves remainder 5 when divided by the positive integer m, and n = 23. How many possible values of m are there? (A) 1 (B) 2 (C) 3 (D) 4 (E) 6

This one looks underspecified, but the remainder statement is secretly handing you a constraint: a remainder of 5 forces the divisor to exceed 5, so `m ≥ 6`. Translate: `n = mk + 5`, and with n = 23, `23 = mk + 5`, meaning `mk = 18` with `m ≥ 6`. The divisors of 18 that are at least 6 are 6, 9, and 18 — giving m = 6 (k = 3), m = 9 (k = 2), or m = 18 (k = 1). So there are **(C) 3** possible values. The trap the GMAT sets: it expects you to forget the free fact `m > 5`, list every divisor of 18 (including 1, 2, 3), and inflate the count. Writing `m ≥ 6` in your scratch the instant you read "remainder 5" is what keeps the candidate list correct.

> **Recall check.** To find the remainder of a large power like 3^100 mod 7, what is the three-step procedure? (Reduce the base mod 7 if helpful; find the cycle length of the powers' remainders; divide the exponent by the cycle length and read off the position given by that remainder — with remainder 0 pointing to the last slot.)

**Trap to watch — negatives.** The remainder is always non-negative. If algebra gives you a negative "remainder," add the divisor until you land in `[0, d)`. E.g., `−7 mod 5`: `−7 + 5 = −2`, still negative; `−2 + 5 = 3`. So −7 has remainder 3 mod 5. This bites when a problem involves subtraction, like "3n − 1": if your intermediate remainder comes out negative, you are not finished — you must roll it back into range by adding d.

**Trap to watch — the remainder caps the divisor.** If a number leaves remainder r when divided by d, then `d > r` always. So "n leaves remainder 5 when divided by m" silently tells you `m ≥ 6`. The GMAT loves to hide a constraint on the divisor inside a remainder statement (see the very-hard example above). If you read "remainder 5" and the divisor is unknown, immediately write `d ≥ 6` in your scratch — it is free information.

**Trap to watch — remainder 0 is still a remainder.** "n divided by d leaves no remainder" and "the remainder is 0" both mean d divides n exactly. Some students treat remainder 0 as a special non-case and mis-handle it; it is just the bottom of the legal range `[0, d)`. The same idea reappears in cycle problems, where an exponent divisible by the cycle length (remainder 0) lands on the *last* slot, not the first — a distinct but related "zero is real" trap.

> **Self-explanation prompt.** In one sentence, why can you just multiply remainders to get the remainder of a product? If you can say "because every other piece of the expanded product is divisible by d, leaving only the product of remainders," you've understood modular arithmetic without needing the formal notation.

**Procedure to memorize — any remainder problem.**

1. **Translate** every "n divided by d leaves remainder r" into `n = dk + r`, and note the hidden fact `d > r`.
2. **Decide the operation** being asked about: addition, multiplication, squaring, or a power.
3. **For add/multiply/square**, operate on the *remainders only*, then reduce the result mod d (subtract or add d until you are in `[0, d)`).
4. **For a large power**, reduce the base mod d, find the cycle length of the remainders, divide the exponent by that length, and read off the position the resulting remainder points to (remainder 0 → last slot in the cycle).
5. **If you can pick a number**, do — choose the smallest legal value (often r itself), compute concretely, and read the remainder. Use algebra only when the problem is too abstract to plug in; for "must be true" questions, confirm with a second value.
6. **Sanity-check the range**: confirm your final remainder satisfies `0 ≤ r < d`. If it is negative, add d; if it is ≥ d, subtract d.

**Common mistakes.**

- Leaving a remainder negative (e.g. reporting −2 instead of 3) — always roll it into `[0, d)`.
- Reporting a remainder equal to or larger than the divisor (e.g. "remainder 8 mod 8") instead of reducing to 0.
- Forgetting that "remainder r" forces the divisor to exceed r, and so missing the free constraint `d > r`.
- Trying to compute a giant power directly instead of using the cycle — burns time and invites arithmetic errors.
- In a cycle problem, sending an exponent whose remainder is 0 to the first slot instead of the last slot.
- Judging a remainder condition before translating it into `n = dk + r`, and — when two conditions are given — forgetting to check that they are mutually consistent before combining them.
- Over-using algebra when the smallest legal plug-in number would have finished the job in seconds — or under-using it, plugging in one value on a "must be true" question and trusting a coincidence.

**Micro-drill.** Use the remainder equation or plug in numbers — 90 seconds total:

1. n leaves remainder 4 when divided by 6. What remainder does 3n − 1 leave when divided by 6? → ___
2. k leaves remainder 7 when divided by 9. What remainder does k² leave when divided by 9? → ___
3. What is the remainder when 4^65 is divided by 7? → ___

Answers: (1) Pick n = 4. Then 3(4) − 1 = 11. 11 ÷ 6 = 1 R **5**. Algebraically: n = 6m + 4, so 3n − 1 = 18m + 12 − 1 = 18m + 11; since 18m + 6 is divisible by 6, remainder = 11 − 6 = **5**. (2) Pick k = 7. Then k² = 49. 49 ÷ 9 = 5 R **4**. Algebraically: k = 9m + 7, so k² = 81m² + 126m + 49; every term except 49 is divisible by 9, and 49 = 5(9) + 4, so remainder = **4**. (3) Cycle-and-reduce: powers of 4 mod 7 are `4^1 = 4`, `4^2 = 16 → 2`, `4^3 = 64 → 1`, then it repeats — cycle `4, 2, 1` of length 3. `65 = 3 × 21 + 2`, remainder 2, so read the **second** entry: **2**. The plug-in shortcut handles (1) and (2) in under 20 seconds each; the cycle method is the only sane way to do (3).

**Recap.** One equation, `n = dk + r` with `0 ≤ r < d`, generates the whole topic. Operations on numbers become operations on their remainders: add the remainders, multiply the remainders, square the remainder, then reduce mod d. Big powers reduce to a short repeating cycle — find the period, divide the exponent, read the position (remembering that a leftover of 0 lands on the last slot). When a concrete value is allowed, plug in the smallest legal number; when answer choices are sorted, backsolve. And police the range relentlessly: remainders never go negative, never reach the divisor, and quietly tell you the divisor must be larger than they are.
