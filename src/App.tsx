import "./App.css";
import { Routes, Route } from "react-router-dom";
import { store } from "./redux/store";
import { Provider } from "react-redux";
import Main from "./pages/Main";
import Header from "./components/Header";

import React from "react";

function App() {
  return (
    <Provider store={store}>
      <div className="flex flex-col gap-2">
        <Header />

        {/* <Routes>
          {" "}
          <Route path="/" element={<Main />} />
        </Routes> */}
      </div>
    </Provider>
  );
}

export default App;
