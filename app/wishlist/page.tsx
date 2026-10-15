"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Heart, Trash2, ShoppingBag, ArrowRight } from "lucide-react";
import { useWishlist } from "@/store/wishlist-context";
import { useCart } from "@/store/cart-context";
import { productRepo } from "@/lib/api/repositories";
import type { Product } from "@/types/product";
import { useEffect, useState } from "react";
import { ProductVisual } from "@/components/visuals/product-visual";
import { formatPrice } from "@/lib/utils/format";
import { Rating } from "@/components/ui/rating";
import { EASE_EXPO } from "@/components/animations/variants";
import { ButtonLink } from "@/components/ui/button";

export default function WishlistPage() {
  const wishlist = useWishlist();
  const cart = useCart();
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!wishlist.hydrated) return;
    let active = true;
    if (wishlist.ids.length === 0) {
      setProducts([]);
      setLoading(false);
    } else {
      productRepo.getProducts({ ids: wishlist.ids }).then((ps) => {
        if (active) {
          setProducts(ps);
          setLoading(false);
        }
      });
    }
    return () => {
      active = false;
    };
  }, [wishlist.ids, wishlist.hydrated]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">Wishlist</h1>
      <p className="mt-2 text-sm text-slate-soft">Saved products, kept in this browser (no account needed in the prototype).</p>

      {loading ? (
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {[0, 1, 2].map((i) => (
            <div key={i} className="h-32 animate-pulse rounded-xl bg-navy/5" aria-hidden />
          ))}
        </div>
      ) : products.length === 0 ? (
        <div className="mt-10 rounded-2xl border border-dashed border-navy/15 py-20 text-center">
          <Heart className="mx-auto size-10 text-sage" aria-hidden />
          <p className="mt-4 font-display text-xl text-navy">No saved products yet</p>
          <p className="mt-2 text-sm text-slate-soft">Tap the heart on any product to keep it here.</p>
          <ButtonLink href="/shop" arrow className="mt-6">
            Explore products
          </ButtonLink>
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-navy/8 rounded-2xl border border-navy/8 bg-white">
          <AnimatePresence initial={false}>
            {products.map((product) => (
              <motion.li
                key={product.id}
                layout
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -40 }}
                transition={{ duration: 0.3, ease: EASE_EXPO }}
                className="flex flex-wrap items-center gap-4 p-4 sm:flex-nowrap sm:p-5"
              >
                <Link href={`/products/${product.slug}`} className="size-20 shrink-0 overflow-hidden rounded-xl bg-beige">
                  <ProductVisual kind={product.visual} />
                </Link>
                <div className="min-w-0 flex-1">
                  <Link href={`/products/${product.slug}`} className="font-medium text-navy hover:text-teal">
                    {product.name}
                  </Link>
                  <Rating rating={product.rating} count={product.reviewCount} className="mt-1" />
                  <p className="mt-1 font-semibold text-navy">{formatPrice(product.price)}</p>
                </div>
                <div className="flex items-center gap-2">
                  <button
                    onClick={() => cart.addItem(product.id)}
                    className="inline-flex items-center gap-1.5 rounded-full bg-navy px-4 py-2 text-xs font-semibold text-white transition-colors hover:bg-teal"
                  >
                    <ShoppingBag className="size-3.5" aria-hidden /> Move to cart
                  </button>
                  <button
                    onClick={() => wishlist.remove(product.id)}
                    aria-label={`Remove ${product.name} from wishlist`}
                    className="flex size-9 items-center justify-center rounded-full text-slate-soft transition-colors hover:bg-navy/5 hover:text-red-700"
                  >
                    <Trash2 className="size-4" aria-hidden />
                  </button>
                </div>
              </motion.li>
            ))}
          </AnimatePresence>
        </ul>
      )}

      {products.length > 0 && (
        <p className="mt-4 text-xs text-slate-soft">
          Tip: prices shown are sample-data placeholders until launch. <Link href="/shop" className="text-teal hover:underline">Browse everything <ArrowRight className="inline size-3" aria-hidden /></Link>
        </p>
      )}
    </div>
  );
}
