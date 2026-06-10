---
section: Quant
topic: Problem-Solving Strategy
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Of the 2,083 employees at a company, 31% work remotely. Approximately how many employees work remotely?

- A) 280
- B) 420
- C) 650
- D) 900
- E) 1,250

**answer:** C
**fastest_path:** Round 2,083 to 2,100 and read 31% as "about 30%" — three tenths of 2,100.
**explanation:** The word "approximately" and the wide gaps between choices are the signal to size, not compute.

Round both numbers to landmarks: 2,083 is about 2,100, and 31% is about 30%. Three tenths of 2,100 is 630.

Both roundings were slightly downward (31% to 30%) and slightly upward (2,083 to 2,100), so the true value sits very near 630. Only one choice lives in that neighborhood: 650. The exact value, 645.7, confirms it — but you never needed it.

The correct answer is C.
**common_trap:** Computing 0.31 x 2,083 longhand. The choices are spaced roughly 50% apart — far wider than any rounding error — so exact arithmetic is pure wasted time here.
**takeaway:** When the stem says "approximately" and adjacent choices differ by a third or more, round to landmarks and pick the only choice in the neighborhood.
**related_reading:** quant-03-estimation

---

## Q2
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to 718 / 0.49?

- A) 14
- B) 36
- C) 145
- D) 360
- E) 1,450

**answer:** E
**fastest_path:** Dividing by 0.49 is dividing by about one half — which doubles the number.
**explanation:** Read 0.49 as a size: it is almost exactly one half. Dividing by one half is the same as multiplying by 2, so 718 / 0.49 is about 718 x 2 = 1,436.

The choices are spaced by factors of 10 and of 2.5, so an estimate that coarse is decisive: only 1,450 is anywhere near 1,436.

The correct answer is E.
**common_trap:** Treating division by a decimal as if it shrinks the number. Dividing by something less than 1 makes the result BIGGER than what you started with — 360 (roughly 718 x 0.49) is the trap built from multiplying instead of dividing.
**takeaway:** Before dividing by a decimal, ask whether the result should be bigger or smaller than the starting number. Dividing by a number below 1 always enlarges.
**hint_nudge:** How big is 0.49, roughly? What does dividing by that do to a number?
**related_reading:** quant-03-estimation

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to 5/8 of 481?

- A) 150
- B) 300
- C) 390
- D) 480
- E) 600

**answer:** B
**fastest_path:** Read 5/8 as 0.625 — a bit more than half — and take it of 480.
**explanation:** The converter 5/8 = 0.625 turns this into "a bit more than half of about 480."

Half of 480 is 240, and 0.625 is one quarter of the way from 0.5 to 1, so the answer sits noticeably above 240 but well below 480. More directly: 480 / 8 = 60, and 5 x 60 = 300.

The exact value is 300.625; the estimate lands on it almost exactly.

The correct answer is B.
**common_trap:** Sliding to 390 by reading 5/8 as "most of the number." 5/8 is 0.625, not 0.8 — memorized converters prevent exactly this drift.
**takeaway:** Sight-read the eighths: 1/8 = 0.125, 3/8 = 0.375, 5/8 = 0.625, 7/8 = 0.875. A fraction you can read as a decimal is a fraction you can size instantly.
**related_reading:** quant-03-estimation

---

## Q4
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A laptop priced at $1,184 is discounted by 24%. The sale price is approximately:

- A) $280
- B) $590
- C) $700
- D) $900
- E) $1,060

**answer:** D
**fastest_path:** A 24% discount means paying 76% — about three quarters of about $1,200.
**explanation:** Estimate the quantity the question asks for: the price PAID, not the discount. Paying after a 24% discount means paying 76% of the sticker price.

Round to landmarks: 76% is about 75% (three quarters), and $1,184 is about $1,200. Three quarters of 1,200 is 900.

Track the lean: you rounded 76% down to 75% and $1,184 up to $1,200 — two small nudges in opposite directions, so the true value is very close to 900. (Exactly: 0.76 x 1,184 = 899.84.)

The correct answer is D.
**common_trap:** Computing the discount itself — 24% of $1,184 is about $284 — and snapping to choice A. The stem asks what the laptop costs on sale, not how much is saved.
**takeaway:** Round the numbers, never the question. The first move on any discount problem is deciding whether you are estimating the part paid or the part saved.
**hint_nudge:** If 24% comes off the price, what percent of the price do you actually hand over?
**related_reading:** quant-03-estimation

---

## Q5
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Six temperature readings, in degrees, are 142, 137, 151, 139, 146, and 149. The average (arithmetic mean) of the readings is closest to:

- A) 138
- B) 144
- C) 150
- D) 156
- E) 162

