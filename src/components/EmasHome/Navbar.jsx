import React, { useState, useEffect, useRef } from "react";
import {
  FiSearch,
  FiUser,
  FiHeart,
  FiHome,
  FiChevronDown,
  FiPhoneCall,
  FiInfo
} from "react-icons/fi";

import emasLogo from "../../assets/em1.png";

const Navbar = ({ togglePage }) => {
  const [desktopOpen, setDesktopOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [showMobileSearch, setShowMobileSearch] = useState(false);

  const desktopRef = useRef(null);
  const mobileRef = useRef(null);

  // ❌ REMOVED AUTO POSITION LOGIC
  // We’ll just use a fixed top for dropdowns

  /* CLOSE WHEN CLICK OUTSIDE */
  useEffect(() => {
    const handler = (e) => {
      if (desktopRef.current && !desktopRef.current.contains(e.target)) {
        setDesktopOpen(false);
      }
      if (mobileRef.current && !mobileRef.current.contains(e.target)) {
        setMobileOpen(false);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <>
      {/* NAVBAR */}
      <header
        className="
          w-full fixed top-0 left-0 z-[9999]
          bg-gradient-to-r from-[#e4fcef] to-[#f9fffb]
          backdrop-blur-md shadow-lg border-b border-white/40
        "
      >
        <div
          className="
            max-w-7xl mx-auto px-4 lg:px-6 py-4
            flex items-center justify-between
          "
        >

          {/* LOGO → HOME */}
          <img
            src={emasLogo}
            alt="EMAS"
            className="w-24 md:w-32 drop-shadow-sm cursor-pointer"
            onClick={() => togglePage(null)}
          />

          {/* DESKTOP SEARCH */}
          <div className="
            hidden md:flex items-center
            w-[380px] lg:w-[460px]
            bg-white/80 border border-green-300 rounded-full px-4 py-2 shadow-sm
          ">
            <FiSearch className="text-green-800 text-xl" />
            <input
              type="text"
              placeholder="Search products…"
              className="ml-2 w-full bg-transparent outline-none text-gray-700"
            />
          </div>

          {/* DESKTOP ICONS */}
          <div className="hidden md:flex items-center gap-7 text-green-900">
            <DesktopIcon icon={<FiHome />} label="Home" onClick={() => togglePage(null)} />
            <DesktopIcon icon={<FiHeart />} label="Wishlist" />
            <DesktopIcon icon={<FiUser />} label="Account" onClick={() => togglePage("login")} />

            <DropdownDesktop
              open={desktopOpen}
              setOpen={setDesktopOpen}
              dropdownRef={desktopRef}
              togglePage={togglePage}
            />
          </div>

          {/* MOBILE ICONS */}
          <div className="flex md:hidden items-center gap-4 text-green-900">

            {/* MOBILE SEARCH BUTTON */}
            <TopIcon
              icon={<FiSearch />}
              label="Search"
              onClick={() => setShowMobileSearch(prev => !prev)}
            />

            <TopIcon icon={<FiHeart />} label="Wishlist" />
            <TopIcon icon={<FiUser />} label="Account" onClick={() => togglePage("login")} />

            <DropdownMobile
              open={mobileOpen}
              setOpen={setMobileOpen}
              dropdownRef={mobileRef}
              togglePage={togglePage}
            />
          </div>
        </div>
      </header>

      {/* MOBILE SEARCH BAR FULL WIDTH */}
      {showMobileSearch && (
        <div className="w-full bg-white shadow-lg px-4 py-3 md:hidden">
          <div className="flex items-center gap-3 border border-green-300 rounded-full px-4 py-2">
            <FiSearch className="text-green-800 text-xl" />
            <input
              type="text"
              placeholder="Search products…"
              className="w-full bg-transparent outline-none text-gray-700"
            />
          </div>
        </div>
      )}
    </>
  );
};

/* ================= ICONS & DROPDOWNS ================= */

const DesktopIcon = ({ icon, label, onClick }) => (
  <div className="group relative cursor-pointer" onClick={onClick}>
    <div className="w-12 h-12 rounded-full bg-white border border-green-300 flex items-center justify-center shadow hover:bg-green-200 transition">
      {icon}
    </div>
    <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 bg-[#0d8061] text-white px-2 py-1 text-xs rounded-full opacity-0 group-hover:opacity-100 transition">
      {label}
    </span>
  </div>
);

const TopIcon = ({ icon, label, onClick }) => (
  <div className="group relative cursor-pointer" onClick={onClick}>
    <div className="w-9 h-9 rounded-full bg-white border border-green-300 flex items-center justify-center shadow hover:bg-green-200 transition">
      {icon}
    </div>
    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 bg-[#0d8061] text-white px-2 py-1 text-xs rounded-full opacity-0 group-hover:opacity-100 transition">
      {label}
    </span>
  </div>
);

const DropdownDesktop = ({ open, setOpen, dropdownRef, togglePage }) => (
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setOpen(!open)}
      className="w-12 h-12 rounded-full bg-white border border-green-300 flex items-center justify-center shadow hover:bg-green-200 transition"
    >
      <FiChevronDown className={`text-green-900 text-2xl transition-transform ${open ? "rotate-180" : ""}`} />
    </button>

    <div
      className={`absolute right-0 w-48 bg-white border shadow-xl rounded-xl py-3 transition-all origin-top z-[999] ${
        open ? "scale-100 opacity-100 translate-y-2" : "scale-90 opacity-0 pointer-events-none"
      }`}
      style={{ top: "52px" }}   // ⭐ FIXED POSITION, NO STATE, NO WARNINGS
    >
      <DropdownItem icon={<FiInfo />} label="About Us" onClick={() => { togglePage("about"); setOpen(false); }} />
      <DropdownItem icon={<FiPhoneCall />} label="Contact" onClick={() => { togglePage("contact"); setOpen(false); }} />
    </div>
  </div>
);

const DropdownMobile = ({ open, setOpen, dropdownRef, togglePage }) => (
  <div className="relative" ref={dropdownRef}>
    <button
      onClick={() => setOpen(!open)}
      className="w-9 h-9 rounded-full bg-white border border-green-300 flex items-center justify-center shadow hover:bg-green-200 transition"
    >
      <FiChevronDown className={`text-green-900 text-xl transition-transform ${open ? "rotate-180" : ""}`} />
    </button>

    <div
      className={`absolute right-0 w-44 bg-white border shadow-xl rounded-xl py-3 transition-all z-[999] ${
        open ? "scale-100 opacity-100 translate-y-2" : "scale-90 opacity-0 pointer-events-none"
      }`}
      style={{ top: "52px" }}   // ⭐ SAME HERE
    >
      <DropdownItem icon={<FiInfo />} label="About Us" onClick={() => { togglePage("about"); setOpen(false); }} />
      <DropdownItem icon={<FiPhoneCall />} label="Contact" onClick={() => { togglePage("contact"); setOpen(false); }} />
    </div>
  </div>
);

const DropdownItem = ({ icon, label, onClick }) => (
  <div className="flex items-center gap-3 px-4 py-2 text-sm hover:bg-green-100 cursor-pointer" onClick={onClick}>
    {icon} {label}
  </div>
);

export default Navbar;
