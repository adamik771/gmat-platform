---
slug: di-foundations
title: DI Foundations
section: DI
estimated_minutes: 30
prerequisites: []
summary: |
  Data Insights is 20 questions in 45 minutes, the only section with an on-screen calculator, and five question types that share one skill: pull the right data from dense, mixed-format stimuli and decide without over-solving. This chapter builds that base — what DI tests, calculator and table/chart literacy, and the judge-don't-grind mindset — before you specialize into each question type.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions to calibrate before any technique. Miss them freely; attempting first primes the lesson. Rate your confidence honestly.
    pretest_question_ids:
      - data-sufficiency-q1
      - table-analysis-q1
  - id: what-is-di
    type: reading
    title: "What Data Insights actually tests — five question types, one skill"
    check_question_ids: []
  - id: calculator-and-literacy
    type: reading
    title: "Calculator discipline and table/chart literacy"
    check_question_ids:
      - graphics-interpretation-q1
  - id: di-mindset
    type: reading
    title: "The Data Insights mindset — decide, don't over-solve"
    check_question_ids:
      - data-sufficiency-q2
  - id: summary
    type: summary
    title: "The DI mindset in one screen"
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
      - table-analysis-q1
      - graphics-interpretation-q1
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - data-sufficiency-q2
      - multi-source-reasoning-q1
---

## @what-is-di

Data Insights is one-third of your GMAT Focus score, and most students walk in treating it as the "weird" section they'll figure out on test day. That is how points leak. DI is **20 questions in 45 minutes**, scored on its own **60-90 scale**, and weighted **equally with Quant and Verbal** in your Total Score. It is also the **only** section where you get an **on-screen calculator** — which is a clue, not a gift. The test makers handed you arithmetic help precisely because DI is not testing your arithmetic. It is testing whether you can find the right number and decide what to do with it.

**Mental model.** Every DI question hands you a pile of data in some format — a sortable table, a dual-axis chart, a stack of memo tabs, a paragraph dense with figures — and asks you to make **one clean decision**. Your job is to extract the *specific* data the question needs and stop. The trap is the same one a junior analyst falls into: computing everything because the data is there. The skilled reader asks "what decision am I making, and what is the minimum I need to make it?" first, then reads with that filter on.

There are five question types, and you should treat them as **one family** sharing that single skill:

| Type | Code | What it hands you | What you decide |
|------|------|-------------------|-----------------|
| Data Sufficiency | DS | A question + two statements | Whether the info is *enough* (not the answer) |
| Table Analysis | TA | A sortable, spreadsheet-style table | True/False on three independent claims |
| Graphics Interpretation | GI | A chart or graph + drop-down sentences | The correct fill-ins from the visual |
| Two-Part Analysis | TPA | Prose or data + a two-column grid | Two linked answers from one shared pool |
| Multi-Source Reasoning | MSR | 2-3 tabs of prose, tables, charts | Answers that force you to *combine* tabs |

The mix is unpredictable question to question — DI does not group the types — so you build the *one* skill, not five separate tricks.

The single most important reframe is for **Data Sufficiency**. DS does **not** ask you to solve. It asks whether each statement, alone or combined, **pins the answer down**. You can often declare sufficiency without computing a final value at all — if you know a unique answer *exists*, you stop.

**Worked example.** A regional grocer asks: *Did Store 14's Q2 revenue exceed its Q1 revenue?* Statement (1): Q2 revenue was 12% above the chain-wide average, and Q1 was 4% above that same average. Statement (2): Store 14 ran a Q2 promotion that lifted units sold by 18%. Do not reach for the calculator. Statement (1): both quarters are measured against the *same* chain average, and 12% beats 4%, so Q2 > Q1 — a definite **yes**. Sufficient. Statement (2): more units says nothing about revenue without price, and you have no Q1 comparison — **not** sufficient. Answer: statement (1) alone. You decided sufficiency having computed nothing.

**Worked example.** A Graphics Interpretation item shows a dual-axis chart: bars for **monthly active users** (left axis, thousands) and a line for **revenue per user** (right axis, dollars), across six months. The drop-down sentence reads: *"Total revenue was highest in the month of ___."* The trap is to grab the tallest bar (most users) or the highest line (most revenue per user). Total revenue is **bars × line** — users times revenue-per-user. March has the tallest bars but a middling line; April has the second-tallest bars and by far the highest line. Eyeball the *products*, not either factor alone, and April wins. You read the chart's *structure* — two axes that must be multiplied — not its surface.

That second example is the tell for the graphical and multi-source types: they reward reading **data structures fast**. What is on each axis? What is one row versus one column? Which tab holds the cost data and which holds the schedule? Students who spend three seconds mapping the structure before answering outscore students who dive straight into the numbers.

