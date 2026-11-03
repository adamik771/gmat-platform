import type { Metadata } from "next"
import Footer from "@/components/shared/Footer"
import PublicMotion from "@/components/marketing/PublicMotion"
import TeachingHomepage from "@/components/marketing/TeachingHomepage"
import CandidateHeader from "./CandidateHeader"
import base from "@/components/marketing/PublicLanding.module.css"
import styles from "@/components/marketing/TeachingFirst.module.css"
import lessonImage from "../../../../public/images/home/quant-lesson.jpg"

export const metadata: Metadata = {
  title: { absolute: "Zakarian GMAT | Teaching-first homepage preview" },
  description: "Read, try and inspect actual Zakarian GMAT teaching before choosing a course. Internal local preview.",
  alternates: { canonical: "/landing-preview/final" },
  robots: { index: false, follow: false, googleBot: { index: false, follow: false, noimageindex: true } },
  openGraph: { title: "Zakarian GMAT | Homepage preview", description: "A local teaching-first design preview.", url: "/landing-preview/final", images: [{ url: lessonImage.src, width: lessonImage.width, height: lessonImage.height, alt: "An actual Zakarian GMAT lesson" }] },
  twitter: { title: "Zakarian GMAT | Homepage preview", description: "A local teaching-first design preview.", images: [lessonImage.src] },
}

export default function FinalHomepageCandidate() {
  return <div className={`${base.page} ${styles.page}`} id="top" data-homepage-candidate="teaching-first">
    <a href="#candidate-main" className={base.skip}>Skip to content</a>
    <CandidateHeader className={styles.header} />
    <PublicMotion>
      <main id="candidate-main" tabIndex={-1}><TeachingHomepage /></main>
    </PublicMotion>
    <Footer homeHref="/landing-preview/final" resourcesHref="/landing-preview/final/resources" />
  </div>
}
