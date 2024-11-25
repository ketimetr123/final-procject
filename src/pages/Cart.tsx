import React, { useEffect, useState } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../redux/store";
import counterSlice, { increment, decrement } from "../redux/app/counterSlice";
import { Link } from "react-router-dom";
import { deleteToke } from "../hooks/logout";
import ProductCard from "../components/ProductCard";

const Cart = () => {
  // const count = useSelector((state: RootState) => state.counter.value);
  // const dispatch = useDispatch();
  const [products, setProducts] = useState<any[]>([]);
  const [products1, setProduct1] = useState<any[]>([]);

  // const [isLoading, setIsLoading] = useState<boolean>(false);
  // const [count, setState] = useState(0);
  // const increment = () => {
  //   setState(prevCount){

  //   }
  // };

  const [counter, setCounter] = useState(0);

  const incrementCounter = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id
          ? { ...product, counter: product.counter + 1 }
          : product
      )
    );
  };

  const decrementCounter = (id: number) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === id && product.counter > 0
          ? { ...product, counter: product.counter - 1 }
          : product
      )
    );
  };

  const getAllProductsAndUserCaer = async () => {
    try {
      const products_res = await fetch("https://fakestoreapi.com/products");
      const products_data = await products_res.json();
      const cart_res = await fetch("https://fakestoreapi.com/carts/3");
      const cart_products = await cart_res.json();
      let cart_products_data: any[] = [];
      for (let index = 0; index < cart_products.products.length; index++) {
        const element = cart_products.products[index];
        products_data.find((product: any) => {
          if (product.id === element.productId) {
            cart_products_data.push({ ...product, counter: 0 });
          }
        });
      }

      setProducts(cart_products_data);
    } catch (error) {
      console.log(error);
    }
  };

  const calculateTotalPrice = () => {
    return products.reduce((total, product) => {
      return total + product.price * product.counter;
    }, 0);
  };
  useEffect(() => {
    getAllProductsAndUserCaer();
  }, []);

  // კარტაში დამატებას ვცდილობ, არ გამოდის ამ კოდით
  // const getUserCart5 = async () => {
  //   try {
  //     const products_res1 = await fetch("https://fakestoreapi.com/products");
  //     const products_data1 = await products_res1.json();
  //     const cart_res1 = await fetch("https://fakestoreapi.com/carts/7");
  //     const cart_products1 = await cart_res1.json();
  //     let cart_products_data1: any[] = [];
  //     for (let index = 0; index < cart_products1.products1.length; index++) {
  //       const element = cart_products1.products1[index];
  //       products_data1.find((products1: any) => {
  //         if (products1.id === element.productId) {
  //           cart_products_data1.push(products1);
  //         }
  //       });
  //     }
  //     setProduct1(cart_products_data1);
  //   } catch (error) {
  //     console.error(error);
  //   }
  //   fetch("https://fakestoreapi.com/carts/7", {
  //     method: "PATCH",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-type": "application/json",
  //     },
  //     body: JSON.stringify({
  //       userId: 5,
  //       date: 2019 - 11 - 19,
  //       products: [{ productId: 1, quantity: 3 }],
  //     }),
  //   })
  //     .then((res) => res.json())
  //     .then((json) => console.log(json));
  // };

  // useEffect(() => {
  //   getUserCart5();
  // }, []);
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
                      onClick={() => decrementCounter(product.id)}
                    >
                      <img src="/plus.png" alt="" />
                    </button>
                    <span>{product.counter}</span>
                    <button
                      className="text-[14px] text-[#202533]"
                      aria-label="Decrement value"
                      onClick={() => incrementCounter(product.id)}
                    >
                      <img src="/Add.png" alt="" />
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
            <span>${calculateTotalPrice().toFixed(2)}</span>
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
