---
slug: ratios-percents
title: Ratios and Percents
section: Quant
estimated_minutes: 50
prerequisites: []
summary: |
  Ratios and percents are the GMAT's language of comparison. Every question in this family is secretly asking one of three things: what fraction of the whole is this part, how does the whole change when one piece moves, or how do you combine pieces with different properties. Three mental models — the "parts" model for ratios, the "multiplier" model for percent change, and the "anchor" model for mixtures — handle everything you'll see.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Two questions before I teach you anything. The first is a straight percent translation; the second tests one of the most common traps on the exam — why successive percent changes don't cancel. Attempt them, rate your confidence, and move on. The instruction lands deeper after you've wrestled with the ideas.
    pretest_question_ids:
      - ratios-percents-q1
      - ratios-percents-q7

  - id: ratio-fundamentals
    type: reading
    title: "Ratios — the parts model"
    check_question_ids:
      - ratios-percents-q3

  - id: ratio-to-ratio-conversion
    type: reading
    title: "Chaining ratios — making the shared term match"
    check_question_ids:
      - ratios-percents-q10

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

  - id: mixture-and-weighted-average
    type: reading
    title: "Mixtures and weighted averages — anchor the invariant"
    check_question_ids:
      - ratios-percents-q8
      - ratios-percents-q12

  - id: summary
    type: summary
    title: "The three models and the translation table"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q1
      - ratios-percents-q2
      - ratios-percents-q3
      - ratios-percents-q4
      - ratios-percents-q5
      - ratios-percents-q6
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q7
      - ratios-percents-q8
      - ratios-percents-q9
      - ratios-percents-q10
      - ratios-percents-q11
      - ratios-percents-q12
      - ratios-percents-q13
      - ratios-percents-q14
      - ratios-percents-q15
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - ratios-percents-q16
      - ratios-percents-q17
      - ratios-percents-q18
---

## @ratio-fundamentals

A ratio is a **multiplicative comparison** between two quantities. When I say "the ratio of red to green pens is 4:7," I'm saying that for every 4 red pens there are 7 green ones — not that there are exactly 4 and 7, but that the counts come in multiples of those parts.

**The parts model.** Treat the numbers in a ratio as counts of identical "parts." If red:green = 4:7, then the total is 4 + 7 = 11 parts, red is 4/11 of the whole, and green is 7/11.

**Worked example.** A box has 44 pens total, red and green in ratio 4:7. How many are green?

11 parts total, 44 pens total, so each part = 44/11 = 4 pens. Green = 7 parts × 4 pens/part = 28.

This scales to anything. Ratio 2:3:5 with total 50? That's 10 parts, each part worth 5, giving quantities 10, 15, 25.

**Part-to-part vs part-to-whole.** The distinction that trips up more students than any other in this topic.

- **Part-to-part ratio:** red:green = 4:7. Red is 4/7 of green, not 4/7 of the total.
- **Part-to-whole fraction:** red/total = 4/11. Red is 4/11 of the total.

The problem will almost always state part-to-part. You convert to part-to-whole when you want a fraction or a percent of the total.

**Worked example.** If boys:girls = 3:5 in a class, what fraction of the class is girls?

Don't say 5/3. Don't say 3/5. Total parts = 3 + 5 = 8, so girls = 5/8 of the class.

**Scaling ratios.** Ratios are only defined up to a multiplier. 4:7 = 8:14 = 12:21 = 40:70. Any time you want to compare a ratio against a total, scale until the parts sum matches the total — or keep a variable k for each part (red = 4k, green = 7k) and let algebra do the rest.

> **Trap to watch.** Ratios are not differences. "Red:green = 4:7" does NOT mean "green has 3 more than red." It means "for every 4 reds, there are 7 greens." If the total is 44, green has 28 − 16 = 12 more than red, not 3. Always map the ratio onto real numbers before computing differences.

**Ratios with three or more terms.** Work identically. 2:3:5 means total = 10 parts, with each quantity at 20%, 30%, and 50% of the whole. The parts model scales up; the logic is the same.

> **Self-explanation prompt.** Say out loud, in your own words, the difference between "3/5 of the class is boys" and "the ratio of boys to girls is 3:5." If you can explain why the first gives 60% boys and the second gives 37.5% boys, you've internalized the part-to-part vs part-to-whole distinction.

## @ratio-to-ratio-conversion

When two ratios share a term but use different scales, you have to line them up before you can combine them. This is the second most-tested ratio pattern on the GMAT after the parts model.

