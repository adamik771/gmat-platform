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
**explanation:** **The Combined-Work Principle.** When two agents work simultaneously on the same task, their rates — expressed in units of work per unit of time — are additive. That is, if Agent A completes 1/a of the job per hour and Agent B completes 1/b of the job per hour, together they complete 1/a + 1/b of the job per hour, and the total time to finish one complete job equals 1 divided by that combined rate.

**Setting up the variables and rates.**

Let the full load represent 1 unit of work. The problem states:

- Truck A completes the load in 6 hours, so Truck A's rate = 1/6 load per hour.
- Truck B completes the load in 4 hours, so Truck B's rate = 1/4 load per hour.

**Solving for T (both trucks working together).**

Applying the additive-rate principle, the combined rate when both trucks work simultaneously is:

1/6 + 1/4

To add these fractions, the least common denominator of 12 is used:

1/6 + 1/4 = 2/12 + 3/12 = 5/12 load per hour

Since time = work / rate, and the total work is 1 load:

T = 1 / (5/12) = 12/5 = 2.4 hours

The value 2.4 is therefore selected for the column "T (both)."

**Solving for S (Truck A working alone).**

When only Truck A works, its rate remains 1/6 load per hour. The time required to deliver exactly 1 full load is:

S = 1 / (1/6) = 6 hours

This result is consistent with the prompt's direct statement that Truck A alone requires 6 hours; no further manipulation is necessary. The value 6.0 is therefore selected for the column "S (A only)."

**Confirming against the candidate values.**

The five candidate values are 1.6, 2.4, 3.6, 4.0, and 6.0. The computed value T = 12/5 = 2.4 matches the candidate 2.4 exactly, and S = 6 matches the candidate 6.0 exactly. No other candidates are consistent with the rates derived above.

The correct answers are T (both) = 2.4 and S (A only) = 6.0.
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
**explanation:** **Governing principles.** In GMAT argument structure, the conclusion is the claim the author is ultimately trying to establish — typically signaled by indicator words such as "therefore," "thus," or "hence." A premise, by contrast, is a stated fact or observation offered as support. An assumption is an unstated premise that the argument relies on; when an argument says an original claim "may be overstated," it is implicitly targeting the reasoning behind that original claim.

**Identifying the conclusion.** The passage contains the explicit conclusion indicator "Therefore" introducing the final sentence: "the campaign's effectiveness may be overstated." That sentence is not offered as evidence for anything else; every other statement in the passage either reports an observed fact (sales rose 25%; a competitor went bankrupt) or sets up the contrast that leads to this final judgment. We therefore assign the Conclusion column to "The campaign's effectiveness may be overstated."

**Identifying the challenged assumption.** The argument works as follows: a claim was implicitly made — that the marketing campaign deserves credit for the 25% sales increase. The argument then introduces a rival explanation (reduced competition from a bankrupt competitor) to cast doubt on that credit attribution. The assumption being challenged is the unstated premise underlying the original attribution, namely "The marketing campaign caused the 25% sales increase." Without that assumed causal link, there would be no credit to overstate and no argument to make.

Consider the other candidates:

- "A major competitor went bankrupt during the quarter" — this is a stated premise, not an assumption.
- "Sales increased 25% in the first quarter" — also a stated premise; the argument does not dispute that the increase occurred.
- "Reduced competition always leads to increased sales" — this is too sweeping, and the argument does not need to challenge an "always" claim; it only needs to raise the possibility that reduced competition contributed here. The assumption being challenged is specifically the causal attribution to the campaign, not a universal law about competition.

**Summary of assignments.**

| Column | Credited value |
|---|---|
| Conclusion | The campaign's effectiveness may be overstated |
| Assumption | The marketing campaign caused the 25% sales increase |

The correct answers are Conclusion = The campaign's effectiveness may be overstated and Assumption = The marketing campaign caused the 25% sales increase.
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
**explanation:** **Governing principle.** When two objects move toward each other, their speeds combine: the rate at which the gap between them closes equals the sum of their individual speeds. Therefore, the time to meet is the total distance divided by the combined speed.

**Variable definitions.** Let t be the time (in hours) elapsed when the two trains meet. Let d_A be the distance (in kilometers) traveled by Train A at the moment of meeting.

**Setting up the equation.** Train A travels at 80 km/h and Train B travels at 100 km/h. Their combined closing speed is 80 + 100 = 180 km/h. The total distance separating the two cities is 540 km. The trains meet when the sum of the distances they have individually covered equals 540 km, which occurs at time t such that:

180 * t = 540

**Solving for t.**

t = 540 / 180 = 3

The time elapsed when the trains meet is 3 hours.

**Solving for d_A.** Using the definition distance = rate * time:

d_A = 80 * 3 = 240

Train A has traveled 240 km when the trains meet.

**Verification.** In the same 3 hours, Train B covers 100 * 3 = 300 km. The sum of the two distances is 240 + 300 = 540 km, which equals the total separation. The solution is consistent.

**Evaluating the candidate values.** The column "Train A Distance" contains values 180 km, 240 km, and 300 km. Only 240 km matches d_A = 80 * 3. The value 300 km corresponds to Train B's distance, and 180 km corresponds to neither train. The column "Time to Meet" contains values 3 hours, 4 hours, and 5 hours. Only 3 hours matches t = 540 / 180. At t = 4, the combined distance would be 180 * 4 = 720 km, exceeding 540 km; at t = 5, it would be 900 km — both inconsistent with the given separation.

The correct answers are Train A Distance = 240 km and Time to Meet = 3 hours.
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
**explanation:** **Governing principle.** An argument is strengthened by a statement that increases the likelihood the conclusion is true, typically by providing supporting evidence, an analogous case, or validating a key assumption. An argument is weakened by a statement that decreases the likelihood the conclusion is true, typically by attacking a key assumption, undermining the causal mechanism, or revealing that the scope of the intervention is too narrow to achieve the claimed effect.

**The argument.** The city council concludes: installing new streetlights on Main Street will reduce nighttime accidents by at least 30%. Two unstated assumptions underlie this conclusion: (1) that poor visibility — specifically inadequate lighting — is a meaningful cause of accidents on Main Street, and (2) that improving lighting will address this cause to a degree sufficient to produce a reduction of >= 30%.

**Evaluating the candidates for Strengthens.**

"A nearby city with similar traffic volume saw 35% fewer accidents after installing lights." Let the claimed reduction threshold = 30% and the analogous city's observed reduction = 35%. Because 35% > 30%, this analogical case directly supports the plausibility of the council's projection. The comparability condition (similar traffic volume) controls for a key confounding variable. This validates both assumptions: lighting was the intervention, and it produced a result meeting the stated threshold under comparable conditions.

"Main Street has a higher-than-average traffic volume." This is a background fact about traffic density. It neither confirms that lighting causes accidents nor provides evidence that the 30% target is achievable. At best, higher volume might suggest more potential for improvement, but the reasoning is speculative and indirect. This does not qualify as a clear strengthener.

"The new streetlights use energy-efficient LED bulbs." LED technology speaks to energy cost and operational efficiency, not to accident-reduction efficacy. This is irrelevant to the council's claim.

The only candidate that strengthens the argument is the one providing direct analogical empirical evidence: a comparable city achieved a reduction of 35%, which is >= 30%.

**Evaluating the candidates for Weakens.**

"Main Street accidents are primarily caused by speeding, not visibility." This attacks the causal mechanism directly. The council's reasoning depends on assumption (1): that inadequate lighting — a visibility problem — is a meaningful cause of the nighttime accidents it wants to reduce. If those accidents are instead caused primarily by speeding, then adding brighter lights addresses the wrong cause, and the predicted 30% reduction in nighttime accidents cannot be achieved. By severing the link between the intervention (more light) and the intended effect (fewer nighttime accidents), this is the strongest available weakener.

"Most accidents on Main Street occur during daylight hours." This statement looks like a weakener but is a scope trap. The council's claim is narrowly scoped to *nighttime* accidents: it predicts that the count of nighttime accidents will fall by at least 30%. The daytime-versus-nighttime split of *total* accidents is beside the point, because the 30% is measured against nighttime accidents, not against all accidents. Even if 75% of all accidents occur in daylight, the council can still be correct that the nighttime subset drops by 30%. Since this fact does not bear on whether nighttime accidents specifically will fall, it does not weaken the argument.

The remaining options do not weaken the claim either: higher-than-average traffic volume is a background fact with no bearing on whether lighting reduces accidents, and the LED detail concerns energy cost rather than accident-reduction efficacy.

**Confirming the credited answers.** For Strengthens, the analogous-city statement provides direct evidence at 35% >= 30% under controlled comparable conditions — the strongest available support for the council's conclusion. For Weakens, the speeding statement destroys the visibility mechanism the council's prediction depends on, so brighter lights would not deliver the claimed nighttime reduction; the daylight-hours statement, by contrast, never engages the nighttime-scoped claim and is the intended trap.

The correct answers are Strengthens = A nearby city with similar traffic volume saw 35% fewer accidents after installing lights and Weakens = Main Street accidents are primarily caused by speeding, not visibility.
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
**explanation:** **Resource-constraint maximization.** When a firm produces only one product, total output is bounded by every applicable resource limit simultaneously; the maximum feasible quantity is the smallest upper bound imposed across all constraints.

