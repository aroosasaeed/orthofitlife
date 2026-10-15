// ---------------------------------------------------------------------------
// Sample blog guides — original written content for the OrthofitLife prototype
// Real sources are cited in the research articles; these guides cite
// organisation-level guidance (NHS et al.) and label anything unverified.
// ---------------------------------------------------------------------------

import type { BlogPost, ArticleSection } from "@/types/content";

interface PostInput {
  slug: string;
  title: string;
  excerpt: string;
  topic: BlogPost["topic"];
  readingMinutes: number;
  publishedAt: string;
  visual: BlogPost["visual"];
  tone: BlogPost["tone"];
  sections: ArticleSection[];
  sources?: BlogPost["sources"];
  relatedProductIds: string[];
  relatedSlugs: string[];
}

/** Shared NHS guidance source referenced by several practical guides. */
const NHS_ERGO: BlogPost["sources"] = [
  {
    title: "How to sit correctly — postural advice for everyday life",
    authors: "NHS Choices (editorial team)",
    publication: "NHS",
    year: 2023,
    url: "https://www.nhs.uk/live-well/exercise/sitting-exercises/",
    kind: "organization",
    summary: "NHS general guidance on comfortable sitting posture and movement breaks for everyday life.",
  },
];

function post(input: PostInput): BlogPost {
  return {
    ...input,
    sources: input.sources ?? [],
  };
}

