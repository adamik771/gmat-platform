---
slug: verbal-16-rc-inference
title: "RC: Inference"
section: Verbal
estimated_minutes: 14
prerequisites:
  - verbal-15-rc-detail
summary: |
  RC inference questions ask what the passage implies but doesn't state. This chapter teaches text-forced inference and avoiding outside knowledge.
sections:
  - id: pretest
    type: pretest
    title: "Try before you learn"
    intro: |
      Two quick questions before the lesson. Miss them freely; attempting first sharpens the read.
    pretest_question_ids:
      - reading-comprehension-q165
      - reading-comprehension-q115
  - id: rc-inference
    type: reading
    title: "RC: Inference"
    check_question_ids:
      - reading-comprehension-q19
  - id: inference-stays-supported
    type: reading
    title: "Inference = one small step the text forces"
    check_question_ids: []
problem_sets:
  easy:
    target_accuracy_by_score:
      "605": 80
      "645": 90
      "685": 95
      "725": 100
    question_ids:
      - reading-comprehension-q54
      - reading-comprehension-q20
      - reading-comprehension-q21
  medium:
    target_accuracy_by_score:
      "605": 50
      "645": 65
      "685": 80
      "725": 95
    question_ids:
      - reading-comprehension-q22
      - reading-comprehension-q23
      - reading-comprehension-q24
---

## @rc-inference

Inference questions ask: "Which of the following can be inferred from the passage?" or "The passage implies that..." or "Which of the following is most strongly suggested by the passage?" They are the single most-missed RC question type at the upper score bands, and the reason is almost always the same: students answer from what *sounds* reasonable rather than from what the text *forces*. This section trains the discipline that fixes that.

**The test.** Inference answers are NOT directly stated in the passage. They are what *must be true* given the passage's explicit claims. The correct answer is a logical consequence, not a restatement. Think of yourself as a prosecutor who can only use evidence admitted into the record — the passage is the entire record, and anything you "know" from outside the courtroom is inadmissible. The instant you find yourself reasoning "well, in the real world that's usually how it goes," you have left the record and you are about to miss the question.

**The "must be true" vs. "could be true" distinction.** Inference answers must be guaranteed by the passage, not merely consistent with it. If you can construct any plausible scenario where the passage is true but the inference is false, the inference isn't valid. This is the engine of the whole question type. A wrong answer on an inference question is usually not *contradicted* by the passage — it is simply *not forced* by it. "Not contradicted" feels safe, which is exactly the trap. Four out of five choices will typically be things that *could* be true; your job is to find the one that *has* to be true.

The official stems map to a tighter requirement than their everyday English suggests. Read the decoder table as "what the test actually demands":

| Stem wording | What it sounds like | What it actually requires |
| --- | --- | --- |
| "can be inferred" | "is reasonable to think" | must be true given the text alone |
| "the passage implies/suggests" | "the author would probably agree" | logically entailed by an explicit statement |
| "the author would most likely agree that" | "fits the author's vibe" | follows from the author's stated position, not their imagined one |
| "the passage provides support for which" | "is mentioned somewhere" | the passage's claims guarantee it |

Notice the pattern across the middle column: every stem *feels* like an invitation to be reasonable, agreeable, or associative. The right column is uniformly harsher. The gap between those two columns is precisely where points are lost.

**Trap to watch.** The "outside knowledge" trap. If you happen to know a topic — subscription economics, primate biology, monetary policy — you will be tempted to grade answers against reality instead of against the passage. A choice can be factually true in the real world and still be wrong because the passage doesn't establish it. Reverse this for the correct answer too: a choice can sound mildly surprising or even counterintuitive and still be right if the text forces it. Grade against the text, never against your prior. The more you know about a subject, the *more* vigilant you must be — your expertise is working against you here, smuggling in premises the passage never granted.

**Worked example (straightforward).** Passage: "Subscription businesses lose 30% of customers annually to churn, requiring constant new customer acquisition."

