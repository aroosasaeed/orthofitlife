// ---------------------------------------------------------------------------
// Content types: blog, research, case studies
// ---------------------------------------------------------------------------

import type { VisualKind, HowToUseStep } from "@/types/product";

/** Bibliographic metadata for a real, verifiable source. */
export interface ResearchSource {
  title: string;
  authors: string;
  publication: string;
  year: number;
  doi?: string;
  url?: string;
  kind: "journal" | "systematic-review" | "guideline" | "organization";
  /** One-line plain-language summary of what the source found / determined. */
  summary: string;
}

export type ContentTopic =
  | "Ergonomics"
  | "Sleep"
  | "Posture"
  | "Sitting"
  | "Walking"
  | "Foot Support"
  | "Recovery"
  | "Workplace Wellness"
  | "Buying Guides";

export interface ArticleSection {
  id: string;
  heading: string;
  paragraphs: string[];
  bullets?: string[];
}

/** Shared shape for blog guides and research explainers. */
export interface ContentArticle {
  slug: string;
  title: string;
  excerpt: string;
  topic: ContentTopic;
  readingMinutes: number;
  publishedAt: string; // ISO date
  updatedAt?: string;
  visual: VisualKind;
  tone: "sage" | "teal" | "beige" | "navy";
  sections: ArticleSection[];
  sources: ResearchSource[];
  relatedProductIds: string[];
  relatedSlugs: string[];
}

export type ResearchArticle = ContentArticle;
export type BlogPost = ContentArticle;

// ---------------------------------------------------------------------------
// Case studies (problem → solution artifacts)
// ---------------------------------------------------------------------------

export interface CaseStudy {
  slug: string;
  title: string;
  subtitle: string;
  persona: string;
  /** Everyday activity used for the hero visual. */
  scene: "desk" | "sleep" | "standing" | "driving" | "walking";
  problem: { headline: string; body: string };
  scenario: { headline: string; body: string };
  needs: { headline: string; body: string };
  solution: {
    headline: string;
    body: string;
    productIds: string[];
  };
  howToUse: HowToUseStep[];
  expectedBenefit: { headline: string; body: string };
  tips: string[];
  relatedSlugs: string[];
}

/** Interactive hotspot for the "A Day at the Desk" artifact. */
export interface DeskHotspot {
  id: string;
  label: string;
  /** Position as % coordinates on the scene. */
  x: number;
  y: number;
  challenge: string;
  consideration: string;
  productCategory: string;
  tip: string;
  relatedProductIds: string[];
}
