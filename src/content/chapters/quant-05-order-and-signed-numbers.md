---
slug: quant-05-order-and-signed-numbers
title: "Arithmetic: Order of Operations & Signed Numbers"
section: Quant
estimated_minutes: 9
prerequisites:
  - quant-04-answer-choice-tactics
summary: |
  The grammar of arithmetic: PEMDAS, sign rules, and what changes when a value need not be an integer. Estimation and plugging-in pay off heavily here.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - arithmetic-q1
      - arithmetic-q2
  - id: order-of-operations
    type: reading
    title: "Order of operations — PEMDAS and the traps inside it"
    check_question_ids:
      - arithmetic-q16
  - id: signs-and-negatives
    type: reading
    title: "Signs and negatives — keeping the minus signs from eating your time"
    check_question_ids:
      - arithmetic-q17
  - id: integers-vs-non-integers
    type: reading
    title: "Integers vs. non-integers — knowing which world you're in"
    check_question_ids:
      - arithmetic-q18
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q3
      - arithmetic-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q5
      - arithmetic-q6
---

## @order-of-operations

Every student has heard of PEMDAS — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. That's not what I'm going to teach you. What I'm going to teach you is the two traps inside PEMDAS that the GMAT mines for wrong answers.

**Mental model.** Arithmetic is grammar. Order of operations, sign rules, fraction-handling — these are the syntax that has to be mechanical before any quant skill can run on top. A 700+ student doesn't think faster than a 600 student here; they make fewer sloppy moves per minute. Every arithmetic mistake on a hard problem is a rule you let yourself break under pressure.

**Trap one: multiplication and division bind tighter than addition and subtraction, full stop.** When you see `8 − 2 × 4`, your brain reads left to right and wants to say "8 minus 2 is 6, times 4 is 24." That is wrong. The multiplication happens first: `2 × 4 = 8`, then `8 − 8 = 0`. The GMAT writes expressions specifically to bait left-to-right processing.

**Example.** `8 − 2 × (3 − 5)² + 12 / 4`

- Parentheses: `(3 − 5) = −2`
- Exponent: `(−2)² = 4`
- Multiplication and division (left to right): `2 × 4 = 8`, `12 / 4 = 3`
- Now addition and subtraction (left to right): `8 − 8 + 3 = 3`

**Trap two: subtraction is not associative.** `10 − 3 − 2` equals `5`, not `9`. You must go left to right: `10 − 3 = 7`, then `7 − 2 = 5`. If you instead compute `3 − 2 = 1` first and then `10 − 1 = 9`, you've invented a new problem. The same applies to division: `24 / 4 / 2 = 3`, not `12`. Chained subtractions and divisions always go left to right unless parentheses tell you otherwise.

**The clean-up habit.** Before I evaluate any expression, I scan it for three things: parentheses to resolve, exponents to expand, and negatives I might mishandle. Ten seconds of scanning beats 60 seconds of backtracking after I got the sign wrong.

**Trap to watch.** A negative sign in front of a parenthesis distributes to *every* term inside. `−(3 − 5)` is `−3 + 5 = 2`, not `−3 − 5 = −8`. When I rush, I forget the distribution on the second term. The habit: write the negative as `−1 ×` mentally and distribute slowly.

**Micro-drill.** Evaluate each expression — should take under 25 seconds total:

1. `12 − 3 × 2` → ___
2. `(6 + 2)² ÷ 4 − 1` → ___
3. `−(4 − 7)²` → ___

Answers: (1) **6** — multiply first: 3 × 2 = 6, then 12 − 6. (2) **15** — parens: 8, squared: 64, ÷ 4: 16, minus 1. (3) **−9** — parens give −3, squared gives 9, then the leading negative makes it −9. If (3) gave you +9, you resolved the exponent before applying the leading minus — the exponent binds to `(4 − 7)`, not to the whole expression.