**Setting up the constraints.**

Let x = the number of units of Product X produced and y = the number of units of Product Y produced. The two binding constraints are:

- Labor (hours available = 120): 2x hours per unit of X, 3y hours per unit of Y
- Materials (budget = $600): $10 per unit of X, $15 per unit of Y

**Row 1 — Maximum X when only Product X is produced.**

Setting y = 0, both constraints simplify to single-variable inequalities:

Labor: 2x <= 120, which gives x <= 120/2 = 60.

Materials: 10x <= 600, which gives x <= 600/10 = 60.

Both constraints yield the same upper bound of 60. Therefore the maximum number of units of Product X is 60.

**Row 2 — Maximum Y when only Product Y is produced.**

Setting x = 0, both constraints simplify analogously:

Labor: 3y <= 120, which gives y <= 120/3 = 40.

Materials: 15y <= 600, which gives y <= 600/15 = 40.

Again both constraints converge on the same ceiling of 40. Therefore the maximum number of units of Product Y is 40.

**Verification against the candidate values.** The answer choices include 30, 40, 50, 60, and 80. The derived maximum for X is 60 (not 80, because neither constraint permits x = 80: 2(80) = 160 > 120 and 10(80) = 800 > 600). The derived maximum for Y is 40 (not 50, because 3(50) = 150 > 120 and 15(50) = 750 > 600). Both 60 and 40 appear among the candidates and satisfy all constraints with equality, confirming they are the correct selections.

The correct answers are Max X (only X) = 60 and Max Y (only Y) = 40.
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
**explanation:** **Governing principles.** A Two-Part Analysis question of the cause-and-effect type requires distinguishing between (1) an alternative explanation — a statement that, if true, accounts for the observed correlation through a mechanism other than the one the author assumes — and (2) a support statement — a statement that, if true, directly strengthens the author's causal conclusion. Each candidate is examined against those definitions.

**The argument.** The researcher observes a correlation: let S_b denote the mean standardized-test score for breakfast-eaters and S_s denote the mean score for breakfast-skippers. The premise states S_b - S_s = 10 points. The researcher infers a causal relationship — eating breakfast raises scores — and draws a policy conclusion: schools should provide free breakfast.

The logical vulnerability is the leap from correlation to causation. If a third variable X is positively associated with both breakfast consumption and test scores, then the 10-point gap may reflect X rather than breakfast itself.

**Column 1 — Alternative Explanation**

The task is to identify a statement that, if true, introduces a confounding variable capable of explaining S_b - S_s = 10 without requiring breakfast to cause higher scores.

- Students from higher-income families are more likely to eat breakfast. Let I represent family income. Higher-income students tend both to eat breakfast (explaining the breakfast-eating group) and to score higher on standardized tests (reflecting greater access to tutoring, stable home environments, and academic resources). If this statement is true, income I is a common cause of both breakfast consumption and test performance. The observed 10-point gap is therefore attributable to income disparities rather than to breakfast per se. This is a classical confound and constitutes a direct alternative explanation.

- Students who eat breakfast tend to arrive at school earlier. This is a behavioral correlate of breakfast-eating; it does not independently explain the score gap unless one further assumes that earlier arrival causes higher scores — an additional inferential step that weakens its force as a standalone alternative explanation.

- Breakfast foods contain essential nutrients for brain function. This supports rather than undermines the causal claim.

- Schools already provide lunch programs. This is irrelevant to the causal mechanism linking breakfast to scores.

- A school that introduced free breakfast saw test scores rise by 12 points the next year. This supports the conclusion rather than offering an alternative explanation.

The credited alternative explanation is Students from higher-income families are more likely to eat breakfast. It introduces income as a confounding variable that fully accounts for the correlation without invoking a causal role for breakfast.

**Column 2 — Support**

The task is to identify the statement that, if true, most directly strengthens the conclusion that providing free breakfast will improve test scores.

- A school that introduced free breakfast saw test scores rise by 12 points the next year. This is a natural experiment: an intervention was implemented (free breakfast provided) and the outcome — a 12-point increase, numerically consistent with the researcher's cited 10-point gap — was directly observed. This moves the evidence from correlation to a before-and-after comparison at the institutional level, providing the strongest available empirical support for the causal policy claim.

- Breakfast foods contain essential nutrients for brain function. This offers a plausible biological mechanism, which is a legitimate form of support. However, a mechanism alone does not confirm that the intervention produces the effect; it merely explains how it could. The observed outcome evidence above is therefore more direct.

- Students from higher-income families are more likely to eat breakfast. This undermines rather than supports the conclusion.

- Schools already provide lunch programs. Institutional precedent is irrelevant to the causal claim.

- Students who eat breakfast tend to arrive at school earlier. This is a correlate of the exposure variable and does not address whether providing breakfast raises scores.

The credited support statement is A school that introduced free breakfast saw test scores rise by 12 points the next year. It provides direct outcome evidence that the proposed intervention produces an effect of the predicted magnitude.

The correct answers are Alt Explanation = Students from higher-income families are more likely to eat breakfast and Support = A school that introduced free breakfast saw test scores rise by 12 points the next year.
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
**explanation:** **Setup and definitions.**

Let the five distinct positive integers, arranged in ascending order, be a1 < a2 < a3 < a4 < a5. Because the set has five elements, the median is the third element, so a3 = 12. Because the mean is 14, the total sum is 5 * 14 = 70. Subtracting the known median gives a fixed constraint on the remaining four elements:

a1 + a2 + a4 + a5 = 70 - 12 = 58

Two additional constraints follow from the ordering and the distinctness requirement: a1 and a2 must be distinct positive integers strictly less than 12, and a4 must be a distinct positive integer strictly greater than 12 and strictly less than a5.

**Finding L (the largest possible value of the greatest integer).**

To make a5 as large as possible, the sum a1 + a2 + a4 must be minimized. The two values a1 and a2 are distinct positive integers less than 12; their minimum possible sum is 1 + 2 = 3. With those values fixed, a4 must exceed 12 and be less than a5; the smallest allowable value of a4 is 13. Therefore:

a5 = 58 - a1 - a2 - a4 = 58 - 1 - 2 - 13 = 42

The resulting set {1, 2, 12, 13, 42} satisfies all conditions: five distinct positive integers, sum = 1 + 2 + 12 + 13 + 42 = 70 (mean = 14), and median = 12. No smaller choice of a1, a2, or a4 is available while respecting distinctness and ordering, so 42 is the maximum. Therefore L = 42.

**Finding S (the smallest possible value of the greatest integer).**

To make a5 as small as possible, the sum a1 + a2 + a4 must be maximized. For a1 and a2, the largest two distinct positive integers strictly below 12 are 10 and 11, giving a1 + a2 = 21. This forces:

a4 + a5 = 58 - 21 = 37

Because a4 and a5 must be distinct integers with 12 < a4 < a5, the value of a5 is minimized when a4 is as large as possible, that is, a4 = a5 - 1. Substituting:

(a5 - 1) + a5 = 37
2 * a5 = 38
a5 = 19,   a4 = 18

No smaller a5 is achievable: if a5 were 18, then a4 = 37 - 18 = 19, which contradicts a4 < a5; if a5 were 17 or less, a4 would exceed a5, which also contradicts the ordering. The resulting set {10, 11, 12, 18, 19} satisfies all conditions: five distinct positive integers, sum = 10 + 11 + 12 + 18 + 19 = 70 (mean = 14), and median = 12. Therefore S = 19.

The correct answers are L (largest possible max) = 42 and S (smallest possible max) = 19.
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
**explanation:** In a Two-Part Analysis question of this type, the two tasks are to isolate the conclusion of the argument and to identify the central unstated assumption — the suppressed premise without which the inferential link between evidence and conclusion breaks down.

**Identifying the conclusion.**

The conclusion of an argument is the claim the argument is designed to establish. It is supported by the premises; it does not itself serve as direct support for another claim within the same argument. A reliable test is to ask: which statement are the other statements offered in order to prove?

The argument presents two explicit evidence statements:

- Premise 1: The bike-share program launched in March.
- Premise 2: Six months later, traffic congestion on Main Avenue decreased by 15%.

Both of these are offered in support of a single inferential claim introduced by the word "therefore": the bike-share program reduced congestion on Main Avenue. That final statement is what the arguer is trying to establish. The 15% decrease is an observed datum (a premise), not a claim the arguer is arguing for. Therefore, the conclusion is "The bike-share program reduced congestion on Main Avenue."

**Identifying the central unstated assumption.**

The argument's inferential core is a causal claim built on temporal succession: A (program launch) preceded B (congestion decrease), therefore A caused B. This pattern is a post hoc, ergo propter hoc structure. For such a causal conclusion to hold, one must assume that the observed effect was not produced by some independent cause. If another factor — for example, a new transit line opening, road construction completing, fuel prices rising, or seasonal commuter patterns — could equally account for the 15% drop, then the mere fact that the bike-share program preceded the decrease is insufficient to establish causation. The argument is therefore silently relying on the premise that no other factor materially contributed to the observed congestion decrease.

This is confirmed by negation: if one negates the assumption — suppose some other factor did materially contribute to the decrease — the argument's conclusion is immediately undermined, because the decrease could then be explained without reference to the bike-share program at all. This confirms the statement is load-bearing and therefore qualifies as the central unstated assumption.

