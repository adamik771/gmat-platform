---
slug: quant-06-fractions-decimals
title: "Arithmetic: Fraction & Decimal Fluency"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-05-order-and-signed-numbers
summary: |
  Fraction fluency is the single highest-leverage arithmetic skill: clean operations, fast comparison, decimal arithmetic without a calculator, and sight-speed conversion between fractions, decimals, and percents.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - arithmetic-q60
      - arithmetic-q65
  - id: fractions-fluency
    type: reading
    title: "Fraction operations — the single highest-leverage arithmetic skill"
    check_question_ids:
      - arithmetic-q15
      - arithmetic-q62
  - id: comparing-fractions
    type: reading
    title: "Comparing fractions — benchmarks, cross-multiplication, and the gap to 1"
    check_question_ids:
      - arithmetic-q42
  - id: decimals-and-percents-conversion
    type: reading
    title: "Decimals and conversions — three notations, one number"
    check_question_ids:
      - arithmetic-q61
      - arithmetic-q63
  - id: avoid-ugly-arithmetic
    type: reading
    title: "Make the arithmetic nicer"
    check_question_ids: []
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
      - arithmetic-q79
      - arithmetic-q14
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q64
      - arithmetic-q78
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - arithmetic-q125
      - arithmetic-q126
      - arithmetic-q67
      - arithmetic-q68
---

## @summary

- Simplify before multiplying, use a common denominator only when adding or subtracting, and divide by multiplying by the reciprocal.
- Compare fractions with benchmarks or cross-products instead of forcing every value into a decimal.
- A reduced fraction terminates only when its denominator contains no prime factors other than 2 and 5.

## @fractions-fluency

If I could pick one skill that separates 685+ scorers from 605 scorers on Quant, it would be fraction fluency. Not "can you add fractions" — every student can eventually add fractions. Fluency means you see `3/8 + 5/12` and the answer `19/24` appears in your head within five seconds without scratch paper.

**Mental model.** A fraction is one number, not two — `3/4` is a single point on the number line, and also a division you haven't carried out yet. Every fraction technique in this chapter is a way of operating on that one number without ever doing the division. The moment you convert a clean fraction to a messy decimal "to make it easier," you've usually made it harder.

**The three operations, ranked by how often they trap people:**

1. **Adding and subtracting** requires a common denominator. `3/4 + 5/8 − 1/2` becomes `6/8 + 5/8 − 4/8 = 7/8`. Find the LCD first, convert every fraction, then combine numerators. Never add tops and bottoms separately — `1/2 + 1/3` is `5/6`, not `2/5`, and the test always offers the `2/5`-style answer as bait.
2. **Multiplying** is the easy one: `(a/b) × (c/d) = ac/bd`. No common denominator needed. Before you multiply, cancel common factors diagonally — `(3/4) × (8/9) = (1/1) × (2/3) = 2/3`, done without ever multiplying 3 × 8 or 4 × 9.
3. **Dividing** means multiplying by the reciprocal: `(a/b) / (c/d) = (a/b) × (d/c) = ad/bc`. In a left-to-right chain like `(2/3) ÷ (4/9) × (1/2)`, flip only the fraction you're dividing by — the chain becomes `(2/3) × (9/4) × (1/2) = 3/4` after canceling. Flipping the wrong factor is the planted error in every mixed-operation problem.

**The simplification habit.** The GMAT considers `42/98` and `3/7` to be different answer choices. `42/98` is not "wrong" arithmetically, but it is wrong on the GMAT because answer choices are fully reduced. Always pull out common factors at the end: `42/98 = 3/7`.

**Cancel early, cancel hard.** This is the single habit that saves the most time. Before you compute `(15 × 28) / (21 × 25)`, cancel: `15/25 = 3/5`, `28/21 = 4/3`, so the whole thing becomes `(3 × 4) / (5 × 3) = 12/15 = 4/5`. No multi-digit multiplication required. If you ever find yourself multiplying two-digit numbers inside a fraction problem, stop — you skipped a cancellation the test-writer left for you.

