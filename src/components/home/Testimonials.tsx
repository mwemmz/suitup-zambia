"use client";

import { motion } from "framer-motion";
import { TESTIMONIALS } from "@/lib/constants";

export function Testimonials() {
  return (
    <section className="py-20 md:py-28 bg-ivory">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl mx-auto"
        >
          <h2 className="text-3xl md:text-4xl font-medium text-charcoal-950 tracking-[-0.02em]">
            What Our Clients Say
          </h2>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.map((testimonial, index) => (
            <motion.blockquote
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="p-6 border border-ivory-darker bg-white flex flex-col"
            >
              <p className="text-sm text-charcoal-600 leading-relaxed flex-1">
                &ldquo;{testimonial.content}&rdquo;
              </p>
              <footer className="mt-6 pt-4 border-t border-ivory-darker">
                <cite className="not-italic">
                  <span className="text-sm font-medium text-charcoal-900">{testimonial.author}</span>
                  <span className="block text-xs text-charcoal-500 mt-0.5">
                    {testimonial.role}
                  </span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
