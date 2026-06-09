---
slug: quant-09-divisibility-factors
title: "Number Properties: Divisibility, Factors & Multiples"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-08-even-odd-integer-properties
summary: |
  Divisibility shortcuts and the factor/multiple machinery that underlies a large share of Quant.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q7
      - number-properties-q8
  - id: divisibility-rules
    type: reading
    title: "Divisibility rules — the shortcuts you can't afford to rederive"
    check_question_ids:
      - number-properties-q5
      - number-properties-q9
  - id: factors-and-multiples
    type: reading
    title: "Factors, multiples, GCF, and LCM"
    check_question_ids:
      - number-properties-q3
      - number-properties-q13
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q9
      - number-properties-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q11
      - number-properties-q12
---

## @divisibility-rules

Every 685+ scorer has the full set of divisibility rules memorized. Not because the test asks you to *state* them — because they let you factor mentally at test-speed without scratch paper. When a question buries a factor of 3 inside a five-digit number, the scorer who knows the digit-sum rule has the answer before the slow solver has finished writing the long-division bracket. These rules are not trivia; they are the difference between a 90-second problem and a 30-second problem, and on a section where time is the binding constraint, that gap decides scores. Divisibility shows up everywhere on GFQ — in remainder questions, in number-properties Data Sufficiency, in factor-counting, in word problems where a quantity must split evenly into groups. You will not always *see* the word "divisible," but the underlying machinery is the same, so the payoff from owning this table is enormous.

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

Notice the *shape* of these rules, because the shape is what makes them memorable. Three of them — 2, 5, 10 — depend only on the **last digit**, because 10 = 2 × 5 and our number system is base 10. Two of them — 3 and 9 — depend on the **digit sum**, because 9 is one less than 10 and powers of 10 leave a remainder of 1 when divided by 9. Two of them — 4 and 8 — depend on a **block of trailing digits** (last two for 4, last three for 8), because 100 is divisible by 4 and 1000 is divisible by 8. And 11 uses the **alternating sum** because powers of 10 alternate between remainder 1 and remainder −1 modulo 11. You do not need to recite those reasons in the exam, but understanding *why* each rule looks the way it does means you will reconstruct it correctly under pressure instead of half-remembering it.

> **Self-explanation prompt.** Before reading on, say out loud in your own words why divisibility by 3 only needs the digit sum but divisibility by 4 needs the last two digits. (Hint: think about what 10, 100, and 1000 each leave behind when divided by 3 versus by 4.) Generating the explanation yourself — even imperfectly — locks the rule in far harder than reading mine.

**The 3-rule and 9-rule example.** Is `4A6` (a three-digit number with unknown digit A) divisible by 9?

Digit sum `= 4 + A + 6 = 10 + A`. For this to be divisible by 9, and A must be a single digit (0–9), we need `10 + A = 18`, so `A = 8`. Check: `486 / 9 = 54`. Confirmed. Note that `10 + A = 9` is impossible (A would be negative) and `10 + A = 27` is impossible (A would be 17, not a single digit), so A = 8 is the only solution.

**The 11-rule example.** Is 2431 divisible by 11?

Alternating sum from the right: `1 − 3 + 4 − 2 = 0`. Zero is divisible by 11 (by convention, every integer divides 0). So yes, 2431 is divisible by 11. Confirm: `2431 / 11 = 221`.

**The rules compose.** Divisibility by 12 = divisibility by 3 AND by 4. Divisibility by 15 = divisibility by 3 AND by 5. Divisibility by 36 = divisibility by 4 AND by 9 (not 6 × 6 = 36 via "divisible by 6 twice" — that would double-count the factor of 2). The rule: to check divisibility by `ab` where `gcd(a, b) = 1`, check both `a` and `b` separately. This composition is the real payoff of memorizing the small set, because it lets you handle divisors you have no direct rule for. There is no clean "divisibility by 18" trick — but 18 = 2 × 9 with 2 and 9 coprime, so you just check "even?" and "digit sum divisible by 9?" and you are done.

