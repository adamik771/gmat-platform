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
**topic:** Quantitative — Overlapping Sets

A class of 40 students was surveyed about sports. 22 students play soccer, 16 play basketball, and 8 play both sports. Select the number of students who play at least one sport (column 1) and the number who play neither sport (column 2).

|    | At least one | Neither |
|----|--------------|---------|
| 10 |              |         |
| 22 |              |         |
| 30 |              |         |
| 38 |              |         |
| 40 |              |         |

**answer:** At least one = 30, Neither = 10
**fastest_path:** At-least-one = 22 + 16 − 8 = 30 (inclusion-exclusion). Neither = 40 − 30 = 10.
**explanation:** By inclusion-exclusion: students who play at least one sport = 22 + 16 − 8 = 30 (the overlap is subtracted so the 8 who play both are not double-counted). Students who play neither = 40 − 30 = 10.
**mistake_b:** 22 — that is the exactly-one count (soccer-only 14 + basketball-only 8 = 22), not the at-least-one total.
**mistake_d:** 38 — adding 22 + 16 = 38 without subtracting the 8-student overlap; double-counts both-sport students.
**mistake_e:** 40 — the total class size; nothing subtracted. At-least-one equals the total only if nobody plays neither sport.
**common_trap:** Adding the two group sizes without subtracting the overlap to produce 38. Inclusion-exclusion: |A ∪ B| = |A| + |B| − |A ∩ B|.
**takeaway:** At-least-one = A + B − both. Neither = Total − at-least-one. Subtracting the overlap once is mandatory to avoid double-counting.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage Changes

A store buys a jacket at a wholesale cost of $80. The store marks it up by 35% to set the retail price. During a sale, the store discounts the retail price by 10%. Determine the retail price before the sale discount (column 1) and the final sale price (column 2).

|         | Retail Price | Sale Price |
|---------|--------------|------------|
| $72.00  |              |            |
| $88.00  |              |            |
| $97.20  |              |            |
| $108.00 |              |            |
| $116.00 |              |            |

**answer:** Retail Price = $108.00, Sale Price = $97.20
**fastest_path:** Retail = 80 × 1.35 = 108. Sale = 108 × 0.90 = 97.20.
**explanation:** Retail price = $80 × 1.35 = $108.00. The 35% markup applies to the wholesale cost. Sale price = $108.00 × 0.90 = $97.20. The 10% discount applies to the retail price, not to the original $80.
**mistake_a:** $72.00 — applying the 10% discount to the original $80 cost (80 × 0.90 = 72), skipping the markup entirely.
**mistake_b:** $88.00 — using a 10% markup instead of 35%: 80 × 1.10 = 88.
**mistake_e:** $116.00 — applying both percentages to the original base: 80 + 0.35(80) + 0.10(80) = 116. Each step's base is the current price, not the starting price.
**common_trap:** Applying the 10% discount to the original $80 rather than to the $108 retail price. Sequential percent changes each use the updated base.
**takeaway:** Markup applies to cost; discount applies to the marked-up price. Each step uses the new base: 80 → 108 → 97.20.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio and Proportion

A recipe calls for flour and sugar in the ratio 5 to 2. A baker uses 35 cups of flour for a large batch. Determine the number of cups of sugar needed (column 1) and the total cups of flour and sugar combined (column 2).

|    | Sugar (cups) | Total (cups) |
|----|--------------|--------------|
| 7  |              |              |
| 14 |              |              |
| 21 |              |              |
| 35 |              |              |
| 49 |              |              |

**answer:** Sugar = 14, Total = 49
**fastest_path:** Sugar = 35 × (2/5) = 14. Total = 35 + 14 = 49.
**explanation:** The flour-to-sugar ratio is 5:2. For every 5 cups of flour, 2 cups of sugar are used. With 35 cups of flour: sugar = 35 × (2/5) = 14 cups. Total = 35 + 14 = 49 cups.
**mistake_a:** 7 — dividing 35 by 5 to get the unit size (7) without multiplying by 2 to get the actual sugar count.
**mistake_c:** 21 — using a 5:3 ratio by mistake, or misreading the ratio as flour-to-total instead of flour-to-sugar.
**mistake_d:** 35 — equal parts; treating the ratio as 1:1 and using the flour quantity for sugar.
**common_trap:** Inverting the ratio to compute sugar = 35 × (5/2) = 87.5, which treats flour as the smaller ingredient.
**takeaway:** Ratio a:b — given the a-quantity, the b-quantity = (given) × (b/a). Always identify which ingredient the given amount belongs to before applying the ratio.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Circle Geometry

