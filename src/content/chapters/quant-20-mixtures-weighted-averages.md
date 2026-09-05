---
slug: quant-20-mixtures-weighted-averages
title: "Mixtures & Weighted Averages"
section: Quant
estimated_minutes: 30
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
      - ratios-percents-q57
      - ratios-percents-q36
  - id: mixture-and-weighted-average
    type: reading
    title: "Mixtures and weighted averages — anchor the invariant"
    check_question_ids:
      - ratios-percents-q56
      - ratios-percents-q71
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
      - ratios-percents-q63
      - ratios-percents-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q17
      - arithmetic-q87
---

## @summary

- Track the amount of the relevant substance or contribution, not just the overall totals.
- A weighted average is total weighted contribution divided by total weight; it must lie between the component values.
- For remove-and-replace problems, update both the component amount and the total volume at each stage.

## @mixture-and-weighted-average

Mixture problems and weighted averages are the same problem wearing two different costumes. The mental model that collapses both: **find the quantity that stays invariant**, lock onto it as your anchor, and the rest becomes one equation in one unknown. This is one of the highest-leverage moves in Quant — the same skill answers concentration problems, blending problems, average-speed problems, and "average of averages" traps. Master the anchor and the alligation lever, and an entire family of mid-to-hard questions shrinks to three lines each. The reason this topic separates scorers is not the arithmetic — it is that the GMAT deliberately disguises *which* quantity is frozen and *which* weight attaches to which value. Get those two decisions right and the algebra is trivial; get either wrong and you confidently compute a trap answer.

**Mixture basics.** A 30-liter solution is 20% salt. You add 10 liters of pure water. What's the new concentration?

**Identify the invariant.** Water is being added, so the salt content doesn't change. Salt stays at 0.20 × 30 = 6 liters. Total volume grows: 30 + 10 = 40 liters. New concentration: 6/40 = 15%. Notice the structure: you tracked one number (salt) and let the denominator move. That asymmetry — one part frozen, one part flowing — is the whole game.

**Worked example.** Chemist has 30 L of 20% salt solution. How much water must be added for a 15% solution?

Salt (invariant) = 6 L. Final concentration = 6 / (30 + w) = 0.15. Solve: 30 + w = 6/0.15 = 40, so w = 10 liters.

The anchor — salt = 6 — makes this a one-variable equation. Without locking onto the invariant, you'd be tracking two moving quantities and doing twice the algebra. The reciprocal phrasing of the previous two examples is deliberate: "add 10 L, find the concentration" and "find the water for 15%" are the *same* relationship read in opposite directions. The GMAT loves to hand you either direction, so train both.

**Which quantity is the anchor?** Run this checklist before writing any equation:

- Water added → salt (solute) invariant.
- Water evaporates → salt invariant (the solute does not leave with the vapor).
- Alcohol added to water → water invariant.
- Sugar/solute added to a solution → water (solvent) invariant.
- Draining some of the mixture → proportions invariant, but every absolute amount drops by the same fraction.

> **Recall check.** A 50 L tank is 30% acid. You boil off 10 L of pure water. What is the new acid concentration? (Acid is invariant: 0.30 × 50 = 15 L. New volume = 40 L. New concentration = 15/40 = 37.5%. Boiling removes only water, so the solute is the anchor — concentration goes *up*.)

**The drain-and-refill trap.** This is where the hardest testing lives. If you remove some mixture and replace it with pure solvent, the solute is *not* invariant — you threw some away. Treat it in two stages: (1) draining scales every absolute amount by the same fraction; (2) refilling adds zero solute but restores volume.

**Worked example (hard).** A 40 L radiator is 25% antifreeze. You drain 8 L and top it back up with 8 L of pure water. What is the new antifreeze concentration?

Stage 1 — drain 8 of 40 L, i.e. remove 8/40 = 1/5 of everything. Antifreeze before draining = 0.25 × 40 = 10 L. After draining 1/5: you keep 4/5, so antifreeze = 10 × 4/5 = 8 L, total volume = 32 L. Stage 2 — add 8 L water: antifreeze unchanged at 8 L, total back to 40 L. New concentration = 8/40 = 20%. The trap answer is 25% (forgetting that draining mixture removes solute) or computing 10/40 = 25% again. The clean way to see it: draining a fraction f of the mixture and refilling with solvent multiplies the concentration by (1 − f). Here (1 − 1/5) × 25% = 4/5 × 25% = 20%. Memorize that one-liner; repeated drain-and-refill questions just multiply by (1 − f) once per round.

