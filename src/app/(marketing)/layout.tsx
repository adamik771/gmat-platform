import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import MarketingFeedbackButton from "@/components/shared/MarketingFeedbackButton"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="marketing-editorial">{children}</main>
      <Footer />
      <MarketingFeedbackButton />
    </>
  )
}
