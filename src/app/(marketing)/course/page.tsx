import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { getAllChapters } from "@/lib/content"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import CurriculumTopics from "./CurriculumTopics"
import styles from "@/components/marketing/PublicSite.module.css"

export const metadata: Metadata = {
  title: "Course",
  alternates: { canonical: "/course" },
  description: "A guided GMAT curriculum across Quant, Verbal, and Data Insights, with supporting readings and practice.",
}

const PHASES: Array<{
  num: string
  title: string
  sections: string
  description: string
  exampleSlugs: string[]
}> = [
  {
    num: "01",
    title: "Foundations first",
    sections: "Quant · Verbal · DI",
    description:
      "The arithmetic and section fundamentals everything else builds on — designed to ease you in even with a weaker math background.",
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
    sections: "Quant",
    description:
      "Backsolving, plugging in numbers, estimation, answer-choice tactics — the quick-win methods that turn algebra into arithmetic.",
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
    sections: "Quant · Verbal · DI",
    description:
      "A couple of Quant chapters, then Verbal, then Data Insights — every section builds in parallel instead of months apart.",
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
    title: "Advanced ground and trap immunity",
    sections: "Quant · Verbal · DI",
    description:
      "Counting, probability, boldface, the answer-trap chapters — more complex reasoning and recurring answer traps.",
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
    title: "Timing and mixed pressure",
    sections: "Quant · Verbal · DI",
    description:
      "Once the content is in, train the clock: per-section pacing frameworks and mixed sets under real exam pressure.",
    exampleSlugs: ["quant-30-timing", "verbal-21-mixed-timing", "di-timing-mixed"],
  },
]


export default function CoursePage() {
  const chapters = getAllChapters()
  const inventory = getPublicInventory()
  const titleBySlug = new Map(chapters.map((chapter) => [chapter.slug, chapter.title]))
  const samples = ["/sample-chapter", "/sample-chapter/quant", "/sample-chapter/quant", "/sample-chapter/data-insights", "/sample-chapter/data-insights"]

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Zakarian GMAT / Platform</p>
          <h1 className="font-display">GMAT curriculum</h1>
          <p className={styles.lede}>A guided path from foundations to timed practice. Quant, Verbal, and Data Insights develop in rotation, with advanced and timing work later in the sequence.</p>
          <div className={styles.actions}>
            <Link href="/sample-chapter" className={styles.button}>Read a sample chapter <ArrowRight aria-hidden="true" /></Link>
            <Link href="#curriculum" className={styles.quietButton}>Explore the five phases</Link>
          </div>
          <p className={styles.note}>Public samples need no account. Your study plan can prioritise weak areas within the guided path.</p>
        </header>
        <dl className={styles.proof}>
          <div><dt>Interactive chapters</dt><dd>{inventory.chapters}</dd></div>
          <div><dt>Supporting readings</dt><dd>{inventory.readings}</dd></div>
          <div><dt>Supplementary references</dt><dd>{inventory.references}</dd></div>
          <div><dt>Original bank questions</dt><dd>{inventory.questions.toLocaleString("en-US")}</dd></div>
        </dl>

        <section id="curriculum" className={styles.section}>
          <h2 className="font-display">Five phases of preparation</h2>
          <p className={styles.note}>Topics below are representative examples. Interactive chapters combine readings, recall checks, and graded problem sets. Supporting readings and references are separate resources, not extra interactive chapters.</p>
          <div className="mt-8 divide-y divide-white/10">
            {PHASES.map((phase, index) => {
              const topics = phase.exampleSlugs.map((slug) => titleBySlug.get(slug)).filter((title): title is string => Boolean(title))
              return (
                <article key={phase.num} className="grid gap-4 py-7 sm:grid-cols-[40px_1fr] sm:gap-6">
                  <span className="text-lg tabular-nums text-[#B9B7AE]">{phase.num}</span>
                  <div className="min-w-0">
                    <h3>{phase.title}</h3>
                    <p className="mt-2 max-w-3xl text-sm text-[#B9B7AE]">{phase.description}</p>
                    <p className="mb-3 mt-5 text-sm text-[#F0F0F0]">Topics include</p>
                    <CurriculumTopics topics={topics} />
                    <Link href={samples[index]} className={styles.textLink}>Read a {index === 0 ? "Verbal" : index < 3 ? "Quant" : "Data Insights"} sample <ArrowRight aria-hidden="true" /></Link>
                  </div>
                </article>
              )
            })}
          </div>
          <Link href="/chapters" className={styles.textLink}>Open the complete chapter path (account required) <ArrowRight aria-hidden="true" /></Link>
        </section>

        <section className={styles.section}>
          <h2 className="font-display">Fit the sequence to your schedule</h2>
          <p className={styles.lede}>Start with an official practice-exam baseline. Use the guided sequence alongside focused practice and review; plan an exam date around the time you have available.</p>
          <div className={styles.actions}>
            <Link href="/study-schedule" className={styles.quietButton}>Build a study schedule</Link>
            <Link href="/signup" className={styles.button}>Start your trial <ArrowRight aria-hidden="true" /></Link>
          </div>
          <p className={styles.note}>The question bank is the full inventory. Chapter problem sets use selected questions from it; the bank total is not an additional set of chapter-test questions.</p>
        </section>
      </div>
    </div>
  )
}
