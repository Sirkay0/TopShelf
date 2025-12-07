const Manifest = () => {
  return (
    <section className="bg-[#F2F6F4] py-16 px-6 flex flex-col gap-8 lg:flex-row md:px-16 md:py-20 ">
      <div className="flex gap-6 items-start">
        <div className="bg-white min-w-16 h-16 flex justify-center items-center  p-2 rounded-[100%] md:min-w-[100px] md:h-[100px]">
          <img
            src="/assets/icons/truck-fast.svg"
            alt="truck-icon"
            className="w-9 h-9 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[#1A1E26] text-[20px] leading-[150%] font-medium md:text-[24px] md:tracking-[-0.5px]">
            Reliable Shipping
          </h2>
          <p className="text-[#717378] font-normal text-[14px] leading-[150%] md:text-[16px]">
            Green Society provides Canada Post Xpress Shipping right to your
            doorstep! You can also opt in for shipping insurance. For orders
            over $149, shipping is free!
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-start">
        <div className="bg-white min-w-16 h-16 flex justify-center items-center  p-2 rounded-[100%] md:min-w-[100px] md:h-[100px]">
          <img
            src="/assets/icons/safe-home.svg"
            alt="truck-icon"
            className="w-9 h-9 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[#1A1E26] text-[20px] leading-[150%] font-medium md:text-[24px] md:tracking-[-0.5px]">
            You’re Safe With Us
          </h2>
          <p className="text-[#717378] font-normal text-[14px] leading-[150%] md:text-[16px]">
            Our secure payment system accepts the most common forms of payments
            making the checkout process quicker! The payments we accept are
            debit, all major credit cards, and cryptocurrency.
          </p>
        </div>
      </div>
      <div className="flex gap-6 items-start">
        <div className="bg-white min-w-16 h-16 flex justify-center items-center  p-2 rounded-[100%] md:min-w-[100px] md:h-[100px]">
          <img
            src="/assets/icons/coin.svg"
            alt="truck-icon"
            className="w-9 h-9 md:w-14 md:h-14"
          />
        </div>
        <div className="flex flex-col gap-3 md:gap-4">
          <h2 className="text-[#1A1E26] text-[20px] leading-[150%] font-medium md:text-[24px] md:tracking-[-0.5px]">
            Best Quality & Pricing
          </h2>
          <p className="text-[#717378] font-normal text-[14px] leading-[150%] md:text-[16px]">
            Here at Green Society, we take pride in the quality of our products
            and service. Our prices are set to ensure you receive your
            medication at a reasonable price and safely
          </p>
        </div>
      </div>
    </section>
  );
};

export default Manifest;
