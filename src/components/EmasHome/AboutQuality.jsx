// src/components/EmasHome/AboutQuality.jsx
import React from "react";

const qualityCards = [
  {
    title: "Quality Standard",
    text: `Our commitment to quality is unwavering. Each product undergoes rigorous testing and adheres to the highest industry standards, ensuring purity, potency, and safety. We source only the finest ingredients, meticulously selected for their quality and efficacy, to deliver products you can trust for your well-being.`,
    base: "from-[#FFE9D1] via-[#FFF7EE] to-[#E2FFF5]",
  },
  {
    title: "Product Uniqueness",
    text: `Discover unparalleled innovation and efficacy with our unique products crafted to complement your healthy lifestyle. From cutting-edge formulations to exclusive ingredients sourced from around the globe, each product is designed to offer you a truly exceptional experience, setting us apart in the realm of wellness.`,
    base: "from-[#FDE8F2] via-[#FFF4E5] to-[#E4FFF3]",
  },
  {
    title: "Production Management",
    text: `At the heart of our operations lies a seamless production management system dedicated to precision and excellence. From sourcing raw materials to manufacturing and packaging, every step is meticulously monitored to ensure consistency, quality, and sustainability. With state-of-the-art facilities and stringent protocols, we guarantee products of the highest caliber, produced with utmost care and integrity.`,
    base: "from-[#F3E9FF] via-[#FFF4E5] to-[#E6FFF4]",
  }
];

const AboutQuality = () => {
  return (
    <section className="w-full py-16 md:py-20 px-4 bg-[#F8FFF4]">

      {/* TOP TEXT */}
      <p className="text-center text-sm md:text-base font-semibold text-[#0d8061] tracking-wide mb-2">
        PREMIUM PRODUCTS
      </p>

      {/* MAIN TITLE */}
      <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-center text-[#0F3E2D] mb-12 leading-tight">
        Elevate your lifestyle with premium products tailored for your health.
      </h2>

      {/* GRID */}
      <div className="
        max-w-7xl mx-auto 
        grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 
        gap-6 md:gap-8
      ">

        {qualityCards.map((card, index) => (
          <div key={index} className="group relative">

            {/* Gradient Border Wrapper */}
            <div
              className={`
                p-[2px] rounded-2xl h-full
                bg-gradient-to-r ${card.base}
                shadow-[0_0_18px_rgba(0,0,0,0.08)]
                transition-all duration-700
                group-hover:shadow-[0_0_26px_rgba(0,0,0,0.14)]
                group-hover:-translate-y-1
                group-hover:scale-[1.02]
              `}
            >
              {/* Inner Card */}
              <div
                className="
                  relative p-6 sm:p-6 md:p-7
                  rounded-2xl bg-white/90 backdrop-blur-xl
                  shadow-md overflow-hidden transition-all duration-700
                  
                  group-hover:bg-gradient-to-br
                  group-hover:from-[#0d8061]
                  group-hover:via-[#0faa73]
                  group-hover:to-[#14b383]

                  flex flex-col h-full
                  min-h-[250px] sm:min-h-[260px] md:min-h-[280px]
                "
              >
                {/* Hover Glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-30 bg-white/10 blur-xl transition duration-700"></div>

                {/* Shine Bubble */}
                <div className="absolute -top-10 -left-10 w-28 h-28 rounded-full bg-white/20 blur-2xl opacity-0 group-hover:opacity-30 group-hover:translate-x-16 group-hover:translate-y-16 transition-all duration-[1200ms]"></div>

                {/* Floating Circle */}
                <div className="absolute -bottom-10 -right-10 w-40 h-40 rounded-full bg-black/10 blur-xl opacity-40 group-hover:opacity-70 animate-[float_4s_ease-in-out_infinite] transition-all duration-700"></div>

                {/* CONTENT */}
                <div className="relative z-20 flex flex-col flex-grow">

                  {/* Title */}
                  <h3 className="
                    text-lg sm:text-xl md:text-2xl font-bold mb-2
                    text-[#0F3E2D] transition-all duration-500
                    group-hover:text-white
                  ">
                    {card.title}
                  </h3>

                  {/* Text */}
                  <p className="
                    text-sm sm:text-[20px] md:text-[15px] leading-relaxed
                    text-[#333] font-medium flex-grow
                    transition-all duration-500
                    group-hover:text-white/90
                  ">
                    {card.text}
                  </p>

                </div>
              </div>
            </div>

          </div>
        ))}

      </div>

      {/* FLOAT keyframes */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-5px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
};

export default AboutQuality;