**Evaluating the remaining candidates.**

"Traffic congestion on Main Avenue decreased by 15%" is an explicit premise, not an unstated assumption and not the conclusion. "The bike-share program launched in March" is also an explicit premise. "Bike-share programs always reduce congestion wherever they are implemented" is a universal generalization. The argument does not require so strong a principle — it makes only a local causal claim about one program in one city. Assuming this universal would be sufficient to support the conclusion but is far stronger than necessary; it is not the minimal unstated assumption actually doing the inferential work.

The correct answers are Conclusion = The bike-share program reduced congestion on Main Avenue and Assumption = No other factor materially contributed to the observed congestion decrease.
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
**explanation:** **The Logical Task.**

A Two-Part Analysis question in the Strengthen/Weaken category asks us to do two distinct things simultaneously: find the statement that best supports the causal claim, and find the statement that best undermines it by offering an alternative explanation for the observed effect. Each column is treated as an independent sub-question with its own evaluation criterion.

**The Argument.**

The analyst's claim has the following structure. Let R = the observed change in customer retention rate, and let C = adoption of the CRM platform. The argument asserts:

- Observed: companies that adopted C showed R = +8 percentage points in the following year.
- Conclusion: therefore, C caused the improvement in R.

This is a causal conclusion drawn from observational (correlational) data. The central logical gap is the possibility of confounding variables — other factors that changed simultaneously with CRM adoption and that could themselves explain the rise in R. A strengthener must close that gap; a weakener (alternative cause) must open or exploit it.

**Evaluating the Candidates for Strengthens.**

The governing principle: the best strengthener of a causal argument eliminates competing explanations and provides evidence of a genuine causal link, not merely correlation.

- Candidate A: "A controlled experiment randomly assigned the CRM to half of a company's regions and saw retention rise 7 points only in those regions." Random assignment is the gold standard for establishing causation. Because regions were randomly assigned, pre-existing differences between regions are neutralized in expectation. The fact that R rose approximately +7 points only in the CRM-assigned regions — and not in the control regions — rules out confounders such as broader market trends, management quality, or simultaneous policy changes, since those forces would have affected both sets of regions equally. This directly addresses the argument's logical gap. Strong strengthener.

- Candidate B: "Companies that adopted the CRM also simultaneously raised their customer service headcount by 20%." This introduces a plausible alternative cause and therefore weakens the argument rather than strengthening it.

- Candidate C: "The CRM platform is the highest-rated software in its category." A software rating reflects user satisfaction or feature quality but provides no evidence that the platform caused retention rates to rise. This is irrelevant to the causal conclusion.

- Candidate D: "Retention rates across the industry rose 1 percentage point on average last year." An industry-wide trend of +1 point suggests ambient forces independent of CRM adoption. Although this trend is small relative to the observed +8 points, it indicates that some portion of the observed change may reflect external conditions, which weakens rather than strengthens the argument.

- Candidate E: "The CRM costs $50 per seat per month." Cost information is irrelevant to whether the CRM caused retention to improve.

Candidate A is therefore selected as the best strengthener.

**Evaluating the Candidates for Weakens (Alternative Cause).**

The governing principle: the best alternative-cause weakener identifies a distinct variable — one that (i) plausibly changed at the same time as CRM adoption, and (ii) could independently explain the observed rise in R, thereby breaking the inferred causal link between C and R.

- Candidate A: Already selected for Strengthens; furthermore, a controlled experiment supports rather than weakens the causal claim.

- Candidate B: "Companies that adopted the CRM also simultaneously raised their customer service headcount by 20%." Let H = the increase in customer service headcount. If companies that adopted the CRM also increased H by 20% at the same time, then the observed R = +8 points could be attributable to H rather than to the CRM itself. The argument cannot distinguish between these two explanations because both C and H varied together in the observational data. This is a textbook alternative cause: it does not deny that R rose, but it denies that C is the cause. Strong weakener.

- Candidate C: A software rating provides no alternative causal mechanism. Irrelevant.

- Candidate D: An industry-wide rise of +1 point is a partial alternative explanation (ambient trend), but it accounts for at most +1 of the +8 points observed. The analyst's claim survives largely intact; the remaining +7 points still require explanation. Candidate D is a mild weakener but far less decisive than Candidate B.

- Candidate E: Cost is irrelevant to causation. Irrelevant.

Candidate B is therefore selected as the best weakener by alternative cause.

**Summary of the Selections.**

For the Strengthens column, Candidate A is superior because random assignment in a controlled experiment eliminates confounding variables and provides the strongest available evidence that the CRM itself — not accompanying changes — drove the retention improvement. For the Weakens (alt cause) column, Candidate B is superior because it identifies a specific, simultaneous, and causally plausible alternative variable (headcount) that could fully explain the observed +8-point rise, leaving the argument's causal attribution to the CRM unsupported.

The correct answers are Strengthens = A controlled experiment randomly assigned the CRM to half of a company's regions and saw retention rise 7 points only in those regions and Weakens (alt cause) = Companies that adopted the CRM also simultaneously raised their customer service headcount by 20%.
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
**explanation:** The work-rate method treats each pipe's contribution as a fraction of the tank filled (or emptied) per unit time. If a pipe fills a full tank in n hours, its rate is 1/n tank per hour; a drain that empties a full tank in n hours contributes −1/n tank per hour. When multiple pipes operate simultaneously, the net rate is the algebraic sum of the individual rates, and the time to fill one full tank equals 1 divided by that net rate.

Setting up rates. Let the capacity of the tank equal 1 (one full tank). The individual rates are:

- Pipe A fills the tank in 4 hours, so its rate is 1/4 tank per hour.
- Pipe B fills the tank in 6 hours, so its rate is 1/6 tank per hour.
- The drain empties the tank in 8 hours, so its rate is −1/8 tank per hour (negative because it removes volume).

Finding T (all three open). The net combined rate when all three operate simultaneously is:

1/4 + 1/6 − 1/8

To add these fractions, use the least common denominator of 4, 6, and 8, which is 24:

1/4 = 6/24, 1/6 = 4/24, 1/8 = 3/24

Net rate = 6/24 + 4/24 − 3/24 = 7/24 tank per hour

The time T to fill one full tank is therefore:

T = 1 / (7/24) = 24/7 hours

Evaluating: 24/7 = 3.4285..., which rounds to 3.43 hours. Among the candidate values, 3.43 hrs is the match.

Finding U (Pipe A and the drain only). With Pipe B closed, the net rate is:

1/4 − 1/8

Using a common denominator of 8:

1/4 = 2/8

Net rate = 2/8 − 1/8 = 1/8 tank per hour

The time U to fill one full tank is therefore:

U = 1 / (1/8) = 8 hours

Among the candidate values, 8.0 hrs is the match. Notably, this result has an intuitive interpretation: Pipe A fills at twice the rate the drain empties (1/4 vs. 1/8), so the effective filling rate equals exactly the drain's rate, yielding a fill time equal to the drain's standalone emptying time.

Checking the other candidates. The value 2.4 hrs corresponds to a net rate of 1/2.4 = 5/12, which would require a combined filling rate of 5/12 — far above 7/24. The value 2.75 hrs corresponds to 4/11, also inconsistent with the arithmetic above. The value 4.0 hrs would require a net rate of 1/4, which is Pipe A alone with no drain effect. None of these match either scenario.

The correct answers are T (all three) = 3.43 hrs and U (A + drain) = 8.0 hrs.
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
**explanation:** **Setup.** Two unknowns govern this problem: let x represent the weekly ridership on Route 1, and let y represent the weekly ridership on Route 2. The prompt supplies two independent constraints, which together form a determinate linear system.

**Translating the constraints into equations.**

The total ridership constraint states that the sum of passengers on both routes equals 28,000:

x + y = 28,000   ... (1)

The total revenue constraint states that per-passenger revenue of $5.00 on Route 1 and $3.00 on Route 2 combine to produce $100,000:

5x + 3y = 100,000   ... (2)

**Solving the system.**

From equation (1), express y in terms of x:

y = 28,000 - x   ... (3)

Substitute (3) into equation (2):

5x + 3(28,000 - x) = 100,000

5x + 84,000 - 3x = 100,000

2x = 100,000 - 84,000

2x = 16,000

x = 8,000

**Route 1 ridership** is therefore 8,000 passengers per week. Among the candidate values — 8,000; 20,000; 60,000; 80,000; 100,000 — the value 8,000 is the unique solution consistent with both constraints.

**Solving for Route 2 ridership and revenue.**

Substituting x = 8,000 back into equation (3):

y = 28,000 - 8,000 = 20,000

Route 2 carries 20,000 passengers per week. Weekly revenue from Route 2 is:

3 * 20,000 = 60,000

**Route 2 weekly revenue** is therefore $60,000. Among the candidate values, 60,000 is the unique figure consistent with the system.

**Verification.** Both constraints are satisfied simultaneously:

- Total ridership: 8,000 + 20,000 = 28,000. Correct.
- Total revenue: 5 * 8,000 + 3 * 20,000 = 40,000 + 60,000 = 100,000. Correct.

