---
section: Quant
topic: Rates and Work
---

## Q1
**difficulty:** Easy
**type:** Problem Solving
**topic:** Distance-Rate-Time

A cyclist rides at a constant speed of 18 km/h. How far will the cyclist travel in 40 minutes?

- A) 9 km
- B) 10 km
- C) 11 km
- D) 12 km
- E) 15 km

**answer:** D
**fastest_path:** Convert 40 min = 2/3 hr. D = 18 × 2/3 = 12 km.
**explanation:** D = RT only works when the time unit matches the rate's time unit. The speed is in km/h, so time must be in hours. 40 min = 40/60 = 2/3 hr. Distance = 18 × 2/3 = 12 km. Picture it: in 60 minutes you'd cover 18 km; in 40 minutes (two-thirds of an hour) you cover two-thirds of that.
**mistake_a:** Halved the rate to 9 with no justification — a sign of guessing when the unit conversion feels uncertain. The rate stays fixed; only the time gets converted.
**mistake_b:** Rounded 40 minutes to "about half an hour" and computed 18 × 0.5 = 9 (which leads to A, not B). B likely comes from using a wrong denominator — say 18 × (40/72) ≈ 10 — from an incorrect conversion base.
**mistake_c:** Computed 18 × 2/3 but treated 2/3 ≈ 0.6 rather than 0.667, giving 18 × 0.6 = 10.8 ≈ 11.
**mistake_e:** Used the fraction 5/6 instead of 2/3 — possibly mis-remembering "40 out of 48" rather than "40 out of 60" — giving 18 × 5/6 = 15.
**common_trap:** Using the time in minutes directly without converting to hours — the rate is per hour.
**takeaway:** D = RT requires *matching* time units. Always convert before multiplying.
**related_reading:** reading-quant-05-word-problems

---

## Q2
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combined Work

Pipe A can fill a tank in 6 hours and pipe B can fill the same tank in 4 hours. If both pipes are opened together, how long will it take to fill the tank?

- A) 1.6 hours
- B) 2 hours
- C) 2.4 hours
- D) 3 hours
- E) 5 hours

**answer:** C
**fastest_path:** 1/6 + 1/4 = 5/12 → T = 12/5 = 2.4 hr.
**explanation:** Think of each pipe as a fraction of the job per hour. Pipe A fills 1/6 per hour; Pipe B fills 1/4. Together: 1/6 + 1/4 = 2/12 + 3/12 = 5/12 per hour. Time = 1 ÷ (5/12) = 12/5 = 2.4 hr. Two-pipe shortcut: T = ab/(a+b) = (6×4)/(6+4) = 2.4. Note the answer must be less than either solo time — two pipes is always faster than one.
**mistake_a:** Applied the formula T = ab/(a+b) but used a wrong denominator — perhaps adding an extra term (e.g., 4+6+5=15) → 24/15 = 1.6. The denominator is simply a+b.
**mistake_b:** Computed 2.4 correctly but rounded to 2, the nearest whole number. The answer choices are close enough to make this tempting — but 2.4 is exact, and B (2 hours) is an actual choice designed for this error.
**mistake_d:** Took the difference of solo times: 6 − 4 = 2, then added 1 → 3. A sign of guessing by manipulating the given numbers, rather than using rates.
**mistake_e:** Averaged the solo times: (6+4)/2 = 5. The intuition feels geometric — "midpoint between 4 and 6" — but averaging times ignores that faster pipes do proportionally more work per hour. The combined time must be below the shorter solo time.
**common_trap:** Averaging or adding solo *times* instead of adding *rates*.
**takeaway:** For combined work: rates add, not times. T = ab/(a + b) when two workers have solo times a and b.
**related_reading:** reading-quant-05-word-problems

---

## Q3
**difficulty:** Easy
**type:** Problem Solving
**topic:** Distance-Rate-Time

A train travels 210 miles in 3.5 hours. What is its average speed in miles per hour?

- A) 55
- B) 58
- C) 60
- D) 65
- E) 70

**answer:** C
**fastest_path:** 210/3.5 = 60.
**explanation:** Rate = D/T = 210/3.5. The cleanest move: multiply top and bottom by 2 to clear the decimal: 420/7 = 60 mph. Alternatively, recognize 3.5 = 7/2, so 210 ÷ (7/2) = 210 × (2/7) = 60.
**mistake_a:** Rounded 3.5 up to 4 and computed 210/4 = 52.5, then rounded to 55. Rounding the time before dividing corrupts the result — always divide by the exact value.
**mistake_b:** Attempted 420/7 by trial and tested 7 × 58 = 406 ≈ 420, settling on 58. The exact check: 7 × 60 = 420 ✓ — try the round number first.
**mistake_d:** Mis-read 3.5 as 3.25 and computed 210/3.25 ≈ 64.6 ≈ 65. Or made a multiplication error partway through 420/7.
**mistake_e:** Dropped the 0.5 from 3.5 and computed 210/3 = 70. At 70 mph over 3 hours you'd only cover 210 miles — but the trip takes 3.5 hours, so the speed must be lower than 70.
**common_trap:** Rounding 3.5 hr to 3 hr and computing 210/3 = 70.
**takeaway:** R = D/T. Never round the time mid-computation. Clear decimals by multiplying numerator and denominator: 210/3.5 = 420/7 = 60.
**related_reading:** reading-quant-05-word-problems

---

## Q4
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combined Work

Maria can paint a room in 5 hours. John can paint the same room in 5 hours. Working together, how long will it take them?

- A) 2 hours
- B) 2.5 hours
- C) 3 hours
- D) 5 hours
- E) 10 hours

