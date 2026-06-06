---
slug: arithmetic
title: Arithmetic & Operations
section: Quant
estimated_minutes: 60
prerequisites: []
summary: |
  Arithmetic is roughly 30% of the Quant section and 100% of the substructure beneath every other topic. The GMAT doesn't reward you for knowing fractions — it punishes you for not knowing them cold. This chapter drills nine operational habits that separate students who finish Quant with 10 minutes to spare from students who guess on the last four questions because they burned 90 seconds converting 3/8 to a decimal.
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
    intro: |
      PEMDAS isn't the skill — the two traps *inside* it are. Multiplication always binds tighter than subtraction regardless of left-to-right order, and a negative sign outside parentheses distributes to every term inside. Learn both once, eliminate an entire mistake class permanently.
    check_question_ids:
      - arithmetic-q16

  - id: fractions-fluency
    type: reading
    title: "Fractions — the single highest-leverage arithmetic skill"
    intro: |
      The gap between a 605 and a 685 Quant scorer is not algebra — it is fraction speed. Both students can add fractions. The difference is whether they need scratch paper and 25 seconds, or their head and 5 seconds. This section closes that gap by building the cancel-first, simplify-early habits that remove the slow steps.
    check_question_ids:
      - arithmetic-q15

  - id: gcf-lcm
    type: reading
    title: "GCF and LCM — the machinery behind every fraction operation"
    intro: |
      GCF and LCM are not standalone topics — they are the tools that make fraction simplification and common-denominator work fast. A student who finds GCF(42, 98) in five seconds never needs to reduce by trial and error again. The same student who knows LCM(8, 12) = 24 mentally never hunts for a common denominator. These two tools also surface directly in DS and word problems: "when do two events coincide?" is pure LCM in disguise.
    check_question_ids:
      - arithmetic-q13

  - id: decimals-and-percents-conversion
    type: reading
    title: "Decimals and percents — three notations, one number"
    intro: |
      Fraction, decimal, and percent are three notations for the same number. The student who converts fluently between them saves 20-30 seconds on every percent problem — enough to answer one additional question. The complement move (15% off = pay 85%) and the "percent of a percent" rule collapse two-step problems into one.
    check_question_ids:
      - arithmetic-q2
      - arithmetic-q4

  - id: signs-and-negatives
    type: reading
    title: "Signs and negatives — keeping the minus signs from eating your time"
    intro: |
      Signed-number mistakes are GMAT's quietest point-killers. The rules fit in four lines — this section lists them all. The problem isn't recognition; it's the habit of applying them under time pressure without breaking one. Drill the rules until the correct answer feels *wrong* when you make the mistake, not just after you've already bubbled it.
    check_question_ids:
      - arithmetic-q17

  - id: integers-vs-non-integers
    type: reading
    title: "Integers vs. non-integers — knowing which world you're in"
    intro: |
      This looks like a vocabulary distinction. On Data Sufficiency, it is often *the* question. Whether a variable can be a fraction changes the answer from "sufficient" to "not sufficient" on a significant share of medium-hard DS problems. The rule: *the problem must explicitly state that x is an integer — never assume it*.
    check_question_ids:
      - arithmetic-q18

  - id: units-digit-patterns
    type: reading
    title: "Units digit patterns — answering power questions in 10 seconds"
    intro: |
      The units digit of any power follows a short repeating cycle that depends only on the units digit of the base — nothing else. Memorize the eight cycles in this section and you will answer every "what is the units digit of X^n?" question in under 15 seconds. The only arithmetic required is dividing the exponent by 4.
    check_question_ids: []

  - id: estimation-tricks
    type: reading
    title: "Estimation — when to compute and when to approximate"
    intro: |
      A question with answer choices spread 10× apart shouldn't take 90 seconds — it should take 20. The "scan before computing" reflex is what separates students who finish Quant from those who guess on the last three questions. This section builds that reflex and gives you the four estimation heuristics worth keeping in your head for the rest of prep.
    check_question_ids:
      - arithmetic-q19

  - id: summary
    type: summary
    title: "The nine arithmetic habits"
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
      - arithmetic-q25
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

**Micro-drill.** Compute each without a calculator — 45 seconds total:

1. `5/6 − 3/8` → ___
2. `(15 × 28) / (21 × 20)` → ___
3. `(1 + 3/4) / (1 − 1/4)` → ___

