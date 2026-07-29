import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Collections",
  description: "Explore our curated collections of premium suits, jackets, shirts, and accessories.",
};

export default function CollectionsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ProductGrid title="All Collections" subtitle="Every piece tells a story of craftsmanship and elegance." products={PRODUCTS} priority />
    </div>
  );
}
