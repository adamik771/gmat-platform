---
section: DI
topic: Table Analysis
---

## Q1 (Set 1 — Tech Company Revenue)

The following table shows quarterly revenue (in millions USD) for five tech companies in 2024.

| Company | Q1 | Q2 | Q3 | Q4 |
|---------|-----|-----|-----|-----|
| Alpha   | 120 | 135 | 140 | 155 |
| Beta    | 95  | 110 | 115 | 130 |
| Gamma   | 180 | 175 | 185 | 200 |
| Delta   | 60  | 75  | 80  | 95  |
| Epsilon | 220 | 210 | 225 | 240 |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Comparisons

For each statement, select Yes if the statement can be determined to be true based on the data in the table. Otherwise, select No.

Statement: More than half of the companies had Q4 revenue greater than their Q1 revenue by at least 25%.

- A) Yes
- B) No

**answer:** A
**explanation:** **Condition and threshold.** A company meets the stated condition if its Q4 revenue exceeds its Q1 revenue by at least 25%, which translates to the inequality (Q4 - Q1)/Q1 >= 0.25, or equivalently Q4 >= 1.25 * Q1. With five companies in the table, "more than half" requires that at least 3 companies satisfy the condition.

**Company-by-company evaluation.**

We define r = (Q4 - Q1)/Q1 for each company and test whether r >= 0.25.

- Alpha: Q1 = 120, Q4 = 155. r = (155 - 120)/120 = 35/120 ≈ 0.292, i.e., approximately 29.2%. Since 29.2% > 25%, Alpha satisfies the condition.

- Beta: Q1 = 95, Q4 = 130. r = (130 - 95)/95 = 35/95 ≈ 0.368, i.e., approximately 36.8%. Since 36.8% > 25%, Beta satisfies the condition.

- Gamma: Q1 = 180, Q4 = 200. r = (200 - 180)/180 = 20/180 ≈ 0.111, i.e., approximately 11.1%. Since 11.1% < 25%, Gamma does not satisfy the condition.

- Delta: Q1 = 60, Q4 = 95. r = (95 - 60)/60 = 35/60 ≈ 0.583, i.e., approximately 58.3%. Since 58.3% > 25%, Delta satisfies the condition.

- Epsilon: Q1 = 220, Q4 = 240. r = (240 - 220)/220 = 20/220 ≈ 0.091, i.e., approximately 9.1%. Since 9.1% < 25%, Epsilon does not satisfy the condition.

**Count and conclusion.** Three companies — Alpha, Beta, and Delta — each show a Q4-over-Q1 increase of at least 25%. Three out of five is 60%, which is greater than 50%, and therefore more than half. We can determine from the table that the statement is true.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q2 (Set 1 — Tech Company Revenue, continued)

The following table shows quarterly revenue (in millions USD) for five tech companies in 2024.

| Company | Q1 | Q2 | Q3 | Q4 |
|---------|-----|-----|-----|-----|
| Alpha   | 120 | 135 | 140 | 155 |
| Beta    | 95  | 110 | 115 | 130 |
| Gamma   | 180 | 175 | 185 | 200 |
| Delta   | 60  | 75  | 80  | 95  |
| Epsilon | 220 | 210 | 225 | 240 |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Averages

Statement: The company with the highest average quarterly revenue also had the highest Q4 revenue.

- A) Yes
- B) No

**answer:** A
**explanation:** **Average quarterly revenue** for a company is defined as the arithmetic mean of its four quarterly figures: (Q1 + Q2 + Q3 + Q4) / 4. To evaluate the statement, we compute this mean for each of the five companies, then compare the company that achieves the maximum mean against the company that achieves the maximum Q4 value.

**Computing the annual totals and averages.**

Let T denote the annual total and A the average for each company.

- Alpha: T = 120 + 135 + 140 + 155 = 550; A = 550/4 = 137.5
- Beta: T = 95 + 110 + 115 + 130 = 450; A = 450/4 = 112.5
- Gamma: T = 180 + 175 + 185 + 200 = 740; A = 740/4 = 185.0
- Delta: T = 60 + 75 + 80 + 95 = 310; A = 310/4 = 77.5
- Epsilon: T = 220 + 210 + 225 + 240 = 895; A = 895/4 = 223.75

**Identifying the company with the highest average.**

Ranking the five averages: 223.75 > 185.0 > 137.5 > 112.5 > 77.5. Therefore Epsilon holds the highest average quarterly revenue at 223.75 million USD.

**Checking Q4 revenue.**

Reading Q4 directly from the table: Epsilon records 240, Gamma 200, Alpha 155, Beta 130, and Delta 95. The maximum Q4 figure is 240, belonging to Epsilon.

**Evaluating the statement.**

The company with the highest average quarterly revenue is Epsilon (A = 223.75), and the company with the highest Q4 revenue is also Epsilon (Q4 = 240). The two identifications coincide, so the statement holds.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q3 (Set 2 — Employee Demographics)

The following sortable table shows employee data at a consulting firm.

| Employee | Department | Years | Salary (K) | Age |
|----------|------------|-------|------------|-----|
| A        | Strategy   | 5     | 120        | 32  |
| B        | Finance    | 8     | 140        | 38  |
| C        | Strategy   | 3     | 95         | 28  |
| D        | Operations | 12    | 155        | 42  |
| E        | Finance    | 2     | 85         | 26  |
| F        | Operations | 7     | 125        | 35  |
| G        | Strategy   | 10    | 150        | 40  |
| H        | Finance    | 6     | 115        | 33  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Conditional Aggregation

Statement: The average salary of employees in Strategy is higher than the average salary of employees in Finance.

- A) Yes
- B) No

**answer:** A
**explanation:** Conditional aggregation requires isolating rows that satisfy a given filter condition and computing a summary statistic — here, the arithmetic mean of Salary (K) — separately for each qualifying subset.

Identifying the relevant rows. Sorting the table by Department isolates two subsets.

Strategy employees: A (120K), C (95K), G (150K).

Finance employees: B (140K), E (85K), H (115K).

Computing the Strategy average. Let S denote the sum of Strategy salaries.

S = 120 + 95 + 150 = 365

Average_Strategy = 365 / 3 ≈ 121.67K

Computing the Finance average. Let F denote the sum of Finance salaries.

F = 140 + 85 + 115 = 340

Average_Finance = 340 / 3 ≈ 113.33K

Evaluating the inequality. The statement asserts Average_Strategy > Average_Finance. The comparison reduces to:

365/3 > 340/3

which holds because 365 > 340. The difference is (365 - 340) / 3 = 25/3 ≈ 8.33K in favor of Strategy. The statement is therefore true.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q4 (Set 2 — Employee Demographics, continued)

The following sortable table shows employee data at a consulting firm.

| Employee | Department | Years | Salary (K) | Age |
|----------|------------|-------|------------|-----|
| A        | Strategy   | 5     | 120        | 32  |
| B        | Finance    | 8     | 140        | 38  |
| C        | Strategy   | 3     | 95         | 28  |
| D        | Operations | 12    | 155        | 42  |
| E        | Finance    | 2     | 85         | 26  |
| F        | Operations | 7     | 125        | 35  |
| G        | Strategy   | 10    | 150        | 40  |
| H        | Finance    | 6     | 115        | 33  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Multi-variable Correlation

Statement: Every employee with more than 6 years of experience earns at least 120K.

- A) Yes
- B) No

**answer:** A
**explanation:** **The governing condition.** The statement asserts a universal claim: for every employee e in the table, if Years(e) > 6, then Salary(e) >= 120 (in thousands). To evaluate a universal claim, one identifies the complete set of qualifying employees and verifies that each member satisfies the salary condition; a single counterexample would falsify the statement.

**Identifying the qualifying employees.** Sorting or scanning the Years column for values strictly greater than 6 yields the following four employees:

- Employee B: Years = 8
- Employee D: Years = 12
- Employee F: Years = 7
- Employee G: Years = 10

The remaining employees — A (5 years), C (3 years), E (2 years), and H (6 years) — each have Years <= 6 and therefore fall outside the scope of the statement. Note that H has exactly 6 years, which does not satisfy the strict inequality Years > 6.

**Verifying the salary condition for each qualifying employee.** Salary >= 120 is confirmed for each of the four employees identified above:

- Employee B: Salary = 140. Is 140 >= 120? Yes.
- Employee D: Salary = 155. Is 155 >= 120? Yes.
- Employee F: Salary = 125. Is 125 >= 120? Yes.
- Employee G: Salary = 150. Is 150 >= 120? Yes.

**Conclusion.** All four employees with more than 6 years of experience satisfy the salary threshold of at least 120K. No counterexample exists in the table. The universal claim holds without exception.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q5 (Set 3 — University Rankings)

The following table shows data for six universities.

| University | Acceptance Rate | Avg SAT | Tuition (K) | Endowment (B) |
|------------|-----------------|---------|-------------|---------------|
| Alpha U    | 8%              | 1510    | 58          | 42            |
| Beta U     | 15%             | 1450    | 54          | 18            |
| Gamma U    | 12%             | 1480    | 60          | 35            |
| Delta U    | 25%             | 1380    | 48          | 8             |
| Epsilon U  | 6%              | 1520    | 62          | 55            |
| Zeta U     | 35%             | 1320    | 42          | 5             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Inverse Relationships

Statement: Universities with lower acceptance rates consistently have higher average SAT scores.

- A) Yes
- B) No

**answer:** A
**explanation:** **An inverse relationship** between two variables exists when, as one variable increases, the other consistently decreases across every ordered pair in the dataset. We assess whether acceptance rate and average SAT score satisfy this condition strictly — meaning no pair of universities violates the ordering.

**Setting up the test.** Let r denote acceptance rate (%) and s denote average SAT score for each university. The statement asserts that whenever r_i < r_j, it follows that s_i > s_j — that is, the ranking by acceptance rate (ascending) is the exact reverse of the ranking by SAT score (descending), with no exceptions among all six universities.

**Sorting by acceptance rate.** Arranging the six universities in ascending order of acceptance rate yields:

| Rank (by rate) | University | Acceptance Rate | Avg SAT |
|----------------|------------|-----------------|---------|
| 1 | Epsilon U | 6% | 1520 |
| 2 | Alpha U | 8% | 1510 |
| 3 | Gamma U | 12% | 1480 |
| 4 | Beta U | 15% | 1450 |
| 5 | Delta U | 25% | 1380 |
| 6 | Zeta U | 35% | 1320 |

**Checking each consecutive pair.** We verify that each step up in acceptance rate corresponds to a step down in SAT score:

- Epsilon U to Alpha U: rate 6% < 8% (increase of 2 pp), SAT 1520 > 1510 (decrease of 10). Condition holds.
- Alpha U to Gamma U: rate 8% < 12% (increase of 4 pp), SAT 1510 > 1480 (decrease of 30). Condition holds.
- Gamma U to Beta U: rate 12% < 15% (increase of 3 pp), SAT 1480 > 1450 (decrease of 30). Condition holds.
- Beta U to Delta U: rate 15% < 25% (increase of 10 pp), SAT 1450 > 1380 (decrease of 70). Condition holds.
- Delta U to Zeta U: rate 25% < 35% (increase of 10 pp), SAT 1380 > 1320 (decrease of 60). Condition holds.

**Assessing the full ranking.** The acceptance-rate ranks (1 = most selective) are: Epsilon U = 1, Alpha U = 2, Gamma U = 3, Beta U = 4, Delta U = 5, Zeta U = 6. The SAT ranks (1 = highest score) follow the identical ordering: Epsilon U = 1 (1520), Alpha U = 2 (1510), Gamma U = 3 (1480), Beta U = 4 (1450), Delta U = 5 (1380), Zeta U = 6 (1320). The two rank sequences are perfect mirrors of one another — a rank correlation of -1 — with no pair of universities violating the inverse ordering.

**Conclusion.** Across all six data points, every university with a lower acceptance rate has a strictly higher average SAT score, with no exception. The relationship is not merely approximate; it holds for every consecutive pair and for every possible pairing among the six universities. The statement therefore holds without qualification.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q6 (Set 3 — University Rankings, continued)

The following table shows data for six universities.

| University | Acceptance Rate | Avg SAT | Tuition (K) | Endowment (B) |
|------------|-----------------|---------|-------------|---------------|
| Alpha U    | 8%              | 1510    | 58          | 42            |
| Beta U     | 15%             | 1450    | 54          | 18            |
| Gamma U    | 12%             | 1480    | 60          | 35            |
| Delta U    | 25%             | 1380    | 48          | 8             |
| Epsilon U  | 6%              | 1520    | 62          | 55            |
| Zeta U     | 35%             | 1320    | 42          | 5             |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Conditional Statements

Statement: Every university with an endowment greater than $20 billion has an acceptance rate below 15%.

- A) Yes
- B) No

**answer:** A
**explanation:** **Governing principle.** A universal conditional statement of the form "every X with property P has property Q" is true if and only if there is no counterexample — that is, no row satisfying P while failing Q. The task is therefore to identify every university whose endowment exceeds $20 billion (the antecedent condition) and then verify that each such university also carries an acceptance rate strictly below 15% (the consequent condition).

**Identifying the relevant rows.** Scanning the Endowment (B) column, we isolate universities with endowment > 20:

- Alpha U: endowment = 42B, so 42 > 20 — qualifies.
- Beta U: endowment = 18B, so 18 > 20 is false — does not qualify.
- Gamma U: endowment = 35B, so 35 > 20 — qualifies.
- Delta U: endowment = 8B, so 8 > 20 is false — does not qualify.
- Epsilon U: endowment = 55B, so 55 > 20 — qualifies.
- Zeta U: endowment = 5B, so 5 > 20 is false — does not qualify.

The qualifying set is {Alpha U, Gamma U, Epsilon U}.

**Checking the consequent for each qualifying university.** We require acceptance rate < 15% for every member of the qualifying set.

- Alpha U: acceptance rate = 8%, and 8 < 15 — condition satisfied.
- Gamma U: acceptance rate = 12%, and 12 < 15 — condition satisfied.
- Epsilon U: acceptance rate = 6%, and 6 < 15 — condition satisfied.

No member of the qualifying set has an acceptance rate of 15% or above. Because every university satisfying the antecedent also satisfies the consequent, the conditional statement is universally true for this table. Beta U (18B, 15%), Delta U (8B, 25%), and Zeta U (5B, 35%) each fail the antecedent and are therefore irrelevant to the truth of the conditional regardless of their acceptance rates.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q7 (Set 4 — Regional Sales Data)

The following table shows sales data for five sales representatives in Q3 2024.

| Rep | Region | Calls | Deals Closed | Revenue (K) |
|-----|--------|-------|--------------|-------------|
| A   | North  | 150   | 18           | 450         |
| B   | South  | 200   | 22           | 440         |
| C   | East   | 120   | 15           | 525         |
| D   | West   | 180   | 20           | 400         |
| E   | North  | 160   | 16           | 480         |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived Metrics

Statement: The sales representative with the highest revenue per deal closed is in the East region.

- A) Yes
- B) No

**answer:** A
**explanation:** Revenue per deal closed is defined as the ratio of total revenue to the number of deals closed: revenue per deal = Revenue (K) / Deals Closed. This derived metric is computed for each of the five representatives.

Let r_i denote the revenue per deal for representative i.

- Rep A (North): r_A = 450/18 = 25.0
- Rep B (South): r_B = 440/22 = 20.0
- Rep C (East): r_C = 525/15 = 35.0
- Rep D (West): r_D = 400/20 = 20.0
- Rep E (North): r_E = 480/16 = 30.0

Ordering these values, 35.0 > 30.0 > 25.0 > 20.0 = 20.0, so the maximum revenue per deal closed is 35.0, achieved by Rep C. Consulting the table, Rep C is assigned to the East region. The statement asserts that the representative with the highest revenue per deal closed is in the East region, which is confirmed by this result.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q8 (Set 4 — Regional Sales Data, continued)

The following table shows sales data for five sales representatives in Q3 2024.

| Rep | Region | Calls | Deals Closed | Revenue (K) |
|-----|--------|-------|--------------|-------------|
| A   | North  | 150   | 18           | 450         |
| B   | South  | 200   | 22           | 440         |
| C   | East   | 120   | 15           | 525         |
| D   | West   | 180   | 20           | 400         |
| E   | North  | 160   | 16           | 480         |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Conversion Rates

Statement: The sales representative with the highest close rate (deals/calls) also has the highest total revenue.

- A) Yes
- B) No

**answer:** A
**explanation:** Close rate is defined as Deals Closed divided by Calls made. Computing this ratio for each representative: Rep A yields 18/150 = 0.120; Rep B yields 22/200 = 0.110; Rep C yields 15/120 = 0.125; Rep D yields 20/180 = 0.1111; Rep E yields 16/160 = 0.100. Ordering these values, 0.125 > 0.120 > 0.1111 > 0.110 > 0.100, so the highest close rate belongs to Rep C.

Turning to revenue, the table records: A at 450K, B at 440K, C at 525K, D at 400K, and E at 480K. The maximum is 525K, held by Rep C — the same representative who leads in close rate.

Because the representative with the highest close rate (Rep C, 0.125) is also the representative with the highest revenue (525K), the statement holds.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q9 (Set 5 — Real Estate Prices)

The following table shows median home prices (in thousands USD) across five neighborhoods over three years.

| Neighborhood | 2022 | 2023 | 2024 |
|--------------|------|------|------|
| Oakwood      | 450  | 485  | 520  |
| Maple Park   | 380  | 395  | 420  |
| Riverside    | 620  | 600  | 650  |
| Highland     | 290  | 310  | 345  |
| Pinehurst    | 520  | 555  | 580  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Growth Calculation

Statement: Every neighborhood saw a price increase from 2022 to 2024.

- A) Yes
- B) No

**answer:** A
**explanation:** **Governing principle.** A neighborhood satisfies the condition if and only if its 2024 median price strictly exceeds its 2022 median price — that is, (2024 price) - (2022 price) > 0.

We evaluate each of the five neighborhoods in turn.

**Oakwood.** The 2022 price is 450 and the 2024 price is 520. The change is 520 - 450 = 70 > 0. Condition satisfied.

**Maple Park.** The 2022 price is 380 and the 2024 price is 420. The change is 420 - 380 = 40 > 0. Condition satisfied.

**Riverside.** The 2022 price is 620 and the 2024 price is 650. Note that the 2023 price dipped to 600, which might suggest a decline, but the relevant comparison is strictly 2022 to 2024. The change is 650 - 620 = 30 > 0. Condition satisfied.

**Highland.** The 2022 price is 290 and the 2024 price is 345. The change is 345 - 290 = 55 > 0. Condition satisfied.

**Pinehurst.** The 2022 price is 520 and the 2024 price is 580. The change is 580 - 520 = 60 > 0. Condition satisfied.

All five neighborhoods recorded a strictly positive price change from 2022 to 2024. The sole potential point of confusion is Riverside, whose 2023 price of 600 fell below its 2022 price of 620; however, the statement concerns only the two-year window from 2022 to 2024, and the 2024 figure of 650 is unambiguously above 620. We find no counterexample among the five neighborhoods, therefore the statement holds universally.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q10 (Set 5 — Real Estate Prices, continued)

The following table shows median home prices (in thousands USD) across five neighborhoods over three years.

| Neighborhood | 2022 | 2023 | 2024 |
|--------------|------|------|------|
| Oakwood      | 450  | 485  | 520  |
| Maple Park   | 380  | 395  | 420  |
| Riverside    | 620  | 600  | 650  |
| Highland     | 290  | 310  | 345  |
| Pinehurst    | 520  | 555  | 580  |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Percentage Growth Comparison

Statement: Highland had the highest percentage increase in price from 2022 to 2024.

- A) Yes
- B) No

**answer:** A
**explanation:** The percentage increase in price for a neighborhood from 2022 to 2024 is computed as (price_2024 - price_2022) / price_2022 * 100. To evaluate the statement, this quantity is calculated for all five neighborhoods and compared.

Let p_22 denote the 2022 median price and p_24 the 2024 median price for each neighborhood (values in thousands USD).

- Oakwood: (520 - 450) / 450 * 100 = 70/450 * 100 = 15.56%
- Maple Park: (420 - 380) / 380 * 100 = 40/380 * 100 = 10.53%
- Riverside: (650 - 620) / 620 * 100 = 30/620 * 100 = 4.84%
- Highland: (345 - 290) / 290 * 100 = 55/290 * 100 = 18.97%
- Pinehurst: (580 - 520) / 520 * 100 = 60/520 * 100 = 11.54%

The ranking is: Highland (18.97%) > Oakwood (15.56%) > Pinehurst (11.54%) > Maple Park (10.53%) > Riverside (4.84%).

A common error is to compare absolute dollar gains rather than percentage gains. Oakwood gained 70 thousand USD in absolute terms, the largest raw increase of any neighborhood, yet its base price of 450 was considerably higher than Highland's base of 290. Because percentage growth weights the gain relative to the starting value, Highland's gain of 55 on a base of 290 outpaces Oakwood's gain of 70 on a base of 450: 55/290 = 0.1897 > 70/450 = 0.1556. Similarly, Riverside shows the largest absolute 2024 price and a positive gain of 30, but its high base of 620 yields only a 4.84% increase, the smallest of the five neighborhoods.

Therefore, Highland's percentage increase of approximately 18.97% from 2022 to 2024 is strictly greater than that of every other neighborhood in the table. The statement holds.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q11
**difficulty:** Easy
**type:** Table Analysis
**topic:** Sports Statistics

The following table shows statistics for five basketball players during a recent season:

| Player  | Games | Points | Assists | Rebounds |
|---------|-------|--------|---------|----------|
| Jordan  | 72    | 1944   | 360     | 504      |
| Lee     | 68    | 1564   | 476     | 272      |
| Martin  | 75    | 1650   | 225     | 675      |
| Nguyen  | 70    | 1820   | 350     | 420      |
| Okafor  | 65    | 1495   | 195     | 585      |

Which player averaged the most points per game?

- A) Jordan
- B) Lee
- C) Martin
- D) Nguyen
- E) Okafor

**answer:** A
**explanation:** To determine which player averaged the most points per game, we apply the definition of a per-game average: divide total points by games played. Let PPG denote points per game. For each player we compute PPG = Points / Games.

- Jordan: PPG = 1944 / 72 = 27.0
- Lee: PPG = 1564 / 68 = 23.0
- Martin: PPG = 1650 / 75 = 22.0
- Nguyen: PPG = 1820 / 70 = 26.0
- Okafor: PPG = 1495 / 65 = 23.0

Comparing the five values, we find 27.0 > 26.0 > 23.0 = 23.0 > 22.0, so Jordan's PPG of 27.0 is strictly the highest. Although Nguyen scored more total points than Martin and Lee, Nguyen played fewer games than Martin and more games than Lee; in every case the per-game rate for those players falls short of Jordan's. Total points alone do not determine the per-game leader, which is why the computation must be carried out for each player individually.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q12
**difficulty:** Easy
**type:** Table Analysis
**topic:** Survey Results

The following table shows the number of respondents in a 500-person survey who rated each of five streaming services as their favorite:

| Service   | Ages 18-29 | Ages 30-44 | Ages 45-59 | Ages 60+ |
|-----------|------------|------------|------------|----------|
| StreamA   | 60         | 45         | 30         | 15       |
| StreamB   | 25         | 40         | 35         | 20       |
| StreamC   | 30         | 30         | 25         | 10       |
| StreamD   | 20         | 15         | 30         | 45       |
| StreamE   | 5          | 10         | 5          | 5        |

Which streaming service had the largest total number of respondents selecting it as their favorite?

- A) StreamA
- B) StreamB
- C) StreamC
- D) StreamD
- E) StreamE

**answer:** A
**explanation:** To determine which service received the largest total number of respondents, each service's counts across all four age groups (18-29, 30-44, 45-59, 60+) are summed and the resulting totals are compared.

Let T(s) denote the total respondents for service s, where T(s) = (Ages 18-29) + (Ages 30-44) + (Ages 45-59) + (Ages 60+).

