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

---

## Q36
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Simple Interest

A savings account earns 6% per year in simple interest. A deposit of $4,000 is made with no additional deposits or withdrawals. Select the total interest earned after 5 years (column 1) and the account balance at that point (column 2).

|         | Interest earned | Account balance |
|---------|-----------------|-----------------|
| $240    |                 |                 |
| $1,000  |                 |                 |
| $1,200  |                 |                 |
| $1,500  |                 |                 |
| $5,000  |                 |                 |
| $5,200  |                 |                 |

**answer:** Interest = $1,200, Balance = $5,200
**fastest_path:** Simple interest = P × r × t = 4,000 × 0.06 × 5 = 1,200. Balance = 4,000 + 1,200 = 5,200.
**explanation:** Simple interest is calculated only on the original principal. Annual interest = 4,000 × 0.06 = $240. Over 5 years: $240 × 5 = $1,200. The account balance is the principal plus all interest: 4,000 + 1,200 = $5,200. Note that $240 is the one-year interest — a common error is to stop there and use it for the 5-year total.
**mistake_a:** $240 — interest for a single year only; the question asks for 5 years.
**mistake_b:** $1,000 — using 5% instead of 6%: 4,000 × 0.05 × 5 = 1,000.
**mistake_d:** $1,500 — using 7.5% or misreading the rate: 4,000 × 0.075 × 5 = 1,500.
**mistake_e:** $5,000 — adding the wrong interest ($1,000) to the principal; pairs with the 5% rate mistake.
**common_trap:** Forgetting to multiply the annual interest by the number of years — stopping at one year's interest and using it as the total.
**takeaway:** Simple interest = P × r × t. Balance = P + interest. The rate always applies to the original principal, never to accumulated interest.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Age Problem

Currently, Maria is 3 times as old as her daughter Sofia. In 12 years, Maria will be exactly twice as old as Sofia will be at that time. Select Maria's current age (column 1) and Sofia's current age (column 2).

|     | Maria's age | Sofia's age |
|-----|-------------|-------------|
| 6   |             |             |
| 12  |             |             |
| 18  |             |             |
| 24  |             |             |
| 36  |             |             |
| 48  |             |             |

**answer:** Maria = 36, Sofia = 12
**fastest_path:** M = 3S and M+12 = 2(S+12) → 3S+12 = 2S+24 → S = 12, M = 36.
**explanation:** Let S be Sofia's current age and M = 3S be Maria's current age. In 12 years: Maria is M+12 = 3S+12, Sofia is S+12. Condition: 3S+12 = 2(S+12) → 3S+12 = 2S+24 → S = 12. Then M = 36. Verify: currently 36 = 3 × 12 ✓; in 12 years, Maria is 48 and Sofia is 24, and 48 = 2 × 24 ✓.
**mistake_a:** 6 — half of Sofia's correct age; likely halved the ratio or used an incorrect equation setup.
**mistake_c:** 18 — selecting the midpoint between 12 and 24 without solving the system.
**mistake_d:** 24 — Sofia's age in 12 years, not her current age; future-vs-present confusion.
**mistake_f:** 48 — Maria's age in 12 years, not her current age; column confusion between present and future values.
**common_trap:** Confusing current ages with future ages. The future condition constrains current values — always substitute back into the "currently" statement to verify.
**takeaway:** Age problems: express one age as a multiple of the other, then apply the future condition to get a single equation. Verify both conditions at the end.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Consecutive Integers

The sum of three consecutive even integers is 66. Let F be the smallest of the three integers and L be the largest.

Select the value of F (column 1) and the value of L (column 2).

|     | F (smallest) | L (largest) |
|-----|--------------|-------------|
| 18  |              |             |
| 20  |              |             |
| 22  |              |             |
| 24  |              |             |
| 26  |              |             |

