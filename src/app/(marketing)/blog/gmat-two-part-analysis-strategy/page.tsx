import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Two-Part Analysis: A Strategy Guide for the Trickiest DI Format"
const DESCRIPTION =
  "Two-Part Analysis is the Data Insights format that quietly costs students the most time. The two-column structure, the dependent-vs-independent distinction, a worked quantitative example, the recurring traps, and a timing plan for the only question type where one mistake costs two answers."
const PUBLISHED_DATE = "2026-06-18"
const READ_MINUTES = 13

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-two-part-analysis-strategy" },
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
              label: "Two-Part Analysis Strategy",
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
            GMAT Two-Part Analysis:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              two answers,
            </span>{" "}
            one chance.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            The Data Insights format that quietly costs the most time. The
            two-column structure, the dependent-versus-independent
            distinction that decides your approach, a worked example, and a
            timing plan for the only question type where a single slip
            costs you two answers at once.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            Two-Part Analysis is the most under-prepared question type on
            the GMAT Focus Edition. Students drill Data Sufficiency and
            Critical Reasoning for weeks, then meet Two-Part Analysis for
            the first time inside Data Insights and discover that it
            behaves like nothing else on the exam. It is the one format
            where every prompt is a small puzzle with its own rules, where
            the answer choices are shared across two questions, and where
            getting one column right buys you nothing if the other is
            wrong. The whole item is scored as a single unit.
          </p>

          <Pull>
            Two-Part Analysis is graded all-or-nothing. You can do 90% of
            the work correctly, miss one column, and earn exactly the same
            credit as a student who guessed both. That scoring rule is the
            reason this format rewards precision over speed.
          </Pull>

          <H2>What Two-Part Analysis actually is</H2>
          <p>
            Two-Part Analysis sits inside the Data Insights section
            alongside Data Sufficiency, Multi-Source Reasoning, Table
            Analysis, and Graphics Interpretation. Each item gives you a
            short prompt &mdash; a paragraph of conditions, a scenario, a
            small set of relationships &mdash; followed by a table. The
            table has two answer columns with headers describing two
            related quantities or claims, and a list of candidate answers
            running down the side. Your job is to select exactly one option
            for the first column and exactly one for the second.
          </p>
          <p>
            The candidates are shared. The same row of options serves both
            columns, and in most items a single option could legitimately
            be selected in either column &mdash; the prompt is what decides
            which one belongs where. That shared list is the source of most
            of the difficulty, because it lets the test-writer build a
            close decoy that is correct for the other column.
          </p>

          <H2>The two flavors</H2>
          <p>
            Two-Part Analysis items come in two broad flavors, and knowing
            which one you are looking at within the first ten seconds tells
            you how to attack it.
          </p>

          <H3>Quantitative two-part items</H3>
          <p>
            These give you a scenario governed by numbers &mdash; rates,
            ratios, a system of relationships, a budget, an allocation. The
            two columns ask for two values that together satisfy the
            scenario. Most of these reduce to solving a system: two
            unknowns, two constraints, and a list of candidate values to
            test or compute against.
          </p>

          <H3>Verbal and analytical two-part items</H3>
          <p>
            These give you an argument or a set of logical conditions. The
            columns might ask you to select a statement that, if true, most
            strengthens the conclusion and a separate statement that most
            weakens it; or a claim that must be true and one that cannot be
            true given the constraints. The math is gone, but the
            two-column trap is identical: the options are shared, and the
            wrong answer for one column is usually the right answer for the
            other.
          </p>

          <H2>The distinction that decides everything</H2>
          <p>
            Before you compute or evaluate anything, answer one question:{" "}
            <Strong>are the two columns independent or dependent?</Strong>
          </p>
          <p>
            In an <Strong>independent</Strong> item, the answer to column
            one does not constrain the answer to column two. You solve each
            column on its own terms. A strengthen-and-weaken pair is
            usually independent: the statement that strengthens has nothing
            to do with the statement that weakens.
          </p>
          <p>
            In a <Strong>dependent</Strong> item, the two columns are tied
            together by the scenario, and the answers have to be consistent
            with each other. A system of two equations is the canonical
            case: the value you pick for the first unknown forces the value
            of the second. In dependent items you cannot evaluate a column
            in isolation &mdash; you have to find the pair that satisfies
            the whole scenario at once.
          </p>

          <Pull>
            Misclassifying the relationship is the most expensive mistake
            in this format. Treat a dependent item as two independent
            choices and you will pick a value that is locally plausible but
            globally inconsistent &mdash; the exact decoy the writer built.
          </Pull>

          <H2>A worked quantitative example</H2>
          <p>
            Here is an invented item in the quantitative style. A courier
            service charges a fixed dispatch fee plus a constant rate per
            kilometer. A 10-kilometer delivery cost a customer 26 dollars.
            A 25-kilometer delivery cost 50 dollars. The table asks you to
            select the <Strong>dispatch fee</Strong> in the first column and
            the <Strong>per-kilometer rate</Strong> in the second, from a
            shared list of candidates: 1.20, 1.40, 1.60, 8, 10, 12.
          </p>
          <p>
            This is a dependent item &mdash; the fee and the rate have to
            jointly produce both totals. Set up the system. Let{" "}
            <em>f</em> be the dispatch fee and <em>r</em> the per-kilometer
            rate. Then:
          </p>
          <ul>
            <li>
              <Strong>10-km trip:</Strong> f + 10r = 26
            </li>
            <li>
              <Strong>25-km trip:</Strong> f + 25r = 50
            </li>
          </ul>
          <p>
            Subtract the first from the second: 15r = 24, so r = 1.60.
            Substitute back: f + 16 = 26, so f = 10. The dispatch fee is 10
            dollars and the per-kilometer rate is 1.60 dollars.
          </p>
          <p>
            Notice the decoys. The list contains 1.20 and 1.40, both
            plausible-looking rates that a student who divides a single
            total by its distance would land on (26 divided by 10 is near
            neither, but a careless 50 divided by 25 gives 2, and rounding
            errors steer panicked test-takers toward the nearby values).
            The 8 and 12 sit on either side of the correct fee of 10,
            ready to catch an arithmetic slip in the substitution step.
            Every wrong option was placed to reward a specific error.
          </p>

          <BlogInlineCTA />

          <H2>The five recurring traps</H2>

          <H3>Trap 1 &mdash; Reversing the columns</H3>
          <p>
            You do the math correctly, then enter the rate in the fee
            column and the fee in the rate column. The values are right;
            the placement is wrong; the item is marked wrong. The shared
            answer list makes this trivially easy to do under time
            pressure. <Strong>Fix:</Strong> read the column headers last,
            right before you select, and physically check that the number
            you are about to choose answers the header above it.
          </p>

          <H3>Trap 2 &mdash; Solving one column and guessing the other</H3>
          <p>
            You nail the first column, the clock is loud, and you eyeball
            the second. Because the item is all-or-nothing, a confident
            first column plus a guessed second column is worth zero.{" "}
            <Strong>Fix:</Strong> budget for the whole item, not the first
            half. If you cannot finish both columns, the rational move is
            often to guess both quickly and bank the time elsewhere.
          </p>

          <H3>Trap 3 &mdash; Treating a dependent item as independent</H3>
          <p>
            You evaluate each column on its own and pick the locally best
            option for each, ignoring that the scenario ties them together.
            The result is a pair that looks fine column by column but
            cannot both be true. <Strong>Fix:</Strong> classify the item as
            dependent or independent before you compute, and in dependent
            items always verify the pair against the full scenario.
          </p>

          <H3>Trap 4 &mdash; The shared-option lure</H3>
          <p>
            In verbal two-part items especially, the statement that most
            strengthens and the statement that most weakens are placed next
            to each other in the list precisely because they are easy to
            swap. A statement that weakens a conclusion can read as a
            strengthener if you misread the direction of the argument.{" "}
            <Strong>Fix:</Strong> restate the conclusion in your own words
            before you evaluate any option, so the direction is fixed in
            your head.
          </p>

          <H3>Trap 5 &mdash; Over-reading the prompt</H3>
          <p>
            The prompt paragraph is short, but anxious test-takers re-read
            it three times looking for hidden conditions that are not
            there. Two-Part Analysis prompts are spare by design; the
            difficulty lives in the columns, not in buried clauses.{" "}
            <Strong>Fix:</Strong> read the prompt once for structure,
            extract the constraints into a quick note, and move to the
            table.
          </p>

          <H2>Timing</H2>
          <p>
            Data Insights gives you 45 minutes for 20 questions &mdash; an
            average of 2 minutes 15 seconds each. But the section mixes
            five formats of very different weight. Multi-Source Reasoning
            sets and dense Table Analysis items run long; a clean Data
            Sufficiency question runs short. Two-Part Analysis sits in the
            middle, and a fair budget is <Strong>2:15 to 2:45</Strong>{" "}
            depending on flavor.
          </p>
          <ul>
            <li>
              <Strong>Quantitative two-part:</Strong> aim for 2:30. Most of
              the time goes into setting up and solving the system; the
              selection itself is fast once you have the values.
            </li>
            <li>
              <Strong>Verbal two-part:</Strong> aim for 2:15. The
              evaluation is quick if you fix the conclusion first; the risk
              is re-reading, not computation.
            </li>
            <li>
              <Strong>Hard cap at 3:30.</Strong> Past that point, on an
              all-or-nothing item with no partial credit, the expected
              value of staying is low. Pick the most defensible pair and
              move on.
            </li>
          </ul>

          <Pull>
            On every other GMAT question, slow accuracy still earns the
            point. On Two-Part Analysis, slow accuracy on one column with a
            rushed error on the other earns nothing. The format punishes
            uneven effort more than any other on the exam.
          </Pull>

          <H2>How to drill Two-Part Analysis</H2>
          <ol>
            <li>
              <Strong>Classify before you solve.</Strong> For every
              practice item, write &ldquo;dependent&rdquo; or
              &ldquo;independent&rdquo; before doing any work. Build the
              habit until the classification is automatic.
            </li>
            <li>
              <Strong>Separate the two flavors.</Strong> Do a set of only
              quantitative two-part items, then a set of only verbal ones.
              The skills barely overlap, and mixing them early hides which
              one is actually weak.
            </li>
            <li>
              <Strong>Audit your wrong column.</Strong> When you miss an
              item, identify which column you got wrong and why. If you
              consistently miss the second column, it is a timing problem,
              not a content problem &mdash; you are running out of clock.
            </li>
            <li>
              <Strong>Verify the pair, every time.</Strong> On dependent
              items, plug both selected values back into the scenario as a
              final step. This single habit kills the most common silent
              error.
            </li>
            <li>
              <Strong>Tag the miss in your error log.</Strong> A reversed
              column is a Careless tag; a misclassified dependency is a
              Strategy tag; a guessed second column is a Time Pressure tag.
              The tag tells you which fix to drill next.
            </li>
          </ol>

          <H2>The short version</H2>
          <p>
            Two-Part Analysis is two questions scored as one, with a shared
            answer list built to make you swap columns or pick a locally
            plausible but globally wrong pair. Classify the item as
            dependent or independent before you compute. Solve the whole
            item, not the first half. Read the column headers last and
            confirm each value answers the header above it. On dependent
            items, plug the pair back into the scenario. Budget 2:15 to
            2:45, hard-cap at 3:30, and remember that on an all-or-nothing
            item a guessed second column erases a perfect first one.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s Data Insights chapters teach Two-Part
            Analysis as its own discipline, with the dependent-versus-
            independent decision built into the worked examples and the
            problem sets. The practice runner tracks per-question time so
            you can see exactly where the second column is eating your
            clock, and the error log&apos;s six-tag taxonomy separates a
            reversed column from a misclassified dependency from a
            time-pressure guess. The sample chapter is free if you want to
            see the teaching first.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/sample-chapter/data-insights"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Read the free Data Insights sample chapter
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
