import Bottun from "./Bottun";

const ReavelCoupon = () => {
  return (
    <div className="w-full flex items-center justify-center -mt-44 md:-mt-52 z-20 bg-[#F4F4F4]">
      <div className="w-[80%] bg-[#05422C] p-6 flex flex-col gap-1 md:p-16 md:gap-8 rounded-3xl">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-[32px] font-semibold leading-[120%] tracking-[-1.5px] text-white md:text-[64px] md:leading-[110%] md:tracking-[-4px] text-left">
            UNLOCK 20% OFF YOUR FIRST ORDER
          </h2>
          <p className="text-[14px] leading-[150%] text-left text-[#C3D2CC] md:text-[20px] md:leading-[150%] ">
            Reveal coupon code by entering your email
          </p>
        </div>
        <div className="h-px bg-[#346654]  "></div>
        <form action="" className="flex flex-col gap-4 md:flex-row md:gap-8  ">
          <input
            type="email"
            name=""
            id=""
            placeholder="Email Address"
            className="py-4 px-6 rounded-[100px] border border-[#346654] text-[16px] leading-[150%] text-left md:px-11 md:py-6 w-full"
          />
          <Bottun Children="Refer Here" classnames="text-[16px] md:text-[18px] px-10 py-4 md:py-6  md:px-11"/>
        </form>
      </div>
    </div>
  );
};

export default ReavelCoupon;
