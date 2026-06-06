---
section: DI
topic: Multi-Source Reasoning
---

## Set 6: Cedar Logistics Warehouse Shipping

### Tab 1: Internal Memo

**From:** Cedar Logistics Warehouse Operations
**To:** Regional Managers

Our e-commerce warehouse fulfills orders from three regions. The South region accounts for 35% of total weekly order volume; the Central region accounts for 25%; the remainder is the North region.

Last week we processed 12,000 total orders.

### Tab 2: Shipping Policy

- Standard shipping takes 3 business days on average.
- Express shipping takes 1 business day on average and costs $8 more per order than standard.
- Express shipping is available only for orders from the South region.

### Tab 3: Pricing (all-in, per order)

| Size   | Standard | Express |
|--------|----------|---------|
| Small  | $12      | $20     |
| Medium | $18      | $26     |
| Large  | $28      | $36     |

### Q16
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information provided across all three tabs, which of the following statements must be true?

- A) For every order size, express shipping is more expensive than standard shipping.
- B) The North region accounts for less order volume than either the Central or the South region.
- C) A medium-sized order shipped via express costs more than a large-sized order shipped via standard.
- D) Most of the warehouse's orders are shipped via express service.
- E) Standard shipping is slower than express shipping for Central-region orders.

**answer:** A
**fastest_path:** Tab 3 shows express > standard for every size (S 20>12, M 26>18, L 36>28). A must be true.
**explanation:** Tab 3 verifies (A) directly: express is strictly more expensive than standard for all three sizes. Other claims fail: North 40% > Central 25% (B); Med-Exp $26 < Lg-Std $28 (C); D unsupported; E vacuous since express isn't available for Central.
**mistake_b:** North=40% > Central=25%, so North is *not* less.
**mistake_c:** Med-Exp $26 < Lg-Std $28.
**mistake_d:** No service-mix data given.
**mistake_e:** Express isn't available for Central — comparison doesn't apply.
**common_trap:** Picking (B) by computing North as the *remainder* but forgetting to compare to Central (25%). Always finish the comparison.
**takeaway:** "Must be true" MSR: verify each candidate against each tab. Eliminate vacuous claims (premise doesn't apply) and partial claims that miss data.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q17
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Volume Calculation

How many orders did the warehouse process from the North region last week?

- A) 3,000
- B) 3,500
- C) 4,200
- D) 4,800
- E) 5,000

**answer:** D
**fastest_path:** North = 100% − 35% − 25% = 40%. 0.40 × 12000 = 4800.
**explanation:** Tab 1 gives South 35%, Central 25%, total 12,000. North share = 40%. Orders = 4,800. Answer D.
**mistake_a:** 3000 — slip on subtraction.
**mistake_b:** 3500 — undershoot.
**mistake_c:** 4200 — slip.
**mistake_e:** 5000 — round up.
**common_trap:** Forgetting the "remainder" deduction; computing only South or Central directly without realizing North is implicit.
**takeaway:** Volume-share MSR with implicit residuals: subtract named shares from 100%, then apply to total.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q18
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Weighted Average Pricing

Suppose all South-region orders last week were medium-sized, with 40% shipped via express and the remaining 60% via standard. What was the average shipping cost per South-region order?

- A) $18.00
- B) $20.80
- C) $21.20
- D) $23.60
- E) $26.00

**answer:** C
**fastest_path:** Weighted: 0.4·26 + 0.6·18 = 10.4 + 10.8 = $21.20.
**explanation:** Tab 3: med-std $18, med-exp $26. Weighted avg = 0.4·26 + 0.6·18 = $21.20. Answer C.
**mistake_a:** $18.00 — pure standard pricing.
**mistake_b:** $20.80 — slip on weights or surcharge.
**mistake_d:** $23.60 — using 60/40 split inverted.
**mistake_e:** $26.00 — pure express.
**common_trap:** Applying weights inversely (60/40 → 40/60). Always read which mix-fraction goes with which price tier.
**takeaway:** Weighted-avg MSR: weight × value, summed. Verify the weight matches the price tier.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 7: Northgate Equity Research — Q1 Earnings Preview