Answers: (1) **11/24** (LCD 24: 20/24 − 9/24). (2) **1** (cancel before multiplying: 15/21 = 5/7 and 28/20 = 7/5; product is 1). (3) **7/3** (numerator = 7/4, denominator = 3/4; divide by flipping: 7/4 × 4/3 = 7/3). If (2) took more than 10 seconds, you computed instead of canceling — go back to the "cancel early" habit above. If (3) tripped you, the rule is: resolve the compound fractions in numerator and denominator first, then divide.

**Trap to watch.** A complex fraction like `(a + b/c) / d` is `(ac + b) / (cd)`, not `(a + b) / (cd)`. Resolve the numerator fully — `a + b/c = (ac + b)/c` — before you divide.

## @gcf-lcm

GCF and LCM are the machinery beneath fraction simplification and common-denominator work. Learn both algorithms once and you will never reduce fractions by guessing or hunt for a common denominator by listing multiples.

**GCF — two methods:**

**Method 1: prime factorization.** Factor both numbers into primes, take each shared prime at its *lowest* exponent, multiply.

- GCF(42, 98): `42 = 2 × 3 × 7` and `98 = 2 × 7²`. Shared primes: 2¹ and 7¹. GCF = 2 × 7 = **14**.

**Method 2: Euclidean algorithm.** Replace the larger number with the remainder of dividing larger by smaller. Repeat until the remainder is 0; the last non-zero remainder is the GCF. Faster for larger numbers.

- GCF(98, 42): 98 = 2 × 42 + 14. Now GCF(42, 14): 42 = 3 × 14 + 0. GCF = **14**.

GMAT speed standard: for two-digit numbers, prime factorization is usually faster. For three-digit or larger, use the Euclidean algorithm.

**LCM — two methods:**

**Formula:** LCM(a, b) = (a × b) / GCF(a, b). Once you have the GCF, LCM costs one multiplication and one division.

- LCM(8, 12): GCF(8, 12) = 4. LCM = (8 × 12) / 4 = **24**.

**Via prime factorization:** take each prime factor at its *highest* exponent.

- LCM(8, 12): `8 = 2³`, `12 = 2² × 3`. LCM = 2³ × 3 = **24**. (Compare to GCF: same prime factors, but GCF uses the min exponent and LCM uses the max.)

**Why GCF and LCM matter on the GMAT:**

1. **Fraction simplification.** Divide numerator and denominator by GCF. `42/98 ÷ (14/14) = 3/7`. No guessing, one step.
2. **Adding fractions.** The LCD is the LCM of the denominators. `1/8 + 1/12` → LCD = LCM(8, 12) = 24 → `3/24 + 2/24 = 5/24`.
3. **Cycle word problems.** "Two buses depart together; bus A runs every 8 minutes, bus B every 12 minutes. When do they next depart together?" → LCM(8, 12) = **24 minutes**. Any "when do two periodic events coincide?" question is LCM in disguise.
4. **Data Sufficiency.** "Is GCF(x, y) > 1?" — the test will ask this in disguise as "do x and y share a common prime factor?" or "is there a number greater than 1 that divides both x and y?"

**The "fully reduced" check.** After reducing a fraction, verify the result by checking that numerator and denominator share no prime factors. For `3/7`: 3 is prime, 7 is prime, they're different — fully reduced. For `6/14`: both are divisible by 2 → not reduced. The GMAT includes partially-reduced equivalents as trap answer choices (see Q13).

**Micro-drill.** Under 45 seconds total:

1. GCF(36, 48) = ___
2. LCM(9, 15) = ___
3. Add `5/12 + 7/18` in simplified form = ___

Answers: (1) **12** (`36 = 2² × 3²`, `48 = 2⁴ × 3`; GCF = 2² × 3 = 12). (2) **45** (GCF(9,15) = 3; LCM = 9 × 15 / 3 = 45). (3) **29/36** (LCD = LCM(12,18) = 36; `15/36 + 14/36 = 29/36`; GCF(29,36) = 1, fully reduced). If (1) gave 6, you found *a* common factor but not the *greatest* — always verify that the quotients share no further factors.

> **Self-explanation prompt.** Why is LCM = (a × b) / GCF? If you can say "because multiplying a and b double-counts the shared factors, so dividing by GCF removes the double-counting exactly once," you understand the relationship — not just the formula.

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

