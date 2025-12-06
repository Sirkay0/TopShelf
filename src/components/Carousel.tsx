import Leftarrow from "../../src/assets/icons/arrow-left.svg";
import Rightarrow from "../../src/assets/icons/arrow-right.svg";
import { useRef, type ReactNode } from "react";

const Carousel = ({ children }: { children: ReactNode }) => {
  const carouselContainerRef = useRef<HTMLDivElement | null>(null);

  const prevSlide = () => {
   carouselContainerRef.current?.scrollBy({
    left: -300,
    behavior: "smooth"
   })
  }

  const nextSlide = () => {
   
    carouselContainerRef.current?.scrollTo({
        left: carouselContainerRef.current.scrollLeft + 300,
        behavior: "smooth",
      });
    
  };

  return (
    <div className="relative w-full">
      <div
        ref={carouselContainerRef}
        className="flex gap-6 w-full overflow-x-scroll transition-all duration-500 scroll-smooth"
      >
        {children}
      </div>

      <button
        onClick={prevSlide}
        className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] absolute left-8  top-[186px] flex items-center justify-center"
      >
        <img src={Leftarrow} alt="Arrow left" className="w-5 h-5" />
      </button>
      <button
        onClick={nextSlide}
        className="w-9 h-9 rounded-[100px] bg-white drop-shadow-[0_6px_16px_rgba(0,0,0,0.12)] absolute right-8 top-[186px] flex items-center justify-center "
      >
        <img src={Rightarrow} alt="Arrow right" />
      </button>
    </div>
  );
};

export default Carousel;
