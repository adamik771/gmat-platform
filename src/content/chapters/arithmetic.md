---
slug: arithmetic
title: Arithmetic & Operations
section: Quant
estimated_minutes: 50
prerequisites: []
summary: |
  Arithmetic is roughly 30% of the Quant section and 100% of the substructure beneath every other topic. The GMAT doesn't reward you for knowing fractions — it punishes you for not knowing them cold. This chapter drills the seven operational habits that separate students who finish Quant with 10 minutes to spare from students who guess on the last four questions because they burned 90 seconds converting 3/8 to a decimal.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* a question before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - arithmetic-q1
      - arithmetic-q5

  - id: order-of-operations
    type: reading
    title: "Order of operations — PEMDAS and the traps inside it"
    check_question_ids:
      - arithmetic-q16

  - id: fractions-fluency
    type: reading
    title: "Fractions — the single highest-leverage arithmetic skill"
    check_question_ids:
      - arithmetic-q13
      - arithmetic-q15

  - id: decimals-and-percents-conversion
    type: reading
    title: "Decimals and percents — three notations, one number"
    check_question_ids:
      - arithmetic-q2
      - arithmetic-q4

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

  - id: estimation-tricks
    type: reading
    title: "Estimation — when to compute and when to approximate"
    check_question_ids:
      - arithmetic-q19

  - id: summary
    type: summary
    title: "The seven arithmetic habits"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q1
      - arithmetic-q2
      - arithmetic-q3
      - arithmetic-q4
      - arithmetic-q13
      - arithmetic-q14
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q5
      - arithmetic-q6
      - arithmetic-q7
      - arithmetic-q8
      - arithmetic-q15
      - arithmetic-q16
      - arithmetic-q17
      - arithmetic-q18
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - arithmetic-q9
      - arithmetic-q10
      - arithmetic-q11
      - arithmetic-q12
      - arithmetic-q19
      - arithmetic-q20
---

## @order-of-operations

Every student has heard of PEMDAS — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. That's not what I'm going to teach you. What I'm going to teach you is the two traps inside PEMDAS that the GMAT mines for wrong answers.

**Trap one: multiplication and division bind tighter than addition and subtraction, full stop.** When you see `8 − 2 × 4`, your brain reads left to right and wants to say "8 minus 2 is 6, times 4 is 24." That is wrong. The multiplication happens first: `2 × 4 = 8`, then `8 − 8 = 0`. The GMAT writes expressions specifically to bait left-to-right processing.

**Example.** `8 − 2 × (3 − 5)² + 12 / 4`

- Parentheses: `(3 − 5) = −2`
- Exponent: `(−2)² = 4`
- Multiplication and division (left to right): `2 × 4 = 8`, `12 / 4 = 3`
- Now addition and subtraction (left to right): `8 − 8 + 3 = 3`

**Trap two: subtraction is not associative.** `10 − 3 − 2` equals `5`, not `9`. You must go left to right: `10 − 3 = 7`, then `7 − 2 = 5`. If you instead compute `3 − 2 = 1` first and then `10 − 1 = 9`, you've invented a new problem. The same applies to division: `24 / 4 / 2 = 3`, not `12`. Chained subtractions and divisions always go left to right unless parentheses tell you otherwise.

**The clean-up habit.** Before I evaluate any expression, I scan it for three things: parentheses to resolve, exponents to expand, and negatives I might mishandle. Ten seconds of scanning beats 60 seconds of backtracking after I got the sign wrong.

> **Trap to watch.** A negative sign in front of a parenthesis distributes to *every* term inside. `−(3 − 5)` is `−3 + 5 = 2`, not `−3 − 5 = −8`. When I rush, I forget the distribution on the second term. The habit: write the negative as `−1 ×` mentally and distribute slowly.

> **Self-explanation prompt.** Before the check question, say out loud in one sentence: *why* does multiplication happen before subtraction? If you can articulate that multiplication is a compact way of writing repeated addition (so `2 × 4` is really `4 + 4`, already an addition), you'll stop making the left-to-right mistake.

## @fractions-fluency

If I could pick one skill that separates 685+ scorers from 605 scorers on Quant, it would be fraction fluency. Not "can you add fractions" — every student can eventually add fractions. Fluency means you see `3/8 + 5/12` and the answer `19/24` appears in your head within five seconds without scratch paper.