**The rule.** The shared variable must have the **same value** in both ratios before you can chain them.

**Worked example.** a:b = 3:5 and b:c = 4:7. Find a:c.

The b in "3:5" represents 5 parts, but the b in "4:7" represents 4 parts. They're inconsistent. Scale until b matches in both.

- Multiply the first ratio by 4: a:b = 12:20.
- Multiply the second ratio by 5: b:c = 20:35.

Now b is 20 in both, and you can combine: a:b:c = 12:20:35. So a:c = 12:35.

**The mechanic: LCM of the shared values.** The fastest way to match the shared term is to take the LCM of its two values. 5 and 4 have LCM 20, so we scaled each ratio to put 20 in b. If b had been 6 in one and 9 in the other, scale to 18.

**Why this matters on test day.** The GMAT loves three-way ratio chains: a:b, b:c, and then it asks for a:c or the fraction a contributes to the total a + b + c. Lining up the shared terms is the only move; everything after is arithmetic.

**Worked example with totals.** If a:b = 2:3 and b:c = 6:7, and a + b + c = 62, find c.

Match b. First ratio: b = 3; second ratio: b = 6. LCM is 6. Scale first ratio by 2: a:b = 4:6. Now a:b:c = 4:6:7, total 17 parts. 62/17 = ... doesn't divide evenly. That's a flag to re-check — or to recognize the GMAT would have chosen numbers that divide cleanly. If the total were 68, each part = 4, and c = 28.

> **Trap to watch.** Don't "add" ratios. 3:5 and 4:7 do not combine to 7:12 or any other direct sum. Ratios are multiplicative comparisons; chaining them requires matching the bridge term first.

**Recognition tip.** If a problem gives you two ratios that share exactly one variable, you're in ratio-chaining territory. Line up the shared value before you do anything else.

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

> **Trap to watch.** Percent and percentage points are different. If a tax rate rises from 10% to 15%, that's 5 **percentage points** — but a 50% **percent increase** (5/10 = 50%). On GMAT DS in particular, distinguishing these is the entire problem.

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

> **Trap to watch.** Percent changes never add. +30% followed by +40% is NOT +70%. It's 1.30 × 1.40 = 1.82, a 82% increase. The longer the sequence, the bigger the compounding gap between adding and multiplying.

**When to use "reverse multiplier."** If you know the final value and the multiplier, divide — don't subtract.

**Worked example.** Revenue grew 50% to $900,000. What was it before?

New = 1.5 × old, so old = 900,000 / 1.5 = 600,000. Dividing by 2 gives $450,000 (wrong — that treats the 50% like "half added"). Subtracting 50% of 900,000 gives $450,000 too (wrong — subtracts from the new value). Always divide by the multiplier.

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

> **Trap to watch.** Read verb tense carefully. "The price, after a 20% increase, is $60" has $60 as the **new** value. "The price is $60 after being increased by 20%" — same thing. "The price is $60; it was then increased 20%" — $60 is the **old** value. One word changes the arithmetic.

**Dollar-anchor DS pattern.** Many hard DS questions hinge on whether you have a percent *plus a dollar anchor.* Percent alone is insufficient (could scale to any size); dollar amount alone is usually insufficient (no rate context); together sufficient. Always check for this combination before answering.

## @mixture-and-weighted-average

Mixture problems and weighted averages are the same problem wearing two different costumes. The mental model: **find the quantity that stays invariant**, then use that as your anchor.

**Mixture basics.** A 30-liter solution is 20% salt. You add 10 liters of pure water. What's the new concentration?

**Identify the invariant.** Water is being added, so the salt content doesn't change. Salt stays at 0.20 × 30 = 6 liters. Total volume grows: 30 + 10 = 40 liters. New concentration: 6/40 = 15%.

**Worked example.** Chemist has 30 L of 20% salt solution. How much water to add for a 15% solution?

Salt (invariant) = 6 L. Final concentration = 6 / (30 + w) = 0.15. Solve: 30 + w = 40, so w = 10 liters.

The anchor — salt = 6 — makes this a one-variable equation. Without locking onto the invariant, you'd be tracking two moving quantities and doing twice the algebra.

**Which quantity is the anchor?**

