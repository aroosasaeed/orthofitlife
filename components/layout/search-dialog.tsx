"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Search, ArrowRight, X } from "lucide-react";
import { searchProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import { formatPrice } from "@/lib/utils/format";
import { EASE_EXPO } from "@/components/animations/variants";
import { track } from "@/lib/analytics/track";

const SUGGESTIONS = ["office", "sleep", "back", "feet", "travel", "coccyx"];

export function SearchTrigger({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      aria-label="Search products"
      className="hidden size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 hover:text-teal md:flex"
    >
      <Search className="size-4.5" aria-hidden />
    </button>
  );
}

export function SearchDialog({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (open) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [open]);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }
    const timer = setTimeout(() => {
      searchProducts(query).then((items) => setResults(items));
      track("search", { query });
    }, 200);
    return () => clearTimeout(timer);
  }, [query]);

  const hasQuery = query.trim().length > 0;

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-70"
          role="dialog"
          aria-modal="true"
          aria-label="Search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <div className="absolute inset-0 bg-navy/40 backdrop-blur-sm" onClick={onClose} />
          <motion.div
            className="absolute inset-x-4 top-4 mx-auto max-w-2xl md:top-24"
            initial={{ y: -24, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35, ease: EASE_EXPO }}
          >
            <div className="overflow-hidden rounded-2xl bg-white shadow-lift">
              <div className="flex items-center gap-3 border-b border-navy/10 px-5">
                <Search className="size-5 shrink-0 text-slate-soft" aria-hidden />
                <input
                  ref={inputRef}
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  onKeyDown={(e) => e.key === "Escape" && onClose()}
                  type="search"
                  placeholder="Search products, needs and everyday scenarios…"
                  className="h-14 flex-1 bg-transparent text-base text-navy outline-none placeholder:text-slate-soft/70"
                  aria-label="Search input"
                />
                <button onClick={onClose} className="flex size-8 items-center justify-center rounded-full text-slate-soft hover:bg-navy/5" aria-label="Close search">
                  <X className="size-4" aria-hidden />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-2">
                {!hasQuery && (
                  <div className="px-3 py-4">
                    <p className="mb-3 text-xs font-semibold tracking-wide text-slate-soft uppercase">Popular searches</p>
                    <div className="flex flex-wrap gap-2">
                      {SUGGESTIONS.map((s) => (
                        <button
                          key={s}
                          onClick={() => setQuery(s)}
                          className="rounded-full border border-navy/12 px-4 py-2 text-sm capitalize text-navy transition-colors hover:border-teal hover:text-teal"
                        >
                          {s}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {hasQuery && results.length === 0 && (
                  <p className="px-4 py-8 text-center text-sm text-slate-soft">
                    No matches for “{query}”. Try “office”, “sleep” or “back”.
                  </p>
                )}

                {results.map((product, i) => (
                  <motion.div
                    key={product.id}
                    initial={{ opacity: 0, y: 6 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.03 }}
                  >
                    <Link
                      href={`/products/${product.slug}`}
                      onClick={onClose}
                      className="group flex items-center gap-4 rounded-xl px-3 py-3 transition-colors hover:bg-beige/60"
                    >
                      <span className="flex size-12 shrink-0 items-center justify-center rounded-lg bg-beige text-xs font-semibold text-teal">
                        {product.name.slice(0, 2)}
                      </span>
                      <span className="min-w-0 flex-1">
                        <span className="block truncate text-sm font-medium text-navy">{product.name}</span>
                        <span className="text-xs text-slate-soft capitalize">{product.category.replace(/-/g, " ")}</span>
                      </span>
                      <span className="text-sm font-semibold text-navy">{formatPrice(product.price)}</span>
                      <ArrowRight className="size-4 text-navy/25 transition-all group-hover:translate-x-0.5 group-hover:text-teal" aria-hidden />
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