**Complex fractions — resolve inside-out.** A fraction whose numerator or denominator is itself an expression gets simplified layer by layer, innermost first, each layer reduced to a single fraction before you move outward.

**Worked example.** `(2 − 1/2) / (1 + 1/4)`.

- Numerator: `2 − 1/2 = 4/2 − 1/2 = 3/2`.
- Denominator: `1 + 1/4 = 5/4`.
- Divide: `(3/2) × (4/5) = 12/10 = 6/5`.

Resolve top and bottom *independently and completely*, then divide once. Students who try to "distribute the division" across the pieces get a wrong answer that conveniently matches a choice.

**Worked example (nested).** `1 / (1 + 1/(1 + 1/2))`.

- Innermost: `1 + 1/2 = 3/2`.
- Next layer: `1/(3/2) = 2/3`, so the bracket is `1 + 2/3 = 5/3`.
- Outermost: `1/(5/3) = 3/5`.

Three flips, each mechanical. The error rate on these comes entirely from trying to hold two layers in your head at once — write each layer down.

**The reciprocal-sum identity.** Combine `1/a + 1/b` over the product: `1/a + 1/b = (a + b)/(ab)`. This one line converts "sum of reciprocals" problems into a sentence about a sum and a product.

**Worked example.** If `1/a + 1/b = 7/12` and `a + b = 7`, what is `ab`? Apply the identity: `(a + b)/(ab) = 7/12`, so `7/(ab) = 7/12`, forcing `ab = 12`. No solving for a or b individually — which is the whole trick: the question never needed their separate values, and the test rewards noticing that before you reach for a quadratic.

**Micro-drill.** Compute each without a calculator — 45 seconds total:

1. `5/6 − 3/8` → ___
2. `(15 × 28) / (21 × 20)` → ___
3. `(1 + 3/4) / (1 − 1/4)` → ___

Answers: (1) **11/24** (LCD 24: 20/24 − 9/24). (2) **1** (cancel before multiplying: 15/21 = 5/7 and 28/20 = 7/5; product is 1). (3) **7/3** (numerator = 7/4, denominator = 3/4; divide by flipping: 7/4 × 4/3 = 7/3). If (2) took more than 10 seconds, you computed instead of canceling — go back to the "cancel early" habit above. If (3) tripped you, the rule is: resolve the compound fractions in numerator and denominator first, then divide.

**Trap to watch.** A complex fraction like `(a + b/c) / d` is `(ac + b) / (cd)`, not `(a + b) / (cd)`. Resolve the numerator fully — `a + b/c = (ac + b)/c` — before you divide.

> **Recall check.** In the chain `(3/5) ÷ (9/10) × (1/2)`, which fraction gets flipped, and what's the result? (Only `9/10`, the one being divided by: `(3/5) × (10/9) × (1/2) = 1/3`.)

> **Self-explanation prompt.** In one sentence, why does canceling before multiplying give the same answer as multiplying first and reducing later? If you can say "because I'm dividing numerator and denominator by the same factor, which never changes the fraction's value," the habit stops feeling like a shortcut and starts feeling like what it is — the same arithmetic in a cheaper order.

## @comparing-fractions

"Which of the following fractions is greatest?" looks like a calculator question, and that's the trap — the GMAT puts it on a no-calculator section precisely because there are three comparison tools that beat long division. Sizing fractions fast also feeds everything else: estimation, answer-choice elimination, and reading `5/7 of the voters` as "a bit under three quarters" without breaking stride.

**Tool 1: benchmarks.** Place each fraction against 1/2, 2/3, 3/4, and 1. Is the numerator more or less than half the denominator? `7/15` is just under 1/2; `8/15` is just over. One scan against a benchmark often eliminates three answer choices before any real work.

**Tool 2: cross-multiplication for any pair.** To compare `a/b` and `c/d` (all positive), compare `ad` and `bc` — the side with the bigger product holds the bigger fraction. Compare `5/8` and `7/11`: cross-products are `5 × 11 = 55` and `8 × 7 = 56`; the 56 belongs to `7/11`, so `7/11` is bigger. Why it works: multiply both fractions by `bd`, which is positive, so the inequality's direction is preserved and the denominators vanish. Keep each product attached to the *numerator* it came from — crossing the products to the wrong sides is the standard careless error.

