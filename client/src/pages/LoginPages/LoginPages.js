import React from "react";
import NavbarLoginPages from "../../component/Navbar/NavbarLoginPages";
import LoginComponent from "../../component/Login/LoginComponent";

const LoginPages = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-10">
        <NavbarLoginPages />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center mt-[80px] px-4">
       <LoginComponent/>
      </main>
    </div>
  );
};

export default LoginPages;
