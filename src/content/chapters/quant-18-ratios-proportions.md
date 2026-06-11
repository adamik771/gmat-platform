---
slug: quant-18-ratios-proportions
title: "Ratios & Proportions"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-17-translating-word-problems
summary: |
  The parts model for ratios and chaining ratios by matching the shared term.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - ratios-percents-q1
      - ratios-percents-q2
  - id: ratio-fundamentals
    type: reading
    title: "Ratios — the parts model"
    check_question_ids:
      - ratios-percents-q3
  - id: ratio-to-ratio-conversion
    type: reading
    title: "Chaining ratios — making the shared term match"
    check_question_ids:
      - ratios-percents-q10
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - ratios-percents-q3
      - ratios-percents-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - ratios-percents-q5
      - ratios-percents-q6
---

## @ratio-fundamentals

A ratio is a **multiplicative comparison** between two quantities. When I say "the ratio of red to green pens is 4:7," I'm saying that for every 4 red pens there are 7 green ones — not that there are exactly 4 and 7, but that the counts come in multiples of those parts. The actual box could hold 4 and 7, or 8 and 14, or 400 and 700. The ratio fixes the *proportion*, never the raw count, until a total tells you the scale. A ratio is a relationship waiting for a multiplier; supply the multiplier and you get back honest-to-goodness counts.

**Mental model.** Ratios and percents are *multiplicative*, not additive. You can't add ratios, you can't add percent changes. A 30% increase followed by a 30% decrease isn't 0% — it's `1.30 × 0.70 = 0.91`, a 9% net decrease. Every error in this chapter traces back to treating these as additive when they're multiplicative; once that conversion is automatic, the rest is arithmetic. The deeper reason: a ratio carries no information about size, only about shape. Two boxes with completely different pen counts — 11 pens and 1,100 pens — can share the identical ratio 4:7. So your first job on any ratio problem is to recover the missing size information, which always arrives as a total, a difference, or one concrete count.

**The parts model.** Treat the numbers in a ratio as counts of identical "parts." If red:green = 4:7, then the total is 4 + 7 = 11 parts, red is 4/11 of the whole, and green is 7/11. This single idea — *every ratio term is a count of equal-sized parts* — is the engine for nearly every ratio question on the test. The parts are interchangeable units. Once you know what one part is worth, you know what every quantity is worth. Picture eleven identical boxes lined up: four labeled "red," seven labeled "green." Every box holds the same number of pens. The whole problem collapses to one question: how many pens are in each box?

**Worked example.** A box has 44 pens total, red and green in ratio 4:7. How many are green?

11 parts total, 44 pens total, so each part = 44/11 = 4 pens. Green = 7 parts × 4 pens/part = 28.

The whole game is finding the **value of one part**: divide the total by the *sum* of the ratio terms, then multiply that part-value by whichever term you need. Burn that two-step rhythm into reflex — "total over sum of parts gives one part, then scale up."

This scales to anything. Ratio 2:3:5 with total 50? That's 10 parts, each part worth 5, giving quantities 10, 15, 25. Notice the sanity check that comes free: the three quantities must add back to the total, and 10 + 15 + 25 = 50. Whenever you finish a ratio problem, re-sum your answers against the total — it catches a surprising share of slips.

> **Recall check.** To find the value of one part in a ratio problem, what do you divide the total by? (The *sum* of all the ratio terms — never by a single term.)

**Part-to-part vs part-to-whole.** The distinction that trips up more students than any other in this topic.

- **Part-to-part ratio:** red:green = 4:7. Red is 4/7 of green, not 4/7 of the total.
- **Part-to-whole fraction:** red/total = 4/11. Red is 4/11 of the total.

The problem will almost always state part-to-part. You convert to part-to-whole when you want a fraction or a percent of the total. The give-away word is "of": "what fraction *of the class* is girls" demands a part-to-whole answer (over the total), while "the ratio of girls *to boys*" stays part-to-part. Train your eye to find the word that follows "of" and "to" — those two little words tell you which denominator the problem wants. "Of the whole" means total in the denominator; "to boys" means boys in the denominator.

