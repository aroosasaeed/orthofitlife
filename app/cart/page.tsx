import type { Metadata } from "next";
import { PageCart } from "@/components/cart/cart-view";

export const metadata: Metadata = {
  title: "Your Cart",
  description: "Review your selected orthopedic and ergonomic products before checkout.",
  robots: { index: false },
  alternates: { canonical: "/cart" },
};

export default async function CartRoute() {
  const { getProducts } = await import("@/lib/api");
  const recommendations = await getProducts({ sort: "rating", limit: 4 });
  return <PageCart recommendations={recommendations} />;
}
