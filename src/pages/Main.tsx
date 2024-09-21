import React from "react";
import Discount from "../components/Discount";
import Header from "../components/Header";
import Collectioncomponent from "../components/Collectioncomponent";
import Shipping from "../components/Shipping";
import Tshirts1 from "../components/Tshirts1";
import Browse from "../components/Browse";
import Tshirts2 from "../components/Tshirts2";
import Subscribe from "../components/Subscribe";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <>
      <Discount />
      <Header />
      <Collectioncomponent />
      <Shipping />
      <Tshirts1 />
      <Browse />
      <Tshirts2 />
      <Subscribe />
      <Footer />
    </>
  );
};

export default Main;
