---
slug: quant-01-backsolving
title: "Method: Backsolving"
section: Quant
estimated_minutes: 12
prerequisites: []
summary: |
  Your first and most reliable Quant weapon. When a problem asks for a value and hands you five numbers, you don't have to derive the answer — you test which number survives. Done right, backsolving caps almost any "find x" problem at two checks and is bulletproof against algebra slips.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two questions before the lesson. Don't worry about getting them right — attempting first makes the method land harder when you read it. Solve them however you like, then watch how the chapter shrinks each one to a single check.
    pretest_question_ids:
      - backsolving-q1
      - backsolving-q2
  - id: when-to-backsolve
    type: reading
    title: "When to reach for it"
    check_question_ids:
      - backsolving-q3
  - id: the-method
    type: reading
    title: "The method: middle-first, two tests, done"
    check_question_ids:
      - backsolving-q4
  - id: when-it-breaks
    type: reading
    title: "When it breaks — and the one ask you must read"
    check_question_ids:
      - backsolving-q5
  - id: summary
    type: summary
    title: "Backsolving in one screen"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - backsolving-q6
      - backsolving-q7
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - backsolving-q8
      - backsolving-q9
      - backsolving-q10
  hard:
    target_accuracy_by_score:
      "605": 35
      "645": 50
      "685": 65
      "725": 85
    question_ids:
      - backsolving-q11
      - backsolving-q12
---

## @when-to-backsolve

Most test-takers treat the five answer choices as something to consult *after* they solve. That instinct is backwards. On a "find the value" problem, the choices are five free guesses, one of them certified correct by the test itself. Your job shifts from *derive the answer* to *test which number survives* — and testing a known number is almost always faster, and far safer, than manipulating symbols.

By the end of this chapter you'll be able to:

- **Spot** the problems where backsolving beats algebra, in one glance at the stem and the choices.
- **Execute** the middle-first routine that caps most problems at two tests.
- **Avoid** the traps that quietly turn backsolving into wrong answers.

**Mental model.** Picture the five choices as a sorted lineup and you as the bouncer. GMAT numeric answers are listed in order — ascending or descending — so the middle choice splits the lineup in half. You don't interview everyone. You test the middle, decide which half is innocent, and walk straight to the one or two suspects left.

Here is the trigger map. Reach for backsolving the instant a problem fits the left column.

| Reach for backsolving when… | Because… |
|---|---|
| The stem asks "what is the value of x / the price / the speed" | The choices are candidate values you can test directly |
| The choices are **numeric and sorted** (ascending or descending) | Testing the middle cuts the field in half |
| There's **one unknown** and a condition you can check | You verify a guess by plugging it back in |
| The algebra is **ugly** — quadratics, cubics, nested fractions | Arithmetic on a known number beats symbolic manipulation |
| A word problem hides a clean equation behind messy phrasing | Skip the translation; test the number against the words |

**Speed tip.** The instant you see numeric, sorted choices under a "find the value" stem, your default move is to test the middle one — before you even pick up the pencil to set up algebra. Backsolving isn't a fallback for when you're stuck. It's the first thing you consider.

> **Recall check.** What two features must a problem have before backsolving is safe to use? (Numeric, sortable choices, and a single unknown you can verify against a stated condition.)

## @the-method

The whole method is three moves: **start in the middle, read the miss, finish in the survivors.**

**Start in the middle.** Because the choices are sorted, the median choice is the pivot. Plug it in. If it works, you're already done — many problems end on the first test.

**Read the miss.** If the middle choice comes out **too big** or **too small**, that single result usually kills an entire half of the lineup. When larger inputs produce larger results (a monotonic relationship — true for most equations and rate problems), "too small" means the answer is *above* the middle, so the middle and everything below it are dead. "Too big" kills the middle and everything above. Five choices become two.

**Finish in the survivors.** One more test decides between the two that remain. That's the guarantee: on a monotonic "find the value" problem, **backsolving finishes in at most two checks.**

**Worked example.** *If x² − 3x = 28 and x > 0, what is x?* Choices: (A) 4, (B) 5, (C) 7, (D) 8, (E) 9. Test the middle, C = 7: 49 − 21 = 28. Exact on the first test — the answer is (C). Notice everything you skipped: you never moved the 28 across, never factored x² − 3x − 28 into (x − 7)(x + 4), never discarded the negative root. The condition x > 0 that trips up careless algebraists is irrelevant, because every choice is already positive.

