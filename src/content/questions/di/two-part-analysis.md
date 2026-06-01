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
**topic:** Quantitative — Markup and Profit

A store marks up all items by 40% over the wholesale cost. A jacket costs the store $75 wholesale. Determine the store's selling price for the jacket (column 1) and the store's profit on the jacket (column 2).

|        | Selling Price | Profit |
|--------|---------------|--------|
| $30    |               |        |
| $75    |               |        |
| $100   |               |        |
| $105   |               |        |
| $150   |               |        |

**answer:** Selling Price = $105, Profit = $30
**fastest_path:** Selling price = 75 × 1.40 = 105. Profit = 105 − 75 = 30.
**explanation:** A 40% markup on the $75 wholesale cost means Selling Price = $75 × 1.40 = $105. Profit = Selling Price − Cost = $105 − $75 = $30. The 40% markup applies to the cost base, not to the selling price. Each percentage change always applies to the base at that step.
**mistake_a:** $30 — that is the profit, not the selling price. Column 1 asks for selling price.
**mistake_b:** $75 — the wholesale cost itself; the markup has not been applied.
**mistake_c:** $100 — applies a flat $25 addition or uses incorrect arithmetic on 40% of something other than the cost.
**mistake_e:** $150 — applies a 100% markup (doubling the cost) instead of 40%.
**common_trap:** Confusing the profit ($30) with the selling price ($105). Re-read which column asks for which quantity before selecting.
**takeaway:** Markup on cost: Selling Price = Cost × (1 + markup%). Profit = Selling Price − Cost.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Average

A class consists of 20 students who scored an average of 70 on a test and 30 students who scored an average of 85. Let T be the total points scored by all 50 students and let A be the weighted average score for the entire class.

|       | T (total points) | A (weighted avg) |
|-------|------------------|------------------|
| 75    |                  |                  |
| 77.5  |                  |                  |
| 79    |                  |                  |
| 3,750 |                  |                  |
| 3,950 |                  |                  |

**answer:** T = 3,950, A = 79
**fastest_path:** T = 20×70 + 30×85 = 1,400 + 2,550 = 3,950. A = 3,950 / 50 = 79.
**explanation:** Total points T = (20 × 70) + (30 × 85) = 1,400 + 2,550 = 3,950. Weighted average A = 3,950 / 50 = 79. The simple (unweighted) average of 70 and 85 is 77.5, but that ignores the larger group. Since 30 students scored 85 versus only 20 who scored 70, the class average is pulled toward 85, landing at 79.
**mistake_a:** 75 — midpoint computed by a different (incorrect) method.
**mistake_b:** 77.5 — the simple average of the two group averages; forgets to weight by group size.
**mistake_d:** 3,750 — computing 50 × 75 (uses the wrong average) or an arithmetic slip.
**common_trap:** Taking the arithmetic mean of the two group averages (77.5) without weighting by group size. Weighted average always requires computing each group's total first.
**takeaway:** Weighted average = (sum of all values) / (total count). Compute each group's contribution separately, then divide by the overall count.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations

Two positive integers sum to 24 and differ by 8. Let L be the larger integer and let S be the smaller integer.

|     | L (larger) | S (smaller) |
|-----|------------|-------------|
| 6   |            |             |
| 8   |            |             |
| 12  |            |             |
| 16  |            |             |
| 20  |            |             |

**answer:** L = 16, S = 8
**fastest_path:** L + S = 24 and L − S = 8. Add the equations: 2L = 32 → L = 16, S = 8.
**explanation:** Two equations: L + S = 24 and L − S = 8. Adding eliminates S: 2L = 32 → L = 16. Back-substituting: S = 24 − 16 = 8. Verify: 16 + 8 = 24 ✓ and 16 − 8 = 8 ✓. Both are positive integers ✓.
**mistake_a:** 6 — a pair (18, 6) sums to 24 but differs by 12, not 8.
**mistake_c:** 12 — the equal-split of 24 gives difference = 0, not 8.
**mistake_e:** 20 — the pair (20, 4) differs by 16, not 8.
**common_trap:** Guessing a split that sums to 24 without checking the difference. Always verify both conditions simultaneously.
**takeaway:** For "sum = X, difference = Y": L = (X + Y)/2, S = (X − Y)/2. This formula avoids setting up full equations.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Multi-Segment Rate

