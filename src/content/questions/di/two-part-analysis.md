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
**topic:** Quantitative — Sequential Discounts

A jacket is originally priced at $200. The store first applies a 20% discount. Then, at checkout, a 25% coupon is applied to the already-discounted price. Select the price after only the first discount (column 1) and the final price after both discounts (column 2).

|       | After first discount | After both discounts |
|-------|----------------------|----------------------|
| $110  |                      |                      |
| $120  |                      |                      |
| $140  |                      |                      |
| $150  |                      |                      |
| $160  |                      |                      |
| $180  |                      |                      |

**answer:** After first discount = $160, After both discounts = $120
**fastest_path:** First: $200 × 0.80 = $160. Second: $160 × 0.75 = $120.
**explanation:** Step 1: Apply the 20% discount to the original price. $200 × (1 − 0.20) = $200 × 0.80 = $160. Step 2: Apply the 25% coupon to the discounted price — not to the original. $160 × (1 − 0.25) = $160 × 0.75 = $120. Final price = $120. The most common error is netting the two discounts as if they were additive (20% + 25% = 45%), which would give $200 × 0.55 = $110 — wrong because each percentage applies to a different base.
**mistake_a:** $110 — the additive-discount error: (1 − 0.20 − 0.25) = 0.55, applied to the original $200. Percentages must be applied sequentially to the running price, not summed.
**mistake_c:** $140 — likely applying 30% total off the original (perhaps confusing the two discount rates), yielding $200 × 0.70 = $140.
**mistake_d:** $150 — applying only the 25% coupon to the original price ($200 × 0.75), skipping the first 20% discount.
**mistake_f:** $180 — misreading the first discount as 10% rather than 20%: $200 × 0.90 = $180.
**common_trap:** Treating sequential percentage discounts as additive. The 25% coupon applies to $160, not to $200.
**takeaway:** Sequential discounts are multiplicative: apply each rate to the current price, not to the original. (1 − d₁)(1 − d₂) ≠ 1 − (d₁ + d₂).
**related_reading:** reading-di-06-two-part-analysis

---

## Q29
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Round-Trip Distance and Time

A cyclist rides from Town A to Town B at 15 miles per hour, then immediately returns from Town B to Town A at 10 miles per hour. The one-way distance is 30 miles. Select the time to travel from A to B in hours (column 1) and the total round-trip time in hours (column 2).

|        | A to B | Total round trip |
|--------|--------|------------------|
| 2 hrs  |        |                  |
| 3 hrs  |        |                  |
| 4 hrs  |        |                  |
| 5 hrs  |        |                  |
| 6 hrs  |        |                  |
| 7 hrs  |        |                  |

**answer:** A to B = 2 hrs, Total round trip = 5 hrs
**fastest_path:** A→B: 30/15 = 2. B→A: 30/10 = 3. Total = 5.
**explanation:** Time from A to B = distance / speed = 30 / 15 = 2 hours. Time from B to A = 30 / 10 = 3 hours. Total round-trip time = 2 + 3 = 5 hours. A quick sanity check: the combined time (5 hours) must be greater than the faster leg alone (2 hours) and less than twice the slower leg alone (6 hours). 5 sits in that range. The average-speed trap: averaging 15 and 10 to get 12.5 mph and then computing 60 / 12.5 = 4.8 hours is the wrong method — for equal distances, use the harmonic mean of the speeds, which happens to give the correct total time of 5 hours only because rates must be combined via their reciprocals.
**mistake_b:** 3 hrs for column 1 — that is the return leg time (B→A at 10 mph), not the outbound leg.
**mistake_c:** 4 hrs for column 2 — assumes the same travel time both ways using only the faster speed: 2 × 2 = 4, ignoring that the return is slower.
**mistake_e:** 6 hrs for column 2 — uses only the slower speed for both legs: (30 + 30) / 10 = 6, ignoring the faster outbound leg.
**mistake_f:** 7 hrs — arithmetic error, possibly 3 + 4 or a different miscount between the two legs.
**common_trap:** Picking 3 hours for column 1 (the return time) rather than the outbound time, or doubling the outbound time for column 2 (forgetting the legs have different speeds).
**takeaway:** Round-trip problems: compute each leg separately using time = distance / speed, then sum. Do not average the speeds or double one leg's time.
**related_reading:** reading-di-06-two-part-analysis

---

## Q30
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Multiples

Select the largest multiple of 8 that is less than 50 (column 1) and the smallest multiple of 7 that is greater than 30 (column 2).

|    | Largest multiple of 8 below 50 | Smallest multiple of 7 above 30 |
|----|-------------------------------|----------------------------------|
| 32 |                               |                                  |
| 35 |                               |                                  |
| 40 |                               |                                  |
| 42 |                               |                                  |
| 48 |                               |                                  |
| 56 |                               |                                  |

