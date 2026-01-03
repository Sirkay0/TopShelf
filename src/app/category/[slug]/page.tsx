import ProductsCard from "@/components/ProductsCard";
import Image from "next/image";
import { Product, products } from "../../../../product";
import ImageGallery from "@/components/ImageGallery";
import TabSection from "@/components/TabSection";
import Addup from "@/components/Addup";

const CategoryDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;

  const getProductDetails = async (slug: string): Promise<Product> => {
    const foundProduct = products.find((product) => product.slug === slug);

    if (!foundProduct) {
      throw new Error(`Product ${slug} is not available`);
    }

    return foundProduct;
  };

  const product = await getProductDetails(slug);
  return (
    <>
      <div className="mt-[177px] px-6 md:px-16 pt-6 md:pt-10 ">
        <div className="flex flex-col gap-10 md:gap-24 md:flex-row">
          <ImageGallery productImg={product.image} />
          <div className="flex flex-col gap-5 md:w-1/2">
            <div className="flex flex-col gap-3 md:gap-4 items-start">
              <h2 className="text-[#9D9EA2] text-[12px] leading-[150%] tracking-[2px] md:text-[14px]  ">
                {product.category}
              </h2>
              <p className="text-[#060709] text-[20px] md:text-[32px] md:font-semibold font-medium leading-[150%] text-left md:tracking-[-1.5px] ">
                {product.title}
              </p>
              <div className="flex gap-2 md:gap-4 items-center ">
                <div className="bg-[#F2F6F4] rounded-sm px-2.5 pt-1 pb-[5px] md:rounded-lg md:px-4">
                  <p className="text-[12px] leading-[150%] text-[#05422C] ">
                    Indica
                  </p>
                </div>
                <div className="bg-[#F2F6F4] rounded-sm px-2.5 pt-1 pb-[5px] md:rounded-lg md:px-4 ">
                  <p className="text-[12px] leading-[150%] text-[#05422C] ">
                    {product.strainType}
                  </p>
                </div>
              </div>
              <div className="flex justify-between items-center w-full">
                <div className="flex gap-2 md:gap-3 items-center">
                  {product.oldPrice ? (
                    <p className="text-[14px] leading-[150%] text-[#9D9EA2] line-through md:text-[16px] ">
                      {`$${product.oldPrice}`}
                    </p>
                  ) : (
                    ""
                  )}
                  <p className="text-[16px] font-medium leading-[150%] text-[#EB2606] md:text-[20px]">
                    {`$${product.price}`}
                  </p>
                </div>
                <div className="flex gap-3 items-center md:gap-4">
                  <div className="flex gap-1.5 items-center ">
                    <img
                      src="/assets/icons/star-filled.svg"
                      alt="Star"
                      className="w-3.5 h-3.5 md:w-4 md:h-4"
                    />
                    <p className="text-[14px] leading-[150%] text-[#060709] md:text-[16px]  ">
                      {product.rating}/5
                    </p>
                  </div>
                  <div className="h-3 w-px bg-[#C8C9CB] "></div>
                  <div className="flex gap-1.5 items-center">
                    <p className="text-[14px] leading-[150%] text-[#060709] md:text-[16px] ">
                      {product.reviews}
                    </p>
                    <p className="text-[12px] leading-[150%] text-[#9D9EA2] md:text-[14px] ">
                      Reviews
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-5 p-5 rounded-xl border border-[#F4F4F4] md:px-6 ">
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
                <div className="flex flex-col gap-1.5 md:gap-2">
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
                <div className="flex flex-col gap-1.5 md:gap-2">
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
                <div className="flex flex-col gap-1.5 md:gap-2">
                  <h2 className="text-[12px] font-light leading-[150%] tracking-[1px] text-[#717378] ">
                    AROMAS
                  </h2>
                  <p className="text-[14px] leading-[150%] text-[#060709] text-left ">
                    Chemical, Citrus, Earthy, Pungent, Sour
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-2 pb-6 border-b border-[#F4F4F4] md:gap-3 ">
              <h2 className="text-[#717378] text-[12px] leading-[150%] tracking-[1px] font-light text-left ">
                DESCRIPTION
              </h2>
              <p className="text-[#46494F] text-[14px] leading-[150%] text-left ">
                Jungle Diamonds is a slightly indica dominant hybrid strain (60%
                indica/40% sativa) created through crossing the infamous
                Slurricane X Gorilla Glue #4 strains.
              </p>
            </div>
            <div className="flex flex-col gap-4 md:gap-6 md:items-start">
              <div className="flex flex-col gap-6 md:flex-row md:w-full">
                <div className="flex flex-col gap-2 w-full md:gap-3 md:w-1/2">
                  <h2 className="text-[#717378] text-[12px] leading-[150%] tracking-[1px] font-light ">
                    WEIGHT
                  </h2>
                  <div className="flex gap-4 items-center ">
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F3FBF4] border border-button-green rounded-sm text-[#060709] text-[12px] leading-[150%] cursor-pointer">
                      {product.sizes[0]}
                    </button>
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F4F4F4] border border-[#F4F4F4] rounded-sm text-[#060709] text-[12px] leading-[150%] cursor-pointer ">
                      {product.sizes[1]}
                    </button>
                    <button className="px-3.5 pt-1 pb-[5px] bg-[#F4F4F4] border border-[#F4F4F4] rounded-sm text-[#060709] text-[12px] leading-[150%] cursor-pointer ">
                      {product.sizes[2]}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2 items-start w-full md:gap-3 md:w-1/2">
                  <h2 className="text-[#717378] text-[12px] leading-[150%] tracking-[1px] font-light ">
                    Add Integra Pack
                  </h2>
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
                      <p className="text-[14px] leading-[150%] text-[#060709] text-nowrap ">
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
                      <p className="text-[14px] leading-[150%] text-[#060709] text-nowrap ">
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
            <div className="flex flex-col gap-6 p-5 rounded-2xl border border-[#F4F4F4] md:p-6">
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
              <div className="flex flex-col gap-4 py-5 border-t border-[#F4F4F4] border-b items-start md:flex-row md:justify-between">
                <div className="flex gap-4 py-1.5 pl-2 pr-4 rounded-[10px] border border-[#F4F4F4] items-center md:px-4 md:py-2.5">
                  <Addup />
                  <div className="h-5 w-px bg-[#F4F4F4] "></div>
                  <p
                    className={`text-[12px] leading-[150%] ${
                      product.inStock
                        ? "text-button-green"
                        : "text-[#EB2606] line-through"
                    }`}
                  >
                    In Stock
                  </p>
                </div>
                <button className="bg-button-green px-6 py-[14.5px] rounded-[100px] flex gap-4 items-center md:px-8 md:py-4 cursor-pointer">
                  <p className="text-[14px] font-medium leading-[150%] text-white md:text-[16px] ">
                    Add to Cart
                  </p>
                  <div className="h-3 w-px bg-white "></div>
                  <p className="text-[14px] text-white leading-[150%] font-medium md:text-[16px] ">
                    {`$${product.price}`}
                  </p>
                </button>
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
                  <p className="text-[12px] leading-[150%] text-left text-[#46494F] md:text-[14px] ">
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
                  <p className="text-[12px] leading-[150%] text-left text-[#46494F] md:text-[14px]">
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
                  <p className="text-[12px] leading-[150%] text-left text-[#46494F] md:text-[14px]">
                    Support & ordering open 7 day a week
                  </p>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-3 pt-4 border-t border-[#F4F4F4] items-start md:pt-6 md:gap-6 md:flex-row md:w-full">
              <div className="flex gap-3 items-center md:w-1/2 md:items-start">
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
              <div className="flex gap-3 items-center md:w-1/2 md:items-start">
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
            <div className="w-full h-px bg-[#C8C9CB] my-8 md:my-10"></div>
            <TabSection />
          </div>
        </div>
      </div>
      <div className="mb-[232px] px-6">
        <div className="w-full h-px bg-[#C8C9CB] my-8"></div>
        <div className="flex flex-col gap-6">
          <h2 className="text-[20px] leading-[150%] text-left text-[#1A1E26] md:text-[24px]">
            Featured Product
          </h2>
          <div className="pr-6 w-full md:pr-0 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 md:gap-x-8 gap-y-8">
            {products.slice(0, 4).map((product) => (
              <ProductsCard key={product.id} product={product} variant="grid" />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default CategoryDetail;
