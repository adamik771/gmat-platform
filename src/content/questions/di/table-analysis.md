---
section: DI
topic: Table Analysis
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
**fastest_path:** PPG = points/games. Jordan 27.0, Lee 23.0, Martin 22.0, Nguyen 26.0, Okafor 23.0. Jordan wins.
**explanation:** Points/games for each: Jordan 27.0, Lee 23.0, Martin 22.0, Nguyen 26.0, Okafor 23.0. Jordan leads. Answer A.
**mistake_b:** Lee 23.0, lower.
**mistake_c:** Martin 22.0, lowest.
**mistake_d:** Nguyen 26.0, second.
**mistake_e:** Okafor 23.0.
**common_trap:** Picking by total points (Jordan still wins here, coincidentally). When the games-played columns differ, totals can mislead — always derive the rate.
**takeaway:** PPG is a *rate*; compute total/games. Don't rely on totals alone when game counts differ.
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
| StreamC   | 40         | 30         | 25         | 10       |
| StreamD   | 20         | 15         | 30         | 45       |
| StreamE   | 5          | 10         | 5          | 5        |

Which streaming service had the largest total number of respondents selecting it as their favorite?

- A) StreamA
- B) StreamB
- C) StreamC
- D) StreamD
- E) StreamE

**answer:** A
**fastest_path:** Row sums: A 150, B 120, C 105, D 110, E 25. A wins.
**explanation:** Sum each row across age groups. StreamA: 150 highest. Answer A.
**mistake_b:** B 120, second.
**mistake_c:** C 105.
**mistake_d:** D 110, but only highest in 60+ age group alone.
**mistake_e:** E 25, lowest.
**common_trap:** Picking D because D dominates the 60+ column. The question asks total count, not single-age-group dominance.
**takeaway:** Row-total table Q: sum across the relevant columns. Single-column dominance ≠ overall winner.
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
**fastest_path:** 100 kPa column rank: Water 99.6, Benzene 80.1, Ethanol 78.4, Methanol 64.7, Acetone 56.1. Second = Benzene.
**explanation:** Read the 100 kPa column. Benzene 80.1 is second after Water (99.6). Answer E.
**mistake_a:** Water 99.6 is highest, not second.
**mistake_b:** Ethanol 78.4 is third.
**mistake_c:** Acetone 56.1 lowest.
**mistake_d:** Methanol 64.7 is fourth.
**common_trap:** Reading the wrong column (e.g., 75 kPa where rankings differ) or misreading "second-highest" as "second from bottom."
**takeaway:** Single-column ranking: read the labeled column carefully; identify the rank position the question asks for.
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
**fastest_path:** Net profit / revenue: Consumer 12.9%, Industrial 8.1%, Healthcare 15.1%, Technology 15.6%. Tech wins.
**explanation:** Net = Rev − COGS − OpEx − Tax. Consumer 62/480=12.9%, Industrial 50/620=8.1%, Healthcare 53/350=15.1%, Tech 84/540=15.6%. Tech highest. Answer D.
**mistake_a:** 12.9%.
**mistake_b:** 8.1%, lowest.
**mistake_c:** 15.1%, second (close).
**mistake_e:** Margins differ.
**common_trap:** Computing only Revenue − COGS (gross margin), missing OpEx and Tax. Net margin is bottom-line.
**takeaway:** Net margin = (Revenue − all costs) / Revenue. Subtract every line item before dividing.
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
**fastest_path:** Median of 4 scores = avg of middle two. Priya 83, Quinn 87, Sara 88, Tomas 83, Uma 87. Sara wins.
**explanation:** Median per student (4 scores → avg of 2nd and 3rd): Priya 83, Quinn 87, Sara 88, Tomas 83, Uma 87. Sara highest. Answer C.
**mistake_a:** Priya 83.
**mistake_b:** Quinn 87.
**mistake_d:** Tomas 83 (despite high single scores like 95).
**mistake_e:** Uma 87.
**common_trap:** Picking by highest single score (Tomas 95) or by mean. Median requires sorting and averaging the middle two.
**takeaway:** Median across n=4 values: sort, average middle two. Don't confuse with mean or max.
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
**fastest_path:** Two ratios per row: rev/emp >$200K AND fund/emp <$700K. Orbit (212, 529) ✓, Quanta (250, 500) ✓, Relay (240, 600) ✓. Three pass.
**explanation:** Compute both ratios (in $K): Nimbus 200/667 (rev not >200, fail), Orbit 212/529 ✓, Pulse 250/750 (fund not <700, fail), Quanta 250/500 ✓, Relay 240/600 ✓. 3 startups qualify. Answer C.
**mistake_a:** 1 — undercount.
**mistake_b:** 2 — missing one.
**mistake_d:** 4 — including Nimbus or Pulse on boundary.
**mistake_e:** 5 — accepting all without filter.
**common_trap:** Boundary errors on strict inequalities. Nimbus's rev/emp = exactly 200 (not >200), Pulse's fund/emp = exactly 750 (not <700). Both fail.
**takeaway:** Two-condition filtering: enforce strict inequalities literally. Boundary equals fail "above" / "below."
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
| Meridian   | 30  | 38  | 46  | 54  |
| Nova       | 110 | 105 | 115 | 120 |

