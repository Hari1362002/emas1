// src/components/CodeOfEthicsSection.jsx
import React, { useEffect } from "react";

const CodeOfEthicsSection = () => {

  // Auto scroll to top
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header */}
        <p className="
          inline-block uppercase tracking-[0.30em]
          text-[#0d8061] text-[13px] md:text-sm font-bold
          bg-gradient-to-r from-[#E6FFF5] to-[#FFFFFF]
          px-7 py-2 rounded-full mb-4
          border border-[#0d8061]/20 shadow-sm
        ">
          EMAS — CODE OF ETHICS
        </p>

        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3E2D] mb-10">
          Professional Code of Conduct for EIOD Distributors
        </h2>

        {/* CONTENT BOX */}
        <div className="
          p-8 md:p-10 rounded-3xl
          bg-white/90 backdrop-blur-xl
          border border-gray-200 shadow-xl
          leading-relaxed space-y-6
          text-[15.5px] text-gray-700
        ">

          <ul className="space-y-4 leading-[1.9] font-medium">

            <li>
              ✔ I will follow the highest standard of honesty and integrity in the
              Emas business.
            </li>

            <li>
              ✔ I will present the Company’s Marketing Plan accurately and honestly,
              clearly portraying the level of effort required to achieve success.
            </li>

            <li>
              ✔ I will not make negative or disparaging remarks about the Company,
              its products, officers, employees or other distributors.
            </li>

            <li>
              ✔ I will not encourage or teach downstream distributors to offer
              commission rebates or discounts to manipulate pricing.
            </li>

            <li>
              ✔ I will not use the Company’s trademarks, logos, literature, advertising,
              or events to promote any business unrelated to EMAS.
            </li>

            <li>
              ✔ I will strive to ensure that my customers and fellow EIOD distributors
              are satisfied with EMAS products and support services.
            </li>

            <li>
              ✔ I will abide by all EMAS EIOD Distributor Rules and Regulations at all
              times.
            </li>

            <li>
              ✔ I will not engage in fraudulent, misleading or unethical business
              practices.
            </li>

            <li>
              ✔ During and after my association with the Company, I will not indulge in
              any activity that harms the reputation or interests of EMAS.
            </li>

          </ul>

        </div>
      </div>
    </section>
  );
};

export default CodeOfEthicsSection;
