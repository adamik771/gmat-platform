import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import ScoreTimeline from "@/components/marketing/ScoreTimeline"
import styles from "@/components/marketing/PublicSite.module.css"

export const metadata: Metadata = {
  title: "Results and evidence",
  alternates: { canonical: "/students" },
  description: "The founder's GMAT score journey and how Zakarian GMAT distinguishes practice, official exams, and student outcomes.",
}

export default function StudentsPage() {
  return (
    <div className={styles.page}>
      <div className={styles.container}>
        <header className={styles.intro}>
          <p className={styles.kicker}>Zakarian GMAT</p>
          <h1 className="font-display">Results and evidence</h1>
          <p className={styles.lede}>The founder&apos;s experience is the only result currently published here. Student outcomes will be added when available and verified.</p>
        </header>
        <section className={`${styles.section} ${styles.founder}`}>
          <div>
            <p className={styles.kicker}>Founder case study</p>
            <h2 className="font-display">Adam Zakarian: 565 to 735</h2>
            <p>A non-native English speaker with a non-technical background, Adam prepared over eight months. His account emphasises structured study, an error log, and focused mistake review before his second official exam.</p>
            <p className="mt-4">This journey began before the platform was offered to students. It is not a customer outcome, a typical improvement, or a score guarantee.</p>
            <p className="mt-4"><strong>Evidence status:</strong> Founder-reported dates and scores. A redacted score report is not currently published on this site.</p>
            <Link href="/about" className={styles.textLink}>Read the founder story <ArrowRight aria-hidden="true" /></Link>
          </div>
          <ScoreTimeline />
        </section>
        <section className={styles.section}>
          <h2 className="font-display">Different measurements, clearly labelled</h2>
          <div className={styles.steps}>
            <div><h3>Official practice baseline</h3><p>A score from an official practice exam. It is not a test-centre result.</p></div>
            <div><h3>Official exam result</h3><p>A score from a GMAT exam sitting, accompanied by its date and evidence status when published.</p></div>
            <div><h3>Platform simulation</h3><p>Training feedback from this platform, not an official GMAT score or a prediction of one.</p></div>
          </div>
        </section>
      </div>
    </div>
  )
}
