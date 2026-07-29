"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Trash2, Minus, Plus, ShoppingBag, ArrowLeft } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/Button";
import { formatPrice, blurPlaceholder } from "@/lib/utils";

export default function CartPage() {
  const { items, removeItem, updateQuantity, subtotal, clearCart } = useCartStore();

  if (items.length === 0) {
    return (
      <div className="container-luxury pt-32 pb-20">
        <div className="max-w-lg mx-auto text-center">
          <ShoppingBag size={48} className="mx-auto text-charcoal-500 mb-6" />
          <h1 className="text-2xl font-medium text-ivory mb-3">Your Cart is Empty</h1>
          <p className="text-sm text-charcoal-400 mb-8">Looks like you haven&apos;t added anything yet.</p>
          <Button variant="primary" size="md" as="a" href="/collections">
            Browse Collections
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container-luxury pt-24 md:pt-32 pb-20">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl md:text-3xl font-medium text-ivory tracking-[-0.02em]">Shopping Cart</h1>
        <button onClick={clearCart} className="text-xs text-charcoal-500 hover:text-wine-300 transition-colors tracking-[0.15em] uppercase">
          Clear All
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        <div className="lg:col-span-2 space-y-6">
          {items.map((item, i) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.05 }}
              className="flex gap-6 pb-6 border-b border-charcoal-800"
            >
              <Link href={`/products/${item.product.slug}`} className="relative w-24 h-32 shrink-0 bg-charcoal-800">
                <Image
                  src={item.product.images[0]?.src || "/placeholder.svg"}
                  alt={item.product.images[0]?.alt || item.product.name}
                  fill
                  sizes="96px"
                  className="object-cover"
                  placeholder="blur"
                  blurDataURL={blurPlaceholder(96, 128)}
                />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <Link href={`/products/${item.product.slug}`} className="text-sm font-medium text-ivory hover:text-wine-300 transition-colors">
                      {item.product.name}
                    </Link>
                    <p className="text-xs text-charcoal-400 mt-1">
                      {item.size && `${item.size} / `}{item.color}
                    </p>
                  </div>
                  <p className="text-sm font-medium text-ivory">{formatPrice(item.product.price)}</p>
                </div>
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center border border-charcoal-600">
                    <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="p-2 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors" aria-label="Decrease">
                      <Minus size={12} />
                    </button>
                    <span className="w-10 text-center text-xs font-medium text-ivory">{item.quantity}</span>
                    <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="p-2 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors" aria-label="Increase">
                      <Plus size={12} />
                    </button>
                  </div>
                  <button onClick={() => removeItem(item.id)} className="p-2 text-charcoal-500 hover:text-wine-300 transition-colors" aria-label="Remove item">
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="lg:sticky lg:top-28 lg:self-start">
          <div className="p-6 bg-charcoal-900 border border-charcoal-700 space-y-4">
            <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-ivory">Order Summary</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-charcoal-300">Subtotal</span>
                <span className="font-medium text-ivory">{formatPrice(subtotal())}</span>
              </div>
              <div className="flex justify-between text-charcoal-400">
                <span>Shipping</span>
                <span>Calculated at checkout</span>
              </div>
            </div>
            <div className="pt-4 border-t border-charcoal-700">
              <div className="flex justify-between text-base font-medium text-ivory">
                <span>Total</span>
                <span>{formatPrice(subtotal())}</span>
              </div>
            </div>
            <Button variant="primary" size="md" className="w-full" as="a" href="/checkout">
              Proceed to Checkout
            </Button>
            <Link href="/collections" className="flex items-center justify-center gap-2 text-xs text-charcoal-500 hover:text-ivory transition-colors tracking-[0.15em] uppercase py-2">
              <ArrowLeft size={14} /> Continue Shopping
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