A cyclist rides at 15 mph for 2 hours, rests for 30 minutes, then rides at 20 mph for 1.5 hours. Let D be the total distance traveled in miles (column 1) and let T be the total elapsed time in hours including the rest (column 2).

|         | D (total distance) | T (total time) |
|---------|--------------------|----------------|
| 30 mi   |                    |                |
| 45 mi   |                    |                |
| 60 mi   |                    |                |
| 3.5 hrs |                    |                |
| 4 hrs   |                    |                |
| 4.5 hrs |                    |                |

**answer:** D = 60 mi, T = 4 hrs
**fastest_path:** D = 15×2 + 20×1.5 = 30 + 30 = 60. T = 2 + 0.5 + 1.5 = 4.
**explanation:** Distance in segment 1 = 15 × 2 = 30 miles. Distance in segment 2 = 20 × 1.5 = 30 miles. Total D = 60 miles. Total time T = 2 hours riding + 0.5 hours rest + 1.5 hours riding = 4 hours. The rest period adds to elapsed time but not to distance.
**mistake_a:** 30 mi — only the first segment's distance; omits the second segment.
**mistake_b:** 45 mi — partial sum or wrong rate applied to one segment.
**mistake_d:** 3.5 hrs — omitting the 30-minute rest from total elapsed time (2 + 1.5 = 3.5).
**mistake_f:** 4.5 hrs — double-counting the rest period.
**common_trap:** Forgetting to include the 30-minute rest in total elapsed time. Rest adds to clock time but contributes zero distance.
**takeaway:** Multi-segment trips: D = sum of (rate × time) for each moving segment only. T = sum of ALL time including stops.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Logic — Inference vs. Causal Claim

A company survey reports: "Among employees who participated in the voluntary wellness program last year, absentee rates dropped 12% compared with the prior year. Among non-participants, absentee rates dropped 11%."

From the statements below, select the one that can be properly concluded from the data alone (column 1) and the one that best explains why the data do not establish that the program caused the reduction in absenteeism (column 2).

| Statement                                                                                          | Can Conclude | Why Not Causal |
|----------------------------------------------------------------------------------------------------|--------------|----------------|
| Absentee rates declined for both participants and non-participants                                 |              |                |
| A comparable decline in non-participants suggests an external factor may explain the overall trend |              |                |
| The wellness program reduced absenteeism by improving employee health habits                       |              |                |
| Mandatory enrollment in the program would eliminate absenteeism entirely                           |              |                |
| Participants tend to be more health-conscious than non-participants before joining the program     |              |                |

**answer:** Can Conclude = "Absentee rates declined for both participants and non-participants"; Why Not Causal = "A comparable decline in non-participants suggests an external factor may explain the overall trend"
**fastest_path:** Can conclude = direct reading of the two reported numbers (both groups dropped). Why not causal = the near-equal drop in non-participants is an internal counter-signal embedded in the given data.
**explanation:** The data explicitly state that both groups had declining absentee rates (12% vs 11%). That is directly inferable. The causal claim fails because non-participants saw nearly the same decline — if the program caused the drop, non-participants should not have improved similarly. Row 3 asserts a mechanism not in the data. Row 4 is prescriptive and extreme. Row 5 raises self-selection but is speculative — the survey does not report pre-program health data.
**mistake_c:** Asserts a causal mechanism (health habits) that is not stated in the survey.
**mistake_d:** "Eliminate entirely" is far beyond what the data show and requires additional assumptions.
**mistake_e:** Self-selection is a plausible confound in general, but it is not established by the data reported — row 2 is grounded in what the data actually show.
**common_trap:** Choosing row 5 (self-selection) as the reason causation fails. While plausible, row 2 is grounded in the data itself — the non-participant decline is the visible internal counter-signal.
**takeaway:** The strongest "why not causal" uses evidence already in the data (a near-equal control-group decline), not speculative confounders that are merely possible.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets (Three Groups)

