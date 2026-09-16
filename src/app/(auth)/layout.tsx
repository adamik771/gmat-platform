import Link from "next/link"
import ConsentSettingsButton from "@/components/analytics/ConsentSettingsButton"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="auth-workbench relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0B0B0A" }}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      {/* Top bar */}
      <div className="relative h-[68px] px-6 flex items-center border-b border-white/[0.08]">
        <Link
          href="/"
          className="inline-flex items-center gap-2 transition-opacity hover:opacity-80"
        >
          <span className="text-[#F0F0F0] text-[13px] font-semibold">
            ZAKARIAN
          </span>
          <span
            className="w-1 h-1 rounded-full"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span className="text-[#F0F0F0] text-[13px] font-semibold">
            GMAT
          </span>
        </Link>
      </div>

      {/* Main */}
      <main
        id="main-content"
        className="relative flex-1 flex items-center justify-center px-4 py-14"
      >
        {children}
      </main>

      {/* Minimal legal footer — the marketing footer is heavy for auth pages,
          but the GMAC non-affiliation disclaimer and legal links must appear
          on every public page. */}
      <footer className="relative px-6 pb-6 pt-2">
        <div className="flex items-center justify-center gap-4 mb-3">
          <Link href="/privacy" className="text-[11px] text-[#555555] hover:text-[#888888] transition-colors">
            Privacy
          </Link>
          <Link href="/terms" className="text-[11px] text-[#555555] hover:text-[#888888] transition-colors">
            Terms
          </Link>
          <Link href="/refund" className="text-[11px] text-[#555555] hover:text-[#888888] transition-colors">
            Refund Policy
          </Link>
          <ConsentSettingsButton className="text-[11px] text-[#555555] hover:text-[#888888] transition-colors" />
        </div>
        <p className="max-w-xl mx-auto text-center text-[11px] text-[#555555] leading-relaxed">
          GMAC™, GMAT™, Graduate Management Admission Council™, and Graduate
          Management Admission Test™ are trademarks of GMAC in the United
          States and other countries. Zakarian GMAT is independent and is not
          affiliated with, endorsed by, or sponsored by GMAC.
        </p>
      </footer>
    </div>
  )
}
