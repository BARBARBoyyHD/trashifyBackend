import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import UpdateBlogsComponent from "../../component/Blogs/UpdateBlogsComponent";
const UpdateBlogsPages = () => {
  return (
    <div>
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className='min-h-screen flex justify-center items-center'>
        <section className='mt-[70px]'>
          <UpdateBlogsComponent/>
        </section>
        </main>
    </div>
  );
};

export default UpdateBlogsPages;
