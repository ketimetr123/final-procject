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

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col gap-2">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Checkout" element={<Checkout />} />
            <Route path="/Afterpayment" element={<Afterpaymnet />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
