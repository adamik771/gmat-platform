"use client"

import { useState, useTransition } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import {
  Bell,
  CheckCircle2,
  CreditCard,
  Loader2,
  Save,
  User,
} from "lucide-react"
import { cn } from "@/lib/utils"

export interface PurchaseRow {
  id: string
  planId: string
  planLabel: string
  amountCents: number
  currency: string
  paidAt: string
}

interface Props {
  initialName: string
  initialEmail: string
  initialExamDate: string | null
  initialTargetScore: number | null
  purchases: PurchaseRow[]
}

type Tab = "profile" | "billing" | "notifications"

export default function SettingsClient({
  initialName,
  initialEmail,
  initialExamDate,
  initialTargetScore,
  purchases,
}: Props) {
  const [tab, setTab] = useState<Tab>("profile")

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Settings</h1>
        <p className="text-sm text-[#555555] mt-1">
          Manage your account and preferences
        </p>
      </div>

      {/* Tab nav */}
      <div
        className="flex gap-1 p-1 rounded-xl"
        style={{
          backgroundColor: "#111111",
          border: "1px solid rgba(255,255,255,0.06)",
        }}
      >
        {tabs.map((t) => {
          const Icon = t.icon
          return (
            <button
              key={t.id}
              onClick={() => setTab(t.id)}
              className={cn(
                "flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all flex-1 justify-center",
                tab === t.id
                  ? "text-[#F0F0F0]"
                  : "text-[#555555] hover:text-[#888888]"
              )}
              style={tab === t.id ? { backgroundColor: "#1A1A1A" } : {}}
            >
              <Icon className="w-4 h-4" />
              {t.label}
            </button>
          )
        })}
      </div>

      {tab === "profile" && (
        <ProfileTab
          initialName={initialName}
          email={initialEmail}
          initialExamDate={initialExamDate}
          targetScore={initialTargetScore}
        />
      )}

      {tab === "billing" && <BillingTab purchases={purchases} />}

      {tab === "notifications" && <NotificationsTab />}
    </div>
  )
}

/**
 * Profile tab — editable name + exam date backed by user_metadata.
 * Email is read-only (Supabase email change requires a confirmation flow
 * we haven't built yet — linked out with a note). Target score is
 * surfaced here as reference but editable on /dashboard, to keep one
 * writer for that field.
 */