- Water added → salt invariant.
- Water evaporates → salt invariant (the solute doesn't go with the vapor).
- Alcohol added to water → water invariant.
- Draining some of the mixture → proportions invariant (but totals change).

**Alligation — the geometric shortcut.** For two mixtures combined to hit a target concentration, the amounts mix *inversely* to their distance from the target.

**Worked example.** 50 L of 40% alcohol combined with some amount of 70% alcohol yields 55% alcohol. How much 70%?

Target is 55%. Distance from 40 to 55 is 15. Distance from 70 to 55 is 15. Equal distances → equal volumes. So you need 50 L of the 70% solution.

**Algebra check.** 0.40(50) + 0.70x = 0.55(50 + x). 20 + 0.7x = 27.5 + 0.55x. 0.15x = 7.5. x = 50. Same answer.

**The general alligation rule.** To hit target T from two sources at A and B (with A < T < B):

**amount of A / amount of B = (B − T) / (T − A)**

The quantity farther from the target contributes *less*. That's the lever principle at work: the heavier side sits closer to the fulcrum.

**Weighted averages.** When combining groups with different sizes, the average isn't the simple mean — it's pulled toward the bigger group.

**Worked example.** A class of 10 boys averages 75 on a test, 15 girls average 85. Class average?

Weighted: (10·75 + 15·85) / 25 = (750 + 1275) / 25 = 2025 / 25 = 81. Not 80 (simple average of 75 and 85), because more students scored 85.

**Shortcut (lever model).** The class average sits at 81 — 6 units from 75, 4 units from 85. Ratio 6:4 = 3:2. The **inverse** of that ratio (2:3) gives the weights of the groups. Confirms 10:15 = 2:3. The farther a group is from the mean, the fewer members it has.

**Mixture + weighted average equivalence.** Concentrations are just weighted averages of 0% (pure solvent) and 100% (pure solute). Every mixture problem is a weighted-average problem with percent-concentration as the variable being averaged. Recognize this once and half the "hard mixture" questions collapse into three-line problems.

> **Trap to watch.** "Equal parts" vs "equal concentrations." If you mix equal volumes of 40% and 70% solutions, the result is 55% (midpoint). If you need 60%, you need more of the 70% — not equal parts. Questions often slip between these two phrasings.

## @summary

Three mental models cover every ratio/percent question the GMAT throws at you:

1. **Parts model (ratios).** Treat ratio terms as counts of identical parts. Sum to get the whole. Scale to map onto real totals.
2. **Multiplier model (percent change).** Every percent change is a multiplier. Chain multipliers by multiplication, never addition. Reverse by division, never subtraction.
3. **Anchor model (mixtures).** Lock onto the quantity that doesn't change. Build one equation around it.

**The translation table (percents):**

| Phrase | Math |
|---|---|
| X is Y% of Z | X = (Y/100) × Z |
| X% increase | multiply by (1 + X/100) |
| X% decrease | multiply by (1 − X/100) |
| A% of B equals C% of D | 0.0A · B = 0.0C · D |
| Percent change | (new − old) / old |
| +X% then −X% (net) | lose (X/10)² percent |

**Common traps at a glance:**

| Trap | What it looks like | What it actually is |
|---|---|---|
| Additive percent changes | "+20% then −20% = 0%" | Multiplicative: 0.96 (4% loss) |
| Percent of vs percent change | "18 is 30% of 60" vs "went from 18 to 30, up 30%" | First is a ratio; second is (12/18) ≈ 67% |
| Part-to-part vs part-to-whole | "3:5 boys to girls" → 60% boys? | No — 3/(3+5) = 37.5% boys |
| Markup vs margin | "30% profit" | Depends on base: cost vs selling price |
| Reverse percent change | "Up 50% to $900K, so originally $450K" | No — divide by 1.5, not halve |
| Successive percents add | "Marked up 40%, discount 25% = 15% net" | No — 1.40 × 0.75 = 1.05 = 5% net |

**Decision tree for ratio/percent questions:**

1. **Is it a ratio?** Use parts. Scale if needed. If two ratios share a variable, match that variable before chaining.
2. **Is it a single percent?** Translate via is/of/what. Or multiply by the decimal form.
3. **Is it a percent change?** Multiplier model. Chain multipliers, never add.
4. **Is there a reverse?** Divide by the multiplier.
5. **Is it a mixture or weighted average?** Anchor the invariant, write one equation. For two-source mixtures, try alligation first.

A student scoring 605 gets the easy set here consistently and the medium set when they slow down. A student scoring 725+ has automated the three models so deeply that a "hard mixture" problem reads to them like the first-grade worksheet it essentially is. Get to that place by drilling the translation table and the multiplier model until they're muscle memory. Every question in this chapter rewards the same two moves — and on test day, those two moves are worth three to five questions.
