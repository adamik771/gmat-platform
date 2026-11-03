import Image from "next/image"
import Link from "next/link"
import { ArrowRight, ArrowUpRight, BookOpen, Clock, Download } from "lucide-react"
import LeadCapture from "@/components/marketing/LeadCapture"
import { CHECKLISTS, EXTERNAL, POSTS, SAMPLES, TOOLS, type ResourceCard } from "@/components/marketing/resources-catalog"
import { PAYWALL_ENABLED, TRIAL_DAYS } from "@/lib/entitlements"
import base from "./PublicLanding.module.css"
import styles from "./Resources.module.css"
import lessonPreview from "../../../public/images/home/quant-lesson.jpg"

const categories = [
  { label: "Sample lessons", id: "samples" },
  { label: "Tools", id: "tools" },
  { label: "Template", id: "templates" },
  { label: "Strategy guides", id: "guides" },
  { label: "External references", id: "external" },
]

function ToolLink({ card }: { card: ResourceCard }) {
  const Icon = card.icon
  return <Link href={card.href} className={styles.toolLink}>
    <Icon size={22} strokeWidth={1.5} aria-hidden="true" />
    <div><h3>{card.title}</h3><p>{card.description}</p>{card.meta && <span className={styles.meta}>{card.meta}</span>}<span className={styles.linkLabel}>{card.cta} <ArrowRight size={16} aria-hidden="true" /></span></div>
  </Link>
}

