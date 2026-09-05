/**
 * Public MBA programme data from school-owned class profiles, brochures, and
 * admissions pages. Scores are shown only when the cited official source
 * publishes the figure for the named cohort or describes it as current.
 */

export type Region = "USA" | "Europe" | "Asia"

export type MbaScoreStatistic =
  | "Median"
  | "Average"
  | "Observed range"
  | "Not published"

export interface MbaSchool {
  slug: string
  name: string
  location: string
  region: Region
  /** School-published score on the current 205-805 GMAT scale. */
  currentGMAT: number | string | null
  /** School-published score on the previous 200-800 GMAT scale. */
  legacyGMAT: number | string | null
  scoreStatistic: MbaScoreStatistic
  classSize: number | null
  shortNote: string
  testPolicy: string
  sourceLabel: string
  sourceUrl: string
}

const M7: MbaSchool[] = [
  {
    slug: "harvard-hbs",
    name: "Harvard Business School",
    location: "Boston, MA",
    region: "USA",
    currentGMAT: 685,
    legacyGMAT: 730,
    scoreStatistic: "Median",
    classSize: 943,
    shortNote:
      "HBS reports current- and previous-edition medians for its MBA Class of 2027. The figures describe enrolled students, not admissions targets.",
    testPolicy:
      "GMAT or GRE is required; HBS publishes no minimum and states no preference between the tests.",
    sourceLabel: "HBS MBA Class of 2027 profile",
    sourceUrl: "https://www.hbs.edu/mba/admissions/class-profile",
  },
  {
    slug: "stanford-gsb",
    name: "Stanford Graduate School of Business",
    location: "Stanford, CA",
    region: "USA",
    currentGMAT: null,
    legacyGMAT: null,
    scoreStatistic: "Not published",
    classSize: 434,
    shortNote:
      "Stanford's official Class of 2027 profile confirms enrollment, but its score widgets did not expose a benchmark that could be verified for this audit, so no score is shown.",
    testPolicy:
      "GMAT or GRE is required; Stanford publishes no minimum and states no preference between the tests.",
    sourceLabel: "Stanford MBA Class of 2027 profile",
    sourceUrl:
      "https://www.gsb.stanford.edu/programs/mba/admission/class-profile",
  },
  {
    slug: "wharton",
    name: "Wharton School (UPenn)",
    location: "Philadelphia, PA",
    region: "USA",
    currentGMAT: null,
    legacyGMAT: 732,
    scoreStatistic: "Average",
    classSize: 866,
    shortNote:
      "Wharton's official page retains a 732 previous-edition average for the Class of 2026. Its newer score widgets were not reliably readable during this audit, so no current-GMAT figure is shown.",
    testPolicy:
      "GMAT or GRE is accepted; Wharton publishes no minimum and states no preference between the tests.",
    sourceLabel: "Wharton MBA class profile (Class of 2026 archive)",
    sourceUrl: "https://mba.wharton.upenn.edu/class-profile/",
  },
  {
    slug: "booth",
    name: "Chicago Booth",
    location: "Chicago, IL",
    region: "USA",
    currentGMAT: 675,
    legacyGMAT: 740,
    scoreStatistic: "Median",
    classSize: 635,
    shortNote:
      "Booth reports medians of 675 on the current GMAT and 740 on the previous edition for its Class of 2027.",
    testPolicy:
      "GMAT or GRE scores are reviewed as one component of Booth's holistic admissions process.",
    sourceLabel: "Chicago Booth MBA Class of 2027 profile",
    sourceUrl:
      "https://www.chicagobooth.edu/mba/full-time/admissions/class-profile",
  },
  {
    slug: "kellogg",
    name: "Kellogg School (Northwestern)",
    location: "Evanston, IL",
    region: "USA",
    currentGMAT: 687,
    legacyGMAT: null,
    scoreStatistic: "Average",
    classSize: 534,
    shortNote:
      "Kellogg reports a 687 current-GMAT average for its two-year MBA Class of 2027. No previous-edition figure is inferred here.",
    testPolicy:
      "Kellogg accepts GMAT or GRE scores as part of its full-time MBA application review.",
    sourceLabel: "Kellogg MBA Class of 2027 announcement",
    sourceUrl:
      "https://www.kellogg.northwestern.edu/news/blog/2025/11/05/welcoming-class-2027-high-achievers/",
  },
  {
    slug: "mit-sloan",
    name: "MIT Sloan",
    location: "Cambridge, MA",
    region: "USA",
    currentGMAT: null,
    legacyGMAT: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "MIT Sloan's official Class of 2027 page did not expose a score benchmark in verifiable page content during this audit, so no score or cohort size is shown.",
    testPolicy:
      "Applicants should confirm the current testing requirements directly on MIT Sloan's admissions site.",
    sourceLabel: "MIT Sloan MBA Class of 2027 profile",
    sourceUrl: "https://mitsloan.mit.edu/mba/meet-class/class-profile",
  },
  {
    slug: "columbia",
    name: "Columbia Business School",
    location: "New York, NY",
    region: "USA",
    currentGMAT: 690,
    legacyGMAT: 734,
    scoreStatistic: "Average",
    classSize: 982,
    shortNote:
      "Columbia reports averages of 690 on the current GMAT and 734 on the previous edition for its MBA class entering in 2025.",
    testPolicy:
      "A valid GMAT, Executive Assessment, or GRE score is required; Columbia does not offer test waivers.",
    sourceLabel: "Columbia MBA class entering 2025 profile",
    sourceUrl:
      "https://academics.business.columbia.edu/admissions/mba/class-profile",
  },
]

