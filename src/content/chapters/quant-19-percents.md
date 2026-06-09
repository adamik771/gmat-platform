---
slug: quant-19-percents
title: "Percents & Percent Change"
section: Quant
estimated_minutes: 11
prerequisites:
  - quant-18-ratios-proportions
summary: |
  Percent translation, the multiplier method for change and successive change, and reverse-percent word problems. Pick 100 and plug in.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - ratios-percents-q7
      - ratios-percents-q8
  - id: percent-basics
    type: reading
    title: "Percent fundamentals — translation over memorization"
    check_question_ids:
      - ratios-percents-q1
      - ratios-percents-q2
  - id: percent-change-and-successive
    type: reading
    title: "Percent change — multipliers and why successive changes don't cancel"
    check_question_ids:
      - ratios-percents-q4
      - ratios-percents-q7
  - id: percent-word-problems
    type: reading
    title: "Percent word problems — reverse change, ratios from percents"
    check_question_ids:
      - ratios-percents-q11
      - ratios-percents-q13
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q9
      - ratios-percents-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q11
      - ratios-percents-q12
---

## @percent-basics

"Percent" means "per hundred." 35% literally is 35/100, or 0.35. That's the entire definition, and every percent problem on the GMAT reduces to careful translation into one of two forms.

**Form 1: fraction/decimal.** 35% = 35/100 = 7/20 = 0.35.

**Form 2: the "is/of/what" translation.** Percent word problems are translation exercises. Learn these mappings:

- "**is**" → =
- "**of**" → × (multiplication)
- "**what**" → unknown variable
- "**percent**" → /100

**Worked example.** "35 is what percent of 80?"

Translate: 35 = (x/100)(80). Solve: x = 3500/80 = 43.75. So 35 is 43.75% of 80.

**Worked example.** "What is 35% of 80?"

Translate: x = (35/100)(80) = 28.

**Worked example.** "18 is x percent of 60."

18 = (x/100)(60). x = 1800/60 = 30. So 18 is 30% of 60.

Once you've done 20 of these, the translation becomes automatic. You'll read "what percent of" and your hand will already be writing (x/100)(something).

**The 10%/5%/1% decomposition.** For computation under time pressure, 10% of anything is "move the decimal one left," and from there you can quickly get any round percent by addition or doubling.

**Worked example.** 35% of 80, mental-math style.

- 10% of 80 = 8.
- 30% = 24 (three times 10%).
- 5% = 4 (half of 10%).
- 35% = 24 + 4 = 28.

Every answer choice on a percent problem usually has just one "right" computation; finding it fast comes from this decomposition.

**Common fraction-to-percent conversions to memorize cold:**

| Fraction | Percent | Fraction | Percent |
|---|---|---|---|
| 1/2 | 50% | 1/3 | 33.33% |
| 1/4 | 25% | 2/3 | 66.67% |
| 3/4 | 75% | 1/6 | 16.67% |
| 1/5 | 20% | 5/6 | 83.33% |
| 2/5 | 40% | 1/8 | 12.5% |
| 3/5 | 60% | 3/8 | 37.5% |
| 4/5 | 80% | 5/8 | 62.5% |
| 1/10 | 10% | 7/8 | 87.5% |
| 1/20 | 5% | 1/9 | 11.11% |

Drill this table until you can answer either direction in under a second. When a problem asks "what percent is 14/40?" you should see 14/40 = 7/20 = 35% without computation.

**Trap to watch.** Percent and percentage points are different. If a tax rate rises from 10% to 15%, that's 5 **percentage points** — but a 50% **percent increase** (5/10 = 50%). On GMAT DS in particular, distinguishing these is the entire problem.

**Micro-drill.** Translate and solve — no calculator, 45 seconds total:

1. What is 35% of 120?
2. 54 is what percent of 180?
3. 12 is 15% of what number?

Answers: (1) **42** — 10% = 12, 30% = 36, 5% = 6, so 35% = 42. (2) **30%** — 54/180 = 3/10 = 30%. (3) **80** — 12 = 0.15 × n; n = 12/0.15 = 80. If (3) slowed you down, the signal phrase is "15% of what number" — the unknown is the whole, so you divide: the 'of' quantity goes in the denominator, and you're solving for it by dividing the other side.

