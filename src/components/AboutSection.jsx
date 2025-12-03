// src/components/AboutSection.jsx
import React, { useEffect } from "react";

const AboutSection = () => {

  // 🔥 Auto scroll to top whenever AboutSection loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">

      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header Tag */}
        <p
          className="
            inline-block uppercase tracking-[0.30em]
            text-[#0d8061] text-[13px] md:text-sm font-bold
            bg-gradient-to-r from-[#91e1c1] to-[#bef5ca]
            px-7 py-2 rounded-full mb-4
            border border-[#0d8061]/20 shadow-sm
          "
        >
          ABOUT EMAS
        </p>

        {/* Main Title */}
        <h2
          className="
            text-3xl md:text-4xl font-extrabold text-[#0F3E2D]
            leading-snug mb-12
          "
        >
          A Modern Solution for Today’s Lifestyle
        </h2>

        {/* BENEFITS SECTION */}
        <div className="grid md:grid-cols-2 gap-12 mb-20">

          {/* Left Column */}
          <div>
            <p className="text-lg text-gray-700 leading-relaxed mb-6">
              Our health foods and herbal supplements support:
            </p>

            <ul className="space-y-3 text-lg text-[#0F3E2D] font-semibold leading-relaxed">
              <li>✔ Balanced Lifestyle</li>
              <li>✔ Detox & Immunity Boost</li>
              <li>✔ Better Digestion</li>
              <li>✔ Enhanced Mental Clarity</li>
              <li>✔ Fast-Paced Modern Routines</li>
            </ul>

            <p className="text-gray-600 mt-6 leading-relaxed">
              EMAS products are designed to empower your well-being—naturally.
            </p>
          </div>

          {/* Right Highlight Box */}
          <div
            className="
              bg-white/90 backdrop-blur-xl
              p-8 rounded-3xl border border-[#0d8061]/20 shadow-xl
              bg-gradient-to-br from-[#E6FFF5] via-white to-[#FFFFFF]
            "
          >
            <p className="text-gray-700 leading-relaxed text-[15.5px]">
              EMAS & OORI are registered under the Govt. of India with
              <span className="font-semibold">
                {" "}
                ISO 9001:2015, APEDA, FDA, GMP, FSSAI, HALAL, Tea Board of India, Spices Board of India
              </span>{" "}
              and Organic Certifications.
              <br /><br />
              We manufacture, export and supply a wide range of organic health care and
              natural food products with international-grade quality standards.
            </p>
          </div>

        </div>

        {/* FULL DESCRIPTION */}
        <div
          className="
            p-8 md:p-10 rounded-3xl
            bg-white/90 backdrop-blur-xl
            border border-gray-200 shadow-xl
            leading-relaxed space-y-6
          "
        >
          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            Our product portfolio includes Organic Health Care Products, Herbal Powders,
            Health Spices, Dry Fruits, Seeds, Agro Fertilizers, Whey Protein,
            Beverages, Herbal Cosmetics, Natural Honey, Green Tea, Masalas,
            Edible Oils, Dals, Atta, Palm Sugar, Instant Mixes, and more.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            Founded in 2009, our factory is located at Sanjeevi Hills, Dindigul —
            close to Madurai, Trichy, Coimbatore and Chennai International Airports,
            ensuring smooth global distribution.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            EMAS is globally recognized for delivering premium-quality natural &
            organic products with strict quality control and world-class packaging.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            Our research-driven approach enables us to manufacture herbal foods,
            organic dry fruits, natural fertilizers and agricultural solutions such as
            Panchakavya—all produced under stringent hygienic standards.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            EMAS products are in high market demand due to superior purity,
            international-grade packaging, and guaranteed repeat demand.
          </p>

          <p className="text-gray-700 text-[15.5px] leading-[1.9]">
            Our natural health foods are perfectly suited for today's modern lifestyle—
            fast-paced, wellness-focused, and mentally intensive—while staying deeply
            rooted in traditional herbal wisdom.
          </p>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
