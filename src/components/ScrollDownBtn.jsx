"use client";
import { TiArrowSortedDown } from "react-icons/ti";
const ScrollDownBtn = () => {

  return (
    <div
      className="flex items-base gap-5 absolute bottom-10"
    >
      <p className="text-xs tracking-[7px] opacity-50 md:text-sm md:tracking-[20px]">Scroll</p>
      <TiArrowSortedDown className="text-xl md:text-2xl animate-bounce" />
      <p className="text-xs tracking-[7px] opacity-50 md:text-sm md:tracking-[20px]">Down</p>
    </div>
  );
};

export default ScrollDownBtn;