### Tab 1: Analyst Memo

**From:** Helen Marsh, Research Analyst
**To:** Portfolio Team
**Date:** March 10

Attached is my Q1 preview for the three specialty-retail companies in our coverage.

- **Lyton Apparel:** Q1 revenue estimate $680M (+8% year-over-year), operating margin 11%. Key risk: heavier-than-usual winter inventory markdowns.
- **MorningShade Cosmetics:** Q1 revenue estimate $420M (+17% year-over-year), operating margin 17%. Key risk: FX headwind from a stronger dollar is estimated to trim the revenue growth rate by 3 percentage points versus underlying constant-currency growth.
- **NorthCrest Outdoors:** Q1 revenue estimate $310M (+2% year-over-year), operating margin 9%. Key risk: reduced promotional spend may limit upside.

### Tab 2: Financial Model Summary

| Company         | Q1 Revenue ($M) | Q1 Operating Margin | Q1 Operating Profit ($M) |
|-----------------|-----------------|---------------------|--------------------------|
| Lyton Apparel   | 680             | 11.0%               | 74.8                     |
| MorningShade    | 420             | 17.0%               | 71.4                     |
| NorthCrest      | 310             |  9.0%               | 27.9                     |
| **Total**       | **1,410**       | —                   | **174.1**                |

### Tab 3: Historical Reference

Trailing four-quarter operating margin for each company:

- Lyton Apparel: 12.5%
- MorningShade: 18.0%
- NorthCrest: 10.0%

### Q19
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the information provided across all three tabs, which of the following must be true?

- A) MorningShade is projected to have higher Q1 operating profit than Lyton Apparel.
- B) The total projected Q1 operating profit across the three companies exceeds $180 million.
- C) Every company's projected Q1 operating margin is higher than its trailing four-quarter average.
- D) NorthCrest's Q1 revenue growth rate is the lowest of the three companies.
- E) The FX headwind is reducing MorningShade's Q1 revenue by more than $20 million.

**answer:** D
**fastest_path:** Walk each claim. NC growth +2% is lowest of the three (+8, +17, +2). D is true.
**explanation:** Growth rates: Lyton +8%, MS +17%, NC +2%. NC lowest. Answer D.
**mistake_a:** MS $71.4M < Lyton $74.8M.
**mistake_b:** Total $174.1M < $180M.
**mistake_c:** Lyton's 11% < trailing 12.5% — not every company exceeded its trailing.
**mistake_e:** FX impact ≈ $11M (computed: 420 × (1.20−1.17)/1.17 ≈ $11M), not > $20M.
**common_trap:** Picking (E) without computing the FX dollar impact. Use prior-year base × the rate differential.
**takeaway:** "Must be true" with multi-tab data: verify each numeric claim. Especially watch out for "exceeds X" claims that require explicit calculation.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q20
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Revenue Increase Comparison

Which company is projected to have the largest year-over-year increase in Q1 revenue in absolute dollar terms?

- A) Lyton Apparel
- B) MorningShade Cosmetics
- C) NorthCrest Outdoors
- D) Lyton Apparel and MorningShade are tied
- E) Cannot be determined from the information provided

**answer:** B
**fastest_path:** Absolute increase = current − prior. Lyton 680 − 629.6 ≈ $50.4M. MS 420 − 359 ≈ $61M. NC 310 − 304 ≈ $6M. MS biggest.
**explanation:** Δ revenue = Q1 − prior Q1 = Q1 − Q1/(1+growth). Lyton: $50.4M. MS: $61M. NC: $6M. MS largest. Answer B.
**mistake_a:** Lyton has highest *level* but smaller absolute increase.
**mistake_c:** NC has lowest growth and smallest base.
**mistake_d:** Lyton ($50M) and MS ($61M) differ.
**mistake_e:** All three values are computable.
**common_trap:** Anchoring on Lyton because it has the highest revenue *level*. Absolute increase requires multiplying growth rate by prior base.
**takeaway:** Absolute Δ vs growth rate: highest growth rate doesn't always give highest absolute Δ. Multiply rate × prior base.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q21
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Scenario Forecasting

