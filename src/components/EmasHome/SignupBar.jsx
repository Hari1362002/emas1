import React, { useState } from "react";

const SignupBar = () => {
  const [email, setEmail] = useState("");
  const [popupMsg, setPopupMsg] = useState("");
  const [popupType, setPopupType] = useState(""); // "success" or "error"

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const handleSubscribe = () => {
    setPopupMsg("");
    setPopupType("");

    // Validate email empty
    if (!email) {
      showPopup("Please enter your email address.", "error");
      return;
    }

    // Validate email format
    if (!emailRegex.test(email)) {
      showPopup("⚠️ Please enter a valid email address.", "error");
      return;
    }

    // Success
    showPopup("🎉 Thanks for subscribing!", "success");
    setEmail("");
  };

  // Popup handler
  const showPopup = (message, type) => {
    setPopupMsg(message);
    setPopupType(type);

    setTimeout(() => {
      setPopupMsg("");
      setPopupType("");
    }, 3000);
  };

  return (
    <section className="w-full bg-[#1B2735] py-12 md:py-16 px-6 border-t border-b border-white/15">

      {/* POPUP MESSAGE */}
      {popupMsg && (
        <div
          className={`
            w-full text-center py-3 font-semibold animate-fadeIn 
            ${popupType === "success" ? "bg-[#14b383] text-white" : "bg-red-500 text-white"}
          `}
        >
          {popupMsg}
        </div>
      )}

      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 
        border border-white/10 rounded-2xl p-6 md:p-10">

        {/* LEFT TEXT BLOCK */}
        <div className="text-center md:text-left max-w-xl">
          <h3 className="text-white text-2xl md:text-3xl font-semibold mb-3">
            Sign Up Now
          </h3>

          <p className="text-gray-300 leading-relaxed text-sm md:text-base">
            Join our community and be the first to know about exclusive deals, 
            promotions and updates. Subscribe to our newsletter today.
          </p>
        </div>

        {/* RIGHT INPUT + BUTTON */}
        <div className="flex flex-col w-full md:w-auto gap-2">

          <div className="flex w-full md:w-auto gap-3">
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
                w-full md:w-[350px] px-4 py-3 rounded-lg
                bg-white text-gray-800
                border border-gray-300
                focus:ring-2 focus:ring-[#14b383] focus:border-[#14b383]
                outline-none transition
              "
            />

            <button
              onClick={handleSubscribe}
              className="
                bg-[#14b383] hover:bg-[#0d8061]
                text-white px-6 py-3 rounded-lg
                font-semibold transition shadow-md
              "
            >
              Subscribe
            </button>
          </div>

        </div>

      </div>

    </section>
  );
};

export default SignupBar;
