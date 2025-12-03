// src/components/EmasHome/HeroSlider.jsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

import e5 from "../../assets/FirstSlide/e5.jpg";
import e6 from "../../assets/FirstSlide/e6.jpg";
import e7 from "../../assets/FirstSlide/e7.jpg";
import e8 from "../../assets/FirstSlide/e8.jpg";
import e9 from "../../assets/FirstSlide/e9.jpg";
import e10 from "../../assets/FirstSlide/e10.jpg";
import e11 from "../../assets/FirstSlide/e11.jpg";
import e12 from "../../assets/FirstSlide/e12.jpg";
import s13 from "../../assets/FirstSlide/s13.jpeg";
import s14 from "../../assets/FirstSlide/s14.jpeg";
import s15 from "../../assets/FirstSlide/s15.jpeg";
import s16 from "../../assets/FirstSlide/s16.jpeg";
import s17 from "../../assets/FirstSlide/s17.jpeg";
import s18 from "../../assets/FirstSlide/s18.jpeg";

const images = [
  e5, e6, e7, e8, e9, e10, e11, e12,
  s13, s14, s15, s16, s17, s18
];

const HeroSlider = () => {
  const [index, setIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const timer = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
        setFade(true);
      }, 200);
    }, 3000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section
      className="
        w-full flex justify-center px-4
        py-8 md:py-12
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
        {/* Fade Image */}
        <img
          src={images[index]}
          alt=""
          className={`
            relative z-10 w-full
            h-[300px] sm:h-[380px] md:h-[470px] lg:h-[550px]
            object-contain sm:object-cover
            transition-opacity duration-700 ease-in-out
            ${fade ? "opacity-100" : "opacity-0"}
          `}
        />

        {/* Subtle Overlay */}
        <div className="
          absolute inset-0 z-20
          bg-gradient-to-t from-black/40 via-transparent to-black/5
        "></div>

        {/* Left Arrow */}
        <button
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
              setFade(true);
            }, 200);
          }}
          className="
            absolute left-5 top-1/2 -translate-y-1/2 z-30
            bg-white/30 backdrop-blur-md p-2 sm:p-3 rounded-full
            border border-white/50 shadow-xl
            hover:bg-[#14b383] hover:border-[#0d8061]
            transition-all duration-300 hover:scale-125
            opacity-0 group-hover:opacity-100
          "
        >
          <FiChevronLeft size={22} className="sm:hidden text-white" />
          <FiChevronLeft size={30} className="hidden sm:block text-white" />
        </button>

        {/* Right Arrow */}
        <button
          onClick={() => {
            setFade(false);
            setTimeout(() => {
              setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
              setFade(true);
            }, 200);
          }}
          className="
            absolute right-5 top-1/2 -translate-y-1/2 z-30
            bg-white/30 backdrop-blur-md p-2 sm:p-3 rounded-full
            border border-white/50 shadow-xl
            hover:bg-[#14b383] hover:border-[#0d8061]
            transition-all duration-300 hover:scale-125
            opacity-0 group-hover:opacity-100
          "
        >
          <FiChevronRight size={22} className="sm:hidden text-white" />
          <FiChevronRight size={30} className="hidden sm:block text-white" />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2 z-30">
          {images.map((_, i) => (
            <div
              key={i}
              onClick={() => {
                setFade(false);
                setTimeout(() => {
                  setIndex(i);
                  setFade(true);
                }, 200);
              }}
              className={`
                w-3.5 h-3.5 rounded-full cursor-pointer
                transition-all duration-300
                ${
                  i === index
                    ? "bg-[#15d69c] scale-125 shadow-md"
                    : "bg-white/40"
                }
              `}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSlider;