Suppose the FX headwind disappears entirely during Q1, so MorningShade grows at its underlying constant-currency rate of 20% year-over-year rather than the reported 17%. Assuming every company's operating margin is held constant at the projected level in Tab 2, approximately what will the three-company total Q1 operating profit be?

- A) $172M
- B) $174M
- C) $176M
- D) $178M
- E) $180M

**answer:** C
**fastest_path:** MS at 20% growth: prior ≈$359M → Q1 ≈$431M. Op profit at 17% margin = $73.3M. Total = 74.8 + 73.3 + 27.9 ≈ $176M.
**explanation:** MS scenario: prior $359M × 1.20 = $431M. New MS op profit = $431M × 0.17 ≈ $73.3M (+$1.9M). Lyton and NC unchanged. Total ≈ $176M. Answer C.
**mistake_a:** $172M — too low.
**mistake_b:** $174.1M — original total (no FX adjustment).
**mistake_d:** $178M — overshoot.
**mistake_e:** $180M — adding revenue bump *directly* without margin multiplier.
**common_trap:** Adding the revenue bump (~$11M) to the total profit. Op profit needs the margin (17%) applied: ~$2M, not $11M.
**takeaway:** Forecast Δ profit: Δ profit = Δ revenue × margin. Don't add raw revenue to profit.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 8: PalliMed Phase III Trial Overview

### Tab 1: Trial Summary

A Phase III clinical trial evaluated PalliMed-X (a new investigational drug) against a standard-of-care control for patients with moderate chronic pain. 600 patients were enrolled: 300 received PalliMed-X and 300 received the control. The primary endpoint was the percentage of patients reporting significant pain reduction (≥ 50% decrease from baseline) at week 12.

Key result: 182 of 300 patients (61%) in the PalliMed-X group met the primary endpoint, versus 141 of 300 patients (47%) in the control group — a difference of 14 percentage points.

### Tab 2: Baseline Characteristics

| Characteristic              | PalliMed-X (n=300) | Control (n=300) |
|-----------------------------|--------------------|-----------------|
| Mean age (years)            | 58.2               | 57.8            |
| Female (%)                  | 52%                | 55%             |
| Mean baseline pain (0-10)   | 6.8                | 6.7             |
| Prior opioid use (%)        | 26%                | 23%             |

### Tab 3: Adverse Events

| Event                              | PalliMed-X | Control   |
|------------------------------------|------------|-----------|
| Any adverse event                  | 189 (63%)  | 165 (55%) |
| Serious adverse event              | 21 (7%)    | 15 (5%)   |
| Discontinued due to adverse event  | 36 (12%)   | 24 (8%)   |
| Nausea                             | 48 (16%)   | 27 (9%)   |
| Headache                           | 39 (13%)   | 33 (11%)  |

### Q22
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Inference

Based on the data presented in the three tabs, which of the following must be true?

- A) PalliMed-X is more effective than the control in every subgroup of patients.
- B) The difference in primary-endpoint achievement between the two groups is statistically significant.
- C) More patients in the PalliMed-X group than in the control group achieved the primary endpoint.
- D) PalliMed-X causes nausea in the majority of patients who receive it.
- E) The control group had a higher rate of prior opioid use than the PalliMed-X group.

**answer:** C
**fastest_path:** Tab 1: 182 PalliMed-X vs 141 control achieved endpoint. 182 > 141 — C must be true.
**explanation:** 182 > 141, directly verifiable. A: no subgroup breakdown. B: no p-value reported. D: 16% nausea ≠ majority. E: reversed (PMX 26% > control 23%). Answer C.
**mistake_a:** No subgroup data — can't claim "every subgroup."
**mistake_b:** Statistical significance requires p-value; not reported.
**mistake_d:** Nausea 16% is not a majority.
**mistake_e:** Reversed — PMX 26% > control 23%.
**common_trap:** Picking (B) because a 14-pp gap *seems* clinically meaningful. But statistical significance is a specific claim requiring a p-value, not a magnitude.
**takeaway:** Trial-data MSR: distinguish *magnitude* from *significance*. Magnitude is the gap; significance requires explicit p-value.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q23
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Rate Comparison

