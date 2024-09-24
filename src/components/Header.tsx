import React from "react";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";
import { Link } from "react-router-dom";
import Main from "../pages/Main";

const Header: any = () => {
  return (
    <header className="flex justify-center items-center gap-[80px]">
      {" "}
      <Link to="/Main">
        <div className="flex flex-row gap-[10px] items-center">
          <img src="/Logomark.png" alt="Ecommerce Logo" />
          <span className="text-[24px] text-[#0E1422] font-[800]">
            Ecommerce
          </span>
        </div>
      </Link>
      <div className="text-[#5C5F6A] gap-[33px] flex">
        <Menu>
          <Link to="/Main">Home</Link>

          <MenuButton className="flex items-center">
            Categories
            <img src="/Chevron Down.png" alt="" />
          </MenuButton>

          <MenuItems anchor="bottom">
            <MenuItem>
              <a
                className="block data-[focus]:bg-blue-100"
                href="/settings"
              ></a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/support">
                Support
              </a>
            </MenuItem>
            <MenuItem>
              <a className="block data-[focus]:bg-blue-100" href="/license">
                License
              </a>
            </MenuItem>
          </MenuItems>
          <button>Contact</button>
          <button>About</button>
        </Menu>
      </div>
      <div className="relative">
        <input
          type="text"
          placeholder="Search products"
          className="border border-[#E6E7E8] py-[10px] pl-[40px] pr-[15px] w-[264px] rounded-md focus:outline-none"
        />
        <img
          src="/Search.png"
          alt=""
          className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5"
        />
      </div>
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
