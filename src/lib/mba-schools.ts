/**
 * Public MBA program data — score targets, class size, geography.
 *
 * All numbers are sourced from school-published class profiles and
 * publicly available medians (e.g. Poets & Quants, school admissions
 * pages). They are approximate and shift year over year. The tool
 * presents them as "approximate medians" everywhere; we deliberately
 * never imply precision.
 *
 * Adding / updating a school: change the row, no other code changes
 * needed. The picker UI iterates this list.
 */

export type Region = "USA" | "Europe" | "Asia"

export interface MbaSchool {
  /** Stable kebab-case slug, used in URL state if we ever serialize. */
  slug: string
  /** Display name. */
  name: string
  /** Short location (City, Country / City, State). */
  location: string
  /** USA / Europe / Asia for filtering. */
  region: Region
  /**
   * Approximate median GMAT score on the legacy 200-800 scale, from
   * the school's most recently published class profile. Many schools
   * still report this rather than the new Focus scale. Null if a
   * school doesn't publish a GMAT median (e.g. test-optional shifts).
   */
  medianGMAT: number | null
  /**
   * Approximate Focus-Edition equivalent computed from the official
   * GMAC concordance. Stored alongside the legacy median so the UI
   * can render both without recomputing per render.
   */
  medianFocus: number | null
  /**
   * Rough "competitive" band — typical 80th-percentile applicant score.
   * Adding 30-40 points to the median is the conventional rule of
   * thumb for "comfortably competitive." Same scale as medianGMAT.
   */
  competitiveGMAT: number | null
  competitiveFocus: number | null
  /** Class size, full-time MBA. */
  classSize: number
  /** One-line "what this program is known for" — keep it factual. */
  shortNote: string
}

/**
 * Top US M7 programs.
 */
const M7: MbaSchool[] = [
  {
    slug: "harvard-hbs",
    name: "Harvard Business School",
    location: "Boston, MA",
    region: "USA",
    medianGMAT: 740,
    medianFocus: 685,
    competitiveGMAT: 770,
    competitiveFocus: 725,
    classSize: 938,
    shortNote: "Case-method MBA. Median has held above 730 for the last decade.",
  },
  {
    slug: "stanford-gsb",
    name: "Stanford Graduate School of Business",
    location: "Stanford, CA",
    region: "USA",
    medianGMAT: 740,
    medianFocus: 685,
    competitiveGMAT: 770,
    competitiveFocus: 725,
    classSize: 421,
    shortNote: "Smallest M7 class. Highest median GMAT in most years.",
  },
  {
    slug: "wharton",
    name: "Wharton School (UPenn)",
    location: "Philadelphia, PA",
    region: "USA",
    medianGMAT: 740,
    medianFocus: 685,
    competitiveGMAT: 770,
    competitiveFocus: 725,
    classSize: 877,
    shortNote: "Finance-heavy. Strong quant signal expected.",
  },
  {
    slug: "booth",
    name: "Chicago Booth",
    location: "Chicago, IL",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 627,
    shortNote: "Quant-focused, flexible curriculum. Famous for finance + analytics.",
  },
  {
    slug: "kellogg",
    name: "Kellogg School (Northwestern)",
    location: "Evanston, IL",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 529,
    shortNote: "Marketing strength + collaborative culture. Wide test-score range.",
  },
  {
    slug: "mit-sloan",
    name: "MIT Sloan",
    location: "Cambridge, MA",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 408,
    shortNote: "Tech-forward, quant signal expected. Action-learning focus.",
  },
  {
    slug: "columbia",
    name: "Columbia Business School",
    location: "New York, NY",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 882,
    shortNote: "Finance + entrepreneurship in NYC. Two intake cycles per year.",
  },
]

/**
 * Top US T15 programs (outside M7).
 */
