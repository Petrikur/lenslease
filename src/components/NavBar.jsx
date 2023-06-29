import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import cameraImg from "../assets/images/logo1.png";

export const NavBar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav);
  };

  const handleClose = () => {
    setNav(false);
  };

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "about", label: "About" },
    { to: "equipment", label: "Equipment" },
    { to: "testimonials", label: "Testimonials" },
    { to: "contact", label: "Contact" },
  ];

  return (
    <div className="w-screen h-[80px] z-10 fixed drop-shadow-lg pt-10">
      <div className="px-2 flex justify-around items-center w-full h-full">
        <div className="flex items-center">
          <div className="flex items-center justify-center">
            <img src={cameraImg} alt="camImg" className="w-[600px] h-[600px]" />
          </div>
          <ul className="hidden lg:flex space-x-7 ml-40">
            {navLinks.map((link, idx) => (
              <li key={idx}>
                <Link
                  className="text-xl text-black hover:text-red-500 font-bold"
                  to={link.to}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="hidden lg:flex pr-4">
          <button className="border-none bg-transparent text-black  mr-4 font-bold text-xl hover:text-red-500">
            Login
          </button>
          <button className="px-8 py-3 bg-red-500 rounded text-white font-bold text-xl hover:bg-red-600 hover:py-4">
            Sign up
          </button>
        </div>
        <div className="lg:hidden mr-4" onClick={handleClick}>
          {!nav ? <FiMenu size={20} /> : <FiX className="" size={20} />}
        </div>
      </div>

      {/* Mobile */}
      <ul
        className={
          !nav
            ? "hidden"
            : "gap-2 fixed opacity-96 bg-gray-100 h-screen w-screen flex flex-col pt-10 mt-2 items-center px-8"
        }
      >
        {navLinks.map((link, idx) => (
          <li className="w-full" key={idx}>
            <Link
              className="flex text-xl flex-col border-b-2 w-full border-black text-center py-2 text-black hover:text-red-500"
              to={link.to}
              onClick={handleClose}
            >
              {link.label}
            </Link>
          </li>
        ))}
        <div className="flex flex-col my-4 ">
          <button className="menuButton">Sign In</button>
          <button className="menuButton">Sign Up</button>
        </div>
      </ul>
    </div>
  );
};
