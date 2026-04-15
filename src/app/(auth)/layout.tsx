import Link from "next/link"

export default function AuthLayout({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="min-h-screen flex flex-col"
      style={{ backgroundColor: "#0A0A0A" }}
    >
      {/* Top bar */}
      <div className="px-6 py-4">
        <Link href="/" className="inline-flex items-center gap-1">
          <span className="text-[#F0F0F0] font-bold">ZAKARIAN</span>
          <span
            className="w-1.5 h-1.5 rounded-full"
            style={{ backgroundColor: "#C9A84C" }}
          />
          <span className="text-[#F0F0F0] font-bold">GMAT</span>
        </Link>
      </div>

      {/* Main */}
      <div className="flex-1 flex items-center justify-center px-4 py-12">
        {children}
      </div>
    </div>
  )
}