No other pairing of candidate values satisfies both equations. For instance, selecting 20,000 for Route 1 ridership would yield Route 1 revenue of 5 * 20,000 = 100,000, which already exhausts the total budget and leaves nothing for Route 2 — a contradiction. Similarly, any candidate value for Route 1 ridership other than 8,000 produces a value for y that does not generate a Route 2 revenue figure appearing among the candidates.

The correct answers are Ridership on Route 1 = 8,000 and Revenue from Route 2 = 60,000.
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
**explanation:** **Governing principle.** When drawing objects without replacement, each successive draw reduces the total. The probability of a multi-step outcome is the product of the conditional probabilities at each step, or equivalently, the ratio of favorable combinations to total combinations using C(n, k) = n! / (k! * (n-k)!).

**Setup.** The bag holds 8 white balls and 4 black balls, for a total of 12 balls. Two balls are drawn without replacement. The task is to find (1) the probability that both balls are white, and (2) the probability that both balls are the same color.

The total number of ways to choose any 2 balls from 12 is C(12, 2) = (12 * 11) / 2 = 66. This is the denominator for all probability calculations here.

**Column 1 — Probability that both balls drawn are white.**

The number of ways to choose 2 white balls from the 8 available white balls is C(8, 2) = (8 * 7) / 2 = 28.

Therefore, P(both white) = 28 / 66 = 14 / 33.

This can also be computed as a product of sequential conditional probabilities: the probability the first ball is white is 8/12, and given that, the probability the second ball is also white is 7/11. Thus P(both white) = (8/12) * (7/11) = 56/132 = 14/33. Both methods agree.

**Column 2 — Probability that both balls drawn are the same color.**

"Same color" means either both white or both black; these two events are mutually exclusive, so their probabilities are added.

P(both white) = 14/33, as derived above.

For both black: the number of ways to choose 2 black balls from the 4 available is C(4, 2) = (4 * 3) / 2 = 6. Therefore, P(both black) = 6/66 = 1/11 = 3/33.

P(same color) = P(both white) + P(both black) = 14/33 + 3/33 = 17/33.

**Verification against the candidate values.** The five candidate values are 1/11, 3/11, 14/33, 17/33, and 21/33. The value 14/33 emerges directly as P(both white) and 17/33 emerges directly as P(same color); neither value is used for both columns. The value 1/11 = 3/33 equals P(both black) alone, a plausible distractor. The value 21/33 does not arise from any correct grouping of these outcomes.

The correct answers are Both white = 14/33 and Same color = 17/33.
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
**explanation:** Let p denote the price (in dollars) the retailer charges per umbrella, and let q denote the daily quantity demanded. The demand function is q = 60 - 3p, valid for 0 <= p <= 20. Fixed daily cost is $120 and variable (acquisition) cost per umbrella is $4.

Daily revenue equals p * q = p * (60 - 3p). Daily variable cost equals 4 * q = 4 * (60 - 3p). The daily profit function Pi(p) is therefore:

Pi(p) = p*(60 - 3p) - 4*(60 - 3p) - 120

Factoring the first two terms:

Pi(p) = (p - 4)*(60 - 3p) - 120

Expanding:

Pi(p) = 60p - 3p^2 - 240 + 12p - 120

Pi(p) = -3p^2 + 72p - 360

Because Pi(p) is a downward-opening quadratic in p (leading coefficient -3 is negative), it has a unique global maximum at its vertex. The vertex occurs at:

p = -72 / (2 * (-3)) = -72 / (-6) = 12

Since p = 12 lies within the feasible domain 0 <= p <= 20, this is the valid optimal price.

At p = 12: q = 60 - 3*(12) = 24 umbrellas; revenue = 12 * 24 = 288; variable cost = 4 * 24 = 96; fixed cost = 120; Pi(12) = 288 - 96 - 120 = 72.

Evaluating Pi(p) at each remaining candidate price confirms no alternative achieves a higher profit:

- p = 4: q = 48; Pi = 4*48 - 4*48 - 120 = 0 - 120 = -120
- p = 8: q = 36; Pi = 8*36 - 4*36 - 120 = 288 - 144 - 120 = 24
- p = 12: Pi = 72 (computed above)
- p = 18: q = 6; Pi = 18*6 - 4*6 - 120 = 108 - 24 - 120 = -36

The profit function rises from p = 4 through p = 12 and then falls, confirming p = 12 as the unique maximum within the candidate set and the feasible domain.

Among the other candidates: p = 4 sets price equal to unit acquisition cost, so every unit sold contributes $0 toward fixed costs, producing a loss of exactly $120. At p = 8 there is a positive contribution margin but the quadratic has not reached its peak, yielding only $24 in profit. At p = 18 demand falls to 6 units, insufficient to cover fixed costs, producing a loss of $36. The value 72 is the maximum profit itself (the column 2 answer) and is not a valid price.

The correct answers are Optimal price = 12 and Maximum daily profit = 72.
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
**explanation:** A percentage markup applied to a cost price yields the selling (list) price, and a percentage discount applied to that list price yields the final price paid. Let C denote the wholesale cost, L denote the list price, and P denote the loyalty price.

Define the variables and translate the prompt into equations.

- C = 800 (given wholesale cost in dollars)
- A 25% markup means the list price equals the cost plus 25% of the cost: L = C + 0.25 * C = C * (1 + 0.25) = 1.25 * C
- A 10% loyalty discount means the customer pays 90% of the list price: P = L * (1 - 0.10) = 0.90 * L

Solve for the list price (Column 1).

Substituting C = 800 into the markup equation:

L = 1.25 * 800 = 1,000

The list price is $1,000.

Solve for the loyalty price (Column 2).

Substituting L = 1,000 into the discount equation:

P = 0.90 * 1,000 = 900

The loyalty price is $900.

Verify against the candidate values.

The candidate set is {$720, $880, $900, $1,000, $1,080}. The computed list price $1,000 appears in the set, and the computed loyalty price $900 also appears in the set. Both values are therefore valid selections.

Common errors to rule out. One might mistakenly apply the 25% markup to the loyalty price rather than to the wholesale cost, or compute the discount as 10% of the cost ($80) rather than 10% of the list price ($100). Either error yields values not consistent with the problem statement and not supported by the candidate values $1,000 and $900. Another error is to treat the 10% discount as reducing the price by $10 rather than by 10% of $1,000 = $100, which would produce $990 — a value absent from the candidate set, confirming that interpretation is incorrect.

The correct answers are List Price = $1,000 and Loyalty Price = $900.
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
**explanation:** **Governing Principle.** A claim "can be inferred" from a data set if and only if it follows necessarily from the stated data, with no additional assumptions required. A causal claim, by contrast, asserts that one variable produces changes in another. Observational data cannot establish causation when a confounding explanation — such as selection bias — accounts equally well for the observed difference.

**Setup.** Let P_WFH denote the average productivity rating of employees who work from home at least 3 days per week, and let P_OFC denote the average productivity rating of employees who work in the office full time. The study reports:

P_WFH = 82 out of 100
P_OFC = 74 out of 100

Therefore P_WFH > P_OFC, specifically 82 > 74, a difference of 82 - 74 = 8 rating points.

**Column 1 — Can be Inferred.**

Each candidate is evaluated against the standard: does it follow necessarily from P_WFH = 82 and P_OFC = 74?

- "WFH employees have higher average productivity ratings than full-time in-office employees." Since 82 > 74, this is a direct restatement of the reported figures. No assumption beyond the data is required. This statement is supported.

- "Requiring all employees to WFH at least 3 days per week would raise the company's average rating." This is a policy prediction. It assumes that mandating WFH would replicate the observed difference, which depends on causal assumptions the data do not establish. Not inferable.

- "The highest-performing employees self-select into WFH arrangements." This is a proposed mechanism — a hypothesis about why the gap exists. The data report a gap; they say nothing about how employees came to be in each group. Not inferable.

- "The productivity rating scale penalizes visible in-office behaviors such as collaboration time." This is a claim about measurement methodology. The data provide no information about how the rating scale is constructed. Not inferable.

- "WFH employees benefit from fewer interruptions, which explains their performance advantage." This asserts a causal mechanism (fewer interruptions leading to higher performance). The data contain no information about interruption rates. Not inferable.

The only statement that follows necessarily from P_WFH = 82 and P_OFC = 74 is the first: WFH employees have higher average productivity ratings than full-time in-office employees.

**Column 2 — Why Not Causal.**

Each statement is now evaluated for whether it best identifies a reason the observed difference in average ratings does not establish that WFH causes higher productivity. The logical requirement is a plausible alternative explanation — one that accounts for the gap without invoking a causal link from WFH to productivity.

- "Requiring all employees to WFH at least 3 days per week would raise the company's average rating." This is itself a causal claim and offers no explanation for why causation is absent. It does not serve as a challenge to the causal interpretation.

- "The highest-performing employees self-select into WFH arrangements." This identifies a classic confound: if employees who already have high productivity ratings are the ones who choose (or are permitted) to work from home, then the group difference reflects pre-existing ability differences rather than any effect of WFH. The direction of causation would run from high performance to WFH eligibility, not from WFH to high performance. This is the correct alternative explanation.

- "The productivity rating scale penalizes visible in-office behaviors such as collaboration time." This could explain a measurement artifact, but it does not address the underlying causal question — it raises a different methodological concern (rating validity) rather than explaining whether WFH itself produces the gap. It is a weaker and less direct challenger to the causal inference than selection bias.

