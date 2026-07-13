---
slug: quant-17-translating-word-problems
title: "Algebra: Translating Word Problems"
section: Quant
estimated_minutes: 55
prerequisites:
  - quant-16-functions-sequences
summary: |
  The discipline of turning English into algebra cleanly — the skill underneath every applied problem.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - word-problems-q1
      - word-problems-q2
  - id: translation-discipline
    type: reading
    title: "Translation discipline — English to algebra without losing the meaning"
    check_question_ids:
      - word-problems-q13
      - word-problems-q14
      - word-problems-q47
      - word-problems-q52
      - word-problems-q59
  - id: word-problem-translation
    type: reading
    title: "Word-problem translation — English into equations"
    check_question_ids:
      - algebra-q45
      - algebra-q89
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - word-problems-q3
      - word-problems-q4
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q5
      - word-problems-q6
---

## @translation-discipline

Every word problem is two tasks welded together: translate English into algebra, then solve. Most errors happen in the first step — students set up the wrong equation and then solve the wrong equation correctly. That is the cruelest kind of miss, because every line of your arithmetic is flawless and the final answer is still wrong. Four discipline habits eliminate roughly 90% of translation errors, and the good news is they are *habits*, not insights — you don't have to be clever, you have to be consistent.

**Mental model.** Word problems are *translation* problems. The hard part is converting English ("twice as many," "after a 20% increase," "for every 3 X there are 5 Y") into equations. Once the equations are right, the algebra is mechanical. Almost every word-problem error is a translation error — a misread "more than" or a confused before/after — not an arithmetic one. The discipline: write the equation in symbols *before* you start solving. Think of yourself as a translator at the UN, not a mathematician — your job in the first 30 seconds is fidelity to the source language, nothing more. The mathematician in you gets to work only after the translator has finished.

**Habit 1: Define your variable explicitly, in words, with units.**

Not "x = amount" but "x = the number of dimes in the piggy bank." Writing out what the variable stands for — in full, with units — prevents the single most common mistake: solving for the wrong quantity.

