import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import OrganicComponent from "../../component/Waste/OrganicComponent";
const OrganicPages = () => {
  return (
    <div className="flex flex-col">
      {" "}
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className="w-auto mt-[90px] border border-black">
        <section>
          <OrganicComponent />
        </section>
      </main>
    </div>
  );
};

export default OrganicPages;
