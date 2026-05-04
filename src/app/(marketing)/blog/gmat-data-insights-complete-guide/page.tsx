import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"

const TITLE = "GMAT Data Insights: The Complete Section Guide for 2026"
const DESCRIPTION =
  "A practical guide to the GMAT Data Insights section — all five question types, timing strategy, the traps that cost most students points, and how to practice it."
const PUBLISHED_DATE = "2026-05-03"
const READ_MINUTES = 14

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-data-insights-complete-guide" },
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
          path: "/blog/gmat-data-insights-complete-guide",
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
              label: "Data Insights Guide",
              href: "/blog/gmat-data-insights-complete-guide",
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
            GMAT Data Insights: the complete{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              section guide
            </span>{" "}
            for 2026.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            Everything you need to know to attack the newest section on the
            GMAT Focus Edition — all five question types, timing strategy, the
            traps that cost most students points, and how to practice it.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            Data Insights (DI) is the section most students under-train. Quant
            and Verbal have decades of prep material. DI was built for the
            Focus Edition that launched in late 2023, and most existing prep is
            either thin, copied from the old Integrated Reasoning playbook, or
            outright wrong. If you&apos;re in the 605&nbsp;to&nbsp;705 range, DI
            is almost always one of the two highest-leverage sections to fix.
          </p>
          <p>
            I went from a 73 to a 87 on Data Insights over four months — a
            larger raw jump than I made in either Quant or Verbal. None of it
            came from new content. It came from understanding the format of
            each question type well enough to stop wasting time on the wrong
            approach. This guide is the version of that playbook I wish I&apos;d
            had at the start.
          </p>

          <Pull>
            DI doesn&apos;t test five different topics. It tests one skill —
            extracting the answer from messy information — wearing five
            different costumes.
          </Pull>

          <H2>What Data Insights actually is</H2>
          <p>
            Data Insights is the third section of the GMAT Focus Edition. It
            is scored on the same 60&ndash;90 scale as Quant and Verbal, and it
            contributes equally to your Total Score. Treating it as a side
            section because it isn&apos;t &ldquo;real Quant&rdquo; or &ldquo;real
            Verbal&rdquo; is one of the more expensive mistakes a candidate can
            make.
          </p>
          <p>The format:</p>
          <ul>
            <li>
              <Strong>20 questions in 45 minutes</Strong> — 2 minutes 15
              seconds per question on average.
            </li>
            <li>
              <Strong>One section, no breaks.</Strong> The clock runs straight
              through.
            </li>
            <li>
              <Strong>Five question types,</Strong> mixed in unpredictable
              order:
              <ul className="mt-1">
                <li>Data Sufficiency</li>
                <li>Multi-Source Reasoning</li>
                <li>Table Analysis</li>
                <li>Graphics Interpretation</li>
                <li>Two-Part Analysis</li>
              </ul>
            </li>
            <li>
              <Strong>An on-screen calculator</Strong> is provided. Use it for
              specific computations, not as a substitute for set-up.
            </li>
            <li>
              <Strong>Multi-part questions count as one item.</Strong> A
              Multi-Source Reasoning set may include three questions but each
              one is scored independently.
            </li>
          </ul>
          <p>
            The single biggest practical change from the old GMAT is that{" "}
            <Strong>Data Sufficiency now lives in DI</Strong>, not in Quant.
            Roughly a quarter of your DI section will look identical to the DS
            you&apos;d expect from old Quant prep. The other three quarters
            will not.
          </p>

          <H2>The five question types, in detail</H2>

          <H3>1. Data Sufficiency (DS)</H3>
          <p>
            DS is the question type most students already know. You get a
            question stem, two numbered statements, and the same five answer
            choices every time:
          </p>
          <ol>
            <li>Statement (1) alone is sufficient; (2) alone is not.</li>
            <li>Statement (2) alone is sufficient; (1) alone is not.</li>
            <li>Both statements together are sufficient; neither alone is.</li>
            <li>Each statement alone is sufficient.</li>
            <li>Both together are not sufficient.</li>
          </ol>
          <p>
            <Strong>Format mistakes that cost points.</Strong> The classic DS
            mistake — and it never goes away no matter how much prep you do —
            is to start <em>solving</em> the question instead of asking
            whether each statement <em>determines</em> the answer. You are not
            being asked for the value. You are being asked whether the value
            is pinned down.
          </p>
          <p>
            <Strong>Approach.</Strong> Read the question stem. Translate it
            into a single concrete question you could answer with the right
            information. Look at each statement in isolation and ask:
            &ldquo;Does this give me enough to answer that exact question with
            certainty?&rdquo; Only combine after you&apos;ve evaluated each
            alone. The order matters — combining first is the surest way to
            mis-grade statement (1) or (2).
          </p>
          <p>
            <Strong>Timing target.</Strong> 1 minute 45 seconds to 2 minutes.
            DS questions are denser than the type-average suggests; you want
            to bank time here so you have it for MSR sets later.
          </p>

          <H3>2. Multi-Source Reasoning (MSR)</H3>
          <p>
            MSR presents two or three tabs at the top of the screen — typically
            an email, a spreadsheet, a memo — and then asks two to three
            independent questions about that information. Some questions are
            standard multiple-choice; others are a row of yes/no judgements.
          </p>
          <p>
            <Strong>The trap.</Strong> The trap on MSR is reading order. If
            you read all three tabs in detail before you see any of the
            questions, you will spend two minutes on context you don&apos;t
            need and run out of time on the question you do.
          </p>
          <p>
            <Strong>Approach.</Strong> Skim the tabs in 30 seconds — what is
            each one and roughly what does it contain. Then go to the first
            question. Each question will tell you which tab it actually
            depends on. Read that tab&apos;s relevant lines carefully and
            answer. Treat each question as a fresh search task; do not try to
            hold the entire information set in working memory.
          </p>
          <p>
            <Strong>Timing target.</Strong> 5 to 6 minutes for an entire MSR
            set, regardless of whether it has two or three questions. Set a
            mental budget the moment you see the tabs.
          </p>

          <H3>3. Table Analysis (TA)</H3>
          <p>
            Table Analysis gives you a single sortable spreadsheet plus a
            short blurb of context. The questions are usually three statements
            you must judge as true or false (or &ldquo;would help&rdquo; vs.
            &ldquo;would not help&rdquo;) based on the table. To get the
            question right, all three judgements have to be correct.
          </p>
          <p>
            <Strong>The trap.</Strong> All-or-nothing scoring is what makes TA
            brutal. Two out of three is wrong. People skim the table, get the
            obvious one right, and miss a subtle one — losing the entire item.
          </p>
          <p>
            <Strong>Approach.</Strong> Resort the table for each statement
            individually. The on-screen sort is the entire point of the
            interface; you are meant to use it. For each statement, identify
            the column that matters, sort by it, and read off the answer
            before judging. Do not try to evaluate three statements off a
            single sort; you will mis-read at least one.
          </p>
          <p>
            <Strong>Timing target.</Strong> 2 minutes 30 seconds. The interface
            is slow even when you know what you&apos;re doing.
          </p>

          <H3>4. Graphics Interpretation (GI)</H3>
          <p>
            GI shows a chart — scatter, bar, line, sometimes more exotic —
            with two fill-in-the-blank statements underneath. Each blank is a
            dropdown of values. To get the question right, both dropdowns must
            be correct.
          </p>
          <p>
            <Strong>The trap.</Strong> GI rewards students who read the axis
            labels and units carefully and punishes students who eyeball.
            Charts on the GMAT are drawn precisely; every value you need can
            be read off the chart if you actually look at it.
          </p>
          <p>
            <Strong>Approach.</Strong> Spend the first 20 seconds on the chart
            itself, not the question. What are the axes? What are the units?
            What does each point or bar represent? Only then read the
            statements. Most GI dropdowns can be answered by translating the
            statement into &ldquo;at value X on this axis, what is Y?&rdquo;
            and reading directly off the chart.
          </p>
          <p>
            <Strong>Timing target.</Strong> 2 minutes. GI is faster than it
            looks once the chart is mapped.
          </p>

          <H3>5. Two-Part Analysis (TPA)</H3>
          <p>
            TPA presents a written prompt — sometimes quantitative, sometimes
            verbal — and asks you to choose two values from the same column
            list, one for each of two related slots. For example: &ldquo;Choose
            the value of X that satisfies both equations and the value of Y
            that satisfies neither.&rdquo;
          </p>
          <p>
            <Strong>The trap.</Strong> The two slots are usually
            interdependent in a way that hides which one to attack first.
            People try to solve them in order, hit a dead end on the second,
            and start the first over.
          </p>
          <p>
            <Strong>Approach.</Strong> Read both slot prompts before you do
            any work. Identify which slot is more constrained — the one with
            the narrower set of valid candidates — and solve that one first.
            Then use the result to filter candidates for the second slot.
            Quantitative TPA almost always rewards plugging values from the
            list rather than solving algebraically.
          </p>
          <p>
            <Strong>Timing target.</Strong> 2 minutes 15 seconds. TPA is the
            most variable — easy ones are sub-2-minute, brutal ones approach
            3.
          </p>

          <H2>Timing strategy across the section</H2>
          <p>
            The 45-minute clock and 20 questions hide a complication: a
            three-question MSR set takes about three times as long as a single
            DS question, but counts as three items. If you treat &ldquo;average
            time per question&rdquo; as a hard rule you will run out of time
            on the MSR set or skip easy DS at the end.
          </p>
          <p>The rule I used:</p>
          <ul>
            <li>
              <Strong>DS:</Strong> 1:45&ndash;2:00.
            </li>
            <li>
              <Strong>MSR set (2&ndash;3 questions):</Strong> 5:00&ndash;6:00
              total.
            </li>
            <li>
              <Strong>Table Analysis:</Strong> 2:30.
            </li>
            <li>
              <Strong>Graphics Interpretation:</Strong> 2:00.
            </li>
            <li>
              <Strong>Two-Part Analysis:</Strong> 2:15.
            </li>
          </ul>
          <p>
            Add those up across a typical mix and you land at roughly 43
            minutes — leaving a 2-minute buffer for the one or two questions
            that go long. If a single DS or TPA question crosses 3 minutes,
            guess and move on. Coming back to it would cost you points
            elsewhere.
          </p>

          <Pull>
            Every minute you spend over your per-type budget is a minute
            you&apos;re stealing from a question you would have got right.
          </Pull>

          <H2>The five mistakes that cost most students DI points</H2>

          <H3>Mistake 1 — Treating DI like Quant</H3>
          <p>
            DI rewards information extraction and process discipline. Quant
            rewards algebraic fluency. Students who try to solve every TPA
            algebraically, or compute exact values on Table Analysis when a
            comparison would do, lose minutes per question and rarely catch
            up. The on-screen calculator and sort interface exist for a
            reason.
          </p>

          <H3>Mistake 2 — Reading MSR tabs front-to-back</H3>
          <p>
            The tabs are reference material, not a passage. Read them like a
            spreadsheet you&apos;re looking up a value in, not like an essay
            you&apos;re studying.
          </p>

          <H3>Mistake 3 — Solving Data Sufficiency</H3>
          <p>
            The DS prompt is asking whether the answer is determined, not
            what it is. You can spend ten seconds checking whether a value is
            pinned down. You can spend ninety seconds computing the value
            itself. The first is the question. The second is a way to fail at
            being asked the first.
          </p>

          <H3>Mistake 4 — Eyeballing Graphics Interpretation</H3>
          <p>
            GMAC draws GI charts to scale and on labelled grids. Every answer
            is in the chart, in numbers, if you bother to read the axes. The
            wrong answers in the dropdown are usually values that look right
            if you eyeball but don&apos;t survive a careful read.
          </p>

          <H3>Mistake 5 — Skipping the section in study planning</H3>
          <p>
            DI is the section most students study last and least, so it&apos;s
            also the section with the highest marginal return on a focused
            week. If you&apos;re torn between another month of Quant drilling
            and a serious week on DI, the second move almost always pays
            better — both because the headroom is larger and because DI is
            scored on the same scale as the other two sections.
          </p>

          <H2>How to practice Data Insights</H2>
          <p>
            The general study loop I recommend is the same one I used for
            every section, adapted slightly for DI&apos;s format-heaviness:
          </p>
          <ol>
            <li>
              <Strong>Drill one question type at a time first.</Strong> The
              instinct to do a mixed set immediately is a mistake. You need
              the format reps before you need the variety. Two weeks of
              one-type-per-day drills, then mix.
            </li>
            <li>
              <Strong>Time individual questions from day one.</Strong> Untimed
              practice on DI hides the real problem, which is almost always
              pacing rather than content.
            </li>
            <li>
              <Strong>Log every miss with a trap tag.</Strong> The same five
              traps repeat across hundreds of questions. Tag them &mdash; you
              cannot fix a pattern you cannot name.
            </li>
            <li>
              <Strong>Mock the section as a whole, weekly.</Strong> Time your
              full 45-minute DI sets early. The full-section pacing is its own
              skill, separate from per-question pacing.
            </li>
            <li>
              <Strong>Review with the chart, table, or tabs in front of
              you.</Strong> When you review a missed GI question, re-open the
              chart and trace the path your eyes should have taken. When you
              review a missed MSR, identify which tab you over-read.
            </li>
          </ol>
          <p>
            Volume helps less than honest review here. Twenty questions
            reviewed properly will move your score more than a hundred
            questions ground through.
          </p>

          <H2>What to look for in a DI study plan</H2>
          <p>
            If you&apos;re building a study plan for DI &mdash; either yours
            or one a tutor or platform builds for you &mdash; the things to
            insist on:
          </p>
          <ul>
            <li>
              <Strong>Explicit per-type drilling</Strong> before any mixed
              practice.
            </li>
            <li>
              <Strong>Original questions</Strong>, not recycled IR. The Focus
              DI section has different format weights and a tighter clock; old
              IR questions teach the wrong intuition.
            </li>
            <li>
              <Strong>Format-realistic practice.</Strong> A printed PDF of
              Table Analysis questions doesn&apos;t teach you to use the
              sort. You need an interface that mimics the test, or you are
              practising the wrong skill.
            </li>
            <li>
              <Strong>An error-tagging system</Strong> with a small fixed
              vocabulary &mdash; conceptual, format, time pressure, misread
              &mdash; not free-text notes you&apos;ll never re-read.
            </li>
            <li>
              <Strong>A weekly full-section mock</Strong> with a debrief that
              breaks the section apart by question type.
            </li>
          </ul>

          <H2>The short version</H2>
          <p>
            DI is the highest-leverage section for most students because it
            is the most under-trained and the most format-dependent. Five
            question types, each with one or two specific traps, all sharing
            the same underlying skill: extract the answer from messy
            information without burning the clock. Drill per-type first, time
            from day one, log every miss with a tag, and mock the full
            section weekly. The score moves quickly once the format clicks.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT was built for exactly this loop. The DI chapters
            cover each question type in detail with format-realistic practice,
            the error log uses the six-tag taxonomy this guide describes, and
            mocks are scored against the same 60&ndash;90 scale as the real
            exam. The diagnostic identifies your weakest DI sub-type in 30
            questions, and the adaptive plan focuses your week on it. If
            you&apos;re working on DI and want a system that holds the loop
            for you, the diagnostic is free.
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
              href="/course"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              See the full curriculum
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-data-insights-complete-guide" />
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