**answer:** B
**fastest_path:** Equal solo times t → together t/2 = 2.5 hr.
**explanation:** Each painter works at rate 1/5 room per hour. Together: 1/5 + 1/5 = 2/5 per hour → T = 5/2 = 2.5 hr. The pattern generalizes: two identical workers always halve the solo time; n identical workers complete the job in t/n hours.
**mistake_a:** Recognized that two workers roughly halve the time and rounded 2.5 down to 2. But 2.5 is exact, not an approximation — don't round a clean fraction to fit a whole number.
**mistake_c:** May have computed 1/5 + 1/5 = 2/5 correctly but then inverted incorrectly (5/2 → 3 somehow) or confused the remaining fraction with the total time.
**mistake_d:** Copied the solo time directly without reducing for the second worker — forgetting that working together always shortens the time.
**mistake_e:** Added the solo times: 5 + 5 = 10. This treats the two workers as if they complete the job sequentially rather than simultaneously. Working together compresses time; it never extends it.
**common_trap:** Adding or averaging solo times instead of adding rates.
**takeaway:** Identical workers: doubling halves the time. n identical workers → t/n. Rates add; times do not.
**related_reading:** reading-quant-05-word-problems

---

## Q5
**difficulty:** Easy
**type:** Problem Solving
**topic:** Two Objects Moving

Two cars start from the same point and drive in opposite directions. One drives at 50 km/h and the other at 70 km/h. After how many hours will they be 360 km apart?

- A) 2
- B) 2.5
- C) 3
- D) 3.5
- E) 4

**answer:** C
**fastest_path:** Closing rate = 50 + 70 = 120 km/h. T = 360/120 = 3.
**explanation:** When two objects move in opposite directions from the same point, the gap between them grows at the combined rate: 50 + 70 = 120 km/h. Time = 360/120 = 3 hr.
**mistake_a:** Averaged the two speeds to get 60 km/h and computed 360/60 = 6, then divided by 3 for an unclear reason to reach 2. Averaging speeds is only valid in specific equal-time scenarios — it doesn't apply here at all.
**mistake_b:** Found the correct closing rate (120) but mis-computed 360/120, perhaps treating it as 360/144 = 2.5, from a multiplication error in finding the common denominator.
**mistake_d:** Computed the correct time (3 hr) but added 0.5 somewhere — perhaps confusing themselves about when the gap starts accumulating.
**mistake_e:** Used the difference 70 − 50 = 20 as the "closing rate" — the rule for same-direction catch-up problems — and computed 360/20 = 18, then divided further to get near 4. The difference rule is for same-direction; opposite-direction always uses the sum.
**common_trap:** Confusing closing rate with average speed, or using the difference (which is for same-direction catch-up).
**takeaway:** Opposite directions → closing rate = *sum*. Same direction → closing rate = *difference*.
**related_reading:** reading-quant-05-word-problems

---

## Q6
**difficulty:** Easy
**type:** Problem Solving
**topic:** Two Objects Moving

Tom leaves home jogging at 6 km/h. Thirty minutes later, his sister leaves the same point walking at 4 km/h in the opposite direction. How far apart are they 1 hour after Tom left home?

- A) 4 km
- B) 5 km
- C) 6 km
- D) 8 km
- E) 10 km

**answer:** D
**fastest_path:** Tom: 1 hr × 6 = 6 km. Sister: 0.5 hr × 4 = 2 km. Total = 8.
**explanation:** Tom has been moving for the full 1 hour: 6 × 1 = 6 km. His sister left 30 minutes later, so she has only been moving for 0.5 hr: 4 × 0.5 = 2 km. They go in opposite directions, so the distances add: 6 + 2 = 8 km.
**mistake_a:** Only computed the sister's distance (4 km) and selected that — completely omitting Tom's contribution.
**mistake_b:** Added the sister's half-hour distance (2 km) to some rough estimate for Tom (3 km) and landed on 5. The confusion comes from not computing Tom's full 1-hour distance precisely.
**mistake_c:** Only computed Tom's distance (6 km) and selected that — omitting the sister entirely.
**mistake_e:** Gave the sister a full hour of travel: 6 + 4 = 10. This is the most common error — the 30-minute delay is easy to overlook, especially when the question asks about "1 hour after Tom left," which sounds like "both have traveled 1 hour."
**common_trap:** Forgetting the time offset — the sister has only 0.5 hr of travel, not 1 hr.
**takeaway:** With staggered starts, assign each person their own elapsed time before computing distances. The clock in the question measures from one person's start, not both.
**related_reading:** reading-quant-05-word-problems

---

## Q7
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Rate / Harmonic Mean

A driver travels from town X to town Y at 40 km/h and returns along the same road at 60 km/h. What is the average speed for the entire round trip?

- A) 46 km/h
- B) 48 km/h
- C) 50 km/h
- D) 52 km/h
- E) 55 km/h

**answer:** B
**fastest_path:** Equal distances → harmonic mean: 2(40)(60)/(40 + 60) = 4800/100 = 48.
**explanation:** Equal-distance round trip → harmonic mean: 2ab/(a + b) = 2·40·60/100 = 48 km/h. The number-pick method works just as well: let d = 120 km each way. Out at 40 km/h: 3 hr. Back at 60 km/h: 2 hr. Avg = 240 total km / 5 total hr = 48. The answer always falls below the arithmetic mean because the slow leg consumes more time and therefore carries more weight.
**mistake_a:** Attempted to weight the speeds by time or distance but estimated incorrectly, landing near 46. The formula 2ab/(a+b) removes any estimation.
**mistake_c:** Averaged the two speeds directly: (40+60)/2 = 50. This is the single most common wrong answer on harmonic-mean problems. It would be correct only if both legs took the same amount of time — which they don't when distances are equal and speeds differ.
**mistake_d:** Computed the harmonic mean but made an arithmetic error, landing near 52 instead of 48.
**mistake_e:** Guessed above the arithmetic mean — but the true average speed for equal-distance, different-speed trips is always below the arithmetic mean.
**common_trap:** Averaging speeds directly (50). Equal *distances* at different speeds means more time on the slow leg, pulling the average down toward 40.
**takeaway:** Equal distance → harmonic mean 2ab/(a+b). Equal time → arithmetic mean. The answer is always closer to the slower speed.
**related_reading:** reading-quant-05-word-problems

---

## Q8
**difficulty:** Medium
**type:** Problem Solving
**topic:** Two Objects Moving

A freight train leaves station P at 8:00 AM traveling east at 45 mph. A passenger train leaves the same station at 10:00 AM traveling east at 65 mph. At what time does the passenger train catch the freight train?

- A) 2:30 PM
- B) 4:00 PM
- C) 4:30 PM
- D) 5:30 PM
- E) 6:00 PM

