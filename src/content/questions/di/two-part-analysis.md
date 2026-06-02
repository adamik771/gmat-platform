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
**topic:** Quantitative — Percentage Change

A retailer purchases a laptop at a wholesale cost of $800. The retailer applies a 25% markup to set the "list price," then offers a 10% loyalty discount off the list price to returning customers. Determine the list price (column 1) and the loyalty price paid by a returning customer (column 2).

|        | List Price | Loyalty Price |
|--------|------------|---------------|
| $720   |            |               |
| $880   |            |               |
| $900   |            |               |
| $1,000 |            |               |
| $1,080 |            |               |

**answer:** List Price = $1,000, Loyalty Price = $900
**fastest_path:** List = 800 × 1.25 = 1,000. Loyalty = 1,000 × 0.90 = 900.
**explanation:** List price = $800 × 1.25 = $1,000. The 25% markup applies to the wholesale cost. Loyalty price = $1,000 × (1 − 0.10) = $900. The 10% discount applies to the list price, not the original $800. Applying the discount to the wrong base produces every wrong row.
**mistake_a:** $720 — discounting the original cost directly ($800 × 0.90 = 720) and skipping the markup entirely.
**mistake_b:** $880 — applying a 10% markup instead of a 25% markup: $800 × 1.10 = 880.
**mistake_c:** $900 — correct for the loyalty price; selecting this for column 1 swaps the two answers.
**mistake_e:** $1,080 — adding 10% back to $1,000 instead of subtracting it (misreading "discount" as an additional charge).
**common_trap:** Applying the 10% discount to the original $800 rather than to the $1,000 list price. Each percentage change applies to the base at that step, not to the starting value.
**takeaway:** Sequential percent changes always use the updated base. Identify the base for each step before computing.
**related_reading:** reading-di-06-two-part-analysis

---

## Q29
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Arithmetic Sequence

The first three terms of an arithmetic sequence are 7, 13, and 19. Let F be the 10th term of the sequence and let S be the sum of the first five terms.

Select the value of F (column 1) and the value of S (column 2).

|     | 10th term (F) | Sum of first 5 (S) |
|-----|---------------|--------------------|
| 55  |               |                    |
| 61  |               |                    |
| 65  |               |                    |
| 85  |               |                    |
| 95  |               |                    |

**answer:** F = 61, S = 95
**fastest_path:** d = 6. F = 7 + 9 × 6 = 61. 5th term = 31. S = (5/2)(7 + 31) = 95.
**explanation:** Common difference d = 13 − 7 = 6. nth term = a₁ + (n − 1)d = 7 + (n − 1) × 6. For n = 10: F = 7 + 9 × 6 = 61. The 5th term = 7 + 4 × 6 = 31. Sum of first 5 = (5/2)(first + last) = (5/2)(7 + 31) = (5/2)(38) = 95.
**mistake_a:** 55 — using n = 8 instead of n − 1 = 9 gaps (off-by-one in the step count).
**mistake_c:** 65 — using n = 10 directly in the formula instead of (n − 1): 7 + 10 × 6 = 67, or a nearby arithmetic slip.
**mistake_d:** 85 — computing S as 5 × 17 (using 17 instead of the true middle term 19 = 3rd term; 5 × 19 = 95 is correct).
**common_trap:** Off-by-one in the nth-term formula: the 10th term has 9 gaps from the 1st term, not 10.
**takeaway:** nth term = a₁ + (n − 1) × d. Sum of n consecutive arithmetic terms = (n/2)(first + last).
**related_reading:** reading-di-06-two-part-analysis

---

## Q30
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry

A rectangle has a perimeter of 40 cm. The length is 6 cm more than the width. Determine the length in centimeters (column 1) and the area in square centimeters (column 2).

|      | Length (cm) | Area (cm²) |
|------|-------------|------------|
| 7    |             |            |
| 13   |             |            |
| 17   |             |            |
| 49   |             |            |
| 91   |             |            |
| 130  |             |            |

**answer:** Length = 13, Area = 91
**fastest_path:** l + w = 20 and l = w + 6 → w = 7, l = 13. Area = 13 × 7 = 91.
**explanation:** Perimeter = 2(l + w) = 40, so l + w = 20. Since l = w + 6: (w + 6) + w = 20 → 2w = 14 → w = 7 cm. Length = 7 + 6 = 13 cm. Area = 13 × 7 = 91 cm².
**mistake_a:** 7 — the width, not the length; selecting this for column 1 reverses the two dimensions.
**mistake_c:** 17 — computing (20 + 6)/2 = 13 correctly but then confusing the equation and obtaining 17 = 40/2 − 3.
**mistake_d:** 49 — computing area as 7 × 7, squaring the width instead of multiplying by the length.
**mistake_f:** 130 — computing area as 13 × 10, using 10 for the width instead of 7.
**common_trap:** Forgetting to halve the perimeter: using l + w = 40 instead of l + w = 20.
**takeaway:** Perimeter = 2(l + w), so l + w = P/2. Apply the second constraint to get both dimensions, then multiply for area.
**related_reading:** reading-di-06-two-part-analysis

---

## Q31
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets

A survey of 80 employees found that 45 drink coffee, 30 drink tea, and 10 drink both beverages. Let N be the number who drink neither beverage and let T be the number who drink exactly one of the two beverages.

Select the value of N (column 1) and the value of T (column 2).

|     | N (drink neither) | T (exactly one) |
|-----|-------------------|-----------------|
| 5   |                   |                 |
| 15  |                   |                 |
| 25  |                   |                 |
| 55  |                   |                 |
| 65  |                   |                 |

**answer:** N = 15, T = 55
**fastest_path:** At-least-one = 45 + 30 − 10 = 65. N = 80 − 65 = 15. Exactly-one = 65 − 10 = 55.
**explanation:** By inclusion-exclusion, the number who drink at least one beverage = 45 + 30 − 10 = 65 (the overlap is subtracted to avoid double-counting). N = 80 − 65 = 15. Exactly-one = at-least-one minus both = 65 − 10 = 55. Equivalently: coffee-only = 35, tea-only = 20, T = 35 + 20 = 55.
**mistake_a:** 5 — omitting the add-back of the overlap: 80 − 45 − 30 = 5 (the "both" group is subtracted twice).
**mistake_c:** 25 — adding the overlap twice in the correction: 80 − 45 − 30 + 10 + 10 = 25.
**mistake_e:** 65 — the total "at-least-one" count used for T, which still includes the "both" group.
**common_trap:** Reporting "at-least-one" as "exactly-one." The "both" group must be subtracted from the at-least-one total to get exactly-one.
**takeaway:** Exactly-one = (A only) + (B only) = A + B − 2 × (both). Neither = Total − (A + B − both).
**related_reading:** reading-di-06-two-part-analysis

