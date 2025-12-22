"use client";

import { useRef } from "react";

const Bottun = ({
  Children,
  classnames,
}: {
  Children: String;
  classnames: string;
}) => {
  const btnRef = useRef<HTMLButtonElement | null>(null);

  const handleMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!btnRef.current) return;

    const rect = btnRef.current.getBoundingClientRect();
    let x = e.clientX - rect.left;
    let y = e.clientY - rect.top;

    btnRef.current.style.setProperty("--x", `${x}px`);
    btnRef.current.style.setProperty("--y", `${y}px`);
  };


  return (
    <button
      ref={btnRef}
      onPointerEnter={handleMove}
      className={`relative overflow-hidden ${classnames} leading-[150%] font-Lexend text-white  rounded-[100px]  bg-button-green   font-medium transition-all duration-300 group text-nowrap w-auto max-w-full inline-flex items-center justify-center`}
    >
      <span className="relative z-10 group-hover:text-button-green transition-all duration-300">
        {Children}
      </span>
      <span
        className="absolute rounded-full bg-white w-0 h-0 transition-all duration-500 group-hover:w-[500px] group-hover:h-[500px] -translate-x-1/2 -translate-y-1/2 "
        style={{
          left: "var(--x)",
          top: "var(--y)",
        }}
      ></span>
    </button>
  );
};

export default Bottun;
