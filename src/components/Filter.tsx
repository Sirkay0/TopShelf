import Image from "next/image";
import ArrowDown from "../../public/assets/icons/arrow-down.svg";
import Carousel from "./Carousel";
import { products } from "../../product";
import ProductsCard from "./ProductsCard";
import FeaturedCarousel from "./FeaturedCarousel";
const Filter = () => {
  return (
    <div className="mt-4 px-6 md:px-0 flex flex-col gap-6">
      <div className="pb-4 border-b border-[#F4F4F4] flex justify-between items-center">
        <h2 className="text-[16px] leading-[150%] text-left text-[#1A1E26] ">
          Shop
        </h2>
        <div className="flex gap-2.5 items-center">
          <button className="flex gap-2 px-3.5 py-2 rounded-[100px] border border-[#F4F4F4] text-[12px] leading-[150%] text-[#1A1E26] md:hidden ">
            Filter
            <Image src={ArrowDown} alt="Arrow-down" width={12} height={12} />
          </button>
          <div className="flex px-3.5 py-2 rounded-[100px] border border-[#F4F4F4] gap-1 relative text-[12px] leading-[150%] text-[#1A1E26]">
            <label htmlFor="sort">Sort By</label>
            <select name="sort" id="sort" className="appearance-none w-[50px] ">
              <option value="dates">date</option>
              <option value="straintype">straintype</option>
              <option value="categogry">categogry</option>
            </select>
            <span className="absolute top-[11px] right-3.5 pointer-events-none">
              <Image src={ArrowDown} alt="Arrow-down" width={12} height={12} />
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
    </div>
  );
};

export default Filter;