**answer:** F = 20, L = 24
**fastest_path:** Three consecutive even integers: F, F+2, F+4. Sum = 3F+6 = 66 → F = 20, L = 24.
**explanation:** Let the three consecutive even integers be F, F+2, and F+4. Their sum: F + (F+2) + (F+4) = 3F + 6 = 66 → 3F = 60 → F = 20. The largest is F+4 = 24. The middle integer is 22. Verify: 20 + 22 + 24 = 66 ✓.
**mistake_a:** 18 — one step below the sequence start; off-by-one at the bottom.
**mistake_c:** 22 — the middle integer, not the smallest.
**mistake_e:** 26 — one step beyond the largest; off-by-one at the top.
**common_trap:** Using consecutive integers (n, n+1, n+2) instead of consecutive EVEN integers (n, n+2, n+4). Consecutive even integers differ by 2, not 1.
**takeaway:** Consecutive even integers: let first = n, then n, n+2, n+4. Their sum = 3n+6. Solving gives the smallest; add 4 for the largest.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Unit Rate

A factory produces 480 units in an 8-hour shift. A newer machine runs at 50% higher output per hour than the original machine. Select the number of units the original machine produces per hour (column 1) and the number of units the newer machine produces per hour (column 2).

|     | Original (units/hr) | Newer (units/hr) |
|-----|---------------------|------------------|
| 40  |                     |                  |
| 60  |                     |                  |
| 80  |                     |                  |
| 90  |                     |                  |
| 120 |                     |                  |

**answer:** Original = 60, Newer = 90
**fastest_path:** Original rate = 480 / 8 = 60. Newer = 60 × 1.5 = 90.
**explanation:** Original machine rate = 480 units / 8 hours = 60 units per hour. The newer machine runs at 50% higher output: 60 × 1.50 = 90 units per hour. Common error: adding 50 instead of multiplying by 1.5, giving 60 + 50 = 110 (not in the table, which signals the error).
**mistake_a:** 40 — dividing 480 by 12 instead of 8; misreading the shift length.
**mistake_c:** 80 — adding a flat 20 units (not a 50% increase) to the original rate.
**mistake_e:** 120 — doubling (100% increase) rather than a 50% increase.
**common_trap:** Treating "50% higher" as "50 units more" rather than "1.5 times as many." Percentage increases are multiplicative, not additive.
**takeaway:** "X% higher" means multiply by (1 + X/100). Unit rate = total output / total time. Apply the percentage to the base rate.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Proportional Scaling

A recipe requires 3 cups of flour and 2 cups of sugar to make 24 cookies. A baker wants to make exactly 48 cookies using the same recipe. Select the cups of flour needed (column 1) and the cups of sugar needed (column 2).

|     | Flour (cups) | Sugar (cups) |
|-----|--------------|--------------|
| 2   |              |              |
| 4   |              |              |
| 6   |              |              |
| 8   |              |              |
| 9   |              |              |

**answer:** Flour = 6, Sugar = 4
**fastest_path:** Scale factor = 48/24 = 2. Flour = 3 × 2 = 6. Sugar = 2 × 2 = 4.
**explanation:** The target batch is 48 cookies versus the original 24 — scale factor = 48/24 = 2. Multiply each ingredient by 2: flour = 3 × 2 = 6 cups, sugar = 2 × 2 = 4 cups. All ingredients scale proportionally.
**mistake_a:** 2 — the original sugar amount placed in the flour column; column swap.
**mistake_b:** 4 — correct for sugar; placing this in the flour column swaps the two answers.
**mistake_d:** 8 — adding 2 cups to each ingredient (additive error) rather than multiplying.
**mistake_e:** 9 — tripling flour (scale factor 3) rather than doubling.
**common_trap:** Swapping the two columns or adding a fixed amount to each ingredient rather than multiplying by the scale factor.
**takeaway:** Proportional scaling: scale factor = desired / original. Multiply every ingredient by the scale factor — nothing else changes.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Simple vs. Compound Interest

An investor places $10,000 into two different accounts for exactly 2 years. Account A pays 10% per year using simple interest. Account B pays 10% per year compounded annually. Select the interest earned by Account A after 2 years (column 1) and the interest earned by Account B after 2 years (column 2).

|         | Account A interest | Account B interest |
|---------|--------------------|--------------------|
| $1,000  |                    |                    |
| $2,000  |                    |                    |
| $2,100  |                    |                    |
| $2,200  |                    |                    |
| $3,310  |                    |                    |

