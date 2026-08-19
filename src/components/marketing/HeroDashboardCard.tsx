import {
  ArrowRight,
  BarChart3,
  BookOpen,
  Check,
  RotateCcw,
  Target,
} from "lucide-react"

const nav = [
  { label: "Today", active: true },
  { label: "Course", active: false },
  { label: "Practice", active: false },
  { label: "Review", active: false },
  { label: "Analytics", active: false },
]

const signals = [
  { label: "Course", value: "38%", detail: "24 of 63 chapters" },
  { label: "Review", value: "8 due", detail: "3 high priority" },
  { label: "This week", value: "86", detail: "questions answered" },
]

export default function HeroDashboardCard() {
  return (
    <div className="product-workbench" aria-label="Zakarian GMAT product preview">
      <aside className="product-workbench__rail" aria-hidden="true">
        <div className="product-workbench__mark">ZG</div>
        <div className="product-workbench__nav">
          {nav.map((item) => (
            <div
              key={item.label}
              className={item.active ? "is-active" : undefined}
            >
              {item.label}
            </div>
          ))}
        </div>
        <div className="product-workbench__rail-note">Focused study. No noise.</div>
      </aside>

      <div className="product-workbench__main">
        <header className="product-workbench__header">
          <div>
            <p>Tuesday, 8:40</p>
            <strong>Today</strong>
          </div>
          <span>Product preview</span>
        </header>

        <div className="product-workbench__body">
          <section className="product-workbench__mission">
            <div className="product-workbench__mission-icon" aria-hidden="true">
              <Target />
            </div>
            <div>
              <p>Recommended next</p>
              <h2>Complete a 15-question Number Properties set</h2>
              <span>Selected from your weakest recent skill signal · about 22 min</span>
            </div>
            <button type="button" tabIndex={-1}>
              Start set
              <ArrowRight aria-hidden="true" />
            </button>
          </section>

          <div className="product-workbench__grid">
            <section className="product-workbench__progress">
              <div className="product-workbench__section-heading">
                <div>
                  <p>Current position</p>
                  <h3>Your preparation at a glance</h3>
                </div>
                <BarChart3 aria-hidden="true" />
              </div>
              <div className="product-workbench__signals">
                {signals.map((signal) => (
                  <div key={signal.label}>
                    <p>{signal.label}</p>
                    <strong>{signal.value}</strong>
                    <span>{signal.detail}</span>
                  </div>
                ))}
              </div>
              <div className="product-workbench__course-row">
                <div>
                  <BookOpen aria-hidden="true" />
                  <span>
                    <strong>Continue: Properties of Integers</strong>
                    Next: divisibility and remainders
                  </span>
                </div>
                <ArrowRight aria-hidden="true" />
              </div>
            </section>

            <section className="product-workbench__queue">
              <div className="product-workbench__section-heading">
                <div>
                  <p>Review queue</p>
                  <h3>Due today</h3>
                </div>
                <RotateCcw aria-hidden="true" />
              </div>
              <ul>
                <li>
                  <span><Check aria-hidden="true" /></span>
                  <div><strong>Assumption</strong><small>3 questions</small></div>
                </li>
                <li>
                  <span><Check aria-hidden="true" /></span>
                  <div><strong>Rates &amp; work</strong><small>2 questions</small></div>
                </li>
                <li>
                  <span><Check aria-hidden="true" /></span>
                  <div><strong>Table Analysis</strong><small>3 questions</small></div>
                </li>
              </ul>
              <div className="product-workbench__queue-link">
                Open review queue
                <ArrowRight aria-hidden="true" />
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
