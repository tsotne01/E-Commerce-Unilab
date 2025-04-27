import React from "react";
import logo from "../assets/Logo/Logo.svg";

const Footer = () => {
  return (
    <footer>
      <div className="w-full bg-[#F0F0F0]">
        <div>
          <img src={logo} alt="" />
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
