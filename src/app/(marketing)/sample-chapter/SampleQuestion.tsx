"use client"

import { useState, type ReactNode } from "react"
import { CheckCircle2, RotateCcw, XCircle } from "lucide-react"
import styles from "./SampleChapter.module.css"

export default function SampleQuestion({ prompt, options, correctAnswer, explanation }: {
  prompt: ReactNode
  options: ReactNode[]
  correctAnswer: number
  explanation: ReactNode
}) {
  const [selected, setSelected] = useState<number | null>(null)
  const [submitted, setSubmitted] = useState(false)
  const correct = selected === correctAnswer
  return (
    <section id="sample-question" className={styles.question} aria-labelledby="sample-question-title">
      <h2 id="sample-question-title">Try a question</h2>
      <p className={styles.note}>Sample practice. This answer is not saved to your study history.</p>
      <div className="prose-zk">{prompt}</div>
      <fieldset disabled={submitted} className={styles.options}>
        <legend className="sr-only">Choose one answer</legend>
        {options.map((option, index) => (
          <label key={index} className={styles.option} data-selected={selected === index}>
            <input type="radio" name="sample-answer" value={index} checked={selected === index} onChange={() => setSelected(index)} />
            <span>{String.fromCharCode(65 + index)}.</span><div className="prose-zk">{option}</div>
          </label>
        ))}
      </fieldset>
      {!submitted ? <button className={styles.action} type="button" disabled={selected === null} onClick={() => setSubmitted(true)}>Check answer</button> : <>
        <p role="status" className={styles.result}>{correct ? <CheckCircle2 size={20} aria-hidden /> : <XCircle size={20} aria-hidden />}{correct ? "Correct" : `Not quite. The correct answer is ${String.fromCharCode(65 + correctAnswer)}.`}</p>
        <div className="prose-zk">{explanation}</div>
        <button type="button" className={styles.action} onClick={() => { setSubmitted(false); setSelected(null) }}><RotateCcw size={16} aria-hidden />Try again</button>
      </>}
    </section>
  )
}