Look at this problem: "Maria is 3 times as old as her daughter. If her daughter is 8, how old will Maria be in 6 years?" If you let `x = Maria's current age`, you'll answer 24. If you let `x = Maria's age in 6 years`, you'll answer 30. The algebra is fine either way; the question wants a specific one. Writing the variable clearly keeps you aimed at what the question actually asks.

The deeper reason this matters: the GMAT *engineers* trap answers around the wrong-quantity mistake. In the Maria problem, both 24 and 30 will almost certainly appear in the five answer choices, precisely because the test writers know that a student who forgets the "in 6 years" clause will land on 24 and feel confident. A clearly written variable definition is your insurance policy against handing the test-maker the miss they designed for. The two seconds you spend writing "in 6 years" next to your variable is the cheapest insurance on the entire exam.

**Worked example (easy).** A jacket costs $40 more than a shirt. Together they cost $96. How much does the shirt cost?

Define the variable around the *smaller, defining* quantity: let `s = the cost of the shirt, in dollars`. Then the jacket is `s + 40` dollars. The total clause gives `s + (s + 40) = 96`, so `2s + 40 = 96`, `2s = 56`, `s = 28`. The shirt costs **$28** (and the jacket is $68; check: 28 + 68 = 96, correct). Notice the variable definition carried the units — "in dollars" — so there is never a moment of doubt about whether the answer means dollars, cents, or "number of shirts." Had the question instead asked for the jacket, your clearly labeled definition would have stopped you cold at $28 and reminded you to add 40.

> **Recall check.** In the Maria problem, why do both 24 and 30 show up as answer choices? (Because 24 is Maria's *current* age and 30 is her age *in 6 years* — the test offers the wrong-quantity trap on purpose, so a sloppy variable definition walks you right into it.)

**Habit 2: Translate phrases literally, one clause at a time.**

English-to-algebra is a word-by-word conversion, not a summary. Build the equation clause by clause. Resist the urge to "see the whole thing at once" — that is exactly when you compress two clauses into one and lose a term.

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
| "p% more than y" | y(1 + p/100) |
| "p% less than y" | y(1 − p/100) |

**The word "is" = equals.** "Twice the sum of x and 3 is 20" becomes 2(x + 3) = 20. The equality always lives at "is." Find the "is" first, draw your `=` sign there, and translate the phrase on each side independently. This one move — anchoring on "is" — turns a wall of words into a left side and a right side you can attack separately. Other equality words to watch for: "equals," "is the same as," "results in," "gives," and "yields" all plant the `=` just as firmly as "is."

**Worked example (medium).** "The sum of a number and twice its reciprocal is 3." Set up the equation. Anchor on "is": the equals sign sits there. Left of "is": "the sum of a number and twice its reciprocal." Let `n = the number`; its reciprocal is `1/n`, twice that is `2/n`, and the sum is `n + 2/n`. Right of "is": `3`. So the equation is `n + 2/n = 3`. (Multiplying through by `n` gives `n^2 − 3n + 2 = 0`, factoring to `(n − 1)(n − 2) = 0`, so `n = 1` or `n = 2` — but the *translation* was finished the moment we wrote `n + 2/n = 3`. Stop and admire that the hard part was the English.)

**Worked example (medium, percent translation).** "A price is increased by 20% and then the new price is decreased by 25%. The final price is what percent of the original?" Translate one operation at a time. Let `p = the original price, in dollars`. "Increased by 20%" → multiply by `(1 + 20/100) = 1.20`, giving `1.20p`. "The new price decreased by 25%" → multiply *that* by `(1 − 25/100) = 0.75`, giving `0.75 × 1.20p = 0.90p`. So the final price is `0.90p`, which is **90%** of the original. **Trap inside the trap:** "20% up then 25% down" is *not* a net 5% down. You must apply each percent to the running total — `1.20 × 0.75 = 0.90`, a 10% net decrease — because the 25% is taken off the *larger* increased price, not the original. Percent changes compound multiplicatively; they never add.

> **Recall check.** Where does the equals sign always live in a translated sentence, and what should you do the instant you find it? (At the word "is" — draw the `=` there, then translate each side independently.)

**Habit 3: Pick which unknown to call the variable strategically.**

Given a choice, let the variable stand for the quantity that gives the cleanest equation. If one person is defined in terms of another ("John is 5 years older than Mary"), let Mary = x and John = x + 5, not the other way — the "+5" is cleaner than "−5." Small thing, but minus signs are where careless errors breed, so removing them up front pays off all session long.

**Example.** Three consecutive integers sum to 72. Find the largest.

Option A: let x = smallest. Integers: x, x+1, x+2. Sum: 3x + 3 = 72, so x = 23. Largest = 25.

Option B: let x = middle. Integers: x−1, x, x+1. Sum: 3x = 72, so x = 24. Largest = 25.

Option B is faster because the middle is the mean of the three — there's no "+1 +2" arithmetic. For any evenly-spaced group, let the middle element be the variable.

**Worked example (medium).** Five consecutive odd integers sum to 215. What is the largest? Center the variable: let `m = the middle (third) integer`. Consecutive *odd* integers step by 2, so the five are `m−4, m−2, m, m+2, m+4`. Their sum collapses beautifully — the offsets cancel in pairs — leaving `5m = 215`, so `m = 43`. The largest is `m + 4 = 47`. Had you centered on the smallest, you'd have written `x + (x+2) + (x+4) + (x+6) + (x+8) = 215`, i.e. `5x + 20 = 215` — correct, but with an extra step and a stray +20 begging to be mishandled. **Naming the trick: smart variable choice.** Put the variable where the algebra is symmetric, and the symmetry does your arithmetic for you.

**Habit 4: Check your answer by plugging back into the *original English*.**

After you get a numeric answer, read the problem again and verify that your number satisfies every stated condition. Not the algebra — the English. If you answered "30" but the problem says "Maria is 3× her 8-year-old daughter's age now," check: 3 × 8 = 24, not 30 — but the question asked about 6 years from now, and 24 + 6 = 30, which confirms the answer.

This single habit catches 80% of translation errors. The reason it is so powerful: a translation error corrupts the *equation*, so re-checking your *algebra* can never find it — you'd just re-confirm that you solved the wrong equation correctly. Only the original English is uncorrupted. That is the one source of truth, so that is what you check against.

**Backsolving — the answer-choice tactic that makes Habit 4 a primary weapon.** Because the GMAT is multiple choice, you can often skip setting up the equation entirely and *test the answers*. Start with the middle choice (B, C, or D); if it's too big, you know to go smaller, and vice versa. Because the five numeric choices on the GMAT are almost always listed in ascending or descending order, one test of the middle choice tells you which *direction* to move, so you rarely need more than two tests.

**Worked example (hard, with backsolving).** "Pencils cost $0.30 each and pens cost $0.50 each. Dana bought 12 writing implements for a total of $4.40. How many pens did she buy?" Answers: (A) 3 (B) 4 (C) 5 (D) 7 (E) 8.

You *could* set up `0.30(12 − p) + 0.50p = 4.40`. But backsolving is faster and trap-proof. Start with the middle choice, (C) 5 pens. Then pencils = 12 − 5 = 7. Cost = 7(0.30) + 5(0.50) = 2.10 + 2.50 = $4.60. Too high — we need $4.40, so we need *fewer* of the expensive pens. Go down to (B) 4 pens: pencils = 8, cost = 8(0.30) + 4(0.50) = 2.40 + 2.00 = $4.40, which matches. The answer is **(B) 4**. Notice you never had to translate "12 writing implements" into `12 − p` correctly — backsolving lets the answer choices carry the algebra, and it sidesteps the classic which-variable-is-which confusion entirely. **Name the trick: backsolving from the middle choice.** Use it whenever the answers are plain numbers and a forward setup looks fiddly.

> **Recall check.** Why must you verify against the original English rather than re-checking your algebra? (Because a translation error lives inside the equation itself — re-checking the algebra only re-confirms you solved the wrong equation correctly; the untouched English is your only source of truth.)

**Two-variable setups.** Many word problems force two variables (ages, coins, mixtures). Write two equations, then solve by substitution or elimination. The procedure is mechanical once the two equations exist — so, as always, spend your care on the translation and the solving will follow. A reliable signal you need two equations: the problem mentions two distinct unknown quantities *and* gives you two independent facts relating them (a total and a comparison, a count and a value, and so on).

**Example (ages).** Sara is twice as old as Tom was 10 years ago. Their ages sum to 62 now. Sara's age?

- Let S = Sara now, T = Tom now.
- Equation 1 (sum now): S + T = 62
- Equation 2 (Sara was twice Tom 10 years ago): S − 10 = 2(T − 10)

Wait — read Equation 2 carefully, because it hides the section's nastiest trap. "Sara is twice as old as Tom *was* 10 years ago." "Is" is present tense (Sara *now*), but "was 10 years ago" reaches back into the past for *Tom*. So the left side is Sara's current age `S`, not `S − 10`. The correct Equation 2 is `S = 2(T − 10)`. (The version `S − 10 = 2(T − 10)` would translate "Sara *was* twice as old as Tom was 10 years ago" — a different sentence.) With the correct equation: `S = 2T − 20`, substitute into `S + T = 62` to get `(2T − 20) + T = 62`, so `3T = 82` — which isn't a whole number, flagging that you should re-read tenses. The lesson stands regardless: in age problems, *match each clause to the right point in time before you write it*.

**Worked example (hard, ages done carefully).** "In 5 years, Anne will be twice as old as she was 5 years ago. How old is Anne now?" Let `a = Anne's age now`. "In 5 years" → `a + 5`. "She was 5 years ago" → `a − 5`. "Will be twice as old as" plants the `=` and the factor of 2 on the *past* quantity: `a + 5 = 2(a − 5)`. Solve: `a + 5 = 2a − 10`, so `a = 15`. Verify against the English: in 5 years she's 20; 5 years ago she was 10; is 20 = 2 × 10? Yes. The whole problem turned on attaching each clause to the correct year on the timeline — a literal one-clause-at-a-time translation (Habit 2) plus an English-level check (Habit 4).

