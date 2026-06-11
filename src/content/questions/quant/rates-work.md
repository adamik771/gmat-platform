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
**fastest_path:** 40 minutes is 2/3 of an hour, and 2/3 of 18 is 12. Convert the time into the rate's units and the multiplication is instant.
**explanation:** This problem is governed by the relationship distance equals rate multiplied by time, which holds for motion at a constant speed. A necessary condition for applying this relationship is that the units of rate and time must be consistent.

Let d represent the distance traveled, in kilometers. The rate is given as 18 kilometers per hour, so time must be expressed in hours rather than minutes. We convert the given time of 40 minutes to hours:

40 minutes = 40/60 hour = 2/3 hour.

Applying the distance relationship:

d = rate × time
d = 18 × (2/3)
d = 36/3
d = 12.

Therefore the cyclist travels 12 kilometers.

The correct answer is D.
**mistake_a:** 9 km is half of 18 — treating 40 minutes as if it were half an hour. The conversion is 40/60 = 2/3, not 1/2.
**mistake_b:** 10 km is a "bit more than half" eyeball of the hour. There is no exact path to it; landing here means the time fraction was estimated instead of computed as exactly 2/3.
**mistake_c:** 11 km is a near-miss buffer just under the answer — it catches rough mental math that never pinned 40 minutes down as exactly 2/3 of an hour.
**mistake_e:** 15 km is 18 × 5/6 — converting 40 minutes as if it were 50 minutes, or shaving a casual "few kilometers" off 18 instead of multiplying by the exact time fraction.
**common_trap:** Sloppy minute-to-hour conversion. 40 minutes is neither 0.4 hour nor half an hour; it is exactly 40/60 = 2/3 hour.
**takeaway:** Before touching d = rt, convert the time into the rate's units as an exact fraction: 40 minutes = 40/60 = 2/3 hour.
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
**fastest_path:** Product over sum for two workers: (6 × 4)/(6 + 4) = 24/10 = 2.4 hours.
**explanation:** This is a combined-work problem, governed by the principle that when several agents work together, their individual rates of work add together, whereas their times do not. The rate of any agent is the reciprocal of the time it requires to complete the job alone.

Let the task be the filling of one full tank. Pipe A fills the tank in 6 hours, so its rate is 1/6 of the tank per hour. Pipe B fills the same tank in 4 hours, so its rate is 1/4 of the tank per hour.

When both pipes are opened together, the combined rate is the sum of the two individual rates. Using a common denominator of 12, we have

1/6 + 1/4 = 2/12 + 3/12 = 5/12 tank per hour.

Let T be the time, in hours, required to fill one tank at the combined rate. Since rate multiplied by time equals the amount of work, and the work is one full tank, we have

(5/12) * T = 1.

Solving for T, we multiply both sides by the reciprocal of 5/12:

T = 12/5 = 2.4 hours.

The correct answer is C.
**mistake_a:** 1.6 hours is impossible: even two copies of the faster pipe (4 hours each) would need 2 hours together. Any answer below 2 fails that bound before any computation.
**mistake_b:** 2 hours is the theoretical floor, not the answer — it is what two clones of the faster pipe would take. Pipe A is slower than pipe B, so the pair must take longer than 2 hours.
**mistake_d:** 3 hours is half of pipe A's 6 — the "two pipes, twice as fast" shortcut applied to the wrong pipe. Halving the solo time is valid only when both workers are identical.
**mistake_e:** 5 hours is the average of 6 and 4 — averaging times. It fails the sanity check instantly: two pipes together can never be slower than the faster pipe alone (4 hours).
**common_trap:** Averaging or otherwise combining the times directly. Times never add or average — rates do.
**takeaway:** For two workers, together-time = product of the solo times over their sum — and the result must beat the faster solo time but can never beat half of it.
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
**fastest_path:** Double both numbers to clear the decimal: 210/3.5 = 420/7 = 60.
**explanation:** Average speed is defined as total distance divided by total time. We let r denote the average speed in miles per hour, and we apply the relationship r = D / T, where D is the distance traveled and T is the elapsed time.

Here D = 210 miles and T = 3.5 hours, so

r = 210 / 3.5.

To evaluate this quotient exactly, we multiply both the numerator and the denominator by 2, which clears the decimal in the denominator:

r = (210 x 2) / (3.5 x 2) = 420 / 7.

Dividing 420 by 7 gives

r = 60.

Thus the average speed is 60 miles per hour.

The correct answer is C.
**mistake_a:** 55 comes from fumbling the decimal in long division by 3.5 — helped along by the "highway speed" anchor that makes 55 feel plausible. Clear the decimal first and the division is exact.
**mistake_b:** 58 is a near-miss buffer with no arithmetic path. Landing here means approximating a division that has a clean exact answer.
**mistake_d:** 65 is the residue of computing 210/3 = 70 and then "adjusting down a bit." The adjustment is not a judgment call — dividing by 3.5 instead of 3 gives exactly 60.
**mistake_e:** 70 is 210/3 — ignoring the 0.5 in 3.5. Dropping half an hour of travel time inflates the speed.
**common_trap:** Dividing by 3 instead of 3.5, or botching the decimal mid-division.
**takeaway:** Division by a decimal cleans up when you scale both numbers: multiply top and bottom by 2 and 210/3.5 becomes 420/7.
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
**fastest_path:** Equal workers split the job evenly, so together they take half the solo time: 5/2 = 2.5 hours.
**explanation:** In combined-work problems, the governing principle is that individual rates of work add together: the rate at which a group completes a task equals the sum of the rates of its members. A rate is expressed as the fraction of the job completed per unit of time, and the total time required is the reciprocal of the combined rate.

Let the entire painting job equal 1 room. Maria completes the room in 5 hours, so her rate is 1/5 of the room per hour. John completes the same room in 5 hours, so his rate is also 1/5 of the room per hour.

Working together, their combined rate is the sum of the individual rates:

1/5 + 1/5 = 2/5 of the room per hour.

Let T represent the time, in hours, required for the two to paint the room together. Because rate multiplied by time equals the completed job, we have (2/5)(T) = 1. Solving for T gives:

T = 1 / (2/5) = 5/2 = 2.5 hours.

The correct answer is B.
**mistake_a:** 2 hours overshoots the speedup — two equal painters exactly halve the time, no more. Going below 2.5 would require a third painter.
**mistake_c:** 3 hours is a hedge between "half of 5" and "most of 5" — a guess that a partner helps but not by a full factor of 2. Two equal rates add to exactly double the rate.
**mistake_d:** 5 hours is the average of 5 and 5 — averaging times. The absurdity is visible here: it claims the second painter changes nothing.
**mistake_e:** 10 hours adds the times — the single most classic work-rate error. Two painters cannot be slower than one.
**common_trap:** Adding (10) or averaging (5) the solo times. Both fail the one-line sanity check that two workers must beat either one alone.
**takeaway:** n identical workers divide the solo time by n. Save the rate algebra for unequal workers.
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
**fastest_path:** Opposite directions means the speeds add: 50 + 70 = 120 km/h of separation, and 360/120 = 3 hours.
**explanation:** When two objects travel in opposite directions from a common starting point, the distance between them increases at a rate equal to the sum of their individual speeds. The governing relationship is distance = rate × time, applied here to the combined separation rate.

Let t represent the number of hours elapsed. One car travels at 50 km/h and the other at 70 km/h. Because the cars move directly away from each other, their separation grows at the combined rate of 50 + 70 = 120 km/h.

The total distance between the two cars after t hours is therefore 120t. We require this distance to equal 360 km:

120t = 360.

Solving for t, we divide both sides by 120:

t = 360 / 120 = 3.

Thus the cars are 360 km apart after 3 hours.

The correct answer is C.
**mistake_a:** 2 hours would need a separation rate of 180 km/h — half again the true combined speed. No setup produces it; it punishes guessing instead of adding the speeds.
**mistake_b:** 2.5 hours implies a 144 km/h separation rate — a near-miss that catches imprecise arithmetic on 50 + 70.
**mistake_d:** 3.5 hours implies the gap grows at only about 103 km/h — the result of shaving one of the speeds rather than summing both in full.
**mistake_e:** 4 hours treats the cars as separating at 90 km/h; there is no principled path here — the choices reward computing 50 + 70 exactly once.
**common_trap:** Hesitating between adding and subtracting the speeds. Moving apart (or toward each other) means add; chasing in the same direction means subtract.
**takeaway:** Two travelers' gap changes at the sum of their speeds when they move in opposite directions, and at the difference when they move the same way.
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
**fastest_path:** Tom: 6 × 1 = 6 km. Sister: 4 × 0.5 = 2 km. Opposite directions, so the gap is 6 + 2 = 8 km.
**explanation:** When two objects travel away from a common starting point in opposite directions, the distance between them equals the sum of the individual distances each has covered. The governing relationship for each traveler is distance = rate × time, where the time used must be the actual interval during which that traveler has been moving.

Let the reference moment be the instant Tom leaves home. The question asks for the separation 1 hour after this moment.

Tom moves at 6 km/h for the full hour. His distance is therefore

6 km/h × 1 h = 6 km.

The sister departs 30 minutes, or 0.5 hour, after Tom. Consequently, at the 1-hour mark she has been walking for only

1 h − 0.5 h = 0.5 h.

Her distance at 4 km/h is

4 km/h × 0.5 h = 2 km.

Because Tom and his sister travel in opposite directions from the same point, the distance separating them is the sum of the two distances:

6 km + 2 km = 8 km.

The correct answer is D.
**mistake_a:** 4 km is 6 − 2 — subtracting the distances as if they traveled in the same direction. They move apart, so the distances add.
**mistake_b:** 5 km gives BOTH walkers only half an hour: 3 + 2 = 5. Tom has been jogging the full hour; only his sister started late.
**mistake_c:** 6 km is Tom's distance alone — dropping the sister entirely after handling the staggered start.
**mistake_e:** 10 km gives the sister the full hour: 6 + 4 = 10. She left 30 minutes after Tom, so she has walked only half an hour.
**common_trap:** Using one shared clock for both travelers. "1 hour after Tom left" means 1 hour for Tom but only 0.5 hour for his sister.
**takeaway:** In staggered-start problems, give every traveler their own elapsed time before applying d = rt to each.
**related_reading:** reading-quant-05-word-problems

---

## Q7
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Speed

A driver travels from town X to town Y at 40 km/h and returns along the same road at 60 km/h. What is the average speed for the entire round trip?

- A) 46 km/h
- B) 48 km/h
- C) 50 km/h
- D) 52 km/h
- E) 55 km/h

**answer:** B
**fastest_path:** Equal distances at two speeds — harmonic mean: 2 × 40 × 60/(40 + 60) = 4800/100 = 48.
**hint_nudge:** Equal distances at two speeds — the average is NOT the simple mean (50); it is pulled toward the slower leg.
**hint_strategy:** Use average speed = total distance / total time. Pick a distance both speeds divide, like 120 km, instead of carrying a variable.
**hint_setup:** With d = 120: outbound 120/40 = 3 h, return 120/60 = 2 h. Average = total distance 240 km / total time __ h.
**explanation:** Average speed is defined as total distance divided by total time, not as the simple average of the individual speeds. Because the two legs of this trip cover equal distances at different speeds, more time is spent on the slower leg, so the two speeds cannot be averaged directly. We must compute the total distance traveled and the total time elapsed, then divide.

Let d represent the one-way distance, in kilometers, from town X to town Y. The driver covers this distance twice, so the total distance for the round trip is 2d kilometers.

