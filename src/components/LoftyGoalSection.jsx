// src/components/LoftyGoalSection.jsx
import React, { useEffect } from "react";

const LoftyGoalSection = () => {

  // Auto-scroll to top when section loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">

      {/* Background pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-5xl mx-auto bg-white/90 backdrop-blur-xl 
        border border-gray-200 shadow-xl rounded-3xl p-10">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3E2D] mb-6">
          LOFTY GOAL
        </h2>

        {/* Paragraph Content */}
        <p className="text-gray-700 leading-[1.9] text-[16px] mb-6">
          Our goal is to bring the finest Healthcare and Homecare solutions 
          available globally into the hands of people who aspire for the best 
          results — “The future of all Nations” — at the most affordable prices.
        </p>

        <p className="text-gray-700 leading-[1.9] text-[16px] mb-6">
          We are committed to delivering exceptional quality products to 
          households across urban and semi-urban regions, focusing on nutrition, 
          wellness, natural cosmetics, personal care, and home care solutions.
        </p>

        <p className="text-gray-700 leading-[1.9] text-[16px] mb-6">
          Our vision is to become the most trusted and admired brand in both 
          Healthcare and Homecare industries — recognized for our ethics, values, 
          transparency, and unwavering dedication to sustainability.
        </p>

        <p className="text-gray-700 leading-[1.9] text-[16px]">
          We aim to be a global leader in healthcare by manufacturing and 
          supplying superior-quality products that contribute to the wellness, 
          happiness, and overall well-being of humankind. Through innovation and 
          commitment, we strive to bring health and happiness to every home.
        </p>

      </div>
    </section>
  );
};

export default LoftyGoalSection;