---

## Q32
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Statistics

A data set has five values: 2, 6, 10, 14, 18. The mean is M = 10 and the median is D = 10. A sixth value of 16 is added to the data set. Let M′ be the new mean and D′ be the new median.

Select the value of M′ (column 1) and the value of D′ (column 2).

|     | New Mean (M′) | New Median (D′) |
|-----|---------------|-----------------|
| 10  |               |                 |
| 11  |               |                 |
| 12  |               |                 |
| 13  |               |                 |
| 14  |               |                 |

**answer:** M′ = 11, D′ = 12
**fastest_path:** New mean = (50 + 16)/6 = 66/6 = 11. New sorted set {2,6,10,14,16,18}: median = (10 + 14)/2 = 12.
**explanation:** Original sum = 2 + 6 + 10 + 14 + 18 = 50. Adding 16: new sum = 66, new count = 6. M′ = 66/6 = 11. Re-sorted set: {2, 6, 10, 14, 16, 18}. With 6 values (even count), the median is the average of the 3rd and 4th values: (10 + 14)/2 = 12. The new value 16 inserts above 14 without shifting the middle pair.
**mistake_a:** 10 — assuming neither measure changes when a new value is added.
**mistake_c:** 12 — correct for D′; selecting this for M′ swaps the two answers.
**mistake_d:** 13 — arithmetic slip in computing the new mean (e.g., treating the new sum as 78 instead of 66).
**mistake_e:** 14 — picking the added value itself as the new median instead of finding the middle of the re-sorted set.
**common_trap:** Forgetting to re-sort the set before locating the median, or using the added value (16) as the new median anchor.
**takeaway:** After adding a value: recompute mean = new sum / new count; re-sort and find the middle (average the two middle values if n is even).
**related_reading:** reading-di-06-two-part-analysis

---

## Q33
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Inference vs. Causal Claim

A company study reports: "Employees who work from home (WFH) at least 3 days per week have an average productivity rating of 82 out of 100, compared with 74 out of 100 for employees who work in the office full time."

From the statements below, select the one that can be properly inferred from the study data alone (column 1) and the one that best explains why the data do not establish that WFH causes higher productivity (column 2).

| Statement                                                                                         | Can be Inferred | Why Not Causal |
|---------------------------------------------------------------------------------------------------|-----------------|----------------|
| WFH employees have higher average productivity ratings than full-time in-office employees         |                 |                |
| Requiring all employees to WFH at least 3 days per week would raise the company's average rating |                 |                |
| The highest-performing employees self-select into WFH arrangements                               |                 |                |
| The productivity rating scale penalizes visible in-office behaviors such as collaboration time   |                 |                |
| WFH employees benefit from fewer interruptions, which explains their performance advantage       |                 |                |

**answer:** Can be Inferred = "WFH employees have higher average productivity ratings than full-time in-office employees"; Why Not Causal = "The highest-performing employees self-select into WFH arrangements"
**fastest_path:** Inference = direct reading of the numbers (82 > 74). Causal flaw = self-selection confound: high performers choose WFH, so WFH may mark high performance rather than create it.
**explanation:** The study reports averages of 82 vs. 74 — so "WFH employees have higher ratings" is a direct inference from the data. All other row-1 candidates go beyond the data: prescribing policy (row 2) requires causation, while individual preferences (row 3) and measurement bias (row 4) are not stated. The causal claim fails primarily because of self-selection: high-performing employees may systematically choose WFH, making WFH a characteristic of high performers rather than its cause. Rows 4 and 5 offer alternative critiques but are speculative (not established by the data) or support causation (mechanisms).
**mistake_b:** "Requiring all to WFH would raise ratings" — prescribes a policy that assumes causation; not inferrable from descriptive data.
**mistake_d:** Measurement bias is speculative; the study does not confirm any rating-scale flaw.
**mistake_e:** Fewer interruptions is a plausible mechanism but is not stated in the data and does not itself block causation — it would support it.
**common_trap:** Confusing correlation with causation. Descriptive statistics license descriptive conclusions; policy conclusions require causal evidence.
**takeaway:** Inferences must stay within the data. Causal claims fail when self-selection can explain the correlation: the high-performer → WFH link could run in the opposite direction.
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Exponential Growth and Decay

Town A's population is modeled by P(t) = 500 × 2^t and Town B's population by Q(t) = 32,000 / 2^t, where t is the number of decades elapsed. Let t* be the decade at which the two populations are equal and let V be the shared population value at that point.

Select the value of t* (column 1) and the value of V (column 2).

|       | t* (decades) | V (shared population) |
|-------|--------------|----------------------|
| 2     |              |                      |
| 3     |              |                      |
| 4     |              |                      |
| 2,000 |              |                      |
| 4,000 |              |                      |
| 8,000 |              |                      |

**answer:** t* = 3, V = 4,000
**fastest_path:** Set equal: 500 × (2^t)² = 32,000 → (2^t)² = 64 = 2^6 → 2^t = 8 → t = 3. P(3) = 500 × 8 = 4,000.
**explanation:** Set P(t) = Q(t): 500 × 2^t = 32,000 / 2^t. Multiply both sides by 2^t: 500 × (2^t)² = 32,000. So (2^t)² = 64 = 2^6, meaning 2^t = 8 = 2^3, giving t* = 3. Then P(3) = 500 × 2^3 = 500 × 8 = 4,000. Verify: Q(3) = 32,000 / 8 = 4,000. Both agree.
**mistake_a:** 2 — solving 2^t = 64 directly (forgetting to square 2^t when multiplying both sides) yields t = 6; or solving a simpler version gives t = 2.
**mistake_c:** 4 — over-counting by one extra decade from an arithmetic slip in the exponent equation.
**mistake_d:** 2,000 — evaluating P at t = 2 instead of t = 3: P(2) = 500 × 4 = 2,000.
**mistake_f:** 8,000 — evaluating P at t = 4: P(4) = 500 × 16 = 8,000, one decade too late.
**common_trap:** Treating 500 × 2^t = 32,000 / 2^t as if only one factor of 2^t appears, rather than moving 2^t from the denominator to multiply both sides (yielding (2^t)²).
**takeaway:** When the same base appears growing on one side and decaying on the other, multiply both sides by the decaying term to collect the squared exponent, then solve.
**related_reading:** reading-di-06-two-part-analysis

