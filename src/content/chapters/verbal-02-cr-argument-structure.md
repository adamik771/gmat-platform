---
slug: verbal-02-cr-argument-structure
title: "CR: Argument Structure"
section: Verbal
estimated_minutes: 18
prerequisites:
  - verbal-01-foundations
summary: |
  Every Critical Reasoning question turns on one thing — the gap between an argument's evidence and its conclusion. This chapter builds the engine: find the conclusion, find the evidence, find the unstated gap.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - critical-reasoning-q1
      - critical-reasoning-q2
  - id: cr-argument-structure
    type: reading
    title: "CR: Argument Structure"
    check_question_ids:
      - critical-reasoning-q3
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q3
      - critical-reasoning-q4
      - critical-reasoning-q5
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q6
      - critical-reasoning-q7
      - critical-reasoning-q8
---

## @cr-argument-structure

Every Critical Reasoning argument has three parts. Your first job on every question — before you even read the question stem — is to identify them. The students who plateau on CR are almost always the ones who skip this step: they dive into the answer choices hoping one will "feel right." The students who break 700 build the skeleton first, every single time, until it becomes automatic. This section is about installing that reflex.

**Mental model.** Every CR argument has three parts: evidence, conclusion, and the unstated gap that bridges them. The question is *always* about the gap — strengthening it, weakening it, naming it, evaluating it. Find the gap before you read the answer choices, and the right answer announces itself; read the choices first and you're solving by feel. Think of the gap as the **load-bearing assumption**: pull it out and the whole argument collapses, which is exactly what a weaken question asks you to do, and exactly what a strengthen question asks you to reinforce. Everything else in this chapter — the nine question types, the trap answers, the timing strategy — is downstream of this one move.

**1. Conclusion.** What the author wants you to believe. The main claim. Usually introduced with signal words: "therefore," "thus," "hence," "it follows that," "the chain's management concludes," "researchers hypothesize," "critics argue." But signals are a convenience, not a crutch — on hard questions the conclusion often hides in the middle of the passage with no flag attached, and you'll find it with the "why" test below.

**2. Evidence (or premises).** The facts and reasons the author offers in support of the conclusion. Usually descriptive statements: data, studies, observations, historical facts. No "therefore" attached. On the GMAT you accept the evidence as true — you never attack a premise. Your leverage is always the *reasoning* that connects premise to conclusion. This is non-negotiable and it is the single most common thing testers get wrong: a tempting wrong answer often invites you to doubt a stated fact, and the instant you take that bait you're off the path.

**3. The gap.** The unstated leap from evidence to conclusion. This is the single most important thing to identify on every CR question — because nearly every CR question (strengthen, weaken, assumption, flaw) is about this gap. The gap is whatever *else* would have to be true for the evidence to actually prove the conclusion. It is *unstated* by design; if the author had spelled it out, there'd be no question to ask.

**The procedure to memorize.** Run these five moves in order, the same way on every question, until you don't have to think about them:

1. **Find the conclusion.** Underline or mentally tag the main claim. Signal words help, but sometimes the conclusion is at the beginning, sometimes the end, sometimes the middle.
2. **Find the evidence.** Everything else in the passage that's presented as fact and exists to support the conclusion.
3. **Find the gap.** What assumption bridges the two? What alternative explanation could exist? Match the argument to a known gap pattern (causal, comparison, sample, plan, reporting, numbers vs. percentages).
4. **Pre-phrase the gap in your own words.** Say it under your breath: "The author is taking for granted that ___." Carry that exact sentence into the choices.
5. **Only then read the question stem,** and match it to the gap you already named.

Once you've done these moves, *then* read the question stem. Not before. The structure is the same regardless of which of the nine question types you're asked — the gap is always what you're working with. On test day this should run automatically, like a checklist a pilot doesn't have to think about.

**Worked example (straightforward).** "A regional grocery chain launched a loyalty program three months ago. Since then, revenue is up 8%. The chain's management concludes the loyalty program is responsible."

- **Conclusion:** The loyalty program caused the revenue increase.
- **Evidence:** Program launched 3 months ago; revenue up 8% in that period.
- **Gap:** "No other explanation accounts for the revenue increase." The argument assumes that nothing else changed in those 3 months (no ad campaign, no competitor closing, no seasonal effect, no new products).

Notice how the gap is phrased as *what the argument takes for granted*. That's the template: look at the evidence, look at the conclusion, and ask "what else would have to be true to get from here to there?" This is a classic **causal argument** — "X happened, then Y happened, therefore X caused Y" — and its gap is *always* the same shape: maybe something else caused Y, maybe the causation runs backward, maybe it's coincidence.

