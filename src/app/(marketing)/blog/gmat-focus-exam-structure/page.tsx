import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd, faqPageLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE =
  "GMAT Focus Edition 2026: Format, Sections, Timing, and Scoring"
const DESCRIPTION =
  "The full GMAT Focus exam structure for 2026: three sections, 64 questions, 2h15m, your section-order choice, the calculator rule, and the 205-805 scoring scale."
const PUBLISHED_DATE = "2026-06-18"
const READ_MINUTES = 10

const FAQ = [
  {
    question: "How long is the GMAT Focus Edition?",
    answer:
      "The GMAT Focus Edition is 2 hours 15 minutes of testing time: three sections of 45 minutes each. There is one optional 10-minute break you can take either after your first section or after your second, so you are in the test center slightly longer than 2:15.",
  },
  {
    question: "How many questions are on the GMAT Focus?",
    answer:
      "There are 64 questions total: 21 in Quantitative Reasoning, 23 in Verbal Reasoning, and 20 in Data Insights. Each section runs 45 minutes.",
  },
  {
    question: "Can you skip questions on the GMAT Focus?",
    answer:
      "Yes. You can bookmark any question and move on, then use the review/edit screen at the end of each section to revisit your bookmarked questions. You may change up to three (3) answers per section, provided time remains on that section's clock.",
  },
  {
    question: "Can you use a calculator on the GMAT Focus?",
    answer:
      "An on-screen calculator is available only in the Data Insights section. It is not allowed in Quantitative Reasoning, and there is no calculator in Verbal Reasoning.",
  },
  {
    question: "What is the GMAT Focus score scale?",
    answer:
      "The Total Score runs from 205 to 805 in 10-point increments, and every total ends in 5. Each of the three sections is scored from 60 to 90 in 1-point increments. You receive four scores in all: the Total plus one per section.",
  },
  {
    question: "How long is a GMAT Focus score valid?",
    answer:
      "GMAT scores are valid for five years from the test date.",
  },
]

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-focus-exam-structure" },
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
          path: "/blog/gmat-focus-exam-structure",
          title: TITLE,
          description: DESCRIPTION,
          datePublished: PUBLISHED_DATE,
        })}
      />
      <JsonLd data={faqPageLd({ questions: FAQ })} />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: "GMAT Focus Exam Structure",
              href: "/blog/gmat-focus-exam-structure",
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
            GMAT Focus exam structure:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              the whole format
            </span>{" "}
            in one place.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            This is the full GMAT Focus exam structure for 2026 &mdash;
            three sections, 64 questions, 2 hours 15 minutes, the section
            order you choose, the question-review feature, the calculator
            rule, and exactly how the 205-805 score is built. One reference,
            no fluff.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            When I first sat down to study, half my confusion was not about
            math or grammar &mdash; it was about the test itself. How many
            questions, how much time, what order, what gets reported. So
            this post is the thing I wish I&apos;d had on day one: the GMAT
            Focus exam structure laid out completely, with every number
            verified against GMAC&apos;s own pages. If you want the history
            of how this format replaced the older exam, that lives in{" "}
            <Link href="/blog/gmat-focus-vs-old-gmat-whats-changed">
              what changed from the old GMAT
            </Link>
            . This page is purely the current structure.
          </p>

          <H2>The three sections at a glance</H2>
          <p>
            The GMAT Focus Edition has three sections: Quantitative
            Reasoning, Verbal Reasoning, and Data Insights. Every section is
            45 minutes. Here is the full breakdown.
          </p>

          <table>
            <thead>
              <tr>
                <th>Section</th>
                <th>Questions</th>
                <th>Time</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Quantitative Reasoning</td>
                <td>21</td>
                <td>45 minutes</td>
              </tr>
              <tr>
                <td>Verbal Reasoning</td>
                <td>23</td>
                <td>45 minutes</td>
              </tr>
              <tr>
                <td>Data Insights</td>
                <td>20</td>
                <td>45 minutes</td>
              </tr>
              <tr>
                <td>
                  <Strong>Total</Strong>
                </td>
                <td>
                  <Strong>64</Strong>
                </td>
                <td>
                  <Strong>2 hours 15 minutes</Strong>
                </td>
              </tr>
            </tbody>
          </table>

          <p>
            That 2:15 is testing time only &mdash; three 45-minute blocks
            (3 &times; 45 = 135 minutes). On top of it you get one optional
            10-minute break, so the time you actually spend in the test
            center runs a little past 2:15. There is no separate essay and
            no standalone Integrated Reasoning section; that material now
            lives inside Data Insights.
          </p>

          <H3>What each section contains</H3>
          <ul>
            <li>
              <Strong>Quantitative Reasoning</Strong>{" "}is all Problem Solving
              &mdash; 21 multiple-choice math questions. Data Sufficiency is
              gone from Quant and now appears in Data Insights instead. For
              how to pace it, see the{" "}
              <Link href="/blog/gmat-quant-timing-strategy">
                Quant timing strategy
              </Link>
              .
            </li>
            <li>
              <Strong>Verbal Reasoning</Strong>{" "}is 23 questions covering
              Reading Comprehension and Critical Reasoning only. Sentence
              Correction has been removed from the exam entirely &mdash;
              Focus Verbal tests reading and reasoning, not grammar editing.
            </li>
            <li>
              <Strong>Data Insights</Strong>{" "}is 20 questions blending Data
              Sufficiency, Multi-Source Reasoning, Table Analysis, Graphics
              Interpretation, and Two-Part Analysis. It is the section most
              people underestimate; the full breakdown is in the{" "}
              <Link href="/blog/gmat-data-insights-complete-guide">
                Data Insights guide
              </Link>
              .
            </li>
          </ul>

          <Pull>
            Three sections, 45 minutes each, 64 questions, 2 hours 15
            minutes. If you remember nothing else about the structure,
            remember those four numbers.
          </Pull>

          <H2>You choose the section order</H2>
          <p>
            You are not locked into a fixed sequence. At the start of the
            exam you pick the order in which you take the three sections,
            and you can choose any of the possible orderings. There is no
            &ldquo;correct&rdquo; order &mdash; it is a personal-strategy
            decision about when your focus is sharpest and which section you
            most want fresh energy for.
          </p>
          <p>
            Most people lead with the section they find hardest or most
            fatiguing, so they hit it while concentration is highest. I led
            with Data Insights for exactly that reason &mdash; it is the
            most mentally taxing for me, and I did not want it sitting at
            the end after 90 minutes of testing. Whatever you choose, decide
            it during practice, not on test day, so the order is one less
            thing to think about in the moment.
          </p>

          <H3>The break</H3>
          <p>
            You get one optional 10-minute break. You can take it either
            after your first section or after your second &mdash; your
            choice, declared as you go. Most test-takers take it; ten
            minutes to reset, hydrate, and clear your head between blocks is
            worth it. If you skip it, you simply move straight into the next
            section.
          </p>

          <H2>The question review and edit feature</H2>
          <p>
            This is one of the most useful things about the Focus format,
            and one of the most misunderstood. Within each section you can{" "}
            <Strong>bookmark</Strong>{" "}any question and keep moving. The exam
            is no longer strictly forward-only the way the older GMAT was.
            At the end of the section, a review/edit screen lets you go back
            and look at as many of your questions as you like before time
            expires.
          </p>
          <p>
            But there is a hard limit on the part that actually changes your
            score: you may <Strong>edit up to three (3) answers per
            section</Strong>. You can review unlimited questions on that
            screen, but you can only change up to three of your answers, and
            only while time remains on the section clock. So the right
            mental model is: bookmark freely, review widely, but spend your
            three edits carefully on the questions where a second look is
            most likely to flip a wrong answer to a right one.
          </p>

          <Pull>
            Bookmark as many questions as you want. Review as many as you
            want. But you can only change three answers per section &mdash;
            so treat those three edits as a scarce resource, not a safety
            net.
          </Pull>

          <p>
            This feature pairs directly with skipping. On a long
            Multi-Source Reasoning set or a grinding Quant problem, the
            disciplined move is to bookmark, guess, and move on rather than
            burn five minutes you do not have. You can come back at the end
            if the clock allows. Used well, the bookmark feature turns
            timing pressure from a trap into a managed decision.
          </p>

          <BlogInlineCTA />

          <H2>The calculator rule</H2>
          <p>
            This trips people up constantly, so be precise about it. The
            on-screen calculator is available <Strong>only</Strong>{" "}in the
            Data Insights section. You <Strong>cannot</Strong>{" "}use a
            calculator in Quantitative Reasoning &mdash; that section is
            entirely by hand, which is why mental-math fluency matters so
            much there. Verbal Reasoning has no calculator either, because
            there is nothing to compute.
          </p>
          <p>
            The practical takeaway: do not let the Data Insights calculator
            lull you into skipping arithmetic drills. The section where the
            numbers can get heaviest &mdash; Quant &mdash; is the one with
            no calculator at all. The math-by-hand habit is built in the{" "}
            <Link href="/blog/gmat-quant-timing-strategy">
              Quant timing work
            </Link>
            , not the Data Insights one.
          </p>

          <H2>How the GMAT Focus is scored</H2>
          <p>
            You receive four scores: a <Strong>Total Score</Strong>{" "}plus one
            score for each of the three sections. The scales are different
            for the total and the sections, and they behave in ways worth
            understanding before you set a target.
          </p>

          <H3>The Total Score: 205 to 805</H3>
          <p>
            The Total Score runs from <Strong>205 to 805 in 10-point
            increments</Strong>, and a detail that surprises everyone: every
            valid total ends in 5. So the possible scores are 205, 215, 225,
            and so on up to 805 &mdash; never a number ending in 0. That is
            a deliberate, visible difference from the legacy 200-800 scale,
            and it is how you can tell at a glance which scale a score is on.
          </p>

          <H3>Section scores: 60 to 90</H3>
          <p>
            Each section &mdash; Quantitative Reasoning, Verbal Reasoning,
            and Data Insights &mdash; is scored from <Strong>60 to 90 in
            1-point increments</Strong>. All three sections are{" "}
            <Strong>weighted equally</Strong>{" "}toward the Total Score. That
            equal weighting is the single most important scoring fact on the
            Focus Edition, because it means Data Insights counts exactly as
            much as Quant and Verbal. You cannot treat it as an afterthought
            the way many treated the old Integrated Reasoning section.
          </p>

          <p>
            One subtlety: the Total is <em>not</em>{" "}a simple sum of the three
            60-90 section scores. The sections feed into the Total through
            GMAC&apos;s equal-weighting model, so you read your total off the
            205-805 scale and your sections off the 60-90 scale separately.
            If you want to see what a given total or section score means in
            percentile terms, or how it lines up against the older scale, the{" "}
            <Link href="/score-converter">score converter</Link> handles both.
          </p>

          <H3>What a score actually means</H3>
          <p>
            Raw scale points only matter once you translate them into
            percentile rank. On our published bands &mdash; which are
            rounded approximations updated annually as the test-taking
            population shifts, not official current-year GMAC figures
            &mdash; the middle of the distribution sits in the mid-500s
            (around 565 is roughly the 51st percentile). A{" "}
            <Strong>645 lands near the 87th percentile</Strong>, which is the
            same competitive tier a 700 occupied on the old GMAT &mdash; the
            reason people call 645 &ldquo;the new 700.&rdquo; That is a
            percentile and competitiveness equivalence, not a score-scale
            one: by the score concordance, a 645 Focus converts to roughly a
            680 on the old scale (run it yourself in the{" "}
            <Link href="/score-converter">score converter</Link>). GMAC&apos;s
            own guidance is to compare the two scales by percentile rank, not
            by raw number.
          </p>
          <p>
            Higher up, a <Strong>655 is around the 91st percentile</Strong>{" "}
            (the entry into the top decile) and a{" "}
            <Strong>705 sits near the 98th</Strong>. For the full picture of
            where a number puts you and what programs look for, the{" "}
            <Link href="/blog/what-is-a-good-gmat-focus-score">
              good-GMAT-Focus-score breakdown
            </Link>{" "}
            is the scoring hub. I went from a 565 to a 735 myself, so I can
            tell you the jump between those tiers is real work &mdash; but
            the scale is the same scale the whole way up.
          </p>

          <H2>What gets reported and how long it lasts</H2>
          <p>
            Your official report shows the Total Score and all three section
            scores, each with its percentile ranking. And the scores are
            durable: <Strong>GMAT scores are valid for five years</Strong>{" "}
            from your test date. That five-year window matters for planning
            &mdash; if you are testing well ahead of when you&apos;ll apply,
            the score still counts as long as it falls inside that period.
          </p>

          <Pull>
            Four scores reported: the Total on the 205-805 scale plus three
            section scores on the 60-90 scale, each section weighted equally
            toward the Total. All of it is valid for five years.
          </Pull>

          <H2>The whole structure in one paragraph</H2>
          <p>
            The GMAT Focus Edition is three sections &mdash; Quantitative
            Reasoning (21 questions), Verbal Reasoning (23 questions), and
            Data Insights (20 questions) &mdash; for 64 questions total in 2
            hours 15 minutes, 45 minutes per section. You choose the section
            order and you get one optional 10-minute break. You can bookmark
            and review questions within a section and edit up to three
            answers per section if time remains. An on-screen calculator is
            available only in Data Insights, never in Quant. You receive four
            scores: a Total from 205 to 805 (in 10s, always ending in 5) and
            three section scores from 60 to 90 (in 1s), with all three
            sections weighted equally toward the Total, and the result is
            valid for five years. That is the entire format.
          </p>

          <H2>Frequently asked questions</H2>

          <H3>How long is the GMAT Focus Edition?</H3>
          <p>
            The exam is 2 hours 15 minutes of testing time &mdash; three
            45-minute sections. One optional 10-minute break (taken after
            your first or second section) sits on top of that, so you are in
            the center slightly longer than 2:15.
          </p>

          <H3>How many questions are on the GMAT Focus?</H3>
          <p>
            64 questions total: 21 in Quantitative Reasoning, 23 in Verbal
            Reasoning, and 20 in Data Insights.
          </p>

          <H3>Can you skip questions on the GMAT Focus?</H3>
          <p>
            Yes. You can bookmark any question and come back to it on the
            review/edit screen at the end of the section. You may change up
            to three answers per section, as long as time remains on that
            section&apos;s clock.
          </p>

          <H3>Can you use a calculator on the GMAT Focus?</H3>
          <p>
            Only in Data Insights. There is no calculator in Quantitative
            Reasoning, and none in Verbal Reasoning.
          </p>

          <H3>What is the GMAT Focus score scale?</H3>
          <p>
            The Total Score is 205 to 805 in 10-point increments (every
            total ends in 5); each section is 60 to 90 in 1-point
            increments. You get four scores in all &mdash; the Total plus
            one per section &mdash; and each section is weighted equally
            toward the Total.
          </p>

          <H3>How long is a GMAT Focus score valid?</H3>
          <p>GMAT scores are valid for five years from the test date.</p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s 50+ chapters are built around this exact
            structure &mdash; Quant, Verbal, and Data Insights taught as the
            three equally-weighted pillars they are on the real exam, with
            full-length mocks that mirror the 3-section, 45-minute,
            section-order-choice format so test day holds no surprises. The
            error log&apos;s six-tag taxonomy tells you which section is
            actually costing you points, so your prep tracks the scoring
            that matters. The sample chapter is free if you want to see the
            teaching first.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Read the free sample chapter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/what-is-a-good-gmat-focus-score"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              What is a good GMAT Focus score?
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-focus-exam-structure" />
      </article>
      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
        .prose-zk em { color: #E8E8E8; font-style: italic; }
        .prose-zk ol, .prose-zk ul { padding-left: 22px; }
        .prose-zk ol > li, .prose-zk ul > li { margin-bottom: 8px; }
        .prose-zk a { color: #C9A84C; text-decoration: underline; }
        .prose-zk table { width:100%; border-collapse:collapse; margin:8px 0; font-size:15px; }
        .prose-zk th,.prose-zk td { border:1px solid rgba(255,255,255,0.08); padding:8px 10px; text-align:left; }
        .prose-zk th { color:#F0F0F0; font-weight:600; }
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
