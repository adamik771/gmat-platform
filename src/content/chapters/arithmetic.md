---
slug: arithmetic
title: Arithmetic & Operations
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  Arithmetic is the substrate beneath every Quant topic. A word problem about ratios, a DS question about remainders, a geometry problem about a circle — all reduce to arithmetic operations. Students who score above 685 are not better at algebra than 605 scorers; they are faster and more accurate at arithmetic. This chapter drills the seven operational habits that build that speed.
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
    title: "Order of operations — PEMDAS and the three traps inside it"
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
    title: "Estimation and units digits — when to compute and when to approximate"
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

Every student has heard of PEMDAS — Parentheses, Exponents, Multiplication/Division, Addition/Subtraction. That's not what I'm going to teach you. What I'm going to teach you is the three traps inside PEMDAS that the GMAT mines for wrong answers.

**Mental model.** Arithmetic is grammar. Order of operations, sign rules, fraction-handling — these are the syntax that has to be mechanical before any quant skill can run on top. A 700+ student doesn't think faster than a 600 student here; they make fewer sloppy moves per minute. Every arithmetic mistake on a hard problem is a rule you let yourself break under pressure.

**Trap one: multiplication and division bind tighter than addition and subtraction, full stop.** When you see `8 − 2 × 4`, your brain reads left to right and wants to say "8 minus 2 is 6, times 4 is 24." That is wrong. The multiplication happens first: `2 × 4 = 8`, then `8 − 8 = 0`. The GMAT writes expressions specifically to bait left-to-right processing.

**Example.** `8 − 2 × (3 − 5)² + 12 / 4`

- Parentheses: `(3 − 5) = −2`
- Exponent: `(−2)² = 4`
- Multiplication and division (left to right): `2 × 4 = 8`, `12 / 4 = 3`
- Addition and subtraction (left to right): `8 − 8 + 3 = 3`

**Trap two: subtraction and division are not associative.** `10 − 3 − 2` equals `5`, not `9`. You must go left to right: `10 − 3 = 7`, then `7 − 2 = 5`. If you instead compute `3 − 2 = 1` first and then `10 − 1 = 9`, you've invented a new problem. Division has the same trap: `24 / 4 / 2 = 3`, not `12`. Chained subtractions and divisions always go left to right unless parentheses tell you otherwise.

**Trap three: a leading negative distributes to every term inside parentheses.** `−(3 − 5)` is NOT `−3 − 5 = −8`. It is `−3 + 5 = 2`. Think of the negative sign as `−1 ×`, and distribute it: `(−1)(3) + (−1)(−5) = −3 + 5 = 2`. Under time pressure, students apply the negative to the first term only and forget the rest. The habit: mentally write `−1 ×` before any parenthesis with a leading negative, and distribute to every term.

**The scan habit.** Before evaluating any expression, take five seconds to scan for: parentheses to resolve, exponents to expand, and leading negatives that distribute. That scan prevents the 60-second backtrack when a sign error shows up at the end.

> **Self-explanation prompt.** Before you look at the check question, explain in one sentence: *why* does multiplication happen before subtraction? If you can articulate that multiplication is a compact representation of repeated addition — so `2 × 4` is already `4 + 4`, already an addition — you'll stop making the left-to-right mistake.

## @fractions-fluency

If I could pick one skill that separates 685+ scorers from 605 scorers on Quant, it would be fraction fluency. Not "can you add fractions" — every student can eventually add fractions. Fluency means you see `3/8 + 5/12` and the answer `19/24` appears in your head within five seconds without scratch paper.

**Step zero: finding the LCD in ten seconds.** Before you add or subtract fractions, you need the Least Common Denominator (LCD) — the smallest number both denominators divide into cleanly. Most students skip this step and multiply denominators blindly, producing larger numbers than necessary.

*If one denominator divides the other, use the larger one.* `1/6 + 5/12`: since 6 divides 12, the LCD is 12 immediately. No calculation needed.

*When they share a common factor, use the LCM formula.* `LCM(a, b) = (a × b) / GCF(a, b)`.