**The three operations, ranked by how often they trap people:**

1. **Adding and subtracting** requires a common denominator. `3/4 + 5/8 − 1/2` becomes `6/8 + 5/8 − 4/8 = 7/8`. Find the LCD first, convert every fraction, then combine numerators.
2. **Multiplying** is the easy one: `(a/b) × (c/d) = ac/bd`. No common denominator needed. Before you multiply, cancel common factors diagonally — `(3/4) × (8/9) = (1/1) × (2/3) = 2/3`, done without ever multiplying 3 × 8 or 4 × 9.
3. **Dividing** means multiplying by the reciprocal. `(a/b) / (c/d) = (a/b) × (d/c) = ad/bc`. The classic trap: `(1 + 1/2) / (1 − 1/3)`. Resolve the top and bottom independently first — `(3/2) / (2/3) = (3/2) × (3/2) = 9/4`.

**The simplification habit.** The GMAT considers `42/98` and `3/7` to be different answer choices. `42/98` is not "wrong" arithmetically, but it is wrong on the GMAT because "simplified" means fully reduced. Always pull out common factors at the end. `42/98 = (42/14) / (98/14) = 3/7`.

**Cancel early, cancel hard.** This is the single habit that saves the most time. Before you compute `(15 × 28) / (21 × 25)`, cancel: `15/25 = 3/5`, `28/21 = 4/3`, so the whole thing becomes `(3 × 4) / (5 × 3) = 12/15 = 4/5`. No multi-digit multiplication required.

**Fractions you should know by sight:**

| Fraction | Decimal | Percent |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/3 | 0.333… | 33.3% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.2 | 20% |
| 1/6 | 0.1667 | 16.67% |
| 1/7 | 0.1429 | 14.29% |
| 1/8 | 0.125 | 12.5% |
| 1/9 | 0.111… | 11.1% |
| 1/10 | 0.1 | 10% |

Multiples follow: `3/8 = 0.375`, `5/8 = 0.625`, `7/8 = 0.875`. When you see `.375` in an answer choice, you should *see* `3/8` without thinking.

> **Trap to watch.** A complex fraction like `(a + b/c) / d` is `(ac + b) / (cd)`, not `(a + b) / (cd)`. Resolve the numerator fully — `a + b/c = (ac + b)/c` — before you divide.

## @decimals-and-percents-conversion

Decimals, fractions, and percents are three notations for the same number. A student who fluently switches between them saves 20-30 seconds on every percent problem. A student who can't switch gets bogged down in `0.875 × 80` when they could have written `7/8 × 80 = 70`.

**The conversion triangle:**

- **Fraction → decimal:** divide the numerator by the denominator. `3/4 = 3 ÷ 4 = 0.75`.
- **Decimal → percent:** multiply by 100 (shift the decimal point two places right). `0.75 = 75%`.
- **Percent → decimal:** divide by 100 (shift two places left). `40% = 0.40`.
- **Percent → fraction:** write over 100 and simplify. `40% = 40/100 = 2/5`.

**Example (percent discount).** A shirt priced at $80 is discounted by 15%. What's the sale price?

- Discount amount: `15% × 80 = 0.15 × 80 = 12`.
- Sale price: `80 − 12 = 68`.

Faster using the "complement" mental move: 15% off means you pay 85% of the original. `0.85 × 80 = 68`. One multiplication, no subtraction. Whenever you see "X% off," convert mentally to "you pay (100 − X)%" — it collapses two steps into one.

**Example (decimal multiplication).** `0.125 × 0.4`. Recognize `0.125 = 1/8` and `0.4 = 2/5`. Then `(1/8) × (2/5) = 2/40 = 1/20 = 0.05`. Trying to multiply `0.125 × 0.4` directly works but takes longer.

**Percent change and successive percent changes.** A $100 item goes up 20% to $120. Then a 20% discount brings it to `0.80 × 120 = 96`. The final price is 96% of the original — *not* 100%. Successive percentages don't cancel because the 20% discount applies to the *new* base ($120), not the original.

