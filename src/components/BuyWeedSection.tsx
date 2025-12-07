import { products } from "../../product";
import Carousel from "./Carousel";
import ProductsCard from "./ProductsCard";

const BuyWeedSection = () => {
  return (
    <section className="flex flex-col gap-10 px-6 py-16 items-center md:pl-[60px] md:pr-0
    lg:pl-[120px] mb-16">
      <h1 className="text-[#1A1E26] font-semibold text-[32px] leading-[120%] tracking-[-1.5px] text-center md:text-[64px] md:tracking-[-4px] md:leading-[110%] lg:w-[948px] pr-6 md:pr-[60px] lg:pr-[120px]">
        BEST DISPENSARY TO BUY WEED ONLINE IN CANADA
      </h1>
      <div className="flex w-full justify-center pr-6 md:pr-[60px] lg:pr-[120px]">
        <div className="flex gap-4 w-434px overflow-auto md:w-full md:justify-center md:gap-8 ">
          <button className="w-[120px]  h-10 px-5 bg-[#F2F6F4] border border-[#05422C] rounded-[100px] text-[#05422C] text-[14px] font-medium leading-[150%] text-nowrap md:w-full md:h-12 md:py-2  md:text-[16px]  ">
            Best Sellers
          </button>
          <button className="w-[189px] h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap md:w-full md:h-12 md:text-[16px] ">
            Bundles & Promotions
          </button>
          <button className="w-[93px] h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap md:w-full md:h-12 md:text-[16px] ">
            On Sale
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center gap-8 w-full md:grid md:grid-cols-[minmax(0,379px)_minmax(0,1fr)]">
        <div className="flex flex-col justify-center items-center bg-[#05422C]  w-[342px] h-[395px] rounded-2xl relative overflow-hidden md:min-w-[379px] md:h-[568px] ">
          <img
            src="/assets/images/brown-weed.png"
            alt="Brown weed"
            className="w-[151px] h-[151px] mb-7"
          />
          <h2 className="text-white text-[20px] font-medium leading-[150%] mb-2">
            Shop our Best Sellers
          </h2>
          <p className="text-white/60 text-[14px] leading-[150%] text-center w-[216px] mb-5">
            Lorem ipsum dolor sit amet consectetur. Ullamcorper ipsum varius
            lorem blandit lectus magnis feugiat.
          </p>
          <a
            href="http://"
            className="text-[14px] font-normal text-button-green leading-[150%] underline  "
          >
            View All
          </a>

          <div className="w-[261.68px] h-[371px] bg-linear-to-b from-[#346654]/0 to-[#346654]/40 rounded-xl absolute top-[-102px] left-[141px] rotate-[5deg] "></div>
        </div>
        <div className="max-w-full">
          <Carousel>
            {products.map((product) => (
              <ProductsCard key={product.id} product={product} />
            ))}
          </Carousel>
        </div>
      </div>
    </section>
  );
};

export default BuyWeedSection;