const T15: MbaSchool[] = [
  {
    slug: "tuck",
    name: "Tuck (Dartmouth)",
    location: "Hanover, NH",
    region: "USA",
    currentGMAT: 671,
    legacyGMAT: 727,
    scoreStatistic: "Average",
    classSize: 304,
    shortNote:
      "Tuck reports averages of 671 on the current GMAT and 727 on the previous edition for its Class of 2027.",
    testPolicy:
      "Tuck accepts GMAT or GRE scores and publishes no minimum; qualifying applicants may request a waiver.",
    sourceLabel: "Tuck MBA Class of 2027 profile",
    sourceUrl: "https://tuck.dartmouth.edu/admissions/class-profile",
  },
  {
    slug: "yale-som",
    name: "Yale School of Management",
    location: "New Haven, CT",
    region: "USA",
    currentGMAT: 675,
    legacyGMAT: 740,
    scoreStatistic: "Median",
    classSize: 367,
    shortNote:
      "Yale SOM reports medians of 675 on the current GMAT and 740 on the previous edition for its Class of 2027.",
    testPolicy:
      "A verified GMAT or GRE score is required; Yale SOM publishes no minimum score.",
    sourceLabel: "Yale SOM MBA Class of 2027 announcement",
    sourceUrl: "https://som.yale.edu/story/2025/meet-mba-class-2027",
  },
  {
    slug: "stern",
    name: "Stern (NYU)",
    location: "New York, NY",
    region: "USA",
    currentGMAT: 682,
    legacyGMAT: 737,
    scoreStatistic: "Average",
    classSize: 336,
    shortNote:
      "Stern reports averages of 682 on the current GMAT and 737 on the previous edition for its Class of 2027.",
    testPolicy:
      "Stern accepts several standardized tests for the full-time MBA; its published profile includes waiver recipients.",
    sourceLabel: "NYU Stern MBA Class of 2027 profile",
    sourceUrl:
      "https://www.stern.nyu.edu/programs-admissions/full-time-mba/community/class-profile",
  },
  {
    slug: "haas",
    name: "Berkeley Haas",
    location: "Berkeley, CA",
    region: "USA",
    currentGMAT: 675,
    legacyGMAT: 730,
    scoreStatistic: "Median",
    classSize: 273,
    shortNote:
      "Haas reports medians of 675 on the current GMAT and 730 on the previous edition for its Class of 2027.",
    testPolicy:
      "Applicants should confirm current test requirements and waiver eligibility on the Haas admissions site.",
    sourceLabel: "Berkeley Haas MBA Class of 2027 profile",
    sourceUrl: "https://mba.haas.berkeley.edu/admissions/class-profile",
  },
  {
    slug: "anderson",
    name: "UCLA Anderson",
    location: "Los Angeles, CA",
    region: "USA",
    currentGMAT: null,
    legacyGMAT: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "UCLA Anderson's current admissions page did not expose a verifiable full-time MBA score benchmark during this audit, so no score is shown.",
    testPolicy:
      "The full-time MBA is test-optional; applicants may submit GMAT, GRE, or Executive Assessment scores.",
    sourceLabel: "UCLA Anderson full-time MBA admissions",
    sourceUrl:
      "https://www.anderson.ucla.edu/degrees/full-time-mba/admissions",
  },
  {
    slug: "ross",
    name: "Ross (Michigan)",
    location: "Ann Arbor, MI",
    region: "USA",
    currentGMAT: 681,
    legacyGMAT: 731,
    scoreStatistic: "Average",
    classSize: 379,
    shortNote:
      "Ross reports averages of 681 on the current GMAT and 731 on the previous edition for its Class of 2027.",
    testPolicy:
      "Ross reviews applications holistically and states that no single score determines the outcome.",
    sourceLabel: "Michigan Ross MBA Class of 2027 profile",
    sourceUrl:
      "https://michiganross.umich.edu/graduate/full-time-mba/admissions/class-profile",
  },
  {
    slug: "darden",
    name: "Darden (UVA)",
    location: "Charlottesville, VA",
    region: "USA",
    currentGMAT: 665,
    legacyGMAT: 730,
    scoreStatistic: "Median",
    classSize: 361,
    shortNote:
      "Darden reports medians of 665 on the current GMAT and 730 on the previous edition for its Class of 2027.",
    testPolicy:
      "Applicants must submit a standardized test score or receive a standardized-test waiver.",
    sourceLabel: "UVA Darden MBA Class of 2027 profile",
    sourceUrl:
      "https://www.darden.virginia.edu/programs/blog/introducing-uva-dardens-full-time-mba-class-of-2027-class-profile",
  },
  {
    slug: "fuqua",
    name: "Fuqua (Duke)",
    location: "Durham, NC",
    region: "USA",
    currentGMAT: null,
    legacyGMAT: "680–770",
    scoreStatistic: "Observed range",
    classSize: 426,
    shortNote:
      "Fuqua publishes a middle-80% previous-edition GMAT range of 680-770 for its Class of 2027. A range is not an average, target, or cutoff.",
    testPolicy:
      "Fuqua accepts the GMAT, GRE, or Executive Assessment without a preference among the tests.",
    sourceLabel: "Duke Fuqua Daytime MBA Class of 2027 profile",
    sourceUrl: "https://www.fuqua.duke.edu/programs/daytime-mba/class-profile",
  },
]

