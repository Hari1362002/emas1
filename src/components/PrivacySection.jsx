// src/components/PrivacySection.jsx
import React, { useEffect } from "react";

const PrivacySection = () => {

  // Auto scroll to top when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">

      {/* Soft Background Pattern */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header Tag */}
        <p className="
          inline-block uppercase tracking-[0.30em]
          text-[#0d8061] text-xs md:text-sm font-bold
          bg-gradient-to-r from-[#E6FFF5] to-[#FFFFFF]
          px-7 py-2 rounded-full mb-4
          border border-[#0d8061]/20 shadow-sm
        ">
          PRIVACY POLICY
        </p>

        {/* Main Title */}
        <h2 className="
          text-3xl md:text-4xl font-extrabold text-[#0F3E2D]
          leading-snug mb-12
        ">
          Your Privacy Is Important to Us
        </h2>

        {/* MAIN CONTENT */}
        <div
          className="
            p-8 md:p-10 rounded-3xl
            bg-white/90 backdrop-blur-xl
            border border-gray-200 shadow-xl
            leading-relaxed space-y-6 text-[15.5px]
          "
        >

          <p className="text-gray-700 leading-[1.9]">
            Welcome to EMAS & OORI! This Privacy Policy outlines our commitment 
            to protecting your privacy and explains how we collect, use, and 
            safeguard your personal information. By accessing our Website and 
            using our services, you agree to the terms of this Privacy Policy.
          </p>

          {/* Information We Collect */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Information We Collect</h3>
          <p className="text-gray-700 leading-[1.9]">
            During your interaction with our Website, we may collect personal details
            such as:
            <br /><br />
            Name, Email, Mobile Number, Address, Gender, Date of Birth,  
            Username/Password, Shipping Details, and browsing activity such as 
            pages visited and links clicked.
            <br /><br />
            We may also receive updated delivery information from courier partners.
          </p>

          {/* How We Use Information */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">How We Use Your Information</h3>
          <ul className="list-disc ml-6 text-gray-700 leading-[1.9] space-y-2">
            <li>Registering your account</li>
            <li>Verifying your identity</li>
            <li>Processing transactions and payments</li>
            <li>Communicating with you</li>
            <li>Sending promotional offers</li>
            <li>Improving website experience</li>
            <li>Personalising recommendations</li>
            <li>Displaying interest-based advertisements</li>
          </ul>

          <p className="text-gray-700">
            We use strong security measures, but no online transmission is 100% secure.
          </p>

          {/* Sharing Information */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Sharing Your Information</h3>
          <p className="text-gray-700 leading-[1.9]">
            We do NOT sell your personal data.  
            We may share your information:
          </p>
          <ul className="list-disc ml-6 text-gray-700 leading-[1.9] space-y-2">
            <li>With business partners to fulfil your orders</li>
            <li>With payment gateway providers</li>
            <li>For legal requirements</li>
            <li>With your consent</li>
            <li>For fraud prevention and legal defense</li>
          </ul>

          {/* Children */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Children’s Privacy</h3>
          <p className="text-gray-700 leading-[1.9]">
            We do not knowingly collect information from children under 18 without 
            parental consent.
          </p>

          {/* Updating Information */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Updating Your Information</h3>
          <p className="text-gray-700 leading-[1.9]">
            You may update your information via the Website or by contacting:
            <br />
            <strong>Email:</strong> info@myemas.in
          </p>

          {/* Contact */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Contact Us</h3>
          <p className="text-gray-700 leading-[1.9]">
            📞 9043222888, 9003307773  
            <br />
            📧 info@myemas.in
          </p>

          {/* Policy Changes */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Changes to This Privacy Policy</h3>
          <p className="text-gray-700 leading-[1.9]">
            We may update this policy at any time without notice. Continued use 
            of the website indicates your acceptance of any changes.
          </p>

          {/* Legal */}
          <h3 className="text-xl font-semibold text-[#0F3E2D]">Legal</h3>
          <p className="text-gray-700 leading-[1.9]">
            All disputes shall be governed by the laws of Dindigul, Tamil Nadu, India.
            If any part of this Policy is found invalid, the rest shall remain fully valid.
          </p>

        </div>
      </div>
    </section>
  );
};

export default PrivacySection;
