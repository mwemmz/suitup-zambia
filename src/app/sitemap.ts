import type { MetadataRoute } from "next";
import { PRODUCTS } from "@/lib/constants";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    { url: "https://suitupzambia.com", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 1 },
    { url: "https://suitupzambia.com/collections", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.9 },
    { url: "https://suitupzambia.com/new-arrivals", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://suitupzambia.com/best-sellers", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.8 },
    { url: "https://suitupzambia.com/suit-builder", lastModified: new Date(), changeFrequency: "monthly" as const, priority: 0.7 },
    { url: "https://suitupzambia.com/cart", lastModified: new Date(), changeFrequency: "never" as const, priority: 0.3 },
    { url: "https://suitupzambia.com/wishlist", lastModified: new Date(), changeFrequency: "never" as const, priority: 0.3 },
    { url: "https://suitupzambia.com/account", lastModified: new Date(), changeFrequency: "never" as const, priority: 0.3 },
    { url: "https://suitupzambia.com/appointments", lastModified: new Date(), changeFrequency: "weekly" as const, priority: 0.6 },
    { url: "https://suitupzambia.com/search", lastModified: new Date(), changeFrequency: "never" as const, priority: 0.3 },
  ];

  const productRoutes = PRODUCTS.map((product) => ({
    url: `https://suitupzambia.com/product/${product.slug}`,
    lastModified: new Date(product.createdAt),
    changeFrequency: "monthly" as const,
    priority: 0.6,
  }));

  return [...staticRoutes, ...productRoutes];
}
