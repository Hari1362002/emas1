// src/components/EmasHome/Benefits.jsx
import React from "react";
import benefitImg from "../../assets/benifit.png"; // ← Added your image path

const Benefits = () => {
  return (
    <section className="w-full py-20 px-6 bg-[#F8FFF4] relative">

      {/* Soft leaf background */}
      <div className="absolute inset-0 opacity-[0.05] bg-[url('https://www.transparenttextures.com/patterns/leaf.png')] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 relative z-10">

        {/* LEFT CONTENT */}
        <div className="flex flex-col justify-center">
         <p className="
  inline-block uppercase tracking-[0.32em]
  text-white text-sm md:text-lg font-semibold
  bg-gradient-to-r from-[#0b6a50] via-[#0d8061] to-[#14b383]
  px-8 py-2 rounded-full
  shadow-[0_3px_12px_rgba(20,179,131,0.35)]
  backdrop-blur-sm
">
  EMAS BENEFITS
</p>




          <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3E2D] mb-5 leading-snug">
            Natural Wellness Powered by<br /> Ayurveda & Herbal Science
          </h2>

          <p className="text-gray-600 text-[15px] md:text-[16px] leading-relaxed mb-6">
            EMAS herbal formulations are crafted to support immunity, digestion, detox,
            mental clarity, physical energy, and overall well-being through 100% natural
            high-potency herbs.
          </p>

          {/* BENEFIT BULLETS */}
          <ul className="space-y-4 text-[16px] md:text-lg font-medium text-[#0F3E2D]">
            <li className="flex items-center gap-3">
              🌿 <span>Boosts natural immunity</span>
            </li>
            <li className="flex items-center gap-3">
              💚 <span>Improves digestion & gut balance</span>
            </li>
            <li className="flex items-center gap-3">
              ⚡ <span>Enhances energy & recovery</span>
            </li>
            <li className="flex items-center gap-3">
              🧘 <span>Reduces stress & improves sleep</span>
            </li>
            <li className="flex items-center gap-3">
              🩺 <span>100% Herbal · No Chemicals · Certified Safe</span>
            </li>
          </ul>
        </div>

        {/* RIGHT IMAGE */}
        <div className="
          bg-white/60 backdrop-blur-xl rounded-3xl p-4 shadow-xl
          border border-[#0d8061]/10 hover:shadow-2xl transition-all duration-500
        ">
          <img
            src={benefitImg}
            alt="Health and Fitness Benefits"
            className="rounded-2xl w-full h-auto object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Benefits;
