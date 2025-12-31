"use client";

import Image from "next/image";
import { useState } from "react";

const Addup = () => {
  const [amt, setAmt] = useState<number>(0);

  const add = () => {
    setAmt((prev) => (prev < 10 ? prev + 1 : 10));
  };

  const Subtract = () => {
    setAmt((prev) => (prev > 0 ? prev - 1 : 0));
  };

  return (
    <div className="flex gap-1">
      <button onClick={Subtract} className="p-2.5 rounded-sm">
        <div className="relative aspect-square w-4">
          <Image
            src="/assets/icons/minus.svg"
            alt="Minus Icon"
            fill
            className="object-cover "
          />
        </div>
      </button>
      <div className="rounded-sm bg-[#F4F4F4] text-[12px] leading-[150%] text-[#060709] px-[14.5px] py-[9px]">
        {amt}
      </div>
      <button onClick={add} className="p-2.5 rounded-sm">
        <div className="relative aspect-square w-4">
          <Image
            src="/assets/icons/add.svg"
            alt="Minus Icon"
            fill
            className="object-cover "
          />
        </div>
      </button>
    </div>
  );
};

export default Addup;