> **Self-explanation prompt.** When you see "18 is what percent of 72," which number goes in the denominator? If you can say "72 — because 'of 72' is the reference quantity you're measuring against, and the 'of' always marks the base," you own the translation. The single most common percent error is putting the numerator and denominator in the wrong positions.

## @percent-change-and-successive

Percent change measures how much something moved relative to where it started.

**Formula:** percent change = (new − old) / old × 100.

**Worked example.** Price goes from $80 to $100. Percent change = (100 − 80) / 80 = 20/80 = 25%. Price increased by 25%.

Note the denominator: it's the **old** value. "Percent increase from 80 to 100 is 20%" would be wrong — 20 is the raw increase, and dividing by the new value (100) always understates the move.

**The multiplier model — the real workhorse.** Every percent change is a multiplier acting on the old value:

- **+20% →** multiply by 1.20.
- **−25% →** multiply by 0.75.
- **+100% →** multiply by 2.
- **−100% →** multiply by 0 (everything gone).

**Worked example.** A $120 jacket is marked down 25%. Sale price?

0.75 × 120 = 90. You pay 75% of the original when the discount is 25%. One multiplication, done.

This beats the subtraction approach (find 25% of 120 = 30, then 120 − 30 = 90) on every problem with more than one step — which is every interesting problem.

**Successive percent changes — why they don't cancel.** The single most-tested trap in this topic.

**Worked example.** A stock goes up 20%, then down 20%. Net change?

Instinct says 0%. That's wrong. The 20% down applies to the *larger* value, so it subtracts more than the 20% up added.

Use multipliers: 1.20 × 0.80 = 0.96. Net multiplier 0.96 means a 4% decrease.

**Smart numbers check.** Start at $100. After +20%: $120. After −20% of $120 (= $24): $96. Loss of $4 on $100 = 4% decrease. Same answer.

**The formula for the "up-by-x-then-down-by-x" pattern:** end value is always lower than start by (x/10)² percent. +10% then −10% → 1% loss. +20% then −20% → 4% loss. +50% then −50% → 25% loss. Memorize the pattern; on the test you'll just write −4%.

**Chaining multipliers.** A +40% markup followed by a −25% discount gives 1.40 × 0.75 = 1.05 — a 5% net markup. Any sequence of percent changes reduces to the product of multipliers.

**Trap to watch.** Percent changes never add. +30% followed by +40% is NOT +70%. It's 1.30 × 1.40 = 1.82, a 82% increase. The longer the sequence, the bigger the compounding gap between adding and multiplying.

**When to use "reverse multiplier."** If you know the final value and the multiplier, divide — don't subtract.

**Worked example.** Revenue grew 50% to $900,000. What was it before?

New = 1.5 × old, so old = 900,000 / 1.5 = 600,000. Dividing by 2 gives $450,000 (wrong — that treats the 50% like "half added"). Subtracting 50% of 900,000 gives $450,000 too (wrong — subtracts from the new value). Always divide by the multiplier.

> **Self-explanation prompt.** A price increases 20% to $144. What was the original? State the move before computing. If you said "divide by 1.20" — correct, $144 / 1.20 = $120. If you subtracted 20% of $144 and got $115.20, you applied the percentage to the *new* value rather than the original. Percent change always runs forward from the old value; reversing it always means dividing by the multiplier.

**Simple and compound interest — percent change across time.** Interest problems are just percent-change problems repeated over years. Two formulas, and compound dominates modern GMAT.

**Simple interest:** interest accrues each period on the *original* principal. Formula:

    FV = P × (1 + r × t)

where P is principal, r is the annual rate (as a decimal), t is years. Example: $1,000 at 6% simple interest for 3 years → FV = 1,000 × (1 + 0.06 × 3) = 1,000 × 1.18 = $1,180. The interest earned each year is the same $60, regardless of the balance.

**Compound interest:** interest accrues on principal *plus* all accumulated interest. Formula:

    FV = P × (1 + r)^t

for annual compounding. Example: $1,000 at 6% compounded annually for 3 years → FV = 1,000 × 1.06³ = 1,000 × 1.191016 ≈ $1,191. Note the **extra $11 beyond simple interest** — that's the "interest on the interest."

