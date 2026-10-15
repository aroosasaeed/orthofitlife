// ---------------------------------------------------------------------------
// Product comparison page — /compare?ids=a,b,c
// Select products on shop/collection pages via the compare toggle, or arrive
// with a shared link. Max three columns keeps the table readable on mobile.
// ---------------------------------------------------------------------------

import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ProductGrid } from "@/components/products/product-grid";
import { getProductsByIds, getProducts } from "@/lib/api";
import { formatPrice } from "@/lib/utils/format";


export const metadata: Metadata = {
  title: "Compare Products",
  description: "Compare back-support products side by side: support level, material, portability, best for, size and price.",
  alternates: { canonical: "/compare" },
  robots: { index: false },
};

const PARAMS: Record<string, { label: string; get: (p: Awaited<ReturnType<typeof getProducts>>[number]) => string }> = {
  support: { label: "Support level", get: (p) => p.specs.find((s) => s.label === "Support level")?.value ?? "— Medium-firm support" },
  material: { label: "Material", get: (p) => p.material },
  portable: { label: "Portability", get: (p) => p.specs.find((s) => s.label === "Dimensions")?.value ?? p.specs.find((s) => /port/i.test(s.label))?.value ?? "Light & portable" },
  best: { label: "Best for", get: (p) => p.suitableFor.slice(0, 2).join(", ") || p.lifestyleTags.slice(0, 2).join(", ") },
  size: { label: "Size", get: (p) => p.specs.find((s) => s.label === "Dimensions")?.value ?? "One size (see specs)" },
  price: { label: "Price", get: (p) => formatPrice(p.price) },
  warranty: { label: "Rating", get: (p) => `${p.rating} / 5 (sample)` },
};

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ ids?: string }>;
}) {
  const { ids } = await searchParams;
  const requestedIds = (ids ?? "").split(",").filter(Boolean).slice(0, 3);
  let products = requestedIds.length ? await getProductsByIds(requestedIds) : [];

  // Default: the three lumbar/back supports from the spec example
  if (products.length === 0) {
    products = await getProductsByIds(["orthofit-lumbar-02", "orthofit-lumbar-01", "orthofit-back-01"]);
  }

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Compare" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
        Which support is right for you?
      </h1>
      <p className="mt-3 max-w-2xl text-slate-soft">
        Side-by-side differences, honestly stated. Toggle products on any listing to build a
        comparison (up to three), or start from the default below.
      </p>

      {products.length > 0 ? (
        <div className="mt-10 overflow-x-auto rounded-2xl border border-navy/10 bg-white">
          <table className="w-full min-w-[640px] text-left text-sm">
            <caption className="sr-only">Product comparison of {products.map((p) => p.name).join(", ")}</caption>
            <thead>
              <tr className="border-b border-navy/10">
                <th scope="col" className="w-36 bg-beige/40 px-5 py-4 text-xs font-semibold tracking-wider text-slate-soft uppercase">
                  Parameter
                </th>
                {products.map((p) => (
                  <th key={p.id} scope="col" className="min-w-[180px] px-5 py-4">
                    <div className="font-display text-base font-medium text-navy">{p.name}</div>
                    <div className="mt-0.5 text-xs capitalize text-slate-soft">{p.category.replace(/-/g, " ")}</div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-navy/8">
              {Object.entries(PARAMS).map(([key, param]) => (
                <tr key={key}>
                  <th scope="row" className="bg-beige/40 px-5 py-3.5 font-medium text-navy">{param.label}</th>
                  {products.map((p) => (
                    <td key={p.id} className="px-5 py-3.5 text-slate-soft">{param.get(p)}</td>
                  ))}
                </tr>
              ))}
              <tr>
                <th scope="row" className="bg-beige/40 px-5 py-4 font-medium text-navy">Product page</th>
                {products.map((p) => (
                  <td key={p.id} className="px-5 py-4">
                    <Link href={`/products/${p.slug}`} className="inline-flex items-center gap-1 font-medium text-teal hover:underline">
                      View details →
                    </Link>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>
      ) : (
        <div className="mt-10 rounded-2xl border border-dashed border-navy/15 py-16 text-center">
          <p className="text-sm text-slate-soft">No products selected for comparison.</p>
          <Link href="/collections/lumbar-cushions" className="mt-3 inline-block font-medium text-teal hover:underline">
            Browse back support →
          </Link>
        </div>
      )}

      {products.length === 0 && (
        <div className="mt-14">
          <h2 className="font-display text-2xl font-medium text-navy">Or start from these</h2>
          <DefaultComparison />
        </div>
      )}

      <p className="mt-8 text-xs text-slate-soft">
        Demonstration data — this comparison is generated from sample products and sample parameters.
      </p>
    </div>
  );
}

async function DefaultComparison() {
  const products = await getProducts({ sort: "featured", limit: 8 });
  return <ProductGrid products={products} />;
}
