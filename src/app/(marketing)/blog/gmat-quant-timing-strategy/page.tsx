import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

const TITLE = "GMAT Quant Timing Strategy: How to Finish All 21 Questions"
const DESCRIPTION =
  "The per-question budget, the bookmark rule, the soft-cap-and-move discipline, and the four-tier triage that gets you through the 45-minute Quant section without burning the clock on a single brutal question."
const PUBLISHED_DATE = "2026-05-04"
const READ_MINUTES = 12

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  alternates: { canonical: "/blog/gmat-quant-timing-strategy" },
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
          path: "/blog/gmat-quant-timing-strategy",
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
              label: "Quant Timing Strategy",
              href: "/blog/gmat-quant-timing-strategy",
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
            GMAT Quant timing strategy:{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              all 21 questions
            </span>{" "}
            in 45 minutes.
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            The per-question budget, the bookmark rule, the
            soft-cap-and-move discipline, and the four-tier triage that
            gets you through the section without burning the clock on
            a single brutal question.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            The most common Quant problem isn&apos;t content. It&apos;s
            timing. Students who can solve every question untimed crater
            on the timed mock because they spend three minutes on the
            second hard question and then panic-guess on five at the end.
            Quant timing is its own skill, learned the same way any
            mechanical discipline gets learned: per-question budgets,
            soft caps, deliberate practice against the clock.
          </p>

          <Pull>
            Untimed accuracy is necessary but not sufficient. Timed
            accuracy is the actual Quant score. Train against the clock
            from week one or you&apos;ll meet the clock for the first
            time on test day.
          </Pull>

          <H2>The format</H2>
          <ul>
            <li>
              <Strong>21 questions in 45 minutes</Strong> &mdash; an
              average of 2 minutes 8 seconds per question.
            </li>
            <li>
              <Strong>Problem Solving only</Strong> &mdash; Data
              Sufficiency moved to Data Insights on the Focus Edition.
            </li>
            <li>
              <Strong>Bookmark + review</Strong> &mdash; you can flag up
              to three questions per section and revisit them at the end.
              You can change up to three answers in total. New on Focus.
            </li>
            <li>
              <Strong>One section, no breaks.</Strong> The clock runs
              straight through.
            </li>
          </ul>

          <H2>The per-question budget</H2>
          <p>
            The simplest Quant timing rule: 2 minutes per question, soft
            cap. Average is 2:08; using 2:00 as your target leaves an
            8-second buffer per question that aggregates to almost three
            minutes of slack across the section. You don&apos;t have to
            be fast on every question; you have to refuse to be slow on
            any.
          </p>

          <H3>The 2-minute soft cap</H3>
          <p>
            When you cross 2:00 and you&apos;re not within 80% of an
            answer, do one of three things:
          </p>
          <ol>
            <li>
              <Strong>Bookmark it</Strong> if you have a 50/50 between
              two answer choices.
            </li>
            <li>
              <Strong>Best-guess</Strong> if you&apos;ve eliminated some
              choices but can&apos;t finish the math.
            </li>
            <li>
              <Strong>Blind-guess and bookmark</Strong> if you have no
              traction at all.
            </li>
          </ol>
          <p>
            Then move. The cost of staying past the cap is the next
            question, not this one. A question you blow at 3:30 didn&apos;t
            cost you that question &mdash; you were going to miss it
            anyway. It cost you the next question, which you&apos;d have
            got right with normal time.
          </p>

          <H3>Hard cap at 3:00</H3>
          <p>
            Three minutes is the absolute hard cap. No question on the
            GMAT is worth three minutes. Past that point, the
            opportunity cost is at least two future questions you&apos;d
            otherwise get right.
          </p>

          <H2>The four-tier triage</H2>
          <p>
            Within the first 10 seconds of reading a question, sort it
            into one of four buckets:
          </p>

          <H3>Tier 1 &mdash; Solve immediately (0-30%)</H3>
          <p>
            You see the structure. You know the formula. You estimate
            it&apos;ll take under 90 seconds. <Strong>Solve.</Strong> Go
            fast and check the unit / sign at the end.
          </p>

          <H3>Tier 2 &mdash; Solvable but careful (30-50%)</H3>
          <p>
            You can do it but it&apos;ll take the full 2:00. Multiple
            steps, easy to make a slip. <Strong>Slow down on the last
            step.</Strong> Most carelessness lives in the final move.
          </p>

          <H3>Tier 3 &mdash; Set the trap, see if it cracks (15%)</H3>
          <p>
            Brutal-looking question. You&apos;re not sure of the right
            approach. Spend 60 seconds trying the most obvious one. If
            it&apos;s working at the 60-second mark, finish. If
            it&apos;s not, drop to tier 4.
          </p>

          <H3>Tier 4 &mdash; Bookmark and move (5-10%)</H3>
          <p>
            Past the 60-second exploration with no traction. Best-guess,
            bookmark, move. Come back at the end if time permits.
          </p>

          <H2>How to use the three bookmarks</H2>
          <p>
            Three bookmarks per section is a strategic resource, not a
            safety blanket. Spend them deliberately.
          </p>
          <ol>
            <li>
              <Strong>Save them for genuine 50/50s.</Strong> A question
              where you eliminated three answers and the remaining two
              are equally plausible is the canonical bookmark target.
            </li>
            <li>
              <Strong>Don&apos;t bookmark blind guesses.</Strong> If you
              have no idea what the question is asking, you won&apos;t
              do better with a second look. Spend the bookmark elsewhere.
            </li>
            <li>
              <Strong>Don&apos;t hoard them.</Strong> If you&apos;re at
              question 10 and unflagged, but you have three good 50/50
              candidates, flag them all. Fresh eyes at the end of the
              section work for any of them, not just the last one.
            </li>
          </ol>

          <Pull>
            The bookmark feature is new on the Focus Edition and most
            students under-use it. Three deliberate flags can convert
            two of those questions from misses to right answers
            &mdash; that&apos;s 4-6 score points in the section.
          </Pull>

          <BlogInlineCTA />

          <H2>Where time actually goes</H2>
          <p>
            On a typical Quant section, your 45-minute clock breaks
            down roughly like this:
          </p>
          <ul>
            <li>
              <Strong>17 questions at 1:30-2:00</Strong> &mdash; tiers 1
              and 2. Total: 28-32 minutes.
            </li>
            <li>
              <Strong>3 questions at 2:00-2:45</Strong> &mdash; tier 3.
              Total: 8-9 minutes.
            </li>
            <li>
              <Strong>1 question bookmarked + best-guessed at 0:30</Strong> &mdash;
              tier 4. Total: 0.5 minutes.
            </li>
            <li>
              <Strong>3-4 minutes</Strong> at the end to revisit
              bookmarks.
            </li>
          </ul>
          <p>
            The math: 32 + 9 + 0.5 + 3.5 = 45. Hits the clock. The
            critical move is keeping the 17 baseline questions in the
            1:30-2:00 range. If you let them drift to 2:30, the section
            falls apart.
          </p>

          <H2>The five timing failure modes</H2>

          <H3>Failure 1 &mdash; The opening drift</H3>
          <p>
            Question 1 takes 3:00 because it&apos;s &ldquo;easy and you
            want to start strong.&rdquo; Question 2 takes 2:30 for the
            same reason. By question 5 you&apos;re 4 minutes behind
            schedule and panic sets in. <Strong>Fix:</Strong> the first
            five questions get the same 2:00 cap as everything else.
            Don&apos;t over-invest in early questions.
          </p>

          <H3>Failure 2 &mdash; The sunk-cost spiral</H3>
          <p>
            You&apos;ve invested 1:45 in a question and the answer is
            still elusive. You don&apos;t want to lose the time, so you
            keep going. At 3:30 you&apos;re still grinding, you guess,
            and you&apos;re now four minutes behind schedule.
            <Strong>Fix:</Strong> the time is already lost. The decision
            is forward-looking: bookmark, best-guess, move.
          </p>

          <H3>Failure 3 &mdash; The triple-check loop</H3>
          <p>
            You finish a question, you&apos;re 80% confident, and you
            re-do it from scratch to be 95% confident. That&apos;s 60
            extra seconds for a 15% confidence boost. Across 5
            questions per section, that&apos;s 5 minutes for marginal
            certainty. <Strong>Fix:</Strong> commit on the first pass
            unless you have a specific reason to doubt. Triple-checking
            is anxiety, not strategy.
          </p>

          <H3>Failure 4 &mdash; The bookmark abandonment</H3>
          <p>
            You bookmark three questions and then don&apos;t leave time
            to revisit them. The bookmark feature was free score points
            you didn&apos;t collect. <Strong>Fix:</Strong> at minute 40,
            stop attempting new questions. Use the last 5 minutes for
            bookmarks even if it means leaving the last question
            best-guessed.
          </p>

          <H3>Failure 5 &mdash; Untimed practice as your default</H3>
          <p>
            You&apos;ve done hundreds of questions untimed and feel
            confident. The first timed mock crashes you back into
            reality. <Strong>Fix:</Strong> 80% of practice should be
            timed from week two onwards. Untimed practice has a place,
            but only for genuine new content acquisition.
          </p>

          <H2>How to drill timing specifically</H2>
          <ol>
            <li>
              <Strong>Single-question time trials.</Strong> Set a 2:00
              timer. Pick a Quant question. Solve and commit before the
              timer hits zero. Do 10-15 of these per session for two
              weeks. The 2:00 cap becomes a body memory.
            </li>
            <li>
              <Strong>10-question mini-sections.</Strong> Once
              single-question pacing is automatic, do timed 10-question
              sets in 21 minutes. Smaller scope but full pacing
              discipline.
            </li>
            <li>
              <Strong>Full 21-question sections weekly.</Strong> By
              week three or four, do a full 45-minute Quant section
              every week under exam conditions. This is the only thing
              that trains stamina + bookmark discipline together.
            </li>
            <li>
              <Strong>Audit your timing data.</Strong> After every
              practice section, look at time-per-question. The
              questions that took over 2:30 are the questions to
              re-examine. Often it&apos;s the same trap repeating.
            </li>
            <li>
              <Strong>Tag time-pressure misses in the error log.</Strong>
              The six-tag taxonomy includes &ldquo;Time pressure&rdquo;
              for a reason. If your dominant tag becomes Time pressure,
              you have a pacing problem, not a content problem &mdash;
              and the fix is per-question time caps, not more practice.
            </li>
          </ol>

          <H2>The short version</H2>
          <p>
            21 questions in 45 minutes. 2:00 soft cap, 3:00 hard cap.
            Triage every question into one of four tiers within 10
            seconds of reading. Spend the three bookmarks on genuine
            50/50s. Leave 3-5 minutes at the end to revisit bookmarks.
            Train all of this against the clock from week one. The
            pacing skill doesn&apos;t transfer from untimed practice
            &mdash; it has to be its own discipline.
          </p>

          <H2>The platform</H2>
          <p>
            Zakarian GMAT&apos;s practice runner enforces per-question
            time tracking by default. The error log&apos;s &ldquo;Time
            pressure&rdquo; tag surfaces pacing problems automatically.
            Section mocks are scored on the new 60-90 Focus per-section
            scale and include a per-question time audit in the debrief.
            The sample chapter is free if you want to see the teaching
            first.
          </p>

          <div className="mt-10 flex flex-wrap gap-3">
            <Link
              href="/sample-chapter/quant"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold transition-transform duration-200 hover:-translate-y-0.5"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Read the free Quant sample chapter
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/blog/how-to-build-a-gmat-study-plan-that-works"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Read the study-plan framework
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="gmat-quant-timing-strategy" />
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
