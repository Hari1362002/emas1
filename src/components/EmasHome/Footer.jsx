import React from "react";

import EmasMainLogo from "../../assets/em1.png";
import EmasHealthLogo from "../../assets/nh.jpeg";
import OoriLogo from "../../assets/oori.png";

import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = ({ activePage, togglePage }) => {
  return (
    <footer className="w-full py-10 px-4 md:py-16 md:px-6 relative overflow-hidden">

      {/* Hover fade overlay */}
      <div
        className="
          absolute inset-0 opacity-0 hover:opacity-40 transition-opacity duration-500
          bg-gradient-to-b from-transparent via-[#0d8061]/10 to-[#0B6A50]/20
          pointer-events-none
        "
      ></div>

      <div
        className="
          max-w-7xl mx-auto animate-[slideUp_0.7s_ease-out]
          p-[3px] md:p-[4px] rounded-2xl md:rounded-3xl relative
          bg-gradient-to-r from-[#0d8061] via-[#14b383] to-[#0d8061]
          shadow-[0_10px_40px_rgba(0,0,0,0.20)]
        "
      >

        <div
          className="
            bg-white rounded-2xl md:rounded-3xl py-10 px-5 md:py-14 md:px-14
            shadow-md border border-gray-200 relative z-10
          "
        >

          {/* GRID */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12">

            {/* ABOUT */}
            <div>
              <img src={EmasMainLogo} alt="EMAS" className="w-28 md:w-32 mb-3 md:mb-4" />
              <p className="text-gray-600 text-xs sm:text-sm leading-relaxed">
                Explore our premium health care products crafted for purity,
                exceptional quality and natural wellness.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#0F3E2D] mb-3 md:mb-4">
                Company
              </h3>

              <ul className="space-y-2 sm:space-y-3 text-gray-700 text-xs sm:text-sm">

                {[
                  ["about", "About Us"],
                  ["terms", "Terms & Conditions"],
                  ["privacy", "Privacy Policy"],
                  ["rules", "Rules & Regulations"],
                  ["ethics", "Code of Ethics"],
                  ["lofty", "Lofty Goal"],
                  ["contact", "Contact Us"]
                ].map(([key, label]) => (
                  <li key={key}>
                    <button
                      onClick={() => togglePage(key)}
                      className={`
                        font-semibold transition-all duration-300
                        ${
                          activePage === key
                            ? "text-[#0d8061] bg-[#E6FFF5] px-2 py-[6px] sm:px-3 sm:py-1 rounded-md border border-[#0d8061]/40 shadow-sm"
                            : "text-gray-700 hover:text-[#0d8061]"
                        }
                      `}
                    >
                      {label}
                    </button>
                  </li>
                ))}

              </ul>
            </div>

            {/* CONTACT INFO */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#0F3E2D] mb-3 md:mb-4">
                Contact Us
              </h3>

              <img src={EmasHealthLogo} alt="EMAS Health" className="w-28 md:w-32 mb-3" />

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed mb-3">
                <strong>Registered Office :</strong><br />
                Old No. 225 New No. 218,<br />
                Thambu Chetty Street,<br />
                Parry's, Chennai – 600001
              </p>

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed">
                <strong>Admin Office & Factory :</strong><br />
                No: 639/1B & 641/1A, M.P. Thottam,<br />
                Natham Main Road, Koovanootthu,<br />
                Dindigul – 624304, Tamil Nadu
              </p>
            </div>

            {/* SOCIAL */}
            <div>
              <h3 className="text-base md:text-lg font-semibold text-[#0F3E2D] mb-3 md:mb-4">
                Connect With Us
              </h3>

              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">

                {/* Facebook */}
                <a
                  href="https://www.facebook.com/emasorganicnaturalayurveda"
                  target="_blank"
                  className="
                    w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200
                    flex items-center justify-center text-[#0d8061]
                    shadow-md transition-all duration-300
                    hover:bg-[#14b383] hover:text-white hover:shadow-[0_0_20px_#14b383]
                  "
                >
                  <FaFacebook size={18} className="md:size-20" />
                </a>

                {/* Instagram */}
                <a
                  href="https://www.instagram.com/emasorganicnaturalayurveda"
                  target="_blank"
                  className="
                    w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200
                    flex items-center justify-center text-[#0d8061]
                    shadow-md transition-all duration-300
                    hover:bg-gradient-to-r hover:from-[#ff5f95] hover:to-[#ff9a5a]
                    hover:text-white hover:shadow-[0_0_20px_#ff6699]
                  "
                >
                  <FaInstagram size={18} className="md:size-22" />
                </a>

                {/* YouTube */}
                <a
                  href="https://www.youtube.com/@MYEMAS"
                  target="_blank"
                  className="
                    w-10 h-10 md:w-12 md:h-12 rounded-full bg-white border border-gray-200
                    flex items-center justify-center text-[#cc0000]
                    shadow-md transition-all duration-300
                    hover:bg-[#ff0000] hover:text-white hover:shadow-[0_0_20px_#ff3333]
                  "
                >
                  <FaYoutube size={18} className="md:size-22" />
                </a>

              </div>

              <img src={OoriLogo} alt="Oori" className="w-28 md:w-32 opacity-90" />
            </div>
          </div>

          <div className="text-center text-gray-500 text-xs sm:text-sm mt-10 md:mt-12">
            © {new Date().getFullYear()} EMAS. All rights reserved.
          </div>

        </div>
      </div>
    </footer>
  );
};

export default Footer;
