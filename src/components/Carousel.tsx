"use client";

import { useRef, type ReactNode } from "react";

const scrollLength = 310;

const Carousel = ({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) => {
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
    carouselContainerRef.current?.scrollBy({
      left: -scrollLength,
      behavior: "smooth",
    });
  };

  const nextSlide = () => {
    carouselContainerRef.current?.scrollTo({
      left: carouselContainerRef.current.scrollLeft + scrollLength,
      behavior: "smooth",
    });
  };

  return (
    <div className={"relative w-full" + className}>
      <div
        ref={carouselContainerRef}
        className="flex gap-6 w-full overflow-x-scroll transition-all duration-500 scroll-smooth"
      >
        {children}
      </div>

      <button
        onClick={prevSlide}
        className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] absolute   top-[186px] left-0 md:left-8 flex items-center justify-center cursor-pointer"
      >
        <img
          src={"/assets/icons/arrow-left.svg"}
          alt="Arrow left"
          className="w-5 h-5"
        />
      </button>
      <button
        onClick={nextSlide}
        className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.9)] absolute  top-[186px] right-0 md:right-8 flex items-center justify-center cursor-pointer"
      >
        <img src={"/assets/icons/arrow-right.svg"} alt="Arrow right" />
      </button>
    </div>
  );
};

export default Carousel;
