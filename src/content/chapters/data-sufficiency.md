---
slug: data-sufficiency
title: Data Sufficiency
section: DI
estimated_minutes: 55
prerequisites: []
summary: |
  Data Sufficiency is a game, not a math test. You don't solve for the answer — you decide whether you *could* solve for it given the information provided. The five-answer framework is mechanical: test each statement alone, then together if needed, and pick the letter that matches the sufficiency pattern. Master the AD/BCE decision tree, learn to rephrase the question before testing statements, and you'll finish every DS question in under 2 minutes without ever doing unnecessary arithmetic.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - data-sufficiency-q1
      - data-sufficiency-q2

  - id: the-five-answer-framework
    type: reading
    title: "The five-answer framework and the AD/BCE decision tree"
    check_question_ids:
      - data-sufficiency-q3

  - id: rephrasing-the-question
    type: reading
    title: "Rephrasing the question — the highest-leverage DS habit"
    check_question_ids:
      - data-sufficiency-q6
      - data-sufficiency-q21

  - id: value-vs-yes-no
    type: reading
    title: "Value DS vs. yes/no DS — the rules are different"
    check_question_ids:
      - data-sufficiency-q7
      - data-sufficiency-q22

  - id: picking-numbers-to-break
    type: reading
    title: "Picking numbers to prove insufficiency"
    check_question_ids:
      - data-sufficiency-q23
      - data-sufficiency-q26

  - id: the-c-trap-and-together-analysis
    type: reading
    title: "The C-trap and when 'together' genuinely matters"
    check_question_ids:
      - data-sufficiency-q11
      - data-sufficiency-q28

  - id: topic-specific-patterns
    type: reading
    title: "Topic-specific patterns — equations, inequalities, geometry, stats"
    check_question_ids:
      - data-sufficiency-q17
      - data-sufficiency-q20
      - data-sufficiency-q27

  - id: summary
    type: summary
    title: "The DS decision tree and the five highest-leverage habits"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - data-sufficiency-q1
      - data-sufficiency-q2
      - data-sufficiency-q3
      - data-sufficiency-q4
      - data-sufficiency-q5
      - data-sufficiency-q16
      - data-sufficiency-q17
      - data-sufficiency-q18
      - data-sufficiency-q19
      - data-sufficiency-q31
      - data-sufficiency-q32
      - data-sufficiency-q33
      - data-sufficiency-q34
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - data-sufficiency-q6
      - data-sufficiency-q7
      - data-sufficiency-q8
      - data-sufficiency-q9
      - data-sufficiency-q10
      - data-sufficiency-q20
      - data-sufficiency-q21
      - data-sufficiency-q22
      - data-sufficiency-q23
      - data-sufficiency-q24
      - data-sufficiency-q25
      - data-sufficiency-q26
      - data-sufficiency-q27
      - data-sufficiency-q35
      - data-sufficiency-q36
      - data-sufficiency-q37
      - data-sufficiency-q38
      - data-sufficiency-q39
      - data-sufficiency-q40
      - data-sufficiency-q41
      - data-sufficiency-q42
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - data-sufficiency-q11
      - data-sufficiency-q12
      - data-sufficiency-q13
      - data-sufficiency-q14
      - data-sufficiency-q15
      - data-sufficiency-q28
      - data-sufficiency-q29
      - data-sufficiency-q30
      - data-sufficiency-q43
      - data-sufficiency-q44
      - data-sufficiency-q45
---

## @the-five-answer-framework

Data Sufficiency looks different from every other question type on the GMAT. You're given a question and two statements, and asked whether the statements (individually or together) are *sufficient* to answer the question. You never have to compute the final answer — you only decide whether you *could*.

**The five answers (always the same, in the same order):**

- **A)** Statement (1) ALONE is sufficient, but statement (2) ALONE is not sufficient.
- **B)** Statement (2) ALONE is sufficient, but statement (1) ALONE is not sufficient.
- **C)** BOTH statements TOGETHER are sufficient, but NEITHER statement ALONE is sufficient.
- **D)** EACH statement ALONE is sufficient.
- **E)** Statements (1) and (2) TOGETHER are NOT sufficient.

