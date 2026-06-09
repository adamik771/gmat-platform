---
slug: quant-06-fractions-decimals
title: "Arithmetic: Fraction Fluency & Notation Conversion"
section: Quant
estimated_minutes: 10
prerequisites:
  - quant-05-order-and-signed-numbers
summary: |
  The single highest-leverage arithmetic skill: operating on fractions by sight and moving freely between fractions, decimals, and percents. One number, three notations — pick the one that makes the arithmetic disappear.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely — attempting first is what makes the reading stick.
    pretest_question_ids:
      - arithmetic-q1
      - arithmetic-q2
  - id: fractions-fluency
    type: reading
    title: "Fractions — the skill that quietly decides your Quant score"
    check_question_ids:
      - arithmetic-q15
  - id: decimals-and-percents-conversion
    type: reading
    title: "One number, three notations — convert to whichever is easiest"
    check_question_ids:
      - arithmetic-q4
      - arithmetic-q5
  - id: summary
    type: summary
    title: "Lock it in, and what to do next"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q13
      - arithmetic-q14
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - arithmetic-q42
      - arithmetic-q25
  hard:
    target_accuracy_by_score:
      "605": 30
      "645": 45
      "685": 60
      "725": 80
    question_ids:
      - arithmetic-q11
      - arithmetic-q9
      - arithmetic-q19
---

## @fractions-fluency

If I had to name one skill that separates a 685+ Quant score from a 605, it would not be a topic. It would be **fraction fluency** — and almost nobody trains it deliberately. Every test-taker can *eventually* add fractions. Fluency is different: you see `3/8 + 5/12` and `19/24` arrives in your head in five seconds, no scratch paper, no hesitation. That speed is not a party trick. It is the reason a 705 scorer finishes a question while a 605 scorer is still finding a common denominator.

**What you'll own after this chapter:**

- Add, subtract, multiply, and divide fractions without the arithmetic slowing you down.
- Cancel *before* you compute, so you never multiply numbers you're about to divide away.
- Read a fraction, a decimal, and a percent as the **same number** — and switch to whichever notation makes the problem easiest.

**Mental model.** A fraction is not two numbers stacked up — it is one instruction: *divide the top by the bottom.* And `3/4`, `0.75`, and `75%` are not three facts to memorize separately; they are **one quantity wearing three outfits.** The entire skill in this chapter is learning to recognize the quantity through whatever outfit a problem hands you, and to redress it into the form that makes the math trivial. The GMAT constantly disguises an easy computation in an awkward notation; fluency is the costume removal.

### The four operations, ranked by how often they trip people

**Multiplying is the easy one.** `(a/b) × (c/d) = ac/bd`. No common denominator. The only discipline: **cancel diagonally first.** `(3/4) × (8/9)` — the 3 cancels into the 9, the 8 cancels into the 4, leaving `(1/1) × (2/3) = 2/3`. You never multiplied 3 × 8 or 4 × 9.

**Dividing is multiplying by the reciprocal.** `(a/b) ÷ (c/d) = (a/b) × (d/c)`. Flip the second fraction, then it's a multiplication.

**Adding and subtracting need a common denominator** — and this is where the time leaks. Find the LCD, convert every fraction, then operate on numerators alone.

> The order matters: handle ×/÷ by sight, and slow down only for +/−.

**Worked example.** (Add and subtract — find the LCD.) Compute `3/4 + 5/8 − 1/2`. The denominators are 4, 8, 2; their LCD is 8. Convert: `3/4 = 6/8`, `1/2 = 4/8`. Now operate on numerators only: `6/8 + 5/8 − 4/8 = 7/8`. The whole move is "make the bottoms match, then ignore them."

**Worked example.** (Cancel early, cancel hard.) Compute `(15 × 28) / (21 × 25)`. Do **not** multiply 15 × 28. Cancel across the fraction first: `15/25 = 3/5` and `28/21 = 4/3`. The expression becomes `(3 × 4) / (5 × 3) = 12/15 = 4/5`. The big multiplication never happened — and neither did its arithmetic risk. This single habit, *cancel before you compute*, saves more time on Quant than any formula.

**Worked example.** (Compound fractions — resolve top and bottom first.) Compute `(1 + 1/2) / (1 − 1/3)`. Resolve each piece independently: top `= 3/2`, bottom `= 2/3`. Then divide by flipping: `(3/2) × (3/2) = 9/4`. Never try to operate across the bar while the numerator and denominator are still unfinished.

### The simplification habit

The GMAT treats `42/98` and `3/7` as **different answer choices.** `42/98` is arithmetically correct but GMAT-wrong, because "simplify" means *fully reduced*. Always pull out the common factor at the end: `42/98 = (42 ÷ 14)/(98 ÷ 14) = 3/7`. If your answer isn't in lowest terms, you haven't finished.

**Trap to watch.** A compound fraction like `(a + b/c) / d` is `(ac + b)/(cd)` — **not** `(a + b)/(cd)`. Resolve the numerator into a single fraction (`a + b/c = (ac + b)/c`) *before* you divide. Skipping that step is the most common careless fraction error on the test.

> **Recall check.** Without looking back: what is the single habit that saves the most time when multiplying fractions, and at what stage do you apply it? (Cancel common factors diagonally — *before* multiplying, never after.)

> **Self-explanation prompt.** In one sentence, why does canceling before multiplying produce the same answer as multiplying then reducing — but with far less risk? (Because multiplication and reduction commute, so removing a shared factor early changes nothing about the result, yet it keeps every number small enough to handle by sight, which is where careless errors come from.)

## @decimals-and-percents-conversion

