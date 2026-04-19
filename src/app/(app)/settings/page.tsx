import { createSupabaseServer } from "@/lib/supabase/server"
import SettingsClient, { type PurchaseRow } from "./SettingsClient"

const PLAN_LABELS: Record<string, string> = {
  self_study: "Self-Study",
  self_study_plus: "Self-Study Plus",
  coaching: "Coaching",
  intensive: "Intensive",
}

export default async function SettingsPage() {
  let initialName = ""
  let initialEmail = ""
  let initialExamDate: string | null = null
  let initialTargetScore: number | null = null
  let purchases: PurchaseRow[] = []

  try {
    const supabase = await createSupabaseServer()
    const {
      data: { user },
    } = await supabase.auth.getUser()

    if (user) {
      initialName = (user.user_metadata?.full_name as string) ?? ""
      initialEmail = user.email ?? ""
      initialExamDate =
        (user.user_metadata?.exam_date as string | null) ?? null
      const rawTarget = user.user_metadata?.target_score
      initialTargetScore =
        typeof rawTarget === "number" && Number.isInteger(rawTarget)
          ? rawTarget
          : null

      const { data } = await supabase
        .from("purchases")
        .select("id, plan_id, amount_cents, currency, paid_at")
        .eq("user_id", user.id)
        .order("paid_at", { ascending: false })

      purchases = (data ?? []).map((p) => ({
        id: p.id as string,
        planId: p.plan_id as string,
        planLabel: PLAN_LABELS[p.plan_id as string] ?? (p.plan_id as string),
        amountCents: (p.amount_cents as number) ?? 0,
        currency: ((p.currency as string) ?? "usd").toUpperCase(),
        paidAt: p.paid_at as string,
      }))
    }
  } catch {
    // Supabase unavailable — fall through with empty defaults.
  }

  return (
    <SettingsClient
      initialName={initialName}
      initialEmail={initialEmail}
      initialExamDate={initialExamDate}
      initialTargetScore={initialTargetScore}
      purchases={purchases}
    />
  )
}
