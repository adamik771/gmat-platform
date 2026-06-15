import type { Metadata } from "next"
import ScoreCalculatorClient from "./ScoreCalculatorClient"

export const metadata: Metadata = {
  title: "Score Calculator",
}

export default function ScoreCalculatorPage() {
  return <ScoreCalculatorClient />
}
