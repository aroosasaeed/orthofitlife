import type { CategorySlug } from "@/types/product";

export interface NavLink {
  label: string;
  href: string;
  description?: string;
}

export const mainNav: NavLink[] = [
  { label: "Shop", href: "/shop", description: "Browse all products" },
  { label: "Shop by Need", href: "/collections", description: "Work, sleep, back, feet, active & mobility" },
  { label: "Research & Guides", href: "/research", description: "Research translated into simple language" },
  { label: "Case Studies", href: "/case-studies", description: "The problem behind the product" },
  { label: "About", href: "/about", description: "Our story & mission" },
];

export const footerNav = {
  shop: [
    { label: "All Products", href: "/shop" },
    { label: "Best Sellers", href: "/shop?sort=best" },
    { label: "Neck Pillows", href: "/collections/neck-pillows" },
    { label: "Back Support", href: "/collections/back-support" },
    { label: "Cushions", href: "/collections/seat-cushions" },
    { label: "Insoles", href: "/collections/orthopedic-insoles" },
    { label: "Knee Pillows", href: "/collections/knee-pillows" },
  ] satisfies NavLink[],
  learn: [
    { label: "Research", href: "/research" },
    { label: "Guides", href: "/guides" },
    { label: "Blog", href: "/guides" },
    { label: "Case Studies", href: "/case-studies" },
  ] satisfies NavLink[],
  company: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "FAQs", href: "/contact#faq" },
  ] satisfies NavLink[],
  policies: [
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" },
    { label: "Shipping", href: "/shipping" },
    { label: "Returns", href: "/returns" },
  ] satisfies NavLink[],
};

export const categorySlugs: CategorySlug[] = [
  "neck-pillows",
  "contour-pillows",
  "back-support",
  "lumbar-cushions",
  "coccyx-cushions",
  "knee-pillows",
  "orthopedic-insoles",
  "seat-cushions",
  "ergonomic-supports",
];
