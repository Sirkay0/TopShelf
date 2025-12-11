import Link from "next/link";
import { products } from "../../product";
import ProductsCard from "./ProductsCard";

const RecentlyAdded = () => {
  return (
    <div className="flex flex-col gap-10 pl-6  md:px-[60px] lg:px-[120px] items-start pb-16 md:pb-[120px] ">
      <div className="flex flex-col gap-6 w-full">
        <h2 className="text-[32px] font-semibold text-[#1A1E26] leading-[120%] tracking-[-1.5px] pr-6 md:pr-0 md:text-[64px] md:leading-[110%] md:tracking-[-4px] ">
          RECENTLY ADDED
        </h2>
        <div className="flex flex-col gap-6 pb-6 w-full md:flex-row md:gap-10 md:items-center md:pb-8 border-b border-b-[#F4F4F4]">
          <p className="text-[16px] text-[#1A1E26] leading-[150%] md:text-[24px] tracking-[-0.5px] text-nowrap ">
            Filter by Interest
          </p>
          <div className="flex gap-4 w-full overflow-auto md:gap-6 ">
            <button className=" h-10 px-5 bg-[#F2F6F4] border border-[#05422C] rounded-[100px] text-[#05422C] text-[14px] font-medium leading-[150%] text-nowrap  md:h-12 md:py-2  md:text-[16px]  ">
              Flowers
            </button>
            <button className=" h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap  md:h-12 md:text-[16px] ">
              Mushrooms
            </button>
            <button className="h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap  md:h-12 md:text-[16px] ">
              Concentrate
            </button>
            <button className="h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap  md:h-12 md:text-[16px] ">
              Edibles
            </button>
            <button className="h-10 px-5 py-2 bg-[#FFFFFF] border border-[#F4F4F4] rounded-[100px] text-[#46494F] text-[14px] leading-[150%] font-normal text-nowrap md:h-12 md:text-[16px] ">
              Shop All Weed
            </button>
          </div>
          <div>
            <Link
              href="/"
              className="text-button-green text-[16px] leading-[150%] text-nowrap underline hidden lg:block "
            >
              Show All
            </Link>
          </div>
        </div>
      </div>
      <div className="pr-6 w-full md:pr-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8">
        {products.slice(0, 4).map((product) => (
          <ProductsCard key={product.id} product={product} variant="grid" />
        ))}
      </div>
    </div>
  );
};

export default RecentlyAdded;
