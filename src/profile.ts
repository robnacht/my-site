/**
 * ═══════════════════════════════════════════════════════════════════════
 *  YOUR PROFILE — this is the main file you edit. (The other one is
 *  src/theme.ts, where you pick your look.)
 * ═══════════════════════════════════════════════════════════════════════
 *
 * Everything here flows automatically to:
 *   - /api/whoami and /api/profile  (what the course platform reads)
 *   - your home page and /about     (what humans read)
 *
 * Because both pages and APIs read from THIS one object, they can never
 * disagree, and "pages match the API" is one of the graded checks.
 *
 * Fill in every field, replace the placeholder photo, and you're done.
 */

export const profile = {
  /** Your name as you want it to appear everywhere. */
  displayName: "Rob Nachtman",

  /** Your UD email — must match the one you signed into the course with. */
  email: "robnacht@udel.edu",

  /** Where you're from. Shows on your roster card and /about. */
  hometown: "State College, Pennsylvania",

  /**
   * 2 to 4 fun facts (the grader checks the count!). Real ones: they're
   * how classmates find something to say hello about.
   */
  funFacts: [
    "The last two years of my professional career have been spent learning and working within the financial services industry.",
    "I played football at the University of Delaware for four years and also coached for a season!",
    "Some of my favorite ways to spend free time include spending time with family and friends, enjoying nature, and carpentry."
  ],

  /** One decision you're proud of, in a sentence. */
  decisionImProudOf:
    "I was able to graduate from high school early to join the football team, and was one of the first players to do this at UD.",

  /**
   * Your photo. Replace public/photo.svg with a real photo of you
   * (e.g. put photo.jpg in the public/ folder and change this to "/photo.jpg").
   * It must be a real image file: the grader fetches it and checks.
   */
  photoPath: "myphoto.jpg",

  /**
   * Who can see your roster card:
   *   "class"          — your classmates and the professor (recommended)
   *   "professor-only" — just the professor
   */
  rosterVisibility: "class" as "class" | "professor-only",

  /** A one-line tagline for your home page. Make it yours. */
  tagline: "AD ASTRA PER DIFFICULTATES",

  /**
   * A short bio for your home page: two or three sentences, written like
   * a person, not a resume. What are you studying? What do you care about?
   */
  bio: "I am currently enrolled in the Alfred Lerner College of Business & Economics at the University of Delaware, studying international business. This site will work as my live portfolio (every course challenge deploys here as a live service.)",

  /**
   * Your GitHub repo URL. The course platform reads this from /api/health to
   * verify you have ≥ 5 commits spread over days (not one bulk dump).
   * Example: "https://github.com/your-username/your-repo"
   */
  repoUrl: "https://github.com/robnacht/my-site",
};
