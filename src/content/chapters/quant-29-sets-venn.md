---
slug: quant-29-sets-venn
title: "Sets & Venn Diagrams"
section: Quant
estimated_minutes: 25
prerequisites:
  - quant-28-classic-word-problems
summary: |
  The inclusion-exclusion principle and the two- and three-set Venn templates.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - word-problems-q29
      - word-problems-q30
  - id: sets-and-venn
    type: reading
    title: "Sets and Venn diagrams — the inclusion-exclusion template"
    check_question_ids:
      - word-problems-q17
      - word-problems-q19
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - word-problems-q31
      - word-problems-q75
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q38
      - word-problems-q90
---

## @sets-and-venn

Set-membership problems (club membership, product preferences, committee overlaps) feel intimidating because the prose buries a clean structure. The good news: every one of them reduces to **one identity** and **one framework**. Once you can recognize the type and reach for the right template, these become some of the most mechanical points on the Quant section. The whole game is translating words into a count where each person is counted *exactly once* — overlap is the enemy, and inclusion-exclusion is how you tame it.

Before any algebra, force yourself to answer three setup questions: How many attributes (sets) are in play — two or three? Is there a "neither" group sitting outside all the sets? And what exactly is the question asking for — an overlap, an exactly-two count, a total? Nail those three and the right tool picks itself. Almost every error on this topic traces back to skipping one of those three questions and diving straight into arithmetic.

**Two-set identity.** For any two groups A and B:

    |A ∪ B| = |A| + |B| − |A ∩ B|

In English: the total in A or B equals total in A plus total in B minus the overlap. The reason you subtract the overlap is that anyone in both groups got counted twice — once in |A| and once in |B| — so you remove one of those copies to count them once. That single phrase, "subtract the double-count," is the soul of every set problem on the test.

The identity rearranges to whatever the question hides:

    |A ∩ B| = |A| + |B| − |A ∪ B|

Plug in the three known values, solve for the missing one. There are only four quantities in the whole equation — |A|, |B|, |A ∪ B|, and |A ∩ B| — so the test can hide any one of them and ask you to recover it. Whatever the prose calls them, there are still only four slots; your job is to label each given number into its slot and read off the empty one.

**Worked example.** (easy) 80 students; 45 study Spanish, 38 study French, 12 study neither. How many study both?

- First strip out the "neither" group, because the identity only governs the people inside at least one set. Studying at least one = 80 − 12 = 68. That 68 is |S ∪ F|.
- By the identity: 68 = 45 + 38 − |S ∩ F|.
- |S ∩ F| = 45 + 38 − 68 = **15**.

Notice the structural move: the "neither" count never enters the identity directly. It is removed up front to find |A ∪ B|. Forgetting this step is the single most common two-set error — students plug 80 in where 68 belongs and get 3, which is wrong by exactly the size of the neither group.

> **Recall check.** In |A ∪ B| = |A| + |B| − |A ∩ B|, why do you subtract the intersection exactly once rather than twice? (Because each person in both groups was counted twice — once in |A|, once in |B| — and you want them counted once, so you remove exactly one of the two copies.)

**Worked example.** (medium) In a survey of 200 people, 130 own a car, 90 own a bike, and 25 own neither. How many own *only* a car?

- People owning at least one = 200 − 25 = 175.
- Overlap (both): 175 = 130 + 90 − |both| → |both| = 220 − 175 = **45**.
- "Only a car" means car owners who are not also bike owners: 130 − 45 = **85**.

The trap here is answering 45 (the overlap) or 130 (all car owners) when the question wants the *exclusive* region. Always reread whether the question wants "both," "only A," "only B," or "at least one" — those are four different numbers from the same diagram. A useful habit: once you have the overlap, jot all four regions in the margin (only-A, only-B, both, neither) so the one you need is already sitting there no matter how the question phrases it.

**Worked example.** (medium, plug-in check) A small office has some employees who know Excel and some who know SQL. Exactly 60% know Excel, exactly 50% know SQL, and 20% know neither. What percent know both? Here no total is given, so **plug in a convenient number** — pick 100 people, since the figures are percents.

- Out of 100: Excel = 60, SQL = 50, neither = 20, so at least one = 100 − 20 = 80.
- 80 = 60 + 50 − both → both = 110 − 80 = 30.
- So **30%** know both.

Naming the tactic: when a problem is entirely in percents or fractions with no head-count anchor, **plug in 100** (or another clean total). The identity is the same; you just dodge the algebra of variables.

**Trap to watch.** "Neither" and "both" are opposite traps that ride together. "Neither" sits *outside* every set and must be subtracted from the grand total before you apply the identity. "Both" sits in the *intersection* and is what the identity adds or removes. Mixing them up — subtracting the overlap from the wrong total, or forgetting the neither group entirely — is the number-one source of wrong answers on two-set problems. When you see both words in one problem, slow down and label each explicitly before touching the identity.

**Three-set identity.** For three groups:

    |A ∪ B ∪ C| = |A| + |B| + |C| − |A∩B| − |A∩C| − |B∩C| + |A∩B∩C|

