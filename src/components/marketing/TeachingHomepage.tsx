import Image from "next/image"
import Link from "next/link"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import { ArrowRight, ArrowUpRight } from "lucide-react"
import SampleQuestion from "@/app/(marketing)/sample-chapter/SampleQuestion"
import { getPublicInventory } from "@/components/marketing/content-inventory"
import { getQuestionsByIds } from "@/lib/content"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import { tiers } from "@/lib/plans"
import { PLAN_ACCESS_MONTHS } from "@/lib/plan-access"
import { paymentMethodsHelp, TRIAL_END_HELP } from "@/lib/payment-options"
import TeachingSamples from "./TeachingSamples"
import base from "./PublicLanding.module.css"
import styles from "./TeachingFirst.module.css"
import lessonImage from "../../../public/images/home/quant-lesson.jpg"

const sampleDefinitions = [
  { id: "quant", subject: "Quant", questionId: "algebra-q8", lesson: "Linear equations and systems", href: "/sample-chapter/quant" },
  { id: "verbal", subject: "Verbal", questionId: "reading-comprehension-q2", lesson: "Verbal foundations", href: "/sample-chapter" },
  { id: "di", subject: "Data Insights", questionId: "data-sufficiency-q3", lesson: "Data Sufficiency", href: "/sample-chapter/data-insights" },
]

const markdown = (text: string) => <ReactMarkdown remarkPlugins={[remarkGfm]}>{text}</ReactMarkdown>

