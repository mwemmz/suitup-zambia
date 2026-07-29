export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  price: number;
  compareAtPrice?: number;
  images: ProductImage[];
  category: string;
  tags: string[];
  sizes: Size[];
  colors: Color[];
  fabric?: string;
  rating: number;
  reviewCount: number;
  isNew: boolean;
  isBestSeller: boolean;
  inStock: boolean;
  createdAt: string;
}

export interface ProductImage {
  src: string;
  alt: string;
  width: number;
  height: number;
  blurDataURL?: string;
}

export interface Size {
  label: string;
  value: string;
  inStock: boolean;
}

export interface Color {
  name: string;
  hex: string;
  inStock: boolean;
}

export interface CartItem {
  id: string;
  product: Product;
  size: string;
  color: string;
  quantity: number;
}

export interface WishlistItem {
  id: string;
  product: Product;
  addedAt: string;
}

export interface Review {
  id: string;
  author: string;
  rating: number;
  content: string;
  date: string;
  verified: boolean;
}

export interface Collection {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: ProductImage;
  productCount: number;
}

export interface Testimonial {
  id: string;
  author: string;
  role: string;
  content: string;
  avatar?: string;
  rating: number;
}

export interface SuitBuilderState {
  fabric: string;
  lapel: string;
  buttons: string;
  pocket: string;
  fit: string;
  trousers: string;
  measurements: Measurements;
}

export interface Measurements {
  chest: number;
  waist: number;
  hips: number;
  shoulder: number;
  armLength: number;
  inseam: number;
  neck: number;
}

export type SortOption =
  | "newest"
  | "price-asc"
  | "price-desc"
  | "rating"
  | "popular";
