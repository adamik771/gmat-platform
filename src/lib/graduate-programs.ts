import { ALL_SCHOOLS, type Region } from "@/lib/mba-schools"
import { convertOldToFocus, formatScoreRange } from "@/lib/score-conversion"

export type ProgramType = "MBA" | "MiM" | "Finance master's"
export type ScoreStatistic =
  | "Approximate median"
  | "Median"
  | "Average"
  | "Minimum"
  | "Observed range"
  | "Recommended range"
  | "Not published"

export interface GraduateProgram {
  slug: string
  schoolName: string
  programName: string
  location: string
  region: Region
  programType: ProgramType
  legacyScore: number | string | null
  focusEquivalent: string | null
  focusSort: number | null
  focusScoreLabel: string
  scoreStatistic: ScoreStatistic
  classSize: number | null
  competitiveGMAT: number | null
  competitiveFocus: number | null
  shortNote: string
  testPolicy: string
  sourceLabel: string | null
  sourceUrl: string | null
}

function currentEquivalent(oldScore: number) {
  const result = convertOldToFocus(oldScore)
  return {
    display: formatScoreRange(result.minEquivalent, result.maxEquivalent),
    sort: result.representativeEquivalent,
  }
}

const MBA_PROGRAMS: GraduateProgram[] = ALL_SCHOOLS.map((school) => ({
  slug: school.slug,
  schoolName: school.name,
  programName: "MBA",
  location: school.location,
  region: school.region,
  programType: "MBA",
  legacyScore: school.medianGMAT,
  focusEquivalent: school.medianFocus == null ? null : String(school.medianFocus),
  focusSort: school.medianFocus,
  focusScoreLabel: "Approximate official concordance",
  scoreStatistic: "Approximate median",
  classSize: school.classSize,
  competitiveGMAT: school.competitiveGMAT,
  competitiveFocus: school.competitiveFocus,
  shortNote: school.shortNote,
  testPolicy:
    "The score is one part of a holistic MBA application. Confirm the current class profile and testing policy on the school's admissions site before applying.",
  sourceLabel: null,
  sourceUrl: null,
}))

function scoredProgram(
  input: Omit<
    GraduateProgram,
    | "focusEquivalent"
    | "focusSort"
    | "focusScoreLabel"
    | "competitiveGMAT"
    | "competitiveFocus"
  > & {
    publishedFocusScore?: number | string
    publishedFocusSort?: number
  },
): GraduateProgram {
  const { publishedFocusScore, publishedFocusSort, ...program } = input
  const equivalent =
    typeof program.legacyScore === "number"
      ? currentEquivalent(program.legacyScore)
      : null
  return {
    ...program,
    focusEquivalent:
      publishedFocusScore == null
        ? (equivalent?.display ?? null)
        : String(publishedFocusScore),
    focusSort:
      publishedFocusScore == null
        ? (equivalent?.sort ?? null)
        : (publishedFocusSort ??
          (typeof publishedFocusScore === "number" ? publishedFocusScore : null)),
    focusScoreLabel:
      publishedFocusScore == null
        ? "Approximate official concordance"
        : "School-published current GMAT figure",
    competitiveGMAT: null,
    competitiveFocus: null,
  }
}

