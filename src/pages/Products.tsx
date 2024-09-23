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
import Similarproducts from "../components/Similarproducts";
import Subscribe from "../components/Subscribe";

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
      <div className="flex w-[1092px] mx-auto mr-[210px] mt-[50px] items-center flex-row justify-start">
        <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
        <img src="Chevron Right.png" alt="" />
        <span className="text-[#0E1422] text-[14px]">Black man t-shirt</span>
      </div>
      <div className="flex flex-row items-stretch  justify-center gap-[160px] p-[20px]">
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
            <img src="/black.png" alt="" />
          </div>
          <div>
            <img src="/black.png" alt="" />
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
                    backgroundColor: color,
                    border:
                      selected === color ? `1px solid ` : `1px solid ${color} `,
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
            <div className="flex w-[320px] mt-[50px] flex-row gap-[10px]">
              <button className="w-[284px]  bg-[#0E1422] text-white rounded-[4px] text-center px-[24px] py-[12px]">
                Add to cart
              </button>
              <img src="/Whishlist.png" alt="" />
            </div>
            <p className="text-[#5C5F6A] text-[12px] mt-[15px]">
              — Free shipping on orders $100+
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[50px] mt-[100px]">
        <div className="text-[#5C5F6A] mt-[50px]">
          <button className="flex flex-row gap-[10px]">
            <img src="/More.png" alt="" />
            Details
          </button>
          <button className="flex flex-row gap-[10px] mt-[10px] ">
            <img src="/Empty Star.png" alt="" />
            Reviews
          </button>
        </div>
        <div className="text-[#5C5F6A] w-[727px] ml-[50px] flex flex-col gap-[20px] ">
          <h3 className="text-[#0E1422] font-[600] text-[16px]">Detail</h3>
          <p>
            Elevate your everyday style with our Men's Black T-Shirts, the
            ultimate wardrobe essential for modern men. Crafted with meticulous
            attention to detail and designed for comfort, these versatile black
            tees are a must-have addition to your collection. The classic black
            color never goes out of style. Whether you're dressing up for a
            special occasion or keeping it casual, these black t-shirts are the
            perfect choice, effortlessly complementing any outfit.
          </p>
          <ol className="list-disc ml-[15px]">
            <li>Premium Quality</li>
            <li>Versatile Wardrobe Staple </li>
            <li> Available in Various Sizes </li>
            <li> Tailored Fit</li>
          </ol>
        </div>
      </div>
      <Similarproducts />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Products;
