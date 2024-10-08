import React from "react";
import { Link } from "react-router-dom";
const Similarproducts = () => {
  return (
    <div className="flex flex-col justify-center items-start w-[1092px] mx-auto mt-[120px]">
      <div>
        <h6 className="text-[#0E1422] text-[24px] font-[700]">
          {" "}
          You might also like
        </h6>
        <h2 className="text-[#AAAAAA] text-[12px] ">Similar products</h2>
      </div>
      <div className="grid grid-cols-4 gap-[50px] mt-[70px]">
        <div>
          <Link to="/Products">
            {" "}
            <img src="/black.png" className="h-[306px]" alt="" />
          </Link>

          <p className="mt-[15px]">Classic Monochrome Tees</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$35.00</span>
          </div>
        </div>

        <div>
          <img src="/brown.png" alt="" />
          <p className="mt-[15px]">Monochromatic Wardrobe</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$27.00</span>
          </div>
        </div>
        <div>
          <img src="/white.png" alt="" />
          <p className="mt-[15px]">Essential Neutrals</p>
          <div className="mt-[20px]">
            <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
              In stock
            </span>
            <span className="text-[#474B57] ml-[15px]">$22.00</span>
          </div>
        </div>
        <div>
          <img src="/ultra.png" alt="" />
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
export default Similarproducts;
