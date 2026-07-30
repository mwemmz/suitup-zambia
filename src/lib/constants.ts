import type { Collection, Testimonial, Product } from "./types";

export const SITE = {
  name: "SuitUp Zambia",
  tagline: "Tailored for the discerning gentleman",
  description:
    "Premium bespoke suits and luxury menswear in Lusaka, Zambia. Experience the art of fine tailoring with SuitUp Zambia.",
  url: "https://suitupzambia.com",
  email: "hello@suitupzambia.com",
  phone: "+260 97 123 4567",
  address: "Acacia Park, Plot 1234, Great East Road, Lusaka, Zambia",
  whatsapp: "260971234567",
  social: {
    instagram: "@suitupzambia",
    facebook: "SuitUpZambia",
    linkedin: "company/suitupzambia",
  },
  hours: {
    weekdays: "Mon–Fri: 9:00 AM – 6:00 PM",
    saturday: "Sat: 9:00 AM – 4:00 PM",
    sunday: "Sun: Closed",
  },
} as const;

export const NAV_LINKS = [
  { label: "Collections", href: "/collections" },
  { label: "New Arrivals", href: "/new-arrivals" },
  { label: "Best Sellers", href: "/best-sellers" },
  { label: "Suit Builder", href: "/suit-builder" },
  { label: "Appointments", href: "/appointments" },
] as const;

export const COLLECTIONS: Collection[] = [
  {
    id: "1",
    name: "The Executive",
    slug: "executive",
    description: "Power suits for the modern leader",
    image: {
      src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1560252829-804f1aedf1be&w=1200&fit=cover&q=85",
      alt: "Executive suit collection",
      width: 800,
      height: 1000,
    },
    productCount: 12,
  },
  {
    id: "2",
    name: "The Signature",
    slug: "signature",
    description: "Our hallmark of elegance",
    image: {
      src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1567510231111-9c7b3c9d0e0c&w=1200&fit=cover&q=85",
      alt: "Signature suit collection",
      width: 800,
      height: 1000,
    },
    productCount: 8,
  },
  {
    id: "3",
    name: "The Heritage",
    slug: "heritage",
    description: "Timeless classics reimagined",
    image: {
      src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1617127365659-c2b6a3a64f5c&w=1200&fit=cover&q=85",
      alt: "Heritage suit collection",
      width: 800,
      height: 1000,
    },
    productCount: 10,
  },
  {
    id: "4",
    name: "The Ceremony",
    slug: "ceremony",
    description: "For life's most memorable moments",
    image: {
      src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1507003211169-0a1dd7228f2d&w=1200&fit=cover&q=85",
      alt: "Ceremony suit collection",
      width: 800,
      height: 1000,
    },
    productCount: 6,
  },
];

