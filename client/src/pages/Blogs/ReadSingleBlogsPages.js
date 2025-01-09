import React from 'react'
import NavbarContent from "../../component/Navbar/NavbarContent";
import ReadSingleBlogs from '../../component/Blogs/ReadSingleBlogs';
const ReadSingleBlogsPages = () => {
  return (
    <div>
      <header className="fixed top-0 left-0">
        <NavbarContent />
      </header>
      <main className='min-h-screen flex justify-center items-center'>
        <section className='mt-[60px]'>
          <ReadSingleBlogs/>
        </section>
      </main>
    </div>
  )
}

export default ReadSingleBlogsPages
