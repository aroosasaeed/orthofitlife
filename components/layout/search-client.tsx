"use client";

import { useEffect, useState } from "react";
import { Search } from "lucide-react";
import { searchProducts } from "@/lib/api";
import type { Product } from "@/types/product";
import { ProductGrid } from "@/components/products/product-grid";
import { track } from "@/lib/analytics/track";

const SUGGESTIONS = ["office", "sleep", "back", "feet", "travel", "coccyx", "knee", "insole"];

export function SearchClient() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState<Product[]>([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      setDone(false);
      return;
    }
    const timer = setTimeout(() => {
      searchProducts(query).then((items) => {
        setResults(items);
        setDone(true);
        track("search", { query, surface: "page" });
      });
    }, 220);
    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-medium tracking-tight text-navy md:text-4xl">Search</h1>

      <div className="mx-auto mt-8 flex max-w-xl items-center gap-3 rounded-full border border-navy/15 bg-white px-5 shadow-soft focus-within:border-teal">
        <Search className="size-5 shrink-0 text-slate-soft" aria-hidden />
        <input
          autoFocus
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search products, needs and scenarios…"
          aria-label="Search products"
          className="h-13 flex-1 bg-transparent text-base text-navy outline-none placeholder:text-slate-soft/70"
        />
      </div>

      <div className="mx-auto mt-4 flex max-w-xl flex-wrap justify-center gap-2">
        {SUGGESTIONS.map((s) => (
          <button
            key={s}
            onClick={() => setQuery(s)}
            className="rounded-full border border-navy/12 px-4 py-1.5 text-xs capitalize text-navy transition-colors hover:border-teal hover:text-teal"
          >
            {s}
          </button>
        ))}
      </div>

      <div className="mt-10">
        {done && results.length === 0 ? (
          <p className="py-10 text-center text-sm text-slate-soft">
            No matches for “{query}”. Try “office”, “sleep” or “feet”.
          </p>
        ) : results.length > 0 ? (
          <>
            <p className="mb-6 text-sm text-slate-soft" aria-live="polite">
              {results.length} result{results.length === 1 ? "" : "s"} for “{query}”
            </p>
            <ProductGrid products={results} />
          </>
        ) : null}
      </div>
    </div>
  );
}
