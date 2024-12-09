import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import logo from "../../assets/logo.png";
const FooterHomePages = () => {
  return (
    <footer className="bg-[#4C4B16] text-white py-8 px-4 mt-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {/* Company Info */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Trashify</h3>
          <p className="text-sm">
            Solusi Lingkungan Bersih dan Hidup Sehat. We are committed to
            providing effective waste management solutions for a better
            environment.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <a href="#home" className="hover:text-gray-400">
                Home
              </a>
            </li>
            <li>
              <a href="#services" className="hover:text-gray-400">
                Services
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:text-gray-400">
                Contact
              </a>
            </li>
            <li>
              <a href="#about" className="hover:text-gray-400">
                About Us
              </a>
            </li>
          </ul>
        </div>

        {/* Social Media */}
        <div className="flex flex-col space-y-4">
          <h3 className="text-xl font-bold">Follow Us</h3>
          <div className="flex gap-4 text-2xl">
            <a href="#" className="hover:text-blue-600">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-blue-400">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-pink-500">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-blue-700">
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="flex flex-col space-y-4">
          <img
            src={logo}
            alt="Logo"
            className="w-40 h-auto transition-transform transform hover:scale-110"
          />
        </div>
      </div>

      {/* Copyright */}
      <div className="mt-8 text-center text-sm text-gray-400">
        <p>&copy; 2024 Trashify. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default FooterHomePages;