Valid inferences:
- "If a subscription business stops acquiring new customers entirely, its customer base will shrink." (Must be true — losses with zero replacement can only shrink the base.)
- "Companies with above-average retention have an advantage in the subscription market." (Must be true — implied by "requiring constant acquisition"; less churn means less of the acquisition treadmill.)

Invalid inferences (too strong):
- "Subscription businesses will eventually go bankrupt." (Not supported — 30% loss with replacement doesn't mean inevitable collapse.)
- "All subscription businesses have the same retention rate." (Contradicted — an *average* loss rate implies variation around it.)

> **Recall check.** Close the book. State the difference between "must be true" and "could be true," and say which one the correct answer satisfies. (Answer: "must be true" = guaranteed by the text in every scenario where the passage holds; "could be true" = merely consistent with the text. The correct answer must be "must be true.") Retrieving this now, before you've seen a wrong answer, is what builds the reflex — re-reading the rule passively never installs the filter.

**The "weakest inference is usually correct" heuristic.** Most students pick the strongest-sounding answer. But strong inferences are easier to disprove, which makes them wrong. The correct inference is often the *most modest* claim that's fully supported — "some," "often," "may," "tend to," "at least one." Extreme-language answers ("always," "never," "all," "every," "only," "cannot") are usually wrong on inference because a single counterexample scenario negates them, and the passage rarely closes off every counterexample.

This is not a superstition about word-counting; it's a logical consequence of "must be true." A claim quantified with "some" needs only one supporting case to be guaranteed. A claim quantified with "all" needs the passage to rule out every exception. The passage almost never does the latter, so strong universal answers almost never survive. Think of it as a burden-of-proof asymmetry: weak claims ask little of the text and are cheap to satisfy; strong claims demand exhaustive coverage the text was never built to provide.

**Worked example (medium).** Passage: "Early adopters of the new accounting standard reported lower audit costs in the first year. Critics noted, however, that early adopters were disproportionately large firms with sophisticated finance departments."

Which can be inferred?
- (A) The new standard always reduces audit costs. — Too strong; "always" is unsupported, and the critics' point undermines even the firms shown.
- (B) The observed cost reduction may be partly attributable to firm characteristics rather than the standard itself. — Correct. The critics' observation that adopters were large, sophisticated firms forces exactly this "may be confounded" reading. Note the hedge "may be partly" — that modesty is why it survives.
- (C) Small firms that adopt the standard will see audit costs rise. — Unsupported direction; the passage says nothing about small-firm outcomes.

The correct answer (B) is the most cautious claim on the list, and that is not a coincidence. Whenever a passage hands you a "critics noted, however" or "but skeptics observed" clause, expect the right answer to live inside that hedge — the author has practically pre-written the modest inference for you.

**The "bridge" inference pattern.** The passage provides two pieces of information; the inference connects them. These reward you for chaining two explicit statements into one conclusion neither sentence states alone. The danger is that the chain feels so natural you stop policing the quantifiers as the two premises link up.

**Worked example (medium-hard).** Passage: "All primates with highly convoluted brains use tools. Most great apes have highly convoluted brains."

Valid inference: "Most great apes use tools." (Bridge: "most great apes have convoluted brains" + "convoluted brains → tool use" yields "most great apes use tools.") Watch the quantifier carefully — because only *most* great apes have convoluted brains, you can conclude only that *most* (not *all*) use tools. Upgrading "most" to "all" in the answer is the classic bridge trap. The "all" lives in the first premise (all convoluted-brained primates use tools); the *cap* lives in the second (only most great apes have such brains). The weaker quantifier always wins the chain.

> **Self-explanation prompt.** In your own words, explain why "Most great apes use tools" is forced but "All great apes use tools" is not — and what specific word in the second premise is doing the limiting work. Saying it aloud forces you to locate the quantifier ("most") that caps the conclusion, which is exactly the move you'll need under time pressure.

**The "implication" pattern.** The author states something directly that logically entails something else, often via a contrast the author sets up.

**Worked example (medium).** Passage: "Successful subscription businesses focus on building genuine switching costs, making it more valuable to stay than to leave."

Implication: "Companies that rely solely on cancellation friction are less sustainable." (The author frames *genuine* switching costs as the success factor, implicitly contrasting them with mere friction; the comparative "genuine" is what carries the implication.) The load-bearing word is "genuine" — it presupposes a non-genuine alternative the author is ranking below it. Hunt for these evaluative adjectives — "genuine," "true," "mere," "superficial" — because each one quietly sets up a second category the author has implicitly demoted, and the inference usually lives in that demotion.

> **Recall check.** Without looking back: in a two-premise "bridge" inference, when the two premises carry different quantifiers ("all" in one, "most" in the other), which quantifier governs your conclusion, and why? (Answer: the *weaker* one — here "most" — because the conclusion can only be as strong as its least-certain link; the chain is capped by its loosest quantifier.) Pulling this from memory now means you'll catch the "most → all" upgrade on test day instead of nodding past it.

**The "negation/contrary" / scope pattern.** When the passage specifies a scope, the inference often lives just outside that scope. If the passage says "X caused Y in urban areas," a valid inference may be that the author has *limited* the claim to urban areas — i.e., that the relationship outside urban areas is left open, not asserted. Scope words to flag: "in the nineteenth century," "among mammals," "in laboratory conditions," "for first-time buyers." A correct inference frequently turns on the boundary the author drew.

**Worked example (hard).** Passage: "In laboratory conditions, the enzyme degrades the toxin within minutes. Field trials, by contrast, have not yet been conducted."

Which is best supported?
- (A) The enzyme degrades the toxin within minutes under all conditions. — Wrong; "in laboratory conditions" is a deliberate scope limit, and "all conditions" blows past it.
- (B) Whether the enzyme degrades the toxin as quickly outside the laboratory is not established by the passage. — Correct. The explicit scope ("laboratory conditions") plus "field trials have not yet been conducted" forces precisely this open question. The inference is almost a meta-claim about what the passage has *not* settled.
- (C) The enzyme will fail in field conditions. — Wrong direction; "not yet established" is not "established to fail." Confusing absence of evidence with evidence of absence is the trap here.

Choice (B) is correct because it respects the boundary the author drew and refuses to extend the claim past it. On scope questions the right answer often sounds almost disappointingly empty — "we don't know X yet" — but that emptiness is exactly what the text forces, while the confident-sounding A and C both leap past the fence the author built.

**Distinguishing inference from specific detail.** Specific detail = directly stated. Inference = directly implied. If an answer is an exact paraphrase of a single sentence in the passage, it's specific detail — and it's usually a distractor under an inference stem, because it does no logical work. The correct inference combines, extends, or limits what's stated; it is never a one-to-one echo. When a choice feels suspiciously easy — "that's literally what the third sentence said" — treat the ease as a warning, not a reassurance: an inference stem is asking for the step *beyond* the sentence, not the sentence itself.

> **Recall check.** Without looking back: what makes the "weakest"-sounding inference typically the correct one, and what kind of language usually marks a wrong inference? (Answer: the most modestly phrased claim — "some," "may," "tend to" — is hardest to disprove, so it most easily clears "must be true"; extreme words — "always," "all," "never," "only" — usually mark wrong answers because one counter-scenario kills them.) Forcing this from memory now beats re-reading it, because on test day you retrieve, you don't re-read.

**Step-by-step procedure (memorize this).**
1. **Read the stem and confirm it's inference** — "infer," "imply," "suggest," "support." This tells you the answer is unstated but forced.
2. **Find and underline the relevant statement(s)** — locate the one or two sentences the question keys on; inference answers almost always trace to specific text, not the whole passage.
3. **Translate each answer into a "must be true?" test** — ask: in every world where the passage is true, is this choice also true? If you can imagine even one exception, eliminate it.
4. **Attack strong language first** — quarantine choices with "all," "always," "never," "only," "cannot." Demand the passage explicitly close every exception before you keep one.
5. **Check scope and quantifiers** — does the choice respect "most" vs. "all," "in urban areas" vs. everywhere, "may" vs. "will"? Mismatched quantifiers are the most common defect.
6. **Reject restatements and outside knowledge** — drop exact paraphrases (specific detail) and anything you only believe because you know the topic.
7. **Pick the most modest surviving choice** — among answers that pass, the least extreme is almost always the intended one.

**Common mistakes.**
- **Picking "consistent" over "forced."** Choosing an answer the passage doesn't contradict instead of one it guarantees — the difference between "could be true" and "must be true."
- **Quantifier inflation.** Promoting "most" to "all," or "may" to "will," somewhere between the passage and the answer.
- **Importing outside knowledge.** Grading a choice as correct because it's true in the real world, when the passage never establishes it.
- **Falling for the loudest answer.** Treating the strongest, most sweeping claim as the "best" inference, when sweep is exactly what makes it fragile.

**Recap.**
- Inference = **must be true** given the text alone; if any scenario makes the passage true and the choice false, the choice is wrong.
- The correct answer is **forced**, not merely **consistent** — and it is usually the **most modestly worded** option.
- **Extreme language** ("all," "always," "never," "only") is a near-automatic red flag because one counterexample defeats it.
- Watch **quantifiers and scope** — most/all, may/will, "in laboratory conditions" — that's where right and wrong answers diverge.
- Grade against the **passage**, never against your **prior knowledge** or an exact restatement of a single sentence.

## @inference-stays-supported

Everything you built in the Reading Process chapter still runs here — read for **function**, keep the **one-line-per-paragraph skeleton**, track **whose voice** each claim belongs to, don't **obsess over details**, aim for **efficiency over speed**, and answer by **elimination**. Inference doesn't replace that method; it leans on the one part of it students most often skip: the skeleton already tells you what the passage *commits* to, and an inference is just the next forced step from that commitment.

**Mental model.** A correct inference is one small step the text *forces* — never a leap, never a fact you walked in with. If the passage is true, the answer cannot be false; that is the entire bar. Your skeleton is the launch pad: you don't search the whole passage for an inference, you find the line whose function matches the stem and ask what *must* follow from it. The further a choice travels from the text — the more real-world reasoning it asks you to supply — the more likely it is wrong, even when it sounds sensible.

Here the **point-of-view** habit earns its keep. "What can be inferred from the passage" keys on the author; "Scholar X would most likely agree" keys on whatever the passage attributes to Scholar X. Same words on the screen, different launch pad. If you tagged the voices on the first read, you already know which line to step from; if you collapsed every claim into "the author thinks," you'll step from the wrong sentence and infer something the author never owned.

**Worked example.** Passage: "Curators long catalogued the tapestry as Flemish work of the 1490s. Vance contends the dye chemistry points instead to a Florentine workshop, though she concedes the weave pattern is consistent with either origin." The stem "Vance would most likely agree that" sends you to her line alone, and the forced step is modest: that *dye evidence* can favor one origin even when *weave evidence* does not settle it. What it does *not* force is "the tapestry is definitely Florentine" — her own concession about the weave leaves that open. An inference about the *author* here would be different still: the author reports both views and crowns neither, so the only thing forced about the author is that the attribution is contested.

**Trap to watch.** Two distractors will pull at you. The first is the **real-world-reasonable** answer — true enough about how things usually go, but never established on the page; the more you happen to know about the topic, the louder it whispers, so the more you must grade against the text alone. The second is the **too-strong / absolute** answer — "proves," "always," "definitely Florentine" — which a single uncovered scenario defeats. In the example, "definitely Florentine" loses precisely because Vance's weave concession leaves a scenario where the passage holds and that answer is false.

> **Self-explanation prompt.** Take the choice you're tempted by and ask: "Is this forced by a line in my skeleton, or am I supplying it from what I already know?" If you can picture even one world where the passage stays true but the choice goes false, it isn't forced — eliminate it. Say the world out loud; naming the counterexample is what converts a hunch into a clean cut.

So run the same close at the answers as everywhere else: don't fall in love with the choice that *sounds* like the passage — find the four that take an extra step the text never licensed, and keep the one small step that's left.
