import React from "react";

const AnorganicComponent = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center">
      {/* Hero Section */}
      <section className="w-full h-[100vh] flex flex-col sm:flex-row">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <h1 className="font-bold text-4xl mb-4">
            Daur Ulang Sampah Anorganik
          </h1>
          <p className="text-lg">
            Sampah non-organik adalah jenis sampah yang tidak terbuat dari bahan
            organik atau bahan yang tidak berasal dari makhluk hidup. Sampah
            non-organik umumnya terdiri dari bahan-bahan seperti plastik, kaca,
            logam, kertas, dan tekstil. Karakteristik utama dari sampah
            non-organik adalah bahwa bahan-bahannya tidak mudah terurai secara
            alami.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-Anorganik bg-cover bg-center" />
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
            Daur Ulang: mengolah sampah plastik dengan merubahnya menjadi barang
            memiliki nilai jual dan siap pakai (dompet).
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-dompet bg-cover bg-center" />
      </section>
      <section className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[50vh] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[35vh] flex flex-col sm:flex-row rounded-[8px] mb-4 shadow-lg overflow-hidden">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <p className="text-lg">
            Pembakaran: pembakaran sampah anorganik pada suhu tinggi.
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-bakar bg-cover bg-center" />
      </section>
      <section className="w-[90vw] h-[60vh] sm:w-[70vw] sm:h-[50vh] md:w-[50vw] md:h-[40vh] lg:w-[40vw] lg:h-[35vh] flex flex-col sm:flex-row rounded-[8px] mb-4 shadow-lg overflow-hidden">
        {/* Left Section */}
        <article className="w-full h-full bg-gradient-to-b from-lime-200 from-0% via-lime-900 via-50% to-lime-900 to-100% text-white flex flex-col justify-center p-6">
          <p className="text-lg">
            Daur Ulang: mengolah sampah plastik menjadi  pot bunga yang bernilai jual
          </p>
        </article>

        {/* Right Section with Background Image */}
        <div className="w-full h-full bg-potbunga bg-cover bg-center" />
      </section>
    </div>
  );
};

export default AnorganicComponent;