In a group of 100 students, 55 study Math, 40 study English, and 35 study Science. 20 study both Math and English, 15 study both English and Science, 18 study both Math and Science, and 5 study all three subjects. Let N be the number of students who study none of the three subjects and let E be the number who study exactly one subject.

|     | N (none) | E (exactly one) |
|-----|----------|-----------------|
| 5   |          |                 |
| 18  |          |                 |
| 25  |          |                 |
| 39  |          |                 |
| 42  |          |                 |

**answer:** N = 18, E = 39
**fastest_path:** Union = 55+40+35−20−15−18+5 = 82. N = 100−82 = 18. Math-only=22, Eng-only=10, Sci-only=7 → E = 39.
**explanation:** Inclusion-exclusion: |M∪E∪S| = 55+40+35−20−15−18+5 = 82. N = 100−82 = 18. Exactly-one counts: Math-only = 55−20−18+5 = 22; English-only = 40−20−15+5 = 10; Science-only = 35−15−18+5 = 7. E = 22+10+7 = 39. Verify: exactly-two = (20−5)+(15−5)+(18−5) = 15+10+13 = 38. Total = 39+38+5+18 = 100 ✓.
**mistake_a:** 5 — the all-three count; confused with none.
**mistake_c:** 25 — omitting the +5 add-back in the inclusion-exclusion formula, causing the union to be underestimated.
**mistake_e:** 42 — computing exactly-one without properly subtracting pairwise overlaps from each group.
**common_trap:** Forgetting to add back the triple-overlap in the inclusion-exclusion formula, which over-subtracts the union and inflates N.
**takeaway:** 3-group inclusion-exclusion: |A∪B∪C| = |A|+|B|+|C|−|A∩B|−|B∩C|−|A∩C|+|A∩B∩C|. Exactly-one = each group minus its paired overlaps plus the triple-overlap.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Consecutive Integers

The product of three consecutive positive integers equals 6 times the largest of the three integers. Let A be the smallest of the three integers and let P be their product.

|     | A (smallest) | P (product) |
|-----|--------------|-------------|
| 1   |              |             |
| 2   |              |             |
| 3   |              |             |
| 6   |              |             |
| 24  |              |             |
| 60  |              |             |

**answer:** A = 2, P = 24
**fastest_path:** n(n+1)(n+2) = 6(n+2). Divide by (n+2): n(n+1) = 6 → n²+n−6 = 0 → (n−2)(n+3) = 0 → n = 2. P = 2×3×4 = 24.
**explanation:** Let the three integers be n, n+1, n+2. Equation: n(n+1)(n+2) = 6(n+2). Since n+2 > 0, divide both sides: n(n+1) = 6 → n²+n−6 = 0 → (n−2)(n+3) = 0. Only n = 2 is a positive integer. The three integers are 2, 3, 4. P = 24. Verify: 2×3×4 = 24 = 6×4 ✓.
**mistake_a:** 1 — testing n=1: product = 1×2×3 = 6, but 6 × (largest) = 6×3 = 18 ≠ 6. Fails.
**mistake_c:** 3 — testing n=3: product = 3×4×5 = 60, but 6×5 = 30 ≠ 60. Fails.
**mistake_d:** 6 — confusing the multiplier (6) with the smallest integer.
**mistake_f:** 60 — the product for n=3, which does not satisfy the equation.
**common_trap:** Testing n=1 first because 1×2×3 = 6 "feels right," but the condition requires the product to equal 6 times the largest integer (6×3 = 18), not just 6.
**takeaway:** Factor out the common term (n+2) to reduce the cubic equation to a quadratic. Always verify the solution satisfies the original equation.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Coordinate Geometry

Line L passes through the points (2, 5) and (8, 17). Let S be the slope of line L and let Y be the y-intercept of line L.

|     | Slope S | Y-intercept Y |
|-----|---------|---------------|
| 0.5 |         |               |
| 1   |         |               |
| 2   |         |               |
| 5   |         |               |
| 6   |         |               |