A student who fluently switches between fractions, decimals, and percents saves 20–30 seconds on nearly every percent problem — and, more importantly, sidesteps the arithmetic where mistakes hide. Faced with `0.875 × 80`, the fluent student doesn't reach for long multiplication. They see `7/8 × 80 = 70` and move on.

**The conversion triangle — three moves, memorized cold:**

- **Fraction → decimal:** divide top by bottom. `3/4 = 3 ÷ 4 = 0.75`.
- **Decimal ↔ percent:** shift the decimal two places. `0.75 = 75%`; `40% = 0.40`.
- **Percent → fraction:** write over 100 and reduce. `40% = 40/100 = 2/5`.

**Fractions you should recognize on sight** — drill these until the decimal appears the instant you see the fraction:

| Fraction | Decimal | Percent |
|---|---|---|
| 1/2 | 0.5 | 50% |
| 1/3 | 0.333… | 33.3% |
| 1/4 | 0.25 | 25% |
| 1/5 | 0.2 | 20% |
| 1/6 | 0.1667 | 16.67% |
| 1/8 | 0.125 | 12.5% |
| 1/9 | 0.111… | 11.1% |

The eighths follow from `1/8 = 0.125`: `3/8 = 0.375`, `5/8 = 0.625`, `7/8 = 0.875`. When `0.375` shows up in an answer choice, you should *see* `3/8` without computing.

**Worked example.** (Recognize the fraction, skip the decimal grind.) Compute `0.125 × 0.4`. Recognize `0.125 = 1/8` and `0.4 = 2/5`. Then `(1/8) × (2/5) = 2/40 = 1/20 = 0.05`. Direct decimal multiplication also works, but it's slower and invites a decimal-place slip. The fluent read finishes in two seconds.

**Worked example.** (The "complement" move for discounts.) A shirt priced at $80 is discounted 15%. The slow path: find the discount (`0.15 × 80 = 12`), then subtract (`80 − 12 = 68`). The fluent path: *15% off means you pay 85%.* So `0.85 × 80 = 68` — one multiplication, no subtraction. Whenever you read "X% off," immediately rewrite it as "pay (100 − X)%." It collapses two steps into one and removes the most common error (forgetting to subtract).

**Worked example.** (Read the "of" — it sets the denominator.) "What percent of 80 is 20?" and "20 is what percent of 80?" are the same question: `20/80 = 25%`. But "80 is what percent of 20?" is different: `80/20 = 400%`. The quantity that follows **"of"** always goes in the denominator. Before you divide, find the "of" and put it on the bottom.

**Trap to watch.** Percent problems punish you for computing the wrong piece. With a 15% discount, lazily finding 15% of the price (≈ $12) and reaching for it as the answer ignores that the question wants the **price paid**. Always name the exact quantity the stem asks for before you start the arithmetic — the discount or the price, the part or the whole.

**Pro tip.** Compound interest is just repeated multiplication by `(1 + r)`: `$10,000` at 4% compounded annually for 2 years is `10,000 × (1.04)² = 10,816`, so the interest is `$816` — not the `$800` that simple interest gives. The `$16` gap is the second year's interest earned on the first year's interest, and the GMAT will plant that `$800` as a trap answer. (The full machinery of *percent change*, *successive changes*, and *reverse-percent* word problems lives in the **Percents & Percent Change** chapter — this chapter's job is the fluency that makes all of it fast.)

> **Recall check.** Cover this section. From memory, write the decimal equivalents of: 1/8, 3/8, 5/8, 7/8, 1/6, 5/6. You want these on instant recall, not computed. Score yourself, re-study the misses, and retest in ten minutes — the short spacing gap is what converts a fact you "know" into one you *retrieve* under pressure.

> **Self-explanation prompt.** Why does rewriting "15% off" as "pay 85%" make you both faster *and* more accurate? (Because it folds the subtraction into the multiplication, so there is one operation instead of two — and the single most common discount error, computing the discount but forgetting to subtract it, becomes structurally impossible.)

## @summary

You came in able to "do" fractions. You leave able to *see* them — and that shift is worth real points, because it pays off on every arithmetic step of every Quant problem, not just the ones labeled "fractions."

**Mental model, one more time.** One quantity, three notations. A fraction says *divide*. A decimal and a percent are the same number shifted two places apart. Your job on any problem is to spot the quantity through its disguise and redress it into the notation that makes the arithmetic vanish — `7/8` instead of `0.875`, "pay 85%" instead of "subtract 15%."

The fluency reduces to four reflexes:

- **Cancel before you multiply.** Never compute a product you're about to divide away.
- **Match denominators, then ignore them.** Addition and subtraction are the only fraction operations that need slowing down.
- **Convert to whatever's easiest.** See `0.375`, think `3/8`. See "20% off," think "pay 80%."
- **Reduce to finish.** An unsimplified fraction is a wrong answer choice on this test.

**Key takeaway.** Fluency is not knowledge — it is *speed at recall*, and speed only comes from spaced retrieval. Don't re-read this chapter to "learn" the sight-conversions; quiz yourself on them cold, miss some, and quiz again in ten minutes. That uncomfortable retrieval is the rep that builds the reflex.

**What to do next.** Run the problem sets below — start at easy to confirm the operations are automatic, then push into the hard set, where fractions and percents hide inside multi-step setups. When the arithmetic feels effortless, move on to **Arithmetic: GCF/LCM, Units Digits & Estimation** (the next chapter), which turns this fluency toward integer structure. When you want the full treatment of percent change — markups, successive changes, and reverse-percent word problems — go to **Percents & Percent Change**. This chapter built the engine; those chapters put it to work.

> **Recall check.** Close your eyes and list the four reflexes above from memory. If you can name all four — cancel early, match-then-ignore, convert to easiest, reduce to finish — you've internalized the chapter. If one slips, that's the one to drill.
