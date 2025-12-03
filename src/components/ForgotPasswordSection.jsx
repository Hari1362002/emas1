import React, { useEffect, useState } from "react";
import { FiMail, FiArrowLeft } from "react-icons/fi";

const ForgotPasswordSection = ({ togglePage }) => {

  const [email, setEmail] = useState("");
  const [popupMsg, setPopupMsg] = useState("");
  const [popupType, setPopupType] = useState("");

  // Email validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Auto scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  // Popup helper
  const showPopup = (msg, type) => {
    setPopupMsg(msg);
    setPopupType(type);
    setTimeout(() => {
      setPopupMsg("");
      setPopupType("");
    }, 3000);
  };

  const handleSendLink = () => {
    if (!email) {
      showPopup("Please enter your email address.", "error");
      return;
    }

    if (!emailRegex.test(email)) {
      showPopup("Enter a valid email address.", "error");
      return;
    }

    // Success
    showPopup("✔ Reset link sent to your email!", "success");
    setEmail("");
  };

  return (
    <section className="w-full min-h-screen bg-[#F8FFF4] px-4 sm:px-6 py-28 sm:py-32">

      {/* POPUP MESSAGE */}
      {popupMsg && (
        <div
          className={`
            w-full text-center py-3 mb-6 font-semibold rounded-md 
            animate-fadeIn transition-all duration-300
            ${popupType === "success" ? "bg-[#14b383] text-white" : "bg-red-500 text-white"}
          `}
        >
          {popupMsg}
        </div>
      )}

      <div
        className="
          max-w-md mx-auto 
          bg-white p-6 sm:p-10 
          rounded-3xl shadow-xl border border-gray-200 
        "
      >
        {/* BACK BUTTON */}
        <button
          onClick={() => togglePage("login")}
          className="
            flex items-center gap-2 text-[#0d8061] 
            font-semibold mb-6 hover:underline
          "
        >
          <FiArrowLeft /> Back to Login
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold text-[#0F3E2D] text-center mb-4">
          Forgot Password
        </h2>

        <p className="text-gray-600 text-center mb-8 text-sm sm:text-base leading-relaxed">
          Enter your registered email and we will send you a password reset link.
        </p>

        {/* EMAIL INPUT */}
        <div className="mb-6">
          <label className="block text-gray-700 font-medium mb-2">
            Email Address
          </label>

          <div className="
            flex items-center gap-3 
            border border-gray-300 px-4 py-3 rounded-lg bg-white
            focus-within:ring-2 focus-within:ring-[#14b383] focus-within:border-[#14b383]
            transition
          ">
            <FiMail className="text-[#0d8061] text-xl" />
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full outline-none text-gray-700"
            />
          </div>
        </div>

        {/* SEND BUTTON */}
        <button
          onClick={handleSendLink}
          className="
            w-full bg-[#14b383] hover:bg-[#0d8061]
            text-white py-3 sm:py-3.5 rounded-lg 
            font-bold shadow-md transition
          "
        >
          Send Reset Link
        </button>
      </div>
    </section>
  );
};

export default ForgotPasswordSection;
