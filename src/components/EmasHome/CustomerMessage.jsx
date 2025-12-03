import React from "react";

const CustomerMessage = () => {
  return (
    <section className="relative w-full flex justify-center px-6 py-16 bg-[#F8FFF4] overflow-hidden">

      {/* Soft organic background texture */}
      <div className="absolute inset-0 -z-10 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')]"></div>

      {/* Subtle green radial glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-green-300/20 blur-3xl rounded-full -z-10"></div>

      <div className="max-w-4xl text-center space-y-6">

        

        {/* Title */}
        <h2
          className="
            text-2xl md:text-3xl font-bold text-[#0d8061]
          "
        >
          🌿 Discover Natural Wellness Crafted for Your Everyday Health
        </h2>

        {/* Message */}
        <p className="text-gray-700 text-sm md:text-lg leading-relaxed px-2">
          Experience the perfect blend of purity, quality, and affordability.  
          Our wellness essentials are thoughtfully made to support your body naturally 
          helping you feel better, live healthier, and stay energized every day.
        </p>

        {/* Shop Now Button */}
        <button
          className="
            mt-3 px-8 py-3 rounded-full font-semibold text-white
            bg-gradient-to-r from-[#0d8061] to-[#14b383]
            shadow-lg hover:shadow-2xl
            hover:scale-[1.05]
            transition-all duration-300
          "
        >
          Shop Now
        </button>
      </div>

     

    </section>
  );
};

export default CustomerMessage;
