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
**fastest_path:** Add work rates for T; read S directly. The combined rate is 1/6 + 1/4 = 5/12 load per hour.
**explanation:** Truck A's rate is 1/6 load per hour and B's is 1/4. Together they work at 5/12 load per hour, so T = 1/(5/12) = 12/5 = 2.4 hours. Truck A alone takes the stated 6 hours, so S = 6.0. Select 2.4 for T and 6.0 for S.
**common_trap:** Do not add the completion times. Workers combine by adding rates, then taking the reciprocal to obtain time.
**takeaway:** For joint work, convert times to rates, add the rates, and invert once.
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
**explanation:** **Governing principle.** A mixture problem requires two simultaneous equations: one for total volume and one for the conserved quantity — in this case, the mass of dissolved salt. The salt contributed by each component equals its volume multiplied by its concentration, and the sum must equal the salt content of the final mixture.

**Defining variables.** Let x = the volume (in liters) of Solution X, and let y = the volume (in liters) of Solution Y.

**Translating the prompt into equations.**

- Total volume: x + y = 10
- Salt balance: 0.30x + 0.60y = 0.45 * 10

Evaluating the right side of the salt-balance equation: 0.45 * 10 = 4.5. The system is therefore:

(1) x + y = 10
(2) 0.30x + 0.60y = 4.5

**Solving by substitution.** From equation (1): y = 10 - x. Substituting into equation (2):

0.30x + 0.60(10 - x) = 4.5

Distributing: 0.30x + 6 - 0.60x = 4.5

Combining like terms: -0.30x + 6 = 4.5

Subtracting 6 from both sides: -0.30x = -1.5

Dividing both sides by -0.30: x = -1.5 / -0.30 = 5

**Finding y.** Substituting x = 5 back into equation (1): 5 + y = 10, therefore y = 5.

**Verification.** The salt contributed by Solution X is 0.30 * 5 = 1.5 liters of salt. The salt contributed by Solution Y is 0.60 * 5 = 3.0 liters of salt. Total salt = 1.5 + 3.0 = 4.5 liters, which equals 45% of 10 liters. Both conditions are satisfied.

**Selecting from the candidate values.** The candidate list includes 2 L, 3 L, 4 L, 5 L, 6 L, and 7 L. The solution x = 5 and y = 5 are each present in that list, confirming that 5 L is the correct selection for both columns.

The correct answers are Solution X = 5 L and Solution Y = 5 L.
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
**explanation:** **Setup.** A Two-Part Analysis question of this type requires the solver to partition a fixed total investment between two instruments and reconcile both the capital constraint and the return constraint simultaneously. Let x represent the dollar amount invested in Fund Alpha, and let (100,000 - x) represent the dollar amount invested in Fund Beta.

**Governing equations.** Two conditions must hold simultaneously:

- Capital constraint: x + (100,000 - x) = 100,000 (satisfied by construction)
- Return constraint: 0.08x + 0.05(100,000 - x) = 6,800

**Solving the return constraint.** Expanding the left side:

0.08x + 5,000 - 0.05x = 6,800

Combining like terms:

0.03x + 5,000 = 6,800

Subtracting 5,000 from both sides:

0.03x = 1,800

Dividing both sides by 0.03:

x = 1,800 / 0.03 = 60,000

**Determining Fund Beta.** Because the two allocations must sum to $100,000:

100,000 - 60,000 = 40,000

**Verification.** Substituting both values back into the return constraint confirms the result:

0.08 * 60,000 + 0.05 * 40,000 = 4,800 + 2,000 = 6,800

This equals the stated total annual return of $6,800, confirming that the solution is consistent with both constraints.

**Eliminating distractors.** Each incorrect candidate value from the list can be ruled out by checking the return constraint. For example, if Fund Alpha = $50,000, the return would be 0.08 * 50,000 + 0.05 * 50,000 = 4,000 + 2,500 = 6,500, which is less than 6,800. If Fund Alpha = $70,000, the return would be 0.08 * 70,000 + 0.05 * 30,000 = 5,600 + 1,500 = 7,100, which exceeds 6,800. Only x = 60,000 satisfies the equation exactly.

The correct answers are Fund Alpha = $60,000 and Fund Beta = $40,000.
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
**fastest_path:** C is the author's final judgment; A is the causal attribution undermined by the competitor's bankruptcy.
**explanation:** Choose C for Conclusion: after noting the simultaneous competitor bankruptcy, the author concludes that the campaign's effectiveness may be overstated. Choose A for Assumption Challenged. Crediting the full 25% increase to the campaign assumes the campaign caused that increase; reduced competition offers another cause and attacks that attribution. B and D are stated facts, while E is a universal claim the argument does not need.
**common_trap:** Selecting the original causal claim as the conclusion even though the argument's final sentence challenges it.
**takeaway:** Follow the author's final position and identify the narrower causal assumption that the new evidence disputes.
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
**fastest_path:** Add the closing speeds: 80 + 100 = 180 km/h. Divide the 540-km gap by 180, then use A's rate for its distance.
**explanation:** The trains approach each other at a combined 180 km/h, so they meet after 540/180 = 3 hours. In that time, Train A travels 80 x 3 = 240 km. Train B covers the remaining 300 km, confirming a total of 540 km. Select 240 km for Train A and 3 hours for the meeting time.
**common_trap:** The 300-km value is Train B's distance, not Train A's. Use each train's own speed after finding the common time.
**takeaway:** For objects moving toward each other, add speeds to find meeting time, then compute each distance separately.
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

**answer:** Strengthens = "A nearby city with similar traffic volume saw 35% fewer accidents after installing lights"; Weakens = "Main Street accidents are primarily caused by speeding, not visibility"
**fastest_path:** Use the similar-city result as the comparison that supports lighting; use speeding as the cause that bypasses visibility.
**explanation:** Choose A for Strengthens. A similar city experienced a 35% reduction after installing lights, closely matching the council's predicted effect. Choose B for Weakens. If nighttime accidents are primarily caused by speeding rather than poor visibility, better lighting may not address their main cause. E concerns when all accidents occur, not what causes the nighttime accidents named in the conclusion. Traffic volume and LED efficiency do not establish the safety effect.
**common_trap:** Using the share of daytime accidents to evaluate a conclusion specifically about nighttime accidents.
**takeaway:** Match evidence to the exact outcome and ask whether the proposed intervention addresses its dominant cause.
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
**fastest_path:** For each product made alone, compute the output ceiling from labor and from materials; the smaller ceiling controls.
**explanation:** For X only, labor allows 120/2 = 60 units and materials allow 600/10 = 60, so Max X = 60. For Y only, labor allows 120/3 = 40 and materials allow 600/15 = 40, so Max Y = 40. Both resources bind in each case. Select 60 for X and 40 for Y.
**common_trap:** Do not combine X and Y in one production mix; each requested maximum assumes only that product is made.
**takeaway:** Under multiple resource constraints, a single-product maximum is the minimum of its resource-based ceilings.
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
**fastest_path:** A gives a confounder that can explain both breakfast and scores; B reports an intervention followed by the predicted improvement.
**explanation:** Choose A for Alternative Explanation. Family income can influence both whether a student eats breakfast and the academic resources that affect test scores, so breakfast need not cause the observed gap. Choose B for Support. After a school actually introduced free breakfast, scores rose by an amount consistent with the claim, providing direct intervention evidence. C offers only a plausible mechanism, while D and E do not show that providing breakfast raises scores.
**common_trap:** Choosing a plausible biological mechanism over evidence that tests the proposed intervention itself.
**takeaway:** A confounder explains both variables; intervention evidence is stronger support than a mechanism alone.
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
**explanation:** The work-rate principle states that when two workers operate simultaneously, their individual rates add. The time to complete a fixed task equals the total work divided by the combined rate.

Let T = the number of hours required when both editors work together, and let S = the number of hours required when only the copy editor works.

**Setting up the rates.**

The copy editor's rate is 12 pages per hour. The junior editor's rate is 8 pages per hour. When they work together, the combined rate is 12 + 8 = 20 pages per hour.

**Solving for T.**

Applying the formula Time = Work / Rate:

T = 120 / 20 = 6 hours

**Solving for S.**

When only the copy editor works, the applicable rate is 12 pages per hour:

S = 120 / 12 = 10 hours

**Checking both results against the candidate values.** The value 6 hrs appears in the list and equals T; the value 10 hrs appears in the list and equals S. No other candidate value satisfies either equation.

The correct answers are T (both) = 6 hrs and S (copy editor only) = 10 hrs.
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
**explanation:** **Governing principle.** In any mixture problem, the total cost of the blend equals the sum of the costs contributed by each component. If the blend contains x pounds of Bean A at $8 per pound and y pounds of Bean B at $14 per pound, then total cost = 8x + 14y.

**Variable definitions.**

Let x = pounds of Bean A in the blend.
Let y = pounds of Bean B in the blend.

**Translating the problem into equations.**

The blend weighs 30 pounds in total, giving the weight equation:

x + y = 30

The blend costs $10 per pound and contains 30 pounds, so its total cost is 10 * 30 = $300. The cost equation is therefore:

8x + 14y = 300

**Solving the system.**

From the weight equation, we express y in terms of x:

y = 30 - x

Substituting into the cost equation:

8x + 14(30 - x) = 300

8x + 420 - 14x = 300

-6x = 300 - 420

-6x = -120

x = -120 / -6 = 20

We then find y:

y = 30 - 20 = 10

**Verification.**

Weight check: 20 + 10 = 30. Correct.
Cost check: 8(20) + 14(10) = 160 + 140 = 300, and 300 / 30 = $10 per pound. Correct.

**Selecting from the candidate values.** The candidate row values are 5 lb, 10 lb, 15 lb, 20 lb, and 25 lb. The solution yields x = 20 and y = 10, both of which appear among the candidates. Any other pairing from the candidate list fails at least one of the two equations above.

The correct answers are Bean A = 20 lb and Bean B = 10 lb.
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
**explanation:** **Governing principle.** A system of two linear equations in two unknowns is solved by expressing one variable in terms of the other through substitution (or elimination), then back-substituting to find both values.

**Define variables.** Let x be the number of adult tickets sold and y be the number of student tickets sold.

**Translate the problem into equations.**

The total number of tickets sold is 400:

x + y = 400   ... (1)

The total revenue collected is $13,750, with adult tickets priced at $45 each and student tickets at $20 each:

45x + 20y = 13,750   ... (2)

**Solve by substitution.**

From equation (1), express y in terms of x:

y = 400 - x   ... (3)

Substitute (3) into equation (2):

45x + 20(400 - x) = 13,750

45x + 8,000 - 20x = 13,750

25x = 13,750 - 8,000

25x = 5,750

x = 5,750 / 25 = 230

**Back-substitute to find y.**

y = 400 - 230 = 170

**Verify both equations.**

Ticket count: 230 + 170 = 400 ✓

Revenue: 45(230) + 20(170) = 10,350 + 3,400 = 13,750 ✓

**Evaluate the candidate values.**

The candidate list includes 150, 170, 200, 230, 250, and 280. x = 230 satisfies equation (1) when paired with y = 170, and both values together satisfy equation (2) exactly. No other pairing from the candidate list produces a revenue sum of $13,750: x = 250 gives y = 150, and 45(250) + 20(150) = 11,250 + 3,000 = 14,250, which exceeds the target; x = 200 gives y = 200, and 45(200) + 20(200) = 9,000 + 4,000 = 13,000, which falls short.

The correct answers are Adult Tickets = 230 and Student Tickets = 170.
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
**fastest_path:** The five numbers total 70 and the middle is 12. Maximize the maximum with 1,2,12,13; minimize it by packing 10,11,12,18,19.
**explanation:** For L, make the other four distinct positive integers as small as possible while preserving median 12: 1, 2, 12, and 13. The maximum is 70 - 28 = 42, so L = 42. For S, pack the values below and above 12 as high and close as possible. A maximum of 18 cannot work because the largest possible total is 10 + 11 + 12 + 17 + 18 = 68. A maximum of 19 works with 10, 11, 12, 18, 19, totaling 70. Thus S = 19.
**common_trap:** Optimizing the largest value without enforcing distinctness, order, median 12, and total 70 simultaneously.
**takeaway:** For extreme ordered sets, construct boundary cases and prove the neighboring value impossible.
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
**fastest_path:** A is the claim the author wants accepted; B is required to attribute the 15% decline to bike-share rather than another change.
**explanation:** Choose A for Conclusion: the argument uses the launch and later congestion decline to claim that bike-share caused the reduction. Choose B for Assumption. The causal inference requires that no other material change produced the decline; if road construction ended, traffic was rerouted, or another policy changed, the timing alone would not prove bike-share was responsible. C and D are stated facts, while E is an unnecessarily universal claim.
**common_trap:** Selecting a stated statistic as the conclusion or choosing a much stronger universal assumption than the argument needs.
**takeaway:** The conclusion is the causal claim; its minimal assumption rules out a material competing cause in the observed period.
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
**fastest_path:** Random assignment isolates the CRM effect, while a simultaneous increase in service staff supplies a competing cause.
**explanation:** Choose A for Strengthens. Randomly assigning the CRM to some regions and observing the gain only there creates a control group, making the CRM the key difference. Choose B for Weakens: the 20% increase in customer-service staff occurred at the same time and could itself improve retention. D offers only a small industry-wide rise and does not explain the full eight-point gain as directly. Ratings and price do not establish what caused retention to change.
**common_trap:** Treating popularity, price, or an industry trend as stronger causal evidence than a controlled comparison.
**takeaway:** For causal claims, controlled comparisons strengthen; simultaneous plausible changes weaken by confounding the result.
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
**fastest_path:** Add fill rates and subtract the drain: T uses 1/4 + 1/6 - 1/8; U uses 1/4 - 1/8.
**explanation:** With all three open, the net rate is 1/4 + 1/6 - 1/8 = (6 + 4 - 3)/24 = 7/24 tank per hour, so T = 24/7, about 3.43 hours. With only Pipe A and the drain, the net rate is 1/4 - 1/8 = 1/8 tank per hour, so U = 8 hours. Select 3.43 hours for T and 8.0 hours for U.
**common_trap:** Adding the drain's rate as if it fills the tank, or adding times instead of rates.
**takeaway:** Combine work rates with signs first, then invert the net rate to obtain time.
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
**explanation:** **Setup.** This problem presents a system of two simultaneous linear equations in two unknowns. Let x denote the daily units of Product A and y denote the daily units of Product B.

**Translating the constraints into equations.**

The machine-hours constraint states that total machine time consumed equals exactly 420 hours per day:

0.4x + 0.75y = 420  ... (1)

The revenue constraint states that total daily revenue equals exactly $20,000:

20x + 35y = 20000  ... (2)

**Solving the system.**

To eliminate x, scale the equations so that the coefficients on x match. Multiply equation (1) by 10 to clear decimals:

4x + 7.5y = 4200  ... (1')

Divide equation (2) by 5:

4x + 7y = 4000  ... (2')

Subtract (2') from (1'):

(4x + 7.5y) - (4x + 7y) = 4200 - 4000

0.5y = 200

y = 200 / 0.5 = 400

Substitute y = 400 back into (2'):

4x + 7(400) = 4000

4x + 2800 = 4000

4x = 1200

x = 1200 / 4 = 300

**Verification.**

Machine-hours: 0.4(300) + 0.75(400) = 120 + 300 = 420. This equals the stated capacity of 420 machine-hours, so the constraint is satisfied.

Revenue: 20(300) + 35(400) = 6000 + 14000 = 20000. This equals the stated daily revenue of $20,000, so the revenue constraint is satisfied.

Both equations are satisfied simultaneously by x = 300 and y = 400, and no other combination of the listed candidate values produces a consistent solution to the system. The correct answers are Units of A = 300 and Units of B = 400.
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
**explanation:** **Setup.** The billing structure states that every client is charged a flat base fee B plus a per-hour rate R multiplied by the number of hours worked. Translating the two billing records into equations:

- Client X: B + 20R = 3000
- Client Y: B + 50R = 6600

This is a system of two linear equations in two unknowns, solved by elimination.

**Solving for R.** Subtracting the first equation from the second eliminates B:

(B + 50R) - (B + 20R) = 6600 - 3000

30R = 3600

R = 3600/30 = 120

**Solving for B.** Substituting R = 120 back into the first equation:

B + 20(120) = 3000

B + 2400 = 3000

B = 3000 - 2400 = 600

**Verification.** Substituting both values into the second equation confirms consistency: 600 + 50(120) = 600 + 6000 = 6600. Both billing records are satisfied.

**Matching to the candidate values.** The candidate list includes $600 and $120. B = 600 corresponds to the $600 candidate for row 1, and R = 120 corresponds to the $120 candidate for row 2. No other pair from the candidate list satisfies both equations simultaneously.

The correct answers are Base fee B = $600 and Hourly rate R = $120.
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
**fastest_path:** Let Route 1 ridership be x: 5x + 3(28,000 - x) = 100,000.
**explanation:** Let x be Route 1 riders, so Route 2 has 28,000 - x riders. Revenue gives 5x + 3(28,000 - x) = 100,000. Simplifying, 2x + 84,000 = 100,000, so x = 8,000. Route 2 then has 20,000 riders and earns 20,000 x $3 = $60,000. Select 8,000 and 60,000.
**common_trap:** Multiplying total ridership by one fare instead of splitting riders between the two revenue rates.
**takeaway:** For two-group revenue problems, express one group as total minus the other and build one weighted equation.
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
**explanation:** **Governing principle.** A mixture problem is governed by two simultaneous constraints: the volumes of the component solutions must sum to the total volume of the mixture, and the quantities of the active substance (acid) contributed by each component must sum to the total quantity of acid in the mixture.

**Variable definitions.**

Let x = volume (in liters) of the 30% acid solution.
Let y = volume (in liters) of the 70% acid solution.

**Setting up the equations.**

The total volume constraint gives:

x + y = 8

The acid-content constraint requires that the acid contributed by each solution equals the acid in the final 8-liter, 50% mixture:

0.30x + 0.70y = 0.50 * 8

Evaluating the right side: 0.50 * 8 = 4.0, so the acid equation is:

0.30x + 0.70y = 4.0

**Solving the system.**

From the volume equation, express x in terms of y:

x = 8 - y

Substitute into the acid equation:

0.30(8 - y) + 0.70y = 4.0

Distribute:

2.4 - 0.30y + 0.70y = 4.0

Combine like terms:

2.4 + 0.40y = 4.0

Subtract 2.4 from both sides:

0.40y = 1.6

Divide both sides by 0.40:

y = 1.6 / 0.40 = 4

Substitute y = 4 back into the volume equation:

x = 8 - 4 = 4

**Verification.**

- Volume check: 4 + 4 = 8. Confirmed.
- Acid check: 0.30 * 4 + 0.70 * 4 = 1.2 + 2.8 = 4.0, and 0.50 * 8 = 4.0. Confirmed.

Because the 30% and 70% concentrations are equidistant from the target concentration of 50% (each differs by exactly 20 percentage points), the mixing rule requires equal volumes of each component — a result the algebra confirms directly.

The correct answers are 30% solution = 4 and 70% solution = 4.
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
**fastest_path:** Both white is (8/12)(7/11); same color adds the both-black probability (4/12)(3/11).
**explanation:** P(both white) = (8/12)(7/11) = 56/132 = 14/33. For the same color, add P(both black) = (4/12)(3/11) = 12/132 = 3/33. Thus P(same color) = 14/33 + 3/33 = 17/33. Select 14/33 for Both white and 17/33 for Same color.
**common_trap:** Treating the second draw as independent and keeping the denominator at 12 after one ball has been removed.
**takeaway:** Without replacement, update both numerator and denominator; for disjoint cases, compute each and add.
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
**explanation:** **Governing principle.** The probability of an event is the number of favorable outcomes divided by the total number of equally likely outcomes. When selecting objects simultaneously (i.e., without replacement and without regard to order), the total number of ways to choose r objects from n is the combination C(n, r) = n! / (r! * (n-r)!).

**Setup.** The box contains five cards labeled 1, 2, 3, 4, and 5. Two cards are drawn simultaneously. The total number of ways to choose 2 cards from 5 is C(5, 2) = 5! / (2! * 3!) = (5 * 4) / (2 * 1) = 10. Every pair is equally likely, so each pair has probability 1/10.

**Column 1 — Probability that both drawn cards are odd.**

Among the five cards, the odd-labeled cards are 1, 3, and 5 — a total of 3 odd cards. The number of ways to choose 2 odd cards from those 3 is C(3, 2) = 3! / (2! * 1!) = 3. The three favorable pairs are {1, 3}, {1, 5}, and {3, 5}.

P(both odd) = 3 / 10.

**Column 2 — Probability that the sum of the two drawn cards is even.**

**Reasoning.** The parity of a sum of two integers is determined entirely by the parities of the addends. Specifically, odd + odd = even, and even + even = even, while odd + even = odd. Therefore a sum of two drawn cards is even if and only if the two cards share the same parity — both odd or both even.

Among the five cards, the even-labeled cards are 2 and 4 — a total of 2 even cards.

- Ways to choose 2 odd cards from 3: C(3, 2) = 3 (pairs {1, 3}, {1, 5}, {3, 5}).
- Ways to choose 2 even cards from 2: C(2, 2) = 1 (pair {2, 4}).

Total favorable pairs: 3 + 1 = 4.

P(sum even) = 4 / 10 = 2/5.

The correct answers are Both odd = 3/10 and Sum even = 2/5.
**related_reading:** reading-di-06-two-part-analysis

---

## Q22
**difficulty:** Medium
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
**explanation:** For independent events, the probability that all events occur equals the product of their individual probabilities. Formally, if events A, B, and C are mutually independent, then P(A and B and C) = P(A) * P(B) * P(C).

Let p = 0.6 be the probability of winning a single round, and let q = 1 - p = 0.4 be the probability of losing a single round. Because each round is independent, the outcome of one round does not affect any other.

The multiplication rule for independent events applies directly to Column 1. P(win all 3) = p * p * p = p^3 = (0.6)^3. Computing step by step: 0.6 * 0.6 = 0.36, then 0.36 * 0.6 = 0.216. Therefore P(win all 3) = 0.216, which corresponds to the row value 0.216.

For Column 2, "at least 1 win" is the complement of "zero wins," meaning the player loses every round. The complement rule gives P(at least 1 win) = 1 - P(lose all 3). P(lose all 3) = q^3 = (0.4)^3 = 0.4 * 0.4 * 0.4 = 0.064. Therefore P(at least 1 win) = 1 - 0.064 = 0.936, which corresponds to the row value 0.936.

Verifying against the candidate values: the five candidates are 0.064, 0.216, 0.648, 0.784, and 0.936. The value 0.064 equals P(lose all 3), a plausible distractor for the complement step. The value 0.648 equals P(win at least 2 rounds), computed as the binomial sum P(X = 2) + P(X = 3) = 3(0.6)^2(0.4) + (0.6)^3 = 0.432 + 0.216 = 0.648, and represents a confusion between "at least 1 win" and "at least 2 wins." The value 0.784 equals 1 - 0.216, a distractor produced by subtracting P(win all 3) from 1 rather than subtracting P(lose all 3). Neither 0.648 nor 0.784 emerges from correct application of the governing principles for either column.

The correct answers are All 3 = 0.216 and At least 1 = 0.936.
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
**explanation:** **Governing principle.** A ratio a to b means the two quantities are equal to a*k and b*k for some positive integer k. Any constraint imposed after the initial ratio yields an equation in k that determines the unique solution.

**Define variables.** Let k be the positive integer multiplier for the original ratio. Then the original number of red marbles is r = 3k and the original number of blue marbles is b = 5k, because the problem states the original ratio of red to blue is 3 to 5.

**Translate the second condition.** After 6 red marbles are removed and 10 blue marbles are added, the new counts are (r - 6) red and (b + 10) blue, and their ratio equals 1 to 3. Writing this as an equation:

(r - 6) / (b + 10) = 1/3

**Substitute and solve.** Replace r with 3k and b with 5k:

(3k - 6) / (5k + 10) = 1/3

Cross-multiply:

3(3k - 6) = 1(5k + 10)

9k - 18 = 5k + 10

4k = 28

k = 7

**Compute the original counts.**

r = 3k = 3 * 7 = 21

b = 5k = 5 * 7 = 35

**Verify against the second condition.** After the removal and addition: (21 - 6) / (35 + 10) = 15 / 45 = 1/3. This confirms the ratio is satisfied.

**Locate each value among the candidates.** The candidate values are 14, 21, 28, 35, and 42. The original number of red marbles, 21, appears in the candidate list, as does the original number of blue marbles, 35. No other pair from the candidate list satisfies both the 3-to-5 original ratio and the 1-to-3 ratio after the marble exchange.

The correct answers are Original red = 21 and Original blue = 35.
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
**explanation:** **Governing principle.** When two objects depart from the same point at the same time and move in opposite directions, the rate at which the distance between them grows equals the sum of their individual speeds. Using the relationship distance = rate × time, we can find both unknowns.

**Defining variables and translating the prompt.**

Let v_X = speed of Car X = 50 mph (given).

Let v_Y = speed of Car Y. The prompt states Car Y travels at a speed that is 20 percent higher than Car X's speed, so:

v_Y = v_X × (1 + 0.20) = 50 × 1.20 = 60 mph.

This resolves Column 1 immediately: the speed of Car Y is 60 mph. Scanning the candidate values, 60 appears in the list and is the only value consistent with the 20-percent relationship.

**Setting up the distance equation.**

Because the cars travel in opposite directions, the separation distance at time t (in hours) is:

d = (v_X + v_Y) × t

Substituting the known quantities:

330 = (50 + 60) × t
330 = 110 × t
t = 330 / 110
t = 3 hours.

This resolves Column 2: the elapsed time is 3 hours. Among the candidate values, 3 is the only value satisfying this equation.

**Verification.**

In 3 hours, Car X covers 50 × 3 = 150 miles. Car Y covers 60 × 3 = 180 miles. Total separation = 150 + 180 = 330 miles, which matches the given distance. The candidate value 110 represents the combined rate (in mph), not a valid answer for either column; 2 and 50 satisfy neither equation. Therefore both selected values are uniquely correct.

The correct answers are Speed of Y (mph) = 60 and Time elapsed (hours) = 3.
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
**fastest_path:** Profit is (p - 4)(60 - 3p) - 120 = -3p^2 + 72p - 360; use the vertex.
**explanation:** The quadratic profit function opens downward. Its maximizing price is p = -b/(2a) = -72/[2(-3)] = 12. Demand is 60 - 3(12) = 24 umbrellas. Daily profit is (12 - 4)(24) - 120 = 192 - 120 = $72. Select 12 for the optimal price and 72 for maximum profit.
**common_trap:** Maximizing revenue or unit margin alone while ignoring how price changes demand and fixed cost.
**takeaway:** Build profit as unit contribution times demand minus fixed cost, then maximize the resulting downward-opening quadratic.
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
**explanation:** **Setup.** In a mixture problem of this type, two conservation constraints govern the system simultaneously: the volumes of the component solutions must sum to the total mixture volume, and the volume of any one component (here, water) contributed by each solution must sum to the total volume of that component in the final mixture.

Let x be the volume of Solution X in liters and y be the volume of Solution Y in liters.

**Equation 1 — total volume constraint.**

x + y = 30

**Equation 2 — water-volume constraint.**

Solution X is 80% water by volume, so it contributes 0.80x liters of water. Solution Y is 50% water by volume, so it contributes 0.50y liters of water. The final 30-liter mixture is 60% water, so it contains 0.60 * 30 = 18 liters of water. Therefore:

0.80x + 0.50y = 18

**Solving the system.**

From Equation 1, y is expressed in terms of x:

y = 30 - x

Substituting into Equation 2:

0.80x + 0.50(30 - x) = 18

0.80x + 15 - 0.50x = 18

0.30x = 3

x = 3 / 0.30 = 10

Returning to Equation 1:

y = 30 - 10 = 20

**Verification.**

- Total volume: 10 + 20 = 30 liters. Confirmed.
- Water contributed by Solution X: 0.80 * 10 = 8 liters.
- Water contributed by Solution Y: 0.50 * 20 = 10 liters.
- Total water: 8 + 10 = 18 liters.
- Water percentage of mixture: 18 / 30 = 0.60, or 60%. Confirmed.

Both constraints are satisfied exactly. From the candidate values {5, 10, 15, 20, 25}, the value 10 is selected for Solution X and the value 20 is selected for Solution Y.

The correct answers are Solution X = 10 and Solution Y = 20.
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
**explanation:** When two items are drawn without replacement from a finite set, the total number of equally likely outcomes is the combination C(n, 2) = n(n-1)/2, where n is the total number of items. The probability of any event is the number of outcomes favorable to that event divided by the total number of outcomes.

The box contains 8 marbles: 3 red, 3 blue, and 2 green. The total number of ways to select 2 marbles from 8, without regard to order, is

C(8, 2) = 8! / (2! * 6!) = (8 * 7) / 2 = 28.

Every pair of marbles is equally likely, so the sample space has 28 outcomes.

Two marbles are the same color only if both are red, both are blue, or both are green. The number of favorable outcomes for each group is C(3, 2) = 3 for red, C(3, 2) = 3 for blue, and C(2, 2) = 1 for green, giving a total of 3 + 3 + 1 = 7 same-color pairs. The probability for Column 1 is therefore P(same color) = 7/28 = 1/4.

Because every pair is either same-color or different-color, the two events are complementary and their probabilities must sum to 1. The number of different-color pairs is 28 - 7 = 21, so P(different colors) = 21/28 = 3/4. As a check, 1/4 + 3/4 = 1, confirming the two complementary probabilities are consistent.

The correct answers are Same color = 1/4 and Different colors = 3/4.
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
**fastest_path:** Apply the changes in order: multiply cost by 1.25 for list price, then multiply that result by 0.90 for loyalty price.
**explanation:** A 25% markup on $800 gives a list price of 800 x 1.25 = $1,000. The 10% loyalty discount is taken from that list price, so the customer pays 1,000 x 0.90 = $900. Select $1,000 for List Price and $900 for Loyalty Price.
**common_trap:** The discount is 10% of the $1,000 list price, not 10% of the original $800 cost. Apply sequential percentages to the correct base.
**takeaway:** Successive percentage changes multiply their factors; they are not generally added or subtracted from the same starting value.
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
**explanation:** An arithmetic sequence is a sequence in which each term after the first is obtained by adding a fixed constant, called the common difference, to the preceding term. If the first term is a_1 and the common difference is d, then the nth term is given by the formula a_n = a_1 + (n - 1)d. The sum of the first n terms is given by S_n = (n/2)(a_1 + a_n), or equivalently S_n = (n/2)(2*a_1 + (n - 1)d).

The first three terms of the sequence are 7, 13, and 19. From these:

- a_1 = 7
- d = 13 - 7 = 6 (confirmed: 19 - 13 = 6)

**Finding F, the 10th term.**

Applying the nth-term formula with n = 10:

F = a_10 = a_1 + (10 - 1)d = 7 + 9 * 6 = 7 + 54 = 61

Therefore F = 61.

**Finding S, the sum of the first five terms.**

The fifth term is computed first: a_5 = 7 + (5 - 1) * 6 = 7 + 24 = 31.

Applying the sum formula with n = 5, a_1 = 7, and a_5 = 31:

S = (5/2)(a_1 + a_5) = (5/2)(7 + 31) = (5/2)(38) = 5 * 19 = 95

As a check, the five terms listed explicitly — 7, 13, 19, 25, 31 — sum as follows: 7 + 13 = 20, 20 + 19 = 39, 39 + 25 = 64, 64 + 31 = 95. Both approaches confirm S = 95.

**Evaluating the candidate values.**

Among the five candidates (55, 61, 65, 85, 95), the value 61 matches F and the value 95 matches S. The remaining candidates — 55, 65, and 85 — do not equal any term or partial sum derived from this sequence under the constraints given.

The correct answers are 10th term (F) = 61 and Sum of first 5 (S) = 95.
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
**explanation:** **Governing principle.** The perimeter of a rectangle equals twice the sum of its length and width: P = 2(l + w). The area of a rectangle equals the product of its length and width: A = l * w.

**Define variables.** Let w represent the width of the rectangle in centimeters. The problem states that the length is 6 cm more than the width, so the length is expressed as w + 6.

**Set up the perimeter equation.** Substituting into the perimeter formula:

2((w + 6) + w) = 40

2(2w + 6) = 40

4w + 12 = 40

4w = 28

w = 7

The width is 7 cm.

**Find the length.** The length equals w + 6 = 7 + 6 = 13 cm. Among the candidate values, 13 is the only value consistent with this result, confirming the selection for column 1.

**Find the area.** Using A = l * w:

A = 13 * 7 = 91 cm²

Among the candidate values, 91 is the only value consistent with this result, confirming the selection for column 2.

**Verify.** As a check, the perimeter equals 2(13 + 7) = 2(20) = 40 cm, which matches the given condition.

The correct answers are Length (cm) = 13 and Area (cm²) = 91.
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
**explanation:** **Governing principle.** For any two overlapping sets A and B drawn from a total population, the Inclusion-Exclusion principle states:

|A union B| = |A| + |B| - |A and B|

The "neither" count is then: Neither = Total - |A union B|. The "exactly one" count is obtained by subtracting the overlap from each individual group and summing the remainders: Exactly one = (|A| - |A and B|) + (|B| - |A and B|) = |A| + |B| - 2|A and B|.

**Variable definitions.** Let the total survey population equal 80. Let C = 45 denote the number of coffee drinkers, Te = 30 denote the number of tea drinkers, and B = 10 denote the number who drink both beverages. Let N denote the number who drink neither beverage and T denote the number who drink exactly one beverage.

**Step 1: Find N.**

We first compute the number who drink at least one beverage by applying Inclusion-Exclusion:

At least one = C + Te - B = 45 + 30 - 10 = 65

The remaining employees drink neither beverage:

N = Total - At least one = 80 - 65 = 15

**Step 2: Find T.**

We isolate the employees who drink only one beverage by subtracting the overlap from each group:

- Coffee only = C - B = 45 - 10 = 35
- Tea only = Te - B = 30 - 10 = 20

Therefore T = 35 + 20 = 55.

**Verification.** The four mutually exclusive and exhaustive groups must partition the total population:

Coffee only + Tea only + Both + Neither = 35 + 20 + 10 + 15 = 80

This confirms that no employees have been double-counted or omitted, and that both values are consistent with all given information.

The correct answers are N (drink neither) = 15 and T (exactly one) = 55.
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
**explanation:** **Computing the New Mean (M′).**

The mean of a data set is defined as the sum of all values divided by the count of values. For the original five-element set {2, 6, 10, 14, 18}, the sum is 2 + 6 + 10 + 14 + 18 = 50, and the mean is 50/5 = 10, confirming M = 10.

When the sixth value 16 is added, the new sum becomes 50 + 16 = 66, and the new count is 6. Therefore the new mean is M′ = 66/6 = 11.

**Computing the New Median (D′).**

The median of a data set is the middle value when all values are arranged in ascending order. For an odd number of values the median is the single central element; for an even number of values the median is the arithmetic mean of the two central elements.

The original five-element set in ascending order is {2, 6, 10, 14, 18}. The middle (third) element is 10, confirming D = 10.

Inserting 16 into the ordered set yields the six-element set {2, 6, 10, 14, 16, 18}. With n = 6 elements, the two central positions are the 3rd and 4th elements. Counting from the left, the 3rd element is 10 and the 4th element is 14. The median is therefore the mean of those two values: D′ = (10 + 14)/2 = 24/2 = 12.

**Summary of results.**

New sum: 50 + 16 = 66; new count: 6; M′ = 66/6 = 11. Ordered set after insertion: {2, 6, 10, 14, 16, 18}; central pair: 10 and 14; D′ = (10 + 14)/2 = 12.

The correct answers are New Mean (M′) = 11 and New Median (D′) = 12.
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
**fastest_path:** Infer only the reported comparison for column 1; use self-selection to explain why that comparison is not causal for column 2.
**explanation:** Choose A for Can be Inferred: the study directly reports average ratings of 82 for WFH employees and 74 for office employees. It does not show what would happen if everyone were required to work from home. Choose C for Why Not Causal. If stronger employees self-select into WFH, employee ability can produce both WFH participation and higher ratings. D and E are possible stories, but the data do not establish either one; C directly identifies the selection problem.
**common_trap:** Turning an observed group difference into a prediction about forcing every employee into the same arrangement.
**takeaway:** Descriptive data support the measured comparison, not a causal policy claim when group membership may be self-selected.
**related_reading:** reading-di-06-two-part-analysis

---

## Q34
**difficulty:** Medium
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
**fastest_path:** Set the models equal: 500 x 2^t = 32,000/2^t, so 4^t = 64 and t = 3.
**explanation:** Equating the populations gives 500 x 2^t = 32,000/2^t. Multiply by 2^t and divide by 500: 2^(2t) = 64, or 4^t = 64 = 4^3. Thus t* = 3 decades. Substituting into Town A's model gives V = 500 x 2^3 = 500 x 8 = 4,000. Select 3 for t* and 4,000 for V.
**common_trap:** Setting the expressions equal but failing to account for the second factor of 2^t when clearing the denominator.
**takeaway:** For one exponential growing while another decays, clear the denominator and solve the resulting common-base equation.
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
**fastest_path:** A bridges durable-goods spending to total spending; B shows borrowing may shift channels instead of falling.
**explanation:** Choose A for Strengthens. If durable goods make up about 60% of consumer spending, a decline in that category is large enough to reduce the total, closing the argument's final gap. Choose B for Gap in Chain. If consumers replace costlier mortgage borrowing with credit-card borrowing, overall borrowing may not decrease, so the chain can fail at its first link. C supports only the durable-goods link, D is background, and E adds another route by which spending could fall.
**common_trap:** Selecting evidence that merely repeats an existing link instead of filling or breaking the missing link.
**takeaway:** Map each link in a causal chain; strengthen the unsupported transition and attack the earliest link that may fail.
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
**explanation:** **Governing principle.** When a positive integer must be divisible by two given integers, the smallest such positive integer is their least common multiple (LCM). To find the LCM of two integers, express each as a product of prime factors and take the highest power of every prime that appears.

**Setting up the problem.** Let N be a positive integer divisible by both 9 and 15. S is the smallest positive value of N, and D is the sum of the digits of S.

**Finding the prime factorizations.**

- 9 = 3^2
- 15 = 3 × 5

**Computing the LCM.** The LCM is formed by taking the highest power of each prime that appears in either factorization. The primes involved are 3 and 5.

- Highest power of 3: 3^2 = 9
- Highest power of 5: 5^1 = 5

Therefore LCM(9, 15) = 3^2 × 5 = 9 × 5 = 45.

**Verifying divisibility.** The value 45 satisfies both conditions: 45 / 9 = 5 (an integer), and 45 / 15 = 3 (an integer). No positive integer smaller than 45 is divisible by both 9 and 15, because any such integer would have to be a multiple of the LCM. Therefore S = 45.

**Finding the digit sum.** The digit sum D is defined as the sum of all digits of S. The digits of 45 are 4 and 5, so D = 4 + 5 = 9.

**Checking the candidate values.** Among the six candidates — 9, 15, 27, 36, 45, 135 — the value 45 is the smallest positive multiple of both 9 and 15, confirming S = 45. For the digit sum, D = 9 also appears in the candidate list, confirming both selections are valid.

The correct answers are S (smallest N) = 45 and D (digit sum of S) = 9.
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
**explanation:** **Setup.** Two conditions govern the relationship between Anna's book count and Ben's book count. Let A = the number of books Anna owns and B = the number of books Ben owns.

The first condition states that the two together own 48 books:

A + B = 48

The second condition states that Anna has 8 more books than Ben:

A = B + 8

**Solving the system.** Substituting the expression for A from the second equation into the first:

(B + 8) + B = 48

2B + 8 = 48

2B = 40

B = 20

Substituting B = 20 back into A = B + 8 gives:

A = 20 + 8 = 28

**Verification.** Checking both conditions: A + B = 28 + 20 = 48 (correct), and A - B = 28 - 20 = 8 (correct). Both equations are satisfied.

**Selecting from the candidate values.** The candidate row values are 12, 16, 20, 24, 28, and 32. The derived value A = 28 appears in the list and is assigned to column 1 (Anna). The derived value B = 20 appears in the list and is assigned to column 2 (Ben).

The correct answers are A (Anna) = 28 and B (Ben) = 20.
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
**explanation:** **Governing principle.** A percentage discount reduces a quantity by a given fraction of its current value, and a percentage increase raises a quantity by a given fraction of its current value. Successive percentage changes are applied sequentially, each to the result of the prior step — not to the original amount.

**Variable definitions.**

Let P = the original price = 80.
Let J = the price after the January 25% discount.
Let F = the price after the February 10% increase applied to J.

**Step 1: January discount.**

A discount of 25% means the item retains 100% - 25% = 75% of its prior price. Therefore:

J = P * (1 - 0.25) = 80 * 0.75 = 60

Among the candidate values, J = 60.

**Step 2: February increase.**

A price increase of 10% means the item becomes 100% + 10% = 110% of its prior price. The base for this calculation is J, not the original P. Therefore:

F = J * (1 + 0.10) = 60 * 1.10 = 66

Among the candidate values, F = 66.

**Why common errors arise.** A frequent mistake is to apply the February percentage to the original price (80 * 1.10 = 88, which does not appear among the candidates) or to subtract and add the raw percentage points as dollar amounts rather than fractions of the current base. Another error is computing a net change of -25% + 10% = -15% applied to the original (80 * 0.85 = 68), which conflates sequential multiplicative steps with a single additive adjustment and yields an incorrect result for F even though 68 appears as a distractor.

The correct answers are J (January price) = 60 and F (February price) = 66.
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
**fastest_path:** B is the judgment supported by the statistics; D supplies an external event that can independently explain more visits.
**explanation:** Choose B for Conclusion: the author cites increased visits and strong dish ratings to support the judgment that the menu is a success. Choose D for Alternative Explanation. A nearby competitor's closure could shift customers to this restaurant regardless of its new menu. E is tied to promoting the menu and could also affect visits, but the competitor closure is the cleaner independent cause. A and C are evidence already stated in the argument.
**common_trap:** Selecting a supporting statistic as the conclusion or choosing a factor bundled with the menu launch over an independent market change.
**takeaway:** Find the evaluative claim for the conclusion and prefer an independent event as the strongest alternative cause.
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
**explanation:** **Governing principles.** A ratio by weight of 3:1 (flour to sugar) means that for every 3 grams of flour, 1 gram of sugar is required. A percentage applied to a combined weight means that percentage of the total is taken as the derived quantity.

**Step 1 — Define variables and translate the problem into equations.**

Let F = grams of flour = 240 (given), S = grams of sugar, and B = grams of butter.

The flour-to-sugar ratio is:

F / S = 3 / 1

Therefore S = F / 3.

The butter quantity satisfies:

B = 0.40 * (F + S)

**Step 2 — Solve for S.**

Substituting F = 240:

S = 240 / 3 = 80

Therefore S = 80 grams.

**Step 3 — Solve for B.**

First, compute the combined weight of flour and sugar:

F + S = 240 + 80 = 320 grams

Then apply the 40% factor:

B = 0.40 * 320 = 128

Therefore B = 128 grams.

**Step 4 — Verify against the candidate values.**

The candidate list includes 80 and 128, confirming that both derived values are present among the options.

The correct answers are S (sugar, g) = 80 and B (butter, g) = 128.
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
**explanation:** **Setup.** Let P denote the original price per share, P = 200. Two quantities are required: G, the percentage gain needed in Q2 to restore the price exactly to P, and D, the cash dividend paid per share during Q1.

**Finding G.**

The governing principle is that a percentage change applies to the base value in effect at the time of the change. After Q1 the stock has lost 20% of its original price, so the end-of-Q1 price P_1 is

P_1 = P x (1 - 20/100) = 200 x 0.80 = 160.

For the stock to return exactly to P = 200 in Q2, the required dollar gain is

200 - 160 = 40.

That gain is measured as a percentage of the Q2 starting price, which is P_1 = 160. Therefore

G = (40 / 160) x 100 = 2500 / 100 = 25.

The common error is selecting G = 20 (the mirror of the Q1 loss). A 20% gain on 160 yields 160 x 1.20 = 192, which falls short of 200 by 8 dollars. Because the base from which Q2 growth is measured is smaller than the original base, the required recovery percentage must exceed the loss percentage; therefore G = 25, not 20.

**Finding D.**

The problem states that the dividend equals 5% of the Q1 end-of-quarter price, which has already been established to be P_1 = 160. Therefore

D = 0.05 x 160 = 8.00.

The dividend is denominated in dollars per share, so D = 8.

**Summary of results.**

| Column | Expression | Value |
|---|---|---|
| G (%) | (P - P_1) / P_1 x 100 | 25 |
| D ($) | 0.05 x P_1 | 8 |

The correct answers are G (%) = 25 and D ($) = 8.
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
**explanation:** **The combined-work principle** states that when two workers operate simultaneously, their individual rates add: if Worker A completes 1/a of a job per unit time and Worker B completes 1/b of a job per unit time, together they complete 1/a + 1/b of the job per unit time, and the time to finish the whole job is the reciprocal of that sum.

**Setting up the rate equation.**

Let x be the number of minutes Printer B requires to complete the job alone. Printer A completes the job alone in 12 minutes, so A's rate is 1/12 of the job per minute. Printer B's rate is 1/x of the job per minute. Working together, the two printers finish the job in 4 minutes, so their combined rate is 1/4 of the job per minute. The governing equation is therefore:

1/12 + 1/x = 1/4

**Solving for X.**

Subtract 1/12 from both sides:

1/x = 1/4 - 1/12

To subtract these fractions, convert to a common denominator of 12:

1/4 = 3/12

1/x = 3/12 - 1/12 = 2/12 = 1/6

Taking the reciprocal of both sides:

x = 6

Printer B requires 6 minutes to complete the job alone, so the correct value for column 1 is **6**.

**Solving for F.**

Let F be the fraction of the job that Printer B completes during the 4-minute combined run. Since B's rate is 1/6 of the job per minute, the fraction B contributes over 4 minutes is:

F = rate of B * time = (1/6) * 4 = 4/6 = 2/3

This result is consistent: A's contribution over the same 4 minutes is (1/12) * 4 = 4/12 = 1/3. The two fractions sum to 1/3 + 2/3 = 1, confirming the entire job is completed. The correct value for column 2 is **2/3**.

The correct answers are X (min for B alone) = 6 and F (B's fraction in 4 min) = 2/3.
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
**explanation:** **Governing principle.** A two-digit integer with tens digit T and units digit U has the value 10T + U. Reversing the digits produces the integer 10U + T. The difference between the two is therefore (10T + U) - (10U + T) = 9T - 9U = 9(T - U).

**Defining variables and translating the conditions.**

Let T represent the tens digit and U represent the units digit, where T and U are each integers from 1 to 9 (T >= 1 since the original number is a two-digit integer, and U >= 1 since reversing it must also yield a two-digit integer).

- Condition 1 (tens digit is twice the units digit): T = 2U
- Condition 2 (original number exceeds reversed number by exactly 36): (10T + U) - (10U + T) = 36

**Simplifying Condition 2.**

(10T + U) - (10U + T) = 9T - 9U = 9(T - U) = 36

Dividing both sides by 9: T - U = 4

**Solving the system.**

Two equations now govern T and U:

1. T = 2U
2. T - U = 4

Substituting equation 1 into equation 2:

2U - U = 4, therefore U = 4.

Substituting U = 4 back into equation 1: T = 2(4) = 8.

**Verification.**

The original number is 10(8) + 4 = 84. The reversed number is 10(4) + 8 = 48. The difference is 84 - 48 = 36, which satisfies Condition 2 exactly. Condition 1 is also satisfied since 8 = 2(4).

Both values appear among the candidate row values (2, 3, 4, 6, 7, 8): T = 8 and U = 4 are both present.

The correct answers are T (tens digit) = 8 and U (units digit) = 4.
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
**explanation:** **Setting up the system of equations.**

The problem provides two independent constraints on the same two unknowns, which is the hallmark of a linear system solvable by substitution or elimination. Let S = the number of standard tickets sold and P = the number of premium tickets sold.

**Constraint 1 — total tickets sold.**

The theater sold 250 tickets in total, so:

S + P = 250

**Constraint 2 — total revenue.**

Standard tickets sell for $18 each and premium tickets for $30 each, producing total revenue of $5,700:

18S + 30P = 5700

**Solving by substitution.**

From Constraint 1, we isolate S:

S = 250 - P

Substituting into Constraint 2:

18(250 - P) + 30P = 5700

Expanding the left side:

4500 - 18P + 30P = 5700

Combining like terms:

4500 + 12P = 5700

Subtracting 4500 from both sides:

12P = 1200

Dividing both sides by 12:

P = 100

Returning to Constraint 1 to find S:

S = 250 - 100 = 150

**Verification.**

Both constraints are checked against S = 150 and P = 100.

- Total tickets: 150 + 100 = 250. Confirmed.
- Total revenue: 18(150) + 30(100) = 2700 + 3000 = 5700. Confirmed.

**Eliminating the remaining candidate values.**

The candidate values for each column are 80, 100, 120, 130, 150, and 170. Because the system has a unique solution, any assignment other than S = 150 and P = 100 fails at least one constraint. For example, if S = 170 then P = 80, and revenue would be 18(170) + 30(80) = 3060 + 2400 = 5460, not 5700. Similarly, if S = 130 then P = 120, and revenue would be 18(130) + 30(120) = 2340 + 3600 = 5940, not 5700. Only S = 150 and P = 100 satisfies both equations simultaneously.

The correct answers are S (standard) = 150 and P (premium) = 100.
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

**answer:** Weakens = Turnover at peer companies in the same sector dropped; Supports = Employees who participated in the mentorship program left the company
**fastest_path:** A shows the decline also occurred without mentorship; B compares participants with nonparticipants inside the company.
**explanation:** Choose A for Weakens. Peer companies without mentorship programs saw an average ten-point turnover decline, so a sector-wide force can explain the company's nine-point decline. Choose B for Supports: mentorship participants left at half the rate of nonparticipants, directly linking participation to retention. C also offers a possible cause, but A is stronger because it provides an external comparison matching the observed change. E is supportive but relies on self-reported reasons rather than actual departure rates.
**common_trap:** Preferring a survey response over behavioral evidence or overlooking a comparison group without the program.
**takeaway:** A no-treatment comparison tests alternative causes; participant outcomes provide direct, though not perfect, support.
**related_reading:** reading-di-06-two-part-analysis

---

## Q46
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Conditional Probability

A bag contains 5 red marbles and 7 blue marbles. Two marbles are drawn sequentially without replacement. Let P1 = probability the first marble is red, and P2 = probability the second marble is red given the first was also red.

Select the value of P1 (column 1) and the value of P2 (column 2).

|       | P1 (first red) | P2 (second red, given first red) |
|-------|----------------|------------------------------|
| 1/12  |                |                              |
| 4/11  |                |                              |
| 4/12  |                |                              |
| 5/11  |                |                              |
| 5/12  |                |                              |
| 7/12  |                |                              |

**answer:** P1 = 5/12, P2 = 4/11
**fastest_path:** First-draw red uses 5 of 12; after a red is removed, the conditional second draw uses 4 of 11.
**explanation:** Before any draw, 5 of the 12 marbles are red, so P1 = 5/12. Given that the first marble was red, 4 red and 7 blue marbles remain, 11 total. Therefore P2 = 4/11. Select 5/12 for P1 and 4/11 for P2.
**common_trap:** Reusing 5/12 for the second draw even though the condition removes one red marble and one total marble.
**takeaway:** In conditional draws without replacement, update the favorable count and total after the stated first outcome.
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
**explanation:** **Governing principle.** The weighted average of two groups equals the sum of each group's total score divided by the total number of students. Formally, if Group 1 has N1 students with mean score A and Group 2 has N2 students with mean score B, then the overall mean M satisfies:

(N1 * A + N2 * B) / (N1 + N2) = M

**Setting up the system.** Given A = 70, B = 90, M = 78, and N1 + N2 = 30, substituting into the weighted-average formula and multiplying both sides by 30 yields:

N1 * 70 + N2 * 90 = 78 * 30 = 2340

This produces a two-equation system:

- N1 + N2 = 30
- 70 * N1 + 90 * N2 = 2340

**Solving by substitution.** From the first equation, N2 = 30 - N1. Substituting into the second:

70 * N1 + 90 * (30 - N1) = 2340

70 * N1 + 2700 - 90 * N1 = 2340

-20 * N1 = 2340 - 2700 = -360

N1 = -360 / -20 = 18

Therefore N2 = 30 - 18 = 12.

**Verification.** Confirming that the weighted average recovers M = 78:

(18 * 70 + 12 * 90) / 30 = (1260 + 1080) / 30 = 2340 / 30 = 78. Correct.

**Intuition via mixture reasoning.** The overall average of 78 lies between 70 and 90. Its distance from each group mean is: 78 - 70 = 8 points above Test A's mean, and 90 - 78 = 12 points below Test B's mean. By the lever principle for weighted averages, the group sizes must be inversely proportional to these distances: N1 / N2 = 12 / 8 = 3 / 2. With N1 + N2 = 30, this gives N1 = 18 and N2 = 12, confirming the algebraic result.

The correct answers are N1 (Test A) = 18 and N2 (Test B) = 12.
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
**fastest_path:** Replace one corn acre with wheat: profit rises $200 but labor use rises 2 days. The 200 extra labor-days allow 100 such swaps.
**explanation:** Planting all 200 acres in corn uses 600 labor-days and earns $80,000. Each acre switched from corn to wheat uses 2 additional labor-days and adds $200 profit. The remaining 200 labor-days permit 200/2 = 100 switches. Thus W = 100 and C = 100. Labor is 3(100)+5(100)=800, and no further profitable switch is feasible.
**common_trap:** Wheat earns more per acre, but all 200 acres of wheat would require 1,000 labor-days and violate the 800-day limit.
**takeaway:** With fixed total acreage, compare the incremental profit and resource cost of replacing one crop with the other.
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

**answer:** Weakens = Most TechCorp employees will continue performing work tasks; Unstated Assumption = The 30% productivity difference between high-vacation and low-vacation employees
**fastest_path:** Separate the roles: A breaks the proposed rest mechanism at TechCorp; C exposes the cause-versus-selection assumption behind the 30% survey gap.
**explanation:** For Weakens, choose A. If employees keep working during mandated vacation, the policy does not create genuine rest, so the proposed route to higher productivity fails. For Unstated Assumption, choose C. The projection treats the 30% association as a causal effect of vacation; if high performers simply choose more vacation, forcing others to take vacation need not reproduce the gain. B questions the loss estimate, D concerns cost rather than recovered productivity, and E merely restates that $1.5 million is 75% of $2 million.
**common_trap:** Using C for both columns because it weakens the argument; the task requires the best distinct role for each selection.
**takeaway:** In causal Two-Part questions, distinguish a failed implementation mechanism from an unstated cause-versus-correlation assumption.
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
**explanation:** **Setup and variable definitions.**

Let B = the boat's speed in still water (km/h) and C = the current's speed (km/h). When a boat travels upstream, the current opposes its motion, so the effective upstream speed is B - C. When the boat travels downstream, the current aids its motion, so the effective downstream speed is B + C. Time equals distance divided by speed; here the distance for each leg is 72 km.

**Translating the two constraints into equations.**

Constraint 1 — the downstream speed is exactly twice the upstream speed:

B + C = 2(B - C)

Expanding the right side: B + C = 2B - 2C. Subtracting B from both sides and adding 2C to both sides gives 3C = B, or equivalently B = 3C.

Constraint 2 — the upstream trip takes 3 hours more than the downstream trip:

72/(B - C) - 72/(B + C) = 3

**Substituting B = 3C to reduce to one unknown.**

With B = 3C:

- Upstream speed: B - C = 3C - C = 2C
- Downstream speed: B + C = 3C + C = 4C

Substituting into the time equation:

72/(2C) - 72/(4C) = 3

Simplifying each term: 36/C - 18/C = 3, which gives 18/C = 3, therefore C = 18/3 = 6.

**Solving for B.**

Because B = 3C, it follows that B = 3 * 6 = 18.

**Verification.**

- Upstream speed: 18 - 6 = 12 km/h; time upstream: 72/12 = 6 hours.
- Downstream speed: 18 + 6 = 24 km/h; time downstream: 72/24 = 3 hours.
- Time difference: 6 - 3 = 3 hours. This matches the stated condition.
- Speed ratio: 24/12 = 2. This matches the stated condition.

Both constraints are satisfied. The column-1 value is B = 18 and the column-2 value is C = 6. Each of these values appears among the six candidates (6, 9, 12, 15, 18, 24).

The correct answers are B (still water, km/h) = 18 and C (current, km/h) = 6.
**related_reading:** reading-di-06-two-part-analysis

---

## Q51
**difficulty:** Medium
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
**fastest_path:** List numbers that leave remainder 3 on division by 7: 3, 10, 17, 24; the first that is 1 mod 4 is 17.
**explanation:** Numbers congruent to 3 modulo 7 are 3, 10, 17, 24, and so on. Their remainders modulo 4 are 3, 2, 1, and 0, so the smallest satisfying both conditions is S = 17. Because 17 is already below 28, its remainder when divided by 28 is also R = 17. Select 17 for both columns.
**common_trap:** Stopping at the first number that satisfies one congruence without checking the other.
**takeaway:** For small simultaneous remainder conditions, list one progression and test the second modulus.
**related_reading:** reading-di-06-two-part-analysis

---

## Q52
**difficulty:** Hard
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
**fastest_path:** List the qualifying hourly efficiencies: 100%, 90%, 80%, 70%, 60%, 50%. That gives H = 6; sum their outputs as an arithmetic series.
**explanation:** Efficiency remains at least 50% for hours 1 through 6, so H = 6. Output in those hours is 200, 180, 160, 140, 120, and 100 units. These six values form an arithmetic sequence, so T = 6(200 + 100)/2 = 900. Select 6 for H and 900 for T.
**common_trap:** Do not exclude the sixth hour: 'at least 50%' includes exactly 50%. Hour 7 is the first hour below the cutoff.
**takeaway:** For an inclusive threshold, count the endpoint; then use n(first + last)/2 to sum an arithmetic sequence quickly.
**related_reading:** reading-di-06-two-part-analysis

---

## Q53
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations

A bakery sells croissants for $3 each and muffins for $2 each. On a particular morning it sold 50 items in total and collected $130 in revenue. Determine the number of croissants sold (row 1) and the number of muffins sold (row 2).

|     | Croissants | Muffins |
|-----|------------|---------|
| 20  |            |         |
| 25  |            |         |
| 30  |            |         |
| 35  |            |         |
| 40  |            |         |

**answer:** Croissants = 30, Muffins = 20
**explanation:** **Governing principle.** A system of two linear equations in two unknowns is solved by substitution: one variable is expressed in terms of the other using the first equation, and the result is substituted into the second.

**Define variables.** Let c be the number of croissants sold and m be the number of muffins sold.

**Translate the problem into equations.**

The total number of items sold is 50:

c + m = 50   ... (1)

The total revenue is $130, with croissants priced at $3 each and muffins at $2 each:

3c + 2m = 130   ... (2)

**Solve by substitution.** From equation (1), m = 50 - c. Substituting into equation (2):

3c + 2(50 - c) = 130

3c + 100 - 2c = 130

c + 100 = 130

c = 30

**Find m.** Substituting c = 30 into equation (1): 30 + m = 50, so m = 20.

**Verification.** Item count: 30 + 20 = 50. Revenue: 3(30) + 2(20) = 90 + 40 = 130. Both conditions hold.

**Eliminating distractors.** The candidate values are 20, 25, 30, 35, and 40. Selecting c = 25 would give m = 25 and revenue 3(25) + 2(25) = 125, which falls short of $130. Selecting c = 35 would give m = 15 (not a candidate) and revenue 3(35) + 2(15) = 135, which exceeds $130. Only c = 30 with m = 20 satisfies both equations and appears among the candidates.

The correct answers are Croissants = 30 and Muffins = 20.
**related_reading:** reading-di-06-two-part-analysis

---

## Q54
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Percentages

A retailer marks up a jacket by 40% above its cost to set the list price, then offers a 25% discount off the list price at checkout. The customer pays $84 for the jacket. Determine the cost the retailer paid for the jacket (row 1) and the list price before discount (row 2).

|       | Cost | List Price |
|-------|------|------------|
| $70   |      |            |
| $80   |      |            |
| $84   |      |            |
| $100  |      |            |
| $112  |      |            |

**answer:** Cost = $80, List Price = $112
**explanation:** **Governing principle.** Successive percentage operations are applied multiplicatively. A 40% markup multiplies the cost by 1.40 to produce the list price; a 25% discount multiplies the list price by (1 - 0.25) = 0.75 to produce the price paid.

**Define variables.** Let C be the cost the retailer paid and L be the list price.

**Translate into equations.**

The markup gives:

L = 1.40 * C   ... (1)

The discount gives the final price paid:

0.75 * L = 84   ... (2)

**Solve for L.** From equation (2):

L = 84 / 0.75 = 112

**Solve for C.** Substituting L = 112 into equation (1):

112 = 1.40 * C

C = 112 / 1.40 = 80

**Verification.** Markup: 1.40 * 80 = 112, matching the list price. Discount: 0.75 * 112 = 84, matching the price paid. Both steps are consistent.

**Matching candidate values.** The candidate list is $70, $80, $84, $100, and $112. C = 80 and L = 112 both appear. The value $84 is the price paid, which is a deliberate distractor for the cost; it does not equal the cost because two separate percentage operations separate the cost from the final price.

The correct answers are Cost = $80 and List Price = $112.
**related_reading:** reading-di-06-two-part-analysis

---

## Q55
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Distance/Rate

A cyclist rides from home to a lake at 15 km/h and returns along the same road at 10 km/h. The entire round trip takes 5 hours. Determine the one-way distance from home to the lake (row 1) and the total distance traveled on the round trip (row 2).

|        | One-way Distance | Round-trip Distance |
|--------|------------------|---------------------|
| 24 km  |                  |                     |
| 30 km  |                  |                     |
| 36 km  |                  |                     |
| 60 km  |                  |                     |
| 75 km  |                  |                     |

**answer:** One-way Distance = 30 km, Round-trip Distance = 60 km
**explanation:** **Governing principle.** For a fixed distance traveled at a known speed, time = distance / rate. When the same distance is covered at two different speeds, the total time is the sum of the two individual times.

**Define variables.** Let d be the one-way distance (in kilometers) from home to the lake.

**Translate into an equation.** The outbound leg at 15 km/h takes d/15 hours; the return leg at 10 km/h takes d/10 hours. The total time is 5 hours:

d/15 + d/10 = 5

**Solve for d.** The least common denominator of 15 and 10 is 30:

d/15 = 2d/30 and d/10 = 3d/30

So 2d/30 + 3d/30 = 5d/30 = 5.

Multiplying both sides by 30: 5d = 150, therefore d = 30 km.

**Solve for the round-trip distance.** The round trip covers the one-way distance twice:

2 * 30 = 60 km

**Verification.** Outbound time: 30/15 = 2 hours. Return time: 30/10 = 3 hours. Total: 2 + 3 = 5 hours, matching the prompt.

**Matching candidate values.** The candidates are 24, 30, 36, 60, and 75 km. The one-way distance d = 30 km and the round-trip distance 60 km both appear. The value 75 km is a trap obtained by incorrectly multiplying the average of the speeds by the time; it does not satisfy the time equation.

The correct answers are One-way Distance = 30 km and Round-trip Distance = 60 km.
**related_reading:** reading-di-06-two-part-analysis

---

## Q56
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Compound Interest

A principal of $5,000 is deposited in an account earning interest compounded annually at a fixed annual rate. After 2 years the balance is $5,832. Determine the annual interest rate (row 1) and the account balance after 3 years (row 2).

|         | Annual Rate | Balance after 3 years |
|---------|-------------|-----------------------|
| 6%      |             |                       |
| 8%      |             |                       |
| 10%     |             |                       |
| $6,000  |             |                       |
| $6,298.56 |           |                       |
| $6,860  |             |                       |

**answer:** Annual Rate = 8%, Balance after 3 years = $6,298.56
**explanation:** **Governing principle.** Under annual compounding, a balance grows by a factor of (1 + r) each year, where r is the decimal annual rate. After t years, the balance is Principal * (1 + r)^t.

**Define variables.** Let r be the decimal annual interest rate.

**Solve for r using the 2-year balance.** The 2-year compounding relationship is:

5000 * (1 + r)^2 = 5832

Dividing both sides by 5000:

(1 + r)^2 = 5832 / 5000 = 1.1664

Taking the positive square root:

1 + r = sqrt(1.1664) = 1.08

Therefore r = 0.08, an annual rate of 8%.

**Verification of the rate.** At 8%, the balance after 1 year is 5000 * 1.08 = 5400, and after 2 years 5400 * 1.08 = 5832, which matches the given balance. Checking the distractors: at 6%, the 2-year balance would be 5000 * 1.06^2 = 5618, and at 10% it would be 5000 * 1.10^2 = 6050 — neither equals 5832, so only 8% is consistent.

**Solve for the 3-year balance.** Applying one more year of growth at 8%:

5832 * 1.08 = 6298.56

Equivalently, 5000 * 1.08^3 = 5000 * 1.259712 = 6298.56.

**Matching candidate values.** The candidate list contains the rates 6%, 8%, 10% and the balances $6,000, $6,298.56, and $6,860. The rate 8% and the balance $6,298.56 are the unique consistent pair. The value $6,860 corresponds to a 3-year balance at 11.2% growth and does not arise from the verified 8% rate.

The correct answers are Annual Rate = 8% and Balance after 3 years = $6,298.56.
**related_reading:** reading-di-06-two-part-analysis

---

## Q57
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Ages

A father is currently three times as old as his daughter. In 10 years, the father will be twice as old as his daughter. Determine the daughter's current age (row 1) and the father's current age (row 2).

|     | Daughter's Age | Father's Age |
|-----|----------------|--------------|
| 8   |                |              |
| 10  |                |              |
| 12  |                |              |
| 30  |                |              |
| 36  |                |              |

**answer:** Daughter's Age = 10, Father's Age = 30
**explanation:** **Governing principle.** Age problems are modeled by writing each person's age as a variable now and adding the same number of years to every person's age for any future point in time.

**Define variables.** Let d be the daughter's current age and f be the father's current age.

**Translate into equations.**

The father is currently three times as old as the daughter:

f = 3d   ... (1)

In 10 years, the father (f + 10) will be twice the daughter's age (d + 10):

f + 10 = 2(d + 10)   ... (2)

**Solve the system.** Substituting equation (1) into equation (2):

3d + 10 = 2(d + 10)

3d + 10 = 2d + 20

3d - 2d = 20 - 10

d = 10

**Find f.** From equation (1): f = 3 * 10 = 30.

**Verification.** Currently the father (30) is three times the daughter (10): 30 = 3 * 10. In 10 years the father is 40 and the daughter is 20, and 40 = 2 * 20. Both conditions are satisfied.

**Matching candidate values.** The candidates are 8, 10, 12, 30, and 36. The daughter's age d = 10 and the father's age f = 30 both appear. Selecting d = 12 would give f = 36, but in 10 years the father would be 46 and the daughter 22, and 46 is not twice 22, so that pair fails the second condition.

The correct answers are Daughter's Age = 10 and Father's Age = 30.
**related_reading:** reading-di-06-two-part-analysis

---

## Q58
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Number Properties

A two-digit positive integer has digits whose sum is 12. When the digits are reversed, the new number is 18 greater than the original. Determine the tens digit of the original number (row 1) and the original number itself (row 2).

|     | Tens Digit | Original Number |
|-----|------------|-----------------|
| 3   |            |                 |
| 5   |            |                 |
| 7   |            |                 |
| 57  |            |                 |
| 75  |            |                 |

**answer:** Tens Digit = 5, Original Number = 57
**explanation:** **Governing principle.** A two-digit number with tens digit t and units digit u has value 10t + u. Reversing the digits produces 10u + t. Digit-based problems are solved by translating each verbal condition into an equation in t and u, with the constraint that both are integers from 0 to 9 (and t >= 1).

**Define variables.** Let t be the tens digit and u be the units digit of the original number.

**Translate into equations.**

The digit sum is 12:

t + u = 12   ... (1)

Reversing the digits increases the value by 18:

(10u + t) - (10t + u) = 18   ... (2)

**Simplify equation (2).**

10u + t - 10t - u = 18

9u - 9t = 18

Dividing by 9:

u - t = 2   ... (2')

**Solve the system.** Adding equations (1) and (2'):

(t + u) + (u - t) = 12 + 2

2u = 14

u = 7

Substituting into equation (1): t + 7 = 12, so t = 5.

**Form the original number.** The original number is 10t + u = 10(5) + 7 = 57.

**Verification.** Digit sum: 5 + 7 = 12. Reversed number: 75, and 75 - 57 = 18. Both conditions hold.

**Matching candidate values.** The candidates are 3, 5, 7, 57, and 75. The tens digit t = 5 and the original number 57 both appear. The value 75 is the reversed number (the trap for "original number"), and 7 is the units digit (the trap for "tens digit"); neither satisfies the role asked.

The correct answers are Tens Digit = 5 and Original Number = 57.
**related_reading:** reading-di-06-two-part-analysis

---

## Q59
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "Sales of our flagship product fell 20% last quarter. During the same quarter, we cut the advertising budget for that product by half. Therefore, the reduced advertising caused the drop in sales."

From the statements below, identify the conclusion of the argument (row 1) and the central unstated assumption required for the argument to hold (row 2).

| Statement                                                                              | Conclusion | Assumption |
|----------------------------------------------------------------------------------------|------------|------------|
| The reduced advertising caused the drop in sales                                        |            |            |
| No other factor materially contributed to the decline in sales                          |            |            |
| Sales of the flagship product fell 20% last quarter                                     |            |            |
| The advertising budget was cut by half last quarter                                     |            |            |
| Advertising is the only driver of sales for every product                               |            |            |

**answer:** Conclusion = "The reduced advertising caused the drop in sales", Assumption = "No other factor materially contributed to the decline in sales"
**fastest_path:** A is the causal claim; B is the no-competing-cause assumption needed to infer causation from simultaneous changes.
**explanation:** Choose A for Conclusion: the author claims that reduced advertising caused the 20% sales decline. Choose B for Assumption. The timing supports that claim only if no other material factor, such as price, distribution, or demand, caused the decline. C and D are observations used as premises. E is much stronger than necessary; the argument need not assume advertising is the only sales driver for every product.
**common_trap:** Choosing a universal assumption when the argument needs only to rule out a material alternative cause in this case.
**takeaway:** Use the minimal required assumption, not an extreme claim that extends beyond the argument.
**related_reading:** reading-di-06-two-part-analysis

---

## Q60
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthening and Weakening

A nutrition company argues: "People who drank our protein shake daily for three months lost an average of 6 pounds. Therefore, our protein shake is an effective weight-loss product."

From the statements below, identify one that would most strengthen the argument (row 1) and one that would most weaken it (row 2).

| Statement                                                                                       | Strengthens | Weakens |
|-------------------------------------------------------------------------------------------------|-------------|---------|
| In a randomized trial, those given the shake lost 5 pounds while an identical group given a placebo shake lost none |             |         |
| Participants who drank the shake daily also began exercising five times a week during the study  |             |         |
| The shake is sold in three flavors                                                              |             |         |
| The shake contains 25 grams of protein per serving                                              |             |         |
| Many customers report enjoying the taste of the shake                                            |             |         |

**answer:** Strengthens = "In a randomized trial, those given the shake lost 5 pounds while an identical group given a placebo shake lost none", Weakens = "Participants who drank the shake daily also began exercising five times a week during the study"
**fastest_path:** A isolates the shake against a placebo; B adds exercise as a powerful competing cause of weight loss.
**explanation:** Choose A for Strengthens. Random assignment to shake and placebo groups that are otherwise identical isolates the product, and only the shake group loses weight. Choose B for Weakens: participants also began exercising five times weekly, which could independently explain the six-pound loss. Flavor, protein content, and taste do not establish whether the shake caused weight loss.
**common_trap:** Treating a product ingredient or positive customer opinion as stronger evidence than a controlled outcome comparison.
**takeaway:** Randomized comparison supports causation; a simultaneous behavioral change creates a direct alternative cause.
**related_reading:** reading-di-06-two-part-analysis

---

## Q61
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Work Rate

A printing job can be completed by Machine P alone in 12 hours or by Machine Q alone in 8 hours. The two machines start together but, after working together for some hours, Machine P breaks down and Machine Q finishes the remaining job alone. The entire job takes 6 hours in total. Determine the number of hours the two machines worked together (row 1) and the fraction of the job completed by Machine Q alone after P broke down (row 2).

|       | Hours Together | Fraction by Q Alone |
|-------|----------------|---------------------|
| 2.4   |                |                     |
| 3     |                |                     |
| 4.8   |                |                     |
| 1/8   |                |                     |
| 3/8   |                |                     |
| 1/2   |                |                     |

**answer:** Hours Together = 3, Fraction by Q Alone = 3/8
**fastest_path:** Let t be joint-work hours: (5/24)t + (1/8)(6 - t) = 1.
**explanation:** P and Q together work at 1/12 + 1/8 = 5/24 job per hour. If they work together for t hours, Q then works alone for 6 - t hours. Thus (5/24)t + (1/8)(6 - t) = 1. Multiplying by 24 gives 5t + 18 - 3t = 24, so t = 3. Q works alone for 3 hours and completes 3 x 1/8 = 3/8 of the job. Select 3 and 3/8.
**common_trap:** Using six hours as the joint-work time or adding completion times instead of work fractions.
**takeaway:** Split the timeline into phases and make the completed-work fractions sum to one job.
**related_reading:** reading-di-06-two-part-analysis

---

## Q62
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mixture by Replacement

A 40-liter container is full of pure antifreeze. Some amount is drained off and replaced with water; the mixture is stirred. The resulting solution is 75% antifreeze. Determine the volume drained and replaced with water (row 1) and the volume of antifreeze remaining in the container (row 2).

|        | Volume Replaced | Antifreeze Remaining |
|--------|-----------------|----------------------|
| 5 L    |                 |                      |
| 10 L   |                 |                      |
| 15 L   |                 |                      |
| 30 L   |                 |                      |
| 35 L   |                 |                      |

**answer:** Volume Replaced = 10 L, Antifreeze Remaining = 30 L
**explanation:** **Governing principle.** When a volume is drained from a uniform solution and replaced with water, only the drained portion removes the active substance; the water adds none. The container stays at its original total volume, so the final concentration equals (antifreeze remaining) divided by (total volume).

**Define variables.** Let v be the volume (in liters) drained off and replaced with water. The container holds 40 liters of pure antifreeze before draining.

**Translate into an equation.** Draining v liters of pure antifreeze removes v liters of antifreeze, leaving (40 - v) liters of antifreeze. Replacing with v liters of water restores the total to 40 liters but adds no antifreeze. The final solution is 75% antifreeze:

(40 - v) / 40 = 0.75

**Solve for v.** Multiply both sides by 40:

40 - v = 30

v = 10

So 10 liters were drained and replaced with water.

**Solve for antifreeze remaining.** The antifreeze remaining is 40 - v = 40 - 10 = 30 liters.

**Verification.** After draining 10 liters of pure antifreeze, 30 liters of antifreeze remain; adding 10 liters of water brings the total back to 40 liters. The concentration is 30/40 = 0.75 = 75%, matching the prompt.

**Matching candidate values.** The candidates are 5, 10, 15, 30, and 35 liters. The volume replaced v = 10 L and the antifreeze remaining 30 L both appear. Selecting 15 L replaced would leave 25 L of antifreeze, giving 25/40 = 62.5%, which is not 75%; only v = 10 produces the required concentration.

The correct answers are Volume Replaced = 10 L and Antifreeze Remaining = 30 L.
**related_reading:** reading-di-06-two-part-analysis

---

## Q63
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry

A rectangle has a perimeter of 34 cm and a diagonal of 13 cm. Determine the length of the longer side (row 1) and the area of the rectangle (row 2).

|         | Longer Side | Area |
|---------|-------------|------|
| 5 cm    |             |      |
| 12 cm   |             |      |
| 13 cm   |             |      |
| 60 cm²  |             |      |
| 72 cm²  |             |      |

**answer:** Longer Side = 12 cm, Area = 60 cm²
**explanation:** **Governing principle.** For a rectangle with sides L and W, the perimeter is 2(L + W) and, by the Pythagorean theorem, the diagonal satisfies L² + W² = (diagonal)². These two relationships determine both sides.

**Define variables.** Let L and W be the two side lengths, with L the longer side.

**Translate into equations.**

Perimeter: 2(L + W) = 34, so L + W = 17   ... (1)

Diagonal: L² + W² = 13² = 169   ... (2)

**Solve the system.** Square equation (1):

(L + W)² = 17² = 289

Expanding: L² + 2LW + W² = 289. Substituting L² + W² = 169 from equation (2):

169 + 2LW = 289

2LW = 120

LW = 60

So the product of the sides — which is exactly the area — is 60. To find the individual sides, use L + W = 17 and LW = 60. These are the sum and product of the roots of the quadratic:

x² - 17x + 60 = 0

Factoring: (x - 5)(x - 12) = 0, giving x = 5 or x = 12.

**Identify the longer side.** The two sides are 5 cm and 12 cm; the longer side is L = 12 cm.

**State the area.** The area is L * W = 12 * 5 = 60 cm², consistent with LW = 60 derived above.

**Verification.** Perimeter: 2(12 + 5) = 2(17) = 34 cm. Diagonal: sqrt(12² + 5²) = sqrt(144 + 25) = sqrt(169) = 13 cm. Both conditions hold.

**Matching candidate values.** The candidates are 5 cm, 12 cm, 13 cm, 60 cm², and 72 cm². The longer side 12 cm and the area 60 cm² both appear. The value 5 cm is the shorter side (a trap), and 13 cm is the diagonal (another trap); neither is the longer side.

The correct answers are Longer Side = 12 cm and Area = 60 cm².
**related_reading:** reading-di-06-two-part-analysis

---

## Q64
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Cause and Effect

A regional manager concludes: "Stores that adopted the new self-checkout kiosks processed customers 15% faster on average than stores without them. Therefore, the kiosks are the reason for the faster checkout times, and we should install them chainwide."

From the options below, identify a statement that, if true, would provide an alternative explanation for the faster times (row 1), and a statement that, if true, would most directly support the conclusion (row 2).

| Statement                                                                                  | Alt Explanation | Support |
|--------------------------------------------------------------------------------------------|-----------------|---------|
| The stores that adopted the kiosks are mostly in low-traffic suburbs with shorter lines    |                 |         |
| When ten matched stores added kiosks, their checkout times dropped 14% the following month  |                 |         |
| The kiosks display advertisements while customers scan items                               |                 |         |
| The chain employs the same number of cashiers at every store                               |                 |         |
| Self-checkout kiosks are popular with younger shoppers                                      |                 |         |

**answer:** Alt Explanation = "The stores that adopted the kiosks are mostly in low-traffic suburbs with shorter lines", Support = "When ten matched stores added kiosks, their checkout times dropped 14% the following month"
**fastest_path:** A makes store traffic a confounder; B compares matched stores before and after installing the kiosks.
**explanation:** Choose A for Alternative Explanation. Kiosk stores are mainly in low-traffic suburbs, where shorter lines could produce faster processing even without kiosks. Choose B for Support. Ten matched stores improved by 14% after adding kiosks, closely reproducing the reported effect while controlling store comparability. Advertising, equal cashier counts, and popularity among younger shoppers do not isolate the cause of checkout speed.
**common_trap:** Treating equal cashier staffing as enough to control for the major difference in customer traffic.
**takeaway:** A confounder explains both adoption and outcome; matched before-and-after evidence more directly tests the intervention.
**related_reading:** reading-di-06-two-part-analysis

---

## Q65
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations

A school fundraiser sold notebooks at $4 each and pens at $1.50 each. The fundraiser sold 90 items in total and collected $260 in revenue. Determine the number of notebooks sold (row 1) and the number of pens sold (row 2).

|     | Notebooks | Pens |
|-----|-----------|------|
| 30  |           |      |
| 40  |           |      |
| 50  |           |      |
| 60  |           |      |
| 70  |           |      |

**answer:** Notebooks = 50, Pens = 40
**explanation:** **Governing principle.** A system of two linear equations in two unknowns is solved by expressing one variable in terms of the other and substituting.

**Define variables.** Let n be the number of notebooks sold and p be the number of pens sold.

**Translate into equations.**

Total items sold is 90:

n + p = 90   ... (1)

Total revenue is $260, with notebooks at $4 and pens at $1.50:

4n + 1.5p = 260   ... (2)

**Solve by substitution.** From equation (1), p = 90 - n. Substitute into equation (2):

4n + 1.5(90 - n) = 260

4n + 135 - 1.5n = 260

2.5n = 260 - 135

2.5n = 125

n = 125 / 2.5 = 50

**Back-substitute.** p = 90 - 50 = 40.

**Verification.** Item count: 50 + 40 = 90. Revenue: 4(50) + 1.5(40) = 200 + 60 = 260. Both conditions hold.

**Matching candidate values.** The candidates are 30, 40, 50, 60, and 70. The solution n = 50 and p = 40 both appear among them. Checking a distractor: if notebooks = 60, then pens = 30 and revenue = 4(60) + 1.5(30) = 240 + 45 = 285, which exceeds the target; if notebooks = 40, then pens = 50 and revenue = 4(40) + 1.5(50) = 160 + 75 = 235, which falls short. Only n = 50 works.

The correct answers are Notebooks = 50 and Pens = 40.
**related_reading:** reading-di-06-two-part-analysis

---

## Q66
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mixture

A nut vendor blends cashews costing $12 per pound with peanuts costing $4 per pound to make 40 pounds of a mix that costs $7 per pound. Determine the pounds of cashews (row 1) and the pounds of peanuts (row 2) required.

|        | Cashews | Peanuts |
|--------|---------|---------|
| 10 lb  |         |         |
| 15 lb  |         |         |
| 20 lb  |         |         |
| 25 lb  |         |         |
| 30 lb  |         |         |

**answer:** Cashews = 15 lb, Peanuts = 25 lb
**explanation:** **Governing principle.** In a mixture problem, two constraints must hold simultaneously: the component weights sum to the total weight, and the dollar cost contributed by each component sums to the blend's total cost.

**Define variables.** Let c = pounds of cashews and p = pounds of peanuts.

**Translate into equations.**

Total weight: c + p = 40.

The blend's total cost is 7 * 40 = $280, so the cost equation is 12c + 4p = 280.

**Solve the system.** From the weight equation, p = 40 - c. Substitute into the cost equation:

12c + 4(40 - c) = 280

12c + 160 - 4c = 280

8c = 120

c = 15

Then p = 40 - 15 = 25.

**Verification.** Weight: 15 + 25 = 40. Cost: 12(15) + 4(25) = 180 + 100 = 280, and 280 / 40 = $7 per pound. Both conditions are satisfied.

**Matching candidate values.** The candidates are 10, 15, 20, 25, and 30 lb. The solution c = 15 and p = 25 both appear. Any other pairing fails the cost equation: for instance, c = 20 with p = 20 gives 12(20) + 4(20) = 240 + 80 = 320, which is too high.

The correct answers are Cashews = 15 lb and Peanuts = 25 lb.
**related_reading:** reading-di-06-two-part-analysis

---

## Q67
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Rate Problem

A landscaping crew has two mowers. Mower A can cut a field in 3 hours. Mower B can cut the same field in 6 hours. If both mowers work together on a single field, the total time is T hours. If only Mower B works, the time is S hours.

Select the value of T (row 1) and the value of S (row 2).

|        | T (both) | S (B only) |
|--------|----------|------------|
| 1.5 hrs |         |            |
| 2.0 hrs |         |            |
| 2.5 hrs |         |            |
| 4.5 hrs |         |            |
| 6.0 hrs |         |            |

**answer:** T = 2.0 hrs, S = 6.0 hrs
**explanation:** **The combined-work principle.** When two agents work simultaneously on the same task, their rates add. The time to finish equals the total work divided by the combined rate.

**Setting up the rates.** Let one field equal 1 unit of work.

- Mower A cuts the field in 3 hours, so its rate is 1/3 field per hour.
- Mower B cuts the field in 6 hours, so its rate is 1/6 field per hour.

**Solving for T (both mowers).** The combined rate is 1/3 + 1/6. Using a common denominator of 6: 1/3 = 2/6, so 2/6 + 1/6 = 3/6 = 1/2 field per hour. Therefore:

T = 1 / (1/2) = 2 hours

**Solving for S (Mower B alone).** Mower B's rate is 1/6 field per hour, so:

S = 1 / (1/6) = 6 hours

This matches the prompt's direct statement that Mower B alone takes 6 hours.

**Matching candidate values.** The candidates are 1.5, 2.0, 2.5, 4.5, and 6.0 hours. T = 2.0 and S = 6.0 both appear. No other candidate satisfies either equation: 1.5 hrs would imply a combined rate of 2/3, which exceeds 1/2.

The correct answers are T (both) = 2.0 hrs and S (B only) = 6.0 hrs.
**related_reading:** reading-di-06-two-part-analysis

---

## Q68
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Distance/Rate

A cyclist and a runner start at the same point and travel in opposite directions along a straight path. The cyclist rides at 18 km/h and the runner moves at 6 km/h. They start at the same time. Determine the distance the cyclist has traveled when they are 72 km apart (row 1), and the time elapsed at that moment (row 2).

|         | Cyclist Distance | Time Apart |
|---------|------------------|------------|
| 18 km   |                  |            |
| 36 km   |                  |            |
| 54 km   |                  |            |
| 3 hours |                  |            |
| 4 hours |                  |            |
| 6 hours |                  |            |

**answer:** Cyclist Distance = 54 km, Time Apart = 3 hours
**explanation:** **Governing principle.** When two objects move in opposite directions from the same starting point, the distance between them grows at a rate equal to the sum of their speeds. The time to reach a given separation equals that separation divided by the combined speed.

**Variable definitions.** Let t be the time (in hours) elapsed when the two are 72 km apart, and let d_c be the distance the cyclist has covered at that moment.

**Setting up the equation.** The combined separation speed is 18 + 6 = 24 km/h. The gap reaches 72 km when:

24 * t = 72

**Solving for t.**

t = 72 / 24 = 3 hours

**Solving for d_c.** Using distance = rate * time:

d_c = 18 * 3 = 54 km

**Verification.** In 3 hours the runner covers 6 * 3 = 18 km. The total separation is 54 + 18 = 72 km, matching the target.

**Matching candidate values.** The "Cyclist Distance" candidates are 18, 36, and 54 km. Only 54 km equals 18 * 3. The value 18 km is the runner's distance (a trap). The "Time Apart" candidates are 3, 4, and 6 hours; only 3 hours satisfies 24t = 72. At t = 4, the gap would be 96 km, exceeding 72.

The correct answers are Cyclist Distance = 54 km and Time Apart = 3 hours.
**related_reading:** reading-di-06-two-part-analysis

---

## Q69
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Capacity Constraint

A workshop builds two items. A chair sells for $40 and requires 1.5 labor-hours; a table sells for $90 and requires 4 labor-hours. The workshop operates daily at exactly 200 labor-hours of capacity and earns exactly $5,000 in daily revenue. Determine the daily output of chairs (row 1) and tables (row 2).

|     | Chairs | Tables |
|-----|--------|--------|
| 20  |        |        |
| 30  |        |        |
| 40  |        |        |
| 50  |        |        |
| 80  |        |        |

**answer:** Chairs = 80, Tables = 20
**explanation:** **Setup.** This is a system of two simultaneous linear equations. Let x denote daily chairs and y denote daily tables.

**Translate the constraints.**

Labor-hours: 1.5x + 4y = 200   ... (1)

Revenue: 40x + 90y = 5000   ... (2)

**Solve the system.** Multiply equation (1) by 2 to clear the decimal:

3x + 8y = 400   ... (1')

Divide equation (2) by 10:

4x + 9y = 500   ... (2')

Eliminate x. Multiply (1') by 4 and (2') by 3:

12x + 32y = 1600   ... (1'')

12x + 27y = 1500   ... (2'')

Subtract (2'') from (1''):

5y = 100

y = 20

Substitute y = 20 into (2'): 4x + 9(20) = 500, so 4x + 180 = 500, giving 4x = 320 and x = 80.

**Verification.** Labor: 1.5(80) + 4(20) = 120 + 80 = 200. Revenue: 40(80) + 90(20) = 3200 + 1800 = 5000. Both constraints hold exactly.

**Matching candidate values.** The candidates are 20, 30, 40, 50, and 80. The solution x = 80 (chairs) and y = 20 (tables) both appear. No other combination of listed values satisfies both equations.

The correct answers are Chairs = 80 and Tables = 20.
**related_reading:** reading-di-06-two-part-analysis

---

## Q70
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Linear Pricing

A car rental company charges a flat daily fee F plus a per-mile charge M. A customer who drove 100 miles in one day paid $85; a customer who drove 250 miles in one day paid $130. Determine the daily fee F (row 1) and the per-mile charge M (row 2).

|        | Daily fee F | Per-mile charge M |
|--------|-------------|-------------------|
| $0.30  |             |                   |
| $0.45  |             |                   |
| $40    |             |                   |
| $55    |             |                   |
| $70    |             |                   |

**answer:** Daily fee F = $55, Per-mile charge M = $0.30
**explanation:** **Setup.** Each bill equals a flat daily fee F plus a per-mile charge M times the miles driven. Translating the two records:

- Customer 1: F + 100M = 85
- Customer 2: F + 250M = 130

**Solve for M.** Subtract the first equation from the second to eliminate F:

(F + 250M) - (F + 100M) = 130 - 85

150M = 45

M = 45 / 150 = 0.30

**Solve for F.** Substitute M = 0.30 into the first equation:

F + 100(0.30) = 85

F + 30 = 85

F = 55

**Verification.** Customer 2: 55 + 250(0.30) = 55 + 75 = 130. Both records are satisfied.

**Matching candidate values.** The candidate list mixes both columns: $0.30, $0.45, $40, $55, and $70. F = $55 and M = $0.30 both appear. No other pairing satisfies both equations.

The correct answers are Daily fee F = $55 and Per-mile charge M = $0.30.
**related_reading:** reading-di-06-two-part-analysis

---

## Q71
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Rate Problem

A reservoir is fed by two inlet pipes and drained by one outlet. Inlet A alone fills it in 5 hours. Inlet B alone fills it in 10 hours. The outlet, when open, empties a full reservoir in 20 hours. If all three are opened on an empty reservoir, the time to fill is T hours. If only Inlet B and the outlet are open on an empty reservoir, the time to fill is U hours.

Select the value of T (row 1) and the value of U (row 2).

|          | T (all three) | U (B + outlet) |
|----------|---------------|----------------|
| 2.0 hrs  |               |                |
| 4.0 hrs  |               |                |
| 5.0 hrs  |               |                |
| 10.0 hrs |               |                |
| 20.0 hrs |               |                |

**answer:** T = 4.0 hrs, U = 20.0 hrs
**explanation:** **Work-rate method.** A pipe that fills a full reservoir in n hours has rate 1/n per hour; an outlet that empties a full reservoir in n hours contributes -1/n per hour. The net rate is the algebraic sum of the individual rates, and the fill time equals 1 divided by the net rate.

**Setting up rates.** Let one full reservoir equal 1.

- Inlet A: 1/5 per hour.
- Inlet B: 1/10 per hour.
- Outlet: -1/20 per hour.

**Finding T (all three open).** The net rate is:

1/5 + 1/10 - 1/20

Use a common denominator of 20: 1/5 = 4/20, 1/10 = 2/20, 1/20 = 1/20.

Net rate = 4/20 + 2/20 - 1/20 = 5/20 = 1/4 per hour.

T = 1 / (1/4) = 4 hours.

**Finding U (Inlet B and outlet only).** With Inlet A closed:

1/10 - 1/20 = 2/20 - 1/20 = 1/20 per hour.

U = 1 / (1/20) = 20 hours.

This has an intuitive reading: Inlet B fills at twice the rate the outlet empties (1/10 vs 1/20), so the effective fill rate equals exactly the outlet's standalone rate, giving a fill time equal to the outlet's 20-hour emptying time.

**Matching candidate values.** The candidates are 2.0, 4.0, 5.0, 10.0, and 20.0 hours. T = 4.0 and U = 20.0 both appear. The value 5.0 hrs corresponds to Inlet A alone, and 10.0 hrs to Inlet B alone — neither matches the combined scenarios.

The correct answers are T (all three) = 4.0 hrs and U (B + outlet) = 20.0 hrs.
**related_reading:** reading-di-06-two-part-analysis

---

## Q72
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "Our company switched to a four-day work week in January. By December, employee turnover had fallen by 20%. Therefore, the four-day week reduced turnover at our company."

From the statements below, identify the conclusion of the argument (row 1) and the central unstated assumption required for the argument to hold (row 2).

| Statement                                                                          | Conclusion | Assumption |
|------------------------------------------------------------------------------------|------------|------------|
| The four-day work week reduced turnover at our company                              |            |            |
| No other factor materially contributed to the observed drop in turnover            |            |            |
| Employee turnover fell by 20% over the year                                         |            |            |
| The company switched to a four-day work week in January                            |            |            |
| A four-day work week always reduces turnover at every company                       |            |            |

**answer:** Conclusion = "The four-day work week reduced turnover at our company", Assumption = "No other factor materially contributed to the observed drop in turnover"
**fastest_path:** A is the causal conclusion; B is required to attribute the turnover decline to the schedule change.
**explanation:** Choose A for Conclusion: the argument claims that the four-day work week reduced turnover. Choose B for Assumption. A before-and-after pattern supports that claim only if no other material change caused the 20% decline during the year. C and D are stated observations, while E is an unnecessary universal claim about every company.
**common_trap:** Selecting a premise as the conclusion or assuming the author needs an 'always' rule.
**takeaway:** A before-and-after causal claim minimally assumes that no competing change materially produced the observed result.
**related_reading:** reading-di-06-two-part-analysis

---

## Q73
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Strengthening and Weakening

A nutritionist argues: "People who drink green tea daily have lower rates of heart disease than people who do not. Therefore, drinking green tea daily lowers the risk of heart disease."

From the statements below, identify one that would most strengthen the argument (row 1) and one that would most weaken it by offering an alternative explanation (row 2).

| Statement                                                                                              | Strengthens | Weakens (alt cause) |
|--------------------------------------------------------------------------------------------------------|-------------|---------------------|
| In a randomized trial, participants assigned to drink green tea daily had 18% fewer cardiac events than the control group |             |                     |
| People who drink green tea daily also tend to exercise more and eat more vegetables                     |             |                     |
| Green tea has a pleasant taste preferred by many consumers                                              |             |                     |
| Green tea is sold in most grocery stores                                                                |             |                     |
| Heart disease rates have declined nationwide over the past decade                                       |             |                     |

**answer:** Strengthens = "In a randomized trial, participants assigned to drink green tea daily had 18% fewer cardiac events than the control group", Weakens = "People who drink green tea daily also tend to exercise more and eat more vegetables"
**fastest_path:** A randomizes green-tea exposure; B identifies exercise and diet as competing health causes.
**explanation:** Choose A for Strengthens. Random assignment and a control group make green-tea consumption the main systematic difference, and the treatment group has fewer cardiac events. Choose B for Weakens: daily tea drinkers also exercise more and eat more vegetables, either of which could explain their lower heart-disease rate. Taste, availability, and a nationwide decline do not isolate why tea drinkers differ from non-drinkers.
**common_trap:** Treating a nationwide trend as the strongest alternative when it would affect both tea drinkers and non-drinkers.
**takeaway:** Randomized outcomes support causation; lifestyle differences correlated with exposure create confounding.
**related_reading:** reading-di-06-two-part-analysis

---

## Q74
**difficulty:** Easy
**type:** Two-Part Analysis
**topic:** Quantitative — Investment

An investor splits $40,000 between two accounts. The Growth account earns 9% annually and the Stable account earns 4% annually. The total annual interest earned is $2,600. Determine the amount in the Growth account (row 1) and the amount in the Stable account (row 2).

|         | Growth | Stable |
|---------|--------|--------|
| $10,000 |        |        |
| $15,000 |        |        |
| $20,000 |        |        |
| $25,000 |        |        |
| $30,000 |        |        |

**answer:** Growth = $20,000, Stable = $20,000
**explanation:** **Setup.** Let x be the amount in the Growth account; then 40,000 - x is the amount in the Stable account. Two conditions must hold: the allocations sum to $40,000 (true by construction) and the interest equation must hold.

**Interest constraint.**

0.09x + 0.04(40,000 - x) = 2,600

**Solve.** Expand the left side:

0.09x + 1,600 - 0.04x = 2,600

0.05x + 1,600 = 2,600

0.05x = 1,000

x = 1,000 / 0.05 = 20,000

**Find the Stable amount.** 40,000 - 20,000 = 20,000.

**Verification.** 0.09(20,000) + 0.04(20,000) = 1,800 + 800 = 2,600. Correct.

**Matching candidate values.** The candidates are $10,000, $15,000, $20,000, $25,000, and $30,000. Growth = $20,000 and Stable = $20,000 both appear. Checking a distractor: if Growth = $30,000, then Stable = $10,000 and interest = 0.09(30,000) + 0.04(10,000) = 2,700 + 400 = 3,100, which exceeds the target.

The correct answers are Growth = $20,000 and Stable = $20,000.
**related_reading:** reading-di-06-two-part-analysis

---

## Q75
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry

A rectangle has a perimeter of 46 cm and an area of 120 cm². Determine the length of the longer side (row 1) and the length of the shorter side (row 2).

|       | Longer Side | Shorter Side |
|-------|-------------|--------------|
| 6 cm  |             |              |
| 8 cm  |             |              |
| 12 cm |             |              |
| 15 cm |             |              |
| 20 cm |             |              |

**answer:** Longer Side = 15 cm, Shorter Side = 8 cm
**explanation:** **Governing principle.** For a rectangle with sides L and W, the perimeter is 2(L + W) and the area is LW. Knowing the sum and product of the two sides determines them as the roots of a quadratic.

**Define variables.** Let L be the longer side and W the shorter side.

**Translate into equations.**

Perimeter: 2(L + W) = 46, so L + W = 23.

Area: LW = 120.

**Solve the system.** L and W are the roots of the quadratic with sum 23 and product 120:

x² - 23x + 120 = 0

Factor: we need two numbers that multiply to 120 and add to 23. Those are 8 and 15, since 8 * 15 = 120 and 8 + 15 = 23. So:

(x - 8)(x - 15) = 0

giving x = 8 or x = 15.

**Identify the sides.** The longer side is L = 15 cm and the shorter side is W = 8 cm.

**Verification.** Perimeter: 2(15 + 8) = 2(23) = 46 cm. Area: 15 * 8 = 120 cm². Both conditions hold.

**Matching candidate values.** The candidates are 6, 8, 12, 15, and 20 cm. The longer side 15 cm and the shorter side 8 cm both appear. The pair (12, 20) multiplies to 240 and sums to 32 — neither matches; the pair (6, 20) fails as well. Only (15, 8) satisfies both constraints.

The correct answers are Longer Side = 15 cm and Shorter Side = 8 cm.
**related_reading:** reading-di-06-two-part-analysis


---

## Q76
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Digit Properties

A two-digit positive integer has digits that sum to 11. When the digits are reversed, the resulting number is 27 greater than the original. Determine the tens digit of the original number (row 1) and the units digit of the original number (row 2).

|   | Tens digit | Units digit |
|---|------------|-------------|
| 2 |            |             |
| 3 |            |             |
| 4 |            |             |
| 5 |            |             |
| 7 |            |             |
| 8 |            |             |

**answer:** Tens digit = 4, Units digit = 7
**explanation:** **Governing principle.** A two-digit number with tens digit t and units digit u has the value 10t + u. Reversing the digits produces 10u + t. Each verbal condition translates into one linear equation, and the two equations are solved simultaneously.

**Define variables.** Let t be the tens digit and u be the units digit of the original number, where t and u are integers with 1 ≤ t ≤ 9 and 0 ≤ u ≤ 9.

**Translate the conditions into equations.**

The digits sum to 11:

t + u = 11   ... (1)

The reversed number exceeds the original by 27:

(10u + t) - (10t + u) = 27

Simplifying the left side: 10u + t - 10t - u = 9u - 9t. The condition becomes:

9u - 9t = 27

Dividing both sides by 9:

u - t = 3   ... (2)

**Solve the system.** Adding equations (1) and (2):

(t + u) + (u - t) = 11 + 3

2u = 14

u = 7

Substituting u = 7 into equation (1): t + 7 = 11, so t = 4.

**Identify the number.** The original number is 10(4) + 7 = 47.

**Verification.** Digit sum: 4 + 7 = 11. Correct. Reversed number: 74, and 74 - 47 = 27. Correct.

**Matching candidate values.** The candidate list is 2, 3, 4, 5, 7, and 8. The tens digit 4 and the units digit 7 both appear among the candidates. No other pairing from the list satisfies both equations: for instance, tens 5 with units 7 would sum to 12, and tens 3 with units 8 would give a reversal difference of 9(8) - 9(3) = 45, not 27.

The correct answers are Tens digit = 4 and Units digit = 7.
**related_reading:** reading-di-06-two-part-analysis

---

## Q77
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Boats and Streams

A boat travels 36 km downstream in 2 hours and the same 36 km upstream in 3 hours. The boat's speed in still water and the current's speed are both constant. Determine the boat's speed in still water (row 1) and the speed of the current (row 2).

|          | Boat speed (still water) | Current speed |
|----------|--------------------------|---------------|
| 3 km/h   |                          |               |
| 6 km/h   |                          |               |
| 9 km/h   |                          |               |
| 12 km/h  |                          |               |
| 15 km/h  |                          |               |
| 18 km/h  |                          |               |

**answer:** Boat speed = 15 km/h, Current speed = 3 km/h
**explanation:** **Governing principle.** When a boat moves downstream, the current aids it, so the effective speed is the sum of the boat's still-water speed and the current's speed. When it moves upstream, the current opposes it, so the effective speed is the difference. Each effective speed equals distance divided by time.

**Define variables.** Let b be the boat's speed in still water (km/h) and c be the speed of the current (km/h).

**Compute the two effective speeds.**

Downstream: the boat covers 36 km in 2 hours, so the downstream speed is 36 / 2 = 18 km/h. This gives:

b + c = 18   ... (1)

Upstream: the boat covers 36 km in 3 hours, so the upstream speed is 36 / 3 = 12 km/h. This gives:

b - c = 12   ... (2)

**Solve the system.** Adding equations (1) and (2) eliminates c:

(b + c) + (b - c) = 18 + 12

2b = 30

b = 15

Substituting b = 15 into equation (1): 15 + c = 18, so c = 3.

**Verification.** Downstream effective speed: 15 + 3 = 18 km/h, and 18 × 2 = 36 km. Upstream effective speed: 15 - 3 = 12 km/h, and 12 × 3 = 36 km. Both trips check out.

**Matching candidate values.** The candidate list is 3, 6, 9, 12, 15, and 18 km/h. The boat speed 15 km/h and current speed 3 km/h both appear among the candidates. No other pair from the list satisfies both equations: for example, boat 12 with current 6 would give a downstream speed of 18 but an upstream speed of only 6, requiring 6 hours upstream rather than 3.

The correct answers are Boat speed = 15 km/h and Current speed = 3 km/h.
**related_reading:** reading-di-06-two-part-analysis

---

## Q78
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Work with Partial Participation

Machine A can complete a production order alone in 12 days, and Machine B can complete the same order alone in 24 days. Both machines start the order together. After some whole number of days, Machine A is taken offline for maintenance, and Machine B continues alone until the order is finished. From start to finish, Machine B runs for a total of 16 days. Determine the number of days Machine A worked (row 1) and the fraction of the order completed by Machine B (row 2).

|       | Days A worked | Fraction done by B |
|-------|---------------|--------------------|
| 2     |               |                    |
| 4     |               |                    |
| 6     |               |                    |
| 1/3   |               |                    |
| 1/2   |               |                    |
| 2/3   |               |                    |

**answer:** Days A worked = 4, Fraction done by B = 2/3
**fastest_path:** Compute B's contribution first: 16/24 = 2/3 of the order. A must complete the remaining 1/3, which takes 4 days at 1/12 per day.
**explanation:** Machine B runs for 16 days at 1/24 of the order per day, so B completes 16/24 = 2/3. The remaining 1/3 is completed by A. At A's rate of 1/12 per day, the required time is (1/3)/(1/12) = 4 days. Select 4 for A's working time and 2/3 for B's fraction.
**common_trap:** The 1/3 fraction belongs to Machine A, not B. Also, B's 16 days include the days when both machines were running.
**takeaway:** In work problems, total contribution equals rate times time; solve the known worker's contribution before finding the remainder.
**related_reading:** reading-di-06-two-part-analysis

---

## Q79
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Weighted Average

A class of 30 students consists only of boys and girls. The boys scored an average of 70 on an exam, the girls scored an average of 85, and the class as a whole averaged 76. Determine the number of boys (row 1) and the number of girls (row 2).

|     | Number of boys | Number of girls |
|-----|----------------|-----------------|
| 10  |                |                 |
| 12  |                |                 |
| 15  |                |                 |
| 18  |                |                 |
| 20  |                |                 |

**answer:** Number of boys = 18, Number of girls = 12
**explanation:** **Governing principle.** The overall average of a group equals the total of all scores divided by the number of members. For two subgroups, the sum of each subgroup's total (count multiplied by its average) equals the whole group's total (count multiplied by its average). This yields a weighted-average equation that pairs with the head-count equation.

**Define variables.** Let b be the number of boys and g be the number of girls.

**Translate into equations.**

Head count: the class has 30 students:

b + g = 30   ... (1)

Total score balance: boys' total plus girls' total equals the class total. The class total is 76 × 30 = 2,280:

70b + 85g = 2,280   ... (2)

**Solve the system.** From equation (1), g = 30 - b. Substituting into equation (2):

70b + 85(30 - b) = 2,280

70b + 2,550 - 85b = 2,280

-15b + 2,550 = 2,280

-15b = -270

b = 18

Then g = 30 - 18 = 12.

**Verification.** Boys' total: 70 × 18 = 1,260. Girls' total: 85 × 12 = 1,020. Combined total: 1,260 + 1,020 = 2,280, and 2,280 / 30 = 76, matching the class average. Both conditions hold.

**Matching candidate values.** The candidate list is 10, 12, 15, 18, and 20. The number of boys, 18, and the number of girls, 12, both appear. As a check on the alligation logic, the class average 76 lies closer to the boys' average 70 than to the girls' 85, so boys should outnumber girls — consistent with 18 versus 12. No other pairing from the list satisfies equation (2): for instance, 15 boys and 15 girls would give 70(15) + 85(15) = 2,325, exceeding 2,280.

The correct answers are Number of boys = 18 and Number of girls = 12.
**related_reading:** reading-di-06-two-part-analysis

---

## Q80
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Successive Percentage Change

A retailer purchases an item for $200. It marks the item up by 40% over cost to set the list price, then advertises a sale at 25% off the list price. The item sells at the sale price. Determine the list price (row 1) and the final sale price (row 2).

|       | List price | Sale price |
|-------|------------|------------|
| $150  |            |            |
| $210  |            |            |
| $240  |            |            |
| $250  |            |            |
| $280  |            |            |
| $300  |            |            |

**answer:** List price = $280, Sale price = $210
**explanation:** **Governing principle.** Successive percentage changes are applied multiplicatively, each to the running result rather than to the original base. A markup of p% multiplies the amount by (1 + p/100); a discount of d% multiplies the amount by (1 - d/100).

**Define the base.** The cost to the retailer is $200.

**Apply the markup to find the list price.** A 40% markup over cost multiplies the cost by 1.40:

List price = 200 × 1.40 = 280

The list price is therefore $280.

**Apply the discount to find the sale price.** A 25% discount off the list price multiplies the list price by (1 - 0.25) = 0.75:

Sale price = 280 × 0.75 = 210

The sale price is therefore $210.

**Verification.** A 25% discount removes 0.25 × 280 = $70 from the $280 list price, leaving 280 - 70 = $210, which matches. Note that the retailer still profits: $210 sale price exceeds the $200 cost by $10, so the combined markup-then-discount nets a 5% gain over cost. This confirms the order of operations was applied correctly — applying the 25% discount to the cost instead of the list price would have produced an incorrect figure.

**Matching candidate values.** The candidate list is $150, $210, $240, $250, $280, and $300. The list price $280 and the sale price $210 both appear among the candidates. A common error is to treat the markup and discount as if they simply net out — "40% up then 25% down equals 15% up" — and compute 200 × 1.15 = $230; the candidate $240 sits near that mistaken figure to catch it. The percentages do not combine additively, however: applying them multiplicatively (200 × 1.40 × 0.75) gives the correct $210, not $230.

The correct answers are List price = $280 and Sale price = $210.
**related_reading:** reading-di-06-two-part-analysis

---

## Q81
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "Since the regional hospital adopted an electronic prescribing system last year, the number of medication errors reported by its pharmacy has fallen by 22%. Electronic prescribing eliminates handwriting ambiguity, which has long been a source of dispensing mistakes. Therefore, the new system is responsible for the decline in medication errors."

From the statements below, identify the main conclusion of the argument (row 1) and the central unstated assumption on which the argument depends (row 2).

| Statement                                                                                          | Conclusion | Assumption |
|----------------------------------------------------------------------------------------------------|------------|------------|
| Electronic prescribing eliminates handwriting ambiguity                                            |            |            |
| The new system is responsible for the decline in medication errors                                 |            |            |
| Reported medication errors fell by 22% after the system was adopted                                |            |            |
| No other change at the hospital materially contributed to the decline in reported errors           |            |            |
| Electronic prescribing systems are now standard across most regional hospitals                     |            |            |

**answer:** Conclusion = "The new system is responsible for the decline in medication errors"; Assumption = "No other change at the hospital materially contributed to the decline in reported errors"
**fastest_path:** B is the causal claim being defended; D is the no-competing-change assumption needed to attribute the decline to the system.
**explanation:** Choose B for Conclusion. The first two statements supply timing and a plausible mechanism; the author ultimately claims the new system caused the decline. Choose D for Assumption. If another hospital change materially reduced errors during the same year, the 22% drop could not be attributed to electronic prescribing from these facts alone. A and C are premises, and E is background that the argument does not require.
**common_trap:** Mistaking the mechanism or the reported decline for the author's main causal conclusion.
**takeaway:** In a causal argument, distinguish premises from the attribution claim and test whether a concurrent cause was silently excluded.
**related_reading:** reading-di-06-two-part-analysis

---

## Q82
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Geometry

A right triangle has a perimeter of 24 cm and an area of 24 cm². Determine the length of the longer leg (row 1) and the length of the hypotenuse (row 2).

|       | Longer leg | Hypotenuse |
|-------|------------|------------|
| 6 cm  |            |            |
| 8 cm  |            |            |
| 10 cm |            |            |
| 12 cm |            |            |
| 16 cm |            |            |

**answer:** Longer leg = 8 cm, Hypotenuse = 10 cm
**explanation:** **Governing principle.** For a right triangle with legs a and b and hypotenuse c, three relationships hold: the area equals (1/2)ab, the perimeter equals a + b + c, and the Pythagorean theorem gives a² + b² = c². Combining these constraints determines the side lengths.

**Define variables.** Let a and b be the two legs and c the hypotenuse, with a + b + c = 24 and (1/2)ab = 24.

**Extract the leg relationships.**

From the area: (1/2)ab = 24, so ab = 48.

From the perimeter: a + b + c = 24, so c = 24 - (a + b). Let s = a + b. Then c = 24 - s.

**Apply the Pythagorean theorem.** Substitute c = 24 - s into a² + b² = c². Note that a² + b² = (a + b)² - 2ab = s² - 2(48) = s² - 96. Therefore:

s² - 96 = (24 - s)²

Expanding the right side:

s² - 96 = 576 - 48s + s²

Subtracting s² from both sides:

-96 = 576 - 48s

48s = 576 + 96 = 672

s = 14

So a + b = 14. Combined with ab = 48, the legs are the roots of x² - 14x + 48 = 0, which factors as (x - 6)(x - 8) = 0, giving legs 6 and 8.

**Determine the hypotenuse.** c = 24 - s = 24 - 14 = 10.

**Identify the requested values.** The longer leg is 8 cm, and the hypotenuse is 10 cm. (This is the classic 6-8-10 right triangle, a scaled 3-4-5.)

**Verification.** Perimeter: 6 + 8 + 10 = 24 cm. Area: (1/2)(6)(8) = 24 cm². Pythagoras: 6² + 8² = 36 + 64 = 100 = 10². All three conditions hold.

**Matching candidate values.** The candidate list is 6, 8, 10, 12, and 16 cm. The longer leg 8 cm and the hypotenuse 10 cm both appear. The value 6 cm is the shorter leg, not the requested longer leg, and serves as a distractor.

The correct answers are Longer leg = 8 cm and Hypotenuse = 10 cm.
**related_reading:** reading-di-06-two-part-analysis

---

## Q83
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Consecutive Integers

Four consecutive integers have a sum of 90. Determine the smallest of the four integers (row 1) and the largest of the four integers (row 2).

|    | Smallest | Largest |
|----|----------|---------|
| 18 |          |         |
| 20 |          |         |
| 21 |          |         |
| 22 |          |         |
| 24 |          |         |

**answer:** Smallest = 21, Largest = 24
**explanation:** **Governing principle.** Consecutive integers differ by 1. A set of consecutive integers can be represented by a single variable plus successive offsets, so their sum becomes a linear equation in that variable.

**Define variables.** Let n be the smallest of the four consecutive integers. The four integers are then n, n + 1, n + 2, and n + 3.

**Translate into an equation.** The sum of the four integers is 90:

n + (n + 1) + (n + 2) + (n + 3) = 90

Combining like terms:

4n + 6 = 90

**Solve.** Subtracting 6 from both sides:

4n = 84

n = 21

The smallest integer is therefore 21, and the four integers are 21, 22, 23, and 24. The largest is 24.

**Verification.** 21 + 22 + 23 + 24 = 90. The four values are consecutive integers, and their sum matches the given total.

**Matching candidate values.** The candidate list is 18, 20, 21, 22, and 24. The smallest, 21, and the largest, 24, both appear. The values 22 and 20 are interior or off-by-one distractors: 22 is the second integer in the set, not the smallest, and 20 would force the set 20-21-22-23, which sums to 86, not 90.

The correct answers are Smallest = 21 and Largest = 24.
**related_reading:** reading-di-06-two-part-analysis

---

## Q84
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Cause and Effect / Strengthening and Weakening

A nutrition company argues: "In a survey of our customers, those who took our daily multivitamin reported 30% fewer sick days over the past year than those who did not. Therefore, our multivitamin reduces the number of sick days people experience."

From the statements below, identify one that would most strengthen the argument (row 1) and one that would most weaken it by offering an alternative explanation (row 2).

| Statement                                                                                              | Strengthens | Weakens (alt cause) |
|--------------------------------------------------------------------------------------------------------|-------------|---------------------|
| In a randomized double-blind trial, participants given the multivitamin had 28% fewer sick days than a placebo group |             |                     |
| Customers who take the daily multivitamin are also far more likely to exercise regularly and sleep eight hours a night |             |                     |
| The multivitamin contains the full recommended daily allowance of vitamins C and D                     |             |                     |
| The multivitamin is the company's best-selling product                                                 |             |                     |
| Customers who buy the multivitamin tend to renew their subscriptions                                    |             |                     |

**answer:** Strengthens = "In a randomized double-blind trial, participants given the multivitamin had 28% fewer sick days than a placebo group"; Weakens = "Customers who take the daily multivitamin are also far more likely to exercise regularly and sleep eight hours a night"
**fastest_path:** A uses random assignment and a placebo; B identifies healthier habits that could explain both vitamin use and fewer sick days.
**explanation:** Choose A for Strengthens. A randomized double-blind placebo trial balances other health differences and finds nearly the same reduction, giving strong causal evidence. Choose B for Weakens: vitamin users also exercise more and sleep longer, either of which could reduce sick days without any vitamin effect. C states ingredients but not outcomes, while sales and subscription renewal say nothing about whether the product prevents illness.
**common_trap:** Treating the presence of familiar vitamins as proof of the product's real-world effect.
**takeaway:** Randomized placebo evidence supports causation; correlated health behaviors create confounding alternative explanations.
**related_reading:** reading-di-06-two-part-analysis

---

## Q85
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets

A market researcher surveys 120 people about two beverages. Of those surveyed, 70 say they like coffee, 60 say they like tea, and 20 say they like neither. Each respondent who likes neither likes no surveyed beverage at all. Determine the number of people who like both coffee and tea (row 1) and the number who like coffee but not tea (row 2).

|    | Like both | Coffee only |
|----|-----------|-------------|
| 10 |           |             |
| 20 |           |             |
| 30 |           |             |
| 40 |           |             |
| 50 |           |             |

**answer:** Like both = 30, Coffee only = 40
**explanation:** **Governing principle.** For two overlapping groups within a population, the inclusion-exclusion principle states that the number liking at least one item equals the number liking the first plus the number liking the second minus the number liking both. The number liking at least one also equals the total surveyed minus those liking neither.

**Define quantities.** Let the total surveyed be 120, with 70 liking coffee (C), 60 liking tea (T), and 20 liking neither. Let x be the number who like both coffee and tea.

**Find the number who like at least one beverage.** Subtract those who like neither from the total:

At least one = 120 - 20 = 100

**Apply inclusion-exclusion to find the overlap.** The inclusion-exclusion identity gives:

|C| + |T| - |both| = |at least one|

70 + 60 - x = 100

130 - x = 100

x = 30

So 30 people like both coffee and tea.

**Find the number who like coffee only.** Of the 70 coffee likers, those who also like tea number 30, so:

Coffee only = 70 - 30 = 40

**Verification.** Coffee only (40) + tea only (60 - 30 = 30) + both (30) + neither (20) = 40 + 30 + 30 + 20 = 120, matching the total surveyed. The at-least-one count is 40 + 30 + 30 = 100, consistent with 120 - 20. Both checks pass.

**Matching candidate values.** The candidate list is 10, 20, 30, 40, and 50. The number who like both, 30, and the number who like coffee only, 40, both appear. The distractor 20 is the "neither" count rather than the overlap, and 50 corresponds to no requested quantity in this configuration.

The correct answers are Like both = 30 and Coffee only = 40.
**related_reading:** reading-di-06-two-part-analysis


---

## Q86
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — System of Equations

A supplier sells two items: a premium widget at price P dollars per unit and a standard widget at price S dollars per unit. A first order of 4 premium widgets and 6 standard widgets costs $510. A second order of 7 premium widgets and 3 standard widgets costs $615. Determine the price of one premium widget P (row 1) and the price of one standard widget S (row 2).

|      | Premium price P | Standard price S |
|------|-----------------|------------------|
| $32  |                 |                  |
| $37  |                 |                  |
| $48  |                 |                  |
| $55  |                 |                  |
| $72  |                 |                  |

**answer:** P = $72, S = $37
**explanation:** **Governing principle.** Two purchases of the same two items at fixed unit prices produce a system of two linear equations in two unknowns, which has a unique solution whenever the two orders are not proportional. The system is solved by elimination.

**Define variables.** Let P be the price of one premium widget and S be the price of one standard widget, both in dollars.

**Translate the orders into equations.**

The first order — 4 premium and 6 standard widgets for $510 — gives:

4P + 6S = 510   ... (1)

The second order — 7 premium and 3 standard widgets for $615 — gives:

7P + 3S = 615   ... (2)

**Solve by elimination.** Multiply equation (2) by 2 so the S-coefficient matches that of equation (1):

14P + 6S = 1230   ... (2')

Subtract equation (1) from (2'):

(14P + 6S) - (4P + 6S) = 1230 - 510

10P = 720

P = 720 / 10 = 72

**Back-substitute to find S.** Using equation (1):

4(72) + 6S = 510

288 + 6S = 510

6S = 222

S = 222 / 6 = 37

**Verification.** Substituting both values into equation (2) confirms consistency: 7(72) + 3(37) = 504 + 111 = 615, which matches the second order exactly. Equation (1) also holds: 4(72) + 6(37) = 288 + 222 = 510.

**Matching candidate values.** The candidate list includes $72 and $37. P = 72 selects the $72 row and S = 37 selects the $37 row. No other pairing from the list satisfies both orders: for instance, P = $55 in equation (1) would force 6S = 510 - 220 = 290, giving S ≈ 48.3, which is not among the candidates and fails equation (2).

The correct answers are Premium price P = $72 and Standard price S = $37.
**related_reading:** reading-di-06-two-part-analysis

---

## Q87
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Rate Problem

A reservoir is filled by two pumps. Pump A alone fills the reservoir in 5 hours, and Pump B alone fills it in 3 hours. If both pumps run together from the start on an empty reservoir, the time to fill it is T hours. If only Pump B runs, the time to fill it is S hours.

Select the value of T (row 1) and the value of S (row 2).

|           | T (both) | S (Pump B only) |
|-----------|----------|-----------------|
| 1.5 hrs   |          |                 |
| 1.875 hrs |          |                 |
| 2.5 hrs   |          |                 |
| 3 hrs     |          |                 |
| 4 hrs     |          |                 |

**answer:** T = 1.875 hrs, S = 3 hrs
**explanation:** **The combined-work principle.** When two pumps operate at the same time, their filling rates — expressed as fractions of the reservoir filled per hour — add. The time to fill one full reservoir equals 1 divided by the combined rate.

**Setting up the rates.** Let the reservoir equal 1 unit of work.

- Pump A fills the reservoir in 5 hours, so its rate is 1/5 reservoir per hour.
- Pump B fills the reservoir in 3 hours, so its rate is 1/3 reservoir per hour.

**Solving for T (both pumps).** The combined rate is:

1/5 + 1/3

Using the least common denominator of 15:

1/5 + 1/3 = 3/15 + 5/15 = 8/15 reservoir per hour

The time to fill one reservoir is:

T = 1 / (8/15) = 15/8 = 1.875 hours

Among the candidates, 1.875 hrs is the match.

**Solving for S (Pump B only).** When only Pump B runs, its rate is 1/3 reservoir per hour, so the time is:

S = 1 / (1/3) = 3 hours

This restates the prompt's given that Pump B alone takes 3 hours; the value 3 hrs is the match.

**Checking the other candidates.** The value 2.5 hrs would correspond to a combined rate of 1/2.5 = 0.4 = 6/15, which is below the actual 8/15. The value 1.5 hrs would require a rate of 2/3, which exceeds even the sum of both pumps. Neither is consistent with the rates derived above.

The correct answers are T (both) = 1.875 hrs and S (Pump B only) = 3 hrs.
**related_reading:** reading-di-06-two-part-analysis

---

## Q88
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Distance/Rate

A car and a truck leave the same point at the same time and travel in opposite directions along a straight highway. The car travels at 60 km/h and the truck at 45 km/h. Determine the time elapsed when they are exactly 420 km apart (row 1) and the distance the car has traveled at that moment (row 2).

|        | Time to 420 km apart | Car distance |
|--------|----------------------|--------------|
| 3 hrs  |                      |              |
| 4 hrs  |                      |              |
| 180 km |                      |              |
| 240 km |                      |              |
| 300 km |                      |              |

**answer:** Time = 4 hrs, Car distance = 240 km
**explanation:** **Governing principle.** When two objects move in opposite directions from the same starting point, the distance between them grows at a rate equal to the sum of their speeds. The time to reach a given separation equals that separation divided by the combined speed.

**Variable definitions.** Let t be the time in hours elapsed when the two vehicles are 420 km apart, and let d be the distance traveled by the car at that time.

**Setting up the equation.** The car travels at 60 km/h and the truck at 45 km/h, so the gap between them widens at 60 + 45 = 105 km/h. The separation reaches 420 km when:

105 * t = 420

**Solving for t.**

t = 420 / 105 = 4 hours

The time elapsed is 4 hours.

**Solving for d.** The car's distance is rate times time:

d = 60 * 4 = 240 km

**Verification.** In 4 hours the truck covers 45 * 4 = 180 km. The total separation is 240 + 180 = 420 km, matching the requirement. The solution is consistent.

**Evaluating the candidate values.** In the "Time" column the options are 3 hrs and 4 hrs; at t = 3 the separation would be 105 * 3 = 315 km, short of 420, so only 4 hrs works. In the "Car distance" column the options are 180 km, 240 km, and 300 km; 180 km is the truck's distance, 300 km matches neither vehicle, and only 240 km equals 60 * 4.

The correct answers are Time = 4 hrs and Car distance = 240 km.
**related_reading:** reading-di-06-two-part-analysis

---

## Q89
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Mixture

A tea merchant blends Tea X (costing $6 per pound) with Tea Y (costing $11 per pound) to produce 25 pounds of a blend that costs $8 per pound. Determine the pounds of Tea X (row 1) and the pounds of Tea Y (row 2) required.

|       | Tea X | Tea Y |
|-------|-------|-------|
| 5 lb  |       |       |
| 10 lb |       |       |
| 15 lb |       |       |
| 18 lb |       |       |
| 20 lb |       |       |

**answer:** Tea X = 15 lb, Tea Y = 10 lb
**explanation:** **Governing principle.** A blend problem is governed by two simultaneous constraints: the weights of the components must sum to the total weight, and the costs contributed by the components must sum to the total cost of the blend.

**Variable definitions.** Let x be the pounds of Tea X and y be the pounds of Tea Y.

**Setting up the equations.** The blend weighs 25 pounds:

x + y = 25   ... (1)

The blend costs $8 per pound over 25 pounds, for a total cost of 8 * 25 = $200. With Tea X at $6 and Tea Y at $11 per pound:

6x + 11y = 200   ... (2)

**Solving the system.** From equation (1), y = 25 - x. Substituting into equation (2):

6x + 11(25 - x) = 200

6x + 275 - 11x = 200

-5x = 200 - 275

-5x = -75

x = 15

Then y = 25 - 15 = 10.

**Verification.** Weight: 15 + 10 = 25. Cost: 6(15) + 11(10) = 90 + 110 = 200, and 200 / 25 = $8 per pound. Both constraints hold.

**Selecting from the candidate values.** The candidate weights are 5, 10, 15, 18, and 20 lb. The solution x = 15 and y = 10 both appear. The value 18 lb is a distractor consistent with neither equation, and any other pairing from the list fails the cost equation: for example, x = 20, y = 5 gives 6(20) + 11(5) = 120 + 55 = 175, not 200.

The correct answers are Tea X = 15 lb and Tea Y = 10 lb.
**related_reading:** reading-di-06-two-part-analysis

---

## Q90
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Investment

An investor allocates $80,000 between two bonds. Bond M yields 6.5% annually and Bond N yields 9% annually. The combined annual interest is $6,025. Determine the amount invested in Bond M (row 1) and the amount invested in Bond N (row 2).

|         | Bond M | Bond N |
|---------|--------|--------|
| $25,000 |        |        |
| $33,000 |        |        |
| $40,000 |        |        |
| $47,000 |        |        |
| $55,000 |        |        |

**answer:** Bond M = $47,000, Bond N = $33,000
**explanation:** **Setup.** This problem partitions a fixed sum between two instruments subject to a total-interest constraint. Let x be the dollars invested in Bond M; then the remaining 80,000 - x is invested in Bond N.

**Governing equation.** The interest from Bond M (6.5%) plus the interest from Bond N (9%) must equal $6,025:

0.065x + 0.09(80,000 - x) = 6,025

**Solving.** Expanding the left side:

0.065x + 7,200 - 0.09x = 6,025

Combining like terms:

-0.025x + 7,200 = 6,025

Subtracting 7,200 from both sides:

-0.025x = -1,175

Dividing both sides by -0.025:

x = -1,175 / -0.025 = 47,000

**Determining Bond N.** The remaining allocation is:

80,000 - 47,000 = 33,000

**Verification.** 0.065 * 47,000 + 0.09 * 33,000 = 3,055 + 2,970 = 6,025, which equals the stated total interest. The allocations also sum to 47,000 + 33,000 = 80,000.

**Eliminating distractors.** Testing other candidates against the interest constraint rules them out. If Bond M = $40,000, then Bond N = $40,000 and the interest is 0.065(40,000) + 0.09(40,000) = 2,600 + 3,600 = 6,200, which exceeds 6,025. If Bond M = $55,000, then Bond N = $25,000 and the interest is 0.065(55,000) + 0.09(25,000) = 3,575 + 2,250 = 5,825, which falls short. Only x = 47,000 satisfies the equation exactly.

The correct answers are Bond M = $47,000 and Bond N = $33,000.
**related_reading:** reading-di-06-two-part-analysis

---

## Q91
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Argument Structure

Consider the following argument: "Quarterly profits at NorthStar Retail rose 18% after the company switched to a four-day work week in January. Employee turnover, which had been climbing for two years, fell sharply over the same period. Therefore, the four-day work week increased profits by improving employee retention."

From the statements below, identify the conclusion of the argument (row 1) and the central unstated assumption on which the causal conclusion depends (row 2).

| Statement                                                                                       | Conclusion | Assumption |
|-------------------------------------------------------------------------------------------------|------------|------------|
| The four-day work week increased profits by improving employee retention                        |            |            |
| Lower employee turnover, rather than some other change, was responsible for the rise in profits  |            |            |
| Quarterly profits rose 18% after the switch to a four-day work week                              |            |            |
| Employee turnover fell sharply over the same period                                             |            |            |
| Every company that shortens its work week sees profits rise                                       |            |            |

**answer:** Conclusion = "The four-day work week increased profits by improving employee retention"; Assumption = "Lower employee turnover, rather than some other change, was responsible for the rise in profits"
**fastest_path:** A is the full causal claim; B supplies the required bridge from lower turnover to higher profit.
**explanation:** Choose A for Conclusion. The author claims that the four-day week raised profit through improved retention. Choose B for Assumption. The argument needs lower turnover, rather than another simultaneous change, to be responsible for the profit increase; otherwise the proposed mechanism does not connect the policy to profit. C and D are observations, and E is an unnecessarily universal statement.
**common_trap:** Choosing the observed profit increase rather than the causal explanation the author is trying to establish.
**takeaway:** For a multi-step causal conclusion, the assumption must secure the claimed link between the intermediate result and final outcome.
**related_reading:** reading-di-06-two-part-analysis

---

## Q92
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Quantitative — Overlapping Sets

A university surveys 200 students about which foreign languages they study. Of those surveyed, 130 study French, 95 study Spanish, and 30 study neither language. Each student who studies neither studies no surveyed language at all. Determine the number of students who study both French and Spanish (row 1) and the number who study French but not Spanish (row 2).

|    | Study both | French only |
|----|------------|-------------|
| 35 |            |             |
| 45 |            |             |
| 55 |            |             |
| 65 |            |             |
| 75 |            |             |

**answer:** Study both = 55, French only = 75
**explanation:** **Governing principle.** For two overlapping groups within a population, the inclusion-exclusion principle states that the number studying at least one language equals the number studying the first plus the number studying the second minus the number studying both. The number studying at least one also equals the total surveyed minus those studying neither.

**Define quantities.** The total surveyed is 200, with 130 studying French (F), 95 studying Spanish (S), and 30 studying neither. Let x be the number who study both.

**Find the number who study at least one language.** Subtract those who study neither from the total:

At least one = 200 - 30 = 170

**Apply inclusion-exclusion to find the overlap.**

|F| + |S| - |both| = |at least one|

130 + 95 - x = 170

225 - x = 170

x = 55

So 55 students study both French and Spanish.

**Find the number who study French only.** Of the 130 French students, those who also study Spanish number 55, so:

French only = 130 - 55 = 75

**Verification.** French only (75) + Spanish only (95 - 55 = 40) + both (55) + neither (30) = 75 + 40 + 55 + 30 = 200, matching the total surveyed. The at-least-one count is 75 + 40 + 55 = 170, consistent with 200 - 30. Both checks pass.

**Matching candidate values.** The candidate list is 35, 45, 55, 65, and 75. The overlap, 55, and the French-only count, 75, both appear. The distractor 45 corresponds to no requested quantity, and 65 likewise fails both inclusion-exclusion checks.

The correct answers are Study both = 55 and French only = 75.
**related_reading:** reading-di-06-two-part-analysis

---

## Q93
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Quantitative — Numerical Relationships

A set of five distinct positive integers has a mean of 20 and a median of 18. Let L be the largest possible value of the greatest integer in the set, and let S be the smallest possible value of the greatest integer in the set. Determine L (row 1) and S (row 2).

|    | L (largest possible max) | S (smallest possible max) |
|----|--------------------------|---------------------------|
| 20 |                          |                           |
| 25 |                          |                           |
| 33 |                          |                           |
| 49 |                          |                           |
| 60 |                          |                           |

**answer:** L = 60, S = 25
**fastest_path:** Order the integers a<b<18<d<e and use total 100. Maximize e by minimizing a,b,d; minimize e by maximizing a,b and balancing d,e.
**explanation:** The sum is 5(20)=100. For the largest possible maximum, use the smallest allowed other values: 1, 2, 18, 19, giving e=60. Thus L=60. For the smallest possible maximum, maximize the two values below 18: 16 and 17. Then d+e=49 with 18<d<e, so the closest distinct pair is 24 and 25. Thus S=25. Select 60 and 25.
**common_trap:** To minimize the maximum, do not minimize the other entries; make them as large and balanced as the ordering permits.
**takeaway:** With a fixed sum, maximize one term by minimizing the rest; minimize the maximum by distributing the remaining sum evenly.
**related_reading:** reading-di-06-two-part-analysis

---

## Q94
**difficulty:** Hard
**type:** Two-Part Analysis
**topic:** Logic — Cause and Effect / Strengthening and Weakening

A city transit official argues: "After we replaced the fare-collection turnstiles with a faster tap-to-pay system at Central Station last spring, average passenger boarding time fell by 22%. Therefore, the tap-to-pay system is the reason boarding became faster, and installing it system-wide will speed up boarding at every station."

From the statements below, identify one that would most strengthen the argument (row 1) and one that would most weaken it by offering an alternative explanation (row 2).

| Statement                                                                                                            | Strengthens | Weakens (alt cause) |
|--------------------------------------------------------------------------------------------------------------------|-------------|---------------------|
| At a comparison station where only tap-to-pay was installed and nothing else changed, boarding time fell by 20%      |             |                     |
| The same spring that tap-to-pay launched at Central Station, the transit agency also added two extra boarding doors per train there |             |                     |
| The tap-to-pay terminals cost less to maintain than the old turnstiles                                              |             |                     |
| Passenger satisfaction surveys at Central Station improved after the change                                          |             |                     |
| Tap-to-pay has been adopted by transit systems in several other countries                                           |             |                     |

**answer:** Strengthens = "At a comparison station where only tap-to-pay was installed and nothing else changed, boarding time fell by 20%"; Weakens = "The same spring that tap-to-pay launched at Central Station, the transit agency also added two extra boarding doors per train there"
**fastest_path:** A isolates tap-to-pay at a comparison station; B adds another change that could independently reduce boarding time.
**explanation:** Choose A for Strengthens. At a comparable station where tap-to-pay was the only change, boarding time fell by a similar 20%, supporting the claimed causal effect. Choose B for Weakens: adding two boarding doors at Central Station could itself explain faster boarding, so the before-and-after result does not isolate payment technology. Maintenance cost, satisfaction, and adoption elsewhere do not show what caused boarding time to fall.
**common_trap:** Using positive customer reaction or widespread adoption as evidence about a specific operational outcome.
**takeaway:** A clean comparison isolates the intervention; a simultaneous operational change confounds a before-and-after result.
**related_reading:** reading-di-06-two-part-analysis

---

## Q95
**difficulty:** Medium
**type:** Two-Part Analysis
**topic:** Logic — Strengthening and Weakening

A regional health board argues: "Requiring restaurants to post calorie counts on their menus will reduce the average number of calories customers order per meal by at least 10%."

From the statements below, identify one that would most strengthen the board's argument (row 1) and one that would most weaken it (row 2).

| Statement                                                                                                  | Strengthens | Weakens |
|------------------------------------------------------------------------------------------------------------|-------------|---------|
| In a neighboring region with similar dining habits, mandatory calorie posting cut average calories ordered by 12% |             |         |
| Most customers say they ignore nutritional information when ordering a meal                                  |             |         |
| Calorie counts will be printed in a slightly larger font than the menu prices                               |             |         |
| Many restaurants already list the price of each menu item                                                   |             |         |
| Posting calorie counts increases the cost of reprinting menus                                               |             |         |

**answer:** Strengthens = "In a neighboring region with similar dining habits, mandatory calorie posting cut average calories ordered by 12%"; Weakens = "Most customers say they ignore nutritional information when ordering a meal"
**fastest_path:** A tests the same policy in a similar region and exceeds the target; B says the information will not affect most choices.
**explanation:** Choose A for Strengthens. A neighboring region with similar dining habits implemented the same requirement and saw a 12% reduction, directly supporting the predicted minimum of 10%. Choose B for Weakens. If most customers ignore nutrition information, posting calorie counts is unlikely to change what they order. Font size, existing price labels, and menu-printing cost do not address whether ordered calories will fall.
**common_trap:** Focusing on implementation details or expense instead of whether customers use the posted information.
**takeaway:** The best support tests the same policy and outcome; the best weakener blocks the behavior the policy relies on.
**related_reading:** reading-di-06-two-part-analysis
