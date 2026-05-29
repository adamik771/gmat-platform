---
slug: two-part-analysis
title: Two-Part Analysis
section: DI
estimated_minutes: 45
prerequisites: []
summary: |
  Two-Part Analysis asks you to pick two values from a shared answer list — the two values must jointly satisfy the constraints of the question. The questions come in two flavors: quantitative (set up equations, pick the pair that solves the system) and logical (identify two roles in an argument, like conclusion and assumption). The trick is recognizing which flavor you're in, applying the appropriate discipline (algebraic for quantitative, structural for logical), and always deriving your answers before consulting the list. Master that discipline and every Two-Part question becomes a 90-second solve.
sections:
  - id: pretest
    type: pretest
    title: Try before you learn
    intro: |
      Before I teach you anything, try these two. It's fine to miss them — research shows that *attempting* questions before instruction primes your brain to encode the lesson better. Rate your confidence honestly; your calibration matters more than your accuracy right now.
    pretest_question_ids:
      - two-part-analysis-q9
      - two-part-analysis-q10

  - id: the-two-part-format
    type: reading
    title: "The Two-Part format — one answer list, two selections"
    intro: |
      Two-Part Analysis is the format that catches strong scorers off guard — not because the questions are conceptually harder, but because the answer structure is unlike anything else on the test. Spend two minutes locking in the mental model here. Once it clicks, the format stops being disorienting and starts being a constraint you can exploit: there is exactly one correct pair.
    check_question_ids:
      - two-part-analysis-q11

  - id: quantitative-setup
    type: reading
    title: "Quantitative Two-Part — set up the equations, then pick the pair"
    intro: |
      Quantitative Two-Part is a two-equation word problem in unusual packaging. Strip the packaging — define variables, write equations, solve — and match your answers to the list. The examples below follow that sequence every time.
    check_question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q3

  - id: logical-two-part
    type: reading
    title: "Logical Two-Part — argument roles and structure"
    intro: |
      Logical Two-Part is Critical Reasoning with a second question layer. The skills you already have — identifying conclusions, locating assumptions, evaluating evidence — transfer directly. The new discipline is mapping those CR skills onto TPA's two-column format and verifying that both selections work together, not just each in isolation.
    check_question_ids:
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q13

  - id: rate-and-mixture-templates
    type: reading
    title: "Rate, mixture, and system-of-equations templates"
    check_question_ids:
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q15

  - id: common-tpa-traps
    type: reading
    title: "The four TPA traps — and the compute-first reflex"
    intro: |
      These four traps are format-specific failure modes — they exist because TPA's structure creates predictable cognitive shortcuts that produce wrong answers. None require conceptual knowledge you lack. Each is eliminated by a specific procedural habit.
    check_question_ids: []

  - id: cause-effect-patterns
    type: reading
    title: "Cause-and-effect argument patterns"
    intro: |
      Causal Two-Part appears frequently at medium-hard difficulty and has a distinctive failure mode: both selections look reasonable individually, but the pair fails the mirrored structure the question requires. This section gives you the causal argument template and the discipline that prevents that failure.
    check_question_ids:
      - two-part-analysis-q8
      - two-part-analysis-q14

  - id: summary
    type: summary
    title: "The Two-Part decision tree"
    check_question_ids: []

problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - two-part-analysis-q9
      - two-part-analysis-q10
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - two-part-analysis-q1
      - two-part-analysis-q2
      - two-part-analysis-q4
      - two-part-analysis-q6
      - two-part-analysis-q8
      - two-part-analysis-q11
      - two-part-analysis-q12
      - two-part-analysis-q13
  hard:
    target_accuracy_by_score:
      "605": 25
      "645": 40
      "685": 60
      "725": 80
    question_ids:
      - two-part-analysis-q3
      - two-part-analysis-q5
      - two-part-analysis-q7
      - two-part-analysis-q14
      - two-part-analysis-q15
---

## @the-two-part-format

