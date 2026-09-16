---
slug: quant-08-even-odd-integer-properties
title: "Number Properties: Even/Odd & Integer Properties"
section: Quant
estimated_minutes: 50
prerequisites:
  - quant-07-gcf-lcm-units-digits
summary: |
  The smallest ideas with the biggest payoff: even/odd behavior and the integer properties of expressions. Plugging in numbers is the master trick here.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - number-properties-q1
      - number-properties-q2
  - id: even-and-odd
    type: reading
    title: "Even and odd — the smallest ideas with the biggest payoff"
    check_question_ids:
      - number-properties-q52
      - number-properties-q56
  - id: integer-properties-of-expressions
    type: reading
    title: "Integer properties of expressions and units digits"
    check_question_ids:
      - number-properties-q11
      - number-properties-q16
  - id: summary
    type: summary
    title: "What to remember"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - number-properties-q3
      - number-properties-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - number-properties-q5
      - number-properties-q6
---

## @summary

- Track parity structurally: sums change with odd addends, while a product is odd only when every factor is odd.
- Represent consecutive integers algebraically and use their spacing, midpoint, and divisibility before expanding.
- Test edge cases such as zero and negative integers whenever a statement sounds universally true.

## @even-and-odd

Even and odd feel like elementary-school ideas. They're not — on the GMAT, they're a source of 725+ difficulty because test writers combine them with absolute value, exponents, and layered conditions. What separates students who get these right is not "more memorization" but a fluent internal table they can run through in two seconds. The questions are never hard arithmetic; they are hard *bookkeeping*, and bookkeeping is a skill you can drill until it's automatic.