**answer:** Account A = $2,000, Account B = $2,100
**fastest_path:** Simple: 10,000 × 0.10 × 2 = 2,000. Compound: 10,000 × (1.10)² − 10,000 = 12,100 − 10,000 = 2,100.
**explanation:** Simple interest always applies the rate to the original principal: 10,000 × 0.10 × 2 = $2,000. Compound interest applies the rate to the growing balance: Year 1 balance = 11,000; Year 2 balance = 11,000 × 1.10 = 12,100. Interest = 12,100 − 10,000 = $2,100. The $100 difference is interest-on-interest: Year 1 interest ($1,000) itself earns 10% in Year 2 = $100. The compound account always outperforms simple over more than one period.
**mistake_a:** $1,000 — one year's interest only; the question asks for 2 years.
**mistake_d:** $2,200 — using a flat 11% per year on principal (incorrect hybrid).
**mistake_e:** $3,310 — compound interest after 3 years: 10,000 × (1.10)³ − 10,000 = 3,310; wrong time period.
**common_trap:** Using the simple interest formula for the compound account. Both accounts earn the same in Year 1; the difference only appears in Year 2 because compound interest earns on accumulated interest, simple does not.
**takeaway:** Simple interest = P × r × t (always on principal). Compound interest = P × (1+r)^t − P. The gap = "interest on interest" and grows each year.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

An education consultant argues: "Oakwood Academy recently introduced mandatory morning exercise sessions. Within one semester, student test scores rose by an average of 12 points. Since Oakwood is the only school in the district that introduced morning exercise, this improvement must be a result of the exercise program."

From the statements below, identify the central assumption underlying the argument (column 1) and the statement that most weakens the conclusion (column 2).

| Statement                                                                                           | Central Assumption | Most Weakens |
|-----------------------------------------------------------------------------------------------------|--------------------|--------------| 
| No other significant change at Oakwood could explain the score increase                            |                    |              |
| Morning exercise improves blood flow to the brain, which aids concentration                        |                    |              |
| The district standardized its curriculum across all schools during the same semester               |                    |              |
| Oakwood's students previously had below-average physical fitness levels                            |                    |              |
| Test scores at all other schools in the district remained flat during the semester                 |                    |              |

**answer:** Central Assumption = "No other significant change at Oakwood could explain the score increase"; Most Weakens = "The district standardized its curriculum across all schools during the same semester"
**fastest_path:** Causal-from-correlation assumption: nothing else changed. Weaken = supply a simultaneous alternative cause.
**explanation:** The argument moves from "exercise introduced → scores rose" to "exercise caused the rise." That causal leap requires assuming no other simultaneous change explains the gain — this is the unstated structural assumption (row 1). The curriculum standardization (row 3) directly undermines the conclusion: if all schools received new curriculum in the same semester, Oakwood's score rise may reflect the new curriculum, not the exercise. Row 5 (other schools flat) is a strengthener — it rules out district-wide trends as an alternative cause, the opposite of what the weaken column needs.
**mistake_b:** Row 2 — brain blood flow is a plausible mechanism for how exercise might help, but it is not the structural assumption the argument depends on; it is a supporting detail.
**mistake_d:** Row 4 — poor prior fitness makes exercise more plausible to help, but is not the central logical assumption that bridges the causal claim.
**mistake_e:** Row 5 — this strengthens the argument by eliminating a district-wide alternative cause; choosing it as the weakener reverses the direction of evidence.
**common_trap:** Selecting the mechanism (blood flow) as the assumption. Assumptions are structural — they are the unstated premises without which the argument's logic collapses. The mechanism merely explains a pathway; the argument needs "no other cause" to justify the causal conclusion.
**takeaway:** Causal arguments always assume "no alternative cause was active." Weaken a causal claim by introducing a confounder that was simultaneously present; strengthen it by ruling out alternatives.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage Changes

A retailer raised all prices by 20% in January, then reduced all prices by 15% in March. Select the final price expressed as a percentage of the original price (column 1) and the net percentage change from the original to the final price (column 2).

|        | Final as % of original | Net % change |
|--------|------------------------|--------------|
| −5%    |                        |              |
| +2%    |                        |              |
| +5%    |                        |              |
| 95%    |                        |              |
| 102%   |                        |              |
| 105%   |                        |              |