**Compound interest.** A = P(1 + r)^n. For $10,000 at 4% for 2 years: A = 10,000 × (1.04)² = 10,000 × 1.0816 = $10,816. Interest = $816, not $800 (simple interest). The difference ($16) is the second year's interest on the first year's interest. On the GMAT, compound questions always have "simple interest" as a trap answer.

**Trap to watch.** "What percent of 80 is 20?" and "20 is what percent of 80?" are the same question: `20/80 = 25%`. But "80 is what percent of 20?" is different: `80/20 = 400%`. Always ask: *what am I dividing by?* The "of" quantity goes in the denominator.

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

**Trap to watch.** `(−3)² = 9`, but `−3² = −9`. The exponent binds tighter than the negation unless the negative is inside parentheses. Write out `−3²` as `−(3²)` in your head.

**Micro-drill.** Evaluate each — 10 seconds each:

1. `(−3)² − 3²` → ___
2. `−(5 − 9)²` → ___
3. `|3 − 8| × |8 − 3|` → ___
4. `(−1)(−2)(−3)(−4)` → ___

Answers: (1) **0** — (−3)² = 9 and 3² = 9, difference is 0. (2) **−16** — parens: −4, squared: 16, then the leading minus: −16. (3) **25** — |−5| = 5 and |5| = 5, product 25. (4) **24** — four negative factors = even count = positive; 1×2×3×4 = 24. If (1) gave you −18, you treated `(−3)²` as `−(3²) = −9` — the parentheses include the negative in the base. If (4) gave you −24, the even-negative-count rule isn't automatic yet: re-read the "same/different signs" rules above until it is.

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

**Trap to watch.** "x is a positive number" does NOT mean "x is a positive integer." Always read the problem twice to check whether the integer constraint was given. Students who assume integers when the problem allowed rationals lose points on Data Sufficiency constantly.

**The DS integer-assumption pattern — one of the highest-leverage distinctions in this chapter.**

The GMAT will state integer constraints explicitly when they matter, using language like "n is a positive integer," "k is a whole number," "x is divisible by 3," or "p is prime." If those words aren't there, x can be 1.5, 0.7, or √2.

**Example.** Is x² > x?

- If x is any real number: x = 0.5 gives 0.25 > 0.5, which is false. x = 2 gives 4 > 2, which is true. Whether x² > x depends entirely on whether x > 1, x = 0 or 1, or x is between 0 and 1 or negative — no single statement can answer this without pinning x down precisely.
- Statement (1): x > 1. Then x² > x always (multiply both sides of x > 1 by x, which is positive). **Sufficient** — and "x > 1" says nothing about integers.

**The "x² = 9" sufficiency split.** What is x, given x² = 9?

- With no constraints: x = 3 or x = −3. **Not sufficient.**
- With "x is a positive real number": x = 3 only. **Sufficient.**
- With "x is a positive integer": x = 3 only. **Sufficient.**

Same equation; the sufficiency verdict changes with the domain. On every DS question involving a squared variable, ask immediately: "could x be negative?" If the problem doesn't rule it out, it can't be ruled out.

**DS language that signals integer context (pattern-match on sight):** "n is a positive integer" / "k is a whole number" / "factor of" / "multiple of" / "divisible by" / "prime" / "remainder when divided by" — any of these phrases signal you're in integer territory. Without them, stay in real-number territory and test fractions as candidates.

> **Self-explanation prompt.** Why does `1/7` not terminate? If you can say "because 7 has no factors of 2 or 5, so no power of 10 is divisible by 7," you've internalized the rule — and you'll never have to memorize terminating-decimal lists.

## @units-digit-patterns

The units digit of any power depends only on the units digit of the base — the higher digits are irrelevant. This means `17^83` has the same units digit as `7^83`, because when you multiply, the units digit of the product depends only on the units digits of the factors. Memorize the eight cycles below and you will answer these questions in under 15 seconds.

**The cycles:**

