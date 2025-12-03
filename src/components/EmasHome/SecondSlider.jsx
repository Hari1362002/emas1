// src/components/EmasHome/SecondSlider.jsx
import React, { useState, useEffect } from "react";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

// IMAGES
import s1 from "../../assets/SecondSlide/01.jpeg";
import s2 from "../../assets/SecondSlide/02.jpeg";
import s3 from "../../assets/SecondSlide/03.jpeg";
import s4 from "../../assets/SecondSlide/04.jpeg";
import s5 from "../../assets/SecondSlide/05.jpeg";
import s6 from "../../assets/SecondSlide/06.jpeg";

const images = [s1, s2, s3, s4, s5, s6];

const SecondSlider = () => {
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

  const prevSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i === 0 ? images.length - 1 : i - 1));
      setFade(true);
    }, 200);
  };

  const nextSlide = () => {
    setFade(false);
    setTimeout(() => {
      setIndex((i) => (i === images.length - 1 ? 0 : i + 1));
      setFade(true);
    }, 200);
  };

  return (
    <section className="w-full flex justify-center px-4 py-10 md:py-14
      bg-gradient-to-b from-[#0A7A5C] via-[#0E8F67] to-[#0B6A50] select-none">

      <div
        className="
          relative w-full max-w-7xl rounded-3xl overflow-hidden
          shadow-2xl group border-[6px] border-[#0B4A39]
          bg-[#0A2F25]
        "
      >

        {/* PERFECT-FIT IMAGE WRAPPER */}
        <div
          className="
            relative overflow-hidden 
            w-full
            flex items-center justify-center
            bg-[#0A2F25]      /* background for contain */
            rounded-2xl
            h-[260px] sm:h-[340px] md:h-[450px] lg:h-[550px]
          "
        >
          <img
            src={images[index]}
            alt=""
            className={`
              w-full h-full
              object-contain            /* ⭐ PERFECT FIT */
              transition-opacity duration-700
              ${fade ? "opacity-100" : "opacity-0"}
            `}
          />
        </div>

        {/* Overlay */}
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-black/40 via-transparent to-black/10 pointer-events-none"></div>

        {/* LEFT ARROW */}
        <button
          onClick={prevSlide}
          className="
            absolute left-4 top-1/2 -translate-y-1/2 z-20
            bg-white/30 backdrop-blur-md 
            p-2 sm:p-3 md:p-4 rounded-full
            border border-white/40 shadow-xl
            hover:bg-[#14b383] hover:border-[#0d8061]
            transition-all duration-300 hover:scale-110
            opacity-0 group-hover:opacity-100
          "
        >
          <FiChevronLeft size={22} className="text-white sm:hidden" />
          <FiChevronLeft size={28} className="hidden sm:block md:hidden text-white" />
          <FiChevronLeft size={32} className="hidden md:block lg:hidden text-white" />
          <FiChevronLeft size={38} className="hidden lg:block text-white" />
        </button>

        {/* RIGHT ARROW */}
        <button
          onClick={nextSlide}
          className="
            absolute right-4 top-1/2 -translate-y-1/2 z-20
            bg-white/30 backdrop-blur-md 
            p-2 sm:p-3 md:p-4 rounded-full
            border border-white/40 shadow-xl
            hover:bg-[#14b383] hover:border-[#0d8061]
            transition-all duration-300 hover:scale-110
            opacity-0 group-hover:opacity-100
          "
        >
          <FiChevronRight size={22} className="text-white sm:hidden" />
          <FiChevronRight size={28} className="hidden sm:block md:hidden text-white" />
          <FiChevronRight size={32} className="hidden md:block lg:hidden text-white" />
          <FiChevronRight size={38} className="hidden lg:block text-white" />
        </button>

        {/* DOTS */}
        <div className="absolute bottom-6 w-full flex justify-center gap-2 z-20">
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

export default SecondSlider;
