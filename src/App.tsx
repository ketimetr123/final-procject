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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col gap-2">
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Afterpayment" element={<Afterpaymnet />} />
            <Route path="/Account" element={<Account />} />
            <Route path="/Wishlist" element={<Wishlist />} />
            <Route path="/Address" element={<Address />} />
            <Route path="/Password" element={<Password />} />
            <Route path="/Accountdetails" element={<Accountdetails />} />
            <Route path="/Listing" element={<Listing />} />
            <Route path="/About" element={<About />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
