import React from "react";
const Shipping = () => {
  return (
    <div className="flex flex-row justify-center items-cente mx-auto w-[1192px] gap-[54px] mt-[88px]">
      <div className="w-[328px]">
        <img src="/Icon Box.png" alt="" />
        <h4 className="text-[#202533] text-[16px] font-[600] mt-[20px]">
          Free shipping
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[20px] ">
          Upgrade your style today and get FREE shipping on all orders! Don't
          miss out.
        </p>
      </div>
      <div className="w-[328px]">
        <img src="/star.png" alt="" />
        <h4 className="text-[#202533] text-[16px] font-[600] mt-[20px]">
          Satisfaction Guarantee
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[20px] ">
          Shop confidently with our Satisfaction Guarantee: Love it or get a
          refund.
        </p>
      </div>
      <div className="w-[328px]">
        <img src="/checkicon.png" alt="" />
        <h4 className="text-[#202533] text-[16px] font-[600] mt-[20px]">
          Secure Payment
        </h4>
        <p className="text-[#5C5F6A] text-[14px] mt-[20px] ">
          Your security is our priority. Your payments are secure with us.
        </p>
      </div>
    </div>
  );
};
export default Shipping;
