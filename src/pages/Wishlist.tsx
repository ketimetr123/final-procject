import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Wishlist = () => {
  return (
    <>
      <Discount />
      <Header />
      <div className="w-full h-[200px] bg-[#F6F6F6] flex px-[162px] py-[40px] flex-col items-start justify-evenly">
        {" "}
        <div className="max-w-[1116px] ">
          <h2 className="text-[32px] text-[#202533] font-[600]">My account</h2>
          <div className="flex gap-[10px] items-center flex-row">
            <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
            <img src="Chevron Right.png" alt="" />
            <span className="text-[#0E1422] text-[14px]">My account</span>
          </div>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1116px] flex items-center justify-evenly p-[50px] mx-auto">
          <div className="max-w-[212px]">
            <Link to="/Account">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Login
                <img src="/Logout.png" alt="" />
              </button>
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Orders
                <img src="/Icon.png" alt="" />
              </button>
            </Link>

            <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
              Wishlist
              <img src="/Heart.png" alt="" />
            </button>
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
          <div className="flex flex-col gap-[40px]">
            <h3>Wishlist</h3>
            <div className="flex flex-row items-center gap-[10px]">
              <img src="/ltl.png" alt="" />
              <div>
                <h3 className="text-[14px] ">Raw Black T-Shirt Lineup</h3>
                <div className="flex flex-row items-center gap-[5px] text-[#5C5F6A] text-[12px]">
                  <span>Color: </span>
                  <img src="/Circle.png" alt="" />
                  <img src="/—.png" alt="" />
                  <span>Size: M</span>
                </div>
              </div>
              <span className="ml-[30px]">$75.00</span>

              <button className="ml-[30px] border-2 border-[#0E1422] rounded-[4px] px-[24px] py-[12px] text-[#0E1422] text-[14px]">
                Add to cart
              </button>
            </div>
            <div className="flex flex-row items-center gap-[10px]">
              <img src="/wht.png" alt="" />
              <div>
                <h3 className="text-[14px] ">Raw Black T-Shirt Lineup</h3>
                <div className="flex flex-row items-center gap-[5px] text-[#5C5F6A] text-[12px]">
                  <span>Color: </span>
                  <img src="/Circle.png" alt="" />
                  <img src="/—.png" alt="" />
                  <span>Size: M</span>
                </div>
              </div>
              <span className="ml-[30px]">$75.00</span>

              <button className="ml-[30px] border-2 border-[#0E1422] rounded-[4px] px-[24px] py-[12px] text-[#0E1422] text-[14px]">
                Add to cart
              </button>
            </div>{" "}
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Wishlist;
