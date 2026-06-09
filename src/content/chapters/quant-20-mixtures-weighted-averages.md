---
slug: quant-20-mixtures-weighted-averages
title: "Mixtures & Weighted Averages"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-19-percents
summary: |
  Anchoring mixtures and weighted averages — the balance-point trick that turns these into one quick step.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - ratios-percents-q13
      - ratios-percents-q14
  - id: mixture-and-weighted-average
    type: reading
    title: "Mixtures and weighted averages — anchor the invariant"
    check_question_ids:
      - ratios-percents-q8
      - ratios-percents-q12
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q15
      - ratios-percents-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q17
      - ratios-percents-q18
---

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

**Trap to watch.** "Equal parts" vs "equal concentrations." If you mix equal volumes of 40% and 70% solutions, the result is 55% (midpoint). If you need 60%, you need more of the 70% — not equal parts. Questions often slip between these two phrasings.

**Micro-drill.** Apply the anchor model — 90 seconds total:

1. A 40-liter solution is 25% acid. How much water must be added to dilute it to 20% acid?
2. A blend of $8/lb and $12/lb coffee must average $9/lb. What is the ratio of cheap to expensive coffee by weight?

Answers: (1) Acid (invariant) = 0.25 × 40 = 10 L. Final: 10 / (40 + w) = 0.20. Solve: 40 + w = 50, so w = **10 L**. (2) Alligation: distance from $8 to $9 is 1; distance from $12 to $9 is 3. Ratio cheap:expensive = 3:1. Check: (3 × 8 + 1 × 12) / 4 = 36/4 = 9. ✓ Answer: **3:1**. The source farther from the target ($12 is 3 away vs $8 is 1 away) contributes less — that's the lever principle in a single sentence.

> **Self-explanation prompt.** What is the "invariant" in a problem where you drain some solution and add pure water? If you can say "the amount of solute (the dissolved substance) stays constant, because only water was added — not more solute," you can identify the anchor in every mixture variation. The moment the invariant is clear, the problem reduces to one equation and one unknown.

> **Recall check.** Cover this section. State the alligation rule: to blend two solutions at concentrations A and B to hit target T, what ratio of A to B do you use? (Answer: amount of A : amount of B = (B − T) : (T − A) — the distances swapped.) Apply it: blend 30% and 70% solutions to reach 45%. Distances: 30 is 15 from 45; 70 is 25 from 45. Ratio of 30%:70% = 25:15 = **5:3**. If you mixed up which distance goes with which source, re-read the alligation section: each source's contribution is proportional to how far the *other* source is from the target, not how far it is itself.
