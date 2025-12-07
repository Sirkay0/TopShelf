import { Testimonial } from "../../testimonials";

const TestimonialCard = ({ testimonial }: { testimonial: Testimonial }) => {
  const { name, avatar, rating, text, date } = testimonial;

  return (
    <div className="flex flex-col justify-between p-6 rounded-2xl bg-white border border-[#F4F4F4] min-w-[300px] h-[424px]">
      <div className="flex flex-col gap-8">
        <div className="w-full flex gap-4 items-center">
          <img src={avatar} alt="Avatar" className="w-9 h-9" />
          <p className="text-[16px] leading-[150%] text-left text-[#1A1E26] text-nowrap ">
            {name}
          </p>
        </div>
        <div className="border border-[#C8C9CB] "></div>
        <div className="flex flex-col gap-4">
          <img
            src={`/assets/icons/${rating}-star.svg`}
            alt=""
            className="w-24 h-4 "
          />
          <p className="text-[16px] font-normal leading-[150%] text-left text-[#1A1E26] ">
            {text}
          </p>
        </div>
      </div>
      <h2 className="text-[14px] leading-[150%] font-light text-left text-[#9D9EA2] text-nowrap ">
        {date}
      </h2>
    </div>
  );
};

export default TestimonialCard;
