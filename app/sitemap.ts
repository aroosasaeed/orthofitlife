import type { MetadataRoute } from "next";
import { siteConfig } from "@/lib/constants/site";
import { products } from "@/lib/data/products";
import { blogPosts } from "@/lib/data/blog";
import { researchArticles } from "@/lib/data/research";
import { caseStudies } from "@/lib/data/case-studies";
import { categories } from "@/lib/data/categories";
import { needs } from "@/lib/data/needs";
import { personas } from "@/lib/data/personas";

type Entry = MetadataRoute.Sitemap[number];

export default function sitemap(): MetadataRoute.Sitemap {
  const base = siteConfig.url;
  const now = new Date();

  const staticPaths: Array<[string, Entry["changeFrequency"], number]> = [
    ["/", "daily", 1],
    ["/shop", "daily", 0.9],
    ["/collections", "weekly", 0.8],
    ["/guides", "weekly", 0.8],
    ["/research", "weekly", 0.8],
    ["/case-studies", "weekly", 0.7],
    ["/about", "monthly", 0.5],
    ["/contact", "monthly", 0.5],
    ["/compare", "monthly", 0.4],
    ["/privacy", "yearly", 0.2],
    ["/terms", "yearly", 0.2],
    ["/shipping", "monthly", 0.3],
    ["/returns", "yearly", 0.2],
  ];

  const staticPages: Entry[] = staticPaths.map(([path, changeFrequency, priority]) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency,
    priority,
  }));

  const productsPages: Entry[] = products.map((p) => ({
    url: `${base}/products/${p.slug}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.8,
  }));

  const collectionPaths = [
    ...needs.map((n) => `/collections/${n.slug}`),
    ...personas.map((p) => `/collections/${p.slug}`),
    ...categories.map((c) => `/collections/${c.slug}`),
  ];

  const collectionPages: Entry[] = collectionPaths.map((path) => ({
    url: `${base}${path}`,
    lastModified: now,
    changeFrequency: "weekly",
    priority: 0.7,
  }));

  const guidePages: Entry[] = blogPosts.map((p) => ({
    url: `${base}/guides/${p.slug}`,
    lastModified: new Date(p.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const researchPages: Entry[] = researchArticles.map((a) => ({
    url: `${base}/research/${a.slug}`,
    lastModified: new Date(a.publishedAt),
    changeFrequency: "monthly",
    priority: 0.6,
  }));

  const casePages: Entry[] = caseStudies.map((c) => ({
    url: `${base}/case-studies/${c.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.5,
  }));

  return [
    ...staticPages,
    ...productsPages,
    ...collectionPages,
    ...guidePages,
    ...researchPages,
    ...casePages,
  ];
}
