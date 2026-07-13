---
slug: quant-30-timing
title: "Quant Timing & Pacing"
section: Quant
estimated_minutes: 8
prerequisites:
  - quant-29-sets-venn
summary: |
  21 Problem Solving questions in 45 minutes. This chapter closes the Quant track with pacing, triage, the 30-second method-switch checkpoint, and the bookmark-and-edit feature.
sections:
  - id: quant-timing
    type: reading
    title: "Quant Timing & Pacing"
    check_question_ids: []
  - id: one-process-every-question
    type: reading
    title: "One process, every question"
    check_question_ids: []
problem_sets:
---

## @quant-timing

You walk into the Quant section with one job: **convert 45 minutes into the most correct answers you can bank.** That is 21 Problem Solving questions, no Data Sufficiency on this screen — that work lives in Data Insights now. Divide it out: **roughly 2 minutes and 8 seconds per question.** But you never spend exactly the average on every question, and the test-takers who try to are the ones who run out of clock with four problems untouched. Pacing is not even spreading. Pacing is **triage** — spend less than budget on the easy ones, refuse to overspend on the hard ones, and bank the savings.

**Mental model.** Treat your 45 minutes like a fixed pool of risk capital you deploy per position, never falling in love with one trade. Every question is a position. A question that "should" cost 90 seconds and is now eating 3 minutes is a losing trade you are averaging down on. You don't average down. You **cut it, mark it, move.** One bombed hard question costs you 1 point. Two rushed easy questions you'd otherwise have gotten cost you 2. The math always favors protecting the easy points.

Here is the discipline that makes it work: at the **30-second mark** on any question, run a checkpoint. Ask yourself one thing — do I have a path to the answer, or am I still hunting? If you have a path, finish it. If you are still hunting, you **switch methods**: drop the algebra and plug in numbers, drop the formula and estimate, or test the answer choices directly (backsolve). The checkpoint exists so you never discover at 2:30 that you picked the wrong method at 0:05.

- **Path found** -> execute, don't second-guess.
- **No path, but a faster method exists** -> switch (backsolve / plug in / estimate).
- **No path and no faster method** -> guess, **bookmark**, move. You can come back.

**Worked example (Algebra — the time-sink you cut).** Solve 3^(x+2) = 81 - k, given x = 0. You start pushing exponent rules around and 40 seconds vanish without the equation simplifying. **Checkpoint hits.** Instead of grinding more algebra, you switch tactics: rewrite 3^(x+2) as 9 · 3^x, then plug x = 0 directly. Left side is 9 · 1 = 9, right side is 81 - k, so 9 = 81 - k and **k = 72.** The lesson is the switch — the moment you stopped manipulating symbols and substituted a concrete value, it collapsed in 15 seconds. If even that had not clicked by 60 seconds, you guess and bookmark.