Example: `3/8 + 5/12`. `GCF(8, 12) = 4`, so `LCM = (8 × 12) / 4 = 96/4 = 24`. The LCD is 24.

*Prime-factor shortcut.* `8 = 2³`, `12 = 2² × 3`. The LCM takes the highest power of every prime that appears: `2³ × 3 = 24`. Useful when the numbers are unfamiliar.

Once you have the LCD, find each numerator's multiplier by dividing the LCD by each original denominator. `3/8 + 5/12` with LCD 24: divide `24 / 8 = 3`, multiply: `9/24`. Divide `24 / 12 = 2`, multiply: `10/24`. Sum: `19/24`.

**The three fraction operations, ranked by how often they trap students:**

**1. Adding and subtracting** requires a common denominator. Find the LCD first, convert every fraction, then combine numerators only. `3/4 + 5/8 − 1/2`: LCD is 8. Convert: `6/8 + 5/8 − 4/8 = 7/8`.

**2. Multiplying** is the easy operation: `(a/b) × (c/d) = ac/bd`. No common denominator needed. But the speed gain comes from canceling before you multiply.

**3. Dividing** means multiplying by the reciprocal: `(a/b) ÷ (c/d) = (a/b) × (d/c)`. Resolve the numerator and denominator independently before dividing. `(1 + 1/2) / (1 − 1/3)` → top: `3/2`, bottom: `2/3` → `(3/2) × (3/2) = 9/4`.

**Cancel early, cancel hard.** This is the single habit that saves the most arithmetic time on the GMAT.

Slow approach for `(15 × 28) / (21 × 25)`: multiply numerator `15 × 28 = 420`, multiply denominator `21 × 25 = 525`, then reduce `420/525`. Messy.

Fast approach: cancel before multiplying. `15/25 = 3/5`. `28/21 = 4/3`. Now the expression is `(3 × 4) / (5 × 3) = 12/15 = 4/5`. The largest number you touch is 15.

The rule: before computing, look for common factors between any numerator and any denominator — diagonal, vertical, horizontal — and cancel wherever you see a match.

**Mixed numbers.** A mixed number like `2⅓` means `2 + 1/3`. As an improper fraction: multiply the whole number by the denominator and add the numerator: `(2 × 3 + 1) / 3 = 7/3`. Reverse: `7 ÷ 3 = 2` with remainder `1`, so `7/3 = 2⅓`.

The GMAT rarely writes mixed numbers, but when it does, students who stall at this conversion lose 20–30 seconds. Practice: `3¾ → 15/4`. `5⅖ → 27/5`. Make it automatic.

**The simplification habit.** Always fully reduce your final answer. `42/98 = 3/7` (divide both by GCF = 14). `18/24 = 3/4` (divide both by GCF = 6). The GMAT lists `6/14` or `21/49` as trap choices — equivalent to `3/7` but not in simplest form. "Simplified" means the GCF of numerator and denominator is 1.

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

Multiples follow from these: `3/8 = 3 × 0.125 = 0.375`, `5/8 = 0.625`, `7/8 = 0.875`. When you see `0.375` in an answer choice, *see* `3/8` without computing it.

**Trap to watch.** A complex fraction like `(a + b/c) / d` is NOT `(a + b) / (cd)`. Resolve the numerator fully first: `a + b/c = (ac + b)/c`, then divide by `d`: result is `(ac + b)/(cd)`. Skipping this step produces an answer that has the wrong numerator.

> **Recall check.** Cover this section. Write down: (1) the LCM formula, (2) the three steps to add `3/8 + 5/12`, and (3) the decimal equivalents of `1/8`, `3/8`, `5/8`, `7/8`. The LCM formula and conversion table must be instant recall, not re-derivation.

## @decimals-and-percents-conversion

Decimals, fractions, and percents are three notations for the same number. A student who fluently switches between them saves 20–30 seconds on every percent problem. A student who can't switch gets bogged down in `0.875 × 80` when they could have written `7/8 × 80 = 70`.

