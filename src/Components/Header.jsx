import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <div className="bg-black w-full text-white flex justify-center items-center text-sm h-9 satoshi">
        Sign up and get 20% off to your first order.{" "}
        <NavLink className="satoshi underline ml-1" to="/signup-page">
          Sign Up Now
        </NavLink>
        <button type="button" className="close">
          X
        </button>
      </div>
      <header>ds</header>
    </>
  );
};

export default Header;