The time for each leg is distance divided by speed. The outbound leg, traveled at 40 km/h, requires d/40 hours. The return leg, traveled at 60 km/h, requires d/60 hours. The total time is therefore d/40 + d/60 hours.

To add these times, we express both fractions over the common denominator 120: d/40 = 3d/120 and d/60 = 2d/120. Their sum is 3d/120 + 2d/120 = 5d/120 = d/24 hours.

The average speed is the total distance divided by the total time:

average speed = 2d / (d/24) = 2d times 24/d = 48 km/h.

The variable d cancels, confirming that the average speed does not depend on the actual distance between the towns. As a check, we may select a convenient value such as d = 120 kilometers. The outbound leg then takes 120/40 = 3 hours and the return leg takes 120/60 = 2 hours, for a total of 240 kilometers in 5 hours, which gives 240/5 = 48 km/h.

The correct answer is B.
**mistake_a:** 46 overcorrects downward — a guess that the answer is "well below 50" without computing how far. The harmonic mean of 40 and 60 is exactly 48.
**mistake_c:** 50 is the arithmetic mean — the headline trap. Equal distances mean unequal times: the trip spends 3 hours at 40 km/h but only 2 at 60, so the slow leg drags the average below 50.
**mistake_d:** 52 corrects in the wrong direction. More time elapses on the slower leg, so the average must sit below the midpoint, never above it.
**mistake_e:** 55 weights the faster leg as if it dominated the trip — but the faster you cover a fixed distance, the less time it occupies.
**common_trap:** Averaging the two speeds to get 50. The simple mean is valid only for equal times, never for equal distances.
**takeaway:** Equal-distance round trip: average speed = 2ab/(a + b), always closer to the slower speed.
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
**fastest_path:** Gap at 10:00 is 2 × 45 = 90 miles; it closes at 65 − 45 = 20 mph; 90/20 = 4.5 hours after 10:00 is 2:30 PM.
**hint_nudge:** Same direction, so the passenger train only has to close the gap — it does not need the total distance.
**hint_strategy:** Find the freight train's head start at 10:00 AM, then divide it by the closing speed (the difference of the two speeds).
**hint_setup:** Head start = 2 h x 45 = 90 mi; closing rate = 65 - 45 = 20 mph; time to close = 90/20 h after 10:00 AM.
**explanation:** Because both trains travel in the same direction along the same route, this is a catch-up problem, and the rate at which the faster train closes the gap equals the difference of the two speeds.

Let t be the number of hours after 10:00 AM at which the passenger train overtakes the freight train. The freight train departs at 8:00 AM at 45 miles per hour, so by 10:00 AM, when the passenger train departs, it has already traveled for 2 hours. Thus the freight train begins with a head start of 2(45) = 90 miles.

The passenger train travels at 65 miles per hour and the freight train at 45 miles per hour, so the passenger train gains on the freight train at a closing rate of 65 - 45 = 20 miles per hour. The passenger train catches the freight train when it has erased the 90-mile head start:

20t = 90
t = 90 / 20 = 4.5

The passenger train therefore overtakes the freight train 4.5 hours after 10:00 AM, which is 2:30 PM.

The correct answer is A.
**mistake_b:** 4:00 PM is 6 hours after the 10:00 departure — the footprint of a closing-rate slip (a botched 65 − 45 turns 90/20 into 90/15 = 6).
**mistake_c:** 4:30 PM is the trap of writing t = 4.5 hours directly as a clock time. The 4.5 hours must be added to the 10:00 AM start, not read off as "4:30."
**mistake_d:** 5:30 PM comes from anchoring the 4.5-hour chase at the wrong departure or padding the head start — both symptoms of losing track of what t measures.
**mistake_e:** 6:00 PM has no principled source; it flags a setup that never isolated the 90-mile head start.
**common_trap:** Solving correctly for t = 4.5 and reporting "4:30." The variable answers "hours after 10:00," not "what time is it."
**takeaway:** Catch-up problems: head start ÷ speed difference = chase time, then add that time to the chaser's departure clock.
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
**fastest_path:** The job is 3 × 4 = 12 pump-hours; 5 pumps need 12/5 = 2.4 hours = 2 hours 24 minutes.
**hint_nudge:** More pumps means less time, but the total work is fixed — count it in pump-hours.
**hint_strategy:** Total work = pumps x hours is constant; get it from the first scenario, then divide by the new pump count.
**hint_setup:** Total work = 3 x 4 = 12 pump-hours. For 5 pumps, time = 12/5 hours, then convert the fractional hour to minutes.
**explanation:** This problem relies on the principle that for a fixed task, the total amount of work is constant and can be measured in pump-hours, the product of the number of pumps and the number of hours they operate. Because the pumps are identical, each contributes equally, so the number of pumps and the time required are inversely proportional.

We first determine the total work. Let the total work required to drain the pool be expressed in pump-hours. Three identical pumps working together drain the pool in 4 hours, so the total work is

3 pumps × 4 hours = 12 pump-hours.

This quantity is fixed; it does not change with the number of pumps used. Let T denote the time, in hours, required for 5 such pumps to perform the same 12 pump-hours of work. Then

5 pumps × T hours = 12 pump-hours,

so

T = 12 / 5 = 2.4 hours.

We convert the fractional portion of an hour into minutes. The whole-number part contributes 2 hours, and the remaining 0.4 hour is

0.4 × 60 = 24 minutes.

Therefore T = 2 hours 24 minutes.

The correct answer is B.
**mistake_a:** 2 hours rounds 2.4 down to a neat number — or finds 4 × 3/5 = 2.4 and then drops the fraction. The 0.4 hour is 24 real minutes.
**mistake_c:** 2 hours 40 minutes misreads 2.4 hours as "2:40." The .4 is a fraction of an hour: 0.4 × 60 = 24 minutes, not 40.
**mistake_d:** 3 hours treats adding two pumps as shaving exactly one hour — linear thinking applied to what is an inverse proportion.
**mistake_e:** 3 hours 20 minutes is 4 × 5/6 — scaling by the wrong ratio. Five pumps versus three means time scales by 3/5, not 5/6.
**common_trap:** Converting the decimal 2.4 hours to 2 h 40 min. Decimal hours convert by ×60, so 0.4 h = 24 min.
**takeaway:** Identical-worker problems are inverse proportion: total work in worker-hours is fixed, so time = worker-hours ÷ crew size — and convert leftover decimals via ×60.
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
**fastest_path:** Test the choices — they divide 60 cleanly. At 40 mph: 60/40 − 60/50 = 1.5 − 1.2 = 0.3 h = 18 min. Done.
**hint_nudge:** Same 60-mile distance at two speeds; the 18-minute saving is the hook — convert it to hours first.
**hint_strategy:** Set 60/r - 60/(r+10) equal to 18/60 = 3/10 hour, or just test the answer choices.
**hint_setup:** Testing r = 40: 60/40 - 60/50 = 1.5 - 1.2 = __ h (target 3/10 h).
**explanation:** This problem is governed by the relationship distance = rate × time, equivalently time = distance ÷ rate. The two scenarios share the same distance, so we express each travel time in terms of the unknown speed and use the fact that the faster trip takes 18 minutes less.

Let r be the commuter's usual speed in miles per hour. At the usual speed, the time required to drive the 60 miles is 60/r hours. At the increased speed of r + 10 miles per hour, the time required is 60/(r + 10) hours. Because the commuter arrives 18 minutes earlier at the increased speed, the usual time exceeds the faster time by 18 minutes, which is 18/60 = 3/10 of an hour.

We translate this condition into the equation

60/r − 60/(r + 10) = 3/10.

To clear the denominators, we multiply both sides by 10r(r + 10):

600(r + 10) − 600r = 3r(r + 10).

Expanding each side gives

600r + 6000 − 600r = 3r² + 30r,

which simplifies to

6000 = 3r² + 30r.

Dividing both sides by 3 yields

2000 = r² + 10r,

or equivalently

r² + 10r − 2000 = 0.

Factoring the quadratic gives

(r − 40)(r + 50) = 0,

so r = 40 or r = −50. Because a speed must be positive, we discard r = −50 and conclude that r = 40.

We verify this result: at 40 miles per hour the trip takes 60/40 = 1.5 hours, and at 50 miles per hour it takes 60/50 = 1.2 hours. The difference is 1.5 − 1.2 = 0.3 hour = 18 minutes, as required.

The correct answer is C.
**mistake_a:** 30 mph gives 60/30 − 60/40 = 2 − 1.5 = 0.5 h — a 30-minute saving. Picking it usually means the "18 minutes" was misread or never converted.
**mistake_b:** 35 produces times of 60/35 and 60/45 — ugly fractions and roughly 23 minutes saved. It is a buffer; when 60 is the distance, the test rarely makes the right answer this messy.
**mistake_d:** 45 saves 60/45 − 60/55, about 15 minutes — close enough to 18 to catch students who eyeball the check rather than compute it.
**mistake_e:** 50 saves 60/50 − 60/60 = 0.2 h = 12 minutes — often from testing with the faster speed in the wrong slot.
**common_trap:** Converting 18 minutes carelessly (0.18 hour instead of 18/60 = 0.3 hour) before setting up 60/r − 60/(r + 10).
**takeaway:** When a speed question offers clean choices that divide the distance, backsolve — each test is two quick divisions, faster and safer than the quadratic.
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
**fastest_path:** Closing speed 14 + 10 = 24 km/h; 48/24 = 2 hours.
**hint_nudge:** Moving toward each other — they close the gap at the SUM of their speeds.
**hint_strategy:** Closing rate = sum of the speeds; time to meet = initial distance / closing rate.
**hint_setup:** Closing rate = 14 + 10 = 24 km/h; time = 48/24 h.
**explanation:** When two objects move directly toward each other, the distance separating them shrinks at a rate equal to the sum of their individual speeds. This combined rate is called the closing rate, and the time required for the objects to meet is found by dividing the initial distance between them by that closing rate.

Let d represent the distance separating the two friends, so that d = 48 kilometers. Let the two speeds be 14 kilometers per hour and 10 kilometers per hour. Because the friends ride toward each other, the closing rate r is the sum of these speeds:

r = 14 + 10 = 24 kilometers per hour.

Let t represent the time, in hours, until the friends meet. Applying the relationship time = distance divided by rate, we obtain:

t = d / r = 48 / 24 = 2.

Thus the friends meet after 2 hours.

The correct answer is C.
**mistake_a:** 1 hour 30 minutes implies a 32 km/h closing speed — faster than the two bikes combined. Nothing in the setup produces it.
**mistake_b:** 1 hour 45 minutes is a near buffer below the answer; like A, it punishes estimating 48 ÷ 24 instead of computing it.
**mistake_d:** 2 hours 15 minutes implies closing slower than 24 km/h — typically from shaving one rider's speed or mis-adding 14 + 10.
**mistake_e:** 2 hours 30 minutes implies about a 19 km/h closing speed — the residue of averaging the speeds (12) and then patching. Head-on closures use the full sum.
**common_trap:** Using the difference of the speeds (4 km/h) or their average (12 km/h) instead of the sum.
**takeaway:** Meeting time = initial gap ÷ sum of the speeds. Reserve the difference for same-direction chases.
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
**fastest_path:** Product over difference: B alone = (12 × 8)/(12 − 8) = 96/4 = 24 hours.
**hint_nudge:** Rates add, times do not — work with 1/time, not the times themselves.
**hint_strategy:** B's rate = combined rate - A's rate; then invert to recover B's solo time.
**hint_setup:** 1/b = 1/8 - 1/12. Over denominator 24: 1/b = 3/24 - 2/24.
**explanation:** This is a combined-work problem, and the governing principle is that rates of work add, whereas times do not. If a worker completes a job in t hours, that worker's rate is 1/t of the job per hour, and the rates of workers laboring together sum to the combined rate.

