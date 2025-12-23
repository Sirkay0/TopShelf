export type Product = {
  id: number;
  slug: string;
  title: string;
  category: string;
  image: string;
  rating: number;
  reviews: number;
  strainType: string;
  oldPrice: number | null;
  price: number;
  unit: string;
  sizes: string[];
  inStock: boolean;
  badge: string | null;
};

export const products: Product[] = [
  {
    id: 1,
    slug: "mix-and-match-shatter-budder-28g",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "/assets/images/brown-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Indica 70%",
    oldPrice: 200,
    price: 102,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: false,
    badge: null,
  },
  {
    id: 2,
    slug: "watermelon-zkittles-purple-gushers",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    category: "FLOWER",
    image: "/assets/images/purple-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Sativa 100%",
    oldPrice: null,
    price: 80,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: true,
    badge: null,
  },
  {
    id: 3,
    slug: "ahi-tuna-master-tuna-2oz",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    category: "FLOWER",
    image: "/assets/images/white-snack.png",
    rating: 4.0,
    reviews: 135,
    strainType: "Hybrid",
    oldPrice: 200,
    price: 120,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: true,
    badge: "$60 ounce",
  },
  {
    id: 4,
    slug: "mix-and-match-shatter-budder-28g-variant-1",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "/assets/images/brown-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Indica 70%",
    oldPrice: 200,
    price: 102,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: false,
    badge: null,
  },
  {
    id: 5,
    slug: "mix-and-match-shatter-budder-28g-variant-2",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "/assets/images/brown-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Indica 70%",
    oldPrice: 200,
    price: 102,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: false,
    badge: null,
  },
  {
    id: 6,
    slug: "watermelon-zkittles-purple-gushers-variant",
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    category: "FLOWER",
    image: "/assets/images/purple-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Sativa 100%",
    oldPrice: null,
    price: 80,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: true,
    badge: null,
  },
  {
    id: 7,
    slug: "ahi-tuna-master-tuna-2oz-variant",
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    category: "FLOWER",
    image: "/assets/images/white-snack.png",
    rating: 4.0,
    reviews: 135,
    strainType: "Hybrid",
    oldPrice: 200,
    price: 120,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: true,
    badge: "$60 ounce",
  },
  {
    id: 8,
    slug: "mix-and-match-shatter-budder-28g-variant-3",
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "/assets/images/brown-weed.png",
    rating: 4.6,
    reviews: 135,
    strainType: "Indica 70%",
    oldPrice: 200,
    price: 102,
    unit: "gram",
    sizes: ["28g", "1/2lb", "1/4lb"],
    inStock: false,
    badge: null,
  },
];

export type FeaturedProduct = {
  id: number;
  slug: string;
  category: string;
  title: string;
  rating: number;
  reviews: number;
  sizes: string[];
  price: number;
  oldPrice: number;
  image: string;
};

export const featuredProducts: FeaturedProduct[] = [
  {
    id: 1,
    slug: "featured-mix-and-match-shatter-budder-28g",
    category: "CONCENTRATES",
    title: "Mix And Match Shatter/Budder 28g (4 X 7g)",
    rating: 4.8,
    reviews: 135,
    sizes: ["28g", "1/2lb", "1/4lb"],
    price: 102,
    oldPrice: 120,
    image: "/assets/images/green-apple-weed.png",
  },
  {
    id: 2,
    slug: "premium-live-resin-bundle-14g",
    category: "CONCENTRATES",
    title: "Premium Live Resin Bundle 14g",
    rating: 4.6,
    reviews: 98,
    sizes: ["14g", "7g", "1/4lb"],
    price: 78,
    oldPrice: 95,
    image: "/assets/images/brown-weed.png",
  },
  {
    id: 3,
    slug: "assorted-thc-gummies-pack",
    category: "EDIBLES",
    title: "Assorted THC Gummies Pack",
    rating: 4.9,
    reviews: 210,
    sizes: ["500mg", "1000mg", "1/4lb"],
    price: 45,
    oldPrice: 55,
    image: "/assets/images/green-snack.png",
  },
  {
    id: 4,
    slug: "diamond-sauce-combo-21g",
    category: "CONCENTRATES",
    title: "Diamond Sauce Combo 21g",
    rating: 4.7,
    reviews: 162,
    sizes: ["21g", "14g", "1/4lb"],
    price: 89,
    oldPrice: 110,
    image: "/assets/images/black-weed.png",
  },
];
