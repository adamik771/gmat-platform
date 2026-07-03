---
slug: quant-19-percents
title: "Percents & Percent Change"
section: Quant
estimated_minutes: 11
prerequisites:
  - quant-18-ratios-proportions
summary: |
  Percent translation, the multiplier method for change and successive change, and reverse-percent word problems. Pick 100 and plug in.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - ratios-percents-q7
      - ratios-percents-q8
  - id: percent-basics
    type: reading
    title: "Percent fundamentals — translation over memorization"
    check_question_ids:
      - ratios-percents-q51
      - ratios-percents-q34
  - id: percent-change-and-successive
    type: reading
    title: "Percent change — multipliers and why successive changes don't cancel"
    check_question_ids:
      - ratios-percents-q28
      - ratios-percents-q24
  - id: percent-word-problems
    type: reading
    title: "Percent word problems — reverse change, ratios from percents"
    check_question_ids:
      - ratios-percents-q11
      - ratios-percents-q13
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q9
      - ratios-percents-q22
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q43
      - ratios-percents-q12
---

## @percent-basics

"Percent" means "per hundred." 35% literally is 35/100, or 0.35. That's the entire definition, and every percent problem on the GMAT reduces to careful translation into one of two forms. There is almost nothing to *memorize* here beyond a fraction table — the skill is converting English into an equation cleanly and then doing arithmetic you can already do. Students lose points on percents not because the concept is hard but because they rush the translation step and put the wrong number in the denominator. Slow that one step down and this becomes some of the most reliable points on the Quant section. The payoff is disproportionate: percents underpin interest, growth, discounts, mixtures, and data-interpretation problems, so the few minutes you invest mastering translation here pay dividends across half the test.

**Form 1: fraction/decimal.** 35% = 35/100 = 7/20 = 0.35. Every percent is three faces of the same number: a percent, a fraction in lowest terms, and a decimal. Fluent test-takers slide between all three without thinking, picking whichever face makes the arithmetic easiest. If you need to take 25% of 48, the decimal 0.25 is fine, but the fraction 1/4 is faster — just divide by 4 to get 12. The decision rule is simple: if the percent matches a clean fraction (25%, 20%, 12.5%, 75%), use the fraction; if it's an odd number like 37% or 43%, the decimal or the decomposition method below usually wins. Training yourself to pick the easy face *before* you start computing is half the battle.

**Form 2: the "is/of/what" translation.** Percent word problems are translation exercises. Learn these mappings:

- "**is**" → =
- "**of**" → × (multiplication)
- "**what**" → unknown variable
- "**percent**" → /100

These four rules cover the overwhelming majority of percent sentences. The trick is that English doesn't always present them in equation order — "what percent of 80 is 35" and "35 is what percent of 80" are the same equation written in two word orders. Translate word by word in the order the rules tell you, not in the order the sentence happens to flow, and the equation falls out the same way every time. The grammar of English can reshuffle the surface order endlessly, but the underlying equation has exactly three slots — part, rate, whole — and your only job is to drop each number into its correct slot.

**Worked example.** "35 is what percent of 80?"

Translate: 35 = (x/100)(80). Solve: x = 3500/80 = 43.75. So 35 is 43.75% of 80.

**Worked example.** "What is 35% of 80?"

Translate: x = (35/100)(80) = 28.

**Worked example.** "18 is x percent of 60."

18 = (x/100)(60). x = 1800/60 = 30. So 18 is 30% of 60.

Once you've done 20 of these, the translation becomes automatic. You'll read "what percent of" and your hand will already be writing (x/100)(something).

> **Recall check.** Without looking back, what does each of these words become in an equation: "is," "of," "what," "percent"? (is → =; of → ×; what → the unknown variable; percent → divide by 100.)

**Worked example (the unknown is the whole).** "12 is 15% of what number?" This is the case students fumble, because the unknown is the *base*, not the percent.

Translate word by word: 12 = (15/100) × n. The "what number" is n, and it sits behind the "of," so it is the base. Solve: n = 12 / 0.15 = 80. **Check it:** 15% of 80 is 12 — yes. Notice the structural tell — when "what" comes right after "of," you are solving for the whole, so you will *divide* the known part by the known rate. When "what percent" appears, you are solving for the rate instead. The two unknowns behave oppositely: an unknown whole means you divide the part by a small rate and the answer gets *bigger* than the part; an unknown rate means you divide part by whole and get a percent. If your answer to "12 is 15% of what" came out smaller than 12, you inverted the division — a free sanity check.

**The 10%/5%/1% decomposition.** For computation under time pressure, 10% of anything is "move the decimal one left," and from there you can quickly get any round percent by addition or doubling. 1% is "move the decimal two left," and 5% is half of 10%. With just these three anchors you can build almost any percent the GMAT throws at you without touching long multiplication. Think of it as having three "coins" — a 10% coin, a 5% coin, and a 1% coin — and making change: any whole-number percent is a sum of these.

**Worked example.** 35% of 80, mental-math style.

- 10% of 80 = 8.
- 30% = 24 (three times 10%).
- 5% = 4 (half of 10%).
- 35% = 24 + 4 = 28.

Every answer choice on a percent problem usually has just one "right" computation; finding it fast comes from this decomposition.