**answer:** S = 2, Y = 1
**fastest_path:** S = (17−5)/(8−2) = 12/6 = 2. Back-substitute: 5 = 2(2)+b → b = 1.
**explanation:** Slope = rise/run = (17−5)/(8−2) = 12/6 = 2. Using point (2, 5) in y = Sx + b: 5 = 2(2) + b → b = 1. Equation: y = 2x + 1. Verify with (8, 17): 2(8)+1 = 17 ✓. The y-intercept is 1, not 5 — a common error is treating a given point's y-coordinate as the y-intercept without substituting x = 0.
**mistake_a:** 0.5 — inverting slope: run/rise = 6/12 instead of rise/run.
**mistake_d:** 5 — the y-coordinate of the given point (2, 5) mistaken for the y-intercept. The y-intercept requires x = 0.
**mistake_e:** 6 — the horizontal distance (run = 8−2 = 6) used as a final answer instead of as a denominator.
**common_trap:** Using a given point's y-coordinate (5) as the y-intercept. The y-intercept is only equal to a point's y-coordinate when that point has x = 0.
**takeaway:** Slope = (y₂−y₁)/(x₂−x₁). Y-intercept: substitute either known point into y = Sx + b and solve for b.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage Changes

A stock's price fell 20% in January, rose 25% in February, and then fell 10% in March. The final price after all three changes is $90. Let P be the stock's starting price (column 1) and let C be the overall percentage change from start to finish (column 2).

|        | P (starting price) | C (overall % change) |
|--------|-------------------|----------------------|
| $80    |                   |                      |
| $90    |                   |                      |
| $100   |                   |                      |
| +5%    |                   |                      |
| −5%    |                   |                      |
| −10%   |                   |                      |

**answer:** P = $100, C = −10%
**fastest_path:** Multipliers: 0.80×1.25×0.90 = 0.90. So 0.90P = $90 → P = $100. C = −10%.
**explanation:** Sequential multipliers: Jan ×0.80, Feb ×1.25, Mar ×0.90. Combined: 0.80×1.25 = 1.00 (Jan and Feb exactly cancel). Then ×0.90 means final = 0.90P. Setting 0.90P = $90 gives P = $100. Overall change = −10%. Key insight: −20% then +25% nets to exactly zero because the +25% applies to the reduced base ($80), not the original.
**mistake_a:** $80 — miscomputing the combined multiplier as 0.80 instead of 0.90.
**mistake_b:** $90 — thinking the Jan/Feb changes don't cancel, then setting P equal to the final price.
**mistake_d:** +5% — adding percentages: −20+25−10 = −5% (even with the sign reversed).
**mistake_e:** −5% — adding all three changes: −20+25−10 = −5. Arithmetic is correct but the method is wrong.
**common_trap:** Adding percentage changes: −20+25−10 = −5%. This is wrong. 0.80×1.25 = 1.00, not 1.05. Sequential changes multiply; they never add.
**takeaway:** Chain of percentage changes: convert each to a multiplier and multiply them. Never add percentage changes — each applies to an updated base.
**related_reading:** reading-di-06-two-part-analysis

---

## Q45
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Compound Interest

An investment of $2,000 earns interest compounded annually at a rate of 10% per year. Let V be the value of the investment after 2 years (column 1) and let I be the total interest earned over those 2 years (column 2).

|        | V (value after 2 yrs) | I (interest earned) |
|--------|----------------------|---------------------|
| $400   |                      |                     |
| $420   |                      |                     |
| $2,400 |                      |                     |
| $2,420 |                      |                     |
| $4,000 |                      |                     |

**answer:** V = $2,420, I = $420
**fastest_path:** V = 2,000×(1.10)² = 2,000×1.21 = $2,420. I = $2,420−$2,000 = $420.
**explanation:** Year 1: $2,000×1.10 = $2,200. Year 2: $2,200×1.10 = $2,420. Total interest I = $2,420−$2,000 = $420. Under simple interest, Year 1 and Year 2 both earn $200, giving V = $2,400 and I = $400. Compounding adds an extra $20 in Year 2 because it earns interest on the $200 first-year interest as well as the principal.
**mistake_a:** $400 — simple interest for 2 years: 2×10%×$2,000 = $400; forgets that Year 2 earns interest on $2,200.
**mistake_c:** $2,400 — simple interest value; misses the compounding effect.
**mistake_e:** $4,000 — doubling the principal; applies a 100% rate, not 10%.
**common_trap:** Using simple interest (2×$200 = $400) instead of compound. The difference here is only $20, but the concept is fundamental: compounded interest earns interest on prior interest.
**takeaway:** Compound: V = P×(1+r)ⁿ. Simple: V = P×(1+r×n). Verify by computing year-by-year when n is small.
**related_reading:** reading-di-06-two-part-analysis

