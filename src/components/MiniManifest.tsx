import Image from "next/image";
import TruckIcon from "../../public/assets/icons/truck-fast.svg";
import SafeHome from "../../public/assets/icons/safe-home.svg";
import Coins from "../../public/assets/icons/coin.svg";

const MiniManifest = () => {
  return (
    <section className=" mt-43 bg-[#F2F6F4] px-6 py-4 md:py-6 md:px-16">
      <div className="flex gap-5 md:gap-8 md:items-center ">
        <div className="flex flex-col  gap-2  items-start md:flex-row md:gap-4 md:items-center w-full">
          <div className="bg-white p-2 rounded-[100px]">
            <div className="relative aspect-square w-[18px] md:w-[26px] rounded-[100px] ">
              <Image
                src={TruckIcon}
                alt="Truck-Icon"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
          <h2 className="text-[#1A1E26] text-[14px] leading-[150%] text-left md:text-[20px] ">
            Reliable Shipping
          </h2>
        </div>
        <div className="w-px h-6 bg-[#C3D2CC]"></div>
        <div className="flex flex-col gap-2 items-start md:flex-row md:gap-4 md:items-center w-full">
          <div className="bg-white p-2 rounded-[100px]">
            <div className="relative aspect-square w-[18px] md:w-[26px] rounded-[100px] ">
              <Image
                src={SafeHome}
                alt="Truck-Icon"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
          <h2 className="text-[#1A1E26] text-[14px] leading-[150%] text-left md:text-[20px] ">
            You’re Safe With Us
          </h2>
        </div>
        <div className="w-px h-6 bg-[#C3D2CC]"></div>
        <div className="flex flex-col gap-2 items-start md:flex-row md:gap-4 md:items-center w-full">
          <div className="bg-white p-2 rounded-[100px]">
            <div className="relative aspect-square w-[18px] md:w-[26px] rounded-[100px] ">
              <Image
                src={Coins}
                alt="Truck-Icon"
                fill
                className="object-cover"
              ></Image>
            </div>
          </div>
          <h2 className="text-[#1A1E26] text-[14px] leading-[150%] text-left md:text-[20px] ">
            Best Quality & Pricing
          </h2>
        </div>
      </div>
    </section>
  );
};

export default MiniManifest;