---

## Q35
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Causal Chain Evaluation

An economist argues: "When the central bank raises interest rates, consumer borrowing decreases. When consumer borrowing decreases, spending on durable goods — cars, appliances, and furniture — declines. Therefore, raising interest rates will reduce overall consumer spending."

From the statements below, identify the one that most strengthens the economist's conclusion (column 1) and the one that reveals the most significant gap in the stated causal chain (column 2).

| Statement                                                                                                          | Strengthens | Gap in Chain |
|--------------------------------------------------------------------------------------------------------------------|-------------|--------------|
| Durable goods account for approximately 60% of total consumer spending                                            |             |              |
| When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead                     |             |              |
| A cross-country study found that central bank rate hikes correlate with reduced durable goods purchases            |             |              |
| The central bank has raised interest rates four times in the past two years                                        |             |              |
| Some consumers increase their saving when interest rates rise, which further reduces their discretionary spending  |             |              |

**answer:** Strengthens = "Durable goods account for approximately 60% of total consumer spending"; Gap in Chain = "When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead"
**fastest_path:** Strengthen = closes the unstated final link (durable goods fall → overall spending falls). Gap = disrupts a stated link (borrowing falls → spending falls) via consumer substitution.
**explanation:** The explicit chain ends at "durable goods spending declines," but the conclusion is about "overall consumer spending." The 60% statistic bridges this implicit final step: if durable goods are the majority of all spending, a decline there materially lowers the total. The most significant gap is the link from "consumer borrowing decreases" to "durable goods spending declines": if consumers simply shift to credit cards instead, total borrowing may not fall and spending continues. Row 3 (cross-country study) supports an already-stated link and does not bridge the conclusion's final gap. Row 4 (rate-hike history) is context, not logic. Row 5 (increased saving) adds a parallel mechanism not in the stated chain.
**mistake_c:** The cross-country study confirms a premise of the chain (rate hike → reduced durable purchases) but does not bridge the final implicit gap from durable goods to overall spending.
**mistake_d:** The frequency of past rate hikes is historical context and does not evaluate the logic of the causal chain.
**mistake_e:** Increased saving introduces a different causal path; it supports the conclusion but is not part of the stated chain and does not address its gap.
**common_trap:** Picking the cross-country study as the strongest strengthener because it provides empirical evidence — but it confirms a stated step. The 60% statistic closes the critical unstated gap.
**takeaway:** In multi-step causal chains, the strongest strengthener closes an implicit gap; the most critical flaw disrupts a stated link (often via substitution or confounding).
**related_reading:** reading-di-06-two-part-analysis

**related_reading:** reading-di-06-two-part-analysis

---

## Q36
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Number Properties

Integer N is divisible by both 9 and 15. Let S = the smallest positive value of N, and let D = the sum of the digits of S.

Select the value of S (column 1) and the value of D (column 2).

|     | S (smallest N) | D (digit sum of S) |
|-----|----------------|--------------------|
| 9   |                |                    |
| 15  |                |                    |
| 27  |                |                    |
| 36  |                |                    |
| 45  |                |                    |
| 135 |                |                    |

**answer:** S = 45, D = 9
**fastest_path:** LCM(9, 15) = 45. Digit sum: 4 + 5 = 9.
**explanation:** The smallest positive integer divisible by both 9 and 15 is their least common multiple. Factor each: 9 = 3² and 15 = 3 × 5, so LCM = 3² × 5 = 45. Sum of digits of 45 = 4 + 5 = 9. Notice that D = 9 happens to match the first row — students who compute only the GCD (9) would incorrectly select it for S as well.
**mistake_a:** 9 — that is the GCD of 9 and 15, not the LCM. Divisibility requires LCM.
**mistake_b:** 15 — one of the original divisors; 15 is not divisible by 9.
**mistake_c:** 27 — a multiple of 9 but not of 15 (27/15 is not an integer).
**mistake_d:** 36 — divisible by 9 (36/9 = 4) but not by 15 (36/15 = 2.4). Fails the 15 requirement.
**mistake_f:** 135 — a valid common multiple (9 × 15 = 135) but not the smallest; students who multiply instead of computing LCM land here.
**common_trap:** Multiplying 9 × 15 = 135 instead of computing LCM. GCD(9,15) = 3, so LCM = 9 × 15 / 3 = 45, not 135.
**takeaway:** Smallest positive integer divisible by A and B = LCM(A, B) = A × B / GCD(A, B).
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Linear System

Anna and Ben together own 48 books. Anna has 8 more books than Ben. Let A = Anna's count and B = Ben's count.

Select the value of A (column 1) and the value of B (column 2).

|     | A (Anna) | B (Ben) |
|-----|----------|---------|
| 12  |          |         |
| 16  |          |         |
| 20  |          |         |
| 24  |          |         |
| 28  |          |         |
| 32  |          |         |

**answer:** A = 28, B = 20
**fastest_path:** Half-sum plus/minus half-difference: A = (48+8)/2 = 28, B = (48−8)/2 = 20.
**explanation:** Two equations: A + B = 48 and A − B = 8. Adding them: 2A = 56 → A = 28. Substituting: B = 48 − 28 = 20. Verify: 28 + 20 = 48 ✓ and 28 − 20 = 8 ✓.
**mistake_a:** 12 — result of an unrelated arithmetic slip; no natural path here.
**mistake_b:** 16 — computing B as 48/3 = 16 (using a 2:1 ratio rather than the stated 8-book gap).
**mistake_c:** 20 — the correct value for B; selecting this for column 1 reverses the answer pair.
**mistake_d:** 24 — the 50/50 split (48/2), ignoring the 8-book difference.
**mistake_f:** 32 — computing A as 48 − 16 = 32, using the wrong value of B.
**common_trap:** Treating 48/2 = 24 as both values — but equal split satisfies the total while ignoring the difference constraint.
**takeaway:** Sum-and-difference pair: A = (total + difference)/2; B = (total − difference)/2.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage Change

An item originally costs $80. In January it is discounted by 25%. In February, the January price is increased by 10%. Let J = price after the January discount and F = price after the February increase.

Select the value of J (column 1) and the value of F (column 2).