**Trap to watch.** Over-computing. The calculator tempts you to grind every figure, and TA's sortable table tempts you to read all twenty rows. Resist both. In TA, *sort* by the column the claim is about and check only what that claim touches. In DS, judge sufficiency, not solution. The clock punishes completeness; it rewards precision.

> **Recall check.** Without scrolling up: how many DI questions are there, in how many minutes, and which two reframes separate strong DI scorers from weak ones? (20 questions in 45 minutes; "judge sufficiency, don't solve" for DS, and "read the data structure before the numbers" for the visual and multi-source types — retrieving these now wires them in far better than re-reading the table.)

> **Self-explanation prompt.** Why would the test makers *allow* a calculator in the one section least about arithmetic? (Because the difficulty lives in selecting and combining the right data, not in crunching it — so removing the arithmetic obstacle forces the real skill into the open.)

For the rest of the DI track, carry one sentence: **find the minimum data the decision needs, then decide.** Every type drill that follows is a variation on that single move.

## @calculator-and-literacy

The on-screen calculator is a tool, not a strategy. It lives only in Data Insights — Quant and Verbal give you nothing — and the students who reach for it on every line of arithmetic are the same ones who run out of time before the last two questions. Your job is to make the calculator the exception, not the reflex. Most DI questions reward ratio sense and one-significant-figure estimation; you click only when the numbers are genuinely ugly *and* the question demands precision.

**Mental model.** Treat the calculator like a fire extinguisher: glad it's on the wall, alarmed if you're using it constantly. Before you click, ask one question — "does the answer hinge on the third digit, or just the rough size?" If rough size decides it, estimate. If the choices are 4.2% / 4.8% / 5.1% and the spread is tight, compute. The estimate-or-compute call is itself a skill, and you drill it until it fires without thinking.

Here is the rule set. Internalize it until it runs on its own:

- **Estimate** when answer choices are far apart, when the stem says "approximately," when you only need a comparison ("is A greater than B?"), or when you're sanity-checking direction before committing.
- **Compute** when choices sit within a few percent of each other, when an exact value is at stake, or when an ugly division (like 1,847 / 23) genuinely resists rounding.
- **Always estimate first, even when you'll compute.** A 10-second estimate fixes the order of magnitude, so a calculator typo — extra zero, wrong operator — can't sink you.

| Situation | Default move | Why |
|---|---|---|
| Choices spread >20% apart | Estimate | Rounding can't cross the gap |
| "Approximately" in the stem | Estimate | Precision is not being tested |
| Compare two quantities | Ratio sense | You need order, not value |
| Choices within ~5% | Calculator | Estimation risks a wrong pick |
| Multi-step %-change chain | Calculator, estimate-check | Errors compound; verify magnitude |

> **Recall check.** When should you reach for the calculator instead of estimating? (When answer choices are tight or an exact value is required — and forcing yourself to recall the rule now wires it in faster than re-skimming the table would.)

**Worked example.** A question asks for the percent increase from 412 to 503, with choices 18% / 22% / 27% / 41%. Do not touch the calculator. The jump is about 90 on a base of about 400, so roughly 90/400 ≈ 22%. The choices are far enough apart that your estimate lands cleanly on 22% — no division to four places, no keystrokes to mistype. Compute only if two choices had been 21% and 23%.

The second foundational skill is reading the exhibit, not absorbing it. DI exhibits are deliberately overloaded: a sortable table may carry eight columns when the question needs one, and a chart may plot two series on two different axes to bait a misread. You do not read the whole exhibit. You read the stem, identify the *single figure* it needs, then navigate straight to it.

For **sortable tables**, three habits matter:

- **Read the headers and their units before any number.** "Revenue ($M)" versus "Revenue ($000)" is a thousand-fold trap.
- **Remember what a sort does.** Clicking a column header reorders *every row together*, so after sorting by Margin the name in row 1 is the highest-margin entity, and rank questions ("3rd highest") are answered by sorting and counting, never by scanning.
- **Never assume the default order means anything.** The starting sequence is decoration until you sort it.

**Worked example.** A sortable table lists 12 regional warehouses with columns: Warehouse, Units Shipped, Operating Cost ($000), Cost per Unit ($). The question: "Which warehouse has the third-lowest cost per unit?" Do not compute twelve ratios. Click the "Cost per Unit" header to sort ascending, then read down to the third row. Five seconds, zero arithmetic, zero calculator. The trap is computing Operating Cost / Units yourself for every row — the column you need already exists, and the sort does the ranking for you.

