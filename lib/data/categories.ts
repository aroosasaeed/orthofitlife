import type { Category } from "@/types/product";

export const categories: Category[] = [
  {
    slug: "neck-pillows",
    name: "Neck Pillows",
    tagline: "Gentle support for your head and neck",
    description:
      "Pillows designed to help keep your head and neck in a comfortable, supported position while you sleep or rest.",
    purpose: "Helps keep the head and neck comfortably supported",
    visual: "neck",
  },
  {
    slug: "contour-pillows",
    name: "Contour Pillows",
    tagline: "Shaped to follow your natural curve",
    description:
      "Ergonomically contoured pillows designed for comfortable head and neck positioning through the night.",
    purpose: "Designed for comfortable head and neck positioning",
    visual: "contour",
  },
  {
    slug: "back-support",
    name: "Back Support",
    tagline: "Backed by better seating, standing and posture habits",
    description:
      "Supports and braces designed to encourage more comfortable everyday back positioning.",
    purpose: "Encourages comfortable back positioning",
    visual: "premiumBack",
  },
  {
    slug: "lumbar-cushions",
    name: "Lumbar Cushions",
    tagline: "Comfortable support for the curve of your lower back",
    description:
      "Cushions that add gentle padding and support to the natural inward curve of your lower back while seated.",
    purpose: "Adds gentle support to the lower back curve",
    visual: "lumbar",
  },
  {
    slug: "coccyx-cushions",
    name: "Coccyx Cushions",
    tagline: "Take the pressure off your tailbone",
    description:
      "Seat cushions with a central cut-out, designed to reduce direct pressure on the tailbone when sitting.",
    purpose: "Helps reduce direct pressure while sitting",
    visual: "coccyx",
  },
  {
    slug: "knee-pillows",
    name: "Knee Pillows",
    tagline: "Comfort between the knees, for side sleeping",
    description:
      "Shaped pillows placed between or under the knees to help keep hips and knees in a comfortable resting position.",
    purpose: "Designed for comfortable knee and hip positioning",
    visual: "knee",
  },
  {
    slug: "orthopedic-insoles",
    name: "Orthopedic Insoles",
    tagline: "Every step, comfortably supported",
    description:
      "Insoles with arch support and cushioning, designed to add comfort and soft pressure distribution underfoot.",
    purpose: "Adds cushioning and underfoot support",
    visual: "insoleArch",
  },
  {
    slug: "seat-cushions",
    name: "Seat Cushions",
    tagline: "Comfortable sitting, anywhere",
    description:
      "General-purpose seating cushions that add comfort for desks, dining chairs, cars and travel.",
    purpose: "Adds comfort to everyday seats",
    visual: "seat",
  },
  {
    slug: "ergonomic-supports",
    name: "Ergonomic Supports",
    tagline: "Small changes, more comfort",
    description:
      "Posture supports, footrests and wedges built around simple ergonomic ideas for work and rest.",
    purpose: "Everyday ergonomic comfort support",
    visual: "footrest",
  },
];

export const categoryMap = new Map(categories.map((c) => [c.slug, c]));

export function getCategory(slug: string): Category | undefined {
  return categoryMap.get(slug as Category["slug"]);
}
