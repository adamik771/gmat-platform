import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Clock } from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { articleLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"
import RelatedPosts from "@/components/marketing/RelatedPosts"
import BlogInlineCTA from "@/components/marketing/BlogInlineCTA"

export const metadata: Metadata = {
  title: "Why Your GMAT Score Is Stuck",
  description:
    "I went from 565 to 735 in eight months. The single shift that made it possible — and why most prep advice misses it.",
  openGraph: {
    type: "article",
    title: "Why Your GMAT Score Is Stuck",
    description:
      "I went from 565 to 735 in eight months. The single shift that made it possible — and why most prep advice misses it.",
    publishedTime: "2026-05-02T00:00:00.000Z",
    authors: ["Adam Zakarian"],
  },
}

/**
 * "Why Your GMAT Score Is Stuck" — inaugural blog post.
 *
 * The hook is Adam's actual 565 → 735 climb. The post argues that the
 * mistake most prep advice repeats — "just do more questions" — is
 * exactly why people plateau, and that the real lever is the review
 * layer (error log + debrief + spaced retrieval), not the volume layer.
 *
 * Voice: first-person, direct. Adam's. No emojis. The piece is meant
 * to read as the founder explaining how he actually got there, with
 * enough specificity that a stuck student feels seen and finds the
 * platform a logical next step.
 */
export default function PostPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <JsonLd
        data={articleLd({
          path: "/blog/why-your-gmat-score-is-stuck",
          title: "Why Your GMAT Score Is Stuck",
          description:
            "I went from 565 to 735 in eight months. The single shift that made it possible — and why most prep advice misses it.",
          datePublished: "2026-05-02",
        })}
      />
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pt-28 pb-20">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Blog", href: "/blog" },
            {
              label: "Why Your Score Is Stuck",
              href: "/blog/why-your-gmat-score-is-stuck",
            },
          ]}
        />

        <header className="mb-10">
          <div className="flex items-center gap-3 text-[11px] uppercase tracking-[0.18em] text-[#888888] mb-4">
            <span className="tabular-nums">2026-05-02</span>
            <span className="text-[#444444]">·</span>
            <span className="inline-flex items-center gap-1.5">
              <Clock className="w-3 h-3" />9 min read
            </span>
            <span className="text-[#444444]">·</span>
            <span>Adam Zakarian</span>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-4">
            Why your GMAT score is{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              stuck.
            </span>
          </h1>
          <p className="text-[18px] text-[#C0C0C0] leading-[1.55]">
            I went from 565 to 735 in eight months. The single shift that
            made it possible — and why most prep advice misses it.
          </p>
        </header>

        <div className="prose-zk space-y-6">
          <p>
            My first GMAT, I scored 565. I&apos;m not a native English speaker.
            I have no engineering background. I&apos;d been studying for three
            months, doing what every guide tells you to do — work through
            chapters, do practice sets, take mocks, repeat. I was averaging
            two hours a day. I felt like I was getting better. I wasn&apos;t.
          </p>
          <p>
            For a while I told myself the score was a fluke. So I doubled
            down. I bought a more popular course. I did more questions. I
            took a mock every week. My score moved by 15 points in eight
            weeks. At that pace I was on track to hit my target sometime
            around 2032.
          </p>
          <p>
            The thing nobody told me — the thing I now think is the single
            most useful sentence in GMAT prep — is this:
          </p>

          <Pull>
            You don&apos;t get better at the GMAT by doing more questions. You
            get better by understanding the questions you already got wrong.
          </Pull>

          <p>
            The ratio is brutal. A question you missed and analyzed properly
            is worth ten questions you missed and shrugged at. The reason
            most prep stalls — and this is true at 515, 585, 645, anywhere
            below where you want to be — isn&apos;t a content problem. It&apos;s
            a review problem. People do hundreds of questions a week and
            review zero of them with any rigor.
          </p>

          <H2>The plateau is a review failure, not a content failure</H2>
          <p>
            Here&apos;s what my study sessions looked like at 565:
          </p>
          <ol>
            <li>Open a problem set.</li>
            <li>Do 20 questions, untimed.</li>
            <li>Check the answers.</li>
            <li>Read the explanations for the ones I missed.</li>
            <li>Move to the next set.</li>
          </ol>
          <p>
            On paper, that&apos;s &quot;reviewing.&quot; In reality, it&apos;s a
            content-consumption loop with the word &quot;review&quot; pasted on
            top. I&apos;d read an explanation, nod, and forget it within a
            week. I&apos;d see the same trap two months later, fall for it
            again, read the same explanation, and assume I just &quot;hadn&apos;t
            internalized it yet.&quot; The honest read was: I&apos;d never
            really engaged with it the first time.
          </p>
          <p>
            The plateau wasn&apos;t about content I didn&apos;t know. By the time
            I scored 565 I&apos;d covered every Quant topic in the standard
            curriculum twice. The plateau was about patterns I kept missing
            — and I had no system to actually catch them.
          </p>

          <H2>What changed at month four</H2>
          <p>
            I started keeping an error log. Not a fancy one. A spreadsheet
            with one row per missed question and the following columns:
          </p>
          <ul>
            <li>
              <Strong>Question source.</Strong> Where I got it.
            </li>
            <li>
              <Strong>Section + topic.</Strong> Quant / Algebra. Verbal /
              Critical Reasoning. Etc.
            </li>
            <li>
              <Strong>Mistake type.</Strong> One of six tags I made up that
              week: Conceptual, Careless, Time pressure, Misread, Strategy,
              Other.
            </li>
            <li>
              <Strong>Trap I fell for.</Strong> One sentence on what the
              question was actually testing and why I missed it.
            </li>
            <li>
              <Strong>Fix.</Strong> What I would do differently next time.
              Also one sentence.
            </li>
          </ul>
          <p>
            For the first two weeks I just logged. No drilling, no
            re-attempts, no plan. Just: every miss goes in the log, with
            those five fields, no exceptions.
          </p>
          <p>
            At week three I sorted the log. The pattern was almost
            embarrassing. Out of 140 missed questions, more than half were
            three things:
          </p>
          <ol>
            <li>
              Inequality sign flips. I&apos;d forget to flip when multiplying
              by a negative. I&apos;d done this on every other Algebra section
              for three months and somehow never noticed because it was
              spread across topics.
            </li>
            <li>
              CR &quot;assumption&quot; questions where I&apos;d eliminate the right
              answer because it &quot;felt too broad.&quot; The trap was that
              broadness was the point — assumptions usually are broad.
            </li>
            <li>
              DI table-analysis questions where I&apos;d try to compute exact
              values when the question only required a comparison. I was
              burning two minutes per question for no reason.
            </li>
          </ol>
          <p>
            Three patterns. Across hundreds of questions. The content was
            never the problem. The same five mental moves, repeated against
            different surface forms.
          </p>

          <H2>The system that came out of the log</H2>
          <p>
            I built a study loop around the log. It looked roughly like
            this:
          </p>
          <ol>
            <li>
              <Strong>Drill 20 questions.</Strong> Topic-filtered, untimed
              the first pass.
            </li>
            <li>
              <Strong>Log every miss</Strong> with the five fields above.
              Five minutes per missed question, no shortcuts.
            </li>
            <li>
              <Strong>End-of-week review.</Strong> Read every entry from the
              week. Look for patterns. Group by mistake type and trap.
            </li>
            <li>
              <Strong>Weekly drill on the dominant pattern.</Strong> Whatever
              pattern was the largest cluster that week got a 30-question
              targeted set. Same trap, different surface forms.
            </li>
            <li>
              <Strong>Spaced retrieval on prior misses.</Strong> Every
              Sunday I&apos;d redo five questions from two weeks ago without
              looking at the answer. If I missed them again, they got
              re-flagged with a different trap tag if applicable.
            </li>
          </ol>
          <p>
            That&apos;s it. That was the loop. No course, no lecturer, no
            videos. The content I&apos;d already covered was fine. The
            scaffolding I&apos;d built around it was the difference.
          </p>
          <p>
            From 565 in October, I hit 645 in late January. 695 in March.
            735 in May. The slope wasn&apos;t linear — most of the climb
            happened once the log had eight to ten weeks of data and the
            patterns were visible. Below that, you don&apos;t have enough
            signal to act on.
          </p>

          <BlogInlineCTA />

          <H2>Why most prep advice misses this</H2>
          <p>
            Two reasons. One commercial, one cognitive.
          </p>
          <p>
            <Strong>The commercial reason</Strong> is that it&apos;s easier to
            sell content than to sell rigor. A platform that says &quot;655+
            questions, full-length mocks, expert video explanations&quot; is
            an easier purchase than a platform that says &quot;a system that
            forces you to be honest with yourself about your mistakes.&quot;
            One sounds like a product. The other sounds like work.
          </p>
          <p>
            <Strong>The cognitive reason</Strong> is more interesting.
            Reviewing a missed question well is uncomfortable. It requires
            you to sit with the specific reason your reasoning failed.
            People don&apos;t want to do that. They want to read an explanation
            that makes the right answer feel obvious in retrospect, nod,
            and move on. That&apos;s consumption. It feels like progress, but
            it doesn&apos;t change behavior — because behavior is changed by
            the moment of recognition where you say &quot;oh — I do this every
            time, and here&apos;s why.&quot; Most students never reach that
            moment because they don&apos;t structure their review to force it.
          </p>

          <H2>What this means for you, if you&apos;re stuck</H2>
          <p>
            If your score has been flat for two months, the diagnosis is
            almost always one of three things:
          </p>
          <ol>
            <li>
              <Strong>You don&apos;t have an error log.</Strong> Or you have
              one and don&apos;t use it. This is the common one. Start one.
              Five fields per row. Nothing fancy.
            </li>
            <li>
              <Strong>You log but you don&apos;t aggregate.</Strong> The log is
              useless until you sort it. The patterns only show up at the
              tag level, not the question level.
            </li>
            <li>
              <Strong>You aggregate but you don&apos;t drill the patterns.</Strong>{" "}
              Knowing your dominant trap is necessary but not sufficient.
              You have to do targeted drills on it until the recognition
              becomes automatic. A pattern you can name but can&apos;t catch
              in real time hasn&apos;t actually been fixed yet.
            </li>
          </ol>
          <p>
            Notice that none of those three problems are about content
            mastery. None of them are solved by a longer course, a more
            expensive tutor, or a better book. They&apos;re solved by the
            review layer.
          </p>

          <H2>The platform</H2>
          <p>
            I built Zakarian GMAT because the spreadsheet I used to climb
            from 565 to 735 deserved to be a real product. The error log is
            built in. The patterns are aggregated for you. The spaced
            retrieval is automatic. You baseline with an official mba.com
            practice exam and the platform turns your section scores into
            a plan. The chapters teach the content but the point is what
            the system does with your mistakes between chapters.
          </p>
          <p>
            The system isn&apos;t magic. It&apos;s the discipline of doing the
            review work, made easier by software so you actually do it. If
            you&apos;ve been stuck and you&apos;re ready to take your mistakes
            seriously, the sample chapter is free and the rest is one click
            away.
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
              href="/about"
              className="inline-flex items-center gap-2 px-5 py-3 rounded-lg text-[13px] font-semibold border transition-colors"
              style={{
                borderColor: "rgba(255,255,255,0.10)",
                color: "#C0C0C0",
              }}
            >
              Read the founder&apos;s story
            </Link>
          </div>
        </div>
        <RelatedPosts currentSlug="why-your-gmat-score-is-stuck" />
      </article>
      <style>{`
        .prose-zk { color: #C0C0C0; font-size: 17px; line-height: 1.75; }
        .prose-zk p { color: #C0C0C0; }
        .prose-zk strong { color: #F0F0F0; font-weight: 600; }
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