**answer:** Largest multiple of 8 below 50 = 48, Smallest multiple of 7 above 30 = 35
**fastest_path:** 8 × 6 = 48 (next is 56 > 50). 7 × 5 = 35 (previous is 28 ≤ 30).
**explanation:** Multiples of 8: 8, 16, 24, 32, 40, 48, 56, … The largest that is strictly less than 50 is 48 (since 56 > 50). Multiples of 7: 7, 14, 21, 28, 35, 42, … The smallest that is strictly greater than 30 is 35 (since 28 ≤ 30). Both conditions are strict inequalities ("less than" and "greater than"), so 50 and 30 themselves are excluded.
**mistake_a:** 32 for column 1 — a valid multiple of 8 but not the largest one below 50; 40 and 48 are both larger and still below 50.
**mistake_c:** 40 for column 1 — also a multiple of 8 below 50, but 48 is larger and still qualifies.
**mistake_d:** 42 for column 2 — a multiple of 7 greater than 30, but not the smallest; 35 < 42 and 35 also satisfies the condition.
**mistake_f:** 56 for column 1 — a multiple of 8 but exceeds 50, so it fails the "less than 50" condition.
**common_trap:** Stopping at the first qualifying multiple seen rather than confirming it is the LARGEST (col 1) or SMALLEST (col 2) one meeting the condition.
**takeaway:** "Largest X below N": list multiples ascending until you overshoot N, then step back one. "Smallest X above N": list multiples ascending until you clear N.
**related_reading:** reading-di-06-two-part-analysis

---

## Q31
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Mean and Missing Value

A student scored 78 and 82 on her first two exams. She wants an average of exactly 85 across all three exams. Select the score she needs on the third exam (column 1) and the total number of points she must earn across all three exams (column 2).

|     | Required third-exam score | Total points across three exams |
|-----|---------------------------|---------------------------------|
| 85  |                           |                                 |
| 90  |                           |                                 |
| 95  |                           |                                 |
| 100 |                           |                                 |
| 245 |                           |                                 |
| 255 |                           |                                 |

**answer:** Required third-exam score = 95, Total points across three exams = 255
**fastest_path:** Total needed = 85 × 3 = 255. Already have 78 + 82 = 160. Third = 255 − 160 = 95.
**explanation:** To average 85 across three exams, the total points must equal 85 × 3 = 255. She has already earned 78 + 82 = 160 points. The required third score = 255 − 160 = 95. Verify: (78 + 82 + 95) / 3 = 255 / 3 = 85. ✓ The key insight is to convert the average target to a sum target first, then subtract what is already earned.
**mistake_a:** 85 for column 1 — picking the target average as the required score. A third score of 85 would give total 78+82+85=245 and average 81.7, not 85.
**mistake_b:** 90 for column 1 — underestimate. Score of 90 gives total 250, average 83.3, not 85.
**mistake_d:** 100 for column 1 — overestimate. Score of 100 gives total 260, average 86.7, not 85.
**mistake_e:** 245 for column 2 — computing 78 + 82 + 85 = 245, inserting the target average as if it were the third score. The correct total is 85 × 3 = 255.
**common_trap:** Confusing the target average (85) with the required third score, or computing the total as 78 + 82 + 85 = 245 rather than 85 × 3 = 255.
**takeaway:** Missing-value average problems: convert the desired average to a total (mean × count), subtract the known sum, and the remainder is the missing value.
**related_reading:** reading-di-06-two-part-analysis

---

## Q32
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Counting Multiples and LCM

Among all integers from 1 to 100 inclusive, select the count of multiples of 4 (column 1) and the count of integers that are multiples of both 4 and 6 (column 2).

|    | Multiples of 4 in [1, 100] | Multiples of both 4 and 6 in [1, 100] |
|----|---------------------------|---------------------------------------|
| 8  |                           |                                       |
| 12 |                           |                                       |
| 16 |                           |                                       |
| 20 |                           |                                       |
| 25 |                           |                                       |
| 33 |                           |                                       |

**answer:** Multiples of 4 in [1, 100] = 25, Multiples of both 4 and 6 in [1, 100] = 8
**fastest_path:** Multiples of 4: floor(100/4) = 25. Both 4 and 6: LCM(4,6) = 12 → floor(100/12) = 8.
**explanation:** Multiples of 4 from 1 to 100: 4, 8, 12, …, 100. Count = 100 / 4 = 25. An integer is a multiple of both 4 and 6 if and only if it is a multiple of their least common multiple. LCM(4, 6) = 12 (since 4 = 2² and 6 = 2 × 3; LCM = 2² × 3 = 12). Multiples of 12 from 1 to 100: 12, 24, 36, …, 96. Count = floor(100 / 12) = 8 (since 12 × 8 = 96 ≤ 100 but 12 × 9 = 108 > 100).
**mistake_b:** 12 for column 2 — confusing the LCM value (12) with the count of its multiples in [1, 100].
**mistake_c:** 16 for column 1 — possibly computing floor(100/6) = 16, using the wrong divisor.
**mistake_d:** 20 for column 1 — possibly computing 100/5 = 20, using 5 instead of 4 as the divisor.
**mistake_f:** 33 for column 2 — computing floor(100/3) = 33, confusing LCM(4,6) with 3.
**common_trap:** For column 2, multiplying 4 × 6 = 24 and computing floor(100/24) = 4 — using the product rather than the LCM. LCM(4, 6) = 12, not 24.
**takeaway:** "Multiple of both A and B" means multiple of LCM(A, B). Count of multiples of N in [1, k] = floor(k / N).
**related_reading:** reading-di-06-two-part-analysis