**The 7 rule exists but isn't worth memorizing.** The GMAT virtually never tests divisibility by 7 through a digit-manipulation rule. If you see "divisible by 7," just do the division — or, on a problem with answer choices, plug the choices in. Memorizing an obscure 7-rule earns you nothing on this test.

**Worked example (easy).** Is 7,254 divisible by 6?

Apply the composition rule for 6: check 2 and 3 separately.
1. Divisible by 2? Last digit is 4, which is even. Yes.
2. Divisible by 3? Digit sum `= 7 + 2 + 5 + 4 = 18`, and 18 is divisible by 3. Yes.

Both hold, so 7,254 is divisible by 6. Note you never divided 7,254 by anything — two glances at the rules settled it. (Confirm: `7254 / 6 = 1209`.)

**Worked example (medium — using the rule to *find* a digit).** The four-digit number `3,7B2` is divisible by 4. How many values of the digit B make this true?

The 4-rule depends only on the **last two digits**, which here are `B2`. So I need the two-digit number `B2` to be divisible by 4, for B from 0 to 9. List the candidates `02, 12, 22, 32, 42, 52, 62, 72, 82, 92` and test divisibility by 4: `12, 32, 52, 72, 92` all divide by 4 (they are 12 = 4×3, 32 = 4×8, 52 = 4×13, 72 = 4×18, 92 = 4×23), while `02, 22, 42, 62, 82` do not. So B can be `1, 3, 5, 7, 9` — **five values**. The leading digits `3, 7` were pure decoration; the 4-rule told you to ignore them entirely. Recognizing which digits matter *before* you start testing is the time-saver here. (Pattern bonus: a two-digit number ending in 2 is divisible by 4 exactly when its tens digit is odd — that is why 12, 32, 52, 72, 92 work and the even-tens-digit cases fail.)

> **Recall check.** Close your eyes. State — without looking — the divisibility rules for 3, 4, 8, 9, and 11. Now test yourself on a number: is 396 divisible by each of 2, 3, 4, 6, 9? (Answers: yes, yes, yes, yes, yes — 396 = 4 × 99 = 4 × 9 × 11. All five rules agree.) Retrieval practice beats re-reading on delayed tests — that's why this box is here instead of a re-summary.

**Worked example (medium — divisibility by 9 inside a sum).** If `N = 5 + 55 + 555 + 5555`, is N divisible by 9?

You could add: `5 + 55 + 555 + 5555 = 6170`. Now apply the 9-rule to the result: digit sum `= 6 + 1 + 7 + 0 = 14`, which is not divisible by 9. So N is **not** divisible by 9. The strategic point: when a problem hands you a clumsy sum and asks about divisibility, compute the sum once and let the digit-sum rule finish the job — you do not need to perform a single division. (Cross-check with the 3-rule: 14 isn't divisible by 3 either, so N isn't even divisible by 3, let alone 9.)

**Worked example (medium-hard — backsolving Data Sufficiency).** Here is the same machinery in a Data Sufficiency frame, where the named tactic is *test extreme cases*. Statement: "The three-digit number `5K1` is divisible by 3." Is K uniquely determined?

The 3-rule gives digit sum `= 5 + K + 1 = 6 + K`. For divisibility by 3, `6 + K` must be a multiple of 3; since 6 is already a multiple of 3, K itself must be a multiple of 3. The single-digit multiples of 3 are `0, 3, 6, 9` — four values, so K is **not** uniquely determined. The tactic of writing the digit sum as "known multiple of 3, plus the unknown" instantly reveals that the unknown alone carries the divisibility, which is exactly the kind of shortcut that turns a DS statement from a guess into a certainty. Had the statement instead fixed the number to be divisible by 9, the digit sum `6 + K` would need to hit 9 or 18, giving `K = 3` or `K = 12` (rejected) — a *unique* K = 3, and the answer flips.

**Worked example (hard — answer-choice elimination, *named tactic: estimation/elimination*).** Which of the following is divisible by both 8 and 9?