**Worked example (very hard — repeated drain-and-refill).** A 20 L container holds pure (100%) antifreeze. You drain 4 L and refill with water, mix, then drain 4 L of the *mixture* and refill with water again. What is the final antifreeze concentration?

Each round drains 4 of 20 L, so f = 4/20 = 1/5, and each round multiplies the concentration by (1 − 1/5) = 4/5. Two rounds: 100% × (4/5) × (4/5) = 100% × 16/25 = 64%. The trap here is subtracting: a careless test-taker reasons "I removed 1/5 twice, so 2/5 of the antifreeze is gone, leaving 60%." Wrong — the second drain removes a fifth of what *remains*, not a fifth of the original, so the right operation is *multiply*, not subtract. The general formula for n identical rounds is starting concentration × (1 − f)^n. Recognizing this as a geometric decay, not a linear one, is the entire point of the hard version of the problem.

**Alligation — the geometric shortcut.** For two mixtures combined to hit a target concentration, the amounts mix *inversely* to their distance from the target.

**Worked example.** 50 L of 40% alcohol combined with some amount of 70% alcohol yields 55% alcohol. How much 70%?

Target is 55%. Distance from 40 to 55 is 15. Distance from 70 to 55 is 15. Equal distances → equal volumes. So you need 50 L of the 70% solution.

**Algebra check.** 0.40(50) + 0.70x = 0.55(50 + x). 20 + 0.7x = 27.5 + 0.55x. 0.15x = 7.5. x = 50. Same answer. Always have the algebra in your back pocket — alligation is the fast path, but the equation is the audit trail when distances aren't clean.

**The general alligation rule.** To hit target T from two sources at A and B (with A < T < B):

**amount of A / amount of B = (B − T) / (T − A)**

The quantity farther from the target contributes *less*. That's the lever principle at work: picture the target as a fulcrum on a number line and the two source concentrations as weights hanging at A and B. For the seesaw to balance at T, the heavier weight (larger amount) must sit *closer* to the fulcrum. So the side farther away is the lighter one. Read the rule once more with that picture: A's amount is proportional to B's distance (the *opposite* side's gap). Swapping which distance goes with which source is the single most common alligation error.

A compact way to lay out any two-source blend:

