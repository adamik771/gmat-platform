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
**topic:** Quantitative — Percent Markup and Discount

A jacket costs $200. A store marks it up by 40% above cost, then applies a 15% discount to the marked-up price. Select the marked-up price before the discount is applied (column 1) and the final selling price after the discount (column 2).

|       | Marked-up price | Final selling price |
|-------|-----------------|---------------------|
| $170  |                 |                     |
| $200  |                 |                     |
| $238  |                 |                     |
| $280  |                 |                     |
| $315  |                 |                     |

**answer:** Marked-up price = $280, Final selling price = $238
**fastest_path:** Marked-up: 200 × 1.40 = $280. Final: 280 × 0.85 = $238.
**explanation:** The 40% markup is applied to the $200 cost: 200 × 1.40 = $280. The 15% discount is then applied to $280 (not to the original $200): 280 × 0.85 = $238. The key insight is that "15% off the marked-up price" means 85% of $280, not 85% of $200.
**mistake_a:** $170 — computed 200 × 0.85 (applying the discount to the original price), skipping the markup step entirely.
**mistake_b:** $200 — the original cost; no calculation was applied.
**mistake_e:** $315 — computed 200 × 1.40 × 1.15 (added the discount instead of subtracting it, treating the 15% as a second markup).
**common_trap:** Applying the 15% discount to the original $200 cost rather than the marked-up $280 price. Both operations must be applied sequentially to the correct base.
**takeaway:** Successive percent changes: each percentage applies to the result of the previous step, not to the original base.
**related_reading:** reading-di-06-two-part-analysis

---

## Q29
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Combined Work Rate

Three workers — Anna, Ben, and Cal — can each paint a fence alone in 6 hours, 4 hours, and 12 hours respectively. Select the time to paint the fence if only Anna and Ben work together (column 1) and the time if all three work together (column 2).

|          | Anna and Ben | All three |
|----------|--------------|-----------|
| 1.5 hrs  |              |           |
| 2.0 hrs  |              |           |
| 2.4 hrs  |              |           |
| 3.0 hrs  |              |           |
| 3.3 hrs  |              |           |

**answer:** Anna and Ben = 2.4 hrs, All three = 2.0 hrs
**fastest_path:** Anna+Ben rate: 1/6+1/4 = 5/12 → T = 12/5 = 2.4. All-three rate: 5/12+1/12 = 1/2 → T = 2.
**explanation:** Rates add. Anna: 1/6 fence per hour; Ben: 1/4; Cal: 1/12. Anna+Ben: 1/6+1/4 = 2/12+3/12 = 5/12 → time = 12/5 = 2.4 hours. All three: 5/12+1/12 = 6/12 = 1/2 → time = 2 hours. Sanity check: all-three time (2.0) must be less than Anna+Ben time (2.4) — adding Cal must speed things up.
**mistake_a:** 1.5 hrs — averaging two of the times or double-counting Cal's contribution.
**mistake_d:** 3.0 hrs — averaging the three individual times (6+4+12)/3; times do not average.
**mistake_e:** 3.3 hrs — harmonic-mean attempt gone wrong, or a mis-divided combined rate.
**common_trap:** Averaging times instead of adding rates. For parallel workers, add their rates (1/time), then invert the total for combined time.
**takeaway:** Work rates add; times do not. Combined time = 1 / (sum of individual rates).
**related_reading:** reading-di-06-two-part-analysis

---

## Q30
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations (Ages)

The sum of two siblings' ages is 35. The older sibling is 7 years older than the younger. Select the age of the younger sibling (column 1) and the age of the older sibling (column 2).

|     | Younger | Older |
|-----|---------|-------|
| 12  |         |       |
| 14  |         |       |
| 16  |         |       |
| 19  |         |       |
| 21  |         |       |

