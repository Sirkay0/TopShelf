"use client";

import Image from "next/image";
import { useState } from "react";
import { testimonials } from "../../testimonials";
import Bottun from "./Bottun";

const TabTestimonial = () => {
  const [showAll, setShowAll] = useState<boolean>(false);

  const visibleTestimonials = showAll ? testimonials : testimonials.slice(0, 2);

  return (
    <div className="flex flex-col gap-6">
      <div className="flex flex-col gap-5 items-center ">
        {visibleTestimonials.map((testimonial) => (
          <div
            key={testimonial.id}
            className="flex flex-col gap-4 p-5 rounded-2xl border border-[#F4F4F4] bg-white items-start w-full md:p-6"
          >
            <div className="flex gap-4 items-center">
              <div className="relative h-9 aspect-square">
                <Image
                  src={testimonial.avatar}
                  alt="Avatar"
                  fill
                  className="object-cover"
                />
              </div>
              <h2 className="text-[#1A1E26] text-[16px] leading-[150%] ">
                {testimonial.name}
              </h2>
              <div className="h-4 w-px bg-[#F4F4F4] "></div>
              <p className="text-[#9D9EA2] text-[14px] font-light leading-[150%] ">
                {testimonial.date}
              </p>
            </div>
            <div className="h-px w-full bg-[#F4F4F4]"></div>
            <div className="relative h-4 w-24">
              <Image
                src={`/assets/icons/${testimonial.rating.toString()}-Star.svg`}
                alt="4-Stars"
                fill
                className="object-cover"
              />
            </div>
            <p className="text-[#1A1E26] text-[16px] leading-[150%] text-left ">
              {testimonial.text}
            </p>
          </div>
        ))}

        <button
          onClick={() => setShowAll(!showAll)}
          className="px-6 rounded-[100px] bg-white border border-[#F3FBF4] text-button-green py-[9.5px] text-[14px] leading-[150%] cursor-pointer"
        >
          {showAll ? "Show Less" : "Show More"}
        </button>
      </div>

      <form className="flex flex-col gap-6 items-start w-full">
        <h2 className="text-[#060709] text-[18px] leading-[150%] ">Add A Review</h2>
        <div className="flex flex-col gap-4 items-start w-full">
          <div className="flex gap-4 items-center w-full ">
            <p className="text-[#46494F] text-[14px] leading-[150%]  ">
              Your rating
            </p>
            <p className="text-[#46494F] text-[14px] leading-[150%]  ">:</p>
            <div className="relative aspect-136/24 w-[130px]">
              <Image
                src="/assets/icons/1-Star.svg"
                alt="4-Stars"
                fill
                className="object-cover"
              />
            </div>
          </div>
          <div className="flex flex-col gap-2 items-start w-full">
            <h2 className="text-[#46494F] text-[14px] leading-[150%] ">Your Review <span className="text-[#EB2606] ">*</span></h2>
            <textarea name="" id="" className="p-4 rounded-lg border border-[#F4F4F4] bg-white text-[#C8C9CB] text-[14px] leading-[150%] text-left w-full " 
            placeholder="Enter your review" rows={3} required></textarea>
          </div>
          <Bottun Children="Submit" classnames="px-10 py-4 text-[16px] leading-[150%]" />
        </div>
      </form>
    </div>
  );
};

export default TabTestimonial;
