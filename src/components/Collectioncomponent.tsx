import React from "react";
const Collectioncomponent = () => {
  return (
    <div className="h-[440px] bg-[#F6F6F6] flex items-center justify-evenly relative px-5">
      <div className="flex gap-[10px] flex-col">
        <h2 className="text-[32px] text-[#202533] font-[600]">
          Fresh Arrivals Online
        </h2>
        <p className="text-[#474B57] text-[14px] font-[400]">
          Discover Our Newest Collection Today.
        </p>
        <button className="bg-[#0E1422] mt-[50px] text-white rounded-[4px] w-[183px] px-[24px] py-[12px] flex flex-row items-center gap-[9px]">
          View Collection <img src="/rightvector.png" alt="" />
        </button>
      </div>
      <div className="flex items-end justify-end h-full relative">
        <img
          src="/Ellipse.png"
          alt="Ellipse"
          className="relative left-[45%] bottom-0 h-[340px]"
        />
        <img
          src="/Burst-pucker.png"
          alt="Burst"
          className="absolute right-[270px] top-[86px] w-[50px] h-[50px]"
        />
        <img
          src="/Hero Image.png"
          alt="Hero"
          className="relative z-10 w-[255px] h-[382px]"
        />
      </div>
    </div>
  );
};
export default Collectioncomponent;