Approximately what was the percentage-point difference between the two groups in the rate of discontinuation due to adverse events?

- A) 2
- B) 4
- C) 6
- D) 8
- E) 12

**answer:** B
**fastest_path:** 12% (PMX) − 8% (control) = 4 pp.
**explanation:** Tab 3: discontinuation 12% vs 8%. Δ = 4 pp. Answer B.
**mistake_a:** 2 — slip.
**mistake_c:** 6 — slip.
**mistake_d:** 8 — using control rate alone.
**mistake_e:** 12 — using PMX rate alone.
**common_trap:** Confusing pp difference (4) with relative increase (50%). Question asks pp.
**takeaway:** Pp vs % change: pp = absolute difference; % change = relative.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q24
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Net Benefit Projection

Assume that the differences in primary-endpoint achievement and discontinuation rates observed in the trial would persist in a broader population. For every 100 patients treated with PalliMed-X instead of the control, approximately how many additional patients would be expected to achieve the primary endpoint, and how many additional patients would be expected to discontinue due to adverse events?

- A) 10 additional successes, 2 additional discontinuations
- B) 14 additional successes, 4 additional discontinuations
- C) 14 additional successes, 7 additional discontinuations
- D) 7 additional successes, 4 additional discontinuations
- E) 20 additional successes, 10 additional discontinuations

**answer:** B
**fastest_path:** Δ success rate: 61−47 = 14 pp → 14 per 100. Δ discontinuation: 12−8 = 4 pp → 4 per 100.
**explanation:** Per 100 patients: additional successes = 14 (rate diff), additional discontinuations = 4. Answer B.
**mistake_a:** Δ success is 14 (not 10).
**mistake_c:** Δ disc is 4 (not 7).
**mistake_d:** Δ success is 14 (not 7).
**mistake_e:** Δ values are 14 and 4, not 20 and 10.
**common_trap:** Computing the *ratio* of rates (61/47 ≈ 30%) instead of the difference. "Additional patients" needs absolute pp difference applied to 100.
**takeaway:** "Additional patients per N" = pp difference × N/100. Don't confuse with relative lift (%).
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 9: Stellar Aerospace — FAA Regulatory Update

### Tab 1: Regulatory Summary

The Federal Aviation Administration (FAA) has proposed new fuel-efficiency rules for commercial airliners newly sold in the US market starting in 2027. The proposed standard requires fuel burn per passenger-mile at least 12% below the current industry average, as measured under standard operational conditions. The current industry average fuel burn is 2.6 L per 100 passenger-kilometers.

### Tab 2: Stellar Aerospace Fleet Models

| Aircraft Model  | Fuel Burn per PAX-km (L/100km) | Year First Introduced |
|-----------------|---------------------------------|-----------------------|
| SA-200          | 3.0                             | 2015                  |
| SA-300          | 2.6                             | 2019                  |
| SA-400          | 2.2                             | 2023                  |
| SA-500 (in dev) | 1.9                             | 2026 (planned)        |

### Tab 3: Commercial Impact Analysis

- The SA-200 currently represents approximately 30% of Stellar's US fleet sales.
- The SA-300 represents approximately 45% of Stellar's US fleet sales.
- The SA-400 represents approximately 25% of Stellar's US fleet sales.
- The SA-500 is not yet available for commercial sale.
- Retrofitting an existing SA-200 to meet the proposed standard is estimated to cost approximately $1.2 million per aircraft.

### Q25
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab — Regulatory Fit

Based on the three tabs, which of Stellar's aircraft models, if newly sold in the US in 2027, would meet the FAA's proposed fuel-efficiency standard?

- A) SA-200 only
- B) SA-300 only
- C) SA-300 and SA-400 only
- D) SA-400 and SA-500 only
- E) SA-300, SA-400, and SA-500

