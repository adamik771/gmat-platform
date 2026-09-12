"use client"

import Link from "next/link"
import { ArrowLeft, ArrowRight } from "lucide-react"
import { useEffect, useState, type ReactNode } from "react"
import ReaderThemeToggle, { useReadingTheme } from "@/components/shared/ReaderThemeToggle"
import ReadingProgressBar from "@/components/shared/ReadingProgressBar"
import ChapterMobileTOC from "../../chapters/[slug]/ChapterMobileTOC"
import ChapterSidebarNav, { type SidebarSectionItem } from "../../chapters/[slug]/ChapterSidebarNav"
import styles from "../../chapters/[slug]/ChapterReader.module.css"
import guideStyles from "./GuideReader.module.css"

export default function GuideReaderShell({
  section, kind, title, description, article, prev, next,
}: {
  section: string
  kind: string
  title: string
  description: string
  article: ReactNode
  prev: { slug: string; title: string } | null
  next: { slug: string; title: string } | null
}) {
  const [theme, setTheme] = useReadingTheme()
  const [contents, setContents] = useState<SidebarSectionItem[]>([])
  useEffect(() => {
    const headings = Array.from(document.querySelectorAll<HTMLHeadingElement>("#guide-article h2[id]"))
    // Headings come from the server-rendered Markdown article.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setContents(headings.map((h) => ({ id: h.id, title: h.textContent ?? "", type: "reading", read: false })))
  }, [article])
  const reading = kind === "reading"

  return (
    <div className={`reader-themed ${styles.reader} ${guideStyles.guide}`} data-reading-theme={theme}>
      <ReadingProgressBar targetSelector="#guide-article" />
      <header className={styles.header}>
        <div className={guideStyles.navigation}>
          <nav aria-label="Breadcrumb" className={guideStyles.breadcrumb}>
            <Link href="/chapters">Learn</Link><span aria-hidden>/</span>
            <Link href={reading ? "/learn" : "/guides"}>{reading ? "Supporting readings" : "References"}</Link>
          </nav>
          <ReaderThemeToggle theme={theme} onChange={setTheme} />
        </div>
        <p className={guideStyles.meta}>{section === "DI" ? "Data Insights" : section === "General" ? "Cross-section" : section} / {reading ? "Supporting reading" : "Reference"}</p>
        <h1 className={styles.title}>{title}</h1>
        <p className={guideStyles.description}>{description}</p>
      </header>
      <div className={`${styles.layout} ${contents.length < 3 ? styles.focused : ""}`}>
        {contents.length >= 3 && <>
          <aside className={styles.contents}><ChapterSidebarNav label="Guide contents" sections={contents} hasProblemSets={false} problemSetsAnchorId="" /></aside>
          <ChapterMobileTOC sections={contents} hasProblemSets={false} problemSetsAnchorId="" label="Guide contents" />
        </>}
        <div className={styles.article}>
          <article id="guide-article" className={guideStyles.prose}>{article}</article>
          <nav aria-label="Adjacent guides" className={guideStyles.adjacent}>
            {prev && <Link href={`/guides/${prev.slug}`}><ArrowLeft size={16} aria-hidden /><span>Previous guide<br />{prev.title}</span></Link>}
            {next && <Link href={`/guides/${next.slug}`}><span>Next guide<br />{next.title}</span><ArrowRight size={16} aria-hidden /></Link>}
          </nav>
        </div>
      </div>
    </div>
  )
}
