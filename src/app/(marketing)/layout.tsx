import Navbar from "@/components/shared/Navbar"
import Footer from "@/components/shared/Footer"
import MarketingFeedbackButton from "@/components/shared/MarketingFeedbackButton"
import publicTheme from "@/components/marketing/PublicTheme.module.css"
import PublicMotion from "@/components/marketing/PublicMotion"

export default function MarketingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className={publicTheme.site}>
      <a href="#main-content" className="skip-to-content">
        Skip to content
      </a>
      <Navbar />
      <main id="main-content" className="marketing-editorial"><PublicMotion>{children}</PublicMotion></main>
      <Footer />
      <MarketingFeedbackButton />
    </div>
  )
}
