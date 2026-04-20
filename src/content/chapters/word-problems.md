---
slug: word-problems
title: Word Problems
section: Quant
estimated_minutes: 55
prerequisites: []
summary: |
  "Word problems" isn't a topic — it's a translation skill that sits on top of every topic. The question gives you English; you need algebra. This chapter trains the translation habits that convert "twice as many as" and "three years from now" into equations you can actually solve, plus the six most common structural patterns: rate/time/distance, work, mixtures, profit/percent, ages, and sets/Venn. Master the translation rules and the specific templates, and word problems become 60-second setup + 30-second solve.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - word-problems-q3
      - word-problems-q17

  - id: translation-discipline
    type: reading
    title: "Translation discipline — English to algebra without losing the meaning"
    check_question_ids:
      - word-problems-q13
      - word-problems-q14

  - id: rate-time-distance
    type: reading
    title: "Rate, time, distance — D = RT inside a word problem"
    check_question_ids:
      - word-problems-q1
      - word-problems-q5
      - word-problems-q9

  - id: work-rate-problems
    type: reading
    title: "Work rate — add the rates, never the times"
    check_question_ids:
      - word-problems-q4
      - word-problems-q6
      - word-problems-q10

  - id: mixtures
    type: reading
    title: "Mixtures — the acid/alloy/coffee setup"
    check_question_ids:
      - word-problems-q7
      - word-problems-q11

  - id: profit-and-percent
    type: reading
    title: "Profit, markup, and percent change"
    check_question_ids:
      - word-problems-q2
      - word-problems-q8

  - id: ages-coins-digits
    type: reading
    title: "Ages, coins, and digit problems"
    check_question_ids:
      - word-problems-q12
      - word-problems-q15
      - word-problems-q16
      - word-problems-q18

  - id: sets-and-venn
    type: reading
    title: "Sets and Venn diagrams — the inclusion-exclusion template"
    check_question_ids:
      - word-problems-q17
      - word-problems-q19

  - id: max-min-optimization
    type: reading
    title: "Max/min and optimization — extremes under constraint"
    check_question_ids: []

  - id: summary
    type: summary
    title: "The seven patterns and the translation habits"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - word-problems-q1
      - word-problems-q2
      - word-problems-q3
      - word-problems-q4
      - word-problems-q13
      - word-problems-q14
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q5
      - word-problems-q6
      - word-problems-q7
      - word-problems-q8
      - word-problems-q15
      - word-problems-q16
      - word-problems-q17
      - word-problems-q18
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - word-problems-q9
      - word-problems-q10
      - word-problems-q11
      - word-problems-q12
      - word-problems-q19
      - word-problems-q20
---

## @translation-discipline

Every word problem is two tasks welded together: translate English into algebra, then solve. Most errors happen in the first step — students set up the wrong equation and then solve the wrong equation correctly. Four discipline habits eliminate 90% of translation errors.

**Habit 1: Define your variable explicitly, in words, with units.**

Not "x = amount" but "x = the number of dimes in the piggy bank." Writing out what the variable stands for — in full, with units — prevents the single most common mistake: solving for the wrong quantity.