**answer:** A
**fastest_path:** At 10 AM, freight is 2·45 = 90 mi ahead. Closing rate = 65 − 45 = 20 mph. T = 90/20 = 4.5 hr after 10 AM = 2:30 PM.
**explanation:** Same direction → catch-up problem. By 10:00 AM, the freight train has had a 2-hour head start: 2 × 45 = 90 miles ahead. The passenger train closes this gap at 65 − 45 = 20 mph. Time to close 90 mi at 20 mph = 4.5 hr after 10 AM → 2:30 PM.
**mistake_b:** Computed the head start as 2 × 65 = 130 (used the wrong train's speed) → 130/20 = 6.5 hr → too late, or used 60 mi as the head start → 60/20 = 3 hr → 1:00 PM, then adjusted. The head start distance comes from the freight train's speed, not the passenger's.
**mistake_c:** Correctly computed 90/20 = 4.5 hr but added 4.5 to 8:00 AM (freight's departure) instead of 10:00 AM (passenger's departure) → 12:30 PM, or made a half-hour arithmetic error in converting 10:00 + 4.5 hr.
**mistake_d:** Used the sum of speeds (65 + 45 = 110) as the closing rate — the rule for opposite-direction problems — and computed 90/110 ≈ 0.82 hr, then back-calculated to 5:30 PM via a confused setup.
**mistake_e:** Used both the sum of speeds (110) and the wrong head start, compounding errors to land at 6:00 PM.
**common_trap:** Using the sum of speeds (110) for a same-direction catch-up problem. Sum applies when objects move toward each other; difference applies when they move in the same direction.
**takeaway:** Catch-up (same direction) → closing rate = *difference*. Approach (opposite directions) → closing rate = *sum*. The head start distance uses the slower (earlier) object's speed, not the faster one's.
**related_reading:** reading-quant-05-word-problems

---

## Q9
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combined Work

Three identical pumps working together can drain a pool in 4 hours. How long would it take 5 such pumps to drain the pool?

- A) 2 hours
- B) 2 hours 24 minutes
- C) 2 hours 40 minutes
- D) 3 hours
- E) 3 hours 20 minutes

**answer:** B
**fastest_path:** Total work = 3·4 = 12 pump-hours. T = 12/5 = 2.4 hr = 2h 24m.
**explanation:** Model the total job as "pump-hours" — the product of workers × time. With 3 pumps and 4 hours: 3 × 4 = 12 pump-hours total. With 5 pumps: T = 12/5 = 2.4 hr. Convert the decimal: 0.4 × 60 = 24 min → 2h 24m. The key insight: more pumps means less time — they are inversely proportional with the same total pump-hours.
**mistake_a:** Divided by 6 instead of 5: 12/6 = 2. Perhaps added pumps as 3+3=6 or confused the original 3 pumps with the new 5 pumps.
**mistake_c:** Computed 12/5 = 2.4 correctly but converted 0.4 hr as 40 minutes — treating the decimal directly as minutes. The decimal portion of an hour must be multiplied by 60: 0.4 × 60 = 24, not 40.
**mistake_d:** Divided by the original number of pumps (3) instead of the new number (5): 12/4 = 3. Forgot to update the denominator when the team size changed.
**mistake_e:** Used 12/3.6 ≈ 3.33 hr = 3h 20m — perhaps dividing by 3.6 from a confused formula or treating the time difference (5−3=2, then 3+0.6=3.6) as the divisor.
**common_trap:** Converting 0.4 hr as 40 minutes is the most common error here. Decimals of hours are not decimals of minutes.
**takeaway:** Workers × time = constant total work. More workers → less time (inversely proportional). When converting decimal hours to minutes, multiply the decimal by 60 — never read it directly as minutes.
**related_reading:** reading-quant-05-word-problems

---

## Q10
**difficulty:** Medium
**type:** Problem Solving
**topic:** Distance-Rate-Time

A commuter drives 60 miles to work. If she increases her usual speed by 10 mph, she arrives 18 minutes earlier. What is her usual speed in mph?

- A) 30
- B) 35
- C) 40
- D) 45
- E) 50

**answer:** C
**fastest_path:** Test r = 40: 60/40 − 60/50 = 1.5 − 1.2 = 0.3 hr = 18 min ✓.
**explanation:** Set 60/r − 60/(r+10) = 18/60 = 3/10. Multiply through by 10r(r+10): 600(r+10) − 600r = 3r(r+10) → 6000 = 3r² + 30r → r² + 10r − 2000 = 0 → (r − 40)(r + 50) = 0 → r = 40. Verify: 60/40 − 60/50 = 1.5 − 1.2 = 0.3 hr ✓.
**mistake_a:** Test r = 30: 2 − 1.5 = 0.5 hr = 30 min, not 18.
**mistake_b:** Test r = 35: 60/35 − 60/45 ≈ 0.38 hr = 22.9 min, not 18.
**mistake_d:** Test r = 45: 60/45 − 60/55 ≈ 0.24 hr = 14.5 min, not 18.
**mistake_e:** Test r = 50: 1.2 − 1 = 0.2 hr = 12 min, not 18.
**common_trap:** Setting up the equation correctly but mis-solving the quadratic, or backsolving without verifying time savings.
**takeaway:** When given two scenarios with a time gap, set up the difference equation T₁ − T₂ = ΔT. Backsolve from the answer choices is faster than the quadratic.
**related_reading:** reading-quant-05-word-problems

---

## Q11
**difficulty:** Medium
**type:** Problem Solving
**topic:** Two Objects Moving

Two friends live 48 km apart. They start biking toward each other at the same time — one at 14 km/h and the other at 10 km/h. How long until they meet?

- A) 1 hour 30 minutes
- B) 1 hour 45 minutes
- C) 2 hours
- D) 2 hours 15 minutes
- E) 2 hours 30 minutes

