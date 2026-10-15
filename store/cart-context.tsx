"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useReducer,
  useState,
  type ReactNode,
} from "react";
import type { CartItem, Product } from "@/types/product";
import { productRepo } from "@/lib/api/repositories";
import { promoCodes, commerceConfig } from "@/lib/constants/site";
import { track } from "@/lib/analytics/track";
import { useToast } from "@/store/toast-context";

interface CartState {
  items: CartItem[];
  hydrated: boolean;
}

type CartAction =
  | { type: "hydrate"; items: CartItem[] }
  | { type: "add"; productId: string; quantity?: number }
  | { type: "remove"; productId: string }
  | { type: "setQuantity"; productId: string; quantity: number }
  | { type: "clear" };

function reducer(state: CartState, action: CartAction): CartState {
  switch (action.type) {
    case "hydrate":
      return { items: action.items, hydrated: true };
    case "add": {
      const existing = state.ites.find((i) => i.productId === action.productId);
      const qty = action.quantity ?? 1;
      if (existing) {
        return {
          ...state,
          items: state.items.map((i) =>
            i.productId === action.productId ? { ...i, quantity: Math.min(9, i.quantity + qty) } : i,
          ),
        };
      }
      return { ...state, items: [...state.items, { productId: action.productId, quantity: Math.min(9, qty) }] };
    }
    case "remove":
      return { ...state, items: state.items.filter((i) => i.productId !== action.productId) };
    case "setQuantity":
      return {
        ...state,
        items: action.quantity <= 0
          ? state.items.filter((i) => i.productId !== action.productId)
          : state.items.map((i) => (i.productId === action.productId ? { ...i, quantity: action.quantity } : i)),
      };
    case "clear":
      return { ...state, items: [] };
    default:
      return state;
  }
}

export interface PromoState {
  code: string | null;
  percent: number;
  label: string;
}

interface CartContextValue {
  lines: Array<{ product: Product; quantity: number }>;
  itemCount: number;
  subtotal: number;
  discount: number;
  shipping: number;
  total: number;
  freeShippingRemaining: number;
  promo: PromoState | null;
  hydrated: boolean;
  addItem: (productId: string, quantity?: number) => void;
  removeItem: (productId: string) => void;
  setQuantity: (productId: string, quantity: number) => void;
  clear: () => void;
  applyPromo: (code: string) => boolean;
}

const CartContext = createContext<CartContextValue | null>(null);
const STORAGE_KEY = "ofl-cart-v1";

export function CartProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(reducer, { items: [], hydrated: false });
  const [promo, setPromo] = useState<PromoState | null>(null);
  const [productMap, setProductMap] = useState<Map<string, Product>>(new Map());
  const toast = useToast();

  // Hydrate from localStorage
  useEffect(() => {
    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      const items: CartItem[] = raw ? JSON.parse(raw) : [];
      dispatch({ type: "hydrate", items });
    } catch {
      dispatch({ type: "hydrate", items: [] });
    }
  }, []);

  // Persist
  useEffect(() => {
    if (!state.hydrated) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state.items));
  }, [state.items, state.hydrated]);

  // Resolve product details for current items (repo call isolates the data layer)
  useEffect(() => {
    if (!state.hydrated) return;
    let active = true;
    productRepo.getProducts({ ids: state.items.map((i) => i.productId) }).then((ps) => {
      if (!active) return;
      setProductMap(new Map(ps.map((p) => [p.id, p])));
    });
    return () => {
      active = false;
    };
  }, [state.items, state.hydrated]);

  const addItem = useCallback(
    (productId: string, quantity = 1) => {
      dispatch({ type: "add", productId, quantity });
      track("add_to_cart", { productId, quantity });
      toast("Added to cart");
    },
    [toast],
  );

  const removeItem = useCallback((productId: string) => {
    dispatch({ type: "remove", productId });
    track("remove_from_cart", { productId });
  }, []);

  const setQuantity = useCallback((productId: string, quantity: number) => {
    dispatch({ type: "setQuantity", productId, quantity });
  }, []);

  const clear = useCallback(() => dispatch({ type: "clear" }), []);

  const applyPromo = useCallback((code: string): boolean => {
    const key = code.trim().toUpperCase();
    const found = promoCodes[key];
    if (!found) {
      setPromo(null);
      return false;
    }
    setPromo({ code: key, percent: found.percent, label: found.label });
    return true;
  }, []);

  const value = useMemo<CartContextValue>(() => {
    const lines = state.items.flatMap((item) => {
      const product = productMap.get(item.productId);
      return product ? [{ product, quantity: item.quantity }] : [];
    });
    const subtotal = lines.reduce((sum, l) => sum + l.product.price * l.quantity, 0);
    const discount = promo ? Math.round((subtotal * promo.percent) / 100) : 0;
    const afterDiscount = subtotal - discount;
    const shipping = afterDiscount === 0 ? 0 : afterDiscount >= commerceConfig.freeShippingThreshold ? 0 : commerceConfig.shippingFlatRate;
    return {
      lines,
      itemCount: lines.reduce((sum, l) => sum + l.quantity, 0),
      subtotal,
      discount,
      shipping,
      total: afterDiscount + shipping,
      freeShippingRemaining: Math.max(0, commerceConfig.freeShippingThreshold - afterDiscount),
      promo,
      hydrated: state.hydrated,
      addItem,
      removeItem,
      setQuantity,
      clear,
      applyPromo,
    };
  }, [state.items, state.hydrated, productMap, promo, addItem, removeItem, setQuantity, clear, applyPromo]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart(): CartContextValue {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