**answer:** B
**fastest_path:** Anchor at 145 and total the small deviations instead of summing six three-digit numbers.
**explanation:** Never sum raw three-digit values when the deviations are small. Anchor at a central guess — 145 — and track how far each reading sits from it:

142 is -3, 137 is -8, 151 is +6, 139 is -6, 146 is +1, 149 is +4.

The deviations total -6. Spread over six readings, that is -1 per reading, so the mean is 145 - 1 = 144. The anchor-and-nudge result is exact here, and at no point did you carry a sum near 900.

The correct answer is B.
**common_trap:** Adding 142 + 137 + 151 + 139 + 146 + 149 longhand and slipping a carry. The raw sum (864) is a four-digit-feeling computation; the deviation sum (-6) is single-digit arithmetic.
**takeaway:** To average clustered values, anchor at a central guess and sum the deviations — they partly cancel, keeping every number you touch small.
**hint_nudge:** All six readings sit close to 145. Work with the distances from 145, not the readings themselves.
**hint_strategy:** Sum the six deviations from 145, divide that total by 6, and adjust the anchor by the result.
**related_reading:** quant-03-estimation

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to 39,872 x 0.0212?

- A) 85
- B) 850
- C) 8,500
- D) 85,000
- E) 850,000

**answer:** B
**fastest_path:** Round to 40,000 x 0.02 and count the zeros carefully.
**explanation:** When the choices are spaced by factors of 10, the entire question is the order of magnitude — get the power of ten right and you are done.

Round to landmarks: 39,872 is about 40,000 and 0.0212 is about 0.02. Then 40,000 x 0.02 = 40,000 x 2 / 100 = 800.

Both roundings were slightly downward, so the true value sits a touch above 800 (it is 845.3). The only choice in that neighborhood is 850.

The correct answer is B.
**common_trap:** Misplacing the decimal while multiplying longhand and landing a factor of 10 off — exactly the error the choice ladder (85, 850, 8,500, ...) is built to catch. Estimating first makes the right power of ten known before any exact digits exist.
**takeaway:** Choices spaced by powers of 10 are an order-of-magnitude question in disguise. Round hard, count zeros, and skip the digit-level work entirely.
**related_reading:** quant-03-estimation

---

## Q7
**difficulty:** Easy
**type:** Problem Solving
**topic:** Estimation

A water tank that holds 4,920 liters when full is currently 63% full. Approximately how many liters of water are in the tank?

- A) 3,100
- B) 3,900
- C) 4,400
- D) 5,200
- E) 6,000

**answer:** A
**fastest_path:** Take "a bit more than 60%" of "a bit less than 5,000."
**explanation:** Round to landmarks: 63% is a bit more than 60%, and 4,920 is a bit less than 5,000. Then 60% of 5,000 is 3,000.

The two roundings lean against each other (one down, one up), so the true value sits near 3,000 — slightly above it, since the percent rounding (63 to 60) cut more than the capacity rounding added. The exact value is 3,099.6.

Only 3,100 is in the neighborhood; the next choice up is 800 liters away.

A sanity check kills three choices instantly: the tank is just over half full, so the answer must be just over half of 4,920 — anything at 4,400 or above is most of a full tank, and 5,200 and 6,000 exceed the tank itself.

The correct answer is A.
**common_trap:** Picking a choice larger than what the tank holds. Always run the "is this even possible?" check — 63% of a quantity can never exceed the quantity.
**takeaway:** Before estimating digits, bound the answer: a percent below 100 forces the result below the original. Impossibility checks are the cheapest eliminations on the test.
**related_reading:** quant-03-estimation

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to (7.93 x 31.2) / 0.122?

- A) 200
- B) 700
- C) 1,200
- D) 2,000
- E) 20,000

**answer:** D
**fastest_path:** Round to (8 x 31) / (1/8) — and dividing by one eighth multiplies by 8.
**explanation:** Round each factor to a landmark: 7.93 is about 8, 31.2 is about 31, and 0.122 is about 0.125 = 1/8.

The numerator is 8 x 31 = 248. Dividing by 1/8 multiplies by 8: 248 x 8 = 1,984, so the result lives near 2,000.

The roundings were tiny and mixed in direction, so the neighborhood is tight. (Exactly: 247.4 / 0.122 = 2,028.) The gap to the nearest competitor, 1,200, is far wider than any rounding error.

The correct answer is D.
**common_trap:** Treating 0.122 as "small, so it shrinks the result." Dividing by a number below 1 enlarges — the 200-ish trap comes from multiplying by 0.122 instead of dividing by it.
**takeaway:** Recognize landmark decimals on sight: 0.122 is 1/8 in disguise, so dividing by it is multiplying by 8. The fraction-decimal converter table works in both directions.
**hint_nudge:** What familiar fraction is 0.122 almost exactly equal to?
**related_reading:** quant-03-estimation

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Estimation