- StreamA: T(A) = 60 + 45 + 30 + 15 = 150
- StreamB: T(B) = 25 + 40 + 35 + 20 = 120
- StreamC: T(C) = 30 + 30 + 25 + 10 = 95
- StreamD: T(D) = 20 + 15 + 30 + 45 = 110
- StreamE: T(E) = 5 + 10 + 5 + 5 = 25

Ranking the totals in descending order: T(A) = 150 > T(B) = 120 > T(D) = 110 > T(C) = 95 > T(E) = 25, and the totals sum to the survey's 500 respondents. StreamA's total of 150 is strictly greater than that of every other service.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q13
**difficulty:** Easy
**type:** Table Analysis
**topic:** Scientific Measurements

The following table shows the boiling points (in degrees Celsius) of five liquids measured at different atmospheric pressures (in kPa):

| Liquid   | 50 kPa | 75 kPa | 100 kPa | 125 kPa |
|----------|--------|--------|---------|---------|
| Water    | 81.3   | 91.7   | 99.6    | 105.9   |
| Ethanol  | 60.2   | 70.1   | 78.4    | 84.6    |
| Acetone  | 38.8   | 47.5   | 56.1    | 62.9    |
| Methanol | 48.5   | 57.3   | 64.7    | 70.5    |
| Benzene  | 60.8   | 70.9   | 80.1    | 86.8    |

At 100 kPa, which liquid has the second-highest boiling point?

- A) Water
- B) Ethanol
- C) Acetone
- D) Methanol
- E) Benzene

**answer:** E
**explanation:** The boiling point at a specified pressure is read directly from the column corresponding to that pressure. To identify the second-highest boiling point at 100 kPa, the 100 kPa column is isolated and all five values are ranked from greatest to least.

The relevant readings are:

| Liquid   | Boiling Point at 100 kPa (°C) |
|----------|-------------------------------|
| Water    | 99.6                          |
| Ethanol  | 78.4                          |
| Acetone  | 56.1                          |
| Methanol | 64.7                          |
| Benzene  | 80.1                          |

Ordering these five values from highest to lowest: 99.6 > 80.1 > 78.4 > 64.7 > 56.1, which corresponds to Water, Benzene, Ethanol, Methanol, and Acetone, respectively.

Water holds the highest boiling point at 100 kPa. The second-highest value is 80.1, which belongs to Benzene. Benzene (80.1) and Ethanol (78.4) are close but distinct — 80.1 - 78.4 = 1.7 — so there is no ambiguity in the ranking. Benzene clearly occupies the second position.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q14
**difficulty:** Medium
**type:** Table Analysis
**topic:** Financial Data

The following table shows revenue and cost figures (in millions USD) for four divisions of a conglomerate in 2025:

| Division    | Revenue | COGS | Operating Expenses | Tax |
|-------------|---------|------|--------------------|-----|
| Consumer    | 480     | 280  | 120                | 18  |
| Industrial  | 620     | 410  | 140                | 20  |
| Healthcare  | 350     | 165  | 110                | 22  |
| Technology  | 540     | 240  | 180                | 36  |

Which division had the highest net profit margin (net profit / revenue)?

- A) Consumer
- B) Industrial
- C) Healthcare
- D) Technology
- E) All divisions had equal margins

**answer:** D
**explanation:** Net profit margin is defined as net profit divided by revenue, where net profit equals revenue minus all costs — cost of goods sold (COGS), operating expenses, and tax. For each division, net profit and the resulting margin are computed as follows. Consumer: 480 − 280 − 120 − 18 = 62; margin = 62/480 ≈ 12.92%. Industrial: 620 − 410 − 140 − 20 = 50; margin = 50/620 ≈ 8.06%. Healthcare: 350 − 165 − 110 − 22 = 53; margin = 53/350 ≈ 15.14%. Technology: 540 − 240 − 180 − 36 = 84; margin = 84/540 ≈ 15.56%. Ranking in ascending order: Industrial (8.06%) < Consumer (12.92%) < Healthcare (15.14%) < Technology (15.56%). The closeness of the top two is confirmed by cross-multiplication: 84 × 350 − 53 × 540 = 29,400 − 28,620 = 780 > 0, so 84/540 > 53/350. Although Industrial posts the highest absolute revenue (620) and Technology carries the largest tax charge (36), Technology benefits from a relatively low combined cost burden of 240 + 180 + 36 = 456 against revenue of 540, leaving 84 in net profit — the highest margin among all four divisions. The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q15
**difficulty:** Medium
**type:** Table Analysis
**topic:** Test Scores

The following table shows scores of six students on four standardized tests (each scored out of 100):

| Student | Math | Verbal | Science | History |
|---------|------|--------|---------|---------|
| Priya   | 92   | 78     | 88      | 74      |
| Quinn   | 85   | 91     | 82      | 89      |
| Ravi    | 78   | 84     | 76      | 82      |
| Sara    | 88   | 88     | 90      | 86      |
| Tomas   | 95   | 72     | 94      | 68      |
| Uma     | 82   | 95     | 80      | 92      |

Which student has the highest median score across the four tests?

- A) Priya
- B) Quinn
- C) Sara
- D) Tomas
- E) Uma

**answer:** C
**explanation:** The median of an even-numbered data set is the arithmetic mean of the two middle values once the data are arranged in ascending order. Because each student has exactly four scores, the median equals (second-lowest score + third-lowest score) / 2.

Sorting each student's four scores and applying this formula in turn:

Priya: scores 92, 78, 88, 74 sort to 74, 78, 88, 92. Median = (78 + 88) / 2 = 166 / 2 = 83.

Quinn: scores 85, 91, 82, 89 sort to 82, 85, 89, 91. Median = (85 + 89) / 2 = 174 / 2 = 87.

Ravi: scores 78, 84, 76, 82 sort to 76, 78, 82, 84. Median = (78 + 82) / 2 = 160 / 2 = 80.

Sara: scores 88, 88, 90, 86 sort to 86, 88, 88, 90. Median = (88 + 88) / 2 = 176 / 2 = 88.

Tomas: scores 95, 72, 94, 68 sort to 68, 72, 94, 95. Median = (72 + 94) / 2 = 166 / 2 = 83.

Uma: scores 82, 95, 80, 92 sort to 80, 82, 92, 95. Median = (82 + 92) / 2 = 174 / 2 = 87.

Collecting the results: Priya = 83, Quinn = 87, Ravi = 80, Sara = 88, Tomas = 83, Uma = 87. The ranking is Sara (88) > Quinn = Uma (87) > Priya = Tomas (83) > Ravi (80). Sara's median of 88 strictly exceeds every other student's median. It is worth noting that although Tomas posts the two highest individual scores in the table (95 in Math and 94 in Science), his two lowest scores (68 and 72) drag his middle pair well below Sara's; the median is sensitive to the shape of the sorted distribution, not the extreme values. Similarly, Uma's high Verbal (95) and History (92) are offset by her lower Math (82) and Science (80), yielding a median of only 87. Sara's scores are the most tightly clustered of any student — ranging only from 86 to 90 — which keeps both middle values high and produces the superior median.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q16
**difficulty:** Medium
**type:** Table Analysis
**topic:** Company Metrics

The following table shows key metrics for five startups in 2025:

| Startup   | Employees | Annual Revenue ($M) | Funding Raised ($M) | Years Active |
|-----------|-----------|---------------------|---------------------|--------------|
| Nimbus    | 120       | 24                  | 80                  | 4            |
| Orbit     | 85        | 18                  | 45                  | 3            |
| Pulse     | 200       | 50                  | 150                 | 6            |
| Quanta    | 60        | 15                  | 30                  | 2            |
| Relay     | 150       | 36                  | 90                  | 5            |

How many startups have both annual revenue per employee above $200K AND funding raised per employee below $700K?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** Two thresholds govern this problem. Let R/E denote annual revenue per employee and F/E denote funding raised per employee, both expressed in thousands of dollars. A startup qualifies if and only if R/E > 200 and F/E < 700. Each of the five startups is evaluated in turn.

**Nimbus.** With 120 employees, $24M revenue, and $80M funding:
- R/E = 24/120 = 0.200 ($M) = $200K. Because 200 is not strictly greater than 200, condition 1 fails. Nimbus does not qualify.

**Orbit.** With 85 employees, $18M revenue, and $45M funding:
- R/E = 18/85 ≈ 0.2118 ($M) = $211.8K > $200K. Condition 1 satisfied.
- F/E = 45/85 ≈ 0.5294 ($M) = $529.4K < $700K. Condition 2 satisfied.
- Orbit qualifies.

**Pulse.** With 200 employees, $50M revenue, and $150M funding:
- R/E = 50/200 = 0.250 ($M) = $250K > $200K. Condition 1 satisfied.
- F/E = 150/200 = 0.750 ($M) = $750K. Because 750 is not less than 700, condition 2 fails. Pulse does not qualify.

**Quanta.** With 60 employees, $15M revenue, and $30M funding:
- R/E = 15/60 = 0.250 ($M) = $250K > $200K. Condition 1 satisfied.
- F/E = 30/60 = 0.500 ($M) = $500K < $700K. Condition 2 satisfied.
- Quanta qualifies.

**Relay.** With 150 employees, $36M revenue, and $90M funding:
- R/E = 36/150 = 0.240 ($M) = $240K > $200K. Condition 1 satisfied.
- F/E = 90/150 = 0.600 ($M) = $600K < $700K. Condition 2 satisfied.
- Relay qualifies.

Exactly three startups — Orbit, Quanta, and Relay — satisfy both conditions simultaneously. Nimbus fails the revenue-per-employee threshold (it meets but does not exceed $200K), and Pulse fails the funding-per-employee threshold ($750K exceeds $700K).

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q17
**difficulty:** Medium
**type:** Table Analysis
**topic:** Sales Data

The following table shows units sold (in thousands) of four product lines across four quarters of 2025:

| Product    | Q1  | Q2  | Q3  | Q4  |
|------------|-----|-----|-----|-----|
| Helios     | 40  | 48  | 55  | 72  |
| Luna       | 85  | 82  | 78  | 90  |
| Meridian   | 30  | 38  | 46  | 51  |
| Nova       | 110 | 105 | 115 | 120 |

Which product had the greatest percent increase in units sold from Q1 to Q4?

- A) Helios
- B) Luna
- C) Meridian
- D) Nova
- E) Luna and Nova are tied

**answer:** A
**explanation:** **Percent-increase formula.** The percent increase from an initial value to a final value is defined as (final - initial) / initial * 100. Applying this formula to each product's Q1 and Q4 figures identifies the maximum.

**Computing each product's percent increase from Q1 to Q4.**

Let Q1 and Q4 denote the units sold (in thousands) in the first and fourth quarters, respectively.

- Helios: Q1 = 40, Q4 = 72. Percent increase = (72 - 40) / 40 * 100 = 32 / 40 * 100 = 4/5 * 100 = 80.0%.
- Luna: Q1 = 85, Q4 = 90. Percent increase = (90 - 85) / 85 * 100 = 5 / 85 * 100 ≈ 5.9%.
- Meridian: Q1 = 30, Q4 = 51. Percent increase = (51 - 30) / 30 * 100 = 21 / 30 * 100 = 7/10 * 100 = 70.0%.
- Nova: Q1 = 110, Q4 = 120. Percent increase = (120 - 110) / 110 * 100 = 10 / 110 * 100 ≈ 9.1%.

**Ranking the results.** Helios achieves 80.0% (32/40 = 4/5), the highest rate in the table. Meridian is next at 70.0% (21/30 = 7/10), followed by Nova at roughly 9.1% and Luna at roughly 5.9%. Helios alone attains the greatest percent increase, and it corresponds to choice A. (Choice E, which asserts a Luna-Nova tie, is false: their rates of 5.9% and 9.1% differ.)

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q18
**difficulty:** Medium
**type:** Table Analysis
**topic:** Scientific Measurements

The following table shows the masses (in grams) and volumes (in cm³) of five metal samples:

| Sample   | Mass (g) | Volume (cm³) |
|----------|----------|---------------|
| Alpha    | 192      | 24            |
| Bravo    | 264      | 30            |
| Charlie  | 357      | 42            |
| Delta    | 156      | 20            |
| Echo     | 225      | 25            |

Which sample has a density (mass/volume) closest to 9.0 g/cm³?

- A) Alpha
- B) Bravo
- C) Charlie
- D) Delta
- E) Echo

**answer:** E
**explanation:** Density is defined as mass divided by volume. Applying this formula to each sample and comparing each result to the target of 9.0 g/cm³:

- Alpha: 192 / 24 = 8.0 g/cm³; deviation |8.0 − 9.0| = 1.0
- Bravo: 264 / 30 = 8.8 g/cm³; deviation |8.8 − 9.0| = 0.2
- Charlie: 357 / 42 = 8.5 g/cm³; deviation |8.5 − 9.0| = 0.5
- Delta: 156 / 20 = 7.8 g/cm³; deviation |7.8 − 9.0| = 1.2
- Echo: 225 / 25 = 9.0 g/cm³; deviation |9.0 − 9.0| = 0.0

Echo produces a density of exactly 9.0 g/cm³, a deviation of 0.0, which is smaller than every other sample's. The next closest is Bravo at 8.8 (deviation 0.2), then Charlie at 8.5 (deviation 0.5), Alpha at 8.0 (deviation 1.0), and Delta at 7.8 (deviation 1.2). Echo is therefore the single sample whose density is closest to 9.0.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q19
**difficulty:** Hard
**type:** Table Analysis
**topic:** Financial Data

The following table shows annual revenue (in MILLIONS USD) and annual R&D spending (in THOUSANDS USD) for five pharmaceutical firms:

| Firm      | Revenue ($M) | R&D ($K)  |
|-----------|--------------|-----------|
| Avalon    | 480          | 72,000    |
| Brio      | 220          | 44,000    |
| Cedar     | 650          | 78,000    |
| Dovetail  | 140          | 35,000    |
| Everest   | 380          | 114,000   |

Which firm spent the highest fraction of its revenue on R&D?

- A) Avalon
- B) Brio
- C) Cedar
- D) Dovetail
- E) Everest

**answer:** E
**explanation:** **Governing principle.** The fraction of revenue spent on R&D equals R&D spending divided by revenue, expressed in consistent units. Because revenue is given in millions of USD and R&D in thousands of USD, each revenue figure is multiplied by 1,000 to convert it to thousands before dividing. The ratio for each firm is therefore R&D ($K) divided by (Revenue ($M) × 1,000).

**Unit-consistent calculations.** Let r denote R&D spending in thousands and V denote revenue in thousands (= Revenue in millions × 1,000).

- Avalon: 72,000 / (480 × 1,000) = 72,000 / 480,000 = 72/480 = 3/20 = 0.150 (15.0%)
- Brio: 44,000 / (220 × 1,000) = 44,000 / 220,000 = 44/220 = 1/5 = 0.200 (20.0%)
- Cedar: 78,000 / (650 × 1,000) = 78,000 / 650,000 = 78/650 = 3/25 = 0.120 (12.0%)
- Dovetail: 35,000 / (140 × 1,000) = 35,000 / 140,000 = 35/140 = 1/4 = 0.250 (25.0%)
- Everest: 114,000 / (380 × 1,000) = 114,000 / 380,000 = 114/380 = 3/10 = 0.300 (30.0%)

**Comparison.** Ranking the five ratios in ascending order: Cedar (3/25) < Avalon (3/20) < Brio (1/5) < Dovetail (1/4) < Everest (3/10). Everest, at 0.300, spends the highest fraction of its revenue on R&D, ahead of Dovetail at 0.250, with the remaining three firms below 0.250. The top value is reached by Everest alone, with no tie.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q20
**difficulty:** Hard
**type:** Table Analysis
**topic:** Company Metrics

The following table shows monthly active users (MAU, in millions) and monthly churn rate for six social apps in March 2026:

| App       | MAU (M) | Churn Rate | New Signups (M) | Avg Revenue/User ($) |
|-----------|---------|------------|-----------------|----------------------|
| Chatter   | 80      | 4.0%       | 5.2             | 3.20                 |
| Drift     | 45      | 6.5%       | 4.0             | 2.10                 |
| Ember     | 120     | 3.0%       | 4.8             | 4.50                 |
| Flick     | 30      | 8.0%       | 3.6             | 1.80                 |
| Glimpse   | 65      | 5.0%       | 4.2             | 2.80                 |
| Helix     | 95      | 3.5%       | 4.0             | 3.90                 |

An app's net MAU change equals New Signups minus (MAU × Churn Rate). Which app had the largest net MAU GAIN in March?

- A) Chatter
- B) Drift
- C) Ember
- D) Flick
- E) Glimpse

**answer:** A
**explanation:** Net MAU gain defined.

The net MAU change for any app is given by the formula

net change = New Signups (M) - MAU (M) x Churn Rate

where the product MAU x Churn Rate represents the number of users lost to attrition during the month. This quantity is computed for all six apps and the maximum is identified.

Let S denote new signups (in millions), M denote MAU (in millions), and r denote the monthly churn rate expressed as a decimal. Then net change = S - M*r.

Computing churned users and net change for each app.

- Chatter: churned = 80 x 0.04 = 3.20; net = 5.2 - 3.20 = 2.00
- Drift: churned = 45 x 0.065 = 2.925; net = 4.0 - 2.925 = 1.075
- Ember: churned = 120 x 0.03 = 3.60; net = 4.8 - 3.60 = 1.20
- Flick: churned = 30 x 0.08 = 2.40; net = 3.6 - 2.40 = 1.20
- Glimpse: churned = 65 x 0.05 = 3.25; net = 4.2 - 3.25 = 0.95
- Helix: churned = 95 x 0.035 = 3.325; net = 4.0 - 3.325 = 0.675

Comparing the results.

Ranking the six net-change values in descending order: Chatter (2.00) > Ember (1.20) = Flick (1.20) > Drift (1.075) > Glimpse (0.95) > Helix (0.675).

Chatter's net gain of 2.00 million exceeds every other app. Notably, Ember has the largest absolute user base (120 M) but its relatively high signup volume of 4.8 M is more than offset by its large absolute churn: 120 x 0.03 = 3.60 M lost, leaving only a 1.20 M net gain. Chatter, by contrast, carries the second-lowest churn rate (4.0%) among the six apps, and its 5.2 M in new signups — the highest in the table — yields a loss of only 3.20 M churned users, therefore producing a net gain of 2.00 M that no other app matches.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q21
**difficulty:** Easy
**type:** Table Analysis
**topic:** Sales Data

The following table shows units sold at five retail stores during a holiday weekend:

| Store    | Friday | Saturday | Sunday | Monday |
|----------|--------|----------|--------|--------|
| Aspen    | 420    | 580      | 510    | 310    |
| Birch    | 350    | 610      | 470    | 280    |
| Cedar    | 290    | 530      | 440    | 250    |
| Dogwood  | 510    | 690      | 600    | 340    |
| Elm      | 380    | 560      | 490    | 300    |

Which store sold the most total units over the four-day weekend?

- A) Aspen
- B) Birch
- C) Cedar
- D) Dogwood
- E) Elm

**answer:** D
**explanation:** Totaling across all four days identifies the store with the greatest sales. Each store's units across Friday, Saturday, Sunday, and Monday are summed and compared.

Let T(s) denote the four-day total for store s:

- T(Aspen)   = 420 + 580 + 510 + 310 = 1820
- T(Birch)   = 350 + 610 + 470 + 280 = 1710
- T(Cedar)   = 290 + 530 + 440 + 250 = 1510
- T(Dogwood) = 510 + 690 + 600 + 340 = 2140
- T(Elm)     = 380 + 560 + 490 + 300 = 1730

Ordering these results from highest to lowest: 2140 > 1820 > 1730 > 1710 > 1510, corresponding to Dogwood > Aspen > Elm > Birch > Cedar.

Dogwood leads every individual day — its daily figures of 510, 690, 600, and 340 are each the highest among the five stores — and its four-day total of 2140 exceeds the next-highest store (Aspen, at 1820) by 320 units.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q22
**difficulty:** Easy
**type:** Table Analysis
**topic:** Test Scores

The following table shows student scores on four chapter quizzes (each out of 50):

| Student  | Quiz 1 | Quiz 2 | Quiz 3 | Quiz 4 |
|----------|--------|--------|--------|--------|
| Aiden    | 42     | 38     | 45     | 47     |
| Bianca   | 36     | 41     | 39     | 44     |
| Chen     | 48     | 46     | 44     | 49     |
| Diya     | 31     | 35     | 40     | 43     |
| Ewan     | 40     | 42     | 38     | 41     |

Which student had the highest total score across the four quizzes?

- A) Aiden
- B) Bianca
- C) Chen
- D) Diya
- E) Ewan

**answer:** C
**explanation:** To identify the student with the highest total score, we sum each student's four quiz results and compare the five totals.

Let T(s) denote the total score for student s.

- T(Aiden) = 42 + 38 + 45 + 47 = 172
- T(Bianca) = 36 + 41 + 39 + 44 = 160
- T(Chen) = 48 + 46 + 44 + 49 = 187
- T(Diya) = 31 + 35 + 40 + 43 = 149
- T(Ewan) = 40 + 42 + 38 + 41 = 161

Comparing the five totals: 187 > 172 > 161 > 160 > 149. T(Chen) = 187 is strictly greater than every other student's total. Chen therefore had the highest aggregate score across all four quizzes.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q23
**difficulty:** Easy
**type:** Table Analysis
**topic:** City Rankings

The following table shows population (in thousands) for five mid-sized cities over four census years:

| City       | 2005 | 2010 | 2015 | 2020 |
|------------|------|------|------|------|
| Fairhaven  | 180  | 195  | 210  | 225  |
| Glenwood   | 140  | 155  | 175  | 200  |
| Harbordale | 220  | 230  | 245  | 260  |
| Ivyton     | 90   | 105  | 125  | 145  |
| Jasper     | 310  | 300  | 315  | 320  |

Which city had the largest ABSOLUTE increase in population from 2005 to 2020?

- A) Fairhaven
- B) Glenwood
- C) Harbordale
- D) Ivyton
- E) Jasper

**answer:** B
**explanation:** The absolute increase in population for each city is computed as the 2020 census figure minus the 2005 census figure, using the values stated in thousands. Sorting the table by this difference identifies the largest gain.

For each city, let the absolute increase be d = population(2020) - population(2005):

- Fairhaven: d = 225 - 180 = 45
- Glenwood: d = 200 - 140 = 60
- Harbordale: d = 260 - 220 = 40
- Ivyton: d = 145 - 90 = 55
- Jasper: d = 320 - 310 = 10

Ranking these differences from largest to smallest: Glenwood = 60, Ivyton = 55, Fairhaven = 45, Harbordale = 40, Jasper = 10. Glenwood's gain of 60 thousand is the single largest, exceeding every other city. Choice B (Glenwood) is therefore the correct answer.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q24
**difficulty:** Easy
**type:** Table Analysis
**topic:** Health Data

The following table shows resting heart rates (in beats per minute) measured for five patients at four visits:

| Patient  | Visit 1 | Visit 2 | Visit 3 | Visit 4 |
|----------|---------|---------|---------|---------|
| Rosa     | 78      | 75      | 72      | 70      |
| Samir    | 82      | 80      | 79      | 77      |
| Tae      | 68      | 70      | 69      | 71      |
| Uri      | 90      | 86      | 83      | 80      |
| Vera     | 74      | 73      | 71      | 69      |

Which patient had the largest drop in resting heart rate from Visit 1 to Visit 4?

- A) Rosa
- B) Samir
- C) Tae
- D) Uri
- E) Vera

**answer:** D
**explanation:** The quantity of interest is the signed change in resting heart rate from Visit 1 to Visit 4, defined as d = Visit 1 value minus Visit 4 value. A positive value of d indicates a decrease in heart rate, and the patient with the largest d has the greatest drop.

Computing d for each patient using the data in the table:

- Rosa: d = 78 - 70 = 8
- Samir: d = 82 - 77 = 5
- Tae: d = 68 - 71 = -3 (heart rate increased by 3 bpm; no drop occurred)
- Uri: d = 90 - 80 = 10
- Vera: d = 74 - 69 = 5

Ordering these results, 10 > 8 > 5 = 5 > -3. Uri's drop of 10 bpm is strictly greater than every other patient's drop. Rosa's drop of 8 bpm is the next largest, followed by Samir and Vera both at 5 bpm. Tae's rate rose over the four visits and therefore does not contribute a positive drop at all.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q25
**difficulty:** Medium
**type:** Table Analysis
**topic:** Financial Data

The following table shows quarterly revenue and operating cost (both in millions USD) for four retail chains in 2025:

| Chain      | Revenue Q1 | Cost Q1 | Revenue Q4 | Cost Q4 |
|------------|------------|---------|------------|---------|
| Boreal     | 240        | 180     | 300        | 225     |
| Coastline  | 180        | 130     | 220        | 170     |
| Dune       | 360        | 290     | 400        | 310     |
| Evergreen  | 150        | 115     | 195        | 140     |

Which chain had the largest percent increase in operating PROFIT (revenue minus cost) from Q1 to Q4?

- A) Boreal
- B) Coastline
- C) Dune
- D) Evergreen
- E) Boreal and Evergreen are tied

**answer:** D
**explanation:** Operating profit for a given quarter equals revenue minus cost. The percent change in operating profit from Q1 to Q4 is defined as ((profit Q4 - profit Q1) / profit Q1) * 100. Let P1 denote operating profit in Q1 and P4 denote operating profit in Q4.

For Boreal, P1 = 240 - 180 = 60 and P4 = 300 - 225 = 75, yielding a percent change of (75 - 60) / 60 * 100 = 15/60 * 100 = 25.00%.

For Coastline, P1 = 180 - 130 = 50 and P4 = 220 - 170 = 50, yielding a percent change of (50 - 50) / 50 * 100 = 0.00%. Coastline's profit did not grow at all.

For Dune, P1 = 360 - 290 = 70 and P4 = 400 - 310 = 90, yielding a percent change of (90 - 70) / 70 * 100 = 20/70 * 100 ≈ 28.57%.

For Evergreen, P1 = 150 - 115 = 35 and P4 = 195 - 140 = 55, yielding a percent change of (55 - 35) / 35 * 100 = 20/35 * 100 ≈ 57.14%.

Ranking the four results: Evergreen ≈ 57.14% > Dune ≈ 28.57% > Boreal = 25.00% > Coastline = 0.00%. Evergreen's absolute profit gain (20) equals Dune's absolute gain (20), but because Evergreen starts from the much smaller base of 35 (versus Dune's base of 70), the same absolute increase produces a percent change that is exactly double. The question asks for the largest percent increase, not the largest absolute increase, so the small base matters decisively. Evergreen's ≈ 57.14% is strictly greater than the next-highest figure of ≈ 28.57%, and no tie exists among the remaining chains.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q26
**difficulty:** Medium
**type:** Table Analysis
**topic:** Employee Performance

The following table shows quarterly performance metrics for six sales associates:

| Associate | Calls Made | Meetings Booked | Deals Closed | Revenue ($K) |
|-----------|------------|-----------------|--------------|--------------|
| Adaeze    | 400        | 60              | 24           | 360          |
| Benji     | 320        | 80              | 32           | 480          |
| Cressida  | 500        | 50              | 20           | 300          |
| Devi      | 280        | 70              | 28           | 420          |
| Emeka     | 360        | 54              | 18           | 270          |
| Fiona     | 440        | 66              | 22           | 330          |

How many associates had BOTH a call-to-meeting conversion rate above 20% AND revenue per deal above $14K?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** Two conditions must hold simultaneously: the call-to-meeting conversion rate (meetings divided by calls) must exceed 20%, and revenue per deal (revenue divided by deals closed) must exceed $14K.

Computing the conversion rate for each associate: Adaeze posts 60/400 = 15.0%, Benji posts 80/320 = 25.0%, Cressida posts 50/500 = 10.0%, Devi posts 70/280 = 25.0%, Emeka posts 54/360 = 15.0%, and Fiona posts 66/440 = 15.0%. Only Benji and Devi exceed the 20% threshold; the remaining four associates are eliminated from further consideration.

For the two qualifying associates, revenue per deal is computed as follows: Benji records 480/32 = $15.0K per deal, and Devi records 420/28 = $15.0K per deal. Both values exceed $14K, so both associates satisfy the second condition as well.

Benji and Devi each clear both hurdles. No other associate passed the first screen, so no other associate can satisfy the conjunction. The total count of associates meeting both criteria is exactly 2.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q27
**difficulty:** Medium
**type:** Table Analysis
**topic:** Sports Statistics

The following table shows stats for six soccer strikers over a season:

| Striker   | Matches | Goals | Shots | Assists |
|-----------|---------|-------|-------|---------|
| Alvarez   | 30      | 18    | 90    | 6       |
| Bako      | 28      | 14    | 70    | 9       |
| Cruz      | 32      | 24    | 120   | 4       |
| Duarte    | 25      | 15    | 60    | 7       |
| Esposito  | 30      | 12    | 80    | 10      |
| Fofana    | 27      | 18    | 80    | 8       |

Which striker had the highest shot-conversion rate (goals / shots)?

- A) Alvarez
- B) Bako
- C) Cruz
- D) Duarte
- E) Esposito

**answer:** D
**explanation:** Shot-conversion rate is defined as the ratio of goals scored to shots taken: rate = goals / shots. A higher ratio indicates that a striker converts a greater proportion of his attempts into goals. The ratio is computed for each of the six strikers below.

| Striker  | Goals | Shots | Rate (goals / shots)   |
|----------|-------|-------|------------------------|
| Alvarez  | 18    | 90    | 18/90 = 0.200 (20.0%)  |
| Bako     | 14    | 70    | 14/70 = 0.200 (20.0%)  |
| Cruz     | 24    | 120   | 24/120 = 0.200 (20.0%) |
| Duarte   | 15    | 60    | 15/60 = 0.250 (25.0%)  |
| Esposito | 12    | 80    | 12/80 = 0.150 (15.0%)  |
| Fofana   | 18    | 80    | 18/80 = 0.225 (22.5%)  |

Alvarez, Bako, and Cruz each convert exactly 20.0% of their shots; Esposito trails at 15.0%, and Fofana reaches 22.5%. Duarte's 25.0% is the single highest figure in the table, so Duarte has the highest shot-conversion rate. Duarte's rate of 15/60 = 0.25 exceeds every other listed choice: Alvarez (0.20), Bako (0.20), Cruz (0.20), and Esposito (0.15).

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q28
**difficulty:** Medium
**type:** Table Analysis
**topic:** Survey Results

The following table shows the percentage of 800 surveyed commuters in each city who reported using various transport modes as their primary means (each commuter chose one mode):

| City      | Car | Bus | Bike | Train | Walk |
|-----------|-----|-----|------|-------|------|
| Alston    | 55% | 20% | 8%   | 12%   | 5%   |
| Breston   | 40% | 25% | 15%  | 10%   | 10%  |
| Cawdor    | 30% | 30% | 10%  | 20%   | 10%  |
| Denholm   | 65% | 15% | 5%   | 10%   | 5%   |
| Eastkirk  | 35% | 20% | 20%  | 15%   | 10%  |

Across the five cities, what is the median percentage of commuters who use the bus as their primary mode?

- A) 15%
- B) 20%
- C) 22%
- D) 25%
- E) 30%

**answer:** B
**explanation:** The median of a set of values is the middle value when all values are arranged in ascending order. For an odd number of observations n, the median is the value at position (n + 1) / 2.

Here n = 5 cities, so the median occupies position (5 + 1) / 2 = 3 in the ordered list.

Extracting the bus-usage percentages from the table for each city:

- Alston: 20%
- Breston: 25%
- Cawdor: 30%
- Denholm: 15%
- Eastkirk: 20%

Arranging these five values in ascending order: 15, 20, 20, 25, 30.

The value in the 3rd position is 20%. The information that 800 commuters were surveyed is extraneous for this question; since each percentage is already given and the question asks for a comparison of percentages rather than absolute counts, no conversion is required.

Therefore, the median percentage of commuters who use the bus as their primary mode, across the five cities, is 20%.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q29
**difficulty:** Medium
**type:** Table Analysis
**topic:** Company Metrics

The following table shows key data for five SaaS firms in fiscal year 2025:

| Firm      | ARR ($M) | Customers | Gross Margin | CAC ($) |
|-----------|----------|-----------|--------------|---------|
| Helion    | 48       | 1200      | 72%          | 4000    |
| Isoria    | 30       | 600       | 80%          | 5000    |
| Jovian    | 90       | 1800      | 68%          | 6000    |
| Kestrel   | 24       | 800       | 75%          | 3000    |
| Lyra      | 60       | 1500      | 70%          | 4500    |

How many firms have BOTH average revenue per customer (ARR/Customers) above $35,000 AND gross margin above 70%?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** **Governing definitions.** Average revenue per customer (ARPC) is defined as ARR divided by the number of customers. Because ARR is reported in millions of dollars, the conversion to a per-customer dollar figure requires multiplying by 1,000,000. The two screening conditions that must hold simultaneously are: (1) ARPC > 35,000, and (2) gross margin > 70%. The strict inequalities mean that a firm with ARPC equal to exactly $35,000 or a gross margin equal to exactly 70% does not qualify.

**Row-by-row computation.**

For each firm, let ARPC = (ARR x 1,000,000) / Customers.

- **Helion.** ARPC = 48,000,000 / 1200 = 40,000. Gross margin = 72%. Condition (1): 40,000 > 35,000 — satisfied. Condition (2): 72% > 70% — satisfied. Both conditions hold.

- **Isoria.** ARPC = 30,000,000 / 600 = 50,000. Gross margin = 80%. Condition (1): 50,000 > 35,000 — satisfied. Condition (2): 80% > 70% — satisfied. Both conditions hold.

- **Jovian.** ARPC = 90,000,000 / 1800 = 50,000. Gross margin = 68%. Condition (1): 50,000 > 35,000 — satisfied. Condition (2): 68% > 70% — not satisfied. Fails.

- **Kestrel.** ARPC = 24,000,000 / 800 = 30,000. Gross margin = 75%. Condition (1): 30,000 > 35,000 — not satisfied. Fails.

- **Lyra.** ARPC = 60,000,000 / 1500 = 40,000. Gross margin = 70%. Condition (1): 40,000 > 35,000 — satisfied. Condition (2): 70% > 70% — not satisfied, because the inequality is strict. Fails.

**Summary.**

| Firm | ARPC ($) | Gross Margin | ARPC > 35,000? | GM > 70%? | Both? |
|---------|----------|-------------|----------------|-----------|-------|
| Helion | 40,000 | 72% | Yes | Yes | Yes |
| Isoria | 50,000 | 80% | Yes | Yes | Yes |
| Jovian | 50,000 | 68% | Yes | No | No |
| Kestrel | 30,000 | 75% | No | Yes | No |
| Lyra | 40,000 | 70% | Yes | No | No |

Two firms — Helion and Isoria — satisfy both conditions simultaneously. Jovian's high ARPC is offset by a below-threshold gross margin; Kestrel's strong gross margin is offset by an ARPC below $35,000; Lyra meets the ARPC requirement but its gross margin of exactly 70% does not satisfy the strict inequality. The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q30
**difficulty:** Medium
**type:** Table Analysis
**topic:** Health Data

The following table shows average daily nutrient intake recorded for six participants in a nutrition study:

| Participant | Calories | Protein (g) | Carbs (g) | Fat (g) | Fiber (g) |
|-------------|----------|-------------|-----------|---------|-----------|
| P1          | 2400     | 110         | 280       | 95      | 28        |
| P2          | 1800     | 80          | 220       | 65      | 22        |
| P3          | 2200     | 125         | 240       | 80      | 30        |
| P4          | 2600     | 90          | 340       | 105     | 18        |
| P5          | 2000     | 100         | 230       | 75      | 25        |
| P6          | 2100     | 115         | 210       | 70      | 32        |

How many participants consumed more than 100 grams of protein AND at least 25 grams of fiber daily?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** The question asks how many of the six participants satisfy two simultaneous conditions: (1) daily protein intake strictly greater than 100 g, and (2) daily fiber intake greater than or equal to 25 g. Both conditions must hold for a participant to be counted; failure on either condition disqualifies that participant.

The two thresholds are defined explicitly. Let P denote a participant's daily protein intake in grams and F denote daily fiber intake in grams. The joint criterion is: P > 100 AND F >= 25.

Applying this criterion row by row:

- P1: P = 110, F = 28. Since 110 > 100 and 28 >= 25, both conditions hold. P1 qualifies.
- P2: P = 80, F = 22. Since 80 is not > 100, the first condition fails immediately. P2 does not qualify.
- P3: P = 125, F = 30. Since 125 > 100 and 30 >= 25, both conditions hold. P3 qualifies.
- P4: P = 90, F = 18. Since 90 is not > 100, the first condition fails immediately. P4 does not qualify.
- P5: P = 100, F = 25. The first condition requires P strictly greater than 100. Because 100 is not strictly greater than 100, the first condition fails. P5 does not qualify, even though F = 25 exactly meets the fiber threshold.
- P6: P = 115, F = 32. Since 115 > 100 and 32 >= 25, both conditions hold. P6 qualifies.

The qualifying participants are P1, P3, and P6, giving a total count of 3. Note that P5 is the critical case: its protein value of exactly 100 g does not satisfy the strict inequality P > 100, so it is correctly excluded despite meeting the fiber requirement.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q31
**difficulty:** Medium
**type:** Table Analysis
**topic:** Scientific Measurements

The following table shows the diameter (in mm) and mass (in grams) of five spherical ball bearings made of different alloys:

| Bearing | Diameter (mm) | Mass (g) |
|---------|---------------|----------|
| Type A  | 20            | 33.5     |
| Type B  | 15            | 14.1     |
| Type C  | 25            | 65.4     |
| Type D  | 10            | 4.2      |
| Type E  | 30            | 113.0    |

Given that volume of a sphere = (4/3)π r³, which bearing has the HIGHEST density (mass/volume)?

- A) Type A
- B) Type B
- C) Type C
- D) Type D
- E) Type E

**answer:** D
**explanation:** Density is defined as rho = m / V, where m is mass and V is volume. For a sphere of radius r, the volume formula V = (4/3) * pi * r^3 applies. Because the factor (4/3) * pi is a positive constant shared by every bearing, comparing densities reduces to comparing the ratio m / r^3 across all five types: the bearing with the largest m / r^3 has the highest density.

Each bearing's diameter d is given; the radius is r = d / 2. The five radii are therefore:

- Type A: r = 20 / 2 = 10 mm
- Type B: r = 15 / 2 = 7.5 mm
- Type C: r = 25 / 2 = 12.5 mm
- Type D: r = 10 / 2 = 5 mm
- Type E: r = 30 / 2 = 15 mm

Because rho = m / ((4/3) * pi * r^3) = [m / r^3] / ((4/3) * pi), rankings follow from the dimensionless index k = m / r^3:

- Type A: r^3 = 10^3 = 1000; k = 33.5 / 1000 = 0.0335
- Type B: r^3 = 7.5^3 = 421.875; k = 14.1 / 421.875 ≈ 0.03342
- Type C: r^3 = 12.5^3 = 1953.125; k = 65.4 / 1953.125 ≈ 0.03349
- Type D: r^3 = 5^3 = 125; k = 4.2 / 125 = 0.0336
- Type E: r^3 = 15^3 = 3375; k = 113.0 / 3375 ≈ 0.03348

Ordering from highest to lowest: Type D (0.0336) > Type A (0.0335) > Type C (0.03349) > Type E (0.03348) > Type B (0.03342). Type D produces the largest k value.

Using V = (4/3) * pi * r^3 with pi ≈ 3.14159 to confirm with actual density:

- Type D: V = (4/3) * 3.14159 * 125 ≈ 523.60 mm^3; rho = 4.2 / 523.60 ≈ 0.008021 g/mm^3

No other bearing achieves a density above 0.008000 g/mm^3; the next highest is Type A at approximately 0.007998 g/mm^3. Although the five values are numerically close — reflecting that all bearings are made of similarly dense metal alloys — Type D's ratio of mass to cube-of-radius is strictly the largest, giving it the highest density.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q32
**difficulty:** Medium
**type:** Table Analysis
**topic:** Financial Data

The following table shows annual results (in millions USD) for four media companies in 2025:

| Company   | Revenue | Content Costs | Marketing | G&A |
|-----------|---------|---------------|-----------|-----|
| Pinnacle  | 800     | 420           | 120       | 90  |
| Quorum    | 520     | 260           | 85        | 70  |
| Radiance  | 1200    | 720           | 180       | 110 |
| Summit    | 640     | 300           | 130       | 80  |

Ranked by OPERATING MARGIN (operating profit / revenue), which company ranks SECOND HIGHEST?

- A) Pinnacle
- B) Quorum
- C) Radiance
- D) Summit
- E) Pinnacle and Summit tie

**answer:** D
**explanation:** Operating margin is defined as operating profit divided by revenue, where operating profit equals revenue minus total operating costs. With total costs equal to the sum of Content Costs, Marketing, and G&A, the margin M for each company is M = (Revenue - Total Costs) / Revenue.

For Pinnacle: total costs = 420 + 120 + 90 = 630; operating profit = 800 - 630 = 170; M = 170/800 = 17/80 = 0.2125, or 21.25%.

For Quorum: total costs = 260 + 85 + 70 = 415; operating profit = 520 - 415 = 105; M = 105/520 = 21/104 = 0.201923..., or approximately 20.19%.

For Radiance: total costs = 720 + 180 + 110 = 1010; operating profit = 1200 - 1010 = 190; M = 190/1200 = 19/120 = 0.15833..., or approximately 15.83%.

For Summit: total costs = 300 + 130 + 80 = 510; operating profit = 640 - 510 = 130; M = 130/640 = 13/64 = 0.203125, or 20.3125%.

Ranking by operating margin from highest to lowest: Pinnacle at 21.25%, Summit at 20.3125%, Quorum at 20.19%, and Radiance at 15.83%. Pinnacle holds the highest operating margin, and Summit holds the second-highest. Although Summit's absolute operating profit of 130 is lower than Radiance's 190, the margin calculation normalizes for scale, and Summit's lower cost base relative to its revenue places it clearly above both Quorum and Radiance. The gap between Summit and Quorum is small but unambiguous given exact fractions: 13/64 = 0.203125, which is strictly greater than 21/104 = 0.201923.... Therefore Summit ranks second.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q33
**difficulty:** Hard
**type:** Table Analysis
**topic:** Financial Data

The following table shows annual revenue (in MILLIONS USD) and annual marketing spend (in THOUSANDS USD) for five consumer brands:

| Brand     | Revenue ($M) | Marketing ($K) |
|-----------|--------------|----------------|
| Aurora    | 320          | 48,000         |
| Bristol   | 180          | 36,000         |
| Cascade   | 540          | 54,000         |
| Drummond  | 240          | 60,000         |
| Everglade | 400          | 40,000         |

Ranked by marketing-to-revenue ratio (marketing as a percentage of revenue), which brand ranks HIGHEST?

- A) Aurora
- B) Bristol
- C) Cascade
- D) Drummond
- E) Everglade

**answer:** D
**explanation:** The marketing-to-revenue ratio expresses annual marketing spend as a percentage of annual revenue. Because the two quantities are given in different units — marketing in thousands of USD and revenue in millions of USD — a unit conversion is required before any comparison is valid. Since 1 million = 1,000 thousands, 1 million USD of revenue equals 1,000 thousand USD. Therefore, for each brand the ratio is computed as:

ratio = Marketing ($K) / (Revenue ($M) * 1,000) * 100

Equivalently, letting M denote marketing spend in thousands and R denote revenue in millions:

ratio (%) = M / (R * 1,000) * 100 = M / (10 * R)

Applying this formula to each brand:

- Aurora: 48,000 / (10 * 320) = 48,000 / 3,200 = 15.0%
- Bristol: 36,000 / (10 * 180) = 36,000 / 1,800 = 20.0%
- Cascade: 54,000 / (10 * 540) = 54,000 / 5,400 = 10.0%
- Drummond: 60,000 / (10 * 240) = 60,000 / 2,400 = 25.0%
- Everglade: 40,000 / (10 * 400) = 40,000 / 4,000 = 10.0%

Ranking the five brands in descending order: Drummond (25.0%) > Bristol (20.0%) > Aurora (15.0%) > Cascade (10.0%) = Everglade (10.0%). Drummond's ratio of 25% is the highest — achieved because its marketing spend of $60,000K is the largest in the table while its revenue of $240M is the second lowest. The unit-conversion step is essential: the proper basis of comparison is the ratio of marketing spend to revenue, not the absolute spend figures. Comparing raw marketing figures without adjusting for revenue scale would not constitute a valid ranking by ratio.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q34
**difficulty:** Hard
**type:** Table Analysis
**topic:** City Rankings

The following table shows key statistics for six mid-sized cities:

| City       | Population (K) | Median Income ($K) | Unemployment | Violent Crime /1000 |
|------------|----------------|--------------------|--------------|---------------------|
| Ashford    | 240            | 62                 | 4.2%         | 3.1                 |
| Belcourt   | 180            | 58                 | 5.8%         | 4.5                 |
| Clarendon  | 320            | 71                 | 3.5%         | 2.4                 |
| Derwent    | 150            | 48                 | 7.1%         | 5.8                 |
| Elmworth   | 280            | 65                 | 4.8%         | 3.3                 |
| Fairholm   | 200            | 55                 | 6.2%         | 4.9                 |

How many cities have ALL of the following: median income above $60K, unemployment below 5%, AND violent crime per 1000 below 3.5?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** D
**explanation:** The question asks for a count of cities satisfying three simultaneous conditions: median income above $60K, unemployment below 5%, and violent crime per 1,000 residents below 3.5. Let the three thresholds be defined as I > 60, U < 5, and C < 3.5, where I denotes median income in thousands of dollars, U denotes the unemployment rate as a percentage, and C denotes the violent crime rate per 1,000 residents. A city qualifies only if all three inequalities hold concurrently; failure on any single condition disqualifies it.

We examine each city in turn.

Ashford. I = 62 > 60 (satisfied); U = 4.2 < 5 (satisfied); C = 3.1 < 3.5 (satisfied). All three conditions hold. Ashford qualifies.

Belcourt. I = 58, and 58 > 60 is false. The income condition fails immediately; Belcourt does not qualify regardless of its other values.

Clarendon. I = 71 > 60 (satisfied); U = 3.5 < 5 (satisfied); C = 2.4 < 3.5 (satisfied). All three conditions hold. Clarendon qualifies.

Derwent. I = 48, and 48 > 60 is false. The income condition fails; Derwent does not qualify.

Elmworth. I = 65 > 60 (satisfied); U = 4.8 < 5 (satisfied); C = 3.3 < 3.5 (satisfied). All three conditions hold. Elmworth qualifies.

Fairholm. I = 55, and 55 > 60 is false. The income condition fails; Fairholm does not qualify.

The qualifying cities are Ashford, Clarendon, and Elmworth, giving a total count of 3.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q35
**difficulty:** Hard
**type:** Table Analysis
**topic:** Employee Performance

The following table shows year-over-year change metrics for six regional managers between 2024 and 2025:

| Manager   | 2024 Revenue ($K) | 2025 Revenue ($K) | 2024 Headcount | 2025 Headcount |
|-----------|-------------------|-------------------|-----------------|-----------------|
| Asha      | 1800              | 2160              | 12              | 15              |
| Bodie     | 2400              | 2640              | 20              | 22              |
| Carmen    | 1500              | 1950              | 10              | 13              |
| Dieter    | 3000              | 3150              | 25              | 25              |
| Ephraim   | 2100              | 2310              | 14              | 15              |
| Freya     | 1200              | 1680              | 8               | 12              |

