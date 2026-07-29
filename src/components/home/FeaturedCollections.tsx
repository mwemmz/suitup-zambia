"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { COLLECTIONS } from "@/lib/constants";
import { blurPlaceholder } from "@/lib/utils";

export function FeaturedCollections() {
  return (
    <section className="py-20 md:py-28 bg-charcoal-900">
      <div className="container-luxury">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2 className="text-3xl md:text-4xl font-medium text-white tracking-[-0.02em]">
            Our Collections
          </h2>
          <p className="mt-3 text-charcoal-300 text-sm max-w-md">
            Each collection is a dialogue between tradition and modernity, crafted for the discerning gentleman.
          </p>
        </motion.div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {COLLECTIONS.map((collection, index) => (
            <motion.div
              key={collection.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: index * 0.1, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link href={`/collections/${collection.slug}`} className="group block">
                <div className="aspect-[3/4] bg-charcoal-800 border border-charcoal-700 relative overflow-hidden">
                  <Image
                    src={collection.image.src}
                    alt={collection.image.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 25vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                    placeholder="blur"
                    blurDataURL={blurPlaceholder(800, 1000)}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950 via-charcoal-950/30 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 z-10">
                    <p className="text-[10px] text-wine-300 tracking-[0.25em] uppercase font-mono mb-2">
                      {collection.productCount} pieces
                    </p>
                    <h3 className="text-xl text-white font-medium">{collection.name}</h3>
                    <p className="mt-1 text-sm text-charcoal-300">{collection.description}</p>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