**answer:** C
**fastest_path:** Closing rate = 14 + 10 = 24 km/h. T = 48/24 = 2 hr.
**explanation:** When two objects move toward each other, the gap shrinks at the combined rate. Closing rate = 14 + 10 = 24 km/h. Time to meet = 48/24 = 2 hr.
**mistake_a:** Subtracted the speeds (14 − 10 = 4 km/h) and computed 48/4 = 12 hr, then divided by 8 to get 1.5 hr — or used 4 as the closing rate directly, then over-corrected. The difference rule is for same-direction catch-up; for toward-each-other, always add.
**mistake_b:** Computed the closing rate correctly (24) but made an arithmetic slip computing 48/24, perhaps getting 1.75 hr = 1h 45m instead of 2 hr.
**mistake_d:** Computed 48/24 = 2 correctly but then added 15 minutes for an unclear reason — perhaps from confusing the meeting time with a departure offset.
**mistake_e:** Averaged the two speeds: (14+10)/2 = 12, computed 48/12 = 4 hr, then halved to get 2h 30m (reasoning "each travels half the time"). Averaging speeds is invalid here; the closing rate is the sum.
**common_trap:** Averaging speeds (12) instead of summing them for the closing rate (24).
**takeaway:** Toward each other → closing rate = *sum*. Time to meet = gap / closing rate. Never average — always add.
**related_reading:** reading-quant-05-word-problems

---

## Q12
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combined Work

Worker A can complete a job in 12 hours. When A and B work together, they finish the same job in 8 hours. How long would B take working alone?

- A) 16 hours
- B) 20 hours
- C) 24 hours
- D) 30 hours
- E) 36 hours

**answer:** C
**fastest_path:** 1/12 + 1/b = 1/8 → 1/b = 1/8 − 1/12 = 1/24 → b = 24.
**explanation:** Isolate B's rate: 1/b = 1/T − 1/a = 1/8 − 1/12. Common denominator 24: 3/24 − 2/24 = 1/24 → b = 24 hr. B takes longer than the combined time (8 hr) but less than double it — a sanity check worth running.
**mistake_a:** Made an arithmetic error in the fraction subtraction 1/8 − 1/12, perhaps computing the LCM as 16 instead of 24, giving 2/16 − 1/16 = 1/16 → b = 16. Always verify: does 1/12 + 1/16 = 1/8? (7/48 ≠ 1/8.) Plug back in.
**mistake_b:** Added the two known times: 12 + 8 = 20. This treats the relationship as additive, which it is not. You cannot recover B's solo time by adding or subtracting known times; only rate subtraction works.
**mistake_d:** Another fraction-subtraction error. Verify: 1/12 + 1/30 = 5/60 + 2/60 = 7/60 ≠ 1/8 = 7.5/60.
**mistake_e:** Used the product formula (ab/(a+b)) and plugged in the wrong values — perhaps 12 × 8/(12−8) = 96/4 = 24... actually that gives 24, so E=36 comes from a mis-application like 12 × 8/(12+8−16) or similar confused arithmetic.
**common_trap:** Treating times additively. b ≠ A + T or A − T; only rates compose linearly.
**takeaway:** Work problems combine in *rate* space, never in time space. To find one solo time: 1/b = 1/T − 1/a. Then verify by plugging back in.
**related_reading:** reading-quant-05-word-problems

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Rate / Harmonic Mean

Anna drives the first 100 miles of a trip at 50 mph and the last 150 miles at 75 mph. What is her average speed for the entire trip?

- A) 60 mph
- B) 62.5 mph
- C) 65 mph
- D) 66.67 mph
- E) 70 mph

**answer:** B
**fastest_path:** t₁ = 100/50 = 2 hr, t₂ = 150/75 = 2 hr. Total: 250/4 = 62.5.
**explanation:** Distances differ (100 mi vs. 150 mi), so the harmonic mean formula doesn't apply. Use the definition: total distance / total time. t₁ = 100/50 = 2 hr, t₂ = 150/75 = 2 hr. Total: 250 mi in 4 hr → 62.5 mph. Notice that both legs take equal time — this is a coincidence, not a rule.
**mistake_a:** Averaged the two speeds: (50+75)/2 = 62.5... wait, that actually gives the right answer here by coincidence. Arriving at 60 instead likely means computing (50+75)/2 = 62.5 but rounding down, or taking a weighted average with wrong weights (distance-weighted: (100×50 + 150×75)/250 = 62.5 is exact... so A=60 likely comes from some other approximation, like estimating 250/4 ≈ 60 rather than computing exactly).
**mistake_c:** Computed the total time as 250/something → ~3.85 hr and divided: 250/3.85 ≈ 65. A common source: computing t₂ = 150/70 ≈ 2.14 instead of 150/75 = 2.
**mistake_d:** Computed the total time as 3.75 hr (perhaps 100/50 + 150/80 or 100/50 + 150/75 − 0.25) → 250/3.75 = 66.67.
**mistake_e:** Applied the harmonic mean formula 2ab/(a+b) = 2(50)(75)/125 = 60 — wrong, because the legs have unequal distance. Or simply guessed the arithmetic mean (50+75)/2 = 62.5 and rounded to 70.
**common_trap:** Applying the harmonic mean formula when distances are unequal. The harmonic mean only works for equal-distance legs.
**takeaway:** Average speed = total distance / total time, always. Shortcut formulas (harmonic mean) only apply under specific equal-distance conditions — use the long form when in doubt.
**related_reading:** reading-quant-05-word-problems

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Work with Different Rates

Alex starts painting a fence alone at a rate that would finish the job in 10 hours. After 4 hours, Beth joins him and together they finish the remaining work in 3 hours. How long would Beth take to paint the fence alone?

- A) 5 hours
- B) 6 hours
- C) 7.5 hours
- D) 10 hours
- E) 15 hours

