---
slug: quant-30-timing
title: "Quant Timing & Pacing"
section: Quant
estimated_minutes: 12
prerequisites:
  - quant-29-sets-venn
summary: |
  21 Problem Solving questions in 45 minutes. This chapter closes the Quant track with pacing, triage, the 30-second method-switch checkpoint, and the bookmark-and-edit feature — the system that turns everything you've learned into points under a clock.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two questions before the lesson — both about decisions, not math. Answer from instinct, then see whether the chapter's pacing system agrees with you.
    pretest_question_ids:
      - timing-strategy-q1
      - timing-strategy-q2
  - id: triage
    type: reading
    title: "Triage — protect the easy points"
    check_question_ids:
      - timing-strategy-q3
  - id: the-checkpoint
    type: reading
    title: "The 30-second checkpoint"
    check_question_ids:
      - timing-strategy-q4
  - id: bookmarks-and-sunk-cost
    type: reading
    title: "Bookmarks, the 2:45 ceiling, and the sunk-cost spiral"
    check_question_ids:
      - timing-strategy-q5
  - id: summary
    type: summary
    title: "The pacing system on one screen"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - arithmetic-q33
      - word-problems-q28
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - algebra-q25
      - rates-work-q21
      - ratios-percents-q19
---

## @triage

You walk into the Quant section with one job: **convert 45 minutes into the most correct answers you can bank.** That is 21 Problem Solving questions, no Data Sufficiency on this screen — that work lives in Data Insights now. Divide it out: **roughly 2 minutes and 8 seconds per question.** But you never spend exactly the average on every question, and the test-takers who try to are the ones who run out of clock with four problems untouched. Pacing is not even spreading. Pacing is **triage** — spend less than budget on the easy ones, refuse to overspend on the hard ones, and bank the savings.

By the end of this chapter you'll be able to:

- **Track pace** with the fraction checkpoints instead of awkward per-question math.
- **Run the 30-second checkpoint** that forces a method switch before a question becomes a time-sink.
- **Cut losses mechanically** at the 2:45 ceiling and use bookmarks so a cut is never a forfeit.

**Mental model.** Treat your 45 minutes like a fixed pool of risk capital you deploy per position, never falling in love with one trade. Every question is a position. A question that "should" cost 90 seconds and is now eating 3 minutes is a losing trade you are averaging down on. You don't average down. You **cut it, mark it, move.** One bombed hard question costs you 1 point. Two rushed easy questions you'd otherwise have gotten cost you 2. The math always favors protecting the easy points.

The pace check itself should cost you nothing. Don't divide by 2:08 mid-section — use the **fraction checkpoints**: a third of the way (question 7) should cost about 15 minutes, halfway (questions 10–11) about 22:30, two thirds (question 14) about 30. A glance tells you ahead or behind, and any surplus is **capital reserved for the hard problems in the back half**, not a license to dawdle.

