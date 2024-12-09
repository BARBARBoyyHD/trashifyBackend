import React from "react";

const RegisterComponent = () => {
  return (
    <section className=" bg-white/30 shadow-lg backdrop-blur-md rounded-lg w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Daftar ke Trashify
      </h1>

      {/* Login Form */}
      <form className="space-y-6">
        {/* Email Input */}
        <div>
          <label
            htmlFor="Username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="Username"
            name="Username"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan Username Anda"
            required
          />
        </div>

        {/* Password Input */}
        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Kata Sandi
          </label>
          <input
            type="password"
            id="password"
            name="password"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan kata sandi Anda"
            required
          />
        </div>
        {/* Email Input */}
        <div>
          <label
            htmlFor="email"
            className="block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan email Anda"
            required
          />
        </div>
        {/* Birthday Input */}
        <div>
          <label
            htmlFor="birthday"
            className="block text-sm font-medium text-gray-700"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="birthday"
            name="birthday"
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
        >
          Register
        </button>
      </form>
      <p className="text-sm text-gray-600 text-center mt-6">
        {" "}
        <a
          href="/pages/login"
          className="text-green-500 font-medium hover:underline"
        >
          sign in 
        </a>
      </p>
    </section>
  );
};

export default RegisterComponent;