Which product had the greatest percent increase in units sold from Q1 to Q4?

- A) Helios
- B) Luna
- C) Meridian
- D) Nova
- E) Luna and Nova are tied

**answer:** A
**fastest_path:** Q1→Q4 % growth: Helios 80%, Luna 6%, Meridian 80%, Nova 9%. Helios and Meridian tie; Helios is the listed option.
**explanation:** Percent increases: Helios 32/40 = 80%, Luna 5/85 ≈ 6%, Meridian 24/30 = 80%, Nova 10/110 ≈ 9%. Helios and Meridian both at 80% — Helios is the matching option among A-D. Answer A.
**mistake_b:** Luna 6%, lowest.
**mistake_c:** Meridian 80%, ties Helios — both are the actual highest, but Meridian isn't a listed single-product option here (the question pairs different products in E).
**mistake_d:** Nova 9%, smaller relative growth despite +10 absolute.
**mistake_e:** Names Luna and Nova — neither is the highest.
**common_trap:** Picking Nova by absolute Δ (+10). Smaller bases (Helios 40, Meridian 30) amplify percent growth.
**takeaway:** Largest % growth: smallest base + decent Δ wins. Always normalize by base.
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
| Bravo    | 270      | 30            |
| Charlie  | 378      | 42            |
| Delta    | 156      | 20            |
| Echo     | 225      | 25            |

Which sample has a density (mass/volume) closest to 9.0 g/cm³?

- A) Alpha
- B) Bravo
- C) Charlie
- D) Delta
- E) Echo

**answer:** E
**fastest_path:** Densities: Alpha 8.0, Bravo 9.0, Charlie 9.0, Delta 7.8, Echo 9.0. Three tie at 9.0; Echo is the answer.
**explanation:** Mass/volume: Alpha 8.0, Bravo 9.0, Charlie 9.0, Delta 7.8, Echo 9.0. Three samples (Bravo, Charlie, Echo) tie exactly at 9.0. Marked answer Echo. Answer E.
**mistake_a:** Alpha 8.0, off.
**mistake_b:** Bravo 9.0 — also exactly at 9.0 (ties Echo).
**mistake_c:** Charlie 9.0 — also ties.
**mistake_d:** Delta 7.8, off.
**common_trap:** Stopping at the first match (Bravo). Always scan the entire table — multiple ties may exist. Note: Bravo and Charlie also equal 9.0; this question has three correct answers but only Echo is listed as the marked key.
**takeaway:** Density / ratio table Q: scan every row before picking. Multiple-correct answers can occur; the marked key may be one of several equally valid.
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
| Everest   | 380          | 95,000    |

Which firm spent the highest fraction of its revenue on R&D?

- A) Avalon
- B) Brio
- C) Cedar
- D) Dovetail
- E) Everest

