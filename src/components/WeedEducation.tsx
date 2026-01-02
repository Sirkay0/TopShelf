import Link from "next/link";

const WeedEducation = () => {
  return (
    <section className="pt-16 pb-[270px] flex justify-center bg-[#F4F4F4] ">
      <div className="w-[80%] flex flex-col gap-8 md:gap-16">
        <div className="pb-6 border-b border-b-[#C8C9CB] ">
          <div className="flex justify-between items-center">
            <h2 className="text-[#1A1E26] text-[24px] leading-[150%] tracking-[-0.5px] font-medium text-left">
              WEED EDUCATION
            </h2>
            <Link
              href="/"
              className="text-button-green text-[14px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
            >
              Show All
            </Link>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-6 gap-x-8">
          <div className="flex flex-col gap-6 ">
            <div className="">
              <img src="/assets/images/post1.png" alt="" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-light leading-[150%] text-[#717378] text-left">
                  January 24, 2023
                </p>
                <h2 className="text-[24px] leading-[150%] font-medium tracking-[-0.5px] text-[#1A1E26] text-left ">
                  12 Mistakes To Avoid When Buying Cannabis Online
                </h2>
                <p className="text-[16px] leading-[150%] text-left text-[#717378] ">
                  Buying cannabis online can be a great way to get your hands on
                  the products you need without leaving the comfort of your
                  home. But …
                </p>
              </div>
              <Link
                href="/"
                className="text-button-green text-[16px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="">
              <img src="/assets/images/post2.png" alt="" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-light leading-[150%] text-[#717378] text-left">
                  January 20, 2023
                </p>
                <h2 className="text-[24px] leading-[150%] font-medium tracking-[-0.5px] text-[#1A1E26] text-left ">
                  How To Store Cannabis and Keep it Fresh and Potent?
                </h2>
                <p className="text-[16px] leading-[150%] text-left text-[#717378] ">
                  Cannabis packaging has advanced dramatically in recent years,
                  whether your state has a medicinal marijuana programme, legal
                  adult-use weed, or both. Most ...
                </p>
              </div>
              <Link
                href="/"
                className="text-button-green text-[16px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
          <div className="flex flex-col gap-6 ">
            <div className="">
              <img src="/assets/images/post3.png" alt="" />
            </div>
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <p className="text-[14px] font-light leading-[150%] text-[#717378] text-left">
                  January 19, 2023
                </p>
                <h2 className="text-[24px] leading-[150%] font-medium tracking-[-0.5px] text-[#1A1E26] text-left ">
                  The Ultimate Guide to Checking the Quality of Cannabis – 10
                  Industry Leading Tips
                </h2>
                <p className="text-[16px] leading-[150%] text-left text-[#717378] ">
                  Quality cannabis is a term used to describe cannabis products
                  that meet specific standards of excellence. It is essential to
                  understand what quality cannabis means, …
                </p>
              </div>
              <Link
                href="/"
                className="text-button-green text-[16px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
              >
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WeedEducation;
