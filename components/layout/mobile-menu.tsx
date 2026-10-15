"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "motion/react";
import { Heart, ShoppingBag, X } from "lucide-react";
import { mainNav } from "@/lib/constants/navigation";
import { Logo } from "@/components/layout/logo";
import { EASE_EXPO } from "@/components/animations/variants";

interface Props {
  open: boolean;
  onClose: () => void;
}

export function MobileMenu({ open, onClose }: Props) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="fixed inset-0 z-60 lg:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          role="dialog"
          aria-modal="true"
          aria-label="Menu"
        >
          <motion.div
            className="absolute inset-0 bg-cream"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.45, ease: EASE_EXPO }}
          >
            <div className="texture-grain flex h-full flex-col">
              <div className="flex items-center justify-between px-5 pt-5 pb-2">
                <Logo />
                <button
                  onClick={onClose}
                  className="flex size-10 items-center justify-center rounded-full text-navy hover:bg-navy/5"
                  aria-label="Close menu"
                >
                  <X className="size-5" aria-hidden />
                </button>
              </div>

              <nav className="mt-6 flex flex-1 flex-col px-5" aria-label="Mobile">
                {mainNav.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, x: 24 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + i * 0.06, duration: 0.5, ease: EASE_EXPO }}
                  >
                    <Link
                      href={link.href}
                      onClick={onClose}
                      className="group block border-b border-navy/8 py-4"
                    >
                      <span className="font-display text-2xl font-medium text-navy transition-colors group-hover:text-teal">
                        {link.label}
                      </span>
                      {link.description && (
                        <p className="mt-0.5 text-sm text-slate-soft">{link.description}</p>
                      )}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="flex gap-3 px-5 pb-10">
                <Link
                  href="/wishlist"
                  onClick={onClose}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full border border-navy/15 py-3 text-sm font-medium"
                >
                  <Heart className="size-4" aria-hidden /> Wishlist
                </Link>
                <Link
                  href="/cart"
                  onClick={onClose}
                  className="flex flex-1 items-center justify-center gap-2 rounded-full bg-navy py-3 text-sm font-medium text-white"
                >
                  <ShoppingBag className="size-4" aria-hidden /> Cart
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