**The conversion triangle:**

- **Fraction → decimal:** divide numerator by denominator. `3/4 = 3 ÷ 4 = 0.75`.
- **Decimal → percent:** multiply by 100 (shift decimal point two places right). `0.75 = 75%`.
- **Percent → decimal:** divide by 100 (shift two places left). `40% = 0.40`.
- **Percent → fraction:** write over 100, then simplify. `40% = 40/100 = 2/5`.

**Benchmark percents to know cold:**

| Percent | Fraction | Fast path |
|---|---|---|
| 5% | 1/20 | Half of 10% |
| 10% | 1/10 | Move decimal left one |
| 12.5% | 1/8 | Eighth of 100 |
| 20% | 1/5 | Divide by 5 |
| 25% | 1/4 | Quarter |
| 33.3% | 1/3 | Third |
| 50% | 1/2 | Half |
| 66.7% | 2/3 | Two-thirds |
| 75% | 3/4 | Three-quarters |

These replace decimal multiplication with fraction multiplication, which is faster. `33.3% of 90` → `(1/3) × 90 = 30`. `12.5% of 56` → `(1/8) × 56 = 7`.

**Example (percent discount).** A shirt priced at $80 is discounted by 15%. What's the sale price?

The *complement* move: 15% off means you pay 85% of the original. `0.85 × 80 = 68`. One multiplication instead of two steps. Whenever you see "X% off," convert to "pay (100 − X)%" and multiply directly.

**Example (decimal multiplication).** `0.125 × 0.4`. Recognize `0.125 = 1/8` and `0.4 = 2/5`. Then `(1/8) × (2/5) = 2/40 = 1/20 = 0.05`. This is four times faster than multiplying decimals directly.

**Successive percent changes.** A $100 item goes up 20% to $120, then takes a 20% discount to `0.80 × 120 = 96`. Final price is 96% of original, not 100%. The 20% discount applies to the *new* base ($120), not the original ($100) — so the 20% cut removes more dollars than the 20% raise added.

**The compound-percent formula.** To combine a +X% change and then a +Y% change: multiply `(1 + X/100) × (1 + Y/100)`. A 20% raise followed by a 20% cut is `1.20 × 0.80 = 0.96`, a 4% net decrease. The shortcut: chained percent changes multiply, they never cancel symmetrically.

**Percent change vs. percentage-point change.** "Unemployment rose from 6% to 9%." That is a 3 *percentage-point* increase, but a `(9 − 6)/6 = 50%` percent increase. When the GMAT asks "by how many percentage points did X change," compute the arithmetic difference. When it asks "by what percent did X change," compute the relative change: `(new − old) / old × 100`.

**Trap to watch.** "What percent of 80 is 20?" and "20 is what percent of 80?" are the same question: `20/80 = 25%`. But "80 is what percent of 20?" is `80/20 = 400%`. Always ask: *what am I dividing by?* The "of" quantity goes in the denominator.

> **Self-explanation prompt.** In one sentence, why does a 20% raise followed by a 20% cut not return to the original price? If you can explain "the cut operates on a larger base than the raise did," you'll never fall for the "they cancel" trap again.

> **Recall check.** Close the book. Write down from memory the decimal equivalents of: `1/8`, `3/8`, `5/8`, `7/8`, `1/9`, `2/9`, `1/6`, `5/6`. Score yourself. Re-study the ones you missed, then retest in 10 minutes. Short-gap retrieval practice builds more durable memory than re-reading.

## @signs-and-negatives

Signed-number arithmetic is where careful students lose points not because they don't know the rules, but because they skip them under time pressure. The rules are short — memorize them once and never doubt them.

**Multiplication and division of signs:**

- Same sign → positive: `(−)(−) = +` and `(+)(+) = +`
- Different signs → negative: `(+)(−) = −` and `(−)(+) = −`

**Parity shortcut for products.** A product is negative if and only if there is an *odd* number of negative factors. Count the negatives; if odd, the product is negative.

