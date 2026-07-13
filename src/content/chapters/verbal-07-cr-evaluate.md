---
slug: verbal-07-cr-evaluate
title: "CR: Evaluate"
section: Verbal
estimated_minutes: 14
prerequisites:
  - verbal-06-cr-inference
summary: |
  Evaluate questions ask which piece of information would most help judge the argument. This chapter teaches the two-way test that cracks them.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - critical-reasoning-q150
      - critical-reasoning-q151
  - id: cr-evaluate
    type: reading
    title: "CR: Evaluate"
    check_question_ids:
      - critical-reasoning-q43
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - critical-reasoning-q166
      - critical-reasoning-q44
      - critical-reasoning-q45
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - critical-reasoning-q46
      - critical-reasoning-q47
      - critical-reasoning-q48
---

## @cr-evaluate

Evaluate questions ask: "Which of the following would be most useful to know when evaluating this argument?" You're asked to identify the single piece of information that would most decisively help you judge whether the argument works. Think of yourself as a juror who can ask the witness exactly **one** question before the verdict — you want the question whose answer flips your confidence the most, not one that merely adds color. Every other answer choice is a question you'd be wasting your one shot on.

**The template.** The answer is a question (or a piece of information framed as a question) whose answer would either strongly support or strongly undermine the argument depending on which way it goes. The wrong answers fail in one of two ways: either the argument barely moves no matter how the question is answered (**irrelevant**), or the answer only ever pushes in **one** direction (that's strengthen/weaken material, not evaluate material). Hold onto both failure modes — almost every trap you'll meet is a disguised version of one of them.

**The "two-way test" — the technique that cracks every evaluate question.**

1. For each answer, imagine getting the information phrased as a "yes" answer and as a "no" answer.
2. Ask: "Does the argument strengthen a lot in one case **and** weaken a lot in the other?"
3. If yes — that's the one. You're evaluating something that actually *matters*.
4. If the argument doesn't change much either way — irrelevant, eliminate.

The crucial word in step 2 is *and*. A correct evaluate answer must swing **both** ways. If the "yes" branch helps but the "no" branch does nothing, you don't have a true two-way pivot — you have an answer that only matters under one outcome, which is too weak to be the best evaluator. Run **both** branches every time; never accept an answer after testing only one. The single most common reason students miss these is that they stop after the branch that obviously helps and never check whether the other branch is inert.

> **Recall check.** What two things must both be true of a correct evaluate answer? (Its "yes" branch and its "no" branch must push the argument in *opposite* directions, and the swing in each must be *large*.) Pull this from memory before reading on — forcing the retrieval now is what wires it in; re-reading the rule a third time would feel productive but barely move retention.

**A memorizable step-by-step procedure.** Run this on every evaluate question, in order:

1. **Find the conclusion** and the main evidence that supports it. Underline the gap between them.
2. **Name the assumption** bridging that gap — the unstated thing that must hold for the evidence to deliver the conclusion.
3. **Predict** the kind of question that would test that assumption (alternative cause? relevant comparison group? reverse causation? representativeness?).
4. **For each answer, run the two-way test** — plug in "yes" and "no" and watch the argument.
5. **Keep only answers that swing both ways and swing hard.** Eliminate anything that's one-directional or inert.
6. **Confirm the survivor** targets the *central* assumption, not a peripheral detail.

Steps 1–3 are the same front-end you already use for assumption and strengthen/weaken questions — which is why those skills transfer directly here. If you've drilled assumption questions, you've already built two-thirds of the evaluate machinery; the only new muscle is the two-way branch test in steps 4–5.

**Example.** Argument: "Company Y switched to quarterly reviews; turnover dropped from 22% to 14%. Therefore the new review system caused the drop."

Candidate answers:

- "What was the average salary at Company Y during the same period?"
- "Did other companies in the industry, without switching review systems, experience similar turnover changes?"
- "How many employees worked at Company Y?"

Apply the two-way test:

- Salary: if salary went up a lot, that could explain the turnover drop (weakens original). If unchanged, original argument survives. Relevant — but weaker effect.
- Other companies: if others saw similar drops without the switch, the switch isn't necessarily the cause (weakens). If others saw no change or rising turnover, the switch's effect looks real (strengthens). **BIG swing in both directions** — this is the best evaluator.
- Headcount: small or large, doesn't bear on whether the review system caused the change. Irrelevant.

Notice *why* the "other companies" answer wins: it directly attacks the central assumption — that nothing **other than** the review change drove the turnover drop. The salary answer pokes at one specific alternative cause; the comparison-group answer tests for **all** industry-wide alternative causes at once. When two answers both pass the two-way test, prefer the one that probes the more central, more general assumption.

**Worked example — straightforward.** Argument: "After City Z installed brighter streetlights downtown, reported nighttime crime fell 30%. The brighter lighting must have reduced crime." Which would be most useful to know? Candidate: "Did the number of police officers patrolling downtown at night change after the lights were installed?" Run the two-way test. If patrols *increased* sharply at the same time, the lights may deserve none of the credit — the argument weakens. If patrols stayed *exactly the same*, the lighting explanation survives and looks stronger. Opposite directions, large swing — this is a clean evaluate answer. It works because it tests an alternative cause for the same outcome.

**Worked example — straightforward-plus.** Argument: "A new tutoring program was offered at Lincoln High, and the school's average math score rose 12 points the next year. The tutoring program raised scores." Candidate: "Did the school change its math curriculum or hire new math teachers in the same year the tutoring program began?" Two-way test. If yes — a rival cause arrived alongside the tutoring, so the 12-point jump could belong to the new curriculum, not the program; the argument weakens. If no — the tutoring stands as the only obvious change, and the causal claim firms up. Opposite directions, real swing. This is the bread-and-butter evaluate pattern: whenever an argument says "we did X, then good thing Y happened, so X caused Y," the highest-value question asks whether some *other* change snuck in at the same time.

**Worked example — medium.** Argument: "Brand A's new energy drink contains an ingredient shown to improve focus in lab studies. Therefore, consumers who switch to Brand A will perform better at work." Tempting answer: "What is the exact milligram concentration of the ingredient in one can of Brand A?" Run both branches. High concentration — does the argument follow? Not really; we still don't know whether *that dose* helps real workers. Low concentration — the argument is no worse off than before, because it never specified a dose. The argument barely moves either way: the real gap is whether lab-study focus translates to workplace performance, not the precise milligrams. Eliminate. Better answer: "Did the lab studies measure performance on tasks resembling normal workplace work, or only on narrow attention tests?" That one swings hard both ways — it tests the **representativeness** assumption bridging "lab focus" to "work performance."

> **Recall check.** In the energy-drink example, why is the milligram-concentration answer wrong even though it's clearly *on topic*? (Because it's one-directional and inert — neither a high nor a low number meaningfully changes whether lab focus transfers to workplace performance; being on-topic is not the same as being a pivot.) Retrieving the *reason* it fails, not just that it fails, is what lets you spot the same trap dressed in different clothing next time.