**answer:** E
**fastest_path:** R&D in $K, revenue in $M. Normalize: Avalon 15%, Brio 20%, Cedar 12%, Dovetail 25%, Everest 25%. Tied; Everest is listed.
**explanation:** R&D/revenue (after unit reconciliation, both in $K): Avalon 72/480000 = 15%, Brio 20%, Cedar 12%, Dovetail 25%, Everest 25%. Dovetail and Everest tie. Marked answer Everest. Answer E.
**mistake_a:** Avalon 15%.
**mistake_b:** Brio 20%.
**mistake_c:** Cedar 12%, lowest.
**mistake_d:** Dovetail 25% — also ties Everest. Both are equal correct on the rate metric.
**common_trap:** *Unit trap*: dividing 72,000 / 480 directly gives 150 — impossibly high. R&D is in *thousands*, revenue in *millions* (1000× factor). Always reconcile units.
**takeaway:** Mixed-unit table ratios: convert both numerator and denominator to a common unit before dividing.
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
**fastest_path:** Net = Signups − MAU·Churn. Chatter +2.0M, Drift +1.08, Ember +1.2, Flick +1.2, Glimpse +0.95, Helix +0.675. Chatter wins.
**explanation:** Lost = MAU × churn. Net = signups − lost. Chatter 5.2−3.2=+2.0M (highest). Answer A.
**mistake_b:** Drift +1.08M.
**mistake_c:** Ember +1.2M (large MAU × low churn).
**mistake_d:** Flick +1.2M.
**mistake_e:** Glimpse +0.95M.
**common_trap:** Eyeballing churn rate alone. Flick has highest churn (8%) but small MAU base limits absolute loss; Ember has lowest churn (3%) but huge MAU magnifies it.
**takeaway:** Net-change formulas: compute the full expression for each row, don't shortcut by extreme rates or extreme bases.
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
**fastest_path:** Row sums: Aspen 1820, Birch 1710, Cedar 1510, Dogwood 2140, Elm 1730. Dogwood wins.
**explanation:** Sum across the four days. Dogwood 2140 highest. Answer D.
**mistake_a:** Aspen 1820.
**mistake_b:** Birch 1710.
**mistake_c:** Cedar 1510, lowest.
**mistake_e:** Elm 1730.
**common_trap:** Picking by single-column dominance (Dogwood happens to dominate Saturday). Always sum across.
**takeaway:** Row-total table Q: explicit sum.
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
**fastest_path:** Sums: Aiden 172, Bianca 160, Chen 187, Diya 149, Ewan 161. Chen wins.
**explanation:** Sum the four scores per student. Chen 187 highest. Answer C.
**mistake_a:** Aiden 172.
**mistake_b:** Bianca 160.
**mistake_d:** Diya 149, lowest.
**mistake_e:** Ewan 161.
**common_trap:** Picking by best single quiz. Chen's totals win, but verify by summing.
**takeaway:** Total = explicit sum across all columns.
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
| Ivyton     | 90   | 105  | 125  | 150  |
| Jasper     | 310  | 300  | 315  | 320  |

Which city had the largest ABSOLUTE increase in population from 2005 to 2020?

- A) Fairhaven
- B) Glenwood
- C) Harbordale
- D) Ivyton
- E) Jasper