Memorize these. Every DS question uses this exact list.

**The AD/BCE decision tree — the single most important tool in DS.**

Test Statement (1) alone first. Two outcomes:

1. **(1) is sufficient** → answer is either **A** or **D**.
2. **(1) is NOT sufficient** → answer is either **B**, **C**, or **E**.

Then test Statement (2) alone. Combined results:

| (1) alone | (2) alone | Answer |
|---|---|---|
| Sufficient | Sufficient | **D** |
| Sufficient | Not sufficient | **A** |
| Not sufficient | Sufficient | **B** |
| Not sufficient | Not sufficient | **C** (if together work) or **E** (if they don't) |

This grid eliminates guessing. Every DS answer falls out of two binary tests.

**Example.** "What is the value of x? (1) 3x + 7 = 22. (2) x is a positive integer less than 10."

Test (1): 3x = 15 → x = 5. Unique value → **sufficient**.

Test (2): x could be 1, 2, 3, ..., 9. Multiple values → **not sufficient**.

(1) sufficient + (2) not sufficient = **A**. Answer: A.

**The definition of "sufficient" — the single most misunderstood concept in DS.**

A statement is **sufficient** if it uniquely determines the answer to the question. That's it.

- For value questions ("What is x?"): sufficient = yields exactly one value of x.
- For yes/no questions ("Is x > 5?"): sufficient = the answer is always yes, OR the answer is always no. A definite answer — even if it's "no" — counts as sufficient.

The most common DS mistake: students think "sufficient" means "I know the value now." It doesn't. Sufficient on a yes/no question means "the question has a definite answer" — which can be yes or no.

**The "don't solve" principle.** You do not need to find x, y, or the final answer on DS. You only need to know whether you *could*. This saves massive time. A system of two independent linear equations in two unknowns is always solvable — you don't need to actually solve it on test day. The word *"independent"* is the key; see the C-trap section.

**The order matters.** Always test statement (1) first, then (2), then together only if both are individually insufficient. Skipping to "together" too quickly is the biggest source of wrong D vs. C answers.

> **Recall check.** Close your eyes. Recite the five answer choices (A through E) in order. Now — without peeking — state the four outcomes of the AD/BCE grid. (If (1) sufficient and (2) sufficient, answer is D. If (1) sufficient and (2) not sufficient, answer is A. If (1) not sufficient and (2) sufficient, answer is B. If both not sufficient individually, answer is C or E depending on whether they work together.) Forced retrieval of this grid is what converts DS from "which letter?" guessing into a mechanical evaluation. Redo this until it's automatic.

> **Trap to watch.** "Not sufficient" doesn't mean "gives no information" — it means "doesn't uniquely determine the answer." A statement that rules out 5 of 10 possible values is informative but insufficient. The standard is *uniqueness*, not *usefulness*.

## @rephrasing-the-question

The single highest-leverage DS habit: **before testing any statement, simplify the question.**

A question like "Is x² + 4x + 4 > 0?" looks different from "Is (x + 2)² > 0?" even though they're the same. The second form makes the answer obvious: (x + 2)² is always ≥ 0, and equals 0 only when x = -2. So the question really asks "Is x ≠ -2?" A clean rephrasing turns a complex statement test into a trivial one.

**The rephrasing workflow.**

1. Read the question.
2. Simplify algebraically if possible: factor, combine like terms, solve for the unknown.
3. Ask: "What do I actually need to know?" — write that down as a new, simpler question.
4. Then test the statements against the simpler question.

**Example.** "Is 4x + 2y = 10?"

Rephrase: divide by 2. "Is 2x + y = 5?" Same question, cleaner form. Now when you see Statement (1) "x + y/2 = 5/2," you multiply by 2 to get "2x + y = 5" — immediately **sufficient**.

**Example (yes/no rephrase).** "If n is a positive integer, is n² odd?"

A number's square is odd if and only if the number itself is odd. Rephrase: "Is n odd?" Now a statement like "n is divisible by 4" tells you n is even → n² is even → definite "no" — still **sufficient** (with answer "no").

**The "unknown elimination" rephrase.** When the question involves multiple unknowns, ask yourself: which unknowns do I actually need? If the question asks for x + y and you have x and y both unknown, you don't need to solve for x and y individually — you just need x + y. A statement giving you "x = 2y + 5" may or may not get you to x + y.

**Example.** "What is x + y?" Statement: "x - y = 4 and xy = 5."

From statement: (x + y)² = (x - y)² + 4xy = 16 + 20 = 36, so x + y = ±6. That's two possible values → **not sufficient**. But notice you didn't have to solve for x and y individually — you used the algebraic identity to get to x + y directly.

**Rephrasing geometry questions.** "Is triangle ABC isosceles?" Rephrase to "Does triangle ABC have at least two equal sides, OR equivalently, at least two equal angles?" The "or equivalently" form often lets you use statements about angles instead of sides (or vice versa).

**Rephrasing inequality questions.** "Is x > y?" often rephrases to "Is x - y > 0?" — now statements that give you info about "x - y" (like "x² > y²" or "x + y > 0") become relevant.

**The "what does sufficient require?" rephrase.** Before testing statements, explicitly write: "Statement (1) will be sufficient if it tells me _______." Filling in the blank forces you to know exactly what you're looking for.

**Example.** "What is the value of xyz?" A statement is sufficient if it uniquely determines xyz — it doesn't have to determine x, y, or z individually.

> **Self-explanation prompt.** Why does rephrasing save so much time? If you can say "because the question as written often obscures what you actually need; the rephrase strips away noise and makes it obvious which statements help," you've internalized the core DS discipline. Rephrasing is where experts gain 20+ seconds per question over novices.

## @value-vs-yes-no

DS questions come in two flavors, and the sufficiency criterion is different for each.

### Value DS

**"What is the value of x?"** or any question asking for a specific number.

Sufficient means: **exactly one numeric answer**. Any statement that yields multiple possible values of the target is insufficient.

**Example.** "What is x?" Statement: "x² = 16."

x could be 4 or -4 → **not sufficient**. Two possible values fail the uniqueness test. This is the #1 value DS trap.

**The unique-value test.** For every value DS, after testing a statement, ask: "Could there be multiple values of the target that satisfy this statement?" If yes → insufficient.

### Yes/No DS

**"Is x > 5?"** or any question asking yes/no, is it true, is it possible.

Sufficient means: **a definite yes OR a definite no**. Both "always yes" and "always no" are sufficient. Only "sometimes yes, sometimes no" is insufficient.

**Example.** "Is x > 5?" Statement: "x = 3."

Answer: definite "no" (3 is not > 5). This is **sufficient** — not because we answered "yes" but because we got a definite yes-or-no.

**Example.** "Is x > 5?" Statement: "x² > 10."

x² > 10 means x > √10 ≈ 3.16 OR x < -√10 ≈ -3.16. So x could be 4 (answer: no) or x could be 10 (answer: yes). Sometimes yes, sometimes no → **not sufficient**.

**The yes/no trap that every new DS student falls into.** Students assume "sufficient" means "the answer to the question is yes." It doesn't. A definite "no" is just as sufficient as a definite "yes." The standard is *definiteness*, not direction.

**Spotting yes/no questions.** Question stems that begin with "Is…", "Does…", "Can…", "Will…", "If…, is…", "Is it possible that…" are yes/no. Questions with "What…", "Which…", "How many…", "What is the value of…" are value questions.

**Why the distinction matters.** On yes/no questions, you can often prove sufficiency faster because you only need one logical direction to nail it down. On value questions, you have to pin down a single number — a higher bar, usually requiring more work.

**The "yes/no rephrase" trick.** Sometimes you can convert a value question into a yes/no and save time. "What is x?" becomes "Is x = 7?" — but this only works if you have a specific candidate. For most value questions, stick to the unique-value standard.

> **Recall check.** Close your eyes. State the sufficiency standard for value DS in one sentence. Now state the sufficiency standard for yes/no DS. (Answers: value = yields exactly one number; yes/no = yields a definite yes OR a definite no.) Getting these wrong is the cause of roughly 30% of mis-answered DS questions — drilling the distinction now pays off on every question in the problem sets.

> **Trap to watch.** Yes/no with a "no" answer. Statement (1) says "x = 3," question is "Is x > 5?" Some students call this insufficient because "it doesn't prove x > 5." That's wrong — it proves x is NOT > 5, which is a definite answer. Sufficient.

## @picking-numbers-to-break

When you think a statement might be insufficient, the fastest way to prove it: **find two values that both satisfy the statement but give different answers.** One counterexample is enough.

**The technique.**

1. Start with the simplest number that satisfies the statement (often 1, 2, or 0).
2. Plug into the question. Record the answer.
3. Find another number that also satisfies the statement but gives a *different* answer.
4. Two different answers → statement is insufficient.

**Example.** "Is x positive?" Statement: "x² > 4."

x = 3 satisfies (9 > 4). Question: positive? Yes.
x = -3 satisfies (9 > 4). Question: positive? No.
Two different answers → **not sufficient**.

**The number bank to always carry in your head:**

- 0 (integer, non-negative, non-positive, special)
- 1 (positive integer, smallest positive integer)
- -1 (negative integer)
- 2 (smallest prime, smallest even prime)
- 1/2 (positive fraction between 0 and 1)
- -1/2 (negative fraction)
- 100 (large positive)
- -100 (large negative)

These eight cover most number-property edge cases. When a DS question involves "x is a real number" or "n is an integer," test a few of these to see if the statement behaves differently across them.

**The critical categories to probe:**

- Positive vs. negative
- Zero
- Integer vs. fraction (when the problem doesn't specify)
- Large magnitudes vs. small
- Special numbers (1, -1, 0)

**Example.** "Is x > y?" Statement: "x² > y²."

Try x = 3, y = 2: 9 > 4, and x > y? Yes.
Try x = -3, y = 2: 9 > 4, and x > y? -3 > 2 is no.
Two different answers → **not sufficient**.

Without picking numbers, this is hard to see. With numbers, it takes 15 seconds.

**When NOT to pick numbers.** If the statement gives you a specific equation (like "3x + 7 = 22"), just solve it — picking numbers wastes time. Number-picking is for statements that have a *range* of possible values or involve inequalities or abstract conditions.

**The "don't fall for the first test" discipline.** Picking numbers proves *insufficiency*. One example of consistency doesn't prove sufficiency — it could be coincidence. To conclude sufficiency via number-picking, you'd need to try enough cases to be confident — which is usually slower than algebraic reasoning. Use number-picking to *disqualify* statements; use algebra to *confirm* them.

**The integer-only trap.** When the problem says "x is an integer," you can only pick integers. Don't break sufficiency by picking x = 1.5 if the problem restricts to integers — that's an invalid counterexample.

**The "variable in denominator" trap.** When x appears in a denominator, x ≠ 0 is an implicit constraint — don't pick 0 as a counterexample.

> **Trap to watch.** Students try x = 1 on *every* statement and conclude sufficiency when x = 1 works. That's not proof — just one data point. Always try at least two very different values (positive and negative, integer and fraction) before committing.

## @the-c-trap-and-together-analysis

The **C-trap**: the most common wrong answer pattern on hard DS. Students think they need both statements when one alone is sufficient.

**Why it happens.** Students read Statement (1), feel uncertain, then read Statement (2) which seems to fill a gap. They instinctively pick C (together sufficient). But (1) was actually sufficient alone — they just didn't fully work through it.

**The cure: commit to A/D or B/C/E before reading Statement (2).** If you've determined (1) is sufficient, the answer is either A or D — full stop. You can *then* check Statement (2) to distinguish between A and D, but you can't fall back to C.

**Example (C-trap).** "Is n divisible by 6? (1) n is divisible by 12. (2) n is even."

(1): n divisible by 12. Every multiple of 12 is a multiple of 6 (since 12 = 6 × 2). **Sufficient** (always yes).
(2): n is even. n = 2 (not div by 6). n = 6 (div by 6). **Not sufficient**.

Answer: A. Many students pick C because (2) "helps clarify" — but (1) alone nailed it.

**The reverse C-trap: needing together when you think one alone suffices.**

Systems of equations are the classic case. "What is x? (1) 2x + 3y = 14. (2) 4x + 6y = 28."

Naive student sees two equations, picks C. But (2) is literally twice (1) — same equation, no new information. Together, you still have one equation in two unknowns. **E.**

**The independence check.** Two equations in two unknowns pin down the variables only if they're *independent* — neither is a multiple of the other.

Two equations ax + by = c and dx + ey = f are independent if and only if ae - bd ≠ 0 (or equivalently, if the lines have different slopes).

**Example.** "x + y = 7 and 2x + 2y = 14." Not independent — second is 2× first. Together, still underdetermined.

**The "when does together genuinely help" checklist.** Together is meaningful when:

1. Each statement rules out different possibilities, and together they converge on a single case.
2. Each statement contains partial information (e.g., Statement 1 gives you x + y, Statement 2 gives you x - y — together you get both).
3. The statements provide independent equations.

**The "don't add info from the stem to statements" rule.** A common confusion: students include information from the question stem *only* when evaluating "together," forgetting that the stem's info is always available. The stem info applies to both (1) alone and (2) alone.

**Example.** "If x is a positive integer, what is x? (1) x < 5. (2) x² < 10."

(1) with stem info: x is a positive integer less than 5, so x ∈ {1, 2, 3, 4}. **Not sufficient**.
(2) with stem info: x is a positive integer with x² < 10. x ∈ {1, 2, 3} (since 4² = 16 > 10). **Not sufficient**.
Together: x ∈ {1, 2, 3} ∩ {1, 2, 3, 4} = {1, 2, 3}. **Not sufficient**. Answer: **E**.

Don't forget to apply stem constraints when evaluating each statement.

> **Self-explanation prompt.** Why is the C-trap so common on hard problems? If you can say "because hard DS is designed to make one statement *look* incomplete when it's actually complete — so defaulting to C feels safe but is exactly the wrong heuristic," you've internalized why DS discipline (commit to AD or BCE after Statement 1) is essential.

## @topic-specific-patterns

Each math topic has DS-specific patterns that come up repeatedly. Learning these collapses many hard DS questions to 30-second recognition problems.

### Linear equations

- **One equation, one unknown:** always solvable. Sufficient.
- **Two independent equations, two unknowns:** always solvable. Sufficient.
- **Two equations, two unknowns, DEPENDENT:** not sufficient (same line).
- **Three equations, three unknowns, all independent:** sufficient. But *count independent* equations, not visible ones.

### Inequalities

- **"Is x > y?"**: need to know the sign of x - y. Statements about squares, absolute values, or products can be tricky because they lose sign information.
- **Adding inequalities:** if a > b and c > d, then a + c > b + d. Works cleanly. *Subtracting* or *multiplying* inequalities does NOT work cleanly — signs matter.
- **Multiplying by a variable:** if you multiply by x without knowing x's sign, you can't preserve the inequality direction. Always check whether x > 0 or x < 0.

### Geometry

- **Similar triangles / ratios:** one ratio + one actual length usually pins down everything.
- **Right triangles:** if you have two sides (including hypotenuse specification), Pythagorean gets the third.
- **Regular polygons:** knowing the number of sides OR one interior angle pins down everything (since exterior angle = 360/n).
- **Inscribed figures:** the shared dimension (diagonal, diameter) is often the key piece.

### Statistics

- **Mean of n values:** you need the sum, which is mean × n. One piece of info about the sum + n is sufficient.
- **Median of an ordered set:** if you know the position of the middle, you know the median. Small sets are often pinned down by the values themselves.
- **Standard deviation:** rarely quantitative on DS. More often asks "does adding this value change the SD?" — answer depends on whether the new value is at the mean (SD decreases) or far from the mean (SD increases).

### Number properties

- **Divisibility:** "Is n divisible by 6?" = "Is n divisible by 2 AND 3?" Split it.
- **Even/odd:** even × anything = even, odd × odd = odd, even ± even = even, etc. Memorize the parity table.
- **Primes:** if n is described as "prime," the only even prime is 2 — always worth testing n = 2 as an edge case.

### Percentages and ratios

- **Percent change:** need both the start AND the end (or start and change amount).
- **Ratio problems:** a ratio alone is insufficient for absolute values; need either a total or one actual number.

**The "one-step principle."** On most DS questions, a statement should reduce the problem by exactly one degree of freedom. If you have two unknowns, a useful statement removes one. If you have a range of possibilities, a useful statement narrows it.

Count degrees of freedom: unknowns minus independent equations. When this reaches 0, you're sufficient.

> **Recall check.** Without looking: state the rule for when two linear equations in two unknowns are individually sufficient, together sufficient, or together insufficient. (Answers: individually never sufficient on their own if both have both unknowns; together sufficient if independent; together insufficient if one is a multiple of the other.) This single rule explains roughly 30% of DS answers.

## @summary

Data Sufficiency is the most mechanical question type on the GMAT once you internalize the framework. Every question resolves through two binary decisions and a handful of topic-specific templates.

**The DS decision tree (memorize this order):**

1. **Rephrase the question** if possible. Strip the noise; write the simplest equivalent form.
2. **Test Statement (1) alone.** Sufficient or not?
3. **Test Statement (2) alone.** Sufficient or not?
4. **Apply the AD/BCE grid:**
   - Both sufficient → D
   - (1) yes, (2) no → A
   - (1) no, (2) yes → B
   - Both no → test together (step 5)
5. **Test together.** If together sufficient → C. If together also insufficient → E.

**The five highest-leverage DS habits.**

1. **Never solve more than you have to.** Sufficient just means "you could" — skip the arithmetic.
2. **Rephrase before testing.** Simplified questions expose statement relevance 3× faster.
3. **Know the sufficiency standard.** Value DS = unique number. Yes/no DS = definite yes OR definite no.
4. **Commit to AD or BCE after Statement (1).** Don't slide to C when (1) was already sufficient.
5. **Use number-picking to prove insufficiency, algebra to prove sufficiency.**

**The number bank: 0, 1, -1, 2, 1/2, -1/2, 100, -100.** Memorize these. Deploy them whenever you suspect a statement is insufficient.

**Classic trap patterns:**

| Trap | Recognize it as… |
|---|---|
| "x² = 16" on value DS | Two values (±4), insufficient |
| "x > y" tested via "x² > y²" | Square loses sign info, insufficient |
| "Two equations" where one is a multiple of the other | Same info, not sufficient together |
| Answer choice C when A was actually sufficient alone | C-trap — commit before reading (2) |
| Yes/no "sufficient" requires a yes answer | No — a definite "no" is also sufficient |

**Time-management targets.**

- Easy DS: under 90 seconds.
- Medium DS: 90-120 seconds.
- Hard DS: up to 150 seconds.

If you're past 2:30 on any DS question, you're almost certainly over-computing. The whole point of DS is that you don't need the final answer. Step back, re-rephrase the question, and ask "what exactly do I need to know?" — that usually unsticks you.

**Common patterns to pattern-match on sight:**

| Problem says | Likely answer pattern |
|---|---|
| "One linear equation in one unknown" | Sufficient |
| "Two equations, two unknowns, independent" | Sufficient together (or each alone if each is enough) |
| "x² = k" for x value | Insufficient (two values) |
| "x is an integer, x² < 20" | Often sufficient if stem constrains sign |
| "Is n even?" with "n² even" | Sufficient — parity survives squaring |
| "Is the triangle right?" with "a² + b² = c²" | Sufficient by converse of Pythagorean |

Drill the 45 questions in this chapter's problem sets with the decision tree at your elbow. By the end, the AD/BCE grid should be unconscious — and your DS questions should average under 90 seconds.
