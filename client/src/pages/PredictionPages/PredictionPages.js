import React, { useState, useEffect } from "react";
import Prediction from "../../component/Prediciton/Prediction";
import NavbarContent from "../../component/Navbar/NavbarContent";
import { FaTrashAlt } from "react-icons/fa";
import { FaRecycle } from "react-icons/fa";
import { IoNewspaperOutline } from "react-icons/io5";
import { FaImage } from "react-icons/fa";
import { Link } from "react-router-dom";

function PredictionPages() {
  return (
    <div>
      <header>
        <NavbarContent />
      </header>
      <main className=" flex flex-col justify-center items-center min-h-screen">
        <section className=" ">
          <Prediction />
        </section>
        <section className="gap-6 w-full flex flex-wrap justify-center mb-4">
          <div className="flex flex-row gap-6 ">
            <Link to={"/pages/waste/tpa"}>
              <div className="w-[100px] h-[100px] border border-black bg-emerald-500 rounded-[8px] flex justify-center items-center">
                <FaTrashAlt className="text-5xl text-white" />
              </div>
            </Link>

            <Link to={"/pages/pages/wastemanagement"}>
              <div className="w-[100px] h-[100px] border border-black bg-emerald-500 rounded-[8px] flex justify-center items-center">
                <FaRecycle className="text-5xl text-white" />
              </div>
            </Link>
          </div>
          <div className="flex flex-row gap-6 ">
            <Link to={"/pages/blogs"}>
              <div className="w-[100px] h-[100px] border border-black bg-emerald-500 rounded-[8px] flex justify-center items-center">
                <IoNewspaperOutline className="text-5xl text-white" />
              </div>
            </Link>

            <Link to={"/pages/waste/gallery"}>
              <div className="w-[100px] h-[100px] border border-black bg-emerald-500 rounded-[8px] flex justify-center items-center">
                <FaImage className="text-5xl text-white" />
              </div>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}

export default PredictionPages;