**answer:** D
**fastest_path:** Alex 4 hr → 4/10 = 2/5 done. Remaining 3/5 in 3 hr → joint rate 1/5/hr. So 1/10 + 1/b = 1/5 → b = 10.
**explanation:** Phase 1: Alex alone for 4 hr → completes 4/10 = 2/5 of the job. Phase 2: 3/5 remains, finished in 3 hr (joint). Joint rate = (3/5)/3 = 1/5 per hour. Then 1/10 + 1/b = 1/5 → 1/b = 1/5 − 1/10 = 1/10 → b = 10 hr.
**mistake_a:** Skipped computing Alex's solo contribution and divided the total job by total time somehow, arriving near 5. This collapses the two-phase structure into a single rate — it ignores that Alex worked alone first.
**mistake_b:** Made an arithmetic error computing 1/5 − 1/10 = 1/10, perhaps getting 2/10 → b = 5... or applied the formula with wrong numbers and landed near b = 6. Verify: 1/10 + 1/6 = 8/30 ≠ 1/5.
**mistake_c:** Computed the remaining work incorrectly — perhaps computing 4 hr × (1/10) as 4/10 ≈ 1/3 (rounding down), leaving 2/3 remaining; 2/3 ÷ (1/3 per hr) → 2 hr for joint phase, then applying wrong formula → 7.5.
**mistake_e:** Found the joint rate correctly (1/5 per hr) but set up the equation as 1/10 × 1/b = 1/5 (multiplied instead of added), or set 1/b = 1/5 × 1/10 → b = 50 and selected nearest choice 15.
**common_trap:** Jumping straight to rate arithmetic without first finding how much work Phase 1 completed.
**takeaway:** Multi-phase work: track fraction completed in each phase, then use the remaining fraction and the phase's rate to find unknowns.
**related_reading:** reading-quant-05-word-problems

---

## Q15
**difficulty:** Hard
**type:** Problem Solving
**topic:** Two Objects Moving

A boat travels 24 km downstream in 2 hours and returns upstream over the same distance in 3 hours. What is the speed of the boat in still water?

- A) 8 km/h
- B) 9 km/h
- C) 10 km/h
- D) 11 km/h
- E) 12 km/h

**answer:** C
**fastest_path:** Down: b + c = 24/2 = 12. Up: b − c = 24/3 = 8. Add: 2b = 20 → b = 10.
**explanation:** Let b = still-water boat speed, c = current speed. Downstream, the current helps: effective speed = b + c = 24/2 = 12. Upstream, the current resists: effective speed = b − c = 24/3 = 8. Add the two equations: 2b = 20 → b = 10 km/h. The current: c = 12 − 10 = 2 km/h.
**mistake_a:** Selected the upstream effective speed (8 km/h) as the still-water speed — forgetting that 8 already bakes in the current's drag. The still-water speed must be between the two effective speeds.
**mistake_b:** Computed (12 + 8)/2 = 10 correctly but made an arithmetic error: perhaps averaging (12 + 8)/2 as 9 instead of 10, or solving 2b = 18 from an arithmetic slip.
**mistake_d:** Made a symmetric slip in the other direction: computed 2b = 22 → b = 11, possibly by mis-computing one of the effective speeds.
**mistake_e:** Selected the downstream effective speed (12 km/h) as the still-water speed — the opposite error to A. The current adds speed downstream, so 12 overstates the boat's inherent speed.
**common_trap:** Confusing either effective speed (8 or 12) with the still-water speed. The still-water speed is the average of the two: (12 + 8)/2 = 10.
**takeaway:** Boat-with-current: downstream = b + c, upstream = b − c. Still water = average of the two effective speeds. Current = half their difference.
**related_reading:** reading-quant-05-word-problems

---

## Q16
**difficulty:** Hard
**type:** Problem Solving
**topic:** Work with Different Rates

Pipe X can fill a tank in 6 hours and pipe Y can fill it in 9 hours. Pipe X is opened first; 2 hours later Y is also opened. How long in total does it take from the moment X was first opened until the tank is full?

- A) 3.6 hours
- B) 4 hours
- C) 4.4 hours
- D) 4.8 hours
- E) 5.2 hours

**answer:** C
**fastest_path:** X solo 2 hr → 1/3 done. Combined rate = 1/6 + 1/9 = 5/18. Remaining 2/3 takes (2/3)/(5/18) = 12/5 = 2.4 hr. Total = 2 + 2.4 = 4.4 hr.
**explanation:** Phase 1 — X alone for 2 hr: fills 2/6 = 1/3. Phase 2 — both pipes together: 2/3 remaining at combined rate 1/6 + 1/9 = 5/18 per hr. Time = (2/3) ÷ (5/18) = (2/3)(18/5) = 12/5 = 2.4 hr. Total from when X opened = 2 + 2.4 = 4.4 hr.
**mistake_a:** Ignored X's solo phase entirely and computed how long both pipes together would take from the start: 1 / (5/18) = 18/5 = 3.6 hr. That's correct if both start simultaneously — but X had a 2-hour solo phase, so the true answer must be larger than 3.6.
**mistake_b:** Rounded the exact answer (4.4) down to 4, possibly computing 2 + 2 = 4 by approximating 2.4 ≈ 2. Always keep the exact fractional time.
**mistake_d:** Made an arithmetic error in (2/3) ÷ (5/18) — perhaps computing (2/3) × (5/18) = 10/54 ≈ 0.19 instead of multiplying by the reciprocal (18/5), then working backward to 4.8.
**mistake_e:** Another arithmetic slip in the remaining-work phase, possibly computing the combined rate as 1/6 + 1/9 = 5/15 = 1/3 (wrong addition) → remaining time 2/3 ÷ 1/3 = 2 hr → total 4 hr, then adding another slip → 5.2.
**common_trap:** Ignoring X's solo head start and computing as if both pipes ran from time zero.
**takeaway:** Staggered openings → segment into phases. Track what each phase fills, then sum the phase times. The total time is always larger than the all-together time.
**related_reading:** reading-quant-05-word-problems

---

## Q17
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Distance-Rate-Time

A car traveled from city M to city N. What was its average speed for the trip?

(1) The distance from M to N is 180 miles.
(2) The trip took 20 minutes less than it would have at 45 mph.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**fastest_path:** (1) distance only. (2) relative time only. Together: at 45, time = 4 hr; actual = 11/3 hr; speed = 540/11.
**explanation:** Statement (1): distance only, no time → insufficient. Statement (2): relative time savings with no distance anchor → insufficient. Together: at 45 mph, time would be 180/45 = 4 hr. Actual = 4 − 1/3 = 11/3 hr → avg speed = 180/(11/3) = 540/11 mph (single value). Sufficient.
**mistake_a:** Treated only (1) as sufficient — distance alone doesn't give speed.
**mistake_b:** Treated only (2) as sufficient — no anchor for distance.
**mistake_d:** Each alone — neither is.
**mistake_e:** Concluded both insufficient — but they combine.
**common_trap:** Forgetting that average speed needs distance *and* time. (1) gives distance; (2) gives a way to compute time *if* distance is known.
**takeaway:** Speed = distance / time. DS for speed needs both pieces — or one piece plus an anchor that makes the other computable.
**related_reading:** reading-quant-05-word-problems

