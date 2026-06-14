import type { Metadata } from "next"
import Link from "next/link"
import {
  ArrowRight,
  CheckSquare,
  ClipboardList,
  Printer,
} from "lucide-react"
import JsonLd from "@/components/seo/JsonLd"
import { softwareApplicationLd } from "@/lib/structured-data"
import Breadcrumbs from "@/components/seo/Breadcrumbs"

export const metadata: Metadata = {
  title: "GMAT Exam-Day Checklist",
  description:
    "Everything to do in the seven days before your GMAT, the night before, the morning of, and inside the test center. Printable single-page checklist plus the longer-form rationale for each item.",
  alternates: { canonical: "/exam-day-checklist" },
}

interface ChecklistItem {
  text: string
  detail?: string
}

interface ChecklistSection {
  id: string
  eyebrow: string
  title: string
  intro?: string
  items: ChecklistItem[]
}

const SECTIONS: ChecklistSection[] = [
  {
    id: "t-minus-7",
    eyebrow: "T-7 days",
    title: "Seven days out",
    intro:
      "The final week is for repair, not expansion. Your test-day score is mostly decided. The job now is to protect it.",
    items: [
      {
        text: "Take your final full-length mock — and only one.",
        detail:
          "Mocks within five days of the exam create more anxiety than they reveal. One mock at T-7 to T-10 is the right cadence.",
      },
      {
        text: "Re-pace your sleep schedule to match exam-day wake time.",
        detail:
          "Two nights of waking at your exam-time within the final week resets your circadian baseline. Don't change anything two nights before.",
      },
      {
        text: "Confirm your test center reservation.",
        detail:
          "Log into mba.com, verify the date, time, and location. Print the confirmation if your testing center accepts it.",
      },
      {
        text: "Plan the route to the test center.",
        detail:
          "If you've never been there, drive (or take transit) once at the same time of day. Note parking, building entrance, and security.",
      },
      {
        text: "Identify the ID you'll bring (passport / driver's license / national ID).",
        detail:
          "Must match the name on your mba.com profile exactly. If there's a mismatch, fix it now — same-day fixes don't exist.",
      },
    ],
  },
  {
    id: "t-minus-3",
    eyebrow: "T-3 days",
    title: "Three days out",
    intro:
      "Switch from study mode to taper mode. Light review only. The brain consolidates during low-load days.",
    items: [
      {
        text: "Review your error log's top three patterns — one read-through, no drills.",
        detail:
          "If you logged honestly, the patterns are visible. Read them once. Don't try to 'fix' anything new at this point.",
      },
      {
        text: "Re-read one strategy summary per section.",
        detail:
          "Quant: per-question soft cap rule. Verbal: stem-first reading order. DI: read-the-tab-on-demand for MSR.",
      },
      {
        text: "Pack your test-day bag.",
        detail:
          "ID, admission ticket (if you printed one), water bottle, light snack, jacket or layer, watch (only if non-electronic — most centers prohibit smartwatches in the testing room).",
      },
      {
        text: "Set out exam-day clothes.",
        detail:
          "Comfortable, layered. Test centers run cold. The decision-fatigue principle: any choice you can make now is one less to make at 7am.",
      },
      {
        text: "Stop drinking caffeine after 2pm.",
        detail:
          "Even moderate caffeine within 6-8 hours of bedtime degrades sleep architecture, which directly affects working memory the next day.",
      },
    ],
  },
  {
    id: "t-minus-1",
    eyebrow: "T-1 day",
    title: "Day before the exam",
    intro:
      "No studying. The single most counter-productive thing you can do today is one more practice question.",
    items: [
      {
        text: "Don't open any GMAT material.",
        detail:
          "Your score on test day is set. Any anxiety triggered by a missed question 24 hours before the exam costs you points and gains you nothing.",
      },
      {
        text: "Take a 30-45 minute walk.",
        detail:
          "Light cardio reduces cortisol. Skip intense exercise — soreness affects sleep.",
      },
      {
        text: "Have a normal-sized dinner you've eaten before.",
        detail:
          "Not the night to try a new restaurant. Predictable food, predictable digestion.",
      },
      {
        text: "Confirm your alarm — set two if you're nervous.",
        detail:
          "Set one main and one backup, both 5 minutes apart. Sleep is more restful when you're not anxious about waking.",
      },
      {
        text: "Bedtime: 7.5-8 hours before your alarm.",
        detail:
          "Don't try to sleep early — go to bed at your usual time. Forced early sleep almost never works and often backfires.",
      },
    ],
  },
  {
    id: "morning-of",
    eyebrow: "Exam morning",
    title: "The morning of",
    intro:
      "You can't cram. You can prime. Light, predictable activation beats high-cortisol urgency.",
    items: [
      {
        text: "Wake at your planned time.",
        detail:
          "Don't snooze. Get up immediately when the alarm goes.",
      },
      {
        text: "Have a real breakfast.",
        detail:
          "Protein + complex carbs. Avoid sugar crashes — no pastries-only breakfasts. Eat what you usually eat.",
      },
      {
        text: "Drink water but don't over-hydrate.",
        detail:
          "Standard glass of water with breakfast plus one before leaving. Test breaks are short; you don't want to lose minutes to the bathroom.",
      },
      {
        text: "Re-read your top three error log patterns one final time.",
        detail:
          "60 seconds. Not for the content — for the priming effect. Then close the document.",
      },
      {
        text: "Visualise the section order you've decided on.",
        detail:
          "30 seconds. Imagine starting Quant (or whichever you've chosen first) calmly. Visualisation reduces start-of-section spike.",
      },
      {
        text: "Leave 20 minutes earlier than you think you need to.",
        detail:
          "Buffer for traffic, parking, security, and check-in. The cost of arriving early: a few minutes in a quiet lobby. The cost of arriving late: rescheduled exam.",
      },
    ],
  },
  {
    id: "at-the-center",
    eyebrow: "At the test center",
    title: "At the test center",
    intro:
      "You have arrived 15 minutes early. From here, the procedure is the same at every test center.",
    items: [
      {
        text: "Check in at reception with your ID.",
        detail:
          "ID must match your mba.com name exactly. They will photograph you, take a palm or fingerprint scan, and issue a locker key.",
      },
      {
        text: "Empty your pockets.",
        detail:
          "Phones, watches (smart or otherwise unless explicitly permitted), keys, wallet, snacks — all in the locker. You'll have access to the locker only during your scheduled break.",
      },
      {
        text: "Use the bathroom before being seated.",
        detail:
          "Once seated, leaving costs you time on the clock. The 10-minute optional break between sections is the only no-cost opportunity.",
      },
      {
        text: "When you're seated, take 30 seconds to settle.",
        detail:
          "Adjust the chair. Set scratchpad and pen. Breathe. The proctor will start the section when you're ready — you control the timing of the start, not them.",
      },
      {
        text: "Confirm your section order on the first screen.",
        detail:
          "You chose this in advance — Quant first, DI second, Verbal third (or whatever order works for you). The exam will ask you to confirm before the timer starts.",
      },
    ],
  },
  {
    id: "during-the-exam",
    eyebrow: "During the exam",
    title: "Inside the section timer",
    intro:
      "Per-section pacing rules to repeat to yourself between questions.",
    items: [
      {
        text: "Watch the clock at fixed intervals — not constantly.",
        detail:
          "Every 5 questions, glance up. Constant clock-watching is a focus leak.",
      },
      {
        text: "If you cross your per-question soft cap, flag and move.",
        detail:
          "Quant: 2:00. Verbal: 1:55. DI: 2:15 (soft cap; MSR sets get more total time). The cost of staying past the cap is the next question, not this one.",
      },
      {
        text: "Use your three section bookmarks deliberately.",
        detail:
          "Save them for genuine 50/50 decisions, not blind guesses. Revisit at the end of the section if time permits.",
      },
      {
        text: "On the 10-minute break: water, bathroom, walk, breathe.",
        detail:
          "Do NOT think about the section you just finished. It's done. The break is for resetting, not for review.",
      },
      {
        text: "If you panic mid-section: 30-second box breath.",
        detail:
          "Inhale 4, hold 4, exhale 4, hold 4. Twice. Brings cortisol down enough to keep working. Use sparingly — the section clock keeps running.",
      },
      {
        text: "Don't try to estimate your score during the exam.",
        detail:
          "It's wrong. Adaptive testing means a hard question is a sign you're doing well, not poorly. Trust the process and answer the question in front of you.",
      },
    ],
  },
  {
    id: "after",
    eyebrow: "After the exam",
    title: "After you finish",
    intro:
      "The right post-exam behaviour matters more than people think.",
    items: [
      {
        text: "Decide your unofficial score acceptance immediately.",
        detail:
          "GMAT Focus shows you the unofficial score on screen and asks whether you accept or cancel. You have two minutes. Practice this decision in advance — usually accept unless the score is far below your historical mocks.",
      },
      {
        text: "Don't post your score on Reddit / GMAT Club within 24 hours.",
        detail:
          "Wait. The first 24 hours after the exam are when emotional volatility is highest. Reactions you have now don't predict what you'll feel in a week.",
      },
      {
        text: "The official score report arrives within 7-20 days.",
        detail:
          "Includes percentiles, per-section breakdown, and the option to send scores to schools. Use this period to actually compare against your school targets.",
      },
      {
        text: "If the score is below target, wait at least one week before deciding on a retake.",
        detail:
          "Decisions made in the 24 hours after the exam are usually wrong in both directions — over-anxious students retake when they shouldn't, and over-confident students don't retake when they should.",
      },
    ],
  },
]