---

## Q33
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Sequential Percentage (Markup then Discount)

A retailer buys an item for $240 and marks it up 50% to set the retail price. After one week, the retailer applies a 20% discount to the retail price. Select the retail price before the discount (column 1) and the final selling price after the discount (column 2).

|       | Retail price (before discount) | Final selling price (after discount) |
|-------|-------------------------------|--------------------------------------|
| $240  |                               |                                      |
| $288  |                               |                                      |
| $312  |                               |                                      |
| $360  |                               |                                      |
| $408  |                               |                                      |
| $432  |                               |                                      |

**answer:** Retail price (before discount) = $360, Final selling price (after discount) = $288
**fastest_path:** Markup: $240 × 1.50 = $360. Discount: $360 × 0.80 = $288.
**explanation:** Retail price = cost × (1 + markup rate) = $240 × 1.50 = $360. This is column 1. Final selling price = retail price × (1 − discount rate) = $360 × 0.80 = $288. Column 2 = $288. The retailer still profits: $288 − $240 = $48 per unit. Net multiplier: $240 × 1.50 × 0.80 = $240 × 1.20 = $288 — a 20% net return over cost, not the 30% implied by simply subtracting the rates (50% − 20%).
**mistake_a:** $240 for column 1 — using the cost as the retail price; the markup was never applied.
**mistake_c:** $312 for column 2 — the "net rate" error: treating a 50% markup and 20% discount as a net 30% markup → $240 × 1.30 = $312. The 20% discount applies to $360, not $240.
**mistake_e:** $408 for column 2 — applying the discount as a further markup: $360 × 1.20 × something, or conflating markup and discount direction.
**mistake_f:** $432 for column 2 — compounding both rates upward: $240 × 1.50 × 1.20 = $432. Applying the 20% as an additional markup rather than a discount.
**common_trap:** Netting a 50% markup and 20% discount as a 30% net markup ($312). The discount applies to the marked-up price, so the math is multiplicative: × 1.50 × 0.80 = × 1.20, not × 1.30.
**takeaway:** Sequential markup/discount: net multiplier = (1 + markup)(1 − discount). Do not subtract percentage rates.
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthen and Weaken

A pharmaceutical company claims: "Our new sleep supplement reduced insomnia symptoms in 70% of participants in a 6-week clinical trial with 200 volunteers. Therefore, the supplement is an effective treatment for insomnia."

From the options below, select the statement that most weakens the company's conclusion (column 1) and the statement that most strengthens the company's conclusion (column 2).

| Statement | Most weakens | Most strengthens |
|-----------|--------------|-----------------|
| The trial did not include a placebo control group. | | |
| Participants who completed the trial rated their sleep quality highly at week 6. | | |
| A 12-month independent follow-up confirmed sustained symptom reduction in the treated group. | | |
| Natural insomnia resolution occurs in approximately 30% of untreated individuals within 6 weeks. | | |
| The supplement contains melatonin and magnesium, both linked to sleep promotion in prior research. | | |

**answer:** Most weakens = "The trial did not include a placebo control group."; Most strengthens = "A 12-month independent follow-up confirmed sustained symptom reduction in the treated group."
**fastest_path:** Weakens: no placebo = no baseline comparison → 70% could be pure natural remission. Strengthens: independent long-term replication = strongest causal evidence.
**explanation:** Without a placebo arm, there is no way to separate the supplement's effect from natural remission, the placebo effect, or any other concurrent factor. This fatally undermines the causal conclusion. The strongest support for a causal claim is independent replication with a long follow-up (option c), which validates both the effect and its durability — both essential for calling something an "effective treatment." Option d (30% natural resolution) is a secondary weakener: it implies the supplement's added benefit may be only ~40 percentage points above the natural rate, but the study design is still uncontrolled. Option d weakens, but less fundamentally than the absence of a placebo.
**mistake_b:** "Participants who completed the trial rated their sleep quality highly" — this is a satisfaction measure with survivor bias (only completers counted) and does not isolate the supplement's causal effect.
**mistake_d:** "Natural resolution ~30% in 6 weeks" — this weakens the conclusion by narrowing the supplement's apparent benefit, but it is not as devastating as the absence of a placebo, since the 70% rate still substantially exceeds 30%.
**mistake_e:** "Contains melatonin and magnesium" — mechanism plausibility does not establish causal efficacy. Knowing an ingredient is associated with sleep does not confirm this formulation produces the claimed clinical outcome.
**common_trap:** Choosing option d as the primary weakener because it mentions a competing rate. The deeper flaw is the absence of a control group, which makes the 70% statistic uninterpretable — you cannot know what rate would have occurred without the supplement.
**takeaway:** Causation arguments: a missing control group (no placebo) is a fatal structural flaw — it makes the treatment rate uninterpretable. Independent replication over time is the gold standard for "most strengthens."
**related_reading:** reading-di-06-two-part-analysis

