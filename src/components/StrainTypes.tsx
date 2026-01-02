import Link from "next/link";

const StrainTypes = () => {
  return (
    <section className="w-full flex flex-col items-center pb-16 md:pb-[120px] ">
      <div className="w-[80%] pt-16 border-t border-[#717378] grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-8 ">
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8  border border-[#F4F4F4]">
          <div className="flex flex-col items-center justify-center rounded-lg h-[164px] md:h-60 bg-[#F2F6F4] ">
            <img
              src="/assets/icons/indica.svg"
              alt="Indica Logo"
              className="w-[98.5px] md:w-[90px] h-[100px] "
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-[24px] text-[#1A1E26] leading-[150%] tracking-[-0.5px] text-left font-medium md:text-[32px] md:leading-[120%] md:tracking-[-1.5px] md:font-semibold ">
              Indica
            </h2>
            <p className="text-[14px] text-[#717378] leading-[150%] text-left md:text-[14px] ">
              This type of cannabis is commonly taken by those who want to sink
              into a state of total relaxation in every limb. This reduces
              stress overall and can take your worries and fatigue away. Because
              of its relaxing effects, it is suggested to use this type of
              cannabis at night. It is particularly recommended for people who
              have trouble sleeping, be it due to insomnia, pain or other
              associated sleep issues.
            </p>
          </div>
          <Link
            href="/"
            className="text-button-green text-[14px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
          >
            Shop Indica
          </Link>
        </div>
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8  border border-[#F4F4F4]">
          <div className="flex flex-col items-center justify-center rounded-lg h-[164px] md:h-60 bg-[#F2F6F4] ">
            <img
              src="/assets/icons/sativa.svg"
              alt="Indica Logo"
              className="w-[98.5px] md:w-[90px] h-[100px] "
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-[24px] text-[#1A1E26] leading-[150%] tracking-[-0.5px] text-left font-medium md:text-[32px] md:leading-[120%] md:tracking-[-1.5px] md:font-semibold ">
              Sativa
            </h2>
            <p className="text-[14px] text-[#717378] leading-[150%] text-left md:text-[14px] ">
              Contrary to the deep all-body relaxation that comes with the use
              of indica strains, sativas are known for increasing the feeling of
              creativity, enhancing focus and lessening anxiety. This is more of
              a mind-centered high in terms of how and where you will feel the
              effects. Given its stimulating nature, it is recommended to use
              this during the day.
            </p>
          </div>
          <Link
            href="/"
            className="text-button-green text-[14px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
          >
            Shop Sativa
          </Link>
        </div>
        <div className="flex flex-col gap-6 p-6 md:gap-8 md:p-8  border border-[#F4F4F4]">
          <div className="flex flex-col items-center justify-center rounded-lg h-[164px] md:h-60 bg-[#F2F6F4] ">
            <img
              src="/assets/icons/hybrid.svg"
              alt="Indica Logo"
              className="w-[98.5px] md:w-[90px] h-[100px] "
            />
          </div>
          <div className="flex flex-col gap-4 items-start">
            <h2 className="text-[24px] text-[#1A1E26] leading-[150%] tracking-[-0.5px] text-left font-medium md:text-[32px] md:leading-[120%] md:tracking-[-1.5px] md:font-semibold ">
              Hybrids
            </h2>
            <p className="text-[14px] text-[#717378] leading-[150%] text-left md:text-[14px] ">
              Hybrid strains are just that – they combine the head-focused high
              effects of sativas with the bodily relaxation of indicas. This is
              ideal for people who really want to sooth any fatigue and worries
              while also clearing the mind ready to focus fresh on something
              new. Hybrids are expertly tailored to result in strains with
              specific effects. Useful strain vocabulary to familiarize yourself
              with when it comes to hybrids includes sativa-dominant (full,
              bodily relaxation), indica-dominant (boosting creativity,
              increasing mood and lessening anxiety) and balanced (the best of
              both worlds).
            </p>
          </div>
          <Link
            href="/"
            className="text-button-green text-[14px] leading-[150%] text-nowrap underline text-left md:text-[16px] cursor-pointer"
          >
            Shop Hybrids
          </Link>
        </div>
      </div>
    </section>
  );
};

export default StrainTypes;
