import Link from "next/link"
import { ArrowRight, ClipboardList, Lock, NotebookPen } from "lucide-react"
import { createSupabaseServer } from "@/lib/supabase/server"
import { getUserState } from "@/lib/user-state"
import { MOCK_MODE_DEFS, type MockMode } from "@/lib/mock-modes"
import {
  parseOfficialExamEntries,
  type OfficialExamEntry,
} from "@/lib/official-exams"
import OfficialExamPlanClient from "./OfficialExamPlanClient"

export const metadata = {
  title: "Mock Exams",
}

/**
 * /mock — measurement hub.
 *
 * The measuring stick is the six official mba.com practice exams, taken
 * weekly under full exam conditions and logged in the Official Exam
 * Plan card. The site's own simulator stays available below as
 * unlimited extra reps — useful training volume, but not the calibrated
 * score signal.
 */

const CONDITIONS_CHECKLIST = [
  "Same start time as your real slot — if your exam is 9:00, sit down at 9:00.",
  "One sitting, official break rules only. No extra pauses, ever.",
  "Phone in another room. No music, no snacks at the desk mid-section.",
  "Scratch work only on the booklet — never loose paper.",
] as const

export default async function MockLandingPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  let examDate: string | null = null
  let targetScore: number | null = null
  let officialEntries: OfficialExamEntry[] = []
  let practiceAttemptsCount = 0
  let siteMockCount = 0

  if (user) {
    const state = await getUserState(supabase, user)
    const meta = user.user_metadata ?? {}
    examDate =
      typeof meta.exam_date === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(meta.exam_date)
        ? meta.exam_date
        : null
    targetScore = typeof meta.target_score === "number" ? meta.target_score : null
    officialEntries = parseOfficialExamEntries(state)

    // Two independent signals, fetched in parallel:
    //   - any practice attempts at all (gates the adaptive site-mock modes)
    //   - completed in-platform mocks, counted as distinct mock DATES (each
    //     sitting writes up to three mock-YYYY-MM-DD-{section} rows) — feeds
    //     the exam-roadmap recommendation.
    const [{ count }, { data: mockSlugRows }] = await Promise.all([
      supabase
        .from("practice_sessions")
        .select("id", { count: "exact", head: true })
        .eq("user_id", user.id)
        .not("slug", "like", "mock-%"),
      supabase
        .from("practice_sessions")
        .select("slug")
        .eq("user_id", user.id)
        .like("slug", "mock-%"),
    ])
    practiceAttemptsCount = count ?? 0
    const mockDates = new Set<string>()
    for (const r of mockSlugRows ?? []) {
      const m = /^mock-(\d{4}-\d{2}-\d{2})-/.exec(String(r.slug ?? ""))
      if (m) mockDates.add(m[1])
    }
    siteMockCount = mockDates.size
  }

  const adaptiveModesAvailable = practiceAttemptsCount > 0

  return (
    <div className="relative">
      <div
        className="absolute inset-x-0 top-0 h-[480px] pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 55% at 50% 0%, rgba(201,168,76,0.1) 0%, transparent 60%), radial-gradient(ellipse 55% 40% at 90% 20%, rgba(201,168,76,0.06) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none bg-grain opacity-[0.03] mix-blend-overlay"
        aria-hidden
      />

      <div className="relative max-w-4xl mx-auto space-y-12">
        {/* HERO — officials are the measuring stick; the simulator is
            for extra reps. */}
        <section className="pt-4">
          <div className="flex items-center gap-3 mb-5">
            <span
              className="h-px w-10"
              style={{
                background:
                  "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
              }}
              aria-hidden
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Mock exams
            </p>
            <div
              className="h-px flex-1"
              style={{
                background:
                  "linear-gradient(to right, rgba(201,168,76,0.3), transparent)",
              }}
              aria-hidden
            />
          </div>
          <h1 className="font-display text-4xl sm:text-5xl font-semibold text-[#F0F0F0] tracking-[-0.02em] leading-[1.05]">
            Measure on the{" "}
            <span className="font-display-italic" style={{ color: "#C9A84C" }}>
              official
            </span>{" "}
            scale.
          </h1>
          <p className="text-[15px] leading-[1.75] text-[#C0C0C0] mt-5 max-w-2xl">
            The six official mba.com practice exams are your measuring
            stick — real GMAC scoring, real adaptive engine, one per week
            under full exam conditions. Log every result below. Our own
            simulator stays available further down for unlimited extra
            reps between officials.
          </p>
        </section>

        {/* PRIMARY — Official Exam Plan. */}
        <OfficialExamPlanClient
          examDate={examDate}
          entries={officialEntries}
          targetScore={targetScore}
          siteMockCount={siteMockCount}
        />

        {/* EXAM KIT + CONDITIONS — static advice card. */}
        <ExamKitCard />

        {/* SECONDARY — site simulator modes. */}
        <SiteMocksSection adaptiveModesAvailable={adaptiveModesAvailable} />
      </div>
    </div>
  )
}

