import React from "react";

const B3Component = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full h-[100vh] flex flex-col sm:flex-row">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <h1 className="font-bold text-4xl mb-4">Daur Ulang Sampah B3</h1>
          <p className="text-lg">
            Sampah B3 Sampah B3 merujuk pada sampah berbahaya dan beracun (B3).
            Sampah ini memiliki sifat-sifat yang dapat menyebabkan kerusakan
            lingkungan atau kesehatan manusia jika tidak dikelola dengan benar.
            Istilah "B3" sendiri merupakan singkatan dari "Bahan Berbahaya dan
            Beracun".
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-B3 bg-cover bg-center" />
      </section>

      {/* How to Process Section */}
      <section className="w-full h-[10vh] flex flex-col sm:flex-row justify-center items-center">
        <h1 className="text-2xl font-bold text-[#474747]">Cara Pengolahan</h1>
      </section>

      {/* Responsive Card Section */}
      <section className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[50vh] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[35vh] flex flex-col sm:flex-row rounded-[8px] mb-4 shadow-lg overflow-hidden">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <p className="text-lg">
            Penyimpanan: B3 harus disimpan sementara untuk mencegah kontaminasi
            lingkungan.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-B3pill bg-cover bg-center" />
      </section>
      <section className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[50vh] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[35vh] flex flex-col sm:flex-row rounded-[8px] mb-4 shadow-lg overflow-hidden">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <p className="text-lg">
            Pemilahan: melibatkan pemisahan sampah B3 dari sampah non-B3 agar
            dapat dikelola secara terpisah.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-B3battery bg-cover bg-center" />
      </section>
      <section className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[50vh] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[35vh] flex flex-col sm:flex-row rounded-[8px] mb-4 shadow-lg overflow-hidden">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <p className="text-lg">
            Kimia: Melibatkan reaksi kimia untuk mereduksi atau mengubah bahan
            berbahaya menjadi bentuk yang lebih aman.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-B3Chemist bg-cover bg-center" />
      </section>
    </div>
  );
};

export default B3Component;