export const PRODUCTS: Product[] = [
  {
    id: "suit-001",
    name: "Midnight Navy Peak Lapel Suit",
    slug: "midnight-navy-peak-lapel-suit",
    description:
      "Handcrafted from the finest Italian wool, this midnight navy suit features a classic peak lapel and a modern slim fit. Perfect for both boardroom and black-tie events.",
    price: 8500,
    compareAtPrice: 10500,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1560252829-804f1aedf1be&w=1200&fit=cover&q=85", alt: "Midnight Navy Suit Front View", width: 900, height: 1200 },
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1567510231111-9c7b3c9d0e0c&w=1200&fit=cover&q=85", alt: "Midnight Navy Suit Back View", width: 900, height: 1200 },
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1617127365659-c2b6a3a64f5c&w=1200&fit=cover&q=85", alt: "Midnight Navy Suit Detail", width: 900, height: 1200 },
    ],
    category: "Suits",
    tags: ["executive", "formal", "navy"],
    sizes: [
      { label: "36S", value: "36s", inStock: true },
      { label: "38S", value: "38s", inStock: true },
      { label: "40R", value: "40r", inStock: true },
      { label: "42R", value: "42r", inStock: true },
      { label: "44R", value: "44r", inStock: false },
      { label: "46L", value: "46l", inStock: true },
    ],
    colors: [
      { name: "Navy", hex: "#1a2744", inStock: true },
      { name: "Charcoal", hex: "#36454f", inStock: true },
      { name: "Black", hex: "#0a0a0a", inStock: true },
    ],
    fabric: "Italian Super 150s Wool",
    rating: 4.9,
    reviewCount: 47,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: "2025-12-01",
  },
  {
    id: "suit-002",
    name: "Charcoal Grey Three-Piece Suit",
    slug: "charcoal-grey-three-piece-suit",
    description:
      "A timeless three-piece ensemble in charcoal grey. The waistcoat adds a layer of sophistication that sets you apart.",
    price: 9500,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1567510231111-9c7b3c9d0e0c&w=1200&fit=cover&q=85", alt: "Charcoal Suit Front View", width: 900, height: 1200 },
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1560252829-804f1aedf1be&w=1200&fit=cover&q=85", alt: "Charcoal Suit Back View", width: 900, height: 1200 },
    ],
    category: "Suits",
    tags: ["heritage", "formal", "three-piece"],
    sizes: [
      { label: "38S", value: "38s", inStock: true },
      { label: "40R", value: "40r", inStock: true },
      { label: "42R", value: "42r", inStock: true },
      { label: "44R", value: "44r", inStock: true },
      { label: "46L", value: "46l", inStock: false },
    ],
    colors: [
      { name: "Charcoal", hex: "#36454f", inStock: true },
      { name: "Navy", hex: "#1a2744", inStock: true },
    ],
    fabric: "Italian Super 120s Wool",
    rating: 4.8,
    reviewCount: 34,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: "2025-11-15",
  },
  {
    id: "suit-003",
    name: "Ivory Dinner Jacket",
    slug: "ivory-dinner-jacket",
    description:
      "Make an entrance with our ivory dinner jacket. Crafted from premium cotton-wool blend, it's the ultimate statement piece for summer galas.",
    price: 7200,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1549923746-c1d8a5fcdc0c&w=1200&fit=cover&q=85", alt: "Ivory Jacket Front View", width: 900, height: 1200 },
    ],
    category: "Jackets",
    tags: ["ceremony", "formal", "summer"],
    sizes: [
      { label: "38R", value: "38r", inStock: true },
      { label: "40R", value: "40r", inStock: true },
      { label: "42R", value: "42r", inStock: true },
    ],
    colors: [
      { name: "Ivory", hex: "#fffff0", inStock: true },
      { name: "Black", hex: "#0a0a0a", inStock: true },
    ],
    fabric: "Cotton-Wool Blend",
    rating: 4.7,
    reviewCount: 18,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: "2026-01-10",
  },
  {
    id: "suit-004",
    name: "Burgundy Velvet Blazer",
    slug: "burgundy-velvet-blazer",
    description:
      "Rich burgundy velvet blazer for the gentleman who dares to be different. Luxuriously soft with a satin shawl collar.",
    price: 6800,
    compareAtPrice: 8200,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1617127365659-c2b6a3a64f5c&w=1200&fit=cover&q=85", alt: "Burgundy Blazer View", width: 900, height: 1200 },
    ],
    category: "Jackets",
    tags: ["signature", "evening", "luxury"],
    sizes: [
      { label: "38R", value: "38r", inStock: true },
      { label: "40R", value: "40r", inStock: true },
      { label: "42R", value: "42r", inStock: true },
      { label: "44R", value: "44r", inStock: false },
    ],
    colors: [
      { name: "Burgundy", hex: "#800020", inStock: true },
      { name: "Forest Green", hex: "#228b22", inStock: true },
    ],
    fabric: "Italian Velvet",
    rating: 4.9,
    reviewCount: 29,
    isNew: true,
    isBestSeller: false,
    inStock: true,
    createdAt: "2026-01-05",
  },
  {
    id: "suit-005",
    name: "Classic White Dress Shirt",
    slug: "classic-white-dress-shirt",
    description:
      "The foundation of every great suit. Our signature dress shirt in pure Egyptian cotton with a spread collar and mother-of-pearl buttons.",
    price: 1800,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1603415526960-f7e0328c63b1&w=1200&fit=cover&q=85", alt: "White Dress Shirt", width: 900, height: 1200 },
    ],
    category: "Shirts",
    tags: ["essential", "formal", "classic"],
    sizes: [
      { label: "15", value: "15", inStock: true },
      { label: "15.5", value: "15.5", inStock: true },
      { label: "16", value: "16", inStock: true },
      { label: "16.5", value: "16.5", inStock: true },
      { label: "17", value: "17", inStock: true },
      { label: "17.5", value: "17.5", inStock: true },
    ],
    colors: [
      { name: "White", hex: "#ffffff", inStock: true },
      { name: "Light Blue", hex: "#add8e6", inStock: true },
    ],
    fabric: "Egyptian Cotton",
    rating: 4.6,
    reviewCount: 52,
    isNew: false,
    isBestSeller: true,
    inStock: true,
    createdAt: "2025-10-01",
  },
  {
    id: "suit-006",
    name: "Silk Charcoal Tie",
    slug: "silk-charcoal-tie",
    description:
      "Hand-finished silk tie in charcoal with a subtle micro-dot pattern. The perfect accent to complete your ensemble.",
    price: 850,
    images: [
      { src: "https://images.weserv.nl/?url=images.unsplash.com/photo-1583394838336-acd977736f90&w=1200&fit=cover&q=85", alt: "Charcoal Silk Tie", width: 900, height: 1200 },
    ],
    category: "Accessories",
    tags: ["essential", "formal", "silk"],
    sizes: [],
    colors: [
      { name: "Charcoal", hex: "#36454f", inStock: true },
      { name: "Burgundy", hex: "#800020", inStock: true },
      { name: "Navy", hex: "#1a2744", inStock: true },
    ],
    fabric: "Italian Silk",
    rating: 4.5,
    reviewCount: 15,
    isNew: false,
    isBestSeller: false,
    inStock: true,
    createdAt: "2025-09-20",
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    author: "Dr. Michael Banda",
    role: "CEO, Banda Holdings",
    content:
      "The attention to detail at SuitUp Zambia is unparalleled. My bespoke suit fits like it was painted on me. The fabric quality is exceptional.",
    rating: 5,
  },
  {
    id: "2",
    author: "James Mulenga",
    role: "Managing Partner, Mulenga & Associates",
    content:
      "I've worn suits from London, Milan, and New York — none compare to the craftsmanship I received from SuitUp. Truly world-class.",
    rating: 5,
  },
  {
    id: "3",
    author: "David Phiri",
    role: "Entrepreneur",
    content:
      "The suit builder experience was incredible. Being able to customize every detail and see it come to life was truly special. My go-to for all formal wear.",
    rating: 5,
  },
];

