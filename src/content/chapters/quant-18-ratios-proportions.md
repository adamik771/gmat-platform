---
slug: quant-18-ratios-proportions
title: "Ratios & Proportions"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-17-translating-word-problems
summary: |
  The parts model for ratios and chaining ratios by matching the shared term.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - ratios-percents-q1
      - ratios-percents-q2
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
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q3
      - ratios-percents-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q5
      - ratios-percents-q6
---

## @ratio-fundamentals

A ratio is a **multiplicative comparison** between two quantities. When I say "the ratio of red to green pens is 4:7," I'm saying that for every 4 red pens there are 7 green ones — not that there are exactly 4 and 7, but that the counts come in multiples of those parts.

**Mental model.** Ratios and percents are *multiplicative*, not additive. You can't add ratios, you can't add percent changes. A 30% increase followed by a 30% decrease isn't 0% — it's `1.30 × 0.70 = 0.91`, a 9% net decrease. Every error in this chapter traces back to treating these as additive when they're multiplicative; once that conversion is automatic, the rest is arithmetic.

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

**Trap to watch.** Ratios are not differences. "Red:green = 4:7" does NOT mean "green has 3 more than red." It means "for every 4 reds, there are 7 greens." If the total is 44, green has 28 − 16 = 12 more than red, not 3. Always map the ratio onto real numbers before computing differences.

**Ratios with three or more terms.** Work identically. 2:3:5 means total = 10 parts, with each quantity at 20%, 30%, and 50% of the whole. The parts model scales up; the logic is the same.

**Micro-drill.** Apply the parts model — no calculator, 60 seconds total:

1. The ratio of apples to oranges in a basket is 3:8. There are 33 pieces of fruit total. How many oranges?
2. Boys and girls in a class are in ratio 5:7. If there are 84 students, how many more girls than boys?
3. A:B = 2:5 and the total is 42. What is A?

Answers: (1) 3 + 8 = 11 parts; each part = 3; oranges = 8 × 3 = **24**. (2) 12 parts, each = 7; boys = 35, girls = 49; difference = **14**. (3) 7 parts, each = 6; A = **12**. If (1) tripped you up, make sure you're dividing the total (33) by the sum of the ratio terms (11), not by one of the terms alone.

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

**Worked example with totals.** If a:b = 2:3 and b:c = 6:7, and a + b + c = 68, find c.

Match b. First ratio: b = 3; second ratio: b = 6. LCM is 6. Scale first ratio by 2: a:b = 4:6. Now a:b:c = 4:6:7, total 17 parts. 68/17 = 4 per part. c = 7 × 4 = **28**.

**Trap to watch.** Don't "add" ratios. 3:5 and 4:7 do not combine to 7:12 or any other direct sum. Ratios are multiplicative comparisons; chaining them requires matching the bridge term first.

**Recognition tip.** If a problem gives you two ratios that share exactly one variable, you're in ratio-chaining territory. Line up the shared value before you do anything else.

**Micro-drill.** Chain each ratio pair — 60 seconds total:

1. x:y = 2:3 and y:z = 9:4. Find x:z.
2. m:n = 5:3 and n:p = 6:7. Find m:p.

Answers: (1) Match y: LCM(3, 9) = 9. Scale first by 3: x:y = 6:9. Chain: x:y:z = 6:9:4, so x:z = **6:4 = 3:2**. (2) Match n: LCM(3, 6) = 6. Scale first by 2: m:n = 10:6. Chain: m:n:p = 10:6:7, so m:p = **10:7**. If either answer surprised you, check that you found the LCM and scaled *both* the target term and its partner — not just the target term alone.

> **Self-explanation prompt.** Why can't you just read off a:c directly from the two given ratios without any alignment step? If you can say "because b represents a different unit size in each ratio — 5 parts in the first and 4 parts in the second — so treating them as the same b would mix two different scales," you will never skip the alignment step under pressure.