export default function TeachingHomepage() {
  const inventory = getPublicInventory()
  const selfStudy = tiers.find(tier => tier.id === "self_study")!
  const mentorship = tiers.find(tier => tier.id === "self_study_guaranteed")!
  const accessNote = PAYWALL_ENABLED
    ? `A paid plan is needed after ${TRIAL_DAYS} days. Your account and history remain in place.`
    : `Early-release access currently continues beyond ${TRIAL_DAYS} days. Online checkout is not yet open.`
  const samples = sampleDefinitions.map(sample => {
    const [question] = getQuestionsByIds([sample.questionId])
    if (!question) throw new Error(`Missing homepage sample: ${sample.questionId}`)
    return {
      ...sample,
      topic: question.topic,
      level: question.difficulty,
      question: <SampleQuestion
        prompt={<>{question.context && markdown(question.context)}{markdown(question.prompt)}</>}
        options={question.options.map((option, index) => <ReactMarkdown key={index}>{option}</ReactMarkdown>)}
        correctAnswer={question.correctAnswer}
        explanation={<>{markdown(question.explanation)}{question.commonTrap && <div className={styles.trap}><h3>A mistake to watch for</h3>{markdown(question.commonTrap)}</div>}</>}
      />,
    }
  })

  return (
    <>
        <section className={styles.opening} aria-labelledby="candidate-title">
          <p className={styles.eyebrow}>Zakarian GMAT / Quant, Verbal and Data Insights</p>
          <h1 id="candidate-title">GMAT preparation.</h1>
          <p className={styles.promise}>Try the teaching before<br className={styles.desktopBreak} /> you choose the course.</p>
          <p className={styles.intro}>Work through a real question and its full explanation. Then read a sample lesson. No account needed.</p>
          <div className={styles.actions}>
            <a href="#inside" className={`${base.button} ${styles.primaryAction}`}>Try a real question <ArrowRight size={18} aria-hidden="true" /></a>
            <Link href="/signup" className={base.textLink}>Start {TRIAL_DAYS}-day trial <ArrowUpRight size={17} aria-hidden="true" /></Link>
          </div>
          <p className={styles.priceNote}>Self-Study: ${selfStudy.price} USD for {PLAN_ACCESS_MONTHS.self_study} months. <a href="#plans">See the plans</a>.</p>
        </section>

        <section id="inside" className={styles.practiceSection} aria-labelledby="sample-title" tabIndex={-1}>
          <div className={styles.container}>
            <div className={styles.sampleHeading}><h2 id="sample-title">Inside the course.</h2><p>Original questions. Full explanations.</p></div>
            <TeachingSamples samples={samples} trialDays={TRIAL_DAYS} price={selfStudy.price} months={PLAN_ACCESS_MONTHS.self_study} accessNote={accessNote} />
            <p className={styles.small}>These samples are for inspecting the teaching, not a diagnostic or a prediction of your score.</p>
          </div>
        </section>

        <section id="how-it-works" className={styles.courseSection} aria-labelledby="course-title">
          <div className={styles.container}>
            <div className={styles.sectionIntro}>
              <div><p className={styles.eyebrow}>What the account adds</p><h2 id="course-title">A place to do the work.<br /> And come back to it.</h2></div>
              <p>A reading-first course for MBA, MiM and finance master&apos;s applicants. Lessons, practice results and review stay together instead of becoming another pile of material.</p>
            </div>
            <div className={styles.courseGrid}>
              <figure className={styles.lessonFigure} data-motion="product">
                <Link href="/sample-chapter/quant" aria-label="Read the actual Quant lesson pictured here"><Image src={lessonImage} alt="The actual public lesson on linear equations and systems, including its introduction and reading." width={760} height={570} sizes="(max-width: 700px) calc(100vw - 40px), (max-width: 1100px) 50vw, 570px" /></Link>
                <figcaption>The public Quant lesson. <Link href="/sample-chapter/quant">Read it in full <ArrowUpRight size={14} aria-hidden="true" /></Link></figcaption>
              </figure>
              <ol className={styles.studySteps}>
                <li><span>01</span><div><h3>Learn a method.</h3><p>Read the chapter, follow its worked examples and test what you remember with recall checks.</p></div></li>
                <li><span>02</span><div><h3>Try it without the explanation.</h3><p>Use chapter sets or topic-filtered practice. Your saved results show your answers, accuracy and time spent.</p></div></li>
                <li><span>03</span><div><h3>Return to what went wrong.</h3><p>Keep notes in the error log and revisit questions in the review queue. Use your practice history to choose where to focus next.</p></div></li>
              </ol>
            </div>
            <div className={styles.inventory}><strong>{inventory.chapters} interactive chapters</strong><span>{inventory.questions.toLocaleString("en-US")} original bank questions</span><Link href="/course">Explore the curriculum <ArrowRight size={16} aria-hidden="true" /></Link></div>
            <p className={styles.small}>Chapter problem sets draw from this bank. These are not official GMAC questions. Some chapter tests are still in preparation.</p>
          </div>
        </section>

        <section id="plans" className={styles.planSection} aria-labelledby="plans-title">
          <div className={styles.container}>
            <div className={styles.sectionIntro}><div><p className={styles.eyebrow}>When you want to continue</p><h2 id="plans-title">The course, with or<br /> without personal support.</h2></div><p>The full platform in both plans. USD, paid once; the access period starts at purchase. The trial does not take a payment.</p></div>
            <div className={styles.planRows}>
              <article><div><h3>Self-Study</h3><p>The full course, question bank, saved practice, study plan and review tools.</p></div><p className={styles.planPrice}>${selfStudy.price}<span>{PLAN_ACCESS_MONTHS.self_study} months</span></p><Link href="/pricing#platform-plans">Self-Study details <ArrowUpRight size={17} aria-hidden="true" /></Link></article>
              <article><div><h3>Mentorship</h3><p>The same platform plus direct WhatsApp Q&amp;A with Adam. No scheduled calls.</p></div><p className={styles.planPrice}>${mentorship.price}<span>{PLAN_ACCESS_MONTHS.self_study_guaranteed} months</span></p><Link href="/pricing#platform-plans">Mentorship details <ArrowUpRight size={17} aria-hidden="true" /></Link></article>
            </div>
            <p className={styles.payment}>{paymentMethodsHelp()}</p>
            <p className={styles.support}>Need scheduled one-to-one sessions? <Link href="/pricing#coaching-plans">See Coaching and Intensive <ArrowUpRight size={16} aria-hidden="true" /></Link>. <Link href="/about">Meet Adam</Link>.</p>
          </div>
        </section>

        <section className={styles.startSection} aria-labelledby="start-title">
          <div className={styles.container}>
            <div className={styles.startGrid}>
              <div><p className={styles.eyebrow}>Start with one area you need</p><h2 id="start-title">Keep going<br /> with the full platform.</h2><Link href="/signup" className={`${base.goldButton} ${styles.primaryAction}`}>Start {TRIAL_DAYS}-day trial <ArrowRight size={18} aria-hidden="true" /></Link><p className={styles.small}>No credit card. No automatic charge.</p></div>
              <div className={styles.nextSteps}>
                <h3>After you create an account</h3>
                <p>Confirm your email if prompted, then enter your target, exam date and study time. You can start with the chapters and practice.</p>
                <p>For a baseline-led study plan, log your scores from an official mba.com practice exam. There is no in-app placement diagnostic, and your sample answers here are not saved.</p>
                <p>{TRIAL_END_HELP}</p>
                <Link href="/refund">Read the refund terms <ArrowUpRight size={16} aria-hidden="true" /></Link>
              </div>
            </div>
          </div>
        </section>
    </>
  )
}
