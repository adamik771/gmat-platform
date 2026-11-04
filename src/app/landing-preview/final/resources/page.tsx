import type { Metadata } from "next"
import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Footer from "@/components/shared/Footer"
import ResourcesLibrary from "@/components/marketing/ResourcesLibrary"
import CandidateHeader from "../CandidateHeader"
import base from "@/components/marketing/PublicLanding.module.css"
import styles from "@/components/marketing/Resources.module.css"
import lessonPreview from "../../../../../public/images/home/quant-lesson.jpg"

export const metadata: Metadata = {
  title: { absolute: "Resources preview | Zakarian GMAT" },
  description: "Internal preview of the complete Zakarian GMAT resource library: sample lessons, tools, templates, guides and external references.",
  alternates: { canonical: "/landing-preview/final/resources" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
  openGraph: { title: "Resources preview | Zakarian GMAT", description: "Internal design preview, not a live release.", url: "/landing-preview/final/resources", images: [{ url: lessonPreview.src, width: 760, height: 570, alt: "Actual public Quant lesson" }] },
  twitter: { title: "Resources preview | Zakarian GMAT", description: "Internal design preview, not a live release.", images: [lessonPreview.src] },
}

export default function ResourcesCandidate() {
  return <div className={`${base.page} ${styles.resources}`} id="top" data-resources-candidate="complete-library">
    <a href="#resources-main" className={base.skip}>Skip to content</a>
    <div className={base.previewNotice}><span>Internal Resources preview. Not live.</span><Link href="/resources">Open public Resources page <ArrowUpRight size={13} aria-hidden="true" /></Link></div>
    <CandidateHeader activePage="resources" />
    <main id="resources-main" tabIndex={-1}><ResourcesLibrary /></main>
    <Footer homeHref="/landing-preview/final" resourcesHref="/landing-preview/final/resources" />
  </div>
}
