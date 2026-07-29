"use client";

import Image from "next/image";
import Link from "next/link";
import { Badge } from "@/components/ui/Badge";
import { useWishlistStore } from "@/store/wishlist";
import { cn, blurPlaceholder } from "@/lib/utils";
import type { Product } from "@/lib/types";

interface ProductCardProps {
  product: Product;
  variant?: "dark" | "light";
}

export function ProductCard({ product, variant = "dark" }: ProductCardProps) {
  const { isInWishlist, toggleItem } = useWishlistStore();
  const isWishlisted = isInWishlist(product.id);
  const primaryImage = product.images[0] || { src: "/placeholder.svg", alt: product.name };

  return (
    <div className="group relative">
      <Link href={`/products/${product.slug}`} className="block">
        <div className={cn(
          "aspect-[3/4] relative overflow-hidden border",
          variant === "light" ? "bg-ivory-dark border-ivory-darker" : "bg-gradient-to-b from-charcoal-800 to-charcoal-900 border-charcoal-700"
        )}>
          <Image
            src={primaryImage.src}
            alt={primaryImage.alt}
            fill
            sizes="(max-width: 768px) 50vw, 25vw"
            className="object-cover transition-transform duration-700 group-hover:scale-105"
            placeholder="blur"
            blurDataURL={blurPlaceholder(600, 800)}
          />
          <div className={cn(
            "absolute inset-0 bg-gradient-to-t from-charcoal-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-300"
          )} />
          <div className="absolute bottom-0 left-0 right-0 p-4 translate-y-1 group-hover:translate-y-0 transition-transform duration-300 z-10">
            <p className="text-[10px] text-wine-300 tracking-[0.2em] uppercase font-mono">{product.category}</p>
          </div>
        </div>
      </Link>

      <button
        onClick={() => toggleItem(product)}
        className={cn(
          "absolute top-3 right-3 p-2 transition-colors duration-300 z-20",
          isWishlisted ? "text-wine-400" : "text-white/80 hover:text-white"
        )}
        aria-label={isWishlisted ? "Remove from wishlist" : "Add to wishlist"}
      >
        <svg width="16" height="16" viewBox="0 0 24 24" fill={isWishlisted ? "currentColor" : "none"} stroke="currentColor" strokeWidth="1.5">
          <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
        </svg>
      </button>

      <div className="mt-3 flex items-start justify-between gap-2">
        <div>
          <Link href={`/products/${product.slug}`} className={cn(
            "text-sm transition-colors duration-300",
            variant === "light" ? "text-charcoal-900 hover:text-wine-600" : "text-white hover:text-wine-300"
          )}>
            {product.name}
          </Link>
          <p className={cn(
            "text-xs mt-0.5 line-clamp-1",
            variant === "light" ? "text-charcoal-500" : "text-charcoal-400"
          )}>{product.fabric}</p>
        </div>
        <span className={cn(
          "text-sm shrink-0 font-mono",
          variant === "light" ? "text-charcoal-900" : "text-white"
        )}>K{product.price.toLocaleString()}</span>
      </div>

      <div className="absolute top-3 left-3 flex flex-col gap-2 z-20">
        {product.isNew && <Badge variant="new">New</Badge>}
        {product.compareAtPrice && <Badge variant="sale">Sale</Badge>}
      </div>
    </div>
  );
}
