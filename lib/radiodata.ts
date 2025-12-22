

export type ProductCategory = {
  label: string;
  value: string;
  count: number;
};

export const productCategories: ProductCategory[] = [
  {
    label: "Sales",
    value: "sales",
    count: 12,
  },
  {
    label: "Cannabis",
    value: "cannabis",
    count: 430,
  },
  {
    label: "Pre-Rolls",
    value: "pre-rolls",
    count: 40,
  },
  {
    label: "CBD Oil",
    value: "cbd-oil",
    count: 20,
  },
  {
    label: "Magic Mushrooms",
    value: "magic-mushrooms",
    count: 34,
  },
  {
    label: "Extracts",
    value: "extracts",
    count: 26,
  },
  {
    label: "Edibles",
    value: "edibles",
    count: 32,
  },
  {
    label: "Vape Pens",
    value: "vape-pens",
    count: 12,
  },
  {
    label: "Accessories",
    value: "accessories",
    count: 10,
  },
  {
    label: "Bath & Body",
    value: "bath-body",
    count: 8,
  },
  {
    label: "Bundles",
    value: "bundles",
    count: 24,
  },
  {
    label: "Wholesale",
    value: "wholesale",
    count: 28,
  },
];

export type Order = {
  label: string;
  value: string;
};

export const orderOptions: Order[] = [
  {
    label: "Default",
    value: "default",
  },
  {
    label: "Review Count",
    value: "review-count",
  },
  {
    label: "Popularity",
    value: "popularity",
  },
  {
    label: "Average Rating",
    value: "average-rating",
  },
  {
    label: "Newness",
    value: "newness",
  },
  {
    label: "Price: Low to High",
    value: "price-asc",
  },
  {
    label: "Price: High to Low",
    value: "price-desc",
  },
  {
    label: "Random Products",
    value: "random",
  },
  {
    label: "Product Name",
    value: "name",
  },
];

export type Review = {
  lebel: string;
  value: string;
};

export const reviewOptions: Review[] = [
  {
    lebel: "/assets/icons/5-Star.svg",
    value: "5-star",
  },
  {
    lebel: "/assets/icons/4-Star.svg",
    value: "4-star",
  },
  {
    lebel: "/assets/icons/3-Star.svg",
    value: "3-star",
  },
  {
    lebel: "/assets/icons/2-Star.svg",
    value: "2-star",
  },
  {
    lebel: "/assets/icons/1-Star.svg",
    value: "1-star",
  },
];