You subtract every pairwise overlap (each was double-counted) and then add back the triple overlap (it got subtracted one time too many — counted 3 times in the singles, removed 3 times in the pairs, so it needs +1 to land at a single count). This raw form is rarely tested directly. Far more common is a refactored version that sorts people by *how many* of the three sets they belong to.

**The "exactly two / exactly three" framework.**

Let:

- t = total people in at least one set
- n₁ = number in exactly one set
- n₂ = number in exactly two sets
- n₃ = number in all three

Two identities do all the work:

    n₁ + n₂ + n₃ = t                    (every person counted once)
    |A| + |B| + |C| = n₁ + 2n₂ + 3n₃    (people in 2 sets counted twice, etc.)

The first identity just says everybody who is in at least one set falls into exactly one of the three buckets. The second says: when you naively add the three individual set totals, a person in exactly two sets shows up in two of those totals, and a person in all three shows up in three of them — hence the coefficients 2 and 3. The table below pins down what each region contributes to each equation:

| Region | Counted in identity 1 | Counted in singles-sum (identity 2) |
|--------|-----------------------|--------------------------------------|
| exactly one (n₁)   | 1 time | 1 time  |
| exactly two (n₂)   | 1 time | 2 times |
| exactly three (n₃) | 1 time | 3 times |

> **Self-explanation prompt.** Why does "identity 2" weight n₂ by 2 and n₃ by 3? If you can say "because a person in exactly 2 sets is counted in 2 of the individual set totals, and a person in exactly 3 sets is counted in all 3," you've internalized the inclusion-exclusion logic and won't get confused by the coefficients. Say it out loud now before reading on.

**Worked example.** (medium) 150 guests; 90 ordered appetizers, 95 ordered dessert, 70 ordered coffee, 30 ordered all three, every guest ordered something. How many ordered exactly two items?

- t = 150 (every guest ordered at least one, so there is no "neither" group).
- |A| + |D| + |C| = 90 + 95 + 70 = 255.
- n₃ = 30.
- From identity 1: n₁ + n₂ + 30 = 150 → n₁ + n₂ = 120.
- From identity 2: n₁ + 2n₂ + 3(30) = 255 → n₁ + 2n₂ = 165.
- Subtract the first equation from the second: (n₁ + 2n₂) − (n₁ + n₂) = 165 − 120 → n₂ = **45**.

Subtracting the two equations is the engine of this method — the n₁ term cancels and n₂ pops out immediately. This two-equation system collapses the entire three-set problem into one subtraction. Memorize it.

> **Recall check.** You have the three single-set totals summing to S, the count in all three is n₃, and the total in at least one is t. What is n₂ (exactly two) in terms of S, t, and n₃? (Subtracting identity 1 from identity 2 gives n₂ + 2n₃ = S − t, so n₂ = S − t − 2n₃.)

That compact formula — **n₂ = (sum of singles) − t − 2·n₃** — is worth memorizing as a shortcut. Sanity-check it on the dinner problem: 255 − 150 − 2(30) = 255 − 150 − 60 = 45. Matches. The same algebra solved for n₃ instead gives the mirror shortcut **n₃ = (S − t − n₂)/2**, handy when the problem hands you n₂ and hides the triple overlap.

**Worked example.** (medium-hard, using the n₃ shortcut) In a class of 40, every student is in at least one of three clubs. The single-club rosters total S = 58, and exactly 14 students are in exactly two clubs. How many are in all three?

- t = 40, S = 58, n₂ = 14.
- n₃ = (S − t − n₂)/2 = (58 − 40 − 14)/2 = 4/2 = **2**.
- Cross-check with identity 1: n₁ = t − n₂ − n₃ = 40 − 14 − 2 = 24, all non-negative whole numbers. Consistent.

**Worked example.** (hard) On a team of 60 athletes, every athlete plays at least one of three sports. 33 play soccer, 28 play basketball, 24 play tennis. 8 athletes play exactly two of the three sports. How many play all three?

- t = 60, sum of singles = 33 + 28 + 24 = 85, n₂ = 8, solve for n₃.
- Identity 1: n₁ + n₂ + n₃ = 60 → n₁ + 8 + n₃ = 60 → n₁ = 52 − n₃.
- Identity 2: n₁ + 2n₂ + 3n₃ = 85 → n₁ + 16 + 3n₃ = 85 → n₁ + 3n₃ = 69.
- Substitute n₁ = 52 − n₃: (52 − n₃) + 3n₃ = 69 → 52 + 2n₃ = 69 → 2n₃ = 17 → n₃ = 8.5.

Stop — n₃ came out non-integer, which is impossible for a count of people. That means this is a *sanity-check* warning: a real GMAT item would never produce a fractional person, so if your arithmetic does, you have misread a number or mis-assigned a coefficient. (Here the lesson is the check itself: counts must be whole numbers. If you ever get 8.5 people, recheck which value is the overlap.) Suppose instead the problem said 8 play exactly two **and** the singles summed to 84; then 52 + 2n₃ = 68, n₃ = 8 — a clean whole number. The discipline: **whenever a set answer is fractional or negative, you have an error, not an answer.**

