import React from "react";
const Subscribe: any = () => {
  return (
    <div className="h-[200px] bg-[#F6F6F6] flex items-center justify-evenly mt-[120px] ">
      <div className="flex gap-[10px] flex-col">
        <h2 className="text-[32px] text-[#202533] font-[600]">
          Join Our Newsletter
        </h2>
        <p className="text-[#474B57] text-[14px] font-[400]">
          We love to surprise our subscribers with occasional gifts.
        </p>
      </div>
      <div>
        <input
          className="border-2 text-[#878A92] border-[#E6E7E8] py-[10px] px-[15px] w-[320px] rounded-[6px]"
          type="text"
          placeholder="Your email address"
        />
        <button className="bg-[#0E1422] w-[116px] py-[12px] px-[23px] text-white rounded-[6px] ml-[16px]">
          Subscribe
        </button>
      </div>
    </div>
  );
};
export default Subscribe;