- (A) 4,104
- (B) 5,256
- (C) 6,318
- (D) 7,840
- (E) 9,612

Do not divide anything fully. Use the cheap rules to **eliminate**, hardest-or-rarest test first. Start with the 9-rule (digit sum), since it kills choices fast:
- (A) `4+1+0+4 = 9` divisible by 9
- (B) `5+2+5+6 = 18` divisible by 9
- (C) `6+3+1+8 = 18` divisible by 9
- (D) `7+8+4+0 = 19` not divisible — eliminate D
- (E) `9+6+1+2 = 18` divisible by 9

Four survivors. Now apply the 8-rule (last three digits divisible by 8) to A, B, C, E:
- (A) `104 / 8 = 13` passes
- (B) `256 / 8 = 32` passes
- (C) `318 / 8 = 39.75` fails — eliminate C
- (E) `612 / 8 = 76.5` fails — eliminate E

That leaves (A) and (B) both passing — which means the question as posed would have two answers, so a real GMAT item would tighten the choices. The *method* is the lesson: layering two cheap divisibility filters collapsed five candidates to a short list in seconds, without a single long division. When a question asks "divisible by X and Y," always filter on the more selective rule first. (For the record, on the real test you would expect exactly one survivor; here both 4,104 = 8 × 513 = 8 × 9 × 57 and 5,256 = 8 × 657 = 8 × 9 × 73 genuinely satisfy both rules.)

**Procedure to memorize — checking divisibility by any composite D:**

1. **Factor D into coprime prime powers.** Example: 72 = 8 × 9 (and gcd(8, 9) = 1). For 12, use 4 × 3; for 15, use 3 × 5; for 18, use 2 × 9.
2. **Apply each factor's rule independently** to the number. Last-digit rules for 2/5/10; digit-sum for 3/9; trailing-block for 4/8; alternating-sum for 11.
3. **Require *all* of them to pass.** The number is divisible by D only if every coprime factor divides it.
4. **Never split into non-coprime factors.** Checking 8 as "4 and 2" or 36 as "6 and 6" double-counts a prime and gives wrong answers.
5. **If no rule exists (e.g. 7, 13), just divide** — or backsolve the answer choices. Don't waste memory on rules the GMAT won't reward.

**Trap to watch.** A number divisible by 6 is divisible by 3 *and* 2. But divisibility by 8 is NOT "divisible by 4 twice" — 12 is divisible by 4 but not by 8. The rule only composes cleanly when the factors are coprime. The same trap hides in 36: it is 4 × 9 (coprime, valid), never 6 × 6. Whenever you decompose a divisor, run the gcd check in your head — if the two pieces share a prime, your decomposition is broken.

**Common mistakes.**
- **Using the wrong block length for 4 vs 8.** It's last *two* digits for 4, last *three* for 8. Swapping them is the single most frequent slip on these problems.
- **Confusing the 3-rule with the 9-rule.** A digit sum of 12 is divisible by 3 but *not* by 9. Both rules use the digit sum, but you must check it against the right divisor.
- **Botching the alternating sum for 11.** Add and subtract digits strictly in alternation; a sign error flips the answer. Anchor the sign at the rightmost digit (give it a `+`).
- **Decomposing into non-coprime factors** (8 → 4×2, 36 → 6×6) and double-counting a prime — see the trap above.
- **Forgetting that 0 is divisible by everything.** An alternating sum of 0, or a digit sum of 0, signals divisibility, not the absence of it.

> **Recall check.** Without peeking, answer: to test divisibility by 8, which digits do you look at, and what do you do with them? To test divisibility by 9? (For 8: the **last three** digits — form that three-digit number and divide it by 8. For 9: **sum all** the digits and check whether the sum is divisible by 9.) If you hesitated on either, re-read the rules table before the micro-drill.

**Micro-drill.** No long division — apply the rules directly. State yes or no:

1. Is 576 divisible by 9? → ___
2. Is 1,848 divisible by 8? → ___
3. Is 4,653 divisible by 3? → ___
4. Is 3,432 divisible by 11? → ___

Answers: (1) **Yes** — digit sum 5+7+6=18, divisible by 9. (2) **Yes** — last three digits are 848; 848 ÷ 8 = 106. (3) **Yes** — digit sum 4+6+5+3=18, divisible by 3. (4) **Yes** — alternating sum from right: 2−3+4−3=0, and 0 is divisible by 11. If (2) slowed you down, the last-three-digits rule for 8 is the one worth drilling — find the three digits, divide by 8, done.

**Recap.** Memorize the nine rules, but more importantly memorize their *shapes*: last-digit (2, 5, 10), digit-sum (3, 9), trailing-block (4, 8), alternating-sum (11). For any composite divisor, split it into **coprime** factors and demand that every factor's rule passes — never split into pieces that share a prime. When the rule meets an unknown digit, write the digit sum (or last-block) as "known part plus unknown" and let the unknown carry the divisibility — that move solves the "find the digit" and DS variants instantly. On answer-choice questions, layer the cheapest, most selective rules to eliminate fast instead of dividing, and backsolve when no rule exists. Skip a memory rule for 7; just divide. Master this and you factor at the speed the 685+ section demands — mentally, without scratch paper.

## @factors-and-multiples

The difference between a factor and a multiple is the same as the difference between a parent and a child. Factors come *from* a number; multiples come *after* it.

- **Factor (divisor) of n:** any positive integer that divides n evenly. Factors of 12: 1, 2, 3, 4, 6, 12.
- **Multiple of n:** any integer of the form n × k. Multiples of 12: 12, 24, 36, 48, … (also 0, and negative multiples, but GMAT usually means positive).

A clean mental picture: the factors of any number n live *between* 1 and n (bounded above by n itself), while the multiples of n run *from* n out to infinity (bounded below by n). Every positive integer is both a factor of itself and a multiple of itself — 12 is a factor of 12 and a multiple of 12. And 1 is a factor of *everything*, while 0 is a multiple of *everything*. Those edge cases (1, the number itself, and 0) are exactly where careless errors hide, so fix them now.

It also helps to see the two ideas as opposite directions on the same number line of divisibility. "a is a factor of b" and "b is a multiple of a" are literally the same statement read forwards and backwards: both mean b = a × k for some integer k. The GMAT loves to disguise one as the other — a problem that says "n is divisible by 6" is telling you, simultaneously, that 6 is a factor of n and that n is a multiple of 6. Train yourself to flip the phrasing instantly, because the wording in the stem rarely matches the wording you need to reason with.

> **Self-explanation prompt.** Before reading on, explain to yourself in one sentence why every prime number p has exactly two factors, while a number like 12 has six. (Because a prime is divisible only by 1 and itself — no middle factors exist; a composite like 12 = 2^2 × 3 has multiple primes and powers that combine into many divisors. That combinatorial "combining" is the engine behind the factor-counting formula below.)

**Prime factorization is the master key.** Almost every factor/multiple question collapses to one move: break each number into its prime building blocks. Once you have n = p1^a × p2^b × …, the GCF, the LCM, the count of factors, and most divisibility facts fall out mechanically. Do not skip the prime factorization to "save time" — it *is* the time-saver. The fastest way to factor is to peel off the smallest primes in order: try 2 repeatedly, then 3, then 5, then 7, and so on, until what remains is 1. For 360 that looks like 360 → 180 → 90 → 45 (three 2's), then 45 → 15 → 5 (two 3's), then a single 5, giving 2^3 × 3^2 × 5. You never have to guess large divisors; the small-prime ladder always terminates.

**GCF (Greatest Common Factor) via prime factorization.** For the GCF of 168 and 252:

- 168 = 2^3 × 3 × 7
- 252 = 2^2 × 3^2 × 7
- GCF takes the *minimum* power of each shared prime: 2^2 × 3^1 × 7^1 = 4 × 3 × 7 = 84.