> **Self-explanation prompt.** Before the check question, say out loud in one sentence: *why* does multiplication happen before subtraction? If you can articulate that multiplication is a compact way of writing repeated addition (so `2 × 4` is really `4 + 4`, already an addition), you'll stop making the left-to-right mistake.

## @signs-and-negatives

Signed-number arithmetic is where careful students lose points not because they don't know the rules, but because they skip the rules under time pressure. The rules are short, so memorize them once and never doubt them.

**Multiplication and division of signs:**

- `(+) × (+) = (+)`
- `(−) × (−) = (+)`
- `(+) × (−) = (−)` and `(−) × (+) = (−)`

**Same sign → positive, different signs → negative.** That's the entire table. Extension: a product is negative if and only if there's an odd number of negative factors. `(−2)(−3)(−4) = −24` (three negatives, odd). `(−2)(−3)(−4)(−5) = 120` (four negatives, even).

**Addition and subtraction of signs:**

- Same sign → add magnitudes, keep the sign. `−7 + (−3) = −10`.
- Different signs → subtract magnitudes, keep the sign of the larger. `−7 + 3 = −4`; `7 + (−3) = 4`.
- Subtracting a negative is adding: `5 − (−3) = 5 + 3 = 8`.

**Absolute value.** `|x|` means the distance of x from zero, always non-negative. `|−3| = 3`, `|3| = 3`, `|0| = 0`. A key identity: `|x − y| = |y − x|`. Distance is symmetric. This cancellation shows up all the time — if you see `|x − y| − |y − x|` in an expression, it's zero, full stop.

**Example.** If `x = −3` and `y = 2`, find `|x − y| − |y − x| + |x| − |y|`.

- `|x − y| = |−3 − 2| = |−5| = 5`
- `|y − x| = |2 − (−3)| = |5| = 5`
- `|x − y| − |y − x| = 0` (always)
- `|x| − |y| = 3 − 2 = 1`
- Total: `0 + 1 = 1`

**The two-case approach for absolute value equations.** If `|2x − 7| = 11`, split into cases:

- Case 1: `2x − 7 = 11` → `x = 9`
- Case 2: `2x − 7 = −11` → `x = −2`

Sum: `9 + (−2) = 7`. Any `|expression| = k` equation has (up to) two solutions; forgetting the negative case is the #1 absolute-value trap.

**Trap to watch.** `(−3)² = 9`, but `−3² = −9`. The exponent binds tighter than the negation unless the negative is inside parentheses. Write out `−3²` as `−(3²)` in your head.

**Micro-drill.** Evaluate each — 10 seconds each:

1. `(−3)² − 3²` → ___
2. `−(5 − 9)²` → ___
3. `|3 − 8| × |8 − 3|` → ___
4. `(−1)(−2)(−3)(−4)` → ___

Answers: (1) **0** — (−3)² = 9 and 3² = 9, difference is 0. (2) **−16** — parens: −4, squared: 16, then the leading minus: −16. (3) **25** — |−5| = 5 and |5| = 5, product 25. (4) **24** — four negative factors = even count = positive; 1×2×3×4 = 24. If (1) gave you −18, you treated `(−3)²` as `−(3²) = −9` — the parentheses include the negative in the base. If (4) gave you −24, the even-negative-count rule isn't automatic yet: re-read the "same/different signs" rules above until it is.

## @integers-vs-non-integers

The GMAT cares intensely about whether a number is an integer or not. This single distinction underlies a whole class of traps, where a problem plants a non-integer exactly where a student assumed an integer.

**Integer facts to internalize:**

- Integers include negatives, zero, and positives. `…, −3, −2, −1, 0, 1, 2, 3, …`
- Zero is an integer. Zero is even. Zero is a multiple of every integer.
- The set of non-integers on the GMAT usually means rationals like `3/2`, `0.7`, or decimals that don't terminate cleanly.
- Ratios and rates often produce non-integers; the problem usually tells you indirectly whether you need an integer answer ("how many people," "how many books").

