"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Share2, ChevronLeft, ChevronRight, Star, Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { useCartStore } from "@/store/cart";
import { useWishlistStore } from "@/store/wishlist";
import { formatPrice, blurPlaceholder, cn } from "@/lib/utils";
import { PRODUCTS } from "@/lib/constants";
import type { Product } from "@/lib/types";

interface ProductDetailProps {
  product: Product;
}

export function ProductDetail({ product }: ProductDetailProps) {
  const [selectedSize, setSelectedSize] = useState(product.sizes.find((s) => s.inStock)?.value || "");
  const [selectedColor, setSelectedColor] = useState(product.colors.find((c) => c.inStock)?.name || "");
  const [quantity, setQuantity] = useState(1);
  const [currentImage, setCurrentImage] = useState(0);
  const [isZoomed, setIsZoomed] = useState(false);
  const [zoomPosition, setZoomPosition] = useState({ x: 0, y: 0 });

  const addItem = useCartStore((s) => s.addItem);
  const { isInWishlist, toggleItem } = useWishlistStore();
  const inWishlist = isInWishlist(product.id);

  const relatedProducts = PRODUCTS.filter(
    (p) => p.category === product.category && p.id !== product.id
  ).slice(0, 4);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isZoomed) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setZoomPosition({ x, y });
  };

  const handleAddToCart = () => {
    addItem(product, selectedSize, selectedColor, quantity);
  };

  return (
    <>
      <div className="container-luxury pt-24 md:pt-32 pb-16">
        <nav aria-label="Breadcrumb" className="mb-8">
          <ol className="flex items-center gap-2 text-xs text-charcoal-400">
            <li><Link href="/" className="hover:text-ivory transition-colors">Home</Link></li>
            <li>/</li>
            <li><Link href="/collections" className="hover:text-ivory transition-colors">{product.category}</Link></li>
            <li>/</li>
            <li className="text-ivory truncate">{product.name}</li>
          </ol>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          <div className="space-y-4">
            <div
              className="relative aspect-[3/4] bg-charcoal-800 overflow-hidden cursor-crosshair group"
              onMouseEnter={() => setIsZoomed(true)}
              onMouseLeave={() => setIsZoomed(false)}
              onMouseMove={handleMouseMove}
            >
              <Image
                src={product.images[currentImage]?.src || "/placeholder.svg"}
                alt={product.images[currentImage]?.alt || product.name}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className={cn(
                  "object-cover transition-opacity duration-300",
                  isZoomed && "opacity-0"
                )}
                priority
                placeholder="blur"
                blurDataURL={blurPlaceholder(900, 1200)}
              />
              {isZoomed && (
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: `url(${product.images[currentImage]?.src})`,
                    backgroundPosition: `${zoomPosition.x}% ${zoomPosition.y}%`,
                    backgroundSize: "200%",
                    backgroundRepeat: "no-repeat",
                  }}
                />
              )}

              {product.images.length > 1 && (
                <>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev > 0 ? prev - 1 : product.images.length - 1))}
                    className="absolute left-3 top-1/2 -translate-y-1/2 p-2 bg-charcoal-900/80 backdrop-blur-sm hover:bg-charcoal-800 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Previous image"
                  >
                    <ChevronLeft size={16} className="text-ivory" />
                  </button>
                  <button
                    onClick={() => setCurrentImage((prev) => (prev < product.images.length - 1 ? prev + 1 : 0))}
                    className="absolute right-3 top-1/2 -translate-y-1/2 p-2 bg-charcoal-900/80 backdrop-blur-sm hover:bg-charcoal-800 rounded-full transition-colors opacity-0 group-hover:opacity-100"
                    aria-label="Next image"
                  >
                    <ChevronRight size={16} className="text-ivory" />
                  </button>
                </>
              )}

              <div className="absolute top-3 left-3 flex flex-col gap-2">
                {product.isNew && <Badge variant="new">New</Badge>}
                {product.compareAtPrice && <Badge variant="sale">Sale</Badge>}
              </div>

              <button
                onClick={() => toggleItem(product)}
                className="absolute top-3 right-3 p-2 bg-charcoal-900/80 backdrop-blur-sm hover:bg-charcoal-800 rounded-full transition-colors"
                aria-label={inWishlist ? "Remove from wishlist" : "Add to wishlist"}
              >
                <Heart size={16} className={inWishlist ? "fill-wine-400 text-wine-400" : "text-charcoal-300"} />
              </button>
            </div>

            {product.images.length > 1 && (
              <div className="flex gap-3" role="tablist" aria-label="Product images">
                {product.images.map((img, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === currentImage}
                    onClick={() => setCurrentImage(i)}
                    className={cn(
                      "relative w-16 h-20 bg-charcoal-800 overflow-hidden border-2 transition-colors",
                      i === currentImage ? "border-wine-400" : "border-transparent hover:border-charcoal-500"
                    )}
                  >
                    <Image src={img.src} alt={img.alt} fill sizes="64px" className="object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="lg:sticky lg:top-28 lg:self-start">
            <div className="space-y-6">
              <div>
                <p className="text-[10px] tracking-[0.25em] uppercase text-wine-400 font-mono mb-2">{product.category}</p>
                <h1 className="text-2xl md:text-3xl font-medium text-ivory tracking-[-0.02em]">{product.name}</h1>
              </div>

              <div className="flex items-center gap-4">
                <span className="text-xl font-medium text-ivory">{formatPrice(product.price)}</span>
                {product.compareAtPrice && (
                  <span className="text-sm text-charcoal-400 line-through">
                    {formatPrice(product.compareAtPrice)}
                  </span>
                )}
              </div>

              <div className="flex items-center gap-2">
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={14} className={i < product.rating ? "text-wine-400 fill-wine-400" : "text-charcoal-600"} />
                  ))}
                </div>
                <span className="text-xs text-charcoal-400">
                  {product.rating} ({product.reviewCount} reviews)
                </span>
              </div>

              <p className="text-sm text-charcoal-300 leading-relaxed">{product.description}</p>

              <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal-400">
                Fabric: <span className="text-ivory">{product.fabric}</span>
              </p>

              {product.colors.length > 0 && (
                <div>
                  <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal-400 mb-3">
                    Color: <span className="text-ivory">{selectedColor}</span>
                  </p>
                  <div className="flex gap-3">
                    {product.colors.map((color) => (
                      <button
                        key={color.name}
                        onClick={() => setSelectedColor(color.name)}
                        disabled={!color.inStock}
                        className={cn(
                          "w-8 h-8 rounded-full border-2 transition-all duration-200",
                          selectedColor === color.name ? "border-wine-400 scale-110" : "border-charcoal-600",
                          !color.inStock && "opacity-30 cursor-not-allowed"
                        )}
                        style={{ backgroundColor: color.hex }}
                        aria-label={color.name}
                        title={color.name}
                      />
                    ))}
                  </div>
                </div>
              )}

              {product.sizes.length > 0 && (
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <p className="text-[11px] tracking-[0.15em] uppercase text-charcoal-400">
                      Size: <span className="text-ivory">{selectedSize}</span>
                    </p>
                    <Link href="/size-guide" className="text-[10px] text-charcoal-500 hover:text-wine-300 underline underline-offset-2">
                      Size Guide
                    </Link>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map((size) => (
                      <button
                        key={size.value}
                        onClick={() => setSelectedSize(size.value)}
                        disabled={!size.inStock}
                        className={cn(
                          "min-w-[44px] px-4 py-2.5 text-xs font-medium border transition-all duration-200",
                          selectedSize === size.value
                            ? "bg-wine-600 text-ivory border-wine-600"
                            : "bg-transparent text-ivory border-charcoal-600 hover:border-ivory",
                          !size.inStock && "opacity-30 cursor-not-allowed line-through"
                        )}
                      >
                        {size.label}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex items-center gap-4">
                <div className="flex items-center border border-charcoal-600">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="p-3 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors"
                    aria-label="Decrease quantity"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="w-12 text-center text-sm font-medium text-ivory">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="p-3 text-charcoal-400 hover:text-ivory hover:bg-charcoal-800 transition-colors"
                    aria-label="Increase quantity"
                  >
                    <Plus size={14} />
                  </button>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 pt-4">
                <Button variant="primary" size="lg" className="flex-1" onClick={handleAddToCart}>
                  Add to Cart
                </Button>
                <Button variant="secondary" size="lg" className="flex-1" as="a" href="/checkout">
                  Buy Now
                </Button>
              </div>

              <div className="flex items-center gap-4 pt-4 border-t border-charcoal-800">
                <button
                  onClick={() => toggleItem(product)}
                  className="flex items-center gap-2 text-xs text-charcoal-400 hover:text-wine-300 transition-colors"
                >
                  <Heart size={14} className={inWishlist ? "fill-wine-400 text-wine-400" : ""} />
                  {inWishlist ? "Remove from Wishlist" : "Add to Wishlist"}
                </button>
                <button className="flex items-center gap-2 text-xs text-charcoal-400 hover:text-ivory transition-colors">
                  <Share2 size={14} />
                  Share
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {relatedProducts.length > 0 && (
        <section className="py-16 bg-charcoal-900">
          <div className="container-luxury">
            <h2 className="text-xl font-medium text-ivory mb-8">Complete the Look</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {relatedProducts.map((rp) => (
                <Link key={rp.id} href={`/products/${rp.slug}`} className="group">
                  <div className="relative aspect-[3/4] bg-charcoal-800 overflow-hidden mb-3">
                    <Image
                      src={rp.images[0]?.src || "/placeholder.svg"}
                      alt={rp.images[0]?.alt || rp.name}
                      fill
                      sizes="25vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      placeholder="blur"
                      blurDataURL={blurPlaceholder(400, 533)}
                    />
                  </div>
                  <h3 className="text-xs font-medium text-ivory line-clamp-2">{rp.name}</h3>
                  <p className="text-xs font-medium text-charcoal-300 mt-1">{formatPrice(rp.price)}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}

      <section className="py-16">
        <div className="container-luxury">
          <h2 className="text-xl font-medium text-ivory mb-8">Customer Reviews</h2>
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-8">
              <div className="text-3xl font-medium text-ivory">{product.rating}</div>
              <div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} size={16} className={i < product.rating ? "text-wine-400 fill-wine-400" : "text-charcoal-600"} />
                  ))}
                </div>
                <p className="text-xs text-charcoal-400 mt-1">Based on {product.reviewCount} reviews</p>
              </div>
            </div>
            <p className="text-sm text-charcoal-400">Reviews will be available once a reviewer has purchased this product.</p>
          </div>
        </div>
      </section>
    </>
  );
}
