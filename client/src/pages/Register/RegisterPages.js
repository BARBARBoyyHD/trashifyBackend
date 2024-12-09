import React from 'react'
import RegisterComponent from '../../component/Register/RegisterComponent'
import NavbarLoginPages from '../../component/Navbar/NavbarLoginPages'
const RegisterPages = () => {
  return (
    <div className="flex flex-col min-h-screen bg-gray-100">
      {/* Navbar */}
      <header className="fixed top-0 left-0 w-full z-10">
    <NavbarLoginPages />
      </header>

      {/* Main Content */}
      <main className="flex-grow flex flex-col justify-center items-center mt-[80px] px-4">
       <RegisterComponent/>
      </main>
    </div>
  )
}

export default RegisterPages
