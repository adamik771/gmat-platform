---
slug: di-timing-mixed
title: DI Timing & Mixed Cases
section: DI
estimated_minutes: 35
prerequisites:
  - multi-source-reasoning
  - two-part-analysis
summary: |
  Knowing each DI question type is half the score; deploying it under a 45-minute clock with uneven question loads is the other half. This chapter is the meta-skill layer: pacing and heavy-stimulus triage, note strategy for multi-tab sets, deliberate calculator use, and the bookmark-and-review discipline that protects your easy points and banks time for the hard ones.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two mixed DI questions, no clock yet. Notice the pull to over-invest in a heavy stimulus — that instinct is exactly what timing strategy retrains.
    pretest_question_ids:
      - multi-source-reasoning-q1
      - two-part-analysis-q1
  - id: pacing-triage
    type: reading
    title: "Pacing and heavy-stimulus triage — 20 questions, 45 minutes"
    check_question_ids:
      - multi-source-reasoning-q2
  - id: note-strategy
    type: reading
    title: "Note strategy and calculator use under time"
    check_question_ids:
      - multi-source-reasoning-q3
  - id: revisit-review
    type: reading
    title: "Bookmark, revisit, and the three edits in Data Insights"
    check_question_ids:
      - two-part-analysis-q2
  - id: summary
    type: summary
    title: "The DI timing discipline in one screen"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - data-sufficiency-q5
      - graphics-interpretation-q5
      - table-analysis-q5
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - multi-source-reasoning-q4
      - two-part-analysis-q4
      - data-sufficiency-q10
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - multi-source-reasoning-q10
      - two-part-analysis-q12
      - data-sufficiency-q30
---

## @pacing-triage

Your enemy on Data Insights is not difficulty — it is the clock plus uneven load. You get 20 questions and 45 minutes. That averages to about **2 minutes 15 seconds each**, but you must never pace as if every question costs the average. A clean Data Sufficiency statement or a single-chart Graphics Interpretation question can be closed in under 90 seconds. One Multi-Source Reasoning set with three tabs to reconcile, or a tightly worded Two-Part Analysis, can eat 3 to 4 minutes before you have earned a single point. Your job is to spend time where it converts, and to refuse to let one heavy stimulus quietly steal the minutes that four easy points were depending on.

**Mental model.** Treat your 45 minutes as a **time budget you are constantly defending**, not a stopwatch you glance at. Every question is either *cheap* (under 90 seconds, high confidence) or *expensive* (heavy stimulus, branching logic, multiple sub-questions). Bank the cheap points fast, then decide deliberately whether each expensive question is worth its price *right now* — or whether you bookmark it and come back with your remaining budget. The student who fails DI rarely fails on hard reasoning. They fail because they paid full price for a question they should have deferred, and ran out of money before the easy stuff at the end.

The first skill is **recognizing a time-sink on sight**, before you commit. You can triage in the first 10 seconds by reading the stimulus *shape*, not the content:

| What you see | Likely cost | First move |
|---|---|---|
| 2-3 tabs (memo / table / chart) you must cross-reference | Expensive (3-4 min) | Read the question first, then hunt only the tab it needs |
| Two-Part Analysis with a dense conditional prompt | Expensive (2.5-3.5 min) | Decide if the two columns are independent; if not, slow down |
| Single sortable table, one question | Cheap (60-90 sec) | Sort on the asked column, answer, move |
| Data Sufficiency, two clean statements | Cheap (45-90 sec) | Test statements, do not re-derive the stem |
| Graphics Interpretation, one chart, two dropdowns | Cheap-to-medium (75-120 sec) | Read both dropdown sentences before touching the chart |

**Trap to watch.** The classic DI grave is **sinking 5 minutes into one MSR tab-reconciliation** — flipping between a sales table and a policy memo, re-reading both because the numbers "almost" line up. Once you cross roughly **3 minutes 30 seconds on a single question with no answer in sight, stop**. Lock in your best current guess, bookmark it, and leave. Five minutes on one MSR sub-question is not diligence; it is three other questions you will now rush or never reach. Protect the easy points first — they pay the same as the hard ones.

**Worked example.** You open an MSR set: Tab 1 is a memo from a logistics manager, Tab 2 a shipping-cost table by region, Tab 3 a chart of on-time rates. The first sub-question asks only, "Which region had the highest cost per shipment?" That lives entirely in Tab 2. **Do not read the memo.** You answer it in 40 seconds — banked. The next sub-question asks whether the memo's claim about delays is *supported* by the on-time chart. Now you genuinely need Tabs 1 and 3, and the wording is slippery. You glance at the clock: you are at 2:50 into the set. Give it 50 more seconds of honest effort; if the reconciliation has not resolved by 3:40, mark your best read, **bookmark, and move**. You walked away with the cheap point secured and capped your loss on the expensive one. That is a winning DI exchange even though you did not ace the set.

