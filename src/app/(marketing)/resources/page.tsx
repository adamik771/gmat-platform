import type { Metadata } from "next"
import ResourcesLibrary from "@/components/marketing/ResourcesLibrary"
import base from "@/components/marketing/PublicLanding.module.css"
import styles from "@/components/marketing/Resources.module.css"
import lessonImage from "../../../../public/images/home/quant-lesson.jpg"

const title = "Free GMAT resources | Zakarian GMAT"
const description = "Explore full sample lessons, score tools, study guides and external references without an account. Get the error-log template by email; study emails are optional."

export const metadata: Metadata = {
  title: { absolute: title },
  description,
  alternates: { canonical: "/resources" },
  robots: { index: true, follow: true },
  openGraph: {
    title, description, url: "/resources",
    images: [{ url: lessonImage.src, width: lessonImage.width, height: lessonImage.height, alt: "Actual public Quant lesson" }],
  },
  twitter: { title, description, images: [lessonImage.src] },
}

export default function ResourcesPage() {
  return <div className={`${base.page} ${styles.resources} ${base.publicPage}`} id="top">
    <ResourcesLibrary />
  </div>
}
