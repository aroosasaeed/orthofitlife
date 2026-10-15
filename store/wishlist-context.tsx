"use client";

import { createContext, useCallback, useContext, useEffect, useMemo, useState, type ReactNode } from "react";
import { track } from "@/lib/analytics/track";
import { useToast } from "@/store/toast-context";

interface WishlistContextValue {
  ids: string[];
  hydrated: boolean;
  has: (productId: string) => boolean;
  toggle: (productId: string) => void;
  remove: (productId: string) => void;
}

const WishlistContext = createContext<WishlistContextValue | null>(null);
const STORAGE_KEY = "ofl-wishlist-v1";

export function WishlistProvider({ children }: { children: ReactNode }) {
  const [ids, setIds] = useState<string[]>([]);
  const [hydrated, setHydrated] = useState(false);
  const toast = useToast();

  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      setIds(raw ? (JSON.parse(raw) as string[]) : []);
    } catch {
      setIds([]);
    }
    setHydrated(true);
  }, []);

  useEffect(() => {
    if (hydrated) window.localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
  }, [ids, hydrated]);

  const toggle = useCallback(
    (productId: string) => {
      setIds((prev) => {
        const exists = prev.includes(productId);
        const next = exists ? prev.filter((id) => id !== productId) : [...prev, productId];
        if (exists) {
          track("wishlist_remove", { productId });
        } else {
          track("wishlist_add", { productId });
          toast("Saved to wishlist");
        }
        return next;
      });
    },
    [toast],
  );

  const remove = useCallback((productId: string) => {
    setIds((prev) => prev.filter((id) => id !== productId));
    track("wishlist_remove", { productId });
  }, []);

  const value = useMemo<WishlistContextValue>(
    () => ({
      ids,
      hydrated,
      has: (productId: string) => ids.includes(productId),
      toggle,
      remove,
    }),
    [ids, hydrated, toggle, remove],
  );

  return <WishlistContext.Provider value={value}>{children}</WishlistContext.Provider>;
}

export function useWishlist(): WishlistContextValue {
  const ctx = useContext(WishlistContext);
  if (!ctx) throw new Error("useWishlist must be used within WishlistProvider");
  return ctx;
}
