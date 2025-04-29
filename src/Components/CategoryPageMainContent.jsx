import React from "react";
import Filters from "./Filters";
import Products from "./Products";

const CategoryPageMainContent = () => {
  return (
    <main>
      <div className="flex justify-center">
        <aside className="flex">
          <Filters />
        </aside>
        <Products />
      </div>
    </main>
  );
};

export default CategoryPageMainContent;