**Mental model.** Number properties are labels on integers — even, odd, prime, divisor, factor, multiple, remainder. Most questions reduce to "given these labels on these numbers, what's also true?" The work is keeping the labels straight; the arithmetic is rarely hard. Errors here are almost always definitional confusion (forgetting 0 is even, that 1 isn't prime, that GCF is smaller than its inputs), not computational. Treat every variable in the problem as a sticker: the moment you read "m is even," mentally stamp m with a 2 (write m = 2a if it helps), and the moment you read "n is odd," stamp n with "leaves remainder 1" (write n = 2b + 1). The whole topic is bookkeeping on those stamps. If you find yourself doing real multiplication on an even/odd question, stop — you've left the labels and started grinding numbers, which is slower and more error-prone than the labels were ever meant to let you be.

**Where parity actually comes from.** Every integer is either 2a (even) or 2a + 1 (odd) for some integer a. That single fact generates the entire topic. You do not have to memorize the tables below as arbitrary rules — you can rederive any of them in five seconds from 2a and 2b + 1. For instance, even + odd = (2a) + (2b + 1) = 2(a + b) + 1, which is 2(something) + 1, the very definition of odd. Even × odd = (2a)(2b + 1) = 2[a(2b + 1)], a multiple of 2, so even. Run that derivation once for each row and the tables stop being rote — they become consequences. But on the clock you want them memorized cold, so here they are.

**The sum/difference table:**

- even + even = even
- odd + odd = even
- even + odd = odd

Subtraction behaves exactly like addition for parity, because subtracting is adding a negative and negating does not change whether a number is even or odd. So even − odd = odd, odd − odd = even, and so on — read the sum table and ignore the sign.

**The product table:**

- even × even = even
- even × odd = even
- odd × odd = odd

**One rule beats all of them: even wins multiplication; odd wins to flip addition.** Any product with at least one even factor is even. A sum or difference is odd if and only if it contains an odd number of odd terms. Said the way you will actually use it on test day: for products, *hunt for a single even factor* — find one and you're done, the product is even. For sums, *count the odd terms* — odd count means the sum is odd, even count (including zero) means the sum is even. Even terms in a sum are invisible; they never change the answer, so cross them out and only count the odds.

> **Recall check.** A sum of seven terms contains exactly four odd terms and three even terms. Is the sum even or odd? (Even — four is an even count of odd terms; the three even terms are invisible.)

**Worked example (the canonical "must be odd" form).** If m is even and n is odd, which of the following *must* be odd: m + 2n, mn, m^2 + n, 2m + 2n, m − n + 1?

- m + 2n: even + even = even. (2n is even regardless of n, because the factor 2 makes any product even.)
- mn: even × odd = even.
- m^2 + n: even + odd = odd. (Correct answer.)
- 2m + 2n: even + even = even.
- m − n + 1: even − odd + odd = even.

Only m^2 + n must be odd. Every GMAT even/odd question is built this way — translate each symbol, apply the table, pick the one that's forced to the stated parity. Notice the engine inside m^2 + n: m is even, so m^2 is even (even × even), and even + odd = odd. The exponent did nothing surprising because **squaring preserves parity** — even stays even, odd stays odd.

**Worked example (plugging in numbers — name the trick).** The cleanest tactic when you distrust the abstract tables is **plugging in numbers**: pick the simplest legal values, compute, and read the parity directly. Take the question above and let m = 2 (simplest even) and n = 1 (simplest odd):

- m + 2n = 2 + 2 = 4 → even
- mn = 2 → even
- m^2 + n = 4 + 1 = 5 → odd (correct answer)
- 2m + 2n = 4 + 2 = 6 → even
- m − n + 1 = 2 − 1 + 1 = 2 → even

Same answer, zero parity theory. The catch with plugging in: a single test case can confirm "this one is odd here," but for a strict *must be* claim you should sanity-check a second pair (say m = 4, n = 3) to be sure you didn't get lucky. For even/odd specifically, parity does not depend on *which* even or *which* odd you chose, so one clean pair is almost always enough — but know *why* it's enough, so you don't misapply the shortcut on a non-parity problem where the value really does matter. (Plugging in also doubles as **backsolving's cousin**: when a problem gives numeric answer choices, you can sometimes test each choice's parity against the constraints and eliminate the ones whose parity is impossible — more on that below.)

> **Recall check.** You plug in m = 2, n = 1 and an answer choice evaluates to 8. Which parity have you just confirmed, and is one test case enough to trust it for a "must be even" claim? (Even; and for *parity* questions one clean even/odd pair is enough because the result doesn't depend on which even or odd you picked — but verify a second pair if you have any doubt.)

**Worked example (answer-choice elimination by parity — name the trick).** Suppose a problem reduces to: "If x is an odd integer, the value of 3x + 5 must be which of the following? (A) 14 (B) 17 (C) 20 (D) 22 (E) 24." You don't need to solve for x at all. 3x is odd × odd = odd; odd + 5 (odd) = even. So 3x + 5 is **even**, which kills (B) instantly — it's the only odd choice. Among the even choices you'd test x-values, but the *parity screen* did half the work for free. This is **answer-choice tactics**: when choices differ in parity, compute the parity of the target expression first and delete every choice that can't match. On the real test, a 10-second parity check often eliminates two or three options before you do any real arithmetic.

**The expression trick: consecutive integers.** k(k+1) is always even because one of two consecutive integers must be even, and even times anything is even. k(k+1)(k+2) is always divisible by 3! = 6 because at least one factor is even and exactly one is divisible by 3. This generalizes — **the product of n consecutive integers is divisible by n!**. This single fact is the backbone of a huge fraction of hard "must be divisible by" questions, so commit it to memory now.

**Worked example (parity reasoning).** If k is an integer and 3k + 1 is even, which of the following must be odd? (A) k  (B) k + 1  (C) 2k  (D) k² + k  (E) 4k

Since 3k + 1 is even, 3k is odd, which forces k to be odd (an odd product 3 × k requires an odd k). Now screen the choices: (A) k is odd ✓; (B) k + 1 = odd + 1 = even; (C) 2k is even; (D) k² + k = k(k + 1), a product of consecutive integers, is **always** even no matter what k is; (E) 4k is even. Only **(A)** is forced odd. The trap is choice (D): k² + k *looks* like it should depend on k, but it is an *identity* — even for every integer k — so it can never be the odd one. Whenever an expression turns out to be even (or odd) for *all* integers, it carries no information about the specific value; recognizing those identities on sight saves you from testing them. Train yourself to ask, "Is this expression actually pinned by k, or is it the same parity for every k?"

> **Self-explanation prompt.** Why is the product of any two consecutive integers always even? If you can say "because one of them is even, and even times anything is even," you've internalized the pattern well enough to recognize k(k+1) — and its disguises like k^2 + k or n^2 − n — on the test.

**Worked example (parity behind a disguise).** If a and b are integers and ab is odd, which of the following must be even? (A) a + b  (B) 2a + 1  (C) ab  (D) a + 2  (E) 3a

A product ab is odd only when *every* factor is odd, so a and b are both odd. Now a + b = odd + odd = **even** (A). Check the rest: 2a + 1 is odd; ab is odd (given); a + 2 = odd + even = odd; 3a = odd × odd = odd. Only **(A)** is forced even. The recognition that matters: "ab is odd" is a *disguised* way of pinning both parities — once you translate it to "a and b are both odd," every choice's parity falls out mechanically. (The same goes for "a² + b² is even," another disguise for "a and b share a parity," which likewise forces a + b even.) The difficulty in these problems lives in the disguise, not the arithmetic.

> **Recall check.** A problem tells you "the product cd is even." Does that pin down both c and d, the way "cd is odd" pins both to odd? (No — "cd even" only forces *at least one* of c, d to be even; the other could be either. "cd odd" is the strong one, forcing *both* odd. Asymmetry to remember: odd product pins everything, even product pins almost nothing.)

**Worked example (parity with exponents — the hard tier).** If x and y are positive integers and x^y is odd, what must be true about x and y? Many students overthink the exponent. Use the product rule: x^y is just x multiplied by itself y times. A product is odd only if *every* factor is odd — so x must be odd. And y? It can be anything: 3^1 = 3 (odd), 3^2 = 9 (odd), 3^5 = 243 (odd). So the only forced conclusion is **x is odd; y is unrestricted**. Contrast with x^y *even*: that happens as soon as x is even, regardless of y, because one even factor poisons the whole product. The lesson: **an exponent never changes the parity of the base** — odd^anything is odd, even^(positive) is even.

**Trap to watch.** Zero is even. Students forget this constantly. "Is k even?" with k = 0 is YES. The integer 0 is also divisible by every integer except 0 itself. When a problem lets a variable equal 0, that is almost always the case the test writer is hoping you'll skip — actively test it. (And note the edge inside the exponent rule above: it said even^*positive* is even. 0 is not positive, and any nonzero base to the 0 power is 1, which is odd — so if an exponent could be 0, re-examine before you commit.)

**A second trap: negatives keep their parity.** −4 is even, −7 is odd. Parity is about divisibility by 2, which is sign-blind. When a problem allows negative integers, do not let the minus sign tempt you into a different parity bucket — −7 behaves exactly like 7 for every rule in this section.

**Procedure to memorize (run this on every even/odd question):**

1. **Stamp the givens.** Write each variable's parity beside it: even = 2a, odd = 2b + 1. If a variable's parity is unknown, mark it "?" and remember you may need both cases.
2. **Translate each expression term by term**, replacing every variable with its parity label.
3. **Resolve products first:** any product with at least one even factor is even; an all-odd product is odd. Coefficients count — a literal 2, 4, 6… in front of a term makes that whole term even.
4. **Then resolve the sum/difference:** cross out all even terms (they're invisible) and count the remaining odd terms. Odd count → odd; even count (including 0) → even.
5. **For "must be" questions, demand it holds for every legal case;** for "could be," one case suffices. When a variable is "?", check both parities before committing.
6. **Probe the edge cases — 0 and negatives — before finalizing.**

> **Recall check.** In step 4 of the procedure, what do you do with the even terms in a sum before counting? (Cross them out — they're invisible to parity; only the count of odd terms decides the result.)

**Common mistakes.**

- Forgetting 0 is even (the single most common miss in this topic).
- Treating subtraction differently from addition — it follows the exact same parity table.
- Believing a coefficient changes nothing: 2n is *always* even no matter what n is, and that even term then drops out of a sum.
- Thinking an exponent can flip parity — it can't; odd^k stays odd and even^k stays even (for positive k).
- Assuming "product is even" pins both factors — it only forces at least one to be even; only "product is odd" pins both to odd.
- Accepting a "must be" claim after one lucky example, or rejecting it without testing the easy counterexamples n = 0, 1, 2, −1.
- Trusting an expression that is secretly an identity (true for every integer), like "k^2 + k is even," as if it pinned the value down.

**Micro-drill.** m is even, n is odd. State whether each expression *must* be even, *must* be odd, or *could be either* — 60 seconds total:

1. m + n + 1 → ___
2. mn + m → ___
3. n^2 + 2n → ___
4. (m + 1)^2 → ___
5. m·n^5 + 3 → ___

Answers: (1) **even** — even + odd + odd = even. (2) **even** — mn contains m's factor of 2, so mn is even; m is even; even + even = even. (3) **odd** — n^2 = odd × odd = odd; 2n = even; odd + even = odd. (4) **odd** — m + 1 is odd; odd^2 = odd (squaring preserves parity). (5) **odd** — n^5 is odd (odd base, exponent can't change it), but m is even so m·n^5 is even; even + 3 (odd) = odd. If you missed (3), the chain is: odd^2 stays odd, and odd + even = odd. If you missed (4), note that squaring preserves parity — only even numbers stay even when squared; odd numbers stay odd. If you missed (5), the exponent was a decoy: n^5 stays odd, but the even factor m makes the product even before you even reach the +3.

**Recap.** Every integer is 2a or 2b + 1, and that fact alone generates the whole topic. For products, find one even factor and you're done (the product is even); for sums and differences, count the odd terms (odd count → odd, otherwise even) and ignore every even term. Exponents preserve parity, subtraction follows the addition table, coefficients of 2 force evenness, and the product of n consecutive integers is divisible by n!. Remember the asymmetry: an *odd* product pins every factor to odd, but an *even* product pins almost nothing. When answer choices split by parity, screen them with a 10-second parity check before doing arithmetic. The two reflexes that save the most points: test 0 (it's even) and the small negatives, and distrust any expression that's secretly true for all integers. Stamp the givens, translate, resolve products then sums, and check the edge cases — that four-step loop turns 725-level parity questions into bookkeeping.

## @integer-properties-of-expressions

The GMAT frequently asks "must be" or "could be" questions about expressions built from integers — and it pairs them with units-digit cycles, consecutive-integer identities, and sign rules to manufacture 685+ difficulty out of arithmetic a sixth-grader could do. The challenge is never the computation; it is knowing *which* property is being tested and having the relevant rule loaded so you can answer in seconds instead of grinding through cases. This section builds that loaded toolkit. The single most powerful habit running underneath all of it is **plugging in numbers**: when a "must be / could be" question resists clean theory, test small integers (0, 1, 2, −1) and let one counter-example settle it.

**Mental model.** Every expression question is asking one of two things: *what is forced* (must be) or *what is possible* (could be). For "must be," a property survives only if it holds for **every** legal value — so a single counter-example kills a choice. For "could be," you need just **one** value that works — so a single confirming example proves a choice. These are mirror images, and confusing them is the most common error on the topic. Keep the asymmetry in front of you: must be is destroyed by one bad case; could be is proven by one good case. A clean way to internalize this: "must" lives in the universe of *all* integers, so you can never finish it with a handful of examples — you finish it with structure. "Could" lives in the universe of *one* integer, so a lucky example finishes it instantly. The two question words demand opposite kinds of evidence, and the GMAT writes traps precisely where students supply the wrong kind.

> **Recall check.** A "must be divisible by 7" claim — how many counter-examples does it take to disprove it, and how many confirming cases to prove it? (Disprove: one. Prove: you cannot prove "must" by examples alone — you need the property to hold structurally for every integer, e.g. via factoring or a divisibility rule.)

**Units digit cycles for powers.** The units digit of `nᵏ` depends only on the units digit of n and on k. Nothing else about n matters — `13⁷`, `123⁷`, and `3⁷` all share a units digit. This is because the units digit of any product depends only on the units digits of the factors, and a power is just repeated multiplication. Memorize this table; it converts a class of intimidating-looking exponent problems into one-second lookups.

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

Notice the structure so you do not have to brute-memorize ten rows: 0, 1, 5, 6 are **fixed** (period 1 — they reproduce their own units digit forever). 4 and 9 have **period 2**. The four "hard" digits — 2, 3, 7, 8 — all have **period 4**, and each of those cycles is a permutation of the same four endings {2, 4, 8, 6} for even bases or {3, 9, 7, 1}/{7, 9, 3, 1} for the odd ones. Learn the four period-4 cycles cold; the rest are trivial. A useful sanity anchor: every cycle's *first* entry is just the base's own units digit (the exponent is 1), and every period-4 cycle ends on either 6 (even base) or 1 (odd base).

**How to find the cycle position.** Compute `exponent mod period`. The result gives the position in the cycle — except when the result is 0, which maps to the **last** position (not position zero; there is no zeroth entry). This off-by-one at the boundary is the single biggest trap in units-digit problems, so it gets its own callout below.

**Worked example (easy).** Units digit of `3²⁴`?

Period-4 cycle is (3, 9, 7, 1). Compute `24 mod 4 = 0` → remainder 0 maps to the **last** position (position 4) → units digit **1**. Verify the pattern: 3⁴ = 81, 3⁸ = 6561, 3¹² = 531441 — every exponent that is a multiple of 4 lands back on 1. Confirmed.

**Worked example (easy).** Units digit of `7⁴³`?

Cycle (7, 9, 3, 1), period 4. `43 mod 4 = 3` → third entry → units digit **3**. (Sanity check the count: 7¹ ends in 7, 7² = 49 ends in 9, 7³ = 343 ends in 3 — third power, third entry. Matches.)

**Worked example (medium).** Units digit of `2⁵⁰ + 7³⁰`?

Handle each power separately, then add the resulting units digits.
- `2⁵⁰`: cycle (2, 4, 8, 6), period 4. `50 mod 4 = 2` → second entry → **4**.
- `7³⁰`: cycle (7, 9, 3, 1), period 4. `30 mod 4 = 2` → second entry → **9**.
- Add the units digits only: `4 + 9 = 13` → units digit **3**.

The strategic point: you never compute the giant powers themselves. You reduce each to a single digit, then operate on the digits. The same shortcut works for products — `2⁵⁰ × 7³⁰` would have units digit equal to the units digit of `4 × 9 = 36`, namely **6**. And for subtraction it works too, with one caution: if the top units digit is smaller, borrow a 10 first. `7³⁰ − 2⁵⁰` ends in `9 − 4 = 5`; but `2⁵⁰ − 7³⁰` ends in `(14 − 9) = 5` after borrowing, since 4 is less than 9.

> **Recall check.** When `exponent mod period` comes out to 0, which entry of the cycle do you take? (The **last** entry — there is no zeroth position. For `5⁸⁰⁰⁰⁰` you would not panic; base 5 is period 1, units digit 5.)

**Consecutive-integer identities.** The sum of n consecutive integers equals n times the middle term **when n is odd** — equivalently, `n × (first + last) / 2` always (this is just the average times the count). When n is odd the middle term *is* the average, so the sum is a clean multiple of n; when n is even there is no single middle integer, so use the average-of-endpoints form. A consequence worth memorizing: the sum of any odd number of consecutive integers is always divisible by that count (five consecutive integers always sum to a multiple of 5), whereas an even count of consecutive integers never produces a "clean middle" and the sum is the count times a half-integer endpoint average.

**Worked example (medium).** The sum of 5 consecutive integers is 85. Find the largest.

Five terms, n = 5 is odd, so middle term × 5 = 85 → middle = 17. The five integers are 15, 16, 17, 18, 19, so the largest is 17 + 2 = **19**. No variable, no equation to solve — the identity does the work. (If you had set the smallest to x and written x + (x+1) + (x+2) + (x+3) + (x+4) = 85, you would get 5x + 10 = 85, x = 15, largest 19 — same answer, more steps. The identity is the fast lane.)

**The product rule for consecutive integers.** The product of n consecutive integers is **always** divisible by `n!`. This is the workhorse of "must be divisible by" questions at the 685+ tier. Two cases you will see constantly: `k(k+1)` is always even (divisible by 2! = 2), because one of two consecutive integers is even; and `k(k+1)(k+2)` is always divisible by 3! = 6, because among any three consecutive integers at least one is even and exactly one is a multiple of 3.

**Worked example (medium).** For all positive integers n, must `n(n+1)(n+2)(n+3)` be divisible by 8?

Four consecutive integers → divisible by 4! = 24. Since 24 = 3 × 8, the product is divisible by 8 for every n. Confirmed. (Deeper reason for the 8: among four consecutive integers there are two even numbers, and consecutive evens are like 2m and 2m+2 = 2(m+1) — one of m, m+1 is even, so one of those two even numbers is itself a multiple of 4. So you actually have a factor of 2 × 4 = 8 guaranteed.)

**Trap to watch — the divisibility "must be."** "Must be divisible by X" collapses the instant any single integer breaks it. The GMAT plants the counter-example among the *easy* cases, so test n = 0, 1, 2 before you trust a "must" claim. Example bait: "Is `n(n+2)` always divisible by 8?" Sounds plausible next to the rule above — but n = 1 gives 1 × 3 = 3, not divisible by 8. One small case, claim dead. The lesson is that `n(n+2)` is *not* a consecutive-integer product (the factors skip a number), so the `n!` rule does not apply — recognizing when the structure is genuinely "consecutive" is half the battle.

**Sign and parity of products.** A product is negative if and only if it contains an **odd** number of negative factors. So if `xyz < 0`, then exactly 1 or exactly 3 of {x, y, z} are negative. Zero is excluded here — if any factor were 0 the product would be 0, not negative. This rule is the entire engine behind a recurring sign-and-parity pattern on the test.

**Worked example (hard — sign from the negative count).** If `xyz < 0` and `z < 0`, which of the following must be true? (A) `xy > 0`  (B) `xy < 0`  (C) `x > 0`  (D) `y < 0`  (E) `xyz = 0`

Because `xyz < 0`, the number of negatives among x, y, z is **odd**. z already supplies one negative, so x and y together must supply an **even** count (0 or 2) — meaning x and y are both positive or both negative. Either way `xy > 0`, so **(A)** is forced. None of x, y, z is 0 (the product is nonzero), so (E) is out; and x, y individually aren't pinned — both could be negative — so (C) and (D) aren't forced either. Contrast: had you been told only `x > 0`, the negatives would have to come from y and z, exactly one of them, and `xy` could land either sign. The decisive move is the odd-negative-count rule, which replaces sign casework with a single question — "how many negatives are forced, and is that count even or odd?"

> **Recall check.** `xyz < 0` and you learn exactly two of the three are negative — is that possible? (No. Two negatives is an *even* count, which makes the product *positive*. A negative product forces an *odd* number of negatives: one or three.)

**The "must be / could be" discipline in action.** When theory is fast, use it; when it is murky, **plug in numbers**. The reflex set is n = 0, 1, 2, −1 — these expose parity flips, sign flips, the zero edge case, and small-number anomalies that intuition skips. Add a fraction or a large value only if the variable is not restricted to integers; for integer-property questions the four small integers almost always do the job.

**Worked example (medium).** Must `n² − n` be even for all integers n?

Factor first: `n² − n = n(n − 1)` — the product of two consecutive integers. Exactly one of n and n−1 is even, so the product is always even. Confirmed, no cases needed. (If you did not spot the factoring, plugging in would have built confidence quickly: n = 1 → 0, even; n = 2 → 2, even; n = 3 → 6, even; n = −1 → 2, even. But examples alone can never *prove* a "must" — the factoring is what makes it airtight.)

**Worked example (hard, backsolving + plug-in).** If n is a positive integer, which of the following must be odd? (A) `n² + n`  (B) `n² + n + 1`  (C) `2n² + n`  (D) `n³ + n`  (E) `n³`

Strategy: this is a "must be odd" question, so **plug in numbers** and let one even result eliminate each wrong choice. Use n = 1 and n = 2.
- (A) `n² + n = n(n+1)` is a product of consecutive integers, always even → never odd. Eliminate.
- (B) `n² + n + 1` = (even from A) + 1 = always **odd**. Hold it.
- (C) n = 2 → 8 + 2 = 10, even. Eliminate.
- (D) `n³ + n`: n = 2 → 8 + 2 = 10, even. Eliminate.
- (E) `n³`: n = 2 → 8, even. Eliminate.

Only (B) survives, and we have a structural reason: `n² + n` is always even, so adding 1 forces odd for every n. Answer **B**. Naming the tactic: this is *plugging in numbers to eliminate*, finished with a *structural confirmation* — examples narrow the field fast, theory seals the survivor. A time-saving refinement: because a single even result kills a "must be odd" choice, you only ever needed *one* even output per wrong answer, so n = 2 alone disposed of (C), (D), and (E) in three quick evaluations.

**Worked example (hard, units digit under a twist).** What is the units digit of `17²⁰²⁵ × 24¹⁰¹`?

Reduce each base to its units digit, find each cycle position, then multiply the two resulting digits.
- `17²⁰²⁵`: units digit of base is 7, cycle (7, 9, 3, 1), period 4. `2025 mod 4 = 1` → first entry → **7**.
- `24¹⁰¹`: units digit of base is 4, cycle (4, 6), period 2. `101 mod 2 = 1` → first entry → **4**.
- Multiply the digits: `7 × 4 = 28` → units digit **8**.

The twist the GMAT counts on is that you might try to compute `2025 mod 4` and `101 mod 2` carelessly. Anchor each with the count check: 17¹ ends in 7 (exponent 2025 is ≡ 1, so it matches the first power's ending), and 24¹ ends in 4 (exponent 101 is odd, matching the odd-power ending of 4). Answer **8**.

**Procedure to memorize — answering an expression question.**

1. **Read the question word.** Is it "must be," "could be," or "find the value"? Fix the logic before touching numbers: must → one counter-example kills; could → one example confirms.
2. **Identify the property in play** — parity (even/odd), units digit, divisibility, or sign. That tells you which rule to load.
3. **Try structure first.** Factor (look for consecutive integers → `n!` divisibility), apply the parity table, or use the units-digit cycle. Structure gives airtight answers.
4. **If structure stalls, plug in numbers** — n = 0, 1, 2, −1. For "must," hunt for a counter-example; for "could," hunt for a confirming case.
5. **For units digits,** reduce each base to its last digit, find `exponent mod period`, take that cycle entry (remainder 0 → last entry), and operate on the resulting digits only.
6. **Re-check the question word** before selecting. Confirm you answered "odd vs even," "the value," or "which must be true" — whatever was actually asked.

**Common mistakes.**
- **Off-by-one in cycles:** treating `exponent mod 4 = 0` as "position 0" instead of the last entry. There is no zeroth position.
- **Proving "must" with examples:** three confirming cases do not establish "must be" — you need structure or you risk the planted counter-example.
- **Forgetting 0:** 0 is even, and `xyz < 0` rules out any factor being 0 (a zero factor gives 0, not a negative).
- **Mismatching the question word:** answering "could be" logic on a "must be" stem (or vice versa) — the single most expensive error here.
- **Mixing up sum identities:** using "n × middle term" when n is even (there is no integer middle term); use `n × (first + last)/2` instead.
- **Misreading "consecutive":** applying the `n!` product rule to skip-patterns like `n(n+2)` or `n(n+1)(n+3)` — the factors must be genuinely consecutive.
- **Computing the giant power:** never expand `2⁵⁰`; reduce to its units digit and work with that one digit.

> **Self-explanation prompt.** Cover the units-digit cycle table. From memory, write out the cycles for bases ending in 2, 3, 7, and 8 — each is period 4. (Answers: 2 → 2,4,8,6 / 3 → 3,9,7,1 / 7 → 7,9,3,1 / 8 → 8,4,2,6.) Now apply them: units digit of `8¹⁰⁰⁰ + 3⁵⁰⁰`? (8¹⁰⁰⁰: 1000 mod 4 = 0 → last position → 6. 3⁵⁰⁰: 500 mod 4 = 0 → last position → 1. Sum's units digit: 6 + 1 = **7**.) If you couldn't reproduce the cycles, re-read the table before the problem sets — these turn 30-second questions into one-second questions on the 685+ tier.

**Recap.** Expression questions test parity, units digits, divisibility, or sign — almost never raw computation. Decode the question word first ("must" dies to one counter-example; "could" lives on one example), then reach for structure: factor for consecutive-integer divisibility (`n!`), run the parity table, or look up the units-digit cycle (remember 0, 1, 5, 6 are fixed; 2, 3, 7, 8 are period 4; remainder 0 → last entry). When structure stalls, plug in 0, 1, 2, −1. Use the odd-number-of-negatives rule to convert sign conditions into parity counts. Master these five reflexes and the hardest-looking integer-property problems shrink to seconds of lookup.
