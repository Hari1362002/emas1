// src/pages/Home.jsx
import React, { useState } from "react";

import AboutSection from "../components/AboutSection";
import TermsSection from "../components/TermsSection";
import PrivacySection from "../components/PrivacySection";
import RulesSection from "../components/RulesSection";
import CodeOfEthicsSection from "../components/CodeOfEthicsSection";
import LoftyGoalSection from "../components/LoftyGoalSection";
import ContactSection from "../components/ContactSection";
import LoginSection from "../components/LoginSection";
import ForgotPasswordSection from "../components/ForgotPasswordSection";
import Footer from "../components/EmasHome/Footer";
import * as EmasHome from "../components/EmasHome";

const Home = () => {

  // ⭐ SINGLE STATE FOR PAGE SWITCH
  const [activePage, setActivePage] = useState(null);

  // ⭐ SWITCH PAGE HANDLER
  const togglePage = (page) => {
    setActivePage(prev => (prev === page ? null : page));
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const hideHome = activePage !== null;

  return (
    <div className="bg-[#F8FFF4] w-full overflow-x-hidden pt-24">

      {/* NAVBAR */}
      <EmasHome.Navbar
        activePage={activePage}
        togglePage={togglePage}
      />

      {/* HOME CONTENT (hidden when page open) */}
      {!hideHome && (
        <div className="animate-fadeIn">
          <EmasHome.HeroSlider />
          <EmasHome.CustomerMessage />
          <EmasHome.CategoryGrid />
          <EmasHome.ProductGrid />
          <EmasHome.DealersPackage />
          <EmasHome.AboutQuality />
          <EmasHome.SecondSlider />
          <EmasHome.Certifications />
          <EmasHome.Benefits />
          <EmasHome.SignupBar />
        </div>
      )}

      {/* PAGE SECTIONS */}
      {activePage === "about" && <AboutSection />}
      {activePage === "terms" && <TermsSection />}
      {activePage === "privacy" && <PrivacySection />}
      {activePage === "rules" && <RulesSection />}
      {activePage === "ethics" && <CodeOfEthicsSection />}
      {activePage === "lofty" && <LoftyGoalSection />}
      {activePage === "contact" && <ContactSection />}

      {/* LOGIN PAGE (IMPORTANT → PASS togglePage) */}
      {activePage === "login" && (
        <LoginSection togglePage={togglePage} />
      )}

      {/* FORGOT PASSWORD PAGE */}
      {activePage === "forgot" && (
        <ForgotPasswordSection togglePage={togglePage} />
      )}

      {/* FOOTER */}
      <Footer
        activePage={activePage}
        togglePage={togglePage}
      />

    </div>
  );
};

export default Home;
