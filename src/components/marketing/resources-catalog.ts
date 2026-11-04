import { BookA, BookOpen, Calculator, Calendar, ClipboardList, FileText, Globe, GraduationCap, Video, type LucideIcon } from "lucide-react"
import { POSTS as ALL_POSTS, type BlogPost } from "@/lib/blog-posts"

export interface ResourceCard {
  title: string
  description: string
  href: string
  cta: string
  icon: LucideIcon
  meta?: string
}


export const TOOLS: ResourceCard[] = [
  {
    title: "GMAT score converter",
    description:
      "Look up the official GMAC score range between the current GMAT (205-805) and the 10th Edition (200-800).",
    href: "/score-converter",
    cta: "Open the converter",
    icon: Calculator,
    meta: "Bidirectional · Official total-score ranges",
  },
  {
    title: "GMAT score by programme",
    description:
      "Published GMAT benchmarks for leading MBA, MiM, and finance master's programmes, with current-scale equivalents and source context.",
    href: "/score-by-school",
    cta: "Pick a school",
    icon: GraduationCap,
    meta: "20+ programs · M7 + T15 + Europe + Asia",
  },
  {
    title: "Study schedule generator",
    description:
      "Enter your exam date + weekly study hours and get a week-by-week plan. Optional: feed in section accuracies for a plan built around your weakest section.",
    href: "/study-schedule",
    cta: "Build a schedule",
    icon: Calendar,
    meta: "Personalised · Adjustable",
  },
  {
    title: "GMAT glossary",
    description:
      "Plain-English definitions for 36 terms that matter on the GMAT Focus Edition. Cross-linked to deeper strategy guides where they exist.",
    href: "/glossary",
    cta: "Open the glossary",
    icon: BookA,
    meta: "36 terms · Reference",
  },
]


export const CHECKLISTS: ResourceCard[] = [
  {
    title: "GMAT exam-day checklist",
    description:
      "Everything to do in the seven days before your GMAT, the night before, the morning of, and inside the test center. Printable single-page reference.",
    href: "/exam-day-checklist",
    cta: "Open the checklist",
    icon: ClipboardList,
    meta: "37 items · Printable",
  },
]


export const SAMPLES: ResourceCard[] = [
  {
    title: "Verbal sample — Verbal Foundations",
    description:
      "Two full readings: how GMAT Focus Verbal works and the active-reading method. From the Zakarian GMAT Verbal Foundations chapter.",
    href: "/sample-chapter",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "Verbal · 2 readings",
  },
  {
    title: "Quant sample — Algebra",
    description:
      "Two full readings: linear equations in one unknown + systems of equations. From the Zakarian GMAT chapter on Algebra.",
    href: "/sample-chapter/quant",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "Quant · 2 readings",
  },
  {
    title: "Data Insights sample — Data Sufficiency",
    description:
      "Two full readings: the five-answer framework + the rephrasing habit. From the Zakarian GMAT chapter on Data Sufficiency.",
    href: "/sample-chapter/data-insights",
    cta: "Read the sample",
    icon: BookOpen,
    meta: "DI · 2 readings",
  },
]


// Curated subset of blog posts featured on the resources page, in
// display order. Titles / dates / read times come from the canonical
// list in `@/lib/blog-posts` — only the description is overridden
// here so the cards render tighter copy than the /blog index.
const FEATURED: Array<{ slug: string; description: string }> = [
  {
    slug: "first-30-days-of-gmat-prep",
    description:
      "A baseline-first plan for your first month of preparation, with weekly study and review priorities.",
  },
  {
    slug: "gmat-prep-for-non-native-english-speakers",
    description:
      "The founder's preparation experience, with approaches to reading and reasoning as a non-native English speaker.",
  },
  {
    slug: "gmat-focus-vs-old-gmat-whats-changed",
    description:
      "How the current exam differs from the previous edition, section by section.",
  },
  {
    slug: "gmat-reading-comprehension-passage-strategy",
    description:
      "Reading for passage structure, argument, and purpose before evaluating the answer choices.",
  },
  {
    slug: "gmat-critical-reasoning-question-types-explained",
    description:
      "Recognise what a Critical Reasoning question asks and distinguish common answer traps.",
  },
  {
    slug: "gmat-data-sufficiency-strategy-guide",
    description:
      "The five answer choices, statement testing, and common Data Sufficiency mistakes.",
  },
  {
    slug: "gmat-data-insights-complete-guide",
    description:
      "Data Insights question formats, timing considerations, and ways to structure practice.",
  },
  {
    slug: "how-to-build-a-gmat-study-plan-that-works",
    description:
      "A baseline-first study plan and an example 16-week schedule you can adapt.",
  },
  {
    slug: "why-your-gmat-score-is-stuck",
    description:
      "The founder's account of progress plateaus and the role of focused mistake review.",
  },
]


