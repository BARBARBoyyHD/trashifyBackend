import React, { useState } from "react";
import LogoNoText from "../../assets/LogoNoText.png";
import { login } from "../../redux";
import { useDispatch, useSelector } from "react-redux";
import LoadingSpinner from "../Loading/LoadingSpinner"; // Assuming this path is correct
import { useNavigate } from "react-router-dom";
import { FaSpinner } from "react-icons/fa"; 

const LoginComponent = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, data, error } = useSelector((state) => state.login);
  const [form, setForm] = useState({
    username: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formattedForm = { ...form };
    dispatch(
      login(formattedForm, (responseStatus) => {
        if (responseStatus === 200) {
          navigate("/pages/prediction"); // Redirect on successful login
        }
      })
    );
  };

  return (
    <div className="w-full flex justify-center items-center h-screen flex-col max-w-md p-8">
      <div className="flex justify-center flex-col items-center mb-2">
        <img
          className="w-20 h-auto transition-transform transform hover:scale-110"
          src={LogoNoText}
          alt="Logo"
        />
        <h1 className="text-black font-poppins font-bold">TRASHIFY</h1>
      </div>

      <section className="bg-white/30 shadow-lg backdrop-blur-md rounded-lg w-full max-w-md p-8">
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
              onChange={(e) => setForm({ ...form, username: e.target.value })}
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
              onChange={(e) => setForm({ ...form, password: e.target.value })}
              className="mt-1 block w-full p-3 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-green-500 focus:border-green-500"
              placeholder="Masukkan kata sandi Anda"
              required
            />
          </div>

          {/* Submit Button with Loading Spinner */}
          <button
            type="submit"
            className="w-full bg-green-500 text-white font-medium py-3 rounded-lg shadow-lg hover:bg-green-600 focus:ring-2 focus:ring-green-400 focus:outline-none transition-all"
            disabled={loading} // Disable button when loading
          >
            {/* Show the spinner only when loading is true */}
            {loading ? (
              <div className="flex items-center justify-center">
                <FaSpinner className="animate-spin mr-2" /> Masuk
              </div>
            ) : (
              "Masuk"
            )}
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
    </div>
  );
};

export default LoginComponent;