Two-Part Analysis is the most unusual question format on the GMAT. Instead of picking one answer from five, you pick **two answers** from a shared list — one for each of two related questions. The catch: the two selections must *jointly* satisfy the constraints.

**Mental model.** TPA gives you two columns but a single shared answer set — pick one row for column 1, one row for column 2. Students who scan the list first and try options against each column separately run out of time. Students who derive their answers from the problem and then locate them in the list usually finish in 90 seconds. The list is a verification layer, not a menu to browse.

**The format, in a table.**

|          | Part 1 | Part 2 |
|----------|--------|--------|
| Option A | ◯      | ◯      |
| Option B | ◯      | ◯      |
| Option C | ◯      | ◯      |
| Option D | ◯      | ◯      |
| Option E | ◯      | ◯      |
| Option F | ◯      | ◯      |

Each row is an option. Each column is a selection (Part 1 and Part 2). You pick exactly one option for Part 1 and exactly one for Part 2. The two selections may be the same row or different rows.

**What TPA is actually testing.** The format is built around constraint satisfaction: the test wants to know whether you can find two values that *jointly* solve a system of conditions — not one answer that looks reasonable in isolation, but a pair that satisfies every constraint simultaneously. There is exactly one correct pair. That constraint narrows the solution space considerably once you've derived both values from the problem: you're not choosing among six options, you're locating two specific values you've already computed.

**The shared-answer-list constraint.** Both parts draw from the same list of options. This means the same value can be correct for both parts (common in symmetric mixture problems), for just one, or for neither. Don't assume the two answers must be different rows.

**The two flavors.**

- **Quantitative Two-Part** gives you a word problem with two related unknowns. Set up equations, solve, and pick the two values from the list.

- **Logical Two-Part** gives you an argument and asks you to identify two roles — e.g., the conclusion and the primary assumption, or a strengthener and a weakener. Analyze the argument's structure and match each role to a statement in the list.

**How to recognize which flavor you're in.**

Quantitative tells: numbers, units, "find the value of," equations, percentages, rates, amounts.

Logical tells: arguments, claims, "identify the role," conclusions, assumptions, strengthens/weakens, reasoning language.

When in doubt: if the stem asks you to *compute* something, it's quantitative. If the stem asks you to *evaluate* something, it's logical.

**The general discipline.**

1. Read the stem → identify what Part 1 and Part 2 are asking for.
2. If quantitative: define variables and set up equations. If logical: decompose the argument.
3. Solve → derive *both* answers from the problem, without looking at the list.
4. Find each answer in the list → verify the pair satisfies every original constraint.

The answer list is a verification layer, not an input. Treat it as confirmation, not guidance.

> **Recall check.** Close your eyes. Describe the Two-Part answer format. Now describe the two flavors and how to recognize each. (Answer: shared list, one pick per column. Quant: compute — derive first. Logic: evaluate — decompose first.) Locking in the structure before touching a practice question is what makes the format second nature.

## @quantitative-setup

Quantitative Two-Part is a word problem with two unknowns. The workflow is exactly like any two-equation, two-unknown algebra problem — just with a specific answer list.

**The standard workflow.**

1. Define two variables for the two quantities you need to find.
2. Translate the problem into two equations.
3. Solve the system (substitution or elimination).
4. Match each variable's value to the answer list.

**Worked example (rate problem).** "Truck A delivers a load in 6 hours alone. Truck B delivers the same load in 4 hours alone. Together, time = T. A alone = S. Pick T and S from the list: 1.6, 2.4, 3.6, 4.0, 6.0."

- S (A alone) is given directly: 6 hours. **Pick 6.0 for S.**
- T (together): combined rate = 1/6 + 1/4 = 5/12 per hour. Time = 12/5 = 2.4 hours. **Pick 2.4 for T.**

**Worked example (mixture problem).** "Mix Solution X (30% salt) with Solution Y (60% salt) to create 10 L of 45% solution. Find X and Y amounts from the list: 2, 3, 4, 5, 6, 7 (all in liters)."

