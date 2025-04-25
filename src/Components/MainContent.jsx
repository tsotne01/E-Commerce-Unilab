import React from "react";

import couple from "../assets/Images/trendy-fashionable.jpg";
import BrandsCarousel from "./BrandsCarousel";

const MainContent = () => {
  return (
    <main className="flex flex-col justify-center">
      <section className="bg-[#F2F0F1] w-full flex justify-center items-center">
        <div className="flex w-[1440px] flex-col md:flex-row ">
          <div className="ml-10 sm:ml-20 md:ml-25  mt-2 md:mt-10 lg:mt-22 max-w-[90%] md:max-w-[592px]">
            <h1 className="font-extrabold leading-[64px] tracking-wide text-4xl max-w-[577px] md:text-5xl lg:text-[64px] text-wrap  integral-cf mb-5 md:mb-6">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="satoshi text-[#00000099] max-w-[577px] block mb-5 ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button
              type="button"
              className="bg-black satoshi mb-10 text-base text-white px-18 py-4 rounded-full cursor-pointer"
            >
              Shop Now
            </button>
            <div className="flex flex-wrap md:flex-nowrap gap-5">
              <div className="flex flex-col pr-10 border-r-1 border-[#0000001A] ">
                <span className="block tracking-wide text-[40px] satoshi font-extrabold">
                  200+
                </span>
                <span className="text-[#00000099] leading-[22px] text-base font-thin satoshi">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col pr-10  md:border-r-1 md:border-[#0000001A] ">
                <span className="block tracking-wide text-[40px] satoshi font-extrabold">
                  2,000+
                </span>
                <span className="text-[#00000099] leading-[22px] text-base font-thin satoshi">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col">
                <span className="block tracking-wide text-[40px] satoshi font-extrabold">
                  30,000+
                </span>
                <span className="text-[#00000099] leading-[22px] text-base font-thin satoshi">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden max-w-1/2">
            <img
              src={couple}
              className="couple object-top max-h-[660px]"
              alt="Couple"
            />
          </div>
        </div>
      </section>
      <section>
        <BrandsCarousel />
      </section>
    </main>
  );
};

export default MainContent;
