// ---------------------------------------------------------------------------
// Product domain types
// These types are the contract between the UI and any future data source
// (mock data today; Shopify Storefront API, custom REST/GraphQL later).
// ---------------------------------------------------------------------------

export type VisualKind =
  | "lumbar"
  | "basicLumbar"
  | "premiumBack"
  | "coccyx"
  | "ringCushion"
  | "knee"
  | "contour"
  | "neck"
  | "travelNeck"
  | "seat"
  | "gelSeat"
  | "insoleArch"
  | "insoleHeel"
  | "insoleSport"
  | "postureBrace"
  | "neckWedge"
  | "footrest"
  | "legWedge";

export type CategorySlug =
  | "neck-pillows"
  | "contour-pillows"
  | "back-support"
  | "lumbar-cushions"
  | "coccyx-cushions"
  | "knee-pillows"
  | "orthopedic-insoles"
  | "seat-cushions"
  | "ergonomic-supports";

export interface Category {
  slug: CategorySlug;
  name: string;
  tagline: string;
  description: string;
  /** Simplified "what it does" line used in discovery results. */
  purpose: string;
  visual: VisualKind;
}

/** Lifestyle / shopping collections, e.g. Work, Sleep, Travel. */
export type NeedSlug =
  | "work"
  | "sleep"
  | "back"
  | "feet"
  | "active"
  | "mobility"
  | "travel";

export interface Need {
  slug: NeedSlug;
  name: string;
  description: string;
}

/** Persona collections ("shop by person"). */
export type PersonaSlug =
  | "office-workers"
  | "homemakers"
  | "physically-active-workers"
  | "sports-enthusiasts"
  | "older-adults";

export interface Persona {
  slug: PersonaSlug;
  name: string;
  headline: string;
  description: string;
  /** Category slugs highlighted for this persona. */
  recommendedCategories: CategorySlug[];
  productIds: string[];
}

export interface Spec {
  label: string;
  value: string;
}

export interface Faq {
  question: string;
  answer: string;
}

export interface WhoItServesEntry {
  label: string;
  reason: string;
}

export interface HowToUseStep {
  title: string;
  description: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: CategorySlug;
  /** Cross-category collections: needs (work/sleep/…) and personas. */
  collections: string[];
  price: number;
  compareAtPrice?: number;
  currency: "PKR";
  rating: number;
  reviewCount: number;
  material: string;
  shortDescription: string;
  description: string;
  benefits: string[];
  features: string[];
  suitableFor: string[];
  lifestyleTags: string[];
  useCases: string[];
  why: string;
  problem: {
    headline: string;
    body: string;
  };
  whoItServes: WhoItServesEntry[];
  howToUse: HowToUseStep[];
  specs: Spec[];
  faqs: Faq[];
  visual: VisualKind;
  bestSeller?: boolean;
  featured?: boolean;
}

export interface ReviewAuthor {
  name: string;
  city: string;
}

export interface Review {
  productId: string;
  author: ReviewAuthor;
  rating: number;
  title: string;
  body: string;
  date: string;
}

// ---------------------------------------------------------------------------
// Cart & wishlist types
// ---------------------------------------------------------------------------

export interface CartItem {
  productId: string;
  quantity: number;
}

export interface CartLine extends CartItem {
  product: Product;
}
