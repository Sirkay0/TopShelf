import Bottun from "./Bottun";

const HowToSection = () => {
  return (
    <div className="bg-[#01100B] -mt-[119px] md:-mt-44 pt-[183px] pb-16 md:pt-[296px] md:pb-28 w-full flex flex-col items-center">
      <div className="flex flex-col items-center gap-10 md:gap-[73px] w-[80%] ">
        <div className="flex flex-col gap-4 md:gap-6">
          <h2 className="text-[32px] leading-[120%] tracking-[-1.5px] font-semibold text-center text-white md:text-[64px] md:leading-[110%] md:tracking-[-4px] ">
            HOW TO ORDER WEED ONLINE FROM TOP SHELF BC - MAIL ORDER MARIJUANA
          </h2>
          <p className="text-[14px] leading-[150%] font-normal text-center text-[#9D9EA2] md:text-[16px] ">
            Ordering weed online from Top Shelf BC is easy. We are proud to have
            made the process accessible across multiple platforms and simple to
            understand, meaning that more people can come to us to buy their
            cannabis products online.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-x-6 gap-y-8">
          <div className="flex flex-col min-w-[159px] gap-4 items-center relative">
            <div className="flex justify-center items-center w-7 h-7 bg-[#F2BC1B] rounded-[100px] drop-shadow-sm absolute top-0 left-0 md:w-10 md:h-10 md:left-[20%]">
              <p className="text-[14px] leading-[150%] font-medium text-[#05422C] md:text-[16px]  ">
                1
              </p>
            </div>
            <img
              src="/assets/icons/register.svg"
              alt="Register"
              className="w-16 h-16 md:w-36 md:h-36"
            />
            <h2 className="text-[18px] leading-[150%] font-medium text-white md:text-[24px] md:tracking-[-0.5]">
              REGISTER
            </h2>
            <p className="text-[14px] font-normal leading-[150%] text-center text-[#9D9EA2] md:text-[16px] ">
              Sign up for an account with us. This is quick and simple. We don’t
              require any more details from you than the bare minimum needed for
              you to place an order and get your product delivered.
            </p>
          </div>
          <div className="flex flex-col min-w-[159px] gap-4 items-center relative">
            <div className="flex justify-center items-center w-7 h-7 bg-[#F2BC1B] rounded-[100px] drop-shadow-sm absolute top-0 left-0 md:w-10 md:h-10 md:left-[20%]">
              <p className="text-[14px] leading-[150%] font-medium text-[#05422C] md:text-[16px] ">
                2
              </p>
            </div>
            <img
              src="/assets/icons/shop-bag.svg"
              alt="Shop-bag"
              className="w-16 h-16 md:w-36 md:h-36"
            />
            <h2 className="text-[18px] leading-[150%] font-medium text-white md:text-[24px] md:tracking-[-0.5]">
              SHOP
            </h2>
            <p className="text-[14px] font-normal leading-[150%] text-center text-[#9D9EA2] md:text-[16px]">
              Decide on what you want to purchase. We stock a wide range of
              edibles,flowers , concentrates and mushrooms there is bound to be
              something for everyone.
            </p>
          </div>
          <div className="flex flex-col min-w-[159px] gap-4 items-center relative">
            <div className="flex justify-center items-center w-7 h-7 bg-[#F2BC1B] rounded-[100px] drop-shadow-sm absolute top-0 left-0 md:w-10 md:h-10 md:left-[20%]">
              <p className="text-[14px] leading-[150%] font-medium text-[#05422C] md:text-[16px]">
                3
              </p>
            </div>
            <img
              src="/assets/icons/wallet.svg"
              alt="Register"
              className="w-16 h-16 md:w-36 md:h-36"
            />
            <h2 className="text-[18px] leading-[150%] font-medium text-white md:text-[24px] md:tracking-[-0.5]">
              MAKE PAYMENT
            </h2>
            <p className="text-[14px] font-normal leading-[150%] text-center text-[#9D9EA2] md:text-[16px]">
              Pay securely. Our site boasts sturdy protection certificates to
              keep your card details and related data safe.
            </p>
          </div>
          <div className="flex flex-col min-w-[159px] gap-4 items-center relative">
            <div className="flex justify-center items-center w-7 h-7 bg-[#F2BC1B] rounded-[100px] drop-shadow-sm absolute top-0 left-0 md:w-10 md:h-10 md:left-[20%]">
              <p className="text-[14px] leading-[150%] font-medium text-[#05422C] md:text-[16px]">
                4
              </p>
            </div>
            <img
              src="/assets/icons/checked.svg"
              alt="Register"
              className="w-16 h-16 md:w-36 md:h-36"
            />
            <h2 className="text-[18px] leading-[150%] font-medium text-white md:text-[24px] md:tracking-[-0.5]">
              RELAX
            </h2>
            <p className="text-[14px] font-normal leading-[150%] text-center text-[#9D9EA2] md:text-[16px]">
              Your product will be packaged discretely and shipped by Canada
              Post Xpresspost. We will provide you with a tracking number so
              then you can follow your mail order marijuana every step of the
              way.
            </p>
          </div>
        </div>
        <Bottun Children="Refer Here" classnames="text-[16px] md:text-[18px] px-10 py-4 md:py-6  md:px-11"/>
      </div>
    </div>
  );
};

export default HowToSection;
