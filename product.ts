export type Product = {
  id: number;
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
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "../src/assets/images/brown-weed.png",
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
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    category: "FLOWER",
    image: "../src/assets/images/purple-weed.png",
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
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    category: "FLOWER",
    image: "../src/assets/images/white-snack.png",
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
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "../src/assets/images/brown-weed.png",
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
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "../src/assets/images/brown-weed.png",
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
    title: "2 Oz Deal Watermelon Zkittles + Purple Gushers",
    category: "FLOWER",
    image: "../src/assets/images/purple-weed.png",
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
    title: "2 Oz Deal Ahi Tuna + Master Tuna",
    category: "FLOWER",
    image: "../src/assets/images/white-snack.png",
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
    title: "Mix And Match Shatter/Budder 28g (4 X 7G)",
    category: "CONCENTRATES",
    image: "../src/assets/images/brown-weed.png",
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
