import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Password = () => {
  return (
    <>
      {" "}
      <Discount />
      <Header />
      <div className="h-[200px] bg-[#F6F6F6] flex px-[162px] py-[40px] flex-col items-start justify-evenly ">
        <h2 className="text-[32px] text-[#202533] font-[600]">Checkout</h2>
        <div className="flex gap-[10px] items-center flex-row">
          <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
          <img src="Chevron Right.png" alt="" />
          <span className="text-[#0E1422] text-[14px]">Checkout</span>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1116px] flex items-center justify-evenly p-[50px] mx-auto">
          <div className="max-w-[212px]">
          <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
              Login
              <img src="/Logout.png" alt="" />
            </button>
            <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
              Orders
              <img src="/Icon.png" alt="" />
            </button>
            <Link to="/Wishlist">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Wishlist
                <img src="/Heart.png" alt="" />
              </button>
            </Link>
            <Link to="/Address">
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Address
                <img src="/Delivery.png" alt="" />
              </button>
            </Link>
            <Link to="/Password">
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Password
                <img src="/Key.png" alt="" />
              </button>
            </Link>

            <Link to="/Accountdetails">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Account
                <img src="/head.png" alt="" />
              </button>
            </Link>
            <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
              Logout
              <img src="/Logout.png" alt="" />
            </button>
          </div>
          <div className="w-[1px] h-[490px] bg-[#E6E7E8]"></div>
          <form
            action=""
            className="max-w-[534px] text-[#474B57] flex flex-col gap-[20px] text-[14px]"
          >
            <div className="mb-[20px]">
              <h3 className="text-[#0E1422] text-[14px] font-[600]">
                Change Password
              </h3>
            </div>

            <div className="flex flex-row gap-[16px]">
              <div>
                <label htmlFor="">New password</label>
                <input
                  type="password"
                  className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
                />
                <label htmlFor="" className="mt-[20px]">
                  Confirm password
                </label>
                <input
                  type="password"
                  className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
                />
              </div>
            </div>
            <button className="bg-[#0E1422] px-[24px] py-[12px] rounded-[4px] text-white">
              Change password
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Password;