**Tool 3: the gap to 1.** When every choice is close to 1, don't compare the fractions — compare how far each falls *short* of 1. The gap of `n/d` is `(d − n)/d`. Smallest gap wins.

**Worked example.** Which is greatest: `6/7`, `8/9`, `11/12`, `14/15`?

The gaps are `1/7`, `1/9`, `1/12`, `1/15`. Same numerator, so the biggest denominator is the smallest gap: `1/15`. The fraction closest to 1 is `14/15` — done in ten seconds, zero division.

When the gaps themselves have different numerators, compare the gaps with Tool 2. `7/9` versus `11/14`: gaps are `2/9` and `3/14`. Cross-multiply the gaps: `2 × 14 = 28` versus `9 × 3 = 27`, so `2/9 > 3/14`, meaning `7/9` sits *farther* from 1 — `11/14` is bigger. Watch the direction flip: the bigger gap belongs to the *smaller* fraction.

**Tool 4: same numerator.** With equal numerators, the bigger denominator is the smaller fraction: `3/8 < 3/7`. Sometimes it's worth forcing this — to compare `2/7` and `3/10`, scale to `6/21` and `6/20`; equal numerators, and the smaller denominator (20) wins, so `3/10` is bigger.

| When the choices look like… | Reach for |
|---|---|
| Scattered sizes (some under 1/2, some over) | Benchmarks — sort into buckets first |
| Exactly two survivors | Cross-multiplication — one product pair settles it |
| Everything near 1 (`n/d` with `n` close to `d`) | Gap to 1 — compare the shortfalls |
| Shared or easily-shared numerators | Same-numerator rule |

**The +k property.** Adding the same positive number to the top and bottom of a proper fraction pulls it *toward 1* — that is, it gets bigger: `2/3 < 3/4 < 4/5 < 5/6`, each obtained from the last by adding 1 to both parts. This is why a sequence like `13/17, 14/18, 15/19` is already sorted in increasing order on sight, and it's a property the GMAT tests directly.

**Micro-drill.** Order `4/9`, `1/2`, `5/11` from least to greatest — 20 seconds.

Answer: **4/9 < 5/11 < 1/2.** Benchmarks first: both `4/9` and `5/11` are under 1/2 (numerators less than half the denominators). Then cross-multiply the survivors: `4 × 11 = 44` versus `9 × 5 = 45`, so `5/11` is bigger.

> **Recall check.** To compare `a/b` and `c/d` by cross-multiplication, which product belongs to which fraction? (`ad` belongs to `a/b`, `bc` belongs to `c/d` — each product stays with the fraction that contributed the numerator.)

> **Self-explanation prompt.** Why does the gap-to-1 method reverse direction — smallest gap means greatest fraction? If you can explain that the gap measures what's *missing* from 1, the sign flip becomes obvious instead of memorized.

## @decimals-and-percents-conversion

Decimals, fractions, and percents are three notations for the same number. A student who fluently switches between them saves 20-30 seconds on every percent problem. A student who can't switch gets bogged down in `0.875 × 80` when they could have written `7/8 × 80 = 70`.

**Place value and rounding.** Each position after the decimal point is a power of ten: tenths, hundredths, thousandths. To round to a given place, look at the single digit immediately to its right — 5 or more rounds up, less than 5 leaves the digit alone, and everything beyond the rounding place is dropped. Rounding `2.4961` to the nearest hundredth: the hundredths digit is 9, the deciding digit is 6, so it rounds up and carries — `2.50`. The carry across a 9 is where careless errors live.

**Multiplying and dividing by powers of 10.** Multiplying shifts the decimal point right; dividing shifts it left — one place per zero. `0.07 × 300`: compute `7 × 3 = 21`, then account for the shifts: `0.07` is two places left, `300` is two places right, net zero — the answer is 21. Tracking shifts separately from digits is faster and safer than long multiplication.

