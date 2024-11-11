import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Footer from "../components/Footer";
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
        setIsLoading(true);
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
      <div>
        <div className="max-w-[400px] mx-auto bg-slate-300 rounded-md p-4 mt-12">
          <h1 className="text-center text-xl font-bold">Sign In</h1>
          <form onSubmit={onSubmitForm}>
            <div className="mb-4">
              <label htmlFor="username" className="block">
                UserName
              </label>
              <input
                type="text"
                onChange={onUserNameChange}
                className="w-full p-2 border border-slate-500 rounded-md"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block">
                Password
              </label>
              <input
                type="password"
                onChange={onPasswordChange}
                className="w-full p-2 border border-slate-500 rounded-md"
              />
            </div>

            <button
              type="submit"
              className="w-full bg-slate-500 text-white p-2 rounded-md"
            >
              {isLoading ? "Loading..." : "Sign In"}
            </button>
          </form>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default Login;