**Conclusion vs. evidence — the "why" test.** If you can insert "because" or "the reason is" between two statements, the second is evidence for the first. "The loyalty program caused the revenue rise (conclusion) *because* revenue went up 8% after launch (evidence)." Always read evidence as answering the question "*why* does the author believe the conclusion?" The statement that *needs* support is the conclusion; the statement that *provides* it is the evidence. When two statements both look like candidates, ask which one the other is there to prove — that one is the conclusion.

> **Recall check.** Close your eyes. State the three parts of every CR argument. Now recall: which part is almost always the subject of the question you'll be asked? (Answer: the gap — the assumption bridging evidence to conclusion.) Forced retrieval of the skeleton makes it available on the next 74 CR questions in this chapter; re-reading the paragraph doesn't.

**Worked example (medium).** "Until last year, City Hospital used a paper-based system for tracking medication orders. Last year it switched to a new electronic system. In the year since the switch, the number of reported medication errors has risen by 30%. Hospital administrators conclude that the electronic system is more error-prone than the old paper system."

- **Conclusion:** The electronic system is more error-prone than the paper system.
- **Evidence:** *Reported* medication errors rose 30% after the switch.
- **Gap:** The argument leaps from *reported* errors to *actual* errors. It assumes the rate of reporting stayed constant. But an electronic system might make errors easier to *detect and log* — so the same number of real errors (or even fewer) could generate more *reports*.

Here the load-bearing word is "reported." The author treats a change in the *measurement* as a change in the *thing being measured*. Spotting that one word is the entire question. Whenever evidence is a count of *reported / detected / diagnosed* cases, suspect that the detection method, not the underlying reality, changed.

**Worked example (medium-hard).** "Region A and Region B are demographically identical. Region A adopted a four-day workweek two years ago; Region B did not. Productivity per worker in Region A is now 12% higher than in Region B. Therefore, adopting a four-day workweek raises worker productivity."

- **Conclusion:** The four-day workweek raises productivity.
- **Evidence:** Two "identical" regions diverged in productivity after one adopted the policy.
- **Gap:** This is a **controlled-comparison** (analogy) argument. It assumes the two regions are alike in *every relevant respect except the workweek*. Break the analogy — Region A also got a new factory, attracted higher-skilled workers, or started from a lower baseline — and the conclusion falls.

A second hidden gap: "demographically identical" is not "identical in all productivity-relevant ways." The argument quietly swaps a narrow claim (same demographics) for a broad one (same everything). Watch for that swap — it's how comparison arguments smuggle in their assumption.

> **Recall check.** Without looking up, answer: in a causal argument of the form "X happened, then Y happened, so X caused Y," what are the *three* standard ways to attack the gap? (Answer: an alternative cause for Y; reversed causation — Y caused X; or mere coincidence/correlation.) Generating these from memory builds the reflex that fires the instant you see a post-hoc conclusion on test day.

**Worked example (hard).** "A pharmaceutical company tested a new drug against a placebo. Patients who took the drug recovered, on average, four days faster than those who took the placebo. The lead researcher concludes that the drug will shorten recovery time for the general population of patients with this illness."

- **Conclusion:** The drug shortens recovery time *for the general patient population*.
- **Evidence:** In the trial, drug patients recovered 4 days faster than placebo patients.
- **Gap:** The argument generalizes from *the trial sample* to *the general population*. It assumes the trial participants are representative — same age range, severity, comorbidities, adherence. If the trial enrolled only young, healthy volunteers, the result may not transfer.

The trap is that the experiment itself looks airtight (placebo control, measured outcome). But the conclusion is about a *different, larger group* than the one studied. **Sampling/representativeness gaps live in the move from "the people we measured" to "people in general."** Any time the conclusion's subject is broader than the evidence's subject, that widening is the gap.

**Worked example (hard, plan-based).** "To reduce highway congestion, the city plans to add a third lane to its busiest commuter route. Engineers estimate the new lane will increase the road's capacity by 50%. The transportation board concludes that congestion on the route will fall sharply."

- **Conclusion:** Congestion on the route will fall sharply.
- **Evidence:** The added lane increases capacity by 50%.
- **Gap:** This is a **plan/prediction** argument. It assumes adding capacity won't *change behavior*. But added capacity often *induces demand* — drivers who currently avoid the congested route, or commute at off-peak hours, may now choose it, eating up the new capacity. The plan ignores the obstacle that the road's *attractiveness* is itself a variable.

