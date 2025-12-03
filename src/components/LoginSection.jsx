import React, { useEffect } from "react";
import { FiMail, FiLock } from "react-icons/fi";

const LoginSection = ({ togglePage }) => {

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full min-h-screen bg-[#F8FFF4] px-6 py-20">
      <div className="max-w-md mx-auto bg-white p-10 rounded-3xl shadow-xl border border-gray-200">
        
        <h2 className="text-3xl font-bold text-[#0F3E2D] text-center mb-8">
          Login to Your Account
        </h2>

        {/* EMAIL */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Email</label>
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg bg-white">
            <FiMail className="text-[#0d8061] text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* PASSWORD */}
        <div className="mb-5">
          <label className="block text-gray-700 font-medium mb-2">Password</label>
          <div className="flex items-center gap-3 border border-gray-300 px-4 py-3 rounded-lg bg-white">
            <FiLock className="text-[#0d8061] text-xl" />
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* FORGOT PASSWORD */}
        <div className="text-right mb-6">
          <button 
            className="text-[#0d8061] font-semibold hover:underline"
            onClick={() => togglePage("forgot")}
          >
            Forgot Password?
          </button>
        </div>

        {/* LOGIN BUTTON */}
        <button
          className="
            w-full bg-[#14b383] hover:bg-[#0d8061]
            text-white py-3 rounded-lg font-bold shadow-md transition
          "
        >
          Login
        </button>
      </div>
    </section>
  );
};

export default LoginSection;