---

## Q35
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Divisibility Constraint

Positive integers a and b satisfy: a − b = 12 and a ÷ b is also a positive integer. Select the largest possible value of b (column 1) and the corresponding value of a (column 2).

|    | Largest possible b | Corresponding a |
|----|--------------------|-----------------|
| 4  |                    |                 |
| 6  |                    |                 |
| 12 |                    |                 |
| 18 |                    |                 |
| 24 |                    |                 |
| 36 |                    |                 |

**answer:** Largest possible b = 12, Corresponding a = 24
**fastest_path:** a = b + 12. a/b = (b + 12)/b = 1 + 12/b. For this to be an integer, b must divide 12. Largest divisor of 12 is 12 → a = 24.
**explanation:** Since a − b = 12, we have a = b + 12. The condition that a/b is a positive integer means (b + 12)/b = 1 + 12/b must be an integer, which requires b to be a positive divisor of 12. The positive divisors of 12 are 1, 2, 3, 4, 6, and 12. The largest is b = 12, giving a = 12 + 12 = 24. Verify: a − b = 24 − 12 = 12 ✓; a/b = 24/12 = 2, a positive integer ✓.
**mistake_a:** b = 4 — a valid solution (a = 16, 16/4 = 4 ✓) but not the largest qualifying b.
**mistake_b:** b = 6 — also valid (a = 18, 18/6 = 3 ✓) but not the largest.
**mistake_d:** b = 18 — gives a = 30; a/b = 30/18 = 5/3, not an integer. 18 does not divide 12.
**mistake_e:** b = 24 — gives a = 36; a/b = 36/24 = 3/2, not an integer.
**mistake_f:** b = 36 — gives a = 48; a/b = 48/36 = 4/3, not an integer.
**common_trap:** Trying b = 18 or b = 24 because they are larger numbers in the row set without checking that b must divide 12. The constraint is not "b ≤ 12" but "b divides 12."
**takeaway:** If a − b = k and a/b is a positive integer, then b must divide k. List the divisors of k, identify the largest, and read off a = b + k.
**related_reading:** reading-di-06-two-part-analysis

---

## Q36
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Simple vs. Compound Interest

An account earns 12% simple annual interest on a principal of $500. A second account earns 10% interest compounded annually on the same $500 principal. Select the total interest earned in the simple-interest account after 2 years (column 1) and the balance in the compound-interest account after 2 years (column 2).

|       | Simple account: total interest after 2 yrs | Compound account: balance after 2 yrs |
|-------|--------------------------------------------|---------------------------------------|
| $60   |                                            |                                       |
| $100  |                                            |                                       |
| $120  |                                            |                                       |
| $550  |                                            |                                       |
| $600  |                                            |                                       |
| $605  |                                            |                                       |

**answer:** Simple account: total interest after 2 yrs = $120, Compound account: balance after 2 yrs = $605
**fastest_path:** Simple interest: $500 × 0.12 × 2 = $120. Compound balance: $500 × 1.10² = $500 × 1.21 = $605.
**explanation:** Simple interest: I = P × r × t = $500 × 0.12 × 2 = $120. Column 1 = $120 (interest only, not the full balance of $620). Compound interest: balance after 2 years = P × (1 + r)² = $500 × (1.10)² = $500 × 1.21 = $605. Column 2 = $605 (the full balance). The compounding effect: year 1 earns $50 interest; year 2 earns 10% on $550 = $55, not $50. Total compound interest = $105, total balance = $605.
**mistake_a:** $60 — one year of simple interest only ($500 × 0.12 × 1 = $60); forgot to multiply by 2 years.
**mistake_b:** $100 — two years of 10% simple interest on $500 ($500 × 0.10 × 2 = $100); applied the compound account's rate using simple-interest logic, and directed the result to the wrong column.
**mistake_d:** $550 — compound balance after 1 year ($500 × 1.10 = $550); stopped one year early.
**mistake_e:** $600 — applied simple-interest logic to the compound account: $500 + $500 × 0.10 × 2 = $600, missing the second-year compounding effect on the accumulated interest.
**common_trap:** Computing $600 for the compound balance by applying simple-interest arithmetic. Compounding earns interest on interest: year 2 earns 10% on $550 (= $55), not 10% on $500 (= $50), giving $605 not $600.
**takeaway:** Simple interest: I = Prt (linear growth). Compound interest: Balance = P(1 + r)ⁿ (exponential growth). The difference appears from year 2 onward because compounding earns interest on prior accumulated interest.
**related_reading:** reading-di-06-two-part-analysis

---

## Q37
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Integer Constraint with Exact Total

