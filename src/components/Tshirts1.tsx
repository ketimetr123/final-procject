import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useEffect } from "react";
const Tshirts1 = () => {
  const [apiData, setApiData] = useState([]);
  const getData = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");

      const data: any = await res.json();
      setApiData(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className="flex flex-col justify-center items-center w-[1092px] mx-auto mt-[120px]">
      <div>
        <h6 className="text-[#AAAAAA] text-[12px]">Shop now</h6>
        <h2 className="text-[#0E1422] text-[24px] font-[700]">Best Selling</h2>
      </div>
      <div className="grid grid-cols-4 gap-[50px] mt-[120px] ">
        {apiData.map((item: any) => (
          <div
            key={item.id}
            className="bg-[#F6F6F6] py-[10px] px-[15px] h-[420px] rounded-xl flex flex-col justify-between"
          >
            <Link to={`/Products/${item.id}`}>
              <img src={item.image} className="mx-auto h-[293px]" alt="" />
            </Link>

            <p className="mt-[15px]">{item.title}</p>
            <div className="mt-[20px]">
              <span className="border-2 border-[#E6E7E8] rounded-full py-[2px] px-[16px]">
                {item.rating.count === 0 ? "Out of Stock" : "In stock"}
              </span>
              <span className="text-[#474B57] ml-[15px]">$ {item.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default Tshirts1;
