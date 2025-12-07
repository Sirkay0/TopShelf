const Hero = () => {
  return (
    <section className="mt-35 md:mt-40 bg-[url(/assets/images/mobile-bg-cover.png)] md:bg-[url(/assets/images/desktop-bg-cover.png)] h-[820px] w-full bg-cover bg-no-repeat bg-bottom ">
      <div className="flex flex-col items-start  py-25 px-6 gap-10 md:gap-[102px] justify-center md:w-4/7">
        <div className="flex flex-col gap-3.5 md:gap-4 justify-center">
          <p className="text-[#F2BC1B] text-sm font-bold tracking-[4px] le md:text-base">
            BEST SELLER
          </p>
          <h1 className="text-white text-[32px] leading-[110%] md:text-[64px] font-semibold tracking-[-1.5px] md:tracking-[-4px]">
            BEST DISPENSARY TO BUY WEED ONLINE
          </h1>
          <p className="text-[#F4F4F4] font-normal text-[16px] leading-[150%] md:text-[24px] md:tracking-[-0.5px] md:mt-2">
            Vitamins & Supplements
          </p>
        </div>
        <div className="flex flex-col gap-6 md:gap-10 items-start">
          <div className="flex text-white">
            <p className="border-r border-[#9D9EA2] pr-5 text-[18px] leading-[150%]   font-normal md:text-2xl">
              Get 25% off
            </p>
            <p className="pl-5 text-[18px] leading-[150%] md:text-[24px] md:tracking-[-0.5px] font-normal">
              Free Shipping
            </p>
          </div>
          <button className="text-[18px] leading-[150%] font-Lexend text-white px-10 w-36 h-14 md:w-[185px] md:h-16 md:px-14 rounded-4xl  bg-button-green text-nowrap">
            Shop All
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
