import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
const NavbarLoginPages = () => {
  return (
    <nav className="fixed top-0 left-0 w-full z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="">
          <Link to="/">
            <img
              src={logo}
              alt="Logo"
              className="w-20 h-auto transition-transform transform hover:scale-110"
            />
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default NavbarLoginPages;
