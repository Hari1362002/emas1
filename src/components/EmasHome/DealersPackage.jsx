// src/components/EmasHome/DealersPackage.jsx
import React from "react";
import dpImage from "../../assets/DP.png"; // ⭐ Correct final path

const DealersPackage = () => {
  return (
    <section
      className="
        w-full flex justify-center px-4
        py-10 md:py-14
        bg-gradient-to-b from-[#0A7A5C] via-[#0E8F67] to-[#0B6A50]
        select-none
      "
    >
      <div
        className="
          relative w-full max-w-7xl rounded-3xl overflow-hidden
          shadow-2xl group border-[6px] border-[#0B4A39]
          bg-[#0A2F25]
        "
      >
        {/* Subtle top fade overlay */}
        <div
          className="
            absolute inset-0 z-10
            bg-gradient-to-t from-black/40 via-transparent to-black/5
          "
        ></div>

        {/* MAIN IMAGE */}
        <img
          src={dpImage}
          alt="Dealers Package"
          className="
            relative z-20 w-full
            h-auto object-cover
            transition-all duration-700 ease-in-out
          "
        />

        {/* Title Over Banner (Optional – remove if not needed) */}
        <div className="absolute top-6 left-1/2 -translate-x-1/2 z-30">
          <h2 className="text-3xl md:text-4xl font-bold text-white drop-shadow-xl text-center">
        
          </h2>
        </div>
      </div>
    </section>
  );
};

export default DealersPackage;
