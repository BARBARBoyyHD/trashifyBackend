import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { userProfile } from "../../redux";
import { BsTrash3 } from "react-icons/bs";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaRadiation } from "react-icons/fa";
import { Link } from "react-router-dom";

// Reusable Card Component
const WasteCard = ({ icon: Icon, title }) => (
  <div className="flex flex-col justify-center items-center">
    <div className="w-[200px] h-[200px] border bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% rounded-[8px] flex justify-center items-center">
      <Icon className="text-white text-7xl" />
    </div>
    <h1 className="font-bold mt-2">{title}</h1>
  </div>
);

const WasteComponent = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.userProfile);

  useEffect(() => {
    dispatch(userProfile());
  }, [dispatch]);

  return (
    <div className="min-h-screen flex flex-col">
      {/* Hero Section */}
      <section className="w-full h-[100vh] flex flex-col sm:flex-row">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <h1 className="font-bold text-4xl mb-4">Daur Ulang Sampah</h1>
          <p className="text-lg">
            Berfungsi untuk mengurangi jumlah sampah yang harus dibuang ke
            Tempat Pembuangan Akhir (TPA). Daur Ulang bermanfaat memenuhi
            kebutuhan akan bahan baku suatu produk. Dan dari segi penggunaan
            bahan bakar, adanya Daur Ulang dapat menghemat energi yang harus
            dikeluarkan suatu pabrik.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-pplGarbage bg-cover bg-center" />
      </section>

      {/* Profile Section */}
      <section className="w-full h-[50vh] flex flex-col justify-center items-center space-y-4">
        {data && Array.isArray(data) && data.length > 0 ? (
          <div className="text-lg space-y-2 text-[#474747] text-center">
            <p className="font-bold text-4xl">Hai {data[0].username}</p>
            <p className="font-bold text-4xl">Daur Ulang Apa hari ini?</p>
          </div>
        ) : (
          <p>No profile data available.</p>
        )}
        <p className="text-[#474747] text-center">
          Ayo cari tau jenis sampah dan bagaimana cara pengolahannya 😚
        </p>
      </section>

      {/* Waste Categories Section */}
      <section className="w-full h-[100vh] flex flex-col sm:flex-row justify-center items-center gap-6 p-4">
        <Link to={"/pages/waste/anorganic"}>
          <WasteCard icon={BsTrash3} title="Sampah Anorganik" />
        </Link>
        <Link to={"/pages/waste/organic"}>
          <WasteCard icon={IoFastFoodOutline} title="Sampah Organik" />
        </Link>
        <Link to={"/pages/waste/b3waste"}>
          <WasteCard icon={FaRadiation} title="Sampah B3" />
        </Link>
      </section>
    </div>
  );
};

export default WasteComponent;
