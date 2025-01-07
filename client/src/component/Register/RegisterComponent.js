import React, { useState } from "react";
import { register } from "../../redux"; // Ensure this path is correct
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const RegisterComponent = () => {
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.register);

  const [form, setForm] = useState({
    username: "",
    password: "",
    email: "",
    date: "",
  });
  const navigate = useNavigate();

  // Handle form input changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    // No need to format the date anymore
    const formattedForm = { ...form };
    console.log("Formatted Data:", formattedForm); // Debugging line
    dispatch(
      register(formattedForm, () => {
        navigate("/pages/login");
      })
    );
  };

  return (
    <section className="bg-white/30 shadow-lg backdrop-blur-md rounded-lg w-full max-w-md p-8">
      <h1 className="text-2xl font-bold text-gray-700 text-center mb-6">
        Daftar ke Trashify
      </h1>

      {/* Registration Form */}
      <form className="space-y-6" onSubmit={handleSubmit}>
        {/* Username Input */}
        <div>
          <label
            htmlFor="username"
            className="block text-sm font-medium text-gray-700"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            name="username"
            value={form.username}
            onChange={handleChange}
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
            value={form.password}
            onChange={handleChange}
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
            value={form.email}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            placeholder="Masukkan email Anda"
            required
          />
        </div>

        {/* date Input */}
        <div>
          <label
            htmlFor="date"
            className="block text-sm font-medium text-gray-700"
          >
            Tanggal Lahir
          </label>
          <input
            type="date"
            id="date"
            name="date"
            value={form.date}
            onChange={handleChange}
            className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
            required
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
          disabled={loading}
        >
          {loading ? "Registering..." : "Register"}
        </button>
      </form>

      {/* Error Handling */}
      {error && <p className="text-red-500 text-sm mt-4">{error}</p>}

      {/* Redirect to Sign In */}
      <p className="text-sm text-gray-600 text-center mt-6">
        sudah punya akun ?
        <a
          href="/pages/login"
          className="text-green-500 font-medium hover:underline"
        >
          Sign in
        </a>
      </p>
    </section>
  );
};

export default RegisterComponent;
