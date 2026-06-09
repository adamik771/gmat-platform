---
slug: quant-01-backsolving
title: "Method: Backsolving"
section: Quant
estimated_minutes: 8
prerequisites: []
summary: |
  Backsolving — testing the answer choices instead of solving. The first and most reliable Quant trick: when the choices are numbers and there's one unknown, plug them in and let too-big/too-small narrow it down.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
  - id: backsolving
    type: reading
    title: "Method: Backsolving"
    check_question_ids: []
problem_sets:
---

## @backsolving

**Backsolving** is the highest-leverage move in your Problem Solving toolkit, and most test-takers underuse it. The official answer choices are not decoration — on "what is the value of x" problems they are five free guesses, exactly one of which is certified correct. Your job stops being "derive the answer" and becomes "test which given number survives." That is almost always faster, and it is bulletproof against algebra mistakes.

**Mental model.** Think of the five choices as a sorted lineup of suspects and you are the bouncer. GMAT numeric answers are listed in order (ascending or descending), so the middle choice (C) splits the lineup in half. Plug C in. If it works, you are done. If it makes the equation or condition come out **too big**, every choice on the "big" side dies with it; if **too small**, the small side dies. One smart test collapses five options to two, and a second test finishes the job. Worst case: **two plug-ins**.

Here is the trigger map. Reach for backsolving the instant a problem fits the left column.

| Use this trick when… | Why it works |
|---|---|
| Stem asks "what is the value of x / n / the price / the speed" | Choices are candidate values you can test directly |
| Answer choices are **numeric and sortable** (ascending/descending) | Middle-choice elimination cuts the field in half per test |
| There is **one unknown** and a checkable condition | You verify a guess by plugging it back in |
| The algebra is **ugly** (quadratics, fractions, nested expressions) | Arithmetic on a known number beats symbolic manipulation |
| A word problem hides a clean equation behind messy phrasing | Skip the translation; test the number against the words |

**Worked example.** (Quadratic equation.) *If x^2 - 3x = 28, and x > 0, what is x?* Choices: (A) 4 (B) 5 (C) 7 (D) 8 (E) 9. Start at C, x = 7: 49 - 21 = 28. Exact on the **first** test — **answer (C)**. Notice what you skipped: you never moved the 28 over, never factored x^2 - 3x - 28 into (x - 7)(x + 4), never discarded the negative root. The condition x > 0 that would have tripped up a careless algebraist is irrelevant here because every choice is already positive. Had C come out too small (say it gave 10), you'd jump to D or E; too big, down to A or B.

**Worked example.** (Word problem.) *A store sells pens at one price and pencils at half that price. Marco buys 3 pens and 4 pencils for $20. What is the price of one pen?* Choices: (A) $3 (B) $4 (C) $5 (D) $6 (E) $8. Test C, pen = $5, pencil = $2.50: 3(5) + 4(2.50) = 15 + 10 = $25. **Too big** — kill C, D, E in one stroke, since a higher pen price only raises the total. Test B, pen = $4, pencil = $2: 12 + 8 = $20. Exact. **Answer (B).** You never set up "3p + 4(p/2) = 20." You read the sentence, plugged, and checked.

**Worked example.** (Number properties.) *The sum of three consecutive even integers is 78. What is the largest?* Choices: (A) 24 (B) 26 (C) 28 (D) 30 (E) 32. Largest = C = 28 means the three are 24, 26, 28; sum = 78. Exact on the **first** try — **answer (C)**. Had the sum come out too big, you would have dropped to B; too small, up to D. Number-properties stems like "consecutive," "divisible by," "remainder," and "largest/smallest such" are prime backsolving territory because each choice is instantly checkable against the stated property without any equation at all.

**Worked example.** (Fractions / work rate.) *A pool fills in 6 hours through pipe A alone. With pipe B also open it fills in 4 hours. How many hours would pipe B take alone?* Choices: (A) 8 (B) 10 (C) 12 (D) 14 (E) 16. The setup-free route: test C, B = 12. Combined rate = 1/6 + 1/12 = 2/12 + 1/12 = 3/12 = 1/4 pool per hour, which fills the pool in exactly 4 hours. Exact on the **first** test — **answer (C)**. You never solved 1/6 + 1/b = 1/4 for b; you let the choice be b and checked the combined rate against the stated 4 hours. If C had filled too fast (rate above 1/4), B would need to be slower, so you'd move to D or E.

> **Recall check.** Which choice do you plug in first, and what do its "too big / too small" outcomes tell you? (C, the middle; the result eliminates that entire half of the sorted lineup.)

> **Self-explanation prompt.** Why does starting at the median choice guarantee you finish in at most two tests for a monotonic relationship? (Because one test of the middle partitions an ordered list into a half that's ruled out and a half of at most two survivors, and the second test distinguishes between those.)

**Trap to watch.** Backsolving **breaks** when the choices are not concrete numbers you can test. Do **not** backsolve when:
- Answers are **variable expressions** (3k, x + 2, n/4) — there is nothing fixed to plug back and verify.
- The stem is **"must be true"** or "could be true" — these demand you reason over *all* cases, not confirm one value; a number that works for your guess may fail for another.
- Choices are **non-numeric** (Roman numerals, "cannot be determined," ratios like 2:3 without a unit), or **not sortable** in a way that lets too-big/too-small eliminate.
- The relationship is **not monotonic** — if a larger choice doesn't reliably push the condition one direction, the half-elimination shortcut fails, so test choices individually or solve directly.

One more discipline point: even when backsolving, **read the question's exact ask**. If the stem defines x but asks for x + 1 or 2x, the choices describe the *transformed* quantity — back out the underlying value each choice implies before you plug, or solve for x first and then transform. The method rewards precision, not speed alone. When the fit is right — single unknown, sortable numbers, ugly algebra — backsolving turns a two-minute derivation into a thirty-second confirmation.