**The percent-of-a-percent rule.** To combine a +X% change and a +Y% change: multiply `(1 + X/100) × (1 + Y/100)`. A 20% raise followed by a 20% cut is `1.20 × 0.80 = 0.96`, a 4% net decrease.

> **Trap to watch.** "What percent of 80 is 20?" and "20 is what percent of 80?" are the same question: `20/80 = 25%`. But "80 is what percent of 20?" is different: `80/20 = 400%`. Always ask: *what am I dividing by?* The "of" quantity goes in the denominator.

> **Self-explanation prompt.** In one sentence, why does a 20% raise followed by a 20% cut not return to the original price? If you can explain that the cut operates on a larger base than the raise did, you'll never fall for the "they cancel" trap again.

> **Recall check.** Close the book (or cover this section). Now write down — from memory — the decimal equivalents of: 1/8, 3/8, 5/8, 7/8, 1/9, 2/9, 1/6, 5/6. You want these appearing in your head on sight, not computed. Score yourself; re-study the ones you missed; retest in 10 minutes. Spaced retrieval (Cepeda et al., 2006) beats mass practice on long-term retention — the short gap is what builds the durable memory.

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

> **Trap to watch.** `(−3)² = 9`, but `−3² = −9`. The exponent binds tighter than the negation unless the negative is inside parentheses. Write out `−3²` as `−(3²)` in your head.

## @integers-vs-non-integers

The GMAT cares intensely about whether a number is an integer or not. Many Data Sufficiency questions hinge on this single distinction, and many Problem Solving traps plant a non-integer where a student assumed an integer.

**Integer facts to internalize:**

- Integers include negatives, zero, and positives. `…, −3, −2, −1, 0, 1, 2, 3, …`
- Zero is an integer. Zero is even. Zero is a multiple of every integer.
- The set of non-integers on the GMAT usually means rationals like `3/2`, `0.7`, or decimals that don't terminate cleanly.
- Ratios and rates often produce non-integers; the problem usually tells you indirectly whether you need an integer answer ("how many people," "how many books").

**When the GMAT tests integer-ness:**

1. "Is x an integer?" Data Sufficiency. Requires you to track whether a division produces a clean result.
2. "How many integer values of x satisfy…?" Count carefully; endpoints matter.
3. Word problems where the unknown must be an integer by context (people, books, trips).

**The fraction-comparison trick.** `p/q > 1/2` is equivalent to `2p > q` (assuming `q > 0`). You can cross-multiply to compare fractions, but only if you know the sign of the denominator. If `q` could be negative, the inequality can flip. On the GMAT, Data Sufficiency problems will exploit this ambiguity.

**Example.** Is `p/q > 1/2`? You're told `q = 2p − 5`.

Manipulate: `p/q > 1/2` becomes `2p > q` when `q > 0`. Substituting `q = 2p − 5`: we want `2p > 2p − 5`, i.e., `0 > −5`. Always true (given `q > 0`). So statement (2) is sufficient.

