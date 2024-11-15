import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import { deleteToke } from "../hooks/logout";
const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (e: any) => {
    e.preventDefault();
    setIsLoading(true);
    fetch("https://fakestoreapi.com/auth/login", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username: userName,
        password: password,
      }),
    })
      .then((res) => res.json())
      .then((json) => {
        Cookies.set("AccessToken", json.token);
        setIsLoading(false);
        alert("You have logged in successfully");
      })
      .catch((err) => {
        alert("User is not found");
        setIsLoading(false);
      });
  };
  const onUserNameChange = (e: any) => {
    setUserName(e.target.value);
  };
  const onPasswordChange = (e: any) => {
    setPassword(e.target.value);
  };
  return (
    <>
      <Discount />
      <Header />
      <div className="h-[200px] bg-[#F6F6F6] flex px-[162px] py-[40px] flex-col items-start justify-evenly ">
        <h2 className="text-[32px] text-[#202533] font-[600]">Account</h2>
        <div className="flex gap-[10px] items-center flex-row">
          <span className="text-[#5C5F6A] text-[14px]">Ecommerce</span>
          <img src="Chevron Right.png" alt="" />
          <span className="text-[#0E1422] text-[14px]">Sign up</span>
        </div>
      </div>
      <div className="w-full ">
        <div className="max-w-[1116px] flex items-center justify-evenly p-[50px] mx-auto">
          {" "}
          <div className="max-w-[212px]">
            <Link to="/login">
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Sign up
                <img src="/Logout.png" alt="" />
              </button>
            </Link>

            <Link to="/Account">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Orders
                <img src="/Icon.png" alt="" />
              </button>
            </Link>
            <Link to="/Wishlist">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Wishlist
                <img src="/Heart.png" alt="" />
              </button>
            </Link>
            <Link to="/Address">
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Address
                <img src="/Delivery.png" alt="" />
              </button>
            </Link>

            <Link to="/Password">
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Password
                <img src="/Key.png" alt="" />
              </button>
            </Link>
            <Link to="/Accountdetails">
              {" "}
              <button className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]">
                Account
                <img src="/head.png" alt="" />
              </button>
            </Link>

            <button
              onClick={deleteToke}
              className="text-[#5C5F6A] w-full px-[24px] py-[8px] text-[14px] flex gap-[10px] items-center justify-end flex-row-reverse focus:bg-[#F6F6F6] focus:rounded-[8px] focus:px-[24px] focus:py-[8px]"
            >
              Logout
              <img src="/Logout.png" alt="" />
            </button>
          </div>
          <div className="w-[1px] h-[490px] bg-[#E6E7E8]"></div>
          <div className="w-[526px]">
            <div className="rounded-md p-4 mt-12">
              <h1 className="text-center text-xl font-bold">Sign up</h1>
              <form onSubmit={onSubmitForm}>
                <div className="mb-4">
                  <label htmlFor="username">UserName</label>
                  <input
                    type="text"
                    onChange={onUserNameChange}
                    className="w-full p-2 border border-slate-500 rounded-md"
                  />
                </div>

                <div className="mb-4">
                  <label htmlFor="password">Password</label>
                  <input
                    type="password"
                    onChange={onPasswordChange}
                    className="w-full p-2 border border-slate-500 rounded-md"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-slate-100 text-slate-500 p-2 rounded-md"
                >
                  {isLoading ? "Loading..." : "Sign Up"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};
export default Login;
