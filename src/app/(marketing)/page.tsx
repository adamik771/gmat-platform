import type { Metadata } from "next"
import TrackView from "@/components/analytics/TrackView"
import TeachingHomepage from "@/components/marketing/TeachingHomepage"
import base from "@/components/marketing/PublicLanding.module.css"
import styles from "@/components/marketing/TeachingFirst.module.css"
import lessonImage from "../../../public/images/home/quant-lesson.jpg"

const title = "Zakarian GMAT | GMAT preparation"
const description = "Try real Quant, Verbal and Data Insights questions with full explanations, then explore the course. GMAT preparation for MBA, MiM and finance master's applicants."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/" },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, url: "/",
    images: [{ url: lessonImage.src, width: lessonImage.width, height: lessonImage.height, alt: "An actual Zakarian GMAT lesson" }],
  },
  twitter: { title, description, images: [lessonImage.src] },
}

export default function HomePage() {
  return <div className={`${base.page} ${styles.page} ${base.publicPage}`} id="top">
    <TrackView event="landing_view" />
    <TeachingHomepage />
  </div>
}