A car uses 7.8 liters of fuel per 100 kilometers. Approximately how many liters of fuel does it use on a 487-kilometer trip?

- A) 19
- B) 27
- C) 38
- D) 49
- E) 62

**answer:** C
**fastest_path:** Call it 8 liters per 100 km over about 5 hundred-kilometer blocks, then shave the overshoot.
**explanation:** The trip is 487 km — about 5 blocks of 100 km. At about 8 liters per block, that is 8 x 5 = 40 liters.

Track the lean: both roundings went up (7.8 to 8, and 487 to 500), so the true value sits below 40. The two candidates are 38 (just below) and 27 (far below); a quick size check settles it — the overshoot is small, a few percent on each factor, not a 30% gap. So the answer is just under 40.

(Exactly: 7.8 x 4.87 = 37.99.)

The correct answer is C.
**common_trap:** Estimating 8 x 5 = 40, seeing no choice that says 40, and second-guessing into a distant choice. Your estimate plus its known lean — "a bit under 40" — points at exactly one option.
**takeaway:** An estimate is a value plus a direction. When you round both factors up, the truth sits below your number; use that lean to pick between the nearest choices.
**hint_nudge:** How many 100-km blocks are in 487 km, roughly? What does each block cost in fuel?
**related_reading:** quant-03-estimation

---

## Q10
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation

Which of the following is closest to the square root of (3,980 x 2.46)?

- A) 31
- B) 99
- C) 313
- D) 990
- E) 3,130

**answer:** B
**fastest_path:** Inside the root, round to 4,000 x 2.5 = 10,000 — whose square root is 100.
**explanation:** Estimate inside the radical first. Round 3,980 to 4,000 and 2.46 to 2.5: the product is 4,000 x 2.5 = 10,000.

The square root of 10,000 is exactly 100, so the answer lives near 100. The roundings were both slightly upward, so the truth sits a shade below 100 — and 99 is right there. (Exactly: the product is 9,790.8 and its root is 98.9.)

The choice ladder is spaced by factors of about the square root of 10, precisely to punish a misplaced decimal inside the radical: 31 is the root of about 1,000, and 313 is the root of about 98,000.

The correct answer is B.
**common_trap:** Dropping or adding a zero inside the radical before taking the root. An error of 10x inside becomes an error of about 3.16x outside — which is exactly the spacing of the wrong choices.
**takeaway:** For roots of messy products, force the inside toward a perfect power (10,000, 1,000,000) with landmark rounding, take the root of the clean number, then lean in the direction your rounding dictates.
**hint_nudge:** Can you round the two factors so their product is a number whose square root you know exactly?
**hint_strategy:** 4,000 x 2.5 is a power of 10. Take its root, then ask which way your roundings pushed the true value.
**related_reading:** quant-03-estimation

---

## Q11
**difficulty:** Hard
**type:** Problem Solving
**topic:** Estimation

The value of 61.2% of 4,850 is closest to which of the following?

- A) 2,820
- B) 2,900
- C) 2,970
- D) 3,040
- E) 3,110

**answer:** C
**fastest_path:** Base estimate 60% of 4,850 = 2,910, then add the missing 1.2% — about 58 more.
**explanation:** Read the gaps first: the choices sit only about 70 apart, around 2.5% of their size. A coarse "about 60% of about 5,000" estimate has more error than that, so plain ballparking is illegal here. But you do not need longhand multiplication either — you need one refinement step.

Base estimate: 60% of 4,850 is 2,910. That alone is not the answer — it ignores 1.2 percentage points.

Correction: 1% of 4,850 is 48.5, so 1.2% is about 58. Add it: 2,910 + 58 = 2,968.

The closest choice is 2,970. (Exactly: 0.612 x 4,850 = 2,968.2 — the base-plus-correction method is essentially exact, because each piece was exact.)

The correct answer is C.
**common_trap:** Stopping at the base estimate of 2,910 and grabbing 2,900. When choices sit a few percent apart, the percentage points you rounded away are bigger than the gap between choices — the correction step is mandatory.
**takeaway:** Tight choices do not force longhand arithmetic; they force a finer estimate. Split an ugly percent into a landmark plus a correction (61.2% = 60% + 1.2%) and compute each piece exactly.
**hint_nudge:** The choices are close together — how fine does your estimate need to be before it can tell them apart?
**hint_strategy:** Compute 60% of 4,850 exactly, then compute 1.2% of 4,850 exactly, and add.
**related_reading:** quant-03-estimation
