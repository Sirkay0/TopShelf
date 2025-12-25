import ProductsCard from "@/components/ProductsCard";
import Image from "next/image";
import { products } from "../../../../product";

const CategoryDetail = () => {
  return (
    <>
      <div className="mt-[177px]  px-6 pt-6 ">
        <div className="flex flex-col gap-10">
          <div className="flex flex-col gap-4 w-full items-start">
            <div className="w-full h-[342px] flex items-center justify-center border border-[#F4F4F4] rounded-2xl relative">
              <div className="relative w-60 aspect-square">
                <Image
                  src="/assets/images/purple-weed.png"
                  alt="Purple weed"
                  fill
                  className="object-cover"
                />
              </div>
              <button className="absolute right-4 bottom-4 w-8 h-8 flex items-center justify-center bg-white rounded-[100px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)]">
                <div className="relative aspect-square h-4">
                  <Image
                    src="/assets/icons/export.svg"
                    alt="Full Sreen Icon"
                    fill
                  />
                </div>
              </button>
            </div>
            <div className="flex flex-wrap gap-4 items-start w-full">
              <div className="w-14 h-14 flex items-center justify-center border border-button-green rounded-lg">
                <div className="relative w-10 aspect-square">
                  <Image
                    src="/assets/images/purple-weed.png"
                    alt="Purple weed"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-14 h-14 flex items-center justify-center  rounded-lg">
                <div className="relative w-10 aspect-square">
                  <Image
                    src="/assets/images/purple-weed.png"
                    alt="Purple weed"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-14 h-14 flex items-center justify-center  rounded-lg">
                <div className="relative w-10 aspect-square">
                  <Image
                    src="/assets/images/purple-weed.png"
                    alt="Purple weed"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
              <div className="w-14 h-14 flex items-center justify-center  rounded-lg">
                <div className="relative w-10 aspect-square">
                  <Image
                    src="/assets/images/purple-weed.png"
                    alt="Purple weed"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-5">
            <div className="flex flex-col gap-3 items-start">
              <h2 className="text-[#9D9EA2] text-[12px] leading-[150%] tracking-[2px] ">
                CONCENTRATES
              </h2>
              <p className="text-[#060709] text-[20px] font-medium leading-[150%] text-left ">
                Mix And Match Shatter/Budder 28g (4 X 7G)
              </p>
              <div className="flex gap-2 items-center ">
                <div className="bg-[#F2F6F4] rounded-sm px-2.5 pt-1 pb-[5px] ">
                  <p className="text-[12px] leading-[150%] text-[#05422C] ">
                    Indica
                  </p>
                </div>
                <div className="bg-[#F2F6F4] rounded-sm px-2.5 pt-1 pb-[5px] ">
                  <p className="text-[12px] leading-[150%] text-[#05422C] ">
                    Sativa 100%
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 items-center">
                  <p className="text-[14px] leading-[150%] text-[#9D9EA2] line-through">
                    $200.00
                  </p>
                  <p className="text-[16px] font-medium leading-[150%] text-[#EB2606]">
                    $120.00
                  </p>
                </div>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1.5 items-center ">
                    <img
                      src="/assets/icons/star.svg"
                      alt="Star"
                      className="w-3.5 h-3.5"
                    />
                    <p className="text-[14px] leading-[150%] text-[#060709] ">
                      4.6/5
                    </p>
                  </div>
                  <div className="h-3 w-px bg-[#C8C9CB] "></div>
                  <div className="flex gap-1.5 items-center">
                    <p className="text-[14px] leading-[150%] text-[#060709] ">
                      135
                    </p>
                    <p className="text-[12px] leading-[150%] text-[#9D9EA2]">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5 rounded-xl border border-[#F4F4F4] ">
              <div className="flex items-start  gap-4">
                <div>
                  <div className="relative aspect-square w-8">
                    <Image
                      src="/assets/icons/colorfilter.svg"
                      alt="Carbon Smoke Icon"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[12px] font-light leading-[150%] tracking-[1px] text-[#717378] ">
                    EFFECTS
                  </h2>
                  <p className="text-[14px] leading-[150%] text-[#060709] text-left ">
                    Calming, Creative, Happy, Relaxing, Sleepy, Uplifting
                  </p>
                </div>
              </div>
              <div className="flex items-start  gap-4">
                <div>
                  <div className="relative aspect-square w-8">
                    <Image
                      src="/assets/icons/mdi_brain-freeze-outline.svg"
                      alt="Brain Icon"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[12px] font-light leading-[150%] tracking-[1px] text-[#717378] ">
                    MAY RELIEVE
                  </h2>
                  <p className="text-[14px] leading-[150%] text-[#060709] text-left ">
                    Anxiety, Arthritis, Chronic Pain, Depression, Fatigue,
                    Inflammation, Insomnia, Irregular Bowel Movements,
                    Migraines, Mood Swings
                  </p>
                </div>
              </div>
              <div className="flex items-start  gap-4">
                <div>
                  <div className="relative aspect-square w-8">
                    <Image
                      src="/assets/icons/carbon_smoke.svg"
                      alt="Carbon Smoke Icon"
                      fill
                      className="object-cover "
                    />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <h2 className="text-[12px] font-light leading-[150%] tracking-[1px] text-[#717378] ">
                    AROMAS
                  </h2>
                  <p className="text-[14px] leading-[150%] text-[#060709] text-left ">
                    Chemical, Citrus, Earthy, Pungent, Sour
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-6 border-b border-[#F4F4F4]">
              <h2 className="text-[#717378] text-[12px] leading-[150%] tracking-[1px] font-light text-left ">
                DESCRIPTION
              </h2>
              <p className="text-[#46494F] text-[14px] leading-[150%] text-left ">
                Jungle Diamonds is a slightly indica dominant hybrid strain (60%
                indica/40% sativa) created through crossing the infamous
                Slurricane X Gorilla Glue #4 strains.
              </p>
            </div>
            <div className="flex flex-col gap-4">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-2">
                  <h2>WEIGHT</h2>
                  <div className="flex gap-4 items-center ">
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F3FBF4] border border-button-green rounded-sm text-[#060709] text-[12px] leading-[150%] ">
                      28g
                    </button>
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F4F4F4] border border-[#F4F4F4] rounded-sm text-[#060709] text-[12px] leading-[150%] ">
                      1/2lb
                    </button>
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F4F4F4] border border-[#F4F4F4] rounded-sm text-[#060709] text-[12px] leading-[150%] ">
                      1/4lb
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start">
                  <h2>Add Integra Pack</h2>
                  <div className="flex gap-8">
                    <div className="flex gap-2.5 items-center">
                      <div className="relative aspect-square w-[22px]">
                        <Image
                          src="/assets/icons/box.svg"
                          alt="Carbon Smoke Icon"
                          fill
                          className="object-cover "
                        />
                      </div>
                      <p className="text-[14px] leading-[150%] text-[#060709] ">
                        4g (+$2.00)
                      </p>
                    </div>
                    <div className="flex gap-2.5 items-center">
                      <div className="relative aspect-square w-[22px]">
                        <Image
                          src="/assets/icons/box.svg"
                          alt="Carbon Smoke Icon"
                          fill
                          className="object-cover "
                        />
                      </div>
                      <p className="text-[14px] leading-[150%] text-[#060709] ">
                        8g (+$3.00)
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3.5 pt-1 pb-[5px] rounded-[100px] bg-[#FEF8E8]">
                <p className="text-[14px] text-[#46494F] leading-[150%] ">
                  Purchase this product now and earn{" "}
                  <span className="text-[#EB2606]">80</span> Points!
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-6 p-5 rounded-2xl border border-[#F4F4F4]">
              <div className="flex flex-col gap-3">
                <div className="flex  w-full justify-between">
                  <div className="flex  gap-4">
                    <h2 className="text-[#46494F] leading-[150%] text-[14px]">
                      Khalifa Kush (AAAA)
                    </h2>
                    <p className="text-[#9D9EA2] text-[14px] leadiing-[150%]">
                      2x
                    </p>
                  </div>
                  <div>
                    <p className="text-[#060709] text-[14px] leading-[150%] ">
                      $120.00
                    </p>
                  </div>
                </div>
                <div className="flex w-full justify-between">
                  <h2 className="text-[#46494F] leading-[150%] text-[14px]">
                    Add Integra Pack - 4g
                  </h2>
                  <p className="text-[#060709] text-[14px] leading-[150%] ">
                    $2.00
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 py-5 border-t border-[#F4F4F4] border-b items-start">
                <div className="flex gap-4 py-1.5 pl-2 pr-4 rounded-[10px] border border-[#F4F4F4] items-center">
                  <div className="flex gap-2 ">
                    <button className="p-2.5 rounded-sm">
                      <div className="relative aspect-square w-4">
                        <Image
                          src="/assets/icons/minus.svg"
                          alt="Minus Icon"
                          fill
                          className="object-cover "
                        />
                      </div>
                    </button>
                    <div className="rounded-sm bg-[#F4F4F4] text-[12px] leading-[150%] text-[#060709] px-[14.5px] py-[9px]">
                      2
                    </div>
                    <button className="p-2.5 rounded-sm">
                      <div className="relative aspect-square w-4">
                        <Image
                          src="/assets/icons/add.svg"
                          alt="Minus Icon"
                          fill
                          className="object-cover "
                        />
                      </div>
                    </button>
                  </div>
                  <div className="h-5 w-px bg-[#F4F4F4] "></div>
                  <p className="text-[12px] leading-[150%] text-button-green">
                    In Stock
                  </p>
                </div>
                <button className="bg-button-green px-6 py-[14.5px] rounded-[100px] flex gap-4 items-center">
                  <p className="text-[14px] font-medium leading-[150%] text-white ">
                    Add to Cart
                  </p>
                  <div className="h-3 w-px bg-white "></div>
                  <p className="text-[14px] text-white leading-[150%] font-medium ">
                    $242.00
                  </p>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-3 items-start">
              <div className="flex items-center gap-2">
                <div className="relative aspect-square w-4">
                  <Image
                    src="/assets/icons/tick-circle.svg"
                    alt="Tick"
                    fill
                    className="object-cover "
                  />
                </div>
                <p className="text-[12px] leading-[150%] text-left text-[#46494F] ">
                  Free Xpress Shipping on orders over{" "}
                  <span className="text-[#F2BC1B]">$149</span>
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative aspect-square w-4">
                  <Image
                    src="/assets/icons/tick-circle.svg"
                    alt="Tick"
                    fill
                    className="object-cover "
                  />
                </div>
                <p className="text-[12px] leading-[150%] text-left text-[#46494F] ">
                  Order before 12:00pm for same day dispatch
                </p>
              </div>
              <div className="flex items-center gap-2">
                <div className="relative aspect-square w-4">
                  <Image
                    src="/assets/icons/tick-circle.svg"
                    alt="Tick"
                    fill
                    className="object-cover "
                  />
                </div>
                <p className="text-[12px] leading-[150%] text-left text-[#46494F] ">
                  Support & ordering open 7 day a week
                </p>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4 border-t border-[#F4F4F4] items-start ">
              <div className="flex gap-3 items-center">
                <p className="text-[12px] leadind-[150%] tracking-[1px] text-[#717378] w-[92px] ">
                  SKU
                </p>
                <p className="text-[12px] leadind-[150%] tracking-[1px] text-[#717378]">
                  :
                </p>
                <p className="text-[#060709] leading-[150%] text-[14px] text-left ">
                  N/A
                </p>
              </div>
              <div className="flex gap-3 items-center">
                <p className="text-[12px] leadind-[150%] tracking-[1px] text-[#717378] w-[92px] ">
                  Categories
                </p>
                <p className="text-[12px] leadind-[150%] tracking-[1px] text-[#717378]">
                  :
                </p>
                <p className="text-button-green leading-[150%] text-[14px] text-left ">
                  AAAA Weed, Indica
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-px bg-[#C8C9CB] my-8"></div>
        <div className="flex flex-col gap-5 w-full">
          <div className="flex gap-3 pb-5 w-full">
            <button className="px-5 rounded-[100px] bg-[#F2F6F4] border border-[#05422C] py-[7px] text-[12px] leading-[150%] font-medium text-[#05422C] w-full ">
              Description
            </button>
            <button className="px-5 rounded-[100px] bg-white border border-[#F4F4F4] py-[7px] text-[12px] leading-[150%] font-medium flex gap-2 items-center w-full">
              <p className="text-[#46494F]">Reviews</p>
              <p className="text-[#9D9EA2]">(350)</p>
            </button>
            <button className="px-5 rounded-[100px] bg-white border border-[#F4F4F4] py-[7px] text-[12px] leading-[150%] font-medium flex gap-2 items-center text-[#46494F] w-full">
              Refer a Friend
            </button>
          </div>
          <div className="flex flex-col gap-4 items-start">
            <p className="text-[14px] leading-[150%] text-left text-[#46494F] ">
              Jungle Diamonds is a slightly indica dominant hybrid strain (60%
              indica/40% sativa) created through crossing the infamous
              Slurricane X Gorilla Glue #4 strains. Named for its gorgeous
              appearance and breeder, Jungle Diamonds is a favorite of indica
              and hybrid lovers alike thanks to its delicious taste and tingly,
              arousing high. Jungle Diamonds buds have sparkling oversized
              spade-shaped olive green nugs with vivid amber hairs and a thick
              frosty blanket of glittering tiny blue-tinted white crystal
              trichomes. As you pull apart each sticky little nugget, aromas of
              spicy mocha coffee and fruity herbs are released.{" "}
            </p>
            <p className="text-[14px] leading-[150%] text-left text-[#46494F] ">
              The flavor is of sweet chocolate with hints of fresh ripe berries
              to it, too. The Jungle Diamonds high is just as delicious, with
              happy effects that will boost the spirits and kick negative
              thoughts and moods to the curb. You’ll feel a tingly sense in your
              body from start to finish that serves to remove any aches or pains
              while leaving you pretty aroused at times. This is accompanied by
              a blissfully unfocused heady lift that leaves your head in the
              clouds without causing sedation. With these effects and its pretty
              high 17-24% THC level, Jungle Diamonds is ideal for experienced
              patients with chronic pain, cramps or muscle spasms and appetite
              loss or nausea.
            </p>
          </div>
        </div>
      </div>
      <div className="mb-[232px] px-6">
        <div className="w-full h-px bg-[#C8C9CB] my-8"></div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[20px] leading-[150%] text-left text-[#1A1E26]">Featured Product</h2>
          <div className="pr-6 w-full md:pr-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8">
        {products.slice(0,4).map((product) => (
          <ProductsCard key={product.id} product={product} variant="grid" />
        ))}
      </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
