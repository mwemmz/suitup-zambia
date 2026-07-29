"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { X, Minus, Plus, ShoppingBag } from "lucide-react";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/Button";
import { formatPrice, blurPlaceholder } from "@/lib/utils";

export function CartSlideover() {
  const { items, isOpen, closeCart, removeItem, updateQuantity, subtotal } = useCartStore();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/60 z-[60]"
            onClick={closeCart}
            aria-hidden="true"
          />

          <motion.aside
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed top-0 right-0 bottom-0 w-full max-w-md bg-charcoal-950 z-[70] shadow-2xl flex flex-col border-l border-charcoal-700"
            role="dialog"
            aria-modal="true"
            aria-label="Shopping cart"
          >
            <div className="flex items-center justify-between px-6 h-16 border-b border-charcoal-800">
              <h2 className="text-xs font-medium tracking-[0.2em] uppercase text-ivory">
                Cart ({items.length})
              </h2>
              <button
                onClick={closeCart}
                className="p-2 text-charcoal-400 hover:text-ivory transition-colors"
                aria-label="Close cart"
              >
                <X size={18} />
              </button>
            </div>

            {items.length === 0 ? (
              <div className="flex-1 flex flex-col items-center justify-center gap-4 px-6">
                <ShoppingBag size={40} className="text-charcoal-500" />
                <p className="text-sm text-charcoal-400">Your cart is empty</p>
                <Button variant="outline" size="sm" onClick={closeCart} as="a" href="/collections">
                  Browse Collections
                </Button>
              </div>
            ) : (
              <>
                <div className="flex-1 overflow-y-auto px-6 py-4 space-y-4">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 py-4 border-b border-charcoal-800">
                      <div className="relative w-20 h-24 shrink-0 bg-charcoal-800">
                        <Image
                          src={item.product.images[0]?.src || "/placeholder.svg"}
                          alt={item.product.images[0]?.alt || item.product.name}
                          fill
                          sizes="80px"
                          className="object-cover"
                          placeholder="blur"
                          blurDataURL={blurPlaceholder(80, 96)}
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <Link
                          href={`/product/${item.product.slug}`}
                          onClick={closeCart}
                          className="text-xs font-medium tracking-[0.1em] uppercase text-ivory hover:text-wine-300 transition-colors line-clamp-2"
                        >
                          {item.product.name}
                        </Link>
                        <p className="text-[11px] text-charcoal-400 mt-1">
                          {item.size && `${item.size} / `}{item.color}
                        </p>
                        <p className="text-sm font-medium text-ivory mt-1">{formatPrice(item.product.price)}</p>
                        <div className="flex items-center gap-3 mt-2">
                          <div className="flex items-center border border-charcoal-600">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1.5 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors"
                              aria-label="Decrease quantity"
                            >
                              <Minus size={12} />
                            </button>
                            <span className="w-8 text-center text-xs font-medium text-ivory">{item.quantity}</span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1.5 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors"
                              aria-label="Increase quantity"
                            >
                              <Plus size={12} />
                            </button>
                          </div>
                          <button
                            onClick={() => removeItem(item.id)}
                            className="text-[11px] text-charcoal-500 hover:text-wine-300 transition-colors tracking-[0.1em] uppercase"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="px-6 py-6 border-t border-charcoal-800 space-y-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-charcoal-300">Subtotal</span>
                    <span className="font-medium text-ivory">{formatPrice(subtotal())}</span>
                  </div>
                  <p className="text-[11px] text-charcoal-500">Shipping calculated at checkout</p>
                  <Button
                    variant="primary"
                    size="md"
                    className="w-full"
                    as="a"
                    href="/checkout"
                    onClick={closeCart}
                  >
                    Checkout
                  </Button>
                  <button
                    onClick={closeCart}
                    className="w-full text-center text-xs text-charcoal-500 hover:text-ivory transition-colors tracking-[0.15em] uppercase py-2"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.aside>
        </>
      )}
    </AnimatePresence>
  );
}