**Worked example (Arithmetic — protect the easy point, don't get cute).** A jacket priced at $80 is marked up 25%, then that new price is discounted 20%. What is the final price? The trap-seeker overthinks "successive percents." You don't: 80 × 1.25 = 100, then 100 × 0.80 = **$80.** This is a 25-second question. **Bank the saved 100 seconds** — that surplus is what funds the genuinely hard problem three questions later. Easy points are not "free." They are the budget that buys you time on the hard ones.

**Worked example (Word problem — backsolve instead of building equations).** A class collected $96 selling tickets at $4 (students) and $6 (adults); 20 tickets sold total. How many adults? Setting up 4s + 6a = 96 with s + a = 20 is fine but slow under pressure. **Backsolve from the answers.** Try a = 8: students = 12, revenue = 48 + 48 = $96. Done — **8 adults.** You tested one number and finished. When the choices are concrete numbers and the setup is messy, plugging the choices in is almost always faster than solving forward.

> **Recall check.** What is the per-question time budget on GFE Quant, and how many questions in how many minutes? (About 2 minutes 8 seconds; 21 questions in 45 minutes.)

> **Self-explanation prompt.** Why does protecting easy points beat fighting hard ones when every question is worth the same? (Because a rushed easy miss and a fought-and-still-missed hard one cost the same 1 point each — but the easy one was recoverable, so the rushed miss is a pure self-inflicted loss, and the surplus time you would have saved funds your accuracy everywhere else.)

**Worked example (a full pacing decision).** You are at **question 14, clock shows 18:00 left, 8 questions to go.** That is 2:15 each — slightly ahead. Q14 is a nasty combinatorics setup; at your 30-second checkpoint you have no clean path and no obvious backsolve. **Decision:** this is not where you spend your surplus. You eliminate two clearly-wrong choices, lifting the guess to about 1-in-3, pick one, **bookmark**, move. You have spent 45 seconds, not 3 minutes. You now have 17:15 for 7 questions — still 2:27 each. You cruise the next four (three are quick) and finish the section with **4 minutes left and a bookmark waiting.**

**Trap to watch.** The sunk-cost spiral. You are 2 minutes into a hard problem, "almost there," so you give it 30 more seconds, then 30 more. That extra minute would have rescued two easy questions later. **Set the limit before you start, not in the moment** — once a question crosses about 2:45 with no answer, you are done with it regardless of how close it feels.

GFE gives you a safety net: you can **bookmark** any question and, at the end of the section, **review and edit up to three answers** before time expires. Use it deliberately.

| Use this trick when… | Do this |
| --- | --- |
| 30-sec checkpoint, no path, faster method exists | Switch: backsolve, plug in, or estimate |
| 30-sec checkpoint, no path, no faster method | Guess, **bookmark**, move on |
| Question is clearly easy | Solve fast, **bank the surplus time** |
| You guessed but the math felt 80% solved | Bookmark — a prime end-of-section review pick |
| Section ending with time and bookmarks left | Revisit, but **edit at most 3** — don't churn answers you got right |

> **Recall check.** How many answers can you change during end-of-section review, and how should you choose which ones? (Up to three; pick the bookmarked questions where you were closest to a real answer, not random second-guesses.)

The whole system reduces to three reflexes: **budget the surplus on easy questions, kill time-sinks at the 2:45 ceiling, and let the 30-second checkpoint force the method switch.** Run those three and you reach question 21 with answers on every screen and a couple of bookmarks to upgrade — which is exactly how you finish the Quant track.

## @one-process-every-question

Pacing tells you *how long* to spend; it does not tell you *what to do* in those minutes. The clock work above only pays off if each question runs through the same disciplined loop. Speed is not the lever — **consistency is.** A score is built one question at a time, and the same five moves work on the easiest arithmetic problem and the nastiest rates problem. Run the loop the same way every time and your error rate falls without you having to "try harder."

**Mental model.** Treat every question as a four-beat sequence: **read it twice, plot the path, execute while checking each step, then re-read and sanity-check the answer.** Notice that two of the four beats are not computation at all — they bracket the math. Most missed Quant points are lost in those bracket beats, not in the algebra. **Read twice first:** the cheapest way to miss an easy one is to misread a single modifier — "non-negative" read as "positive," "at most" read as "exactly," "increased *by* 20%" read as "increased *to* 20%." Five seconds on a second read defends two minutes of work. **Then plot the path before you compute:** your first instinct is usually the slow path. Take one breath and ask whether plugging in, backsolving, or estimating gets there faster than the textbook setup. (The 30-second checkpoint from the previous section is your safety net if the path you picked turns out to be wrong — but a deliberate plot up front means you trip that net far less often.)

**Worked example.** *"A printer produces pages at a constant rate. If it prints r pages in m minutes, how many minutes does it take to print 300 pages?"* First read: rate problem, fine. **Second read** catches the structure — the answer must be in *minutes*, and the rate is r/m pages per minute. Now **plot the path.** Instinct says build the proportion and solve symbolically; faster is to reason in units: minutes = pages ÷ (pages per minute) = 300 ÷ (r/m) = **300m / r.** **Check the step as you write it** — dividing by a fraction flips it, so it is 300 × (m/r), not 300 × (r/m); confirm m is on top. Finally, **sanity-check:** if the printer is fast (large r), the time should shrink — and r sitting in the denominator does exactly that. Right ballpark, right structure, move on. The whole thing took 25 seconds *because* the two reading beats stopped you from solving the wrong quantity in the right way.

**Check each step as you go.** Everyone writes 4 × 7 = 32 sometimes; the difference at the top of the scale is that the strong scorer *catches* it. You catch it by checking the line you just wrote before relying on it, not by re-deriving everything at the end. A bad intermediate number poisons every later step silently — there is no error message. One glance per line is cheap insurance against a careless cascade.

**Trap to watch.** Trading the loop for raw speed when the clock feels tight. Skipping the second read and the final sanity-check *feels* faster, but it is the move that converts solvable questions into careless misses — and on an adaptive test the real disaster is missing the **easy** ones, not the hard ones. A hard question you were always likely to miss costs the same single point as an easy question you fumbled by misreading. The fumbled easy one is pure self-inflicted damage, and rushing manufactures exactly those. Speeding up usually produces more misses *and* a lower score, which makes it slower overall once you count the points you gave back. Efficiency — the right method, run cleanly once — beats hurry every time. And when no path appears after a fair, honest look, that is not the moment to grind: make an **educated guess, bookmark it, and move on**, exactly as the triage rules above prescribe.

> **Self-explanation prompt.** Why do "read twice" and "sanity-check the answer" matter *more* than computing faster? (Because most lost points come from misreading the question or accepting a wrong-ballpark answer, not from slow arithmetic — those two beats catch the errors that speed can never fix, and on an adaptive test the careless miss of an easy question is the costliest, most avoidable kind.)
