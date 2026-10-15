// ---------------------------------------------------------------------------
// "Find Your Support" — product discovery scoring
// A transparent, rules-based matcher (not AI): each answer adds weight to
// product attributes, and the top-scored products are recommended with a
// short "why" line. Deliberately auditable and easy to tune.
// ---------------------------------------------------------------------------

import type { Product } from "@/types/product";
import { products } from "@/lib/data/products";

export interface QuizAnswers {
  bodyArea: string;
  moment: string;
  lifestyle: string;
}

export interface QuizQuestion {
  id: keyof QuizAnswers;
  title: string;
  subtitle: string;
  options: { value: string; label: string; emojiHint: string }[];
}

export const quizQuestions: QuizQuestion[] = [
  {
    id: "bodyArea",
    title: "Where do you need support?",
    subtitle: "Pick the area that asks for comfort most often.",
    options: [
      { value: "neck", label: "Neck", emojiHint: "🧣" },
      { value: "back", label: "Back", emojiHint: "🪑" },
      { value: "hips", label: "Hips & Tailbone", emojiHint: "🛋️" },
      { value: "knees", label: "Knees", emojiHint: "🌙" },
      { value: "feet", label: "Feet", emojiHint: "🦶" },
      { value: "sitting", label: "Sitting comfort", emojiHint: "💻" },
    ],
  },
  {
    id: "moment",
    title: "When do you experience discomfort?",
    subtitle: "The time of day the discomfort shows up.",
    options: [
      { value: "working", label: "Working", emojiHint: "🧑💻" },
      { value: "sleeping", label: "Sleeping", emojiHint: "🌙" },
      { value: "walking", label: "Walking", emojiHint: "🚶" },
      { value: "exercising", label: "Exercising", emojiHint: "🏃" },
      { value: "travelling", label: "Travelling", emojiHint: "🚗" },
      { value: "sitting", label: "Sitting", emojiHint: "🪑" },
    ],
  },
  {
    id: "lifestyle",
    title: "What is your lifestyle?",
    subtitle: "So the suggestions fit an average day.",
    options: [
      { value: "office", label: "Office worker", emojiHint: "🖥️" },
      { value: "home", label: "Homemaker", emojiHint: "🏠" },
      { value: "physical", label: "Physically active worker", emojiHint: "👷" },
      { value: "sports", label: "Sports enthusiast", emojiHint: "🏏" },
      { value: "traveller", label: "Frequent traveller", emojiHint: "✈️" },
      { value: "older", label: "Older adult", emojiHint: "🫶" },
    ],
  },
];

// bodyArea → product ids with the reasoning line used in results
const bodyAreaMatches: Record<string, [ids: string[], categoryHint: string]> = {
  neck: [["orthofit-neck-01", "orthofit-contour-01", "orthofit-neck-02"], "contour-pillows"],
  back: [["orthofit-lumbar-01", "orthofit-back-01", "orthofit-lumbar-02"], "lumbar-cushions"],
  hips: [["orthofit-coccyx-01", "orthofit-coccyx-02", "orthofit-seat-01"], "coccyx-cushions"],
  knees: [["orthofit-knee-01", "orthofit-knee-02", "orthofit-insole-03"], "knee-pillows"],
  feet: [["orthofit-insole-01", "orthofit-insole-03", "orthofit-insole-02"], "orthopedic-insoles"],
  sitting: [["orthofit-lumbar-01", "orthofit-coccyx-01", "orthofit-ergo-02"], "seat-cushions"],
};

const momentBoosts: Record<string, string[]> = {
  working: ["work", "office", "desk"],
  sleeping: ["sleep", "rest", "side sleeper"],
  walking: ["walking", "feet", "standing"],
  exercising: ["sports", "active", "gym", "running"],
  travelling: ["travel", "driving", "flight", "commute"],
  sitting: ["work", "office", "long hours"],
};

const lifestyleBoosts: Record<string, string[]> = {
  office: ["office-workers", "work"],
  home: ["homemakers", "home"],
  physical: ["physically-active-workers", "active"],
  sports: ["sports-enthusiasts", "active"],
  traveller: ["travel", "travel"],
  older: ["older-adults", "mobility"],
};

export interface Recommendation {
  product: Product;
  score: number;
  reason: string;
}

/** Score all products against the three answers and return the best matches. */
export function recommend(answers: QuizAnswers, limit = 3): Recommendation[] {
  const [ids] = bodyAreaMatches[answers.bodyArea] ?? [[], ""];
  const momentTags = momentBoosts[answers.moment] ?? [];
  const lifestyleTags = lifestyleBoosts[answers.lifestyle] ?? [];

  const scored = products.map((product) => {
    let score = 0;
    if (ids.includes(product.id)) score += 10;
    score += product.lifestyleTags.filter((t) => momentTags.includes(t)).length * 3;
    score += product.collections.filter((c) => lifestyleTags.includes(c)).length * 2.5;
    if (product.bestSeller) score += 1;
    if (product.featured) score += 0.5;
    return { product, score };
  });

  scored.sort((a, b) => b.score - a.score);
  const top = scored.slice(0, limit).filter((s) => s.score > 0);

  return top.map(({ product }) => ({
    product,
    score: 0,
    reason: buildReason(product, answers),
  }));
}

function buildReason(product: Product, answers: QuizAnswers): string {
  const area: Record<string, string> = {
    neck: "gentle head-and-neck support",
    back: "lower-back support while seated",
    hips: "relief from seat pressure on the tailbone",
    knees: "comfortable knee positioning",
    feet: "underfoot cushioning and arch support",
    sitting: "everyday seating comfort",
  };
  const moment: Record<string, string> = {
    working: "long work sessions",
    sleeping: "restful nights",
    walking: "long days on your feet",
    exercising: "active sessions and recovery",
    travelling: "journeys and commutes",
    sitting: "uninterrupted sitting",
  };
  const parts = [`Chosen for ${area[answers.bodyArea] ?? "everyday comfort"}`];
  if (moment[answers.moment]) parts.push(`suited to ${moment[answers.moment]}`);
  parts.push(`— in the ${product.category.replace(/-/g, " ")} range`);
  return parts.join(" ") + ".";
}