Let b denote the number of hours B requires to complete the job alone. Worker A finishes the job in 12 hours, so A's rate is 1/12 of the job per hour. B's rate is 1/b of the job per hour. Working together, A and B finish the job in 8 hours, so their combined rate is 1/8 of the job per hour.

Because the individual rates add to the combined rate, we have:

1/12 + 1/b = 1/8

Solving for 1/b, we isolate it on one side:

1/b = 1/8 - 1/12

To subtract the fractions, we express them over the common denominator 24:

1/8 = 3/24 and 1/12 = 2/24

Therefore:

1/b = 3/24 - 2/24 = 1/24

Taking the reciprocal of both sides gives:

b = 24

Thus B, working alone, requires 24 hours to complete the job.

The correct answer is C.
**mistake_a:** 16 doubles the together-time, as if A and B were equal partners. They are not: A's solo 12 sits close to the team's 8, so B must be much slower.
**mistake_b:** 20 is 12 + 8 — adding the times. The pair's 8 hours already beats A's 12; B's solo time comes from subtracting rates, never from adding times.
**mistake_d:** 30 catches denominator slips in 1/8 − 1/12; the exact subtraction over 24 gives 3/24 − 2/24 = 1/24, so 24 hours.
**mistake_e:** 36 imagines B three times slower than A — overcorrecting from "B must be slow." The rates pin it exactly: B contributes 1/8 − 1/12 = 1/24 of the job per hour.
**common_trap:** Adding the two times (choice B). Sanity rule: every solo time must exceed the together-time, and the unknown partner is pinned by rate subtraction, not by guesswork.
**takeaway:** Partner's solo time = (known solo × together)/(known solo − together): here (12 × 8)/(12 − 8) = 24.
**related_reading:** reading-quant-05-word-problems

---

## Q13
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Speed

Anna drives the first 100 miles of a trip at 50 mph and the last 150 miles at 75 mph. What is her average speed for the entire trip?

- A) 60 mph
- B) 62.5 mph
- C) 65 mph
- D) 66.67 mph
- E) 70 mph

**answer:** B
**fastest_path:** Leg times: 100/50 = 2 h and 150/75 = 2 h. Total 250 miles in 4 hours = 62.5 mph.
**hint_nudge:** Do not average the speeds — find the time on each leg, since the legs differ in length.
**hint_strategy:** average speed = total distance / total time; each leg's time = distance / speed.
**hint_setup:** First leg 100/50 = 2 h, second leg 150/75 = 2 h; average = 250 mi / __ h.
**explanation:** Average speed is defined as total distance divided by total time, not as the simple arithmetic average of the individual speeds. This distinction matters whenever the legs of a trip are traveled at different rates, so we must compute the time spent on each leg and then combine.

Let t₁ denote the time for the first leg and t₂ the time for the second leg. Since time equals distance divided by speed, we have:

t₁ = 100 miles / 50 mph = 2 hours
t₂ = 150 miles / 75 mph = 2 hours

The total distance is 100 + 150 = 250 miles, and the total time is t₁ + t₂ = 2 + 2 = 4 hours.

Applying the definition of average speed gives:

average speed = total distance / total time = 250 miles / 4 hours = 62.5 mph

The correct answer is B.
**mistake_a:** 60 is the harmonic mean 2 × 50 × 75/(50 + 75) — the equal-distance formula applied where the distances (100 vs 150) are not equal. Formulas have entry conditions.
**mistake_c:** 65 is the distance-weighted average of the speeds, (100 × 50 + 150 × 75)/250 — weighting by distance when average speed weights by time.
**mistake_d:** 66.67 is a stray fraction with no honest path — a buffer for anyone juggling three different "average" formulas instead of computing total distance over total time.
**mistake_e:** 70 leans toward the faster leg's speed; the time split here is exactly even (2 h and 2 h), so the answer cannot sit that high.
**common_trap:** Reaching for a memorized formula (harmonic mean gives 60, distance-weighting gives 65) instead of the definition. Here the leg times happen to be equal, so the simple mean of the speeds is exactly right.
**takeaway:** Average speed has one definition — total distance over total time. Compute the leg times first; every formula shortcut is just a special case of that division.
**related_reading:** reading-quant-05-word-problems

---

## Q14
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

Alex starts painting a fence alone at a rate that would finish the job in 10 hours. After 4 hours, Beth joins him and together they finish the remaining work in 3 hours. How long would Beth take to paint the fence alone?

- A) 5 hours
- B) 6 hours
- C) 7.5 hours
- D) 10 hours
- E) 15 hours

**answer:** D
**fastest_path:** Alex does 4/10 = 2/5 alone, leaving 3/5 done in 3 h, so the pair's rate is 1/5; Beth's rate = 1/5 − 1/10 = 1/10, so 10 hours.
**hint_nudge:** Split it into Alex's solo stretch and the joint stretch; find how much job is left for the pair.
**hint_strategy:** Compute Alex's work in 4 h, subtract from 1, then the pair's combined rate = remaining work / 3 h.
**hint_setup:** Alex does 4 x 1/10 = 2/5; remaining 3/5 in 3 h gives combined rate 1/5. Then 1/10 + 1/b = 1/5.
**explanation:** This problem is governed by the principle that work rates are additive: when several agents work together, their combined rate equals the sum of their individual rates, and the amount of work completed in any interval equals rate multiplied by time. The whole job is taken to be 1 fence.

Let b represent the number of hours Beth would require to paint the fence alone, so that Beth's rate is 1/b of the fence per hour. Alex's rate is 1/10 of the fence per hour, since he would finish the job in 10 hours alone.

First we account for the work Alex completes during the 4 hours he paints by himself. The fraction of the fence he finishes is the product of his rate and the time:

(1/10)(4) = 4/10 = 2/5.

The fraction of the fence still remaining is therefore

1 - 2/5 = 3/5.

This remaining 3/5 of the fence is completed by Alex and Beth working together in 3 hours. The combined rate during this phase is the work done divided by the time taken:

(3/5) / 3 = 3/15 = 1/5 of the fence per hour.

Because rates are additive, the combined rate also equals the sum of the two individual rates:

1/10 + 1/b = 1/5.

Solving for 1/b, we subtract 1/10 from both sides:

1/b = 1/5 - 1/10 = 2/10 - 1/10 = 1/10.

Taking reciprocals gives b = 10. Beth would take 10 hours to paint the fence alone.

The correct answer is D.
**mistake_a:** 5 hours assigns the pair's combined rate (1/5) to Beth alone — forgetting that Alex kept painting during the joint phase.
**mistake_b:** 6 hours is a buffer between the two tempting answers (5 and 10); there is no clean path to it — it punishes hedging instead of finishing the rate subtraction.
**mistake_c:** 7.5 hours runs the phase-two division with the complement fraction — using the 2/5 Alex finished where the 3/5 remaining belongs. Track which fraction is done and which is left.
**mistake_e:** 15 hours makes Beth slower than the arithmetic allows: her measurable contribution is 3/5 − 3/10 = 3/10 of the fence in 3 hours — exactly 1/10 per hour, so 10 hours.
**common_trap:** Treating the joint-phase rate as Beth's own (choice A). Subtract Alex's 1/10 from the combined 1/5 before inverting.
**takeaway:** Phase problems: settle each phase's work separately, then peel the known worker's rate off the combined rate before taking the reciprocal.
**related_reading:** reading-quant-05-word-problems

---

## Q15
**difficulty:** Medium
**type:** Problem Solving
**topic:** Upstream-Downstream

A boat travels 24 km downstream in 2 hours and returns upstream over the same distance in 3 hours. What is the speed of the boat in still water?

- A) 8 km/h
- B) 9 km/h
- C) 10 km/h
- D) 11 km/h
- E) 12 km/h

**answer:** C
**fastest_path:** Effective speeds are 24/2 = 12 down and 24/3 = 8 up; still-water speed is their average: (12 + 8)/2 = 10.
**hint_nudge:** Downstream and upstream speeds are boat +/- current; ADD the two to cancel the current.
**hint_strategy:** b + c = downstream speed, b - c = upstream speed; adding the equations gives 2b.
**hint_setup:** b + c = 24/2 = 12, b - c = 24/3 = 8; so 2b = 12 + 8.
**explanation:** When an object moves through a current, its effective speed equals its still-water speed adjusted by the current: the speed downstream is the sum of the two, and the speed upstream is their difference. The governing relationship in each direction is distance = speed x time.

Let b be the speed of the boat in still water, in km/h, and let c be the speed of the current, in km/h. Going downstream, the effective speed is b + c; going upstream, it is b - c.

The boat covers 24 km downstream in 2 hours, so the downstream speed is

    b + c = 24 / 2 = 12.

The boat covers the same 24 km upstream in 3 hours, so the upstream speed is

    b - c = 24 / 3 = 8.

Adding the two equations eliminates c:

    (b + c) + (b - c) = 12 + 8,
    2b = 20,
    b = 10.

Thus the speed of the boat in still water is 10 km/h.

The correct answer is C.
**mistake_a:** 8 km/h is the upstream speed (b − c) — a component you compute along the way, not the still-water speed the question asks for.
**mistake_b:** 9 is a buffer just below the answer; it catches an averaging slip on (12 + 8)/2.
**mistake_d:** 11 is the matching buffer above the answer — same slip, other direction.
**mistake_e:** 12 km/h is the downstream speed (b + c) — again a component. Re-read the question's target before reporting a number you produced en route.
**common_trap:** Reporting the downstream (12) or upstream (8) speed instead of the still-water speed. Both appear as choices precisely because both get computed on the way.
**takeaway:** Boat speed = average of the two effective speeds; current = half their difference. Two facts, no algebra.
**related_reading:** reading-quant-05-word-problems

---

## Q16
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

Pipe X can fill a tank in 6 hours and pipe Y can fill it in 9 hours. Pipe X is opened first; 2 hours later Y is also opened. How long in total does it take from the moment X was first opened until the tank is full?

- A) 3.6 hours
- B) 4 hours
- C) 4.4 hours
- D) 4.8 hours
- E) 5.2 hours

**answer:** C
**fastest_path:** X alone does 2/6 = 1/3; the remaining 2/3 at 1/6 + 1/9 = 5/18 takes (2/3)(18/5) = 2.4 h; total 2 + 2.4 = 4.4.
**hint_nudge:** Two phases — X alone, then both pipes. The question wants TOTAL time, so keep the first 2 hours.
**hint_strategy:** Find what X fills alone in 2 h, divide the remainder by the combined rate, then add the 2 h back.
**hint_setup:** X fills 2/6 = 1/3 alone; remaining 2/3 at combined 1/6 + 1/9 = 5/18; phase-2 time = (2/3)/(5/18), then add 2.
**explanation:** In work problems involving a constant rate, the portion of a task completed equals the rate of work multiplied by the time spent working, and the rates of agents working simultaneously add together. Because the two pipes operate over different intervals here, we partition the process into two phases and account for each separately.

Let the capacity of the tank be 1 full task. Pipe X fills the tank in 6 hours, so its rate is 1/6 of the tank per hour, and pipe Y fills it in 9 hours, so its rate is 1/9 of the tank per hour.

