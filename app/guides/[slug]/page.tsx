import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductVisual } from "@/components/visuals/product-visual";
import { formatDate } from "@/lib/utils/format";
import { Clock, Share2, ArrowUpRight } from "lucide-react";
import { LinkSourceList } from "@/components/research/sources-expander";
import { ProductMiniCard } from "@/components/research/product-mini-card";
import { ArticleCard } from "@/components/home/content-sections";
import { content, getBlogPost } from "@/lib/api";
import { siteConfig, medicalDisclaimer } from "@/lib/constants/site";
import { blogPosts } from "@/lib/data/blog";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) return { title: "Guide not found" };
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: `/guides/${post.slug}` },
    openGraph: { title: post.title, description: post.excerpt, type: "article" },
  };
}

export default async function GuidePage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;
  const post = await getBlogPost(slug);
  if (!post) notFound();
  const relatedProducts = await content
    .blog
    .all()
    .then(() => post.relatedProductIds)
    .then(async (ids) => {
      const { getProductsByIds } = await import("@/lib/api");
      return getProductsByIds(ids);
    });
  const relatedPosts = post.relatedSlugs
    .map((s) => blogPosts.find((p) => p.slug === s))
    .filter(Boolean) as typeof blogPosts;

  const articleLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    datePublished: post.publishedAt,
    author: { "@type": "Organization", name: siteConfig.name },
    publisher: { "@type": "Organization", name: siteConfig.name, url: siteConfig.url },
    mainEntityOfPage: `${siteConfig.url}/guides/${post.slug}`,
  };

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleLd) }} />
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides", href: "/guides" }, { label: post.title }]} />

      <article className="mt-6">
        {/* Hero */}
        <header className="mx-auto max-w-3xl text-center">
          <p className="text-xs font-semibold tracking-[0.18em] text-teal uppercase">{post.topic}</p>
          <h1 className="mt-3 font-display text-3xl leading-tight font-medium tracking-tight text-navy md:text-4xl">
            {post.title}
          </h1>
          <p className="mt-4 text-slate-soft">{post.excerpt}</p>
          <div className="mt-4 flex items-center justify-center gap-4 text-xs text-slate-soft">
            <span className="inline-flex items-center gap-1">
              <Clock className="size-3.5" aria-hidden /> {post.readingMinutes} min read
            </span>
            <span>
              Published {formatDate(post.publishedAt)}
            </span>
          </div>
        </header>

        <div className="relative mx-auto mt-8 aspect-[21/9] max-w-4xl overflow-hidden rounded-2xl bg-beige">
          <ProductVisual kind={post.visual} scene />
        </div>

        <div className="mx-auto mt-10 grid max-w-5xl gap-10 lg:grid-cols-[240px_1fr]">
          {/* TOC sidebar */}
          <nav className="hidden lg:block" aria-label="Table of contents">
            <div className="sticky top-24">
              <p className="text-xs font-semibold tracking-wider text-slate-soft uppercase">In this guide</p>
              <ul className="mt-3 space-y-2 border-l border-navy/10 pl-4 text-sm">
                {post.sections.map((s, i) => (
                  <li key={s.id}>
                    <a href={`#${s.id}`} className="text-slate-soft transition-colors hover:text-teal">
                      {i + 1}. {s.heading}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>

          {/* Body */}
          <div>
            <div className="max-w-2xl space-y-10">
              {post.sections.map((s) => (
                <section key={s.id} id={s.id} className="scroll-mt-24">
                  <h2 className="font-display text-xl font-medium text-navy md:text-2xl">{s.heading}</h2>
                  <div className="mt-3 space-y-4">
                    {s.paragraphs.map((p, i) => (
                      <p key={i} className="leading-relaxed text-navy/85"> {p} </p>
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
            </div>

            {/* Share */}
            <div className="mt-10 flex items-center gap-3 border-t border-navy/10 pt-6">
              <Share2 className="size-4 text-slate-soft" aria-hidden />
              <span className="text-sm text-slate-soft">Share this guide:</span>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(`${post.title} — ${siteConfig.url}/guides/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-teal hover:underline"
              >
                WhatsApp
              </a>
              <a
                href={`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(`${siteConfig.url}/guides/${post.slug}`)}`}
                target="_blank"
                rel="noreferrer"
                className="text-sm font-medium text-teal hover:underline"
              >
                Facebook
              </a>
            </div>

            {/* Research sources */}
            <div className="mt-8">
              <LinkSourceList sources={post.sources} />
            </div>

            <p className="mt-8 rounded-xl border border-navy/10 bg-beige/50 px-5 py-4 text-xs leading-relaxed text-slate-soft">
              {medicalDisclaimer}
            </p>
          </div>
        </div>
      </article>

      {/* Related products */}
      <section className="mt-16" aria-labelledby="guide-products">
        <h2 id="guide-products" className="font-display text-2xl font-medium text-navy">Products mentioned</h2>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {relatedProducts.map((product) => (
            <ProductMiniCard key={product.id} productId={product.id} />
          ))}
        </div>
      </section>

      {/* Related articles */}
      {relatedPosts.length > 0 && (
        <section className="mt-14" aria-labelledby="guides-related">
          <h2 id="guides-related" className="font-display text-2xl font-medium text-navy">Read next</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {relatedPosts.map((p) => (
              <ArticleCard key={p.slug} article={p} basePath="/guides" variant="compact" />
            ))}
          </div>
        </section>
      )}
      <div className="mx-auto mt-4 max-w-5xl text-right text-xs text-slate-soft">
      <a href="#main" className="inline-flex items-center gap-1 text-teal hover:underline"><ArrowUpRight className="size-3" aria-hidden /> Back to top</a>
      </div>
    </div>
  );
}
