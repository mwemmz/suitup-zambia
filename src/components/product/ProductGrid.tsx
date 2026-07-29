"use client";

import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";
import { cn } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
  priority?: boolean;
  variant?: "dark" | "light";
}

export function ProductGrid({ products, title, subtitle, priority, variant = "dark" }: ProductGridProps) {
  return (
    <section className={cn(
      "py-16 md:py-24",
      variant === "light" ? "bg-ivory" : "bg-charcoal-950"
    )}>
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          {title && (
            <>
              <h2 className={cn(
                "text-2xl md:text-3xl lg:text-4xl font-medium tracking-[-0.02em]",
                variant === "light" ? "text-charcoal-950" : "text-white"
              )}>
                {title}
              </h2>
              {subtitle && (
                <p className={cn(
                  "mt-3 text-sm max-w-md",
                  variant === "light" ? "text-charcoal-500" : "text-charcoal-400"
                )}>{subtitle}</p>
              )}
            </>
          )}
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8 mt-12">
          {products.map((product, i) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
            >
              <ProductCard product={product} variant={variant} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