A circle has an area of 36π square centimeters. Determine the radius in centimeters (column 1) and the circumference expressed in terms of π in centimeters (column 2).

|      | Radius (cm) | Circumference |
|------|-------------|---------------|
| 3    |             |               |
| 6    |             |               |
| 9    |             |               |
| 6π   |             |               |
| 12π  |             |               |
| 18π  |             |               |

**answer:** Radius = 6, Circumference = 12π
**fastest_path:** πr² = 36π → cancel π → r² = 36 → r = 6. C = 2π(6) = 12π.
**explanation:** Area = πr² = 36π. Divide both sides by π: r² = 36, so r = 6 cm. Circumference = 2πr = 2π(6) = 12π cm.
**mistake_a:** 3 — possibly computing r = 36/12 = 3, or confusing radius with half the diameter.
**mistake_c:** 9 — arithmetic slip in taking the square root, or confusion with a different formula.
**mistake_d:** 6π — circumference formula applied with the wrong radius of 3: 2π(3) = 6π.
**mistake_f:** 18π — using an incorrect formula such as πr² /2 or some variant that introduces an extra factor.
**common_trap:** Failing to cancel π before taking the square root: treating r = √(36π) = 6√π instead of canceling π first to get r² = 36.
**takeaway:** Area = πr² → cancel π on both sides → r² = the numeric coefficient → r = √coefficient. Then C = 2πr.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Number Properties (LCM and GCF)

The least common multiple (LCM) of two positive integers is 60, and their greatest common factor (GCF) is 4. One of the integers is 12. Determine the other integer (column 1) and the product of the two integers (column 2).

|     | Other integer | Product |
|-----|---------------|---------|
| 15  |               |         |
| 16  |               |         |
| 20  |               |         |
| 24  |               |         |
| 240 |               |         |
| 480 |               |         |

**answer:** Other integer = 20, Product = 240
**fastest_path:** Product = GCF × LCM = 4 × 60 = 240. Other integer = 240 / 12 = 20. Verify: GCF(12, 20) = 4, LCM(12, 20) = 60. Both confirmed.
**explanation:** For any two positive integers, GCF × LCM = product of the two integers. So product = 4 × 60 = 240. Other integer = 240 / 12 = 20. Verification: 12 = 2² × 3 and 20 = 2² × 5. GCF = 2² = 4 ✓. LCM = 2² × 3 × 5 = 60 ✓.
**mistake_a:** 15 — LCM(12, 15) = 60 appears to check out, but GCF(12, 15) = 3, not 4. Both conditions must hold simultaneously.
**mistake_b:** 16 — GCF(12, 16) = 4 checks out, but LCM(12, 16) = 48, not 60. Satisfies only one constraint.
**mistake_d:** 24 — GCF(12, 24) = 12, not 4. Fails the GCF condition.
**common_trap:** Verifying only one of the two conditions (GCF or LCM) rather than both. Confirm each stated condition independently.
**takeaway:** GCF × LCM = product of the two integers. Use this to find the unknown, then verify both the GCF and LCM match the given values.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Inference vs. Causal Claim

A university study reports: "Students who met with an academic advisor at least three times per semester had an average GPA of 3.4. Students who never met with an advisor had an average GPA of 2.9." The university president concludes: "Expanding our advising program will raise the average student GPA."

From the statements below, identify the one that can be directly inferred from the study data alone (column 1) and the one that most accurately explains why the data do not support the president's conclusion (column 2).

