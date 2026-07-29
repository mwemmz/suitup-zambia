"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { useSearchStore } from "@/store/search";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const cartCount = useCartStore((s) => s.items.reduce((a, b) => a + b.quantity, 0));
  const wishlistCount = useWishlistStore((s) => s.items.length);
  const openSearch = useSearchStore((s) => s.openSearch);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMobileOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 transition-all duration-500",
        isScrolled
          ? "bg-charcoal-950/90 backdrop-blur-xl border-b border-charcoal-800"
          : "bg-transparent"
      )}
    >
      <div className="container-luxury">
        <nav className="flex items-center justify-between h-16 md:h-20" aria-label="Main navigation">
          <Link
            href="/"
            className="text-ivory text-lg tracking-[0.15em] uppercase font-medium"
          >
            SuitUp
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[11px] text-charcoal-200 hover:text-ivory uppercase tracking-[0.2em] transition-colors duration-300"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-5">
            <button
              onClick={openSearch}
              className="text-charcoal-300 hover:text-ivory transition-colors duration-300"
              aria-label="Search"
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
            </button>

            <Link
              href="/wishlist"
              className="relative text-charcoal-300 hover:text-ivory transition-colors duration-300"
              aria-label={`Wishlist (${wishlistCount} items)`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
              </svg>
              {wishlistCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-wine-500 text-ivory text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {wishlistCount}
                </span>
              )}
            </Link>

            <button
              onClick={() => useCartStore.getState().openCart()}
              className="relative text-charcoal-300 hover:text-ivory transition-colors duration-300"
              aria-label={`Cart (${cartCount} items)`}
            >
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z" />
                <path d="M3 6h18" />
                <path d="M16 10a4 4 0 0 1-8 0" />
              </svg>
              {cartCount > 0 && (
                <span className="absolute -top-2 -right-2 bg-wine-500 text-ivory text-[9px] w-4 h-4 rounded-full flex items-center justify-center font-mono">
                  {cartCount}
                </span>
              )}
            </button>

            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="md:hidden text-charcoal-300 hover:text-ivory transition-colors duration-300 ml-2"
              aria-label={isMobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={isMobileOpen}
            >
              <div className="w-5 h-4 relative flex flex-col justify-between">
                <span className={cn("block h-px bg-current transition-all duration-300", isMobileOpen && "rotate-45 translate-y-[7px]")} />
                <span className={cn("block h-px bg-current transition-all duration-300", isMobileOpen && "opacity-0")} />
                <span className={cn("block h-px bg-current transition-all duration-300", isMobileOpen && "-rotate-45 -translate-y-[7px]")} />
              </div>
            </button>
          </div>
        </nav>
      </div>

      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden bg-charcoal-950 border-t border-charcoal-800 overflow-hidden"
          >
            <div className="container-luxury py-8 space-y-6">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block text-ivory text-sm tracking-[0.15em] uppercase transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
