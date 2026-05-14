import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Critical Reasoning Question Types Explained"
const DESCRIPTION =
  "All eight Critical Reasoning question types on the GMAT — what each one is actually asking, the trap built into each type, and how to recognise the question stem in five seconds."
const PUBLISHED_DATE = "2026-05-03"
const READ_MINUTES = 15

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog/gmat-critical-reasoning-question-types-explained",
  },
  openGraph: {
    type: "article",
    title: TITLE,
    description: DESCRIPTION,
    publishedTime: `${PUBLISHED_DATE}T00:00:00.000Z`,
    authors: ["Adam Zakarian"],
  },
}

export default function PostPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <JsonLd
        data={articleLd({
          path: "/blog/gmat-critical-reasoning-question-types-explained",
          title: TITLE,
          description: DESCRIPTION,
          datePublished: PUBLISHED_DATE,
        })}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: "CR Question Types",
              href: "/blog/gmat-critical-reasoning-question-types-explained",
            },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-4">
            <span className="tabular-nums">{PUBLISHED_DATE}</span>
            <span className="text-[#444444]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />
              {READ_MINUTES} min read
            </span>
            <span className="text-[#444444]">·</span>
            <span>Adam Zakarian</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            GMAT Critical Reasoning question types,{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              explained.
            </span>
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            All eight Critical Reasoning question types on the GMAT — what
            each one is actually asking, the trap built into each, and how
            to recognise the stem in five seconds.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            Critical Reasoning is the section that punishes students who
            read it like a passage. The questions are short, the arguments
            are dense, and almost every wrong answer is wrong for a
            specific, repeatable reason. There are only eight question
            types in the entire CR canon. Once you can identify the type
            from the stem in five seconds, half the battle is won — because
            each type has a different correct-answer shape, and using the
            wrong shape on the wrong type is what most students actually
            do when they think they have a &ldquo;CR problem.&rdquo;
          </p>
          <p>
            This guide walks through all eight, with the recognition
            phrasing, the trap built into each, and the question I trained
            myself to ask before looking at the answer choices.
          </p>

          <Pull>
            CR isn&apos;t reading comprehension. It&apos;s a logic test
            wearing reading-comprehension clothes. The students who score
            high are the ones who learn to ignore the clothes.
          </Pull>

          <H2>How CR is structured on the GMAT Focus Edition</H2>
          <p>
            CR appears inside the Verbal section. Each question gives you
            a short argument (usually two to four sentences) followed by a
            question stem and five answer choices. The stem is what tells
            you which of the eight types you&apos;re facing. Train yourself
            to read the stem first &mdash; the argument means different
            things depending on the type, and reading argument-first wastes
            half of your processing.
          </p>

          <H2>The eight question types</H2>

          <H3>1. Assumption</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;Which of the
            following is an assumption on which the argument depends?&rdquo;
            / &ldquo;The argument relies on which of the following
            assumptions?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Find the
            unstated premise the conclusion needs to be true. Not what
            <em> would</em> support it; what it <em>requires</em>.
          </p>
          <p>
            <Strong>The trap.</Strong> Test-takers eliminate the right
            answer because it &ldquo;feels too broad&rdquo; or &ldquo;too
            obvious.&rdquo; Assumptions usually <em>are</em> broad and
            obvious in retrospect &mdash; that&apos;s precisely why the
            arguer didn&apos;t state them. The narrow, specific-sounding
            answer is almost always a trap.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;If this
            answer were false, would the conclusion still hold?&rdquo;
            (The negation test.) If negating the answer breaks the
            argument, it&apos;s the assumption.
          </p>

          <H3>2. Strengthen</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;Which of the
            following, if true, most strengthens the argument?&rdquo; /
            &ldquo;...most supports the conclusion?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Find the new
            fact that, if added to the argument&apos;s premises, makes the
            conclusion more likely to be true.
          </p>
          <p>
            <Strong>The trap.</Strong> The trap on Strengthen is answers
            that restate a premise. A restatement doesn&apos;t add
            evidence; it just repeats what was already there. The right
            answer always introduces something new.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;Does this
            answer give me new information that pushes the conclusion
            uphill?&rdquo;
          </p>

          <H3>3. Weaken</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;Which of the
            following, if true, most weakens the argument?&rdquo; /
            &ldquo;...most calls into question the conclusion?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Find the new
            fact that, if added, makes the conclusion less likely.
          </p>
          <p>
            <Strong>The trap.</Strong> Test-takers pick answers that
            attack the premises rather than the conclusion. Premises are
            stipulated as true in CR; you can&apos;t weaken an argument
            by disputing them. You weaken by showing that even with the
            premises true, the conclusion doesn&apos;t follow.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;Does this
            answer give a reason the conclusion could be wrong even if
            the premises are right?&rdquo;
          </p>

          <H3>4. Inference (Must Be True)</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;Which of the
            following must be true based on the statements above?&rdquo;
            / &ldquo;...can be properly inferred?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Find the
            statement that <em>must</em> follow from the premises &mdash; a
            valid deduction.
          </p>
          <p>
            <Strong>The trap.</Strong> Test-takers pick answers that are
            <em> probably true</em> or <em>likely true</em> but not
            necessarily true. CR inference is mathematical: if there&apos;s
            any case where the premises are true and the answer is false,
            the answer is wrong. &ldquo;Most likely&rdquo; is the wrong
            standard.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;Can I
            construct a scenario where every premise is true and this
            answer is false? If yes, eliminate.&rdquo;
          </p>

          <H3>5. Resolve the Paradox</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;Which of the
            following, if true, would best explain the discrepancy?&rdquo;
            / &ldquo;...resolves the apparent paradox?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> The argument
            sets up two facts that seem contradictory. Find the new fact
            that makes both true at once.
          </p>
          <p>
            <Strong>The trap.</Strong> Answers that explain only one of
            the two facts. If the answer leaves the contradiction
            intact, it&apos;s wrong, even if it&apos;s a true statement
            about one half of the puzzle.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;With this
            answer added, are both of the original facts believable
            simultaneously?&rdquo;
          </p>

          <H3>6. Find the Flaw / Identify the Reasoning Error</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;The reasoning
            in the argument is flawed because...&rdquo; / &ldquo;Which of
            the following best describes the flaw in the argument?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Identify the
            logical error the arguer made. The conclusion is wrong; you
            need to name <em>why</em>.
          </p>
          <p>
            <Strong>The trap.</Strong> Answers that describe a
            <em> different</em> flaw than the one actually present, or
            that describe a fault that exists outside the argument
            (&ldquo;the survey was small&rdquo; when the argument never
            mentions a sample size). The right answer matches the
            specific reasoning move the argument made.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;Did the
            arguer commit the move this answer describes?&rdquo;
          </p>

          <H3>7. Strengthen / Weaken the Plan or Argument by Method</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> &ldquo;In evaluating
            the argument, it would be most useful to know whether...&rdquo;
            / &ldquo;Which of the following, if known, would best help
            evaluate the proposal?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> A variant of
            Strengthen / Weaken. Find the question whose <em>answer</em>
            (whether yes or no) would meaningfully change your assessment
            of the argument.
          </p>
          <p>
            <Strong>The trap.</Strong> Test-takers pick questions that
            <em> sound relevant</em> but whose answers don&apos;t actually
            change anything about the argument&apos;s strength either way.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;If the
            answer to this question is yes, does my view of the argument
            shift? If the answer is no, does my view shift in the
            opposite direction?&rdquo; Both must be yes.
          </p>

          <H3>8. Bold-Face / Role-of-Statement</H3>
          <p>
            <Strong>Recognition phrasing.</Strong> Two sentences in the
            argument are in <Strong>bold</Strong>. The stem reads
            something like: &ldquo;In the argument above, the two
            boldface portions play which of the following roles?&rdquo;
          </p>
          <p>
            <Strong>What it&apos;s actually asking.</Strong> Identify the
            structural function of each bold sentence in the argument
            (premise, conclusion, counterclaim, intermediate conclusion,
            evidence, etc.).
          </p>
          <p>
            <Strong>The trap.</Strong> The biggest trap is mixing up the
            <em> argument&apos;s conclusion</em> with the
            <em> arguer&apos;s position</em> &mdash; especially when the
            argument acknowledges a counterclaim. Bold-face questions
            require you to track who is saying what, not just what is
            being said.
          </p>
          <p>
            <Strong>The five-second question.</Strong> &ldquo;Does the
            arguer endorse this sentence or report it as someone
            else&apos;s view?&rdquo; Apply to each bold sentence
            independently.
          </p>

          <H2>The general approach (works on every type)</H2>
          <p>
            Once you can identify the type, the workflow is the same
            across all eight:
          </p>
          <ol>
            <li>
              <Strong>Read the stem first.</Strong> Two seconds. Identify
              the type and what it&apos;s asking for.
            </li>
            <li>
              <Strong>Read the argument once, slowly.</Strong> 30-40
              seconds. Mentally tag each sentence as premise, conclusion,
              counterclaim, or context. Underline the conclusion.
            </li>
            <li>
              <Strong>Predict.</Strong> Before looking at the answers,
              say in your own words what the right answer needs to do.
              This is the single biggest CR habit. People who skip this
              step get pulled into wrong answers by attractive surface
              wording.
            </li>
            <li>
              <Strong>Match each answer against the prediction.</Strong>
              Eliminate based on the prediction, not on whether the
              answer feels true. CR right answers often <em>don&apos;t</em>
              feel true on first read &mdash; they feel surprising or
              broader than expected. The prediction is your anchor.
            </li>
            <li>
              <Strong>If two remain, re-read the conclusion.</Strong>
              Almost every CR question between two finalists comes down
              to which one most directly addresses the conclusion as
              stated, not the conclusion as you remember it.
            </li>
          </ol>

          <Pull>
            The prediction step is what separates 70% CR accuracy from
            85%. Most students do every other step and skip this one,
            then wonder why they keep falling for the persuasive wrong
            answer.
          </Pull>

          <BlogInlineCTA />

          <H2>The five mistakes that cost most CR points</H2>

          <H3>Mistake 1 &mdash; Reading the argument before the stem</H3>
          <p>
            You don&apos;t know what to look for until you know the
            type. Reading the argument blind doubles the cognitive load
            and means you usually have to re-read after looking at the
            stem.
          </p>

          <H3>Mistake 2 &mdash; Skipping the prediction</H3>
          <p>
            Without a prediction, you&apos;re comparison-shopping
            answers. With a prediction, you&apos;re grading them. The
            second is twice as fast and three times as accurate.
          </p>

          <H3>Mistake 3 &mdash; Treating the answer set as a multiple-choice</H3>
          <p>
            Test-takers re-read each answer in turn until one
            &ldquo;feels right.&rdquo; CR rewards a different process:
            eliminate definitively wrong answers on the first pass, then
            decide between the two or three that survive. The first pass
            should take 30 seconds; the decision should take 30 more.
          </p>

          <H3>Mistake 4 &mdash; Disputing the premises</H3>
          <p>
            On Weaken, on Strengthen, on Inference &mdash; you cannot
            argue with the premises. They are stipulated. The whole game
            is what follows from them. Students who keep wanting to push
            back on premises lose easy points.
          </p>

          <H3>Mistake 5 &mdash; Burning time on the wrong type</H3>
          <p>
            If you can&apos;t identify the type from the stem in five
            seconds, you don&apos;t know the type well enough yet. Drill
            type-recognition specifically &mdash; pull twenty stems out
            of context and label each one before reading the argument.
            Once recognition is automatic, your timing improves
            disproportionately.
          </p>

          <H2>How to practice CR</H2>
          <ol>
            <li>
              <Strong>One type per day for a week.</Strong> Pick
              Assumption. Do twenty Assumption questions across two
              days. Then Strengthen for two days. Etc. Two weeks of this
              and your type-recognition is done.
            </li>
            <li>
              <Strong>Time individual questions from day one.</Strong>
              The 1:50 to 2:00 budget is part of the skill. Untimed
              practice teaches you to over-think.
            </li>
            <li>
              <Strong>Log every miss with a tag.</Strong> Was it a
              type-recognition error, a prediction-skip error, or a
              comparison error? The same three patterns repeat across
              hundreds of CR questions. Tag them &mdash; you cannot fix
              what you cannot name.
            </li>
            <li>
              <Strong>Mix sets after week three.</Strong> Mixed sets are
              where pacing falls apart. Make pacing the focus, not
              accuracy, until your time per question stabilises.
            </li>
            <li>
              <Strong>Re-do missed questions cold a week later.</Strong>
              If you can&apos;t reconstruct the right answer without
              looking, you didn&apos;t internalise the lesson. Re-tag
              and drill that pattern.
            </li>
          </ol>

          <H2>The short version</H2>
          <p>
            Eight types. Each with a recognition phrase, a five-second
            question, and a specific trap. Read the stem first, identify
            the type, predict before looking at answers, match by
            elimination, decide between finalists by re-reading the
            conclusion. The students who score high on CR aren&apos;t
            faster readers &mdash; they&apos;re faster at recognising
            which game they&apos;re playing.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s CR chapter teaches each type with the
            recognition phrasing and prediction discipline this guide
            outlines, and the question bank is tagged by type so you can
            drill one type at a time. The error log uses the same
            tagging vocabulary the guide recommends &mdash; type
            recognition, prediction skip, premise dispute, comparison
            error &mdash; so the patterns surface fast. If you want to
            run the loop without building it from scratch, the
            diagnostic is free.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/free-diagnostic"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Take the free diagnostic
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/gmat-data-insights-complete-guide"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Read the Data Insights guide
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-critical-reasoning-question-types-explained" />
      </article>
      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
        .prose-zk em { color: #E8E8E8; font-style: italic; }
        .prose-zk ol, .prose-zk ul { padding-left: 22px; }
        .prose-zk ol > li, .prose-zk ul > li { margin-bottom: 8px; }
        .prose-zk a { color: #C9A84C; text-decoration: underline; }
      `}</style>
    </div>
  )
}

function H2({ children }: { children: React.ReactNode }) {
  return (
    <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mt-12 mb-3">
      {children}
    </h2>
  )
}

function H3({ children }: { children: React.ReactNode }) {
  return (
    <h3 className="font-display text-xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mt-8 mb-2">
      {children}
    </h3>
  )
}

function Strong({ children }: { children: React.ReactNode }) {
  return <strong className="text-[#F0F0F0] font-semibold">{children}</strong>
}

function Pull({ children }: { children: React.ReactNode }) {
  return (
    <blockquote
      className="my-8 pl-6 border-l-2 italic font-display text-[20px] leading-[1.6]"
      style={{ borderColor: "#C9A84C", color: "#F0F0F0" }}
    >
      {children}
    </blockquote>
  )
}
