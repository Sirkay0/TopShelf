"use client";

import Image from "next/image";
import { useState } from "react";

const ImageGallery = ({ productImg }: { productImg: string }) => {
  const Images = [
    `${productImg}`,
    "/assets/images/green-apple-weed.png",
    "/assets/images/brown-weed.png",
    "/assets/images/black-weed.png",
  ];

  const [activeImage, setActiveImage] = useState<string>(Images[0]);
  const [open, setOpen] = useState<boolean>(false);

  return (
    <div className='flex flex-col gap-4 md:gap-6 md:items-center w-full md:w-1/2 items-start'>
      <div className="w-full h-[342px] md:h-[520px] flex items-center justify-center border border-[#F4F4F4] rounded-2xl relative">
        <div className="relative w-60 md:w-100 aspect-square">
          <Image
            src={activeImage}
            alt="Product Image"
            fill
            className="object-cover"
          />
        </div>
        <button className="absolute right-4 bottom-4 md:right-6 md:bottom-6 w-8 h-8 md:w-10 md:h-10 flex items-center justify-center bg-white rounded-[100px] drop-shadow-[0_10px_20px_rgba(0,0,0,0.5)] cursor-pointer">
          <div className="relative aspect-square h-4 md:h-5">
            <Image src="/assets/icons/export.svg" alt="Full Screen Icon" fill />
          </div>
        </button>
      </div>
      <div className="flex flex-wrap gap-4 items-start w-full md:justify-center">
        {Images.map((image, index) => (
          <div
            key={index}
            onClick={() => setActiveImage(image)}
            className={`w-14 h-14  md:w-16 md:h-16 bg-[#F4F4F4] flex items-center justify-center rounded-lg cursor-pointer
                ${activeImage === image ? "border border-button-green" : null}
                `}
          >
            <div className="relative h-10 md:h-12 aspect-square">
              <Image
                src={image}
                alt="Product Image Thumbnail"
                fill
                className="object-cover"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
