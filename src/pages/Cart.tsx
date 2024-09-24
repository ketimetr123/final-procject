import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/app/counterSlice";
import { Link } from "react-router-dom";

const Cart = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <>
      {" "}
      <Discount />
      <Header />
      <div className="h-[200px] bg-[#F6F6F6] flex px-[162px] py-[40px] flex-col items-start justify-evenly ">
        <h2 className="text-[32px] text-[#202533] font-[600]">Cart</h2>
        <div className="flex gap-[10px] items-center flex-row">
          <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
          <img src="Chevron Right.png" alt="" />
          <span className="text-[#0E1422] text-[14px]">Cart</span>
        </div>
      </div>
      <div className="flex flex-row items-center gap-[70px] py-[30px] justify-center">
        <div className="flex flex-col gap-[30px]">
          <h3>Your cart</h3>
          <div className="w-[570px] h-[1px] bg-[#E9E9EB]"></div>
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
            <span className="ml-[100px]">$75.00</span>
            <div className="w-[107px]">
              <div className="flex flex-row gap-[15px]  items-center	align-middle justify-evenly	 border-2 border-[#E6E7E8] rounded-[4px] text-[20px] text-center">
                <button
                  className="text-[14px] text-[#202533]"
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  <img src="/Add.png" alt="" />
                </button>
                <span>{count}</span>
                <button
                  className="text-[14px] text-[#202533]"
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  <img src="/plus.png" alt="" />
                </button>
              </div>
            </div>
            <button>
              <img src="/Remove.png" alt="" />
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
            <span className="ml-[100px]">$75.00</span>
            <div className="w-[107px]">
              <div className="flex flex-row gap-[15px]  items-center	align-middle justify-evenly	 border-2 border-[#E6E7E8] rounded-[4px] text-[20px] text-center">
                <button
                  className="text-[14px] text-[#202533]"
                  aria-label="Increment value"
                  onClick={() => dispatch(increment())}
                >
                  <img src="/Add.png" alt="" />
                </button>
                <span>{count}</span>
                <button
                  className="text-[14px] text-[#202533]"
                  aria-label="Decrement value"
                  onClick={() => dispatch(decrement())}
                >
                  <img src="/plus.png" alt="" />
                </button>
              </div>
            </div>
            <button>
              <img src="/Remove.png" alt="" />
            </button>
          </div>
        </div>

        <div className="w-[341px] h-[430px] flex flex-col justify-evenly p-[20px] border-2 border-[#E6E7E8] rounded-[4px]">
          <h3 className="text-[#0E1422] text-[16px] font-[600]">
            Order Summary
          </h3>
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
          <Link to="/Checkout">
            {" "}
            <button className="w-full bg-[#0E1422] px-[24px] py-[12px] text-white rounded-[4px]">
              Checkout
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Cart;
