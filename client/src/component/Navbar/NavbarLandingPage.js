import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IoPersonOutline } from "react-icons/io5";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai"; // Importing menu and close icons
import logo from "../../assets/logo.png";

const NavbarLandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // For toggling the mobile menu

  // Check if the screen size is smaller than or equal to 768px
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    window.addEventListener("resize", handleResize);
    handleResize(); // Set the initial state based on window size

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  // Toggle the mobile menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/30 shadow-lg backdrop-blur-md z-10">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <div className="">
          <img
            src={logo}
            alt="Logo"
            className="w-20 h-auto transition-transform transform hover:scale-110"
          />
        </div>

        {/* Mobile Hamburger Icon */}
        {isMobile && (
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className={`text-gray-800 transition-transform ${
                isMenuOpen ? "animate-spin" : ""
              }`} // Add spinning animation when menu is open
            >
              {isMenuOpen ? (
                <AiOutlineClose className="text-2xl" />
              ) : (
                <AiOutlineMenu className="text-2xl" />
              )}
            </button>
          </div>
        )}

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className="text-gray-800 hover:text-green-500 transition-colors"
          >
            Beranda
          </Link>
          <Link
            to="/about"
            className="text-gray-800 hover:text-green-500 transition-colors"
          >
            Tentang Kami
          </Link>
          <Link
            to="/contact"
            className="text-gray-800 hover:text-green-500 transition-colors"
          >
            Kontak Kami
          </Link>
        </div>

        {/* Account Section for Desktop */}
        <div className="hidden lg:flex items-center space-x-2">
          <IoPersonOutline className="text-xl text-gray-800" />
          <Link
            to="/pages/login"
            className="text-gray-800 hover:text-green-500 transition-colors"
          >
            Masuk/Daftar
          </Link>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobile && (
        <div
          className={`lg:hidden ${
            isMenuOpen ? "block" : "hidden"
          } bg-white/90 py-4`}
        >
          <div className="flex flex-col items-center space-y-4">
            <Link
              to="/"
              className="text-gray-800 hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)} // Close menu after clicking a link
            >
              Beranda
            </Link>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Tentang Kami
            </Link>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Kontak Kami
            </Link>

            {/* Masuk/Daftar in Mobile Menu */}
            <Link
              to="/pages/login"
              className="text-gray-800 hover:text-green-500 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              Masuk/Daftar
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarLandingPage;