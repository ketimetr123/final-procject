import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Collectioncomponent from "../components/Collectioncomponent";
import Shipping from "../components/Shipping";

const Main = () => {
  return (
    <>
      <Discount />
      <Header />
      <Collectioncomponent />
      <Shipping />
    </>
  );
};

export default Main;