---

## Q46
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Evaluating an Argument

A school principal argues: "Students enrolled in our after-school tutoring program earn higher grades than students who do not enroll. Therefore, requiring all students to attend tutoring will raise the school's average grade."

From the statements below, identify the primary logical flaw in the principal's argument (column 1) and the evidence that would most directly resolve that flaw (column 2).

| Statement                                                                                                     | Primary Flaw | Resolves Flaw |
|---------------------------------------------------------------------------------------------------------------|--------------|---------------|
| Students who choose tutoring may already be more motivated, making the grade gap a result of motivation rather than tutoring |              |               |
| Tutoring programs are expensive and the school's budget is limited                                            |              |               |
| A randomized study assigned half of a school's students to mandatory tutoring and found their grades rose by 9 points on average |              |               |
| The tutoring program covers only certain subjects and may not improve grades across all coursework            |              |               |
| Some students may perform worse when tutoring is mandatory because it reduces their sense of autonomy         |              |               |

**answer:** Primary Flaw = "Students who choose tutoring may already be more motivated, making the grade gap a result of motivation rather than tutoring"; Resolves Flaw = "A randomized study assigned half of a school's students to mandatory tutoring and found their grades rose by 9 points on average"
**fastest_path:** Flaw = self-selection: motivated students choose tutoring AND earn better grades, so tutoring may tag motivation rather than cause improvement. Resolution = RCT removes self-selection by randomly assigning attendance, isolating tutoring's effect.
**explanation:** The argument leaps from an observed correlation to a causal prescription. The primary flaw is self-selection: students who volunteer for tutoring are likely already more motivated or better-resourced, which independently predicts higher grades. A randomized controlled study directly resolves this — when assignment is random, self-selection is eliminated and any remaining grade difference is attributable to tutoring itself. Row 2 is a resource constraint, not a logical flaw. Row 4 is a scope limitation that does not address the causal inference. Row 5 introduces a potential backfire but does not diagnose the original correlation-vs-causation gap.
**mistake_b:** A practical budget concern, not a flaw in the causal reasoning.
**mistake_d:** Subject coverage does not explain why the observed correlation may not be causal.
**mistake_e:** A new risk from mandatory enrollment, not a diagnosis of the correlation-vs-causation problem.
**common_trap:** Selecting row 5 (mandatory backfire) as the primary flaw. It introduces a new concern but does not explain why the existing correlation fails to establish causation.
**takeaway:** When an argument moves from an observed group difference to a policy prescription, the primary flaw is almost always self-selection. Resolution requires random assignment to remove the self-selection mechanism.
**related_reading:** reading-di-06-two-part-analysis

---

## Q47
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Number Theory

Let A be the number of distinct positive integer factors of 72 and let B be the largest prime factor of 72.

|      | A (factor count) | B (largest prime factor) |
|------|------------------|--------------------------|
| 2    |                  |                          |
| 3    |                  |                          |
| 6    |                  |                          |
| 9    |                  |                          |
| 12   |                  |                          |

**answer:** A = 12, B = 3
**fastest_path:** 72 = 2³×3². Factor count = (3+1)(2+1) = 12. Largest prime = 3.
**explanation:** Prime factorization: 72 = 2³×3². Number of factors formula: (3+1)(2+1) = 4×3 = 12. The twelve factors are: 1, 2, 3, 4, 6, 8, 9, 12, 18, 24, 36, 72. The prime factors of 72 are only 2 and 3. The largest prime factor is 3. The error-prone step is confusing "largest prime factor" (the prime, 3) with "largest prime power in the factorization" (2³ = 8 or 3² = 9).
**mistake_a:** 2 — the smaller of the two prime factors; confused smallest with largest.
**mistake_c:** 6 — either under-counting factors or using 2×3 = 6 as a shortcut.
**mistake_d:** 9 — the largest prime power in the factorization (3² = 9), but 9 is not itself prime.
**common_trap:** Picking 9 as the "largest prime factor" because 3² = 9 appears in the factorization and is numerically larger than 2³ = 8. But 9 is composite — the largest prime is 3.
**takeaway:** Factor count: if n = p₁^a × p₂^b, count = (a+1)(b+1). Largest prime factor means the largest p value, not the largest p^exponent value.
**related_reading:** reading-di-06-two-part-analysis

