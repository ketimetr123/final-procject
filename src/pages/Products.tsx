import React, { useState } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Field, Radio, RadioGroup } from "@headlessui/react";
import type { RootState } from "../redux/store";
import { useSelector, useDispatch } from "react-redux";
import { decrement, increment } from "../redux/app/counterSlice";

const Products = () => {
  const plans = ["#A3BEF8", "#FFD58A", "#83B18B"];
  let [selected, setSelected] = useState(plans[0]);
  const size = ["S", "M", "X", "XL", "XXL"];
  let [selected1, setSelected1] = useState(size[0]);
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <>
      <Discount />
      <Header />
      <div className="flex flex-row justify-center">
        <span>Ecommerce</span>
        <img src="" alt="" />
        <span>Black man t-shirt</span>
      </div>
      <div className="flex flex-row items-center justify-evenly p-[20px]">
        <Carousel
          className="w-[500px] h-[574px]"
          showArrows={true}
          showThumbs={false}
          showStatus={false}
        >
          <div>
            <img src="/black.png" alt="" />
          </div>
          <div>
            <img src="slide2.jpg" alt="Slide 2" />
          </div>
          <div>
            <img src="slide3.jpg" alt="Slide 3" />
          </div>
        </Carousel>
        <div className="flex flex-col items-star justify-between gap-[20px]">
          <h1 className="text-[#0E1422] text-[24px] font-[700]">
            Raw Black T-Shirt Lineup
          </h1>
          <div className="flex flex-row gap-[10px]">
            <span className="bg-[#F6F6F6] border-2 text-[#5C5F6A] border-[#F6F6F6] rounded-full px-[16px] py-[2px] flex flex-row">
              <img src="/Star2.png" alt="" />
              4.2 — 54 Reviews
            </span>
            <span className="border-2 flex items-center text-[#5C5F6A] text-[12px] px-[16px] py-[2px] border-[#F6F6F6] rounded-full">
              IN STOCK
            </span>
          </div>
          <h4 className="text-[#0E1422] text-[18px] font-[600]">$75.00</h4>
          <p className="text-[#5C5F6A] text-[12px]">Available Colors</p>

          <RadioGroup
            value={selected}
            onChange={setSelected}
            className="flex flex-row gap-[10px]"
            aria-label="T-Shirt color"
          >
            {plans.map((color) => (
              <Field key={color} className="flex  items-center gap-2">
                <Radio
                  value={color}
                  className="appearance-none w-8 h-8 rounded-full cursor-pointer"
                  style={{
                    backgroundColor: color, // Set the background color
                    border:
                      selected === color ? `1px solid ` : `1px solid ${color} `, // Highlight selected color
                  }}
                >
                  <span className="invisible" />
                </Radio>
              </Field>
            ))}
          </RadioGroup>
          <p className="text-[#5C5F6A] text-[12px]">Select Size</p>
          <RadioGroup
            value={selected1}
            onChange={setSelected1}
            className="flex flex-row gap-[10px]"
            aria-label="T-Shirt size"
          >
            {size.map((size) => (
              <Field key={size} className="flex items-center gap-2">
                <Radio
                  value={size}
                  className="appearance-none w-8 h-8 border-1 text-[#5C5F6A] text-[12px] border-[#E6E7E8] rounded-[4px] cursor-pointer flex items-center justify-center"
                  style={{
                    border:
                      selected1 === size ? `2px solid blue` : `2px solid gray`,
                    backgroundColor:
                      selected1 === size ? `lightblue` : `transparent`,
                  }}
                >
                  <span className="text-center">{size}</span>{" "}
                </Radio>
              </Field>
            ))}
          </RadioGroup>
          <p className="text-[#5C5F6A] text-[12px]">QUANTITY</p>
          <div className="w-[164px]">
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
            <div className="flex w-[320px] flex-row gap-[10px]">
              <button className="w-[284px] bg-[#0E1422] text-white rounded-[4px] text-center px-[24px] py-[12px]">
                Add to cart
              </button>
              <img src="/Whishlist.png" alt="" />
            </div>
            <p className="text-[#5C5F6A] text-[12px]">
              — Free shipping on orders $100+
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Products;
