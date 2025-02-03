import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import AnorganicComponent from "../../component/Waste/AnorganicComponent";
const AnorganicPages = () => {
  return (
    <div className="flex flex-col">
      {" "}
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className="w-auto mt-[90px]">
        <section>
          <AnorganicComponent/>
        </section>
      </main>
    </div>
  );
};

export default AnorganicPages;
