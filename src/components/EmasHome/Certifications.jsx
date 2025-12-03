// src/components/EmasHome/Certifications.jsx
import React from "react";

// Import Certification Images
import s1 from "../../assets/Certifications/s1.jpg";
import s2 from "../../assets/Certifications/s2.jpg";
import s3 from "../../assets/Certifications/s3.jpg";
import s4 from "../../assets/Certifications/s4.jpg";
import s5 from "../../assets/Certifications/s5.jpg";
import s6 from "../../assets/Certifications/s6.jpg";
import s7 from "../../assets/Certifications/s7.jpg";
import s8 from "../../assets/Certifications/s8.jpg";
import s9 from "../../assets/Certifications/s9.jpg";
import s10 from "../../assets/Certifications/s10.jpg";
import s11 from "../../assets/Certifications/s11.jpg";
import s13 from "../../assets/Certifications/s13.jpg";

const certImages = [
  s1, s2, s3, s4, s5, s6,
  s7, s8, s9, s10, s11, s13
];

const Certifications = () => {
  return (
    <section className="w-full py-16 px-6 bg-white">

      {/* Title */}
      <h2 className="
        text-3xl md:text-4xl font-extrabold text-center 
        text-[#0F3E2D] mb-10
      ">
        Our Certifications
      </h2>

      {/* Outer Box (white card + border) */}
      <div className="
        max-w-7xl mx-auto rounded-3xl border border-gray-300 
        bg-white shadow-md px-4 py-6 md:px-10 md:py-10
      ">

        {/* Logos in one clean row on desktop */}
        <div className="
          flex flex-wrap justify-center items-center
          gap-x-8 gap-y-8 md:gap-x-12 md:gap-y-10
        ">
          {certImages.map((img, i) => (
            <div
              key={i}
              className="
                w-[80px] h-[80px] sm:w-[95px] sm:h-[95px] md:w-[110px] md:h-[110px]
                flex items-center justify-center
              "
            >
              <img
                src={img}
                alt={`cert-${i}`}
                className="object-contain w-full h-full"
              />
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;