**answer:** D
**fastest_path:** Threshold: 2.6 × 0.88 = 2.288 L/100km. SA-200 (3.0) fails, SA-300 (2.6) fails, SA-400 (2.2) ✓, SA-500 (1.9) ✓.
**explanation:** Standard requires ≤ 2.288 L. SA-400 (2.2) and SA-500 (1.9) qualify. SA-200 (3.0) and SA-300 (2.6) fail. Answer D.
**mistake_a:** SA-200 fails.
**mistake_b:** SA-300 fails (at industry average, not below threshold).
**mistake_c:** SA-300 fails — only SA-400 passes among the rest.
**mistake_e:** SA-300 fails the 12%-below threshold.
**common_trap:** Picking (E) because SA-300 *equals* the industry average. The threshold is 12% *below* (2.288), not at (2.6).
**takeaway:** Regulatory thresholds: compute the literal threshold (X% below average), then compare. "Below average" ≠ "12% below average."
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q26
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Volume Share

Based on current US fleet-sales mix in Tab 3, approximately what percentage of Stellar's US sales would *fail* to meet the proposed standard without retrofit or redesign?

- A) 25%
- B) 30%
- C) 45%
- D) 55%
- E) 75%

**answer:** E
**fastest_path:** Failing models: SA-200 (30%) + SA-300 (45%) = 75%.
**explanation:** From Q1, SA-200 and SA-300 fail. Combined US sales share: 30% + 45% = 75%. Answer E.
**mistake_a:** 25% — SA-400 share (passes standard).
**mistake_b:** 30% — SA-200 alone.
**mistake_c:** 45% — SA-300 alone.
**mistake_d:** 55% — slip on summing.
**common_trap:** Forgetting SA-300 also fails (it's *at* 2.6, not below the 12% threshold). Easy to count only SA-200 (30%) as failing.
**takeaway:** Volume-share follow-up: chain answers from prior question. Failing-model set determines failing-share sum.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q27
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Cost Projection

Suppose Stellar decides to retrofit all existing SA-200 aircraft in the US fleet to meet the standard. If 150 SA-200 aircraft are in the US fleet, what is the approximate total cost of the retrofit program?

- A) $120M
- B) $150M
- C) $180M
- D) $240M
- E) $300M

**answer:** C
**fastest_path:** 150 × $1.2M = $180M.
**explanation:** Retrofit per aircraft = $1.2M (Tab 3). 150 SA-200 × $1.2M = $180M. Answer C.
**mistake_a:** $120M — using $0.8M per aircraft.
**mistake_b:** $150M — using $1.0M per aircraft.
**mistake_d:** $240M — overshoot.
**mistake_e:** $300M — using $2M per aircraft.
**common_trap:** Slipping the per-aircraft figure to a round $1.0M or $1.5M. Read the literal $1.2M from Tab 3.
**takeaway:** Cost projection: literal per-unit × count. No rounding.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 10: Orion Capital — 2024 Portfolio Review

### Tab 1: Portfolio Memo

Orion Capital's 2024 portfolio was distributed across three asset classes: Equities (60% weight), Fixed Income (30%), and Alternatives (10%). Orion's benchmark index returned 11.2% in 2024, and Orion's portfolio returned 12.9% in 2024.

### Tab 2: Asset Class Performance

| Asset Class    | Portfolio Weight | Orion's Return | Benchmark Return |
|----------------|------------------|----------------|------------------|
| Equities       | 60%              | 16%            | 13%              |
| Fixed Income   | 30%              | 7%             | 8%               |
| Alternatives   | 10%              | 12%            | 10%              |

### Tab 3: Attribution Framework

Orion uses the following simple performance-attribution framework:

- A portfolio's total return is the weighted sum across asset classes: (weight × asset-class return), summed.
- Excess return equals Orion's total return minus the benchmark's total return.
- Each asset class's *contribution* to excess return equals (weight) × (Orion's return in that class − Benchmark's return in that class).

### Q28
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Must Be True

Based on the three tabs, which of the following must be true?

- A) Orion outperformed its benchmark in every asset class.
- B) Equities contributed positively to Orion's excess return.
- C) Fixed Income contributed positively to Orion's excess return.
- D) Orion's 2024 total portfolio return was 11%.
- E) Orion weighted its three asset classes approximately equally.

