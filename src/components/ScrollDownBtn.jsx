"use client";
import { TiArrowSortedDown } from "react-icons/ti";
const ScrollDownBtn = () => {

  return (
    <div
      className="mt-20 flex items-base gap-5"
    >
      <p className="text-sm tracking-[20px]">Scroll</p>
      <TiArrowSortedDown className="text-2xl animate-bounce" />
      <p className="text-sm tracking-[20px]">Down</p>
    </div>
  );
};

export default ScrollDownBtn;
