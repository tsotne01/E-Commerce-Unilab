import React, { useRef, useState } from "react";
import { NavLink } from "react-router-dom";
import closeIcon from "../assets/Icons/Close-icon.svg";
import arrowDown from "../assets/Icons/Arrow-down.svg";
import searchIcon from "../assets/Icons/Search-icon.svg";
import cartIcon from "../assets/Icons/Cart-icon.svg";
import profileIcon from "../assets/Icons/Profile-icon.svg";
import searchIconBlack from "../assets/Icons/Search-icon-black.svg";
import SearchInput from "./Ui/SearchInput";
import NavList from "./Ui/NavList";
import { NavItem } from "./Ui/NavItem";
import BurgerMenu from "./BurgerMenu";
const Header = () => {
  const signupBlock = useRef(null);
  const handleSignupCloseClick = () => {
    signupBlock.current.classList.add("hidden");
  };
  return (
    <>
      <div
        ref={signupBlock}
        className="bg-black w-full  text-white flex justify-center items-center text-xs md:text-sm h-[38px] satoshi"
      >
        Sign up and get 20% off to your first order.{" "}
        <NavLink className="satoshi underline ml-1" to="/signup-page">
          Sign Up Now
        </NavLink>
        <button
          onClick={handleSignupCloseClick}
          type="button"
          className="close fixed right-6 hidden md:block"
        >
          <img src={closeIcon} alt="Close" />
        </button>
      </div>
      <header className="flex justify-center">
        <div className="flex w-[1440px]  md:px-[100px] justify-between pl-6 md:justify-start items-center py-6">
          <div className="flex items-center mr-0 md:mr-10">
            <BurgerMenu />
            <NavLink className="satoshi mr-2" to="/">
              <span className="integral-cf font-extrabold text-3xl">
                Shop.co
              </span>
            </NavLink>
          </div>
          <NavList>
            <NavItem className=" flex gap-1" to="/">
              Shop
              <img src={arrowDown} alt="arrow down" />
            </NavItem>
            <NavItem to="/">On Sale</NavItem>
            <NavItem to="/">New Arrivals</NavItem>
            <NavItem to="/">Brands</NavItem>
            <SearchInput
              className="satoshi search-div focus:outline-none text-base py-3 px-4 rounded-[64px] bg-[#F0F0F0] hidden  lg:block lg:w-[400px] xl:w-[577px]"
              type="search"
              placeholder="Search for products..."
              icon={searchIcon}
              id="searchInput"
            />
          </NavList>

          <div className="flex gap-3 ml-[20px] md:ml-[40px]">
            <button type="button" className="w-6 h-6 md:hidden">
              <img
                className="w-6 h-6 md:hidden"
                src={searchIconBlack}
                alt="search"
              />
            </button>
            <NavLink className="satoshi ml-2" to="/cart">
              <img className="min-w-6 min-h-6" src={cartIcon} alt="" />
            </NavLink>
            <NavLink className="satoshi mr-3 sm:mr-0" to="/">
              <img className="min-w-6 min-h-6" src={profileIcon} alt="" />
            </NavLink>
          </div>
        </div>
      </header>
    </>
  );
};

export default Header;
