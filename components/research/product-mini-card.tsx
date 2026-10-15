"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowRight, Plus } from "lucide-react";
import { productRepo } from "@/lib/api/repositories";
import type { Product } from "@/types/product";
import { ProductVisual } from "@/components/visuals/product-visual";
import { formatPrice } from "@/lib/utils/format";
import { Rating } from "@/components/ui/rating";
import { useCart } from "@/store/cart-context";
import { useWishlist } from "@/store/wishlist-context";
import { track } from "@/lib/analytics/track";

/** Server-fetch-friendly wrapper so article pages can render this card. */
export function ProductMiniCard({ productId }: { productId: string }) {
  const [product, setProduct] = useState<Product | null>(null);
  useEffect(() => {
    let active = true;
    productRepo.getProductById(productId).then((p) => {
      if (active) setProduct(p);
    });
    return () => {
      active = false;
    };
  }, [productId]);

  if (!product) {
    return (
      <div className="flex h-[104px] animate-pulse items-center gap-4 rounded-xl border border-navy/8 bg-white p-4" aria-hidden>
        <div className="size-16 rounded-lg bg-navy/5" />
        <div className="flex-1 space-y-2">
          <div className="h-3 w-3/4 rounded bg-navy/5" />
          <div className="h-3 w-1/2 rounded bg-navy/5" />
        </div>
      </div>
    );
  }

  return <ProductMiniInner product={product} />;
}

function ProductMiniInner({ product }: { product: Product }) {
  const cart = useCart();
  const wishlist = useWishlist();
  const liked = wishlist.has(product.id);

  return (
    <div className="group flex h-full items-center gap-4 rounded-xl border border-navy/8 bg-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-soft">
      <Link href={`/products/${product.slug}`} className="size-16 shrink-0 overflow-hidden rounded-lg bg-beige" onClick={() => track("recommendation_click", { productId: product.id, context: "article" })}>
        <ProductVisual kind={product.visual} className="scale-125" />
      </Link>
      <div className="min-w-0 flex-1">
        <Link href={`/products/${product.slug}`} className="block truncate text-sm font-medium text-navy transition-colors hover:text-teal">
          {product.name}
        </Link>
        <Rating rating={product.rating} showCount={false} className="mt-1 scale-90 origin-left" />
        <p className="mt-1 text-xs font-semibold text-navy">{formatPrice(product.price)}</p>
      </div>
      <div className="flex flex-col gap-1.5">
        <button
          onClick={() => {
            cart.addItem(product.id);
            track("recommendation_click", { productId: product.id, context: "article-add" });
          }}
          aria-label={`Add ${product.name} to cart`}
          className="flex size-8 items-center justify-center rounded-full bg-navy text-white transition-colors hover:bg-teal"
        >
          <Plus className="size-3.5" aria-hidden />
        </button>
        <button
          onClick={() => wishlist.toggle(product.id)}
          aria-label={liked ? "Remove from wishlist" : "Add to wishlist"}
          aria-pressed={liked}
          className="flex size-8 items-center justify-center rounded-full border border-navy/15 text-xs text-slate-soft transition-colors hover:border-teal hover:text-teal"
        >
          {liked ? "♥" : "♡"}
        </button>
      </div>
      <ArrowRight className="ml-1 size-4 text-navy/20 transition-all group-hover:translate-x-0.5 group-hover:text-teal max-md:hidden" aria-hidden />
    </div>
  );
}
