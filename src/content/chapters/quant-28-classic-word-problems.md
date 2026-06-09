---
slug: quant-28-classic-word-problems
title: "Classic Word Problems"
section: Quant
estimated_minutes: 10
prerequisites:
  - quant-27-probability
summary: |
  Profit/markup, ages-coins-digits setups, and max/min optimization under constraints.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - word-problems-q7
      - word-problems-q8
  - id: profit-and-percent
    type: reading
    title: "Profit, markup, and percent change"
    check_question_ids:
      - word-problems-q2
      - word-problems-q8
      - word-problems-q46
      - word-problems-q50
      - word-problems-q51
      - word-problems-q53
      - word-problems-q58
      - word-problems-q60
  - id: ages-coins-digits
    type: reading
    title: "Ages, coins, and digit problems"
    check_question_ids:
      - word-problems-q12
      - word-problems-q15
      - word-problems-q16
      - word-problems-q18
      - word-problems-q57
  - id: max-min-optimization
    type: reading
    title: "Max/min and optimization — extremes under constraint"
    check_question_ids:
      - word-problems-q62
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - word-problems-q9
      - word-problems-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q11
      - word-problems-q12
---

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

**Trap to watch.** Age problems with "X years ago" clauses — students often write X − 5 = 4N − 5 instead of X − 5 = 4(N − 5). The parenthesis is non-negotiable: BOTH people were 5 years younger then, so both sides of the equation need to shift by 5.

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

**Trap to watch.** "Greatest possible value" questions usually have a strict inequality somewhere — check whether that pushes a boundary up by 1 or leaves it where it is. Also, if the problem requires *distinct* values, you can't repeat — that often forces the "maximize A by minimizing B" answer one notch off what you'd naively expect.
