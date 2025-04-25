import React from "react";

import couple from "../assets/Images/trendy-fashionable.jpg";

const MainContent = () => {
  return (
    <main>
      <section className="bg-[#F2F0F1] flex justify-center align-center">
        <div className="flex justify-center align-center flex-col md:flex-row ">
          <div className="sm:mt-16 md:mt-20 lg:mt-28 max-w-1/2">
            <h1 className="font-extrabold text-6xl text-wrap  integral-cf sm:mb-4 md:mb-6 lg:mb-8">
              FIND CLOTHES THAT MATCHES YOUR STYLE
            </h1>
            <p className="satoshi text-[#00000099] ">
              Browse through our diverse range of meticulously crafted garments,
              designed to bring out your individuality and cater to your sense
              of style.
            </p>
          </div>
          <div className="w-1/2 overflow-hidden">
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
