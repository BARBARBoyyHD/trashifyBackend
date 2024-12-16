import React from "react";
import NavbarContent from "../../component/Navbar/NavbarContent";
import BlogsContent from "../../component/Blogs/BlogsContent";

const BlogsPages = () => {
  return (
    <div className="flex flex-col">
      {" "}
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className="w-auto mt-[90px] border border-black">
        <section>
          <BlogsContent />
        </section>
      </main>
    </div>
  );
};

export default BlogsPages;