Ranked by PERCENT CHANGE in revenue per headcount (revenue/headcount) from 2024 to 2025, which manager ranks HIGHEST?

- A) Asha
- B) Bodie
- C) Carmen
- D) Dieter
- E) Ephraim

**answer:** D
**explanation:** The metric under examination is revenue per headcount, defined as RPH = Revenue / Headcount for each manager in each year. The percent change in RPH from 2024 to 2025 is computed as (RPH_2025 - RPH_2024) / RPH_2024 * 100.

**Asha.** RPH_2024 = 1800/12 = 150. RPH_2025 = 2160/15 = 144. Percent change = (144 - 150)/150 * 100 = -4.0%.

**Bodie.** RPH_2024 = 2400/20 = 120. RPH_2025 = 2640/22 = 120. Percent change = (120 - 120)/120 * 100 = 0.0%.

**Carmen.** RPH_2024 = 1500/10 = 150. RPH_2025 = 1950/13 = 150. Percent change = (150 - 150)/150 * 100 = 0.0%.

**Dieter.** RPH_2024 = 3000/25 = 120. RPH_2025 = 3150/25 = 126. Because headcount is unchanged, the percent change in RPH equals the percent change in revenue directly: (126 - 120)/120 * 100 = 5.0%.

**Ephraim.** RPH_2024 = 2100/14 = 150. RPH_2025 = 2310/15 = 154. Percent change = (154 - 150)/150 * 100 = 4/150 * 100 ≈ 2.67%.

**Freya.** RPH_2024 = 1200/8 = 150. RPH_2025 = 1680/12 = 140. Percent change = (140 - 150)/150 * 100 = -10/150 * 100 ≈ -6.67%.

Ranking from highest to lowest: Dieter (+5.0%) > Ephraim (+2.67%) > Bodie (0.0%) = Carmen (0.0%) > Asha (-4.0%) > Freya (-6.67%).

Dieter alone posts the largest positive percent change, driven exclusively by revenue growth from $3,000K to $3,150K — a 5% gain — with no change in headcount, so the RPH improvement passes through at the same 5% rate. Managers such as Carmen and Bodie added headcount at rates that exactly offset their revenue gains, leaving RPH flat. Asha and Freya hired headcount faster than their revenues grew, causing RPH to decline.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis


---

## Q36 (Set — Franchise Operating Profit per Customer)

The following table summarizes five franchise locations:

| Location | Revenue ($K) | Costs ($K) | Customers |
|----------|--------------|------------|-----------|
| North    | 420          | 320        | 3,500     |
| South    | 380          | 260        | 2,800     |
| East     | 500          | 370        | 4,100     |
| West     | 340          | 250        | 2,600     |
| Central  | 460          | 330        | 3,300     |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived-Metric Ranking

Which location has the highest operating profit per customer?

- A) North
- B) South
- C) East
- D) West
- E) Central

**answer:** B
**explanation:** Operating profit per customer is defined as operating profit divided by the number of customers served, where operating profit equals revenue minus costs. Let P(L) denote the operating profit for location L, C(L) denote its customer count, and R(L) denote the ratio P(L)/C(L). Because the question asks for the location with the highest R(L), this derived metric must be computed for all five locations rather than relying on either profit or customer count alone.

Revenue and costs are given in thousands of dollars, so operating profit is also expressed in thousands of dollars.

- North: P = 420 - 320 = 100 ($K)
- South: P = 380 - 260 = 120 ($K)
- East: P = 500 - 370 = 130 ($K)
- West: P = 340 - 250 = 90 ($K)
- Central: P = 460 - 330 = 130 ($K)

To express profit per customer in dollars rather than thousands, each profit figure is multiplied by 1,000 before dividing by customer count.

- North: (100 × 1,000) / 3,500 = 100,000 / 3,500 ≈ $28.57
- South: (120 × 1,000) / 2,800 = 120,000 / 2,800 ≈ $42.86
- East: (130 × 1,000) / 4,100 = 130,000 / 4,100 ≈ $31.71
- West: (90 × 1,000) / 2,600 = 90,000 / 2,600 ≈ $34.62
- Central: (130 × 1,000) / 3,300 = 130,000 / 3,300 ≈ $39.39

Arranging in descending order: South (≈$42.86) > Central (≈$39.39) > West (≈$34.62) > East (≈$31.71) > North (≈$28.57).

A notable comparison is East versus South: East produces the highest absolute operating profit (130 vs. 120), yet it also serves significantly more customers (4,100 vs. 2,800). The ratio 130/4,100 ≈ 0.03171 is strictly less than 120/2,800 ≈ 0.04286, confirming that a larger numerator does not guarantee a larger ratio when the denominator grows proportionally faster. Similarly, Central matches East in absolute profit but serves 3,300 customers, yielding a per-customer figure of approximately $39.39 — second-highest but still below South. West, despite the smallest absolute profit, benefits from a small customer base; its ratio of approximately $34.62 nevertheless trails South.

South achieves the highest operating profit per customer at approximately $42.86.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q37 (Set — Cohort Test Score Summary)

The following table summarizes test results across five cohorts (60 trainees in each):

| Cohort   | Mean | Median | Standard Deviation |
|----------|------|--------|--------------------|
| Alpha    | 78   | 80     | 12                 |
| Beta     | 82   | 82     | 6                  |
| Gamma    | 75   | 74     | 10                 |
| Delta    | 80   | 78     | 15                 |
| Epsilon  | 77   | 79     | 8                  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Interpreting Standard Deviation

Which of the following is most strongly supported by the data?

- A) Beta has the fewest high-scoring outliers among the five cohorts.
- B) Delta shows the greatest variability in scores among the five cohorts.
- C) Gamma has more trainees scoring below 75 than above 75.
- D) Alpha has more trainees scoring above 80 than below 80.
- E) Epsilon has the highest percentage of trainees within one standard deviation of its mean.

**answer:** B
**explanation:** **Standard deviation** is the primary statistical measure of dispersion — the greater the standard deviation, the more spread out the individual scores are around the mean. To determine which cohort shows the greatest variability, the standard deviations can be compared directly from the table.

Reading the Standard Deviation column for each cohort:

| Cohort   | Standard Deviation |
|----------|--------------------|
| Alpha    | 12                 |
| Beta     | 6                  |
| Gamma    | 10                 |
| Delta    | 15                 |
| Epsilon  | 8                  |

The ranking from highest to lowest is: Delta (15) > Alpha (12) > Gamma (10) > Epsilon (8) > Beta (6). Delta's standard deviation of 15 is the largest value in the column, and it exceeds the next-highest value (Alpha's 12) by 3 points — a margin of 3/12 = 25%, which is substantial.

Because each cohort contains the same number of trainees (60), no adjustment for sample size is needed; the raw standard deviations are directly comparable. The choice asserting that Beta has the fewest high-scoring outliers conflates a low standard deviation with a specific claim about the tails that cannot be confirmed without distributional assumptions. Similarly, the claims about Gamma's, Alpha's, and Epsilon's trainees relative to specific cutoffs require knowledge of the full distribution shape, not merely the mean and median — the mean-median relationships shown (e.g., Alpha: mean 78 < median 80, suggesting slight left skew; Delta: mean 80 > median 78, suggesting slight right skew) offer weak directional hints but do not permit precise percentage calculations. The only statement that follows directly and unambiguously from a single column of the table is the comparison of standard deviations, which identifies Delta as the most variable cohort.

Therefore, the statement that Delta shows the greatest variability in scores among the five cohorts is the one most strongly supported by the data.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis


---

## Q38 (Set — Five-City Statistics)

The following table summarizes five cities:

| City | Population (M) | Median Income ($K) | Crime Rate (per 1K) | Growth Rate (%) |
|------|----------------|--------------------|-----------------------|-----------------|
| A    | 2.5            | 68                 | 12                    | 1.8             |
| B    | 1.2            | 55                 | 8                     | 2.5             |
| C    | 3.8            | 72                 | 18                    | 0.9             |
| D    | 0.9            | 48                 | 6                     | 3.2             |
| E    | 5.1            | 82                 | 22                    | 0.5             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived-Ratio Ranking

Which city has the highest ratio of median income to crime rate (income divided by crime rate)?

- A) A
- B) B
- C) C
- D) D
- E) E

**answer:** D
**explanation:** The ratio of median income to crime rate is defined here as median income (in $K) divided by crime rate (per 1,000 residents). Let R(x) = Income(x) / Crime(x) for each city x. The city with the largest R(x) is the answer.

Computing R(x) for each city in turn:

- City A: R(A) = 68 / 12 = 5.667
- City B: R(B) = 55 / 8 = 6.875
- City C: R(C) = 72 / 18 = 4.000
- City D: R(D) = 48 / 6 = 8.000
- City E: R(E) = 82 / 22 = 3.727

Ranking these values: R(D) = 8.000 > R(B) = 6.875 > R(A) = 5.667 > R(C) = 4.000 > R(E) = 3.727.

A common error is to focus on whichever city has the highest absolute income (City E at $82K) or the lowest absolute crime rate (City D at 6 per 1,000) in isolation; the question asks for the ratio of the two. City E's crime rate of 22 per 1,000 is so elevated relative to its income that R(E) = 82/22 = 3.727, the lowest ratio of all five cities. City D, by contrast, pairs a modest income of $48K with the lowest crime rate of 6 per 1,000, yielding R(D) = 48/6 = 8.000 — strictly greater than every other city's ratio.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q39 (Set — Five-City Statistics, continued)

The following table summarizes five cities:

| City | Population (M) | Median Income ($K) | Crime Rate (per 1K) | Growth Rate (%) |
|------|----------------|--------------------|-----------------------|-----------------|
| A    | 2.5            | 68                 | 12                    | 1.8             |
| B    | 1.2            | 55                 | 8                     | 2.5             |
| C    | 3.8            | 72                 | 18                    | 0.9             |
| D    | 0.9            | 48                 | 6                     | 3.2             |
| E    | 5.1            | 82                 | 22                    | 0.5             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No Determination

For each statement, select Yes if the statement can be determined to be true based on the data; otherwise select No.

Statement: Every city with a median income above $60K also has a crime rate above 10 per 1,000.

- A) Yes
- B) No

**answer:** A
**explanation:** The governing principle for this type of statement is universal affirmation: the statement "Every city with property P also has property Q" is true if and only if there is no counterexample — that is, no city that satisfies P but fails Q. All cities for which median income exceeds $60K must therefore be identified, and each must be checked against the crime-rate condition.

**Identifying the qualifying set.**

Scanning the Median Income column reveals three cities whose values exceed $60K:

- City A: median income = $68K, so 68 > 60. Qualifies.
- City C: median income = $72K, so 72 > 60. Qualifies.
- City E: median income = $82K, so 82 > 60. Qualifies.

Cities B ($55K) and D ($48K) fall below the threshold and are therefore outside the qualifying set. Their crime rates are irrelevant to the truth of this statement.

**Checking the crime-rate condition for each qualifying city.**

For City A: crime rate = 12. The check 12 > 10 is true.

For City C: crime rate = 18. The check 18 > 10 is true.

For City E: crime rate = 22. The check 22 > 10 is true.

**Conclusion.**

All three cities that clear the income threshold (A, C, and E) also clear the crime-rate threshold. Because no counterexample exists in the data — no city with median income above $60K has a crime rate of 10 or below — the universal statement holds without exception. The answer is therefore Yes.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis


---

## Q40 (Set — Job Candidate Filter)

The following table lists six candidates for a role:

| Candidate | Years of Experience | GPA | Test Score | Interview Score |
|-----------|---------------------|-----|------------|-----------------|
| 1         | 5                   | 3.6 | 85         | 8               |
| 2         | 8                   | 3.2 | 78         | 9               |
| 3         | 3                   | 3.9 | 92         | 7               |
| 4         | 10                  | 3.5 | 88         | 9               |
| 5         | 6                   | 3.8 | 82         | 8               |
| 6         | 4                   | 3.4 | 90         | 6               |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

A candidate qualifies for the "senior track" position only if ALL of the following hold: at least 5 years of experience, a GPA of at least 3.5, and an interview score of at least 8. How many of the six candidates qualify?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** A candidate qualifies for the senior track if and only if three conditions hold simultaneously: years of experience >= 5, GPA >= 3.5, and interview score >= 8. Let E denote years of experience, G denote GPA, and I denote interview score. The qualifying rule is therefore E >= 5 AND G >= 3.5 AND I >= 8. Because the rule is conjunctive, failure on any single criterion eliminates a candidate regardless of performance on the others.

We apply this filter to each of the six candidates in turn.

**Candidate 1.** E = 5, G = 3.6, I = 8. Checking each condition: 5 >= 5 is satisfied; 3.6 >= 3.5 is satisfied; 8 >= 8 is satisfied. All three conditions hold. Candidate 1 qualifies.

**Candidate 2.** E = 8, G = 3.2, I = 9. The experience condition 8 >= 5 is satisfied and the interview condition 9 >= 8 is satisfied, but 3.2 >= 3.5 is not satisfied. The GPA condition fails. Candidate 2 does not qualify.

**Candidate 3.** E = 3, G = 3.9, I = 7. The experience condition requires 3 >= 5, which is not satisfied. Candidate 3 is eliminated at the first criterion regardless of the remaining values.

**Candidate 4.** E = 10, G = 3.5, I = 9. Checking: 10 >= 5 is satisfied; 3.5 >= 3.5 is satisfied (the boundary value is included); 9 >= 8 is satisfied. All three conditions hold. Candidate 4 qualifies.

**Candidate 5.** E = 6, G = 3.8, I = 8. Checking: 6 >= 5 is satisfied; 3.8 >= 3.5 is satisfied; 8 >= 8 is satisfied. All three conditions hold. Candidate 5 qualifies.

**Candidate 6.** E = 4, G = 3.4, I = 6. The experience condition requires 4 >= 5, which is not satisfied. Candidate 6 is eliminated at the first criterion.

The candidates who satisfy all three conditions are Candidates 1, 4, and 5, giving a total count of 3. The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q41 (Set — Job Candidate Filter, continued)

The following table lists six candidates for a role:

| Candidate | Years of Experience | GPA | Test Score | Interview Score |
|-----------|---------------------|-----|------------|-----------------|
| 1         | 5                   | 3.6 | 85         | 8               |
| 2         | 8                   | 3.2 | 78         | 9               |
| 3         | 3                   | 3.9 | 92         | 7               |
| 4         | 10                  | 3.5 | 88         | 9               |
| 5         | 6                   | 3.8 | 82         | 8               |
| 6         | 4                   | 3.4 | 90         | 6               |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No Determination

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: Every candidate with a GPA of at least 3.5 also has a test score of at least 85.

- A) Yes
- B) No

**answer:** B
**explanation:** The statement to be evaluated is a universal claim: for every candidate in the table whose GPA is at least 3.5, that same candidate's test score is at least 85. A universal claim of the form "every X satisfies condition Y" is false if and only if at least one counterexample exists — that is, at least one candidate for whom GPA >= 3.5 and test score < 85.

Scanning the GPA column for values >= 3.5 yields four candidates:

- Candidate 1: GPA = 3.6, Test Score = 85
- Candidate 3: GPA = 3.9, Test Score = 92
- Candidate 4: GPA = 3.5, Test Score = 88
- Candidate 5: GPA = 3.8, Test Score = 82

Checking whether each of these candidates also satisfies the test-score condition (Test Score >= 85):

- Candidate 1: 85 >= 85 — satisfied
- Candidate 3: 92 >= 85 — satisfied
- Candidate 4: 88 >= 85 — satisfied
- Candidate 5: 82 >= 85 — not satisfied, since 82 < 85

Candidate 5 has a GPA of 3.8, which is strictly greater than 3.5, yet that candidate's test score is only 82, which falls below the threshold of 85. This single counterexample is sufficient to refute the universal statement. The remaining candidates (Candidates 2 and 6), whose GPAs of 3.2 and 3.4 respectively fall below 3.5, are outside the scope of the claim and need not be examined.

Because a counterexample exists, the statement cannot be determined to be true from the table. Therefore the answer is No.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis


---

## Q42 (Set — Regional Statistics)

The following table summarizes six regions:

| Region | Population (M) | Median Income ($K) | Unemployment (%) |
|--------|----------------|--------------------|--------------------|
| A      | 2.5            | 62                 | 4.2                |
| B      | 1.8            | 58                 | 3.8                |
| C      | 3.2            | 70                 | 3.2                |
| D      | 0.9            | 45                 | 6.5                |
| E      | 5.1            | 75                 | 2.9                |
| F      | 1.5            | 55                 | 5.2                |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Yes/No — Conditional Share

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: Among regions with unemployment below 4%, more than half have median income above $60K.

- A) Yes
- B) No

**answer:** A
**explanation:** **The governing principle.** A conditional share question requires two sequential filters: first identify the subset of rows satisfying the stated condition, then determine what fraction of that subset satisfies a second property, and compare that fraction to the stated threshold.

**Step 1 — Identify regions with unemployment below 4%.**

The condition is unemployment (%) < 4. Scanning the table:

- Region A: 4.2 — does not satisfy 4.2 < 4
- Region B: 3.8 — satisfies 3.8 < 4
- Region C: 3.2 — satisfies 3.2 < 4
- Region D: 6.5 — does not satisfy 6.5 < 4
- Region E: 2.9 — satisfies 2.9 < 4
- Region F: 5.2 — does not satisfy 5.2 < 4

The qualifying subset is {B, C, E}, giving n = 3 regions.

**Step 2 — Among {B, C, E}, count those with median income above $60K.**

The secondary condition is median income ($K) > 60:

- Region B: 58 — does not satisfy 58 > 60
- Region C: 70 — satisfies 70 > 60
- Region E: 75 — satisfies 75 > 60

Let k = the count satisfying both conditions. The result is k = 2 (regions C and E).

**Step 3 — Compare the share to the stated threshold.**

The statement asserts that more than half of the qualifying regions meet the income criterion, i.e., k/n > 1/2. Substituting:

2/3 > 1/2

Cross-multiplying (both denominators positive): 2 x 2 > 1 x 3, which gives 4 > 3. This inequality holds. Therefore the share 2/3 exceeds the threshold 1/2, and the statement is determined to be true from the data in the table.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q43 (Set — Regional Statistics, continued)

The following table summarizes six regions:

| Region | Population (M) | Median Income ($K) | Unemployment (%) |
|--------|----------------|--------------------|--------------------|
| A      | 2.5            | 62                 | 4.2                |
| B      | 1.8            | 58                 | 3.8                |
| C      | 3.2            | 70                 | 3.2                |
| D      | 0.9            | 45                 | 6.5                |
| E      | 5.1            | 75                 | 2.9                |
| F      | 1.5            | 55                 | 5.2                |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Universal Claim Check

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: Every region with population above 1 million has an unemployment rate below 5%.

- A) Yes
- B) No

**answer:** B
**explanation:** **Universal claim verification.** A statement of the form "every member of set S satisfies condition C" is true if and only if no member of S violates C. A single counterexample is sufficient to establish that the statement is false, and therefore that the correct selection is No.

Let the condition be defined as follows. Let P(r) denote the population of region r in millions and U(r) denote the unemployment rate of region r in percent. The statement asserts: for every region r, if P(r) > 1, then U(r) < 5.

We first identify all regions satisfying P(r) > 1:

- Region A: P = 2.5 > 1. Included.
- Region B: P = 1.8 > 1. Included.
- Region C: P = 3.2 > 1. Included.
- Region D: P = 0.9, and 0.9 > 1 is false. Excluded.
- Region E: P = 5.1 > 1. Included.
- Region F: P = 1.5 > 1. Included.

We then check whether U(r) < 5 holds for each included region:

- Region A: U = 4.2, and 4.2 < 5. Condition satisfied.
- Region B: U = 3.8, and 3.8 < 5. Condition satisfied.
- Region C: U = 3.2, and 3.2 < 5. Condition satisfied.
- Region E: U = 2.9, and 2.9 < 5. Condition satisfied.
- Region F: U = 5.2, and 5.2 < 5 is false. Condition violated.

Region F has a population of 1.5 million, which exceeds the 1-million threshold, yet its unemployment rate of 5.2% does not satisfy U < 5. This constitutes a direct counterexample to the universal claim. Because the claim must hold for every qualifying region and it fails for Region F, the statement cannot be determined to be true from the table. The answer is therefore No.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis


---

## Q44 (Set — Five Products)

The following table summarizes five products:

| Product | Monthly Revenue ($K) | Profit Margin (%) | Inventory Turnover |
|---------|----------------------|-------------------|---------------------|
| A       | 120                  | 25                | 8                   |
| B       | 95                   | 32                | 12                  |
| C       | 180                  | 18                | 5                   |
| D       | 140                  | 28                | 10                  |
| E       | 85                   | 35                | 15                  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Conditional Universal

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: Every product with a profit margin above 25 percent has an inventory turnover rate of at least 10.

- A) Yes
- B) No

**answer:** A
**explanation:** **Universal Conditional Verification.**

A universal conditional of the form "every X with property P has property Q" is true if and only if there is no counterexample — that is, no row satisfying P for which Q fails. We therefore identify every product whose profit margin exceeds 25 percent and check whether each such product's inventory turnover is at least 10.

Let M denote a product's profit margin (%) and T denote its inventory turnover rate. The statement requires: for all products where M > 25, it is also the case that T >= 10.

**Step 1. Identify the qualifying rows (M > 25).**

Scanning the Profit Margin column:

- Product A: M = 25. Since 25 > 25 is false, Product A does not qualify.
- Product B: M = 32. Since 32 > 25, Product B qualifies.
- Product C: M = 18. Since 18 > 25 is false, Product C does not qualify.
- Product D: M = 28. Since 28 > 25, Product D qualifies.
- Product E: M = 35. Since 35 > 25, Product E qualifies.

The qualifying set is {B, D, E}.

**Step 2. Check the turnover condition (T >= 10) for each qualifying product.**

- Product B: T = 12. Since 12 >= 10, the condition is satisfied.
- Product D: T = 10. Since 10 >= 10 (equality satisfies "at least 10"), the condition is satisfied.
- Product E: T = 15. Since 15 >= 10, the condition is satisfied.

**Step 3. Conclude.**

Every product whose profit margin exceeds 25 percent — namely Products B, D, and E — has an inventory turnover rate of at least 10. There is no counterexample in the table. The universal conditional is therefore established as true on the basis of the data provided.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q45 (Set — Five Products, continued)

The following table summarizes five products:

| Product | Monthly Revenue ($K) | Profit Margin (%) | Inventory Turnover |
|---------|----------------------|-------------------|---------------------|
| A       | 120                  | 25                | 8                   |
| B       | 95                   | 32                | 12                  |
| C       | 180                  | 18                | 5                   |
| D       | 140                  | 28                | 10                  |
| E       | 85                   | 35                | 15                  |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Extremum Matching

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: The product with the lowest inventory turnover has the highest profit margin.

- A) Yes
- B) No

**answer:** B
**explanation:** **Identifying the extremes.** To evaluate the statement, we must identify two products: the one with the lowest inventory turnover and the one with the highest profit margin, then determine whether they are the same product.

**Step 1: Locate the lowest inventory turnover.** Scanning the Inventory Turnover column, the five values are 8 (A), 12 (B), 5 (C), 10 (D), and 15 (E). The minimum is 5, belonging to Product C.

**Step 2: Locate the highest profit margin.** Scanning the Profit Margin (%) column, the five values are 25 (A), 32 (B), 18 (C), 28 (D), and 35 (E). The maximum is 35, belonging to Product E.

**Step 3: Compare the two identified products.** The product with the lowest inventory turnover is C, while the product with the highest profit margin is E. These are distinct products. We can confirm that Product C carries a profit margin of only 18%, the lowest margin in the table, whereas Product E carries an inventory turnover of 15, the highest turnover in the table. The two extreme values not only belong to different products but to products whose metrics are, in each case, the opposite extreme from the one claimed.

**Step 4: Evaluate the statement.** The statement asserts that the product with the lowest inventory turnover (C) has the highest profit margin. Product C's profit margin is 18%, which is strictly less than the profit margins of all other products: 18 < 25 < 28 < 32 < 35. The statement is therefore false, and we select No.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis


---

## Q46 (Set — Five R&D-Intensive Companies)

The following table summarizes five companies in 2023:

| Company | R&D Spending ($M) | Revenue Growth (%) | Patents Filed |
|---------|-------------------|--------------------|---------------|
| Alpha   | 500               | 12                 | 80            |
| Beta    | 350               | 8                  | 60            |
| Gamma   | 700               | 15                 | 120           |
| Delta   | 200               | 5                  | 40            |
| Epsilon | 450               | 10                 | 90            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Strict Universal Claim

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: Every company with R&D spending above $400 million also filed more than 80 patents.

- A) Yes
- B) No

**answer:** B
**explanation:** **Governing principle.** A strict universal claim of the form "every member of set P also belongs to set Q" is true if and only if no counterexample exists — that is, no element satisfies P while failing Q. A single counterexample is sufficient to conclude the claim is false and select No.

**Define the conditions.** Let P denote the condition R&D Spending > 400 ($M), and let Q denote the condition Patents Filed > 80. The statement asserts: for every company, if P holds then Q holds.

**Identify companies satisfying P.** Scanning the R&D Spending column:

- Alpha: 500 > 400, so in scope.
- Beta: 350 is not greater than 400; not in scope.
- Gamma: 700 > 400, so in scope.
- Delta: 200 is not greater than 400; not in scope.
- Epsilon: 450 > 400, so in scope.

The set of companies satisfying P is {Alpha, Gamma, Epsilon}.

**Check condition Q for each company in scope.** The statement uses the strict inequality > 80, so exactly 80 patents does not satisfy Q.

- Alpha: Patents Filed = 80. Since 80 is not greater than 80, Q fails.
- Gamma: Patents Filed = 120. Since 120 > 80, Q holds.
- Epsilon: Patents Filed = 90. Since 90 > 80, Q holds.

**Conclusion.** Alpha has R&D Spending of 500, which exceeds 400 and satisfies P, yet filed exactly 80 patents, which does not satisfy the strict requirement Patents > 80. Alpha is therefore a direct counterexample to the universal claim. Because one counterexample is sufficient to refute a strict universal statement, the claim cannot be determined to be true from the table.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q47 (Set — Five R&D-Intensive Companies, continued)

The following table summarizes five companies in 2023:

| Company | R&D Spending ($M) | Revenue Growth (%) | Patents Filed |
|---------|-------------------|--------------------|---------------|
| Alpha   | 500               | 12                 | 80            |
| Beta    | 350               | 8                  | 60            |
| Gamma   | 700               | 15                 | 120           |
| Delta   | 200               | 5                  | 40            |
| Epsilon | 450               | 10                 | 90            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Extremum Alignment

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: The company with the highest R&D spending also has the highest revenue growth rate.

- A) Yes
- B) No

**answer:** A
**explanation:** **Extremum Alignment — R&D Spending and Revenue Growth.**

To evaluate this statement, the analysis must identify, for each metric independently, which company holds the maximum value, then determine whether those two maxima belong to the same company.

**Step 1 — Identify the company with the highest R&D spending.**

Reading the R&D Spending column directly:

- Alpha: 500
- Beta: 350
- Gamma: 700
- Delta: 200
- Epsilon: 450

Ordering these values: 700 > 500 > 450 > 350 > 200. The maximum R&D spending is 700, held by Gamma.

**Step 2 — Identify the company with the highest revenue growth rate.**

Reading the Revenue Growth column directly:

- Alpha: 12%
- Beta: 8%
- Gamma: 15%
- Delta: 5%
- Epsilon: 10%

Ordering these values: 15 > 12 > 10 > 8 > 5. The maximum revenue growth rate is 15%, held by Gamma.

**Step 3 — Compare the two extrema.**

Both the maximum R&D spending (700) and the maximum revenue growth rate (15%) are associated with the same company, Gamma. The alignment condition is therefore satisfied: the company with the highest R&D spending is identical to the company with the highest revenue growth rate. No further computation is required; the statement does not depend on any proportionality or causal relationship — it requires only that the two row-wise maxima coincide, which they do.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis


---

## Q48 (Set — Five Companies Financial Snapshot)

The following table summarizes five companies:

| Company | Revenue ($M) | Profit Margin (%) | Growth Rate (%) | Employees |
|---------|--------------|-------------------|-----------------|-----------|
| Alpha   | 500          | 18                | 12              | 1,200     |
| Beta    | 380          | 22                | 8               | 850       |
| Gamma   | 650          | 15                | 15              | 1,800     |
| Delta   | 250          | 25                | 6               | 600       |
| Epsilon | 420          | 20                | 10              | 950       |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Multi-Criterion Filter

How many of the five companies have Revenue greater than $400 million AND a Growth Rate of at least 10 percent?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** D
**explanation:** The question requires identifying every company that satisfies two simultaneous conditions: Revenue strictly greater than $400 million AND Growth Rate greater than or equal to 10 percent. A company must clear both thresholds; failing either disqualifies it.

Let R denote Revenue (in $M) and G denote Growth Rate (in %). The governing filter is R > 400 AND G >= 10, applied row by row.

Alpha has R = 500 and G = 12. Because 500 > 400 and 12 >= 10, Alpha satisfies both conditions and qualifies. Beta has R = 380 and G = 8. Because 380 < 400, the first condition fails immediately and Beta does not qualify. Gamma has R = 650 and G = 15. Because 650 > 400 and 15 >= 10, Gamma satisfies both conditions and qualifies. Delta has R = 250 and G = 6. Because 250 < 400, the first condition fails and Delta does not qualify. Epsilon has R = 420 and G = 10. Because 420 > 400 and 10 >= 10, Epsilon satisfies both conditions and qualifies.

The qualifying companies are Alpha, Gamma, and Epsilon, giving a count of 3. Beta is eliminated by insufficient revenue alone, and Delta is likewise eliminated before the growth criterion is even relevant.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q49 (Set — Five Companies Financial Snapshot, continued)

The following table summarizes five companies:

| Company | Revenue ($M) | Profit Margin (%) | Growth Rate (%) | Employees |
|---------|--------------|-------------------|-----------------|-----------|
| Alpha   | 500          | 18                | 12              | 1,200     |
| Beta    | 380          | 22                | 8               | 850       |
| Gamma   | 650          | 15                | 15              | 1,800     |
| Delta   | 250          | 25                | 6               | 600       |
| Epsilon | 420          | 20                | 10              | 950       |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Yes/No — Extremum Alignment (Counterexample)

Select Yes if the statement can be determined to be true based on the table; otherwise select No.

Statement: The company with the highest profit margin also has the highest growth rate.

- A) Yes
- B) No

**answer:** B
**explanation:** To evaluate this statement, it is necessary to identify which company holds the maximum value in the Profit Margin column and which company holds the maximum value in the Growth Rate column, then determine whether those two extrema belong to the same company.

Scanning the Profit Margin (%) column across all five companies yields the following ordered values: Delta at 25%, Beta at 22%, Epsilon at 20%, Alpha at 18%, and Gamma at 15%. The maximum profit margin is 25%, belonging to Delta.

Scanning the Growth Rate (%) column across all five companies yields: Gamma at 15%, Alpha at 12%, Epsilon at 10%, Beta at 8%, and Delta at 6%. The maximum growth rate is 15%, belonging to Gamma.

A statement of the form "the entity with the highest value in attribute A also has the highest value in attribute B" is true if and only if a single entity simultaneously achieves both maxima. Here, the highest profit margin belongs to Delta (25%) and the highest growth rate belongs to Gamma (15%). These are distinct companies; no single company holds both extrema. In fact, Delta — the profit-margin leader — records the lowest growth rate in the entire table (6%), which is a direct counterexample to the claim.

Because the table provides a clear counterexample, the statement cannot be determined to be true from the data given.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q50 (Set 6 — Airline Route Performance)

The following table shows monthly operating data for five airline routes:

| Route    | Flights | Passengers | Revenue ($K) | On-Time (%) |
|----------|---------|------------|--------------|-------------|
| BlueJet  | 480     | 62,400     | 5,616        | 88          |
| SkyArc   | 360     | 50,400     | 4,032        | 92          |
| AeroLink | 600     | 69,000     | 6,210        | 79          |
| Nimbus   | 420     | 54,600     | 4,914        | 85          |
| Zephyr   | 300     | 39,000     | 3,900        | 95          |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Direct Comparison

Which route carried the most passengers in total during the month?

- A) BlueJet
- B) SkyArc
- C) AeroLink
- D) Nimbus
- E) Zephyr

**answer:** C
**explanation:** The total number of passengers carried by each route is read directly from the Passengers column; no derived computation is required, only a comparison of the five stated values.

The Passengers column records:

- BlueJet: 62,400
- SkyArc: 50,400
- AeroLink: 69,000
- Nimbus: 54,600
- Zephyr: 39,000

Ordering these five totals from greatest to least: 69,000 > 62,400 > 54,600 > 50,400 > 39,000, which corresponds to AeroLink > BlueJet > Nimbus > SkyArc > Zephyr.

AeroLink's total of 69,000 passengers is strictly greater than that of every other route, exceeding the next-highest route (BlueJet, at 62,400) by 6,600 passengers. Note that AeroLink also operates the most flights (600), which is consistent with its leading passenger total, though the question concerns total passengers carried rather than flights operated.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q51 (Set 6 — Airline Route Performance, continued)

The following table shows monthly operating data for five airline routes:

| Route    | Flights | Passengers | Revenue ($K) | On-Time (%) |
|----------|---------|------------|--------------|-------------|
| BlueJet  | 480     | 62,400     | 5,616        | 88          |
| SkyArc   | 360     | 50,400     | 4,032        | 92          |
| AeroLink | 600     | 69,000     | 6,210        | 79          |
| Nimbus   | 420     | 54,600     | 4,914        | 85          |
| Zephyr   | 300     | 39,000     | 3,900        | 95          |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived-Metric Ranking

Which route carried the most passengers per flight?

- A) BlueJet
- B) SkyArc
- C) AeroLink
- D) Nimbus
- E) Zephyr

**answer:** B
**explanation:** Passengers per flight is a derived load metric defined as total passengers divided by the number of flights operated: load = Passengers / Flights. Because AeroLink carries the most passengers in absolute terms but also operates the most flights, the per-flight figure must be computed individually for each route rather than inferred from totals.

Let L denote passengers per flight for each route.

- BlueJet: L = 62,400 / 480 = 130
- SkyArc: L = 50,400 / 360 = 140
- AeroLink: L = 69,000 / 600 = 115
- Nimbus: L = 54,600 / 420 = 130
- Zephyr: L = 39,000 / 300 = 130

Ranking these values: SkyArc (140) > BlueJet (130) = Nimbus (130) = Zephyr (130) > AeroLink (115).

SkyArc's load of 140 passengers per flight is strictly the highest. This illustrates that the route with the largest absolute passenger count is not necessarily the most efficiently loaded: AeroLink leads in total passengers (69,000) yet posts the lowest load factor (115) because its 600 flights spread those passengers across more departures than any other route. SkyArc, by contrast, concentrates 50,400 passengers into only 360 flights, producing the highest passengers-per-flight figure in the table.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q52 (Set 6 — Airline Route Performance, continued)

The following table shows monthly operating data for five airline routes:

| Route    | Flights | Passengers | Revenue ($K) | On-Time (%) |
|----------|---------|------------|--------------|-------------|
| BlueJet  | 480     | 62,400     | 5,616        | 88          |
| SkyArc   | 360     | 50,400     | 4,032        | 92          |
| AeroLink | 600     | 69,000     | 6,210        | 79          |
| Nimbus   | 420     | 54,600     | 4,914        | 85          |
| Zephyr   | 300     | 39,000     | 3,900        | 95          |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Unit-Consistent Ratio

Which route generated the highest revenue per passenger?

- A) BlueJet
- B) SkyArc
- C) AeroLink
- D) Nimbus
- E) Zephyr

**answer:** E
**explanation:** Revenue per passenger is defined as total revenue divided by the number of passengers carried. Because revenue is reported in thousands of dollars ($K) while passenger counts are stated as plain integers, each revenue figure must be multiplied by 1,000 to convert it to dollars before dividing, so that the result is expressed in dollars per passenger.

For each route, let RPP = (Revenue ($K) x 1,000) / Passengers.

- BlueJet: (5,616 x 1,000) / 62,400 = 5,616,000 / 62,400 = 90
- SkyArc: (4,032 x 1,000) / 50,400 = 4,032,000 / 50,400 = 80
- AeroLink: (6,210 x 1,000) / 69,000 = 6,210,000 / 69,000 = 90
- Nimbus: (4,914 x 1,000) / 54,600 = 4,914,000 / 54,600 = 90
- Zephyr: (3,900 x 1,000) / 39,000 = 3,900,000 / 39,000 = 100

Ranking these values: Zephyr ($100) > BlueJet ($90) = AeroLink ($90) = Nimbus ($90) > SkyArc ($80).

Zephyr's revenue per passenger of $100 is strictly the highest. Notably, Zephyr records both the smallest absolute revenue ($3,900K) and the fewest passengers (39,000) in the table, yet because its revenue is high relative to its modest passenger base, its per-passenger figure exceeds that of every other route. Three routes — BlueJet, AeroLink, and Nimbus — tie at exactly $90, and SkyArc trails at $80, but none reaches Zephyr's $100.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q53 (Set 6 — Airline Route Performance, continued)

The following table shows monthly operating data for five airline routes:

| Route    | Flights | Passengers | Revenue ($K) | On-Time (%) |
|----------|---------|------------|--------------|-------------|
| BlueJet  | 480     | 62,400     | 5,616        | 88          |
| SkyArc   | 360     | 50,400     | 4,032        | 92          |
| AeroLink | 600     | 69,000     | 6,210        | 79          |
| Nimbus   | 420     | 54,600     | 4,914        | 85          |
| Zephyr   | 300     | 39,000     | 3,900        | 95          |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many routes have BOTH a revenue per passenger of at least $90 AND an on-time rate above 85%?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** The question imposes two simultaneous conditions: revenue per passenger >= $90 AND on-time rate > 85%. A route qualifies only if both inequalities hold; failure on either condition disqualifies it. Note that the first condition is inclusive (at least $90, so exactly $90 counts), while the second is strict (above 85%, so exactly 85% does not count).

Revenue per passenger is computed as (Revenue ($K) x 1,000) / Passengers, with revenue converted from thousands to dollars:

- BlueJet: 5,616,000 / 62,400 = $90
- SkyArc: 4,032,000 / 50,400 = $80
- AeroLink: 6,210,000 / 69,000 = $90
- Nimbus: 4,914,000 / 54,600 = $90
- Zephyr: 3,900,000 / 39,000 = $100

Applying the first condition (RPP >= $90): BlueJet ($90), AeroLink ($90), Nimbus ($90), and Zephyr ($100) all qualify; SkyArc ($80) is eliminated.

Now applying the second condition (on-time rate > 85%) to the four survivors, reading the On-Time column directly:

- BlueJet: 88% > 85% — satisfied. Both conditions hold; BlueJet qualifies.
- AeroLink: 79% > 85% is false — fails the on-time condition. AeroLink does not qualify.
- Nimbus: 85% > 85% is false — the rate equals but does not exceed the threshold under the strict inequality. Nimbus does not qualify.
- Zephyr: 95% > 85% — satisfied. Both conditions hold; Zephyr qualifies.

Exactly two routes — BlueJet and Zephyr — satisfy both conditions simultaneously. The critical case is Nimbus, whose revenue per passenger of $90 clears the first hurdle but whose on-time rate of exactly 85% fails the strict "above 85%" requirement, so it is correctly excluded.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q54 (Set 7 — Coffee Shop Daily Operations)

The following table shows one day of operating data for five coffee shops:

| Shop    | Cups Sold | Revenue ($) | Labor Hours | Rating |
|---------|-----------|-------------|-------------|--------|
| Roasted | 540       | 2,160       | 36          | 4.6    |
| Grind   | 420       | 1,890       | 30          | 4.8    |
| Steam   | 600       | 2,100       | 40          | 4.2    |
| Bean    | 480       | 2,400       | 32          | 4.5    |
| Brew    | 360       | 1,620       | 24          | 4.7    |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Direct Comparison

Which shop sold the most cups during the day?

- A) Roasted
- B) Grind
- C) Steam
- D) Bean
- E) Brew

**answer:** C
**explanation:** The number of cups sold by each shop is read directly from the Cups Sold column, and the largest value is identified by comparison; no derived calculation is required.

The Cups Sold column records:

- Roasted: 540
- Grind: 420
- Steam: 600
- Bean: 480
- Brew: 360

Ordering these five values from greatest to least: 600 > 540 > 480 > 420 > 360, corresponding to Steam > Roasted > Bean > Grind > Brew.

Steam's total of 600 cups is strictly greater than that of every other shop, exceeding the next-highest shop (Roasted, at 540) by 60 cups. It is worth observing that Steam does not lead in revenue — its $2,100 in sales is lower than Bean's $2,400 despite Steam selling more cups — but the question asks only about cups sold, for which Steam is unambiguously the leader.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q55 (Set 7 — Coffee Shop Daily Operations, continued)

The following table shows one day of operating data for five coffee shops:

| Shop    | Cups Sold | Revenue ($) | Labor Hours | Rating |
|---------|-----------|-------------|-------------|--------|
| Roasted | 540       | 2,160       | 36          | 4.6    |
| Grind   | 420       | 1,890       | 30          | 4.8    |
| Steam   | 600       | 2,100       | 40          | 4.2    |
| Bean    | 480       | 2,400       | 32          | 4.5    |
| Brew    | 360       | 1,620       | 24          | 4.7    |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived-Metric Ranking

Which shop earned the highest revenue per cup sold?

- A) Roasted
- B) Grind
- C) Steam
- D) Bean
- E) Brew

**answer:** D
**explanation:** Revenue per cup is defined as total revenue divided by cups sold: RPC = Revenue ($) / Cups Sold. Both quantities are already in compatible units (dollars and cups), so the ratio yields dollars per cup directly. This derived metric must be computed for each shop because the shop selling the most cups need not be the one earning the most per cup.

Computing RPC for each shop:

- Roasted: 2,160 / 540 = $4.00
- Grind: 1,890 / 420 = $4.50
- Steam: 2,100 / 600 = $3.50
- Bean: 2,400 / 480 = $5.00
- Brew: 1,620 / 360 = $4.50

Ranking these values: Bean ($5.00) > Grind ($4.50) = Brew ($4.50) > Roasted ($4.00) > Steam ($3.50).

Bean's revenue per cup of $5.00 is strictly the highest. The contrast with Steam is instructive: Steam sells the most cups (600) yet has the lowest revenue per cup ($3.50), because its total revenue of $2,100 is spread across the largest volume. Bean, despite selling fewer cups (480), commands the highest price per cup, giving it the top revenue-per-cup figure even though its total revenue of $2,400 leads the table as well.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q56 (Set 7 — Coffee Shop Daily Operations, continued)

The following table shows one day of operating data for five coffee shops:

| Shop    | Cups Sold | Revenue ($) | Labor Hours | Rating |
|---------|-----------|-------------|-------------|--------|
| Roasted | 540       | 2,160       | 36          | 4.6    |
| Grind   | 420       | 1,890       | 30          | 4.8    |
| Steam   | 600       | 2,100       | 40          | 4.2    |
| Bean    | 480       | 2,400       | 32          | 4.5    |
| Brew    | 360       | 1,620       | 24          | 4.7    |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Labor Productivity

Which shop generated the most revenue per labor hour?

- A) Roasted
- B) Grind
- C) Steam
- D) Bean
- E) Brew

**answer:** D
**explanation:** Revenue per labor hour is a productivity metric defined as total revenue divided by labor hours worked: RPL = Revenue ($) / Labor Hours. It measures how much sales each hour of staffed labor produces, and must be computed individually for each shop.

Computing RPL for each shop:

- Roasted: 2,160 / 36 = $60.00
- Grind: 1,890 / 30 = $63.00
- Steam: 2,100 / 40 = $52.50
- Bean: 2,400 / 32 = $75.00
- Brew: 1,620 / 24 = $67.50

Ranking these values: Bean ($75.00) > Brew ($67.50) > Grind ($63.00) > Roasted ($60.00) > Steam ($52.50).

Bean's revenue per labor hour of $75.00 is strictly the highest. Bean combines the table's highest total revenue ($2,400) with a relatively lean staffing level of 32 labor hours, producing the top productivity figure. Steam, in contrast, posts the lowest productivity ($52.50) because it deploys the most labor hours (40) while generating only $2,100 in revenue. The ranking by productivity differs from the ranking by total revenue alone, confirming that the per-hour figure must be calculated rather than inferred from revenue.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q57 (Set 7 — Coffee Shop Daily Operations, continued)

The following table shows one day of operating data for five coffee shops:

| Shop    | Cups Sold | Revenue ($) | Labor Hours | Rating |
|---------|-----------|-------------|-------------|--------|
| Roasted | 540       | 2,160       | 36          | 4.6    |
| Grind   | 420       | 1,890       | 30          | 4.8    |
| Steam   | 600       | 2,100       | 40          | 4.2    |
| Bean    | 480       | 2,400       | 32          | 4.5    |
| Brew    | 360       | 1,620       | 24          | 4.7    |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many shops have BOTH a revenue per cup of at least $4.50 AND a customer rating above 4.5?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** Two conditions must hold simultaneously: revenue per cup >= $4.50 AND rating > 4.5. A shop qualifies only when both inequalities are satisfied. The first condition is inclusive (at least $4.50, so exactly $4.50 counts), while the second is strict (above 4.5, so exactly 4.5 does not count).

Revenue per cup is computed as Revenue ($) / Cups Sold:

- Roasted: 2,160 / 540 = $4.00
- Grind: 1,890 / 420 = $4.50
- Steam: 2,100 / 600 = $3.50
- Bean: 2,400 / 480 = $5.00
- Brew: 1,620 / 360 = $4.50

Applying the first condition (RPC >= $4.50): Grind ($4.50), Bean ($5.00), and Brew ($4.50) qualify; Roasted ($4.00) and Steam ($3.50) are eliminated.

Now applying the second condition (rating > 4.5) to the three survivors, reading the Rating column directly:

- Grind: 4.8 > 4.5 — satisfied. Both conditions hold; Grind qualifies.
- Bean: 4.5 > 4.5 is false — the rating equals but does not exceed the threshold under the strict inequality. Bean does not qualify.
- Brew: 4.7 > 4.5 — satisfied. Both conditions hold; Brew qualifies.

Exactly two shops — Grind and Brew — satisfy both conditions. The decisive case is Bean: although it has the highest revenue per cup in the table ($5.00), its rating of exactly 4.5 fails the strict "above 4.5" requirement, so it is correctly excluded despite clearing the first hurdle by the largest margin.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q58 (Set 8 — Warehouse Inventory)

The following table shows monthly data for five distribution warehouses:

| Warehouse | Units Stored | Capacity | Monthly Cost ($K) | Defect Rate (%) |
|-----------|--------------|----------|-------------------|-----------------|
| Harbor    | 8,400        | 12,000   | 42                | 2.0             |
| Ridge     | 6,300        | 9,000    | 36                | 1.5             |
| Vale      | 9,600        | 10,000   | 60                | 3.0             |
| Crest     | 5,400        | 6,000    | 30                | 1.2             |
| Glen      | 7,200        | 12,000   | 48                | 2.5             |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Direct Comparison

Which warehouse currently stores the most units?

- A) Harbor
- B) Ridge
- C) Vale
- D) Crest
- E) Glen

**answer:** C
**explanation:** The number of units currently stored in each warehouse is read directly from the Units Stored column, and the maximum is identified by comparison; no derived computation is needed.

The Units Stored column records:

- Harbor: 8,400
- Ridge: 6,300
- Vale: 9,600
- Crest: 5,400
- Glen: 7,200

