"use client";

import type { ReactNode } from "react";
import { CartProvider } from "@/store/cart-context";
import { WishlistProvider } from "@/store/wishlist-context";
import { ToastProvider } from "@/store/toast-context";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ToastProvider>
      <WishlistProvider>
        <CartProvider>{children}</CartProvider>
      </WishlistProvider>
    </ToastProvider>
  );
}
