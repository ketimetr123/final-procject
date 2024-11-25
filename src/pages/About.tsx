import React from "react";
import Header from "../components/Header";
import Discount from "../components/Discount";
import Footer from "../components/Footer";
const About = () => {
  return (
    <>
      <Discount />
      <Header />
      <div className="grid h-[700px] grid-cols-2">
        <div className="bg-[#ebebd6] text-[150px] f font-[100] text-center ">
          <p className="rotate-90 lex justify-center mt-[30%] ">About us </p>
        </div>
        <div className="bg-[#d1dde8] flex flex-col justify-center items-center p-[10px] text-[#4c8183] leading-loose">
          <h2 className="text-[30px] font-[900]">Welcome!</h2>
          <p>
            Founded in 2005, we have been dedicated to providing a diverse range
            of high-quality clothing that caters to every style and occasion.
            Our passion for fashion drives us to curate collections that not
            only reflect the latest trends but also embody timeless elegance and
            comfort. <br></br> we believe that clothing is more than just
            fabric; it’s an expression of individuality. Whether you’re looking
            for casual wear, formal attire, or something in between, our
            extensive selection ensures that you’ll find the perfect fit for
            your unique style. Quality is at the heart of everything we do. We
            take pride in sourcing the finest materials and working with skilled
            artisans to deliver products that exceed your expectations. Our
            commitment to excellence means you can shop with confidence, knowing
            that you’re investing in pieces designed to last. Thank you for
            being a part of our journey. We invite you to explore our
            collections and discover the perfect pieces that resonate with your
            personal style. Happy shopping!
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default About;