| Statement | Can Be Inferred | Why Not Supported |
|-----------|-----------------|-------------------|
| Students who used advising at least three times had higher average GPAs than students who never used it | | |
| Students who did not use advising lacked awareness of the program's availability | | |
| Students who frequently seek advising are likely already more motivated to succeed academically | | |
| The advising staff lacks the capacity to serve the full student body | | |
| Advising teaches effective time-management skills that directly raise GPA | | |

**answer:** Can Be Inferred = "Students who used advising at least three times had higher average GPAs than students who never used it"; Why Not Supported = "Students who frequently seek advising are likely already more motivated to succeed academically"
**fastest_path:** Inference = direct restatement of reported averages (3.4 > 2.9). Causal flaw = self-selection: high-motivation students both seek advising and earn higher GPAs independently.
**explanation:** The first statement is a direct restatement of the reported data requiring no inference beyond what was measured. The president's causal conclusion fails because of self-selection bias: students who proactively seek advising three or more times per semester are likely more academically motivated to begin with. Their motivation — not the advising itself — could be driving both behaviors simultaneously.
**mistake_b:** Why avoidance-students made their choice is speculative and not stated in the study data.
**mistake_d:** Staff capacity is an external constraint not mentioned in the study and does not explain the logical gap in the causal claim.
**mistake_e:** A mechanism plausibly supports the causal claim rather than explaining why it fails. Mechanism strengthens; confound undermines.
**common_trap:** Confusing mechanism (row 5 supports causation) with confound (row 3 undermines causation). A mechanism explains how the effect could occur; a confound explains why the correlation could exist without causation.
**takeaway:** Observational data license descriptive inferences only. Causal claims require ruling out self-selection. Ask: would randomly assigned students show the same GPA gain?
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Right Triangle

A right triangle has a hypotenuse of 25 cm and one leg of 7 cm. Determine the length of the other leg in centimeters (column 1) and the area of the triangle in square centimeters (column 2).

|      | Other Leg (cm) | Area (cm²) |
|------|----------------|------------|
| 18   |                |            |
| 20   |                |            |
| 24   |                |            |
| 84   |                |            |
| 87.5 |                |            |
| 168  |                |            |

**answer:** Other Leg = 24, Area = 84
**fastest_path:** 7² + b² = 25² → b² = 576 → b = 24. Area = (1/2)(7)(24) = 84.
**explanation:** By the Pythagorean theorem: 7² + b² = 25² → 49 + b² = 625 → b² = 576 → b = 24 cm. This is the 7-24-25 Pythagorean triple. Area = (1/2)(leg₁)(leg₂) = (1/2)(7)(24) = 84 cm².
**mistake_a:** 18 — subtracting instead of squaring: 25 − 7 = 18. Does not apply the Pythagorean theorem.
**mistake_b:** 20 — guessing a common triple; 7² + 20² = 449 ≠ 625. Fails the check.
**mistake_e:** 87.5 — area computed as (1/2)(hypotenuse)(leg): (1/2)(25)(7) = 87.5. The hypotenuse is not a leg; only the two perpendicular legs form the base and height.
**mistake_f:** 168 — omitting the 1/2 in the area formula: 7 × 24 = 168.
**common_trap:** Using the hypotenuse as a dimension in the area formula. For a right triangle, area uses the two legs, not the hypotenuse.
**takeaway:** Pythagorean theorem: a² + b² = c² (c = hypotenuse). Right triangle area = (1/2)(leg₁)(leg₂). Never substitute the hypotenuse for a leg in the area formula.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets (Survey)

A survey of 120 people found that 65 read novels, 45 read news articles, and 25 read both. Determine the number of people who read neither type of content (column 1) and the number who read exactly one of the two types (column 2).

|    | Neither | Exactly One |
|----|---------|-------------|
| 25 |         |             |
| 35 |         |             |
| 60 |         |             |
| 85 |         |             |
| 95 |         |             |

