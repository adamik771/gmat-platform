import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ReactMarkdown from "react-markdown"
import { getQuestionsByIds } from "@/lib/content"
import styles from "./PublicSite.module.css"

export default function HeroDashboardCard() {
  const [question] = getQuestionsByIds(["algebra-q1"])

  return (
    <section className={styles.demo} aria-label="Example study session">
      <header className={styles.demoHeader}>
        <span>Zakarian GMAT / Today</span>
        <span>Example study session. No account activity is saved.</span>
      </header>
      <div className={styles.demoBody}>
        <div className={styles.mission}>
          <p className={styles.kicker}>Today&apos;s mission</p>
          <h2>Work through linear equations</h2>
          <p className={styles.note}>
            Read the algebra sample, then work through a question from the question bank.
          </p>
          <Link href="/sample-chapter/quant" className={styles.textLink}>
            Open the algebra sample <ArrowRight aria-hidden="true" />
          </Link>
        </div>
        <div className={styles.question}>
          <h3>Practice / {question?.subtopic || "Linear equations"}</h3>
          {question ? (
            <>
              <ReactMarkdown>{question.prompt}</ReactMarkdown>
              <ol className={styles.options} aria-label="Answer choices">
                {question.options.map((option, index) => (
                  <li key={index}>{String.fromCharCode(65 + index)}. {option}</li>
                ))}
              </ol>
              <details className={styles.answer}>
                <summary>Reveal answer and explanation</summary>
                <div>
                  <p><strong>Answer {question.correctAnswerLetter}</strong></p>
                  <ReactMarkdown>{question.explanation}</ReactMarkdown>
                </div>
              </details>
            </>
          ) : (
            <Link href="/sample-chapter/quant" className={styles.textLink}>Read the algebra sample</Link>
          )}
        </div>
      </div>
    </section>
  )
}
