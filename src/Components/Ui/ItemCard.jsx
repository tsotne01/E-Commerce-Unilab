import React from "react";

import star from "../../assets/Images/Star.svg";

const ItemCard = ({ item }) => {
  return (
    <div className="flex justify-center flex-col mb-[38px]">
      <img
        className="object-cover rounded-lg mb-6 w-[198px] h-[200px] md:w-[295px] md:h-[298px]"
        src={item.image}
        alt={item.name}
      />
      <h2 className="text-lg satoshi font-extrabold mb-2">{item.title}</h2>
      <div className="rating flex gap-1">
        {Array.from({ length: 5 }, (_, i) => (
          <img key={i} src={star} alt="Star" className="w-5 h-5" />
        ))}
        <span className="text-sm satoshi font-thin">
          {item.rating}
          <span className="text-[#00000099] text-sm">/5</span>{" "}
        </span>
      </div>
      <div className="prices flex gap-[10px]">
        <span className="satoshi font-extrabold text-[24px]">
          ${item.price}
        </span>
        <span className="text-[#00000066] line-through text-[24px]">
          ${item?.oldPrice}
        </span>
        <span className="bg-[#FF33331A] inline-block py-[6px] px-[14px] rounded-lg text-red-700 align-middle">
          -{item?.discount}%
        </span>
      </div>
    </div>
  );
};

export default ItemCard;