**answer:** Final as % of original = 102%, Net % change = +2%
**fastest_path:** 1.20 × 0.85 = 1.02 → final is 102% of original → net change = +2%.
**explanation:** Apply each change to the updated base. Starting with a $100 item: after 20% increase → $120. After 15% reduction on $120 → $120 × 0.85 = $102. The final price is 102% of the original, a net change of +2%. Key: sequential percentage changes multiply (1.20 × 0.85 = 1.02), never add.
**mistake_c:** +5% and 105% — adding the percentages directly: 20 − 15 = 5. This is the most common error; the 15% reduction applies to the inflated $120 base, not the original $100.
**mistake_a:** −5% and 95% — reversing sign (subtracting 20 − 15 in the wrong direction) or computing a net decrease.
**common_trap:** Computing 20% − 15% = 5% net. Sequential percentage changes are multiplicative. The 15% decrease reduces a base that is already 20% larger, so the net gain is less than 5%.
**takeaway:** Sequential percent changes: multiply the multipliers. (1+a)(1+b) ≠ 1+(a+b) when both a and b are non-zero. The product is always less than the simple sum when one is positive and one is negative.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Combinatorics

A student must choose 2 subjects from the following five: Math, Physics, Chemistry, Biology, and History. From those 2 chosen subjects, the student then selects 1 to study first. Select the number of ways to choose the 2 subjects (column 1) and the total number of distinct ordered study plans (column 2).

|     | Ways to choose 2 | Ordered study plans |
|-----|------------------|---------------------|
| 5   |                  |                     |
| 10  |                  |                     |
| 15  |                  |                     |
| 20  |                  |                     |
| 25  |                  |                     |
| 30  |                  |                     |

**answer:** Ways to choose 2 = 10, Ordered study plans = 20
**fastest_path:** C(5,2) = 10 unordered pairs. Each pair has 2 orderings → 10 × 2 = 20. Equivalently P(5,2) = 5 × 4 = 20.
**explanation:** Choosing 2 subjects from 5 without regard to order: C(5,2) = 5! / (2! × 3!) = 10. For an ordered study plan, which subject is studied first matters: each of the 10 unordered pairs can be arranged in 2 ways → 10 × 2 = 20. Equivalently, P(5,2) = 5 × 4 = 20 counts ordered pairs directly.
**mistake_a:** 5 — counting the number of subjects, not pairs.
**mistake_c:** 15 — C(6,2) or a sum-of-integers error (4+3+2+1 = 10, but student uses 5+4+3+2+1 = 15).
**mistake_d:** 20 — correct for ordered plans; placing this in column 1 treats the unordered choice as ordered.
**mistake_e:** 25 — computing 5 × 5 = 25, sampling with replacement (allowing the same subject twice).
**mistake_f:** 30 — P(6,2) or another off-by-one permutation.
**common_trap:** Using the ordered count (20) for the unordered selection step. Combinations count sets (no order); permutations count sequences (order matters). The two-step structure — choose, then order — separates these clearly.
**takeaway:** Unordered selection of k from n: C(n,k). Ordered: P(n,k) = C(n,k) × k!. When a problem has both a selection step and an ordering step, compute them separately.
**related_reading:** reading-di-06-two-part-analysis

---

## Q45
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Work with Fractional Efficiency

A painter can paint a room in 6 hours working alone. An assistant works at exactly half the painter's efficiency. If the painter and one assistant work together, the job takes T hours. If the painter works simultaneously with three such assistants, the job takes S hours.

Select the value of T (column 1) and the value of S (column 2).

|       | T (painter + 1 assistant) | S (painter + 3 assistants) |
|-------|---------------------------|----------------------------|
| 2.0   |                           |                            |
| 2.4   |                           |                            |
| 3.0   |                           |                            |
| 4.0   |                           |                            |
| 4.8   |                           |                            |
| 6.0   |                           |                            |