**Worked example.** If boys:girls = 3:5 in a class, what fraction of the class is girls?

Don't say 5/3. Don't say 3/5. Total parts = 3 + 5 = 8, so girls = 5/8 of the class. As a percent, 5/8 = 62.5%. Notice that the part-to-part ratio 3:5 secretly encodes the part-to-whole percentages 37.5% boys and 62.5% girls — the same information dressed two different ways. A ratio and a set of percentages-of-the-whole are translations of each other; fluency means moving between the two without thinking. Memorizing a few common ones pays off: 1:1 is 50/50, 1:2 is 33.3/66.7, 1:3 is 25/75, 1:4 is 20/80, 3:5 is 37.5/62.5.

**Worked example (estimation tactic).** A theater's seats are filled with adults and children in the ratio 7:2. If 720 seats are filled, roughly how many are children — closer to 120, 160, or 200?

Children are 2 of the 9 parts, so children = (2/9) × 720. Rather than grind it exactly, *estimate first*: 2/9 is just under 1/4, and 1/4 of 720 is 180, so the answer is a bit under 180. Of the offered values, only 160 fits "a bit under 180." Confirm exactly: 720/9 = 80 per part, children = 2 × 80 = **160**. Naming the tactic: when answer choices are spread out, **estimation** with a friendly nearby fraction (2/9 ≈ 1/4) eliminates choices before you commit to exact arithmetic. The skill that makes this work is keeping a small library of fraction-to-decimal anchors in your head — 1/3 ≈ 33%, 1/8 = 12.5%, 1/6 ≈ 17%, 1/9 ≈ 11% — so you can snap any ratio onto a nearby landmark.

> **Recall check.** Boys:girls = 3:5. Is "5/8" a part-to-part or a part-to-whole quantity, and what does it represent? (Part-to-whole — girls as a fraction of the *total* class.)

**Scaling ratios.** Ratios are only defined up to a multiplier. 4:7 = 8:14 = 12:21 = 40:70. Any time you want to compare a ratio against a total, scale until the parts sum matches the total — or keep a variable k for each part (red = 4k, green = 7k) and let algebra do the rest. The `k` method is the workhorse for harder problems: writing red = 4k and green = 7k turns a word problem into an equation you can solve. The two methods are the same idea wearing different clothes — "value of one part" *is* `k`. When the total is a clean multiple of the parts-sum, the divide-and-scale method is faster; when the problem layers in weights, prices, or a second condition, reach for `k` so you have an algebraic handle to manipulate.

**Worked example (the `k` method on a harder problem).** The ratio of nickels to dimes in a jar is 3:4. The total value of the coins is $3.40. How many dimes are there?

Don't guess at counts — set them up with one unknown. Let nickels = 3k and dimes = 4k. A nickel is worth 5 cents and a dime 10 cents, so the total value in cents is:

`5(3k) + 10(4k) = 340`

`15k + 40k = 340`

`55k = 340` → `k = 340/55`... that isn't a whole number, which is a signal to recheck. Total value $3.40 = 340 cents is correct; the setup is correct. So `k` need not be an integer here — what must be an integer is the *coin count*. Recompute: `55k = 340` gives `k = 6.18...`, and 4k would not be whole, so this exact total is impossible. The instructive point: the `k` method doesn't just solve — it **flags impossible setups**. Adjust the total to a clean $2.75: `55k = 275`, `k = 5`, dimes = 4k = **20**. The takeaway is the method: convert ratio terms to `3k`/`4k`, build the value equation, solve for `k`, then read off the quantity. (On the real test the numbers will be chosen to come out clean — a non-integer is your cue you misread.) Note the crucial subtlety this problem teaches: when the ratio is by *count* but the total is by *value*, you cannot just divide the dollar total by the parts-sum. You must weight each part by what it's worth — 3 nickels are worth less than 4 dimes even though "3" and "4" sit side by side in the ratio.

