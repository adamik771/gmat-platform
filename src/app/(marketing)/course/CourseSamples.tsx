"use client"

import type { ReactNode } from "react"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import styles from "./Course.module.css"

export interface CourseSample {
  id: string
  subject: string
  title: string
  summary?: string
  readings: string[]
  href: string
  question: ReactNode
}

export default function CourseSamples({ samples }: { samples: CourseSample[] }) {
  if (!samples.length) return null
  return (
    <Tabs defaultValue={samples[0].id} className={styles.samples}>
      <TabsList variant="line" aria-label="Sample lesson subjects" className={styles.subjectTabs}>
        {samples.map((sample) => <TabsTrigger key={sample.id} value={sample.id} data-subject={sample.id} className={styles.subjectTab}>
          {sample.subject}
        </TabsTrigger>)}
      </TabsList>
      {samples.map((sample) => <TabsContent key={sample.id} value={sample.id} keepMounted={false} data-subject={sample.id} className={styles.samplePanel}>
        <div className={styles.lessonContext}>
          <p className={styles.eyebrow}>Sample / {sample.subject}</p>
          <h3>{sample.title}</h3>
          {sample.summary && <p className={styles.lessonSummary}>{sample.summary}</p>}
          <div className={styles.readingIndex}>
            <p>In the sample lesson</p>
            <ol>
              {sample.readings.map((title, index) => (
                <li key={title}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <span>{title}</span>
                </li>
              ))}
            </ol>
          </div>
          <Link href={sample.href} className={styles.textLink}>Read the {sample.subject} lesson <ArrowUpRight size={17} aria-hidden="true" /></Link>
          <p className={styles.smallNote}>Two full readings are available without an account.</p>
        </div>
        <div className={styles.question}>{sample.question}</div>
      </TabsContent>)}
    </Tabs>
  )
}