export default function ResourcesLibrary() {
  return <>
      <section className={styles.intro} aria-labelledby="resources-title"><div className={base.container}>
        <p className={base.eyebrow}>Zakarian GMAT / The resource library</p>
        <h1 id="resources-title">Free GMAT resources.</h1>
        <p className={styles.lede}>Real lessons, practical tools and strategy guides for the work in front of you.</p>
        <p className={styles.accessNote}>Browse without an account. The template download asks for your email; study emails are optional.</p>
        <nav aria-label="Resource categories" className={styles.categoryNav}>{categories.map(category => <a href={`#${category.id}`} key={category.id}>{category.label} <ArrowRight size={14} aria-hidden="true" /></a>)}</nav>
      </div></section>

      <section id="samples" className={styles.lessonsSection} aria-labelledby="lessons-title"><div className={base.container}>
        <div className={styles.sectionHeading}><div><p className={base.eyebrow}>01 / Try the teaching</p><h2 id="lessons-title">Read a real lesson.</h2></div><p>One sample from each section. Each includes two full readings from the course, with no account needed.</p></div>
        <div className={styles.teachingGrid}>
          <figure className={styles.lessonImage}><Link href="/sample-chapter/quant" aria-label="Open the actual Quant lesson shown in this image"><Image src={lessonPreview} width={760} height={570} alt="Actual public Algebra lesson showing linear equations and systems, its introduction and the first reading." sizes="(max-width: 600px) calc(100vw - 40px), (max-width: 900px) calc(100vw - 80px), 480px" preload /></Link><figcaption><BookOpen size={15} aria-hidden="true" /> Inside the Quant sample. Actual course material.</figcaption></figure>
          <ul className={styles.sampleList}>{SAMPLES.map(sample => <li key={sample.href}><Link href={sample.href}><span className={styles.meta}>{sample.meta}</span><h3>{sample.title}</h3><p>{sample.description}</p><span className={styles.linkLabel}>{sample.cta} <ArrowUpRight size={16} aria-hidden="true" /></span></Link></li>)}</ul>
        </div>
      </div></section>

      <section id="tools" className={styles.toolsSection} aria-labelledby="tools-title"><div className={base.container}>
        <div className={styles.sectionHeading}><div><p className={base.eyebrow}>02 / Plan your preparation</p><h2 id="tools-title">Give the next step<br />some structure.</h2></div><p>Check score ranges, explore programme benchmarks, build a schedule or look up a term. All four tools work without an account.</p></div>
        <ul className={styles.toolsGrid}>{TOOLS.map(card => <li key={card.href}><ToolLink card={card} /></li>)}</ul>
        <div id="checklists" className={styles.checklist}>{CHECKLISTS.map(card => <ToolLink key={card.href} card={card} />)}</div>
      </div></section>

      <section id="templates" className={styles.templateSection} aria-labelledby="template-title"><div className={`${base.container} ${styles.templateGrid}`}>
        <div><p className={base.eyebrow}>03 / Keep the useful mistakes</p><h2 id="template-title">The error-log spreadsheet.</h2><p>A six-tag mistake log in CSV format for Google Sheets, Excel or Numbers. Record why a question went wrong and revisit the patterns.</p><p>Includes example rows and room for your own entries. The download link appears after submission; marketing consent is not required.</p><span className={styles.fileNote}><Download size={17} aria-hidden="true" /> CSV / Google Sheets / Excel / Numbers</span></div>
        <div className={styles.templateForm}><LeadCapture source="resources" leadMagnet="error-log-template" eyebrow="" headline="Get the template" description="Enter your email for the download link. Study emails are a separate, optional choice." ctaLabel="Get the template" footnote="Download access does not require marketing consent." variant="compact" optInLabel="Also email me GMAT study tips and product updates. Optional; unsubscribe in one click." secondChancePitch="Would you also like the GMAT study notes? This is optional, and you can unsubscribe in one click." /></div>
      </div></section>

      <section id="guides" className={styles.guidesSection} aria-labelledby="guides-title"><div className={base.container}>
        <div className={styles.sectionHeading}><div><p className={base.eyebrow}>04 / Work on a specific problem</p><h2 id="guides-title">Read what you need.<br />Come back when it matters.</h2></div><p>{POSTS.length} selected guides on preparation, section strategy and the founder&apos;s experience. The full articles remain available from each link.</p></div>
        <ol className={styles.guideList}>{POSTS.map((post, index) => <li key={post.slug}><Link href={`/blog/${post.slug}`}><span className={styles.guideNumber} aria-hidden="true">{String(index + 1).padStart(2, "0")}</span><div><h3>{post.title}</h3><p>{post.description}</p></div><span className={styles.guideTime}><Clock size={14} aria-hidden="true" /> {post.readMinutes} min <ArrowUpRight size={18} aria-hidden="true" /></span></Link></li>)}</ol>
        <Link href="/blog" className={`${base.textLink} ${styles.allGuides}`}>See the full blog <ArrowRight size={17} aria-hidden="true" /></Link>
      </div></section>

      <section id="external" className={styles.externalSection} aria-labelledby="external-title"><div className={base.container}>
        <div className={styles.sectionHeading}><div><p className={base.eyebrow}>05 / Beyond this site</p><h2 id="external-title">Useful references,<br />wherever they live.</h2></div><p>Official exam information, free lessons and deeper reading. These are links to other providers, not material included in the paid course.</p></div>
        <p className={styles.externalNote}>External links open in a new tab. Some providers require an account or offer separate paid products. Check the publisher&apos;s current terms and the licence shown for each text.</p>
        <ul className={styles.externalGrid}>{EXTERNAL.map(resource => { const Icon = resource.icon; return <li key={resource.href}><a href={resource.href} target="_blank" rel="noopener noreferrer"><div className={styles.externalTop}><Icon size={20} strokeWidth={1.5} aria-hidden="true" /><span>{resource.badge}</span><ArrowUpRight size={17} aria-hidden="true" /></div><h3>{resource.title}<span className={styles.srOnly}> (opens in a new tab)</span></h3><span className={styles.publisher}>{resource.publisher}</span><p>{resource.description}</p></a></li> })}</ul>
      </div></section>

      <section className={base.finalSection} aria-labelledby="resources-final-title"><div className={base.container}><p className={base.eyebrow}>When you want it all in one place</p><h2 id="resources-final-title">Keep learning, practice<br />and review together.</h2><p>Explore the full course and try the study routine with your own account. No card required.</p><div className={base.actions}><Link href="/signup" className={base.goldButton}>Start {TRIAL_DAYS}-day trial <ArrowRight size={18} aria-hidden="true" /></Link><Link href="/pricing" className={base.lightLink}>See plans and payment options <ArrowUpRight size={17} aria-hidden="true" /></Link></div>{!PAYWALL_ENABLED && <p className={base.finalNote}>Early-release access currently continues beyond {TRIAL_DAYS} days. Online checkout is not yet open; paid availability and payment options are confirmed with Adam.</p>}</div></section>
  </>
}
