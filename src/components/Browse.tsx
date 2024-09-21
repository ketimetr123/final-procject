import React from "react";
const Browse: any = () => {
  return (
    <div className="h-[304px] bg-[#F6F6F6] flex items-center justify-evenly mt-[120px] ">
      <div className="flex gap-[10px] flex-col">
        <h2 className="text-[32px] text-[#202533] font-[600]">
          Browse Our Fashion Paradise!{" "}
        </h2>
        <p className="text-[#474B57] text-[14px] font-[400]">
          Step into a world of style and explore our diverse collection of
          clothing categories.
        </p>
        <button className="bg-[#0E1422] mt-[50px] text-white rounded-[4px] w-[183px] px-[24px] py-[12px] flex flex-row items-center gap-[9px]">
          Start Browsing
          <img src="/rightvector.png" alt="" />
        </button>
      </div>
      <div>
        <img className="h-[311px]" src="/Category Image.png" alt="" />
      </div>
    </div>
  );
};
export default Browse;