**Trap to watch.** Ratios are not differences. "Red:green = 4:7" does NOT mean "green has 3 more than red." It means "for every 4 reds, there are 7 greens." If the total is 44, green has 28 − 16 = 12 more than red, not 3. Always map the ratio onto real numbers before computing differences. The "3" is a difference of *parts*, not a difference of *items* — and one part here is worth 4 items, so the real gap is 3 parts × 4 = 12.

**Worked example (backsolving from the answers).** A scarf is woven from wool and silk threads in the ratio 5:3 by weight. If the scarf weighs 64 grams, how many grams are wool? (A) 24 (B) 32 (C) 40 (D) 48 (E) 56

You can solve forward — 8 parts, 64/8 = 8 per part, wool = 5 × 8 = **40**, choice (C). But notice the **backsolving** alternative when you distrust your setup: test (C) 40. If wool is 40, silk is 64 − 40 = 24, and the ratio is 40:24 = 5:3 after dividing by 8. It matches, so (C) is confirmed. Backsolving is especially valuable when the forward algebra feels error-prone: pick the choice, reconstruct the other quantity by subtraction, and check whether the ratio reduces to the target. A tactical note — start backsolving from the middle choice (C), since answer choices run in order; if (C) gives a ratio that's too wool-heavy, you know to jump to a smaller choice, and you've often eliminated three options with one test.

**Ratios with three or more terms.** Work identically. 2:3:5 means total = 10 parts, with each quantity at 20%, 30%, and 50% of the whole. The parts model scales up; the logic is the same. Three-term problems are also where the test likes to bury a second step — a percent taken off one slice, a new item added to one category — so stay alert after you've found the parts; the question rarely stops at "how many parts."

**Worked example (three terms, hardest tier).** A nonprofit splits a $9,000 grant among research, outreach, and admin in the ratio 5:3:1. After the split, it returns 20% of the *outreach* allocation to the donor. How much does outreach keep?

Two multiplicative steps stacked — exactly the kind of layering the GMAT uses to separate the careful from the rushed. First the parts: 5 + 3 + 1 = 9 parts, so one part = 9000/9 = $1,000. Outreach gets 3 × 1,000 = $3,000. Then the percent: returning 20% means keeping 80%, so outreach keeps `0.80 × 3,000 = $2,400`. Note the multiplicative move — keep 80%, don't subtract 20% as a flat number — exactly the mental model from the top of the section. **Answer: $2,400.**

> **Recall check.** In a 5:3:1 split of $9,000, what is the value of one part, and how do you get it? ($1,000 — divide the total $9,000 by the sum of parts, 5 + 3 + 1 = 9.)

**Worked example (plugging in numbers on an abstract ratio).** The ratio of a to b is 2:3, and the ratio of b to c is 4:5. What is the ratio of a to c? Here there's no total at all — the quantities are abstract. The clean tactic is **plugging in numbers**, but you must make b consistent across both ratios. The two values for b are 3 and 4; their least common multiple is 12. Scale the first ratio by 4 to get a:b = 8:12, and scale the second by 3 to get b:c = 12:15. Now b agrees at 12, so chain them: a:b:c = 8:12:15, and a:c = **8:15**. The lesson: to combine two-part ratios that share a middle term, scale each so the shared term matches (use the LCM of its two values), then read off the ends. Plugging in concrete numbers for the bridge term turns an abstract chaining problem into ordinary arithmetic.

**Procedure to memorize.** For any single-total ratio problem:

1. **Add the ratio terms** to get the total number of parts.
2. **Divide the given total by that sum** to get the value of one part.
3. **Multiply** the value of one part by whichever term(s) the question asks for.
4. If the question asks for a **fraction or percent of the whole**, put the relevant term *over the sum of terms* (part-to-whole), not over another term.
5. If the question asks for a **difference**, convert each ratio term to real items *first*, then subtract.
6. For an unknown total, assign **`k`** to one part (e.g. 4k, 7k), build an equation from the given information, solve for `k`, then read off the quantity.
7. To **chain two ratios** sharing a common term, scale each so the shared term matches (LCM of its two values), then read off the ends.
8. **Sanity-check** by re-summing your quantities against the total.

