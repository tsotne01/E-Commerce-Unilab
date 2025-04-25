import React from "react";

import couple from "../assets/Images/trendy-fashionable.jpg";

const MainContent = () => {
  return (
    <main className="flex justify-center">
      <section className="bg-[#F2F0F1] flex justify-center w-full mx-auto">
        <div className="flex justify-center items-center sm:items-center flex-col gap-30 md:flex-row ">
          <div className="mt-16 md:mt-20 lg:mt-28 max-w-[70%] md:max-w-1/2">
            <h1 className="font-extrabold text-4xl max-w-[577px] md:text-5xl lg:text-6xl text-wrap  integral-cf  sm:mb-4 md:mb-6 lg:mb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="satoshi text-[#00000099] max-w-[577px] block mb-8 ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
            <button
              type="button"
              className="bg-black satoshi mb-12 text-base text-white px-9 py-3 rounded-full cursor-pointer"
            >
              Shop Now
            </button>
            <div className="flex flex-wrap md:flex-nowrap justify-center gap-4">
              <div className="flex flex-col p-2 border-r-1 border-[#0000001A] ">
                <span className="block text-4xl satoshi font-bold">200+</span>
                <span className="text-[#00000099] text-base font-thin satoshi">
                  International Brands
                </span>
              </div>
              <div className="flex flex-col p-2 md:border-r-1 md:border-[#0000001A] ">
                <span className="block text-4xl satoshi font-bold">2,000+</span>
                <span className="text-[#00000099] text-base font-thin satoshi">
                  High-Quality Products
                </span>
              </div>
              <div className="flex flex-col p-2">
                <span className="block text-4xl satoshi font-bold">
                  30,000+
                </span>
                <span className="text-[#00000099] text-base font-thin satoshi">
                  Happy Customers
                </span>
              </div>
            </div>
          </div>
          <div className="overflow-hidden">
            <img
              src={couple}
              className="couple object-top max-h-[660px]"
              alt="Couple"
            />
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