**answer:** Neither = 35, Exactly One = 60
**fastest_path:** At-least-one = 65 + 45 − 25 = 85. Neither = 120 − 85 = 35. Exactly-one = 85 − 25 = 60.
**explanation:** Inclusion-exclusion: at-least-one = 65 + 45 − 25 = 85. Neither = 120 − 85 = 35. Exactly-one = at-least-one − both = 85 − 25 = 60. Cross-check: novels-only = 65 − 25 = 40; news-only = 45 − 25 = 20; exactly-one = 40 + 20 = 60 ✓.
**mistake_a:** 25 — the "both" count, confused with "neither." People who read both are not in the neither group.
**mistake_d:** 85 — at-least-one, mistakenly reported as "neither." Neither = Total − at-least-one = 120 − 85 = 35.
**mistake_e:** 95 — possibly 120 − 25 = 95, subtracting only the overlap from total and skipping the full inclusion-exclusion step.
**common_trap:** Confusing the overlap count (25) with the "neither" count. People in the "both" group read two types of content; "neither" is the group outside all categories.
**takeaway:** Neither = Total − (A + B − both). Exactly-one = A + B − 2(both). Sketch the two-circle Venn diagram to label all four regions before solving.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Average

An instructor weights the midterm at one-third of the final grade and the final exam at two-thirds. A student scores 72 on the midterm. Determine the minimum score needed on the final exam to achieve an overall grade of exactly 86 (column 1) and the overall grade the student would earn by scoring 90 on the final exam (column 2).

|    | Min final score | Grade if final = 90 |
|----|-----------------|---------------------|
| 84 |                 |                     |
| 86 |                 |                     |
| 88 |                 |                     |
| 90 |                 |                     |
| 93 |                 |                     |

**answer:** Min final score = 93, Grade if final = 90 → 84
**fastest_path:** (1/3)(72) + (2/3)x = 86 → 24 + (2/3)x = 86 → x = 93. Grade at 90: 24 + (2/3)(90) = 84.
**explanation:** Weighted equation: (1/3)(72) + (2/3)x = 86 → 24 + (2/3)x = 86 → (2/3)x = 62 → x = 93. For the second column: (1/3)(72) + (2/3)(90) = 24 + 60 = 84. The 72 midterm drags the average down, so even a 90 on the final yields only 84 overall.
**mistake_b:** 86 — using the target grade directly as the required final score, ignoring the midterm's weighted drag.
**mistake_c:** 88 — unweighted average of target and a nearby score: arithmetic without applying the weights.
**mistake_d:** 90 — reporting the final score itself as the overall grade, ignoring the 1/3 contribution of the 72 midterm.
**common_trap:** Ignoring the midterm's weighted contribution when solving for the required final score. A below-target midterm forces the final score to exceed the target.
**takeaway:** Weighted average: set up w₁x₁ + w₂x₂ = target and isolate the unknown. A low-weight, below-target component forces the high-weight component above the target to compensate.
**related_reading:** reading-di-06-two-part-analysis

---

## Q45
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage Changes (Non-Obvious Net)

A retail chain first reduces all prices by 20%, then runs a restock promotion that adds 15% back onto the already-reduced price. A jacket's original price is $120. Determine the jacket's price after the 20% reduction (column 1) and the final price after the 15% addition (column 2).

|          | After 20% cut | After 15% addition |
|----------|---------------|--------------------|
| $86.40   |               |                    |
| $96.00   |               |                    |
| $102.00  |               |                    |
| $110.40  |               |                    |
| $114.00  |               |                    |

**answer:** After 20% cut = $96.00, After 15% addition = $110.40
**fastest_path:** 120 × 0.80 = 96. 96 × 1.15 = 110.40. Net factor = 0.80 × 1.15 = 0.92, not 0.95.
**explanation:** After 20% cut: $120 × 0.80 = $96.00. After 15% addition on the reduced price: $96.00 × 1.15 = $110.40. The two-step net factor is 0.80 × 1.15 = 0.92. A "−20% then +15%" sequence is not a net −5%.
**mistake_a:** $86.40 — applying a 10% reduction to $96 rather than a 15% addition: 96 × 0.90 = 86.40. Misread "addition" as a further discount.
**mistake_c:** $102.00 — applying only 15% off the original $120: 120 × 0.85 = 102. Skipped the 20% cut.
**mistake_e:** $114.00 — applying both percentages to the original base: 120 − 24 + 18 = 114. Each step must use the updated price as its base.
**common_trap:** Netting the two percent changes: −20% + 15% = −5%, yielding 120 × 0.95 = $114. Sequential percentages compound; they do not simply add.
**takeaway:** Sequential percent changes multiply in order: 0.80 × 1.15 = 0.92. Never add percent changes (−20 + 15 ≠ −5 applied to the original base).
**related_reading:** reading-di-06-two-part-analysis