During the first phase, pipe X works alone for 2 hours. The amount filled is the rate times the time:

(1/6)(2) = 2/6 = 1/3.

Thus 1/3 of the tank is filled, and the remaining portion is

1 - 1/3 = 2/3.

During the second phase, pipe Y is opened and both pipes operate together. Their combined rate is the sum of the individual rates:

1/6 + 1/9 = 3/18 + 2/18 = 5/18 of the tank per hour.

Let t be the number of hours in this second phase. The work completed must equal the remaining 2/3:

(5/18)(t) = 2/3.

Solving for t:

t = (2/3) divided by (5/18) = (2/3)(18/5) = 36/15 = 12/5 = 2.4 hours.

The total time from the moment pipe X was first opened is the sum of the two phases:

2 + 2.4 = 4.4 hours.

The correct answer is C.
**mistake_a:** 3.6 hours is 18/5 — the time for both pipes to fill the whole tank together from empty. It erases the 2-hour solo phase entirely.
**mistake_b:** 4 hours rounds the phase arithmetic to neat numbers; the exact phase-two time is 2.4 hours, not 2.
**mistake_d:** 4.8 hours doubles the 2.4-hour joint phase — usually from re-adding phase-two time instead of the 2-hour solo phase.
**mistake_e:** 5.2 hours pads the total by under-crediting the solo phase; X alone moves a full 1/3 of the tank in its 2 hours.
**common_trap:** Answering with a partial quantity — the whole-job-together time (3.6) is on offer, and the phase-two time alone (2.4) is the other classic slip. The stem asks for total elapsed time from the first moment.
**takeaway:** Staggered-start problems end with an addition: solo-phase time + joint-phase time. Flag what the question wants before reporting.
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
**fastest_path:** Speed needs distance and time. (1) is distance only; (2) is time only — and relative to an unknown distance. Together they pin both: 180 miles in 4 − 1/3 = 11/3 hours.
**hint_nudge:** Average speed needs a distance AND a time — test whether each statement supplies what's missing.
**hint_strategy:** Check each statement for whether it fixes both distance and time; a purely relative time statement is not enough alone.
**hint_setup:** (1) gives distance only; (2) gives time only, relative to an unknown distance. Try them together.
**explanation:** Average speed is governed by the relationship average speed = distance / time, so determining a single numerical value for the average speed requires knowing, or being able to derive, both the distance traveled and the time taken. We evaluate each statement against this requirement.

Statement (1) gives the distance from M to N as 180 miles but provides no information about the time the trip took. With distance known and time unknown, the average speed cannot be determined to a single value. Statement (1) alone is not sufficient.

Statement (2) states that the trip took 20 minutes, or 1/3 hour, less than it would have taken at 45 mph. This is purely a relative statement about time and supplies no anchor for the actual distance. Let d denote the distance. The time at 45 mph would be d/45, and the actual time would be d/45 - 1/3, giving an average speed of d / (d/45 - 1/3). This expression depends on d, which is unknown, so it does not yield a single value. Statement (2) alone is not sufficient.

Taking the statements together, let the distance be 180 miles, as given in statement (1). At 45 mph, the time required would be 180/45 = 4 hours. By statement (2), the actual time was 1/3 hour less, so the actual time was 4 - 1/3 = 11/3 hours. The average speed is therefore 180 / (11/3) = 180 * (3/11) = 540/11 mph, a single determinate value. Both statements together are sufficient.

The correct answer is C.
**mistake_a:** Choosing A treats distance as enough by itself. Average speed is a ratio; without the time, 180 miles is compatible with any speed.
**mistake_b:** Choosing B assumes the algebra of "20 minutes less than at 45 mph" resolves on its own. It leaves the distance d free: speed = d/(d/45 − 1/3) still varies with d.
**mistake_d:** D requires each statement alone to suffice; each supplies only one of the two ingredients of speed.
**mistake_e:** E usually comes from refusing to combine: with d = 180 fixed, the actual time is 180/45 − 1/3 = 11/3 hours, and 180 ÷ (11/3) is a single — ugly but unique — value.
**common_trap:** Bailing to E because 540/11 mph looks wrong. Data sufficiency rewards "uniquely determined," not "pretty."
**takeaway:** For value-DS on a ratio, inventory the ratio's two ingredients; a statement that fixes neither absolutely (like a purely relative time) can still close the system when paired with the other.
**related_reading:** reading-quant-05-word-problems

---

## Q18
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Combined Work

Two workers, P and Q, together complete a job. How many hours did they work together?

(1) Working alone, P takes 10 hours and Q takes 15 hours to complete the job.
(2) P's rate of work is 50% faster than Q's rate of work.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** A
**fastest_path:** (1) gives both solo times, so the combined rate is 1/10 + 1/15 = 1/6 and the answer is 6 hours — sufficient. (2) fixes only the ratio of the rates, never their absolute size.
**hint_nudge:** The hours worked together depend on the ABSOLUTE combined rate, not just the ratio of the two rates.
**hint_strategy:** A statement is sufficient only if it fixes a numeric combined rate; a '50% faster' relation fixes only the ratio.
**hint_setup:** (1) gives both solo times, so combined rate = 1/10 + 1/15 = 1/6 — is that enough on its own?
**explanation:** In combined-work problems, individual rates of work add to give a combined rate, and the time required to finish one job together is the reciprocal of that combined rate. To determine the hours worked together, we must be able to compute an absolute combined rate, not merely a relationship between the two workers' rates.

Let p be P's rate and q be Q's rate, each measured as the fraction of the job completed per hour. The time T worked together satisfies (p + q) * T = 1, so T = 1 / (p + q). The question can be answered precisely when (1) determines a numerical value for p + q.

Consider statement (1). Working alone, P completes the job in 10 hours, so p = 1/10 of the job per hour, and Q completes it in 15 hours, so q = 1/15 of the job per hour. The combined rate is p + q = 1/10 + 1/15 = 3/30 + 2/30 = 5/30 = 1/6 of the job per hour. Therefore T = 1 / (1/6) = 6 hours. Because p + q is a single numerical value, T is uniquely determined. Statement (1) is sufficient.

Consider statement (2). P's rate is 50% faster than Q's rate, so p = 1.5q. Substituting into the combined rate gives p + q = 1.5q + q = 2.5q. Here q has no fixed numerical value; only the ratio of the two rates is fixed. Consequently T = 1 / (2.5q) varies with q and cannot be determined. For example, if q = 1/15 then T = 1 / (2.5/15) = 6 hours, but if q = 1/30 then T = 1 / (2.5/30) = 12 hours. Statement (2) is not sufficient.

Statement (1) alone is sufficient and statement (2) alone is not sufficient.

The correct answer is A.
**mistake_b:** B picks the ratio statement; but "50% faster" is satisfied by infinitely many pairs — q = 1/15 gives 6 hours together, q = 1/30 gives 12.
**mistake_c:** C is the reflex that two workers need two statements. Statement (1) already yields the absolute combined rate on its own.
**mistake_d:** D requires (2) alone to work too — it cannot, because scaling both rates up or down preserves "50% faster" while changing the time.
**mistake_e:** E undersells statement (1): two known solo times always produce a unique together-time.
**common_trap:** Treating a ratio ("50% faster") as if it carried absolute information. Ratios alone never fix a time.
**takeaway:** In work-rate DS, ask of each statement: does it pin the absolute combined rate? Solo times do; ratios do not.
**related_reading:** reading-quant-05-word-problems

---

## Q19
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

Pump A fills a tank in 6 hours. Pump B fills the same tank in 9 hours. Both pumps work together for 2 hours, and then Pump A stops. How long after that does Pump B take to finish the tank?

- A) 3 hours
- B) 3.5 hours
- C) 4 hours
- D) 4.5 hours
- E) 5 hours

**answer:** C
**fastest_path:** Joint phase: 2 × 5/18 = 5/9 done, so 4/9 remains. B alone at 1/9 needs (4/9) ÷ (1/9) = 4 hours.
**hint_nudge:** After the joint phase only B works — use B's SOLO rate for the leftover, not the combined rate.
**hint_strategy:** Compute the joint work in 2 h, subtract from 1, then divide the remainder by B's solo rate.
**hint_setup:** Combined 1/6 + 1/9 = 5/18; in 2 h that is 5/9; remaining 4/9 at B's rate 1/9 gives t = (4/9)/(1/9).
**explanation:** Work-rate problems are governed by the principle that a worker's rate is the reciprocal of the time required to complete one whole job alone, and that rates of agents working simultaneously add. When the set of working agents changes partway through the task, the work done in each phase must be computed with the rate that applies to that phase.

Let the entire job equal 1 tank. Since Pump A fills the tank in 6 hours, its rate is 1/6 of the tank per hour. Since Pump B fills the tank in 9 hours, its rate is 1/9 of the tank per hour.

During the first phase the pumps work together, so their combined rate is the sum of the individual rates:

1/6 + 1/9 = 3/18 + 2/18 = 5/18 of the tank per hour.

In 2 hours at this combined rate, the portion of the tank filled is:

2 * (5/18) = 10/18 = 5/9 of the tank.

The portion remaining to be filled is therefore:

1 - 5/9 = 4/9 of the tank.

In the second phase Pump A has stopped, so the remaining work is done by Pump B alone at its solo rate of 1/9 of the tank per hour. Let t be the number of hours Pump B needs to finish. Then:

(1/9) * t = 4/9.

Solving for t gives:

t = (4/9) / (1/9) = (4/9) * (9/1) = 4.

Thus Pump B requires 4 hours after Pump A stops to finish filling the tank.

The correct answer is C.
**mistake_a:** 3 hours undercounts the leftover — it would mean only 3/9 of the tank remained, but the 2-hour joint phase leaves 4/9.
**mistake_b:** 3.5 hours is a buffer between the wrong 3 and the right 4 — a sign of estimating (4/9) ÷ (1/9) instead of dividing.
**mistake_d:** 4.5 hours treats the joint phase as having filled exactly half the tank; it filled 5/9, leaving 4/9.
**mistake_e:** 5 hours swaps "done" with "left" — B would need 5 hours only if 5/9 of the tank remained, but 5/9 is the part already filled.
**common_trap:** Carrying the combined rate (5/18) into the solo phase. The instant A stops, the divisor becomes B's own 1/9.
**takeaway:** When the crew changes, re-derive the rate for each phase; never let a phase borrow the previous phase's rate.
**related_reading:** reading-quant-05-word-problems

---

## Q20
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Multi-Phase Work Rates

Working alone, Alex can complete a project in h hours; working alone, Ben can complete the same project in k hours. Alex and Ben work together for exactly 3 hours, then Alex leaves and Ben works alone for 2 more hours to finish the project. What is the value of h?

(1) k = 5h.
(2) Working together, Alex and Ben complete the project at a combined rate of 3/10 of the project per hour.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** The stem itself yields 3/h + 5/k = 1. Each statement adds one independent equation — (1) k = 5h, (2) 1/h + 1/k = 3/10 — and each closes the system at h = 4.
**hint_nudge:** The scenario itself gives one equation linking h and k; each statement supplies the second.
**hint_strategy:** Build the stem equation from the work done, then test whether each statement plus the stem fixes h uniquely.
**hint_setup:** Stem: 3(1/h + 1/k) + 2/k = 1, i.e. 3/h + 5/k = 1. With (1) k = 5h: 3/h + 5/(5h) = 1.
**explanation:** This is a data sufficiency problem, so the task is to determine whether each statement provides enough information to fix a single value of h, not to compute h for its own sake. The governing method is to model work as additive rates: a worker who finishes a project alone in t hours completes 1/t of the project per hour, and the amounts of the project completed by different workers over given time intervals sum to 1 (the whole project).