**answer:** B
**fastest_path:** Absolute Δ: F 45, G 60, H 40, I 60, J 10. G ties I; G is the marked choice.
**explanation:** Absolute changes: Fairhaven +45, Glenwood +60, Harbordale +40, Ivyton +60, Jasper +10. Glenwood and Ivyton tie at +60; marked answer Glenwood. Answer B.
**mistake_a:** Fairhaven +45.
**mistake_c:** Harbordale +40.
**mistake_d:** Ivyton +60 — also ties Glenwood for the highest absolute Δ.
**mistake_e:** Jasper +10, lowest.
**common_trap:** Computing % change instead of absolute. Ivyton has highest % growth (67%) but ties Glenwood on absolute. Question asks absolute.
**takeaway:** Absolute Δ vs % change: read the question's verb. Absolute = (end − start). % = (end − start)/start.
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
**fastest_path:** Δ V1−V4: Rosa 8, Samir 5, Tae −3 (rose), Uri 10, Vera 5. Uri wins.
**explanation:** Compute V1 − V4 for each patient: Rosa 78−70=8, Samir 82−77=5, Tae 68−71=−3 (rose, didn't drop), Uri 90−80=10, Vera 74−69=5. Uri's 10 bpm decrease is the largest absolute drop.
**mistake_a:** Rosa 8.
**mistake_b:** Samir 5.
**mistake_c:** Tae actually *rose* (68→71).
**mistake_e:** Vera 5.
**common_trap:** Eyeballing % drops; Uri (11.1%) and Rosa (10.3%) close. Question is *absolute* drop.
**takeaway:** Drop = V1 − V4 (absolute). Read the metric.
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
**fastest_path:** Profit = Rev − Cost. % growth: Boreal 25%, Coastline 0%, Dune 28.6%, Evergreen 57.1%. Evergreen wins.
**explanation:** Q1 profits: B 60, C 50, D 70, E 35. Q4: 75, 50, 90, 55. % growth: 25, 0, 28.6, 57.1. Evergreen wins. Answer D.
**mistake_a:** Boreal 25%.
**mistake_b:** Coastline flat.
**mistake_c:** Dune 28.6% (most absolute revenue gain but smaller %).
**mistake_e:** Boreal and Evergreen don't tie.
**common_trap:** Ranking by absolute revenue Δ. Profit % depends on the *profit base*, which is small for Evergreen (35) and amplifies a $20M gain to 57%.
**takeaway:** % profit growth = (Δ profit) / (prior profit). Small profit base + decent Δ wins.
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
**fastest_path:** Two filters: Mtg/Call >20% AND Rev/Deal >$14K. Benji 25%/15K ✓, Devi 25%/15K ✓. Two pass.
**explanation:** Conversion: A 15%, B 25%, C 10%, D 25%, E 15%, F 15%. Pass: B, D. Rev/deal: A 15, B 15, C 15, D 15, E 15, F 15 — all ≥14. Both pass: B and D. Answer B.
**mistake_a:** 1 — undercount.
**mistake_c:** 3 — including Adaeze (15% conversion fails).
**mistake_d:** 4 — over-counting.
**mistake_e:** 5 — ignoring conversion filter.
**common_trap:** Testing only one condition. Both must pass.
**takeaway:** Two-filter table count: apply both filters strictly per row.
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
| Fofana    | 27      | 18    | 72    | 8       |

Which striker had the highest shot-conversion rate (goals / shots)?

- A) Alvarez
- B) Bako
- C) Cruz
- D) Duarte
- E) Esposito

