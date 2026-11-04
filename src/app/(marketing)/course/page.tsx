import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import { getAllChapters, getQuestionsByIds } from "@/lib/content"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { TRIAL_DAYS } from "@/lib/entitlements"
import rehypeCaretSup from "@/lib/rehype-caret-sup"
import SampleQuestion from "../sample-chapter/SampleQuestion"
import CourseSamples from "./CourseSamples"
import CurriculumTopics from "./CurriculumTopics"
import styles from "./Course.module.css"
import quantLessonPreview from "../../../../public/images/home/quant-lesson.jpg"

export const metadata: Metadata = {
  title: "Course",
  alternates: { canonical: "/course" },
  description: "A guided GMAT curriculum across Quant, Verbal, and Data Insights, with supporting readings and practice.",
}

const PHASES: Array<{
  num: string
  title: string
  navTitle: string
  sections: string
  description: string
  exampleSlugs: string[]
}> = [
  {
    num: "01",
    title: "Foundations first",
    navTitle: "Foundations",
    sections: "Quant · Verbal · DI",
    description:
      "Arithmetic, active reading and Data Insights fundamentals provide a starting point before the more specialised chapters.",
    exampleSlugs: [
      "quant-05-order-and-signed-numbers",
      "quant-06-fractions-decimals",
      "quant-07-gcf-lcm-units-digits",
      "verbal-01-foundations",
      "di-foundations",
    ],
  },
  {
    num: "02",
    title: "The strategy toolkit",
    navTitle: "Methods",
    sections: "Quant",
    description:
      "Learn when backsolving, plugging in and estimation can simplify a problem, and when straightforward algebra is the better choice.",
    exampleSlugs: [
      "quant-01-backsolving",
      "quant-02-plugging-in-numbers",
      "quant-03-estimation",
      "quant-04-answer-choice-tactics",
    ],
  },
  {
    num: "03",
    title: "Core topics, three sections in rotation",
    navTitle: "Core topics",
    sections: "Quant · Verbal · DI",
    description:
      "Build Quant, Verbal and Data Insights in parallel, rotating between sections as you work through the core topics.",
    exampleSlugs: [
      "quant-13-linear-equations-systems",
      "quant-19-percents",
      "verbal-03-cr-assumption",
      "data-sufficiency",
      "table-analysis",
      "quant-21-rate-time-distance",
    ],
  },
  {
    num: "04",
    title: "Advanced reasoning and answer traps",
    navTitle: "Advanced reasoning",
    sections: "Quant · Verbal · DI",
    description:
      "Work through counting, probability, argument roles and reading traps, alongside more complex Data Insights problems.",
    exampleSlugs: [
      "quant-25-permutations-combinations",
      "quant-27-probability",
      "verbal-10-cr-boldface",
      "verbal-20-rc-answer-traps",
      "multi-source-reasoning",
    ],
  },
  {
    num: "05",
    title: "Timing and mixed practice",
    navTitle: "Timed practice",
    sections: "Quant · Verbal · DI",
    description:
      "Use section timing guides and mixed-topic practice to bring the work together under time pressure.",
    exampleSlugs: ["quant-30-timing", "verbal-21-mixed-timing", "di-timing-mixed"],
  },
]


