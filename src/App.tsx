import "./App.css";
import { Routes, Route, BrowserRouter as Router } from "react-router-dom"; // Added BrowserRouter
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Products from "./pages/Products";
import React from "react";
import Cart from "./pages/Cart";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <div className="flex flex-col gap-2">
          <Routes>
            <Route path="/main" element={<Main />} />
            <Route path="/Products" element={<Products />} />
            <Route path="/Cart" element={<Cart />} />
          </Routes>
        </div>
      </Router>
    </Provider>
  );
}

export default App;