Ordering these five values from greatest to least: 9,600 > 8,400 > 7,200 > 6,300 > 5,400, corresponding to Vale > Harbor > Glen > Ridge > Crest.

Vale's total of 9,600 units stored is strictly greater than that of every other warehouse, exceeding the next-highest warehouse (Harbor, at 8,400) by 1,200 units. Vale achieves this despite not having the largest capacity in the table — both Harbor and Glen list a capacity of 12,000 — because Vale fills a far greater share of its 10,000-unit capacity, but the question concerns absolute units stored, for which Vale leads.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q59 (Set 8 — Warehouse Inventory, continued)

The following table shows monthly data for five distribution warehouses:

| Warehouse | Units Stored | Capacity | Monthly Cost ($K) | Defect Rate (%) |
|-----------|--------------|----------|-------------------|-----------------|
| Harbor    | 8,400        | 12,000   | 42                | 2.0             |
| Ridge     | 6,300        | 9,000    | 36                | 1.5             |
| Vale      | 9,600        | 10,000   | 60                | 3.0             |
| Crest     | 5,400        | 6,000    | 30                | 1.2             |
| Glen      | 7,200        | 12,000   | 48                | 2.5             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Utilization Ratio

Which warehouse has the highest utilization rate (units stored divided by capacity)?

- A) Harbor
- B) Ridge
- C) Vale
- D) Crest
- E) Glen

**answer:** C
**explanation:** Utilization rate is defined as units stored divided by total capacity, expressed as a percentage: utilization = (Units Stored / Capacity) x 100. This derived metric measures how much of each warehouse's available space is in use, and must be computed for every warehouse because the warehouse storing the most units is not necessarily the one filling the largest share of its capacity.

Computing the utilization rate for each warehouse:

- Harbor: 8,400 / 12,000 = 0.700 = 70%
- Ridge: 6,300 / 9,000 = 0.700 = 70%
- Vale: 9,600 / 10,000 = 0.960 = 96%
- Crest: 5,400 / 6,000 = 0.900 = 90%
- Glen: 7,200 / 12,000 = 0.600 = 60%

Ranking these values: Vale (96%) > Crest (90%) > Harbor (70%) = Ridge (70%) > Glen (60%).

Vale's utilization rate of 96% is strictly the highest. Vale combines the largest absolute holdings (9,600 units) with the second-smallest capacity (10,000), so nearly all of its space is occupied. Glen, by contrast, posts the lowest utilization (60%) despite a large 12,000-unit capacity, because it stores only 7,200 units. The ranking by utilization differs from the ranking by absolute units stored only at the margins, but Vale leads on both measures here.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q60 (Set 8 — Warehouse Inventory, continued)

The following table shows monthly data for five distribution warehouses:

| Warehouse | Units Stored | Capacity | Monthly Cost ($K) | Defect Rate (%) |
|-----------|--------------|----------|-------------------|-----------------|
| Harbor    | 8,400        | 12,000   | 42                | 2.0             |
| Ridge     | 6,300        | 9,000    | 36                | 1.5             |
| Vale      | 9,600        | 10,000   | 60                | 3.0             |
| Crest     | 5,400        | 6,000    | 30                | 1.2             |
| Glen      | 7,200        | 12,000   | 48                | 2.5             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Unit-Consistent Cost Ratio

Which warehouse has the lowest monthly cost per unit stored?

- A) Harbor
- B) Ridge
- C) Vale
- D) Crest
- E) Glen

**answer:** A
**explanation:** Cost per unit stored is defined as monthly cost divided by units stored. Because monthly cost is reported in thousands of dollars ($K) while units are stated as plain integers, each cost figure must be multiplied by 1,000 to convert it to dollars before dividing, so that the result is expressed in dollars per unit. The lowest value is sought.

For each warehouse, let CPU = (Monthly Cost ($K) x 1,000) / Units Stored.

- Harbor: (42 x 1,000) / 8,400 = 42,000 / 8,400 = $5.000
- Ridge: (36 x 1,000) / 6,300 = 36,000 / 6,300 = $5.714
- Vale: (60 x 1,000) / 9,600 = 60,000 / 9,600 = $6.250
- Crest: (30 x 1,000) / 5,400 = 30,000 / 5,400 = $5.556
- Glen: (48 x 1,000) / 7,200 = 48,000 / 7,200 = $6.667

Ranking these values from lowest to highest: Harbor ($5.000) < Crest ($5.556) < Ridge ($5.714) < Vale ($6.250) < Glen ($6.667).

Harbor's cost per unit stored of $5.000 is strictly the lowest. A common error would be to select the warehouse with the smallest absolute monthly cost (Crest, at $30K) or the one storing the most units (Vale); but the relevant figure is the ratio of cost to units. Harbor's $42K cost is spread over a large base of 8,400 units, yielding the lowest per-unit cost, whereas Vale's high cost of $60K and Glen's $48K, divided over smaller stored quantities, produce the two highest per-unit figures.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q61 (Set 8 — Warehouse Inventory, continued)

The following table shows monthly data for five distribution warehouses:

| Warehouse | Units Stored | Capacity | Monthly Cost ($K) | Defect Rate (%) |
|-----------|--------------|----------|-------------------|-----------------|
| Harbor    | 8,400        | 12,000   | 42                | 2.0             |
| Ridge     | 6,300        | 9,000    | 36                | 1.5             |
| Vale      | 9,600        | 10,000   | 60                | 3.0             |
| Crest     | 5,400        | 6,000    | 30                | 1.2             |
| Glen      | 7,200        | 12,000   | 48                | 2.5             |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many warehouses have BOTH a utilization rate above 65% AND a defect rate below 2.5%?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** C
**explanation:** Two conditions must hold simultaneously: utilization rate > 65% AND defect rate < 2.5%. A warehouse qualifies only when both strict inequalities are satisfied; a value of exactly 65% utilization or exactly 2.5% defect rate fails the corresponding condition.

Utilization rate is computed as (Units Stored / Capacity) x 100:

- Harbor: 8,400 / 12,000 = 70%
- Ridge: 6,300 / 9,000 = 70%
- Vale: 9,600 / 10,000 = 96%
- Crest: 5,400 / 6,000 = 90%
- Glen: 7,200 / 12,000 = 60%

Applying the first condition (utilization > 65%): Harbor (70%), Ridge (70%), Vale (96%), and Crest (90%) qualify; Glen (60%) is eliminated because 60% is not greater than 65%.

Now applying the second condition (defect rate < 2.5%) to the four survivors, reading the Defect Rate column directly:

- Harbor: 2.0 < 2.5 — satisfied. Both conditions hold; Harbor qualifies.
- Ridge: 1.5 < 2.5 — satisfied. Both conditions hold; Ridge qualifies.
- Vale: 3.0 < 2.5 is false — fails the defect condition. Vale does not qualify.
- Crest: 1.2 < 2.5 — satisfied. Both conditions hold; Crest qualifies.

Three warehouses — Harbor, Ridge, and Crest — satisfy both conditions simultaneously. Vale, despite the table's highest utilization rate (96%), is disqualified by its defect rate of 3.0%, which exceeds the 2.5% ceiling. Glen fails the utilization screen at 60% (and would also fail the defect screen, since its 2.5% rate is not strictly below 2.5%). The total count of qualifying warehouses is therefore 3.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q62 (Set 9 — Electric Vehicle Models)

The following table shows specifications for five electric vehicle models:

| Model  | Range (mi) | Battery (kWh) | Base Price ($K) | 0-60 (s) |
|--------|------------|---------------|-----------------|----------|
| Volt-X | 320        | 80            | 48              | 4.5      |
| Aero   | 280        | 75            | 44              | 5.2      |
| Pulse  | 360        | 100           | 60              | 3.8      |
| Nimbus | 240        | 64            | 35              | 6.0      |
| Surge  | 300        | 90            | 54              | 4.0      |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Direct Comparison

Which model has the longest driving range?

- A) Volt-X
- B) Aero
- C) Pulse
- D) Nimbus
- E) Surge

**answer:** C
**explanation:** The driving range of each model is read directly from the Range (mi) column, and the maximum is identified by comparison; no derived computation is required.

The Range (mi) column records:

- Volt-X: 320
- Aero: 280
- Pulse: 360
- Nimbus: 240
- Surge: 300

Ordering these five values from greatest to least: 360 > 320 > 300 > 280 > 240, corresponding to Pulse > Volt-X > Surge > Aero > Nimbus.

Pulse's range of 360 miles is strictly greater than that of every other model, exceeding the next-longest range (Volt-X, at 320) by 40 miles. Pulse also carries the largest battery in the table (100 kWh), which is consistent with its leading range, though the question concerns range itself, for which Pulse leads outright.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q63 (Set 9 — Electric Vehicle Models, continued)

The following table shows specifications for five electric vehicle models:

| Model  | Range (mi) | Battery (kWh) | Base Price ($K) | 0-60 (s) |
|--------|------------|---------------|-----------------|----------|
| Volt-X | 320        | 80            | 48              | 4.5      |
| Aero   | 280        | 75            | 44              | 5.2      |
| Pulse  | 360        | 100           | 60              | 3.8      |
| Nimbus | 240        | 64            | 35              | 6.0      |
| Surge  | 300        | 90            | 54              | 4.0      |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Efficiency Ratio

Which model is the most energy-efficient, measured as range per unit of battery capacity (miles per kWh)?

- A) Volt-X
- B) Aero
- C) Pulse
- D) Nimbus
- E) Surge

**answer:** A
**explanation:** Energy efficiency is defined as range divided by battery capacity: efficiency = Range (mi) / Battery (kWh), expressed in miles per kWh. This derived metric must be computed for every model, because the model with the longest range is not necessarily the one that travels the most distance per unit of stored energy.

Computing the efficiency for each model:

- Volt-X: 320 / 80 = 4.000 mi/kWh
- Aero: 280 / 75 ≈ 3.733 mi/kWh
- Pulse: 360 / 100 = 3.600 mi/kWh
- Nimbus: 240 / 64 = 3.750 mi/kWh
- Surge: 300 / 90 ≈ 3.333 mi/kWh

Ranking these values from highest to lowest: Volt-X (4.000) > Nimbus (3.750) > Aero (3.733) > Pulse (3.600) > Surge (3.333).

Volt-X's efficiency of exactly 4.000 mi/kWh is strictly the highest. A common error would be to select Pulse, which posts both the longest range (360 mi) and the largest battery (100 kWh); but its large battery dilutes its efficiency to 3.600 mi/kWh, the second-lowest in the table. Volt-X achieves the leading efficiency by pairing a substantial 320-mile range with a moderate 80 kWh battery.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q64 (Set 9 — Electric Vehicle Models, continued)

The following table shows specifications for five electric vehicle models:

| Model  | Range (mi) | Battery (kWh) | Base Price ($K) | 0-60 (s) |
|--------|------------|---------------|-----------------|----------|
| Volt-X | 320        | 80            | 48              | 4.5      |
| Aero   | 280        | 75            | 44              | 5.2      |
| Pulse  | 360        | 100           | 60              | 3.8      |
| Nimbus | 240        | 64            | 35              | 6.0      |
| Surge  | 300        | 90            | 54              | 4.0      |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Unit-Consistent Cost Ratio

Which model has the lowest base price per mile of range?

- A) Volt-X
- B) Aero
- C) Pulse
- D) Nimbus
- E) Surge

**answer:** D
**explanation:** Base price per mile of range is defined as base price divided by range. Because base price is reported in thousands of dollars ($K) while range is stated in plain miles, each price figure must be multiplied by 1,000 to convert it to dollars before dividing, so that the result is expressed in dollars per mile. The lowest value is sought.

For each model, let PPM = (Base Price ($K) x 1,000) / Range (mi).

- Volt-X: (48 x 1,000) / 320 = 48,000 / 320 = $150.00
- Aero: (44 x 1,000) / 280 = 44,000 / 280 ≈ $157.14
- Pulse: (60 x 1,000) / 360 = 60,000 / 360 ≈ $166.67
- Nimbus: (35 x 1,000) / 240 = 35,000 / 240 ≈ $145.83
- Surge: (54 x 1,000) / 300 = 54,000 / 300 = $180.00

Ranking these values from lowest to highest: Nimbus ($145.83) < Volt-X ($150.00) < Aero ($157.14) < Pulse ($166.67) < Surge ($180.00).

Nimbus's price per mile of range of approximately $145.83 is strictly the lowest. A common error would be to select the model with the smallest absolute base price (Nimbus, at $35K) by assuming the lowest sticker price automatically yields the lowest cost per mile — here that intuition happens to point to the right model, but the reasoning must rest on the ratio. Nimbus's $35K price spread over a modest 240-mile range still produces the smallest per-mile figure, while Surge's $54K price over 300 miles yields the highest, at $180.00.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q65 (Set 9 — Electric Vehicle Models, continued)

The following table shows specifications for five electric vehicle models:

| Model  | Range (mi) | Battery (kWh) | Base Price ($K) | 0-60 (s) |
|--------|------------|---------------|-----------------|----------|
| Volt-X | 320        | 80            | 48              | 4.5      |
| Aero   | 280        | 75            | 44              | 5.2      |
| Pulse  | 360        | 100           | 60              | 3.8      |
| Nimbus | 240        | 64            | 35              | 6.0      |
| Surge  | 300        | 90            | 54              | 4.0      |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many models have BOTH a range of at least 300 miles AND a 0-60 time below 4.5 seconds?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** Two conditions must hold simultaneously: range >= 300 miles AND 0-60 time < 4.5 seconds. A model qualifies only when both inequalities are satisfied. The first condition is inclusive (at least 300 miles, so exactly 300 counts), while the second is strict (below 4.5 seconds, so exactly 4.5 does not count).

Applying the first condition (range >= 300) by reading the Range (mi) column:

- Volt-X: 320 >= 300 — qualifies.
- Aero: 280 >= 300 is false — eliminated.
- Pulse: 360 >= 300 — qualifies.
- Nimbus: 240 >= 300 is false — eliminated.
- Surge: 300 >= 300 — qualifies (exactly 300 satisfies the inclusive threshold).

The survivors of the first screen are Volt-X, Pulse, and Surge.

Now applying the second condition (0-60 < 4.5) to the three survivors, reading the 0-60 (s) column directly:

- Volt-X: 4.5 < 4.5 is false — the time equals but does not fall below the threshold under the strict inequality. Volt-X does not qualify.
- Pulse: 3.8 < 4.5 — satisfied. Both conditions hold; Pulse qualifies.
- Surge: 4.0 < 4.5 — satisfied. Both conditions hold; Surge qualifies.

Exactly two models — Pulse and Surge — satisfy both conditions simultaneously. The decisive case is Volt-X: although it clears the range screen at 320 miles, its 0-60 time of exactly 4.5 seconds fails the strict "below 4.5" requirement, so it is correctly excluded. The total count of qualifying models is therefore 2.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q66 (Set 10 — National Park Visitation)

The following table shows visitation and operational data for six national parks.

| Park    | 2023 Visitors (M) | 2024 Visitors (M) | Avg Stay (days) | Trails (mi) |
|---------|-------------------|-------------------|-----------------|-------------|
| Cascade | 4.2               | 4.8               | 2.5             | 320         |
| Granite | 3.0               | 3.3               | 1.8             | 210         |
| Marsh   | 1.5               | 1.4               | 1.2             | 95          |
| Summit  | 6.0               | 7.2               | 3.0             | 450         |
| Canyon  | 2.4               | 2.7               | 2.0             | 180         |
| Dune    | 0.9               | 1.1               | 1.5             | 60          |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Comparisons

For each statement, select Yes if the statement can be determined to be true based on the data in the table. Otherwise, select No.

Statement: More than half of the parks had higher visitation in 2024 than in 2023.

- A) Yes
- B) No

**answer:** A
**explanation:** **Condition and threshold.** A park meets the stated condition if its 2024 visitation strictly exceeds its 2023 visitation, that is, (2024 Visitors) - (2023 Visitors) > 0. With six parks in the table, "more than half" requires that at least 4 parks satisfy the condition.

**Park-by-park evaluation.** We compare the 2024 figure against the 2023 figure for each park:

- Cascade: 4.8 versus 4.2; change = +0.6 > 0. Condition satisfied.
- Granite: 3.3 versus 3.0; change = +0.3 > 0. Condition satisfied.
- Marsh: 1.4 versus 1.5; change = -0.1 < 0. Condition not satisfied (visitation declined).
- Summit: 7.2 versus 6.0; change = +1.2 > 0. Condition satisfied.
- Canyon: 2.7 versus 2.4; change = +0.3 > 0. Condition satisfied.
- Dune: 1.1 versus 0.9; change = +0.2 > 0. Condition satisfied.

**Count and conclusion.** Five parks — Cascade, Granite, Summit, Canyon, and Dune — recorded a strictly higher 2024 visitation than 2023. Only Marsh declined. Five out of six is approximately 83.3%, which is greater than 50%, and therefore more than half. We can determine from the table that the statement is true.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q67 (Set 10 — National Park Visitation, continued)

The following table shows visitation and operational data for six national parks.

| Park    | 2023 Visitors (M) | 2024 Visitors (M) | Avg Stay (days) | Trails (mi) |
|---------|-------------------|-------------------|-----------------|-------------|
| Cascade | 4.2               | 4.8               | 2.5             | 320         |
| Granite | 3.0               | 3.3               | 1.8             | 210         |
| Marsh   | 1.5               | 1.4               | 1.2             | 95          |
| Summit  | 6.0               | 7.2               | 3.0             | 450         |
| Canyon  | 2.4               | 2.7               | 2.0             | 180         |
| Dune    | 0.9               | 1.1               | 1.5             | 60          |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Percentage Growth Comparison

Statement: Summit had the highest percentage increase in visitors from 2023 to 2024.

- A) Yes
- B) No

**answer:** B
**explanation:** The percentage increase in visitors for a park from 2023 to 2024 is computed as (2024 Visitors - 2023 Visitors) / 2023 Visitors * 100. To evaluate the statement, this quantity is calculated for the parks that grew and the maximum is identified. Marsh declined and therefore has a negative percentage change, so it cannot be the maximum.

Let v23 denote 2023 visitors and v24 denote 2024 visitors (in millions).

- Cascade: (4.8 - 4.2) / 4.2 * 100 = 0.6 / 4.2 * 100 ≈ 14.29%
- Granite: (3.3 - 3.0) / 3.0 * 100 = 0.3 / 3.0 * 100 = 10.00%
- Marsh: (1.4 - 1.5) / 1.5 * 100 = -0.1 / 1.5 * 100 ≈ -6.67%
- Summit: (7.2 - 6.0) / 6.0 * 100 = 1.2 / 6.0 * 100 = 20.00%
- Canyon: (2.7 - 2.4) / 2.4 * 100 = 0.3 / 2.4 * 100 = 12.50%
- Dune: (1.1 - 0.9) / 0.9 * 100 = 0.2 / 0.9 * 100 ≈ 22.22%

Ranking the results from highest to lowest: Dune (22.22%) > Summit (20.00%) > Cascade (14.29%) > Canyon (12.50%) > Granite (10.00%) > Marsh (-6.67%).

A common error is to compare absolute visitor gains rather than percentage gains. Summit added 1.2 million visitors, by far the largest raw increase of any park, which makes it tempting to assume Summit also leads in percentage terms. But percentage growth weights the gain relative to the starting value: Summit's gain of 1.2 sits on a large 2023 base of 6.0, yielding 20.00%, whereas Dune's modest gain of 0.2 on a small base of 0.9 produces 22.22%. Because 22.22% > 20.00%, Dune, not Summit, had the highest percentage increase. The statement is therefore false.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q68 (Set 10 — National Park Visitation, continued)

The following table shows visitation and operational data for six national parks.

| Park    | 2023 Visitors (M) | 2024 Visitors (M) | Avg Stay (days) | Trails (mi) |
|---------|-------------------|-------------------|-----------------|-------------|
| Cascade | 4.2               | 4.8               | 2.5             | 320         |
| Granite | 3.0               | 3.3               | 1.8             | 210         |
| Marsh   | 1.5               | 1.4               | 1.2             | 95          |
| Summit  | 6.0               | 7.2               | 3.0             | 450         |
| Canyon  | 2.4               | 2.7               | 2.0             | 180         |
| Dune    | 0.9               | 1.1               | 1.5             | 60          |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Conditional Aggregation

Statement: Among parks with more than 200 miles of trails, the average 2024 visitation exceeds 5 million.

- A) Yes
- B) No

**answer:** A
**explanation:** Conditional aggregation requires isolating the rows that satisfy a filter condition and then computing a summary statistic — here, the arithmetic mean of 2024 Visitors (M) — over only the qualifying subset.

**Identifying the relevant rows.** Scanning the Trails (mi) column for values strictly greater than 200:

- Cascade: 320 > 200 — qualifies.
- Granite: 210 > 200 — qualifies.
- Marsh: 95 > 200 is false — excluded.
- Summit: 450 > 200 — qualifies.
- Canyon: 180 > 200 is false — excluded.
- Dune: 60 > 200 is false — excluded.

The qualifying set is {Cascade, Granite, Summit}.

**Computing the average 2024 visitation for the qualifying subset.** Reading the 2024 Visitors (M) column for these three parks: Cascade 4.8, Granite 3.3, Summit 7.2.

Sum = 4.8 + 3.3 + 7.2 = 15.3

Average = 15.3 / 3 = 5.1 million

**Evaluating the inequality.** The statement asserts that this average exceeds 5 million. Since 5.1 > 5.0, the condition holds. Note that the inclusion of Granite, whose 2024 visitation of 3.3 million is well below the 5-million mark, pulls the average down toward the threshold; even so, the average remains above 5 million because Summit's 7.2 million is sufficiently large. The statement is therefore true.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q69 (Set 10 — National Park Visitation, continued)

The following table shows visitation and operational data for six national parks.

| Park    | 2023 Visitors (M) | 2024 Visitors (M) | Avg Stay (days) | Trails (mi) |
|---------|-------------------|-------------------|-----------------|-------------|
| Cascade | 4.2               | 4.8               | 2.5             | 320         |
| Granite | 3.0               | 3.3               | 1.8             | 210         |
| Marsh   | 1.5               | 1.4               | 1.2             | 95          |
| Summit  | 6.0               | 7.2               | 3.0             | 450         |
| Canyon  | 2.4               | 2.7               | 2.0             | 180         |
| Dune    | 0.9               | 1.1               | 1.5             | 60          |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Conditional Statements

Statement: Every park with more than 3 million visitors in 2024 has an average stay of at least 2.5 days.

- A) Yes
- B) No

**answer:** B
**explanation:** **Governing principle.** A universal conditional statement of the form "every X with property P has property Q" is true if and only if no counterexample exists — that is, no row satisfying P while failing Q. The task is to identify every park whose 2024 visitation exceeds 3 million (the antecedent), then verify that each such park also has an average stay of at least 2.5 days (the consequent). A single counterexample falsifies the statement.

**Identifying the relevant rows.** Scanning the 2024 Visitors (M) column for values strictly greater than 3:

- Cascade: 4.8 > 3 — qualifies.
- Granite: 3.3 > 3 — qualifies.
- Marsh: 1.4 > 3 is false — does not qualify.
- Summit: 7.2 > 3 — qualifies.
- Canyon: 2.7 > 3 is false — does not qualify.
- Dune: 1.1 > 3 is false — does not qualify.

The qualifying set is {Cascade, Granite, Summit}.

**Checking the consequent (average stay >= 2.5 days) for each qualifying park.** Reading the Avg Stay (days) column:

- Cascade: 2.5 >= 2.5 — satisfied (the inclusive threshold is met exactly).
- Granite: 1.8 >= 2.5 is false — Granite fails the consequent.
- Summit: 3.0 >= 2.5 — satisfied.

Granite is a counterexample: it has 3.3 million 2024 visitors, which exceeds the 3-million antecedent, yet its average stay of 1.8 days falls short of the 2.5-day requirement. Because at least one park satisfies the antecedent while failing the consequent, the universal conditional does not hold. The statement is therefore false.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q70 (Set 11 — Restaurant Chain Performance)