export default function CoursePage() {
  const chapters = getAllChapters()
  const inventory = getPublicInventory()
  const titleBySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter.title]))
  // Use only questions already exposed by the corresponding public samples.
  const samples = [
    { id: "quant", subject: "Quant", slug: "quant-13-linear-equations-systems", sections: ["linear-equations-one-unknown", "systems-of-equations"], href: "/sample-chapter/quant" },
    { id: "verbal", subject: "Verbal", slug: "verbal-01-foundations", sections: ["how-verbal-works", "active-reading"], href: "/sample-chapter" },
    { id: "di", subject: "Data Insights", slug: "data-sufficiency", sections: ["the-five-answer-framework", "rephrasing-the-question"], href: "/sample-chapter/data-insights" },
  ].flatMap((sample) => {
    const chapter = chapters.find((item) => item.slug === sample.slug)
    if (!chapter) return []
    const question = getQuestionsByIds(chapter.sections.filter((section) => sample.sections.includes(section.id)).flatMap((section) => section.checkQuestionIds))
      .find((item) => !item.twoPartColumns && !item.chartSpec && item.correctAnswer >= 0 && item.correctAnswer < item.options.length)
    const markdown = (text: string, key?: number) => <ReactMarkdown key={key} remarkPlugins={[remarkGfm]} rehypePlugins={[rehypeCaretSup]}>{text}</ReactMarkdown>
    return [{ ...sample, title: chapter.title.replaceAll(" & ", " and "), summary: chapter.summary,
      readings: chapter.sections.filter((section) => sample.sections.includes(section.id)).map((section) => section.title),
      question: question ? <SampleQuestion key={question.id}
        prompt={<>{question.context && markdown(question.context)}{markdown(question.prompt)}</>}
        options={question.options.map(markdown)} correctAnswer={question.correctAnswer}
        explanation={markdown(question.explanation)}
      /> : <Link href={sample.href} className={styles.textLink}>Open the sample lesson <ArrowRight size={17} aria-hidden="true" /></Link>,
    }]
  })

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.eyebrow}>Quant. Verbal. Data Insights.</p>
          <h1><span>Zakarian GMAT.</span><span>The course.</span></h1>
          <p className={styles.lede}>A guided path from the fundamentals to timed practice. With room to understand the reasoning, try it yourself, and return to what needs more work.</p>
          <div className={styles.actions}>
            <Link href="#lesson-preview" className={styles.button} data-motion-action>Explore a lesson <ArrowRight data-motion-arrow size={17} aria-hidden="true" /></Link>
            <Link href="/signup" className={styles.textLink}>Start {TRIAL_DAYS}-day trial <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <p className={styles.note}>Public samples need no account. No credit card for the trial.</p>
        </header>
        <nav className={styles.pageNav} aria-label="Course sections">
          <a href="#lesson-preview">Inside a lesson</a>
          <a href="#curriculum">The curriculum</a>
          <a href="#chapter-flow">How you study</a>
          <span>{inventory.chapters} interactive chapters</span>
        </nav>
      </div>

      <section id="lesson-preview" className={`${styles.section} ${styles.previewSection}`} aria-labelledby="preview-title">
        <div className={styles.container}>
          <div className={`${styles.sectionHeader} ${styles.previewHeader}`}>
            <div><p className={styles.eyebrow}>Inside a lesson</p><h2 id="preview-title">See how the teaching works.</h2></div>
            <p>A practice question, its explanation, and two full readings from each section. All available here without an account.</p>
          </div>
          <CourseSamples samples={samples} />
        </div>
      </section>

      <div className={styles.container}>
        <section id="curriculum" className={styles.section} aria-labelledby="curriculum-title">
          <div className={styles.sectionHeader} data-motion="reveal">
            <div><p className={styles.eyebrow}>The complete path</p><h2 id="curriculum-title">The curriculum.</h2></div>
            <p>Five stages give the work an order. Your study plan helps you prioritise weaker areas within that path.</p>
          </div>
          <dl className={styles.inventory}>
            <div><dt>Interactive chapters</dt><dd>{inventory.chapters}</dd></div>
            <div><dt>Original bank questions</dt><dd>{inventory.questions.toLocaleString("en-US")}</dd></div>
            <div><dt>Supporting readings</dt><dd>{inventory.readings}</dd></div>
            <div><dt>Supplementary references</dt><dd>{inventory.references}</dd></div>
          </dl>
          <p className={styles.note}>Topics below are representative examples. Interactive chapters combine readings, recall checks, and graded problem sets. Supporting readings and references are separate resources, not extra interactive chapters.</p>
          <div className={styles.curriculumLayout}>
            <nav className={styles.phaseNav} aria-label="Curriculum stages">
              <p>Five stages</p>
              {PHASES.map((phase) => (
                <a key={phase.num} href={`#stage-${phase.num}`}>
                  <span>{phase.num}</span><span>{phase.navTitle}</span>
                  <ArrowRight size={15} aria-hidden="true" />
                </a>
              ))}
              <Link href="/chapters" className={styles.textLink}>Complete chapter path <ArrowUpRight size={15} aria-hidden="true" /></Link>
              <p className={styles.smallNote}>Account required for the complete course.</p>
            </nav>
            <div className={styles.phases}>
            {PHASES.map((phase) => {
              const topics = phase.exampleSlugs.map((slug) => titleBySlug.get(slug)).filter((title): title is string => Boolean(title))
              return (
                <article key={phase.num} id={`stage-${phase.num}`} className={styles.phase}>
                  <div className={styles.phaseHeading}>
                    <span className={styles.phaseNumber} aria-hidden="true">{phase.num}</span>
                    <div><p>{phase.sections}</p><h3>{phase.title}</h3></div>
                  </div>
                  <div className={styles.phaseBody}>
                    <p>{phase.description}</p>
                    <CurriculumTopics topics={topics} />
                  </div>
                </article>
              )
            })}
            </div>
          </div>
        </section>
      </div>

      <section id="chapter-flow" className={`${styles.section} ${styles.chapterSection}`} aria-labelledby="chapter-flow-title">
        <div className={styles.container}>
          <div className={styles.sectionHeader} data-motion="reveal">
            <div><p className={styles.eyebrow}>How you study</p><h2 id="chapter-flow-title">One chapter. Several chances to learn.</h2></div>
            <p>Read, recall, practise, review. Each part gives you a different way to work with the same idea.</p>
          </div>
          <div className={styles.chapterFlow}>
            <ol className={styles.studySteps}>
              <li><span aria-hidden="true">01</span><div><h3>Understand the method</h3><p>Read the chapter and follow its worked examples, at your own pace.</p></div></li>
              <li><span aria-hidden="true">02</span><div><h3>Check what you remember</h3><p>Use the recall checks and self-explanation prompts before moving on.</p></div></li>
              <li><span aria-hidden="true">03</span><div><h3>Put it into practice</h3><p>Apply the ideas in the chapter&apos;s graded problem sets. Review the reasoning behind your answers.</p></div></li>
              <li><span aria-hidden="true">04</span><div><h3>Return to your mistakes</h3><p>Record what went wrong in your error log and revisit work through the review queue.</p></div></li>
            </ol>
            <figure className={styles.lessonImage} data-motion="product">
              <Link href="/sample-chapter/quant" aria-label="Open the Quant lesson shown in the preview">
                <Image src={quantLessonPreview} width={760} height={570} alt="Actual public Quant lesson: Linear Equations and Systems, with its introduction and reading." sizes="(max-width: 800px) calc(100vw - 40px), 560px" />
              </Link>
              <figcaption>From the public Quant sample. <Link href="/sample-chapter/quant">Open the lesson <ArrowUpRight size={15} aria-hidden="true" /></Link></figcaption>
            </figure>
          </div>
        </div>
      </section>

      <div className={styles.container}>
        <section className={`${styles.section} ${styles.finish}`} data-motion="reveal">
          <p className={styles.eyebrow}>Your starting point</p>
          <h2>See where you stand.<br />Then make a plan.</h2>
          <p className={styles.lede}>Start with an official practice-exam baseline. Use the guided sequence alongside focused practice and review; plan an exam date around the time you have available.</p>
          <div className={styles.actions}>
            <Link href="/signup" className={styles.button} data-motion-action>Start {TRIAL_DAYS}-day trial <ArrowRight data-motion-arrow size={17} aria-hidden="true" /></Link>
            <Link href="/study-schedule" className={styles.textLink}>Build a study schedule <ArrowRight size={17} aria-hidden="true" /></Link>
          </div>
          <p className={styles.note}>No credit card required. <Link href="/pricing">Compare plans and payment options.</Link></p>
          <p className={styles.note}>The question bank is the full inventory. Chapter problem sets use selected questions from it; the bank total is not an additional set of chapter-test questions.</p>
        </section>
      </div>
    </div>
  )
}