**Worked example (harder decomposition).** Find 17.5% of 240 in your head.

- 10% of 240 = 24.
- 5% = 12 (half of 10%).
- 2.5% = 6 (half of 5%).
- 17.5% = 24 + 12 + 6 = 42.

That is a clean 42 with no written multiplication. The same build-from-pieces logic handles tip-style percents (15%, 18%, 20%) and tax-style percents instantly. For 18% you'd take 10% + 5% + 1% + 1% + 1%; for 8% you'd take 10% − 1% − 1%. Subtraction from a round anchor is often faster than addition up to it, so keep both directions in your toolkit.

> **Recall check.** You need 30% of 70 fast. What two pieces do you build it from, and what's the answer? (10% of 70 = 7, triple it → 21.)

**Estimation as an answer-choice tactic.** When answer choices are spread out, you often don't need the exact percent — a fast bracket is enough. "What is 48% of 610?" 48% is just under half, and half of 610 is 305, so the answer is a little under 305 — if the choices are 180, 245, 293, and 410, only 293 survives. **This is the estimation tactic: round the percent to a friendly neighbor (here 50%), compute, and adjust direction.** Reach for it whenever the choices aren't tightly clustered; it's far faster than exact arithmetic and immune to slip-ups. The discipline that makes estimation safe is always noting the *direction* of your rounding: because you rounded 48% *up* to 50%, the true answer must be *below* 305, which kills 410 and any borderline choice above your estimate.

**Worked example (estimation under pressure).** "A jacket priced at $79.95 is marked down by 40%. Approximately how much is the discount?" Round $79.95 to $80. 40% of 80 = 10% (= 8) tripled is 24, plus another 10% is 32. So the discount is about $32. If the choices are $24, $28, $32, and $48, you pick $32 without ever touching the messy $79.95 — **rounding the base to a friendly neighbor** turned a calculator problem into a two-second mental one. Note we rounded the base *up* by a nickel, so the true discount is a hair under $32, confirming $32 over any nearby choice.

**Common fraction-to-percent conversions to memorize cold:**

| Fraction | Percent | Fraction | Percent |
|---|---|---|---|
| 1/2 | 50% | 1/3 | 33.33% |
| 1/4 | 25% | 2/3 | 66.67% |
| 3/4 | 75% | 1/6 | 16.67% |
| 1/5 | 20% | 5/6 | 83.33% |
| 2/5 | 40% | 1/8 | 12.5% |
| 3/5 | 60% | 3/8 | 37.5% |
| 4/5 | 80% | 5/8 | 62.5% |
| 1/10 | 10% | 7/8 | 87.5% |
| 1/20 | 5% | 1/9 | 11.11% |

Drill this table until you can answer either direction in under a second. When a problem asks "what percent is 14/40?" you should see 14/40 = 7/20 = 35% without computation. The eighths are the highest-value rows to lock in, because 12.5%, 37.5%, 62.5%, and 87.5% appear constantly and are the slowest to compute from scratch. The thirds and sixths are worth memorizing as repeating decimals (1/3 = 33.33..., 1/6 = 16.67...) so a "16.67%" in the answer choices instantly reads as "one-sixth" and points you toward a fraction shortcut.

**Worked example (reading the table backward).** "Of 56 employees, 21 chose the early shift. What percent is that?" Compute 21/56. Both divide by 7: 21/56 = 3/8. From the table, 3/8 = 37.5%. No long division needed — the moment a fraction reduces to something in the table, you read the percent straight off.

**Worked example (backsolving with the table).** "A theater sold 5/8 of its 320 seats. A second show sold 60% of the same 320 seats. How many more seats did the first show sell than the second?" You could grind both products, but the smart move is to convert to percents and **backsolve from the cleaner number**. 5/8 = 62.5% and the second is 60%, a 2.5-percentage-point gap. 2.5% of 320 = (1% of 320 = 3.2) × 2.5 = 8. So the first show sold **8 more seats**. Recognizing 5/8 as 62.5% from the table is what collapses a two-multiplication problem into a single small one — the table *is* the shortcut here.

**Trap to watch.** Percent and percentage points are different. If a tax rate rises from 10% to 15%, that's 5 **percentage points** — but a 50% **percent increase** (5/10 = 50%). On the GMAT in particular, distinguishing these is the entire problem. A sentence like "unemployment rose 2%" is genuinely ambiguous in English: it could mean 2 percentage points (e.g., 5% to 7%) or a 2% relative increase (5% to 5.1%). The test exploits this. When you see a percent *of a percent*, stop and decide which reading the problem intends before you compute — guessing wrong here costs the whole question.

**Trap to watch (the missing base).** "Is 40% a lot?" is unanswerable without knowing 40% *of what*. A percent is meaningless until it's attached to a base. A percent that's never anchored to a dollar figure or a count can't be turned into an absolute amount, because it could describe any size of thing. Always ask "percent of what?" before treating a percent as usable information. A close cousin of this trap: two percents taken of *different* bases cannot be added or compared directly — 20% of store A's sales plus 30% of store B's sales is not "50% of anything" unless the two stores have the same base.

**A procedure to memorize for any single-percent problem:**