**Worked example — medium-hard.** Argument: "In a survey, employees who use the company gym report 20% fewer sick days than those who don't. Therefore, requiring all employees to use the gym would cut total sick days." Candidate: "Are employees who already choose to use the gym healthier, on average, than non-users for reasons unrelated to the gym?" Two-way test. If yes — the correlation is driven by *who self-selects* into the gym, not the gym itself, so mandating it for everyone won't replicate the effect; the argument collapses. If no — self-selection is ruled out, and the gym-causes-health story holds up. Massive swing in opposite directions. This answer nails the classic **selection-bias / reverse-causation** assumption hiding in any "users of X are better off" claim.

**Worked example — hard.** Argument: "Region R adopted a four-day workweek; one year later, regional productivity per worker rose 8%. Other regions that kept five-day weeks saw productivity per worker rise only 2%. Therefore the four-day week boosted productivity." Here a control group is *already* in the argument, so the naive comparison-group answer is partly addressed — and the test-writer knows it. Candidate: "Did Region R's largest employers also adopt new automation software during the same year, while the comparison regions did not?" Two-way test. If yes — a confounding variable rode along with the four-day week, and the 8% could be automation, not schedule; the argument weakens sharply. If no — the four-day week stands as the most likely cause of the gap, strengthening the claim. Big two-way swing. The lesson: even when an argument supplies its own control, an evaluate answer can still win by surfacing a **confounder that the control didn't hold constant**. Don't assume "they already gave a comparison" means causation is locked.

**The question stem decoder:**

