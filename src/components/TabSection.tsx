"use client";

import { useState } from "react";
import TabDescription from "./TabDescription";
import TabTestimonial from "./TabTestimonial";
import TabRefer from "./TabRefer";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState<
    "description" | "testimonial" | "refer"
  >("description");

  return (
    <section className="flex flex-col gap-5 w-full md:gap-[31px]">
      <div className="flex gap-3 pb-5 w-full md:pr-2.5 md:gap-6 md:pb-6 text-nowrap  ">
        <button
          onClick={() => setActiveTab("description")}
          className={`px-5 rounded-[100px] py-[7px] text-[12px] ${
            activeTab === "description"
              ? "bg-[#F2F6F4] border border-[#05422C]"
              : "bg-white border border-[#F4F4F4]"
          } leading-[150%] font-medium text-[#05422C] min-w-[108px] w-full md:py-2 md:text-[16px] `}
        >
          Description
        </button>
        <button
          onClick={() => setActiveTab("testimonial")}
          className={`px-5 rounded-[100px] ${
            activeTab === "testimonial"
              ? "bg-[#F2F6F4] border border-[#05422C]"
              : "bg-white border border-[#F4F4F4]"
          } py-[7px] text-[12px] leading-[150%] font-medium flex gap-2 items-center justify-center min-w-[108px] w-full md:py-2`}
        >
          <p className="text-[#46494F] md:text-[16px]">Reviews</p>
          <p className="text-[#9D9EA2] md:text-[14px]">(350)</p>
        </button>
        <button
          onClick={() => setActiveTab("refer")}
          className={`px-5 rounded-[100px] ${
            activeTab === "refer"
              ? "bg-[#F2F6F4] border border-[#05422C]"
              : "bg-white border border-[#F4F4F4]"
          } py-[7px] text-[12px] leading-[150%] font-medium flex gap-2 items-center text-[#46494F] min-w-[108px] w-full justify-center md:py-2 md:text-[16px]`}
        >
          Refer a Friend
        </button>
      </div>

      <div>
        {activeTab === "description" && <TabDescription />}
        {activeTab === "testimonial" && <TabTestimonial />}
        {activeTab === "refer" && <TabRefer />}
      </div>
    </section>
  );
};

export default TabSection;
