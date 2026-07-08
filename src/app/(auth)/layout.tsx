import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="relative min-h-screen flex flex-col overflow-hidden"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      {/* Atmospheric gold glow — soft, top-centre, focused */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 80% 50% at 50% -10%, rgba(201,168,76,0.14) 0%, transparent 60%)",
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 45% 30% at 50% 110%, rgba(201,168,76,0.05) 0%, transparent 65%)",
        }}
        aria-hidden
      />

      {/* Top bar */}
      <div className="relative px-6 py-5">
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 transition-opacity hover:opacity-80"
        >
          <span className="text-[#F0F0F0] font-semibold tracking-[0.02em]">
            ZAKARIAN
          </span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span className="text-[#F0F0F0] font-semibold tracking-[0.02em]">
            GMAT
          </span>
        </Link>
      </div>

      {/* Main */}
      <main
        id="main-content"
        className="relative flex-1 flex items-center justify-center px-4 py-12"
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
        </div>
        <p className="max-w-xl mx-auto text-center text-[11px] text-[#555555] leading-relaxed">
          GMAT™ is a registered trademark of the Graduate Management Admission
          Council™ (GMAC™). GMAC does not endorse, nor is it affiliated in any
          way with, the owner or any content of this site. All references to the
          GMAT exam are for descriptive and educational purposes only.
        </p>
      </footer>
    </div>
  )
}
