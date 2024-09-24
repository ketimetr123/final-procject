import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Afterpaymnet = () => {
  return (
    <>
      <Discount />
      <Header />
      <div className="h-[200px] bg-[#D5E5D7] flex px-[162px] py-[40px] flex-col items-start justify-evenly ">
        <div className="max-w-[1116px]">
          <h2 className="text-[32px] text-[#202533] font-[600]">
            Successful Order
          </h2>
          <div className="flex gap-[10px] items-center flex-row">
            <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
            <img src="Chevron Right.png" alt="" />
            <span className="text-[#0E1422] text-[14px]">Successful Order</span>
          </div>
        </div>
      </div>
      <div className="w-full flex flex-col justify-center text-center items-center mx-auto">
        <div className="max-w-[1116px] flex flex-col items-center">
          <img src="Illustration.png" alt="" />
          <h2 className="text-[#0E1422] text-[24px] font-[700]">
            Thank you for shopping
          </h2>
          <p className="text-[#5C5F6A] text-[14px]">
            Your order has been successfully placed and is now<br></br> being
            processed.
          </p>
          <Link to="/Account">
            <button className="bg-[#0E1422] mt-[50px] text-white rounded-[4px] w-[183px] pl-[12px] py-[12px] flex flex-row items-center gap-[9px]">
              Go to my account
              <img src="/rightvector.png" alt="" />
            </button>
          </Link>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Afterpaymnet;
