import React, { useEffect } from "react";
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaGlobe } from "react-icons/fa";

const ContactSection = () => {

  // 🔥 Auto-scroll to top when ContactSection loads
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <section className="w-full px-4 sm:px-6 md:px-10 py-16 bg-[#FFF8E3] relative">

      {/* Background Pattern (same style as AboutSection) */}
      <div
        className="absolute inset-0 opacity-[0.05] pointer-events-none
        bg-[url('https://www.transparenttextures.com/patterns/sandpaper.png')]"
      >
      </div>

      <div className="relative max-w-7xl mx-auto">

        {/* Header Tag */}
        <p
          className="
            inline-block uppercase tracking-[0.30em]
            text-[#0d8061] text-[13px] md:text-sm font-bold
            bg-gradient-to-r from-[#f5e6a1] to-[#ffe9b7]
            px-7 py-2 rounded-full mb-4
            border border-[#d8c26e]/40 shadow-sm
          "
        >
          CONTACT EMAS
        </p>

        {/* Title */}
        <h2
          className="
            text-3xl md:text-4xl font-extrabold text-[#0F3E2D]
            leading-snug mb-12
          "
        >
          We’d Love to Hear From You
        </h2>

        {/* MAIN GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14">

          {/* LEFT PANEL */}
          <div
            className="
              bg-[#FBE7A1]/90 backdrop-blur-xl
              p-6 sm:p-8 rounded-3xl shadow-xl
              border border-yellow-300
            "
          >
            <h3 className="text-2xl font-bold text-[#0F3E2D] mb-6">Contact Details</h3>

            {/* CONTACT ITEM COMPONENT */}
            {[
              {
                icon: <FaMapMarkerAlt className="text-[#0d8061] mt-1" />,
                title: "Register Office",
                content: `Old No. 225 New No.218, First Floor,
Thambu Chetty Street, Parry’s, Chennai – 600001`,
              },
              {
                icon: <FaMapMarkerAlt className="text-[#0d8061] mt-1" />,
                title: "Admin & Factory",
                content: `No.639/1B 641/1A, M.P. Thottam,
Natham Main Road, Koovanaootthu,
Dindigul – 624304, Tamilnadu`,
              },
              {
                icon: <FaPhone className="text-[#0d8061] mt-1" />,
                title: "Toll Free",
                content: `1800 - 102 - 2358`,
              },
              {
                icon: <FaPhone className="text-[#0d8061] mt-1" />,
                title: "Customer Care",
                content: `+91 9043222888`,
              },
              {
                icon: <FaPhone className="text-[#0d8061] mt-1" />,
                title: "Call",
                content: `+91 9003307773
+91 9043222888
+91 9543602535
+91 9994641928`,
              },
              {
                icon: <FaEnvelope className="text-[#0d8061] mt-1" />,
                title: "Write Us",
                content: `info@myemas.in
info@emasindia.com`,
              },
              {
                icon: <FaGlobe className="text-[#0d8061] mt-1" />,
                title: "Website",
                content: `www.myemas.in
www.emasindia.com`,
              },
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3 mb-5">
                {item.icon}
                <div>
                  <p className="font-semibold text-[#0F3E2D]">{item.title}</p>
                  <p className="text-gray-700 text-sm whitespace-pre-line">
                    {item.content}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT PANEL - FORM */}
          <div
            className="
              bg-[#FFF1C9]/90 backdrop-blur-xl
              p-6 sm:p-8 rounded-3xl shadow-xl
              border border-yellow-300
            "
          >
            <h3 className="text-2xl font-bold text-[#0F3E2D] mb-6">Send a Message</h3>

            <form className="space-y-5">

              {/* ROW 1 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Enter your name"
                  className="p-3 text-sm w-full border rounded-lg focus:border-[#0d8061] outline-none bg-white"
                />
                <input
                  type="email"
                  placeholder="Enter your Email"
                  className="p-3 text-sm w-full border rounded-lg focus:border-[#0d8061] outline-none bg-white"
                />
              </div>

              {/* ROW 2 */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input
                  type="text"
                  placeholder="Contact No"
                  className="p-3 text-sm w-full border rounded-lg focus:border-[#0d8061] outline-none bg-white"
                />
                <input
                  type="text"
                  placeholder="Skype / Gtalk ID"
                  className="p-3 text-sm w-full border rounded-lg focus:border-[#0d8061] outline-none bg-white"
                />
              </div>

              {/* MESSAGE */}
              <textarea
                placeholder="Message"
                rows="5"
                className="p-3 text-sm w-full border rounded-lg focus:border-[#0d8061] outline-none bg-white"
              ></textarea>

              <button
                type="submit"
                className="bg-[#0d8061] text-white w-full sm:w-auto px-8 py-3 rounded-lg shadow-md hover:bg-[#0a6b51] transition"
              >
                Submit
              </button>
            </form>

          </div>

        </div>
      </div>
    </section>
  );
};

export default ContactSection;
