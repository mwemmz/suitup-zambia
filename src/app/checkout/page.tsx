"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useCartStore } from "@/store/cart";
import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { formatPrice, blurPlaceholder } from "@/lib/utils";
import { CreditCard, ShieldCheck, Truck } from "lucide-react";

export default function CheckoutPage() {
  const { items, subtotal } = useCartStore();
  const [isProcessing, setIsProcessing] = useState(false);

  if (items.length === 0) {
    return (
      <Container className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
        <Button variant="primary" size="md" as="a" href="/collections">Browse Collections</Button>
      </Container>
    );
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);
    setTimeout(() => setIsProcessing(false), 2000);
  };

  return (
    <Container className="pt-24 md:pt-32 pb-20">
      <h1 className="text-2xl md:text-3xl font-medium tracking-[0.05em] mb-8">Checkout</h1>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
        <form onSubmit={handleSubmit} className="lg:col-span-3 space-y-8">
          <section>
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Contact Information</h2>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-xs text-charcoal-600 mb-1.5">First Name</label>
                  <input id="firstName" type="text" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-xs text-charcoal-600 mb-1.5">Last Name</label>
                  <input id="lastName" type="text" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
                </div>
              </div>
              <div>
                <label htmlFor="email" className="block text-xs text-charcoal-600 mb-1.5">Email</label>
                <input id="email" type="email" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
              </div>
              <div>
                <label htmlFor="phone" className="block text-xs text-charcoal-600 mb-1.5">Phone Number</label>
                <input id="phone" type="tel" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Shipping Address</h2>
            <div className="space-y-4">
              <div>
                <label htmlFor="address" className="block text-xs text-charcoal-600 mb-1.5">Address</label>
                <input id="address" type="text" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label htmlFor="city" className="block text-xs text-charcoal-600 mb-1.5">City</label>
                  <input id="city" type="text" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
                </div>
                <div>
                  <label htmlFor="province" className="block text-xs text-charcoal-600 mb-1.5">Province</label>
                  <input id="province" type="text" required className="w-full px-4 py-3 border border-charcoal-300 bg-transparent text-sm focus:outline-none focus:border-charcoal-950 transition-colors" />
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Payment Method</h2>
            <div className="space-y-3">
              {[
                { id: "mobile-money", label: "Mobile Money", desc: "Airtel Money / MTN Mobile" },
                { id: "card", label: "Credit / Debit Card", desc: "Visa, Mastercard" },
                { id: "bank", label: "Bank Transfer", desc: "Direct deposit" },
              ].map((method) => (
                <label key={method.id} className="flex items-center gap-4 p-4 border border-charcoal-200 hover:border-charcoal-950 cursor-pointer transition-colors has-checked:border-charcoal-950 has-checked:bg-charcoal-50">
                  <input type="radio" name="payment" defaultChecked={method.id === "mobile-money"} className="accent-wine-950" />
                  <div>
                    <span className="text-sm font-medium">{method.label}</span>
                    <p className="text-xs text-charcoal-500">{method.desc}</p>
                  </div>
                </label>
              ))}
            </div>
          </section>

          <Button variant="primary" size="lg" className="w-full" type="submit" disabled={isProcessing}>
            {isProcessing ? "Processing..." : `Pay ${formatPrice(subtotal())}`}
          </Button>

          <div className="flex items-center justify-center gap-6 text-xs text-charcoal-400">
            <span className="flex items-center gap-1.5"><ShieldCheck size={14} /> Secure Checkout</span>
            <span className="flex items-center gap-1.5"><Truck size={14} /> Free Shipping</span>
          </div>
        </form>

        <div className="lg:col-span-2">
          <div className="p-6 bg-charcoal-50 border border-charcoal-200 sticky top-28">
            <h2 className="text-sm font-medium tracking-[0.2em] uppercase mb-6">Order Summary</h2>
            <div className="space-y-4">
              {items.map((item) => (
                <div key={item.id} className="flex gap-4">
                  <div className="relative w-16 h-20 shrink-0 bg-charcoal-100">
                    <Image src={item.product.images[0]?.src || "/placeholder.svg"} alt={item.product.name} fill sizes="64px" className="object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium line-clamp-1">{item.product.name}</p>
                    <p className="text-[11px] text-charcoal-500 mt-0.5">Qty: {item.quantity}</p>
                    <p className="text-xs font-medium mt-1">{formatPrice(item.product.price * item.quantity)}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-6 border-t border-charcoal-200 space-y-2 text-sm">
              <div className="flex justify-between text-charcoal-600"><span>Subtotal</span><span>{formatPrice(subtotal())}</span></div>
              <div className="flex justify-between text-charcoal-600"><span>Shipping</span><span>Free</span></div>
              <div className="flex justify-between font-medium text-base pt-2 border-t border-charcoal-200"><span>Total</span><span>{formatPrice(subtotal())}</span></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
