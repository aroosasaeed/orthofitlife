import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ArticleCard } from "@/components/home/content-sections";
import { blogPosts } from "@/lib/data/blog";

export const metadata: Metadata = {
  title: "Guides & Journal",
  description:
    "Practical guides on pillows, lumbar support, insoles, coccyx cushions and desk setup — written for everyday readers in Pakistan, with honest limits.",
  alternates: { canonical: "/guides" },
};

export default function GuidesPage() {
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Guides" }]} />
      <header className="mt-4 max-w-2xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
          The OrthofitLife Journal
        </h1>
        <p className="mt-3 leading-relaxed text-slate-soft">
          Practical, honest guides for everyday comfort. No invented statistics — and where
          research exists, we link to it.
        </p>
      </header>

      <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {blogPosts.map((post) => (
          <ArticleCard key={post.slug} article={post} basePath="/guides" />
        ))}
      </div>
    </div>
  );
}