**When the GMAT tests integer-ness:**

1. Problems that hinge on whether a quantity is an integer — you must track whether a division produces a clean (whole-number) result or a fraction.
2. "How many integer values of x satisfy…?" Count carefully; endpoints matter.
3. Word problems where the unknown must be an integer by context (people, books, trips).

**The fraction-comparison trick.** `p/q > 1/2` is equivalent to `2p > q` (assuming `q > 0`). You can cross-multiply to compare fractions, but only if you know the sign of the denominator. If `q` could be negative, the inequality can flip. The GMAT will exploit this ambiguity, so confirm the sign of the denominator before you cross-multiply.

**Example.** For how many of the integers `p = 1, 2, 3, 4, 5` is `p/(2p − 5) > 1/2`?

The instinct is to cross-multiply `p/q > 1/2` into `2p > q`, but that step is valid only when `q = 2p − 5 > 0` — that is, when `p ≥ 3`. For those values, `2p > 2p − 5` reduces to `0 > −5`, always true, so `p = 3, 4, 5` all work. For `p = 1` and `p = 2` the denominator is negative; cross-multiplying would flip the inequality, and a direct check shows `p/q` is negative there — not greater than `1/2`. So **3** of the five values satisfy it. The takeaway: never cross-multiply a fraction comparison until you know the sign of the denominator.

**Terminating vs non-terminating decimals.** A fraction `a/b` (in lowest terms) has a terminating decimal if and only if `b` has no prime factors other than 2 and 5. `3/8 = 0.375` (b = 2³, terminates). `1/3 = 0.333…` (b = 3, doesn't terminate). `1/6 = 0.1666…` (b = 2 × 3, the 3 forces non-termination).

**Trap to watch.** "x is a positive number" does NOT mean "x is a positive integer." Always read the problem twice to check whether the integer constraint was given. Students who assume integers when the problem allowed rationals lose points constantly.

**The integer-assumption pattern — one of the highest-leverage distinctions in this chapter.**

The GMAT will state integer constraints explicitly when they matter, using language like "n is a positive integer," "k is a whole number," "x is divisible by 3," or "p is prime." If those words aren't there, x can be 1.5, 0.7, or √2.

**Example.** For which of these values is x² > x?  I. x = −2   II. x = 1/2   III. x = 3

`x² > x` is *not* automatically true — it holds only when x < 0 or x > 1, and fails for 0 ≤ x ≤ 1. Check each: x = −2 gives 4 > −2 (true); x = 1/2 gives 1/4 > 1/2 (false); x = 3 gives 9 > 3 (true). So **I and III**. Notice that the condition "x > 1" would capture III but says nothing about whether x is an integer — 1.5 qualifies just as much as 3. The region x lives in, not its integer-ness, is what decides x² versus x.

**The "x² = 9" two-root issue.** The equation x² = 9 has *two* solutions, x = 3 and x = −3.

- With no constraints, both survive — you cannot name a single value.
- With "x is a positive real number," only x = 3.
- With "x is a positive integer," only x = 3.

Same equation; the answer changes with the domain. Whenever a squared variable appears and you're tempted to write one root, ask immediately: "could x be negative?" If the problem doesn't rule it out, you must carry both roots — and the test writer is usually counting on you to drop the negative one.

**Language that signals integer context (pattern-match on sight):** "n is a positive integer" / "k is a whole number" / "factor of" / "multiple of" / "divisible by" / "prime" / "remainder when divided by" — any of these phrases signal you're in integer territory. Without them, stay in real-number territory and test fractions as candidates.

> **Self-explanation prompt.** Why does `1/7` not terminate? If you can say "because 7 has no factors of 2 or 5, so no power of 10 is divisible by 7," you've internalized the rule — and you'll never have to memorize terminating-decimal lists.
