import { createSupabaseServer } from "@/lib/supabase/server"

/**
 * POST /api/onboarding — persist the new-student intake form into
 * `user_metadata.onboarding` (and mirror the canonical fields into
 * their established keys for backward-compat with the existing
 * dashboard / study-plan surfaces).
 *
 * Body shape:
 *   {
 *     targetScore: number      // 205-805, increments of 10
 *     examDate: string | null  // YYYY-MM-DD or null = undecided
 *     currentScore: number | null  // 205-805 (only when student has a prior score)
 *     weeklyHours: number      // 1-40
 *     weakAreas: string[]      // free-form selections from the wizard
 *     prepHistory: string      // "first-time" | "in-progress" | "retake"
 *   }
 *
 * On success, the API returns `ok: true` and the next route the
 * wizard should send the student to (`/mock` — the official exam plan — for first-time
 * students, `/study-plan/adaptive` for retakers).
 */

const VALID_PREP_HISTORY = new Set(["first-time", "in-progress", "retake"])
const ALLOWED_WEAK_AREA_RE = /^[A-Za-z0-9 \-]+$/
const MAX_WEAK_AREAS = 12

export async function POST(request: Request) {
  const supabase = await createSupabaseServer()
  const {
    data: { user },
    error: authError,
  } = await supabase.auth.getUser()

  if (authError || !user) {
    return Response.json({ error: "Unauthorized" }, { status: 401 })
  }

  let body: {
    targetScore?: unknown
    examDate?: unknown
    currentScore?: unknown
    weeklyHours?: unknown
    weakAreas?: unknown
    prepHistory?: unknown
  }
  try {
    body = (await request.json()) as typeof body
  } catch {
    return Response.json({ error: "Invalid JSON body" }, { status: 400 })
  }

  // ---- Validate target score ----
  const targetScore = body.targetScore
  if (
    typeof targetScore !== "number" ||
    !Number.isInteger(targetScore) ||
    targetScore < 205 ||
    targetScore > 805 ||
    (targetScore - 205) % 10 !== 0
  ) {
    return Response.json(
      { error: "targetScore must be 205-805 in 10-point increments" },
      { status: 400 }
    )
  }

  // ---- Validate exam date ----
  const examDate = body.examDate
  if (
    examDate !== null &&
    (typeof examDate !== "string" || !/^\d{4}-\d{2}-\d{2}$/.test(examDate))
  ) {
    return Response.json(
      { error: "examDate must be YYYY-MM-DD or null" },
      { status: 400 }
    )
  }

  // ---- Validate current score ----
  const currentScore = body.currentScore
  if (currentScore !== null && currentScore !== undefined) {
    if (
      typeof currentScore !== "number" ||
      !Number.isInteger(currentScore) ||
      currentScore < 205 ||
      currentScore > 805 ||
      (currentScore - 205) % 10 !== 0
    ) {
      return Response.json(
        { error: "currentScore must be null or 205-805 in 10-point increments" },
        { status: 400 }
      )
    }
  }

  // ---- Validate weekly hours ----
  const weeklyHours = body.weeklyHours
  if (
    typeof weeklyHours !== "number" ||
    !Number.isFinite(weeklyHours) ||
    weeklyHours < 1 ||
    weeklyHours > 40
  ) {
    return Response.json(
      { error: "weeklyHours must be a number 1-40" },
      { status: 400 }
    )
  }

  // ---- Validate weak areas ----
  const weakAreasRaw = body.weakAreas
  if (!Array.isArray(weakAreasRaw)) {
    return Response.json(
      { error: "weakAreas must be a string[]" },
      { status: 400 }
    )
  }
  if (weakAreasRaw.length > MAX_WEAK_AREAS) {
    return Response.json(
      { error: `weakAreas may contain at most ${MAX_WEAK_AREAS} items` },
      { status: 400 }
    )
  }
  const weakAreas: string[] = []
  for (const a of weakAreasRaw) {
    if (typeof a !== "string") continue
    const trimmed = a.trim().slice(0, 50)
    if (trimmed.length === 0) continue
    if (!ALLOWED_WEAK_AREA_RE.test(trimmed)) continue
    if (!weakAreas.includes(trimmed)) weakAreas.push(trimmed)
  }

  // ---- Validate prep history ----
  const prepHistory = body.prepHistory
  if (typeof prepHistory !== "string" || !VALID_PREP_HISTORY.has(prepHistory)) {
    return Response.json(
      { error: "prepHistory must be one of: first-time, in-progress, retake" },
      { status: 400 }
    )
  }

  // ---- Compose user_metadata payload ----
  const completedAt = new Date().toISOString()
  const onboarding = {
    completedAt,
    targetScore,
    examDate: examDate as string | null,
    currentScore: (currentScore as number | null | undefined) ?? null,
    weeklyHours,
    weakAreas,
    prepHistory,
  }

  // Mirror the canonical fields into their existing keys so the dashboard
  // (target-score control, exam-date pickers) keeps reading them without
  // a refactor.
  const updatePayload: Record<string, unknown> = {
    onboarding,
    target_score: targetScore,
    exam_date: examDate,
  }

  const { error } = await supabase.auth.updateUser({ data: updatePayload })
  if (error) {
    return Response.json({ error: error.message }, { status: 500 })
  }

  // Decide the next destination. Retakers go straight to the adaptive
  // plan (their current score + weak-areas form a viable signal set);
  // everyone else goes to the official exam plan, which seeds the rest of the
  // engine.
  const nextHref = prepHistory === "retake" ? "/study-plan/adaptive" : "/mock"

  return Response.json({ ok: true, nextHref, onboarding })
}