For **dual-axis and stacked charts**, the load-bearing question is always *which axis owns this series*. A line labeled "Units (right axis)" plotted over bars labeled "Revenue (left axis)" share a picture but not a scale — a line sitting "above" a bar can stand for a far smaller number. In **stacked** charts, a segment is a part of a whole, so a band that looks flat may be growing in absolute terms while shrinking as a proportion, or the reverse. Decide up front whether the question is about **absolute level** or **share of total**, because the same chart answers both and the answers differ.

**Worked example.** A dual-axis chart shows quarterly bars for "Ad Spend ($M)" on the left axis (scale 0–50) and a line for "Conversion Rate (%)" on the right axis (scale 0–8). The question: "In which quarter was conversion rate highest relative to ad spend?" The bait is to pick the quarter where the line is physically tallest. But "relative to ad spend" means a ratio — find the quarter where the line is high *and* the bar is low. Q2 has a 6% line over a $20M bar (ratio 0.30); Q4 has a 7% line over a $45M bar (ratio 0.16). Q2 wins, even though Q4's line sits higher on the page. Reading which axis each series belongs to is what saves you.

**Trap to watch.** The most expensive DI mistake is answering the chart's *picture* instead of the question's *quantity*. A series that's visually higher, a bar that's physically taller, a flat-looking stacked band — none of these are answers until you've checked the axis, the units, and whether you were asked for an absolute value or a proportion.

> **Self-explanation prompt.** Why does sorting a table beat computing each row's ratio by hand — what specifically does the sort buy you in both time and error rate? (Because it offloads both the ranking and the arithmetic to the interface, removing the two steps where you'd otherwise bleed time and risk a slip.)

## @di-mindset

Data Insights rewards a different instinct than the rest of the GMAT. Elsewhere, your reflex is to compute the answer. Here, that reflex is a trap. Your job in DI is to make the **smallest decision the question actually requires** — and then stop. Strong scorers don't solve more; they solve *less*, faster, and more often correctly. The skill you are building is knowing the difference between a question that demands an exact number and one that only demands a verdict.

**Mental model.** Think of yourself as a busy executive, not an accountant. The accountant reconciles every line. The executive asks one question — "Do I have enough to decide?" — pulls the single figure that settles it, and acts. Most DI prompts hand you far more data than any one question needs. The data is a buffet; the question tells you which dish to eat. Reading everything is not diligence, it's a time leak.

This shows up most sharply in two formats: **Data Sufficiency**, where you judge *whether* you can answer without ever answering, and **Multi-Source Reasoning**, where the relevant fact lives in one tab and the other two are decoys.

### The over-solver versus the decider

| Behavior | The over-solver | The decider |
|---|---|---|
| First question asked | "What's the answer?" | "Is this enough to answer?" |
| Reading habit | Reads the whole stimulus front to back | Reads the question first, then hunts |
| Computation | Grinds every value to the decimal | Estimates, bounds, eliminates |
| On a tie or near-miss | Recomputes to be "sure" | Trusts the bound and moves |
| Typical failure | Correct but two questions short | Occasionally fast-careless, mostly on pace |

The over-solver is not wrong about the math. They are wrong about the *task*. DI is a timed judgment exam, and unspent confidence on question 4 is worthless when you never reach question 19.

**Worked example.** *(Data Sufficiency)* A regional courier charges a flat dispatch fee plus a per-kilometer rate. **Question: Did Tuesday's 40 km delivery cost more than Monday's 25 km delivery?** Statement (1): The per-kilometer rate was the same both days and was positive. Statement (2): The flat dispatch fee was identical both days. The over-solver reaches for the fee and the rate to compute both totals. Don't. Both deliveries share the same fee (2) and the same positive per-km rate (1). With identical fees, the cost difference is just rate × (40 − 25) = rate × 15, and the rate is positive — so Tuesday is strictly more expensive. You never needed a single number. **Together, sufficient; answer C.** You decided; you didn't solve.

> **Recall check.** In Data Sufficiency, what is the one question you are answering? (Whether the statements *determine* the answer — not what the answer is. Retrieving this reframes the task before you waste effort solving it, which re-reading the prompt never forces you to do.)

**Trap to watch.** The classic DS error is computing far enough to "see the answer," then marking the statement sufficient because you *got* a number. But a single example proving one outcome doesn't prove sufficiency — you must know the answer is *forced*, not merely possible. Test a second case. If the statement can yield both "yes" and "no," it's insufficient, full stop.

### Read only what the question requires

Multi-Source Reasoning punishes thoroughness disguised as rigor. Three tabs, dozens of figures, and a question that hinges on one row. Open the question, identify the **one quantity or claim** it turns on, then go straight to the tab that carries it. Here is how the formats reward the decider's habits:

| Format | What you decide | What you ignore |
|---|---|---|
| Data Sufficiency | Whether the answer is forced | The answer's actual value |
| Multi-Source Reasoning | Which tab holds the deciding fact | The decoy tabs |
| Graphical / table | Which bound separates the choices | Decimals the spread doesn't need |

