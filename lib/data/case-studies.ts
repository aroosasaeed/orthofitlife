// ---------------------------------------------------------------------------
// Case studies — "The Problem Behind the Product"
// These are illustrative, everyday scenarios (clearly editorial, not case
// histories of real individuals). No medical claims: each ends in comfort
// language and, where relevant, a nudge toward healthcare professionals.
// ---------------------------------------------------------------------------

import type { CaseStudy, DeskHotspot } from "@/types/content";

export const caseStudies: CaseStudy[] = [
  {
    slug: "the-office-desk-hours",
    title: "The 8-Hour Chair",
    subtitle: "Long hours of sitting are hard to sit well through — here's the everyday problem, solved piece by piece.",
    persona: "Office worker",
    scene: "desk",
    problem: {
      headline: "Long hours of sitting can make maintaining a comfortable posture difficult.",
      body: "Standard chairs are flat where the spine curves. Over a shift, posture sinks in small nearly-invisible steps: the lower-back curve flattens first, the shoulders follow, and by mid-afternoon the effort of 'sitting properly' has quietly turned into a low-level fight your body gives up on.",
    },
    scenario: {
      headline: "An office employee spends 8–10 hours a day at a desk.",
      body: "Meet the composite: a 9-to-6er whose day starts with a 45-minute commute, whose chair was bought in bulk from a list, whose laptop sits 10cm below eye level, and whose only standing hours are the walk to the water dispenser. By Friday afternoons, their shoulders sit somewhere near their ears.",
    },
    needs: {
      headline: "What they actually need: additional lumbar support and better seating ergonomics.",
      body: "Not a chair purchase — the same mechanism, added to the chair they already have. Support at the belt-line. A screen raised to eye level. Feet no longer floating. And breaks that actually happen.",
    },
    solution: {
      headline: "The solution, part by part:",
      body: "A contoured lumbar cushion restores the curve the chair is missing; an adjustable footrest finishes the seat-to-floor chain; the screen gets a stand (or two books). Each product is small, moved-in-in-minutes, and makes the next good habit harder to skip.",
      productIds: ["orthofit-lumbar-01", "orthofit-ergo-02"],
    },
    howToUse: [
      { title: "Week 1 — Support first", description: "Fit the lumbar cushion at the belt-line. This is the anchor: everything else adjusts around it." },
      { title: "Week 2 — Complete the chain", description: "Add the footrest. Aim for hips slightly higher than knees, feet fully rested." },
      { title: "Week 3 — Raise the screen", description: "Laptop stand or two sturdy books. Top of screen at eye level, arm's length." },
      { title: "Every day — Break the hour", description: "Two standing minutes every half hour. Set three recurring alarms; delete them once it's habit." },
    ],
    expectedBenefit: {
      headline: "More supported and comfortable sitting — and a workday that ends differently.",
      body: "The composite customer's reported shift: less end-of-day stiffness, fewer posture-yawns after the third hour. Comfort is cumulative; small daily supports compound. (General comfort outcome, not a medical result.)",
    },
    tips: [
      "Start with the lumbar cushion — it's the anchor of the whole setup.",
      "The footrest solves 'my chair's too low' more cheaply than a new chair ever does.",
      "Movement breaks stay the non-negotiable; comfort products make the sitting blocks between them work.",
    ],
    relatedSlugs: ["lumbar-support-explained-in-simple-terms", "how-to-set-up-a-more-comfortable-desk"],
  },

  {
    slug: "the-side-sleeper",
    title: "The Side Sleeper's Night",
    subtitle: "When the night is spent on your side, alignment is a between-the-knees business.",
    persona: "Habitual side sleeper",
    scene: "sleep",
    problem: {
      headline: "Side sleeping quietly bends the knees toward each other, all night.",
      body: "Gravity loads your upper knee onto the lower one as you sleep. The precise pressure depends on mattress, weight and position — but for many people the result is morning stiffness at hip or knee that nobody connects to an 8-hour, single-position sleep posture.",
    },
    scenario: {
      headline: "Our composite sleeper sleeps on their left side, every night, and always has.",
      body: "Pillow height roughly right. Mattress decent. But the top knee slides down through the first hour and stays there — and the two-joint chain above (hip, low back) quietly rotates to compensate. Waking with an 'odd hip' has become a background expectation.",
    },
    needs: {
      headline: "What they need: comfortable positioning between the knees that lasts all night.",
      body: "Something shaped — not a pillow that turns away at midnight. Contours that cradle both knees and a core firm enough to keep spacing honest through position changes.",
    },
    solution: {
      headline: "The solution: a shaped knee pillow.",
      body: "A contoured memory-foam knee pillow keeps the knee gap where you'd set it standing relaxed. Beneath it, the lumbar-support story repeats for the mattress side of the ledger: a contour pillow screens the head-neck gap the same way the knee pillow screens the hip gap.",
      productIds: ["orthofit-knee-01", "orthofit-contour-01"],
    },
    howToUse: [
      { title: "Settle on your side", description: "Get into your usual position with your usual pillow first." },
      { title: "Slide the knee pillow in", description: "Between the knees, contoured pads cradling each knee." },
      { title: "Fold-test the height", description: "Should feel natural spacing, not a stretch — fold a thin towel under if it's too soon." },
      { title: "Try back-sleeping nights too", description: "Same pillow under the knees lays the back flat; different night, same product." },
    ],
    expectedBenefit: {
      headline: "A rested-spaced night: hips and knees at their natural line, neck supported.",
      body: "The reported result from our sample reviewers: waking feels 'unremarkable' — in sleep, that's the five-star outcome. (Comfort positioning, not treatment.)",
    },
    tips: [
      "Commit five nights — new positioning needs adaptation.",
      "Wash the cover with bedding; it's built to join the laundry rota.",
      "If you change mattresses, re-do the test: everything above the mattress shifts.",
    ],
    relatedSlugs: ["why-side-sleepers-use-knee-pillows", "how-to-choose-a-pillow-for-better-neck-support"],
  },

  {
    slug: "the-long-shift-runner",
    title: "The Long Shift Stander",
    subtitle: "Teaching, retail, clinics: eight hours on stone floors asks more from feet than war does.",
    persona: "Standing professional",
    scene: "standing",
    problem: {
      headline: "Hard floors underfoot, all day, compress what shoes never protected.",
      body: "Retail tiles, clinic linoleum and school corridors are among the hardest surfaces people stand on. Standard shoe boards cushion barely at all — and by hour five, 'tired feet' has become the day's background noise.",
    },
    scenario: {
      headline: "A teacher stands six hours of a school day, and it's the least of it.",
      body: "Standing, pacing, leaning, Sunday-marking hunched — then the commute. Tired feet are the least of it only because the lower back has opinions too. Both come back to the same missing layer: nothing absorbent between body and surface.",
    },
    needs: {
      headline: "What they need: underfoot cushioning and support that works in shoe after shoe.",
      body: "Insoles that keep mid-shift pressure spread out. And a small way to decompress in the evening for the standing-day side-effects.",
    },
    solution: {
      headline: "The solution: cushioning-forward insoles, plus an evening wedge.",
      body: "Soft-step cushioning insoles for the standing hours; a gentle leg-elevation wedge for the evening wind-down that helps legs feel restored for tomorrow.",
      productIds: ["orthofit-insole-02", "orthofit-ergo-03"],
    },
    howToUse: [
      { title: "Trim to size", description: "Insole at home, printed guide, two-minute trim." },
      { title: "Break in across three days", description: "Arch support takes adaptation — give it a few days before verdicts." },
      { title: "Rotate pairs", description: "Two sets alternating weekly beat one set daily." },
      { title: "Evening: legs up, 10 minutes", description: "The wedge's gentle incline; read a magazine, let the legs rest." },
    ],
    expectedBenefit: {
      headline: "End-of-day foot fatigue softened, evenings more restorative.",
      body: "Sample-reviewer commentary: 'noticeably less than before' is the honest ceiling for insoles — and 'noticeably less' is the difference a standing professional actually feels.",
    },
    tips: [
      "Insoles are comfort tools, not treatment — for diagnosed foot pain, a podiatrist first.",
      "Hard floors are the test; carpeted rooms don't count in your break-in impressions.",
      "House slippers count: keep a cushioned pair for the kitchen hours too.",
    ],
    relatedSlugs: ["do-orthopedic-insoles-actually-help", "foot-support-why-your-shoes-matter"],
  },

  {
    slug: "the-commuter",
    title: "The Commuter's Hour",
    subtitle: "Karachi to Lahore — or just G-9 to Blue Area. Upright dozing is a neck problem.",
    persona: "Frequent traveller",
    scene: "driving",
    problem: {
      headline: "Travel asks your body to sleep upright — the position pillows never shaped for.",
      body: "Car seats lean back a little; bus seats recline less than road-movie plots suggest; plane seats recline 4 degrees. In every one, the head eventually gives up on staying balanced — and the neck that made up the difference pays the bill.",
    },
    scenario: {
      headline: "A consultant spends 4 hours per week driving between cities.",
      body: "Highway seatbelt angles. Rest-stop chairs. Hotel beds softer or firmer than home. Add one 22:30 bus back for the urgent Monday trip, and the travelling professional's body ledger gets the worst of both worlds.",
    },
    needs: {
      headline: "What they need: seat comfort that travels, and neck support that packs.",
      body: "A cushion that makes the drive-seat geometry bearable and a neck ring that packs into bag-bottom space.",
    },
    solution: {
      headline: "The solution: compact supports built for transit.",
      body: "The Ergonomic Lumbar Support Cushion transitions from office chair to car seat (strap included). The Travel Companion Neck Pillow packs to pouch size and cradles the neck in every doze.",
      productIds: ["orthofit-lumbar-01", "orthofit-neck-02"],
    },
    howToUse: [
      { title: "Car seat: strap it in", description: "Same cushion, same belt-line position — the strap works on car seats too." },
      { title: "Neck pillow: opening forward", description: "The back of the ring hugs where the neck rests; lean gently." },
      { title: "Pouch habit", description: "Compress into the attached pouch when done; keep it in the work bag you already carry." },
    ],
    expectedBenefit: {
      headline: "Arriving without the drive-neck that used to arrive instead of you.",
      body: "Rest-comfort only — good journeys end with how you slept sitting up, and upright-sleep support is the honest way to begin.",
    },
    tips: [
      "One cushion, two seats: office-to-car transfer means no 'left it at work' betrayals.",
      "Upright dozing has limits; real sleep needs a real bed — supports just blunt the transit.",
      "Long drives: mirrors adjusted *after* the lumbar cushion is placed.",
    ],
    relatedSlugs: ["lumbar-support-explained-in-simple-terms"],
  },

  {
    slug: "the-active-recovery",
    title: "The Weekend Athlete's Recovery",
    subtitle: "Saturday morning cricket, aches that respect neither scoreboard nor Sunday.",
    persona: "Sports enthusiast",
    scene: "walking",
    problem: {
      headline: "Recovery is the invisible half of sport — and nobody sells it a chair.",
      body: "The weekend athlete's Monday is built on whatever their Sunday did. Foot strike volume, one awkward dive at point, a side-sleep complementary stiffness — recovery quality quietly decides how many weekends the body shows up for.",
    },
    scenario: {
      headline: "A Saturday-morning cricket regular with a Sunday that's mostly the sofa.",
      body: "Grip-heavy match days. Sudden lateral stops in flats chosen for price, not sport. Evenings that end in doom-scrolling rather than stretching. The Monday stiffness knows more about the totality than the scoreboard ever will.",
    },
    needs: {
      headline: "What they need: sport-stance underfoot support and recovery-friendly resting positions.",
      body: "Insoles built for the stops-and-turns of sport (not just standing), and evening comfort positioning that makes active recovery a habit rather than a hope.",
    },
    solution: {
      headline: "The solution: stabilized sport insoles + recovery positioning.",
      body: "ActiveSport insoles for the heel-cradle and grip layer sport demands; the Elevating Leg Wedge for the evening 'legs-up' routine; the contour pillow so Monday night's side-sleep doesn't undo Sunday's work.",
      productIds: ["orthofit-insole-03", "orthofit-ergo-03", "orthofit-contour-01"],
    },
    howToUse: [
      { title: "Sport shoes: replace the stock board", description: "ActiveSport insoles take the slot; trim fine, sport shoes don't forgive big cuts." },
      { title: "Post-match: legs up", description: "15 minutes on the wedge while you review how point was dropped three times." },
      { title: "Sleep positioning", description: "Contour pillow for the neck; knee pillow if side-sleeping is your default." },
    ],
    expectedBenefit: {
      headline: "Recovery as routine rather than accident.",
      body: "Sample-reviewer's language applies: comfort positioning 'makes the next session easier to show up for'. No product treats an injury; all can make the day-after feel considered.",
    },
    tips: [
      "Sport insoles have a stabilising job; comfort insoles cushion — don't mix them up.",
      "If pain is sharp or persistent — professional assessment, not a shopping decision.",
      "The wedge supports rest raised legs; keep sessions short and pleasant.",
    ],
    relatedSlugs: ["do-orthopedic-insoles-actually-help"],
  },
];

