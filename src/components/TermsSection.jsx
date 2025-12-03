// src/components/TermsSection.jsx
import React, { useEffect } from "react";

const TermsSection = () => {

  // Auto scroll to top when opened
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-6 py-20 bg-[#F8FFF4] relative">
      
      {/* Soft Leaf Background */}
      <div className="absolute inset-0 opacity-[0.05] pointer-events-none 
        bg-[url('https://www.transparenttextures.com/patterns/leaf.png')]">
      </div>

      <div className="relative max-w-6xl mx-auto">

        {/* Header Tag */}
        <p className="
          inline-block uppercase tracking-[0.30em]
          text-[#0d8061] text-[13px] md:text-sm font-bold
          bg-gradient-to-r from-[#E6FFF5] to-white
          px-7 py-2 rounded-full mb-6
          border border-[#0d8061]/20 shadow-sm
        ">
          TERMS & CONDITIONS
        </p>

        {/* Page Title */}
        <h2 className="text-3xl md:text-4xl font-extrabold text-[#0F3E2D] mb-12">
          EMAS & OORI – Terms & Conditions
        </h2>

        {/* Terms Block */}
        <div className="
          bg-white/90 backdrop-blur-xl
          border border-gray-200 shadow-xl
          p-8 md:p-10 rounded-3xl
          space-y-6 leading-relaxed text-gray-700 text-[15.5px]
        ">
          
          <p>
            Welcome to EMAS & OORI. By accessing or using our website, you agree to comply
            with these Terms and Conditions along with our Privacy, Shipping, and Refund
            Policies. Any changes to these Terms become effective immediately once posted.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Eligibility</h3>
          <p>
            You must have legal contractual capacity under the Indian Contract Act, 1872.
            Minors must use the website under parental or guardian supervision.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">
            Registration and Personal Information
          </h3>
          <p>
            You may be required to provide personal details (name, email, address, etc.)
            for account creation and order processing. We do not store credit/debit card
            details. Promotional messages are optional.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Order Placement</h3>
          <p>
            Orders may be placed through our website or customer service. You are
            responsible for protecting your account information. Product descriptions are
            intended to be accurate, but we do not guarantee error-free listings.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Product Orders & Pricing</h3>
          <p>
            Placing an order is an offer to purchase under listed terms. We may refuse
            orders due to unavailability or incorrect pricing. Prices and stock may change
            without notice.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Website Use</h3>
          <p>
            You may use the site for non-commercial purposes only. Posting harmful content,
            sharing false information, or misuse of the website may lead to account
            termination. Product colors and descriptions may vary.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Payment Security</h3>
          <p>
            You are responsible for securing your payment details. We are not liable for
            unauthorized use of cards or payment information.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Order Cancellation</h3>
          <p>
            Orders cannot be cancelled once placed. After dispatch, no changes are allowed.
            Please refer to our Refund Policy for more details.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Shipping & Delivery</h3>
          <p>
            Delivery timelines are estimates and may vary. Responsibility for the order
            transfers once delivered to your city by private courier partners.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Intellectual Property</h3>
          <p>
            All website content, trademarks, and images are legally protected. They may not
            be reused or reproduced without written permission.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Termination</h3>
          <p>
            We may terminate access to the website at any time without prior notice. You may
            terminate by discontinuing usage.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Legal</h3>
          <p>
            All disputes fall under the jurisdiction of Dindigul, Tamil Nadu, India. If any
            portion of this agreement is invalid, the remainder will remain enforceable.
          </p>

          {/* SECTION TITLE */}
          <h3 className="text-xl font-bold text-[#0F3E2D] mt-6">Modifications</h3>
          <p>
            EMAS & OORI may revise these Terms at any time. Continued use of the website
            indicates your acceptance of updated Terms.
          </p>

        </div>

      </div>
    </section>
  );
};

export default TermsSection;