| Stem wording | Type |
|---|---|
| "…most useful to know in evaluating the argument…" | Evaluate |
| "…most helpful to establish whether the conclusion is warranted…" | Evaluate |
| "…the most useful information would be whether…" | Evaluate |
| "…answering which question would be most relevant to assessing…" | Evaluate |
| "…most important for the analyst to determine…" | Evaluate |

**Evaluate = assumption + impact.** Evaluate questions are essentially asking "which assumption would it be most useful to verify?" The correct answer often tracks the argument's central assumption — the one whose truth or falsity most affects the conclusion. This is why step 2 of the procedure (name the assumption) pays off: if you've already named what the argument is *betting on*, the correct answer is usually the one that checks that bet. Skip step 2 and you're reduced to plugging "yes/no" into five answers blind, which is both slower and more error-prone.

**The link back to strengthen/weaken.** An evaluate answer is a question whose "yes" answer *strengthens* the argument and whose "no" answer *weakens* it (or vice versa). If you remember the alternative-cause and control-case patterns from the strengthen/weaken section, you already know what to look for. In practice, the most common winning patterns are: an **alternative cause** for the observed effect, a **relevant comparison group**, a **reverse-causation** check, and a **representativeness** check on whether the evidence's sample matches the conclusion's scope. Memorize those four — the correct answer is one of them far more often than chance.

**Trap to watch — the "too specific" trap.** Evaluate answers sometimes ask about very specific details (exact dates, exact dollar amounts, precise concentrations) that don't bear on the central claim. A good evaluate question asks about something *structural* — an alternative cause, a relevant comparison group, a reverse-causation check — not a precise number. When an answer choice tempts you with a concrete-sounding measurement, force yourself to run both branches: if neither a high nor a low value meaningfully moves the conclusion, it's the too-specific trap.

**Trap to watch — the one-way distractor.** Some wrong answers genuinely *strengthen* the argument when answered one way — and do nothing when answered the other. These feel relevant because one branch clearly helps. But evaluate demands a *two-way* pivot. Always test the second branch; a one-directional answer is a strengthen-question answer wearing an evaluate costume.

> **Recall check.** A four-step evaluate procedure asks you to find the conclusion, name the assumption, predict the question type, then run the two-way test. Which of those steps do students most often skip, and what does skipping it cost? (Naming the assumption — skip it and you're forced to brute-force all five answers blind, which is slow and lets a slick one-way distractor through because you never predicted what the *right* answer should target.) Saying this out loud now beats silently nodding at the list above.

> **Self-explanation prompt.** Why does the two-way test work? If you can explain "because evaluating an argument means knowing whether it's likely true or false, and the best question is one whose answer tells us decisively — which requires the answer to produce a big swing in either direction," you've internalized the structure. Push it one step further: explain why a one-directional answer, however relevant it feels, can never be the *best* evaluator (because an evaluator's job is to *discriminate* between "argument holds" and "argument fails," and a one-way answer can't discriminate — it only ever nudges you toward one verdict).

**Common mistakes.**

- **Testing only the "yes" branch.** You confirm an answer helps and stop. Always plug in "no" too — the second branch is where one-way distractors get exposed.
- **Choosing the on-topic detail.** An answer mentions the same nouns as the argument, so it *feels* right — but feeling on-topic is not the same as producing a swing. Topic-match is bait; the two-way swing is the criterion.
- **Falling for false precision.** Exact dates, dollar amounts, and concentrations look rigorous but usually don't move the central claim. Demand structural relevance, not numerical specificity.
- **Forgetting the argument already has a control.** When the stem hands you a comparison group, don't reflexively pick "compare to a control" answers as if causation were settled — look for a *confounder* the existing control failed to hold constant.

**Recap.**

- Evaluate asks for the single question whose answer most decisively tells you if the argument holds.
- The two-way test is the engine: the right answer must swing the argument **hard in opposite directions** depending on "yes" vs. "no."
- Front-load the work — find the conclusion, name the central assumption, predict the question type — then the correct answer is usually the one that checks that assumption.
- Winning patterns are structural: alternative cause, comparison group, reverse causation, representativeness. Losing patterns are inert details, on-topic noise, false precision, and one-way distractors.
- When in doubt, prefer the answer that tests the **most central, most general** assumption over one that pokes at a single narrow detail.
