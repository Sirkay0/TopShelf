import Link from "next/link";
import { Product } from "../../product";
import Bottun from "./Bottun";

type ProductsCardType = {
  product: Product;
  variant?: "carousel" | "grid";
};

const ProductsCard = ({ product, variant = "carousel" }: ProductsCardType) => {
  const {
    image,
    category,
    title,
    rating,
    reviews,
    strainType,
    oldPrice,
    price,
    sizes,
    unit,
    inStock,
    badge,
    slug,
  } = product;

  const variants = {
    carousel: {
      wrapper: "min-w-[291px] md:min-w-[291px] max-w-[295px] h-[568px]",
      imageBox: "h-[240px] md:h-[240px]",
      image: "w-[164px] h-[164px] ",
      outOfStock: "py-[1.34375rem]",
      smalltext: "text-[14px]",
      mediumtext: "text-[16px]",
      bigtext: "text-[18px]",
      badge: "py-[15px] px-4",
      size: "h-[32px] px-2.5",
    },
    grid: {
      wrapper: "min-w-[159px] md:min-w-[200px] max-w-[295px] lg:max-w-[400px] h-fill",
      imageBox: "h-[160px] md:h-[240px]",
      image: "w-[120px] h-[120px] md:h-[164px] md:w-[164px]",
      outOfStock: "py-[1.0078125rem] md:py-[1.34375rem]",
      smalltext: "text-[12px] md:text-[14px]",
      mediumtext: "text-[14px] md:text-[16px]",
      bigtext: "text-[16px] md:text-[18px]",
      badge: "py-[10.8333333px] p-2 md:p-4",
      size: "h-[26] h-[32px] px-2 md:px-2.5",
    },
  };

  const current = variants[variant];

  return (
    <Link href={`/category/${slug}`} className="cursor-pointer">
    <div className={`${current.wrapper} flex  flex-col gap-6`}>
      <div
        className={`w-full ${current.imageBox} bg-[#F4F4F4] rounded-lg flex justify-center items-center relative`}
      >
        <img src={image} alt="brown-weed" className={`${current.image}`} />
        {!inStock ? (
          <div
            className={`px-8 ${current.outOfStock} rounded-[100px] bg-[#05422C]/30 flex items-center justify-center backdrop-blur-sm absolute `}
          >
            <p className="text-[14px] leading-[150%] font-normal text-white text-nowrap ">
              Out Of Stock
            </p>
          </div>
        ) : null}
        {badge ? (
          <div
            className={`${current.badge} bg-[#F2BC1B] rounded-tl-sm rounded-br-sm absolute top-0 left-0 `}
          >
            <p className="text-[14px] leading-[150%] font-normal text-white ">
              {badge}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center  w-full gap-5 text-center">
        <div className="flex flex-col items-center gap-2 ">
          <p
            className={`text-[#9D9EA2] ${current.smalltext} font-light  leading-[150%] `}
          >
            {category}
          </p>
          <p
            className={`${current.bigtext} font-normal leading-[150%] text-[#1A1E26] min-h-[54px] `}
          >
            {title}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <img
                src="/assets/icons/star.svg"
                alt="Star-icon"
                className="w-3 h-3"
              />
              <p
                className={`text-[#060709] font-normal ${current.smalltext} leading-[150%]`}
              >
                {rating}/5
              </p>
            </div>
            <div className="bg-[#C8C9CB] w-0.5 h-4 "></div>
            <div className="flex gap-1.5">
              <p
                className={` ${current.smalltext} font-normal leading-[150%] text-[#060709] `}
              >
                {reviews}
                <span className={`font-normal leading-[150%] text-[#C8C9CB]`}>
                  {" "}
                  Reviews
                </span>
              </p>
            </div>
          </div>
          <div className="bg-[#F2F6F4] w-[86px] h-7 rounded-sm px-2.5 pt-1 pb-[5px] text-[#05422C] font-normal text-[12px] leading-[150%] text-nowrap">
            {strainType}
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <div
            className={
              oldPrice
                ? "text-[14px] leading-[150%] font-normal text-[#9D9EA2] line-through"
                : `${current.mediumtext} leading-[150%] font-normal text-[#EB2606] `
            }
          >
            {oldPrice ? `$${oldPrice}` : `$${price}`}
          </div>
          <div
            className={
              oldPrice
                ? `${current.mediumtext} leading-[150%] font-normal text-[#EB2606]`
                : "text-[14px] leading-[150%] font-normal text-[#9D9EA2]"
            }
          >
            {oldPrice ? `$${price}` : `/ ${unit}`}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button
            className={` ${current.size} bg rounded-sm border border-[#F4F4F4] cursor-pointer`}
          >
            {sizes[0]}
          </button>
          <button
            className={` ${current.size} bg rounded-sm border border-[#F4F4F4] cursor-pointer`}
          >
            {sizes[1]}
          </button>
          <button
            className={` ${current.size} bg rounded-sm border border-[#F4F4F4] cursor-pointer`}
          >
            {sizes[2]}
          </button>
        </div>
        <Bottun Children="Add to Cart"
        classnames="text-[12px] md:text-[14px] px-6 py-3"
        />
      </div>
    </div>
    </Link>
  );
};

export default ProductsCard;
