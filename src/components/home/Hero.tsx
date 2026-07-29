"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { SITE } from "@/lib/constants";

export function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-[100dvh] bg-charcoal-950 overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-gradient-to-br from-wine-700/10 via-charcoal-950 to-charcoal-900" />

      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-wine-500/5 to-transparent" />

      <div className="relative z-10 w-full">
        <div className="container-luxury">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center min-h-[80vh]">
            <div className="pt-24 lg:pt-0 max-w-xl">
              <motion.span
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                className="inline-block text-wine-300 text-xs tracking-[0.25em] uppercase mb-6 font-mono"
              >
                Established 2018
              </motion.span>

              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                className="text-4xl md:text-5xl lg:text-6xl font-medium text-white leading-[1.05] tracking-[-0.02em]"
              >
                The Art of
                <br />
                <span className="text-wine-300">Fine Tailoring</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 text-base text-charcoal-300 leading-relaxed max-w-md"
              >
                Bespoke craftsmanship in Lusaka. Every stitch tells a story of precision and timeless sophistication.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={isVisible ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
                className="mt-10 flex flex-col sm:flex-row gap-4"
              >
                <Button variant="primary" size="lg" as="a" href="/collections">
                  Explore Collections
                </Button>
                <Button variant="outline" size="lg" as="a" href="/suit-builder">
                  Build Your Suit
                </Button>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={isVisible ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="hidden lg:block relative"
            >
              <div className="relative aspect-[3/4] max-w-md ml-auto bg-gradient-to-b from-charcoal-800 to-charcoal-900 border border-charcoal-700">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-24 h-24 mx-auto mb-6 border border-wine-500/40 rounded-full flex items-center justify-center">
                      <span className="text-wine-400 text-3xl font-light">✦</span>
                    </div>
                    <p className="text-charcoal-400 text-xs tracking-[0.25em] uppercase font-mono">
                      SuitUp Zambia
                    </p>
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-charcoal-950 via-charcoal-950/60 to-transparent">
                  <p className="text-white/80 text-sm leading-relaxed italic">
                    &ldquo;A gentleman&apos;s suit should be a second skin, not a costume.&rdquo;
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={isVisible ? { opacity: 1 } : {}}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10"
      >
        <div className="flex flex-col items-center gap-2">
          <span className="text-charcoal-500 text-[10px] tracking-[0.3em] uppercase font-mono">Scroll</span>
          <div className="w-px h-8 bg-gradient-to-b from-wine-500/60 to-transparent" />
        </div>
      </motion.div>
    </section>
  );
}
