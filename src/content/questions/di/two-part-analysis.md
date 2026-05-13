---
section: DI
topic: Two-Part Analysis
---

## Q1
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Rate Problem

A shipping company has two trucks. Truck A can deliver a full load in 6 hours. Truck B can deliver the same load in 4 hours. If both trucks work together on a single load, the total time to complete the delivery is T hours. If only Truck A works, the time is S hours.

Select the value of T (row 1) and the value of S (row 2).

|       | T (both) | S (A only) |
|-------|----------|------------|
| 1.6   |          |            |
| 2.4   |          |            |
| 3.6   |          |            |
| 4.0   |          |            |
| 6.0   |          |            |

**answer:** T = 2.4, S = 6.0
**fastest_path:** Combined rate 1/6 + 1/4 = 5/12 → T = 12/5 = 2.4. S = 6 is given directly.
**explanation:** Combined rate: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 of a load per hour. Time = 1 / (5/12) = 12/5 = 2.4 hours. For Truck A alone, the problem states directly it takes 6 hours. So T = 2.4, S = 6.0.
**mistake_a:** 1.6 — inverting the combined-rate fraction (treating 5/12 as the time directly).
**mistake_c:** 3.6 — partial sum of times then halved; not a rate-additive setup.
**mistake_d:** 4.0 — Truck B's solo time, swapped into either column.
**common_trap:** Adding times directly (e.g., averaging 6 and 4) instead of adding rates. Rates add for parallel work; times don't.
**takeaway:** Combined-work problems: convert each worker to a rate (1/time), sum rates, then invert for combined time.
**related_reading:** reading-di-06-two-part-analysis

---

## Q2
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mixture

A chemist is mixing Solution X (30% salt) with Solution Y (60% salt) to create 10 liters of a 45% salt solution. Determine the amount of Solution X (row 1) and the amount of Solution Y (row 2) needed.

|       | Solution X | Solution Y |
|-------|------------|------------|
| 2 L   |            |            |
| 3 L   |            |            |
| 4 L   |            |            |
| 5 L   |            |            |
| 6 L   |            |            |
| 7 L   |            |            |

**answer:** X = 5 L, Y = 5 L
**fastest_path:** Target 45% is the midpoint of 30% and 60%, so equal volumes: 5 L each.
**explanation:** Let x be liters of X and y be liters of Y. Equations: x + y = 10 and 0.30x + 0.60y = 0.45(10) = 4.5. From the first equation, x = 10 - y. Substituting: 0.30(10 - y) + 0.60y = 4.5 → 3 - 0.30y + 0.60y = 4.5 → 0.30y = 1.5 → y = 5. Then x = 5. Both are 5 liters.
**mistake_a:** 2 L — lopsided guess weighted toward the higher-concentration solution.
**mistake_b:** 3 L — partial-substitution slip in either direction.
**mistake_c:** 4 L — off-by-one from picking adjacent value to the symmetric answer.
**mistake_e:** 6 L — mirror error of 4 L; same arithmetic slip going the other way.
**mistake_f:** 7 L — extreme lopsided guess weighted toward one solution.
**common_trap:** Eyeballing the percentages without anchoring 45% as the midpoint of 30% and 60%.
**takeaway:** Mixture midpoint shortcut: when the target concentration equals the average of the two source concentrations, equal volumes are required.
**related_reading:** reading-di-06-two-part-analysis

---

## Q3
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Investment

An investor splits $100,000 between two funds. Fund Alpha yields 8% annually, Fund Beta yields 5% annually. The total annual return is $6,800. Determine the amount invested in Fund Alpha (row 1) and Fund Beta (row 2).

|         | Fund Alpha | Fund Beta |
|---------|------------|-----------|
| $20,000 |            |           |
| $40,000 |            |           |
| $50,000 |            |           |
| $60,000 |            |           |
| $70,000 |            |           |
| $80,000 |            |           |

**answer:** Alpha = $60,000, Beta = $40,000
**fastest_path:** Target rate 6.8% sits between 5% and 8%, closer to 8%, so Alpha gets more weight. Solve: 0.03a = 1,800 → a = 60k, b = 40k.
**explanation:** Let a be the amount in Alpha and b in Beta. Equations: a + b = 100,000 and 0.08a + 0.05b = 6,800. From the first, b = 100,000 - a. Substituting: 0.08a + 0.05(100,000 - a) = 6,800 → 0.08a + 5,000 - 0.05a = 6,800 → 0.03a = 1,800 → a = 60,000. So Alpha = $60,000 and Beta = $40,000.
**mistake_a:** $20,000 — reverse split, would imply far too low a return ($2,600).
**mistake_c:** $50,000 — even split yields 6.5% blended rate, below the $6,800 target.
**mistake_e:** $70,000 — over-weight Alpha; revenue would be $7,100.
**mistake_f:** $80,000 — extreme over-weight; revenue would be $7,400.
**common_trap:** Picking 50/50 because it averages the rates — but the target return forces more weight on the higher-yield fund.
**takeaway:** Weighted-rate split: target rate's distance from each yield determines the weight. Closer to one yield = more weight on that fund.
**related_reading:** reading-di-06-two-part-analysis

---

## Q4
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "The new marketing campaign increased sales by 25% in the first quarter. However, the campaign also coincided with a major competitor going bankrupt, which reduced competition in the market. Therefore, the campaign's effectiveness may be overstated."

From the statements below, identify the conclusion of the argument (row 1) and the primary assumption challenged by the argument (row 2).

| Statement                                                                          | Conclusion | Assumption |
|------------------------------------------------------------------------------------|------------|------------|
| The marketing campaign caused the 25% sales increase                                |            |            |
| A major competitor went bankrupt during the quarter                                 |            |            |
| The campaign's effectiveness may be overstated                                      |            |            |
| Sales increased 25% in the first quarter                                            |            |            |
| Reduced competition always leads to increased sales                                 |            |            |