**Worked example.** A Graphics Interpretation question shows a dual-axis chart — quarterly revenue (bars) and profit margin (line) for a retailer — with two dropdown sentences: "From Q1 to Q4, revenue increased by approximately ___" and "Over the same period, margin moved in the ___ direction relative to revenue." You read **both** sentences before looking at the chart, so you extract everything in one pass. Revenue bars run 40 to 52, so about a **30%** increase; the margin line falls while bars rise, so the directions are **opposite**. Two dropdowns, one chart read, **70 seconds**, done. The trap here is reading the chart, answering dropdown one, then re-reading the chart from scratch for dropdown two — doubling your time for no reason.

> **Recall check.** At what single-question time threshold should you bookmark and bail on a DI question with no answer in sight? (~3:30 — and pulling that number from memory now, rather than re-reading it, is what makes you actually stop mid-test instead of drifting to 5:00.)

> **Self-explanation prompt.** Why does reading the *question* before the MSR tabs save more time than reading the tabs first — what does it change about how much of the stimulus you ever have to process?

Run the floor like this: do a fast first pass, **close every cheap question immediately**, bookmark anything that crosses your cost threshold, and reserve the back end of your 45 minutes for the bookmarked expensive ones. Glance at the clock at question 7 (should be near 15 minutes used) and question 14 (near 31 minutes) — two checkpoints, not constant clock-watching. If you are behind at a checkpoint, raise your bail threshold and guess faster on the next heavy stimulus. The point total does not care which questions you got right, only how many. Spend accordingly.

## @note-strategy

Under time, your enemy in Data Insights is not arithmetic — it is **working memory overflow**. Multi-Source Reasoning hands you three or four tabs and then asks a question that lives at the intersection of two of them. Try to hold all of it in your head and you will re-open the same tab three times, burning ninety seconds doing it. Your job is to offload structure onto your scratch pad on the *first* pass, so every later question is a lookup, not a re-read.

**Mental model.** Treat each MSR tab as a labeled drawer, not a page to memorize. Your first read is an *indexing pass*: you build a one-line map of which drawer holds what, so future questions tell you exactly which drawer to open and which single number to pull. You do not understand the memo on read one. You catalog it.

Here is the note discipline. As you skim each tab once, write **one line per tab**: the tab name and the *kind* of data it holds. Do not transcribe numbers you don't yet need — that is wasted ink and wasted seconds. Then, for each sub-question, identify the **one figure** it turns on and where that figure lives before you compute anything.

| Note type | What you write | What you do NOT write |
|---|---|---|
| Tab index | `T1=email: deadline + budget cap` | The full email |
| Tab index | `T2=table: cost per unit by region` | Every cell |
| Tab index | `T3=chart: demand vs. price, dual-axis` | Axis tick values |
| Per-question | `Q asks margin -> need price(T3) + cost(T2)` | Anything from T1 |

**Worked example.** A 3-tab MSR memo set. Tab 1 is an email from operations: *"We need 40,000 units by Q3; total tooling budget is 90,000."* Tab 2 is a sortable cost table: unit cost is 1.80 in Region A, 2.10 in Region B, 2.40 in Region C. Tab 3 is a dual-axis chart of forecast demand against selling price. On your pad you write three lines: `T1=email: 40k units, budget 90k`, `T2=table: unit cost A1.80 B2.10 C2.40`, `T3=chart: demand vs price`. The first sub-question asks: *"Can Region B fill the order within the tooling budget if tooling is 0.30 per unit?"* You instantly see this is **T1 + T2 only** — Tab 3 is irrelevant, and the unit *cost* of 2.10 is a distractor, not the tooling figure. You note `40k x 0.30 = 12k <= 90k -> Yes`. The second sub-question asks about price, sending you to Tab 3 — but because you indexed it, you open it *once*, not after fishing through Tabs 1 and 2 again. The index turned three potential re-reads into three clean lookups.