**Worked example.** *(Multi-Source Reasoning)* You're given three tabs: **Tab 1 — Email** from the ops lead summarizing a supplier review; **Tab 2 — Pricing table** listing each supplier's unit cost, lead time, and minimum order; **Tab 3 — Quality memo** scoring defect rates. The question: *"Which supplier offers the shortest lead time among those with a minimum order at or below 500 units?"* The decider never opens Tab 1 or Tab 3 — defect rates and the email narrative are irrelevant to a lead-time-and-minimum-order question. Go to Tab 2. Filter mentally to suppliers with minimum order ≤ 500 (say that's three of five rows), then read off the smallest lead time among those three. One tab, two columns, done. The other tabs were there to bleed your clock.

> **Self-explanation prompt.** Why does reading the question *before* the stimulus beat reading the stimulus first? (Because the question defines your search target, so you scan for a known signal instead of absorbing everything and deciding relevance afterward.)

### Trust estimation and elimination

When the answer choices are spread apart, exact arithmetic is overkill. If a chart shows revenue near 4.2M and costs near 3.8M, you don't need the exact margin to pick "positive but under 0.5M." Round aggressively, bound the result, and let the answer spread do the rest. Grind only when two choices are genuinely close — and even then, grind just enough to break the tie. **Decide, don't over-solve** is not a license to be sloppy; it's the discipline to spend precision exactly where it changes your answer, and nowhere else.

## @summary

You now own the whole DI section before you touch a single question type. Lock in the hard constraints: **20 questions in 45 minutes** — roughly **two minutes fifteen seconds each**, but never spend it evenly. Some questions are quick reads; some are dense multi-tab beasts. Spend where the points are and bank time on the easy ones.

**Mental model.** Data Insights is not five separate skills wearing different costumes. Across Data Sufficiency, Table Analysis, Graphics Interpretation, Two-Part Analysis, and Multi-Source Reasoning, you do one thing: **find the specific piece of data the question needs, then decide — without solving everything in front of you.** The screen always shows more than you need. Your edge is extracting the relevant slice and stopping there.

The calculator is the trap dressed as a gift. It is **available in DI only**, and reaching for it is a decision, not a reflex.

- Use it when the arithmetic is genuinely ugly — long division, awkward percentages of large numbers.
- Skip it when an estimate settles the question, or when the answer hinges on logic rather than a clean number.
- Every keystroke costs seconds. If you are typing before you know what you are solving, stop.

The five types, and the one move each rewards:

| Type | Full name | The DI move |
|------|-----------|-------------|
| DS | Data Sufficiency | Judge whether you *could* answer — never compute the answer |
| TA | Table Analysis | Sort, filter, read the one cell that decides it |
| GI | Graphics Interpretation | Read axes and trend, fill the dropdown |
| TPA | Two-Part Analysis | Pick one value per column under a shared constraint |
| MSR | Multi-Source Reasoning | Pull facts across tabs, ignore the rest |

**Worked example.** A Table Analysis prompt shows 30 rows of regional sales and asks: "Did any region exceed $4M in both Q1 and Q2?" The over-solver computes every row's two-quarter total. The DI move: sort by Q1 descending, eyeball the handful of regions above $4M, then check only those for Q2. You read maybe four cells, not sixty, and answer in under a minute.

**Worked example.** A Data Sufficiency item asks for a company's profit margin. Statement (1) gives revenue and total cost as clean figures. You do **not** divide them out — the instant you confirm both numbers are pinned down, (1) is sufficient and you move on. Finishing the arithmetic earns zero extra points and burns clock you'll want on the back third.

**Trap to watch.** Over-solving. Students grind a DS statement all the way to a number, or total every row of a sortable table, then run out of clock on the final questions. The entire DI mindset is **enough, not exact.** If a sort answers it, do not calculate. If sufficiency is established, do not finish the math.

> **Recall check.** How many questions, how many minutes, and is the calculator allowed everywhere on the exam? (20 questions / 45 minutes; calculator DI-only — retrieving the hard constraints now is what makes them automatic under pressure, when re-reading is not an option.)

> **Self-explanation prompt.** Why does "judge enough, don't solve" save time across *all* five types, not just Data Sufficiency? (Because every DI question hands you surplus data; the skill that pays off is deciding what you need and stopping — solving past that point is wasted clock everywhere.)

Your default loop for any DI question: **read the actual question first, locate the data it points to, decide what "enough" looks like, extract only that, answer, move on.** That loop is this chapter compressed to one screen.

Next, you go deep on the type that *defines* this mindset — **Data Sufficiency**, where judging enough instead of solving is the entire game. Turn to the Data Sufficiency chapter.
