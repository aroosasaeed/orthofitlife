import type { Metadata } from "next";
import { Breadcrumbs } from "@/components/ui/breadcrumbs";
import { ShopClient } from "@/components/products/shop-client";
import { getProducts } from "@/lib/api";
import { categories } from "@/lib/data/categories";
import { personas } from "@/lib/data/personas";
import { needs } from "@/lib/data/needs";
import { SEO_KEYWORDS } from "@/lib/constants/site";

export const metadata: Metadata = {
  title: "Shop Orthopedic & Ergonomic Products in Pakistan",
  description:
    "Browse neck pillows, lumbar cushions, coccyx cushions, knee pillows, orthopedic insoles and ergonomic supports — with honest product information in PKR.",
  keywords: SEO_KEYWORDS,
  alternates: { canonical: "/shop" },
};

export default async function ShopPage() {
  const products = await getProducts({ sort: "featured" });

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <Breadcrumbs items={[{ label: "Home", href: "/" }, { label: "Shop" }]} />
      <h1 className="mt-4 font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">
        Shop everyday support
      </h1>
      <p className="mt-3 max-w-2xl text-slate-soft">
        Twenty-one carefully chosen products across nine categories. Every listing states what
        each product is designed to do — and what it isn&apos;t.
      </p>
      <ShopClient
        products={products}
        categories={categories}
        personas={personas}
        needs={needs}
      />
    </div>
  );
}
