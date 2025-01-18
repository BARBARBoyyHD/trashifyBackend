import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import B3Component from "../../component/Waste/B3Component";
const B3WastePages = () => {
  return (
    <div className="flex flex-col">
      {" "}
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className="w-auto mt-[90px] border border-black">
        <section>
        <B3Component/>
        </section>
      </main>
    </div>
  );
};

export default B3WastePages;