> **Recall check.** On the first read of an MSR tab, what two things go on your pad and what stays off it? (Answer: the tab's name plus the *kind* of data it holds; specific numbers stay off until a question demands them. Forcing the recall now wires in the discipline better than re-reading this paragraph would.)

Now, the calculator. Data Insights gives you an on-screen calculator, and under time pressure it is a **trap as often as a tool**. The mistake is reaching for it before you know what you are computing. Every keystroke is friction, and a mistyped digit produces a confident, wrong number you will trust. The rule: **pre-decide the full computation on paper, estimate the answer first, then let the calculator confirm only the messy arithmetic.**

**Trap to watch.** Students open the calculator to "see what the numbers do" and end up typing a chain of operations with no target, then anchor on whatever appears. If you cannot state the computation in one written line before touching the keys, you are not ready to compute — you are still reading.

**Worked example.** A percent-change question: revenue rose from 1,840 to 2,300; the choices are spread — roughly 15%, 20%, 25%, 30%. **Estimate first.** The change is 460 on a base of 1,840, and 1,840 / 4 = 460 exactly, so 460 is a clean quarter of the base. The answer is **25%** — and you never touched the calculator. Now contrast: revenue rose from 1,847 to 2,021, choices clustered at 9%, 9.4%, 9.8%. Estimation gives "a bit under 10%" but cannot separate the choices. *This* is when you compute: write `174 / 1847` on your pad first, then key it once — 0.0942 — and pick 9.4%. The estimate still earns its keep: it tells you 9.4% is sane, so a fat-fingered 0.942 or 94.2% gets caught instantly.

The pattern is the same both ways: estimate to **decide whether you even need the calculator**, and to **sanity-check** the result if you do.

> **Self-explanation prompt.** Why does estimating *before* you compute protect you more than checking your answer *after*? (Because the estimate sets an expectation independent of the keystrokes, so a typo collides with a prediction you already made — whereas a post-hoc check tends to rationalize whatever number is already on the screen.)

- **Index every tab on read one** — name plus data type, numbers only when needed.
- **Map each sub-question to its one load-bearing figure** before computing.
- **State the computation in writing** before the calculator, never during.
- **Estimate first** to decide whether the calculator is even worth the seconds, then to catch fat-finger errors.

## @revisit-review

On Data Insights, the section is not frozen the instant you answer the last question. The GMAT Focus Edition gives you a review screen at the end of each section, and on it you may revisit bookmarked questions and **edit up to three answers**. That edit budget is a real tool. Your job is to spend it like one — deliberately, on the questions where a second look has the highest chance of converting a wrong answer to a right one.

One catch sets the whole strategy: the review screen only exists **if you have time left**. Run the clock to zero and you never see it. The edit feature is not free — you buy it with banked minutes, and you decide *during* the section which questions deserve that banked time.

**Mental model.** Treat your three edits as three loaded slots, not three obligations. An unused edit is not a waste; a careless edit that flips a right answer to a wrong one is the real cost. You are hunting for questions where your original answer was a **time-pressured guess against partial information**, not questions where you were confident. Confidence plus a clean read means leave it alone.

DI makes this harder than Quant or Verbal because so many of its questions are **multi-part**: Two-Part Analysis with two columns, Multi-Source Reasoning across three tabs, table and graphics questions with several true/false rows. A "wrong answer" on a multi-part item is often wrong in just *one* part. That is exactly the kind of error a focused 90-second revisit catches.

Build the revisit plan as you go, not at the end:

- **Bookmark any multi-part question you committed under time** — a TPA where you locked the second column on a hunch, an MSR where you never opened the third tab, a multi-row table question where one row was a coin flip.
- **Bank a few minutes for the review screen.** On a 45-minute, 20-question DI section that means pacing to finish with roughly 2-3 minutes of cushion, not finishing exactly at zero.
- **On revisit, re-check only the part you were least sure of.** Do not re-solve the whole question. Re-open the one tab, re-read the one column, re-test the one row.

> **Recall check.** How many answers can you edit on the DI review screen, and what one condition makes the screen appear at all? (Up to three; only if time remains. Stating both halves now beats re-reading, because the time-condition is the part students forget under pressure.)

The hardest discipline is the edit rule itself: **change an answer only for a concrete data reason.** "It feels off now" is not a reason. "Tab 3 says the contract renews quarterly, so the annual figure I used was double-counted" is a reason. A vague second-guess in the last two minutes is how strong test-takers lose points they had already earned.

**Trap to watch.** The most expensive DI mistake on the review screen is editing a question you merely *feel* uneasy about while ignoring the one you *know* you rushed. Unease is noise; a remembered shortcut you took ("I never actually opened the second source") is signal. Spend edits on the rushed-and-skipped, never on the solved-but-nervous.

**Worked example.** You finish DI with 2:40 left and two bookmarks. The first is a **Two-Part Analysis**: "Select the region with the highest Q4 revenue (Column A) and the highest Q4 revenue-per-store (Column B)." Under time you picked the same region for both because it topped the revenue table — but you never divided by store count. On revisit you spend 70 seconds: revenue-per-store is revenue ÷ stores, and a smaller region with 4 stores beats the big region's 19. Column A stays; Column B changes. **One concrete data reason, one edit — keep two slots.**

**Worked example.** Your second bookmark is a rushed **Graphics Interpretation** with two dropdowns over a dual-axis chart (units on the left axis, price on the right). You guessed "price *rose* fastest between Year 2 and Year 3" by glancing at the steepest line — but that steep line was the *units* series on the left axis. On revisit you trace the **right-axis** price line: its biggest jump is Year 1 to Year 2. You edit dropdown one. The second dropdown you had read carefully and it checks out, so you leave it. That is your third edit, spent for a reason, and you stop. **No edits left and no regret** — you fixed the two axis-and-arithmetic errors, exactly the slips that survive a rushed first pass.

> **Self-explanation prompt.** Why does banking 2-3 minutes for a targeted revisit of one part typically beat spending those same minutes grinding harder on your hardest question the first time through? (Because end-of-section review lets you re-check with a fresh read and full information, catching one-part errors cheaply, whereas extra first-pass time on a hard item often just deepens a wrong commitment.)

| Bookmark this DI question when... | Skip the edit when... |
| --- | --- |
| You guessed one column, row, or dropdown under time | You read every part carefully and were confident |
| You never opened an MSR tab you needed | You cannot name a specific data reason to change it |
| Your answer used revenue but the prompt said per-store | The change is just a vague last-minute nerve |
| One part was a coin flip, the rest was solid | Re-checking would burn time you cannot spare |

Finish DI with a cushion, walk into the review screen with two or three bookmarks and a clear note on *which part* to re-check, and edit only when the data hands you a reason. Used this way, three edits is enough to recover most of the points DI's time pressure tries to take from you.

## @summary

Data Insights rewards a clock you control rather than a clock that controls you. You have 20 questions in 45 minutes, so your baseline is about **2.25 minutes per question** — but that average is a budget to *redistribute*, not a metronome to obey. Cheap points fund expensive ones. Your discipline is the whole game.

**Mental model.** Treat the DI section as a portfolio of bets, not a queue. A clean two-statement Data Sufficiency or a single-chart Graphics Interpretation is a high-probability, low-cost trade — take it fast and bank the time. A four-tab Multi-Source Reasoning set or a dense Table Analysis with three sortable columns is capital-intensive. You fund the expensive questions by being ruthless and quick on the cheap ones.

Carry these moves out of this track:

- **Triage heavy stimuli on sight.** When an MSR tab-set or a wordy Two-Part Analysis appears, spend the first 15 seconds deciding *how* you'll attack it — which tab holds the number, what the question actually asks — before you read everything. Don't read a 400-word memo front-to-back hoping relevance appears.
- **Protect easy DS and GI points.** A textbook Data Sufficiency or a single-axis chart should cost *under* 2 minutes. Every minute you save here is a minute you spend on a multi-tab monster without panic.
- **Take structured notes on multi-source sets.** One line per tab: what it contains, what units, what it lets you compute. The set is hard because the data is *scattered*, not because the math is deep — your noteboard re-assembles it.
- **Use the calculator deliberately.** It's for ugly arithmetic you'd fumble by hand (long division, multi-step percent change), not for 40 / 8. Reaching for it on trivial math burns seconds and breaks your flow.
- **Bookmark genuine uncertainty.** A multi-part question where you're solid on part one and stuck on part two is exactly what flag-and-return is for. Don't let a stubborn sub-part eat four minutes.

| Situation | Default move |
| --- | --- |
| Clean 2-statement DS / single-chart GI | Solve fast, bank the time |
| 4-tab MSR or dense Table Analysis | Triage first, take tab notes |
| One sub-part of a two-part question stalls | Bookmark, finish the rest, return |
| Ugly multi-step arithmetic | Calculator, deliberately |
| Trivial arithmetic | Do it in your head |

**Worked example.** A Two-Part set gives a 3-tab memo on a freight firm: Tab 1 lists per-route costs, Tab 2 lists volumes, Tab 3 is a contract clause. The question asks for the route with the highest *total* cost and the one with the highest *per-unit* cost. You don't read the clause — it's a distractor. You note "Tab 1 = $/route, Tab 2 = units, multiply for total, divide for per-unit," compute two columns, and answer in 90 seconds. The scattered data was the only difficulty.

**Trap to watch.** Sinking your saved time into *re-deriving* a Two-Part answer you already trust. Review edits exist for a concrete reason — a units slip you spotted, a tab you misread, a statement you re-evaluated — not for free-floating anxiety. If you can't name the reason you're changing an answer, don't change it.

> **Recall check.** What is the per-question time budget in DI, and why is it an average rather than a hard cap? (~2.25 min; it's an average so cheap-question savings fund the expensive multi-tab sets.) Pulling this from memory now is what makes it automatic under the clock — re-skimming won't.

> **Self-explanation prompt.** Why does protecting easy DS/GI points do more for your MSR performance than grinding MSR sets harder would?

End the DI track here: the content varies wildly across the five question types, but the *timing behavior* is constant. Triage before you read, bank time on the easy points, write down what's scattered, compute deliberately, and flag real uncertainty instead of fighting it. Walk in treating your 45 minutes as capital to allocate, and the section stops being a scramble.
