"use client";

import Image from "next/image";
import Bottun from "./Bottun";
import { useState } from "react";
import { featuredProducts } from "../../product";

const FeaturedCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex >= featuredProducts.length - 1 ? 0 : currentIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((currentIndex) =>
      currentIndex === 0 ? featuredProducts.length - 1 : currentIndex - 1
    );
  };

  return (
    <div className="flex flex-col gap-10 p-6   bg-[conic-gradient(from_180deg,#05422C_83%,#648A7C_99%)] -mx-8 md:mx-0 min-[1180]:rounded-3xl min-[1180]:flex-row min-[1180]:gap-0 min-[1180]:justify-between min-[1180]:py-14 min-[1180]:pl-14 min-[1180]:pr-[88px]">
      <div className="flex flex-col gap-4 items-start lg:gap-8 min-[1180]:w-2/5">
        <div className="flex flex-col gap-2 lg:gap-4 ">
          <h3 className="text-[12px] leading-[150%] tracking-[2px] text-white/40 md:text-[14px] md:text-white/30 md:tracking-[4px]  ">
            {featuredProducts[currentIndex].category}
          </h3>
          <h2 className="text-[24px] leading-[150%] tracking-[-0.5px] text-white font-medium md:text-[32px] md:font-semibold lg:tracking-[-1.5px] lg:leading-[120%] ">
            {featuredProducts[currentIndex].title}
          </h2>
        </div>
        <div className="flex flex-col gap-4 items-start lg:gap-6">
          <div className="flex gap-2 items-center">
            <div className="flex gap-1.5 items-center ">
              <img
                src="/assets/icons/star.svg"
                alt="Star"
                className="w-3 h-3"
              />
              <p className="text-[14px] leading-[150%] text-white ">
                {featuredProducts[currentIndex].rating}/5
              </p>
            </div>
            <div className="h-3 w-px bg-white/25 "></div>
            <div className="flex gap-1.5 items-center">
              <p className="text-[14px] leading-[150%] text-white ">
                {featuredProducts[currentIndex].reviews}
              </p>
              <p className="text-[14px] leading-[150%] text-white/50 ">
                Reviews
              </p>
            </div>
          </div>
          <div className="flex gap-2 items-center">
            <button className="px-2.5 pt-1 pb-[5px] rounded-sm bg-white/8 border border-white/20 text-white text-[12px] leading-[150%] ">
              {featuredProducts[currentIndex].sizes[0]}
            </button>
            <button className="px-2.5 pt-1 pb-[5px] rounded-sm bg-white/8 border border-white/20 text-white text-[12px] leading-[150%] ">
              {featuredProducts[currentIndex].sizes[1]}
            </button>
            <button className="px-2.5 pt-1 pb-[5px] rounded-sm bg-white/8 border border-white/20 text-white text-[12px] leading-[150%] ">
              {featuredProducts[currentIndex].sizes[2]}
            </button>
          </div>
        </div>
        <div className="flex justify-between items-center w-full lg:gap-8 lg:justify-start">
          <Bottun
            Children="Add to Cart"
            classnames="px-[24px] py-[11px] lg:px-[40px] lg:py-[10px] text-[12px] lg:text-[16px]"
          />
          <div className="flex gap-2 items-center">
            <p className="text-[18px] lg:text-[20px] leading-[150%] text-[#F2BC1B] ">
              {`$${featuredProducts[currentIndex].price}.00`}
            </p>
            <p className="text-white/60 text-[14px] leading-[150%] line-through ">
              {`$${featuredProducts[currentIndex].oldPrice}.00`}
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4  min-[1180]:w-2/5">
        <div className="flex items-center justify-center bg-white/12 rounded-2xl h-[322px]  relative">
          <div className="relative aspect-square h-[300px] w-[300px] ">
            <Image
              src={featuredProducts[currentIndex].image}
              alt="Product-Image"
              fill
              className="object-cover"
            />
          </div>

          <button
            onClick={prev}
            className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] absolute   top-[145px] -left-3.5  flex items-center justify-center"
          >
            <img
              src={"/assets/icons/arrow-left.svg"}
              alt="Arrow left"
              className="w-5 h-5"
            />
          </button>
          <button
            onClick={next}
            className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] absolute  top-[145px] -right-3.5  flex items-center justify-center"
          >
            <img src={"/assets/icons/arrow-right.svg"} alt="Arrow right" />
          </button>
        </div>
        <div className="flex gap-2 items-center justify-center">
          <div className="bg-white w-1.5 h-1.5 rounded-[9999px] border-[3px] border-white/8 "></div>
          <div className="bg-white w-1.5 h-1.5 rounded-[9999px] border-[3px] border-white/8 "></div>
          <div className="bg-white w-1.5 h-1.5 rounded-[9999px] border-[3px] border-white/8 "></div>
          <div className="bg-white w-1.5 h-1.5 rounded-[9999px] border-[3px] border-white/8 "></div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCarousel;
