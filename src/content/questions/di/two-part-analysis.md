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
**topic:** Quantitative — Algebra: Age

Maria is currently 3 times as old as her nephew Diego. In 8 years, Maria will be exactly twice as old as Diego. Select Maria's current age (column 1) and Diego's current age (column 2).

|     | Maria's Age | Diego's Age |
|-----|-------------|-------------|
| 8   |             |             |
| 16  |             |             |
| 24  |             |             |
| 30  |             |             |
| 32  |             |             |
| 48  |             |             |

**answer:** Maria's Age = 24, Diego's Age = 8
**fastest_path:** M = 3D and M + 8 = 2(D + 8) → 3D + 8 = 2D + 16 → D = 8, M = 24. Verify: in 8 years, 32 = 2 × 16.
**explanation:** Let M = Maria's current age and D = Diego's current age. Two equations: (1) M = 3D, and (2) M + 8 = 2(D + 8). Substitute (1) into (2): 3D + 8 = 2D + 16 → D = 8, M = 24. Check: in 8 years Maria = 32, Diego = 16, and 32 = 2 × 16. Both conditions satisfied.
**mistake_b:** 16 — Diego's age in 8 years, not his current age; arises from reading the future state for Diego without accounting for Maria's future age.
**mistake_c:** 30 — arises from mistakenly computing M − D = 30 instead of M = 3D.
**mistake_e:** 32 — Maria's age in 8 years, not her current age.
**mistake_f:** 48 — arises from applying "in 8 years" only to Diego: M = 2(D + 8) and M = 3D gives 3D = 2D + 16 → D = 16, M = 48. The error is not adding 8 to Maria's side too.
**common_trap:** Applying "in 8 years" only to one person. Both ages increase by 8 before the 2× relationship is tested.
**takeaway:** Age-in-X-years problems: write both future ages as (current age + X) before setting up the ratio equation.
**related_reading:** reading-di-06-two-part-analysis

---

## Q29
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Percentage: Sequential Discounts

A bookstore sells a novel for $48. During a sale, the price is reduced by 25%. A member then receives an additional $4 off the already-discounted price. Select the dollar amount of the 25% discount (column 1) and the member's final price after both discounts (column 2).

|      | 25% Discount | Final Price |
|------|--------------|-------------|
| $4   |              |             |
| $8   |              |             |
| $12  |              |             |
| $16  |              |             |
| $32  |              |             |
| $36  |              |             |
| $44  |              |             |

**answer:** 25% Discount = $12, Final Price = $32
**fastest_path:** 25% of $48 = $12. Sale price = $36. Member price = $36 − $4 = $32.
**explanation:** Step 1: 25% of $48 = 0.25 × 48 = $12. Step 2: Sale price = $48 − $12 = $36. Step 3: Member price = $36 − $4 = $32.
**mistake_a:** $4 — the coupon value, not the 25% discount amount.
**mistake_b:** $8 — computing 25% of a wrong base (e.g., 25% of $32).
**mistake_d:** $16 — off-by-error; perhaps computing 1/3 of $48 instead of 1/4.
**mistake_f:** $36 — the sale price before the $4 coupon; the coupon step was skipped.
**mistake_g:** $44 — applying only the $4 coupon to the original $48 price, ignoring the 25% discount entirely.
**common_trap:** Stopping at $36 (the sale price) and forgetting the $4 coupon; or applying the $4 coupon first and then taking 25% of $44.
**takeaway:** Sequential discounts: apply in the stated order. First the percentage off the original price; then the flat coupon off the reduced price.
**related_reading:** reading-di-06-two-part-analysis

---

## Q30
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Distance: Two-Leg Trip

A delivery driver travels at 45 miles per hour for 2 hours, then immediately continues at 60 miles per hour for 1.5 hours. Select the distance covered in the first leg of the trip (column 1) and the total trip distance for both legs combined (column 2).

|        | First-Leg Distance | Total Distance |
|--------|--------------------|----------------|
| 45 mi  |                    |                |
| 60 mi  |                    |                |
| 90 mi  |                    |                |
| 120 mi |                    |                |
| 150 mi |                    |                |
| 180 mi |                    |                |

