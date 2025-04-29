import React, { useEffect, useState } from "react";

import couple from "../assets/Images/couple.png";
import BrandsCarousel from "./BrandsCarousel";
import ItemCard from "./Ui/ItemCard";
import shirtImage from "../assets/Images/shirt.png";
import casualFit from "../assets/Images/Casual-fit.png";
import formalFit from "../assets/Images/Formal-fit.png";
import partyFit from "../assets/Images/Party-fit.png";
import gymFit from "../assets/Images/Gym-fit.png";
import Testimonial from "./Ui/Testimonial";
import { getProducts, getTestimonials } from "../Services/Api/api";
import { Link } from "react-router-dom";

const MainContent = () => {
  const [products, setProducts] = useState();
  const [testimonials, setTestimonials] = useState();

  useEffect(() => {
    getProducts().then((data) => setProducts(() => data));
  }, []);

  useEffect(() => {
    getTestimonials().then((data) => setTestimonials(() => data));
  }, []);

  return (
    <main className="flex flex-col justify-center">
      <section className="bg-[#F2F0F1] w-full flex justify-center items-center">
        <div className="flex w-[1440px] flex-col md:flex-row gap-0 md:gap-28 ">
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
          <div className="overflow-hidden mx-auto md:w-1/2">
            <img
              src={couple}
              className="couple object-center aspect-square block sm:block md:hidden lg:block h-[448px] md:h-[660px]"
              alt="Couple"
            />
          </div>
        </div>
      </section>
      <section>
        <BrandsCarousel />
      </section>
      <section>
        <div className="flex justify-center flex-col w-full mt-[78px] mb-[64px] overflow-hidden">
          <h2 className="integral-cf font-extrabold text-[32px] mx-auto sm:text-4xl md:text-5xl mb-[35px] md:mb-[55px]">
            NEW ARRIVALS
          </h2>
          <div className="mx-auto flex gap-5 max-w-full overflow-scroll scrollbar-w-0 scroll">
            {!!products &&
              products?.map((item) => (
                <Link key={item.id} to={`/product-details/${item.id}`}>
                  <ItemCard
                    item={Object.assign({}, item, { image: shirtImage })}
                  />
                </Link>
              ))}
          </div>
          <button
            type="button"
            className="mx-auto border border-[#0000001A] rounded-[62px] py-4 px-20 cursor-pointer satoshi"
          >
            View All
          </button>
        </div>
      </section>
      <section>
        <div className="flex justify-center flex-col w-full mt-[78px]">
          <h2 className="integral-cf font-extrabold text-[32px] mx-auto sm:text-4xl md:text-5xl mb-[35px] md:mb-[55px]">
            top selling{" "}
          </h2>
          <div className="mx-auto flex gap-5 max-w-full overflow-scroll scrollbar-w-0">
            {!!products &&
              products?.map((item) => (
                <Link key={item.id} to={`/product-details/${item.id}`}>
                  <ItemCard
                    item={Object.assign({}, item, { image: shirtImage })}
                  />
                </Link>
              ))}
          </div>
          <button
            type="button"
            className="mx-auto border border-[#0000001A] rounded-[62px] py-4 px-20 cursor-pointer satoshi mb-20"
          >
            View All
          </button>
        </div>
      </section>
      <section>
        <div className="flex justify-center items-center w-full mb-20">
          <div className="w-[100%] md:w-[65%] max-w-[1240px] md:max-h-[840px] bg-[#F0F0F0] rounded-[20px] md:rounded-[40px] flex flex-col justify-center items-center">
            <h2 className="integral-cf mt-[70px] mb-16 mx-auto w-fit font-extrabold text-4xl md:text-5xl">
              BROWSE BY dress STYLE
            </h2>
            <div className="flex items-center justify-center min-h-full">
              <div className="flex flex-col md:grid md:grid-rows-2 gap-4 w-full mx-auto overflow-hidden rounded-lg p-4">
                <div className="grid grid-cols-1 md:grid-cols-[400px_1fr] gap-4 w-full">
                  <div className="overflow-hidden rounded-lg aspect-square md:aspect-auto">
                    <img
                      src={casualFit}
                      alt="men with casual fit"
                      className="w-full h-full object-right-top rounded-lg"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg aspect-square md:aspect-auto">
                    <img
                      src={formalFit}
                      alt="men with formal fit."
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-[1fr_400px] gap-4 w-full">
                  <div className="overflow-hidden rounded-lg aspect-square md:aspect-auto">
                    <img
                      src={partyFit}
                      alt="women with party fit."
                      className="h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="overflow-hidden rounded-lg aspect-square md:aspect-auto">
                    <img
                      src={gymFit}
                      alt="men with gym fit."
                      className="w-full h-full object-cover rounded-lg"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="flex flex-col mx-auto max-w-[1220px] overflow-hidden">
          <h2 className="integral-cf font-bold self-start text-5xl text-center mb-10">
            OUR HAPPY CUSTOMERS
          </h2>
          <div className="flex gap-x-5 scrollbar-w-0 max-w-[1220px] overflow-scroll">
            {testimonials?.length &&
              testimonials.map((testimonial) => (
                <Testimonial key={testimonial.id} testimonial={testimonial} />
              ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default MainContent;