**answer:** T = 4.0, S = 2.4
**fastest_path:** Painter: 1/6/hr. Assistant: 1/12/hr. T = 1/(1/6+1/12) = 1/(3/12) = 4. S = 1/(1/6+3/12) = 1/(5/12) = 2.4.
**explanation:** Painter's rate: 1/6 room per hour. Each assistant's rate = half the painter's = 1/12 room per hour. For T (painter + 1 assistant): combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4. T = 4 hours. For S (painter + 3 assistants): combined rate = 1/6 + 3 × (1/12) = 2/12 + 3/12 = 5/12. S = 12/5 = 2.4 hours.
**mistake_a:** 2.0 — confusing 3 assistants with tripling the painter; 6/3 = 2, ignoring the fractional efficiency.
**mistake_c:** 3.0 — thinking one half-speed helper halves the job time: 6/2 = 3. Incorrect; a helper at half efficiency adds half the painter's rate, which cuts less than half the time.
**mistake_e:** 4.8 — arithmetic slip in the 3-assistant case; possibly doubling 2.4 instead of computing from rates.
**mistake_f:** 6.0 — painter's solo time; helpers ignored entirely.
**common_trap:** Halving the time when a half-speed helper joins. Rates add; the combined time depends on the sum of rates, not a simple division of the original time.
**takeaway:** Parallel work: add individual rates. "Half efficiency" = half the rate (1/12), not half the solo time (3 hr). Combined time = 1 / (sum of rates).
**related_reading:** reading-di-06-two-part-analysis

---

## Q46
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Modular Arithmetic

When positive integer n is divided by 7, the remainder is 3. Select the remainder when 2n is divided by 7 (column 1) and the remainder when n² is divided by 7 (column 2).

|     | Remainder of 2n ÷ 7 | Remainder of n² ÷ 7 |
|-----|---------------------|----------------------|
| 0   |                     |                      |
| 1   |                     |                      |
| 2   |                     |                      |
| 3   |                     |                      |
| 4   |                     |                      |
| 6   |                     |                      |

**answer:** Remainder of 2n ÷ 7 = 6, Remainder of n² ÷ 7 = 2
**fastest_path:** n ≡ 3 (mod 7). 2n ≡ 6 (mod 7). n² ≡ 9 ≡ 2 (mod 7).
**explanation:** Write n = 7q + 3 for some non-negative integer q. Then 2n = 14q + 6 = 7(2q) + 6, so the remainder when 2n is divided by 7 is 6. For n²: (7q + 3)² = 49q² + 42q + 9 = 7(7q² + 6q + 1) + 2, so the remainder is 2. Shortcut: work directly with the remainder — since n ≡ 3 (mod 7), substitute 3 for n: 2×3 = 6 (less than 7, remainder = 6); 3² = 9, and 9 − 7 = 2 (remainder = 2).
**mistake_b:** 1 — arithmetic slip when reducing 9 mod 7, e.g., subtracting 8 instead of 7.
**mistake_c:** 2 — correct for n² but placed in the 2n column; column swap.
**mistake_d:** 3 — the original remainder, incorrectly carried forward to both expressions.
**mistake_e:** 4 — doubling the remainder then subtracting 2 instead of reducing mod 7 correctly.
**common_trap:** Doubling or squaring the original remainder but forgetting to reduce mod 7 afterward. After any operation on remainders, always check whether the result is ≥ 7 and subtract 7 if so.
**takeaway:** Modular arithmetic shortcut: replace n with its remainder (here, 3) and evaluate the expression numerically. Then reduce the result mod 7. This works because (a + 7k) ≡ a (mod 7) for any integer k.
**related_reading:** reading-di-06-two-part-analysis

---

## Q47
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Contribution Margin and Net Profit

A company sells Product X at $80 per unit. Each unit costs $50 to produce. Monthly fixed costs are $4,500. In October, the company sold 250 units. Select the total contribution margin for October (column 1) and the net profit or loss for October (column 2).

|          | Contribution margin | Net profit / (loss) |
|----------|---------------------|----------------------|
| $3,000   |                     |                      |
| $4,500   |                     |                      |
| $7,500   |                     |                      |
| $12,500  |                     |                      |
| $15,500  |                     |                      |
| $20,000  |                     |                      |

**answer:** Contribution margin = $7,500, Net profit = $3,000
**fastest_path:** CM/unit = 80 − 50 = 30. Total CM = 30 × 250 = 7,500. Net = 7,500 − 4,500 = 3,000.
**explanation:** Contribution margin per unit = selling price − variable cost = 80 − 50 = $30. Total contribution margin = $30 × 250 = $7,500 (the pool available to cover fixed costs). Net profit = total contribution margin − fixed costs = 7,500 − 4,500 = $3,000.
**mistake_a:** $3,000 — correct for net profit; selecting this for column 1 confuses the two measures.
**mistake_b:** $4,500 — monthly fixed costs mistakenly treated as the profit figure.
**mistake_d:** $12,500 — using variable cost per unit as the selling price: 250 × 50 = 12,500; wrong base.
**mistake_e:** $15,500 — revenue minus fixed costs only: 80 × 250 − 4,500 = 15,500; variable costs omitted.
**mistake_f:** $20,000 — total revenue only: 80 × 250; no costs subtracted.
**common_trap:** Stopping after one cost layer. The correct sequence is: revenue → subtract variable costs → contribution margin → subtract fixed costs → net profit.
**takeaway:** Contribution margin = revenue − variable costs. Net profit = contribution margin − fixed costs. Two distinct layers; confusing them mis-states both figures.
**related_reading:** reading-di-06-two-part-analysis