---

## Q18
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Combined Work

Two workers, P and Q, together complete a job. How many hours did they work together?

(1) Working alone, P takes 10 hours and Q takes 15 hours to complete the job.
(2) The job required 6 worker-hours of total effort from P and Q combined.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1): 1/10 + 1/15 = 1/6 → joint time = 6 hr. Sufficient. (2): worker-hours sum doesn't fix elapsed clock time.
**explanation:** Statement (1): joint rate = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 → together 6 hr. Sufficient. Statement (2): "6 worker-hours" sums effort from P and Q but doesn't fix elapsed clock time without the rate split. Insufficient. Answer: A.
**mistake_b:** Treated (2) as sufficient.
**mistake_c:** Required both — (1) alone resolves.
**mistake_d:** Treated each as sufficient.
**mistake_e:** Concluded both insufficient — (1) is.
**common_trap:** Confusing "worker-hours" (total effort) with "clock-hours" (elapsed time). Worker-hours sums contributions; clock-time is determined by combined rate.
**takeaway:** Worker-hours = effort = (#workers × time). Elapsed time needs the combined rate equation.
**related_reading:** reading-quant-05-word-problems

---

## Q19
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combined-Then-Solo Work Rates

Pump A fills a tank in 6 hours. Pump B fills the same tank in 9 hours. Both pumps work together for 2 hours, and then Pump A stops. How long after that does Pump B take to finish the tank?

- A) 3 hours
- B) 3.5 hours
- C) 4 hours
- D) 4.5 hours
- E) 5 hours

**answer:** C
**fastest_path:** Joint 2 hr at rate 5/18 → 5/9 done. Remaining 4/9 by B alone (1/9/hr) → 4 hr.
**explanation:** Phase 1 — A and B together for 2 hr: combined rate = 1/6 + 1/9 = 5/18. Work done = 2 × 5/18 = 10/18 = 5/9. Remaining = 1 − 5/9 = 4/9. Phase 2 — B alone at 1/9 per hr: time = (4/9) ÷ (1/9) = 4 hr.
**mistake_a:** Computed 5/9 done after the joint phase and then estimated that 4/9 at rate 1/9 is "about 3" — probably by treating 4/9 ÷ 1/9 as 4/9 × 9 ≈ 3 from a mental math error. The exact division: (4/9)/(1/9) = 4.
**mistake_b:** Used the combined rate (5/18) for B's solo phase instead of B's individual rate (1/9): (4/9) ÷ (5/18) = (4/9)(18/5) = 72/45 = 1.6 hr... which doesn't give 3.5. More likely: used 1/6 (A's rate) for B's phase → (4/9)/(1/6) = 24/9 ≈ 2.67, or made a different substitution leading to 3.5.
**mistake_d:** Made a small arithmetic error computing 4/9 ÷ 1/9: got 4.5 instead of 4, perhaps by miscalculating the remaining work as 1/2 instead of 4/9.
**mistake_e:** Computed the remaining fraction as 1/2 (rounding 5/9 down to 1/2) and used B's rate: (1/2)/(1/9) = 4.5, or computed 5/9 done and subtracted from 1 to get 4/9 but made a slip that produced 5/9 remaining → time = 5.
**common_trap:** Carrying the combined rate (5/18) into Phase 2 instead of switching to B's solo rate (1/9) after A leaves.
**takeaway:** When team composition changes, switch rates immediately. Phase 1 rate ≠ Phase 2 rate once a worker leaves.
**related_reading:** reading-quant-05-word-problems

---

## Q20
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Joint-and-Solo Rate Equations

Working alone, Alex can complete a project in h hours; working alone, Ben can complete the same project in k hours. Alex and Ben work together for exactly 3 hours, then Alex leaves and Ben works alone for 2 more hours to finish the project. What is the value of h?

(1) k = 2h.
(2) 1/h + 1/k = 1/4.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Stem: 3(1/h + 1/k) + 2/k = 1 → 3/h + 5/k = 1. (1) k = 2h → 11/(2h) = 1 → h = 5.5. (2) Combined with stem → linear system → unique h.
**explanation:** From scenario: 3(1/h + 1/k) + 2/k = 1, simplifying to 3/h + 5/k = 1. Statement (1) k = 2h: 3/h + 5/(2h) = 11/(2h) = 1 → h = 5.5. Sufficient. Statement (2) 1/h + 1/k = 1/4: combined with 3/h + 5/k = 1 gives two linear equations in (1/h, 1/k) → unique solution h = k = 8. Sufficient. Each alone → D.
**mistake_a:** Treated only (1) as sufficient.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both.
**mistake_e:** Concluded both insufficient.
**common_trap:** Assuming a relative-ratio statement (k = 2h) alone can't pin down a scalar — but combined with the scenario equation, it can.
**takeaway:** Two linear equations in two unknowns (1/h, 1/k) → unique solution. The scenario itself is one equation; each DS statement adds another.
**related_reading:** reading-quant-05-word-problems

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Speed — Round Trip

A driver travels from town A to town B at an average speed of 60 miles per hour, and returns along the same route at an average speed of 40 miles per hour. What is the driver's average speed for the entire round trip?

- A) 44 mph
- B) 46 mph
- C) 48 mph
- D) 50 mph
- E) 52 mph

