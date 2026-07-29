import type { Metadata } from "next";
import { ProductGrid } from "@/components/product/ProductGrid";
import { PRODUCTS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Best Sellers",
  description: "Our most sought-after pieces, beloved by discerning clients worldwide.",
};

export default function BestSellersPage() {
  return (
    <div className="pt-24 md:pt-32">
      <ProductGrid title="Best Sellers" subtitle="The pieces our clients love most." products={PRODUCTS.filter((p) => p.isBestSeller)} />
    </div>
  );
}
