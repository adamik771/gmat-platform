# Email nurture sequence — error-log lead magnet

**Status:** draft, awaiting Adam's review.

**Audience:** prospects who submitted their email via any of the four lead-capture surfaces (footer, free-diagnostic, score-converter, resources page) requesting the error-log template.

**Cadence:** 7 emails over 30 days. Stops automatically at email 7 — no further sends unless the prospect signs up for the platform (in which case they move to a different sequence Adam will eventually build).

**Tone:** first-person, direct, no emojis, Adam's voice. Each email reads like a Substack note, not a marketing blast. Length 150-300 words apiece.

**Tooling notes:**
- The right home for this sequence is whatever sender Adam picks (Resend / Postmark / Loops / Buttondown / ConvertKit). The lead_captures table holds the email + capture surface; the sender will need to consume new rows on a webhook or scheduled drain.
- Use a single From address: adam@zakariangmat.com (after MX is set up).
- Subject lines aim for 4-7 words, lowercase first word, no clickbait. Open rates depend more on relevance than on subject-line craft for a small targeted list.
- The unsubscribe link is mandatory. Put it as a single text link at the bottom, not behind a "manage preferences" wall.

---

## Email 1 — Day 0 (instant on signup)

**Subject:** your error log template — and what to do with it

Hi,

The template is attached. The CSV opens in Google Sheets, Excel, or Numbers. There's a readme in the same download that walks through the six tags, but the short version is this:

You don't get better at the GMAT by doing more questions. You get better by understanding the questions you already got wrong. The error log is the spreadsheet that forces you to do the second.

Six tags: Conceptual, Careless, Time pressure, Misread, Strategy, Other. One row per missed question. Two months of honest logging — that's the timeline at which the patterns start to emerge.

Three things I'd ask you to do this week:

1. Log every miss. Not just the ones that hurt — every miss, even the ones where the right answer was obvious in retrospect.
2. Don't sort the log yet. Two weeks of raw data first, then a sort. Patterns surface at the aggregate level, not the row level.
3. Keep the log honest. The temptation is to mis-tag things to feel better. The cost of that is your study plan.

I'll send you a follow-up note in two days about the single most expensive GMAT mistake — and why it isn't what most people think.

Adam

---

## Email 2 — Day 2