- Let x = liters of X, y = liters of Y.
- Total: x + y = 10.
- Salt: 0.30x + 0.60y = 0.45 × 10 = 4.5.
- Substitute x = 10 − y: 0.30(10 − y) + 0.60y = 4.5 → 3 − 0.30y + 0.60y = 4.5 → 0.30y = 1.5 → y = 5. So x = 5.
- **Pick 5 for both.**

**Worked example (investment problem).** "Invest $100,000 total between Fund Alpha (8% return) and Fund Beta (5% return). Total return $6,800. Pick the amount in Alpha and in Beta from the list: 20K, 40K, 50K, 60K, 70K, 80K."

- Let a = Alpha, b = Beta. a + b = 100,000.
- 0.08a + 0.05b = 6,800.
- Multiply: 8a + 5b = 680,000. And b = 100,000 − a, so 8a + 5(100,000 − a) = 680,000 → 3a = 180,000 → a = 60,000.
- **Pick 60,000 for Alpha, 40,000 for Beta.**

**The "check against the answer list" reflex.** After solving, verify both your answers appear in the list. If one doesn't, check your arithmetic — probably a sign error or a setup mistake.

**The "same answer for both parts" case.** Sometimes the correct answer for Part 1 and Part 2 is the same option (like the mixture example above where both were 5 liters). The format allows this — don't be thrown off.

**The "two unknowns but one equation" trap.** If you think you need more information, you've missed a relationship in the problem statement. Two-Part quant always has enough constraints. Re-read carefully.

**Percent and ratio patterns.** Many Two-Part questions involve percentages. Translate percentages to decimal multipliers (8% → 0.08) before setting up the equation.

**The "backsolve if stuck" shortcut.** If the answer list has only 4–5 values and your algebra is getting complicated, plug candidate values into the constraint equations. Start with the middle value; if it satisfies the equation, substitute back to find the second answer. Slower than direct solving, but a reliable backup under time pressure.

**Micro-drill — identify the setup and solve.** Work each in under 60 seconds before reading the answers.

1. Machine A completes a job in 5 hours alone; Machine B completes the same job in 20 hours alone. Find the combined time T and A's individual time S. List: 2, 4, 5, 8, 10, 20.
2. Mix a 40% alcohol solution with a 70% alcohol solution to make 30 L of 50% solution. Find the volume of each. List: 6, 8, 10, 12, 18, 20, 22, 24.
3. Total investment $80,000. Fund X returns 6%; Fund Y returns 9%. Total return = $6,000. Find each amount. List: 20K, 30K, 40K, 50K, 60K.

*Answers:* (1) Combined rate = 1/5 + 1/20 = 5/20 = 1/4; T = 4. S = 5. *Pick 4 for T, 5 for S.* (2) Let x = 40% solution. x + y = 30; 0.40x + 0.70y = 15. Substitute: 0.40x + 0.70(30 − x) = 15 → 0.40x + 21 − 0.70x = 15 → −0.30x = −6 → x = 20, y = 10. *Pick 20 and 10.* (3) a + b = 80,000; 0.06a + 0.09b = 6,000. Multiply: 6a + 9b = 600,000 and 6a + 6b = 480,000 → 3b = 120,000 → b = 40,000, a = 40,000. *Pick 40K for both.* If any took over 90 seconds, the bottleneck is variable definition, not arithmetic — review the setup step.

> **Self-explanation prompt.** Why is Two-Part quant just a standard two-equation system? If you can say "because the shared-list format is a presentation convention; underneath, it's the same algebra as any 2-unknown word problem," you've stripped the mystery from the format and can apply your algebra skills directly.

## @logical-two-part

Logical Two-Part asks you to identify two roles in an argument or passage. Classic pairs:

- "Identify the conclusion" (Part 1) and "Identify the primary assumption" (Part 2).
- "Identify a piece of evidence that strengthens" (Part 1) and "Identify a piece that weakens" (Part 2).
- "Identify the cause claimed by the author" (Part 1) and "Identify the effect" (Part 2).

**The argument skeleton.** Every GMAT argument has the same underlying structure. Before touching the answer list, map the passage to this skeleton.