**answer:** C
**fastest_path:** Equal distances → harmonic mean: 2(60)(40)/(60 + 40) = 4800/100 = 48.
**explanation:** Average speed = total distance / total time, always. Pick d = 120 miles each way. Out at 60 mph: 2 hr. Back at 40 mph: 3 hr. Total: 240 mi / 5 hr = 48 mph. The formula 2ab/(a+b) reaches the same answer in one step. Why isn't it 50? Because the slow leg (40 mph) eats 3 of the 5 total hours while the fast leg only uses 2. The slow speed is time-weighted more heavily, so the true average is pulled toward 40.
**mistake_a:** Attempted to weight the average by something other than time — perhaps distance × speed, which doesn't give average speed — and landed at 44.
**mistake_b:** Applied the harmonic mean formula correctly but made an arithmetic error: 4800/100 = 48, not 46.
**mistake_d:** Computed the arithmetic mean: (60+40)/2 = 50. This is the answer 50% of test-takers choose, and it would be correct only if both legs took the same time. They don't: the slow leg takes 50% more time than the fast leg.
**mistake_e:** Guessed above 50 — but the harmonic mean is always strictly below the arithmetic mean for unequal positive speeds. Any answer above 50 is impossible here.
**common_trap:** Averaging speeds directly to get 50. The slow leg dominates time, not distance, so 40 mph gets more weight than 60 mph.
**takeaway:** When the two legs cover equal distance at unequal speeds: average speed = 2ab/(a+b), which is always below (a+b)/2. If time were equal instead of distance, the arithmetic mean would apply — so always identify what's equal first.
**related_reading:** reading-quant-05-word-problems

---

## Q22
**difficulty:** Hard
**type:** Problem Solving
**topic:** Rates — Two Trains, Closing Speed

Two trains leave stations that are 450 miles apart, traveling toward each other along parallel tracks. Train A travels at 60 miles per hour and Train B travels at 75 miles per hour. They depart at the same time. How many miles from Train A's station will they meet?

- A) 180
- B) 200
- C) 210
- D) 225
- E) 250

**answer:** B
**fastest_path:** Closing rate = 60 + 75 = 135. T = 450/135 = 10/3 hr. A's distance = 60 · 10/3 = 200.
**explanation:** Closing rate = 60 + 75 = 135 mph. Time to meet = 450/135 = 10/3 hr. Train A's distance from its station = 60 × 10/3 = 200 mi. Equivalently, A covers 60/(60+75) = 4/9 of 450 = 200 mi directly.
**mistake_a:** Made an arithmetic error computing 60 × 10/3 — perhaps getting 600/3.5 = 171 ≈ 180, or using a slightly wrong meeting time.
**mistake_c:** Made a similar arithmetic slip, getting 60 × 10/3 ≈ 210. The exact value: 60 × 10 = 600, 600/3 = 200.
**mistake_d:** Split the 450 miles evenly: 450/2 = 225. This would only be correct if both trains traveled at the same speed. The faster train (B at 75 mph) covers more ground, so A's share is less than half.
**mistake_e:** Correctly computed the meeting time (10/3 hr) but multiplied by Train B's speed instead of Train A's: 75 × 10/3 = 250. B's distance is the complementary answer — if you get 250 and 200 is a choice, you've computed the wrong train's distance.
**common_trap:** Splitting evenly (225) or computing the other train's distance (250). Always re-read which train's distance the question asks for.
**takeaway:** Meeting distances split in proportion to speeds: A covers vA/(vA+vB) × total distance. Faster train → larger share. Verify: your answer plus the other train's distance must sum to 450.
**related_reading:** reading-quant-05-word-problems

---

## Q23
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Combined Rates

Machines X and Y operate at constant rates. Working together, they complete a job in 4 hours. How long would machine X alone take to complete the job?

(1) Machine Y alone would take twice as long as machine X alone to complete the job.
(2) Machine X alone would complete the job in 6 hours.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** Stem: 1/x + 1/y = 1/4. (1) y = 2x → 3/(2x) = 1/4 → x = 6. (2) x = 6 directly.
**explanation:** Stem gives 1/x + 1/y = 1/4. Statement (1): y = 2x → 1/x + 1/(2x) = 3/(2x) = 1/4 → x = 6. Sufficient. Statement (2): x = 6 directly. Sufficient. Each alone → D.
**mistake_a:** Treated only (1) as sufficient.
**mistake_b:** Treated only (2) as sufficient.
**mistake_c:** Required both — neither needs the other.
**mistake_e:** Concluded both insufficient.
**common_trap:** Assuming (2) is incomplete because it doesn't mention y — but the stem already gives the joint equation, so x alone is enough.
**takeaway:** Always check what the stem already constrains. A direct value for the asked quantity is always sufficient.
**related_reading:** reading-quant-05-word-problems

---

## Q24
**difficulty:** Hard
**type:** Problem Solving
**topic:** Work Rates — Back-Solving One Solo Time

Alex and Ben, working together, complete a job in 6 hours. Alex working alone would complete the same job in 10 hours. How long would Ben take working alone?

- A) 4 hours
- B) 8 hours
- C) 12 hours
- D) 15 hours
- E) 16 hours

**answer:** D
**fastest_path:** 1/10 + 1/b = 1/6 → 1/b = 1/6 − 1/10 = 1/15 → b = 15.
**explanation:** Isolate Ben's rate: 1/b = 1/6 − 1/10. Common denominator 30: 5/30 − 3/30 = 2/30 = 1/15 → b = 15 hr. Sanity check: Ben (15 hr) is slower than Alex (10 hr), and together they finish in 6 hr — both make sense.
**mistake_a:** Subtracted times instead of rates: 10 − 6 = 4 → b = 4. Time subtraction has no valid interpretation in work problems. If Ben were that fast (4 hr solo), together they'd finish in 10×4/(10+4) ≈ 2.86 hr, not 6 hr.
**mistake_b:** Made an arithmetic error in 1/6 − 1/10 — perhaps computing LCM(6,10) as 20, giving 2/20 − 1/20 = 1/20 and landing near b = 20, then selecting 8 after further errors. Verify by plugging back: 1/10 + 1/8 = 9/40 ≠ 1/6.
**mistake_c:** Another fraction subtraction error: perhaps computed 1/6 − 1/10 as 1/12 (wrong LCD arithmetic) → b = 12. Verify: 1/10 + 1/12 = 11/60 ≠ 1/6 = 10/60.
**mistake_e:** Got 2/30 = 1/15 correctly but then added 1 to the denominator: 1/16 → b = 16. Or made a sign error mid-computation. Verify: 1/10 + 1/16 = 13/80 ≠ 1/6.
**common_trap:** Subtracting solo and combined times instead of subtracting *rates*. Rates are the only quantities that add and subtract cleanly in work problems.
**takeaway:** Times don't subtract; rates do. 1/b = 1/T − 1/a. Always verify by plugging back into the original rate equation.
**related_reading:** reading-quant-05-word-problems