- `(−2)(−3)(−4) = −24` — three negatives (odd) → negative
- `(−2)(−3)(−4)(−5) = 120` — four negatives (even) → positive

Count before computing; skip carrying the sign through each step.

**Addition and subtraction of signed numbers:**

- Same sign → add magnitudes, keep the sign. `−7 + (−3) = −10`.
- Different signs → subtract magnitudes, keep the sign of the larger. `−7 + 3 = −4`; `7 + (−3) = 4`.
- Subtracting a negative equals adding: `5 − (−3) = 5 + 3 = 8`.

**Absolute value.** `|x|` is the distance of x from zero — always non-negative. `|−3| = 3`, `|3| = 3`, `|0| = 0`.

Key identity: `|x − y| = |y − x|`. Distance is symmetric. When an expression contains both `|x − y|` and `|y − x|`, they are equal and their difference is zero.

**Absolute value equations: the two-case rule.** `|2x − 7| = 11` means the expression inside has distance 11 from zero — it equals either +11 or −11:

- Case 1: `2x − 7 = 11` → `x = 9`
- Case 2: `2x − 7 = −11` → `x = −2`

Sum: `9 + (−2) = 7`. The two solutions are always symmetric about the zero point of the expression inside (`x = 7/2 = 3.5`), so their sum is `2 × 3.5 = 7`. Use this symmetry when the GMAT asks for the sum of solutions — it takes 5 seconds instead of 25.

**Absolute value inequalities.** Two rules cover every case:

- `|expression| < k` means the expression is *between* −k and k: `−k < expression < k`.
- `|expression| > k` means the expression is *outside* −k and k: expression > k *or* expression < −k.

Example: `|x − 3| < 5` → `−5 < x − 3 < 5` → `−2 < x < 8`.

**Trap to watch.** `(−3)² = 9`, but `−3² = −9`. The exponent binds tighter than the negation unless the negative is inside parentheses. Mentally parse `−3²` as `−(3²) = −9`. When squaring a negative number, put it in parentheses first.

> **Self-explanation prompt.** Without looking: state the two-case rule for `|expression| = k`, and explain why the sum of the two solutions always equals `2 × (the value that makes the expression zero)`. If you can produce the symmetry argument, you've owned the pattern — not just the formula.

## @integers-vs-non-integers

The GMAT cares intensely about whether a number is an integer or not. Many Data Sufficiency questions hinge on this single distinction, and many Problem Solving traps plant a non-integer where a student assumed an integer.

**Integer facts to internalize:**

- Integers include negatives, zero, and positives: `…, −3, −2, −1, 0, 1, 2, 3, …`
- Zero is an integer. Zero is even. Zero is neither positive nor negative.
- Zero is a multiple of every integer, since `0 = 0 × n` for any integer n.
- "Positive integer" means `1, 2, 3, …` — zero is excluded. Read that constraint carefully every time.

**The DS integer-assumption trap.** "x is a positive number" does NOT mean "x is a positive integer." The GMAT relies on students defaulting to integers when the problem doesn't require it. On Data Sufficiency, whenever a constraint says only "positive" or "real," test a fractional value as your counterexample.

Example: Is `x² > x`? If `x = 2`, then `4 > 2` — yes. If `x = 0.5`, then `0.25 > 0.5` — no. The statement "x is positive" is insufficient because x could be `0.5`. Only when the constraint explicitly says "x is a positive integer greater than 1" is the answer always yes.

**LCM and GCF — the two integer-operation tools.** These appear in fractions, number properties, and word problems:

*Greatest Common Factor (GCF):* the largest integer that divides both numbers cleanly. `GCF(12, 18) = 6`. Use it to reduce fractions and to find the LCM.

*Least Common Multiple (LCM):* the smallest integer divisible by both numbers. `LCM(4, 6) = 12`. Use it as the LCD when adding fractions.

Fast formula: `LCM(a, b) = (a × b) / GCF(a, b)`. So `LCM(4, 6) = 24/2 = 12`. For any two numbers, find the GCF first, then this formula computes the LCM in one step.