Let 1/h be Alex's hourly rate and 1/k be Ben's hourly rate. During the first 3 hours both work, contributing 3(1/h + 1/k) of the project. Then Ben works alone for 2 more hours, contributing 2(1/k). Together these complete the project:

3(1/h + 1/k) + 2/k = 1.

Expanding gives 3/h + 3/k + 2/k = 1, so the scenario itself imposes the constraint

3/h + 5/k = 1.

This stem equation relates the two unknowns h and k but, by itself, leaves infinitely many (h, k) pairs, so additional information is required.

Statement (1) gives k = 5h. Substituting into the stem equation yields 3/h + 5/(5h) = 1, which is 3/h + 1/h = 1, so 4/h = 1 and h = 4 (with k = 20). The value of h is uniquely determined, so Statement (1) alone is sufficient.

Statement (2) gives the combined rate 1/h + 1/k = 3/10. Together with the stem equation 3/h + 5/k = 1, this is a system of two linear equations in the two quantities 1/h and 1/k. Letting 1/k = 3/10 - 1/h and substituting into the stem equation gives 3/h + 5(3/10 - 1/h) = 1, which is 3/h + 3/2 - 5/h = 1, so -2/h = -1/2 and h = 4 (with k = 20). The value of h is uniquely determined, so Statement (2) alone is sufficient.

Because each statement alone determines that h = 4, each statement alone is sufficient.

The correct answer is D.
**mistake_a:** A accepts (1) but discards (2); yet the combined rate plus the stem equation is a full two-equation linear system in 1/h and 1/k.
**mistake_b:** B is the mirror error — (1) substituted into the stem equation gives 4/h = 1 directly.
**mistake_c:** C is the headline trap: "two unknowns, so I need both statements." The stem's completed-job scenario already contributes an equation, so each statement is the second equation, not the first.
**mistake_e:** E ignores the stem equation entirely, treating the scenario as flavor text. In DS, the stem's constraints are always live.
**common_trap:** Counting equations without counting the stem. When the stem describes a completed job, it hands you an equation for free.
**takeaway:** Before judging statements, extract every equation the stem already implies; sufficiency is about what each statement adds to that base.
**related_reading:** reading-quant-05-word-problems

---

## Q21
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Speed

A driver travels at 40 mph for the first hour of a trip and 60 mph for the second hour. What is the driver's average speed for the entire trip, in miles per hour?

- A) 46
- B) 48
- C) 49
- D) 50
- E) 52

**answer:** D
**fastest_path:** Equal one-hour legs, so the distances are 40 and 60 miles: 100 miles in 2 hours is 50 mph. With equal times, the simple mean is exact.
**hint_nudge:** The two speeds are held for equal TIMES here, so the simple average does work — but confirm with distance/time.
**hint_strategy:** average speed = total distance / total time; each leg lasts exactly 1 hour, so the distances equal the speeds.
**hint_setup:** Distance = 40 + 60 = 100 mi over total time 2 h; average = 100/2.
**explanation:** Average speed is defined as total distance divided by total time, so the governing method is to compute each quantity separately and then form the quotient; the arithmetic mean of two speeds applies only when the two speeds are sustained for equal amounts of time.

Let d_1 be the distance covered in the first hour and d_2 the distance covered in the second hour. Since distance equals rate times time, and each leg lasts exactly one hour, we have d_1 = (40)(1) = 40 miles and d_2 = (60)(1) = 60 miles.

The total distance is d_1 + d_2 = 40 + 60 = 100 miles, and the total time is 1 + 1 = 2 hours. Therefore the average speed is

100 / 2 = 50 miles per hour.

Because the two speeds are maintained for equal time intervals, this result is equivalent to taking their arithmetic mean: (40 + 60) / 2 = 100 / 2 = 50 miles per hour.

The correct answer is D.
**mistake_a:** 46 overcorrects below even the harmonic mean — doubly wrong direction for a question where no correction is needed.
**mistake_b:** 48 is the harmonic mean 2 × 40 × 60/100 — the equal-distance formula fired on autopilot. Here the TIMES are equal, so the plain average is correct.
**mistake_c:** 49 is a buffer between the two formula outputs (48 and 50), catching students who blend rather than choose.
**mistake_e:** 52 weights the faster hour too heavily; each speed governs exactly one hour, so neither leg dominates.
**common_trap:** Over-applying "never average speeds." That rule guards equal distances; for equal times the arithmetic mean literally equals total distance over total time.
**takeaway:** Diagnose the structure first: equal times — arithmetic mean; equal distances — harmonic mean. Both are just total distance ÷ total time in disguise.
**related_reading:** reading-quant-05-word-problems

---

## Q22
**difficulty:** Medium
**type:** Problem Solving
**topic:** Two Objects Moving

Two trains leave stations that are 450 miles apart, traveling toward each other along parallel tracks. Train A travels at 60 miles per hour and Train B travels at 75 miles per hour. They depart at the same time. How many miles from Train A's station will they meet?

- A) 180
- B) 200
- C) 210
- D) 225
- E) 250

**answer:** B
**fastest_path:** Distances split in the ratio of the speeds. Train A covers 60/(60 + 75) = 4/9 of the 450 miles: 200. No meeting time needed.
**hint_nudge:** Find WHEN they meet using the closing speed first, then convert that time into A's distance alone.
**hint_strategy:** Closing rate = 60 + 75; meeting time = 450 / closing rate; then A's distance = 60 x time.
**hint_setup:** 135t = 450 gives t = 10/3 h; distance from A = 60 x 10/3.
**explanation:** When two objects move directly toward each other, their separation decreases at a rate equal to the sum of their individual speeds. We apply this closing-rate principle together with the relationship distance = rate × time.

Let t = the number of hours each train travels before they meet. Because the trains depart simultaneously and move toward each other, they close the 450-mile gap at the combined rate of 60 + 75 = 135 miles per hour. The total distance covered by both trains together must equal the initial separation, so 135t = 450.

Solving for t, cancel the common factor 45 from numerator and denominator: 450 ÷ 45 = 10 and 135 ÷ 45 = 3, so t = 450/135 = 10/3 hours.

The question asks for the distance from Train A's station to the meeting point, which is the distance Train A travels. Since Train A moves at 60 miles per hour for 10/3 hours, its distance is 60 × (10/3) = 600/3 = 200 miles.

The correct answer is B.
**mistake_a:** 180 uses a 3-hour meeting time — rounding 450/135 = 10/3 hours down to 3 — with A's 60 mph. Keep 10/3 exact.
**mistake_c:** 210 is a buffer near the answer with no clean source; it punishes decimal-rounding the 10/3 hours mid-computation.
**mistake_d:** 225 is half of 450 — assuming they meet midway. The slower train covers less ground, so the meeting point sits closer to Train A's station.
**mistake_e:** 250 is Train B's distance (75 × 10/3) — the right method answering the wrong train. The stem asks for the distance from A's station.
**common_trap:** Computing everything correctly and then reporting B's 250 miles. Meeting problems almost always offer the other object's distance as a choice.
**takeaway:** In meeting problems each traveler covers a share of the gap proportional to its speed — A covers 60/135 = 4/9 of 450 here.
**related_reading:** reading-quant-05-word-problems

---

## Q23
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Combined Work

Machines X and Y operate at constant rates. Working together, they complete a job in 4 hours. How long would machine X alone take to complete the job?

(1) Machine Y alone would take twice as long as machine X alone to complete the job.
(2) Machine X alone would complete the job in 6 hours.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** D
**fastest_path:** The stem gives 1/x + 1/y = 1/4. (1) y = 2x collapses it to 3/(2x) = 1/4, so x = 6. (2) states x = 6 outright. Each alone suffices.
**hint_nudge:** The stem already gives 1/x + 1/y = 1/4; each statement either adds a relation or hands you x directly.
**hint_strategy:** Test each statement against the stem equation for a unique value of x.
**hint_setup:** (1) y = 2x gives 1/x + 1/(2x) = 1/4, i.e. 3/(2x) = 1/4. (2) states x = 6 outright.
**explanation:** This question concerns combined work rates, which are governed by the principle that the rates of machines working together add. If a machine completes a job in t hours, its rate is 1/t of the job per hour. Let x represent the number of hours machine X alone would need to complete the job, and let y represent the number of hours machine Y alone would need. The information that the two machines working together complete the job in 4 hours translates into the equation 1/x + 1/y = 1/4. The task is to determine the value of x.

Statement (1) provides that machine Y alone would take twice as long as machine X alone, which translates into y = 2x. Substituting this into the combined-rate equation gives 1/x + 1/(2x) = 1/4. Combining the two terms on the left over the common denominator 2x yields 2/(2x) + 1/(2x) = 3/(2x), so the equation becomes 3/(2x) = 1/4. Cross-multiplying gives 2x = 12, and therefore x = 6. A unique value for x is determined, so Statement (1) alone is sufficient.

Statement (2) provides directly that machine X alone would complete the job in 6 hours, which states x = 6. This is precisely the quantity requested, so Statement (2) alone is sufficient.

Because each statement alone determines the value of x, each statement alone is sufficient.

The correct answer is D.
**mistake_a:** A overlooks that statement (2) answers the question verbatim — usually from expecting sufficiency to require computation.
**mistake_b:** B overlooks that (1) plus the stem's combined-rate equation pins x: one ratio plus one absolute equation is a solvable pair.
**mistake_c:** C is the both-needed reflex; here either statement alone closes the system because the stem already carries the absolute anchor (the 4-hour together time).
**mistake_e:** E would require both statements together to leave x free; statement (2) alone literally states its value.
**common_trap:** Forgetting that the stem's "together in 4 hours" is an equation. With it, even a bare ratio like y = 2x becomes sufficient.
**takeaway:** A ratio statement is sufficient whenever the stem supplies the absolute anchor; a direct-value statement is sufficient on sight.
**related_reading:** reading-quant-05-word-problems

---

## Q24
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combined Work

Alex and Ben, working together, complete a job in 6 hours. Alex working alone would complete the same job in 10 hours. How long would Ben take working alone?

- A) 4 hours
- B) 8 hours
- C) 12 hours
- D) 15 hours
- E) 16 hours

**answer:** D
**fastest_path:** Product over difference: (10 × 6)/(10 − 6) = 60/4 = 15 hours.
**hint_nudge:** Rates add — B's rate is the combined rate minus A's rate.
**hint_strategy:** Compute 1/b = 1/6 - 1/10, then invert.
**hint_setup:** Over denominator 30: 1/b = 5/30 - 3/30.
**explanation:** This is a work-rate problem, and the governing principle is that individual rates of work add together to give a combined rate, where each rate is the reciprocal of the time required to complete one job alone.

Let b represent the number of hours Ben would need to complete the job working alone. Then Ben's rate of work is 1/b job per hour. Alex completes the job alone in 10 hours, so Alex's rate is 1/10 job per hour. Working together, the pair completes the job in 6 hours, so their combined rate is 1/6 job per hour.

Because the rates add, we have the equation

1/10 + 1/b = 1/6.

We solve for 1/b by subtracting 1/10 from both sides:

1/b = 1/6 - 1/10.

Using a common denominator of 30,

1/b = 5/30 - 3/30 = 2/30 = 1/15.

