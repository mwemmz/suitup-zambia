import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "New Arrivals",
  description: "Discover the latest additions to our collection, crafted for the modern gentleman.",
};

export default function NewArrivalsPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ProductGrid title="New Arrivals" subtitle="Fresh from our atelier — the latest in luxury tailoring." products={PRODUCTS.filter((p) => p.isNew)} priority variant="light" />
    </div>
  );
}
