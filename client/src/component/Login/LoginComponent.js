import React from "react";

const LoginComponent = () => {
  return (
    <section className=" bg-white/30 shadow-lg backdrop-blur-md rounded-lg w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Masuk ke Trashify
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

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
        >
          Masuk
        </button>
      </form>

      {/* Additional Links */}
      <p className="text-sm text-gray-600 text-center mt-6">
        Belum punya akun?{" "}
        <a
          href="/pages/register"
          className="text-green-500 font-medium hover:underline"
        >
          Daftar di sini
        </a>
      </p>
    </section>
  );
};

export default LoginComponent;