const TOTAL_ITEMS = SECTIONS.reduce((acc, s) => acc + s.items.length, 0)

export default function ExamDayChecklistPage() {
  return (
    <div style={{ backgroundColor: "#0A0A0A" }} className="checklist-root">
      <JsonLd
        data={softwareApplicationLd({
          name: "GMAT Exam-Day Checklist",
          description:
            "Printable single-page checklist covering the 7-day window before the GMAT, the night before, the morning of, and inside the test center.",
          path: "/exam-day-checklist",
        })}
      />
      <div className="max-w-3xl mx-auto pt-24 px-4 sm:px-6 no-print">
        <Breadcrumbs
          items={[
            { label: "Home", href: "/" },
            { label: "Resources", href: "/resources" },
            { label: "Exam-Day Checklist", href: "/exam-day-checklist" },
          ]}
        />
      </div>
      {/* Hero */}
      <section className="relative pt-8 pb-12 overflow-hidden no-print">
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background:
              "radial-gradient(ellipse 90% 55% at 50% -5%, rgba(201,168,76,0.16) 0%, transparent 60%)",
          }}
          aria-hidden
        />
        <div className="relative max-w-3xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 mb-5">
            <ClipboardList className="w-4 h-4" style={{ color: "#C9A84C" }} />
            <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold">
              Free checklist
            </p>
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05] mb-5">
            GMAT exam-day{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              checklist.
            </span>
          </h1>
          <p className="text-[16px] sm:text-[17px] text-[#C0C0C0] leading-relaxed max-w-2xl mx-auto mb-7">
            Everything to do in the seven days before your GMAT, the night
            before, the morning of, and inside the test center. Each item
            has a one-line reason &mdash; do it, skip it knowingly, but
            don&apos;t skip it by accident. {TOTAL_ITEMS} items across{" "}
            {SECTIONS.length} stages.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href="javascript:window.print()"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              <Printer className="w-4 h-4" />
              Print or save as PDF
            </a>
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              Read a free sample chapter
            </Link>
          </div>
        </div>
      </section>

      {/* Checklist body */}
      <article className="max-w-3xl mx-auto px-4 sm:px-6 pb-20">
        {SECTIONS.map((section, sIdx) => (
          <section key={section.id} className="mt-12 first:mt-0">
            <div className="flex items-baseline gap-3 mb-3 flex-wrap">
              <span
                className="font-display text-[10px] font-semibold uppercase tracking-[0.22em]"
                style={{ color: "#C9A84C" }}
              >
                {section.eyebrow}
              </span>
              <span className="text-[10px] text-[#666666] uppercase tracking-[0.18em]">
                Stage {sIdx + 1} of {SECTIONS.length}
              </span>
            </div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-3">
              {section.title}
            </h2>
            {section.intro && (
              <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-6 max-w-2xl">
                {section.intro}
              </p>
            )}
            <ul className="space-y-3">
              {section.items.map((item, iIdx) => (
                <li
                  key={iIdx}
                  className="flex items-start gap-3 p-4 rounded-xl border border-white/[0.06] bg-[#0D0D0D] checklist-item"
                >
                  <CheckSquare
                    className="w-4 h-4 flex-shrink-0 mt-1"
                    style={{ color: "#C9A84C" }}
                    aria-hidden
                  />
                  <div className="flex-1">
                    <p className="text-[15px] text-[#F0F0F0] font-semibold leading-snug">
                      {item.text}
                    </p>
                    {item.detail && (
                      <p className="text-[13px] text-[#888888] leading-relaxed mt-1.5">
                        {item.detail}
                      </p>
                    )}
                  </div>
                </li>
              ))}
            </ul>
          </section>
        ))}

        {/* Final CTA */}
        <div
          className="mt-16 p-7 sm:p-9 rounded-2xl border no-print"
          style={{
            borderColor: "rgba(201,168,76,0.28)",
            backgroundColor: "#111111",
          }}
        >
          <p className="text-[10px] uppercase tracking-[0.22em] text-[#C9A84C] font-semibold mb-2">
            Before you get to exam day
          </p>
          <h2 className="font-display text-2xl font-semibold text-[#F0F0F0] tracking-tight leading-tight mb-4">
            Make sure you&apos;ve actually done the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              prep work.
            </span>
          </h2>
          <p className="text-[15px] text-[#C0C0C0] leading-relaxed mb-6 max-w-xl">
            The checklist above is the easy part. The hard part &mdash; the
            structured prep that gets you to a score you&apos;d be happy to
            sit for &mdash; is what the platform was built for. Free sample
            chapter, the full curriculum free, no card required.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/signup"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold transition-all duration-200 hover:opacity-90 hover:scale-[1.02]"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              Start Free
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/sample-chapter"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border transition-all duration-200"
              style={{
                borderColor: "rgba(201,168,76,0.32)",
                color: "#C9A84C",
                backgroundColor: "rgba(201,168,76,0.04)",
              }}
            >
              Read the free sample chapter
            </Link>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold border border-white/[0.1] text-[#C0C0C0] hover:border-white/[0.18] hover:text-[#F0F0F0] transition-all duration-200"
            >
              See all free resources
            </Link>
          </div>
        </div>
      </article>

      <style>{`
        /* Print-specific styles. Print to PDF in any browser produces
           a clean reference document the user can carry into exam week. */
        @media print {
          .no-print { display: none !important; }
          .checklist-root { background-color: white !important; color: black !important; }
          .checklist-root h1, .checklist-root h2 { color: black !important; }
          .checklist-root p { color: #222 !important; }
          .checklist-root .checklist-item {
            border: 1px solid #ccc !important;
            background-color: white !important;
            page-break-inside: avoid;
          }
          .checklist-root .checklist-item p { color: black !important; }
          @page { margin: 0.5in; }
        }
      `}</style>
    </div>
  )
}
