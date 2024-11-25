import React, { useEffect, useState } from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link, useParams } from "react-router-dom";
import Main from "../pages/Main";
import { useNavigate } from "react-router-dom";

const Header: any = () => {
  const [value, setValue] = useState("");
  const navigate = useNavigate();
  const [categoriesAPI, setCategories] = useState([]);

  const getCategories = async () => {
    try {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data: any = await res.json();
      setCategories(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getCategories();
  }, []);

  const onChangeInput = (e: any) => {
    setValue(e.target.value);
  };

  const SearchListing = (e: any) => {
    e.preventDefault();

    navigate(`/Listing?search=${value}`);
  };

  return (
    <header className="flex justify-center items-center gap-[80px]">
      {" "}
      <Link to="/">
        <div className="flex flex-row gap-[10px] items-center">
          <img src="/Logomark.png" alt="Ecommerce Logo" />
          <span className="text-[24px] text-[#0E1422] font-[800]">
            Ecommerce
          </span>
        </div>
      </Link>
      <div className="text-[#5C5F6A] gap-[33px] flex">
        <Menu>
          <Link to="/">Home</Link>

          <MenuButton className="flex items-center focus:transition duration-700">
            Categories
            <img src="/Chevron Down.png" alt="" />
          </MenuButton>

          <MenuItems
            anchor="bottom"
            className="bg-white px-2 py-3 rounded-xl shadow-xl"
          >
            <Link
              to="/Listing"
              className="block data-[focus]:bg-gray-100 p-[10px] text-[black] "
            >
              Listing
            </Link>

            {categoriesAPI.map((category) => (
              <MenuItem key={category}>
                <Link
                  key={7}
                  to={`/Listing/${category}`}
                  className="block data-[focus]:bg-gray-100 p-[10px] text-[black]"
                >
                  {category}
                </Link>
              </MenuItem>
            ))}
          </MenuItems>

          <Link to="/About">About</Link>
          <Link to="/Contact">Contact</Link>
        </Menu>
      </div>
      <form onSubmit={SearchListing} className="relative">
        <input
          type="text"
          value={value}
          onChange={onChangeInput}
          placeholder="Search products"
          className="border border-[#E6E7E8] py-[10px] pl-[40px] pr-[15px] w-[264px] rounded-md focus:outline-none"
        />
        <img
          src="/Search.png"
          alt=""
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </form>
      <div className="flex gap-[27px]">
        <Link to="/Cart">
          <img src="/Icon.png" alt="" />
        </Link>
        <Link to="/Account">
          {" "}
          <button>
            <img src="/User.png" alt="" />
          </button>
        </Link>
      </div>
    </header>
  );
};
export default Header;