/**
 * Exam-kit + conditions card. Test centers hand out a laminated
 * 5-sheet scratch booklet and a wet-erase pen — training with anything
 * else builds the wrong scratch-work habits.
 */
function ExamKitCard() {
  return (
    <section className="rounded-2xl border border-white/[0.06] bg-[#0D0D0D] p-6 sm:p-8">
      <div className="grid lg:grid-cols-2 gap-7 lg:gap-10">
        <div className="min-w-0">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold mb-2"
            style={{ color: "#C9A84C" }}
          >
            Exam kit
          </p>
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#F0F0F0] tracking-[-0.01em] leading-[1.1] mb-3">
            Train with test-day tools.
          </h2>
          <div className="flex items-start gap-3">
            <span
              className="inline-flex items-center justify-center w-10 h-10 rounded-xl flex-shrink-0"
              style={{
                backgroundColor: "rgba(201,168,76,0.12)",
                border: "1px solid rgba(201,168,76,0.28)",
              }}
            >
              <NotebookPen className="w-4 h-4" style={{ color: "#C9A84C" }} />
            </span>
            <p className="text-[13px] text-[#C0C0C0] leading-relaxed">
              Test centers give you a laminated 5-sheet scratch booklet and
              a wet-erase pen — no pencil, no eraser, no loose paper. Buy
              the same kit (search &quot;GMAT scratch pad + marker&quot; on
              Amazon) and use it for every practice session from now on.
              Page management and pen handling are trained skills; pencil
              and paper train the wrong ones.
            </p>
          </div>
        </div>
        <div
          className="rounded-xl border p-5 self-start"
          style={{
            borderColor: "rgba(255,255,255,0.06)",
            backgroundColor: "rgba(255,255,255,0.012)",
          }}
        >
          <div className="flex items-center gap-2 mb-3">
            <ClipboardList
              className="w-3.5 h-3.5"
              style={{ color: "#C9A84C" }}
            />
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "#C9A84C" }}
            >
              Full-conditions checklist
            </p>
          </div>
          <ul className="space-y-2.5">
            {CONDITIONS_CHECKLIST.map((item) => (
              <li
                key={item}
                className="flex items-start gap-2 text-[12px] leading-snug"
                style={{ color: "rgba(192,192,192,0.85)" }}
              >
                <span
                  className="w-3.5 h-3.5 rounded-full border flex-shrink-0 mt-0.5"
                  style={{ borderColor: "rgba(255,255,255,0.18)" }}
                  aria-hidden
                />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

/**
 * Site simulator — the internal mock modes grid, demoted to secondary.
 * Adaptive variants (weak-area / mixed-review) unlock once the student
 * has any logged practice attempts.
 */
function SiteMocksSection({
  adaptiveModesAvailable,
}: {
  adaptiveModesAvailable: boolean
}) {
  const SECTION_TIMING: MockMode[] = ["quant-only", "verbal-only", "di-only"]
  const TARGETED: MockMode[] = ["hard", "weak", "mixed-review"]

  const modeMeta: Record<
    MockMode,
    { bestWhen: string; locked: boolean; lockReason: string | null }
  > = {
    full: {
      bestWhen: "You want a full-length rep between official exams.",
      locked: false,
      lockReason: null,
    },
    "quant-only": {
      bestWhen: "Quant pacing or stamina is the score-limiter.",
      locked: false,
      lockReason: null,
    },
    "verbal-only": {
      bestWhen: "Verbal needs argument-recognition stamina under timing.",
      locked: false,
      lockReason: null,
    },
    "di-only": {
      bestWhen: "DI is the section that drops first under fatigue.",
      locked: false,
      lockReason: null,
    },
    hard: {
      bestWhen: "Foundations are stable; you're chasing the elite band.",
      locked: false,
      lockReason: null,
    },
    weak: {
      bestWhen: "Practice data exists to identify your weak sub-skills.",
      locked: !adaptiveModesAvailable,
      lockReason: adaptiveModesAvailable
        ? null
        : "Locked until you've logged some practice attempts.",
    },
    "mixed-review": {
      bestWhen: "Your spaced-review queue has overdue items.",
      locked: !adaptiveModesAvailable,
      lockReason: adaptiveModesAvailable
        ? null
        : "Locked until you've logged some practice attempts.",
    },
  }

  const renderCard = (id: MockMode) => {
    const def = MOCK_MODE_DEFS[id]
    const meta = modeMeta[id]
    if (meta.locked) {
      return (
        <div
          key={id}
          className="block p-5 rounded-2xl border"
          style={{
            borderColor: "rgba(255,255,255,0.05)",
            backgroundColor: "rgba(255,255,255,0.012)",
          }}
        >
          <div className="flex items-baseline justify-between gap-3 mb-3">
            <p
              className="text-[10px] uppercase tracking-[0.22em] font-semibold"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              {def.label}
            </p>
            <Lock
              className="w-3 h-3"
              style={{ color: "rgba(255,255,255,0.3)" }}
              aria-hidden
            />
          </div>
          <p
            className="text-[13px] tracking-tight font-semibold mb-2 leading-snug"
            style={{ color: "rgba(240,240,240,0.6)" }}
          >
            {def.shortDescription}
          </p>
          <p
            className="text-[12px] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.4)" }}
          >
            {meta.lockReason}
          </p>
        </div>
      )
    }
    return (
      <Link
        key={id}
        href={`/mock/run?mode=${id}`}
        className="group block p-5 rounded-2xl border border-white/[0.08] bg-[#0D0D0D] transition-all duration-300 hover:border-white/[0.14] hover:-translate-y-0.5"
        style={{ boxShadow: "inset 0 1px 0 rgba(255,255,255,0.03)" }}
      >
        <div className="flex items-baseline justify-between gap-3 mb-3">
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            {def.label}
          </p>
          <p className="text-[11px] text-[#888888] tracking-tight tabular-nums">
            {def.totalQuestionsHint} Q · {def.totalMinutesHint} min
          </p>
        </div>
        <p className="text-[13px] text-[#F0F0F0] tracking-tight font-semibold mb-2 leading-snug">
          {def.shortDescription}
        </p>
        <p className="text-[12px] text-[#888888] leading-relaxed line-clamp-2">
          {def.description}
        </p>
        {meta.bestWhen && (
          <p
            className="text-[11px] mt-3 leading-snug"
            style={{ color: "rgba(201,168,76,0.7)" }}
          >
            Best when: {meta.bestWhen}
          </p>
        )}
        <div
          className="flex items-center gap-1.5 mt-4 text-[12px] font-semibold tracking-tight transition-transform group-hover:translate-x-0.5"
          style={{ color: "#C9A84C" }}
        >
          Start
          <ArrowRight className="w-3.5 h-3.5" />
        </div>
      </Link>
    )
  }

  return (
    <section className="space-y-7">
      <div>
        <div className="flex items-center gap-3 mb-3">
          <span
            className="h-px w-8"
            style={{
              background:
                "linear-gradient(to right, transparent, rgba(201,168,76,0.6))",
            }}
            aria-hidden
          />
          <p
            className="text-[10px] uppercase tracking-[0.22em] font-semibold"
            style={{ color: "#C9A84C" }}
          >
            Site mocks — unlimited extra reps
          </p>
        </div>
        <p className="text-[13px] text-[#C0C0C0] leading-relaxed max-w-2xl">
          These are simulations on our question bank — great for pacing
          reps, stamina, and weakness repair between officials. First
          attempts on the official exams above are the calibrated score
          signal; treat site-mock scores as training feedback, not
          predictions.
        </p>
      </div>

      {/* Full-length simulation */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
          Full simulation
        </p>
        <div className="grid grid-cols-1 gap-3">{renderCard("full")}</div>
      </div>

      {/* Section timing */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
          Section timing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {SECTION_TIMING.map(renderCard)}
        </div>
      </div>

      {/* Targeted training */}
      <div>
        <p className="text-[11px] uppercase tracking-[0.22em] font-semibold text-[#888888] mb-3">
          Targeted training
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {TARGETED.map(renderCard)}
        </div>
      </div>

      <p className="text-[12px] text-[#555555]">
        Past site-mock results and section breakdowns live in the{" "}
        <Link
          href="/mock/report"
          className="font-semibold transition-colors hover:opacity-80"
          style={{ color: "#888888" }}
        >
          mock report
        </Link>
        .
      </p>
    </section>
  )
}