**Decimal multiplication — count the places.** The product of two decimals has as many decimal places as the two factors combined: `0.3 × 0.3 = 0.09` (two places), not `0.9`. When the decimals are clean fractions, convert instead: `0.125 × 0.4` is `(1/8) × (2/5) = 2/40 = 1/20 = 0.05`. The fraction route is both faster and self-checking.

**Decimal division — shift both.** To divide by a decimal, shift both numbers until the divisor is whole: `0.84 / 0.6 = 8.4 / 6 = 1.4`. This is just multiplying top and bottom by the same power of ten — the fraction-equivalence rule again, wearing decimal clothing. So "0.6 of a number is 0.84" unwinds to `0.84 / 0.6 = 1.4` in one shift.

**Repeating decimals are ninths in disguise.** A single repeating digit is that digit over 9: `0.444… = 4/9`, `0.777… = 7/9`. The other family worth knowing cold is the sixths: `1/6 = 0.1666…` and `5/6 = 0.8333…`. To operate on repeating decimals, convert to fractions first.

**Worked example.** What is `0.555… + 0.1666…` as a fraction in lowest terms? Convert each: `0.555… = 5/9` and `0.1666… = 1/6`. LCD is 18: `10/18 + 3/18 = 13/18`. Truncating to `0.55 + 0.16` and hunting for a matching choice is the planted wrong path — the answer choices are built to punish exactly that, with the truncated value sitting right there as a trap.

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

**The conversion triangle:**

- **Fraction → decimal:** divide the numerator by the denominator. `3/4 = 3 ÷ 4 = 0.75`.
- **Decimal → percent:** multiply by 100 (shift the decimal point two places right). `0.75 = 75%`.
- **Percent → decimal:** divide by 100 (shift two places left). `40% = 0.40`.
- **Percent → fraction:** write over 100 and simplify. `40% = 40/100 = 2/5`.

**Example (conversion in action).** A shirt priced at $80 is discounted by 15%. What's the sale price? Paying after 15% off means paying 85%: `0.85 × 80 = 68`. One multiplication, no subtraction — the "complement" move. The conversion skill is reading "15% off" and *writing* `× 0.85` in a single step.

**Trap to watch.** Comparing decimals of different lengths: `0.45` versus `0.405`. Pad to equal length — `0.450` versus `0.405` — and compare digit by digit. "Longer means bigger" is false for decimals, and the test knows students imported that instinct from whole numbers.

Percent *problems* — percent change, successive changes, reverse percents, interest — get their own full chapter (quant-19). What this chapter hands you is the fluency layer underneath: every technique there assumes you convert between the three notations at sight speed.

> **Recall check.** Close the book (or cover this section). Now write down — from memory — the decimal equivalents of: 1/8, 3/8, 5/8, 7/8, 1/9, 2/9, 1/6, 5/6. You want these appearing in your head on sight, not computed. Score yourself; re-study the ones you missed; retest in 10 minutes. Spaced retrieval (Cepeda et al., 2006) beats massed practice on long-term retention — the short gap is what builds the durable memory.

> **Self-explanation prompt.** In one sentence, why is shifting both decimals in `0.84 / 0.6` legal? If your sentence mentions multiplying numerator and denominator by the same number, you've connected decimal division back to fraction equivalence — which means you'll never wonder "which way do I shift?" again.

**Recap.** Fractions are single numbers you operate on without dividing: LCD for addition, diagonal canceling for multiplication, flip-the-divisor for division, inside-out for complex fractions. Comparisons never need long division — benchmarks sort the field, cross-multiplication settles any pair, and the gap to 1 handles the photo finishes. Decimals are fractions wearing place-value notation: shift to multiply or divide by tens, count places in products, send repeating decimals to ninths, and keep the sight table burned in. Run the problem sets below to pressure-test all three skills, then move to the next chapter — GCF and LCM are the machinery that makes every common denominator and every cancellation in this one automatic.

## @avoid-ugly-arithmetic

The previous sections taught you *how* the operations work. This one is about a different skill: choosing the path through a calculation that the test-writer hoped you wouldn't take. Two answers can be equally correct on paper, but one route runs through a four-digit multiplication and the other runs through a single-digit one. The fluent route isn't just faster — it's far harder to get wrong, and that second part matters more than speed.

