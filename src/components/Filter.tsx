"use client";

import Image from "next/image";
import Carousel from "./Carousel";
import { products } from "../../product";
import ProductsCard from "./ProductsCard";
import FeaturedCarousel from "./FeaturedCarousel";
import FilterBody from "./FilterBody";
import { useState } from "react";
const Filter = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="mt-4 px-6 md:px-0 flex flex-col gap-6 md:gap-16 ">
      <div className="pb-4 border-b border-[#F4F4F4] flex justify-between items-center ">
        <div
          className={`z-200 top-0 left-0 bg-white pl-5 pb-5 h-dvh overflow-scroll ${
            open ? "fixed" : "hidden"
          } `}
        >
          <FilterBody open={open} setOpen={setOpen} />
        </div>
        <h2 className="text-[16px] leading-[150%] text-left text-[#1A1E26] ">
          Shop
        </h2>
        <div className="flex gap-2.5 items-center relative">
          <button
            onClick={() => setOpen(!open)}
            className="flex items-center gap-2 px-3.5 py-2 rounded-[100px] border border-[#F4F4F4] text-[12px] leading-[150%] text-[#1A1E26] md:hidden cursor-pointer"
          >
            Filter
            <Image
              src="/assets/icons/arrow-down.svg"
              alt="Arrow-down"
              width={12}
              height={12}
            />
          </button>
          <div className="flex px-3.5 py-2 rounded-[100px] border border-[#F4F4F4] gap-1 relative text-[12px] leading-[150%] text-[#1A1E26]">
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort" className="appearance-none w-[50px] ">
              <option value="dates">date</option>
              <option value="straintype">straintype</option>
              <option value="categogry">categogry</option>
            </select>
            <span className="absolute top-[11px] right-3.5 pointer-events-none">
              <Image
                src="/assets/icons/arrow-down.svg"
                alt="Arrow-down"
                width={12}
                height={12}
              />
            </span>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-4 items-start">
        <h2 className="text-button-green text-[16px] font-medium leading-[150%] ">
          Cannabis
        </h2>
        <p className="text-[14px] text-[#717378] leading-[150%] max-w-[864px]">
          Here at WestCoastSupply&apos;s “ cannabis section, we showcase the
          best Indica, Hybrid, and Sativa medical cannabis strain selections at
          the best prices online. You can be assured that all our strains go
          through a strict screening process to ensure that all your cannabis
          needs are top-quality. All of our flowers are sourced from reputable
          growers, based in British Columbia, Canada. We have hige grade
          selection comes from growers that produce AAAA+ quality cannabis
          flowers and have many years of experience in the cannabis industry.
          You are guaranteed to be receiving high-quality flowers at the best
          prices online with our unbeatable sales!
        </p>
      </div>
      <div className="bg-[#f2f6f491] px-6 py-8 rounded-2xl flex flex-col gap-6">
        <h2 className="text-[24px] font-medium leading-[150%] tracking-[-0.5px] text-[#060709] ">
          Top Selling
        </h2>
        <Carousel>
          {products.map((product) => (
            <ProductsCard
              key={product.id}
              product={product}
              variant="carousel"
            />
          ))}
        </Carousel>
      </div>
      <div className=" w-full md:pr-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product.id} product={product} variant="grid" />
        ))}
      </div>
      <FeaturedCarousel />
      <div className=" w-full md:pr-0 grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-x-6 md:gap-x-8 gap-y-8">
        {products.slice(0, 6).map((product) => (
          <ProductsCard key={product.id} product={product} variant="grid" />
        ))}
      </div>
      <div className=" pt-6 flex flex-col gap-5 border-t border-[#F4F4F4] items-start min-[1000px]:flex-row min-[1000px]:items-center min-[1000px]:justify-between ">
        <p className="font-light text-[12px] leading-[150%] text-left text-[#717378] md:text-[14px] ">
          Showing 1-30 of 393 results
        </p>
        <div className="flex gap-4 md:gap-3 items-center">
          <button className="w-8 h-8 rounded-[100px] border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer">
            <img
              src={"/assets/icons/arrow-left.svg"}
              alt="Arrow left"
              className="w-4 h-4 md:w-4 md:h-4"
            />
          </button>
          <div className="flex gap-2 items-center">
            <button className="flex items-center justify-center bg-[#F2F6F4] rounded-[100px] w-8 h-8 md:w-9 md:h-9 text-[12px] md:text-[14px] leading-[150%] text-[#05422C] cursor-pointer ">
              1
            </button>
            <button className="flex items-center justify-center bg-white rounded-[100px] w-8 h-8 md:text-[14px] md:w-9 md:h-9 text-[12px] leading-[150%] text-[#1A1E26] cursor-pointer">
              2
            </button>
            <button className="flex items-center justify-center bg-white rounded-[100px] w-8 h-8 text-[12px] md:text-[14px] md:w-9 md:h-9 leading-[150%] text-[#1A1E26] cursor-pointer">
              3
            </button>
            <button className="flex items-center justify-center bg-white rounded-[100px] w-8 h-8 text-[12px] md:text-[14px] md:w-9 md:h-9 leading-[150%] text-[#1A1E26] cursor-pointer">
              4
            </button>
            <button className="flex items-center justify-center bg-white rounded-[100px] w-5 h-8 text-[12px] leading-[150%] text-[#1A1E26] md:text-[14px] cursor-pointer">
              ...
            </button>
            <button className="flex items-center justify-center bg-white rounded-[100px] w-8 h-8 text-[12px] leading-[150%] text-[#1A1E26] md:text-[14px] md:w-9 md:h-9 cursor-pointer">
              55
            </button>
          </div>
          <button className="w-8 h-8 rounded-[100px] border border-[#F4F4F4] bg-white flex items-center justify-center cursor-pointer">
            <img
              src={"/assets/icons/arrow-right.svg"}
              alt="Arrow right"
              className="w-4 h-4"
            />
          </button>
        </div>
      </div>
      {open && (
        <div
          onClick={() => setOpen(!open)}
          className="fixed inset-0 bg-black/10 z-40 md:hidden "
        ></div>
      )}
    </div>
  );
};

export default Filter;
