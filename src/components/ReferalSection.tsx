"use clent"

import Bottun from "./Bottun";

const ReferalSection = () => {
  return (
    <div className="w-full flex items-center justify-center relative -mt-[149px] md:-mt-[166px] z-10">
      <div className="w-4/5 h-[268px] bg-[url(/assets/images/refer-bg-cover.svg)] md:bg-[url(/assets/images/refer-desktop-bg-cover.svg)] bg-cover bg-right rounded-3xl py-10 px-6 flex flex-col gap-10 md:h-[342px] md:flex-row md:py-24 md:px-16 lg:px-[120px] md:justify-between md:items-center">
        <div className="flex flex-col gap-6 md:gap-8  ">
          <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-1.5px] text-white md:text-[48px] lg:text-[64px] md:leading-[110%] md:tracking-[-2px] lg:tracking-[-4px] max-sm:text-nowrap max-[368px]:text-wrap ">
            REFER A FRIEND
          </h2>
          <div className="flex gap-6 items-center">
            <p className="text-[20px] leading-[150%] font-medium text-white md:text-[26px] lg:text-[32px] md:tracking-[-0.5px] text-nowrap ">
              And get
            </p>
            <p className="text-[#F2BC1B] text-[18px] md:text-[32px] md:leading-[120%] md:tracking-[-1.5px] ">
              $30!
            </p>
          </div>
        </div>
        <div>
          <Bottun Children="Refer Here" classnames="text-[16px] md:text-[18px] px-10 py-4 md:py-6  md:px-11"/>
        </div>
      </div>
    </div>
  );
};

export default ReferalSection;