**Terminating vs non-terminating decimals.** A fraction `a/b` (in lowest terms) has a terminating decimal if and only if `b` has no prime factors other than 2 and 5. `3/8 = 0.375` (b = 2³, terminates). `1/3 = 0.333…` (b = 3, doesn't terminate). `1/6 = 0.1666…` (b = 2 × 3, the 3 forces non-termination).

> **Trap to watch.** "x is a positive number" does NOT mean "x is a positive integer." Always read the problem twice to check whether the integer constraint was given. Students who assume integers when the problem allowed rationals lose points on Data Sufficiency constantly.

> **Self-explanation prompt.** Why does `1/7` not terminate? If you can say "because 7 has no factors of 2 or 5, so no power of 10 is divisible by 7," you've internalized the rule — and you'll never have to memorize terminating-decimal lists.

## @estimation-tricks

The GMAT rewards students who know when to estimate and when to compute exactly. On every Problem Solving question, scan the answer choices before you start. If the choices are spread (5, 15, 50, 150, 500), estimate. If they're close (11, 12, 13, 14, 15), compute.

**Example (estimation wins).** Which is closest to 1/3: 7/22, 11/32, 5/16, 9/28, or 13/40?

- `7/22 ≈ 0.318` (below 1/3 ≈ 0.333)
- `11/32 ≈ 0.344` (slightly above)
- `5/16 = 0.3125` (farther below)
- `9/28 ≈ 0.321` (below)
- `13/40 = 0.325` (below)

The one that's closest: `11/32`. A more rigorous approach uses cross-multiplication to measure the gap exactly: for `11/32` vs `1/3`, the cross-product difference is `33 − 32 = 1`, and the gap is `1/(3 × 32) = 1/96`. For `7/22`, the gap is `1/(3 × 22) = 1/66`. Smaller gap → closer fraction. `1/96 < 1/66`, so `11/32` wins.

**Estimation heuristics worth memorizing:**

- `π ≈ 3.14 ≈ 22/7`. Close enough for any GMAT geometry question.
- `√2 ≈ 1.414`, `√3 ≈ 1.732`, `√5 ≈ 2.236`. Decimals of these three roots show up constantly.
- 10% of a number is easy; 1% is easier. For 17% of 350, compute 10% = 35, plus 7% = 7 × 3.5 = 24.5. Total ≈ 59.5.
- Doubling and halving preserves a product: `25 × 16 = 50 × 8 = 100 × 4 = 400`. Cleaner numbers, same answer.

**The answer-choice-as-input strategy.** On many Problem Solving questions, plugging the answer choices back into the problem is faster than solving algebraically. If the answers are small integers, plug in the middle value first: if the answer is too big, try a smaller one; if too small, try a bigger one. On average you eliminate two choices with one calculation.

**Compute-exactly signals:**

- Answer choices are close (within 10% of each other).
- The question asks for a remainder or a specific digit.
- The problem says "exactly" or "precisely."

**Estimate signals:**

- Answer choices are spread (each differs from the next by 50%+).
- The problem says "approximately" or "closest to."
- You're multiplying messy decimals and one choice is obviously nearest.

> **Trap to watch.** Estimation doesn't mean "guess." It means "round each number to a cleaner value, compute, and check the direction of your rounding error." If you rounded up twice, your estimate is too high; mentally adjust down.

## @summary

Arithmetic is not a separate Quant topic — it's the substrate that every other Quant topic sits on. A word problem about ratios, a Data Sufficiency about remainders, a geometry problem about a circle — all of them reduce at some point to an arithmetic operation. The students who score above 685 are not better at algebra than 605 scorers; they're dramatically faster and more accurate at arithmetic.

**The seven habits that produce that speed:**

1. **Respect PEMDAS, especially the subtraction-associativity trap.** Multiplication and division always bind tighter than addition and subtraction, and subtraction only runs left to right.
2. **Know your fraction-decimal-percent conversions cold.** Sevenths, eighths, and ninths come up constantly; memorize their decimal forms once and never compute them again.
3. **Simplify fractions before you compute.** Cancel common factors diagonally before multiplying. Reduce at the end so your answer matches the test's "simplified" form.
4. **Track signs deliberately.** Odd count of negatives → negative product. Always wrap negations inside parentheses when squaring.
5. **Check the integer assumption.** The problem must tell you x is an integer — never assume. Terminating-decimal fractions have denominators whose only prime factors are 2 and 5.
6. **Scan answer choices before computing.** Spread choices → estimate. Tight choices → compute. Plugging answers back in is often faster than algebra.
7. **Use the complement.** 15% off = pay 85%. "At least one" = total minus none. Framing a percent or count the easier way saves 20+ seconds per question.

**Common patterns to pattern-match on sight:**

| Problem says | Habit | Shortcut |
|---|---|---|
| "X% discount" | Multiply by `(1 − X/100)` | One step instead of two |
| "Sum of consecutive integers" | Middle term × count | Skip summation |
| "Simplified fraction" | Reduce fully | `42/98 = 3/7` |
| "Closest to" | Estimate then cross-check | Cross-multiply for exact gaps |
| "Units digit of large power" | Check cycle | Powers of 2, 3, 7, 8 cycle mod 4 |
| Compound percent change | Multiply factors | `1.20 × 0.80 = 0.96` |

You're going to do 20 arithmetic problems at the end of this chapter. Keep this table open the first time through. By the third time, you won't need it — the habits will be reflexes, and that's when your Quant pace jumps.