**Worked example (hard, coins, with plugging in numbers).** "A jar holds only nickels and dimes, 30 coins in all, worth $2.40. How many dimes are in the jar?" Answers: (A) 6 (B) 12 (C) 15 (D) 18 (E) 24. Here is the full two-variable translation, then a faster tactic. Let `n = number of nickels` and `d = number of dimes`. Count clause: `n + d = 30`. Value clause (in cents, to avoid decimals): `5n + 10d = 240`. From the first equation `n = 30 − d`; substitute: `5(30 − d) + 10d = 240`, so `150 + 5d = 240`, `5d = 90`, `d = 18`. The answer is **(D) 18** (and `n = 12`; check value: 12 nickels = 60¢, 18 dimes = 180¢, total 240¢ = $2.40, correct). **Now name the shortcut: backsolving / plugging in numbers.** Rather than set up two equations, you could test (D) 18 dimes directly: 18 dimes + 12 nickels = 30 coins (count works), worth 180 + 60 = 240¢ (value works) — done in one line. When the answers are plain numbers and the relationships are simple counts-and-values, plugging a choice back into the *English* conditions is often faster than the algebra it replaces.

**Trap to watch.** Tense and before/after are where age and "change" problems break good students. "Twice as old as she *is*" (present) and "twice as old as she *was*" (past) point the factor of 2 at different quantities. Before you write any age equation, mark a small timeline — *past · now · future* — and place every clause on it. The factor (×2, ×3, +5…) belongs on whichever quantity the sentence is *comparing to*, not the subject of "is."