---

## Q48
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Absolute Value Equation

The equation |2x − 6| = x + 3 has exactly two solutions. Let L be the larger solution and let S be the smaller solution.

|     | L (larger) | S (smaller) |
|-----|------------|-------------|
| 1   |            |             |
| 3   |            |             |
| 6   |            |             |
| 9   |            |             |
| 12  |            |             |

**answer:** L = 9, S = 1
**fastest_path:** Case 1 (x ≥ 3): 2x−6 = x+3 → x = 9 ✓. Case 2 (x < 3): −(2x−6) = x+3 → x = 1 ✓.
**explanation:** Case 1: assume 2x−6 ≥ 0 (x ≥ 3). Then 2x−6 = x+3 → x = 9. Check: 9 ≥ 3 ✓ and |18−6| = 12 = 9+3 ✓. Case 2: assume 2x−6 < 0 (x < 3). Then −(2x−6) = x+3 → −2x+6 = x+3 → 3 = 3x → x = 1. Check: 1 < 3 ✓ and |2−6| = 4 = 1+3 ✓. Both solutions are valid: L = 9, S = 1.
**mistake_b:** 3 — the case boundary, not a solution. At x=3: |6−6| = 0 but 3+3 = 6 ≠ 0. Not valid.
**mistake_c:** 6 — arithmetic slip in Case 1 (e.g., solving x+3 incorrectly or using the boundary as a solution).
**mistake_e:** 12 — the intermediate value |2(9)−6| = 12 mistaken for the solution itself.
**common_trap:** Solving only Case 1 and missing the second solution entirely; or identifying x = 3 (the boundary) as a solution without substituting back into the original equation.
**takeaway:** Absolute value equations always require two cases. After solving each case, verify the solution satisfies both the case inequality AND the original equation. Never assume a boundary value is a solution.
**related_reading:** reading-di-06-two-part-analysis

---

## Q49
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Divisibility and Modular Arithmetic

The integer N satisfies all three conditions: (1) 100 < N < 200, (2) N is divisible by 6, and (3) when N is divided by 5, the remainder is 3. Let F be the smallest value of N satisfying all three conditions and let G be the total count of integers satisfying all three conditions.

|     | F (smallest N) | G (total count) |
|-----|----------------|-----------------|
| 3   |                |                 |
| 4   |                |                 |
| 6   |                |                 |
| 108 |                |                 |
| 198 |                |                 |

**answer:** F = 108, G = 4
**fastest_path:** N ≡ 0 (mod 6) and N ≡ 3 (mod 5) → N = 30k+18. Range 100 < N < 200: k = 3,4,5,6 → 4 values; smallest is 108.
**explanation:** N = 6j for some integer j (divisible by 6), and 6j ≡ 3 (mod 5). Since 6 ≡ 1 (mod 5), this gives j ≡ 3 (mod 5), so j = 5k+3 and N = 6(5k+3) = 30k+18. Applying the range: 100 < 30k+18 < 200 → 82 < 30k < 182 → 2.73 < k < 6.07 → k = 3, 4, 5, 6. Values: N = 108, 138, 168, 198. All four lie strictly between 100 and 200. F = 108, G = 4.
**mistake_a:** 3 — the remainder condition from dividing by 5; confused with the count.
**mistake_c:** 6 — the divisibility modulus from condition 2; not the count.
**mistake_e:** 198 — the largest qualifying value; the question asks for the smallest.
**common_trap:** Counting only 3 values by excluding 198 — but 198 < 200 satisfies the strict upper bound. "Between 100 and 200" means 100 < N < 200, and 198 qualifies.
**takeaway:** Combine two modular conditions by finding the combined cycle (LCM of moduli = 30) and the base offset (18). Then list all values in the range and count carefully at strict vs. inclusive boundaries.
**related_reading:** reading-di-06-two-part-analysis

