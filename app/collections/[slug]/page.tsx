import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGrid } from "@/components/products/product-grid";
import { getProducts } from "@/lib/api";
import { categories, categoryMap } from "@/lib/data/categories";
import { needs, needMap } from "@/lib/data/needs";
import { personas, personaMap } from "@/lib/data/personas";
import type { Product } from "@/types/product";

interface Params {
  slug: string;
}

export async function generateStaticParams() {
  return [...categories.map((c) => ({ slug: c.slug })), ...needs.map((n) => ({ slug: n.slug })), ...personas.map((p) => ({ slug: p.slug }))];
}

export async function generateMetadata({ params }: { params: Promise<Params> }): Promise<Metadata> {
  const { slug } = await params;
  const category = categoryMap.get(slug as never);
  const need = needMap.get(slug as never);
  const persona = personaMap.get(slug as never);
  const name = category?.name ?? need?.name ?? persona?.name ?? "Collection";
  return {
    title: `${name} — Orthopedic comfort collections`,
    description: category?.description ?? need?.description ?? persona?.description,
    alternates: { canonical: `/collections/${slug}` },
  };
}

export default async function CollectionPage({ params }: { params: Promise<Params> }) {
  const { slug } = await params;

  const category = categoryMap.get(slug as never);
  const need = needMap.get(slug as never);
  const persona = personaMap.get(slug as never);

  if (!category && !need && !persona) notFound();

  let products: Product[] = [];
  let title = "";
  let crumb = "";
  let description = "";
  let storyBlock: string | null = null;

  if (category) {
    title = category.name;
    crumb = category.name;
    description = category.description;
    products = await getProducts({ category: category.slug, sort: "featured" });
  } else if (need) {
    title = need.name;
    crumb = need.name;
    description = need.description;
    products = (await getProducts({ sort: "featured" })).filter((p) => p.collections.includes(need.slug));
    storyBlock =
      need.slug === "work"
        ? "Long desk hours ask the most from the lower back, hips and eyes. These supports make the seated hours feel designed rather than endured — then your movement breaks do the rest."
        : need.slug === "sleep"
          ? "A good night is mostly geometry: one consistent height for the head, gentle spacing between the knees. These products take a stance on both."
          : null;
  } else if (persona) {
    title = persona.name;
    crumb = persona.name;
    description = persona.description;
    products = (await getProducts({ sort: "featured" })).filter(
      (p) => persona.productIds.includes(p.id) || persona.recommendedCategories.includes(p.category),
    );
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs
        items={[
          { label: "Home", href: "/" },
          { label: "Collections", href: "/collections" },
          { label: crumb },
        ]}
      />
      <header className="mt-4 max-w-2xl">
        <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">{title}</h1>
        <p className="mt-3 leading-relaxed text-slate-soft">{description}</p>
      </header>

      {storyBlock && (
        <div className="mt-8 rounded-2xl border border-navy/8 bg-beige/50 p-6 md:p-8">
          <p className="font-display text-lg leading-relaxed text-navy">{storyBlock}</p>
        </div>
      )}

      {products.length > 0 ? (
        <>
          <p className="mt-10 mb-4 text-sm text-slate-soft" aria-live="polite">
            {products.length} product{products.length === 1 ? "" : "s"} in this collection
          </p>
          <ProductGrid products={products} />
        </>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-navy/15 py-16 text-center">
          <p className="text-sm text-slate-soft">
            This collection is being curated — browse <Link href="/shop" className="font-medium text-teal hover:underline">all products</Link> meanwhile.
          </p>
        </div>
      )}
    </div>
  );
}