**Compounded more than once per year:**

    FV = P × (1 + r/n)^(n × t)

where n is compounding periods per year. Doubling n (semi-annual, quarterly, monthly) increases FV but with diminishing returns. Rarely tested on modern GMAT, but worth recognizing if it shows up.

**The connection to the multiplier model.** Compound interest is nothing but successive percent changes — same rate applied every year. 6% for 3 years is 1.06 × 1.06 × 1.06 = 1.06³ — identical arithmetic to the chained markup problems above.

**When the GMAT doesn't say "simple" or "compound":** assume compound annually. Only use the simple-interest formula if the word "simple" appears explicitly in the question.

> **Recall check.** Close your eyes. State the two formulas: simple-interest FV and compound-interest FV (annual compounding). Now explain in one sentence *why* compound yields more than simple for t > 1. If you can say "because compound applies the rate to the growing balance, while simple always applies it to the original principal," you've internalized the mechanism — and you'll never confuse the two again.

## @percent-word-problems

This is where the "is/of/what" translation table earns its keep. The pattern is: take a sentence, parse it into an equation, solve.

**The ratio-from-percents pattern.** "If 30% of x equals 45% of y, what is the ratio of x to y?"

Translate: 0.30x = 0.45y. Now solve for x/y: x/y = 0.45/0.30 = 3/2. So x:y = 3:2.

**Why x > y.** Intuition check: if the *smaller* percent of x matches the *larger* percent of y, then x must be compensating by being bigger. A smaller chunk of a bigger number equals a bigger chunk of a smaller number. This inverse relationship is the fastest way to eliminate wrong answers.

**Markup vs margin — a classic hard-GMAT trap.** "30% profit on cost" and "30% profit on selling price" use different bases.

- **Markup on cost (30%):** selling price = 1.30 × cost.
- **Margin on selling price (30%):** cost = 0.70 × selling price.

**Worked example.** A watch sells for $140 with 30% profit on the selling price. What's the cost?

"30% on selling price" = profit is 30% of 140 = 42. Cost = 140 − 42 = 98. Or faster: cost = 0.70 × 140 = 98.

If the problem then asked for the selling price at 30% profit on **cost**: 1.30 × 98 = 127.40. Two different numbers for what sounds like the same 30%.

**Reverse percent change.** "After a 50% increase, the value is $900,000. Find the original."

Write new = old × multiplier; solve for old. 900,000 = 1.50 × old → old = 600,000.

**Recognition tip.** When a word problem gives you a percent and a final (post-change) value, you're almost always going to divide by the multiplier. When it gives you a percent and an original, you're going to multiply.

**Trap to watch.** Read verb tense carefully. "The price, after a 20% increase, is $60" has $60 as the **new** value. "The price is $60 after being increased by 20%" — same thing. "The price is $60; it was then increased 20%" — $60 is the **old** value. One word changes the arithmetic.

**Dollar-anchor DS pattern.** Many hard DS questions hinge on whether you have a percent *plus a dollar anchor.* Percent alone is insufficient (could scale to any size); dollar amount alone is usually insufficient (no rate context); together sufficient. Always check for this combination before answering.

**Micro-drill.** Apply the translation table — 60 seconds total:

1. A price falls 30% to $91. What was the original price?
2. If 40% of x = 60% of y, what is x:y?
3. A coat sells for $200 with 20% profit as a margin on the selling price. What was the cost?

Answers: (1) Old × 0.70 = 91; old = 91/0.70 = **$130**. (2) 0.40x = 0.60y → x/y = 0.60/0.40 = **3:2**. (3) Profit = 20% of 200 = 40; cost = 200 − 40 = **$160**. If (1) gave you $127 (= 91 − 20% of 91), you applied the percent to the *new* value instead of finding the old one — divide by the multiplier, never subtract from the already-changed value.

> **Self-explanation prompt.** Why do "30% profit on cost" and "30% profit on selling price" produce different results for the same stated percentage? If you can say "because the base is different — markup divides profit by cost (a smaller number), margin divides profit by selling price (a larger number) — the same dollar profit is a larger fraction of the smaller base," you'll check for the word 'on' before setting up any profit problem.
