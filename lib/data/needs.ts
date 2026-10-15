import type { Need } from "@/types/product";

export const needs: Need[] = [
  {
    slug: "work",
    name: "Work",
    description: "Desk hours, meetings and screens — support for long working days.",
  },
  {
    slug: "sleep",
    name: "Sleep",
    description: "Pillows and positioning for calmer, more comfortable nights.",
  },
  {
    slug: "back",
    name: "Back",
    description: "Lumbar and back support for sitting, standing and daily life.",
  },
  { slug: "feet", name: "Feet", description: "Insoles and underfoot comfort for long days on your feet." },
  {
    slug: "active",
    name: "Active",
    description: "Insoles and recovery comfort for sports and movement.",
  },
  {
    slug: "mobility",
    name: "Mobility",
    description: "Gentle everyday support designed with older adults in mind.",
  },
  {
    slug: "travel",
    name: "Travel",
    description: "Comfortable journeys — roads, flights and long waits.",
  },
];

export const needMap = new Map(needs.map((n) => [n.slug, n]));