Taking the reciprocal of both sides gives b = 15. Therefore Ben would take 15 hours working alone.

The correct answer is D.
**mistake_a:** 4 is 10 − 6 — subtracting times. Times never subtract; rates do: 1/6 − 1/10 = 1/15.
**mistake_b:** 8 is the average of 10 and 6 — averaging times, equally invalid. The only legal arithmetic in combined work is on rates.
**mistake_c:** 12 doubles the together-time, which is right only for equal partners. Alex (10 h) is faster than that hypothetical 12-hour partner, so Ben must be slower than 12.
**mistake_e:** 16 is 10 + 6 — adding the times, the classic. The together-time is already shorter than either solo time; sums of times answer nothing here.
**common_trap:** Doing arithmetic on the times themselves — their difference (4), average (8), and sum (16) are all on offer. Only rates add and subtract.
**takeaway:** Partner's solo time = (known solo × together)/(known solo − together) = (10 × 6)/4 = 15. Sanity check: every solo time must exceed the together-time.
**related_reading:** reading-quant-05-word-problems

---

## Q25
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

A team of 8 workers can complete a project in 12 days. After 3 days of work by all 8 workers, 2 workers leave the team, and the remaining 6 workers continue at the same individual rate. How many additional days will the remaining workers need to complete the project?

- A) 9
- B) 10
- C) 12
- D) 15
- E) 18

**answer:** C
**hint_nudge:** Measure the whole job in worker-days; the total is fixed no matter who leaves.
**hint_strategy:** Total worker-days from the first scenario, minus phase-one work, divided by the new crew size.
**hint_setup:** Total = 8 x 12 = 96 worker-days; phase one uses 8 x 3 = 24; remaining 72 / 6 workers.
**explanation:** This problem is governed by the principle that the total amount of work in a job can be measured in worker-days, the product of the number of workers and the number of days they labor, and that this total is conserved regardless of how the workforce changes over time. Each worker contributes at the same constant individual rate, so the work completed by any group equals the number of workers multiplied by the number of days worked.

Let the total work required for the project be measured in worker-days. Because a team of 8 workers completes the project in 12 days, the total work equals 8 multiplied by 12, which is 96 worker-days.

During the first phase, all 8 workers labor for 3 days. The work completed in this phase equals 8 multiplied by 3, which is 24 worker-days.

The work that remains is therefore 96 minus 24, which equals 72 worker-days.

In the final phase, 2 of the workers leave, so 6 workers continue at the same individual rate. Let d be the number of additional days these 6 workers need. The work they complete equals 6 multiplied by d, and this must equal the remaining 72 worker-days. Thus 6d equals 72, which gives d equal to 12.

The remaining 6 workers need 12 additional days to complete the project.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q26
**difficulty:** Hard
**type:** Problem Solving
**topic:** Upstream-Downstream

A boat travels 24 miles downstream along a river, then returns the same 24 miles upstream. The boat's downstream speed is 4 miles per hour greater than its upstream speed. If the total time for the round trip is 5 hours, what is the boat's upstream speed?

- A) 5 mph
- B) 6 mph
- C) 7 mph
- D) 8 mph
- E) 10 mph

**answer:** D
**hint_nudge:** One distance, two speeds differing by a fixed amount, total time given — this becomes a quadratic in the upstream speed.
**hint_strategy:** Let upstream = u and downstream = u + 4; sum the two leg times to 5 and clear denominators, or test the answers.
**hint_setup:** 24/u + 24/(u+4) = 5. Testing u = 8: 24/8 + 24/12 = 3 + 2 = __ (target 5).
**explanation:** This is a uniform-rate problem in which a single distance is covered at two different speeds, so the governing relationship is time = distance / rate, and the total time is the sum of the times for the two legs.

Let u represent the boat's upstream speed in miles per hour. The downstream speed is 4 miles per hour greater, so it equals u + 4. Each leg covers 24 miles. The time for the downstream leg is therefore 24 / (u + 4), and the time for the upstream leg is 24 / u. Because the round trip takes 5 hours in total, we have

24 / u + 24 / (u + 4) = 5.

Multiplying both sides of the equation by u(u + 4) to clear the denominators gives

24(u + 4) + 24u = 5u(u + 4).

Expanding each side yields

24u + 96 + 24u = 5u^2 + 20u,

which simplifies to

48u + 96 = 5u^2 + 20u.

Moving all terms to one side produces the quadratic equation

5u^2 - 28u - 96 = 0.

Applying the quadratic formula, the discriminant is (-28)^2 - 4(5)(-96) = 784 + 1920 = 2704, and the square root of 2704 is 52. Thus

u = (28 + 52) / 10 = 80 / 10 = 8,

where the negative root is discarded because speed must be positive.

We verify this result: with u = 8, the upstream time is 24 / 8 = 3 hours and the downstream time is 24 / 12 = 2 hours, for a total of 5 hours, as required.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q27
**difficulty:** Easy
**type:** Problem Solving
**topic:** Unit Rates

A machine produces 100 widgets every 2.5 hours. At this rate, how many widgets will the machine produce in 7.5 hours?

- A) 200
- B) 250
- C) 275
- D) 300
- E) 350

**answer:** D
**explanation:** This problem applies the principle of a constant rate of work, under which output is directly proportional to time. The governing relationship is that the rate of production, expressed as widgets per hour, remains fixed, so the total output equals the rate multiplied by the elapsed time.

Let r represent the constant rate at which the machine produces widgets, measured in widgets per hour. The machine produces 100 widgets every 2.5 hours, so the rate is the quotient of the number of widgets and the number of hours.

We compute the rate as follows:

r = 100 / 2.5 = 40 widgets per hour.

Let W represent the number of widgets produced in 7.5 hours. Because the rate is constant, the total output equals the rate multiplied by the time:

W = r * 7.5 = 40 * 7.5 = 300 widgets.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q28
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combined Work

Alice can paint a wall in 12 hours, Bob can paint the same wall in 18 hours, and Carol can paint it in 9 hours. How long will it take all three working together?

- A) 2 hours
- B) 3 hours
- C) 4 hours
- D) 5 hours
- E) 6 hours

**answer:** C
**explanation:** In combined-work problems, individual rates of work add directly, whereas the times required do not. Each worker's rate is the fraction of the wall painted in one hour, that is, the reciprocal of the time that worker needs alone.

Let the task be painting one wall. Alice's rate is 1/12 of the wall per hour, Bob's rate is 1/18 of the wall per hour, and Carol's rate is 1/9 of the wall per hour. Working together, their combined rate is the sum of the three individual rates.

We add the rates using a common denominator. The least common denominator of 12, 18, and 9 is 36:

1/12 + 1/18 + 1/9 = 3/36 + 2/36 + 4/36 = 9/36 = 1/4.

Thus the three workers together paint 1/4 of the wall per hour. The time required to complete one whole wall is the reciprocal of the combined rate:

T = 1 / (1/4) = 4 hours.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q29
**difficulty:** Easy
**type:** Problem Solving
**topic:** Unit Rates

A printer produces pages at a constant rate of 8 pages per minute. How many minutes will it take to print a 200-page document?

- A) 20
- B) 22
- C) 25
- D) 30
- E) 40

**answer:** C
**explanation:** When a quantity is produced at a constant rate, the time required equals the total output divided by the rate. This relationship follows directly from Output = Rate * Time, which we may rearrange as Time = Output / Rate.

Let T be the number of minutes required to print the document. The printer's rate is 8 pages per minute, and the total output is 200 pages. Substituting these values gives

T = Output / Rate = 200 pages / (8 pages per minute).

Carrying out the division, we obtain

T = 200 / 8 = 25.

We confirm the units: dividing pages by pages per minute leaves minutes, so T = 25 minutes, as required.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q30
**difficulty:** Easy
**type:** Problem Solving
**topic:** Combined Work

Machine A produces widgets at twice the rate of machine B. Machine B takes 18 hours to complete a production batch alone. How long will it take both machines working together to complete the same batch?

- A) 4 hours
- B) 5 hours
- C) 6 hours
- D) 8 hours
- E) 9 hours

**answer:** C
**explanation:** This is a work-rate problem, and the governing principle is that rates of work add when machines operate simultaneously. A machine's rate is the fraction of the batch it completes in one hour, which is the reciprocal of the time it needs to finish the batch alone.

Let the size of the production batch be 1 batch. Machine B completes the batch alone in 18 hours, so its rate is

Rate_B = 1/18 batch per hour.

Machine A produces widgets at twice the rate of machine B. "Twice the rate" applies to the rate itself, not to the time, so

Rate_A = 2 * (1/18) = 2/18 batch per hour.

When both machines work together, their rates add. The combined rate is

Rate_A + Rate_B = 2/18 + 1/18 = 3/18 = 1/6 batch per hour.

The time required to complete 1 batch at this combined rate is the reciprocal of the rate:

T = 1 / (1/6) = 6 hours.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q31
**difficulty:** Easy
**type:** Problem Solving
**topic:** Work Rate Basics

Worker A can complete a job in 8 hours. After working alone for 2 hours, what fraction of the job remains unfinished?

- A) 1/4
- B) 1/3
- C) 1/2
- D) 3/4
- E) 5/8

**answer:** D
**explanation:** This problem is governed by the principle that a worker who completes a job in a fixed amount of time works at a constant rate equal to the reciprocal of that time, and that the fraction of the job remaining is 1 minus the fraction completed.

Let the entire job be represented by 1. Worker A completes the job in 8 hours, so A's rate of work is 1/8 of the job per hour.

The fraction of the job completed in a given period equals the rate multiplied by the time worked. Working alone for 2 hours, A completes

2 x (1/8) = 2/8 = 1/4

of the job.

The fraction remaining unfinished is therefore the whole job minus the fraction completed:

1 - 1/4 = 4/4 - 1/4 = 3/4.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q32
**difficulty:** Easy
**type:** Problem Solving
**topic:** Distance-Rate-Time

A runner's pace is 8 minutes per mile. At this pace, how many miles will the runner cover in exactly 1 hour?

- A) 6.0
- B) 6.5
- C) 7.0
- D) 7.5
- E) 8.0

**answer:** D
**explanation:** This problem applies the relationship among distance, rate, and time, namely that distance equals rate multiplied by time. The runner's pace is given as a duration per unit distance, so it must first be converted into a rate of distance per unit time before it can be combined with the elapsed time.

Let the runner's pace be 8 minutes per mile. Pace and speed are reciprocals of one another. Since the runner requires 8 minutes to cover each mile, the runner covers 1/8 of a mile in each minute. Thus the speed is 1/8 mile per minute.

Let d be the distance covered in 1 hour. One hour equals 60 minutes, so the time, expressed in the same units as the speed, is 60 minutes. Applying distance equals rate multiplied by time, we have

d = (1/8 mile per minute)(60 minutes) = 60/8 miles.

Simplifying the quotient gives

60/8 = 7.5 miles.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q33
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

Printer A can complete a print job alone in 10 hours. Printer A works alone for 4 hours, then Printer B joins and together they finish the remaining work in exactly 2 hours. How long would Printer B take to complete the same job alone?

- A) 4 hours
- B) 5 hours
- C) 6 hours
- D) 8 hours
- E) 10 hours