1. **Identify the three roles** in the sentence: the part, the whole (the "of" quantity), and the rate (the percent).
2. **Find which one is unknown** — that becomes your variable.
3. **Translate word by word** using is → =, of → ×, what → variable, percent → /100.
4. **Solve**, isolating the unknown. If the whole is unknown, you'll divide; if the rate is unknown, you'll divide the part by the whole.
5. **Sanity-check** by plugging the answer back in, and confirm the direction makes sense (a part should be smaller than its whole when the rate is under 100%).

> **Recall check.** In the procedure above, which step tells you whether you'll be dividing, and what's the rule for which way to divide? (Step 4 — divide the part by the *rate* when the whole is unknown; divide the part by the *whole* when the rate is unknown.)

**Common mistakes.**

- **Wrong denominator.** Putting the part where the whole belongs in a "what percent" problem — the "of" quantity is always the base (denominator).
- **Confusing percentage points with percent change** — see the tax-rate trap above.
- **Forgetting to divide by 100** — translating "x percent" as just x instead of x/100, which inflates answers by a factor of 100.
- **Treating a bare percent as a usable number** without identifying its base.
- **Adding or comparing percents taken of different bases** as if they shared one base.
- **Reaching for the calculator instinct** when a fraction from the table would have made it instant.

**Micro-drill.** Translate and solve — no calculator, 45 seconds total:

1. What is 35% of 120?
2. 54 is what percent of 180?
3. 12 is 15% of what number?

Answers: (1) **42** — 10% = 12, 30% = 36, 5% = 6, so 35% = 42. (2) **30%** — 54/180 = 3/10 = 30%. (3) **80** — 12 = 0.15 × n; n = 12/0.15 = 80. If (3) slowed you down, the signal phrase is "15% of what number" — the unknown is the whole, so you divide: the 'of' quantity goes in the denominator, and you're solving for it by dividing the other side.

> **Self-explanation prompt.** When you see "18 is what percent of 72," which number goes in the denominator? If you can say "72 — because 'of 72' is the reference quantity you're measuring against, and the 'of' always marks the base," you own the translation. The single most common percent error is putting the numerator and denominator in the wrong positions.

**Recap.** A percent is just a number over 100 wearing three faces (percent, fraction, decimal) — slide to whichever face makes the arithmetic easiest. Translate percent sentences word by word with is/of/what/percent, and remember the "of" quantity is always the base. Decide which role is unknown so you know which way to divide. Build round percents from the 10%/5%/1% anchors, memorize the fraction table cold (especially the eighths), estimate when answer choices are spread out, and never confuse percentage points with percent change or add percents across different bases. Get the translation right and the rest is arithmetic you already own.

## @percent-change-and-successive

Percent change measures how much something moved relative to where it started. It sounds simple — and the formula is — but this is where the GMAT hides some of its most reliable traps. The whole topic rewards one habit: stop subtracting, start multiplying. Once percent changes become multipliers in your hands, successive changes, reversals, and interest problems all collapse into a single arithmetic motion. The students who struggle here are almost always the ones who keep computing "the amount of the change" as a separate quantity and then bolting it back on; the students who breeze through it have trained their eyes to convert every "+18%" or "−40%" directly into a number they can multiply by. This section is about building that reflex until it runs without conscious effort.

**Formula:** percent change = (new − old) / old × 100.

**Worked example.** Price goes from $80 to $100. Percent change = (100 − 80) / 80 = 20/80 = 25%. Price increased by 25%.

Note the denominator: it's the **old** value. "Percent increase from 80 to 100 is 20%" would be wrong — 20 is the raw increase, and dividing by the new value (100) always understates the move. The reference point is always where you started, never where you ended. The single most common way to lose this point is the symmetric case: going from 100 to 80 is a 20% *decrease* (20/100), but going from 80 to 100 is a 25% *increase* (20/80). Same two numbers, two different percents, because the base flips. Whenever a problem moves a quantity down and then back up — or asks you to compare a fall and a rise — that asymmetry is the whole game.

**The multiplier model — the real workhorse.** Every percent change is a multiplier acting on the old value. Read the change, write the multiplier, and never look back:

- **+20% →** multiply by 1.20.
- **−25% →** multiply by 0.75.
- **+100% →** multiply by 2.
- **−100% →** multiply by 0 (everything gone).
- **+5% →** multiply by 1.05.
- **−40% →** multiply by 0.60.

The mechanical rule: an increase of x% is the multiplier (1 + x/100); a decrease of x% is (1 − x/100). A discount of 25% leaves you paying 75%, so the multiplier is 0.75 — the percent you *keep*, not the percent you lose. Training your eye to jump straight to "what fraction remains" is half the battle. A 40% off coupon means you pay 0.60; a 90% off clearance means you pay 0.10; "increased by half" means 1.50; "tripled" means multiply by 3 (a 200% *increase*, not 300% — tripling adds 200% on top of the original 100%). That last one is a classic GMAT snare: "increased by 200%" and "tripled" are the same thing, while "increased to 200%" only doubles.

**Worked example.** A $120 jacket is marked down 25%. Sale price?

0.75 × 120 = 90. You pay 75% of the original when the discount is 25%. One multiplication, done.