function ProfileTab({
  initialName,
  email,
  initialExamDate,
  targetScore,
}: {
  initialName: string
  email: string
  initialExamDate: string | null
  targetScore: number | null
}) {
  const [name, setName] = useState(initialName)
  const [examDate, setExamDate] = useState(initialExamDate ?? "")
  const [saving, setSaving] = useState(false)
  const [status, setStatus] = useState<"idle" | "saved" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState<string | null>(null)
  const [, startTransition] = useTransition()
  const router = useRouter()

  const nameDirty = name !== initialName
  const examDirty = examDate !== (initialExamDate ?? "")
  const dirty = nameDirty || examDirty

  async function save() {
    if (!dirty || saving) return
    setSaving(true)
    setStatus("idle")
    setErrorMessage(null)

    const patch: Record<string, string | null> = {}
    if (nameDirty) patch.full_name = name
    if (examDirty) patch.exam_date = examDate === "" ? null : examDate

    try {
      const res = await fetch("/api/profile", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(patch),
      })
      if (!res.ok) {
        const body = (await res.json().catch(() => ({}))) as { error?: string }
        throw new Error(body.error || `Request failed (${res.status})`)
      }
      setStatus("saved")
      startTransition(() => router.refresh())
      // Fade the "Saved" label after a moment so it doesn't linger.
      setTimeout(() => setStatus((s) => (s === "saved" ? "idle" : s)), 2500)
    } catch (err) {
      setStatus("error")
      setErrorMessage(
        err instanceof Error ? err.message : "Something went wrong"
      )
    } finally {
      setSaving(false)
    }
  }

  return (
    <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-5">
      <h2 className="text-base font-semibold text-[#F0F0F0]">
        Profile Information
      </h2>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label className="block text-xs font-medium text-[#888888] mb-1.5">
            Full Name
          </label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            maxLength={120}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none focus:border-[#C9A84C]/40"
            style={{
              backgroundColor: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          />
        </div>
        <div>
          <label className="block text-xs font-medium text-[#888888] mb-1.5">
            Email
          </label>
          <input
            type="email"
            value={email}
            readOnly
            className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#888888] outline-none cursor-not-allowed"
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          />
          <p className="text-[11px] text-[#555555] mt-1">
            Email changes require confirmation — coming soon.
          </p>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#888888] mb-1.5">
            Target GMAT Score
          </label>
          <div
            className="w-full px-3.5 py-2.5 rounded-lg text-sm flex items-center justify-between"
            style={{
              backgroundColor: "#141414",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <span
              className={
                targetScore !== null
                  ? "text-[#F0F0F0]"
                  : "text-[#555555] italic"
              }
            >
              {targetScore !== null ? targetScore : "Not set"}
            </span>
            <Link
              href="/dashboard"
              className="text-xs underline underline-offset-2 text-[#888888] hover:text-[#C9A84C] transition-colors"
            >
              Edit on dashboard
            </Link>
          </div>
        </div>
        <div>
          <label className="block text-xs font-medium text-[#888888] mb-1.5">
            Exam Date
          </label>
          <input
            type="date"
            value={examDate}
            onChange={(e) => setExamDate(e.target.value)}
            className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none focus:border-[#C9A84C]/40"
            style={{
              backgroundColor: "#1A1A1A",
              border: "1px solid rgba(255,255,255,0.08)",
              colorScheme: "dark",
            }}
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={save}
          disabled={saving || !dirty}
          className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60 disabled:cursor-not-allowed"
          style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
        >
          {saving ? (
            <Loader2 className="w-4 h-4 animate-spin" />
          ) : (
            <Save className="w-4 h-4" />
          )}
          {saving ? "Saving…" : "Save changes"}
        </button>
        {status === "saved" && (
          <span
            className="inline-flex items-center gap-1 text-xs"
            style={{ color: "#3ECF8E" }}
          >
            <CheckCircle2 className="w-3.5 h-3.5" />
            Saved
          </span>
        )}
        {status === "error" && errorMessage && (
          <span className="text-xs" style={{ color: "#FF4444" }}>
            {errorMessage}
          </span>
        )}
      </div>
    </div>
  )
}

/**
 * Billing tab — shows the current plan (latest purchase) + a history
 * table. When there's no purchase yet, points the user back to /pricing.
 */
function BillingTab({ purchases }: { purchases: PurchaseRow[] }) {
  const latest = purchases[0] ?? null

  return (
    <div className="space-y-5">
      <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
        <h2 className="text-base font-semibold text-[#F0F0F0] mb-4">
          Current Plan
        </h2>

        {latest ? (
          <div
            className="flex items-center justify-between p-4 rounded-xl border"
            style={{
              borderColor: "rgba(201,168,76,0.25)",
              backgroundColor: "rgba(201,168,76,0.04)",
            }}
          >
            <div>
              <p className="text-sm font-semibold text-[#F0F0F0]">
                {latest.planLabel}
              </p>
              <p className="text-xs text-[#888888] mt-0.5">
                Activated {formatDate(latest.paidAt)} ·{" "}
                {formatMoney(latest.amountCents, latest.currency)} paid
              </p>
            </div>
            <div
              className="px-3 py-1 rounded-lg text-xs font-semibold"
              style={{
                backgroundColor: "rgba(62,207,142,0.1)",
                color: "#3ECF8E",
              }}
            >
              Active
            </div>
          </div>
        ) : (
          <div
            className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 p-4 rounded-xl border border-dashed border-white/[0.1]"
            style={{ backgroundColor: "#0F0F0F" }}
          >
            <div>
              <p className="text-sm font-medium text-[#F0F0F0]">
                No plan yet
              </p>
              <p className="text-xs text-[#888888] mt-0.5">
                Pick a package on the pricing page to unlock the full
                curriculum and coaching.
              </p>
            </div>
            <Link
              href="/pricing"
              className="px-4 py-2 rounded-lg text-xs font-semibold transition-all hover:opacity-90 flex-shrink-0"
              style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
            >
              View pricing
            </Link>
          </div>
        )}
      </div>

      {purchases.length > 0 && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
          <h2 className="text-base font-semibold text-[#F0F0F0] mb-4">
            Purchase History
          </h2>
          <div className="overflow-hidden rounded-xl border border-white/[0.06]">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-[#0F0F0F] text-[#888888]">
                  <th className="text-left py-2.5 px-4 text-xs font-semibold uppercase tracking-wide border-b border-white/[0.06]">
                    Date
                  </th>
                  <th className="text-left py-2.5 px-4 text-xs font-semibold uppercase tracking-wide border-b border-white/[0.06]">
                    Plan
                  </th>
                  <th className="text-right py-2.5 px-4 text-xs font-semibold uppercase tracking-wide border-b border-white/[0.06]">
                    Amount
                  </th>
                </tr>
              </thead>
              <tbody>
                {purchases.map((p, i) => (
                  <tr
                    key={p.id}
                    className={cn(
                      i < purchases.length - 1 && "border-b border-white/[0.04]"
                    )}
                  >
                    <td className="py-2.5 px-4 text-[#D8D8D8] text-[13px]">
                      {formatDate(p.paidAt)}
                    </td>
                    <td className="py-2.5 px-4 text-[#D8D8D8] text-[13px]">
                      {p.planLabel}
                    </td>
                    <td className="py-2.5 px-4 text-right text-[#D8D8D8] text-[13px]">
                      {formatMoney(p.amountCents, p.currency)}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-[11px] text-[#555555] mt-3 italic">
            Need an invoice or refund? Reply to your purchase confirmation
            email — we&apos;ll sort it.
          </p>
        </div>
      )}
    </div>
  )
}

/**
 * Notifications tab — UI-only for now. Preferences aren't persisted;
 * the email scheduler that would consume them hasn't been built. Left
 * as a visual placeholder so the tab isn't empty.
 */
function NotificationsTab() {
  return (
    <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-5">
      <div>
        <h2 className="text-base font-semibold text-[#F0F0F0]">
          Email Preferences
        </h2>
        <p className="text-xs text-[#555555] mt-1 italic">
          Preferences aren&apos;t saved yet — the email scheduler is coming
          in a future release.
        </p>
      </div>

      {[
        {
          id: "streak",
          label: "Streak reminders",
          description: "Remind me if I haven't studied in 24 hours",
          defaultOn: true,
        },
        {
          id: "weekly",
          label: "Weekly progress report",
          description: "Summary of your study week every Monday",
          defaultOn: true,
        },
        {
          id: "tips",
          label: "Study tips & strategies",
          description: "Occasional emails with GMAT tips from Adam",
          defaultOn: false,
        },
        {
          id: "coaching",
          label: "Coaching session reminders",
          description: "48-hour and 24-hour reminders before sessions",
          defaultOn: true,
        },
      ].map((pref) => (
        <NotificationToggle
          key={pref.id}
          label={pref.label}
          description={pref.description}
          defaultOn={pref.defaultOn}
        />
      ))}
    </div>
  )
}

function NotificationToggle({
  label,
  description,
  defaultOn,
}: {
  label: string
  description: string
  defaultOn: boolean
}) {
  const [on, setOn] = useState(defaultOn)

  return (
    <div className="flex items-start justify-between gap-4">
      <div>
        <p className="text-sm font-medium text-[#F0F0F0]">{label}</p>
        <p className="text-xs text-[#555555] mt-0.5">{description}</p>
      </div>
      <button
        onClick={() => setOn(!on)}
        className="rounded-full transition-colors flex-shrink-0 relative"
        style={{
          backgroundColor: on ? "#C9A84C" : "rgba(255,255,255,0.1)",
          height: "22px",
          width: "40px",
        }}
        aria-pressed={on}
        aria-label={label}
      >
        <span
          className="absolute top-0.5 rounded-full bg-white transition-transform"
          style={{
            width: "18px",
            height: "18px",
            left: on ? "20px" : "2px",
          }}
        />
      </button>
    </div>
  )
}

function formatDate(iso: string): string {
  const d = new Date(iso)
  if (Number.isNaN(d.getTime())) return "—"
  return d.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  })
}

function formatMoney(cents: number, currency: string): string {
  const whole = (cents / 100).toLocaleString("en-US", {
    minimumFractionDigits: cents % 100 === 0 ? 0 : 2,
    maximumFractionDigits: 2,
  })
  return `${currency === "USD" ? "$" : ""}${whole}${
    currency === "USD" ? "" : ` ${currency}`
  }`
}