---

## Q48
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Mixed Interest (Compound + Simple)

$12,000 is divided between two accounts. Account P earns 10% annual interest compounded annually. Account Q earns 6% annual simple interest. After exactly 2 years, the combined interest from both accounts totals $1,944. Determine the amount placed in Account P (column 1) and the amount placed in Account Q (column 2).

|          | Account P | Account Q |
|----------|-----------|-----------|
| $3,000   |           |           |
| $4,800   |           |           |
| $5,600   |           |           |
| $6,400   |           |           |
| $7,200   |           |           |
| $9,000   |           |           |

**answer:** Account P = $5,600, Account Q = $6,400
**fastest_path:** 2-yr compound factor = 0.21; 2-yr simple factor = 0.12. Set 0.21p + 0.12(12,000−p) = 1,944 → 0.09p = 504 → p = 5,600.
**explanation:** Account P (compound, 10%, 2 yr): interest factor = (1.10)² − 1 = 0.21. Account Q (simple, 6%, 2 yr): interest factor = 0.06 × 2 = 0.12. Using p + q = 12,000 and 0.21p + 0.12q = 1,944, substitute q = 12,000 − p: 0.21p + 0.12(12,000 − p) = 1,944 → 0.21p + 1,440 − 0.12p = 1,944 → 0.09p = 504 → p = 5,600. Then q = 6,400. Verify: 5,600 × 0.21 = 1,176; 6,400 × 0.12 = 768; 1,176 + 768 = 1,944 ✓.
**mistake_b:** $4,800 — using 0.20 instead of 0.21 for the compound factor (off by 0.01 from the actual (1.10)² − 1).
**mistake_e:** $7,200 — arithmetic slip in the final division step (0.09p = 648 instead of 504).
**mistake_f:** $9,000 — assuming the higher-rate account gets the larger share; the revenue equation actually forces more into the lower-rate account.
**common_trap:** Using 20% instead of 21% for the two-year compound factor. (1.10)² − 1 = 1.21 − 1 = 0.21, not 0.20. Compound interest over 2 years at 10% slightly exceeds 2 × 10%.
**takeaway:** Two-year compound factor = (1+r)² − 1 = 2r + r². Set up the combined interest equation using both factors before substituting; the $1 difference in factors changes the answer by hundreds of dollars.
**related_reading:** reading-di-06-two-part-analysis

---

## Q49
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Digit Problem

A two-digit positive integer N has two properties: (1) when its digits are reversed, the resulting number exceeds N by exactly 27; (2) the sum of the two digits of N equals 9. Let T be the tens digit of N and U be the units digit.

Select the value of T (column 1) and the value of U (column 2).

|     | Tens digit T | Units digit U |
|-----|--------------|---------------|
| 1   |              |               |
| 2   |              |               |
| 3   |              |               |
| 4   |              |               |
| 5   |              |               |
| 6   |              |               |