A group orders pizza slices at $6 each and soft drinks at $9 each, spending exactly $60. They order at least 3 pizza slices and at least 3 soft drinks. Select the number of pizza slices ordered (column 1) and the number of soft drinks ordered (column 2).

|   | Pizza slices | Soft drinks |
|---|--------------|-------------|
| 2 |              |             |
| 3 |              |             |
| 4 |              |             |
| 5 |              |             |
| 6 |              |             |
| 7 |              |             |

**answer:** Pizza slices = 4, Soft drinks = 4
**fastest_path:** 6p + 9s = 60 → 2p + 3s = 20. Try s = 4: 2p = 8, p = 4 ✓. Both ≥ 3. No other integer solution satisfies all constraints.
**explanation:** From 6p + 9s = 60, divide by 3: 2p + 3s = 20. Systematically try integer values of s ≥ 3: s = 3 → 2p = 11, not an integer. s = 4 → 2p = 8 → p = 4 ✓ (p ≥ 3 ✓). s = 5 → 2p = 5, not an integer. s = 6 → 2p = 2 → p = 1, which violates p ≥ 3. The only solution is p = 4, s = 4. Verify: 6(4) + 9(4) = 24 + 36 = 60 ✓.
**mistake_b:** 3 pizza slices — 6(3) + 9s = 60 → 9s = 42, so s = 4.67, not an integer.
**mistake_d:** 5 pizza slices — 6(5) + 9s = 60 → 9s = 30, so s = 3.33, not an integer.
**mistake_e:** 6 pizza slices — 6(6) + 9s = 60 → 9s = 24, so s = 2.67, not an integer.
**mistake_f:** 7 pizza slices — 6(7) = 42; remaining budget = 18; 18/9 = 2 soft drinks, but 2 < 3 violates the minimum.
**common_trap:** Trying p = 3 or p = 5 because they satisfy the minimum, without verifying that the resulting s is also a positive integer satisfying s ≥ 3. Integer-constraint problems require all conditions to hold simultaneously.
**takeaway:** For exact-total integer problems: reduce the equation (divide by GCD of coefficients), systematically test integer values from the binding constraint, and verify integrality and all minimums before accepting an answer.
**related_reading:** reading-di-06-two-part-analysis

---

## Q38
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Evaluate an Argument

A city's traffic report states: "After installing cameras at 30 intersections, the average number of accidents per intersection dropped from 8 per year to 5 per year. Therefore, traffic cameras reduce accidents."

From the options below, select the statement that most weakens the conclusion (column 1) and the statement that most strengthens the conclusion (column 2).

| Statement | Most weakens | Most strengthens |
|-----------|--------------|-----------------|
| The cameras were installed specifically at the 30 intersections with the city's highest historical accident rates. | | |
| A comparable city using the same camera model saw a 28% reduction in accidents at camera-equipped intersections over three years. | | |
| Traffic volume at those 30 intersections declined by 25% in the same year cameras were installed. | | |
| Drivers physically slow down near visible cameras, which mechanically reduces collision frequency. | | |
| The city simultaneously deployed additional traffic officers at those same 30 intersections during the study year. | | |

**answer:** Most weakens = "The cameras were installed specifically at the 30 intersections with the city's highest historical accident rates."; Most strengthens = "A comparable city using the same camera model saw a 28% reduction in accidents at camera-equipped intersections over three years."
**fastest_path:** Weakens: regression to the mean — rates at outlier-high sites naturally drift down even without intervention. Strengthens: cross-city replication with matched equipment is direct causal evidence.
**explanation:** The argument concludes cameras caused the reduction. Option a (selection bias / regression to the mean) is the most fundamental weakness: locations with historically extreme accident rates naturally drift toward average over time even without any intervention. Because cameras were placed at these outlier spots, the before/after drop cannot be attributed to cameras — it may be entirely due to statistical regression. Options c (traffic volume) and e (extra officers) are also legitimate alternative causes, but they are specific confounders that explain part of the reduction; option a invalidates the before/after comparison at its root. The strongest support is option b: independent replication across a different city removes the regression-to-the-mean objection and provides a natural comparison.
**mistake_c:** "Traffic volume declined 25%" — a real weakener (alternative cause: fewer cars = fewer accidents), but less fundamental than the selection-bias issue. It explains some reduction; regression to the mean calls the entire comparison into question.
**mistake_d:** "Drivers slow down near cameras" — mechanism plausibility, not causal evidence. It explains how cameras could work but does not confirm they actually caused the observed reduction in this city.
**mistake_e:** "Additional traffic officers" — a confounding factor (alternative cause), but again, less fundamental than regression to the mean.
**common_trap:** Selecting the traffic-volume or extra-officers statement as the primary weakener because they are explicit alternative causes. Regression to the mean is more foundational: it undermines the baseline before/after comparison before any other factor is even considered.
**takeaway:** Before/after studies at sites selected for extreme values: regression to the mean is always the first structural threat. Cross-city replication with matched conditions is the cleanest counter-evidence.
**related_reading:** reading-di-06-two-part-analysis

---

## Q39
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mean, Median, and Sum