**Worked example (Arithmetic — protect the easy point, don't get cute).** A jacket priced at $80 is marked up 25%, then that new price is discounted 20%. What is the final price? The trap-seeker overthinks "successive percents." You don't: 80 × 1.25 = 100, then 100 × 0.80 = **$80.** This is a 25-second question. **Bank the saved 100 seconds** — that surplus is what funds the genuinely hard problem three questions later. Easy points are not "free." They are the budget that buys you time on the hard ones.

> **Self-explanation prompt.** Why does protecting easy points beat fighting hard ones when every question is worth the same? (Because a rushed easy miss and a fought-and-still-missed hard one cost the same 1 point each — but the easy one was recoverable, so the rushed miss is a pure self-inflicted loss, and the surplus time you would have saved funds your accuracy everywhere else.)

## @the-checkpoint

Here is the discipline that makes triage work: at the **30-second mark** on any question, run a checkpoint. Ask yourself one thing — do I have a path to the answer, or am I still hunting? If you have a path, finish it. If you are still hunting, you **switch methods**: drop the algebra and plug in numbers, drop the formula and estimate, or test the answer choices directly (backsolve). The checkpoint exists so you never discover at 2:30 that you picked the wrong method at 0:05.

- **Path found** -> execute, don't second-guess.
- **No path, but a faster method exists** -> switch (backsolve / plug in / estimate).
- **No path and no faster method** -> guess, **bookmark**, move. You can come back.

The middle branch is where the method chapters pay off. You spent chapters 1 through 4 building exactly the alternatives the checkpoint switches to — sorted numeric choices trigger backsolving, free variables trigger plugging in, spread-out choices trigger estimation. The checkpoint is just the moment you give yourself permission to use them.

**Worked example (Algebra — the time-sink you cut).** Solve 3^(x+2) = 81 - k, given x = 0. You start pushing exponent rules around and 40 seconds vanish without the equation simplifying. **Checkpoint hits.** Instead of grinding more algebra, you switch tactics: rewrite 3^(x+2) as 9 · 3^x, then plug x = 0 directly. Left side is 9 · 1 = 9, right side is 81 - k, so 9 = 81 - k and **k = 72.** The lesson is the switch — the moment you stopped manipulating symbols and substituted a concrete value, it collapsed in 15 seconds. If even that had not clicked by 60 seconds, you guess and bookmark.

**Worked example (Word problem — backsolve instead of building equations).** A class collected $96 selling tickets at $4 (students) and $6 (adults); 20 tickets sold total. How many adults? Setting up 4s + 6a = 96 with s + a = 20 is fine but slow under pressure. **Backsolve from the answers.** Try a = 8: students = 12, revenue = 48 + 48 = $96. Done — **8 adults.** You tested one number and finished. When the choices are concrete numbers and the setup is messy, plugging the choices in is almost always faster than solving forward.

> **Recall check.** What is the per-question time budget on GFE Quant, and how many questions in how many minutes? (About 2 minutes 8 seconds; 21 questions in 45 minutes.)

## @bookmarks-and-sunk-cost

GFE gives you a safety net: you can **bookmark** any question and, at the end of the section, **review and edit up to three answers** before time expires. Use it deliberately — the bookmark is what makes cutting a question nearly free, because a guess on a nearly-solved problem is not a forfeit, it's a deferred decision.

**Worked example (a full pacing decision).** You are at **question 14, clock shows 18:00 left, 8 questions to go.** That is 2:15 each — slightly ahead. Q14 is a nasty combinatorics setup; at your 30-second checkpoint you have no clean path and no obvious backsolve. **Decision:** this is not where you spend your surplus. You eliminate two clearly-wrong choices, lifting the guess to about 1-in-3, pick one, **bookmark**, move. You have spent 45 seconds, not 3 minutes. You now have 17:15 for 7 questions — still 2:27 each. You cruise the next four (three are quick) and finish the section with **4 minutes left and a bookmark waiting.**

**Trap to watch.** The sunk-cost spiral. You are 2 minutes into a hard problem, "almost there," so you give it 30 more seconds, then 30 more. That extra minute would have rescued two easy questions later. **Set the limit before you start, not in the moment** — once a question crosses about 2:45 with no answer, you are done with it regardless of how close it feels. "Almost there" is how the spiral talks; the ceiling was set by a calmer version of you, and it outranks the one currently mid-problem.

| Use this trick when… | Do this |
| --- | --- |
| 30-sec checkpoint, no path, faster method exists | Switch: backsolve, plug in, or estimate |
| 30-sec checkpoint, no path, no faster method | Guess, **bookmark**, move on |
| Question is clearly easy | Solve fast, **bank the surplus time** |
| You guessed but the math felt 80% solved | Bookmark — a prime end-of-section review pick |
| Section ending with time and bookmarks left | Revisit, but **edit at most 3** — don't churn answers you got right |

> **Recall check.** How many answers can you change during end-of-section review, and how should you choose which ones? (Up to three; pick the bookmarked questions where you were closest to a real answer, not random second-guesses.)

## @summary

The whole system reduces to three reflexes. Here it is on one screen.

| Reflex | The rule |
|---|---|
| Bank the surplus | Solve easy questions fast and clean; the saved time is capital for the hard ones, checked at the 15:00 / 22:30 / 30:00 fraction marks. |
| Force the switch | At 30 seconds with no path, change methods — backsolve, plug in, estimate — instead of grinding. |
| Cut at the ceiling | Past 2:45 with no answer: eliminate, guess, bookmark, move. The review screen lets you upgrade up to three answers at the end. |

**Takeaway.** Budget the surplus on easy questions, kill time-sinks at the 2:45 ceiling, and let the 30-second checkpoint force the method switch. Run those three and you reach question 21 with answers on every screen and a couple of bookmarks to upgrade — which is exactly how you finish the Quant track.

**What to do next.** The problem sets below are a **mixed gauntlet** — five questions spanning arithmetic, word problems, algebra, rates, and percents, deliberately unsorted by topic, the way the real section serves them. Run them against the clock: give yourself **4 minutes for the easy set and 7 for the medium set**, run the 30-second checkpoint on every question, and notice each time you switch methods or bank a surplus. Then take the system to a full timed section: build a 21-question mixed set in the Test Builder, or run a full mock — that's where these three reflexes either exist or don't.
