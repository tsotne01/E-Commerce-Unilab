import React from "react";
import Filters from "./Filters";

const CategoryPageMainContent = () => {
  return (
    <main>
      <div className="flex justify-center">
        <aside className="flex">
          <Filters />
        </aside>
      </div>
    </main>
  );
};

export default CategoryPageMainContent;
