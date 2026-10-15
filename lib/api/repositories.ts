// ---------------------------------------------------------------------------
// Repository layer
// ---------------------------------------------------------------------------
// The UI depends only on these interfaces, never on the mock data files.
// Today: MockProductRepository returns local sample data.
// Tomorrow: implement ShopifyProductRepository / ApiProductRepository with the
// same interface and switch the factory below — no UI changes required.
// ---------------------------------------------------------------------------

import type { Product, CategorySlug, Review } from "@/types/product";
import type { BlogPost } from "@/types/content";
import type { CaseStudy } from "@/types/content";
import { products } from "@/lib/data/products";
import { categories } from "@/lib/data/categories";
import { getReviewsFor } from "@/lib/data/reviews";

export interface ProductQuery {
  category?: CategorySlug;
  collection?: string;
  ids?: string[];
  sort?: "featured" | "price-asc" | "price-desc" | "rating" | "best";
  limit?: number;
}

export interface ProductRepository {
  getProducts(query?: ProductQuery): Promise<Product[]>;
  getProductById(id: string): Promise<Product | null>;
  getProductBySlug(slug: string): Promise<Product | null>;
  getCategories(): Promise<typeof categories>;
  searchProducts(query: string): Promise<Product[]>;
  getRelatedProducts(product: Product, limit?: number): Promise<Product[]>;
  getReviews(productId: string): Promise<Review[]>;
}

// --- scoring-based sample search across name, category, tags and use cases ---

function scoreProduct(product: Product, terms: string[]): number {
  const haystacks: Array<[string, number]> = [
    [product.name.toLowerCase(), 5],
    [product.category.replace(/-/g, " "), 4],
    [product.collections.join(" ").replace(/-/g, " "), 3],
    [product.shortDescription.toLowerCase(), 2],
    [product.lifestyleTags.join(" "), 3],
    [product.useCases.join(" "), 3],
    [product.suitableFor.join(" ").toLowerCase(), 3],
    [product.material.toLowerCase(), 1],
  ];
  let score = 0;
  for (const term of terms) {
    for (const [text, weight] of haystacks) {
      if (term.length >= 2 && text.includes(term)) score += weight * term.length / term.length;
    }
  }
  return score;
}

const synonyms: Record<string, string[]> = {
  office: ["work", "desk", "study", "long hours sitting"],
  work: ["office", "desk"],
  sleep: ["sleep", "rest", "side sleeper", "night"],
  walking: ["walk", "feet", "standing"],
  standing: ["feet", "insole"],
  back: ["back", "lumbar", "posture"],
  neck: ["neck", "pillow", "cervical"],
  feet: ["foot", "insole", "heel", "arch"],
  pain: ["support", "comfort", "pressure"],
  travel: ["travel", "flight", "bus", "car", "drive"],
  drive: ["driving", "car", "travel"],
  kids: ["children"],
  gaming: ["desk", "office"],
  gym: ["sport", "active", "running"],
};

function expandQuery(query: string): string[] {
  const base = query.toLowerCase().trim().split(/\s+/).filter(Boolean);
  const expanded = new Set(base);
  for (const term of base) {
    for (const [key, values] of Object.entries(synonyms)) {
      if (term.includes(key)) values.forEach((v) => expanded.add(v));
    }
  }
  return Array.from(expanded);
}

class MockProductRepository implements ProductRepository {
  async getProducts(query: ProductQuery = {}): Promise<Product[]> {
    let list = [...products];
    if (query.ids) list = list.filter((p) => query.ids!.includes(p.id));
    if (query.category) list = list.filter((p) => p.category === query.category);
    if (query.collection) list = list.filter((p) => p.collections.includes(query.collection!));
    switch (query.sort) {
      case "price-asc":
        list.sort((a, b) => a.price - b.price);
        break;
      case "price-desc":
        list.sort((a, b) => b.price - a.price);
        break;
      case "rating":
        list.sort((a, b) => b.rating - a.rating);
        break;
      case "best":
        list.sort((a, b) => Number(b.bestSeller ?? false) - Number(a.bestSeller ?? false));
        break;
      case "featured":
        list.sort((a, b) => Number(b.featured ?? false) - Number(a.featured ?? false) || b.rating - a.rating);
        break;
      default:
        break;
    }
    return query.limit ? list.slice(0, query.limit) : list;
  }

  async getProductById(id: string): Promise<Product | null> {
    return products.find((p) => p.id === id) ?? null;
  }

  async getProductBySlug(slug: string): Promise<Product | null> {
    return products.find((p) => p.slug === slug) ?? null;
  }

  async getCategories() {
    return categories;
  }

  async searchProducts(query: string): Promise<Product[]> {
    const terms = expandQuery(query);
    if (!terms.length) return [];
    const scored = products
      .map((p) => ({ p, s: scoreProduct(p, terms) }))
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, 12);
    return scored.map((r) => r.p);
  }

  async getRelatedProducts(product: Product, limit = 4): Promise<Product[]> {
    const scored = products
      .filter((p) => p.id !== product.id)
      .map((p) => {
        let s = 0;
        if (p.category === product.category) s += 3;
        s += p.collections.filter((c) => product.collections.includes(c)).length;
        s += p.lifestyleTags.filter((t) => product.lifestyleTags.includes(t)).length * 0.5;
        return { p, s: s - product.price * 0.0001 };
      })
      .sort((a, b) => b.s - a.s)
      .slice(0, limit);
    return scored.map((r) => r.p);
  }

  async getReviews(productId: string): Promise<Review[]> {
    return getReviewsFor(productId);
  }
}

// --- content repositories (guides, research, case studies) -------------------

export interface BlogRepository {
  getPosts(): Promise<BlogPost[]>;
  getPostBySlug(slug: string): Promise<BlogPost | null>;
  getRelatedPosts(slug: string, limit?: number): Promise<BlogPost[]>;
}

export interface CaseStudyRepository {
  getCaseStudies(): Promise<CaseStudy[]>;
  getCaseStudyBySlug(slug: string): Promise<CaseStudy | null>;
}

// --- factory ----------------------------------------------------------------

export type DataSourceId = "mock" | string;

export function getProductRepository(source: DataSourceId = process.env.NEXT_PUBLIC_DATA_SOURCE ?? "mock"): ProductRepository {
  if (source === "mock") return new MockProductRepository();
  // Future: switch on backend id ("shopify", "custom-api", ...) and return the
  // matching implementation. UI components never import this file directly;
  // they import the typed accessors from lib/api/index.ts instead.
  return new MockProductRepository();
}

/** Shared repository instance for client stores. */
export const productRepo: ProductRepository = getProductRepository();
