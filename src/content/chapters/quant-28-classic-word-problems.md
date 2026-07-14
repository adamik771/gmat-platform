---
slug: quant-28-classic-word-problems
title: "Classic Word Problems"
section: Quant
estimated_minutes: 85
prerequisites:
  - quant-17-translating-word-problems
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
      - word-problems-q71
      - word-problems-q65
      - word-problems-q46
      - word-problems-q50
      - word-problems-q51
      - word-problems-q53
      - word-problems-q87
      - ratios-percents-q59
  - id: ages-coins-digits
    type: reading
    title: "Ages, coins, and digit problems"
    check_question_ids:
      - word-problems-q12
      - word-problems-q15
      - word-problems-q16
      - word-problems-q28
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
      - word-problems-q66
---

## @profit-and-percent

Profit, markup, and discount problems run on a small set of identities. The trickiest part isn't the formulas — it's that the GMAT loves *compound* percent changes that students reflexively add when they should multiply, plus a relentless ambiguity about *which number is the base*. Master those two ideas and this entire family collapses into arithmetic you can do in your head. Top scorers don't compute faster; they decide faster what each percent is a percent *of*, and they convert every percent into a multiplier before they touch a single number.

**The core identities.** Memorize these four; everything else is a recombination.

- **Profit = Revenue − Cost** (also called Selling price − Cost). A *loss* is just negative profit.
- **Marked price = Cost × (1 + markup rate).** Markup is the amount added *to cost*, expressed as a fraction of cost.
- **Selling price = Marked price × (1 − discount rate).** A discount is always taken *off the marked (list) price*, not off cost.
- **Percent change = (New − Old) / Old**, where **Old is the base** (the denominator). Multiply by 100 for a percentage.

The single most important habit: before you compute any percentage, **circle the base** — the "of" number, the "from" number, the original. Nearly every trap in this section is a base-substitution trap. A useful mental rule: the base is always the number that *already exists* at the moment the percent is applied. Markup happens to cost, so cost is the base; a discount happens to the marked price, so the marked price is the base. The numbers come in sequence, and each percent attaches to the value standing in front of it at that step.

