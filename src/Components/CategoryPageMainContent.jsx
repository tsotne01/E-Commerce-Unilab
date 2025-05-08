import React, { useEffect, useState } from "react";
import Filters from "./Filters";
import { Link, useParams } from "react-router-dom";
import arrowRightGray from "../assets/Icons/arrow-right-gray.svg";
import ItemCard from "./Ui/ItemCard";
import { getProductByCategory } from "../Services/Api/api";
import shirtImage from "../assets/Images/shirt.png";

const CategoryPageMainContent = () => {
  const { category } = useParams();

  const [categoryItems, setCategoryItems] = useState();

  useEffect(() => {
    getProductByCategory(category).then((data) => setCategoryItems(() => data));
  }, [category]);

  return (
    <main className="max-w-[1440px] mx-auto">
      <div className="ml-6 pt-7 border-[#0000001A] mb-6 border-t-1 satoshi text-base flex items-center gap-x-3">
        <div className="flex gap-x-1">
          <span className="text-[#00000099]">Home</span>
          <img
            className="inline-block"
            src={arrowRightGray}
            alt="arrow right"
          />
        </div>
        <span className="text-black">{category}</span>
      </div>

      <div className="flex md:max-w-[1440px] mx-auto gap-5 md:justify-center w-full">
        <aside className="md:flex hidden">
          <Filters />
        </aside>
        <section className="md:w-[75%] w-full">
          <div className="flex justify-between w-full md:w-full">
            <h2 className="satoshi text-3xl font-bold">{category}</h2>
            <div>
              <span className="text-[#00000099]">
                Showing 1-10 of 100 Products
              </span>
            </div>
          </div>
          <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 px-5 py-4 gap-x-5 gap-y-9">
            {!!categoryItems &&
              categoryItems.map((item) => (
                <div key={item.id} className="max-w-2xs mx-auto sm:mx-0">
                  <Link to={`/product-details/${item.id}`}>
                    <ItemCard
                      item={Object.assign({}, item, { image: shirtImage })}
                    />
                  </Link>
                </div>
              ))}
          </div>
        </section>
      </div>
    </main>
  );
};

export default CategoryPageMainContent;