Five positive integers are listed in increasing order. Their mean is 14 and their median is 12. The smallest value is 5 and the largest value is 28. Select the sum of all five values (column 1) and the sum of the two values that are neither the minimum, maximum, nor median (column 2).

|    | Sum of all five values | Sum of the two remaining values |
|----|------------------------|---------------------------------|
| 14 |                        |                                 |
| 25 |                        |                                 |
| 35 |                        |                                 |
| 60 |                        |                                 |
| 70 |                        |                                 |
| 80 |                        |                                 |

**answer:** Sum of all five values = 70, Sum of the two remaining values = 25
**fastest_path:** Total = mean × count = 14 × 5 = 70. Remaining two = 70 − 5 − 12 − 28 = 25.
**explanation:** Sum of all five = mean × count = 14 × 5 = 70. Column 1 = 70. The two values that are neither the minimum, median, nor maximum are the second and fourth values in the sorted list (call them a and b). Their combined sum = 70 − 5 − 12 − 28 = 25. Column 2 = 25. This is uniquely determined even though a and b individually are not: for example, (a, b) = (10, 15) or (6, 19) or (8, 17) all satisfy the constraints with a + b = 25.
**mistake_a:** 14 for column 1 — confusing the mean with the sum.
**mistake_c:** 35 for column 2 — possibly computing 5 + 12 + 28 = 45 then subtracting from an incorrect total.
**mistake_d:** 60 for column 1 — computing 5 × median instead of 5 × mean: 5 × 12 = 60.
**mistake_f:** 80 for column 1 — using an incorrect mean estimate of 16.
**common_trap:** Using the median (12) instead of the mean (14) to compute the total sum, yielding 60 instead of 70.
**takeaway:** Sum = mean × count. When you know the sum and three of five values, the remaining pair's sum is determined uniquely even when individual values are not. Median × count is not the sum.
**related_reading:** reading-di-06-two-part-analysis

---

## Q40
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Simultaneous Congruences

N is a two-digit positive integer. When N is divided by 7, the remainder is 3. When N is divided by 4, the remainder is 1. Select the largest two-digit value of N satisfying both conditions (column 1) and the smallest two-digit value of N satisfying both conditions (column 2).

|    | Largest qualifying N | Smallest qualifying N |
|----|---------------------|-----------------------|
| 17 |                     |                       |
| 21 |                     |                       |
| 45 |                     |                       |
| 64 |                     |                       |
| 73 |                     |                       |
| 89 |                     |                       |

**answer:** Largest qualifying N = 73, Smallest qualifying N = 17
**fastest_path:** N = 7k + 3; need 3k ≡ 2 (mod 4) → k ≡ 2 (mod 4). So k = 2, 6, 10 → N = 17, 45, 73. Largest = 73, Smallest = 17.
**explanation:** The two conditions are N ≡ 3 (mod 7) and N ≡ 1 (mod 4). Write N = 7k + 3. Substituting: 7k + 3 ≡ 1 (mod 4) → 7k ≡ −2 ≡ 2 (mod 4). Since 7 ≡ 3 (mod 4), this becomes 3k ≡ 2 (mod 4). The inverse of 3 mod 4 is 3 (since 3 × 3 = 9 ≡ 1), so k ≡ 3 × 2 = 6 ≡ 2 (mod 4). Thus k = 2, 6, 10, … and N = 17, 45, 73, 101, … The two-digit solutions are 17, 45, and 73. Verify all three: 17 ÷ 7 = 2 R 3 ✓, 17 ÷ 4 = 4 R 1 ✓; 45 ÷ 7 = 6 R 3 ✓, 45 ÷ 4 = 11 R 1 ✓; 73 ÷ 7 = 10 R 3 ✓, 73 ÷ 4 = 18 R 1 ✓. Largest = 73, Smallest = 17.
**mistake_b:** 21 — 21 ÷ 7 = 3 R 0; remainder is 0, not 3. Fails the first condition.
**mistake_d:** 64 — 64 ÷ 7 = 9 R 1; remainder is 1, not 3. Fails the first condition.
**mistake_f:** 89 — 89 ÷ 7 = 12 R 5; remainder is 5, not 3. Fails the first condition (even though 89 ÷ 4 = 22 R 1 satisfies the second).
**common_trap:** Checking only one modular condition instead of both. Options 21, 64, and 89 each fail the mod-7 condition. Both conditions must hold simultaneously.
**takeaway:** Simultaneous remainder problems: parameterize via one condition, substitute into the other, and solve modularly. Solutions recur every LCM(7, 4) = 28 units: 17, 45, 73 differ by 28.
**related_reading:** reading-di-06-two-part-analysis

---

## Q41
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Recursive Function

A function f is defined for positive integers as follows: if n is odd, f(n) = n + 1; if n is even, f(n) = n / 2. Starting from a positive integer k, f is applied repeatedly until the result equals 1. Let T(k) denote the total number of times f is applied. For example, T(4) = 2 because f(4) = 2 and then f(2) = 1. Select the value of T(12) (column 1) and the value of T(7) (column 2).

