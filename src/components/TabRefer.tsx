import Image from "next/image"
import Bottun from "./Bottun"

const TabRefer = () => {
  return (
    <div className="flex flex-col gap-5 p-5 rounded-2xl border border-[#F4F4F4] md:gap-6 md:p-6">
        <div className="flex flex-col gap-3 md:gap-4 ">
          <h2 className="text-[#060709] text-[18px] leading-[150%] text-left md:text-[20px] ">
            Referral Program
          </h2>
          <p className="text-[14px] leading-[150%] text-left text-[#717378] md:text-[16px] ">
            Absolutely love TopShelfBC; affordable on any budget and such fast
            delivery, straight to my door! I recommend them to all my friends
            and family for their 420 needs.
          </p>
        </div>
        <div className="w-full h-px bg-[#F4F4F4] "></div>
        <div className="flex flex-col gap-5 w-full md:gap-6 ">
          <div className="flex w-full gap-4 p-4 rounded-xl bg-[#F3FBF4]">
            <div className="w-0.5 self-stretch rounded-[10px] bg-[#EB2606]"></div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-[#46494F] text-[14px] leading-[150%] font-light text-left ">
                Your Referral URL
              </h2>
              <p className="text-[16px] text-[#060709] text-left leading-[150%]  ">
                Referral code is available only to users with at least one
                order.
              </p>
            </div>
            <div className="self-center">
              <button className="flex items-center justify-center bg-white h-10 w-10 rounded-[100px] cursor-pointer">
                <div className="relative h-[18px] aspect-square">
                  <Image
                    src="/assets/icons/copy.svg"
                    alt="Copy"
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="flex w-full gap-4 p-4 rounded-xl bg-[#F3FBF4]">
            <div className="w-0.5 self-stretch rounded-[10px] bg-[#EB2606]"></div>
            <div className="flex flex-col gap-2 w-full">
              <h2 className="text-[#46494F] text-[14px] leading-[150%] font-light text-left ">
                Your Coupon Code to share
              </h2>
              <p className="text-[16px] text-[#060709] text-left leading-[150%]  ">
                Referral code is available only to users with at least one
                order.
              </p>
            </div>
            <div className="self-center">
              <button className="flex items-center justify-center bg-white h-10 w-10 rounded-[100px] cursor-pointer">
                <div className="relative h-[18px] aspect-square">
                  <Image
                    src="/assets/icons/copy.svg"
                    alt="Copy"
                    fill
                    className="object-cover"
                  />
                </div>
              </button>
            </div>
          </div>

          <div className="h-px w-full bg-[#F4F4F4]"></div>

          <div className="flex flex-col gap-3 md:flex-row md:gap-6 md:w-full ">
            <div className="flex gap-3 p-3 rounded-[14px] border border-[#F4F4F4] items-center md:flex-col md:p-5 md:gap-4 md:w-full ">
              <div className="relative h-[26px] aspect-square md:h-12">
                <Image
                  src="/assets/icons/facebook.svg"
                  alt="Copy"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#46494F] text-[14px] leading-[150%] text-left md:text-center">
                Share Via Facebook
              </p>
            </div>
            <div className="flex gap-3 p-3 rounded-[14px] border border-[#F4F4F4] items-center md:flex-col md:p-5 md:gap-4 md:w-full">
              <div className="relative h-[26px] aspect-square md:h-12">
                <Image
                  src="/assets/icons/twitter.svg"
                  alt="Copy"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#46494F] text-[14px] leading-[150%] text-left md:text-center">
                Share Via Twitter
              </p>
            </div>
            <div className="flex gap-3 p-3 rounded-[14px] border border-[#F4F4F4] items-center md:flex-col md:p-5 md:gap-4 md:w-full">
              <div className="relative h-[26px] aspect-square md:h-12">
                <Image
                  src="/assets/icons/whatsapp.svg"
                  alt="Copy"
                  fill
                  className="object-cover"
                />
              </div>
              <p className="text-[#46494F] text-[14px] leading-[150%] text-left md:text-center">
                Share Via Whatsapp
              </p>
            </div>
          </div>

          <div>
            <p className="text-[#C8C9CB] text-[14px] text-center leading-[150%] md:text-[16px]">
              Or share via email
            </p>
          </div>

          <div className="flex flex-col gap-5 md:gap-4">
            <div className="flex flex-col gap-2 md:flex-row md:gap-6 ">
              <div className="flex flex-col gap-2 md:w-[40%]">
                <h2 className="text-[#46494F] text-[14px] leading-[150%] text-left">
                  Email
                </h2>
                <input
                  type="email"
                  name=""
                  id=""
                  className="px-4 py-[13.5px] rounded-lg border border-[#F4F4F4] text-[#C8C9CB] text-[14px] leading-[150%] text-left w-full "
                  placeholder="Enter your email"
                />
              </div>
              <div className="flex gap-4 w-full md:w-[60%] md:gap-6">
                <div className="flex flex-col gap-2 w-full">
                  <h2 className="text-[#46494F] text-[14px] leading-[150%] text-left ">
                    Name
                  </h2>
                  <input
                    type="text"
                    name=""
                    id=""
                    className="px-4 py-[13.5px] rounded-lg border border-[#F4F4F4] text-[#C8C9CB] text-[14px] leading-[150%] text-left w-full "
                    placeholder="Enter your Name"
                  />
                </div>
                <div className="self-end">
                  <button className="flex items-center justify-center bg-[#F3FBF4] h-12 w-12 rounded-[100px] border border-[#F3FBF4] cursor-pointer">
                    <div className="relative h-[26px] aspect-square">
                      <Image
                        src="/assets/icons/add-green.svg"
                        alt="Copy"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </button>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-2 md:gap-6 md:flex-row md:w-[80%] ">
              <h2 className="px-4 py-[13.5px] rounded-lg border border-[#F4F4F4] text-[14px] leading-[150%] text-left text-[#1A1E26] md:w-1/2">
                johndoe@example.com
              </h2>
              <h2 className="px-4 py-[13.5px] rounded-lg border border-[#F4F4F4] text-[14px] leading-[150%] text-left text-[#1A1E26] md:w-1/2">
                John Doe
              </h2>
            </div>
          </div>
          <Bottun Children="Send Emails" classnames="px-10 font-medium text-[16px] leading-[150%] py-4 self-start" />
        </div>
      </div>
  )
}

export default TabRefer
