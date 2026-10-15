// ---------------------------------------------------------------------------
// Public data-access surface — the ONLY module UI components should import
// for data. Swap the backend behind this file and the app keeps compiling.
// ---------------------------------------------------------------------------

import { getProductRepository, type ProductRepository } from "@/lib/api/repositories";
import type { BlogPost, CaseStudy, ResearchArticle } from "@/types/content";
import type { Product } from "@/types/product";
import { blogPosts } from "@/lib/data/blog";
import { researchArticles } from "@/lib/data/research";
import { caseStudies, deskHotspots } from "@/lib/data/case-studies";
import { personas } from "@/lib/data/personas";
import { needs } from "@/lib/data/needs";
import { categories } from "@/lib/data/categories";

export const productRepo: ProductRepository = getProductRepository();

// --- products ---------------------------------------------------------------

export async function getProducts(query?: Parameters<ProductRepository["getProducts"]>[0]): Promise<Product[]> {
  return productRepo.getProducts(query);
}

export async function getProductBySlug(slug: string): Promise<Product | null> {
  return productRepo.getProductBySlug(slug);
}

export async function getProductsByIds(ids: string[]): Promise<Product[]> {
  return productRepo.getProducts({ ids, sort: "featured" });
}

export async function searchProducts(query: string): Promise<Product[]> {
  return productRepo.searchProducts(query);
}

export async function getRelatedProducts(
  productId: string,
  product: Product,
): Promise<Product[]> {
  return productRepo.getRelatedProducts(product);
}

export async function getReviews(productId: string) {
  return productRepo.getReviews(productId);
}

// --- content ----------------------------------------------------------------

export async function getBlogPost(slug: string): Promise<BlogPost | null> {
  return blogPosts.find((p) => p.slug === slug) ?? null;
}

export async function getResearchArticle(slug: string): Promise<ResearchArticle | null> {
  return researchArticles.find((a) => a.slug === slug) ?? null;
}

export async function getCaseStudyBySlug(slug: string): Promise<CaseStudy | null> {
  return caseStudies.find((c) => c.slug === slug) ?? null;
}

export async function getCaseStudyCollection(): Promise<CaseStudy[]> {
  return caseStudies;
}

export { deskHotspots };

// --- reference collections --------------------------------------------------

export const content = {
  blog: {
    all: async (): Promise<BlogPost[]> => blogPosts,
    bySlug: async (slug: string): Promise<BlogPost | null> => blogPosts.find((p) => p.slug === slug) ?? null,
  },
  research: {
    all: async (): Promise<ResearchArticle[]> => researchArticles,
    bySlug: async (slug: string): Promise<ResearchArticle | null> => researchArticles.find((a) => a.slug === slug) ?? null,
  },
  caseStudies: {
    all: async (): Promise<CaseStudy[]> => caseStudies,
    bySlug: async (slug: string): Promise<CaseStudy | null> => caseStudies.find((c) => c.slug === slug) ?? null,
    hotspots: deskHotspots,
  },
  personas: {
    all: async () => personas,
    bySlug: async (slug: string) => personas.find((p) => p.slug === slug) ?? null,
  },
  needs: {
    all: async () => needs,
    bySlug: async (slug: string) => needs.find((n) => n.slug === slug) ?? null,
  },
  categories: {
    all: async () => categories,
    bySlug: async (slug: string) => categories.find((c) => c.slug === slug) ?? null,
  },
};