**answer:** B
**fastest_path:** Equities contribution = 0.60 × (16−13) = +1.8 pp. Positive → B must be true.
**explanation:** Equities: 0.60·(16−13) = +1.8 pp — positive contribution. A: Fixed Income underperformed (7<8). C: FI contribution = −0.3 pp (negative). D: total was 12.9%, not 11%. E: weights 60/30/10 not equal. Answer B.
**mistake_a:** FI underperformed; not "every asset class."
**mistake_c:** FI contribution is negative.
**mistake_d:** 12.9% ≠ 11%.
**mistake_e:** 60/30/10 not equal.
**common_trap:** Picking (A) because Equities and Alternatives outperformed. Always check *every* asset class.
**takeaway:** Attribution MSR: contribution = weight × (portfolio − benchmark) for each class. Sign depends on whether portfolio beats benchmark in that class.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q29
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Single-Asset Contribution

What was Alternatives' approximate contribution to Orion's excess return in 2024?

- A) 0.1 percentage points
- B) 0.2 percentage points
- C) 0.5 percentage points
- D) 1.0 percentage points
- E) 2.0 percentage points

**answer:** B
**fastest_path:** 0.10 × (12 − 10) = 0.20 pp.
**explanation:** Alternatives contribution = weight × Δ = 0.10 × 2 = 0.20 pp. Answer B.
**mistake_a:** 0.1 — half the answer.
**mistake_c:** 0.5 — overshoot.
**mistake_d:** 1.0 — using wrong weight.
**mistake_e:** 2.0 — return *differential* without weight applied.
**common_trap:** Picking (E) because the *return differential* is 2 pp. But contribution requires weight × differential, not differential alone.
**takeaway:** Contribution = weight × (portfolio − benchmark). Always apply the weight.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q30
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Verifying Total Excess Return

Using the attribution framework, what was Orion's approximate total excess return (Orion total minus benchmark total) in 2024?

- A) 1.0 percentage points
- B) 1.5 percentage points
- C) 1.7 percentage points
- D) 2.0 percentage points
- E) 2.5 percentage points

**answer:** C
**fastest_path:** Sum contributions: 1.8 + (−0.3) + 0.2 = 1.7 pp. Cross-check: 12.9 − 11.2 = 1.7. ✓
**explanation:** Equities +1.8, FI −0.3, Alt +0.2. Total = 1.7 pp. Cross-check via Tab 1: 12.9% − 11.2% = 1.7 pp. Answer C.
**mistake_a:** 1.0 — undercount.
**mistake_b:** 1.5 — undercount.
**mistake_d:** 2.0 — ignoring negative FI contribution.
**mistake_e:** 2.5 — way over.
**common_trap:** Ignoring the FI underperformance (−0.3 pp). Total excess includes negative contributions.
**takeaway:** Total excess return: sum *all* contributions, including negatives. Cross-check via direct (portfolio − benchmark) calculation.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 11: TerraGrow — Marketing Campaign Evaluation

### Tab 1: Executive Memo

TerraGrow, a mid-sized agricultural supply company, conducted a six-month pilot marketing campaign on digital advertising platforms to evaluate three distinct creative variants (A, B, and C). The goal was to identify the variant that generates the highest lifetime customer value (LCV) per advertising dollar spent. Each variant was shown 5,000 impressions. The team tracked conversions, revenue per converted customer, and total advertising spend.

### Tab 2: Pilot Campaign Results

| Variant | Impressions | Conversions | Avg Revenue per Customer ($) | Ad Spend ($K) |
|---------|-------------|-------------|-------------------------------|---------------|
| A       | 5,000       | 100         | 400                           | 8.0           |
| B       | 5,000       | 150         | 250                           | 15.0          |
| C       | 5,000       | 75          | 500                           | 12.5          |

### Tab 3: Attribution Framework

For each variant:

- Conversion rate = (Conversions) / (Impressions).
- Total revenue = (Conversions) × (Avg revenue per customer).
- Efficiency = (Total revenue) / (Ad spend).