**Worked example.** *A store sells pens at one price and pencils at half that price. Marco buys 3 pens and 4 pencils for $20. What is the price of one pen?* Choices: (A) $3, (B) $4, (C) $5, (D) $6, (E) $8. Test the middle, C = $5 (so pencils are $2.50): 3(5) + 4(2.50) = 15 + 10 = $25 — too big. A higher pen price only raises the total, so the answer is *below* C; kill C, D, and E in one stroke. Test B = $4 (pencils $2): 12 + 8 = $20. Exact — the answer is (B). You never wrote "3p + 4(p/2) = 20." You read the sentence, plugged, and checked.

**Micro-drill.** Backsolve each — no algebra, just test choices. Aim for under 30 seconds apiece.

1. If 3x + 4 = 19, what is x? Choices: 3, 5, 7. → ___
2. The sum of two consecutive integers is 35. What is the larger? Choices: 17, 18, 19. → ___
3. If x² = 49 and x < 0, what is x? Choices: −7, 7, 49. → ___

Answers: (1) **5** — 3(5) + 4 = 19. (2) **18** — 17 + 18 = 35. (3) **−7** — (−7)² = 49 and it satisfies x < 0; note that 7 also squares to 49, so the condition is what picks the sign. If you reached for algebra on any of these, re-run it as a pure plug-and-check — that's the reflex this chapter is building.

> **Self-explanation prompt.** In one sentence: why does starting at the median guarantee at most two tests on a monotonic problem? (Because one test of the middle splits the sorted list into a ruled-out half and a surviving half of at most two, and the second test separates those two.)

## @when-it-breaks

Backsolving is powerful precisely because it's narrow. Used outside its lane, it quietly produces wrong answers. **Do not backsolve when:**

- The answers are **variable expressions** — 3k, x + 2, n/4. There's nothing fixed to plug back and verify.
- The stem says **"must be true"** or **"could be true."** These demand reasoning over *every* case; a number that works for your guess can fail for another, so confirming one case proves nothing.
- The choices are **non-numeric or unsortable** — Roman numerals, "cannot be determined," bare ratios — so the too-big/too-small cut has nothing to bite on.
- The relationship **isn't monotonic.** If a larger choice doesn't reliably push the result one direction, the half-the-field shortcut fails; test choices individually or solve directly.

**Trap to watch.** The single most common self-inflicted error is testing the choices against the **wrong quantity**. If the stem defines x but asks for x + 1, or 2x, or x², the choices describe the *transformed* value — not x. Plug a choice straight into the equation written in terms of x and you'll test the wrong thing and "confirm" a trap answer. The fix: either solve for x and transform last, or back out the implied x from each choice before you plug it in. Read the precise ask before you test anything.

> **Recall check.** A problem gives "2x − 5 = 11" and asks for the value of x + 3. Why can't you just plug the choices into "2x − 5"? (Because the choices represent x + 3, not x — you'd have to subtract 3 from each choice first, or solve for x and then add 3.)

## @summary

Backsolving is the highest-leverage move in your Problem Solving toolkit, and most people underuse it. Here it is on one screen.

| Step | What you do |
|---|---|
| 1. Qualify | Numeric, sorted choices + one unknown + a checkable condition? Backsolve. |
| 2. Test the middle | Plug in the median choice. If it works, you're done. |
| 3. Read the miss | Too big or too small eliminates a whole half on a monotonic problem. |
| 4. Finish | One more test settles the two survivors — at most two checks total. |

**Takeaway.** When the fit is right — single unknown, sortable numbers, ugly algebra — backsolving turns a two-minute derivation into a thirty-second confirmation, and it's immune to the sign slips and dropped terms that sink symbolic work. Knowing *when not to* use it — variable answers, must-be-true, non-monotonic — is just as much the skill.

**What to do next.** Run the three graded problem sets below; they ramp from clean linear equations to a cubic and a mixture problem where backsolving's edge over algebra is largest. Aim to finish each question in **two checks or fewer** — if you find yourself on a third test, you skipped the middle-first cut. Once the sets feel automatic, carry the reflex into timed Quant practice: the goal isn't to backsolve every problem, it's to recognize, in one glance, the ones where it's the fastest path to a certified-correct answer.
