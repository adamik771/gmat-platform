"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BookOpen } from "lucide-react"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import base from "./PublicLanding.module.css"
import styles from "./TeachingFirst.module.css"

export interface TeachingSample {
  id: string
  subject: string
  topic: string
  level: string
  lesson: string
  href: string
  question: ReactNode
}

export default function TeachingSamples({ samples, trialDays, price, months, accessNote }: {
  samples: TeachingSample[]
  trialDays: number
  price: number
  months: number
  accessNote: string
}) {
  return (
    <>
      <Tabs defaultValue="quant" className={styles.samples}>
        <div className={styles.workspaceBar}>
          <span className={styles.workspaceBrand}><span aria-hidden="true">Z</span> The course</span>
          <span className={styles.workspaceLabel}>Sample practice</span>
        </div>
        <TabsList variant="line" aria-label="Choose a sample section" className={styles.tabs}>
          {samples.map(sample => <TabsTrigger key={sample.id} value={sample.id} className={styles.tab}>{sample.subject}</TabsTrigger>)}
        </TabsList>
        {samples.map(sample => <TabsContent key={sample.id} value={sample.id} keepMounted={false} className={styles.panel}>
          <div className={styles.questionColumn}>
            <div className={styles.sampleMeta}><span>{sample.topic}</span><span>{sample.level} / Original practice</span></div>
            <div className={styles.question}>{sample.question}</div>
          </div>
          <aside className={styles.lessonContext} aria-label={`${sample.subject} sample lesson`}>
            <BookOpen size={22} aria-hidden="true" />
            <p className={styles.eyebrow}>From the {sample.subject} course</p>
            <h3>{sample.lesson}</h3>
            <p>Continue with a sample lesson</p>
            <Link href={sample.href}>Read the lesson <ArrowUpRight size={17} aria-hidden="true" /></Link>
            <p className={styles.small}>Two full readings. No signup.</p>
          </aside>
        </TabsContent>)}
      </Tabs>
      <div className={styles.sampleBridge}>
        <div>
          <h3>Make room for this in your preparation.</h3>
          <p>The account adds the full course, saved practice results and review. Start with a topic you need; you do not have to restart your whole preparation.</p>
        </div>
        <div>
          <Link href="/signup" className={`${base.button} ${styles.primaryAction}`}>Start {trialDays}-day trial <ArrowRight size={17} aria-hidden="true" /></Link>
          <p className={styles.small}>No credit card. No automatic charge. Self-Study: ${price} USD, once, for {months} months.</p>
          <p className={styles.small}>{accessNote} <Link href="/pricing">Plans and payment options</Link>.</p>
        </div>
      </div>
    </>
  )
}