This beats the subtraction approach (find 25% of 120 = 30, then 120 − 30 = 90) on every problem with more than one step — which is every interesting problem. Subtraction forces two operations and a fresh base each time; multiplication just keeps stacking factors.

> **Recall check.** A quantity decreases by 35%. By what number do you multiply the original to get the result? (0.65 — you keep 65% of what you started with, since 1 − 0.35 = 0.65.)

**Successive percent changes — why they don't cancel.** The single most-tested trap in this topic.

**Worked example.** A stock goes up 20%, then down 20%. Net change?

Instinct says 0%. That's wrong. The 20% down applies to the *larger* value, so it subtracts more than the 20% up added.

Use multipliers: 1.20 × 0.80 = 0.96. Net multiplier 0.96 means a 4% decrease. The reason the two moves don't cancel is that they act on different bases — the +20% acts on 100, but the −20% acts on 120. Same percentage, bigger base, bigger dollar swing.

**Smart numbers check.** Start at $100. After +20%: $120. After −20% of $120 (= $24): $96. Loss of $4 on $100 = 4% decrease. Same answer.

This is the **plugging-in-numbers** strategy, and percent problems are its natural home: whenever a problem talks only in percents with no anchoring dollar value, **pick 100** as the starting amount. 100 makes every percent trivial to take, and the final number reads directly as a percent of the start. You will use this on nearly every abstract percent question, so make it a reflex. The only time to pick something other than 100 is when the problem chains a fraction like "two-thirds" alongside its percents — then a number divisible by 3 (say 300 or 900) keeps every step a whole number.

**The formula for the "up-by-x-then-down-by-x" pattern:** end value is always lower than start by (x/10)² percent. +10% then −10% → 1% loss. +20% then −20% → 4% loss. +50% then −50% → 25% loss. Memorize the pattern; on the test you'll just write −4%.

