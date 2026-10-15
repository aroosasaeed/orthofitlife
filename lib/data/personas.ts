import type { Persona } from "@/types/product";

export const personas: Persona[] = [
  {
    slug: "office-workers",
    name: "Office Workers",
    headline: "Long days at the desk?",
    description:
      "Desk hours ask a lot from your back, neck and hips. These supports are chosen to make everyday chair time more comfortable.",
    recommendedCategories: ["lumbar-cushions", "back-support", "neck-pillows", "seat-cushions"],
    productIds: [
      "orthofit-lumbar-01",
      "orthofit-lumbar-02",
      "orthofit-back-01",
      "orthofit-seat-01",
      "orthofit-ergo-03",
      "orthofit-neck-01",
    ],
  },
  {
    slug: "homemakers",
    name: "Homemakers",
    headline: "All-day household comfort",
    description:
      "Hours of lifting, bending, standing and household tasks. Everyday supports chosen around home routines.",
    recommendedCategories: ["knee-pillows", "lumbar-cushions", "orthopedic-insoles", "seat-cushions"],
    productIds: [
      "orthofit-knee-01",
      "orthofit-lumbar-01",
      "orthofit-insole-01",
      "orthofit-seat-02",
      "orthofit-insole-02",
    ],
  },
  {
    slug: "physically-active-workers",
    name: "Physically Active Workers",
    headline: "Support for demanding, physical days",
    description:
      "Construction, delivery, salon, retail, healthcare — work that keeps you on your feet. Underfoot support and back comfort built for it.",
    recommendedCategories: ["orthopedic-insoles", "back-support", "lumbar-cushions", "seat-cushions"],
    productIds: [
      "orthofit-insole-03",
      "orthofit-insole-01",
      "orthofit-back-01",
      "orthofit-lumbar-02",
      "orthofit-coccyx-01",
    ],
  },
  {
    slug: "sports-enthusiasts",
    name: "Sports Enthusiasts",
    headline: "Move, play, recover",
    description:
      "From cricket to running to gym sessions — foot support, knee comfort and recovery positioning for your active routine.",
    recommendedCategories: ["orthopedic-insoles", "knee-pillows", "contour-pillows", "ergonomic-supports"],
    productIds: [
      "orthofit-insole-03",
      "orthofit-knee-01",
      "orthofit-contour-01",
      "orthofit-insole-01",
      "orthofit-ergo-04",
    ],
  },
  {
    slug: "older-adults",
    name: "Older Adults",
    headline: "Everyday comfort, thoughtfully chosen",
    description:
      "Gentle, easy-to-use everyday supports for hips, back, feet and restful positioning.",
    recommendedCategories: ["lumbar-cushions", "coccyx-cushions", "neck-pillows", "knee-pillows"],
    productIds: [
      "orthofit-lumbar-01",
      "orthofit-coccyx-01",
      "orthofit-coccyx-02",
      "orthofit-neck-01",
      "orthofit-knee-01",
      "orthofit-insole-02",
    ],
  },
];

export const personaMap = new Map(personas.map((p) => [p.slug, p]));