**answer:** B
**hint_nudge:** Two phases: A alone, then A and B together. Track the fraction left after phase one.
**hint_strategy:** A's 4-hour work subtracted from 1 gives the remaining job; divide it by 2 h for the pair's combined rate.
**hint_setup:** A does 4/10 = 2/5; remaining 3/5 in 2 h gives combined rate 3/10. Then 1/10 + 1/B = 3/10.
**explanation:** Work problems of this type are governed by the principle that rates of work are additive: when two machines operate simultaneously, their combined rate equals the sum of their individual rates, and the fraction of a job completed equals rate multiplied by time. The strategy here is to track the job in two phases, determine the fraction completed in each, and then isolate the unknown rate.

Let the entire print job represent 1 unit of work. Since Printer A completes the job alone in 10 hours, its rate is 1/10 of the job per hour. Let B be the number of hours Printer B requires to complete the job alone, so that Printer B's rate is 1/B of the job per hour.

In the first phase, Printer A works alone for 4 hours. The fraction of the job completed is therefore:

4 multiplied by 1/10 = 4/10 = 2/5.

The fraction of the job that remains is:

1 minus 2/5 = 3/5.

In the second phase, Printers A and B work together and finish the remaining 3/5 of the job in exactly 2 hours. The combined rate during this phase is the remaining work divided by the time:

(3/5) divided by 2 = 3/10 of the job per hour.

Because rates are additive, the combined rate equals the sum of the two individual rates:

1/10 + 1/B = 3/10.

Solving for 1/B:

1/B = 3/10 minus 1/10 = 2/10 = 1/5.

Taking the reciprocal of both sides gives:

B = 5.

Thus Printer B would take 5 hours to complete the job alone.

The correct answer is B.
**related_reading:** reading-quant-05-word-problems

---

## Q34
**difficulty:** Medium
**type:** Problem Solving
**topic:** Combined Work

A tank has an inlet pipe that fills it in 6 hours and an outlet pipe (drain) that empties a full tank in 10 hours. If the tank starts empty and both pipes are open simultaneously, how long will it take to fill the tank?

- A) 4 hours
- B) 8 hours
- C) 12 hours
- D) 15 hours
- E) 16 hours

**answer:** D
**hint_nudge:** The drain works AGAINST the inlet — subtract its rate rather than add it.
**hint_strategy:** Net rate = inlet rate - outlet rate; total time = 1 / net rate.
**hint_setup:** Net rate = 1/6 - 1/10. Over denominator 30: 5/30 - 3/30.
**explanation:** This is a combined-work problem in which two agents act in opposing directions, so the governing principle is that simultaneous rates are additive when measured with a consistent sign: the net rate at which the tank fills equals the inlet rate minus the outlet rate, and the total time is the reciprocal of that net rate.

Let the capacity of the tank be 1 full tank. The inlet pipe fills the tank in 6 hours, so its rate is 1/6 of the tank per hour. The outlet pipe empties a full tank in 10 hours, so it removes 1/10 of the tank per hour. Because the outlet works against the inlet, its contribution to the filling is negative.

The net filling rate, in tanks per hour, is therefore

1/6 - 1/10.

Expressing both fractions over the least common denominator 30 gives

1/6 = 5/30 and 1/10 = 3/30,

so the net rate is

5/30 - 3/30 = 2/30 = 1/15 of the tank per hour.

Let T be the number of hours required to fill the tank. Since rate multiplied by time equals the work completed, and the work to be completed is 1 full tank,

(1/15)(T) = 1.

Solving for T yields

T = 15.

Thus, with both pipes open, the tank fills in 15 hours.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q35
**difficulty:** Medium
**type:** Problem Solving
**topic:** Distance-Rate-Time

Elena commutes 90 miles to work. By driving 15 mph faster than her usual speed, she arrives 30 minutes earlier. What is her usual driving speed in mph?

- A) 30
- B) 35
- C) 40
- D) 45
- E) 50

**answer:** D
**hint_nudge:** Same 90-mile distance at two speeds; the 30-minute saving is 0.5 hour.
**hint_strategy:** Set 90/r - 90/(r+15) = 1/2, or test the answer choices for the half-hour gap.
**hint_setup:** Testing r = 45: 90/45 - 90/60 = 2 - 1.5 = __ h (target 1/2 h).
**explanation:** This problem is governed by the relationship distance = rate × time, which can be rearranged to time = distance ÷ rate. Because the same 90-mile distance is covered at two different speeds, the difference between the two travel times equals the 30 minutes saved.

Let r denote Elena's usual speed in miles per hour. Her faster speed is then r + 15 miles per hour. The time required at the usual speed is 90/r hours, and the time required at the faster speed is 90/(r + 15) hours. Because driving at the faster speed saves 30 minutes, which is 0.5 hour, the slower trip takes 0.5 hour longer than the faster trip. This translates into the equation

90/r − 90/(r + 15) = 0.5.

Multiplying both sides by r(r + 15) clears the denominators:

90(r + 15) − 90r = 0.5 · r(r + 15).

Expanding the left side gives 90r + 1350 − 90r = 1350, so

1350 = 0.5(r² + 15r).

Multiplying both sides by 2 yields

2700 = r² + 15r,

which rearranges to the quadratic equation

r² + 15r − 2700 = 0.

Factoring, we seek two numbers whose product is −2700 and whose sum is 15; these are 60 and −45, giving

(r − 45)(r + 60) = 0.

The solutions are r = 45 and r = −60. Since a driving speed must be positive, r = 45.

As a check, at 45 miles per hour the trip takes 90/45 = 2 hours, and at 60 miles per hour it takes 90/60 = 1.5 hours; the difference is 0.5 hour, or 30 minutes, exactly as required.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q36
**difficulty:** Medium
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

Workers A, B, and C together can complete a project in 6 hours. After working together for 2 hours, Worker C leaves and A and B finish the remaining work in 8 more hours. How long would Worker C take to complete the project alone?

- A) 8 hours
- B) 10 hours
- C) 12 hours
- D) 15 hours
- E) 18 hours

**answer:** C
**hint_nudge:** You can recover C's rate by subtracting the A+B rate from the all-three rate.
**hint_strategy:** Find what's left after 2 h of all three, get A+B's rate from finishing it in 8 h, then C = (all three) - (A+B).
**hint_setup:** All three do 2/6 = 1/3; remaining 2/3 by A+B in 8 h gives A+B rate 1/12. Then C = 1/6 - 1/12.
**explanation:** The governing principle for combined-work problems is that rates are additive: when several workers labor simultaneously, the fraction of the project completed equals the sum of their individual rates multiplied by the time worked. A team's rate can therefore be recovered from the amount of work it completes during a given interval, and a single worker's rate can be isolated by subtracting one team's rate from another.

Let the entire project equal 1 unit of work. Because A, B, and C together complete the project in 6 hours, their combined rate is 1/6 of the project per hour.

During the first phase, all three work together for 2 hours. The fraction completed in this phase is the combined rate multiplied by the time:

2 x (1/6) = 2/6 = 1/3.

Thus 1/3 of the project is finished, and the remaining work is

1 - 1/3 = 2/3.

During the second phase, A and B finish the remaining 2/3 of the project in 8 hours. The combined rate of A and B is the work completed divided by the time taken:

(2/3) / 8 = 2/24 = 1/12 of the project per hour.

C's rate is the combined rate of all three workers minus the combined rate of A and B:

1/6 - 1/12 = 2/12 - 1/12 = 1/12 of the project per hour.

Since C completes 1/12 of the project each hour, the time C requires to complete the entire project alone is the reciprocal of this rate:

1 / (1/12) = 12 hours.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q37
**difficulty:** Medium
**type:** Problem Solving
**topic:** Average Speed

A delivery truck drives 60 miles at 30 mph, then 90 miles at 45 mph, then 30 miles at 60 mph. What is the truck's average speed for the entire trip in mph?

- A) 35
- B) 37.5
- C) 40
- D) 42.5
- E) 45

**answer:** C
**hint_nudge:** Three legs of different length and speed — only total distance over total time gives the average.
**hint_strategy:** Compute each leg's time, sum the distances, sum the times, then divide.
**hint_setup:** Times 60/30 = 2, 90/45 = 2, 30/60 = 0.5 h; average = 180 mi / __ h.
**explanation:** Average speed is governed by a single relationship: the average speed over an entire trip equals the total distance traveled divided by the total time elapsed. This quantity cannot be obtained by averaging the individual leg speeds, because the legs differ in both distance and duration. We must therefore compute the total distance and the total time separately, then divide.

Let t₁, t₂, and t₃ denote the times, in hours, required for the three legs of the trip. Since time equals distance divided by speed, we translate each leg as follows.

For the first leg, t₁ = 60/30 = 2 hours.
For the second leg, t₂ = 90/45 = 2 hours.
For the third leg, t₃ = 30/60 = 0.5 hour.

The total distance traveled is the sum of the three leg distances:
60 + 90 + 30 = 180 miles.

The total time elapsed is the sum of the three leg times:
2 + 2 + 0.5 = 4.5 hours.

Applying the governing relationship, the average speed for the entire trip is found by clearing the decimal: 4.5 = 9/2, so 180 ÷ (9/2) = 180 × (2/9) = (180/9) × 2 = 20 × 2 = 40 mph.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q38
**difficulty:** Medium
**type:** Data Sufficiency
**topic:** Combined Work

Two machines, M and N, work at constant rates producing identical components. Working together, how long does it take M and N to produce 60 components?

(1) Machine M alone produces 40 components per hour.
(2) Machine N alone produces 12 components in 1 hour and 12 minutes.

- A) Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**hint_nudge:** To time 60 components you need the COMBINED rate, which means both machines' rates.
**hint_strategy:** Each statement gives only one machine's rate; check whether either pins down both.
**hint_setup:** (1) gives only M (40/hr); (2) gives only N (10/hr). Neither alone fixes m + n — consider them together.
**explanation:** This question asks for the time required for machines M and N, working together at their constant rates, to produce 60 components. When objects work together, their individual rates add, so the combined rate equals the rate of M plus the rate of N. The time to complete a fixed amount of work equals that amount divided by the combined rate. To determine the requested time, we therefore need the combined rate, which requires knowing both individual rates.

Let m denote the rate of machine M and n denote the rate of machine N, each measured in components per hour. The quantity sought is 60 divided by the quantity (m + n).

Statement (1) establishes that m = 40 components per hour. It provides no information about n. Without the value of n, the combined rate m + n cannot be determined, and so the time cannot be found. Statement (1) alone is not sufficient.

Statement (2) establishes that machine N produces 12 components in 1 hour and 12 minutes. We convert the time to hours: 12 minutes is 12 divided by 60, which equals 0.2 hour, so the elapsed time is 1.2 hours. The rate is then n = 12 divided by 1.2; clearing the decimal, 1.2 = 6/5, so 12 ÷ (6/5) = 12 × (5/6) = (12/6) × 5 = 2 × 5 = 10 components per hour. This determines n but provides no information about m. Without the value of m, the combined rate m + n cannot be determined, and so the time cannot be found. Statement (2) alone is not sufficient.

Taking the two statements together, we have m = 40 and n = 10. The combined rate is m + n = 40 + 10 = 50 components per hour. The required time is 60 divided by 50, which equals 1.2 hours. This is a single determined value, so both statements together are sufficient.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q39
**difficulty:** Medium
**type:** Problem Solving
**topic:** Upstream-Downstream

A boat travels 30 miles downstream in 2 hours and returns 30 miles upstream in 3 hours. What is the speed of the current in miles per hour?

- A) 1.5
- B) 2.0
- C) 2.5
- D) 3.0
- E) 5.0

