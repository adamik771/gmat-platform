"use client"

import { useState } from "react"
import { cn } from "@/lib/utils"
import { CreditCard, Bell, User, Save } from "lucide-react"

type Tab = "profile" | "billing" | "notifications"

export default function SettingsPage() {
  const [tab, setTab] = useState<Tab>("profile")
  const [name, setName] = useState("Adam Zakarian")
  const [email, setEmail] = useState("adamzakaryan17@gmail.com")
  const [targetScore, setTargetScore] = useState("735")
  const [examDate, setExamDate] = useState("")
  const [saving, setSaving] = useState(false)

  const handleSave = async () => {
    setSaving(true)
    await new Promise((r) => setTimeout(r, 800))
    setSaving(false)
  }

  const tabs: { id: Tab; label: string; icon: React.ElementType }[] = [
    { id: "profile", label: "Profile", icon: User },
    { id: "billing", label: "Billing", icon: CreditCard },
    { id: "notifications", label: "Notifications", icon: Bell },
  ]

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div>
        <h1 className="text-2xl font-bold text-[#F0F0F0]">Settings</h1>
        <p className="text-sm text-[#555555] mt-1">Manage your account and preferences</p>
      </div>

      {/* Tab nav */}
      <div className="flex gap-1 p-1 rounded-xl" style={{ backgroundColor: "#111111", border: "1px solid rgba(255,255,255,0.06)" }}>
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

      {/* Profile tab */}
      {tab === "profile" && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-5">
          <h2 className="text-base font-semibold text-[#F0F0F0]">Profile Information</h2>

          <div className="grid sm:grid-cols-2 gap-5">
            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">Full Name</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">Target GMAT Score</label>
              <input
                type="number"
                value={targetScore}
                onChange={(e) => setTargetScore(e.target.value)}
                min={200}
                max={805}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)" }}
              />
            </div>
            <div>
              <label className="block text-xs font-medium text-[#888888] mb-1.5">Exam Date</label>
              <input
                type="date"
                value={examDate}
                onChange={(e) => setExamDate(e.target.value)}
                className="w-full px-3.5 py-2.5 rounded-lg text-sm text-[#F0F0F0] outline-none"
                style={{ backgroundColor: "#1A1A1A", border: "1px solid rgba(255,255,255,0.08)", colorScheme: "dark" }}
              />
            </div>
          </div>

          <button
            onClick={handleSave}
            disabled={saving}
            className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all hover:opacity-90 disabled:opacity-60"
            style={{ backgroundColor: "#C9A84C", color: "#0A0A0A" }}
          >
            <Save className="w-4 h-4" />
            {saving ? "Saving..." : "Save changes"}
          </button>
        </div>
      )}

      {/* Billing tab */}
      {tab === "billing" && (
        <div className="space-y-5">
          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
            <h2 className="text-base font-semibold text-[#F0F0F0] mb-4">Current Plan</h2>
            <div
              className="flex items-center justify-between p-4 rounded-xl border"
              style={{ borderColor: "rgba(201,168,76,0.25)", backgroundColor: "rgba(201,168,76,0.04)" }}
            >
              <div>
                <p className="text-sm font-semibold text-[#F0F0F0]">Coaching Package</p>
                <p className="text-xs text-[#888888] mt-0.5">Active · Renews after 8 sessions</p>
              </div>
              <div
                className="px-3 py-1 rounded-lg text-xs font-semibold"
                style={{ backgroundColor: "rgba(62,207,142,0.1)", color: "#3ECF8E" }}
              >
                Active
              </div>
            </div>
          </div>

          <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111]">
            <h2 className="text-base font-semibold text-[#F0F0F0] mb-4">Billing Portal</h2>
            <p className="text-sm text-[#888888] mb-4">
              Manage your payment methods, invoices, and subscription through the Stripe billing portal.
            </p>
            <button
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-medium border border-white/[0.12] text-[#F0F0F0] hover:bg-white/5 transition-colors"
            >
              <CreditCard className="w-4 h-4" />
              Open Billing Portal
            </button>
          </div>
        </div>
      )}

      {/* Notifications tab */}
      {tab === "notifications" && (
        <div className="p-6 rounded-xl border border-white/[0.08] bg-[#111111] space-y-5">
          <h2 className="text-base font-semibold text-[#F0F0F0]">Email Preferences</h2>

          {[
            { id: "streak", label: "Streak reminders", description: "Remind me if I haven't studied in 24 hours", defaultOn: true },
            { id: "weekly", label: "Weekly progress report", description: "Summary of your study week every Monday", defaultOn: true },
            { id: "tips", label: "Study tips & strategies", description: "Occasional emails with GMAT tips from Adam", defaultOn: false },
            { id: "coaching", label: "Coaching session reminders", description: "48-hour and 24-hour reminders before sessions", defaultOn: true },
          ].map((pref) => (
            <NotificationToggle
              key={pref.id}
              label={pref.label}
              description={pref.description}
              defaultOn={pref.defaultOn}
            />
          ))}
        </div>
      )}
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
        className={cn(
          "w-10 h-5.5 rounded-full transition-colors flex-shrink-0 relative",
        )}
        style={{
          backgroundColor: on ? "#C9A84C" : "rgba(255,255,255,0.1)",
          height: "22px",
          width: "40px",
        }}
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