---

## Q25
**difficulty:** Hard
**type:** Problem Solving
**topic:** Work Rates — Changing Team Size

A team of 8 workers can complete a project in 12 days. After 3 days of work by all 8 workers, 2 workers leave the team, and the remaining 6 workers continue at the same individual rate. How many additional days will the remaining workers need to complete the project?

- A) 9
- B) 10
- C) 12
- D) 15
- E) 18

**answer:** C
**fastest_path:** Total work = 96 worker-days. Done = 24. Remaining = 72. 72/6 = 12 days.
**explanation:** Total work = 8 × 12 = 96 worker-days. After 3 days: 8 × 3 = 24 worker-days completed. Remaining = 96 − 24 = 72 worker-days. Now only 6 workers remain: time = 72/6 = 12 additional days.
**mistake_a:** Divided remaining work (72) by the original team size (8) instead of the new team size (6): 72/8 = 9. The team shrank — fewer workers means more time needed, so the answer must be larger than 9.
**mistake_b:** Computed the remaining work as 72 correctly and the new team as 6 correctly, but made an arithmetic error in 72/6: perhaps computed 70/7 = 10 instead. Check: 6 × 12 = 72 ✓.
**mistake_d:** Computed remaining work as 72 but divided by a wrong team size (perhaps 8 − 2 = 6... that gives 12, or used some confused formula): 72 / (8 − 3) = 72/5 = 14.4 ≈ 15.
**mistake_e:** Subtracted the completed work incorrectly: computed 8 × 3 = 24 as "8 + 3 = 11" or similar, getting remaining ≈ 85, and then divided by 6 → ≈ 14 → rounded to 18, or computed total work as 8 × 9 = 72 instead of 96.
**common_trap:** Dividing by the original team size (8) after workers leave — forgetting to update to 6.
**takeaway:** Worker-days are conserved. After a team change: remaining time = (total work − completed work) / new team size. More workers → less time; fewer workers → more time.
**related_reading:** reading-quant-05-word-problems

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Rates — Upstream and Downstream

A boat travels 24 miles downstream along a river, then returns the same 24 miles upstream. The boat's downstream speed is 4 miles per hour greater than its upstream speed. If the total time for the round trip is 5 hours, what is the boat's upstream speed?

- A) 5 mph
- B) 6 mph
- C) 7 mph
- D) 8 mph
- E) 10 mph

**answer:** D
**fastest_path:** Test u = 8: 24/8 + 24/12 = 3 + 2 = 5 ✓.
**explanation:** Equation: 24/u + 24/(u + 4) = 5. Backsolve from D, u = 8: 24/8 + 24/12 = 3 + 2 = 5 ✓. Algebraically: 24(u+4) + 24u = 5u(u+4) → 5u² − 28u − 96 = 0 → u = (28 + 52)/10 = 8.
**mistake_a:** Test u = 5: 24/5 + 24/9 ≈ 4.8 + 2.67 = 7.47 ≠ 5.
**mistake_b:** Test u = 6: 4 + 2.4 = 6.4 ≠ 5.
**mistake_c:** Test u = 7: ≈ 3.43 + 2.18 = 5.61 ≠ 5.
**mistake_e:** Assumed 2.5 hr each way: u = 24/2.5 = 9.6, rounded to 10.
**common_trap:** Assuming symmetric time contribution (2.5 hr each leg), which would imply equal speeds — contradicting the 4 mph differential.
**takeaway:** When two legs have different speeds, *time* isn't split evenly. Set up T = D/v₁ + D/v₂ and backsolve from C.
**related_reading:** reading-quant-05-word-problems

---

## Q27
**difficulty:** Medium
**type:** Problem Solving
**topic:** Rates — Unit Conversion

A machine produces 100 widgets every 2.5 hours. At this rate, how many widgets will the machine produce in 7.5 hours?

- A) 200
- B) 250
- C) 275
- D) 300
- E) 350

**answer:** D
**fastest_path:** 7.5/2.5 = 3 → 3 × 100 = 300.
**explanation:** The machine runs at a constant rate. In 2.5 hours it makes 100; in 7.5 hours it runs for exactly 3 such intervals: 7.5/2.5 = 3. Output = 3 × 100 = 300. Equivalently: rate = 100/2.5 = 40 widgets/hr; 40 × 7.5 = 300.
**mistake_a:** Computed 7.5/2.5 = 3 correctly but then multiplied 2 × 100 = 200 — confusing the interval count (3) with some other number in the problem (perhaps the exponent of 2.5?). The multiplier must be the time ratio, which is 3.
**mistake_b:** Divided 7.5 by 2.5 incorrectly, getting 2.5 instead of 3, then computed 2.5 × 100 = 250. A quick mental check: 2.5 × 2.5 = 6.25 ≠ 7.5; the correct ratio is 7.5/2.5 = 3.
**mistake_c:** Correctly found the rate (40 widgets/hr) but miscalculated 40 × 7.5: perhaps computed 40 × 7 = 280 and forgot the 40 × 0.5 = 20 → total 300, but instead stopped at some intermediate step and got 275.
**mistake_e:** Computed 7.5/2.5 as 3.5 (adding instead of dividing, or mis-reading the decimal) and multiplied 3.5 × 100 = 350. Always sanity check: 3.5 × 2.5 = 8.75 ≠ 7.5.
**common_trap:** Multiplying 100 × 7.5 = 750 directly — treating the rate as "100 per hour" when it's "100 per 2.5 hours." The base unit matters.
**takeaway:** For constant-rate scaling: time ratio × base output = total output. Find the ratio of total time to one cycle (7.5/2.5 = 3), then multiply by output per cycle.
**related_reading:** reading-quant-05-word-problems
