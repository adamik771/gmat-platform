import Link from "next/link"
import { ArrowRight, Search } from "lucide-react"
import { getAllGuides } from "@/lib/content"
import styles from "../chapters/LearningLibrary.module.css"

export type LibraryFilters = { q?: string; section?: string }

export default function GuideLibrary({ kind, filters }: { kind: "reading" | "reference"; filters: LibraryFilters }) {
  const route = kind === "reading" ? "/learn" : "/guides"
  const query = typeof filters.q === "string" ? filters.q.trim() : ""
  const guides = getAllGuides().filter((g) => kind === "reading" ? g.type === "reading" : g.type !== "reading")
  const visible = guides.filter((g) => (!filters.section || g.section === filters.section) &&
    (!query || `${g.title} ${g.description} ${g.content}`.toLowerCase().includes(query.toLowerCase())))
  return (
    <div className={styles.page}>
      <header className={styles.header}>
        <h1>{kind === "reading" ? "Supporting readings" : "References"}</h1>
        <p>{kind === "reading" ? "Deeper explanations to accompany the interactive chapters. These readings are supporting material, not a second course path." : "Strategy guides, formula sheets and checklists for use alongside the interactive chapters."}</p>
      </header>
      <form action={route} className={styles.filters}>
        <label className={styles.search}>Search {kind === "reading" ? "readings" : "references"}<input name="q" type="search" defaultValue={query} /></label>
        <label>Section<select name="section" defaultValue={filters.section ?? ""}><option value="">All sections</option><option value="Quant">Quantitative</option><option value="Verbal">Verbal</option><option value="DI">Data Insights</option><option value="General">Cross-section</option></select></label>
        <button type="submit"><Search size={16} aria-hidden />Search</button>
        {(query || filters.section) && <Link className={styles.rowLink} href={route}>Clear</Link>}
      </form>
      <p className={styles.muted}>{visible.length} of {guides.length} {kind === "reading" ? "supporting readings" : "references"}</p>
      <ul className={styles.list}>
        {visible.map((guide) => (
          <li key={guide.slug} className={styles.row}>
            <div className={styles.rowTop}>
              <div className={styles.body}>
                <h2><Link href={`/guides/${guide.slug}`}>{guide.title}</Link></h2>
                <p className={styles.muted}>{guide.description}</p>
                <div className={styles.meta}><span>{guide.section === "DI" ? "Data Insights" : guide.section === "General" ? "Cross-section" : guide.section}</span><span>{kind === "reading" ? "Supporting reading" : "Reference"}</span><span>About {Math.max(1, Math.round(guide.content.split(/\s+/).length / 400))} pages</span></div>
              </div>
              <Link className={styles.rowLink} href={`/guides/${guide.slug}`}>Read<ArrowRight size={16} aria-hidden /></Link>
            </div>
          </li>
        ))}
      </ul>
      {visible.length === 0 && <div className={styles.empty}><h2>No matches</h2><Link className={styles.rowLink} href={route}>Clear filters<ArrowRight size={16} aria-hidden /></Link></div>}
      <nav aria-label="Reading indexes" className={styles.tabs}>
        <Link href="/learn/examples">Worked examples</Link><Link href="/learn/recall">Active recall</Link><Link href="/learn/drills">Micro-drills</Link>
      </nav>
    </div>
  )
}