|     | J (January price) | F (February price) |
|-----|-------------------|--------------------|
| 48  |                   |                    |
| 56  |                   |                    |
| 60  |                   |                    |
| 64  |                   |                    |
| 66  |                   |                    |
| 68  |                   |                    |

**answer:** J = 60, F = 66
**fastest_path:** J = 80 × 0.75 = 60. F = 60 × 1.10 = 66.
**explanation:** January discount of 25%: J = 80 × (1 − 0.25) = 80 × 0.75 = 60. February increase of 10% on the new price: F = 60 × 1.10 = 66. The 10% applies to the January price ($60), not the original price ($80). Many students accidentally apply the February increase to $80 instead of $60.
**mistake_a:** 48 — computing 80 × 0.60 (a 40% discount instead of 25%).
**mistake_b:** 56 — computing 80 × 0.70 (a 30% discount instead of 25%).
**mistake_d:** 64 — computing 80 × 0.80 (a 20% discount instead of 25%).
**mistake_f:** 68 — applying the 10% increase to the original price instead of the discounted price: 60 + 80 × 0.10 = 60 + 8 = 68.
**common_trap:** Applying the February 10% increase to the original $80 rather than the $60 January price, giving 60 + 8 = 68 instead of 60 × 1.10 = 66.
**takeaway:** Sequential percentage changes apply each step to the result of the previous step, not to the original value.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Logic — Argument Components

A manager writes: "Our restaurant introduced a new menu last month. Customer visits increased by 15% compared to the same month last year. Customers rated the new dishes an average of 4.5 out of 5. The new menu is a clear success."

From the statements below, select the conclusion of the argument (column 1) and the statement that, if true, would provide the strongest alternative explanation for the rise in customer visits (column 2).

| Statement | Conclusion | Alt Explanation |
|---|---|---|
| Customer visits increased by 15% last month | | |
| The new menu is a clear success | | |
| Customer ratings for the new dishes averaged 4.5 out of 5 | | |
| The restaurant's closest competitor closed permanently the prior month | | |
| The restaurant reduced its prices by 10% to promote the new menu | | |

**answer:** Conclusion = "The new menu is a clear success"; Alt Explanation = "The restaurant's closest competitor closed permanently the prior month"
**fastest_path:** The conclusion is the claim being made (introduced by "The new menu is a clear success"). The alt explanation for the visit increase is an external factor — a competitor's closure — not the menu itself.
**explanation:** The argument concludes that the new menu drove the 15% visit increase and high ratings. Row B states this conclusion explicitly. The strongest alternative explanation for the visit surge is that a nearby competitor closed, displacing customers who now have no alternative — that explanation has nothing to do with the quality of the new menu. Row E (reduced prices) is plausible but is described as promoting the menu, not as a primary alternative cause.
**mistake_a:** Row A (15% visit increase) is a stated premise, not the conclusion.
**mistake_c:** Row C (4.5 rating) is a second stated premise.
**mistake_e:** Row E (price reduction) could be an alternative explanation but is described as secondary to the menu promotion; the competitor closing is a stronger and fully independent cause.
**common_trap:** Picking a stated premise as the conclusion. The conclusion is what the evidence is meant to prove, not the evidence itself.
**takeaway:** Conclusion = claim that the premises support. Alternative explanation = external factor that could produce the same observed outcome without the hypothesized cause.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio and Derived Quantity

A recipe requires flour and sugar in a 3:1 ratio by weight. A chef uses 240 grams of flour. Butter is added in an amount equal to 40% of the combined weight of flour and sugar. Let S = grams of sugar needed and B = grams of butter.

Select the value of S (column 1) and the value of B (column 2).

|     | S (sugar, g) | B (butter, g) |
|-----|--------------|---------------|
| 40  |              |               |
| 60  |              |               |
| 80  |              |               |
| 96  |              |               |
| 120 |              |               |
| 128 |              |               |

**answer:** S = 80, B = 128
**fastest_path:** S = 240/3 = 80. Combined = 320. B = 0.40 × 320 = 128.
**explanation:** The flour-to-sugar ratio is 3:1, so sugar = flour / 3 = 240 / 3 = 80 g. Total flour + sugar = 240 + 80 = 320 g. Butter = 40% of 320 = 0.40 × 320 = 128 g.
**mistake_a:** 40 — computing sugar as 240/6 (treating the ratio as 6:1 or halving again after finding 80).
**mistake_b:** 60 — computing sugar as 240/4 (treating the ratio as 4:1).
**mistake_d:** 96 — computing butter as 40% of flour only (0.40 × 240 = 96), ignoring the sugar component of the combined weight.
**mistake_e:** 120 — computing butter as 40% of an incorrect combined weight, e.g., 240 + 60 = 300 → 0.40 × 300 = 120.
**common_trap:** Applying the 40% butter calculation to the flour weight alone ($240) instead of the flour-plus-sugar weight ($320).
**takeaway:** When a derived quantity is based on a "combined" or "total" weight, compute the total first, then apply the percentage.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Percentage Change and Recovery

A stock originally priced at $200 per share loses 20% of its value during Q1. In Q2 the stock must gain G% to return exactly to the original price. The stock also paid a cash dividend during Q1 equal to 5% of its Q1 end-of-quarter price. Let G = the required Q2 percentage gain and D = the cash dividend paid per share.

Select the value of G (column 1) and the value of D (column 2).

|     | G (%) | D ($) |
|-----|-------|-------|
| 8   |       |       |
| 10  |       |       |
| 20  |       |       |
| 25  |       |       |
| 30  |       |       |
| 40  |       |       |

**answer:** G = 25, D = 8
**fastest_path:** Q1 end price = 200 × 0.80 = 160. To recover: 160 × (1 + G/100) = 200 → G = 25. Dividend = 160 × 0.05 = 8.
**explanation:** After a 20% loss, the Q1 end price = 200 × 0.80 = $160. To regain $200: growth factor = 200/160 = 1.25 → G = 25%. The dividend is 5% of the Q1 end price, not the original: D = 160 × 0.05 = $8. If you mistakenly apply 5% to the original $200 you get $10, not $8.
**mistake_b:** 10 — computing dividend as 5% of the original price (0.05 × 200 = 10) instead of the Q1 end-of-quarter price.
**mistake_c:** 20 — assuming the required gain equals the loss percentage. A 20% gain on $160 = $32, bringing the stock to only $192, not $200.
**mistake_e:** 30 — overestimating the recovery, possibly via 20% × 1.5 mental math.
**common_trap:** Assuming a 20% loss requires a 20% gain to recover. The gain must be calculated on the lower (post-loss) base, making it larger: 25% on $160 = $40, restoring to $200.
**takeaway:** To recover from an x% loss, you need a gain of x/(100−x) × 100%, always greater than x%. A 20% loss requires a 25% gain to recover.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Combined Work with Unknown Rate