const T15: MbaSchool[] = [
  {
    slug: "tuck",
    name: "Tuck (Dartmouth)",
    location: "Hanover, NH",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 295,
    shortNote: "Small, residential, tight-knit. Highest yield in the T15.",
  },
  {
    slug: "yale-som",
    name: "Yale School of Management",
    location: "New Haven, CT",
    region: "USA",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 350,
    shortNote: "Mission-driven, integrated curriculum. Strong nonprofit + impact placement.",
  },
  {
    slug: "stern",
    name: "Stern (NYU)",
    location: "New York, NY",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 388,
    shortNote: "Finance + tech in NYC. Specialized MBA tracks.",
  },
  {
    slug: "haas",
    name: "Berkeley Haas",
    location: "Berkeley, CA",
    region: "USA",
    medianGMAT: 730,
    medianFocus: 675,
    competitiveGMAT: 760,
    competitiveFocus: 715,
    classSize: 244,
    shortNote: "Smallest T15 class. Tech-heavy, San Francisco ecosystem.",
  },
  {
    slug: "anderson",
    name: "UCLA Anderson",
    location: "Los Angeles, CA",
    region: "USA",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 360,
    shortNote: "Entertainment, tech, entrepreneurship. West Coast brand.",
  },
  {
    slug: "ross",
    name: "Ross (Michigan)",
    location: "Ann Arbor, MI",
    region: "USA",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 422,
    shortNote: "MAP action-learning model. Strong general management brand.",
  },
  {
    slug: "darden",
    name: "Darden (UVA)",
    location: "Charlottesville, VA",
    region: "USA",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 343,
    shortNote: "Case-method, smaller cohorts. Strong consulting placement.",
  },
  {
    slug: "fuqua",
    name: "Fuqua (Duke)",
    location: "Durham, NC",
    region: "USA",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 740,
    competitiveFocus: 695,
    classSize: 405,
    shortNote: "Team-Fuqua culture. Healthcare + tech focus.",
  },
]

/**
 * Top European programs.
 */
const EUROPE: MbaSchool[] = [
  {
    slug: "insead",
    name: "INSEAD",
    location: "Fontainebleau, France",
    region: "Europe",
    medianGMAT: 710,
    medianFocus: 655,
    competitiveGMAT: 740,
    competitiveFocus: 695,
    classSize: 1064,
    shortNote: "Largest top program. 10-month MBA. Famously international cohort.",
  },
  {
    slug: "lbs",
    name: "London Business School",
    location: "London, UK",
    region: "Europe",
    medianGMAT: 710,
    medianFocus: 655,
    competitiveGMAT: 740,
    competitiveFocus: 695,
    classSize: 487,
    shortNote: "Finance-leaning. London ecosystem + 15-21 month flexible duration.",
  },
  {
    slug: "iese",
    name: "IESE Business School",
    location: "Barcelona, Spain",
    region: "Europe",
    medianGMAT: 690,
    medianFocus: 635,
    competitiveGMAT: 720,
    competitiveFocus: 665,
    classSize: 376,
    shortNote: "Case-method, two-year. Strong Latin America + Europe network.",
  },
  {
    slug: "oxford-said",
    name: "Saïd (Oxford)",
    location: "Oxford, UK",
    region: "Europe",
    medianGMAT: 690,
    medianFocus: 635,
    competitiveGMAT: 720,
    competitiveFocus: 665,
    classSize: 333,
    shortNote: "One-year MBA. Brand strength + interdisciplinary university link.",
  },
  {
    slug: "imd",
    name: "IMD",
    location: "Lausanne, Switzerland",
    region: "Europe",
    medianGMAT: 680,
    medianFocus: 625,
    competitiveGMAT: 710,
    competitiveFocus: 655,
    classSize: 90,
    shortNote: "Smallest top European MBA. Senior cohort, exec-style learning.",
  },
]

/**
 * Top Asia programs.
 */
const ASIA: MbaSchool[] = [
  {
    slug: "ceibs",
    name: "CEIBS",
    location: "Shanghai, China",
    region: "Asia",
    medianGMAT: 690,
    medianFocus: 635,
    competitiveGMAT: 720,
    competitiveFocus: 665,
    classSize: 188,
    shortNote: "Largest China-based MBA. Strong China + global hybrid curriculum.",
  },
  {
    slug: "isb",
    name: "Indian School of Business",
    location: "Hyderabad, India",
    region: "Asia",
    medianGMAT: 720,
    medianFocus: 665,
    competitiveGMAT: 750,
    competitiveFocus: 705,
    classSize: 800,
    shortNote: "One-year MBA. Highest GMAT median of major India programs.",
  },
  {
    slug: "nus",
    name: "NUS Business School",
    location: "Singapore",
    region: "Asia",
    medianGMAT: 670,
    medianFocus: 615,
    competitiveGMAT: 700,
    competitiveFocus: 645,
    classSize: 133,
    shortNote: "Asian ecosystem hub. Strong APAC placement.",
  },
]

export const ALL_SCHOOLS: MbaSchool[] = [...M7, ...T15, ...EUROPE, ...ASIA]

export function getSchoolBySlug(slug: string): MbaSchool | undefined {
  return ALL_SCHOOLS.find((s) => s.slug === slug)
}

export function schoolsByRegion(region: Region): MbaSchool[] {
  return ALL_SCHOOLS.filter((s) => s.region === region)
}
