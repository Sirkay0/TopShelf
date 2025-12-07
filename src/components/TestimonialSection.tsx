import Carousel from "./Carousel";
import { testimonials } from "../../testimonials";
import TestimonialCard from "./TestimonialCard";

const TestimonialSection = () => {
  return (
    <section className=" flex flex-col gap-8  px-6 items-center md:pr-0 md:pl-[60px] md:gap-16 lg:pl-[120px] pb-16 md:pb-40 ">
      <h1 className="text-[32px] leading-[120%] tracking-[-1.5px] font-semibold text-center text-[#1A1E26] w-full pr-6 md:pr-[60px] lg:pr-[120px]">
        CUSTOMER TESTIMONIALS
      </h1>
      <div className="flex flex-col gap-8 items-center w-full md:flex-row md:grid md:grid-cols-[minmax(0,379px)_minmax(0,1fr)]">
        <div className="flex flex-col bg-secondary w-[342] md:min-w-[342px] gap-8 p-6 rounded-2xl md:h-[424px] md:p-10 ">
          <h2 className="text-[24px] leading-[150%] tracking-[-0.5px] font-medium text-left text-white md:text-[32px] md:font-semibold md:leading-[120%] md:tracking-[-1.5px] ">
            VOTED BEST ONLINE DISPENSARY IN CANADA
          </h2>
          <hr className="border border-[#346654] " />
          <div className="flex flex-col gap-8">
            <div className="w-[101px] h-8 ">
              <img
                src="/assets/icons/google-logo.svg"
                alt="Google"
                className="w-full"
              />
            </div>
            <div className="flex flex-col gap-4">
              <p className="text-[16px] font-normal leading-[150%] text-left text-white ">
                EXELLENCET
              </p>
              <div className="flex gap-5 items-center">
                <img src="/assets/icons/5-star.svg" alt="" />
                <div className="border border-[#648A7C] h-3 "></div>
                <p className="text-[16px] leading-[150%] font-normal text-left text-white text-nowrap ">
                  on 135 <span className="text-[#648A7C]">Reviews</span>
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-full">
        <Carousel>
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </Carousel>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSection;
