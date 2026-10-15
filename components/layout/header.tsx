"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion, useMotionValueEvent, useScroll } from "motion/react";
import { Heart, ShoppingBag, Menu } from "lucide-react";
import { mainNav } from "@/lib/constants/navigation";
import { cn } from "@/lib/utils/cn";
import { Logo } from "@/components/layout/logo";
import { MobileMenu } from "@/components/layout/mobile-menu";
import { SearchDialog, SearchTrigger } from "@/components/layout/search-dialog";
import { useCart } from "@/store/cart-context";
import { useWishlist } from "@/store/wishlist-context";

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = usePathname();
  const cart = useCart();
  const wishlist = useWishlist();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  useEffect(() => setMobileOpen(false), [pathname]);

  // Lock scroll while menus/dialogs are open
  useEffect(() => {
    document.documentElement.style.overflow = mobileOpen || searchOpen ? "hidden" : "";
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [mobileOpen, searchOpen]);

  // ⌘K / Ctrl+K opens search
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        setSearchOpen(true);
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  return (
    <>
      <motion.header
        initial={false}
        className="fixed inset-x-0 top-0 z-50"
        aria-label="Main navigation"
      >
        <motion.div
          initial={false}
          animate={{
            backgroundColor: scrolled ? "rgba(247,246,242,0.82)" : "rgba(247,246,242,0)",
            backdropFilter: scrolled ? "blur(14px) saturate(1.4)" : "blur(0px)",
            paddingTop: scrolled ? 10 : 18,
            paddingBottom: scrolled ? 10 : 18,
          }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className={cn(
            "transition-[box-shadow] duration-500",
            scrolled && "shadow-[0_1px_0_rgba(23,33,43,0.08),0_8px_30px_rgba(23,33,43,0.06)]",
          )}
        >
          <div className="mx-auto flex max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-10">
              <Logo />
              <nav className="hidden items-center gap-7 lg:flex" aria-label="Primary">
                {mainNav.map((link) => {
                  const active = pathname === link.href || pathname.startsWith(`${link.href}/`);
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      className={cn(
                        "relative text-sm font-medium transition-colors hover:text-teal",
                        active ? "text-teal" : "text-navy/85",
                      )}
                    >
                      {link.label}
                      {active && (
                        <motion.span
                          layoutId="nav-underline"
                          className="absolute -bottom-[7px] left-0 right-0 h-px bg-teal"
                        />
                      )}
                    </Link>
                  );
                })}
              </nav>
            </div>

            <div className="flex items-center gap-1.5">
              <SearchTrigger onClick={() => setSearchOpen(true)} />
              <IconLink href="/wishlist" label="Wishlist">
                <Heart className="size-4.5" aria-hidden />
                {wishlist.ids.length > 0 && <Bubble value={wishlist.ids.length} />}
              </IconLink>
              <IconLink href="/cart" label="Cart">
                <ShoppingBag className="size-4.5" aria-hidden />
                <AnimatePresence>
                  {cart.itemCount > 0 && <Bubble value={cart.itemCount} />}
                </AnimatePresence>
              </IconLink>
              <button
                onClick={() => setMobileOpen(true)}
                className="btn-ghost-ic flex size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 lg:hidden"
                aria-label="Open menu"
                aria-expanded={mobileOpen}
              >
                <Menu className="size-5" aria-hidden />
              </button>
            </div>
          </div>
        </motion.div>
      </motion.header>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
      <SearchDialog open={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

function IconLink({ href, label, children }: { href: string; label: string; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      aria-label={label}
      className="relative flex size-10 items-center justify-center rounded-full text-navy transition-colors hover:bg-navy/5 hover:text-teal"
    >
      {children}
    </Link>
  );
}

function Bubble({ value }: { value: number }) {
  return (
    <motion.span
      key={value}
      initial={{ scale: 0.5, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0.5, opacity: 0 }}
      transition={{ type: "spring", stiffness: 500, damping: 22 }}
      className="absolute -top-0.5 -right-0.5 flex size-4.5 items-center justify-center rounded-full bg-teal text-[10px] font-bold text-white"
    >
      {value}
    </motion.span>
  );
}