| Source | Concentration | Distance to target T | Amount (∝ the *other's* distance) |
|---|---|---|---|
| A (low) | A | T − A | proportional to (B − T) |
| B (high) | B | B − T | proportional to (T − A) |

> **Recall check.** State the alligation rule: to blend two solutions at concentrations A and B to hit target T, what ratio of A to B do you use? (Answer: amount of A : amount of B = (B − T) : (T − A) — the distances swapped, each source weighted by the *other's* distance from T.) Apply it: blend 30% and 70% solutions to reach 45%. Distances: 30 is 15 from 45; 70 is 25 from 45. Ratio of 30%:70% = 25:15 = **5:3**. If you mixed up which distance goes with which source, re-read the lever picture: each source's contribution is proportional to how far the *other* source sits from the target.

**Weighted averages.** When combining groups with different sizes, the average isn't the simple mean — it's pulled toward the bigger group. The general formula:

weighted average = (w1·x1 + w2·x2 + ... ) / (w1 + w2 + ...)

where the w's are the weights (group sizes) and the x's are the values. Concentrations, prices, test scores, speeds — all the same machine. A key consequence to internalize: the weighted average is *always* strictly between the smallest and largest values being averaged (unless all values are equal). If you ever compute a "weighted average" that lands outside the range of your inputs, you have made an arithmetic error — use this as a free sanity check on every problem.

**Worked example.** A class of 10 boys averages 75 on a test, 15 girls average 85. Class average?

Weighted: (10·75 + 15·85) / 25 = (750 + 1275) / 25 = 2025 / 25 = 81. Not 80 (the simple average of 75 and 85), because more students scored 85, so the mean is dragged toward 85.

**Shortcut (lever model).** The class average sits at 81 — 6 units from 75, 4 units from 85. Ratio of distances 6:4 = 3:2. The **inverse** of that ratio (2:3) gives the relative sizes of the groups. Confirms 10:15 = 2:3. The farther a group is from the mean, the fewer members it has. This is alligation again — concentrations and group means are the *same* lever.

**Working backward from a weighted average (backsolving / find-the-weight).** The GMAT often gives you the blended result and asks for an unknown weight or unknown value. Set it up as alligation and read off the answer.

**Worked example (medium-hard).** A grocer mixes nuts costing $6/lb with nuts costing $10/lb to produce 40 lb of a blend worth $7.50/lb. How many pounds of the $10 nuts are used?

Alligation on price: distance from $6 to $7.50 is 1.5; distance from $10 to $7.50 is 2.5. Ratio of cheap:expensive = 2.5 : 1.5 = 5 : 3 (each weighted by the *other's* distance). So out of 5 + 3 = 8 parts, the expensive nuts are 3 parts. Total is 40 lb, so each part = 5 lb, and the $10 nuts = 3 × 5 = **15 lb**. Check: 25 lb × $6 + 15 lb × $10 = 150 + 150 = $300; $300 / 40 lb = $7.50. The named tactic here is **alligation-to-find-a-weight**: never set up a two-variable system when one ratio plus a total gives the answer.

**Worked example (find the missing value — plugging in numbers).** A solution is made by mixing 3 parts of a 20% acid solution with 2 parts of an *unknown* concentration to produce a 32% acid blend. What is the unknown concentration?

Here the unknown is a *value*, not a weight, so alligation in its ratio form is awkward — fall back on the master equation and **plug in a convenient total** for "parts." Let the parts be literal liters: 3 L at 20% and 2 L at u%. Total acid = 0.20(3) + (u/100)(2) = 0.6 + 0.02u. Total volume = 5 L. Set the blend to 32%: (0.6 + 0.02u)/5 = 0.32, so 0.6 + 0.02u = 1.6, giving 0.02u = 1.0 and u = **50%**. Picking a clean number for the parts (1 L each) turns an abstract ratio problem into plain arithmetic — that is the **plug-in-numbers** tactic. Sanity check with the lever: the blend (32) sits 12 above the known 20 and 18 below 50, distances 12:18 = 2:3, inverse 3:2 = the 3:2 part ratio. Consistent.

**Backsolving an answer-choice question.** When the question is multiple choice and the algebra looks heavy, test a choice instead of solving.

**Worked example (backsolving).** How many liters of a 60% acid solution must be added to 10 L of a 20% acid solution to obtain a 36% acid solution? (A) 4 (B) 6 (C) 20/3 (D) 8 (E) 10

Target 36% is between 20% and 60%, closer to the 20% side, so you'll need *less* of the 60% than the 20% — under 10 L. That alone kills (E). Try (B) 6: acid = 0.20(10) + 0.60(6) = 2 + 3.6 = 5.6 L; total = 16 L; 5.6/16 = 35%. Slightly low, so we need a touch more 60% acid — push up, not down. Try (D) 8: acid = 2 + 4.8 = 6.8 L; total = 18 L; 6.8/18 = 37.8%. Too high. The answer is wedged between (B) and (D), so the only candidate is (C) 20/3. Confirm with alligation: distance 20→36 = 16, distance 60→36 = 24, ratio of 20%:60% = 24:16 = 3:2. The 20% solution is 3 parts = 10 L, so 1 part = 10/3 L, and the 60% solution = 2 parts = **20/3 L**. Answer (C). The lesson: **backsolving plus a quick "which side is the answer closer to?" estimate** brackets the answer in seconds and tells you whether to push your trial up or down. Always sanity-check direction first — because 36 is nearer 20, the 60% amount is the *smaller* contributor.

> **Recall check.** When you backsolve a weighted-average answer choice and your trial gives a blend that is too *low*, do you raise or lower the amount of the *higher-value* component next? (Raise it — adding more of the stronger ingredient pulls the blend up toward the higher value. Conversely, a blend that comes out too high means you added too much of the high component, so dial it down.)

**Average speed — the disguised mixture.** Average speed over a trip is a weighted average of the leg speeds, weighted by *time*, not distance. This is the classic trap: if you go 60 mph for one leg and 40 mph for another *equal-distance* leg, the average is NOT 50.

**Worked example (hard).** A car travels 120 miles at 60 mph, then 120 miles at 40 mph. Average speed for the whole trip?

Do not average 60 and 40. Use total distance over total time. First leg: 120/60 = 2 hours. Second leg: 120/40 = 3 hours. Total: 240 miles in 5 hours = 48 mph. It is below 50 because the car spends *more time* at the slower speed (3 h vs 2 h), so the slow leg gets the heavier weight. For equal distances, the average speed is the harmonic mean: 2ab/(a+b) = 2·60·40/(100) = 4800/100 = 48. Memorize "equal-distance average speed = harmonic mean, always below the arithmetic mean." Edge case worth knowing: if the two *times* are equal instead of the distances, then time is split evenly and the average speed really is the plain mean (50). The phrasing of the problem — equal distance vs equal time — silently decides the weight.

**Mixture + weighted average equivalence.** Concentrations are just weighted averages of 0% (pure solvent) and 100% (pure solute). Every mixture problem is a weighted-average problem with percent-concentration as the variable being averaged. Recognize this once and half the "hard mixture" questions collapse into three-line problems.

**Trap to watch.** "Equal parts" vs "equal concentrations." If you mix equal volumes of 40% and 70% solutions, the result is 55% (the midpoint). If you need 60%, you need *more* of the 70% — not equal parts. Questions deliberately slip between these phrasings. A second, sneakier trap: **mixing percentages of different totals.** "Solution X is 30% salt and solution Y is 50% salt" tells you nothing about the blend until you know the *volumes*. A 30% solution and a 50% solution combined do not give 40% unless the volumes are equal. The percent is meaningless without its weight attached. A third, exam-favorite variant: a problem states "the *number* of liters of acid in X equals the *number* of liters of acid in Y" — that is a statement about absolute solute, not about concentration, and it constrains the volumes through their concentrations. Read every percentage as "percent *of what total*" before you let it into an equation.

> **Self-explanation prompt.** What is the "invariant" in a problem where you drain some solution and add pure water? If you can say "the solute is *not* invariant during the drain — draining removes solute proportionally — but during the refill the solute is invariant because only water is added, so I scale the concentration by (1 − fraction drained)," you understand the two-stage structure that catches most test-takers. The moment you name what is frozen and what is flowing at *each* step, the problem reduces to arithmetic.

**Procedure to memorize.** For any mixture or weighted-average question:

1. **Name the values and the weights.** Write each concentration/price/score (the value) next to its volume/quantity/group size (the weight).
2. **Decide the question type.** Forward (combine and find the blend) or backward (blend given, find a weight or a value)?
3. **Find the invariant** if something is added or removed. Solute stays put when solvent is added or evaporated; solvent stays put when solute is added. For drain-and-refill, multiply concentration by (1 − fraction drained); for n rounds, by (1 − f)^n.
4. **For two-source blends, use alligation:** amount of A : amount of B = (B − T) : (T − A). Weight each source by the *other's* distance to the target.
5. **Estimate direction first.** The blend lands closer to the side with the larger weight, and always *between* the two source values — use that to eliminate choices and to know whether to push a trial value up or down.
6. **Audit with the master equation** when distances aren't clean: (sum of value × weight) / (sum of weights) = blend.

**Common mistakes.**

- Averaging the two concentrations/prices/speeds directly, ignoring the weights (gives the midpoint only when weights are equal).
- Swapping the distances in alligation (pairing each source with its *own* distance instead of the *other's*).
- Treating repeated drain-and-refill as *subtraction* of fractions rather than *multiplication* by (1 − f) each round.
- Forgetting that draining mixture removes solute — treating drain-and-refill as if solute were invariant throughout.
- Averaging speeds by distance instead of by time on a multi-leg trip.
- Blending percentages without checking that the totals (weights) are equal before calling the result a simple midpoint.
- Accepting a "weighted average" that falls outside the range of the inputs — a guaranteed arithmetic error.

**Micro-drill.** Apply the anchor model — 90 seconds total:

1. A 40-liter solution is 25% acid. How much water must be added to dilute it to 20% acid?
2. A blend of $8/lb and $12/lb coffee must average $9/lb. What is the ratio of cheap to expensive coffee by weight?

Answers: (1) Acid (invariant) = 0.25 × 40 = 10 L. Final: 10 / (40 + w) = 0.20. Solve: 40 + w = 50, so w = **10 L**. (2) Alligation: distance from $8 to $9 is 1; distance from $12 to $9 is 3. Ratio cheap:expensive = 3:1. Check: (3 × 8 + 1 × 12) / 4 = 36/4 = 9. Answer: **3:1**. The source farther from the target ($12 is 3 away vs $8 is 1 away) contributes less — that's the lever principle in a single sentence.

**Recap.** Every problem in this family reduces to: identify what is frozen (the invariant), weight each value by its quantity, and let the blend fall between the sources according to the lever. Alligation is the fast read — amount of A : amount of B = (B − T) : (T − A), each source weighted by the *other's* distance from the target. Watch the killers: averaging without weights, swapping the alligation distances, treating repeated drain-and-refill as subtraction instead of multiplication by (1 − f), and forgetting that draining a mixture carries solute away. Estimate the direction first — and remember the blend always lands *between* the inputs — to eliminate choices, then audit with the master weighted-average equation when the numbers aren't clean. One mental model — frozen quantity plus a balancing lever — and the whole costume rack of mixture, blend, score, and average-speed problems is wearing the same outfit underneath.