| Units digit of base | Cycle (1st, 2nd, 3rd, 4th power…) | Cycle length |
|---|---|---|
| 0 | 0, 0, 0, … | 1 — always 0 |
| 1 | 1, 1, 1, … | 1 — always 1 |
| 2 | **2, 4, 8, 6**, 2, 4, 8, 6, … | 4 |
| 3 | **3, 9, 7, 1**, 3, 9, 7, 1, … | 4 |
| 4 | **4, 6**, 4, 6, … | 2 — odd exp → 4, even exp → 6 |
| 5 | 5, 5, 5, … | 1 — always 5 |
| 6 | 6, 6, 6, … | 1 — always 6 |
| 7 | **7, 9, 3, 1**, 7, 9, 3, 1, … | 4 |
| 8 | **8, 4, 2, 6**, 8, 4, 2, 6, … | 4 |
| 9 | **9, 1**, 9, 1, … | 2 — odd exp → 9, even exp → 1 |

Bases 0, 1, 5, 6: units digit never changes. Bases 4, 9: two-step cycles (just check odd/even). Bases 2, 3, 7, 8: four-step cycles — use the remainder method below.

**Method for four-step cycles:**
1. Divide the exponent by 4 and find the remainder.
2. Match the remainder to the cycle position: remainder 1 → position 1, remainder 2 → position 2, remainder 3 → position 3, **remainder 0 → position 4** (the last in the cycle, not the first).

**Example.** Units digit of 7^83.
- Cycle for 7: (7, 9, 3, 1)
- 83 ÷ 4 = 20 remainder **3** → position 3 → units digit is **3**.

**Example.** Units digit of 2^100.
- Cycle for 2: (2, 4, 8, 6)
- 100 ÷ 4 = 25 remainder **0** → position 4 → units digit is **6**.

**The zero-remainder rule.** When the exponent is divisible by 4, the position is *4*, not 1. This is the most common mistake: remainder 0 maps to the last entry of the cycle. For base 7, that's 1; for base 2, that's 6; for base 3, that's 1; for base 8, that's 6.

**Compound example.** What is the units digit of 3^7 + 8^4?

- 3^7: 7 ÷ 4 = 1 r 3 → position 3 in (3, 9, 7, 1) → units digit **7**.
- 8^4: 4 ÷ 4 = 1 r 0 → position 4 in (8, 4, 2, 6) → units digit **6**.
- Sum: 7 + 6 = 13 → units digit of sum is **3**.

**Micro-drill.** Under 60 seconds total:

1. Units digit of 3^25 = ___
2. Units digit of 4^17 = ___
3. Units digit of 9^44 = ___
4. Units digit of 7^100 = ___

Answers: (1) **3** (25 ÷ 4 = 6 r 1 → position 1 → 3). (2) **4** (17 is odd → 4). (3) **1** (44 is even → 1). (4) **1** (100 ÷ 4 = 25 r 0 → position 4 of (7,9,3,1) → 1). If (2) gave 6, remember: for bases ending in 4, it's odd→4, even→6. If (4) gave 7, you treated remainder 0 as position 1 — it's always position 4.

> **Self-explanation prompt.** Why does only the units digit of the base matter? If you can say "because when multiplying integers, the units digit of the product equals the units digit of (units digit of factor 1 × units digit of factor 2)," you understand why `7^83` and `17^83` have the same units digit — and you'll never waste time writing out powers.

## @estimation-tricks

The GMAT rewards students who know when to estimate and when to compute exactly. On every Problem Solving question, scan the answer choices before you start. If the choices are spread (5, 15, 50, 150, 500), estimate. If they're close (11, 12, 13, 14, 15), compute.

**Example (estimation wins).** Which is closest to 1/3: 7/22, 11/32, 5/16, 9/28, or 13/40?

Convert each to a decimal and measure the gap from 1/3 ≈ 0.3333:

- `7/22 ≈ 0.318` (gap ≈ 0.015)
- `11/32 = 0.344` (gap ≈ 0.010)
- `5/16 = 0.3125` (gap ≈ 0.021)
- `9/28 ≈ 0.321` (gap ≈ 0.012)
- `13/40 = 0.325` (gap ≈ 0.008)

The closest is **13/40** (gap ≈ 0.008). A rigorous check uses cross-multiplication: for fraction p/q vs. 1/3, the gap equals |3p − q| / (3q). For 13/40: |39 − 40| / 120 = 1/120. For 11/32: |33 − 32| / 96 = 1/96. Since 1/120 < 1/96, 13/40 wins. The trap: students who compute gaps for only two or three choices and stop early often land on 11/32 — always compare all options before bubbling.

**Estimation heuristics worth memorizing:**

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

**Trap to watch.** Estimation doesn't mean "guess." It means "round each number to a cleaner value, compute, and check the direction of your rounding error." If you rounded up twice, your estimate is too high; mentally adjust down.