The logic: a common factor can't contain more 2's than the *poorer* of the two numbers has. 168 only carries three 2's and 252 only carries two, so the shared part can use at most two. "Min power, only over shared primes" — a prime that appears in just one number contributes nothing to the GCF.

**LCM (Least Common Multiple) via prime factorization.** For the LCM of 18, 24, 30:

- 18 = 2 × 3^2
- 24 = 2^3 × 3
- 30 = 2 × 3 × 5
- LCM takes the *maximum* power of each prime appearing anywhere: 2^3 × 3^2 × 5 = 8 × 9 × 5 = 360.

The logic mirrors the GCF: to be a multiple of all three, the LCM must carry enough of each prime to cover the *greediest* demand. 24 demands three 2's, 18 demands two 3's, 30 demands a 5 — so the LCM stocks all of them: max power, over *every* prime that appears anywhere.

It is worth seeing the two rules side by side, because under time pressure the only thing you need to recall is which extreme to take:

| Quantity | Which primes? | Which exponent? | Size relative to inputs |
|---|---|---|---|
| GCF | only primes shared by **all** numbers | **minimum** | ≤ each input |
| LCM | every prime appearing in **any** number | **maximum** | ≥ each input |

**Worked example (easy — GCF and LCM together).** Find the GCF and LCM of 24 and 36.

- 24 = 2^3 × 3
- 36 = 2^2 × 3^2
- GCF = min powers = 2^2 × 3^1 = 4 × 3 = 12.
- LCM = max powers = 2^3 × 3^2 = 8 × 9 = 72.
- Sanity check with the identity below: 24 × 36 = 864, and GCF × LCM = 12 × 72 = 864. Match confirms both answers.

**The GCF-LCM identity.** For any two positive integers m and n: m × n = GCF(m, n) × LCM(m, n). Useful on Data Sufficiency when the question gives you any three of {m, n, GCF, LCM} and asks for the fourth. (Note: this two-number identity does *not* extend to three or more numbers — m × n × p ≠ GCF × LCM in general. Use it only for pairs.)

**Worked example (DS — using the identity to backsolve for a value).** What is the value of m? n = 12, GCF(m, n) = 6, LCM(m, n) = 36.

Using m × n = GCF × LCM: 12m = 6 × 36 = 216, so m = 18. Check: GCF(18, 12) = 6, LCM(18, 12) = 36. The identity turns a "find the number" puzzle into one division — that's the whole reason to memorize it. Named tactic: when a stem hands you three of the four quantities, **backsolve through the identity** rather than hunting for the number by trial; the algebra is a single step and leaves no room for arithmetic drift.

> **Recall check.** Without looking back, state in one sentence each: how to compute GCF from two prime factorizations, how to compute LCM from two prime factorizations, and the GCF-LCM identity. Then test yourself: GCF and LCM of 30 and 45? (Prime-factor: 30 = 2 × 3 × 5, 45 = 3^2 × 5. GCF takes min powers: 3 × 5 = 15. LCM takes max powers: 2 × 3^2 × 5 = 90. Identity check: 30 × 45 = 1350 = 15 × 90.) If you had to peek for any of those three rules, re-read the GCF/LCM blocks before moving on.

**How to count factors.** For n = p1^a × p2^b × …, the number of positive factors is (a+1)(b+1)…. For 36 = 2^2 × 3^2, factors = 3 × 3 = 9. They are: 1, 2, 3, 4, 6, 9, 12, 18, 36. Why (a+1)? Because when you build a factor, you independently choose how many copies of each prime to include — for the prime 2 in 36 you may take 0, 1, or 2 copies (three choices, hence 2 + 1), and likewise three choices for the 3. Multiply the independent choices: 3 × 3 = 9. This is just the counting principle in disguise.

**Worked example (medium — factor count and "perfect square" trick).** How many positive factors does 720 have, and how many of them are perfect squares?