| Layer | What it is | Signal words |
|---|---|---|
| Evidence | Facts or observations the author cites | "research shows," "data indicates," "because," "since" |
| Sub-conclusion | Intermediate claim drawn from evidence, then used to support the main conclusion | Sits between evidence and main conclusion in the chain |
| Main conclusion | The claim the author most wants to establish | "therefore," "thus," "consequently," "this suggests" |
| Assumption | Unstated premise the argument requires | Absent from the text — must be inferred |

Most TPA arguments are 3–5 sentences. Before reading the Part 1 and Part 2 headers, spend 20 seconds labeling each sentence as E (evidence), C (conclusion), or Sub-C (sub-conclusion). That labeling makes both roles obvious before you ever glance at the answer list.

**Step-by-step decomposition protocol.**

1. Read the full argument once — no skimming. 20–25 seconds.
2. Identify the main conclusion — the claim the author most wants established. Mark it.
3. Identify the primary evidence — the facts cited to support it. Mark those.
4. Infer the assumption — ask: "What unstated premise must be true for this evidence to support this conclusion?"
5. Read the Part 1 and Part 2 headers — understand the two roles before touching the list.
6. For each role, scan the list for the statement that best matches — don't evaluate all options linearly.
7. Verify both selections against the argument.

**Worked example (conclusion + assumption).** Argument: "The new marketing campaign increased sales by 25% in Q1. However, the campaign coincided with a major competitor going bankrupt, reducing market competition. Therefore, the campaign's effectiveness may be overstated."

