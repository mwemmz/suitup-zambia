import { Hero } from "@/components/home/Hero";
import { FeaturedCollections } from "@/components/home/FeaturedCollections";
import { ProductGrid } from "@/components/product/ProductGrid";
import { Testimonials } from "@/components/home/Testimonials";
import { StoreInfo } from "@/components/home/StoreInfo";
import { CustomCta } from "@/components/home/CustomCta";
import { PRODUCTS } from "@/lib/constants";

export default function HomePage() {
  const newArrivals = PRODUCTS.filter((p) => p.isNew);
  const bestSellers = PRODUCTS.filter((p) => p.isBestSeller);

  return (
    <>
      <Hero />
      <FeaturedCollections />
      <ProductGrid
        title="New Arrivals"
        subtitle="The latest additions to our collection, crafted for the modern gentleman."
        products={newArrivals}
        priority
        variant="light"
      />
      <ProductGrid
        title="Best Sellers"
        subtitle="Our most sought-after pieces, beloved by discerning clients."
        products={bestSellers}
      />
      <CustomCta />
      <Testimonials />
      <StoreInfo />
    </>
  );
}