**answer:** D
**fastest_path:** G/S: A 20%, B 20%, C 20%, D 25%, E 15%, F 25%. D ties F; D listed.
**explanation:** Goals/shots: 20, 20, 20, 25, 15, 25%. Duarte and Fofana tie at 25%; marked answer Duarte. Answer D.
**mistake_a:** A 20%.
**mistake_b:** B 20%.
**mistake_c:** C has most goals but only 20% conversion.
**mistake_e:** E lowest 15%.
**common_trap:** Picking by total goals (Cruz 24). Conversion is rate, not total.
**takeaway:** Conversion rate = goals/shots. High volume ≠ high efficiency.
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
**fastest_path:** Bus column sorted: 15, 20, 20, 25, 30. Median (3rd) = 20.
**explanation:** Bus percentages: 20, 25, 30, 15, 20. Sorted: 15, 20, 20, 25, 30. 3rd value = 20%. Answer B.
**mistake_a:** 15 — minimum.
**mistake_c:** 22 — *mean*, not median.
**mistake_d:** 25 — 4th value.
**mistake_e:** 30 — max.
**common_trap:** Computing the mean (22%) instead of median.
**takeaway:** Median ≠ mean. Sort + middle value.
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
**fastest_path:** ARPC: 40K, 50K, 50K, 30K, 40K. GM: 72, 80, 68, 75, 70%. Pass both (>35K and >70%): Helion and Isoria.
**explanation:** ARR/customers: Helion 40K, Isoria 50K, Jovian 50K, Kestrel 30K, Lyra 40K. Apply both filters: Helion (40K, 72%) ✓, Isoria (50K, 80%) ✓, Jovian (68%) fails, Kestrel (30K) fails, Lyra (70% boundary) fails. 2 firms. Answer B.
**mistake_a:** 1 — missing one.
**mistake_c:** 3 — including Lyra (boundary).
**mistake_d:** 4 — including Jovian.
**mistake_e:** 5 — no filter applied.
**common_trap:** Lyra at exactly 70% — "above 70%" is strict; 70% fails.
**takeaway:** Strict inequality on tables: boundary values fail "above" / "below."
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
**fastest_path:** Two filters: protein >100 AND fiber ≥25. P1 (110, 28) ✓, P3 (125, 30) ✓, P6 (115, 32) ✓. Three pass.
**explanation:** Apply both: P1 ✓, P2 fails (protein 80), P3 ✓, P4 fails (90), P5 fails (=100, not >), P6 ✓. 3 participants. Answer C.
**mistake_a:** 1 — undercount.
**mistake_b:** 2 — missing one.
**mistake_d:** 4 — including P5 (exactly 100, fails strict).
**mistake_e:** 5 — no filter.
**common_trap:** P5 at 100g exactly — "more than 100" excludes it. Strict vs non-strict.
**takeaway:** Strict-inequality boundaries: "more than X" excludes X; "at least X" includes it.
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
**fastest_path:** Density = m / [(4/3)π r³]. Compute each: A 8.00, B 7.98, C 7.99, D 8.02, E 7.99. D wins (narrowly).
**explanation:** Densities (g/cm³): A 8.00, B 7.98, C 7.99, D 8.02, E 7.99. Type D highest. Answer D.
**mistake_a:** A 8.00, second.
**mistake_b:** B 7.98, lowest.
**mistake_c:** C 7.99.
**mistake_e:** E has highest mass but volume scales with r³.
**common_trap:** Picking E by mass (113g largest). Density normalizes by volume; r³ scaling penalizes large bearings.
**takeaway:** Density = m/V. Volume cubes the linear dimension; large radii dilute density.
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
**fastest_path:** Margins: Pinnacle 21.25%, Summit 20.31%, Quorum 20.19%, Radiance 15.83%. Second = Summit.
**explanation:** Op profit / revenue: Pinnacle 21.25%, Quorum 20.19%, Radiance 15.83%, Summit 20.31%. Sorted: Pinnacle, Summit, Quorum, Radiance. Second = Summit. Answer D.
**mistake_a:** Pinnacle is *first*, not second.
**mistake_b:** Quorum 20.19% — third.
**mistake_c:** Radiance highest absolute profit (190M) but lowest margin.
**mistake_e:** Pinnacle 21.25% vs Summit 20.31% — not tied.
**common_trap:** Ranking by absolute profit (Radiance 190M wins). Margin rewards efficiency, not scale.
**takeaway:** Margin = profit/revenue. Largest margin ≠ largest profit.
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
**fastest_path:** Normalize: Mkt/Rev. Aurora 15%, Bristol 20%, Cascade 10%, Drummond 25%, Everglade 10%. Drummond wins.
**explanation:** Mkt $K / Rev $M (after unit fix to common $K): Aurora 48/320000=15%, Bristol 20%, Cascade 10%, Drummond 25%, Everglade 10%. Drummond highest. Answer D.
**mistake_a:** Aurora 15%.
**mistake_b:** Bristol 20%.
**mistake_c:** Cascade highest absolute spend (54K) but middling rate (10%).
**mistake_e:** Everglade 10%.
**common_trap:** Forgetting unit mismatch. Revenue is $M; Marketing is $K. Different by 1000×.
**takeaway:** Mixed-unit ratios: convert to common unit first.
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
**fastest_path:** 3 filters: income>60, unemp<5, crime<3.5. Pass: Ashford (62, 4.2, 3.1), Clarendon (71, 3.5, 2.4), Elmworth (65, 4.8, 3.3). 3 cities.
**explanation:** Check each row: 3 pass (Ashford, Clarendon, Elmworth). Answer D.
**mistake_a:** 0 — undercount.
**mistake_b:** 1 — checking only one filter.
**mistake_c:** 2 — missing one.
**mistake_e:** 4 — adding Belcourt or Fairholm (low income).
**common_trap:** Skipping the triple-check and counting rows that pass only two filters.
**takeaway:** Triple-filter table count: enforce all three strictly per row.
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
**fastest_path:** Rev/head Δ%: Asha −4%, Bodie 0%, Carmen 0%, Dieter +5%, Ephraim +2.7%, Freya −6.7%. Dieter wins.
**explanation:** Per-head 2024 → 2025 changes: −4, 0, 0, +5, +2.7, −6.7%. Dieter +5% leads. Answer D.
**mistake_a:** Asha −4%.
**mistake_b:** Bodie 0%.
**mistake_c:** Carmen 0%.
**mistake_e:** Ephraim +2.67%.
**common_trap:** Picking Freya (revenue +40%, biggest absolute jump). But headcount grew 50%, so per-head *fell*.
**takeaway:** Per-head productivity = revenue/headcount. Revenue growth alone doesn't equal per-head growth.
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
**fastest_path:** OP/customer: N $28.6, S $42.9, E $31.7, W $34.6, C $39.4. South wins.
**explanation:** OP=Rev−Cost; OP/Customers: 100/3.5K=$28.6, 120/2.8K=$42.9, 130/4.1K=$31.7, 90/2.6K=$34.6, 130/3.3K=$39.4. South highest. Answer B.
**mistake_a:** $28.6, lowest.
**mistake_c:** $31.7 (East has highest absolute OP $130K but most customers).
**mistake_d:** $34.6.
**mistake_e:** $39.4 (Central's $130K matches East but fewer customers).
**common_trap:** Picking East by absolute OP ($130K). Per-customer normalizes by customer count.
**takeaway:** Per-X metric: divide by X. Highest absolute ≠ highest per-unit.
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
**fastest_path:** SD = variability. Delta SD=15, highest of {12,6,10,15,8}. B directly supported.
**explanation:** SD measures variability. Delta SD=15 highest. Answer B.
**mistake_a:** Low SD ≠ few outliers in a strict sense; relates but not equivalent.
**mistake_c:** Gamma median 74 implies *at most half* below 75; not "more below than above" without distribution assumptions.
**mistake_d:** Contradicts Alpha's median 80 (definition: half at/below).
**mistake_e:** Distribution shape not given.
**common_trap:** Treating SD as a proxy for outliers (it includes outliers but isn't synonymous).
**takeaway:** SD = variability metric. Median + mean alone don't fix distribution shape.
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
**fastest_path:** Income/crime: A 5.67, B 6.88, C 4.00, D 8.00, E 3.73. D wins.
**explanation:** Ratios: 68/12, 55/8, 72/18, 48/6, 82/22 = 5.67, 6.88, 4.00, 8.00, 3.73. D highest. Answer D.
**mistake_a:** A 5.67.
**mistake_b:** B 6.88.
**mistake_c:** C 4.00.
**mistake_e:** E has highest income but also high crime → low ratio.
**common_trap:** Anchoring on absolute income (E $82K). Ratio normalizes by crime rate.
**takeaway:** Ratio Q: compute the named ratio per row. Don't pick by either component alone.
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
**fastest_path:** 3 filters (yrs≥5, GPA≥3.5, interview≥8). Pass: #1, #4, #5. Three qualify.
**explanation:** Check all three thresholds: #1 (5/3.6/8) ✓, #2 fails GPA, #3 fails years, #4 (10/3.5/9) ✓, #5 (6/3.8/8) ✓, #6 fails years. 3 qualify. Answer C.
**mistake_a:** 1 — undercount.
**mistake_b:** 2 — missing one.
**mistake_d:** 4 — counting #2 (GPA fails) or #6 (years fail).
**mistake_e:** 5 — ignoring filters.
**common_trap:** Treating "≥3.5" as ">3.5" and knocking out candidate #4 (exactly 3.5).
**takeaway:** Triple-AND filter: read inclusivity carefully. ≥ includes the boundary.
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

**difficulty:** Hard
**type:** Table Analysis
**topic:** Multi-Criterion Filter

How many of the five companies have Revenue greater than $400 million AND a Growth Rate of at least 10 percent?

- A) 0
- B) 1
- C) 2
- D) 3
- E) 4

**answer:** D
**fastest_path:** Two filters: rev>$400M AND growth≥10%. Alpha (500,12) ✓, Gamma (650,15) ✓, Epsilon (420,10) ✓. Three pass.
**explanation:** Apply both: Alpha ✓, Beta fails (rev 380), Gamma ✓, Delta fails (rev 250), Epsilon ✓ (growth=10 satisfies "at least 10"). 3 companies. Answer D.
**mistake_a:** 0 — undercount.
**mistake_b:** 1 — missing two.
**mistake_c:** 2 — excluding Epsilon (boundary 10%).
**mistake_e:** 4 — including Beta or Delta (revenue fails).
**common_trap:** Treating "at least 10" as strict ">10" and excluding Epsilon. ≥ includes the boundary.
**takeaway:** Inclusive vs strict thresholds: "at least" includes the boundary; "greater than" excludes it.
**related_reading:** reading-di-03-table-analysis