**answer:** C
**hint_nudge:** Downstream speed = boat + current, upstream = boat - current; their DIFFERENCE isolates the current.
**hint_strategy:** Get both effective speeds, then subtract the equations to eliminate the boat's still-water speed.
**hint_setup:** b + c = 30/2 = 15, b - c = 30/3 = 10; subtract to get 2c = __.
**explanation:** This problem concerns motion in a current, where the boat's effective speed is its speed in still water adjusted by the speed of the current. When traveling downstream, the current adds to the boat's still-water speed; when traveling upstream, the current subtracts from it. Each effective speed equals distance divided by time.

Let b denote the speed of the boat in still water, in miles per hour, and let c denote the speed of the current, in miles per hour. The downstream effective speed is b + c, and the upstream effective speed is b − c.

For the downstream trip, the boat travels 30 miles in 2 hours, so its effective speed is

b + c = 30 / 2 = 15.

For the upstream trip, the boat travels 30 miles in 3 hours, so its effective speed is

b − c = 30 / 3 = 10.

We now have two equations:

b + c = 15
b − c = 10.

Subtracting the second equation from the first eliminates b:

(b + c) − (b − c) = 15 − 10,
2c = 5,
c = 2.5.

Thus the speed of the current is 2.5 miles per hour.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q40
**difficulty:** Hard
**type:** Problem Solving
**topic:** Combined Work

Workers A, B, and C together complete a task in 4 hours. Workers A and B together take 6 hours for the same task. Workers B and C together take 5 hours. How many hours would Worker A take alone?

- A) 10
- B) 12
- C) 15
- D) 20
- E) 24

**answer:** D
**hint_nudge:** You do not need each individual rate — subtract the right pair to leave A alone.
**hint_strategy:** A's rate = (all three) - (B+C); the B+C group is exactly the one that excludes A.
**hint_setup:** rA = 1/4 - 1/5. Over denominator 20: 5/20 - 4/20.
**explanation:** The governing principle for combined-work problems is that rates add: when several workers labor simultaneously, their individual rates of completing the task sum to the rate of the group. A rate is expressed as the fraction of the task completed in one hour, which is the reciprocal of the time the worker or group requires to finish the entire task alone.

Let rA, rB, and rC denote the rates of Workers A, B, and C, respectively, each measured in tasks per hour. Translating each given time into a rate, we obtain the following three equations.

The three workers together complete the task in 4 hours, so rA + rB + rC = 1/4.
Workers A and B together complete it in 6 hours, so rA + rB = 1/6.
Workers B and C together complete it in 5 hours, so rB + rC = 1/5.

To isolate rA, we subtract the rate of the group that excludes A, namely B and C together, from the rate of all three workers together. This eliminates both rB and rC and leaves rA alone.

rA = (rA + rB + rC) − (rB + rC) = 1/4 − 1/5.

Using a common denominator of 20, we have 1/4 = 5/20 and 1/5 = 4/20, so

rA = 5/20 − 4/20 = 1/20.

Worker A completes 1/20 of the task each hour, so Worker A alone requires the reciprocal of this rate, which is 20 hours.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q41
**difficulty:** Hard
**type:** Data Sufficiency
**topic:** Combined Work

Machine P takes p hours to complete a job alone and machine Q takes q hours alone. What is the value of p?

(1) p/q = 3/4
(2) Working together, P and Q complete the job in 12/7 hours.

- A) Statement (1) ALONE is sufficient, but statement (2) alone is not sufficient.
- B) Statement (2) ALONE is sufficient, but statement (1) alone is not sufficient.
- C) BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- D) EACH statement ALONE is sufficient.
- E) Statements (1) and (2) TOGETHER are NOT sufficient.

**answer:** C
**hint_nudge:** A ratio alone fixes only proportion; one combined-rate equation alone leaves two unknowns.
**hint_strategy:** Each statement is one equation in p and q — one equation cannot pin a single p. See if the two together form a solvable system.
**hint_setup:** (1) p = (3/4)q; (2) 1/p + 1/q = 7/12. Each alone is one equation in two unknowns.
**explanation:** This is a value question, so a statement is sufficient only if it forces a single numerical value of p. The governing principle for work rates is that a machine completing a job in t hours works at a rate of 1/t of the job per hour, and the rates of machines working together add. Let the rate of machine P be 1/p and the rate of machine Q be 1/q.

Statement (1): The relation p/q = 3/4 can be rewritten as p = (3/4)q. This is a single equation relating the two unknowns p and q, and it fixes only their proportion, not their actual sizes. For instance, p = 3 with q = 4 satisfies it, and so does p = 6 with q = 8. Because p is not determined to a single value, statement (1) is not sufficient.

Statement (2): Completing the job together in 12/7 hours means the combined rate is the reciprocal of 12/7, namely 7/12 of the job per hour. Adding the individual rates gives 1/p + 1/q = 7/12. This is again one equation in the two unknowns p and q, so it does not determine p to a single value. For instance, p = 2 with q = 12/(7 - 6) = 12 satisfies it, and other pairs do as well. Therefore statement (2) is not sufficient.

Taking the statements together: from statement (1), q = (4/3)p. Substituting this into the equation from statement (2) yields 1/p + 1/((4/3)p) = 7/12, that is 1/p + 3/(4p) = 7/12. Combining the terms on the left over the common denominator 4p gives 4/(4p) + 3/(4p) = 7/(4p), so 7/(4p) = 7/12. Cross multiplying gives 7 times 12 = 7 times 4p, hence 4p = 12 and p = 3. The two statements together form a system of two independent equations in two unknowns that yields the unique value p = 3 (with q = 4). The statements together are sufficient, but neither statement alone is sufficient.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q42
**difficulty:** Hard
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

A factory uses three identical machines to complete a production run. All three together would finish the run in 6 hours. After 2 hours of running all three, one machine breaks down and the remaining two continue until the run is complete. How many total hours does the production run take?

- A) 6
- B) 7
- C) 8
- D) 9
- E) 12

**answer:** C
**hint_nudge:** Find ONE machine's rate first; the three identical machines share the combined rate equally.
**hint_strategy:** Single-machine rate = combined / 3; run the 2-hour all-three phase, then finish the rest with two machines.
**hint_setup:** Each machine = (1/6)/3 = 1/18; all three in 2 h do 1/3; remaining 2/3 at 2 x 1/18 = 1/9 gives time (2/3)/(1/9), then add 2.
**explanation:** Combined work rates add, and the rate of a single worker is the combined rate divided by the number of identical workers. Let r denote the rate of one machine, measured in runs per hour. Since the three identical machines together complete the run in 6 hours, their combined rate is 1/6 of the run per hour. Three identical machines share this rate equally, so each machine works at r = (1/6) / 3 = 1/18 of the run per hour.

The job proceeds in two phases. In the first phase all three machines run for 2 hours, completing 3 × (1/18) × 2 = 6/18 = 1/3 of the run. The fraction of the run remaining is therefore 1 - 1/3 = 2/3.

In the second phase only two machines continue, working at a combined rate of 2 × (1/18) = 2/18 = 1/9 of the run per hour. The time required to finish the remaining 2/3 of the run is (2/3) / (1/9) = (2/3) × 9 = 6 hours.

The total time for the production run is the sum of the two phase durations: 2 + 6 = 8 hours.

The correct answer is C.
**related_reading:** reading-quant-05-word-problems

---

## Q43
**difficulty:** Medium
**type:** Problem Solving
**topic:** Two Objects Moving

Two runners, P and Q, start at the same point on a 240-meter circular track and run in the same direction. P runs at 8 meters per second and Q runs at 6 meters per second. How many seconds after the start will P first lap Q — that is, be exactly one full track length ahead of Q?

- A) 30
- B) 40
- C) 80
- D) 120
- E) 480

**answer:** D
**hint_nudge:** To lap, the faster runner must gain one FULL track length on the slower one — the gain accrues at the speed difference.
**hint_strategy:** time to lap = track length / (difference in speeds).
**hint_setup:** Gain rate = 8 - 6 = 2 m/s; need 240 m, so t = 240/2.
**explanation:** When two objects move along a circular track in the same direction, the faster object gains on the slower one at a rate equal to the difference of their speeds. The faster object laps the slower object when this accumulated gain equals one full track length, so the governing relation is: time to lap = track length divided by the difference in speeds.

Let t be the number of seconds after the start at which P first laps Q. P runs at 8 meters per second and Q runs at 6 meters per second, so in t seconds P travels 8t meters and Q travels 6t meters. Because they start at the same point and run in the same direction, P's lead over Q after t seconds is the difference of these distances:

8t − 6t = 2t.

Lapping requires this lead to equal exactly one full track length of 240 meters:

2t = 240.

Solving for t:

t = 240 / 2 = 120.

Thus P first laps Q 120 seconds after the start.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems

---

## Q44
**difficulty:** Hard
**type:** Problem Solving
**topic:** Multi-Phase Work Rates

A contractor has two crews. Crew X takes x hours to complete a project alone; Crew Y takes y hours alone.

Scenario 1: Crew X works alone for 3 hours, then Crew Y works alone to finish. The total time is 11 hours.
Scenario 2: Crew Y works alone for 2 hours, then Crew X works alone to finish. The total time is 8 hours.

What is the value of x + y?

- A) 15
- B) 17
- C) 19
- D) 21
- E) 24

**answer:** D
**hint_nudge:** Each scenario is a 'works alone for a while, then the other finishes' equation; the work fractions sum to 1.
**hint_strategy:** Let a = 1/x and b = 1/y to linearize; write one equation per scenario and solve the 2x2 system.
**hint_setup:** Scenario 1: 3a + 8b = 1; Scenario 2: 6a + 2b = 1. Solve for a, then recover x and y.
**explanation:** For work-rate problems, the governing principle is that the fraction of a project completed by a crew equals the crew's rate multiplied by the time it works, and the fractions completed by all crews must sum to 1 when the project is finished. A crew that requires t hours alone has a rate of 1/t of the project per hour.

Let x be the number of hours Crew X needs to complete the project alone, and let y be the number of hours Crew Y needs alone. Then Crew X works at a rate of 1/x per hour and Crew Y at a rate of 1/y per hour.

In Scenario 1, Crew X works alone for 3 hours and Crew Y then works alone to finish, with a total elapsed time of 11 hours. The time Crew Y actually works is therefore 11 minus 3, which equals 8 hours. The portions of the project completed sum to the whole project:

3/x + 8/y = 1.

In Scenario 2, Crew Y works alone for 2 hours and Crew X then works alone to finish, with a total elapsed time of 8 hours. The time Crew X actually works is therefore 8 minus 2, which equals 6 hours. Again the portions sum to the whole project:

6/x + 2/y = 1.

To simplify the system, we let a = 1/x and b = 1/y. The two equations become:

3a + 8b = 1,
6a + 2b = 1.

We solve the second equation for b:

2b = 1 - 6a,
b = (1 - 6a)/2.

Substituting this expression into the first equation gives:

3a + 8 multiplied by (1 - 6a)/2 = 1,
3a + 4(1 - 6a) = 1,
3a + 4 - 24a = 1,
-21a = -3,
a = 1/7.

Since a = 1/x, we have x = 7. We then compute b:

b = (1 - 6/7)/2 = (1/7)/2 = 1/14,

so y = 14.

We verify both equations. For Scenario 1, 3/7 + 8/14 = 3/7 + 4/7 = 7/7 = 1. For Scenario 2, 6/7 + 2/14 = 6/7 + 1/7 = 7/7 = 1. Both check.

Therefore x + y = 7 + 14 = 21.

The correct answer is D.
**related_reading:** reading-quant-05-word-problems