**Terminating vs. non-terminating decimals.** A fraction `a/b` in lowest terms has a terminating decimal if and only if `b` has no prime factors other than 2 and 5.

- `3/8 = 0.375` → `b = 2³`, only 2s → terminates
- `1/3 = 0.333…` → `b = 3`, a factor of 3 → doesn't terminate
- `1/6 = 0.1666…` → `b = 2 × 3`, the 3 forces non-termination
- `7/40 = 0.175` → `b = 2³ × 5`, only 2s and 5s → terminates

**The fraction-comparison shortcut.** `p/q > 1/2` is equivalent to `2p > q` (when `q > 0`). You can cross-multiply to compare fractions directly, but only when you know the denominators are positive. If q could be negative, the inequality flips — and DS problems exploit this ambiguity.

**Trap to watch.** "x is a positive number" does NOT mean "x is a positive integer." Always read the problem twice to check whether the integer constraint was explicitly given. Fractions and decimals are valid values unless excluded, and they regularly produce different yes/no answers on DS.

> **Self-explanation prompt.** Why does `1/7` not terminate? If you can say "because 7 has no factors of 2 or 5, so no power of 10 is divisible by 7, so the decimal never closes," you've internalized the rule — and you'll never have to memorize a list of terminating decimals.

## @estimation-tricks

Two skills in this section save time on Quant: knowing *when* to estimate rather than compute exactly, and knowing the *units-digit cycle* — which lets you find the last digit of any large power in five seconds flat.

**The answer-choice scan.** Before computing anything, look at the answer choices. If they are spread (5, 15, 50, 150, 500), estimate. If they are close (11, 12, 13, 14, 15), compute exactly. This 3-second scan determines your entire strategy for the question.

**Estimation heuristics:**

- `π ≈ 3.14 ≈ 22/7`. Close enough for every GMAT geometry question.
- `√2 ≈ 1.414`, `√3 ≈ 1.732`, `√5 ≈ 2.236`. Recognize these on sight; don't compute them under time pressure.
- 10% of any number moves the decimal left one. 5% is half of 10%. For 17% of 350: `10% = 35`, `7% = 7 × 3.5 = 24.5`, total `≈ 59.5`.
- Doubling and halving preserves a product: `25 × 16 = 50 × 8 = 100 × 4 = 400`. Use it to create rounder numbers that are easier to multiply mentally.

**The units-digit cycle.** The GMAT frequently asks for the units digit of a large power such as `7^{24}` or `3^{41}`. You never need to compute the full power. Every integer's units digit follows a predictable cycle of length 1, 2, or 4.

| Base units digit | Cycle | Period |
|---|---|---|
| 0, 1, 5, 6 | Always 0, 1, 5, 6 (fixed) | 1 |
| 4 | 4, 6, 4, 6, … | 2 |
| 9 | 9, 1, 9, 1, … | 2 |
| 2 | 2, 4, 8, 6, 2, 4, 8, 6, … | 4 |
| 3 | 3, 9, 7, 1, 3, 9, 7, 1, … | 4 |
| 7 | 7, 9, 3, 1, 7, 9, 3, 1, … | 4 |
| 8 | 8, 4, 2, 6, 8, 4, 2, 6, … | 4 |

**How to use it:**

1. Look at only the units digit of the base.
2. Find its cycle length from the table.
3. Divide the exponent by the cycle length and find the remainder.
4. The remainder maps to the position in the cycle (treating remainder 0 as the last position).

**Example.** Units digit of `7^{24}`:

- Base ends in 7. Cycle: 7, 9, 3, 1 (length 4).
- 24 ÷ 4 = 6 exactly, remainder **0** → last position in cycle → **1**.

Units digit of `7^{24}` is **1**.

**Example.** Units digit of `3^{41}`:

- Base ends in 3. Cycle: 3, 9, 7, 1 (length 4).
- 41 ÷ 4 = 10 remainder **1** → first position in cycle → **3**.

Units digit of `3^{41}` is **3**.

**Example.** Units digit of `4^{17}`:

- Base ends in 4. Cycle: 4, 6 (length 2).
- 17 ÷ 2 = 8 remainder **1** → first position → **4**.

Units digit of `4^{17}` is **4**.

**The answer-choice-as-input strategy.** On Problem Solving questions with small integer answer choices, plug the middle answer in first. If the result is too large, try a smaller choice; if too small, try larger. Two tests usually isolate the answer — often faster than solving algebraically.

**Compute-exactly signals:**

- Answer choices are close (within 10% of each other)
- The question asks for a specific digit or remainder
- The problem says "exactly" or "precisely"

**Estimate signals:**

- Answer choices are spread (each ≥ 50% larger than the prior)
- The problem says "approximately" or "closest to"
- You're multiplying multi-digit decimals

**Trap to watch.** Estimation doesn't mean guessing. It means rounding each number to a cleaner value, computing with the rounder numbers, and tracking the direction of rounding error. If you rounded two quantities up, your estimate is too high; nudge down when picking the closest answer choice.

> **Self-explanation prompt.** Without looking at the table: what is the units digit of `2^{100}`? Walk through it: cycle for 2 is 2, 4, 8, 6 (length 4). `100 ÷ 4 = 25` remainder 0 → last position in cycle → **6**. If you produced the answer cleanly, the cycle is in your memory.

## @summary

Arithmetic is not a separate Quant topic — it's the substrate every other Quant topic sits on. A word problem about ratios, a Data Sufficiency about remainders, a geometry problem about a circle — all reduce to arithmetic at some point. Students who score above 685 are not better at algebra than 605 scorers; they are faster and more accurate at arithmetic.

**The seven habits that produce that speed:**

1. **Respect PEMDAS, all three traps.** Multiplication and division bind tighter than addition and subtraction. Subtraction runs left to right only. A leading `−(expression)` distributes the negative to every term inside the parentheses.

2. **Find the LCD before adding fractions. Cancel before multiplying.** Use `LCM(a, b) = (a × b) / GCF(a, b)` to compute the LCD fast. Cancel common factors diagonally before multiplying. Reduce fully at the end — the GMAT lists "partially simplified" fractions as trap answers.

3. **Know your fraction-decimal-percent conversions cold.** Sevenths, eighths, and ninths come up constantly. Know the benchmark percents (5%, 12.5%, 25%, 33⅓%, 66⅔%, 75%) as fractions for one-step multiplication.

4. **Track signs deliberately.** Count the negatives in a product — odd count means negative result. Wrap negations inside parentheses when squaring. Subtracting a negative equals adding.

5. **Check the integer assumption.** The problem must explicitly say x is an integer — never assume. When a constraint says only "positive," test a fractional counterexample before concluding sufficiency.

6. **Use the units-digit cycle for large powers.** Digits 0, 1, 5, 6 are fixed. Digits 4 and 9 cycle with period 2. Digits 2, 3, 7, 8 cycle with period 4. Divide the exponent by the period; the remainder gives the position in the cycle.

7. **Scan answer choices before computing.** Spread choices → estimate. Tight choices → compute. Plug the middle answer choice when backsolving is faster than algebra.

**Common patterns to pattern-match on sight:**

| Problem says | Habit | Shortcut |
|---|---|---|
| "X% discount" | Multiply by `(1 − X/100)` | One step instead of two |
| "Sum of consecutive integers" | Middle term × count | Skip summation |
| "Simplified fraction" | Reduce fully with GCF | `42/98 = 3/7` |
| "Closest to" | Estimate, then cross-check | Cross-multiply for exact gaps |
| "Units digit of large power" | Units-digit cycle | Divide exponent by period (4 or 2) |
| Compound percent change | Multiply factors | `1.20 × 0.80 = 0.96` |
| "By how many percentage points" | Arithmetic difference | New minus old |
| "By what percent did it change" | Relative change | `(new − old) / old` |

Work through the three problem sets in order — easy, then medium, then hard. Keep this table open the first time through. By the third session, you won't need it — the habits will be reflexes.