**Subject:** the most expensive GMAT mistake (and it's not what you think)

Hi,

Quick one. Most students think the most expensive GMAT mistake is a content gap — a topic they haven't studied enough.

It isn't. The most expensive mistake, in my data and in every error log I've seen since, is what I call the *review failure*. You miss a question, read the explanation, nod, and move on. You haven't actually engaged with why you missed it.

Three weeks later, you miss the same question type. Same trap. Different surface form. You read the explanation again. Same nod. Same move on.

The fix isn't more practice. It's better review. And the error log is the structure that forces better review — because every row demands you specify why you missed it, not just that you missed it.

If you've started logging this week, here's a small habit to add: after every miss, before you check the explanation, write your own one-sentence guess at why you got it wrong. Then check. The gap between your guess and the actual reason is where the real learning happens.

Next note: the six error tags, in detail, with the specific fixes I used for each.

Adam

---

## Email 3 — Day 5

**Subject:** the six error tags, in detail

Hi,

The six tags from the template, with the one fix I used for each:

**Conceptual.** You didn't know the rule. Fix: 15 minutes of focused reading on the rule, then 5 questions on it within 48 hours. The 48-hour gap is the spaced-retrieval anchor.

**Careless.** You knew the right answer; you computed it wrong. Fix: not "be more careful." Slow down on the *last* step of every problem. Most carelessness lives in the final move.

**Time pressure.** You knew the right answer; you ran out of time. Fix: per-question time limits in practice. Train the cutoff, not the speed.

**Misread.** You answered a different question than the one being asked. Fix: underline the question word every time. Yes, every single time.

**Strategy.** You used the wrong approach; the right one would have been faster. Fix: in review, identify the *fastest* approach, not just the right one.

**Other.** Anything else. Use sparingly. If "Other" is more than 10% of your log after a month, the taxonomy is too narrow — add a sixth meaningful tag instead of letting "Other" do the work.

In four days I'll send a note about what to do if your log shows Careless as your dominant tag — it's the single most common pattern I see, and the fix is counter-intuitive.

Adam

---

## Email 4 — Day 9

**Subject:** what to do when "Careless" is your dominant tag

Hi,

If you've been logging for over a week, you may already see this: Careless is the single most common dominant tag in error logs. Around 30-40% of misses for the average student.

The instinct is to say "I just need to focus more." This is the wrong fix because focus isn't a renewable resource and willpower runs out around question 30 of every section.

The right fix is mechanical. Three habits, in order:

1. **Underline the question word on every problem.** "Which of the following weakens." "What is the value of x." "Which must be true." Two seconds. Stops half of misread errors and a chunk of careless errors immediately.

2. **Do the final computation step in writing, not in your head.** Even when it's "obvious." Most careless misses are the brain skipping a step it knows it can do.

3. **Re-check the unit / sign / direction before committing.** "I want positive x." "I want the smaller value." "Question asks for percent change, not new value." Five seconds at the end of every problem.

These three habits, drilled into automation over two weeks, drop Careless from 30% of misses to under 10% in my data. That alone is usually 20-30 score points.

In five days I'll send a note about what your log should look like at the two-week mark — and how to know when to start using it as a study plan input.

Adam

---

## Email 5 — Day 14

**Subject:** two weeks in — what your log should show

Hi,

If you've been logging consistently for two weeks, your log probably has 60-100 entries by now. That's enough data to start drawing real conclusions.

The end-of-week-2 review:

1. **Sort by tag.** Pivot table, filter, whatever. Count per tag.
2. **Note the top two tags.** They almost certainly account for 70%+ of your misses.
3. **Sort by section + topic.** Identify the one or two topic-section combinations that dominate.
4. **Sort by difficulty.** If most of your misses are on Hard questions, that's expected at the early stage. If you have meaningful misses on Mediums, those are the ones to fix first — Mediums are where score moves fastest.

The output of this review is your next two weeks of study. Not "more practice" — *targeted* practice on your top two tags and your one weakest topic-section combo.

If your log doesn't have this much data yet, no problem. Keep logging for another week or two. The end-of-week-3 or end-of-week-4 review is the one that really pays off.

In one week I'll send a note about a system I built around this loop — the one that took me from 565 to 735.

Adam

---

## Email 6 — Day 21 (soft pitch)

**Subject:** the platform I built around this loop

Hi,

I built Zakarian GMAT because the spreadsheet I just walked you through deserved to be a real product.

What's inside:

- The same six-tag taxonomy, built into the question runner so logging takes 10 seconds per miss instead of two minutes.
- A diagnostic that produces per-topic and per-difficulty signals from 30 questions, so your study plan starts grounded in data instead of guesses.
- An adaptive study plan that re-prioritises your week based on your last seven days of misses, not a static 16-week schedule that drifts out of usefulness.
- A spaced review queue that resurfaces past misses on a real schedule (today, 3 days, 7 days, 21 days) so the fixes actually stick.
- Mock exams scored on the new 205-805 Focus scale with a real debrief tool.

It's the loop you've been running by hand for the last three weeks, run for you.

Seven days of full access on the trial. No card required. Try the diagnostic first if you want a sense of whether it's a fit:

zakariangmat.com/free-diagnostic

If it's not for you, no worries — keep using the spreadsheet. The system works either way.

Adam

---

## Email 7 — Day 30 (final email)

**Subject:** last note

Hi,

This is the last email in the series, so a quick wrap-up:

You signed up for the error log template a month ago. Whether you've been logging consistently or fell off after week one, the framework is yours to keep.

Three quick things if you have any prep cycle left:

1. **The platform is at zakariangmat.com.** Free to use during the private beta, no card required. If the spreadsheet has been useful, the platform is the spreadsheet on autopilot.

2. **The blog has the long-form versions of everything I've sent in these emails.** zakariangmat.com/resources lists all of it — section guides, study plan framework, the Focus-vs-old-GMAT explainer.

3. **If you want to ask me anything, just reply.** I read every email that comes back. No assistant, no auto-reply &mdash; just me.

I won't email again unless you ask me to.

Good luck with the test.

Adam

---

## Notes for implementation

- Each email is sent at the same wall-clock time as the original signup (e.g. signed up at 14:00 UTC → all subsequent emails go at 14:00 UTC). Don't normalize to "best send time" — the relevance of the content matters more than send-time optimization on a list this small.
- If a recipient signs up for a paid plan during the sequence, stop sending. They get a different post-purchase sequence (TBD).
- If a recipient hits unsubscribe, stop sending immediately. Hard delete from the active list within 24 hours.
- Open and click metrics are interesting but not actionable at this list size. Don't optimize subject lines or copy based on partial-week data.
- After 30 days, a recipient who didn't convert stays on the general newsletter list (when one exists) but exits this nurture sequence.

## What to add to the sequence later (deferred)

- An email at day 45-60 with the next blog post that lands.
- A re-engagement email at day 90 if they haven't been back to the site.
- A "you took the diagnostic but didn't sign up" branch — different content path for prospects who got further into the funnel before bouncing.
