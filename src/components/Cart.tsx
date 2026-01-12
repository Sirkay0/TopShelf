import Image from "next/image";
import Bottun from "./Bottun";
import { ReactEventHandler, useRef, useState } from "react";
import { setuid } from "process";

type CartProps = {
  up: boolean;
  setUp: React.Dispatch<React.SetStateAction<boolean>>;
};

const Cart = ({ up, setUp }: CartProps) => {
  const [translateY, setTranslateY] = useState<number>(0);

  const startY = useRef(0);
  const isDragging = useRef(false);

  const handleTouchStart = (e: React.TouchEvent) => {
    startY.current = e.touches[0].clientY;
    isDragging.current = true;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!isDragging.current) return;

    const currentY = e.touches[0].clientY;
    const diff = currentY - startY.current;

    if (diff > 0) {
      setTranslateY(diff);
    }
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    isDragging.current = false;

    if (translateY > 180) {
      setUp(false);
      setTranslateY(0);
    } else {
      setTranslateY(0);
    }
  };

  return (
    <div
      className="fixed h-[88dvh] bg-white bottom-0 z-900  rounded-t-3xl w-full md:h-full md:rounded-none md:w-[42%] md:right-0 "
      style={{
        transform: up ? `translateY(${translateY}px) ` : `translateY(100%)`,
        transition: isDragging.current ? "none" : "all 0.3s ease-out",
      }}
    >
      <div className="flex flex-col gap-5 pt-8 pb-6 px-6 w-full relative items-center md:gap-8 md:p-8">
        <div
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          className="bg-[#F4F4F4] w-10 h-1 rounded-[100px] absolute top-[5px] md:hidden"
        ></div>
        <div className="flex justify-center items-center w-10 h-10 rounded-[100px] bg-white absolute -left-14 top-3/5 max-md:hidden">
          <div className="relative aspect-square w-5">
            <Image
              src="/assets/icons/arrow-right.svg"
              fill
              alt="Arrow Right"
              className="object-cover"
            />
          </div>
        </div>
        <div className="flex justify-between items-center pb-4 border-b border-[#F4F4F4] w-full md:pb-6">
          <h2 className="text-[#060709] text-[16px] leading-[150%] md:text-[20px]">
            Your Cart
          </h2>
          <p className="text-[#9D9EA2] text-[14px] font-light leading-[150%] md:text-[18px] ">
            (0)
          </p>
        </div>
        <div className="flex flex-col gap-16 h-[519px] items-center justify-center">
          <div className="flex justify-center items-center w-[120px] h-[120px] bg-[#F2F6F4] rounded-[1000px] md:w-40 md:h-40 ">
            <div className="relative aspect-square w-14 md:w-16">
              <Image
                src="/assets/icons/bag.svg"
                fill
                alt="Bag"
                className="object-cover"
              />
            </div>
          </div>
          <Bottun
            Children="Show Product"
            classnames="px-6 py-[5.5px] text-[12px] leading-[150%] font-medium md:px-10 md:text-[16px] md:py-4"
          />
        </div>
      </div>
    </div>
  );
};

export default Cart;