**answer:** First-Leg Distance = 90 mi, Total Distance = 180 mi
**fastest_path:** Leg 1: 45 × 2 = 90 mi. Leg 2: 60 × 1.5 = 90 mi. Total: 180 mi.
**explanation:** Distance = speed × time. Leg 1: 45 mph × 2 hr = 90 miles. Leg 2: 60 mph × 1.5 hr = 90 miles. Both legs cover the same distance by coincidence. Total = 90 + 90 = 180 miles.
**mistake_a:** 45 mi — the speed in mph copied as a distance; units were not converted.
**mistake_b:** 60 mi — Leg 2 speed treated as distance.
**mistake_d:** 120 mi — multiplying 60 mph × 2 hr (applying Leg 2 speed to Leg 1 time).
**mistake_e:** 150 mi — adding speeds (45 + 60 = 105) or another arithmetic slip.
**common_trap:** Confusing speed (miles per hour) with distance (miles). Always compute distance = rate × time for each leg individually before adding.
**takeaway:** Multi-leg distance: compute each leg separately (speed × time), then sum. Never add or average speeds directly to get total distance.
**related_reading:** reading-di-06-two-part-analysis

---

## Q31
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio: Recipe Scaling

A bread recipe uses flour and butter in a ratio of 5:2 by cups. A baker uses 20 cups of flour. Select the cups of butter needed (column 1) and the total cups of flour plus butter combined (column 2).

|      | Cups of Butter | Total Cups |
|------|----------------|------------|
| 4    |                |            |
| 5    |                |            |
| 8    |                |            |
| 10   |                |            |
| 20   |                |            |
| 25   |                |            |
| 28   |                |            |

**answer:** Cups of Butter = 8, Total Cups = 28
**fastest_path:** 20 cups flour = 5 parts → scale factor = 4. Butter = 2 × 4 = 8. Total = 20 + 8 = 28.
**explanation:** Ratio flour:butter = 5:2. Flour = 20 cups represents 5 parts, so one part = 4 cups. Butter = 2 parts = 8 cups. Total = 20 + 8 = 28 cups.
**mistake_a:** 4 — the scale factor (one part = 4 cups), not the butter amount.
**mistake_b:** 5 — the flour ratio number, not the butter amount.
**mistake_d:** 10 — computing 20 ÷ 2 instead of finding the scale factor; treats the ratio as a simple divisor.
**mistake_e:** 20 — the flour quantity copied into the butter column.
**mistake_f:** 25 — adding 20 + 5 (the flour ratio number) instead of computing butter from the scale factor.
**common_trap:** Computing butter = flour ÷ butter-ratio-number (20 ÷ 2 = 10) instead of butter = (butter ratio part) × scale factor (2 × 4 = 8).
**takeaway:** Ratio scaling: find the scale factor by dividing the known quantity by its ratio number, then multiply the other ratio number by that same factor.
**related_reading:** reading-di-06-two-part-analysis

---

## Q32
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Budget: Percentage Split

A student spends 40% of a monthly budget on rent and 15% on food, saving the remainder. If the student saves exactly $270 per month, select the monthly rent in dollars (column 1) and the total monthly budget in dollars (column 2).

|       | Monthly Rent | Monthly Budget |
|-------|--------------|----------------|
| $180  |              |                |
| $240  |              |                |
| $270  |              |                |
| $360  |              |                |
| $600  |              |                |
| $675  |              |                |

**answer:** Monthly Rent = $240, Monthly Budget = $600
**fastest_path:** Savings = 100% − 40% − 15% = 45%. Budget = $270 ÷ 0.45 = $600. Rent = 40% × $600 = $240.
**explanation:** Spending fractions: 40% rent + 15% food = 55%. Savings = 45% of budget. Since savings = $270: budget = $270 ÷ 0.45 = $600. Rent = 0.40 × $600 = $240.
**mistake_a:** $180 — computing 30% of $600; wrong rent percentage.
**mistake_c:** $270 — reading the savings amount into the rent column.
**mistake_d:** $360 — computing 60% of $600; treating the entire non-savings share as rent.
**mistake_f:** $675 — using the rent percentage to find the budget: $270 ÷ 0.40 = $675; error is applying the rent fraction to savings instead of the savings fraction.
**common_trap:** Dividing savings by the rent percentage (40%) instead of by the savings percentage (45%) to get the total budget.
**takeaway:** Residual-savings problems: compute the savings percentage as 100% minus all spending percentages, then divide savings by that fraction to find the total budget.
**related_reading:** reading-di-06-two-part-analysis

---

## Q33
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Necessary vs Sufficient Conditions

Company policy states: "Any employee who passes both the Technical Certification (TC) and the Communication Workshop (CW) is eligible for promotion." Omar passed the TC but did not complete the CW. A manager concludes: "Therefore, Omar is not eligible for promotion."

From the statements below, identify the conclusion of the manager's argument (column 1) and the statement that, if true, would most directly challenge the manager's reasoning (column 2).

| Statement | Conclusion | Challenges Reasoning |
|-----------|------------|----------------------|
| Omar is not eligible for promotion | | |
| Passing both TC and CW is the only route to promotion in this company | | |
| Omar successfully passed the Technical Certification | | |
| Some employees at the company have been promoted without completing the CW | | |
| Omar did not complete the Communication Workshop | | |