**Procedure to memorize (run this on every word problem):**

1. **Read once for the question.** Underline exactly what is asked, in words ("largest of the three," "Sara's age now").
2. **Define each variable in words, with units.** Write "let s = cost of one scone, in dollars," not "let s = scone."
3. **Translate clause by clause.** Find every "is" and draw an `=`; convert each surrounding phrase literally, left to right, one clause at a time — do not summarize.
4. **Choose variables strategically.** Center on the middle of evenly-spaced sets; define the dependent quantity off the independent one to keep signs positive.
5. **Solve** by substitution or elimination once all equations are written — or, when the answers are plain numbers, backsolve from the middle choice.
6. **Check against the original English**, confirming your number satisfies *every* clause and answers the *asked* quantity.

**Common mistakes.**

- **Solving for the wrong quantity** — getting `x` right but the question wanted `x + 6`. Habit 1 fixes this.
- **"Less than" reversal** — writing `5 − x` for "5 less than x" (it's `x − 5`). Read "less/fewer than" right-to-left.
- **Tense/timeline slips** in age and change problems — attaching the comparison factor to the wrong point in time.
- **Compressing clauses** — folding "18 more than twice the smallest" into a single guessed expression instead of building `2n + 18` piece by piece.
- **Percent-as-addition** — writing "20% more than x" as `x + 20` instead of `1.20x`, and treating "20% up then 25% down" as a flat 5% instead of compounding `1.20 × 0.75 = 0.90`.
- **Never checking** — accepting the first clean number without re-reading the English, which is the only place a translation error is still visible.

> **Self-explanation prompt.** Why does picking the "middle" variable work for consecutive-integer problems? If you can say "because the middle is the mean, so the sum collapses to (count)(middle) with no extra +1, +2 terms," you've internalized the why — and you'll apply it to evenly-spaced sets of any size.

**Note on the James-and-nephew problem.** Same template. Two clauses → two equations → substitute or eliminate. The arithmetic is more complex, but the structure is identical — and that sameness is the point: once the translation discipline is automatic, "hard" word problems are just "long" word problems.

**Recap.** Word problems are translation first, algebra second. Define variables explicitly in words and units; translate one clause at a time, anchoring on "is"; choose the variable that keeps the algebra clean and sign-positive; and verify against the original English — or backsolve from the middle answer choice when the answers are plain numbers. Watch the two recurring saboteurs: tense in age problems and addition-vs-multiplication in percent problems. Master those four habits and the wrong-equation miss, the most expensive error on the test, essentially disappears.

## @word-problem-translation

Most GMAT algebra questions arrive in English, not symbols. Translation is the bottleneck. The habit that wins: translate each English phrase into a single algebraic expression, left to right, without rearranging. The previous section gave you the four discipline habits; this section drills the *dictionary-level* mechanics — the exact phrase-to-symbol conversions where points are won and lost — and the answer-choice tactics that let you sidestep the algebra entirely when the setup is messy.

**Mental model.** Think of yourself as a court interpreter, not a paraphraser. An interpreter renders every clause faithfully and in order; a paraphraser captures the gist and drops the precision. GMAT word problems are written so that the gist is *almost* right but the precise translation is the only one that hits the answer. Your job is faithful, clause-by-clause rendering — then the algebra is mechanical. The questions are engineered so that the *paraphrase* lands on a wrong answer choice. That wrong choice is sitting in the lineup on purpose, waiting for the test-taker who translated for meaning instead of for structure. Faithful rendering is not pedantry; it is the difference between the credited answer and the booby trap.

**The translation dictionary:**

| English | Algebra |
|---|---|
| is, was, equals, will be | = |
| sum of, total, more than, increased by | + |
| difference, less than, decreased by, fewer than | − |
| product, of (with a percent), times, twice | × |
| quotient, per, ratio of | / |
| half as much as | x/2 |
| twice as many as | 2x |
| three more than | x + 3 (NOT 3 + x if "than" is explicit — same value but track which is "the thing") |
| three less than x | x − 3 (NOT 3 − x — this is the #1 translation mistake) |
| x is 20% more than y | x = 1.20y |
| x is 20% less than y | x = 0.80y |

Memorize this table cold. Every entry below "twice as many as" is a place where a confident-but-wrong reflex lives. The rows aren't trivia; each one is a trap the test writers reuse. Notice that addition and multiplication are *commutative* (3 + x equals x + 3, and 2 times x equals x times 2), so for those you can write the operands in either order and the value is identical. But subtraction and division are *not* commutative — "3 less than x" and "x less than 3" are genuinely different numbers — which is exactly why the subtraction and division rows are where the points leak out. Order only matters where the operation cares about order; train your eye to slow down precisely there.

**The "less than" trap.** "5 less than x" is x − 5, not 5 − x. Read right-to-left when you see "less than" or "fewer than." Similarly, "5 more than x" is x + 5. The mental rule: "less than" and "more than" both *attach to the thing that comes after them* and *operate on it from outside*. So "5 less than [x]" means start at x, take away 5. The number you say first is the amount of change; the thing after "than" is the base. A reliable physical check: if you have $20 and you have 5 dollars *less than* your friend, your friend has *more*, so your friend has x where x − 5 = 20, giving x = 25. The "less than" amount always gets subtracted from the larger, later-named quantity. Whenever the word order tempts you to write the smaller number first, flip it.

> **Recall check.** Translate "8 fewer than three times n." (Answer: 3n − 8 — "fewer than" subtracts the stated amount from the base, which here is the whole expression "three times n.")

**Worked example.** (easy) The sum of three consecutive even integers is 24 more than twice the smallest. Find the largest.

Let the three integers be n, n + 2, n + 4. Sum: 3n + 6. "24 more than twice the smallest" = 2n + 24.

Equation: 3n + 6 = 2n + 24 → n = 18. Largest: n + 4 = 22.

Notice the literal rendering of "18 more than twice the smallest": twice the smallest is 2n, and "18 more than" that adds 18 *to* it, giving 2n + 18 — not 18 − 2n and not 2(n + 18). Render the inner phrase first, then the outer. One more discipline point: the question asks for the *largest*, not the smallest n. A test-taker who solves for n = 12 and grids 12 has done all the algebra correctly and still missed the point — the answer is n + 4 = 16. This is why Step 1 of the procedure (underline the target) is non-negotiable.

**Worked example.** (easy-medium, naming the strategy: backsolving) A number increased by 30% of itself equals 91. What is the number? Choices: (A) 60 (B) 65 (C) 70 (D) 75 (E) 80.

The clean translation is x + 0.30x = 91, i.e. 1.30x = 91, so x = 70 — choice (C). But suppose the algebra rattles you under time pressure. **Backsolve**: the answers are sorted, so start in the middle with (C) 70. Then 70 + 30% of 70 = 70 + 21 = 91. That matches, so (C) is correct and you can stop. Backsolving the middle choice first means at most you test two values before you've cornered the answer. The reason you start in the middle is monotonicity: as the candidate number grows, "the number plus 30% of it" grows too. So if (C) had come out *too big* (say it gave 105), you would jump *down* to (A) or (B); if too small, you jump *up* to (D) or (E). One test of a sorted middle choice tells you not just whether it's right but which direction to move — that's the whole power of backsolving.

**The unit-matching habit.** In word problems with mixed units (dollars, hours, kilograms), write units next to every variable. "A muffin costs m dollars" → m has units of dollars per muffin. Check that equations have matching units; a mismatch almost always means a translation error. If one side of your equation is "dollars" and the other is "muffins," you have not written a real equation — you've written nonsense that happens to have an equals sign. Units are a free correctness check that costs nothing: when "distance = rate × time" and you confirm that (miles/hour) × (hours) genuinely cancels to miles, you have caught the most common rate-problem inversion before it costs you a point.

**Worked example.** (medium, naming the strategy: two-variable elimination) At a bakery, 2 muffins and 3 scones cost $24, while 4 muffins and 1 scone cost $18. Find the cost of one scone.

Let m = dollars per muffin, s = dollars per scone.

- 2m + 3s = 24
- 4m + s = 18

From equation 2: s = 18 − 4m. Substitute: 2m + 3(18 − 4m) = 24 → 2m + 54 − 12m = 24 → −10m = −30 → m = 3. Then s = 18 − 12 = 6.

Strategy note: substitution was clean here because equation 2 had a coefficient of 1 on s — solving for that lone variable produced no fractions. **When a system has a variable with coefficient 1, isolate that variable; it keeps the arithmetic fraction-free.** Had both coefficients been 2 or larger, elimination (scale one equation, add or subtract to cancel a variable) is usually faster than substitution. Always verify at the end: 2(3) + 3(6) = 6 + 18 = 24, and 4(3) + 6 = 18. Both hold. And once more, read the target: the question wanted the scone, s = 6, not the muffin. Solving the system fully and then circling the wrong variable is a classic avoidable miss.

> **Recall check.** In a 2-variable system, when should you prefer substitution over elimination? (Answer: when one variable already has a coefficient of 1, so isolating it avoids fractions; otherwise elimination is usually cleaner.)

**Rates and percents in words.** A 20% raise: multiply by 1.20. A 20% cut: multiply by 0.80. "30% of x" is 0.30x. "Twenty percent more than x" is 1.20x, not x + 20. Always convert percents to decimals before multiplying. The single most common percent error is treating a percentage as if it were a fixed number of units — "20% more" is *not* "20 more." Percentages scale; they don't add a constant.

A second percent subtlety: percentages compound, they don't simply add. A 20% increase followed by a 20% decrease does *not* return you to the start. Start at 100: up 20% gives 120; down 20% of 120 gives 96. The net is a 4% loss, because each percent operates on a different base. Whenever you see *two* percent changes in sequence, multiply the factors (1.20 × 0.80 = 0.96), never add the percentages. The deeper reason the result is a *loss* and not a wash is that the 20% you gave back was 20% of the *larger* number 120, so you removed more than you added. Sequential percent changes are multiplication of factors, full stop.

**Worked example.** (medium, naming the strategy: plugging in a smart number) A shirt's price is increased by 25% and then the new price is decreased by 20%. The final price is what percent of the original? Choices: (A) 95% (B) 100% (C) 105% (D) 110% (E) 120%.

The phrase "the original" with no stated value screams **plug in a smart number** — pick 100 because percents are easy off 100. Original = 100. Up 25%: 100 × 1.25 = 125. Down 20%: 125 × 0.80 = 100. Final is 100, which is 100% of the original — choice (B). The trap answer is (C) 105% (from naively doing +25 − 20 = +5%); the factor method (1.25 × 0.80 = 1.00) confirms (B). Picking 100 turned an abstract percent chain into one-line arithmetic. Smart numbers work on any "percent of" question where no actual quantity is given — and 100 is almost always the right pick for percents because every percentage of 100 is just the percentage itself.

**Trap to watch.** "Three more than half of x" is x/2 + 3, not (x + 3)/2. Parse the English by the last operation first: "more than" is the outer verb, applied to "half of x" (inner). Always resolve inner phrases before outer ones. Contrast with "half of three more than x," which *is* (x + 3)/2 — there the "half of" is the outer operation. Word order encodes grouping; the phrase nearest the front is usually the *outermost* operation, and you build the expression from the inside out. A quick gut check with numbers exposes the error instantly: let x = 10. "Three more than half of x" is 5 + 3 = 8; the wrong reading (x + 3)/2 gives 13/2 = 6.5. Different numbers, so they are different expressions — when in doubt, plug in a value and compare.

> **Recall check.** Translate both: "5 less than twice x" and "twice 5 less than x." (Answers: 2x − 5 and 2(x − 5). The first applies "less than" last; the second applies "twice" last. Order of phrases sets the grouping.)

**Worked example.** (hard, multi-clause age problem) In 4 years, Carla will be three times as old as her son will be at that time. Six years ago, Carla was five times as old as her son was then. How old is Carla now?

Let C = Carla now, k = son now. Translate each clause literally.

- "In 4 years, Carla will be three times her son's age then": C + 4 = 3(k + 4).
- "Six years ago, Carla was five times her son's age then": C − 6 = 5(k − 6).

Expand both: C + 4 = 3k + 12 → C = 3k + 8. And C − 6 = 5k − 30 → C = 5k − 24. Set equal: 3k + 8 = 5k − 24 → 32 = 2k → k = 16. Then C = 3(16) + 8 = 56. Carla is 56.

Verify against the *English*, not the algebra: in 4 years Carla is 60 and her son is 20 — is 60 = 3 × 20? Yes. Six years ago Carla was 50 and her son was 10 — is 50 = 5 × 10? Yes. Both clauses check, so 56 is confirmed. Note the discipline: each "then" pinned the ages to a *specific point in time*, and "+4" or "−6" was applied to *both* people, not just one. The classic age-problem error is shifting only one person's age in time — writing C + 4 = 3k instead of C + 4 = 3(k + 4). Both people live in the same year, so both ages move together.

**Worked example.** (hard, naming the strategy: estimation as a sanity filter) A tank is 5/8 full. After 30 liters are added, it is 7/8 full. What is the tank's total capacity? Choices: (A) 80 (B) 100 (C) 120 (D) 150 (E) 200.

Translate: the 30 liters fill the gap from 5/8 to 7/8, which is 2/8 = 1/4 of the tank. So (1/4) × capacity = 30 → capacity = 120 liters, choice (C). **Estimation filter** as a backup: 30 liters is a quarter of the tank, so the whole tank is roughly four times 30, around 120 — only (C) is in that neighborhood, which would let you answer even if you blanked on the exact fraction arithmetic. The estimate and the exact answer agree, so you commit with confidence. The trap to avoid here is anchoring on "7/8" and computing 30 ÷ (7/8); the added liters correspond to the *difference* between the two fill levels, not either level alone. Translating "the gap" as a subtraction of fractions, 7/8 − 5/8, is the whole problem.

**Procedure to memorize (run this on every word problem):**

1. **Read once for the question.** Underline exactly what is asked and in what units (Carla's age now? the largest integer? percent of original?). This is your target.
2. **Define each variable in words, with units**, choosing the unknown that yields the cleanest equation (coefficient-1 variables, "+5" over "−5").
3. **Translate clause by clause, inside-out.** Render each phrase as one expression in word order; resolve inner phrases before outer; treat "is/was/will be" as the equals sign.
4. **Write every equation before solving any of them.** One equation per independent clause; two clauses generally mean two equations.
5. **Solve** by substitution (when a variable has coefficient 1) or elimination, keeping arithmetic fraction-free where you can.
6. **Check by plugging back into the original English**, not the algebra, and confirm the answer is in the units the question demanded.

When the equations look ugly or you're short on time, jump to an **answer-choice tactic before grinding**: backsolve the middle choice, plug in a smart number (100 for percents), or estimate to eliminate. The test rewards the answer, not the derivation. A practical rule of thumb: if a problem hands you five numeric answer choices and asks "what is the value," backsolving is on the table; if it says "percent of" with no concrete amount, smart numbers are on the table; if the choices are spread far apart, estimation alone may finish it.

**Common mistakes.**

- Writing "5 − x" for "5 less than x." It's x − 5. Read "less than" and "fewer than" right-to-left.
- Treating "20% more" as "+20" instead of "× 1.20." Percentages scale a base; they are not fixed additive constants.
- Adding sequential percent changes (25% up then 20% down ≠ +5%). Multiply the factors; each percent acts on a new base.
- Mis-grouping nested phrases: "three more than half of x" is x/2 + 3, not (x + 3)/2. The frontmost phrase is the outermost operation.
- Shifting only one person's age through time in age problems. Every "in 4 years / 6 years ago" applies to *all* parties at once.
- Solving correctly but answering the wrong quantity — the largest instead of the smallest, the future age instead of the current one. Step 1 (underline the target) prevents this.

> **Self-explanation prompt.** Translate in one breath: "the number of boys is 5 fewer than twice the number of girls." If you wrote b = 2g − 5, you've got it. If you wrote b = 5 − 2g, re-read — "fewer than" means subtract from the bigger thing. Now say *aloud why* the base is "twice the number of girls" and not just "girls": because "twice the number of girls" is the complete inner expression that "fewer than" operates on. If you can articulate that, you'll never invert a "less than" again.

**Recap.** Translation is faithful interpretation, not paraphrase: render every clause in word order, inside-out, with "is" as equals and units attached to each variable. The high-frequency traps are "less than" (subtract from the base, read right-to-left), percents (multiply by 1.20 or 0.80, never add a constant, and never add sequential percentages), and nested phrases (frontmost phrase is the outermost operation). Run the six-step procedure, verify against the English in the demanded units, and when the algebra turns ugly, reach for backsolving, smart numbers, or estimation — the score is for the right answer, however you reach it.