const BUSINESS_MASTERS_PROGRAMS: GraduateProgram[] = [
  scoredProgram({
    slug: "hec-master-international-finance",
    schoolName: "HEC Paris",
    programName: "Master in International Finance",
    location: "Paris, France",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 715,
    scoreStatistic: "Median",
    classSize: null,
    shortNote:
      "HEC publishes a 715 median GMAT for the programme. GMAT, GRE, or TAGE MAGE is required, but HEC states that there is no minimum score.",
    testPolicy: "Required management test; no published minimum.",
    sourceLabel: "HEC Paris programme profile, 2025 graduation survey",
    sourceUrl:
      "https://www.hec.edu/en/master-s-programs/master-international-finance",
  }),
  scoredProgram({
    slug: "oxford-msc-financial-economics",
    schoolName: "University of Oxford, Saïd",
    programName: "MSc in Financial Economics",
    location: "Oxford, UK",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 747,
    scoreStatistic: "Average",
    classSize: 97,
    shortNote:
      "Oxford's programme brochure reports a 747 average GMAT for the 2023-24 cohort. The displayed current-score equivalent uses the nearest official old-scale concordance bin.",
    testPolicy: "GMAT or GRE accepted as part of the application.",
    sourceLabel: "Oxford MFE 2025-26 programme brochure",
    sourceUrl:
      "https://www.sbs.ox.ac.uk/sites/default/files/2024-08/mfe_brochure_%2025-26.pdf",
  }),
  scoredProgram({
    slug: "lbs-masters-financial-analysis",
    schoolName: "London Business School",
    programName: "Masters in Financial Analysis",
    location: "London, UK",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 703,
    scoreStatistic: "Average",
    classSize: 216,
    shortNote:
      "LBS reports a 703 average GMAT for its 2025 MFA class. The displayed current-score equivalent uses the nearest official old-scale concordance bin.",
    testPolicy: "A strong GMAT or GRE forms part of the admissions assessment.",
    sourceLabel: "London Business School MFA Employment Report 2025",
    sourceUrl:
      "https://assets.london.edu/hxo16fanegqh/5igsuaYPeNV7IiSg9q3R7w/c53fec46bef731cd868ae42322dd0f64/mfa_employment_report.pdf",
  }),
  scoredProgram({
    slug: "hsg-master-banking-finance",
    schoolName: "University of St.Gallen (HSG)",
    programName: "Master in Banking and Finance",
    location: "St.Gallen, Switzerland",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "HSG does not publish a class GMAT average or median for MBF. For the standard selection route, GMAT or GRE contributes 30% of the assessment; applicants with a Swiss university bachelor's degree may omit it.",
    testPolicy: "GMAT/GRE: 30% of selection on the standard route.",
    sourceLabel: "HSG MBF admissions criteria",
    sourceUrl:
      "https://www.unisg.ch/en/studying/admission/admission-master/banking-and-finance/",
  }),
  scoredProgram({
    slug: "lse-msc-finance",
    schoolName: "London School of Economics",
    programName: "MSc Finance (full-time)",
    location: "London, UK",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: 136,
    shortNote:
      "LSE reports a 136-student intake but no class GMAT average or median. Its Finance Department says competitive applicants generally present old-format scores in the high 600s or above, with strong quantitative performance; that guidance is not a cutoff or cohort statistic.",
    testPolicy:
      "GMAT or GRE is required without a UK undergraduate degree and recommended otherwise; no formal minimum is published.",
    sourceLabel: "LSE Department of Finance admissions FAQ",
    sourceUrl:
      "https://www.lse.ac.uk/finance/study/prospective-students/application-faqs",
  }),
  scoredProgram({
    slug: "imperial-msc-finance",
    schoolName: "Imperial College Business School",
    programName: "MSc Finance",
    location: "London, UK",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 645,
    scoreStatistic: "Average",
    classSize: null,
    shortNote:
      "Imperial reports a 645 average on the previous GMAT edition. The test is optional, but Imperial says a balanced result can strengthen an application, particularly for candidates with less quantitative degree backgrounds.",
    testPolicy:
      "Optional; submitted current-GMAT results need at least the 55th overall percentile, while previous-edition scores need at least 600.",
    sourceLabel: "Imperial MSc Finance admissions",
    sourceUrl:
      "https://www.imperial.ac.uk/business-school/masters/finance/admissions/",
  }),
  scoredProgram({
    slug: "esade-global-masters-finance",
    schoolName: "Esade Business School",
    programName: "Global Master's in Finance",
    location: "Barcelona, Spain",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 660,
    publishedFocusScore: 615,
    scoreStatistic: "Average",
    classSize: null,
    shortNote:
      "Esade publishes recent averages of about 615 on the current GMAT and 660 on the previous edition. The 615 shown here is school-reported, not a concordance estimate.",
    testPolicy:
      "All applicants must submit the Esade Admissions Test, GMAT, or GRE.",
    sourceLabel: "Esade Global Master's in Finance admissions",
    sourceUrl:
      "https://www.esade.edu/master-of-science/en/program/global-masters-in-finance/admissions",
  }),
  scoredProgram({
    slug: "sse-msc-finance",
    schoolName: "Stockholm School of Economics",
    programName: "MSc in Finance",
    location: "Stockholm, Sweden",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: 600,
    publishedFocusScore: 555,
    scoreStatistic: "Minimum",
    classSize: null,
    shortNote:
      "SSE publishes application minimums of 555 on the current GMAT and 600 on the previous edition. These are eligibility thresholds, not typical admitted-student scores, and meeting them does not guarantee admission.",
    testPolicy:
      "GMAT or GRE is generally required; applicants with a BSc from a Swedish university or SSE Riga are exempt.",
    sourceLabel: "SSE MSc Finance application requirements",
    sourceUrl: "https://www.hhs.se/education/master/finance/mfin-application/",
  }),
  scoredProgram({
    slug: "frankfurt-school-master-finance",
    schoolName: "Frankfurt School of Finance & Management",
    programName: "Master of Finance",
    location: "Frankfurt, Germany",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "Frankfurt School requires an admissions test but does not publish a class GMAT average or median on the programme page. Its own aptitude test is available as an alternative to GMAT or GRE.",
    testPolicy:
      "A valid GMAT, GRE, or Frankfurt School Admission Test result is required for the standard admissions route.",
    sourceLabel: "Frankfurt School Master of Finance admissions",
    sourceUrl:
      "https://www.frankfurt-school.de/en/study/master/master-of-finance?lang=en",
  }),
  scoredProgram({
    slug: "bocconi-mafinrisk",
    schoolName: "Bocconi University",
    programName: "MAFINRISK",
    location: "Milan, Italy",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: "650–770",
    publishedFocusScore: "595–755",
    publishedFocusSort: 675,
    scoreStatistic: "Observed range",
    classSize: null,
    shortNote:
      "Bocconi publishes past testing ranges of 595–755 on the current GMAT and 650–770 on the previous edition for its Master of Quantitative Finance and Risk Management. A range describes past applicants; it is not a target or guarantee.",
    testPolicy:
      "Applicants must submit GMAT, GRE, or the Bocconi online admission test.",
    sourceLabel: "Bocconi MAFINRISK programme profile",
    sourceUrl:
      "https://www.unibocconi.it/en/programs/specialized-masters-programs/mafinrisk-master-quantitative-finance-and-risk-management",
  }),
  scoredProgram({
    slug: "ie-master-finance",
    schoolName: "IE Business School",
    programName: "Master in Finance",
    location: "Madrid, Spain",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: null,
    publishedFocusScore: "605–755",
    publishedFocusSort: 680,
    scoreStatistic: "Recommended range",
    classSize: null,
    shortNote:
      "IE recommends a current-GMAT score of 605–755 for Master in Finance applicants. This is the school's application guidance, not a reported class average or admitted-student range.",
    testPolicy:
      "Applicants may submit the current GMAT, GRE, CFA Level I, or CAIA Level I.",
    sourceLabel: "IE Master in Finance entrance-exam guidance",
    sourceUrl:
      "https://www.ie.edu/uncover-ie/entrance-exams-for-the-master-in-finance/",
  }),
  scoredProgram({
    slug: "cambridge-master-finance",
    schoolName: "University of Cambridge, Judge",
    programName: "Master of Finance",
    location: "Cambridge, UK",
    region: "Europe",
    programType: "Finance master's",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: 106,
    shortNote:
      "Cambridge reports a 106-student class but does not publish a class GMAT average or median. This is a post-experience programme: participants are expected to have at least two years of postgraduate finance experience.",
    testPolicy:
      "GMAT or GRE is optional, though it may support a borderline academic profile; Cambridge can request a score in rare cases.",
    sourceLabel: "Cambridge Master of Finance admissions",
    sourceUrl:
      "https://www.jbs.cam.ac.uk/masters-degrees/master-of-finance/apply/",
  }),
  scoredProgram({
    slug: "mit-sloan-master-finance",
    schoolName: "MIT Sloan",
    programName: "Master of Finance",
    location: "Cambridge, Massachusetts",
    region: "USA",
    programType: "Finance master's",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "MIT Sloan does not publish a current class GMAT average or median on its admissions FAQ. It aims for a class of approximately 120 and reviews applicants without test scores with no negative inference.",
    testPolicy:
      "GMAT or GRE is optional; submitted scores are encouraged as an additional data point and there is no minimum.",
    sourceLabel: "MIT Sloan MFin admissions FAQ",
    sourceUrl: "https://mitsloan.mit.edu/mfin/admissions/common-questions",
  }),
  scoredProgram({
    slug: "lbs-masters-management",
    schoolName: "London Business School",
    programName: "Masters in Management",
    location: "London, UK",
    region: "Europe",
    programType: "MiM",
    legacyScore: 691,
    scoreStatistic: "Average",
    classSize: 405,
    shortNote:
      "LBS reports a 691 average GMAT for its 2025 MiM class. The displayed current-score equivalent uses the nearest official old-scale concordance bin.",
    testPolicy: "A strong GMAT or GRE forms part of the admissions assessment.",
    sourceLabel: "London Business School MiM Employment Report 2025",
    sourceUrl:
      "https://assets.london.edu/hxo16fanegqh/7oC5DZdSFwJChIaAb4i9AE/e62b2c069b9c86ab5d75c841c006ee0e/mim_employment_report.pdf",
  }),
  scoredProgram({
    slug: "insead-master-management",
    schoolName: "INSEAD",
    programName: "Master in Management",
    location: "France and Singapore",
    region: "Europe",
    programType: "MiM",
    legacyScore: 690,
    scoreStatistic: "Average",
    classSize: 202,
    shortNote:
      "INSEAD reports a 690 average GMAT for the MiM'26 class. It publishes recommended section percentiles rather than a minimum total score.",
    testPolicy: "No minimum total; section-level recommendations are published.",
    sourceLabel: "INSEAD Annual Report 2023-24",
    sourceUrl:
      "https://www.insead.edu/sites/insead/files/2025-08/Annual-Report-2024.pdf",
  }),
  scoredProgram({
    slug: "hsg-strategy-international-management",
    schoolName: "University of St.Gallen (HSG)",
    programName: "Strategy and International Management",
    location: "St.Gallen, Switzerland",
    region: "Europe",
    programType: "MiM",
    legacyScore: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "HSG does not publish a class GMAT average or median for SIM. GMAT or GRE contributes 20% of the formal selection assessment.",
    testPolicy: "GMAT/GRE: 20% of selection.",
    sourceLabel: "HSG SIM admissions criteria",
    sourceUrl:
      "https://www.unisg.ch/en/studying/admission/admission-master/strategy-and-international-management/",
  }),
]

export const ALL_GRADUATE_PROGRAMS: GraduateProgram[] = [
  ...MBA_PROGRAMS,
  ...BUSINESS_MASTERS_PROGRAMS,
]
