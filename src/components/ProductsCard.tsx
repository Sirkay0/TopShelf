import { Product } from "../../product";

const ProductsCard = ({ product }: { product: Product }) => {
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
  } = product;
  return (
    <div className="w-[291px] h-[568px] flex flex-col gap-6 ">
      <div className="w-full h-60 bg-[#F4F4F4] rounded-lg flex justify-center items-center relative">
        <img src={image} alt="brown-weed" className="w-[164px] h-[164px]  " />
        {inStock ? (
          <div className=" px-8 py-[1.34375rem] rounded-[100px] bg-[#05422C]/30 flex items-center justify-center backdrop-blur-sm absolute ">
            <p className="text-[14px] leading-[150%] font-normal text-white text-nowrap ">
              Out Of Stock
            </p>
          </div>
        ) : null}
        {badge ? (
          <div className="px-4 py-3.75 bg-[#F2BC1B] rounded-tl-sm rounded-br-sm absolute top-0 left-0 ">
            <p className=" text-[14px] leading-[150%] font-normal text-white ">
              {badge}
            </p>
          </div>
        ) : null}
      </div>
      <div className="flex flex-col items-center h-[304px] w-[291px] gap-5 text-center">
        <div className="flex flex-col items-center gap-2 ">
          <p className="text-[#9D9EA2] font-light text-[14px] leading-[150%] ">
            {category}
          </p>
          <p className="text-[18px] font-normal leading-[150%] text-[#1A1E26] min-h-[54px] ">
            {title}
          </p>
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-1.5">
              <img
                src="/assets/icons/star.svg"
                alt="Star-icon"
                className="w-3 h-3"
              />
              <p className="text-[#060709] font-normal text-[14px] leading-[150%] ">
                {rating}/5
              </p>
            </div>
            <div className="bg-[#C8C9CB] w-0.5 h-4 "></div>
            <div className="flex gap-1.5">
              <p className="text-[14px] font-normal leading-[150%] text-[#060709] ">
                {reviews}
                <span className="text-[14px] font-normal leading-[150%] text-[#C8C9CB] ">
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
                : "text-[16px] leading-[150%] font-normal text-[#EB2606] "
            }
          >
            {oldPrice ? `$${oldPrice}` : `$${price}`}
          </div>
          <div
            className={
              oldPrice
                ? "text-[16px] leading-[150%] font-normal text-[#EB2606] "
                : "text-[14px] leading-[150%] font-normal text-[#9D9EA2]"
            }
          >
            {oldPrice ? `$${price}` : `/ ${unit}`}
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <button className="px-2.5 pt-1 pb-[5px] bg rounded-sm border border-[#F4F4F4] ">
            {sizes[0]}
          </button>
          <button className="px-2.5 pt-1 pb-[5px] bg rounded-sm border border-[#F4F4F4] ">
            {sizes[1]}
          </button>
          <button className="px-2.5 pt-1 pb-[5px] bg rounded-sm border border-[#F4F4F4] ">
            {sizes[2]}
          </button>
        </div>
        <button className="px-6 h-10 bg-button-green text-white rounded-[100px] text-[12px] font-medium leading-[150%] ">
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductsCard;