> **Recall check.** Without looking back, state the two conditions that tell you to estimate (spread choices, "approximately") and the two that tell you to compute exactly (tight choices, "remainder" or "exactly"). Now apply the filter: if the answer choices are 4.8, 5.0, 5.2, 5.4, 5.6 — do you estimate or compute? (Compute — the choices are within 17% of each other.) What if they're 5, 15, 45, 135, 405? (Estimate — each is 3× the previous.) The filter fires in under two seconds; by the time you've read the choices, your approach should already be chosen.

## @summary

Arithmetic is not a separate Quant topic — it's the substrate that every other Quant topic sits on. A word problem about ratios, a Data Sufficiency about remainders, a statistics question about a weighted average — all of them reduce at some point to an arithmetic operation. The students who score above 685 are not better at algebra than 605 scorers; they're dramatically faster and more accurate at arithmetic.

**The nine habits that produce that speed:**

1. **Respect PEMDAS, especially the subtraction-associativity trap.** Multiplication and division always bind tighter than addition and subtraction, and subtraction only runs left to right.
2. **Know your fraction-decimal-percent conversions cold.** Sevenths, eighths, and ninths come up constantly; memorize their decimal forms once and never compute them again.
3. **Simplify fractions before you compute.** Cancel common factors diagonally before multiplying. Reduce at the end so your answer matches the test's "simplified" form.
4. **Use GCF to simplify, LCM as the LCD.** These two tools replace all guessing and trial-and-error. If the LCD question slows you down, GCF and LCM are not automatic yet.
5. **Track signs deliberately.** Odd count of negatives → negative product. Always wrap negations inside parentheses when squaring.
6. **Check the integer assumption.** The problem must tell you x is an integer — never assume. Terminating-decimal fractions have denominators whose only prime factors are 2 and 5.
7. **Know your units-digit cycles.** Bases 0, 1, 5, 6 never change. Bases 4, 9 flip on odd/even exponent. Bases 2, 3, 7, 8 cycle in four steps; remainder 0 maps to position 4.
8. **Scan answer choices before computing.** Spread choices → estimate. Tight choices → compute. Plugging answers back in is often faster than algebra.
9. **Use the complement.** 15% off = pay 85%. "At least one" = total minus none. Framing a percent or count the easier way saves 20+ seconds per question.

**Common patterns to pattern-match on sight:**

| Problem says | Habit | Shortcut |
|---|---|---|
| "X% discount" | Multiply by `(1 − X/100)` | One step instead of two |
| "Compound interest, n years" | A = P(1 + r)^n | Don't use simple interest |
| "Sum of consecutive integers" | Middle term × count | Skip summation |
| "Simplified fraction" | Divide by GCF | `42/98 → GCF=14 → 3/7` |
| "Closest to" | Estimate, then cross-check all | Cross-multiply for exact gaps |
| "Units digit of large power" | Check cycle; use mod 4 | 7^83: remainder 3 → position 3 → 3 |
| Compound percent change | Multiply factors | `1.20 × 0.80 = 0.96` |
| "When do two events coincide?" | LCM of the two periods | Bus A every 8 min, B every 12 → 24 min |

**What to do next.**

1. **Easy set, no time limit.** Six questions covering fractions, percents, GCF, and integer operations. Goal: zero errors with the correct method, not lucky guesses. If you miss one, trace the failure to a specific habit, go back to that section, and redo its recall check before moving on.

2. **Medium set, target 2:00 per question.** Nine questions — includes compound interest (Q25) which layers percent fluency with the exponent formula. After each incorrect answer, write one sentence naming the specific habit that broke down.

3. **Hard set, untimed first pass.** The hard questions layer multiple habits: a fraction inside a negative-exponent expression, a percent change on a Data Sufficiency, or an estimation requiring knowing when *not* to estimate. Solve completely on the first pass without rushing; time yourself on the second.

4. **Error log rule.** Any arithmetic error you make on a non-arithmetic chapter (algebra, word problems) — trace it here, not to the topic chapter. Arithmetic errors happen inside other problems; they belong to the arithmetic habit that broke.

The students scoring 685+ on Quant are not faster thinkers — they make fewer arithmetic errors per minute because these nine habits run in the background without drawing on working memory. Drill until the habits are background noise.