---

## Q50
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Analogical Transfer and Parallel Arguments

A city council argues: "Cities that banned single-use plastic bags saw a 30% reduction in plastic waste. Our city faces a similar waste management challenge, so banning plastic bags here will reduce our plastic waste by a comparable amount."

From the statements below, identify the most critical unstated assumption the argument requires (column 1) and the argument that contains a structurally parallel flaw (column 2).

| Statement                                                                                                                | Critical Assumption | Parallel Flaw |
|--------------------------------------------------------------------------------------------------------------------------|---------------------|---------------|
| The reference cities and our city are sufficiently similar in consumer behavior and waste infrastructure for the results to transfer |                     |               |
| The bag ban will not cause residents to shift to alternatives that generate equivalent or greater waste                  |                     |               |
| A physician concludes that because a drug reduced blood pressure in clinical trial patients, it will reduce blood pressure in all patients regardless of differing medical histories |                     |               |
| The 30% waste reduction is large enough to justify the economic disruption a ban would cause                            |                     |               |
| A school principal concludes that because students who own laptops score higher, issuing laptops to all students will raise scores |                     |               |

**answer:** Critical Assumption = "The reference cities and our city are sufficiently similar in consumer behavior and waste infrastructure for the results to transfer"; Parallel Flaw = "A physician concludes that because a drug reduced blood pressure in clinical trial patients, it will reduce blood pressure in all patients regardless of differing medical histories"
**fastest_path:** Core assumption = the analogy holds (study cities ≈ our city). Parallel flaw = physician argument: trial results assumed to transfer to all patients despite possible population differences — same analogical-transfer structure.
**explanation:** The argument's logic is "it worked in other cities → it will work here." This requires assuming that the reference cities are comparable to our city. Without that, the 30% finding cannot be projected onto a different context. Row 2 is an additional assumption (no waste substitution) but not the one enabling the cross-city comparison itself. The structural parallel is the physician argument: it assumes clinical-trial results (from a specific study population) apply to all patients (a different population), which is the same logical move — results from group A assumed to transfer to group B without establishing comparability. Row 5 (laptop policy) has a self-selection flaw, not an analogical-transfer flaw, making it structurally different.
**mistake_b:** A valid supplementary assumption but not the assumption enabling the city-to-city analogy.
**mistake_d:** A cost-benefit concern, not a logical assumption embedded in the argument structure.
**mistake_e:** The laptop argument commits a correlation-causation error (self-selection), not the same analogical-transfer flaw.
**common_trap:** Picking row 5 as the parallel because it also involves a policy prescription from observed data. The flaw type differs: the principal's argument conflates correlation with causation; the council's argument conflates findings from one context with outcomes in another.
**takeaway:** Analogical arguments require the assumption that source and target are sufficiently comparable. The structural parallel is any argument that imports study-population results to a new, possibly dissimilar population without establishing comparability.
**related_reading:** reading-di-06-two-part-analysis

---

## Q51
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Optimization with Binding Constraints

A baker has the following daily constraints: (1) total units produced ≤ 180, (2) total prep time ≤ 480 minutes, and (3) at least 60 cupcakes must be produced to fill standing orders. Each cupcake earns a profit of $3 and requires 2 minutes of prep. Each muffin earns a profit of $4 and requires 3 minutes of prep. Let C* be the cupcake count and M* be the muffin count that together maximize daily profit.

|     | C* (cupcakes) | M* (muffins) |
|-----|---------------|--------------|
| 60  |               |              |
| 80  |               |              |
| 100 |               |              |
| 120 |               |              |
| 160 |               |              |

