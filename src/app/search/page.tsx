"use client";

import { useState, useEffect } from "react";
import { Search as SearchIcon } from "lucide-react";
import { ProductCard } from "@/components/product/ProductCard";
import { useDebounce } from "@/hooks/useDebounce";
import { PRODUCTS } from "@/lib/constants";
import type { Product } from "@/lib/types";

export default function SearchPage() {
  const [query, setQuery] = useState("");
  const debouncedQuery = useDebounce(query, 200);
  const [results, setResults] = useState<Product[]>([]);

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setResults([]);
      return;
    }
    const q = debouncedQuery.toLowerCase();
    setResults(
      PRODUCTS.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.category.toLowerCase().includes(q) ||
          p.tags.some((t) => t.includes(q))
      )
    );
  }, [debouncedQuery]);

  return (
    <div className="container-luxury pt-24 md:pt-32 pb-20">
      <div className="max-w-2xl mx-auto">
        <div className="relative mb-8">
          <SearchIcon size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-charcoal-400" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search suits, shirts, accessories..."
            className="w-full pl-12 pr-4 py-4 border border-charcoal-600 bg-charcoal-900 text-ivory text-sm focus:outline-none focus:border-wine-400 transition-colors"
            aria-label="Search products"
          />
        </div>

        {results.length > 0 && (
          <p className="text-xs text-charcoal-400 mb-6">{results.length} result{results.length !== 1 ? "s" : ""}</p>
        )}

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
          {results.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {query && results.length === 0 && (
          <div className="text-center py-12">
            <p className="text-sm text-charcoal-400">No results found for &ldquo;{query}&rdquo;</p>
          </div>
        )}

        {!query && (
          <div>
            <p className="text-[10px] tracking-[0.2em] uppercase text-wine-400 font-mono mb-4">Quick Links</p>
            <div className="flex flex-wrap gap-3">
              {["Suits", "Jackets", "Shirts", "Accessories", "New Arrivals", "Best Sellers"].map((term) => (
                <button
                  key={term}
                  onClick={() => setQuery(term)}
                  className="px-4 py-2 text-[10px] tracking-[0.15em] uppercase border border-charcoal-600 text-charcoal-300 hover:border-ivory hover:text-ivory transition-colors"
                >
                  {term}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