- "WFH employees benefit from fewer interruptions, which explains their performance advantage." This actually supports the causal claim — it proposes a mechanism by which WFH causes higher productivity. It therefore cannot be the answer to why the data fail to establish causation.

The statement that best explains why the data do not establish a causal relationship is that the highest-performing employees self-select into WFH arrangements, because it provides a specific alternative (selection bias) that fully accounts for the observed gap without requiring WFH to have any causal effect.

The correct answers are Can be Inferred = WFH employees have higher average productivity ratings than full-time in-office employees and Why Not Causal = The highest-performing employees self-select into WFH arrangements.
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
**explanation:** **Governing principle.** Two functions intersect when they produce equal output for the same input. We set P(t) = Q(t) and solve for the value of t at which that equality holds, then substitute back to find the shared population value.

**Defining variables.** Let t represent the number of decades elapsed (t >= 0). The two population models are:

- P(t) = 500 x 2^t (Town A, exponential growth)
- Q(t) = 32,000 / 2^t (Town B, exponential decay)

We seek t*, the decade at which P(t*) = Q(t*), and V = P(t*) = Q(t*), the shared population at that point.

**Setting up and solving for t*.**

Setting the two expressions equal:

500 x 2^t = 32,000 / 2^t

Multiplying both sides by 2^t eliminates the denominator on the right:

500 x 2^t x 2^t = 32,000

Applying the exponent rule 2^t x 2^t = 2^(2t):

500 x 2^(2t) = 32,000

Dividing both sides by 500:

2^(2t) = 32,000 / 500 = 64

Expressing 64 as a power of 2 — since 2^1 = 2, 2^2 = 4, 2^3 = 8, 2^4 = 16, 2^5 = 32, 2^6 = 64 — we obtain:

2^(2t) = 2^6

Because the bases are identical and positive (and not equal to 1), the exponents must be equal:

2t = 6, therefore t = 3

Thus t* = 3 decades.

**Solving for V.**

Substituting t* = 3 into P(t):

P(3) = 500 x 2^3 = 500 x 8 = 4,000

Verification via Q(t):

Q(3) = 32,000 / 2^3 = 32,000 / 8 = 4,000

Both models yield the same output at t = 3, confirming V = 4,000.

**Eliminating the remaining candidates.**

The candidate list for column 1 includes t = 2 and t = 4, and the candidate list for column 2 includes 2,000 and 8,000 as plausible distractors. We verify these are incorrect:

- t = 2: P(2) = 500 x 4 = 2,000 and Q(2) = 32,000 / 4 = 8,000. The outputs differ, so t = 2 is not an intersection.
- t = 4: P(4) = 500 x 16 = 8,000 and Q(4) = 32,000 / 16 = 2,000. The outputs again differ, so t = 4 is not an intersection.

The distractor values 2,000 and 8,000 each appear as one model's output at t = 2 or t = 4, not as a shared value. Only at t = 3 do the two models agree, and the shared value there is 4,000, not any other candidate in the list.

The correct answers are t* (decades) = 3 and V (shared population) = 4,000.
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
**explanation:** **Governing principle.** In a Two-Part Analysis causal-chain question, two distinct questions are posed of the candidate statements. For the "Strengthens" column, the task is to find the statement that makes the argument's conclusion more likely to be true — typically by supplying evidence for an implicit assumption the argument requires. For the "Gap in Chain" column, the task is to find the statement that identifies a place in the stated causal sequence where the chain could break without the argument acknowledging the possibility.

**The economist's stated causal chain.** Each step may be labeled explicitly:

- Step A: A central bank rate hike causes consumer borrowing to decrease.
- Step B: A decrease in consumer borrowing causes spending on durable goods to decline.
- Step C (conclusion): Raising interest rates reduces overall consumer spending.

The inferential move from Step B to Step C is the critical one. The argument implicitly requires that durable-goods spending is a large enough fraction of total consumer spending that a decline in durable-goods spending produces a material decline in overall consumer spending. If durable goods represent, say, 3% of total consumer spending, then Step C does not follow from Step B even if Steps A and B are both valid.

**Analysis of each candidate for Column 1 (Strengthens).**

Let S_d denote spending on durable goods and S_total denote total consumer spending.

- "Durable goods account for approximately 60% of total consumer spending": this states S_d / S_total is approximately 0.60. If durable-goods spending declines significantly, then because durable goods constitute roughly 60% of the total, overall spending must also decline materially. This directly closes the implicit assumption gap between Step B and Step C. It is the strongest strengthener of the conclusion.

- "A cross-country study found that central bank rate hikes correlate with reduced durable goods purchases": this provides correlational evidence consistent with the overall chain from Step A through Step B, which the argument already asserts as given premises. Supporting already-stated premises does not strengthen the conclusion as directly as supplying a missing logical bridge.

- "Some consumers increase their saving when interest rates rise, which further reduces their discretionary spending": this introduces an additional causal mechanism outside the stated chain. It is consistent with the conclusion but does not directly address whether the durable-goods channel alone is sufficient to move overall spending.

- "The central bank has raised interest rates four times in the past two years": this is historical background about past policy actions. It does not address whether future rate hikes will reduce overall spending and therefore does not logically strengthen the prospective conclusion.

- "When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead": this suggests that one borrowing channel closing prompts consumers to open another, which would tend to weaken rather than strengthen the argument.

The credited answer for Column 1 is therefore "Durable goods account for approximately 60% of total consumer spending," because it supplies the quantitative bridge that makes the step from "durable-goods spending falls" to "overall consumer spending falls" logically valid.

**Analysis of each candidate for Column 2 (Gap in Chain).**

The question now is which statement reveals a place where the stated causal chain could fail.

- "When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead": this directly targets Step A. The argument assumes that higher interest rates reduce consumer borrowing in the aggregate. If consumers who can no longer afford mortgage-rate borrowing simply migrate to credit-card borrowing, then aggregate borrowing may not fall, durable-goods purchases may continue at roughly the same level, and the chain breaks at its first link. This is the most significant gap because it challenges the foundational premise on which every subsequent step depends. If consumers substitute one credit channel for another, the causal mechanism the economist describes never gains traction.

- "Durable goods account for approximately 60% of total consumer spending": as established above, this fills a gap; it does not reveal one.

- "A cross-country study found that rate hikes correlate with reduced durable goods purchases": this supports the overall chain and does not reveal a gap.

- "The central bank has raised interest rates four times in the past two years": this is extraneous historical data that neither supports nor attacks any link in the chain.

- "Some consumers increase their saving when interest rates rise": this is directionally consistent with the economist's conclusion and therefore does not reveal a gap.

The credited answer for Column 2 is therefore "When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead," because it identifies that the first causal link — higher rates reduce borrowing — need not hold if consumers substitute across borrowing instruments.

The correct answers are Strengthens = Durable goods account for approximately 60% of total consumer spending and Gap in Chain = When mortgage borrowing becomes costlier, many consumers shift to credit card spending instead.
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
**explanation:** **Identifying the Conclusion.**

In argument analysis, the conclusion is the claim that the author intends to establish and that the remaining statements are offered to support. The premises are the evidence; the conclusion is what that evidence is meant to prove.

The manager's argument contains the following statements:

- "Our restaurant introduced a new menu last month." (background fact)
- "Customer visits increased by 15% compared to the same month last year." (evidence)
- "Customers rated the new dishes an average of 4.5 out of 5." (evidence)
- "The new menu is a clear success." (the claim the preceding evidence is meant to establish)

"Customer visits increased by 15% last month" and "Customers rated the new dishes an average of 4.5 out of 5" both function as premises — they are presented as factual observations. "The new menu is a clear success" is the claim those observations are marshaled to support. It is therefore the conclusion of the argument.

**Identifying the Strongest Alternative Explanation.**

An alternative explanation, in the context of causal reasoning, is a statement that, if true, could independently account for the observed phenomenon — here, the 15% increase in customer visits — without crediting the cause the author proposes (the new menu).

The remaining candidates are evaluated as follows:

- "Customer visits increased by 15% last month" — this is the explanandum, the phenomenon requiring explanation. It cannot serve as its own explanation.
- "Customers rated the new dishes an average of 4.5 out of 5" — this is a second premise within the original argument. It describes satisfaction with the menu itself, making it consistent with the author's conclusion rather than an alternative to it.
- "The restaurant reduced its prices by 10% to promote the new menu" — a price reduction could attract additional customers, but the phrasing ties the reduction directly to promoting the new menu. This makes it at least partially connected to the new menu as a cause, weakening its force as a purely independent alternative explanation.
- "The restaurant's closest competitor closed permanently the prior month" — this event is entirely independent of the new menu. If the nearest competitor shut down, its former customers would plausibly redirect their visits to this restaurant. This alone would be sufficient to produce a measurable increase in customer visits, with no causal role for the new menu whatsoever.

The competitor's permanent closure provides the strongest alternative explanation because it is causally independent of the new menu, it is temporally proximate (occurring the prior month, just before the measured increase), and it directly predicts a redirection of consumer traffic to the restaurant in question.

The correct answers are Conclusion = The new menu is a clear success and Alt Explanation = The restaurant's closest competitor closed permanently the prior month.
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
**explanation:** A causal conclusion of the form "intervention X caused outcome Y" can be weakened by identifying an alternative explanation that accounts for Y without X, and can be supported by evidence that more directly isolates X as the operative cause of Y.

