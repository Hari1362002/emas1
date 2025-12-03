import React from "react";
import emasLogo from "../../assets/em1.png";

const categories = [
  { name: "Herbs Extract Capsules", icon: "🌿" },
  { name: "Honey Health Foods", icon: "🍯" },
  { name: "Honey Varieties", icon: "🏺" },
  { name: "Whey Protein Supplements", icon: "🥛" },
  { name: "Health Beverages", icon: "🍵" },
  { name: "Food Herbs Powders", icon: "🌾" },
  { name: "Health Malt Foods", icon: "🥗" },
  { name: "Herbal Tablets", icon: "💊" },
];

const CategoryGrid = () => {
  return (
    <section className="w-full py-12 px-6 bg-[#F8FFF4] relative">

      {/* Soft Background Pattern */}
      <div className="absolute inset-0 -z-10 opacity-10">
        <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/white-wall.png')]"></div>
      </div>

      <div className="max-w-7xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={emasLogo}
            alt="EMAS"
            className="w-36 md:w-44 object-contain drop-shadow-md"
          />
        </div>

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-[#0F3E2D] text-center mb-10">
          Health Care Products
        </h2>

        {/* GRID */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8">

          {categories.map((item, index) => (
            <div
              key={index}
              className="
                relative p-6 pt-8 rounded-3xl text-center
                bg-gradient-to-br from-white via-[#F3FFF8] to-[#DBF5E3]
                border border-green-200
                shadow-md hover:shadow-lg
                transition-all duration-300
              "
            >

              {/* 🔹 Thin EMAS-Green line (INSIDE top, flush to box edge) */}
              <div className="absolute top-0 left-0 right-0 h-[4px]
                  bg-gradient-to-r from-[#0d8061] to-[#14b383]
                  rounded-t-3xl">
              </div>

              {/* Floating Icon ONLY */}
              <div
                className="
                  text-5xl mb-4 relative z-10
                  animate-[float_3s_ease-in-out_infinite]
                "
              >
                {item.icon}
              </div>

              {/* Category Name */}
              <p className="font-semibold text-[#0F3E2D] text-[15px]">
                {item.name}
              </p>

            </div>
          ))}

        </div>
      </div>

      {/* FLOAT ANIMATION */}
      <style>{`
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-6px); }
          100% { transform: translateY(0px); }
        }
      `}</style>

    </section>
  );
};

export default CategoryGrid;
