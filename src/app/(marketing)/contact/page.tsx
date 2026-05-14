import type { Metadata } from "next"
import ContactClient from "./ContactClient"

export const metadata: Metadata = {
  title: "Contact — Book a Free 20-min Call",
  description:
    "Tell me about your situation. Free 20-minute call to review your current score, identify your highest-leverage weaknesses, and recommend the right plan for your timeline.",
  alternates: { canonical: "/contact" },
}

export default function ContactPage() {
  return <ContactClient />
}