The company's annual turnover fell from 22% to 13% — a drop of 22 - 13 = 9 percentage points — over the 18 months following the launch of the mentorship program. The conclusion is that the mentorship program caused this decline.

A weakener must undermine the link between the mentorship program and the observed turnover reduction. The most effective weakener introduces an alternative explanation powerful enough to account for the 9-point decline on its own.

"Turnover at peer companies in the same sector dropped by an average of 10 points over the same period, with no mentorship programs." If companies in the same sector experienced a 10-point decline without any mentorship program, the 9-point decline at this company falls entirely within what sector-wide forces alone would predict. The causal role of the program is therefore rendered unnecessary to explain the data. This is a classic alternative-cause weakener: it provides an independent mechanism — sector-wide conditions — that fully accounts for the magnitude of the effect, severing the claimed causal link.

"A company-wide salary increase of 15% was implemented three months before the mentorship program launched." This introduces a confounding variable internal to the company. However, it does not supply an external benchmark showing that the entire 9-point drop is accounted for by a non-program factor; it merely identifies one possible confound. The sector-wide benchmark is a more serious weakener because it demonstrates that an equivalent or larger decline occurred in the absence of any mentorship program, making the program causally superfluous.

The remaining candidates do not introduce alternative causal explanations for the turnover reduction and therefore do not weaken the conclusion.

A supporter must make the causal link between the mentorship program and reduced turnover more credible. The strongest support comes from evidence that isolates the program as the operative variable.

"Employees who participated in the mentorship program left the company at half the rate of employees who did not participate." This is an internal, within-company controlled comparison. Defining r_p as the turnover rate for program participants and r_n as the turnover rate for non-participants, the statement establishes r_p = (1/2) * r_n. Because both groups exist within the same company during the same period, they are exposed to the same salary increases, industry conditions, and macroeconomic factors. The only systematic difference between the groups is participation in the mentorship program. The finding therefore isolates the program's effect and directly supports a causal attribution.

"Post-program surveys show that mentees cite career-growth opportunities as their primary reason for staying." This is consistent with the mentorship program helping retention, but it is limited by self-report bias and does not control for other variables. It is weaker support than the direct rate comparison above.

"The program required a significant time commitment that temporarily reduced measured output." This observation concerns productivity, not turnover, and neither strengthens nor weakens the causal conclusion about retention.

The weakener works by showing that a 10-point sector-wide decline — larger than the company's own 9-point decline — occurred simultaneously in companies with no mentorship program, making external conditions a fully sufficient explanation. The supporter works by holding all other factors constant within the same company and showing a 2:1 turnover-rate differential that aligns precisely with program participation status.

The correct answers are Weakens = Turnover at peer companies in the same sector dropped by an average of 10 points over the same period, with no mentorship programs and Supports = Employees who participated in the mentorship program left the company at half the rate of employees who did not participate.
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
**explanation:** **Conditional Probability — Sequential Draws Without Replacement**

We apply the classical definition of probability and the formal definition of conditional probability. For any event A, P(A) = (number of favorable outcomes) / (total number of equally likely outcomes). For conditional probability, P(B | A) = P(A and B) / P(A), which in the case of sequential draws without replacement reduces to a direct count on the reduced sample space after the first draw has occurred.

**Setting up the problem.**

Let the bag contain 5 red marbles and 7 blue marbles, for a total of 5 + 7 = 12 marbles. Define:

- P1 = P(first marble is red)
- P2 = P(second marble is red | first marble was red)

**Computing P1.**

On the first draw, all 12 marbles are present and each is equally likely to be selected. There are 5 favorable outcomes (any of the 5 red marbles). Therefore:

P1 = 5/12

Among the candidate values, 5/12 is listed and is the unique correct match.

**Computing P2.**

We now condition on the event that the first marble drawn was red. Because the draw is without replacement, that red marble is removed from the bag before the second draw. The bag therefore contains:

- Red marbles remaining: 5 - 1 = 4
- Blue marbles remaining: 7 (unchanged)
- Total marbles remaining: 4 + 7 = 11

On the second draw, the reduced sample space has 11 equally likely outcomes, of which 4 are favorable (red). Therefore:

P2 = 4/11

Among the candidate values, 4/11 is listed and is the unique correct match.

**Checking the distractors.**

The value 5/11 would correspond to the probability the second marble is red given the first marble drawn was blue (leaving all 5 red marbles in an 11-marble pool) — a different conditional event. The value 4/12 incorrectly applies the reduced numerator to the original denominator, conflating two different sample spaces. The value 1/12 has no direct interpretation here, and 7/12 is the probability the first marble drawn is blue, not red. None of these match the events defined in the prompt.

The correct answers are P1 (first red) = 5/12 and P2 (second red, given first red) = 4/11.
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
**explanation:** Let C = the number of acres planted with corn and W = the number of acres planted with wheat. The problem imposes two constraints and one objective.

**Constraint 1 — land:** The farmer plants all 200 acres, so

C + W = 200

**Constraint 2 — labor:** Each corn acre requires 3 labor-days and each wheat acre requires 5 labor-days, with at most 800 labor-days available:

3C + 5W <= 800

**Objective:** Maximize total profit P = 400C + 600W.

**Reducing to one variable.**

From Constraint 1, C is expressed in terms of W:

C = 200 - W

Substituting into the labor constraint:

3(200 - W) + 5W <= 800
600 - 3W + 5W <= 800
600 + 2W <= 800
2W <= 200
W <= 100

The non-negativity conditions W >= 0 and C = 200 - W >= 0 give W <= 200. The binding upper bound is therefore W <= 100.

**Expressing profit in terms of W.**

Substituting C = 200 - W into the profit function:

P = 400(200 - W) + 600W
P = 80000 - 400W + 600W
P = 80000 + 200W

Because the coefficient of W is positive (200 > 0), profit is strictly increasing in W. Profit is therefore maximized by setting W as large as the constraints permit. The feasible maximum is W = 100.

**Solving for C.**

With W = 100:

C = 200 - 100 = 100

**Verification.**

Land: C + W = 100 + 100 = 200. The acreage constraint is satisfied exactly.
Labor: 3(100) + 5(100) = 300 + 500 = 800. The labor constraint is satisfied exactly (the bound is tight).
Profit: 400(100) + 600(100) = 40000 + 60000 = 100000.

For comparison, at W = 50, C = 150: profit = 400(150) + 600(50) = 60000 + 30000 = 90000, which is less than 100000. At W = 0, C = 200: profit = 400(200) = 80000, still less. Any W > 100 paired with C = 200 - W violates the labor constraint (labor = 800 + 2(W - 100) > 800). Therefore the profit-maximizing feasible solution is uniquely C = 100, W = 100.

The correct answers are C (corn acres) = 100 and W (wheat acres) = 100.
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
**explanation:** Governing framework. A Two-Part Analysis question requires identifying, for one column, the statement that most seriously undermines the conclusion, and for the other column, the statement that names a critical unstated assumption the argument takes for granted. These are distinct logical roles: a weakener supplies evidence that breaks a causal or inferential link the argument relies on; an unstated assumption is a premise the argument needs to be true but never explicitly states.

Reconstructing the argument.

Let V = the average number of vacation days taken by "high-vacation" employees (>= 15 days per year).
Let L = the average number of vacation days taken by "low-vacation" employees (< 15 days per year).
Let P_H = productivity of high-vacation employees, P_L = productivity of low-vacation employees.

The survey establishes: P_H = 1.30 * P_L, i.e., a 30% productivity premium associated with taking at least 15 vacation days.

Let D = the annual productivity loss TechCorp incurs from overworked employees = $2,000,000.
Let R = the projected recovery if TechCorp mandates 15 minimum vacation days.

The consulting firm concludes: R >= $1,500,000 (i.e., R >= 0.75 * D).

Identifying the inferential chain. The argument moves through three links:

1. The 30% productivity difference is caused by vacation, not merely correlated with it.
2. Mandating vacation will function as genuine rest and thereby deliver that productivity benefit.
3. The survey's findings generalize to TechCorp's specific workforce and industry context.

Evaluating each candidate for Column 1 (Weakens).

"Most TechCorp employees will continue performing work tasks during mandated vacation time, meaning the time off will not function as genuine rest." This directly attacks Link 2. If employees work during vacation, mandated time off produces no genuine rest, the causal mechanism that was supposed to generate the productivity gain is broken entirely, and the recovery projection collapses. This is a direct mechanism failure.

"The $2 million productivity loss estimate was derived from a study of a different industry with significantly lower workloads." This undermines the reliability of the $2 million baseline figure. However, the conclusion is about recovering $1,500,000 of whatever the true loss is. If the baseline is unreliable, the conclusion is weakened, but the weakening is indirect — it attacks the measurement of D rather than the causal mechanism behind R.

"The 30% productivity difference between high-vacation and low-vacation employees reflects that high performers self-select into taking longer vacations, not that vacation itself causes productivity gains." This attacks Link 1 (causation vs. correlation). It weakens the argument substantially by showing the 30% figure cannot be imported as a causal effect of mandating vacation. However, this statement also fits precisely as the critical unstated assumption (see below), making it the stronger candidate for Column 2.