**answer:** T = 3, U = 6
**fastest_path:** Reversed > N → U > T. Reversed difference = 9(U−T) = 27 → U−T = 3. T+U = 9. Solve: U = 6, T = 3.
**explanation:** Write N = 10T + U. Reversed number = 10U + T. Condition (1): (10U + T) − (10T + U) = 27 → 9(U − T) = 27 → U − T = 3. Condition (2): T + U = 9. Adding the two equations: 2U = 12 → U = 6. Then T = 3. N = 36. Check: reversed = 63; 63 − 36 = 27 ✓; 3 + 6 = 9 ✓.
**mistake_b:** T = 2, U = 7 — digit sum = 9 ✓, but reversed difference = 9(7−2) = 45 ≠ 27 ✗.
**mistake_d:** T = 4, U = 5 — digit sum = 9 ✓, but reversed difference = 9(5−4) = 9 ≠ 27 ✗.
**mistake_f:** T = 6, U = 3 — column swap; N = 63, and the reversed number (36) is 27 less than 63, not more. The problem states the reversed number exceeds N, so T < U, meaning N = 36.
**common_trap:** Swapping T and U: N = 63 has the reversed number smaller, not larger. The "reversed number exceeds N" condition forces T < U, pinning N = 36 as the unique answer.
**takeaway:** For a two-digit number, (reversed) − (original) = 9(U − T). Use this to find U − T quickly from the given difference, then pair with the digit-sum equation to solve the 2×2 system.
**related_reading:** reading-di-06-two-part-analysis

---

## Q50
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Experimental Design and Causal Validity

A pharmaceutical company announces: "In our clinical trial, 78% of patients who took our drug showed symptom reduction. Only 45% of patients who took the placebo showed reduction. Therefore, our drug is effective at treating this condition."

From the statements below, select the one that most strengthens the company's conclusion (column 1) and the one that identifies the most significant flaw limiting the conclusion's validity (column 2).

| Statement                                                                                                                       | Most Strengthens | Most Significant Flaw |
|---------------------------------------------------------------------------------------------------------------------------------|------------------|-----------------------|
| The trial used random assignment, and neither patients nor physicians knew who received the drug or the placebo                 |                  |                       |
| The company that manufactures the drug also funded and conducted the trial without independent oversight                        |                  |                       |
| Trial participants were exclusively patients aged 20 to 35, while the condition primarily affects patients over age 60          |                  |                       |
| The drug produced mild headaches in 15% of trial participants                                                                   |                  |                       |
| A separate independent research team replicated the study and found a 31-percentage-point improvement                          |                  |                       |

**answer:** Most Strengthens = "The trial used random assignment, and neither patients nor physicians knew who received the drug or the placebo"; Most Significant Flaw = "Trial participants were exclusively patients aged 20 to 35, while the condition primarily affects patients over age 60"
**fastest_path:** Strengthen = double-blind RCT (best internal validity). Flaw = unrepresentative sample (fatal external validity problem).
**explanation:** A double-blind randomized controlled trial (row 1) is the gold standard: random assignment eliminates self-selection bias, and blinding eliminates expectation effects. This most directly supports the causal conclusion. The most significant flaw (row 3) is external validity — the trial enrolled only 20-35-year-olds while the condition primarily affects those over 60. Concluding the drug "is effective at treating this condition" overstates what the data can support. Row 2 (funding conflict) raises credibility concerns but doesn't constitute a structural methodological flaw in the stated data. Row 5 strengthens further but is already a secondary endorsement once row 1 establishes the primary methodology.
**mistake_b:** Row 2 — conflict of interest is a credibility concern, not a formal flaw in the trial design itself; it motivates skepticism but does not identify a logical gap in the stated methodology.
**mistake_d:** Row 4 — side effects bear on safety, not efficacy; irrelevant to whether the drug reduces symptoms.
**mistake_e:** Row 5 — independent replication strengthens the conclusion; selecting this as a flaw reverses the direction of evidence.
**common_trap:** Choosing funding bias (row 2) as the most significant flaw. Bias is a concern about result accuracy, not a structural limitation on who the conclusion applies to. The sampling restriction (row 3) is a categorical gap: the trial simply cannot support conclusions about patients it never studied.
**takeaway:** Internal validity = was the within-trial comparison fair? (randomization, blinding). External validity = does the sample represent the target population? Sampling restrictions are the most common external validity flaw — the conclusion's scope must not exceed the trial's sample.
**related_reading:** reading-di-06-two-part-analysis

---

## Q51
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Constrained Area Optimization

A farmer has 120 meters of fencing to enclose a rectangular garden. One side of the garden runs along a barn wall and requires no fencing. The remaining three sides must be fully fenced. Select the width W in meters — the dimension perpendicular to the barn — that maximizes the enclosed area (column 1) and the corresponding maximum area A in square meters (column 2).

