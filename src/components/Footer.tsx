const Footer = () => {
  return (
    <footer className="-mt-[180px] md:-mt-[250px] pb-16 bg-linear-to-b from-[#1A1E26] to-[#01100B] pt-60 md:pt-[380px] flex justify-center w-full">
      <div className="w-[80%] flex flex-col gap-16   ">
        <div className="flex flex-col gap-8 lg:flex-row">
          <div className="flex flex-col gap-6 lg:min-w-[276px]">
            <img
              src="/assets/images/white-logo.svg"
              alt="Topshelf Logo"
              className="w-[173px] h-[42px] "
            />
            <p className="text-[16px] leading-[150%] text-left text-[#9D9EA2] ">
              #1 Canadian top rated online dispensary that meets the customers
              needs in every single medical marijuana aspect. The team here at
              TopShelfBC is heavily involved in the Canadian cannabis industry
              for over 15 years. We strive to provide the top quality products,
              service and care at the lowest prices you’ll ever find.
            </p>
          </div>
          <div className="flex flex-col gap-10">
            <div className="flex flex-col gap-6">
              <h2 className="text-[20px] leading-[150%] font-medium text-left text-white ">
                QUICK LINK
              </h2>
              <div className="flex gap-8 text-[14px] leading-[150%] text-[#9D9EA2]  ">
                <div className="flex flex-col gap-4 w-1/2">
                  <p>Track Your Order</p>
                  <p>Shop All</p>
                  <p>Flower</p>
                  <p>Edibles</p>
                  <p>Concentrates</p>
                  <p>Refunds</p>
                </div>
                <div className="flex flex-col gap-4 ">
                  <p>Mushrooms</p>
                  <p>Promotions / Bundles</p>
                  <p>Support</p>
                  <p>Rewards</p>
                  <p>Blog</p>
                  <p>Shipping Faq</p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-6">
              <h2 className="text-[20px] font-medium leading-[150%] text-left text-white ">
                CONTACT US
              </h2>
              <p className="text-[14px] leading-[150%] text-left text-[#9D9EA2] ">
                info@topshelfbc.cc
              </p>
            </div>
            <div className="flex flex-col gap-6 ">
              <h2 className="text-[20px] font-medium leading-[150%] text-left text-white ">
                MORE
              </h2>
              <div className="flex flex-col gap-4 text-[14px] leading-[150%] text-[#9D9EA2] text-nowrap max-[310px]:text-wrap md:flex-row md:gap-8 ">
                <div className="flex flex-col gap-4 w-1/2">
                  <p>Buy weed online in Canada</p>
                  <p>Buy weed online in New Brunswick</p>
                  <p>Buy weed online in Prince Edward Island</p>
                  <p>Buy weed online in Northwest Territories</p>
                  <p>Buy weed online in Saskatchewan</p>
                </div> 
                <div className="flex flex-col gap-4">
                  <p>Buy weed online in Manitoba</p>
                  <p>Buy weed online in Quitebec</p>
                  <p>Buy weed online in British Columbia</p>
                  <p>Buy weed online in Ontario</p>
                  <p>Buy weed online in Alberta</p>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <div>
                <img src="/assets/images/mastercard.svg" alt="" />
              </div>
              <div>
                <img src="/assets/images/visa.svg" alt="" />
              </div>
              <div>
                <img src="/assets/images/bitcoin.svg" alt="" />
              </div>
              <div>
                <img src="/assets/images/interac.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-10 border-t border-t-[#46494F] pt-10 md:flex-row md:justify-between">
          <div className="flex gap-4 text-[14px] leading-[150%] text-left text-[#9D9EA2] order-2">
            <p>Out Of Stock</p>
            <p>Privacy Policy</p>
            <p>Terms & Conditions</p>
          </div>
          <p className="text-[#717378] text-[16px] leading-[150%] text-left order-1">
            © 2025 Top Shelf BC. All Rights Reserved.{" "}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