- Prime-factor: 720 = 16 × 45 = 2^4 × 3^2 × 5.
- Total factors: add 1 to each exponent and multiply: (4+1)(2+1)(1+1) = 5 × 3 × 2 = 30.
- Perfect-square factors: a factor is a perfect square exactly when every prime's exponent is *even*. For 2^4 the even choices are 0, 2, 4 (three options); for 3^2 they're 0, 2 (two options); for 5^1 only 0 (one option, since 1 is not even). So 3 × 2 × 1 = 6 perfect-square factors. (They are 1, 4, 9, 16, 36, 144 — verify a couple to trust the method.)

The named tactic here: rather than listing all 30 factors and inspecting each, you *count by structure*. Translating "perfect square" into "all exponents even" and counting choices is far faster and immune to the omission errors that listing produces. The same structural move handles a "perfect cube" variant — there you'd count exponent choices that are multiples of 3 (0, 3, 6, …) for each prime.

**Worked example (medium-hard — backsolving a factor-count puzzle).** A positive integer N has exactly 6 positive factors and is divisible by both 2 and 3. What is the smallest such N?

We need an exponent pattern whose (a+1)(b+1)… product equals 6. The ways to factor 6: 6 = 6 (one prime to the 5th: p^5) or 6 = 3 × 2 (one prime squared times another prime: p^2 × q). Since N must be divisible by both 2 and 3, it needs at least two distinct primes, ruling out the single-prime p^5 form. So N has the shape p^2 × q. To minimize, put the larger exponent on the smaller prime: 2^2 × 3 = 12. Check: factors of 12 are 1, 2, 3, 4, 6, 12 — exactly 6, and 12 is divisible by 2 and 3. Answer: **12**. The tactic — *enumerate the possible exponent patterns from the target factor count, then minimize* — is the standard way these "build a number with k factors" items yield.

**Worked example (medium — estimation-free divisibility from the factorization).** Is 2^3 × 3^2 × 5 × 7 divisible by 28? By 45? By 50?