**answer:** Conclusion = "Omar is not eligible for promotion"; Challenges Reasoning = "Some employees at the company have been promoted without completing the CW"
**fastest_path:** Conclusion = the "therefore" claim. The argument treats a sufficient condition as necessary. Statement D shows an alternate promotion path exists, breaking the necessary-condition assumption.
**explanation:** The conclusion is the claim after "therefore": Omar is not eligible. The policy provides a *sufficient* condition (pass both → eligible) but does not state it is the *only* path. The manager implicitly treats passing both as *necessary*. Statement D directly undermines that assumption by showing employees have been promoted without the CW — the CW is therefore not a necessary requirement, and Omar could still be eligible through another path.
**mistake_b:** "Passing both is the only route" is the *assumption the argument relies on*, not a challenge to it. It would validate the reasoning, not attack it.
**mistake_c:** A stated premise (Omar passed the TC), not the conclusion or a challenge.
**mistake_e:** A stated premise (Omar didn't complete the CW), not the conclusion.
**common_trap:** Picking statement B as the "challenge" — it is actually the hidden assumption that *supports* the argument. A challenge must show the assumption is false, not restate it.
**takeaway:** "If A then B" gives a sufficient condition, not a necessary one. A challenge to such an argument shows B can occur without A, invalidating the implicit necessary-condition claim.
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Weaken

A restaurant manager argues: "Our new menu reduced average dining time from 72 to 58 minutes. Shorter dining times increase table turnover, so our revenue per hour should increase."

From the statements below, identify the statement that most strengthens the manager's conclusion (column 1) and the statement that, if true, most weakens it (column 2).

| Statement | Strengthens | Weakens |
|-----------|-------------|---------|
| A comparable restaurant that cut dining time by 12 minutes saw a 10% increase in hourly revenue | | |
| Customer satisfaction scores fell after the new menu launched | | |
| The new menu items are priced, on average, 15% lower than the items they replaced | | |
| Peak-hour seating is consistently full under the old menu, with a waitlist of customers | | |
| The kitchen now requires 5 extra minutes to prepare new menu items than old ones | | |

**answer:** Strengthens = "A comparable restaurant that cut dining time by 12 minutes saw a 10% increase in hourly revenue"; Weakens = "The new menu items are priced, on average, 15% lower than the items they replaced"
**fastest_path:** Strengthen = causal precedent linking shorter dining time to higher revenue. Weaken = lower price per cover may offset turnover gains.
**explanation:** The manager's chain: shorter dining time → higher turnover → higher revenue per hour. Statement A provides direct precedent evidence for that exact chain. Statement C attacks the revenue step: if each table generates 15% less per meal, faster turnover may not overcome the per-cover revenue drop. Statement D (consistent waitlist) actually supports the argument — unmet demand means faster turnover can be converted into more covers served, boosting revenue. Statement E (longer kitchen prep) is an execution risk but doesn't directly undermine the revenue per hour calculation.
**mistake_b:** Lower satisfaction may harm future business but does not directly counter the revenue-per-hour claim.
**mistake_d:** A consistent waitlist is a strengthener (confirms there is demand to fill the extra turnover), not a weakener.
**mistake_e:** Longer kitchen prep is an indirect operational constraint, not a direct revenue argument.
**common_trap:** Picking D as the weakener because "the restaurant is already full" — being full with a waitlist means faster turnover directly translates to more customers served, which supports the revenue claim.
**takeaway:** Revenue arguments require attacking the revenue calculation (price × covers) to weaken. A parallel-case causal study with the stated outcome is typically the strongest strengthener.
**related_reading:** reading-di-06-two-part-analysis

---

## Q35
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Break-Even Analysis

A company sells a product for $60 per unit. Fixed costs are $9,000 per month and variable costs are $24 per unit. The company is evaluating an efficiency program that would reduce variable costs to $20 per unit but requires an additional $1,200 per month in fixed costs. Select the current break-even quantity in units (column 1) and the break-even quantity after implementing the efficiency program (column 2).

|      | Current BEQ | Program BEQ |
|------|-------------|-------------|
| 225  |             |             |
| 240  |             |             |
| 250  |             |             |
| 255  |             |             |
| 270  |             |             |
| 340  |             |             |

**answer:** Current BEQ = 250, Program BEQ = 255
**fastest_path:** Current CM = 60 − 24 = 36. BEQ = 9,000 ÷ 36 = 250. New CM = 60 − 20 = 40. New fixed = 10,200. BEQ = 10,200 ÷ 40 = 255.
**explanation:** Break-even quantity = Fixed Costs ÷ Contribution Margin. Current: CM = $60 − $24 = $36. BEQ = $9,000 ÷ $36 = 250 units. After efficiency program: CM = $60 − $20 = $40. Fixed costs = $9,000 + $1,200 = $10,200. BEQ = $10,200 ÷ $40 = 255 units. Despite a higher contribution margin, the program slightly raises the break-even quantity because the fixed-cost increase outweighs the variable-cost savings at low production volumes.
**mistake_a:** 225 — applying the new CM ($40) to the old fixed costs ($9,000): 9,000 ÷ 40 = 225. Error: fixed costs also increase under the program.
**mistake_b:** 240 — a plausible slip from using wrong fixed-cost or CM values.
**mistake_e:** 270 — a slip from applying old variable cost or incorrect combination of new figures.
**mistake_f:** 340 — using an incorrect CM (e.g., $30) with the new fixed costs: 10,200 ÷ 30 = 340.
**common_trap:** Using the new CM but forgetting to add the $1,200 fixed-cost increase; or adding the fixed-cost increase but forgetting to update the CM. Both must be updated simultaneously.
**takeaway:** Break-even recomputation: update *both* the contribution margin (price minus new variable cost) and total fixed costs before dividing. A lower variable cost does not automatically lower break-even if fixed costs also rise.
**related_reading:** reading-di-06-two-part-analysis

---

## Q36
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Percentage Change: Working Backward

A company's revenue grew 20% from Year 1 to Year 2, then grew an additional 25% from Year 2 to Year 3. Year 3 revenue is $600,000. Select the Year 2 revenue (column 1) and the Year 1 revenue (column 2).

|           | Year 2 Revenue | Year 1 Revenue |
|-----------|----------------|----------------|
| $360,000  |                |                |
| $400,000  |                |                |
| $450,000  |                |                |
| $480,000  |                |                |
| $500,000  |                |                |
| $600,000  |                |                |

**answer:** Year 2 Revenue = $480,000, Year 1 Revenue = $400,000
**fastest_path:** Year 2 = $600,000 ÷ 1.25 = $480,000. Year 1 = $480,000 ÷ 1.20 = $400,000.
**explanation:** To reverse a percentage growth, divide by (1 + rate). Year 2 × 1.25 = Year 3 → Year 2 = $600,000 ÷ 1.25 = $480,000. Year 1 × 1.20 = Year 2 → Year 1 = $480,000 ÷ 1.20 = $400,000.
**mistake_a:** $360,000 — chaining the subtraction error: 450,000 × 0.80 = $360,000 (subtracting 20% from the already-wrong Year 2 value).
**mistake_c:** $450,000 — computing Year 2 as $600,000 × 0.75 = $450,000 instead of dividing by 1.25; the classic "subtract the percentage" error.
**mistake_e:** $500,000 — an arithmetic guess between the correct values.
**mistake_f:** $600,000 — copying Year 3 revenue into a Year 2 or Year 1 column.
**common_trap:** "Reversing a 25% growth" by subtracting 25%: $600,000 × 0.75 = $450,000. Wrong because 25% growth means ×1.25; reversal requires ÷1.25, not ×0.75.
**takeaway:** Reversing percentage growth: divide by (1 + rate), never subtract the percentage from the later value. Percent × base ≠ the inverse of the growth operation.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Work Rate: Partial Contribution

Priya, Quinn, and Rosa can each complete a report working alone in 6, 8, and 12 hours respectively. All three begin working together. Quinn stops after 2 hours and does not return; Priya and Rosa continue until the report is finished. Select the fraction of the report Quinn completes (column 1) and the total time in hours from start to finish (column 2).

|         | Quinn's Fraction | Total Time |
|---------|-----------------|------------|
| 1/6     |                 |            |
| 1/4     |                 |            |
| 1/3     |                 |            |
| 3/8     |                 |            |
| 2 hrs   |                 |            |
| 3 hrs   |                 |            |
| 4 hrs   |                 |            |
| 4.8 hrs |                 |            |

**answer:** Quinn's Fraction = 1/4, Total Time = 3 hrs
**fastest_path:** Combined rate (all 3): 1/6 + 1/8 + 1/12 = 9/24 = 3/8 per hr. Quinn individual rate = 1/8. Quinn's 2-hr fraction = 2 × 1/8 = 1/4. Work done by all three in 2 hrs = 3/4. Remaining: 1/4. Priya + Rosa rate = 1/6 + 1/12 = 1/4 per hr. Time for remaining: 1 hr. Total = 3 hrs.
**explanation:** Step 1: Combined rate all three: 1/6 + 1/8 + 1/12. LCM = 24: 4/24 + 3/24 + 2/24 = 9/24 = 3/8 report/hr. In 2 hours, all three complete 2 × 3/8 = 3/4 of the report. Step 2: Quinn's individual contribution: 2 hr × (1/8 per hr) = 1/4. Step 3: Remaining work = 1 − 3/4 = 1/4. Step 4: Priya + Rosa rate = 1/6 + 1/12 = 2/12 + 1/12 = 1/4 per hr. Time = (1/4) ÷ (1/4) = 1 hr. Total = 2 + 1 = 3 hrs.
**mistake_a:** 1/6 — Priya's hourly rate assigned to Quinn by column confusion.
**mistake_d:** 3/8 — the combined three-person rate per hour; this is a rate, not Quinn's fraction of the finished work.
**mistake_e:** 2 hrs — the time Quinn works, not the total completion time.
**mistake_h:** 4.8 hrs — from using Priya's solo rate (1/6) for the remaining work: (1/4) ÷ (1/6) = 3/2 hrs added to 2 = 3.5 hrs, or another slip on the remaining rate.
**common_trap:** Using the combined 3-person rate to compute Quinn's fraction (2 × 3/8 = 3/4) instead of Quinn's individual rate (2 × 1/8 = 1/4). Each worker contributes only their personal share.
**takeaway:** Partial-work problems: each worker's contribution = their individual rate × time worked. The combined rate applies only when all workers are present simultaneously.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Score Target: Working Forward

A student scored 78, 84, and 90 on three equally weighted exams. Select the current three-exam average (column 1) and the minimum score the student needs on a fourth equally weighted exam to achieve a four-exam average of exactly 85 (column 2).

|     | Three-Exam Average | Minimum 4th Score |
|-----|--------------------|-------------------|
| 78  |                    |                   |
| 80  |                    |                   |
| 84  |                    |                   |
| 85  |                    |                   |
| 86  |                    |                   |
| 88  |                    |                   |
| 90  |                    |                   |
| 92  |                    |                   |

**answer:** Three-Exam Average = 84, Minimum 4th Score = 88
**fastest_path:** Sum = 78 + 84 + 90 = 252. Average = 252 ÷ 3 = 84. Required total for 85 average = 85 × 4 = 340. Needed: 340 − 252 = 88.
**explanation:** Current sum: 78 + 84 + 90 = 252. Average = 252 ÷ 3 = 84. To achieve a four-exam average of 85, the required total = 85 × 4 = 340. Minimum 4th score = 340 − 252 = 88.
**mistake_a:** 78 — the first exam score copied into the average column.
**mistake_b:** 80 — a rough intuition-based guess at the average.
**mistake_d:** 85 — the target average read into the current average column.
**mistake_e:** 86 — possibly from computing gap = 85 − 84 = 1, then multiplying by 4 and adding to 84: 84 + 4 = 88, not 86; or an off-by-one slip.
**mistake_g:** 90 — the highest individual score, not the average.
**mistake_h:** 92 — from using an incorrect sum (e.g., 248 instead of 252).
**common_trap:** Subtracting the current average from the target (85 − 84 = 1) and concluding the 4th exam needs only to be 1 point above average. The gap must be multiplied by the number of exams to find the required extra total.
**takeaway:** Score-target problems: required total = target average × number of scores; needed score = required total minus current sum.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Proportional Scaling

A bakery produces white, whole wheat, and sourdough bread in a ratio of 5:3:2 by number of loaves. Current total daily production is 400 loaves. Production will increase to 600 loaves per day while maintaining the same ratio. Select the new daily production of whole wheat bread (column 1) and the increase in sourdough loaves per day compared with the current level (column 2).

|      | New Whole Wheat | Sourdough Increase |
|------|-----------------|--------------------|
| 30   |                 |                    |
| 40   |                 |                    |
| 60   |                 |                    |
| 80   |                 |                    |
| 120  |                 |                    |
| 150  |                 |                    |
| 180  |                 |                    |
| 200  |                 |                    |

**answer:** New Whole Wheat = 180, Sourdough Increase = 40
**fastest_path:** 10 parts total. Old sourdough = (2/10) × 400 = 80. New whole wheat = (3/10) × 600 = 180. New sourdough = (2/10) × 600 = 120. Increase = 120 − 80 = 40.
**explanation:** Ratio 5:3:2 sums to 10 parts. Current (400 loaves): whole wheat = 3/10 × 400 = 120; sourdough = 2/10 × 400 = 80. New (600 loaves): whole wheat = 3/10 × 600 = 180; sourdough = 2/10 × 600 = 120. Sourdough increase = 120 − 80 = 40. Column 2 asks for the *increase*, not the new total.
**mistake_c:** 60 — applying the ratio to the production *increase* (200 loaves): 3/10 × 200 = 60; applies the ratio fraction to the change rather than the new total.
**mistake_d:** 80 — the current sourdough level; confuses the current level with the increase.
**mistake_e:** 120 — the new sourdough total; confuses the new level with the increase.
**mistake_f:** 150 — 5/10 × 300 or a slip applying the white-bread fraction.
**mistake_h:** 200 — the raw total production increase (600 − 400), without applying the sourdough ratio fraction.
**common_trap:** Reading "increase in sourdough" as the new sourdough total (120) rather than the difference from the old level (120 − 80 = 40).
**takeaway:** Proportional scaling: apply the ratio fraction to the *total* at each level; when asked for a change, compute new-total-value minus old-total-value for that component.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Programming

A factory produces two products. Each unit of Product P requires 3 hours of machining and 2 hours of finishing; each unit of Product Q requires 1 hour of machining and 4 hours of finishing. The factory has at most 300 machining hours and at most 400 finishing hours per week. Product P yields $200 profit per unit; Product Q yields $150 per unit. The factory must produce at least 20 units of Product Q per week. Select the number of units of Product P that maximizes total weekly profit (column 1) and the corresponding maximum weekly profit (column 2).

| Value     | Units of P | Max Weekly Profit |
|-----------|------------|-------------------|
| 60 units  |            |                   |
| 80 units  |            |                   |
| 93 units  |            |                   |
| 100 units |            |                   |
| $15,000   |            |                   |
| $21,600   |            |                   |
| $25,000   |            |                   |
| $28,000   |            |                   |

**answer:** Units of P = 80 units, Max Weekly Profit = $25,000
**fastest_path:** Intersect 3p + q = 300 and p + 2q = 200 (finishing ÷ 2) → q = 60, p = 80. q ≥ 20 ✓. Profit = 200(80) + 150(60) = $25,000. Corner at q = 20 gives $21,600 — lower.
**explanation:** Constraints: 3p + q ≤ 300 (machining); 2p + 4q ≤ 400 → p + 2q ≤ 200 (finishing); q ≥ 20; p ≥ 0. Maximize 200p + 150q. The maximum of a linear objective over a convex polygon occurs at a corner. Evaluate key corners: (1) Intersection of machining and finishing constraints: from p + 2q = 200, p = 200 − 2q. Substitute into 3p + q = 300: 3(200 − 2q) + q = 300 → 600 − 5q = 300 → q = 60, p = 80. Check q ≥ 20 ✓. Profit = 200(80) + 150(60) = $25,000. (2) Corner at q = 20, machining binding: 3p = 280 → p ≈ 93. Profit = 200(93) + 150(20) = $21,600. (3) Corner at p = 0, finishing binding: q = 100. Profit = $15,000. Global maximum: $25,000 at p = 80, q = 60.
**mistake_a:** 60 units — the value of q at the optimal point; columns are swapped.
**mistake_c:** 93 units — from maximizing p at the q = 20 boundary only; the constraint-intersection corner (p = 80) produces higher profit.
**mistake_d:** 100 units — infeasible; violates the machining constraint.
**mistake_e:** $15,000 — profit at p = 0, q = 100; this corner has the lowest profit.
**mistake_f:** $21,600 — profit at the q = 20, machining-binding corner; a local optimum on that edge, not the global maximum.
**mistake_h:** $28,000 — exceeds the feasible maximum; no valid (p, q) pair achieves this.
**common_trap:** Equating "maximizing product P" with "maximizing profit" — more P units at the q = 20 boundary (93 units) produces less profit than p = 80 because the mix shifts away from the profitable constraint intersection.
**takeaway:** Linear programming: enumerate all feasible corner points (constraint intersections + boundaries), compute the objective function at each, and select the maximum. More of the high-price product is not always optimal.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Complex Causal Argument

A policy analyst argues: "Cities that implemented the transit subsidy program saw a 15% reduction in car trips. Since car trips cause traffic congestion, implementing the transit subsidy should reduce congestion across all cities."

From the statements below, identify the statement that provides the strongest evidence of a flaw in the analyst's reasoning (column 1) and the statement that most strengthens the universal recommendation (column 2).

| Statement | Flaw Evidence | Strengthens |
|-----------|---------------|-------------|
| All cities that adopted the transit subsidy did so voluntarily; cities that declined may have had systematically different traffic patterns | | |
| A randomized controlled trial across 40 diverse cities found transit subsidies reduced car trips 13–17% regardless of population density or road infrastructure | | |
| The 15% car-trip reduction was measured only on weekday mornings, not on evenings or weekends | | |
| Transit subsidies are substantially more effective in cities with already-high public transit usage | | |
| Every city in the study had simultaneously launched road-infrastructure improvement projects that may have independently reduced car trips | | |

**answer:** Flaw Evidence = "All cities that adopted the transit subsidy did so voluntarily; cities that declined may have had systematically different traffic patterns"; Strengthens = "A randomized controlled trial across 40 diverse cities found transit subsidies reduced car trips 13–17% regardless of population density or road infrastructure"
**fastest_path:** Flaw = self-selection bias: adopting cities are not representative of "all cities." Strengthens = RCT across diverse cities eliminates selection bias and supports the universal recommendation.
**explanation:** The conclusion claims the subsidy should work "across all cities." Statement A identifies self-selection bias: cities that volunteered for the program may already be favorable (high transit demand, political support), so the 15% reduction may not generalize to cities that never adopted it. This directly attacks the "all cities" scope of the conclusion. Statement E (confounding infrastructure projects) attacks whether the subsidy *caused* the reduction — also a flaw, but it does not address generalizability; A is more precisely targeted at the "all cities" claim. Statement B (RCT across diverse cities) eliminates both confounding and selection bias simultaneously, directly supporting universal implementation. Statement D (only works in high-transit cities) is a weakener of the universal claim, not a strengthener.
**mistake_c:** Measuring only weekday mornings is a scope limitation, not a flaw in causal or generalizability reasoning.
**mistake_d:** If subsidies work better in high-transit cities, that is a weakener of the universal claim, not a strengthener.
**mistake_e:** Infrastructure confound (E) attacks causation but not generalizability; A is more targeted at the "all cities" conclusion.
**common_trap:** Choosing E as the flaw because confounding is a familiar reasoning error — but the conclusion's key vulnerability is the "all cities" generalization, which is attacked most precisely by self-selection bias (A).
**takeaway:** Match flaw type to conclusion scope. "All X" claims are attacked by sampling/generalizability flaws; causal claims are attacked by confounds. Identify which aspect of the conclusion is most exposed before selecting.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Simple Interest: Split Principal

An investor places a total of $10,000 in two accounts. Account M earns 5% per year in simple interest; Account N earns 4% per year in simple interest. After exactly 2 years, the combined value of both accounts is $10,850. Select the amount originally placed in Account M (column 1) and the total interest earned across both accounts over the 2-year period (column 2).

|         | Amount in M | Total Interest |
|---------|-------------|----------------|
| $800    |             |                |
| $850    |             |                |
| $900    |             |                |
| $1,000  |             |                |
| $2,500  |             |                |
| $5,000  |             |                |
| $7,500  |             |                |

**answer:** Amount in M = $2,500, Total Interest = $850
**fastest_path:** 2-year factors: M = 1.10, N = 1.08. Equation: 1.10m + 1.08(10,000 − m) = 10,850 → 0.02m = 50 → m = 2,500. Interest = 10,850 − 10,000 = $850.
**explanation:** Simple interest for 2 years: Account M grows by factor (1 + 0.05 × 2) = 1.10; Account N by (1 + 0.04 × 2) = 1.08. Let m = amount in M; then 10,000 − m is in N. Combined value: 1.10m + 1.08(10,000 − m) = 10,850. Expanding: 1.10m + 10,800 − 1.08m = 10,850 → 0.02m = 50 → m = $2,500. Amount in N = $7,500. Total interest = $10,850 − $10,000 = $850. Cross-check: M earns $2,500 × 0.10 = $250; N earns $7,500 × 0.08 = $600; total = $850. ✓
**mistake_a:** $800 — applying N's 2-year rate (8%) to the full $10,000; treats all principal as if it were in N.
**mistake_c:** $900 — applying the average 2-year rate (9%) to the full $10,000.
**mistake_d:** $1,000 — applying M's 2-year rate (10%) to the full $10,000; treats all principal as if it were in M.
**mistake_f:** $5,000 — assuming a 50/50 split; that would produce $5,000 × 1.10 + $5,000 × 1.08 = $10,900 ≠ $10,850.
**mistake_g:** $7,500 — the amount in N, not M; column confusion.
**common_trap:** After solving m = $2,500, selecting $7,500 for column 1 (amount in M) instead of $2,500 because the larger number "feels" like M. Always re-read the column label.
**takeaway:** Two-account simple interest: compute each account's 2-year growth factor (1 + rate × time), set up one equation in one unknown, solve, then compute total interest as final combined value minus original total principal.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Integer Constraints

Two positive integers m and n satisfy n = 3m − 4, and their product mn falls between 100 and 200, inclusive. Select the largest possible value of m (column 1) and the smallest possible value of mn within the valid range (column 2).

| Value | Largest m | Smallest mn |
|-------|-----------|-------------|
| 7     |           |             |
| 8     |           |             |
| 9     |           |             |
| 84    |           |             |
| 119   |           |             |
| 160   |           |             |
| 207   |           |             |

**answer:** Largest m = 8, Smallest mn = 119
**fastest_path:** mn = m(3m − 4). Test: m = 7 → mn = 119 ✓; m = 8 → mn = 160 ✓; m = 9 → mn = 207 > 200 ✗. Largest m = 8. Smallest valid product = 119.
**explanation:** n must be a positive integer, so 3m − 4 > 0 → m ≥ 2. Product mn = m(3m − 4). Evaluate near the boundaries: m = 6 → n = 14, mn = 84 (below 100); m = 7 → n = 17, mn = 119 ✓ (in range); m = 8 → n = 20, mn = 160 ✓ (in range); m = 9 → n = 23, mn = 207 (above 200). Valid m values are {7, 8}. Largest m = 8. Smallest mn within range = 119 (at m = 7).
**mistake_a:** 7 — a valid m value but not the largest; m = 8 also satisfies all constraints.
**mistake_c:** 9 — mn = 207 exceeds 200; out of range.
**mistake_d:** 84 — mn at m = 6; below the lower bound of 100, not a valid product.
**mistake_f:** 160 — mn at m = 8; this is the *largest* valid product, not the smallest.
**mistake_g:** 207 — mn at m = 9; above the upper bound.
**common_trap:** Stopping at m = 7 because it is the first in-range value, without checking m = 8. Always test the candidate on both sides of each boundary before declaring the maximum.
**takeaway:** Integer-constraint problems: express the target quantity as a function of one variable, evaluate at each integer near the range boundaries, check both bounds explicitly, then identify maximum and minimum as required.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry with Quadratic Constraint

A rectangular garden has a perimeter of 60 meters. The length L and the width W are both positive integers, with L strictly greater than W. The area of the garden must be at least 200 square meters. Select the minimum possible integer value of L (column 1) and the width W when L is at its minimum (column 2).

|     | Minimum L | Width W at Min L |
|-----|-----------|------------------|
| 10  |           |                  |
| 12  |           |                  |
| 14  |           |                  |
| 15  |           |                  |
| 16  |           |                  |
| 18  |           |                  |
| 20  |           |                  |

**answer:** Minimum L = 16, Width W at Min L = 14
**fastest_path:** L + W = 30. Area ≥ 200 → L(30 − L) ≥ 200 → L² − 30L + 200 ≤ 0 → roots at 10 and 20, so 10 ≤ L ≤ 20. L > W → L > 15. Integer minimum: L = 16, W = 14.
**explanation:** Step 1: Perimeter 2L + 2W = 60 → L + W = 30 → W = 30 − L. Step 2: Area = L(30 − L) ≥ 200 → 30L − L² ≥ 200 → L² − 30L + 200 ≤ 0. Roots of L² − 30L + 200 = 0: L = [30 ± √(900 − 800)] / 2 = [30 ± 10] / 2 → L = 10 or L = 20. The parabola opens upward, so the inequality holds for 10 ≤ L ≤ 20. Step 3: L > W → L > 30 − L → 2L > 30 → L > 15. Step 4: Combining the area constraint (L ≤ 20) and L > 15 with the integer requirement: valid L ∈ {16, 17, 18, 19, 20}. Minimum L = 16, W = 30 − 16 = 14. Verify: perimeter = 2(16) + 2(14) = 60 ✓; area = 224 ≥ 200 ✓; L > W: 16 > 14 ✓.
**mistake_a:** 10 — a quadratic root satisfying the area constraint, but W = 20 > L = 10 violates L > W.
**mistake_b:** 12 — W = 18 > L = 12; violates L > W.
**mistake_c:** 14 — W = 16 > L = 14; violates L > W.
**mistake_d:** 15 — L = W = 15; fails the *strict* inequality L > W.
**mistake_f:** 18 — valid, but not the minimum; L = 16 is smaller and also satisfies all constraints.
**mistake_g:** 20 — the maximum valid L (at which W = 10), not the minimum.
**common_trap:** Stopping at L = 15 because 15 × 15 = 225 ≥ 200 satisfies the area constraint, without noting that L = 15 and W = 15 fails the strict inequality L > W. The minimum valid integer is L = 16.
**takeaway:** Multi-constraint optimization: solve each constraint for L individually (area → quadratic, L > W → linear), combine the resulting feasible range, then apply the integer requirement to find the boundary value.