"Mandating vacation will create scheduling complexity that increases management overhead costs." This raises a countervailing cost, which is relevant to net benefit but does not strike at the core conclusion that R >= $1,500,000 in productivity recovery. It weakens net ROI, not the core productivity-recovery claim.

"The $1.5 million recovery target represents only 75% of the stated $2 million loss, leaving a residual gap." This is a restatement of arithmetic already explicit in the argument (1,500,000 / 2,000,000 = 0.75). It does not introduce any new information and therefore does not weaken anything.

The strongest weakener is the first option: it identifies a concrete mechanism failure — employees continuing to work during vacation — that directly prevents the causal chain from operating, regardless of whether vacation causes productivity gains in principle.

Evaluating each candidate for Column 2 (Unstated Assumption).

An unstated assumption is a premise that must be true for the conclusion to follow, but that the argument never articulates.

"Most TechCorp employees will continue performing work tasks during mandated vacation time..." This is the negation of an assumption the argument makes, not the assumption itself. Framed as an assumption, the argument assumes employees will not work during vacation. But as stated, this option is a factual claim about TechCorp's employees that weakens the mechanism — it is better deployed as a weakener.

"The $2 million productivity loss estimate was derived from a study of a different industry..." This is a factual statement about the provenance of a data point, not an assumption embedded in the argument's inferential chain.

"The 30% productivity difference reflects that high performers self-select into taking longer vacations, not that vacation itself causes productivity gains." Precisely stated, this option describes what is true if the argument's critical unstated assumption is false. The argument's conclusion requires that the 30% productivity premium is caused by vacation itself, not merely a selection effect. The argument never states this; it assumes it. This option makes that hidden assumption visible by articulating the rival explanation — it is the classic correlation-vs.-causation assumption that must hold for the survey evidence to support the conclusion. This is the most critical unstated assumption.

"Mandating vacation will create scheduling complexity..." This is a potential side effect, not an assumption embedded in the argument's inferential chain.

"The $1.5 million recovery target represents only 75%..." This is pure arithmetic and names no assumption.

Therefore, the unstated assumption is the third option: the argument silently assumes that vacation causes the productivity gain rather than that productivity differences explain vacation-taking behavior.

Verification by negation test. Negating the unstated assumption — that is, positing that high performers merely self-select into taking more vacation — means the 30% figure carries no causal weight. Mandating vacation for lower performers would not replicate that premium, and R >= $1,500,000 would not follow. The argument collapses entirely, confirming this is a necessary and unstated assumption.

Summary of derivation.

For Weakens: the mechanism-failure option is preferred over the correlation/causation option because (a) it introduces new empirical content about TechCorp specifically, (b) it severs the causal link at the point of implementation rather than at the statistical inference stage, and (c) the correlation/causation option is more precisely the unstated assumption.

For Unstated Assumption: the self-selection option is the only candidate that names a premise the argument must silently rely on — that the survey's 30% gap reflects a causal effect of vacation, not a selection artifact.

The correct answers are Weakens = Most TechCorp employees will continue performing work tasks during mandated vacation time, meaning the time off will not function as genuine rest and Unstated Assumption = The 30% productivity difference between high-vacation and low-vacation employees reflects that high performers self-select into taking longer vacations, not that vacation itself causes productivity gains.
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
**explanation:** **The Chinese Remainder Theorem and modular arithmetic** govern this problem. A positive integer N satisfies two simultaneous congruence conditions; the task is to find the smallest such N (call it S) and then compute S mod 28.

**Setting up the congruences.**

Let N be a positive integer. The two conditions translate directly into congruence notation:

- N = 7q + 3 for some non-negative integer q (remainder 3 when divided by 7)
- N = 4p + 1 for some non-negative integer p (remainder 1 when divided by 4)

We seek the smallest positive integer N satisfying both simultaneously.

**Solving by substitution.**

From the first condition, N takes the values 3, 10, 17, 24, 31, 38, ... (adding 7 each time). We test each against the second condition (N mod 4 = 1):

- N = 3: 3 / 4 gives remainder 3. Fails.
- N = 10: 10 / 4 gives remainder 2. Fails.
- N = 17: 17 / 4 = 4 remainder 1. Satisfies both conditions.

Therefore S = 17 is the smallest positive integer satisfying N mod 7 = 3 and N mod 4 = 1.

**Verification of S = 17.**

- 17 = 7(2) + 3, so 17 mod 7 = 3. Confirmed.
- 17 = 4(4) + 1, so 17 mod 4 = 1. Confirmed.

**Why the period is 28.**

By the Chinese Remainder Theorem, since gcd(7, 4) = 1, the two moduli are coprime, and the combined solution repeats with period 7 x 4 = 28. The next values satisfying both conditions are 17 + 28 = 45, 17 + 56 = 73, and so on. This confirms that any solution has the form N = 17 + 28k for non-negative integer k.

**Computing R = S mod 28.**

We compute 17 / 28. Since 17 < 28, the quotient is 0 and the remainder is 17 itself:

17 = 28(0) + 17, therefore R = 17.

**Matching against the candidate values.**

The candidate row values are 3, 10, 17, 21, 24, and 31. For Column 1, S = 17 appears in the list. For Column 2, R = 17 also appears in the list. No other candidate satisfies both conditions simultaneously: for instance, N = 24 satisfies N mod 7 = 3 but 24 mod 4 = 0, not 1; N = 21 satisfies N mod 4 = 1 but 21 mod 7 = 0, not 3.

The correct answers are S (smallest N) = 17 and R (S mod 28) = 17.
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
**explanation:** **Setup and variable definitions.**

Let E(n) denote the efficiency during the n-th hour of the shift, expressed as a decimal. The problem states that E(1) = 1.00 and that each subsequent hour reduces efficiency by 0.10, giving the arithmetic sequence:

E(n) = 1.00 - 0.10(n - 1)

At full efficiency the factory produces 200 units per hour, so the output during hour n is:

Output(n) = 200 * E(n) = 200 * [1.00 - 0.10(n - 1)]

**Finding H — the count of complete hours during which efficiency is at least 50%.**

The condition E(n) >= 0.50 requires:

1.00 - 0.10(n - 1) >= 0.50

Subtracting 1.00 from both sides:

-0.10(n - 1) >= -0.50

Dividing both sides by -0.10 and reversing the inequality:

n - 1 <= 5, therefore n <= 6

The largest integer satisfying this condition is n = 6. The table below lists each hour:

| Hour n | E(n) | E(n) >= 50%? |
|--------|------|--------------|
| 1 | 100% | Yes |
| 2 | 90% | Yes |
| 3 | 80% | Yes |
| 4 | 70% | Yes |
| 5 | 60% | Yes |
| 6 | 50% | Yes |
| 7 | 40% | No |

Hour 7 yields E(7) = 1.00 - 0.10(6) = 0.40, which falls below 0.50 and is therefore excluded. The number of qualifying complete hours is H = 6.

**Finding T — total units produced during those H hours.**

Summing Output(n) for n = 1 through 6:

- Hour 1: 200 * 1.00 = 200
- Hour 2: 200 * 0.90 = 180
- Hour 3: 200 * 0.80 = 160
- Hour 4: 200 * 0.70 = 140
- Hour 5: 200 * 0.60 = 120
- Hour 6: 200 * 0.50 = 100

T = 200 + 180 + 160 + 140 + 120 + 100

Adding in pairs: (200 + 100) + (180 + 120) + (160 + 140) = 300 + 300 + 300 = 900.

Alternatively, because the six output values form an arithmetic sequence with first term 200, last term 100, and six terms, the sum equals (6/2) * (200 + 100) = 3 * 300 = 900.

**Matching to the candidate values.**

From the list {5, 6, 7, 700, 800, 900, 1,000}, the value 6 corresponds to H and the value 900 corresponds to T. No other pairing is consistent with the constraints.

The correct answers are H (hours >= 50%) = 6 and T (total units) = 900.
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
**explanation:** A Two-Part Analysis question of this type asks the solver to isolate the conclusion of the argument and to identify the central unstated assumption — the suppressed premise without which the link from evidence to conclusion fails.

**Identifying the conclusion.** The conclusion is the claim the argument is designed to establish; it is supported by the premises and does not itself serve as support for another claim. The argument offers two explicit evidence statements: sales fell 20%, and the advertising budget was cut in half. Both are presented in support of the claim introduced by "Therefore": the reduced advertising caused the drop in sales. That causal statement is what the arguer is trying to prove, so it is the conclusion.

**Identifying the central unstated assumption.** The inference follows a post hoc pattern: two events coincided in the same quarter, so one is claimed to have caused the other. For that causal leap to hold, the argument must assume that no other factor — such as a new competitor, a price increase, a supply shortage, or a broader market downturn — materially contributed to the 20% decline. The statement "No other factor materially contributed to the decline in sales" is therefore the load-bearing assumption.

**Confirming by negation.** If one negates the assumption — suppose some other factor did materially contribute to the decline — the conclusion collapses, because the drop could then be explained without reference to advertising. A negation that destroys the argument confirms the statement is the necessary assumption.

**Evaluating the remaining candidates.** "Sales of the flagship product fell 20% last quarter" and "The advertising budget was cut by half last quarter" are explicit premises, not the conclusion and not unstated. "Advertising is the only driver of sales for every product" is a universal generalization far stronger than the argument needs; the argument makes only a local causal claim about one product in one quarter, so this sweeping principle is not the minimal assumption doing the work.