export const FABRICS = [
  { id: "italian-super-150s", name: "Italian Super 150s Wool", price: 0, color: "#1a2744" },
  { id: "italian-super-120s", name: "Italian Super 120s Wool", price: 0, color: "#36454f" },
  { id: "english-mohair", name: "English Mohair Blend", price: 1500, color: "#0a0a0a" },
  { id: "japanese-denim", name: "Japanese Selvedge Denim", price: 800, color: "#2f4f4f" },
  { id: "linen-cotton", name: "Linen-Cotton Summer Weave", price: 0, color: "#f5f5dc" },
  { id: "cashmere-wool", name: "Cashmere-Wool Luxury Blend", price: 3000, color: "#8b7355" },
] as const;

export const LAPEL_STYLES = [
  { id: "notch", name: "Notch Lapel", description: "Classic and versatile" },
  { id: "peak", name: "Peak Lapel", description: "Formal and bold" },
  { id: "shawl", name: "Shawl Collar", description: "Evening elegance" },
] as const;

export const FIT_STYLES = [
  { id: "slim", name: "Slim Fit", description: "Modern silhouette" },
  { id: "tailored", name: "Tailored Fit", description: "Our signature cut" },
  { id: "classic", name: "Classic Fit", description: "Traditional comfort" },
] as const;
