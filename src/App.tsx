import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Added BrowserRouter
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Products from "./pages/Products";
import React from "react";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Afterpaymnet from "./pages/Afterpayment";
import Account from "./pages/Account";
import Wishlist from "./pages/Wishlist";
import Address from "./pages/Address";
import Password from "./pages/Password";
import Accountdetails from "./pages/Accountdetails";
import Listing from "./pages/Listing";
import About from "./pages/About";
import Login from "./pages/Login";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col gap-2">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/products" element={<Products />} />
            <Route path="/products/:id" element={<Products />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/afterpayment" element={<Afterpaymnet />} />
            <Route path="/account" element={<Account />} />
            <Route path="/wishlist" element={<Wishlist />} />
            <Route path="/address" element={<Address />} />
            <Route path="/password" element={<Password />} />
            <Route path="/accountdetails" element={<Accountdetails />} />
            <Route path="/listing" element={<Listing />} />
            <Route path="/listing/:category" element={<Listing />} />
            <Route path="/about" element={<About />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