Do not multiply out (the product is 2520; you don't need that number). Instead, prime-factor the divisor and check that the big number stocks *at least* as much of each prime. 28 = 2^2 × 7; the number carries 2^3 and 7^1, both sufficient, so **yes**. 45 = 3^2 × 5; the number carries 3^2 and 5^1, both sufficient, so **yes**. 50 = 2 × 5^2; the number carries only 5^1 but 50 demands 5^2 — short one factor of 5, so **no**. Named tactic: **compare prime inventories** rather than dividing. "Divisible by d" means the dividend's exponent on every prime meets or beats d's exponent on that prime.

> **Recall check.** Without peeking: to test whether n is divisible by d using prime factorizations, what must be true of the exponents? (For every prime in d, n's exponent on that prime must be greater than or equal to d's exponent. If even one prime falls short, n is not divisible by d.)

**Consecutive-integer divisibility.** The product of n consecutive integers is always divisible by n!. So n(n+1)(n+2) is divisible by 3! = 6 for every integer n, and n(n+1)(n+2)(n+3) is divisible by 4! = 24. The intuition: among any 3 consecutive integers, one is a multiple of 3 and at least one is a multiple of 2 — so the product always carries a factor of 3 and a factor of 2, hence 6. This appears constantly in "which of the following must be divisible by…" questions.

**Worked example (hard — "must be divisible by" with the plug-in-numbers tactic).** Which must be divisible by 6 for all positive integers n: n(n+1), n(n+2), n(n+1)(n+2), n^2 + n + 1, n^3 + 1?

- n(n+1): two consecutive integers, always divisible by 2! = 2, but *not* always by 3 (n = 1 gives 2). Fails 6.
- n(n+2): not always by 3 — *plug in* n = 2: 2 × 4 = 8, not divisible by 3. Fails 6. (One counterexample is enough to kill a "must be" claim — that's the power of plugging in.)
- n(n+1)(n+2): three consecutive integers, always divisible by 3! = 6.
- n^2 + n + 1 = n(n+1) + 1: it's one more than an even number, so it's *odd*; an odd number can't be divisible by 6. Fails immediately.
- n^3 + 1: *plug in* n = 1 → 2, not divisible by 6. Fails.

Only n(n+1)(n+2) survives. Named tactic: on "must be divisible" questions, **plug in small numbers to eliminate** (a single counterexample kills a choice), and reserve the consecutive-integer theorem for the structural winner. You almost never need to prove the survivor from scratch once everything else is eliminated.

**Worked example (hard — LCM in a scheduling word problem).** Three lighthouses flash at intervals of 12, 18, and 30 seconds. They all flash together at time 0. After how many seconds do all three next flash together, and how many times do all three coincide in the first 6 minutes (excluding time 0)?

"All flash together again" means the smallest time that is a multiple of every interval — an LCM. Prime-factor: 12 = 2^2 × 3, 18 = 2 × 3^2, 30 = 2 × 3 × 5. Max powers: 2^2 × 3^2 × 5 = 4 × 9 × 5 = 180. So they coincide every **180 seconds** (3 minutes). In 6 minutes = 360 seconds, the coincidences (after time 0) fall at 180 and 360, so **2 times**. Recognizing "events that repeat and must line up" as an LCM cue — rather than grinding through timelines — is the whole skill these problems test.

> **Recall check.** Without peeking: the product of n consecutive integers is always divisible by what? And is n(n+1) guaranteed divisible by 6? (Answers: divisible by n factorial, i.e. n!; and no — n(n+1) is only two consecutive integers, guaranteed divisible by 2 but not 3, so not by 6.)

**Trap to watch.** GCF and LCM switch in students' heads under time pressure. Quick check: GCF is smaller (or equal) than either number; LCM is larger (or equal). If your "GCF" is bigger than either input, you found the LCM. Same reversal lurks in the count-of-factors formula — you *add 1 to each exponent before multiplying*; forgetting the "+1" (e.g. computing 4 × 2 × 1 = 8 instead of 5 × 3 × 2 = 30 for 720) is the single most common factor-counting error. A second trap: in word problems, "how often do events sync up" is an **LCM** cue while "largest equal-size group you can split things into" is a **GCF** cue — read for the direction (synchronizing upward vs. dividing down) before you reach for a formula.

**The procedure to memorize.** Given any GCF / LCM / count-of-factors task:

1. **Prime-factor every number** into the form p1^a × p2^b × …. Do not proceed until you have clean exponents.
2. **For GCF:** keep only primes shared by *all* numbers; take the **minimum** exponent of each.
3. **For LCM:** keep every prime that appears in *any* number; take the **maximum** exponent of each.
4. **For count of factors:** take each exponent, **add 1**, and multiply the results: (a+1)(b+1)….
5. **Sanity check** with m × n = GCF × LCM (two numbers only), and confirm GCF ≤ inputs ≤ LCM.

**Common mistakes.**
- Forgetting the "+1" in the factor-count formula (multiplying raw exponents).
- Swapping GCF and LCM — using min where max belongs or vice versa.
- Applying the m × n = GCF × LCM identity to *three or more* numbers (it holds only for pairs).
- On "must be divisible" items, declaring a choice valid because it works for n = 1 or n = 2 — *one* lucky value never proves a universal claim; only a counterexample disproves one.
- Testing divisibility by multiplying numbers out instead of comparing prime inventories — slower and error-prone; compare exponents instead.
- Treating 1 or the number itself as "not a factor," or forgetting 0 when a problem genuinely allows non-positive multiples.

**Recap.** Prime-factorize first, always. GCF = shared primes, min exponents. LCM = all primes, max exponents. Count of factors = product of (exponent + 1). For two numbers, product = GCF × LCM. Divisibility is a prime-inventory comparison: the dividend must meet or beat the divisor's exponent on every prime. The product of n consecutive integers is divisible by n!. And on "must be divisible by" questions, eliminate with small plug-ins and let the consecutive-integer theorem crown the survivor. Master these moves and the entire factor/multiple family — which underlies a large share of Quant — becomes mechanical.
