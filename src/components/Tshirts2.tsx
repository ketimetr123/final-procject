import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
interface Product {
  id: number;
  title: string;
  image: string;
  price: number;
  rating: {
    count: number;
  };
}
const Tshirts2 = () => {
  const [apiData2, setApiData2] = useState<Product[]>([]);
  const [displayData, setDisplayData] = useState<Product[]>([]);
  const { search } = useLocation();
  const navigate = useNavigate();
  const getData2 = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products");

      const data: any = await res.json();
      setApiData2(data);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };
  useEffect(() => {
    getData2();
  }, []);
  const onChangeTab = (type: any) => {
    navigate(`?tab=${type}`);
  };
  useEffect(() => {
    const params = new URLSearchParams(search);
    const activeTab = params.get("tab");

    if (activeTab === "latest") {
      const latestData = [...apiData2].sort((a, b) => b.id - a.id);
      setDisplayData(latestData.slice(0, 4));
    } else {
      setDisplayData(apiData2.slice(0, 4));
    }
  }, [search, apiData2]);
  return (
    <div className="flex flex-col justify-center items-center w-[1092px] mx-auto mt-[120px]">
      <div className="flex gap-[20px] text-[#5C5F6A] text-[14px] font-[400]">
        <button
          className=" hover:outline hover:outline-2 hover:outline-[#E9E9EB] focus:bg-[#9797a1] hover:duration-150 rounded-full px-[16px] py-[2px]"
          onClick={() => onChangeTab("featured")}
        >
          Featured
        </button>

        <button
          className=" hover:outline hover:outline-2 hover:outline-[#E9E9EB] focus:bg-[#9797a1] hover:duration-150 rounded-full px-[16px] py-[2px]"
          onClick={() => onChangeTab("latest")}
        >
          Latest
        </button>
      </div>
      <div className="grid grid-cols-4 gap-[50px] mt-[120px] ">
        {displayData.map((item: any) => (
          <div
            key={item.id}
            className="bg-[#F6F6F6] py-[10px] px-[15px] rounded-xl flex flex-col justify-center"
          >
            <Link to="/Products">
              <img src={item.image} className="mx-auto" alt="" />
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
export default Tshirts2;