|       | Optimal width W (m) | Maximum area A (m²) |
|-------|---------------------|----------------------|
| 20    |                     |                      |
| 30    |                     |                      |
| 40    |                     |                      |
| 60    |                     |                      |
| 900   |                     |                      |
| 1,800 |                     |                      |

**answer:** W = 30, A = 1,800
**fastest_path:** Three-sided constraint: 2W + L = 120 → L = 120−2W. Area = W(120−2W). Vertex at W = 120/4 = 30. A = 30 × 60 = 1,800.
**explanation:** The three fenced sides consist of two widths and one length (the barn provides the fourth side). Constraint: 2W + L = 120, so L = 120 − 2W. Area = W × (120 − 2W) = 120W − 2W², a downward-opening parabola. Maximum at vertex: W = 120 / (2 × 2) = 30 meters. Then L = 120 − 60 = 60 meters. Maximum area = 30 × 60 = 1,800 m². Verify: fencing used = 2(30) + 60 = 120 ✓.
**mistake_a:** W = 20 — plausible but not optimal; area = 20 × 80 = 1,600 m².
**mistake_c:** W = 40 — symmetric to W = 20 on the parabola; area = 40 × 40 = 1,600 m².
**mistake_d:** W = 60 — uses the full fencing for just two widths; L = 0 and area = 0.
**mistake_e:** 900 m² — applying the four-sided perimeter formula: 2W + 2L = 120 → W + L = 60 → maximum area = 30 × 30 = 900. Forgetting the barn eliminates one length.
**common_trap:** Using the four-sided perimeter formula (2W + 2L = 120) instead of the three-sided formula (2W + L = 120). The barn removes one side, and this fundamentally shifts the optimal solution.
**takeaway:** When one side needs no fencing, the constraint changes from 2W + 2L = P to 2W + L = P. The three-sided solution always produces a longer length and greater area than the four-sided solution for the same perimeter.
**related_reading:** reading-di-06-two-part-analysis

---

## Q52
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Integer-Constrained Optimization

A bookstore sells novels at $12 each and textbooks at $28 each. A customer plans to spend exactly $220 and must buy at least one novel and at least one textbook. The customer wants to maximize the total number of books purchased. Select the number of novels in the optimal purchase (column 1) and the total number of books in the optimal purchase (column 2).

|     | Novels | Total books |
|-----|--------|-------------|
| 1   |        |             |
| 2   |        |             |
| 4   |        |             |
| 9   |        |             |
| 16  |        |             |
| 17  |        |             |

**answer:** Novels = 16, Total books = 17
**fastest_path:** Minimize textbooks to maximize count. Equation: 3n + 7t = 55 (dividing 12n+28t=220 by 4). Try t=1: n=16 ✓. Try t=2: n=41/3 ✗. Try t=4: n=9 ✓ (total 13). Minimum valid t=1 gives maximum total=17.
**explanation:** Divide the budget equation by 4: 3n + 7t = 55, with n ≥ 1 and t ≥ 1. To maximize n + t, minimize t (textbooks cost more per book). Test integer solutions: t=1: 3n = 48 → n = 16. Total = 17. t=2: 3n = 41 → not an integer. t=3: 3n = 34 → not an integer. t=4: 3n = 27 → n = 9. Total = 13. t=7: 3n = 6 → n = 2. Total = 9. The three feasible solutions are (n, t) = (16, 1), (9, 4), (2, 7), yielding totals of 17, 13, and 9 respectively. Maximum = 17 with 16 novels and 1 textbook.
**mistake_b:** 2 novels — the (2, 7) solution; minimizes novels instead of maximizing total count.
**mistake_d:** 9 novels — the (9, 4) solution; valid but not the maximum.
**mistake_c:** 4 total — confusing the textbook count (t=4) with the total books in that solution.
**mistake_f:** 17 novels — selecting the total as the novel count; column confusion.
**common_trap:** Not checking the integer constraint across all possible values of t. Any non-integer solution is invalid — the customer cannot buy fractional books. The equation 3n + 7t = 55 only has integer solutions when 7t ≡ 55 ≡ 1 (mod 3), i.e., t ≡ 1 (mod 3).
**takeaway:** Integer-constrained optimization: enumerate feasible integer solutions from the minimum of the binding variable. Use modular arithmetic to skip non-integer cases. Verify no smaller t value beats the first-found maximum.
**related_reading:** reading-di-06-two-part-analysis
