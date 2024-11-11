import React, { useState } from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Interface } from "readline";
import ProductCard from "../components/ProductCard";
import { Field, Radio, RadioGroup } from "@headlessui/react";
import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { useEffect } from "react";

const Listing: React.FC = () => {
  const plans = ["#A3BEF8", "#FFD58A", "#83B18B", "#4078FF"];
  let [selected, setSelected] = useState(plans[0]);
  const size = ["S", "M", "X", "XL", "XXL"];
  let [selected1, setSelected1] = useState(size[0]);
  const [price, setPrice] = useState(890);
  const [currentPage, setCurrentPage] = useState(1); //პირველ ფეიჯზე რომ დარჩეს
  const ITEMS_PER_PAGE = 9; //რამდენი აითემი მინდა რომ ფეიჯზე განთავსდეს
  const navigate = useNavigate();
  let { category } = useParams();

  const handlePageChange = (page: number) => {
    console.log(page);
    navigate(`/Listing?page=${page}`);
    setCurrentPage(page);

    products();
  }; // ფეიჯ ჩეინჯი რომ მოხდეს

  const handlePriceChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPrice(Number(event.target.value));
  };
  const [apiData, setApiData] = useState([]);

  const products: any = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products?limit=9&offset=${currentPage}`
      );

      const data: any = await res.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const getSpacefivCategory = async () => {
    try {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${category}`
      );
      const data: any = await res.json();
      setApiData(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (category) {
      getSpacefivCategory();
    } else {
      products();
    }
  }, [category]);

  const totalPages = Math.ceil(apiData.length / ITEMS_PER_PAGE); // ფეიჯების რაოდენობა რომ გამოვთვალო
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentProducts = apiData.slice(
    startIndex,
    startIndex + ITEMS_PER_PAGE
  );

  return (
    <>
      <Discount />
      <Header />
      <div className="w-full h-[28px] bg-[#F6F6F6] flex px-[162px] py-[40px] flex-col items-start justify-evenly ">
        {" "}
        <div className="max-w-[1116px] ">
          <div className="flex gap-[10px] items-center flex-row">
            <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
            <img src="Chevron Right.png" alt="" />
            <span className="text-[#8b8c8f] text-[14px]">Search</span>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-center gap-[30px] p-[30px]">
        <div className=" border-2 h-[828px] border-[#E6E7E8] rounded-[6px] flex flex-col justify-evenly pt-[24px] px-[12px] pb-[32px] py-[16px]">
          <h4>Categories</h4>

          <ul className="w-48 text-sm font-medium  bg-white rounded-lg  dark:text-white">
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="vue-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Perfume
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg">
              <div className="flex items-center pl-3">
                <input
                  id="react-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Trousers
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="angular-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Shoes
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Handbag
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Hat
                </label>
              </div>
            </li>
            <li className="w-full border-b border-gray-200 rounded-t-lg ">
              <div className="flex items-center pl-3">
                <input
                  id="laravel-checkbox"
                  type="checkbox"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                />
                <label
                  htmlFor="vue-checkbox"
                  className="w-full py-3 ml-2 text-[#474B57] text-[14px]"
                >
                  Thermos
                </label>
              </div>
            </li>
          </ul>
          <div>
            <h4>Colors</h4>
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
                        selected === color
                          ? `1px solid `
                          : `1px solid ${color} `,
                    }}
                  >
                    <span className="invisible" />
                  </Radio>
                </Field>
              ))}
            </RadioGroup>
          </div>
          <div>
            <h4>Select size</h4>
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
                        selected1 === size
                          ? `2px solid blue`
                          : `2px solid gray`,
                      backgroundColor:
                        selected1 === size ? `lightblue` : `transparent`,
                    }}
                  >
                    <span className="text-center">{size}</span>{" "}
                  </Radio>
                </Field>
              ))}
            </RadioGroup>
          </div>
          <div className="p-4">
            <label
              htmlFor="price-range"
              className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
            >
              Price
            </label>
            <div className="flex items-center space-x-4 w-[200px]">
              <input
                id="price-range"
                type="range"
                min="10"
                max="1000"
                value={price}
                onChange={handlePriceChange}
                className="w-32 h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer dark:bg-gray-600"
              />
              <span className="inline-block p-1 text-sm font-semibold text-gray-900 bg-gray-100 border border-gray-300 rounded-lg dark:text-white dark:bg-gray-600 dark:border-gray-500">
                ${price}.00
              </span>
            </div>
          </div>
        </div>
        <Link to="/Products">
          <div className="grid grid-cols-3 gap-6">
            {apiData.map((item: any) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </Link>
      </div>

      <div className="flex w-fit justify-center mx-auto rounded-[4px] border-2 border-[#E9E9EB] p-[8px] gap-[8px]">
        <img src="/leftcrs.png" alt="" />
        {Array.from({ length: 9 }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => handlePageChange(index + 1)}
            className={`mx-1 px-3 py-1 border rounded focus:bg-[#F6F6F6] ${
              currentPage === index + 1
            }`}
          >
            {index + 1}
          </button>
        ))}
        <img src="/rightcrs.png" alt="" />
      </div>

      <Footer />
    </>
  );
};

export default Listing;
