import React from "react";
const Footer = () => {
  return (
    <div className="p-[90px] flex flex-col justify-center items-center w-full">
      <footer className="max-w-[1116px]">
        <div className="flex flex-row justify-center gap-[187px] items-center">
          <div>
            <div className="flex flex-row items-center gap-3 ">
              <img src="/Logomark2.png" alt="" />
              <span className="text-[#0E1422] text-[20px] font-[800]">
                Ecommerce
              </span>
            </div>
            <div>
              <p className="text-[#5C5F6A] text-[14px] mt-[15px]">
                DevCut is a YouTube channel for <br></br> practical
                project-based learning.
              </p>
            </div>
            <div className="flex flex-row gap-[20px] mt-[30px]">
              <img src="/cat.png" alt="" />
              <img src="/insta.png" alt="" />
              <img src="/youtube.png" alt="" />
            </div>
          </div>
          <div className="flex flex-row gap-[50px]">
            <div className="flex flex-col text-[#5C5F6A] gap-[20px]">
              <span className="text-[#878A92]">SUPPORT</span>
              <span className=" text-[#5C5F6A] mt-[15px]">FAQ</span>
              <span className=" text-[#5C5F6A]">Terms of use</span>
              <span className=" text-[#5C5F6A]">Privacy Policy</span>
            </div>
            <div className="flex flex-col text-[#5C5F6A] gap-[20px]">
              <span className="text-[#878A92]">COMPANY</span>
              <span className=" text-[#5C5F6A] mt-[15px]">About us</span>
              <span className=" text-[#5C5F6A]">Career</span>
              <span className=" text-[#5C5F6A]">Contact us</span>
            </div>
            <div className="flex flex-col text-[#5C5F6A] gap-[20px]">
              <span className="text-[#878A92]">SHOP</span>
              <span className=" text-[#5C5F6A] mt-[15px]">My account</span>
              <span className=" text-[#5C5F6A]">Checkout</span>
              <span className=" text-[#5C5F6A]"> Cart</span>
            </div>
          </div>
          <div>
            <h2 className="text-[#878A92] text-[14px]">ACCEPTED PAYMENTS</h2>
            <div className="flex flex-row gap-[15px] mt-[30px]">
              <img src="/Mastercard.png" alt="" />
              <img src="/amex.png" alt="" />
              <img src="/visa.png" alt="" />
            </div>
          </div>
        </div>

        <div className="w-[1116px] border-t-2 text-center mt-[50px]">
          <p className="text-[#5C5F6A] text-[14px] mt-[20px]">
            © 2023 DevCut. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