The following table shows daily operating data for five restaurant locations:

| Location  | Daily Covers | Revenue ($) | Staff | Food Cost (%) |
|-----------|--------------|-------------|-------|---------------|
| Downtown  | 320          | 9,600       | 24    | 30            |
| Uptown    | 280          | 9,800       | 20    | 28            |
| Riverside | 200          | 7,200       | 16    | 32            |
| Airport   | 400          | 10,000      | 25    | 35            |
| Suburb    | 240          | 6,000       | 15    | 27            |

**difficulty:** Easy
**type:** Table Analysis
**topic:** Direct Comparison

Which location served the most daily covers?

- A) Downtown
- B) Uptown
- C) Riverside
- D) Airport
- E) Suburb

**answer:** D
**explanation:** The number of daily covers served by each location is read directly from the Daily Covers column, and the maximum is identified by comparison; no derived computation is required.

The Daily Covers column records:

- Downtown: 320
- Uptown: 280
- Riverside: 200
- Airport: 400
- Suburb: 240

Ordering these five values from greatest to least: 400 > 320 > 280 > 240 > 200, corresponding to Airport > Downtown > Uptown > Suburb > Riverside.

Airport's total of 400 daily covers is strictly greater than that of every other location, exceeding the next-highest location (Downtown, at 320) by 80 covers. Airport leads in covers despite not posting the highest revenue per cover, but the question concerns absolute covers served, for which Airport leads outright.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q71 (Set 11 — Restaurant Chain Performance, continued)

The following table shows daily operating data for five restaurant locations:

| Location  | Daily Covers | Revenue ($) | Staff | Food Cost (%) |
|-----------|--------------|-------------|-------|---------------|
| Downtown  | 320          | 9,600       | 24    | 30            |
| Uptown    | 280          | 9,800       | 20    | 28            |
| Riverside | 200          | 7,200       | 16    | 32            |
| Airport   | 400          | 10,000      | 25    | 35            |
| Suburb    | 240          | 6,000       | 15    | 27            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived Metrics

Which location has the highest average revenue per cover?

- A) Downtown
- B) Uptown
- C) Riverside
- D) Airport
- E) Suburb

**answer:** C
**explanation:** Average revenue per cover is defined as total revenue divided by the number of daily covers: revenue per cover = Revenue ($) / Daily Covers. This derived metric must be computed for every location, because the location serving the most covers is not necessarily the one extracting the most revenue from each guest.

Computing the revenue per cover for each location:

- Downtown: 9,600 / 320 = $30.00
- Uptown: 9,800 / 280 = $35.00
- Riverside: 7,200 / 200 = $36.00
- Airport: 10,000 / 400 = $25.00
- Suburb: 6,000 / 240 = $25.00

Ranking these values from highest to lowest: Riverside ($36.00) > Uptown ($35.00) > Downtown ($30.00) > Airport ($25.00) = Suburb ($25.00).

Riverside's revenue per cover of $36.00 is strictly the highest. A common error would be to select Airport, which posts the highest absolute revenue ($10,000) and the most covers (400); but spreading that revenue over 400 covers yields only $25.00 per cover, tied for the lowest in the table. Riverside, by contrast, generates $7,200 from just 200 covers, producing the largest per-cover figure.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q72 (Set 11 — Restaurant Chain Performance, continued)

The following table shows daily operating data for five restaurant locations:

| Location  | Daily Covers | Revenue ($) | Staff | Food Cost (%) |
|-----------|--------------|-------------|-------|---------------|
| Downtown  | 320          | 9,600       | 24    | 30            |
| Uptown    | 280          | 9,800       | 20    | 28            |
| Riverside | 200          | 7,200       | 16    | 32            |
| Airport   | 400          | 10,000      | 25    | 35            |
| Suburb    | 240          | 6,000       | 15    | 27            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Productivity Ratio

Which location has the highest revenue per staff member?

- A) Downtown
- B) Uptown
- C) Riverside
- D) Airport
- E) Suburb

**answer:** B
**explanation:** Revenue per staff member is defined as total revenue divided by the number of staff: revenue per staff = Revenue ($) / Staff. This derived metric measures labor productivity and must be computed for every location, because the location with the highest total revenue is not necessarily the one generating the most revenue per worker.

Computing the revenue per staff member for each location:

- Downtown: 9,600 / 24 = $400.00
- Uptown: 9,800 / 20 = $490.00
- Riverside: 7,200 / 16 = $450.00
- Airport: 10,000 / 25 = $400.00
- Suburb: 6,000 / 15 = $400.00

Ranking these values from highest to lowest: Uptown ($490.00) > Riverside ($450.00) > Downtown ($400.00) = Airport ($400.00) = Suburb ($400.00).

Uptown's revenue per staff member of $490.00 is strictly the highest. A common error would be to select Airport, which posts the highest absolute revenue ($10,000); but Airport's larger staff of 25 dilutes its productivity to $400.00 per worker, tied for the lowest. Uptown achieves the leading figure by pairing strong revenue of $9,800 with the second-smallest staff of 20.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q73 (Set 11 — Restaurant Chain Performance, continued)

The following table shows daily operating data for five restaurant locations:

| Location  | Daily Covers | Revenue ($) | Staff | Food Cost (%) |
|-----------|--------------|-------------|-------|---------------|
| Downtown  | 320          | 9,600       | 24    | 30            |
| Uptown    | 280          | 9,800       | 20    | 28            |
| Riverside | 200          | 7,200       | 16    | 32            |
| Airport   | 400          | 10,000      | 25    | 35            |
| Suburb    | 240          | 6,000       | 15    | 27            |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many locations have BOTH a revenue per cover above $30 AND a food cost percentage below 32%?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** A
**explanation:** Two conditions must hold simultaneously: revenue per cover > $30 AND food cost percentage < 32%. A location qualifies only when both strict inequalities are satisfied; a value of exactly $30 per cover or exactly 32% food cost fails the corresponding condition.

Revenue per cover is computed as Revenue ($) / Daily Covers:

- Downtown: 9,600 / 320 = $30.00
- Uptown: 9,800 / 280 = $35.00
- Riverside: 7,200 / 200 = $36.00
- Airport: 10,000 / 400 = $25.00
- Suburb: 6,000 / 240 = $25.00

Applying the first condition (revenue per cover > $30): Uptown ($35.00) and Riverside ($36.00) qualify. Downtown is eliminated because $30.00 is not strictly greater than $30, and Airport ($25.00) and Suburb ($25.00) fall below the threshold.

Now applying the second condition (food cost < 32%) to the two survivors, reading the Food Cost (%) column directly:

- Uptown: 28 < 32 — satisfied. Both conditions hold; Uptown qualifies.
- Riverside: 32 < 32 is false — the food cost equals but does not fall below the threshold under the strict inequality. Riverside does not qualify.

Exactly one location — Uptown — satisfies both conditions simultaneously. The decisive case is Riverside: although it posts the highest revenue per cover in the table ($36.00), its food cost of exactly 32% fails the strict "below 32%" requirement, so it is correctly excluded despite clearing the first hurdle. Downtown is a second trap, failing the revenue screen by landing on exactly $30.00. The total count of qualifying locations is therefore 1.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q74 (Set 12 — Airline On-Time Performance)

The following table shows operating statistics for five airlines during a recent month.

| Airline   | Flights | On-Time % | Avg Delay (min) | Cancellations |
|-----------|---------|-----------|-----------------|---------------|
| AeroJet   | 4,200   | 82        | 19              | 38            |
| BlueWing  | 3,600   | 88        | 9               | 22            |
| CrestAir  | 5,000   | 76        | 21              | 65            |
| DeltaLine | 2,800   | 91        | 7               | 12            |
| EastGate  | 4,500   | 79        | 17              | 50            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Comparisons

For each statement, select Yes if the statement can be determined to be true based on the data in the table. Otherwise, select No.

Statement: More than half of the airlines had an on-time percentage of at least 80%.

- A) Yes
- B) No

**answer:** A
**explanation:** **Condition and threshold.** An airline meets the stated condition if its on-time percentage is at least 80%, i.e. On-Time % >= 80. With five airlines in the table, "more than half" requires that at least 3 of the 5 satisfy the condition.

**Airline-by-airline evaluation.** Reading the On-Time % column directly and testing against the threshold of 80:

- AeroJet: 82 >= 80 — satisfies the condition.
- BlueWing: 88 >= 80 — satisfies the condition.
- CrestAir: 76 >= 80 is false — does not satisfy the condition.
- DeltaLine: 91 >= 80 — satisfies the condition.
- EastGate: 79 >= 80 is false — does not satisfy the condition.

**Count and conclusion.** Three airlines — AeroJet, BlueWing, and DeltaLine — each post an on-time percentage of at least 80%. Three out of five is 60%, which is greater than 50% and therefore more than half. CrestAir (76) and EastGate (79) fall just short of the threshold but do not change the count. We can determine from the table that the statement is true.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q75 (Set 12 — Airline On-Time Performance, continued)

The following table shows operating statistics for five airlines during a recent month.

| Airline   | Flights | On-Time % | Avg Delay (min) | Cancellations |
|-----------|---------|-----------|-----------------|---------------|
| AeroJet   | 4,200   | 82        | 19              | 38            |
| BlueWing  | 3,600   | 88        | 9               | 22            |
| CrestAir  | 5,000   | 76        | 21              | 65            |
| DeltaLine | 2,800   | 91        | 7               | 12            |
| EastGate  | 4,500   | 79        | 17              | 50            |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Joint Extremes

Statement: The airline with the highest on-time percentage also had the fewest cancellations.

- A) Yes
- B) No

**answer:** A
**explanation:** The statement asks whether a single airline simultaneously holds the maximum of one column (On-Time %) and the minimum of another (Cancellations). Each extreme is identified independently and then the two airlines are compared.

**Identifying the highest on-time percentage.** Ranking the On-Time % column: 91 (DeltaLine) > 88 (BlueWing) > 82 (AeroJet) > 79 (EastGate) > 76 (CrestAir). The maximum is 91, belonging to DeltaLine.

**Identifying the fewest cancellations.** Ranking the Cancellations column from smallest to largest: 12 (DeltaLine) < 22 (BlueWing) < 38 (AeroJet) < 50 (EastGate) < 65 (CrestAir). The minimum is 12, belonging to DeltaLine.

**Comparing the two identifications.** The airline with the highest on-time percentage is DeltaLine (91%), and the airline with the fewest cancellations is also DeltaLine (12). The two coincide, so the statement holds. DeltaLine's strong reliability shows up in both metrics at once, which is consistent with the smallest flight volume in the table (2,800) reducing exposure to delay and cancellation.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q76 (Set 12 — Airline On-Time Performance, continued)

The following table shows operating statistics for five airlines during a recent month.

| Airline   | Flights | On-Time % | Avg Delay (min) | Cancellations |
|-----------|---------|-----------|-----------------|---------------|
| AeroJet   | 4,200   | 82        | 19              | 38            |
| BlueWing  | 3,600   | 88        | 9               | 22            |
| CrestAir  | 5,000   | 76        | 21              | 65            |
| DeltaLine | 2,800   | 91        | 7               | 12            |
| EastGate  | 4,500   | 79        | 17              | 50            |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Conditional Statements

Statement: Every airline with more than 4,000 flights had at least 35 cancellations.

- A) Yes
- B) No

**answer:** A
**explanation:** **Governing principle.** A universal conditional of the form "every X with property P has property Q" is true if and only if no row satisfies P while failing Q. Here the antecedent P is Flights > 4,000 and the consequent Q is Cancellations >= 35. We identify every airline satisfying the antecedent and verify the consequent for each.

**Identifying the qualifying airlines.** Scanning the Flights column for values strictly greater than 4,000:

- AeroJet: 4,200 > 4,000 — qualifies.
- BlueWing: 3,600 > 4,000 is false — does not qualify.
- CrestAir: 5,000 > 4,000 — qualifies.
- DeltaLine: 2,800 > 4,000 is false — does not qualify.
- EastGate: 4,500 > 4,000 — qualifies.

The qualifying set is {AeroJet, CrestAir, EastGate}. BlueWing and DeltaLine fall outside the scope of the statement and are irrelevant regardless of their cancellation counts.

**Verifying the consequent for each qualifying airline.** We require Cancellations >= 35:

- AeroJet: 38 >= 35 — satisfied.
- CrestAir: 65 >= 35 — satisfied.
- EastGate: 50 >= 35 — satisfied.

**Conclusion.** All three airlines with more than 4,000 flights recorded at least 35 cancellations. No counterexample exists, so the universal conditional holds.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q77 (Set 12 — Airline On-Time Performance, continued)

The following table shows operating statistics for five airlines during a recent month.

| Airline   | Flights | On-Time % | Avg Delay (min) | Cancellations |
|-----------|---------|-----------|-----------------|---------------|
| AeroJet   | 4,200   | 82        | 19              | 38            |
| BlueWing  | 3,600   | 88        | 9               | 22            |
| CrestAir  | 5,000   | 76        | 21              | 65            |
| DeltaLine | 2,800   | 91        | 7               | 12            |
| EastGate  | 4,500   | 79        | 17              | 50            |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Inverse Relationships

Statement: Airlines with higher on-time percentages consistently have lower average delays.

- A) Yes
- B) No

**answer:** B
**explanation:** **An inverse relationship** between two variables exists when, as one variable increases, the other consistently decreases across every ordered pair in the dataset. The statement asserts that whenever one airline has a higher on-time percentage than another, it has a strictly lower average delay — with no exceptions. A single violating pair is enough to falsify the claim.

**Sorting by on-time percentage.** Arranging the five airlines in ascending order of On-Time % and recording the corresponding average delay:

| Rank (by On-Time %) | Airline   | On-Time % | Avg Delay (min) |
|---------------------|-----------|-----------|-----------------|
| 1 | CrestAir  | 76 | 21 |
| 2 | EastGate  | 79 | 17 |
| 3 | AeroJet   | 82 | 19 |
| 4 | BlueWing  | 88 | 9  |
| 5 | DeltaLine | 91 | 7  |

**Checking each consecutive pair.** For a perfect inverse relationship, every step up in on-time percentage must correspond to a step down in average delay:

- CrestAir to EastGate: on-time 76 to 79 (up), delay 21 to 17 (down). Consistent.
- EastGate to AeroJet: on-time 79 to 82 (up), delay 17 to 19 (UP). Inconsistent — this pair violates the inverse relationship.

**Conclusion.** AeroJet has a higher on-time percentage than EastGate (82 vs. 79), yet its average delay is also higher (19 vs. 17). Because a higher on-time percentage is paired with a higher average delay, the claim that higher on-time percentages "consistently" go with lower delays fails. A single counterexample is decisive; the statement does not hold.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q78 (Set 12 — Airline On-Time Performance, continued)

The following table shows operating statistics for five airlines during a recent month.

| Airline   | Flights | On-Time % | Avg Delay (min) | Cancellations |
|-----------|---------|-----------|-----------------|---------------|
| AeroJet   | 4,200   | 82        | 19              | 38            |
| BlueWing  | 3,600   | 88        | 9               | 22            |
| CrestAir  | 5,000   | 76        | 21              | 65            |
| DeltaLine | 2,800   | 91        | 7               | 12            |
| EastGate  | 4,500   | 79        | 17              | 50            |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Negated Existential

Statement: No airline had both an on-time percentage below 80% and an average delay above 18 minutes.

- A) Yes
- B) No

**answer:** B
**explanation:** **Governing principle.** A statement of the form "no row has both property P and property Q" is true if and only if there is no single row satisfying P and Q simultaneously. To test it, we identify the rows satisfying the first condition and check whether any of them also satisfies the second. Finding even one row that meets both conditions makes the statement false.

**Identifying airlines with on-time percentage below 80%.** Scanning the On-Time % column for values strictly less than 80:

- CrestAir: 76 < 80 — qualifies.
- EastGate: 79 < 80 — qualifies.

AeroJet (82), BlueWing (88), and DeltaLine (91) all have on-time percentages of 80 or above and so cannot be counterexamples.

**Checking the second condition for the survivors.** We require Avg Delay > 18 minutes:

- CrestAir: average delay = 21, and 21 > 18 — the second condition is also satisfied.
- EastGate: average delay = 17, and 17 > 18 is false — the second condition fails.

**Conclusion.** CrestAir has both an on-time percentage below 80% (76) and an average delay above 18 minutes (21). This single airline satisfies both conditions at once, which is exactly the combination the statement claims does not exist. The existence of CrestAir as a counterexample falsifies the claim. EastGate clears the on-time screen but is rescued by its 17-minute delay, so it is not a counterexample; CrestAir alone is sufficient.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q79 (Set 13 — Software Subscription Tiers)

The following table shows data for the five subscription plans of a software product.

| Plan       | Monthly Price ($) | Subscribers | Storage (GB) | Support Tickets |
|------------|-------------------|-------------|--------------|-----------------|
| Basic      | 9                 | 12,000      | 50           | 3,400           |
| Standard   | 19                | 8,000       | 200          | 2,100           |
| Premium    | 39                | 4,500       | 1,000        | 1,500           |
| Business   | 79                | 2,000       | 5,000        | 900             |
| Enterprise | 149               | 600         | 20,000       | 400             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Derived Metrics

Which plan generates the highest monthly revenue (Monthly Price x Subscribers)?

- A) Basic
- B) Standard
- C) Premium
- D) Business
- E) Enterprise

**answer:** C
**explanation:** Monthly revenue for a plan is the product of its monthly price and its number of subscribers: revenue = Monthly Price ($) x Subscribers. This derived quantity must be computed for every plan, because neither the cheapest, most-subscribed plan nor the most expensive plan is guaranteed to maximize the product.

Computing the monthly revenue for each plan:

- Basic: 9 x 12,000 = 108,000
- Standard: 19 x 8,000 = 152,000
- Premium: 39 x 4,500 = 175,500
- Business: 79 x 2,000 = 158,000
- Enterprise: 149 x 600 = 89,400

Ranking these values from highest to lowest: Premium ($175,500) > Business ($158,000) > Standard ($152,000) > Basic ($108,000) > Enterprise ($89,400).

Premium's monthly revenue of $175,500 is strictly the highest. Two traps are worth noting. Basic has by far the most subscribers (12,000) but its low $9 price holds its revenue to $108,000. Enterprise commands the highest price ($149) but its small base of 600 subscribers leaves it last at $89,400. Premium wins by balancing a moderately high price ($39) against a still-substantial base of 4,500 subscribers.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q80 (Set 13 — Software Subscription Tiers, continued)

The following table shows data for the five subscription plans of a software product.

| Plan       | Monthly Price ($) | Subscribers | Storage (GB) | Support Tickets |
|------------|-------------------|-------------|--------------|-----------------|
| Basic      | 9                 | 12,000      | 50           | 3,400           |
| Standard   | 19                | 8,000       | 200          | 2,100           |
| Premium    | 39                | 4,500       | 1,000        | 1,500           |
| Business   | 79                | 2,000       | 5,000        | 900             |
| Enterprise | 149               | 600         | 20,000       | 400             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Per-Capita Ratio

Which plan has the lowest number of support tickets per subscriber?

- A) Basic
- B) Standard
- C) Premium
- D) Business
- E) Enterprise

**answer:** B
**explanation:** Support tickets per subscriber is defined as the ratio of total support tickets to the number of subscribers: tickets per subscriber = Support Tickets / Subscribers. This ratio normalizes raw ticket counts against the size of each plan's user base, so the plan with the fewest raw tickets is not necessarily the one with the lowest per-subscriber rate.

Computing the ratio for each plan:

- Basic: 3,400 / 12,000 = 0.2833
- Standard: 2,100 / 8,000 = 0.2625
- Premium: 1,500 / 4,500 = 0.3333
- Business: 900 / 2,000 = 0.4500
- Enterprise: 400 / 600 = 0.6667

Ranking these values from lowest to highest: Standard (0.2625) < Basic (0.2833) < Premium (0.3333) < Business (0.4500) < Enterprise (0.6667).

Standard's rate of 0.2625 tickets per subscriber is strictly the lowest. The decisive trap is Enterprise, which posts the fewest raw support tickets in the table (400) yet has the highest per-subscriber rate (0.6667) because it serves only 600 subscribers. Standard achieves the lowest rate by pairing a moderate 2,100 tickets with a large base of 8,000 subscribers.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q81 (Set 13 — Software Subscription Tiers, continued)

The following table shows data for the five subscription plans of a software product.

| Plan       | Monthly Price ($) | Subscribers | Storage (GB) | Support Tickets |
|------------|-------------------|-------------|--------------|-----------------|
| Basic      | 9                 | 12,000      | 50           | 3,400           |
| Standard   | 19                | 8,000       | 200          | 2,100           |
| Premium    | 39                | 4,500       | 1,000        | 1,500           |
| Business   | 79                | 2,000       | 5,000        | 900             |
| Enterprise | 149               | 600         | 20,000       | 400             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Value Ratio

Which plan offers the most storage per dollar of monthly price (GB per $)?

- A) Basic
- B) Standard
- C) Premium
- D) Business
- E) Enterprise

**answer:** E
**explanation:** Storage per dollar is defined as the ratio of included storage to monthly price: GB per dollar = Storage (GB) / Monthly Price ($). This value ratio measures how much storage each dollar of subscription buys, so the plan with the most absolute storage need not offer the most storage per dollar.

Computing the ratio for each plan:

- Basic: 50 / 9 ≈ 5.56
- Standard: 200 / 19 ≈ 10.53
- Premium: 1,000 / 39 ≈ 25.64
- Business: 5,000 / 79 ≈ 63.29
- Enterprise: 20,000 / 149 ≈ 134.23

Ranking these values from highest to lowest: Enterprise (≈134.23) > Business (≈63.29) > Premium (≈25.64) > Standard (≈10.53) > Basic (≈5.56).

Enterprise offers approximately 134.23 GB per dollar, strictly the highest in the table. Storage scales far more aggressively across the tiers than price does: from Basic to Enterprise, monthly price rises by a factor of about 16.6 (9 to 149) while storage rises by a factor of 400 (50 to 20,000). Because storage outpaces price so dramatically as plans get larger, the storage-per-dollar ratio increases monotonically up the ladder, peaking at Enterprise.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q82 (Set 13 — Software Subscription Tiers, continued)

The following table shows data for the five subscription plans of a software product.

| Plan       | Monthly Price ($) | Subscribers | Storage (GB) | Support Tickets |
|------------|-------------------|-------------|--------------|-----------------|
| Basic      | 9                 | 12,000      | 50           | 3,400           |
| Standard   | 19                | 8,000       | 200          | 2,100           |
| Premium    | 39                | 4,500       | 1,000        | 1,500           |
| Business   | 79                | 2,000       | 5,000        | 900             |
| Enterprise | 149               | 600         | 20,000       | 400             |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Multi-Criterion Filtering

How many plans have BOTH a monthly price above $15 AND more than 3,000 subscribers?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** B
**explanation:** Two conditions must hold simultaneously: Monthly Price > $15 AND Subscribers > 3,000. A plan qualifies only when both strict inequalities are satisfied; each plan is screened against the first condition, and the survivors are then tested against the second.

Applying the first condition (Monthly Price > $15), reading the Monthly Price column directly:

- Basic: 9 > 15 is false — eliminated.
- Standard: 19 > 15 — survives.
- Premium: 39 > 15 — survives.
- Business: 79 > 15 — survives.
- Enterprise: 149 > 15 — survives.

The survivors of the price screen are Standard, Premium, Business, and Enterprise.

Now applying the second condition (Subscribers > 3,000) to those four survivors:

- Standard: 8,000 > 3,000 — satisfied. Both conditions hold; Standard qualifies.
- Premium: 4,500 > 3,000 — satisfied. Both conditions hold; Premium qualifies.
- Business: 2,000 > 3,000 is false — eliminated.
- Enterprise: 600 > 3,000 is false — eliminated.

