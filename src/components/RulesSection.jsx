// src/components/RulesSection.jsx
import React, { useEffect } from "react";

const RulesSection = () => {

  // Auto scroll to top when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">

      {/* Soft Leaf BG */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header Tag */}
        <p
          className="
            inline-block uppercase tracking-[0.30em]
            text-[#0d8061] text-[13px] md:text-sm font-bold
            bg-gradient-to-r from-[#E6FFF5] to-[#FFFFFF]
            px-7 py-2 rounded-full mb-4
            border border-[#0d8061]/20 shadow-sm
          "
        >
          RULES & REGULATIONS
        </p>

        {/* Title */}
        <h2
          className="
            text-3xl md:text-4xl font-extrabold text-[#0F3E2D]
            leading-snug mb-12
          "
        >
          Ethical Business Guidelines for EMAS Distributors
        </h2>

        {/* Content Card */}
        <div
          className="
            p-8 md:p-10 rounded-3xl
            bg-white/90 backdrop-blur-xl
            border border-gray-200 shadow-xl
            leading-relaxed space-y-6
          "
        >

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            The following Rules and Regulations of <strong>EMAS</strong> are 
            formulated and implemented to safeguard the rights and dignity of 
            EIOD distributors while regulating the conduct of business.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            To mould yourself as a responsible and ethical distributor of EMAS, 
            you must understand and abide by all company policies, code of 
            conduct, and legal compliance guidelines set forth by the company.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            Violation of these Rules and Regulations may result in appropriate 
            action, including <strong>termination of your EIOD distributorship</strong>.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            EMAS reserves the sole right to <strong>modify, update or amend</strong> 
            its policies and regulations without prior notice. All distributors 
            are required to stay updated by regularly checking the official 
            website:
          </p>

          <p className="text-[15.5px] text-[#0d8061] font-semibold">
            🌐 www.myemas.in
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            You are expected to follow all updates and changes diligently to 
            remain fully compliant with EMAS operational standards.
          </p>

        </div>

      </div>
    </section>
  );
};

export default RulesSection;
