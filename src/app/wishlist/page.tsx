"use client";

import { motion } from "framer-motion";
import { Heart } from "lucide-react";
import { useWishlistStore } from "@/store/wishlist";
import { Button } from "@/components/ui/Button";
import { ProductCard } from "@/components/product/ProductCard";

export default function WishlistPage() {
  const { items } = useWishlistStore();

  return (
    <div className="container-luxury pt-24 md:pt-32 pb-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="flex items-center gap-3 mb-8">
          <Heart size={20} className="text-wine-400" />
          <h1 className="text-2xl md:text-3xl font-medium text-ivory tracking-[-0.02em]">
            Wishlist ({items.length})
          </h1>
        </div>

        {items.length === 0 ? (
          <div className="text-center py-20">
            <Heart size={48} className="mx-auto text-charcoal-500 mb-6" />
            <h2 className="text-xl font-medium text-ivory mb-3">Your Wishlist is Empty</h2>
            <p className="text-sm text-charcoal-400 mb-8">Save your favorite pieces for later.</p>
            <Button variant="primary" size="md" as="a" href="/collections">
              Discover Pieces
            </Button>
          </div>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 md:gap-8">
            {items.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </motion.div>
    </div>
  );
}
