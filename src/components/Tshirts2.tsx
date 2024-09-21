import React from "react";
const Tshirts2 = () => {
  return (
    <div className="flex flex-col justify-center items-center w-[1092px] mx-auto mt-[120px]">
      <div className="flex gap-[20px] text-[#5C5F6A] text-[14px] font-[400]">
        <button className=" hover:outline hover:outline-2 hover:outline-[#E9E9EB] hover:duration-150 rounded-full px-[16px] py-[2px]">
          Featured
        </button>

        <button className=" hover:outline hover:outline-2 hover:outline-[#E9E9EB] hover:duration-150 rounded-full px-[16px] py-[2px]">
          Latest
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[50px] mt-[120px]">
        <div>
          <img src="/longsleevs.png" className="h-[306px]" alt="" />
          <p className="mt-[15px]">Classic Monochrome Tees</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$35.00</span>
          </div>
        </div>

        <div>
          <img src="/black2sleeves.png" alt="" />
          <p className="mt-[15px]">Monochromatic Wardrobe</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$57.00</span>
          </div>
        </div>
        <div>
          <img src="/black22.png" alt="" />
          <p className="mt-[15px]">Essential Neutrals</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$22.00</span>
          </div>
        </div>
        <div>
          <img src="/mockup2.png" alt="" />
          <p className="mt-[15px]">UTRAANET Black</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$43.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tshirts2;
