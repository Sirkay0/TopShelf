"use client";

import { useState } from "react";
import Bottun from "./Bottun";

const PriceFilter = () => {
  const MIN = 0;
  const MAX = 50000;

  const [price, setPrice] = useState(0);

  return (
    <div className="flex flex-col gap-5 pb-6 border-b border-[#F4F4F4] w-full">
      <h2 className="text-[12px] leading-[150%] font-light text-left tracking-[1px] text-[#717378] ">
        FILTER BY PRICE
      </h2>
      <div className="flex items-start flex-col gap-6 ">
        <div className="w-full flex flex-col gap-2">
          <div className="flex justify-between ">
            <div className="flex justify-center items-center px-2.5 pt-1 pb-[5px] rounded-[100px] bg-[#F4F4F4] ">
              <p className="text-[12px] leading-[150%] text-[#060709] ">{`$${price.toLocaleString()}`}</p>
            </div>
            <div className="flex justify-center items-center px-2.5 pt-1 pb-[5px] rounded-[100px] bg-[#F4F4F4] ">
              <p className="text-[12px] leading-[150%] text-[#060709] ">
                {`$${MAX.toLocaleString()}`}
              </p>
            </div>
          </div>
          <div className="relative">
            <input
              type="range"
              min={MIN}
              max={MAX}
              value={price}
              onChange={(e) => setPrice(Number(e.target.value))}
              className="
                w-full
                appearance-none
                h-1
                bg-black
                rounded-full
                outline-none
            "
            />
            <div className="w-3 h-3 bg-white rounded-full border-2 border-black absolute top-2.5 left-0"></div>
          </div>
        </div>
        <Bottun Children="Apply" classnames="px-[32px] py-2" />
      </div>
    </div>
  );
};

export default PriceFilter;