The team will rank variants by efficiency for the formal recommendation.

### Q31
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Reading the Table — Highest Avg Revenue

Which variant has the highest Average Revenue per converted Customer?

- A) A
- B) B
- C) C
- D) A and C are tied
- E) Cannot be determined

**answer:** C
**fastest_path:** Tab 2 direct: A $400, B $250, C $500. C wins.
**explanation:** Tab 2 gives per-customer revenue by variant: A = $400, B = $250, C = $500. C wins outright — no arithmetic needed, just read the right row off the right tab.
**mistake_a:** $400 — second-highest.
**mistake_b:** $250 — lowest.
**mistake_d:** A and C aren't tied (400 vs 500).
**mistake_e:** Data is provided directly.
**common_trap:** Confusing avg revenue per customer with total revenue or efficiency.
**takeaway:** Direct fact-lookup MSR: read the relevant column. Don't compute when not asked.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q32
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Conversion-Rate Comparison

Which variant has the highest conversion rate?

- A) A
- B) B
- C) C
- D) They are approximately equal
- E) Cannot be determined

**answer:** B
**fastest_path:** Same impressions (5000), so highest conversions = highest rate. A 100, B 150, C 75 → B.
**explanation:** Conversion rate = conversions / impressions. With equal impressions, B's 150 conversions wins. Rates: 2.0%, 3.0%, 1.5%. Answer B.
**mistake_a:** A 2% < B 3%.
**mistake_c:** C 1.5%, lowest.
**mistake_d:** Rates clearly differ.
**mistake_e:** Computable directly.
**common_trap:** Confusing volume (conversions) with rate. With equal impressions, they coincide; otherwise compute the ratio.
**takeaway:** Rate metric: conversions / impressions. With equal denominators, the numerator alone ranks them.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q33
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Efficiency — Revenue per Ad Dollar

Based on the Efficiency metric defined in Tab 3, which variant delivered the highest total revenue per advertising dollar spent?

- A) A
- B) B
- C) C
- D) They are approximately equal
- E) Cannot be determined

**answer:** A
**fastest_path:** Efficiency = revenue/spend. A: $40K/$8K = 5.0. B: $37.5K/$15K = 2.5. C: $37.5K/$12.5K = 3.0. A wins.
**explanation:** Efficiency = total revenue / ad spend. A: 100·400/8000 = 5.0. B: 150·250/15000 = 2.5. C: 75·500/12500 = 3.0. A highest. Answer A.
**mistake_b:** B has highest conversions but lowest efficiency.
**mistake_c:** C has highest avg revenue but middle efficiency.
**mistake_d:** Values differ.
**mistake_e:** All computable.
**common_trap:** Ranking by intermediate metrics (conversions or avg revenue) instead of the final efficiency. Efficiency joins revenue and cost.
**takeaway:** Composite-metric MSR: compute the named final metric. Intermediate-metric leaders rarely lead on composite metrics.
**related_reading:** reading-di-05-multi-source-reasoning


---

## Set 12: Lumen Tech — 2024 Product Portfolio Review

### Tab 1: Executive Summary

Lumen Tech is reviewing its 2024 product portfolio across three product lines — Cloud Infrastructure, Security Services, and AI Platform — before setting 2025 strategic priorities. The CEO has requested that the review address financial performance, regional distribution, competitive market context, and a formal classification into "High priority" versus "Review" tiers.

### Tab 2: Revenue and Margin Performance

| Product Line          | 2024 Revenue ($M) | Growth vs. 2023 (%) | Operating Margin (%) |
|-----------------------|-------------------|---------------------|----------------------|
| Cloud Infrastructure  | 450               | 12                  | 22                   |
| Security Services     | 280               | 18                  | 28                   |
| AI Platform           | 120               | 65                  | 15                   |

### Tab 3: Regional Revenue Breakdown (in $M)

| Region         | Cloud Infrastructure | Security Services | AI Platform |
|----------------|----------------------|-------------------|-------------|
| North America  | 280                  | 160               | 75          |
| EMEA           | 120                  | 85                | 30          |
| APAC           | 50                   | 35                | 15          |