export const blogPosts: BlogPost[] = [
  post({
    slug: "how-to-choose-a-pillow-for-better-neck-support",
    title: "How to Choose a Pillow for Better Neck Support",
    excerpt:
      "Pillow shopping should be about geometry, not fluff: your head wants one consistent height all night. Here's how to pick by sleeping position instead of marketing.",
    topic: "Buying Guides",
    readingMinutes: 7,
    publishedAt: "2025-03-14",
    visual: "contour",
    tone: "sage",
    relatedProductIds: ["orthofit-contour-01", "orthofit-neck-01", "orthofit-contour-02"],
    relatedSlugs: ["what-makes-a-pillow-ergonomic", "why-side-sleepers-use-knee-pillows"],
    sections: [
      {
        id: "why-height-matters",
        heading: "Why pillow height is the whole story",
        paragraphs: [
          "Your neck is a curve, not a straight post. When you lie down, a pillow that is too tall tips your chin toward your chest; a pillow that is too flat lets your head fall back. Both ask the small muscles at the front of the neck to hold tension they were never meant to hold all night.",
          "The goal of a good pillow is boring: keep your head in the same relationship to your shoulders that you'd have if you were standing relaxed. Everything else — foam type, cover, cooling — is a refinement of that one idea.",
        ],
      },
      {
        id: "match-your-position",
        heading: "Match the pillow to your sleeping position",
        paragraphs: [
          "Side sleepers need the most height, because the pillow must fill the full gap between the mattress and the side of your head — the same distance as your shoulder is wide. If that gap is underfilled, your neck bends sideways; if it's overfilled, it bends the other way.",
          "Back sleepers generally do well with a medium loft and a gentle dip where the head rests, so the slight natural curve of the neck keeps its shape. Stomach sleeping is the awkward one: it rotates the neck for hours, and switching to side or back sleeping is the single most useful change, if you can make it.",
        ],
        bullets: [
          "Side sleeper → higher pillow (fill the shoulder-to-neck gap)",
          "Back sleeper → medium height with gentle contour",
          "Stomach sleeper → lowest possible pillow, or work on changing position",
        ],
      },
      {
        id: "foam-types",
        heading: "Fill: memory foam, contour, and why pillows change shape",
        paragraphs: [
          "Loose-fill pillows (cotton, microfibre, feather) feel invitingly soft — and then reliably flatten where your head presses. Most people replace them long before they admit the pillow stopped supporting them months ago.",
          "Shaped foam pillows (contour, ergonomic) hold a fixed geometry instead. They feel strange for the first few nights precisely because they are doing something flat pillows never did: staying the same. If you try one, commit to at least a week before you judge it.",
        ],
      },
      {
        id: "practical-checklist",
        heading: "A practical 5-point checklist",
        paragraphs: ["Take this list with you next time you're shopping — whether from us or elsewhere:"],
        bullets: [
          "Does it keep your head level when you lie in your main sleeping position?",
          "Height: does it fill the gap beside your shoulder (side) or support the curve (back)?",
          "Does the material hold its shape, or collapse under pressure?",
          "Cover: removable and washable? You'll sleep on it every night.",
          "Trial: can you give it a week, rather than one air-test in a store?",
        ],
      },
      {
        id: "when-to-age-out",
        heading: "When to replace what you have",
        paragraphs: [
          "A rule of thumb: if your pillow has a visible, persistent dip where your head lies, it no longer supports consistently no matter how comfortable it still feels. Most loose-fill pillows are ready for retirement around the 18–24 month mark.",
          "And one honest caveat: a new pillow may improve how your neck feels overnight, but it is not a treatment. If you wake with pain or numbness regularly, that conversation belongs with a doctor or physiotherapist, not a shopping cart.",
        ],
      },
    ],
    sources: [
      ...NHS_ERGO,
      {
        title: "Effect of pillow height on the biomechanics of the head-neck complex",
        authors: "Ren S., Wong D.W.-C., Yang H., Zhou Y., Lin J., Zhang M.",
        publication: "PeerJ",
        year: 2016,
        doi: "10.7717/peerj.2397",
        url: "https://peerj.com/articles/2397/",
        kind: "journal",
        summary: "Laboratory study showing pillow height measurably affects head-neck pressure and spine alignment in volunteers.",
      },
    ],
  }),

  post({
    slug: "why-sitting-all-day-can-feel-so-uncomfortable",
    title: "Why Sitting All Day Can Feel So Uncomfortable",
    excerpt:
      "Sitting isn't one position — it's a slow collapse your body keeps correcting. Understanding the three pressure points explains why your back gets tired before your mind does.",
    topic: "Sitting",
    readingMinutes: 8,
    publishedAt: "2025-03-21",
    visual: "lumbar",
    tone: "teal",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-coccyx-01", "orthofit-ergo-02"],
    relatedSlugs: ["lumbar-support-explained-in-simple-terms", "how-to-set-up-a-more-comfortable-desk"],
    sections: [
      {
        id: "short-answer",
        heading: "The short answer",
        paragraphs: [
          "Sitting feels uncomfortable after hours for three compounding reasons: your lower back loses its natural curve as posture quietly sinks, your tailbone presses directly into the seat the whole time, and your body — which evolved for movement — experiences long, uninterrupted stillness as its own kind of load.",
          "None of this is mysterious. But because each problem begins gradually, most people only notice the discomfort, not the causes.",
        ],
      },
      {
        id: "the-slow-collapse",
        heading: "The slow collapse of your posture",
        paragraphs: [
          "Almost nobody sits down badly. You sit down well — and then, over 30–60 minutes, your pelvis rotates backward, the lower back curve flattens, and your shoulders roll forward a little. Each small change buys a moment of relief and costs a gram of support. By the second hour, the effort of holding yourself up outweighs the comfort of relaxing into the slump.",
          "This is why lumbar cushions exist as a product category: they put the curve back where it keeps dropping out, making the upright position feel effortless rather than effortful. Movement and breaks do the same job even better — no product replaces them.",
        ],
      },
      {
        id: "tailbone-pressure",
        heading: "The tailbone you forgot you have",
        paragraphs: [
          "The coccyx is a tiny stack of fused bones at the very base of your spine. On a flat chair, it sits directly against the seat. On a good chair or a cut-out cushion, it hovers over a channel and the surrounding tissue takes the load.",
          "If you've ever shifted your weight forward onto a chair's front edge to 'get relief', you were instinctively solving this problem. Products like coccyx cut-out cushions solve it without needing to perch.",
        ],
      },
      {
        id: "stillness-is-load",
        heading: "Stillness is its own kind of load",
        paragraphs: [
          "Large reviews of sedentary behaviour research (summarised in our Research section) consistently associate long, uninterrupted sitting time with worse health outcomes. The practical takeaway from that research is refreshingly simple: break the sitting up. Standing for two minutes every 20–30 minutes outperforms any single ergonomic gadget when it comes to how your body feels by evening.",
          "Think of your day as sitting in blocks: 30 minutes of sitting, 2 minutes of movement, repeat. Everything else — cushions, footrests, chair adjustments — makes each block more comfortable while you're actually in it.",
        ],
        bullets: [
          "Every 30 minutes: stand, stretch, or walk for 2 minutes",
          "Water by the desk ensures the breaks happen naturally",
          "Meetings you can take walking? Take them walking",
        ],
      },
      {
        id: "what-actually-helps",
        heading: "What actually helps, in priority order",
        paragraphs: [
          "First: move more often — free and evidence-backed. Second: fix the chair with the shape your lower back keeps losing (a lumbar cushion, or the chair's own adjustment if it has one). Third: reduce the pressure points (coccyx cushion, footrest so the thighs rest). Fourth: adjust the screen and keyboard so you're not leaning forward all day.",
          "Also worth saying plainly: 'better sitting' is a comfort and habits goal. If you have persistent, severe, or radiating back pain, a healthcare professional should be assessing that — not a website.",
        ],
      },
    ],
    sources: [
      ...NHS_ERGO,
      {
        title: "Breaking Up Prolonged Sitting Reduces Postprandial Glucose and Insulin Responses",
        authors: "Dunstan D.W. et al.",
        publication: "Diabetes Care (American Diabetes Association)",
        year: 2012,
        doi: "10.2337/dc11-1931",
        url: "https://diabetesjournals.org/care/article/35/5/976/38669",
        kind: "journal",
        summary: "In a controlled crossover trial, short walking breaks every 20 minutes reduced post-meal glucose and insulin responses versus uninterrupted sitting.",
      },
      {
        title: "World Health Organization 2020 guidelines on physical activity and sedentary behaviour",
        authors: "Bull F.C. et al. / World Health Organization",
        publication: "British Journal of Sports Medicine",
        year: 2020,
        doi: "10.1136/bjsports-2020-102955",
        url: "https://bjsm.bmj.com/content/54/24/1451",
        kind: "guideline",
        summary: "WHO recommends adults limit total sedentary time and replace it with activity of any intensity — no specific alarm-clock threshold is endorsed.",
      },
    ],
  }),

  post({
    slug: "what-is-a-coccyx-cushion",
    title: "What Is a Coccyx Cushion?",
    excerpt:
      "It sounds complicated and is anything but: a seat cushion with a hole where your tailbone sits, so bone and chair never make direct contact.",
    topic: "Buying Guides",
    readingMinutes: 5,
    publishedAt: "2025-03-28",
    visual: "coccyx",
    tone: "beige",
    relatedProductIds: ["orthofit-coccyx-01", "orthofit-coccyx-02"],
    relatedSlugs: ["why-sitting-all-day-can-feel-so-uncomfortable"],
    sections: [
      {
        id: "what-it-is",
        heading: "The anatomy problem it solves",
        paragraphs: [
          "Your coccyx — the tailbone — is the last segment of your spine: three to five small fused bones at the base. On any flat seat it presses directly against the chair for as long as you sit.",
          "A coccyx cushion is simply a seat cushion with a U-shaped cut-out at the back edge. Your tailbone rests over the open channel instead of on the seat. The surrounding foam carries your weight, and the boniest, most pressure-sensitive part of your bottom takes none of it.",
        ],
      },
      {
        id: "who-uses",
        heading: "Who uses one",
        paragraphs: [
          "Desk workers who spend most of the week sitting; drivers whose seat angle concentrates pressure at the base of the spine; and people recovering from events or procedures where medical teams advise sitting more gently — always used as an aid to comfort, on the advice of the treating professional.",
          "It's one of the most suggested products in physiotherapy waiting rooms for a reason: unlike most comfort gear, the mechanism is visible. You can see the cut-out. You know exactly why it can help.",
        ],
      },
      {
        id: "cut-out-vs-ring",
        heading: "Cut-out wedge vs. donut ring",
        paragraphs: [
          "The modern cut-out design keeps the rest of the seat cushioned — you sit on a normal-feeling platform with one channel removed. The traditional donut (ring) cushion removes the centre entirely, so the seat supports a ring around an empty circle.",
          "Choose the cut-out for everyday work use; choose the ring when you want a single pressure point completely suspended, e.g. during sitting-restricted recovery as advised by your healthcare provider.",
        ],
      },
      {
        id: "what-it-is-not",
        heading: "What it is not",
        paragraphs: [
          "It is not a cure, a treatment, or a diagnosis. It relieves a specific mechanical pressure — that is its entire job. If tailbone pain persists, worsens, or follows an injury, that's a photo-for-the-doctor situation, not a shopping-for-a-second-cushion situation.",
        ],
      },
    ],
    sources: NHS_ERGO,
  }),

  post({
    slug: "do-orthopedic-insoles-actually-help",
    title: "Do Orthopedic Insoles Actually Help?",
    excerpt:
      "An honest look at what the research actually says about off-the-shelf insoles — and what to expect from them instead of what the marketing promises.",
    topic: "Foot Support",
    readingMinutes: 9,
    publishedAt: "2025-04-04",
    visual: "insoleArch",
    tone: "teal",
    relatedProductIds: ["orthofit-insole-01", "orthofit-insole-02", "orthofit-insole-03"],
    relatedSlugs: ["foot-support-why-your-shoes-matter"],
    sections: [
      {
        id: "the-honest-answer",
        heading: "The honest answer",
        paragraphs: [
          "For everyday foot comfort: yes, usually. A good insole spreads pressure more evenly across the foot and adds cushioning to hard floors or the dead midsole of worn shoes. Most people report their feet feel less tired by the end of the day. That's a modest, real benefit.",
          "For diagnosed foot conditions: the evidence is more mixed, and it's worth being precise about that rather than selling certainty we don't have.",
        ],
      },
      {
        id: "what-research-says",
        heading: "What the research says",
        paragraphs: [
          "The most-cited randomised trial on prefabricated orthoses for plantar fasciitis (Landorf et al., 2006) found small short-term reductions in pain and functional improvement at three months, that largely evened out at twelve months. Custom-made and prefabricated orthoses performed similarly. Translation: for some people, some of the time, insoles reduce pain somewhat — but they're not magic, and neither are Rs 20,000 'custom' ones.",
          "Cochrane-style systematic reviews of foot orthoses for other conditions (knee osteoarthritis, low back pain) find similarly mixed or inconclusive results. The honest summary: insoles are a low-risk comfort experiment with possible modest benefits, not a proven treatment.",
        ],
      },
      {
        id: "what-to-expect",
        heading: "What to expect from a good pair",
        paragraphs: [
          "Cushioning under the heel — the part of the foot that strikes the ground with most force on hard floors. A shaped arch zone that gently spreads load. A grip layer so your foot doesn't slide. None of this can fix a structural foot problem, but all of it can make a long day more survivable.",
          "Break-in matters: arch support of any kind feels strange for 2–3 days. If discomfort worsens rather than fades past that, the particular design isn't for your foot — stop, don't push through.",
        ],
        bullets: [
          "Do expect: less end-of-day foot fatigue on hard floors",
          "Do expect: better distribution of pressure across the arch",
          "Do not expect: treatment of a diagnosed foot condition",
        ],
      },
      {
        id: "when-see-professional",
        heading: "When to skip the shopping and see a professional",
        paragraphs: [
          "Sharp, localised heel pain when you first step out of bed; pain that changes the way you walk; numbness; pain following an injury or persisting beyond a couple of weeks — these need a podiatrist or doctor, not a pair of insoles. In Pakistan, good podiatry can be hard to find, but a reputable orthopaedic clinic will point you in the right direction.",
        ],
      },
    ],
    sources: [
      {
        title: "Effectiveness of Foot Orthoses to Treat Plantar Fasciitis: A Randomized Trial",
        authors: "Landorf K.B., Keenan A.-M., Herbert R.D.",
        publication: "Archives of Internal Medicine",
        year: 2006,
        doi: "10.1001/archinte.166.12.1305",
        url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410648",
        kind: "journal",
        summary: "Participant-blinded randomised trial of prefabricated vs. custom orthoses for plantar fasciitis: small short-term benefits that largely faded by 12 months.",
      },
    ],
  }),

  post({
    slug: "how-to-set-up-a-more-comfortable-desk",
    title: "How to Set Up a More Comfortable Desk",
    excerpt:
      "A desk setup is a chain: feet, seat, back, eyes, hands. Fix it in that order — most people start from the wrong end.",
    topic: "Ergonomics",
    readingMinutes: 7,
    publishedAt: "2025-04-11",
    visual: "lumbar",
    tone: "navy",
    relatedProductIds: ["orthofit-ergo-02", "orthofit-lumbar-01", "orthofit-seat-02"],
    relatedSlugs: ["why-sitting-all-day-can-feel-so-uncomfortable", "how-to-build-a-more-comfortable-workday"],
    sections: [
      {
        id: "the-chain",
        heading: "The desk chain: build from the ground up",
        paragraphs: [
          "Ergonomic advice usually starts with the monitor because that's what looks impressive in photos. But good setups are built bottom-up: the feet and the seat determine where the rest of you must sit. Get those wrong and every adjustment above becomes a compensating mistake.",
          "Here's the order: feet → seat height → back support → screen → keyboard/mouse → light & breaks.",
        ],
      },
      {
        id: "feet-and-seat",
        heading: "1–2: Feet and seat first",
        paragraphs: [
          "Aim for hips slightly higher than knees, thighs roughly parallel to the floor, both feet fully supported — on the floor if it reaches, or on a footrest if it doesn't. If your chair's lowest setting still leaves your feet floating, a footrest is the cheapest fix in ergonomics. If your knees point noticeably upward, your chair is too low for the desk.",
          "Depth matters too: leave 2–3 fingers of space between the seat edge and the back of your knees, so the thighs aren't compressed.",
        ],
      },
      {
        id: "back-support",
        heading: "3: Back support where the curve flattens",
        paragraphs: [
          "Find the gap: sit fully back and feel behind your belt-line. Where your fingers meet air, that's where a lumbar cushion — or the chair's own lumbar adjuster — should sit. It should feel like support, not a push. If it feels like it's shoving you forward, it's too high or too firm for you.",
        ],
      },
      {
        id: "screen-and-hands",
        heading: "4–5: Screen and hands",
        paragraphs: [
          "Screen top at or slightly below eye level, an arm's length away. Laptop users: raise the laptop on books or a stand and add a separate keyboard — the single most common reason people hunch at home desks, and the cheapest to solve.",
          "Keyboard as close to you as practical so the elbows rest near your sides, wrist relaxation rather than palm or wrist pressure on the desk edge.",
        ],
        bullets: [
          "Screen: top at eye level, arm's length away",
          "Laptop: raised on a stand + external keyboard",
          "Elbows: near sides, ~90°, shoulders dropped",
        ],
      },
      {
        id: "light-breaks",
        heading: "6: The real superpower — light and breaks",
        paragraphs: [
          "Avoid the screen glare of a direct window behind or in front of you. And then: breaks. No desk setup survives three unmoved hours. Stand for two minutes each half hour; walk to refill your water; take calls standing. The research on breaking up sitting is consistent — movement is the intervention, the rest is setup.",
        ],
      },
    ],
    sources: [
      ...NHS_ERGO,
      {
        title: "Effect of an ergonomic intervention involving workstation adjustments on musculoskeletal pain in office workers — a randomized controlled clinical trial",
        authors: "Lee S. et al.",
        publication: "Industrial Health (National Institute of Occupational Safety and Health, Japan)",
        year: 2021,
        doi: "10.2486/indhealth.2020-0188",
        url: "https://www.jstage.jst.go.jp/article/indhealth/59/2/59_2020-0188/_article",
        kind: "journal",
        summary: "Workstation adjustments matched to individual measurements reduced reported neck, shoulder, upper-back and wrist/hand pain in the intervention group.",
      },
      {
        title: "Safe computing / workplaces — Canadian Centre for Occupational Health and Safety guidance",
        authors: "CCOHS",
        publication: "CCOHS",
        year: 2024,
        url: "https://www.ccohs.ca/oshanswers/ergonomics/office/",
        kind: "organization",
        summary: "Practical national-body ergonomics guidance covering the standard office setup recommendations used in this guide.",
      },
    ],
  }),

  post({
    slug: "why-side-sleepers-use-knee-pillows",
    title: "Why Side Sleepers Use Knee Pillows",
    excerpt:
      "When you sleep on your side, your top knee quietly falls until it rests on your bottom leg. A shaped pillow between the knees changes an entire night's geometry.",
    topic: "Sleep",
    readingMinutes: 6,
    publishedAt: "2025-04-18",
    visual: "knee",
    tone: "sage",
    relatedProductIds: ["orthofit-knee-01", "orthofit-knee-02"],
    relatedSlugs: ["how-to-choose-a-pillow-for-better-neck-support"],
    sections: [
      {
        id: "gravity-at-night",
        heading: "The one-joint gravity problem",
        paragraphs: [
          "Side sleeping is the most common position — and the one where gravity gets to work between your legs all night. Without support, the top knee slides down and rests on the lower one. Your top hip rotates inward slightly under the weight. Nothing dramatic; just a slow, all-night pressure on the lower hip and knee.",
          "A knee pillow is shaped foam that fills the gap between your knees, so both legs rest at their natural spacing instead of one resting on the other.",
        ],
      },
      {
        id: "between-vs-under",
        heading: "Between or under the knees?",
        paragraphs: [
          "Side sleepers: between the knees. The pillow keeps the knees resting apart — the resting spacing close to what they'd have standing relaxed.",
          "Back sleepers: under the knees instead. Knees slightly raised flatten the lower back against the bed, which many people find more restful for the low back. Try both and let comfort decide — this is positioning comfort, not medical prescription.",
        ],
      },
      {
        id: "why-shaped",
        heading: "Why not just any pillow?",
        paragraphs: [
          "You can — we won't stop you. Ordinary pillows often do exactly this job. Two honest downsides: they slip out during the night (their job is under your head, not between your knees), and their softness collapses under the pressure. A contoured knee pillow stays positioned, holds a firm core, and washes in the machine as often as the cover needs.",
        ],
      },
      {
        id: "what-research-says",
        heading: "What the research does — and does not — say",
        paragraphs: [
          "Sleep-posture research exists and is growing; cross-sectional work links some sleep postures with waking spinal symptoms. But we'll be straight with you: there is no strong trial showing knee pillows treat pain. This is a positioning comfort product. Its honest pitch: 'designed to make side sleeping more comfortable'. If you have ongoing hip or knee pain, see a professional.",
        ],
      },
    ],
    sources: [
      {
        title: "Examining relationships between sleep posture, waking spinal symptoms and quality of sleep: a cross-sectional study",
        authors: "Cary D., Jacques A., Briffa K.",
        publication: "PLOS ONE",
        year: 2021,
        doi: "10.1371/journal.pone.0260582",
        url: "https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0260582",
        kind: "journal",
        summary: "Cross-sectional study of sleep posture and waking symptoms; found associations between certain postures and neck symptoms (does not test knee pillows directly).",
      },
    ],
  }),

  post({
    slug: "lumbar-support-explained-in-simple-terms",
    title: "Lumbar Support Explained in Simple Terms",
    excerpt:
      "Lumbar support isn't a product category — it's a curve your lower back keeps losing. Understanding that one shape tells you everything.",
    topic: "Posture",
    readingMinutes: 6,
    publishedAt: "2025-04-25",
    visual: "lumbar",
    tone: "teal",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-lumbar-02", "orthofit-back-01"],
    relatedSlugs: ["why-sitting-all-day-can-feel-so-uncomfortable", "how-to-set-up-a-more-comfortable-desk"],
    sections: [
      {
        id: "the-curve",
        heading: "Your lower back is not supposed to be flat",
        paragraphs: [
          "The lumbar region — the five vertebrae between your ribs and your pelvis — has a natural inward curve, called the lumbar lordosis, about the size of a flat hand placed behind your belt-line. It's structural. Your spine curves there for the same reason a spring does more work than a cable: that curve turns the load of your torso into something the discs and muscles can handle efficiently.",
          "When you sit in most chairs, that curve is the one part of your body with nothing behind it. The chair's back panel is essentially flat, where your back is not. So the curve flattens — an inch at a time — and your body finds support by slumping.",
        ],
      },
      {
        id: "what-support-does",
        heading: "What 'lumbar support' actually means",
        paragraphs: [
          "It means putting the missing shape back. A lumbar cushion fills the gap between the flat chair and the curved spine, so the curve rests rather than collapses. That's the entire mechanism — no vibrating motors, no fancy straps, just geometry.",
          "The proof is easy to try: sit against a flat chair back, then slide a rolled towel behind your belt-line. Most people feel it immediately: upright stops being effortful.",
        ],
      },
      {
        id: "what-it-cant-do",
        heading: "What it can't do",
        paragraphs: [
          "Lumbar support can't reverse hours of stillness, treat back pain, or replace movement. Physical-activity guidance from WHO and others is unambiguous: regularly breaking up sitting time is the core protective strategy, with ergonomics as the supporting cast. A cushion makes your hours of sitting more comfortable; the breaks make the sitting less harmful.",
        ],
        bullets: [
          "30-minute blocks: sit supported, then stand 2 minutes",
          "Aim for support at the belt-line, not the shoulders",
          "If a cushion feels like a push, it's misplaced or too firm",
        ],
      },
      {
        id: "choosing-one",
        heading: "Choosing: roll vs. contoured cushion vs. full panel",
        paragraphs: [
          "Firm cylindrical rolls give direct, unforgiving support — good for study chairs and cars. Contoured memory-foam cushions are friendlier for eight-hour desk days. Full-back panels add the mid-back and shoulders for chairs that have nothing going for them. Match the product to how bad the chair is, not to the price.",
        ],
      },
    ],
    sources: [
      ...NHS_ERGO,
      {
        title: "Lumbar supports for prevention and treatment of low back pain (Cochrane systematic review)",
        authors: "van Duijvenbode I., Jellema P., van Poppel M., van Tulder M.W.",
        publication: "Cochrane Database of Systematic Reviews",
        year: 2008,
        doi: "10.1002/14651858.CD001823.pub3",
        url: "https://www.cochranelibrary.com/cdsr/doi/10.1002/14651858.CD001823.pub3/full",
        kind: "systematic-review",
        summary: "Cochrane found moderate-quality evidence that lumbar supports were no more effective than no intervention or training for prevention; treatment-effectiveness remains unclear.",
      },
    ],
  }),

  post({
    slug: "what-makes-a-pillow-ergonomic",
    title: "What Makes a Pillow Ergonomic?",
    excerpt:
      "'Ergonomic' is the most abused word in bedding. Here's a criteria-based way to use it — and a description-free way to judge any pillow.",
    topic: "Buying Guides",
    readingMinutes: 5,
    publishedAt: "2025-05-02",
    visual: "contour",
    tone: "beige",
    relatedProductIds: ["orthofit-contour-01", "orthofit-neck-01"],
    relatedSlugs: ["how-to-choose-a-pillow-for-better-neck-support"],
    sections: [
      {
        id: "definition",
        heading: "Ergonomics is fit, not foam",
        paragraphs: [
          "Ergonomics, stripped of marketing: designing a device around the shape and needs of the human body that uses it. A pillow is 'ergonomic' when it fits your body's resting geometry — the curve of your neck, the height of your shoulders, the position you actually sleep in.",
          "That makes 'ergonomic' depend on you: a pillow that's perfect for side sleeping is often wrong for someone flat on their back. Anyone selling 'the ergonomic pillow', full stop, is selling a shape without knowing your body.",
        ],
      },
      {
        id: "three-criteria",
        heading: "The three criteria to judge any pillow",
        paragraphs: [
          "Consistency: does it hold the same support geometry hour after hour, or collapse where you press? (This is the structural edge that shaped foam has over loose fill.)",
          "Fit: does the shape (height, curve) match your sleeping position? Side sleepers need fill; back sleepers need gentle contour; both need the neck's curve respected.",
          "Adjustability: can you at least option between heights, or fine-tune how it sits for your body over the first week?",
        ],
        bullets: [
          "Consistency — same shape tonight and next spring",
          "Fit — matches head-and-shoulders geometry for your position",
          "Tuneable — height zones or reversible height options",
        ],
      },
      {
        id: "red-flags",
        heading: "Marketing red flags",
        paragraphs: [
          "Be sceptical of claims that a specific pillow has been 'scientifically proven' to fix neck pain (lab studies on neck alignment and pillow geometry exist but don't test pain relief in life), 'spinal alignment guarantee' language, or medical-adjacent branding that implies treatment. A good pillow is a comfort and positioning purchase — the honest brands say exactly that.",
        ],
      },
    ],
    sources: [
      {
        title: "Effect of pillow height on the biomechanics of the head-neck complex",
        authors: "Ren S. et al.",
        publication: "PeerJ",
        year: 2016,
        doi: "10.7717/peerj.2397",
        url: "https://peerj.com/articles/2397/",
        kind: "journal",
        summary: "Biomechanics study of pillow height and neck positioning — demonstrates measurable alignment/pressure effects, not pain outcomes.",
      },
    ],
  }),

  post({
    slug: "foot-support-why-your-shoes-matter",
    title: "Foot Support: Why Your Shoes Matter",
    excerpt:
      "Your feet hit the ground somewhere between 5,000 and 10,000 times a day. What's between them and the floor quietly sets the tone for all of them.",
    topic: "Foot Support",
    readingMinutes: 7,
    publishedAt: "2025-05-09",
    visual: "insoleArch",
    tone: "sage",
    relatedProductIds: ["orthofit-insole-01", "orthofit-insole-02", "orthofit-insole-03"],
    relatedSlugs: ["do-orthopedic-insoles-actually-help"],
    sections: [
      {
        id: "the-numbers",
        heading: "The numbers you never think about",
        paragraphs: [
          "Every step compresses your foot — and the ground beneath it — with somewhere between one and three times your bodyweight. Multiply by steps-per-day and the foot is quietly the hardest-working joint series you own. And yet the base layer between your foot and the floor is usually whatever the shoe factory had left over.",
          "Insole design exists because the 'board' in most shoes is a flat sheet. Flat spreads load unevenly: the heel and the ball of the foot absorb most of it and the arch structures — designed to distribute and rebound — get skipped.",
        ],
      },
      {
        id: "what-insoles-do",
        heading: "What a good insole changes",
        paragraphs: [
          "Three measurable, sensible things: pressure spread (a shaped arch distributes load that would otherwise concentrate at heel and ball), cushioning (a compressible layer absorbs impact that the floor or worn midsole doesn't), and grip (your foot stops being a slightly moving object inside a static shoe).",
          "The honest limits were covered in our guide 'Do orthopedic insoles actually help?' — summary: comfort and support, not treatment. This post is about the mechanisms; that one kept the research receipts.",
        ],
      },
      {
        id: "matching-your-day",
        heading: "Match the insole to the day, not the foot",
        paragraphs: [
          "Standing all day (teaching, retail, clinics): cushioning-first designs. Walking-dominant days: arch-first designs with a heel cushion. Sport: stabilising designs with grip (a heel cradle matters once you add stops, turns, and sprints). Housework-heavy days: soft cushioning, because tiles and stone floors are the hardest surfaces most people stand on.",
        ],
        bullets: [
          "Standing days → cushioning-first",
          "Walking days → arch-supported",
          "Sport days → stabilised, grippy",
          "Hard tile floors → soft cushioning",
        ],
      },
      {
        id: "shoe-basics",
        heading: "The shoe itself: the two-minute check",
        paragraphs: [
          "Heel width: the heel counter should surround, not float. Toe box: toes need width to spread on push-off — pointed shoes quietly confess their priority. Bend check: the shoe should flex at the ball of the shoe, not in the middle of the arch. If a shoe fails these three, no insole inside it can make it perfect.",
        ],
      },
    ],
    sources: [
      {
        title: "Effectiveness of Foot Orthoses to Treat Plantar Fasciitis: A Randomized Trial",
        authors: "Landorf K.B., Keenan A.-M., Herbert R.D.",
        publication: "Archives of Internal Medicine",
        year: 2006,
        doi: "10.1001/archinte.166.12.1305",
        url: "https://jamanetwork.com/journals/jamainternalmedicine/fullarticle/410648",
        kind: "journal",
        summary: "Randomised trial of foot orthoses for plantar fasciitis — small short-term benefits, indifferent at 12 months; prefabricated ≈ custom.",
      },
    ],
  }),

  post({
    slug: "how-to-build-a-more-comfortable-workday",
    title: "How to Build a More Comfortable Workday",
    excerpt:
      "Nine to five is not one long posture. It's twenty 'sittings' and a handful of movement breaks. Here's a template that fits a real Pakistani workday.",
    topic: "Workplace Wellness",
    readingMinutes: 8,
    publishedAt: "2025-05-16",
    visual: "lumbar",
    tone: "navy",
    relatedProductIds: ["orthofit-lumbar-01", "orthofit-ergo-02", "orthofit-neck-02"],
    relatedSlugs: ["how-to-set-up-a-more-comfortable-desk", "why-sitting-all-day-can-feel-so-uncomfortable"],
    sections: [
      {
        id: "the-template",
        heading: "The template: blocks, not hours",
        paragraphs: [
          "Think of your workday in 30-minute blocks. Each block: sit comfortably (that's what your setup is for), then movement that lifts you out of the chair — stand for the next call, walk to fill your water, take the stairs on the way to a meeting. WHO's guidance is blunt: movement at any intensity beats uninterrupted sitting time, whatever else you do.",
          "Real workdays resist tidy templates. Rain days, tight deadlines, load-shedding schedule surprises. The trick is not perfection; it's making movement slightly easier than sitting still.",
        ],
      },
      {
        id: "the-setup-hour",
        heading: "One setup, revisited 30 times",
        paragraphs: [
          "You don't fix a position once — you return to it. Save ~15 minutes one evening: feet supported, seat height, lumbar cushion placed, screen raised. Then the 30-minute rhythm does the rest. Small weekly tweaks (raise that laptop stand by a book) are the compounding of ergonomics.",
        ],
      },
      {
        id: "the-pakistani-workday",
        heading: "The Pakistani workday specifics",
        paragraphs: [
          "Heat: gel-and-airflow options beat standard memory foam cushions on warm afternoons. Commutes: a compact lumbar pillow or travel neck pillow earns its keep in Karachi traffic faster than anywhere. Prayer breaks and wudu: natural movement rhythm most offices ignore — leaning into that rhythm helps your back even if your calendar doesn't.",
          "Meals: eat away from the desk. It adds a movement break and, honestly, a mental one.",
        ],
      },
      {
        id: "the-evening",
        heading: "The evening matters too",
        paragraphs: [
          "Comfort is daily. Legs up for 10 minutes after a standing day (or before); a pillow that actually holds its shape overnight; not returning to the same hunched-over phone posture you just spent eight hours escaping from. Small, boring, effective.",
        ],
        bullets: [
          "30-minute sit-blocks with 2-minute movement breaks",
          "Setup hour once, then tiny weekly retunes",
          "Heat → gel/airflow options; commutes → compact supports",
          "Evening: raised legs, real pillow, no phone-hunching",
        ],
      },
    ],
    sources: [
      {
        title: "World Health Organization 2020 guidelines on physical activity and sedentary behaviour",
        authors: "Bull F.C. et al. / World Health Organization",
        publication: "British Journal of Sports Medicine",
        year: 2020,
        doi: "10.1136/bjsports-2020-102955",
        url: "https://bjsm.bmj.com/content/54/24/1451",
        kind: "guideline",
        summary: "WHO guideline on activity, sedentary behaviour and breaking up sitting time — used for the block-based recommendations here.",
      },
      {
        title: "Breaking Up Prolonged Sitting Reduces Postprandial Glucose and Insulin Responses",
        authors: "Dunstan D.W. et al.",
        publication: "Diabetes Care (American Diabetes Association)",
        year: 2012,
        doi: "10.2337/dc11-1931",
        url: "https://diabetesjournals.org/care/article/35/5/976/38669",
        kind: "journal",
        summary: "Crossover trial: 2-minute walking breaks every 20 minutes reduced post-meal glucose/insulin responses vs. continuous sitting.",
      },
    ],
  }),
];

export const blogMap = new Map(blogPosts.map((p) => [p.slug, p]));

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogMap.get(slug);
}
