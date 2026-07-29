"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { Search, X } from "lucide-react";
import { useSearchStore } from "@/store/search";
import { useDebounce } from "@/hooks/useDebounce";
import { PRODUCTS } from "@/lib/constants";
import { formatPrice } from "@/lib/utils";

export function SearchModal() {
  const { isOpen, closeSearch } = useSearchStore();
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 300);
  const [results, setResults] = useState<{ id: string; name: string; price: number; slug: string }[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setQuery("");
      setResults([]);
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }
    const q = debouncedQuery.toLowerCase();
    const filtered = PRODUCTS
      .filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          (p.fabric?.toLowerCase() || '').includes(q) ||
          p.category.toLowerCase().includes(q)
      )
      .slice(0, 8)
      .map((p) => ({ id: p.id, name: p.name, price: p.price, slug: p.slug }));
    setResults(filtered);
  }, [debouncedQuery]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === "Escape") closeSearch();
    },
    [closeSearch]
  );

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/70 z-[60]"
            onClick={closeSearch}
            aria-hidden="true"
          />

          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-x-0 top-0 z-[70]"
            role="dialog"
            aria-modal="true"
            aria-label="Search products"
          >
            <div className="bg-charcoal-950 border-b border-charcoal-800">
              <div className="container-luxury">
                <div className="flex items-center gap-4 h-16">
                  <Search size={18} className="text-charcoal-400 shrink-0" />
                  <input
                    ref={inputRef}
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    onKeyDown={handleKeyDown}
                    placeholder="Search suits, fabrics, collections..."
                    className="flex-1 bg-transparent text-ivory text-sm outline-none placeholder:text-charcoal-500"
                    aria-label="Search query"
                  />
                  <button
                    onClick={closeSearch}
                    className="p-2 text-charcoal-400 hover:text-ivory transition-colors"
                    aria-label="Close search"
                  >
                    <X size={18} />
                  </button>
                </div>
              </div>
            </div>

            {results.length > 0 && (
              <div className="bg-charcoal-950 border-b border-charcoal-800 shadow-2xl">
                <div className="container-luxury py-4 space-y-1">
                  {results.map((result) => (
                    <Link
                      key={result.id}
                      href={`/products/${result.slug}`}
                      onClick={closeSearch}
                      className="flex items-center justify-between px-4 py-3 rounded hover:bg-charcoal-800 transition-colors group"
                    >
                      <span className="text-sm text-charcoal-200 group-hover:text-ivory transition-colors">
                        {result.name}
                      </span>
                      <span className="text-sm text-charcoal-400">{formatPrice(result.price)}</span>
                    </Link>
                  ))}
                </div>
              </div>
            )}

            {debouncedQuery && results.length === 0 && (
              <div className="bg-charcoal-950 border-b border-charcoal-800 shadow-2xl">
                <div className="container-luxury py-8 text-center">
                  <p className="text-sm text-charcoal-500">No results found for &ldquo;{debouncedQuery}&rdquo;</p>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