### Tab 4: Competitive Market Growth

Industry estimates for each product line's addressable market growth rate:

- Cloud Infrastructure market: approximately 9 percent annual growth.
- Security Services market: approximately 14 percent annual growth.
- AI Platform market: approximately 55 percent annual growth.

### Tab 5: Strategic Priorities Framework

- A product line qualifies as "High priority" when BOTH its growth rate exceeds its addressable market's growth rate AND its operating margin is at least 20 percent.
- Lines that fail either condition are classified as "Review."
- 2025 investment increases will be allocated only to "High priority" lines.

### Q34
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Cross-Tab Classification

Based on the Strategic Priorities Framework in Tab 5 and the data in Tabs 2 and 4, which product line(s) qualify as "High priority"?

- A) Cloud Infrastructure only
- B) Security Services only
- C) AI Platform only
- D) Cloud Infrastructure and Security Services
- E) All three product lines

**answer:** D
**fastest_path:** Two conditions: growth > market AND margin ≥ 20%. Cloud (12>9, 22%) ✓, Security (18>14, 28%) ✓, AI (65>55, 15%) ✗ on margin.
**explanation:** Check both conditions per line. Cloud: 12>9 ✓, 22 ≥20 ✓ → high. Security: 18>14 ✓, 28 ≥20 ✓ → high. AI: 65>55 ✓ but 15 <20 ✗ → review. Two qualify. Answer D.
**mistake_a:** Security also qualifies.
**mistake_b:** Cloud also qualifies.
**mistake_c:** AI fails on margin.
**mistake_e:** AI fails on margin.
**common_trap:** Picking (E) because AI Platform has dramatic growth (65%). Margin threshold (≥20%) eliminates it.
**takeaway:** Multi-criteria classification: BOTH conditions must hold. Strong growth alone doesn't override the margin gate.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q35
**difficulty:** Medium
**type:** Multi-Source Reasoning
**topic:** Regional Share Calculation

Approximately what percentage of Lumen Tech's 2024 total revenue came from North America?

- A) 45%
- B) 52%
- C) 55%
- D) 61%
- E) 68%

**answer:** D
**fastest_path:** NA total = 280+160+75 = $515M. Company total = 450+280+120 = $850M. 515/850 ≈ 61%.
**explanation:** Tab 3 NA: 280+160+75 = $515M. Tab 2 total: $850M. NA share = 515/850 ≈ 60.6% → 61%. Answer D.
**mistake_a:** 45% — undershoot.
**mistake_b:** 52% — slip.
**mistake_c:** 55% — slip.
**mistake_e:** 68% — overshoot.
**common_trap:** Using only one product line's NA share (e.g., Cloud 280/450 ≈ 62%) instead of the company-wide share.
**takeaway:** Cross-tab share: sum the relevant rows in one tab; divide by the total from another tab.
**related_reading:** reading-di-05-multi-source-reasoning

---

### Q36
**difficulty:** Hard
**type:** Multi-Source Reasoning
**topic:** Forecast — Applied Growth Rate

Suppose Lumen Tech increases 2025 investment only in "High priority" lines (per Tab 5), and Security Services maintains its 18 percent year-over-year growth rate into 2025. Approximately what will Security Services' 2025 revenue be?

- A) $290M
- B) $310M
- C) $330M
- D) $350M
- E) $370M

**answer:** C
**fastest_path:** Security 2024 = $280M. ×1.18 = $330.4M ≈ $330M.
**explanation:** Tab 2: Security 2024 = $280M. ×1.18 = $330.4M. Answer C.
**mistake_a:** $290M — under-applying growth.
**mistake_b:** $310M — slip.
**mistake_d:** $350M — overshoot.
**mistake_e:** $370M — applying growth twice.
**common_trap:** Applying growth to the *company total* ($850M × 1.18) instead of the Security Services line. Read which entity grows.
**takeaway:** Forecast MSR: identify which subgroup the growth rate applies to. Apply only to that subgroup's base.
**related_reading:** reading-di-05-multi-source-reasoning