- Conclusion: *The campaign's effectiveness may be overstated.*
- Evidence: Sales grew 25%; a competitor went bankrupt simultaneously.
- Assumption being challenged: *The 25% growth is fully attributable to the campaign alone.* (If the competitor's collapse drove some of that growth, the causal attribution to the campaign weakens.)

Match from the answer list:
- Part 1 (conclusion) → "The campaign's effectiveness may be overstated."
- Part 2 (assumption challenged) → "All of the 25% sales growth is attributable to the marketing campaign."

**Worked example (strengthen + weaken pair).** "A study found that employees working remotely reported 20% higher productivity than office workers. The CEO concluded remote work should be mandated for all staff."

Strengthener: "Productivity metrics were measured identically for both groups."
Weakener: "Remote workers were self-selected from high performers in the company."

**The decomposition checklist for logical Two-Part.**

| Role | Hallmarks |
|---|---|
| Conclusion | The main claim; often after "therefore," "thus," "conclude" |
| Evidence | Facts, data, observations; often after "because," "since," "research shows" |
| Assumption | Unstated premise; often about "no alternative causes" or "representative samples" |
| Strengthener | Makes the evidence-conclusion link more plausible |
| Weakener | Introduces alternative cause, confounder, or counter-evidence |
| Counter-claim | A position the author argues against — not the author's own view |

**The verification ritual — two steps, no exceptions.**

After picking both answers:

*Step 1 — Role check:* For each selection, does it play the role the question assigned? (If Part 1 asked for the conclusion, does this read as the main claim — not evidence, not an intermediate step?)

*Step 2 — Relationship check:* Do your two selections have the right relationship to each other? If Part 1 is the conclusion and Part 2 is the assumption, the assumption should support the conclusion when affirmed. If Part 1 is a strengthener and Part 2 a weakener, they should pull in opposite directions on the same claim.

**Trap to watch.** Sub-conclusions masquerade as main conclusions. If the argument has two "therefore"-style claims, the sub-conclusion supports the main one — it is not the final answer to a "identify the conclusion" question. The test reliably includes the sub-conclusion as a distractor.

**Trap to watch.** Don't confuse "the role the statement plays in the argument" with "the role the question asks about." The question might ask for the conclusion the author *supports*, or the premise the author *disputes*. Read the column headers carefully before scanning the list.

> **Self-explanation prompt.** Why does labeling each sentence of the argument (E / C / A) before looking at the answer list save time rather than cost time? If you can say "because the list is calibrated to include each labeled role, and scanning it without labels creates false recognition — something can look like the conclusion without being the *main* conclusion," you've understood why structure-first is faster on logical TPA.

## @rate-and-mixture-templates

The most common quantitative Two-Part templates are rate/work problems, mixture problems, and percent/investment problems. Each has a standard setup.

**Rate template (combined work).**

Workers A and B have individual times `a` and `b`. Combined time T is given by:

    1/a + 1/b = 1/T

If the question asks for T and a, solve for T using the above.

**Mixture template (weighted-average).**

Mix quantities x and y of solutions with concentrations c_X and c_Y to get total quantity t with concentration c:

    x + y = t
    c_X × x + c_Y × y = c × t

Two equations, two unknowns. Substitute or eliminate.

**Percent/investment template.**

Split capital P between two instruments with rates r_A and r_B for total return R:

    a + b = P
    r_A × a + r_B × b = R

Standard two-equation system.

**Distance-rate-time template.**

If two objects move at rates r_1 and r_2 over distances d_1 and d_2, possibly with time constraints:

    d_1 = r_1 × t_1
    d_2 = r_2 × t_2

Plus any constraint relating t_1 and t_2 (same start, meet at a point, one catches the other).

**Worked example (D/R/T Two-Part).** Two cars drive in opposite directions. Car A at 50 mph, Car B at 70 mph. They start together. After how many hours are they 360 miles apart? Also find the total distance Car A traveled.

- Separation rate: 50 + 70 = 120 mph.
- 120t = 360 → t = 3 hours.
- Distance A traveled: 50 × 3 = 150 miles.
- **Pick 3 for Part 1, 150 for Part 2.**

**Worked example (system of two rates).** "A factory assigns Task 1 (requiring 4 worker-hours) to Worker A and Task 2 (requiring 6 worker-hours) to Workers B and C together. Worker A completes Task 1 in 2 hours. B and C together take 3 hours on Task 2. Find Worker A's individual rate and the combined rate of B and C. List: 0.5, 1, 1.5, 2, 2.5, 3."

- Worker A's rate: 4 worker-hours ÷ 2 hours = **2 units/hour**. Pick 2 for Part 1.
- B + C combined rate: 6 worker-hours ÷ 3 hours = **2 units/hour**. Pick 2 for Part 2.
- Both select the same option — that is correct and expected.

**Pro tip.** When both Part 1 and Part 2 resolve to the same numeric value, don't second-guess the format. Pick the same row twice and verify the joint constraint. Symmetric setups produce symmetric answers.

**The template matcher.**

| Problem says | Template | What to set up |
|---|---|---|
| "Working together" | Combined work | 1/a + 1/b = 1/T |
| "Mix two solutions" | Mixture | x + y = t; concentration equation |
| "Split capital between two investments" | Percent/investment | a + b = P; return equation |
| "Moving in opposite directions" or "toward each other" | D/R/T opposite | separation = (r₁ + r₂) × t |
| "Chasing" or "same direction" | D/R/T same | gap = (r₁ − r₂) × t |
| "Rate of completion / worker-hours" | Work rate | total work ÷ time = rate |

> **Recall check.** Without looking, state the combined-work formula, the mixture formula, and the investment formula. (Answers: 1/a + 1/b = 1/T; weighted average with two equations; split-capital with two equations.) All three are structurally the same — two equations in two unknowns. Retrieving all three in one breath cements the template in long-term memory.

## @common-tpa-traps

Two-Part Analysis has the most consistently-mishandled traps of any DI subtype because the format itself creates a unique failure mode: you have to satisfy *two* constraints at once, but you pick *each* answer independently. The four traps below cost more points on hard TPA than any algebra error.

**Trap 1: The single-column-valid pair.**

This is the signature TPA failure. You pick a value for Part 1 that's valid considered alone, then a value for Part 2 that's valid considered alone — and the pair fails the joint constraint between them.

*Example.* The problem asks for "amount of Solution X" (Part 1) and "amount of Solution Y" (Part 2), with constraint x + y = 10. The shared list: 2, 3, 4, 5, 6, 7. Under time pressure, a student picks x = 4 (looks reasonable for column 1) and y = 5 (looks reasonable for column 2) — but 4 + 5 = 9 ≠ 10. Both individual picks seem fine; the pair isn't.

The fix: **always verify the joint constraint as the last step**. Your two values must satisfy *every* equation in the problem simultaneously, not just each column's constraint considered in isolation.

**Trap 2: The intermediate-result distractor.**

TPA answer lists almost always include a value that's the result of an intermediate step in a multi-step solve. Students who finish step 3 of a 4-step problem and recognize "their" number in the list bubble it — and lose the question.

*Example.* Solving the system 3a + 5b = 100 and a + b = 24. A student substitutes b = 24 − a, gets −2a = −20, lands on a = 10, then needs b. The list includes 20 (from the −2a = −20 step) alongside b = 14 (the correct answer). The student, having just stared at "20" for a beat, bubbles 20 for Part 1. Wrong — Part 1 asked for a = 10, not the intermediate step.

The fix: **before bubbling, restate what each part is asking for and confirm your value answers that specific question**. "Part 1 asks for a. My computed value is 10." Don't trust the recognition reflex — the test writers plant the intermediate values specifically to trap that reflex.

**Trap 3: The "must differ" assumption.**

Students sometimes assume Part 1 and Part 2 must be different rows. They aren't required to differ. When the math points at the same value for both parts — especially common on symmetric mixture problems — pick the same row twice and move on.

*Example.* "Mix Solution X (30% salt) with Solution Y (60% salt) to make 10 L of 45% salt solution. List: 2, 3, 4, 5, 6, 7." Solving: x = 5, y = 5. Pick 5 for both. It feels odd. Trust the algebra over the instinct.

**Trap 4: Binary scoring → all-or-nothing pacing.**

TPA is graded all-or-nothing per question. Getting Part 1 right and Part 2 wrong gives zero credit — the same as missing both. This shapes pacing: if you're stuck on Part 1, don't burn time carefully solving Part 2 hoping for partial credit. There is none.

Strategic consequence: at the 2:30 mark, if Part 1 is still uncertain, commit to a best guess for both parts and move on. Spending another 90 seconds solving Part 2 when Part 1 is doomed is wasted time — and forgoes a fully-solvable question downstream.

Flip side: if Part 1 is locked with confidence, now it pays to invest in Part 2. Each part you solve correctly is worth the full point only when the pair is complete.

**The compute-first reflex (the meta-discipline).**

Strong TPA solvers compute their answers *before* scanning the list, then find them. Students who scan the list first anchor on a value and try to make the algebra fit — this produces the wrong answer at least half the time on hard questions.

The discipline: **derive both values from the problem on scratchwork, then find them in the list**. If your answer isn't there, your setup is wrong — re-check before guessing.

**The full TPA verification routine — every question, no exceptions.**

| Step | Action |
|---|---|
| 1 | Derive both values from the problem (scratchwork before the list) |
| 2 | Locate each value in the list |
| 3 | Substitute both selections back into *every* original constraint — both must hold |
| 4 | Restate what each part asks for — confirm your selection answers *that specific question*, not an intermediate quantity |

This routine adds 15–20 seconds per question. It eliminates the three most common TPA errors simultaneously — a trade you should take every time.

> **Self-explanation prompt.** Why is verifying the joint constraint specifically the last step in TPA — rather than treating each part as an independent question? If you can say "because TPA's shared-list format invites picking each part in isolation; only joint verification catches the cross-constraint failures the format is designed to surface," you've understood why TPA punishes this mistake more than any other format would.

## @cause-effect-patterns

Causal Two-Part is a specialized variant of logical TPA that appears frequently at medium-hard difficulty. The question explicitly asks you to find both a *supporter* and an *underminer* of a causal claim — from the same answer list. The challenge: both selections must pull in *opposite* directions on the same evidence, and the mirrored structure is precisely where most students go wrong.

**The causal argument template.**

An author observes a correlation between X and Y, then claims X caused Y. The argument has a specific shape:

Observation (X and Y co-occur) → Causal claim (X caused Y) → Conclusion (therefore, act on X)

The gap between "correlation observed" and "causal claim" is where all the action is on TPA. The assumption bridging them is: *there is no alternative explanation for Y, and X preceded Y in time.* Attack that assumption to weaken; reinforce it to strengthen.

**The mirrored-selection discipline.** Before committing to your pair, run both through this test:

- "Does my Part 1 answer make the causal claim *more convincing*?"
- "Does my Part 2 answer make the causal claim *less convincing*?"
- "Do my two answers pull in *opposite* directions on the same argument?"

If both answers reinforce the claim — or both undermine it — you've made a unidirectional error. That is the most common mistake on causal TPA, and the answer list is designed to make it easy to commit.

**What makes a causal supporter.**

- Establishes temporal order — X happened before Y (correlation without temporal order is not causation).
- Provides a mechanism — explains *how* X produces Y (a plausible mechanism closes the gap between correlation and cause).
- Rules out alternative causes — shows the other explanations for Y have been eliminated.
- Demonstrates dose-response — shows that more X produces more Y (gradient evidence is among the strongest causal evidence).

**What makes a causal underminer.**

- Introduces an alternative cause — another factor Z could explain Y as well as or better than X.
- Reverses the causal direction — Y might cause X, not the other way around.
- Exposes confounding — a third variable C drives both X and Y independently, producing correlation without causation.
- Shows the relationship doesn't generalize — if X truly causes Y, the pattern should replicate in other contexts; evidence that it doesn't weakens the claim.

**Worked example.** Argument: "Employees who took a leadership training course were promoted twice as fast as those who didn't. Therefore, the course accelerates career advancement."

Part 1 (Support): "Employees were randomly assigned to the course, not self-selected."

Why this works: self-selection is the main alternative cause — highly motivated employees might enroll AND get promoted faster, independently of the training. Random assignment eliminates that alternative and tightens the causal attribution to the course.

Part 2 (Undermine): "Employees who enrolled in the course were drawn from a pool that managers had already identified as high-potential."

Why this works: this introduces an alternative explanation. Managers' prior identification — not the course — could drive the faster promotions. The correlation between training and promotion is preserved, but the causal attribution is now challenged.

Notice that neither selection disputes the underlying correlation (promotions are faster for trainees). They argue only about its *cause*. That is the hallmark of well-written causal TPA options — the evidence is agreed upon, the interpretation is contested.

**The "plausible mechanism" test.** When evaluating a supporter: "Does this make it *more likely* that X physically or logically produces Y?" When evaluating an underminer: "Does this give me a reason to believe Y could occur even without X?"

If the supporter answer is "not really," keep scanning. If the underminer answer is "not really," keep scanning. Don't settle for an answer that's merely consistent with the causal claim — it must make the claim more or less convincing, not just neutral.

**Structural Two-Part variant — premise + conclusion.**

Some TPA questions ask for "a premise the author uses" (Part 1) and "the main conclusion" (Part 2). When the argument has multiple inferential steps, distinguish:

- *Sub-conclusion*: drawn from evidence, then used as evidence for the main conclusion.
- *Main conclusion*: what the author ultimately wants established.

All three can appear in the answer list. The distinction: the sub-conclusion is a *stepping stone* — it is itself supported by evidence and in turn supports the final claim. The test exploits students who grab the sub-conclusion as the main conclusion because it uses "therefore"-type language.

**Trap to watch.** On strengthen/weaken causal TPA, the answer list will contain two plausible supporters and two plausible underminers. Students who are vague about what the causal claim actually is often pick one of each correctly but for the wrong parts — strengthener in the weakener column and vice versa. Re-read the column headers before picking.

> **Self-explanation prompt.** Why does ruling out alternative causes *strengthen* a causal claim rather than simply leaving it unchanged? If you can say "because a causal claim is only as strong as the absence of competing explanations — each alternative ruled out tightens the attribution — and without eliminating alternatives, correlation is never more than correlation," you've internalized the asymmetric logic of causal reasoning. That logic appears in every causal TPA at medium-hard difficulty.

## @summary

Two-Part Analysis is two question types sharing a format. Classify the flavor immediately, apply the appropriate template, and always verify the pair before submitting.

**The Two-Part decision tree.**

```
Read the stem
│
├── Numbers / units / equations / rates → QUANTITATIVE
│   │
│   ├── Define two variables for the two unknowns
│   ├── Write two equations from the problem constraints
│   ├── Solve the system (substitution or elimination)
│   ├── Locate both answers in the list
│   └── Verify: plug both back into every equation → both must hold
│
└── Arguments / roles / claims / reasoning → LOGICAL
    │
    ├── Label each sentence: E (evidence), C (conclusion), Sub-C (sub-conclusion)
    ├── Infer the assumption: what must be true for the evidence to support the conclusion?
    ├── Read Part 1 and Part 2 headers — understand the required roles
    ├── For each role, scan the list for the matching statement
    └── Verify: role check (each fits its column) + relationship check (pair has correct polarity)
```

**The quantitative templates:**

| Template | Formula |
|---|---|
| Combined work | 1/a + 1/b = 1/T |
| Weighted mixture | x + y = t; c_X·x + c_Y·y = c·t |
| Split capital | a + b = P; r_A·a + r_B·b = R |
| Distance-rate-time | d = r·t; separation rate = sum (opposite) or difference (same direction) |

**The logical roles:**

| Role | Signature |
|---|---|
| Conclusion | Main claim, often after "therefore" |
| Evidence / premise | Facts and observations; often after "because" or "since" |
| Assumption | Unstated premise the argument requires; often "no alternative cause" |
| Strengthener | Fact that narrows the evidence-conclusion gap |
| Weakener | Fact that introduces alternative cause or counter-evidence |
| Counter-claim | View the author argues against — not the author's own position |

**The verification routine — every question.**

| Step | Quantitative | Logical |
|---|---|---|
| 1 | Derive both values on scratchwork | Decompose argument skeleton (E / C / A) |
| 2 | Locate both in the list | Find both roles in the list |
| 3 | Substitute back into every constraint — both must hold | Role check: each selection fits its column's required role |
| 4 | Confirm each answers its specific column's question, not an intermediate | Relationship check: pair has the right polarity (strengthen/weaken) |

**Time-management targets.**

- Easy Two-Part: under 90 seconds.
- Medium: 90–120 seconds.
- Hard: up to 2 minutes. At the 2:30 mark on a hard question, commit a best guess and move on.

**The two most important TPA habits.**

1. **Classify the flavor in the first 10 seconds.** Going in with the wrong frame — trying to set up equations for a logical question, or running argument analysis on a quantitative one — burns 30+ wasted seconds and produces wrong answers. "Identify the role" in the stem means logical; "find the value of" means quantitative.

2. **Derive before you scan.** The answer list exists to confirm your answer, not to suggest it. Students who scan the list for "something that looks right" drift toward list anchoring — the test exploits that drift with intermediate-result distractors and plausible-but-wrong role matches.

**Recovery protocol — when you're stuck.**

- Part 1 derivation isn't working → re-read the stem and restate, in one sentence, what Part 1 is literally asking for. Most "stuck" cases are caused by misreading the column header, not a calculation error.
- Your answer isn't in the list → your setup is wrong. Check your variable definitions and re-read the constraints before changing your algebra.
- Part 2 answer missing but Part 1 confirmed → check whether you've applied the second constraint. The missed constraint is usually implied in the final sentence of the problem.
- Hard question, 2+ minutes elapsed, neither answer confirmed → best-guess both parts and move. TPA has no partial credit; time spent here is time taken from a solvable question.

Drill the 15 questions in this chapter's problem sets. Because Two-Part questions appear in smaller volume than other DI types, each one carries above-average weight in your Data Insights score — aim for 90%+ on the easy and medium sets before the test.
