// ---------------------------------------------------------------------------
// OrthofitLife Research — sample starter articles
// ---------------------------------------------------------------------------
// These articles translate published research into plain language. Every
// source below was verified against the publisher record at the time of
// writing (real DOIs, no fabricated studies). Summaries deliberately state
// the limits of the evidence — consumer products do not treat disease, and
// most of this literature studies behaviour or biomechanics, not shopping.
// ---------------------------------------------------------------------------

import type { ResearchArticle, ArticleSection } from "@/types/content";

const SOURCES_DUNSTAN = {
  title: "Breaking Up Prolonged Sitting Reduces Postprandial Glucose and Insulin Responses",
  authors: "Dunstan D.W., Kingwell B.A., Larsen R., Healy G.N., Cerin E., Hamilton M.T., Shaw J.E., Bertovic D.A., Zimmet P.Z., Salmon J., Owen N.",
  publication: "Diabetes Care",
  year: 2012,
  doi: "10.2337/dc11-1931",
  url: "https://diabetesjournals.org/care/article/35/5/976/38669",
  kind: "journal" as const,
  summary: "Randomised crossover trial in overweight/obese adults: 2-minute light- or moderate-walk breaks every 20 minutes lowered post-meal glucose and insulin versus uninterrupted sitting.",
};

const SOURCES_BISWAS = {
  title: "Sedentary Time and Its Association With Risk for Disease Incidence, Mortality, and Hospitalization in Adults: A Systematic Review and Meta-analysis",
  authors: "Biswas A., Oh P.I., Faulkner G.E., Bajaj R.R., Silver M.A., Mitchell M.S., Alter D.A.",
  publication: "Annals of Internal Medicine",
  year: 2015,
  doi: "10.7326/M14-1651",
  url: "https://www.acpjournals.org/doi/10.7326/M14-1651",
  kind: "systematic-review" as const,
  summary: "Meta-analysis of 47 studies: more sedentary time is associated with higher risks of cardiovascular disease, diabetes and mortality — including among physically active adults. Observational evidence.",
};

const SOURCES_WHO = {
  title: "World Health Organization 2020 guidelines on physical activity and sedentary behaviour",
  authors: "Bull F.C., Al-Ansari S.S., Biddle S., Borodulin K., Buman M.P., Cardon G., et al.",
  publication: "British Journal of Sports Medicine",
  year: 2020,
  doi: "10.1136/bjsports-2020-102955",
  url: "https://bjsm.bmj.com/content/54/24/1451",
  kind: "guideline" as const,
  summary: "WHO guideline: adults should limit total sedentary time and replace it with activity of any intensity; no specific sitting-hours threshold is endorsed.",
};

const SOURCES_REN = {
  title: "Effect of pillow height on the biomechanics of the head-neck complex: investigation of the cranio-cervical pressure and cervical spine alignment",
  authors: "Ren S., Wong D.W.-C., Yang H., Zhou Y., Lin J., Zhang M.",
  publication: "PeerJ",
  year: 2016,
  doi: "10.7717/peerj.2397",
  url: "https://peerj.com/articles/2397/",
  kind: "journal" as const,
  summary: "Small laboratory study (10 healthy volunteers) plus modelling: pillow height affected measured head-neck pressures and cervical alignment. Not a pain-relief trial.",
};

const SOURCES_LANDORF = {
  title: "Effectiveness of Foot Orthoses to Treat Plantar Fasciitis: A Randomized Trial",
  authors: "Landorf K.B., Keenan A.-M., Herbert R.D.",
  publication: "Archives of Internal Medicine",
  year: 2006,
  doi: "10.1001/archinte.166.12.1305",
  url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410648",
  kind: "journal" as const,
  summary: "Participant-and-assessor-blinded RCT: small short-term reductions in pain and improvements in function at 3 months, largely absent by 12 months; prefabricated≈custom.",
};

const SOURCES_COCHRANE_LUMBAR = {
  title: "Lumbar supports for prevention and treatment of low back pain",
  authors: "van Duijvenbode I., Jellema P., van Poppel M., van Tulder M.W.",
  publication: "Cochrane Database of Systematic Reviews",
  year: 2008,
  doi: "10.1002/14651858.CD001823.pub3",
  url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001823.pub3/full",
  kind: "systematic-review" as const,
  summary: "Moderate-quality evidence that lumbar supports were not more effective than no intervention or training for prevention; treatment effectiveness remains unclear.",
};

