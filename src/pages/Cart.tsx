import React, { useEffect, useState } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import { increment, decrement } from "../redux/app/counterSlice";
import { Link } from "react-router-dom";
import { deleteToke } from "../hooks/logout";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const getAllProductsAndUserCaer = async () => {
    setIsLoading(true);
    try {
      //fetch products
      const products_res = await fetch("https://fakestoreapi.com/products");
      const products_data = await products_res.json();
      //fetch user cart
      const cart_res = await fetch("https://fakestoreapi.com/carts/3");
      const cart_products = await cart_res.json();
      let cart_products_data: any[] = [];
      for (let index = 0; index < cart_products.products.length; index++) {
        const element = cart_products.products[index];
        products_data.find((product: any) => {
          if (product.id === element.productId) {
            cart_products_data.push(product);
          }
        });
      }
      setProducts(cart_products_data);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };
  useEffect(() => {
    getAllProductsAndUserCaer();
  }, []);

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
      <div className="flex flex-row items-center gap-[70px] py-[30px]  justify-center">
        <div className="grid grid-row-3 items-center justify-center gap-[30px]">
          <h3>Your cart</h3>
          {isLoading && <p className="text-bold text-red-600">Loading...</p>}
          {products.map((product, index) => (
            <div
              key={index}
              className="flex items-start gap-8 border w-[700px] justify-center rounded-xl p-4 shadow-md"
            >
              <img
                src={product.image}
                className="w-[50px]"
                alt="product image"
              />
              <div className="flex flex-row  items-center gap-[10px]">
                <div className="flex flex-col">
                  <h2 className="w-fit">{product.title}</h2>
                  <p className="font-bold">${product.price}</p>
                </div>

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
          ))}
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