The correct answers are Conclusion = The reduced advertising caused the drop in sales and Assumption = No other factor materially contributed to the decline in sales.
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
**explanation:** **Governing principle.** A statement strengthens a causal argument when it provides evidence of a genuine causal link and rules out competing explanations; it weakens the argument when it introduces an alternative cause that could independently produce the observed effect. Each column is evaluated as an independent sub-question.

**The argument.** The company observes that daily shake drinkers lost an average of 6 pounds and concludes that the shake is causally effective for weight loss. The logical gap is the leap from correlation to causation: other factors changing alongside shake consumption could account for the loss.

**Evaluating the candidates for Strengthens.** The randomized-trial statement is decisive. Random assignment neutralizes pre-existing differences between groups in expectation, and a placebo control isolates the effect of the shake itself. Because the shake group lost 5 pounds while an otherwise identical placebo group lost none, the difference is attributable to the shake rather than to dieting trends, seasonal behavior, or self-selection. This closes the correlation-to-causation gap and is the strongest available support. The other candidates — the shake's flavor count, its protein content, and customer taste preferences — speak to product features or satisfaction, not to whether the shake causes weight loss, so none strengthens the causal claim.

**Evaluating the candidates for Weakens.** The exercise statement introduces a plausible simultaneous alternative cause. If the same people who drank the shake daily also started exercising five times a week during the study, then the 6-pound average loss could be attributable to the new exercise regimen rather than to the shake. Because both behaviors varied together in the observational data, the argument cannot separate the two, and the causal attribution to the shake is undermined. This is a textbook alternative cause: it does not deny that weight was lost, only that the shake is the cause. The remaining candidates provide no alternative causal mechanism and are irrelevant to the inference.

The correct answers are Strengthens = In a randomized trial, those given the shake lost 5 pounds while an identical group given a placebo shake lost none and Weakens = Participants who drank the shake daily also began exercising five times a week during the study.
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
**explanation:** **Governing principle.** Each machine's rate is the reciprocal of its solo completion time, and rates add when machines work simultaneously. The job total of 1 is split between a "together" phase and a "Q-alone" phase, and the durations of the two phases must sum to the total elapsed time.

**Setting up rates.** Let the full job equal 1 unit. Machine P's rate is 1/12 job per hour and Machine Q's rate is 1/8 job per hour. Their combined rate is:

1/12 + 1/8

Using the least common denominator 24: 1/12 = 2/24 and 1/8 = 3/24, so the combined rate is 5/24 job per hour.

**Defining the phases.** Let h be the number of hours both machines work together. After P breaks down, Q works alone for the remaining (6 - h) hours at rate 1/8 job per hour. The total work done across both phases equals 1:

(5/24) * h + (1/8) * (6 - h) = 1

**Solving for h.** Multiply every term by 24 to clear denominators (note 24 * 1/8 = 3):

5h + 3(6 - h) = 24

5h + 18 - 3h = 24

2h = 6

h = 3

So the machines worked together for 3 hours.

**Solving for the fraction completed by Q alone.** After P breaks down, Q works alone for 6 - 3 = 3 hours at rate 1/8 job per hour, completing:

(1/8) * 3 = 3/8

So Q alone completes 3/8 of the job after P breaks down.

**Verification.** Together for 3 hours produces (5/24)(3) = 15/24 = 5/8 of the job; Q alone for the remaining 3 hours produces 3/8; the two sum to 5/8 + 3/8 = 1, the full job, and the total elapsed time is 3 + 3 = 6 hours, matching the prompt.

**Matching candidate values.** The candidate durations are 2.4, 3, and 4.8 hours, and the candidate fractions are 1/8, 3/8, and 1/2. The duration h = 3 satisfies the work equation, and the fraction 3/8 matches Q's solo contribution. The value 2.4 (which is 12/5, the time for P and Q to finish a whole job together) does not satisfy the broken-down scenario, and the fraction 1/2 would require Q to work alone for 4 hours, contradicting the 6-hour total.

The correct answers are Hours Together = 3 and Fraction by Q Alone = 3/8.
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
**explanation:** **Governing principle.** This cause-and-effect Two-Part Analysis requires distinguishing an alternative explanation — a statement that accounts for the observed difference through a mechanism other than the one the author assumes — from a support statement that directly strengthens the author's causal conclusion. Each column is evaluated independently.

**The argument.** The manager observes that kiosk-equipped stores process customers 15% faster and concludes that the kiosks cause the speedup, recommending a chainwide rollout. The vulnerability is the leap from a between-store correlation to causation: a confounding difference between the two sets of stores could explain the gap without the kiosks doing any work.

**Column 1 — Alternative Explanation.** The statement that kiosk-adopting stores are mostly in low-traffic suburbs with shorter lines introduces a confounding variable. If those stores already had shorter lines because of lower customer traffic, then their faster checkout times could reflect light demand rather than the kiosks. This common difference between the two store groups accounts for the 15% gap without requiring the kiosks to be the cause, making it a direct alternative explanation. The other options do not supply a competing cause: kiosk advertisements, identical cashier counts, and popularity with younger shoppers do not explain why checkout would be faster independent of the kiosks.

**Column 2 — Support.** The statement that ten matched stores saw checkout times drop 14% the month after adding kiosks is a before-and-after comparison within the same stores. Because the stores are matched and serve as their own baseline, the comparison controls for the location and traffic differences that plague the cross-store correlation. An observed drop of about 14%, close to the cited 15% gap, provides direct evidence that introducing the kiosks produces the effect, which is the strongest available support for the rollout recommendation. The advertising, cashier-count, and demographic-popularity statements describe features or preferences but offer no evidence that the kiosks cause faster checkout.

The correct answers are Alt Explanation = The stores that adopted the kiosks are mostly in low-traffic suburbs with shorter lines and Support = When ten matched stores added kiosks, their checkout times dropped 14% the following month.
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
**explanation:** In this Two-Part Analysis question the two tasks are to isolate the conclusion of the argument and to identify the central unstated assumption — the suppressed premise without which the inference from evidence to conclusion collapses.

**Identifying the conclusion.** The conclusion is the claim the argument is designed to establish; it is supported by the premises and does not itself support another claim in the argument. The argument offers two explicit evidence statements — the company switched to a four-day week in January, and turnover fell 20% by December — both introduced in support of the claim signaled by "Therefore": the four-day work week reduced turnover at the company. That final claim is what the arguer seeks to prove, so it is the conclusion.

**Identifying the central unstated assumption.** The inference is causal and built on temporal succession: the policy preceded the drop, therefore the policy caused the drop. This post hoc structure requires assuming the observed effect was not produced by some independent cause. If another factor — a hiring freeze elsewhere in the industry, a pay raise, a softening labor market that reduced outside offers, or new management — could account for the 20% drop, then the mere fact that the four-day week preceded the decline is insufficient. The argument silently relies on the premise that no other factor materially contributed to the drop. Negation confirms it is load-bearing: if some other factor did materially contribute, the conclusion is immediately undermined.

**Evaluating the remaining candidates.** "Employee turnover fell by 20% over the year" and "The company switched to a four-day work week in January" are explicit premises, not the conclusion or an unstated assumption. "A four-day work week always reduces turnover at every company" is a universal generalization far stronger than the local causal claim the argument needs; it would suffice but is not the minimal assumption actually doing the work.

The correct answers are Conclusion = The four-day work week reduced turnover at our company and Assumption = No other factor materially contributed to the observed drop in turnover.
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
**explanation:** **The logical task.** This Strengthen/Weaken Two-Part Analysis asks for the statement that best supports the causal claim and the statement that best undermines it by offering an alternative explanation. Each column is an independent sub-question.

**The argument.** The nutritionist observes that daily green-tea drinkers have lower heart-disease rates and concludes that green tea causes the lower risk. This is a causal conclusion from observational, correlational data; the central gap is the possibility of confounding variables that move together with green-tea drinking and could themselves explain the lower rates.

**Evaluating the strengthener.** "In a randomized trial, participants assigned to drink green tea daily had 18% fewer cardiac events than the control group." Random assignment is the gold standard for establishing causation: it neutralizes pre-existing differences between groups in expectation, so a measured 18% reduction in the assigned group isolates the effect of green tea itself. This directly closes the correlation-to-causation gap and is the strongest available support. The taste, retail availability, and nationwide-decline statements provide no evidence that green tea causes lower risk; the lifestyle statement weakens rather than strengthens.

**Evaluating the weakener (alternative cause).** "People who drink green tea daily also tend to exercise more and eat more vegetables." This identifies a distinct variable — a healthier overall lifestyle — that plausibly accompanies green-tea drinking and could independently produce lower heart-disease rates. The observational data cannot separate the tea from the lifestyle because they vary together, so this is a textbook alternative cause: it does not deny the lower rates but denies that green tea is the cause. The nationwide-decline statement is at best a weak ambient-trend point that applies to everyone equally and does not explain the gap between tea drinkers and non-drinkers; taste and availability are irrelevant to causation.

The correct answers are Strengthens = In a randomized trial, participants assigned to drink green tea daily had 18% fewer cardiac events than the control group and Weakens (alt cause) = People who drink green tea daily also tend to exercise more and eat more vegetables.
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