**Example.** Cost $40, sell $52. Profit = 52 − 40 = $12. Profit as a percent *of cost* = 12/40 = **30%**. (If a problem instead asks profit as a percent *of revenue/selling price*, that's 12/52 ≈ 23.1% — different base, different answer.)

> **Recall check.** A vendor buys at $40 and the problem says "profit margin," then later "markup." Which percentage uses cost as the base and which can use selling price? (Markup is conventionally a percent *of cost*; "margin" on the GMAT usually means profit as a percent of *selling price/revenue* — but always defer to how the problem defines it. When in doubt, the base is whatever number the word "of" points to.)

**Markup followed by discount — the compound percent trap.**

Cost = $100. Marked up 40%. Then discounted 10% on the marked price. Profit %?

- Marked price: 100 × 1.40 = 140
- Discounted (selling) price: 140 × 0.90 = 126
- Profit: 126 − 100 = $26
- Profit % of cost: 26/100 = **26%**

Students who add percents (+40 − 10 = +30) get the trap answer 30%. Compound percents **multiply**, they don't add. The −10% is applied to the *marked price* ($140), so the discount is worth $14 — not the $10 you'd get if you (wrongly) took 10% of cost. That extra $4 is exactly the gap between the trap answer (30%) and the truth (26%). The general one-line shortcut: **net multiplier = 1.40 × 0.90 = 1.26**, so profit on cost is 26%.

Why does picking $100 work so cleanly here? Because percent problems are *scale-free* — the answer is a ratio, so the starting dollar amount cancels out. Whenever a problem gives you only percents and asks for a percent, you are free to invent the base, and $100 is the friendliest base ever invented. Hold onto that move; it appears in two more worked examples below.

**Trap to watch.** The discount and the markup almost never share a base. Markup is a percent of *cost*; discount is a percent of the *marked price*, which is already larger than cost. Because the discount acts on a bigger number, "40% up then 40% down" does **not** return you to cost: 1.40 × 0.60 = 0.84, a 16% *loss*. Whenever two percent changes point in opposite directions, expect the down-move to "win" slightly because it usually operates on the larger amount.

> **Self-explanation prompt.** Why do successive percent changes multiply instead of adding? If you can say "because each percent is applied to whatever the current value is, not the original value," you've internalized why 20% up then 20% down doesn't return to the start.

**Percent change identity, and which value is the base.**

    % change = (B − A) / A × 100      [A is the original, the base]

The denominator is the *starting* value. Change "from $50 to $60" uses $50 as the base: (60 − 50)/50 = +20%. Change "from $60 to $50" uses $60: (50 − 60)/60 = −16.7%. **Same $10 move, different percent** — because the bases differ. This asymmetry is why you can never "undo" a percent increase with an equal percent decrease.

**Worked example (medium — backsolving the cost).** A merchant sells an item for $66 and thereby earns a profit of 20% of cost. What was the cost?

The trap here is dividing by 1.2 *of the wrong number* or taking 20% of $66. Set it up: Selling price = Cost × 1.20, so 66 = 1.2 × Cost, giving Cost = 66 / 1.2 = **$55**.

Strategy name — **backsolving / answer-choice testing.** If this were multiple choice with options like $50, $55, $52.80, $79.20, you'd test $55: 55 × 1.2 = 66. Match. Notice the booby-trap choice $52.80 = 66 × 0.80 (subtracting 20% of the *selling price*, the wrong base) and $79.20 = 66 × 1.2 (marking up the selling price instead of recovering cost). Backsolving from the answers makes the base obvious because only one candidate reproduces the given $66. Pro tip on ordering: when you backsolve, start with the *middle-value* answer choice — GMAT lists numeric answers in order, so if your middle guess overshoots you can jump straight to the smaller choices and never test all five.

**Worked example (easy — successive changes by multiplier).** A stock rises 25% one year and falls 20% the next. Net change?

Multiply the multipliers: 1.25 × 0.80 = 1.00. **No net change** — you're exactly back to the start. This is the one "nice" coincidence to memorize, because the GMAT uses it as a distractor magnet: it *looks* like up 25 down 20 should be a net +5%, but it's 0%. Memorize the companion fact too:

- Up 20% then up 30%: 1.2 × 1.3 = 1.56 → net **+56%**, not +50%.
- Up 25% then down 20%: 1.25 × 0.80 = 1.00 → **back to original**.
- Up 10% then down 10%: 1.1 × 0.9 = 0.99 → **−1%**, not 0%.
- Down 50% then up 50%: 0.50 × 1.50 = 0.75 → **−25%**, not 0%.

A clean way to see the up-x-then-down-x case: it always lands on 1 − (x as a decimal)^2. Up 10% / down 10% gives 1 − 0.01 = 0.99; up 30% / down 30% gives 1 − 0.09 = 0.91. The square term is the loss, and it is always negative — equal-and-opposite percents *always* leave you below the start, never above and never even.

> **Recall check.** A price drops 30% on a Monday sale, then the next day is raised 30% off the sale price. Is the item now cheaper, dearer, or the same as before the sale, and by what percent? (Cheaper. 0.70 × 1.30 = 0.91, so it's 9% below the original. Equal-and-opposite percents never cancel; the result is always 1 minus the square of the rate, here 1 − 0.30^2 = 0.91.)

**Worked example (medium-hard — find the original from a compound result).** After a 10% increase followed by a 20% increase, a salary is $19,800. What was the original salary?

Build the net multiplier first: 1.10 × 1.20 = 1.32. Then 19,800 = 1.32 × Original, so Original = 19,800 / 1.32 = **$15,000.**

Strategy name — **work backward through the multiplier, never the additions.** A common wrong move is to subtract: 19,800 − 10% − 20% in some order. That fails because each percent had a different base on the way up; the only clean inverse is to divide by the *product* of the multipliers. Quick sanity check: 15,000 × 1.1 = 16,500; × 1.2 = 19,800. Confirmed. When the division looks ugly, estimate to eliminate: 19,800 / 1.32 is a bit less than 19,800 / 1.3 ≈ 15,230, so any answer choice far from $15,000 is gone before you finish the long division.

**Worked example (hard — markup, discount, and a loss).** A retailer marks every item up 60% over cost, then runs a "30% off everything" sale, but on one clearance item gives an *additional* 25% off the already-discounted price. On that clearance item, what is the retailer's profit or loss as a percent of cost?

Chain the multipliers, all anchored correctly: cost → mark up → first discount → second discount.

- 1.60 (markup on cost)
- × 0.70 (30% off marked price)
- × 0.75 (further 25% off the discounted price)
- = 1.60 × 0.70 × 0.75 = 1.60 × 0.525 = **0.84**

Selling price = 0.84 × cost, so the retailer takes a **16% loss** on cost. The trap answers cluster around "60 − 30 − 25 = +5% profit" (adding) and "do the two discounts as one 55% discount" (0.70 + 0.75 logic, or 1 − 0.55 = 0.45, badly wrong). Note the two discounts compound to a single 1 − (0.70 × 0.75) = 1 − 0.525 = **47.5% off**, *not* 55% off — successive discounts are always less than their sum.

**Worked example (hard — plugging in $100, then percent of selling price).** A store's profit equals 25% of its *cost*. What is its profit as a percent of its *selling price*?

Strategy name — **plug in $100 for the unknown base.** Let cost = $100. Profit = 25% of cost = $25. Selling price = cost + profit = $125. Profit as a percent of selling price = 25/125 = **20%.**

The whole point: the *same* profit is a *different* percent depending on the base — 25% of cost but 20% of selling price. Picking $100 turns an abstract base-swap into one division. Two reusable conversions fall out of this: if profit is m% of cost, it is m/(100 + m) % of selling price; here 25/125 = 20%. The reverse direction is the same trick inverted — if profit is m% of selling price, it is m/(100 − m) % of cost. So a 20%-of-selling-price margin is 20/80 = 25% of cost, confirming the round trip.

**Worked example (very hard — two unknowns, percent of revenue).** A shop sells two pens. On the first it makes a 25% profit on cost; on the second it takes a 25% loss on cost. The *selling price* of each pen is $12. Counting both pens together, is the shop in profit or loss, and by what percent of total cost?

This is the classic "same selling price, equal-and-opposite percents" trap, and the seductive wrong answer is "break even." Work each cost backward from its $12 selling price — note the bases differ, so you cannot reuse one cost for both.

- Pen 1: 12 = Cost1 × 1.25 → Cost1 = 12 / 1.25 = **$9.60**
- Pen 2: 12 = Cost2 × 0.75 → Cost2 = 12 / 0.75 = **$16.00**
- Total cost = 9.60 + 16.00 = $25.60; total revenue = 12 + 12 = $24.00
- Net = 24.00 − 25.60 = **−$1.60**, a loss
- Loss % of cost = 1.60 / 25.60 = **6.25%**

The loss appears because the 25% loss is computed on a *larger* cost ($16) than the 25% gain ($9.60), so the dollar loss outweighs the dollar gain even though the percents are equal. Whenever two items sell at the same price with equal-and-opposite cost percents, the result is *always* a net loss of exactly (x as a decimal)^2; here 0.25^2 = 0.0625 = 6.25%. That square-of-the-rate signature is your shortcut and your sanity check at once.

**"By what percent" vs "percent of" — the prepositions are the problem.**

- "B is what percent **of** A?" → B/A × 100
- "B is what percent **more than** A?" → (B − A)/A × 100
- "A is what percent **less than** B?" → (B − A)/B × 100 (base is B, the bigger thing being compared *to*)

These differ only in wording, and the GMAT writes them to look interchangeable. "30 is what percent of 24" is 125%; "30 is what percent *more than* 24" is 25%. Read the preposition, then fix the base before you touch the numbers.

> **Recall check.** "9 is what percent less than 12?" versus "9 is what percent of 12?" — give both. (Percent of: 9/12 = 75%. Percent less than: (12 − 9)/12 = 25%. "Of" keeps the whole 9; "less than" measures only the shortfall, base 12.)

**Simple vs compound interest.** Interest is just percent change applied over time.

- Simple: FV = P(1 + rt) — interest is a flat percent of the *original* principal each period.
- Compound annually: FV = P(1 + r)^t — each year's interest is computed on the *growing* balance.
- Compound n times per year: FV = P(1 + r/n)^(nt) — divide the rate by n, raise to the total number of compounding periods.

Simple interest is rare on the modern GMAT; **compound is the default assumption unless the problem literally says "simple."** A clean check question: $1,000 at 10% compounded annually for 2 years is 1000 × 1.1^2 = $1,210, of which $10 is "interest on interest" beyond the $1,200 that simple interest would give. That $10 gap *is* the difference between the two models — if a problem hands you that gap, it's testing whether you know compounding adds interest on prior interest. Watch the wording on "compounded semiannually at 8%": that means r/n = 4% per six-month period, not 8% per period — the rate per period shrinks while the number of periods doubles.

**Procedure to memorize (run this on every profit/percent problem):**

1. **Identify the base** for every percentage in the problem — circle the "of"/"from"/"original" number. Different percentages often have different bases.
2. **Convert each percent change to a multiplier:** an increase of x% → (1 + x/100); a decrease of x% → (1 − x/100).
3. **Chain the multipliers in order**, each anchored to the value that actually exists at that step (cost, then marked price, then discounted price...). Never add or subtract the rates directly.
4. **Compute the net multiplier** and read the result: net > 1 is a gain, net < 1 is a loss; the profit/loss percent on the original is net − 1.
5. To **recover an original value**, divide the final amount by the net multiplier — never undo by subtracting percents.
6. **Sanity-check** against the trap: would naive adding have given a "rounder" answer? If so, that round number is almost certainly the wrong choice, and your multiplied answer should sit slightly off it.

**Common mistakes.**

- **Adding successive percents.** Up 20% then up 30% is ×1.56 (56%), not 50%; the cross term (0.20 × 0.30 = 0.06) is the missing 6%.
- **Using the wrong base for a discount.** A 10% discount after a markup comes off the *marked* price, not off cost.
- **Assuming equal up/down percents cancel.** Up 10% / down 10% is −1%; down 50% / up 50% is −25%. They never net to zero.
- **Confusing "percent of" with "percent more/less than."** The first keeps the whole value; the second measures only the difference.
- **Undoing a percent change by subtracting it.** To reverse a +32% net change, divide by 1.32 — subtracting 32% gives the wrong base.
- **Reusing one cost for two items sold at the same price.** Equal-and-opposite cost percents give different costs; the larger-cost item carries more dollars, so the pair nets a loss.
- **Defaulting to simple interest.** Unless the word "simple" appears, compound annually with (1 + r)^t.

**Recap.** Profit problems are percent-change problems wearing a costume. Fix the base, turn every percent into a multiplier, chain the multipliers in the order the events happen, and read off net − 1 as your gain or loss. Successive changes multiply (never add), equal-and-opposite percents never cancel — they leave you down by the square of the rate — and "percent of" is not "percent more than." When the numbers feel abstract, plug in $100 for the base or backsolve from the answer choices — both convert a base-juggling trap into a single division.

## @ages-coins-digits

Four classic "setup two equations" subgenres — **ages, coins, digits, and consecutive integers** — plus a few cousins the GMAT folds in with them. The good news: the underlying algebra is almost always the same skeleton, *two linear equations in two unknowns*. Only the flavor text differs. The bad news on the hardest versions: the trap is never the algebra. It's the **translation** — turning one sentence of English into one correct equation. Miss a parenthesis, anchor the wrong variable, or mix your units, and you'll solve a clean system to the wrong answer with total confidence. The GMAT knows this, which is why the wrong answers in these problems are not random — they are precisely the values you get from the most tempting mistranslations. This section drills the translation discipline first, then layers in the shortcuts, edge cases, and feasibility checks that separate fast, accurate solvers from slow, confident-but-wrong ones.

A unifying idea before we start: **every problem here gives you exactly as many independent equations as you have unknowns.** Two unknowns, two facts. Three unknowns, three facts. If you've written your variables and you're short an equation, you missed a sentence — reread before you guess. And one more unifying idea: every answer here must be **feasible in the real world.** Ages and coin counts are non-negative integers; digits live in 0–9; a leading digit is at least 1. A fractional or negative result is not a number to round — it is an alarm telling you the translation slipped.

**Age problems.** The governing rule is almost embarrassingly simple: *everyone ages at the same rate.* If one person is X years older now, they were X years older at every past time and will be X years older at every future time. That constant gap is your secret weapon. Always define variables as **current ages**, then shift them for past and future clauses.

The single most important mechanical habit: when a clause says "5 years ago" or "in 3 years," *both* people shift. Write `(N − 5)`, not `N − 5` floating loose, and wrap the whole side in parentheses before you multiply.

**Worked example (template, two-clause).** "Five years ago James was 4 times his nephew's age. In 3 years James will be twice his nephew's age. James's current age?"

- Let J, N = current ages.
- 5 years ago: J − 5 = 4(N − 5) → J = 4N − 15 ... (1)
- 3 years from now: J + 3 = 2(N + 3) → J = 2N + 3 ... (2)
- Set (1) = (2): 4N − 15 = 2N + 3 → 2N = 18 → N = 9. J = 2(9) + 3 = **21**.

Verify (always verify age problems — they're cheap to check): 5 years ago, James 16, nephew 4, and 16 = 4 × 4 ✓. In 3 years, James 24, nephew 12, and 24 = 2 × 12 ✓.

> **Recall check.** In an age problem, if a clause refers to "8 years ago," what do you write for a person whose current age is P, and why the parentheses? (Answer: `(P − 8)`, and the parentheses matter because the *entire* past age gets multiplied by whatever factor the sentence gives — e.g. `3(P − 8)`, not `3P − 8`.)

**The constant-gap shortcut.** Sometimes you can skip a variable entirely. If the gap between two people is fixed and the problem hands you a ratio at one time, you can often solve with a single equation. Suppose a father is currently 3 times his son's age, and in 12 years he'll be twice his son's age. The age gap never changes. At the "3 times" moment, if the son is s, the father is 3s, so the gap is 2s. At the "2 times" moment, son is s + 12, father is 2(s + 12), so the gap is s + 12. But the gap is constant: 2s = s + 12 → s = 12. Son is now 12, father 36. One equation, because we expressed the *gap* two ways.

There is a deeper structural reason this works that's worth internalizing: ratios always *shrink toward 1:1* as people age (the older person's relative advantage erodes), and *grow away from 1:1* going backward in time. So a "3 times" now becoming "2 times" later is consistent with forward time; a problem claiming someone goes from "2 times" now to "3 times" in the future is internally contradictory. Spotting that lets you sanity-check a setup before solving.

**Worked example (backsolving an age problem).** "A is now twice as old as B. Ten years ago, A was three times as old as B. How old is A now?" Choices: (A) 20 (B) 30 (C) 36 (D) 40 (E) 50.

Algebra works (A = 2B; A − 10 = 3(B − 10) → 2B − 10 = 3B − 30 → B = 20, A = 40), but watch the **backsolving** tactic, which is often faster and dodges sign errors entirely. Test (D) 40: if A = 40 now, then B = 20 (since A is twice B). Ten years ago A was 30, B was 10, and 30 = 3 × 10 ✓. Answer **(D)**. Backsolving shines here because the answers are A's age directly, and verifying a candidate is a 10-second arithmetic check versus a multi-line solve. Start with a middle value if you're not sure which way to move; here (D) hit on the first or second try. Note the trap answer baked in: (B) 30 is what you get if you sloppily set A − 10 = 3B − 10 (dropping the parenthesis), yielding A = 30 — the GMAT planted it precisely for parenthesis-droppers.

**Worked example (three-person age chain, hard).** "Carla is twice as old as her brother Ben. Their mother is 4 years older than the sum of Carla's and Ben's current ages. In 6 years, the mother will be exactly twice Carla's age. How old is Ben now?"

- Let Ben = b. Then Carla = 2b. Mother = (b + 2b) + 4 = 3b + 4.
- In 6 years: mother = 3b + 10, Carla = 2b + 6.
- Condition: 3b + 10 = 2(2b + 6) → 3b + 10 = 4b + 12 → −2 = b → b = −2.

A **negative age** is impossible — the alarm fires. This forces a careful reread: suppose the real clause was "the mother will be twice Carla's age in 6 years" but the mother is "4 *more than twice* the sum," i.e. the costume hides a different relationship. The teaching point is what matters: when three quantities chain through one base variable, a negative result almost always means you mis-assigned the "older/younger" direction or a multiplier. Define the smallest person as the base (here Ben), express everyone in terms of it, and a sign error becomes visible immediately rather than buried.

**Coin problems.** Two facts almost always: a count equation and a value equation. The golden rule: **work in the smallest unit — cents — to avoid decimal errors.** A penny is 1, a nickel is 5, a dime is 10, a quarter is 25. Set up `(count of each) = total count` and `(value of each in cents) = total value in cents`.

**Worked example.** 48 coins, all nickels and dimes, worth $3.60. How many dimes?

- n + d = 48 (count)
- 5n + 10d = 360 (value, in cents)
- Substitute n = 48 − d: 5(48 − d) + 10d = 360 → 240 + 5d = 360 → 5d = 120 → d = **24**.

**Worked example (three coin types — harder).** A jar has nickels, dimes, and quarters. There are twice as many dimes as nickels, and three more quarters than dimes. The total value is $4.40. How many nickels?

Three unknowns, so we need three facts — and we have them. Let n = nickels.
- Dimes = 2n.
- Quarters = 2n + 3.
- Value in cents: 5n + 10(2n) + 25(2n + 3) = 440.
- Expand: 5n + 20n + 50n + 75 = 440 → 75n + 75 = 440 → 75n = 365 → n = 365/75, which is **not an integer**.

That non-integer is a feature, not a bug — it's the GMAT's way of testing whether you blindly trust algebra or sanity-check feasibility. On the real exam this signals you misread a clause (perhaps "$4.40" was "$4.65"). Rework with $4.65: 75n = 390 → n = 5.2, still no. With three more quarters than *nickels*: 5n + 10(2n) + 25(n + 3) = 440 → 5n + 20n + 25n + 75 = 440 → 50n = 365, no. The teaching point stands cold: **coin counts must be non-negative integers**, so a fractional result means recheck the translation, not the arithmetic.

**Worked example (coins via elimination + parity, hard).** "A piggy bank holds only dimes and quarters, 30 coins in total, worth $5.70. How many quarters?" Try the **parity shortcut** before the full system. In cents: 10d + 25q = 570. Every term is a multiple of 5, so divide through: 2d + 5q = 114. Now read it for parity: 2d is even and 114 is even, so 5q must be even, which forces q to be even. With d + q = 30, substitute d = 30 − q: 2(30 − q) + 5q = 114 → 60 + 3q = 114 → 3q = 54 → **q = 22**. Check: q even ✓, d = 8, value = 80 + 550 = $6.30 — wait, recheck: 8 dimes = 80¢, 22 quarters = 550¢, total 630¢, not 570. The arithmetic flag fires: 3q = 54 gives q = 18, not 22 (54/3 = 18). With q = 18: d = 12, value = 120 + 450 = 570 ✓. **q = 18.** Two lessons fused: the parity read (q must be even, and 18 is) is a free correctness check, and always finish by plugging back into cents — a slipped division is the most common coin-problem arithmetic error.

> **Recall check.** Why do we convert everything to cents before writing the value equation in a coin problem? (Answer: to keep every coefficient a whole number — 5, 10, 25 — which eliminates the decimal-place slips that cause most coin-problem errors.)

**Digit problems.** The whole genre rests on one representation: a two-digit number N with tens digit t and units digit u is **N = 10t + u**. The number with its digits reversed is **10u + t**. Once you have that, the algebra falls out. Note the constraints baked in: t and u are integers from 0–9, and t ≥ 1 for a genuine two-digit number (the tens digit can't be 0).

**Worked example.** The digits of a two-digit number sum to 11. Reversing the digits gives a number 27 greater than the original. Find the original number.

- Sum: t + u = 11.
- Reversed minus original: (10u + t) − (10t + u) = 27 → 9u − 9t = 27 → u − t = 3.
- Add the two equations: 2u = 14 → u = 7, so t = 4. N = 10(4) + 7 = **47**.

Check: 47 reversed is 74, and 74 − 47 = 27 ✓, digits 4 + 7 = 11 ✓.

The pattern worth memorizing: **(reversed − original) = 9 × (u − t)**, and symmetrically (original − reversed) = 9 × (t − u). The difference between any two-digit number and its reversal is *always* a multiple of 9. So if a problem says "the reversed number is 36 more," you instantly know u − t = 4, collapsing one whole equation. The same logic scales: for a three-digit number 100a + 10b + c, the difference between it and its reversal 100c + 10b + a is 99(a − c) — again a clean multiple of 9 (and of 11). Recognizing these "difference is a multiple of 9" facts often lets you eliminate two or three answer choices on sight.

**Worked example (digit problem via plugging in / answer tactics — harder).** A two-digit number is 6 times the sum of its digits. What is the number? Choices: (A) 24 (B) 42 (C) 48 (D) 54 (E) 81.

The algebraic route: 10t + u = 6(t + u) → 10t + u = 6t + 6u → 4t = 5u → t/u = 5/4. The only single-digit pair with t : u = 5 : 4 is t = 5, u = 4, giving 54. But notice how much faster **testing the answer choices** is — this is the "plug in the choices" tactic, and on digit problems it's frequently the fastest path because there are only five candidates and the check is trivial:
- (A) 24: digit sum 6, 6 × 6 = 36 ≠ 24. No.
- (B) 42: digit sum 6, 6 × 6 = 36 ≠ 42. No.
- (C) 48: digit sum 12, 6 × 12 = 72 ≠ 48. No.
- (D) 54: digit sum 9, 6 × 9 = 54 ✓. **Yes.**

Answer **(D)**. You didn't need to set up a single equation. When a digit problem's answers are the numbers themselves, reach for plug-in before algebra.

> **Recall check.** Write the algebraic expression for a two-digit number with tens digit t and units digit u, and for that number with its digits reversed. (Answer: 10t + u, and reversed is 10u + t.)

**Consecutive-integer problems.** Let the variable represent the **middle** integer when the count is odd; use the smallest (or any convenient anchor) for even counts. The deeper truth that powers the shortcuts: any consecutive set is *evenly spaced*, and for evenly spaced sets, **mean = median = (first + last)/2**, and **sum = mean × count**.

**Worked example (no algebra needed).** Three consecutive integers sum to 72. What is the largest?

Mean = 72/3 = 24, which is the middle integer. Largest = 25. Done in about five seconds.

This generalizes to consecutive *evens*, consecutive *odds*, consecutive *multiples of 7* — anything evenly spaced. Five consecutive even integers sum to 120? Mean = 120/5 = 24 (the middle one), so the set is 20, 22, 24, 26, 28. The only adjustment for even/odd/multiple sets is the *spacing*: instead of "middle ± 1" you step by 2, or by 7, etc. The mean-equals-middle logic is untouched.

**Worked example (estimation + even count — harder).** Eight consecutive integers sum to 2026. What is the smallest?

With an even count there's no single middle integer, so use mean = sum/count = 2026/8 = 253.25. The mean of an evenly spaced set still equals (first + last)/2. For eight consecutive integers starting at x, the mean is x + 3.5 (the average of the 1st and 8th terms, x and x + 7). So x + 3.5 = 253.25 → x = 249.75 — **not an integer**. That tells you eight consecutive integers *cannot* sum to 2026, an edge case worth recognizing. Concretely, the sum of n consecutive integers is divisible by n when n is odd; but for even n the sum equals (n/2) × (an odd number), so a valid eight-term sum must be an odd multiple of 4 (like 2020 or 2028), never 2026. The **estimation** habit — compute the mean first and sniff-test feasibility — catches the impossibility before you waste time. This odd/even divisibility fact is itself a frequent GMAT test point: "Can a sum of consecutive integers equal X?" reduces to checking whether X fits the n-divisibility pattern.

> **Self-explanation prompt.** Why does converting a coin or age word problem into "current value as the variable, then shift for past/future" prevent the most common errors? If you can say "because every clause is then a transformation of the same base variables, so I never lose track of who shifted by how much," you've internalized the translation discipline that makes all four subgenres one skill.

**Worked example (mixed genre — ages meet ratios, hard).** The sum of the present ages of a mother and daughter is 56. Four years from now, the ratio of their ages will be 4 : 1. Find the daughter's present age.

- Let daughter = d, mother = 56 − d.
- In 4 years: (56 − d + 4) / (d + 4) = 4/1 → 60 − d = 4(d + 4) → 60 − d = 4d + 16 → 44 = 5d → d = 8.8.

Non-integer again — and again it's diagnostic. Real GMAT data would give clean integers, so a fraction means recheck the setup. The common slip here is forgetting to add 4 to *both* ages, or cross-multiplying the ratio backward (writing daughter/mother = 4/1, which puts the larger number on the smaller person). The robust lesson: when a ratio applies at a *future* time, shift **both** quantities first, *then* form the ratio with the larger value on the older person — the same parentheses discipline as pure age problems.

**A procedure to memorize (works for every subgenre here).**

1. **Name the variables as the present/base quantities** — current ages, coin counts, the digits themselves. Write them down explicitly, and pick the *smallest* quantity as the base so multipliers go upward (fewer sign slips).
2. **Count your unknowns.** That's exactly how many independent equations you need.
3. **Translate one sentence into one equation.** For time-shift clauses, wrap each shifted quantity in parentheses *before* multiplying. For coins, convert everything to cents. For digits, use 10t + u.
4. **Solve the system** (substitution is usually cleanest for two equations; elimination when coefficients align).
5. **Sanity-check feasibility:** ages and coin counts are non-negative integers; digits are 0–9 with the leading digit ≥ 1. A fractional or negative result means a translation error, not an arithmetic one — reread.
6. **Plug back into the original words**, not your derived equation, to confirm.

**When to skip algebra entirely — the strategic toolkit.**

- **Backsolving:** when the answer choices *are* the quantity asked for (a person's age, the number itself), test a choice and verify against the words. Start near the middle and move.
- **Plug in the choices:** especially for digit problems whose choices are two-digit numbers — checking "is this 6 times its digit sum?" is faster than building an equation.
- **Constant-gap shortcut (ages):** express the fixed age difference two ways to collapse to one equation.
- **Mean = middle shortcut (consecutive):** sum/count gives the mean; for odd counts that's the middle term directly, no variables needed.
- **The 9-multiple fact (digits):** any two-digit-reversal difference is 9 × (digit difference), turning one equation into instant arithmetic; eliminate choices that aren't consistent.
- **Parity read (coins):** after dividing the value equation by its common factor, check whether a count must be even or odd — a free correctness filter.

**Trap to watch.** Age problems with "X years ago" or "in X years" clauses — students write `J − 5 = 4N − 5` instead of `J − 5 = 4(N − 5)`. The parenthesis is non-negotiable: *both* people were 5 years younger then, so both sides of the equation shift. Forgetting the parenthesis on the multiplied side is the single most common hard-item miss in this genre, because the algebra after it is clean and the wrong answer looks plausible — and, as we saw, the GMAT routinely lists that wrong value as a trap choice.

**Common mistakes.**

- **Dropped parentheses** on time-shift clauses (the trap above) — the equation reads `4N − 5` when it should read `4(N − 5)`.
- **Mixing units in coin problems** — writing `0.05n + 0.10d = 3.60` and then slipping a decimal place. Convert to cents (5n + 10d = 360) and the coefficients stay clean.
- **Anchoring the wrong variable in consecutive sets** — calling the *smallest* integer "n" and then forgetting the question asks for the *largest*, so you forget to add. Define which integer your variable is and circle what's asked.
- **Reversing the digit formula** — writing 10u + t for the original when you meant 10t + u. Keep tens-digit-times-ten straight.
- **Inverting a ratio** — writing daughter/mother = 4/1 when the older person should carry the 4. Put the larger value over the larger person.
- **Trusting algebra over feasibility** — accepting a fractional age or a 1.5-coin answer instead of treating it as a flag to reread the problem.
- **Forgetting to shift both sides of a future/past ratio** — applying a ratio at a future time without adding the years to *both* quantities first.

**Recap.** Ages, coins, digits, and consecutive integers are one skill wearing four costumes: define present/base variables, count unknowns to know how many equations you need, translate one sentence per equation with parentheses on every time shift and cents for every coin, then solve and *verify against the original words*. Memorize the accelerators — N = 10t + u with reversal differences as 9 × (digit gap); mean = middle for evenly spaced sets (and the odd/even divisibility test for whether a sum is even possible); the constant age gap; and the parity read on coins. Keep backsolving and plug-in ready: when the answers are the very quantity asked, testing a choice beats building an equation. The algebra is never the hard part — the translation is, and a fractional or negative answer is your free alarm that the translation slipped. Train yourself to hear that alarm and reread *the words*, not your equations.

## @max-min-optimization

"Max/min" problems ask you to find the *greatest* or *least* possible value of some quantity, subject to a list of constraints. These are the final skill-set that separates 685 scorers from 725 scorers — they have no formula, just a strategy: **push everything else to the opposite extreme**. There is nothing to memorize except a way of thinking, which is exactly why they feel hard: the test writers have removed the procedural crutch and forced you to reason about feasibility. Get the reasoning habit right and these become some of the most *reliable* points on the section, because the answer is forced once you set up the constraints correctly. A formula can be misremembered; a clean feasibility argument cannot — once you have proved that no legal configuration does better, the answer is locked.

**The core strategy: to maximize X, minimize everything competing with X. To minimize X, maximize everything competing with X.** "Competing" means sharing a fixed budget. If five numbers must sum to a fixed total and you want one of them large, the other four must absorb as little of the total as possible. If a product must stay under a ceiling and you want one factor large, the other factor must shrink. Almost every GMAT max/min problem is a disguised version of "fixed budget, allocate it." Find the budget, find the competitors, and shove the competitors as far the other way as the rules allow. The budget is not always a sum — it can be a fixed product, a fixed count of items, a fixed perimeter, or a fixed total of "upgrades" you can afford. The first job on every problem is to name the budget out loud.

> **Self-explanation prompt.** Before reading on, say out loud *why* "minimize the competitors" maximizes the target. (Because the competitors and the target draw from one fixed pool — a sum, a ceiling, a count — so every unit you deny a competitor is a unit the target can claim. Max/min is allocation of a fixed resource.)

**Worked example (the classic "set with constraints").** Five distinct positive integers have mean 20 and median 18, with largest value 40. What's the greatest possible value of the smallest?

Write in order: `a < b < 18 < d < 40`. The middle element is the median, 18; the top element is 40. Sum must equal 100 (mean 20 times 5), so `a + b + d = 100 − 18 − 40 = 42`.

To maximize `a`, minimize `b` and `d` — but watch the chaining constraints:

- Smallest valid `d` is 19 (must be greater than 18 and be a distinct integer).
- Then `a + b = 42 − 19 = 23` with `a < b < 18`.
- Maximize `a` by making `b` as large as possible (just under 18). Try `b = 17`, then `a = 6`. Or `b = 13`, `a = 10`. Or `b = 12`, `a = 11`. Push: `b = 12`, `a = 11` (distinct, and 11 < 12 ✓). Try `b = 11`, `a = 12` — fails because `a < b` is required.
- Greatest possible `a = 11` with `(a, b, d) = (11, 12, 19)`. Check: 11 + 12 + 19 = 42 ✓.

Notice the subtle move: to maximize the *smallest* element you actually wanted `b` *large*, not small — because `b` is not competing with `a` here, it is the partner that lets `a` climb. The genuine competitor was `d`, which you pushed down to 19. Whenever a constraint chains two of your variables together (`a < b`), the right play is often to bring them close, not to extremize both. The instinct "minimize everything but the target" fails the instant two variables are roped together by an ordering rule — then one of them must travel *with* the target.

The template generalizes: for every max/min problem,

1. Write the constraints explicitly — turn every English phrase into a symbol or inequality.
2. Identify the **budget** (the fixed sum, ceiling, product, or count) and ask, "what competes with the target?"
3. Push the competitors to their extremes in the opposite direction.
4. Respect chaining constraints (ordering, distinctness) — sometimes a non-competitor must move *with* the target.
5. Check feasibility — re-substitute and confirm you violated no constraint, and that you used integers if integers were required.

> **Recall check.** Without looking back: in a "fixed sum of distinct positive integers, maximize the smallest" problem, do you make the larger elements as small as possible or as large as possible? (As small as possible — they are the competitors draining the fixed sum, so shrinking them frees up the most for the smallest element.)

**Worked example (harder set problem — minimize the largest).** Seven distinct positive integers have an average of 16. What is the least possible value of the greatest of them?

The sum is fixed at 7 times 16 = 112. We want the largest element small, so we must make the *other six* as **large** as possible — because every unit those six soak up is a unit the maximum does not have to carry. The real lever: to keep the maximum down, the other six should crowd up just beneath it, leaving the max only barely the biggest.

- Suppose the greatest is `G`. The other six are distinct positive integers all less than `G`, and to drain the most sum (so `G` can be small) they should be the six largest integers below `G`: `G−1, G−2, …, G−6`.
- Their total plus `G`: `G + (G−1) + (G−2) + ... + (G−6) = 7G − 21 = 112`.
- So `7G = 133`, `G = 19`.
- Check the set: `13, 14, 15, 16, 17, 18, 19` — seven distinct integers, sum = 112, average 16 ✓. Largest = **19**.

This is the mirror image of the first example, and it is worth holding both in your head as a matched pair: to **maximize the smallest**, the big ones shrink toward the middle; to **minimize the largest**, the small ones grow toward the middle. In both cases the optimum has the elements packed as tightly together as distinctness permits — a useful sanity check is that the answer set is often a **run of consecutive integers**. If your "optimal" set has a gap in it, you probably left value on the table and can do better.

Watch one edge case here: if "distinct" were dropped and the integers could repeat, the answer changes completely. With repeats allowed you would make the other six all equal to the smallest legal value (1 each), giving `G = 112 − 6 = 106` for a *maximum*-of-the-largest question, or for the *minimum* you would set six of them equal and let the seventh barely exceed — the distinctness word is doing enormous work. Always check whether "distinct" is present; it is the single most common silent constraint in set max/min problems.

**Worked example (mixture / blending max — corner points).** A bakery uses at most 12 cups of flour and 8 cups of sugar. Muffin recipe: 2 cups flour, 1 cup sugar. Cake recipe: 1 cup flour, 2 cups sugar. What's the maximum number of muffins + cakes?

Classic linear-programming setup, but on the GMAT it reduces to checking the corner points of the feasible region.

- Let m = muffins, c = cakes. Constraints: 2m + c ≤ 12, m + 2c ≤ 8, m ≥ 0, c ≥ 0.
- Corners (intersect pairs of lines): (0, 0), (6, 0) [from first hitting the m-axis], (0, 4) [from second hitting the c-axis], and (2m + c = 12) ∩ (m + 2c = 8) → solve: subtract to get m = 16/3, c = 4/3 — not integer, so the true corner is fractional.
- Total m + c at each integer corner: (6, 0) → 6; (0, 4) → 4.
- Try integer lattice points near the fractional intersection: m = 4, c = 2 gives 2(4)+2 = 10 ≤ 12 ✓ and 4 + 2(2) = 8 ≤ 8 ✓. Total = 6.
- Another check: m = 5, c = 1: 11 ≤ 12 ✓, 7 ≤ 8 ✓. Total = 6.
- Maximum is **6**.

The strategic point: the maximum of a linear quantity over a region always sits at a *corner*, but when the variables must be integers, the true corner may be fractional — so you check the **integer lattice points nearest the corner**, not just the corner itself. On the GMAT you almost never need formal linear programming; you list the corners, round inward, and test a couple of neighbors. The reason rounding *inward* matters: the fractional corner sits on the boundary of what is allowed, so rounding outward would step outside the feasible region and break a constraint.

> **Recall check.** When a linear quantity is maximized over a region but the variables must be integers and the true corner is fractional, which integer points do you test? (The integer lattice points just *inside* the fractional corner — round inward, never outward, then check the constraints at each.)

**Worked example (minimum with inequality constraint).** x + y + z = 30, with 4 ≤ x ≤ 8 and y, z ≥ 1 (integers). Minimum of xy?

To minimize xy with both factors positive, push one of them to the smallest feasible value. y can be as small as 1. Then x can be anything in [4, 8], and z = 29 − x. Minimum of `x × 1 = x` is `x = 4`. So min `xy = 4`. Here both factors are forced positive (y ≥ 1, x ≥ 4), so the naive "shrink both" instinct happens to work — but that is only safe *because* sign cannot flip. The next two examples show what happens when it can.

**Trap to watch.** On a *product* like xy, do not blindly minimize both factors — sometimes the factors trade off and the true minimum is at a corner you did not expect, especially if a factor can be **negative**. If x could be negative, "small x" might mean "very negative," and a negative times a positive gets *more* negative, so the minimum could run off to the boundary differently than your intuition says. Always ask: can any factor go negative? If yes, a large-magnitude negative may beat a small positive for the minimum, and a large-magnitude negative times a negative may give the *maximum*.

**Worked example (the negative-factor trap, hard).** −5 ≤ a ≤ 3 and 2 ≤ b ≤ 6. What is the minimum possible value of the product ab?

Here both endpoints matter and the sign flips things. The product of two ranges reaches its extremes only at the four corner combinations of endpoints — never strictly inside — so test all four:

- a = −5, b = 6: ab = −30
- a = −5, b = 2: ab = −10
- a = 3, b = 6: ab = 18
- a = 3, b = 2: ab = 6

Minimum is **−30** (the most negative `a` paired with the *largest* `b`, since a bigger positive multiplier makes a negative number more negative). The naive "minimize both" instinct (a = −5, b = 2 → −10) is wrong by a factor of three. **Procedure for product-of-two-ranges:** evaluate all four endpoint pairs and pick the extreme — this beats any clever shortcut and never misfires. The same four numbers also hand you the *maximum* for free here: it is 18 (a = 3, b = 6). One table of four products answers both the max and the min versions of the question.

> **Recall check.** For the minimum of a product where one factor's range includes negatives, where can the extreme value occur? (Only at the corner combinations of the two ranges' endpoints — so just test all four endpoint pairings.)

**The "greatest integer satisfying" template.** If an inequality pins down a range and asks for the greatest or least integer in it, solve the inequality, then pick the right endpoint — and watch strict vs. non-strict.

**Worked example.** `|2x − 5| < 9`. What's the greatest integer satisfying this?

- Expand the absolute-value inequality into a sandwich: `−9 < 2x − 5 < 9`.
- Add 5 across: `−4 < 2x < 14`. Divide by 2: `−2 < x < 7`.
- Strict inequality → 7 is excluded. Greatest integer: **6**.

If the inequality had been `≤ 9`, the range would be `−2 ≤ x ≤ 7` and the answer would jump to **7**. That single character — strict vs. inclusive — is the entire question. Slow down and read the symbol, and circle it on your noteboard before you solve.

**"At least" and "at most" constraints — convert to inequalities.** The English "at most 12" means ≤ 12, "at least 5" means ≥ 5, "no more than n" means ≤ n, "no fewer than n" means ≥ n. Translate carefully — these phrases determine whether the endpoint is included, which is frequently the whole game. A quiet companion phrase, "more than" / "fewer than," gives strict inequalities (>, <) and therefore *excludes* the endpoint; "at least / at most" *includes* it.

**The "smallest n such that" discrete-counting template (bracketing / estimation).** GMAT loves asking "what's the smallest n such that 2ⁿ > 1000?" — a guess-and-check with integer n. 2¹⁰ = 1024 > 1000, but 2⁹ = 512 < 1000. So n = **10**. These are always solved by **bracketing**: find the n that's too small and the n that's just big enough, and the answer is the smaller of the two that works. Do not solve with logarithms under exam pressure; estimate powers and squeeze. Knowing the early powers of 2 cold (…256, 512, 1024, 2048, 4096…) turns these into instant points.

**Worked example (backsolving on a max/min word problem).** A store sells pens for $3 and notebooks for $5. A customer wants to buy as many *items* as possible while spending exactly $43. What is the maximum number of items? The choices are 11, 12, 13, 14, 15.

This screams **backsolving** — and crucially you start from the *largest* answer choice, because the question asks for a maximum.

- Try 15 items: cheapest 15 items cost 15 × $3 = $45 > $43. Impossible — you cannot even afford 15 of the cheaper item, so 15 is out.
- Try 14 items: minimum cost 14 × $3 = $42. We have $1 left to "upgrade" some pens to notebooks; each upgrade swaps a $3 pen for a $5 notebook, adding exactly $2. $1 is not a multiple of $2, so we cannot land exactly on $43. 14 fails.
- Try 13 items: minimum cost 13 × $3 = $39, leaving $4 to spend on upgrades. $4 / $2 = 2 upgrades → 2 notebooks, 11 pens. Check: 11 × 3 + 2 × 5 = 33 + 10 = $43 ✓. Works.
- Answer: **13**.

The named tactic — **start backsolving from the extreme the question asks for** (largest choice for a max, smallest for a min) — is what makes this fast: the first choice that's even *feasible* is your answer, so you do at most a couple of trials. Note the "upgrade" reframing: instead of solving 3p + 5n = 43 with two unknowns, you treat every item as a cheap pen and ask how many $2 upgrades the leftover budget buys. That converts a Diophantine equation into a one-line divisibility check — a reusable trick whenever items come in two prices and the total is fixed.

**Max/min with percents.** "A book was marked up by at most 40% and then discounted by at least 10%. What's the greatest possible selling price as a percent of cost?" Push the markup high (40%) and the discount low (10%): 1.40 × 0.90 = 1.26 → **126%** of cost. The "at most" and "at least" wording determines which direction each lever moves. To get the *greatest* result, you want the multiplier as large as possible: largest allowed markup (1.40, the top of "at most 40%") times the *largest surviving factor* — and "at least 10% off" means the discount is at least 10%, so the *least* discount is exactly 10%, giving the surviving factor 0.90. Build the chain of multipliers, then for a maximum drive every multiplier as high as its constraint allows; for a minimum, as low.

> **Recall check.** "Marked down by at least 25%." For the *highest* possible final price, what discount do you apply, 25% or more? (Exactly 25% — "at least 25%" means the discount could be larger, but the smallest legal discount, 25%, leaves the most price, so it maximizes the final number.)

**Trap to watch.** "Greatest possible value" questions usually have a strict inequality somewhere — check whether that pushes a boundary up by 1 or leaves it where it is. Also, if the problem requires *distinct* values, you can't repeat — that often forces the "maximize A by minimizing B" answer one notch off what you'd naively expect. A third recurring trap: forgetting the **integer requirement** until after you've extremized, then discovering your "optimal" fractional answer is illegal and you must round *inward* (down for a max-count, up for a min-count) to the nearest feasible integer.

**Common mistakes.**
- **Extremizing the wrong variable.** You push a non-competitor, or you push a chained partner the wrong way (recall the `a < b` set where `b` had to go *up*).
- **Ignoring negatives in products.** Assuming "smallest factors" gives the smallest product when a factor can be negative; the extreme of a product of ranges lives only at the endpoint corners.
- **Strict vs. inclusive slip.** Treating `<` as `≤` and including the boundary integer (or vice versa).
- **Mistranslating "at least / at most."** Moving a lever the wrong direction because you didn't pin down which endpoint maximizes the result.
- **Dropping the integer/distinct constraint.** Reporting a fractional or repeated value that the problem forbade; always re-substitute the final answer into every constraint.
- **Rounding the wrong way.** Rounding a fractional corner *outward* and stepping outside the feasible region — always round inward.
- **Backsolving from the wrong end.** Starting from the middle choice instead of the extreme the question targets, doubling your work.

**Recap.** Max/min has no formula, only a reflex: find the fixed budget, identify what competes with your target, and shove the competitors to the opposite extreme — while honoring ordering, distinctness, and integer rules. Write constraints explicitly, push, then re-check feasibility. For products of ranges, test the four endpoint corners. For "smallest n such that," bracket with powers. For answer-choice problems asking for a maximum or minimum, backsolve starting from the extreme choice and take the first feasible one. The two traps that cost even strong test-takers points are the strict-vs-inclusive boundary and the hidden negative factor — slow down on the inequality symbol and on the sign of every variable, and these become free points.