The signature of a plan argument is the leap from "we will do X" to "X will produce the desired result." The gap is almost always an ignored obstacle or a side effect — here, the behavioral response that the engineering estimate doesn't account for.

> **Self-explanation prompt.** Pick any one of the five worked examples above and, in one or two sentences, explain *to yourself* why attacking the premise would be a wasted move — and what attacking the *gap* does instead. Putting the reason in your own words (rather than nodding along) is what cements that premises are off-limits and the gap is the target.

**Common conclusion signal phrases:**

| Phrase | What follows |
|---|---|
| "Therefore…" | The conclusion |
| "Thus…" | The conclusion |
| "So…" (at the start of a sentence) | The conclusion |
| "It follows that…" | The conclusion |
| "We can conclude…" | The conclusion |
| "Researchers argue…" | The conclusion |
| "The company's management believes…" | The conclusion (author may disagree) |

Note the last one: if the author *describes* what management believes, the author's own conclusion may be that management is wrong. Reading for *who* is making the claim matters.

**Common evidence signal phrases:** "Since…", "Because…", "Given that…", "After all…", "In fact…", "Studies show…", "Data indicate…"

When no signal words appear at all — and on harder questions they often don't — fall back on the "why" test and the **conclusion question**: "What is the one sentence this whole passage exists to make me accept?" Everything that exists to support that sentence is evidence.

**Gap patterns by argument type** — most CR gaps fall into one of a few recurring molds. Learn the mold and you've half-solved the question before reading the choices:

| If the argument is… | The gap is usually… |
|---|---|
| Causal ("X then Y, so X→Y") | Alternative cause, reversed causation, or coincidence |
| Comparison / analogy | The two cases differ in a relevant way |
| Sample → population | The sample isn't representative |
| Plan / prediction | An obstacle or side effect the plan ignores |
| "Reported/detected X rose" | The detection or reporting method changed |
| Numbers vs. percentages | A shift between count and rate hides the truth |

> **Recall check.** Cover the table above. From memory, name the gap pattern for each of these stems: (a) "diagnoses of the condition have doubled since the new screening test was introduced"; (b) "the program worked in our pilot city, so it will work nationwide"; (c) "sales rose after we changed the logo, so the logo drove sales." (Answers: (a) detection/reporting method changed; (b) sample isn't representative of the population; (c) causal — alternative cause, reversed causation, or coincidence.) Pulling the label up from memory, before you've read any answer choices, is the exact skill the test rewards.

**Trap to watch.** Don't confuse *premises stated by the author* with *claims the author actually endorses*. The author might describe critics' views only to refute them. Track whose argument you're evaluating — the narrator's, the critic's, or the researcher's. The conclusion you must evaluate is the one the question stem points you at.

**Trap to watch.** Don't pick the answer that simply *restates the conclusion* in fresh words. A choice that says "the loyalty program helped revenue" doesn't *strengthen* the loyalty-program argument — it just repeats it. Strengtheners and weakeners must operate on the *gap* (rule out or introduce an alternative cause), not echo the claim. If a choice could be deleted and the argument would read exactly the same, it's doing no work.

**Common mistakes.**

- **Reading the question stem first** and then hunting in the passage for "the answer." You lose the structure and start matching keywords instead of logic. Build the skeleton first, every time.
- **Attacking the evidence.** On the GMAT premises are given as true; your only leverage is the reasoning. A choice that disputes a stated fact is almost always wrong.
- **Mistaking a supporting sub-point for the main conclusion.** Apply the "why" test ruthlessly — the main conclusion is the claim nothing else in the passage is there to prove.
- **Confusing whose view it is.** When the passage reports what "management" or "critics" believe, the author's own conclusion may be the opposite. Tag the speaker.

**Recap.**

- Every CR argument = **evidence + conclusion + gap**; the gap (the load-bearing assumption) is what the question is about.
- Build the skeleton **before** reading the stem: find conclusion, find evidence, pre-phrase the gap in your own words, *then* read the stem.
- Use the **"why" test** to separate conclusion from evidence; the conclusion is the claim that needs support and that nothing else exists to prove.
- **Never attack the premise** — work the gap. Match the argument to a known gap pattern (causal, comparison, sample, plan, reporting, numbers vs. percentages).
- Beware answers that **restate the conclusion** or **dispute a fact**, and always track **whose** conclusion the stem is pointing you at.
