import { NavLink } from "react-router-dom";

export const NavItem = ({ to, className, children }) => {
  return (
    <NavLink className={`satoshi font-light text-base ${className}`} to={to}>
      {children}
    </NavLink>
  );
};