|   | T(12) | T(7) |
|---|-------|------|
| 3 |       |      |
| 4 |       |      |
| 5 |       |      |
| 6 |       |      |
| 7 |       |      |
| 8 |       |      |

**answer:** T(12) = 5, T(7) = 4
**fastest_path:** Trace T(12): 12 → 6 → 3 → 4 → 2 → 1 (5 steps). Trace T(7): 7 → 8 → 4 → 2 → 1 (4 steps).
**explanation:** Trace for k = 12: f(12) = 12/2 = 6 (step 1, 12 is even); f(6) = 6/2 = 3 (step 2); f(3) = 3 + 1 = 4 (step 3, 3 is odd); f(4) = 4/2 = 2 (step 4); f(2) = 2/2 = 1 (step 5). T(12) = 5. Trace for k = 7: f(7) = 7 + 1 = 8 (step 1, 7 is odd); f(8) = 8/2 = 4 (step 2); f(4) = 4/2 = 2 (step 3); f(2) = 2/2 = 1 (step 4). T(7) = 4. The function always reaches 1: odd numbers map to even numbers, and even numbers halve, eventually reaching 1.
**mistake_a:** 3 for T(12) — possibly counting only the halvings (steps where n is even) and skipping the odd step at n = 3.
**mistake_b:** 4 for T(12) — stopping at 2 without applying the final step f(2) = 1, or confusing T(12) with T(7).
**mistake_d:** 6 for T(12) — counting the starting value itself as a step, or including the endpoint 1 in the count.
**mistake_c:** 5 for T(7) — swapping the two answers, placing T(12)'s value in the T(7) column.
**common_trap:** Miscounting by including the starting value or the endpoint (1) in the step count. Each application of f is one step; the starting value and final result are not steps.
**takeaway:** When tracing a recursive function, write out every application explicitly. Count arrows (applications of f), not nodes (values). The example T(4) = 2 given in the stem is a useful calibration check.
**related_reading:** reading-di-06-two-part-analysis

---

## Q42
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Average Constraint

In a company, 85% of employees in Department A are satisfied with their work, while only 40% of employees in Department B are satisfied. The overall company satisfaction rate is 52%. The company has exactly 30 employees. Select the number of employees in Department A (column 1) and the number of employees in Department B (column 2).

|    | Department A | Department B |
|----|--------------|--------------|
| 6  |              |              |
| 8  |              |              |
| 12 |              |              |
| 18 |              |              |
| 22 |              |              |
| 24 |              |              |

**answer:** Department A = 8, Department B = 22
**fastest_path:** 0.85a + 0.40(30 − a) = 0.52 × 30 = 15.6 → 0.45a = 3.6 → a = 8. b = 22.
**explanation:** Let a = employees in Dept A and b = employees in Dept B, with a + b = 30. Weighted satisfaction: 0.85a + 0.40b = 0.52 × 30 = 15.6. Substitute b = 30 − a: 0.85a + 0.40(30 − a) = 15.6 → 0.85a + 12 − 0.40a = 15.6 → 0.45a = 3.6 → a = 8. Then b = 22. Verify: 0.85(8) + 0.40(22) = 6.8 + 8.8 = 15.6; 15.6/30 = 0.52 ✓. The lever-arm shortcut: overall 52% sits (85−52) = 33 units from A and (52−40) = 12 units from B, so a:b = 12:33 = 4:11. With 30 total: a = 30 × 4/15 = 8, b = 22.
**mistake_a:** Dept A = 6, Dept B = 24 — verify: 0.85(6) + 0.40(24) = 5.1 + 9.6 = 14.7; 14.7/30 = 0.49 ≠ 0.52.
**mistake_c:** Dept A = 12, Dept B = 18 — verify: 0.85(12) + 0.40(18) = 10.2 + 7.2 = 17.4; 17.4/30 = 0.58 ≠ 0.52.
**mistake_d:** Dept A = 18, Dept B = 12 — verify: 0.85(18) + 0.40(12) = 15.3 + 4.8 = 20.1; 20.1/30 = 0.67 ≠ 0.52.
**mistake_f:** Dept A = 24, Dept B = 6 — verify: 0.85(24) + 0.40(6) = 20.4 + 2.4 = 22.8; 22.8/30 = 0.76 ≠ 0.52.
**common_trap:** Splitting employees roughly evenly (12/18) because the overall rate seems like a middle ground. The overall rate of 52% is much closer to Dept B's 40% than to Dept A's 85%, forcing Dept B to be far larger.
**takeaway:** Weighted average lever-arm: target rate sits 33 units from A and 12 units from B → a:b = 12:33 = 4:11. Larger department is the one whose rate is closer to the overall rate.
**related_reading:** reading-di-06-two-part-analysis

---

## Q43
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Factor Enumeration and Sum Optimization

Three distinct positive integers have a product of 60. Select the minimum possible value of their sum (column 1) and the maximum possible value of their sum (column 2).