export const caseStudyMap = new Map(caseStudies.map((c) => [c.slug, c]));

// ---------------------------------------------------------------------------
// "A Day at the Desk" — interactive hotspot artifact
// ---------------------------------------------------------------------------

export const deskHotspots: DeskHotspot[] = [
  {
    id: "neck",
    label: "Neck",
    x: 50, y: 18,
    challenge: "The screen sits below eye level, so the head leans forward hour after hour.",
    consideration: "Raise the screen: top edge at or slightly below eye level, an arm's length away.",
    productCategory: "Neck Pillows & Contour Pillows",
    tip: "Every hour, slowly look left, right, up and down once — gentle movement beats frozen posture.",
    relatedProductIds: ["orthofit-neck-01", "orthofit-contour-01"],
  },
  {
    id: "upper-back",
    label: "Back",
    x: 52, y: 34,
    challenge: "Shoulders roll forward as posture quietly sinks — the classic 'start upright, end slumped' cycle.",
    consideration: "Keep the shoulder blades relaxed and let the back panel (or cushion) do the holding.",
    productCategory: "Back Support",
    tip: "Shoulder rolls backwards five times, every break — motion resets the slouch better than forcing it still.",
    relatedProductIds: ["orthofit-back-01", "orthofit-back-02"],
  },
  {
    id: "lower-back",
    label: "Lower Back",
    x: 48, y: 46,
    challenge: "The natural inward curve flattens against the flat chair-back, hour after hour.",
    consideration: "Support exactly at the belt-line — the curve rests rather than collapses.",
    productCategory: "Lumbar Cushions",
    tip: "Find the gap: felt behind your belt-line is where the cushion goes. Test with a rolled towel first.",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-lumbar-02"],
  },
  {
    id: "hips-tailbone",
    label: "Hips & Tailbone",
    x: 50, y: 58,
    challenge: "The tailbone presses directly into the flat seat for the entire workday.",
    consideration: "A coccyx cut-out removes the contact: bone hovers over a channel, foam carries the weight.",
    productCategory: "Coccyx & Seat Cushions",
    tip: "Shift your weight forward slightly when you sit back down — the cut-out works best when you let it.",
    relatedProductIds: ["orthofit-coccyx-01", "orthofit-seat-02"],
  },
  {
    id: "feet",
    label: "Feet",
    x: 52, y: 84,
    challenge: "Feet dangle or knees hover above hip level, un-setting the entire chain above.",
    consideration: "Aim for hips a touch higher than knees, feet fully supported on floor or footrest.",
    productCategory: "Ergonomic Supports (Footrest)",
    tip: "Alternate between heels-anchored and toes-anchored through the day — variety is a feature.",
    relatedProductIds: ["orthofit-ergo-02", "orthofit-insole-02"],
  },
];