**answer:** C* = 60, M* = 120
**fastest_path:** Muffin profit ($4) > cupcake ($3), so minimize cupcakes: set C = 60. Then unit cap: M ≤ 120; prep cap: M ≤ (480−120)/3 = 120. Both bind at M = 120. Profit = 180+480 = $660.
**explanation:** To maximize 3c+4m, shift as many units as possible to the higher-margin muffin. The lower bound forces c ≥ 60; set c = 60 (its minimum). Unit constraint: 60+m ≤ 180 → m ≤ 120. Prep constraint: 2(60)+3m ≤ 480 → m ≤ 120. Both constraints bind simultaneously at m = 120. Profit = 3(60)+4(120) = $660. Any increase in c above 60 slides m down by 1 unit and reduces profit: at (61, 119), profit = $183+$476 = $659 < $660.
**mistake_b:** (80, 100): units 180 ✓, prep 460 ✓, profit $240+$400 = $640 < $660.
**mistake_c:** (100, 80): units 180 ✓, prep 440 ✓, profit $300+$320 = $620 < $660.
**mistake_e:** (60, 160): units 220 > 180 — violates the unit cap.
**common_trap:** Guessing a balanced split (e.g., 80/100) instead of driving the lower-margin product to its minimum. When one item has strictly higher margin, it should absorb as much capacity as the constraints allow.
**takeaway:** In two-product LP-style problems with a minimum floor on one item: set the lower-margin item to its minimum, then solve for the higher-margin item using the binding constraint(s). Always verify all constraints at the proposed solution.
**related_reading:** reading-di-06-two-part-analysis

---

## Q52
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Conditional Probability (Bayes' Theorem)

A diagnostic test for a rare disease has a sensitivity of 90% (the probability of a positive result given the person has the disease) and a false positive rate of 8% (the probability of a positive result given the person does not have the disease). The disease affects 1% of the population being tested. A person tests positive. Let P be the probability, as a percentage rounded to the nearest whole percent, that the person actually has the disease (column 1) and let F be the expected number of false positives per 10,000 people tested (column 2).

|       | P (% disease given positive) | F (false positives per 10,000) |
|-------|------------------------------|-------------------------------|
| 10%   |                              |                               |
| 47%   |                              |                               |
| 90%   |                              |                               |
| 99    |                              |                               |
| 792   |                              |                               |
| 800   |                              |                               |

**answer:** P = 10%, F = 792
**fastest_path:** P(+|disease)×P(disease) = 0.009. P(+|no disease)×P(no disease) = 0.08×0.99 = 0.0792. P(disease|+) = 0.009/0.0882 ≈ 10%. F = 10,000×0.99×0.08 = 792.
**explanation:** Using Bayes' theorem: P(disease | positive) = [P(positive | disease) × P(disease)] / P(positive). Numerator: 0.90×0.01 = 0.009. Denominator: 0.009 + (0.08×0.99) = 0.009+0.0792 = 0.0882. P(disease | positive) = 0.009/0.0882 ≈ 10.2% ≈ 10%. For false positives per 10,000: of the 9,900 disease-free people, 8% test positive → 9,900×0.08 = 792. The striking result — only ~10% chance of actually having the disease after a positive test — is driven by the low base rate (1%). Even an accurate test produces many false positives when the disease is rare.
**mistake_b:** 47% — a computation that ignores proper base-rate weighting, e.g., sensitivity/(sensitivity+FPR) = 0.90/1.90 without incorporating prevalence.
**mistake_c:** 90% — reading sensitivity as positive predictive value. This is base-rate neglect: 90% is P(positive | disease), not P(disease | positive).
**mistake_d:** 99 — computing 10,000×0.01×0.99 ≈ 99 (true positives), confused with false positive count.
**mistake_f:** 800 — computing 10,000×0.08 = 800 without restricting to disease-free individuals. False positives come only from the 9,900 non-diseased people (99%), not from all 10,000.
**common_trap:** Equating test sensitivity (90%) with the probability of disease given a positive result. With only 1% prevalence, the 99% majority of disease-free individuals generate far more false positives than the 1% generate true positives — swamping the numerator.
**takeaway:** Positive predictive value depends on both test accuracy AND base-rate prevalence. In rare conditions, even a sensitive test yields mostly false positives. Always multiply by the correct population fraction (disease-free, not total) when counting false positives.
**related_reading:** reading-di-06-two-part-analysis
