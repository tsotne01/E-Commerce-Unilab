const NavList = ({ className, children }) => {
  return (
    <nav
      className={`items-center gap-x-6 hidden  sm:hidden md:flex lg:flex ${className}`}
    >
      {children}
    </nav>
  );
};

export default NavList;
