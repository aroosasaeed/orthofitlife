import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductVisual } from "@/components/visuals/product-visual";
import { formatDate } from "@/lib/utils/format";
import { Clock } from "lucide-react";
import { LinkSourceList } from "@/components/research/sources-expander";
import { ProductMiniCard } from "@/components/research/product-mini-card";
import { ArticleCard } from "@/components/home/content-sections";
import { getResearchArticle } from "@/lib/api";
import { getProductsByIds } from "@/lib/api";
import { researchArticles } from "@/lib/data/research";
import { medicalDisclaimer } from "@/lib/constants/site";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return researchArticles.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const article = await getResearchArticle(slug);
  if (!article) return { title: "Research article not found" };
  return {
    title: article.title,
    description: article.excerpt,
    alternates: { canonical: `/research/${article.slug}` },
    openGraph: { title: article.title, description: article.excerpt, type: "article" },
  };
}

export default async function ResearchArticlePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const article = await getResearchArticle(slug);
  if (!article) notFound();
  const relatedProducts = await getProductsByIds(article.relatedProductIds);
  const relatedArticles = article.relatedSlugs
    .map((s) => researchArticles.find((a) => a.slug === s))
    .filter(Boolean) as typeof researchArticles;

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Research & Guides", href: "/research" }, { label: article.title }]} />

      <article className="mt-6">
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">{article.topic} · Research explainer</p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-navy md:text-4xl">
            {article.title}
          </h1>
          <p className="mt-4 text-slate-soft">{article.excerpt}</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-soft">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden /> {article.readingMinutes} min read
            </span>
            <span>Published {formatDate(article.publishedAt)}</span>
          </div>
        </header>

        <div className="relative mx-auto mt-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl bg-beige">
          <ProductVisual kind={article.visual} scene />
        </div>

        <div className="mx-auto mt-10 max-w-3xl space-y-10">
          {article.sections.map((s, i) => (
            <section key={s.id} id={s.id} className="scroll-mt-24">
              <p className="text-xs font-semibold tracking-[0.18em] text-slate-soft/70 uppercase">
                Part {i + 1}
              </p>
              <h2 className="mt-1 font-display text-xl font-medium text-navy md:text-2xl">{s.heading}</h2>
              <div className="mt-3 space-y-4">
                {s.paragraphs.map((p, j) => (
                  <p key={j} className="leading-relaxed text-navy/85">{p}</p>
                ))}
              </div>
              {s.bullets && (
                <ul className="mt-4 space-y-2.5">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2.5 text-sm leading-relaxed text-navy/85">
                      <span className="mt-2 size-1.5 shrink-0 rounded-full bg-teal" aria-hidden />
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          <LinkSourceList sources={article.sources} />

          <p className="rounded-xl border border-navy/10 bg-beige/50 px-5 py-4 text-xs leading-relaxed text-slate-soft">
            {medicalDisclaimer} Research summaries on this page describe what the cited studies
            found — they do not describe what OrthofitLife products are proven to do.
          </p>
        </div>
      </article>

      {/* Related products */}
      <section className="mt-16" aria-labelledby="research-products">
        <h2 id="research-products" className="font-display text-2xl font-medium text-navy">Products related to this research</h2>
        <p className="mt-1 text-sm text-slate-soft">
          The research describes behaviour and body mechanics; these products support the comfort side of the same day.
        </p>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductMiniCard key={product.id} productId={product.id} />
          ))}
        </div>
      </section>

      {relatedArticles.length > 0 && (
        <section className="mt-14" aria-labelledby="research-related">
          <h2 id="research-related" className="font-display text-2xl font-medium text-navy">Read next</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedArticles.map((a) => (
              <ArticleCard key={a.slug} article={a} basePath="/research" variant="compact" />
            ))}
          </div>
        </section>
      )}
    </div>
  );
}