const SOURCES_LEE = {
  title: "Effect of an ergonomic intervention involving workstation adjustments on musculoskeletal pain in office workers — a randomized controlled clinical trial",
  authors: "Lee S., de Barros F.C., de Castro C.S.M., de Oliveira Sato T.",
  publication: "Industrial Health",
  year: 2021,
  doi: "10.2486/indhealth.2020-0188",
  url: "https://www.jstage.jst.go.jp/article/indhealth/59/2/59_2020-0188/_article",
  kind: "journal" as const,
  summary: "RCT in office workers: workstation adjustments matched to individual measurements reduced reported neck, shoulder, upper-back and wrist/hand pain (not lower back).",
};

function section(id: string, heading: string, paragraphs: string[], bullets?: string[]): ArticleSection {
  return { id, heading, paragraphs, bullets: bullets ? [...bullets] : undefined };
}

export const researchArticles: ResearchArticle[] = [
  {
    slug: "sitting-what-research-knows",
    title: "Why Does Sitting for Long Hours Feel So Uncomfortable?",
    excerpt:
      "Researchers have measured what long sitting does to glucose, posture and comfort — and tested whether tiny breaks counteract it. Here's the plain-language version, with the receipts.",
    topic: "Sitting",
    readingMinutes: 9,
    publishedAt: "2025-04-02",
    visual: "lumbar",
    tone: "teal",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-coccyx-01", "orthofit-ergo-02"],
    relatedSlugs: ["how-to-choose-a-pillow-for-better-neck-support", "do-orthopedic-insoles-actually-help"],
    sections: [
      section("short-answer", "The Short Answer", [
        "Long, uninterrupted sitting is your body quietly accumulating three different costs at once: a biomechanical cost (posture sinking, pressure concentrating in a few spots), a metabolic cost (your muscles switch off from their glucose-management work), and a movement-deficit cost (the hours your body may expect activity simply vanish).",
        "The part the research is genuinely confident about: breaking the sitting up helps. Even two minutes of light walking every twenty minutes measurably reduced post-meal glucose and insulin responses in a controlled trial. That is one of the best-supported, cheapest ergonomic 'interventions' available — and it's free.",
      ]),
      section("what-researchers-know", "What Researchers Know", [
        "In the Dunstan et al. crossover trial (2012), adults at risk of type 2 diabetes sat for five hours on two occasions. On one occasion they broke the sitting with two minutes of easy walking every 20 minutes; on the other they sat through. The breaks measurably lowered blood glucose and insulin responses after meals by 24–25% — a striking result for so small an activity change.",
        "The 2015 Biswas et al. meta-analysis pooled 47 studies and found higher sedentary time associated with increased risks of cardiovascular disease, type 2 diabetes and mortality — associations that persisted even among people who exercised regularly. Important limits: these are observational studies, so they show association, not proof that sitting causes the outcomes. They also define 'sedentary time' in hours per day, not per-chair discomfort.",
        "The WHO's 2020 physical-activity guidelines incorporate this evidence: limit total sedentary time, replace it with activity at any intensity, and don't wait for a scientifically-defined 'danger hour' — the evidence doesn't support one specific threshold to aim under.",
      ]),
      section("in-simple-terms", "In Simple Terms", [
        "Picture your leg muscles as large, hungry sponges that soak up blood sugar while they work. Sit still long enough and the sponges stop soaking. Stand — even to answer a phone — and they resume. That's the honest mechanical story behind the glucose findings.",
        "The posture story is simpler still: a slumped spine, hour after hour, asks your smaller stabilising muscles to run an unbroken shift with no relief rotation. Discomfort is the wage statement.",
        "A lumbar or coccyx cushion changes the *mechanics* of each sitting block (support and pressure); movement breaks change the *metabolic* story between blocks. They solve different halves of the same day, and it's reasonable to want both.",
      ]),
      section("what-you-can-do", "What You Can Do", [
        "Note: these are practical comfort and habit steps from general guidance — not medical recommendations. Persistent pain belongs with a healthcare professional.",
      ], [
        "Break every sitting stretch of 30–40 minutes: stand, walk, sort a drawer — two minutes is enough.",
        "Make breaks frictionless: a small water cup that needs refilling is a reliable habit-maker.",
        "Support what supports you: a lumbar cushion at the belt-line makes the supported sitting blocks feel like relief rather than work.",
        "Choose seats where you sit most — desk chair, car seat — and improve those first; accept that moving beats perfecting.",
        "Do your best thinking walking: phone calls, reading briefs, thinking after lunch.",
      ]),
    ],
    sources: [SOURCES_DUNSTAN, SOURCES_BISWAS, SOURCES_WHO],
  },

  {
    slug: "pillow-height-neck-research",
    title: "Pillow Height and Your Neck: What the Research Actually Measures",
    excerpt:
      "A verified biomechanics study measured exactly how pillow height changes head-neck pressures and alignment. Small study, honest limits, useful principles.",
    topic: "Sleep",
    readingMinutes: 8,
    publishedAt: "2025-04-16",
    visual: "contour",
    tone: "sage",
    relatedProductIds: ["orthofit-contour-01", "orthofit-neck-01", "orthofit-contour-02"],
    relatedSlugs: ["how-to-choose-a-pillow-for-better-neck-support", "what-makes-a-pillow-ergonomic"],
    sections: [
      section("short-answer", "The Short Answer", [
        "Pillow height is measurable, personal, and matters: in a peer-reviewed biomechanics study, changing pillow height changed both the measured pressures at the head-neck contact area and the modelled alignment of the cervical spine. There is no universally 'correct' height — there is an appropriate height for your body and your sleeping position.",
        "Crucially, this kind of study measures geometry and pressure — not pain relief in daily life. A pillow that produces beautiful alignment plots has not thereby been proven to reduce anyone's neck pain. Keep the expectation honest: comfort, positioning, consistency.",
      ]),
      section("what-researchers-know", "What Researchers Know", [
        "Ren et al. (2016, PeerJ) studied 10 healthy volunteers lying on pillows of different heights, measuring cranio-cervical interface pressures with thin pressure mats and modelling cervical alignment. Different heights produced measurably different pressure distributions and alignment outcomes. The design was small (10 people) and laboratory-based, and compared a range of heights — but its finding aligns with the general principle seen in wider biomechanics work: under-support and over-support both shift load into the soft tissues of the neck.",
        "What sleep-posture research broadly supports: the head-neck complex adapts poorly when consistent support is absent — and sleep quality measures tend to associate with stability of position rather than any single 'perfect' posture. (See the cross-sectional work by Cary et al., 2021, below, which also shows why definitive posture-pain claims are hard to make.)",
      ]),
      section("in-simple-terms", "In Simple Terms", [
        "The study's practical lesson: your pillow is not a cushion, it's a fit decision. Too tall, and your chin is pushed toward your chest; too low, and your head bridges the gap with the small muscles at the front of your neck running an all-night isometric exercise.",
        "This is why shaped (contour) pillows exist: they hold a fixed geometric answer to that fit question rather than re-deciding it every night as loose fill collapses. It's also why personal experimentation beats pillow marketing — your shoulder width, mattress firmness and favourite position all shift the right answer a centimetre or two.",
      ]),
      section("what-you-can-do", "What You Can Do", [
        "Comfort and habit steps for general wellbeing — not medical advice. Ongoing symptoms deserve a professional.",
      ], [
        "Match the height to your position: higher for side sleeping (fill the shoulder gap), medium with gentle contour for back sleeping.",
        "Keep two considered heights if you share a bed — one per sleeper beats one compromise.",
        "Trial properly: give a new pillow a full week before you judge it.",
        "Judge by mornings, not by plushness: 'did my neck feel rested?' is the honest KPI.",
        "Check your pillow: a persistent head-dip is a retirement notice regardless of age.",
      ]),
    ],
    sources: [SOURCES_REN, {
      title: "Examining relationships between sleep posture, waking spinal symptoms and quality of sleep: A cross sectional study",
      authors: "Cary D., Jacques A., Briffa K.",
      publication: "PLOS ONE",
      year: 2021,
      doi: "10.1371/journal.pone.0260582",
      url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0260582",
      kind: "journal",
      summary: "Cross-sectional study: found relationships between certain sleep postures and waking cervical symptoms; small sample, and it did not test any pillow product.",
    }],
  },

  {
    slug: "foot-orthoses-evidence",
    title: "Foot Orthoses: What the Best Trial Actually Found",
    excerpt:
      "The most-cited randomised trial of insoles for plantar fasciitis found small, short-lived benefits. Here's what that does — and doesn't — mean for your shoes.",
    topic: "Foot Support",
    readingMinutes: 8,
    publishedAt: "2025-04-30",
    visual: "insoleArch",
    tone: "teal",
    relatedProductIds: ["orthofit-insole-01", "orthofit-insole-02", "orthofit-insole-03"],
    relatedSlugs: ["do-orthopedic-insoles-actually-help", "foot-support-why-your-shoes-matter"],
    sections: [
      section("short-answer", "The Short Answer", [
        "In the Landorf et al. randomised trial (2006), adults with plantar fasciitis were given either prefabricated or custom-made orthoses, or sham insoles. Result: modest reductions in pain and improvements in function at 3 months, which largely disappeared by 12 months. Custom devices performed about the same as the over-the-counter kind.",
        "Practical translation: a good pair of orthoses is a reasonable comfort choice with a plausible-but-modest short-term benefit for some people — and cost does not buy effectiveness. Nothing here justifies expecting a cure.",
      ]),
      section("what-researchers-know", "What Researchers Know", [
        "The trial itself was well-built: participant and assessor blinding, a sham-insole control group, 12-month follow-up. Those are the features that make a trial believable, and it's why this study keeps getting cited. Its result is the honest headline: small early benefit, little lasting difference.",
        "Wider orthoses research for other conditions (knee, hip, back pain) mixes with similar caution — systematic reviews generally find low-certainty evidence for specific product-level benefits, alongside biomechanical studies that can show *mechanical* effects (pressure redistribution, alignment change) without clinical endpoints. Mechanical change ≠ guaranteed clinical outcome; that distinction is the crux of honest orthotics marketing.",
      ]),
      section("in-simple-terms", "In Simple Terms", [
        "Think of an insole as adding a shaped, slightly-cushioned scaffold under a load (your body) across an uneven surface (your foot against the shoe's flat board). The physics of pressure redistribution is real: spreading load reduces peak pressure at any single point.",
        "The biology of what that means for pain is messier and slower to prove. Muscles, tendons, nerve sensitivity and daily load all have opinions. So the honest product promise is: measured pressure relief and comfort, possible short-term symptom improvement for some, no treatment claims.",
      ]),
      section("what-you-can-do", "What You Can Do", [
        "Everyday comfort steps (not medical advice for diagnosed foot conditions):",
      ], [
        "Match the design to the day: cushioning for standing days, arch-shaped for walking days, stabilized for sport.",
        "Trim and break in properly: 2–3 days of adaptation is normal.",
        "Judge honestly: if discomfort intensifies past week one, that insole isn't for you — stop.",
        "Replace on schedule: cushioning compresses; plan 4–6 months per daily-wear pair.",
        "See a professional for sharp, persistent, or injury-related foot pain — diagnosis is their job, not a product's.",
      ]),
    ],
    sources: [SOURCES_LANDORF],
  },

  {
    slug: "desk-ergonomics-evidence",
    title: "Does Fixing Your Desk Actually Do Anything? What a Randomised Trial Found",
    excerpt:
      "A controlled trial adjusted office workstations to workers' measurements and tracked pain for months. The results were specific — and refreshingly unspectacular.",
    topic: "Ergonomics",
    readingMinutes: 7,
    publishedAt: "2025-05-14",
    visual: "lumbar",
    tone: "navy",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-ergo-02", "orthofit-seat-02"],
    relatedSlugs: ["how-to-set-up-a-more-comfortable-desk", "lumbar-support-explained-in-simple-terms"],
    sections: [
      section("short-answer", "The Short Answer", [
        "Yes — with limits. In Lee et al. (2021), office workers whose workstations were individually adjusted reported lower pain intensity than the control group for the neck, shoulders, upper back and wrist/hand. For the lower back and elbow, the difference was not significant.",
        "Read that carefully: better workstation setup helped a defined set of areas. That's both encouraging and a lesson in reasonable expectations — the body's discomfort map is specific, and interventions work where the mechanism actually applies.",
      ]),
      section("what-researchers-know", "What Researchers Know", [
        "The trial randomised office workers either to receive individualised workstation adjustments (chair, monitor, keyboard and mouse positions matched to the worker's measurements) or to a control condition, then tracked musculoskeletal pain over time. The adjusted group's improvements were statistically significant for the upper-body zones named above.",
        "Allied evidence for lower-back comfort runs through a different mechanism: sitting posture and lumbar support interact mostly with seating mechanics, and the Cochrane review on lumbar supports (van Duijvenbode et al., 2008) is candid that lumbar supports neither prevented nor clearly treated low back pain in the studies reviewed. The two literatures say consistent things: workstation fit helps the upper body; supports are a comfort aid, not an intervention with proven clinical effects.",
      ]),
      section("in-simple-terms", "In Simple Terms", [
        "An individually-adjusted station is the ergonomics version of tailoring versus buying off the rack: same cloth, better fit. The trial's design principle — adjust to the actual person, not the 'average user' — is exactly what makes standard ergonomic checklists work when someone actually follows them on your desk.",
        "The lower-back finding is the humility clause: the lower back is load-bearing, shaped and motivated by many overnight, commute and stress factors that a desk chair cannot arbitrate... which is why the best-backed advice for it remains movement and habits, with seating comfort as a supporting actor.",
      ]),
      section("what-you-can-do", "What You Can Do", [
        "Build your own 'individualised adjustment' in one setup hour — the same logic the trial tested, but self-administered:",
      ], [
        "Feet: fully supported (floor or footrest), hips a touch higher than knees.",
        "Back: place support where the belt-line gap actually is — a rolled towel finds it, a lumbar cushion keeps it.",
        "Screen: top at eye level, an arm's length away; laptop users add a stand and keyboard.",
        "Hands: keyboard close, elbows near your sides, wrists straight — no pressure on desk edges.",
        "Breaks unchanged by any of this: stand every 30–40 minutes. Upper-body ergonomics and movement breaks do different jobs.",
      ]),
    ],
    sources: [SOURCES_LEE, SOURCES_COCHRANE_LUMBAR],
  },

  {
    slug: "sedentary-breaks-evidence",
    title: "Breaking Up Your Sitting Day: The Evidence, Translated",
    excerpt:
      "WHO recommends limiting sitting time without naming a magic threshold. Two landmark papers explain both halves of that sentence.",
    topic: "Workplace Wellness",
    readingMinutes: 7,
    publishedAt: "2025-05-28",
    visual: "lumbar",
    tone: "teal",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-ergo-02", "orthofit-ergo-03"],
    relatedSlugs: ["sitting-what-research-knows", "desk-ergonomics-evidence"],
    sections: [
      section("short-answer", "The Short Answer", [
        "The evidence supports breaking up sedentary time — and simultaneously refuses to endorse a single precise threshold ('every 30 minutes', 'under 8 hours'), because the studies don't identify one. WHO's 2020 guideline says: limit sedentary time, replace with activity at any intensity, more is better.",
        "The nicest consequence: you don't need a smartwatch to define success. A break is a break. The studies that tested breaks (including Dunstan et al.'s 2-minutes-every-20 design) simply moved more, and outcomes followed.",
      ]),
      section("what-researchers-know", "What Researchers Know", [
        "Dunstan et al. (2012) demonstrated the break effect directly in a controlled crossover: light or moderate walking breaks every 20 minutes during a 5-hour sitting occasion reduced post-meal glucose by ~24% and insulin by ~23% versus continuous sitting. A small, elegantly built study — one of the cleanest demonstrations that fragmentation matters.",
        "Biswas et al. (2015) established the population-size stakes: pooling observational studies, more sedentary time associates with higher disease and mortality risk — even among exercisers, and even after adjusting for activity. The caveat the authors themselves flag: observational evidence can't prove causation, and how 'sedentary' is measured varies across studies.",
        "WHO (2020) synthesises both: dose-response evidence exists for reducing sitting time; the exact safe threshold remains unidentifiable; therefore guidance is directional, not numeric.",
      ]),
      section("in-simple-terms", "In Simple Terms", [
        "Two honest metaphors. Risk-wise, sedentary time behaves like high blood pressure: there's evidence it matters, no magic number to beat, and your own trend is the useful metric. Glucose-wise, your muscles are the sponge: sitting switches the sponge off; any movement re-activates it.",
        "For your workday: the question that matters is not 'did I sit less than 8 hours?' but 'did any hour of sitting pass without a break?' That reframing is what WHO's directional guideline actually asks of you.",
      ]),
      section("what-you-can-do", "What You Can Do", [
        "A directional habit list, aligned with the evidence — part habit, part comfort setup:",
      ], [
        "Hourly rhythm: any 60 minutes without standing is the failure state; two breaks is success.",
        "Walking meetings and standing calls — the 'always' candidates for movement.",
        "Pair breaks with existing anchors: refill water, stretch at prayer times, print at the far printer.",
        "Make each sitting block comfortable while it happens — lumbar support, seat comfort — because comfortable blocks make the breaks sustainable.",
        "Track something imperfectly (a rubber band on your wrist every break) for the first two weeks until it's habit.",
      ]),
    ],
    sources: [SOURCES_DUNSTAN, SOURCES_BISWAS, SOURCES_WHO],
  },
];

export const researchMap = new Map(researchArticles.map((a) => [a.slug, a]));

export function getResearchArticle(slug: string): ResearchArticle | undefined {
  return researchMap.get(slug);
}