|    | Minimum possible sum | Maximum possible sum |
|----|---------------------|---------------------|
| 10 |                     |                     |
| 12 |                     |                     |
| 13 |                     |                     |
| 24 |                     |                     |
| 30 |                     |                     |
| 33 |                     |                     |

**answer:** Minimum possible sum = 12, Maximum possible sum = 33
**fastest_path:** Most balanced triple: 3 × 4 × 5 = 60, sum = 12. Most skewed: 1 × 2 × 30 = 60, sum = 33.
**explanation:** Enumerate all triples (a, b, c) of distinct positive integers with a < b < c and a × b × c = 60: (1,2,30) sum 33; (1,3,20) sum 24; (1,4,15) sum 20; (1,5,12) sum 18; (1,6,10) sum 17; (2,3,10) sum 15; (2,5,6) sum 13; (3,4,5) sum 12. Minimum = 12 from the most balanced triple (3,4,5) — values closest to the cube root of 60 (≈ 3.9). Maximum = 33 from the most skewed triple (1,2,30) — concentrating the product in one large factor while the others are as small as possible.
**mistake_a:** 10 — no valid triple. Test: (1,4,5) gives product 20 ≠ 60; (2,3,5) gives product 30 ≠ 60. No distinct-positive-integer triple sums to 10 with product 60.
**mistake_c:** 13 — that is the sum of (2,5,6), the second-lowest valid sum, not the minimum.
**mistake_d:** 24 — that is the sum of (1,3,20), not the maximum.
**mistake_e:** 30 — that is the value of the largest factor in the maximum-sum triple (1,2,30), not the sum itself; the sum is 1+2+30 = 33.
**common_trap:** Confusing 30 (the largest factor) with 33 (the sum of the triple 1,2,30). Also: stopping the enumeration early and settling on (2,5,6) with sum 13 as the minimum, missing the balanced (3,4,5) triple with sum 12.
**takeaway:** Sum of factor triples is minimized by the most balanced factorization (factors near the cube root of the target) and maximized by concentrating the product in one large factor with the others at 1 and 2. Systematic enumeration prevents missing cases.
**related_reading:** reading-di-06-two-part-analysis

---

## Q44
**difficulty:** Challenge
**type:** Two-Part Analysis
**topic:** Quantitative — Multi-Constraint Number Theory

Positive integers f and g satisfy all three conditions: (1) f > g, (2) f × g = 252, and (3) f − g is a perfect square greater than 50. Select the value of f (column 1) and the value of g (column 2).

|    | f  | g  |
|----|----|----|
| 3  |    |    |
| 4  |    |    |
| 6  |    |    |
| 42 |    |    |
| 63 |    |    |
| 84 |    |    |

**answer:** f = 84, g = 3
**fastest_path:** List factor pairs of 252 (f > g): (252,1), (126,2), (84,3), (63,4), (42,6), (36,7), (28,9), (21,12), (18,14). Differences: 251, 124, 81, 59, 36, 29, 19, 9, 4. Perfect squares among differences: 81, 36, 9, 4. Only 81 > 50. Answer: f = 84, g = 3.
**explanation:** 252 = 2² × 3² × 7. The factor pairs (f, g) with f > g and f × g = 252 are: (252,1), (126,2), (84,3), (63,4), (42,6), (36,7), (28,9), (21,12), (18,14). Their differences f − g: 251, 124, 81, 59, 36, 29, 19, 9, 4. Of these, the perfect squares are 81 = 9² (from the pair 84, 3), 36 = 6² (from 42, 6), 9 = 3² (from 21, 12), and 4 = 2² (from 18, 14). Applying the final filter "greater than 50": only 81 qualifies. The unique solution is f = 84, g = 3. Verify: 84 > 3 ✓, 84 × 3 = 252 ✓, 84 − 3 = 81 = 9² > 50 ✓.
**mistake_c:** g = 6 with f = 42 — satisfies f × g = 252 ✓ and f − g = 36 = 6² ✓, but 36 is not greater than 50. This is the most tempting trap: both conditions (1) and (2) and the perfect-square part of (3) hold, but the "> 50" threshold fails.
**mistake_e:** f = 63, g = 4 — satisfies f × g = 252 ✓, but f − g = 59 is not a perfect square (7² = 49, 8² = 64). Fails condition (3).
**mistake_b:** f = 63, g = 4 or similar — 59 is not a perfect square regardless of how close it sits between 49 and 64.
**mistake_d:** f = 42 for column 1 — from the (42, 6) pair which fails the "> 50" threshold on the difference.
**common_trap:** Finding the pair (42, 6) first — because 36 is an easily recognized perfect square and 252 = 42 × 6 is readily spotted — and stopping without applying the "> 50" filter. The challenge requires complete enumeration followed by a two-step filter: perfect square, then greater than 50.
**takeaway:** Multi-constraint problems: enumerate all candidates satisfying the simpler conditions, then apply the most restrictive filter last. Never stop at the first candidate that satisfies most conditions.
**related_reading:** reading-di-06-two-part-analysis