const EUROPE: MbaSchool[] = [
  {
    slug: "insead",
    name: "INSEAD",
    location: "Fontainebleau, France",
    region: "Europe",
    currentGMAT: null,
    legacyGMAT: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "INSEAD's current official MBA programme and admissions pages did not publish a class GMAT average or median that could be verified for this audit, so no score is shown.",
    testPolicy:
      "Applicants may submit GMAT or GRE scores and should confirm current requirements with INSEAD.",
    sourceLabel: "INSEAD MBA programme profile",
    sourceUrl:
      "https://www.insead.edu/master-programmes/master-business-administration",
  },
  {
    slug: "lbs",
    name: "London Business School",
    location: "London, UK",
    region: "Europe",
    currentGMAT: 645,
    legacyGMAT: null,
    scoreStatistic: "Average",
    classSize: null,
    shortNote:
      "LBS says its current MBA class average is around 645 on the current GMAT, with a typical range of 555-805. The displayed average is not a cutoff.",
    testPolicy:
      "GMAT or GRE is required; LBS says the minimum score it usually accepts is around 555.",
    sourceLabel: "London Business School MBA admissions FAQ",
    sourceUrl: "https://www.london.edu/masters-degrees/mba/faqs?entry=true",
  },
  {
    slug: "iese",
    name: "IESE Business School",
    location: "Barcelona, Spain",
    region: "Europe",
    currentGMAT: "545–715",
    legacyGMAT: "580–750",
    scoreStatistic: "Observed range",
    classSize: 370,
    shortNote:
      "IESE publishes acceptance-score ranges of 545-715 on the current GMAT and 580-750 on the previous edition. These ranges are not cohort averages or guarantees.",
    testPolicy:
      "IESE accepts GMAT and GRE results and publishes the observed acceptance ranges shown here.",
    sourceLabel: "IESE MBA class profile",
    sourceUrl: "https://www.iese.edu/mba/class-profile",
  },
  {
    slug: "oxford-said",
    name: "Saïd (Oxford)",
    location: "Oxford, UK",
    region: "Europe",
    currentGMAT: null,
    legacyGMAT: 680,
    scoreStatistic: "Median",
    classSize: 348,
    shortNote:
      "Oxford's current MBA brochure reports a 680 previous-edition median for the 2024-25 cohort. No current-scale equivalent is inferred here.",
    testPolicy:
      "Applicants should confirm the current GMAT or GRE requirement on Oxford Saïd's admissions site.",
    sourceLabel: "Oxford MBA 2026-27 brochure",
    sourceUrl:
      "https://www.sbs.ox.ac.uk/sites/default/files/2026-03/oxford-mba-brochure-2026-27-updatedv2_0.pdf",
  },
  {
    slug: "imd",
    name: "IMD",
    location: "Lausanne, Switzerland",
    region: "Europe",
    currentGMAT: 615,
    legacyGMAT: null,
    scoreStatistic: "Average",
    classSize: 90,
    shortNote:
      "IMD reports a 615 average GMAT/GMAC score for its 2026 MBA class. It separately describes 555 as an admissions score to aim for.",
    testPolicy:
      "IMD accepts GMAT, GRE, or Executive Assessment results and recommends aiming for 555 or above.",
    sourceLabel: "IMD MBA 2026 class profile",
    sourceUrl: "https://www.imd.org/degree/mba/",
  },
]