**Backsolving on set problems.** When a three-set problem gives you numeric answer choices for "how many play all three," you can skip the algebra and test choices. Pick the middle choice for n₃, compute n₂ from n₂ = S − t − 2·n₃, then check that n₁ = t − n₂ − n₃ is a non-negative whole number consistent with the givens. If the middle choice overshoots, the relationship n₂ = S − t − 2·n₃ tells you direction instantly: a *larger* n₃ forces a *smaller* n₂, so you know which way to jump. Naming the tactic — **backsolve, guided by the n₂ = S − t − 2·n₃ relationship** — keeps you from blindly testing all five.

**Worked example.** (hard, backsolving named) Every one of 50 volunteers signed up for at least one of three drives. The three rosters sum to S = 78, and the problem asks: how many signed up for all three? Choices: (A) 6 (B) 10 (C) 14 (D) 18 (E) 22.

- Try the middle choice, **(C) n₃ = 14**: n₂ = S − t − 2·n₃ = 78 − 50 − 28 = 0, then n₁ = 50 − 0 − 14 = 36. All non-negative — but n₂ = 0 means *nobody* is in exactly two drives, which is a suspicious edge case; check neighbors to find the intended clean answer.
- Try **(B) n₃ = 10**: n₂ = 78 − 50 − 20 = 8, n₁ = 50 − 8 − 10 = 32. All non-negative whole numbers, no degenerate zero — this is the well-formed solution. **(B)**.
- The direction rule worked exactly as advertised: dropping n₃ from 14 to 10 *raised* n₂ from 0 to 8, confirming the inverse relationship. You never needed to set up the full two-equation system from scratch for each choice.

**Two-way tables for simpler problems.** When you only have two yes/no attributes (male/female × has-pet/no-pet), don't bother with Venn circles — draw a 2×2 table. Each interior cell is one of four categories; the margins are the subtotals. Fill in what you know and let the row and column sums force the rest.

|         | Has pet | No pet | Total |
|---------|---------|--------|-------|
| Male    |    ?    |    ?   |  45   |
| Female  |    ?    |    ?   |  35   |
| Total   |   50    |   30   |  80   |

**Worked example.** (easy) Using the table above, suppose 30 males have a pet. Fill the grid.

- Male / No pet = 45 − 30 = 15 (row must sum to 45).
- Female / Has pet = 50 − 30 = 20 (column must sum to 50).
- Female / No pet = 35 − 20 = 15 (female row sums to 35) — or 30 − 15 = 15 (no-pet column sums to 30). Both routes give 15, which is your built-in check.

Cross-check: every row and every column sums to its margin, and the four interior cells total 80. When two independent paths give the same cell value, you know the grid is consistent. This double-entry check is why the table is safer than a Venn diagram for two-attribute problems — the diagram has no automatic cross-check, but the table does. Note that a 2×2 table and the two-set identity describe the same situation: "has pet" plays the role of set A, "male" the role of set B, and the Male/Has-pet cell is simply |A ∩ B|. Use whichever lens reads faster off the problem.

**Procedure to memorize.**

1. **Count the sets.** Two attributes → two-set identity or a 2×2 table. Three attributes → the exactly-two/exactly-three framework.
2. **Handle "neither" first.** Subtract any neither group from the grand total to get t = the number in at least one set. Never feed the neither count into an identity.
3. **Write the right template.** Two-set: |A ∪ B| = |A| + |B| − |A ∩ B|. Three-set: the two framework equations (n₁ + n₂ + n₃ = t and singles-sum = n₁ + 2n₂ + 3n₃).
4. **Identify exactly what's asked** — overlap, only-A, exactly-two, at least one, neither — and circle that target before solving.
5. **Solve, then sanity-check.** Every region must be a non-negative whole number; margins must reconcile. A fraction or a negative means recheck, not "round it off."

**Common mistakes.**

- Feeding the "neither" group into the identity instead of subtracting it from the total first.
- Reporting the overlap when the question wants "only A," or reporting "all car owners" when it wants "car but not bike."
- In three-set problems, confusing "exactly two" (n₂) with "in at least two" (n₂ + n₃) — read the wording precisely.
- Dropping the +|A∩B∩C| term in the raw three-set identity, or mis-weighting n₃ as ×2 instead of ×3 in identity 2.
- Accepting a fractional or negative region as a final answer instead of treating it as a signal of an arithmetic slip.
- On percent-only problems, hunting for a missing total instead of just plugging in 100.

**Recap.** Two sets: subtract the double-counted overlap, and always pull out "neither" first. Three sets: forget the raw six-term identity and use the two framework equations — total counts everyone once, and the singles-sum counts the overlaps with weights 2 and 3 — then subtract the equations to extract n₂, or use the shortcut n₂ = S − t − 2·n₃ (or its mirror n₃ = (S − t − n₂)/2). Two yes/no attributes: a 2×2 table with reconciling margins beats a Venn diagram and checks itself. When the data is all percents, plug in 100; when the answers are numbers, backsolve guided by the n₂–n₃ inverse relationship. Recognize the type, strip the neither, pick the template, and verify every region is a whole, non-negative count.
