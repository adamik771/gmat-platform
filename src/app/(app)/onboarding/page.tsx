import { redirect } from "next/navigation"
import { createSupabaseServer } from "@/lib/supabase/server"
import OnboardingClient from "./OnboardingClient"

export const metadata = {
  title: "Get started",
}

/**
 * /onboarding — multi-step intake wizard for new students.
 *
 * Captures the six datapoints that seed the rest of the engine:
 *   1. Target score (205-805)
 *   2. Test date (or "undecided")
 *   3. Current/recent score (or "no prior score")
 *   4. Available weekly study hours
 *   5. Weak areas (multi-select)
 *   6. Prep history (first-time / in-progress / retake)
 *
 * On submit, posts to `/api/onboarding`, which writes
 * `user_metadata.onboarding` plus mirrors `target_score` and
 * `exam_date` into the legacy keys. The response carries the next
 * destination — the official exam plan for new students, adaptive plan for retakers.
 *
 * Server component pre-fills the form with any prior values so a
 * student who started the wizard, navigated away, and came back
 * doesn't have to re-enter everything.
 */
export default async function OnboardingPage() {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    redirect("/login?next=/onboarding")
  }

  const meta = user.user_metadata ?? {}
  const initial = {
    targetScore: typeof meta.target_score === "number" ? meta.target_score : 705,
    examDate: typeof meta.exam_date === "string" ? meta.exam_date : null,
    currentScore:
      typeof meta.onboarding === "object" && meta.onboarding
        ? ((meta.onboarding as { currentScore?: number | null }).currentScore ?? null)
        : null,
    weeklyHours:
      typeof meta.onboarding === "object" && meta.onboarding
        ? ((meta.onboarding as { weeklyHours?: number }).weeklyHours ?? 12)
        : 12,
    weakAreas:
      typeof meta.onboarding === "object" && meta.onboarding
        ? ((meta.onboarding as { weakAreas?: string[] }).weakAreas ?? [])
        : [],
    prepHistory:
      typeof meta.onboarding === "object" && meta.onboarding
        ? ((meta.onboarding as { prepHistory?: string }).prepHistory ?? "first-time")
        : "first-time",
  }

  const firstName =
    (typeof meta.full_name === "string" && meta.full_name.split(" ")[0]) ||
    user.email?.split("@")[0] ||
    null

  // The RAW stored onboarding record. The skip write must spread this —
  // supabase.auth.updateUser replaces nested objects wholesale, so a bare
  // { skippedAt } used to wipe a completed intake (completedAt,
  // weeklyHours, weakAreas…) for anyone who revisited the wizard.
  const existingOnboarding =
    typeof meta.onboarding === "object" && meta.onboarding
      ? (meta.onboarding as Record<string, unknown>)
      : {}

  return (
    <OnboardingClient
      initial={initial}
      firstName={firstName}
      existingOnboarding={existingOnboarding}
      alreadyCompleted={typeof existingOnboarding.completedAt === "string"}
    />
  )
}