**Mental model.** Before you compute anything, ask: "Is there a shape I can rearrange first?" Three rearrangements pay off constantly. *Factor out a shared term* before you multiply. *Split a numerator* across a sum or difference (never the denominator). *Scale to whole numbers* by clearing decimals. Each one trades a frightening computation for two friendly ones, and a friendly computation is one you almost never botch under time pressure.

**Factor out the common term.** When you see a sum of products that share a factor, pull it out before multiplying. `47 × 18 + 47 × 82` is not two multiplications and an addition — it's `47 × (18 + 82) = 47 × 100 = 4700`. The shared `47` was the whole gift. The same move rescues fraction sums: `(3/8) × 11 + (3/8) × 13 = (3/8) × 24 = 9`. Train your eye to spot the repeated factor *before* your pencil starts the first product.

**Split the numerator, never the denominator.** A single fraction bar over a sum can be broken across the pieces *on top*: `(6k + 9)/3 = 6k/3 + 9/3 = 2k + 3`. That is legal because dividing a sum by `c` distributes. The bottom does not get the same freedom: `12/(3 + 1)` is `12/4 = 3`, and emphatically not `12/3 + 12/1 = 16`. Splitting the denominator is one of the most common self-inflicted wrongs on the section, precisely because splitting the numerator is so safe that the hand wants to keep going.

**Scale to whole numbers.** Decimals invite slips — a misplaced point turns 0.6 into 6. So clear them. Multiply the top and bottom of a fraction by the same power of ten, which never changes its value, and work in integers. `0.36 / 0.15` becomes `36 / 15` (both times 100) `= 12/5 = 2.4`. The integer division is one you can check on sight; the decimal division is one you cross your fingers through.

**Prefer two clean steps over one nasty one.** This is the meta-rule the other three serve. A longer path made of simple operations beats a short path made of one ugly operation, because each careless mistake you can avoid is worth more than the seconds you'd save. Reaching for `0.85 × 80` as one stroke is fine; reaching for `0.875 × 64` is the moment to convert to `(7/8) × 64 = 56` instead — two trivial steps, zero decimal arithmetic.

**Worked example.** A budget allots `0.16` of a `$2,500` fund to one line and `0.16` of an `$1,500` fund to another. What is the combined allotment? The slow route multiplies twice — `0.16 × 2500` and `0.16 × 1500` — then adds. The clean route factors the shared `0.16` first: `0.16 × (2500 + 1500) = 0.16 × 4000`. Now scale the decimal away: `0.16 = 16/100`, so `(16/100) × 4000 = 16 × 40 = 640`. One factor-out and one scale-to-whole turned two scary products into the single-digit fact `16 × 4`.

**Trap to watch.** The denominator split is the headline trap, but its quieter cousin is factoring out a term that *isn't actually shared*. In `47 × 18 + 53 × 82` there is no common factor, and forcing one produces nonsense. The rearrangements above are tools, not reflexes — confirm the shared factor is genuinely shared, and confirm the bar you're splitting across is over a sum in the *numerator*, before you rewrite anything.

This section is about getting an *exact* answer through a gentler route. When you don't need the exact answer — when bounding the result or rounding to eliminate choices will do — that's a separate discipline covered in the Estimation chapter; reach for it when the question only asks "which of these five is closest."

> **Recall check.** Which of these is legal: splitting `(8 + 12)/4` into `8/4 + 12/4`, or splitting `20/(8 + 12)` into `20/8 + 20/12`? (Only the first — you may distribute a *numerator* across a sum, never the *denominator*. The second equals `20/20 = 1`, while the illegal split gives `2.5 + 1.67`, nowhere close.)

> **Self-explanation prompt.** In one sentence, why does scaling a fraction's top and bottom by 100 leave its value unchanged but make the arithmetic safer? If you can say "I'm multiplying by `100/100 = 1`, so the number is identical — I've only swapped error-prone decimals for integers I can verify," you'll clear decimals automatically instead of gambling on point placement.