const ASIA: MbaSchool[] = [
  {
    slug: "ceibs",
    name: "CEIBS",
    location: "Shanghai, China",
    region: "Asia",
    currentGMAT: 615,
    legacyGMAT: null,
    scoreStatistic: "Median",
    classSize: 105,
    shortNote:
      "CEIBS reports a 615 current-GMAT median for its MBA 2027 cohort. The school states that admissions are not based on a single cutoff.",
    testPolicy:
      "CEIBS accepts GMAT, GRE, or its own admissions test and reviews applications holistically.",
    sourceLabel: "CEIBS MBA 2027 brochure",
    sourceUrl:
      "https://www.ceibs.edu/sites/default/files/u14/ceibs_mba_brochure.pdf",
  },
  {
    slug: "isb",
    name: "Indian School of Business",
    location: "Hyderabad, India",
    region: "Asia",
    currentGMAT: null,
    legacyGMAT: null,
    scoreStatistic: "Not published",
    classSize: null,
    shortNote:
      "ISB's official flagship PGP class-profile page did not expose a verifiable score benchmark in page content during this audit, so no score is shown.",
    testPolicy:
      "The flagship PGP accepts GMAT or GRE scores; applicants should confirm current requirements with ISB.",
    sourceLabel: "ISB flagship PGP class profile",
    sourceUrl:
      "https://www.isb.edu/programmes/post-graduate-programmes/pgp-in-management/class-profile",
  },
  {
    slug: "nus",
    name: "NUS Business School",
    location: "Singapore",
    region: "Asia",
    currentGMAT: 615,
    legacyGMAT: 670,
    scoreStatistic: "Average",
    classSize: 120,
    shortNote:
      "NUS reports full-time MBA averages of 615 on the current GMAT and 670 on the previous edition in its August 2026 brochure.",
    testPolicy:
      "NUS accepts both current and previous GMAT results as well as GRE scores for the MBA application.",
    sourceLabel: "NUS MBA August 2026 brochure",
    sourceUrl:
      "https://mba.nus.edu.sg/wp-content/uploads/sites/71/2025/07/NUS-MBA-Brochure-Aug-2026.pdf",
  },
]

export const ALL_SCHOOLS: MbaSchool[] = [...M7, ...T15, ...EUROPE, ...ASIA]

export function getSchoolBySlug(slug: string): MbaSchool | undefined {
  return ALL_SCHOOLS.find((school) => school.slug === slug)
}

export function schoolsByRegion(region: Region): MbaSchool[] {
  return ALL_SCHOOLS.filter((school) => school.region === region)
}
