import React from "react";
import NavbarLandingPage from "../../component/Navbar/NavbarLandingPage";
import HomePagesContent from "../../component/Content/HomePagesContent";
import WasteNews from "../../component/News/WasteNews";
import tree from "../../assets/tree.png"
import FooterHomePages from "../../component/Footer/FooterHomePages";

const HomePages = () => {
  return (
    <div className="flex flex-col bg-white">
      {/* Fixed Navbar */}
      <header className="fixed top-0 left-0">
        <NavbarLandingPage />
      </header>
        <main>
            <section className=" bg-[url('/src/assets/tree.png')] bg-cover bg-center bg-no-repeat  w-[auto] h-[auto] min-h-screen mt-[80px] flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <HomePagesContent/>
                </div>
            </section>
            <section className="w-[auto] h-[auto] min-h-screen flex flex-col justify-center items-center">
                <div className="flex flex-col justify-center items-center">
                    <WasteNews/>
                </div>
            </section>
        </main>
        <footer>
            <FooterHomePages/>
        </footer>
    </div>
  );
};

export default HomePages;