**answer:** Conclusion = "The campaign's effectiveness may be overstated"; Assumption challenged = "The marketing campaign caused the 25% sales increase"
**fastest_path:** "Therefore" signals the conclusion (effectiveness overstated). The challenged assumption is the unstated causal link the counter-evidence undermines (campaign caused the rise).
**explanation:** The conclusion is the claim being made: "the campaign's effectiveness may be overstated." The argument questions the assumption that the marketing campaign alone caused the 25% sales increase by introducing an alternative explanation (the competitor's bankruptcy). The assumption challenged is that the campaign caused the increase.
**mistake_b:** A premise (a documented fact about the competitor) — not the conclusion or the unstated assumption.
**mistake_d:** Another premise (the 25% increase fact); explicit data in the argument, not what's being challenged.
**mistake_e:** Universal-strength claim ("always"); the argument only needs the local causal link, not a universal rule.
**common_trap:** Picking a stated premise as the assumption. Assumptions are unstated — explicit facts are premises, not assumptions.
**takeaway:** Conclusion follows "therefore"; the challenged assumption is the unstated link the counter-evidence undermines.
**related_reading:** reading-di-06-two-part-analysis

---

## Q5
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Distance/Rate

Two trains leave cities 540 km apart, traveling toward each other. Train A travels at 80 km/h, Train B at 100 km/h. They leave at the same time. Determine how many kilometers Train A has traveled when they meet (row 1), and the time elapsed when they meet (row 2).

|         | Train A Distance | Time to Meet |
|---------|------------------|--------------|
| 180 km  |                  |              |
| 240 km  |                  |              |
| 300 km  |                  |              |
| 3 hours |                  |              |
| 4 hours |                  |              |
| 5 hours |                  |              |

**answer:** Train A distance = 240 km, Time = 3 hours
**fastest_path:** Closing speed 80+100 = 180 → t = 540/180 = 3 hr. Train A distance = 80 × 3 = 240 km.
**explanation:** Combined closing speed = 80 + 100 = 180 km/h. Time to meet = 540 / 180 = 3 hours. Train A's distance = 80 × 3 = 240 km. Verify: Train B travels 100 × 3 = 300 km. 240 + 300 = 540. Checks out.
**mistake_a:** 180 km — that's the closing speed (km/h), not Train A's distance. Unit-confusion.
**mistake_c:** 300 km — that's Train B's distance (100 × 3); column asks for Train A.
**mistake_e:** 4 hours — using Train A's solo speed against the full 540 (320/80 ≈ 4); ignores the closing-rate logic.
**mistake_f:** 5 hours — arithmetic slip on 540/something.
**common_trap:** Swapping Train A's distance (240) with Train B's (300). Read which train the column asks for.
**takeaway:** Opposite-direction motion: closing speed = sum of speeds. Then each train's distance = its own speed × shared time.
**related_reading:** reading-di-06-two-part-analysis

---

## Q6
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthening and Weakening

A city council argues: "Installing new streetlights on Main Street will reduce nighttime accidents by at least 30%." A journalist evaluates this claim.

From the statements below, identify one that would most strengthen the council's argument (row 1) and one that would most weaken it (row 2).

| Statement                                                                             | Strengthens | Weakens |
|---------------------------------------------------------------------------------------|-------------|---------|
| A nearby city with similar traffic volume saw 35% fewer accidents after installing lights |             |         |
| Main Street accidents are primarily caused by speeding, not visibility                 |             |         |
| Main Street has a higher-than-average traffic volume                                   |             |         |
| The new streetlights use energy-efficient LED bulbs                                    |             |         |
| Most accidents on Main Street occur during daylight hours                              |             |         |

**answer:** Strengthens = "A nearby city with similar traffic volume saw 35% fewer accidents after installing lights"; Weakens = "Most accidents on Main Street occur during daylight hours"
**fastest_path:** Strongest strengthen = direct parallel case (35% in similar city). Strongest weaken = premise-nullifier (lights help nighttime; daylight accidents unaffected).
**explanation:** A comparable case study showing a 35% reduction directly supports the claim that streetlights will reduce accidents by at least 30%. "Most accidents occur during daylight" weakens the argument because streetlights would have no impact on daylight accidents — making a 30% overall reduction implausible. The other options are either irrelevant (LED bulbs, traffic volume) or only weakly related (speeding vs visibility addresses cause but doesn't directly contradict the claim).
**mistake_b:** Speeding-not-visibility addresses cause but doesn't directly contradict the 30% reduction claim — only weakly weakens.
**mistake_c:** Higher traffic volume is irrelevant to whether lights reduce night accidents.
**mistake_d:** Energy efficiency of bulbs is irrelevant to the accident-reduction mechanism.
**common_trap:** Picking the speeding option as the strongest weaken — it weakens indirectly. The daylight option directly nullifies the lights' mechanism (lights have no daylight role).
**takeaway:** Strengthen/weaken: prefer evidence that directly tests the claim's mechanism over evidence that adds peripheral context.
**related_reading:** reading-di-06-two-part-analysis

---

## Q7
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — System of Constraints

A manufacturing company produces Product X and Product Y. Each unit of X requires 2 hours of labor and costs $10 in materials. Each unit of Y requires 3 hours of labor and costs $15 in materials. The company has a total of 120 hours of labor and a materials budget of $600 available. Determine the maximum number of Product X (row 1) and Product Y (row 2) that can be produced if ONLY Product X is made (row 1) and ONLY Product Y is made (row 2).

|     | Max X (only X) | Max Y (only Y) |
|-----|----------------|----------------|
| 30  |                |                |
| 40  |                |                |
| 50  |                |                |
| 60  |                |                |
| 80  |                |                |

**answer:** Max X = 60, Max Y = 40
**fastest_path:** X-only: min(120/2, 600/10) = min(60, 60) = 60. Y-only: min(120/3, 600/15) = min(40, 40) = 40.
**explanation:** For X only: Labor constraint: 2x ≤ 120 → x ≤ 60. Materials constraint: 10x ≤ 600 → x ≤ 60. Both binding — max X = 60. For Y only: Labor constraint: 3y ≤ 120 → y ≤ 40. Materials constraint: 15y ≤ 600 → y ≤ 40. Both binding — max Y = 40.
**mistake_a:** 30 — halving labor or material budget; misreading the cap.
**mistake_c:** 50 — picking middle option without computing the constraint floors.
**mistake_e:** 80 — ignoring one of the two constraints; would violate either labor or budget.
**common_trap:** Computing only one constraint (labor or budget) and forgetting that production is bounded by the *binding* (smaller) constraint.
**takeaway:** Single-product capacity = min(time-budget / time-per-unit, dollar-budget / cost-per-unit). Always check both constraints.
**related_reading:** reading-di-06-two-part-analysis

---

## Q8
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Cause and Effect

A researcher concludes: "Students who eat breakfast before school score 10 points higher on standardized tests than students who skip breakfast. Therefore, schools should provide free breakfast to improve test scores."

From the options below, identify a statement that, if true, would provide an alternative explanation (row 1), and a statement that, if true, would most directly support the conclusion (row 2).

| Statement                                                                               | Alt Explanation | Support |
|-----------------------------------------------------------------------------------------|-----------------|---------|
| Students from higher-income families are more likely to eat breakfast                   |                 |         |
| A school that introduced free breakfast saw test scores rise by 12 points the next year |                 |         |
| Breakfast foods contain essential nutrients for brain function                          |                 |         |
| Schools already provide lunch programs                                                  |                 |         |
| Students who eat breakfast tend to arrive at school earlier                             |                 |         |

**answer:** Alternative Explanation = "Students from higher-income families are more likely to eat breakfast"; Support = "A school that introduced free breakfast saw test scores rise by 12 points the next year"
**fastest_path:** Alt explanation = confounder (income drives both). Support = causal-intervention study (school intervention → score rise).
**explanation:** The alternative explanation is that income (not breakfast itself) drives the correlation — wealthier students eat breakfast AND have advantages that lead to higher test scores. The direct support is a causal study showing that providing free breakfast actually led to higher scores, which parallels the recommended action in the conclusion.
**mistake_c:** Mechanism plausibility (nutrients aid the brain) — doesn't supply an alt cause or causal evidence.
**mistake_d:** Lunch-program existence is irrelevant to the breakfast claim.
**mistake_e:** Earlier arrival is a possible mediator, not an independent confounder or intervention study.
**common_trap:** Confusing mechanism plausibility with causal evidence. Mechanism doesn't isolate cause; intervention does.
**takeaway:** Causal-claim support: prefer experiments / interventions over mechanism plausibility. Alt explanations cite confounders, not mediators.
**related_reading:** reading-di-06-two-part-analysis

---

## Q9
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Rate Problems

A copy editor can proofread 12 pages per hour. A junior editor can proofread 8 pages per hour. They are assigned a 120-page manuscript. If they work together from the start, the time to finish is T hours. If only the copy editor works, the time is S hours.

Select the value of T (row 1) and the value of S (row 2).

|        | T (both) | S (copy editor only) |
|--------|----------|----------------------|
| 4 hrs  |          |                      |
| 6 hrs  |          |                      |
| 8 hrs  |          |                      |
| 10 hrs |          |                      |
| 15 hrs |          |                      |

**answer:** T = 6 hrs, S = 10 hrs
**fastest_path:** Combined rate 12+8 = 20 → T = 120/20 = 6. Solo: S = 120/12 = 10.
**explanation:** Combined rate = 12 + 8 = 20 pages per hour. T = 120 / 20 = 6 hours. Copy editor alone: S = 120 / 12 = 10 hours. Sanity check: the "both" time must be shorter than either individual time, so T = 6 and S = 10 fits. If a student picks T = 4, they are likely averaging or double-counting; the rates add, the times do not.
**mistake_a:** 4 hrs — over-aggressive rate addition or arithmetic slip; below the faster solo rate.
**mistake_c:** 8 hrs — partial rate sum or misreading the manuscript size.
**mistake_e:** 15 hrs — junior editor's solo time (120/8). Confused which editor the column asks for.
**common_trap:** Picking 15 for S because the junior editor's time is 15 — but column S asks for the copy editor (12 pages/hr → 10 hrs).
**takeaway:** Combined-rate problems: rates add, then divide work by combined rate. Solo time = work / solo rate.
**related_reading:** reading-di-06-two-part-analysis

---

## Q10
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Mixture

A coffee roaster blends Bean A (which costs $8 per pound) with Bean B (which costs $14 per pound) to produce 30 pounds of a blend that costs $10 per pound. Determine the pounds of Bean A (row 1) and pounds of Bean B (row 2) required.

|        | Bean A | Bean B |
|--------|--------|--------|
| 5 lb   |        |        |
| 10 lb  |        |        |
| 15 lb  |        |        |
| 20 lb  |        |        |
| 25 lb  |        |        |

**answer:** Bean A = 20 lb, Bean B = 10 lb
**fastest_path:** Target $10 is closer to $8 than to $14, so more A. Lever-arm: distance ratio = 4:2 → A:B = 2:1 → 20:10.
**explanation:** Let a be pounds of Bean A and b of Bean B. Two equations: a + b = 30 and 8a + 14b = 10(30) = 300. From the first, a = 30 - b. Substituting: 8(30 - b) + 14b = 300 → 240 + 6b = 300 → b = 10. So a = 20. Quick gut-check: $10 is closer to $8 than to $14, so the blend should weight more heavily toward Bean A, which matches 20 lb vs 10 lb.
**mistake_a:** 5 lb — lopsided guess in the wrong direction.
**mistake_c:** 15 lb — equal split; would yield $11/lb blend, not $10.
**mistake_e:** 25 lb — picked the larger row for the smaller-weight bean (B), reversing the answer.
**common_trap:** 15/15 split — but $10 is closer to $8, so the cheaper bean must weigh more.
**takeaway:** Mixture pricing lever-arm: target closer to component A → A weighs more. Distance ratio inverts to weight ratio.
**related_reading:** reading-di-06-two-part-analysis

---

## Q11
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** System of Equations

At a concert, adult tickets cost $45 and student tickets cost $20. The venue sold 400 tickets and collected $13,750 in total revenue. Determine the number of adult tickets sold (row 1) and the number of student tickets sold (row 2).

|     | Adult Tickets | Student Tickets |
|-----|---------------|-----------------|
| 150 |               |                 |
| 170 |               |                 |
| 200 |               |                 |
| 230 |               |                 |
| 250 |               |                 |
| 280 |               |                 |

**answer:** Adult Tickets = 230, Student Tickets = 170
**fastest_path:** If all 400 were students: revenue 8,000. Surplus 5,750 over student floor. Per-adult premium 25. Adults = 5,750/25 = 230. Students = 170.
**explanation:** Let a = adult tickets and s = student tickets. Set up two equations: a + s = 400 and 45a + 20s = 13,750. Substitute s = 400 - a into the revenue equation: 45a + 20(400 - a) = 13,750 → 25a + 8,000 = 13,750 → 25a = 5,750 → a = 230. Then s = 400 - 230 = 170. Both values appear in the row labels, so select Adult = 230 in row 1 and Student = 170 in row 2.
**mistake_a:** 150 — mis-substitution direction; would imply revenue around $11,750.
**mistake_c:** 200 — even split; revenue $13,000, missing the $750 to reach target.
**mistake_e:** 250 — over-corrected; revenue $14,250.
**mistake_f:** 280 — far overshoot; revenue $15,000.
**common_trap:** Eyeballing 200/200 because it's the average, but the higher-priced ticket needs disproportionately more sold to lift the per-ticket average above $20.
**takeaway:** Two-priced sum problems: subtract the lower-price floor from total revenue, then divide the surplus by the price gap.
**related_reading:** reading-di-06-two-part-analysis

---

## Q12
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Numerical Relationships

A set of five distinct positive integers has a mean of 14 and a median of 12. Let L be the largest possible value of the greatest integer in the set, and let S be the smallest possible value of the greatest integer in the set. Determine L (row 1) and S (row 2).

|     | L (largest possible max) | S (smallest possible max) |
|-----|--------------------------|---------------------------|
| 14  |                          |                           |
| 19  |                          |                           |
| 20  |                          |                           |
| 36  |                          |                           |
| 42  |                          |                           |

**answer:** L = 42, S = 19
**fastest_path:** Sum = 70. To maximize e: shrink a, b, d → 1, 2, 13 → e = 42. To minimize e: maximize a, b ≤ 11 (10, 11), then split 37 between d, e with d < e: d = 18, e = 19.
**explanation:** Let the ordered integers be a < b < 12 < d < e. Their sum is 5 × 14 = 70, so a + b + d + e = 58. For L (maximize e): minimize a, b, and d. The smallest distinct positive integers below 12 are a = 1 and b = 2. The smallest d greater than 12 is 13. Then e = 58 - 1 - 2 - 13 = 42. So L = 42. For S (minimize e): push a, b, and d as high as possible subject to a < b < 12 and 12 < d < e. Maximize a + b with a < b < 12: take a = 10, b = 11 (sum 21). Then d + e = 58 - 21 = 37 with 12 < d < e. To minimize e, make d as close to e as possible: d = 18, e = 19 works (distinct, both > 12, sum 37). Any larger d (e.g., d = 19) would force e = 18 < d, violating order. So S = 19.
**mistake_a:** 14 — confusing the mean with the max; mean is 14 but max is unbounded by it.
**mistake_c:** 20 — close-but-wrong on min-e; missed that 19 is achievable with d = 18.
**mistake_d:** 36 — arithmetic slip on max-e setup, e.g., taking a = 1, b = 3 instead of 1, 2.
**common_trap:** Allowing d ≥ e or b ≥ 12 — the strict ordering and median-fix-at-12 constrain the boundary cases.
**takeaway:** Min/max with median fixed: minimize others to maximize one, maximize others to minimize one. Distinct + ordering decide the boundary.
**related_reading:** reading-di-06-two-part-analysis

---

## Q13
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "City X's new bike-share program launched in March. Six months later, traffic congestion on Main Avenue had decreased by 15%. Therefore, the bike-share program reduced congestion on Main Avenue."

From the statements below, identify the conclusion of the argument (row 1) and the central unstated assumption required for the argument to hold (row 2).

| Statement                                                                                    | Conclusion | Assumption |
|----------------------------------------------------------------------------------------------|------------|------------|
| The bike-share program reduced congestion on Main Avenue                                     |            |            |
| No other factor materially contributed to the observed congestion decrease                   |            |            |
| Traffic congestion on Main Avenue decreased by 15%                                           |            |            |
| The bike-share program launched in March                                                     |            |            |
| Bike-share programs always reduce congestion wherever they are implemented                   |            |            |

**answer:** Conclusion = "The bike-share program reduced congestion on Main Avenue"; Assumption = "No other factor materially contributed to the observed congestion decrease"
**fastest_path:** "Therefore" → causal claim is the conclusion. Causal-from-correlation requires "no other factor caused the drop" as the unstated link.
**explanation:** The conclusion is signaled by "Therefore" and is the causal claim being drawn. The central assumption is that the timing correlation reflects causation — i.e., that nothing else (road construction, gas prices, remote work shifts) drove the drop. The other options are either premises (2nd and 4th) or too strong (5th overstates the assumption; the argument only needs it in this case, not universally).
**mistake_c:** A premise (the documented 15% drop) — explicit data, not the conclusion or unstated link.
**mistake_d:** A premise (the launch date) — explicit context, not the conclusion.
**mistake_e:** Too strong — universal "always" claim isn't required; the argument needs only "no confounder *here*."
**common_trap:** Picking the universal claim as the assumption — the argument only needs the local causal link, not a universal rule.
**takeaway:** Causal arguments rest on "no alt cause active *in this instance*"; universal claims overshoot what the argument requires.
**related_reading:** reading-di-06-two-part-analysis

---

## Q14
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Cause and Effect / Strengthening and Weakening

A technology analyst argues: "Companies that adopted the new CRM platform saw their customer retention rates rise by an average of 8 percentage points in the following year. Therefore, the CRM platform is an effective tool for improving retention."

From the statements below, identify one that would most strengthen the argument (row 1) and one that would most weaken it by offering an alternative explanation (row 2).

| Statement                                                                                         | Strengthens | Weakens (alt cause) |
|---------------------------------------------------------------------------------------------------|-------------|---------------------|
| A controlled experiment randomly assigned the CRM to half of a company's regions and saw retention rise 7 points only in those regions |             |                     |
| Companies that adopted the CRM also simultaneously raised their customer service headcount by 20% |             |                     |
| The CRM platform is the highest-rated software in its category                                    |             |                     |
| Retention rates across the industry rose 1 percentage point on average last year                  |             |                     |
| The CRM costs $50 per seat per month                                                              |             |                     |

**answer:** Strengthens = "A controlled experiment randomly assigned the CRM to half of a company's regions and saw retention rise 7 points only in those regions"; Weakens = "Companies that adopted the CRM also simultaneously raised their customer service headcount by 20%"
**fastest_path:** Random-assignment experiment isolates causation (strongest strengthen). Confounder (parallel headcount boost) supplies alt cause (strongest weaken).
**explanation:** The strengthen option isolates the CRM's causal effect by using random assignment within companies — ruling out self-selection and most confounders. The weaken option provides an alternative cause for the retention rise: if adopters also boosted service staff, the headcount (not the CRM) could explain the lift. The category rating and price are irrelevant to effectiveness; the industry-wide 1-point rise is too small to explain an 8-point average gap and doesn't offer an alternative mechanism for adopters specifically.
**mistake_c:** Reputation/category rating doesn't isolate the CRM's causal effect on retention.
**mistake_d:** Industry-wide 1-pp rise is too small to explain an 8-pp adopter gap and isn't adopter-specific.
**mistake_e:** Cost is irrelevant to effectiveness on retention.
**common_trap:** Picking the industry-trend option as weaken — it doesn't supply an alt cause for adopters specifically.
**takeaway:** Strengthen via random-assignment evidence; weaken via a parallel confounder that could explain the same effect.
**related_reading:** reading-di-06-two-part-analysis

---

## Q15
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Rate Problems

A tank is being filled by two pipes and drained by one. Pipe A alone fills the tank in 4 hours. Pipe B alone fills the tank in 6 hours. The drain, when open, empties a full tank in 8 hours. If all three are opened simultaneously on an empty tank, the time to fill is T hours. If only Pipe A and the drain are open on an empty tank, the time to fill is U hours.

Select the value of T (row 1) and the value of U (row 2).

|              | T (all three) | U (A + drain) |
|--------------|---------------|---------------|
| 2.4 hrs      |               |               |
| 2.75 hrs     |               |               |
| 3.43 hrs     |               |               |
| 4.0 hrs      |               |               |
| 8.0 hrs      |               |               |

**answer:** T = 3.43 hrs, U = 8.0 hrs
**fastest_path:** Net rate (all three): 1/4+1/6−1/8 = 7/24 → T = 24/7 ≈ 3.43. Net rate (A+drain): 1/4−1/8 = 1/8 → U = 8.
**explanation:** Work in tank-fractions per hour. Pipe A fills at +1/4, Pipe B at +1/6, and the drain removes at -1/8. For T (all three open): net rate = 1/4 + 1/6 - 1/8. Using a common denominator of 24: 6/24 + 4/24 - 3/24 = 7/24 tank per hour. So T = 1 / (7/24) = 24/7 ≈ 3.43 hours. For U (Pipe A and drain only): net rate = 1/4 - 1/8 = 2/8 - 1/8 = 1/8 tank per hour, so U = 8 hours. The key trick is to add/subtract rates, never times.
**mistake_a:** 2.4 hrs — using 5/12 (sum of fill rates without drain); ignores the drain.
**mistake_b:** 2.75 hrs — partial-rate setup or arithmetic slip on the common denominator.
**mistake_d:** 4 hrs — Pipe A's solo fill time; ignores both Pipe B and drain.
**common_trap:** Ignoring the drain or treating its time (8 hrs) as additive instead of as a negative-rate.
**takeaway:** Net-rate problems: each pipe contributes +1/time (fill) or −1/time (drain). Sum signed rates, then invert.
**related_reading:** reading-di-06-two-part-analysis


---

## Q16
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Capacity Constraint

A firm produces two products. Product A sells for $20 per unit and requires 0.4 machine-hours; Product B sells for $35 per unit and requires 0.75 machine-hours. The firm operates daily at exactly 420 machine-hours of capacity and earns exactly $20,000 in daily revenue. Determine the daily production of Product A (row 1) and Product B (row 2).

|       | Units of A | Units of B |
|-------|------------|------------|
| 200   |            |            |
| 250   |            |            |
| 300   |            |            |
| 350   |            |            |
| 400   |            |            |

**answer:** A = 300, B = 400
**fastest_path:** 4a+7b=4,000 and 8a+15b=8,400. Subtract 2×(first) from second: b=400. Back-sub: a=300.
**explanation:** Let a = units of A, b = units of B. Revenue: 20a + 35b = 20,000 → 4a + 7b = 4,000. Machine-hours: 0.4a + 0.75b = 420 → 8a + 15b = 8,400. Multiply the first by 2 (8a + 14b = 8,000), subtract from the second: b = 400. Then 4a = 4,000 − 7(400) = 1,200 → a = 300. Always set up two linear constraints explicitly rather than guess-and-check.
**mistake_a:** 200 — partial elimination or guess-and-check landing one row off.
**mistake_b:** 250 — averaging or splitting the row labels by intuition.
**mistake_d:** 350 — over-reach in the elimination step; off-by-50.
**common_trap:** Solving only one constraint (revenue OR hours) and stopping — both must hold simultaneously.
**takeaway:** Two-constraint linear systems: standardize, eliminate one variable cleanly, back-substitute.
**related_reading:** reading-di-06-two-part-analysis

---

## Q17
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Pricing

A consultancy charges each client a flat base fee B plus a variable hourly rate R per hour worked. Two clients have the following bills: Client X is billed a total of $3,000 for 20 hours; Client Y is billed a total of $6,600 for 50 hours. Determine the base fee B (row 1) and the hourly rate R (row 2).

|        | Base fee B | Hourly rate R |
|--------|------------|---------------|
| $40    |            |               |
| $80    |            |               |
| $120   |            |               |
| $200   |            |               |
| $600   |            |               |

**answer:** B = $600, R = $120
**fastest_path:** Subtract bills: 30R = 3,600 → R = 120. Back-sub: B = 600.
**explanation:** From the two bills: B + 20R = 3,000 and B + 50R = 6,600. Subtract to eliminate B: 30R = 3,600 → R = 120. Back-substitute: B = 3,000 − 2,400 = 600. The trap is swapping which column takes which value; base fees are typically a single flat amount, hourly rates are per-unit.
**mistake_a:** $40 — partial subtraction or off-by-multiplier slip.
**mistake_b:** $80 — close-but-wrong arithmetic on the back-substitution.
**mistake_c:** $120 — that's R; column 1 asks for B.
**mistake_d:** $200 — guess from rounding 3,000/15 or similar.
**common_trap:** Swapping B and R between columns — base fee is a fixed amount, hourly rate is per-unit.
**takeaway:** Linear-pricing two-equation systems: subtract to eliminate the constant, solve the slope, back-substitute the intercept.
**related_reading:** reading-di-06-two-part-analysis

---

## Q18
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Revenue Split

A regional bus company operates two routes. Total weekly ridership across both routes is 28,000 passengers. Route 1 generates $5.00 per passenger and Route 2 generates $3.00 per passenger. Total weekly revenue is $100,000. Determine the weekly ridership on Route 1 (row 1) and the weekly revenue from Route 2 (row 2).

|         | Ridership on Route 1 | Revenue from Route 2 |
|---------|----------------------|----------------------|
| 8,000   |                      |                      |
| 20,000  |                      |                      |
| 60,000  |                      |                      |
| 80,000  |                      |                      |
| 100,000 |                      |                      |

**answer:** Ridership on Route 1 = 8,000, Revenue from Route 2 = 60,000
**fastest_path:** r₁+r₂=28k, 5r₁+3r₂=100k → 2r₁=16k → r₁=8k. r₂=20k → Route 2 revenue = 3 × 20k = 60k.
**explanation:** Let r₁ and r₂ be the ridership on the two routes. r₁ + r₂ = 28,000 and 5r₁ + 3r₂ = 100,000. Substitute r₂ = 28,000 − r₁: 5r₁ + 3(28,000 − r₁) = 100,000 → 2r₁ = 16,000 → r₁ = 8,000. Then r₂ = 20,000, and Route 2 revenue = 3 × 20,000 = $60,000. Trap: confusing "ridership" (people) with "revenue" (dollars) on column 2.
**mistake_b:** 20,000 — that's r₂ (Route 2 ridership), not r₁ or Route 2 revenue.
**mistake_d:** 80,000 — over-stretching ridership floors; would imply impossible total revenue.
**mistake_e:** 100,000 — that's the total revenue, not Route 1 ridership or Route 2 revenue.
**common_trap:** Mixing units — "ridership" (people) vs "revenue" (dollars). Column 2 explicitly asks for revenue, requiring an extra multiplication by $3.
**takeaway:** Always re-read column labels for unit (people/dollars). Last step often multiplies count by per-unit price.
**related_reading:** reading-di-06-two-part-analysis


---

## Q19
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mixture

A chemist mixes a 30% acid solution with a 70% acid solution to produce 8 liters of a 50% acid solution. Select the volume (in liters) of the 30% solution (column 1) and the volume of the 70% solution (column 2).

|     | 30% solution | 70% solution |
|-----|--------------|--------------|
| 2   |              |              |
| 3   |              |              |
| 4   |              |              |
| 5   |              |              |
| 6   |              |              |

**answer:** 30% solution = 4, 70% solution = 4
**fastest_path:** Target 50% is the midpoint of 30% and 70% → equal parts → 4 L each.
**explanation:** Let x = liters of 30% solution, y = liters of 70% solution. Then x + y = 8 (total volume) and 0.30x + 0.70y = 0.50(8) = 4 (acid balance). Substitute y = 8 − x: 0.30x + 0.70(8 − x) = 4 → 0.30x + 5.6 − 0.70x = 4 → −0.40x = −1.6 → x = 4. So y = 4. Cleanly symmetric because 50% is the midpoint of 30% and 70%, so equal parts is the intuition check.
**mistake_a:** 2 L — lopsided guess weighted toward the higher-concentration solution.
**mistake_b:** 3 L — off-by-one slip from partial substitution.
**mistake_d:** 5 L — mirror of 3 L slip.
**mistake_e:** 6 L — extreme lopsided guess weighted toward the lower-concentration side.
**common_trap:** Skipping the midpoint shortcut and miscomputing the algebra. 50% sits exactly between 30% and 70%, so equal volumes are required.
**takeaway:** Mixture midpoint shortcut: target = average of two source concentrations → equal volumes.
**related_reading:** reading-di-06-two-part-analysis

---

## Q20
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Probability — Without Replacement

A bag contains 8 white balls and 4 black balls. Two balls are drawn at random without replacement. Select the probability that both balls drawn are white (column 1) and the probability that both balls drawn are the same color (column 2).

|        | Both white | Same color |
|--------|------------|------------|
| 1/11   |            |            |
| 3/11   |            |            |
| 14/33  |            |            |
| 17/33  |            |            |
| 21/33  |            |            |

**answer:** Both white = 14/33, Same color = 17/33
**fastest_path:** P(WW) = (8/12)(7/11) = 14/33. P(BB) = 3/33. Same color = 14/33 + 3/33 = 17/33.
**explanation:** P(WW) = (8/12)(7/11) = 56/132 = 14/33. P(BB) = (4/12)(3/11) = 12/132 = 3/33 = 1/11. P(same color) = P(WW) + P(BB) = 14/33 + 3/33 = 17/33. Trap: treating "same color" as just P(WW) (forgets BB) or computing with replacement (introduces 1/11 but against the right denominator).
**mistake_a:** 1/11 — that's P(BB) alone; forgets the same-color OR with WW.
**mistake_b:** 3/11 — likely arithmetic slip in the WW or BB step, or with-replacement (8·7)/(12·12)-style miscalc.
**mistake_e:** 21/33 — over-counts; possibly added a same-color term that doesn't apply.
**common_trap:** Defining "same color" as just both-white. Same-color combines WW + BB.
**takeaway:** "Same color" = P(WW) + P(BB) (mutually exclusive). Without replacement: numerator drops by 1, denominator by 1.
**related_reading:** reading-di-06-two-part-analysis


---

## Q21
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Probability — Card Composition

A box contains 5 cards labeled 1 through 5. Two cards are drawn simultaneously at random (without replacement). Select the probability that both drawn cards are labeled with ODD numbers (column 1) and the probability that the SUM of the two drawn cards is an EVEN number (column 2).

|       | Both odd | Sum even |
|-------|----------|----------|
| 1/10  |          |          |
| 3/10  |          |          |
| 2/5   |          |          |
| 1/2   |          |          |
| 3/5   |          |          |

**answer:** Both odd = 3/10, Sum even = 2/5
**fastest_path:** C(5,2)=10. Odd-pairs: C(3,2)=3 → 3/10. Sum-even = both-odd OR both-even = (3+1)/10 = 2/5.
**explanation:** Total ways to draw 2 cards from 5 = C(5, 2) = 10. Odd-labeled cards: {1, 3, 5} (3 cards); even-labeled: {2, 4} (2 cards). P(both odd) = C(3, 2) / 10 = 3/10. For the sum to be even, both cards must be odd OR both must be even. P(both even) = C(2, 2) / 10 = 1/10. P(sum even) = 3/10 + 1/10 = 4/10 = 2/5. Trap: forgetting that "both even" also produces an even sum.
**mistake_a:** 1/10 — that's P(both even) alone; forgets the OR with both-odd.
**mistake_d:** 1/2 — fraction of cards that are odd (3/5 ≈ 1/2) misapplied as a probability.
**mistake_e:** 3/5 — proportion of odd cards confused with the joint probability.
**common_trap:** Defining "sum even" as only both-odd. Even sums also come from both-even pairs.
**takeaway:** Sum-even = both-odd ∪ both-even (disjoint). Combinatorial probability uses C(n,k) for unordered pair counts.
**related_reading:** reading-di-06-two-part-analysis

---

## Q22
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Probability — Independent Trials

In a three-round game, a player has an independent 60% chance of winning each round. Select the probability that the player wins ALL 3 rounds (column 1) and the probability that the player wins AT LEAST 1 round (column 2).

|        | All 3  | At least 1 |
|--------|--------|------------|
| 0.064  |        |            |
| 0.216  |        |            |
| 0.648  |        |            |
| 0.784  |        |            |
| 0.936  |        |            |

**answer:** All 3 = 0.216, At least 1 = 0.936
**fastest_path:** All-3: 0.6³ = 0.216. At-least-1: 1 − 0.4³ = 1 − 0.064 = 0.936.
**explanation:** Trials are independent. P(all 3 wins) = 0.6 × 0.6 × 0.6 = 0.216. P(at least 1 win) = 1 − P(no wins) = 1 − 0.4³ = 1 − 0.064 = 0.936. Trap: computing P(at least 1) as 3 × 0.6 = 1.8 (nonsensical) or as 0.6 + 0.6 × 0.4 + 0.6 × 0.4² (over-counts overlapping events). The complement method is the clean route for "at least one" in independent trials.
**mistake_a:** 0.064 — that's P(no wins) = 0.4³, the complement target. Subtract from 1 first.
**mistake_c:** 0.648 — close to all-3 result but missed the third multiplier (likely 0.6²·0.6 mis-rounded).
**mistake_d:** 0.784 — incorrect inclusion-exclusion or 1 − 0.6·0.6·0.6 trace.
**common_trap:** Computing P(at least 1) by direct addition (overcounts overlapping events). Use the complement: 1 − P(none).
**takeaway:** "At least one" with independent trials: complement method. P(≥1) = 1 − (1−p)ⁿ.
**related_reading:** reading-di-06-two-part-analysis


---

## Q23
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio Shift

A jar of marbles contains red and blue marbles in the ratio 3 to 5. After removing 6 red marbles and adding 10 blue marbles, the ratio of red to blue becomes 1 to 3. Select the original number of red marbles (column 1) and the original number of blue marbles (column 2).

|     | Original red | Original blue |
|-----|--------------|---------------|
| 14  |              |               |
| 21  |              |               |
| 28  |              |               |
| 35  |              |               |
| 42  |              |               |

**answer:** Original red = 21, Original blue = 35
**fastest_path:** r=3k, b=5k. After change: (3k−6)/(5k+10)=1/3 → 9k−18=5k+10 → 4k=28 → k=7. So r=21, b=35.
**explanation:** Let r and b be the original counts. Then r/b = 3/5 → r = 3b/5. After the change: (r − 6)/(b + 10) = 1/3 → 3(r − 6) = b + 10 → 3r − 18 = b + 10 → b = 3r − 28. Substitute r = 3b/5 into the second equation: b = 3(3b/5) − 28 = 9b/5 − 28 → b − 9b/5 = −28 → −4b/5 = −28 → b = 35. Then r = 3(35)/5 = 21. Verify both ratios: 21/35 = 3/5 ✓; (21 − 6)/(35 + 10) = 15/45 = 1/3 ✓.
**mistake_a:** 14 — k=2 trial-and-error setup that doesn't satisfy the post-change ratio.
**mistake_c:** 28 — k=4 wrong scaling factor; would give 28/40, post-change 22/50 ≠ 1/3.
**mistake_d:** 35 — that's the blue count, not the red count.
**mistake_e:** 42 — k=14 over-scaled; doesn't satisfy ratios after the swap.
**common_trap:** Substituting r=3b/5 (or k-multiple) but flipping the post-change subtraction/addition direction.
**takeaway:** Ratio-shift problems: parameterize as r=3k, b=5k, then plug into the post-change ratio equation. Solve for k, scale.
**related_reading:** reading-di-06-two-part-analysis


---

## Q24
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Time and Distance with Speed Ratio

Two cars, X and Y, leave from the same point at the same time and travel in opposite directions along a straight road. Car X travels at 50 miles per hour. Car Y travels at a speed that is 20 percent higher than Car X's speed. After some amount of time has elapsed since their departure, the two cars are 330 miles apart. Select the speed of Car Y in miles per hour (column 1) and the elapsed time in hours (column 2).

|     | Speed of Y (mph) | Time elapsed (hours) |
|-----|------------------|------------------------|
| 2   |                  |                        |
| 3   |                  |                        |
| 50  |                  |                        |
| 60  |                  |                        |
| 110 |                  |                        |

**answer:** Speed of Y = 60, Time elapsed = 3
**fastest_path:** Y = 1.2 × 50 = 60. Combined separation rate (opposite dirs) = 110 mph. Time = 330/110 = 3.
**explanation:** Car Y's speed = 1.20 × 50 = 60 mph. Because the cars travel in *opposite* directions, their separation rate is the sum: 50 + 60 = 110 mph. Time to reach 330 miles apart = 330 / 110 = 3 hours. Trap: using the *difference* of speeds (10 mph) — that would be the separation rate only if the cars traveled in the *same* direction.
**mistake_a:** 2 — using sum-of-speeds (110) directly as time; unit slip.
**mistake_c:** 50 — Car X's speed, slotted into the Y column.
**mistake_e:** 110 — the combined separation rate (mph), not Y's speed; unit confusion.
**common_trap:** Using difference of speeds (10 mph) for the separation rate — that applies only when cars travel in the *same* direction.
**takeaway:** Opposite-direction separation: rates *add*. Same-direction (chase): rates *subtract*. Read the geometry carefully.
**related_reading:** reading-di-06-two-part-analysis


---

## Q25
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Profit Optimization

A retailer sells umbrellas. Fixed daily costs total $120. Each umbrella costs $4 to acquire. When the retailer charges $p per umbrella, the daily demand is (60 − 3p) umbrellas, valid for 0 ≤ p ≤ 20. Select the price that maximizes daily profit (column 1) and the corresponding maximum daily profit in dollars (column 2).

|     | Optimal price | Maximum daily profit |
|-----|---------------|----------------------|
| 4   |               |                      |
| 8   |               |                      |
| 12  |               |                      |
| 18  |               |                      |
| 72  |               |                      |

**answer:** Optimal price = 12, Maximum daily profit = 72
**fastest_path:** Profit(p) = (p−4)(60−3p) − 120 = −3p² + 72p − 360. Vertex p = 72/(2·3) = 12. Profit(12) = $72.
**explanation:** Profit(p) = (revenue) − (variable cost) − (fixed cost) = p × (60 − 3p) − 4 × (60 − 3p) − 120. Factor the first two terms: (p − 4)(60 − 3p) − 120. Expand: 60p − 3p² − 240 + 12p − 120 = −3p² + 72p − 360. This is a downward parabola in p; vertex at p = 72 / (2 × 3) = 12. Profit(12) = −3(144) + 72(12) − 360 = −432 + 864 − 360 = $72. Verify demand at p = 12: 60 − 36 = 24 umbrellas; profit = 24 × (12 − 4) − 120 = 192 − 120 = $72 ✓.
**mistake_a:** 4 — that's the unit cost, not the optimal price; profit at p=4 is loss (zero margin minus fixed cost).
**mistake_b:** 8 — halfway between cost and a guess; not the parabola vertex.
**mistake_d:** 18 — over-shoots the vertex; demand drops fast (60 − 54 = 6 units).
**mistake_e:** 72 — that's the maximum *profit*, not the price; column confusion.
**common_trap:** Maximizing revenue (p × demand) rather than profit (revenue minus variable cost minus fixed). Revenue-max p = 10, but profit-max p = 12.
**takeaway:** Profit-optimization parabola: factor (p−c)(demand) for variable margin, then vertex of −ap² + bp + k is at p = b/(2a).
**related_reading:** reading-di-06-two-part-analysis


---

## Q26
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Asymmetric Mixture

A chemist combines Solution X (80% water, 20% solute by volume) with Solution Y (50% water, 50% solute) to produce 30 liters of a mixture that is 60% water by volume. Select the volume of Solution X in liters (column 1) and the volume of Solution Y in liters (column 2).

|     | Solution X | Solution Y |
|-----|------------|------------|
| 5   |            |            |
| 10  |            |            |
| 15  |            |            |
| 20  |            |            |
| 25  |            |            |

**answer:** Solution X = 10, Solution Y = 20
**fastest_path:** Lever-arm: target 60% water; X is 80%, Y is 50%. Distances: |60−80|=20, |60−50|=10 → ratio Y:X = 2:1 (more from the closer). Of 30 L: X=10, Y=20.
**explanation:** Let x = liters of Solution X, y = liters of Solution Y. Total volume: x + y = 30. Water balance: 0.80x + 0.50y = 0.60(30) = 18. Substitute y = 30 − x: 0.80x + 0.50(30 − x) = 18 → 0.80x + 15 − 0.50x = 18 → 0.30x = 3 → x = 10, y = 20. Verify: water = 0.80(10) + 0.50(20) = 8 + 10 = 18 ✓. Trap: averaging the concentrations without weighting by volume.
**mistake_a:** 5 — under-shoots the equation; would imply a 56.7% water mixture.
**mistake_c:** 15 — half-and-half split; would yield 65% water, not 60%.
**mistake_e:** 25 — reverses the lever-arm; weights X heavier than warranted.
**common_trap:** Equal volumes (15/15) — but 60% is closer to Y (50%) than to X (80%), so Y must weigh more.
**takeaway:** Mixture lever-arm: target closer to component with concentration C means MORE of that component (since it's the "anchor" pulling the mix toward target).
**related_reading:** reading-di-06-two-part-analysis

---

## Q27
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Probability without Replacement

A box contains 8 marbles: 3 red, 3 blue, and 2 green. Two marbles are drawn at random, without replacement. Select the probability that both marbles drawn are of the same color (column 1) and the probability that the two marbles are of different colors (column 2).

|      | Same color | Different colors |
|------|------------|------------------|
| 1/7  |            |                  |
| 1/4  |            |                  |
| 1/2  |            |                  |
| 3/4  |            |                  |
| 7/8  |            |                  |

**answer:** Same color = 1/4, Different colors = 3/4
**fastest_path:** C(8,2)=28. Same: (3+3+1)/28 = 7/28 = 1/4. Different = 1 − 1/4 = 3/4.
**explanation:** Total ways to draw 2 marbles: C(8, 2) = 28. P(same color) = [C(3,2) + C(3,2) + C(2,2)] / 28 = (3 + 3 + 1) / 28 = 7/28 = 1/4. P(different colors) = 1 − 1/4 = 3/4. Trap: forgetting the green-green pair or assuming "different" is 2/3 based on the number of color categories.
**mistake_a:** 1/7 — possibly a slip on the 8 marbles (using 8 directly in the denominator) or omitting greens.
**mistake_c:** 1/2 — guessing same/different are equally likely without computing.
**mistake_e:** 7/8 — using 7/8 (raw 7 same-color outcomes / 8 marbles) — wrong denominator.
**common_trap:** Forgetting the green-green pair or treating "different colors" as 2/3 based on category count.
**takeaway:** "Same color" with multiple groups: sum C(group_i, 2) over all groups. Different = complement.
**related_reading:** reading-di-06-two-part-analysis

---

## Q28
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Speed and Ratio

A runner completes a 10-kilometer race in 50 minutes. A cyclist completes the same course in 20 minutes. Select the runner's average speed in km/h (column 1) and the ratio of the cyclist's speed to the runner's speed (column 2).

|       | Runner speed (km/h) | Cyclist-to-runner ratio |
|-------|---------------------|------------------------|
| 8     |                     |                        |
| 10    |                     |                        |
| 12    |                     |                        |
| 15    |                     |                        |
| 2.0   |                     |                        |
| 2.5   |                     |                        |
| 3.0   |                     |                        |

**answer:** Runner speed = 12, Cyclist-to-runner ratio = 2.5
**fastest_path:** Runner: 10 ÷ (50/60) = 12 km/h. Cyclist: 10 ÷ (20/60) = 30 km/h. Ratio = 30/12 = 2.5.
**explanation:** Convert times to hours: runner takes 50/60 = 5/6 hr, so speed = 10 ÷ (5/6) = 12 km/h. Cyclist takes 20/60 = 1/3 hr, so speed = 10 ÷ (1/3) = 30 km/h. Ratio = 30/12 = 5/2 = 2.5. The runner's speed is the column-1 answer; the ratio is column-2.
**mistake_a:** 8 km/h — using 10/50 directly (km per minute, not per hour); forgetting to multiply by 60.
**mistake_b:** 10 km/h — the race distance, not a speed.
**mistake_d:** 15 km/h — arithmetic slip, likely from 10/(40/60) with the wrong time.
**mistake_e:** 2.0 — ratio computed as 30/15 (wrong runner speed denominator).
**mistake_g:** 3.0 — ratio of times (50/20 ≈ 2.5 inverted, or mis-simplified).
**common_trap:** Forgetting to convert minutes to hours before dividing distance by time.
**takeaway:** Speed = distance ÷ time. When time is in minutes, convert to hours first (divide by 60). Ratio of speeds = faster ÷ slower.
**related_reading:** reading-di-06-two-part-analysis

---

## Q29
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Percent vs. Flat Discount

A store lists a camera at $600. Customer A receives a 15% discount off the list price. Customer B receives a flat $75 off the list price. Select the amount Customer A pays (column 1) and the amount by which Customer A's payment is less than Customer B's payment (column 2).

|        | Customer A pays | A pays less than B by |
|--------|-----------------|----------------------|
| $490   |                 |                      |
| $500   |                 |                      |
| $510   |                 |                      |
| $520   |                 |                      |
| $5     |                 |                      |
| $10    |                 |                      |
| $15    |                 |                      |
| $20    |                 |                      |

**answer:** Customer A pays = $510, A pays less than B by = $15
**fastest_path:** A pays 0.85 × 600 = 510. B pays 600 − 75 = 525. Difference = 525 − 510 = 15.
**explanation:** Customer A: 15% off → 85% of $600 = $510. Customer B: flat $75 off → $600 − $75 = $525. Column 2 asks how much less A pays: $525 − $510 = $15. Note that A's percent discount ($90 off) is better than B's flat discount ($75 off), so A pays less.
**mistake_a:** $490 — 20% discount applied instead of 15%.
**mistake_b:** $500 — rough estimate; $100 off (incorrectly interpreted 15% as something else).
**mistake_d:** $520 — 80% applied (80% of 600 = 480) or arithmetic slip.
**mistake_e:** $5 — difference of the discount amounts themselves ($90 − $75 = $15, not $5).
**mistake_f:** $10 — arithmetic slip in the subtraction of the two final prices.
**common_trap:** Computing the difference between the discount amounts ($90 − $75 = $15 is actually correct here, but students sometimes try to compare discounts directly and get a different number).
**takeaway:** Always compute final prices before comparing — percent and flat discounts apply to the same base, so convert both to dollar amounts first.
**related_reading:** reading-di-06-two-part-analysis

---

## Q30
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Work Rate and Time

A painter can paint a room in 5 hours working at a constant rate. The painter starts at 9:00 AM. Select the fraction of the room completed by 11:30 AM (column 1) and the time at which the painter finishes (column 2).

|          | Fraction done by 11:30 AM | Finish time |
|----------|---------------------------|-------------|
| 1/4      |                           |             |
| 2/5      |                           |             |
| 1/2      |                           |             |
| 3/5      |                           |             |
| 1:00 PM  |                           |             |
| 1:30 PM  |                           |             |
| 2:00 PM  |                           |             |
| 2:30 PM  |                           |             |

**answer:** Fraction done by 11:30 AM = 1/2, Finish time = 2:00 PM
**fastest_path:** 9:00 AM to 11:30 AM = 2.5 hours. Fraction = 2.5/5 = 1/2. Finish = 9:00 AM + 5 hr = 2:00 PM.
**explanation:** From 9:00 AM to 11:30 AM is exactly 2.5 hours. At a constant rate of 1 room per 5 hours, fraction done = 2.5/5 = 1/2. The painter finishes 5 hours after starting: 9:00 AM + 5 hours = 2:00 PM. Both values sit in different row groups, so select 1/2 in column 1 and 2:00 PM in column 2.
**mistake_a:** 1/4 — using 1.25 hours elapsed (quarter of 5 hours) as the time; confuses fraction of day with fraction of task.
**mistake_b:** 2/5 — divides 2 full hours by 5 instead of 2.5 hours.
**mistake_d:** 3/5 — uses 3 hours instead of 2.5 (rounds up to the next full hour).
**mistake_e:** 1:00 PM — adds 4 hours to 9:00 AM; does not complete the room.
**mistake_f:** 1:30 PM — adds 4.5 hours; close but wrong.
**common_trap:** Rounding 2.5 hours to 2 or 3 whole hours. Use the exact fractional time.
**takeaway:** Work rate = 1/time. Fraction done = time_elapsed / total_time. Finish = start + total_time.
**related_reading:** reading-di-06-two-part-analysis

---

## Q31
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Proportional Division

Three partners split a $42,000 bonus in the ratio 3 : 4 : 7. Select the amount the largest-share partner receives (column 1) and the amount the smallest-share partner receives (column 2).

|          | Largest share | Smallest share |
|----------|---------------|----------------|
| $12,000  |               |                |
| $15,000  |               |                |
| $18,000  |               |                |
| $21,000  |               |                |
| $6,000   |               |                |
| $9,000   |               |                |
| $12,000  |               |                |
| $14,000  |               |                |

**answer:** Largest share = $21,000, Smallest share = $9,000
**fastest_path:** Total parts = 3+4+7 = 14. Per part = 42,000/14 = 3,000. Largest = 7×3,000 = 21,000. Smallest = 3×3,000 = 9,000.
**explanation:** The ratio 3:4:7 has 3+4+7 = 14 total parts. Each part equals $42,000 ÷ 14 = $3,000. The largest partner (7 parts) gets 7 × $3,000 = $21,000. The smallest partner (3 parts) gets 3 × $3,000 = $9,000. Middle partner (4 parts) gets $12,000. Verify: $21,000 + $12,000 + $9,000 = $42,000 ✓.
**mistake_a:** $12,000 for largest — computed the middle partner's share.
**mistake_c:** $18,000 — arithmetic slip, or used 6 parts instead of 7.
**mistake_d:** $14,000 for smallest — divided by 3 without using the per-part value.
**mistake_f:** $6,000 — halved the per-part value (3,000/2 error or used 2 parts).
**common_trap:** Mis-counting total parts (forgetting to add all three ratio terms) or assigning the wrong ratio number to "largest."
**takeaway:** Sum all ratio parts. Per-part value = total ÷ sum. Then multiply by each partner's ratio number.
**related_reading:** reading-di-06-two-part-analysis

---

## Q32
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Unit Cost

A baker mixes 3 cups of white flour (priced at $2 per cup) with 1 cup of almond flour (priced at $6 per cup) to produce a 4-cup blend. Select the blended cost per cup (column 1) and the total cost of the 4-cup blend (column 2).

|        | Blended cost per cup | Total cost |
|--------|----------------------|------------|
| $2.50  |                      |            |
| $3.00  |                      |            |
| $3.50  |                      |            |
| $4.00  |                      |            |
| $9     |                      |            |
| $10    |                      |            |
| $12    |                      |            |
| $14    |                      |            |

**answer:** Blended cost per cup = $3.00, Total cost = $12
**fastest_path:** Total cost = 3×2 + 1×6 = 6+6 = 12. Per cup = 12/4 = 3.
**explanation:** Total cost = 3 cups × $2 + 1 cup × $6 = $6 + $6 = $12. Blended per cup = $12 ÷ 4 cups = $3.00. The even split ($6 from each flour type) is a useful sanity check.
**mistake_a:** $2.50 — averaged the two prices arithmetically (2+6)/4 instead of weighting by volume.
**mistake_c:** $3.50 — used wrong weights (e.g., 1 cup white, 3 cups almond — reversed the volumes).
**mistake_d:** $4.00 — simple average of $2 and $6 = $4, ignoring unequal volumes.
**mistake_e:** $9 — computed 3×3 (wrong per-cup price applied to 3 cups).
**mistake_f:** $10 — arithmetic slip on the total.
**common_trap:** Averaging the two per-cup prices directly ($2+$6)/2 = $4 — this ignores the 3:1 volume ratio.
**takeaway:** Weighted average cost = total dollars / total units. Never average per-unit prices unless quantities are equal.
**related_reading:** reading-di-06-two-part-analysis

---

## Q33
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Age Problem

Today, Maria is exactly 3 times as old as her son. In 12 years, Maria will be exactly twice as old as her son will be. Select Maria's current age (column 1) and her son's current age (column 2).

|     | Maria's current age | Son's current age |
|-----|---------------------|-------------------|
| 24  |                     |                   |
| 30  |                     |                   |
| 33  |                     |                   |
| 36  |                     |                   |
| 42  |                     |                   |
| 8   |                     |                   |
| 10  |                     |                   |
| 11  |                     |                   |
| 12  |                     |                   |
| 14  |                     |                   |

**answer:** Maria's current age = 36, Son's current age = 12
**fastest_path:** Let s = son's age. 3s + 12 = 2(s + 12) → s = 12. Maria = 36.
**explanation:** Let s = son's current age. Then Maria's current age = 3s. In 12 years: Maria is 3s+12 and son is s+12. The condition gives 3s+12 = 2(s+12) → 3s+12 = 2s+24 → s = 12. Maria = 36. Verify: 36 = 3×12 ✓; in 12 years: 48 = 2×24 ✓.
**mistake_a:** Maria = 24 — solved 3s = 2(s+12) (wrong future equation, forgot to age Maria by 12).
**mistake_b:** Maria = 30 — arithmetic slip; would make son = 10, and in 12 years: 42 ≠ 2×22.
**mistake_c:** Maria = 33 — son = 11; in 12 years: 45 ≠ 2×23.
**mistake_e:** Maria = 42 — son = 14; in 12 years: 54 ≠ 2×26.
**common_trap:** Setting up the future equation without aging both people: writing 3s = 2(s+12) instead of (3s+12) = 2(s+12).
**takeaway:** Age problems: assign one variable for the anchor age. Add the same time gap to both sides for future equations.
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted vs. Simple Average

A student earned a score of 75 in a 4-credit course and a score of 87 in a 2-credit course. Select the credit-weighted average score (column 1) and the simple (unweighted) average of the two scores (column 2).

|     | Credit-weighted average | Simple average |
|-----|------------------------|----------------|
| 76  |                        |                |
| 77  |                        |                |
| 79  |                        |                |
| 80  |                        |                |
| 81  |                        |                |
| 83  |                        |                |
| 84  |                        |                |

**answer:** Credit-weighted average = 79, Simple average = 81
**fastest_path:** Weighted = (75×4 + 87×2)/6 = 474/6 = 79. Simple = (75+87)/2 = 81.
**explanation:** Credit-weighted average = (75×4 + 87×2) / (4+2) = (300+174)/6 = 474/6 = 79. Simple average = (75+87)/2 = 162/2 = 81. The weighted average is pulled toward 75 (the lower score) because the 4-credit course carries more weight. The simple average splits them equally and lands higher at 81.
**mistake_a:** 76 — used weights 4 and 2 but divided by 8 instead of 6.
**mistake_b:** 77 — arithmetic slip in the numerator.
**mistake_d:** 80 — rounded 79 up, or used equal weights for the weighted average.
**mistake_e:** 81 — selected the simple average for column 1 (both values are present; check column label).
**mistake_g:** 84 — added 75+87 = 162 and divided by 2, then confused which column this belongs to (simple average is correct, but placed in column 1).
**common_trap:** Placing the simple average in column 1 and the weighted average in column 2 — always re-read the column labels.
**takeaway:** Weighted average: sum(score × weight) / sum(weights). A heavier-weighted lower score pulls the average down relative to the simple mean.
**related_reading:** reading-di-06-two-part-analysis

---

## Q35
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Causal Argument Structure

A product manager states: "Our competitor raised prices on its flagship product last quarter and saw a 12% drop in sales. Therefore, raising prices causes sales to fall."

From the statements below, identify the central unstated assumption required for this argument (column 1) and the most significant logical flaw in the argument (column 2).

| Statement                                                                                           | Assumption | Flaw |
|-----------------------------------------------------------------------------------------------------|------------|------|
| The competitor's customers were unable to afford the higher price                                   |            |      |
| No other factor — such as a product defect, a new rival, or seasonal demand — contributed to the drop |            |      |
| The argument draws a universal causal rule from a single observation                                |            |      |
| Price and sales always move in opposite directions in every market                                  |            |      |
| The competitor's product quality was unchanged during that quarter                                  |            |      |

**answer:** Assumption = "No other factor — such as a product defect, a new rival, or seasonal demand — contributed to the drop"; Flaw = "The argument draws a universal causal rule from a single observation"
**fastest_path:** Assumption = the unstated link the causal claim rests on (no confounders). Flaw = overgeneralizing one data point into a universal rule.
**explanation:** The conclusion ("raising prices causes sales to fall") requires the unstated assumption that the price hike — not a coincidental product defect, new competitor entry, or seasonal drop — caused the decline. Without that assumption the causal claim evaporates. The most significant flaw is the overgeneralization: the argument uses one competitor's one-quarter result to declare a universal causal law. Row 1 supplies a mechanism but isn't the core assumption (the argument doesn't require customers to be unable to afford it — they just need to have been deterred by the price). Row 4 is actually an overstatement of the conclusion, not the assumption. Row 5 is a background premise, not an assumption.
**mistake_a:** Mechanism (customers couldn't afford it) is one possible mediator, not the foundational causal assumption.
**mistake_d:** "Always in every market" is a stronger claim than the argument makes; the argument only asserts a universal rule, it doesn't rest on one.
**mistake_e:** Product quality consistency is a premise-like background condition, not the core causal link.
**common_trap:** Confusing mechanism (how price affects buyers) with assumption (what the causal inference requires to be true about confounders).
**takeaway:** Causal assumptions are about ruling out confounders. Logical flaws about evidence scope ask whether the sample supports the breadth of the conclusion.
**related_reading:** reading-di-06-two-part-analysis

---

## Q36
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry, Perimeter and Area

A rectangle has a perimeter of 56 cm. Its length is 8 cm greater than its width. Select the length of the rectangle in cm (column 1) and the area of the rectangle in cm² (column 2).

|       | Length (cm) | Area (cm²) |
|-------|-------------|------------|
| 14    |             |            |
| 16    |             |            |
| 18    |             |            |
| 20    |             |            |
| 22    |             |            |
| 140   |             |            |
| 160   |             |            |
| 180   |             |            |
| 200   |             |            |
| 220   |             |            |

**answer:** Length = 18, Area = 180
**fastest_path:** l+w = 28 (half perimeter). l = w+8 → 2w = 20 → w=10, l=18. Area = 10×18 = 180.
**explanation:** Perimeter = 2(l+w) = 56, so l+w = 28. Given l = w+8: substituting, (w+8)+w = 28 → 2w = 20 → w = 10, l = 18. Area = length × width = 18×10 = 180 cm². Verify perimeter: 2(18+10) = 56 ✓.
**mistake_a:** 14 — used only half the excess (set l = w+4 instead of w+8).
**mistake_b:** 16 — set l+w = 32 (mis-read perimeter or used 56/2 incorrectly).
**mistake_d:** 20 — solved l = 56/2 − 8 = 20 (subtracted instead of solving the system).
**mistake_e:** 22 — arithmetic slip; would give w = 6, area = 132.
**mistake_f:** 140 — used l = 14 (wrong length); 14×10 = 140.
**common_trap:** Halving the perimeter (56/2 = 28) but then treating 28 as a single side rather than the sum of length and width.
**takeaway:** Perimeter formula: P = 2(l+w). Half the perimeter equals l+w, not l or w alone.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Reverse Percent Growth

A city's population grew by 10% during 2021. Then, during 2022, exactly 2,200 additional people moved into the city. At the end of 2022, the population was 90,200. Select the city's population at the end of 2021 (column 1) and the city's population at the start of 2021 (column 2).

|          | End of 2021 | Start of 2021 |
|----------|-------------|---------------|
| 82,000   |             |               |
| 84,000   |             |               |
| 86,000   |             |               |
| 88,000   |             |               |
| 90,000   |             |               |
| 75,000   |             |               |
| 78,000   |             |               |
| 80,000   |             |               |
| 82,000   |             |               |
| 85,000   |             |               |

**answer:** End of 2021 = 88,000, Start of 2021 = 80,000
**fastest_path:** End 2021 = 90,200 − 2,200 = 88,000. Start 2021 = 88,000 ÷ 1.10 = 80,000.
**explanation:** Working backward: End of 2022 = End of 2021 + 2,200 → End of 2021 = 90,200 − 2,200 = 88,000. The 10% growth occurred during 2021: Start of 2021 × 1.10 = 88,000 → Start = 88,000/1.10 = 80,000.
**mistake_a:** 82,000 for end 2021 — subtracted 8,200 (10% of 82,000) instead of 2,200.
**mistake_b:** 84,000 — arithmetic slip.
**mistake_c:** 86,000 — subtracted 4,200 or similar incorrect value.
**mistake_e:** 90,000 — forgot the flat-migration step; used just the 10% growth from 90,200.
**mistake_f:** 75,000 — divided end-of-2022 by 1.10 instead of the correct end-of-2021 value.
**mistake_g:** 78,000 — arithmetic slip on the reverse-percent step.
**common_trap:** Dividing the end-of-2022 population by 1.10 to reverse the growth — but the flat migration must be removed first.
**takeaway:** Reverse two-step growth: undo the most recent change first (subtract the flat addition), then undo the percentage (divide by 1+r).
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Evaluate

A wellness consultant argues: "At our client companies, employees who use the company gym three or more times per week call in sick 30% less often than employees who never use it. Companies should therefore build employee gyms to reduce sick-day costs by 30%."

From the statements below, select the one that most strengthens the argument (column 1) and the one whose answer would most help evaluate whether the argument is sound (column 2).

| Statement                                                                                                               | Strengthens | Evaluate |
|-------------------------------------------------------------------------------------------------------------------------|-------------|----------|
| A peer-reviewed study found that regular exercise reduces illness frequency by 25–35% in office workers                 |             |          |
| Whether health-conscious employees would have had fewer sick days even without access to a company gym                  |             |          |
| The company gym reduced self-reported stress levels in 80% of employees who used it                                     |             |          |
| Another company built a gym and achieved a 28% reduction in total sick days across its entire workforce                 |             |          |
| Whether the cost of building and operating a gym exceeds the savings from reduced sick days                             |             |          |

**answer:** Strengthens = "Another company built a gym and achieved a 28% reduction in total sick days across its entire workforce"; Evaluate = "Whether health-conscious employees would have had fewer sick days even without access to a company gym"
**fastest_path:** Strengthen = parallel real-world intervention result (Row 4). Evaluate = the self-selection confound question (Row 2).
**explanation:** Row 4 strengthens by providing a real-world intervention at a separate company that produced a nearly identical 28% workforce-wide reduction — directly paralleling the argument's conclusion. Row 2 is the key evaluation question: if already-health-conscious employees gravitate toward the gym AND independently have fewer sick days, the gym itself may not cause the reduction. This self-selection confound is the central threat to the causal argument. Row 1 (study) supports the mechanism but does not show an organizational intervention. Row 3 (stress reduction) plausible mechanism, not causal evidence. Row 5 evaluates cost-effectiveness, not the causal validity of the argument.
**mistake_a:** External study supports the mechanism but isn't as strong as a direct parallel intervention result.
**mistake_c:** Stress reduction is a mediating mechanism, not causal evidence of sick-day reduction.
**mistake_e:** Cost vs. savings evaluates ROI, not whether the argument's causal claim is valid.
**common_trap:** Choosing the external study (Row 1) as the strongest strengthener — a direct intervention parallel (Row 4) is a stronger causal argument than a correlational study.
**takeaway:** Strengthen: prefer real-world interventions that mirror the recommendation. Evaluate: look for the main confound threat to the causal argument.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Tiered Pricing Comparison

A software subscription offers two plans for a 12-month term. Plan A charges $40 per month for the first 3 months, then $30 per month for the remaining 9 months. Plan B is a flat annual fee of $360. Select the total cost under Plan A over 12 months (column 1) and the amount by which Plan A exceeds Plan B in total cost (column 2).

|        | Plan A total (12 months) | Plan A exceeds Plan B by |
|--------|--------------------------|--------------------------|
| $350   |                          |                          |
| $360   |                          |                          |
| $380   |                          |                          |
| $390   |                          |                          |
| $420   |                          |                          |
| $10    |                          |                          |
| $20    |                          |                          |
| $30    |                          |                          |
| $40    |                          |                          |
| $50    |                          |                          |

**answer:** Plan A total = $390, Plan A exceeds Plan B by = $30
**fastest_path:** Plan A: 3×40 + 9×30 = 120+270 = 390. Difference = 390−360 = 30.
**explanation:** Plan A total = 3 months × $40 + 9 months × $30 = $120 + $270 = $390. Plan B = $360. Plan A exceeds Plan B by $390 − $360 = $30. Despite Plan A's introductory rate feeling like a premium tier, the lower subsequent rate keeps the total only $30 above the flat annual fee.
**mistake_a:** $350 — computed 12 months × $30 minus an adjustment; ignored the first 3 months at $40.
**mistake_c:** $380 — used 2 months at $40 and 10 months at $30 (mis-counted the tiered split).
**mistake_e:** $420 — used 12 months × $35 (averaged the two rates linearly instead of weighting).
**mistake_f:** $10 — compared $390 to $380 (an intermediate wrong Plan A total).
**mistake_h:** $40 — miscounted Plan A months at $40 tier (4 months instead of 3).
**common_trap:** Averaging the two Plan A rates ($40+$30)/2 = $35 and multiplying by 12 to get $420 instead of correctly splitting the 3- and 9-month periods.
**takeaway:** Tiered pricing: multiply each tier's rate by its own duration, then sum. Never average rates across unequal durations.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Profit Optimization via Demand Function

A software company sells app licenses. When the selling price is $p per license, weekly demand is (200 − 4p) licenses, valid for 0 ≤ p ≤ 50. Each license costs $10 to produce, and weekly fixed overhead is $300. Select the price that maximizes weekly profit (column 1) and the corresponding maximum weekly profit in dollars (column 2).

|          | Optimal price | Maximum weekly profit |
|----------|---------------|-----------------------|
| $20      |               |                       |
| $25      |               |                       |
| $30      |               |                       |
| $35      |               |                       |
| $40      |               |                       |
| $700     |               |                       |
| $900     |               |                       |
| $1,100   |               |                       |
| $1,300   |               |                       |
| $1,500   |               |                       |

**answer:** Optimal price = $30, Maximum weekly profit = $1,300
**fastest_path:** Profit = (p−10)(200−4p) − 300 = −4p²+240p−2300. Vertex: p = 240/8 = 30. Profit(30) = 80×20−300 = 1300.
**explanation:** Weekly profit = (price − unit cost) × demand − fixed cost = (p−10)(200−4p) − 300. Expanding: −4p² + 240p − 2300. This is a downward-opening parabola in p. The vertex (maximum) is at p = 240/(2×4) = 30. At p = 30: demand = 200 − 4(30) = 80 licenses; contribution margin = 80 × (30−10) = $1,600; profit = 1,600 − 300 = $1,300. Adjacent check: profit at p=25 is 15×100−300=$1,200; at p=35 is 25×60−300=$1,200 — symmetric and lower, confirming vertex.
**mistake_a:** $20 — maximizing revenue (p×demand) instead of profit. Revenue vertex is at p=25; cost structure shifts optimum right to 30.
**mistake_b:** $25 — revenue-maximizing price; ignores that the unit cost of $10 moves the profit vertex higher.
**mistake_d:** $35 — over-adjustment past the vertex.
**mistake_f:** $700 — computed demand (80) × some factor; unit confusion.
**mistake_g:** $900 — profit at p=25 or p=35 ($1,200); close but not maximum.
**common_trap:** Maximizing p×demand (revenue) rather than (p−cost)×demand − fixed (profit). Revenue-max price = 25; profit-max price = 30.
**takeaway:** Profit optimization: factor out (p−unit_cost) × demand, expand into −ap²+bp+c form, then vertex = b/(2a). Always subtract fixed costs last — they shift profit level but not the optimal price.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Causal Flaw and Controlled Evidence

A marketing team reports: "After we redesigned our website, bounce rates dropped 35% and new-user registrations rose 22%. The redesign directly caused more users to register."

From the statements below, select the one that identifies the most significant flaw in the argument (column 1) and the one that would most directly support the conclusion (column 2).

| Statement                                                                                                                        | Flaw | Supports |
|----------------------------------------------------------------------------------------------------------------------------------|------|----------|
| The team launched a new paid-advertising campaign the same week as the redesign went live                                         |      |          |
| In a controlled test, regions that received only the redesigned site (with no other marketing changes) saw a 20% registration lift |      |          |
| A reduction in bounce rate does not automatically mean the visitors who stayed then went on to register                           |      |          |
| Some users may have registered because of word-of-mouth referrals unrelated to the site design                                    |      |          |
| The redesign used a UX framework demonstrated to increase engagement at four other companies                                      |      |          |

**answer:** Flaw = "The team launched a new paid-advertising campaign the same week as the redesign went live"; Supports = "In a controlled test, regions that received only the redesigned site (with no other marketing changes) saw a 20% registration lift"
**fastest_path:** Flaw = concurrent confounding intervention (ads explain the lift without the redesign). Support = controlled experiment isolating the redesign's causal effect.
**explanation:** The most significant flaw is the concurrent ad campaign (Row 1): if a paid campaign launched the same week, it provides a full alternative explanation for both the bounce-rate drop (more targeted visitors from ads) and the registration increase. The argument cannot attribute the effect solely to the redesign. The strongest support is Row 2: a controlled test that held all else constant and still found a 20% lift — this directly isolates the redesign as a causal factor. Row 3 is a secondary logical gap (the bounce→registration link is assumed), but it doesn't offer an alternative cause for the overall result. Row 4 supplies only a partial alternative (word-of-mouth), weaker than a full-scale ad campaign. Row 5 is analogical plausibility, not causal evidence for this specific deployment.
**mistake_c:** Row 3 identifies a logical gap (assumes bounce reduction causes registration) but doesn't fully undermine the conclusion — users could register via other site elements.
**mistake_d:** Word-of-mouth (Row 4) is a weaker alternative cause than the ad campaign; it doesn't explain the 35% bounce-rate change.
**mistake_e:** Analogical evidence (Row 5) supports plausibility but falls short of controlled causal evidence.
**common_trap:** Choosing the "bounce rate doesn't imply registration" option as the primary flaw. It weakens the mechanistic story but does not offer an alternative cause for the observed registration increase.
**takeaway:** The strongest causal flaw is always a competing intervention that can explain the same outcome. The strongest support is a controlled experiment that holds everything else constant.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio Allocation with Minimums

A fund manager divides $240,000 across a growth portfolio and an income portfolio in a 5 : 3 ratio. The growth portfolio has a contractual minimum of $80,000, and the income portfolio has a contractual minimum of $50,000. Select the amount allocated to the growth portfolio (column 1) and the combined total by which both portfolios exceed their respective minimum requirements (column 2).

|           | Growth portfolio allocation | Combined excess over minimums |
|-----------|-----------------------------|-----------------------------|
| $120,000  |                             |                             |
| $135,000  |                             |                             |
| $150,000  |                             |                             |
| $160,000  |                             |                             |
| $175,000  |                             |                             |
| $80,000   |                             |                             |
| $95,000   |                             |                             |
| $110,000  |                             |                             |
| $125,000  |                             |                             |
| $140,000  |                             |                             |

**answer:** Growth portfolio allocation = $150,000, Combined excess over minimums = $110,000
**fastest_path:** 5+3=8 parts. $240k/8=$30k per part. Growth=5×30k=$150k. Income=3×30k=$90k. Excess: (150k−80k)+(90k−50k)=70k+40k=$110k.
**explanation:** Total ratio parts = 5+3 = 8. Per part = $240,000 ÷ 8 = $30,000. Growth = 5 × $30,000 = $150,000. Income = 3 × $30,000 = $90,000. Both exceed their minimums: Growth exceeds $80,000 by $70,000; Income exceeds $50,000 by $40,000. Combined excess = $70,000 + $40,000 = $110,000. Both minimums are satisfied ($150,000 ≥ $80,000 ✓; $90,000 ≥ $50,000 ✓).
**mistake_a:** $120,000 — used 4 parts for growth instead of 5.
**mistake_b:** $135,000 — arithmetic slip on per-part value (divided by 9 or 10 instead of 8).
**mistake_d:** $160,000 — used 5.33 parts or misidentified the ratio.
**mistake_f:** $80,000 — bubbled the minimum requirement instead of the allocation.
**mistake_g:** $95,000 — computed combined excess correctly but used the wrong growth allocation in the first step.
**common_trap:** Adding the two minimums ($80k + $50k = $130k) and subtracting from $240k to get the combined excess — that gives $110k coincidentally for this problem but would be wrong in general. The correct method is compute each portfolio's allocation, then compute each excess independently.
**takeaway:** Ratio allocation: divide total by sum of parts, then scale each. Column 2 requires two separate excess computations — one per portfolio — before summing.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Two-Fund Investment System

An investor allocates a total of $30,000 between Bond A (6% annual simple interest) and Bond B (9% annual simple interest). After exactly 2 years, the total interest earned from both bonds is $4,200. Select the amount invested in Bond A (column 1) and the total interest earned from Bond B alone over the 2 years (column 2).

|           | Invested in Bond A | Bond B interest (2 years) |
|-----------|--------------------|-----------------------------|
| $10,000   |                    |                             |
| $15,000   |                    |                             |
| $20,000   |                    |                             |
| $22,000   |                    |                             |
| $25,000   |                    |                             |
| $900      |                    |                             |
| $1,080    |                    |                             |
| $1,350    |                    |                             |
| $1,800    |                    |                             |
| $2,160    |                    |                             |

**answer:** Invested in Bond A = $20,000, Bond B interest (2 years) = $1,800
**fastest_path:** P + Q = 30k, 0.12P + 0.18Q = 4,200. Sub Q=30k−P: 0.12P+5,400−0.18P=4,200 → P=20k. Bond B interest = 2×0.09×10k = $1,800.
**explanation:** Let P = amount in Bond A, Q = amount in Bond B. System: P + Q = 30,000 and 2(0.06P) + 2(0.09Q) = 4,200, simplifying to 0.12P + 0.18Q = 4,200. Substitute Q = 30,000 − P: 0.12P + 0.18(30,000−P) = 4,200 → 0.12P + 5,400 − 0.18P = 4,200 → −0.06P = −1,200 → P = $20,000. Therefore Q = $10,000. Bond B 2-year interest = 2 × 0.09 × $10,000 = $1,800.
**mistake_a:** $10,000 for Bond A — this is Bond B's allocation, not Bond A's.
**mistake_b:** $15,000 — assumed equal split; total interest would be 0.12(15k)+0.18(15k) = 1,800+2,700 = $4,500 ≠ $4,200.
**mistake_d:** $22,000 — arithmetic slip in the elimination step.
**mistake_c:** $1,080 — computed Bond B interest on the wrong amount ($10k at 9% for 1 year = $900, for 2 years $1,800; $1,080 would be 6% on $9,000 for 2 years — wrong rate applied).
**mistake_e:** $2,160 — computed Bond B interest on $20,000 (the Bond A amount); column says Bond B, Q = $10,000.
**common_trap:** Using Bond A's allocation ($20,000) to compute Bond B's interest — always back-substitute to find Q = $10,000 before computing Bond B's return.
**takeaway:** Two-fund problems: eliminate one variable using the total-allocation equation, solve for both allocations, then compute the secondary quantity asked (interest, return, etc.) from the correct fund's allocation.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Multi-Constraint Production Optimization

A bakery produces muffins and croissants daily. Each muffin requires 2 oz of butter and 3 oz of flour. Each croissant requires 4 oz of butter and 2 oz of flour. The bakery has 120 oz of butter and 150 oz of flour available each day and can produce a combined maximum of 50 items. Muffins sell for $2.50 each and croissants for $4.00 each. Select the number of croissants in the production plan that maximizes daily revenue (column 1) and the corresponding maximum daily revenue (column 2).

|       | Croissants produced | Maximum daily revenue |
|-------|---------------------|-----------------------|
| 0     |                     |                       |
| 5     |                     |                       |
| 10    |                     |                       |
| 15    |                     |                       |
| 20    |                     |                       |
| $100  |                     |                       |
| $120  |                     |                       |
| $130  |                     |                       |
| $140  |                     |                       |
| $160  |                     |                       |

**answer:** Croissants produced = 10, Maximum daily revenue = $140
**fastest_path:** Revenue is higher per croissant ($4 vs $2.50), so push croissants. Binding constraints: butter (2m+4c≤120) and total (m+c≤50). Their intersection: m+2c=60 and m+c=50 → c=10, m=40. Revenue = 2.5(40)+4(10) = 100+40 = $140.
**explanation:** Let m = muffins, c = croissants. Constraints: (1) butter: 2m+4c ≤ 120, i.e., m+2c ≤ 60; (2) flour: 3m+2c ≤ 150; (3) total: m+c ≤ 50; (4) m, c ≥ 0. Revenue R = 2.5m + 4c. Because croissants generate more revenue per unit, push c as high as constraints allow. Evaluate the corner points of the feasible region: (50, 0): butter check 50+0=50≤60 ✓, flour 150+0=150≤150 ✓, total 50 ✓. R = $125. (40, 10): butter 40+20=60 ✓ (binding), flour 120+20=140≤150 ✓, total 50 ✓ (binding). R = 100+40 = $140. (0, 30): butter 0+60=60 ✓ (binding), flour 0+60=60≤150 ✓, total 30≤50 ✓. R = $120. The maximum is $140 at (m=40, c=10), where the butter and total constraints are simultaneously binding.
**mistake_a:** 0 croissants (50 muffins) — maximizes the lower-revenue item; R = $125.
**mistake_b:** 5 croissants — partial push toward croissants but not at the optimal corner; m=45, R = 2.5(45)+4(5) = 112.5+20 = $132.50.
**mistake_d:** 15 croissants — violates the butter constraint: m+2(15)=m+30≤60 means m≤30; total m+c≤50 forces m≤35. At c=15, m=35: butter 35+30=65 > 60 ✗. Infeasible.
**mistake_e:** 20 croissants — clearly infeasible: m+40≤60 → m≤20 and m+20≤50 → m≤30; take m=20. Butter: 20+40=60 ✓, flour: 60+40=100≤150 ✓, total: 40≤50 ✓. R = 50+80 = $130. Feasible but lower than $140 — pushing croissants beyond the binding-corner optimum costs revenue because muffins have to fall disproportionately.
**mistake_i:** $160 — assumes 40 croissants (4×40=$160) without checking any constraint; violates butter 4(40)=160>120.
**common_trap:** Maximizing only the high-revenue item (croissants) without checking where all constraints become binding. Pushing croissants past 10 forces a steeper muffin reduction, lowering total revenue.
**takeaway:** Multi-constraint optimization: evaluate the objective function at every corner of the feasible region. The optimal corner is where the most constraints are simultaneously binding — not simply where the highest-revenue item is maximized.
**related_reading:** reading-di-06-two-part-analysis
