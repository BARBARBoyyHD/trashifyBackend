import React from "react";
import { TiArrowRight } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const HomePagesContent = () => {

    const navigate = useNavigate()
    const navigateToLogin = ()=>{
        navigate("/pages/login")
    }

  return (
    <div className="bg-tree bg-cover bg-center flex flex-col justify-center items-center text-center space-y-6 min-h-screen p-4">
      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-white leading-tight">
        Trashify
      </h1>

      {/* Subtitle */}
      <h2 className="text-lg md:text-xl font-semibold text-white max-w-lg">
        Solusi Lingkungan Bersih dan Hidup Sehat
      </h2>

      {/* Button */}
      <div className="mt-8">
        <button onClick={navigateToLogin}className="flex items-center gap-3 px-8 py-4 border border-white bg-white/30 backdrop-blur-md shadow-lg rounded-md text-white font-semibold text-lg hover:bg-white/50 hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50 transition-all duration-300 transform hover:scale-105">
          Mulai Sekarang
          <TiArrowRight className="text-2xl" />
        </button>
      </div>
    </div>
  );
};

export default HomePagesContent;
