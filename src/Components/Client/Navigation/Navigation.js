import { useState } from "react";
import { Link, Outlet } from "react-router-dom";

import { Bars3Icon } from "@heroicons/react/24/outline";
import Footer from "../Footer/Footer";

const Navigation = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => {
    setToggleMenu(!toggleMenu);
  };

  const handleLinkClick = () => {
    setToggleMenu(false);
  };

  return (
    <>
      {/* Sticky Navbar */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <nav>
          <div className="mx-auto capitalize bg-black text-[18px] w-full">
            <div className="flex items-center justify-between p-4 mx-auto">
              <div className="flex items-center">
                <Link to="/">
                  <div className="pl-4">
                    {/* <img src={logo} alt="Logo" className="h-[50px] w-[180px]" /> */}
                    <span className="text-lg font-bold text-white">LOGO</span>
                  </div>
                </Link>
              </div>
              <div className="flex gap-6 font-bold ">
                {/* Desktop Menu */}
                <div className="items-center hidden gap-10 pr-4 text-white lg:flex">
                  <Link to="/" onClick={handleLinkClick}>Home</Link>
                  <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                  <Link to="/about" onClick={handleLinkClick}>About Us</Link>
                </div>
                {/* Mobile Menu Toggle */}
                <div className="flex items-center lg:hidden">
                  <button onClick={handleToggleMenu}>
                    <Bars3Icon className="h-7 text-white pr-[15px]" />
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          <div
            className={`fixed z-40 w-full bg-black overflow-hidden flex flex-col lg:hidden gap-4 ${
              toggleMenu ? "h-auto" : "h-0"
            }`}
          >
            <div className="px-8 pb-2 text-center text-white">
              <div className="flex flex-col gap-6 pt-4 pb-4 font-bold tracking-wide">
                <Link to="/" onClick={handleLinkClick}>Home</Link>
                <Link to="/contact" onClick={handleLinkClick}>Contact</Link>
                <Link to="/about" onClick={handleLinkClick}>About Us</Link>
              </div>
            </div>
          </div>
        </nav>
      </header>
      {/* Main Content */}
      <div onClick={handleLinkClick}>
        <Outlet />
      </div>
      <div className="bg-[black] h-auto">
      <Footer/>
      </div>
    </>
  );
};

export default Navigation;
