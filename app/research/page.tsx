import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArticleCard } from "@/components/home/content-sections";
import { researchArticles } from "@/lib/data/research";
import { Badge } from "@/components/ui/badges";

export const metadata: Metadata = {
  title: "Research & Guides Hub",
  description:
    "Orthopedic and ergonomic research translated into plain language for Pakistan: sitting, sleep, pillow height, foot orthoses and desk ergonomics — with real sources.",
  alternates: { canonical: "/research" },
};

const CATEGORY_NOTE =
  "Every article answers the same five questions: what do researchers know, what does it mean in simple terms, and what can you actually do? Sources are experts-checked links, expandable on demand.";

const CATEGORIES = [
  "Ergonomics",
  "Sleep",
  "Posture",
  "Sitting",
  "Walking",
  "Foot Support",
  "Recovery",
  "Workplace Wellness",
] as const;

export default function ResearchPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Research & Guides" }]} />
      <header className="mt-4 max-w-3xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
          OrthofitLife Research &amp; Guides
        </h1>
        <p className="mt-3 leading-relaxed text-slate-soft">{CATEGORY_NOTE}</p>
      </header>

      {/* Category chips (decorative filters; article count is small enough to scroll) */}
      <div className="mt-6 flex flex-wrap gap-2" aria-label="Research topics">
        {CATEGORIES.map((cat) => {
          const count = researchArticles.filter((a) => a.topic === cat).length;
          return (
            <span
              key={cat}
              className="rounded-full border border-navy/12 px-4 py-1.5 text-xs font-medium text-navy text-slate-soft"
            >
              {cat}
              {count > 0 && <span className="ml-1.5 text-teal">{count}</span>}
            </span>
          );
        })}
      </div>

      <div className="mt-8">
        <Badge tone="beige">Sample starter articles — real sources, verified DOIs</Badge>
      </div>

      <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {researchArticles.map((article) => (
          <ArticleCard key={article.slug} article={article} basePath="/research" />
        ))}
      </div>
    </div>
  );
}
