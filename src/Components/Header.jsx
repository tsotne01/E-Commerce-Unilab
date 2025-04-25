import React from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "../assets/Icons/Close-icon.svg";
import logo from "../assets/Logo/Logo.svg";
import searchIcon from "../assets/Icons/Search-icon.svg";
import cartIcon from "../assets/Icons/Cart-icon.svg";
import profileIcon from "../assets/Icons/Profile-icon.svg";
import Input from "./Ui/Input";
const Header = () => {
  return (
    <>
      <div className="bg-black w-full px-[100px] text-white flex justify-center items-center text-xs md:text-sm h-9 satoshi">
        Sign up and get 20% off to your first order.{" "}
        <NavLink className="satoshi underline ml-1" to="/signup-page">
          Sign Up Now
        </NavLink>
        <button type="button" className="close">
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
      <header className="flex justify-center">
        <div className="flex gap-x-2 md:gap-x-5 sm:gap-x-3 lg:gap-x-10 items-center py-6">
          <NavLink className="satoshi mr-10 w-40 h-[22px]" to="/">
            <img src={logo} alt="Logo" className="min-w-40 min-h-[22px]" />
          </NavLink>
          <nav className="items-center gap-x-6 hidden md:gap-x-2 lg:gap-x-4 sm:hidden md:flex">
            <NavLink className="satoshi text-base" to="/">
              Shop
            </NavLink>
            <NavLink className="satoshi" to="/products">
              On Sale
            </NavLink>
            <NavLink className="satoshi" to="/">
              New Arrivals
            </NavLink>
            <NavLink className="satoshi" to="/">
              Brands
            </NavLink>
            <Input
              className="satoshi search-div py-3 px-4 rounded-[64px] bg-[#F0F0F0] hidden md:block md:w-[200px] lg:w-[500px]"
              type="search"
              placeholder="Search"
              icon={searchIcon}
              id="searchInput"
            />
          </nav>

          <NavLink className="satoshi" to="/">
            <img className="min-w-6 min-h-6" src={cartIcon} alt="" />
          </NavLink>
          <NavLink className="satoshi" to="/">
            <img className="min-w-6 min-h-6" src={profileIcon} alt="" />
          </NavLink>
        </div>
      </header>
    </>
  );
};

export default Header;
