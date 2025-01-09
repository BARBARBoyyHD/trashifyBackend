import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import UserProfile from "../../component/Profile/UserProfile";

const UserProfilePages = () => {
  return (
    <div>
      <header>
        <NavbarContent />
      </header>
      <main className="min-h-screen flex justify-center items-center">
        <section className="mt-[95px]">
          <UserProfile />
        </section>
      </main>
    </div>
  );
};

export default UserProfilePages;