Exactly two plans — Standard and Premium — satisfy both conditions simultaneously. Basic fails the price screen despite having the largest subscriber base in the table (12,000), and the two highest-priced plans, Business and Enterprise, fail the subscriber screen. The total count of qualifying plans is therefore 2.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q83 (Set 13 — Software Subscription Tiers, continued)

The following table shows data for the five subscription plans of a software product.

| Plan       | Monthly Price ($) | Subscribers | Storage (GB) | Support Tickets |
|------------|-------------------|-------------|--------------|-----------------|
| Basic      | 9                 | 12,000      | 50           | 3,400           |
| Standard   | 19                | 8,000       | 200          | 2,100           |
| Premium    | 39                | 4,500       | 1,000        | 1,500           |
| Business   | 79                | 2,000       | 5,000        | 900             |
| Enterprise | 149               | 600         | 20,000       | 400             |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Aggregate Estimation

The total monthly revenue across all five plans (Monthly Price x Subscribers, summed) is closest to which value?

- A) $600,000
- B) $650,000
- C) $683,000
- D) $720,000
- E) $750,000

**answer:** C
**explanation:** Total monthly revenue is the sum, over all five plans, of each plan's monthly revenue, where a plan's monthly revenue equals Monthly Price ($) x Subscribers. Each product is computed, the five products are added, and the total is compared against the answer choices.

Computing each plan's monthly revenue:

- Basic: 9 x 12,000 = 108,000
- Standard: 19 x 8,000 = 152,000
- Premium: 39 x 4,500 = 175,500
- Business: 79 x 2,000 = 158,000
- Enterprise: 149 x 600 = 89,400

Summing the five products:

108,000 + 152,000 = 260,000
260,000 + 175,500 = 435,500
435,500 + 158,000 = 593,500
593,500 + 89,400 = 682,900

The exact total is $682,900. Comparing this figure against the answer choices: it lies between $650,000 and $720,000, with a deviation of |682,900 - 683,000| = 100 from choice C, far smaller than the deviation from any other option (|682,900 - 650,000| = 32,900 and |682,900 - 720,000| = 37,100). The total monthly revenue is therefore closest to $683,000.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q84 (Set 14 — Logistics Carrier Performance)

The following table shows one quarter of operating data for five freight carriers:

| Carrier  | On-Time % | Shipments (000s) | Cost/Shipment ($) | Damage Claims | Fuel Surcharge % |
|----------|-----------|------------------|-------------------|---------------|------------------|
| Apex     | 92        | 48               | 14.50             | 360           | 8                |
| Borealis | 88        | 60               | 12.00             | 540           | 11               |
| Cresco   | 95        | 35               | 18.00             | 175           | 6                |
| Delphi   | 84        | 72               | 10.50             | 720           | 14               |
| Equinox  | 90        | 50               | 15.00             | 400           | 9                |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Threshold Counting

For each statement, select Yes if the statement can be determined to be true based on the data in the table. Otherwise, select No.

Statement: More than half of the carriers had an on-time rate of at least 90%.

- A) Yes
- B) No

**answer:** A
**explanation:** **Condition and threshold.** A carrier meets the condition if its On-Time % is greater than or equal to 90. With five carriers, "more than half" requires that at least 3 of the 5 satisfy the condition, since 3/5 = 60% exceeds 50% while 2/5 = 40% does not.

**Carrier-by-carrier evaluation.** Reading the On-Time % column and testing each value against the threshold of 90:

- Apex: 92. Is 92 >= 90? Yes.
- Borealis: 88. Is 88 >= 90? No.
- Cresco: 95. Is 95 >= 90? Yes.
- Delphi: 84. Is 84 >= 90? No.
- Equinox: 90. Is 90 >= 90? Yes (the boundary value of exactly 90 satisfies "at least 90").

**Count and conclusion.** Three carriers — Apex, Cresco, and Equinox — meet the threshold. Three out of five is 60%, which is greater than 50% and therefore "more than half." Note that Equinox is the decisive case: had the statement said "greater than 90%" rather than "at least 90%," Equinox's value of exactly 90 would fail and the count would drop to two, making the statement false. As written with "at least 90%," the statement holds.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q85 (Set 14 — Logistics Carrier Performance, continued)

The following table shows one quarter of operating data for five freight carriers:

| Carrier  | On-Time % | Shipments (000s) | Cost/Shipment ($) | Damage Claims | Fuel Surcharge % |
|----------|-----------|------------------|-------------------|---------------|------------------|
| Apex     | 92        | 48               | 14.50             | 360           | 8                |
| Borealis | 88        | 60               | 12.00             | 540           | 11               |
| Cresco   | 95        | 35               | 18.00             | 175           | 6                |
| Delphi   | 84        | 72               | 10.50             | 720           | 14               |
| Equinox  | 90        | 50               | 15.00             | 400           | 9                |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Derived-Rate Comparison

Statement: The carrier that handled the most shipments also had the lowest number of damage claims per thousand shipments.

- A) Yes
- B) No

**answer:** B
**explanation:** **Two quantities to identify.** The statement couples a raw maximum (most shipments) with a derived minimum (lowest damage claims per thousand shipments). Damage claims per thousand shipments is defined as Damage Claims divided by Shipments (000s), since the shipment figures are already expressed in thousands. The statement is true only if a single carrier holds both distinctions.

**Identifying the carrier with the most shipments.** The Shipments (000s) column reads Apex 48, Borealis 60, Cresco 35, Delphi 72, Equinox 50. The maximum is 72, belonging to Delphi.

**Computing damage claims per thousand shipments.** Let c = Damage Claims / Shipments (000s) for each carrier:

- Apex: 360 / 48 = 7.5
- Borealis: 540 / 60 = 9.0
- Cresco: 175 / 35 = 5.0
- Delphi: 720 / 72 = 10.0
- Equinox: 400 / 50 = 8.0

**Identifying the minimum rate.** Ordering the five rates: 5.0 < 7.5 < 8.0 < 9.0 < 10.0. The lowest damage-claim rate is 5.0 per thousand shipments, belonging to Cresco.

**Evaluating the statement.** The carrier with the most shipments is Delphi, but Delphi's damage-claim rate of 10.0 is in fact the highest of the five, not the lowest. The carrier with the lowest rate is Cresco. Because these are two different carriers, the statement is false. The pairing is, if anything, the reverse of what the statement claims: the highest-volume carrier carries the worst damage rate.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q86 (Set 14 — Logistics Carrier Performance, continued)

The following table shows one quarter of operating data for five freight carriers:

| Carrier  | On-Time % | Shipments (000s) | Cost/Shipment ($) | Damage Claims | Fuel Surcharge % |
|----------|-----------|------------------|-------------------|---------------|------------------|
| Apex     | 92        | 48               | 14.50             | 360           | 8                |
| Borealis | 88        | 60               | 12.00             | 540           | 11               |
| Cresco   | 95        | 35               | 18.00             | 175           | 6                |
| Delphi   | 84        | 72               | 10.50             | 720           | 14               |
| Equinox  | 90        | 50               | 15.00             | 400           | 9                |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Conditional Statements

Statement: Every carrier with an on-time rate below 90% had a fuel surcharge greater than 10%.

- A) Yes
- B) No

**answer:** A
**explanation:** **Governing principle.** A universal conditional of the form "every carrier with property P has property Q" is true exactly when no carrier satisfies P while failing Q. Here P is "On-Time % < 90" and Q is "Fuel Surcharge % > 10." We first isolate the carriers satisfying the antecedent, then verify the consequent for each.

**Identifying the antecedent set.** Scanning the On-Time % column for values strictly below 90:

- Apex: 92 — not below 90, excluded.
- Borealis: 88 — below 90, included.
- Cresco: 95 — not below 90, excluded.
- Delphi: 84 — below 90, included.
- Equinox: 90 — exactly 90, not strictly below 90, excluded.

The qualifying set is {Borealis, Delphi}. Equinox is excluded because 90 is not less than 90.

**Verifying the consequent.** We require Fuel Surcharge % > 10 for each member of the qualifying set:

- Borealis: fuel surcharge = 11, and 11 > 10 — satisfied.
- Delphi: fuel surcharge = 14, and 14 > 10 — satisfied.

Both carriers in the antecedent set carry a fuel surcharge above 10%. No counterexample exists, so the conditional holds universally. The three excluded carriers — Apex, Cresco, and Equinox — are irrelevant to the truth of the conditional regardless of their fuel surcharges (which are 8, 6, and 9 respectively, all at or below 10), because they fail the antecedent.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis

---

## Q87 (Set 14 — Logistics Carrier Performance, continued)

The following table shows one quarter of operating data for five freight carriers:

| Carrier  | On-Time % | Shipments (000s) | Cost/Shipment ($) | Damage Claims | Fuel Surcharge % |
|----------|-----------|------------------|-------------------|---------------|------------------|
| Apex     | 92        | 48               | 14.50             | 360           | 8                |
| Borealis | 88        | 60               | 12.00             | 540           | 11               |
| Cresco   | 95        | 35               | 18.00             | 175           | 6                |
| Delphi   | 84        | 72               | 10.50             | 720           | 14               |
| Equinox  | 90        | 50               | 15.00             | 400           | 9                |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Conditional Statements

Statement: Every carrier with a fuel surcharge below 10% had an on-time rate of at least 92%.

- A) Yes
- B) No

**answer:** B
**explanation:** **Governing principle.** This universal conditional has antecedent P = "Fuel Surcharge % < 10" and consequent Q = "On-Time % >= 92." It is false if even one carrier satisfies P but fails Q. We isolate the antecedent set, then test the consequent.

**Identifying the antecedent set.** Scanning the Fuel Surcharge % column for values strictly below 10:

- Apex: 8 — below 10, included.
- Borealis: 11 — not below 10, excluded.
- Cresco: 6 — below 10, included.
- Delphi: 14 — not below 10, excluded.
- Equinox: 9 — below 10, included.

The qualifying set is {Apex, Cresco, Equinox}.

**Verifying the consequent.** We require On-Time % >= 92 for each member:

- Apex: on-time = 92, and 92 >= 92 — satisfied.
- Cresco: on-time = 95, and 95 >= 92 — satisfied.
- Equinox: on-time = 90, and 90 >= 92? No — 90 is less than 92. Failed.

**Conclusion.** Equinox satisfies the antecedent (fuel surcharge 9% < 10%) but fails the consequent (on-time 90% < 92%). This single counterexample is sufficient to falsify the universal claim. Although two of the three qualifying carriers meet the on-time threshold, the statement asserts that *every* such carrier does, and Equinox breaks that claim. The statement is therefore false.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q88 (Set 15 — Municipal Water Districts)

The following table shows operating data for five water-service districts:

| District  | Population (000s) | Daily Usage (ML) | Pipe Length (km) | Leak Rate % | Annual Budget ($M) |
|-----------|-------------------|------------------|------------------|-------------|--------------------|
| Northgate | 120               | 42.0             | 480              | 12          | 18.0               |
| Eastvale  | 200               | 80.0             | 750              | 8           | 30.0               |
| Southmoor | 90                | 27.0             | 360              | 15          | 12.0               |
| Westbrook | 150               | 57.0             | 600              | 10          | 22.5               |
| Centralia | 160               | 48.0             | 520              | 6           | 24.0               |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Per-Capita Metrics

Which district had the highest daily water usage per thousand residents?

- A) Northgate
- B) Eastvale
- C) Southmoor
- D) Westbrook
- E) Centralia

**answer:** B
**explanation:** Daily water usage per thousand residents is defined as Daily Usage (ML) divided by Population (000s); because population is stated in thousands, the quotient is megaliters per thousand people. Because districts differ in both usage and population, this rate must be computed individually rather than read off the raw usage column.

Computing the rate u = Daily Usage / Population for each district:

- Northgate: 42.0 / 120 = 0.350 ML per thousand residents
- Eastvale: 80.0 / 200 = 0.400 ML per thousand residents
- Southmoor: 27.0 / 90 = 0.300 ML per thousand residents
- Westbrook: 57.0 / 150 = 0.380 ML per thousand residents
- Centralia: 48.0 / 160 = 0.300 ML per thousand residents

Ranking these values: Eastvale (0.400) > Westbrook (0.380) > Northgate (0.350) > Southmoor (0.300) = Centralia (0.300). Eastvale's rate of 0.400 is strictly the highest. Note that Eastvale also has the largest absolute usage (80.0 ML), but that alone does not guarantee the highest per-capita figure — Eastvale also serves the largest population (200 thousand). The per-capita computation confirms Eastvale leads, narrowly ahead of Westbrook.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q89 (Set 15 — Municipal Water Districts, continued)

The following table shows operating data for five water-service districts:

| District  | Population (000s) | Daily Usage (ML) | Pipe Length (km) | Leak Rate % | Annual Budget ($M) |
|-----------|-------------------|------------------|------------------|-------------|--------------------|
| Northgate | 120               | 42.0             | 480              | 12          | 18.0               |
| Eastvale  | 200               | 80.0             | 750              | 8           | 30.0               |
| Southmoor | 90                | 27.0             | 360              | 15          | 12.0               |
| Westbrook | 150               | 57.0             | 600              | 10          | 22.5               |
| Centralia | 160               | 48.0             | 520              | 6           | 24.0               |

**difficulty:** Hard
**type:** Table Analysis
**topic:** Derived Volume

Which district loses the smallest volume of water to leaks each day?

- A) Northgate
- B) Eastvale
- C) Southmoor
- D) Westbrook
- E) Centralia

**answer:** E
**explanation:** The daily volume of water lost to leaks is Daily Usage (ML) multiplied by the Leak Rate expressed as a decimal: leak volume = Daily Usage x (Leak Rate % / 100). A district can have a high percentage leak rate yet a modest absolute loss if its total usage is small, and vice versa, so the product must be computed for each district.

Computing leak volume for each district:

- Northgate: 42.0 x 0.12 = 5.04 ML
- Eastvale: 80.0 x 0.08 = 6.40 ML
- Southmoor: 27.0 x 0.15 = 4.05 ML
- Westbrook: 57.0 x 0.10 = 5.70 ML
- Centralia: 48.0 x 0.06 = 2.88 ML

Ranking from smallest to largest: Centralia (2.88) < Southmoor (4.05) < Northgate (5.04) < Westbrook (5.70) < Eastvale (6.40). Centralia loses the smallest volume, 2.88 ML per day.

Two contrasts illustrate why the absolute volume differs from the percentage rate. Southmoor has the highest leak *rate* (15%) but, because its usage is the lowest in the table (27.0 ML), its absolute loss of 4.05 ML is only the second-smallest. Eastvale has a low leak rate (8%) yet the largest absolute loss (6.40 ML), driven by its enormous usage of 80.0 ML. Centralia combines the lowest leak rate (6%) with mid-range usage, producing the smallest absolute loss of all five districts.

The correct answer is E.
**related_reading:** reading-di-03-table-analysis

---

## Q90 (Set 15 — Municipal Water Districts, continued)

The following table shows operating data for five water-service districts:

| District  | Population (000s) | Daily Usage (ML) | Pipe Length (km) | Leak Rate % | Annual Budget ($M) |
|-----------|-------------------|------------------|------------------|-------------|--------------------|
| Northgate | 120               | 42.0             | 480              | 12          | 18.0               |
| Eastvale  | 200               | 80.0             | 750              | 8           | 30.0               |
| Southmoor | 90                | 27.0             | 360              | 15          | 12.0               |
| Westbrook | 150               | 57.0             | 600              | 10          | 22.5               |
| Centralia | 160               | 48.0             | 520              | 6           | 24.0               |

**difficulty:** Medium
**type:** Table Analysis
**topic:** Per-Capita Cost

Which district had the lowest annual budget per resident?

- A) Northgate
- B) Eastvale
- C) Southmoor
- D) Westbrook
- E) Centralia

**answer:** C
**explanation:** Annual budget per resident is the Annual Budget divided by the population. With budget in millions of dollars and population in thousands of residents, the budget per resident in dollars equals (Annual Budget ($M) x 1,000,000) / (Population (000s) x 1,000), which simplifies to (Annual Budget ($M) / Population (000s)) x 1,000.

Computing budget per resident for each district:

- Northgate: (18.0 / 120) x 1,000 = 0.150 x 1,000 = $150.00
- Eastvale: (30.0 / 200) x 1,000 = 0.150 x 1,000 = $150.00
- Southmoor: (12.0 / 90) x 1,000 = 0.1333 x 1,000 = $133.33
- Westbrook: (22.5 / 150) x 1,000 = 0.150 x 1,000 = $150.00
- Centralia: (24.0 / 160) x 1,000 = 0.150 x 1,000 = $150.00

Four of the five districts — Northgate, Eastvale, Westbrook, and Centralia — share an identical budget-per-resident figure of exactly $150.00, because each maintains the same ratio of budget to population (0.150 $M per thousand residents). Southmoor stands apart at $133.33 per resident, since its budget-to-population ratio of 12.0/90 = 0.1333 is below 0.150. Southmoor's figure is strictly the lowest, so it is the credited district.

The correct answer is C.
**related_reading:** reading-di-03-table-analysis

---

## Q91
**difficulty:** Medium
**type:** Table Analysis
**topic:** Quality Metrics

The following table shows one month of output data for five manufacturing plants:

| Plant    | Units Produced | Defective Units | Machine Hours | Energy (MWh) |
|----------|----------------|-----------------|---------------|--------------|
| Aurora   | 24,000         | 480             | 800           | 372          |
| Borden   | 18,000         | 270             | 600           | 252          |
| Calder   | 30,000         | 900             | 1,000         | 510          |
| Dunmore  | 21,000         | 420             | 700           | 315          |
| Ellery   | 27,000         | 540             | 900           | 459          |

Which plant had the lowest defect rate (defective units as a percentage of units produced)?

- A) Aurora
- B) Borden
- C) Calder
- D) Dunmore
- E) Ellery

**answer:** B
**explanation:** The defect rate is defined as Defective Units divided by Units Produced, expressed as a percentage: defect rate = (Defective Units / Units Produced) x 100. Because both the numerator and denominator vary across plants, the rate must be computed individually; the plant with the most defective units in absolute terms is not necessarily the one with the highest rate.

Computing the defect rate for each plant:

- Aurora: (480 / 24,000) x 100 = 0.020 x 100 = 2.00%
- Borden: (270 / 18,000) x 100 = 0.015 x 100 = 1.50%
- Calder: (900 / 30,000) x 100 = 0.030 x 100 = 3.00%
- Dunmore: (420 / 21,000) x 100 = 0.020 x 100 = 2.00%
- Ellery: (540 / 27,000) x 100 = 0.020 x 100 = 2.00%

Ranking from lowest to highest: Borden (1.50%) < Aurora = Dunmore = Ellery (2.00%) < Calder (3.00%). Borden's defect rate of 1.50% is strictly the lowest. Three plants — Aurora, Dunmore, and Ellery — tie at exactly 2.00%, and Calder is highest at 3.00% despite also producing the most units overall (30,000). Borden, with both the fewest units and the fewest defects, achieves the best ratio at 1.50%, uniquely the minimum.

The correct answer is B.
**related_reading:** reading-di-03-table-analysis

---

## Q92
**difficulty:** Hard
**type:** Table Analysis
**topic:** Unit Conversion

The following table shows one month of output data for five manufacturing plants:

| Plant    | Units Produced | Defective Units | Machine Hours | Energy (MWh) |
|----------|----------------|-----------------|---------------|--------------|
| Aurora   | 24,000         | 480             | 800           | 372          |
| Borden   | 18,000         | 270             | 600           | 252          |
| Calder   | 30,000         | 900             | 1,000         | 510          |
| Dunmore  | 21,000         | 420             | 700           | 315          |
| Ellery   | 27,000         | 540             | 900           | 459          |

Which plant's energy consumption per unit produced is closest to 15 kWh?

- A) Aurora
- B) Borden
- C) Calder
- D) Dunmore
- E) Ellery

**answer:** D
**explanation:** Energy consumption per unit produced is total energy divided by units produced. Energy is given in megawatt-hours (MWh), and 1 MWh equals 1,000 kWh, so energy per unit in kilowatt-hours equals (Energy (MWh) x 1,000) / Units Produced. The deviation of each plant's figure from the target of 15 kWh is then compared, and the smallest deviation identifies the credited plant.

Computing energy per unit (in kWh) for each plant:

- Aurora: (372 x 1,000) / 24,000 = 372,000 / 24,000 = 15.50 kWh; deviation |15.50 - 15| = 0.50
- Borden: (252 x 1,000) / 18,000 = 252,000 / 18,000 = 14.00 kWh; deviation |14.00 - 15| = 1.00
- Calder: (510 x 1,000) / 30,000 = 510,000 / 30,000 = 17.00 kWh; deviation |17.00 - 15| = 2.00
- Dunmore: (315 x 1,000) / 21,000 = 315,000 / 21,000 = 15.00 kWh; deviation |15.00 - 15| = 0.00
- Ellery: (459 x 1,000) / 27,000 = 459,000 / 27,000 = 17.00 kWh; deviation |17.00 - 15| = 2.00

Dunmore's energy per unit is exactly 15.00 kWh, a deviation of 0.00 from the target — the minimum possible. Aurora is the next closest at 15.50 kWh (deviation 0.50), but it does not match Dunmore's exact hit. The unit conversion from MWh to kWh is essential: omitting the factor of 1,000 would leave all values near 0.015 and obscure the comparison entirely.

The correct answer is D.
**related_reading:** reading-di-03-table-analysis

---

## Q93
**difficulty:** Medium
**type:** Table Analysis
**topic:** Multi-Condition Filtering

The following table shows performance data for five investment funds over the past year:

| Fund     | Assets ($M) | 1-Yr Return % | Expense Ratio % | Sharpe Ratio |
|----------|-------------|---------------|-----------------|--------------|
| Halcyon  | 250         | 11.2          | 0.85            | 1.10         |
| Ironwood | 480         | 8.5           | 0.45            | 0.95         |
| Juniper  | 120         | 14.0          | 1.20            | 1.05         |
| Kestrel  | 360         | 9.8           | 0.60            | 1.20         |
| Lattice  | 200         | 12.5          | 0.95            | 0.80         |

How many funds satisfy all three of the following: a 1-year return above 10%, an expense ratio below 1.0%, and a Sharpe ratio of at least 1.0?

- A) 1
- B) 2
- C) 3
- D) 4
- E) 5

**answer:** A
**explanation:** Three conditions must hold simultaneously for a fund to qualify: (1) 1-Yr Return % > 10, (2) Expense Ratio % < 1.0, and (3) Sharpe Ratio >= 1.0. A fund counts only if it passes all three screens; failing any single one disqualifies it. Each fund is tested in turn.

**Halcyon.** Return 11.2 > 10 (pass); expense 0.85 < 1.0 (pass); Sharpe 1.10 >= 1.0 (pass). All three conditions hold — Halcyon qualifies.

**Ironwood.** Return 8.5 > 10? No — fails the return screen immediately. Ironwood does not qualify (its low expense ratio of 0.45 is irrelevant once the return condition fails).

**Juniper.** Return 14.0 > 10 (pass); expense 1.20 < 1.0? No — 1.20 exceeds 1.0, fails the expense screen. Juniper does not qualify despite the table's highest return.

**Kestrel.** Return 9.8 > 10? No — 9.8 is below 10, fails the return screen. Kestrel does not qualify despite the table's highest Sharpe ratio of 1.20.

**Lattice.** Return 12.5 > 10 (pass); expense 0.95 < 1.0 (pass); Sharpe 0.80 >= 1.0? No — 0.80 is below 1.0, fails the Sharpe screen. Lattice does not qualify.

Exactly one fund — Halcyon — clears all three conditions at once. Notably, each of the four near-misses fails on a different criterion: Ironwood and Kestrel on return, Juniper on expense ratio, and Lattice on Sharpe ratio. This underscores that conjunctive filtering requires every condition to be checked; a fund that excels on one or two dimensions can still be eliminated by a single failing screen. The total count of qualifying funds is therefore 1.

The correct answer is A.
**related_reading:** reading-di-03-table-analysis
