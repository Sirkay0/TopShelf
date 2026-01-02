"use client";

import Image from "next/image";
import {
  orderOptions,
  productCategories,
  reviewOptions,
} from "../../lib/radiodata";
import PriceFilter from "./PriceFilter";

type FilterBodyProp = {
  setOpen?: React.Dispatch<React.SetStateAction<boolean>>;
  open?: boolean;
};

const FilterBody = ({ setOpen, open }: FilterBodyProp) => {
  return (
    <div className="md:w-[304px] w-dvw pr-8 border-r border-[#F4F4F4] flex flex-col items-start gap-5">
      <div className="flex justify-between items-center pt-[17px] pb-6 border-b border-[#F4F4F4] w-full">
        <h2 className="text-[18px] leading-[150%] text-left text-[#1A1E26] ">
          Filters
        </h2>
        <div className="fixed top-4.5 right-6">
          <div
            className="relative  h-6 w-6 flex justify-center items-center p-1 md:hidden "
            onClick={() => setOpen?.(!open)}
          >
            <span className="absolute left-0 top-1/2 block h-0.5 w-full bg-button-green rounded-full -translate-y-1/2 rotate-45"></span>
            <span className="absolute left-0 top-1/2 block h-0.5 w-full bg-button-green rounded-full -translate-y-1/2 -rotate-45"></span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-5 pb-5 border-b border-[#F4F4F4] w-full">
        <h2 className="text-[12px] leading-[150%] font-light text-left tracking-[1px] text-[#717378] ">
          PRODUCT CATEGORY
        </h2>
        <div className="flex flex-col gap-3">
          {productCategories.map((category) => (
            <label
              htmlFor={category.value}
              key={category.value}
              className="flex gap-3 items-center"
            >
              <input
                type="radio"
                name="categogry"
                id={category.value}
                className="accent-green-600 w-5 h-5"
              />
              <span className="text-[14px] leading-[150%] text-left text-[#46494F] ">
                {category.label}
              </span>
              <div className="h-[11px] w-px bg-[#F4F4F4]"></div>
              <h2 className="text-[#9D9EA2] text-[14px] font-light leading-[150%] ">
                {category.count}
              </h2>
            </label>
          ))}
        </div>
      </div>
      <PriceFilter />
      <div className="flex flex-col gap-5 pb-5 border-b border-[#F4F4F4] w-full">
        <h2 className="text-[12px] leading-[150%] font-light text-left tracking-[1px] text-[#717378] ">
          ORDER BY
        </h2>
        <div className="flex flex-col gap-3">
          {orderOptions.map((order) => (
            <label
              htmlFor={order.value}
              key={order.value}
              className="flex gap-3 items-center"
            >
              <input
                type="radio"
                name="order"
                id={order.value}
                className="accent-green-600 w-5 h-5"
              />
              <span className="text-[14px] leading-[150%] text-left text-[#46494F] ">
                {order.label}
              </span>
            </label>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-5 pb-5 border-b border-[#F4F4F4] w-full">
        <h2 className="text-[12px] leading-[150%] font-light text-left tracking-[1px] text-[#717378] ">
          FILTER BY REVIEWS
        </h2>
        <div className="flex flex-col gap-3">
          {reviewOptions.map((review) => (
            <label
              htmlFor={review.value}
              key={review.value}
              className="flex gap-3 items-center"
            >
              <input
                type="radio"
                name="review"
                id={review.value}
                className="accent-green-600 w-5 h-5"
              />
              <div className="relative w-[85px] h-3.5 ">
                <Image src={review.lebel} fill alt={review.value} />
              </div>
            </label>
          ))}
        </div>
      </div>
      <button className="px-8 py-[9.5px] rounded-[1000px] bg-[#F3FBF4]">
        <p className="text-button-green text-[14px] leading-[150%] cursor-pointer">
          Clear Filters
        </p>
      </button>
    </div>
  );
};

export default FilterBody;