**answer:** Younger = 14, Older = 21
**fastest_path:** Sum 35, difference 7: younger = (35−7)/2 = 14, older = 14+7 = 21.
**explanation:** Let y and o be the ages. Two equations: y + o = 35 and o = y + 7. Substitute: y + (y + 7) = 35 → 2y = 28 → y = 14. Then o = 21. Verify: 14 + 21 = 35 and 21 − 14 = 7. Shortcut: for sum S and difference D, smaller = (S−D)/2 = (35−7)/2 = 14, larger = (S+D)/2 = 21.
**mistake_a:** 12 — arithmetic slip on the substitution, or halving 35 without accounting for the 7-year gap.
**mistake_c:** 16 — incorrectly halving the sum and rounding; a square split of 35 produces 17.5, not a clean integer.
**mistake_d:** 19 — a guess that 35 splits near 19/16, without anchoring to the difference.
**common_trap:** Solving for the older sibling first and writing that value in column 1 (the younger sibling's column). Always re-read which column asks for which sibling.
**takeaway:** Sum-and-difference system: smaller = (S−D)/2, larger = (S+D)/2. Fast and avoids substitution errors.
**related_reading:** reading-di-06-two-part-analysis

---

## Q31
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Logic — Conclusion and Premise Identification

Consider the following argument: "Employees who participate in the company wellness program take fewer sick days than employees who do not. A wellness program, therefore, makes employees healthier."

From the statements below, identify the conclusion of the argument (column 1) and one explicit premise stated in the argument (column 2).

| Statement                                                                    | Conclusion | Premise |
|------------------------------------------------------------------------------|------------|---------|
| A wellness program makes employees healthier                                 |            |         |
| Wellness-program participants take fewer sick days than non-participants     |            |         |
| Employees prefer wellness programs over enhanced insurance benefits          |            |         |
| Fewer sick days reduces the company's absenteeism costs                      |            |         |
| Non-participants never have good health outcomes                             |            |         |

**answer:** Conclusion = "A wellness program makes employees healthier"; Premise = "Wellness-program participants take fewer sick days than non-participants"
**fastest_path:** "Therefore" signals the conclusion. The sick-day statement is the explicitly given data (premise) that precedes it.
**explanation:** The word "therefore" marks the conclusion: the claim that wellness programs make employees healthier. The sick-day comparison is the explicit evidence stated in the argument — a premise. Options 3, 4, and 5 are not stated in the argument; they are outside the text entirely.
**mistake_c:** Not stated in the argument — employee preferences are never mentioned.
**mistake_d:** Not stated — cost implications of sick days are inferred downstream, not explicit in the passage.
**mistake_e:** Too extreme — the argument says "fewer sick days," not "non-participants never have good outcomes."
**common_trap:** Confusing the conclusion with its supporting evidence. The premise is what is offered as evidence; the conclusion is the claim derived from it.
**takeaway:** Conclusions are typically signaled by "therefore," "thus," "so," or "consequently." Premises are the stated reasons that precede the signal word.
**related_reading:** reading-di-06-two-part-analysis

---

## Q32
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Probability — Independent Events

A spinner has 5 equally-sized sections labeled 1 through 5. It is spun twice, with each spin independent. Select the probability of landing on 3 both times (column 1) and the probability of landing on a number greater than 3 at least once in the two spins (column 2).

|       | P(3 both times) | P(>3 at least once) |
|-------|-----------------|---------------------|
| 1/25  |                 |                     |
| 4/25  |                 |                     |
| 9/25  |                 |                     |
| 16/25 |                 |                     |
| 1/5   |                 |                     |

**answer:** P(3 both) = 1/25, P(>3 at least once) = 16/25
**fastest_path:** P(3 both) = (1/5)² = 1/25. P(>3 at least once) = 1 − (3/5)² = 16/25.
**explanation:** P(landing on 3) = 1/5. For independent spins, P(3 both) = (1/5)(1/5) = 1/25. Numbers greater than 3 are {4, 5}, so P(>3 per spin) = 2/5 and P(not >3 per spin) = 3/5. By complement: P(at least one >3) = 1 − (3/5)² = 1 − 9/25 = 16/25. The direct-addition trap: 2/5 + 2/5 = 4/5 overcounts the event where both spins land >3.
**mistake_b:** 4/25 — P(>3 on both spins): (2/5)² — a different event ("both >3," not "at least one >3").
**mistake_c:** 9/25 — P(not >3 on both spins), the complement of the target; subtract from 1 first.
**mistake_e:** 1/5 — the probability of landing on exactly 3 on one spin; wrong event, wrong column.
**common_trap:** Adding P(>3) twice (2/5 + 2/5 = 4/5) for "at least once" — this overcounts the both->3 case. Use the complement method instead.
**takeaway:** "At least once" in independent trials: use the complement. P(≥1) = 1 − (1−p)ⁿ.
**related_reading:** reading-di-06-two-part-analysis

---

## Q33
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Successive Percent Changes

A retailer purchases an item for $200, applies a 50% markup to set the retail price, and then offers a 20% discount off the retail price during a sale. Select the retail price after the markup but before the discount (column 1) and the net profit per item when it sells at the discounted price (column 2).

|       | Retail price (post-markup) | Net profit at sale price |
|-------|---------------------------|--------------------------|
| $40   |                           |                          |
| $120  |                           |                          |
| $200  |                           |                          |
| $240  |                           |                          |
| $300  |                           |                          |

**answer:** Retail price = $300, Net profit = $40
**fastest_path:** Retail: 200 × 1.50 = $300. Sale price: 300 × 0.80 = $240. Profit: 240 − 200 = $40.
**explanation:** Markup: 200 × 1.50 = $300 retail price. Discount applied to the retail price: 300 × 0.80 = $240 final sale price. Net profit = sale price − cost = $240 − $200 = $40. The combined multiplier is 1.50 × 0.80 = 1.20, so the item sells for 20% above cost — a $40 profit on a $200 base.
**mistake_b:** $120 — the dollar amount of the markup alone ($100) or some confused revenue–cost subtraction.
**mistake_c:** $200 — the original cost; no markup was applied.
**mistake_d:** $240 — the sale price after the discount, not the retail price before it. Column 1 asks for the pre-discount value.
**common_trap:** Computing the net markup as 50% − 20% = 30% of the original cost ($60). The 20% discount applies to $300, not $200, so the true net is 1.50 × 0.80 = 1.20, or 20% above cost ($40 profit), not $60.
**takeaway:** Successive percent changes multiply: apply each factor to the result of the prior step. A 50% markup then 20% off = net 1.20× (20% above cost).
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — LCM and Scheduling

Two alarm clocks ring simultaneously at 6:00 AM. Clock A rings every 45 minutes; Clock B rings every 60 minutes. Select the number of hours after 6:00 AM at which both clocks next ring simultaneously (column 1) and the total number of times Clock A rings strictly after 6:00 AM up to and including that simultaneous alarm (column 2).

|     | Hours to next simultaneous ring | Times Clock A rings |
|-----|---------------------------------|---------------------|
| 1   |                                 |                     |
| 2   |                                 |                     |
| 3   |                                 |                     |
| 4   |                                 |                     |
| 5   |                                 |                     |

**answer:** Hours to next simultaneous ring = 3, Times Clock A rings = 4
**fastest_path:** LCM(45, 60) = 180 min = 3 hrs. Clock A rings at 45, 90, 135, 180 min → 4 times.
**explanation:** The clocks ring together again at LCM(45, 60). Prime factorizations: 45 = 3² × 5; 60 = 2² × 3 × 5. LCM = 2² × 3² × 5 = 180 minutes = 3 hours. Clock A rings every 45 minutes after 6:00 AM: at 45, 90, 135, and 180 minutes — 4 rings total, with the 4th coinciding with the simultaneous alarm.
**mistake_a:** 1 hour — confusing LCM with GCF; GCF(45, 60) = 15 minutes = 0.25 hours (not an integer number of hours listed here).
**mistake_b:** 2 hours — 120 minutes is divisible by 60 but not by 45 (120/45 = 2.67); not a valid simultaneous ring.
**mistake_d:** 4 hours — 240 minutes is divisible by 60 but 240/45 = 5.33, so clocks don't ring together at 4 hours.
**common_trap:** Using GCF instead of LCM. GCF gives the largest common factor; LCM gives the smallest common multiple — the first time both events recur together.
**takeaway:** "First time both recur together" = LCM of their periods. Count one clock's firings from 0 up to the LCM (exclusive of start, inclusive of end).
**related_reading:** reading-di-06-two-part-analysis

---

## Q35
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Rectangle Dimensions

A rectangle has an area of 84 square centimeters and a perimeter of 38 centimeters. Select the length of the longer side (column 1) and the length of the shorter side (column 2).

|      | Longer side (cm) | Shorter side (cm) |
|------|------------------|-------------------|
| 4    |                  |                   |
| 7    |                  |                   |
| 9.5  |                  |                   |
| 12   |                  |                   |
| 14   |                  |                   |

**answer:** Longer side = 12 cm, Shorter side = 7 cm
**fastest_path:** l + w = 19 (half perimeter). Scan factor pairs of 84: 12 × 7 = 84 and 12 + 7 = 19. Done.
**explanation:** Perimeter 38 → l + w = 19. Area → l × w = 84. Scan factor pairs of 84 for the pair summing to 19: (1,84) sum 85; (2,42) sum 44; (3,28) sum 31; (4,21) sum 25; (6,14) sum 20; (7,12) sum 19. The pair is 7 and 12. Longer side = 12 cm, shorter = 7 cm. Algebraically: l² − 19l + 84 = 0 → (l − 7)(l − 12) = 0.
**mistake_a:** 4 — testing factor pair (4, 21): sum = 25 ≠ 19.
**mistake_c:** 9.5 — assuming a square with side = 19/2 = 9.5; but 9.5² = 90.25 ≠ 84.
**mistake_e:** 14 — testing factor pair (6, 14): sum = 20 ≠ 19.
**common_trap:** Assuming the shape is a square and computing √84 ≈ 9.17 or 19/2 = 9.5. A rectangle with equal sides would need area = 9.5² = 90.25, not 84.
**takeaway:** Rectangle dimension system: sum of sides = half perimeter; product = area. Scan factor pairs of the area for the one matching the sum — faster than the quadratic.
**related_reading:** reading-di-06-two-part-analysis

---

## Q36
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Arithmetic Sequence

In an arithmetic sequence, the third term is 11 and the eighth term is 31. Select the first term of the sequence (column 1) and the common difference (column 2).

|     | First term | Common difference |
|-----|------------|-------------------|
| 2   |            |                   |
| 3   |            |                   |
| 4   |            |                   |
| 5   |            |                   |
| 7   |            |                   |

**answer:** First term = 3, Common difference = 4
**fastest_path:** From term 3 to term 8 spans 5 gaps: d = (31−11)/5 = 4. a₁ = a₃ − 2d = 11 − 8 = 3.
**explanation:** In an arithmetic sequence, aₙ = a₁ + (n−1)d. From term 3 to term 8 is 5 gaps: d = (31 − 11) / 5 = 4. Back-calculate: a₁ = a₃ − 2d = 11 − 8 = 3. Verify: a₃ = 3 + 2(4) = 11 ✓; a₈ = 3 + 7(4) = 31 ✓.
**mistake_a:** 2 — using a₁ = a₃ − d (subtracting only one step instead of two back from term 3 to term 1).
**mistake_c:** 4 — the common difference, placed in the first-term column (column reversal).
**mistake_d:** 5 — off-by-one on step count: counting 8 − 3 + 1 = 6 steps instead of 5, giving d = 20/6 ≈ 3.3, then rounding to the nearest table value.
**common_trap:** Writing d in column 1 and a₁ in column 2 — they are both plausible numbers and easy to swap under time pressure.
**takeaway:** Steps between terms n and m = m − n. Then a₁ = aₙ − (n−1)d. Always verify with both given terms.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Identify Flaw

An editorial argues: "Country A requires all restaurant inspections to be unannounced. Country B recently adopted the same unannounced inspection policy. Therefore, Country B's food safety standards will improve to match Country A's."

From the statements below, identify the statement that most strengthens the argument (column 1) and the statement that most directly identifies a flaw in the reasoning (column 2).

| Statement                                                                                           | Strengthens | Flaw |
|-----------------------------------------------------------------------------------------------------|-------------|------|
| Studies across multiple countries show unannounced inspections significantly reduce safety violations |             |      |
| Country A has a longer history of food safety regulation than Country B                             |             |      |
| Country B's food safety problems stem primarily from causes unrelated to inspection timing          |             |      |
| Country A and Country B have different cuisine traditions                                           |             |      |
| Country B will implement inspections at the same frequency as Country A                             |             |      |

**answer:** Strengthens = "Studies across multiple countries show unannounced inspections significantly reduce safety violations"; Flaw = "Country B's food safety problems stem primarily from causes unrelated to inspection timing"
**fastest_path:** Strengthen = direct mechanism evidence (unannounced → fewer violations). Flaw = the argument's key assumption (inspection timing drives the safety gap) may be false.
**explanation:** The argument assumes Country B's food safety gap is caused by the announcement policy. Direct multi-country studies validating that mechanism provide the strongest support. The flaw: if Country B's problems originate elsewhere (staff training, supply chains, enforcement culture), changing inspection timing alone won't close the gap. Country A's longer regulatory history is background context, not mechanism evidence; cuisine differences are irrelevant; same inspection frequency addresses a different variable than timing.
**mistake_b:** Country A's longer regulatory history — provides context but does not validate the causal mechanism linking announcement policy to safety outcomes.
**mistake_d:** Different cuisine traditions — irrelevant to whether inspection timing affects compliance behavior.
**mistake_e:** Same inspection frequency — addresses frequency (a different variable); neither strengthens the announcement-timing mechanism nor identifies a flaw.
**common_trap:** Picking "Country A's longer history" as a flaw. It hints at alternative factors but is less direct than explicitly stating that Country B's problems have different causes.
**takeaway:** Strengthen by testing the proposed mechanism directly. Identify a flaw by showing the core assumption does not hold in this case.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations

A florist sells roses for $3 each and lilies for $5 each. On a given day the florist sold 120 flowers in total and collected exactly $460 in revenue. Select the number of roses sold (column 1) and the number of lilies sold (column 2).

|     | Roses | Lilies |
|-----|-------|--------|
| 40  |       |        |
| 50  |       |        |
| 60  |       |        |
| 70  |       |        |
| 80  |       |        |

**answer:** Roses = 70, Lilies = 50
**fastest_path:** All-roses baseline: 120 × $3 = $360. Surplus: $100. Each rose-to-lily swap adds $2. Swaps = 50 → lilies = 50, roses = 70.
**explanation:** Let r = roses, l = lilies. r + l = 120 and 3r + 5l = 460. Substitute r = 120 − l: 3(120 − l) + 5l = 460 → 360 + 2l = 460 → l = 50. Then r = 70. Verify: 70 × 3 + 50 × 5 = 210 + 250 = 460 ✓. Shortcut: baseline all-roses revenue = $360; $100 surplus ÷ $2 uplift per lily-swap = 50 lilies.
**mistake_a:** 40 lilies — under-swapping; 80 roses + 40 lilies = $240 + $200 = $440 ≠ $460.
**mistake_c:** 60 lilies — over-swapping; 60 roses + 60 lilies = $180 + $300 = $480 ≠ $460.
**mistake_e:** 80 lilies — extreme over-swap; 40 roses + 80 lilies = $120 + $400 = $520 ≠ $460.
**common_trap:** Equal split (60/60) because both quantities are round numbers — but equal split gives $480, $20 above target.
**takeaway:** Two-commodity problems: set up a count equation and a revenue equation, substitute, and solve. The baseline-swap shortcut (all of the cheaper, then swap to hit revenue) is often faster.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets

A survey of 200 employees found that 120 own a smartphone, 90 own a tablet, and 40 own neither device. Select the number of employees who own both a smartphone and a tablet (column 1) and the number who own a smartphone but not a tablet (column 2).

|     | Own both | Smartphone only |
|-----|----------|-----------------|
| 30  |          |                 |
| 40  |          |                 |
| 50  |          |                 |
| 60  |          |                 |
| 70  |          |                 |

**answer:** Own both = 50, Smartphone only = 70
**fastest_path:** At-least-one = 200 − 40 = 160. Both = 120 + 90 − 160 = 50. Smartphone-only = 120 − 50 = 70.
**explanation:** Employees owning at least one device = 200 − 40 = 160. Inclusion-exclusion: |S ∪ T| = |S| + |T| − |S ∩ T| → 160 = 120 + 90 − |S ∩ T| → |S ∩ T| = 50. Smartphone-only = 120 − 50 = 70. Verify the full partition: 70 (phone only) + 40 (tablet only) + 50 (both) + 40 (neither) = 200 ✓.
**mistake_a:** 30 — arithmetic slip in the inclusion-exclusion, e.g., treating 120 + 90 − 200 = 10 as the overlap then halving or adjusting incorrectly.
**mistake_b:** 40 — confusing the "neither" count with the "both" count; they are different things.
**mistake_d:** 60 — off-by-10 slip, perhaps computing 200 − 160 = 40 as the overlap instead of 210 − 160 = 50.
**common_trap:** Using total (200) instead of the "at-least-one" count (160) in the inclusion-exclusion formula.
**takeaway:** Inclusion-exclusion: |A ∩ B| = |A| + |B| − |A ∪ B|. First compute |A ∪ B| = total − neither, then substitute.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Simple vs Compound Interest

An investor deposits $5,000 in each of two accounts. Account P pays 6% simple annual interest; Account Q pays 5% interest compounded annually. Select the total interest earned by Account P after 2 years (column 1) and the total interest earned by Account Q after 2 years (column 2).

|         | Account P interest | Account Q interest |
|---------|--------------------|--------------------|
| $487.50 |                    |                    |
| $500.00 |                    |                    |
| $512.50 |                    |                    |
| $550.00 |                    |                    |
| $600.00 |                    |                    |

**answer:** Account P = $600, Account Q = $512.50
**fastest_path:** P simple: 5,000 × 0.06 × 2 = $600. Q compound: 5,000 × 1.05² − 5,000 = 5,512.50 − 5,000 = $512.50.
**explanation:** Account P (simple interest): I = P × r × t = 5,000 × 0.06 × 2 = $600. Account Q (compound interest): Balance = 5,000 × (1.05)² = 5,000 × 1.1025 = $5,512.50. Interest = $512.50. Counter-intuitive result: the simple-interest account earns more because its rate advantage (6% vs 5%) dominates the compounding benefit over just 2 years.
**mistake_a:** $487.50 — an erroneous Q computation, perhaps 5,000 × 0.0975 (adding year-2 interest at the wrong base).
**mistake_b:** $500.00 — Q computed as simple interest: 5,000 × 0.05 × 2; forgets the compounding effect in year 2.
**mistake_d:** $550.00 — possibly P computed at an incorrect rate, or Q confused with 5,000 × (1.055)².
**common_trap:** Assuming compound interest always exceeds simple interest. Compounding only wins when the compound rate is high enough and the horizon is long enough to overcome a lower rate.
**takeaway:** Simple: P × r × t. Compound: P × (1+r)ᵗ − P. Check both; the higher rate can outperform higher compounding over short time horizons.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Role of Evidence and Reasoning Flaw

A manager argues: "Our advertising spend increased by 30% last quarter. Sales rose 25% over the same period. Therefore, our increased advertising is driving our sales growth." A financial analyst responds: "Our main competitor went out of business in the same quarter."

From the statements below, identify the role of the analyst's statement in the discussion (column 1) and the statement that best describes the flaw in the manager's reasoning (column 2).

| Statement                                                                           | Role of analyst's statement | Flaw in reasoning |
|-------------------------------------------------------------------------------------|-----------------------------|-------------------|
| It provides an alternative explanation for the observed sales increase              |                             |                   |
| It challenges the reported data on advertising expenditure                          |                             |                   |
| The manager confuses correlation with causation                                     |                             |                   |
| The manager incorrectly measures advertising effectiveness                          |                             |                   |
| It confirms that increased advertising always produces sales growth                 |                             |                   |

**answer:** Role = "It provides an alternative explanation for the observed sales increase"; Flaw = "The manager confuses correlation with causation"
**fastest_path:** Analyst note = rival cause (competitor exit could explain the sales rise). Core flaw = inferring causation from temporal co-occurrence.
**explanation:** The analyst's statement introduces an alternative cause: the competitor's exit may have redirected customers to this company, producing the sales rise independent of advertising. The manager's core flaw is inferring a causal relationship from a mere temporal correlation — both advertising and sales rose together, but that does not establish that one caused the other. Options 2 and 4 are unsupported by the text; option 5 directly contradicts the analyst's point.
**mistake_b:** Challenges advertising data — the analyst says nothing about whether the 30% ad-spend figure is accurate.
**mistake_d:** Incorrect measurement — not mentioned; the argument does not address how advertising effectiveness is quantified.
**mistake_e:** Confirms advertising always produces growth — the analyst introduces doubt about causation, not confirmation.
**common_trap:** Selecting "challenges the data" as the analyst's role. The analyst accepts the figures; the challenge is to the causal interpretation, not to the numbers.
**takeaway:** "Provides an alternative explanation" is categorically different from "challenges data" or "weakens the conclusion." Map each option to its precise logical function before selecting.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Rate with Partial-Completion Percentage

A high-speed printer completes 40% of a large print job in the first 2 hours, running at 60 pages per hour. For the remaining portion of the job, the printer runs at 45 pages per hour. Select the total number of pages in the job (column 1) and the total time required to complete the entire job (column 2).

|       | Total pages | Total time (hours) |
|-------|-------------|--------------------|
| 4     |             |                    |
| 5     |             |                    |
| 6     |             |                    |
| 200   |             |                    |
| 270   |             |                    |
| 300   |             |                    |

**answer:** Total pages = 300, Total time = 6 hours
**fastest_path:** Pages in first 2 hrs: 60 × 2 = 120 = 40% of total → total = 300. Remaining: 180 pages ÷ 45/hr = 4 hrs → total time = 6 hrs.
**explanation:** Pages completed in the first 2 hours: 60 × 2 = 120. Since 120 pages is 40% of the whole job: total = 120 / 0.40 = 300 pages. Remaining: 300 − 120 = 180 pages. Time at 45 pages/hr: 180 / 45 = 4 hours. Total time = 2 + 4 = 6 hours.
**mistake_a:** 4 hours — the time for the second phase only, forgetting to add the initial 2 hours.
**mistake_b:** 5 hours — probably 300 / 60 = 5, using the first-phase rate for the full job; ignores the rate change.
**mistake_d:** 200 pages — arithmetic slip on 120 / 0.40, perhaps computing 120 × (1 + 0.40) = 168 or 120 / 0.60 = 200.
**mistake_e:** 270 pages — computing 120 / 0.40 as 120 × (1 + something) ≈ 270, a division-as-multiplication error.
**common_trap:** Using the first-phase rate to estimate the full job: 300 / 60 = 5 hours. This ignores the slower second-phase rate and underestimates total time.
**takeaway:** Partial-completion problems: use the known fraction to back-calculate the total, then handle each phase separately at its own rate.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Ratio Allocation with Percent Changes

A portfolio allocates funds among three sectors in the ratio 2:3:5 (Technology:Healthcare:Energy), with a total value of $400,000. Market changes cause the Technology allocation to increase by 50% and the Healthcare allocation to decrease by 20%, while the Energy allocation remains unchanged. Select the new value of the Technology allocation (column 1) and the new total portfolio value (column 2).

|          | Technology (new) | New total portfolio |
|----------|------------------|---------------------|
| $80,000  |                  |                     |
| $96,000  |                  |                     |
| $120,000 |                  |                     |
| $400,000 |                  |                     |
| $416,000 |                  |                     |

**answer:** Technology (new) = $120,000, New total portfolio = $416,000
**fastest_path:** Tech: 2/10 × 400k = $80k → +50% → $120k. Health: 3/10 × 400k = $120k → −20% → $96k. Energy: $200k unchanged. New total: 120 + 96 + 200 = $416k.
**explanation:** The ratio parts sum to 2+3+5 = 10. Original allocations: Technology = 2/10 × $400,000 = $80,000; Healthcare = 3/10 × $400,000 = $120,000; Energy = 5/10 × $400,000 = $200,000. After market changes: Technology = $80,000 × 1.50 = $120,000; Healthcare = $120,000 × 0.80 = $96,000; Energy = $200,000. New total = $120,000 + $96,000 + $200,000 = $416,000. The total rises because Technology's gain (+$40,000) exceeds Healthcare's loss (−$24,000).
**mistake_a:** $80,000 — the original Technology value before the 50% increase is applied.
**mistake_b:** $96,000 — the new Healthcare allocation, placed in the Technology column.
**mistake_d:** $400,000 — the original total; incorrectly assumes the sector changes net to zero (as if this were a rebalancing, not a value change).
**common_trap:** Treating percent changes to individual sectors as internal rebalancing that leaves the total unchanged. The percent changes are real gains and losses — the total must be recomputed.
**takeaway:** When percent changes are applied to components of a total, recompute each component then sum. Don't assume the total is preserved.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Programming (Profit Maximization)

A manufacturer produces two products, X and Y. Each unit of X requires 3 minutes on Machine 1 and 4 minutes on Machine 2. Each unit of Y requires 4 minutes on Machine 1 and 2 minutes on Machine 2. Machine 1 is available for 240 minutes per shift; Machine 2 is available for 240 minutes per shift. Product X earns $6 profit per unit; Product Y earns $4 profit per unit. The manufacturer produces only whole-number quantities and wants to maximize total daily profit.

Select the number of units of X that achieves maximum daily profit (column 1) and the corresponding maximum daily profit in dollars (column 2).

|     | Units of X | Maximum daily profit ($) |
|-----|------------|--------------------------|
| 0   |            |                          |
| 24  |            |                          |
| 48  |            |                          |
| 60  |            |                          |
| 360 |            |                          |
| 384 |            |                          |

**answer:** Units of X = 48, Maximum daily profit = 384
**fastest_path:** Corner points: (0,60) → $240; (60,0) → $360; constraint intersection (48,24) → $384. Max at (48,24).
**explanation:** Constraints: 3x + 4y ≤ 240 (M1) and 4x + 2y ≤ 240 (M2), x,y ≥ 0. Objective: maximize 6x + 4y. Evaluate all corner points of the feasible region. (0,0): $0. (0,60): M1 binds (4×60=240), M2: 2×60=120 ≤ 240; profit = $240. (60,0): M2 binds (4×60=240), M1: 3×60=180 ≤ 240; profit = $360. Intersection of both binding constraints: 3x+4y=240 and 4x+2y=240. Multiply the second by 2: 8x+4y=480. Subtract the first: 5x=240 → x=48, y=(240−144)/4=24. Profit = 6(48)+4(24) = 288+96 = $384. Verify: M1: 3(48)+4(24)=144+96=240 ✓; M2: 4(48)+2(24)=192+48=240 ✓. Maximum is $384 at x=48, y=24.
**mistake_d:** 60 units of X — profit $360, feasible but suboptimal; the interior vertex (48,24) does better by also using Y.
**mistake_b:** 24 units of X — that is the optimal Y quantity, placed in the wrong column.
**mistake_e:** $360 — the profit at axis vertex (60,0); not the global maximum.
**common_trap:** Stopping at the axis vertices without testing the constraint-intersection interior point. When two resource limits are both binding simultaneously, the interior point often exceeds the axis-only solutions.
**takeaway:** LP with two constraints: test every corner point including the intersection of both binding constraints. Both resources fully utilized at the optimal often signals the interior point is best.
**related_reading:** reading-di-06-two-part-analysis
