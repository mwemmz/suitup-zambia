"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";

export function CustomCta() {
  return (
    <section className="py-24 md:py-32 bg-charcoal-950 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-wine-700/5 via-transparent to-charcoal-900" />
      <div className="container-luxury relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="text-3xl md:text-4xl font-medium text-ivory tracking-[-0.02em]"
          >
            Yours, Not Off the Rack
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 text-charcoal-400 text-sm leading-relaxed max-w-lg mx-auto"
          >
            From fabric selection to the final stitch, every detail is yours to command.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-10"
          >
            <Button variant="primary" size="lg" as="a" href="/suit-builder">
              Begin Your Commission
            </Button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
