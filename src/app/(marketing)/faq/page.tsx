import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import SectionWrapper from "@/components/shared/SectionWrapper"
import FAQAccordion from "@/components/marketing/FAQAccordion"

export const metadata: Metadata = {
  title: "FAQ — Zakarian GMAT",
  description: "Frequently asked questions about Zakarian GMAT prep.",
}

const categories = [
  {
    title: "About the Course",
    items: [
      {
        question: "Who is this course designed for?",
        answer:
          "This system is built for serious MBA candidates who want a structured, data-driven approach — not random videos. It's especially effective for non-native English speakers and people without a technical background who struggle with Quant.",
      },
      {
        question: "Do I need a math background?",
        answer:
          "No. Adam (the founder) has no engineering background and scored Q88. The Quant curriculum starts from first principles. The issue is almost never knowledge — it's strategy and systematic review.",
      },
      {
        question: "How long does the course take?",
        answer:
          "The full curriculum is designed for a 16-week timeline at ~90 minutes/day, 5 days/week. You can compress or extend based on your exam date. Most students see meaningful score movement within 4–6 weeks.",
      },
      {
        question: "Can I use this alongside TTP, Manhattan, or Magoosh?",
        answer:
          "Yes. Many students use this system as a review layer on top of content-heavy courses. The error log, analytics, and coaching sessions work well as a second pass after finishing a content course.",
      },
      {
        question: "What makes this different from other prep courses?",
        answer:
          "Most courses are content libraries. This is a system. The error log turns mistakes into data. The analytics show patterns over time. The coaching addresses root causes rather than re-teaching content you've already seen.",
      },
    ],
  },
  {
    title: "Score & Results",
    items: [
      {
        question: "What kind of score improvement can I expect?",
        answer:
          "Results vary based on starting score, consistency, and time invested. The average improvement among students who complete the curriculum is approximately +95 points. Students who also do weekly coaching average +120 points.",
      },
      {
        question: "How long until I see results?",
        answer:
          "Most students see measurable improvement in mock scores within 3–4 weeks of consistent daily practice. Hitting 700+ typically requires 10–16 weeks depending on starting score.",
      },
      {
        question: "What is the score guarantee?",
        answer:
          "The Intensive package includes a score guarantee. If you complete all 16 scheduled sessions, follow the study plan consistently, and don't hit your target score, we'll either continue coaching free or refund the full program cost.",
      },
      {
        question: "Do you guarantee a specific score?",
        answer:
          "We guarantee you'll hit your target score if you complete the Intensive program as designed. We can't guarantee outcomes for students who skip sessions or don't follow the study plan.",
      },
    ],
  },
  {
    title: "Technical",
    items: [
      {
        question: "What devices does the platform work on?",
        answer:
          "The platform is fully web-based and works on any modern browser — desktop, tablet, or mobile. The dashboard and lessons are responsive and optimized for all screen sizes.",
      },
      {
        question: "Can I download lessons for offline use?",
        answer:
          "Currently, lessons are streaming-only. We recommend downloading the PDF resources (formula sheets, templates) for offline reference.",
      },
      {
        question: "What happens to my account if I cancel?",
        answer:
          "Self-Study and Self-Study Plus are lifetime access — there's nothing to cancel. Coaching packages end after the program duration, but you retain access to the platform content.",
      },
    ],
  },
  {
    title: "Billing",
    items: [
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit and debit cards via Stripe. Bank transfer is available for Coaching and Intensive packages on request.",
      },
      {
        question: "Can I pay in installments?",
        answer:
          "Installment plans are available for the Coaching and Intensive packages. Contact us to set up a payment schedule.",
      },
      {
        question: "What is your refund policy?",
        answer:
          "Self-Study and Self-Study Plus include a 14-day money-back guarantee, no questions asked. Coaching packages are non-refundable after the first session, except under the Intensive score guarantee terms.",
      },
    ],
  },
]

export default function FAQPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }}>
      <SectionWrapper>
        <div className="text-center mb-16">
          <p
            className="text-xs font-semibold uppercase tracking-widest mb-4"
            style={{ color: "#C9A84C" }}
          >
            FAQ
          </p>
          <h1 className="text-4xl sm:text-5xl font-bold text-[#F0F0F0] mb-4">
            Questions answered.
          </h1>
          <p className="text-[#888888] max-w-md mx-auto">
            If you don't find what you're looking for, book a free 20-minute call.
          </p>
        </div>

        <div className="max-w-2xl mx-auto space-y-10">
          {categories.map((category) => (
            <div key={category.title}>
              <h2
                className="text-xs font-semibold uppercase tracking-widest mb-4"
                style={{ color: "#C9A84C" }}
              >
                {category.title}
              </h2>
              <FAQAccordion items={category.items} />
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-[#888888] mb-6">Still have questions?</p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            Contact us
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </SectionWrapper>
    </div>
  )
}
