---
slug: quant-29-sets-venn
title: "Sets & Venn Diagrams"
section: Quant
estimated_minutes: 8
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
      - word-problems-q13
      - word-problems-q14
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
      - word-problems-q15
      - word-problems-q16
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - word-problems-q17
      - word-problems-q18
---

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