export const POSTS: BlogPost[] = FEATURED.map((f) => {
  const post = ALL_POSTS.find((p) => p.slug === f.slug)
  if (!post) {
    throw new Error(`Featured resources slug not in BLOG_POSTS: ${f.slug}`)
  }
  return { ...post, description: f.description }
})


export interface ExternalResource {
  title: string
  publisher: string
  description: string
  href: string
  badge: string
  icon: LucideIcon
}


// Links to external material, not content incorporated into the paid course.
export const EXTERNAL: ExternalResource[] = [
  {
    title: "Official GMAT Starter Kit",
    publisher: "GMAC / mba.com",
    badge: "Official",
    icon: GraduationCap,
    href: "https://www.mba.com/exam-prep/gmat-official-starter-kit",
    description:
      "Two official practice exams and starter questions for establishing a baseline and checking readiness. Free mba.com account required.",
  },
  {
    title: "Official sample questions",
    publisher: "GMAC / mba.com",
    badge: "Official",
    icon: FileText,
    href: "https://www.mba.com/exams/gmat-exam/about/sample-questions",
    description:
      "Real retired Quant, Verbal, and Data Insights questions with official explanations.",
  },
  {
    title: "Official GMAT exam policies",
    publisher: "GMAC",
    badge: "Official",
    icon: FileText,
    href: "https://www.mba.com/exams/gmat-exam/register/exam-policies",
    description:
      "Current test-day rules, identification requirements and policies, with the official download linked by GMAC.",
  },
  {
    title: "Official GMAT on YouTube",
    publisher: "GMAC",
    badge: "Official",
    icon: Video,
    href: "https://www.youtube.com/user/OfficialGMAT",
    description:
      "Format, scoring, and registration walkthroughs from the people who write the exam.",
  },
  {
    title: "Khan Academy",
    publisher: "Khan Academy",
    badge: "Free / OER",
    icon: Video,
    href: "https://www.khanacademy.org/math",
    description:
      "Free math lessons and practice for arithmetic, algebra and other foundations used in Quant. Pick topics deliberately.",
  },
  {
    title: "GMAT Ninja free video course",
    publisher: "GMAT Ninja",
    badge: "Free",
    icon: Video,
    href: "https://www.gmatninja.com/free-gmat-course/",
    description:
      "Free GMAT video lessons organized by section, alongside the provider's separate paid offerings.",
  },
  {
    title: "GMAT Club forums",
    publisher: "GMAT Club",
    badge: "Free / Community",
    icon: Globe,
    href: "https://gmatclub.com/forum/",
    description:
      "GMAT discussions, preparation advice and community explanations. Check the source and quality of individual contributions.",
  },
  {
    title: "forall x: Calgary",
    publisher: "A. Thomas-Bolduc & R. Zach / Open Logic Project",
    badge: "CC BY 4.0",
    icon: BookOpen,
    href: "https://forallx.openlogicproject.org/",
    description:
      "An openly licensed introduction to logic that may be shared and adapted with attribution under CC BY 4.0.",
  },
  {
    title: "Critical Thinking, Logic, and Argument",
    publisher: "Athabasca University Press",
    badge: "CC BY-NC-SA 4.0",
    icon: BookOpen,
    href: "https://www.aupress.ca/app/uploads/OER-202403_Dayton_Rodier_2024-Critical-Thinking-Logic-and-Argument.pdf",
    description:
      "An external logic reference that may be shared noncommercially with attribution and share-alike. It is not incorporated into this paid course (PDF).",
  },
  {
    title: "Purdue OWL — Grammar",
    publisher: "Purdue University",
    badge: "Free",
    icon: BookA,
    href: "https://owl.purdue.edu/owl/general_writing/grammar/index.html",
    description:
      "The authoritative free grammar and mechanics reference for tightening your reading and writing.",
  },
]