---

## Q46
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Weaken (Clinical Trial)

A pharmaceutical company reports: "In a blinded, randomized clinical trial with 500 participants, patients who received Drug X showed a 40% reduction in symptom severity compared to those who received a placebo. Therefore, Drug X is an effective treatment for this condition."

From the statements below, identify one that most strengthens the conclusion (column 1) and one that most weakens it (column 2).

| Statement | Strengthens | Weakens |
|-----------|-------------|---------|
| A meta-analysis of 12 independent trials found Drug X produced a 35–45% symptom reduction across diverse patient populations | | |
| Patients who withdrew from the Drug X arm early had significantly more severe baseline symptoms than trial completers | | |
| Drug X's molecular mechanism directly inhibits the receptor linked to the condition's primary symptom pathway | | |
| Participants were permitted to use over-the-counter pain relievers throughout the trial at their own discretion | | |
| The trial was conducted at a single research hospital whose patients may not represent the broader population | | |

**answer:** Strengthens = "A meta-analysis of 12 independent trials found Drug X produced a 35–45% symptom reduction across diverse patient populations"; Weakens = "Patients who withdrew from the Drug X arm early had significantly more severe baseline symptoms than trial completers"
**fastest_path:** Strengthen = replication across 12 blinded trials in diverse populations (highest-quality causal evidence). Weaken = attrition bias: sicker Drug X patients dropped out, inflating the apparent effectiveness.
**explanation:** The meta-analysis (row 1) replicates the finding across 12 independent blinded trials in different populations — the strongest support for a causal effectiveness claim. Row 2 introduces attrition bias: if the sickest Drug X-arm patients disproportionately withdrew, the remaining completers had milder baseline symptoms, making the observed 40% reduction an overestimate. Row 3 (mechanism) adds plausibility but is not causal human evidence. Row 4 (OTC meds) is expected to be balanced across arms by randomization. Row 5 limits generalizability, not internal validity.
**mistake_c:** Mechanism plausibility (row 3) is weaker than replicated experimental evidence. Mechanism shows the drug could work in theory; replication shows it does.
**mistake_d:** OTC medication use is a confound in observational studies but is expected to be balanced across arms in a randomized trial unless blinding is compromised.
**mistake_e:** A single-site limitation challenges external validity (generalizability), not the internal finding that Drug X reduced symptoms in this trial.
**common_trap:** Picking mechanism (row 3) as the strongest strengthener. Mechanisms can exist without producing the claimed effect in practice; replication across multiple trials is more powerful.
**takeaway:** Causal effectiveness: strengthen with replicated experiments across populations; weaken with systematic biases favoring the treatment group (attrition, selection). Mechanism alone cannot establish effectiveness.
**related_reading:** reading-di-06-two-part-analysis

---

## Q47
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Age Word Problem

Five years ago, Maya was twice as old as her brother Leo. In three years, the sum of their ages will be 40. Determine Maya's current age (column 1) and Leo's current age (column 2).

|    | Maya's age | Leo's age |
|----|------------|-----------|
| 8  |            |           |
| 10 |            |           |
| 13 |            |           |
| 15 |            |           |
| 21 |            |           |

