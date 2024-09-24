import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const Checkout = () => {
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
      <div className="max-w-[1116px] p-[20px] grid grid-flow-col auto-cols-max  items-center justify-center mx-auto gap-[50px]">
        <form
          action=""
          className="max-w-[534px] text-[#474B57] flex flex-col gap-[20px] text-[14px]"
        >
          <div className="mb-[20px]">
            <h3 className="text-[#0E1422] text-[14px] font-[600]">
              Shipping Address
            </h3>
          </div>
          <label htmlFor="">Street Address</label>
          <input
            type="text"
            className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
          />
          <div className="flex flex-row gap-[16px]">
            <div>
              <label htmlFor="">City</label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
              <label htmlFor="" className="mt-[20px]">
                Zip Code
              </label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
              <label htmlFor="">Email</label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
            </div>
            <div>
              <label htmlFor="">State</label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
              <label htmlFor="">Country</label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
              <label htmlFor="">Full name</label>
              <input
                type="text"
                className="w-full border-2 border-[#E6E7E8] rounded-[6px] px-[15px] py-[10px]"
              />
            </div>
          </div>
        </form>
        <div className="w-[1px] h-[490px] bg-[#E6E7E8]"></div>
        <div className="w-[504px] h-[430px] flex flex-col justify-evenly p-[20px] ">
          <h3 className="text-[#0E1422] text-[16px] font-[600]">Your Order</h3>
          <div className="flex flex-row items-center justify-between">
            <div className="flex flex-row gap-[10px]">
              <img src="/whitecir.png" alt="" />
              <img src="/browncir.png" alt="" />
              <img src="/blackcir.png" alt="" />
            </div>
            <button className="border-2 border-[#B6B7BC] rounded-[4px] text-[#5C5F6A] text-[14px] px-[24px] py-[12px]">
              Edit cart
            </button>
          </div>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col text-[#5C5F6A] text-[14px] gap-[15px]">
              <span>Subtotal</span>
              <span>Shipping</span>
              <span>Tax</span>
            </div>
            <div className="flex flex-col text-[14px] gap-[15px]">
              <span>$90.00</span>
              <span>FREE</span>
              <span>$3.00</span>
            </div>
          </div>
          <div className="w-full bg-[#E6E7E8] h-[1px] mx-auto"></div>
          <div className="flex flex-row justify-between">
            <span>Total</span>
            <span>$100.00</span>
          </div>
          <Link to="/Afterpayment">
            {" "}
            <button className="w-full bg-[#0E1422] px-[24px] py-[12px] text-white rounded-[4px]">
              Place Order
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Checkout;
