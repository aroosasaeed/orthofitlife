"use client";

import { useCallback, useEffect, useState } from "react";
import { formatPrice } from "@/lib/utils/format";
import { track } from "@/lib/analytics/track";

/**
 * Compare-tray state shared between the shop page and the compare page.
 * Persists to localStorage so the compare page can be opened directly.
 */
export function useCompareSelection() {
  const [ids, setIds] = useState<string[]>([]);

  useEffect(() => {
    try {
      setIds(JSON.parse(window.localStorage.getItem("ofl-compare-v1") ?? "[]"));
    } catch {
      setIds([]);
    }
  }, []);

  useEffect(() => {
    window.localStorage.setItem("ofl-compare-v1", JSON.stringify(ids));
  }, [ids]);

  const toggle = useCallback((productId: string) => {
    setIds((prev) => {
      if (prev.includes(productId)) return prev.filter((id) => id !== productId);
      if (prev.length >= 3) return prev;
      track("recommendation_click", { productId, context: "compare-toggle" });
      return [...prev, productId];
    });
  }, []);

  return { ids, toggle, clear: () => setIds([]) };
}

export function demoNote() {
  return "Demonstration data — sample comparison built from sample products.";
}

export { formatPrice };
