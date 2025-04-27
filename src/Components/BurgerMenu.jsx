import closeIcon from "../assets/Icons/Close-black-icon.svg";
import burgerMenuIcon from "../assets/Icons/Burger-icon.svg";
import { useState } from "react";
import NavList from "./Ui/NavList";
import { NavItem } from "./Ui/NavItem";

const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleBurgerOpen = () => {
    setIsOpen(true);
  };

  const handleBurgerClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <button
        onClick={handleBurgerOpen}
        type="button"
        className="w-6 h-6 mx-4 md:hidden"
      >
        <img className="w-6 h-6" src={burgerMenuIcon} alt="menu" />
      </button>
      {isOpen && (
        <div className="w-full h-full p-6 fixed top-0 left-0 bg-white bg-opacity-50">
          <button onClick={handleBurgerClose} className="mb-16" type="button">
            <img src={closeIcon} alt="closing icon" />
          </button>
          <nav className="flex flex-col gap-5">
            <NavItem className="text-black block" to="/">
              Home
            </NavItem>
            <NavItem className="text-black block" to="/about">
              About
            </NavItem>
            <NavItem className="text-black block" to="/products">
              Products
            </NavItem>
            <NavItem className="text-black block" to="/contact">
              Contact
            </NavItem>
            <NavItem
              className="text-white bg-black rounded-[10px] w-[165px] p-3 flex justify-center items-center"
              to="/signup-page"
            >
              Sign Up
            </NavItem>
          </nav>
        </div>
      )}
    </>
  );
};

export default BurgerMenu;
