import React from "react";
import logo from "../assets/Logo/Logo.svg";
import emailIcon from "../assets/Icons/Email-icon.svg";
import Input from "./Ui/SearchInput";
import Button from "./Ui/Button";
import NavList from "./Ui/NavList";
import { NavItem } from "./Ui/NavItem";

const Footer = () => {
  return (
    <footer>
      <div className="translate-y-[50%] w-[90%] max-w[1240px] mx-auto flex-col gap-x-3 gap-y-[14px] md:flex-row flex justify-between items-center py-9 px-16 min-h-[180px] bg-black rounded-[20px]">
        <h2 className="text-white text-[32px] md:text-4xl font-extrabold integral-cf max-w-[551px]">
          STAY UPTO DATE ABOUT OUR LATEST OFFERS
        </h2>
        <div>
          <Input
            className="bg-white px-3 py-2 rounded-[62px] mb-3"
            placeholder="Enter your email address"
            icon={emailIcon}
          />
          <Button variant="secondary" className="rounded-[62px] font-medium">
            Subscribe to Newsletter
          </Button>
        </div>
      </div>
      <div className="w-full bg-[#F0F0F0] md:px-[100px] pt-[140px] pb-[40px] flex flex-col md:flex-row gap-x-[113px]">
        <div className="max-w-[248px]">
          <img src={logo} alt="" />
          <p>
            We have clothes that suits your style and which you’re proud to
            wear. From women to men.
          </p>
        </div>
        <div className="grid grid-cols-4 grid-rows-1 gap-x-[113px]">
          <NavList className="flex flex-col satoshi text-[#00000099]">
            <h3 className="satoshi mb-4 text-black uppercase font-bold leading-4">
              Company
            </h3>
            <NavItem className="mb-2">About</NavItem>
            <NavItem className="mb-2">Features </NavItem>
            <NavItem className="mb-2">Works </NavItem>
            <NavItem className="mb-2">Career</NavItem>
          </NavList>
          <NavList className="flex flex-col satoshi text-[#00000099]">
            <h3 className=" mb-4 uppercase text-black font-bold leading-4">
              HELP
            </h3>
            <NavItem className="mb-2"> Customer Support</NavItem>
            <NavItem className="mb-2">Delivery Details </NavItem>
            <NavItem className="mb-2">Terms & Conditions</NavItem>
            <NavItem className="mb-2">Privacy Policy</NavItem>
          </NavList>
          <NavList className="flex flex-col satoshi text-[#00000099]">
            <h3 className="satoshi mb-4 uppercase text-black font-bold leading-4">
              FAQ
            </h3>
            <NavItem className="mb-2">Account</NavItem>
            <NavItem className="mb-2">Account </NavItem>
            <NavItem className="mb-2">Manage Deliveries </NavItem>
            <NavItem className="mb-2">Orders</NavItem>
          </NavList>
          <NavList className="flex flex-col satoshi text-[#00000099]">
            <h3 className="satoshi mb-4 uppercase font-bold text-black leading-4">
              Resources
            </h3>
            <NavItem className="mb-2">Free eBooks </NavItem>
            <NavItem className="mb-2">Development Tutorial </NavItem>
            <NavItem className="mb-2">How to - Blog</NavItem>
            <NavItem className="mb-2">Youtube Playlist</NavItem>
          </NavList>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
