const NavList = ({ children }) => {
  return (
    <nav className="items-center gap-x-6 hidden  sm:hidden md:flex lg:flex">
      {children}
    </nav>
  );
};

export default NavList;
