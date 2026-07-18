/**
 * First-48-hours guide — pure step derivation.
 *
 * Every step auto-completes from REAL recorded product state (official-exam
 * entries, practice_sessions, chapter_progress, review usage) — no manual
 * checkboxes. The single exception is the "two exam types" explainer, which
 * persists a bounded user_metadata scalar when the student expands it (and
 * also auto-completes once a baseline is logged, since taking an official
 * exam demonstrates the understanding).
 *
 * Kept as a pure function over a signals bag so it's unit-testable without
 * Supabase; the dashboard server component assembles the signals.
 */

export type First48StepKey =
  | "profile"
  | "exam-types"
  | "baseline"
  | "plan"
  | "first-activity"
  | "todays-focus"
  | "chapter-cycle"
  | "review-loop"

export interface First48Signals {
  /** Onboarding wizard completed, or target score + exam date both set. */
  profileSet: boolean
  /** user_metadata.guide_explainer_opened_at is set. */
  explainerOpened: boolean
  /** Official mba.com practice-exam scores entered. */
  officialExamCount: number
  /** Any chapter_progress entry exists. */
  chapterStarted: boolean
  /** Total practice_sessions rows. */
  practiceSessionCount: number
  /** Distinct local days with any activity (sessions or completions). */
  studyDayCount: number
  /** Chapters fully read (shared isChapterRead rule). */
  chaptersRead: number
  /** Any review-* session, or any error-log mistake marked reviewed. */
  reviewUsed: boolean
}

export interface First48Step {
  key: First48StepKey
  day: 1 | 2
  title: string
  detail: string
  href: string
  cta: string
  done: boolean
}

export function deriveFirst48Steps(s: First48Signals): First48Step[] {
  const baselineDone = s.officialExamCount > 0
  return [
    {
      key: "profile",
      day: 1,
      title: "Set up your profile",
      detail:
        "Target score, test date, weekly hours — two minutes, and every recommendation calibrates to you.",
      href: "/onboarding",
      cta: "Set up",
      done: s.profileSet,
    },
    {
      key: "exam-types",
      day: 1,
      title: "Know the two exam types",
      detail:
        "Official mba.com practice exams are your calibrated score signal; in-platform mocks are unlimited training reps. Thirty seconds to read.",
      href: "#",
      cta: "Read it",
      done: s.explainerOpened || baselineDone,
    },
    {
      key: "baseline",
      day: 1,
      title: "Take Official Practice Exam 1 and log the score",
      detail:
        "Free on mba.com. Full exam conditions, one sitting (~2 h 15 m), then enter the result on the Mock page — that one entry is your baseline.",
      href: "/mock",
      cta: "Open exam plan",
      done: baselineDone,
    },
    {
      key: "plan",
      day: 1,
      title: "See your study plan",
      detail:
        "It builds itself from your baseline the moment the score is saved — today's focus, weak areas, and a weekly cadence.",
      href: "/study-plan",
      cta: "Open plan",
      done: baselineDone,
    },
    {
      key: "first-activity",
      day: 1,
      title: "Do your first learning block",
      detail:
        "Start a chapter or run a short practice set. Whatever you miss starts feeding your review queue.",
      href: "/chapters",
      cta: "Start",
      done: s.chapterStarted || s.practiceSessionCount > 0,
    },
    {
      key: "todays-focus",
      day: 2,
      title: "Come back and follow Today's Focus",
      detail:
        "Day two is the habit rep: open the dashboard, do the one thing Today's Mission points at.",
      href: "/study-plan",
      cta: "Today's focus",
      done: s.studyDayCount >= 2,
    },
    {
      key: "chapter-cycle",
      day: 2,
      title: "Finish a chapter and its practice",
      detail:
        "Read one chapter end to end, then do its problem set. That read-then-drill cycle is the core loop of the whole course.",
      href: "/chapters",
      cta: "Open chapters",
      done: s.chaptersRead >= 1 && s.practiceSessionCount >= 1,
    },
    {
      key: "review-loop",
      day: 2,
      title: "Clear a miss in Review or the Error Log",
      detail:
        "After any wrong answer: tag why it happened in the Error Log, and the question resurfaces in Review at the right spacing. Clearing one miss completes this.",
      href: "/review",
      cta: "Open review",
      done: s.reviewUsed,
    },
  ]
}

export function first48Complete(steps: First48Step[]): boolean {
  return steps.every((s) => s.done)
}