**answer:** Maya's age = 21, Leo's age = 13
**fastest_path:** Five years ago: M−5 = 2(L−5) → M = 2L−5. In three years: M+L = 34. Substitute: 3L−5 = 34 → L = 13, M = 21.
**explanation:** Let M and L be their current ages. Five years ago: (M − 5) = 2(L − 5) → M = 2L − 5. In three years: (M + 3) + (L + 3) = 40 → M + L = 34. Substituting: (2L − 5) + L = 34 → 3L = 39 → L = 13, M = 21. Verify: five years ago Maya = 16, Leo = 8; 16 = 2 × 8 ✓. In three years: 24 + 16 = 40 ✓.
**mistake_a:** 8 — Leo's age five years ago, not his current age; uses the past value without adding back 5 years.
**mistake_b:** 10 — guessing equal spacing without setting up the constraint equations.
**mistake_d:** 15 — from M − 5 = 2L (not adjusting Leo's age to the past): gives 3L = 34, L ≈ 11, M ≈ 17; nearby round numbers produce this kind of off-by-a-few guess.
**common_trap:** Writing M = 2L (present ages) instead of M − 5 = 2(L − 5) (both ages five years ago). Both ages must shift equally to the stated time.
**takeaway:** Age problems: adjust both ages equally to the stated time. "Five years ago" means subtract 5 from both, not just one person's age.
**related_reading:** reading-di-06-two-part-analysis

---

## Q48
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Dual Constraint Optimization

A catering company can prepare at most 200 servings per day. Meal A requires 10 minutes of prep per serving; Meal B requires 15 minutes per serving. Total available prep time is 2,400 minutes per day. A client orders exactly as many servings of Meal A as Meal B. Let N be the number of servings of each meal type in the largest feasible order. Determine N (column 1) and the total prep time consumed at that order (column 2).

|       | N (servings per meal) | Total prep time (min) |
|-------|----------------------|-----------------------|
| 80    |                      |                       |
| 96    |                      |                       |
| 100   |                      |                       |
| 2,000 |                      |                       |
| 2,400 |                      |                       |
| 2,500 |                      |                       |

**answer:** N = 96, Total prep time = 2,400
**fastest_path:** A = B = N. Serving cap: 2N ≤ 200 → N ≤ 100. Prep cap: 25N ≤ 2,400 → N ≤ 96. Binding: N = 96. Prep used = 25(96) = 2,400.
**explanation:** With A = B = N, two constraints apply. Serving capacity: 2N ≤ 200 → N ≤ 100. Prep time: 10N + 15N = 25N ≤ 2,400 → N ≤ 96. The feasible maximum satisfies both: N = min(100, 96) = 96. Total prep = 25(96) = 2,400 minutes.
**mistake_c:** 100 — satisfies the serving constraint but requires 25(100) = 2,500 minutes of prep, exceeding the 2,400-minute limit. Only one constraint was checked.
**mistake_d:** 2,000 — Meal A prep only: 10 × 200 = 2,000. Ignores Meal B prep and the equal-quantity requirement.
**mistake_f:** 2,500 — total prep at N = 100 (the infeasible case). This is the violated constraint value, not the actual prep used.
**common_trap:** Checking only the serving-count constraint (N ≤ 100) and missing the prep-time constraint (N ≤ 96). The feasible maximum is the minimum of all binding upper bounds.
**takeaway:** When multiple constraints restrict the same variable, the feasible maximum equals the minimum of all individual upper bounds. Evaluate every constraint before selecting an answer.
**related_reading:** reading-di-06-two-part-analysis

---

## Q49
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Multi-Step Causal Chain

An urban planner argues: "Expanding public transit reduces car ownership. Lower car ownership reduces traffic congestion. Reduced congestion decreases commute times. Therefore, expanding public transit will decrease commute times."

From the statements below, identify the one that most strengthens the argument's conclusion by closing its key gap (column 1) and the one that most seriously undermines a stated link in the causal chain (column 2).

| Statement | Strengthens | Undermines a Link |
|-----------|-------------|-------------------|
| In cities that expanded transit, average commute times fell by 20% over five years | | |
| Many commuters who give up their cars still drive to transit stations and park there, generating similar local congestion | | |
| Transit expansion in dense cities has historically reduced private vehicle registrations by 30% | | |
| Commute times depend more on remote-work adoption rates than on traffic congestion levels | | |
| Reduced congestion allows buses to run faster, which further reinforces transit's speed advantage | | |

**answer:** Strengthens = "In cities that expanded transit, average commute times fell by 20% over five years"; Undermines a Link = "Many commuters who give up their cars still drive to transit stations and park there, generating similar local congestion"
**fastest_path:** Strengthen = empirical evidence spanning the full chain end-to-end (transit → commute times). Undermine = park-and-ride behavior breaks the stated second link (lower car ownership → less congestion).
**explanation:** Row 1 provides direct empirical evidence that the full causal chain produced the claimed outcome in comparable cities — the strongest possible support. Row 2 disrupts the stated second link: if car-shedders drive to transit stations and park there, road congestion does not decrease despite lower car ownership, breaking the chain. Row 3 confirms only the first link (transit → car ownership) without reaching the conclusion. Row 4 challenges the third link (congestion → commute times) via remote work, but is less precisely targeted than row 2. Row 5 reinforces a stated link rather than closing the conclusion gap.
**mistake_c:** Row 3 confirms one stated link but does not bridge the chain all the way to the conclusion on commute times.
**mistake_d:** Row 4 challenges a different stated link than row 2 does, and its mechanism (remote work) is less tied to the specifics of transit expansion.
**mistake_e:** Row 5 is a reinforcing mechanism for an existing link; it strengthens but does not close the conclusion-level gap.
**common_trap:** Picking row 3 as the strongest strengthener because it cites a concrete statistic — but it confirms only a stated intermediate step, not the conclusion. End-to-end empirical evidence is the more powerful closer.
**takeaway:** In multi-step chains, the best strengthener spans the full conclusion; the best underminer targets a specific stated link with a realistic behavioral counter-mechanism.
**related_reading:** reading-di-06-two-part-analysis

---

## Q50
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Number Properties and Quadratic Constraint

P and Q are positive integers with P > Q, P × Q = 120, and P − Q = 2. Determine the value of P (column 1) and the value of Q × (P + Q) (column 2).

|     | Value of P | Q × (P + Q) |
|-----|------------|-------------|
| 10  |            |             |
| 12  |            |             |
| 15  |            |             |
| 20  |            |             |
| 120 |            |             |
| 220 |            |             |

**answer:** P = 12, Q × (P + Q) = 220
**fastest_path:** P = Q + 2 → Q(Q+2) = 120 → Q² + 2Q − 120 = 0 → discriminant = 484 = 22² → Q = 10, P = 12. Then Q(P+Q) = 10(22) = 220.
**explanation:** Substitute P = Q + 2 into P × Q = 120: Q(Q + 2) = 120 → Q² + 2Q − 120 = 0. Quadratic formula: Q = (−2 ± √(4 + 480)) / 2 = (−2 ± 22) / 2. Positive root: Q = 10, P = 12. Verify: 12 × 10 = 120 ✓, 12 − 10 = 2 ✓. Then Q × (P + Q) = 10 × 22 = 220.
**mistake_a:** 10 — Q's value placed into P's column. Both values appear in the options, making column-swapping a live trap.
**mistake_c:** 15 — trial guess: 15 × 13 = 195 ≠ 120. Fails the product constraint.
**mistake_d:** 20 — trial guess: 20 × 18 = 360 ≠ 120. Reflects skipping the algebraic setup.
**mistake_e:** 120 — the product itself, mistaken for one of the integers.
**common_trap:** Trial-and-error without the quadratic: students try nearby pairs and give up. Forming Q(Q + 2) = 120 directly yields the exact solution.
**takeaway:** Two-constraint integer problems: substitute P = Q + (difference), form the single-variable quadratic, apply the formula, verify both original conditions. Algebra beats guessing.
**related_reading:** reading-di-06-two-part-analysis

---

## Q51
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Geometric Sequence

The first three terms of a geometric sequence are 4, 12, and 36. Let T be the 6th term of the sequence and let R be the ratio of the 5th term to the 3rd term. Select the value of T (column 1) and the value of R (column 2).

|      | T (6th term) | R (5th ÷ 3rd) |
|------|--------------|---------------|
| 3    |              |               |
| 9    |              |               |
| 108  |              |               |
| 324  |              |               |
| 972  |              |               |
| 2916 |              |               |

**answer:** T = 972, R = 9
**fastest_path:** r = 3. T = 4 × 3^5 = 972. R = r^(5−3) = 3² = 9.
**explanation:** Common ratio r = 12/4 = 3. General term: aₙ = 4 × 3^(n−1). 6th term: T = 4 × 3^5 = 4 × 243 = 972. For R: 5th term = 4 × 3^4 = 324; 3rd term = 36. R = 324/36 = 9. Fast method: ratio of terms at positions m and n = r^(m−n) = 3^(5−3) = 3^2 = 9.
**mistake_d:** 324 — the 5th term placed into the T column; one step too early.
**mistake_c:** 108 — the 4th term (4 × 3³ = 108); two positions short of T.
**mistake_a:** 3 — the common ratio r, not the ratio of two specific terms R.
**mistake_f:** 2916 — computing 4 × 3^6 = 2916 using exponent 6 instead of 5 (off-by-one from n vs. n − 1).
**common_trap:** Using n instead of n − 1 in the general-term formula. The 6th term uses exponent 5 because the first term (n = 1) uses exponent 0.
**takeaway:** nth geometric term = a₁ × r^(n−1). Ratio of terms at positions m and n = r^(m−n). Subtract positions; do not use them as multipliers.
**related_reading:** reading-di-06-two-part-analysis

---

## Q52
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Cost Optimization with Floor Constraints

A logistics manager must ship exactly 50 packages split between Carrier A and Carrier B. Carrier A charges $8 per package plus a flat fee of $40 per shipment. Carrier B charges $12 per package with no flat fee. Each carrier must handle at least 5 packages. Let A be the number of packages sent to Carrier A. Determine the value of A that minimizes total cost (column 1) and the corresponding minimum total shipping cost in dollars (column 2).

|      | A (packages to Carrier A) | Minimum total cost |
|------|--------------------------|-------------------|
| 5    |                          |                   |
| 45   |                          |                   |
| 50   |                          |                   |
| $440 |                          |                   |
| $460 |                          |                   |
| $500 |                          |                   |

**answer:** A = 45, Minimum total cost = $460
**fastest_path:** Cost = 8A + 40 + 12(50−A) = 640 − 4A. Decreasing in A → maximize A. With B ≥ 5: A ≤ 45. Min cost = 640 − 4(45) = $460.
**explanation:** Total cost = [8A + 40] + [12(50 − A)] = 8A + 40 + 600 − 12A = 640 − 4A. This linear function decreases by $4 for every additional package sent to Carrier A. To minimize cost, maximize A subject to B = 50 − A ≥ 5, giving A ≤ 45. The A ≥ 5 floor is non-binding since we maximize A. Optimal: A = 45, B = 5. Min cost = 640 − 4(45) = $460. Verify: 8(45) + 40 + 12(5) = 360 + 40 + 60 = $460 ✓.
**mistake_a:** A = 5 — sending the minimum to Carrier A, driven by intuition "minimize the carrier with the flat fee." But the $40 is paid once regardless; each additional package to A saves $4 vs. B ($8 vs. $12 per package). The per-unit advantage dominates.
**mistake_c:** A = 50 — violates B ≥ 5; Carrier B must handle at least 5 packages.
**mistake_d:** $440 — cost if A = 50 (640 − 200 = 440), which requires B = 0. Tempting because it is the unconstrained minimum, but it violates the floor.
**mistake_e:** $500 could arise from A = 35: 640 − 4(35) = 500. Does not maximize A within the feasible region.
**common_trap:** Treating the $40 flat fee as a reason to minimize Carrier A usage. Once any packages go to A, the flat fee is sunk. The marginal decision depends purely on the $4/package cost advantage, which always favors sending more to A.
**takeaway:** Convert cost to an explicit function of the decision variable, determine whether it is increasing or decreasing, then apply the binding constraint. Sunk fixed fees do not affect marginal decisions.
**related_reading:** reading-di-06-two-part-analysis