Look at this problem: "Maria is 3 times as old as her daughter. If her daughter is 8, how old will Maria be in 6 years?" If you let `x = Maria's current age`, you'll answer 24. If you let `x = Maria's age in 6 years`, you'll answer 30. The algebra is fine either way; the question wants a specific one. Writing the variable clearly keeps you aimed at what the question actually asks.

**Habit 2: Translate phrases literally, one clause at a time.**

English-to-algebra is a word-by-word conversion, not a summary. Build the equation clause by clause.

| English phrase | Algebra |
|---|---|
| "x more than y" | y + x |
| "x less than y" | y − x |
| "twice as many as y" | 2y |
| "three times as old as" | 3 × (age of other) |
| "x years from now" | (current age) + x |
| "x years ago" | (current age) − x |
| "the sum of A and B" | A + B |
| "the product of A and B" | A × B |
| "the ratio of A to B" | A/B |
| "x is p% of y" | x = (p/100) × y |

**The word "is" = equals.** "Twice the sum of x and 3 is 20" becomes 2(x + 3) = 20. The equality always lives at "is."

**Habit 3: Pick which unknown to call the variable strategically.**

Given a choice, let the variable stand for the quantity that gives the cleanest equation. If one person is defined in terms of another ("John is 5 years older than Mary"), let Mary = x and John = x + 5, not the other way — the "+5" is cleaner than "−5."

**Example.** Three consecutive integers sum to 72. Find the largest.

Option A: let x = smallest. Integers: x, x+1, x+2. Sum: 3x + 3 = 72, so x = 23. Largest = 25.

Option B: let x = middle. Integers: x−1, x, x+1. Sum: 3x = 72, so x = 24. Largest = 25.

Option B is faster because the middle is the mean of the three — there's no "+1 +2" arithmetic. For any evenly-spaced group, let the middle element be the variable.

**Habit 4: Check your answer by plugging back into the *original English*.**

After you get a numeric answer, read the problem again and verify that your number satisfies every stated condition. Not the algebra — the English. If you answered "30" but the problem says "Maria is 3× her 8-year-old daughter's age now," check: 3 × 8 = 24, not 30 — but the question asked about 6 years from now, and 24 + 6 = 30. ✓

This single habit catches 80% of translation errors.

**Two-variable setups.** Many word problems force two variables (ages, coins, mixtures). Write two equations, then solve by substitution or elimination.

**Example (ages).** Sara is twice as old as Tom was 10 years ago. Their ages sum to 62 now. Sara's age?

- Let S = Sara now, T = Tom now.
- Equation 1 (sum now): S + T = 62
- Equation 2 (Sara was twice Tom 10 years ago): S − 10 = 2(T − 10)

Simplify eq 2: S − 10 = 2T − 20, so S = 2T − 10. Substitute into eq 1: (2T − 10) + T = 62, so 3T = 72, T = 24. Then S = 62 − 24 = **38**.

Verify: 10 years ago, Sara was 28 and Tom was 14. Was 28 = 2 × 14? Yes. ✓

**Note on the James-and-nephew problem.** Same template. Two clauses → two equations → substitute or eliminate. The arithmetic is more complex, but the structure is identical.

> **Self-explanation prompt.** Why does picking the "middle" variable work for consecutive-integer problems? If you can say "because the middle is the mean, so the sum collapses to (count)(middle) with no extra +1, +2 terms," you've internalized the why — and you'll apply it to evenly-spaced sets of any size.

## @rate-time-distance

Rate-time-distance word problems follow one equation: **D = RT**. The "word problem" part is which quantity is R, which is T, and which is D — and whether units match.

**Single-object template.** Given two of (D, R, T), solve for the third.

- Distance = Rate × Time
- Rate = Distance / Time
- Time = Distance / Rate

**Example.** Car travels 60 mph for 2.5 hours. Distance?

    D = 60 × 2.5 = 150 miles

**Unit consistency.** If the rate is in mph, time must be in hours, not minutes. "Travels at 20 mph for 30 minutes" → convert: 30 min = 0.5 hour → D = 20 × 0.5 = 10 miles.

**Two-object template — catch-up (same direction).** One object starts earlier; the other catches up.

Train A leaves at 70 mph. Two hours later, Train B leaves the same direction at 90 mph. When does B overtake A?

- Head start of A: 70 × 2 = 140 miles
- Closing rate: 90 − 70 = 20 mph (same direction → subtract speeds)
- Time to close: 140 / 20 = **7 hours** after B departs

The same-direction closing rate is the *difference* of speeds, because both objects are moving forward — only the faster one's extra speed closes the gap.

**Two-object template — toward each other.** Two objects approach each other, each at their own speed.

Closing rate = **sum** of speeds. Time to meet = distance apart / sum of speeds.

**Two-object template — opposite directions.** Separation rate = sum of speeds. Same arithmetic.

**Average-speed template.** Round-trip over equal legs at different speeds.

Cyclist: 15 mph to town B, 10 mph back. Average speed?

- Wrong: (15 + 10)/2 = 12.5 (simple average — trap)
- Right: harmonic mean 2(15)(10)/(15+10) = 300/25 = **12 mph**

Or via total/total: assume 30 miles each way. Times: 30/15 = 2 and 30/10 = 3. Total distance 60, total time 5. Average 60/5 = **12 mph**. ✓

**Why the answer isn't the simple average.** You spend more time at the slower speed, so the slower leg has greater weight. See the "average speed" section in the Rates and Work chapter for the full explanation.

**When the trip has unequal legs.** Use total/total directly — harmonic mean doesn't apply.

> **Trap to watch.** Students often forget to convert minutes to hours before using D = RT with a rate in mph. If the problem says "2 hours and 30 minutes," convert to 2.5 hours before plugging in.

## @work-rate-problems

Work rate is combined-work in word-problem clothing. One formula, applied repeatedly.

**Single formula:** if worker A alone takes `a` hours and worker B alone takes `b` hours, together:

    1/a + 1/b = 1/T

**Never add the times.** Students who see "6 hours" and "12 hours" and answer 18 or 9 (the sum or the average) get the trap. The correct move is always rates.

**Example.** Machine A: 6 hours alone. Machine B: 12 hours alone. Together?

    1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 per hour
    T = 1 / (1/4) = 4 hours

**Three workers (including one that works against the others).** A fills, B fills, C drains.

Pipe A fills in 4 hours. Pipe B fills in 6 hours. Pipe C drains in 12 hours. All three open — how long to fill the empty tank?

Net rate = 1/4 + 1/6 − 1/12 = 3/12 + 2/12 − 1/12 = 4/12 = **1/3 per hour**. Time = 3 hours.

The minus sign for C is essential. Draining is "negative filling."

**Scaling work problems.** "A printer prints 240 pages in 8 minutes. How many in 15 minutes?" Convert to rate: 30 pages/min. Then 30 × 15 = **450** pages. A pure proportionality.

**Two-phase work problems.** One worker starts; another joins later. Compute work done in phase 1, then work rate in phase 2 for the remainder.

**Example.** Alex alone finishes in 10 hours. After 4 hours alone, Beth joins and together they finish the rest in 3 hours. Beth's solo time?

- Phase 1: Alex alone for 4 hours → 4/10 = 2/5 done. Remaining: 3/5.
- Phase 2 combined rate: (3/5) / 3 = 1/5 per hour.
- 1/10 (Alex) + 1/b (Beth) = 1/5, so 1/b = 1/10 → b = **10 hours**.

Beth is exactly as fast as Alex. Coincidence is common on the GMAT — the setup often produces suspiciously clean answers. Don't second-guess.

> **Self-explanation prompt.** Why do rates add but times don't? If you can say "because rates measure work per hour, and independent workers on the same job genuinely contribute additive work — while times aren't additive because 'faster together' means less time, not more," you've cemented why the formula is 1/a + 1/b = 1/T and not a + b = T.

## @mixtures

Mixture problems ask you to combine two substances with different concentrations (or prices, or densities) and find the result. The setup is always the same: conserve the *pure component*.

**The core identity:** (amount of pure stuff in A) + (amount of pure stuff in B) = (amount of pure stuff in mixture).

**Example (acid solution).** 10 L of 30% acid. How many L of pure acid added to make a 50% solution?

- Pure acid currently: 0.30 × 10 = 3 L
- Let x = liters of pure acid added.
- New total volume: 10 + x. New pure-acid amount: 3 + x.
- Concentration equation: (3 + x) / (10 + x) = 0.50
- Solve: 3 + x = 5 + 0.5x, so 0.5x = 2, x = **4 liters**

The trick is recognizing "pure acid" as the conserved quantity. Whatever you add in, the pure component has to balance.

**Coffee-blend / weighted-average template.**

Brand A coffee at $12/lb, Brand B at $8/lb. Blend sells at $9.50/lb, making 40 pounds. How many pounds of Brand A?

- Let a = pounds of A. Then b = 40 − a is pounds of B.
- Price equation: 12a + 8(40 − a) = 9.50 × 40 = 380
- Simplify: 12a + 320 − 8a = 380, so 4a = 60, a = **15 pounds**

The equation 12a + 8b = 380 says "total cost from A plus total cost from B equals total cost of blend." That's the conservation principle — *dollars* are conserved.

**The allegation shortcut.** For two-component mixtures, the ratio of components is the *inverse* ratio of their distances from the target.

- Target concentration: 9.50
- A is at 12, distance from target: 2.5
- B is at 8, distance from target: 1.5
- Ratio A : B = 1.5 : 2.5 = 3 : 5

Total 40 lb in ratio 3 : 5 → A = 40 × (3/8) = **15 lb**. ✓

Same answer, half the arithmetic. Worth learning for 705+ students who want speed.

**The "replace X liters of A with water" template.** Different subcategory: you're *removing* some of the solution and replacing it with pure solvent (dilution).

General approach: track the pure-component amount through each step, using "current concentration × new volume" after each operation. These are rarer on the GMAT but do appear at 705+.

**Mixing unequal-quantity blends to match a target.** Whenever the question specifies the blend's concentration AND the final quantity, you have two equations (total quantity + total pure component) and two unknowns — always solvable.

> **Trap to watch.** When "pure acid" is added, the total volume increases. Forgetting to update the denominator (writing (3+x)/10 instead of (3+x)/(10+x)) is the #1 mixture error.

## @profit-and-percent

Profit, markup, and discount problems follow a small set of identities. The trickiest part isn't the formulas — it's that the GMAT loves compound percent changes that students mistakenly add when they should multiply.

**Profit = Revenue − Cost.** Markup is the amount added to cost; the marked price is cost × (1 + markup rate).

**Example.** Cost $40, sell $52. Profit = $12. Profit percentage of cost = 12/40 = **30%**.

**Markup followed by discount — the compound percent trap.**

Cost = $100. Marked up 40%. Then discounted 10% on marked price. Profit %?

- Marked price: 100 × 1.40 = 140
- Discounted price: 140 × 0.90 = 126
- Profit: 126 − 100 = $26
- Profit %: 26/100 = **26%**

Students who add percents (+40 − 10 = 30) get the trap answer 30%. Compound percents **multiply**, they don't add. The −10% applies to the *marked price*, not the cost — so the 10% discount equals $14, not $10.

**Percent change identity.** Change from A to B as a percent of A:

    % change = (B − A) / A × 100

Watch which value is the "base" (denominator). Change "from $50 to $60" uses $50 as the base: (60 − 50)/50 = 20%. Change "from $60 to $50" uses $60: (50 − 60)/60 = −16.7%. Same dollar change, different percent — because the bases differ.

**Successive percent changes.** Multiply 1 + each rate.

- Up 20% then up 30%: 1.2 × 1.3 = 1.56 → net 56% increase, not 50%.
- Up 25% then down 20%: 1.25 × 0.8 = 1.0 → back to original.
- Up 10% then down 10%: 1.1 × 0.9 = 0.99 → 1% decrease, not 0%. The "up 10% down 10% returns to start" intuition is wrong.

**Simple vs compound interest.**

- Simple: FV = P(1 + rt)
- Compound annually: FV = P(1 + r)^t
- Compound n times per year: FV = P(1 + r/n)^(nt)

Simple interest is rare on modern GMAT; compound is the default assumption unless the problem says "simple."

**"By what percent" vs "percent of."**

- "B is what percent **of** A?" → B/A × 100
- "B is what percent **more than** A?" → (B−A)/A × 100

Read carefully. The prepositions matter.

> **Self-explanation prompt.** Why do successive percent changes multiply instead of adding? If you can say "because each percent is applied to whatever the current value is, not the original value," you've internalized why 20% up then 20% down doesn't return to start.

## @ages-coins-digits

Four classic "setup two equations" subgenres. The algebra is identical; only the flavor text differs.

**Age problems.** The rule: everyone ages at the same rate. If one person is X years older now, they were X years older at every past time and will be X years older at every future time. Variables are current ages.

**Example (template).** "Five years ago James was 4× his nephew. In 3 years James will be 2× his nephew. James's current age?"

- J, N = current ages.
- 5 years ago: J − 5 = 4(N − 5) → J = 4N − 15 ... (1)
- 3 years from now: J + 3 = 2(N + 3) → J = 2N + 3 ... (2)
- Set (1) = (2): 4N − 15 = 2N + 3 → 2N = 18 → N = 9. J = 2(9) + 3 = **21**.

Verify: 5 years ago, James 16, nephew 4. 16 = 4 × 4 ✓. In 3 years, James 24, nephew 12. 24 = 2 × 12 ✓.

**Coin problems.** Work in the *smallest unit* (pennies or cents) to avoid decimal errors.

**Example.** 48 coins (nickels + dimes) worth $3.60. How many dimes?

- n + d = 48
- 5n + 10d = 360 (working in cents)
- Substitute n = 48 − d: 5(48 − d) + 10d = 360 → 240 + 5d = 360 → d = **24**

**Digit problems.** Write a two-digit number N with tens digit t and units digit u as N = 10t + u. The reversed number is 10u + t.

**Example.** t + u = 11. Reversed is 27 greater than N. Find N.

- (10u + t) − (10t + u) = 27
- 9u − 9t = 27 → u − t = 3
- Combined with u + t = 11: u = 7, t = 4. N = **47**.

The "reversed difference" pattern: (reversed − original) = 9 × (u − t). Memorize this — it collapses the algebra.

**Consecutive-integer problems.** Let the variable represent the middle integer if the count is odd; use smallest or any convenient anchor for even counts.

**Example.** Three consecutive integers sum to 72, largest?

Middle = 72/3 = 24. Largest = 25. Done in 5 seconds without algebra (for evenly-spaced sets, mean = middle).

The pattern generalizes. For *any* consecutive set (consecutive integers, consecutive even, consecutive multiples of 7), mean = middle = (first + last)/2. Sum = mean × count. This shortcut handles many "sum of N consecutive integers" problems without variables at all.

> **Trap to watch.** Age problems with "X years ago" clauses — students often write X − 5 = 4N − 5 instead of X − 5 = 4(N − 5). The parenthesis is non-negotiable: BOTH people were 5 years younger then, so both sides of the equation need to shift by 5.

## @sets-and-venn

Set-membership problems (club membership, product preferences, committee overlaps) use one identity and one framework.

**Two-set identity.** For any two groups A and B:

    |A ∪ B| = |A| + |B| − |A ∩ B|

In English: total in A or B equals total in A plus total in B minus the overlap.

**Example.** 80 students, 45 study Spanish, 38 study French, 12 study neither. How many study both?

- Studying at least one = 80 − 12 = 68.
- By the identity: 68 = 45 + 38 − |S ∩ F|
- |S ∩ F| = 45 + 38 − 68 = **15**

The identity rearranges to: |A ∩ B| = |A| + |B| − |A ∪ B|. Plug in the three known values, solve for the missing one.

**Three-set identity.** For three groups:

    |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|

Rarely tested in this raw form. More common is a refactored version that sorts people by how many of the three sets they're in.

**The "exactly two / exactly three" framework.**

Let:
- t = total people in at least one set
- n₁ = number in exactly one set
- n₂ = number in exactly two sets
- n₃ = number in all three

Two identities:

    n₁ + n₂ + n₃ = t                    (every person counted once)
    |A| + |B| + |C| = n₁ + 2n₂ + 3n₃    (people in 2 sets counted twice, etc.)

**Example.** 150 guests, 90 ordered appetizers, 95 ordered dessert, 70 ordered coffee, 30 ordered all three, every guest ordered something. How many ordered exactly two items?

- t = 150 (every guest ordered at least one)
- |A| + |D| + |C| = 90 + 95 + 70 = 255
- n₃ = 30
- From identity 1: n₁ + n₂ + 30 = 150 → n₁ + n₂ = 120
- From identity 2: n₁ + 2n₂ + 3(30) = 255 → n₁ + 2n₂ = 165
- Subtract first from second: n₂ = **45**

This two-equation system collapses the three-set problem. Memorize the framework.

**Two-way tables for simpler problems.** When you only have two yes/no attributes (male/female × has-pet/no-pet), draw a 2×2 table. Each cell corresponds to one of four categories. Fill in what you know; solve the rest.

|         | Has pet | No pet | Total |
|---------|---------|--------|-------|
| Male    |    ?    |    ?   |  45   |
| Female  |    ?    |    ?   |  35   |
| Total   |   50    |   30   |  80   |

Cross-check: row totals and column totals both sum to 80. Fill cells consistently with both constraints.

> **Self-explanation prompt.** Why does the "identity 2" in the three-set framework weight n₂ by 2 and n₃ by 3? If you can say "because a person in exactly 2 sets is counted in 2 of the individual set totals, and a person in exactly 3 sets is counted in all 3," you've internalized the inclusion-exclusion logic and won't get confused by the coefficients.

## @max-min-optimization

"Max/min" problems ask you to find the *greatest* or *least* possible value of some quantity, subject to a list of constraints. These are the final skill-set that separates 685 scorers from 725 scorers — they have no formula, just a strategy: **push everything else to the opposite extreme**.

**The core strategy: to maximize X, minimize everything competing with X. To minimize X, maximize everything competing with X.**

**Example (the classic "set with constraints").** Five distinct positive integers have mean 20 and median 18, with largest value 40. What's the greatest possible value of the smallest?

Write in order: `a < b < 18 < d < 40`. Sum must equal 100, so `a + b + d = 42`.

To maximize `a`, minimize `b` and `d` — subject to ordering constraints:

- Smallest valid `d` is 19 (must be greater than 18 and be a distinct integer).
- Then `a + b = 23` with `a < b < 18`.
- Maximize `a` by making `b` as large as possible (just under 18). Try `b = 17`, then `a = 6`. Or `b = 13`, `a = 10`. Or `b = 12`, `a = 11`. Try pushing: `b = 12`, `a = 11` (OK, distinct). `b = 11`, `a = 12` fails (a < b required).
- Greatest possible `a = 11` with `(a, b, d) = (11, 12, 19)`. Check: 11 + 12 + 19 = 42 ✓.

The template generalizes: for every max/min problem,

1. Write the constraints explicitly.
2. Ask, "what competes with the target?"
3. Push the competitors to their extremes in the opposite direction.
4. Check feasibility — did you violate any constraint?

**Example (mixture / blending max).** A bakery uses at most 12 cups of flour and 8 cups of sugar. Muffin recipe: 2 cups flour, 1 cup sugar. Cake recipe: 1 cup flour, 2 cups sugar. What's the maximum number of muffins + cakes?

Classic linear-programming setup, but on the GMAT it reduces to plugging the corner points of the feasible region.

- Let m = muffins, c = cakes. Constraints: 2m + c ≤ 12, m + 2c ≤ 8, m ≥ 0, c ≥ 0.
- Corners (intersect pairs of lines): (0, 0), (6, 0) [from first], (0, 4) [from second], and (2m + c = 12) ∩ (m + 2c = 8) → solve: m = 16/3, c = 4/3 — not integer, so skip.
- Total m + c at each integer corner: (6, 0) → 6; (0, 4) → 4.
- Try interior integer points: m = 4, c = 2 gives 2(4)+2 = 10 ≤ 12 ✓ and 4 + 2(2) = 8 ≤ 8 ✓. Total = 6.
- Another check: m = 5, c = 1: 11 ≤ 12 ✓, 7 ≤ 8 ✓. Total = 6.
- Maximum is **6**.

**Example (minimum with inequality constraint).** x + y + z = 30, with 4 ≤ x ≤ 8 and y, z ≥ 1 (integers). Minimum of xy?

To minimize xy, push one of them to the smallest feasible value. y can be as small as 1. Then x can be anything in [4, 8], and z = 29 − x. Minimum of `x × 1 = x` is `x = 4`. So min `xy = 4`.

**The "greatest integer satisfying" template.** If an inequality pins down a range and asks for the greatest or least integer in it, solve the inequality, then pick the right endpoint.

**Example.** `|2x − 5| < 9`. What's the greatest integer satisfying this?

- Expand: `−9 < 2x − 5 < 9` → `−4 < 2x < 14` → `−2 < x < 7`.
- Strict inequality → 7 is excluded. Greatest integer: **6**.

**"At least" and "at most" constraints — convert to inequalities.** The English "at most 12" means ≤ 12, "at least 5" means ≥ 5, "no more than n" means ≤ n. Translate carefully — these phrases determine whether the endpoint is included.

**The "smallest x such that" discrete-counting template.** GMAT loves asking "what's the smallest n such that 2ⁿ > 1000?" — a guess-and-check with integer n. 2¹⁰ = 1024 > 1000, but 2⁹ = 512 < 1000. So n = **10**. These are always solved by bracketing.

**Max/min with percents.** "A book was marked up by at most 40% and then discounted by at least 10%. What's the greatest possible selling price as a percent of cost?" Push the markup high (40%) and the discount low (10%): 1.40 × 0.90 = 1.26 → **126%** of cost. The "at most" and "at least" wording determines which direction each lever moves.

> **Recall check.** Without looking up: state the general strategy for solving any max/min problem in one sentence. Now apply it mentally to "5 positive integers sum to 50; what's the max possible smallest element?" (Answer: push the other four down to be equal; if all 5 equal → 10, so max smallest is 10. If distinct integers required → 1+2+3+4+40 type minimization of four → max smallest = 8 via 8+9+10+11+12.) The discipline of recalling the strategy first, solving second, locks the method in.

> **Trap to watch.** "Greatest possible value" questions usually have a strict inequality somewhere — check whether that pushes a boundary up by 1 or leaves it where it is. Also, if the problem requires *distinct* values, you can't repeat — that often forces the "maximize A by minimizing B" answer one notch off what you'd naively expect.

## @summary

Word problems are translation + template. Translation discipline gets you to a correct equation; the seven structural templates tell you what that equation looks like.

**The four translation habits:**

1. Define the variable in words, with units.
2. Translate phrases literally, clause by clause.
3. Pick the variable that gives the cleanest equation (often the middle element of an evenly-spaced set, or the smaller of two ages).
4. Verify the answer against the *original English*, not just the algebra.

**The seven pattern templates:**

| Pattern | Setup | Key formula |
|---|---|---|
| Rate-time-distance | Match units; single, catch-up, or meeting | D = RT; closing rate = sum or difference |
| Work rate | Add rates; phase the problem if needed | 1/a + 1/b = 1/T |
| Mixtures | Conserve the pure component | (pure A) + (pure B) = (pure mixture) |
| Profit / percent | Compound changes multiply | 1 + r₁ × 1 + r₂ |
| Ages, coins, digits | Two clauses → two equations | Plug-in verification at the end |
| Sets / Venn | Identity 1 + Identity 2 for three sets | n₁ + n₂ + n₃ = t ; \|A\|+\|B\|+\|C\| = n₁ + 2n₂ + 3n₃ |
| Max / min | Push competing variables to their extremes | "To maximize X, minimize everything else" |

**Sanity checks that catch 80% of errors.**

- Plug your answer back into the **English**, not the algebra. "Maria is 3× her daughter" — check the actual ages.
- Do the units match? Hours on both sides? Dollars on both sides?
- Is the answer in the right ballpark? If you computed Maria's age at 120, you missed a step.
- Did you answer what was asked? "How old will Maria be in 6 years" is not the same as "How old is Maria now."

**Phrase-to-algebra cheat sheet.**

| English | Algebra |
|---|---|
| "is" | = |
| "more than" | + |
| "less than" | − (careful: "5 less than x" is x − 5, not 5 − x) |
| "twice as many as" | 2 × |
| "x percent of" | (x/100) × |
| "x years ago" | subtract x |
| "x years from now" | add x |
| "ratio of A to B" | A/B |

**Time-management note.** Easy word problems (straight D = RT, straight percent) should take under a minute. Medium (two-clause ages, mixtures, percent-of-percent) take up to 2 minutes. Hard (three-set Venn, multi-step profit, compound percent) take 2–2.5 minutes max. If you're past 2:30 and haven't finished the setup, you've overtranslated — step back, re-read the question stem, and identify which of the six patterns you're in.