Why does that shortcut work? The multiplier is (1 + x/100)(1 − x/100) = 1 − (x/100)², a difference of squares. The result is always less than 1, which is why an equal up-then-down (or down-then-up — order doesn't matter, since multiplication commutes) always leaves you below where you started.

> **Self-explanation prompt.** A price increases 20% to $144. What was the original? State the move before computing. If you said "divide by 1.20" — correct, $144 / 1.20 = $120. If you subtracted 20% of $144 and got $115.20, you applied the percentage to the *new* value rather than the original. Percent change always runs forward from the old value; reversing it always means dividing by the multiplier.

**Worked example (hard, backsolving + estimation).** A share price rises 25% in January, then falls 25% in February, then rises 60% in March. Is the March-end price above or below the starting price, and by how much?

Chain the multipliers: 1.25 × 0.75 × 1.60. The first two give the up-down pattern: 1 − (2.5/10)² = 1 − 0.0625 = 0.9375. Then 0.9375 × 1.60 = 1.50. So the price is **50% above** where it started. Notice the **estimation** sanity check: the first two moves roughly wash out (slightly down), so a +60% on top should land a bit under +60% — and 50% fits. If an answer choice said "+85%," you'd reject it instantly: you can't beat the biggest single multiplier by chaining a near-wash before it. This estimation habit — bound the answer before you compute it — lets you eliminate two or three choices on hard percent problems even when you're unsure of the exact arithmetic.

**Chaining multipliers.** A +40% markup followed by a −25% discount gives 1.40 × 0.75 = 1.05 — a 5% net markup. Any sequence of percent changes reduces to the product of multipliers. There is no upper limit to how many you chain; the arithmetic never changes shape.

**Trap to watch.** Percent changes never add. +30% followed by +40% is NOT +70%. It's 1.30 × 1.40 = 1.82, an 82% increase. The longer the sequence, the bigger the compounding gap between adding and multiplying. The test writers know that under time pressure your brain wants to add — every "obvious" added answer is sitting right there in the choices as a trap. The same trap appears in disguise: "a population grows 10% per year for 3 years" tempts you toward 30%, but it's 1.10³ = 1.331, a 33.1% increase. Whenever you see "per year," "each period," or "successively," disarm yourself: these are multiply-not-add signals.

> **Recall check.** Two successive increases of 30% and 40% — what is the net percent increase? (82%, from 1.30 × 1.40 = 1.82 — not 70%, because percent changes multiply, never add.)

**When to use "reverse multiplier."** If you know the final value and the multiplier, divide — don't subtract.

**Worked example.** Revenue grew 50% to $900,000. What was it before?

New = 1.5 × old, so old = 900,000 / 1.5 = 600,000. Dividing by 2 gives $450,000 (wrong — that treats the 50% like "half added"). Subtracting 50% of 900,000 gives $450,000 too (wrong — subtracts from the new value). Always divide by the multiplier.

**Worked example (reverse, backsolving on the answers).** After a 12.5% discount, a coat costs $210. What was the original price, and how can answer choices speed this up? The clean route: original = 210 / 0.875 = $240. But suppose the choices are $225, $235, $240, $250, $260. Rather than divide, you can **backsolve** — test a choice by running the change *forward*, which is often easier mental math than dividing. Try $240: a 12.5% discount means you keep 7/8, and 7/8 of 240 = 210. Match — done, no long division. Backsolving turns a reverse-percent problem into a forward one, which is exactly the direction your multiplier instinct is trained for. The pro move when backsolving: the answers are sorted, so start with the middle choice ($240) — if it's too big you jump down, if too small you jump up, and you'll never test more than two values.

**Simple and compound interest — percent change across time.** Interest problems are just percent-change problems repeated over years. Two formulas, and compound dominates modern GMAT.

**Simple interest:** interest accrues each period on the *original* principal. Formula:

    FV = P × (1 + r × t)

where P is principal, r is the annual rate (as a decimal), t is years. Example: $1,000 at 6% simple interest for 3 years → FV = 1,000 × (1 + 0.06 × 3) = 1,000 × 1.18 = $1,180. The interest earned each year is the same $60, regardless of the balance.

**Compound interest:** interest accrues on principal *plus* all accumulated interest. Formula:

    FV = P × (1 + r)^t

for annual compounding. Example: $1,000 at 6% compounded annually for 3 years → FV = 1,000 × 1.06³ = 1,000 × 1.191016 ≈ $1,191. Note the **extra $11 beyond simple interest** — that's the "interest on the interest."

**Compounded more than once per year:**

    FV = P × (1 + r/n)^(n × t)

where n is compounding periods per year. Doubling n (semi-annual, quarterly, monthly) increases FV but with diminishing returns. Rarely tested on modern GMAT, but worth recognizing if it shows up.

**Worked example (compound, semi-annual).** $2,000 at 10% compounded semi-annually for 1 year. Here n = 2, so each period uses r/n = 5%, and there are n × t = 2 periods: FV = 2,000 × (1.05)² = 2,000 × 1.1025 = $2,205. Compare with annual compounding at 10%: 2,000 × 1.10 = $2,200. The extra $5 is the compounding-within-the-year effect. The trap the GMAT plants: do **not** use 10% per period — the rate is *per year*, so you split it across the periods.

**Worked example (compound, picking smart numbers).** A deposit doubles in value after some years at a fixed annual compound rate. After how many doublings does the original $1 first exceed $7? Pick the start as $1 (the natural smart number for a "doubling" question). Each doubling multiplies by 2: $1 → $2 → $4 → $8. After three doublings you have $8, which is the first value above $7. So **three** doublings. The lesson generalizes: compound growth questions phrased as "doubles every period" are pure powers of 2 — multiply, count, and stop the instant you cross the threshold rather than computing exact values.

The here-is-why behind all of this: **compound interest is nothing but successive percent changes** — the same rate applied every year. 6% for 3 years is 1.06 × 1.06 × 1.06 = 1.06³ — identical arithmetic to the chained markup problems above. If you can chain markups, you can do compound interest; they are the same skill wearing different clothes.

**When the GMAT doesn't say "simple" or "compound":** assume compound annually. Only use the simple-interest formula if the word "simple" appears explicitly in the question.

> **Recall check.** Close your eyes. State the two formulas: simple-interest FV and compound-interest FV (annual compounding). Now explain in one sentence *why* compound yields more than simple for t > 1. (Simple: FV = P(1 + r·t); compound: FV = P(1 + r)^t. Compound applies the rate to the growing balance, while simple always applies it to the original principal — so compound earns "interest on the interest" once t > 1.)

**Procedure to memorize — any percent-change problem in five steps:**

1. **Identify the base (old value).** Underline the word the change runs *from*. Every denominator and every multiplier hangs on this.
2. **Convert each stated change into a multiplier.** Increase of x% → (1 + x/100); decrease of x% → (1 − x/100). Read off the percent you *keep* for discounts.
3. **If multiple changes, multiply the multipliers together** in any order — never add the percents.
4. **Move in the right direction.** Forward (find the new value) → multiply the old by the product. Reverse (find the old value from the new) → divide the new by the product, or backsolve a choice forward.
5. **Translate the final multiplier back to a percent.** A product of 1.05 is +5%; 0.96 is −4%; 1.82 is +82%. Subtract 1 and read off the change.

**Common mistakes.**

- **Dividing by the new value** instead of the old in the percent-change formula — always understates an increase.
- **Adding successive percents** (+20% then +20% read as +40%) instead of multiplying (1.20 × 1.20 = 1.44, i.e. +44%).
- **Assuming up-x%-then-down-x% returns to start** — it always ends below, by (x/10)² percent.
- **Confusing "increased by 200%" with "increased to 200%"** — the first triples (×3), the second only doubles (×2).
- **Subtracting to reverse a change** ($144 after +20% is *not* 144 − 20%) instead of dividing by the multiplier.
- **Using the full annual rate per compounding period** when interest compounds more than once a year — split the rate (r/n) and count the periods (n·t).
- **Defaulting to simple interest** when the problem is silent — assume compound annually unless "simple" appears.

**Recap.** Percent change is one idea — a multiplier on the old value — applied in four directions. Forward: multiply. Reverse: divide (or backsolve forward). Successive: multiply the multipliers and never add them, remembering that equal up-and-down moves lose (x/10)² percent. Across time: that same chained multiplication *is* compound interest, FV = P(1 + r)^t, while simple interest, FV = P(1 + r·t), keeps paying on the original principal alone. Pick 100 whenever the problem is purely percent-based, anchor every calculation on the original value, bound your answer with a quick estimate before committing, and let the multipliers do the work your instinct keeps trying to do by subtraction.

## @percent-word-problems

This is where the "is/of/what" translation table earns its keep. The pattern never changes: take a sentence, parse it into an equation, solve. The skill that separates a 600-level percent solver from a 700-level one is not arithmetic — it's reading the English precisely enough to know *which* number is the base, *which* is the part, and *which way* the change runs. Almost every wrong answer on a percent word problem is the right arithmetic applied to the wrong base. The GMAT knows this, and it writes the answer choices specifically to reward the right-arithmetic-wrong-base error: the trap value is usually sitting right there in the lineup, waiting for you. This section drills the three patterns that account for the overwhelming majority of GMAT percent word problems: ratios-from-percents, markup-vs-margin, and reverse percent change. We close with the "dollar-anchor" principle that turns these into 700-level questions.

Before the patterns, anchor the one idea that underlies all of them: a percent is always a percent **of something**, and that something is the *base*. Change the base and you change the answer, even when every digit in the problem stays the same. The discipline that follows — underline the values, fix the base, fix the direction — is just a procedure for never losing track of the base under time pressure.

**The ratio-from-percents pattern.** "If 20% of x equals 35% of y, what is the ratio of x to y?"

Translate the sentence literally, left to right: 0.20x = 0.35y. Now you want x/y, so isolate it by dividing both sides by y and by 0.20:

    0.20x = 0.35y
    x/y = 0.35/0.20 = 7/4

So x:y = 7:4.

**Why x > y.** Intuition check, and a genuine answer-eliminator: if the *smaller* percent of x matches the *larger* percent of y, then x must be compensating by being bigger. A smaller chunk of a bigger number equals a bigger chunk of a smaller number. This inverse relationship is the fastest way to eliminate wrong answers — the moment you see "20% of x = 35% of y," you know x > y, so any answer choice with x:y less than 1 (like 4:7) is dead on sight, before you compute anything. On a five-choice problem the test-writer almost always plants the inverted ratio as a trap, so this single direction check often cuts the field in half for free.

**Worked example.** If 20% of a equals 80% of b, what is the ratio of a to b?

Translate: 0.20a = 0.80b. Solve: a/b = 0.80/0.20 = 4. So a:b = 4:1. Sanity check the direction: 20% (small slice) of a equals 80% (big slice) of b, so a must be much larger than b — and 4:1 says exactly that. Notice you can read the ratio almost instantly: the coefficients **cross over**. The percent attached to a (20) lands in the denominator, the percent attached to b (80) lands in the numerator. "20% of a = 80% of b" → a:b = 80:20 = 4:1. Name the shortcut: **cross the coefficients, then reduce.**

**Worked example (three-variable chain, harder).** If 25% of m equals 40% of n, and 40% of n equals 10% of p, what is the ratio m:n:p?

Don't panic at three variables — chain two cross-overs. From "25% of m = 40% of n," cross the coefficients: m:n = 40:25 = 8:5. From "40% of n = 10% of p," cross: n:p = 10:40 = 1:4 = 5:20 (scaling n to 5 so it matches the first ratio). Now stitch them on the shared variable n = 5: m:n:p = 8:5:20. Quick direction check — p carries the smallest percent (10%), so p should be the largest variable, and 20 is indeed the biggest term. The technique that makes this painless is **using the cross-over to keep the shared variable's value identical in both ratios**, then reading the chain straight off.

> **Recall check.** In "p% of x = q% of y," does the ratio x:y equal p:q or q:p? (q:p — the coefficients cross over, so the bigger percent ends up attached to the *smaller* variable. Quick check: 20% of x = 35% of y gives x:y = 35:20 = 7:4, and x is indeed the larger one.)

**Markup vs margin — a classic hard-GMAT trap.** "30% profit on cost" and "30% profit on selling price" use completely different bases, and the GMAT writes problems specifically to punish anyone who doesn't catch which one is stated.

- **Markup on cost (30%):** selling price = 1.30 × cost. Profit is measured as a fraction of what you *paid*.
- **Margin on selling price (30%):** cost = 0.70 × selling price. Profit is measured as a fraction of what you *charged*.

The trigger word is **"on."** Always find it, read what follows it, and let that be your base. "Profit on cost" → base is cost. "Profit (or margin) on selling price" → base is selling price. The dollar profit can be identical in two problems, yet the answer differs, because you are dividing that same profit by two different numbers. Keep a one-line mental table:

| Phrase | Base | Equation |
|---|---|---|
| 30% profit/markup on cost | cost | SP = 1.30 × cost |
| 30% margin/profit on selling price | selling price | cost = 0.70 × SP |

**Worked example.** A watch sells for $140 with 30% profit on the selling price. What's the cost?

"30% on selling price" means profit is 30% of 140 = 42. Cost = 140 − 42 = 98. Faster still, use the multiplier: cost = 0.70 × 140 = 98. Done in one multiplication.

If the problem had instead asked for the selling price at 30% profit on **cost**, starting from that same $98 cost: 1.30 × 98 = 127.40. Two different numbers — $98 vs $127.40 — for what sounds like the same "30%." That gap is the whole trap.

**Worked example (harder, with backsolving).** A retailer marks up an item 25% on cost, then sells it at a 10% discount off that marked price, and still earns a profit of $6. What was the cost? (A) $40 (B) $48 (C) $60 (D) $75 (E) $96

Algebra works: marked price = 1.25c; sale price = 0.90 × 1.25c = 1.125c; profit = 1.125c − c = 0.125c = 6, so c = 48. But under time pressure, **backsolving** is just as fast and harder to botch. Start with a middle choice, (C) $60: marked price 1.25 × 60 = 75; sale price 0.90 × 75 = 67.50; profit = 67.50 − 60 = 7.50. Too big — we need $6, so the cost must be smaller. Try (B) $48: marked price 60; sale price 54; profit = 54 − 48 = 6. Exact. Answer (B). Name the tactic: **backsolving** — plug the answer choices into the problem's own conditions; with profit problems the choices are concrete dollar amounts, so this is often faster than untangling the algebra. Note the bonus: testing one well-chosen middle value also told you the *direction* to move, so two evaluations settled a five-choice problem.

> **Recall check.** A coat costs the store $80 and is sold at 25% profit on the *selling price*. What is the selling price? (Cost = 0.75 × SP, so SP = 80 / 0.75 = $106.67. If you computed 1.25 × 80 = $100, you read it as 25% on cost — the wrong base. The word was "on the selling price," so the base is SP and cost is the 75% remainder.)

**Reverse percent change.** "After a 50% increase, the value is $900,000. Find the original."

Write new = old × multiplier, then solve for old. 900,000 = 1.50 × old → old = 900,000 / 1.50 = 600,000. You **divide** by the multiplier because the change already happened — the $900,000 is downstream of the increase, and you are walking it back upstream.

**Recognition tip.** When a word problem gives you a percent and a final (post-change) value, you are almost always going to divide by the multiplier. When it gives you a percent and an original (pre-change) value, you are going to multiply. Decide which one you have *before* touching the numbers.

**Worked example (the reverse-change trap, fully worked).** A jacket's price was reduced by 20%, and the new price is $60. What was the original price? (A) $48 (B) $72 (C) $75 (D) $80 (E) $90

The $60 is the *new*, post-discount price, so divide by the multiplier. A 20% reduction means multiply by 0.80, so original = 60 / 0.80 = 75. Answer (C). The seductive wrong answer is (B) $72 — that comes from adding 20% of $60 back ($60 + $12), which incorrectly applies the percentage to the *already-reduced* value. The 20% was taken off the *original* $75 (20% of 75 = $15, and 75 − 15 = 60, which checks). **Estimation** also rescues you here: a 20% cut is meaningful, so the original must be noticeably above $60 but not double it — that points at $75, not $72 (too close to $60 to represent a full 20% of the *larger* original) and not $90 (too high — that's a 33% gap). The arithmetic confirms what the estimate suggested.

**Trap to watch.** Read verb tense carefully — one word flips the arithmetic. "The price, after a 20% increase, is $60" has $60 as the **new** value (divide). "The price is $60 after being increased by 20%" — same thing, $60 is new (divide). But "The price is $60; it was then increased 20%" — now $60 is the **old** value (multiply: new = 72). Same numbers, opposite operations. Before you compute, underline the value and ask: is this *before* or *after* the change?

> **Self-explanation prompt.** Why do "30% profit on cost" and "30% profit on selling price" produce different results for the same stated percentage? If you can say "because the base is different — markup divides profit by cost (a smaller number), margin divides profit by selling price (a larger number), so the same dollar profit is a larger fraction of the smaller base," you'll instinctively hunt for the word 'on' before setting up any profit problem.

**Worked example (combining ratio + reverse change, hard).** After a 25% increase, a population is 60% of another town's population, which is 50,000. Find the original (pre-increase) population.

Work it in stages, never combining bases. Step one, the ratio: 60% of 50,000 = 0.60 × 50,000 = 30,000 — that is the *current* (post-increase) population. Step two, reverse the change: the 25% increase means current = 1.25 × original, so original = 30,000 / 1.25 = 24,000. The discipline that wins this problem is refusing to mix the two percents into one operation — resolve the "of" first, then walk back the change with a division. A direction check seals it: the population grew to 30,000, so the original must be smaller, and 24,000 is correctly below 30,000.

**Worked example (chained changes, with plugging in numbers).** A stock rose 20% in January, then fell 25% in February. Over the two months, what was the net percent change?

The ratio between start and end depends only on the multipliers, not on the starting price, so **plug in a convenient number** — pick 100, the percent-solver's best friend. Start at 100. After +20%: 120. After −25%: 0.75 × 120 = 90. End is 90, start was 100, so the net change is −10%. Name the move: **plugging in 100** turns abstract chained percents into concrete arithmetic. The general rule it illustrates: chain the multipliers, 1.20 × 0.75 = 0.90, a 10% net decrease. Crucially, this is *not* −5% (the naive "+20 − 25") — order doesn't matter to the product, but you must multiply the factors, never add the percents.

**The dollar-anchor principle.** Many hard percent questions hinge on whether you have a percent *plus a dollar anchor.* A percent alone can't give you an absolute amount — it could scale to any size. A dollar amount alone can't either — there's no rate to apply. But the two **together** pin down the answer. Train yourself to scan what a problem gives you and ask: "Do I have a rate, an absolute anchor, or both?" Only when you have both can you recover an actual dollar figure — so when a percent problem feels under-specified, the missing rate or missing anchor is usually exactly what makes it hard.

**Worked example (dollar-anchor logic).** A store raised the price of an item by 15%, and the new price is $46. By what dollar amount did the price increase?

Neither fact alone would get you there: a 15% rise could be a few cents or many dollars depending on the original price, and a $46 new price says nothing about the increase without a rate. Together they pin it down. Write `new = 1.15 × old = 46`, so `old = 46 / 1.15 = 40`, and the increase is `46 − 40 = $6`. That is the dollar-anchor principle in its purest form: a percent plus an absolute amount recovers the dollar figure, while either alone cannot. (You don't even have to finish the division to know the answer is determined — one linear equation in one unknown is enough.)

> **Recall check.** Why is "a price rose 15%" alone never enough to find the *dollar* amount of the increase? (A percent is a rate with no scale — 15% of $20 is $3, 15% of $200 is $30. Without an absolute anchor the dollar figure can be anything.)

**The procedure — memorize this.** For any percent word problem, run these steps in order:

1. **Underline every percent and every dollar/quantity value.** Tag each value as a *rate* (percent) or an *amount*.
2. **Find the base.** For "of" problems, the base follows "of." For profit problems, the base follows "on." For change problems, the base is the *original* (pre-change) value.
3. **Classify the direction.** Are you given the value *before* the change (then multiply) or *after* the change (then divide by the multiplier)?
4. **Write the equation as a multiplier.** new = old × multiplier; or part = (rate) × base. Avoid the subtract-then-recombine approach — it invites base errors.
5. **Solve, then sanity-check the direction.** Did the answer move the way the English demanded? If "20% of x = 35% of y," confirm x > y. If reversing a discount, confirm the original exceeds the sale price.
6. **If stuck on algebra, backsolve from a middle answer choice, or plug in 100 for an unknown base.** The answers are usually clean dollar amounts; plug them into the problem's own conditions.

**Micro-drill.** Apply the translation table and the procedure — 60 seconds total:

1. A price falls 30% to $91. What was the original price?
2. If 40% of x = 60% of y, what is x:y?
3. A coat sells for $200 with 20% profit as a margin on the selling price. What was the cost?
4. After a 20% increase, then a 25% decrease, a value is $60. What was the original?

Answers: (1) Old × 0.70 = 91, so old = 91 / 0.70 = **$130**. (2) 0.40x = 0.60y → x/y = 0.60/0.40 = **3:2** (cross the coefficients: x:y = 60:40 = 3:2). (3) Profit = 20% of 200 = 40, so cost = 200 − 40 = **$160** (margin on SP means cost = 0.80 × 200). (4) Net multiplier = 1.20 × 0.75 = 0.90, so original = 60 / 0.90 = **$66.67**. If (1) gave you $127 (= 91 − 20% of 91, or any subtract-from-$91 move), you applied the percent to the *new* value instead of recovering the old one — divide by the multiplier, never subtract from the already-changed value.

**Common mistakes.**

- **Wrong base.** Applying "30% off" to the sale price instead of the original, or dividing profit by selling price when the problem said "on cost." Always re-read the word after "of" or "on."
- **Adding back instead of dividing.** Treating "$60 after a 20% cut" as $60 + 20% of $60. The percentage lives on the *original*, so you divide by 0.80, not add to $60.
- **Inverting the ratio.** Writing x:y = p:q instead of q:p in "p% of x = q% of y." The coefficients cross over; the bigger percent attaches to the smaller variable.
- **Adding percent changes.** +20% then +30% is not +50%; it's 1.20 × 1.30 = 1.56, a 56% increase. Chain multipliers.
- **Mixing percentage points with percent change.** A rate moving from 8% to 10% is 2 percentage points but a 25% percent increase — keep the two languages separate.
- **Treating a lone percent as a dollar amount.** A rate without an anchor (or an anchor without a rate) can't produce an absolute figure — make sure you actually have both before computing a dollar change.

**Recap.** Three patterns cover nearly every percent word problem. Ratios-from-percents: translate "of" to "×," set the products equal, and cross the coefficients to read x:y = q:p. Markup-vs-margin: find the word "on," let it set the base, and remember markup uses cost (×1.30) while margin uses selling price (cost = 0.70 × SP). Reverse change: when you're handed the post-change value, divide by the multiplier — never subtract from the already-changed number, and chain multipliers (never add them) when several changes stack. Underline the values, classify each as rate or amount, fix the base, fix the direction, write a multiplier equation, and sanity-check that the answer moved the way the English demanded. Watch for the dollar anchor: to get an absolute dollar amount you need both a rate and an absolute value — either alone leaves the figure unscaled. When the algebra gets thick, backsolve from a middle choice or plug in 100 for the unknown base — the answers are clean dollars and the problem's own conditions will tell you which one fits.