**Common mistakes.**

- Dividing the total by a single ratio term instead of by the **sum** of the terms.
- Reporting a part-to-part ratio (3/5) when the question wants a part-to-whole fraction (3/8), or vice versa.
- Treating a ratio as a difference ("4:7 means 3 more greens") instead of mapping to real counts first.
- Adding percent changes additively (30% up then 30% down ≠ break-even; it's a 9% net loss).
- Forgetting to scale the *difference of parts* by the value of one part when a problem asks "how many more."
- Dividing a *value* total straight by a *count* parts-sum when the items have different unit values (coins, weighted items) — weight each part first.
- Chaining two ratios without first matching the shared middle term, producing a garbled a:c.

**Micro-drill.** Apply the parts model — no calculator, 60 seconds total:

1. The ratio of apples to oranges in a basket is 3:8. There are 33 pieces of fruit total. How many oranges?
2. Boys and girls in a class are in ratio 5:7. If there are 84 students, how many more girls than boys?
3. A:B = 2:5 and the total is 42. What is A?

Answers: (1) 3 + 8 = 11 parts; each part = 3; oranges = 8 × 3 = **24**. (2) 12 parts, each = 7; boys = 35, girls = 49; difference = **14**. (3) 7 parts, each = 6; A = **12**. If (1) tripped you up, make sure you're dividing the total (33) by the sum of the ratio terms (11), not by one of the terms alone.

> **Self-explanation prompt.** Say out loud, in your own words, the difference between "3/5 of the class is boys" and "the ratio of boys to girls is 3:5." If you can explain why the first gives 60% boys and the second gives 37.5% boys, you've internalized the part-to-part vs part-to-whole distinction.

**Recap.** A ratio is a multiplicative comparison made of equal parts. Find the value of one part by dividing the total by the *sum* of the terms, then scale up. Keep part-to-part (term over term) strictly separate from part-to-whole (term over total). Map ratios to real counts before taking differences, weight each part by its unit value when the total is a value rather than a count, use `k` when the total is unknown, match the shared term before chaining two ratios, and when answer choices are present, reach for **estimation**, **backsolving**, or **plugging in numbers** to confirm fast. Master this one model and the rest of the chapter is arithmetic on top of it.

## @ratio-to-ratio-conversion

When two ratios share a term but use different scales, you have to line them up before you can combine them. This is the second most-tested ratio pattern on the GMAT after the parts model, and it is the engine behind a huge share of mixture, finance, and "combined work" questions. The whole skill reduces to one idea: **a shared quantity must be described by the same number of parts in every ratio that mentions it.** Once that alignment is in place, the rest is pure arithmetic — and the arithmetic is so light that a question the test designed to eat two minutes collapses into thirty seconds the moment you see the structure.

**The rule.** The shared variable must have the **same value** in both ratios before you can chain them. Until that is true, the two ratios live on different scales and cannot be read as one chain.

Here is the intuition. A ratio is a multiplicative comparison "up to a multiplier" — `a:b = 3:5` is the same relationship as `6:10` or `12:20`. So each ratio you are given is really a *family* of equivalent ratios, and you are free to pick whichever member of each family makes the bridge term agree. Picking those members is the entire game. Think of it like converting currencies before you add them: $5 and 5 euros are not "10" of anything until you express both in one unit. The bridge term is your common unit, and scaling is the conversion.

**The rule, stated as a contract.** When you scale a ratio, you change the *numbers* but not the *relationship*. `3:5` and `12:20` are the same statement about the world; `3:5` and `3:7` are not. Every legal move in this section preserves the relationship inside each ratio while changing the bridge term's raw count — that is the only freedom you have, and it is exactly enough.

**Worked example.** a:b = 3:5 and b:c = 4:7. Find a:c.

The b in "3:5" represents 5 parts, but the b in "4:7" represents 4 parts. They're inconsistent. Scale until b matches in both.

- Multiply the first ratio by 4: a:b = 12:20.
- Multiply the second ratio by 5: b:c = 20:35.

Now b is 20 in both, and you can combine: a:b:c = 12:20:35. So a:c = 12:35.

Notice what you did *not* do: you did not touch the original relationships, you only re-expressed each one in equivalent terms. 3:5 became 12:20 (both times 4), and 4:7 became 20:35 (both times 5). Both ratios are unchanged in meaning; they now simply agree on b.

**The mechanic: LCM of the shared values.** The fastest way to match the shared term is to take the LCM of its two values. 5 and 4 have LCM 20, so we scaled each ratio to put 20 in b. If b had been 6 in one and 9 in the other, scale to 18. The LCM keeps your numbers as small as possible, which keeps the arithmetic clean and the chance of a slip low. You can use any common multiple — the product of the two values always works — but the LCM is the tidiest choice. (When the two values are coprime, like 5 and 4, the LCM *is* the product, so there is nothing smaller to find; when they share a factor, like 6 and 9, the LCM 18 beats the product 54 and saves you real work.)

> **Recall check.** In `a:b = 3:5` and `b:c = 4:7`, what number do you scale b to, and what does each ratio get multiplied by? (LCM(5,4) = 20; multiply the first ratio by 4 and the second by 5.)

**Why this matters on test day.** The GMAT loves three-way ratio chains: a:b, b:c, and then it asks for a:c or the fraction a contributes to the total a + b + c. Lining up the shared terms is the only move; everything after is arithmetic. The same alignment trick also appears disguised — "the ratio of flour to sugar is 5:2 and the ratio of sugar to butter is 3:4," "Alice's pay to Bob's is 7:4 and Bob's to Carol's is 6:5" — but the structure is identical every time: find the bridge term, make it agree, chain. Train your eye to ignore the cover story (marbles, salaries, recipes, alloys) and read straight to the two ratios and their shared name.

**Worked example with totals.** If a:b = 2:3 and b:c = 6:7, and a + b + c = 68, find c.

Match b. First ratio: b = 3; second ratio: b = 6. LCM is 6. Scale first ratio by 2: a:b = 4:6. Now a:b:c = 4:6:7, total 17 parts. 68/17 = 4 per part. c = 7 × 4 = **28**.

A quick sanity sweep: a = 4×4 = 16, b = 6×4 = 24, c = 28, and 16 + 24 + 28 = 68. The total checks, so the answer is solid. On a real question, this one-line verification costs five seconds and catches most scaling errors.

**The procedure to memorize.** Treat every "chain two ratios" problem with the same five steps:

1. **Identify the bridge** — the single variable that appears in both ratios (here b, n, sugar, whoever is named twice).
2. **Read off the bridge's two values** — its part-count in ratio one and in ratio two.
3. **Take the LCM of those two values** — that is the common scale you will force.
4. **Scale each ratio whole** — multiply *every* term of a ratio by the factor that lifts its bridge value to the LCM. Never scale just the bridge term.
5. **Write the combined chain and answer the actual question** — extract a:c, build the part total, find "per part," whatever was asked.

Memorize "bridge, LCM, scale both terms, chain." That phrase is the whole section.

> **Recall check.** Which step is the one students most often botch? (Step 4 — they scale only the shared term and forget to multiply the *partner* term in that same ratio by the same factor.)

**Trap to watch.** Don't "add" ratios. 3:5 and 4:7 do not combine to 7:12 or any other direct sum. Ratios are multiplicative comparisons; chaining them requires matching the bridge term first. Adding the parts is the single most common wrong-answer generator the test writers plant here, and you can bet 7:12 (or its reduced/total forms) will sit right there in the answer choices to tempt you.

**Trap to watch.** Scaling only the bridge term. If you "fix" b but leave its partner alone, you have changed the meaning of the ratio. In `a:b = 2:3`, lifting b from 3 to 6 *requires* lifting a from 2 to 4 — the 2:3 relationship must survive. Multiply the whole ratio, every term, by the same factor, or the relationship breaks.

**Worked example — the partner-term trap, made concrete.** x:y = 2:5 and y:z = 3:4. Find x:z.

Bridge is y, with values 5 and 3. LCM(5, 3) = 15.

- First ratio, lift y from 5 to 15, so multiply by 3: x:y = 6:15. (x went 2 → 6, *not* left at 2.)
- Second ratio, lift y from 3 to 15, so multiply by 5: y:z = 15:20.

Chain: x:y:z = 6:15:20, so x:z = **6:20 = 3:10**. The wrong answer for someone who only scaled the bridge would be 2:20 = 1:10 — and that trap value will be in the choices.

**Worked example — when one ratio is already aligned.** p:q = 4:9 and q:r = 9:5. Find p:q:r.

Read the bridge first: q is 9 in both ratios already. No scaling needed. Chain directly: p:q:r = 4:9:5. The lesson — always check the bridge values *before* reaching for the LCM. If they already match, you are done; computing an LCM of 9 and 9 (which is just 9) is harmless but a beat of attention saves it.

**Worked example — backsolving on a chain question.** A jar holds red, white, and blue marbles. red:white = 3:4 and white:blue = 6:5. If there are 93 marbles total, how many are blue? (A) 12 (B) 20 (C) 25 (D) 30 (E) 36

The clean forward method: bridge is white, values 4 and 6, LCM 12. Scale red:white = 3:4 by 3 to get 9:12; scale white:blue = 6:5 by 2 to get 12:10. Chain red:white:blue = 9:12:10, total 31 parts. Here 93/31 = 3 per part, so blue = 10 × 3 = **30**, choice (D). Notice the cleanliness signal at work: 31 parts dividing 93 evenly is the green light that your scaling is correct. Had the total been, say, 90, then 90/31 is not a whole number — an instant alarm that either you scaled wrong or the test wants you to reread the total. That "does it divide cleanly?" check catches most arithmetic slips before they cost you the question.

Now the **backsolving** tactic, the answer-choice route to the same destination. When a chain problem gives a fixed total and asks for one quantity, the chain pins down each quantity's *fraction* of the whole — here blue must be 10 of every 31 parts, i.e. blue/total = 10/31. So blue = (10/31) × 93. Rather than multiply, you can pressure-test the choices: blue must be a multiple of 10 (since the blue part-count is 10), and (31/10) × blue must equal the given total of 93. Test (D) 30: (31/10) × 30 = 93. It matches exactly. **Backsolving** shines when the forward arithmetic is heavy but the answer choices are concrete numbers you can pressure-test against the fixed part-fraction — plug each candidate back and keep the one that makes the implied total land on the number the problem gave you, with every quantity a whole number.

> **Recall check.** Before you compute an LCM, what one thing should you always check first? (Whether the bridge term already has the same value in both ratios — if so, chain directly with no scaling.)

**Worked example — hard, with a hidden second bridge.** In a school, teachers:admins = 2:1, admins:students = 1:15, and the school has 540 people total. How many students are there?

Two ratios, bridge is admins, and it is conveniently 1 in both already (no scaling needed — apply the check from above). Chain straight: teachers:admins:students = 2:1:15. Total = 2 + 1 + 15 = 18 parts. 540/18 = 30 per part. Students = 15 × 30 = **450**. Sanity check: teachers = 60, admins = 30, students = 450, sum 540. Clean.

**Worked example — three ratios chained.** a:b = 2:3, b:c = 4:5, c:d = 6:7. Find a:d.

Chain left to right, fixing one bridge at a time.

- a:b = 2:3 and b:c = 4:5. Bridge b, values 3 and 4, LCM 12. Scale: a:b = 8:12, b:c = 12:15. So a:b:c = 8:12:15.
- Now bring in c:d = 6:7. Bridge c, values 15 and 6, LCM 30. Scale a:b:c = 8:12:15 by 2 → 16:24:30; scale c:d = 6:7 by 5 → 30:35. So a:b:c:d = 16:24:30:35.

Therefore a:d = **16:35**. The method does not change with more links — fix one bridge, chain, then treat the result as your new "first ratio" and fix the next bridge. Patience and small LCMs win. The one new discipline four-term chains demand is in step two of the second stage: when you scale `a:b:c` to make c agree, you must drag *all three* of its terms (8, 12, 15) up by the same factor, exactly as the partner-term rule warns — the chain you already built is now one ratio, and a ratio scales whole.

**Worked example — plugging in a real number for the bridge.** The ratio of cats to dogs at a shelter is 5:3, and the ratio of dogs to rabbits is 4:9. If the shelter follows these ratios exactly, what fraction of the animals are dogs?

Here is the strategic shortcut: **plug in a number for the bridge** instead of hunting for the LCM in your head. Let dogs = 12 (a number divisible by both 3 and 4 — that is the LCM, chosen on purpose so both ratios stay whole). Then from cats:dogs = 5:3, cats = (5/3) × 12 = 20. From dogs:rabbits = 4:9, rabbits = (9/4) × 12 = 27. Total = 20 + 12 + 27 = 59. Dogs are **12/59** of the animals. Picking a concrete bridge value turns two ratio statements into three plain counts, and the question answers itself. The trick is choosing a bridge value that is a multiple of both of its part-counts — which is just the LCM wearing a friendlier hat.

**Recognition tip.** If a problem gives you two ratios that share exactly one variable, you're in ratio-chaining territory. Line up the shared value before you do anything else. The tell is a variable (or named quantity) that appears in both ratio statements — that repeated name is your bridge.

**Common mistakes.**

- **Adding the ratios** (3:5 + 4:7 → "7:12"). Ratios are multiplicative; you align and chain, never sum.
- **Scaling only the bridge term** and leaving its partner unchanged, which silently destroys the original relationship.
- **Forgetting to check whether the bridge already matches**, then scaling unnecessarily and inviting an arithmetic error.
- **Reducing too early.** Reduce the *final* chained ratio, not the intermediates — reducing a partial chain can make the next bridge harder to align.
- **Dropping a term when scaling a long chain.** In a four-term chain, when you lift c to a new LCM you must multiply a, b, and c — all of them — by the same factor, not just c and d.
- **Answering the wrong question.** The problem asks for a:c, the fraction a contributes, or a raw count — make sure your last step matches the actual ask, not just "I built the chain."
- **Ignoring the cleanliness signal.** If your part total does not divide the given grand total evenly, suspect a scaling slip and recheck before committing.

**Micro-drill.** Chain each ratio pair — 60 seconds total:

1. x:y = 2:3 and y:z = 9:4. Find x:z.
2. m:n = 5:3 and n:p = 6:7. Find m:p.

Answers: (1) Match y: LCM(3, 9) = 9. Scale first by 3: x:y = 6:9. Chain: x:y:z = 6:9:4, so x:z = **6:4 = 3:2**. (2) Match n: LCM(3, 6) = 6. Scale first by 2: m:n = 10:6. Chain: m:n:p = 10:6:7, so m:p = **10:7**. If either answer surprised you, check that you found the LCM and scaled *both* the target term and its partner — not just the target term alone.

> **Self-explanation prompt.** Why can't you just read off a:c directly from the two given ratios without any alignment step? If you can say "because b represents a different unit size in each ratio — 5 parts in the first and 4 parts in the second — so treating them as the same b would mix two different scales," you will never skip the alignment step under pressure.

**Recap.** Two ratios sharing one variable can be chained, but only after that variable carries the **same value** in both. Find the bridge, take the LCM of its two part-counts, scale **every term** of each ratio (not just the bridge) to hit that LCM, then read off the combined chain and answer what was actually asked. When the bridge already matches, chain directly. When the question gives a total and asks for one quantity, build the part total and find "per part" — or backsolve the choices against the fixed part-fraction. When you would rather skip the LCM, plug a concrete multiple into the bridge and turn ratios into counts. Never add ratios; never scale a lone term; always glance at whether the bridge already matches and whether your part total divides the grand total cleanly. Master "bridge, LCM, scale both, chain," and three-way ratio problems collapse into one or two lines of arithmetic.
