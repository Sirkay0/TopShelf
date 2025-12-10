export type Testimonial = {
  id: number;
  name: string;
  avatar: string;
  rating: number;
  text: string;
  date: string;
};

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Salau Mutiu",
    avatar: "/assets/images/Avatars/avatar1.png",
    rating: 4,
    text: "Absolutely love TopShelfBC; affordable on any budget and such fast delivery, straight to my door! I recommend them to all my friends and family for their 420 needs.",
    date: "January 15, 2023",
  },
  {
    id: 2,
    name: "Abdullah Yusuf",
    avatar: "/assets/images/Avatars/avatar2.png",
    rating: 5,
    text: "Best damn place to buy your cannabis at great prices.",
    date: "January 5, 2023",
  },
  {
    id: 3,
    name: "Asiwaju Habeeb",
    avatar: "/assets/images/Avatars/avatar3.png",
    rating: 5,
    text: "Customer service was amazing. The products came fresh and the quality was top tier.",
    date: "February 2, 2023",
  },
  {
    id: 4,
    name: "Adesokan Emmanuel",
    avatar: "/assets/images/Avatars/avatar2.png",
    rating: 4,
    text: "Delivery was fast and everything came exactly as described. Will order again.",
    date: "February 10, 2023",
  },
  {
    id: 5,
    name: "Jenna Clarke",
    avatar: "/assets/images/Avatars/avatar1.png",
    rating: 5,
    text: "Great variety and good pricing. This has become my go-to place for cannabis products.",
    date: "March 1, 2023",
  },
];
