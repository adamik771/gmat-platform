import { ALL_SCHOOLS, type Region } from "@/lib/mba-schools"
import { convertOldToFocus, formatScoreRange } from "@/lib/score-conversion"

export type ProgramType = "MBA" | "MiM" | "Finance master's"
export type ScoreStatistic = "Approximate median" | "Median" | "Average" | "Not published"

export interface GraduateProgram {
  slug: string
  schoolName: string
  programName: string
  location: string
  region: Region
  programType: ProgramType
  legacyScore: number | null
  focusEquivalent: string | null
  focusSort: number | null
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
    "focusEquivalent" | "focusSort" | "competitiveGMAT" | "competitiveFocus"
  >,
): GraduateProgram {
  const equivalent = input.legacyScore == null ? null : currentEquivalent(input.legacyScore)
  return {
    ...input,
    focusEquivalent: equivalent?.display ?? null,
    focusSort: equivalent?.sort ?? null,
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

