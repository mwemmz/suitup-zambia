"use client";

import { motion } from "framer-motion";
import { SITE } from "@/lib/constants";

export function StoreInfo() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-950">
      <div className="container-luxury">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-3xl md:text-4xl font-medium text-ivory tracking-[-0.02em]">
              Visit Our Atelier
            </h2>
            <div className="mt-8 space-y-4 text-sm text-charcoal-300">
              <p className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-wine-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{SITE.address}</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-wine-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>{SITE.phone}</span>
              </p>
              <p className="flex items-start gap-3">
                <svg className="w-4 h-4 mt-0.5 shrink-0 text-wine-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <a href={`mailto:${SITE.email}`} className="hover:text-ivory transition-colors">
                  {SITE.email}
                </a>
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-charcoal-800">
              <p className="text-[11px] text-wine-300 uppercase tracking-[0.2em] font-mono mb-4">Hours</p>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between text-charcoal-300 max-w-xs">
                  <span>Monday — Friday</span>
                  <span className="text-charcoal-200">9:00 – 18:00</span>
                </div>
                <div className="flex justify-between text-charcoal-300 max-w-xs">
                  <span>Saturday</span>
                  <span className="text-charcoal-200">9:00 – 16:00</span>
                </div>
                <div className="flex justify-between text-charcoal-300 max-w-xs">
                  <span>Sunday</span>
                  <span className="text-charcoal-500">Closed</span>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="relative bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-charcoal-700 flex items-center justify-center min-h-[320px]"
          >
            <div className="text-center p-8">
              <div className="w-16 h-16 mx-auto mb-4 border border-wine-500/30 rounded-full flex items-center justify-center">
                <span className="text-wine-400 text-2xl font-light">✦</span>
              </div>
              <p className="text-charcoal-400 text-xs tracking-[0.2em] uppercase font-mono">
                Suite 3, Acacia Park
              </p>
              <p className="text-charcoal-400 text-xs tracking-[0.2em] uppercase font-mono mt-1">
                Lusaka, Zambia
              </p>
              <p className="mt-6 text-xs text-charcoal-500">
                Walk-ins welcome, appointments preferred
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
