import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Two-Part Analysis: A Complete Strategy Guide"
const DESCRIPTION =
  "How Two-Part Analysis really works on GMAT Focus Data Insights — the table format, the two families of prompts, a repeatable solve sequence, two worked examples, the traps that cost points, and the timing discipline that keeps one question from eating your section."
const PUBLISHED_DATE = "2026-06-13"
const READ_MINUTES = 11

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: {
    canonical: "/blog/gmat-two-part-analysis-strategy",
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
          path: "/blog/gmat-two-part-analysis-strategy",
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
              label: "Two-Part Analysis",
              href: "/blog/gmat-two-part-analysis-strategy",
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
            Two-Part Analysis is{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              two questions in one.
            </span>
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            It is the Data Insights question that looks like a table and
            behaves like a logic puzzle. Here is the format, the two families
            it comes in, a solve sequence that works on both, and the timing
            rule that stops one prompt from swallowing your section.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            Of the five Data Insights question types on the GMAT Focus
            Edition, Two-Part Analysis is the one most students never
            specifically train for. They drill Data Sufficiency, they fear
            Multi-Source Reasoning, they squint at Graphics Interpretation
            &mdash; and then a Two-Part Analysis question appears, looks
            harmless, and quietly takes three and a half minutes. The format
            is unfamiliar, so people improvise, and improvising on a
            two-column question is exactly how you lose points you had the
            skills to earn.
          </p>
          <p>
            The good news: Two-Part Analysis is one of the most{" "}
            <Strong>learnable</Strong> question types on the whole exam.
            Underneath the unusual layout, it is almost always a pair of
            constraints you can pin down with a method. Once you have a fixed
            routine, the format stops being the obstacle and the underlying
            content &mdash; algebra, logic, a bit of reasoning &mdash; is all
            that is left.
          </p>

          <H2>What the format actually looks like</H2>
          <p>
            A Two-Part Analysis question gives you a prompt &mdash; a short
            scenario, an argument, or a set of conditions &mdash; followed by
            a table. The table has <Strong>two answer columns</Strong> and a
            single shared list of options running down the rows. Your job is
            to choose <Strong>one option for the first column and one for the
            second</Strong>. Both selections can land on the same row, or on
            different rows; nothing forces them apart and nothing forces them
            together.
          </p>
          <p>
            The two columns always represent two related quantities or two
            related roles &mdash; the price of seat A and the price of seat B,
            the statement that strengthens and the statement that weakens, the
            larger value and the smaller value. The relationship between the
            columns is the entire puzzle. Read past it and you are guessing.
          </p>

          <H2>Why it is the most mis-timed question on the section</H2>
          <p>
            The trap is structural. Because there are two columns sharing one
            option list, students try to solve both at once &mdash; eyes
            bouncing between columns, testing a value against one constraint,
            then the other, then back again. That bouncing is where the time
            goes. A question that is two clean steps becomes a tangle because
            it was never broken into steps.
          </p>
          <p>
            The second reason is interdependence. In the quantitative version,
            the two answers are usually linked by an equation, so a careless
            pick in column one quietly forces the wrong pick in column two.
            One slip becomes two misses, and on Data Insights a Two-Part
            Analysis question is scored <Strong>all-or-nothing</Strong> &mdash;
            both columns must be right to earn the point. Half-credit does not
            exist here.
          </p>

          <H2>The two families</H2>
          <p>
            Almost every Two-Part Analysis question belongs to one of two
            families, and knowing which one you are looking at decides your
            approach in the first ten seconds.
          </p>
          <p>
            <Strong>Quantitative pairs.</Strong> The prompt hands you two
            unknowns and enough conditions to solve for both &mdash; two
            prices, two rates, two quantities, a maximum and a minimum. These
            are systems of equations dressed up in a table. The shared option
            list is just the set of candidate values for each unknown.
          </p>
          <p>
            <Strong>Verbal and logical pairs.</Strong> The prompt is an
            argument or a passage, and the two columns ask for complementary
            roles: a statement that strengthens the conclusion and one that
            weakens it; a premise the author assumes and a fact that would
            undermine it; a cause and its effect. The shared list is a set of
            statements, and you are sorting them into two slots.
          </p>

          <Pull>
            Decide the family first, define both columns in words, then solve
            them one at a time. That is the whole method.
          </Pull>

          <BlogInlineCTA />

          <H2>The solve sequence</H2>
          <p>
            One routine handles both families. The point is to never let the
            two columns blur into a single overwhelming question.
          </p>
          <ul>
            <li>
              <Strong>Read the relationship before the options.</Strong> The
              first thing to nail down is what the two columns mean and how
              they connect. Do not even look at the option list until you can
              say, in a sentence, what column one is and what column two is.
            </li>
            <li>
              <Strong>Translate the prompt into constraints.</Strong> For a
              quantitative pair, write the equations. For a logical pair,
              state the conclusion and what &ldquo;strengthen&rdquo; and
              &ldquo;weaken&rdquo; would each require. Get it onto your scratch
              pad in symbols or shorthand &mdash; not in your head.
            </li>
            <li>
              <Strong>Solve one column fully, then the other.</Strong> Resolve
              the column you can pin down with the least ambiguity first. In a
              system of equations, that means actually solving the system. In
              a logic pair, that means finding the one option that clearly
              fits a single role.
            </li>
            <li>
              <Strong>Verify both picks against the full prompt.</Strong>
              Because scoring is all-or-nothing, the last ten seconds are not
              optional. Plug both selections back in and confirm they jointly
              satisfy every condition, not just the one you used to find them.
            </li>
          </ul>

          <H2>Worked example: a quantitative pair</H2>
          <p>
            Here is an invented one in the typical style. A software company
            sells two seat tiers, Basic and Pro, each at a fixed per-seat
            price. A team that bought 4 Basic seats and 2 Pro seats paid 220.
            A second team that bought 2 Basic seats and 4 Pro seats paid 260.
            From the shared list &mdash; 20, 30, 40, 50, 60, 70 &mdash; select
            the price of one Basic seat in the first column and the price of
            one Pro seat in the second.
          </p>
          <p>
            Translate first. Let B be the Basic price and P the Pro price.
            The two conditions are 4B + 2P = 220 and 2B + 4P = 260. Simplify
            each by dividing through: 2B + P = 110, and B + 2P = 130. From the
            first, P = 110 &minus; 2B. Substitute into the second:
            B + 2(110 &minus; 2B) = 130, so B + 220 &minus; 4B = 130, which
            gives &minus;3B = &minus;90 and B = 30. Then P = 110 &minus; 60 =
            50.
          </p>
          <p>
            Now verify against the original, unsimplified prompt &mdash; not
            the version you reduced. 4(30) + 2(50) = 120 + 100 = 220, and
            2(30) + 4(50) = 60 + 200 = 260. Both hold. Basic is 30, Pro is 50,
            and both values are on the list. Notice what the verification
            step caught for free: it would have flagged an arithmetic slip
            instantly, before you locked in a wrong column.
          </p>

          <H2>Worked example: a verbal pair</H2>
          <p>
            Another invented one. A city council claims that installing
            brighter street lighting on Maple Avenue caused the 15 percent
            drop in nighttime traffic accidents there last year. From five
            statements, select the one that, if true, most{" "}
            <Strong>strengthens</Strong> the council&apos;s causal claim in
            the first column, and the one that most <Strong>weakens</Strong>
            it in the second:
          </p>
          <ul>
            <li>
              On three nearby avenues that received no new lighting, nighttime
              accident rates were unchanged over the same year.
            </li>
            <li>
              Maple Avenue&apos;s daytime accident rate, which the lighting
              could not affect, fell by the same 15 percent last year.
            </li>
            <li>The lighting upgrade exceeded its budget by 20 percent.</li>
            <li>
              Residents reported feeling noticeably safer walking the avenue
              after dark.
            </li>
            <li>Nighttime foot traffic on Maple Avenue rose after the upgrade.</li>
          </ul>
          <p>
            State the roles in words before scanning. The claim is causal:
            new lighting caused fewer night accidents. A strengthener should
            rule out a competing explanation; a weakener should supply one.
            The first statement does exactly the strengthening job &mdash; if
            comparable streets without new lights saw no change, a citywide
            trend is ruled out and the lighting is isolated as the variable.
            The second statement is the cleanest weakener: lighting cannot
            touch daytime driving, so if the daytime rate fell by the same
            amount, something other than lighting was driving both. The
            remaining three are noise &mdash; cost, sentiment, and foot
            traffic say nothing about the causal link.
          </p>
          <p>
            Strengthen is the first statement; weaken is the second. The same
            discipline applied: define the two roles, place the one clearly
            correct option in each, and confirm the rest are genuinely
            irrelevant rather than merely weaker.
          </p>

          <H2>The traps that cost the point</H2>
          <ul>
            <li>
              <Strong>Solving both columns simultaneously.</Strong> The single
              biggest time sink. Lock one column, then move. Two clean steps
              beat one chaotic sweep.
            </li>
            <li>
              <Strong>Skipping the verification.</Strong> All-or-nothing
              scoring means an unverified answer is a coin flip on the column
              you were less sure of. The plug-back-in takes seconds and saves
              the whole point.
            </li>
            <li>
              <Strong>Assuming the columns must use different rows.</Strong>
              Sometimes the same option is correct for both columns. Nothing
              in the format forbids it; do not eliminate the right answer
              because you already &ldquo;used&rdquo; it.
            </li>
            <li>
              <Strong>Reading the option list before the relationship.</Strong>
              The options are designed to look plausible. If you meet them
              before you understand what the columns mean, they steer you.
              Understand the prompt, then look.
            </li>
          </ul>

          <H2>Timing discipline</H2>
          <p>
            Data Insights gives you 20 questions in 45 minutes &mdash; a hair
            over two and a quarter minutes each on average, and Multi-Source
            Reasoning sets will demand more than their share. That makes
            Two-Part Analysis a question you cannot afford to overrun. Budget
            it like any other single item: if you are past the two-and-a-half
            minute mark and the system of equations is not resolving, you
            have either mis-translated the prompt or it is genuinely a hard
            one &mdash; make your best-supported pick for each column and
            move. A confirmed bookmark and a clean move-on protect the four or
            five questions behind it.
          </p>
          <p>
            The reassuring part is that the method itself buys time. Students
            who define the columns in words before touching the options
            consistently finish these faster than students who dive into the
            list, precisely because they are never bouncing between columns.
            The structure is the speed.
          </p>

          <H2>The short version</H2>
          <ul>
            <li>
              Two-Part Analysis = a prompt plus a table with two answer
              columns sharing one option list. Pick one option per column.
            </li>
            <li>
              Identify the family first: a quantitative pair (a system of
              equations) or a verbal pair (sorting statements into two roles).
            </li>
            <li>
              Read the relationship between the columns before you read the
              options. Translate it to constraints on your scratch pad.
            </li>
            <li>
              Solve one column fully, then the other &mdash; never both at
              once.
            </li>
            <li>
              Verify both picks against the full prompt. Scoring is
              all-or-nothing, so the check is the difference between the point
              and nothing.
            </li>
          </ul>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT trains Two-Part Analysis the way it actually behaves
            on the Focus Edition &mdash; as a question type with its own
            method, not a footnote in a generic Data Insights chapter. You
            drill both families with worked, fully original items; the
            explanations show the column-by-column sequence rather than just
            the answer; and the error log tags whether a miss came from the
            math, the logic, or skipping the verification step, so the next
            week of practice points at the real cause. Free account, no card
            required.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Create a free account
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
              Read the full Data Insights guide
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-two-part-analysis-strategy" />
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