Printer A can complete a print job alone in 12 minutes. Printers A and B working together finish the job in 4 minutes. Let X = the number of minutes Printer B needs to complete the job alone, and let F = the fraction of the job that Printer B completes during the 4-minute combined run.

Select the value of X (column 1) and the value of F (column 2).

|       | X (min for B alone) | F (B's fraction in 4 min) |
|-------|---------------------|---------------------------|
| 1/3   |                     |                           |
| 1/2   |                     |                           |
| 2/3   |                     |                           |
| 3     |                     |                           |
| 4     |                     |                           |
| 6     |                     |                           |
| 8     |                     |                           |

**answer:** X = 6, F = 2/3
**fastest_path:** 1/X = 1/4 − 1/12 = 3/12 − 1/12 = 2/12 = 1/6 → X = 6. F = 4 × (1/6) = 2/3.
**explanation:** Combined rate = 1/4 job per minute. Printer A's rate = 1/12 job per minute. Printer B's rate = 1/4 − 1/12 = 3/12 − 1/12 = 2/12 = 1/6 job per minute, so X = 6 minutes solo. In the 4-minute combined run, B's contribution = 4 × (1/6) = 4/6 = 2/3. Cross-check: A's contribution = 4 × (1/12) = 1/3. B's 2/3 + A's 1/3 = 1 whole job ✓.
**mistake_a:** 1/3 — Printer A's fraction (4 × 1/12), not B's. Students who compute A's contribution and place it in column 2 swap the two printers.
**mistake_b:** 1/2 — eyeballing the split rather than computing rates.
**mistake_d:** 3 — computing X = 12/4 = 3, treating the combined time as if it were B's solo rate (a harmonic-mean confusion).
**mistake_e:** 4 — equating B's solo time with the combined time; there is no reason A and B take the same amount of time alone.
**mistake_g:** 8 — computing X = 12 − 4 = 8, subtracting times instead of subtracting rates.
**common_trap:** Subtracting times (12 − 4 = 8) instead of subtracting rates (1/4 − 1/12 = 1/6).
**takeaway:** Work/rate: rates add (1/A + 1/B = 1/T); do not subtract times. Solve for the unknown rate first, then invert for time.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Digit Constraints

A two-digit integer has tens digit T and units digit U. The tens digit is twice the units digit. The original number exceeds the number formed by reversing its digits by exactly 36. Find T and U.

Select the value of T (column 1) and the value of U (column 2).

|   | T (tens digit) | U (units digit) |
|---|----------------|-----------------|
| 2 |                |                 |
| 3 |                |                 |
| 4 |                |                 |
| 6 |                |                 |
| 7 |                |                 |
| 8 |                |                 |

**answer:** T = 8, U = 4
**fastest_path:** T = 2U. Reversal difference: 9(T − U) = 36 → T − U = 4. With T = 2U: U = 4, T = 8.
**explanation:** The difference between a two-digit number and its reverse = 9(T − U). Setting this equal to 36: T − U = 4. Combining with T = 2U: 2U − U = 4 → U = 4, T = 8. The original number is 84; reversed is 48; 84 − 48 = 36 ✓. Also, T = 2U: 8 = 2 × 4 ✓.
**mistake_a:** 2 — half of the correct U value; result of applying the 2× relationship in the wrong direction (U = T/2 instead of T = 2U).
**mistake_b:** 3 — U solved from T − U = 4 alone without applying T = 2U constraint (e.g., U = 7 − 4 = 3 with T = 7, which is not in ratio 2:1).
**mistake_d:** 6 — T solved from T − U = 4 alone with U assumed to be 2: T = 6, U = 2. Reversal check: 62 − 26 = 36 ✓. But T = 6 ≠ 2 × 2 = 4, violating the 2× constraint. Students who stop after checking only one condition land here.
**mistake_e:** 7 — off-by-one from T − U = 4 arithmetic.
**common_trap:** Using only the reversal constraint (T − U = 4) and finding T = 6, U = 2 as a solution without checking that T = 2U also holds.
**takeaway:** Two constraints, two unknowns: always verify both equations are satisfied by your answer pair.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Linear System (Ticket Sales)

A theater sells standard tickets for $18 and premium tickets for $30. On a given night, 250 tickets were sold for total revenue of $5,700. Let S = number of standard tickets sold and P = number of premium tickets sold.

Select the value of S (column 1) and the value of P (column 2).

|     | S (standard) | P (premium) |
|-----|--------------|-------------|
| 80  |              |             |
| 100 |              |             |
| 120 |              |             |
| 130 |              |             |
| 150 |              |             |
| 170 |              |             |

**answer:** S = 150, P = 100
**fastest_path:** If all 250 were standard: revenue = $4,500. Surplus = $1,200. Each premium swap adds $12. Premiums = 1,200/12 = 100. Standards = 150.
**explanation:** Let S + P = 250 and 18S + 30P = 5,700. Substitute S = 250 − P: 18(250 − P) + 30P = 5,700 → 4,500 + 12P = 5,700 → 12P = 1,200 → P = 100. S = 150. Verify: 150 + 100 = 250 ✓; 18 × 150 + 30 × 100 = 2,700 + 3,000 = 5,700 ✓.
**mistake_a:** 80 — premiums over-estimated (P = 170), pushing standards too low.
**mistake_c:** 120 — standards from an arithmetic slip in the substitution (12P = 1,560 → P = 130, S = 120); verify: 18×120 + 30×130 = 2,160 + 3,900 = 6,060 ≠ 5,700.
**mistake_d:** 130 — premiums over-estimated by the same slip above.
**mistake_f:** 170 — standards if P is under-counted (P = 80): 18×170 + 30×80 = 3,060 + 2,400 = 5,460 ≠ 5,700.
**common_trap:** Setting S = P = 125 (equal split): revenue = 18×125 + 30×125 = 2,250 + 3,750 = 6,000 ≠ 5,700. The lower target revenue forces more standard tickets.
**takeaway:** Two-price sum: set up the "all-low-price" floor, compute the surplus, then divide by the per-unit price gap to find how many high-price units are needed.
**related_reading:** reading-di-06-two-part-analysis

---

## Q45
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Weaken (Causal Attribution)

A company reports: "Since launching a mentorship program 18 months ago, annual employee turnover has dropped from 22% to 13%. The mentorship program has successfully reduced employee turnover."

From the statements below, select the statement that most seriously weakens the conclusion (column 1) and the statement that most directly supports it (column 2).

| Statement | Weakens | Supports |
|---|---|---|
| Turnover at peer companies in the same sector dropped by an average of 10 points over the same period, with no mentorship programs | | |
| Employees who participated in the mentorship program left the company at half the rate of employees who did not participate | | |
| A company-wide salary increase of 15% was implemented three months before the mentorship program launched | | |
| The program required a significant time commitment that temporarily reduced measured output | | |
| Post-program surveys show that mentees cite career-growth opportunities as their primary reason for staying | | |

**answer:** Weakens = "Turnover at peer companies...dropped by 10 points...with no mentorship programs"; Supports = "Employees who participated...left at half the rate of those who did not"
**fastest_path:** Strongest weaken = industry-wide trend (external factor explains the drop without the program). Strongest support = within-company A/B comparison showing program participants had lower turnover than non-participants.
**explanation:** Row A establishes that a similar turnover drop occurred industry-wide without any mentorship program, meaning the drop at this company is likely caused by an external factor (e.g., labor market conditions), not the program. This directly undermines the causal attribution. Row B is the most direct support: a controlled within-company comparison showing that participants left at half the rate of non-participants provides the most proximate evidence that the program itself drove the retention improvement. Row C (prior salary increase) also weakens, but an industry-wide trend with no mentorship is stronger evidence against the specific causal claim.
**mistake_c:** The salary increase is an alternative cause and does weaken the conclusion — but the industry trend (Row A) eliminates the program's role entirely, making it stronger.
**mistake_d:** Productivity impact is irrelevant to whether turnover was reduced.
**mistake_e:** Mentees reporting career growth as a retention reason is a mechanism supporting the conclusion but is weaker than the A/B comparison in Row B, because survey self-reports can be biased.
**common_trap:** Selecting Row C (salary increase) as the weakener because it is an obvious competing cause — but the industry trend (Row A) is stronger, as it implies the entire drop would have happened without the program.
**takeaway:** Strongest weakener = evidence that the observed effect would have occurred without the intervention. Strongest support = controlled comparison (participants vs. non-participants) within the same environment.
**related_reading:** reading-di-06-two-part-analysis

---

## Q46
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Conditional Probability

A bag contains 5 red marbles and 7 blue marbles. Two marbles are drawn sequentially without replacement. Let P1 = probability the first marble is red, and P2 = probability the second marble is red given the first was also red.

Select the value of P1 (column 1) and the value of P2 (column 2).

|       | P1 (first red) | P2 (second red \| first red) |
|-------|----------------|------------------------------|
| 1/12  |                |                              |
| 4/11  |                |                              |
| 4/12  |                |                              |
| 5/11  |                |                              |
| 5/12  |                |                              |
| 7/12  |                |                              |

**answer:** P1 = 5/12, P2 = 4/11
**fastest_path:** P1 = 5/12 (5 red out of 12 total). After one red is drawn: 4 red remain out of 11 total → P2 = 4/11.
**explanation:** Initially 5 red + 7 blue = 12 total marbles. P1 = 5/12. Given the first draw was red, the bag now has 4 red and 7 blue marbles (11 total). P2 = 4/11. Key: both the numerator and denominator decrease by 1 when the first red marble is removed.
**mistake_a:** 1/12 — a minor arithmetic slip with no natural path; included as a near-zero distractor.
**mistake_c:** 4/12 — computing P2 with the original denominator (12) instead of the updated count after removal (11).
**mistake_d:** 5/11 — reducing the denominator by 1 (correct) but forgetting to reduce the numerator — treating it as if the first red marble was returned.
**mistake_f:** 7/12 — the probability that the first marble is blue; students who swap color may select this for P1.
**common_trap:** Reducing only the denominator (from 12 to 11) while keeping the red count at 5, giving 5/11 instead of 4/11.
**takeaway:** Without-replacement conditional probability: after a specific color is drawn, subtract 1 from both the count of that color and the total count before computing the next probability.
**related_reading:** reading-di-06-two-part-analysis

---

## Q47
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Average Back-Solve

A class of 30 students is divided into two groups: Group 1 took Test A and Group 2 took Test B. The average score on Test A was 70 and on Test B was 90. The overall class average across both tests was 78. Let N1 = the number of students in Group 1 and N2 = the number in Group 2.

Select the value of N1 (column 1) and the value of N2 (column 2).

|     | N1 (Test A) | N2 (Test B) |
|-----|-------------|-------------|
| 8   |             |             |
| 10  |             |             |
| 12  |             |             |
| 15  |             |             |
| 18  |             |             |
| 20  |             |             |

**answer:** N1 = 18, N2 = 12
**fastest_path:** 70N1 + 90N2 = 78 × 30 = 2,340. With N1 = 30 − N2: 2,100 + 20N2 = 2,340 → N2 = 12, N1 = 18.
**explanation:** System: N1 + N2 = 30 and 70N1 + 90N2 = 2,340. Substitute N1 = 30 − N2: 70(30 − N2) + 90N2 = 2,340 → 2,100 + 20N2 = 2,340 → 20N2 = 240 → N2 = 12. N1 = 18. Verify: 70 × 18 + 90 × 12 = 1,260 + 1,080 = 2,340 ✓.
**mistake_c:** 12 — the correct value for N2; selecting this for column 1 swaps the pair.
**mistake_d:** 15 — the naive equal split (30/2 = 15). This corresponds to an overall average of 80, not 78. Since 78 is closer to 70 than to 90, Group 1 (Test A, lower average) must be larger.
**mistake_f:** 20 — over-correcting in the direction of Test A (lower-scoring group).
**common_trap:** Concluding N1 = N2 = 15 because 78 "looks like" the midpoint of 70 and 90. But the midpoint of 70 and 90 is 80, not 78. The below-midpoint overall average means Group 1 is the larger group.
**takeaway:** Weighted average: the group with the average closer to the overall average is the larger group. Always verify with 70N1 + 90N2 = overall average × total.
**related_reading:** reading-di-06-two-part-analysis

---

## Q48
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Optimization with Constraints

A farmer has exactly 200 acres to plant with corn and wheat. Each acre of corn earns $400 profit and requires 3 labor-days. Each acre of wheat earns $600 profit and requires 5 labor-days. The farmer has at most 800 labor-days available. To maximize total profit while planting all 200 acres, let C = acres planted with corn and W = acres planted with wheat.

Select the value of C (column 1) and the value of W (column 2).

|     | C (corn acres) | W (wheat acres) |
|-----|----------------|-----------------|
| 0   |                |                 |
| 50  |                |                 |
| 80  |                |                 |
| 100 |                |                 |
| 150 |                |                 |
| 200 |                |                 |

**answer:** C = 100, W = 100
**fastest_path:** Profit = 400C + 600W = 400(200−W) + 600W = 80,000 + 200W — maximize W. Labor cap: 3(200−W) + 5W ≤ 800 → 2W ≤ 200 → W ≤ 100. So W = 100, C = 100.
**explanation:** With C + W = 200 and C = 200 − W, profit simplifies to 80,000 + 200W — every additional acre of wheat adds $200 net profit over corn. The binding constraint is labor: 3C + 5W ≤ 800. Substituting C = 200 − W: 600 − 3W + 5W ≤ 800 → 2W ≤ 200 → W ≤ 100. The profit-maximizing solution is W = 100, C = 100. At W = 150 the labor requirement would be 3×50 + 5×150 = 900 > 800 — infeasible.
**mistake_a:** C = 0, W = 200 — ignores the labor constraint; 5×200 = 1,000 > 800 labor-days.
**mistake_b:** C = 50, W = 150 — labor check: 3×50 + 5×150 = 150 + 750 = 900 > 800. Infeasible.
**mistake_c:** C = 80, W = 120 — labor: 3×80 + 5×120 = 240 + 600 = 840 > 800. Still infeasible.
**mistake_e:** C = 150, W = 50 — feasible (3×150 + 5×50 = 450+250 = 700 ≤ 800) but not optimal; profit = 60,000+30,000 = $90,000 < $100,000.
**common_trap:** Allocating all acres to wheat (highest per-acre profit) without checking the labor constraint. Wheat is profitable per acre but expensive in labor-days; the cap binds before you can go beyond W = 100.
**takeaway:** In constrained optimization, first identify the direction of improvement (maximize the higher-return resource), then find the tightest constraint and set it as an equality to maximize.
**related_reading:** reading-di-06-two-part-analysis

---

## Q49
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Hidden Assumption and Mechanism Failure

A consulting firm argues: "Surveys show that employees who take at least 15 vacation days per year are 30% more productive than those who take fewer. Our client TechCorp loses an estimated $2 million annually in productivity from overworked employees. If TechCorp mandates 15 minimum vacation days, it will recover at least $1.5 million of that loss."

From the statements below, select the one that most seriously weakens the conclusion (column 1) and the one that identifies the most critical unstated assumption in the argument (column 2).

| Statement | Weakens | Unstated Assumption |
|---|---|---|
| Most TechCorp employees will continue performing work tasks during mandated vacation time, meaning the time off will not function as genuine rest | | |
| The $2 million productivity loss estimate was derived from a study of a different industry with significantly lower workloads | | |
| The 30% productivity difference between high-vacation and low-vacation employees reflects that high performers self-select into taking longer vacations, not that vacation itself causes productivity gains | | |
| Mandating vacation will create scheduling complexity that increases management overhead costs | | |
| The $1.5 million recovery target represents only 75% of the stated $2 million loss, leaving a residual gap | | |

**answer:** Weakens = "Most TechCorp employees will continue performing work tasks during mandated vacation time..."; Unstated Assumption = "The 30% productivity difference...reflects that high performers self-select into taking longer vacations..."
**fastest_path:** Weakener = mechanism failure (mandated vacation ≠ rest → productivity gain mechanism is disabled). Unstated assumption = the survey correlation is treated as causal (high performers self-select into vacation-taking; mandating it won't replicate the effect).
**explanation:** The argument's mechanism is: mandate vacation → employees rest → productivity rises by ~30% → $1.5M+ recovery. Row A attacks this mechanism at its root: if employees work during their "vacation," the rest-to-productivity chain never activates. Row C identifies the core unstated assumption: the argument treats a correlation between vacation and productivity as a causal relationship. But if high performers self-select into taking vacations (they have the political capital and confidence to unplug), mandating vacation for all employees would not produce the same productivity boost. Row B weakens the data reliability but does not attack the core mechanism. Row D adds cost but does not negate productivity recovery. Row E is a mathematical restatement, not a logical flaw.
**mistake_b:** Weakens the data source but does not destroy the mechanism; a partial weakener.
**mistake_d:** Adds a cost concern but does not weaken the claim that productivity would recover.
**mistake_e:** Reframes the 75% figure but does not challenge the argument's logic — it restates what 75% means.
**common_trap:** Selecting Row B as the weakener because "different industry" sounds like a strong methodological flaw. But Row A directly disables the mechanism through which the conclusion is supposed to work, making it the stronger attack.
**takeaway:** The strongest weakener targets the mechanism, not just the data. The most critical unstated assumption is the one without which the entire conclusion collapses — here, that the correlation is causal.
**related_reading:** reading-di-06-two-part-analysis

---

## Q50
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — River Current with Speed Ratio

A boat travels 72 km upstream against a river current, then 72 km downstream. The downstream trip takes 3 hours less than the upstream trip. The downstream speed is exactly twice the upstream speed. Let B = the boat's speed in still water (km/h) and C = the current's speed (km/h).

Select the value of B (column 1) and the value of C (column 2).

|     | B (still water, km/h) | C (current, km/h) |
|-----|-----------------------|-------------------|
| 6   |                       |                   |
| 9   |                       |                   |
| 12  |                       |                   |
| 15  |                       |                   |
| 18  |                       |                   |
| 24  |                       |                   |

**answer:** B = 18, C = 6
**fastest_path:** Downstream = 2 × upstream → B+C = 2(B−C) → B = 3C. Time difference: 72/(B−C) − 72/(B+C) = 3. With B = 3C: 72/(2C) − 72/(4C) = 3 → 18/C = 3 → C = 6, B = 18.
**explanation:** Let upstream speed = B − C and downstream = B + C. The speed ratio condition B + C = 2(B − C) simplifies to 3C = B. Substituting into the time equation: 72/(2C) − 72/(4C) = 3 → 36/C − 18/C = 3 → 18/C = 3 → C = 6. Therefore B = 3 × 6 = 18. Verification: upstream = 12 km/h → 72/12 = 6 hours; downstream = 24 km/h → 72/24 = 3 hours; difference = 3 hours ✓; downstream = 2 × upstream ✓.
**mistake_a:** 6 — the correct value for C; selecting this for column 1 reverses the answer pair.
**mistake_b:** 9 — result of an arithmetic slip in the final step, e.g., solving 18/C = 2 instead of 3.
**mistake_c:** 12 — the upstream speed (B − C = 18 − 6 = 12); mistaking the upstream speed for B.
**mistake_d:** 15 — halfway between two meaningful values; no natural derivation.
**mistake_f:** 24 — the downstream speed (B + C = 18 + 6 = 24); mistaking the downstream speed for B.
**common_trap:** Confusing the boat's still-water speed B with the upstream speed (B − C = 12) or downstream speed (B + C = 24). B is neither — it's the average of those two: (12 + 24)/2 = 18.
**takeaway:** Still-water speed = average of upstream and downstream speeds: B = [(B+C) + (B−C)] / 2. Always label what each speed represents before plugging in numbers.
**related_reading:** reading-di-06-two-part-analysis

---

## Q51
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Chinese Remainder Theorem / Number Theory

When positive integer N is divided by 7, the remainder is 3. When N is divided by 4, the remainder is 1. Let S = the smallest positive integer satisfying both conditions, and let R = the remainder when S is divided by 28.

Select the value of S (column 1) and the value of R (column 2).

|     | S (smallest N) | R (S mod 28) |
|-----|----------------|--------------|
| 3   |                |              |
| 10  |                |              |
| 17  |                |              |
| 21  |                |              |
| 24  |                |              |
| 31  |                |              |

**answer:** S = 17, R = 17
**fastest_path:** List N mod 7 = 3: {3, 10, 17, ...}. Check mod 4 = 1: 3 mod 4 = 3 ✗; 10 mod 4 = 2 ✗; 17 mod 4 = 1 ✓. S = 17. Since 17 < 28, R = 17.
**explanation:** The set of integers with remainder 3 when divided by 7: {3, 10, 17, 24, 31, …}. Test each for remainder 1 when divided by 4: 3 mod 4 = 3 (no); 10 mod 4 = 2 (no); 17 mod 4 = 1 (yes). So S = 17. The period of the joint-remainder system = LCM(7, 4) = 28. Because S = 17 < 28, the remainder when 17 is divided by 28 is simply 17 itself. Both column answers are 17 — they can point to the same row.
**mistake_a:** 3 — satisfies N mod 7 = 3 but fails N mod 4 = 1 (3 mod 4 = 3). Students who check only the first condition stop here.
**mistake_b:** 10 — satisfies N mod 7 = 3 but 10 mod 4 = 2 ≠ 1.
**mistake_d:** 21 — 21 mod 7 = 0 ≠ 3; does not satisfy the first condition.
**mistake_e:** 24 — 24 mod 7 = 3 ✓ but 24 mod 4 = 0 ≠ 1. Looks plausible but fails the second condition.
**mistake_f:** 31 — the next valid solution after 17 in the periodic sequence (17 + 28 = 45... wait, 31 mod 7 = 3 ✓ and 31 mod 4 = 3 ✗). Students looking for a two-digit answer may land here.
**common_trap:** Stopping at the first number that satisfies one condition (N = 3 for the mod-7 rule) without verifying the second condition. Always check both constraints before recording an answer.
**takeaway:** Simultaneous remainder problems: list candidates for the first condition in order, then test each against the second condition. The period of the solution set = LCM of the two divisors.
**related_reading:** reading-di-06-two-part-analysis

---

## Q52
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Arithmetic Sequence with Efficiency Constraint

A factory operates at 100% efficiency in the first hour of a shift. Each subsequent hour, efficiency drops by 10 percentage points (100%, 90%, 80%, …). At 100% efficiency the factory produces 200 units per hour. Let H = the number of complete hours during which efficiency is at least 50%, and T = the total units produced during those H hours.

Select the value of H (column 1) and the value of T (column 2).

|       | H (hours ≥ 50%) | T (total units) |
|-------|-----------------|-----------------|
| 5     |                 |                 |
| 6     |                 |                 |
| 7     |                 |                 |
| 700   |                 |                 |
| 800   |                 |                 |
| 900   |                 |                 |
| 1,000 |                 |                 |

**answer:** H = 6, T = 900
**fastest_path:** Efficiency ≥ 50%: hours 1–6 (100%, 90%, …, 50%). H = 6. Output = 200 × (1.0+0.9+…+0.5) = 200 × 4.5 = 900.
**explanation:** Efficiency by hour: H1=100%, H2=90%, H3=80%, H4=70%, H5=60%, H6=50%, H7=40%. The condition "at least 50%" includes the hour of exactly 50%, so H = 6. Production per hour = efficiency × 200: H1=200, H2=180, H3=160, H4=140, H5=120, H6=100. Sum: 200+180+160+140+120+100 = 900. Alternatively, sum the arithmetic sequence of efficiencies: (1.0+0.9+0.8+0.7+0.6+0.5) = 6 terms with first=1.0 and last=0.5 → sum = 6/2 × (1.0+0.5) = 3 × 1.5 = 4.5. Total = 200 × 4.5 = 900 units.
**mistake_a:** H = 5 — stopping one hour early, treating 50% as "below" rather than "at least" 50%. This also leads to T = 800 (missing the 100 units produced in hour 6).
**mistake_c:** H = 7 — including hour 7 (40% efficiency), which violates the ≥ 50% requirement.
**mistake_d:** T = 700 — summing only hours 1–4 or making an arithmetic error in the sequence sum.
**mistake_e:** T = 800 — summing hours 1–5 only (H = 5 error): 200+180+160+140+120 = 800.
**mistake_g:** T = 1,000 — computing 200 × (sum of 5 terms: 1.0+0.9+0.8+0.7+0.6 = 4.0) × some incorrect factor, or 200 × 5 = 1,000 (flat-rate mistake).
**common_trap:** The off-by-one on H is the primary trap: "drops below 50%" in hour 7, so the last qualifying hour is hour 6, not hour 5. Students reading "below 50%" as the cutoff exclude hour 6 (exactly 50%) and get H = 5, T = 800.
**takeaway:** "At least 50%" includes exactly 50%. Use the arithmetic series sum formula for evenly-spaced sequences: sum = (n/2)(first + last), then multiply by the per-unit rate.
**related_reading:** reading-di-06-two-part-analysis
